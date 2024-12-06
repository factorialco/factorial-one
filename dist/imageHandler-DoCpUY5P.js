import { jsxs as nt, jsx as Y, Fragment as fv } from "react/jsx-runtime";
import * as V from "react";
import k, { createContext as Rr, useContext as tr, useState as ln, useCallback as pi, useEffect as zn, useRef as Rn, useImperativeHandle as U1, forwardRef as Nn, useMemo as ns, isValidElement as qr, Children as Yi, PureComponent as Nr, cloneElement as At, createElement as H1, Component as G1, useLayoutEffect as dv } from "react";
import * as hv from "react-dom";
import { createPortal as ek } from "react-dom";
function K1(e) {
  var t, r, n = "";
  if (typeof e == "string" || typeof e == "number") n += e;
  else if (typeof e == "object") if (Array.isArray(e)) for (t = 0; t < e.length; t++) e[t] && (r = K1(e[t])) && (n && (n += " "), n += r);
  else for (t in e) e[t] && (n && (n += " "), n += t);
  return n;
}
function tk() {
  for (var e, t, r = 0, n = ""; r < arguments.length; ) (e = arguments[r++]) && (t = K1(e)) && (n && (n += " "), n += t);
  return n;
}
const db = (e) => typeof e == "boolean" ? "".concat(e) : e === 0 ? "0" : e, hb = tk, wi = (e, t) => (r) => {
  var n;
  if ((t == null ? void 0 : t.variants) == null) return hb(e, r == null ? void 0 : r.class, r == null ? void 0 : r.className);
  const { variants: i, defaultVariants: a } = t, u = Object.keys(i).map((f) => {
    const d = r == null ? void 0 : r[f], h = a == null ? void 0 : a[f];
    if (d === null) return null;
    const v = db(d) || db(h);
    return i[f][v];
  }), c = r && Object.entries(r).reduce((f, d) => {
    let [h, v] = d;
    return v === void 0 || (f[h] = v), f;
  }, {}), l = t == null || (n = t.compoundVariants) === null || n === void 0 ? void 0 : n.reduce((f, d) => {
    let { class: h, className: v, ...g } = d;
    return Object.entries(g).every((x) => {
      let [y, w] = x;
      return Array.isArray(w) ? w.includes({
        ...a,
        ...c
      }[y]) : {
        ...a,
        ...c
      }[y] === w;
    }) ? [
      ...f,
      h,
      v
    ] : f;
  }, []);
  return hb(e, u, l, r == null ? void 0 : r.class, r == null ? void 0 : r.className);
}, pv = Rr({ enabled: !1, enable: () => null, disable: () => null, filter: [] }), xne = ({
  children: e
}) => {
  const [t, r] = ln(!1), [n, i] = ln([]), a = pi(
    (c) => {
      i(
        c || [...pb].filter((l) => l !== "layout")
      ), r(!0);
    },
    [i, r]
  ), u = pi(() => r(!1), [r]);
  return zn(() => {
    window.XRay = {
      enable: a,
      disable: u
    };
  }, [a, u]), /* @__PURE__ */ nt(pv.Provider, { value: { enabled: t, enable: a, disable: u, filter: n }, children: [
    e,
    t && typeof document < "u" && ek(
      /* @__PURE__ */ nt("div", { className: "bg-white fixed right-2 top-2 z-50 flex flex-col space-y-2 rounded-2xs border-solid border-f1-border p-4 opacity-80 shadow-md", children: [
        /* @__PURE__ */ Y("div", { className: "text-md z-50 font-semibold", children: "XRay" }),
        /* @__PURE__ */ Y("div", { className: "flex flex-col space-y-2", children: pb.map((c) => /* @__PURE__ */ nt("label", { className: "block", children: [
          /* @__PURE__ */ Y(
            "input",
            {
              onChange: (l) => l.target.checked ? i([...n, c]) : i(n.filter((f) => f !== c)),
              type: "checkbox",
              checked: n.includes(c),
              className: "mr-2"
            }
          ),
          c
        ] }, c)) })
      ] }),
      document == null ? void 0 : document.body
    )
  ] });
}, rk = wi(
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
), nk = wi(
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
), ik = (e, t) => {
  const { enabled: r, filter: n } = V.useContext(pv), i = Rn(null);
  U1(t, () => i.current);
  const a = r && !e.internal, u = typeof document < "u" ? document.body : null;
  return zn(() => {
    if (!a || !i.current || !n.includes(e.type)) return;
    const c = i.current;
    c.dataset.componentName = e.name;
    let l = null, f = null;
    if (u) {
      const d = c.getBoundingClientRect(), { top: h, left: v, width: g, height: x } = d;
      l = document.createElement("div"), l.className = rk({ type: e.type }), l.style.top = `${h}px`, l.style.left = `${v}px`, l.style.width = `${g}px`, l.style.height = `${x}px`, f = document.createElement("div"), f.className = nk({ type: e.type }), f.style.top = `${h}px`, f.style.left = `${v}px`, f.innerText = e.name, u.appendChild(f), u.appendChild(l);
    }
    return () => {
      l && (u == null || u.removeChild(l)), f && (u == null || u.removeChild(f));
    };
  }, [a, e.name, e.type, n, u]), {
    ref: i,
    enabled: r
  };
}, wne = () => tr(pv), pb = ["layout", "info", "action", "form"], ak = (e, t) => {
  const r = Nn((n, i) => {
    const { ref: a } = ik(e, i);
    return /* @__PURE__ */ Y(t, { ref: a, ...n });
  });
  return r.displayName = `${e.name}`, r;
};
function q1(e) {
  var t, r, n = "";
  if (typeof e == "string" || typeof e == "number") n += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var i = e.length;
    for (t = 0; t < i; t++) e[t] && (r = q1(e[t])) && (n && (n += " "), n += r);
  } else for (r in e) e[r] && (n && (n += " "), n += r);
  return n;
}
function Me() {
  for (var e, t, r = 0, n = "", i = arguments.length; r < i; r++) (e = arguments[r]) && (t = q1(e)) && (n && (n += " "), n += t);
  return n;
}
const vv = "-", ok = (e) => {
  const t = sk(e), {
    conflictingClassGroups: r,
    conflictingClassGroupModifiers: n
  } = e;
  return {
    getClassGroupId: (u) => {
      const c = u.split(vv);
      return c[0] === "" && c.length !== 1 && c.shift(), V1(c, t) || uk(u);
    },
    getConflictingClassGroupIds: (u, c) => {
      const l = r[u] || [];
      return c && n[u] ? [...l, ...n[u]] : l;
    }
  };
}, V1 = (e, t) => {
  var u;
  if (e.length === 0)
    return t.classGroupId;
  const r = e[0], n = t.nextPart.get(r), i = n ? V1(e.slice(1), n) : void 0;
  if (i)
    return i;
  if (t.validators.length === 0)
    return;
  const a = e.join(vv);
  return (u = t.validators.find(({
    validator: c
  }) => c(a))) == null ? void 0 : u.classGroupId;
}, vb = /^\[(.+)\]$/, uk = (e) => {
  if (vb.test(e)) {
    const t = vb.exec(e)[1], r = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (r)
      return "arbitrary.." + r;
  }
}, sk = (e) => {
  const {
    theme: t,
    prefix: r
  } = e, n = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  return lk(Object.entries(e.classGroups), r).forEach(([a, u]) => {
    Th(u, n, a, t);
  }), n;
}, Th = (e, t, r, n) => {
  e.forEach((i) => {
    if (typeof i == "string") {
      const a = i === "" ? t : gb(t, i);
      a.classGroupId = r;
      return;
    }
    if (typeof i == "function") {
      if (ck(i)) {
        Th(i(n), t, r, n);
        return;
      }
      t.validators.push({
        validator: i,
        classGroupId: r
      });
      return;
    }
    Object.entries(i).forEach(([a, u]) => {
      Th(u, gb(t, a), r, n);
    });
  });
}, gb = (e, t) => {
  let r = e;
  return t.split(vv).forEach((n) => {
    r.nextPart.has(n) || r.nextPart.set(n, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), r = r.nextPart.get(n);
  }), r;
}, ck = (e) => e.isThemeGetter, lk = (e, t) => t ? e.map(([r, n]) => {
  const i = n.map((a) => typeof a == "string" ? t + a : typeof a == "object" ? Object.fromEntries(Object.entries(a).map(([u, c]) => [t + u, c])) : a);
  return [r, i];
}) : e, fk = (e) => {
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
}, Y1 = "!", dk = (e) => {
  const {
    separator: t,
    experimentalParseClassName: r
  } = e, n = t.length === 1, i = t[0], a = t.length, u = (c) => {
    const l = [];
    let f = 0, d = 0, h;
    for (let w = 0; w < c.length; w++) {
      let A = c[w];
      if (f === 0) {
        if (A === i && (n || c.slice(w, w + a) === t)) {
          l.push(c.slice(d, w)), d = w + a;
          continue;
        }
        if (A === "/") {
          h = w;
          continue;
        }
      }
      A === "[" ? f++ : A === "]" && f--;
    }
    const v = l.length === 0 ? c : c.substring(d), g = v.startsWith(Y1), x = g ? v.substring(1) : v, y = h && h > d ? h - d : void 0;
    return {
      modifiers: l,
      hasImportantModifier: g,
      baseClassName: x,
      maybePostfixModifierPosition: y
    };
  };
  return r ? (c) => r({
    className: c,
    parseClassName: u
  }) : u;
}, hk = (e) => {
  if (e.length <= 1)
    return e;
  const t = [];
  let r = [];
  return e.forEach((n) => {
    n[0] === "[" ? (t.push(...r.sort(), n), r = []) : r.push(n);
  }), t.push(...r.sort()), t;
}, pk = (e) => ({
  cache: fk(e.cacheSize),
  parseClassName: dk(e),
  ...ok(e)
}), vk = /\s+/, gk = (e, t) => {
  const {
    parseClassName: r,
    getClassGroupId: n,
    getConflictingClassGroupIds: i
  } = t, a = [], u = e.trim().split(vk);
  let c = "";
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
        c = f + (c.length > 0 ? " " + c : c);
        continue;
      }
      if (y = n(v), !y) {
        c = f + (c.length > 0 ? " " + c : c);
        continue;
      }
      x = !1;
    }
    const w = hk(d).join(":"), A = h ? w + Y1 : w, O = A + y;
    if (a.includes(O))
      continue;
    a.push(O);
    const S = i(y, x);
    for (let _ = 0; _ < S.length; ++_) {
      const b = S[_];
      a.push(A + b);
    }
    c = f + (c.length > 0 ? " " + c : c);
  }
  return c;
};
function yk() {
  let e = 0, t, r, n = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (r = X1(t)) && (n && (n += " "), n += r);
  return n;
}
const X1 = (e) => {
  if (typeof e == "string")
    return e;
  let t, r = "";
  for (let n = 0; n < e.length; n++)
    e[n] && (t = X1(e[n])) && (r && (r += " "), r += t);
  return r;
};
function mk(e, ...t) {
  let r, n, i, a = u;
  function u(l) {
    const f = t.reduce((d, h) => h(d), e());
    return r = pk(f), n = r.cache.get, i = r.cache.set, a = c, c(l);
  }
  function c(l) {
    const f = n(l);
    if (f)
      return f;
    const d = gk(l, r);
    return i(l, d), d;
  }
  return function() {
    return a(yk.apply(null, arguments));
  };
}
const ut = (e) => {
  const t = (r) => r[e] || [];
  return t.isThemeGetter = !0, t;
}, Z1 = /^\[(?:([a-z-]+):)?(.+)\]$/i, bk = /^\d+\/\d+$/, xk = /* @__PURE__ */ new Set(["px", "full", "screen"]), wk = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, _k = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, Ok = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, Ak = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, Sk = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, Pn = (e) => ja(e) || xk.has(e) || bk.test(e), oi = (e) => lo(e, "length", kk), ja = (e) => !!e && !Number.isNaN(Number(e)), zd = (e) => lo(e, "number", ja), Yo = (e) => !!e && Number.isInteger(Number(e)), Pk = (e) => e.endsWith("%") && ja(e.slice(0, -1)), ke = (e) => Z1.test(e), ui = (e) => wk.test(e), Ek = /* @__PURE__ */ new Set(["length", "size", "percentage"]), Tk = (e) => lo(e, Ek, J1), $k = (e) => lo(e, "position", J1), Ck = /* @__PURE__ */ new Set(["image", "url"]), Mk = (e) => lo(e, Ck, Rk), Ik = (e) => lo(e, "", jk), Xo = () => !0, lo = (e, t, r) => {
  const n = Z1.exec(e);
  return n ? n[1] ? typeof t == "string" ? n[1] === t : t.has(n[1]) : r(n[2]) : !1;
}, kk = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  _k.test(e) && !Ok.test(e)
), J1 = () => !1, jk = (e) => Ak.test(e), Rk = (e) => Sk.test(e), Nk = () => {
  const e = ut("colors"), t = ut("spacing"), r = ut("blur"), n = ut("brightness"), i = ut("borderColor"), a = ut("borderRadius"), u = ut("borderSpacing"), c = ut("borderWidth"), l = ut("contrast"), f = ut("grayscale"), d = ut("hueRotate"), h = ut("invert"), v = ut("gap"), g = ut("gradientColorStops"), x = ut("gradientColorStopPositions"), y = ut("inset"), w = ut("margin"), A = ut("opacity"), O = ut("padding"), S = ut("saturate"), _ = ut("scale"), b = ut("sepia"), E = ut("skew"), C = ut("space"), M = ut("translate"), F = () => ["auto", "contain", "none"], D = () => ["auto", "hidden", "clip", "visible", "scroll"], B = () => ["auto", ke, t], N = () => [ke, t], U = () => ["", Pn, oi], z = () => ["auto", ja, ke], J = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], H = () => ["solid", "dashed", "dotted", "double", "none"], Z = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], K = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], ue = () => ["", "0", ke], G = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], X = () => [ja, ke];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [Xo],
      spacing: [Pn, oi],
      blur: ["none", "", ui, ke],
      brightness: X(),
      borderColor: [e],
      borderRadius: ["none", "", "full", ui, ke],
      borderSpacing: N(),
      borderWidth: U(),
      contrast: X(),
      grayscale: ue(),
      hueRotate: X(),
      invert: ue(),
      gap: N(),
      gradientColorStops: [e],
      gradientColorStopPositions: [Pk, oi],
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
        columns: [ui]
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
          screen: [ui]
        }, ui]
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
        "line-clamp": ["none", ja, zd]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", Pn, ke]
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
        decoration: ["auto", "from-font", Pn, oi]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", Pn, ke]
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
        bg: [...J(), $k]
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
        bg: ["auto", "cover", "contain", Tk]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, Mk]
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
        border: [c]
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": [c]
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": [c]
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": [c]
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": [c]
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": [c]
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": [c]
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": [c]
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": [c]
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
        "divide-x": [c]
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
        "divide-y": [c]
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
        "outline-offset": [Pn, ke]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [Pn, oi]
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
        "ring-offset": [Pn, oi]
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
        shadow: ["", "inner", "none", ui, Ik]
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
        "drop-shadow": ["", "none", ui, ke]
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
        sepia: [b]
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
        "backdrop-sepia": [b]
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
        stroke: [Pn, oi, zd]
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
}, Dk = /* @__PURE__ */ mk(Nk);
function Ht(...e) {
  return Dk(Me(e));
}
function Lk(e) {
  return Ht(
    "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-f1-ring focus-visible:ring-offset-1",
    e
  );
}
const yb = wi("inline-block shrink-0", {
  variants: {
    size: {
      lg: "w-6 [&_circle]:stroke-lg [&_path]:stroke-lg [&_rect]:stroke-lg",
      md: "w-5 [&_circle]:stroke-md [&_path]:stroke-md [&_rect]:stroke-md",
      sm: "w-4 [&_circle]:stroke-sm [&_path]:stroke-sm [&_rect]:stroke-sm"
    }
  },
  defaultVariants: {
    size: "md"
  }
}), Q1 = Nn(function({ size: t, icon: r, state: n = "normal", className: i, ...a }, u) {
  var f;
  if (!r) return null;
  const c = r;
  return ((f = r.displayName) == null ? void 0 : f.includes("Animated")) ? /* @__PURE__ */ Y(
    c,
    {
      ref: u,
      ...a,
      animate: n,
      className: Ht(yb({ size: t }), "select-none", i)
    }
  ) : /* @__PURE__ */ Y(
    c,
    {
      ref: u,
      ...a,
      className: Ht("aspect-square", yb({ size: t }), i)
    }
  );
}), Bk = (e, t) => /* @__PURE__ */ nt("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: [
  /* @__PURE__ */ Y("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M10 5H8C6.34315 5 5 6.34315 5 8V16C5 17.6569 6.34315 19 8 19H16C17.6569 19 19 17.6569 19 16V13.5", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ Y("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M12.5 11.5L20 4M20 4H15.5M20 4V8.5", vectorEffect: "non-scaling-stroke" })
] }), _ne = Nn(Bk), e_ = Rr(void 0), One = ({ children: e, component: t, currentPath: r }) => /* @__PURE__ */ Y(e_.Provider, { value: { component: t, currentPath: r }, children: e }), t_ = () => {
  const e = tr(e_);
  return {
    controller: () => ({}),
    ...e
  };
};
function cc(e) {
  return e.endsWith("/") ? e.slice(0, -1) : e;
}
const Fk = () => {
  const { currentPath: e } = t_(), t = pi(
    (r, { exact: n = !1 } = { exact: !1 }) => e === void 0 || r === void 0 ? !1 : n ? cc(e) === cc(r) : `${cc(e)}/`.startsWith(
      `${cc(r)}/`
    ),
    [e]
  );
  return {
    currentPath: e,
    isActive: t
  };
}, Ane = Nn(
  function(t, r) {
    const { component: n } = t_(), { isActive: i } = Fk(), a = {
      "data-is-active": i(t.href, { exact: t.exactMatch }),
      ...t
    }, u = ns(
      () => Nn(function(l, f) {
        return n ? n(l, f) : /* @__PURE__ */ Y("a", { ref: f, ...l });
      }),
      [n]
    );
    return /* @__PURE__ */ Y(u, { ref: r, ...a });
  }
);
function Wk(e, t) {
  typeof e == "function" ? e(t) : e != null && (e.current = t);
}
function r_(...e) {
  return (t) => e.forEach((r) => Wk(r, t));
}
function ia(...e) {
  return V.useCallback(r_(...e), e);
}
var gv = V.forwardRef((e, t) => {
  const { children: r, ...n } = e, i = V.Children.toArray(r), a = i.find(zk);
  if (a) {
    const u = a.props.children, c = i.map((l) => l === a ? V.Children.count(u) > 1 ? V.Children.only(null) : V.isValidElement(u) ? u.props.children : null : l);
    return /* @__PURE__ */ Y($h, { ...n, ref: t, children: V.isValidElement(u) ? V.cloneElement(u, void 0, c) : null });
  }
  return /* @__PURE__ */ Y($h, { ...n, ref: t, children: r });
});
gv.displayName = "Slot";
var $h = V.forwardRef((e, t) => {
  const { children: r, ...n } = e;
  if (V.isValidElement(r)) {
    const i = Hk(r);
    return V.cloneElement(r, {
      ...Uk(n, r.props),
      // @ts-ignore
      ref: t ? r_(t, i) : i
    });
  }
  return V.Children.count(r) > 1 ? V.Children.only(null) : null;
});
$h.displayName = "SlotClone";
var n_ = ({ children: e }) => /* @__PURE__ */ Y(fv, { children: e });
function zk(e) {
  return V.isValidElement(e) && e.type === n_;
}
function Uk(e, t) {
  const r = { ...t };
  for (const n in t) {
    const i = e[n], a = t[n];
    /^on[A-Z]/.test(n) ? i && a ? r[n] = (...c) => {
      a(...c), i(...c);
    } : i && (r[n] = i) : n === "style" ? r[n] = { ...i, ...a } : n === "className" && (r[n] = [i, a].filter(Boolean).join(" "));
  }
  return { ...e, ...r };
}
function Hk(e) {
  var n, i;
  let t = (n = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : n.get, r = t && "isReactWarning" in t && t.isReactWarning;
  return r ? e.ref : (t = (i = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : i.get, r = t && "isReactWarning" in t && t.isReactWarning, r ? e.props.ref : e.props.ref || e.ref);
}
const Gk = wi(
  Ht(
    "group inline-flex items-center justify-center gap-1 whitespace-nowrap rounded-md border-none text-base font-medium transition-colors disabled:pointer-events-none disabled:opacity-50",
    Lk()
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
), i_ = V.forwardRef(
  ({ className: e, round: t, variant: r, size: n, asChild: i = !1, ...a }, u) => /* @__PURE__ */ Y(
    i ? gv : "button",
    {
      className: Ht(Gk({ variant: r, size: n, round: t }), e),
      ref: u,
      ...a
    }
  )
);
i_.displayName = "Button";
const Kk = wi("-ml-0.5 transition-colors", {
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
}), qk = wi("transition-colors", {
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
}), Sne = Nn(function({
  label: t,
  hideLabel: r,
  onClick: n,
  disabled: i,
  loading: a,
  icon: u,
  variant: c = "default",
  size: l = "md",
  ...f
}, d) {
  const [h, v] = ln(!1);
  return /* @__PURE__ */ nt(
    i_,
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
      variant: c,
      size: l,
      round: r,
      ...f,
      children: [
        u && /* @__PURE__ */ Y(
          Q1,
          {
            size: l === "sm" ? "sm" : "md",
            icon: u,
            className: r ? qk({ variant: c }) : Kk({ variant: c })
          }
        ),
        !r && t
      ]
    }
  );
}), a_ = Rr({
  enabled: !1,
  enable: () => null,
  disable: () => null,
  toggle: () => null
}), Pne = ({ initiallyEnabled: e = !1, children: t }) => {
  const [r, n] = ln(e), i = pi(() => {
    n(!0);
  }, []), a = pi(() => n(!1), []), u = pi(() => n((c) => !c), []);
  return /* @__PURE__ */ Y(a_.Provider, { value: { enable: i, disable: a, toggle: u, enabled: r }, children: t });
}, Vk = () => {
  const e = tr(a_);
  if (!e)
    throw "usePrivacyMode requires wrapping the component in a PrivacyModeProvider";
  return e;
};
var pr = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Je(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Yk = Array.isArray, rr = Yk, Xk = typeof pr == "object" && pr && pr.Object === Object && pr, o_ = Xk, Zk = o_, Jk = typeof self == "object" && self && self.Object === Object && self, Qk = Zk || Jk || Function("return this")(), hn = Qk, ej = hn, tj = ej.Symbol, is = tj, mb = is, u_ = Object.prototype, rj = u_.hasOwnProperty, nj = u_.toString, Zo = mb ? mb.toStringTag : void 0;
function ij(e) {
  var t = rj.call(e, Zo), r = e[Zo];
  try {
    e[Zo] = void 0;
    var n = !0;
  } catch {
  }
  var i = nj.call(e);
  return n && (t ? e[Zo] = r : delete e[Zo]), i;
}
var aj = ij, oj = Object.prototype, uj = oj.toString;
function sj(e) {
  return uj.call(e);
}
var cj = sj, bb = is, lj = aj, fj = cj, dj = "[object Null]", hj = "[object Undefined]", xb = bb ? bb.toStringTag : void 0;
function pj(e) {
  return e == null ? e === void 0 ? hj : dj : xb && xb in Object(e) ? lj(e) : fj(e);
}
var Un = pj;
function vj(e) {
  return e != null && typeof e == "object";
}
var Hn = vj, gj = Un, yj = Hn, mj = "[object Symbol]";
function bj(e) {
  return typeof e == "symbol" || yj(e) && gj(e) == mj;
}
var fo = bj, xj = rr, wj = fo, _j = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Oj = /^\w*$/;
function Aj(e, t) {
  if (xj(e))
    return !1;
  var r = typeof e;
  return r == "number" || r == "symbol" || r == "boolean" || e == null || wj(e) ? !0 : Oj.test(e) || !_j.test(e) || t != null && e in Object(t);
}
var yv = Aj;
function Sj(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var _i = Sj;
const ho = /* @__PURE__ */ Je(_i);
var Pj = Un, Ej = _i, Tj = "[object AsyncFunction]", $j = "[object Function]", Cj = "[object GeneratorFunction]", Mj = "[object Proxy]";
function Ij(e) {
  if (!Ej(e))
    return !1;
  var t = Pj(e);
  return t == $j || t == Cj || t == Tj || t == Mj;
}
var mv = Ij;
const Pe = /* @__PURE__ */ Je(mv);
var kj = hn, jj = kj["__core-js_shared__"], Rj = jj, Ud = Rj, wb = function() {
  var e = /[^.]+$/.exec(Ud && Ud.keys && Ud.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function Nj(e) {
  return !!wb && wb in e;
}
var Dj = Nj, Lj = Function.prototype, Bj = Lj.toString;
function Fj(e) {
  if (e != null) {
    try {
      return Bj.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var s_ = Fj, Wj = mv, zj = Dj, Uj = _i, Hj = s_, Gj = /[\\^$.*+?()[\]{}|]/g, Kj = /^\[object .+?Constructor\]$/, qj = Function.prototype, Vj = Object.prototype, Yj = qj.toString, Xj = Vj.hasOwnProperty, Zj = RegExp(
  "^" + Yj.call(Xj).replace(Gj, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Jj(e) {
  if (!Uj(e) || zj(e))
    return !1;
  var t = Wj(e) ? Zj : Kj;
  return t.test(Hj(e));
}
var Qj = Jj;
function eR(e, t) {
  return e == null ? void 0 : e[t];
}
var tR = eR, rR = Qj, nR = tR;
function iR(e, t) {
  var r = nR(e, t);
  return rR(r) ? r : void 0;
}
var aa = iR, aR = aa, oR = aR(Object, "create"), kl = oR, _b = kl;
function uR() {
  this.__data__ = _b ? _b(null) : {}, this.size = 0;
}
var sR = uR;
function cR(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var lR = cR, fR = kl, dR = "__lodash_hash_undefined__", hR = Object.prototype, pR = hR.hasOwnProperty;
function vR(e) {
  var t = this.__data__;
  if (fR) {
    var r = t[e];
    return r === dR ? void 0 : r;
  }
  return pR.call(t, e) ? t[e] : void 0;
}
var gR = vR, yR = kl, mR = Object.prototype, bR = mR.hasOwnProperty;
function xR(e) {
  var t = this.__data__;
  return yR ? t[e] !== void 0 : bR.call(t, e);
}
var wR = xR, _R = kl, OR = "__lodash_hash_undefined__";
function AR(e, t) {
  var r = this.__data__;
  return this.size += this.has(e) ? 0 : 1, r[e] = _R && t === void 0 ? OR : t, this;
}
var SR = AR, PR = sR, ER = lR, TR = gR, $R = wR, CR = SR;
function po(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
po.prototype.clear = PR;
po.prototype.delete = ER;
po.prototype.get = TR;
po.prototype.has = $R;
po.prototype.set = CR;
var MR = po;
function IR() {
  this.__data__ = [], this.size = 0;
}
var kR = IR;
function jR(e, t) {
  return e === t || e !== e && t !== t;
}
var bv = jR, RR = bv;
function NR(e, t) {
  for (var r = e.length; r--; )
    if (RR(e[r][0], t))
      return r;
  return -1;
}
var jl = NR, DR = jl, LR = Array.prototype, BR = LR.splice;
function FR(e) {
  var t = this.__data__, r = DR(t, e);
  if (r < 0)
    return !1;
  var n = t.length - 1;
  return r == n ? t.pop() : BR.call(t, r, 1), --this.size, !0;
}
var WR = FR, zR = jl;
function UR(e) {
  var t = this.__data__, r = zR(t, e);
  return r < 0 ? void 0 : t[r][1];
}
var HR = UR, GR = jl;
function KR(e) {
  return GR(this.__data__, e) > -1;
}
var qR = KR, VR = jl;
function YR(e, t) {
  var r = this.__data__, n = VR(r, e);
  return n < 0 ? (++this.size, r.push([e, t])) : r[n][1] = t, this;
}
var XR = YR, ZR = kR, JR = WR, QR = HR, e3 = qR, t3 = XR;
function vo(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
vo.prototype.clear = ZR;
vo.prototype.delete = JR;
vo.prototype.get = QR;
vo.prototype.has = e3;
vo.prototype.set = t3;
var Rl = vo, r3 = aa, n3 = hn, i3 = r3(n3, "Map"), xv = i3, Ob = MR, a3 = Rl, o3 = xv;
function u3() {
  this.size = 0, this.__data__ = {
    hash: new Ob(),
    map: new (o3 || a3)(),
    string: new Ob()
  };
}
var s3 = u3;
function c3(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
var l3 = c3, f3 = l3;
function d3(e, t) {
  var r = e.__data__;
  return f3(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
}
var Nl = d3, h3 = Nl;
function p3(e) {
  var t = h3(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
var v3 = p3, g3 = Nl;
function y3(e) {
  return g3(this, e).get(e);
}
var m3 = y3, b3 = Nl;
function x3(e) {
  return b3(this, e).has(e);
}
var w3 = x3, _3 = Nl;
function O3(e, t) {
  var r = _3(this, e), n = r.size;
  return r.set(e, t), this.size += r.size == n ? 0 : 1, this;
}
var A3 = O3, S3 = s3, P3 = v3, E3 = m3, T3 = w3, $3 = A3;
function go(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
go.prototype.clear = S3;
go.prototype.delete = P3;
go.prototype.get = E3;
go.prototype.has = T3;
go.prototype.set = $3;
var wv = go, c_ = wv, C3 = "Expected a function";
function _v(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(C3);
  var r = function() {
    var n = arguments, i = t ? t.apply(this, n) : n[0], a = r.cache;
    if (a.has(i))
      return a.get(i);
    var u = e.apply(this, n);
    return r.cache = a.set(i, u) || a, u;
  };
  return r.cache = new (_v.Cache || c_)(), r;
}
_v.Cache = c_;
var l_ = _v;
const M3 = /* @__PURE__ */ Je(l_);
var I3 = l_, k3 = 500;
function j3(e) {
  var t = I3(e, function(n) {
    return r.size === k3 && r.clear(), n;
  }), r = t.cache;
  return t;
}
var R3 = j3, N3 = R3, D3 = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, L3 = /\\(\\)?/g, B3 = N3(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(D3, function(r, n, i, a) {
    t.push(i ? a.replace(L3, "$1") : n || r);
  }), t;
}), F3 = B3;
function W3(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length, i = Array(n); ++r < n; )
    i[r] = t(e[r], r, e);
  return i;
}
var Ov = W3, Ab = is, z3 = Ov, U3 = rr, H3 = fo, G3 = 1 / 0, Sb = Ab ? Ab.prototype : void 0, Pb = Sb ? Sb.toString : void 0;
function f_(e) {
  if (typeof e == "string")
    return e;
  if (U3(e))
    return z3(e, f_) + "";
  if (H3(e))
    return Pb ? Pb.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -G3 ? "-0" : t;
}
var K3 = f_, q3 = K3;
function V3(e) {
  return e == null ? "" : q3(e);
}
var d_ = V3, Y3 = rr, X3 = yv, Z3 = F3, J3 = d_;
function Q3(e, t) {
  return Y3(e) ? e : X3(e, t) ? [e] : Z3(J3(e));
}
var h_ = Q3, eN = fo, tN = 1 / 0;
function rN(e) {
  if (typeof e == "string" || eN(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -tN ? "-0" : t;
}
var Dl = rN, nN = h_, iN = Dl;
function aN(e, t) {
  t = nN(t, e);
  for (var r = 0, n = t.length; e != null && r < n; )
    e = e[iN(t[r++])];
  return r && r == n ? e : void 0;
}
var Av = aN, oN = Av;
function uN(e, t, r) {
  var n = e == null ? void 0 : oN(e, t);
  return n === void 0 ? r : n;
}
var p_ = uN;
const gr = /* @__PURE__ */ Je(p_);
function sN(e) {
  return e == null;
}
var cN = sN;
const Te = /* @__PURE__ */ Je(cN);
var lN = Un, fN = rr, dN = Hn, hN = "[object String]";
function pN(e) {
  return typeof e == "string" || !fN(e) && dN(e) && lN(e) == hN;
}
var vN = pN;
const as = /* @__PURE__ */ Je(vN);
var Ch = { exports: {} }, Ke = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Eb;
function gN() {
  if (Eb) return Ke;
  Eb = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, a = e ? Symbol.for("react.profiler") : 60114, u = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, f = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, h = e ? Symbol.for("react.suspense") : 60113, v = e ? Symbol.for("react.suspense_list") : 60120, g = e ? Symbol.for("react.memo") : 60115, x = e ? Symbol.for("react.lazy") : 60116, y = e ? Symbol.for("react.block") : 60121, w = e ? Symbol.for("react.fundamental") : 60117, A = e ? Symbol.for("react.responder") : 60118, O = e ? Symbol.for("react.scope") : 60119;
  function S(b) {
    if (typeof b == "object" && b !== null) {
      var E = b.$$typeof;
      switch (E) {
        case t:
          switch (b = b.type, b) {
            case l:
            case f:
            case n:
            case a:
            case i:
            case h:
              return b;
            default:
              switch (b = b && b.$$typeof, b) {
                case c:
                case d:
                case x:
                case g:
                case u:
                  return b;
                default:
                  return E;
              }
          }
        case r:
          return E;
      }
    }
  }
  function _(b) {
    return S(b) === f;
  }
  return Ke.AsyncMode = l, Ke.ConcurrentMode = f, Ke.ContextConsumer = c, Ke.ContextProvider = u, Ke.Element = t, Ke.ForwardRef = d, Ke.Fragment = n, Ke.Lazy = x, Ke.Memo = g, Ke.Portal = r, Ke.Profiler = a, Ke.StrictMode = i, Ke.Suspense = h, Ke.isAsyncMode = function(b) {
    return _(b) || S(b) === l;
  }, Ke.isConcurrentMode = _, Ke.isContextConsumer = function(b) {
    return S(b) === c;
  }, Ke.isContextProvider = function(b) {
    return S(b) === u;
  }, Ke.isElement = function(b) {
    return typeof b == "object" && b !== null && b.$$typeof === t;
  }, Ke.isForwardRef = function(b) {
    return S(b) === d;
  }, Ke.isFragment = function(b) {
    return S(b) === n;
  }, Ke.isLazy = function(b) {
    return S(b) === x;
  }, Ke.isMemo = function(b) {
    return S(b) === g;
  }, Ke.isPortal = function(b) {
    return S(b) === r;
  }, Ke.isProfiler = function(b) {
    return S(b) === a;
  }, Ke.isStrictMode = function(b) {
    return S(b) === i;
  }, Ke.isSuspense = function(b) {
    return S(b) === h;
  }, Ke.isValidElementType = function(b) {
    return typeof b == "string" || typeof b == "function" || b === n || b === f || b === a || b === i || b === h || b === v || typeof b == "object" && b !== null && (b.$$typeof === x || b.$$typeof === g || b.$$typeof === u || b.$$typeof === c || b.$$typeof === d || b.$$typeof === w || b.$$typeof === A || b.$$typeof === O || b.$$typeof === y);
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
var Tb;
function yN() {
  return Tb || (Tb = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, a = e ? Symbol.for("react.profiler") : 60114, u = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, f = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, h = e ? Symbol.for("react.suspense") : 60113, v = e ? Symbol.for("react.suspense_list") : 60120, g = e ? Symbol.for("react.memo") : 60115, x = e ? Symbol.for("react.lazy") : 60116, y = e ? Symbol.for("react.block") : 60121, w = e ? Symbol.for("react.fundamental") : 60117, A = e ? Symbol.for("react.responder") : 60118, O = e ? Symbol.for("react.scope") : 60119;
    function S(j) {
      return typeof j == "string" || typeof j == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      j === n || j === f || j === a || j === i || j === h || j === v || typeof j == "object" && j !== null && (j.$$typeof === x || j.$$typeof === g || j.$$typeof === u || j.$$typeof === c || j.$$typeof === d || j.$$typeof === w || j.$$typeof === A || j.$$typeof === O || j.$$typeof === y);
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
                  case c:
                  case d:
                  case x:
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
    var b = l, E = f, C = c, M = u, F = t, D = d, B = n, N = x, U = g, z = r, J = a, H = i, Z = h, K = !1;
    function ue(j) {
      return K || (K = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), G(j) || _(j) === l;
    }
    function G(j) {
      return _(j) === f;
    }
    function X(j) {
      return _(j) === c;
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
      return _(j) === x;
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
    qe.AsyncMode = b, qe.ConcurrentMode = E, qe.ContextConsumer = C, qe.ContextProvider = M, qe.Element = F, qe.ForwardRef = D, qe.Fragment = B, qe.Lazy = N, qe.Memo = U, qe.Portal = z, qe.Profiler = J, qe.StrictMode = H, qe.Suspense = Z, qe.isAsyncMode = ue, qe.isConcurrentMode = G, qe.isContextConsumer = X, qe.isContextProvider = ae, qe.isElement = ce, qe.isForwardRef = he, qe.isFragment = ge, qe.isLazy = xe, qe.isMemo = ye, qe.isPortal = we, qe.isProfiler = ne, qe.isStrictMode = se, qe.isSuspense = pe, qe.isValidElementType = S, qe.typeOf = _;
  }()), qe;
}
process.env.NODE_ENV === "production" ? Ch.exports = gN() : Ch.exports = yN();
var Mh = Ch.exports, mN = Un, bN = Hn, xN = "[object Number]";
function wN(e) {
  return typeof e == "number" || bN(e) && mN(e) == xN;
}
var v_ = wN;
const _N = /* @__PURE__ */ Je(v_);
var ON = v_;
function AN(e) {
  return ON(e) && e != +e;
}
var SN = AN;
const yo = /* @__PURE__ */ Je(SN);
var Gt = function(t) {
  return t === 0 ? 0 : t > 0 ? 1 : -1;
}, Hi = function(t) {
  return as(t) && t.indexOf("%") === t.length - 1;
}, oe = function(t) {
  return _N(t) && !yo(t);
}, Et = function(t) {
  return oe(t) || as(t);
}, PN = 0, oa = function(t) {
  var r = ++PN;
  return "".concat(t || "").concat(r);
}, Kt = function(t, r) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0, i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
  if (!oe(t) && !as(t))
    return n;
  var a;
  if (Hi(t)) {
    var u = t.indexOf("%");
    a = r * parseFloat(t.slice(0, u)) / 100;
  } else
    a = +t;
  return yo(a) && (a = n), i && a > r && (a = r), a;
}, fi = function(t) {
  if (!t)
    return null;
  var r = Object.keys(t);
  return r && r.length ? t[r[0]] : null;
}, EN = function(t) {
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
function $c(e, t, r) {
  return !e || !e.length ? null : e.find(function(n) {
    return n && (typeof t == "function" ? t(n) : gr(n, t)) === r;
  });
}
function Ra(e, t) {
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r) && (!{}.hasOwnProperty.call(t, r) || e[r] !== t[r]))
      return !1;
  for (var n in t)
    if ({}.hasOwnProperty.call(t, n) && !{}.hasOwnProperty.call(e, n))
      return !1;
  return !0;
}
function Ih(e) {
  "@babel/helpers - typeof";
  return Ih = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ih(e);
}
var TN = ["viewBox", "children"], $N = [
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
], $b = ["points", "pathLength"], Hd = {
  svg: TN,
  polygon: $b,
  polyline: $b
}, Sv = ["dangerouslySetInnerHTML", "onCopy", "onCopyCapture", "onCut", "onCutCapture", "onPaste", "onPasteCapture", "onCompositionEnd", "onCompositionEndCapture", "onCompositionStart", "onCompositionStartCapture", "onCompositionUpdate", "onCompositionUpdateCapture", "onFocus", "onFocusCapture", "onBlur", "onBlurCapture", "onChange", "onChangeCapture", "onBeforeInput", "onBeforeInputCapture", "onInput", "onInputCapture", "onReset", "onResetCapture", "onSubmit", "onSubmitCapture", "onInvalid", "onInvalidCapture", "onLoad", "onLoadCapture", "onError", "onErrorCapture", "onKeyDown", "onKeyDownCapture", "onKeyPress", "onKeyPressCapture", "onKeyUp", "onKeyUpCapture", "onAbort", "onAbortCapture", "onCanPlay", "onCanPlayCapture", "onCanPlayThrough", "onCanPlayThroughCapture", "onDurationChange", "onDurationChangeCapture", "onEmptied", "onEmptiedCapture", "onEncrypted", "onEncryptedCapture", "onEnded", "onEndedCapture", "onLoadedData", "onLoadedDataCapture", "onLoadedMetadata", "onLoadedMetadataCapture", "onLoadStart", "onLoadStartCapture", "onPause", "onPauseCapture", "onPlay", "onPlayCapture", "onPlaying", "onPlayingCapture", "onProgress", "onProgressCapture", "onRateChange", "onRateChangeCapture", "onSeeked", "onSeekedCapture", "onSeeking", "onSeekingCapture", "onStalled", "onStalledCapture", "onSuspend", "onSuspendCapture", "onTimeUpdate", "onTimeUpdateCapture", "onVolumeChange", "onVolumeChangeCapture", "onWaiting", "onWaitingCapture", "onAuxClick", "onAuxClickCapture", "onClick", "onClickCapture", "onContextMenu", "onContextMenuCapture", "onDoubleClick", "onDoubleClickCapture", "onDrag", "onDragCapture", "onDragEnd", "onDragEndCapture", "onDragEnter", "onDragEnterCapture", "onDragExit", "onDragExitCapture", "onDragLeave", "onDragLeaveCapture", "onDragOver", "onDragOverCapture", "onDragStart", "onDragStartCapture", "onDrop", "onDropCapture", "onMouseDown", "onMouseDownCapture", "onMouseEnter", "onMouseLeave", "onMouseMove", "onMouseMoveCapture", "onMouseOut", "onMouseOutCapture", "onMouseOver", "onMouseOverCapture", "onMouseUp", "onMouseUpCapture", "onSelect", "onSelectCapture", "onTouchCancel", "onTouchCancelCapture", "onTouchEnd", "onTouchEndCapture", "onTouchMove", "onTouchMoveCapture", "onTouchStart", "onTouchStartCapture", "onPointerDown", "onPointerDownCapture", "onPointerMove", "onPointerMoveCapture", "onPointerUp", "onPointerUpCapture", "onPointerCancel", "onPointerCancelCapture", "onPointerEnter", "onPointerEnterCapture", "onPointerLeave", "onPointerLeaveCapture", "onPointerOver", "onPointerOverCapture", "onPointerOut", "onPointerOutCapture", "onGotPointerCapture", "onGotPointerCaptureCapture", "onLostPointerCapture", "onLostPointerCaptureCapture", "onScroll", "onScrollCapture", "onWheel", "onWheelCapture", "onAnimationStart", "onAnimationStartCapture", "onAnimationEnd", "onAnimationEndCapture", "onAnimationIteration", "onAnimationIterationCapture", "onTransitionEnd", "onTransitionEndCapture"], Cc = function(t, r) {
  if (!t || typeof t == "function" || typeof t == "boolean")
    return null;
  var n = t;
  if (/* @__PURE__ */ qr(t) && (n = t.props), !ho(n))
    return null;
  var i = {};
  return Object.keys(n).forEach(function(a) {
    Sv.includes(a) && (i[a] = r || function(u) {
      return n[a](n, u);
    });
  }), i;
}, CN = function(t, r, n) {
  return function(i) {
    return t(r, n, i), null;
  };
}, Qi = function(t, r, n) {
  if (!ho(t) || Ih(t) !== "object")
    return null;
  var i = null;
  return Object.keys(t).forEach(function(a) {
    var u = t[a];
    Sv.includes(a) && typeof u == "function" && (i || (i = {}), i[a] = CN(u, r, n));
  }), i;
}, MN = ["children"], IN = ["children"];
function Cb(e, t) {
  if (e == null) return {};
  var r = kN(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function kN(e, t) {
  if (e == null) return {};
  var r = {}, n = Object.keys(e), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
function kh(e) {
  "@babel/helpers - typeof";
  return kh = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, kh(e);
}
var Mb = {
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
}, In = function(t) {
  return typeof t == "string" ? t : t ? t.displayName || t.name || "Component" : "";
}, Ib = null, Gd = null, Pv = function e(t) {
  if (t === Ib && Array.isArray(Gd))
    return Gd;
  var r = [];
  return Yi.forEach(t, function(n) {
    Te(n) || (Mh.isFragment(n) ? r = r.concat(e(n.props.children)) : r.push(n));
  }), Gd = r, Ib = t, r;
};
function yr(e, t) {
  var r = [], n = [];
  return Array.isArray(t) ? n = t.map(function(i) {
    return In(i);
  }) : n = [In(t)], Pv(e).forEach(function(i) {
    var a = gr(i, "type.displayName") || gr(i, "type.name");
    n.indexOf(a) !== -1 && r.push(i);
  }), r;
}
function dr(e, t) {
  var r = yr(e, t);
  return r && r[0];
}
var kb = function(t) {
  if (!t || !t.props)
    return !1;
  var r = t.props, n = r.width, i = r.height;
  return !(!oe(n) || n <= 0 || !oe(i) || i <= 0);
}, jN = ["a", "altGlyph", "altGlyphDef", "altGlyphItem", "animate", "animateColor", "animateMotion", "animateTransform", "circle", "clipPath", "color-profile", "cursor", "defs", "desc", "ellipse", "feBlend", "feColormatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence", "filter", "font", "font-face", "font-face-format", "font-face-name", "font-face-url", "foreignObject", "g", "glyph", "glyphRef", "hkern", "image", "line", "lineGradient", "marker", "mask", "metadata", "missing-glyph", "mpath", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "script", "set", "stop", "style", "svg", "switch", "symbol", "text", "textPath", "title", "tref", "tspan", "use", "view", "vkern"], RN = function(t) {
  return t && t.type && as(t.type) && jN.indexOf(t.type) >= 0;
}, g_ = function(t) {
  return t && kh(t) === "object" && "cx" in t && "cy" in t && "r" in t;
}, NN = function(t, r, n, i) {
  var a, u = (a = Hd == null ? void 0 : Hd[i]) !== null && a !== void 0 ? a : [];
  return !Pe(t) && (i && u.includes(r) || $N.includes(r)) || n && Sv.includes(r);
}, me = function(t, r, n) {
  if (!t || typeof t == "function" || typeof t == "boolean")
    return null;
  var i = t;
  if (/* @__PURE__ */ qr(t) && (i = t.props), !ho(i))
    return null;
  var a = {};
  return Object.keys(i).forEach(function(u) {
    var c;
    NN((c = i) === null || c === void 0 ? void 0 : c[u], u, r, n) && (a[u] = i[u]);
  }), a;
}, jh = function e(t, r) {
  if (t === r)
    return !0;
  var n = Yi.count(t);
  if (n !== Yi.count(r))
    return !1;
  if (n === 0)
    return !0;
  if (n === 1)
    return jb(Array.isArray(t) ? t[0] : t, Array.isArray(r) ? r[0] : r);
  for (var i = 0; i < n; i++) {
    var a = t[i], u = r[i];
    if (Array.isArray(a) || Array.isArray(u)) {
      if (!e(a, u))
        return !1;
    } else if (!jb(a, u))
      return !1;
  }
  return !0;
}, jb = function(t, r) {
  if (Te(t) && Te(r))
    return !0;
  if (!Te(t) && !Te(r)) {
    var n = t.props || {}, i = n.children, a = Cb(n, MN), u = r.props || {}, c = u.children, l = Cb(u, IN);
    return i && c ? Ra(a, l) && jh(i, c) : !i && !c ? Ra(a, l) : !1;
  }
  return !1;
}, Rb = function(t, r) {
  var n = [], i = {};
  return Pv(t).forEach(function(a, u) {
    if (RN(a))
      n.push(a);
    else if (a) {
      var c = In(a.type), l = r[c] || {}, f = l.handler, d = l.once;
      if (f && (!d || !i[c])) {
        var h = f(a, c, u);
        n.push(h), i[c] = !0;
      }
    }
  }), n;
}, DN = function(t) {
  var r = t && t.type;
  return r && Mb[r] ? Mb[r] : null;
}, LN = function(t, r) {
  return Pv(r).indexOf(t);
}, BN = ["children", "width", "height", "viewBox", "className", "style", "title", "desc"];
function Rh() {
  return Rh = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Rh.apply(this, arguments);
}
function FN(e, t) {
  if (e == null) return {};
  var r = WN(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function WN(e, t) {
  if (e == null) return {};
  var r = {}, n = Object.keys(e), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
function Nh(e) {
  var t = e.children, r = e.width, n = e.height, i = e.viewBox, a = e.className, u = e.style, c = e.title, l = e.desc, f = FN(e, BN), d = i || {
    width: r,
    height: n,
    x: 0,
    y: 0
  }, h = Me("recharts-surface", a);
  return /* @__PURE__ */ k.createElement("svg", Rh({}, me(f, !0, "svg"), {
    className: h,
    width: r,
    height: n,
    style: u,
    viewBox: "".concat(d.x, " ").concat(d.y, " ").concat(d.width, " ").concat(d.height)
  }), /* @__PURE__ */ k.createElement("title", null, c), /* @__PURE__ */ k.createElement("desc", null, l), t);
}
var zN = ["children", "className"];
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
var Le = /* @__PURE__ */ k.forwardRef(function(e, t) {
  var r = e.children, n = e.className, i = UN(e, zN), a = Me("recharts-layer", n);
  return /* @__PURE__ */ k.createElement("g", Dh({
    className: a
  }, me(i, !0), {
    ref: t
  }), r);
}), GN = process.env.NODE_ENV !== "production", Vr = function(t, r) {
  for (var n = arguments.length, i = new Array(n > 2 ? n - 2 : 0), a = 2; a < n; a++)
    i[a - 2] = arguments[a];
  if (GN && typeof console < "u" && console.warn && (r === void 0 && console.warn("LogUtils requires an error message argument"), !t))
    if (r === void 0)
      console.warn("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
    else {
      var u = 0;
      console.warn(r.replace(/%s/g, function() {
        return i[u++];
      }));
    }
};
function KN(e, t, r) {
  var n = -1, i = e.length;
  t < 0 && (t = -t > i ? 0 : i + t), r = r > i ? i : r, r < 0 && (r += i), i = t > r ? 0 : r - t >>> 0, t >>>= 0;
  for (var a = Array(i); ++n < i; )
    a[n] = e[n + t];
  return a;
}
var qN = KN, VN = qN;
function YN(e, t, r) {
  var n = e.length;
  return r = r === void 0 ? n : r, !t && r >= n ? e : VN(e, t, r);
}
var XN = YN, ZN = "\\ud800-\\udfff", JN = "\\u0300-\\u036f", QN = "\\ufe20-\\ufe2f", eD = "\\u20d0-\\u20ff", tD = JN + QN + eD, rD = "\\ufe0e\\ufe0f", nD = "\\u200d", iD = RegExp("[" + nD + ZN + tD + rD + "]");
function aD(e) {
  return iD.test(e);
}
var y_ = aD;
function oD(e) {
  return e.split("");
}
var uD = oD, m_ = "\\ud800-\\udfff", sD = "\\u0300-\\u036f", cD = "\\ufe20-\\ufe2f", lD = "\\u20d0-\\u20ff", fD = sD + cD + lD, dD = "\\ufe0e\\ufe0f", hD = "[" + m_ + "]", Lh = "[" + fD + "]", Bh = "\\ud83c[\\udffb-\\udfff]", pD = "(?:" + Lh + "|" + Bh + ")", b_ = "[^" + m_ + "]", x_ = "(?:\\ud83c[\\udde6-\\uddff]){2}", w_ = "[\\ud800-\\udbff][\\udc00-\\udfff]", vD = "\\u200d", __ = pD + "?", O_ = "[" + dD + "]?", gD = "(?:" + vD + "(?:" + [b_, x_, w_].join("|") + ")" + O_ + __ + ")*", yD = O_ + __ + gD, mD = "(?:" + [b_ + Lh + "?", Lh, x_, w_, hD].join("|") + ")", bD = RegExp(Bh + "(?=" + Bh + ")|" + mD + yD, "g");
function xD(e) {
  return e.match(bD) || [];
}
var wD = xD, _D = uD, OD = y_, AD = wD;
function SD(e) {
  return OD(e) ? AD(e) : _D(e);
}
var PD = SD, ED = XN, TD = y_, $D = PD, CD = d_;
function MD(e) {
  return function(t) {
    t = CD(t);
    var r = TD(t) ? $D(t) : void 0, n = r ? r[0] : t.charAt(0), i = r ? ED(r, 1).join("") : t.slice(1);
    return n[e]() + i;
  };
}
var ID = MD, kD = ID, jD = kD("toUpperCase"), RD = jD;
const Ll = /* @__PURE__ */ Je(RD);
function rt(e) {
  return function() {
    return e;
  };
}
const A_ = Math.cos, Mc = Math.sin, Qr = Math.sqrt, Ic = Math.PI, Bl = 2 * Ic, Fh = Math.PI, Wh = 2 * Fh, Fi = 1e-6, ND = Wh - Fi;
function S_(e) {
  this._ += e[0];
  for (let t = 1, r = e.length; t < r; ++t)
    this._ += arguments[t] + e[t];
}
function DD(e) {
  let t = Math.floor(e);
  if (!(t >= 0)) throw new Error(`invalid digits: ${e}`);
  if (t > 15) return S_;
  const r = 10 ** t;
  return function(n) {
    this._ += n[0];
    for (let i = 1, a = n.length; i < a; ++i)
      this._ += Math.round(arguments[i] * r) / r + n[i];
  };
}
class LD {
  constructor(t) {
    this._x0 = this._y0 = // start of current subpath
    this._x1 = this._y1 = null, this._ = "", this._append = t == null ? S_ : DD(t);
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
    let u = this._x1, c = this._y1, l = n - t, f = i - r, d = u - t, h = c - r, v = d * d + h * h;
    if (this._x1 === null)
      this._append`M${this._x1 = t},${this._y1 = r}`;
    else if (v > Fi) if (!(Math.abs(h * l - f * d) > Fi) || !a)
      this._append`L${this._x1 = t},${this._y1 = r}`;
    else {
      let g = n - u, x = i - c, y = l * l + f * f, w = g * g + x * x, A = Math.sqrt(y), O = Math.sqrt(v), S = a * Math.tan((Fh - Math.acos((y + v - w) / (2 * A * O))) / 2), _ = S / O, b = S / A;
      Math.abs(_ - 1) > Fi && this._append`L${t + _ * d},${r + _ * h}`, this._append`A${a},${a},0,0,${+(h * g > d * x)},${this._x1 = t + b * l},${this._y1 = r + b * f}`;
    }
  }
  arc(t, r, n, i, a, u) {
    if (t = +t, r = +r, n = +n, u = !!u, n < 0) throw new Error(`negative radius: ${n}`);
    let c = n * Math.cos(i), l = n * Math.sin(i), f = t + c, d = r + l, h = 1 ^ u, v = u ? i - a : a - i;
    this._x1 === null ? this._append`M${f},${d}` : (Math.abs(this._x1 - f) > Fi || Math.abs(this._y1 - d) > Fi) && this._append`L${f},${d}`, n && (v < 0 && (v = v % Wh + Wh), v > ND ? this._append`A${n},${n},0,1,${h},${t - c},${r - l}A${n},${n},0,1,${h},${this._x1 = f},${this._y1 = d}` : v > Fi && this._append`A${n},${n},0,${+(v >= Fh)},${h},${this._x1 = t + n * Math.cos(a)},${this._y1 = r + n * Math.sin(a)}`);
  }
  rect(t, r, n, i) {
    this._append`M${this._x0 = this._x1 = +t},${this._y0 = this._y1 = +r}h${n = +n}v${+i}h${-n}Z`;
  }
  toString() {
    return this._;
  }
}
function Ev(e) {
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
  }, () => new LD(t);
}
function Tv(e) {
  return typeof e == "object" && "length" in e ? e : Array.from(e);
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
function Fl(e) {
  return new P_(e);
}
function E_(e) {
  return e[0];
}
function T_(e) {
  return e[1];
}
function $_(e, t) {
  var r = rt(!0), n = null, i = Fl, a = null, u = Ev(c);
  e = typeof e == "function" ? e : e === void 0 ? E_ : rt(e), t = typeof t == "function" ? t : t === void 0 ? T_ : rt(t);
  function c(l) {
    var f, d = (l = Tv(l)).length, h, v = !1, g;
    for (n == null && (a = i(g = u())), f = 0; f <= d; ++f)
      !(f < d && r(h = l[f], f, l)) === v && ((v = !v) ? a.lineStart() : a.lineEnd()), v && a.point(+e(h, f, l), +t(h, f, l));
    if (g) return a = null, g + "" || null;
  }
  return c.x = function(l) {
    return arguments.length ? (e = typeof l == "function" ? l : rt(+l), c) : e;
  }, c.y = function(l) {
    return arguments.length ? (t = typeof l == "function" ? l : rt(+l), c) : t;
  }, c.defined = function(l) {
    return arguments.length ? (r = typeof l == "function" ? l : rt(!!l), c) : r;
  }, c.curve = function(l) {
    return arguments.length ? (i = l, n != null && (a = i(n)), c) : i;
  }, c.context = function(l) {
    return arguments.length ? (l == null ? n = a = null : a = i(n = l), c) : n;
  }, c;
}
function lc(e, t, r) {
  var n = null, i = rt(!0), a = null, u = Fl, c = null, l = Ev(f);
  e = typeof e == "function" ? e : e === void 0 ? E_ : rt(+e), t = typeof t == "function" ? t : rt(t === void 0 ? 0 : +t), r = typeof r == "function" ? r : r === void 0 ? T_ : rt(+r);
  function f(h) {
    var v, g, x, y = (h = Tv(h)).length, w, A = !1, O, S = new Array(y), _ = new Array(y);
    for (a == null && (c = u(O = l())), v = 0; v <= y; ++v) {
      if (!(v < y && i(w = h[v], v, h)) === A)
        if (A = !A)
          g = v, c.areaStart(), c.lineStart();
        else {
          for (c.lineEnd(), c.lineStart(), x = v - 1; x >= g; --x)
            c.point(S[x], _[x]);
          c.lineEnd(), c.areaEnd();
        }
      A && (S[v] = +e(w, v, h), _[v] = +t(w, v, h), c.point(n ? +n(w, v, h) : S[v], r ? +r(w, v, h) : _[v]));
    }
    if (O) return c = null, O + "" || null;
  }
  function d() {
    return $_().defined(i).curve(u).context(a);
  }
  return f.x = function(h) {
    return arguments.length ? (e = typeof h == "function" ? h : rt(+h), n = null, f) : e;
  }, f.x0 = function(h) {
    return arguments.length ? (e = typeof h == "function" ? h : rt(+h), f) : e;
  }, f.x1 = function(h) {
    return arguments.length ? (n = h == null ? null : typeof h == "function" ? h : rt(+h), f) : n;
  }, f.y = function(h) {
    return arguments.length ? (t = typeof h == "function" ? h : rt(+h), r = null, f) : t;
  }, f.y0 = function(h) {
    return arguments.length ? (t = typeof h == "function" ? h : rt(+h), f) : t;
  }, f.y1 = function(h) {
    return arguments.length ? (r = h == null ? null : typeof h == "function" ? h : rt(+h), f) : r;
  }, f.lineX0 = f.lineY0 = function() {
    return d().x(e).y(t);
  }, f.lineY1 = function() {
    return d().x(e).y(r);
  }, f.lineX1 = function() {
    return d().x(n).y(t);
  }, f.defined = function(h) {
    return arguments.length ? (i = typeof h == "function" ? h : rt(!!h), f) : i;
  }, f.curve = function(h) {
    return arguments.length ? (u = h, a != null && (c = u(a)), f) : u;
  }, f.context = function(h) {
    return arguments.length ? (h == null ? a = c = null : c = u(a = h), f) : a;
  }, f;
}
class C_ {
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
function BD(e) {
  return new C_(e, !0);
}
function FD(e) {
  return new C_(e, !1);
}
const $v = {
  draw(e, t) {
    const r = Qr(t / Ic);
    e.moveTo(r, 0), e.arc(0, 0, r, 0, Bl);
  }
}, WD = {
  draw(e, t) {
    const r = Qr(t / 5) / 2;
    e.moveTo(-3 * r, -r), e.lineTo(-r, -r), e.lineTo(-r, -3 * r), e.lineTo(r, -3 * r), e.lineTo(r, -r), e.lineTo(3 * r, -r), e.lineTo(3 * r, r), e.lineTo(r, r), e.lineTo(r, 3 * r), e.lineTo(-r, 3 * r), e.lineTo(-r, r), e.lineTo(-3 * r, r), e.closePath();
  }
}, M_ = Qr(1 / 3), zD = M_ * 2, UD = {
  draw(e, t) {
    const r = Qr(t / zD), n = r * M_;
    e.moveTo(0, -r), e.lineTo(n, 0), e.lineTo(0, r), e.lineTo(-n, 0), e.closePath();
  }
}, HD = {
  draw(e, t) {
    const r = Qr(t), n = -r / 2;
    e.rect(n, n, r, r);
  }
}, GD = 0.8908130915292852, I_ = Mc(Ic / 10) / Mc(7 * Ic / 10), KD = Mc(Bl / 10) * I_, qD = -A_(Bl / 10) * I_, VD = {
  draw(e, t) {
    const r = Qr(t * GD), n = KD * r, i = qD * r;
    e.moveTo(0, -r), e.lineTo(n, i);
    for (let a = 1; a < 5; ++a) {
      const u = Bl * a / 5, c = A_(u), l = Mc(u);
      e.lineTo(l * r, -c * r), e.lineTo(c * n - l * i, l * n + c * i);
    }
    e.closePath();
  }
}, Kd = Qr(3), YD = {
  draw(e, t) {
    const r = -Qr(t / (Kd * 3));
    e.moveTo(0, r * 2), e.lineTo(-Kd * r, -r), e.lineTo(Kd * r, -r), e.closePath();
  }
}, Er = -0.5, Tr = Qr(3) / 2, zh = 1 / Qr(12), XD = (zh / 2 + 1) * 3, ZD = {
  draw(e, t) {
    const r = Qr(t / XD), n = r / 2, i = r * zh, a = n, u = r * zh + r, c = -a, l = u;
    e.moveTo(n, i), e.lineTo(a, u), e.lineTo(c, l), e.lineTo(Er * n - Tr * i, Tr * n + Er * i), e.lineTo(Er * a - Tr * u, Tr * a + Er * u), e.lineTo(Er * c - Tr * l, Tr * c + Er * l), e.lineTo(Er * n + Tr * i, Er * i - Tr * n), e.lineTo(Er * a + Tr * u, Er * u - Tr * a), e.lineTo(Er * c + Tr * l, Er * l - Tr * c), e.closePath();
  }
};
function JD(e, t) {
  let r = null, n = Ev(i);
  e = typeof e == "function" ? e : rt(e || $v), t = typeof t == "function" ? t : rt(t === void 0 ? 64 : +t);
  function i() {
    let a;
    if (r || (r = a = n()), e.apply(this, arguments).draw(r, +t.apply(this, arguments)), a) return r = null, a + "" || null;
  }
  return i.type = function(a) {
    return arguments.length ? (e = typeof a == "function" ? a : rt(a), i) : e;
  }, i.size = function(a) {
    return arguments.length ? (t = typeof a == "function" ? a : rt(+a), i) : t;
  }, i.context = function(a) {
    return arguments.length ? (r = a ?? null, i) : r;
  }, i;
}
function kc() {
}
function jc(e, t, r) {
  e._context.bezierCurveTo(
    (2 * e._x0 + e._x1) / 3,
    (2 * e._y0 + e._y1) / 3,
    (e._x0 + 2 * e._x1) / 3,
    (e._y0 + 2 * e._y1) / 3,
    (e._x0 + 4 * e._x1 + t) / 6,
    (e._y0 + 4 * e._y1 + r) / 6
  );
}
function k_(e) {
  this._context = e;
}
k_.prototype = {
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
        jc(this, this._x1, this._y1);
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
        jc(this, e, t);
        break;
    }
    this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t;
  }
};
function QD(e) {
  return new k_(e);
}
function j_(e) {
  this._context = e;
}
j_.prototype = {
  areaStart: kc,
  areaEnd: kc,
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
        jc(this, e, t);
        break;
    }
    this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t;
  }
};
function e8(e) {
  return new j_(e);
}
function R_(e) {
  this._context = e;
}
R_.prototype = {
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
        jc(this, e, t);
        break;
    }
    this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t;
  }
};
function t8(e) {
  return new R_(e);
}
function N_(e) {
  this._context = e;
}
N_.prototype = {
  areaStart: kc,
  areaEnd: kc,
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
function r8(e) {
  return new N_(e);
}
function Nb(e) {
  return e < 0 ? -1 : 1;
}
function Db(e, t, r) {
  var n = e._x1 - e._x0, i = t - e._x1, a = (e._y1 - e._y0) / (n || i < 0 && -0), u = (r - e._y1) / (i || n < 0 && -0), c = (a * i + u * n) / (n + i);
  return (Nb(a) + Nb(u)) * Math.min(Math.abs(a), Math.abs(u), 0.5 * Math.abs(c)) || 0;
}
function Lb(e, t) {
  var r = e._x1 - e._x0;
  return r ? (3 * (e._y1 - e._y0) / r - t) / 2 : t;
}
function qd(e, t, r) {
  var n = e._x0, i = e._y0, a = e._x1, u = e._y1, c = (a - n) / 3;
  e._context.bezierCurveTo(n + c, i + c * t, a - c, u - c * r, a, u);
}
function Rc(e) {
  this._context = e;
}
Rc.prototype = {
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
        qd(this, this._t0, Lb(this, this._t0));
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
          this._point = 3, qd(this, Lb(this, r = Db(this, e, t)), r);
          break;
        default:
          qd(this, this._t0, r = Db(this, e, t));
          break;
      }
      this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t, this._t0 = r;
    }
  }
};
function D_(e) {
  this._context = new L_(e);
}
(D_.prototype = Object.create(Rc.prototype)).point = function(e, t) {
  Rc.prototype.point.call(this, t, e);
};
function L_(e) {
  this._context = e;
}
L_.prototype = {
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
function n8(e) {
  return new Rc(e);
}
function i8(e) {
  return new D_(e);
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
    this._x = [], this._y = [];
  },
  lineEnd: function() {
    var e = this._x, t = this._y, r = e.length;
    if (r)
      if (this._line ? this._context.lineTo(e[0], t[0]) : this._context.moveTo(e[0], t[0]), r === 2)
        this._context.lineTo(e[1], t[1]);
      else
        for (var n = Bb(e), i = Bb(t), a = 0, u = 1; u < r; ++a, ++u)
          this._context.bezierCurveTo(n[0][a], i[0][a], n[1][a], i[1][a], e[u], t[u]);
    (this._line || this._line !== 0 && r === 1) && this._context.closePath(), this._line = 1 - this._line, this._x = this._y = null;
  },
  point: function(e, t) {
    this._x.push(+e), this._y.push(+t);
  }
};
function Bb(e) {
  var t, r = e.length - 1, n, i = new Array(r), a = new Array(r), u = new Array(r);
  for (i[0] = 0, a[0] = 2, u[0] = e[0] + 2 * e[1], t = 1; t < r - 1; ++t) i[t] = 1, a[t] = 4, u[t] = 4 * e[t] + 2 * e[t + 1];
  for (i[r - 1] = 2, a[r - 1] = 7, u[r - 1] = 8 * e[r - 1] + e[r], t = 1; t < r; ++t) n = i[t] / a[t - 1], a[t] -= n, u[t] -= n * u[t - 1];
  for (i[r - 1] = u[r - 1] / a[r - 1], t = r - 2; t >= 0; --t) i[t] = (u[t] - i[t + 1]) / a[t];
  for (a[r - 1] = (e[r] + i[r - 1]) / 2, t = 0; t < r - 1; ++t) a[t] = 2 * e[t + 1] - i[t + 1];
  return [i, a];
}
function a8(e) {
  return new B_(e);
}
function Wl(e, t) {
  this._context = e, this._t = t;
}
Wl.prototype = {
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
function o8(e) {
  return new Wl(e, 0.5);
}
function u8(e) {
  return new Wl(e, 0);
}
function s8(e) {
  return new Wl(e, 1);
}
function Ba(e, t) {
  if ((u = e.length) > 1)
    for (var r = 1, n, i, a = e[t[0]], u, c = a.length; r < u; ++r)
      for (i = a, a = e[t[r]], n = 0; n < c; ++n)
        a[n][1] += a[n][0] = isNaN(i[n][1]) ? i[n][0] : i[n][1];
}
function Uh(e) {
  for (var t = e.length, r = new Array(t); --t >= 0; ) r[t] = t;
  return r;
}
function c8(e, t) {
  return e[t];
}
function l8(e) {
  const t = [];
  return t.key = e, t;
}
function f8() {
  var e = rt([]), t = Uh, r = Ba, n = c8;
  function i(a) {
    var u = Array.from(e.apply(this, arguments), l8), c, l = u.length, f = -1, d;
    for (const h of a)
      for (c = 0, ++f; c < l; ++c)
        (u[c][f] = [0, +n(h, u[c].key, f, a)]).data = h;
    for (c = 0, d = Tv(t(u)); c < l; ++c)
      u[d[c]].index = c;
    return r(u, d), u;
  }
  return i.keys = function(a) {
    return arguments.length ? (e = typeof a == "function" ? a : rt(Array.from(a)), i) : e;
  }, i.value = function(a) {
    return arguments.length ? (n = typeof a == "function" ? a : rt(+a), i) : n;
  }, i.order = function(a) {
    return arguments.length ? (t = a == null ? Uh : typeof a == "function" ? a : rt(Array.from(a)), i) : t;
  }, i.offset = function(a) {
    return arguments.length ? (r = a ?? Ba, i) : r;
  }, i;
}
function d8(e, t) {
  if ((n = e.length) > 0) {
    for (var r, n, i = 0, a = e[0].length, u; i < a; ++i) {
      for (u = r = 0; r < n; ++r) u += e[r][i][1] || 0;
      if (u) for (r = 0; r < n; ++r) e[r][i][1] /= u;
    }
    Ba(e, t);
  }
}
function h8(e, t) {
  if ((i = e.length) > 0) {
    for (var r = 0, n = e[t[0]], i, a = n.length; r < a; ++r) {
      for (var u = 0, c = 0; u < i; ++u) c += e[u][r][1] || 0;
      n[r][1] += n[r][0] = -c / 2;
    }
    Ba(e, t);
  }
}
function p8(e, t) {
  if (!(!((u = e.length) > 0) || !((a = (i = e[t[0]]).length) > 0))) {
    for (var r = 0, n = 1, i, a, u; n < a; ++n) {
      for (var c = 0, l = 0, f = 0; c < u; ++c) {
        for (var d = e[t[c]], h = d[n][1] || 0, v = d[n - 1][1] || 0, g = (h - v) / 2, x = 0; x < c; ++x) {
          var y = e[t[x]], w = y[n][1] || 0, A = y[n - 1][1] || 0;
          g += w - A;
        }
        l += h, f += g * h;
      }
      i[n - 1][1] += i[n - 1][0] = r, l && (r -= f / l);
    }
    i[n - 1][1] += i[n - 1][0] = r, Ba(e, t);
  }
}
function mu(e) {
  "@babel/helpers - typeof";
  return mu = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, mu(e);
}
var v8 = ["type", "size", "sizeType"];
function Hh() {
  return Hh = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Hh.apply(this, arguments);
}
function Fb(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Wb(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Fb(Object(r), !0).forEach(function(n) {
      g8(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Fb(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function g8(e, t, r) {
  return t = y8(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function y8(e) {
  var t = m8(e, "string");
  return mu(t) == "symbol" ? t : String(t);
}
function m8(e, t) {
  if (mu(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (mu(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function b8(e, t) {
  if (e == null) return {};
  var r = x8(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function x8(e, t) {
  if (e == null) return {};
  var r = {}, n = Object.keys(e), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
var F_ = {
  symbolCircle: $v,
  symbolCross: WD,
  symbolDiamond: UD,
  symbolSquare: HD,
  symbolStar: VD,
  symbolTriangle: YD,
  symbolWye: ZD
}, w8 = Math.PI / 180, _8 = function(t) {
  var r = "symbol".concat(Ll(t));
  return F_[r] || $v;
}, O8 = function(t, r, n) {
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
      var i = 18 * w8;
      return 1.25 * t * t * (Math.tan(i) - Math.tan(i * 2) * Math.pow(Math.tan(i), 2));
    }
    case "triangle":
      return Math.sqrt(3) * t * t / 4;
    case "wye":
      return (21 - 10 * Math.sqrt(3)) * t * t / 8;
    default:
      return Math.PI * t * t / 4;
  }
}, A8 = function(t, r) {
  F_["symbol".concat(Ll(t))] = r;
}, Cv = function(t) {
  var r = t.type, n = r === void 0 ? "circle" : r, i = t.size, a = i === void 0 ? 64 : i, u = t.sizeType, c = u === void 0 ? "area" : u, l = b8(t, v8), f = Wb(Wb({}, l), {}, {
    type: n,
    size: a,
    sizeType: c
  }), d = function() {
    var w = _8(n), A = JD().type(w).size(O8(a, c, n));
    return A();
  }, h = f.className, v = f.cx, g = f.cy, x = me(f, !0);
  return v === +v && g === +g && a === +a ? /* @__PURE__ */ k.createElement("path", Hh({}, x, {
    className: Me("recharts-symbols", h),
    transform: "translate(".concat(v, ", ").concat(g, ")"),
    d: d()
  })) : null;
};
Cv.registerSymbol = A8;
function Fa(e) {
  "@babel/helpers - typeof";
  return Fa = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Fa(e);
}
function Gh() {
  return Gh = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Gh.apply(this, arguments);
}
function zb(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function S8(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? zb(Object(r), !0).forEach(function(n) {
      bu(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : zb(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function P8(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function E8(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, z_(n.key), n);
  }
}
function T8(e, t, r) {
  return t && E8(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function $8(e, t, r) {
  return t = Nc(t), C8(e, W_() ? Reflect.construct(t, r || [], Nc(e).constructor) : t.apply(e, r));
}
function C8(e, t) {
  if (t && (Fa(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return M8(e);
}
function M8(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function W_() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (W_ = function() {
    return !!e;
  })();
}
function Nc(e) {
  return Nc = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Nc(e);
}
function I8(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Kh(e, t);
}
function Kh(e, t) {
  return Kh = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, Kh(e, t);
}
function bu(e, t, r) {
  return t = z_(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function z_(e) {
  var t = k8(e, "string");
  return Fa(t) == "symbol" ? t : String(t);
}
function k8(e, t) {
  if (Fa(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Fa(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var $r = 32, Mv = /* @__PURE__ */ function(e) {
  I8(t, e);
  function t() {
    return P8(this, t), $8(this, t, arguments);
  }
  return T8(t, [{
    key: "renderIcon",
    value: (
      /**
       * Render the path of icon
       * @param {Object} data Data of each legend item
       * @return {String} Path element
       */
      function(n) {
        var i = this.props.inactiveColor, a = $r / 2, u = $r / 6, c = $r / 3, l = n.inactive ? i : n.color;
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
            d: "M0,".concat(a, "h").concat(c, `
            A`).concat(u, ",").concat(u, ",0,1,1,").concat(2 * c, ",").concat(a, `
            H`).concat($r, "M").concat(2 * c, ",").concat(a, `
            A`).concat(u, ",").concat(u, ",0,1,1,").concat(c, ",").concat(a),
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
          var f = S8({}, n);
          return delete f.legendIcon, /* @__PURE__ */ k.cloneElement(n.legendIcon, f);
        }
        return /* @__PURE__ */ k.createElement(Cv, {
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
      var n = this, i = this.props, a = i.payload, u = i.iconSize, c = i.layout, l = i.formatter, f = i.inactiveColor, d = {
        x: 0,
        y: 0,
        width: $r,
        height: $r
      }, h = {
        display: c === "horizontal" ? "inline-block" : "block",
        marginRight: 10
      }, v = {
        display: "inline-block",
        verticalAlign: "middle",
        marginRight: 4
      };
      return a.map(function(g, x) {
        var y = g.formatter || l, w = Me(bu(bu({
          "recharts-legend-item": !0
        }, "legend-item-".concat(x), !0), "inactive", g.inactive));
        if (g.type === "none")
          return null;
        var A = Pe(g.value) ? null : g.value;
        Vr(
          !Pe(g.value),
          `The name property is also required when using a function for the dataKey of a chart's cartesian components. Ex: <Bar name="Name of my Data"/>`
          // eslint-disable-line max-len
        );
        var O = g.inactive ? f : g.color;
        return /* @__PURE__ */ k.createElement("li", Gh({
          className: w,
          style: h,
          key: "legend-item-".concat(x)
        }, Qi(n.props, g, x)), /* @__PURE__ */ k.createElement(Nh, {
          width: u,
          height: u,
          viewBox: d,
          style: v
        }, n.renderIcon(g)), /* @__PURE__ */ k.createElement("span", {
          className: "recharts-legend-item-text",
          style: {
            color: O
          }
        }, y ? y(A, g, x) : A));
      });
    }
  }, {
    key: "render",
    value: function() {
      var n = this.props, i = n.payload, a = n.layout, u = n.align;
      if (!i || !i.length)
        return null;
      var c = {
        padding: 0,
        margin: 0,
        textAlign: a === "horizontal" ? u : "left"
      };
      return /* @__PURE__ */ k.createElement("ul", {
        className: "recharts-default-legend",
        style: c
      }, this.renderItems());
    }
  }]), t;
}(Nr);
bu(Mv, "displayName", "Legend");
bu(Mv, "defaultProps", {
  iconSize: 14,
  layout: "horizontal",
  align: "center",
  verticalAlign: "middle",
  inactiveColor: "#ccc"
});
var j8 = Rl;
function R8() {
  this.__data__ = new j8(), this.size = 0;
}
var N8 = R8;
function D8(e) {
  var t = this.__data__, r = t.delete(e);
  return this.size = t.size, r;
}
var L8 = D8;
function B8(e) {
  return this.__data__.get(e);
}
var F8 = B8;
function W8(e) {
  return this.__data__.has(e);
}
var z8 = W8, U8 = Rl, H8 = xv, G8 = wv, K8 = 200;
function q8(e, t) {
  var r = this.__data__;
  if (r instanceof U8) {
    var n = r.__data__;
    if (!H8 || n.length < K8 - 1)
      return n.push([e, t]), this.size = ++r.size, this;
    r = this.__data__ = new G8(n);
  }
  return r.set(e, t), this.size = r.size, this;
}
var V8 = q8, Y8 = Rl, X8 = N8, Z8 = L8, J8 = F8, Q8 = z8, eL = V8;
function mo(e) {
  var t = this.__data__ = new Y8(e);
  this.size = t.size;
}
mo.prototype.clear = X8;
mo.prototype.delete = Z8;
mo.prototype.get = J8;
mo.prototype.has = Q8;
mo.prototype.set = eL;
var U_ = mo, tL = "__lodash_hash_undefined__";
function rL(e) {
  return this.__data__.set(e, tL), this;
}
var nL = rL;
function iL(e) {
  return this.__data__.has(e);
}
var aL = iL, oL = wv, uL = nL, sL = aL;
function Dc(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.__data__ = new oL(); ++t < r; )
    this.add(e[t]);
}
Dc.prototype.add = Dc.prototype.push = uL;
Dc.prototype.has = sL;
var H_ = Dc;
function cL(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length; ++r < n; )
    if (t(e[r], r, e))
      return !0;
  return !1;
}
var G_ = cL;
function lL(e, t) {
  return e.has(t);
}
var K_ = lL, fL = H_, dL = G_, hL = K_, pL = 1, vL = 2;
function gL(e, t, r, n, i, a) {
  var u = r & pL, c = e.length, l = t.length;
  if (c != l && !(u && l > c))
    return !1;
  var f = a.get(e), d = a.get(t);
  if (f && d)
    return f == t && d == e;
  var h = -1, v = !0, g = r & vL ? new fL() : void 0;
  for (a.set(e, t), a.set(t, e); ++h < c; ) {
    var x = e[h], y = t[h];
    if (n)
      var w = u ? n(y, x, h, t, e, a) : n(x, y, h, e, t, a);
    if (w !== void 0) {
      if (w)
        continue;
      v = !1;
      break;
    }
    if (g) {
      if (!dL(t, function(A, O) {
        if (!hL(g, O) && (x === A || i(x, A, r, n, a)))
          return g.push(O);
      })) {
        v = !1;
        break;
      }
    } else if (!(x === y || i(x, y, r, n, a))) {
      v = !1;
      break;
    }
  }
  return a.delete(e), a.delete(t), v;
}
var q_ = gL, yL = hn, mL = yL.Uint8Array, bL = mL;
function xL(e) {
  var t = -1, r = Array(e.size);
  return e.forEach(function(n, i) {
    r[++t] = [i, n];
  }), r;
}
var wL = xL;
function _L(e) {
  var t = -1, r = Array(e.size);
  return e.forEach(function(n) {
    r[++t] = n;
  }), r;
}
var Iv = _L, Ub = is, Hb = bL, OL = bv, AL = q_, SL = wL, PL = Iv, EL = 1, TL = 2, $L = "[object Boolean]", CL = "[object Date]", ML = "[object Error]", IL = "[object Map]", kL = "[object Number]", jL = "[object RegExp]", RL = "[object Set]", NL = "[object String]", DL = "[object Symbol]", LL = "[object ArrayBuffer]", BL = "[object DataView]", Gb = Ub ? Ub.prototype : void 0, Vd = Gb ? Gb.valueOf : void 0;
function FL(e, t, r, n, i, a, u) {
  switch (r) {
    case BL:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      e = e.buffer, t = t.buffer;
    case LL:
      return !(e.byteLength != t.byteLength || !a(new Hb(e), new Hb(t)));
    case $L:
    case CL:
    case kL:
      return OL(+e, +t);
    case ML:
      return e.name == t.name && e.message == t.message;
    case jL:
    case NL:
      return e == t + "";
    case IL:
      var c = SL;
    case RL:
      var l = n & EL;
      if (c || (c = PL), e.size != t.size && !l)
        return !1;
      var f = u.get(e);
      if (f)
        return f == t;
      n |= TL, u.set(e, t);
      var d = AL(c(e), c(t), n, i, a, u);
      return u.delete(e), d;
    case DL:
      if (Vd)
        return Vd.call(e) == Vd.call(t);
  }
  return !1;
}
var WL = FL;
function zL(e, t) {
  for (var r = -1, n = t.length, i = e.length; ++r < n; )
    e[i + r] = t[r];
  return e;
}
var V_ = zL, UL = V_, HL = rr;
function GL(e, t, r) {
  var n = t(e);
  return HL(e) ? n : UL(n, r(e));
}
var KL = GL;
function qL(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length, i = 0, a = []; ++r < n; ) {
    var u = e[r];
    t(u, r, e) && (a[i++] = u);
  }
  return a;
}
var VL = qL;
function YL() {
  return [];
}
var XL = YL, ZL = VL, JL = XL, QL = Object.prototype, e6 = QL.propertyIsEnumerable, Kb = Object.getOwnPropertySymbols, t6 = Kb ? function(e) {
  return e == null ? [] : (e = Object(e), ZL(Kb(e), function(t) {
    return e6.call(e, t);
  }));
} : JL, r6 = t6;
function n6(e, t) {
  for (var r = -1, n = Array(e); ++r < e; )
    n[r] = t(r);
  return n;
}
var i6 = n6, a6 = Un, o6 = Hn, u6 = "[object Arguments]";
function s6(e) {
  return o6(e) && a6(e) == u6;
}
var c6 = s6, qb = c6, l6 = Hn, Y_ = Object.prototype, f6 = Y_.hasOwnProperty, d6 = Y_.propertyIsEnumerable, h6 = qb(/* @__PURE__ */ function() {
  return arguments;
}()) ? qb : function(e) {
  return l6(e) && f6.call(e, "callee") && !d6.call(e, "callee");
}, kv = h6, Lc = { exports: {} };
function p6() {
  return !1;
}
var v6 = p6;
Lc.exports;
(function(e, t) {
  var r = hn, n = v6, i = t && !t.nodeType && t, a = i && !0 && e && !e.nodeType && e, u = a && a.exports === i, c = u ? r.Buffer : void 0, l = c ? c.isBuffer : void 0, f = l || n;
  e.exports = f;
})(Lc, Lc.exports);
var X_ = Lc.exports, g6 = 9007199254740991, y6 = /^(?:0|[1-9]\d*)$/;
function m6(e, t) {
  var r = typeof e;
  return t = t ?? g6, !!t && (r == "number" || r != "symbol" && y6.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
var jv = m6, b6 = 9007199254740991;
function x6(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= b6;
}
var Rv = x6, w6 = Un, _6 = Rv, O6 = Hn, A6 = "[object Arguments]", S6 = "[object Array]", P6 = "[object Boolean]", E6 = "[object Date]", T6 = "[object Error]", $6 = "[object Function]", C6 = "[object Map]", M6 = "[object Number]", I6 = "[object Object]", k6 = "[object RegExp]", j6 = "[object Set]", R6 = "[object String]", N6 = "[object WeakMap]", D6 = "[object ArrayBuffer]", L6 = "[object DataView]", B6 = "[object Float32Array]", F6 = "[object Float64Array]", W6 = "[object Int8Array]", z6 = "[object Int16Array]", U6 = "[object Int32Array]", H6 = "[object Uint8Array]", G6 = "[object Uint8ClampedArray]", K6 = "[object Uint16Array]", q6 = "[object Uint32Array]", st = {};
st[B6] = st[F6] = st[W6] = st[z6] = st[U6] = st[H6] = st[G6] = st[K6] = st[q6] = !0;
st[A6] = st[S6] = st[D6] = st[P6] = st[L6] = st[E6] = st[T6] = st[$6] = st[C6] = st[M6] = st[I6] = st[k6] = st[j6] = st[R6] = st[N6] = !1;
function V6(e) {
  return O6(e) && _6(e.length) && !!st[w6(e)];
}
var Y6 = V6;
function X6(e) {
  return function(t) {
    return e(t);
  };
}
var Z_ = X6, Bc = { exports: {} };
Bc.exports;
(function(e, t) {
  var r = o_, n = t && !t.nodeType && t, i = n && !0 && e && !e.nodeType && e, a = i && i.exports === n, u = a && r.process, c = function() {
    try {
      var l = i && i.require && i.require("util").types;
      return l || u && u.binding && u.binding("util");
    } catch {
    }
  }();
  e.exports = c;
})(Bc, Bc.exports);
var Z6 = Bc.exports, J6 = Y6, Q6 = Z_, Vb = Z6, Yb = Vb && Vb.isTypedArray, eB = Yb ? Q6(Yb) : J6, J_ = eB, tB = i6, rB = kv, nB = rr, iB = X_, aB = jv, oB = J_, uB = Object.prototype, sB = uB.hasOwnProperty;
function cB(e, t) {
  var r = nB(e), n = !r && rB(e), i = !r && !n && iB(e), a = !r && !n && !i && oB(e), u = r || n || i || a, c = u ? tB(e.length, String) : [], l = c.length;
  for (var f in e)
    (t || sB.call(e, f)) && !(u && // Safari 9 has enumerable `arguments.length` in strict mode.
    (f == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    i && (f == "offset" || f == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    a && (f == "buffer" || f == "byteLength" || f == "byteOffset") || // Skip index properties.
    aB(f, l))) && c.push(f);
  return c;
}
var lB = cB, fB = Object.prototype;
function dB(e) {
  var t = e && e.constructor, r = typeof t == "function" && t.prototype || fB;
  return e === r;
}
var hB = dB;
function pB(e, t) {
  return function(r) {
    return e(t(r));
  };
}
var Q_ = pB, vB = Q_, gB = vB(Object.keys, Object), yB = gB, mB = hB, bB = yB, xB = Object.prototype, wB = xB.hasOwnProperty;
function _B(e) {
  if (!mB(e))
    return bB(e);
  var t = [];
  for (var r in Object(e))
    wB.call(e, r) && r != "constructor" && t.push(r);
  return t;
}
var OB = _B, AB = mv, SB = Rv;
function PB(e) {
  return e != null && SB(e.length) && !AB(e);
}
var os = PB, EB = lB, TB = OB, $B = os;
function CB(e) {
  return $B(e) ? EB(e) : TB(e);
}
var zl = CB, MB = KL, IB = r6, kB = zl;
function jB(e) {
  return MB(e, kB, IB);
}
var RB = jB, Xb = RB, NB = 1, DB = Object.prototype, LB = DB.hasOwnProperty;
function BB(e, t, r, n, i, a) {
  var u = r & NB, c = Xb(e), l = c.length, f = Xb(t), d = f.length;
  if (l != d && !u)
    return !1;
  for (var h = l; h--; ) {
    var v = c[h];
    if (!(u ? v in t : LB.call(t, v)))
      return !1;
  }
  var g = a.get(e), x = a.get(t);
  if (g && x)
    return g == t && x == e;
  var y = !0;
  a.set(e, t), a.set(t, e);
  for (var w = u; ++h < l; ) {
    v = c[h];
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
    var _ = e.constructor, b = t.constructor;
    _ != b && "constructor" in e && "constructor" in t && !(typeof _ == "function" && _ instanceof _ && typeof b == "function" && b instanceof b) && (y = !1);
  }
  return a.delete(e), a.delete(t), y;
}
var FB = BB, WB = aa, zB = hn, UB = WB(zB, "DataView"), HB = UB, GB = aa, KB = hn, qB = GB(KB, "Promise"), VB = qB, YB = aa, XB = hn, ZB = YB(XB, "Set"), eO = ZB, JB = aa, QB = hn, eF = JB(QB, "WeakMap"), tF = eF, qh = HB, Vh = xv, Yh = VB, Xh = eO, Zh = tF, tO = Un, bo = s_, Zb = "[object Map]", rF = "[object Object]", Jb = "[object Promise]", Qb = "[object Set]", e0 = "[object WeakMap]", t0 = "[object DataView]", nF = bo(qh), iF = bo(Vh), aF = bo(Yh), oF = bo(Xh), uF = bo(Zh), Wi = tO;
(qh && Wi(new qh(new ArrayBuffer(1))) != t0 || Vh && Wi(new Vh()) != Zb || Yh && Wi(Yh.resolve()) != Jb || Xh && Wi(new Xh()) != Qb || Zh && Wi(new Zh()) != e0) && (Wi = function(e) {
  var t = tO(e), r = t == rF ? e.constructor : void 0, n = r ? bo(r) : "";
  if (n)
    switch (n) {
      case nF:
        return t0;
      case iF:
        return Zb;
      case aF:
        return Jb;
      case oF:
        return Qb;
      case uF:
        return e0;
    }
  return t;
});
var sF = Wi, Yd = U_, cF = q_, lF = WL, fF = FB, r0 = sF, n0 = rr, i0 = X_, dF = J_, hF = 1, a0 = "[object Arguments]", o0 = "[object Array]", fc = "[object Object]", pF = Object.prototype, u0 = pF.hasOwnProperty;
function vF(e, t, r, n, i, a) {
  var u = n0(e), c = n0(t), l = u ? o0 : r0(e), f = c ? o0 : r0(t);
  l = l == a0 ? fc : l, f = f == a0 ? fc : f;
  var d = l == fc, h = f == fc, v = l == f;
  if (v && i0(e)) {
    if (!i0(t))
      return !1;
    u = !0, d = !1;
  }
  if (v && !d)
    return a || (a = new Yd()), u || dF(e) ? cF(e, t, r, n, i, a) : lF(e, t, l, r, n, i, a);
  if (!(r & hF)) {
    var g = d && u0.call(e, "__wrapped__"), x = h && u0.call(t, "__wrapped__");
    if (g || x) {
      var y = g ? e.value() : e, w = x ? t.value() : t;
      return a || (a = new Yd()), i(y, w, r, n, a);
    }
  }
  return v ? (a || (a = new Yd()), fF(e, t, r, n, i, a)) : !1;
}
var gF = vF, yF = gF, s0 = Hn;
function rO(e, t, r, n, i) {
  return e === t ? !0 : e == null || t == null || !s0(e) && !s0(t) ? e !== e && t !== t : yF(e, t, r, n, rO, i);
}
var Nv = rO, mF = U_, bF = Nv, xF = 1, wF = 2;
function _F(e, t, r, n) {
  var i = r.length, a = i, u = !n;
  if (e == null)
    return !a;
  for (e = Object(e); i--; ) {
    var c = r[i];
    if (u && c[2] ? c[1] !== e[c[0]] : !(c[0] in e))
      return !1;
  }
  for (; ++i < a; ) {
    c = r[i];
    var l = c[0], f = e[l], d = c[1];
    if (u && c[2]) {
      if (f === void 0 && !(l in e))
        return !1;
    } else {
      var h = new mF();
      if (n)
        var v = n(f, d, l, e, t, h);
      if (!(v === void 0 ? bF(d, f, xF | wF, n, h) : v))
        return !1;
    }
  }
  return !0;
}
var OF = _F, AF = _i;
function SF(e) {
  return e === e && !AF(e);
}
var nO = SF, PF = nO, EF = zl;
function TF(e) {
  for (var t = EF(e), r = t.length; r--; ) {
    var n = t[r], i = e[n];
    t[r] = [n, i, PF(i)];
  }
  return t;
}
var $F = TF;
function CF(e, t) {
  return function(r) {
    return r == null ? !1 : r[e] === t && (t !== void 0 || e in Object(r));
  };
}
var iO = CF, MF = OF, IF = $F, kF = iO;
function jF(e) {
  var t = IF(e);
  return t.length == 1 && t[0][2] ? kF(t[0][0], t[0][1]) : function(r) {
    return r === e || MF(r, e, t);
  };
}
var RF = jF;
function NF(e, t) {
  return e != null && t in Object(e);
}
var DF = NF, LF = h_, BF = kv, FF = rr, WF = jv, zF = Rv, UF = Dl;
function HF(e, t, r) {
  t = LF(t, e);
  for (var n = -1, i = t.length, a = !1; ++n < i; ) {
    var u = UF(t[n]);
    if (!(a = e != null && r(e, u)))
      break;
    e = e[u];
  }
  return a || ++n != i ? a : (i = e == null ? 0 : e.length, !!i && zF(i) && WF(u, i) && (FF(e) || BF(e)));
}
var GF = HF, KF = DF, qF = GF;
function VF(e, t) {
  return e != null && qF(e, t, KF);
}
var YF = VF, XF = Nv, ZF = p_, JF = YF, QF = yv, eW = nO, tW = iO, rW = Dl, nW = 1, iW = 2;
function aW(e, t) {
  return QF(e) && eW(t) ? tW(rW(e), t) : function(r) {
    var n = ZF(r, e);
    return n === void 0 && n === t ? JF(r, e) : XF(t, n, nW | iW);
  };
}
var oW = aW;
function uW(e) {
  return e;
}
var xo = uW;
function sW(e) {
  return function(t) {
    return t == null ? void 0 : t[e];
  };
}
var cW = sW, lW = Av;
function fW(e) {
  return function(t) {
    return lW(t, e);
  };
}
var dW = fW, hW = cW, pW = dW, vW = yv, gW = Dl;
function yW(e) {
  return vW(e) ? hW(gW(e)) : pW(e);
}
var mW = yW, bW = RF, xW = oW, wW = xo, _W = rr, OW = mW;
function AW(e) {
  return typeof e == "function" ? e : e == null ? wW : typeof e == "object" ? _W(e) ? xW(e[0], e[1]) : bW(e) : OW(e);
}
var pn = AW;
function SW(e, t, r, n) {
  for (var i = e.length, a = r + (n ? 1 : -1); n ? a-- : ++a < i; )
    if (t(e[a], a, e))
      return a;
  return -1;
}
var aO = SW;
function PW(e) {
  return e !== e;
}
var EW = PW;
function TW(e, t, r) {
  for (var n = r - 1, i = e.length; ++n < i; )
    if (e[n] === t)
      return n;
  return -1;
}
var $W = TW, CW = aO, MW = EW, IW = $W;
function kW(e, t, r) {
  return t === t ? IW(e, t, r) : CW(e, MW, r);
}
var jW = kW, RW = jW;
function NW(e, t) {
  var r = e == null ? 0 : e.length;
  return !!r && RW(e, t, 0) > -1;
}
var DW = NW;
function LW(e, t, r) {
  for (var n = -1, i = e == null ? 0 : e.length; ++n < i; )
    if (r(t, e[n]))
      return !0;
  return !1;
}
var BW = LW;
function FW() {
}
var WW = FW, Xd = eO, zW = WW, UW = Iv, HW = 1 / 0, GW = Xd && 1 / UW(new Xd([, -0]))[1] == HW ? function(e) {
  return new Xd(e);
} : zW, KW = GW, qW = H_, VW = DW, YW = BW, XW = K_, ZW = KW, JW = Iv, QW = 200;
function ez(e, t, r) {
  var n = -1, i = VW, a = e.length, u = !0, c = [], l = c;
  if (r)
    u = !1, i = YW;
  else if (a >= QW) {
    var f = t ? null : ZW(e);
    if (f)
      return JW(f);
    u = !1, i = XW, l = new qW();
  } else
    l = t ? [] : c;
  e:
    for (; ++n < a; ) {
      var d = e[n], h = t ? t(d) : d;
      if (d = r || d !== 0 ? d : 0, u && h === h) {
        for (var v = l.length; v--; )
          if (l[v] === h)
            continue e;
        t && l.push(h), c.push(d);
      } else i(l, h, r) || (l !== c && l.push(h), c.push(d));
    }
  return c;
}
var tz = ez, rz = pn, nz = tz;
function iz(e, t) {
  return e && e.length ? nz(e, rz(t)) : [];
}
var az = iz;
const c0 = /* @__PURE__ */ Je(az);
function oO(e, t, r) {
  return t === !0 ? c0(e, r) : Pe(t) ? c0(e, t) : e;
}
function Wa(e) {
  "@babel/helpers - typeof";
  return Wa = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Wa(e);
}
var oz = ["ref"];
function l0(e, t) {
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
    t % 2 ? l0(Object(r), !0).forEach(function(n) {
      Ul(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : l0(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function uz(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function f0(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, cO(n.key), n);
  }
}
function sz(e, t, r) {
  return t && f0(e.prototype, t), r && f0(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function cz(e, t, r) {
  return t = Fc(t), lz(e, uO() ? Reflect.construct(t, r || [], Fc(e).constructor) : t.apply(e, r));
}
function lz(e, t) {
  if (t && (Wa(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return sO(e);
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
function Fc(e) {
  return Fc = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Fc(e);
}
function sO(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function fz(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Jh(e, t);
}
function Jh(e, t) {
  return Jh = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, Jh(e, t);
}
function Ul(e, t, r) {
  return t = cO(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function cO(e) {
  var t = dz(e, "string");
  return Wa(t) == "symbol" ? t : String(t);
}
function dz(e, t) {
  if (Wa(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Wa(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function hz(e, t) {
  if (e == null) return {};
  var r = pz(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function pz(e, t) {
  if (e == null) return {};
  var r = {}, n = Object.keys(e), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
function vz(e) {
  return e.value;
}
function gz(e, t) {
  if (/* @__PURE__ */ k.isValidElement(e))
    return /* @__PURE__ */ k.cloneElement(e, t);
  if (typeof e == "function")
    return /* @__PURE__ */ k.createElement(e, t);
  t.ref;
  var r = hz(t, oz);
  return /* @__PURE__ */ k.createElement(Mv, r);
}
var d0 = 1, za = /* @__PURE__ */ function(e) {
  fz(t, e);
  function t() {
    var r;
    uz(this, t);
    for (var n = arguments.length, i = new Array(n), a = 0; a < n; a++)
      i[a] = arguments[a];
    return r = cz(this, t, [].concat(i)), Ul(sO(r), "lastBoundingBox", {
      width: -1,
      height: -1
    }), r;
  }
  return sz(t, [{
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
      i ? (Math.abs(i.width - this.lastBoundingBox.width) > d0 || Math.abs(i.height - this.lastBoundingBox.height) > d0) && (this.lastBoundingBox.width = i.width, this.lastBoundingBox.height = i.height, n && n(i)) : (this.lastBoundingBox.width !== -1 || this.lastBoundingBox.height !== -1) && (this.lastBoundingBox.width = -1, this.lastBoundingBox.height = -1, n && n(null));
    }
  }, {
    key: "getBBoxSnapshot",
    value: function() {
      return this.lastBoundingBox.width >= 0 && this.lastBoundingBox.height >= 0 ? Di({}, this.lastBoundingBox) : {
        width: 0,
        height: 0
      };
    }
  }, {
    key: "getDefaultPosition",
    value: function(n) {
      var i = this.props, a = i.layout, u = i.align, c = i.verticalAlign, l = i.margin, f = i.chartWidth, d = i.chartHeight, h, v;
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
        if (c === "middle") {
          var x = this.getBBoxSnapshot();
          v = {
            top: ((d || 0) - x.height) / 2
          };
        } else
          v = c === "bottom" ? {
            bottom: l && l.bottom || 0
          } : {
            top: l && l.top || 0
          };
      return Di(Di({}, h), v);
    }
  }, {
    key: "render",
    value: function() {
      var n = this, i = this.props, a = i.content, u = i.width, c = i.height, l = i.wrapperStyle, f = i.payloadUniqBy, d = i.payload, h = Di(Di({
        position: "absolute",
        width: u || "auto",
        height: c || "auto"
      }, this.getDefaultPosition(l)), l);
      return /* @__PURE__ */ k.createElement("div", {
        className: "recharts-legend-wrapper",
        style: h,
        ref: function(g) {
          n.wrapperNode = g;
        }
      }, gz(a, Di(Di({}, this.props), {}, {
        payload: oO(d, f, vz)
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
Ul(za, "displayName", "Legend");
Ul(za, "defaultProps", {
  iconSize: 14,
  layout: "horizontal",
  align: "center",
  verticalAlign: "bottom"
});
var h0 = is, yz = kv, mz = rr, p0 = h0 ? h0.isConcatSpreadable : void 0;
function bz(e) {
  return mz(e) || yz(e) || !!(p0 && e && e[p0]);
}
var xz = bz, wz = V_, _z = xz;
function lO(e, t, r, n, i) {
  var a = -1, u = e.length;
  for (r || (r = _z), i || (i = []); ++a < u; ) {
    var c = e[a];
    t > 0 && r(c) ? t > 1 ? lO(c, t - 1, r, n, i) : wz(i, c) : n || (i[i.length] = c);
  }
  return i;
}
var fO = lO;
function Oz(e) {
  return function(t, r, n) {
    for (var i = -1, a = Object(t), u = n(t), c = u.length; c--; ) {
      var l = u[e ? c : ++i];
      if (r(a[l], l, a) === !1)
        break;
    }
    return t;
  };
}
var Az = Oz, Sz = Az, Pz = Sz(), Ez = Pz, Tz = Ez, $z = zl;
function Cz(e, t) {
  return e && Tz(e, t, $z);
}
var dO = Cz, Mz = os;
function Iz(e, t) {
  return function(r, n) {
    if (r == null)
      return r;
    if (!Mz(r))
      return e(r, n);
    for (var i = r.length, a = t ? i : -1, u = Object(r); (t ? a-- : ++a < i) && n(u[a], a, u) !== !1; )
      ;
    return r;
  };
}
var kz = Iz, jz = dO, Rz = kz, Nz = Rz(jz), Dv = Nz, Dz = Dv, Lz = os;
function Bz(e, t) {
  var r = -1, n = Lz(e) ? Array(e.length) : [];
  return Dz(e, function(i, a, u) {
    n[++r] = t(i, a, u);
  }), n;
}
var hO = Bz;
function Fz(e, t) {
  var r = e.length;
  for (e.sort(t); r--; )
    e[r] = e[r].value;
  return e;
}
var Wz = Fz, v0 = fo;
function zz(e, t) {
  if (e !== t) {
    var r = e !== void 0, n = e === null, i = e === e, a = v0(e), u = t !== void 0, c = t === null, l = t === t, f = v0(t);
    if (!c && !f && !a && e > t || a && u && l && !c && !f || n && u && l || !r && l || !i)
      return 1;
    if (!n && !a && !f && e < t || f && r && i && !n && !a || c && r && i || !u && i || !l)
      return -1;
  }
  return 0;
}
var Uz = zz, Hz = Uz;
function Gz(e, t, r) {
  for (var n = -1, i = e.criteria, a = t.criteria, u = i.length, c = r.length; ++n < u; ) {
    var l = Hz(i[n], a[n]);
    if (l) {
      if (n >= c)
        return l;
      var f = r[n];
      return l * (f == "desc" ? -1 : 1);
    }
  }
  return e.index - t.index;
}
var Kz = Gz, Zd = Ov, qz = Av, Vz = pn, Yz = hO, Xz = Wz, Zz = Z_, Jz = Kz, Qz = xo, e4 = rr;
function t4(e, t, r) {
  t.length ? t = Zd(t, function(a) {
    return e4(a) ? function(u) {
      return qz(u, a.length === 1 ? a[0] : a);
    } : a;
  }) : t = [Qz];
  var n = -1;
  t = Zd(t, Zz(Vz));
  var i = Yz(e, function(a, u, c) {
    var l = Zd(t, function(f) {
      return f(a);
    });
    return { criteria: l, index: ++n, value: a };
  });
  return Xz(i, function(a, u) {
    return Jz(a, u, r);
  });
}
var r4 = t4;
function n4(e, t, r) {
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
var i4 = n4, a4 = i4, g0 = Math.max;
function o4(e, t, r) {
  return t = g0(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var n = arguments, i = -1, a = g0(n.length - t, 0), u = Array(a); ++i < a; )
      u[i] = n[t + i];
    i = -1;
    for (var c = Array(t + 1); ++i < t; )
      c[i] = n[i];
    return c[t] = r(u), a4(e, this, c);
  };
}
var u4 = o4;
function s4(e) {
  return function() {
    return e;
  };
}
var c4 = s4, l4 = aa, f4 = function() {
  try {
    var e = l4(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}(), pO = f4, d4 = c4, y0 = pO, h4 = xo, p4 = y0 ? function(e, t) {
  return y0(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: d4(t),
    writable: !0
  });
} : h4, v4 = p4, g4 = 800, y4 = 16, m4 = Date.now;
function b4(e) {
  var t = 0, r = 0;
  return function() {
    var n = m4(), i = y4 - (n - r);
    if (r = n, i > 0) {
      if (++t >= g4)
        return arguments[0];
    } else
      t = 0;
    return e.apply(void 0, arguments);
  };
}
var x4 = b4, w4 = v4, _4 = x4, O4 = _4(w4), A4 = O4, S4 = xo, P4 = u4, E4 = A4;
function T4(e, t) {
  return E4(P4(e, t, S4), e + "");
}
var $4 = T4, C4 = bv, M4 = os, I4 = jv, k4 = _i;
function j4(e, t, r) {
  if (!k4(r))
    return !1;
  var n = typeof t;
  return (n == "number" ? M4(r) && I4(t, r.length) : n == "string" && t in r) ? C4(r[t], e) : !1;
}
var Hl = j4, R4 = fO, N4 = r4, D4 = $4, m0 = Hl, L4 = D4(function(e, t) {
  if (e == null)
    return [];
  var r = t.length;
  return r > 1 && m0(e, t[0], t[1]) ? t = [] : r > 2 && m0(t[0], t[1], t[2]) && (t = [t[0]]), N4(e, R4(t, 1), []);
}), B4 = L4;
const Lv = /* @__PURE__ */ Je(B4);
function xu(e) {
  "@babel/helpers - typeof";
  return xu = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, xu(e);
}
function Qh() {
  return Qh = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Qh.apply(this, arguments);
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
    if (typeof e == "string") return b0(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return b0(e, t);
  }
}
function b0(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function U4(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, i, a, u, c = [], l = !0, f = !1;
    try {
      if (a = (r = r.call(e)).next, t !== 0) for (; !(l = (n = a.call(r)).done) && (c.push(n.value), c.length !== t); l = !0) ;
    } catch (d) {
      f = !0, i = d;
    } finally {
      try {
        if (!l && r.return != null && (u = r.return(), Object(u) !== u)) return;
      } finally {
        if (f) throw i;
      }
    }
    return c;
  }
}
function H4(e) {
  if (Array.isArray(e)) return e;
}
function x0(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Jd(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? x0(Object(r), !0).forEach(function(n) {
      G4(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : x0(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function G4(e, t, r) {
  return t = K4(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function K4(e) {
  var t = q4(e, "string");
  return xu(t) == "symbol" ? t : String(t);
}
function q4(e, t) {
  if (xu(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (xu(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function V4(e) {
  return Array.isArray(e) && Et(e[0]) && Et(e[1]) ? e.join(" ~ ") : e;
}
var Y4 = function(t) {
  var r = t.separator, n = r === void 0 ? " : " : r, i = t.contentStyle, a = i === void 0 ? {} : i, u = t.itemStyle, c = u === void 0 ? {} : u, l = t.labelStyle, f = l === void 0 ? {} : l, d = t.payload, h = t.formatter, v = t.itemSorter, g = t.wrapperClassName, x = t.labelClassName, y = t.label, w = t.labelFormatter, A = t.accessibilityLayer, O = A === void 0 ? !1 : A, S = function() {
    if (d && d.length) {
      var N = {
        padding: 0,
        margin: 0
      }, U = (v ? Lv(d, v) : d).map(function(z, J) {
        if (z.type === "none")
          return null;
        var H = Jd({
          display: "block",
          paddingTop: 4,
          paddingBottom: 4,
          color: z.color || "#000"
        }, c), Z = z.formatter || h || V4, K = z.value, ue = z.name, G = K, X = ue;
        if (Z && G != null && X != null) {
          var ae = Z(K, ue, z, J, d);
          if (Array.isArray(ae)) {
            var ce = F4(ae, 2);
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
  }, _ = Jd({
    margin: 0,
    padding: 10,
    backgroundColor: "#fff",
    border: "1px solid #ccc",
    whiteSpace: "nowrap"
  }, a), b = Jd({
    margin: 0
  }, f), E = !Te(y), C = E ? y : "", M = Me("recharts-default-tooltip", g), F = Me("recharts-tooltip-label", x);
  E && w && d !== void 0 && d !== null && (C = w(y, d));
  var D = O ? {
    role: "status",
    "aria-live": "assertive"
  } : {};
  return /* @__PURE__ */ k.createElement("div", Qh({
    className: M,
    style: _
  }, D), /* @__PURE__ */ k.createElement("p", {
    className: F,
    style: b
  }, /* @__PURE__ */ k.isValidElement(C) ? C : "".concat(C)), S());
};
function wu(e) {
  "@babel/helpers - typeof";
  return wu = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, wu(e);
}
function dc(e, t, r) {
  return t = X4(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function X4(e) {
  var t = Z4(e, "string");
  return wu(t) == "symbol" ? t : String(t);
}
function Z4(e, t) {
  if (wu(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (wu(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Jo = "recharts-tooltip-wrapper", J4 = {
  visibility: "hidden"
};
function Q4(e) {
  var t = e.coordinate, r = e.translateX, n = e.translateY;
  return Me(Jo, dc(dc(dc(dc({}, "".concat(Jo, "-right"), oe(r) && t && oe(t.x) && r >= t.x), "".concat(Jo, "-left"), oe(r) && t && oe(t.x) && r < t.x), "".concat(Jo, "-bottom"), oe(n) && t && oe(t.y) && n >= t.y), "".concat(Jo, "-top"), oe(n) && t && oe(t.y) && n < t.y));
}
function w0(e) {
  var t = e.allowEscapeViewBox, r = e.coordinate, n = e.key, i = e.offsetTopLeft, a = e.position, u = e.reverseDirection, c = e.tooltipDimension, l = e.viewBox, f = e.viewBoxDimension;
  if (a && oe(a[n]))
    return a[n];
  var d = r[n] - c - i, h = r[n] + i;
  if (t[n])
    return u[n] ? d : h;
  if (u[n]) {
    var v = d, g = l[n];
    return v < g ? Math.max(h, l[n]) : Math.max(d, l[n]);
  }
  var x = h + c, y = l[n] + f;
  return x > y ? Math.max(d, l[n]) : Math.max(h, l[n]);
}
function e5(e) {
  var t = e.translateX, r = e.translateY, n = e.useTranslate3d;
  return {
    transform: n ? "translate3d(".concat(t, "px, ").concat(r, "px, 0)") : "translate(".concat(t, "px, ").concat(r, "px)")
  };
}
function t5(e) {
  var t = e.allowEscapeViewBox, r = e.coordinate, n = e.offsetTopLeft, i = e.position, a = e.reverseDirection, u = e.tooltipBox, c = e.useTranslate3d, l = e.viewBox, f, d, h;
  return u.height > 0 && u.width > 0 && r ? (d = w0({
    allowEscapeViewBox: t,
    coordinate: r,
    key: "x",
    offsetTopLeft: n,
    position: i,
    reverseDirection: a,
    tooltipDimension: u.width,
    viewBox: l,
    viewBoxDimension: l.width
  }), h = w0({
    allowEscapeViewBox: t,
    coordinate: r,
    key: "y",
    offsetTopLeft: n,
    position: i,
    reverseDirection: a,
    tooltipDimension: u.height,
    viewBox: l,
    viewBoxDimension: l.height
  }), f = e5({
    translateX: d,
    translateY: h,
    useTranslate3d: c
  })) : f = J4, {
    cssProperties: f,
    cssClasses: Q4({
      translateX: d,
      translateY: h,
      coordinate: r
    })
  };
}
function Ua(e) {
  "@babel/helpers - typeof";
  return Ua = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ua(e);
}
function _0(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function O0(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? _0(Object(r), !0).forEach(function(n) {
      rp(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : _0(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function r5(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function n5(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, gO(n.key), n);
  }
}
function i5(e, t, r) {
  return t && n5(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function a5(e, t, r) {
  return t = Wc(t), o5(e, vO() ? Reflect.construct(t, r || [], Wc(e).constructor) : t.apply(e, r));
}
function o5(e, t) {
  if (t && (Ua(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return ep(e);
}
function vO() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (vO = function() {
    return !!e;
  })();
}
function Wc(e) {
  return Wc = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Wc(e);
}
function ep(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function u5(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && tp(e, t);
}
function tp(e, t) {
  return tp = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, tp(e, t);
}
function rp(e, t, r) {
  return t = gO(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function gO(e) {
  var t = s5(e, "string");
  return Ua(t) == "symbol" ? t : String(t);
}
function s5(e, t) {
  if (Ua(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Ua(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var A0 = 1, c5 = /* @__PURE__ */ function(e) {
  u5(t, e);
  function t() {
    var r;
    r5(this, t);
    for (var n = arguments.length, i = new Array(n), a = 0; a < n; a++)
      i[a] = arguments[a];
    return r = a5(this, t, [].concat(i)), rp(ep(r), "state", {
      dismissed: !1,
      dismissedAtCoordinate: {
        x: 0,
        y: 0
      },
      lastBoundingBox: {
        width: -1,
        height: -1
      }
    }), rp(ep(r), "handleKeyDown", function(u) {
      if (u.key === "Escape") {
        var c, l, f, d;
        r.setState({
          dismissed: !0,
          dismissedAtCoordinate: {
            x: (c = (l = r.props.coordinate) === null || l === void 0 ? void 0 : l.x) !== null && c !== void 0 ? c : 0,
            y: (f = (d = r.props.coordinate) === null || d === void 0 ? void 0 : d.y) !== null && f !== void 0 ? f : 0
          }
        });
      }
    }), r;
  }
  return i5(t, [{
    key: "updateBBox",
    value: function() {
      if (this.wrapperNode && this.wrapperNode.getBoundingClientRect) {
        var n = this.wrapperNode.getBoundingClientRect();
        (Math.abs(n.width - this.state.lastBoundingBox.width) > A0 || Math.abs(n.height - this.state.lastBoundingBox.height) > A0) && this.setState({
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
      var n = this, i = this.props, a = i.active, u = i.allowEscapeViewBox, c = i.animationDuration, l = i.animationEasing, f = i.children, d = i.coordinate, h = i.hasPayload, v = i.isAnimationActive, g = i.offset, x = i.position, y = i.reverseDirection, w = i.useTranslate3d, A = i.viewBox, O = i.wrapperStyle, S = t5({
        allowEscapeViewBox: u,
        coordinate: d,
        offsetTopLeft: g,
        position: x,
        reverseDirection: y,
        tooltipBox: this.state.lastBoundingBox,
        useTranslate3d: w,
        viewBox: A
      }), _ = S.cssClasses, b = S.cssProperties, E = O0(O0({
        transition: v && a ? "transform ".concat(c, "ms ").concat(l) : void 0
      }, b), {}, {
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
}(Nr), l5 = function() {
  return !(typeof window < "u" && window.document && window.document.createElement && window.setTimeout);
}, Yr = {
  isSsr: l5(),
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
      Bv(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : S0(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function f5(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function d5(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, mO(n.key), n);
  }
}
function h5(e, t, r) {
  return t && d5(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function p5(e, t, r) {
  return t = zc(t), v5(e, yO() ? Reflect.construct(t, r || [], zc(e).constructor) : t.apply(e, r));
}
function v5(e, t) {
  if (t && (Ha(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return g5(e);
}
function g5(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function yO() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (yO = function() {
    return !!e;
  })();
}
function zc(e) {
  return zc = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, zc(e);
}
function y5(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && np(e, t);
}
function np(e, t) {
  return np = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, np(e, t);
}
function Bv(e, t, r) {
  return t = mO(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function mO(e) {
  var t = m5(e, "string");
  return Ha(t) == "symbol" ? t : String(t);
}
function m5(e, t) {
  if (Ha(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Ha(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function b5(e) {
  return e.dataKey;
}
function x5(e, t) {
  return /* @__PURE__ */ k.isValidElement(e) ? /* @__PURE__ */ k.cloneElement(e, t) : typeof e == "function" ? /* @__PURE__ */ k.createElement(e, t) : /* @__PURE__ */ k.createElement(Y4, t);
}
var an = /* @__PURE__ */ function(e) {
  y5(t, e);
  function t() {
    return f5(this, t), p5(this, t, arguments);
  }
  return h5(t, [{
    key: "render",
    value: function() {
      var n = this, i = this.props, a = i.active, u = i.allowEscapeViewBox, c = i.animationDuration, l = i.animationEasing, f = i.content, d = i.coordinate, h = i.filterNull, v = i.isAnimationActive, g = i.offset, x = i.payload, y = i.payloadUniqBy, w = i.position, A = i.reverseDirection, O = i.useTranslate3d, S = i.viewBox, _ = i.wrapperStyle, b = x ?? [];
      h && b.length && (b = oO(x.filter(function(C) {
        return C.value != null && (C.hide !== !0 || n.props.includeHidden);
      }), y, b5));
      var E = b.length > 0;
      return /* @__PURE__ */ k.createElement(c5, {
        allowEscapeViewBox: u,
        animationDuration: c,
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
      }, x5(f, P0(P0({}, this.props), {}, {
        payload: b
      })));
    }
  }]), t;
}(Nr);
Bv(an, "displayName", "Tooltip");
Bv(an, "defaultProps", {
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
var w5 = hn, _5 = function() {
  return w5.Date.now();
}, O5 = _5, A5 = /\s/;
function S5(e) {
  for (var t = e.length; t-- && A5.test(e.charAt(t)); )
    ;
  return t;
}
var P5 = S5, E5 = P5, T5 = /^\s+/;
function $5(e) {
  return e && e.slice(0, E5(e) + 1).replace(T5, "");
}
var C5 = $5, M5 = C5, E0 = _i, I5 = fo, T0 = NaN, k5 = /^[-+]0x[0-9a-f]+$/i, j5 = /^0b[01]+$/i, R5 = /^0o[0-7]+$/i, N5 = parseInt;
function D5(e) {
  if (typeof e == "number")
    return e;
  if (I5(e))
    return T0;
  if (E0(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = E0(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = M5(e);
  var r = j5.test(e);
  return r || R5.test(e) ? N5(e.slice(2), r ? 2 : 8) : k5.test(e) ? T0 : +e;
}
var bO = D5, L5 = _i, Qd = O5, $0 = bO, B5 = "Expected a function", F5 = Math.max, W5 = Math.min;
function z5(e, t, r) {
  var n, i, a, u, c, l, f = 0, d = !1, h = !1, v = !0;
  if (typeof e != "function")
    throw new TypeError(B5);
  t = $0(t) || 0, L5(r) && (d = !!r.leading, h = "maxWait" in r, a = h ? F5($0(r.maxWait) || 0, t) : a, v = "trailing" in r ? !!r.trailing : v);
  function g(E) {
    var C = n, M = i;
    return n = i = void 0, f = E, u = e.apply(M, C), u;
  }
  function x(E) {
    return f = E, c = setTimeout(A, t), d ? g(E) : u;
  }
  function y(E) {
    var C = E - l, M = E - f, F = t - C;
    return h ? W5(F, a - M) : F;
  }
  function w(E) {
    var C = E - l, M = E - f;
    return l === void 0 || C >= t || C < 0 || h && M >= a;
  }
  function A() {
    var E = Qd();
    if (w(E))
      return O(E);
    c = setTimeout(A, y(E));
  }
  function O(E) {
    return c = void 0, v && n ? g(E) : (n = i = void 0, u);
  }
  function S() {
    c !== void 0 && clearTimeout(c), f = 0, n = l = i = c = void 0;
  }
  function _() {
    return c === void 0 ? u : O(Qd());
  }
  function b() {
    var E = Qd(), C = w(E);
    if (n = arguments, i = this, l = E, C) {
      if (c === void 0)
        return x(l);
      if (h)
        return clearTimeout(c), c = setTimeout(A, t), g(l);
    }
    return c === void 0 && (c = setTimeout(A, t)), u;
  }
  return b.cancel = S, b.flush = _, b;
}
var U5 = z5, H5 = U5, G5 = _i, K5 = "Expected a function";
function q5(e, t, r) {
  var n = !0, i = !0;
  if (typeof e != "function")
    throw new TypeError(K5);
  return G5(r) && (n = "leading" in r ? !!r.leading : n, i = "trailing" in r ? !!r.trailing : i), H5(e, t, {
    leading: n,
    maxWait: t,
    trailing: i
  });
}
var V5 = q5;
const xO = /* @__PURE__ */ Je(V5);
function _u(e) {
  "@babel/helpers - typeof";
  return _u = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, _u(e);
}
function C0(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function hc(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? C0(Object(r), !0).forEach(function(n) {
      Y5(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : C0(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Y5(e, t, r) {
  return t = X5(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function X5(e) {
  var t = Z5(e, "string");
  return _u(t) == "symbol" ? t : String(t);
}
function Z5(e, t) {
  if (_u(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (_u(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function J5(e, t) {
  return rU(e) || tU(e, t) || eU(e, t) || Q5();
}
function Q5() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function eU(e, t) {
  if (e) {
    if (typeof e == "string") return M0(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return M0(e, t);
  }
}
function M0(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function tU(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, i, a, u, c = [], l = !0, f = !1;
    try {
      if (a = (r = r.call(e)).next, t !== 0) for (; !(l = (n = a.call(r)).done) && (c.push(n.value), c.length !== t); l = !0) ;
    } catch (d) {
      f = !0, i = d;
    } finally {
      try {
        if (!l && r.return != null && (u = r.return(), Object(u) !== u)) return;
      } finally {
        if (f) throw i;
      }
    }
    return c;
  }
}
function rU(e) {
  if (Array.isArray(e)) return e;
}
var nU = /* @__PURE__ */ Nn(function(e, t) {
  var r = e.aspect, n = e.initialDimension, i = n === void 0 ? {
    width: -1,
    height: -1
  } : n, a = e.width, u = a === void 0 ? "100%" : a, c = e.height, l = c === void 0 ? "100%" : c, f = e.minWidth, d = f === void 0 ? 0 : f, h = e.minHeight, v = e.maxHeight, g = e.children, x = e.debounce, y = x === void 0 ? 0 : x, w = e.id, A = e.className, O = e.onResize, S = e.style, _ = S === void 0 ? {} : S, b = Rn(null), E = Rn();
  E.current = O, U1(t, function() {
    return Object.defineProperty(b.current, "current", {
      get: function() {
        return console.warn("The usage of ref.current.current is deprecated and will no longer be supported."), b.current;
      },
      configurable: !0
    });
  });
  var C = ln({
    containerWidth: i.width,
    containerHeight: i.height
  }), M = J5(C, 2), F = M[0], D = M[1], B = pi(function(U, z) {
    D(function(J) {
      var H = Math.round(U), Z = Math.round(z);
      return J.containerWidth === H && J.containerHeight === Z ? J : {
        containerWidth: H,
        containerHeight: Z
      };
    });
  }, []);
  zn(function() {
    var U = function(ue) {
      var G, X = ue[0].contentRect, ae = X.width, ce = X.height;
      B(ae, ce), (G = E.current) === null || G === void 0 || G.call(E, ae, ce);
    };
    y > 0 && (U = xO(U, y, {
      trailing: !0,
      leading: !1
    }));
    var z = new ResizeObserver(U), J = b.current.getBoundingClientRect(), H = J.width, Z = J.height;
    return B(H, Z), z.observe(b.current), function() {
      z.disconnect();
    };
  }, [B, y]);
  var N = ns(function() {
    var U = F.containerWidth, z = F.containerHeight;
    if (U < 0 || z < 0)
      return null;
    Vr(Hi(u) || Hi(l), `The width(%s) and height(%s) are both fixed numbers,
       maybe you don't need to use a ResponsiveContainer.`, u, l), Vr(!r || r > 0, "The aspect(%s) must be greater than zero.", r);
    var J = Hi(u) ? U : u, H = Hi(l) ? z : l;
    r && r > 0 && (J ? H = J / r : H && (J = H * r), v && H > v && (H = v)), Vr(J > 0 || H > 0, `The width(%s) and height(%s) of chart should be greater than 0,
       please check the style of container, or the props width(%s) and height(%s),
       or add a minWidth(%s) or minHeight(%s) or use aspect(%s) to control the
       height and width.`, J, H, u, l, d, h, r);
    var Z = !Array.isArray(g) && Mh.isElement(g) && In(g.type).endsWith("Chart");
    return k.Children.map(g, function(K) {
      return Mh.isElement(K) ? /* @__PURE__ */ At(K, hc({
        width: J,
        height: H
      }, Z ? {
        style: hc({
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
    style: hc(hc({}, _), {}, {
      width: u,
      height: l,
      minWidth: d,
      minHeight: h,
      maxHeight: v
    }),
    ref: b
  }, N);
}), Fv = function(t) {
  return null;
};
Fv.displayName = "Cell";
function Ou(e) {
  "@babel/helpers - typeof";
  return Ou = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ou(e);
}
function I0(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function ip(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? I0(Object(r), !0).forEach(function(n) {
      iU(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : I0(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function iU(e, t, r) {
  return t = aU(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function aU(e) {
  var t = oU(e, "string");
  return Ou(t) == "symbol" ? t : String(t);
}
function oU(e, t) {
  if (Ou(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Ou(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Sa = {
  widthCache: {},
  cacheCount: 0
}, uU = 2e3, sU = {
  position: "absolute",
  top: "-20000px",
  left: 0,
  padding: 0,
  margin: 0,
  border: "none",
  whiteSpace: "pre"
}, k0 = "recharts_measurement_span";
function cU(e) {
  var t = ip({}, e);
  return Object.keys(t).forEach(function(r) {
    t[r] || delete t[r];
  }), t;
}
var lu = function(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  if (t == null || Yr.isSsr)
    return {
      width: 0,
      height: 0
    };
  var n = cU(r), i = JSON.stringify({
    text: t,
    copyStyle: n
  });
  if (Sa.widthCache[i])
    return Sa.widthCache[i];
  try {
    var a = document.getElementById(k0);
    a || (a = document.createElement("span"), a.setAttribute("id", k0), a.setAttribute("aria-hidden", "true"), document.body.appendChild(a));
    var u = ip(ip({}, sU), n);
    Object.assign(a.style, u), a.textContent = "".concat(t);
    var c = a.getBoundingClientRect(), l = {
      width: c.width,
      height: c.height
    };
    return Sa.widthCache[i] = l, ++Sa.cacheCount > uU && (Sa.cacheCount = 0, Sa.widthCache = {}), l;
  } catch {
    return {
      width: 0,
      height: 0
    };
  }
}, lU = function(t) {
  return {
    top: t.top + window.scrollY - document.documentElement.clientTop,
    left: t.left + window.scrollX - document.documentElement.clientLeft
  };
};
function Au(e) {
  "@babel/helpers - typeof";
  return Au = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Au(e);
}
function Uc(e, t) {
  return pU(e) || hU(e, t) || dU(e, t) || fU();
}
function fU() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function dU(e, t) {
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
function hU(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, i, a, u, c = [], l = !0, f = !1;
    try {
      if (a = (r = r.call(e)).next, t === 0) {
        if (Object(r) !== r) return;
        l = !1;
      } else for (; !(l = (n = a.call(r)).done) && (c.push(n.value), c.length !== t); l = !0) ;
    } catch (d) {
      f = !0, i = d;
    } finally {
      try {
        if (!l && r.return != null && (u = r.return(), Object(u) !== u)) return;
      } finally {
        if (f) throw i;
      }
    }
    return c;
  }
}
function pU(e) {
  if (Array.isArray(e)) return e;
}
function vU(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function R0(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, yU(n.key), n);
  }
}
function gU(e, t, r) {
  return t && R0(e.prototype, t), r && R0(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function yU(e) {
  var t = mU(e, "string");
  return Au(t) == "symbol" ? t : String(t);
}
function mU(e, t) {
  if (Au(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Au(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var N0 = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([*/])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/, D0 = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([+-])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/, bU = /^px|cm|vh|vw|em|rem|%|mm|in|pt|pc|ex|ch|vmin|vmax|Q$/, xU = /(-?\d+(?:\.\d+)?)([a-zA-Z%]+)?/, wO = {
  cm: 96 / 2.54,
  mm: 96 / 25.4,
  pt: 96 / 72,
  pc: 96 / 6,
  in: 96,
  Q: 96 / (2.54 * 40),
  px: 1
}, wU = Object.keys(wO), Ca = "NaN";
function _U(e, t) {
  return e * wO[t];
}
var pc = /* @__PURE__ */ function() {
  function e(t, r) {
    vU(this, e), this.num = t, this.unit = r, this.num = t, this.unit = r, Number.isNaN(t) && (this.unit = ""), r !== "" && !bU.test(r) && (this.num = NaN, this.unit = ""), wU.includes(r) && (this.num = _U(t, r), this.unit = "px");
  }
  return gU(e, [{
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
      var n, i = (n = xU.exec(r)) !== null && n !== void 0 ? n : [], a = Uc(i, 3), u = a[1], c = a[2];
      return new e(parseFloat(u), c ?? "");
    }
  }]), e;
}();
function _O(e) {
  if (e.includes(Ca))
    return Ca;
  for (var t = e; t.includes("*") || t.includes("/"); ) {
    var r, n = (r = N0.exec(t)) !== null && r !== void 0 ? r : [], i = Uc(n, 4), a = i[1], u = i[2], c = i[3], l = pc.parse(a ?? ""), f = pc.parse(c ?? ""), d = u === "*" ? l.multiply(f) : l.divide(f);
    if (d.isNaN())
      return Ca;
    t = t.replace(N0, d.toString());
  }
  for (; t.includes("+") || /.-\d+(?:\.\d+)?/.test(t); ) {
    var h, v = (h = D0.exec(t)) !== null && h !== void 0 ? h : [], g = Uc(v, 4), x = g[1], y = g[2], w = g[3], A = pc.parse(x ?? ""), O = pc.parse(w ?? ""), S = y === "+" ? A.add(O) : A.subtract(O);
    if (S.isNaN())
      return Ca;
    t = t.replace(D0, S.toString());
  }
  return t;
}
var L0 = /\(([^()]*)\)/;
function OU(e) {
  for (var t = e; t.includes("("); ) {
    var r = L0.exec(t), n = Uc(r, 2), i = n[1];
    t = t.replace(L0, _O(i));
  }
  return t;
}
function AU(e) {
  var t = e.replace(/\s+/g, "");
  return t = OU(t), t = _O(t), t;
}
function SU(e) {
  try {
    return AU(e);
  } catch {
    return Ca;
  }
}
function eh(e) {
  var t = SU(e.slice(5, -1));
  return t === Ca ? "" : t;
}
var PU = ["x", "y", "lineHeight", "capHeight", "scaleToFit", "textAnchor", "verticalAnchor", "fill"], EU = ["dx", "dy", "angle", "className", "breakAll"];
function ap() {
  return ap = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, ap.apply(this, arguments);
}
function B0(e, t) {
  if (e == null) return {};
  var r = TU(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function TU(e, t) {
  if (e == null) return {};
  var r = {}, n = Object.keys(e), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
function F0(e, t) {
  return IU(e) || MU(e, t) || CU(e, t) || $U();
}
function $U() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function CU(e, t) {
  if (e) {
    if (typeof e == "string") return W0(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return W0(e, t);
  }
}
function W0(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function MU(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, i, a, u, c = [], l = !0, f = !1;
    try {
      if (a = (r = r.call(e)).next, t === 0) {
        if (Object(r) !== r) return;
        l = !1;
      } else for (; !(l = (n = a.call(r)).done) && (c.push(n.value), c.length !== t); l = !0) ;
    } catch (d) {
      f = !0, i = d;
    } finally {
      try {
        if (!l && r.return != null && (u = r.return(), Object(u) !== u)) return;
      } finally {
        if (f) throw i;
      }
    }
    return c;
  }
}
function IU(e) {
  if (Array.isArray(e)) return e;
}
var OO = /[ \f\n\r\t\v\u2028\u2029]+/, AO = function(t) {
  var r = t.children, n = t.breakAll, i = t.style;
  try {
    var a = [];
    Te(r) || (n ? a = r.toString().split("") : a = r.toString().split(OO));
    var u = a.map(function(l) {
      return {
        word: l,
        width: lu(l, i).width
      };
    }), c = n ? 0 : lu(" ", i).width;
    return {
      wordsWithComputedWidth: u,
      spaceWidth: c
    };
  } catch {
    return null;
  }
}, kU = function(t, r, n, i, a) {
  var u = t.maxLines, c = t.children, l = t.style, f = t.breakAll, d = oe(u), h = c, v = function() {
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
  }, g = v(r), x = function(J) {
    return J.reduce(function(H, Z) {
      return H.width > Z.width ? H : Z;
    });
  };
  if (!d)
    return g;
  for (var y = "…", w = function(J) {
    var H = h.slice(0, J), Z = AO({
      breakAll: f,
      style: l,
      children: H + y
    }).wordsWithComputedWidth, K = v(Z), ue = K.length > u || x(K).width > Number(i);
    return [ue, K];
  }, A = 0, O = h.length - 1, S = 0, _; A <= O && S <= h.length - 1; ) {
    var b = Math.floor((A + O) / 2), E = b - 1, C = w(E), M = F0(C, 2), F = M[0], D = M[1], B = w(b), N = F0(B, 1), U = N[0];
    if (!F && !U && (A = b + 1), F && U && (O = b - 1), !F && U) {
      _ = D;
      break;
    }
    S++;
  }
  return _ || g;
}, z0 = function(t) {
  var r = Te(t) ? [] : t.toString().split(OO);
  return [{
    words: r
  }];
}, jU = function(t) {
  var r = t.width, n = t.scaleToFit, i = t.children, a = t.style, u = t.breakAll, c = t.maxLines;
  if ((r || n) && !Yr.isSsr) {
    var l, f, d = AO({
      breakAll: u,
      children: i,
      style: a
    });
    if (d) {
      var h = d.wordsWithComputedWidth, v = d.spaceWidth;
      l = h, f = v;
    } else
      return z0(i);
    return kU({
      breakAll: u,
      children: i,
      maxLines: c,
      style: a
    }, l, f, r, n);
  }
  return z0(i);
}, U0 = "#808080", gi = function(t) {
  var r = t.x, n = r === void 0 ? 0 : r, i = t.y, a = i === void 0 ? 0 : i, u = t.lineHeight, c = u === void 0 ? "1em" : u, l = t.capHeight, f = l === void 0 ? "0.71em" : l, d = t.scaleToFit, h = d === void 0 ? !1 : d, v = t.textAnchor, g = v === void 0 ? "start" : v, x = t.verticalAnchor, y = x === void 0 ? "end" : x, w = t.fill, A = w === void 0 ? U0 : w, O = B0(t, PU), S = ns(function() {
    return jU({
      breakAll: O.breakAll,
      children: O.children,
      maxLines: O.maxLines,
      scaleToFit: h,
      style: O.style,
      width: O.width
    });
  }, [O.breakAll, O.children, O.maxLines, h, O.style, O.width]), _ = O.dx, b = O.dy, E = O.angle, C = O.className, M = O.breakAll, F = B0(O, EU);
  if (!Et(n) || !Et(a))
    return null;
  var D = n + (oe(_) ? _ : 0), B = a + (oe(b) ? b : 0), N;
  switch (y) {
    case "start":
      N = eh("calc(".concat(f, ")"));
      break;
    case "middle":
      N = eh("calc(".concat((S.length - 1) / 2, " * -").concat(c, " + (").concat(f, " / 2))"));
      break;
    default:
      N = eh("calc(".concat(S.length - 1, " * -").concat(c, ")"));
      break;
  }
  var U = [];
  if (h) {
    var z = S[0].width, J = O.width;
    U.push("scale(".concat((oe(J) ? J / z : 1) / z, ")"));
  }
  return E && U.push("rotate(".concat(E, ", ").concat(D, ", ").concat(B, ")")), U.length && (F.transform = U.join(" ")), /* @__PURE__ */ k.createElement("text", ap({}, me(F, !0), {
    x: D,
    y: B,
    className: Me("recharts-text", C),
    textAnchor: g,
    fill: A.includes("url") ? U0 : A
  }), S.map(function(H, Z) {
    var K = H.words.join(M ? "" : " ");
    return /* @__PURE__ */ k.createElement("tspan", {
      x: D,
      dy: Z === 0 ? N : c,
      key: K
    }, K);
  }));
};
function vi(e, t) {
  return e == null || t == null ? NaN : e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function RU(e, t) {
  return e == null || t == null ? NaN : t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function Wv(e) {
  let t, r, n;
  e.length !== 2 ? (t = vi, r = (c, l) => vi(e(c), l), n = (c, l) => e(c) - l) : (t = e === vi || e === RU ? e : NU, r = e, n = e);
  function i(c, l, f = 0, d = c.length) {
    if (f < d) {
      if (t(l, l) !== 0) return d;
      do {
        const h = f + d >>> 1;
        r(c[h], l) < 0 ? f = h + 1 : d = h;
      } while (f < d);
    }
    return f;
  }
  function a(c, l, f = 0, d = c.length) {
    if (f < d) {
      if (t(l, l) !== 0) return d;
      do {
        const h = f + d >>> 1;
        r(c[h], l) <= 0 ? f = h + 1 : d = h;
      } while (f < d);
    }
    return f;
  }
  function u(c, l, f = 0, d = c.length) {
    const h = i(c, l, f, d - 1);
    return h > f && n(c[h - 1], l) > -n(c[h], l) ? h - 1 : h;
  }
  return { left: i, center: u, right: a };
}
function NU() {
  return 0;
}
function SO(e) {
  return e === null ? NaN : +e;
}
function* DU(e, t) {
  for (let r of e)
    r != null && (r = +r) >= r && (yield r);
}
const LU = Wv(vi), us = LU.right;
Wv(SO).center;
class H0 extends Map {
  constructor(t, r = WU) {
    if (super(), Object.defineProperties(this, { _intern: { value: /* @__PURE__ */ new Map() }, _key: { value: r } }), t != null) for (const [n, i] of t) this.set(n, i);
  }
  get(t) {
    return super.get(G0(this, t));
  }
  has(t) {
    return super.has(G0(this, t));
  }
  set(t, r) {
    return super.set(BU(this, t), r);
  }
  delete(t) {
    return super.delete(FU(this, t));
  }
}
function G0({ _intern: e, _key: t }, r) {
  const n = t(r);
  return e.has(n) ? e.get(n) : r;
}
function BU({ _intern: e, _key: t }, r) {
  const n = t(r);
  return e.has(n) ? e.get(n) : (e.set(n, r), r);
}
function FU({ _intern: e, _key: t }, r) {
  const n = t(r);
  return e.has(n) && (r = e.get(n), e.delete(n)), r;
}
function WU(e) {
  return e !== null && typeof e == "object" ? e.valueOf() : e;
}
function zU(e = vi) {
  if (e === vi) return PO;
  if (typeof e != "function") throw new TypeError("compare is not a function");
  return (t, r) => {
    const n = e(t, r);
    return n || n === 0 ? n : (e(r, r) === 0) - (e(t, t) === 0);
  };
}
function PO(e, t) {
  return (e == null || !(e >= e)) - (t == null || !(t >= t)) || (e < t ? -1 : e > t ? 1 : 0);
}
const UU = Math.sqrt(50), HU = Math.sqrt(10), GU = Math.sqrt(2);
function Hc(e, t, r) {
  const n = (t - e) / Math.max(0, r), i = Math.floor(Math.log10(n)), a = n / Math.pow(10, i), u = a >= UU ? 10 : a >= HU ? 5 : a >= GU ? 2 : 1;
  let c, l, f;
  return i < 0 ? (f = Math.pow(10, -i) / u, c = Math.round(e * f), l = Math.round(t * f), c / f < e && ++c, l / f > t && --l, f = -f) : (f = Math.pow(10, i) * u, c = Math.round(e / f), l = Math.round(t / f), c * f < e && ++c, l * f > t && --l), l < c && 0.5 <= r && r < 2 ? Hc(e, t, r * 2) : [c, l, f];
}
function op(e, t, r) {
  if (t = +t, e = +e, r = +r, !(r > 0)) return [];
  if (e === t) return [e];
  const n = t < e, [i, a, u] = n ? Hc(t, e, r) : Hc(e, t, r);
  if (!(a >= i)) return [];
  const c = a - i + 1, l = new Array(c);
  if (n)
    if (u < 0) for (let f = 0; f < c; ++f) l[f] = (a - f) / -u;
    else for (let f = 0; f < c; ++f) l[f] = (a - f) * u;
  else if (u < 0) for (let f = 0; f < c; ++f) l[f] = (i + f) / -u;
  else for (let f = 0; f < c; ++f) l[f] = (i + f) * u;
  return l;
}
function up(e, t, r) {
  return t = +t, e = +e, r = +r, Hc(e, t, r)[2];
}
function sp(e, t, r) {
  t = +t, e = +e, r = +r;
  const n = t < e, i = n ? up(t, e, r) : up(e, t, r);
  return (n ? -1 : 1) * (i < 0 ? 1 / -i : i);
}
function K0(e, t) {
  let r;
  for (const n of e)
    n != null && (r < n || r === void 0 && n >= n) && (r = n);
  return r;
}
function q0(e, t) {
  let r;
  for (const n of e)
    n != null && (r > n || r === void 0 && n >= n) && (r = n);
  return r;
}
function EO(e, t, r = 0, n = 1 / 0, i) {
  if (t = Math.floor(t), r = Math.floor(Math.max(0, r)), n = Math.floor(Math.min(e.length - 1, n)), !(r <= t && t <= n)) return e;
  for (i = i === void 0 ? PO : zU(i); n > r; ) {
    if (n - r > 600) {
      const l = n - r + 1, f = t - r + 1, d = Math.log(l), h = 0.5 * Math.exp(2 * d / 3), v = 0.5 * Math.sqrt(d * h * (l - h) / l) * (f - l / 2 < 0 ? -1 : 1), g = Math.max(r, Math.floor(t - f * h / l + v)), x = Math.min(n, Math.floor(t + (l - f) * h / l + v));
      EO(e, t, g, x, i);
    }
    const a = e[t];
    let u = r, c = n;
    for (Qo(e, r, t), i(e[n], a) > 0 && Qo(e, r, n); u < c; ) {
      for (Qo(e, u, c), ++u, --c; i(e[u], a) < 0; ) ++u;
      for (; i(e[c], a) > 0; ) --c;
    }
    i(e[r], a) === 0 ? Qo(e, r, c) : (++c, Qo(e, c, n)), c <= t && (r = c + 1), t <= c && (n = c - 1);
  }
  return e;
}
function Qo(e, t, r) {
  const n = e[t];
  e[t] = e[r], e[r] = n;
}
function KU(e, t, r) {
  if (e = Float64Array.from(DU(e)), !(!(n = e.length) || isNaN(t = +t))) {
    if (t <= 0 || n < 2) return q0(e);
    if (t >= 1) return K0(e);
    var n, i = (n - 1) * t, a = Math.floor(i), u = K0(EO(e, a).subarray(0, a + 1)), c = q0(e.subarray(a + 1));
    return u + (c - u) * (i - a);
  }
}
function qU(e, t, r = SO) {
  if (!(!(n = e.length) || isNaN(t = +t))) {
    if (t <= 0 || n < 2) return +r(e[0], 0, e);
    if (t >= 1) return +r(e[n - 1], n - 1, e);
    var n, i = (n - 1) * t, a = Math.floor(i), u = +r(e[a], a, e), c = +r(e[a + 1], a + 1, e);
    return u + (c - u) * (i - a);
  }
}
function VU(e, t, r) {
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
const cp = Symbol("implicit");
function zv() {
  var e = new H0(), t = [], r = [], n = cp;
  function i(a) {
    let u = e.get(a);
    if (u === void 0) {
      if (n !== cp) return n;
      e.set(a, u = t.push(a) - 1);
    }
    return r[u % r.length];
  }
  return i.domain = function(a) {
    if (!arguments.length) return t.slice();
    t = [], e = new H0();
    for (const u of a)
      e.has(u) || e.set(u, t.push(u) - 1);
    return i;
  }, i.range = function(a) {
    return arguments.length ? (r = Array.from(a), i) : r.slice();
  }, i.unknown = function(a) {
    return arguments.length ? (n = a, i) : n;
  }, i.copy = function() {
    return zv(t, r).unknown(n);
  }, Dr.apply(i, arguments), i;
}
function Su() {
  var e = zv().unknown(void 0), t = e.domain, r = e.range, n = 0, i = 1, a, u, c = !1, l = 0, f = 0, d = 0.5;
  delete e.unknown;
  function h() {
    var v = t().length, g = i < n, x = g ? i : n, y = g ? n : i;
    a = (y - x) / Math.max(1, v - l + f * 2), c && (a = Math.floor(a)), x += (y - x - a * (v - l)) * d, u = a * (1 - l), c && (x = Math.round(x), u = Math.round(u));
    var w = VU(v).map(function(A) {
      return x + a * A;
    });
    return r(g ? w.reverse() : w);
  }
  return e.domain = function(v) {
    return arguments.length ? (t(v), h()) : t();
  }, e.range = function(v) {
    return arguments.length ? ([n, i] = v, n = +n, i = +i, h()) : [n, i];
  }, e.rangeRound = function(v) {
    return [n, i] = v, n = +n, i = +i, c = !0, h();
  }, e.bandwidth = function() {
    return u;
  }, e.step = function() {
    return a;
  }, e.round = function(v) {
    return arguments.length ? (c = !!v, h()) : c;
  }, e.padding = function(v) {
    return arguments.length ? (l = Math.min(1, f = +v), h()) : l;
  }, e.paddingInner = function(v) {
    return arguments.length ? (l = Math.min(1, v), h()) : l;
  }, e.paddingOuter = function(v) {
    return arguments.length ? (f = +v, h()) : f;
  }, e.align = function(v) {
    return arguments.length ? (d = Math.max(0, Math.min(1, v)), h()) : d;
  }, e.copy = function() {
    return Su(t(), [n, i]).round(c).paddingInner(l).paddingOuter(f).align(d);
  }, Dr.apply(h(), arguments);
}
function TO(e) {
  var t = e.copy;
  return e.padding = e.paddingOuter, delete e.paddingInner, delete e.paddingOuter, e.copy = function() {
    return TO(t());
  }, e;
}
function fu() {
  return TO(Su.apply(null, arguments).paddingInner(1));
}
function Uv(e, t, r) {
  e.prototype = t.prototype = r, r.constructor = e;
}
function $O(e, t) {
  var r = Object.create(e.prototype);
  for (var n in t) r[n] = t[n];
  return r;
}
function ss() {
}
var Pu = 0.7, Gc = 1 / Pu, Na = "\\s*([+-]?\\d+)\\s*", Eu = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", sn = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", YU = /^#([0-9a-f]{3,8})$/, XU = new RegExp(`^rgb\\(${Na},${Na},${Na}\\)$`), ZU = new RegExp(`^rgb\\(${sn},${sn},${sn}\\)$`), JU = new RegExp(`^rgba\\(${Na},${Na},${Na},${Eu}\\)$`), QU = new RegExp(`^rgba\\(${sn},${sn},${sn},${Eu}\\)$`), e7 = new RegExp(`^hsl\\(${Eu},${sn},${sn}\\)$`), t7 = new RegExp(`^hsla\\(${Eu},${sn},${sn},${Eu}\\)$`), V0 = {
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
Uv(ss, Tu, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: Y0,
  // Deprecated! Use color.formatHex.
  formatHex: Y0,
  formatHex8: r7,
  formatHsl: n7,
  formatRgb: X0,
  toString: X0
});
function Y0() {
  return this.rgb().formatHex();
}
function r7() {
  return this.rgb().formatHex8();
}
function n7() {
  return CO(this).formatHsl();
}
function X0() {
  return this.rgb().formatRgb();
}
function Tu(e) {
  var t, r;
  return e = (e + "").trim().toLowerCase(), (t = YU.exec(e)) ? (r = t[1].length, t = parseInt(t[1], 16), r === 6 ? Z0(t) : r === 3 ? new Qt(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : r === 8 ? vc(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : r === 4 ? vc(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = XU.exec(e)) ? new Qt(t[1], t[2], t[3], 1) : (t = ZU.exec(e)) ? new Qt(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = JU.exec(e)) ? vc(t[1], t[2], t[3], t[4]) : (t = QU.exec(e)) ? vc(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = e7.exec(e)) ? ex(t[1], t[2] / 100, t[3] / 100, 1) : (t = t7.exec(e)) ? ex(t[1], t[2] / 100, t[3] / 100, t[4]) : V0.hasOwnProperty(e) ? Z0(V0[e]) : e === "transparent" ? new Qt(NaN, NaN, NaN, 0) : null;
}
function Z0(e) {
  return new Qt(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function vc(e, t, r, n) {
  return n <= 0 && (e = t = r = NaN), new Qt(e, t, r, n);
}
function i7(e) {
  return e instanceof ss || (e = Tu(e)), e ? (e = e.rgb(), new Qt(e.r, e.g, e.b, e.opacity)) : new Qt();
}
function lp(e, t, r, n) {
  return arguments.length === 1 ? i7(e) : new Qt(e, t, r, n ?? 1);
}
function Qt(e, t, r, n) {
  this.r = +e, this.g = +t, this.b = +r, this.opacity = +n;
}
Uv(Qt, lp, $O(ss, {
  brighter(e) {
    return e = e == null ? Gc : Math.pow(Gc, e), new Qt(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? Pu : Math.pow(Pu, e), new Qt(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new Qt(Xi(this.r), Xi(this.g), Xi(this.b), Kc(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: J0,
  // Deprecated! Use color.formatHex.
  formatHex: J0,
  formatHex8: a7,
  formatRgb: Q0,
  toString: Q0
}));
function J0() {
  return `#${Gi(this.r)}${Gi(this.g)}${Gi(this.b)}`;
}
function a7() {
  return `#${Gi(this.r)}${Gi(this.g)}${Gi(this.b)}${Gi((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function Q0() {
  const e = Kc(this.opacity);
  return `${e === 1 ? "rgb(" : "rgba("}${Xi(this.r)}, ${Xi(this.g)}, ${Xi(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function Kc(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function Xi(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function Gi(e) {
  return e = Xi(e), (e < 16 ? "0" : "") + e.toString(16);
}
function ex(e, t, r, n) {
  return n <= 0 ? e = t = r = NaN : r <= 0 || r >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new Kr(e, t, r, n);
}
function CO(e) {
  if (e instanceof Kr) return new Kr(e.h, e.s, e.l, e.opacity);
  if (e instanceof ss || (e = Tu(e)), !e) return new Kr();
  if (e instanceof Kr) return e;
  e = e.rgb();
  var t = e.r / 255, r = e.g / 255, n = e.b / 255, i = Math.min(t, r, n), a = Math.max(t, r, n), u = NaN, c = a - i, l = (a + i) / 2;
  return c ? (t === a ? u = (r - n) / c + (r < n) * 6 : r === a ? u = (n - t) / c + 2 : u = (t - r) / c + 4, c /= l < 0.5 ? a + i : 2 - a - i, u *= 60) : c = l > 0 && l < 1 ? 0 : u, new Kr(u, c, l, e.opacity);
}
function o7(e, t, r, n) {
  return arguments.length === 1 ? CO(e) : new Kr(e, t, r, n ?? 1);
}
function Kr(e, t, r, n) {
  this.h = +e, this.s = +t, this.l = +r, this.opacity = +n;
}
Uv(Kr, o7, $O(ss, {
  brighter(e) {
    return e = e == null ? Gc : Math.pow(Gc, e), new Kr(this.h, this.s, this.l * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? Pu : Math.pow(Pu, e), new Kr(this.h, this.s, this.l * e, this.opacity);
  },
  rgb() {
    var e = this.h % 360 + (this.h < 0) * 360, t = isNaN(e) || isNaN(this.s) ? 0 : this.s, r = this.l, n = r + (r < 0.5 ? r : 1 - r) * t, i = 2 * r - n;
    return new Qt(
      th(e >= 240 ? e - 240 : e + 120, i, n),
      th(e, i, n),
      th(e < 120 ? e + 240 : e - 120, i, n),
      this.opacity
    );
  },
  clamp() {
    return new Kr(tx(this.h), gc(this.s), gc(this.l), Kc(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const e = Kc(this.opacity);
    return `${e === 1 ? "hsl(" : "hsla("}${tx(this.h)}, ${gc(this.s) * 100}%, ${gc(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
  }
}));
function tx(e) {
  return e = (e || 0) % 360, e < 0 ? e + 360 : e;
}
function gc(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function th(e, t, r) {
  return (e < 60 ? t + (r - t) * e / 60 : e < 180 ? r : e < 240 ? t + (r - t) * (240 - e) / 60 : t) * 255;
}
const Hv = (e) => () => e;
function u7(e, t) {
  return function(r) {
    return e + r * t;
  };
}
function s7(e, t, r) {
  return e = Math.pow(e, r), t = Math.pow(t, r) - e, r = 1 / r, function(n) {
    return Math.pow(e + n * t, r);
  };
}
function c7(e) {
  return (e = +e) == 1 ? MO : function(t, r) {
    return r - t ? s7(t, r, e) : Hv(isNaN(t) ? r : t);
  };
}
function MO(e, t) {
  var r = t - e;
  return r ? u7(e, r) : Hv(isNaN(e) ? t : e);
}
const rx = function e(t) {
  var r = c7(t);
  function n(i, a) {
    var u = r((i = lp(i)).r, (a = lp(a)).r), c = r(i.g, a.g), l = r(i.b, a.b), f = MO(i.opacity, a.opacity);
    return function(d) {
      return i.r = u(d), i.g = c(d), i.b = l(d), i.opacity = f(d), i + "";
    };
  }
  return n.gamma = e, n;
}(1);
function l7(e, t) {
  t || (t = []);
  var r = e ? Math.min(t.length, e.length) : 0, n = t.slice(), i;
  return function(a) {
    for (i = 0; i < r; ++i) n[i] = e[i] * (1 - a) + t[i] * a;
    return n;
  };
}
function f7(e) {
  return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
function d7(e, t) {
  var r = t ? t.length : 0, n = e ? Math.min(r, e.length) : 0, i = new Array(n), a = new Array(r), u;
  for (u = 0; u < n; ++u) i[u] = wo(e[u], t[u]);
  for (; u < r; ++u) a[u] = t[u];
  return function(c) {
    for (u = 0; u < n; ++u) a[u] = i[u](c);
    return a;
  };
}
function h7(e, t) {
  var r = /* @__PURE__ */ new Date();
  return e = +e, t = +t, function(n) {
    return r.setTime(e * (1 - n) + t * n), r;
  };
}
function qc(e, t) {
  return e = +e, t = +t, function(r) {
    return e * (1 - r) + t * r;
  };
}
function p7(e, t) {
  var r = {}, n = {}, i;
  (e === null || typeof e != "object") && (e = {}), (t === null || typeof t != "object") && (t = {});
  for (i in t)
    i in e ? r[i] = wo(e[i], t[i]) : n[i] = t[i];
  return function(a) {
    for (i in r) n[i] = r[i](a);
    return n;
  };
}
var fp = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, rh = new RegExp(fp.source, "g");
function v7(e) {
  return function() {
    return e;
  };
}
function g7(e) {
  return function(t) {
    return e(t) + "";
  };
}
function y7(e, t) {
  var r = fp.lastIndex = rh.lastIndex = 0, n, i, a, u = -1, c = [], l = [];
  for (e = e + "", t = t + ""; (n = fp.exec(e)) && (i = rh.exec(t)); )
    (a = i.index) > r && (a = t.slice(r, a), c[u] ? c[u] += a : c[++u] = a), (n = n[0]) === (i = i[0]) ? c[u] ? c[u] += i : c[++u] = i : (c[++u] = null, l.push({ i: u, x: qc(n, i) })), r = rh.lastIndex;
  return r < t.length && (a = t.slice(r), c[u] ? c[u] += a : c[++u] = a), c.length < 2 ? l[0] ? g7(l[0].x) : v7(t) : (t = l.length, function(f) {
    for (var d = 0, h; d < t; ++d) c[(h = l[d]).i] = h.x(f);
    return c.join("");
  });
}
function wo(e, t) {
  var r = typeof t, n;
  return t == null || r === "boolean" ? Hv(t) : (r === "number" ? qc : r === "string" ? (n = Tu(t)) ? (t = n, rx) : y7 : t instanceof Tu ? rx : t instanceof Date ? h7 : f7(t) ? l7 : Array.isArray(t) ? d7 : typeof t.valueOf != "function" && typeof t.toString != "function" || isNaN(t) ? p7 : qc)(e, t);
}
function Gv(e, t) {
  return e = +e, t = +t, function(r) {
    return Math.round(e * (1 - r) + t * r);
  };
}
function m7(e, t) {
  t === void 0 && (t = e, e = wo);
  for (var r = 0, n = t.length - 1, i = t[0], a = new Array(n < 0 ? 0 : n); r < n; ) a[r] = e(i, i = t[++r]);
  return function(u) {
    var c = Math.max(0, Math.min(n - 1, Math.floor(u *= n)));
    return a[c](u - c);
  };
}
function b7(e) {
  return function() {
    return e;
  };
}
function Vc(e) {
  return +e;
}
var nx = [0, 1];
function qt(e) {
  return e;
}
function dp(e, t) {
  return (t -= e = +e) ? function(r) {
    return (r - e) / t;
  } : b7(isNaN(t) ? NaN : 0.5);
}
function x7(e, t) {
  var r;
  return e > t && (r = e, e = t, t = r), function(n) {
    return Math.max(e, Math.min(t, n));
  };
}
function w7(e, t, r) {
  var n = e[0], i = e[1], a = t[0], u = t[1];
  return i < n ? (n = dp(i, n), a = r(u, a)) : (n = dp(n, i), a = r(a, u)), function(c) {
    return a(n(c));
  };
}
function _7(e, t, r) {
  var n = Math.min(e.length, t.length) - 1, i = new Array(n), a = new Array(n), u = -1;
  for (e[n] < e[0] && (e = e.slice().reverse(), t = t.slice().reverse()); ++u < n; )
    i[u] = dp(e[u], e[u + 1]), a[u] = r(t[u], t[u + 1]);
  return function(c) {
    var l = us(e, c, 1, n) - 1;
    return a[l](i[l](c));
  };
}
function cs(e, t) {
  return t.domain(e.domain()).range(e.range()).interpolate(e.interpolate()).clamp(e.clamp()).unknown(e.unknown());
}
function Gl() {
  var e = nx, t = nx, r = wo, n, i, a, u = qt, c, l, f;
  function d() {
    var v = Math.min(e.length, t.length);
    return u !== qt && (u = x7(e[0], e[v - 1])), c = v > 2 ? _7 : w7, l = f = null, h;
  }
  function h(v) {
    return v == null || isNaN(v = +v) ? a : (l || (l = c(e.map(n), t, r)))(n(u(v)));
  }
  return h.invert = function(v) {
    return u(i((f || (f = c(t, e.map(n), qc)))(v)));
  }, h.domain = function(v) {
    return arguments.length ? (e = Array.from(v, Vc), d()) : e.slice();
  }, h.range = function(v) {
    return arguments.length ? (t = Array.from(v), d()) : t.slice();
  }, h.rangeRound = function(v) {
    return t = Array.from(v), r = Gv, d();
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
function Kv() {
  return Gl()(qt, qt);
}
function O7(e) {
  return Math.abs(e = Math.round(e)) >= 1e21 ? e.toLocaleString("en").replace(/,/g, "") : e.toString(10);
}
function Yc(e, t) {
  if ((r = (e = t ? e.toExponential(t - 1) : e.toExponential()).indexOf("e")) < 0) return null;
  var r, n = e.slice(0, r);
  return [
    n.length > 1 ? n[0] + n.slice(2) : n,
    +e.slice(r + 1)
  ];
}
function Ga(e) {
  return e = Yc(Math.abs(e)), e ? e[1] : NaN;
}
function A7(e, t) {
  return function(r, n) {
    for (var i = r.length, a = [], u = 0, c = e[0], l = 0; i > 0 && c > 0 && (l + c + 1 > n && (c = Math.max(1, n - l)), a.push(r.substring(i -= c, i + c)), !((l += c + 1) > n)); )
      c = e[u = (u + 1) % e.length];
    return a.reverse().join(t);
  };
}
function S7(e) {
  return function(t) {
    return t.replace(/[0-9]/g, function(r) {
      return e[+r];
    });
  };
}
var P7 = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function $u(e) {
  if (!(t = P7.exec(e))) throw new Error("invalid format: " + e);
  var t;
  return new qv({
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
$u.prototype = qv.prototype;
function qv(e) {
  this.fill = e.fill === void 0 ? " " : e.fill + "", this.align = e.align === void 0 ? ">" : e.align + "", this.sign = e.sign === void 0 ? "-" : e.sign + "", this.symbol = e.symbol === void 0 ? "" : e.symbol + "", this.zero = !!e.zero, this.width = e.width === void 0 ? void 0 : +e.width, this.comma = !!e.comma, this.precision = e.precision === void 0 ? void 0 : +e.precision, this.trim = !!e.trim, this.type = e.type === void 0 ? "" : e.type + "";
}
qv.prototype.toString = function() {
  return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};
function E7(e) {
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
var IO;
function T7(e, t) {
  var r = Yc(e, t);
  if (!r) return e + "";
  var n = r[0], i = r[1], a = i - (IO = Math.max(-8, Math.min(8, Math.floor(i / 3))) * 3) + 1, u = n.length;
  return a === u ? n : a > u ? n + new Array(a - u + 1).join("0") : a > 0 ? n.slice(0, a) + "." + n.slice(a) : "0." + new Array(1 - a).join("0") + Yc(e, Math.max(0, t + a - 1))[0];
}
function ix(e, t) {
  var r = Yc(e, t);
  if (!r) return e + "";
  var n = r[0], i = r[1];
  return i < 0 ? "0." + new Array(-i).join("0") + n : n.length > i + 1 ? n.slice(0, i + 1) + "." + n.slice(i + 1) : n + new Array(i - n.length + 2).join("0");
}
const ax = {
  "%": (e, t) => (e * 100).toFixed(t),
  b: (e) => Math.round(e).toString(2),
  c: (e) => e + "",
  d: O7,
  e: (e, t) => e.toExponential(t),
  f: (e, t) => e.toFixed(t),
  g: (e, t) => e.toPrecision(t),
  o: (e) => Math.round(e).toString(8),
  p: (e, t) => ix(e * 100, t),
  r: ix,
  s: T7,
  X: (e) => Math.round(e).toString(16).toUpperCase(),
  x: (e) => Math.round(e).toString(16)
};
function ox(e) {
  return e;
}
var ux = Array.prototype.map, sx = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function $7(e) {
  var t = e.grouping === void 0 || e.thousands === void 0 ? ox : A7(ux.call(e.grouping, Number), e.thousands + ""), r = e.currency === void 0 ? "" : e.currency[0] + "", n = e.currency === void 0 ? "" : e.currency[1] + "", i = e.decimal === void 0 ? "." : e.decimal + "", a = e.numerals === void 0 ? ox : S7(ux.call(e.numerals, String)), u = e.percent === void 0 ? "%" : e.percent + "", c = e.minus === void 0 ? "−" : e.minus + "", l = e.nan === void 0 ? "NaN" : e.nan + "";
  function f(h) {
    h = $u(h);
    var v = h.fill, g = h.align, x = h.sign, y = h.symbol, w = h.zero, A = h.width, O = h.comma, S = h.precision, _ = h.trim, b = h.type;
    b === "n" ? (O = !0, b = "g") : ax[b] || (S === void 0 && (S = 12), _ = !0, b = "g"), (w || v === "0" && g === "=") && (w = !0, v = "0", g = "=");
    var E = y === "$" ? r : y === "#" && /[boxX]/.test(b) ? "0" + b.toLowerCase() : "", C = y === "$" ? n : /[%p]/.test(b) ? u : "", M = ax[b], F = /[defgprs%]/.test(b);
    S = S === void 0 ? 6 : /[gprs]/.test(b) ? Math.max(1, Math.min(21, S)) : Math.max(0, Math.min(20, S));
    function D(B) {
      var N = E, U = C, z, J, H;
      if (b === "c")
        U = M(B) + U, B = "";
      else {
        B = +B;
        var Z = B < 0 || 1 / B < 0;
        if (B = isNaN(B) ? l : M(Math.abs(B), S), _ && (B = E7(B)), Z && +B == 0 && x !== "+" && (Z = !1), N = (Z ? x === "(" ? x : c : x === "-" || x === "(" ? "" : x) + N, U = (b === "s" ? sx[8 + IO / 3] : "") + U + (Z && x === "(" ? ")" : ""), F) {
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
    var g = f((h = $u(h), h.type = "f", h)), x = Math.max(-8, Math.min(8, Math.floor(Ga(v) / 3))) * 3, y = Math.pow(10, -x), w = sx[8 + x / 3];
    return function(A) {
      return g(y * A) + w;
    };
  }
  return {
    format: f,
    formatPrefix: d
  };
}
var yc, Vv, kO;
C7({
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});
function C7(e) {
  return yc = $7(e), Vv = yc.format, kO = yc.formatPrefix, yc;
}
function M7(e) {
  return Math.max(0, -Ga(Math.abs(e)));
}
function I7(e, t) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(Ga(t) / 3))) * 3 - Ga(Math.abs(e)));
}
function k7(e, t) {
  return e = Math.abs(e), t = Math.abs(t) - e, Math.max(0, Ga(t) - Ga(e)) + 1;
}
function jO(e, t, r, n) {
  var i = sp(e, t, r), a;
  switch (n = $u(n ?? ",f"), n.type) {
    case "s": {
      var u = Math.max(Math.abs(e), Math.abs(t));
      return n.precision == null && !isNaN(a = I7(i, u)) && (n.precision = a), kO(n, u);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      n.precision == null && !isNaN(a = k7(i, Math.max(Math.abs(e), Math.abs(t)))) && (n.precision = a - (n.type === "e"));
      break;
    }
    case "f":
    case "%": {
      n.precision == null && !isNaN(a = M7(i)) && (n.precision = a - (n.type === "%") * 2);
      break;
    }
  }
  return Vv(n);
}
function Oi(e) {
  var t = e.domain;
  return e.ticks = function(r) {
    var n = t();
    return op(n[0], n[n.length - 1], r ?? 10);
  }, e.tickFormat = function(r, n) {
    var i = t();
    return jO(i[0], i[i.length - 1], r ?? 10, n);
  }, e.nice = function(r) {
    r == null && (r = 10);
    var n = t(), i = 0, a = n.length - 1, u = n[i], c = n[a], l, f, d = 10;
    for (c < u && (f = u, u = c, c = f, f = i, i = a, a = f); d-- > 0; ) {
      if (f = up(u, c, r), f === l)
        return n[i] = u, n[a] = c, t(n);
      if (f > 0)
        u = Math.floor(u / f) * f, c = Math.ceil(c / f) * f;
      else if (f < 0)
        u = Math.ceil(u * f) / f, c = Math.floor(c * f) / f;
      else
        break;
      l = f;
    }
    return e;
  }, e;
}
function Xc() {
  var e = Kv();
  return e.copy = function() {
    return cs(e, Xc());
  }, Dr.apply(e, arguments), Oi(e);
}
function RO(e) {
  var t;
  function r(n) {
    return n == null || isNaN(n = +n) ? t : n;
  }
  return r.invert = r, r.domain = r.range = function(n) {
    return arguments.length ? (e = Array.from(n, Vc), r) : e.slice();
  }, r.unknown = function(n) {
    return arguments.length ? (t = n, r) : t;
  }, r.copy = function() {
    return RO(e).unknown(t);
  }, e = arguments.length ? Array.from(e, Vc) : [0, 1], Oi(r);
}
function NO(e, t) {
  e = e.slice();
  var r = 0, n = e.length - 1, i = e[r], a = e[n], u;
  return a < i && (u = r, r = n, n = u, u = i, i = a, a = u), e[r] = t.floor(i), e[n] = t.ceil(a), e;
}
function cx(e) {
  return Math.log(e);
}
function lx(e) {
  return Math.exp(e);
}
function j7(e) {
  return -Math.log(-e);
}
function R7(e) {
  return -Math.exp(-e);
}
function N7(e) {
  return isFinite(e) ? +("1e" + e) : e < 0 ? 0 : e;
}
function D7(e) {
  return e === 10 ? N7 : e === Math.E ? Math.exp : (t) => Math.pow(e, t);
}
function L7(e) {
  return e === Math.E ? Math.log : e === 10 && Math.log10 || e === 2 && Math.log2 || (e = Math.log(e), (t) => Math.log(t) / e);
}
function fx(e) {
  return (t, r) => -e(-t, r);
}
function Yv(e) {
  const t = e(cx, lx), r = t.domain;
  let n = 10, i, a;
  function u() {
    return i = L7(n), a = D7(n), r()[0] < 0 ? (i = fx(i), a = fx(a), e(j7, R7)) : e(cx, lx), t;
  }
  return t.base = function(c) {
    return arguments.length ? (n = +c, u()) : n;
  }, t.domain = function(c) {
    return arguments.length ? (r(c), u()) : r();
  }, t.ticks = (c) => {
    const l = r();
    let f = l[0], d = l[l.length - 1];
    const h = d < f;
    h && ([f, d] = [d, f]);
    let v = i(f), g = i(d), x, y;
    const w = c == null ? 10 : +c;
    let A = [];
    if (!(n % 1) && g - v < w) {
      if (v = Math.floor(v), g = Math.ceil(g), f > 0) {
        for (; v <= g; ++v)
          for (x = 1; x < n; ++x)
            if (y = v < 0 ? x / a(-v) : x * a(v), !(y < f)) {
              if (y > d) break;
              A.push(y);
            }
      } else for (; v <= g; ++v)
        for (x = n - 1; x >= 1; --x)
          if (y = v > 0 ? x / a(-v) : x * a(v), !(y < f)) {
            if (y > d) break;
            A.push(y);
          }
      A.length * 2 < w && (A = op(f, d, w));
    } else
      A = op(v, g, Math.min(g - v, w)).map(a);
    return h ? A.reverse() : A;
  }, t.tickFormat = (c, l) => {
    if (c == null && (c = 10), l == null && (l = n === 10 ? "s" : ","), typeof l != "function" && (!(n % 1) && (l = $u(l)).precision == null && (l.trim = !0), l = Vv(l)), c === 1 / 0) return l;
    const f = Math.max(1, n * c / t.ticks().length);
    return (d) => {
      let h = d / a(Math.round(i(d)));
      return h * n < n - 0.5 && (h *= n), h <= f ? l(d) : "";
    };
  }, t.nice = () => r(NO(r(), {
    floor: (c) => a(Math.floor(i(c))),
    ceil: (c) => a(Math.ceil(i(c)))
  })), t;
}
function DO() {
  const e = Yv(Gl()).domain([1, 10]);
  return e.copy = () => cs(e, DO()).base(e.base()), Dr.apply(e, arguments), e;
}
function dx(e) {
  return function(t) {
    return Math.sign(t) * Math.log1p(Math.abs(t / e));
  };
}
function hx(e) {
  return function(t) {
    return Math.sign(t) * Math.expm1(Math.abs(t)) * e;
  };
}
function Xv(e) {
  var t = 1, r = e(dx(t), hx(t));
  return r.constant = function(n) {
    return arguments.length ? e(dx(t = +n), hx(t)) : t;
  }, Oi(r);
}
function LO() {
  var e = Xv(Gl());
  return e.copy = function() {
    return cs(e, LO()).constant(e.constant());
  }, Dr.apply(e, arguments);
}
function px(e) {
  return function(t) {
    return t < 0 ? -Math.pow(-t, e) : Math.pow(t, e);
  };
}
function B7(e) {
  return e < 0 ? -Math.sqrt(-e) : Math.sqrt(e);
}
function F7(e) {
  return e < 0 ? -e * e : e * e;
}
function Zv(e) {
  var t = e(qt, qt), r = 1;
  function n() {
    return r === 1 ? e(qt, qt) : r === 0.5 ? e(B7, F7) : e(px(r), px(1 / r));
  }
  return t.exponent = function(i) {
    return arguments.length ? (r = +i, n()) : r;
  }, Oi(t);
}
function Jv() {
  var e = Zv(Gl());
  return e.copy = function() {
    return cs(e, Jv()).exponent(e.exponent());
  }, Dr.apply(e, arguments), e;
}
function W7() {
  return Jv.apply(null, arguments).exponent(0.5);
}
function vx(e) {
  return Math.sign(e) * e * e;
}
function z7(e) {
  return Math.sign(e) * Math.sqrt(Math.abs(e));
}
function BO() {
  var e = Kv(), t = [0, 1], r = !1, n;
  function i(a) {
    var u = z7(e(a));
    return isNaN(u) ? n : r ? Math.round(u) : u;
  }
  return i.invert = function(a) {
    return e.invert(vx(a));
  }, i.domain = function(a) {
    return arguments.length ? (e.domain(a), i) : e.domain();
  }, i.range = function(a) {
    return arguments.length ? (e.range((t = Array.from(a, Vc)).map(vx)), i) : t.slice();
  }, i.rangeRound = function(a) {
    return i.range(a).round(!0);
  }, i.round = function(a) {
    return arguments.length ? (r = !!a, i) : r;
  }, i.clamp = function(a) {
    return arguments.length ? (e.clamp(a), i) : e.clamp();
  }, i.unknown = function(a) {
    return arguments.length ? (n = a, i) : n;
  }, i.copy = function() {
    return BO(e.domain(), t).round(r).clamp(e.clamp()).unknown(n);
  }, Dr.apply(i, arguments), Oi(i);
}
function FO() {
  var e = [], t = [], r = [], n;
  function i() {
    var u = 0, c = Math.max(1, t.length);
    for (r = new Array(c - 1); ++u < c; ) r[u - 1] = qU(e, u / c);
    return a;
  }
  function a(u) {
    return u == null || isNaN(u = +u) ? n : t[us(r, u)];
  }
  return a.invertExtent = function(u) {
    var c = t.indexOf(u);
    return c < 0 ? [NaN, NaN] : [
      c > 0 ? r[c - 1] : e[0],
      c < r.length ? r[c] : e[e.length - 1]
    ];
  }, a.domain = function(u) {
    if (!arguments.length) return e.slice();
    e = [];
    for (let c of u) c != null && !isNaN(c = +c) && e.push(c);
    return e.sort(vi), i();
  }, a.range = function(u) {
    return arguments.length ? (t = Array.from(u), i()) : t.slice();
  }, a.unknown = function(u) {
    return arguments.length ? (n = u, a) : n;
  }, a.quantiles = function() {
    return r.slice();
  }, a.copy = function() {
    return FO().domain(e).range(t).unknown(n);
  }, Dr.apply(a, arguments);
}
function WO() {
  var e = 0, t = 1, r = 1, n = [0.5], i = [0, 1], a;
  function u(l) {
    return l != null && l <= l ? i[us(n, l, 0, r)] : a;
  }
  function c() {
    var l = -1;
    for (n = new Array(r); ++l < r; ) n[l] = ((l + 1) * t - (l - r) * e) / (r + 1);
    return u;
  }
  return u.domain = function(l) {
    return arguments.length ? ([e, t] = l, e = +e, t = +t, c()) : [e, t];
  }, u.range = function(l) {
    return arguments.length ? (r = (i = Array.from(l)).length - 1, c()) : i.slice();
  }, u.invertExtent = function(l) {
    var f = i.indexOf(l);
    return f < 0 ? [NaN, NaN] : f < 1 ? [e, n[0]] : f >= r ? [n[r - 1], t] : [n[f - 1], n[f]];
  }, u.unknown = function(l) {
    return arguments.length && (a = l), u;
  }, u.thresholds = function() {
    return n.slice();
  }, u.copy = function() {
    return WO().domain([e, t]).range(i).unknown(a);
  }, Dr.apply(Oi(u), arguments);
}
function zO() {
  var e = [0.5], t = [0, 1], r, n = 1;
  function i(a) {
    return a != null && a <= a ? t[us(e, a, 0, n)] : r;
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
    return zO().domain(e).range(t).unknown(r);
  }, Dr.apply(i, arguments);
}
const nh = /* @__PURE__ */ new Date(), ih = /* @__PURE__ */ new Date();
function Tt(e, t, r, n) {
  function i(a) {
    return e(a = arguments.length === 0 ? /* @__PURE__ */ new Date() : /* @__PURE__ */ new Date(+a)), a;
  }
  return i.floor = (a) => (e(a = /* @__PURE__ */ new Date(+a)), a), i.ceil = (a) => (e(a = new Date(a - 1)), t(a, 1), e(a), a), i.round = (a) => {
    const u = i(a), c = i.ceil(a);
    return a - u < c - a ? u : c;
  }, i.offset = (a, u) => (t(a = /* @__PURE__ */ new Date(+a), u == null ? 1 : Math.floor(u)), a), i.range = (a, u, c) => {
    const l = [];
    if (a = i.ceil(a), c = c == null ? 1 : Math.floor(c), !(a < u) || !(c > 0)) return l;
    let f;
    do
      l.push(f = /* @__PURE__ */ new Date(+a)), t(a, c), e(a);
    while (f < a && a < u);
    return l;
  }, i.filter = (a) => Tt((u) => {
    if (u >= u) for (; e(u), !a(u); ) u.setTime(u - 1);
  }, (u, c) => {
    if (u >= u)
      if (c < 0) for (; ++c <= 0; )
        for (; t(u, -1), !a(u); )
          ;
      else for (; --c >= 0; )
        for (; t(u, 1), !a(u); )
          ;
  }), r && (i.count = (a, u) => (nh.setTime(+a), ih.setTime(+u), e(nh), e(ih), Math.floor(r(nh, ih))), i.every = (a) => (a = Math.floor(a), !isFinite(a) || !(a > 0) ? null : a > 1 ? i.filter(n ? (u) => n(u) % a === 0 : (u) => i.count(0, u) % a === 0) : i)), i;
}
const Zc = Tt(() => {
}, (e, t) => {
  e.setTime(+e + t);
}, (e, t) => t - e);
Zc.every = (e) => (e = Math.floor(e), !isFinite(e) || !(e > 0) ? null : e > 1 ? Tt((t) => {
  t.setTime(Math.floor(t / e) * e);
}, (t, r) => {
  t.setTime(+t + r * e);
}, (t, r) => (r - t) / e) : Zc);
Zc.range;
const $n = 1e3, Ir = $n * 60, Cn = Ir * 60, Dn = Cn * 24, Qv = Dn * 7, gx = Dn * 30, ah = Dn * 365, Ki = Tt((e) => {
  e.setTime(e - e.getMilliseconds());
}, (e, t) => {
  e.setTime(+e + t * $n);
}, (e, t) => (t - e) / $n, (e) => e.getUTCSeconds());
Ki.range;
const eg = Tt((e) => {
  e.setTime(e - e.getMilliseconds() - e.getSeconds() * $n);
}, (e, t) => {
  e.setTime(+e + t * Ir);
}, (e, t) => (t - e) / Ir, (e) => e.getMinutes());
eg.range;
const tg = Tt((e) => {
  e.setUTCSeconds(0, 0);
}, (e, t) => {
  e.setTime(+e + t * Ir);
}, (e, t) => (t - e) / Ir, (e) => e.getUTCMinutes());
tg.range;
const rg = Tt((e) => {
  e.setTime(e - e.getMilliseconds() - e.getSeconds() * $n - e.getMinutes() * Ir);
}, (e, t) => {
  e.setTime(+e + t * Cn);
}, (e, t) => (t - e) / Cn, (e) => e.getHours());
rg.range;
const ng = Tt((e) => {
  e.setUTCMinutes(0, 0, 0);
}, (e, t) => {
  e.setTime(+e + t * Cn);
}, (e, t) => (t - e) / Cn, (e) => e.getUTCHours());
ng.range;
const ls = Tt(
  (e) => e.setHours(0, 0, 0, 0),
  (e, t) => e.setDate(e.getDate() + t),
  (e, t) => (t - e - (t.getTimezoneOffset() - e.getTimezoneOffset()) * Ir) / Dn,
  (e) => e.getDate() - 1
);
ls.range;
const Kl = Tt((e) => {
  e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCDate(e.getUTCDate() + t);
}, (e, t) => (t - e) / Dn, (e) => e.getUTCDate() - 1);
Kl.range;
const UO = Tt((e) => {
  e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCDate(e.getUTCDate() + t);
}, (e, t) => (t - e) / Dn, (e) => Math.floor(e / Dn));
UO.range;
function ua(e) {
  return Tt((t) => {
    t.setDate(t.getDate() - (t.getDay() + 7 - e) % 7), t.setHours(0, 0, 0, 0);
  }, (t, r) => {
    t.setDate(t.getDate() + r * 7);
  }, (t, r) => (r - t - (r.getTimezoneOffset() - t.getTimezoneOffset()) * Ir) / Qv);
}
const ql = ua(0), Jc = ua(1), U7 = ua(2), H7 = ua(3), Ka = ua(4), G7 = ua(5), K7 = ua(6);
ql.range;
Jc.range;
U7.range;
H7.range;
Ka.range;
G7.range;
K7.range;
function sa(e) {
  return Tt((t) => {
    t.setUTCDate(t.getUTCDate() - (t.getUTCDay() + 7 - e) % 7), t.setUTCHours(0, 0, 0, 0);
  }, (t, r) => {
    t.setUTCDate(t.getUTCDate() + r * 7);
  }, (t, r) => (r - t) / Qv);
}
const Vl = sa(0), Qc = sa(1), q7 = sa(2), V7 = sa(3), qa = sa(4), Y7 = sa(5), X7 = sa(6);
Vl.range;
Qc.range;
q7.range;
V7.range;
qa.range;
Y7.range;
X7.range;
const ig = Tt((e) => {
  e.setDate(1), e.setHours(0, 0, 0, 0);
}, (e, t) => {
  e.setMonth(e.getMonth() + t);
}, (e, t) => t.getMonth() - e.getMonth() + (t.getFullYear() - e.getFullYear()) * 12, (e) => e.getMonth());
ig.range;
const ag = Tt((e) => {
  e.setUTCDate(1), e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCMonth(e.getUTCMonth() + t);
}, (e, t) => t.getUTCMonth() - e.getUTCMonth() + (t.getUTCFullYear() - e.getUTCFullYear()) * 12, (e) => e.getUTCMonth());
ag.range;
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
function HO(e, t, r, n, i, a) {
  const u = [
    [Ki, 1, $n],
    [Ki, 5, 5 * $n],
    [Ki, 15, 15 * $n],
    [Ki, 30, 30 * $n],
    [a, 1, Ir],
    [a, 5, 5 * Ir],
    [a, 15, 15 * Ir],
    [a, 30, 30 * Ir],
    [i, 1, Cn],
    [i, 3, 3 * Cn],
    [i, 6, 6 * Cn],
    [i, 12, 12 * Cn],
    [n, 1, Dn],
    [n, 2, 2 * Dn],
    [r, 1, Qv],
    [t, 1, gx],
    [t, 3, 3 * gx],
    [e, 1, ah]
  ];
  function c(f, d, h) {
    const v = d < f;
    v && ([f, d] = [d, f]);
    const g = h && typeof h.range == "function" ? h : l(f, d, h), x = g ? g.range(f, +d + 1) : [];
    return v ? x.reverse() : x;
  }
  function l(f, d, h) {
    const v = Math.abs(d - f) / h, g = Wv(([, , w]) => w).right(u, v);
    if (g === u.length) return e.every(sp(f / ah, d / ah, h));
    if (g === 0) return Zc.every(Math.max(sp(f, d, h), 1));
    const [x, y] = u[v / u[g - 1][2] < u[g][2] / v ? g - 1 : g];
    return x.every(y);
  }
  return [c, l];
}
const [Z7, J7] = HO(Bn, ag, Vl, UO, ng, tg), [Q7, e9] = HO(Ln, ig, ql, ls, rg, eg);
function oh(e) {
  if (0 <= e.y && e.y < 100) {
    var t = new Date(-1, e.m, e.d, e.H, e.M, e.S, e.L);
    return t.setFullYear(e.y), t;
  }
  return new Date(e.y, e.m, e.d, e.H, e.M, e.S, e.L);
}
function uh(e) {
  if (0 <= e.y && e.y < 100) {
    var t = new Date(Date.UTC(-1, e.m, e.d, e.H, e.M, e.S, e.L));
    return t.setUTCFullYear(e.y), t;
  }
  return new Date(Date.UTC(e.y, e.m, e.d, e.H, e.M, e.S, e.L));
}
function eu(e, t, r) {
  return { y: e, m: t, d: r, H: 0, M: 0, S: 0, L: 0 };
}
function t9(e) {
  var t = e.dateTime, r = e.date, n = e.time, i = e.periods, a = e.days, u = e.shortDays, c = e.months, l = e.shortMonths, f = tu(i), d = ru(i), h = tu(a), v = ru(a), g = tu(u), x = ru(u), y = tu(c), w = ru(c), A = tu(l), O = ru(l), S = {
    a: Z,
    A: K,
    b: ue,
    B: G,
    c: null,
    d: _x,
    e: _x,
    f: A9,
    g: j9,
    G: N9,
    H: w9,
    I: _9,
    j: O9,
    L: GO,
    m: S9,
    M: P9,
    p: X,
    q: ae,
    Q: Sx,
    s: Px,
    S: E9,
    u: T9,
    U: $9,
    V: C9,
    w: M9,
    W: I9,
    x: null,
    X: null,
    y: k9,
    Y: R9,
    Z: D9,
    "%": Ax
  }, _ = {
    a: ce,
    A: he,
    b: ge,
    B: xe,
    c: null,
    d: Ox,
    e: Ox,
    f: W9,
    g: Z9,
    G: Q9,
    H: L9,
    I: B9,
    j: F9,
    L: qO,
    m: z9,
    M: U9,
    p: ye,
    q: we,
    Q: Sx,
    s: Px,
    S: H9,
    u: G9,
    U: K9,
    V: q9,
    w: V9,
    W: Y9,
    x: null,
    X: null,
    y: X9,
    Y: J9,
    Z: eH,
    "%": Ax
  }, b = {
    a: D,
    A: B,
    b: N,
    B: U,
    c: z,
    d: xx,
    e: xx,
    f: y9,
    g: bx,
    G: mx,
    H: wx,
    I: wx,
    j: h9,
    L: g9,
    m: d9,
    M: p9,
    p: F,
    q: f9,
    Q: b9,
    s: x9,
    S: v9,
    u: o9,
    U: u9,
    V: s9,
    w: a9,
    W: c9,
    x: J,
    X: H,
    y: bx,
    Y: mx,
    Z: l9,
    "%": m9
  };
  S.x = E(r, S), S.X = E(n, S), S.c = E(t, S), _.x = E(r, _), _.X = E(n, _), _.c = E(t, _);
  function E(ne, se) {
    return function(pe) {
      var j = [], Ee = -1, be = 0, We = ne.length, lt, at, Vt;
      for (pe instanceof Date || (pe = /* @__PURE__ */ new Date(+pe)); ++Ee < We; )
        ne.charCodeAt(Ee) === 37 && (j.push(ne.slice(be, Ee)), (at = yx[lt = ne.charAt(++Ee)]) != null ? lt = ne.charAt(++Ee) : at = lt === "e" ? " " : "0", (Vt = se[lt]) && (lt = Vt(pe, at)), j.push(lt), be = Ee + 1);
      return j.push(ne.slice(be, Ee)), j.join("");
    };
  }
  function C(ne, se) {
    return function(pe) {
      var j = eu(1900, void 0, 1), Ee = M(j, ne, pe += "", 0), be, We;
      if (Ee != pe.length) return null;
      if ("Q" in j) return new Date(j.Q);
      if ("s" in j) return new Date(j.s * 1e3 + ("L" in j ? j.L : 0));
      if (se && !("Z" in j) && (j.Z = 0), "p" in j && (j.H = j.H % 12 + j.p * 12), j.m === void 0 && (j.m = "q" in j ? j.q : 0), "V" in j) {
        if (j.V < 1 || j.V > 53) return null;
        "w" in j || (j.w = 1), "Z" in j ? (be = uh(eu(j.y, 0, 1)), We = be.getUTCDay(), be = We > 4 || We === 0 ? Qc.ceil(be) : Qc(be), be = Kl.offset(be, (j.V - 1) * 7), j.y = be.getUTCFullYear(), j.m = be.getUTCMonth(), j.d = be.getUTCDate() + (j.w + 6) % 7) : (be = oh(eu(j.y, 0, 1)), We = be.getDay(), be = We > 4 || We === 0 ? Jc.ceil(be) : Jc(be), be = ls.offset(be, (j.V - 1) * 7), j.y = be.getFullYear(), j.m = be.getMonth(), j.d = be.getDate() + (j.w + 6) % 7);
      } else ("W" in j || "U" in j) && ("w" in j || (j.w = "u" in j ? j.u % 7 : "W" in j ? 1 : 0), We = "Z" in j ? uh(eu(j.y, 0, 1)).getUTCDay() : oh(eu(j.y, 0, 1)).getDay(), j.m = 0, j.d = "W" in j ? (j.w + 6) % 7 + j.W * 7 - (We + 5) % 7 : j.w + j.U * 7 - (We + 6) % 7);
      return "Z" in j ? (j.H += j.Z / 100 | 0, j.M += j.Z % 100, uh(j)) : oh(j);
    };
  }
  function M(ne, se, pe, j) {
    for (var Ee = 0, be = se.length, We = pe.length, lt, at; Ee < be; ) {
      if (j >= We) return -1;
      if (lt = se.charCodeAt(Ee++), lt === 37) {
        if (lt = se.charAt(Ee++), at = b[lt in yx ? se.charAt(Ee++) : lt], !at || (j = at(ne, pe, j)) < 0) return -1;
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
    return j ? (ne.w = x.get(j[0].toLowerCase()), pe + j[0].length) : -1;
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
    return c[ne.getMonth()];
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
    return c[ne.getUTCMonth()];
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
      var se = C(ne += "", !1);
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
      var se = C(ne += "", !0);
      return se.toString = function() {
        return ne;
      }, se;
    }
  };
}
var yx = { "-": "", _: " ", 0: "0" }, It = /^\s*\d+/, r9 = /^%/, n9 = /[\\^$*+?|[\]().{}]/g;
function Ue(e, t, r) {
  var n = e < 0 ? "-" : "", i = (n ? -e : e) + "", a = i.length;
  return n + (a < r ? new Array(r - a + 1).join(t) + i : i);
}
function i9(e) {
  return e.replace(n9, "\\$&");
}
function tu(e) {
  return new RegExp("^(?:" + e.map(i9).join("|") + ")", "i");
}
function ru(e) {
  return new Map(e.map((t, r) => [t.toLowerCase(), r]));
}
function a9(e, t, r) {
  var n = It.exec(t.slice(r, r + 1));
  return n ? (e.w = +n[0], r + n[0].length) : -1;
}
function o9(e, t, r) {
  var n = It.exec(t.slice(r, r + 1));
  return n ? (e.u = +n[0], r + n[0].length) : -1;
}
function u9(e, t, r) {
  var n = It.exec(t.slice(r, r + 2));
  return n ? (e.U = +n[0], r + n[0].length) : -1;
}
function s9(e, t, r) {
  var n = It.exec(t.slice(r, r + 2));
  return n ? (e.V = +n[0], r + n[0].length) : -1;
}
function c9(e, t, r) {
  var n = It.exec(t.slice(r, r + 2));
  return n ? (e.W = +n[0], r + n[0].length) : -1;
}
function mx(e, t, r) {
  var n = It.exec(t.slice(r, r + 4));
  return n ? (e.y = +n[0], r + n[0].length) : -1;
}
function bx(e, t, r) {
  var n = It.exec(t.slice(r, r + 2));
  return n ? (e.y = +n[0] + (+n[0] > 68 ? 1900 : 2e3), r + n[0].length) : -1;
}
function l9(e, t, r) {
  var n = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(t.slice(r, r + 6));
  return n ? (e.Z = n[1] ? 0 : -(n[2] + (n[3] || "00")), r + n[0].length) : -1;
}
function f9(e, t, r) {
  var n = It.exec(t.slice(r, r + 1));
  return n ? (e.q = n[0] * 3 - 3, r + n[0].length) : -1;
}
function d9(e, t, r) {
  var n = It.exec(t.slice(r, r + 2));
  return n ? (e.m = n[0] - 1, r + n[0].length) : -1;
}
function xx(e, t, r) {
  var n = It.exec(t.slice(r, r + 2));
  return n ? (e.d = +n[0], r + n[0].length) : -1;
}
function h9(e, t, r) {
  var n = It.exec(t.slice(r, r + 3));
  return n ? (e.m = 0, e.d = +n[0], r + n[0].length) : -1;
}
function wx(e, t, r) {
  var n = It.exec(t.slice(r, r + 2));
  return n ? (e.H = +n[0], r + n[0].length) : -1;
}
function p9(e, t, r) {
  var n = It.exec(t.slice(r, r + 2));
  return n ? (e.M = +n[0], r + n[0].length) : -1;
}
function v9(e, t, r) {
  var n = It.exec(t.slice(r, r + 2));
  return n ? (e.S = +n[0], r + n[0].length) : -1;
}
function g9(e, t, r) {
  var n = It.exec(t.slice(r, r + 3));
  return n ? (e.L = +n[0], r + n[0].length) : -1;
}
function y9(e, t, r) {
  var n = It.exec(t.slice(r, r + 6));
  return n ? (e.L = Math.floor(n[0] / 1e3), r + n[0].length) : -1;
}
function m9(e, t, r) {
  var n = r9.exec(t.slice(r, r + 1));
  return n ? r + n[0].length : -1;
}
function b9(e, t, r) {
  var n = It.exec(t.slice(r));
  return n ? (e.Q = +n[0], r + n[0].length) : -1;
}
function x9(e, t, r) {
  var n = It.exec(t.slice(r));
  return n ? (e.s = +n[0], r + n[0].length) : -1;
}
function _x(e, t) {
  return Ue(e.getDate(), t, 2);
}
function w9(e, t) {
  return Ue(e.getHours(), t, 2);
}
function _9(e, t) {
  return Ue(e.getHours() % 12 || 12, t, 2);
}
function O9(e, t) {
  return Ue(1 + ls.count(Ln(e), e), t, 3);
}
function GO(e, t) {
  return Ue(e.getMilliseconds(), t, 3);
}
function A9(e, t) {
  return GO(e, t) + "000";
}
function S9(e, t) {
  return Ue(e.getMonth() + 1, t, 2);
}
function P9(e, t) {
  return Ue(e.getMinutes(), t, 2);
}
function E9(e, t) {
  return Ue(e.getSeconds(), t, 2);
}
function T9(e) {
  var t = e.getDay();
  return t === 0 ? 7 : t;
}
function $9(e, t) {
  return Ue(ql.count(Ln(e) - 1, e), t, 2);
}
function KO(e) {
  var t = e.getDay();
  return t >= 4 || t === 0 ? Ka(e) : Ka.ceil(e);
}
function C9(e, t) {
  return e = KO(e), Ue(Ka.count(Ln(e), e) + (Ln(e).getDay() === 4), t, 2);
}
function M9(e) {
  return e.getDay();
}
function I9(e, t) {
  return Ue(Jc.count(Ln(e) - 1, e), t, 2);
}
function k9(e, t) {
  return Ue(e.getFullYear() % 100, t, 2);
}
function j9(e, t) {
  return e = KO(e), Ue(e.getFullYear() % 100, t, 2);
}
function R9(e, t) {
  return Ue(e.getFullYear() % 1e4, t, 4);
}
function N9(e, t) {
  var r = e.getDay();
  return e = r >= 4 || r === 0 ? Ka(e) : Ka.ceil(e), Ue(e.getFullYear() % 1e4, t, 4);
}
function D9(e) {
  var t = e.getTimezoneOffset();
  return (t > 0 ? "-" : (t *= -1, "+")) + Ue(t / 60 | 0, "0", 2) + Ue(t % 60, "0", 2);
}
function Ox(e, t) {
  return Ue(e.getUTCDate(), t, 2);
}
function L9(e, t) {
  return Ue(e.getUTCHours(), t, 2);
}
function B9(e, t) {
  return Ue(e.getUTCHours() % 12 || 12, t, 2);
}
function F9(e, t) {
  return Ue(1 + Kl.count(Bn(e), e), t, 3);
}
function qO(e, t) {
  return Ue(e.getUTCMilliseconds(), t, 3);
}
function W9(e, t) {
  return qO(e, t) + "000";
}
function z9(e, t) {
  return Ue(e.getUTCMonth() + 1, t, 2);
}
function U9(e, t) {
  return Ue(e.getUTCMinutes(), t, 2);
}
function H9(e, t) {
  return Ue(e.getUTCSeconds(), t, 2);
}
function G9(e) {
  var t = e.getUTCDay();
  return t === 0 ? 7 : t;
}
function K9(e, t) {
  return Ue(Vl.count(Bn(e) - 1, e), t, 2);
}
function VO(e) {
  var t = e.getUTCDay();
  return t >= 4 || t === 0 ? qa(e) : qa.ceil(e);
}
function q9(e, t) {
  return e = VO(e), Ue(qa.count(Bn(e), e) + (Bn(e).getUTCDay() === 4), t, 2);
}
function V9(e) {
  return e.getUTCDay();
}
function Y9(e, t) {
  return Ue(Qc.count(Bn(e) - 1, e), t, 2);
}
function X9(e, t) {
  return Ue(e.getUTCFullYear() % 100, t, 2);
}
function Z9(e, t) {
  return e = VO(e), Ue(e.getUTCFullYear() % 100, t, 2);
}
function J9(e, t) {
  return Ue(e.getUTCFullYear() % 1e4, t, 4);
}
function Q9(e, t) {
  var r = e.getUTCDay();
  return e = r >= 4 || r === 0 ? qa(e) : qa.ceil(e), Ue(e.getUTCFullYear() % 1e4, t, 4);
}
function eH() {
  return "+0000";
}
function Ax() {
  return "%";
}
function Sx(e) {
  return +e;
}
function Px(e) {
  return Math.floor(+e / 1e3);
}
var Pa, YO, XO;
tH({
  dateTime: "%x, %X",
  date: "%-m/%-d/%Y",
  time: "%-I:%M:%S %p",
  periods: ["AM", "PM"],
  days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
});
function tH(e) {
  return Pa = t9(e), YO = Pa.format, Pa.parse, XO = Pa.utcFormat, Pa.utcParse, Pa;
}
function rH(e) {
  return new Date(e);
}
function nH(e) {
  return e instanceof Date ? +e : +/* @__PURE__ */ new Date(+e);
}
function og(e, t, r, n, i, a, u, c, l, f) {
  var d = Kv(), h = d.invert, v = d.domain, g = f(".%L"), x = f(":%S"), y = f("%I:%M"), w = f("%I %p"), A = f("%a %d"), O = f("%b %d"), S = f("%B"), _ = f("%Y");
  function b(E) {
    return (l(E) < E ? g : c(E) < E ? x : u(E) < E ? y : a(E) < E ? w : n(E) < E ? i(E) < E ? A : O : r(E) < E ? S : _)(E);
  }
  return d.invert = function(E) {
    return new Date(h(E));
  }, d.domain = function(E) {
    return arguments.length ? v(Array.from(E, nH)) : v().map(rH);
  }, d.ticks = function(E) {
    var C = v();
    return e(C[0], C[C.length - 1], E ?? 10);
  }, d.tickFormat = function(E, C) {
    return C == null ? b : f(C);
  }, d.nice = function(E) {
    var C = v();
    return (!E || typeof E.range != "function") && (E = t(C[0], C[C.length - 1], E ?? 10)), E ? v(NO(C, E)) : d;
  }, d.copy = function() {
    return cs(d, og(e, t, r, n, i, a, u, c, l, f));
  }, d;
}
function iH() {
  return Dr.apply(og(Q7, e9, Ln, ig, ql, ls, rg, eg, Ki, YO).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]), arguments);
}
function aH() {
  return Dr.apply(og(Z7, J7, Bn, ag, Vl, Kl, ng, tg, Ki, XO).domain([Date.UTC(2e3, 0, 1), Date.UTC(2e3, 0, 2)]), arguments);
}
function Yl() {
  var e = 0, t = 1, r, n, i, a, u = qt, c = !1, l;
  function f(h) {
    return h == null || isNaN(h = +h) ? l : u(i === 0 ? 0.5 : (h = (a(h) - r) * i, c ? Math.max(0, Math.min(1, h)) : h));
  }
  f.domain = function(h) {
    return arguments.length ? ([e, t] = h, r = a(e = +e), n = a(t = +t), i = r === n ? 0 : 1 / (n - r), f) : [e, t];
  }, f.clamp = function(h) {
    return arguments.length ? (c = !!h, f) : c;
  }, f.interpolator = function(h) {
    return arguments.length ? (u = h, f) : u;
  };
  function d(h) {
    return function(v) {
      var g, x;
      return arguments.length ? ([g, x] = v, u = h(g, x), f) : [u(0), u(1)];
    };
  }
  return f.range = d(wo), f.rangeRound = d(Gv), f.unknown = function(h) {
    return arguments.length ? (l = h, f) : l;
  }, function(h) {
    return a = h, r = h(e), n = h(t), i = r === n ? 0 : 1 / (n - r), f;
  };
}
function Ai(e, t) {
  return t.domain(e.domain()).interpolator(e.interpolator()).clamp(e.clamp()).unknown(e.unknown());
}
function ZO() {
  var e = Oi(Yl()(qt));
  return e.copy = function() {
    return Ai(e, ZO());
  }, Gn.apply(e, arguments);
}
function JO() {
  var e = Yv(Yl()).domain([1, 10]);
  return e.copy = function() {
    return Ai(e, JO()).base(e.base());
  }, Gn.apply(e, arguments);
}
function QO() {
  var e = Xv(Yl());
  return e.copy = function() {
    return Ai(e, QO()).constant(e.constant());
  }, Gn.apply(e, arguments);
}
function ug() {
  var e = Zv(Yl());
  return e.copy = function() {
    return Ai(e, ug()).exponent(e.exponent());
  }, Gn.apply(e, arguments);
}
function oH() {
  return ug.apply(null, arguments).exponent(0.5);
}
function eA() {
  var e = [], t = qt;
  function r(n) {
    if (n != null && !isNaN(n = +n)) return t((us(e, n, 1) - 1) / (e.length - 1));
  }
  return r.domain = function(n) {
    if (!arguments.length) return e.slice();
    e = [];
    for (let i of n) i != null && !isNaN(i = +i) && e.push(i);
    return e.sort(vi), r;
  }, r.interpolator = function(n) {
    return arguments.length ? (t = n, r) : t;
  }, r.range = function() {
    return e.map((n, i) => t(i / (e.length - 1)));
  }, r.quantiles = function(n) {
    return Array.from({ length: n + 1 }, (i, a) => KU(e, a / n));
  }, r.copy = function() {
    return eA(t).domain(e);
  }, Gn.apply(r, arguments);
}
function Xl() {
  var e = 0, t = 0.5, r = 1, n = 1, i, a, u, c, l, f = qt, d, h = !1, v;
  function g(y) {
    return isNaN(y = +y) ? v : (y = 0.5 + ((y = +d(y)) - a) * (n * y < n * a ? c : l), f(h ? Math.max(0, Math.min(1, y)) : y));
  }
  g.domain = function(y) {
    return arguments.length ? ([e, t, r] = y, i = d(e = +e), a = d(t = +t), u = d(r = +r), c = i === a ? 0 : 0.5 / (a - i), l = a === u ? 0 : 0.5 / (u - a), n = a < i ? -1 : 1, g) : [e, t, r];
  }, g.clamp = function(y) {
    return arguments.length ? (h = !!y, g) : h;
  }, g.interpolator = function(y) {
    return arguments.length ? (f = y, g) : f;
  };
  function x(y) {
    return function(w) {
      var A, O, S;
      return arguments.length ? ([A, O, S] = w, f = m7(y, [A, O, S]), g) : [f(0), f(0.5), f(1)];
    };
  }
  return g.range = x(wo), g.rangeRound = x(Gv), g.unknown = function(y) {
    return arguments.length ? (v = y, g) : v;
  }, function(y) {
    return d = y, i = y(e), a = y(t), u = y(r), c = i === a ? 0 : 0.5 / (a - i), l = a === u ? 0 : 0.5 / (u - a), n = a < i ? -1 : 1, g;
  };
}
function tA() {
  var e = Oi(Xl()(qt));
  return e.copy = function() {
    return Ai(e, tA());
  }, Gn.apply(e, arguments);
}
function rA() {
  var e = Yv(Xl()).domain([0.1, 1, 10]);
  return e.copy = function() {
    return Ai(e, rA()).base(e.base());
  }, Gn.apply(e, arguments);
}
function nA() {
  var e = Xv(Xl());
  return e.copy = function() {
    return Ai(e, nA()).constant(e.constant());
  }, Gn.apply(e, arguments);
}
function sg() {
  var e = Zv(Xl());
  return e.copy = function() {
    return Ai(e, sg()).exponent(e.exponent());
  }, Gn.apply(e, arguments);
}
function uH() {
  return sg.apply(null, arguments).exponent(0.5);
}
const Ex = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  scaleBand: Su,
  scaleDiverging: tA,
  scaleDivergingLog: rA,
  scaleDivergingPow: sg,
  scaleDivergingSqrt: uH,
  scaleDivergingSymlog: nA,
  scaleIdentity: RO,
  scaleImplicit: cp,
  scaleLinear: Xc,
  scaleLog: DO,
  scaleOrdinal: zv,
  scalePoint: fu,
  scalePow: Jv,
  scaleQuantile: FO,
  scaleQuantize: WO,
  scaleRadial: BO,
  scaleSequential: ZO,
  scaleSequentialLog: JO,
  scaleSequentialPow: ug,
  scaleSequentialQuantile: eA,
  scaleSequentialSqrt: oH,
  scaleSequentialSymlog: QO,
  scaleSqrt: W7,
  scaleSymlog: LO,
  scaleThreshold: zO,
  scaleTime: iH,
  scaleUtc: aH,
  tickFormat: jO
}, Symbol.toStringTag, { value: "Module" }));
var sH = fo;
function cH(e, t, r) {
  for (var n = -1, i = e.length; ++n < i; ) {
    var a = e[n], u = t(a);
    if (u != null && (c === void 0 ? u === u && !sH(u) : r(u, c)))
      var c = u, l = a;
  }
  return l;
}
var Zl = cH;
function lH(e, t) {
  return e > t;
}
var iA = lH, fH = Zl, dH = iA, hH = xo;
function pH(e) {
  return e && e.length ? fH(e, hH, dH) : void 0;
}
var vH = pH;
const di = /* @__PURE__ */ Je(vH);
function gH(e, t) {
  return e < t;
}
var aA = gH, yH = Zl, mH = aA, bH = xo;
function xH(e) {
  return e && e.length ? yH(e, bH, mH) : void 0;
}
var wH = xH;
const Jl = /* @__PURE__ */ Je(wH);
var _H = Ov, OH = pn, AH = hO, SH = rr;
function PH(e, t) {
  var r = SH(e) ? _H : AH;
  return r(e, OH(t));
}
var EH = PH, TH = fO, $H = EH;
function CH(e, t) {
  return TH($H(e, t), 1);
}
var MH = CH;
const IH = /* @__PURE__ */ Je(MH);
var kH = Nv;
function jH(e, t) {
  return kH(e, t);
}
var RH = jH;
const ea = /* @__PURE__ */ Je(RH);
var _o = 1e9, NH = {
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
}, lg, ht = !0, jr = "[DecimalError] ", Zi = jr + "Invalid argument: ", cg = jr + "Exponent out of range: ", Oo = Math.floor, zi = Math.pow, DH = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i, vr, Mt = 1e7, ct = 7, oA = 9007199254740991, el = Oo(oA / ct), de = {};
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
  return kn(this, new this.constructor(e));
};
de.dividedToIntegerBy = de.idiv = function(e) {
  var t = this, r = t.constructor;
  return et(kn(t, new r(e), 0, 1), r.precision);
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
  else if (e = new n(e), e.s < 1 || e.eq(vr)) throw Error(jr + "NaN");
  if (r.s < 1) throw Error(jr + (r.s ? "NaN" : "-Infinity"));
  return r.eq(vr) ? new n(0) : (ht = !1, t = kn(Cu(r, a), Cu(e, a), a), ht = !0, et(t, i));
};
de.minus = de.sub = function(e) {
  var t = this;
  return e = new t.constructor(e), t.s == e.s ? cA(t, e) : uA(t, (e.s = -e.s, e));
};
de.modulo = de.mod = function(e) {
  var t, r = this, n = r.constructor, i = n.precision;
  if (e = new n(e), !e.s) throw Error(jr + "NaN");
  return r.s ? (ht = !1, t = kn(r, e, 0, 1).times(e), ht = !0, r.minus(t)) : et(new n(r), i);
};
de.naturalExponential = de.exp = function() {
  return sA(this);
};
de.naturalLogarithm = de.ln = function() {
  return Cu(this);
};
de.negated = de.neg = function() {
  var e = new this.constructor(this);
  return e.s = -e.s || 0, e;
};
de.plus = de.add = function(e) {
  var t = this;
  return e = new t.constructor(e), t.s == e.s ? uA(t, e) : cA(t, (e.s = -e.s, e));
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
  var e, t, r, n, i, a, u, c = this, l = c.constructor;
  if (c.s < 1) {
    if (!c.s) return new l(0);
    throw Error(jr + "NaN");
  }
  for (e = xt(c), ht = !1, i = Math.sqrt(+c), i == 0 || i == 1 / 0 ? (t = on(c.d), (t.length + e) % 2 == 0 && (t += "0"), i = Math.sqrt(t), e = Oo((e + 1) / 2) - (e < 0 || e % 2), i == 1 / 0 ? t = "5e" + e : (t = i.toExponential(), t = t.slice(0, t.indexOf("e") + 1) + e), n = new l(t)) : n = new l(i.toString()), r = l.precision, i = u = r + 3; ; )
    if (a = n, n = a.plus(kn(c, a, u + 2)).times(0.5), on(a.d).slice(0, u) === (t = on(n.d)).slice(0, u)) {
      if (t = t.slice(u - 3, u + 1), i == u && t == "4999") {
        if (et(a, r + 1, 0), a.times(a).eq(c)) {
          n = a;
          break;
        }
      } else if (t != "9999")
        break;
      u += 4;
    }
  return ht = !0, et(n, r);
};
de.times = de.mul = function(e) {
  var t, r, n, i, a, u, c, l, f, d = this, h = d.constructor, v = d.d, g = (e = new h(e)).d;
  if (!d.s || !e.s) return new h(0);
  for (e.s *= d.s, r = d.e + e.e, l = v.length, f = g.length, l < f && (a = v, v = g, g = a, u = l, l = f, f = u), a = [], u = l + f, n = u; n--; ) a.push(0);
  for (n = f; --n >= 0; ) {
    for (t = 0, i = l + n; i > n; )
      c = a[i] + g[n] * v[i - n - 1] + t, a[i--] = c % Mt | 0, t = c / Mt | 0;
    a[i] = (a[i] + t) % Mt | 0;
  }
  for (; !a[--u]; ) a.pop();
  return t ? ++r : a.shift(), e.d = a, e.e = r, ht ? et(e, h.precision) : e;
};
de.toDecimalPlaces = de.todp = function(e, t) {
  var r = this, n = r.constructor;
  return r = new n(r), e === void 0 ? r : (fn(e, 0, _o), t === void 0 ? t = n.rounding : fn(t, 0, 8), et(r, e + xt(r) + 1, t));
};
de.toExponential = function(e, t) {
  var r, n = this, i = n.constructor;
  return e === void 0 ? r = ta(n, !0) : (fn(e, 0, _o), t === void 0 ? t = i.rounding : fn(t, 0, 8), n = et(new i(n), e + 1, t), r = ta(n, !0, e + 1)), r;
};
de.toFixed = function(e, t) {
  var r, n, i = this, a = i.constructor;
  return e === void 0 ? ta(i) : (fn(e, 0, _o), t === void 0 ? t = a.rounding : fn(t, 0, 8), n = et(new a(i), e + xt(i) + 1, t), r = ta(n.abs(), !1, e + xt(n) + 1), i.isneg() && !i.isZero() ? "-" + r : r);
};
de.toInteger = de.toint = function() {
  var e = this, t = e.constructor;
  return et(new t(e), xt(e) + 1, t.rounding);
};
de.toNumber = function() {
  return +this;
};
de.toPower = de.pow = function(e) {
  var t, r, n, i, a, u, c = this, l = c.constructor, f = 12, d = +(e = new l(e));
  if (!e.s) return new l(vr);
  if (c = new l(c), !c.s) {
    if (e.s < 1) throw Error(jr + "Infinity");
    return c;
  }
  if (c.eq(vr)) return c;
  if (n = l.precision, e.eq(vr)) return et(c, n);
  if (t = e.e, r = e.d.length - 1, u = t >= r, a = c.s, u) {
    if ((r = d < 0 ? -d : d) <= oA) {
      for (i = new l(vr), t = Math.ceil(n / ct + 4), ht = !1; r % 2 && (i = i.times(c), $x(i.d, t)), r = Oo(r / 2), r !== 0; )
        c = c.times(c), $x(c.d, t);
      return ht = !0, e.s < 0 ? new l(vr).div(i) : et(i, n);
    }
  } else if (a < 0) throw Error(jr + "NaN");
  return a = a < 0 && e.d[Math.max(t, r)] & 1 ? -1 : 1, c.s = 1, ht = !1, i = e.times(Cu(c, n + f)), ht = !0, i = sA(i), i.s = a, i;
};
de.toPrecision = function(e, t) {
  var r, n, i = this, a = i.constructor;
  return e === void 0 ? (r = xt(i), n = ta(i, r <= a.toExpNeg || r >= a.toExpPos)) : (fn(e, 1, _o), t === void 0 ? t = a.rounding : fn(t, 0, 8), i = et(new a(i), e, t), r = xt(i), n = ta(i, e <= r || r <= a.toExpNeg, e)), n;
};
de.toSignificantDigits = de.tosd = function(e, t) {
  var r = this, n = r.constructor;
  return e === void 0 ? (e = n.precision, t = n.rounding) : (fn(e, 1, _o), t === void 0 ? t = n.rounding : fn(t, 0, 8)), et(new n(r), e, t);
};
de.toString = de.valueOf = de.val = de.toJSON = de[Symbol.for("nodejs.util.inspect.custom")] = function() {
  var e = this, t = xt(e), r = e.constructor;
  return ta(e, t <= r.toExpNeg || t >= r.toExpPos);
};
function uA(e, t) {
  var r, n, i, a, u, c, l, f, d = e.constructor, h = d.precision;
  if (!e.s || !t.s)
    return t.s || (t = new d(e)), ht ? et(t, h) : t;
  if (l = e.d, f = t.d, u = e.e, i = t.e, l = l.slice(), a = u - i, a) {
    for (a < 0 ? (n = l, a = -a, c = f.length) : (n = f, i = u, c = l.length), u = Math.ceil(h / ct), c = u > c ? u + 1 : c + 1, a > c && (a = c, n.length = 1), n.reverse(); a--; ) n.push(0);
    n.reverse();
  }
  for (c = l.length, a = f.length, c - a < 0 && (a = c, n = f, f = l, l = n), r = 0; a; )
    r = (l[--a] = l[a] + f[a] + r) / Mt | 0, l[a] %= Mt;
  for (r && (l.unshift(r), ++i), c = l.length; l[--c] == 0; ) l.pop();
  return t.d = l, t.e = i, ht ? et(t, h) : t;
}
function fn(e, t, r) {
  if (e !== ~~e || e < t || e > r)
    throw Error(Zi + e);
}
function on(e) {
  var t, r, n, i = e.length - 1, a = "", u = e[0];
  if (i > 0) {
    for (a += u, t = 1; t < i; t++)
      n = e[t] + "", r = ct - n.length, r && (a += li(r)), a += n;
    u = e[t], n = u + "", r = ct - n.length, r && (a += li(r));
  } else if (u === 0)
    return "0";
  for (; u % 10 === 0; ) u /= 10;
  return a + u;
}
var kn = /* @__PURE__ */ function() {
  function e(n, i) {
    var a, u = 0, c = n.length;
    for (n = n.slice(); c--; )
      a = n[c] * i + u, n[c] = a % Mt | 0, u = a / Mt | 0;
    return u && n.unshift(u), n;
  }
  function t(n, i, a, u) {
    var c, l;
    if (a != u)
      l = a > u ? 1 : -1;
    else
      for (c = l = 0; c < a; c++)
        if (n[c] != i[c]) {
          l = n[c] > i[c] ? 1 : -1;
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
    var c, l, f, d, h, v, g, x, y, w, A, O, S, _, b, E, C, M, F = n.constructor, D = n.s == i.s ? 1 : -1, B = n.d, N = i.d;
    if (!n.s) return new F(n);
    if (!i.s) throw Error(jr + "Division by zero");
    for (l = n.e - i.e, C = N.length, b = B.length, g = new F(D), x = g.d = [], f = 0; N[f] == (B[f] || 0); ) ++f;
    if (N[f] > (B[f] || 0) && --l, a == null ? O = a = F.precision : u ? O = a + (xt(n) - xt(i)) + 1 : O = a, O < 0) return new F(0);
    if (O = O / ct + 2 | 0, f = 0, C == 1)
      for (d = 0, N = N[0], O++; (f < b || d) && O--; f++)
        S = d * Mt + (B[f] || 0), x[f] = S / N | 0, d = S % N | 0;
    else {
      for (d = Mt / (N[0] + 1) | 0, d > 1 && (N = e(N, d), B = e(B, d), C = N.length, b = B.length), _ = C, y = B.slice(0, C), w = y.length; w < C; ) y[w++] = 0;
      M = N.slice(), M.unshift(0), E = N[0], N[1] >= Mt / 2 && ++E;
      do
        d = 0, c = t(N, y, C, w), c < 0 ? (A = y[0], C != w && (A = A * Mt + (y[1] || 0)), d = A / E | 0, d > 1 ? (d >= Mt && (d = Mt - 1), h = e(N, d), v = h.length, w = y.length, c = t(h, y, v, w), c == 1 && (d--, r(h, C < v ? M : N, v))) : (d == 0 && (c = d = 1), h = N.slice()), v = h.length, v < w && h.unshift(0), r(y, h, w), c == -1 && (w = y.length, c = t(N, y, C, w), c < 1 && (d++, r(y, C < w ? M : N, w))), w = y.length) : c === 0 && (d++, y = [0]), x[f++] = d, c && y[0] ? y[w++] = B[_] || 0 : (y = [B[_]], w = 1);
      while ((_++ < b || y[0] !== void 0) && O--);
    }
    return x[0] || x.shift(), g.e = l, et(g, u ? a + xt(g) + 1 : a);
  };
}();
function sA(e, t) {
  var r, n, i, a, u, c, l = 0, f = 0, d = e.constructor, h = d.precision;
  if (xt(e) > 16) throw Error(cg + xt(e));
  if (!e.s) return new d(vr);
  for (t == null ? (ht = !1, c = h) : c = t, u = new d(0.03125); e.abs().gte(0.1); )
    e = e.times(u), f += 5;
  for (n = Math.log(zi(2, f)) / Math.LN10 * 2 + 5 | 0, c += n, r = i = a = new d(vr), d.precision = c; ; ) {
    if (i = et(i.times(e), c), r = r.times(++l), u = a.plus(kn(i, r, c)), on(u.d).slice(0, c) === on(a.d).slice(0, c)) {
      for (; f--; ) a = et(a.times(a), c);
      return d.precision = h, t == null ? (ht = !0, et(a, h)) : a;
    }
    a = u;
  }
}
function xt(e) {
  for (var t = e.e * ct, r = e.d[0]; r >= 10; r /= 10) t++;
  return t;
}
function sh(e, t, r) {
  if (t > e.LN10.sd())
    throw ht = !0, r && (e.precision = r), Error(jr + "LN10 precision limit exceeded");
  return et(new e(e.LN10), t);
}
function li(e) {
  for (var t = ""; e--; ) t += "0";
  return t;
}
function Cu(e, t) {
  var r, n, i, a, u, c, l, f, d, h = 1, v = 10, g = e, x = g.d, y = g.constructor, w = y.precision;
  if (g.s < 1) throw Error(jr + (g.s ? "NaN" : "-Infinity"));
  if (g.eq(vr)) return new y(0);
  if (t == null ? (ht = !1, f = w) : f = t, g.eq(10))
    return t == null && (ht = !0), sh(y, f);
  if (f += v, y.precision = f, r = on(x), n = r.charAt(0), a = xt(g), Math.abs(a) < 15e14) {
    for (; n < 7 && n != 1 || n == 1 && r.charAt(1) > 3; )
      g = g.times(e), r = on(g.d), n = r.charAt(0), h++;
    a = xt(g), n > 1 ? (g = new y("0." + r), a++) : g = new y(n + "." + r.slice(1));
  } else
    return l = sh(y, f + 2, w).times(a + ""), g = Cu(new y(n + "." + r.slice(1)), f - v).plus(l), y.precision = w, t == null ? (ht = !0, et(g, w)) : g;
  for (c = u = g = kn(g.minus(vr), g.plus(vr), f), d = et(g.times(g), f), i = 3; ; ) {
    if (u = et(u.times(d), f), l = c.plus(kn(u, new y(i), f)), on(l.d).slice(0, f) === on(c.d).slice(0, f))
      return c = c.times(2), a !== 0 && (c = c.plus(sh(y, f + 2, w).times(a + ""))), c = kn(c, new y(h), f), y.precision = w, t == null ? (ht = !0, et(c, w)) : c;
    c = l, i += 2;
  }
}
function Tx(e, t) {
  var r, n, i;
  for ((r = t.indexOf(".")) > -1 && (t = t.replace(".", "")), (n = t.search(/e/i)) > 0 ? (r < 0 && (r = n), r += +t.slice(n + 1), t = t.substring(0, n)) : r < 0 && (r = t.length), n = 0; t.charCodeAt(n) === 48; ) ++n;
  for (i = t.length; t.charCodeAt(i - 1) === 48; ) --i;
  if (t = t.slice(n, i), t) {
    if (i -= n, r = r - n - 1, e.e = Oo(r / ct), e.d = [], n = (r + 1) % ct, r < 0 && (n += ct), n < i) {
      for (n && e.d.push(+t.slice(0, n)), i -= ct; n < i; ) e.d.push(+t.slice(n, n += ct));
      t = t.slice(n), n = ct - t.length;
    } else
      n -= i;
    for (; n--; ) t += "0";
    if (e.d.push(+t), ht && (e.e > el || e.e < -el)) throw Error(cg + r);
  } else
    e.s = 0, e.e = 0, e.d = [0];
  return e;
}
function et(e, t, r) {
  var n, i, a, u, c, l, f, d, h = e.d;
  for (u = 1, a = h[0]; a >= 10; a /= 10) u++;
  if (n = t - u, n < 0)
    n += ct, i = t, f = h[d = 0];
  else {
    if (d = Math.ceil((n + 1) / ct), a = h.length, d >= a) return e;
    for (f = a = h[d], u = 1; a >= 10; a /= 10) u++;
    n %= ct, i = n - ct + u;
  }
  if (r !== void 0 && (a = zi(10, u - i - 1), c = f / a % 10 | 0, l = t < 0 || h[d + 1] !== void 0 || f % a, l = r < 4 ? (c || l) && (r == 0 || r == (e.s < 0 ? 3 : 2)) : c > 5 || c == 5 && (r == 4 || l || r == 6 && // Check whether the digit to the left of the rounding digit is odd.
  (n > 0 ? i > 0 ? f / zi(10, u - i) : 0 : h[d - 1]) % 10 & 1 || r == (e.s < 0 ? 8 : 7))), t < 1 || !h[0])
    return l ? (a = xt(e), h.length = 1, t = t - a - 1, h[0] = zi(10, (ct - t % ct) % ct), e.e = Oo(-t / ct) || 0) : (h.length = 1, h[0] = e.e = e.s = 0), e;
  if (n == 0 ? (h.length = d, a = 1, d--) : (h.length = d + 1, a = zi(10, ct - n), h[d] = i > 0 ? (f / zi(10, u - i) % zi(10, i) | 0) * a : 0), l)
    for (; ; )
      if (d == 0) {
        (h[0] += a) == Mt && (h[0] = 1, ++e.e);
        break;
      } else {
        if (h[d] += a, h[d] != Mt) break;
        h[d--] = 0, a = 1;
      }
  for (n = h.length; h[--n] === 0; ) h.pop();
  if (ht && (e.e > el || e.e < -el))
    throw Error(cg + xt(e));
  return e;
}
function cA(e, t) {
  var r, n, i, a, u, c, l, f, d, h, v = e.constructor, g = v.precision;
  if (!e.s || !t.s)
    return t.s ? t.s = -t.s : t = new v(e), ht ? et(t, g) : t;
  if (l = e.d, h = t.d, n = t.e, f = e.e, l = l.slice(), u = f - n, u) {
    for (d = u < 0, d ? (r = l, u = -u, c = h.length) : (r = h, n = f, c = l.length), i = Math.max(Math.ceil(g / ct), c) + 2, u > i && (u = i, r.length = 1), r.reverse(), i = u; i--; ) r.push(0);
    r.reverse();
  } else {
    for (i = l.length, c = h.length, d = i < c, d && (c = i), i = 0; i < c; i++)
      if (l[i] != h[i]) {
        d = l[i] < h[i];
        break;
      }
    u = 0;
  }
  for (d && (r = l, l = h, h = r, t.s = -t.s), c = l.length, i = h.length - c; i > 0; --i) l[c++] = 0;
  for (i = h.length; i > u; ) {
    if (l[--i] < h[i]) {
      for (a = i; a && l[--a] === 0; ) l[a] = Mt - 1;
      --l[a], l[i] += Mt;
    }
    l[i] -= h[i];
  }
  for (; l[--c] === 0; ) l.pop();
  for (; l[0] === 0; l.shift()) --n;
  return l[0] ? (t.d = l, t.e = n, ht ? et(t, g) : t) : new v(0);
}
function ta(e, t, r) {
  var n, i = xt(e), a = on(e.d), u = a.length;
  return t ? (r && (n = r - u) > 0 ? a = a.charAt(0) + "." + a.slice(1) + li(n) : u > 1 && (a = a.charAt(0) + "." + a.slice(1)), a = a + (i < 0 ? "e" : "e+") + i) : i < 0 ? (a = "0." + li(-i - 1) + a, r && (n = r - u) > 0 && (a += li(n))) : i >= u ? (a += li(i + 1 - u), r && (n = r - i - 1) > 0 && (a = a + "." + li(n))) : ((n = i + 1) < u && (a = a.slice(0, n) + "." + a.slice(n)), r && (n = r - u) > 0 && (i + 1 === u && (a += "."), a += li(n))), e.s < 0 ? "-" + a : a;
}
function $x(e, t) {
  if (e.length > t)
    return e.length = t, !0;
}
function lA(e) {
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
      return Tx(u, a.toString());
    } else if (typeof a != "string")
      throw Error(Zi + a);
    if (a.charCodeAt(0) === 45 ? (a = a.slice(1), u.s = -1) : u.s = 1, DH.test(a)) Tx(u, a);
    else throw Error(Zi + a);
  }
  if (i.prototype = de, i.ROUND_UP = 0, i.ROUND_DOWN = 1, i.ROUND_CEIL = 2, i.ROUND_FLOOR = 3, i.ROUND_HALF_UP = 4, i.ROUND_HALF_DOWN = 5, i.ROUND_HALF_EVEN = 6, i.ROUND_HALF_CEIL = 7, i.ROUND_HALF_FLOOR = 8, i.clone = lA, i.config = i.set = LH, e === void 0 && (e = {}), e)
    for (n = ["precision", "rounding", "toExpNeg", "toExpPos", "LN10"], t = 0; t < n.length; ) e.hasOwnProperty(r = n[t++]) || (e[r] = this[r]);
  return i.config(e), i;
}
function LH(e) {
  if (!e || typeof e != "object")
    throw Error(jr + "Object expected");
  var t, r, n, i = [
    "precision",
    1,
    _o,
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
      if (Oo(n) === n && n >= i[t + 1] && n <= i[t + 2]) this[r] = n;
      else throw Error(Zi + r + ": " + n);
  if ((n = e[r = "LN10"]) !== void 0)
    if (n == Math.LN10) this[r] = new this(n);
    else throw Error(Zi + r + ": " + n);
  return this;
}
var lg = lA(NH);
vr = new lg(1);
const Ze = lg;
function BH(e) {
  return UH(e) || zH(e) || WH(e) || FH();
}
function FH() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function WH(e, t) {
  if (e) {
    if (typeof e == "string") return hp(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return hp(e, t);
  }
}
function zH(e) {
  if (typeof Symbol < "u" && Symbol.iterator in Object(e)) return Array.from(e);
}
function UH(e) {
  if (Array.isArray(e)) return hp(e);
}
function hp(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n;
}
var HH = function(t) {
  return t;
}, fA = {
  "@@functional/placeholder": !0
}, dA = function(t) {
  return t === fA;
}, Cx = function(t) {
  return function r() {
    return arguments.length === 0 || arguments.length === 1 && dA(arguments.length <= 0 ? void 0 : arguments[0]) ? r : t.apply(void 0, arguments);
  };
}, GH = function e(t, r) {
  return t === 1 ? r : Cx(function() {
    for (var n = arguments.length, i = new Array(n), a = 0; a < n; a++)
      i[a] = arguments[a];
    var u = i.filter(function(c) {
      return c !== fA;
    }).length;
    return u >= t ? r.apply(void 0, i) : e(t - u, Cx(function() {
      for (var c = arguments.length, l = new Array(c), f = 0; f < c; f++)
        l[f] = arguments[f];
      var d = i.map(function(h) {
        return dA(h) ? l.shift() : h;
      });
      return r.apply(void 0, BH(d).concat(l));
    }));
  });
}, Ql = function(t) {
  return GH(t.length, t);
}, pp = function(t, r) {
  for (var n = [], i = t; i < r; ++i)
    n[i - t] = i;
  return n;
}, KH = Ql(function(e, t) {
  return Array.isArray(t) ? t.map(e) : Object.keys(t).map(function(r) {
    return t[r];
  }).map(e);
}), qH = function() {
  for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
    r[n] = arguments[n];
  if (!r.length)
    return HH;
  var i = r.reverse(), a = i[0], u = i.slice(1);
  return function() {
    return u.reduce(function(c, l) {
      return l(c);
    }, a.apply(void 0, arguments));
  };
}, vp = function(t) {
  return Array.isArray(t) ? t.reverse() : t.split("").reverse.join("");
}, hA = function(t) {
  var r = null, n = null;
  return function() {
    for (var i = arguments.length, a = new Array(i), u = 0; u < i; u++)
      a[u] = arguments[u];
    return r && a.every(function(c, l) {
      return c === r[l];
    }) || (r = a, n = t.apply(void 0, a)), n;
  };
};
function VH(e) {
  var t;
  return e === 0 ? t = 1 : t = Math.floor(new Ze(e).abs().log(10).toNumber()) + 1, t;
}
function YH(e, t, r) {
  for (var n = new Ze(e), i = 0, a = []; n.lt(t) && i < 1e5; )
    a.push(n.toNumber()), n = n.add(r), i++;
  return a;
}
var XH = Ql(function(e, t, r) {
  var n = +e, i = +t;
  return n + r * (i - n);
}), ZH = Ql(function(e, t, r) {
  var n = t - +e;
  return n = n || 1 / 0, (r - e) / n;
}), JH = Ql(function(e, t, r) {
  var n = t - +e;
  return n = n || 1 / 0, Math.max(0, Math.min(1, (r - e) / n));
});
const ef = {
  rangeStep: YH,
  getDigitCount: VH,
  interpolateNumber: XH,
  uninterpolateNumber: ZH,
  uninterpolateTruncation: JH
};
function gp(e) {
  return tG(e) || eG(e) || pA(e) || QH();
}
function QH() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function eG(e) {
  if (typeof Symbol < "u" && Symbol.iterator in Object(e)) return Array.from(e);
}
function tG(e) {
  if (Array.isArray(e)) return yp(e);
}
function Mu(e, t) {
  return iG(e) || nG(e, t) || pA(e, t) || rG();
}
function rG() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function pA(e, t) {
  if (e) {
    if (typeof e == "string") return yp(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return yp(e, t);
  }
}
function yp(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n;
}
function nG(e, t) {
  if (!(typeof Symbol > "u" || !(Symbol.iterator in Object(e)))) {
    var r = [], n = !0, i = !1, a = void 0;
    try {
      for (var u = e[Symbol.iterator](), c; !(n = (c = u.next()).done) && (r.push(c.value), !(t && r.length === t)); n = !0)
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
function iG(e) {
  if (Array.isArray(e)) return e;
}
function vA(e) {
  var t = Mu(e, 2), r = t[0], n = t[1], i = r, a = n;
  return r > n && (i = n, a = r), [i, a];
}
function gA(e, t, r) {
  if (e.lte(0))
    return new Ze(0);
  var n = ef.getDigitCount(e.toNumber()), i = new Ze(10).pow(n), a = e.div(i), u = n !== 1 ? 0.05 : 0.1, c = new Ze(Math.ceil(a.div(u).toNumber())).add(r).mul(u), l = c.mul(i);
  return t ? l : new Ze(Math.ceil(l));
}
function aG(e, t, r) {
  var n = 1, i = new Ze(e);
  if (!i.isint() && r) {
    var a = Math.abs(e);
    a < 1 ? (n = new Ze(10).pow(ef.getDigitCount(e) - 1), i = new Ze(Math.floor(i.div(n).toNumber())).mul(n)) : a > 1 && (i = new Ze(Math.floor(e)));
  } else e === 0 ? i = new Ze(Math.floor((t - 1) / 2)) : r || (i = new Ze(Math.floor(e)));
  var u = Math.floor((t - 1) / 2), c = qH(KH(function(l) {
    return i.add(new Ze(l - u).mul(n)).toNumber();
  }), pp);
  return c(0, t);
}
function yA(e, t, r, n) {
  var i = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : 0;
  if (!Number.isFinite((t - e) / (r - 1)))
    return {
      step: new Ze(0),
      tickMin: new Ze(0),
      tickMax: new Ze(0)
    };
  var a = gA(new Ze(t).sub(e).div(r - 1), n, i), u;
  e <= 0 && t >= 0 ? u = new Ze(0) : (u = new Ze(e).add(t).div(2), u = u.sub(new Ze(u).mod(a)));
  var c = Math.ceil(u.sub(e).div(a).toNumber()), l = Math.ceil(new Ze(t).sub(u).div(a).toNumber()), f = c + l + 1;
  return f > r ? yA(e, t, r, n, i + 1) : (f < r && (l = t > 0 ? l + (r - f) : l, c = t > 0 ? c : c + (r - f)), {
    step: a,
    tickMin: u.sub(new Ze(c).mul(a)),
    tickMax: u.add(new Ze(l).mul(a))
  });
}
function oG(e) {
  var t = Mu(e, 2), r = t[0], n = t[1], i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 6, a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0, u = Math.max(i, 2), c = vA([r, n]), l = Mu(c, 2), f = l[0], d = l[1];
  if (f === -1 / 0 || d === 1 / 0) {
    var h = d === 1 / 0 ? [f].concat(gp(pp(0, i - 1).map(function() {
      return 1 / 0;
    }))) : [].concat(gp(pp(0, i - 1).map(function() {
      return -1 / 0;
    })), [d]);
    return r > n ? vp(h) : h;
  }
  if (f === d)
    return aG(f, i, a);
  var v = yA(f, d, u, a), g = v.step, x = v.tickMin, y = v.tickMax, w = ef.rangeStep(x, y.add(new Ze(0.1).mul(g)), g);
  return r > n ? vp(w) : w;
}
function uG(e, t) {
  var r = Mu(e, 2), n = r[0], i = r[1], a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0, u = vA([n, i]), c = Mu(u, 2), l = c[0], f = c[1];
  if (l === -1 / 0 || f === 1 / 0)
    return [n, i];
  if (l === f)
    return [l];
  var d = Math.max(t, 2), h = gA(new Ze(f).sub(l).div(d - 1), a, 0), v = [].concat(gp(ef.rangeStep(new Ze(l), new Ze(f).sub(new Ze(0.99).mul(h)), h)), [f]);
  return n > i ? vp(v) : v;
}
var sG = hA(oG), cG = hA(uG), lG = process.env.NODE_ENV === "production", ch = "Invariant failed";
function er(e, t) {
  if (lG)
    throw new Error(ch);
  var r = typeof t == "function" ? t() : t, n = r ? "".concat(ch, ": ").concat(r) : ch;
  throw new Error(n);
}
var fG = ["offset", "layout", "width", "dataKey", "data", "dataPointFormatter", "xAxis", "yAxis"];
function tl() {
  return tl = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, tl.apply(this, arguments);
}
function dG(e, t) {
  return gG(e) || vG(e, t) || pG(e, t) || hG();
}
function hG() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function pG(e, t) {
  if (e) {
    if (typeof e == "string") return Mx(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Mx(e, t);
  }
}
function Mx(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function vG(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, i, a, u, c = [], l = !0, f = !1;
    try {
      if (a = (r = r.call(e)).next, t !== 0) for (; !(l = (n = a.call(r)).done) && (c.push(n.value), c.length !== t); l = !0) ;
    } catch (d) {
      f = !0, i = d;
    } finally {
      try {
        if (!l && r.return != null && (u = r.return(), Object(u) !== u)) return;
      } finally {
        if (f) throw i;
      }
    }
    return c;
  }
}
function gG(e) {
  if (Array.isArray(e)) return e;
}
function yG(e, t) {
  if (e == null) return {};
  var r = mG(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function mG(e, t) {
  if (e == null) return {};
  var r = {}, n = Object.keys(e), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
function fs(e) {
  var t = e.offset, r = e.layout, n = e.width, i = e.dataKey, a = e.data, u = e.dataPointFormatter, c = e.xAxis, l = e.yAxis, f = yG(e, fG), d = me(f, !1);
  e.direction === "x" && c.type !== "number" && (process.env.NODE_ENV !== "production" ? er(!1, 'ErrorBar requires Axis type property to be "number".') : er());
  var h = a.map(function(v) {
    var g = u(v, i), x = g.x, y = g.y, w = g.value, A = g.errorVal;
    if (!A)
      return null;
    var O = [], S, _;
    if (Array.isArray(A)) {
      var b = dG(A, 2);
      S = b[0], _ = b[1];
    } else
      S = _ = A;
    if (r === "vertical") {
      var E = c.scale, C = y + t, M = C + n, F = C - n, D = E(w - S), B = E(w + _);
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
      var N = l.scale, U = x + t, z = U - n, J = U + n, H = N(w - S), Z = N(w + _);
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
    return /* @__PURE__ */ k.createElement(Le, tl({
      className: "recharts-errorBar",
      key: "bar-".concat(O.map(function(K) {
        return "".concat(K.x1, "-").concat(K.x2, "-").concat(K.y1, "-").concat(K.y2);
      }))
    }, d), O.map(function(K) {
      return /* @__PURE__ */ k.createElement("line", tl({}, K, {
        key: "line-".concat(K.x1, "-").concat(K.x2, "-").concat(K.y1, "-").concat(K.y2)
      }));
    }));
  });
  return /* @__PURE__ */ k.createElement(Le, {
    className: "recharts-errorBars"
  }, h);
}
fs.defaultProps = {
  stroke: "black",
  strokeWidth: 1.5,
  width: 5,
  offset: 0,
  layout: "horizontal"
};
fs.displayName = "ErrorBar";
function Iu(e) {
  "@babel/helpers - typeof";
  return Iu = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Iu(e);
}
function Ix(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function lh(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Ix(Object(r), !0).forEach(function(n) {
      bG(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ix(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function bG(e, t, r) {
  return t = xG(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function xG(e) {
  var t = wG(e, "string");
  return Iu(t) == "symbol" ? t : String(t);
}
function wG(e, t) {
  if (Iu(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Iu(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var mA = function(t) {
  var r = t.children, n = t.formattedGraphicalItems, i = t.legendWidth, a = t.legendContent, u = dr(r, za);
  if (!u)
    return null;
  var c;
  return u.props && u.props.payload ? c = u.props && u.props.payload : a === "children" ? c = (n || []).reduce(function(l, f) {
    var d = f.item, h = f.props, v = h.sectors || h.data || [];
    return l.concat(v.map(function(g) {
      return {
        type: u.props.iconType || d.props.legendType,
        value: g.name,
        color: g.fill,
        payload: g
      };
    }));
  }, []) : c = (n || []).map(function(l) {
    var f = l.item, d = f.props, h = d.dataKey, v = d.name, g = d.legendType, x = d.hide;
    return {
      inactive: x,
      dataKey: h,
      type: u.props.iconType || g || "square",
      color: fg(f),
      value: v || h,
      // @ts-expect-error property strokeDasharray is required in Payload but optional in props
      payload: f.props
    };
  }), lh(lh(lh({}, u.props), za.getWithHeight(u, i)), {}, {
    payload: c,
    item: u
  });
};
function ku(e) {
  "@babel/helpers - typeof";
  return ku = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ku(e);
}
function kx(e, t) {
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
    t % 2 ? kx(Object(r), !0).forEach(function(n) {
      Da(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : kx(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Da(e, t, r) {
  return t = _G(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function _G(e) {
  var t = OG(e, "string");
  return ku(t) == "symbol" ? t : String(t);
}
function OG(e, t) {
  if (ku(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (ku(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function jx(e) {
  return EG(e) || PG(e) || SG(e) || AG();
}
function AG() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function SG(e, t) {
  if (e) {
    if (typeof e == "string") return mp(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return mp(e, t);
  }
}
function PG(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function EG(e) {
  if (Array.isArray(e)) return mp(e);
}
function mp(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function bt(e, t, r) {
  return Te(e) || Te(t) ? r : Et(t) ? gr(e, t, r) : Pe(t) ? t(e) : r;
}
function du(e, t, r, n) {
  var i = IH(e, function(c) {
    return bt(c, t);
  });
  if (r === "number") {
    var a = i.filter(function(c) {
      return oe(c) || parseFloat(c);
    });
    return a.length ? [Jl(a), di(a)] : [1 / 0, -1 / 0];
  }
  var u = n ? i.filter(function(c) {
    return !Te(c);
  }) : i;
  return u.map(function(c) {
    return Et(c) || c instanceof Date ? c : "";
  });
}
var TG = function(t) {
  var r, n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], i = arguments.length > 2 ? arguments[2] : void 0, a = arguments.length > 3 ? arguments[3] : void 0, u = -1, c = (r = n == null ? void 0 : n.length) !== null && r !== void 0 ? r : 0;
  if (c <= 1)
    return 0;
  if (a && a.axisType === "angleAxis" && Math.abs(Math.abs(a.range[1] - a.range[0]) - 360) <= 1e-6)
    for (var l = a.range, f = 0; f < c; f++) {
      var d = f > 0 ? i[f - 1].coordinate : i[c - 1].coordinate, h = i[f].coordinate, v = f >= c - 1 ? i[0].coordinate : i[f + 1].coordinate, g = void 0;
      if (Gt(h - d) !== Gt(v - h)) {
        var x = [];
        if (Gt(v - h) === Gt(l[1] - l[0])) {
          g = v;
          var y = h + l[1] - l[0];
          x[0] = Math.min(y, (y + d) / 2), x[1] = Math.max(y, (y + d) / 2);
        } else {
          g = d;
          var w = v + l[1] - l[0];
          x[0] = Math.min(h, (w + h) / 2), x[1] = Math.max(h, (w + h) / 2);
        }
        var A = [Math.min(h, (g + h) / 2), Math.max(h, (g + h) / 2)];
        if (t > A[0] && t <= A[1] || t >= x[0] && t <= x[1]) {
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
    for (var _ = 0; _ < c; _++)
      if (_ === 0 && t <= (n[_].coordinate + n[_ + 1].coordinate) / 2 || _ > 0 && _ < c - 1 && t > (n[_].coordinate + n[_ - 1].coordinate) / 2 && t <= (n[_].coordinate + n[_ + 1].coordinate) / 2 || _ === c - 1 && t > (n[_].coordinate + n[_ - 1].coordinate) / 2) {
        u = n[_].index;
        break;
      }
  return u;
}, fg = function(t) {
  var r = t, n = r.type.displayName, i = t.props, a = i.stroke, u = i.fill, c;
  switch (n) {
    case "Line":
      c = a;
      break;
    case "Area":
    case "Radar":
      c = a && a !== "none" ? a : u;
      break;
    default:
      c = u;
      break;
  }
  return c;
}, $G = function(t) {
  var r = t.barSize, n = t.totalSize, i = t.stackGroups, a = i === void 0 ? {} : i;
  if (!a)
    return {};
  for (var u = {}, c = Object.keys(a), l = 0, f = c.length; l < f; l++)
    for (var d = a[c[l]].stackGroups, h = Object.keys(d), v = 0, g = h.length; v < g; v++) {
      var x = d[h[v]], y = x.items, w = x.cateAxisId, A = y.filter(function(b) {
        return In(b.type).indexOf("Bar") >= 0;
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
}, CG = function(t) {
  var r = t.barGap, n = t.barCategoryGap, i = t.bandSize, a = t.sizeList, u = a === void 0 ? [] : a, c = t.maxBarSize, l = u.length;
  if (l < 1) return null;
  var f = Kt(r, i, 0, !0), d, h = [];
  if (u[0].barSize === +u[0].barSize) {
    var v = !1, g = i / l, x = u.reduce(function(_, b) {
      return _ + b.barSize || 0;
    }, 0);
    x += (l - 1) * f, x >= i && (x -= (l - 1) * f, f = 0), x >= i && g > 0 && (v = !0, g *= 0.9, x = l * g);
    var y = (i - x) / 2 >> 0, w = {
      offset: y - f,
      size: 0
    };
    d = u.reduce(function(_, b) {
      var E = {
        item: b.item,
        position: {
          offset: w.offset + w.size + f,
          // @ts-expect-error the type check above does not check for type number explicitly
          size: v ? g : b.barSize
        }
      }, C = [].concat(jx(_), [E]);
      return w = C[C.length - 1].position, b.stackList && b.stackList.length && b.stackList.forEach(function(M) {
        C.push({
          item: M,
          position: w
        });
      }), C;
    }, h);
  } else {
    var A = Kt(n, i, 0, !0);
    i - 2 * A - (l - 1) * f <= 0 && (f = 0);
    var O = (i - 2 * A - (l - 1) * f) / l;
    O > 1 && (O >>= 0);
    var S = c === +c ? Math.min(O, c) : O;
    d = u.reduce(function(_, b, E) {
      var C = [].concat(jx(_), [{
        item: b.item,
        position: {
          offset: A + (O + f) * E + (O - S) / 2,
          size: S
        }
      }]);
      return b.stackList && b.stackList.length && b.stackList.forEach(function(M) {
        C.push({
          item: M,
          position: C[C.length - 1].position
        });
      }), C;
    }, h);
  }
  return d;
}, MG = function(t, r, n, i) {
  var a = n.children, u = n.width, c = n.margin, l = u - (c.left || 0) - (c.right || 0), f = mA({
    children: a,
    legendWidth: l
  });
  if (f) {
    var d = i || {}, h = d.width, v = d.height, g = f.align, x = f.verticalAlign, y = f.layout;
    if ((y === "vertical" || y === "horizontal" && x === "middle") && g !== "center" && oe(t[g]))
      return Cr(Cr({}, t), {}, Da({}, g, t[g] + (h || 0)));
    if ((y === "horizontal" || y === "vertical" && g === "center") && x !== "middle" && oe(t[x]))
      return Cr(Cr({}, t), {}, Da({}, x, t[x] + (v || 0)));
  }
  return t;
}, IG = function(t, r, n) {
  return Te(r) ? !0 : t === "horizontal" ? r === "yAxis" : t === "vertical" || n === "x" ? r === "xAxis" : n === "y" ? r === "yAxis" : !0;
}, bA = function(t, r, n, i, a) {
  var u = r.props.children, c = yr(u, fs).filter(function(f) {
    return IG(i, a, f.props.direction);
  });
  if (c && c.length) {
    var l = c.map(function(f) {
      return f.props.dataKey;
    });
    return t.reduce(function(f, d) {
      var h = bt(d, n);
      if (Te(h)) return f;
      var v = Array.isArray(h) ? [Jl(h), di(h)] : [h, h], g = l.reduce(function(x, y) {
        var w = bt(d, y, 0), A = v[0] - Math.abs(Array.isArray(w) ? w[0] : w), O = v[1] + Math.abs(Array.isArray(w) ? w[1] : w);
        return [Math.min(A, x[0]), Math.max(O, x[1])];
      }, [1 / 0, -1 / 0]);
      return [Math.min(g[0], f[0]), Math.max(g[1], f[1])];
    }, [1 / 0, -1 / 0]);
  }
  return null;
}, kG = function(t, r, n, i, a) {
  var u = r.map(function(c) {
    return bA(t, c, n, a, i);
  }).filter(function(c) {
    return !Te(c);
  });
  return u && u.length ? u.reduce(function(c, l) {
    return [Math.min(c[0], l[0]), Math.max(c[1], l[1])];
  }, [1 / 0, -1 / 0]) : null;
}, xA = function(t, r, n, i, a) {
  var u = r.map(function(l) {
    var f = l.props.dataKey;
    return n === "number" && f && bA(t, l, f, i) || du(t, f, n, a);
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
  var c = {};
  return u.reduce(function(l, f) {
    for (var d = 0, h = f.length; d < h; d++)
      c[f[d]] || (c[f[d]] = !0, l.push(f[d]));
    return l;
  }, []);
}, wA = function(t, r) {
  return t === "horizontal" && r === "xAxis" || t === "vertical" && r === "yAxis" || t === "centric" && r === "angleAxis" || t === "radial" && r === "radiusAxis";
}, _A = function(t, r, n, i) {
  if (i)
    return t.map(function(l) {
      return l.coordinate;
    });
  var a, u, c = t.map(function(l) {
    return l.coordinate === r && (a = !0), l.coordinate === n && (u = !0), l.coordinate;
  });
  return a || c.push(r), u || c.push(n), c;
}, Mn = function(t, r, n) {
  if (!t) return null;
  var i = t.scale, a = t.duplicateDomain, u = t.type, c = t.range, l = t.realScaleType === "scaleBand" ? i.bandwidth() / 2 : 2, f = (r || n) && u === "category" && i.bandwidth ? i.bandwidth() / l : 0;
  if (f = t.axisType === "angleAxis" && (c == null ? void 0 : c.length) >= 2 ? Gt(c[0] - c[1]) * 2 * f : f, r && (t.ticks || t.niceTicks)) {
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
      return !yo(h.coordinate);
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
}, fh = /* @__PURE__ */ new WeakMap(), mc = function(t, r) {
  if (typeof r != "function")
    return t;
  fh.has(t) || fh.set(t, /* @__PURE__ */ new WeakMap());
  var n = fh.get(t);
  if (n.has(r))
    return n.get(r);
  var i = function() {
    t.apply(void 0, arguments), r.apply(void 0, arguments);
  };
  return n.set(r, i), i;
}, OA = function(t, r, n) {
  var i = t.scale, a = t.type, u = t.layout, c = t.axisType;
  if (i === "auto")
    return u === "radial" && c === "radiusAxis" ? {
      scale: Su(),
      realScaleType: "band"
    } : u === "radial" && c === "angleAxis" ? {
      scale: Xc(),
      realScaleType: "linear"
    } : a === "category" && r && (r.indexOf("LineChart") >= 0 || r.indexOf("AreaChart") >= 0 || r.indexOf("ComposedChart") >= 0 && !n) ? {
      scale: fu(),
      realScaleType: "point"
    } : a === "category" ? {
      scale: Su(),
      realScaleType: "band"
    } : {
      scale: Xc(),
      realScaleType: "linear"
    };
  if (as(i)) {
    var l = "scale".concat(Ll(i));
    return {
      scale: (Ex[l] || fu)(),
      realScaleType: Ex[l] ? l : "point"
    };
  }
  return Pe(i) ? {
    scale: i
  } : {
    scale: fu(),
    realScaleType: "point"
  };
}, Rx = 1e-4, AA = function(t) {
  var r = t.domain();
  if (!(!r || r.length <= 2)) {
    var n = r.length, i = t.range(), a = Math.min(i[0], i[1]) - Rx, u = Math.max(i[0], i[1]) + Rx, c = t(r[0]), l = t(r[n - 1]);
    (c < a || c > u || l < a || l > u) && t.domain([r[0], r[n - 1]]);
  }
}, jG = function(t, r) {
  if (!t)
    return null;
  for (var n = 0, i = t.length; n < i; n++)
    if (t[n].item === r)
      return t[n].position;
  return null;
}, RG = function(t, r) {
  if (!r || r.length !== 2 || !oe(r[0]) || !oe(r[1]))
    return t;
  var n = Math.min(r[0], r[1]), i = Math.max(r[0], r[1]), a = [t[0], t[1]];
  return (!oe(t[0]) || t[0] < n) && (a[0] = n), (!oe(t[1]) || t[1] > i) && (a[1] = i), a[0] > i && (a[0] = i), a[1] < n && (a[1] = n), a;
}, NG = function(t) {
  var r = t.length;
  if (!(r <= 0))
    for (var n = 0, i = t[0].length; n < i; ++n)
      for (var a = 0, u = 0, c = 0; c < r; ++c) {
        var l = yo(t[c][n][1]) ? t[c][n][0] : t[c][n][1];
        l >= 0 ? (t[c][n][0] = a, t[c][n][1] = a + l, a = t[c][n][1]) : (t[c][n][0] = u, t[c][n][1] = u + l, u = t[c][n][1]);
      }
}, DG = function(t) {
  var r = t.length;
  if (!(r <= 0))
    for (var n = 0, i = t[0].length; n < i; ++n)
      for (var a = 0, u = 0; u < r; ++u) {
        var c = yo(t[u][n][1]) ? t[u][n][0] : t[u][n][1];
        c >= 0 ? (t[u][n][0] = a, t[u][n][1] = a + c, a = t[u][n][1]) : (t[u][n][0] = 0, t[u][n][1] = 0);
      }
}, LG = {
  sign: NG,
  // @ts-expect-error definitelytyped types are incorrect
  expand: d8,
  // @ts-expect-error definitelytyped types are incorrect
  none: Ba,
  // @ts-expect-error definitelytyped types are incorrect
  silhouette: h8,
  // @ts-expect-error definitelytyped types are incorrect
  wiggle: p8,
  positive: DG
}, BG = function(t, r, n) {
  var i = r.map(function(c) {
    return c.props.dataKey;
  }), a = LG[n], u = f8().keys(i).value(function(c, l) {
    return +bt(c, l, 0);
  }).order(Uh).offset(a);
  return u(t);
}, FG = function(t, r, n, i, a, u) {
  if (!t)
    return null;
  var c = u ? r.reverse() : r, l = {}, f = c.reduce(function(h, v) {
    var g = v.props, x = g.stackId, y = g.hide;
    if (y)
      return h;
    var w = v.props[n], A = h[w] || {
      hasStack: !1,
      stackGroups: {}
    };
    if (Et(x)) {
      var O = A.stackGroups[x] || {
        numericAxisId: n,
        cateAxisId: i,
        items: []
      };
      O.items.push(v), A.hasStack = !0, A.stackGroups[x] = O;
    } else
      A.stackGroups[oa("_stackId_")] = {
        numericAxisId: n,
        cateAxisId: i,
        items: [v]
      };
    return Cr(Cr({}, h), {}, Da({}, w, A));
  }, l), d = {};
  return Object.keys(f).reduce(function(h, v) {
    var g = f[v];
    if (g.hasStack) {
      var x = {};
      g.stackGroups = Object.keys(g.stackGroups).reduce(function(y, w) {
        var A = g.stackGroups[w];
        return Cr(Cr({}, y), {}, Da({}, w, {
          numericAxisId: n,
          cateAxisId: i,
          items: A.items,
          stackedData: BG(t, A.items, a)
        }));
      }, x);
    }
    return Cr(Cr({}, h), {}, Da({}, v, g));
  }, d);
}, SA = function(t, r) {
  var n = r.realScaleType, i = r.type, a = r.tickCount, u = r.originalDomain, c = r.allowDecimals, l = n || r.scale;
  if (l !== "auto" && l !== "linear")
    return null;
  if (a && i === "number" && u && (u[0] === "auto" || u[1] === "auto")) {
    var f = t.domain();
    if (!f.length)
      return null;
    var d = sG(f, a, c);
    return t.domain([Jl(d), di(d)]), {
      niceTicks: d
    };
  }
  if (a && i === "number") {
    var h = t.domain(), v = cG(h, a, c);
    return {
      niceTicks: v
    };
  }
  return null;
};
function rl(e) {
  var t = e.axis, r = e.ticks, n = e.bandSize, i = e.entry, a = e.index, u = e.dataKey;
  if (t.type === "category") {
    if (!t.allowDuplicatedCategory && t.dataKey && !Te(i[t.dataKey])) {
      var c = $c(r, "value", i[t.dataKey]);
      if (c)
        return c.coordinate + n / 2;
    }
    return r[a] ? r[a].coordinate + n / 2 : null;
  }
  var l = bt(i, Te(u) ? t.dataKey : u);
  return Te(l) ? null : t.scale(l);
}
var Nx = function(t) {
  var r = t.axis, n = t.ticks, i = t.offset, a = t.bandSize, u = t.entry, c = t.index;
  if (r.type === "category")
    return n[c] ? n[c].coordinate + i : null;
  var l = bt(u, r.dataKey, r.domain[c]);
  return Te(l) ? null : r.scale(l) - a / 2 + i;
}, WG = function(t) {
  var r = t.numericAxis, n = r.scale.domain();
  if (r.type === "number") {
    var i = Math.min(n[0], n[1]), a = Math.max(n[0], n[1]);
    return i <= 0 && a >= 0 ? 0 : a < 0 ? a : i;
  }
  return n[0];
}, zG = function(t, r) {
  var n = t.props.stackId;
  if (Et(n)) {
    var i = r[n];
    if (i) {
      var a = i.items.indexOf(t);
      return a >= 0 ? i.stackedData[a] : null;
    }
  }
  return null;
}, UG = function(t) {
  return t.reduce(function(r, n) {
    return [Jl(n.concat([r[0]]).filter(oe)), di(n.concat([r[1]]).filter(oe))];
  }, [1 / 0, -1 / 0]);
}, PA = function(t, r, n) {
  return Object.keys(t).reduce(function(i, a) {
    var u = t[a], c = u.stackedData, l = c.reduce(function(f, d) {
      var h = UG(d.slice(r, n + 1));
      return [Math.min(f[0], h[0]), Math.max(f[1], h[1])];
    }, [1 / 0, -1 / 0]);
    return [Math.min(l[0], i[0]), Math.max(l[1], i[1])];
  }, [1 / 0, -1 / 0]).map(function(i) {
    return i === 1 / 0 || i === -1 / 0 ? 0 : i;
  });
}, Dx = /^dataMin[\s]*-[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/, Lx = /^dataMax[\s]*\+[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/, bp = function(t, r, n) {
  if (Pe(t))
    return t(r, n);
  if (!Array.isArray(t))
    return r;
  var i = [];
  if (oe(t[0]))
    i[0] = n ? t[0] : Math.min(t[0], r[0]);
  else if (Dx.test(t[0])) {
    var a = +Dx.exec(t[0])[1];
    i[0] = r[0] - a;
  } else Pe(t[0]) ? i[0] = t[0](r[0]) : i[0] = r[0];
  if (oe(t[1]))
    i[1] = n ? t[1] : Math.max(t[1], r[1]);
  else if (Lx.test(t[1])) {
    var u = +Lx.exec(t[1])[1];
    i[1] = r[1] + u;
  } else Pe(t[1]) ? i[1] = t[1](r[1]) : i[1] = r[1];
  return i;
}, nl = function(t, r, n) {
  if (t && t.scale && t.scale.bandwidth) {
    var i = t.scale.bandwidth();
    if (!n || i > 0)
      return i;
  }
  if (t && r && r.length >= 2) {
    for (var a = Lv(r, function(h) {
      return h.coordinate;
    }), u = 1 / 0, c = 1, l = a.length; c < l; c++) {
      var f = a[c], d = a[c - 1];
      u = Math.min((f.coordinate || 0) - (d.coordinate || 0), u);
    }
    return u === 1 / 0 ? 0 : u;
  }
  return n ? void 0 : 0;
}, Bx = function(t, r, n) {
  return !t || !t.length || ea(t, gr(n, "type.defaultProps.domain")) ? r : t;
}, EA = function(t, r) {
  var n = t.props, i = n.dataKey, a = n.name, u = n.unit, c = n.formatter, l = n.tooltipType, f = n.chartType, d = n.hide;
  return Cr(Cr({}, me(t, !1)), {}, {
    dataKey: i,
    unit: u,
    formatter: c,
    name: a || i,
    color: fg(t),
    value: bt(r, i),
    type: l,
    payload: r,
    chartType: f,
    hide: d
  });
};
function ju(e) {
  "@babel/helpers - typeof";
  return ju = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ju(e);
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
function En(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Fx(Object(r), !0).forEach(function(n) {
      TA(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Fx(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function TA(e, t, r) {
  return t = HG(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function HG(e) {
  var t = GG(e, "string");
  return ju(t) == "symbol" ? t : String(t);
}
function GG(e, t) {
  if (ju(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (ju(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function KG(e, t) {
  return XG(e) || YG(e, t) || VG(e, t) || qG();
}
function qG() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function VG(e, t) {
  if (e) {
    if (typeof e == "string") return Wx(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Wx(e, t);
  }
}
function Wx(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function YG(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, i, a, u, c = [], l = !0, f = !1;
    try {
      if (a = (r = r.call(e)).next, t !== 0) for (; !(l = (n = a.call(r)).done) && (c.push(n.value), c.length !== t); l = !0) ;
    } catch (d) {
      f = !0, i = d;
    } finally {
      try {
        if (!l && r.return != null && (u = r.return(), Object(u) !== u)) return;
      } finally {
        if (f) throw i;
      }
    }
    return c;
  }
}
function XG(e) {
  if (Array.isArray(e)) return e;
}
var il = Math.PI / 180, ZG = function(t) {
  return t * 180 / Math.PI;
}, it = function(t, r, n, i) {
  return {
    x: t + Math.cos(-il * i) * n,
    y: r + Math.sin(-il * i) * n
  };
}, $A = function(t, r) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
  return Math.min(Math.abs(t - (n.left || 0) - (n.right || 0)), Math.abs(r - (n.top || 0) - (n.bottom || 0))) / 2;
}, JG = function(t, r, n, i, a) {
  var u = t.width, c = t.height, l = t.startAngle, f = t.endAngle, d = Kt(t.cx, u, u / 2), h = Kt(t.cy, c, c / 2), v = $A(u, c, n), g = Kt(t.innerRadius, v, 0), x = Kt(t.outerRadius, v, v * 0.8), y = Object.keys(r);
  return y.reduce(function(w, A) {
    var O = r[A], S = O.domain, _ = O.reversed, b;
    if (Te(O.range))
      i === "angleAxis" ? b = [l, f] : i === "radiusAxis" && (b = [g, x]), _ && (b = [b[1], b[0]]);
    else {
      b = O.range;
      var E = b, C = KG(E, 2);
      l = C[0], f = C[1];
    }
    var M = OA(O, a), F = M.realScaleType, D = M.scale;
    D.domain(S).range(b), AA(D);
    var B = SA(D, En(En({}, O), {}, {
      realScaleType: F
    })), N = En(En(En({}, O), B), {}, {
      range: b,
      radius: x,
      realScaleType: F,
      scale: D,
      cx: d,
      cy: h,
      innerRadius: g,
      outerRadius: x,
      startAngle: l,
      endAngle: f
    });
    return En(En({}, w), {}, TA({}, A, N));
  }, {});
}, QG = function(t, r) {
  var n = t.x, i = t.y, a = r.x, u = r.y;
  return Math.sqrt(Math.pow(n - a, 2) + Math.pow(i - u, 2));
}, eK = function(t, r) {
  var n = t.x, i = t.y, a = r.cx, u = r.cy, c = QG({
    x: n,
    y: i
  }, {
    x: a,
    y: u
  });
  if (c <= 0)
    return {
      radius: c
    };
  var l = (n - a) / c, f = Math.acos(l);
  return i > u && (f = 2 * Math.PI - f), {
    radius: c,
    angle: ZG(f),
    angleInRadian: f
  };
}, tK = function(t) {
  var r = t.startAngle, n = t.endAngle, i = Math.floor(r / 360), a = Math.floor(n / 360), u = Math.min(i, a);
  return {
    startAngle: r - u * 360,
    endAngle: n - u * 360
  };
}, rK = function(t, r) {
  var n = r.startAngle, i = r.endAngle, a = Math.floor(n / 360), u = Math.floor(i / 360), c = Math.min(a, u);
  return t + c * 360;
}, zx = function(t, r) {
  var n = t.x, i = t.y, a = eK({
    x: n,
    y: i
  }, r), u = a.radius, c = a.angle, l = r.innerRadius, f = r.outerRadius;
  if (u < l || u > f)
    return !1;
  if (u === 0)
    return !0;
  var d = tK(r), h = d.startAngle, v = d.endAngle, g = c, x;
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
  return x ? En(En({}, r), {}, {
    radius: u,
    angle: rK(g, r)
  }) : null;
}, CA = function(t) {
  return !/* @__PURE__ */ qr(t) && !Pe(t) && typeof t != "boolean" ? t.className : "";
};
function Ru(e) {
  "@babel/helpers - typeof";
  return Ru = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ru(e);
}
var nK = ["offset"];
function iK(e) {
  return sK(e) || uK(e) || oK(e) || aK();
}
function aK() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function oK(e, t) {
  if (e) {
    if (typeof e == "string") return xp(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return xp(e, t);
  }
}
function uK(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function sK(e) {
  if (Array.isArray(e)) return xp(e);
}
function xp(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function cK(e, t) {
  if (e == null) return {};
  var r = lK(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function lK(e, t) {
  if (e == null) return {};
  var r = {}, n = Object.keys(e), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
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
function Ot(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Ux(Object(r), !0).forEach(function(n) {
      fK(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ux(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function fK(e, t, r) {
  return t = dK(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function dK(e) {
  var t = hK(e, "string");
  return Ru(t) == "symbol" ? t : String(t);
}
function hK(e, t) {
  if (Ru(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Ru(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Nu() {
  return Nu = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Nu.apply(this, arguments);
}
var pK = function(t) {
  var r = t.value, n = t.formatter, i = Te(t.children) ? r : t.children;
  return Pe(n) ? n(i) : i;
}, vK = function(t, r) {
  var n = Gt(r - t), i = Math.min(Math.abs(r - t), 360);
  return n * i;
}, gK = function(t, r, n) {
  var i = t.position, a = t.viewBox, u = t.offset, c = t.className, l = a, f = l.cx, d = l.cy, h = l.innerRadius, v = l.outerRadius, g = l.startAngle, x = l.endAngle, y = l.clockWise, w = (h + v) / 2, A = vK(g, x), O = A >= 0 ? 1 : -1, S, _;
  i === "insideStart" ? (S = g + O * u, _ = y) : i === "insideEnd" ? (S = x - O * u, _ = !y) : i === "end" && (S = x + O * u, _ = y), _ = A <= 0 ? _ : !_;
  var b = it(f, d, w, S), E = it(f, d, w, S + (_ ? 1 : -1) * 359), C = "M".concat(b.x, ",").concat(b.y, `
    A`).concat(w, ",").concat(w, ",0,1,").concat(_ ? 0 : 1, `,
    `).concat(E.x, ",").concat(E.y), M = Te(t.id) ? oa("recharts-radial-line-") : t.id;
  return /* @__PURE__ */ k.createElement("text", Nu({}, n, {
    dominantBaseline: "central",
    className: Me("recharts-radial-bar-label", c)
  }), /* @__PURE__ */ k.createElement("defs", null, /* @__PURE__ */ k.createElement("path", {
    id: M,
    d: C
  })), /* @__PURE__ */ k.createElement("textPath", {
    xlinkHref: "#".concat(M)
  }, r));
}, yK = function(t) {
  var r = t.viewBox, n = t.offset, i = t.position, a = r, u = a.cx, c = a.cy, l = a.innerRadius, f = a.outerRadius, d = a.startAngle, h = a.endAngle, v = (d + h) / 2;
  if (i === "outside") {
    var g = it(u, c, f + n, v), x = g.x, y = g.y;
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
      y: c,
      textAnchor: "middle",
      verticalAnchor: "middle"
    };
  if (i === "centerTop")
    return {
      x: u,
      y: c,
      textAnchor: "middle",
      verticalAnchor: "start"
    };
  if (i === "centerBottom")
    return {
      x: u,
      y: c,
      textAnchor: "middle",
      verticalAnchor: "end"
    };
  var w = (l + f) / 2, A = it(u, c, w, v), O = A.x, S = A.y;
  return {
    x: O,
    y: S,
    textAnchor: "middle",
    verticalAnchor: "middle"
  };
}, mK = function(t) {
  var r = t.viewBox, n = t.parentViewBox, i = t.offset, a = t.position, u = r, c = u.x, l = u.y, f = u.width, d = u.height, h = d >= 0 ? 1 : -1, v = h * i, g = h > 0 ? "end" : "start", x = h > 0 ? "start" : "end", y = f >= 0 ? 1 : -1, w = y * i, A = y > 0 ? "end" : "start", O = y > 0 ? "start" : "end";
  if (a === "top") {
    var S = {
      x: c + f / 2,
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
      x: c + f / 2,
      y: l + d + v,
      textAnchor: "middle",
      verticalAnchor: x
    };
    return Ot(Ot({}, _), n ? {
      height: Math.max(n.y + n.height - (l + d), 0),
      width: f
    } : {});
  }
  if (a === "left") {
    var b = {
      x: c - w,
      y: l + d / 2,
      textAnchor: A,
      verticalAnchor: "middle"
    };
    return Ot(Ot({}, b), n ? {
      width: Math.max(b.x - n.x, 0),
      height: d
    } : {});
  }
  if (a === "right") {
    var E = {
      x: c + f + w,
      y: l + d / 2,
      textAnchor: O,
      verticalAnchor: "middle"
    };
    return Ot(Ot({}, E), n ? {
      width: Math.max(n.x + n.width - E.x, 0),
      height: d
    } : {});
  }
  var C = n ? {
    width: f,
    height: d
  } : {};
  return a === "insideLeft" ? Ot({
    x: c + w,
    y: l + d / 2,
    textAnchor: O,
    verticalAnchor: "middle"
  }, C) : a === "insideRight" ? Ot({
    x: c + f - w,
    y: l + d / 2,
    textAnchor: A,
    verticalAnchor: "middle"
  }, C) : a === "insideTop" ? Ot({
    x: c + f / 2,
    y: l + v,
    textAnchor: "middle",
    verticalAnchor: x
  }, C) : a === "insideBottom" ? Ot({
    x: c + f / 2,
    y: l + d - v,
    textAnchor: "middle",
    verticalAnchor: g
  }, C) : a === "insideTopLeft" ? Ot({
    x: c + w,
    y: l + v,
    textAnchor: O,
    verticalAnchor: x
  }, C) : a === "insideTopRight" ? Ot({
    x: c + f - w,
    y: l + v,
    textAnchor: A,
    verticalAnchor: x
  }, C) : a === "insideBottomLeft" ? Ot({
    x: c + w,
    y: l + d - v,
    textAnchor: O,
    verticalAnchor: g
  }, C) : a === "insideBottomRight" ? Ot({
    x: c + f - w,
    y: l + d - v,
    textAnchor: A,
    verticalAnchor: g
  }, C) : ho(a) && (oe(a.x) || Hi(a.x)) && (oe(a.y) || Hi(a.y)) ? Ot({
    x: c + Kt(a.x, f),
    y: l + Kt(a.y, d),
    textAnchor: "end",
    verticalAnchor: "end"
  }, C) : Ot({
    x: c + f / 2,
    y: l + d / 2,
    textAnchor: "middle",
    verticalAnchor: "middle"
  }, C);
}, bK = function(t) {
  return "cx" in t && oe(t.cx);
};
function Pt(e) {
  var t = e.offset, r = t === void 0 ? 5 : t, n = cK(e, nK), i = Ot({
    offset: r
  }, n), a = i.viewBox, u = i.position, c = i.value, l = i.children, f = i.content, d = i.className, h = d === void 0 ? "" : d, v = i.textBreakAll;
  if (!a || Te(c) && Te(l) && !/* @__PURE__ */ qr(f) && !Pe(f))
    return null;
  if (/* @__PURE__ */ qr(f))
    return /* @__PURE__ */ At(f, i);
  var g;
  if (Pe(f)) {
    if (g = /* @__PURE__ */ H1(f, i), /* @__PURE__ */ qr(g))
      return g;
  } else
    g = pK(i);
  var x = bK(a), y = me(i, !0);
  if (x && (u === "insideStart" || u === "insideEnd" || u === "end"))
    return gK(i, g, y);
  var w = x ? yK(i) : mK(i);
  return /* @__PURE__ */ k.createElement(gi, Nu({
    className: Me("recharts-label", h)
  }, y, w, {
    breakAll: v
  }), g);
}
Pt.displayName = "Label";
var MA = function(t) {
  var r = t.cx, n = t.cy, i = t.angle, a = t.startAngle, u = t.endAngle, c = t.r, l = t.radius, f = t.innerRadius, d = t.outerRadius, h = t.x, v = t.y, g = t.top, x = t.left, y = t.width, w = t.height, A = t.clockWise, O = t.labelViewBox;
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
    if (oe(g) && oe(x))
      return {
        x: g,
        y: x,
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
    outerRadius: d || l || c || 0,
    clockWise: A
  } : t.viewBox ? t.viewBox : {};
}, xK = function(t, r) {
  return t ? t === !0 ? /* @__PURE__ */ k.createElement(Pt, {
    key: "label-implicit",
    viewBox: r
  }) : Et(t) ? /* @__PURE__ */ k.createElement(Pt, {
    key: "label-implicit",
    viewBox: r,
    value: t
  }) : /* @__PURE__ */ qr(t) ? t.type === Pt ? /* @__PURE__ */ At(t, {
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
  }) : ho(t) ? /* @__PURE__ */ k.createElement(Pt, Nu({
    viewBox: r
  }, t, {
    key: "label-implicit"
  })) : null : null;
}, wK = function(t, r) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0;
  if (!t || !t.children && n && !t.label)
    return null;
  var i = t.children, a = MA(t), u = yr(i, Pt).map(function(l, f) {
    return /* @__PURE__ */ At(l, {
      viewBox: r || a,
      // eslint-disable-next-line react/no-array-index-key
      key: "label-".concat(f)
    });
  });
  if (!n)
    return u;
  var c = xK(t.label, r || a);
  return [c].concat(iK(u));
};
Pt.parseViewBox = MA;
Pt.renderCallByParent = wK;
function _K(e) {
  var t = e == null ? 0 : e.length;
  return t ? e[t - 1] : void 0;
}
var OK = _K;
const AK = /* @__PURE__ */ Je(OK);
function Du(e) {
  "@babel/helpers - typeof";
  return Du = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Du(e);
}
var SK = ["valueAccessor"], PK = ["data", "dataKey", "clockWise", "id", "textBreakAll"];
function EK(e) {
  return MK(e) || CK(e) || $K(e) || TK();
}
function TK() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function $K(e, t) {
  if (e) {
    if (typeof e == "string") return wp(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return wp(e, t);
  }
}
function CK(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function MK(e) {
  if (Array.isArray(e)) return wp(e);
}
function wp(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
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
function Hx(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Gx(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Hx(Object(r), !0).forEach(function(n) {
      IK(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Hx(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function IK(e, t, r) {
  return t = kK(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function kK(e) {
  var t = jK(e, "string");
  return Du(t) == "symbol" ? t : String(t);
}
function jK(e, t) {
  if (Du(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Du(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Kx(e, t) {
  if (e == null) return {};
  var r = RK(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function RK(e, t) {
  if (e == null) return {};
  var r = {}, n = Object.keys(e), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
var NK = function(t) {
  return Array.isArray(t.value) ? AK(t.value) : t.value;
};
function kr(e) {
  var t = e.valueAccessor, r = t === void 0 ? NK : t, n = Kx(e, SK), i = n.data, a = n.dataKey, u = n.clockWise, c = n.id, l = n.textBreakAll, f = Kx(n, PK);
  return !i || !i.length ? null : /* @__PURE__ */ k.createElement(Le, {
    className: "recharts-label-list"
  }, i.map(function(d, h) {
    var v = Te(a) ? r(d, h) : bt(d && d.payload, a), g = Te(c) ? {} : {
      id: "".concat(c, "-").concat(h)
    };
    return /* @__PURE__ */ k.createElement(Pt, al({}, me(d, !0), f, g, {
      parentViewBox: d.parentViewBox,
      value: v,
      textBreakAll: l,
      viewBox: Pt.parseViewBox(Te(u) ? d : Gx(Gx({}, d), {}, {
        clockWise: u
      })),
      key: "label-".concat(h),
      index: h
    }));
  }));
}
kr.displayName = "LabelList";
function DK(e, t) {
  return e ? e === !0 ? /* @__PURE__ */ k.createElement(kr, {
    key: "labelList-implicit",
    data: t
  }) : /* @__PURE__ */ k.isValidElement(e) || Pe(e) ? /* @__PURE__ */ k.createElement(kr, {
    key: "labelList-implicit",
    data: t,
    content: e
  }) : ho(e) ? /* @__PURE__ */ k.createElement(kr, al({
    data: t
  }, e, {
    key: "labelList-implicit"
  })) : null : null;
}
function LK(e, t) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0;
  if (!e || !e.children && r && !e.label)
    return null;
  var n = e.children, i = yr(n, kr).map(function(u, c) {
    return /* @__PURE__ */ At(u, {
      data: t,
      // eslint-disable-next-line react/no-array-index-key
      key: "labelList-".concat(c)
    });
  });
  if (!r)
    return i;
  var a = DK(e.label, t);
  return [a].concat(EK(i));
}
kr.renderCallByParent = LK;
function Lu(e) {
  "@babel/helpers - typeof";
  return Lu = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Lu(e);
}
function _p() {
  return _p = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, _p.apply(this, arguments);
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
      BK(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : qx(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function BK(e, t, r) {
  return t = FK(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function FK(e) {
  var t = WK(e, "string");
  return Lu(t) == "symbol" ? t : String(t);
}
function WK(e, t) {
  if (Lu(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Lu(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var zK = function(t, r) {
  var n = Gt(r - t), i = Math.min(Math.abs(r - t), 359.999);
  return n * i;
}, bc = function(t) {
  var r = t.cx, n = t.cy, i = t.radius, a = t.angle, u = t.sign, c = t.isExternal, l = t.cornerRadius, f = t.cornerIsExternal, d = l * (c ? 1 : -1) + i, h = Math.asin(l / d) / il, v = f ? a : a + u * h, g = it(r, n, d, v), x = it(r, n, i, v), y = f ? a - u * h : a, w = it(r, n, d * Math.cos(h * il), y);
  return {
    center: g,
    circleTangency: x,
    lineTangency: w,
    theta: h
  };
}, IA = function(t) {
  var r = t.cx, n = t.cy, i = t.innerRadius, a = t.outerRadius, u = t.startAngle, c = t.endAngle, l = zK(u, c), f = u + l, d = it(r, n, a, u), h = it(r, n, a, f), v = "M ".concat(d.x, ",").concat(d.y, `
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
}, UK = function(t) {
  var r = t.cx, n = t.cy, i = t.innerRadius, a = t.outerRadius, u = t.cornerRadius, c = t.forceCornerRadius, l = t.cornerIsExternal, f = t.startAngle, d = t.endAngle, h = Gt(d - f), v = bc({
    cx: r,
    cy: n,
    radius: a,
    angle: f,
    sign: h,
    cornerRadius: u,
    cornerIsExternal: l
  }), g = v.circleTangency, x = v.lineTangency, y = v.theta, w = bc({
    cx: r,
    cy: n,
    radius: a,
    angle: d,
    sign: -h,
    cornerRadius: u,
    cornerIsExternal: l
  }), A = w.circleTangency, O = w.lineTangency, S = w.theta, _ = l ? Math.abs(f - d) : Math.abs(f - d) - y - S;
  if (_ < 0)
    return c ? "M ".concat(x.x, ",").concat(x.y, `
        a`).concat(u, ",").concat(u, ",0,0,1,").concat(u * 2, `,0
        a`).concat(u, ",").concat(u, ",0,0,1,").concat(-u * 2, `,0
      `) : IA({
      cx: r,
      cy: n,
      innerRadius: i,
      outerRadius: a,
      startAngle: f,
      endAngle: d
    });
  var b = "M ".concat(x.x, ",").concat(x.y, `
    A`).concat(u, ",").concat(u, ",0,0,").concat(+(h < 0), ",").concat(g.x, ",").concat(g.y, `
    A`).concat(a, ",").concat(a, ",0,").concat(+(_ > 180), ",").concat(+(h < 0), ",").concat(A.x, ",").concat(A.y, `
    A`).concat(u, ",").concat(u, ",0,0,").concat(+(h < 0), ",").concat(O.x, ",").concat(O.y, `
  `);
  if (i > 0) {
    var E = bc({
      cx: r,
      cy: n,
      radius: i,
      angle: f,
      sign: h,
      isExternal: !0,
      cornerRadius: u,
      cornerIsExternal: l
    }), C = E.circleTangency, M = E.lineTangency, F = E.theta, D = bc({
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
      return "".concat(b, "L").concat(r, ",").concat(n, "Z");
    b += "L".concat(N.x, ",").concat(N.y, `
      A`).concat(u, ",").concat(u, ",0,0,").concat(+(h < 0), ",").concat(B.x, ",").concat(B.y, `
      A`).concat(i, ",").concat(i, ",0,").concat(+(z > 180), ",").concat(+(h > 0), ",").concat(C.x, ",").concat(C.y, `
      A`).concat(u, ",").concat(u, ",0,0,").concat(+(h < 0), ",").concat(M.x, ",").concat(M.y, "Z");
  } else
    b += "L".concat(r, ",").concat(n, "Z");
  return b;
}, HK = {
  cx: 0,
  cy: 0,
  innerRadius: 0,
  outerRadius: 0,
  startAngle: 0,
  endAngle: 0,
  cornerRadius: 0,
  forceCornerRadius: !1,
  cornerIsExternal: !1
}, kA = function(t) {
  var r = Vx(Vx({}, HK), t), n = r.cx, i = r.cy, a = r.innerRadius, u = r.outerRadius, c = r.cornerRadius, l = r.forceCornerRadius, f = r.cornerIsExternal, d = r.startAngle, h = r.endAngle, v = r.className;
  if (u < a || d === h)
    return null;
  var g = Me("recharts-sector", v), x = u - a, y = Kt(c, x, 0, !0), w;
  return y > 0 && Math.abs(d - h) < 360 ? w = UK({
    cx: n,
    cy: i,
    innerRadius: a,
    outerRadius: u,
    cornerRadius: Math.min(y, x / 2),
    forceCornerRadius: l,
    cornerIsExternal: f,
    startAngle: d,
    endAngle: h
  }) : w = IA({
    cx: n,
    cy: i,
    innerRadius: a,
    outerRadius: u,
    startAngle: d,
    endAngle: h
  }), /* @__PURE__ */ k.createElement("path", _p({}, me(r, !0), {
    className: g,
    d: w,
    role: "img"
  }));
};
function Bu(e) {
  "@babel/helpers - typeof";
  return Bu = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Bu(e);
}
function Op() {
  return Op = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Op.apply(this, arguments);
}
function Yx(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Xx(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Yx(Object(r), !0).forEach(function(n) {
      GK(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Yx(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function GK(e, t, r) {
  return t = KK(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function KK(e) {
  var t = qK(e, "string");
  return Bu(t) == "symbol" ? t : String(t);
}
function qK(e, t) {
  if (Bu(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Bu(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Zx = {
  curveBasisClosed: e8,
  curveBasisOpen: t8,
  curveBasis: QD,
  curveBumpX: BD,
  curveBumpY: FD,
  curveLinearClosed: r8,
  curveLinear: Fl,
  curveMonotoneX: n8,
  curveMonotoneY: i8,
  curveNatural: a8,
  curveStep: o8,
  curveStepAfter: s8,
  curveStepBefore: u8
}, xc = function(t) {
  return t.x === +t.x && t.y === +t.y;
}, nu = function(t) {
  return t.x;
}, iu = function(t) {
  return t.y;
}, VK = function(t, r) {
  if (Pe(t))
    return t;
  var n = "curve".concat(Ll(t));
  return (n === "curveMonotone" || n === "curveBump") && r ? Zx["".concat(n).concat(r === "vertical" ? "Y" : "X")] : Zx[n] || Fl;
}, YK = function(t) {
  var r = t.type, n = r === void 0 ? "linear" : r, i = t.points, a = i === void 0 ? [] : i, u = t.baseLine, c = t.layout, l = t.connectNulls, f = l === void 0 ? !1 : l, d = VK(n, c), h = f ? a.filter(function(y) {
    return xc(y);
  }) : a, v;
  if (Array.isArray(u)) {
    var g = f ? u.filter(function(y) {
      return xc(y);
    }) : u, x = h.map(function(y, w) {
      return Xx(Xx({}, y), {}, {
        base: g[w]
      });
    });
    return c === "vertical" ? v = lc().y(iu).x1(nu).x0(function(y) {
      return y.base.x;
    }) : v = lc().x(nu).y1(iu).y0(function(y) {
      return y.base.y;
    }), v.defined(xc).curve(d), v(x);
  }
  return c === "vertical" && oe(u) ? v = lc().y(iu).x1(nu).x0(u) : oe(u) ? v = lc().x(nu).y1(iu).y0(u) : v = $_().x(nu).y(iu), v.defined(xc).curve(d), v(h);
}, Ji = function(t) {
  var r = t.className, n = t.points, i = t.path, a = t.pathRef;
  if ((!n || !n.length) && !i)
    return null;
  var u = n && n.length ? YK(t) : i;
  return /* @__PURE__ */ k.createElement("path", Op({}, me(t, !1), Cc(t), {
    className: Me("recharts-curve", r),
    d: u,
    ref: a
  }));
}, Ap = { exports: {} }, wc = { exports: {} }, Ve = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Jx;
function XK() {
  if (Jx) return Ve;
  Jx = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, a = e ? Symbol.for("react.profiler") : 60114, u = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, f = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, h = e ? Symbol.for("react.suspense") : 60113, v = e ? Symbol.for("react.suspense_list") : 60120, g = e ? Symbol.for("react.memo") : 60115, x = e ? Symbol.for("react.lazy") : 60116, y = e ? Symbol.for("react.block") : 60121, w = e ? Symbol.for("react.fundamental") : 60117, A = e ? Symbol.for("react.responder") : 60118, O = e ? Symbol.for("react.scope") : 60119;
  function S(b) {
    if (typeof b == "object" && b !== null) {
      var E = b.$$typeof;
      switch (E) {
        case t:
          switch (b = b.type, b) {
            case l:
            case f:
            case n:
            case a:
            case i:
            case h:
              return b;
            default:
              switch (b = b && b.$$typeof, b) {
                case c:
                case d:
                case x:
                case g:
                case u:
                  return b;
                default:
                  return E;
              }
          }
        case r:
          return E;
      }
    }
  }
  function _(b) {
    return S(b) === f;
  }
  return Ve.AsyncMode = l, Ve.ConcurrentMode = f, Ve.ContextConsumer = c, Ve.ContextProvider = u, Ve.Element = t, Ve.ForwardRef = d, Ve.Fragment = n, Ve.Lazy = x, Ve.Memo = g, Ve.Portal = r, Ve.Profiler = a, Ve.StrictMode = i, Ve.Suspense = h, Ve.isAsyncMode = function(b) {
    return _(b) || S(b) === l;
  }, Ve.isConcurrentMode = _, Ve.isContextConsumer = function(b) {
    return S(b) === c;
  }, Ve.isContextProvider = function(b) {
    return S(b) === u;
  }, Ve.isElement = function(b) {
    return typeof b == "object" && b !== null && b.$$typeof === t;
  }, Ve.isForwardRef = function(b) {
    return S(b) === d;
  }, Ve.isFragment = function(b) {
    return S(b) === n;
  }, Ve.isLazy = function(b) {
    return S(b) === x;
  }, Ve.isMemo = function(b) {
    return S(b) === g;
  }, Ve.isPortal = function(b) {
    return S(b) === r;
  }, Ve.isProfiler = function(b) {
    return S(b) === a;
  }, Ve.isStrictMode = function(b) {
    return S(b) === i;
  }, Ve.isSuspense = function(b) {
    return S(b) === h;
  }, Ve.isValidElementType = function(b) {
    return typeof b == "string" || typeof b == "function" || b === n || b === f || b === a || b === i || b === h || b === v || typeof b == "object" && b !== null && (b.$$typeof === x || b.$$typeof === g || b.$$typeof === u || b.$$typeof === c || b.$$typeof === d || b.$$typeof === w || b.$$typeof === A || b.$$typeof === O || b.$$typeof === y);
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
var Qx;
function ZK() {
  return Qx || (Qx = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, a = e ? Symbol.for("react.profiler") : 60114, u = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, f = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, h = e ? Symbol.for("react.suspense") : 60113, v = e ? Symbol.for("react.suspense_list") : 60120, g = e ? Symbol.for("react.memo") : 60115, x = e ? Symbol.for("react.lazy") : 60116, y = e ? Symbol.for("react.block") : 60121, w = e ? Symbol.for("react.fundamental") : 60117, A = e ? Symbol.for("react.responder") : 60118, O = e ? Symbol.for("react.scope") : 60119;
    function S(j) {
      return typeof j == "string" || typeof j == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      j === n || j === f || j === a || j === i || j === h || j === v || typeof j == "object" && j !== null && (j.$$typeof === x || j.$$typeof === g || j.$$typeof === u || j.$$typeof === c || j.$$typeof === d || j.$$typeof === w || j.$$typeof === A || j.$$typeof === O || j.$$typeof === y);
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
                  case c:
                  case d:
                  case x:
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
    var b = l, E = f, C = c, M = u, F = t, D = d, B = n, N = x, U = g, z = r, J = a, H = i, Z = h, K = !1;
    function ue(j) {
      return K || (K = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), G(j) || _(j) === l;
    }
    function G(j) {
      return _(j) === f;
    }
    function X(j) {
      return _(j) === c;
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
      return _(j) === x;
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
    Ye.AsyncMode = b, Ye.ConcurrentMode = E, Ye.ContextConsumer = C, Ye.ContextProvider = M, Ye.Element = F, Ye.ForwardRef = D, Ye.Fragment = B, Ye.Lazy = N, Ye.Memo = U, Ye.Portal = z, Ye.Profiler = J, Ye.StrictMode = H, Ye.Suspense = Z, Ye.isAsyncMode = ue, Ye.isConcurrentMode = G, Ye.isContextConsumer = X, Ye.isContextProvider = ae, Ye.isElement = ce, Ye.isForwardRef = he, Ye.isFragment = ge, Ye.isLazy = xe, Ye.isMemo = ye, Ye.isPortal = we, Ye.isProfiler = ne, Ye.isStrictMode = se, Ye.isSuspense = pe, Ye.isValidElementType = S, Ye.typeOf = _;
  }()), Ye;
}
var ew;
function jA() {
  return ew || (ew = 1, process.env.NODE_ENV === "production" ? wc.exports = XK() : wc.exports = ZK()), wc.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var dh, tw;
function JK() {
  if (tw) return dh;
  tw = 1;
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
      for (var u = {}, c = 0; c < 10; c++)
        u["_" + String.fromCharCode(c)] = c;
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
  return dh = i() ? Object.assign : function(a, u) {
    for (var c, l = n(a), f, d = 1; d < arguments.length; d++) {
      c = Object(arguments[d]);
      for (var h in c)
        t.call(c, h) && (l[h] = c[h]);
      if (e) {
        f = e(c);
        for (var v = 0; v < f.length; v++)
          r.call(c, f[v]) && (l[f[v]] = c[f[v]]);
      }
    }
    return l;
  }, dh;
}
var hh, rw;
function dg() {
  if (rw) return hh;
  rw = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return hh = e, hh;
}
var ph, nw;
function RA() {
  return nw || (nw = 1, ph = Function.call.bind(Object.prototype.hasOwnProperty)), ph;
}
var vh, iw;
function QK() {
  if (iw) return vh;
  iw = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = dg(), r = {}, n = RA();
    e = function(a) {
      var u = "Warning: " + a;
      typeof console < "u" && console.error(u);
      try {
        throw new Error(u);
      } catch {
      }
    };
  }
  function i(a, u, c, l, f) {
    if (process.env.NODE_ENV !== "production") {
      for (var d in a)
        if (n(a, d)) {
          var h;
          try {
            if (typeof a[d] != "function") {
              var v = Error(
                (l || "React class") + ": " + c + " type `" + d + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof a[d] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw v.name = "Invariant Violation", v;
            }
            h = a[d](u, d, l, c, null, t);
          } catch (x) {
            h = x;
          }
          if (h && !(h instanceof Error) && e(
            (l || "React class") + ": type specification of " + c + " `" + d + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof h + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), h instanceof Error && !(h.message in r)) {
            r[h.message] = !0;
            var g = f ? f() : "";
            e(
              "Failed " + c + " type: " + h.message + (g ?? "")
            );
          }
        }
    }
  }
  return i.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (r = {});
  }, vh = i, vh;
}
var gh, aw;
function eq() {
  if (aw) return gh;
  aw = 1;
  var e = jA(), t = JK(), r = dg(), n = RA(), i = QK(), a = function() {
  };
  process.env.NODE_ENV !== "production" && (a = function(c) {
    var l = "Warning: " + c;
    typeof console < "u" && console.error(l);
    try {
      throw new Error(l);
    } catch {
    }
  });
  function u() {
    return null;
  }
  return gh = function(c, l) {
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
      elementType: b(),
      instanceOf: E,
      node: D(),
      objectOf: M,
      oneOf: C,
      oneOfType: F,
      shape: N,
      exact: U
    };
    function x(G, X) {
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
        if (!c(xe)) {
          var ye = H(xe);
          return new y("Invalid " + he + " `" + ge + "` of type " + ("`" + ye + "` supplied to `" + ce + "`, expected a single ReactElement."));
        }
        return null;
      }
      return w(G);
    }
    function b() {
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
    function C(G) {
      if (!Array.isArray(G))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? a(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : a("Invalid argument supplied to oneOf, expected an array.")), u;
      function X(ae, ce, he, ge, xe) {
        for (var ye = ae[ce], we = 0; we < G.length; we++)
          if (x(ye, G[we]))
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
          if (G === null || c(G))
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
  }, gh;
}
var yh, ow;
function tq() {
  if (ow) return yh;
  ow = 1;
  var e = dg();
  function t() {
  }
  function r() {
  }
  return r.resetWarningCache = t, yh = function() {
    function n(u, c, l, f, d, h) {
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
  }, yh;
}
if (process.env.NODE_ENV !== "production") {
  var rq = jA(), nq = !0;
  Ap.exports = eq()(rq.isElement, nq);
} else
  Ap.exports = tq()();
var iq = Ap.exports;
const je = /* @__PURE__ */ Je(iq);
var aq = Object.getOwnPropertyNames, oq = Object.getOwnPropertySymbols, uq = Object.prototype.hasOwnProperty;
function uw(e, t) {
  return function(n, i, a) {
    return e(n, i, a) && t(n, i, a);
  };
}
function _c(e) {
  return function(r, n, i) {
    if (!r || !n || typeof r != "object" || typeof n != "object")
      return e(r, n, i);
    var a = i.cache, u = a.get(r), c = a.get(n);
    if (u && c)
      return u === n && c === r;
    a.set(r, n), a.set(n, r);
    var l = e(r, n, i);
    return a.delete(r), a.delete(n), l;
  };
}
function sw(e) {
  return aq(e).concat(oq(e));
}
var NA = Object.hasOwn || function(e, t) {
  return uq.call(e, t);
};
function Ao(e, t) {
  return e || t ? e === t : e === t || e !== e && t !== t;
}
var DA = "_owner", cw = Object.getOwnPropertyDescriptor, lw = Object.keys;
function sq(e, t, r) {
  var n = e.length;
  if (t.length !== n)
    return !1;
  for (; n-- > 0; )
    if (!r.equals(e[n], t[n], n, n, e, t, r))
      return !1;
  return !0;
}
function cq(e, t) {
  return Ao(e.getTime(), t.getTime());
}
function fw(e, t, r) {
  if (e.size !== t.size)
    return !1;
  for (var n = {}, i = e.entries(), a = 0, u, c; (u = i.next()) && !u.done; ) {
    for (var l = t.entries(), f = !1, d = 0; (c = l.next()) && !c.done; ) {
      var h = u.value, v = h[0], g = h[1], x = c.value, y = x[0], w = x[1];
      !f && !n[d] && (f = r.equals(v, y, a, d, e, t, r) && r.equals(g, w, v, y, e, t, r)) && (n[d] = !0), d++;
    }
    if (!f)
      return !1;
    a++;
  }
  return !0;
}
function lq(e, t, r) {
  var n = lw(e), i = n.length;
  if (lw(t).length !== i)
    return !1;
  for (var a; i-- > 0; )
    if (a = n[i], a === DA && (e.$$typeof || t.$$typeof) && e.$$typeof !== t.$$typeof || !NA(t, a) || !r.equals(e[a], t[a], a, a, e, t, r))
      return !1;
  return !0;
}
function au(e, t, r) {
  var n = sw(e), i = n.length;
  if (sw(t).length !== i)
    return !1;
  for (var a, u, c; i-- > 0; )
    if (a = n[i], a === DA && (e.$$typeof || t.$$typeof) && e.$$typeof !== t.$$typeof || !NA(t, a) || !r.equals(e[a], t[a], a, a, e, t, r) || (u = cw(e, a), c = cw(t, a), (u || c) && (!u || !c || u.configurable !== c.configurable || u.enumerable !== c.enumerable || u.writable !== c.writable)))
      return !1;
  return !0;
}
function fq(e, t) {
  return Ao(e.valueOf(), t.valueOf());
}
function dq(e, t) {
  return e.source === t.source && e.flags === t.flags;
}
function dw(e, t, r) {
  if (e.size !== t.size)
    return !1;
  for (var n = {}, i = e.values(), a, u; (a = i.next()) && !a.done; ) {
    for (var c = t.values(), l = !1, f = 0; (u = c.next()) && !u.done; )
      !l && !n[f] && (l = r.equals(a.value, u.value, a.value, u.value, e, t, r)) && (n[f] = !0), f++;
    if (!l)
      return !1;
  }
  return !0;
}
function hq(e, t) {
  var r = e.length;
  if (t.length !== r)
    return !1;
  for (; r-- > 0; )
    if (e[r] !== t[r])
      return !1;
  return !0;
}
var pq = "[object Arguments]", vq = "[object Boolean]", gq = "[object Date]", yq = "[object Map]", mq = "[object Number]", bq = "[object Object]", xq = "[object RegExp]", wq = "[object Set]", _q = "[object String]", Oq = Array.isArray, hw = typeof ArrayBuffer == "function" && ArrayBuffer.isView ? ArrayBuffer.isView : null, pw = Object.assign, Aq = Object.prototype.toString.call.bind(Object.prototype.toString);
function Sq(e) {
  var t = e.areArraysEqual, r = e.areDatesEqual, n = e.areMapsEqual, i = e.areObjectsEqual, a = e.arePrimitiveWrappersEqual, u = e.areRegExpsEqual, c = e.areSetsEqual, l = e.areTypedArraysEqual;
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
    if (Oq(d))
      return t(d, h, v);
    if (hw != null && hw(d))
      return l(d, h, v);
    if (g === Date)
      return r(d, h, v);
    if (g === RegExp)
      return u(d, h, v);
    if (g === Map)
      return n(d, h, v);
    if (g === Set)
      return c(d, h, v);
    var x = Aq(d);
    return x === gq ? r(d, h, v) : x === xq ? u(d, h, v) : x === yq ? n(d, h, v) : x === wq ? c(d, h, v) : x === bq ? typeof d.then != "function" && typeof h.then != "function" && i(d, h, v) : x === pq ? i(d, h, v) : x === vq || x === mq || x === _q ? a(d, h, v) : !1;
  };
}
function Pq(e) {
  var t = e.circular, r = e.createCustomConfig, n = e.strict, i = {
    areArraysEqual: n ? au : sq,
    areDatesEqual: cq,
    areMapsEqual: n ? uw(fw, au) : fw,
    areObjectsEqual: n ? au : lq,
    arePrimitiveWrappersEqual: fq,
    areRegExpsEqual: dq,
    areSetsEqual: n ? uw(dw, au) : dw,
    areTypedArraysEqual: n ? au : hq
  };
  if (r && (i = pw({}, i, r(i))), t) {
    var a = _c(i.areArraysEqual), u = _c(i.areMapsEqual), c = _c(i.areObjectsEqual), l = _c(i.areSetsEqual);
    i = pw({}, i, {
      areArraysEqual: a,
      areMapsEqual: u,
      areObjectsEqual: c,
      areSetsEqual: l
    });
  }
  return i;
}
function Eq(e) {
  return function(t, r, n, i, a, u, c) {
    return e(t, r, c);
  };
}
function Tq(e) {
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
var $q = Si();
Si({ strict: !0 });
Si({ circular: !0 });
Si({
  circular: !0,
  strict: !0
});
Si({
  createInternalComparator: function() {
    return Ao;
  }
});
Si({
  strict: !0,
  createInternalComparator: function() {
    return Ao;
  }
});
Si({
  circular: !0,
  createInternalComparator: function() {
    return Ao;
  }
});
Si({
  circular: !0,
  createInternalComparator: function() {
    return Ao;
  },
  strict: !0
});
function Si(e) {
  e === void 0 && (e = {});
  var t = e.circular, r = t === void 0 ? !1 : t, n = e.createInternalComparator, i = e.createState, a = e.strict, u = a === void 0 ? !1 : a, c = Pq(e), l = Sq(c), f = n ? n(l) : Eq(l);
  return Tq({ circular: r, comparator: l, createState: i, equals: f, strict: u });
}
function Cq(e) {
  typeof requestAnimationFrame < "u" && requestAnimationFrame(e);
}
function vw(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, r = -1, n = function i(a) {
    r < 0 && (r = a), a - r > t ? (e(a), r = -1) : Cq(i);
  };
  requestAnimationFrame(n);
}
function Sp(e) {
  "@babel/helpers - typeof";
  return Sp = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Sp(e);
}
function Mq(e) {
  return Rq(e) || jq(e) || kq(e) || Iq();
}
function Iq() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function kq(e, t) {
  if (e) {
    if (typeof e == "string") return gw(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return gw(e, t);
  }
}
function gw(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function jq(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function Rq(e) {
  if (Array.isArray(e)) return e;
}
function Nq() {
  var e = {}, t = function() {
    return null;
  }, r = !1, n = function i(a) {
    if (!r) {
      if (Array.isArray(a)) {
        if (!a.length)
          return;
        var u = a, c = Mq(u), l = c[0], f = c.slice(1);
        if (typeof l == "number") {
          vw(i.bind(null, f), l);
          return;
        }
        i(l), vw(i.bind(null, f));
        return;
      }
      Sp(a) === "object" && (e = a, t(e)), typeof a == "function" && a();
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
function Fu(e) {
  "@babel/helpers - typeof";
  return Fu = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Fu(e);
}
function yw(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function mw(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? yw(Object(r), !0).forEach(function(n) {
      LA(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : yw(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function LA(e, t, r) {
  return t = Dq(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Dq(e) {
  var t = Lq(e, "string");
  return Fu(t) === "symbol" ? t : String(t);
}
function Lq(e, t) {
  if (Fu(e) !== "object" || e === null) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Fu(n) !== "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Bq = function(t, r) {
  return [Object.keys(t), Object.keys(r)].reduce(function(n, i) {
    return n.filter(function(a) {
      return i.includes(a);
    });
  });
}, Fq = function(t) {
  return t;
}, Wq = function(t) {
  return t.replace(/([A-Z])/g, function(r) {
    return "-".concat(r.toLowerCase());
  });
}, hu = function(t, r) {
  return Object.keys(r).reduce(function(n, i) {
    return mw(mw({}, n), {}, LA({}, i, t(i, r[i])));
  }, {});
}, bw = function(t, r, n) {
  return t.map(function(i) {
    return "".concat(Wq(i), " ").concat(r, "ms ").concat(n);
  }).join(",");
}, zq = process.env.NODE_ENV !== "production", ol = function(t, r, n, i, a, u, c, l) {
  if (zq && typeof console < "u" && console.warn && (r === void 0 && console.warn("LogUtils requires an error message argument"), !t))
    if (r === void 0)
      console.warn("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
    else {
      var f = [n, i, a, u, c, l], d = 0;
      console.warn(r.replace(/%s/g, function() {
        return f[d++];
      }));
    }
};
function Uq(e, t) {
  return Kq(e) || Gq(e, t) || BA(e, t) || Hq();
}
function Hq() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Gq(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, i, a, u, c = [], l = !0, f = !1;
    try {
      if (a = (r = r.call(e)).next, t !== 0) for (; !(l = (n = a.call(r)).done) && (c.push(n.value), c.length !== t); l = !0) ;
    } catch (d) {
      f = !0, i = d;
    } finally {
      try {
        if (!l && r.return != null && (u = r.return(), Object(u) !== u)) return;
      } finally {
        if (f) throw i;
      }
    }
    return c;
  }
}
function Kq(e) {
  if (Array.isArray(e)) return e;
}
function qq(e) {
  return Xq(e) || Yq(e) || BA(e) || Vq();
}
function Vq() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function BA(e, t) {
  if (e) {
    if (typeof e == "string") return Pp(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Pp(e, t);
  }
}
function Yq(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function Xq(e) {
  if (Array.isArray(e)) return Pp(e);
}
function Pp(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
var ul = 1e-4, FA = function(t, r) {
  return [0, 3 * t, 3 * r - 6 * t, 3 * t - 3 * r + 1];
}, WA = function(t, r) {
  return t.map(function(n, i) {
    return n * Math.pow(r, i);
  }).reduce(function(n, i) {
    return n + i;
  });
}, xw = function(t, r) {
  return function(n) {
    var i = FA(t, r);
    return WA(i, n);
  };
}, Zq = function(t, r) {
  return function(n) {
    var i = FA(t, r), a = [].concat(qq(i.map(function(u, c) {
      return u * c;
    }).slice(1)), [0]);
    return WA(a, n);
  };
}, ww = function() {
  for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
    r[n] = arguments[n];
  var i = r[0], a = r[1], u = r[2], c = r[3];
  if (r.length === 1)
    switch (r[0]) {
      case "linear":
        i = 0, a = 0, u = 1, c = 1;
        break;
      case "ease":
        i = 0.25, a = 0.1, u = 0.25, c = 1;
        break;
      case "ease-in":
        i = 0.42, a = 0, u = 1, c = 1;
        break;
      case "ease-out":
        i = 0.42, a = 0, u = 0.58, c = 1;
        break;
      case "ease-in-out":
        i = 0, a = 0, u = 0.58, c = 1;
        break;
      default: {
        var l = r[0].split("(");
        if (l[0] === "cubic-bezier" && l[1].split(")")[0].split(",").length === 4) {
          var f = l[1].split(")")[0].split(",").map(function(w) {
            return parseFloat(w);
          }), d = Uq(f, 4);
          i = d[0], a = d[1], u = d[2], c = d[3];
        } else
          ol(!1, "[configBezier]: arguments should be one of oneOf 'linear', 'ease', 'ease-in', 'ease-out', 'ease-in-out','cubic-bezier(x1,y1,x2,y2)', instead received %s", r);
      }
    }
  ol([i, u, a, c].every(function(w) {
    return typeof w == "number" && w >= 0 && w <= 1;
  }), "[configBezier]: arguments should be x1, y1, x2, y2 of [0, 1] instead received %s", r);
  var h = xw(i, u), v = xw(a, c), g = Zq(i, u), x = function(A) {
    return A > 1 ? 1 : A < 0 ? 0 : A;
  }, y = function(A) {
    for (var O = A > 1 ? 1 : A, S = O, _ = 0; _ < 8; ++_) {
      var b = h(S) - O, E = g(S);
      if (Math.abs(b - O) < ul || E < ul)
        return v(S);
      S = x(S - b / E);
    }
    return v(S);
  };
  return y.isStepper = !1, y;
}, Jq = function() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, r = t.stiff, n = r === void 0 ? 100 : r, i = t.damping, a = i === void 0 ? 8 : i, u = t.dt, c = u === void 0 ? 17 : u, l = function(d, h, v) {
    var g = -(d - h) * n, x = v * a, y = v + (g - x) * c / 1e3, w = v * c / 1e3 + d;
    return Math.abs(w - h) < ul && Math.abs(y) < ul ? [h, 0] : [w, y];
  };
  return l.isStepper = !0, l.dt = c, l;
}, Qq = function() {
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
        return ww(i);
      case "spring":
        return Jq();
      default:
        if (i.split("(")[0] === "cubic-bezier")
          return ww(i);
        ol(!1, "[configEasing]: first argument should be one of 'ease', 'ease-in', 'ease-out', 'ease-in-out','cubic-bezier(x1,y1,x2,y2)', 'linear' and 'spring', instead  received %s", r);
    }
  return typeof i == "function" ? i : (ol(!1, "[configEasing]: first argument type should be function or string, instead received %s", r), null);
};
function Wu(e) {
  "@babel/helpers - typeof";
  return Wu = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Wu(e);
}
function _w(e) {
  return rV(e) || tV(e) || zA(e) || eV();
}
function eV() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function tV(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function rV(e) {
  if (Array.isArray(e)) return Tp(e);
}
function Ow(e, t) {
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
    t % 2 ? Ow(Object(r), !0).forEach(function(n) {
      Ep(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ow(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Ep(e, t, r) {
  return t = nV(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function nV(e) {
  var t = iV(e, "string");
  return Wu(t) === "symbol" ? t : String(t);
}
function iV(e, t) {
  if (Wu(e) !== "object" || e === null) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Wu(n) !== "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function aV(e, t) {
  return sV(e) || uV(e, t) || zA(e, t) || oV();
}
function oV() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function zA(e, t) {
  if (e) {
    if (typeof e == "string") return Tp(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Tp(e, t);
  }
}
function Tp(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function uV(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, i, a, u, c = [], l = !0, f = !1;
    try {
      if (a = (r = r.call(e)).next, t !== 0) for (; !(l = (n = a.call(r)).done) && (c.push(n.value), c.length !== t); l = !0) ;
    } catch (d) {
      f = !0, i = d;
    } finally {
      try {
        if (!l && r.return != null && (u = r.return(), Object(u) !== u)) return;
      } finally {
        if (f) throw i;
      }
    }
    return c;
  }
}
function sV(e) {
  if (Array.isArray(e)) return e;
}
var sl = function(t, r, n) {
  return t + (r - t) * n;
}, $p = function(t) {
  var r = t.from, n = t.to;
  return r !== n;
}, cV = function e(t, r, n) {
  var i = hu(function(a, u) {
    if ($p(u)) {
      var c = t(u.from, u.to, u.velocity), l = aV(c, 2), f = l[0], d = l[1];
      return Rt(Rt({}, u), {}, {
        from: f,
        velocity: d
      });
    }
    return u;
  }, r);
  return n < 1 ? hu(function(a, u) {
    return $p(u) ? Rt(Rt({}, u), {}, {
      velocity: sl(u.velocity, i[a].velocity, n),
      from: sl(u.from, i[a].from, n)
    }) : u;
  }, r) : e(t, i, n - 1);
};
const lV = function(e, t, r, n, i) {
  var a = Bq(e, t), u = a.reduce(function(w, A) {
    return Rt(Rt({}, w), {}, Ep({}, A, [e[A], t[A]]));
  }, {}), c = a.reduce(function(w, A) {
    return Rt(Rt({}, w), {}, Ep({}, A, {
      from: e[A],
      velocity: 0,
      to: t[A]
    }));
  }, {}), l = -1, f, d, h = function() {
    return null;
  }, v = function() {
    return hu(function(A, O) {
      return O.from;
    }, c);
  }, g = function() {
    return !Object.values(c).filter($p).length;
  }, x = function(A) {
    f || (f = A);
    var O = A - f, S = O / r.dt;
    c = cV(r, c, S), i(Rt(Rt(Rt({}, e), t), v())), f = A, g() || (l = requestAnimationFrame(h));
  }, y = function(A) {
    d || (d = A);
    var O = (A - d) / n, S = hu(function(b, E) {
      return sl.apply(void 0, _w(E).concat([r(O)]));
    }, u);
    if (i(Rt(Rt(Rt({}, e), t), S)), O < 1)
      l = requestAnimationFrame(h);
    else {
      var _ = hu(function(b, E) {
        return sl.apply(void 0, _w(E).concat([r(1)]));
      }, u);
      i(Rt(Rt(Rt({}, e), t), _));
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
var fV = ["children", "begin", "duration", "attributeName", "easing", "isActive", "steps", "from", "to", "canBegin", "onAnimationEnd", "shouldReAnimate", "onAnimationReStart"];
function dV(e, t) {
  if (e == null) return {};
  var r = hV(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function hV(e, t) {
  if (e == null) return {};
  var r = {}, n = Object.keys(e), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
function mh(e) {
  return yV(e) || gV(e) || vV(e) || pV();
}
function pV() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function vV(e, t) {
  if (e) {
    if (typeof e == "string") return Cp(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Cp(e, t);
  }
}
function gV(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function yV(e) {
  if (Array.isArray(e)) return Cp(e);
}
function Cp(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function Aw(e, t) {
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
    t % 2 ? Aw(Object(r), !0).forEach(function(n) {
      uu(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Aw(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function uu(e, t, r) {
  return t = UA(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function mV(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function bV(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, UA(n.key), n);
  }
}
function xV(e, t, r) {
  return t && bV(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function UA(e) {
  var t = wV(e, "string");
  return Va(t) === "symbol" ? t : String(t);
}
function wV(e, t) {
  if (Va(e) !== "object" || e === null) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Va(n) !== "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function _V(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Mp(e, t);
}
function Mp(e, t) {
  return Mp = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, Mp(e, t);
}
function OV(e) {
  var t = AV();
  return function() {
    var n = cl(e), i;
    if (t) {
      var a = cl(this).constructor;
      i = Reflect.construct(n, arguments, a);
    } else
      i = n.apply(this, arguments);
    return Ip(this, i);
  };
}
function Ip(e, t) {
  if (t && (Va(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return kp(e);
}
function kp(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function AV() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function cl(e) {
  return cl = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, cl(e);
}
var Xr = /* @__PURE__ */ function(e) {
  _V(r, e);
  var t = OV(r);
  function r(n, i) {
    var a;
    mV(this, r), a = t.call(this, n, i);
    var u = a.props, c = u.isActive, l = u.attributeName, f = u.from, d = u.to, h = u.steps, v = u.children, g = u.duration;
    if (a.handleStyleChange = a.handleStyleChange.bind(kp(a)), a.changeStyle = a.changeStyle.bind(kp(a)), !c || g <= 0)
      return a.state = {
        style: {}
      }, typeof v == "function" && (a.state = {
        style: d
      }), Ip(a);
    if (h && h.length)
      a.state = {
        style: h[0].style
      };
    else if (f) {
      if (typeof v == "function")
        return a.state = {
          style: f
        }, Ip(a);
      a.state = {
        style: l ? uu({}, l, f) : f
      };
    } else
      a.state = {
        style: {}
      };
    return a;
  }
  return xV(r, [{
    key: "componentDidMount",
    value: function() {
      var i = this.props, a = i.isActive, u = i.canBegin;
      this.mounted = !0, !(!a || !u) && this.runAnimation(this.props);
    }
  }, {
    key: "componentDidUpdate",
    value: function(i) {
      var a = this.props, u = a.isActive, c = a.canBegin, l = a.attributeName, f = a.shouldReAnimate, d = a.to, h = a.from, v = this.state.style;
      if (c) {
        if (!u) {
          var g = {
            style: l ? uu({}, l, d) : d
          };
          this.state && v && (l && v[l] !== d || !l && v !== d) && this.setState(g);
          return;
        }
        if (!($q(i.to, d) && i.canBegin && i.isActive)) {
          var x = !i.canBegin || !i.isActive;
          this.manager && this.manager.stop(), this.stopJSAnimation && this.stopJSAnimation();
          var y = x || f ? h : i.to;
          if (this.state && v) {
            var w = {
              style: l ? uu({}, l, y) : y
            };
            (l && v[l] !== y || !l && v !== y) && this.setState(w);
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
      var a = this, u = i.from, c = i.to, l = i.duration, f = i.easing, d = i.begin, h = i.onAnimationEnd, v = i.onAnimationStart, g = lV(u, c, Qq(f), l, this.changeStyle), x = function() {
        a.stopJSAnimation = g();
      };
      this.manager.start([v, d, x, l, h]);
    }
  }, {
    key: "runStepAnimation",
    value: function(i) {
      var a = this, u = i.steps, c = i.begin, l = i.onAnimationStart, f = u[0], d = f.style, h = f.duration, v = h === void 0 ? 0 : h, g = function(y, w, A) {
        if (A === 0)
          return y;
        var O = w.duration, S = w.easing, _ = S === void 0 ? "ease" : S, b = w.style, E = w.properties, C = w.onAnimationEnd, M = A > 0 ? u[A - 1] : w, F = E || Object.keys(b);
        if (typeof _ == "function" || _ === "spring")
          return [].concat(mh(y), [a.runJSAnimation.bind(a, {
            from: M.style,
            to: b,
            duration: O,
            easing: _
          }), O]);
        var D = bw(F, O, _), B = Ur(Ur(Ur({}, M.style), b), {}, {
          transition: D
        });
        return [].concat(mh(y), [B, O, C]).filter(Fq);
      };
      return this.manager.start([l].concat(mh(u.reduce(g, [d, Math.max(v, c)])), [i.onAnimationEnd]));
    }
  }, {
    key: "runAnimation",
    value: function(i) {
      this.manager || (this.manager = Nq());
      var a = i.begin, u = i.duration, c = i.attributeName, l = i.to, f = i.easing, d = i.onAnimationStart, h = i.onAnimationEnd, v = i.steps, g = i.children, x = this.manager;
      if (this.unSubscribe = x.subscribe(this.handleStyleChange), typeof f == "function" || typeof g == "function" || f === "spring") {
        this.runJSAnimation(i);
        return;
      }
      if (v.length > 1) {
        this.runStepAnimation(i);
        return;
      }
      var y = c ? uu({}, c, l) : l, w = bw(Object.keys(y), u, f);
      x.start([d, a, Ur(Ur({}, y), {}, {
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
      var c = i.isActive;
      i.steps, i.from, i.to, i.canBegin, i.onAnimationEnd, i.shouldReAnimate, i.onAnimationReStart;
      var l = dV(i, fV), f = Yi.count(a), d = this.state.style;
      if (typeof a == "function")
        return a(d);
      if (!c || f === 0 || u <= 0)
        return a;
      var h = function(g) {
        var x = g.props, y = x.style, w = y === void 0 ? {} : y, A = x.className, O = /* @__PURE__ */ At(g, Ur(Ur({}, l), {}, {
          style: Ur(Ur({}, w), d),
          className: A
        }));
        return O;
      };
      return f === 1 ? h(Yi.only(a)) : /* @__PURE__ */ k.createElement("div", null, Yi.map(a, function(v) {
        return h(v);
      }));
    }
  }]), r;
}(Nr);
Xr.displayName = "Animate";
Xr.defaultProps = {
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
Xr.propTypes = {
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
function zu(e) {
  "@babel/helpers - typeof";
  return zu = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, zu(e);
}
function ll() {
  return ll = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, ll.apply(this, arguments);
}
function SV(e, t) {
  return $V(e) || TV(e, t) || EV(e, t) || PV();
}
function PV() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function EV(e, t) {
  if (e) {
    if (typeof e == "string") return Sw(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Sw(e, t);
  }
}
function Sw(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function TV(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, i, a, u, c = [], l = !0, f = !1;
    try {
      if (a = (r = r.call(e)).next, t !== 0) for (; !(l = (n = a.call(r)).done) && (c.push(n.value), c.length !== t); l = !0) ;
    } catch (d) {
      f = !0, i = d;
    } finally {
      try {
        if (!l && r.return != null && (u = r.return(), Object(u) !== u)) return;
      } finally {
        if (f) throw i;
      }
    }
    return c;
  }
}
function $V(e) {
  if (Array.isArray(e)) return e;
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
function Ew(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Pw(Object(r), !0).forEach(function(n) {
      CV(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Pw(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function CV(e, t, r) {
  return t = MV(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function MV(e) {
  var t = IV(e, "string");
  return zu(t) == "symbol" ? t : String(t);
}
function IV(e, t) {
  if (zu(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (zu(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Tw = function(t, r, n, i, a) {
  var u = Math.min(Math.abs(n) / 2, Math.abs(i) / 2), c = i >= 0 ? 1 : -1, l = n >= 0 ? 1 : -1, f = i >= 0 && n >= 0 || i < 0 && n < 0 ? 1 : 0, d;
  if (u > 0 && a instanceof Array) {
    for (var h = [0, 0, 0, 0], v = 0, g = 4; v < g; v++)
      h[v] = a[v] > u ? u : a[v];
    d = "M".concat(t, ",").concat(r + c * h[0]), h[0] > 0 && (d += "A ".concat(h[0], ",").concat(h[0], ",0,0,").concat(f, ",").concat(t + l * h[0], ",").concat(r)), d += "L ".concat(t + n - l * h[1], ",").concat(r), h[1] > 0 && (d += "A ".concat(h[1], ",").concat(h[1], ",0,0,").concat(f, `,
        `).concat(t + n, ",").concat(r + c * h[1])), d += "L ".concat(t + n, ",").concat(r + i - c * h[2]), h[2] > 0 && (d += "A ".concat(h[2], ",").concat(h[2], ",0,0,").concat(f, `,
        `).concat(t + n - l * h[2], ",").concat(r + i)), d += "L ".concat(t + l * h[3], ",").concat(r + i), h[3] > 0 && (d += "A ".concat(h[3], ",").concat(h[3], ",0,0,").concat(f, `,
        `).concat(t, ",").concat(r + i - c * h[3])), d += "Z";
  } else if (u > 0 && a === +a && a > 0) {
    var x = Math.min(u, a);
    d = "M ".concat(t, ",").concat(r + c * x, `
            A `).concat(x, ",").concat(x, ",0,0,").concat(f, ",").concat(t + l * x, ",").concat(r, `
            L `).concat(t + n - l * x, ",").concat(r, `
            A `).concat(x, ",").concat(x, ",0,0,").concat(f, ",").concat(t + n, ",").concat(r + c * x, `
            L `).concat(t + n, ",").concat(r + i - c * x, `
            A `).concat(x, ",").concat(x, ",0,0,").concat(f, ",").concat(t + n - l * x, ",").concat(r + i, `
            L `).concat(t + l * x, ",").concat(r + i, `
            A `).concat(x, ",").concat(x, ",0,0,").concat(f, ",").concat(t, ",").concat(r + i - c * x, " Z");
  } else
    d = "M ".concat(t, ",").concat(r, " h ").concat(n, " v ").concat(i, " h ").concat(-n, " Z");
  return d;
}, kV = function(t, r) {
  if (!t || !r)
    return !1;
  var n = t.x, i = t.y, a = r.x, u = r.y, c = r.width, l = r.height;
  if (Math.abs(c) > 0 && Math.abs(l) > 0) {
    var f = Math.min(a, a + c), d = Math.max(a, a + c), h = Math.min(u, u + l), v = Math.max(u, u + l);
    return n >= f && n <= d && i >= h && i <= v;
  }
  return !1;
}, jV = {
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
}, hg = function(t) {
  var r = Ew(Ew({}, jV), t), n = Rn(), i = ln(-1), a = SV(i, 2), u = a[0], c = a[1];
  zn(function() {
    if (n.current && n.current.getTotalLength)
      try {
        var _ = n.current.getTotalLength();
        _ && c(_);
      } catch {
      }
  }, []);
  var l = r.x, f = r.y, d = r.width, h = r.height, v = r.radius, g = r.className, x = r.animationEasing, y = r.animationDuration, w = r.animationBegin, A = r.isAnimationActive, O = r.isUpdateAnimationActive;
  if (l !== +l || f !== +f || d !== +d || h !== +h || d === 0 || h === 0)
    return null;
  var S = Me("recharts-rectangle", g);
  return O ? /* @__PURE__ */ k.createElement(Xr, {
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
    var b = _.width, E = _.height, C = _.x, M = _.y;
    return /* @__PURE__ */ k.createElement(Xr, {
      canBegin: u > 0,
      from: "0px ".concat(u === -1 ? 1 : u, "px"),
      to: "".concat(u, "px 0px"),
      attributeName: "strokeDasharray",
      begin: w,
      duration: y,
      isActive: A,
      easing: x
    }, /* @__PURE__ */ k.createElement("path", ll({}, me(r, !0), {
      className: S,
      d: Tw(C, M, b, E, v),
      ref: n
    })));
  }) : /* @__PURE__ */ k.createElement("path", ll({}, me(r, !0), {
    className: S,
    d: Tw(l, f, d, h, v)
  }));
}, RV = ["points", "className", "baseLinePoints", "connectNulls"];
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
function NV(e, t) {
  if (e == null) return {};
  var r = DV(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function DV(e, t) {
  if (e == null) return {};
  var r = {}, n = Object.keys(e), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
function $w(e) {
  return WV(e) || FV(e) || BV(e) || LV();
}
function LV() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function BV(e, t) {
  if (e) {
    if (typeof e == "string") return jp(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return jp(e, t);
  }
}
function FV(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function WV(e) {
  if (Array.isArray(e)) return jp(e);
}
function jp(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
var Cw = function(t) {
  return t && t.x === +t.x && t.y === +t.y;
}, zV = function() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], r = [[]];
  return t.forEach(function(n) {
    Cw(n) ? r[r.length - 1].push(n) : r[r.length - 1].length > 0 && r.push([]);
  }), Cw(t[0]) && r[r.length - 1].push(t[0]), r[r.length - 1].length <= 0 && (r = r.slice(0, -1)), r;
}, pu = function(t, r) {
  var n = zV(t);
  r && (n = [n.reduce(function(a, u) {
    return [].concat($w(a), $w(u));
  }, [])]);
  var i = n.map(function(a) {
    return a.reduce(function(u, c, l) {
      return "".concat(u).concat(l === 0 ? "M" : "L").concat(c.x, ",").concat(c.y);
    }, "");
  }).join("");
  return n.length === 1 ? "".concat(i, "Z") : i;
}, UV = function(t, r, n) {
  var i = pu(t, n);
  return "".concat(i.slice(-1) === "Z" ? i.slice(0, -1) : i, "L").concat(pu(r.reverse(), n).slice(1));
}, HV = function(t) {
  var r = t.points, n = t.className, i = t.baseLinePoints, a = t.connectNulls, u = NV(t, RV);
  if (!r || !r.length)
    return null;
  var c = Me("recharts-polygon", n);
  if (i && i.length) {
    var l = u.stroke && u.stroke !== "none", f = UV(r, i, a);
    return /* @__PURE__ */ k.createElement("g", {
      className: c
    }, /* @__PURE__ */ k.createElement("path", Ma({}, me(u, !0), {
      fill: f.slice(-1) === "Z" ? u.fill : "none",
      stroke: "none",
      d: f
    })), l ? /* @__PURE__ */ k.createElement("path", Ma({}, me(u, !0), {
      fill: "none",
      d: pu(r, a)
    })) : null, l ? /* @__PURE__ */ k.createElement("path", Ma({}, me(u, !0), {
      fill: "none",
      d: pu(i, a)
    })) : null);
  }
  var d = pu(r, a);
  return /* @__PURE__ */ k.createElement("path", Ma({}, me(u, !0), {
    fill: d.slice(-1) === "Z" ? u.fill : "none",
    className: c,
    d
  }));
};
function Rp() {
  return Rp = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Rp.apply(this, arguments);
}
var ds = function(t) {
  var r = t.cx, n = t.cy, i = t.r, a = t.className, u = Me("recharts-dot", a);
  return r === +r && n === +n && i === +i ? /* @__PURE__ */ k.createElement("circle", Rp({}, me(t, !1), Cc(t), {
    className: u,
    cx: r,
    cy: n,
    r: i
  })) : null;
};
function Uu(e) {
  "@babel/helpers - typeof";
  return Uu = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Uu(e);
}
var GV = ["x", "y", "top", "left", "width", "height", "className"];
function Np() {
  return Np = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Np.apply(this, arguments);
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
function KV(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Mw(Object(r), !0).forEach(function(n) {
      qV(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Mw(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function qV(e, t, r) {
  return t = VV(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function VV(e) {
  var t = YV(e, "string");
  return Uu(t) == "symbol" ? t : String(t);
}
function YV(e, t) {
  if (Uu(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Uu(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function XV(e, t) {
  if (e == null) return {};
  var r = ZV(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function ZV(e, t) {
  if (e == null) return {};
  var r = {}, n = Object.keys(e), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
var JV = function(t, r, n, i, a, u) {
  return "M".concat(t, ",").concat(a, "v").concat(i, "M").concat(u, ",").concat(r, "h").concat(n);
}, QV = function(t) {
  var r = t.x, n = r === void 0 ? 0 : r, i = t.y, a = i === void 0 ? 0 : i, u = t.top, c = u === void 0 ? 0 : u, l = t.left, f = l === void 0 ? 0 : l, d = t.width, h = d === void 0 ? 0 : d, v = t.height, g = v === void 0 ? 0 : v, x = t.className, y = XV(t, GV), w = KV({
    x: n,
    y: a,
    top: c,
    left: f,
    width: h,
    height: g
  }, y);
  return !oe(n) || !oe(a) || !oe(h) || !oe(g) || !oe(c) || !oe(f) ? null : /* @__PURE__ */ k.createElement("path", Np({}, me(w, !0), {
    className: Me("recharts-cross", x),
    d: JV(n, a, h, g, c, f)
  }));
}, eY = Zl, tY = iA, rY = pn;
function nY(e, t) {
  return e && e.length ? eY(e, rY(t), tY) : void 0;
}
var iY = nY;
const aY = /* @__PURE__ */ Je(iY);
var oY = Zl, uY = pn, sY = aA;
function cY(e, t) {
  return e && e.length ? oY(e, uY(t), sY) : void 0;
}
var lY = cY;
const fY = /* @__PURE__ */ Je(lY);
var dY = ["cx", "cy", "angle", "ticks", "axisLine"], hY = ["ticks", "tick", "angle", "tickFormatter", "stroke"];
function Ya(e) {
  "@babel/helpers - typeof";
  return Ya = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ya(e);
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
function Iw(e, t) {
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
    t % 2 ? Iw(Object(r), !0).forEach(function(n) {
      tf(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Iw(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function kw(e, t) {
  if (e == null) return {};
  var r = pY(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function pY(e, t) {
  if (e == null) return {};
  var r = {}, n = Object.keys(e), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
function vY(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function jw(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, GA(n.key), n);
  }
}
function gY(e, t, r) {
  return t && jw(e.prototype, t), r && jw(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function yY(e, t, r) {
  return t = fl(t), mY(e, HA() ? Reflect.construct(t, r || [], fl(e).constructor) : t.apply(e, r));
}
function mY(e, t) {
  if (t && (Ya(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return bY(e);
}
function bY(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function HA() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (HA = function() {
    return !!e;
  })();
}
function fl(e) {
  return fl = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, fl(e);
}
function xY(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Dp(e, t);
}
function Dp(e, t) {
  return Dp = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, Dp(e, t);
}
function tf(e, t, r) {
  return t = GA(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function GA(e) {
  var t = wY(e, "string");
  return Ya(t) == "symbol" ? t : String(t);
}
function wY(e, t) {
  if (Ya(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Ya(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var rf = /* @__PURE__ */ function(e) {
  xY(t, e);
  function t() {
    return vY(this, t), yY(this, t, arguments);
  }
  return gY(t, [{
    key: "getTickValueCoord",
    value: (
      /**
       * Calculate the coordinate of tick
       * @param  {Number} coordinate The radius of tick
       * @return {Object} (x, y)
       */
      function(n) {
        var i = n.coordinate, a = this.props, u = a.angle, c = a.cx, l = a.cy;
        return it(c, l, i, u);
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
      var n = this.props, i = n.cx, a = n.cy, u = n.angle, c = n.ticks, l = aY(c, function(d) {
        return d.coordinate || 0;
      }), f = fY(c, function(d) {
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
      var n = this.props, i = n.cx, a = n.cy, u = n.angle, c = n.ticks, l = n.axisLine, f = kw(n, dY), d = c.reduce(function(x, y) {
        return [Math.min(x[0], y.coordinate), Math.max(x[1], y.coordinate)];
      }, [1 / 0, -1 / 0]), h = it(i, a, d[0], u), v = it(i, a, d[1], u), g = Li(Li(Li({}, me(f, !1)), {}, {
        fill: "none"
      }, me(l, !1)), {}, {
        x1: h.x,
        y1: h.y,
        x2: v.x,
        y2: v.y
      });
      return /* @__PURE__ */ k.createElement("line", vu({
        className: "recharts-polar-radius-axis-line"
      }, g));
    }
  }, {
    key: "renderTicks",
    value: function() {
      var n = this, i = this.props, a = i.ticks, u = i.tick, c = i.angle, l = i.tickFormatter, f = i.stroke, d = kw(i, hY), h = this.getTickTextAnchor(), v = me(d, !1), g = me(u, !1), x = a.map(function(y, w) {
        var A = n.getTickValueCoord(y), O = Li(Li(Li(Li({
          textAnchor: h,
          transform: "rotate(".concat(90 - c, ", ").concat(A.x, ", ").concat(A.y, ")")
        }, v), {}, {
          stroke: "none",
          fill: f
        }, g), {}, {
          index: w
        }, A), {}, {
          payload: y
        });
        return /* @__PURE__ */ k.createElement(Le, vu({
          className: Me("recharts-polar-radius-axis-tick", CA(u)),
          key: "tick-".concat(y.coordinate)
        }, Qi(n.props, y, w)), t.renderTickItem(u, O, l ? l(y.value, w) : y.value));
      });
      return /* @__PURE__ */ k.createElement(Le, {
        className: "recharts-polar-radius-axis-ticks"
      }, x);
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
      return /* @__PURE__ */ k.isValidElement(n) ? u = /* @__PURE__ */ k.cloneElement(n, i) : Pe(n) ? u = n(i) : u = /* @__PURE__ */ k.createElement(gi, vu({}, i, {
        className: "recharts-polar-radius-axis-tick-value"
      }), a), u;
    }
  }]), t;
}(Nr);
tf(rf, "displayName", "PolarRadiusAxis");
tf(rf, "axisType", "radiusAxis");
tf(rf, "defaultProps", {
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
function Ui() {
  return Ui = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Ui.apply(this, arguments);
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
function Bi(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Rw(Object(r), !0).forEach(function(n) {
      nf(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Rw(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function _Y(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Nw(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, qA(n.key), n);
  }
}
function OY(e, t, r) {
  return t && Nw(e.prototype, t), r && Nw(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function AY(e, t, r) {
  return t = dl(t), SY(e, KA() ? Reflect.construct(t, r || [], dl(e).constructor) : t.apply(e, r));
}
function SY(e, t) {
  if (t && (Xa(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return PY(e);
}
function PY(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function KA() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (KA = function() {
    return !!e;
  })();
}
function dl(e) {
  return dl = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, dl(e);
}
function EY(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Lp(e, t);
}
function Lp(e, t) {
  return Lp = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, Lp(e, t);
}
function nf(e, t, r) {
  return t = qA(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function qA(e) {
  var t = TY(e, "string");
  return Xa(t) == "symbol" ? t : String(t);
}
function TY(e, t) {
  if (Xa(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Xa(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var $Y = Math.PI / 180, Dw = 1e-5, af = /* @__PURE__ */ function(e) {
  EY(t, e);
  function t() {
    return _Y(this, t), AY(this, t, arguments);
  }
  return OY(t, [{
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
        var i = this.props, a = i.cx, u = i.cy, c = i.radius, l = i.orientation, f = i.tickSize, d = f || 8, h = it(a, u, c, n.coordinate), v = it(a, u, c + (l === "inner" ? -1 : 1) * d, n.coordinate);
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
      var i = this.props.orientation, a = Math.cos(-n.coordinate * $Y), u;
      return a > Dw ? u = i === "outer" ? "start" : "end" : a < -Dw ? u = i === "outer" ? "end" : "start" : u = "middle", u;
    }
  }, {
    key: "renderAxisLine",
    value: function() {
      var n = this.props, i = n.cx, a = n.cy, u = n.radius, c = n.axisLine, l = n.axisLineType, f = Bi(Bi({}, me(this.props, !1)), {}, {
        fill: "none"
      }, me(c, !1));
      if (l === "circle")
        return /* @__PURE__ */ k.createElement(ds, Ui({
          className: "recharts-polar-angle-axis-line"
        }, f, {
          cx: i,
          cy: a,
          r: u
        }));
      var d = this.props.ticks, h = d.map(function(v) {
        return it(i, a, u, v.coordinate);
      });
      return /* @__PURE__ */ k.createElement(HV, Ui({
        className: "recharts-polar-angle-axis-line"
      }, f, {
        points: h
      }));
    }
  }, {
    key: "renderTicks",
    value: function() {
      var n = this, i = this.props, a = i.ticks, u = i.tick, c = i.tickLine, l = i.tickFormatter, f = i.stroke, d = me(this.props, !1), h = me(u, !1), v = Bi(Bi({}, d), {}, {
        fill: "none"
      }, me(c, !1)), g = a.map(function(x, y) {
        var w = n.getTickLineCoord(x), A = n.getTickTextAnchor(x), O = Bi(Bi(Bi({
          textAnchor: A
        }, d), {}, {
          stroke: "none",
          fill: f
        }, h), {}, {
          index: y,
          payload: x,
          x: w.x2,
          y: w.y2
        });
        return /* @__PURE__ */ k.createElement(Le, Ui({
          className: Me("recharts-polar-angle-axis-tick", CA(u)),
          key: "tick-".concat(x.coordinate)
        }, Qi(n.props, x, y)), c && /* @__PURE__ */ k.createElement("line", Ui({
          className: "recharts-polar-angle-axis-tick-line"
        }, v, w)), u && t.renderTickItem(u, O, l ? l(x.value, y) : x.value));
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
      return /* @__PURE__ */ k.isValidElement(n) ? u = /* @__PURE__ */ k.cloneElement(n, i) : Pe(n) ? u = n(i) : u = /* @__PURE__ */ k.createElement(gi, Ui({}, i, {
        className: "recharts-polar-angle-axis-tick-value"
      }), a), u;
    }
  }]), t;
}(Nr);
nf(af, "displayName", "PolarAngleAxis");
nf(af, "axisType", "angleAxis");
nf(af, "defaultProps", {
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
var CY = Q_, MY = CY(Object.getPrototypeOf, Object), IY = MY, kY = Un, jY = IY, RY = Hn, NY = "[object Object]", DY = Function.prototype, LY = Object.prototype, VA = DY.toString, BY = LY.hasOwnProperty, FY = VA.call(Object);
function WY(e) {
  if (!RY(e) || kY(e) != NY)
    return !1;
  var t = jY(e);
  if (t === null)
    return !0;
  var r = BY.call(t, "constructor") && t.constructor;
  return typeof r == "function" && r instanceof r && VA.call(r) == FY;
}
var zY = WY;
const UY = /* @__PURE__ */ Je(zY);
var HY = Un, GY = Hn, KY = "[object Boolean]";
function qY(e) {
  return e === !0 || e === !1 || GY(e) && HY(e) == KY;
}
var VY = qY;
const YY = /* @__PURE__ */ Je(VY);
function Hu(e) {
  "@babel/helpers - typeof";
  return Hu = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Hu(e);
}
function hl() {
  return hl = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, hl.apply(this, arguments);
}
function XY(e, t) {
  return eX(e) || QY(e, t) || JY(e, t) || ZY();
}
function ZY() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function JY(e, t) {
  if (e) {
    if (typeof e == "string") return Lw(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Lw(e, t);
  }
}
function Lw(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function QY(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, i, a, u, c = [], l = !0, f = !1;
    try {
      if (a = (r = r.call(e)).next, t !== 0) for (; !(l = (n = a.call(r)).done) && (c.push(n.value), c.length !== t); l = !0) ;
    } catch (d) {
      f = !0, i = d;
    } finally {
      try {
        if (!l && r.return != null && (u = r.return(), Object(u) !== u)) return;
      } finally {
        if (f) throw i;
      }
    }
    return c;
  }
}
function eX(e) {
  if (Array.isArray(e)) return e;
}
function Bw(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Fw(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Bw(Object(r), !0).forEach(function(n) {
      tX(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Bw(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function tX(e, t, r) {
  return t = rX(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function rX(e) {
  var t = nX(e, "string");
  return Hu(t) == "symbol" ? t : String(t);
}
function nX(e, t) {
  if (Hu(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Hu(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Ww = function(t, r, n, i, a) {
  var u = n - i, c;
  return c = "M ".concat(t, ",").concat(r), c += "L ".concat(t + n, ",").concat(r), c += "L ".concat(t + n - u / 2, ",").concat(r + a), c += "L ".concat(t + n - u / 2 - i, ",").concat(r + a), c += "L ".concat(t, ",").concat(r, " Z"), c;
}, iX = {
  x: 0,
  y: 0,
  upperWidth: 0,
  lowerWidth: 0,
  height: 0,
  isUpdateAnimationActive: !1,
  animationBegin: 0,
  animationDuration: 1500,
  animationEasing: "ease"
}, aX = function(t) {
  var r = Fw(Fw({}, iX), t), n = Rn(), i = ln(-1), a = XY(i, 2), u = a[0], c = a[1];
  zn(function() {
    if (n.current && n.current.getTotalLength)
      try {
        var S = n.current.getTotalLength();
        S && c(S);
      } catch {
      }
  }, []);
  var l = r.x, f = r.y, d = r.upperWidth, h = r.lowerWidth, v = r.height, g = r.className, x = r.animationEasing, y = r.animationDuration, w = r.animationBegin, A = r.isUpdateAnimationActive;
  if (l !== +l || f !== +f || d !== +d || h !== +h || v !== +v || d === 0 && h === 0 || v === 0)
    return null;
  var O = Me("recharts-trapezoid", g);
  return A ? /* @__PURE__ */ k.createElement(Xr, {
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
    isActive: A
  }, function(S) {
    var _ = S.upperWidth, b = S.lowerWidth, E = S.height, C = S.x, M = S.y;
    return /* @__PURE__ */ k.createElement(Xr, {
      canBegin: u > 0,
      from: "0px ".concat(u === -1 ? 1 : u, "px"),
      to: "".concat(u, "px 0px"),
      attributeName: "strokeDasharray",
      begin: w,
      duration: y,
      easing: x
    }, /* @__PURE__ */ k.createElement("path", hl({}, me(r, !0), {
      className: O,
      d: Ww(C, M, _, b, E),
      ref: n
    })));
  }) : /* @__PURE__ */ k.createElement("g", null, /* @__PURE__ */ k.createElement("path", hl({}, me(r, !0), {
    className: O,
    d: Ww(l, f, d, h, v)
  })));
}, oX = ["option", "shapeType", "propTransformer", "activeClassName", "isActive"];
function Gu(e) {
  "@babel/helpers - typeof";
  return Gu = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Gu(e);
}
function uX(e, t) {
  if (e == null) return {};
  var r = sX(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function sX(e, t) {
  if (e == null) return {};
  var r = {}, n = Object.keys(e), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
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
function pl(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? zw(Object(r), !0).forEach(function(n) {
      cX(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : zw(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function cX(e, t, r) {
  return t = lX(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function lX(e) {
  var t = fX(e, "string");
  return Gu(t) == "symbol" ? t : String(t);
}
function fX(e, t) {
  if (Gu(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Gu(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function dX(e, t) {
  return pl(pl({}, t), e);
}
function hX(e, t) {
  return e === "symbols";
}
function Uw(e) {
  var t = e.shapeType, r = e.elementProps;
  switch (t) {
    case "rectangle":
      return /* @__PURE__ */ k.createElement(hg, r);
    case "trapezoid":
      return /* @__PURE__ */ k.createElement(aX, r);
    case "sector":
      return /* @__PURE__ */ k.createElement(kA, r);
    case "symbols":
      if (hX(t))
        return /* @__PURE__ */ k.createElement(Cv, r);
      break;
    default:
      return null;
  }
}
function pX(e) {
  return /* @__PURE__ */ qr(e) ? e.props : e;
}
function YA(e) {
  var t = e.option, r = e.shapeType, n = e.propTransformer, i = n === void 0 ? dX : n, a = e.activeClassName, u = a === void 0 ? "recharts-active-shape" : a, c = e.isActive, l = uX(e, oX), f;
  if (/* @__PURE__ */ qr(t))
    f = /* @__PURE__ */ At(t, pl(pl({}, l), pX(t)));
  else if (Pe(t))
    f = t(l);
  else if (UY(t) && !YY(t)) {
    var d = i(t, l);
    f = /* @__PURE__ */ k.createElement(Uw, {
      shapeType: r,
      elementProps: d
    });
  } else {
    var h = l;
    f = /* @__PURE__ */ k.createElement(Uw, {
      shapeType: r,
      elementProps: h
    });
  }
  return c ? /* @__PURE__ */ k.createElement(Le, {
    className: u
  }, f) : f;
}
function of(e, t) {
  return t != null && "trapezoids" in e.props;
}
function uf(e, t) {
  return t != null && "sectors" in e.props;
}
function Ku(e, t) {
  return t != null && "points" in e.props;
}
function vX(e, t) {
  var r, n, i = e.x === (t == null || (r = t.labelViewBox) === null || r === void 0 ? void 0 : r.x) || e.x === t.x, a = e.y === (t == null || (n = t.labelViewBox) === null || n === void 0 ? void 0 : n.y) || e.y === t.y;
  return i && a;
}
function gX(e, t) {
  var r = e.endAngle === t.endAngle, n = e.startAngle === t.startAngle;
  return r && n;
}
function yX(e, t) {
  var r = e.x === t.x, n = e.y === t.y, i = e.z === t.z;
  return r && n && i;
}
function mX(e, t) {
  var r;
  return of(e, t) ? r = vX : uf(e, t) ? r = gX : Ku(e, t) && (r = yX), r;
}
function bX(e, t) {
  var r;
  return of(e, t) ? r = "trapezoids" : uf(e, t) ? r = "sectors" : Ku(e, t) && (r = "points"), r;
}
function xX(e, t) {
  if (of(e, t)) {
    var r;
    return (r = t.tooltipPayload) === null || r === void 0 || (r = r[0]) === null || r === void 0 || (r = r.payload) === null || r === void 0 ? void 0 : r.payload;
  }
  if (uf(e, t)) {
    var n;
    return (n = t.tooltipPayload) === null || n === void 0 || (n = n[0]) === null || n === void 0 || (n = n.payload) === null || n === void 0 ? void 0 : n.payload;
  }
  return Ku(e, t) ? t.payload : {};
}
function wX(e) {
  var t = e.activeTooltipItem, r = e.graphicalItem, n = e.itemData, i = bX(r, t), a = xX(r, t), u = n.filter(function(l, f) {
    var d = ea(a, l), h = r.props[i].filter(function(x) {
      var y = mX(r, t);
      return y(x, t);
    }), v = r.props[i].indexOf(h[h.length - 1]), g = f === v;
    return d && g;
  }), c = n.indexOf(u[u.length - 1]);
  return c;
}
var Ec;
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
function Hw(e, t) {
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
    t % 2 ? Hw(Object(r), !0).forEach(function(n) {
      Mr(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Hw(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function _X(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Gw(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, ZA(n.key), n);
  }
}
function OX(e, t, r) {
  return t && Gw(e.prototype, t), r && Gw(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function AX(e, t, r) {
  return t = vl(t), SX(e, XA() ? Reflect.construct(t, r || [], vl(e).constructor) : t.apply(e, r));
}
function SX(e, t) {
  if (t && (Za(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return $a(e);
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
function vl(e) {
  return vl = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, vl(e);
}
function $a(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function PX(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Bp(e, t);
}
function Bp(e, t) {
  return Bp = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, Bp(e, t);
}
function Mr(e, t, r) {
  return t = ZA(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function ZA(e) {
  var t = EX(e, "string");
  return Za(t) == "symbol" ? t : String(t);
}
function EX(e, t) {
  if (Za(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Za(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Kn = /* @__PURE__ */ function(e) {
  PX(t, e);
  function t(r) {
    var n;
    return _X(this, t), n = AX(this, t, [r]), Mr($a(n), "pieRef", null), Mr($a(n), "sectorRefs", []), Mr($a(n), "id", oa("recharts-pie-")), Mr($a(n), "handleAnimationEnd", function() {
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
  return OX(t, [{
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
      var a = this.props, u = a.label, c = a.labelLine, l = a.dataKey, f = a.valueKey, d = me(this.props, !1), h = me(u, !1), v = me(c, !1), g = u && u.offsetRadius || 20, x = n.map(function(y, w) {
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
        }), b = l;
        return Te(l) && Te(f) ? b = "value" : Te(l) && (b = f), // eslint-disable-next-line react/no-array-index-key
        /* @__PURE__ */ k.createElement(Le, {
          key: "label-".concat(y.startAngle, "-").concat(y.endAngle, "-").concat(y.midAngle, "-").concat(w)
        }, c && t.renderLabelLineItem(c, _), t.renderLabelItem(u, S, bt(y, b)));
      });
      return /* @__PURE__ */ k.createElement(Le, {
        className: "recharts-pie-labels"
      }, x);
    }
  }, {
    key: "renderSectorsStatically",
    value: function(n) {
      var i = this, a = this.props, u = a.activeShape, c = a.blendStroke, l = a.inactiveShape;
      return n.map(function(f, d) {
        if ((f == null ? void 0 : f.startAngle) === 0 && (f == null ? void 0 : f.endAngle) === 0 && n.length !== 1) return null;
        var h = i.isActiveIndex(d), v = l && i.hasActiveIndex() ? l : null, g = h ? u : v, x = dt(dt({}, f), {}, {
          stroke: c ? f.fill : f.stroke,
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
        }), /* @__PURE__ */ k.createElement(YA, Ia({
          option: g,
          isActive: h,
          shapeType: "sector"
        }, x)));
      });
    }
  }, {
    key: "renderSectorsWithAnimation",
    value: function() {
      var n = this, i = this.props, a = i.sectors, u = i.isAnimationActive, c = i.animationBegin, l = i.animationDuration, f = i.animationEasing, d = i.animationId, h = this.state, v = h.prevSectors, g = h.prevIsAnimationActive;
      return /* @__PURE__ */ k.createElement(Xr, {
        begin: c,
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
        var y = x.t, w = [], A = a && a[0], O = A.startAngle;
        return a.forEach(function(S, _) {
          var b = v && v[_], E = _ > 0 ? gr(S, "paddingAngle", 0) : 0;
          if (b) {
            var C = St(b.endAngle - b.startAngle, S.endAngle - S.startAngle), M = dt(dt({}, S), {}, {
              startAngle: O + E,
              endAngle: O + C(y) + E
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
              var c = --i.state.sectorToFocus < 0 ? i.sectorRefs.length - 1 : i.state.sectorToFocus % i.sectorRefs.length;
              i.sectorRefs[c].focus(), i.setState({
                sectorToFocus: c
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
      var n = this, i = this.props, a = i.hide, u = i.sectors, c = i.className, l = i.label, f = i.cx, d = i.cy, h = i.innerRadius, v = i.outerRadius, g = i.isAnimationActive, x = this.state.isAnimationFinished;
      if (a || !u || !u.length || !oe(f) || !oe(d) || !oe(h) || !oe(v))
        return null;
      var y = Me("recharts-pie", c);
      return /* @__PURE__ */ k.createElement(Le, {
        tabIndex: this.props.rootTabIndex,
        className: y,
        ref: function(A) {
          n.pieRef = A;
        }
      }, this.renderSectors(), l && this.renderLabels(u), Pt.renderCallByParent(this.props, null, !1), (!g || x) && kr.renderCallByParent(this.props, u, !1));
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
      var c = Me("recharts-pie-label-text", typeof n != "boolean" && !Pe(n) ? n.className : "");
      return /* @__PURE__ */ k.createElement(gi, Ia({}, i, {
        alignmentBaseline: "middle",
        className: c
      }), u);
    }
  }]), t;
}(Nr);
Ec = Kn;
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
  var t = e.props, r = t.data, n = t.children, i = me(e.props, !1), a = yr(n, Fv);
  return r && r.length ? r.map(function(u, c) {
    return dt(dt(dt({
      payload: u
    }, i), u), a && a[c] && a[c].props);
  }) : a && a.length ? a.map(function(u) {
    return dt(dt({}, i), u.props);
  }) : [];
});
Mr(Kn, "parseCoordinateOfPie", function(e, t) {
  var r = t.top, n = t.left, i = t.width, a = t.height, u = $A(i, a), c = n + Kt(e.props.cx, i, i / 2), l = r + Kt(e.props.cy, a, a / 2), f = Kt(e.props.innerRadius, u, 0), d = Kt(e.props.outerRadius, u, u * 0.8), h = e.props.maxRadius || Math.sqrt(i * i + a * a) / 2;
  return {
    cx: c,
    cy: l,
    innerRadius: f,
    outerRadius: d,
    maxRadius: h
  };
});
Mr(Kn, "getComposedData", function(e) {
  var t = e.item, r = e.offset, n = Ec.getRealPieData(t);
  if (!n || !n.length)
    return null;
  var i = t.props, a = i.cornerRadius, u = i.startAngle, c = i.endAngle, l = i.paddingAngle, f = i.dataKey, d = i.nameKey, h = i.valueKey, v = i.tooltipType, g = Math.abs(t.props.minAngle), x = Ec.parseCoordinateOfPie(t, r), y = Ec.parseDeltaAngle(u, c), w = Math.abs(y), A = f;
  Te(f) && Te(h) ? (Vr(!1, `Use "dataKey" to specify the value of pie,
      the props "valueKey" will be deprecated in 1.1.0`), A = "value") : Te(f) && (Vr(!1, `Use "dataKey" to specify the value of pie,
      the props "valueKey" will be deprecated in 1.1.0`), A = h);
  var O = n.filter(function(M) {
    return bt(M, A, 0) !== 0;
  }).length, S = (w >= 360 ? O : O - 1) * l, _ = w - O * g - S, b = n.reduce(function(M, F) {
    var D = bt(F, A, 0);
    return M + (oe(D) ? D : 0);
  }, 0), E;
  if (b > 0) {
    var C;
    E = n.map(function(M, F) {
      var D = bt(M, A, 0), B = bt(M, d, F), N = (oe(D) ? D : 0) / b, U;
      F ? U = C.endAngle + Gt(y) * l * (D !== 0 ? 1 : 0) : U = u;
      var z = U + Gt(y) * ((D !== 0 ? g : 0) + N * _), J = (U + z) / 2, H = (x.innerRadius + x.outerRadius) / 2, Z = [{
        name: B,
        value: D,
        payload: M,
        dataKey: A,
        type: v
      }], K = it(x.cx, x.cy, H, J);
      return C = dt(dt(dt({
        percent: N,
        cornerRadius: a,
        name: B,
        tooltipPayload: Z,
        midAngle: J,
        middleRadius: H,
        tooltipPosition: K
      }, M), x), {}, {
        value: bt(M, A),
        startAngle: U,
        endAngle: z,
        payload: M,
        paddingAngle: Gt(y) * l
      }), C;
    });
  }
  return dt(dt({}, x), {}, {
    sectors: E,
    data: n
  });
});
var TX = Math.ceil, $X = Math.max;
function CX(e, t, r, n) {
  for (var i = -1, a = $X(TX((t - e) / (r || 1)), 0), u = Array(a); a--; )
    u[n ? a : ++i] = e, e += r;
  return u;
}
var MX = CX, IX = bO, Kw = 1 / 0, kX = 17976931348623157e292;
function jX(e) {
  if (!e)
    return e === 0 ? e : 0;
  if (e = IX(e), e === Kw || e === -Kw) {
    var t = e < 0 ? -1 : 1;
    return t * kX;
  }
  return e === e ? e : 0;
}
var JA = jX, RX = MX, NX = Hl, bh = JA;
function DX(e) {
  return function(t, r, n) {
    return n && typeof n != "number" && NX(t, r, n) && (r = n = void 0), t = bh(t), r === void 0 ? (r = t, t = 0) : r = bh(r), n = n === void 0 ? t < r ? 1 : -1 : bh(n), RX(t, r, n, e);
  };
}
var LX = DX, BX = LX, FX = BX(), WX = FX;
const gl = /* @__PURE__ */ Je(WX);
function qu(e) {
  "@babel/helpers - typeof";
  return qu = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, qu(e);
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
function Vw(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? qw(Object(r), !0).forEach(function(n) {
      QA(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : qw(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function QA(e, t, r) {
  return t = zX(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function zX(e) {
  var t = UX(e, "string");
  return qu(t) == "symbol" ? t : String(t);
}
function UX(e, t) {
  if (qu(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (qu(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var HX = ["Webkit", "Moz", "O", "ms"], GX = function(t, r) {
  var n = t.replace(/(\w)/, function(a) {
    return a.toUpperCase();
  }), i = HX.reduce(function(a, u) {
    return Vw(Vw({}, a), {}, QA({}, u + n, r));
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
function xh(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Yw(Object(r), !0).forEach(function(n) {
      fr(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Yw(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function KX(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Xw(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, tS(n.key), n);
  }
}
function qX(e, t, r) {
  return t && Xw(e.prototype, t), r && Xw(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function VX(e, t, r) {
  return t = ml(t), YX(e, eS() ? Reflect.construct(t, r || [], ml(e).constructor) : t.apply(e, r));
}
function YX(e, t) {
  if (t && (Ja(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return nn(e);
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
function ml(e) {
  return ml = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, ml(e);
}
function nn(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function XX(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Fp(e, t);
}
function Fp(e, t) {
  return Fp = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, Fp(e, t);
}
function fr(e, t, r) {
  return t = tS(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function tS(e) {
  var t = ZX(e, "string");
  return Ja(t) == "symbol" ? t : String(t);
}
function ZX(e, t) {
  if (Ja(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Ja(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var JX = function(t) {
  var r = t.data, n = t.startIndex, i = t.endIndex, a = t.x, u = t.width, c = t.travellerWidth;
  if (!r || !r.length)
    return {};
  var l = r.length, f = fu().domain(gl(0, l)).range([a, a + u - c]), d = f.domain().map(function(h) {
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
}, Zw = function(t) {
  return t.changedTouches && !!t.changedTouches.length;
}, Qa = /* @__PURE__ */ function(e) {
  XX(t, e);
  function t(r) {
    var n;
    return KX(this, t), n = VX(this, t, [r]), fr(nn(n), "handleDrag", function(i) {
      n.leaveTimer && (clearTimeout(n.leaveTimer), n.leaveTimer = null), n.state.isTravellerMoving ? n.handleTravellerMove(i) : n.state.isSlideMoving && n.handleSlideDrag(i);
    }), fr(nn(n), "handleTouchMove", function(i) {
      i.changedTouches != null && i.changedTouches.length > 0 && n.handleDrag(i.changedTouches[0]);
    }), fr(nn(n), "handleDragEnd", function() {
      n.setState({
        isTravellerMoving: !1,
        isSlideMoving: !1
      }, function() {
        var i = n.props, a = i.endIndex, u = i.onDragEnd, c = i.startIndex;
        u == null || u({
          endIndex: a,
          startIndex: c
        });
      }), n.detachDragEndListener();
    }), fr(nn(n), "handleLeaveWrapper", function() {
      (n.state.isTravellerMoving || n.state.isSlideMoving) && (n.leaveTimer = window.setTimeout(n.handleDragEnd, n.props.leaveTimeOut));
    }), fr(nn(n), "handleEnterSlideOrTraveller", function() {
      n.setState({
        isTextActive: !0
      });
    }), fr(nn(n), "handleLeaveSlideOrTraveller", function() {
      n.setState({
        isTextActive: !1
      });
    }), fr(nn(n), "handleSlideDragStart", function(i) {
      var a = Zw(i) ? i.changedTouches[0] : i;
      n.setState({
        isTravellerMoving: !1,
        isSlideMoving: !0,
        slideMoveStartX: a.pageX
      }), n.attachDragEndListener();
    }), n.travellerDragStartHandlers = {
      startX: n.handleTravellerDragStart.bind(nn(n), "startX"),
      endX: n.handleTravellerDragStart.bind(nn(n), "endX")
    }, n.state = {}, n;
  }
  return qX(t, [{
    key: "componentWillUnmount",
    value: function() {
      this.leaveTimer && (clearTimeout(this.leaveTimer), this.leaveTimer = null), this.detachDragEndListener();
    }
  }, {
    key: "getIndex",
    value: function(n) {
      var i = n.startX, a = n.endX, u = this.state.scaleValues, c = this.props, l = c.gap, f = c.data, d = f.length - 1, h = Math.min(i, a), v = Math.max(i, a), g = t.getIndexInRange(u, h), x = t.getIndexInRange(u, v);
      return {
        startIndex: g - g % l,
        endIndex: x === d ? d : x - x % l
      };
    }
  }, {
    key: "getTextOfTick",
    value: function(n) {
      var i = this.props, a = i.data, u = i.tickFormatter, c = i.dataKey, l = bt(a[n], c, n);
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
      var i = this.state, a = i.slideMoveStartX, u = i.startX, c = i.endX, l = this.props, f = l.x, d = l.width, h = l.travellerWidth, v = l.startIndex, g = l.endIndex, x = l.onChange, y = n.pageX - a;
      y > 0 ? y = Math.min(y, f + d - h - c, f + d - h - u) : y < 0 && (y = Math.max(y, f - u, f - c));
      var w = this.getIndex({
        startX: u + y,
        endX: c + y
      });
      (w.startIndex !== v || w.endIndex !== g) && x && x(w), this.setState({
        startX: u + y,
        endX: c + y,
        slideMoveStartX: n.pageX
      });
    }
  }, {
    key: "handleTravellerDragStart",
    value: function(n, i) {
      var a = Zw(i) ? i.changedTouches[0] : i;
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
      var i = this.state, a = i.brushMoveStartX, u = i.movingTravellerId, c = i.endX, l = i.startX, f = this.state[u], d = this.props, h = d.x, v = d.width, g = d.travellerWidth, x = d.onChange, y = d.gap, w = d.data, A = {
        startX: this.state.startX,
        endX: this.state.endX
      }, O = n.pageX - a;
      O > 0 ? O = Math.min(O, h + v - g - f) : O < 0 && (O = Math.max(O, h - f)), A[u] = f + O;
      var S = this.getIndex(A), _ = S.startIndex, b = S.endIndex, E = function() {
        var M = w.length - 1;
        return u === "startX" && (c > l ? _ % y === 0 : b % y === 0) || c < l && b === M || u === "endX" && (c > l ? b % y === 0 : _ % y === 0) || c > l && b === M;
      };
      this.setState(fr(fr({}, u, f + O), "brushMoveStartX", n.pageX), function() {
        x && E() && x(S);
      });
    }
  }, {
    key: "handleTravellerMoveKeyboard",
    value: function(n, i) {
      var a = this, u = this.state, c = u.scaleValues, l = u.startX, f = u.endX, d = this.state[i], h = c.indexOf(d);
      if (h !== -1) {
        var v = h + n;
        if (!(v === -1 || v >= c.length)) {
          var g = c[v];
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
      var n = this.props, i = n.x, a = n.y, u = n.width, c = n.height, l = n.fill, f = n.stroke;
      return /* @__PURE__ */ k.createElement("rect", {
        stroke: f,
        fill: l,
        x: i,
        y: a,
        width: u,
        height: c
      });
    }
  }, {
    key: "renderPanorama",
    value: function() {
      var n = this.props, i = n.x, a = n.y, u = n.width, c = n.height, l = n.data, f = n.children, d = n.padding, h = Yi.only(f);
      return h ? /* @__PURE__ */ k.cloneElement(h, {
        x: i,
        y: a,
        width: u,
        height: c,
        margin: d,
        compact: !0,
        data: l
      }) : null;
    }
  }, {
    key: "renderTravellerLayer",
    value: function(n, i) {
      var a, u, c = this, l = this.props, f = l.y, d = l.travellerWidth, h = l.height, v = l.traveller, g = l.ariaLabel, x = l.data, y = l.startIndex, w = l.endIndex, A = Math.max(n, this.props.x), O = xh(xh({}, me(this.props, !1)), {}, {
        x: A,
        y: f,
        width: d,
        height: h
      }), S = g || "Min value: ".concat((a = x[y]) === null || a === void 0 ? void 0 : a.name, ", Max value: ").concat((u = x[w]) === null || u === void 0 ? void 0 : u.name);
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
        onKeyDown: function(b) {
          ["ArrowLeft", "ArrowRight"].includes(b.key) && (b.preventDefault(), b.stopPropagation(), c.handleTravellerMoveKeyboard(b.key === "ArrowRight" ? 1 : -1, i));
        },
        onFocus: function() {
          c.setState({
            isTravellerFocused: !0
          });
        },
        onBlur: function() {
          c.setState({
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
      var a = this.props, u = a.y, c = a.height, l = a.stroke, f = a.travellerWidth, d = Math.min(n, i) + f, h = Math.max(Math.abs(i - n) - f, 0);
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
        height: c
      });
    }
  }, {
    key: "renderText",
    value: function() {
      var n = this.props, i = n.startIndex, a = n.endIndex, u = n.y, c = n.height, l = n.travellerWidth, f = n.stroke, d = this.state, h = d.startX, v = d.endX, g = 5, x = {
        pointerEvents: "none",
        fill: f
      };
      return /* @__PURE__ */ k.createElement(Le, {
        className: "recharts-brush-texts"
      }, /* @__PURE__ */ k.createElement(gi, yl({
        textAnchor: "end",
        verticalAnchor: "middle",
        x: Math.min(h, v) - g,
        y: u + c / 2
      }, x), this.getTextOfTick(i)), /* @__PURE__ */ k.createElement(gi, yl({
        textAnchor: "start",
        verticalAnchor: "middle",
        x: Math.max(h, v) + l + g,
        y: u + c / 2
      }, x), this.getTextOfTick(a)));
    }
  }, {
    key: "render",
    value: function() {
      var n = this.props, i = n.data, a = n.className, u = n.children, c = n.x, l = n.y, f = n.width, d = n.height, h = n.alwaysShowText, v = this.state, g = v.startX, x = v.endX, y = v.isTextActive, w = v.isSlideMoving, A = v.isTravellerMoving, O = v.isTravellerFocused;
      if (!i || !i.length || !oe(c) || !oe(l) || !oe(f) || !oe(d) || f <= 0 || d <= 0)
        return null;
      var S = Me("recharts-brush", a), _ = k.Children.count(u) === 1, b = GX("userSelect", "none");
      return /* @__PURE__ */ k.createElement(Le, {
        className: S,
        onMouseLeave: this.handleLeaveWrapper,
        onTouchMove: this.handleTouchMove,
        style: b
      }, this.renderBackground(), _ && this.renderPanorama(), this.renderSlide(g, x), this.renderTravellerLayer(g, "startX"), this.renderTravellerLayer(x, "endX"), (y || w || A || O || h) && this.renderText());
    }
  }], [{
    key: "renderDefaultTraveller",
    value: function(n) {
      var i = n.x, a = n.y, u = n.width, c = n.height, l = n.stroke, f = Math.floor(a + c / 2) - 1;
      return /* @__PURE__ */ k.createElement(k.Fragment, null, /* @__PURE__ */ k.createElement("rect", {
        x: i,
        y: a,
        width: u,
        height: c,
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
      var a = n.data, u = n.width, c = n.x, l = n.travellerWidth, f = n.updateId, d = n.startIndex, h = n.endIndex;
      if (a !== i.prevData || f !== i.prevUpdateId)
        return xh({
          prevData: a,
          prevTravellerWidth: l,
          prevUpdateId: f,
          prevX: c,
          prevWidth: u
        }, a && a.length ? JX({
          data: a,
          width: u,
          x: c,
          travellerWidth: l,
          startIndex: d,
          endIndex: h
        }) : {
          scale: null,
          scaleValues: null
        });
      if (i.scale && (u !== i.prevWidth || c !== i.prevX || l !== i.prevTravellerWidth)) {
        i.scale.range([c, c + u - l]);
        var v = i.scale.domain().map(function(g) {
          return i.scale(g);
        });
        return {
          prevData: a,
          prevTravellerWidth: l,
          prevUpdateId: f,
          prevX: c,
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
      for (var a = n.length, u = 0, c = a - 1; c - u > 1; ) {
        var l = Math.floor((u + c) / 2);
        n[l] > i ? c = l : u = l;
      }
      return i >= n[c] ? c : u;
    }
  }]), t;
}(Nr);
fr(Qa, "displayName", "Brush");
fr(Qa, "defaultProps", {
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
var QX = Dv;
function eZ(e, t) {
  var r;
  return QX(e, function(n, i, a) {
    return r = t(n, i, a), !r;
  }), !!r;
}
var tZ = eZ, rZ = G_, nZ = pn, iZ = tZ, aZ = rr, oZ = Hl;
function uZ(e, t, r) {
  var n = aZ(e) ? rZ : iZ;
  return r && oZ(e, t, r) && (t = void 0), n(e, nZ(t));
}
var sZ = uZ;
const cZ = /* @__PURE__ */ Je(sZ);
var cn = function(t, r) {
  var n = t.alwaysShow, i = t.ifOverflow;
  return n && (i = "extendDomain"), i === r;
}, Jw = pO;
function lZ(e, t, r) {
  t == "__proto__" && Jw ? Jw(e, t, {
    configurable: !0,
    enumerable: !0,
    value: r,
    writable: !0
  }) : e[t] = r;
}
var fZ = lZ, dZ = fZ, hZ = dO, pZ = pn;
function vZ(e, t) {
  var r = {};
  return t = pZ(t), hZ(e, function(n, i, a) {
    dZ(r, i, t(n, i, a));
  }), r;
}
var gZ = vZ;
const yZ = /* @__PURE__ */ Je(gZ);
function mZ(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length; ++r < n; )
    if (!t(e[r], r, e))
      return !1;
  return !0;
}
var bZ = mZ, xZ = Dv;
function wZ(e, t) {
  var r = !0;
  return xZ(e, function(n, i, a) {
    return r = !!t(n, i, a), r;
  }), r;
}
var _Z = wZ, OZ = bZ, AZ = _Z, SZ = pn, PZ = rr, EZ = Hl;
function TZ(e, t, r) {
  var n = PZ(e) ? OZ : AZ;
  return r && EZ(e, t, r) && (t = void 0), n(e, SZ(t));
}
var $Z = TZ;
const rS = /* @__PURE__ */ Je($Z);
var CZ = ["x", "y"];
function eo(e) {
  "@babel/helpers - typeof";
  return eo = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, eo(e);
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
function Qw(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function ou(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Qw(Object(r), !0).forEach(function(n) {
      MZ(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Qw(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function MZ(e, t, r) {
  return t = IZ(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function IZ(e) {
  var t = kZ(e, "string");
  return eo(t) == "symbol" ? t : String(t);
}
function kZ(e, t) {
  if (eo(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (eo(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function jZ(e, t) {
  if (e == null) return {};
  var r = RZ(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function RZ(e, t) {
  if (e == null) return {};
  var r = {}, n = Object.keys(e), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
function NZ(e, t) {
  var r = e.x, n = e.y, i = jZ(e, CZ), a = "".concat(r), u = parseInt(a, 10), c = "".concat(n), l = parseInt(c, 10), f = "".concat(t.height || i.height), d = parseInt(f, 10), h = "".concat(t.width || i.width), v = parseInt(h, 10);
  return ou(ou(ou(ou(ou({}, t), i), u ? {
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
function e1(e) {
  return /* @__PURE__ */ k.createElement(YA, Wp({
    shapeType: "rectangle",
    propTransformer: NZ,
    activeClassName: "recharts-active-bar"
  }, e));
}
var DZ = function(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
  return function(n, i) {
    if (typeof t == "number") return t;
    var a = typeof n == "number";
    return a ? t(n, i) : (a || (process.env.NODE_ENV !== "production" ? er(!1, "minPointSize callback function received a value with type of ".concat(eo(n), ". Currently only numbers are supported.")) : er()), r);
  };
}, LZ = ["value", "background"], nS;
function to(e) {
  "@babel/helpers - typeof";
  return to = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, to(e);
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
function bl() {
  return bl = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, bl.apply(this, arguments);
}
function t1(e, t) {
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
    t % 2 ? t1(Object(r), !0).forEach(function(n) {
      hi(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : t1(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function WZ(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function r1(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, aS(n.key), n);
  }
}
function zZ(e, t, r) {
  return t && r1(e.prototype, t), r && r1(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function UZ(e, t, r) {
  return t = xl(t), HZ(e, iS() ? Reflect.construct(t, r || [], xl(e).constructor) : t.apply(e, r));
}
function HZ(e, t) {
  if (t && (to(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return su(e);
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
function xl(e) {
  return xl = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, xl(e);
}
function su(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function GZ(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && zp(e, t);
}
function zp(e, t) {
  return zp = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, zp(e, t);
}
function hi(e, t, r) {
  return t = aS(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function aS(e) {
  var t = KZ(e, "string");
  return to(t) == "symbol" ? t : String(t);
}
function KZ(e, t) {
  if (to(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (to(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Pi = /* @__PURE__ */ function(e) {
  GZ(t, e);
  function t() {
    var r;
    WZ(this, t);
    for (var n = arguments.length, i = new Array(n), a = 0; a < n; a++)
      i[a] = arguments[a];
    return r = UZ(this, t, [].concat(i)), hi(su(r), "state", {
      isAnimationFinished: !1
    }), hi(su(r), "id", oa("recharts-bar-")), hi(su(r), "handleAnimationEnd", function() {
      var u = r.props.onAnimationEnd;
      r.setState({
        isAnimationFinished: !0
      }), u && u();
    }), hi(su(r), "handleAnimationStart", function() {
      var u = r.props.onAnimationStart;
      r.setState({
        isAnimationFinished: !1
      }), u && u();
    }), r;
  }
  return zZ(t, [{
    key: "renderRectanglesStatically",
    value: function(n) {
      var i = this, a = this.props, u = a.shape, c = a.dataKey, l = a.activeIndex, f = a.activeBar, d = me(this.props, !1);
      return n && n.map(function(h, v) {
        var g = v === l, x = g ? f : u, y = Ct(Ct(Ct({}, d), h), {}, {
          isActive: g,
          option: x,
          index: v,
          dataKey: c,
          onAnimationStart: i.handleAnimationStart,
          onAnimationEnd: i.handleAnimationEnd
        });
        return /* @__PURE__ */ k.createElement(Le, bl({
          className: "recharts-bar-rectangle"
        }, Qi(i.props, h, v), {
          key: "rectangle-".concat(h == null ? void 0 : h.x, "-").concat(h == null ? void 0 : h.y, "-").concat(h == null ? void 0 : h.value)
        }), /* @__PURE__ */ k.createElement(e1, y));
      });
    }
  }, {
    key: "renderRectanglesWithAnimation",
    value: function() {
      var n = this, i = this.props, a = i.data, u = i.layout, c = i.isAnimationActive, l = i.animationBegin, f = i.animationDuration, d = i.animationEasing, h = i.animationId, v = this.state.prevData;
      return /* @__PURE__ */ k.createElement(Xr, {
        begin: l,
        duration: f,
        isActive: c,
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
        var x = g.t, y = a.map(function(w, A) {
          var O = v && v[A];
          if (O) {
            var S = St(O.x, w.x), _ = St(O.y, w.y), b = St(O.width, w.width), E = St(O.height, w.height);
            return Ct(Ct({}, w), {}, {
              x: S(x),
              y: _(x),
              width: b(x),
              height: E(x)
            });
          }
          if (u === "horizontal") {
            var C = St(0, w.height), M = C(x);
            return Ct(Ct({}, w), {}, {
              y: w.y + w.height - M,
              height: M
            });
          }
          var F = St(0, w.width), D = F(x);
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
      var n = this, i = this.props, a = i.data, u = i.dataKey, c = i.activeIndex, l = me(this.props.background, !1);
      return a.map(function(f, d) {
        f.value;
        var h = f.background, v = BZ(f, LZ);
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
        return /* @__PURE__ */ k.createElement(e1, bl({
          option: n.props.background,
          isActive: d === c
        }, g));
      });
    }
  }, {
    key: "renderErrorBar",
    value: function(n, i) {
      if (this.props.isAnimationActive && !this.state.isAnimationFinished)
        return null;
      var a = this.props, u = a.data, c = a.xAxis, l = a.yAxis, f = a.layout, d = a.children, h = yr(d, fs);
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
      }, x = {
        clipPath: n ? "url(#clipPath-".concat(i, ")") : null
      };
      return /* @__PURE__ */ k.createElement(Le, x, h.map(function(y) {
        return /* @__PURE__ */ k.cloneElement(y, {
          key: "error-bar-".concat(i, "-").concat(y.props.dataKey),
          data: u,
          xAxis: c,
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
      var n = this.props, i = n.hide, a = n.data, u = n.className, c = n.xAxis, l = n.yAxis, f = n.left, d = n.top, h = n.width, v = n.height, g = n.isAnimationActive, x = n.background, y = n.id;
      if (i || !a || !a.length)
        return null;
      var w = this.state.isAnimationFinished, A = Me("recharts-bar", u), O = c && c.allowDataOverflow, S = l && l.allowDataOverflow, _ = O || S, b = Te(y) ? this.id : y;
      return /* @__PURE__ */ k.createElement(Le, {
        className: A
      }, O || S ? /* @__PURE__ */ k.createElement("defs", null, /* @__PURE__ */ k.createElement("clipPath", {
        id: "clipPath-".concat(b)
      }, /* @__PURE__ */ k.createElement("rect", {
        x: O ? f : f - h / 2,
        y: S ? d : d - v / 2,
        width: O ? h : h * 2,
        height: S ? v : v * 2
      }))) : null, /* @__PURE__ */ k.createElement(Le, {
        className: "recharts-bar-rectangles",
        clipPath: _ ? "url(#clipPath-".concat(b, ")") : null
      }, x ? this.renderBackground() : null, this.renderRectangles()), this.renderErrorBar(_, b), (!g || w) && kr.renderCallByParent(this.props, a));
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
nS = Pi;
hi(Pi, "displayName", "Bar");
hi(Pi, "defaultProps", {
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
hi(Pi, "getComposedData", function(e) {
  var t = e.props, r = e.item, n = e.barPosition, i = e.bandSize, a = e.xAxis, u = e.yAxis, c = e.xAxisTicks, l = e.yAxisTicks, f = e.stackedData, d = e.dataStartIndex, h = e.displayedData, v = e.offset, g = jG(n, r);
  if (!g)
    return null;
  var x = t.layout, y = r.props, w = y.dataKey, A = y.children, O = y.minPointSize, S = x === "horizontal" ? u : a, _ = f ? S.scale.domain() : null, b = WG({
    numericAxis: S
  }), E = yr(A, Fv), C = h.map(function(M, F) {
    var D, B, N, U, z, J;
    f ? D = RG(f[d + F], _) : (D = bt(M, w), Array.isArray(D) || (D = [b, D]));
    var H = DZ(O, nS.defaultProps.minPointSize)(D[1], F);
    if (x === "horizontal") {
      var Z, K = [u.scale(D[0]), u.scale(D[1])], ue = K[0], G = K[1];
      B = Nx({
        axis: a,
        ticks: c,
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
      if (B = he, N = Nx({
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
      tooltipPayload: [EA(r, M)],
      tooltipPosition: {
        x: B + U / 2,
        y: N + z / 2
      }
    });
  });
  return Ct({
    data: C,
    layout: x
  }, v);
});
function Vu(e) {
  "@babel/helpers - typeof";
  return Vu = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Vu(e);
}
function qZ(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function n1(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, oS(n.key), n);
  }
}
function VZ(e, t, r) {
  return t && n1(e.prototype, t), r && n1(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
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
function Hr(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? i1(Object(r), !0).forEach(function(n) {
      sf(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : i1(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function sf(e, t, r) {
  return t = oS(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function oS(e) {
  var t = YZ(e, "string");
  return Vu(t) == "symbol" ? t : String(t);
}
function YZ(e, t) {
  if (Vu(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Vu(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var pg = function(t, r, n, i, a) {
  var u = t.width, c = t.height, l = t.layout, f = t.children, d = Object.keys(r), h = {
    left: n.left,
    leftMirror: n.left,
    right: u - n.right,
    rightMirror: u - n.right,
    top: n.top,
    topMirror: n.top,
    bottom: c - n.bottom,
    bottomMirror: c - n.bottom
  }, v = !!dr(f, Pi);
  return d.reduce(function(g, x) {
    var y = r[x], w = y.orientation, A = y.domain, O = y.padding, S = O === void 0 ? {} : O, _ = y.mirror, b = y.reversed, E = "".concat(w).concat(_ ? "Mirror" : ""), C, M, F, D, B;
    if (y.type === "number" && (y.padding === "gap" || y.padding === "no-gap")) {
      var N = A[1] - A[0], U = 1 / 0, z = y.categoricalDomain.sort();
      if (z.forEach(function(he, ge) {
        ge > 0 && (U = Math.min((he || 0) - (z[ge - 1] || 0), U));
      }), Number.isFinite(U)) {
        var J = U / N, H = y.layout === "vertical" ? n.height : n.width;
        if (y.padding === "gap" && (C = J * H / 2), y.padding === "no-gap") {
          var Z = Kt(t.barCategoryGap, J * H), K = J * H / 2;
          C = K - Z - (K - Z) / H * Z;
        }
      }
    }
    i === "xAxis" ? M = [n.left + (S.left || 0) + (C || 0), n.left + n.width - (S.right || 0) - (C || 0)] : i === "yAxis" ? M = l === "horizontal" ? [n.top + n.height - (S.bottom || 0), n.top + (S.top || 0)] : [n.top + (S.top || 0) + (C || 0), n.top + n.height - (S.bottom || 0) - (C || 0)] : M = y.range, b && (M = [M[1], M[0]]);
    var ue = OA(y, a, v), G = ue.scale, X = ue.realScaleType;
    G.domain(A).range(M), AA(G);
    var ae = SA(G, Hr(Hr({}, y), {}, {
      realScaleType: X
    }));
    i === "xAxis" ? (B = w === "top" && !_ || w === "bottom" && _, F = n.left, D = h[E] - B * y.height) : i === "yAxis" && (B = w === "left" && !_ || w === "right" && _, F = h[E] - B * y.width, D = n.top);
    var ce = Hr(Hr(Hr({}, y), ae), {}, {
      realScaleType: X,
      x: F,
      y: D,
      scale: G,
      width: i === "xAxis" ? n.width : y.width,
      height: i === "yAxis" ? n.height : y.height
    });
    return ce.bandSize = nl(ce, ae), !y.hide && i === "xAxis" ? h[E] += (B ? -1 : 1) * ce.height : y.hide || (h[E] += (B ? -1 : 1) * ce.width), Hr(Hr({}, g), {}, sf({}, x, ce));
  }, {});
}, uS = function(t, r) {
  var n = t.x, i = t.y, a = r.x, u = r.y;
  return {
    x: Math.min(n, a),
    y: Math.min(i, u),
    width: Math.abs(a - n),
    height: Math.abs(u - i)
  };
}, XZ = function(t) {
  var r = t.x1, n = t.y1, i = t.x2, a = t.y2;
  return uS({
    x: r,
    y: n
  }, {
    x: i,
    y: a
  });
}, sS = /* @__PURE__ */ function() {
  function e(t) {
    qZ(this, e), this.scale = t;
  }
  return VZ(e, [{
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
              var c = this.bandwidth ? this.bandwidth() : 0;
              return this.scale(r) + c;
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
sf(sS, "EPS", 1e-4);
var vg = function(t) {
  var r = Object.keys(t).reduce(function(n, i) {
    return Hr(Hr({}, n), {}, sf({}, i, sS.create(t[i])));
  }, {});
  return Hr(Hr({}, r), {}, {
    apply: function(i) {
      var a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, u = a.bandAware, c = a.position;
      return yZ(i, function(l, f) {
        return r[f].apply(l, {
          bandAware: u,
          position: c
        });
      });
    },
    isInRange: function(i) {
      return rS(i, function(a, u) {
        return r[u].isInRange(a);
      });
    }
  });
};
function ZZ(e) {
  return (e % 180 + 180) % 180;
}
var JZ = function(t) {
  var r = t.width, n = t.height, i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, a = ZZ(i), u = a * Math.PI / 180, c = Math.atan(n / r), l = u > c && u < Math.PI - c ? n / Math.sin(u) : r / Math.cos(u);
  return Math.abs(l);
}, QZ = pn, eJ = os, tJ = zl;
function rJ(e) {
  return function(t, r, n) {
    var i = Object(t);
    if (!eJ(t)) {
      var a = QZ(r);
      t = tJ(t), r = function(c) {
        return a(i[c], c, i);
      };
    }
    var u = e(t, r, n);
    return u > -1 ? i[a ? t[u] : u] : void 0;
  };
}
var nJ = rJ, iJ = JA;
function aJ(e) {
  var t = iJ(e), r = t % 1;
  return t === t ? r ? t - r : t : 0;
}
var oJ = aJ, uJ = aO, sJ = pn, cJ = oJ, lJ = Math.max;
function fJ(e, t, r) {
  var n = e == null ? 0 : e.length;
  if (!n)
    return -1;
  var i = r == null ? 0 : cJ(r);
  return i < 0 && (i = lJ(n + i, 0)), uJ(e, sJ(t), i);
}
var dJ = fJ, hJ = nJ, pJ = dJ, vJ = hJ(pJ), gJ = vJ;
const yJ = /* @__PURE__ */ Je(gJ);
var mJ = M3(function(e) {
  return {
    x: e.left,
    y: e.top,
    width: e.width,
    height: e.height
  };
}, function(e) {
  return ["l", e.left, "t", e.top, "w", e.width, "h", e.height].join("");
});
function wl(e) {
  "@babel/helpers - typeof";
  return wl = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, wl(e);
}
var gg = /* @__PURE__ */ Rr(void 0), yg = /* @__PURE__ */ Rr(void 0), cS = /* @__PURE__ */ Rr(void 0), lS = /* @__PURE__ */ Rr({}), fS = /* @__PURE__ */ Rr(void 0), dS = /* @__PURE__ */ Rr(0), hS = /* @__PURE__ */ Rr(0), a1 = function(t) {
  var r = t.state, n = r.xAxisMap, i = r.yAxisMap, a = r.offset, u = t.clipPathId, c = t.children, l = t.width, f = t.height, d = mJ(a);
  return /* @__PURE__ */ k.createElement(gg.Provider, {
    value: n
  }, /* @__PURE__ */ k.createElement(yg.Provider, {
    value: i
  }, /* @__PURE__ */ k.createElement(lS.Provider, {
    value: a
  }, /* @__PURE__ */ k.createElement(cS.Provider, {
    value: d
  }, /* @__PURE__ */ k.createElement(fS.Provider, {
    value: u
  }, /* @__PURE__ */ k.createElement(dS.Provider, {
    value: f
  }, /* @__PURE__ */ k.createElement(hS.Provider, {
    value: l
  }, c)))))));
}, bJ = function() {
  return tr(fS);
};
function pS(e) {
  var t = Object.keys(e);
  return t.length === 0 ? "There are no available ids." : "Available ids are: ".concat(t, ".");
}
var vS = function(t) {
  var r = tr(gg);
  r == null && (process.env.NODE_ENV !== "production" ? er(!1, "Could not find Recharts context; are you sure this is rendered inside a Recharts wrapper component?") : er());
  var n = r[t];
  return n == null && (process.env.NODE_ENV !== "production" ? er(!1, 'Could not find xAxis by id "'.concat(t, '" [').concat(wl(t), "]. ").concat(pS(r))) : er()), n;
}, xJ = function() {
  var t = tr(gg);
  return fi(t);
}, wJ = function() {
  var t = tr(yg), r = yJ(t, function(n) {
    return rS(n.domain, Number.isFinite);
  });
  return r || fi(t);
}, gS = function(t) {
  var r = tr(yg);
  r == null && (process.env.NODE_ENV !== "production" ? er(!1, "Could not find Recharts context; are you sure this is rendered inside a Recharts wrapper component?") : er());
  var n = r[t];
  return n == null && (process.env.NODE_ENV !== "production" ? er(!1, 'Could not find yAxis by id "'.concat(t, '" [').concat(wl(t), "]. ").concat(pS(r))) : er()), n;
}, _J = function() {
  var t = tr(cS);
  return t;
}, OJ = function() {
  return tr(lS);
}, mg = function() {
  return tr(hS);
}, bg = function() {
  return tr(dS);
};
function Yu(e) {
  "@babel/helpers - typeof";
  return Yu = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Yu(e);
}
function o1(e, t) {
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
    t % 2 ? o1(Object(r), !0).forEach(function(n) {
      AJ(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : o1(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function AJ(e, t, r) {
  return t = SJ(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function SJ(e) {
  var t = PJ(e, "string");
  return Yu(t) == "symbol" ? t : String(t);
}
function PJ(e, t) {
  if (Yu(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Yu(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function EJ(e, t) {
  return MJ(e) || CJ(e, t) || $J(e, t) || TJ();
}
function TJ() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function $J(e, t) {
  if (e) {
    if (typeof e == "string") return s1(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return s1(e, t);
  }
}
function s1(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function CJ(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, i, a, u, c = [], l = !0, f = !1;
    try {
      if (a = (r = r.call(e)).next, t !== 0) for (; !(l = (n = a.call(r)).done) && (c.push(n.value), c.length !== t); l = !0) ;
    } catch (d) {
      f = !0, i = d;
    } finally {
      try {
        if (!l && r.return != null && (u = r.return(), Object(u) !== u)) return;
      } finally {
        if (f) throw i;
      }
    }
    return c;
  }
}
function MJ(e) {
  if (Array.isArray(e)) return e;
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
var IJ = function(t, r) {
  var n;
  return /* @__PURE__ */ k.isValidElement(t) ? n = /* @__PURE__ */ k.cloneElement(t, r) : Pe(t) ? n = t(r) : n = /* @__PURE__ */ k.createElement("line", Up({}, r, {
    className: "recharts-reference-line-line"
  })), n;
}, kJ = function(t, r, n, i, a, u, c, l, f) {
  var d = a.x, h = a.y, v = a.width, g = a.height;
  if (n) {
    var x = f.y, y = t.y.apply(x, {
      position: u
    });
    if (cn(f, "discard") && !t.y.isInRange(y))
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
    if (cn(f, "discard") && !t.x.isInRange(O))
      return null;
    var S = [{
      x: O,
      y: h + g
    }, {
      x: O,
      y: h
    }];
    return c === "top" ? S.reverse() : S;
  }
  if (i) {
    var _ = f.segment, b = _.map(function(E) {
      return t.apply(E, {
        position: u
      });
    });
    return cn(f, "discard") && cZ(b, function(E) {
      return !t.isInRange(E);
    }) ? null : b;
  }
  return null;
};
function xg(e) {
  var t = e.x, r = e.y, n = e.segment, i = e.xAxisId, a = e.yAxisId, u = e.shape, c = e.className, l = e.alwaysShow, f = bJ(), d = vS(i), h = gS(a), v = _J();
  if (!f || !v)
    return null;
  Vr(l === void 0, 'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.');
  var g = vg({
    x: d.scale,
    y: h.scale
  }), x = Et(t), y = Et(r), w = n && n.length === 2, A = kJ(g, x, y, w, v, e.position, d.orientation, h.orientation, e);
  if (!A)
    return null;
  var O = EJ(A, 2), S = O[0], _ = S.x, b = S.y, E = O[1], C = E.x, M = E.y, F = cn(e, "hidden") ? "url(#".concat(f, ")") : void 0, D = u1(u1({
    clipPath: F
  }, me(e, !0)), {}, {
    x1: _,
    y1: b,
    x2: C,
    y2: M
  });
  return /* @__PURE__ */ k.createElement(Le, {
    className: Me("recharts-reference-line", c)
  }, IJ(u, D), Pt.renderCallByParent(e, XZ({
    x1: _,
    y1: b,
    x2: C,
    y2: M
  })));
}
xg.displayName = "ReferenceLine";
xg.defaultProps = {
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
function Xu(e) {
  "@babel/helpers - typeof";
  return Xu = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Xu(e);
}
function Hp() {
  return Hp = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Hp.apply(this, arguments);
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
      jJ(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : c1(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function jJ(e, t, r) {
  return t = RJ(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function RJ(e) {
  var t = NJ(e, "string");
  return Xu(t) == "symbol" ? t : String(t);
}
function NJ(e, t) {
  if (Xu(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Xu(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var DJ = function(t) {
  var r = t.x, n = t.y, i = t.xAxis, a = t.yAxis, u = vg({
    x: i.scale,
    y: a.scale
  }), c = u.apply({
    x: r,
    y: n
  }, {
    bandAware: !0
  });
  return cn(t, "discard") && !u.isInRange(c) ? null : c;
};
function hs(e) {
  var t = e.x, r = e.y, n = e.r, i = e.alwaysShow, a = e.clipPathId, u = Et(t), c = Et(r);
  if (Vr(i === void 0, 'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.'), !u || !c)
    return null;
  var l = DJ(e);
  if (!l)
    return null;
  var f = l.x, d = l.y, h = e.shape, v = e.className, g = cn(e, "hidden") ? "url(#".concat(a, ")") : void 0, x = l1(l1({
    clipPath: g
  }, me(e, !0)), {}, {
    cx: f,
    cy: d
  });
  return /* @__PURE__ */ k.createElement(Le, {
    className: Me("recharts-reference-dot", v)
  }, hs.renderDot(h, x), Pt.renderCallByParent(e, {
    x: f - n,
    y: d - n,
    width: 2 * n,
    height: 2 * n
  }));
}
hs.displayName = "ReferenceDot";
hs.defaultProps = {
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
hs.renderDot = function(e, t) {
  var r;
  return /* @__PURE__ */ k.isValidElement(e) ? r = /* @__PURE__ */ k.cloneElement(e, t) : Pe(e) ? r = e(t) : r = /* @__PURE__ */ k.createElement(ds, Hp({}, t, {
    cx: t.cx,
    cy: t.cy,
    className: "recharts-reference-dot-dot"
  })), r;
};
function Zu(e) {
  "@babel/helpers - typeof";
  return Zu = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Zu(e);
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
function f1(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function d1(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? f1(Object(r), !0).forEach(function(n) {
      LJ(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : f1(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function LJ(e, t, r) {
  return t = BJ(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function BJ(e) {
  var t = FJ(e, "string");
  return Zu(t) == "symbol" ? t : String(t);
}
function FJ(e, t) {
  if (Zu(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Zu(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var WJ = function(t, r, n, i, a) {
  var u = a.x1, c = a.x2, l = a.y1, f = a.y2, d = a.xAxis, h = a.yAxis;
  if (!d || !h) return null;
  var v = vg({
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
    x: r ? v.x.apply(c, {
      position: "end"
    }) : v.x.rangeMax,
    y: i ? v.y.apply(f, {
      position: "end"
    }) : v.y.rangeMax
  };
  return cn(a, "discard") && (!v.isInRange(g) || !v.isInRange(x)) ? null : uS(g, x);
};
function ps(e) {
  var t = e.x1, r = e.x2, n = e.y1, i = e.y2, a = e.className, u = e.alwaysShow, c = e.clipPathId;
  Vr(u === void 0, 'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.');
  var l = Et(t), f = Et(r), d = Et(n), h = Et(i), v = e.shape;
  if (!l && !f && !d && !h && !v)
    return null;
  var g = WJ(l, f, d, h, e);
  if (!g && !v)
    return null;
  var x = cn(e, "hidden") ? "url(#".concat(c, ")") : void 0;
  return /* @__PURE__ */ k.createElement(Le, {
    className: Me("recharts-reference-area", a)
  }, ps.renderRect(v, d1(d1({
    clipPath: x
  }, me(e, !0)), g)), Pt.renderCallByParent(e, g));
}
ps.displayName = "ReferenceArea";
ps.defaultProps = {
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
ps.renderRect = function(e, t) {
  var r;
  return /* @__PURE__ */ k.isValidElement(e) ? r = /* @__PURE__ */ k.cloneElement(e, t) : Pe(e) ? r = e(t) : r = /* @__PURE__ */ k.createElement(hg, Gp({}, t, {
    className: "recharts-reference-area-rect"
  })), r;
};
function yS(e, t, r) {
  if (t < 1)
    return [];
  if (t === 1 && r === void 0)
    return e;
  for (var n = [], i = 0; i < e.length; i += t)
    n.push(e[i]);
  return n;
}
function zJ(e, t, r) {
  var n = {
    width: e.width + t.width,
    height: e.height + t.height
  };
  return JZ(n, r);
}
function UJ(e, t, r) {
  var n = r === "width", i = e.x, a = e.y, u = e.width, c = e.height;
  return t === 1 ? {
    start: n ? i : a,
    end: n ? i + u : a + c
  } : {
    start: n ? i + u : a + c,
    end: n ? i : a
  };
}
function _l(e, t, r, n, i) {
  if (e * t < e * n || e * t > e * i)
    return !1;
  var a = r();
  return e * (t - e * a / 2 - n) >= 0 && e * (t + e * a / 2 - i) <= 0;
}
function HJ(e, t) {
  return yS(e, t + 1);
}
function GJ(e, t, r, n, i) {
  for (var a = (n || []).slice(), u = t.start, c = t.end, l = 0, f = 1, d = u, h = function() {
    var x = n == null ? void 0 : n[l];
    if (x === void 0)
      return {
        v: yS(n, f)
      };
    var y = l, w, A = function() {
      return w === void 0 && (w = r(x, y)), w;
    }, O = x.coordinate, S = l === 0 || _l(e, O, A, d, c);
    S || (l = 0, d = u, f += 1), S && (d = O + e * (A() / 2 + i), l += f);
  }, v; f <= a.length; )
    if (v = h(), v) return v.v;
  return [];
}
function Ju(e) {
  "@babel/helpers - typeof";
  return Ju = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ju(e);
}
function h1(e, t) {
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
    t % 2 ? h1(Object(r), !0).forEach(function(n) {
      KJ(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : h1(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function KJ(e, t, r) {
  return t = qJ(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function qJ(e) {
  var t = VJ(e, "string");
  return Ju(t) == "symbol" ? t : String(t);
}
function VJ(e, t) {
  if (Ju(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Ju(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function YJ(e, t, r, n, i) {
  for (var a = (n || []).slice(), u = a.length, c = t.start, l = t.end, f = function(v) {
    var g = a[v], x, y = function() {
      return x === void 0 && (x = r(g, v)), x;
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
    var A = _l(e, g.tickCoord, y, c, l);
    A && (l = g.tickCoord - e * (y() / 2 + i), a[v] = Lt(Lt({}, g), {}, {
      isShow: !0
    }));
  }, d = u - 1; d >= 0; d--)
    f(d);
  return a;
}
function XJ(e, t, r, n, i, a) {
  var u = (n || []).slice(), c = u.length, l = t.start, f = t.end;
  if (a) {
    var d = n[c - 1], h = r(d, c - 1), v = e * (d.coordinate + e * h / 2 - f);
    u[c - 1] = d = Lt(Lt({}, d), {}, {
      tickCoord: v > 0 ? d.coordinate - v * e : d.coordinate
    });
    var g = _l(e, d.tickCoord, function() {
      return h;
    }, l, f);
    g && (f = d.tickCoord - e * (h / 2 + i), u[c - 1] = Lt(Lt({}, d), {}, {
      isShow: !0
    }));
  }
  for (var x = a ? c - 1 : c, y = function(O) {
    var S = u[O], _, b = function() {
      return _ === void 0 && (_ = r(S, O)), _;
    };
    if (O === 0) {
      var E = e * (S.coordinate - e * b() / 2 - l);
      u[O] = S = Lt(Lt({}, S), {}, {
        tickCoord: E < 0 ? S.coordinate - E * e : S.coordinate
      });
    } else
      u[O] = S = Lt(Lt({}, S), {}, {
        tickCoord: S.coordinate
      });
    var C = _l(e, S.tickCoord, b, l, f);
    C && (l = S.tickCoord + e * (b() / 2 + i), u[O] = Lt(Lt({}, S), {}, {
      isShow: !0
    }));
  }, w = 0; w < x; w++)
    y(w);
  return u;
}
function wg(e, t, r) {
  var n = e.tick, i = e.ticks, a = e.viewBox, u = e.minTickGap, c = e.orientation, l = e.interval, f = e.tickFormatter, d = e.unit, h = e.angle;
  if (!i || !i.length || !n)
    return [];
  if (oe(l) || Yr.isSsr)
    return HJ(i, typeof l == "number" && oe(l) ? l : 0);
  var v = [], g = c === "top" || c === "bottom" ? "width" : "height", x = d && g === "width" ? lu(d, {
    fontSize: t,
    letterSpacing: r
  }) : {
    width: 0,
    height: 0
  }, y = function(S, _) {
    var b = Pe(f) ? f(S.value, _) : S.value;
    return g === "width" ? zJ(lu(b, {
      fontSize: t,
      letterSpacing: r
    }), x, h) : lu(b, {
      fontSize: t,
      letterSpacing: r
    })[g];
  }, w = i.length >= 2 ? Gt(i[1].coordinate - i[0].coordinate) : 1, A = UJ(a, w, g);
  return l === "equidistantPreserveStart" ? GJ(w, A, y, i, u) : (l === "preserveStart" || l === "preserveStartEnd" ? v = XJ(w, A, y, i, u, l === "preserveStartEnd") : v = YJ(w, A, y, i, u), v.filter(function(O) {
    return O.isShow;
  }));
}
var ZJ = ["viewBox"], JJ = ["viewBox"], QJ = ["ticks"];
function ro(e) {
  "@babel/helpers - typeof";
  return ro = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ro(e);
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
function Ut(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? p1(Object(r), !0).forEach(function(n) {
      _g(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : p1(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function wh(e, t) {
  if (e == null) return {};
  var r = eQ(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function eQ(e, t) {
  if (e == null) return {};
  var r = {}, n = Object.keys(e), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
function tQ(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function v1(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, bS(n.key), n);
  }
}
function rQ(e, t, r) {
  return t && v1(e.prototype, t), r && v1(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function nQ(e, t, r) {
  return t = Ol(t), iQ(e, mS() ? Reflect.construct(t, r || [], Ol(e).constructor) : t.apply(e, r));
}
function iQ(e, t) {
  if (t && (ro(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return aQ(e);
}
function aQ(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function mS() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (mS = function() {
    return !!e;
  })();
}
function Ol(e) {
  return Ol = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Ol(e);
}
function oQ(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Kp(e, t);
}
function Kp(e, t) {
  return Kp = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, Kp(e, t);
}
function _g(e, t, r) {
  return t = bS(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function bS(e) {
  var t = uQ(e, "string");
  return ro(t) == "symbol" ? t : String(t);
}
function uQ(e, t) {
  if (ro(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (ro(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var So = /* @__PURE__ */ function(e) {
  oQ(t, e);
  function t(r) {
    var n;
    return tQ(this, t), n = nQ(this, t, [r]), n.state = {
      fontSize: "",
      letterSpacing: ""
    }, n;
  }
  return rQ(t, [{
    key: "shouldComponentUpdate",
    value: function(n, i) {
      var a = n.viewBox, u = wh(n, ZJ), c = this.props, l = c.viewBox, f = wh(c, JJ);
      return !Ra(a, l) || !Ra(u, f) || !Ra(i, this.state);
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
      var i = this.props, a = i.x, u = i.y, c = i.width, l = i.height, f = i.orientation, d = i.tickSize, h = i.mirror, v = i.tickMargin, g, x, y, w, A, O, S = h ? -1 : 1, _ = n.tickSize || d, b = oe(n.tickCoord) ? n.tickCoord : n.coordinate;
      switch (f) {
        case "top":
          g = x = n.coordinate, w = u + +!h * l, y = w - S * _, O = y - S * v, A = b;
          break;
        case "left":
          y = w = n.coordinate, x = a + +!h * c, g = x - S * _, A = g - S * v, O = b;
          break;
        case "right":
          y = w = n.coordinate, x = a + +h * c, g = x + S * _, A = g + S * v, O = b;
          break;
        default:
          g = x = n.coordinate, w = u + +h * l, y = w + S * _, O = y + S * v, A = b;
          break;
      }
      return {
        line: {
          x1: g,
          y1: y,
          x2: x,
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
      var n = this.props, i = n.x, a = n.y, u = n.width, c = n.height, l = n.orientation, f = n.mirror, d = n.axisLine, h = Ut(Ut(Ut({}, me(this.props, !1)), me(d, !1)), {}, {
        fill: "none"
      });
      if (l === "top" || l === "bottom") {
        var v = +(l === "top" && !f || l === "bottom" && f);
        h = Ut(Ut({}, h), {}, {
          x1: i,
          y1: a + v * c,
          x2: i + u,
          y2: a + v * c
        });
      } else {
        var g = +(l === "left" && !f || l === "right" && f);
        h = Ut(Ut({}, h), {}, {
          x1: i + g * u,
          y1: a,
          x2: i + g * u,
          y2: a + c
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
        var u = this, c = this.props, l = c.tickLine, f = c.stroke, d = c.tick, h = c.tickFormatter, v = c.unit, g = wg(Ut(Ut({}, this.props), {}, {
          ticks: n
        }), i, a), x = this.getTickTextAnchor(), y = this.getTickVerticalAnchor(), w = me(this.props, !1), A = me(d, !1), O = Ut(Ut({}, w), {}, {
          fill: "none"
        }, me(l, !1)), S = g.map(function(_, b) {
          var E = u.getTickLineCoord(_), C = E.line, M = E.tick, F = Ut(Ut(Ut(Ut({
            textAnchor: x,
            verticalAnchor: y
          }, w), {}, {
            stroke: "none",
            fill: f
          }, A), M), {}, {
            index: b,
            payload: _,
            visibleTicksCount: g.length,
            tickFormatter: h
          });
          return /* @__PURE__ */ k.createElement(Le, ka({
            className: "recharts-cartesian-axis-tick",
            key: "tick-".concat(_.value, "-").concat(_.coordinate, "-").concat(_.tickCoord)
          }, Qi(u.props, _, b)), l && /* @__PURE__ */ k.createElement("line", ka({}, O, C, {
            className: Me("recharts-cartesian-axis-tick-line", gr(l, "className"))
          })), d && t.renderTickItem(d, F, "".concat(Pe(h) ? h(_.value, b) : _.value).concat(v || "")));
        });
        return /* @__PURE__ */ k.createElement("g", {
          className: "recharts-cartesian-axis-ticks"
        }, S);
      }
    )
  }, {
    key: "render",
    value: function() {
      var n = this, i = this.props, a = i.axisLine, u = i.width, c = i.height, l = i.ticksGenerator, f = i.className, d = i.hide;
      if (d)
        return null;
      var h = this.props, v = h.ticks, g = wh(h, QJ), x = v;
      return Pe(l) && (x = v && v.length > 0 ? l(this.props) : l(g)), u <= 0 || c <= 0 || !x || !x.length ? null : /* @__PURE__ */ k.createElement(Le, {
        className: Me("recharts-cartesian-axis", f),
        ref: function(w) {
          n.layerReference = w;
        }
      }, a && this.renderAxisLine(), this.renderTicks(x, this.state.fontSize, this.state.letterSpacing), Pt.renderCallByParent(this.props));
    }
  }], [{
    key: "renderTickItem",
    value: function(n, i, a) {
      var u;
      return /* @__PURE__ */ k.isValidElement(n) ? u = /* @__PURE__ */ k.cloneElement(n, i) : Pe(n) ? u = n(i) : u = /* @__PURE__ */ k.createElement(gi, ka({}, i, {
        className: "recharts-cartesian-axis-tick-value"
      }), a), u;
    }
  }]), t;
}(G1);
_g(So, "displayName", "CartesianAxis");
_g(So, "defaultProps", {
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
var sQ = ["x1", "y1", "x2", "y2", "key"], cQ = ["offset"];
function ra(e) {
  "@babel/helpers - typeof";
  return ra = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ra(e);
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
function Bt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? g1(Object(r), !0).forEach(function(n) {
      lQ(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : g1(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function lQ(e, t, r) {
  return t = fQ(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function fQ(e) {
  var t = dQ(e, "string");
  return ra(t) == "symbol" ? t : String(t);
}
function dQ(e, t) {
  if (ra(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (ra(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
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
function y1(e, t) {
  if (e == null) return {};
  var r = hQ(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function hQ(e, t) {
  if (e == null) return {};
  var r = {}, n = Object.keys(e), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
var pQ = function(t) {
  var r = t.fill;
  if (!r || r === "none")
    return null;
  var n = t.fillOpacity, i = t.x, a = t.y, u = t.width, c = t.height;
  return /* @__PURE__ */ k.createElement("rect", {
    x: i,
    y: a,
    width: u,
    height: c,
    stroke: "none",
    fill: r,
    fillOpacity: n,
    className: "recharts-cartesian-grid-bg"
  });
};
function xS(e, t) {
  var r;
  if (/* @__PURE__ */ k.isValidElement(e))
    r = /* @__PURE__ */ k.cloneElement(e, t);
  else if (Pe(e))
    r = e(t);
  else {
    var n = t.x1, i = t.y1, a = t.x2, u = t.y2, c = t.key, l = y1(t, sQ), f = me(l, !1);
    f.offset;
    var d = y1(f, cQ);
    r = /* @__PURE__ */ k.createElement("line", qi({}, d, {
      x1: n,
      y1: i,
      x2: a,
      y2: u,
      fill: "none",
      key: c
    }));
  }
  return r;
}
function vQ(e) {
  var t = e.x, r = e.width, n = e.horizontal, i = n === void 0 ? !0 : n, a = e.horizontalPoints;
  if (!i || !a || !a.length)
    return null;
  var u = a.map(function(c, l) {
    var f = Bt(Bt({}, e), {}, {
      x1: t,
      y1: c,
      x2: t + r,
      y2: c,
      key: "line-".concat(l),
      index: l
    });
    return xS(i, f);
  });
  return /* @__PURE__ */ k.createElement("g", {
    className: "recharts-cartesian-grid-horizontal"
  }, u);
}
function gQ(e) {
  var t = e.y, r = e.height, n = e.vertical, i = n === void 0 ? !0 : n, a = e.verticalPoints;
  if (!i || !a || !a.length)
    return null;
  var u = a.map(function(c, l) {
    var f = Bt(Bt({}, e), {}, {
      x1: c,
      y1: t,
      x2: c,
      y2: t + r,
      key: "line-".concat(l),
      index: l
    });
    return xS(i, f);
  });
  return /* @__PURE__ */ k.createElement("g", {
    className: "recharts-cartesian-grid-vertical"
  }, u);
}
function yQ(e) {
  var t = e.horizontalFill, r = e.fillOpacity, n = e.x, i = e.y, a = e.width, u = e.height, c = e.horizontalPoints, l = e.horizontal, f = l === void 0 ? !0 : l;
  if (!f || !t || !t.length)
    return null;
  var d = c.map(function(v) {
    return Math.round(v + i - i);
  }).sort(function(v, g) {
    return v - g;
  });
  i !== d[0] && d.unshift(0);
  var h = d.map(function(v, g) {
    var x = !d[g + 1], y = x ? i + u - v : d[g + 1] - v;
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
function mQ(e) {
  var t = e.vertical, r = t === void 0 ? !0 : t, n = e.verticalFill, i = e.fillOpacity, a = e.x, u = e.y, c = e.width, l = e.height, f = e.verticalPoints;
  if (!r || !n || !n.length)
    return null;
  var d = f.map(function(v) {
    return Math.round(v + a - a);
  }).sort(function(v, g) {
    return v - g;
  });
  a !== d[0] && d.unshift(0);
  var h = d.map(function(v, g) {
    var x = !d[g + 1], y = x ? a + c - v : d[g + 1] - v;
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
var bQ = function(t, r) {
  var n = t.xAxis, i = t.width, a = t.height, u = t.offset;
  return _A(wg(Bt(Bt(Bt({}, So.defaultProps), n), {}, {
    ticks: Mn(n, !0),
    viewBox: {
      x: 0,
      y: 0,
      width: i,
      height: a
    }
  })), u.left, u.left + u.width, r);
}, xQ = function(t, r) {
  var n = t.yAxis, i = t.width, a = t.height, u = t.offset;
  return _A(wg(Bt(Bt(Bt({}, So.defaultProps), n), {}, {
    ticks: Mn(n, !0),
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
function vs(e) {
  var t, r, n, i, a, u, c = mg(), l = bg(), f = OJ(), d = Bt(Bt({}, e), {}, {
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
  }), h = d.x, v = d.y, g = d.width, x = d.height, y = d.syncWithTicks, w = d.horizontalValues, A = d.verticalValues, O = xJ(), S = wJ();
  if (!oe(g) || g <= 0 || !oe(x) || x <= 0 || !oe(h) || h !== +h || !oe(v) || v !== +v)
    return null;
  var _ = d.verticalCoordinatesGenerator || bQ, b = d.horizontalCoordinatesGenerator || xQ, E = d.horizontalPoints, C = d.verticalPoints;
  if ((!E || !E.length) && Pe(b)) {
    var M = w && w.length, F = b({
      yAxis: S ? Bt(Bt({}, S), {}, {
        ticks: M ? w : S.ticks
      }) : void 0,
      width: c,
      height: l,
      offset: f
    }, M ? !0 : y);
    Vr(Array.isArray(F), "horizontalCoordinatesGenerator should return Array but instead it returned [".concat(ra(F), "]")), Array.isArray(F) && (E = F);
  }
  if ((!C || !C.length) && Pe(_)) {
    var D = A && A.length, B = _({
      xAxis: O ? Bt(Bt({}, O), {}, {
        ticks: D ? A : O.ticks
      }) : void 0,
      width: c,
      height: l,
      offset: f
    }, D ? !0 : y);
    Vr(Array.isArray(B), "verticalCoordinatesGenerator should return Array but instead it returned [".concat(ra(B), "]")), Array.isArray(B) && (C = B);
  }
  return /* @__PURE__ */ k.createElement("g", {
    className: "recharts-cartesian-grid"
  }, /* @__PURE__ */ k.createElement(pQ, {
    fill: d.fill,
    fillOpacity: d.fillOpacity,
    x: d.x,
    y: d.y,
    width: d.width,
    height: d.height
  }), /* @__PURE__ */ k.createElement(vQ, qi({}, d, {
    offset: f,
    horizontalPoints: E,
    xAxis: O,
    yAxis: S
  })), /* @__PURE__ */ k.createElement(gQ, qi({}, d, {
    offset: f,
    verticalPoints: C,
    xAxis: O,
    yAxis: S
  })), /* @__PURE__ */ k.createElement(yQ, qi({}, d, {
    horizontalPoints: E
  })), /* @__PURE__ */ k.createElement(mQ, qi({}, d, {
    verticalPoints: C
  })));
}
vs.displayName = "CartesianGrid";
var wQ = ["type", "layout", "connectNulls", "ref"];
function no(e) {
  "@babel/helpers - typeof";
  return no = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, no(e);
}
function _Q(e, t) {
  if (e == null) return {};
  var r = OQ(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function OQ(e, t) {
  if (e == null) return {};
  var r = {}, n = Object.keys(e), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
function gu() {
  return gu = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, gu.apply(this, arguments);
}
function m1(e, t) {
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
    t % 2 ? m1(Object(r), !0).forEach(function(n) {
      Gr(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : m1(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Ta(e) {
  return EQ(e) || PQ(e) || SQ(e) || AQ();
}
function AQ() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function SQ(e, t) {
  if (e) {
    if (typeof e == "string") return qp(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return qp(e, t);
  }
}
function PQ(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function EQ(e) {
  if (Array.isArray(e)) return qp(e);
}
function qp(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function TQ(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function b1(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, _S(n.key), n);
  }
}
function $Q(e, t, r) {
  return t && b1(e.prototype, t), r && b1(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function CQ(e, t, r) {
  return t = Al(t), MQ(e, wS() ? Reflect.construct(t, r || [], Al(e).constructor) : t.apply(e, r));
}
function MQ(e, t) {
  if (t && (no(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return si(e);
}
function wS() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (wS = function() {
    return !!e;
  })();
}
function Al(e) {
  return Al = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Al(e);
}
function si(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function IQ(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Vp(e, t);
}
function Vp(e, t) {
  return Vp = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, Vp(e, t);
}
function Gr(e, t, r) {
  return t = _S(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function _S(e) {
  var t = kQ(e, "string");
  return no(t) == "symbol" ? t : String(t);
}
function kQ(e, t) {
  if (no(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (no(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var gs = /* @__PURE__ */ function(e) {
  IQ(t, e);
  function t() {
    var r;
    TQ(this, t);
    for (var n = arguments.length, i = new Array(n), a = 0; a < n; a++)
      i[a] = arguments[a];
    return r = CQ(this, t, [].concat(i)), Gr(si(r), "state", {
      isAnimationFinished: !0,
      totalLength: 0
    }), Gr(si(r), "generateSimpleStrokeDasharray", function(u, c) {
      return "".concat(c, "px ").concat(u - c, "px");
    }), Gr(si(r), "getStrokeDasharray", function(u, c, l) {
      var f = l.reduce(function(A, O) {
        return A + O;
      });
      if (!f)
        return r.generateSimpleStrokeDasharray(c, u);
      for (var d = Math.floor(u / f), h = u % f, v = c - u, g = [], x = 0, y = 0; x < l.length; y += l[x], ++x)
        if (y + l[x] > h) {
          g = [].concat(Ta(l.slice(0, x)), [h - y]);
          break;
        }
      var w = g.length % 2 === 0 ? [0, v] : [v];
      return [].concat(Ta(t.repeat(l, d)), Ta(g), w).map(function(A) {
        return "".concat(A, "px");
      }).join(", ");
    }), Gr(si(r), "id", oa("recharts-line-")), Gr(si(r), "pathRef", function(u) {
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
  return $Q(t, [{
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
      var a = this.props, u = a.points, c = a.xAxis, l = a.yAxis, f = a.layout, d = a.children, h = yr(d, fs);
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
      return /* @__PURE__ */ k.createElement(Le, g, h.map(function(x) {
        return /* @__PURE__ */ k.cloneElement(x, {
          key: "bar-".concat(x.props.dataKey),
          data: u,
          xAxis: c,
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
      var c = this.props, l = c.dot, f = c.points, d = c.dataKey, h = me(this.props, !1), v = me(l, !0), g = f.map(function(y, w) {
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
      }), x = {
        clipPath: n ? "url(#clipPath-".concat(i ? "" : "dots-").concat(a, ")") : null
      };
      return /* @__PURE__ */ k.createElement(Le, gu({
        className: "recharts-line-dots",
        key: "dots"
      }, x), g);
    }
  }, {
    key: "renderCurveStatically",
    value: function(n, i, a, u) {
      var c = this.props, l = c.type, f = c.layout, d = c.connectNulls;
      c.ref;
      var h = _Q(c, wQ), v = lr(lr(lr({}, me(h, !0)), {}, {
        fill: "none",
        className: "recharts-line-curve",
        clipPath: i ? "url(#clipPath-".concat(a, ")") : null,
        points: n
      }, u), {}, {
        type: l,
        layout: f,
        connectNulls: d
      });
      return /* @__PURE__ */ k.createElement(Ji, gu({}, v, {
        pathRef: this.pathRef
      }));
    }
  }, {
    key: "renderCurveWithAnimation",
    value: function(n, i) {
      var a = this, u = this.props, c = u.points, l = u.strokeDasharray, f = u.isAnimationActive, d = u.animationBegin, h = u.animationDuration, v = u.animationEasing, g = u.animationId, x = u.animateNewValues, y = u.width, w = u.height, A = this.state, O = A.prevPoints, S = A.totalLength;
      return /* @__PURE__ */ k.createElement(Xr, {
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
        var b = _.t;
        if (O) {
          var E = O.length / c.length, C = c.map(function(N, U) {
            var z = Math.floor(U * E);
            if (O[z]) {
              var J = O[z], H = St(J.x, N.x), Z = St(J.y, N.y);
              return lr(lr({}, N), {}, {
                x: H(b),
                y: Z(b)
              });
            }
            if (x) {
              var K = St(y * 2, N.x), ue = St(w / 2, N.y);
              return lr(lr({}, N), {}, {
                x: K(b),
                y: ue(b)
              });
            }
            return lr(lr({}, N), {}, {
              x: N.x,
              y: N.y
            });
          });
          return a.renderCurveStatically(C, n, i);
        }
        var M = St(0, S), F = M(b), D;
        if (l) {
          var B = "".concat(l).split(/[,\s]+/gim).map(function(N) {
            return parseFloat(N);
          });
          D = a.getStrokeDasharray(F, S, B);
        } else
          D = a.generateSimpleStrokeDasharray(S, F);
        return a.renderCurveStatically(c, n, i, {
          strokeDasharray: D
        });
      });
    }
  }, {
    key: "renderCurve",
    value: function(n, i) {
      var a = this.props, u = a.points, c = a.isAnimationActive, l = this.state, f = l.prevPoints, d = l.totalLength;
      return c && u && u.length && (!f && d > 0 || !ea(f, u)) ? this.renderCurveWithAnimation(n, i) : this.renderCurveStatically(u, n, i);
    }
  }, {
    key: "render",
    value: function() {
      var n, i = this.props, a = i.hide, u = i.dot, c = i.points, l = i.className, f = i.xAxis, d = i.yAxis, h = i.top, v = i.left, g = i.width, x = i.height, y = i.isAnimationActive, w = i.id;
      if (a || !c || !c.length)
        return null;
      var A = this.state.isAnimationFinished, O = c.length === 1, S = Me("recharts-line", l), _ = f && f.allowDataOverflow, b = d && d.allowDataOverflow, E = _ || b, C = Te(w) ? this.id : w, M = (n = me(u, !1)) !== null && n !== void 0 ? n : {
        r: 3,
        strokeWidth: 2
      }, F = M.r, D = F === void 0 ? 3 : F, B = M.strokeWidth, N = B === void 0 ? 2 : B, U = g_(u) ? u : {}, z = U.clipDot, J = z === void 0 ? !0 : z, H = D * 2 + N;
      return /* @__PURE__ */ k.createElement(Le, {
        className: S
      }, _ || b ? /* @__PURE__ */ k.createElement("defs", null, /* @__PURE__ */ k.createElement("clipPath", {
        id: "clipPath-".concat(C)
      }, /* @__PURE__ */ k.createElement("rect", {
        x: _ ? v : v - g / 2,
        y: b ? h : h - x / 2,
        width: _ ? g : g * 2,
        height: b ? x : x * 2
      })), !J && /* @__PURE__ */ k.createElement("clipPath", {
        id: "clipPath-dots-".concat(C)
      }, /* @__PURE__ */ k.createElement("rect", {
        x: v - H / 2,
        y: h - H / 2,
        width: g + H,
        height: x + H
      }))) : null, !O && this.renderCurve(E, C), this.renderErrorBar(E, C), (O || u) && this.renderDots(E, J, C), (!y || A) && kr.renderCallByParent(this.props, c));
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
      for (var a = n.length % 2 !== 0 ? [].concat(Ta(n), [0]) : n, u = [], c = 0; c < i; ++c)
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
        a = /* @__PURE__ */ k.createElement(ds, gu({}, i, {
          className: u
        }));
      }
      return a;
    }
  }]), t;
}(Nr);
Gr(gs, "displayName", "Line");
Gr(gs, "defaultProps", {
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
Gr(gs, "getComposedData", function(e) {
  var t = e.props, r = e.xAxis, n = e.yAxis, i = e.xAxisTicks, a = e.yAxisTicks, u = e.dataKey, c = e.bandSize, l = e.displayedData, f = e.offset, d = t.layout, h = l.map(function(v, g) {
    var x = bt(v, u);
    return d === "horizontal" ? {
      x: rl({
        axis: r,
        ticks: i,
        bandSize: c,
        entry: v,
        index: g
      }),
      y: Te(x) ? null : n.scale(x),
      value: x,
      payload: v
    } : {
      x: Te(x) ? null : r.scale(x),
      y: rl({
        axis: n,
        ticks: a,
        bandSize: c,
        entry: v,
        index: g
      }),
      value: x,
      payload: v
    };
  });
  return lr({
    points: h,
    layout: d
  }, f);
});
var jQ = ["layout", "type", "stroke", "connectNulls", "isRange", "ref"], OS;
function io(e) {
  "@babel/helpers - typeof";
  return io = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, io(e);
}
function RQ(e, t) {
  if (e == null) return {};
  var r = NQ(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function NQ(e, t) {
  if (e == null) return {};
  var r = {}, n = Object.keys(e), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
function Vi() {
  return Vi = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Vi.apply(this, arguments);
}
function x1(e, t) {
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
    t % 2 ? x1(Object(r), !0).forEach(function(n) {
      un(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : x1(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function DQ(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function w1(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, SS(n.key), n);
  }
}
function LQ(e, t, r) {
  return t && w1(e.prototype, t), r && w1(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function BQ(e, t, r) {
  return t = Sl(t), FQ(e, AS() ? Reflect.construct(t, r || [], Sl(e).constructor) : t.apply(e, r));
}
function FQ(e, t) {
  if (t && (io(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return cu(e);
}
function AS() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (AS = function() {
    return !!e;
  })();
}
function Sl(e) {
  return Sl = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Sl(e);
}
function cu(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function WQ(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Yp(e, t);
}
function Yp(e, t) {
  return Yp = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, Yp(e, t);
}
function un(e, t, r) {
  return t = SS(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function SS(e) {
  var t = zQ(e, "string");
  return io(t) == "symbol" ? t : String(t);
}
function zQ(e, t) {
  if (io(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (io(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Ei = /* @__PURE__ */ function(e) {
  WQ(t, e);
  function t() {
    var r;
    DQ(this, t);
    for (var n = arguments.length, i = new Array(n), a = 0; a < n; a++)
      i[a] = arguments[a];
    return r = BQ(this, t, [].concat(i)), un(cu(r), "state", {
      isAnimationFinished: !0
    }), un(cu(r), "id", oa("recharts-area-")), un(cu(r), "handleAnimationEnd", function() {
      var u = r.props.onAnimationEnd;
      r.setState({
        isAnimationFinished: !0
      }), Pe(u) && u();
    }), un(cu(r), "handleAnimationStart", function() {
      var u = r.props.onAnimationStart;
      r.setState({
        isAnimationFinished: !1
      }), Pe(u) && u();
    }), r;
  }
  return LQ(t, [{
    key: "renderDots",
    value: function(n, i, a) {
      var u = this.props.isAnimationActive, c = this.state.isAnimationFinished;
      if (u && !c)
        return null;
      var l = this.props, f = l.dot, d = l.points, h = l.dataKey, v = me(this.props, !1), g = me(f, !0), x = d.map(function(w, A) {
        var O = ci(ci(ci({
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
      return /* @__PURE__ */ k.createElement(Le, Vi({
        className: "recharts-area-dots"
      }, y), x);
    }
  }, {
    key: "renderHorizontalRect",
    value: function(n) {
      var i = this.props, a = i.baseLine, u = i.points, c = i.strokeWidth, l = u[0].x, f = u[u.length - 1].x, d = n * Math.abs(l - f), h = di(u.map(function(v) {
        return v.y || 0;
      }));
      return oe(a) && typeof a == "number" ? h = Math.max(a, h) : a && Array.isArray(a) && a.length && (h = Math.max(di(a.map(function(v) {
        return v.y || 0;
      })), h)), oe(h) ? /* @__PURE__ */ k.createElement("rect", {
        x: l < f ? l : l - d,
        y: 0,
        width: d,
        height: Math.floor(h + (c ? parseInt("".concat(c), 10) : 1))
      }) : null;
    }
  }, {
    key: "renderVerticalRect",
    value: function(n) {
      var i = this.props, a = i.baseLine, u = i.points, c = i.strokeWidth, l = u[0].y, f = u[u.length - 1].y, d = n * Math.abs(l - f), h = di(u.map(function(v) {
        return v.x || 0;
      }));
      return oe(a) && typeof a == "number" ? h = Math.max(a, h) : a && Array.isArray(a) && a.length && (h = Math.max(di(a.map(function(v) {
        return v.x || 0;
      })), h)), oe(h) ? /* @__PURE__ */ k.createElement("rect", {
        x: 0,
        y: l < f ? l : l - d,
        width: h + (c ? parseInt("".concat(c), 10) : 1),
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
      var c = this.props, l = c.layout, f = c.type, d = c.stroke, h = c.connectNulls, v = c.isRange;
      c.ref;
      var g = RQ(c, jQ);
      return /* @__PURE__ */ k.createElement(Le, {
        clipPath: a ? "url(#clipPath-".concat(u, ")") : null
      }, /* @__PURE__ */ k.createElement(Ji, Vi({}, me(g, !0), {
        points: n,
        connectNulls: h,
        type: f,
        baseLine: i,
        layout: l,
        stroke: "none",
        className: "recharts-area-area"
      })), d !== "none" && /* @__PURE__ */ k.createElement(Ji, Vi({}, me(this.props, !1), {
        className: "recharts-area-curve",
        layout: l,
        type: f,
        connectNulls: h,
        fill: "none",
        points: n
      })), d !== "none" && v && /* @__PURE__ */ k.createElement(Ji, Vi({}, me(this.props, !1), {
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
      var a = this, u = this.props, c = u.points, l = u.baseLine, f = u.isAnimationActive, d = u.animationBegin, h = u.animationDuration, v = u.animationEasing, g = u.animationId, x = this.state, y = x.prevPoints, w = x.prevBaseLine;
      return /* @__PURE__ */ k.createElement(Xr, {
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
          var S = y.length / c.length, _ = c.map(function(M, F) {
            var D = Math.floor(F * S);
            if (y[D]) {
              var B = y[D], N = St(B.x, M.x), U = St(B.y, M.y);
              return ci(ci({}, M), {}, {
                x: N(O),
                y: U(O)
              });
            }
            return M;
          }), b;
          if (oe(l) && typeof l == "number") {
            var E = St(w, l);
            b = E(O);
          } else if (Te(l) || yo(l)) {
            var C = St(w, 0);
            b = C(O);
          } else
            b = l.map(function(M, F) {
              var D = Math.floor(F * S);
              if (w[D]) {
                var B = w[D], N = St(B.x, M.x), U = St(B.y, M.y);
                return ci(ci({}, M), {}, {
                  x: N(O),
                  y: U(O)
                });
              }
              return M;
            });
          return a.renderAreaStatically(_, b, n, i);
        }
        return /* @__PURE__ */ k.createElement(Le, null, /* @__PURE__ */ k.createElement("defs", null, /* @__PURE__ */ k.createElement("clipPath", {
          id: "animationClipPath-".concat(i)
        }, a.renderClipRect(O))), /* @__PURE__ */ k.createElement(Le, {
          clipPath: "url(#animationClipPath-".concat(i, ")")
        }, a.renderAreaStatically(c, l, n, i)));
      });
    }
  }, {
    key: "renderArea",
    value: function(n, i) {
      var a = this.props, u = a.points, c = a.baseLine, l = a.isAnimationActive, f = this.state, d = f.prevPoints, h = f.prevBaseLine, v = f.totalLength;
      return l && u && u.length && (!d && v > 0 || !ea(d, u) || !ea(h, c)) ? this.renderAreaWithAnimation(n, i) : this.renderAreaStatically(u, c, n, i);
    }
  }, {
    key: "render",
    value: function() {
      var n, i = this.props, a = i.hide, u = i.dot, c = i.points, l = i.className, f = i.top, d = i.left, h = i.xAxis, v = i.yAxis, g = i.width, x = i.height, y = i.isAnimationActive, w = i.id;
      if (a || !c || !c.length)
        return null;
      var A = this.state.isAnimationFinished, O = c.length === 1, S = Me("recharts-area", l), _ = h && h.allowDataOverflow, b = v && v.allowDataOverflow, E = _ || b, C = Te(w) ? this.id : w, M = (n = me(u, !1)) !== null && n !== void 0 ? n : {
        r: 3,
        strokeWidth: 2
      }, F = M.r, D = F === void 0 ? 3 : F, B = M.strokeWidth, N = B === void 0 ? 2 : B, U = g_(u) ? u : {}, z = U.clipDot, J = z === void 0 ? !0 : z, H = D * 2 + N;
      return /* @__PURE__ */ k.createElement(Le, {
        className: S
      }, _ || b ? /* @__PURE__ */ k.createElement("defs", null, /* @__PURE__ */ k.createElement("clipPath", {
        id: "clipPath-".concat(C)
      }, /* @__PURE__ */ k.createElement("rect", {
        x: _ ? d : d - g / 2,
        y: b ? f : f - x / 2,
        width: _ ? g : g * 2,
        height: b ? x : x * 2
      })), !J && /* @__PURE__ */ k.createElement("clipPath", {
        id: "clipPath-dots-".concat(C)
      }, /* @__PURE__ */ k.createElement("rect", {
        x: d - H / 2,
        y: f - H / 2,
        width: g + H,
        height: x + H
      }))) : null, O ? null : this.renderArea(E, C), (u || O) && this.renderDots(E, J, C), (!y || A) && kr.renderCallByParent(this.props, c));
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
OS = Ei;
un(Ei, "displayName", "Area");
un(Ei, "defaultProps", {
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
un(Ei, "getBaseValue", function(e, t, r, n) {
  var i = e.layout, a = e.baseValue, u = t.props.baseValue, c = u ?? a;
  if (oe(c) && typeof c == "number")
    return c;
  var l = i === "horizontal" ? n : r, f = l.scale.domain();
  if (l.type === "number") {
    var d = Math.max(f[0], f[1]), h = Math.min(f[0], f[1]);
    return c === "dataMin" ? h : c === "dataMax" || d < 0 ? d : Math.max(Math.min(f[0], f[1]), 0);
  }
  return c === "dataMin" ? f[0] : c === "dataMax" ? f[1] : f[0];
});
un(Ei, "getComposedData", function(e) {
  var t = e.props, r = e.item, n = e.xAxis, i = e.yAxis, a = e.xAxisTicks, u = e.yAxisTicks, c = e.bandSize, l = e.dataKey, f = e.stackedData, d = e.dataStartIndex, h = e.displayedData, v = e.offset, g = t.layout, x = f && f.length, y = OS.getBaseValue(t, r, n, i), w = g === "horizontal", A = !1, O = h.map(function(_, b) {
    var E;
    x ? E = f[d + b] : (E = bt(_, l), Array.isArray(E) ? A = !0 : E = [y, E]);
    var C = E[1] == null || x && bt(_, l) == null;
    return w ? {
      x: rl({
        axis: n,
        ticks: a,
        bandSize: c,
        entry: _,
        index: b
      }),
      y: C ? null : i.scale(E[1]),
      value: E,
      payload: _
    } : {
      x: C ? null : n.scale(E[1]),
      y: rl({
        axis: i,
        ticks: u,
        bandSize: c,
        entry: _,
        index: b
      }),
      value: E,
      payload: _
    };
  }), S;
  return x || A ? S = O.map(function(_) {
    var b = Array.isArray(_.value) ? _.value[0] : null;
    return w ? {
      x: _.x,
      y: b != null && _.y != null ? i.scale(b) : null
    } : {
      x: b != null ? n.scale(b) : null,
      y: _.y
    };
  }) : S = w ? i.scale(y) : n.scale(y), ci({
    points: O,
    baseLine: S,
    layout: g,
    isRange: A
  }, v);
});
un(Ei, "renderDotItem", function(e, t) {
  var r;
  if (/* @__PURE__ */ k.isValidElement(e))
    r = /* @__PURE__ */ k.cloneElement(e, t);
  else if (Pe(e))
    r = e(t);
  else {
    var n = Me("recharts-area-dot", typeof e != "boolean" ? e.className : "");
    r = /* @__PURE__ */ k.createElement(ds, Vi({}, t, {
      className: n
    }));
  }
  return r;
});
function Xp() {
  return Xp = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Xp.apply(this, arguments);
}
var qn = function(t) {
  var r = t.xAxisId, n = mg(), i = bg(), a = vS(r);
  return a == null ? null : (
    // @ts-expect-error the axisOptions type is not exactly what CartesianAxis is expecting.
    /* @__PURE__ */ k.createElement(So, Xp({}, a, {
      className: Me("recharts-".concat(a.axisType, " ").concat(a.axisType), a.className),
      viewBox: {
        x: 0,
        y: 0,
        width: n,
        height: i
      },
      ticksGenerator: function(c) {
        return Mn(c, !0);
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
function Zp() {
  return Zp = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Zp.apply(this, arguments);
}
var Vn = function(t) {
  var r = t.yAxisId, n = mg(), i = bg(), a = gS(r);
  return a == null ? null : (
    // @ts-expect-error the axisOptions type is not exactly what CartesianAxis is expecting.
    /* @__PURE__ */ k.createElement(So, Zp({}, a, {
      className: Me("recharts-".concat(a.axisType, " ").concat(a.axisType), a.className),
      viewBox: {
        x: 0,
        y: 0,
        width: n,
        height: i
      },
      ticksGenerator: function(c) {
        return Mn(c, !0);
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
function _1(e) {
  return KQ(e) || GQ(e) || HQ(e) || UQ();
}
function UQ() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function HQ(e, t) {
  if (e) {
    if (typeof e == "string") return Jp(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Jp(e, t);
  }
}
function GQ(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function KQ(e) {
  if (Array.isArray(e)) return Jp(e);
}
function Jp(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
var Qp = function(t, r, n, i, a) {
  var u = yr(t, xg), c = yr(t, hs), l = [].concat(_1(u), _1(c)), f = yr(t, ps), d = "".concat(i, "Id"), h = i[0], v = r;
  if (l.length && (v = l.reduce(function(y, w) {
    if (w.props[d] === n && cn(w.props, "extendDomain") && oe(w.props[h])) {
      var A = w.props[h];
      return [Math.min(y[0], A), Math.max(y[1], A)];
    }
    return y;
  }, v)), f.length) {
    var g = "".concat(h, "1"), x = "".concat(h, "2");
    v = f.reduce(function(y, w) {
      if (w.props[d] === n && cn(w.props, "extendDomain") && oe(w.props[g]) && oe(w.props[x])) {
        var A = w.props[g], O = w.props[x];
        return [Math.min(y[0], A, O), Math.max(y[1], A, O)];
      }
      return y;
    }, v);
  }
  return a && a.length && (v = a.reduce(function(y, w) {
    return oe(w) ? [Math.min(y[0], w), Math.max(y[1], w)] : y;
  }, v)), v;
}, PS = { exports: {} };
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
    var g = new i(d, h || l, v), x = r ? r + f : f;
    return l._events[x] ? l._events[x].fn ? l._events[x] = [l._events[x], g] : l._events[x].push(g) : (l._events[x] = g, l._eventsCount++), l;
  }
  function u(l, f) {
    --l._eventsCount === 0 ? l._events = new n() : delete l._events[f];
  }
  function c() {
    this._events = new n(), this._eventsCount = 0;
  }
  c.prototype.eventNames = function() {
    var f = [], d, h;
    if (this._eventsCount === 0) return f;
    for (h in d = this._events)
      t.call(d, h) && f.push(r ? h.slice(1) : h);
    return Object.getOwnPropertySymbols ? f.concat(Object.getOwnPropertySymbols(d)) : f;
  }, c.prototype.listeners = function(f) {
    var d = r ? r + f : f, h = this._events[d];
    if (!h) return [];
    if (h.fn) return [h.fn];
    for (var v = 0, g = h.length, x = new Array(g); v < g; v++)
      x[v] = h[v].fn;
    return x;
  }, c.prototype.listenerCount = function(f) {
    var d = r ? r + f : f, h = this._events[d];
    return h ? h.fn ? 1 : h.length : 0;
  }, c.prototype.emit = function(f, d, h, v, g, x) {
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
          return w.fn.call(w.context, d, h, v, g, x), !0;
      }
      for (S = 1, O = new Array(A - 1); S < A; S++)
        O[S - 1] = arguments[S];
      w.fn.apply(w.context, O);
    } else {
      var _ = w.length, b;
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
            if (!O) for (b = 1, O = new Array(A - 1); b < A; b++)
              O[b - 1] = arguments[b];
            w[S].fn.apply(w[S].context, O);
        }
    }
    return !0;
  }, c.prototype.on = function(f, d, h) {
    return a(this, f, d, h, !1);
  }, c.prototype.once = function(f, d, h) {
    return a(this, f, d, h, !0);
  }, c.prototype.removeListener = function(f, d, h, v) {
    var g = r ? r + f : f;
    if (!this._events[g]) return this;
    if (!d)
      return u(this, g), this;
    var x = this._events[g];
    if (x.fn)
      x.fn === d && (!v || x.once) && (!h || x.context === h) && u(this, g);
    else {
      for (var y = 0, w = [], A = x.length; y < A; y++)
        (x[y].fn !== d || v && !x[y].once || h && x[y].context !== h) && w.push(x[y]);
      w.length ? this._events[g] = w.length === 1 ? w[0] : w : u(this, g);
    }
    return this;
  }, c.prototype.removeAllListeners = function(f) {
    var d;
    return f ? (d = r ? r + f : f, this._events[d] && u(this, d)) : (this._events = new n(), this._eventsCount = 0), this;
  }, c.prototype.off = c.prototype.removeListener, c.prototype.addListener = c.prototype.on, c.prefixed = r, c.EventEmitter = c, e.exports = c;
})(PS);
var qQ = PS.exports;
const VQ = /* @__PURE__ */ Je(qQ);
var _h = new VQ(), Oh = "recharts.syncMouseEvents";
function Qu(e) {
  "@babel/helpers - typeof";
  return Qu = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Qu(e);
}
function YQ(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function XQ(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, ES(n.key), n);
  }
}
function ZQ(e, t, r) {
  return t && XQ(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function Ah(e, t, r) {
  return t = ES(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function ES(e) {
  var t = JQ(e, "string");
  return Qu(t) == "symbol" ? t : String(t);
}
function JQ(e, t) {
  if (Qu(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Qu(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var QQ = /* @__PURE__ */ function() {
  function e() {
    YQ(this, e), Ah(this, "activeIndex", 0), Ah(this, "coordinateList", []), Ah(this, "layout", "horizontal");
  }
  return ZQ(e, [{
    key: "setDetails",
    value: function(r) {
      var n, i = r.coordinateList, a = i === void 0 ? null : i, u = r.container, c = u === void 0 ? null : u, l = r.layout, f = l === void 0 ? null : l, d = r.offset, h = d === void 0 ? null : d, v = r.mouseHandlerCallback, g = v === void 0 ? null : v;
      this.coordinateList = (n = a ?? this.coordinateList) !== null && n !== void 0 ? n : [], this.container = c ?? this.container, this.layout = f ?? this.layout, this.offset = h ?? this.offset, this.mouseHandlerCallback = g ?? this.mouseHandlerCallback, this.activeIndex = Math.min(Math.max(this.activeIndex, 0), this.coordinateList.length - 1);
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
        var i = this.container.getBoundingClientRect(), a = i.x, u = i.y, c = i.height, l = this.coordinateList[this.activeIndex].coordinate, f = ((r = window) === null || r === void 0 ? void 0 : r.scrollX) || 0, d = ((n = window) === null || n === void 0 ? void 0 : n.scrollY) || 0, h = a + l + f, v = u + this.offset.top + c / 2 + d;
        this.mouseHandlerCallback({
          pageX: h,
          pageY: v
        });
      }
    }
  }]), e;
}();
function eee(e, t, r) {
  if (r === "number" && t === !0 && Array.isArray(e)) {
    var n = e == null ? void 0 : e[0], i = e == null ? void 0 : e[1];
    if (n && i && oe(n) && oe(i))
      return !0;
  }
  return !1;
}
function tee(e, t, r, n) {
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
function TS(e) {
  var t = e.cx, r = e.cy, n = e.radius, i = e.startAngle, a = e.endAngle, u = it(t, r, n, i), c = it(t, r, n, a);
  return {
    points: [u, c],
    cx: t,
    cy: r,
    radius: n,
    startAngle: i,
    endAngle: a
  };
}
function ree(e, t, r) {
  var n, i, a, u;
  if (e === "horizontal")
    n = t.x, a = n, i = r.top, u = r.top + r.height;
  else if (e === "vertical")
    i = t.y, u = i, n = r.left, a = r.left + r.width;
  else if (t.cx != null && t.cy != null)
    if (e === "centric") {
      var c = t.cx, l = t.cy, f = t.innerRadius, d = t.outerRadius, h = t.angle, v = it(c, l, f, h), g = it(c, l, d, h);
      n = v.x, i = v.y, a = g.x, u = g.y;
    } else
      return TS(t);
  return [{
    x: n,
    y: i
  }, {
    x: a,
    y: u
  }];
}
function es(e) {
  "@babel/helpers - typeof";
  return es = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, es(e);
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
function Oc(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? O1(Object(r), !0).forEach(function(n) {
      nee(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : O1(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function nee(e, t, r) {
  return t = iee(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function iee(e) {
  var t = aee(e, "string");
  return es(t) == "symbol" ? t : String(t);
}
function aee(e, t) {
  if (es(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (es(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function oee(e) {
  var t = e.element, r = e.tooltipEventType, n = e.isActive, i = e.activeCoordinate, a = e.activePayload, u = e.offset, c = e.activeTooltipIndex, l = e.tooltipAxisBandSize, f = e.layout, d = e.chartName;
  if (!t || !t.props.cursor || !n || !i || d !== "ScatterChart" && r !== "axis")
    return null;
  var h, v = Ji;
  if (d === "ScatterChart")
    h = i, v = QV;
  else if (d === "BarChart")
    h = tee(f, i, u, l), v = hg;
  else if (f === "radial") {
    var g = TS(i), x = g.cx, y = g.cy, w = g.radius, A = g.startAngle, O = g.endAngle;
    h = {
      cx: x,
      cy: y,
      startAngle: A,
      endAngle: O,
      innerRadius: w,
      outerRadius: w
    }, v = kA;
  } else
    h = {
      points: ree(f, i, u)
    }, v = Ji;
  var S = Oc(Oc(Oc(Oc({
    stroke: "#ccc",
    pointerEvents: "none"
  }, u), h), me(t.props.cursor, !1)), {}, {
    payload: a,
    payloadIndex: c,
    className: Me("recharts-tooltip-cursor", t.props.cursor.className)
  });
  return /* @__PURE__ */ qr(t.props.cursor) ? /* @__PURE__ */ At(t.props.cursor, S) : /* @__PURE__ */ H1(v, S);
}
var uee = ["item"], see = ["children", "className", "width", "height", "style", "compact", "title", "desc"];
function ao(e) {
  "@babel/helpers - typeof";
  return ao = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ao(e);
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
function A1(e, t) {
  return fee(e) || lee(e, t) || CS(e, t) || cee();
}
function cee() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function lee(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, i, a, u, c = [], l = !0, f = !1;
    try {
      if (a = (r = r.call(e)).next, t !== 0) for (; !(l = (n = a.call(r)).done) && (c.push(n.value), c.length !== t); l = !0) ;
    } catch (d) {
      f = !0, i = d;
    } finally {
      try {
        if (!l && r.return != null && (u = r.return(), Object(u) !== u)) return;
      } finally {
        if (f) throw i;
      }
    }
    return c;
  }
}
function fee(e) {
  if (Array.isArray(e)) return e;
}
function S1(e, t) {
  if (e == null) return {};
  var r = dee(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function dee(e, t) {
  if (e == null) return {};
  var r = {}, n = Object.keys(e), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
function hee(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function pee(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, MS(n.key), n);
  }
}
function vee(e, t, r) {
  return t && pee(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function gee(e, t, r) {
  return t = Pl(t), yee(e, $S() ? Reflect.construct(t, r || [], Pl(e).constructor) : t.apply(e, r));
}
function yee(e, t) {
  if (t && (ao(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return ze(e);
}
function $S() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return ($S = function() {
    return !!e;
  })();
}
function Pl(e) {
  return Pl = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Pl(e);
}
function ze(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function mee(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && ev(e, t);
}
function ev(e, t) {
  return ev = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, ev(e, t);
}
function oo(e) {
  return wee(e) || xee(e) || CS(e) || bee();
}
function bee() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function CS(e, t) {
  if (e) {
    if (typeof e == "string") return tv(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return tv(e, t);
  }
}
function xee(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function wee(e) {
  if (Array.isArray(e)) return tv(e);
}
function tv(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
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
function re(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? P1(Object(r), !0).forEach(function(n) {
      Se(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : P1(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Se(e, t, r) {
  return t = MS(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function MS(e) {
  var t = _ee(e, "string");
  return ao(t) == "symbol" ? t : String(t);
}
function _ee(e, t) {
  if (ao(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (ao(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Oee = {
  xAxis: ["bottom", "top"],
  yAxis: ["left", "right"]
}, Aee = {
  width: "100%",
  height: "100%"
}, IS = {
  x: 0,
  y: 0
};
function Ac(e) {
  return e;
}
var See = function(t, r) {
  return r === "horizontal" ? t.x : r === "vertical" ? t.y : r === "centric" ? t.angle : t.radius;
}, Pee = function(t, r, n, i) {
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
      var u = a.coordinate, c = i.radius;
      return re(re(re({}, i), it(i.cx, i.cy, c, u)), {}, {
        angle: u,
        radius: c
      });
    }
    var l = a.coordinate, f = i.angle;
    return re(re(re({}, i), it(i.cx, i.cy, l, f)), {}, {
      angle: f,
      radius: l
    });
  }
  return IS;
}, cf = function(t, r) {
  var n = r.graphicalItems, i = r.dataStartIndex, a = r.dataEndIndex, u = (n ?? []).reduce(function(c, l) {
    var f = l.props.data;
    return f && f.length ? [].concat(oo(c), oo(f)) : c;
  }, []);
  return u.length > 0 ? u : t && t.length && oe(i) && oe(a) ? t.slice(i, a + 1) : [];
};
function kS(e) {
  return e === "number" ? [0, "auto"] : void 0;
}
var rv = function(t, r, n, i) {
  var a = t.graphicalItems, u = t.tooltipAxis, c = cf(r, t);
  return n < 0 || !a || !a.length || n >= c.length ? null : a.reduce(function(l, f) {
    var d, h = (d = f.props.data) !== null && d !== void 0 ? d : r;
    h && t.dataStartIndex + t.dataEndIndex !== 0 && (h = h.slice(t.dataStartIndex, t.dataEndIndex + 1));
    var v;
    if (u.dataKey && !u.allowDuplicatedCategory) {
      var g = h === void 0 ? c : h;
      v = $c(g, u.dataKey, i);
    } else
      v = h && h[n] || c[n];
    return v ? [].concat(oo(l), [EA(f, v)]) : l;
  }, []);
}, E1 = function(t, r, n, i) {
  var a = i || {
    x: t.chartX,
    y: t.chartY
  }, u = See(a, n), c = t.orderedTooltipTicks, l = t.tooltipAxis, f = t.tooltipTicks, d = TG(u, c, f, l);
  if (d >= 0 && f) {
    var h = f[d] && f[d].value, v = rv(t, r, d, h), g = Pee(n, c, d, a);
    return {
      activeTooltipIndex: d,
      activeLabel: h,
      activePayload: v,
      activeCoordinate: g
    };
  }
  return null;
}, Eee = function(t, r) {
  var n = r.axes, i = r.graphicalItems, a = r.axisType, u = r.axisIdKey, c = r.stackGroups, l = r.dataStartIndex, f = r.dataEndIndex, d = t.layout, h = t.children, v = t.stackOffset, g = wA(d, a);
  return n.reduce(function(x, y) {
    var w, A = y.props, O = A.type, S = A.dataKey, _ = A.allowDataOverflow, b = A.allowDuplicatedCategory, E = A.scale, C = A.ticks, M = A.includeHidden, F = y.props[u];
    if (x[F])
      return x;
    var D = cf(t.data, {
      graphicalItems: i.filter(function(ae) {
        return ae.props[u] === F;
      }),
      dataStartIndex: l,
      dataEndIndex: f
    }), B = D.length, N, U, z;
    eee(y.props.domain, _, O) && (N = bp(y.props.domain, null, _), g && (O === "number" || E !== "auto") && (z = du(D, S, "category")));
    var J = kS(O);
    if (!N || N.length === 0) {
      var H, Z = (H = y.props.domain) !== null && H !== void 0 ? H : J;
      if (S) {
        if (N = du(D, S, O), O === "category" && g) {
          var K = EN(N);
          b && K ? (U = N, N = gl(0, B)) : b || (N = Bx(Z, N, y).reduce(function(ae, ce) {
            return ae.indexOf(ce) >= 0 ? ae : [].concat(oo(ae), [ce]);
          }, []));
        } else if (O === "category")
          b ? N = N.filter(function(ae) {
            return ae !== "" && !Te(ae);
          }) : N = Bx(Z, N, y).reduce(function(ae, ce) {
            return ae.indexOf(ce) >= 0 || ce === "" || Te(ce) ? ae : [].concat(oo(ae), [ce]);
          }, []);
        else if (O === "number") {
          var ue = kG(D, i.filter(function(ae) {
            return ae.props[u] === F && (M || !ae.props.hide);
          }), S, a, d);
          ue && (N = ue);
        }
        g && (O === "number" || E !== "auto") && (z = du(D, S, "category"));
      } else g ? N = gl(0, B) : c && c[F] && c[F].hasStack && O === "number" ? N = v === "expand" ? [0, 1] : PA(c[F].stackGroups, l, f) : N = xA(D, i.filter(function(ae) {
        return ae.props[u] === F && (M || !ae.props.hide);
      }), O, d, !0);
      if (O === "number")
        N = Qp(h, N, F, a, C), Z && (N = bp(Z, N, _));
      else if (O === "category" && Z) {
        var G = Z, X = N.every(function(ae) {
          return G.indexOf(ae) >= 0;
        });
        X && (N = G);
      }
    }
    return re(re({}, x), {}, Se({}, F, re(re({}, y.props), {}, {
      axisType: a,
      domain: N,
      categoricalDomain: z,
      duplicateDomain: U,
      originalDomain: (w = y.props.domain) !== null && w !== void 0 ? w : J,
      isCategorical: g,
      layout: d
    })));
  }, {});
}, Tee = function(t, r) {
  var n = r.graphicalItems, i = r.Axis, a = r.axisType, u = r.axisIdKey, c = r.stackGroups, l = r.dataStartIndex, f = r.dataEndIndex, d = t.layout, h = t.children, v = cf(t.data, {
    graphicalItems: n,
    dataStartIndex: l,
    dataEndIndex: f
  }), g = v.length, x = wA(d, a), y = -1;
  return n.reduce(function(w, A) {
    var O = A.props[u], S = kS("number");
    if (!w[O]) {
      y++;
      var _;
      return x ? _ = gl(0, g) : c && c[O] && c[O].hasStack ? (_ = PA(c[O].stackGroups, l, f), _ = Qp(h, _, O, a)) : (_ = bp(S, xA(v, n.filter(function(b) {
        return b.props[u] === O && !b.props.hide;
      }), "number", d), i.defaultProps.allowDataOverflow), _ = Qp(h, _, O, a)), re(re({}, w), {}, Se({}, O, re(re({
        axisType: a
      }, i.defaultProps), {}, {
        hide: !0,
        orientation: gr(Oee, "".concat(a, ".").concat(y % 2), null),
        domain: _,
        originalDomain: S,
        isCategorical: x,
        layout: d
        // specify scale when no Axis
        // scale: isCategorical ? 'band' : 'linear',
      })));
    }
    return w;
  }, {});
}, $ee = function(t, r) {
  var n = r.axisType, i = n === void 0 ? "xAxis" : n, a = r.AxisComp, u = r.graphicalItems, c = r.stackGroups, l = r.dataStartIndex, f = r.dataEndIndex, d = t.children, h = "".concat(i, "Id"), v = yr(d, a), g = {};
  return v && v.length ? g = Eee(t, {
    axes: v,
    graphicalItems: u,
    axisType: i,
    axisIdKey: h,
    stackGroups: c,
    dataStartIndex: l,
    dataEndIndex: f
  }) : u && u.length && (g = Tee(t, {
    Axis: a,
    graphicalItems: u,
    axisType: i,
    axisIdKey: h,
    stackGroups: c,
    dataStartIndex: l,
    dataEndIndex: f
  })), g;
}, Cee = function(t) {
  var r = fi(t), n = Mn(r, !1, !0);
  return {
    tooltipTicks: n,
    orderedTooltipTicks: Lv(n, function(i) {
      return i.coordinate;
    }),
    tooltipAxis: r,
    tooltipAxisBandSize: nl(r, n)
  };
}, T1 = function(t) {
  var r = t.children, n = t.defaultShowTooltip, i = dr(r, Qa), a = 0, u = 0;
  return t.data && t.data.length !== 0 && (u = t.data.length - 1), i && i.props && (i.props.startIndex >= 0 && (a = i.props.startIndex), i.props.endIndex >= 0 && (u = i.props.endIndex)), {
    chartX: 0,
    chartY: 0,
    dataStartIndex: a,
    dataEndIndex: u,
    activeTooltipIndex: -1,
    isTooltipActive: !!n
  };
}, Mee = function(t) {
  return !t || !t.length ? !1 : t.some(function(r) {
    var n = In(r && r.type);
    return n && n.indexOf("Bar") >= 0;
  });
}, $1 = function(t) {
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
}, Iee = function(t, r) {
  var n = t.props, i = t.graphicalItems, a = t.xAxisMap, u = a === void 0 ? {} : a, c = t.yAxisMap, l = c === void 0 ? {} : c, f = n.width, d = n.height, h = n.children, v = n.margin || {}, g = dr(h, Qa), x = dr(h, za), y = Object.keys(l).reduce(function(b, E) {
    var C = l[E], M = C.orientation;
    return !C.mirror && !C.hide ? re(re({}, b), {}, Se({}, M, b[M] + C.width)) : b;
  }, {
    left: v.left || 0,
    right: v.right || 0
  }), w = Object.keys(u).reduce(function(b, E) {
    var C = u[E], M = C.orientation;
    return !C.mirror && !C.hide ? re(re({}, b), {}, Se({}, M, gr(b, "".concat(M)) + C.height)) : b;
  }, {
    top: v.top || 0,
    bottom: v.bottom || 0
  }), A = re(re({}, w), y), O = A.bottom;
  g && (A.bottom += g.props.height || Qa.defaultProps.height), x && r && (A = MG(A, i, n, r));
  var S = f - A.left - A.right, _ = d - A.top - A.bottom;
  return re(re({
    brushBottom: O
  }, A), {}, {
    // never return negative values for height and width
    width: Math.max(S, 0),
    height: Math.max(_, 0)
  });
}, kee = function(t, r) {
  if (r === "xAxis")
    return t[r].width;
  if (r === "yAxis")
    return t[r].height;
}, lf = function(t) {
  var r, n = t.chartName, i = t.GraphicalChild, a = t.defaultTooltipEventType, u = a === void 0 ? "axis" : a, c = t.validateTooltipEventTypes, l = c === void 0 ? ["axis"] : c, f = t.axisComponents, d = t.legendContent, h = t.formatAxisMap, v = t.defaultProps, g = function(w, A) {
    var O = A.graphicalItems, S = A.stackGroups, _ = A.offset, b = A.updateId, E = A.dataStartIndex, C = A.dataEndIndex, M = w.barSize, F = w.layout, D = w.barGap, B = w.barCategoryGap, N = w.maxBarSize, U = $1(F), z = U.numericAxisName, J = U.cateAxisName, H = Mee(O), Z = [];
    return O.forEach(function(K, ue) {
      var G = cf(w.data, {
        graphicalItems: [K],
        dataStartIndex: E,
        dataEndIndex: C
      }), X = K.props, ae = X.dataKey, ce = X.maxBarSize, he = K.props["".concat(z, "Id")], ge = K.props["".concat(J, "Id")], xe = {}, ye = f.reduce(function(nr, gt) {
        var gn, Yn, Io = A["".concat(gt.axisType, "Map")], Xn = K.props["".concat(gt.axisType, "Id")];
        Io && Io[Xn] || gt.axisType === "zAxis" || (process.env.NODE_ENV !== "production" ? er(!1, "Specifying a(n) ".concat(gt.axisType, "Id requires a corresponding ").concat(
          gt.axisType,
          "Id on the targeted graphical component "
        ).concat((gn = K == null || (Yn = K.type) === null || Yn === void 0 ? void 0 : Yn.displayName) !== null && gn !== void 0 ? gn : "")) : er());
        var xs = Io[Xn];
        return re(re({}, nr), {}, Se(Se({}, gt.axisType, xs), "".concat(gt.axisType, "Ticks"), Mn(xs)));
      }, xe), we = ye[J], ne = ye["".concat(J, "Ticks")], se = S && S[he] && S[he].hasStack && zG(K, S[he].stackGroups), pe = In(K.type).indexOf("Bar") >= 0, j = nl(we, ne), Ee = [], be = H && $G({
        barSize: M,
        stackGroups: S,
        totalSize: kee(ye, J)
      });
      if (pe) {
        var We, lt, at = Te(ce) ? N : ce, Vt = (We = (lt = nl(we, ne, !0)) !== null && lt !== void 0 ? lt : at) !== null && We !== void 0 ? We : 0;
        Ee = CG({
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
      var Lr = K && K.type && K.type.getComposedData;
      Lr && Z.push({
        props: re(re({}, Lr(re(re({}, ye), {}, {
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
          dataEndIndex: C
        }))), {}, Se(Se(Se({
          key: K.key || "item-".concat(ue)
        }, z, ye[z]), J, ye[J]), "animationId", b)),
        childIndex: LN(K, w.children),
        item: K
      });
    }), Z;
  }, x = function(w, A) {
    var O = w.props, S = w.dataStartIndex, _ = w.dataEndIndex, b = w.updateId;
    if (!kb({
      props: O
    }))
      return null;
    var E = O.children, C = O.layout, M = O.stackOffset, F = O.data, D = O.reverseStackOrder, B = $1(C), N = B.numericAxisName, U = B.cateAxisName, z = yr(E, i), J = FG(F, z, "".concat(N, "Id"), "".concat(U, "Id"), M, D), H = f.reduce(function(X, ae) {
      var ce = "".concat(ae.axisType, "Map");
      return re(re({}, X), {}, Se({}, ce, $ee(O, re(re({}, ae), {}, {
        graphicalItems: z,
        stackGroups: ae.axisType === N && J,
        dataStartIndex: S,
        dataEndIndex: _
      }))));
    }, {}), Z = Iee(re(re({}, H), {}, {
      props: O,
      graphicalItems: z
    }), A == null ? void 0 : A.legendBBox);
    Object.keys(H).forEach(function(X) {
      H[X] = h(O, H[X], Z, X.replace("Map", ""), n);
    });
    var K = H["".concat(U, "Map")], ue = Cee(K), G = g(O, re(re({}, H), {}, {
      dataStartIndex: S,
      dataEndIndex: _,
      updateId: b,
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
    mee(w, y);
    function w(A) {
      var O, S, _;
      return hee(this, w), _ = gee(this, w, [A]), Se(ze(_), "eventEmitterSymbol", Symbol("rechartsEventEmitter")), Se(ze(_), "accessibilityManager", new QQ()), Se(ze(_), "handleLegendBBoxUpdate", function(b) {
        if (b) {
          var E = _.state, C = E.dataStartIndex, M = E.dataEndIndex, F = E.updateId;
          _.setState(re({
            legendBBox: b
          }, x({
            props: _.props,
            dataStartIndex: C,
            dataEndIndex: M,
            updateId: F
          }, re(re({}, _.state), {}, {
            legendBBox: b
          }))));
        }
      }), Se(ze(_), "handleReceiveSyncEvent", function(b, E, C) {
        if (_.props.syncId === b) {
          if (C === _.eventEmitterSymbol && typeof _.props.syncMethod != "function")
            return;
          _.applySyncEvent(E);
        }
      }), Se(ze(_), "handleBrushChange", function(b) {
        var E = b.startIndex, C = b.endIndex;
        if (E !== _.state.dataStartIndex || C !== _.state.dataEndIndex) {
          var M = _.state.updateId;
          _.setState(function() {
            return re({
              dataStartIndex: E,
              dataEndIndex: C
            }, x({
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
      }), Se(ze(_), "handleMouseEnter", function(b) {
        var E = _.getMouseInfo(b);
        if (E) {
          var C = re(re({}, E), {}, {
            isTooltipActive: !0
          });
          _.setState(C), _.triggerSyncEvent(C);
          var M = _.props.onMouseEnter;
          Pe(M) && M(C, b);
        }
      }), Se(ze(_), "triggeredAfterMouseMove", function(b) {
        var E = _.getMouseInfo(b), C = E ? re(re({}, E), {}, {
          isTooltipActive: !0
        }) : {
          isTooltipActive: !1
        };
        _.setState(C), _.triggerSyncEvent(C);
        var M = _.props.onMouseMove;
        Pe(M) && M(C, b);
      }), Se(ze(_), "handleItemMouseEnter", function(b) {
        _.setState(function() {
          return {
            isTooltipActive: !0,
            activeItem: b,
            activePayload: b.tooltipPayload,
            activeCoordinate: b.tooltipPosition || {
              x: b.cx,
              y: b.cy
            }
          };
        });
      }), Se(ze(_), "handleItemMouseLeave", function() {
        _.setState(function() {
          return {
            isTooltipActive: !1
          };
        });
      }), Se(ze(_), "handleMouseMove", function(b) {
        b.persist(), _.throttleTriggeredAfterMouseMove(b);
      }), Se(ze(_), "handleMouseLeave", function(b) {
        _.throttleTriggeredAfterMouseMove.cancel();
        var E = {
          isTooltipActive: !1
        };
        _.setState(E), _.triggerSyncEvent(E);
        var C = _.props.onMouseLeave;
        Pe(C) && C(E, b);
      }), Se(ze(_), "handleOuterEvent", function(b) {
        var E = DN(b), C = gr(_.props, "".concat(E));
        if (E && Pe(C)) {
          var M, F;
          /.*touch.*/i.test(E) ? F = _.getMouseInfo(b.changedTouches[0]) : F = _.getMouseInfo(b), C((M = F) !== null && M !== void 0 ? M : {}, b);
        }
      }), Se(ze(_), "handleClick", function(b) {
        var E = _.getMouseInfo(b);
        if (E) {
          var C = re(re({}, E), {}, {
            isTooltipActive: !0
          });
          _.setState(C), _.triggerSyncEvent(C);
          var M = _.props.onClick;
          Pe(M) && M(C, b);
        }
      }), Se(ze(_), "handleMouseDown", function(b) {
        var E = _.props.onMouseDown;
        if (Pe(E)) {
          var C = _.getMouseInfo(b);
          E(C, b);
        }
      }), Se(ze(_), "handleMouseUp", function(b) {
        var E = _.props.onMouseUp;
        if (Pe(E)) {
          var C = _.getMouseInfo(b);
          E(C, b);
        }
      }), Se(ze(_), "handleTouchMove", function(b) {
        b.changedTouches != null && b.changedTouches.length > 0 && _.throttleTriggeredAfterMouseMove(b.changedTouches[0]);
      }), Se(ze(_), "handleTouchStart", function(b) {
        b.changedTouches != null && b.changedTouches.length > 0 && _.handleMouseDown(b.changedTouches[0]);
      }), Se(ze(_), "handleTouchEnd", function(b) {
        b.changedTouches != null && b.changedTouches.length > 0 && _.handleMouseUp(b.changedTouches[0]);
      }), Se(ze(_), "triggerSyncEvent", function(b) {
        _.props.syncId !== void 0 && _h.emit(Oh, _.props.syncId, b, _.eventEmitterSymbol);
      }), Se(ze(_), "applySyncEvent", function(b) {
        var E = _.props, C = E.layout, M = E.syncMethod, F = _.state.updateId, D = b.dataStartIndex, B = b.dataEndIndex;
        if (b.dataStartIndex !== void 0 || b.dataEndIndex !== void 0)
          _.setState(re({
            dataStartIndex: D,
            dataEndIndex: B
          }, x({
            props: _.props,
            dataStartIndex: D,
            dataEndIndex: B,
            updateId: F
          }, _.state)));
        else if (b.activeTooltipIndex !== void 0) {
          var N = b.chartX, U = b.chartY, z = b.activeTooltipIndex, J = _.state, H = J.offset, Z = J.tooltipTicks;
          if (!H)
            return;
          if (typeof M == "function")
            z = M(Z, b);
          else if (M === "value") {
            z = -1;
            for (var K = 0; K < Z.length; K++)
              if (Z[K].value === b.activeLabel) {
                z = K;
                break;
              }
          }
          var ue = re(re({}, H), {}, {
            x: H.left,
            y: H.top
          }), G = Math.min(N, ue.x + ue.width), X = Math.min(U, ue.y + ue.height), ae = Z[z] && Z[z].value, ce = rv(_.state, _.props.data, z), he = Z[z] ? {
            x: C === "horizontal" ? Z[z].coordinate : G,
            y: C === "horizontal" ? X : Z[z].coordinate
          } : IS;
          _.setState(re(re({}, b), {}, {
            activeLabel: ae,
            activeCoordinate: he,
            activePayload: ce,
            activeTooltipIndex: z
          }));
        } else
          _.setState(b);
      }), Se(ze(_), "renderCursor", function(b) {
        var E, C = _.state, M = C.isTooltipActive, F = C.activeCoordinate, D = C.activePayload, B = C.offset, N = C.activeTooltipIndex, U = C.tooltipAxisBandSize, z = _.getTooltipEventType(), J = (E = b.props.active) !== null && E !== void 0 ? E : M, H = _.props.layout, Z = b.key || "_recharts-cursor";
        return /* @__PURE__ */ k.createElement(oee, {
          key: Z,
          activeCoordinate: F,
          activePayload: D,
          activeTooltipIndex: N,
          chartName: n,
          element: b,
          isActive: J,
          layout: H,
          offset: B,
          tooltipAxisBandSize: U,
          tooltipEventType: z
        });
      }), Se(ze(_), "renderPolarAxis", function(b, E, C) {
        var M = gr(b, "type.axisType"), F = gr(_.state, "".concat(M, "Map")), D = F && F[b.props["".concat(M, "Id")]];
        return /* @__PURE__ */ At(b, re(re({}, D), {}, {
          className: Me(M, D.className),
          key: b.key || "".concat(E, "-").concat(C),
          ticks: Mn(D, !0)
        }));
      }), Se(ze(_), "renderPolarGrid", function(b) {
        var E = b.props, C = E.radialLines, M = E.polarAngles, F = E.polarRadius, D = _.state, B = D.radiusAxisMap, N = D.angleAxisMap, U = fi(B), z = fi(N), J = z.cx, H = z.cy, Z = z.innerRadius, K = z.outerRadius;
        return /* @__PURE__ */ At(b, {
          polarAngles: Array.isArray(M) ? M : Mn(z, !0).map(function(ue) {
            return ue.coordinate;
          }),
          polarRadius: Array.isArray(F) ? F : Mn(U, !0).map(function(ue) {
            return ue.coordinate;
          }),
          cx: J,
          cy: H,
          innerRadius: Z,
          outerRadius: K,
          key: b.key || "polar-grid",
          radialLines: C
        });
      }), Se(ze(_), "renderLegend", function() {
        var b = _.state.formattedGraphicalItems, E = _.props, C = E.children, M = E.width, F = E.height, D = _.props.margin || {}, B = M - (D.left || 0) - (D.right || 0), N = mA({
          children: C,
          formattedGraphicalItems: b,
          legendWidth: B,
          legendContent: d
        });
        if (!N)
          return null;
        var U = N.item, z = S1(N, uee);
        return /* @__PURE__ */ At(U, re(re({}, z), {}, {
          chartWidth: M,
          chartHeight: F,
          margin: D,
          onBBoxUpdate: _.handleLegendBBoxUpdate
        }));
      }), Se(ze(_), "renderTooltip", function() {
        var b, E = _.props, C = E.children, M = E.accessibilityLayer, F = dr(C, an);
        if (!F)
          return null;
        var D = _.state, B = D.isTooltipActive, N = D.activeCoordinate, U = D.activePayload, z = D.activeLabel, J = D.offset, H = (b = F.props.active) !== null && b !== void 0 ? b : B;
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
      }), Se(ze(_), "renderBrush", function(b) {
        var E = _.props, C = E.margin, M = E.data, F = _.state, D = F.offset, B = F.dataStartIndex, N = F.dataEndIndex, U = F.updateId;
        return /* @__PURE__ */ At(b, {
          key: b.key || "_recharts-brush",
          onChange: mc(_.handleBrushChange, b.props.onChange),
          data: M,
          x: oe(b.props.x) ? b.props.x : D.left,
          y: oe(b.props.y) ? b.props.y : D.top + D.height + D.brushBottom - (C.bottom || 0),
          width: oe(b.props.width) ? b.props.width : D.width,
          startIndex: B,
          endIndex: N,
          updateId: "brush-".concat(U)
        });
      }), Se(ze(_), "renderReferenceElement", function(b, E, C) {
        if (!b)
          return null;
        var M = ze(_), F = M.clipPathId, D = _.state, B = D.xAxisMap, N = D.yAxisMap, U = D.offset, z = b.props, J = z.xAxisId, H = z.yAxisId;
        return /* @__PURE__ */ At(b, {
          key: b.key || "".concat(E, "-").concat(C),
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
      }), Se(ze(_), "renderActivePoints", function(b) {
        var E = b.item, C = b.activePoint, M = b.basePoint, F = b.childIndex, D = b.isRange, B = [], N = E.props.key, U = E.item.props, z = U.activeDot, J = U.dataKey, H = re(re({
          index: F,
          dataKey: J,
          cx: C.x,
          cy: C.y,
          r: 4,
          fill: fg(E.item),
          strokeWidth: 2,
          stroke: "#fff",
          payload: C.payload,
          value: C.value,
          key: "".concat(N, "-activePoint-").concat(F)
        }, me(z, !1)), Cc(z));
        return B.push(w.renderActiveDot(z, H)), M ? B.push(w.renderActiveDot(z, re(re({}, H), {}, {
          cx: M.x,
          cy: M.y,
          key: "".concat(N, "-basePoint-").concat(F)
        }))) : D && B.push(null), B;
      }), Se(ze(_), "renderGraphicChild", function(b, E, C) {
        var M = _.filterFormatItem(b, E, C);
        if (!M)
          return null;
        var F = _.getTooltipEventType(), D = _.state, B = D.isTooltipActive, N = D.tooltipAxis, U = D.activeTooltipIndex, z = D.activeLabel, J = _.props.children, H = dr(J, an), Z = M.props, K = Z.points, ue = Z.isRange, G = Z.baseLine, X = M.item.props, ae = X.activeDot, ce = X.hide, he = X.activeBar, ge = X.activeShape, xe = !!(!ce && B && H && (ae || he || ge)), ye = {};
        F !== "axis" && H && H.props.trigger === "click" ? ye = {
          onClick: mc(_.handleItemMouseEnter, b.props.onClick)
        } : F !== "axis" && (ye = {
          onMouseLeave: mc(_.handleItemMouseLeave, b.props.onMouseLeave),
          onMouseEnter: mc(_.handleItemMouseEnter, b.props.onMouseEnter)
        });
        var we = /* @__PURE__ */ At(b, re(re({}, M.props), ye));
        function ne(gt) {
          return typeof N.dataKey == "function" ? N.dataKey(gt.payload) : null;
        }
        if (xe)
          if (U >= 0) {
            var se, pe;
            if (N.dataKey && !N.allowDuplicatedCategory) {
              var j = typeof N.dataKey == "function" ? ne : "payload.".concat(N.dataKey.toString());
              se = $c(K, j, z), pe = ue && G && $c(G, j, z);
            } else
              se = K == null ? void 0 : K[U], pe = ue && G && G[U];
            if (ge || he) {
              var Ee = b.props.activeIndex !== void 0 ? b.props.activeIndex : U;
              return [/* @__PURE__ */ At(b, re(re(re({}, M.props), ye), {}, {
                activeIndex: Ee
              })), null, null];
            }
            if (!Te(se))
              return [we].concat(oo(_.renderActivePoints({
                item: M,
                activePoint: se,
                basePoint: pe,
                childIndex: U,
                isRange: ue
              })));
          } else {
            var be, We = (be = _.getItemByXY(_.state.activeCoordinate)) !== null && be !== void 0 ? be : {
              graphicalItem: we
            }, lt = We.graphicalItem, at = lt.item, Vt = at === void 0 ? b : at, Lr = lt.childIndex, nr = re(re(re({}, M.props), ye), {}, {
              activeIndex: Lr
            });
            return [/* @__PURE__ */ At(Vt, nr), null, null];
          }
        return ue ? [we, null, null] : [we, null];
      }), Se(ze(_), "renderCustomized", function(b, E, C) {
        return /* @__PURE__ */ At(b, re(re({
          key: "recharts-customized-".concat(C)
        }, _.props), _.state));
      }), Se(ze(_), "renderMap", {
        CartesianGrid: {
          handler: Ac,
          once: !0
        },
        ReferenceArea: {
          handler: _.renderReferenceElement
        },
        ReferenceLine: {
          handler: Ac
        },
        ReferenceDot: {
          handler: _.renderReferenceElement
        },
        XAxis: {
          handler: Ac
        },
        YAxis: {
          handler: Ac
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
      }), _.clipPathId = "".concat((O = A.id) !== null && O !== void 0 ? O : oa("recharts"), "-clip"), _.throttleTriggeredAfterMouseMove = xO(_.triggeredAfterMouseMove, (S = A.throttleDelay) !== null && S !== void 0 ? S : 1e3 / 60), _.state = {}, _;
    }
    return vee(w, [{
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
        var O = this.props, S = O.children, _ = O.data, b = O.height, E = O.layout, C = dr(S, an);
        if (C) {
          var M = C.props.defaultIndex;
          if (!(typeof M != "number" || M < 0 || M > this.state.tooltipTicks.length)) {
            var F = this.state.tooltipTicks[M] && this.state.tooltipTicks[M].value, D = rv(this.state, _, M, F), B = this.state.tooltipTicks[M].coordinate, N = (this.state.offset.top + b) / 2, U = E === "horizontal", z = U ? {
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
          var _, b;
          this.accessibilityManager.setDetails({
            offset: {
              left: (_ = this.props.margin.left) !== null && _ !== void 0 ? _ : 0,
              top: (b = this.props.margin.top) !== null && b !== void 0 ? b : 0
            }
          });
        }
        return null;
      }
    }, {
      key: "componentDidUpdate",
      value: function(O) {
        jh([dr(O.children, an)], [dr(this.props.children, an)]) || this.displayDefaultTooltip();
      }
    }, {
      key: "componentWillUnmount",
      value: function() {
        this.removeListener(), this.throttleTriggeredAfterMouseMove.cancel();
      }
    }, {
      key: "getTooltipEventType",
      value: function() {
        var O = dr(this.props.children, an);
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
        var S = this.container, _ = S.getBoundingClientRect(), b = lU(_), E = {
          chartX: Math.round(O.pageX - b.left),
          chartY: Math.round(O.pageY - b.top)
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
        var Z = E1(this.state, this.props.data, this.props.layout, M);
        return Z ? re(re({}, E), Z) : null;
      }
    }, {
      key: "inRange",
      value: function(O, S) {
        var _ = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1, b = this.props.layout, E = O / _, C = S / _;
        if (b === "horizontal" || b === "vertical") {
          var M = this.state.offset, F = E >= M.left && E <= M.left + M.width && C >= M.top && C <= M.top + M.height;
          return F ? {
            x: E,
            y: C
          } : null;
        }
        var D = this.state, B = D.angleAxisMap, N = D.radiusAxisMap;
        if (B && N) {
          var U = fi(B);
          return zx({
            x: E,
            y: C
          }, U);
        }
        return null;
      }
    }, {
      key: "parseEventsOfWrapper",
      value: function() {
        var O = this.props.children, S = this.getTooltipEventType(), _ = dr(O, an), b = {};
        _ && S === "axis" && (_.props.trigger === "click" ? b = {
          onClick: this.handleClick
        } : b = {
          onMouseEnter: this.handleMouseEnter,
          onMouseMove: this.handleMouseMove,
          onMouseLeave: this.handleMouseLeave,
          onTouchMove: this.handleTouchMove,
          onTouchStart: this.handleTouchStart,
          onTouchEnd: this.handleTouchEnd
        });
        var E = Cc(this.props, this.handleOuterEvent);
        return re(re({}, E), b);
      }
    }, {
      key: "addListener",
      value: function() {
        _h.on(Oh, this.handleReceiveSyncEvent);
      }
    }, {
      key: "removeListener",
      value: function() {
        _h.removeListener(Oh, this.handleReceiveSyncEvent);
      }
    }, {
      key: "filterFormatItem",
      value: function(O, S, _) {
        for (var b = this.state.formattedGraphicalItems, E = 0, C = b.length; E < C; E++) {
          var M = b[E];
          if (M.item === O || M.props.key === O.key || S === In(M.item.type) && _ === M.childIndex)
            return M;
        }
        return null;
      }
    }, {
      key: "renderClipPath",
      value: function() {
        var O = this.clipPathId, S = this.state.offset, _ = S.left, b = S.top, E = S.height, C = S.width;
        return /* @__PURE__ */ k.createElement("defs", null, /* @__PURE__ */ k.createElement("clipPath", {
          id: O
        }, /* @__PURE__ */ k.createElement("rect", {
          x: _,
          y: b,
          height: E,
          width: C
        })));
      }
    }, {
      key: "getXScales",
      value: function() {
        var O = this.state.xAxisMap;
        return O ? Object.entries(O).reduce(function(S, _) {
          var b = A1(_, 2), E = b[0], C = b[1];
          return re(re({}, S), {}, Se({}, E, C.scale));
        }, {}) : null;
      }
    }, {
      key: "getYScales",
      value: function() {
        var O = this.state.yAxisMap;
        return O ? Object.entries(O).reduce(function(S, _) {
          var b = A1(_, 2), E = b[0], C = b[1];
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
        var S = this.state, _ = S.formattedGraphicalItems, b = S.activeItem;
        if (_ && _.length)
          for (var E = 0, C = _.length; E < C; E++) {
            var M = _[E], F = M.props, D = M.item, B = In(D.type);
            if (B === "Bar") {
              var N = (F.data || []).find(function(H) {
                return kV(O, H);
              });
              if (N)
                return {
                  graphicalItem: M,
                  payload: N
                };
            } else if (B === "RadialBar") {
              var U = (F.data || []).find(function(H) {
                return zx(O, H);
              });
              if (U)
                return {
                  graphicalItem: M,
                  payload: U
                };
            } else if (of(M, b) || uf(M, b) || Ku(M, b)) {
              var z = wX({
                graphicalItem: M,
                activeTooltipItem: b,
                itemData: D.props.data
              }), J = D.props.activeIndex === void 0 ? z : D.props.activeIndex;
              return {
                graphicalItem: re(re({}, M), {}, {
                  childIndex: J
                }),
                payload: Ku(M, b) ? D.props.data[z] : M.props.data[z]
              };
            }
          }
        return null;
      }
    }, {
      key: "render",
      value: function() {
        var O = this;
        if (!kb(this))
          return null;
        var S = this.props, _ = S.children, b = S.className, E = S.width, C = S.height, M = S.style, F = S.compact, D = S.title, B = S.desc, N = S1(S, see), U = me(N, !1);
        if (F)
          return /* @__PURE__ */ k.createElement(a1, {
            state: this.state,
            width: this.props.width,
            height: this.props.height,
            clipPathId: this.clipPathId
          }, /* @__PURE__ */ k.createElement(Nh, yu({}, U, {
            width: E,
            height: C,
            title: D,
            desc: B
          }), this.renderClipPath(), Rb(_, this.renderMap)));
        if (this.props.accessibilityLayer) {
          var z, J;
          U.tabIndex = (z = this.props.tabIndex) !== null && z !== void 0 ? z : 0, U.role = (J = this.props.role) !== null && J !== void 0 ? J : "application", U.onKeyDown = function(Z) {
            O.accessibilityManager.keyboardEvent(Z);
          }, U.onFocus = function() {
            O.accessibilityManager.focus();
          };
        }
        var H = this.parseEventsOfWrapper();
        return /* @__PURE__ */ k.createElement(a1, {
          state: this.state,
          width: this.props.width,
          height: this.props.height,
          clipPathId: this.clipPathId
        }, /* @__PURE__ */ k.createElement("div", yu({
          className: Me("recharts-wrapper", b),
          style: re({
            position: "relative",
            cursor: "default",
            width: E,
            height: C
          }, M)
        }, H, {
          ref: function(K) {
            O.container = K;
          }
        }), /* @__PURE__ */ k.createElement(Nh, yu({}, U, {
          width: E,
          height: C,
          title: D,
          desc: B,
          style: Aee
        }), this.renderClipPath(), Rb(_, this.renderMap)), this.renderLegend(), this.renderTooltip()));
      }
    }]), w;
  }(G1), Se(r, "displayName", n), Se(r, "defaultProps", re({
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
    var A = y.dataKey, O = y.data, S = y.children, _ = y.width, b = y.height, E = y.layout, C = y.stackOffset, M = y.margin, F = w.dataStartIndex, D = w.dataEndIndex;
    if (w.updateId === void 0) {
      var B = T1(y);
      return re(re(re({}, B), {}, {
        updateId: 0
      }, x(re(re({
        props: y
      }, B), {}, {
        updateId: 0
      }), w)), {}, {
        prevDataKey: A,
        prevData: O,
        prevWidth: _,
        prevHeight: b,
        prevLayout: E,
        prevStackOffset: C,
        prevMargin: M,
        prevChildren: S
      });
    }
    if (A !== w.prevDataKey || O !== w.prevData || _ !== w.prevWidth || b !== w.prevHeight || E !== w.prevLayout || C !== w.prevStackOffset || !Ra(M, w.prevMargin)) {
      var N = T1(y), U = {
        // (chartX, chartY) are (0,0) in default state, but we want to keep the last mouse position to avoid
        // any flickering
        chartX: w.chartX,
        chartY: w.chartY,
        // The tooltip should stay active when it was active in the previous render. If this is not
        // the case, the tooltip disappears and immediately re-appears, causing a flickering effect
        isTooltipActive: w.isTooltipActive
      }, z = re(re({}, E1(w, O, E)), {}, {
        updateId: w.updateId + 1
      }), J = re(re(re({}, N), U), z);
      return re(re(re({}, J), x(re({
        props: y
      }, J), w)), {}, {
        prevDataKey: A,
        prevData: O,
        prevWidth: _,
        prevHeight: b,
        prevLayout: E,
        prevStackOffset: C,
        prevMargin: M,
        prevChildren: S
      });
    }
    if (!jh(S, w.prevChildren)) {
      var H, Z, K, ue, G = dr(S, Qa), X = G && (H = (Z = G.props) === null || Z === void 0 ? void 0 : Z.startIndex) !== null && H !== void 0 ? H : F, ae = G && (K = (ue = G.props) === null || ue === void 0 ? void 0 : ue.endIndex) !== null && K !== void 0 ? K : D, ce = X !== F || ae !== D, he = !Te(O), ge = he && !ce ? w.updateId : w.updateId + 1;
      return re(re({
        updateId: ge
      }, x(re(re({
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
    return /* @__PURE__ */ qr(y) ? A = /* @__PURE__ */ At(y, w) : Pe(y) ? A = y(w) : A = /* @__PURE__ */ k.createElement(ds, w), /* @__PURE__ */ k.createElement(Le, {
      className: "recharts-active-dot",
      key: w.key
    }, A);
  }), r;
}, jee = lf({
  chartName: "LineChart",
  GraphicalChild: gs,
  axisComponents: [{
    axisType: "xAxis",
    AxisComp: qn
  }, {
    axisType: "yAxis",
    AxisComp: Vn
  }],
  formatAxisMap: pg
}), jS = lf({
  chartName: "BarChart",
  GraphicalChild: Pi,
  defaultTooltipEventType: "axis",
  validateTooltipEventTypes: ["axis", "item"],
  axisComponents: [{
    axisType: "xAxis",
    AxisComp: qn
  }, {
    axisType: "yAxis",
    AxisComp: Vn
  }],
  formatAxisMap: pg
}), Ree = lf({
  chartName: "PieChart",
  GraphicalChild: Kn,
  validateTooltipEventTypes: ["item"],
  defaultTooltipEventType: "item",
  legendContent: "children",
  axisComponents: [{
    axisType: "angleAxis",
    AxisComp: af
  }, {
    axisType: "radiusAxis",
    AxisComp: rf
  }],
  formatAxisMap: JG,
  defaultProps: {
    layout: "centric",
    startAngle: 0,
    endAngle: 360,
    cx: "50%",
    cy: "50%",
    innerRadius: 0,
    outerRadius: "80%"
  }
}), Nee = lf({
  chartName: "AreaChart",
  GraphicalChild: Ei,
  axisComponents: [{
    axisType: "xAxis",
    AxisComp: qn
  }, {
    axisType: "yAxis",
    AxisComp: Vn
  }],
  formatAxisMap: pg
});
const Dee = wi("", {
  variants: {
    aspect: {
      square: "aspect-square",
      wide: "aspect-video",
      small: "h-40"
    }
  }
}), Lee = { light: "", dark: ".dark" }, RS = V.createContext(null);
function NS() {
  const e = V.useContext(RS);
  if (!e)
    throw new Error("useChart must be used within a <ChartContainer />");
  return e;
}
const Bee = ({
  id: e,
  className: t,
  children: r,
  aspect: n,
  config: i,
  ...a
}, u) => {
  const c = V.useId(), l = `chart-${e || c.replace(/:/g, "")}`, f = V.useRef(null), [d, h] = ln(), v = ns(() => new ResizeObserver(
    (g) => h(g[0].contentRect.height)
  ), []);
  return dv(() => {
    const g = u && "current" in u ? u.current : f.current;
    return g && v.observe(g.parentElement), () => {
      v.disconnect();
    };
  }, [v, u, f]), /* @__PURE__ */ Y(RS.Provider, { value: { config: i }, children: /* @__PURE__ */ nt(
    "div",
    {
      "data-chromatic": "ignore",
      "data-chart": l,
      ref: u || f,
      className: Ht(
        "flex w-full justify-center overflow-visible text-sm [&_.recharts-cartesian-axis-tick_text]:fill-f1-foreground-secondary [&_.recharts-cartesian-grid_line]:stroke-f1-border [&_.recharts-curve.recharts-tooltip-cursor]:stroke-f1-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-none [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-f1-border [&_.recharts-radial-bar-background-sector]:fill-f1-background-secondary [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-f1-background-secondary [&_.recharts-reference-line-line]:stroke-f1-border [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-sector]:outline-none [&_.recharts-surface]:outline-none",
        n ? Dee({ aspect: n }) : "aspect-auto h-full",
        t
      ),
      ...a,
      children: [
        /* @__PURE__ */ Y(Fee, { id: l, config: i }),
        /* @__PURE__ */ Y(
          nU,
          {
            height: d,
            className: "overflow-visible",
            children: r
          }
        )
      ]
    }
  ) });
}, Po = V.forwardRef(Bee);
Po.displayName = "Chart";
const Fee = ({ id: e, config: t }) => {
  const r = Object.entries(t).filter(([n, i]) => i.theme || i.color);
  return r.length ? /* @__PURE__ */ Y(
    "style",
    {
      dangerouslySetInnerHTML: {
        __html: Object.entries(Lee).map(
          ([n, i]) => `
${i} [data-chart=${e}] {
${r.map(([a, u]) => {
            var l;
            const c = ((l = u.theme) == null ? void 0 : l[n]) || u.color;
            return c ? `  --color-${a}: ${c};` : null;
          }).join(`
`)}
}
`
        )
      }
    }
  ) : null;
}, ys = an, Eo = V.forwardRef(
  ({
    active: e,
    payload: t,
    className: r,
    indicator: n = "dot",
    hideLabel: i = !1,
    hideIndicator: a = !1,
    label: u,
    labelFormatter: c,
    labelClassName: l,
    formatter: f,
    yAxisFormatter: d,
    color: h,
    nameKey: v,
    labelKey: g
  }, x) => {
    const { config: y } = NS(), w = V.useMemo(() => {
      var E;
      if (i || !(t != null && t.length))
        return null;
      const [O] = t, S = `${g || O.dataKey || O.name || "value"}`, _ = nv(y, O, S), b = !g && typeof u == "string" ? ((E = y[u]) == null ? void 0 : E.label) || u : _ == null ? void 0 : _.label;
      return c ? /* @__PURE__ */ Y("div", { className: Ht("font-medium", l), children: c(b, t) }) : b ? /* @__PURE__ */ Y("div", { className: Ht("font-medium", l), children: b }) : null;
    }, [
      u,
      c,
      t,
      i,
      l,
      y,
      g
    ]);
    if (!e || !(t != null && t.length))
      return null;
    const A = t.length === 1 && n !== "dot";
    return /* @__PURE__ */ nt(
      "div",
      {
        ref: x,
        className: Ht(
          "grid min-w-[8rem] items-start gap-2 rounded-sm border border-solid border-f1-border bg-f1-background px-3 py-2.5 text-sm shadow-xl",
          r
        ),
        children: [
          A ? null : w,
          /* @__PURE__ */ Y("div", { className: "grid gap-2", children: t.map((O, S) => {
            const _ = `${v || O.name || O.dataKey || "value"}`, b = nv(y, O, _), E = h || O.payload.fill || O.color;
            return /* @__PURE__ */ Y(
              "div",
              {
                className: Ht(
                  "flex w-full items-stretch gap-2 [&>svg]:h-2.5 [&>svg]:w-2.5 [&>svg]:text-f1-foreground",
                  n === "dot" && "items-center"
                ),
                children: f && (O == null ? void 0 : O.value) !== void 0 && O.name ? f(O.value, O.name, O, S, O.payload) : /* @__PURE__ */ nt(fv, { children: [
                  b != null && b.icon ? /* @__PURE__ */ Y(b.icon, {}) : !a && /* @__PURE__ */ Y(
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
                  /* @__PURE__ */ nt(
                    "div",
                    {
                      className: Ht(
                        "flex flex-1 justify-between leading-none",
                        A ? "items-end" : "items-center"
                      ),
                      children: [
                        /* @__PURE__ */ nt("div", { className: "grid gap-2", children: [
                          A ? w : null,
                          /* @__PURE__ */ Y("span", { className: "pr-2 text-f1-foreground", children: (b == null ? void 0 : b.label) || O.name })
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
Eo.displayName = "ChartTooltip";
const Og = za, ff = V.forwardRef(
  ({
    className: e,
    hideIcon: t = !1,
    payload: r,
    verticalAlign: n = "bottom",
    nameKey: i,
    hiddenKey: a,
    leftShift: u = 0
  }, c) => {
    const { config: l } = NS();
    return r != null && r.length ? /* @__PURE__ */ Y(
      "div",
      {
        ref: c,
        className: Ht(
          "relative flex flex-wrap items-center justify-center gap-4 text-f1-foreground-secondary",
          n === "top" ? "pb-2" : "pt-2",
          e
        ),
        style: { marginLeft: u },
        children: r.map((f) => {
          const d = `${i || f.dataKey || "value"}`, h = nv(
            l,
            f,
            d,
            a
          );
          return /* @__PURE__ */ nt(
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
ff.displayName = "ChartLegend";
function nv(e, t, r, n) {
  if (typeof t != "object" || t === null)
    return;
  const i = "payload" in t && typeof t.payload == "object" && t.payload !== null ? t.payload : void 0;
  let a = r;
  if (r in t && typeof t[r] == "string" ? a = t[r] : i && r in i && typeof i[r] == "string" ? a = i[r] : "dataKey" in t && typeof t.dataKey == "string" && (a = t.dataKey), !(n && n === a))
    return a in e ? e[a] : e[r];
}
const Wee = "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict";
let zee = (e = 21) => {
  let t = "", r = crypto.getRandomValues(new Uint8Array(e));
  for (; e--; )
    t += Wee[r[e] & 63];
  return t;
};
const Uee = {
  "chart-1": "hsl(var(--chart-1))",
  "chart-2": "hsl(var(--chart-2))",
  "chart-3": "hsl(var(--chart-3))",
  "chart-4": "hsl(var(--chart-4))",
  "chart-5": "hsl(var(--chart-5))",
  "chart-6": "hsl(var(--chart-6))",
  "chart-7": "hsl(var(--chart-7))",
  "chart-8": "hsl(var(--chart-8))"
}, jn = (e) => {
  const t = Object.values(Uee);
  return t[e % t.length];
};
function df(e, t = "12px Inter, sans-serif") {
  const n = document.createElement("canvas").getContext("2d");
  return n ? (n.font = t, n.measureText(e).width) : 0;
}
const Ag = (e) => ({
  dataKey: "x",
  tickLine: !1,
  axisLine: !1,
  tickMargin: 8,
  tickCount: e == null ? void 0 : e.tickCount,
  tickFormatter: e == null ? void 0 : e.tickFormatter
}), Sg = (e) => ({
  tickLine: !1,
  axisLine: !1,
  tickMargin: 8,
  tickCount: e == null ? void 0 : e.tickCount,
  tickFormatter: e == null ? void 0 : e.tickFormatter
}), hf = () => ({
  vertical: !1,
  strokeDasharray: "4"
});
function To(e) {
  return Nn(e);
}
function Pg(e) {
  return e.map((t) => ({ x: t.label, ...t.values }));
}
const Hee = ({
  index: e,
  visibleTicksCount: t,
  payload: r,
  tickFormatter: n,
  ...i
}) => {
  const a = e === 0, u = e === t - 1;
  return /* @__PURE__ */ Y(gi, { ...i, textAnchor: a ? "start" : u ? "end" : "middle", children: (n == null ? void 0 : n(r.value, r.index)) ?? r.value });
}, Gee = ({
  data: e,
  dataConfig: t,
  xAxis: r,
  yAxis: n,
  canBeBlurred: i,
  lineType: a = "monotoneX",
  aspect: u,
  marginTop: c = 0
}, l) => {
  const { enabled: f } = Vk(), d = Object.keys(t), h = zee(12), v = Pg(e), g = Math.max(
    ...v.flatMap(
      (O) => d.map(
        (S) => df(
          n != null && n.tickFormatter ? n.tickFormatter(`${O[S]}`) : `${O[S]}`
        )
      )
    )
  ), x = (n == null ? void 0 : n.width) ?? g + 20, y = !(n != null && n.hide), w = !(r != null && r.hide), A = !i || !f;
  return /* @__PURE__ */ Y(Po, { config: t, ref: l, aspect: u, children: /* @__PURE__ */ nt(
    Nee,
    {
      accessibilityLayer: !0,
      data: v,
      className: "overflow-visible [&_.recharts-surface]:overflow-visible",
      margin: {
        top: c
      },
      children: [
        /* @__PURE__ */ nt("defs", { children: [
          /* @__PURE__ */ nt(
            "linearGradient",
            {
              id: `${h}-fadeGradient`,
              gradientUnits: "userSpaceOnUse",
              x1: `${y ? x : 0}`,
              y1: "0",
              x2: "100%",
              y2: "0",
              children: [
                /* @__PURE__ */ Y("stop", { offset: "0%", stopColor: "black", stopOpacity: "0" }),
                /* @__PURE__ */ Y("stop", { offset: "1%", stopColor: "white", stopOpacity: "0.1" }),
                /* @__PURE__ */ Y("stop", { offset: "7%", stopColor: "white", stopOpacity: "1" }),
                /* @__PURE__ */ Y("stop", { offset: "93%", stopColor: "white", stopOpacity: "1" }),
                /* @__PURE__ */ Y("stop", { offset: "99%", stopColor: "white", stopOpacity: "0.1" }),
                /* @__PURE__ */ Y("stop", { offset: "100%", stopColor: "black", stopOpacity: "0" })
              ]
            }
          ),
          /* @__PURE__ */ Y(
            "mask",
            {
              id: `${h}-transparent-edges`,
              maskUnits: "userSpaceOnUse",
              maskContentUnits: "userSpaceOnUse",
              children: /* @__PURE__ */ Y(
                "rect",
                {
                  x: "0",
                  y: "0",
                  width: "100%",
                  height: "100%",
                  fill: `url(#${h}-fadeGradient)`
                }
              )
            }
          ),
          d.map((O, S) => /* @__PURE__ */ nt(
            "linearGradient",
            {
              id: `fill${String(O)}-${h}`,
              x1: "0",
              y1: "0",
              x2: "0",
              y2: "1",
              children: [
                /* @__PURE__ */ Y(
                  "stop",
                  {
                    offset: "5%",
                    stopColor: t[O].color || jn(S),
                    stopOpacity: 0.8
                  }
                ),
                /* @__PURE__ */ Y(
                  "stop",
                  {
                    offset: "95%",
                    stopColor: t[O].color || jn(S),
                    stopOpacity: 0.1
                  }
                )
              ]
            },
            S
          ))
        ] }),
        /* @__PURE__ */ Y(
          vs,
          {
            ...hf(),
            mask: `url(#${h}-transparent-edges)`
          }
        ),
        w && /* @__PURE__ */ Y(
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
            tick: Hee
          }
        ),
        y && /* @__PURE__ */ Y(
          Vn,
          {
            tickLine: !1,
            axisLine: !1,
            tickMargin: 8,
            tickCount: n == null ? void 0 : n.tickCount,
            tickFormatter: i && f ? () => "**" : n == null ? void 0 : n.tickFormatter,
            ticks: n == null ? void 0 : n.ticks,
            domain: n == null ? void 0 : n.domain,
            width: x
          }
        ),
        A && /* @__PURE__ */ Y(
          ys,
          {
            cursor: !0,
            content: /* @__PURE__ */ Y(
              Eo,
              {
                indicator: "dot",
                yAxisFormatter: n == null ? void 0 : n.tickFormatter
              }
            )
          }
        ),
        d.map((O, S) => /* @__PURE__ */ Y(
          Ei,
          {
            isAnimationActive: !1,
            dataKey: O,
            type: a,
            mask: `url(#${h}-transparent-edges)`,
            fill: `url(#fill${O}-${h})`,
            fillOpacity: t[O].dashed ? 0 : 0.4,
            stroke: t[O].color || jn(S),
            strokeWidth: 1.5,
            strokeDasharray: t[O].dashed ? "4 4" : void 0
          },
          O
        )),
        Object.keys(t).length > 1 && /* @__PURE__ */ Y(
          Og,
          {
            className: "flex justify-start",
            iconType: "star",
            content: /* @__PURE__ */ Y(
              ff,
              {
                leftShift: y ? Math.round(x) : 0
              }
            )
          }
        )
      ]
    }
  ) });
}, Ene = To(Gee), Kee = ({
  dataConfig: e,
  data: t,
  xAxis: r,
  yAxis: n = { hide: !0 },
  label: i = !1,
  type: a = "simple",
  aspect: u,
  legend: c
}, l) => {
  const f = Object.keys(e), d = Pg(t), h = Math.max(
    ...d.flatMap(
      (v) => f.map(
        (g) => df(
          n != null && n.tickFormatter ? n.tickFormatter(`${v[g]}`) : `${v[g]}`
        )
      )
    )
  );
  return /* @__PURE__ */ Y(Po, { config: e, ref: l, aspect: u, children: /* @__PURE__ */ nt(
    jS,
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
          ys,
          {
            cursor: !0,
            content: /* @__PURE__ */ Y(Eo, { yAxisFormatter: n.tickFormatter })
          }
        ),
        /* @__PURE__ */ Y(vs, { ...hf() }),
        /* @__PURE__ */ Y(
          Vn,
          {
            ...Sg(n),
            tick: !0,
            width: n.width ?? h + 20,
            hide: n.hide
          }
        ),
        /* @__PURE__ */ Y(qn, { ...Ag(r), hide: r == null ? void 0 : r.hide }),
        f.map((v, g) => /* @__PURE__ */ Y(
          Pi,
          {
            isAnimationActive: !1,
            dataKey: v,
            stackId: a === "stacked" || a === "stacked-by-sign" ? "stack" : void 0,
            fill: e[v].color || jn(g),
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
        c && /* @__PURE__ */ Y(
          Og,
          {
            content: /* @__PURE__ */ Y(ff, { nameKey: "label" }),
            align: "center",
            verticalAlign: "bottom",
            layout: "vertical",
            className: "flex-row items-start gap-4 pr-3 pt-2"
          }
        )
      ]
    }
  ) });
}, Tne = To(Kee);
function Tn(e, t, { checkForDefaultPrevented: r = !0 } = {}) {
  return function(i) {
    if (e == null || e(i), r === !1 || !i.defaultPrevented)
      return t == null ? void 0 : t(i);
  };
}
function $ne(e, t) {
  const r = V.createContext(t);
  function n(a) {
    const { children: u, ...c } = a, l = V.useMemo(() => c, Object.values(c));
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
function DS(e, t = []) {
  let r = [];
  function n(a, u) {
    const c = V.createContext(u), l = r.length;
    r = [...r, u];
    function f(h) {
      const { scope: v, children: g, ...x } = h, y = (v == null ? void 0 : v[e][l]) || c, w = V.useMemo(() => x, Object.values(x));
      return /* @__PURE__ */ Y(y.Provider, { value: w, children: g });
    }
    function d(h, v) {
      const g = (v == null ? void 0 : v[e][l]) || c, x = V.useContext(g);
      if (x) return x;
      if (u !== void 0) return u;
      throw new Error(`\`${h}\` must be used within \`${a}\``);
    }
    return f.displayName = a + "Provider", [f, d];
  }
  const i = () => {
    const a = r.map((u) => V.createContext(u));
    return function(c) {
      const l = (c == null ? void 0 : c[e]) || a;
      return V.useMemo(
        () => ({ [`__scope${e}`]: { ...c, [e]: l } }),
        [c, l]
      );
    };
  };
  return i.scopeName = e, [n, qee(i, ...t)];
}
function qee(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const r = () => {
    const n = e.map((i) => ({
      useScope: i(),
      scopeName: i.scopeName
    }));
    return function(a) {
      const u = n.reduce((c, { useScope: l, scopeName: f }) => {
        const h = l(a)[`__scope${f}`];
        return { ...c, ...h };
      }, {});
      return V.useMemo(() => ({ [`__scope${t.scopeName}`]: u }), [u]);
    };
  };
  return r.scopeName = t.scopeName, r;
}
var Vee = [
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
], ca = Vee.reduce((e, t) => {
  const r = V.forwardRef((n, i) => {
    const { asChild: a, ...u } = n, c = a ? gv : t;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ Y(c, { ...u, ref: i });
  });
  return r.displayName = `Primitive.${t}`, { ...e, [t]: r };
}, {});
function Yee(e, t) {
  e && hv.flushSync(() => e.dispatchEvent(t));
}
function $o(e) {
  const t = V.useRef(e);
  return V.useEffect(() => {
    t.current = e;
  }), V.useMemo(() => (...r) => {
    var n;
    return (n = t.current) == null ? void 0 : n.call(t, ...r);
  }, []);
}
function Xee(e, t = globalThis == null ? void 0 : globalThis.document) {
  const r = $o(e);
  V.useEffect(() => {
    const n = (i) => {
      i.key === "Escape" && r(i);
    };
    return t.addEventListener("keydown", n, { capture: !0 }), () => t.removeEventListener("keydown", n, { capture: !0 });
  }, [r, t]);
}
var Zee = "DismissableLayer", iv = "dismissableLayer.update", Jee = "dismissableLayer.pointerDownOutside", Qee = "dismissableLayer.focusOutside", C1, LS = V.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), BS = V.forwardRef(
  (e, t) => {
    const {
      disableOutsidePointerEvents: r = !1,
      onEscapeKeyDown: n,
      onPointerDownOutside: i,
      onFocusOutside: a,
      onInteractOutside: u,
      onDismiss: c,
      ...l
    } = e, f = V.useContext(LS), [d, h] = V.useState(null), v = (d == null ? void 0 : d.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), [, g] = V.useState({}), x = ia(t, (C) => h(C)), y = Array.from(f.layers), [w] = [...f.layersWithOutsidePointerEventsDisabled].slice(-1), A = y.indexOf(w), O = d ? y.indexOf(d) : -1, S = f.layersWithOutsidePointerEventsDisabled.size > 0, _ = O >= A, b = rte((C) => {
      const M = C.target, F = [...f.branches].some((D) => D.contains(M));
      !_ || F || (i == null || i(C), u == null || u(C), C.defaultPrevented || c == null || c());
    }, v), E = nte((C) => {
      const M = C.target;
      [...f.branches].some((D) => D.contains(M)) || (a == null || a(C), u == null || u(C), C.defaultPrevented || c == null || c());
    }, v);
    return Xee((C) => {
      O === f.layers.size - 1 && (n == null || n(C), !C.defaultPrevented && c && (C.preventDefault(), c()));
    }, v), V.useEffect(() => {
      if (d)
        return r && (f.layersWithOutsidePointerEventsDisabled.size === 0 && (C1 = v.body.style.pointerEvents, v.body.style.pointerEvents = "none"), f.layersWithOutsidePointerEventsDisabled.add(d)), f.layers.add(d), M1(), () => {
          r && f.layersWithOutsidePointerEventsDisabled.size === 1 && (v.body.style.pointerEvents = C1);
        };
    }, [d, v, r, f]), V.useEffect(() => () => {
      d && (f.layers.delete(d), f.layersWithOutsidePointerEventsDisabled.delete(d), M1());
    }, [d, f]), V.useEffect(() => {
      const C = () => g({});
      return document.addEventListener(iv, C), () => document.removeEventListener(iv, C);
    }, []), /* @__PURE__ */ Y(
      ca.div,
      {
        ...l,
        ref: x,
        style: {
          pointerEvents: S ? _ ? "auto" : "none" : void 0,
          ...e.style
        },
        onFocusCapture: Tn(e.onFocusCapture, E.onFocusCapture),
        onBlurCapture: Tn(e.onBlurCapture, E.onBlurCapture),
        onPointerDownCapture: Tn(
          e.onPointerDownCapture,
          b.onPointerDownCapture
        )
      }
    );
  }
);
BS.displayName = Zee;
var ete = "DismissableLayerBranch", tte = V.forwardRef((e, t) => {
  const r = V.useContext(LS), n = V.useRef(null), i = ia(t, n);
  return V.useEffect(() => {
    const a = n.current;
    if (a)
      return r.branches.add(a), () => {
        r.branches.delete(a);
      };
  }, [r.branches]), /* @__PURE__ */ Y(ca.div, { ...e, ref: i });
});
tte.displayName = ete;
function rte(e, t = globalThis == null ? void 0 : globalThis.document) {
  const r = $o(e), n = V.useRef(!1), i = V.useRef(() => {
  });
  return V.useEffect(() => {
    const a = (c) => {
      if (c.target && !n.current) {
        let l = function() {
          FS(
            Jee,
            r,
            f,
            { discrete: !0 }
          );
        };
        const f = { originalEvent: c };
        c.pointerType === "touch" ? (t.removeEventListener("click", i.current), i.current = l, t.addEventListener("click", i.current, { once: !0 })) : l();
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
function nte(e, t = globalThis == null ? void 0 : globalThis.document) {
  const r = $o(e), n = V.useRef(!1);
  return V.useEffect(() => {
    const i = (a) => {
      a.target && !n.current && FS(Qee, r, { originalEvent: a }, {
        discrete: !1
      });
    };
    return t.addEventListener("focusin", i), () => t.removeEventListener("focusin", i);
  }, [t, r]), {
    onFocusCapture: () => n.current = !0,
    onBlurCapture: () => n.current = !1
  };
}
function M1() {
  const e = new CustomEvent(iv);
  document.dispatchEvent(e);
}
function FS(e, t, r, { discrete: n }) {
  const i = r.originalEvent.target, a = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: r });
  t && i.addEventListener(e, t, { once: !0 }), n ? Yee(i, a) : i.dispatchEvent(a);
}
var uo = globalThis != null && globalThis.document ? V.useLayoutEffect : () => {
}, ite = V.useId || (() => {
}), ate = 0;
function ote(e) {
  const [t, r] = V.useState(ite());
  return uo(() => {
    r((n) => n ?? String(ate++));
  }, [e]), t ? `radix-${t}` : "";
}
const ute = ["top", "right", "bottom", "left"], yi = Math.min, hr = Math.max, El = Math.round, Sc = Math.floor, mi = (e) => ({
  x: e,
  y: e
}), ste = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, cte = {
  start: "end",
  end: "start"
};
function av(e, t, r) {
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
function Eg(e) {
  return e === "x" ? "y" : "x";
}
function Tg(e) {
  return e === "y" ? "height" : "width";
}
function bi(e) {
  return ["top", "bottom"].includes(Wn(e)) ? "y" : "x";
}
function $g(e) {
  return Eg(bi(e));
}
function lte(e, t, r) {
  r === void 0 && (r = !1);
  const n = Co(e), i = $g(e), a = Tg(i);
  let u = i === "x" ? n === (r ? "end" : "start") ? "right" : "left" : n === "start" ? "bottom" : "top";
  return t.reference[a] > t.floating[a] && (u = Tl(u)), [u, Tl(u)];
}
function fte(e) {
  const t = Tl(e);
  return [ov(e), t, ov(t)];
}
function ov(e) {
  return e.replace(/start|end/g, (t) => cte[t]);
}
function dte(e, t, r) {
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
function hte(e, t, r, n) {
  const i = Co(e);
  let a = dte(Wn(e), r === "start", n);
  return i && (a = a.map((u) => u + "-" + i), t && (a = a.concat(a.map(ov)))), a;
}
function Tl(e) {
  return e.replace(/left|right|bottom|top/g, (t) => ste[t]);
}
function pte(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function WS(e) {
  return typeof e != "number" ? pte(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function $l(e) {
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
function I1(e, t, r) {
  let {
    reference: n,
    floating: i
  } = e;
  const a = bi(t), u = $g(t), c = Tg(u), l = Wn(t), f = a === "y", d = n.x + n.width / 2 - i.width / 2, h = n.y + n.height / 2 - i.height / 2, v = n[c] / 2 - i[c] / 2;
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
      g[u] -= v * (r && f ? -1 : 1);
      break;
    case "end":
      g[u] += v * (r && f ? -1 : 1);
      break;
  }
  return g;
}
const vte = async (e, t, r) => {
  const {
    placement: n = "bottom",
    strategy: i = "absolute",
    middleware: a = [],
    platform: u
  } = r, c = a.filter(Boolean), l = await (u.isRTL == null ? void 0 : u.isRTL(t));
  let f = await u.getElementRects({
    reference: e,
    floating: t,
    strategy: i
  }), {
    x: d,
    y: h
  } = I1(f, n, l), v = n, g = {}, x = 0;
  for (let y = 0; y < c.length; y++) {
    const {
      name: w,
      fn: A
    } = c[y], {
      x: O,
      y: S,
      data: _,
      reset: b
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
    }, b && x <= 50 && (x++, typeof b == "object" && (b.placement && (v = b.placement), b.rects && (f = b.rects === !0 ? await u.getElementRects({
      reference: e,
      floating: t,
      strategy: i
    }) : b.rects), {
      x: d,
      y: h
    } = I1(f, v, l)), y = -1);
  }
  return {
    x: d,
    y: h,
    placement: v,
    strategy: i,
    middlewareData: g
  };
};
async function ts(e, t) {
  var r;
  t === void 0 && (t = {});
  const {
    x: n,
    y: i,
    platform: a,
    rects: u,
    elements: c,
    strategy: l
  } = e, {
    boundary: f = "clippingAncestors",
    rootBoundary: d = "viewport",
    elementContext: h = "floating",
    altBoundary: v = !1,
    padding: g = 0
  } = Fn(t, e), x = WS(g), w = c[v ? h === "floating" ? "reference" : "floating" : h], A = $l(await a.getClippingRect({
    element: (r = await (a.isElement == null ? void 0 : a.isElement(w))) == null || r ? w : w.contextElement || await (a.getDocumentElement == null ? void 0 : a.getDocumentElement(c.floating)),
    boundary: f,
    rootBoundary: d,
    strategy: l
  })), O = h === "floating" ? {
    x: n,
    y: i,
    width: u.floating.width,
    height: u.floating.height
  } : u.reference, S = await (a.getOffsetParent == null ? void 0 : a.getOffsetParent(c.floating)), _ = await (a.isElement == null ? void 0 : a.isElement(S)) ? await (a.getScale == null ? void 0 : a.getScale(S)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, b = $l(a.convertOffsetParentRelativeRectToViewportRelativeRect ? await a.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: c,
    rect: O,
    offsetParent: S,
    strategy: l
  }) : O);
  return {
    top: (A.top - b.top + x.top) / _.y,
    bottom: (b.bottom - A.bottom + x.bottom) / _.y,
    left: (A.left - b.left + x.left) / _.x,
    right: (b.right - A.right + x.right) / _.x
  };
}
const gte = (e) => ({
  name: "arrow",
  options: e,
  async fn(t) {
    const {
      x: r,
      y: n,
      placement: i,
      rects: a,
      platform: u,
      elements: c,
      middlewareData: l
    } = t, {
      element: f,
      padding: d = 0
    } = Fn(e, t) || {};
    if (f == null)
      return {};
    const h = WS(d), v = {
      x: r,
      y: n
    }, g = $g(i), x = Tg(g), y = await u.getDimensions(f), w = g === "y", A = w ? "top" : "left", O = w ? "bottom" : "right", S = w ? "clientHeight" : "clientWidth", _ = a.reference[x] + a.reference[g] - v[g] - a.floating[x], b = v[g] - a.reference[g], E = await (u.getOffsetParent == null ? void 0 : u.getOffsetParent(f));
    let C = E ? E[S] : 0;
    (!C || !await (u.isElement == null ? void 0 : u.isElement(E))) && (C = c.floating[S] || a.floating[x]);
    const M = _ / 2 - b / 2, F = C / 2 - y[x] / 2 - 1, D = yi(h[A], F), B = yi(h[O], F), N = D, U = C - y[x] - B, z = C / 2 - y[x] / 2 + M, J = av(N, z, U), H = !l.arrow && Co(i) != null && z !== J && a.reference[x] / 2 - (z < N ? D : B) - y[x] / 2 < 0, Z = H ? z < N ? z - N : z - U : 0;
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
}), yte = function(e) {
  return e === void 0 && (e = {}), {
    name: "flip",
    options: e,
    async fn(t) {
      var r, n;
      const {
        placement: i,
        middlewareData: a,
        rects: u,
        initialPlacement: c,
        platform: l,
        elements: f
      } = t, {
        mainAxis: d = !0,
        crossAxis: h = !0,
        fallbackPlacements: v,
        fallbackStrategy: g = "bestFit",
        fallbackAxisSideDirection: x = "none",
        flipAlignment: y = !0,
        ...w
      } = Fn(e, t);
      if ((r = a.arrow) != null && r.alignmentOffset)
        return {};
      const A = Wn(i), O = bi(c), S = Wn(c) === c, _ = await (l.isRTL == null ? void 0 : l.isRTL(f.floating)), b = v || (S || !y ? [Tl(c)] : fte(c)), E = x !== "none";
      !v && E && b.push(...hte(c, y, x, _));
      const C = [c, ...b], M = await ts(t, w), F = [];
      let D = ((n = a.flip) == null ? void 0 : n.overflows) || [];
      if (d && F.push(M[A]), h) {
        const z = lte(i, u, _);
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
        let H = (N = D.filter((Z) => Z.overflows[0] <= 0).sort((Z, K) => Z.overflows[1] - K.overflows[1])[0]) == null ? void 0 : N.placement;
        if (!H)
          switch (g) {
            case "bestFit": {
              var U;
              const Z = (U = D.filter((K) => {
                if (E) {
                  const ue = bi(K.placement);
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
              H = c;
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
function k1(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function j1(e) {
  return ute.some((t) => e[t] >= 0);
}
const mte = function(e) {
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
          const a = await ts(t, {
            ...i,
            elementContext: "reference"
          }), u = k1(a, r.reference);
          return {
            data: {
              referenceHiddenOffsets: u,
              referenceHidden: j1(u)
            }
          };
        }
        case "escaped": {
          const a = await ts(t, {
            ...i,
            altBoundary: !0
          }), u = k1(a, r.floating);
          return {
            data: {
              escapedOffsets: u,
              escaped: j1(u)
            }
          };
        }
        default:
          return {};
      }
    }
  };
};
async function bte(e, t) {
  const {
    placement: r,
    platform: n,
    elements: i
  } = e, a = await (n.isRTL == null ? void 0 : n.isRTL(i.floating)), u = Wn(r), c = Co(r), l = bi(r) === "y", f = ["left", "top"].includes(u) ? -1 : 1, d = a && l ? -1 : 1, h = Fn(t, e);
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
  return c && typeof x == "number" && (g = c === "end" ? x * -1 : x), l ? {
    x: g * d,
    y: v * f
  } : {
    x: v * f,
    y: g * d
  };
}
const xte = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(t) {
      var r, n;
      const {
        x: i,
        y: a,
        placement: u,
        middlewareData: c
      } = t, l = await bte(t, e);
      return u === ((r = c.offset) == null ? void 0 : r.placement) && (n = c.arrow) != null && n.alignmentOffset ? {} : {
        x: i + l.x,
        y: a + l.y,
        data: {
          ...l,
          placement: u
        }
      };
    }
  };
}, wte = function(e) {
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
        limiter: c = {
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
      }, d = await ts(t, l), h = bi(Wn(i)), v = Eg(h);
      let g = f[v], x = f[h];
      if (a) {
        const w = v === "y" ? "top" : "left", A = v === "y" ? "bottom" : "right", O = g + d[w], S = g - d[A];
        g = av(O, g, S);
      }
      if (u) {
        const w = h === "y" ? "top" : "left", A = h === "y" ? "bottom" : "right", O = x + d[w], S = x - d[A];
        x = av(O, x, S);
      }
      const y = c.fn({
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
}, _te = function(e) {
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
        offset: c = 0,
        mainAxis: l = !0,
        crossAxis: f = !0
      } = Fn(e, t), d = {
        x: r,
        y: n
      }, h = bi(i), v = Eg(h);
      let g = d[v], x = d[h];
      const y = Fn(c, t), w = typeof y == "number" ? {
        mainAxis: y,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...y
      };
      if (l) {
        const S = v === "y" ? "height" : "width", _ = a.reference[v] - a.floating[S] + w.mainAxis, b = a.reference[v] + a.reference[S] - w.mainAxis;
        g < _ ? g = _ : g > b && (g = b);
      }
      if (f) {
        var A, O;
        const S = v === "y" ? "width" : "height", _ = ["top", "left"].includes(Wn(i)), b = a.reference[h] - a.floating[S] + (_ && ((A = u.offset) == null ? void 0 : A[h]) || 0) + (_ ? 0 : w.crossAxis), E = a.reference[h] + a.reference[S] + (_ ? 0 : ((O = u.offset) == null ? void 0 : O[h]) || 0) - (_ ? w.crossAxis : 0);
        x < b ? x = b : x > E && (x = E);
      }
      return {
        [v]: g,
        [h]: x
      };
    }
  };
}, Ote = function(e) {
  return e === void 0 && (e = {}), {
    name: "size",
    options: e,
    async fn(t) {
      var r, n;
      const {
        placement: i,
        rects: a,
        platform: u,
        elements: c
      } = t, {
        apply: l = () => {
        },
        ...f
      } = Fn(e, t), d = await ts(t, f), h = Wn(i), v = Co(i), g = bi(i) === "y", {
        width: x,
        height: y
      } = a.floating;
      let w, A;
      h === "top" || h === "bottom" ? (w = h, A = v === (await (u.isRTL == null ? void 0 : u.isRTL(c.floating)) ? "start" : "end") ? "left" : "right") : (A = h, w = v === "end" ? "top" : "bottom");
      const O = y - d.top - d.bottom, S = x - d.left - d.right, _ = yi(y - d[w], O), b = yi(x - d[A], S), E = !t.middlewareData.shift;
      let C = _, M = b;
      if ((r = t.middlewareData.shift) != null && r.enabled.x && (M = S), (n = t.middlewareData.shift) != null && n.enabled.y && (C = O), E && !v) {
        const D = hr(d.left, 0), B = hr(d.right, 0), N = hr(d.top, 0), U = hr(d.bottom, 0);
        g ? M = x - 2 * (D !== 0 || B !== 0 ? D + B : hr(d.left, d.right)) : C = y - 2 * (N !== 0 || U !== 0 ? N + U : hr(d.top, d.bottom));
      }
      await l({
        ...t,
        availableWidth: M,
        availableHeight: C
      });
      const F = await u.getDimensions(c.floating);
      return x !== F.width || y !== F.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function pf() {
  return typeof window < "u";
}
function Mo(e) {
  return zS(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function mr(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function vn(e) {
  var t;
  return (t = (zS(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function zS(e) {
  return pf() ? e instanceof Node || e instanceof mr(e).Node : !1;
}
function Zr(e) {
  return pf() ? e instanceof Element || e instanceof mr(e).Element : !1;
}
function dn(e) {
  return pf() ? e instanceof HTMLElement || e instanceof mr(e).HTMLElement : !1;
}
function R1(e) {
  return !pf() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof mr(e).ShadowRoot;
}
function ms(e) {
  const {
    overflow: t,
    overflowX: r,
    overflowY: n,
    display: i
  } = Jr(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + n + r) && !["inline", "contents"].includes(i);
}
function Ate(e) {
  return ["table", "td", "th"].includes(Mo(e));
}
function vf(e) {
  return [":popover-open", ":modal"].some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
function Cg(e) {
  const t = Mg(), r = Zr(e) ? Jr(e) : e;
  return r.transform !== "none" || r.perspective !== "none" || (r.containerType ? r.containerType !== "normal" : !1) || !t && (r.backdropFilter ? r.backdropFilter !== "none" : !1) || !t && (r.filter ? r.filter !== "none" : !1) || ["transform", "perspective", "filter"].some((n) => (r.willChange || "").includes(n)) || ["paint", "layout", "strict", "content"].some((n) => (r.contain || "").includes(n));
}
function Ste(e) {
  let t = xi(e);
  for (; dn(t) && !so(t); ) {
    if (Cg(t))
      return t;
    if (vf(t))
      return null;
    t = xi(t);
  }
  return null;
}
function Mg() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function so(e) {
  return ["html", "body", "#document"].includes(Mo(e));
}
function Jr(e) {
  return mr(e).getComputedStyle(e);
}
function gf(e) {
  return Zr(e) ? {
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
    R1(e) && e.host || // Fallback.
    vn(e)
  );
  return R1(t) ? t.host : t;
}
function US(e) {
  const t = xi(e);
  return so(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : dn(t) && ms(t) ? t : US(t);
}
function rs(e, t, r) {
  var n;
  t === void 0 && (t = []), r === void 0 && (r = !0);
  const i = US(e), a = i === ((n = e.ownerDocument) == null ? void 0 : n.body), u = mr(i);
  if (a) {
    const c = uv(u);
    return t.concat(u, u.visualViewport || [], ms(i) ? i : [], c && r ? rs(c) : []);
  }
  return t.concat(i, rs(i, [], r));
}
function uv(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function HS(e) {
  const t = Jr(e);
  let r = parseFloat(t.width) || 0, n = parseFloat(t.height) || 0;
  const i = dn(e), a = i ? e.offsetWidth : r, u = i ? e.offsetHeight : n, c = El(r) !== a || El(n) !== u;
  return c && (r = a, n = u), {
    width: r,
    height: n,
    $: c
  };
}
function Ig(e) {
  return Zr(e) ? e : e.contextElement;
}
function La(e) {
  const t = Ig(e);
  if (!dn(t))
    return mi(1);
  const r = t.getBoundingClientRect(), {
    width: n,
    height: i,
    $: a
  } = HS(t);
  let u = (a ? El(r.width) : r.width) / n, c = (a ? El(r.height) : r.height) / i;
  return (!u || !Number.isFinite(u)) && (u = 1), (!c || !Number.isFinite(c)) && (c = 1), {
    x: u,
    y: c
  };
}
const Pte = /* @__PURE__ */ mi(0);
function GS(e) {
  const t = mr(e);
  return !Mg() || !t.visualViewport ? Pte : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function Ete(e, t, r) {
  return t === void 0 && (t = !1), !r || t && r !== mr(e) ? !1 : t;
}
function na(e, t, r, n) {
  t === void 0 && (t = !1), r === void 0 && (r = !1);
  const i = e.getBoundingClientRect(), a = Ig(e);
  let u = mi(1);
  t && (n ? Zr(n) && (u = La(n)) : u = La(e));
  const c = Ete(a, r, n) ? GS(a) : mi(0);
  let l = (i.left + c.x) / u.x, f = (i.top + c.y) / u.y, d = i.width / u.x, h = i.height / u.y;
  if (a) {
    const v = mr(a), g = n && Zr(n) ? mr(n) : n;
    let x = v, y = uv(x);
    for (; y && n && g !== x; ) {
      const w = La(y), A = y.getBoundingClientRect(), O = Jr(y), S = A.left + (y.clientLeft + parseFloat(O.paddingLeft)) * w.x, _ = A.top + (y.clientTop + parseFloat(O.paddingTop)) * w.y;
      l *= w.x, f *= w.y, d *= w.x, h *= w.y, l += S, f += _, x = mr(y), y = uv(x);
    }
  }
  return $l({
    width: d,
    height: h,
    x: l,
    y: f
  });
}
function Tte(e) {
  let {
    elements: t,
    rect: r,
    offsetParent: n,
    strategy: i
  } = e;
  const a = i === "fixed", u = vn(n), c = t ? vf(t.floating) : !1;
  if (n === u || c && a)
    return r;
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  }, f = mi(1);
  const d = mi(0), h = dn(n);
  if ((h || !h && !a) && ((Mo(n) !== "body" || ms(u)) && (l = gf(n)), dn(n))) {
    const v = na(n);
    f = La(n), d.x = v.x + n.clientLeft, d.y = v.y + n.clientTop;
  }
  return {
    width: r.width * f.x,
    height: r.height * f.y,
    x: r.x * f.x - l.scrollLeft * f.x + d.x,
    y: r.y * f.y - l.scrollTop * f.y + d.y
  };
}
function $te(e) {
  return Array.from(e.getClientRects());
}
function sv(e, t) {
  const r = gf(e).scrollLeft;
  return t ? t.left + r : na(vn(e)).left + r;
}
function Cte(e) {
  const t = vn(e), r = gf(e), n = e.ownerDocument.body, i = hr(t.scrollWidth, t.clientWidth, n.scrollWidth, n.clientWidth), a = hr(t.scrollHeight, t.clientHeight, n.scrollHeight, n.clientHeight);
  let u = -r.scrollLeft + sv(e);
  const c = -r.scrollTop;
  return Jr(n).direction === "rtl" && (u += hr(t.clientWidth, n.clientWidth) - i), {
    width: i,
    height: a,
    x: u,
    y: c
  };
}
function Mte(e, t) {
  const r = mr(e), n = vn(e), i = r.visualViewport;
  let a = n.clientWidth, u = n.clientHeight, c = 0, l = 0;
  if (i) {
    a = i.width, u = i.height;
    const f = Mg();
    (!f || f && t === "fixed") && (c = i.offsetLeft, l = i.offsetTop);
  }
  return {
    width: a,
    height: u,
    x: c,
    y: l
  };
}
function Ite(e, t) {
  const r = na(e, !0, t === "fixed"), n = r.top + e.clientTop, i = r.left + e.clientLeft, a = dn(e) ? La(e) : mi(1), u = e.clientWidth * a.x, c = e.clientHeight * a.y, l = i * a.x, f = n * a.y;
  return {
    width: u,
    height: c,
    x: l,
    y: f
  };
}
function N1(e, t, r) {
  let n;
  if (t === "viewport")
    n = Mte(e, r);
  else if (t === "document")
    n = Cte(vn(e));
  else if (Zr(t))
    n = Ite(t, r);
  else {
    const i = GS(e);
    n = {
      ...t,
      x: t.x - i.x,
      y: t.y - i.y
    };
  }
  return $l(n);
}
function KS(e, t) {
  const r = xi(e);
  return r === t || !Zr(r) || so(r) ? !1 : Jr(r).position === "fixed" || KS(r, t);
}
function kte(e, t) {
  const r = t.get(e);
  if (r)
    return r;
  let n = rs(e, [], !1).filter((c) => Zr(c) && Mo(c) !== "body"), i = null;
  const a = Jr(e).position === "fixed";
  let u = a ? xi(e) : e;
  for (; Zr(u) && !so(u); ) {
    const c = Jr(u), l = Cg(u);
    !l && c.position === "fixed" && (i = null), (a ? !l && !i : !l && c.position === "static" && !!i && ["absolute", "fixed"].includes(i.position) || ms(u) && !l && KS(e, u)) ? n = n.filter((d) => d !== u) : i = c, u = xi(u);
  }
  return t.set(e, n), n;
}
function jte(e) {
  let {
    element: t,
    boundary: r,
    rootBoundary: n,
    strategy: i
  } = e;
  const u = [...r === "clippingAncestors" ? vf(t) ? [] : kte(t, this._c) : [].concat(r), n], c = u[0], l = u.reduce((f, d) => {
    const h = N1(t, d, i);
    return f.top = hr(h.top, f.top), f.right = yi(h.right, f.right), f.bottom = yi(h.bottom, f.bottom), f.left = hr(h.left, f.left), f;
  }, N1(t, c, i));
  return {
    width: l.right - l.left,
    height: l.bottom - l.top,
    x: l.left,
    y: l.top
  };
}
function Rte(e) {
  const {
    width: t,
    height: r
  } = HS(e);
  return {
    width: t,
    height: r
  };
}
function Nte(e, t, r) {
  const n = dn(t), i = vn(t), a = r === "fixed", u = na(e, !0, a, t);
  let c = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const l = mi(0);
  if (n || !n && !a)
    if ((Mo(t) !== "body" || ms(i)) && (c = gf(t)), n) {
      const g = na(t, !0, a, t);
      l.x = g.x + t.clientLeft, l.y = g.y + t.clientTop;
    } else i && (l.x = sv(i));
  let f = 0, d = 0;
  if (i && !n && !a) {
    const g = i.getBoundingClientRect();
    d = g.top + c.scrollTop, f = g.left + c.scrollLeft - // RTL <body> scrollbar.
    sv(i, g);
  }
  const h = u.left + c.scrollLeft - l.x - f, v = u.top + c.scrollTop - l.y - d;
  return {
    x: h,
    y: v,
    width: u.width,
    height: u.height
  };
}
function Sh(e) {
  return Jr(e).position === "static";
}
function D1(e, t) {
  if (!dn(e) || Jr(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let r = e.offsetParent;
  return vn(e) === r && (r = r.ownerDocument.body), r;
}
function qS(e, t) {
  const r = mr(e);
  if (vf(e))
    return r;
  if (!dn(e)) {
    let i = xi(e);
    for (; i && !so(i); ) {
      if (Zr(i) && !Sh(i))
        return i;
      i = xi(i);
    }
    return r;
  }
  let n = D1(e, t);
  for (; n && Ate(n) && Sh(n); )
    n = D1(n, t);
  return n && so(n) && Sh(n) && !Cg(n) ? r : n || Ste(e) || r;
}
const Dte = async function(e) {
  const t = this.getOffsetParent || qS, r = this.getDimensions, n = await r(e.floating);
  return {
    reference: Nte(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: n.width,
      height: n.height
    }
  };
};
function Lte(e) {
  return Jr(e).direction === "rtl";
}
const Bte = {
  convertOffsetParentRelativeRectToViewportRelativeRect: Tte,
  getDocumentElement: vn,
  getClippingRect: jte,
  getOffsetParent: qS,
  getElementRects: Dte,
  getClientRects: $te,
  getDimensions: Rte,
  getScale: La,
  isElement: Zr,
  isRTL: Lte
};
function Fte(e, t) {
  let r = null, n;
  const i = vn(e);
  function a() {
    var c;
    clearTimeout(n), (c = r) == null || c.disconnect(), r = null;
  }
  function u(c, l) {
    c === void 0 && (c = !1), l === void 0 && (l = 1), a();
    const {
      left: f,
      top: d,
      width: h,
      height: v
    } = e.getBoundingClientRect();
    if (c || t(), !h || !v)
      return;
    const g = Sc(d), x = Sc(i.clientWidth - (f + h)), y = Sc(i.clientHeight - (d + v)), w = Sc(f), O = {
      rootMargin: -g + "px " + -x + "px " + -y + "px " + -w + "px",
      threshold: hr(0, yi(1, l)) || 1
    };
    let S = !0;
    function _(b) {
      const E = b[0].intersectionRatio;
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
function Wte(e, t, r, n) {
  n === void 0 && (n = {});
  const {
    ancestorScroll: i = !0,
    ancestorResize: a = !0,
    elementResize: u = typeof ResizeObserver == "function",
    layoutShift: c = typeof IntersectionObserver == "function",
    animationFrame: l = !1
  } = n, f = Ig(e), d = i || a ? [...f ? rs(f) : [], ...rs(t)] : [];
  d.forEach((A) => {
    i && A.addEventListener("scroll", r, {
      passive: !0
    }), a && A.addEventListener("resize", r);
  });
  const h = f && c ? Fte(f, r) : null;
  let v = -1, g = null;
  u && (g = new ResizeObserver((A) => {
    let [O] = A;
    O && O.target === f && g && (g.unobserve(t), cancelAnimationFrame(v), v = requestAnimationFrame(() => {
      var S;
      (S = g) == null || S.observe(t);
    })), r();
  }), f && !l && g.observe(f), g.observe(t));
  let x, y = l ? na(e) : null;
  l && w();
  function w() {
    const A = na(e);
    y && (A.x !== y.x || A.y !== y.y || A.width !== y.width || A.height !== y.height) && r(), y = A, x = requestAnimationFrame(w);
  }
  return r(), () => {
    var A;
    d.forEach((O) => {
      i && O.removeEventListener("scroll", r), a && O.removeEventListener("resize", r);
    }), h == null || h(), (A = g) == null || A.disconnect(), g = null, l && cancelAnimationFrame(x);
  };
}
const zte = xte, Ute = wte, Hte = yte, Gte = Ote, Kte = mte, L1 = gte, qte = _te, Vte = (e, t, r) => {
  const n = /* @__PURE__ */ new Map(), i = {
    platform: Bte,
    ...r
  }, a = {
    ...i.platform,
    _c: n
  };
  return vte(e, t, {
    ...i,
    platform: a
  });
};
var Tc = typeof document < "u" ? dv : zn;
function Cl(e, t) {
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
        if (!Cl(e[n], t[n]))
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
      if (!(a === "_owner" && e.$$typeof) && !Cl(e[a], t[a]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function VS(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function B1(e, t) {
  const r = VS(e);
  return Math.round(t * r) / r;
}
function Ph(e) {
  const t = V.useRef(e);
  return Tc(() => {
    t.current = e;
  }), t;
}
function Yte(e) {
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
    transform: c = !0,
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
  Cl(v, n) || g(n);
  const [x, y] = V.useState(null), [w, A] = V.useState(null), O = V.useCallback((K) => {
    K !== E.current && (E.current = K, y(K));
  }, []), S = V.useCallback((K) => {
    K !== C.current && (C.current = K, A(K));
  }, []), _ = a || x, b = u || w, E = V.useRef(null), C = V.useRef(null), M = V.useRef(d), F = l != null, D = Ph(l), B = Ph(i), N = Ph(f), U = V.useCallback(() => {
    if (!E.current || !C.current)
      return;
    const K = {
      placement: t,
      strategy: r,
      middleware: v
    };
    B.current && (K.platform = B.current), Vte(E.current, C.current, K).then((ue) => {
      const G = {
        ...ue,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: N.current !== !1
      };
      z.current && !Cl(M.current, G) && (M.current = G, hv.flushSync(() => {
        h(G);
      }));
    });
  }, [v, t, r, B, N]);
  Tc(() => {
    f === !1 && M.current.isPositioned && (M.current.isPositioned = !1, h((K) => ({
      ...K,
      isPositioned: !1
    })));
  }, [f]);
  const z = V.useRef(!1);
  Tc(() => (z.current = !0, () => {
    z.current = !1;
  }), []), Tc(() => {
    if (_ && (E.current = _), b && (C.current = b), _ && b) {
      if (D.current)
        return D.current(_, b, U);
      U();
    }
  }, [_, b, U, D, F]);
  const J = V.useMemo(() => ({
    reference: E,
    floating: C,
    setReference: O,
    setFloating: S
  }), [O, S]), H = V.useMemo(() => ({
    reference: _,
    floating: b
  }), [_, b]), Z = V.useMemo(() => {
    const K = {
      position: r,
      left: 0,
      top: 0
    };
    if (!H.floating)
      return K;
    const ue = B1(H.floating, d.x), G = B1(H.floating, d.y);
    return c ? {
      ...K,
      transform: "translate(" + ue + "px, " + G + "px)",
      ...VS(H.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: r,
      left: ue,
      top: G
    };
  }, [r, c, H.floating, d.x, d.y]);
  return V.useMemo(() => ({
    ...d,
    update: U,
    refs: J,
    elements: H,
    floatingStyles: Z
  }), [d, U, J, H, Z]);
}
const Xte = (e) => {
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
      return n && t(n) ? n.current != null ? L1({
        element: n.current,
        padding: i
      }).fn(r) : {} : n ? L1({
        element: n,
        padding: i
      }).fn(r) : {};
    }
  };
}, Zte = (e, t) => ({
  ...zte(e),
  options: [e, t]
}), Jte = (e, t) => ({
  ...Ute(e),
  options: [e, t]
}), Qte = (e, t) => ({
  ...qte(e),
  options: [e, t]
}), ere = (e, t) => ({
  ...Hte(e),
  options: [e, t]
}), tre = (e, t) => ({
  ...Gte(e),
  options: [e, t]
}), rre = (e, t) => ({
  ...Kte(e),
  options: [e, t]
}), nre = (e, t) => ({
  ...Xte(e),
  options: [e, t]
});
var ire = "Arrow", YS = V.forwardRef((e, t) => {
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
YS.displayName = ire;
var are = YS;
function ore(e) {
  const [t, r] = V.useState(void 0);
  return uo(() => {
    if (e) {
      r({ width: e.offsetWidth, height: e.offsetHeight });
      const n = new ResizeObserver((i) => {
        if (!Array.isArray(i) || !i.length)
          return;
        const a = i[0];
        let u, c;
        if ("borderBoxSize" in a) {
          const l = a.borderBoxSize, f = Array.isArray(l) ? l[0] : l;
          u = f.inlineSize, c = f.blockSize;
        } else
          u = e.offsetWidth, c = e.offsetHeight;
        r({ width: u, height: c });
      });
      return n.observe(e, { box: "border-box" }), () => n.unobserve(e);
    } else
      r(void 0);
  }, [e]), t;
}
var kg = "Popper", [XS, ZS] = DS(kg), [ure, JS] = XS(kg), QS = (e) => {
  const { __scopePopper: t, children: r } = e, [n, i] = V.useState(null);
  return /* @__PURE__ */ Y(ure, { scope: t, anchor: n, onAnchorChange: i, children: r });
};
QS.displayName = kg;
var eP = "PopperAnchor", tP = V.forwardRef(
  (e, t) => {
    const { __scopePopper: r, virtualRef: n, ...i } = e, a = JS(eP, r), u = V.useRef(null), c = ia(t, u);
    return V.useEffect(() => {
      a.onAnchorChange((n == null ? void 0 : n.current) || u.current);
    }), n ? null : /* @__PURE__ */ Y(ca.div, { ...i, ref: c });
  }
);
tP.displayName = eP;
var jg = "PopperContent", [sre, cre] = XS(jg), rP = V.forwardRef(
  (e, t) => {
    var ye, we, ne, se, pe, j;
    const {
      __scopePopper: r,
      side: n = "bottom",
      sideOffset: i = 0,
      align: a = "center",
      alignOffset: u = 0,
      arrowPadding: c = 0,
      avoidCollisions: l = !0,
      collisionBoundary: f = [],
      collisionPadding: d = 0,
      sticky: h = "partial",
      hideWhenDetached: v = !1,
      updatePositionStrategy: g = "optimized",
      onPlaced: x,
      ...y
    } = e, w = JS(jg, r), [A, O] = V.useState(null), S = ia(t, (Ee) => O(Ee)), [_, b] = V.useState(null), E = ore(_), C = (E == null ? void 0 : E.width) ?? 0, M = (E == null ? void 0 : E.height) ?? 0, F = n + (a !== "center" ? "-" + a : ""), D = typeof d == "number" ? d : { top: 0, right: 0, bottom: 0, left: 0, ...d }, B = Array.isArray(f) ? f : [f], N = B.length > 0, U = {
      padding: D,
      boundary: B.filter(fre),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: N
    }, { refs: z, floatingStyles: J, placement: H, isPositioned: Z, middlewareData: K } = Yte({
      // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
      strategy: "fixed",
      placement: F,
      whileElementsMounted: (...Ee) => Wte(...Ee, {
        animationFrame: g === "always"
      }),
      elements: {
        reference: w.anchor
      },
      middleware: [
        Zte({ mainAxis: i + M, alignmentAxis: u }),
        l && Jte({
          mainAxis: !0,
          crossAxis: !1,
          limiter: h === "partial" ? Qte() : void 0,
          ...U
        }),
        l && ere({ ...U }),
        tre({
          ...U,
          apply: ({ elements: Ee, rects: be, availableWidth: We, availableHeight: lt }) => {
            const { width: at, height: Vt } = be.reference, Lr = Ee.floating.style;
            Lr.setProperty("--radix-popper-available-width", `${We}px`), Lr.setProperty("--radix-popper-available-height", `${lt}px`), Lr.setProperty("--radix-popper-anchor-width", `${at}px`), Lr.setProperty("--radix-popper-anchor-height", `${Vt}px`);
          }
        }),
        _ && nre({ element: _, padding: c }),
        dre({ arrowWidth: C, arrowHeight: M }),
        v && rre({ strategy: "referenceHidden", ...U })
      ]
    }), [ue, G] = aP(H), X = $o(x);
    uo(() => {
      Z && (X == null || X());
    }, [Z, X]);
    const ae = (ye = K.arrow) == null ? void 0 : ye.x, ce = (we = K.arrow) == null ? void 0 : we.y, he = ((ne = K.arrow) == null ? void 0 : ne.centerOffset) !== 0, [ge, xe] = V.useState();
    return uo(() => {
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
          sre,
          {
            scope: r,
            placedSide: ue,
            onArrowChange: b,
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
rP.displayName = jg;
var nP = "PopperArrow", lre = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
}, iP = V.forwardRef(function(t, r) {
  const { __scopePopper: n, ...i } = t, a = cre(nP, n), u = lre[a.placedSide];
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
          are,
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
iP.displayName = nP;
function fre(e) {
  return e !== null;
}
var dre = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    var w, A, O;
    const { placement: r, rects: n, middlewareData: i } = t, u = ((w = i.arrow) == null ? void 0 : w.centerOffset) !== 0, c = u ? 0 : e.arrowWidth, l = u ? 0 : e.arrowHeight, [f, d] = aP(r), h = { start: "0%", center: "50%", end: "100%" }[d], v = (((A = i.arrow) == null ? void 0 : A.x) ?? 0) + c / 2, g = (((O = i.arrow) == null ? void 0 : O.y) ?? 0) + l / 2;
    let x = "", y = "";
    return f === "bottom" ? (x = u ? h : `${v}px`, y = `${-l}px`) : f === "top" ? (x = u ? h : `${v}px`, y = `${n.floating.height + l}px`) : f === "right" ? (x = `${-l}px`, y = u ? h : `${g}px`) : f === "left" && (x = `${n.floating.width + l}px`, y = u ? h : `${g}px`), { data: { x, y } };
  }
});
function aP(e) {
  const [t, r = "center"] = e.split("-");
  return [t, r];
}
var hre = QS, pre = tP, vre = rP, gre = iP;
function yre(e, t) {
  return V.useReducer((r, n) => t[r][n] ?? r, e);
}
var oP = (e) => {
  const { present: t, children: r } = e, n = mre(t), i = typeof r == "function" ? r({ present: n.isPresent }) : V.Children.only(r), a = ia(n.ref, bre(i));
  return typeof r == "function" || n.isPresent ? V.cloneElement(i, { ref: a }) : null;
};
oP.displayName = "Presence";
function mre(e) {
  const [t, r] = V.useState(), n = V.useRef({}), i = V.useRef(e), a = V.useRef("none"), u = e ? "mounted" : "unmounted", [c, l] = yre(u, {
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
    const f = Pc(n.current);
    a.current = c === "mounted" ? f : "none";
  }, [c]), uo(() => {
    const f = n.current, d = i.current;
    if (d !== e) {
      const v = a.current, g = Pc(f);
      e ? l("MOUNT") : g === "none" || (f == null ? void 0 : f.display) === "none" ? l("UNMOUNT") : l(d && v !== g ? "ANIMATION_OUT" : "UNMOUNT"), i.current = e;
    }
  }, [e, l]), uo(() => {
    if (t) {
      const f = (h) => {
        const g = Pc(n.current).includes(h.animationName);
        h.target === t && g && hv.flushSync(() => l("ANIMATION_END"));
      }, d = (h) => {
        h.target === t && (a.current = Pc(n.current));
      };
      return t.addEventListener("animationstart", d), t.addEventListener("animationcancel", f), t.addEventListener("animationend", f), () => {
        t.removeEventListener("animationstart", d), t.removeEventListener("animationcancel", f), t.removeEventListener("animationend", f);
      };
    } else
      l("ANIMATION_END");
  }, [t, l]), {
    isPresent: ["mounted", "unmountSuspended"].includes(c),
    ref: V.useCallback((f) => {
      f && (n.current = getComputedStyle(f)), r(f);
    }, [])
  };
}
function Pc(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function bre(e) {
  var n, i;
  let t = (n = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : n.get, r = t && "isReactWarning" in t && t.isReactWarning;
  return r ? e.ref : (t = (i = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : i.get, r = t && "isReactWarning" in t && t.isReactWarning, r ? e.props.ref : e.props.ref || e.ref);
}
function xre({
  prop: e,
  defaultProp: t,
  onChange: r = () => {
  }
}) {
  const [n, i] = wre({ defaultProp: t, onChange: r }), a = e !== void 0, u = a ? e : n, c = $o(r), l = V.useCallback(
    (f) => {
      if (a) {
        const h = typeof f == "function" ? f(e) : f;
        h !== e && c(h);
      } else
        i(f);
    },
    [a, e, i, c]
  );
  return [u, l];
}
function wre({
  defaultProp: e,
  onChange: t
}) {
  const r = V.useState(e), [n] = r, i = V.useRef(n), a = $o(t);
  return V.useEffect(() => {
    i.current !== n && (a(n), i.current = n);
  }, [n, i, a]), r;
}
var _re = "VisuallyHidden", uP = V.forwardRef(
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
uP.displayName = _re;
var Ore = uP, [yf, Cne] = DS("Tooltip", [
  ZS
]), mf = ZS(), sP = "TooltipProvider", Are = 700, cv = "tooltip.open", [Sre, Rg] = yf(sP), cP = (e) => {
  const {
    __scopeTooltip: t,
    delayDuration: r = Are,
    skipDelayDuration: n = 300,
    disableHoverableContent: i = !1,
    children: a
  } = e, [u, c] = V.useState(!0), l = V.useRef(!1), f = V.useRef(0);
  return V.useEffect(() => {
    const d = f.current;
    return () => window.clearTimeout(d);
  }, []), /* @__PURE__ */ Y(
    Sre,
    {
      scope: t,
      isOpenDelayed: u,
      delayDuration: r,
      onOpen: V.useCallback(() => {
        window.clearTimeout(f.current), c(!1);
      }, []),
      onClose: V.useCallback(() => {
        window.clearTimeout(f.current), f.current = window.setTimeout(
          () => c(!0),
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
cP.displayName = sP;
var bf = "Tooltip", [Pre, xf] = yf(bf), lP = (e) => {
  const {
    __scopeTooltip: t,
    children: r,
    open: n,
    defaultOpen: i = !1,
    onOpenChange: a,
    disableHoverableContent: u,
    delayDuration: c
  } = e, l = Rg(bf, e.__scopeTooltip), f = mf(t), [d, h] = V.useState(null), v = ote(), g = V.useRef(0), x = u ?? l.disableHoverableContent, y = c ?? l.delayDuration, w = V.useRef(!1), [A = !1, O] = xre({
    prop: n,
    defaultProp: i,
    onChange: (C) => {
      C ? (l.onOpen(), document.dispatchEvent(new CustomEvent(cv))) : l.onClose(), a == null || a(C);
    }
  }), S = V.useMemo(() => A ? w.current ? "delayed-open" : "instant-open" : "closed", [A]), _ = V.useCallback(() => {
    window.clearTimeout(g.current), w.current = !1, O(!0);
  }, [O]), b = V.useCallback(() => {
    window.clearTimeout(g.current), O(!1);
  }, [O]), E = V.useCallback(() => {
    window.clearTimeout(g.current), g.current = window.setTimeout(() => {
      w.current = !0, O(!0);
    }, y);
  }, [y, O]);
  return V.useEffect(() => () => window.clearTimeout(g.current), []), /* @__PURE__ */ Y(hre, { ...f, children: /* @__PURE__ */ Y(
    Pre,
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
        x ? b() : window.clearTimeout(g.current);
      }, [b, x]),
      onOpen: _,
      onClose: b,
      disableHoverableContent: x,
      children: r
    }
  ) });
};
lP.displayName = bf;
var lv = "TooltipTrigger", fP = V.forwardRef(
  (e, t) => {
    const { __scopeTooltip: r, ...n } = e, i = xf(lv, r), a = Rg(lv, r), u = mf(r), c = V.useRef(null), l = ia(t, c, i.onTriggerChange), f = V.useRef(!1), d = V.useRef(!1), h = V.useCallback(() => f.current = !1, []);
    return V.useEffect(() => () => document.removeEventListener("pointerup", h), [h]), /* @__PURE__ */ Y(pre, { asChild: !0, ...u, children: /* @__PURE__ */ Y(
      ca.button,
      {
        "aria-describedby": i.open ? i.contentId : void 0,
        "data-state": i.stateAttribute,
        ...n,
        ref: l,
        onPointerMove: Tn(e.onPointerMove, (v) => {
          v.pointerType !== "touch" && !d.current && !a.isPointerInTransitRef.current && (i.onTriggerEnter(), d.current = !0);
        }),
        onPointerLeave: Tn(e.onPointerLeave, () => {
          i.onTriggerLeave(), d.current = !1;
        }),
        onPointerDown: Tn(e.onPointerDown, () => {
          f.current = !0, document.addEventListener("pointerup", h, { once: !0 });
        }),
        onFocus: Tn(e.onFocus, () => {
          f.current || i.onOpen();
        }),
        onBlur: Tn(e.onBlur, i.onClose),
        onClick: Tn(e.onClick, i.onClose)
      }
    ) });
  }
);
fP.displayName = lv;
var Ere = "TooltipPortal", [Mne, Tre] = yf(Ere, {
  forceMount: void 0
}), co = "TooltipContent", dP = V.forwardRef(
  (e, t) => {
    const r = Tre(co, e.__scopeTooltip), { forceMount: n = r.forceMount, side: i = "top", ...a } = e, u = xf(co, e.__scopeTooltip);
    return /* @__PURE__ */ Y(oP, { present: n || u.open, children: u.disableHoverableContent ? /* @__PURE__ */ Y(hP, { side: i, ...a, ref: t }) : /* @__PURE__ */ Y($re, { side: i, ...a, ref: t }) });
  }
), $re = V.forwardRef((e, t) => {
  const r = xf(co, e.__scopeTooltip), n = Rg(co, e.__scopeTooltip), i = V.useRef(null), a = ia(t, i), [u, c] = V.useState(null), { trigger: l, onClose: f } = r, d = i.current, { onPointerInTransitChange: h } = n, v = V.useCallback(() => {
    c(null), h(!1);
  }, [h]), g = V.useCallback(
    (x, y) => {
      const w = x.currentTarget, A = { x: x.clientX, y: x.clientY }, O = kre(A, w.getBoundingClientRect()), S = jre(A, O), _ = Rre(y.getBoundingClientRect()), b = Dre([...S, ..._]);
      c(b), h(!0);
    },
    [h]
  );
  return V.useEffect(() => () => v(), [v]), V.useEffect(() => {
    if (l && d) {
      const x = (w) => g(w, d), y = (w) => g(w, l);
      return l.addEventListener("pointerleave", x), d.addEventListener("pointerleave", y), () => {
        l.removeEventListener("pointerleave", x), d.removeEventListener("pointerleave", y);
      };
    }
  }, [l, d, g, v]), V.useEffect(() => {
    if (u) {
      const x = (y) => {
        const w = y.target, A = { x: y.clientX, y: y.clientY }, O = (l == null ? void 0 : l.contains(w)) || (d == null ? void 0 : d.contains(w)), S = !Nre(A, u);
        O ? v() : S && (v(), f());
      };
      return document.addEventListener("pointermove", x), () => document.removeEventListener("pointermove", x);
    }
  }, [l, d, u, f, v]), /* @__PURE__ */ Y(hP, { ...e, ref: a });
}), [Cre, Mre] = yf(bf, { isInside: !1 }), hP = V.forwardRef(
  (e, t) => {
    const {
      __scopeTooltip: r,
      children: n,
      "aria-label": i,
      onEscapeKeyDown: a,
      onPointerDownOutside: u,
      ...c
    } = e, l = xf(co, r), f = mf(r), { onClose: d } = l;
    return V.useEffect(() => (document.addEventListener(cv, d), () => document.removeEventListener(cv, d)), [d]), V.useEffect(() => {
      if (l.trigger) {
        const h = (v) => {
          const g = v.target;
          g != null && g.contains(l.trigger) && d();
        };
        return window.addEventListener("scroll", h, { capture: !0 }), () => window.removeEventListener("scroll", h, { capture: !0 });
      }
    }, [l.trigger, d]), /* @__PURE__ */ Y(
      BS,
      {
        asChild: !0,
        disableOutsidePointerEvents: !1,
        onEscapeKeyDown: a,
        onPointerDownOutside: u,
        onFocusOutside: (h) => h.preventDefault(),
        onDismiss: d,
        children: /* @__PURE__ */ nt(
          vre,
          {
            "data-state": l.stateAttribute,
            ...f,
            ...c,
            ref: t,
            style: {
              ...c.style,
              "--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
              "--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
              "--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
              "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
              "--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)"
            },
            children: [
              /* @__PURE__ */ Y(n_, { children: n }),
              /* @__PURE__ */ Y(Cre, { scope: r, isInside: !0, children: /* @__PURE__ */ Y(Ore, { id: l.contentId, role: "tooltip", children: i || n }) })
            ]
          }
        )
      }
    );
  }
);
dP.displayName = co;
var pP = "TooltipArrow", Ire = V.forwardRef(
  (e, t) => {
    const { __scopeTooltip: r, ...n } = e, i = mf(r);
    return Mre(
      pP,
      r
    ).isInside ? null : /* @__PURE__ */ Y(gre, { ...i, ...n, ref: t });
  }
);
Ire.displayName = pP;
function kre(e, t) {
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
function jre(e, t, r = 5) {
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
function Rre(e) {
  const { top: t, right: r, bottom: n, left: i } = e;
  return [
    { x: i, y: t },
    { x: r, y: t },
    { x: r, y: n },
    { x: i, y: n }
  ];
}
function Nre(e, t) {
  const { x: r, y: n } = e;
  let i = !1;
  for (let a = 0, u = t.length - 1; a < t.length; u = a++) {
    const c = t[a].x, l = t[a].y, f = t[u].x, d = t[u].y;
    l > n != d > n && r < (f - c) * (n - l) / (d - l) + c && (i = !i);
  }
  return i;
}
function Dre(e) {
  const t = e.slice();
  return t.sort((r, n) => r.x < n.x ? -1 : r.x > n.x ? 1 : r.y < n.y ? -1 : r.y > n.y ? 1 : 0), Lre(t);
}
function Lre(e) {
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
var Bre = cP, Fre = lP, Wre = fP, vP = dP;
const zre = Bre, Ure = Fre, Hre = Wre, gP = V.forwardRef(({ className: e, sideOffset: t = 4, ...r }, n) => /* @__PURE__ */ Y(
  vP,
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
gP.displayName = vP.displayName;
const Gre = ({ data: e, legend: t = !0 }, r) => {
  const n = e.reduce((i, a) => i + a.value, 0);
  return /* @__PURE__ */ nt(zre, { children: [
    /* @__PURE__ */ Y("div", { className: "w-full", ref: r, children: /* @__PURE__ */ Y("div", { className: "flex h-2 gap-1 overflow-hidden", children: e.map((i, a) => {
      const u = i.value / n * 100, c = i.color || jn(a), l = (f) => {
        const d = f / n * 100;
        return d % 1 === 0 ? d.toFixed(0) : d.toFixed(1);
      };
      return /* @__PURE__ */ nt(Ure, { children: [
        /* @__PURE__ */ Y(
          Hre,
          {
            className: "h-full cursor-default overflow-hidden rounded-2xs",
            style: { width: `${u}%` },
            title: i.name,
            asChild: !0,
            children: /* @__PURE__ */ Y(
              "div",
              {
                className: "h-full w-full",
                style: { backgroundColor: c },
                role: "img",
                title: i.name,
                tabIndex: 0
              }
            )
          }
        ),
        /* @__PURE__ */ nt(gP, { className: "flex items-center gap-1 text-sm", children: [
          /* @__PURE__ */ Y(
            "div",
            {
              className: "h-2.5 w-2.5 shrink-0 translate-y-px rounded-full",
              style: { backgroundColor: c }
            }
          ),
          /* @__PURE__ */ Y("span", { className: "pl-0.5 pr-2 text-f1-foreground-secondary", children: i.name }),
          /* @__PURE__ */ nt("span", { className: "font-mono font-medium tabular-nums text-f1-foreground", children: [
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
        className: "mt-1 flex w-full flex-wrap gap-x-2.5 gap-y-0.5",
        role: "list",
        children: e.map((i, a) => {
          const u = i.color || jn(a);
          return /* @__PURE__ */ nt(
            "div",
            {
              className: "flex items-center gap-1",
              role: "listitem",
              children: [
                /* @__PURE__ */ Y(
                  "div",
                  {
                    className: "h-2 w-2 shrink-0 translate-y-px rounded-full",
                    style: { backgroundColor: u }
                  }
                ),
                /* @__PURE__ */ Y("span", { className: "text-sm tracking-wide text-f1-foreground-secondary", children: i.name })
              ]
            },
            i.name
          );
        })
      }
    )
  ] });
}, Ine = To(Gre), Kre = ({
  data: e,
  dataConfig: t,
  xAxis: r,
  yAxis: n = { hide: !0 },
  lineType: i = "natural",
  aspect: a
}, u) => {
  const c = Object.keys(t), l = Pg(e), f = Math.max(
    ...l.flatMap(
      (d) => c.map(
        (h) => df(
          n != null && n.tickFormatter ? n.tickFormatter(`${d[h]}`) : `${d[h]}`
        )
      )
    )
  );
  return /* @__PURE__ */ Y(Po, { config: t, ref: u, aspect: a, children: /* @__PURE__ */ nt(
    jee,
    {
      accessibilityLayer: !0,
      data: l,
      margin: { left: n && !n.hide ? 0 : 12, right: 12 },
      children: [
        /* @__PURE__ */ Y(vs, { ...hf() }),
        !(r != null && r.hide) && /* @__PURE__ */ Y(qn, { ...Ag(r) }),
        !(n != null && n.hide) && /* @__PURE__ */ Y(
          Vn,
          {
            ...Sg(n),
            width: n.width ?? f + 20
          }
        ),
        /* @__PURE__ */ Y(
          ys,
          {
            cursor: !0,
            content: /* @__PURE__ */ Y(Eo, { yAxisFormatter: n == null ? void 0 : n.tickFormatter })
          }
        ),
        c.map((d, h) => /* @__PURE__ */ Y(
          gs,
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
}, kne = To(Kre), qre = ({ data: e, dataConfig: t, overview: r, aspect: n, tickFormatter: i }, a) => {
  const u = e.map((f, d) => {
    var h;
    return {
      ...f,
      fill: ((h = t[f.label]) == null ? void 0 : h.color) || jn(d)
    };
  }), l = e.map((f) => f.value).reduce((f, d) => f + d);
  return l === 0 && u.push({
    label: "-",
    value: 1,
    fill: "hsl(var(--neutral-2))"
  }), /* @__PURE__ */ Y(
    Po,
    {
      config: t,
      ref: a,
      aspect: n,
      "data-chromatic": "ignore",
      style: { height: 380 },
      children: /* @__PURE__ */ nt(Ree, { accessibilityLayer: !0, margin: { left: 0, right: 0 }, children: [
        l !== 0 && /* @__PURE__ */ Y(
          ys,
          {
            cursor: !0,
            content: /* @__PURE__ */ Y(Eo, { yAxisFormatter: i })
          }
        ),
        /* @__PURE__ */ Y(
          Kn,
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
                    return /* @__PURE__ */ nt(
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
          Og,
          {
            content: /* @__PURE__ */ Y(ff, { nameKey: "label", hiddenKey: "-" }),
            align: "center",
            verticalAlign: "bottom",
            layout: "vertical",
            className: "flex-row items-start gap-4 pr-3 pt-2"
          }
        )
      ] })
    }
  );
}, jne = To(qre);
var Ml = { exports: {} };
/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
Ml.exports;
(function(e, t) {
  (function() {
    var r, n = "4.17.21", i = 200, a = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", u = "Expected a function", c = "Invalid `variable` option passed into `_.template`", l = "__lodash_hash_undefined__", f = 500, d = "__lodash_placeholder__", h = 1, v = 2, g = 4, x = 1, y = 2, w = 1, A = 2, O = 4, S = 8, _ = 16, b = 32, E = 64, C = 128, M = 256, F = 512, D = 30, B = "...", N = 800, U = 16, z = 1, J = 2, H = 3, Z = 1 / 0, K = 9007199254740991, ue = 17976931348623157e292, G = NaN, X = 4294967295, ae = X - 1, ce = X >>> 1, he = [
      ["ary", C],
      ["bind", w],
      ["bindKey", A],
      ["curry", S],
      ["curryRight", _],
      ["flip", F],
      ["partial", b],
      ["partialRight", E],
      ["rearg", M]
    ], ge = "[object Arguments]", xe = "[object Array]", ye = "[object AsyncFunction]", we = "[object Boolean]", ne = "[object Date]", se = "[object DOMException]", pe = "[object Error]", j = "[object Function]", Ee = "[object GeneratorFunction]", be = "[object Map]", We = "[object Number]", lt = "[object Null]", at = "[object Object]", Vt = "[object Promise]", Lr = "[object Proxy]", nr = "[object RegExp]", gt = "[object Set]", gn = "[object String]", Yn = "[object Symbol]", Io = "[object Undefined]", Xn = "[object WeakMap]", xs = "[object WeakSet]", ko = "[object ArrayBuffer]", la = "[object DataView]", wf = "[object Float32Array]", _f = "[object Float64Array]", Of = "[object Int8Array]", Af = "[object Int16Array]", Sf = "[object Int32Array]", Pf = "[object Uint8Array]", Ef = "[object Uint8ClampedArray]", Tf = "[object Uint16Array]", $f = "[object Uint32Array]", wP = /\b__p \+= '';/g, _P = /\b(__p \+=) '' \+/g, OP = /(__e\(.*?\)|\b__t\)) \+\n'';/g, Dg = /&(?:amp|lt|gt|quot|#39);/g, Lg = /[&<>"']/g, AP = RegExp(Dg.source), SP = RegExp(Lg.source), PP = /<%-([\s\S]+?)%>/g, EP = /<%([\s\S]+?)%>/g, Bg = /<%=([\s\S]+?)%>/g, TP = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, $P = /^\w*$/, CP = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Cf = /[\\^$.*+?()[\]{}|]/g, MP = RegExp(Cf.source), Mf = /^\s+/, IP = /\s/, kP = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, jP = /\{\n\/\* \[wrapped with (.+)\] \*/, RP = /,? & /, NP = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, DP = /[()=,{}\[\]\/\s]/, LP = /\\(\\)?/g, BP = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, Fg = /\w*$/, FP = /^[-+]0x[0-9a-f]+$/i, WP = /^0b[01]+$/i, zP = /^\[object .+?Constructor\]$/, UP = /^0o[0-7]+$/i, HP = /^(?:0|[1-9]\d*)$/, GP = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, ws = /($^)/, KP = /['\n\r\u2028\u2029\\]/g, _s = "\\ud800-\\udfff", qP = "\\u0300-\\u036f", VP = "\\ufe20-\\ufe2f", YP = "\\u20d0-\\u20ff", Wg = qP + VP + YP, zg = "\\u2700-\\u27bf", Ug = "a-z\\xdf-\\xf6\\xf8-\\xff", XP = "\\xac\\xb1\\xd7\\xf7", ZP = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", JP = "\\u2000-\\u206f", QP = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", Hg = "A-Z\\xc0-\\xd6\\xd8-\\xde", Gg = "\\ufe0e\\ufe0f", Kg = XP + ZP + JP + QP, If = "['’]", eE = "[" + _s + "]", qg = "[" + Kg + "]", Os = "[" + Wg + "]", Vg = "\\d+", tE = "[" + zg + "]", Yg = "[" + Ug + "]", Xg = "[^" + _s + Kg + Vg + zg + Ug + Hg + "]", kf = "\\ud83c[\\udffb-\\udfff]", rE = "(?:" + Os + "|" + kf + ")", Zg = "[^" + _s + "]", jf = "(?:\\ud83c[\\udde6-\\uddff]){2}", Rf = "[\\ud800-\\udbff][\\udc00-\\udfff]", fa = "[" + Hg + "]", Jg = "\\u200d", Qg = "(?:" + Yg + "|" + Xg + ")", nE = "(?:" + fa + "|" + Xg + ")", ey = "(?:" + If + "(?:d|ll|m|re|s|t|ve))?", ty = "(?:" + If + "(?:D|LL|M|RE|S|T|VE))?", ry = rE + "?", ny = "[" + Gg + "]?", iE = "(?:" + Jg + "(?:" + [Zg, jf, Rf].join("|") + ")" + ny + ry + ")*", aE = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", oE = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", iy = ny + ry + iE, uE = "(?:" + [tE, jf, Rf].join("|") + ")" + iy, sE = "(?:" + [Zg + Os + "?", Os, jf, Rf, eE].join("|") + ")", cE = RegExp(If, "g"), lE = RegExp(Os, "g"), Nf = RegExp(kf + "(?=" + kf + ")|" + sE + iy, "g"), fE = RegExp([
      fa + "?" + Yg + "+" + ey + "(?=" + [qg, fa, "$"].join("|") + ")",
      nE + "+" + ty + "(?=" + [qg, fa + Qg, "$"].join("|") + ")",
      fa + "?" + Qg + "+" + ey,
      fa + "+" + ty,
      oE,
      aE,
      Vg,
      uE
    ].join("|"), "g"), dE = RegExp("[" + Jg + _s + Wg + Gg + "]"), hE = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, pE = [
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
    ], vE = -1, ot = {};
    ot[wf] = ot[_f] = ot[Of] = ot[Af] = ot[Sf] = ot[Pf] = ot[Ef] = ot[Tf] = ot[$f] = !0, ot[ge] = ot[xe] = ot[ko] = ot[we] = ot[la] = ot[ne] = ot[pe] = ot[j] = ot[be] = ot[We] = ot[at] = ot[nr] = ot[gt] = ot[gn] = ot[Xn] = !1;
    var tt = {};
    tt[ge] = tt[xe] = tt[ko] = tt[la] = tt[we] = tt[ne] = tt[wf] = tt[_f] = tt[Of] = tt[Af] = tt[Sf] = tt[be] = tt[We] = tt[at] = tt[nr] = tt[gt] = tt[gn] = tt[Yn] = tt[Pf] = tt[Ef] = tt[Tf] = tt[$f] = !0, tt[pe] = tt[j] = tt[Xn] = !1;
    var gE = {
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
    }, yE = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    }, mE = {
      "&amp;": "&",
      "&lt;": "<",
      "&gt;": ">",
      "&quot;": '"',
      "&#39;": "'"
    }, bE = {
      "\\": "\\",
      "'": "'",
      "\n": "n",
      "\r": "r",
      "\u2028": "u2028",
      "\u2029": "u2029"
    }, xE = parseFloat, wE = parseInt, ay = typeof pr == "object" && pr && pr.Object === Object && pr, _E = typeof self == "object" && self && self.Object === Object && self, kt = ay || _E || Function("return this")(), Df = t && !t.nodeType && t, Ti = Df && !0 && e && !e.nodeType && e, oy = Ti && Ti.exports === Df, Lf = oy && ay.process, br = function() {
      try {
        var L = Ti && Ti.require && Ti.require("util").types;
        return L || Lf && Lf.binding && Lf.binding("util");
      } catch {
      }
    }(), uy = br && br.isArrayBuffer, sy = br && br.isDate, cy = br && br.isMap, ly = br && br.isRegExp, fy = br && br.isSet, dy = br && br.isTypedArray;
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
    function OE(L, Q, q, fe) {
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
    function AE(L, Q) {
      for (var q = L == null ? 0 : L.length; q-- && Q(L[q], q, L) !== !1; )
        ;
      return L;
    }
    function hy(L, Q) {
      for (var q = -1, fe = L == null ? 0 : L.length; ++q < fe; )
        if (!Q(L[q], q, L))
          return !1;
      return !0;
    }
    function Zn(L, Q) {
      for (var q = -1, fe = L == null ? 0 : L.length, $e = 0, He = []; ++q < fe; ) {
        var wt = L[q];
        Q(wt, q, L) && (He[$e++] = wt);
      }
      return He;
    }
    function As(L, Q) {
      var q = L == null ? 0 : L.length;
      return !!q && da(L, Q, 0) > -1;
    }
    function Bf(L, Q, q) {
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
    function Jn(L, Q) {
      for (var q = -1, fe = Q.length, $e = L.length; ++q < fe; )
        L[$e + q] = Q[q];
      return L;
    }
    function Ff(L, Q, q, fe) {
      var $e = -1, He = L == null ? 0 : L.length;
      for (fe && He && (q = L[++$e]); ++$e < He; )
        q = Q(q, L[$e], $e, L);
      return q;
    }
    function SE(L, Q, q, fe) {
      var $e = L == null ? 0 : L.length;
      for (fe && $e && (q = L[--$e]); $e--; )
        q = Q(q, L[$e], $e, L);
      return q;
    }
    function Wf(L, Q) {
      for (var q = -1, fe = L == null ? 0 : L.length; ++q < fe; )
        if (Q(L[q], q, L))
          return !0;
      return !1;
    }
    var PE = zf("length");
    function EE(L) {
      return L.split("");
    }
    function TE(L) {
      return L.match(NP) || [];
    }
    function py(L, Q, q) {
      var fe;
      return q(L, function($e, He, wt) {
        if (Q($e, He, wt))
          return fe = He, !1;
      }), fe;
    }
    function Ss(L, Q, q, fe) {
      for (var $e = L.length, He = q + (fe ? 1 : -1); fe ? He-- : ++He < $e; )
        if (Q(L[He], He, L))
          return He;
      return -1;
    }
    function da(L, Q, q) {
      return Q === Q ? FE(L, Q, q) : Ss(L, vy, q);
    }
    function $E(L, Q, q, fe) {
      for (var $e = q - 1, He = L.length; ++$e < He; )
        if (fe(L[$e], Q))
          return $e;
      return -1;
    }
    function vy(L) {
      return L !== L;
    }
    function gy(L, Q) {
      var q = L == null ? 0 : L.length;
      return q ? Hf(L, Q) / q : G;
    }
    function zf(L) {
      return function(Q) {
        return Q == null ? r : Q[L];
      };
    }
    function Uf(L) {
      return function(Q) {
        return L == null ? r : L[Q];
      };
    }
    function yy(L, Q, q, fe, $e) {
      return $e(L, function(He, wt, Qe) {
        q = fe ? (fe = !1, He) : Q(q, He, wt, Qe);
      }), q;
    }
    function CE(L, Q) {
      var q = L.length;
      for (L.sort(Q); q--; )
        L[q] = L[q].value;
      return L;
    }
    function Hf(L, Q) {
      for (var q, fe = -1, $e = L.length; ++fe < $e; ) {
        var He = Q(L[fe]);
        He !== r && (q = q === r ? He : q + He);
      }
      return q;
    }
    function Gf(L, Q) {
      for (var q = -1, fe = Array(L); ++q < L; )
        fe[q] = Q(q);
      return fe;
    }
    function ME(L, Q) {
      return ft(Q, function(q) {
        return [q, L[q]];
      });
    }
    function my(L) {
      return L && L.slice(0, _y(L) + 1).replace(Mf, "");
    }
    function ar(L) {
      return function(Q) {
        return L(Q);
      };
    }
    function Kf(L, Q) {
      return ft(Q, function(q) {
        return L[q];
      });
    }
    function jo(L, Q) {
      return L.has(Q);
    }
    function by(L, Q) {
      for (var q = -1, fe = L.length; ++q < fe && da(Q, L[q], 0) > -1; )
        ;
      return q;
    }
    function xy(L, Q) {
      for (var q = L.length; q-- && da(Q, L[q], 0) > -1; )
        ;
      return q;
    }
    function IE(L, Q) {
      for (var q = L.length, fe = 0; q--; )
        L[q] === Q && ++fe;
      return fe;
    }
    var kE = Uf(gE), jE = Uf(yE);
    function RE(L) {
      return "\\" + bE[L];
    }
    function NE(L, Q) {
      return L == null ? r : L[Q];
    }
    function ha(L) {
      return dE.test(L);
    }
    function DE(L) {
      return hE.test(L);
    }
    function LE(L) {
      for (var Q, q = []; !(Q = L.next()).done; )
        q.push(Q.value);
      return q;
    }
    function qf(L) {
      var Q = -1, q = Array(L.size);
      return L.forEach(function(fe, $e) {
        q[++Q] = [$e, fe];
      }), q;
    }
    function wy(L, Q) {
      return function(q) {
        return L(Q(q));
      };
    }
    function Qn(L, Q) {
      for (var q = -1, fe = L.length, $e = 0, He = []; ++q < fe; ) {
        var wt = L[q];
        (wt === Q || wt === d) && (L[q] = d, He[$e++] = q);
      }
      return He;
    }
    function Ps(L) {
      var Q = -1, q = Array(L.size);
      return L.forEach(function(fe) {
        q[++Q] = fe;
      }), q;
    }
    function BE(L) {
      var Q = -1, q = Array(L.size);
      return L.forEach(function(fe) {
        q[++Q] = [fe, fe];
      }), q;
    }
    function FE(L, Q, q) {
      for (var fe = q - 1, $e = L.length; ++fe < $e; )
        if (L[fe] === Q)
          return fe;
      return -1;
    }
    function WE(L, Q, q) {
      for (var fe = q + 1; fe--; )
        if (L[fe] === Q)
          return fe;
      return fe;
    }
    function pa(L) {
      return ha(L) ? UE(L) : PE(L);
    }
    function Br(L) {
      return ha(L) ? HE(L) : EE(L);
    }
    function _y(L) {
      for (var Q = L.length; Q-- && IP.test(L.charAt(Q)); )
        ;
      return Q;
    }
    var zE = Uf(mE);
    function UE(L) {
      for (var Q = Nf.lastIndex = 0; Nf.test(L); )
        ++Q;
      return Q;
    }
    function HE(L) {
      return L.match(Nf) || [];
    }
    function GE(L) {
      return L.match(fE) || [];
    }
    var KE = function L(Q) {
      Q = Q == null ? kt : va.defaults(kt.Object(), Q, va.pick(kt, pE));
      var q = Q.Array, fe = Q.Date, $e = Q.Error, He = Q.Function, wt = Q.Math, Qe = Q.Object, Vf = Q.RegExp, qE = Q.String, wr = Q.TypeError, Es = q.prototype, VE = He.prototype, ga = Qe.prototype, Ts = Q["__core-js_shared__"], $s = VE.toString, Xe = ga.hasOwnProperty, YE = 0, Oy = function() {
        var o = /[^.]+$/.exec(Ts && Ts.keys && Ts.keys.IE_PROTO || "");
        return o ? "Symbol(src)_1." + o : "";
      }(), Cs = ga.toString, XE = $s.call(Qe), ZE = kt._, JE = Vf(
        "^" + $s.call(Xe).replace(Cf, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
      ), Ms = oy ? Q.Buffer : r, ei = Q.Symbol, Is = Q.Uint8Array, Ay = Ms ? Ms.allocUnsafe : r, ks = wy(Qe.getPrototypeOf, Qe), Sy = Qe.create, Py = ga.propertyIsEnumerable, js = Es.splice, Ey = ei ? ei.isConcatSpreadable : r, Ro = ei ? ei.iterator : r, $i = ei ? ei.toStringTag : r, Rs = function() {
        try {
          var o = ji(Qe, "defineProperty");
          return o({}, "", {}), o;
        } catch {
        }
      }(), QE = Q.clearTimeout !== kt.clearTimeout && Q.clearTimeout, eT = fe && fe.now !== kt.Date.now && fe.now, tT = Q.setTimeout !== kt.setTimeout && Q.setTimeout, Ns = wt.ceil, Ds = wt.floor, Yf = Qe.getOwnPropertySymbols, rT = Ms ? Ms.isBuffer : r, Ty = Q.isFinite, nT = Es.join, iT = wy(Qe.keys, Qe), _t = wt.max, Nt = wt.min, aT = fe.now, oT = Q.parseInt, $y = wt.random, uT = Es.reverse, Xf = ji(Q, "DataView"), No = ji(Q, "Map"), Zf = ji(Q, "Promise"), ya = ji(Q, "Set"), Do = ji(Q, "WeakMap"), Lo = ji(Qe, "create"), Ls = Do && new Do(), ma = {}, sT = Ri(Xf), cT = Ri(No), lT = Ri(Zf), fT = Ri(ya), dT = Ri(Do), Bs = ei ? ei.prototype : r, Bo = Bs ? Bs.valueOf : r, Cy = Bs ? Bs.toString : r;
      function T(o) {
        if (vt(o) && !Ce(o) && !(o instanceof Be)) {
          if (o instanceof _r)
            return o;
          if (Xe.call(o, "__wrapped__"))
            return Mm(o);
        }
        return new _r(o);
      }
      var ba = /* @__PURE__ */ function() {
        function o() {
        }
        return function(s) {
          if (!pt(s))
            return {};
          if (Sy)
            return Sy(s);
          o.prototype = s;
          var p = new o();
          return o.prototype = r, p;
        };
      }();
      function Fs() {
      }
      function _r(o, s) {
        this.__wrapped__ = o, this.__actions__ = [], this.__chain__ = !!s, this.__index__ = 0, this.__values__ = r;
      }
      T.templateSettings = {
        /**
         * Used to detect `data` property values to be HTML-escaped.
         *
         * @memberOf _.templateSettings
         * @type {RegExp}
         */
        escape: PP,
        /**
         * Used to detect code to be evaluated.
         *
         * @memberOf _.templateSettings
         * @type {RegExp}
         */
        evaluate: EP,
        /**
         * Used to detect `data` property values to inject.
         *
         * @memberOf _.templateSettings
         * @type {RegExp}
         */
        interpolate: Bg,
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
      }, T.prototype = Fs.prototype, T.prototype.constructor = T, _r.prototype = ba(Fs.prototype), _r.prototype.constructor = _r;
      function Be(o) {
        this.__wrapped__ = o, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = X, this.__views__ = [];
      }
      function hT() {
        var o = new Be(this.__wrapped__);
        return o.__actions__ = Yt(this.__actions__), o.__dir__ = this.__dir__, o.__filtered__ = this.__filtered__, o.__iteratees__ = Yt(this.__iteratees__), o.__takeCount__ = this.__takeCount__, o.__views__ = Yt(this.__views__), o;
      }
      function pT() {
        if (this.__filtered__) {
          var o = new Be(this);
          o.__dir__ = -1, o.__filtered__ = !0;
        } else
          o = this.clone(), o.__dir__ *= -1;
        return o;
      }
      function vT() {
        var o = this.__wrapped__.value(), s = this.__dir__, p = Ce(o), m = s < 0, P = p ? o.length : 0, $ = E$(0, P, this.__views__), I = $.start, R = $.end, W = R - I, ee = m ? R : I - 1, te = this.__iteratees__, ie = te.length, le = 0, ve = Nt(W, this.__takeCount__);
        if (!p || !m && P == W && ve == W)
          return em(o, this.__actions__);
        var Oe = [];
        e:
          for (; W-- && le < ve; ) {
            ee += s;
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
      Be.prototype = ba(Fs.prototype), Be.prototype.constructor = Be;
      function Ci(o) {
        var s = -1, p = o == null ? 0 : o.length;
        for (this.clear(); ++s < p; ) {
          var m = o[s];
          this.set(m[0], m[1]);
        }
      }
      function gT() {
        this.__data__ = Lo ? Lo(null) : {}, this.size = 0;
      }
      function yT(o) {
        var s = this.has(o) && delete this.__data__[o];
        return this.size -= s ? 1 : 0, s;
      }
      function mT(o) {
        var s = this.__data__;
        if (Lo) {
          var p = s[o];
          return p === l ? r : p;
        }
        return Xe.call(s, o) ? s[o] : r;
      }
      function bT(o) {
        var s = this.__data__;
        return Lo ? s[o] !== r : Xe.call(s, o);
      }
      function xT(o, s) {
        var p = this.__data__;
        return this.size += this.has(o) ? 0 : 1, p[o] = Lo && s === r ? l : s, this;
      }
      Ci.prototype.clear = gT, Ci.prototype.delete = yT, Ci.prototype.get = mT, Ci.prototype.has = bT, Ci.prototype.set = xT;
      function yn(o) {
        var s = -1, p = o == null ? 0 : o.length;
        for (this.clear(); ++s < p; ) {
          var m = o[s];
          this.set(m[0], m[1]);
        }
      }
      function wT() {
        this.__data__ = [], this.size = 0;
      }
      function _T(o) {
        var s = this.__data__, p = Ws(s, o);
        if (p < 0)
          return !1;
        var m = s.length - 1;
        return p == m ? s.pop() : js.call(s, p, 1), --this.size, !0;
      }
      function OT(o) {
        var s = this.__data__, p = Ws(s, o);
        return p < 0 ? r : s[p][1];
      }
      function AT(o) {
        return Ws(this.__data__, o) > -1;
      }
      function ST(o, s) {
        var p = this.__data__, m = Ws(p, o);
        return m < 0 ? (++this.size, p.push([o, s])) : p[m][1] = s, this;
      }
      yn.prototype.clear = wT, yn.prototype.delete = _T, yn.prototype.get = OT, yn.prototype.has = AT, yn.prototype.set = ST;
      function mn(o) {
        var s = -1, p = o == null ? 0 : o.length;
        for (this.clear(); ++s < p; ) {
          var m = o[s];
          this.set(m[0], m[1]);
        }
      }
      function PT() {
        this.size = 0, this.__data__ = {
          hash: new Ci(),
          map: new (No || yn)(),
          string: new Ci()
        };
      }
      function ET(o) {
        var s = Qs(this, o).delete(o);
        return this.size -= s ? 1 : 0, s;
      }
      function TT(o) {
        return Qs(this, o).get(o);
      }
      function $T(o) {
        return Qs(this, o).has(o);
      }
      function CT(o, s) {
        var p = Qs(this, o), m = p.size;
        return p.set(o, s), this.size += p.size == m ? 0 : 1, this;
      }
      mn.prototype.clear = PT, mn.prototype.delete = ET, mn.prototype.get = TT, mn.prototype.has = $T, mn.prototype.set = CT;
      function Mi(o) {
        var s = -1, p = o == null ? 0 : o.length;
        for (this.__data__ = new mn(); ++s < p; )
          this.add(o[s]);
      }
      function MT(o) {
        return this.__data__.set(o, l), this;
      }
      function IT(o) {
        return this.__data__.has(o);
      }
      Mi.prototype.add = Mi.prototype.push = MT, Mi.prototype.has = IT;
      function Fr(o) {
        var s = this.__data__ = new yn(o);
        this.size = s.size;
      }
      function kT() {
        this.__data__ = new yn(), this.size = 0;
      }
      function jT(o) {
        var s = this.__data__, p = s.delete(o);
        return this.size = s.size, p;
      }
      function RT(o) {
        return this.__data__.get(o);
      }
      function NT(o) {
        return this.__data__.has(o);
      }
      function DT(o, s) {
        var p = this.__data__;
        if (p instanceof yn) {
          var m = p.__data__;
          if (!No || m.length < i - 1)
            return m.push([o, s]), this.size = ++p.size, this;
          p = this.__data__ = new mn(m);
        }
        return p.set(o, s), this.size = p.size, this;
      }
      Fr.prototype.clear = kT, Fr.prototype.delete = jT, Fr.prototype.get = RT, Fr.prototype.has = NT, Fr.prototype.set = DT;
      function My(o, s) {
        var p = Ce(o), m = !p && Ni(o), P = !p && !m && ai(o), $ = !p && !m && !P && Oa(o), I = p || m || P || $, R = I ? Gf(o.length, qE) : [], W = R.length;
        for (var ee in o)
          (s || Xe.call(o, ee)) && !(I && // Safari 9 has enumerable `arguments.length` in strict mode.
          (ee == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
          P && (ee == "offset" || ee == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
          $ && (ee == "buffer" || ee == "byteLength" || ee == "byteOffset") || // Skip index properties.
          _n(ee, W))) && R.push(ee);
        return R;
      }
      function Iy(o) {
        var s = o.length;
        return s ? o[sd(0, s - 1)] : r;
      }
      function LT(o, s) {
        return ec(Yt(o), Ii(s, 0, o.length));
      }
      function BT(o) {
        return ec(Yt(o));
      }
      function Jf(o, s, p) {
        (p !== r && !Wr(o[s], p) || p === r && !(s in o)) && bn(o, s, p);
      }
      function Fo(o, s, p) {
        var m = o[s];
        (!(Xe.call(o, s) && Wr(m, p)) || p === r && !(s in o)) && bn(o, s, p);
      }
      function Ws(o, s) {
        for (var p = o.length; p--; )
          if (Wr(o[p][0], s))
            return p;
        return -1;
      }
      function FT(o, s, p, m) {
        return ti(o, function(P, $, I) {
          s(m, P, p(P), I);
        }), m;
      }
      function ky(o, s) {
        return o && tn(s, $t(s), o);
      }
      function WT(o, s) {
        return o && tn(s, Zt(s), o);
      }
      function bn(o, s, p) {
        s == "__proto__" && Rs ? Rs(o, s, {
          configurable: !0,
          enumerable: !0,
          value: p,
          writable: !0
        }) : o[s] = p;
      }
      function Qf(o, s) {
        for (var p = -1, m = s.length, P = q(m), $ = o == null; ++p < m; )
          P[p] = $ ? r : kd(o, s[p]);
        return P;
      }
      function Ii(o, s, p) {
        return o === o && (p !== r && (o = o <= p ? o : p), s !== r && (o = o >= s ? o : s)), o;
      }
      function Or(o, s, p, m, P, $) {
        var I, R = s & h, W = s & v, ee = s & g;
        if (p && (I = P ? p(o, m, P, $) : p(o)), I !== r)
          return I;
        if (!pt(o))
          return o;
        var te = Ce(o);
        if (te) {
          if (I = $$(o), !R)
            return Yt(o, I);
        } else {
          var ie = Dt(o), le = ie == j || ie == Ee;
          if (ai(o))
            return nm(o, R);
          if (ie == at || ie == ge || le && !P) {
            if (I = W || le ? {} : _m(o), !R)
              return W ? m$(o, WT(I, o)) : y$(o, ky(I, o));
          } else {
            if (!tt[ie])
              return P ? o : {};
            I = C$(o, ie, R);
          }
        }
        $ || ($ = new Fr());
        var ve = $.get(o);
        if (ve)
          return ve;
        $.set(o, I), Zm(o) ? o.forEach(function(Ae) {
          I.add(Or(Ae, s, p, Ae, o, $));
        }) : Ym(o) && o.forEach(function(Ae, De) {
          I.set(De, Or(Ae, s, p, De, o, $));
        });
        var Oe = ee ? W ? bd : md : W ? Zt : $t, Re = te ? r : Oe(o);
        return xr(Re || o, function(Ae, De) {
          Re && (De = Ae, Ae = o[De]), Fo(I, De, Or(Ae, s, p, De, o, $));
        }), I;
      }
      function zT(o) {
        var s = $t(o);
        return function(p) {
          return jy(p, o, s);
        };
      }
      function jy(o, s, p) {
        var m = p.length;
        if (o == null)
          return !m;
        for (o = Qe(o); m--; ) {
          var P = p[m], $ = s[P], I = o[P];
          if (I === r && !(P in o) || !$(I))
            return !1;
        }
        return !0;
      }
      function Ry(o, s, p) {
        if (typeof o != "function")
          throw new wr(u);
        return qo(function() {
          o.apply(r, p);
        }, s);
      }
      function Wo(o, s, p, m) {
        var P = -1, $ = As, I = !0, R = o.length, W = [], ee = s.length;
        if (!R)
          return W;
        p && (s = ft(s, ar(p))), m ? ($ = Bf, I = !1) : s.length >= i && ($ = jo, I = !1, s = new Mi(s));
        e:
          for (; ++P < R; ) {
            var te = o[P], ie = p == null ? te : p(te);
            if (te = m || te !== 0 ? te : 0, I && ie === ie) {
              for (var le = ee; le--; )
                if (s[le] === ie)
                  continue e;
              W.push(te);
            } else $(s, ie, m) || W.push(te);
          }
        return W;
      }
      var ti = sm(en), Ny = sm(td, !0);
      function UT(o, s) {
        var p = !0;
        return ti(o, function(m, P, $) {
          return p = !!s(m, P, $), p;
        }), p;
      }
      function zs(o, s, p) {
        for (var m = -1, P = o.length; ++m < P; ) {
          var $ = o[m], I = s($);
          if (I != null && (R === r ? I === I && !ur(I) : p(I, R)))
            var R = I, W = $;
        }
        return W;
      }
      function HT(o, s, p, m) {
        var P = o.length;
        for (p = Ie(p), p < 0 && (p = -p > P ? 0 : P + p), m = m === r || m > P ? P : Ie(m), m < 0 && (m += P), m = p > m ? 0 : Qm(m); p < m; )
          o[p++] = s;
        return o;
      }
      function Dy(o, s) {
        var p = [];
        return ti(o, function(m, P, $) {
          s(m, P, $) && p.push(m);
        }), p;
      }
      function jt(o, s, p, m, P) {
        var $ = -1, I = o.length;
        for (p || (p = I$), P || (P = []); ++$ < I; ) {
          var R = o[$];
          s > 0 && p(R) ? s > 1 ? jt(R, s - 1, p, m, P) : Jn(P, R) : m || (P[P.length] = R);
        }
        return P;
      }
      var ed = cm(), Ly = cm(!0);
      function en(o, s) {
        return o && ed(o, s, $t);
      }
      function td(o, s) {
        return o && Ly(o, s, $t);
      }
      function Us(o, s) {
        return Zn(s, function(p) {
          return On(o[p]);
        });
      }
      function ki(o, s) {
        s = ni(s, o);
        for (var p = 0, m = s.length; o != null && p < m; )
          o = o[rn(s[p++])];
        return p && p == m ? o : r;
      }
      function By(o, s, p) {
        var m = s(o);
        return Ce(o) ? m : Jn(m, p(o));
      }
      function Ft(o) {
        return o == null ? o === r ? Io : lt : $i && $i in Qe(o) ? P$(o) : B$(o);
      }
      function rd(o, s) {
        return o > s;
      }
      function GT(o, s) {
        return o != null && Xe.call(o, s);
      }
      function KT(o, s) {
        return o != null && s in Qe(o);
      }
      function qT(o, s, p) {
        return o >= Nt(s, p) && o < _t(s, p);
      }
      function nd(o, s, p) {
        for (var m = p ? Bf : As, P = o[0].length, $ = o.length, I = $, R = q($), W = 1 / 0, ee = []; I--; ) {
          var te = o[I];
          I && s && (te = ft(te, ar(s))), W = Nt(te.length, W), R[I] = !p && (s || P >= 120 && te.length >= 120) ? new Mi(I && te) : r;
        }
        te = o[0];
        var ie = -1, le = R[0];
        e:
          for (; ++ie < P && ee.length < W; ) {
            var ve = te[ie], Oe = s ? s(ve) : ve;
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
      function VT(o, s, p, m) {
        return en(o, function(P, $, I) {
          s(m, p(P), $, I);
        }), m;
      }
      function zo(o, s, p) {
        s = ni(s, o), o = Pm(o, s);
        var m = o == null ? o : o[rn(Sr(s))];
        return m == null ? r : ir(m, o, p);
      }
      function Fy(o) {
        return vt(o) && Ft(o) == ge;
      }
      function YT(o) {
        return vt(o) && Ft(o) == ko;
      }
      function XT(o) {
        return vt(o) && Ft(o) == ne;
      }
      function Uo(o, s, p, m, P) {
        return o === s ? !0 : o == null || s == null || !vt(o) && !vt(s) ? o !== o && s !== s : ZT(o, s, p, m, Uo, P);
      }
      function ZT(o, s, p, m, P, $) {
        var I = Ce(o), R = Ce(s), W = I ? xe : Dt(o), ee = R ? xe : Dt(s);
        W = W == ge ? at : W, ee = ee == ge ? at : ee;
        var te = W == at, ie = ee == at, le = W == ee;
        if (le && ai(o)) {
          if (!ai(s))
            return !1;
          I = !0, te = !1;
        }
        if (le && !te)
          return $ || ($ = new Fr()), I || Oa(o) ? bm(o, s, p, m, P, $) : A$(o, s, W, p, m, P, $);
        if (!(p & x)) {
          var ve = te && Xe.call(o, "__wrapped__"), Oe = ie && Xe.call(s, "__wrapped__");
          if (ve || Oe) {
            var Re = ve ? o.value() : o, Ae = Oe ? s.value() : s;
            return $ || ($ = new Fr()), P(Re, Ae, p, m, $);
          }
        }
        return le ? ($ || ($ = new Fr()), S$(o, s, p, m, P, $)) : !1;
      }
      function JT(o) {
        return vt(o) && Dt(o) == be;
      }
      function id(o, s, p, m) {
        var P = p.length, $ = P, I = !m;
        if (o == null)
          return !$;
        for (o = Qe(o); P--; ) {
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
              var le = m(ee, te, W, o, s, ie);
            if (!(le === r ? Uo(te, ee, x | y, m, ie) : le))
              return !1;
          }
        }
        return !0;
      }
      function Wy(o) {
        if (!pt(o) || j$(o))
          return !1;
        var s = On(o) ? JE : zP;
        return s.test(Ri(o));
      }
      function QT(o) {
        return vt(o) && Ft(o) == nr;
      }
      function e$(o) {
        return vt(o) && Dt(o) == gt;
      }
      function t$(o) {
        return vt(o) && oc(o.length) && !!ot[Ft(o)];
      }
      function zy(o) {
        return typeof o == "function" ? o : o == null ? Jt : typeof o == "object" ? Ce(o) ? Gy(o[0], o[1]) : Hy(o) : lb(o);
      }
      function ad(o) {
        if (!Ko(o))
          return iT(o);
        var s = [];
        for (var p in Qe(o))
          Xe.call(o, p) && p != "constructor" && s.push(p);
        return s;
      }
      function r$(o) {
        if (!pt(o))
          return L$(o);
        var s = Ko(o), p = [];
        for (var m in o)
          m == "constructor" && (s || !Xe.call(o, m)) || p.push(m);
        return p;
      }
      function od(o, s) {
        return o < s;
      }
      function Uy(o, s) {
        var p = -1, m = Xt(o) ? q(o.length) : [];
        return ti(o, function(P, $, I) {
          m[++p] = s(P, $, I);
        }), m;
      }
      function Hy(o) {
        var s = wd(o);
        return s.length == 1 && s[0][2] ? Am(s[0][0], s[0][1]) : function(p) {
          return p === o || id(p, o, s);
        };
      }
      function Gy(o, s) {
        return Od(o) && Om(s) ? Am(rn(o), s) : function(p) {
          var m = kd(p, o);
          return m === r && m === s ? jd(p, o) : Uo(s, m, x | y);
        };
      }
      function Hs(o, s, p, m, P) {
        o !== s && ed(s, function($, I) {
          if (P || (P = new Fr()), pt($))
            n$(o, s, I, p, Hs, m, P);
          else {
            var R = m ? m(Sd(o, I), $, I + "", o, s, P) : r;
            R === r && (R = $), Jf(o, I, R);
          }
        }, Zt);
      }
      function n$(o, s, p, m, P, $, I) {
        var R = Sd(o, p), W = Sd(s, p), ee = I.get(W);
        if (ee) {
          Jf(o, p, ee);
          return;
        }
        var te = $ ? $(R, W, p + "", o, s, I) : r, ie = te === r;
        if (ie) {
          var le = Ce(W), ve = !le && ai(W), Oe = !le && !ve && Oa(W);
          te = W, le || ve || Oe ? Ce(R) ? te = R : yt(R) ? te = Yt(R) : ve ? (ie = !1, te = nm(W, !0)) : Oe ? (ie = !1, te = im(W, !0)) : te = [] : Vo(W) || Ni(W) ? (te = R, Ni(R) ? te = eb(R) : (!pt(R) || On(R)) && (te = _m(W))) : ie = !1;
        }
        ie && (I.set(W, te), P(te, W, m, $, I), I.delete(W)), Jf(o, p, te);
      }
      function Ky(o, s) {
        var p = o.length;
        if (p)
          return s += s < 0 ? p : 0, _n(s, p) ? o[s] : r;
      }
      function qy(o, s, p) {
        s.length ? s = ft(s, function($) {
          return Ce($) ? function(I) {
            return ki(I, $.length === 1 ? $[0] : $);
          } : $;
        }) : s = [Jt];
        var m = -1;
        s = ft(s, ar(_e()));
        var P = Uy(o, function($, I, R) {
          var W = ft(s, function(ee) {
            return ee($);
          });
          return { criteria: W, index: ++m, value: $ };
        });
        return CE(P, function($, I) {
          return g$($, I, p);
        });
      }
      function i$(o, s) {
        return Vy(o, s, function(p, m) {
          return jd(o, m);
        });
      }
      function Vy(o, s, p) {
        for (var m = -1, P = s.length, $ = {}; ++m < P; ) {
          var I = s[m], R = ki(o, I);
          p(R, I) && Ho($, ni(I, o), R);
        }
        return $;
      }
      function a$(o) {
        return function(s) {
          return ki(s, o);
        };
      }
      function ud(o, s, p, m) {
        var P = m ? $E : da, $ = -1, I = s.length, R = o;
        for (o === s && (s = Yt(s)), p && (R = ft(o, ar(p))); ++$ < I; )
          for (var W = 0, ee = s[$], te = p ? p(ee) : ee; (W = P(R, te, W, m)) > -1; )
            R !== o && js.call(R, W, 1), js.call(o, W, 1);
        return o;
      }
      function Yy(o, s) {
        for (var p = o ? s.length : 0, m = p - 1; p--; ) {
          var P = s[p];
          if (p == m || P !== $) {
            var $ = P;
            _n(P) ? js.call(o, P, 1) : fd(o, P);
          }
        }
        return o;
      }
      function sd(o, s) {
        return o + Ds($y() * (s - o + 1));
      }
      function o$(o, s, p, m) {
        for (var P = -1, $ = _t(Ns((s - o) / (p || 1)), 0), I = q($); $--; )
          I[m ? $ : ++P] = o, o += p;
        return I;
      }
      function cd(o, s) {
        var p = "";
        if (!o || s < 1 || s > K)
          return p;
        do
          s % 2 && (p += o), s = Ds(s / 2), s && (o += o);
        while (s);
        return p;
      }
      function Ne(o, s) {
        return Pd(Sm(o, s, Jt), o + "");
      }
      function u$(o) {
        return Iy(Aa(o));
      }
      function s$(o, s) {
        var p = Aa(o);
        return ec(p, Ii(s, 0, p.length));
      }
      function Ho(o, s, p, m) {
        if (!pt(o))
          return o;
        s = ni(s, o);
        for (var P = -1, $ = s.length, I = $ - 1, R = o; R != null && ++P < $; ) {
          var W = rn(s[P]), ee = p;
          if (W === "__proto__" || W === "constructor" || W === "prototype")
            return o;
          if (P != I) {
            var te = R[W];
            ee = m ? m(te, W, R) : r, ee === r && (ee = pt(te) ? te : _n(s[P + 1]) ? [] : {});
          }
          Fo(R, W, ee), R = R[W];
        }
        return o;
      }
      var Xy = Ls ? function(o, s) {
        return Ls.set(o, s), o;
      } : Jt, c$ = Rs ? function(o, s) {
        return Rs(o, "toString", {
          configurable: !0,
          enumerable: !1,
          value: Nd(s),
          writable: !0
        });
      } : Jt;
      function l$(o) {
        return ec(Aa(o));
      }
      function Ar(o, s, p) {
        var m = -1, P = o.length;
        s < 0 && (s = -s > P ? 0 : P + s), p = p > P ? P : p, p < 0 && (p += P), P = s > p ? 0 : p - s >>> 0, s >>>= 0;
        for (var $ = q(P); ++m < P; )
          $[m] = o[m + s];
        return $;
      }
      function f$(o, s) {
        var p;
        return ti(o, function(m, P, $) {
          return p = s(m, P, $), !p;
        }), !!p;
      }
      function Gs(o, s, p) {
        var m = 0, P = o == null ? m : o.length;
        if (typeof s == "number" && s === s && P <= ce) {
          for (; m < P; ) {
            var $ = m + P >>> 1, I = o[$];
            I !== null && !ur(I) && (p ? I <= s : I < s) ? m = $ + 1 : P = $;
          }
          return P;
        }
        return ld(o, s, Jt, p);
      }
      function ld(o, s, p, m) {
        var P = 0, $ = o == null ? 0 : o.length;
        if ($ === 0)
          return 0;
        s = p(s);
        for (var I = s !== s, R = s === null, W = ur(s), ee = s === r; P < $; ) {
          var te = Ds((P + $) / 2), ie = p(o[te]), le = ie !== r, ve = ie === null, Oe = ie === ie, Re = ur(ie);
          if (I)
            var Ae = m || Oe;
          else ee ? Ae = Oe && (m || le) : R ? Ae = Oe && le && (m || !ve) : W ? Ae = Oe && le && !ve && (m || !Re) : ve || Re ? Ae = !1 : Ae = m ? ie <= s : ie < s;
          Ae ? P = te + 1 : $ = te;
        }
        return Nt($, ae);
      }
      function Zy(o, s) {
        for (var p = -1, m = o.length, P = 0, $ = []; ++p < m; ) {
          var I = o[p], R = s ? s(I) : I;
          if (!p || !Wr(R, W)) {
            var W = R;
            $[P++] = I === 0 ? 0 : I;
          }
        }
        return $;
      }
      function Jy(o) {
        return typeof o == "number" ? o : ur(o) ? G : +o;
      }
      function or(o) {
        if (typeof o == "string")
          return o;
        if (Ce(o))
          return ft(o, or) + "";
        if (ur(o))
          return Cy ? Cy.call(o) : "";
        var s = o + "";
        return s == "0" && 1 / o == -Z ? "-0" : s;
      }
      function ri(o, s, p) {
        var m = -1, P = As, $ = o.length, I = !0, R = [], W = R;
        if (p)
          I = !1, P = Bf;
        else if ($ >= i) {
          var ee = s ? null : _$(o);
          if (ee)
            return Ps(ee);
          I = !1, P = jo, W = new Mi();
        } else
          W = s ? [] : R;
        e:
          for (; ++m < $; ) {
            var te = o[m], ie = s ? s(te) : te;
            if (te = p || te !== 0 ? te : 0, I && ie === ie) {
              for (var le = W.length; le--; )
                if (W[le] === ie)
                  continue e;
              s && W.push(ie), R.push(te);
            } else P(W, ie, p) || (W !== R && W.push(ie), R.push(te));
          }
        return R;
      }
      function fd(o, s) {
        return s = ni(s, o), o = Pm(o, s), o == null || delete o[rn(Sr(s))];
      }
      function Qy(o, s, p, m) {
        return Ho(o, s, p(ki(o, s)), m);
      }
      function Ks(o, s, p, m) {
        for (var P = o.length, $ = m ? P : -1; (m ? $-- : ++$ < P) && s(o[$], $, o); )
          ;
        return p ? Ar(o, m ? 0 : $, m ? $ + 1 : P) : Ar(o, m ? $ + 1 : 0, m ? P : $);
      }
      function em(o, s) {
        var p = o;
        return p instanceof Be && (p = p.value()), Ff(s, function(m, P) {
          return P.func.apply(P.thisArg, Jn([m], P.args));
        }, p);
      }
      function dd(o, s, p) {
        var m = o.length;
        if (m < 2)
          return m ? ri(o[0]) : [];
        for (var P = -1, $ = q(m); ++P < m; )
          for (var I = o[P], R = -1; ++R < m; )
            R != P && ($[P] = Wo($[P] || I, o[R], s, p));
        return ri(jt($, 1), s, p);
      }
      function tm(o, s, p) {
        for (var m = -1, P = o.length, $ = s.length, I = {}; ++m < P; ) {
          var R = m < $ ? s[m] : r;
          p(I, o[m], R);
        }
        return I;
      }
      function hd(o) {
        return yt(o) ? o : [];
      }
      function pd(o) {
        return typeof o == "function" ? o : Jt;
      }
      function ni(o, s) {
        return Ce(o) ? o : Od(o, s) ? [o] : Cm(Ge(o));
      }
      var d$ = Ne;
      function ii(o, s, p) {
        var m = o.length;
        return p = p === r ? m : p, !s && p >= m ? o : Ar(o, s, p);
      }
      var rm = QE || function(o) {
        return kt.clearTimeout(o);
      };
      function nm(o, s) {
        if (s)
          return o.slice();
        var p = o.length, m = Ay ? Ay(p) : new o.constructor(p);
        return o.copy(m), m;
      }
      function vd(o) {
        var s = new o.constructor(o.byteLength);
        return new Is(s).set(new Is(o)), s;
      }
      function h$(o, s) {
        var p = s ? vd(o.buffer) : o.buffer;
        return new o.constructor(p, o.byteOffset, o.byteLength);
      }
      function p$(o) {
        var s = new o.constructor(o.source, Fg.exec(o));
        return s.lastIndex = o.lastIndex, s;
      }
      function v$(o) {
        return Bo ? Qe(Bo.call(o)) : {};
      }
      function im(o, s) {
        var p = s ? vd(o.buffer) : o.buffer;
        return new o.constructor(p, o.byteOffset, o.length);
      }
      function am(o, s) {
        if (o !== s) {
          var p = o !== r, m = o === null, P = o === o, $ = ur(o), I = s !== r, R = s === null, W = s === s, ee = ur(s);
          if (!R && !ee && !$ && o > s || $ && I && W && !R && !ee || m && I && W || !p && W || !P)
            return 1;
          if (!m && !$ && !ee && o < s || ee && p && P && !m && !$ || R && p && P || !I && P || !W)
            return -1;
        }
        return 0;
      }
      function g$(o, s, p) {
        for (var m = -1, P = o.criteria, $ = s.criteria, I = P.length, R = p.length; ++m < I; ) {
          var W = am(P[m], $[m]);
          if (W) {
            if (m >= R)
              return W;
            var ee = p[m];
            return W * (ee == "desc" ? -1 : 1);
          }
        }
        return o.index - s.index;
      }
      function om(o, s, p, m) {
        for (var P = -1, $ = o.length, I = p.length, R = -1, W = s.length, ee = _t($ - I, 0), te = q(W + ee), ie = !m; ++R < W; )
          te[R] = s[R];
        for (; ++P < I; )
          (ie || P < $) && (te[p[P]] = o[P]);
        for (; ee--; )
          te[R++] = o[P++];
        return te;
      }
      function um(o, s, p, m) {
        for (var P = -1, $ = o.length, I = -1, R = p.length, W = -1, ee = s.length, te = _t($ - R, 0), ie = q(te + ee), le = !m; ++P < te; )
          ie[P] = o[P];
        for (var ve = P; ++W < ee; )
          ie[ve + W] = s[W];
        for (; ++I < R; )
          (le || P < $) && (ie[ve + p[I]] = o[P++]);
        return ie;
      }
      function Yt(o, s) {
        var p = -1, m = o.length;
        for (s || (s = q(m)); ++p < m; )
          s[p] = o[p];
        return s;
      }
      function tn(o, s, p, m) {
        var P = !p;
        p || (p = {});
        for (var $ = -1, I = s.length; ++$ < I; ) {
          var R = s[$], W = m ? m(p[R], o[R], R, p, o) : r;
          W === r && (W = o[R]), P ? bn(p, R, W) : Fo(p, R, W);
        }
        return p;
      }
      function y$(o, s) {
        return tn(o, _d(o), s);
      }
      function m$(o, s) {
        return tn(o, xm(o), s);
      }
      function qs(o, s) {
        return function(p, m) {
          var P = Ce(p) ? OE : FT, $ = s ? s() : {};
          return P(p, o, _e(m, 2), $);
        };
      }
      function xa(o) {
        return Ne(function(s, p) {
          var m = -1, P = p.length, $ = P > 1 ? p[P - 1] : r, I = P > 2 ? p[2] : r;
          for ($ = o.length > 3 && typeof $ == "function" ? (P--, $) : r, I && Wt(p[0], p[1], I) && ($ = P < 3 ? r : $, P = 1), s = Qe(s); ++m < P; ) {
            var R = p[m];
            R && o(s, R, m, $);
          }
          return s;
        });
      }
      function sm(o, s) {
        return function(p, m) {
          if (p == null)
            return p;
          if (!Xt(p))
            return o(p, m);
          for (var P = p.length, $ = s ? P : -1, I = Qe(p); (s ? $-- : ++$ < P) && m(I[$], $, I) !== !1; )
            ;
          return p;
        };
      }
      function cm(o) {
        return function(s, p, m) {
          for (var P = -1, $ = Qe(s), I = m(s), R = I.length; R--; ) {
            var W = I[o ? R : ++P];
            if (p($[W], W, $) === !1)
              break;
          }
          return s;
        };
      }
      function b$(o, s, p) {
        var m = s & w, P = Go(o);
        function $() {
          var I = this && this !== kt && this instanceof $ ? P : o;
          return I.apply(m ? p : this, arguments);
        }
        return $;
      }
      function lm(o) {
        return function(s) {
          s = Ge(s);
          var p = ha(s) ? Br(s) : r, m = p ? p[0] : s.charAt(0), P = p ? ii(p, 1).join("") : s.slice(1);
          return m[o]() + P;
        };
      }
      function wa(o) {
        return function(s) {
          return Ff(sb(ub(s).replace(cE, "")), o, "");
        };
      }
      function Go(o) {
        return function() {
          var s = arguments;
          switch (s.length) {
            case 0:
              return new o();
            case 1:
              return new o(s[0]);
            case 2:
              return new o(s[0], s[1]);
            case 3:
              return new o(s[0], s[1], s[2]);
            case 4:
              return new o(s[0], s[1], s[2], s[3]);
            case 5:
              return new o(s[0], s[1], s[2], s[3], s[4]);
            case 6:
              return new o(s[0], s[1], s[2], s[3], s[4], s[5]);
            case 7:
              return new o(s[0], s[1], s[2], s[3], s[4], s[5], s[6]);
          }
          var p = ba(o.prototype), m = o.apply(p, s);
          return pt(m) ? m : p;
        };
      }
      function x$(o, s, p) {
        var m = Go(o);
        function P() {
          for (var $ = arguments.length, I = q($), R = $, W = _a(P); R--; )
            I[R] = arguments[R];
          var ee = $ < 3 && I[0] !== W && I[$ - 1] !== W ? [] : Qn(I, W);
          if ($ -= ee.length, $ < p)
            return vm(
              o,
              s,
              Vs,
              P.placeholder,
              r,
              I,
              ee,
              r,
              r,
              p - $
            );
          var te = this && this !== kt && this instanceof P ? m : o;
          return ir(te, this, I);
        }
        return P;
      }
      function fm(o) {
        return function(s, p, m) {
          var P = Qe(s);
          if (!Xt(s)) {
            var $ = _e(p, 3);
            s = $t(s), p = function(R) {
              return $(P[R], R, P);
            };
          }
          var I = o(s, p, m);
          return I > -1 ? P[$ ? s[I] : I] : r;
        };
      }
      function dm(o) {
        return wn(function(s) {
          var p = s.length, m = p, P = _r.prototype.thru;
          for (o && s.reverse(); m--; ) {
            var $ = s[m];
            if (typeof $ != "function")
              throw new wr(u);
            if (P && !I && Js($) == "wrapper")
              var I = new _r([], !0);
          }
          for (m = I ? m : p; ++m < p; ) {
            $ = s[m];
            var R = Js($), W = R == "wrapper" ? xd($) : r;
            W && Ad(W[0]) && W[1] == (C | S | b | M) && !W[4].length && W[9] == 1 ? I = I[Js(W[0])].apply(I, W[3]) : I = $.length == 1 && Ad($) ? I[R]() : I.thru($);
          }
          return function() {
            var ee = arguments, te = ee[0];
            if (I && ee.length == 1 && Ce(te))
              return I.plant(te).value();
            for (var ie = 0, le = p ? s[ie].apply(this, ee) : te; ++ie < p; )
              le = s[ie].call(this, le);
            return le;
          };
        });
      }
      function Vs(o, s, p, m, P, $, I, R, W, ee) {
        var te = s & C, ie = s & w, le = s & A, ve = s & (S | _), Oe = s & F, Re = le ? r : Go(o);
        function Ae() {
          for (var De = arguments.length, Fe = q(De), sr = De; sr--; )
            Fe[sr] = arguments[sr];
          if (ve)
            var zt = _a(Ae), cr = IE(Fe, zt);
          if (m && (Fe = om(Fe, m, P, ve)), $ && (Fe = um(Fe, $, I, ve)), De -= cr, ve && De < ee) {
            var mt = Qn(Fe, zt);
            return vm(
              o,
              s,
              Vs,
              Ae.placeholder,
              p,
              Fe,
              mt,
              R,
              W,
              ee - De
            );
          }
          var zr = ie ? p : this, Sn = le ? zr[o] : o;
          return De = Fe.length, R ? Fe = F$(Fe, R) : Oe && De > 1 && Fe.reverse(), te && W < De && (Fe.length = W), this && this !== kt && this instanceof Ae && (Sn = Re || Go(Sn)), Sn.apply(zr, Fe);
        }
        return Ae;
      }
      function hm(o, s) {
        return function(p, m) {
          return VT(p, o, s(m), {});
        };
      }
      function Ys(o, s) {
        return function(p, m) {
          var P;
          if (p === r && m === r)
            return s;
          if (p !== r && (P = p), m !== r) {
            if (P === r)
              return m;
            typeof p == "string" || typeof m == "string" ? (p = or(p), m = or(m)) : (p = Jy(p), m = Jy(m)), P = o(p, m);
          }
          return P;
        };
      }
      function gd(o) {
        return wn(function(s) {
          return s = ft(s, ar(_e())), Ne(function(p) {
            var m = this;
            return o(s, function(P) {
              return ir(P, m, p);
            });
          });
        });
      }
      function Xs(o, s) {
        s = s === r ? " " : or(s);
        var p = s.length;
        if (p < 2)
          return p ? cd(s, o) : s;
        var m = cd(s, Ns(o / pa(s)));
        return ha(s) ? ii(Br(m), 0, o).join("") : m.slice(0, o);
      }
      function w$(o, s, p, m) {
        var P = s & w, $ = Go(o);
        function I() {
          for (var R = -1, W = arguments.length, ee = -1, te = m.length, ie = q(te + W), le = this && this !== kt && this instanceof I ? $ : o; ++ee < te; )
            ie[ee] = m[ee];
          for (; W--; )
            ie[ee++] = arguments[++R];
          return ir(le, P ? p : this, ie);
        }
        return I;
      }
      function pm(o) {
        return function(s, p, m) {
          return m && typeof m != "number" && Wt(s, p, m) && (p = m = r), s = An(s), p === r ? (p = s, s = 0) : p = An(p), m = m === r ? s < p ? 1 : -1 : An(m), o$(s, p, m, o);
        };
      }
      function Zs(o) {
        return function(s, p) {
          return typeof s == "string" && typeof p == "string" || (s = Pr(s), p = Pr(p)), o(s, p);
        };
      }
      function vm(o, s, p, m, P, $, I, R, W, ee) {
        var te = s & S, ie = te ? I : r, le = te ? r : I, ve = te ? $ : r, Oe = te ? r : $;
        s |= te ? b : E, s &= ~(te ? E : b), s & O || (s &= ~(w | A));
        var Re = [
          o,
          s,
          P,
          ve,
          ie,
          Oe,
          le,
          R,
          W,
          ee
        ], Ae = p.apply(r, Re);
        return Ad(o) && Em(Ae, Re), Ae.placeholder = m, Tm(Ae, o, s);
      }
      function yd(o) {
        var s = wt[o];
        return function(p, m) {
          if (p = Pr(p), m = m == null ? 0 : Nt(Ie(m), 292), m && Ty(p)) {
            var P = (Ge(p) + "e").split("e"), $ = s(P[0] + "e" + (+P[1] + m));
            return P = (Ge($) + "e").split("e"), +(P[0] + "e" + (+P[1] - m));
          }
          return s(p);
        };
      }
      var _$ = ya && 1 / Ps(new ya([, -0]))[1] == Z ? function(o) {
        return new ya(o);
      } : Bd;
      function gm(o) {
        return function(s) {
          var p = Dt(s);
          return p == be ? qf(s) : p == gt ? BE(s) : ME(s, o(s));
        };
      }
      function xn(o, s, p, m, P, $, I, R) {
        var W = s & A;
        if (!W && typeof o != "function")
          throw new wr(u);
        var ee = m ? m.length : 0;
        if (ee || (s &= ~(b | E), m = P = r), I = I === r ? I : _t(Ie(I), 0), R = R === r ? R : Ie(R), ee -= P ? P.length : 0, s & E) {
          var te = m, ie = P;
          m = P = r;
        }
        var le = W ? r : xd(o), ve = [
          o,
          s,
          p,
          m,
          P,
          te,
          ie,
          $,
          I,
          R
        ];
        if (le && D$(ve, le), o = ve[0], s = ve[1], p = ve[2], m = ve[3], P = ve[4], R = ve[9] = ve[9] === r ? W ? 0 : o.length : _t(ve[9] - ee, 0), !R && s & (S | _) && (s &= ~(S | _)), !s || s == w)
          var Oe = b$(o, s, p);
        else s == S || s == _ ? Oe = x$(o, s, R) : (s == b || s == (w | b)) && !P.length ? Oe = w$(o, s, p, m) : Oe = Vs.apply(r, ve);
        var Re = le ? Xy : Em;
        return Tm(Re(Oe, ve), o, s);
      }
      function ym(o, s, p, m) {
        return o === r || Wr(o, ga[p]) && !Xe.call(m, p) ? s : o;
      }
      function mm(o, s, p, m, P, $) {
        return pt(o) && pt(s) && ($.set(s, o), Hs(o, s, r, mm, $), $.delete(s)), o;
      }
      function O$(o) {
        return Vo(o) ? r : o;
      }
      function bm(o, s, p, m, P, $) {
        var I = p & x, R = o.length, W = s.length;
        if (R != W && !(I && W > R))
          return !1;
        var ee = $.get(o), te = $.get(s);
        if (ee && te)
          return ee == s && te == o;
        var ie = -1, le = !0, ve = p & y ? new Mi() : r;
        for ($.set(o, s), $.set(s, o); ++ie < R; ) {
          var Oe = o[ie], Re = s[ie];
          if (m)
            var Ae = I ? m(Re, Oe, ie, s, o, $) : m(Oe, Re, ie, o, s, $);
          if (Ae !== r) {
            if (Ae)
              continue;
            le = !1;
            break;
          }
          if (ve) {
            if (!Wf(s, function(De, Fe) {
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
        return $.delete(o), $.delete(s), le;
      }
      function A$(o, s, p, m, P, $, I) {
        switch (p) {
          case la:
            if (o.byteLength != s.byteLength || o.byteOffset != s.byteOffset)
              return !1;
            o = o.buffer, s = s.buffer;
          case ko:
            return !(o.byteLength != s.byteLength || !$(new Is(o), new Is(s)));
          case we:
          case ne:
          case We:
            return Wr(+o, +s);
          case pe:
            return o.name == s.name && o.message == s.message;
          case nr:
          case gn:
            return o == s + "";
          case be:
            var R = qf;
          case gt:
            var W = m & x;
            if (R || (R = Ps), o.size != s.size && !W)
              return !1;
            var ee = I.get(o);
            if (ee)
              return ee == s;
            m |= y, I.set(o, s);
            var te = bm(R(o), R(s), m, P, $, I);
            return I.delete(o), te;
          case Yn:
            if (Bo)
              return Bo.call(o) == Bo.call(s);
        }
        return !1;
      }
      function S$(o, s, p, m, P, $) {
        var I = p & x, R = md(o), W = R.length, ee = md(s), te = ee.length;
        if (W != te && !I)
          return !1;
        for (var ie = W; ie--; ) {
          var le = R[ie];
          if (!(I ? le in s : Xe.call(s, le)))
            return !1;
        }
        var ve = $.get(o), Oe = $.get(s);
        if (ve && Oe)
          return ve == s && Oe == o;
        var Re = !0;
        $.set(o, s), $.set(s, o);
        for (var Ae = I; ++ie < W; ) {
          le = R[ie];
          var De = o[le], Fe = s[le];
          if (m)
            var sr = I ? m(Fe, De, le, s, o, $) : m(De, Fe, le, o, s, $);
          if (!(sr === r ? De === Fe || P(De, Fe, p, m, $) : sr)) {
            Re = !1;
            break;
          }
          Ae || (Ae = le == "constructor");
        }
        if (Re && !Ae) {
          var zt = o.constructor, cr = s.constructor;
          zt != cr && "constructor" in o && "constructor" in s && !(typeof zt == "function" && zt instanceof zt && typeof cr == "function" && cr instanceof cr) && (Re = !1);
        }
        return $.delete(o), $.delete(s), Re;
      }
      function wn(o) {
        return Pd(Sm(o, r, jm), o + "");
      }
      function md(o) {
        return By(o, $t, _d);
      }
      function bd(o) {
        return By(o, Zt, xm);
      }
      var xd = Ls ? function(o) {
        return Ls.get(o);
      } : Bd;
      function Js(o) {
        for (var s = o.name + "", p = ma[s], m = Xe.call(ma, s) ? p.length : 0; m--; ) {
          var P = p[m], $ = P.func;
          if ($ == null || $ == o)
            return P.name;
        }
        return s;
      }
      function _a(o) {
        var s = Xe.call(T, "placeholder") ? T : o;
        return s.placeholder;
      }
      function _e() {
        var o = T.iteratee || Dd;
        return o = o === Dd ? zy : o, arguments.length ? o(arguments[0], arguments[1]) : o;
      }
      function Qs(o, s) {
        var p = o.__data__;
        return k$(s) ? p[typeof s == "string" ? "string" : "hash"] : p.map;
      }
      function wd(o) {
        for (var s = $t(o), p = s.length; p--; ) {
          var m = s[p], P = o[m];
          s[p] = [m, P, Om(P)];
        }
        return s;
      }
      function ji(o, s) {
        var p = NE(o, s);
        return Wy(p) ? p : r;
      }
      function P$(o) {
        var s = Xe.call(o, $i), p = o[$i];
        try {
          o[$i] = r;
          var m = !0;
        } catch {
        }
        var P = Cs.call(o);
        return m && (s ? o[$i] = p : delete o[$i]), P;
      }
      var _d = Yf ? function(o) {
        return o == null ? [] : (o = Qe(o), Zn(Yf(o), function(s) {
          return Py.call(o, s);
        }));
      } : Fd, xm = Yf ? function(o) {
        for (var s = []; o; )
          Jn(s, _d(o)), o = ks(o);
        return s;
      } : Fd, Dt = Ft;
      (Xf && Dt(new Xf(new ArrayBuffer(1))) != la || No && Dt(new No()) != be || Zf && Dt(Zf.resolve()) != Vt || ya && Dt(new ya()) != gt || Do && Dt(new Do()) != Xn) && (Dt = function(o) {
        var s = Ft(o), p = s == at ? o.constructor : r, m = p ? Ri(p) : "";
        if (m)
          switch (m) {
            case sT:
              return la;
            case cT:
              return be;
            case lT:
              return Vt;
            case fT:
              return gt;
            case dT:
              return Xn;
          }
        return s;
      });
      function E$(o, s, p) {
        for (var m = -1, P = p.length; ++m < P; ) {
          var $ = p[m], I = $.size;
          switch ($.type) {
            case "drop":
              o += I;
              break;
            case "dropRight":
              s -= I;
              break;
            case "take":
              s = Nt(s, o + I);
              break;
            case "takeRight":
              o = _t(o, s - I);
              break;
          }
        }
        return { start: o, end: s };
      }
      function T$(o) {
        var s = o.match(jP);
        return s ? s[1].split(RP) : [];
      }
      function wm(o, s, p) {
        s = ni(s, o);
        for (var m = -1, P = s.length, $ = !1; ++m < P; ) {
          var I = rn(s[m]);
          if (!($ = o != null && p(o, I)))
            break;
          o = o[I];
        }
        return $ || ++m != P ? $ : (P = o == null ? 0 : o.length, !!P && oc(P) && _n(I, P) && (Ce(o) || Ni(o)));
      }
      function $$(o) {
        var s = o.length, p = new o.constructor(s);
        return s && typeof o[0] == "string" && Xe.call(o, "index") && (p.index = o.index, p.input = o.input), p;
      }
      function _m(o) {
        return typeof o.constructor == "function" && !Ko(o) ? ba(ks(o)) : {};
      }
      function C$(o, s, p) {
        var m = o.constructor;
        switch (s) {
          case ko:
            return vd(o);
          case we:
          case ne:
            return new m(+o);
          case la:
            return h$(o, p);
          case wf:
          case _f:
          case Of:
          case Af:
          case Sf:
          case Pf:
          case Ef:
          case Tf:
          case $f:
            return im(o, p);
          case be:
            return new m();
          case We:
          case gn:
            return new m(o);
          case nr:
            return p$(o);
          case gt:
            return new m();
          case Yn:
            return v$(o);
        }
      }
      function M$(o, s) {
        var p = s.length;
        if (!p)
          return o;
        var m = p - 1;
        return s[m] = (p > 1 ? "& " : "") + s[m], s = s.join(p > 2 ? ", " : " "), o.replace(kP, `{
/* [wrapped with ` + s + `] */
`);
      }
      function I$(o) {
        return Ce(o) || Ni(o) || !!(Ey && o && o[Ey]);
      }
      function _n(o, s) {
        var p = typeof o;
        return s = s ?? K, !!s && (p == "number" || p != "symbol" && HP.test(o)) && o > -1 && o % 1 == 0 && o < s;
      }
      function Wt(o, s, p) {
        if (!pt(p))
          return !1;
        var m = typeof s;
        return (m == "number" ? Xt(p) && _n(s, p.length) : m == "string" && s in p) ? Wr(p[s], o) : !1;
      }
      function Od(o, s) {
        if (Ce(o))
          return !1;
        var p = typeof o;
        return p == "number" || p == "symbol" || p == "boolean" || o == null || ur(o) ? !0 : $P.test(o) || !TP.test(o) || s != null && o in Qe(s);
      }
      function k$(o) {
        var s = typeof o;
        return s == "string" || s == "number" || s == "symbol" || s == "boolean" ? o !== "__proto__" : o === null;
      }
      function Ad(o) {
        var s = Js(o), p = T[s];
        if (typeof p != "function" || !(s in Be.prototype))
          return !1;
        if (o === p)
          return !0;
        var m = xd(p);
        return !!m && o === m[0];
      }
      function j$(o) {
        return !!Oy && Oy in o;
      }
      var R$ = Ts ? On : Wd;
      function Ko(o) {
        var s = o && o.constructor, p = typeof s == "function" && s.prototype || ga;
        return o === p;
      }
      function Om(o) {
        return o === o && !pt(o);
      }
      function Am(o, s) {
        return function(p) {
          return p == null ? !1 : p[o] === s && (s !== r || o in Qe(p));
        };
      }
      function N$(o) {
        var s = ic(o, function(m) {
          return p.size === f && p.clear(), m;
        }), p = s.cache;
        return s;
      }
      function D$(o, s) {
        var p = o[1], m = s[1], P = p | m, $ = P < (w | A | C), I = m == C && p == S || m == C && p == M && o[7].length <= s[8] || m == (C | M) && s[7].length <= s[8] && p == S;
        if (!($ || I))
          return o;
        m & w && (o[2] = s[2], P |= p & w ? 0 : O);
        var R = s[3];
        if (R) {
          var W = o[3];
          o[3] = W ? om(W, R, s[4]) : R, o[4] = W ? Qn(o[3], d) : s[4];
        }
        return R = s[5], R && (W = o[5], o[5] = W ? um(W, R, s[6]) : R, o[6] = W ? Qn(o[5], d) : s[6]), R = s[7], R && (o[7] = R), m & C && (o[8] = o[8] == null ? s[8] : Nt(o[8], s[8])), o[9] == null && (o[9] = s[9]), o[0] = s[0], o[1] = P, o;
      }
      function L$(o) {
        var s = [];
        if (o != null)
          for (var p in Qe(o))
            s.push(p);
        return s;
      }
      function B$(o) {
        return Cs.call(o);
      }
      function Sm(o, s, p) {
        return s = _t(s === r ? o.length - 1 : s, 0), function() {
          for (var m = arguments, P = -1, $ = _t(m.length - s, 0), I = q($); ++P < $; )
            I[P] = m[s + P];
          P = -1;
          for (var R = q(s + 1); ++P < s; )
            R[P] = m[P];
          return R[s] = p(I), ir(o, this, R);
        };
      }
      function Pm(o, s) {
        return s.length < 2 ? o : ki(o, Ar(s, 0, -1));
      }
      function F$(o, s) {
        for (var p = o.length, m = Nt(s.length, p), P = Yt(o); m--; ) {
          var $ = s[m];
          o[m] = _n($, p) ? P[$] : r;
        }
        return o;
      }
      function Sd(o, s) {
        if (!(s === "constructor" && typeof o[s] == "function") && s != "__proto__")
          return o[s];
      }
      var Em = $m(Xy), qo = tT || function(o, s) {
        return kt.setTimeout(o, s);
      }, Pd = $m(c$);
      function Tm(o, s, p) {
        var m = s + "";
        return Pd(o, M$(m, W$(T$(m), p)));
      }
      function $m(o) {
        var s = 0, p = 0;
        return function() {
          var m = aT(), P = U - (m - p);
          if (p = m, P > 0) {
            if (++s >= N)
              return arguments[0];
          } else
            s = 0;
          return o.apply(r, arguments);
        };
      }
      function ec(o, s) {
        var p = -1, m = o.length, P = m - 1;
        for (s = s === r ? m : s; ++p < s; ) {
          var $ = sd(p, P), I = o[$];
          o[$] = o[p], o[p] = I;
        }
        return o.length = s, o;
      }
      var Cm = N$(function(o) {
        var s = [];
        return o.charCodeAt(0) === 46 && s.push(""), o.replace(CP, function(p, m, P, $) {
          s.push(P ? $.replace(LP, "$1") : m || p);
        }), s;
      });
      function rn(o) {
        if (typeof o == "string" || ur(o))
          return o;
        var s = o + "";
        return s == "0" && 1 / o == -Z ? "-0" : s;
      }
      function Ri(o) {
        if (o != null) {
          try {
            return $s.call(o);
          } catch {
          }
          try {
            return o + "";
          } catch {
          }
        }
        return "";
      }
      function W$(o, s) {
        return xr(he, function(p) {
          var m = "_." + p[0];
          s & p[1] && !As(o, m) && o.push(m);
        }), o.sort();
      }
      function Mm(o) {
        if (o instanceof Be)
          return o.clone();
        var s = new _r(o.__wrapped__, o.__chain__);
        return s.__actions__ = Yt(o.__actions__), s.__index__ = o.__index__, s.__values__ = o.__values__, s;
      }
      function z$(o, s, p) {
        (p ? Wt(o, s, p) : s === r) ? s = 1 : s = _t(Ie(s), 0);
        var m = o == null ? 0 : o.length;
        if (!m || s < 1)
          return [];
        for (var P = 0, $ = 0, I = q(Ns(m / s)); P < m; )
          I[$++] = Ar(o, P, P += s);
        return I;
      }
      function U$(o) {
        for (var s = -1, p = o == null ? 0 : o.length, m = 0, P = []; ++s < p; ) {
          var $ = o[s];
          $ && (P[m++] = $);
        }
        return P;
      }
      function H$() {
        var o = arguments.length;
        if (!o)
          return [];
        for (var s = q(o - 1), p = arguments[0], m = o; m--; )
          s[m - 1] = arguments[m];
        return Jn(Ce(p) ? Yt(p) : [p], jt(s, 1));
      }
      var G$ = Ne(function(o, s) {
        return yt(o) ? Wo(o, jt(s, 1, yt, !0)) : [];
      }), K$ = Ne(function(o, s) {
        var p = Sr(s);
        return yt(p) && (p = r), yt(o) ? Wo(o, jt(s, 1, yt, !0), _e(p, 2)) : [];
      }), q$ = Ne(function(o, s) {
        var p = Sr(s);
        return yt(p) && (p = r), yt(o) ? Wo(o, jt(s, 1, yt, !0), r, p) : [];
      });
      function V$(o, s, p) {
        var m = o == null ? 0 : o.length;
        return m ? (s = p || s === r ? 1 : Ie(s), Ar(o, s < 0 ? 0 : s, m)) : [];
      }
      function Y$(o, s, p) {
        var m = o == null ? 0 : o.length;
        return m ? (s = p || s === r ? 1 : Ie(s), s = m - s, Ar(o, 0, s < 0 ? 0 : s)) : [];
      }
      function X$(o, s) {
        return o && o.length ? Ks(o, _e(s, 3), !0, !0) : [];
      }
      function Z$(o, s) {
        return o && o.length ? Ks(o, _e(s, 3), !0) : [];
      }
      function J$(o, s, p, m) {
        var P = o == null ? 0 : o.length;
        return P ? (p && typeof p != "number" && Wt(o, s, p) && (p = 0, m = P), HT(o, s, p, m)) : [];
      }
      function Im(o, s, p) {
        var m = o == null ? 0 : o.length;
        if (!m)
          return -1;
        var P = p == null ? 0 : Ie(p);
        return P < 0 && (P = _t(m + P, 0)), Ss(o, _e(s, 3), P);
      }
      function km(o, s, p) {
        var m = o == null ? 0 : o.length;
        if (!m)
          return -1;
        var P = m - 1;
        return p !== r && (P = Ie(p), P = p < 0 ? _t(m + P, 0) : Nt(P, m - 1)), Ss(o, _e(s, 3), P, !0);
      }
      function jm(o) {
        var s = o == null ? 0 : o.length;
        return s ? jt(o, 1) : [];
      }
      function Q$(o) {
        var s = o == null ? 0 : o.length;
        return s ? jt(o, Z) : [];
      }
      function e2(o, s) {
        var p = o == null ? 0 : o.length;
        return p ? (s = s === r ? 1 : Ie(s), jt(o, s)) : [];
      }
      function t2(o) {
        for (var s = -1, p = o == null ? 0 : o.length, m = {}; ++s < p; ) {
          var P = o[s];
          m[P[0]] = P[1];
        }
        return m;
      }
      function Rm(o) {
        return o && o.length ? o[0] : r;
      }
      function r2(o, s, p) {
        var m = o == null ? 0 : o.length;
        if (!m)
          return -1;
        var P = p == null ? 0 : Ie(p);
        return P < 0 && (P = _t(m + P, 0)), da(o, s, P);
      }
      function n2(o) {
        var s = o == null ? 0 : o.length;
        return s ? Ar(o, 0, -1) : [];
      }
      var i2 = Ne(function(o) {
        var s = ft(o, hd);
        return s.length && s[0] === o[0] ? nd(s) : [];
      }), a2 = Ne(function(o) {
        var s = Sr(o), p = ft(o, hd);
        return s === Sr(p) ? s = r : p.pop(), p.length && p[0] === o[0] ? nd(p, _e(s, 2)) : [];
      }), o2 = Ne(function(o) {
        var s = Sr(o), p = ft(o, hd);
        return s = typeof s == "function" ? s : r, s && p.pop(), p.length && p[0] === o[0] ? nd(p, r, s) : [];
      });
      function u2(o, s) {
        return o == null ? "" : nT.call(o, s);
      }
      function Sr(o) {
        var s = o == null ? 0 : o.length;
        return s ? o[s - 1] : r;
      }
      function s2(o, s, p) {
        var m = o == null ? 0 : o.length;
        if (!m)
          return -1;
        var P = m;
        return p !== r && (P = Ie(p), P = P < 0 ? _t(m + P, 0) : Nt(P, m - 1)), s === s ? WE(o, s, P) : Ss(o, vy, P, !0);
      }
      function c2(o, s) {
        return o && o.length ? Ky(o, Ie(s)) : r;
      }
      var l2 = Ne(Nm);
      function Nm(o, s) {
        return o && o.length && s && s.length ? ud(o, s) : o;
      }
      function f2(o, s, p) {
        return o && o.length && s && s.length ? ud(o, s, _e(p, 2)) : o;
      }
      function d2(o, s, p) {
        return o && o.length && s && s.length ? ud(o, s, r, p) : o;
      }
      var h2 = wn(function(o, s) {
        var p = o == null ? 0 : o.length, m = Qf(o, s);
        return Yy(o, ft(s, function(P) {
          return _n(P, p) ? +P : P;
        }).sort(am)), m;
      });
      function p2(o, s) {
        var p = [];
        if (!(o && o.length))
          return p;
        var m = -1, P = [], $ = o.length;
        for (s = _e(s, 3); ++m < $; ) {
          var I = o[m];
          s(I, m, o) && (p.push(I), P.push(m));
        }
        return Yy(o, P), p;
      }
      function Ed(o) {
        return o == null ? o : uT.call(o);
      }
      function v2(o, s, p) {
        var m = o == null ? 0 : o.length;
        return m ? (p && typeof p != "number" && Wt(o, s, p) ? (s = 0, p = m) : (s = s == null ? 0 : Ie(s), p = p === r ? m : Ie(p)), Ar(o, s, p)) : [];
      }
      function g2(o, s) {
        return Gs(o, s);
      }
      function y2(o, s, p) {
        return ld(o, s, _e(p, 2));
      }
      function m2(o, s) {
        var p = o == null ? 0 : o.length;
        if (p) {
          var m = Gs(o, s);
          if (m < p && Wr(o[m], s))
            return m;
        }
        return -1;
      }
      function b2(o, s) {
        return Gs(o, s, !0);
      }
      function x2(o, s, p) {
        return ld(o, s, _e(p, 2), !0);
      }
      function w2(o, s) {
        var p = o == null ? 0 : o.length;
        if (p) {
          var m = Gs(o, s, !0) - 1;
          if (Wr(o[m], s))
            return m;
        }
        return -1;
      }
      function _2(o) {
        return o && o.length ? Zy(o) : [];
      }
      function O2(o, s) {
        return o && o.length ? Zy(o, _e(s, 2)) : [];
      }
      function A2(o) {
        var s = o == null ? 0 : o.length;
        return s ? Ar(o, 1, s) : [];
      }
      function S2(o, s, p) {
        return o && o.length ? (s = p || s === r ? 1 : Ie(s), Ar(o, 0, s < 0 ? 0 : s)) : [];
      }
      function P2(o, s, p) {
        var m = o == null ? 0 : o.length;
        return m ? (s = p || s === r ? 1 : Ie(s), s = m - s, Ar(o, s < 0 ? 0 : s, m)) : [];
      }
      function E2(o, s) {
        return o && o.length ? Ks(o, _e(s, 3), !1, !0) : [];
      }
      function T2(o, s) {
        return o && o.length ? Ks(o, _e(s, 3)) : [];
      }
      var $2 = Ne(function(o) {
        return ri(jt(o, 1, yt, !0));
      }), C2 = Ne(function(o) {
        var s = Sr(o);
        return yt(s) && (s = r), ri(jt(o, 1, yt, !0), _e(s, 2));
      }), M2 = Ne(function(o) {
        var s = Sr(o);
        return s = typeof s == "function" ? s : r, ri(jt(o, 1, yt, !0), r, s);
      });
      function I2(o) {
        return o && o.length ? ri(o) : [];
      }
      function k2(o, s) {
        return o && o.length ? ri(o, _e(s, 2)) : [];
      }
      function j2(o, s) {
        return s = typeof s == "function" ? s : r, o && o.length ? ri(o, r, s) : [];
      }
      function Td(o) {
        if (!(o && o.length))
          return [];
        var s = 0;
        return o = Zn(o, function(p) {
          if (yt(p))
            return s = _t(p.length, s), !0;
        }), Gf(s, function(p) {
          return ft(o, zf(p));
        });
      }
      function Dm(o, s) {
        if (!(o && o.length))
          return [];
        var p = Td(o);
        return s == null ? p : ft(p, function(m) {
          return ir(s, r, m);
        });
      }
      var R2 = Ne(function(o, s) {
        return yt(o) ? Wo(o, s) : [];
      }), N2 = Ne(function(o) {
        return dd(Zn(o, yt));
      }), D2 = Ne(function(o) {
        var s = Sr(o);
        return yt(s) && (s = r), dd(Zn(o, yt), _e(s, 2));
      }), L2 = Ne(function(o) {
        var s = Sr(o);
        return s = typeof s == "function" ? s : r, dd(Zn(o, yt), r, s);
      }), B2 = Ne(Td);
      function F2(o, s) {
        return tm(o || [], s || [], Fo);
      }
      function W2(o, s) {
        return tm(o || [], s || [], Ho);
      }
      var z2 = Ne(function(o) {
        var s = o.length, p = s > 1 ? o[s - 1] : r;
        return p = typeof p == "function" ? (o.pop(), p) : r, Dm(o, p);
      });
      function Lm(o) {
        var s = T(o);
        return s.__chain__ = !0, s;
      }
      function U2(o, s) {
        return s(o), o;
      }
      function tc(o, s) {
        return s(o);
      }
      var H2 = wn(function(o) {
        var s = o.length, p = s ? o[0] : 0, m = this.__wrapped__, P = function($) {
          return Qf($, o);
        };
        return s > 1 || this.__actions__.length || !(m instanceof Be) || !_n(p) ? this.thru(P) : (m = m.slice(p, +p + (s ? 1 : 0)), m.__actions__.push({
          func: tc,
          args: [P],
          thisArg: r
        }), new _r(m, this.__chain__).thru(function($) {
          return s && !$.length && $.push(r), $;
        }));
      });
      function G2() {
        return Lm(this);
      }
      function K2() {
        return new _r(this.value(), this.__chain__);
      }
      function q2() {
        this.__values__ === r && (this.__values__ = Jm(this.value()));
        var o = this.__index__ >= this.__values__.length, s = o ? r : this.__values__[this.__index__++];
        return { done: o, value: s };
      }
      function V2() {
        return this;
      }
      function Y2(o) {
        for (var s, p = this; p instanceof Fs; ) {
          var m = Mm(p);
          m.__index__ = 0, m.__values__ = r, s ? P.__wrapped__ = m : s = m;
          var P = m;
          p = p.__wrapped__;
        }
        return P.__wrapped__ = o, s;
      }
      function X2() {
        var o = this.__wrapped__;
        if (o instanceof Be) {
          var s = o;
          return this.__actions__.length && (s = new Be(this)), s = s.reverse(), s.__actions__.push({
            func: tc,
            args: [Ed],
            thisArg: r
          }), new _r(s, this.__chain__);
        }
        return this.thru(Ed);
      }
      function Z2() {
        return em(this.__wrapped__, this.__actions__);
      }
      var J2 = qs(function(o, s, p) {
        Xe.call(o, p) ? ++o[p] : bn(o, p, 1);
      });
      function Q2(o, s, p) {
        var m = Ce(o) ? hy : UT;
        return p && Wt(o, s, p) && (s = r), m(o, _e(s, 3));
      }
      function eC(o, s) {
        var p = Ce(o) ? Zn : Dy;
        return p(o, _e(s, 3));
      }
      var tC = fm(Im), rC = fm(km);
      function nC(o, s) {
        return jt(rc(o, s), 1);
      }
      function iC(o, s) {
        return jt(rc(o, s), Z);
      }
      function aC(o, s, p) {
        return p = p === r ? 1 : Ie(p), jt(rc(o, s), p);
      }
      function Bm(o, s) {
        var p = Ce(o) ? xr : ti;
        return p(o, _e(s, 3));
      }
      function Fm(o, s) {
        var p = Ce(o) ? AE : Ny;
        return p(o, _e(s, 3));
      }
      var oC = qs(function(o, s, p) {
        Xe.call(o, p) ? o[p].push(s) : bn(o, p, [s]);
      });
      function uC(o, s, p, m) {
        o = Xt(o) ? o : Aa(o), p = p && !m ? Ie(p) : 0;
        var P = o.length;
        return p < 0 && (p = _t(P + p, 0)), uc(o) ? p <= P && o.indexOf(s, p) > -1 : !!P && da(o, s, p) > -1;
      }
      var sC = Ne(function(o, s, p) {
        var m = -1, P = typeof s == "function", $ = Xt(o) ? q(o.length) : [];
        return ti(o, function(I) {
          $[++m] = P ? ir(s, I, p) : zo(I, s, p);
        }), $;
      }), cC = qs(function(o, s, p) {
        bn(o, p, s);
      });
      function rc(o, s) {
        var p = Ce(o) ? ft : Uy;
        return p(o, _e(s, 3));
      }
      function lC(o, s, p, m) {
        return o == null ? [] : (Ce(s) || (s = s == null ? [] : [s]), p = m ? r : p, Ce(p) || (p = p == null ? [] : [p]), qy(o, s, p));
      }
      var fC = qs(function(o, s, p) {
        o[p ? 0 : 1].push(s);
      }, function() {
        return [[], []];
      });
      function dC(o, s, p) {
        var m = Ce(o) ? Ff : yy, P = arguments.length < 3;
        return m(o, _e(s, 4), p, P, ti);
      }
      function hC(o, s, p) {
        var m = Ce(o) ? SE : yy, P = arguments.length < 3;
        return m(o, _e(s, 4), p, P, Ny);
      }
      function pC(o, s) {
        var p = Ce(o) ? Zn : Dy;
        return p(o, ac(_e(s, 3)));
      }
      function vC(o) {
        var s = Ce(o) ? Iy : u$;
        return s(o);
      }
      function gC(o, s, p) {
        (p ? Wt(o, s, p) : s === r) ? s = 1 : s = Ie(s);
        var m = Ce(o) ? LT : s$;
        return m(o, s);
      }
      function yC(o) {
        var s = Ce(o) ? BT : l$;
        return s(o);
      }
      function mC(o) {
        if (o == null)
          return 0;
        if (Xt(o))
          return uc(o) ? pa(o) : o.length;
        var s = Dt(o);
        return s == be || s == gt ? o.size : ad(o).length;
      }
      function bC(o, s, p) {
        var m = Ce(o) ? Wf : f$;
        return p && Wt(o, s, p) && (s = r), m(o, _e(s, 3));
      }
      var xC = Ne(function(o, s) {
        if (o == null)
          return [];
        var p = s.length;
        return p > 1 && Wt(o, s[0], s[1]) ? s = [] : p > 2 && Wt(s[0], s[1], s[2]) && (s = [s[0]]), qy(o, jt(s, 1), []);
      }), nc = eT || function() {
        return kt.Date.now();
      };
      function wC(o, s) {
        if (typeof s != "function")
          throw new wr(u);
        return o = Ie(o), function() {
          if (--o < 1)
            return s.apply(this, arguments);
        };
      }
      function Wm(o, s, p) {
        return s = p ? r : s, s = o && s == null ? o.length : s, xn(o, C, r, r, r, r, s);
      }
      function zm(o, s) {
        var p;
        if (typeof s != "function")
          throw new wr(u);
        return o = Ie(o), function() {
          return --o > 0 && (p = s.apply(this, arguments)), o <= 1 && (s = r), p;
        };
      }
      var $d = Ne(function(o, s, p) {
        var m = w;
        if (p.length) {
          var P = Qn(p, _a($d));
          m |= b;
        }
        return xn(o, m, s, p, P);
      }), Um = Ne(function(o, s, p) {
        var m = w | A;
        if (p.length) {
          var P = Qn(p, _a(Um));
          m |= b;
        }
        return xn(s, m, o, p, P);
      });
      function Hm(o, s, p) {
        s = p ? r : s;
        var m = xn(o, S, r, r, r, r, r, s);
        return m.placeholder = Hm.placeholder, m;
      }
      function Gm(o, s, p) {
        s = p ? r : s;
        var m = xn(o, _, r, r, r, r, r, s);
        return m.placeholder = Gm.placeholder, m;
      }
      function Km(o, s, p) {
        var m, P, $, I, R, W, ee = 0, te = !1, ie = !1, le = !0;
        if (typeof o != "function")
          throw new wr(u);
        s = Pr(s) || 0, pt(p) && (te = !!p.leading, ie = "maxWait" in p, $ = ie ? _t(Pr(p.maxWait) || 0, s) : $, le = "trailing" in p ? !!p.trailing : le);
        function ve(mt) {
          var zr = m, Sn = P;
          return m = P = r, ee = mt, I = o.apply(Sn, zr), I;
        }
        function Oe(mt) {
          return ee = mt, R = qo(De, s), te ? ve(mt) : I;
        }
        function Re(mt) {
          var zr = mt - W, Sn = mt - ee, fb = s - zr;
          return ie ? Nt(fb, $ - Sn) : fb;
        }
        function Ae(mt) {
          var zr = mt - W, Sn = mt - ee;
          return W === r || zr >= s || zr < 0 || ie && Sn >= $;
        }
        function De() {
          var mt = nc();
          if (Ae(mt))
            return Fe(mt);
          R = qo(De, Re(mt));
        }
        function Fe(mt) {
          return R = r, le && m ? ve(mt) : (m = P = r, I);
        }
        function sr() {
          R !== r && rm(R), ee = 0, m = W = P = R = r;
        }
        function zt() {
          return R === r ? I : Fe(nc());
        }
        function cr() {
          var mt = nc(), zr = Ae(mt);
          if (m = arguments, P = this, W = mt, zr) {
            if (R === r)
              return Oe(W);
            if (ie)
              return rm(R), R = qo(De, s), ve(W);
          }
          return R === r && (R = qo(De, s)), I;
        }
        return cr.cancel = sr, cr.flush = zt, cr;
      }
      var _C = Ne(function(o, s) {
        return Ry(o, 1, s);
      }), OC = Ne(function(o, s, p) {
        return Ry(o, Pr(s) || 0, p);
      });
      function AC(o) {
        return xn(o, F);
      }
      function ic(o, s) {
        if (typeof o != "function" || s != null && typeof s != "function")
          throw new wr(u);
        var p = function() {
          var m = arguments, P = s ? s.apply(this, m) : m[0], $ = p.cache;
          if ($.has(P))
            return $.get(P);
          var I = o.apply(this, m);
          return p.cache = $.set(P, I) || $, I;
        };
        return p.cache = new (ic.Cache || mn)(), p;
      }
      ic.Cache = mn;
      function ac(o) {
        if (typeof o != "function")
          throw new wr(u);
        return function() {
          var s = arguments;
          switch (s.length) {
            case 0:
              return !o.call(this);
            case 1:
              return !o.call(this, s[0]);
            case 2:
              return !o.call(this, s[0], s[1]);
            case 3:
              return !o.call(this, s[0], s[1], s[2]);
          }
          return !o.apply(this, s);
        };
      }
      function SC(o) {
        return zm(2, o);
      }
      var PC = d$(function(o, s) {
        s = s.length == 1 && Ce(s[0]) ? ft(s[0], ar(_e())) : ft(jt(s, 1), ar(_e()));
        var p = s.length;
        return Ne(function(m) {
          for (var P = -1, $ = Nt(m.length, p); ++P < $; )
            m[P] = s[P].call(this, m[P]);
          return ir(o, this, m);
        });
      }), Cd = Ne(function(o, s) {
        var p = Qn(s, _a(Cd));
        return xn(o, b, r, s, p);
      }), qm = Ne(function(o, s) {
        var p = Qn(s, _a(qm));
        return xn(o, E, r, s, p);
      }), EC = wn(function(o, s) {
        return xn(o, M, r, r, r, s);
      });
      function TC(o, s) {
        if (typeof o != "function")
          throw new wr(u);
        return s = s === r ? s : Ie(s), Ne(o, s);
      }
      function $C(o, s) {
        if (typeof o != "function")
          throw new wr(u);
        return s = s == null ? 0 : _t(Ie(s), 0), Ne(function(p) {
          var m = p[s], P = ii(p, 0, s);
          return m && Jn(P, m), ir(o, this, P);
        });
      }
      function CC(o, s, p) {
        var m = !0, P = !0;
        if (typeof o != "function")
          throw new wr(u);
        return pt(p) && (m = "leading" in p ? !!p.leading : m, P = "trailing" in p ? !!p.trailing : P), Km(o, s, {
          leading: m,
          maxWait: s,
          trailing: P
        });
      }
      function MC(o) {
        return Wm(o, 1);
      }
      function IC(o, s) {
        return Cd(pd(s), o);
      }
      function kC() {
        if (!arguments.length)
          return [];
        var o = arguments[0];
        return Ce(o) ? o : [o];
      }
      function jC(o) {
        return Or(o, g);
      }
      function RC(o, s) {
        return s = typeof s == "function" ? s : r, Or(o, g, s);
      }
      function NC(o) {
        return Or(o, h | g);
      }
      function DC(o, s) {
        return s = typeof s == "function" ? s : r, Or(o, h | g, s);
      }
      function LC(o, s) {
        return s == null || jy(o, s, $t(s));
      }
      function Wr(o, s) {
        return o === s || o !== o && s !== s;
      }
      var BC = Zs(rd), FC = Zs(function(o, s) {
        return o >= s;
      }), Ni = Fy(/* @__PURE__ */ function() {
        return arguments;
      }()) ? Fy : function(o) {
        return vt(o) && Xe.call(o, "callee") && !Py.call(o, "callee");
      }, Ce = q.isArray, WC = uy ? ar(uy) : YT;
      function Xt(o) {
        return o != null && oc(o.length) && !On(o);
      }
      function yt(o) {
        return vt(o) && Xt(o);
      }
      function zC(o) {
        return o === !0 || o === !1 || vt(o) && Ft(o) == we;
      }
      var ai = rT || Wd, UC = sy ? ar(sy) : XT;
      function HC(o) {
        return vt(o) && o.nodeType === 1 && !Vo(o);
      }
      function GC(o) {
        if (o == null)
          return !0;
        if (Xt(o) && (Ce(o) || typeof o == "string" || typeof o.splice == "function" || ai(o) || Oa(o) || Ni(o)))
          return !o.length;
        var s = Dt(o);
        if (s == be || s == gt)
          return !o.size;
        if (Ko(o))
          return !ad(o).length;
        for (var p in o)
          if (Xe.call(o, p))
            return !1;
        return !0;
      }
      function KC(o, s) {
        return Uo(o, s);
      }
      function qC(o, s, p) {
        p = typeof p == "function" ? p : r;
        var m = p ? p(o, s) : r;
        return m === r ? Uo(o, s, r, p) : !!m;
      }
      function Md(o) {
        if (!vt(o))
          return !1;
        var s = Ft(o);
        return s == pe || s == se || typeof o.message == "string" && typeof o.name == "string" && !Vo(o);
      }
      function VC(o) {
        return typeof o == "number" && Ty(o);
      }
      function On(o) {
        if (!pt(o))
          return !1;
        var s = Ft(o);
        return s == j || s == Ee || s == ye || s == Lr;
      }
      function Vm(o) {
        return typeof o == "number" && o == Ie(o);
      }
      function oc(o) {
        return typeof o == "number" && o > -1 && o % 1 == 0 && o <= K;
      }
      function pt(o) {
        var s = typeof o;
        return o != null && (s == "object" || s == "function");
      }
      function vt(o) {
        return o != null && typeof o == "object";
      }
      var Ym = cy ? ar(cy) : JT;
      function YC(o, s) {
        return o === s || id(o, s, wd(s));
      }
      function XC(o, s, p) {
        return p = typeof p == "function" ? p : r, id(o, s, wd(s), p);
      }
      function ZC(o) {
        return Xm(o) && o != +o;
      }
      function JC(o) {
        if (R$(o))
          throw new $e(a);
        return Wy(o);
      }
      function QC(o) {
        return o === null;
      }
      function eM(o) {
        return o == null;
      }
      function Xm(o) {
        return typeof o == "number" || vt(o) && Ft(o) == We;
      }
      function Vo(o) {
        if (!vt(o) || Ft(o) != at)
          return !1;
        var s = ks(o);
        if (s === null)
          return !0;
        var p = Xe.call(s, "constructor") && s.constructor;
        return typeof p == "function" && p instanceof p && $s.call(p) == XE;
      }
      var Id = ly ? ar(ly) : QT;
      function tM(o) {
        return Vm(o) && o >= -K && o <= K;
      }
      var Zm = fy ? ar(fy) : e$;
      function uc(o) {
        return typeof o == "string" || !Ce(o) && vt(o) && Ft(o) == gn;
      }
      function ur(o) {
        return typeof o == "symbol" || vt(o) && Ft(o) == Yn;
      }
      var Oa = dy ? ar(dy) : t$;
      function rM(o) {
        return o === r;
      }
      function nM(o) {
        return vt(o) && Dt(o) == Xn;
      }
      function iM(o) {
        return vt(o) && Ft(o) == xs;
      }
      var aM = Zs(od), oM = Zs(function(o, s) {
        return o <= s;
      });
      function Jm(o) {
        if (!o)
          return [];
        if (Xt(o))
          return uc(o) ? Br(o) : Yt(o);
        if (Ro && o[Ro])
          return LE(o[Ro]());
        var s = Dt(o), p = s == be ? qf : s == gt ? Ps : Aa;
        return p(o);
      }
      function An(o) {
        if (!o)
          return o === 0 ? o : 0;
        if (o = Pr(o), o === Z || o === -Z) {
          var s = o < 0 ? -1 : 1;
          return s * ue;
        }
        return o === o ? o : 0;
      }
      function Ie(o) {
        var s = An(o), p = s % 1;
        return s === s ? p ? s - p : s : 0;
      }
      function Qm(o) {
        return o ? Ii(Ie(o), 0, X) : 0;
      }
      function Pr(o) {
        if (typeof o == "number")
          return o;
        if (ur(o))
          return G;
        if (pt(o)) {
          var s = typeof o.valueOf == "function" ? o.valueOf() : o;
          o = pt(s) ? s + "" : s;
        }
        if (typeof o != "string")
          return o === 0 ? o : +o;
        o = my(o);
        var p = WP.test(o);
        return p || UP.test(o) ? wE(o.slice(2), p ? 2 : 8) : FP.test(o) ? G : +o;
      }
      function eb(o) {
        return tn(o, Zt(o));
      }
      function uM(o) {
        return o ? Ii(Ie(o), -K, K) : o === 0 ? o : 0;
      }
      function Ge(o) {
        return o == null ? "" : or(o);
      }
      var sM = xa(function(o, s) {
        if (Ko(s) || Xt(s)) {
          tn(s, $t(s), o);
          return;
        }
        for (var p in s)
          Xe.call(s, p) && Fo(o, p, s[p]);
      }), tb = xa(function(o, s) {
        tn(s, Zt(s), o);
      }), sc = xa(function(o, s, p, m) {
        tn(s, Zt(s), o, m);
      }), cM = xa(function(o, s, p, m) {
        tn(s, $t(s), o, m);
      }), lM = wn(Qf);
      function fM(o, s) {
        var p = ba(o);
        return s == null ? p : ky(p, s);
      }
      var dM = Ne(function(o, s) {
        o = Qe(o);
        var p = -1, m = s.length, P = m > 2 ? s[2] : r;
        for (P && Wt(s[0], s[1], P) && (m = 1); ++p < m; )
          for (var $ = s[p], I = Zt($), R = -1, W = I.length; ++R < W; ) {
            var ee = I[R], te = o[ee];
            (te === r || Wr(te, ga[ee]) && !Xe.call(o, ee)) && (o[ee] = $[ee]);
          }
        return o;
      }), hM = Ne(function(o) {
        return o.push(r, mm), ir(rb, r, o);
      });
      function pM(o, s) {
        return py(o, _e(s, 3), en);
      }
      function vM(o, s) {
        return py(o, _e(s, 3), td);
      }
      function gM(o, s) {
        return o == null ? o : ed(o, _e(s, 3), Zt);
      }
      function yM(o, s) {
        return o == null ? o : Ly(o, _e(s, 3), Zt);
      }
      function mM(o, s) {
        return o && en(o, _e(s, 3));
      }
      function bM(o, s) {
        return o && td(o, _e(s, 3));
      }
      function xM(o) {
        return o == null ? [] : Us(o, $t(o));
      }
      function wM(o) {
        return o == null ? [] : Us(o, Zt(o));
      }
      function kd(o, s, p) {
        var m = o == null ? r : ki(o, s);
        return m === r ? p : m;
      }
      function _M(o, s) {
        return o != null && wm(o, s, GT);
      }
      function jd(o, s) {
        return o != null && wm(o, s, KT);
      }
      var OM = hm(function(o, s, p) {
        s != null && typeof s.toString != "function" && (s = Cs.call(s)), o[s] = p;
      }, Nd(Jt)), AM = hm(function(o, s, p) {
        s != null && typeof s.toString != "function" && (s = Cs.call(s)), Xe.call(o, s) ? o[s].push(p) : o[s] = [p];
      }, _e), SM = Ne(zo);
      function $t(o) {
        return Xt(o) ? My(o) : ad(o);
      }
      function Zt(o) {
        return Xt(o) ? My(o, !0) : r$(o);
      }
      function PM(o, s) {
        var p = {};
        return s = _e(s, 3), en(o, function(m, P, $) {
          bn(p, s(m, P, $), m);
        }), p;
      }
      function EM(o, s) {
        var p = {};
        return s = _e(s, 3), en(o, function(m, P, $) {
          bn(p, P, s(m, P, $));
        }), p;
      }
      var TM = xa(function(o, s, p) {
        Hs(o, s, p);
      }), rb = xa(function(o, s, p, m) {
        Hs(o, s, p, m);
      }), $M = wn(function(o, s) {
        var p = {};
        if (o == null)
          return p;
        var m = !1;
        s = ft(s, function($) {
          return $ = ni($, o), m || (m = $.length > 1), $;
        }), tn(o, bd(o), p), m && (p = Or(p, h | v | g, O$));
        for (var P = s.length; P--; )
          fd(p, s[P]);
        return p;
      });
      function CM(o, s) {
        return nb(o, ac(_e(s)));
      }
      var MM = wn(function(o, s) {
        return o == null ? {} : i$(o, s);
      });
      function nb(o, s) {
        if (o == null)
          return {};
        var p = ft(bd(o), function(m) {
          return [m];
        });
        return s = _e(s), Vy(o, p, function(m, P) {
          return s(m, P[0]);
        });
      }
      function IM(o, s, p) {
        s = ni(s, o);
        var m = -1, P = s.length;
        for (P || (P = 1, o = r); ++m < P; ) {
          var $ = o == null ? r : o[rn(s[m])];
          $ === r && (m = P, $ = p), o = On($) ? $.call(o) : $;
        }
        return o;
      }
      function kM(o, s, p) {
        return o == null ? o : Ho(o, s, p);
      }
      function jM(o, s, p, m) {
        return m = typeof m == "function" ? m : r, o == null ? o : Ho(o, s, p, m);
      }
      var ib = gm($t), ab = gm(Zt);
      function RM(o, s, p) {
        var m = Ce(o), P = m || ai(o) || Oa(o);
        if (s = _e(s, 4), p == null) {
          var $ = o && o.constructor;
          P ? p = m ? new $() : [] : pt(o) ? p = On($) ? ba(ks(o)) : {} : p = {};
        }
        return (P ? xr : en)(o, function(I, R, W) {
          return s(p, I, R, W);
        }), p;
      }
      function NM(o, s) {
        return o == null ? !0 : fd(o, s);
      }
      function DM(o, s, p) {
        return o == null ? o : Qy(o, s, pd(p));
      }
      function LM(o, s, p, m) {
        return m = typeof m == "function" ? m : r, o == null ? o : Qy(o, s, pd(p), m);
      }
      function Aa(o) {
        return o == null ? [] : Kf(o, $t(o));
      }
      function BM(o) {
        return o == null ? [] : Kf(o, Zt(o));
      }
      function FM(o, s, p) {
        return p === r && (p = s, s = r), p !== r && (p = Pr(p), p = p === p ? p : 0), s !== r && (s = Pr(s), s = s === s ? s : 0), Ii(Pr(o), s, p);
      }
      function WM(o, s, p) {
        return s = An(s), p === r ? (p = s, s = 0) : p = An(p), o = Pr(o), qT(o, s, p);
      }
      function zM(o, s, p) {
        if (p && typeof p != "boolean" && Wt(o, s, p) && (s = p = r), p === r && (typeof s == "boolean" ? (p = s, s = r) : typeof o == "boolean" && (p = o, o = r)), o === r && s === r ? (o = 0, s = 1) : (o = An(o), s === r ? (s = o, o = 0) : s = An(s)), o > s) {
          var m = o;
          o = s, s = m;
        }
        if (p || o % 1 || s % 1) {
          var P = $y();
          return Nt(o + P * (s - o + xE("1e-" + ((P + "").length - 1))), s);
        }
        return sd(o, s);
      }
      var UM = wa(function(o, s, p) {
        return s = s.toLowerCase(), o + (p ? ob(s) : s);
      });
      function ob(o) {
        return Rd(Ge(o).toLowerCase());
      }
      function ub(o) {
        return o = Ge(o), o && o.replace(GP, kE).replace(lE, "");
      }
      function HM(o, s, p) {
        o = Ge(o), s = or(s);
        var m = o.length;
        p = p === r ? m : Ii(Ie(p), 0, m);
        var P = p;
        return p -= s.length, p >= 0 && o.slice(p, P) == s;
      }
      function GM(o) {
        return o = Ge(o), o && SP.test(o) ? o.replace(Lg, jE) : o;
      }
      function KM(o) {
        return o = Ge(o), o && MP.test(o) ? o.replace(Cf, "\\$&") : o;
      }
      var qM = wa(function(o, s, p) {
        return o + (p ? "-" : "") + s.toLowerCase();
      }), VM = wa(function(o, s, p) {
        return o + (p ? " " : "") + s.toLowerCase();
      }), YM = lm("toLowerCase");
      function XM(o, s, p) {
        o = Ge(o), s = Ie(s);
        var m = s ? pa(o) : 0;
        if (!s || m >= s)
          return o;
        var P = (s - m) / 2;
        return Xs(Ds(P), p) + o + Xs(Ns(P), p);
      }
      function ZM(o, s, p) {
        o = Ge(o), s = Ie(s);
        var m = s ? pa(o) : 0;
        return s && m < s ? o + Xs(s - m, p) : o;
      }
      function JM(o, s, p) {
        o = Ge(o), s = Ie(s);
        var m = s ? pa(o) : 0;
        return s && m < s ? Xs(s - m, p) + o : o;
      }
      function QM(o, s, p) {
        return p || s == null ? s = 0 : s && (s = +s), oT(Ge(o).replace(Mf, ""), s || 0);
      }
      function eI(o, s, p) {
        return (p ? Wt(o, s, p) : s === r) ? s = 1 : s = Ie(s), cd(Ge(o), s);
      }
      function tI() {
        var o = arguments, s = Ge(o[0]);
        return o.length < 3 ? s : s.replace(o[1], o[2]);
      }
      var rI = wa(function(o, s, p) {
        return o + (p ? "_" : "") + s.toLowerCase();
      });
      function nI(o, s, p) {
        return p && typeof p != "number" && Wt(o, s, p) && (s = p = r), p = p === r ? X : p >>> 0, p ? (o = Ge(o), o && (typeof s == "string" || s != null && !Id(s)) && (s = or(s), !s && ha(o)) ? ii(Br(o), 0, p) : o.split(s, p)) : [];
      }
      var iI = wa(function(o, s, p) {
        return o + (p ? " " : "") + Rd(s);
      });
      function aI(o, s, p) {
        return o = Ge(o), p = p == null ? 0 : Ii(Ie(p), 0, o.length), s = or(s), o.slice(p, p + s.length) == s;
      }
      function oI(o, s, p) {
        var m = T.templateSettings;
        p && Wt(o, s, p) && (s = r), o = Ge(o), s = sc({}, s, m, ym);
        var P = sc({}, s.imports, m.imports, ym), $ = $t(P), I = Kf(P, $), R, W, ee = 0, te = s.interpolate || ws, ie = "__p += '", le = Vf(
          (s.escape || ws).source + "|" + te.source + "|" + (te === Bg ? BP : ws).source + "|" + (s.evaluate || ws).source + "|$",
          "g"
        ), ve = "//# sourceURL=" + (Xe.call(s, "sourceURL") ? (s.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++vE + "]") + `
`;
        o.replace(le, function(Ae, De, Fe, sr, zt, cr) {
          return Fe || (Fe = sr), ie += o.slice(ee, cr).replace(KP, RE), De && (R = !0, ie += `' +
__e(` + De + `) +
'`), zt && (W = !0, ie += `';
` + zt + `;
__p += '`), Fe && (ie += `' +
((__t = (` + Fe + `)) == null ? '' : __t) +
'`), ee = cr + Ae.length, Ae;
        }), ie += `';
`;
        var Oe = Xe.call(s, "variable") && s.variable;
        if (!Oe)
          ie = `with (obj) {
` + ie + `
}
`;
        else if (DP.test(Oe))
          throw new $e(c);
        ie = (W ? ie.replace(wP, "") : ie).replace(_P, "$1").replace(OP, "$1;"), ie = "function(" + (Oe || "obj") + `) {
` + (Oe ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (R ? ", __e = _.escape" : "") + (W ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + ie + `return __p
}`;
        var Re = cb(function() {
          return He($, ve + "return " + ie).apply(r, I);
        });
        if (Re.source = ie, Md(Re))
          throw Re;
        return Re;
      }
      function uI(o) {
        return Ge(o).toLowerCase();
      }
      function sI(o) {
        return Ge(o).toUpperCase();
      }
      function cI(o, s, p) {
        if (o = Ge(o), o && (p || s === r))
          return my(o);
        if (!o || !(s = or(s)))
          return o;
        var m = Br(o), P = Br(s), $ = by(m, P), I = xy(m, P) + 1;
        return ii(m, $, I).join("");
      }
      function lI(o, s, p) {
        if (o = Ge(o), o && (p || s === r))
          return o.slice(0, _y(o) + 1);
        if (!o || !(s = or(s)))
          return o;
        var m = Br(o), P = xy(m, Br(s)) + 1;
        return ii(m, 0, P).join("");
      }
      function fI(o, s, p) {
        if (o = Ge(o), o && (p || s === r))
          return o.replace(Mf, "");
        if (!o || !(s = or(s)))
          return o;
        var m = Br(o), P = by(m, Br(s));
        return ii(m, P).join("");
      }
      function dI(o, s) {
        var p = D, m = B;
        if (pt(s)) {
          var P = "separator" in s ? s.separator : P;
          p = "length" in s ? Ie(s.length) : p, m = "omission" in s ? or(s.omission) : m;
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
        if (I && (R += W.length - R), Id(P)) {
          if (o.slice(R).search(P)) {
            var ee, te = W;
            for (P.global || (P = Vf(P.source, Ge(Fg.exec(P)) + "g")), P.lastIndex = 0; ee = P.exec(te); )
              var ie = ee.index;
            W = W.slice(0, ie === r ? R : ie);
          }
        } else if (o.indexOf(or(P), R) != R) {
          var le = W.lastIndexOf(P);
          le > -1 && (W = W.slice(0, le));
        }
        return W + m;
      }
      function hI(o) {
        return o = Ge(o), o && AP.test(o) ? o.replace(Dg, zE) : o;
      }
      var pI = wa(function(o, s, p) {
        return o + (p ? " " : "") + s.toUpperCase();
      }), Rd = lm("toUpperCase");
      function sb(o, s, p) {
        return o = Ge(o), s = p ? r : s, s === r ? DE(o) ? GE(o) : TE(o) : o.match(s) || [];
      }
      var cb = Ne(function(o, s) {
        try {
          return ir(o, r, s);
        } catch (p) {
          return Md(p) ? p : new $e(p);
        }
      }), vI = wn(function(o, s) {
        return xr(s, function(p) {
          p = rn(p), bn(o, p, $d(o[p], o));
        }), o;
      });
      function gI(o) {
        var s = o == null ? 0 : o.length, p = _e();
        return o = s ? ft(o, function(m) {
          if (typeof m[1] != "function")
            throw new wr(u);
          return [p(m[0]), m[1]];
        }) : [], Ne(function(m) {
          for (var P = -1; ++P < s; ) {
            var $ = o[P];
            if (ir($[0], this, m))
              return ir($[1], this, m);
          }
        });
      }
      function yI(o) {
        return zT(Or(o, h));
      }
      function Nd(o) {
        return function() {
          return o;
        };
      }
      function mI(o, s) {
        return o == null || o !== o ? s : o;
      }
      var bI = dm(), xI = dm(!0);
      function Jt(o) {
        return o;
      }
      function Dd(o) {
        return zy(typeof o == "function" ? o : Or(o, h));
      }
      function wI(o) {
        return Hy(Or(o, h));
      }
      function _I(o, s) {
        return Gy(o, Or(s, h));
      }
      var OI = Ne(function(o, s) {
        return function(p) {
          return zo(p, o, s);
        };
      }), AI = Ne(function(o, s) {
        return function(p) {
          return zo(o, p, s);
        };
      });
      function Ld(o, s, p) {
        var m = $t(s), P = Us(s, m);
        p == null && !(pt(s) && (P.length || !m.length)) && (p = s, s = o, o = this, P = Us(s, $t(s)));
        var $ = !(pt(p) && "chain" in p) || !!p.chain, I = On(o);
        return xr(P, function(R) {
          var W = s[R];
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
      function SI() {
        return kt._ === this && (kt._ = ZE), this;
      }
      function Bd() {
      }
      function PI(o) {
        return o = Ie(o), Ne(function(s) {
          return Ky(s, o);
        });
      }
      var EI = gd(ft), TI = gd(hy), $I = gd(Wf);
      function lb(o) {
        return Od(o) ? zf(rn(o)) : a$(o);
      }
      function CI(o) {
        return function(s) {
          return o == null ? r : ki(o, s);
        };
      }
      var MI = pm(), II = pm(!0);
      function Fd() {
        return [];
      }
      function Wd() {
        return !1;
      }
      function kI() {
        return {};
      }
      function jI() {
        return "";
      }
      function RI() {
        return !0;
      }
      function NI(o, s) {
        if (o = Ie(o), o < 1 || o > K)
          return [];
        var p = X, m = Nt(o, X);
        s = _e(s), o -= X;
        for (var P = Gf(m, s); ++p < o; )
          s(p);
        return P;
      }
      function DI(o) {
        return Ce(o) ? ft(o, rn) : ur(o) ? [o] : Yt(Cm(Ge(o)));
      }
      function LI(o) {
        var s = ++YE;
        return Ge(o) + s;
      }
      var BI = Ys(function(o, s) {
        return o + s;
      }, 0), FI = yd("ceil"), WI = Ys(function(o, s) {
        return o / s;
      }, 1), zI = yd("floor");
      function UI(o) {
        return o && o.length ? zs(o, Jt, rd) : r;
      }
      function HI(o, s) {
        return o && o.length ? zs(o, _e(s, 2), rd) : r;
      }
      function GI(o) {
        return gy(o, Jt);
      }
      function KI(o, s) {
        return gy(o, _e(s, 2));
      }
      function qI(o) {
        return o && o.length ? zs(o, Jt, od) : r;
      }
      function VI(o, s) {
        return o && o.length ? zs(o, _e(s, 2), od) : r;
      }
      var YI = Ys(function(o, s) {
        return o * s;
      }, 1), XI = yd("round"), ZI = Ys(function(o, s) {
        return o - s;
      }, 0);
      function JI(o) {
        return o && o.length ? Hf(o, Jt) : 0;
      }
      function QI(o, s) {
        return o && o.length ? Hf(o, _e(s, 2)) : 0;
      }
      return T.after = wC, T.ary = Wm, T.assign = sM, T.assignIn = tb, T.assignInWith = sc, T.assignWith = cM, T.at = lM, T.before = zm, T.bind = $d, T.bindAll = vI, T.bindKey = Um, T.castArray = kC, T.chain = Lm, T.chunk = z$, T.compact = U$, T.concat = H$, T.cond = gI, T.conforms = yI, T.constant = Nd, T.countBy = J2, T.create = fM, T.curry = Hm, T.curryRight = Gm, T.debounce = Km, T.defaults = dM, T.defaultsDeep = hM, T.defer = _C, T.delay = OC, T.difference = G$, T.differenceBy = K$, T.differenceWith = q$, T.drop = V$, T.dropRight = Y$, T.dropRightWhile = X$, T.dropWhile = Z$, T.fill = J$, T.filter = eC, T.flatMap = nC, T.flatMapDeep = iC, T.flatMapDepth = aC, T.flatten = jm, T.flattenDeep = Q$, T.flattenDepth = e2, T.flip = AC, T.flow = bI, T.flowRight = xI, T.fromPairs = t2, T.functions = xM, T.functionsIn = wM, T.groupBy = oC, T.initial = n2, T.intersection = i2, T.intersectionBy = a2, T.intersectionWith = o2, T.invert = OM, T.invertBy = AM, T.invokeMap = sC, T.iteratee = Dd, T.keyBy = cC, T.keys = $t, T.keysIn = Zt, T.map = rc, T.mapKeys = PM, T.mapValues = EM, T.matches = wI, T.matchesProperty = _I, T.memoize = ic, T.merge = TM, T.mergeWith = rb, T.method = OI, T.methodOf = AI, T.mixin = Ld, T.negate = ac, T.nthArg = PI, T.omit = $M, T.omitBy = CM, T.once = SC, T.orderBy = lC, T.over = EI, T.overArgs = PC, T.overEvery = TI, T.overSome = $I, T.partial = Cd, T.partialRight = qm, T.partition = fC, T.pick = MM, T.pickBy = nb, T.property = lb, T.propertyOf = CI, T.pull = l2, T.pullAll = Nm, T.pullAllBy = f2, T.pullAllWith = d2, T.pullAt = h2, T.range = MI, T.rangeRight = II, T.rearg = EC, T.reject = pC, T.remove = p2, T.rest = TC, T.reverse = Ed, T.sampleSize = gC, T.set = kM, T.setWith = jM, T.shuffle = yC, T.slice = v2, T.sortBy = xC, T.sortedUniq = _2, T.sortedUniqBy = O2, T.split = nI, T.spread = $C, T.tail = A2, T.take = S2, T.takeRight = P2, T.takeRightWhile = E2, T.takeWhile = T2, T.tap = U2, T.throttle = CC, T.thru = tc, T.toArray = Jm, T.toPairs = ib, T.toPairsIn = ab, T.toPath = DI, T.toPlainObject = eb, T.transform = RM, T.unary = MC, T.union = $2, T.unionBy = C2, T.unionWith = M2, T.uniq = I2, T.uniqBy = k2, T.uniqWith = j2, T.unset = NM, T.unzip = Td, T.unzipWith = Dm, T.update = DM, T.updateWith = LM, T.values = Aa, T.valuesIn = BM, T.without = R2, T.words = sb, T.wrap = IC, T.xor = N2, T.xorBy = D2, T.xorWith = L2, T.zip = B2, T.zipObject = F2, T.zipObjectDeep = W2, T.zipWith = z2, T.entries = ib, T.entriesIn = ab, T.extend = tb, T.extendWith = sc, Ld(T, T), T.add = BI, T.attempt = cb, T.camelCase = UM, T.capitalize = ob, T.ceil = FI, T.clamp = FM, T.clone = jC, T.cloneDeep = NC, T.cloneDeepWith = DC, T.cloneWith = RC, T.conformsTo = LC, T.deburr = ub, T.defaultTo = mI, T.divide = WI, T.endsWith = HM, T.eq = Wr, T.escape = GM, T.escapeRegExp = KM, T.every = Q2, T.find = tC, T.findIndex = Im, T.findKey = pM, T.findLast = rC, T.findLastIndex = km, T.findLastKey = vM, T.floor = zI, T.forEach = Bm, T.forEachRight = Fm, T.forIn = gM, T.forInRight = yM, T.forOwn = mM, T.forOwnRight = bM, T.get = kd, T.gt = BC, T.gte = FC, T.has = _M, T.hasIn = jd, T.head = Rm, T.identity = Jt, T.includes = uC, T.indexOf = r2, T.inRange = WM, T.invoke = SM, T.isArguments = Ni, T.isArray = Ce, T.isArrayBuffer = WC, T.isArrayLike = Xt, T.isArrayLikeObject = yt, T.isBoolean = zC, T.isBuffer = ai, T.isDate = UC, T.isElement = HC, T.isEmpty = GC, T.isEqual = KC, T.isEqualWith = qC, T.isError = Md, T.isFinite = VC, T.isFunction = On, T.isInteger = Vm, T.isLength = oc, T.isMap = Ym, T.isMatch = YC, T.isMatchWith = XC, T.isNaN = ZC, T.isNative = JC, T.isNil = eM, T.isNull = QC, T.isNumber = Xm, T.isObject = pt, T.isObjectLike = vt, T.isPlainObject = Vo, T.isRegExp = Id, T.isSafeInteger = tM, T.isSet = Zm, T.isString = uc, T.isSymbol = ur, T.isTypedArray = Oa, T.isUndefined = rM, T.isWeakMap = nM, T.isWeakSet = iM, T.join = u2, T.kebabCase = qM, T.last = Sr, T.lastIndexOf = s2, T.lowerCase = VM, T.lowerFirst = YM, T.lt = aM, T.lte = oM, T.max = UI, T.maxBy = HI, T.mean = GI, T.meanBy = KI, T.min = qI, T.minBy = VI, T.stubArray = Fd, T.stubFalse = Wd, T.stubObject = kI, T.stubString = jI, T.stubTrue = RI, T.multiply = YI, T.nth = c2, T.noConflict = SI, T.noop = Bd, T.now = nc, T.pad = XM, T.padEnd = ZM, T.padStart = JM, T.parseInt = QM, T.random = zM, T.reduce = dC, T.reduceRight = hC, T.repeat = eI, T.replace = tI, T.result = IM, T.round = XI, T.runInContext = L, T.sample = vC, T.size = mC, T.snakeCase = rI, T.some = bC, T.sortedIndex = g2, T.sortedIndexBy = y2, T.sortedIndexOf = m2, T.sortedLastIndex = b2, T.sortedLastIndexBy = x2, T.sortedLastIndexOf = w2, T.startCase = iI, T.startsWith = aI, T.subtract = ZI, T.sum = JI, T.sumBy = QI, T.template = oI, T.times = NI, T.toFinite = An, T.toInteger = Ie, T.toLength = Qm, T.toLower = uI, T.toNumber = Pr, T.toSafeInteger = uM, T.toString = Ge, T.toUpper = sI, T.trim = cI, T.trimEnd = lI, T.trimStart = fI, T.truncate = dI, T.unescape = hI, T.uniqueId = LI, T.upperCase = pI, T.upperFirst = Rd, T.each = Bm, T.eachRight = Fm, T.first = Rm, Ld(T, function() {
        var o = {};
        return en(T, function(s, p) {
          Xe.call(T.prototype, p) || (o[p] = s);
        }), o;
      }(), { chain: !1 }), T.VERSION = n, xr(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(o) {
        T[o].placeholder = T;
      }), xr(["drop", "take"], function(o, s) {
        Be.prototype[o] = function(p) {
          p = p === r ? 1 : _t(Ie(p), 0);
          var m = this.__filtered__ && !s ? new Be(this) : this.clone();
          return m.__filtered__ ? m.__takeCount__ = Nt(p, m.__takeCount__) : m.__views__.push({
            size: Nt(p, X),
            type: o + (m.__dir__ < 0 ? "Right" : "")
          }), m;
        }, Be.prototype[o + "Right"] = function(p) {
          return this.reverse()[o](p).reverse();
        };
      }), xr(["filter", "map", "takeWhile"], function(o, s) {
        var p = s + 1, m = p == z || p == H;
        Be.prototype[o] = function(P) {
          var $ = this.clone();
          return $.__iteratees__.push({
            iteratee: _e(P, 3),
            type: p
          }), $.__filtered__ = $.__filtered__ || m, $;
        };
      }), xr(["head", "last"], function(o, s) {
        var p = "take" + (s ? "Right" : "");
        Be.prototype[o] = function() {
          return this[p](1).value()[0];
        };
      }), xr(["initial", "tail"], function(o, s) {
        var p = "drop" + (s ? "" : "Right");
        Be.prototype[o] = function() {
          return this.__filtered__ ? new Be(this) : this[p](1);
        };
      }), Be.prototype.compact = function() {
        return this.filter(Jt);
      }, Be.prototype.find = function(o) {
        return this.filter(o).head();
      }, Be.prototype.findLast = function(o) {
        return this.reverse().find(o);
      }, Be.prototype.invokeMap = Ne(function(o, s) {
        return typeof o == "function" ? new Be(this) : this.map(function(p) {
          return zo(p, o, s);
        });
      }), Be.prototype.reject = function(o) {
        return this.filter(ac(_e(o)));
      }, Be.prototype.slice = function(o, s) {
        o = Ie(o);
        var p = this;
        return p.__filtered__ && (o > 0 || s < 0) ? new Be(p) : (o < 0 ? p = p.takeRight(-o) : o && (p = p.drop(o)), s !== r && (s = Ie(s), p = s < 0 ? p.dropRight(-s) : p.take(s - o)), p);
      }, Be.prototype.takeRightWhile = function(o) {
        return this.reverse().takeWhile(o).reverse();
      }, Be.prototype.toArray = function() {
        return this.take(X);
      }, en(Be.prototype, function(o, s) {
        var p = /^(?:filter|find|map|reject)|While$/.test(s), m = /^(?:head|last)$/.test(s), P = T[m ? "take" + (s == "last" ? "Right" : "") : s], $ = m || /^find/.test(s);
        P && (T.prototype[s] = function() {
          var I = this.__wrapped__, R = m ? [1] : arguments, W = I instanceof Be, ee = R[0], te = W || Ce(I), ie = function(De) {
            var Fe = P.apply(T, Jn([De], R));
            return m && le ? Fe[0] : Fe;
          };
          te && p && typeof ee == "function" && ee.length != 1 && (W = te = !1);
          var le = this.__chain__, ve = !!this.__actions__.length, Oe = $ && !le, Re = W && !ve;
          if (!$ && te) {
            I = Re ? I : new Be(this);
            var Ae = o.apply(I, R);
            return Ae.__actions__.push({ func: tc, args: [ie], thisArg: r }), new _r(Ae, le);
          }
          return Oe && Re ? o.apply(this, R) : (Ae = this.thru(ie), Oe ? m ? Ae.value()[0] : Ae.value() : Ae);
        });
      }), xr(["pop", "push", "shift", "sort", "splice", "unshift"], function(o) {
        var s = Es[o], p = /^(?:push|sort|unshift)$/.test(o) ? "tap" : "thru", m = /^(?:pop|shift)$/.test(o);
        T.prototype[o] = function() {
          var P = arguments;
          if (m && !this.__chain__) {
            var $ = this.value();
            return s.apply(Ce($) ? $ : [], P);
          }
          return this[p](function(I) {
            return s.apply(Ce(I) ? I : [], P);
          });
        };
      }), en(Be.prototype, function(o, s) {
        var p = T[s];
        if (p) {
          var m = p.name + "";
          Xe.call(ma, m) || (ma[m] = []), ma[m].push({ name: s, func: p });
        }
      }), ma[Vs(r, A).name] = [{
        name: "wrapper",
        func: r
      }], Be.prototype.clone = hT, Be.prototype.reverse = pT, Be.prototype.value = vT, T.prototype.at = H2, T.prototype.chain = G2, T.prototype.commit = K2, T.prototype.next = q2, T.prototype.plant = Y2, T.prototype.reverse = X2, T.prototype.toJSON = T.prototype.valueOf = T.prototype.value = Z2, T.prototype.first = T.prototype.head, Ro && (T.prototype[Ro] = V2), T;
    }, va = KE();
    Ti ? ((Ti.exports = va)._ = va, Df._ = va) : kt._ = va;
  }).call(pr);
})(Ml, Ml.exports);
var Vre = Ml.exports;
function Yre(e) {
  return e.map((t) => ({ x: t.label, ...t.values }));
}
const Xre = (e) => {
  const t = Vre.cloneDeep(e);
  let r = "", n = 0;
  return t.forEach((i) => {
    delete i.x, Object.entries(i).forEach(
      ([a, u]) => {
        n < u && (n = u, r = a);
      }
    );
  }), r;
}, Zre = ({
  dataConfig: e,
  data: t,
  xAxis: r = { hide: !0 },
  yAxis: n,
  label: i = !1,
  aspect: a
}, u) => {
  const c = Object.keys(e), l = Yre(t), f = Math.max(
    ...l.map((v) => df(`${v.x}`))
  ), d = {
    ...Ag(r),
    type: "number",
    dataKey: Xre(l)
  }, h = {
    ...Sg(n),
    type: "category",
    dataKey: "x"
  };
  return /* @__PURE__ */ Y(Po, { config: e, ref: u, aspect: a, children: /* @__PURE__ */ nt(
    jS,
    {
      layout: "vertical",
      accessibilityLayer: !0,
      data: l,
      margin: { left: n && !n.hide ? 0 : 12, right: i ? 32 : 0 },
      children: [
        /* @__PURE__ */ Y(
          ys,
          {
            cursor: !0,
            content: /* @__PURE__ */ Y(Eo, { yAxisFormatter: n == null ? void 0 : n.tickFormatter })
          }
        ),
        /* @__PURE__ */ Y(
          vs,
          {
            ...hf(),
            vertical: !0,
            horizontal: !1
          }
        ),
        /* @__PURE__ */ Y(qn, { ...d, hide: r == null ? void 0 : r.hide }),
        /* @__PURE__ */ Y(
          Vn,
          {
            ...h,
            hide: n == null ? void 0 : n.hide,
            width: (n == null ? void 0 : n.width) ?? f + 20
          }
        ),
        c.map((v, g) => /* @__PURE__ */ Y(fv, { children: /* @__PURE__ */ Y(
          Pi,
          {
            isAnimationActive: !1,
            layout: "vertical",
            dataKey: v,
            fill: e[v].color || jn(g),
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
}, Rne = To(Zre), Nne = ak(
  {
    name: "Icon",
    type: "info"
  },
  Q1
);
var Jre = typeof pr == "object" && pr && pr.Object === Object && pr, Qre = typeof self == "object" && self && self.Object === Object && self;
Jre || Qre || Function("return this")();
var ene = typeof window < "u" ? dv : zn, tne = typeof window > "u";
function rne(e, {
  defaultValue: t = !1,
  initializeWithValue: r = !0
} = {}) {
  const n = (c) => tne ? t : window.matchMedia(c).matches, [i, a] = ln(() => r ? n(e) : t);
  function u() {
    a(n(e));
  }
  return ene(() => {
    const c = window.matchMedia(e);
    return u(), c.addListener ? c.addListener(u) : c.addEventListener("change", u), () => {
      c.removeListener ? c.removeListener(u) : c.removeEventListener("change", u);
    };
  }, [e]), i;
}
function nne() {
  const e = Rn(!1);
  return zn(() => (e.current = !0, () => {
    e.current = !1;
  }), []), pi(() => e.current, []);
}
var F1 = {
  width: void 0,
  height: void 0
};
function Dne(e) {
  const { ref: t, box: r = "content-box" } = e, [{ width: n, height: i }, a] = ln(F1), u = nne(), c = Rn({ ...F1 }), l = Rn(void 0);
  return l.current = e.onResize, zn(() => {
    if (!t.current || typeof window > "u" || !("ResizeObserver" in window))
      return;
    const f = new ResizeObserver(([d]) => {
      const h = r === "border-box" ? "borderBoxSize" : r === "device-pixel-content-box" ? "devicePixelContentBoxSize" : "contentBoxSize", v = W1(d, h, "inlineSize"), g = W1(d, h, "blockSize");
      if (c.current.width !== v || c.current.height !== g) {
        const y = { width: v, height: g };
        c.current.width = v, c.current.height = g, l.current ? l.current(y) : u() && a(y);
      }
    });
    return f.observe(t.current, { box: r }), () => {
      f.disconnect();
    };
  }, [r, t, u]), { width: n, height: i };
}
function W1(e, t, r) {
  return e[t] ? Array.isArray(e[t]) ? e[t][0][r] : (
    // @ts-ignore Support Firefox's non-standard behavior
    e[t][r]
  ) : t === "contentBoxSize" ? e.contentRect[r === "inlineSize" ? "width" : "height"] : void 0;
}
const Lne = () => rne(
  "(prefers-reduced-motion: reduce)",
  {
    initializeWithValue: !0,
    defaultValue: !1
  }
);
var bs = {}, Ng = {};
Object.defineProperty(Ng, "__esModule", {
  value: !0
});
Ng.default = /(?:\ud83d\udc68\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83e\uddd1\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83e\uddd1\ud83c[\udffc-\udfff]|\ud83e\uddd1\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83e\uddd1\ud83c[\udffb\udffd-\udfff]|\ud83e\uddd1\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83e\uddd1\ud83c[\udffb\udffc\udffe\udfff]|\ud83e\uddd1\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83e\uddd1\ud83c[\udffb-\udffd\udfff]|\ud83e\uddd1\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83e\uddd1\ud83c[\udffb-\udffe]|\ud83d\udc68\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udffb\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffc-\udfff]|\ud83d\udc68\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udffc\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb\udffd-\udfff]|\ud83d\udc68\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udffd\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb\udffc\udffe\udfff]|\ud83d\udc68\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udffe\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb-\udffd\udfff]|\ud83d\udc68\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udfff\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb-\udffe]|\ud83d\udc69\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffb\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffc-\udfff]|\ud83d\udc69\ud83c\udffb\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffc-\udfff]|\ud83d\udc69\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffc\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb\udffd-\udfff]|\ud83d\udc69\ud83c\udffc\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffb\udffd-\udfff]|\ud83d\udc69\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffd\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb\udffc\udffe\udfff]|\ud83d\udc69\ud83c\udffd\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffb\udffc\udffe\udfff]|\ud83d\udc69\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffe\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb-\udffd\udfff]|\ud83d\udc69\ud83c\udffe\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffb-\udffd\udfff]|\ud83d\udc69\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udfff\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb-\udffe]|\ud83d\udc69\ud83c\udfff\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffb-\udffe]|\ud83e\uddd1\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83e\uddd1\ud83c[\udffc-\udfff]|\ud83e\uddd1\ud83c\udffb\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udfff]|\ud83e\uddd1\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83e\uddd1\ud83c[\udffb\udffd-\udfff]|\ud83e\uddd1\ud83c\udffc\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udfff]|\ud83e\uddd1\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83e\uddd1\ud83c[\udffb\udffc\udffe\udfff]|\ud83e\uddd1\ud83c\udffd\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udfff]|\ud83e\uddd1\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83e\uddd1\ud83c[\udffb-\udffd\udfff]|\ud83e\uddd1\ud83c\udffe\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udfff]|\ud83e\uddd1\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83e\uddd1\ud83c[\udffb-\udffe]|\ud83e\uddd1\ud83c\udfff\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udfff]|\ud83d\udc68\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68|\ud83d\udc69\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d[\udc68\udc69]|\ud83e\udef1\ud83c\udffb\u200d\ud83e\udef2\ud83c[\udffc-\udfff]|\ud83e\udef1\ud83c\udffc\u200d\ud83e\udef2\ud83c[\udffb\udffd-\udfff]|\ud83e\udef1\ud83c\udffd\u200d\ud83e\udef2\ud83c[\udffb\udffc\udffe\udfff]|\ud83e\udef1\ud83c\udffe\u200d\ud83e\udef2\ud83c[\udffb-\udffd\udfff]|\ud83e\udef1\ud83c\udfff\u200d\ud83e\udef2\ud83c[\udffb-\udffe]|\ud83d\udc68\u200d\u2764\ufe0f\u200d\ud83d\udc68|\ud83d\udc69\u200d\u2764\ufe0f\u200d\ud83d[\udc68\udc69]|\ud83e\uddd1\u200d\ud83e\udd1d\u200d\ud83e\uddd1|\ud83d\udc6b\ud83c[\udffb-\udfff]|\ud83d\udc6c\ud83c[\udffb-\udfff]|\ud83d\udc6d\ud83c[\udffb-\udfff]|\ud83d\udc8f\ud83c[\udffb-\udfff]|\ud83d\udc91\ud83c[\udffb-\udfff]|\ud83e\udd1d\ud83c[\udffb-\udfff]|\ud83d[\udc6b-\udc6d\udc8f\udc91]|\ud83e\udd1d)|(?:\ud83d[\udc68\udc69]|\ud83e\uddd1)(?:\ud83c[\udffb-\udfff])?\u200d(?:\u2695\ufe0f|\u2696\ufe0f|\u2708\ufe0f|\ud83c[\udf3e\udf73\udf7c\udf84\udf93\udfa4\udfa8\udfeb\udfed]|\ud83d[\udcbb\udcbc\udd27\udd2c\ude80\ude92]|\ud83e[\uddaf-\uddb3\uddbc\uddbd])|(?:\ud83c[\udfcb\udfcc]|\ud83d[\udd74\udd75]|\u26f9)((?:\ud83c[\udffb-\udfff]|\ufe0f)\u200d[\u2640\u2642]\ufe0f)|(?:\ud83c[\udfc3\udfc4\udfca]|\ud83d[\udc6e\udc70\udc71\udc73\udc77\udc81\udc82\udc86\udc87\ude45-\ude47\ude4b\ude4d\ude4e\udea3\udeb4-\udeb6]|\ud83e[\udd26\udd35\udd37-\udd39\udd3d\udd3e\uddb8\uddb9\uddcd-\uddcf\uddd4\uddd6-\udddd])(?:\ud83c[\udffb-\udfff])?\u200d[\u2640\u2642]\ufe0f|(?:\ud83d\udc68\u200d\ud83d\udc68\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc68\u200d\ud83d\udc68\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\ud83d\udc69\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc69\u200d\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc68\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\ud83d\udc68\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\ud83d\udc69\u200d\ud83d[\udc66\udc67]|\ud83c\udff3\ufe0f\u200d\u26a7\ufe0f|\ud83c\udff3\ufe0f\u200d\ud83c\udf08|\ud83d\ude36\u200d\ud83c\udf2b\ufe0f|\u2764\ufe0f\u200d\ud83d\udd25|\u2764\ufe0f\u200d\ud83e\ude79|\ud83c\udff4\u200d\u2620\ufe0f|\ud83d\udc15\u200d\ud83e\uddba|\ud83d\udc3b\u200d\u2744\ufe0f|\ud83d\udc41\u200d\ud83d\udde8|\ud83d\udc68\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\ud83d[\udc66\udc67]|\ud83d\udc6f\u200d\u2640\ufe0f|\ud83d\udc6f\u200d\u2642\ufe0f|\ud83d\ude2e\u200d\ud83d\udca8|\ud83d\ude35\u200d\ud83d\udcab|\ud83e\udd3c\u200d\u2640\ufe0f|\ud83e\udd3c\u200d\u2642\ufe0f|\ud83e\uddde\u200d\u2640\ufe0f|\ud83e\uddde\u200d\u2642\ufe0f|\ud83e\udddf\u200d\u2640\ufe0f|\ud83e\udddf\u200d\u2642\ufe0f|\ud83d\udc08\u200d\u2b1b)|[#*0-9]\ufe0f?\u20e3|(?:[©®\u2122\u265f]\ufe0f)|(?:\ud83c[\udc04\udd70\udd71\udd7e\udd7f\ude02\ude1a\ude2f\ude37\udf21\udf24-\udf2c\udf36\udf7d\udf96\udf97\udf99-\udf9b\udf9e\udf9f\udfcd\udfce\udfd4-\udfdf\udff3\udff5\udff7]|\ud83d[\udc3f\udc41\udcfd\udd49\udd4a\udd6f\udd70\udd73\udd76-\udd79\udd87\udd8a-\udd8d\udda5\udda8\uddb1\uddb2\uddbc\uddc2-\uddc4\uddd1-\uddd3\udddc-\uddde\udde1\udde3\udde8\uddef\uddf3\uddfa\udecb\udecd-\udecf\udee0-\udee5\udee9\udef0\udef3]|[\u203c\u2049\u2139\u2194-\u2199\u21a9\u21aa\u231a\u231b\u2328\u23cf\u23ed-\u23ef\u23f1\u23f2\u23f8-\u23fa\u24c2\u25aa\u25ab\u25b6\u25c0\u25fb-\u25fe\u2600-\u2604\u260e\u2611\u2614\u2615\u2618\u2620\u2622\u2623\u2626\u262a\u262e\u262f\u2638-\u263a\u2640\u2642\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267b\u267f\u2692-\u2697\u2699\u269b\u269c\u26a0\u26a1\u26a7\u26aa\u26ab\u26b0\u26b1\u26bd\u26be\u26c4\u26c5\u26c8\u26cf\u26d1\u26d3\u26d4\u26e9\u26ea\u26f0-\u26f5\u26f8\u26fa\u26fd\u2702\u2708\u2709\u270f\u2712\u2714\u2716\u271d\u2721\u2733\u2734\u2744\u2747\u2757\u2763\u2764\u27a1\u2934\u2935\u2b05-\u2b07\u2b1b\u2b1c\u2b50\u2b55\u3030\u303d\u3297\u3299])(?:\ufe0f|(?!\ufe0e))|(?:(?:\ud83c[\udfcb\udfcc]|\ud83d[\udd74\udd75\udd90]|[\u261d\u26f7\u26f9\u270c\u270d])(?:\ufe0f|(?!\ufe0e))|(?:\ud83c[\udf85\udfc2-\udfc4\udfc7\udfca]|\ud83d[\udc42\udc43\udc46-\udc50\udc66-\udc69\udc6e\udc70-\udc78\udc7c\udc81-\udc83\udc85-\udc87\udcaa\udd7a\udd95\udd96\ude45-\ude47\ude4b-\ude4f\udea3\udeb4-\udeb6\udec0\udecc]|\ud83e[\udd0c\udd0f\udd18-\udd1c\udd1e\udd1f\udd26\udd30-\udd39\udd3d\udd3e\udd77\uddb5\uddb6\uddb8\uddb9\uddbb\uddcd-\uddcf\uddd1-\udddd\udec3-\udec5\udef0-\udef6]|[\u270a\u270b]))(?:\ud83c[\udffb-\udfff])?|(?:\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc65\udb40\udc6e\udb40\udc67\udb40\udc7f|\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc73\udb40\udc63\udb40\udc74\udb40\udc7f|\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc77\udb40\udc6c\udb40\udc73\udb40\udc7f|\ud83c\udde6\ud83c[\udde8-\uddec\uddee\uddf1\uddf2\uddf4\uddf6-\uddfa\uddfc\uddfd\uddff]|\ud83c\udde7\ud83c[\udde6\udde7\udde9-\uddef\uddf1-\uddf4\uddf6-\uddf9\uddfb\uddfc\uddfe\uddff]|\ud83c\udde8\ud83c[\udde6\udde8\udde9\uddeb-\uddee\uddf0-\uddf5\uddf7\uddfa-\uddff]|\ud83c\udde9\ud83c[\uddea\uddec\uddef\uddf0\uddf2\uddf4\uddff]|\ud83c\uddea\ud83c[\udde6\udde8\uddea\uddec\udded\uddf7-\uddfa]|\ud83c\uddeb\ud83c[\uddee-\uddf0\uddf2\uddf4\uddf7]|\ud83c\uddec\ud83c[\udde6\udde7\udde9-\uddee\uddf1-\uddf3\uddf5-\uddfa\uddfc\uddfe]|\ud83c\udded\ud83c[\uddf0\uddf2\uddf3\uddf7\uddf9\uddfa]|\ud83c\uddee\ud83c[\udde8-\uddea\uddf1-\uddf4\uddf6-\uddf9]|\ud83c\uddef\ud83c[\uddea\uddf2\uddf4\uddf5]|\ud83c\uddf0\ud83c[\uddea\uddec-\uddee\uddf2\uddf3\uddf5\uddf7\uddfc\uddfe\uddff]|\ud83c\uddf1\ud83c[\udde6-\udde8\uddee\uddf0\uddf7-\uddfb\uddfe]|\ud83c\uddf2\ud83c[\udde6\udde8-\udded\uddf0-\uddff]|\ud83c\uddf3\ud83c[\udde6\udde8\uddea-\uddec\uddee\uddf1\uddf4\uddf5\uddf7\uddfa\uddff]|\ud83c\uddf4\ud83c\uddf2|\ud83c\uddf5\ud83c[\udde6\uddea-\udded\uddf0-\uddf3\uddf7-\uddf9\uddfc\uddfe]|\ud83c\uddf6\ud83c\udde6|\ud83c\uddf7\ud83c[\uddea\uddf4\uddf8\uddfa\uddfc]|\ud83c\uddf8\ud83c[\udde6-\uddea\uddec-\uddf4\uddf7-\uddf9\uddfb\uddfd-\uddff]|\ud83c\uddf9\ud83c[\udde6\udde8\udde9\uddeb-\udded\uddef-\uddf4\uddf7\uddf9\uddfb\uddfc\uddff]|\ud83c\uddfa\ud83c[\udde6\uddec\uddf2\uddf3\uddf8\uddfe\uddff]|\ud83c\uddfb\ud83c[\udde6\udde8\uddea\uddec\uddee\uddf3\uddfa]|\ud83c\uddfc\ud83c[\uddeb\uddf8]|\ud83c\uddfd\ud83c\uddf0|\ud83c\uddfe\ud83c[\uddea\uddf9]|\ud83c\uddff\ud83c[\udde6\uddf2\uddfc]|\ud83c[\udccf\udd8e\udd91-\udd9a\udde6-\uddff\ude01\ude32-\ude36\ude38-\ude3a\ude50\ude51\udf00-\udf20\udf2d-\udf35\udf37-\udf7c\udf7e-\udf84\udf86-\udf93\udfa0-\udfc1\udfc5\udfc6\udfc8\udfc9\udfcf-\udfd3\udfe0-\udff0\udff4\udff8-\udfff]|\ud83d[\udc00-\udc3e\udc40\udc44\udc45\udc51-\udc65\udc6a\udc6f\udc79-\udc7b\udc7d-\udc80\udc84\udc88-\udc8e\udc90\udc92-\udca9\udcab-\udcfc\udcff-\udd3d\udd4b-\udd4e\udd50-\udd67\udda4\uddfb-\ude44\ude48-\ude4a\ude80-\udea2\udea4-\udeb3\udeb7-\udebf\udec1-\udec5\uded0-\uded2\uded5-\uded7\udedd-\udedf\udeeb\udeec\udef4-\udefc\udfe0-\udfeb\udff0]|\ud83e[\udd0d\udd0e\udd10-\udd17\udd20-\udd25\udd27-\udd2f\udd3a\udd3c\udd3f-\udd45\udd47-\udd76\udd78-\uddb4\uddb7\uddba\uddbc-\uddcc\uddd0\uddde-\uddff\ude70-\ude74\ude78-\ude7c\ude80-\ude86\ude90-\udeac\udeb0-\udeba\udec0-\udec2\uded0-\uded9\udee0-\udee7]|[\u23e9-\u23ec\u23f0\u23f3\u267e\u26ce\u2705\u2728\u274c\u274e\u2753-\u2755\u2795-\u2797\u27b0\u27bf\ue50a])|\ufe0f/g;
Object.defineProperty(bs, "__esModule", {
  value: !0
});
bs.TypeName = void 0;
var ine = bs.parse = sne;
bs.toCodePoints = yP;
var ane = Ng, Eh = one(ane);
function one(e) {
  return e && e.__esModule ? e : { default: e };
}
var une = bs.TypeName = "emoji";
function sne(e, t) {
  var r = t && t.assetType ? t.assetType : "svg", n = t && t.buildUrl ? t.buildUrl : function(l, f) {
    return f === "png" ? "https://twemoji.maxcdn.com/v/latest/72x72/" + l + ".png" : "https://twemoji.maxcdn.com/v/latest/svg/" + l + ".svg";
  }, i = [];
  for (Eh.default.lastIndex = 0; ; ) {
    var a = Eh.default.exec(e);
    if (!a)
      break;
    var u = a[0], c = yP(fne(u)).join("-");
    i.push({
      url: c ? n(c, r) : "",
      indices: [a.index, Eh.default.lastIndex],
      text: u,
      type: une
    });
  }
  return i;
}
var cne = /\uFE0F/g, lne = "‍", fne = function(t) {
  return t.indexOf(lne) < 0 ? t.replace(cne, "") : t;
};
function yP(e) {
  for (var t = [], r = 0, n = 0, i = 0; i < e.length; )
    r = e.charCodeAt(i++), n ? (t.push((65536 + (n - 55296 << 10) + (r - 56320)).toString(16)), n = 0) : r > 55296 && r <= 56319 ? n = r : t.push(r.toString(16));
  return t;
}
const dne = wi("", {
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
function Bne({ emoji: e, size: t }) {
  const r = hne(e);
  return r ? /* @__PURE__ */ Y(
    "img",
    {
      src: r.url,
      alt: e,
      className: dne({ size: t }),
      draggable: !1
    }
  ) : /* @__PURE__ */ Y("span", { children: e });
}
const hne = (e) => {
  const [t] = ine(e, {
    buildUrl: (r) => `https://cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/svg/${r}.svg`
  });
  return t || null;
};
function Fne(e) {
  return `${e} emoji`;
}
const z1 = Rr({
  transformPagePoint: (e) => e,
  isStatic: !1,
  reducedMotion: "never"
});
function pne(e) {
  const t = Rn(null);
  return t.current === null && (t.current = e()), t.current;
}
const vne = /* @__PURE__ */ new Set([
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
function Il(e) {
  return e.startsWith("while") || e.startsWith("drag") && e !== "draggable" || e.startsWith("layout") || e.startsWith("onTap") || e.startsWith("onPan") || e.startsWith("onLayout") || vne.has(e);
}
let mP = (e) => !Il(e);
function bP(e) {
  e && (mP = (t) => t.startsWith("on") ? !Il(t) : e(t));
}
try {
  bP(require("@emotion/is-prop-valid").default);
} catch {
}
function Wne(e, t, r) {
  const n = {};
  for (const i in e)
    i === "values" && typeof e.values == "object" || (mP(i) || r === !0 && Il(i) || !t && !Il(i) || // If trying to use native HTML drag events, forward drag listeners
    e.draggable && i.startsWith("onDrag")) && (n[i] = e[i]);
  return n;
}
function zne({ children: e, isValidProp: t, ...r }) {
  t && bP(t), r = { ...tr(z1), ...r }, r.isStatic = pne(() => r.isStatic);
  const n = ns(() => r, [
    JSON.stringify(r.transition),
    r.transformPagePoint,
    r.reducedMotion
  ]);
  return Y(z1.Provider, { value: n, children: e });
}
const xP = Rr(void 0), Une = ({ children: e, ...t }) => /* @__PURE__ */ Y(xP.Provider, { value: t, children: e }), gne = () => ({
  ...tr(xP)
}), Hne = Nn(
  function(t, r) {
    const { src: n } = gne();
    if (!n) return /* @__PURE__ */ Y("img", { ref: r, ...t });
    const i = n(t);
    return /* @__PURE__ */ Y("img", { ref: r, ...t, ...i });
  }
);
export {
  Wne as $,
  Ene as A,
  Tne as B,
  ak as C,
  ds as D,
  Bne as E,
  _ne as F,
  Xr as G,
  St as H,
  Q1 as I,
  ea as J,
  kr as K,
  Ane as L,
  zne as M,
  Yr as N,
  bt as O,
  ca as P,
  AK as Q,
  Te as R,
  lf as S,
  af as T,
  rf as U,
  Rne as V,
  JG as W,
  xne as X,
  uo as Y,
  z1 as Z,
  pne as _,
  wi as a,
  ia as a0,
  oP as a1,
  Tn as a2,
  $o as a3,
  Po as a4,
  ys as a5,
  Eo as a6,
  Og as a7,
  ff as a8,
  Lk as a9,
  Gk as aa,
  Hne as ab,
  gv as ac,
  ZS as ad,
  pre as ae,
  BS as af,
  vre as ag,
  ote as ah,
  gre as ai,
  uP as aj,
  xre as ak,
  hre as al,
  i_ as am,
  rne as an,
  r_ as ao,
  Yee as ap,
  Ore as aq,
  $ne as ar,
  Dne as as,
  zre as at,
  Ure as au,
  Hre as av,
  gP as aw,
  DS as b,
  Ht as c,
  jn as d,
  Ine as e,
  To as f,
  kne as g,
  jne as h,
  One as i,
  Pne as j,
  Une as k,
  ene as l,
  Sne as m,
  Nne as n,
  Vk as o,
  wne as p,
  Lne as q,
  Fne as r,
  me as s,
  it as t,
  Fk as u,
  Me as v,
  Je as w,
  Pe as x,
  Le as y,
  HV as z
};
