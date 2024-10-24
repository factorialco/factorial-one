import { n as Ne, o as Y, p as Qa, q as Ja, r as th, s as Et, t as te, v as Oe, w as V, x as xe, c as T, y as Ft, F as nh, I as gt, z as Ls, S as Mn, D as co, E as j0, G as uo, H as K0, J as Qe, K as Y0, N as rh, O as ot, R as q0, C as De, a as Ke, Q as ei, u as ti, T as oh, m as ni, M as ah, L as Tn, U as ri, W as ba, i as nn, Y as ih, Z as sh, _ as lh, k as ch, $ as uh, a0 as dh, a1 as fh, a2 as hh, j as oi, A as ph, B as mh, d as vh, P as gh, V as wh, b as yh } from "./privacyMode-DrXyCJTX.js";
import { jsx as a, jsxs as b, Fragment as me } from "react/jsx-runtime";
import * as h from "react";
import ee, { createContext as He, useContext as fe, useId as fo, useEffect as We, useCallback as rn, Component as xh, useLayoutEffect as X0, useRef as ze, useInsertionEffect as Z0, useMemo as $t, forwardRef as w, Fragment as Q0, createElement as zr, Children as ai, isValidElement as bh, useState as be, cloneElement as Ch } from "react";
import * as J0 from "react-dom";
import e1 from "react-dom";
var Mh = "Portal", ho = h.forwardRef((e, t) => {
  var l;
  const { container: n, ...r } = e, [o, i] = h.useState(!1);
  Ne(() => i(!0), []);
  const s = n || o && ((l = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : l.body);
  return s ? e1.createPortal(/* @__PURE__ */ a(Y.div, { ...r, ref: t }), s) : null;
});
ho.displayName = Mh;
const $s = /* @__PURE__ */ new Set();
function po(e, t, n) {
  e || $s.has(t) || (console.warn(t), $s.add(t));
}
function Sh(e) {
  if (typeof Proxy > "u")
    return e;
  const t = /* @__PURE__ */ new Map(), n = (...r) => (process.env.NODE_ENV !== "production" && po(!1, "motion() is deprecated. Use motion.create() instead."), e(...r));
  return new Proxy(n, {
    /**
     * Called when `motion` is referenced with a prop: `motion.div`, `motion.input` etc.
     * The prop name is passed through as `key` and we can use that to generate a `motion`
     * DOM component with that name.
     */
    get: (r, o) => o === "create" ? e : (t.has(o) || t.set(o, e(o)), t.get(o))
  });
}
function qn(e) {
  return e !== null && typeof e == "object" && typeof e.start == "function";
}
const Ca = (e) => Array.isArray(e);
function t1(e, t) {
  if (!Array.isArray(t))
    return !1;
  const n = t.length;
  if (n !== e.length)
    return !1;
  for (let r = 0; r < n; r++)
    if (t[r] !== e[r])
      return !1;
  return !0;
}
function Xn(e) {
  return typeof e == "string" || Array.isArray(e);
}
function zs(e) {
  const t = [{}, {}];
  return e == null || e.values.forEach((n, r) => {
    t[0][r] = n.get(), t[1][r] = n.getVelocity();
  }), t;
}
function ii(e, t, n, r) {
  if (typeof t == "function") {
    const [o, i] = zs(r);
    t = t(n !== void 0 ? n : e.custom, o, i);
  }
  if (typeof t == "string" && (t = e.variants && e.variants[t]), typeof t == "function") {
    const [o, i] = zs(r);
    t = t(n !== void 0 ? n : e.custom, o, i);
  }
  return t;
}
function mo(e, t, n) {
  const r = e.getProps();
  return ii(r, t, n !== void 0 ? n : r.custom, e);
}
const si = [
  "animate",
  "whileInView",
  "whileFocus",
  "whileHover",
  "whileTap",
  "whileDrag",
  "exit"
], li = ["initial", ...si], or = [
  "transformPerspective",
  "x",
  "y",
  "z",
  "translateX",
  "translateY",
  "translateZ",
  "scale",
  "scaleX",
  "scaleY",
  "rotate",
  "rotateX",
  "rotateY",
  "rotateZ",
  "skew",
  "skewX",
  "skewY"
], Ut = new Set(or), mt = (e) => e * 1e3, Pt = (e) => e / 1e3, Rh = {
  type: "spring",
  stiffness: 500,
  damping: 25,
  restSpeed: 10
}, _h = (e) => ({
  type: "spring",
  stiffness: 550,
  damping: e === 0 ? 2 * Math.sqrt(550) : 30,
  restSpeed: 10
}), Ph = {
  type: "keyframes",
  duration: 0.8
}, Ah = {
  type: "keyframes",
  ease: [0.25, 0.1, 0.35, 1],
  duration: 0.3
}, Th = (e, { keyframes: t }) => t.length > 2 ? Ph : Ut.has(e) ? e.startsWith("scale") ? _h(t[1]) : Rh : Ah;
function Nh({ when: e, delay: t, delayChildren: n, staggerChildren: r, staggerDirection: o, repeat: i, repeatType: s, repeatDelay: l, from: c, elapsed: u, ...d }) {
  return !!Object.keys(d).length;
}
function ci(e, t) {
  return e[t] || e.default || e;
}
const Dh = {
  skipAnimations: !1,
  useManualTiming: !1
}, kh = (e) => e !== null;
function vo(e, { repeat: t, repeatType: n = "loop" }, r) {
  const o = e.filter(kh), i = t && n !== "loop" && t % 2 === 1 ? 0 : o.length - 1;
  return !i || r === void 0 ? o[i] : r;
}
const Pe = (e) => e;
function Eh(e) {
  let t = /* @__PURE__ */ new Set(), n = /* @__PURE__ */ new Set(), r = !1, o = !1;
  const i = /* @__PURE__ */ new WeakSet();
  let s = {
    delta: 0,
    timestamp: 0,
    isProcessing: !1
  };
  function l(u) {
    i.has(u) && (c.schedule(u), e()), u(s);
  }
  const c = {
    /**
     * Schedule a process to run on the next frame.
     */
    schedule: (u, d = !1, f = !1) => {
      const m = f && r ? t : n;
      return d && i.add(u), m.has(u) || m.add(u), u;
    },
    /**
     * Cancel the provided callback from running on the next frame.
     */
    cancel: (u) => {
      n.delete(u), i.delete(u);
    },
    /**
     * Execute all schedule callbacks.
     */
    process: (u) => {
      if (s = u, r) {
        o = !0;
        return;
      }
      r = !0, [t, n] = [n, t], n.clear(), t.forEach(l), r = !1, o && (o = !1, c.process(u));
    }
  };
  return c;
}
const br = [
  "read",
  // Read
  "resolveKeyframes",
  // Write/Read/Write/Read
  "update",
  // Compute
  "preRender",
  // Compute
  "render",
  // Write
  "postRender"
  // Compute
], Fh = 40;
function n1(e, t) {
  let n = !1, r = !0;
  const o = {
    delta: 0,
    timestamp: 0,
    isProcessing: !1
  }, i = () => n = !0, s = br.reduce((C, y) => (C[y] = Eh(i), C), {}), { read: l, resolveKeyframes: c, update: u, preRender: d, render: f, postRender: p } = s, m = () => {
    const C = performance.now();
    n = !1, o.delta = r ? 1e3 / 60 : Math.max(Math.min(C - o.timestamp, Fh), 1), o.timestamp = C, o.isProcessing = !0, l.process(o), c.process(o), u.process(o), d.process(o), f.process(o), p.process(o), o.isProcessing = !1, n && t && (r = !1, e(m));
  }, v = () => {
    n = !0, r = !0, o.isProcessing || e(m);
  };
  return { schedule: br.reduce((C, y) => {
    const M = s[y];
    return C[y] = (_, P = !1, E = !1) => (n || v(), M.schedule(_, P, E)), C;
  }, {}), cancel: (C) => {
    for (let y = 0; y < br.length; y++)
      s[br[y]].cancel(C);
  }, state: o, steps: s };
}
const { schedule: oe, cancel: Dt, state: _e, steps: Uo } = n1(typeof requestAnimationFrame < "u" ? requestAnimationFrame : Pe, !0), r1 = (e) => /^0[^.\s]+$/u.test(e);
function Ih(e) {
  return typeof e == "number" ? e === 0 : e !== null ? e === "none" || e === "0" || r1(e) : !0;
}
let Nn = Pe, kt = Pe;
process.env.NODE_ENV !== "production" && (Nn = (e, t) => {
  !e && typeof console < "u" && console.warn(t);
}, kt = (e, t) => {
  if (!e)
    throw new Error(t);
});
const o1 = (e) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e), a1 = (e) => (t) => typeof t == "string" && t.startsWith(e), i1 = a1("--"), Oh = a1("var(--"), ui = (e) => Oh(e) ? Vh.test(e.split("/*")[0].trim()) : !1, Vh = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu, Bh = (
  // eslint-disable-next-line redos-detector/no-unsafe-regex -- false positive, as it can match a lot of words
  /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u
);
function Lh(e) {
  const t = Bh.exec(e);
  if (!t)
    return [,];
  const [, n, r, o] = t;
  return [`--${n ?? r}`, o];
}
const $h = 4;
function s1(e, t, n = 1) {
  kt(n <= $h, `Max CSS variable fallback depth detected in property "${e}". This may indicate a circular fallback dependency.`);
  const [r, o] = Lh(e);
  if (!r)
    return;
  const i = window.getComputedStyle(t).getPropertyValue(r);
  if (i) {
    const s = i.trim();
    return o1(s) ? parseFloat(s) : s;
  }
  return ui(o) ? s1(o, t, n + 1) : o;
}
const zt = (e, t, n) => n > t ? t : n < e ? e : n, Dn = {
  test: (e) => typeof e == "number",
  parse: parseFloat,
  transform: (e) => e
}, Un = {
  ...Dn,
  transform: (e) => zt(0, 1, e)
}, Cr = {
  ...Dn,
  default: 1
}, Gn = (e) => Math.round(e * 1e5) / 1e5, di = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu, zh = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu, Hh = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu;
function ar(e) {
  return typeof e == "string";
}
function Wh(e) {
  return e == null;
}
const ir = (e) => ({
  test: (t) => ar(t) && t.endsWith(e) && t.split(" ").length === 1,
  parse: parseFloat,
  transform: (t) => `${t}${e}`
}), Vt = /* @__PURE__ */ ir("deg"), vt = /* @__PURE__ */ ir("%"), K = /* @__PURE__ */ ir("px"), Uh = /* @__PURE__ */ ir("vh"), Gh = /* @__PURE__ */ ir("vw"), Hs = {
  ...vt,
  parse: (e) => vt.parse(e) / 100,
  transform: (e) => vt.transform(e * 100)
}, jh = /* @__PURE__ */ new Set([
  "width",
  "height",
  "top",
  "left",
  "right",
  "bottom",
  "x",
  "y",
  "translateX",
  "translateY"
]), Ws = (e) => e === Dn || e === K, Us = (e, t) => parseFloat(e.split(", ")[t]), Gs = (e, t) => (n, { transform: r }) => {
  if (r === "none" || !r)
    return 0;
  const o = r.match(/^matrix3d\((.+)\)$/u);
  if (o)
    return Us(o[1], t);
  {
    const i = r.match(/^matrix\((.+)\)$/u);
    return i ? Us(i[1], e) : 0;
  }
}, Kh = /* @__PURE__ */ new Set(["x", "y", "z"]), Yh = or.filter((e) => !Kh.has(e));
function qh(e) {
  const t = [];
  return Yh.forEach((n) => {
    const r = e.getValue(n);
    r !== void 0 && (t.push([n, r.get()]), r.set(n.startsWith("scale") ? 1 : 0));
  }), t;
}
const Sn = {
  // Dimensions
  width: ({ x: e }, { paddingLeft: t = "0", paddingRight: n = "0" }) => e.max - e.min - parseFloat(t) - parseFloat(n),
  height: ({ y: e }, { paddingTop: t = "0", paddingBottom: n = "0" }) => e.max - e.min - parseFloat(t) - parseFloat(n),
  top: (e, { top: t }) => parseFloat(t),
  left: (e, { left: t }) => parseFloat(t),
  bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
  right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
  // Transform
  x: Gs(4, 13),
  y: Gs(5, 14)
};
Sn.translateX = Sn.x;
Sn.translateY = Sn.y;
const l1 = (e) => (t) => t.test(e), Xh = {
  test: (e) => e === "auto",
  parse: (e) => e
}, c1 = [Dn, K, vt, Vt, Gh, Uh, Xh], js = (e) => c1.find(l1(e)), en = /* @__PURE__ */ new Set();
let Ma = !1, Sa = !1;
function u1() {
  if (Sa) {
    const e = Array.from(en).filter((r) => r.needsMeasurement), t = new Set(e.map((r) => r.element)), n = /* @__PURE__ */ new Map();
    t.forEach((r) => {
      const o = qh(r);
      o.length && (n.set(r, o), r.render());
    }), e.forEach((r) => r.measureInitialState()), t.forEach((r) => {
      r.render();
      const o = n.get(r);
      o && o.forEach(([i, s]) => {
        var l;
        (l = r.getValue(i)) === null || l === void 0 || l.set(s);
      });
    }), e.forEach((r) => r.measureEndState()), e.forEach((r) => {
      r.suspendedScrollY !== void 0 && window.scrollTo(0, r.suspendedScrollY);
    });
  }
  Sa = !1, Ma = !1, en.forEach((e) => e.complete()), en.clear();
}
function d1() {
  en.forEach((e) => {
    e.readKeyframes(), e.needsMeasurement && (Sa = !0);
  });
}
function Zh() {
  d1(), u1();
}
class fi {
  constructor(t, n, r, o, i, s = !1) {
    this.isComplete = !1, this.isAsync = !1, this.needsMeasurement = !1, this.isScheduled = !1, this.unresolvedKeyframes = [...t], this.onComplete = n, this.name = r, this.motionValue = o, this.element = i, this.isAsync = s;
  }
  scheduleResolve() {
    this.isScheduled = !0, this.isAsync ? (en.add(this), Ma || (Ma = !0, oe.read(d1), oe.resolveKeyframes(u1))) : (this.readKeyframes(), this.complete());
  }
  readKeyframes() {
    const { unresolvedKeyframes: t, name: n, element: r, motionValue: o } = this;
    for (let i = 0; i < t.length; i++)
      if (t[i] === null)
        if (i === 0) {
          const s = o == null ? void 0 : o.get(), l = t[t.length - 1];
          if (s !== void 0)
            t[0] = s;
          else if (r && n) {
            const c = r.readValue(n, l);
            c != null && (t[0] = c);
          }
          t[0] === void 0 && (t[0] = l), o && s === void 0 && o.set(t[0]);
        } else
          t[i] = t[i - 1];
  }
  setFinalKeyframe() {
  }
  measureInitialState() {
  }
  renderEndStyles() {
  }
  measureEndState() {
  }
  complete() {
    this.isComplete = !0, this.onComplete(this.unresolvedKeyframes, this.finalKeyframe), en.delete(this);
  }
  cancel() {
    this.isComplete || (this.isScheduled = !1, en.delete(this));
  }
  resume() {
    this.isComplete || this.scheduleResolve();
  }
}
const hi = (e, t) => (n) => !!(ar(n) && Hh.test(n) && n.startsWith(e) || t && !Wh(n) && Object.prototype.hasOwnProperty.call(n, t)), f1 = (e, t, n) => (r) => {
  if (!ar(r))
    return r;
  const [o, i, s, l] = r.match(di);
  return {
    [e]: parseFloat(o),
    [t]: parseFloat(i),
    [n]: parseFloat(s),
    alpha: l !== void 0 ? parseFloat(l) : 1
  };
}, Qh = (e) => zt(0, 255, e), Go = {
  ...Dn,
  transform: (e) => Math.round(Qh(e))
}, Jt = {
  test: /* @__PURE__ */ hi("rgb", "red"),
  parse: /* @__PURE__ */ f1("red", "green", "blue"),
  transform: ({ red: e, green: t, blue: n, alpha: r = 1 }) => "rgba(" + Go.transform(e) + ", " + Go.transform(t) + ", " + Go.transform(n) + ", " + Gn(Un.transform(r)) + ")"
};
function Jh(e) {
  let t = "", n = "", r = "", o = "";
  return e.length > 5 ? (t = e.substring(1, 3), n = e.substring(3, 5), r = e.substring(5, 7), o = e.substring(7, 9)) : (t = e.substring(1, 2), n = e.substring(2, 3), r = e.substring(3, 4), o = e.substring(4, 5), t += t, n += n, r += r, o += o), {
    red: parseInt(t, 16),
    green: parseInt(n, 16),
    blue: parseInt(r, 16),
    alpha: o ? parseInt(o, 16) / 255 : 1
  };
}
const Ra = {
  test: /* @__PURE__ */ hi("#"),
  parse: Jh,
  transform: Jt.transform
}, vn = {
  test: /* @__PURE__ */ hi("hsl", "hue"),
  parse: /* @__PURE__ */ f1("hue", "saturation", "lightness"),
  transform: ({ hue: e, saturation: t, lightness: n, alpha: r = 1 }) => "hsla(" + Math.round(e) + ", " + vt.transform(Gn(t)) + ", " + vt.transform(Gn(n)) + ", " + Gn(Un.transform(r)) + ")"
}, Ae = {
  test: (e) => Jt.test(e) || Ra.test(e) || vn.test(e),
  parse: (e) => Jt.test(e) ? Jt.parse(e) : vn.test(e) ? vn.parse(e) : Ra.parse(e),
  transform: (e) => ar(e) ? e : e.hasOwnProperty("red") ? Jt.transform(e) : vn.transform(e)
};
function e4(e) {
  var t, n;
  return isNaN(e) && ar(e) && (((t = e.match(di)) === null || t === void 0 ? void 0 : t.length) || 0) + (((n = e.match(zh)) === null || n === void 0 ? void 0 : n.length) || 0) > 0;
}
const h1 = "number", p1 = "color", t4 = "var", n4 = "var(", Ks = "${}", r4 = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function Zn(e) {
  const t = e.toString(), n = [], r = {
    color: [],
    number: [],
    var: []
  }, o = [];
  let i = 0;
  const l = t.replace(r4, (c) => (Ae.test(c) ? (r.color.push(i), o.push(p1), n.push(Ae.parse(c))) : c.startsWith(n4) ? (r.var.push(i), o.push(t4), n.push(c)) : (r.number.push(i), o.push(h1), n.push(parseFloat(c))), ++i, Ks)).split(Ks);
  return { values: n, split: l, indexes: r, types: o };
}
function m1(e) {
  return Zn(e).values;
}
function v1(e) {
  const { split: t, types: n } = Zn(e), r = t.length;
  return (o) => {
    let i = "";
    for (let s = 0; s < r; s++)
      if (i += t[s], o[s] !== void 0) {
        const l = n[s];
        l === h1 ? i += Gn(o[s]) : l === p1 ? i += Ae.transform(o[s]) : i += o[s];
      }
    return i;
  };
}
const o4 = (e) => typeof e == "number" ? 0 : e;
function a4(e) {
  const t = m1(e);
  return v1(e)(t.map(o4));
}
const Ht = {
  test: e4,
  parse: m1,
  createTransformer: v1,
  getAnimatableNone: a4
}, i4 = /* @__PURE__ */ new Set(["brightness", "contrast", "saturate", "opacity"]);
function s4(e) {
  const [t, n] = e.slice(0, -1).split("(");
  if (t === "drop-shadow")
    return e;
  const [r] = n.match(di) || [];
  if (!r)
    return e;
  const o = n.replace(r, "");
  let i = i4.has(t) ? 1 : 0;
  return r !== n && (i *= 100), t + "(" + i + o + ")";
}
const l4 = /\b([a-z-]*)\(.*?\)/gu, _a = {
  ...Ht,
  getAnimatableNone: (e) => {
    const t = e.match(l4);
    return t ? t.map(s4).join(" ") : e;
  }
}, Ys = {
  ...Dn,
  transform: Math.round
}, pi = {
  // Border props
  borderWidth: K,
  borderTopWidth: K,
  borderRightWidth: K,
  borderBottomWidth: K,
  borderLeftWidth: K,
  borderRadius: K,
  radius: K,
  borderTopLeftRadius: K,
  borderTopRightRadius: K,
  borderBottomRightRadius: K,
  borderBottomLeftRadius: K,
  // Positioning props
  width: K,
  maxWidth: K,
  height: K,
  maxHeight: K,
  size: K,
  top: K,
  right: K,
  bottom: K,
  left: K,
  // Spacing props
  padding: K,
  paddingTop: K,
  paddingRight: K,
  paddingBottom: K,
  paddingLeft: K,
  margin: K,
  marginTop: K,
  marginRight: K,
  marginBottom: K,
  marginLeft: K,
  // Transform props
  rotate: Vt,
  rotateX: Vt,
  rotateY: Vt,
  rotateZ: Vt,
  scale: Cr,
  scaleX: Cr,
  scaleY: Cr,
  scaleZ: Cr,
  skew: Vt,
  skewX: Vt,
  skewY: Vt,
  distance: K,
  translateX: K,
  translateY: K,
  translateZ: K,
  x: K,
  y: K,
  z: K,
  perspective: K,
  transformPerspective: K,
  opacity: Un,
  originX: Hs,
  originY: Hs,
  originZ: K,
  // Misc
  zIndex: Ys,
  backgroundPositionX: K,
  backgroundPositionY: K,
  // SVG
  fillOpacity: Un,
  strokeOpacity: Un,
  numOctaves: Ys
}, c4 = {
  ...pi,
  // Color props
  color: Ae,
  backgroundColor: Ae,
  outlineColor: Ae,
  fill: Ae,
  stroke: Ae,
  // Border props
  borderColor: Ae,
  borderTopColor: Ae,
  borderRightColor: Ae,
  borderBottomColor: Ae,
  borderLeftColor: Ae,
  filter: _a,
  WebkitFilter: _a
}, mi = (e) => c4[e];
function g1(e, t) {
  let n = mi(e);
  return n !== _a && (n = Ht), n.getAnimatableNone ? n.getAnimatableNone(t) : void 0;
}
const u4 = /* @__PURE__ */ new Set(["auto", "none", "0"]);
function d4(e, t, n) {
  let r = 0, o;
  for (; r < e.length && !o; ) {
    const i = e[r];
    typeof i == "string" && !u4.has(i) && Zn(i).values.length && (o = e[r]), r++;
  }
  if (o && n)
    for (const i of t)
      e[i] = g1(n, o);
}
class w1 extends fi {
  constructor(t, n, r, o, i) {
    super(t, n, r, o, i, !0);
  }
  readKeyframes() {
    const { unresolvedKeyframes: t, element: n, name: r } = this;
    if (!n || !n.current)
      return;
    super.readKeyframes();
    for (let c = 0; c < t.length; c++) {
      let u = t[c];
      if (typeof u == "string" && (u = u.trim(), ui(u))) {
        const d = s1(u, n.current);
        d !== void 0 && (t[c] = d), c === t.length - 1 && (this.finalKeyframe = u);
      }
    }
    if (this.resolveNoneKeyframes(), !jh.has(r) || t.length !== 2)
      return;
    const [o, i] = t, s = js(o), l = js(i);
    if (s !== l)
      if (Ws(s) && Ws(l))
        for (let c = 0; c < t.length; c++) {
          const u = t[c];
          typeof u == "string" && (t[c] = parseFloat(u));
        }
      else
        this.needsMeasurement = !0;
  }
  resolveNoneKeyframes() {
    const { unresolvedKeyframes: t, name: n } = this, r = [];
    for (let o = 0; o < t.length; o++)
      Ih(t[o]) && r.push(o);
    r.length && d4(t, r, n);
  }
  measureInitialState() {
    const { element: t, unresolvedKeyframes: n, name: r } = this;
    if (!t || !t.current)
      return;
    r === "height" && (this.suspendedScrollY = window.pageYOffset), this.measuredOrigin = Sn[r](t.measureViewportBox(), window.getComputedStyle(t.current)), n[0] = this.measuredOrigin;
    const o = n[n.length - 1];
    o !== void 0 && t.getValue(r, o).jump(o, !1);
  }
  measureEndState() {
    var t;
    const { element: n, name: r, unresolvedKeyframes: o } = this;
    if (!n || !n.current)
      return;
    const i = n.getValue(r);
    i && i.jump(this.measuredOrigin, !1);
    const s = o.length - 1, l = o[s];
    o[s] = Sn[r](n.measureViewportBox(), window.getComputedStyle(n.current)), l !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = l), !((t = this.removedTransforms) === null || t === void 0) && t.length && this.removedTransforms.forEach(([c, u]) => {
      n.getValue(c).set(u);
    }), this.resolveNoneKeyframes();
  }
}
function y1(e) {
  let t;
  return () => (t === void 0 && (t = e()), t);
}
let kr;
function f4() {
  kr = void 0;
}
const At = {
  now: () => (kr === void 0 && At.set(_e.isProcessing || Dh.useManualTiming ? _e.timestamp : performance.now()), kr),
  set: (e) => {
    kr = e, queueMicrotask(f4);
  }
}, qs = (e, t) => t === "zIndex" ? !1 : !!(typeof e == "number" || Array.isArray(e) || typeof e == "string" && // It's animatable if we have a string
(Ht.test(e) || e === "0") && // And it contains numbers and/or colors
!e.startsWith("url("));
function h4(e) {
  const t = e[0];
  if (e.length === 1)
    return !0;
  for (let n = 0; n < e.length; n++)
    if (e[n] !== t)
      return !0;
}
function p4(e, t, n, r) {
  const o = e[0];
  if (o === null)
    return !1;
  if (t === "display" || t === "visibility")
    return !0;
  const i = e[e.length - 1], s = qs(o, t), l = qs(i, t);
  return Nn(s === l, `You are trying to animate ${t} from "${o}" to "${i}". ${o} is not an animatable value - to enable this animation set ${o} to a value animatable to ${i} via the \`style\` property.`), !s || !l ? !1 : h4(e) || n === "spring" && r;
}
const m4 = 40;
class x1 {
  constructor({ autoplay: t = !0, delay: n = 0, type: r = "keyframes", repeat: o = 0, repeatDelay: i = 0, repeatType: s = "loop", ...l }) {
    this.isStopped = !1, this.hasAttemptedResolve = !1, this.createdAt = At.now(), this.options = {
      autoplay: t,
      delay: n,
      type: r,
      repeat: o,
      repeatDelay: i,
      repeatType: s,
      ...l
    }, this.updateFinishedPromise();
  }
  /**
   * This method uses the createdAt and resolvedAt to calculate the
   * animation startTime. *Ideally*, we would use the createdAt time as t=0
   * as the following frame would then be the first frame of the animation in
   * progress, which would feel snappier.
   *
   * However, if there's a delay (main thread work) between the creation of
   * the animation and the first commited frame, we prefer to use resolvedAt
   * to avoid a sudden jump into the animation.
   */
  calcStartTime() {
    return this.resolvedAt ? this.resolvedAt - this.createdAt > m4 ? this.resolvedAt : this.createdAt : this.createdAt;
  }
  /**
   * A getter for resolved data. If keyframes are not yet resolved, accessing
   * this.resolved will synchronously flush all pending keyframe resolvers.
   * This is a deoptimisation, but at its worst still batches read/writes.
   */
  get resolved() {
    return !this._resolved && !this.hasAttemptedResolve && Zh(), this._resolved;
  }
  /**
   * A method to be called when the keyframes resolver completes. This method
   * will check if its possible to run the animation and, if not, skip it.
   * Otherwise, it will call initPlayback on the implementing class.
   */
  onKeyframesResolved(t, n) {
    this.resolvedAt = At.now(), this.hasAttemptedResolve = !0;
    const { name: r, type: o, velocity: i, delay: s, onComplete: l, onUpdate: c, isGenerator: u } = this.options;
    if (!u && !p4(t, r, o, i))
      if (s)
        this.options.duration = 0;
      else {
        c == null || c(vo(t, this.options, n)), l == null || l(), this.resolveFinishedPromise();
        return;
      }
    const d = this.initPlayback(t, n);
    d !== !1 && (this._resolved = {
      keyframes: t,
      finalKeyframe: n,
      ...d
    }, this.onPostResolved());
  }
  onPostResolved() {
  }
  /**
   * Allows the returned animation to be awaited or promise-chained. Currently
   * resolves when the animation finishes at all but in a future update could/should
   * reject if its cancels.
   */
  then(t, n) {
    return this.currentFinishedPromise.then(t, n);
  }
  updateFinishedPromise() {
    this.currentFinishedPromise = new Promise((t) => {
      this.resolveFinishedPromise = t;
    });
  }
}
function b1(e, t) {
  return t ? e * (1e3 / t) : 0;
}
const v4 = 5;
function C1(e, t, n) {
  const r = Math.max(t - v4, 0);
  return b1(n - e(r), t - r);
}
const jo = 1e-3, g4 = 0.01, Xs = 10, w4 = 0.05, y4 = 1;
function x4({ duration: e = 800, bounce: t = 0.25, velocity: n = 0, mass: r = 1 }) {
  let o, i;
  Nn(e <= mt(Xs), "Spring duration must be 10 seconds or less");
  let s = 1 - t;
  s = zt(w4, y4, s), e = zt(g4, Xs, Pt(e)), s < 1 ? (o = (u) => {
    const d = u * s, f = d * e, p = d - n, m = Pa(u, s), v = Math.exp(-f);
    return jo - p / m * v;
  }, i = (u) => {
    const f = u * s * e, p = f * n + n, m = Math.pow(s, 2) * Math.pow(u, 2) * e, v = Math.exp(-f), g = Pa(Math.pow(u, 2), s);
    return (-o(u) + jo > 0 ? -1 : 1) * ((p - m) * v) / g;
  }) : (o = (u) => {
    const d = Math.exp(-u * e), f = (u - n) * e + 1;
    return -jo + d * f;
  }, i = (u) => {
    const d = Math.exp(-u * e), f = (n - u) * (e * e);
    return d * f;
  });
  const l = 5 / e, c = C4(o, i, l);
  if (e = mt(e), isNaN(c))
    return {
      stiffness: 100,
      damping: 10,
      duration: e
    };
  {
    const u = Math.pow(c, 2) * r;
    return {
      stiffness: u,
      damping: s * 2 * Math.sqrt(r * u),
      duration: e
    };
  }
}
const b4 = 12;
function C4(e, t, n) {
  let r = n;
  for (let o = 1; o < b4; o++)
    r = r - e(r) / t(r);
  return r;
}
function Pa(e, t) {
  return e * Math.sqrt(1 - t * t);
}
const M4 = ["duration", "bounce"], S4 = ["stiffness", "damping", "mass"];
function Zs(e, t) {
  return t.some((n) => e[n] !== void 0);
}
function R4(e) {
  let t = {
    velocity: 0,
    stiffness: 100,
    damping: 10,
    mass: 1,
    isResolvedFromDuration: !1,
    ...e
  };
  if (!Zs(e, S4) && Zs(e, M4)) {
    const n = x4(e);
    t = {
      ...t,
      ...n,
      mass: 1
    }, t.isResolvedFromDuration = !0;
  }
  return t;
}
function M1({ keyframes: e, restDelta: t, restSpeed: n, ...r }) {
  const o = e[0], i = e[e.length - 1], s = { done: !1, value: o }, { stiffness: l, damping: c, mass: u, duration: d, velocity: f, isResolvedFromDuration: p } = R4({
    ...r,
    velocity: -Pt(r.velocity || 0)
  }), m = f || 0, v = c / (2 * Math.sqrt(l * u)), g = i - o, x = Pt(Math.sqrt(l / u)), C = Math.abs(g) < 5;
  n || (n = C ? 0.01 : 2), t || (t = C ? 5e-3 : 0.5);
  let y;
  if (v < 1) {
    const M = Pa(x, v);
    y = (_) => {
      const P = Math.exp(-v * x * _);
      return i - P * ((m + v * x * g) / M * Math.sin(M * _) + g * Math.cos(M * _));
    };
  } else if (v === 1)
    y = (M) => i - Math.exp(-x * M) * (g + (m + x * g) * M);
  else {
    const M = x * Math.sqrt(v * v - 1);
    y = (_) => {
      const P = Math.exp(-v * x * _), E = Math.min(M * _, 300);
      return i - P * ((m + v * x * g) * Math.sinh(E) + M * g * Math.cosh(E)) / M;
    };
  }
  return {
    calculatedDuration: p && d || null,
    next: (M) => {
      const _ = y(M);
      if (p)
        s.done = M >= d;
      else {
        let P = 0;
        v < 1 && (P = M === 0 ? mt(m) : C1(y, M, _));
        const E = Math.abs(P) <= n, L = Math.abs(i - _) <= t;
        s.done = E && L;
      }
      return s.value = s.done ? i : _, s;
    }
  };
}
function Qs({ keyframes: e, velocity: t = 0, power: n = 0.8, timeConstant: r = 325, bounceDamping: o = 10, bounceStiffness: i = 500, modifyTarget: s, min: l, max: c, restDelta: u = 0.5, restSpeed: d }) {
  const f = e[0], p = {
    done: !1,
    value: f
  }, m = (N) => l !== void 0 && N < l || c !== void 0 && N > c, v = (N) => l === void 0 ? c : c === void 0 || Math.abs(l - N) < Math.abs(c - N) ? l : c;
  let g = n * t;
  const x = f + g, C = s === void 0 ? x : s(x);
  C !== x && (g = C - f);
  const y = (N) => -g * Math.exp(-N / r), M = (N) => C + y(N), _ = (N) => {
    const k = y(N), z = M(N);
    p.done = Math.abs(k) <= u, p.value = p.done ? C : z;
  };
  let P, E;
  const L = (N) => {
    m(p.value) && (P = N, E = M1({
      keyframes: [p.value, v(p.value)],
      velocity: C1(M, N, p.value),
      // TODO: This should be passing * 1000
      damping: o,
      stiffness: i,
      restDelta: u,
      restSpeed: d
    }));
  };
  return L(0), {
    calculatedDuration: null,
    next: (N) => {
      let k = !1;
      return !E && P === void 0 && (k = !0, _(N), L(N)), P !== void 0 && N >= P ? E.next(N - P) : (!k && _(N), p);
    }
  };
}
const S1 = (e, t, n) => (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e, _4 = 1e-7, P4 = 12;
function A4(e, t, n, r, o) {
  let i, s, l = 0;
  do
    s = t + (n - t) / 2, i = S1(s, r, o) - e, i > 0 ? n = s : t = s;
  while (Math.abs(i) > _4 && ++l < P4);
  return s;
}
function sr(e, t, n, r) {
  if (e === t && n === r)
    return Pe;
  const o = (i) => A4(i, 0, 1, e, n);
  return (i) => i === 0 || i === 1 ? i : S1(o(i), t, r);
}
const T4 = /* @__PURE__ */ sr(0.42, 0, 1, 1), N4 = /* @__PURE__ */ sr(0, 0, 0.58, 1), R1 = /* @__PURE__ */ sr(0.42, 0, 0.58, 1), D4 = (e) => Array.isArray(e) && typeof e[0] != "number", _1 = (e) => (t) => t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2, P1 = (e) => (t) => 1 - e(1 - t), vi = (e) => 1 - Math.sin(Math.acos(e)), A1 = P1(vi), k4 = _1(vi), T1 = /* @__PURE__ */ sr(0.33, 1.53, 0.69, 0.99), gi = /* @__PURE__ */ P1(T1), E4 = /* @__PURE__ */ _1(gi), F4 = (e) => (e *= 2) < 1 ? 0.5 * gi(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1))), Js = {
  linear: Pe,
  easeIn: T4,
  easeInOut: R1,
  easeOut: N4,
  circIn: vi,
  circInOut: k4,
  circOut: A1,
  backIn: gi,
  backInOut: E4,
  backOut: T1,
  anticipate: F4
}, el = (e) => {
  if (Array.isArray(e)) {
    kt(e.length === 4, "Cubic bezier arrays must contain four numerical values.");
    const [t, n, r, o] = e;
    return sr(t, n, r, o);
  } else if (typeof e == "string")
    return kt(Js[e] !== void 0, `Invalid easing type '${e}'`), Js[e];
  return e;
}, I4 = (e, t) => (n) => t(e(n)), Tt = (...e) => e.reduce(I4), Qn = (e, t, n) => {
  const r = t - e;
  return r === 0 ? 1 : (n - e) / r;
}, ve = (e, t, n) => e + (t - e) * n;
function Ko(e, t, n) {
  return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e;
}
function O4({ hue: e, saturation: t, lightness: n, alpha: r }) {
  e /= 360, t /= 100, n /= 100;
  let o = 0, i = 0, s = 0;
  if (!t)
    o = i = s = n;
  else {
    const l = n < 0.5 ? n * (1 + t) : n + t - n * t, c = 2 * n - l;
    o = Ko(c, l, e + 1 / 3), i = Ko(c, l, e), s = Ko(c, l, e - 1 / 3);
  }
  return {
    red: Math.round(o * 255),
    green: Math.round(i * 255),
    blue: Math.round(s * 255),
    alpha: r
  };
}
function Hr(e, t) {
  return (n) => n > 0 ? t : e;
}
const Yo = (e, t, n) => {
  const r = e * e, o = n * (t * t - r) + r;
  return o < 0 ? 0 : Math.sqrt(o);
}, V4 = [Ra, Jt, vn], B4 = (e) => V4.find((t) => t.test(e));
function tl(e) {
  const t = B4(e);
  if (Nn(!!t, `'${e}' is not an animatable color. Use the equivalent color code instead.`), !t)
    return !1;
  let n = t.parse(e);
  return t === vn && (n = O4(n)), n;
}
const nl = (e, t) => {
  const n = tl(e), r = tl(t);
  if (!n || !r)
    return Hr(e, t);
  const o = { ...n };
  return (i) => (o.red = Yo(n.red, r.red, i), o.green = Yo(n.green, r.green, i), o.blue = Yo(n.blue, r.blue, i), o.alpha = ve(n.alpha, r.alpha, i), Jt.transform(o));
}, Aa = /* @__PURE__ */ new Set(["none", "hidden"]);
function L4(e, t) {
  return Aa.has(e) ? (n) => n <= 0 ? e : t : (n) => n >= 1 ? t : e;
}
function $4(e, t) {
  return (n) => ve(e, t, n);
}
function wi(e) {
  return typeof e == "number" ? $4 : typeof e == "string" ? ui(e) ? Hr : Ae.test(e) ? nl : W4 : Array.isArray(e) ? N1 : typeof e == "object" ? Ae.test(e) ? nl : z4 : Hr;
}
function N1(e, t) {
  const n = [...e], r = n.length, o = e.map((i, s) => wi(i)(i, t[s]));
  return (i) => {
    for (let s = 0; s < r; s++)
      n[s] = o[s](i);
    return n;
  };
}
function z4(e, t) {
  const n = { ...e, ...t }, r = {};
  for (const o in n)
    e[o] !== void 0 && t[o] !== void 0 && (r[o] = wi(e[o])(e[o], t[o]));
  return (o) => {
    for (const i in r)
      n[i] = r[i](o);
    return n;
  };
}
function H4(e, t) {
  var n;
  const r = [], o = { color: 0, var: 0, number: 0 };
  for (let i = 0; i < t.values.length; i++) {
    const s = t.types[i], l = e.indexes[s][o[s]], c = (n = e.values[l]) !== null && n !== void 0 ? n : 0;
    r[i] = c, o[s]++;
  }
  return r;
}
const W4 = (e, t) => {
  const n = Ht.createTransformer(t), r = Zn(e), o = Zn(t);
  return r.indexes.var.length === o.indexes.var.length && r.indexes.color.length === o.indexes.color.length && r.indexes.number.length >= o.indexes.number.length ? Aa.has(e) && !o.values.length || Aa.has(t) && !r.values.length ? L4(e, t) : Tt(N1(H4(r, o), o.values), n) : (Nn(!0, `Complex values '${e}' and '${t}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`), Hr(e, t));
};
function D1(e, t, n) {
  return typeof e == "number" && typeof t == "number" && typeof n == "number" ? ve(e, t, n) : wi(e)(e, t);
}
function U4(e, t, n) {
  const r = [], o = n || D1, i = e.length - 1;
  for (let s = 0; s < i; s++) {
    let l = o(e[s], e[s + 1]);
    if (t) {
      const c = Array.isArray(t) ? t[s] || Pe : t;
      l = Tt(c, l);
    }
    r.push(l);
  }
  return r;
}
function G4(e, t, { clamp: n = !0, ease: r, mixer: o } = {}) {
  const i = e.length;
  if (kt(i === t.length, "Both input and output ranges must be the same length"), i === 1)
    return () => t[0];
  if (i === 2 && e[0] === e[1])
    return () => t[1];
  e[0] > e[i - 1] && (e = [...e].reverse(), t = [...t].reverse());
  const s = U4(t, r, o), l = s.length, c = (u) => {
    let d = 0;
    if (l > 1)
      for (; d < e.length - 2 && !(u < e[d + 1]); d++)
        ;
    const f = Qn(e[d], e[d + 1], u);
    return s[d](f);
  };
  return n ? (u) => c(zt(e[0], e[i - 1], u)) : c;
}
function j4(e, t) {
  const n = e[e.length - 1];
  for (let r = 1; r <= t; r++) {
    const o = Qn(0, t, r);
    e.push(ve(n, 1, o));
  }
}
function K4(e) {
  const t = [0];
  return j4(t, e.length - 1), t;
}
function Y4(e, t) {
  return e.map((n) => n * t);
}
function q4(e, t) {
  return e.map(() => t || R1).splice(0, e.length - 1);
}
function Wr({ duration: e = 300, keyframes: t, times: n, ease: r = "easeInOut" }) {
  const o = D4(r) ? r.map(el) : el(r), i = {
    done: !1,
    value: t[0]
  }, s = Y4(
    // Only use the provided offsets if they're the correct length
    // TODO Maybe we should warn here if there's a length mismatch
    n && n.length === t.length ? n : K4(t),
    e
  ), l = G4(s, t, {
    ease: Array.isArray(o) ? o : q4(t, o)
  });
  return {
    calculatedDuration: e,
    next: (c) => (i.value = l(c), i.done = c >= e, i)
  };
}
const rl = 2e4;
function X4(e) {
  let t = 0;
  const n = 50;
  let r = e.next(t);
  for (; !r.done && t < rl; )
    t += n, r = e.next(t);
  return t >= rl ? 1 / 0 : t;
}
const Z4 = (e) => {
  const t = ({ timestamp: n }) => e(n);
  return {
    start: () => oe.update(t, !0),
    stop: () => Dt(t),
    /**
     * If we're processing this frame we can use the
     * framelocked timestamp to keep things in sync.
     */
    now: () => _e.isProcessing ? _e.timestamp : At.now()
  };
}, Q4 = {
  decay: Qs,
  inertia: Qs,
  tween: Wr,
  keyframes: Wr,
  spring: M1
}, J4 = (e) => e / 100;
class yi extends x1 {
  constructor(t) {
    super(t), this.holdTime = null, this.cancelTime = null, this.currentTime = 0, this.playbackSpeed = 1, this.pendingPlayState = "running", this.startTime = null, this.state = "idle", this.stop = () => {
      if (this.resolver.cancel(), this.isStopped = !0, this.state === "idle")
        return;
      this.teardown();
      const { onStop: c } = this.options;
      c && c();
    };
    const { name: n, motionValue: r, element: o, keyframes: i } = this.options, s = (o == null ? void 0 : o.KeyframeResolver) || fi, l = (c, u) => this.onKeyframesResolved(c, u);
    this.resolver = new s(i, l, n, r, o), this.resolver.scheduleResolve();
  }
  initPlayback(t) {
    const { type: n = "keyframes", repeat: r = 0, repeatDelay: o = 0, repeatType: i, velocity: s = 0 } = this.options, l = Q4[n] || Wr;
    let c, u;
    l !== Wr && typeof t[0] != "number" && (process.env.NODE_ENV !== "production" && kt(t.length === 2, `Only two keyframes currently supported with spring and inertia animations. Trying to animate ${t}`), c = Tt(J4, D1(t[0], t[1])), t = [0, 100]);
    const d = l({ ...this.options, keyframes: t });
    i === "mirror" && (u = l({
      ...this.options,
      keyframes: [...t].reverse(),
      velocity: -s
    })), d.calculatedDuration === null && (d.calculatedDuration = X4(d));
    const { calculatedDuration: f } = d, p = f + o, m = p * (r + 1) - o;
    return {
      generator: d,
      mirroredGenerator: u,
      mapPercentToKeyframes: c,
      calculatedDuration: f,
      resolvedDuration: p,
      totalDuration: m
    };
  }
  onPostResolved() {
    const { autoplay: t = !0 } = this.options;
    this.play(), this.pendingPlayState === "paused" || !t ? this.pause() : this.state = this.pendingPlayState;
  }
  tick(t, n = !1) {
    const { resolved: r } = this;
    if (!r) {
      const { keyframes: N } = this.options;
      return { done: !0, value: N[N.length - 1] };
    }
    const { finalKeyframe: o, generator: i, mirroredGenerator: s, mapPercentToKeyframes: l, keyframes: c, calculatedDuration: u, totalDuration: d, resolvedDuration: f } = r;
    if (this.startTime === null)
      return i.next(0);
    const { delay: p, repeat: m, repeatType: v, repeatDelay: g, onUpdate: x } = this.options;
    this.speed > 0 ? this.startTime = Math.min(this.startTime, t) : this.speed < 0 && (this.startTime = Math.min(t - d / this.speed, this.startTime)), n ? this.currentTime = t : this.holdTime !== null ? this.currentTime = this.holdTime : this.currentTime = Math.round(t - this.startTime) * this.speed;
    const C = this.currentTime - p * (this.speed >= 0 ? 1 : -1), y = this.speed >= 0 ? C < 0 : C > d;
    this.currentTime = Math.max(C, 0), this.state === "finished" && this.holdTime === null && (this.currentTime = d);
    let M = this.currentTime, _ = i;
    if (m) {
      const N = Math.min(this.currentTime, d) / f;
      let k = Math.floor(N), z = N % 1;
      !z && N >= 1 && (z = 1), z === 1 && k--, k = Math.min(k, m + 1), !!(k % 2) && (v === "reverse" ? (z = 1 - z, g && (z -= g / f)) : v === "mirror" && (_ = s)), M = zt(0, 1, z) * f;
    }
    const P = y ? { done: !1, value: c[0] } : _.next(M);
    l && (P.value = l(P.value));
    let { done: E } = P;
    !y && u !== null && (E = this.speed >= 0 ? this.currentTime >= d : this.currentTime <= 0);
    const L = this.holdTime === null && (this.state === "finished" || this.state === "running" && E);
    return L && o !== void 0 && (P.value = vo(c, this.options, o)), x && x(P.value), L && this.finish(), P;
  }
  get duration() {
    const { resolved: t } = this;
    return t ? Pt(t.calculatedDuration) : 0;
  }
  get time() {
    return Pt(this.currentTime);
  }
  set time(t) {
    t = mt(t), this.currentTime = t, this.holdTime !== null || this.speed === 0 ? this.holdTime = t : this.driver && (this.startTime = this.driver.now() - t / this.speed);
  }
  get speed() {
    return this.playbackSpeed;
  }
  set speed(t) {
    const n = this.playbackSpeed !== t;
    this.playbackSpeed = t, n && (this.time = Pt(this.currentTime));
  }
  play() {
    if (this.resolver.isScheduled || this.resolver.resume(), !this._resolved) {
      this.pendingPlayState = "running";
      return;
    }
    if (this.isStopped)
      return;
    const { driver: t = Z4, onPlay: n, startTime: r } = this.options;
    this.driver || (this.driver = t((i) => this.tick(i))), n && n();
    const o = this.driver.now();
    this.holdTime !== null ? this.startTime = o - this.holdTime : this.startTime ? this.state === "finished" && (this.startTime = o) : this.startTime = r ?? this.calcStartTime(), this.state === "finished" && this.updateFinishedPromise(), this.cancelTime = this.startTime, this.holdTime = null, this.state = "running", this.driver.start();
  }
  pause() {
    var t;
    if (!this._resolved) {
      this.pendingPlayState = "paused";
      return;
    }
    this.state = "paused", this.holdTime = (t = this.currentTime) !== null && t !== void 0 ? t : 0;
  }
  complete() {
    this.state !== "running" && this.play(), this.pendingPlayState = this.state = "finished", this.holdTime = null;
  }
  finish() {
    this.teardown(), this.state = "finished";
    const { onComplete: t } = this.options;
    t && t();
  }
  cancel() {
    this.cancelTime !== null && this.tick(this.cancelTime), this.teardown(), this.updateFinishedPromise();
  }
  teardown() {
    this.state = "idle", this.stopDriver(), this.resolveFinishedPromise(), this.updateFinishedPromise(), this.startTime = this.cancelTime = null, this.resolver.cancel();
  }
  stopDriver() {
    this.driver && (this.driver.stop(), this.driver = void 0);
  }
  sample(t) {
    return this.startTime = 0, this.tick(t, !0);
  }
}
const k1 = /* @__PURE__ */ new Set([
  "opacity",
  "clipPath",
  "filter",
  "transform"
  // TODO: Can be accelerated but currently disabled until https://issues.chromium.org/issues/41491098 is resolved
  // or until we implement support for linear() easing.
  // "background-color"
]), E1 = (e) => Array.isArray(e) && typeof e[0] == "number";
function F1(e) {
  return !!(!e || typeof e == "string" && e in xi || E1(e) || Array.isArray(e) && e.every(F1));
}
const $n = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`, xi = {
  linear: "linear",
  ease: "ease",
  easeIn: "ease-in",
  easeOut: "ease-out",
  easeInOut: "ease-in-out",
  circIn: /* @__PURE__ */ $n([0, 0.65, 0.55, 1]),
  circOut: /* @__PURE__ */ $n([0.55, 0, 1, 0.45]),
  backIn: /* @__PURE__ */ $n([0.31, 0.01, 0.66, -0.59]),
  backOut: /* @__PURE__ */ $n([0.33, 1.53, 0.69, 0.99])
};
function ep(e) {
  return I1(e) || xi.easeOut;
}
function I1(e) {
  if (e)
    return E1(e) ? $n(e) : Array.isArray(e) ? e.map(ep) : xi[e];
}
function tp(e, t, n, { delay: r = 0, duration: o = 300, repeat: i = 0, repeatType: s = "loop", ease: l, times: c } = {}) {
  const u = { [t]: n };
  c && (u.offset = c);
  const d = I1(l);
  return Array.isArray(d) && (u.easing = d), e.animate(u, {
    delay: r,
    duration: o,
    easing: Array.isArray(d) ? "linear" : d,
    fill: "both",
    iterations: i + 1,
    direction: s === "reverse" ? "alternate" : "normal"
  });
}
const np = /* @__PURE__ */ y1(() => Object.hasOwnProperty.call(Element.prototype, "animate")), Ur = 10, rp = 2e4;
function op(e) {
  return e.type === "spring" || !F1(e.ease);
}
function ap(e, t) {
  const n = new yi({
    ...t,
    keyframes: e,
    repeat: 0,
    delay: 0,
    isGenerator: !0
  });
  let r = { done: !1, value: e[0] };
  const o = [];
  let i = 0;
  for (; !r.done && i < rp; )
    r = n.sample(i), o.push(r.value), i += Ur;
  return {
    times: void 0,
    keyframes: o,
    duration: i - Ur,
    ease: "linear"
  };
}
class ol extends x1 {
  constructor(t) {
    super(t);
    const { name: n, motionValue: r, element: o, keyframes: i } = this.options;
    this.resolver = new w1(i, (s, l) => this.onKeyframesResolved(s, l), n, r, o), this.resolver.scheduleResolve();
  }
  initPlayback(t, n) {
    var r;
    let { duration: o = 300, times: i, ease: s, type: l, motionValue: c, name: u, startTime: d } = this.options;
    if (!(!((r = c.owner) === null || r === void 0) && r.current))
      return !1;
    if (op(this.options)) {
      const { onComplete: p, onUpdate: m, motionValue: v, element: g, ...x } = this.options, C = ap(t, x);
      t = C.keyframes, t.length === 1 && (t[1] = t[0]), o = C.duration, i = C.times, s = C.ease, l = "keyframes";
    }
    const f = tp(c.owner.current, u, t, { ...this.options, duration: o, times: i, ease: s });
    return f.startTime = d ?? this.calcStartTime(), this.pendingTimeline ? (f.timeline = this.pendingTimeline, this.pendingTimeline = void 0) : f.onfinish = () => {
      const { onComplete: p } = this.options;
      c.set(vo(t, this.options, n)), p && p(), this.cancel(), this.resolveFinishedPromise();
    }, {
      animation: f,
      duration: o,
      times: i,
      type: l,
      ease: s,
      keyframes: t
    };
  }
  get duration() {
    const { resolved: t } = this;
    if (!t)
      return 0;
    const { duration: n } = t;
    return Pt(n);
  }
  get time() {
    const { resolved: t } = this;
    if (!t)
      return 0;
    const { animation: n } = t;
    return Pt(n.currentTime || 0);
  }
  set time(t) {
    const { resolved: n } = this;
    if (!n)
      return;
    const { animation: r } = n;
    r.currentTime = mt(t);
  }
  get speed() {
    const { resolved: t } = this;
    if (!t)
      return 1;
    const { animation: n } = t;
    return n.playbackRate;
  }
  set speed(t) {
    const { resolved: n } = this;
    if (!n)
      return;
    const { animation: r } = n;
    r.playbackRate = t;
  }
  get state() {
    const { resolved: t } = this;
    if (!t)
      return "idle";
    const { animation: n } = t;
    return n.playState;
  }
  get startTime() {
    const { resolved: t } = this;
    if (!t)
      return null;
    const { animation: n } = t;
    return n.startTime;
  }
  /**
   * Replace the default DocumentTimeline with another AnimationTimeline.
   * Currently used for scroll animations.
   */
  attachTimeline(t) {
    if (!this._resolved)
      this.pendingTimeline = t;
    else {
      const { resolved: n } = this;
      if (!n)
        return Pe;
      const { animation: r } = n;
      r.timeline = t, r.onfinish = null;
    }
    return Pe;
  }
  play() {
    if (this.isStopped)
      return;
    const { resolved: t } = this;
    if (!t)
      return;
    const { animation: n } = t;
    n.playState === "finished" && this.updateFinishedPromise(), n.play();
  }
  pause() {
    const { resolved: t } = this;
    if (!t)
      return;
    const { animation: n } = t;
    n.pause();
  }
  stop() {
    if (this.resolver.cancel(), this.isStopped = !0, this.state === "idle")
      return;
    this.resolveFinishedPromise(), this.updateFinishedPromise();
    const { resolved: t } = this;
    if (!t)
      return;
    const { animation: n, keyframes: r, duration: o, type: i, ease: s, times: l } = t;
    if (n.playState === "idle" || n.playState === "finished")
      return;
    if (this.time) {
      const { motionValue: u, onUpdate: d, onComplete: f, element: p, ...m } = this.options, v = new yi({
        ...m,
        keyframes: r,
        duration: o,
        type: i,
        ease: s,
        times: l,
        isGenerator: !0
      }), g = mt(this.time);
      u.setWithVelocity(v.sample(g - Ur).value, v.sample(g).value, Ur);
    }
    const { onStop: c } = this.options;
    c && c(), this.cancel();
  }
  complete() {
    const { resolved: t } = this;
    t && t.animation.finish();
  }
  cancel() {
    const { resolved: t } = this;
    t && t.animation.cancel();
  }
  static supports(t) {
    const { motionValue: n, name: r, repeatDelay: o, repeatType: i, damping: s, type: l } = t;
    return np() && r && k1.has(r) && n && n.owner && n.owner.current instanceof HTMLElement && /**
     * If we're outputting values to onUpdate then we can't use WAAPI as there's
     * no way to read the value from WAAPI every frame.
     */
    !n.owner.getProps().onUpdate && !o && i !== "mirror" && s !== 0 && l !== "inertia";
  }
}
function ip(e, t) {
  let n;
  const r = () => {
    const { currentTime: o } = t, s = (o === null ? 0 : o.value) / 100;
    n !== s && e(s), n = s;
  };
  return oe.update(r, !0), () => Dt(r);
}
const sp = y1(() => window.ScrollTimeline !== void 0);
class lp {
  constructor(t) {
    this.stop = () => this.runAll("stop"), this.animations = t.filter(Boolean);
  }
  then(t, n) {
    return Promise.all(this.animations).then(t).catch(n);
  }
  /**
   * TODO: Filter out cancelled or stopped animations before returning
   */
  getAll(t) {
    return this.animations[0][t];
  }
  setAll(t, n) {
    for (let r = 0; r < this.animations.length; r++)
      this.animations[r][t] = n;
  }
  attachTimeline(t) {
    const n = this.animations.map((r) => {
      if (sp() && r.attachTimeline)
        r.attachTimeline(t);
      else
        return r.pause(), ip((o) => {
          r.time = r.duration * o;
        }, t);
    });
    return () => {
      n.forEach((r, o) => {
        r && r(), this.animations[o].stop();
      });
    };
  }
  get time() {
    return this.getAll("time");
  }
  set time(t) {
    this.setAll("time", t);
  }
  get speed() {
    return this.getAll("speed");
  }
  set speed(t) {
    this.setAll("speed", t);
  }
  get startTime() {
    return this.getAll("startTime");
  }
  get duration() {
    let t = 0;
    for (let n = 0; n < this.animations.length; n++)
      t = Math.max(t, this.animations[n].duration);
    return t;
  }
  runAll(t) {
    this.animations.forEach((n) => n[t]());
  }
  play() {
    this.runAll("play");
  }
  pause() {
    this.runAll("pause");
  }
  cancel() {
    this.runAll("cancel");
  }
  complete() {
    this.runAll("complete");
  }
}
const bi = (e, t, n, r = {}, o, i, s) => (l) => {
  const c = ci(r, e) || {}, u = c.delay || r.delay || 0;
  let { elapsed: d = 0 } = r;
  d = d - mt(u);
  let f = {
    keyframes: Array.isArray(n) ? n : [null, n],
    ease: "easeOut",
    velocity: t.getVelocity(),
    ...c,
    delay: -d,
    onUpdate: (m) => {
      t.set(m), c.onUpdate && c.onUpdate(m);
    },
    onComplete: () => {
      l(), c.onComplete && c.onComplete(), s && s();
    },
    onStop: s,
    name: e,
    motionValue: t,
    element: i ? void 0 : o
  };
  Nh(c) || (f = {
    ...f,
    ...Th(e, f)
  }), f.duration && (f.duration = mt(f.duration)), f.repeatDelay && (f.repeatDelay = mt(f.repeatDelay)), f.from !== void 0 && (f.keyframes[0] = f.from);
  let p = !1;
  if ((f.type === !1 || f.duration === 0 && !f.repeatDelay) && (f.duration = 0, f.delay === 0 && (p = !0)), p && !i && t.get() !== void 0) {
    const m = vo(f.keyframes, c);
    if (m !== void 0)
      return oe.update(() => {
        f.onUpdate(m), f.onComplete();
      }), new lp([]);
  }
  return !i && ol.supports(f) ? new ol(f) : new yi(f);
}, cp = (e) => !!(e && typeof e == "object" && e.mix && e.toValue), up = (e) => Ca(e) ? e[e.length - 1] || 0 : e;
function go(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
function wo(e, t) {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}
class Ci {
  constructor() {
    this.subscriptions = [];
  }
  add(t) {
    return go(this.subscriptions, t), () => wo(this.subscriptions, t);
  }
  notify(t, n, r) {
    const o = this.subscriptions.length;
    if (o)
      if (o === 1)
        this.subscriptions[0](t, n, r);
      else
        for (let i = 0; i < o; i++) {
          const s = this.subscriptions[i];
          s && s(t, n, r);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
const al = 30, dp = (e) => !isNaN(parseFloat(e));
class O1 {
  /**
   * @param init - The initiating value
   * @param config - Optional configuration options
   *
   * -  `transformer`: A function to transform incoming values with.
   *
   * @internal
   */
  constructor(t, n = {}) {
    this.version = "11.5.4", this.canTrackVelocity = null, this.events = {}, this.updateAndNotify = (r, o = !0) => {
      const i = At.now();
      this.updatedAt !== i && this.setPrevFrameValue(), this.prev = this.current, this.setCurrent(r), this.current !== this.prev && this.events.change && this.events.change.notify(this.current), o && this.events.renderRequest && this.events.renderRequest.notify(this.current);
    }, this.hasAnimated = !1, this.setCurrent(t), this.owner = n.owner;
  }
  setCurrent(t) {
    this.current = t, this.updatedAt = At.now(), this.canTrackVelocity === null && t !== void 0 && (this.canTrackVelocity = dp(this.current));
  }
  setPrevFrameValue(t = this.current) {
    this.prevFrameValue = t, this.prevUpdatedAt = this.updatedAt;
  }
  /**
   * Adds a function that will be notified when the `MotionValue` is updated.
   *
   * It returns a function that, when called, will cancel the subscription.
   *
   * When calling `onChange` inside a React component, it should be wrapped with the
   * `useEffect` hook. As it returns an unsubscribe function, this should be returned
   * from the `useEffect` function to ensure you don't add duplicate subscribers..
   *
   * ```jsx
   * export const MyComponent = () => {
   *   const x = useMotionValue(0)
   *   const y = useMotionValue(0)
   *   const opacity = useMotionValue(1)
   *
   *   useEffect(() => {
   *     function updateOpacity() {
   *       const maxXY = Math.max(x.get(), y.get())
   *       const newOpacity = transform(maxXY, [0, 100], [1, 0])
   *       opacity.set(newOpacity)
   *     }
   *
   *     const unsubscribeX = x.on("change", updateOpacity)
   *     const unsubscribeY = y.on("change", updateOpacity)
   *
   *     return () => {
   *       unsubscribeX()
   *       unsubscribeY()
   *     }
   *   }, [])
   *
   *   return <motion.div style={{ x }} />
   * }
   * ```
   *
   * @param subscriber - A function that receives the latest value.
   * @returns A function that, when called, will cancel this subscription.
   *
   * @deprecated
   */
  onChange(t) {
    return process.env.NODE_ENV !== "production" && po(!1, 'value.onChange(callback) is deprecated. Switch to value.on("change", callback).'), this.on("change", t);
  }
  on(t, n) {
    this.events[t] || (this.events[t] = new Ci());
    const r = this.events[t].add(n);
    return t === "change" ? () => {
      r(), oe.read(() => {
        this.events.change.getSize() || this.stop();
      });
    } : r;
  }
  clearListeners() {
    for (const t in this.events)
      this.events[t].clear();
  }
  /**
   * Attaches a passive effect to the `MotionValue`.
   *
   * @internal
   */
  attach(t, n) {
    this.passiveEffect = t, this.stopPassiveEffect = n;
  }
  /**
   * Sets the state of the `MotionValue`.
   *
   * @remarks
   *
   * ```jsx
   * const x = useMotionValue(0)
   * x.set(10)
   * ```
   *
   * @param latest - Latest value to set.
   * @param render - Whether to notify render subscribers. Defaults to `true`
   *
   * @public
   */
  set(t, n = !0) {
    !n || !this.passiveEffect ? this.updateAndNotify(t, n) : this.passiveEffect(t, this.updateAndNotify);
  }
  setWithVelocity(t, n, r) {
    this.set(n), this.prev = void 0, this.prevFrameValue = t, this.prevUpdatedAt = this.updatedAt - r;
  }
  /**
   * Set the state of the `MotionValue`, stopping any active animations,
   * effects, and resets velocity to `0`.
   */
  jump(t, n = !0) {
    this.updateAndNotify(t), this.prev = t, this.prevUpdatedAt = this.prevFrameValue = void 0, n && this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
  }
  /**
   * Returns the latest state of `MotionValue`
   *
   * @returns - The latest state of `MotionValue`
   *
   * @public
   */
  get() {
    return this.current;
  }
  /**
   * @public
   */
  getPrevious() {
    return this.prev;
  }
  /**
   * Returns the latest velocity of `MotionValue`
   *
   * @returns - The latest velocity of `MotionValue`. Returns `0` if the state is non-numerical.
   *
   * @public
   */
  getVelocity() {
    const t = At.now();
    if (!this.canTrackVelocity || this.prevFrameValue === void 0 || t - this.updatedAt > al)
      return 0;
    const n = Math.min(this.updatedAt - this.prevUpdatedAt, al);
    return b1(parseFloat(this.current) - parseFloat(this.prevFrameValue), n);
  }
  /**
   * Registers a new animation to control this `MotionValue`. Only one
   * animation can drive a `MotionValue` at one time.
   *
   * ```jsx
   * value.start()
   * ```
   *
   * @param animation - A function that starts the provided animation
   *
   * @internal
   */
  start(t) {
    return this.stop(), new Promise((n) => {
      this.hasAnimated = !0, this.animation = t(n), this.events.animationStart && this.events.animationStart.notify();
    }).then(() => {
      this.events.animationComplete && this.events.animationComplete.notify(), this.clearAnimation();
    });
  }
  /**
   * Stop the currently active animation.
   *
   * @public
   */
  stop() {
    this.animation && (this.animation.stop(), this.events.animationCancel && this.events.animationCancel.notify()), this.clearAnimation();
  }
  /**
   * Returns `true` if this value is currently animating.
   *
   * @public
   */
  isAnimating() {
    return !!this.animation;
  }
  clearAnimation() {
    delete this.animation;
  }
  /**
   * Destroy and clean up subscribers to this `MotionValue`.
   *
   * The `MotionValue` hooks like `useMotionValue` and `useTransform` automatically
   * handle the lifecycle of the returned `MotionValue`, so this method is only necessary if you've manually
   * created a `MotionValue` via the `motionValue` function.
   *
   * @public
   */
  destroy() {
    this.clearListeners(), this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
  }
}
function Jn(e, t) {
  return new O1(e, t);
}
function fp(e, t, n) {
  e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, Jn(n));
}
function hp(e, t) {
  const n = mo(e, t);
  let { transitionEnd: r = {}, transition: o = {}, ...i } = n || {};
  i = { ...i, ...r };
  for (const s in i) {
    const l = up(i[s]);
    fp(e, s, l);
  }
}
const yo = (e) => e.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(), pp = "framerAppearId", V1 = "data-" + yo(pp);
function B1(e) {
  return e.props[V1];
}
function L1(e) {
  if (Ut.has(e))
    return "transform";
  if (k1.has(e))
    return yo(e);
}
class mp extends O1 {
  constructor() {
    super(...arguments), this.output = [], this.counts = /* @__PURE__ */ new Map();
  }
  add(t) {
    const n = L1(t);
    if (!n)
      return;
    const r = this.counts.get(n) || 0;
    this.counts.set(n, r + 1), r === 0 && (this.output.push(n), this.update());
    let o = !1;
    return () => {
      if (o)
        return;
      o = !0;
      const i = this.counts.get(n) - 1;
      this.counts.set(n, i), i === 0 && (wo(this.output, n), this.update());
    };
  }
  update() {
    this.set(this.output.length ? this.output.join(", ") : "auto");
  }
}
const Te = (e) => !!(e && e.getVelocity);
function vp(e) {
  return !!(Te(e) && e.add);
}
function Ta(e, t) {
  var n;
  if (!e.applyWillChange)
    return;
  let r = e.getValue("willChange");
  if (!r && !(!((n = e.props.style) === null || n === void 0) && n.willChange) && (r = new mp("auto"), e.addValue("willChange", r)), vp(r))
    return r.add(t);
}
function gp({ protectedKeys: e, needsAnimating: t }, n) {
  const r = e.hasOwnProperty(n) && t[n] !== !0;
  return t[n] = !1, r;
}
function $1(e, t, { delay: n = 0, transitionOverride: r, type: o } = {}) {
  var i;
  let { transition: s = e.getDefaultTransition(), transitionEnd: l, ...c } = t;
  r && (s = r);
  const u = [], d = o && e.animationState && e.animationState.getState()[o];
  for (const f in c) {
    const p = e.getValue(f, (i = e.latestValues[f]) !== null && i !== void 0 ? i : null), m = c[f];
    if (m === void 0 || d && gp(d, f))
      continue;
    const v = {
      delay: n,
      ...ci(s || {}, f)
    };
    let g = !1;
    if (window.MotionHandoffAnimation) {
      const C = B1(e);
      if (C) {
        const y = window.MotionHandoffAnimation(C, f, oe);
        y !== null && (v.startTime = y, g = !0);
      }
    }
    p.start(bi(f, p, m, e.shouldReduceMotion && Ut.has(f) ? { type: !1 } : v, e, g, Ta(e, f)));
    const x = p.animation;
    x && u.push(x);
  }
  return l && Promise.all(u).then(() => {
    oe.update(() => {
      l && hp(e, l);
    });
  }), u;
}
function Na(e, t, n = {}) {
  var r;
  const o = mo(e, t, n.type === "exit" ? (r = e.presenceContext) === null || r === void 0 ? void 0 : r.custom : void 0);
  let { transition: i = e.getDefaultTransition() || {} } = o || {};
  n.transitionOverride && (i = n.transitionOverride);
  const s = o ? () => Promise.all($1(e, o, n)) : () => Promise.resolve(), l = e.variantChildren && e.variantChildren.size ? (u = 0) => {
    const { delayChildren: d = 0, staggerChildren: f, staggerDirection: p } = i;
    return wp(e, t, d + u, f, p, n);
  } : () => Promise.resolve(), { when: c } = i;
  if (c) {
    const [u, d] = c === "beforeChildren" ? [s, l] : [l, s];
    return u().then(() => d());
  } else
    return Promise.all([s(), l(n.delay)]);
}
function wp(e, t, n = 0, r = 0, o = 1, i) {
  const s = [], l = (e.variantChildren.size - 1) * r, c = o === 1 ? (u = 0) => u * r : (u = 0) => l - u * r;
  return Array.from(e.variantChildren).sort(yp).forEach((u, d) => {
    u.notify("AnimationStart", t), s.push(Na(u, t, {
      ...i,
      delay: n + c(d)
    }).then(() => u.notify("AnimationComplete", t)));
  }), Promise.all(s);
}
function yp(e, t) {
  return e.sortNodePosition(t);
}
function xp(e, t, n = {}) {
  e.notify("AnimationStart", t);
  let r;
  if (Array.isArray(t)) {
    const o = t.map((i) => Na(e, i, n));
    r = Promise.all(o);
  } else if (typeof t == "string")
    r = Na(e, t, n);
  else {
    const o = typeof t == "function" ? mo(e, t, n.custom) : t;
    r = Promise.all($1(e, o, n));
  }
  return r.then(() => {
    e.notify("AnimationComplete", t);
  });
}
const bp = [...si].reverse(), Cp = si.length;
function Mp(e) {
  return (t) => Promise.all(t.map(({ animation: n, options: r }) => xp(e, n, r)));
}
function Sp(e) {
  let t = Mp(e), n = il(), r = !0;
  const o = (c) => (u, d) => {
    var f;
    const p = mo(e, d, c === "exit" ? (f = e.presenceContext) === null || f === void 0 ? void 0 : f.custom : void 0);
    if (p) {
      const { transition: m, transitionEnd: v, ...g } = p;
      u = { ...u, ...g, ...v };
    }
    return u;
  };
  function i(c) {
    t = c(e);
  }
  function s(c) {
    const u = e.getProps(), d = e.getVariantContext(!0) || {}, f = [], p = /* @__PURE__ */ new Set();
    let m = {}, v = 1 / 0;
    for (let x = 0; x < Cp; x++) {
      const C = bp[x], y = n[C], M = u[C] !== void 0 ? u[C] : d[C], _ = Xn(M), P = C === c ? y.isActive : null;
      P === !1 && (v = x);
      let E = M === d[C] && M !== u[C] && _;
      if (E && r && e.manuallyAnimateOnMount && (E = !1), y.protectedKeys = { ...m }, // If it isn't active and hasn't *just* been set as inactive
      !y.isActive && P === null || // If we didn't and don't have any defined prop for this animation type
      !M && !y.prevProp || // Or if the prop doesn't define an animation
      qn(M) || typeof M == "boolean")
        continue;
      let N = Rp(y.prevProp, M) || // If we're making this variant active, we want to always make it active
      C === c && y.isActive && !E && _ || // If we removed a higher-priority variant (i is in reverse order)
      x > v && _, k = !1;
      const z = Array.isArray(M) ? M : [M];
      let Q = z.reduce(o(C), {});
      P === !1 && (Q = {});
      const { prevResolvedValues: H = {} } = y, q = {
        ...H,
        ...Q
      }, J = (G) => {
        N = !0, p.has(G) && (k = !0, p.delete(G)), y.needsAnimating[G] = !0;
        const Z = e.getValue(G);
        Z && (Z.liveStyle = !1);
      };
      for (const G in q) {
        const Z = Q[G], I = H[G];
        if (m.hasOwnProperty(G))
          continue;
        let O = !1;
        Ca(Z) && Ca(I) ? O = !t1(Z, I) : O = Z !== I, O ? Z != null ? J(G) : p.add(G) : Z !== void 0 && p.has(G) ? J(G) : y.protectedKeys[G] = !0;
      }
      y.prevProp = M, y.prevResolvedValues = Q, y.isActive && (m = { ...m, ...Q }), r && e.blockInitialAnimation && (N = !1), N && (!E || k) && f.push(...z.map((G) => ({
        animation: G,
        options: { type: C }
      })));
    }
    if (p.size) {
      const x = {};
      p.forEach((C) => {
        const y = e.getBaseTarget(C), M = e.getValue(C);
        M && (M.liveStyle = !0), x[C] = y ?? null;
      }), f.push({ animation: x });
    }
    let g = !!f.length;
    return r && (u.initial === !1 || u.initial === u.animate) && !e.manuallyAnimateOnMount && (g = !1), r = !1, g ? t(f) : Promise.resolve();
  }
  function l(c, u) {
    var d;
    if (n[c].isActive === u)
      return Promise.resolve();
    (d = e.variantChildren) === null || d === void 0 || d.forEach((p) => {
      var m;
      return (m = p.animationState) === null || m === void 0 ? void 0 : m.setActive(c, u);
    }), n[c].isActive = u;
    const f = s(c);
    for (const p in n)
      n[p].protectedKeys = {};
    return f;
  }
  return {
    animateChanges: s,
    setActive: l,
    setAnimateFunction: i,
    getState: () => n,
    reset: () => {
      n = il(), r = !0;
    }
  };
}
function Rp(e, t) {
  return typeof t == "string" ? t !== e : Array.isArray(t) ? !t1(t, e) : !1;
}
function qt(e = !1) {
  return {
    isActive: e,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {}
  };
}
function il() {
  return {
    animate: qt(!0),
    whileInView: qt(),
    whileHover: qt(),
    whileTap: qt(),
    whileDrag: qt(),
    whileFocus: qt(),
    exit: qt()
  };
}
class Gt {
  constructor(t) {
    this.isMounted = !1, this.node = t;
  }
  update() {
  }
}
class _p extends Gt {
  /**
   * We dynamically generate the AnimationState manager as it contains a reference
   * to the underlying animation library. We only want to load that if we load this,
   * so people can optionally code split it out using the `m` component.
   */
  constructor(t) {
    super(t), t.animationState || (t.animationState = Sp(t));
  }
  updateAnimationControlsSubscription() {
    const { animate: t } = this.node.getProps();
    qn(t) && (this.unmountControls = t.subscribe(this.node));
  }
  /**
   * Subscribe any provided AnimationControls to the component's VisualElement
   */
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const { animate: t } = this.node.getProps(), { animate: n } = this.node.prevProps || {};
    t !== n && this.updateAnimationControlsSubscription();
  }
  unmount() {
    var t;
    this.node.animationState.reset(), (t = this.unmountControls) === null || t === void 0 || t.call(this);
  }
}
let Pp = 0;
class Ap extends Gt {
  constructor() {
    super(...arguments), this.id = Pp++;
  }
  update() {
    if (!this.node.presenceContext)
      return;
    const { isPresent: t, onExitComplete: n } = this.node.presenceContext, { isPresent: r } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || t === r)
      return;
    const o = this.node.animationState.setActive("exit", !t);
    n && !t && o.then(() => n(this.id));
  }
  mount() {
    const { register: t } = this.node.presenceContext || {};
    t && (this.unmount = t(this.id));
  }
  unmount() {
  }
}
const Tp = {
  animation: {
    Feature: _p
  },
  exit: {
    Feature: Ap
  }
}, z1 = (e) => e.pointerType === "mouse" ? typeof e.button != "number" || e.button <= 0 : e.isPrimary !== !1;
function xo(e, t = "page") {
  return {
    point: {
      x: e[`${t}X`],
      y: e[`${t}Y`]
    }
  };
}
const Np = (e) => (t) => z1(t) && e(t, xo(t));
function Rt(e, t, n, r = { passive: !0 }) {
  return e.addEventListener(t, n, r), () => e.removeEventListener(t, n);
}
function Nt(e, t, n, r) {
  return Rt(e, t, Np(n), r);
}
const sl = (e, t) => Math.abs(e - t);
function Dp(e, t) {
  const n = sl(e.x, t.x), r = sl(e.y, t.y);
  return Math.sqrt(n ** 2 + r ** 2);
}
class H1 {
  constructor(t, n, { transformPagePoint: r, contextWindow: o, dragSnapToOrigin: i = !1 } = {}) {
    if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.contextWindow = window, this.updatePoint = () => {
      if (!(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const f = Xo(this.lastMoveEventInfo, this.history), p = this.startEvent !== null, m = Dp(f.offset, { x: 0, y: 0 }) >= 3;
      if (!p && !m)
        return;
      const { point: v } = f, { timestamp: g } = _e;
      this.history.push({ ...v, timestamp: g });
      const { onStart: x, onMove: C } = this.handlers;
      p || (x && x(this.lastMoveEvent, f), this.startEvent = this.lastMoveEvent), C && C(this.lastMoveEvent, f);
    }, this.handlePointerMove = (f, p) => {
      this.lastMoveEvent = f, this.lastMoveEventInfo = qo(p, this.transformPagePoint), oe.update(this.updatePoint, !0);
    }, this.handlePointerUp = (f, p) => {
      this.end();
      const { onEnd: m, onSessionEnd: v, resumeAnimation: g } = this.handlers;
      if (this.dragSnapToOrigin && g && g(), !(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const x = Xo(f.type === "pointercancel" ? this.lastMoveEventInfo : qo(p, this.transformPagePoint), this.history);
      this.startEvent && m && m(f, x), v && v(f, x);
    }, !z1(t))
      return;
    this.dragSnapToOrigin = i, this.handlers = n, this.transformPagePoint = r, this.contextWindow = o || window;
    const s = xo(t), l = qo(s, this.transformPagePoint), { point: c } = l, { timestamp: u } = _e;
    this.history = [{ ...c, timestamp: u }];
    const { onSessionStart: d } = n;
    d && d(t, Xo(l, this.history)), this.removeListeners = Tt(Nt(this.contextWindow, "pointermove", this.handlePointerMove), Nt(this.contextWindow, "pointerup", this.handlePointerUp), Nt(this.contextWindow, "pointercancel", this.handlePointerUp));
  }
  updateHandlers(t) {
    this.handlers = t;
  }
  end() {
    this.removeListeners && this.removeListeners(), Dt(this.updatePoint);
  }
}
function qo(e, t) {
  return t ? { point: t(e.point) } : e;
}
function ll(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function Xo({ point: e }, t) {
  return {
    point: e,
    delta: ll(e, W1(t)),
    offset: ll(e, kp(t)),
    velocity: Ep(t, 0.1)
  };
}
function kp(e) {
  return e[0];
}
function W1(e) {
  return e[e.length - 1];
}
function Ep(e, t) {
  if (e.length < 2)
    return { x: 0, y: 0 };
  let n = e.length - 1, r = null;
  const o = W1(e);
  for (; n >= 0 && (r = e[n], !(o.timestamp - r.timestamp > mt(t))); )
    n--;
  if (!r)
    return { x: 0, y: 0 };
  const i = Pt(o.timestamp - r.timestamp);
  if (i === 0)
    return { x: 0, y: 0 };
  const s = {
    x: (o.x - r.x) / i,
    y: (o.y - r.y) / i
  };
  return s.x === 1 / 0 && (s.x = 0), s.y === 1 / 0 && (s.y = 0), s;
}
function U1(e) {
  let t = null;
  return () => {
    const n = () => {
      t = null;
    };
    return t === null ? (t = e, n) : !1;
  };
}
const cl = U1("dragHorizontal"), ul = U1("dragVertical");
function G1(e) {
  let t = !1;
  if (e === "y")
    t = ul();
  else if (e === "x")
    t = cl();
  else {
    const n = cl(), r = ul();
    n && r ? t = () => {
      n(), r();
    } : (n && n(), r && r());
  }
  return t;
}
function j1() {
  const e = G1(!0);
  return e ? (e(), !1) : !0;
}
function gn(e) {
  return e && typeof e == "object" && Object.prototype.hasOwnProperty.call(e, "current");
}
const K1 = 1e-4, Fp = 1 - K1, Ip = 1 + K1, Y1 = 0.01, Op = 0 - Y1, Vp = 0 + Y1;
function Ge(e) {
  return e.max - e.min;
}
function Bp(e, t, n) {
  return Math.abs(e - t) <= n;
}
function dl(e, t, n, r = 0.5) {
  e.origin = r, e.originPoint = ve(t.min, t.max, e.origin), e.scale = Ge(n) / Ge(t), e.translate = ve(n.min, n.max, e.origin) - e.originPoint, (e.scale >= Fp && e.scale <= Ip || isNaN(e.scale)) && (e.scale = 1), (e.translate >= Op && e.translate <= Vp || isNaN(e.translate)) && (e.translate = 0);
}
function jn(e, t, n, r) {
  dl(e.x, t.x, n.x, r ? r.originX : void 0), dl(e.y, t.y, n.y, r ? r.originY : void 0);
}
function fl(e, t, n) {
  e.min = n.min + t.min, e.max = e.min + Ge(t);
}
function Lp(e, t, n) {
  fl(e.x, t.x, n.x), fl(e.y, t.y, n.y);
}
function hl(e, t, n) {
  e.min = t.min - n.min, e.max = e.min + Ge(t);
}
function Kn(e, t, n) {
  hl(e.x, t.x, n.x), hl(e.y, t.y, n.y);
}
function $p(e, { min: t, max: n }, r) {
  return t !== void 0 && e < t ? e = r ? ve(t, e, r.min) : Math.max(e, t) : n !== void 0 && e > n && (e = r ? ve(n, e, r.max) : Math.min(e, n)), e;
}
function pl(e, t, n) {
  return {
    min: t !== void 0 ? e.min + t : void 0,
    max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0
  };
}
function zp(e, { top: t, left: n, bottom: r, right: o }) {
  return {
    x: pl(e.x, n, o),
    y: pl(e.y, t, r)
  };
}
function ml(e, t) {
  let n = t.min - e.min, r = t.max - e.max;
  return t.max - t.min < e.max - e.min && ([n, r] = [r, n]), { min: n, max: r };
}
function Hp(e, t) {
  return {
    x: ml(e.x, t.x),
    y: ml(e.y, t.y)
  };
}
function Wp(e, t) {
  let n = 0.5;
  const r = Ge(e), o = Ge(t);
  return o > r ? n = Qn(t.min, t.max - r, e.min) : r > o && (n = Qn(e.min, e.max - o, t.min)), zt(0, 1, n);
}
function Up(e, t) {
  const n = {};
  return t.min !== void 0 && (n.min = t.min - e.min), t.max !== void 0 && (n.max = t.max - e.min), n;
}
const Da = 0.35;
function Gp(e = Da) {
  return e === !1 ? e = 0 : e === !0 && (e = Da), {
    x: vl(e, "left", "right"),
    y: vl(e, "top", "bottom")
  };
}
function vl(e, t, n) {
  return {
    min: gl(e, t),
    max: gl(e, n)
  };
}
function gl(e, t) {
  return typeof e == "number" ? e : e[t] || 0;
}
const wl = () => ({
  translate: 0,
  scale: 1,
  origin: 0,
  originPoint: 0
}), wn = () => ({
  x: wl(),
  y: wl()
}), yl = () => ({ min: 0, max: 0 }), we = () => ({
  x: yl(),
  y: yl()
});
function Xe(e) {
  return [e("x"), e("y")];
}
function q1({ top: e, left: t, right: n, bottom: r }) {
  return {
    x: { min: t, max: n },
    y: { min: e, max: r }
  };
}
function jp({ x: e, y: t }) {
  return { top: t.min, right: e.max, bottom: t.max, left: e.min };
}
function Kp(e, t) {
  if (!t)
    return e;
  const n = t({ x: e.left, y: e.top }), r = t({ x: e.right, y: e.bottom });
  return {
    top: n.y,
    left: n.x,
    bottom: r.y,
    right: r.x
  };
}
function Zo(e) {
  return e === void 0 || e === 1;
}
function ka({ scale: e, scaleX: t, scaleY: n }) {
  return !Zo(e) || !Zo(t) || !Zo(n);
}
function Xt(e) {
  return ka(e) || X1(e) || e.z || e.rotate || e.rotateX || e.rotateY || e.skewX || e.skewY;
}
function X1(e) {
  return xl(e.x) || xl(e.y);
}
function xl(e) {
  return e && e !== "0%";
}
function Gr(e, t, n) {
  const r = e - n, o = t * r;
  return n + o;
}
function bl(e, t, n, r, o) {
  return o !== void 0 && (e = Gr(e, o, r)), Gr(e, n, r) + t;
}
function Ea(e, t = 0, n = 1, r, o) {
  e.min = bl(e.min, t, n, r, o), e.max = bl(e.max, t, n, r, o);
}
function Z1(e, { x: t, y: n }) {
  Ea(e.x, t.translate, t.scale, t.originPoint), Ea(e.y, n.translate, n.scale, n.originPoint);
}
const Cl = 0.999999999999, Ml = 1.0000000000001;
function Yp(e, t, n, r = !1) {
  const o = n.length;
  if (!o)
    return;
  t.x = t.y = 1;
  let i, s;
  for (let l = 0; l < o; l++) {
    i = n[l], s = i.projectionDelta;
    const { visualElement: c } = i.options;
    c && c.props.style && c.props.style.display === "contents" || (r && i.options.layoutScroll && i.scroll && i !== i.root && xn(e, {
      x: -i.scroll.offset.x,
      y: -i.scroll.offset.y
    }), s && (t.x *= s.x.scale, t.y *= s.y.scale, Z1(e, s)), r && Xt(i.latestValues) && xn(e, i.latestValues));
  }
  t.x < Ml && t.x > Cl && (t.x = 1), t.y < Ml && t.y > Cl && (t.y = 1);
}
function yn(e, t) {
  e.min = e.min + t, e.max = e.max + t;
}
function Sl(e, t, n, r, o = 0.5) {
  const i = ve(e.min, e.max, o);
  Ea(e, t, n, i, r);
}
function xn(e, t) {
  Sl(e.x, t.x, t.scaleX, t.scale, t.originX), Sl(e.y, t.y, t.scaleY, t.scale, t.originY);
}
function Q1(e, t) {
  return q1(Kp(e.getBoundingClientRect(), t));
}
function qp(e, t, n) {
  const r = Q1(e, n), { scroll: o } = t;
  return o && (yn(r.x, o.offset.x), yn(r.y, o.offset.y)), r;
}
const J1 = ({ current: e }) => e ? e.ownerDocument.defaultView : null, Xp = /* @__PURE__ */ new WeakMap();
class Zp {
  constructor(t) {
    this.openGlobalLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = { x: 0, y: 0 }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = we(), this.visualElement = t;
  }
  start(t, { snapToCursor: n = !1 } = {}) {
    const { presenceContext: r } = this.visualElement;
    if (r && r.isPresent === !1)
      return;
    const o = (d) => {
      const { dragSnapToOrigin: f } = this.getProps();
      f ? this.pauseAnimation() : this.stopAnimation(), n && this.snapToCursor(xo(d, "page").point);
    }, i = (d, f) => {
      var p;
      const { drag: m, dragPropagation: v, onDragStart: g } = this.getProps();
      if (m && !v && (this.openGlobalLock && this.openGlobalLock(), this.openGlobalLock = G1(m), !this.openGlobalLock))
        return;
      this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), Xe((C) => {
        let y = this.getAxisMotionValue(C).get() || 0;
        if (vt.test(y)) {
          const { projection: M } = this.visualElement;
          if (M && M.layout) {
            const _ = M.layout.layoutBox[C];
            _ && (y = Ge(_) * (parseFloat(y) / 100));
          }
        }
        this.originPoint[C] = y;
      }), g && oe.postRender(() => g(d, f)), (p = this.removeWillChange) === null || p === void 0 || p.call(this), this.removeWillChange = Ta(this.visualElement, "transform");
      const { animationState: x } = this.visualElement;
      x && x.setActive("whileDrag", !0);
    }, s = (d, f) => {
      const { dragPropagation: p, dragDirectionLock: m, onDirectionLock: v, onDrag: g } = this.getProps();
      if (!p && !this.openGlobalLock)
        return;
      const { offset: x } = f;
      if (m && this.currentDirection === null) {
        this.currentDirection = Qp(x), this.currentDirection !== null && v && v(this.currentDirection);
        return;
      }
      this.updateAxis("x", f.point, x), this.updateAxis("y", f.point, x), this.visualElement.render(), g && g(d, f);
    }, l = (d, f) => this.stop(d, f), c = () => Xe((d) => {
      var f;
      return this.getAnimationState(d) === "paused" && ((f = this.getAxisMotionValue(d).animation) === null || f === void 0 ? void 0 : f.play());
    }), { dragSnapToOrigin: u } = this.getProps();
    this.panSession = new H1(t, {
      onSessionStart: o,
      onStart: i,
      onMove: s,
      onSessionEnd: l,
      resumeAnimation: c
    }, {
      transformPagePoint: this.visualElement.getTransformPagePoint(),
      dragSnapToOrigin: u,
      contextWindow: J1(this.visualElement)
    });
  }
  stop(t, n) {
    var r;
    (r = this.removeWillChange) === null || r === void 0 || r.call(this);
    const o = this.isDragging;
    if (this.cancel(), !o)
      return;
    const { velocity: i } = n;
    this.startAnimation(i);
    const { onDragEnd: s } = this.getProps();
    s && oe.postRender(() => s(t, n));
  }
  cancel() {
    this.isDragging = !1;
    const { projection: t, animationState: n } = this.visualElement;
    t && (t.isAnimationBlocked = !1), this.panSession && this.panSession.end(), this.panSession = void 0;
    const { dragPropagation: r } = this.getProps();
    !r && this.openGlobalLock && (this.openGlobalLock(), this.openGlobalLock = null), n && n.setActive("whileDrag", !1);
  }
  updateAxis(t, n, r) {
    const { drag: o } = this.getProps();
    if (!r || !Mr(t, o, this.currentDirection))
      return;
    const i = this.getAxisMotionValue(t);
    let s = this.originPoint[t] + r[t];
    this.constraints && this.constraints[t] && (s = $p(s, this.constraints[t], this.elastic[t])), i.set(s);
  }
  resolveConstraints() {
    var t;
    const { dragConstraints: n, dragElastic: r } = this.getProps(), o = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : (t = this.visualElement.projection) === null || t === void 0 ? void 0 : t.layout, i = this.constraints;
    n && gn(n) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : n && o ? this.constraints = zp(o.layoutBox, n) : this.constraints = !1, this.elastic = Gp(r), i !== this.constraints && o && this.constraints && !this.hasMutatedConstraints && Xe((s) => {
      this.constraints !== !1 && this.getAxisMotionValue(s) && (this.constraints[s] = Up(o.layoutBox[s], this.constraints[s]));
    });
  }
  resolveRefConstraints() {
    const { dragConstraints: t, onMeasureDragConstraints: n } = this.getProps();
    if (!t || !gn(t))
      return !1;
    const r = t.current;
    kt(r !== null, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.");
    const { projection: o } = this.visualElement;
    if (!o || !o.layout)
      return !1;
    const i = qp(r, o.root, this.visualElement.getTransformPagePoint());
    let s = Hp(o.layout.layoutBox, i);
    if (n) {
      const l = n(jp(s));
      this.hasMutatedConstraints = !!l, l && (s = q1(l));
    }
    return s;
  }
  startAnimation(t) {
    const { drag: n, dragMomentum: r, dragElastic: o, dragTransition: i, dragSnapToOrigin: s, onDragTransitionEnd: l } = this.getProps(), c = this.constraints || {}, u = Xe((d) => {
      if (!Mr(d, n, this.currentDirection))
        return;
      let f = c && c[d] || {};
      s && (f = { min: 0, max: 0 });
      const p = o ? 200 : 1e6, m = o ? 40 : 1e7, v = {
        type: "inertia",
        velocity: r ? t[d] : 0,
        bounceStiffness: p,
        bounceDamping: m,
        timeConstant: 750,
        restDelta: 1,
        restSpeed: 10,
        ...i,
        ...f
      };
      return this.startAxisValueAnimation(d, v);
    });
    return Promise.all(u).then(l);
  }
  startAxisValueAnimation(t, n) {
    const r = this.getAxisMotionValue(t);
    return r.start(bi(t, r, 0, n, this.visualElement, !1, Ta(this.visualElement, t)));
  }
  stopAnimation() {
    Xe((t) => this.getAxisMotionValue(t).stop());
  }
  pauseAnimation() {
    Xe((t) => {
      var n;
      return (n = this.getAxisMotionValue(t).animation) === null || n === void 0 ? void 0 : n.pause();
    });
  }
  getAnimationState(t) {
    var n;
    return (n = this.getAxisMotionValue(t).animation) === null || n === void 0 ? void 0 : n.state;
  }
  /**
   * Drag works differently depending on which props are provided.
   *
   * - If _dragX and _dragY are provided, we output the gesture delta directly to those motion values.
   * - Otherwise, we apply the delta to the x/y motion values.
   */
  getAxisMotionValue(t) {
    const n = `_drag${t.toUpperCase()}`, r = this.visualElement.getProps(), o = r[n];
    return o || this.visualElement.getValue(t, (r.initial ? r.initial[t] : void 0) || 0);
  }
  snapToCursor(t) {
    Xe((n) => {
      const { drag: r } = this.getProps();
      if (!Mr(n, r, this.currentDirection))
        return;
      const { projection: o } = this.visualElement, i = this.getAxisMotionValue(n);
      if (o && o.layout) {
        const { min: s, max: l } = o.layout.layoutBox[n];
        i.set(t[n] - ve(s, l, 0.5));
      }
    });
  }
  /**
   * When the viewport resizes we want to check if the measured constraints
   * have changed and, if so, reposition the element within those new constraints
   * relative to where it was before the resize.
   */
  scalePositionWithinConstraints() {
    if (!this.visualElement.current)
      return;
    const { drag: t, dragConstraints: n } = this.getProps(), { projection: r } = this.visualElement;
    if (!gn(n) || !r || !this.constraints)
      return;
    this.stopAnimation();
    const o = { x: 0, y: 0 };
    Xe((s) => {
      const l = this.getAxisMotionValue(s);
      if (l && this.constraints !== !1) {
        const c = l.get();
        o[s] = Wp({ min: c, max: c }, this.constraints[s]);
      }
    });
    const { transformTemplate: i } = this.visualElement.getProps();
    this.visualElement.current.style.transform = i ? i({}, "") : "none", r.root && r.root.updateScroll(), r.updateLayout(), this.resolveConstraints(), Xe((s) => {
      if (!Mr(s, t, null))
        return;
      const l = this.getAxisMotionValue(s), { min: c, max: u } = this.constraints[s];
      l.set(ve(c, u, o[s]));
    });
  }
  addListeners() {
    if (!this.visualElement.current)
      return;
    Xp.set(this.visualElement, this);
    const t = this.visualElement.current, n = Nt(t, "pointerdown", (c) => {
      const { drag: u, dragListener: d = !0 } = this.getProps();
      u && d && this.start(c);
    }), r = () => {
      const { dragConstraints: c } = this.getProps();
      gn(c) && c.current && (this.constraints = this.resolveRefConstraints());
    }, { projection: o } = this.visualElement, i = o.addEventListener("measure", r);
    o && !o.layout && (o.root && o.root.updateScroll(), o.updateLayout()), oe.read(r);
    const s = Rt(window, "resize", () => this.scalePositionWithinConstraints()), l = o.addEventListener("didUpdate", ({ delta: c, hasLayoutChanged: u }) => {
      this.isDragging && u && (Xe((d) => {
        const f = this.getAxisMotionValue(d);
        f && (this.originPoint[d] += c[d].translate, f.set(f.get() + c[d].translate));
      }), this.visualElement.render());
    });
    return () => {
      s(), n(), i(), l && l();
    };
  }
  getProps() {
    const t = this.visualElement.getProps(), { drag: n = !1, dragDirectionLock: r = !1, dragPropagation: o = !1, dragConstraints: i = !1, dragElastic: s = Da, dragMomentum: l = !0 } = t;
    return {
      ...t,
      drag: n,
      dragDirectionLock: r,
      dragPropagation: o,
      dragConstraints: i,
      dragElastic: s,
      dragMomentum: l
    };
  }
}
function Mr(e, t, n) {
  return (t === !0 || t === e) && (n === null || n === e);
}
function Qp(e, t = 10) {
  let n = null;
  return Math.abs(e.y) > t ? n = "y" : Math.abs(e.x) > t && (n = "x"), n;
}
class Jp extends Gt {
  constructor(t) {
    super(t), this.removeGroupControls = Pe, this.removeListeners = Pe, this.controls = new Zp(t);
  }
  mount() {
    const { dragControls: t } = this.node.getProps();
    t && (this.removeGroupControls = t.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || Pe;
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners();
  }
}
const Rl = (e) => (t, n) => {
  e && oe.postRender(() => e(t, n));
};
class em extends Gt {
  constructor() {
    super(...arguments), this.removePointerDownListener = Pe;
  }
  onPointerDown(t) {
    this.session = new H1(t, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: J1(this.node)
    });
  }
  createPanHandlers() {
    const { onPanSessionStart: t, onPanStart: n, onPan: r, onPanEnd: o } = this.node.getProps();
    return {
      onSessionStart: Rl(t),
      onStart: Rl(n),
      onMove: r,
      onEnd: (i, s) => {
        delete this.session, o && oe.postRender(() => o(i, s));
      }
    };
  }
  mount() {
    this.removePointerDownListener = Nt(this.node.current, "pointerdown", (t) => this.onPointerDown(t));
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener(), this.session && this.session.end();
  }
}
const bo = He(null);
function tm() {
  const e = fe(bo);
  if (e === null)
    return [!0, null];
  const { isPresent: t, onExitComplete: n, register: r } = e, o = fo();
  We(() => r(o), []);
  const i = rn(() => n && n(o), [o, n]);
  return !t && n ? [!1, i] : [!0];
}
const er = He({}), ec = He({}), Er = {
  /**
   * Global flag as to whether the tree has animated since the last time
   * we resized the window
   */
  hasAnimatedSinceResize: !0,
  /**
   * We set this to true once, on the first update. Any nodes added to the tree beyond that
   * update will be given a `data-projection-id` attribute.
   */
  hasEverUpdated: !1
};
function _l(e, t) {
  return t.max === t.min ? 0 : e / (t.max - t.min) * 100;
}
const On = {
  correct: (e, t) => {
    if (!t.target)
      return e;
    if (typeof e == "string")
      if (K.test(e))
        e = parseFloat(e);
      else
        return e;
    const n = _l(e, t.target.x), r = _l(e, t.target.y);
    return `${n}% ${r}%`;
  }
}, nm = {
  correct: (e, { treeScale: t, projectionDelta: n }) => {
    const r = e, o = Ht.parse(e);
    if (o.length > 5)
      return r;
    const i = Ht.createTransformer(e), s = typeof o[0] != "number" ? 1 : 0, l = n.x.scale * t.x, c = n.y.scale * t.y;
    o[0 + s] /= l, o[1 + s] /= c;
    const u = ve(l, c, 0.5);
    return typeof o[2 + s] == "number" && (o[2 + s] /= u), typeof o[3 + s] == "number" && (o[3 + s] /= u), i(o);
  }
}, jr = {};
function rm(e) {
  Object.assign(jr, e);
}
const { schedule: Mi, cancel: uA } = n1(queueMicrotask, !1);
class om extends xh {
  /**
   * This only mounts projection nodes for components that
   * need measuring, we might want to do it for all components
   * in order to incorporate transforms
   */
  componentDidMount() {
    const { visualElement: t, layoutGroup: n, switchLayoutGroup: r, layoutId: o } = this.props, { projection: i } = t;
    rm(am), i && (n.group && n.group.add(i), r && r.register && o && r.register(i), i.root.didUpdate(), i.addEventListener("animationComplete", () => {
      this.safeToRemove();
    }), i.setOptions({
      ...i.options,
      onExitComplete: () => this.safeToRemove()
    })), Er.hasEverUpdated = !0;
  }
  getSnapshotBeforeUpdate(t) {
    const { layoutDependency: n, visualElement: r, drag: o, isPresent: i } = this.props, s = r.projection;
    return s && (s.isPresent = i, o || t.layoutDependency !== n || n === void 0 ? s.willUpdate() : this.safeToRemove(), t.isPresent !== i && (i ? s.promote() : s.relegate() || oe.postRender(() => {
      const l = s.getStack();
      (!l || !l.members.length) && this.safeToRemove();
    }))), null;
  }
  componentDidUpdate() {
    const { projection: t } = this.props.visualElement;
    t && (t.root.didUpdate(), Mi.postRender(() => {
      !t.currentAnimation && t.isLead() && this.safeToRemove();
    }));
  }
  componentWillUnmount() {
    const { visualElement: t, layoutGroup: n, switchLayoutGroup: r } = this.props, { projection: o } = t;
    o && (o.scheduleCheckAfterUnmount(), n && n.group && n.group.remove(o), r && r.deregister && r.deregister(o));
  }
  safeToRemove() {
    const { safeToRemove: t } = this.props;
    t && t();
  }
  render() {
    return null;
  }
}
function tc(e) {
  const [t, n] = tm(), r = fe(er);
  return a(om, { ...e, layoutGroup: r, switchLayoutGroup: fe(ec), isPresent: t, safeToRemove: n });
}
const am = {
  borderRadius: {
    ...On,
    applyTo: [
      "borderTopLeftRadius",
      "borderTopRightRadius",
      "borderBottomLeftRadius",
      "borderBottomRightRadius"
    ]
  },
  borderTopLeftRadius: On,
  borderTopRightRadius: On,
  borderBottomLeftRadius: On,
  borderBottomRightRadius: On,
  boxShadow: nm
}, nc = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"], im = nc.length, Pl = (e) => typeof e == "string" ? parseFloat(e) : e, Al = (e) => typeof e == "number" || K.test(e);
function sm(e, t, n, r, o, i) {
  o ? (e.opacity = ve(
    0,
    // TODO Reinstate this if only child
    n.opacity !== void 0 ? n.opacity : 1,
    lm(r)
  ), e.opacityExit = ve(t.opacity !== void 0 ? t.opacity : 1, 0, cm(r))) : i && (e.opacity = ve(t.opacity !== void 0 ? t.opacity : 1, n.opacity !== void 0 ? n.opacity : 1, r));
  for (let s = 0; s < im; s++) {
    const l = `border${nc[s]}Radius`;
    let c = Tl(t, l), u = Tl(n, l);
    if (c === void 0 && u === void 0)
      continue;
    c || (c = 0), u || (u = 0), c === 0 || u === 0 || Al(c) === Al(u) ? (e[l] = Math.max(ve(Pl(c), Pl(u), r), 0), (vt.test(u) || vt.test(c)) && (e[l] += "%")) : e[l] = u;
  }
  (t.rotate || n.rotate) && (e.rotate = ve(t.rotate || 0, n.rotate || 0, r));
}
function Tl(e, t) {
  return e[t] !== void 0 ? e[t] : e.borderRadius;
}
const lm = /* @__PURE__ */ rc(0, 0.5, A1), cm = /* @__PURE__ */ rc(0.5, 0.95, Pe);
function rc(e, t, n) {
  return (r) => r < e ? 0 : r > t ? 1 : n(Qn(e, t, r));
}
function Nl(e, t) {
  e.min = t.min, e.max = t.max;
}
function Ye(e, t) {
  Nl(e.x, t.x), Nl(e.y, t.y);
}
function Dl(e, t) {
  e.translate = t.translate, e.scale = t.scale, e.originPoint = t.originPoint, e.origin = t.origin;
}
function kl(e, t, n, r, o) {
  return e -= t, e = Gr(e, 1 / n, r), o !== void 0 && (e = Gr(e, 1 / o, r)), e;
}
function um(e, t = 0, n = 1, r = 0.5, o, i = e, s = e) {
  if (vt.test(t) && (t = parseFloat(t), t = ve(s.min, s.max, t / 100) - s.min), typeof t != "number")
    return;
  let l = ve(i.min, i.max, r);
  e === i && (l -= t), e.min = kl(e.min, t, n, l, o), e.max = kl(e.max, t, n, l, o);
}
function El(e, t, [n, r, o], i, s) {
  um(e, t[n], t[r], t[o], t.scale, i, s);
}
const dm = ["x", "scaleX", "originX"], fm = ["y", "scaleY", "originY"];
function Fl(e, t, n, r) {
  El(e.x, t, dm, n ? n.x : void 0, r ? r.x : void 0), El(e.y, t, fm, n ? n.y : void 0, r ? r.y : void 0);
}
function Il(e) {
  return e.translate === 0 && e.scale === 1;
}
function oc(e) {
  return Il(e.x) && Il(e.y);
}
function Ol(e, t) {
  return e.min === t.min && e.max === t.max;
}
function hm(e, t) {
  return Ol(e.x, t.x) && Ol(e.y, t.y);
}
function Vl(e, t) {
  return Math.round(e.min) === Math.round(t.min) && Math.round(e.max) === Math.round(t.max);
}
function ac(e, t) {
  return Vl(e.x, t.x) && Vl(e.y, t.y);
}
function Bl(e) {
  return Ge(e.x) / Ge(e.y);
}
function Ll(e, t) {
  return e.translate === t.translate && e.scale === t.scale && e.originPoint === t.originPoint;
}
class pm {
  constructor() {
    this.members = [];
  }
  add(t) {
    go(this.members, t), t.scheduleRender();
  }
  remove(t) {
    if (wo(this.members, t), t === this.prevLead && (this.prevLead = void 0), t === this.lead) {
      const n = this.members[this.members.length - 1];
      n && this.promote(n);
    }
  }
  relegate(t) {
    const n = this.members.findIndex((o) => t === o);
    if (n === 0)
      return !1;
    let r;
    for (let o = n; o >= 0; o--) {
      const i = this.members[o];
      if (i.isPresent !== !1) {
        r = i;
        break;
      }
    }
    return r ? (this.promote(r), !0) : !1;
  }
  promote(t, n) {
    const r = this.lead;
    if (t !== r && (this.prevLead = r, this.lead = t, t.show(), r)) {
      r.instance && r.scheduleRender(), t.scheduleRender(), t.resumeFrom = r, n && (t.resumeFrom.preserveOpacity = !0), r.snapshot && (t.snapshot = r.snapshot, t.snapshot.latestValues = r.animationValues || r.latestValues), t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
      const { crossfade: o } = t.options;
      o === !1 && r.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach((t) => {
      const { options: n, resumingFrom: r } = t;
      n.onExitComplete && n.onExitComplete(), r && r.options.onExitComplete && r.options.onExitComplete();
    });
  }
  scheduleRender() {
    this.members.forEach((t) => {
      t.instance && t.scheduleRender(!1);
    });
  }
  /**
   * Clear any leads that have been removed this render to prevent them from being
   * used in future animations and to prevent memory leaks
   */
  removeLeadSnapshot() {
    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
  }
}
function mm(e, t, n) {
  let r = "";
  const o = e.x.translate / t.x, i = e.y.translate / t.y, s = (n == null ? void 0 : n.z) || 0;
  if ((o || i || s) && (r = `translate3d(${o}px, ${i}px, ${s}px) `), (t.x !== 1 || t.y !== 1) && (r += `scale(${1 / t.x}, ${1 / t.y}) `), n) {
    const { transformPerspective: u, rotate: d, rotateX: f, rotateY: p, skewX: m, skewY: v } = n;
    u && (r = `perspective(${u}px) ${r}`), d && (r += `rotate(${d}deg) `), f && (r += `rotateX(${f}deg) `), p && (r += `rotateY(${p}deg) `), m && (r += `skewX(${m}deg) `), v && (r += `skewY(${v}deg) `);
  }
  const l = e.x.scale * t.x, c = e.y.scale * t.y;
  return (l !== 1 || c !== 1) && (r += `scale(${l}, ${c})`), r || "none";
}
const vm = (e, t) => e.depth - t.depth;
class gm {
  constructor() {
    this.children = [], this.isDirty = !1;
  }
  add(t) {
    go(this.children, t), this.isDirty = !0;
  }
  remove(t) {
    wo(this.children, t), this.isDirty = !0;
  }
  forEach(t) {
    this.isDirty && this.children.sort(vm), this.isDirty = !1, this.children.forEach(t);
  }
}
function Fr(e) {
  const t = Te(e) ? e.get() : e;
  return cp(t) ? t.toValue() : t;
}
function wm(e, t) {
  const n = At.now(), r = ({ timestamp: o }) => {
    const i = o - n;
    i >= t && (Dt(r), e(i - t));
  };
  return oe.read(r, !0), () => Dt(r);
}
function ym(e) {
  return e instanceof SVGElement && e.tagName !== "svg";
}
function xm(e, t, n) {
  const r = Te(e) ? e : Jn(e);
  return r.start(bi("", r, t, n)), r.animation;
}
const Zt = {
  type: "projectionFrame",
  totalNodes: 0,
  resolvedTargetDeltas: 0,
  recalculatedProjection: 0
}, zn = typeof window < "u" && window.MotionDebug !== void 0, Qo = ["", "X", "Y", "Z"], bm = { visibility: "hidden" }, $l = 1e3;
let Cm = 0;
function Jo(e, t, n, r) {
  const { latestValues: o } = t;
  o[e] && (n[e] = o[e], t.setStaticValue(e, 0), r && (r[e] = 0));
}
function ic(e) {
  if (e.hasCheckedOptimisedAppear = !0, e.root === e)
    return;
  const { visualElement: t } = e.options;
  if (!t)
    return;
  const n = B1(t);
  if (window.MotionHasOptimisedAnimation(n, "transform")) {
    const { layout: o, layoutId: i } = e.options;
    window.MotionCancelOptimisedAnimation(n, "transform", oe, !(o || i));
  }
  const { parent: r } = e;
  r && !r.hasCheckedOptimisedAppear && ic(r);
}
function sc({ attachResizeListener: e, defaultParent: t, measureScroll: n, checkIsScrollRoot: r, resetTransform: o }) {
  return class {
    constructor(s = {}, l = t == null ? void 0 : t()) {
      this.id = Cm++, this.animationId = 0, this.children = /* @__PURE__ */ new Set(), this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.hasCheckedOptimisedAppear = !1, this.treeScale = { x: 1, y: 1 }, this.eventHandlers = /* @__PURE__ */ new Map(), this.hasTreeAnimated = !1, this.updateScheduled = !1, this.scheduleUpdate = () => this.update(), this.projectionUpdateScheduled = !1, this.checkUpdateFailed = () => {
        this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots());
      }, this.updateProjection = () => {
        this.projectionUpdateScheduled = !1, zn && (Zt.totalNodes = Zt.resolvedTargetDeltas = Zt.recalculatedProjection = 0), this.nodes.forEach(Rm), this.nodes.forEach(Nm), this.nodes.forEach(Dm), this.nodes.forEach(_m), zn && window.MotionDebug.record(Zt);
      }, this.resolvedRelativeTargetAt = 0, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = /* @__PURE__ */ new Map(), this.latestValues = s, this.root = l ? l.root || l : this, this.path = l ? [...l.path, l] : [], this.parent = l, this.depth = l ? l.depth + 1 : 0;
      for (let c = 0; c < this.path.length; c++)
        this.path[c].shouldResetTransform = !0;
      this.root === this && (this.nodes = new gm());
    }
    addEventListener(s, l) {
      return this.eventHandlers.has(s) || this.eventHandlers.set(s, new Ci()), this.eventHandlers.get(s).add(l);
    }
    notifyListeners(s, ...l) {
      const c = this.eventHandlers.get(s);
      c && c.notify(...l);
    }
    hasListeners(s) {
      return this.eventHandlers.has(s);
    }
    /**
     * Lifecycles
     */
    mount(s, l = this.root.hasTreeAnimated) {
      if (this.instance)
        return;
      this.isSVG = ym(s), this.instance = s;
      const { layoutId: c, layout: u, visualElement: d } = this.options;
      if (d && !d.current && d.mount(s), this.root.nodes.add(this), this.parent && this.parent.children.add(this), l && (u || c) && (this.isLayoutDirty = !0), e) {
        let f;
        const p = () => this.root.updateBlockedByResize = !1;
        e(s, () => {
          this.root.updateBlockedByResize = !0, f && f(), f = wm(p, 250), Er.hasAnimatedSinceResize && (Er.hasAnimatedSinceResize = !1, this.nodes.forEach(Hl));
        });
      }
      c && this.root.registerSharedNode(c, this), this.options.animate !== !1 && d && (c || u) && this.addEventListener("didUpdate", ({ delta: f, hasLayoutChanged: p, hasRelativeTargetChanged: m, layout: v }) => {
        if (this.isTreeAnimationBlocked()) {
          this.target = void 0, this.relativeTarget = void 0;
          return;
        }
        const g = this.options.transition || d.getDefaultTransition() || Om, { onLayoutAnimationStart: x, onLayoutAnimationComplete: C } = d.getProps(), y = !this.targetLayout || !ac(this.targetLayout, v) || m, M = !p && m;
        if (this.options.layoutRoot || this.resumeFrom && this.resumeFrom.instance || M || p && (y || !this.currentAnimation)) {
          this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0), this.setAnimationOrigin(f, M);
          const _ = {
            ...ci(g, "layout"),
            onPlay: x,
            onComplete: C
          };
          (d.shouldReduceMotion || this.options.layoutRoot) && (_.delay = 0, _.type = !1), this.startAnimation(_);
        } else
          p || Hl(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
        this.targetLayout = v;
      });
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      const s = this.getStack();
      s && s.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, Dt(this.updateProjection);
    }
    // only on the root
    blockUpdate() {
      this.updateManuallyBlocked = !0;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1;
    }
    // Note: currently only running on root node
    startUpdate() {
      this.isUpdateBlocked() || (this.isUpdating = !0, this.nodes && this.nodes.forEach(km), this.animationId++);
    }
    getTransformTemplate() {
      const { visualElement: s } = this.options;
      return s && s.getProps().transformTemplate;
    }
    willUpdate(s = !0) {
      if (this.root.hasTreeAnimated = !0, this.root.isUpdateBlocked()) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && ic(this), !this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty)
        return;
      this.isLayoutDirty = !0;
      for (let d = 0; d < this.path.length; d++) {
        const f = this.path[d];
        f.shouldResetTransform = !0, f.updateScroll("snapshot"), f.options.layoutRoot && f.willUpdate(!1);
      }
      const { layoutId: l, layout: c } = this.options;
      if (l === void 0 && !c)
        return;
      const u = this.getTransformTemplate();
      this.prevTransformTemplateValue = u ? u(this.latestValues, "") : void 0, this.updateSnapshot(), s && this.notifyListeners("willUpdate");
    }
    update() {
      if (this.updateScheduled = !1, this.isUpdateBlocked()) {
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(zl);
        return;
      }
      this.isUpdating || this.nodes.forEach(Am), this.isUpdating = !1, this.nodes.forEach(Tm), this.nodes.forEach(Mm), this.nodes.forEach(Sm), this.clearAllSnapshots();
      const l = At.now();
      _e.delta = zt(0, 1e3 / 60, l - _e.timestamp), _e.timestamp = l, _e.isProcessing = !0, Uo.update.process(_e), Uo.preRender.process(_e), Uo.render.process(_e), _e.isProcessing = !1;
    }
    didUpdate() {
      this.updateScheduled || (this.updateScheduled = !0, Mi.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      this.nodes.forEach(Pm), this.sharedNodes.forEach(Em);
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0, oe.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      oe.postRender(() => {
        this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed();
      });
    }
    /**
     * Update measurements
     */
    updateSnapshot() {
      this.snapshot || !this.instance || (this.snapshot = this.measure());
    }
    updateLayout() {
      if (!this.instance || (this.updateScroll(), !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty))
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let c = 0; c < this.path.length; c++)
          this.path[c].updateScroll();
      const s = this.layout;
      this.layout = this.measure(!1), this.layoutCorrected = we(), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
      const { visualElement: l } = this.options;
      l && l.notify("LayoutMeasure", this.layout.layoutBox, s ? s.layoutBox : void 0);
    }
    updateScroll(s = "measure") {
      let l = !!(this.options.layoutScroll && this.instance);
      if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === s && (l = !1), l) {
        const c = r(this.instance);
        this.scroll = {
          animationId: this.root.animationId,
          phase: s,
          isRoot: c,
          offset: n(this.instance),
          wasRoot: this.scroll ? this.scroll.isRoot : c
        };
      }
    }
    resetTransform() {
      if (!o)
        return;
      const s = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout, l = this.projectionDelta && !oc(this.projectionDelta), c = this.getTransformTemplate(), u = c ? c(this.latestValues, "") : void 0, d = u !== this.prevTransformTemplateValue;
      s && (l || Xt(this.latestValues) || d) && (o(this.instance, u), this.shouldResetTransform = !1, this.scheduleRender());
    }
    measure(s = !0) {
      const l = this.measurePageBox();
      let c = this.removeElementScroll(l);
      return s && (c = this.removeTransform(c)), Vm(c), {
        animationId: this.root.animationId,
        measuredBox: l,
        layoutBox: c,
        latestValues: {},
        source: this.id
      };
    }
    measurePageBox() {
      var s;
      const { visualElement: l } = this.options;
      if (!l)
        return we();
      const c = l.measureViewportBox();
      if (!(((s = this.scroll) === null || s === void 0 ? void 0 : s.wasRoot) || this.path.some(Bm))) {
        const { scroll: d } = this.root;
        d && (yn(c.x, d.offset.x), yn(c.y, d.offset.y));
      }
      return c;
    }
    removeElementScroll(s) {
      var l;
      const c = we();
      if (Ye(c, s), !((l = this.scroll) === null || l === void 0) && l.wasRoot)
        return c;
      for (let u = 0; u < this.path.length; u++) {
        const d = this.path[u], { scroll: f, options: p } = d;
        d !== this.root && f && p.layoutScroll && (f.wasRoot && Ye(c, s), yn(c.x, f.offset.x), yn(c.y, f.offset.y));
      }
      return c;
    }
    applyTransform(s, l = !1) {
      const c = we();
      Ye(c, s);
      for (let u = 0; u < this.path.length; u++) {
        const d = this.path[u];
        !l && d.options.layoutScroll && d.scroll && d !== d.root && xn(c, {
          x: -d.scroll.offset.x,
          y: -d.scroll.offset.y
        }), Xt(d.latestValues) && xn(c, d.latestValues);
      }
      return Xt(this.latestValues) && xn(c, this.latestValues), c;
    }
    removeTransform(s) {
      const l = we();
      Ye(l, s);
      for (let c = 0; c < this.path.length; c++) {
        const u = this.path[c];
        if (!u.instance || !Xt(u.latestValues))
          continue;
        ka(u.latestValues) && u.updateSnapshot();
        const d = we(), f = u.measurePageBox();
        Ye(d, f), Fl(l, u.latestValues, u.snapshot ? u.snapshot.layoutBox : void 0, d);
      }
      return Xt(this.latestValues) && Fl(l, this.latestValues), l;
    }
    setTargetDelta(s) {
      this.targetDelta = s, this.root.scheduleUpdateProjection(), this.isProjectionDirty = !0;
    }
    setOptions(s) {
      this.options = {
        ...this.options,
        ...s,
        crossfade: s.crossfade !== void 0 ? s.crossfade : !0
      };
    }
    clearMeasurements() {
      this.scroll = void 0, this.layout = void 0, this.snapshot = void 0, this.prevTransformTemplateValue = void 0, this.targetDelta = void 0, this.target = void 0, this.isLayoutDirty = !1;
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== _e.timestamp && this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(s = !1) {
      var l;
      const c = this.getLead();
      this.isProjectionDirty || (this.isProjectionDirty = c.isProjectionDirty), this.isTransformDirty || (this.isTransformDirty = c.isTransformDirty), this.isSharedProjectionDirty || (this.isSharedProjectionDirty = c.isSharedProjectionDirty);
      const u = !!this.resumingFrom || this !== c;
      if (!(s || u && this.isSharedProjectionDirty || this.isProjectionDirty || !((l = this.parent) === null || l === void 0) && l.isProjectionDirty || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize))
        return;
      const { layout: f, layoutId: p } = this.options;
      if (!(!this.layout || !(f || p))) {
        if (this.resolvedRelativeTargetAt = _e.timestamp, !this.targetDelta && !this.relativeTarget) {
          const m = this.getClosestProjectingParent();
          m && m.layout && this.animationProgress !== 1 ? (this.relativeParent = m, this.forceRelativeParentToResolveTarget(), this.relativeTarget = we(), this.relativeTargetOrigin = we(), Kn(this.relativeTargetOrigin, this.layout.layoutBox, m.layout.layoutBox), Ye(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
        }
        if (!(!this.relativeTarget && !this.targetDelta)) {
          if (this.target || (this.target = we(), this.targetWithTransforms = we()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), Lp(this.target, this.relativeTarget, this.relativeParent.target)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : Ye(this.target, this.layout.layoutBox), Z1(this.target, this.targetDelta)) : Ye(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget) {
            this.attemptToResolveRelativeTarget = !1;
            const m = this.getClosestProjectingParent();
            m && !!m.resumingFrom == !!this.resumingFrom && !m.options.layoutScroll && m.target && this.animationProgress !== 1 ? (this.relativeParent = m, this.forceRelativeParentToResolveTarget(), this.relativeTarget = we(), this.relativeTargetOrigin = we(), Kn(this.relativeTargetOrigin, this.target, m.target), Ye(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
          }
          zn && Zt.resolvedTargetDeltas++;
        }
      }
    }
    getClosestProjectingParent() {
      if (!(!this.parent || ka(this.parent.latestValues) || X1(this.parent.latestValues)))
        return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout);
    }
    calcProjection() {
      var s;
      const l = this.getLead(), c = !!this.resumingFrom || this !== l;
      let u = !0;
      if ((this.isProjectionDirty || !((s = this.parent) === null || s === void 0) && s.isProjectionDirty) && (u = !1), c && (this.isSharedProjectionDirty || this.isTransformDirty) && (u = !1), this.resolvedRelativeTargetAt === _e.timestamp && (u = !1), u)
        return;
      const { layout: d, layoutId: f } = this.options;
      if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(d || f))
        return;
      Ye(this.layoutCorrected, this.layout.layoutBox);
      const p = this.treeScale.x, m = this.treeScale.y;
      Yp(this.layoutCorrected, this.treeScale, this.path, c), l.layout && !l.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (l.target = l.layout.layoutBox, l.targetWithTransforms = we());
      const { target: v } = l;
      if (!v) {
        this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      !this.projectionDelta || !this.prevProjectionDelta ? this.createProjectionDeltas() : (Dl(this.prevProjectionDelta.x, this.projectionDelta.x), Dl(this.prevProjectionDelta.y, this.projectionDelta.y)), jn(this.projectionDelta, this.layoutCorrected, v, this.latestValues), (this.treeScale.x !== p || this.treeScale.y !== m || !Ll(this.projectionDelta.x, this.prevProjectionDelta.x) || !Ll(this.projectionDelta.y, this.prevProjectionDelta.y)) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", v)), zn && Zt.recalculatedProjection++;
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(s = !0) {
      var l;
      if ((l = this.options.visualElement) === null || l === void 0 || l.scheduleRender(), s) {
        const c = this.getStack();
        c && c.scheduleRender();
      }
      this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0);
    }
    createProjectionDeltas() {
      this.prevProjectionDelta = wn(), this.projectionDelta = wn(), this.projectionDeltaWithTransform = wn();
    }
    setAnimationOrigin(s, l = !1) {
      const c = this.snapshot, u = c ? c.latestValues : {}, d = { ...this.latestValues }, f = wn();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !l;
      const p = we(), m = c ? c.source : void 0, v = this.layout ? this.layout.source : void 0, g = m !== v, x = this.getStack(), C = !x || x.members.length <= 1, y = !!(g && !C && this.options.crossfade === !0 && !this.path.some(Im));
      this.animationProgress = 0;
      let M;
      this.mixTargetDelta = (_) => {
        const P = _ / 1e3;
        Wl(f.x, s.x, P), Wl(f.y, s.y, P), this.setTargetDelta(f), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (Kn(p, this.layout.layoutBox, this.relativeParent.layout.layoutBox), Fm(this.relativeTarget, this.relativeTargetOrigin, p, P), M && hm(this.relativeTarget, M) && (this.isProjectionDirty = !1), M || (M = we()), Ye(M, this.relativeTarget)), g && (this.animationValues = d, sm(d, u, this.latestValues, P, y, C)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = P;
      }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(s) {
      this.notifyListeners("animationStart"), this.currentAnimation && this.currentAnimation.stop(), this.resumingFrom && this.resumingFrom.currentAnimation && this.resumingFrom.currentAnimation.stop(), this.pendingAnimation && (Dt(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = oe.update(() => {
        Er.hasAnimatedSinceResize = !0, this.currentAnimation = xm(0, $l, {
          ...s,
          onUpdate: (l) => {
            this.mixTargetDelta(l), s.onUpdate && s.onUpdate(l);
          },
          onComplete: () => {
            s.onComplete && s.onComplete(), this.completeAnimation();
          }
        }), this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation), this.pendingAnimation = void 0;
      });
    }
    completeAnimation() {
      this.resumingFrom && (this.resumingFrom.currentAnimation = void 0, this.resumingFrom.preserveOpacity = void 0);
      const s = this.getStack();
      s && s.exitAnimationComplete(), this.resumingFrom = this.currentAnimation = this.animationValues = void 0, this.notifyListeners("animationComplete");
    }
    finishAnimation() {
      this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta($l), this.currentAnimation.stop()), this.completeAnimation();
    }
    applyTransformsToTarget() {
      const s = this.getLead();
      let { targetWithTransforms: l, target: c, layout: u, latestValues: d } = s;
      if (!(!l || !c || !u)) {
        if (this !== s && this.layout && u && lc(this.options.animationType, this.layout.layoutBox, u.layoutBox)) {
          c = this.target || we();
          const f = Ge(this.layout.layoutBox.x);
          c.x.min = s.target.x.min, c.x.max = c.x.min + f;
          const p = Ge(this.layout.layoutBox.y);
          c.y.min = s.target.y.min, c.y.max = c.y.min + p;
        }
        Ye(l, c), xn(l, d), jn(this.projectionDeltaWithTransform, this.layoutCorrected, l, d);
      }
    }
    registerSharedNode(s, l) {
      this.sharedNodes.has(s) || this.sharedNodes.set(s, new pm()), this.sharedNodes.get(s).add(l);
      const u = l.options.initialPromotionConfig;
      l.promote({
        transition: u ? u.transition : void 0,
        preserveFollowOpacity: u && u.shouldPreserveFollowOpacity ? u.shouldPreserveFollowOpacity(l) : void 0
      });
    }
    isLead() {
      const s = this.getStack();
      return s ? s.lead === this : !0;
    }
    getLead() {
      var s;
      const { layoutId: l } = this.options;
      return l ? ((s = this.getStack()) === null || s === void 0 ? void 0 : s.lead) || this : this;
    }
    getPrevLead() {
      var s;
      const { layoutId: l } = this.options;
      return l ? (s = this.getStack()) === null || s === void 0 ? void 0 : s.prevLead : void 0;
    }
    getStack() {
      const { layoutId: s } = this.options;
      if (s)
        return this.root.sharedNodes.get(s);
    }
    promote({ needsReset: s, transition: l, preserveFollowOpacity: c } = {}) {
      const u = this.getStack();
      u && u.promote(this, c), s && (this.projectionDelta = void 0, this.needsReset = !0), l && this.setOptions({ transition: l });
    }
    relegate() {
      const s = this.getStack();
      return s ? s.relegate(this) : !1;
    }
    resetSkewAndRotation() {
      const { visualElement: s } = this.options;
      if (!s)
        return;
      let l = !1;
      const { latestValues: c } = s;
      if ((c.z || c.rotate || c.rotateX || c.rotateY || c.rotateZ || c.skewX || c.skewY) && (l = !0), !l)
        return;
      const u = {};
      c.z && Jo("z", s, u, this.animationValues);
      for (let d = 0; d < Qo.length; d++)
        Jo(`rotate${Qo[d]}`, s, u, this.animationValues), Jo(`skew${Qo[d]}`, s, u, this.animationValues);
      s.render();
      for (const d in u)
        s.setStaticValue(d, u[d]), this.animationValues && (this.animationValues[d] = u[d]);
      s.scheduleRender();
    }
    getProjectionStyles(s) {
      var l, c;
      if (!this.instance || this.isSVG)
        return;
      if (!this.isVisible)
        return bm;
      const u = {
        visibility: ""
      }, d = this.getTransformTemplate();
      if (this.needsReset)
        return this.needsReset = !1, u.opacity = "", u.pointerEvents = Fr(s == null ? void 0 : s.pointerEvents) || "", u.transform = d ? d(this.latestValues, "") : "none", u;
      const f = this.getLead();
      if (!this.projectionDelta || !this.layout || !f.target) {
        const g = {};
        return this.options.layoutId && (g.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1, g.pointerEvents = Fr(s == null ? void 0 : s.pointerEvents) || ""), this.hasProjected && !Xt(this.latestValues) && (g.transform = d ? d({}, "") : "none", this.hasProjected = !1), g;
      }
      const p = f.animationValues || f.latestValues;
      this.applyTransformsToTarget(), u.transform = mm(this.projectionDeltaWithTransform, this.treeScale, p), d && (u.transform = d(p, u.transform));
      const { x: m, y: v } = this.projectionDelta;
      u.transformOrigin = `${m.origin * 100}% ${v.origin * 100}% 0`, f.animationValues ? u.opacity = f === this ? (c = (l = p.opacity) !== null && l !== void 0 ? l : this.latestValues.opacity) !== null && c !== void 0 ? c : 1 : this.preserveOpacity ? this.latestValues.opacity : p.opacityExit : u.opacity = f === this ? p.opacity !== void 0 ? p.opacity : "" : p.opacityExit !== void 0 ? p.opacityExit : 0;
      for (const g in jr) {
        if (p[g] === void 0)
          continue;
        const { correct: x, applyTo: C } = jr[g], y = u.transform === "none" ? p[g] : x(p[g], f);
        if (C) {
          const M = C.length;
          for (let _ = 0; _ < M; _++)
            u[C[_]] = y;
        } else
          u[g] = y;
      }
      return this.options.layoutId && (u.pointerEvents = f === this ? Fr(s == null ? void 0 : s.pointerEvents) || "" : "none"), u;
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    // Only run on root
    resetTree() {
      this.root.nodes.forEach((s) => {
        var l;
        return (l = s.currentAnimation) === null || l === void 0 ? void 0 : l.stop();
      }), this.root.nodes.forEach(zl), this.root.sharedNodes.clear();
    }
  };
}
function Mm(e) {
  e.updateLayout();
}
function Sm(e) {
  var t;
  const n = ((t = e.resumeFrom) === null || t === void 0 ? void 0 : t.snapshot) || e.snapshot;
  if (e.isLead() && e.layout && n && e.hasListeners("didUpdate")) {
    const { layoutBox: r, measuredBox: o } = e.layout, { animationType: i } = e.options, s = n.source !== e.layout.source;
    i === "size" ? Xe((f) => {
      const p = s ? n.measuredBox[f] : n.layoutBox[f], m = Ge(p);
      p.min = r[f].min, p.max = p.min + m;
    }) : lc(i, n.layoutBox, r) && Xe((f) => {
      const p = s ? n.measuredBox[f] : n.layoutBox[f], m = Ge(r[f]);
      p.max = p.min + m, e.relativeTarget && !e.currentAnimation && (e.isProjectionDirty = !0, e.relativeTarget[f].max = e.relativeTarget[f].min + m);
    });
    const l = wn();
    jn(l, r, n.layoutBox);
    const c = wn();
    s ? jn(c, e.applyTransform(o, !0), n.measuredBox) : jn(c, r, n.layoutBox);
    const u = !oc(l);
    let d = !1;
    if (!e.resumeFrom) {
      const f = e.getClosestProjectingParent();
      if (f && !f.resumeFrom) {
        const { snapshot: p, layout: m } = f;
        if (p && m) {
          const v = we();
          Kn(v, n.layoutBox, p.layoutBox);
          const g = we();
          Kn(g, r, m.layoutBox), ac(v, g) || (d = !0), f.options.layoutRoot && (e.relativeTarget = g, e.relativeTargetOrigin = v, e.relativeParent = f);
        }
      }
    }
    e.notifyListeners("didUpdate", {
      layout: r,
      snapshot: n,
      delta: c,
      layoutDelta: l,
      hasLayoutChanged: u,
      hasRelativeTargetChanged: d
    });
  } else if (e.isLead()) {
    const { onExitComplete: r } = e.options;
    r && r();
  }
  e.options.transition = void 0;
}
function Rm(e) {
  zn && Zt.totalNodes++, e.parent && (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty), e.isSharedProjectionDirty || (e.isSharedProjectionDirty = !!(e.isProjectionDirty || e.parent.isProjectionDirty || e.parent.isSharedProjectionDirty)), e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty));
}
function _m(e) {
  e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
}
function Pm(e) {
  e.clearSnapshot();
}
function zl(e) {
  e.clearMeasurements();
}
function Am(e) {
  e.isLayoutDirty = !1;
}
function Tm(e) {
  const { visualElement: t } = e.options;
  t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"), e.resetTransform();
}
function Hl(e) {
  e.finishAnimation(), e.targetDelta = e.relativeTarget = e.target = void 0, e.isProjectionDirty = !0;
}
function Nm(e) {
  e.resolveTargetDelta();
}
function Dm(e) {
  e.calcProjection();
}
function km(e) {
  e.resetSkewAndRotation();
}
function Em(e) {
  e.removeLeadSnapshot();
}
function Wl(e, t, n) {
  e.translate = ve(t.translate, 0, n), e.scale = ve(t.scale, 1, n), e.origin = t.origin, e.originPoint = t.originPoint;
}
function Ul(e, t, n, r) {
  e.min = ve(t.min, n.min, r), e.max = ve(t.max, n.max, r);
}
function Fm(e, t, n, r) {
  Ul(e.x, t.x, n.x, r), Ul(e.y, t.y, n.y, r);
}
function Im(e) {
  return e.animationValues && e.animationValues.opacityExit !== void 0;
}
const Om = {
  duration: 0.45,
  ease: [0.4, 0, 0.1, 1]
}, Gl = (e) => typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(e), jl = Gl("applewebkit/") && !Gl("chrome/") ? Math.round : Pe;
function Kl(e) {
  e.min = jl(e.min), e.max = jl(e.max);
}
function Vm(e) {
  Kl(e.x), Kl(e.y);
}
function lc(e, t, n) {
  return e === "position" || e === "preserve-aspect" && !Bp(Bl(t), Bl(n), 0.2);
}
function Bm(e) {
  var t;
  return e !== e.root && ((t = e.scroll) === null || t === void 0 ? void 0 : t.wasRoot);
}
const Lm = sc({
  attachResizeListener: (e, t) => Rt(e, "resize", t),
  measureScroll: () => ({
    x: document.documentElement.scrollLeft || document.body.scrollLeft,
    y: document.documentElement.scrollTop || document.body.scrollTop
  }),
  checkIsScrollRoot: () => !0
}), ea = {
  current: void 0
}, cc = sc({
  measureScroll: (e) => ({
    x: e.scrollLeft,
    y: e.scrollTop
  }),
  defaultParent: () => {
    if (!ea.current) {
      const e = new Lm({});
      e.mount(window), e.setOptions({ layoutScroll: !0 }), ea.current = e;
    }
    return ea.current;
  },
  resetTransform: (e, t) => {
    e.style.transform = t !== void 0 ? t : "none";
  },
  checkIsScrollRoot: (e) => window.getComputedStyle(e).position === "fixed"
}), $m = {
  pan: {
    Feature: em
  },
  drag: {
    Feature: Jp,
    ProjectionNode: cc,
    MeasureLayout: tc
  }
};
function Yl(e, t) {
  const n = t ? "pointerenter" : "pointerleave", r = t ? "onHoverStart" : "onHoverEnd", o = (i, s) => {
    if (i.pointerType === "touch" || j1())
      return;
    const l = e.getProps();
    e.animationState && l.whileHover && e.animationState.setActive("whileHover", t);
    const c = l[r];
    c && oe.postRender(() => c(i, s));
  };
  return Nt(e.current, n, o, {
    passive: !e.getProps()[r]
  });
}
class zm extends Gt {
  mount() {
    this.unmount = Tt(Yl(this.node, !0), Yl(this.node, !1));
  }
  unmount() {
  }
}
class Hm extends Gt {
  constructor() {
    super(...arguments), this.isActive = !1;
  }
  onFocus() {
    let t = !1;
    try {
      t = this.node.current.matches(":focus-visible");
    } catch {
      t = !0;
    }
    !t || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !0), this.isActive = !0);
  }
  onBlur() {
    !this.isActive || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !1), this.isActive = !1);
  }
  mount() {
    this.unmount = Tt(Rt(this.node.current, "focus", () => this.onFocus()), Rt(this.node.current, "blur", () => this.onBlur()));
  }
  unmount() {
  }
}
const uc = (e, t) => t ? e === t ? !0 : uc(e, t.parentElement) : !1;
function ta(e, t) {
  if (!t)
    return;
  const n = new PointerEvent("pointer" + e);
  t(n, xo(n));
}
class Wm extends Gt {
  constructor() {
    super(...arguments), this.removeStartListeners = Pe, this.removeEndListeners = Pe, this.removeAccessibleListeners = Pe, this.startPointerPress = (t, n) => {
      if (this.isPressing)
        return;
      this.removeEndListeners();
      const r = this.node.getProps(), i = Nt(window, "pointerup", (l, c) => {
        if (!this.checkPressEnd())
          return;
        const { onTap: u, onTapCancel: d, globalTapTarget: f } = this.node.getProps(), p = !f && !uc(this.node.current, l.target) ? d : u;
        p && oe.update(() => p(l, c));
      }, {
        passive: !(r.onTap || r.onPointerUp)
      }), s = Nt(window, "pointercancel", (l, c) => this.cancelPress(l, c), {
        passive: !(r.onTapCancel || r.onPointerCancel)
      });
      this.removeEndListeners = Tt(i, s), this.startPress(t, n);
    }, this.startAccessiblePress = () => {
      const t = (i) => {
        if (i.key !== "Enter" || this.isPressing)
          return;
        const s = (l) => {
          l.key !== "Enter" || !this.checkPressEnd() || ta("up", (c, u) => {
            const { onTap: d } = this.node.getProps();
            d && oe.postRender(() => d(c, u));
          });
        };
        this.removeEndListeners(), this.removeEndListeners = Rt(this.node.current, "keyup", s), ta("down", (l, c) => {
          this.startPress(l, c);
        });
      }, n = Rt(this.node.current, "keydown", t), r = () => {
        this.isPressing && ta("cancel", (i, s) => this.cancelPress(i, s));
      }, o = Rt(this.node.current, "blur", r);
      this.removeAccessibleListeners = Tt(n, o);
    };
  }
  startPress(t, n) {
    this.isPressing = !0;
    const { onTapStart: r, whileTap: o } = this.node.getProps();
    o && this.node.animationState && this.node.animationState.setActive("whileTap", !0), r && oe.postRender(() => r(t, n));
  }
  checkPressEnd() {
    return this.removeEndListeners(), this.isPressing = !1, this.node.getProps().whileTap && this.node.animationState && this.node.animationState.setActive("whileTap", !1), !j1();
  }
  cancelPress(t, n) {
    if (!this.checkPressEnd())
      return;
    const { onTapCancel: r } = this.node.getProps();
    r && oe.postRender(() => r(t, n));
  }
  mount() {
    const t = this.node.getProps(), n = Nt(t.globalTapTarget ? window : this.node.current, "pointerdown", this.startPointerPress, {
      passive: !(t.onTapStart || t.onPointerStart)
    }), r = Rt(this.node.current, "focus", this.startAccessiblePress);
    this.removeStartListeners = Tt(n, r);
  }
  unmount() {
    this.removeStartListeners(), this.removeEndListeners(), this.removeAccessibleListeners();
  }
}
const Fa = /* @__PURE__ */ new WeakMap(), na = /* @__PURE__ */ new WeakMap(), Um = (e) => {
  const t = Fa.get(e.target);
  t && t(e);
}, Gm = (e) => {
  e.forEach(Um);
};
function jm({ root: e, ...t }) {
  const n = e || document;
  na.has(n) || na.set(n, {});
  const r = na.get(n), o = JSON.stringify(t);
  return r[o] || (r[o] = new IntersectionObserver(Gm, { root: e, ...t })), r[o];
}
function Km(e, t, n) {
  const r = jm(t);
  return Fa.set(e, n), r.observe(e), () => {
    Fa.delete(e), r.unobserve(e);
  };
}
const Ym = {
  some: 0,
  all: 1
};
class qm extends Gt {
  constructor() {
    super(...arguments), this.hasEnteredView = !1, this.isInView = !1;
  }
  startObserver() {
    this.unmount();
    const { viewport: t = {} } = this.node.getProps(), { root: n, margin: r, amount: o = "some", once: i } = t, s = {
      root: n ? n.current : void 0,
      rootMargin: r,
      threshold: typeof o == "number" ? o : Ym[o]
    }, l = (c) => {
      const { isIntersecting: u } = c;
      if (this.isInView === u || (this.isInView = u, i && !u && this.hasEnteredView))
        return;
      u && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", u);
      const { onViewportEnter: d, onViewportLeave: f } = this.node.getProps(), p = u ? d : f;
      p && p(c);
    };
    return Km(this.node.current, s, l);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u")
      return;
    const { props: t, prevProps: n } = this.node;
    ["amount", "margin", "root"].some(Xm(t, n)) && this.startObserver();
  }
  unmount() {
  }
}
function Xm({ viewport: e = {} }, { viewport: t = {} } = {}) {
  return (n) => e[n] !== t[n];
}
const Zm = {
  inView: {
    Feature: qm
  },
  tap: {
    Feature: Wm
  },
  focus: {
    Feature: Hm
  },
  hover: {
    Feature: zm
  }
}, Qm = {
  layout: {
    ProjectionNode: cc,
    MeasureLayout: tc
  }
}, Co = He({}), Si = typeof window < "u", Ri = Si ? X0 : We, dc = He({ strict: !1 });
let ql = !1;
function Jm(e, t, n, r, o) {
  var i;
  const { visualElement: s } = fe(Co), l = fe(dc), c = fe(bo), u = fe(Qa).reducedMotion, d = ze();
  r = r || l.renderer, !d.current && r && (d.current = r(e, {
    visualState: t,
    parent: s,
    props: n,
    presenceContext: c,
    blockInitialAnimation: c ? c.initial === !1 : !1,
    reducedMotionConfig: u
  }));
  const f = d.current, p = fe(ec);
  f && !f.projection && o && (f.type === "html" || f.type === "svg") && tv(d.current, n, o, p), Z0(() => {
    f && f.update(n, c);
  });
  const m = n[V1], v = ze(!!m && !window.MotionHandoffIsComplete && ((i = window.MotionHasOptimisedAnimation) === null || i === void 0 ? void 0 : i.call(window, m)));
  return Ri(() => {
    f && (f.updateFeatures(), Mi.render(f.render), v.current && f.animationState && f.animationState.animateChanges());
  }), We(() => {
    f && (!v.current && f.animationState && f.animationState.animateChanges(), v.current = !1, ql || (ql = !0, queueMicrotask(ev)));
  }), f;
}
function ev() {
  window.MotionHandoffIsComplete = !0;
}
function tv(e, t, n, r) {
  const { layoutId: o, layout: i, drag: s, dragConstraints: l, layoutScroll: c, layoutRoot: u } = t;
  e.projection = new n(e.latestValues, t["data-framer-portal-id"] ? void 0 : fc(e.parent)), e.projection.setOptions({
    layoutId: o,
    layout: i,
    alwaysMeasureLayout: !!s || l && gn(l),
    visualElement: e,
    /**
     * TODO: Update options in an effect. This could be tricky as it'll be too late
     * to update by the time layout animations run.
     * We also need to fix this safeToRemove by linking it up to the one returned by usePresence,
     * ensuring it gets called if there's no potential layout animations.
     *
     */
    animationType: typeof i == "string" ? i : "both",
    initialPromotionConfig: r,
    layoutScroll: c,
    layoutRoot: u
  });
}
function fc(e) {
  if (e)
    return e.options.allowProjection !== !1 ? e.projection : fc(e.parent);
}
function nv(e, t, n) {
  return rn(
    (r) => {
      r && e.mount && e.mount(r), t && (r ? t.mount(r) : t.unmount()), n && (typeof n == "function" ? n(r) : gn(n) && (n.current = r));
    },
    /**
     * Only pass a new ref callback to React if we've received a visual element
     * factory. Otherwise we'll be mounting/remounting every time externalRef
     * or other dependencies change.
     */
    [t]
  );
}
function Mo(e) {
  return qn(e.animate) || li.some((t) => Xn(e[t]));
}
function hc(e) {
  return !!(Mo(e) || e.variants);
}
function rv(e, t) {
  if (Mo(e)) {
    const { initial: n, animate: r } = e;
    return {
      initial: n === !1 || Xn(n) ? n : void 0,
      animate: Xn(r) ? r : void 0
    };
  }
  return e.inherit !== !1 ? t : {};
}
function ov(e) {
  const { initial: t, animate: n } = rv(e, fe(Co));
  return $t(() => ({ initial: t, animate: n }), [Xl(t), Xl(n)]);
}
function Xl(e) {
  return Array.isArray(e) ? e.join(" ") : e;
}
const Zl = {
  animation: [
    "animate",
    "variants",
    "whileHover",
    "whileTap",
    "exit",
    "whileInView",
    "whileFocus",
    "whileDrag"
  ],
  exit: ["exit"],
  drag: ["drag", "dragControls"],
  focus: ["whileFocus"],
  hover: ["whileHover", "onHoverStart", "onHoverEnd"],
  tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
  pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
  inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
  layout: ["layout", "layoutId"]
}, Rn = {};
for (const e in Zl)
  Rn[e] = {
    isEnabled: (t) => Zl[e].some((n) => !!t[n])
  };
function av(e) {
  for (const t in e)
    Rn[t] = {
      ...Rn[t],
      ...e[t]
    };
}
const iv = Symbol.for("motionComponentSymbol");
function sv({ preloadedFeatures: e, createVisualElement: t, useRender: n, useVisualState: r, Component: o }) {
  e && av(e);
  function i(l, c) {
    let u;
    const d = {
      ...fe(Qa),
      ...l,
      layoutId: lv(l)
    }, { isStatic: f } = d, p = ov(l), m = r(l, f);
    if (!f && Si) {
      cv(d, e);
      const v = uv(d);
      u = v.MeasureLayout, p.visualElement = Jm(o, m, d, t, v.ProjectionNode);
    }
    return b(Co.Provider, { value: p, children: [u && p.visualElement ? a(u, { visualElement: p.visualElement, ...d }) : null, n(o, l, nv(m, p.visualElement, c), m, f, p.visualElement)] });
  }
  const s = w(i);
  return s[iv] = o, s;
}
function lv({ layoutId: e }) {
  const t = fe(er).id;
  return t && e !== void 0 ? t + "-" + e : e;
}
function cv(e, t) {
  const n = fe(dc).strict;
  if (process.env.NODE_ENV !== "production" && t && n) {
    const r = "You have rendered a `motion` component within a `LazyMotion` component. This will break tree shaking. Import and render a `m` component instead.";
    e.ignoreStrict ? Nn(!1, r) : kt(!1, r);
  }
}
function uv(e) {
  const { drag: t, layout: n } = Rn;
  if (!t && !n)
    return {};
  const r = { ...t, ...n };
  return {
    MeasureLayout: t != null && t.isEnabled(e) || n != null && n.isEnabled(e) ? r.MeasureLayout : void 0,
    ProjectionNode: r.ProjectionNode
  };
}
const dv = [
  "animate",
  "circle",
  "defs",
  "desc",
  "ellipse",
  "g",
  "image",
  "line",
  "filter",
  "marker",
  "mask",
  "metadata",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "rect",
  "stop",
  "switch",
  "symbol",
  "svg",
  "text",
  "tspan",
  "use",
  "view"
];
function _i(e) {
  return (
    /**
     * If it's not a string, it's a custom React component. Currently we only support
     * HTML custom React components.
     */
    typeof e != "string" || /**
     * If it contains a dash, the element is a custom HTML webcomponent.
     */
    e.includes("-") ? !1 : (
      /**
       * If it's in our list of lowercase SVG tags, it's an SVG component
       */
      !!(dv.indexOf(e) > -1 || /**
       * If it contains a capital letter, it's an SVG component
       */
      /[A-Z]/u.test(e))
    )
  );
}
function pc(e, { style: t, vars: n }, r, o) {
  Object.assign(e.style, t, o && o.getProjectionStyles(r));
  for (const i in n)
    e.style.setProperty(i, n[i]);
}
const mc = /* @__PURE__ */ new Set([
  "baseFrequency",
  "diffuseConstant",
  "kernelMatrix",
  "kernelUnitLength",
  "keySplines",
  "keyTimes",
  "limitingConeAngle",
  "markerHeight",
  "markerWidth",
  "numOctaves",
  "targetX",
  "targetY",
  "surfaceScale",
  "specularConstant",
  "specularExponent",
  "stdDeviation",
  "tableValues",
  "viewBox",
  "gradientTransform",
  "pathLength",
  "startOffset",
  "textLength",
  "lengthAdjust"
]);
function vc(e, t, n, r) {
  pc(e, t, void 0, r);
  for (const o in t.attrs)
    e.setAttribute(mc.has(o) ? o : yo(o), t.attrs[o]);
}
function gc(e, { layout: t, layoutId: n }) {
  return Ut.has(e) || e.startsWith("origin") || (t || n !== void 0) && (!!jr[e] || e === "opacity");
}
function Pi(e, t, n) {
  var r;
  const { style: o } = e, i = {};
  for (const s in o)
    (Te(o[s]) || t.style && Te(t.style[s]) || gc(s, e) || ((r = n == null ? void 0 : n.getValue(s)) === null || r === void 0 ? void 0 : r.liveStyle) !== void 0) && (i[s] = o[s]);
  return n && o && typeof o.willChange == "string" && (n.applyWillChange = !1), i;
}
function wc(e, t, n) {
  const r = Pi(e, t, n);
  for (const o in e)
    if (Te(e[o]) || Te(t[o])) {
      const i = or.indexOf(o) !== -1 ? "attr" + o.charAt(0).toUpperCase() + o.substring(1) : o;
      r[i] = e[o];
    }
  return r;
}
function fv({ applyWillChange: e = !1, scrapeMotionValuesFromProps: t, createRenderState: n, onMount: r }, o, i, s, l) {
  const c = {
    latestValues: pv(o, i, s, l ? !1 : e, t),
    renderState: n()
  };
  return r && (c.mount = (u) => r(o, u, c)), c;
}
const yc = (e) => (t, n) => {
  const r = fe(Co), o = fe(bo), i = () => fv(e, t, r, o, n);
  return n ? i() : Ja(i);
};
function hv(e, t) {
  const n = L1(t);
  n && go(e, n);
}
function Ql(e, t, n) {
  const r = Array.isArray(t) ? t : [t];
  for (let o = 0; o < r.length; o++) {
    const i = ii(e, r[o]);
    if (i) {
      const { transitionEnd: s, transition: l, ...c } = i;
      n(c, s);
    }
  }
}
function pv(e, t, n, r, o) {
  var i;
  const s = {}, l = [], c = r && ((i = e.style) === null || i === void 0 ? void 0 : i.willChange) === void 0, u = o(e, {});
  for (const x in u)
    s[x] = Fr(u[x]);
  let { initial: d, animate: f } = e;
  const p = Mo(e), m = hc(e);
  t && m && !p && e.inherit !== !1 && (d === void 0 && (d = t.initial), f === void 0 && (f = t.animate));
  let v = n ? n.initial === !1 : !1;
  v = v || d === !1;
  const g = v ? f : d;
  return g && typeof g != "boolean" && !qn(g) && Ql(e, g, (x, C) => {
    for (const y in x) {
      let M = x[y];
      if (Array.isArray(M)) {
        const _ = v ? M.length - 1 : 0;
        M = M[_];
      }
      M !== null && (s[y] = M);
    }
    for (const y in C)
      s[y] = C[y];
  }), c && (f && d !== !1 && !qn(f) && Ql(e, f, (x) => {
    for (const C in x)
      hv(l, C);
  }), l.length && (s.willChange = l.join(","))), s;
}
const Ai = () => ({
  style: {},
  transform: {},
  transformOrigin: {},
  vars: {}
}), xc = () => ({
  ...Ai(),
  attrs: {}
}), bc = (e, t) => t && typeof e == "number" ? t.transform(e) : e, mv = {
  x: "translateX",
  y: "translateY",
  z: "translateZ",
  transformPerspective: "perspective"
}, vv = or.length;
function gv(e, t, n) {
  let r = "", o = !0;
  for (let i = 0; i < vv; i++) {
    const s = or[i], l = e[s];
    if (l === void 0)
      continue;
    let c = !0;
    if (typeof l == "number" ? c = l === (s.startsWith("scale") ? 1 : 0) : c = parseFloat(l) === 0, !c || n) {
      const u = bc(l, pi[s]);
      if (!c) {
        o = !1;
        const d = mv[s] || s;
        r += `${d}(${u}) `;
      }
      n && (t[s] = u);
    }
  }
  return r = r.trim(), n ? r = n(t, o ? "" : r) : o && (r = "none"), r;
}
function Ti(e, t, n) {
  const { style: r, vars: o, transformOrigin: i } = e;
  let s = !1, l = !1;
  for (const c in t) {
    const u = t[c];
    if (Ut.has(c)) {
      s = !0;
      continue;
    } else if (i1(c)) {
      o[c] = u;
      continue;
    } else {
      const d = bc(u, pi[c]);
      c.startsWith("origin") ? (l = !0, i[c] = d) : r[c] = d;
    }
  }
  if (t.transform || (s || n ? r.transform = gv(t, e.transform, n) : r.transform && (r.transform = "none")), l) {
    const { originX: c = "50%", originY: u = "50%", originZ: d = 0 } = i;
    r.transformOrigin = `${c} ${u} ${d}`;
  }
}
function Jl(e, t, n) {
  return typeof e == "string" ? e : K.transform(t + n * e);
}
function wv(e, t, n) {
  const r = Jl(t, e.x, e.width), o = Jl(n, e.y, e.height);
  return `${r} ${o}`;
}
const yv = {
  offset: "stroke-dashoffset",
  array: "stroke-dasharray"
}, xv = {
  offset: "strokeDashoffset",
  array: "strokeDasharray"
};
function bv(e, t, n = 1, r = 0, o = !0) {
  e.pathLength = 1;
  const i = o ? yv : xv;
  e[i.offset] = K.transform(-r);
  const s = K.transform(t), l = K.transform(n);
  e[i.array] = `${s} ${l}`;
}
function Ni(e, {
  attrX: t,
  attrY: n,
  attrScale: r,
  originX: o,
  originY: i,
  pathLength: s,
  pathSpacing: l = 1,
  pathOffset: c = 0,
  // This is object creation, which we try to avoid per-frame.
  ...u
}, d, f) {
  if (Ti(e, u, f), d) {
    e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
    return;
  }
  e.attrs = e.style, e.style = {};
  const { attrs: p, style: m, dimensions: v } = e;
  p.transform && (v && (m.transform = p.transform), delete p.transform), v && (o !== void 0 || i !== void 0 || m.transform) && (m.transformOrigin = wv(v, o !== void 0 ? o : 0.5, i !== void 0 ? i : 0.5)), t !== void 0 && (p.x = t), n !== void 0 && (p.y = n), r !== void 0 && (p.scale = r), s !== void 0 && bv(p, s, l, c, !1);
}
const Di = (e) => typeof e == "string" && e.toLowerCase() === "svg", Cv = {
  useVisualState: yc({
    scrapeMotionValuesFromProps: wc,
    createRenderState: xc,
    onMount: (e, t, { renderState: n, latestValues: r }) => {
      oe.read(() => {
        try {
          n.dimensions = typeof t.getBBox == "function" ? t.getBBox() : t.getBoundingClientRect();
        } catch {
          n.dimensions = {
            x: 0,
            y: 0,
            width: 0,
            height: 0
          };
        }
      }), oe.render(() => {
        Ni(n, r, Di(t.tagName), e.transformTemplate), vc(t, n);
      });
    }
  })
}, Mv = {
  useVisualState: yc({
    applyWillChange: !0,
    scrapeMotionValuesFromProps: Pi,
    createRenderState: Ai
  })
};
function Cc(e, t, n) {
  for (const r in t)
    !Te(t[r]) && !gc(r, n) && (e[r] = t[r]);
}
function Sv({ transformTemplate: e }, t) {
  return $t(() => {
    const n = Ai();
    return Ti(n, t, e), Object.assign({}, n.vars, n.style);
  }, [t]);
}
function Rv(e, t) {
  const n = e.style || {}, r = {};
  return Cc(r, n, e), Object.assign(r, Sv(e, t)), r;
}
function _v(e, t) {
  const n = {}, r = Rv(e, t);
  return e.drag && e.dragListener !== !1 && (n.draggable = !1, r.userSelect = r.WebkitUserSelect = r.WebkitTouchCallout = "none", r.touchAction = e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`), e.tabIndex === void 0 && (e.onTap || e.onTapStart || e.whileTap) && (n.tabIndex = 0), n.style = r, n;
}
function Pv(e, t, n, r) {
  const o = $t(() => {
    const i = xc();
    return Ni(i, t, Di(r), e.transformTemplate), {
      ...i.attrs,
      style: { ...i.style }
    };
  }, [t]);
  if (e.style) {
    const i = {};
    Cc(i, e.style, e), o.style = { ...i, ...o.style };
  }
  return o;
}
function Av(e = !1) {
  return (n, r, o, { latestValues: i }, s) => {
    const c = (_i(n) ? Pv : _v)(r, i, s, n), u = th(r, typeof n == "string", e), d = n !== Q0 ? { ...u, ...c, ref: o } : {}, { children: f } = r, p = $t(() => Te(f) ? f.get() : f, [f]);
    return zr(n, {
      ...d,
      children: p
    });
  };
}
function Tv(e, t) {
  return function(r, { forwardMotionProps: o } = { forwardMotionProps: !1 }) {
    const s = {
      ..._i(r) ? Cv : Mv,
      preloadedFeatures: e,
      useRender: Av(o),
      createVisualElement: t,
      Component: r
    };
    return sv(s);
  };
}
const Ia = { current: null }, Mc = { current: !1 };
function Nv() {
  if (Mc.current = !0, !!Si)
    if (window.matchMedia) {
      const e = window.matchMedia("(prefers-reduced-motion)"), t = () => Ia.current = e.matches;
      e.addListener(t), t();
    } else
      Ia.current = !1;
}
function Dv(e, t, n) {
  for (const r in t) {
    const o = t[r], i = n[r];
    if (Te(o))
      e.addValue(r, o), process.env.NODE_ENV === "development" && po(o.version === "11.5.4", `Attempting to mix Framer Motion versions ${o.version} with 11.5.4 may not work as expected.`);
    else if (Te(i))
      e.addValue(r, Jn(o, { owner: e }));
    else if (i !== o)
      if (e.hasValue(r)) {
        const s = e.getValue(r);
        s.liveStyle === !0 ? s.jump(o) : s.hasAnimated || s.set(o);
      } else {
        const s = e.getStaticValue(r);
        e.addValue(r, Jn(s !== void 0 ? s : o, { owner: e }));
      }
  }
  for (const r in n)
    t[r] === void 0 && e.removeValue(r);
  return t;
}
const e0 = /* @__PURE__ */ new WeakMap(), kv = [...c1, Ae, Ht], Ev = (e) => kv.find(l1(e)), t0 = [
  "AnimationStart",
  "AnimationComplete",
  "Update",
  "BeforeLayoutMeasure",
  "LayoutMeasure",
  "LayoutAnimationStart",
  "LayoutAnimationComplete"
], Fv = li.length;
class Iv {
  /**
   * This method takes React props and returns found MotionValues. For example, HTML
   * MotionValues will be found within the style prop, whereas for Three.js within attribute arrays.
   *
   * This isn't an abstract method as it needs calling in the constructor, but it is
   * intended to be one.
   */
  scrapeMotionValuesFromProps(t, n, r) {
    return {};
  }
  constructor({ parent: t, props: n, presenceContext: r, reducedMotionConfig: o, blockInitialAnimation: i, visualState: s }, l = {}) {
    this.applyWillChange = !1, this.current = null, this.children = /* @__PURE__ */ new Set(), this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.values = /* @__PURE__ */ new Map(), this.KeyframeResolver = fi, this.features = {}, this.valueSubscriptions = /* @__PURE__ */ new Map(), this.prevMotionValues = {}, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
      this.isRenderScheduled = !1, this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection));
    }, this.isRenderScheduled = !1, this.scheduleRender = () => {
      this.isRenderScheduled || (this.isRenderScheduled = !0, oe.render(this.render, !1, !0));
    };
    const { latestValues: c, renderState: u } = s;
    this.latestValues = c, this.baseTarget = { ...c }, this.initialValues = n.initial ? { ...c } : {}, this.renderState = u, this.parent = t, this.props = n, this.presenceContext = r, this.depth = t ? t.depth + 1 : 0, this.reducedMotionConfig = o, this.options = l, this.blockInitialAnimation = !!i, this.isControllingVariants = Mo(n), this.isVariantNode = hc(n), this.isVariantNode && (this.variantChildren = /* @__PURE__ */ new Set()), this.manuallyAnimateOnMount = !!(t && t.current);
    const { willChange: d, ...f } = this.scrapeMotionValuesFromProps(n, {}, this);
    for (const p in f) {
      const m = f[p];
      c[p] !== void 0 && Te(m) && m.set(c[p], !1);
    }
  }
  mount(t) {
    this.current = t, e0.set(t, this), this.projection && !this.projection.instance && this.projection.mount(t), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((n, r) => this.bindToMotionValue(r, n)), Mc.current || Nv(), this.shouldReduceMotion = this.reducedMotionConfig === "never" ? !1 : this.reducedMotionConfig === "always" ? !0 : Ia.current, process.env.NODE_ENV !== "production" && po(this.shouldReduceMotion !== !0, "You have Reduced Motion enabled on your device. Animations may not appear as expected."), this.parent && this.parent.children.add(this), this.update(this.props, this.presenceContext);
  }
  unmount() {
    e0.delete(this.current), this.projection && this.projection.unmount(), Dt(this.notifyUpdate), Dt(this.render), this.valueSubscriptions.forEach((t) => t()), this.valueSubscriptions.clear(), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent && this.parent.children.delete(this);
    for (const t in this.events)
      this.events[t].clear();
    for (const t in this.features) {
      const n = this.features[t];
      n && (n.unmount(), n.isMounted = !1);
    }
    this.current = null;
  }
  bindToMotionValue(t, n) {
    this.valueSubscriptions.has(t) && this.valueSubscriptions.get(t)();
    const r = Ut.has(t), o = n.on("change", (l) => {
      this.latestValues[t] = l, this.props.onUpdate && oe.preRender(this.notifyUpdate), r && this.projection && (this.projection.isTransformDirty = !0);
    }), i = n.on("renderRequest", this.scheduleRender);
    let s;
    window.MotionCheckAppearSync && (s = window.MotionCheckAppearSync(this, t, n)), this.valueSubscriptions.set(t, () => {
      o(), i(), s && s(), n.owner && n.stop();
    });
  }
  sortNodePosition(t) {
    return !this.current || !this.sortInstanceNodePosition || this.type !== t.type ? 0 : this.sortInstanceNodePosition(this.current, t.current);
  }
  updateFeatures() {
    let t = "animation";
    for (t in Rn) {
      const n = Rn[t];
      if (!n)
        continue;
      const { isEnabled: r, Feature: o } = n;
      if (!this.features[t] && o && r(this.props) && (this.features[t] = new o(this)), this.features[t]) {
        const i = this.features[t];
        i.isMounted ? i.update() : (i.mount(), i.isMounted = !0);
      }
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.props);
  }
  /**
   * Measure the current viewport box with or without transforms.
   * Only measures axis-aligned boxes, rotate and skew must be manually
   * removed with a re-render to work.
   */
  measureViewportBox() {
    return this.current ? this.measureInstanceViewportBox(this.current, this.props) : we();
  }
  getStaticValue(t) {
    return this.latestValues[t];
  }
  setStaticValue(t, n) {
    this.latestValues[t] = n;
  }
  /**
   * Update the provided props. Ensure any newly-added motion values are
   * added to our map, old ones removed, and listeners updated.
   */
  update(t, n) {
    (t.transformTemplate || this.props.transformTemplate) && this.scheduleRender(), this.prevProps = this.props, this.props = t, this.prevPresenceContext = this.presenceContext, this.presenceContext = n;
    for (let r = 0; r < t0.length; r++) {
      const o = t0[r];
      this.propEventSubscriptions[o] && (this.propEventSubscriptions[o](), delete this.propEventSubscriptions[o]);
      const i = "on" + o, s = t[i];
      s && (this.propEventSubscriptions[o] = this.on(o, s));
    }
    this.prevMotionValues = Dv(this, this.scrapeMotionValuesFromProps(t, this.prevProps, this), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue();
  }
  getProps() {
    return this.props;
  }
  /**
   * Returns the variant definition with a given name.
   */
  getVariant(t) {
    return this.props.variants ? this.props.variants[t] : void 0;
  }
  /**
   * Returns the defined default transition on this component.
   */
  getDefaultTransition() {
    return this.props.transition;
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint;
  }
  getClosestVariantNode() {
    return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0;
  }
  getVariantContext(t = !1) {
    if (t)
      return this.parent ? this.parent.getVariantContext() : void 0;
    if (!this.isControllingVariants) {
      const r = this.parent ? this.parent.getVariantContext() || {} : {};
      return this.props.initial !== void 0 && (r.initial = this.props.initial), r;
    }
    const n = {};
    for (let r = 0; r < Fv; r++) {
      const o = li[r], i = this.props[o];
      (Xn(i) || i === !1) && (n[o] = i);
    }
    return n;
  }
  /**
   * Add a child visual element to our set of children.
   */
  addVariantChild(t) {
    const n = this.getClosestVariantNode();
    if (n)
      return n.variantChildren && n.variantChildren.add(t), () => n.variantChildren.delete(t);
  }
  /**
   * Add a motion value and bind it to this visual element.
   */
  addValue(t, n) {
    const r = this.values.get(t);
    n !== r && (r && this.removeValue(t), this.bindToMotionValue(t, n), this.values.set(t, n), this.latestValues[t] = n.get());
  }
  /**
   * Remove a motion value and unbind any active subscriptions.
   */
  removeValue(t) {
    this.values.delete(t);
    const n = this.valueSubscriptions.get(t);
    n && (n(), this.valueSubscriptions.delete(t)), delete this.latestValues[t], this.removeValueFromRenderState(t, this.renderState);
  }
  /**
   * Check whether we have a motion value for this key
   */
  hasValue(t) {
    return this.values.has(t);
  }
  getValue(t, n) {
    if (this.props.values && this.props.values[t])
      return this.props.values[t];
    let r = this.values.get(t);
    return r === void 0 && n !== void 0 && (r = Jn(n === null ? void 0 : n, { owner: this }), this.addValue(t, r)), r;
  }
  /**
   * If we're trying to animate to a previously unencountered value,
   * we need to check for it in our state and as a last resort read it
   * directly from the instance (which might have performance implications).
   */
  readValue(t, n) {
    var r;
    let o = this.latestValues[t] !== void 0 || !this.current ? this.latestValues[t] : (r = this.getBaseTargetFromProps(this.props, t)) !== null && r !== void 0 ? r : this.readValueFromInstance(this.current, t, this.options);
    return o != null && (typeof o == "string" && (o1(o) || r1(o)) ? o = parseFloat(o) : !Ev(o) && Ht.test(n) && (o = g1(t, n)), this.setBaseTarget(t, Te(o) ? o.get() : o)), Te(o) ? o.get() : o;
  }
  /**
   * Set the base target to later animate back to. This is currently
   * only hydrated on creation and when we first read a value.
   */
  setBaseTarget(t, n) {
    this.baseTarget[t] = n;
  }
  /**
   * Find the base target for a value thats been removed from all animation
   * props.
   */
  getBaseTarget(t) {
    var n;
    const { initial: r } = this.props;
    let o;
    if (typeof r == "string" || typeof r == "object") {
      const s = ii(this.props, r, (n = this.presenceContext) === null || n === void 0 ? void 0 : n.custom);
      s && (o = s[t]);
    }
    if (r && o !== void 0)
      return o;
    const i = this.getBaseTargetFromProps(this.props, t);
    return i !== void 0 && !Te(i) ? i : this.initialValues[t] !== void 0 && o === void 0 ? void 0 : this.baseTarget[t];
  }
  on(t, n) {
    return this.events[t] || (this.events[t] = new Ci()), this.events[t].add(n);
  }
  notify(t, ...n) {
    this.events[t] && this.events[t].notify(...n);
  }
}
class Sc extends Iv {
  constructor() {
    super(...arguments), this.KeyframeResolver = w1;
  }
  sortInstanceNodePosition(t, n) {
    return t.compareDocumentPosition(n) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(t, n) {
    return t.style ? t.style[n] : void 0;
  }
  removeValueFromRenderState(t, { vars: n, style: r }) {
    delete n[t], delete r[t];
  }
}
function Ov(e) {
  return window.getComputedStyle(e);
}
class Vv extends Sc {
  constructor() {
    super(...arguments), this.type = "html", this.applyWillChange = !0, this.renderInstance = pc;
  }
  readValueFromInstance(t, n) {
    if (Ut.has(n)) {
      const r = mi(n);
      return r && r.default || 0;
    } else {
      const r = Ov(t), o = (i1(n) ? r.getPropertyValue(n) : r[n]) || 0;
      return typeof o == "string" ? o.trim() : o;
    }
  }
  measureInstanceViewportBox(t, { transformPagePoint: n }) {
    return Q1(t, n);
  }
  build(t, n, r) {
    Ti(t, n, r.transformTemplate);
  }
  scrapeMotionValuesFromProps(t, n, r) {
    return Pi(t, n, r);
  }
  handleChildMotionValue() {
    this.childSubscription && (this.childSubscription(), delete this.childSubscription);
    const { children: t } = this.props;
    Te(t) && (this.childSubscription = t.on("change", (n) => {
      this.current && (this.current.textContent = `${n}`);
    }));
  }
}
class Bv extends Sc {
  constructor() {
    super(...arguments), this.type = "svg", this.isSVGTag = !1, this.measureInstanceViewportBox = we;
  }
  getBaseTargetFromProps(t, n) {
    return t[n];
  }
  readValueFromInstance(t, n) {
    if (Ut.has(n)) {
      const r = mi(n);
      return r && r.default || 0;
    }
    return n = mc.has(n) ? n : yo(n), t.getAttribute(n);
  }
  scrapeMotionValuesFromProps(t, n, r) {
    return wc(t, n, r);
  }
  build(t, n, r) {
    Ni(t, n, this.isSVGTag, r.transformTemplate);
  }
  renderInstance(t, n, r, o) {
    vc(t, n, r, o);
  }
  mount(t) {
    this.isSVGTag = Di(t.tagName), super.mount(t);
  }
}
const Lv = (e, t) => _i(e) ? new Bv(t) : new Vv(t, {
  allowProjection: e !== Q0
}), $v = /* @__PURE__ */ Tv({
  ...Tp,
  ...Zm,
  ...$m,
  ...Qm
}, Lv), Wt = /* @__PURE__ */ Sh($v);
class zv extends h.Component {
  getSnapshotBeforeUpdate(t) {
    const n = this.props.childRef.current;
    if (n && t.isPresent && !this.props.isPresent) {
      const r = this.props.sizeRef.current;
      r.height = n.offsetHeight || 0, r.width = n.offsetWidth || 0, r.top = n.offsetTop, r.left = n.offsetLeft;
    }
    return null;
  }
  /**
   * Required with getSnapshotBeforeUpdate to stop React complaining.
   */
  componentDidUpdate() {
  }
  render() {
    return this.props.children;
  }
}
function Hv({ children: e, isPresent: t }) {
  const n = fo(), r = ze(null), o = ze({
    width: 0,
    height: 0,
    top: 0,
    left: 0
  }), { nonce: i } = fe(Qa);
  return Z0(() => {
    const { width: s, height: l, top: c, left: u } = o.current;
    if (t || !r.current || !s || !l)
      return;
    r.current.dataset.motionPopId = n;
    const d = document.createElement("style");
    return i && (d.nonce = i), document.head.appendChild(d), d.sheet && d.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${s}px !important;
            height: ${l}px !important;
            top: ${c}px !important;
            left: ${u}px !important;
          }
        `), () => {
      document.head.removeChild(d);
    };
  }, [t]), a(zv, { isPresent: t, childRef: r, sizeRef: o, children: h.cloneElement(e, { ref: r }) });
}
const Wv = ({ children: e, initial: t, isPresent: n, onExitComplete: r, custom: o, presenceAffectsLayout: i, mode: s }) => {
  const l = Ja(Uv), c = fo(), u = $t(
    () => ({
      id: c,
      initial: t,
      isPresent: n,
      custom: o,
      onExitComplete: (d) => {
        l.set(d, !0);
        for (const f of l.values())
          if (!f)
            return;
        r && r();
      },
      register: (d) => (l.set(d, !1), () => l.delete(d))
    }),
    /**
     * If the presence of a child affects the layout of the components around it,
     * we want to make a new context value to ensure they get re-rendered
     * so they can detect that layout change.
     */
    i ? [Math.random()] : [n]
  );
  return $t(() => {
    l.forEach((d, f) => l.set(f, !1));
  }, [n]), h.useEffect(() => {
    !n && !l.size && r && r();
  }, [n]), s === "popLayout" && (e = a(Hv, { isPresent: n, children: e })), a(bo.Provider, { value: u, children: e });
};
function Uv() {
  return /* @__PURE__ */ new Map();
}
const Sr = (e) => e.key || "";
function n0(e) {
  const t = [];
  return ai.forEach(e, (n) => {
    bh(n) && t.push(n);
  }), t;
}
const ki = ({ children: e, exitBeforeEnter: t, custom: n, initial: r = !0, onExitComplete: o, presenceAffectsLayout: i = !0, mode: s = "sync" }) => {
  kt(!t, "Replace exitBeforeEnter with mode='wait'");
  const l = $t(() => n0(e), [e]), c = l.map(Sr), u = ze(!0), d = ze(l), f = Ja(() => /* @__PURE__ */ new Map()), [p, m] = be(l), [v, g] = be(l);
  Ri(() => {
    u.current = !1, d.current = l;
    for (let y = 0; y < v.length; y++) {
      const M = Sr(v[y]);
      c.includes(M) ? f.delete(M) : f.get(M) !== !0 && f.set(M, !1);
    }
  }, [v, c.length, c.join("-")]);
  const x = [];
  if (l !== p) {
    let y = [...l];
    for (let M = 0; M < v.length; M++) {
      const _ = v[M], P = Sr(_);
      c.includes(P) || (y.splice(M, 0, _), x.push(_));
    }
    s === "wait" && x.length && (y = x), g(n0(y)), m(l);
    return;
  }
  process.env.NODE_ENV !== "production" && s === "wait" && v.length > 1 && console.warn(`You're attempting to animate multiple children within AnimatePresence, but its mode is set to "wait". This will lead to odd visual behaviour.`);
  const { forceRender: C } = fe(er);
  return a(me, { children: v.map((y) => {
    const M = Sr(y), _ = l === v || c.includes(M), P = () => {
      if (f.has(M))
        f.set(M, !0);
      else
        return;
      let E = !0;
      f.forEach((L) => {
        L || (E = !1);
      }), E && (C == null || C(), g(d.current), o && o());
    };
    return a(Wv, { isPresent: _, initial: !u.current || r ? void 0 : !1, custom: _ ? void 0 : n, presenceAffectsLayout: i, mode: s, onExitComplete: _ ? void 0 : P, children: y }, M);
  }) });
}, Gv = He(null);
function jv() {
  const e = ze(!1);
  return Ri(() => (e.current = !0, () => {
    e.current = !1;
  }), []), e;
}
function Kv() {
  const e = jv(), [t, n] = be(0), r = rn(() => {
    e.current && n(t + 1);
  }, [t]);
  return [rn(() => oe.postRender(r), [r]), t];
}
const Yv = (e) => !e.isLayoutDirty && e.willUpdate(!1);
function r0() {
  const e = /* @__PURE__ */ new Set(), t = /* @__PURE__ */ new WeakMap(), n = () => e.forEach(Yv);
  return {
    add: (r) => {
      e.add(r), t.set(r, r.addEventListener("willUpdate", n));
    },
    remove: (r) => {
      e.delete(r);
      const o = t.get(r);
      o && (o(), t.delete(r)), n();
    },
    dirty: n
  };
}
const Rc = (e) => e === !0, qv = (e) => Rc(e === !0) || e === "id", Xv = ({ children: e, id: t, inherit: n = !0 }) => {
  const r = fe(er), o = fe(Gv), [i, s] = Kv(), l = ze(null), c = r.id || o;
  l.current === null && (qv(n) && c && (t = t ? c + "-" + t : c), l.current = {
    id: t,
    group: Rc(n) && r.group || r0()
  });
  const u = $t(() => ({ ...l.current, forceRender: i }), [s]);
  return a(er.Provider, { value: u, children: e });
};
var Zv = h.createContext(void 0);
function kn(e) {
  const t = h.useContext(Zv);
  return e || t || "ltr";
}
function Oa(e, [t, n]) {
  return Math.min(n, Math.max(t, e));
}
function Qv(e, t) {
  return h.useReducer((n, r) => t[n][r] ?? n, e);
}
var Ei = "ScrollArea", [_c, fA] = Et(Ei), [Jv, tt] = _c(Ei), Pc = h.forwardRef(
  (e, t) => {
    const {
      __scopeScrollArea: n,
      type: r = "hover",
      dir: o,
      scrollHideDelay: i = 600,
      ...s
    } = e, [l, c] = h.useState(null), [u, d] = h.useState(null), [f, p] = h.useState(null), [m, v] = h.useState(null), [g, x] = h.useState(null), [C, y] = h.useState(0), [M, _] = h.useState(0), [P, E] = h.useState(!1), [L, N] = h.useState(!1), k = te(t, (Q) => c(Q)), z = kn(o);
    return /* @__PURE__ */ a(
      Jv,
      {
        scope: n,
        type: r,
        dir: z,
        scrollHideDelay: i,
        scrollArea: l,
        viewport: u,
        onViewportChange: d,
        content: f,
        onContentChange: p,
        scrollbarX: m,
        onScrollbarXChange: v,
        scrollbarXEnabled: P,
        onScrollbarXEnabledChange: E,
        scrollbarY: g,
        onScrollbarYChange: x,
        scrollbarYEnabled: L,
        onScrollbarYEnabledChange: N,
        onCornerWidthChange: y,
        onCornerHeightChange: _,
        children: /* @__PURE__ */ a(
          Y.div,
          {
            dir: z,
            ...s,
            ref: k,
            style: {
              position: "relative",
              // Pass corner sizes as CSS vars to reduce re-renders of context consumers
              "--radix-scroll-area-corner-width": C + "px",
              "--radix-scroll-area-corner-height": M + "px",
              ...e.style
            }
          }
        )
      }
    );
  }
);
Pc.displayName = Ei;
var Ac = "ScrollAreaViewport", Tc = h.forwardRef(
  (e, t) => {
    const { __scopeScrollArea: n, children: r, nonce: o, ...i } = e, s = tt(Ac, n), l = h.useRef(null), c = te(t, l, s.onViewportChange);
    return /* @__PURE__ */ b(me, { children: [
      /* @__PURE__ */ a(
        "style",
        {
          dangerouslySetInnerHTML: {
            __html: "[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}"
          },
          nonce: o
        }
      ),
      /* @__PURE__ */ a(
        Y.div,
        {
          "data-radix-scroll-area-viewport": "",
          ...i,
          ref: c,
          style: {
            /**
             * We don't support `visible` because the intention is to have at least one scrollbar
             * if this component is used and `visible` will behave like `auto` in that case
             * https://developer.mozilla.org/en-US/docs/Web/CSS/overflowed#description
             *
             * We don't handle `auto` because the intention is for the native implementation
             * to be hidden if using this component. We just want to ensure the node is scrollable
             * so could have used either `scroll` or `auto` here. We picked `scroll` to prevent
             * the browser from having to work out whether to render native scrollbars or not,
             * we tell it to with the intention of hiding them in CSS.
             */
            overflowX: s.scrollbarXEnabled ? "scroll" : "hidden",
            overflowY: s.scrollbarYEnabled ? "scroll" : "hidden",
            ...e.style
          },
          children: /* @__PURE__ */ a("div", { ref: s.onContentChange, style: { minWidth: "100%", display: "table" }, children: r })
        }
      )
    ] });
  }
);
Tc.displayName = Ac;
var yt = "ScrollAreaScrollbar", Fi = h.forwardRef(
  (e, t) => {
    const { forceMount: n, ...r } = e, o = tt(yt, e.__scopeScrollArea), { onScrollbarXEnabledChange: i, onScrollbarYEnabledChange: s } = o, l = e.orientation === "horizontal";
    return h.useEffect(() => (l ? i(!0) : s(!0), () => {
      l ? i(!1) : s(!1);
    }), [l, i, s]), o.type === "hover" ? /* @__PURE__ */ a(e3, { ...r, ref: t, forceMount: n }) : o.type === "scroll" ? /* @__PURE__ */ a(t3, { ...r, ref: t, forceMount: n }) : o.type === "auto" ? /* @__PURE__ */ a(Nc, { ...r, ref: t, forceMount: n }) : o.type === "always" ? /* @__PURE__ */ a(Ii, { ...r, ref: t }) : null;
  }
);
Fi.displayName = yt;
var e3 = h.forwardRef((e, t) => {
  const { forceMount: n, ...r } = e, o = tt(yt, e.__scopeScrollArea), [i, s] = h.useState(!1);
  return h.useEffect(() => {
    const l = o.scrollArea;
    let c = 0;
    if (l) {
      const u = () => {
        window.clearTimeout(c), s(!0);
      }, d = () => {
        c = window.setTimeout(() => s(!1), o.scrollHideDelay);
      };
      return l.addEventListener("pointerenter", u), l.addEventListener("pointerleave", d), () => {
        window.clearTimeout(c), l.removeEventListener("pointerenter", u), l.removeEventListener("pointerleave", d);
      };
    }
  }, [o.scrollArea, o.scrollHideDelay]), /* @__PURE__ */ a(Oe, { present: n || i, children: /* @__PURE__ */ a(
    Nc,
    {
      "data-state": i ? "visible" : "hidden",
      ...r,
      ref: t
    }
  ) });
}), t3 = h.forwardRef((e, t) => {
  const { forceMount: n, ...r } = e, o = tt(yt, e.__scopeScrollArea), i = e.orientation === "horizontal", s = Ro(() => c("SCROLL_END"), 100), [l, c] = Qv("hidden", {
    hidden: {
      SCROLL: "scrolling"
    },
    scrolling: {
      SCROLL_END: "idle",
      POINTER_ENTER: "interacting"
    },
    interacting: {
      SCROLL: "interacting",
      POINTER_LEAVE: "idle"
    },
    idle: {
      HIDE: "hidden",
      SCROLL: "scrolling",
      POINTER_ENTER: "interacting"
    }
  });
  return h.useEffect(() => {
    if (l === "idle") {
      const u = window.setTimeout(() => c("HIDE"), o.scrollHideDelay);
      return () => window.clearTimeout(u);
    }
  }, [l, o.scrollHideDelay, c]), h.useEffect(() => {
    const u = o.viewport, d = i ? "scrollLeft" : "scrollTop";
    if (u) {
      let f = u[d];
      const p = () => {
        const m = u[d];
        f !== m && (c("SCROLL"), s()), f = m;
      };
      return u.addEventListener("scroll", p), () => u.removeEventListener("scroll", p);
    }
  }, [o.viewport, i, c, s]), /* @__PURE__ */ a(Oe, { present: n || l !== "hidden", children: /* @__PURE__ */ a(
    Ii,
    {
      "data-state": l === "hidden" ? "hidden" : "visible",
      ...r,
      ref: t,
      onPointerEnter: V(e.onPointerEnter, () => c("POINTER_ENTER")),
      onPointerLeave: V(e.onPointerLeave, () => c("POINTER_LEAVE"))
    }
  ) });
}), Nc = h.forwardRef((e, t) => {
  const n = tt(yt, e.__scopeScrollArea), { forceMount: r, ...o } = e, [i, s] = h.useState(!1), l = e.orientation === "horizontal", c = Ro(() => {
    if (n.viewport) {
      const u = n.viewport.offsetWidth < n.viewport.scrollWidth, d = n.viewport.offsetHeight < n.viewport.scrollHeight;
      s(l ? u : d);
    }
  }, 10);
  return _n(n.viewport, c), _n(n.content, c), /* @__PURE__ */ a(Oe, { present: r || i, children: /* @__PURE__ */ a(
    Ii,
    {
      "data-state": i ? "visible" : "hidden",
      ...o,
      ref: t
    }
  ) });
}), Ii = h.forwardRef((e, t) => {
  const { orientation: n = "vertical", ...r } = e, o = tt(yt, e.__scopeScrollArea), i = h.useRef(null), s = h.useRef(0), [l, c] = h.useState({
    content: 0,
    viewport: 0,
    scrollbar: { size: 0, paddingStart: 0, paddingEnd: 0 }
  }), u = Ic(l.viewport, l.content), d = {
    ...r,
    sizes: l,
    onSizesChange: c,
    hasThumb: u > 0 && u < 1,
    onThumbChange: (p) => i.current = p,
    onThumbPointerUp: () => s.current = 0,
    onThumbPointerDown: (p) => s.current = p
  };
  function f(p, m) {
    return s3(p, s.current, l, m);
  }
  return n === "horizontal" ? /* @__PURE__ */ a(
    n3,
    {
      ...d,
      ref: t,
      onThumbPositionChange: () => {
        if (o.viewport && i.current) {
          const p = o.viewport.scrollLeft, m = o0(p, l, o.dir);
          i.current.style.transform = `translate3d(${m}px, 0, 0)`;
        }
      },
      onWheelScroll: (p) => {
        o.viewport && (o.viewport.scrollLeft = p);
      },
      onDragScroll: (p) => {
        o.viewport && (o.viewport.scrollLeft = f(p, o.dir));
      }
    }
  ) : n === "vertical" ? /* @__PURE__ */ a(
    r3,
    {
      ...d,
      ref: t,
      onThumbPositionChange: () => {
        if (o.viewport && i.current) {
          const p = o.viewport.scrollTop, m = o0(p, l);
          i.current.style.transform = `translate3d(0, ${m}px, 0)`;
        }
      },
      onWheelScroll: (p) => {
        o.viewport && (o.viewport.scrollTop = p);
      },
      onDragScroll: (p) => {
        o.viewport && (o.viewport.scrollTop = f(p));
      }
    }
  ) : null;
}), n3 = h.forwardRef((e, t) => {
  const { sizes: n, onSizesChange: r, ...o } = e, i = tt(yt, e.__scopeScrollArea), [s, l] = h.useState(), c = h.useRef(null), u = te(t, c, i.onScrollbarXChange);
  return h.useEffect(() => {
    c.current && l(getComputedStyle(c.current));
  }, [c]), /* @__PURE__ */ a(
    kc,
    {
      "data-orientation": "horizontal",
      ...o,
      ref: u,
      sizes: n,
      style: {
        bottom: 0,
        left: i.dir === "rtl" ? "var(--radix-scroll-area-corner-width)" : 0,
        right: i.dir === "ltr" ? "var(--radix-scroll-area-corner-width)" : 0,
        "--radix-scroll-area-thumb-width": So(n) + "px",
        ...e.style
      },
      onThumbPointerDown: (d) => e.onThumbPointerDown(d.x),
      onDragScroll: (d) => e.onDragScroll(d.x),
      onWheelScroll: (d, f) => {
        if (i.viewport) {
          const p = i.viewport.scrollLeft + d.deltaX;
          e.onWheelScroll(p), Vc(p, f) && d.preventDefault();
        }
      },
      onResize: () => {
        c.current && i.viewport && s && r({
          content: i.viewport.scrollWidth,
          viewport: i.viewport.offsetWidth,
          scrollbar: {
            size: c.current.clientWidth,
            paddingStart: Yr(s.paddingLeft),
            paddingEnd: Yr(s.paddingRight)
          }
        });
      }
    }
  );
}), r3 = h.forwardRef((e, t) => {
  const { sizes: n, onSizesChange: r, ...o } = e, i = tt(yt, e.__scopeScrollArea), [s, l] = h.useState(), c = h.useRef(null), u = te(t, c, i.onScrollbarYChange);
  return h.useEffect(() => {
    c.current && l(getComputedStyle(c.current));
  }, [c]), /* @__PURE__ */ a(
    kc,
    {
      "data-orientation": "vertical",
      ...o,
      ref: u,
      sizes: n,
      style: {
        top: 0,
        right: i.dir === "ltr" ? 0 : void 0,
        left: i.dir === "rtl" ? 0 : void 0,
        bottom: "var(--radix-scroll-area-corner-height)",
        "--radix-scroll-area-thumb-height": So(n) + "px",
        ...e.style
      },
      onThumbPointerDown: (d) => e.onThumbPointerDown(d.y),
      onDragScroll: (d) => e.onDragScroll(d.y),
      onWheelScroll: (d, f) => {
        if (i.viewport) {
          const p = i.viewport.scrollTop + d.deltaY;
          e.onWheelScroll(p), Vc(p, f) && d.preventDefault();
        }
      },
      onResize: () => {
        c.current && i.viewport && s && r({
          content: i.viewport.scrollHeight,
          viewport: i.viewport.offsetHeight,
          scrollbar: {
            size: c.current.clientHeight,
            paddingStart: Yr(s.paddingTop),
            paddingEnd: Yr(s.paddingBottom)
          }
        });
      }
    }
  );
}), [o3, Dc] = _c(yt), kc = h.forwardRef((e, t) => {
  const {
    __scopeScrollArea: n,
    sizes: r,
    hasThumb: o,
    onThumbChange: i,
    onThumbPointerUp: s,
    onThumbPointerDown: l,
    onThumbPositionChange: c,
    onDragScroll: u,
    onWheelScroll: d,
    onResize: f,
    ...p
  } = e, m = tt(yt, n), [v, g] = h.useState(null), x = te(t, (k) => g(k)), C = h.useRef(null), y = h.useRef(""), M = m.viewport, _ = r.content - r.viewport, P = xe(d), E = xe(c), L = Ro(f, 10);
  function N(k) {
    if (C.current) {
      const z = k.clientX - C.current.left, Q = k.clientY - C.current.top;
      u({ x: z, y: Q });
    }
  }
  return h.useEffect(() => {
    const k = (z) => {
      const Q = z.target;
      (v == null ? void 0 : v.contains(Q)) && P(z, _);
    };
    return document.addEventListener("wheel", k, { passive: !1 }), () => document.removeEventListener("wheel", k, { passive: !1 });
  }, [M, v, _, P]), h.useEffect(E, [r, E]), _n(v, L), _n(m.content, L), /* @__PURE__ */ a(
    o3,
    {
      scope: n,
      scrollbar: v,
      hasThumb: o,
      onThumbChange: xe(i),
      onThumbPointerUp: xe(s),
      onThumbPositionChange: E,
      onThumbPointerDown: xe(l),
      children: /* @__PURE__ */ a(
        Y.div,
        {
          ...p,
          ref: x,
          style: { position: "absolute", ...p.style },
          onPointerDown: V(e.onPointerDown, (k) => {
            k.button === 0 && (k.target.setPointerCapture(k.pointerId), C.current = v.getBoundingClientRect(), y.current = document.body.style.webkitUserSelect, document.body.style.webkitUserSelect = "none", m.viewport && (m.viewport.style.scrollBehavior = "auto"), N(k));
          }),
          onPointerMove: V(e.onPointerMove, N),
          onPointerUp: V(e.onPointerUp, (k) => {
            const z = k.target;
            z.hasPointerCapture(k.pointerId) && z.releasePointerCapture(k.pointerId), document.body.style.webkitUserSelect = y.current, m.viewport && (m.viewport.style.scrollBehavior = ""), C.current = null;
          })
        }
      )
    }
  );
}), Kr = "ScrollAreaThumb", Ec = h.forwardRef(
  (e, t) => {
    const { forceMount: n, ...r } = e, o = Dc(Kr, e.__scopeScrollArea);
    return /* @__PURE__ */ a(Oe, { present: n || o.hasThumb, children: /* @__PURE__ */ a(a3, { ref: t, ...r }) });
  }
), a3 = h.forwardRef(
  (e, t) => {
    const { __scopeScrollArea: n, style: r, ...o } = e, i = tt(Kr, n), s = Dc(Kr, n), { onThumbPositionChange: l } = s, c = te(
      t,
      (f) => s.onThumbChange(f)
    ), u = h.useRef(), d = Ro(() => {
      u.current && (u.current(), u.current = void 0);
    }, 100);
    return h.useEffect(() => {
      const f = i.viewport;
      if (f) {
        const p = () => {
          if (d(), !u.current) {
            const m = l3(f, l);
            u.current = m, l();
          }
        };
        return l(), f.addEventListener("scroll", p), () => f.removeEventListener("scroll", p);
      }
    }, [i.viewport, d, l]), /* @__PURE__ */ a(
      Y.div,
      {
        "data-state": s.hasThumb ? "visible" : "hidden",
        ...o,
        ref: c,
        style: {
          width: "var(--radix-scroll-area-thumb-width)",
          height: "var(--radix-scroll-area-thumb-height)",
          ...r
        },
        onPointerDownCapture: V(e.onPointerDownCapture, (f) => {
          const m = f.target.getBoundingClientRect(), v = f.clientX - m.left, g = f.clientY - m.top;
          s.onThumbPointerDown({ x: v, y: g });
        }),
        onPointerUp: V(e.onPointerUp, s.onThumbPointerUp)
      }
    );
  }
);
Ec.displayName = Kr;
var Oi = "ScrollAreaCorner", Fc = h.forwardRef(
  (e, t) => {
    const n = tt(Oi, e.__scopeScrollArea), r = !!(n.scrollbarX && n.scrollbarY);
    return n.type !== "scroll" && r ? /* @__PURE__ */ a(i3, { ...e, ref: t }) : null;
  }
);
Fc.displayName = Oi;
var i3 = h.forwardRef((e, t) => {
  const { __scopeScrollArea: n, ...r } = e, o = tt(Oi, n), [i, s] = h.useState(0), [l, c] = h.useState(0), u = !!(i && l);
  return _n(o.scrollbarX, () => {
    var f;
    const d = ((f = o.scrollbarX) == null ? void 0 : f.offsetHeight) || 0;
    o.onCornerHeightChange(d), c(d);
  }), _n(o.scrollbarY, () => {
    var f;
    const d = ((f = o.scrollbarY) == null ? void 0 : f.offsetWidth) || 0;
    o.onCornerWidthChange(d), s(d);
  }), u ? /* @__PURE__ */ a(
    Y.div,
    {
      ...r,
      ref: t,
      style: {
        width: i,
        height: l,
        position: "absolute",
        right: o.dir === "ltr" ? 0 : void 0,
        left: o.dir === "rtl" ? 0 : void 0,
        bottom: 0,
        ...e.style
      }
    }
  ) : null;
});
function Yr(e) {
  return e ? parseInt(e, 10) : 0;
}
function Ic(e, t) {
  const n = e / t;
  return isNaN(n) ? 0 : n;
}
function So(e) {
  const t = Ic(e.viewport, e.content), n = e.scrollbar.paddingStart + e.scrollbar.paddingEnd, r = (e.scrollbar.size - n) * t;
  return Math.max(r, 18);
}
function s3(e, t, n, r = "ltr") {
  const o = So(n), i = o / 2, s = t || i, l = o - s, c = n.scrollbar.paddingStart + s, u = n.scrollbar.size - n.scrollbar.paddingEnd - l, d = n.content - n.viewport, f = r === "ltr" ? [0, d] : [d * -1, 0];
  return Oc([c, u], f)(e);
}
function o0(e, t, n = "ltr") {
  const r = So(t), o = t.scrollbar.paddingStart + t.scrollbar.paddingEnd, i = t.scrollbar.size - o, s = t.content - t.viewport, l = i - r, c = n === "ltr" ? [0, s] : [s * -1, 0], u = Oa(e, c);
  return Oc([0, s], [0, l])(u);
}
function Oc(e, t) {
  return (n) => {
    if (e[0] === e[1] || t[0] === t[1]) return t[0];
    const r = (t[1] - t[0]) / (e[1] - e[0]);
    return t[0] + r * (n - e[0]);
  };
}
function Vc(e, t) {
  return e > 0 && e < t;
}
var l3 = (e, t = () => {
}) => {
  let n = { left: e.scrollLeft, top: e.scrollTop }, r = 0;
  return function o() {
    const i = { left: e.scrollLeft, top: e.scrollTop }, s = n.left !== i.left, l = n.top !== i.top;
    (s || l) && t(), n = i, r = window.requestAnimationFrame(o);
  }(), () => window.cancelAnimationFrame(r);
};
function Ro(e, t) {
  const n = xe(e), r = h.useRef(0);
  return h.useEffect(() => () => window.clearTimeout(r.current), []), h.useCallback(() => {
    window.clearTimeout(r.current), r.current = window.setTimeout(n, t);
  }, [n, t]);
}
function _n(e, t) {
  const n = xe(t);
  Ne(() => {
    let r = 0;
    if (e) {
      const o = new ResizeObserver(() => {
        cancelAnimationFrame(r), r = window.requestAnimationFrame(n);
      });
      return o.observe(e), () => {
        window.cancelAnimationFrame(r), o.unobserve(e);
      };
    }
  }, [e, n]);
}
var Bc = Pc, c3 = Tc, u3 = Fc;
const Vi = h.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ b(
  Bc,
  {
    ref: r,
    className: T("relative overflow-hidden", e),
    scrollHideDelay: 200,
    ...n,
    children: [
      /* @__PURE__ */ a(
        c3,
        {
          className: "h-full w-full rounded-[inherit]",
          "data-scroll-container": !0,
          children: t
        }
      ),
      /* @__PURE__ */ a(Va, { orientation: "vertical" }),
      /* @__PURE__ */ a(Va, { orientation: "horizontal" }),
      /* @__PURE__ */ a(u3, {})
    ]
  }
));
Vi.displayName = Bc.displayName;
const Va = h.forwardRef(({ className: e, orientation: t = "vertical", ...n }, r) => /* @__PURE__ */ a(
  Fi,
  {
    ref: r,
    orientation: t,
    forceMount: !0,
    className: T(
      "z-50 flex touch-none select-none p-[1px]",
      "transition-opacity data-[state=hidden]:pointer-events-none data-[state=visible]:pointer-events-auto data-[state=hidden]:opacity-0 data-[state=visible]:opacity-100",
      t === "vertical" && "mr-[2px] h-full w-2.5",
      t === "horizontal" && "mt-[2px] h-2.5 flex-col",
      e
    ),
    ...n,
    children: /* @__PURE__ */ a(Ec, { className: "relative flex-1 rounded-full bg-f1-background-secondary opacity-50" })
  }
));
Va.displayName = Fi.displayName;
const Bi = h.forwardRef(
  ({ className: e, type: t, ...n }, r) => /* @__PURE__ */ a(
    "input",
    {
      type: t,
      className: T(
        "flex h-10 w-full rounded-sm border-2 border-solid border-f1-border bg-f1-background px-3 py-2 text-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-f1-foreground-secondary/60 hover:border-f1-border-hover disabled:cursor-not-allowed disabled:bg-f1-background-secondary disabled:opacity-50",
        Ft("focus-visible:border-f1-border-hover"),
        e
      ),
      ref: r,
      ...n
    }
  )
);
Bi.displayName = "Input";
const d3 = Bi, f3 = (e, t) => /* @__PURE__ */ a("svg", { width: "24", height: "24", xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: /* @__PURE__ */ a("path", { fill: "#5596F6", fillRule: "evenodd", d: "M4.65 12a7.35 7.35 0 1 1 14.7 0 7.35 7.35 0 0 1-14.7 0M12 3.35a8.65 8.65 0 1 0 0 17.3 8.65 8.65 0 0 0 0-17.3M18 12a6 6 0 0 1-6 6V6a6 6 0 0 1 6 6", clipRule: "evenodd" }) }), Lc = w(f3), h3 = (e, t) => /* @__PURE__ */ b("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 27", ref: t, ...e, children: [
  /* @__PURE__ */ a("g", { filter: "url(#ModuleCalendar_svg__a)", children: /* @__PURE__ */ a("path", { fill: "#fff", fillRule: "evenodd", d: "M9.333 3.11c.491 0 .89.398.89.889v.889h3.555v-.89a.889.889 0 1 1 1.778 0v.89h.888A3.556 3.556 0 0 1 20 8.443v8.89a3.556 3.556 0 0 1-3.556 3.555H7.556A3.556 3.556 0 0 1 4 17.332V8.443a3.556 3.556 0 0 1 3.556-3.555h.888v-.89c0-.49.398-.888.89-.888m4.445 3.556v.888a.889.889 0 1 0 1.778 0v-.888h.888c.982 0 1.778.795 1.778 1.777v1.778H5.778V8.443c0-.982.796-1.777 1.778-1.777h.888v.888a.889.889 0 0 0 1.778 0v-.888z", clipRule: "evenodd" }) }),
  /* @__PURE__ */ a("defs", { children: /* @__PURE__ */ b("filter", { id: "ModuleCalendar_svg__a", width: 22.896, height: 24.673, x: 0.552, y: 1.386, colorInterpolationFilters: "sRGB", filterUnits: "userSpaceOnUse", children: [
    /* @__PURE__ */ a("feFlood", { floodOpacity: 0, result: "BackgroundImageFix" }),
    /* @__PURE__ */ a("feColorMatrix", { in: "SourceAlpha", result: "hardAlpha", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" }),
    /* @__PURE__ */ a("feOffset", { dy: 1.724 }),
    /* @__PURE__ */ a("feGaussianBlur", { stdDeviation: 1.724 }),
    /* @__PURE__ */ a("feComposite", { in2: "hardAlpha", operator: "out" }),
    /* @__PURE__ */ a("feColorMatrix", { values: "0 0 0 0 0.0352941 0 0 0 0 0.0627451 0 0 0 0 0.109804 0 0 0 0.12 0" }),
    /* @__PURE__ */ a("feBlend", { in2: "BackgroundImageFix", result: "effect1_dropShadow_4_217" }),
    /* @__PURE__ */ a("feBlend", { in: "SourceGraphic", in2: "effect1_dropShadow_4_217", result: "shape" })
  ] }) })
] }), p3 = w(h3), m3 = (e, t) => /* @__PURE__ */ b("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: [
  /* @__PURE__ */ a("g", { clipPath: "url(#ModuleClockIn_svg__a)", filter: "url(#ModuleClockIn_svg__b)", children: /* @__PURE__ */ a("path", { fill: "#fff", fillRule: "evenodd", d: "M20 12a8 8 0 1 1-16 0 8 8 0 0 1 16 0m-7-3a1 1 0 1 0-2 0v2.465a2 2 0 0 0 .89 1.664l2.555 1.703a1 1 0 0 0 1.11-1.664L13 11.465z", clipRule: "evenodd" }) }),
  /* @__PURE__ */ b("defs", { children: [
    /* @__PURE__ */ a("clipPath", { id: "ModuleClockIn_svg__a", children: /* @__PURE__ */ a("path", { fill: "#fff", d: "M0 0h24v24H0z" }) }),
    /* @__PURE__ */ b("filter", { id: "ModuleClockIn_svg__b", width: 22.896, height: 22.896, x: 0.552, y: 2.276, colorInterpolationFilters: "sRGB", filterUnits: "userSpaceOnUse", children: [
      /* @__PURE__ */ a("feFlood", { floodOpacity: 0, result: "BackgroundImageFix" }),
      /* @__PURE__ */ a("feColorMatrix", { in: "SourceAlpha", result: "hardAlpha", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" }),
      /* @__PURE__ */ a("feOffset", { dy: 1.724 }),
      /* @__PURE__ */ a("feGaussianBlur", { stdDeviation: 1.724 }),
      /* @__PURE__ */ a("feComposite", { in2: "hardAlpha", operator: "out" }),
      /* @__PURE__ */ a("feColorMatrix", { values: "0 0 0 0 0.0352941 0 0 0 0 0.0627451 0 0 0 0 0.109804 0 0 0 0.12 0" }),
      /* @__PURE__ */ a("feBlend", { in2: "BackgroundImageFix", result: "effect1_dropShadow_5_101" }),
      /* @__PURE__ */ a("feBlend", { in: "SourceGraphic", in2: "effect1_dropShadow_5_101", result: "shape" })
    ] })
  ] })
] }), v3 = w(m3), g3 = (e, t) => /* @__PURE__ */ b("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: [
  /* @__PURE__ */ a("g", { filter: "url(#ModuleDocuments_svg__a)", children: /* @__PURE__ */ a("path", { fill: "#fff", fillRule: "evenodd", d: "M5.7 3.85A2.7 2.7 0 0 0 3 6.55v9a3.6 3.6 0 0 0 3.6 3.6h10.8a3.6 3.6 0 0 0 3.6-3.6v-5.4a3.6 3.6 0 0 0-3.6-3.6h-4.243a.257.257 0 0 1-.257-.257 2.443 2.443 0 0 0-2.443-2.443z", clipRule: "evenodd" }) }),
  /* @__PURE__ */ a("defs", { children: /* @__PURE__ */ b("filter", { id: "ModuleDocuments_svg__a", width: 21.765, height: 19.065, x: 1.117, y: 2.909, colorInterpolationFilters: "sRGB", filterUnits: "userSpaceOnUse", children: [
    /* @__PURE__ */ a("feFlood", { floodOpacity: 0, result: "BackgroundImageFix" }),
    /* @__PURE__ */ a("feColorMatrix", { in: "SourceAlpha", result: "hardAlpha", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" }),
    /* @__PURE__ */ a("feOffset", { dy: 0.941 }),
    /* @__PURE__ */ a("feGaussianBlur", { stdDeviation: 0.941 }),
    /* @__PURE__ */ a("feComposite", { in2: "hardAlpha", operator: "out" }),
    /* @__PURE__ */ a("feColorMatrix", { values: "0 0 0 0 0.0352941 0 0 0 0 0.0627451 0 0 0 0 0.109804 0 0 0 0.12 0" }),
    /* @__PURE__ */ a("feBlend", { in2: "BackgroundImageFix", result: "effect1_dropShadow_6_243" }),
    /* @__PURE__ */ a("feBlend", { in: "SourceGraphic", in2: "effect1_dropShadow_6_243", result: "shape" })
  ] }) })
] }), w3 = w(g3), y3 = (e, t) => /* @__PURE__ */ b("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 25", ref: t, ...e, children: [
  /* @__PURE__ */ a("g", { filter: "url(#ModuleEngagement_svg__a)", children: /* @__PURE__ */ a("path", { fill: "#fff", fillRule: "evenodd", d: "M7.2 4.03A3.2 3.2 0 0 0 4 7.23v6.4a3.2 3.2 0 0 0 3.2 3.2v2.234c0 1.069 1.293 1.604 2.049.848l2.848-2.848a.8.8 0 0 1 .566-.235H16.8a3.2 3.2 0 0 0 3.2-3.2v-6.4a3.2 3.2 0 0 0-3.2-3.2zm1.349 6.953q.4.747 1.097 1.44c.779.696 1.21 1.047 1.956 1.515h.002c.126.07.262.122.398.122s.27-.052.394-.122q.174-.096.357-.216v-.001a10.7 10.7 0 0 0 1.605-1.299 6 6 0 0 0 1.093-1.439q.406-.757.408-1.543.001-.578-.189-1.063a2.5 2.5 0 0 0-.525-.824 2.3 2.3 0 0 0-.763-.528c-.177-.094-.545-.187-.907-.195-.623-.013-1.22.251-1.474.557a2 2 0 0 0-.465-.33c-.286-.15-.626-.22-1.007-.22q-.476 0-.908.189-.428.186-.762.527-.335.348-.525.823v.001q-.191.485-.19 1.063c0 .524.138 1.04.405 1.543", clipRule: "evenodd" }) }),
  /* @__PURE__ */ a("defs", { children: /* @__PURE__ */ b("filter", { id: "ModuleEngagement_svg__a", width: 21.578, height: 21.815, x: 1.211, y: 2.635, colorInterpolationFilters: "sRGB", filterUnits: "userSpaceOnUse", children: [
    /* @__PURE__ */ a("feFlood", { floodOpacity: 0, result: "BackgroundImageFix" }),
    /* @__PURE__ */ a("feColorMatrix", { in: "SourceAlpha", result: "hardAlpha", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" }),
    /* @__PURE__ */ a("feOffset", { dy: 1.395 }),
    /* @__PURE__ */ a("feGaussianBlur", { stdDeviation: 1.395 }),
    /* @__PURE__ */ a("feComposite", { in2: "hardAlpha", operator: "out" }),
    /* @__PURE__ */ a("feColorMatrix", { values: "0 0 0 0 0.0352941 0 0 0 0 0.0627451 0 0 0 0 0.109804 0 0 0 0.12 0" }),
    /* @__PURE__ */ a("feBlend", { in2: "BackgroundImageFix", result: "effect1_dropShadow_6_237" }),
    /* @__PURE__ */ a("feBlend", { in: "SourceGraphic", in2: "effect1_dropShadow_6_237", result: "shape" })
  ] }) })
] }), x3 = w(y3), b3 = (e, t) => /* @__PURE__ */ b("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 26", ref: t, ...e, children: [
  /* @__PURE__ */ a("g", { filter: "url(#ModuleFinance_svg__a)", children: /* @__PURE__ */ a("path", { fill: "#fff", fillRule: "evenodd", d: "M9.2 2.899a.933.933 0 0 0-.897 1.19l.708 2.478c-.641.36-1.507 1.031-2.27 2.257C5.767 10.384 5 12.776 5 16.432c0 1.157.43 2.301 1.15 3.165.723.87 1.786 1.504 3.05 1.504h5.6c1.264 0 2.327-.635 3.05-1.504A5 5 0 0 0 19 16.432c0-3.656-.768-6.048-1.74-7.608-.764-1.226-1.63-1.898-2.27-2.257l.707-2.478a.933.933 0 0 0-.897-1.19zm3.963 3.267.4-1.4h-3.126l.4 1.4zM12.115 9.5c.479 0 .867.388.867.866v.263c.483.185 1.044.515 1.015 1.107-.025.507-.4.857-.864.816-.176 0-.323-.104-.482-.217-.187-.134-.391-.28-.68-.28-.45 0-.62.191-.62.553 0 .433.529.614 1.144.824.856.293 1.88.643 1.88 1.81 0 .958-.49 1.68-1.393 2.061v.33a.866.866 0 1 1-1.733 0v-.228a2.66 2.66 0 0 1-1.31-.819.866.866 0 0 1 1.304-1.14l.028.031c.125.146.342.4.7.4.262 0 .627-.208.627-.551 0-.409-.468-.535-1.033-.687-.856-.232-1.935-.523-1.935-1.953a2.22 2.22 0 0 1 1.62-2.135v-.185c0-.478.387-.866.865-.866", clipRule: "evenodd" }) }),
  /* @__PURE__ */ a("defs", { children: /* @__PURE__ */ b("filter", { id: "ModuleFinance_svg__a", width: 20.346, height: 24.549, x: 1.827, y: 1.312, colorInterpolationFilters: "sRGB", filterUnits: "userSpaceOnUse", children: [
    /* @__PURE__ */ a("feFlood", { floodOpacity: 0, result: "BackgroundImageFix" }),
    /* @__PURE__ */ a("feColorMatrix", { in: "SourceAlpha", result: "hardAlpha", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" }),
    /* @__PURE__ */ a("feOffset", { dy: 1.587 }),
    /* @__PURE__ */ a("feGaussianBlur", { stdDeviation: 1.587 }),
    /* @__PURE__ */ a("feComposite", { in2: "hardAlpha", operator: "out" }),
    /* @__PURE__ */ a("feColorMatrix", { values: "0 0 0 0 0.0352941 0 0 0 0 0.0627451 0 0 0 0 0.109804 0 0 0 0.12 0" }),
    /* @__PURE__ */ a("feBlend", { in2: "BackgroundImageFix", result: "effect1_dropShadow_6_236" }),
    /* @__PURE__ */ a("feBlend", { in: "SourceGraphic", in2: "effect1_dropShadow_6_236", result: "shape" })
  ] }) })
] }), C3 = w(b3), M3 = (e, t) => /* @__PURE__ */ b("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 25", ref: t, ...e, children: [
  /* @__PURE__ */ a("g", { filter: "url(#ModuleGoals_svg__a)", children: /* @__PURE__ */ a("path", { fill: "#fff", d: "M5.9 3a.9.9 0 0 1 .9.9v.357c.655-.202 1.537-.357 2.7-.357 1.62 0 2.48.571 3.2 1.051l.003.002c.628.42 1.12.747 2.197.747 1.249 0 2.033-.208 2.478-.386.223-.089.365-.172.44-.222l.066-.048A.9.9 0 0 1 19.4 5.7v7.984c0 .027.004.172-.041.33a1.1 1.1 0 0 1-.403.577l-.005.003c-.46.347-1.658 1.006-4.051 1.006-1.62 0-2.48-.571-3.2-1.051l-.003-.002c-.628-.42-1.12-.747-2.197-.747-1.249 0-2.034.208-2.478.386q-.129.051-.222.098V20.1a.9.9 0 1 1-1.8 0V3.9a.9.9 0 0 1 .9-.9" }) }),
  /* @__PURE__ */ a("defs", { children: /* @__PURE__ */ b("filter", { id: "ModuleGoals_svg__a", width: 18.584, height: 22.184, x: 2.908, y: 1.954, colorInterpolationFilters: "sRGB", filterUnits: "userSpaceOnUse", children: [
    /* @__PURE__ */ a("feFlood", { floodOpacity: 0, result: "BackgroundImageFix" }),
    /* @__PURE__ */ a("feColorMatrix", { in: "SourceAlpha", result: "hardAlpha", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" }),
    /* @__PURE__ */ a("feOffset", { dy: 1.046 }),
    /* @__PURE__ */ a("feGaussianBlur", { stdDeviation: 1.046 }),
    /* @__PURE__ */ a("feComposite", { in2: "hardAlpha", operator: "out" }),
    /* @__PURE__ */ a("feColorMatrix", { values: "0 0 0 0 0.0352941 0 0 0 0 0.0627451 0 0 0 0 0.109804 0 0 0 0.12 0" }),
    /* @__PURE__ */ a("feBlend", { in2: "BackgroundImageFix", result: "effect1_dropShadow_6_116" }),
    /* @__PURE__ */ a("feBlend", { in: "SourceGraphic", in2: "effect1_dropShadow_6_116", result: "shape" })
  ] }) })
] }), S3 = w(M3), R3 = (e, t) => /* @__PURE__ */ b("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 26", ref: t, ...e, children: [
  /* @__PURE__ */ a("g", { filter: "url(#ModuleHome_svg__a)", children: /* @__PURE__ */ a("path", { fill: "#fff", d: "M9.675 3.932a4 4 0 0 1 4.65 0l4 2.857A4 4 0 0 1 20 10.044V16a4 4 0 0 1-4 4h-1a2 2 0 0 1-2-2v-2.5a1 1 0 1 0-2 0V18a2 2 0 0 1-2 2H8a4 4 0 0 1-4-4v-5.956a4 4 0 0 1 1.675-3.255z" }) }),
  /* @__PURE__ */ a("defs", { children: /* @__PURE__ */ b("filter", { id: "ModuleHome_svg__a", width: 23.758, height: 24.571, x: 0.121, y: 1.247, colorInterpolationFilters: "sRGB", filterUnits: "userSpaceOnUse", children: [
    /* @__PURE__ */ a("feFlood", { floodOpacity: 0, result: "BackgroundImageFix" }),
    /* @__PURE__ */ a("feColorMatrix", { in: "SourceAlpha", result: "hardAlpha", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" }),
    /* @__PURE__ */ a("feOffset", { dy: 1.939 }),
    /* @__PURE__ */ a("feGaussianBlur", { stdDeviation: 1.939 }),
    /* @__PURE__ */ a("feComposite", { in2: "hardAlpha", operator: "out" }),
    /* @__PURE__ */ a("feColorMatrix", { values: "0 0 0 0 0.0352941 0 0 0 0 0.0627451 0 0 0 0 0.109804 0 0 0 0.12 0" }),
    /* @__PURE__ */ a("feBlend", { in2: "BackgroundImageFix", result: "effect1_dropShadow_80_61" }),
    /* @__PURE__ */ a("feBlend", { in: "SourceGraphic", in2: "effect1_dropShadow_80_61", result: "shape" })
  ] }) })
] }), _3 = w(R3), P3 = (e, t) => /* @__PURE__ */ b("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 26 25", ref: t, ...e, children: [
  /* @__PURE__ */ a("g", { filter: "url(#ModuleInbox_svg__a)", children: /* @__PURE__ */ a("path", { fill: "#fff", d: "M6.004 6.749A4 4 0 0 1 9.31 5h6.993a4 4 0 0 1 3.094 1.465l2.377 2.901A1 1 0 0 1 22 10v5a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4v-5a1 1 0 0 1 .173-.563zM9.31 7a2 2 0 0 0-1.653.874L6.891 9h1.088c1.367 0 2.533.988 2.757 2.336a.795.795 0 0 0 .784.664h2.96c.388 0 .72-.281.783-.664A2.795 2.795 0 0 1 18.02 9h.868L17.85 7.733A2 2 0 0 0 16.303 7z" }) }),
  /* @__PURE__ */ a("defs", { children: /* @__PURE__ */ b("filter", { id: "ModuleInbox_svg__a", width: 25.758, height: 21.758, x: 0.121, y: 3.061, colorInterpolationFilters: "sRGB", filterUnits: "userSpaceOnUse", children: [
    /* @__PURE__ */ a("feFlood", { floodOpacity: 0, result: "BackgroundImageFix" }),
    /* @__PURE__ */ a("feColorMatrix", { in: "SourceAlpha", result: "hardAlpha", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" }),
    /* @__PURE__ */ a("feOffset", { dy: 1.939 }),
    /* @__PURE__ */ a("feGaussianBlur", { stdDeviation: 1.939 }),
    /* @__PURE__ */ a("feComposite", { in2: "hardAlpha", operator: "out" }),
    /* @__PURE__ */ a("feColorMatrix", { values: "0 0 0 0 0.0352941 0 0 0 0 0.0627451 0 0 0 0 0.109804 0 0 0 0.12 0" }),
    /* @__PURE__ */ a("feBlend", { in2: "BackgroundImageFix", result: "effect1_dropShadow_4_216" }),
    /* @__PURE__ */ a("feBlend", { in: "SourceGraphic", in2: "effect1_dropShadow_4_216", result: "shape" })
  ] }) })
] }), A3 = w(P3), T3 = (e, t) => /* @__PURE__ */ b("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: [
  /* @__PURE__ */ a("g", { filter: "url(#ModuleKudos_svg__a)", children: /* @__PURE__ */ a("path", { fill: "#fff", d: "m11.895 5.955.105.082.105-.082C12.747 5.465 13.72 5 15.062 5c1.434 0 2.676.702 3.539 1.677C19.46 7.648 20 8.95 20 10.286c0 1.338-.542 2.608-1.253 3.711-.716 1.111-1.654 2.13-2.563 2.982a27.5 27.5 0 0 1-3.623 2.85l-.018.011-.006.003-.002.002a1 1 0 0 1-1.07 0L12 19c-.535.845-.536.844-.536.844h-.001l-.006-.004-.018-.012a12 12 0 0 1-.3-.198 27.48 27.48 0 0 1-3.323-2.65c-.91-.854-1.847-1.872-2.563-2.983C4.543 12.894 4 11.624 4 10.286 4 7.143 6.655 5 8.938 5c1.34 0 2.315.465 2.957.955" }) }),
  /* @__PURE__ */ a("defs", { children: /* @__PURE__ */ b("filter", { id: "ModuleKudos_svg__a", width: 20.184, height: 19.184, x: 1.908, y: 3.954, colorInterpolationFilters: "sRGB", filterUnits: "userSpaceOnUse", children: [
    /* @__PURE__ */ a("feFlood", { floodOpacity: 0, result: "BackgroundImageFix" }),
    /* @__PURE__ */ a("feColorMatrix", { in: "SourceAlpha", result: "hardAlpha", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" }),
    /* @__PURE__ */ a("feOffset", { dy: 1.046 }),
    /* @__PURE__ */ a("feGaussianBlur", { stdDeviation: 1.046 }),
    /* @__PURE__ */ a("feComposite", { in2: "hardAlpha", operator: "out" }),
    /* @__PURE__ */ a("feColorMatrix", { values: "0 0 0 0 0.0352941 0 0 0 0 0.0627451 0 0 0 0 0.109804 0 0 0 0.12 0" }),
    /* @__PURE__ */ a("feBlend", { in2: "BackgroundImageFix", result: "effect1_dropShadow_6_113" }),
    /* @__PURE__ */ a("feBlend", { in: "SourceGraphic", in2: "effect1_dropShadow_6_113", result: "shape" })
  ] }) })
] }), N3 = w(T3), D3 = (e, t) => /* @__PURE__ */ b("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: [
  /* @__PURE__ */ a("g", { filter: "url(#ModuleMyDocuments_svg__a)", children: /* @__PURE__ */ a("path", { fill: "#fff", fillRule: "evenodd", d: "M3 6.55a2.7 2.7 0 0 1 2.7-2.7h4.757A2.443 2.443 0 0 1 12.9 6.293c0 .142.115.257.257.257H17.4a3.6 3.6 0 0 1 3.6 3.6v5.4a3.6 3.6 0 0 1-3.6 3.6H6.6a3.6 3.6 0 0 1-3.6-3.6zm11.118 4.394a2.144 2.144 0 1 1-4.289 0 2.144 2.144 0 0 1 4.289 0m-2.145 2.919c-1.203 0-2.264.567-3.081 1.21-.847.668-.284 1.827.795 1.827h4.573c1.079 0 1.642-1.159.795-1.826-.817-.644-1.878-1.211-3.081-1.211", clipRule: "evenodd" }) }),
  /* @__PURE__ */ a("defs", { children: /* @__PURE__ */ b("filter", { id: "ModuleMyDocuments_svg__a", width: 21.765, height: 19.065, x: 1.117, y: 2.909, colorInterpolationFilters: "sRGB", filterUnits: "userSpaceOnUse", children: [
    /* @__PURE__ */ a("feFlood", { floodOpacity: 0, result: "BackgroundImageFix" }),
    /* @__PURE__ */ a("feColorMatrix", { in: "SourceAlpha", result: "hardAlpha", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" }),
    /* @__PURE__ */ a("feOffset", { dy: 0.941 }),
    /* @__PURE__ */ a("feGaussianBlur", { stdDeviation: 0.941 }),
    /* @__PURE__ */ a("feComposite", { in2: "hardAlpha", operator: "out" }),
    /* @__PURE__ */ a("feColorMatrix", { values: "0 0 0 0 0.0352941 0 0 0 0 0.0627451 0 0 0 0 0.109804 0 0 0 0.12 0" }),
    /* @__PURE__ */ a("feBlend", { in2: "BackgroundImageFix", result: "effect1_dropShadow_6_117" }),
    /* @__PURE__ */ a("feBlend", { in: "SourceGraphic", in2: "effect1_dropShadow_6_117", result: "shape" })
  ] }) })
] }), k3 = w(D3), E3 = (e, t) => /* @__PURE__ */ b("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 25 24", ref: t, ...e, children: [
  /* @__PURE__ */ a("g", { filter: "url(#ModuleOrganization_svg__a)", children: /* @__PURE__ */ a("path", { fill: "#fff", fillRule: "evenodd", d: "M14.506 8.99c0 .647-.124 1.265-.35 1.833a3.403 3.403 0 1 0-.977-5.21 4.94 4.94 0 0 1 1.327 3.376m-2.287 4.823c1.029-.62 2.23-1.074 3.546-1.074 2.173 0 4.037 1.239 5.32 2.422.89.818.246 2.116-.962 2.116h-3.19a2.6 2.6 0 0 0-.65-.917c-1.013-.932-2.4-1.964-4.064-2.546", clipRule: "evenodd" }) }),
  /* @__PURE__ */ a("g", { filter: "url(#ModuleOrganization_svg__b)", children: /* @__PURE__ */ a("circle", { cx: 9.545, cy: 8.989, r: 3.811, fill: "#fff" }) }),
  /* @__PURE__ */ a("g", { filter: "url(#ModuleOrganization_svg__c)", children: /* @__PURE__ */ a("path", { fill: "#fff", d: "M9.545 14.494c-2.433 0-4.52 1.387-5.958 2.712-.995.916-.275 2.37 1.078 2.37h9.761c1.353 0 2.073-1.454 1.078-2.37-1.438-1.325-3.525-2.712-5.959-2.712" }) }),
  /* @__PURE__ */ b("defs", { children: [
    /* @__PURE__ */ b("filter", { id: "ModuleOrganization_svg__a", width: 14.496, height: 18.072, x: 9.612, y: 3.116, colorInterpolationFilters: "sRGB", filterUnits: "userSpaceOnUse", children: [
      /* @__PURE__ */ a("feFlood", { floodOpacity: 0, result: "BackgroundImageFix" }),
      /* @__PURE__ */ a("feColorMatrix", { in: "SourceAlpha", result: "hardAlpha", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" }),
      /* @__PURE__ */ a("feOffset", { dy: 1.304 }),
      /* @__PURE__ */ a("feGaussianBlur", { stdDeviation: 1.304 }),
      /* @__PURE__ */ a("feComposite", { in2: "hardAlpha", operator: "out" }),
      /* @__PURE__ */ a("feColorMatrix", { values: "0 0 0 0 0.0352941 0 0 0 0 0.0627451 0 0 0 0 0.109804 0 0 0 0.12 0" }),
      /* @__PURE__ */ a("feBlend", { in2: "BackgroundImageFix", result: "effect1_dropShadow_6_234" }),
      /* @__PURE__ */ a("feBlend", { in: "SourceGraphic", in2: "effect1_dropShadow_6_234", result: "shape" })
    ] }),
    /* @__PURE__ */ b("filter", { id: "ModuleOrganization_svg__b", width: 13.462, height: 13.462, x: 2.814, y: 3.718, colorInterpolationFilters: "sRGB", filterUnits: "userSpaceOnUse", children: [
      /* @__PURE__ */ a("feFlood", { floodOpacity: 0, result: "BackgroundImageFix" }),
      /* @__PURE__ */ a("feColorMatrix", { in: "SourceAlpha", result: "hardAlpha", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" }),
      /* @__PURE__ */ a("feOffset", { dy: 1.46 }),
      /* @__PURE__ */ a("feGaussianBlur", { stdDeviation: 1.46 }),
      /* @__PURE__ */ a("feComposite", { in2: "hardAlpha", operator: "out" }),
      /* @__PURE__ */ a("feColorMatrix", { values: "0 0 0 0 0.0352941 0 0 0 0 0.0627451 0 0 0 0 0.109804 0 0 0 0.12 0" }),
      /* @__PURE__ */ a("feBlend", { in2: "BackgroundImageFix", result: "effect1_dropShadow_6_234" }),
      /* @__PURE__ */ a("feBlend", { in: "SourceGraphic", in2: "effect1_dropShadow_6_234", result: "shape" })
    ] }),
    /* @__PURE__ */ b("filter", { id: "ModuleOrganization_svg__c", width: 18.684, height: 10.921, x: 0.203, y: 13.034, colorInterpolationFilters: "sRGB", filterUnits: "userSpaceOnUse", children: [
      /* @__PURE__ */ a("feFlood", { floodOpacity: 0, result: "BackgroundImageFix" }),
      /* @__PURE__ */ a("feColorMatrix", { in: "SourceAlpha", result: "hardAlpha", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" }),
      /* @__PURE__ */ a("feOffset", { dy: 1.46 }),
      /* @__PURE__ */ a("feGaussianBlur", { stdDeviation: 1.46 }),
      /* @__PURE__ */ a("feComposite", { in2: "hardAlpha", operator: "out" }),
      /* @__PURE__ */ a("feColorMatrix", { values: "0 0 0 0 0.0352941 0 0 0 0 0.0627451 0 0 0 0 0.109804 0 0 0 0.12 0" }),
      /* @__PURE__ */ a("feBlend", { in2: "BackgroundImageFix", result: "effect1_dropShadow_6_234" }),
      /* @__PURE__ */ a("feBlend", { in: "SourceGraphic", in2: "effect1_dropShadow_6_234", result: "shape" })
    ] })
  ] })
] }), F3 = w(E3), I3 = (e, t) => /* @__PURE__ */ b("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: [
  /* @__PURE__ */ a("g", { filter: "url(#ModulePayroll_svg__a)", children: /* @__PURE__ */ a("path", { fill: "#fff", fillRule: "evenodd", d: "M6.046 4.51A3.046 3.046 0 0 0 3 7.556v6.092a3.046 3.046 0 0 0 3.046 3.045h9.137a3.046 3.046 0 0 0 3.046-3.046V7.557a3.046 3.046 0 0 0-3.046-3.046zM21 9.586a.761.761 0 1 0-1.523 0v4.57a3.807 3.807 0 0 1-3.807 3.806H8.055a.761.761 0 1 0 0 1.523h7.615a5.33 5.33 0 0 0 5.33-5.33zM10.615 6.794c.42 0 .761.341.761.762h.761a.761.761 0 0 1 0 1.523h-1.903a.38.38 0 0 0 0 .761h.761a1.904 1.904 0 0 1 .381 3.77v.038a.761.761 0 0 1-1.523 0h-.761a.761.761 0 1 1 0-1.523h1.903a.38.38 0 0 0 0-.762h-.761a1.904 1.904 0 0 1-.38-3.77v-.037c0-.42.34-.762.76-.762", clipRule: "evenodd" }) }),
  /* @__PURE__ */ a("defs", { children: /* @__PURE__ */ b("filter", { id: "ModulePayroll_svg__a", width: 21.186, height: 18.161, x: 1.407, y: 3.714, colorInterpolationFilters: "sRGB", filterUnits: "userSpaceOnUse", children: [
    /* @__PURE__ */ a("feFlood", { floodOpacity: 0, result: "BackgroundImageFix" }),
    /* @__PURE__ */ a("feColorMatrix", { in: "SourceAlpha", result: "hardAlpha", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" }),
    /* @__PURE__ */ a("feOffset", { dy: 0.796 }),
    /* @__PURE__ */ a("feGaussianBlur", { stdDeviation: 0.796 }),
    /* @__PURE__ */ a("feComposite", { in2: "hardAlpha", operator: "out" }),
    /* @__PURE__ */ a("feColorMatrix", { values: "0 0 0 0 0.0352941 0 0 0 0 0.0627451 0 0 0 0 0.109804 0 0 0 0.12 0" }),
    /* @__PURE__ */ a("feBlend", { in2: "BackgroundImageFix", result: "effect1_dropShadow_6_112" }),
    /* @__PURE__ */ a("feBlend", { in: "SourceGraphic", in2: "effect1_dropShadow_6_112", result: "shape" })
  ] }) })
] }), O3 = w(I3), V3 = (e, t) => /* @__PURE__ */ b("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 26 24", ref: t, ...e, children: [
  /* @__PURE__ */ a("g", { filter: "url(#ModulePerformance_svg__a)", children: /* @__PURE__ */ a("path", { fill: "#fff", d: "M16.333 8.667a1.333 1.333 0 0 1 0-2.667h5.334C22.403 6 23 6.597 23 7.333v5.334a1.333 1.333 0 1 1-2.667 0v-2.115l-4.97 4.97-.021.022c-.112.112-.246.246-.374.355a2 2 0 0 1-.683.394 2 2 0 0 1-1.236 0c-.31-.101-.535-.268-.683-.394a7 7 0 0 1-.374-.355l-.022-.022-2.303-2.303-4.39 4.39a1.333 1.333 0 0 1-1.886-1.885l4.579-4.58.021-.021c.113-.112.247-.246.375-.355a2 2 0 0 1 .683-.394 2 2 0 0 1 1.236 0c.31.1.535.268.683.394.128.108.262.243.374.355l.022.022 2.303 2.303 4.78-4.781z" }) }),
  /* @__PURE__ */ a("defs", { children: /* @__PURE__ */ b("filter", { id: "ModulePerformance_svg__a", width: 25.977, height: 17.977, x: 0.012, y: 4.506, colorInterpolationFilters: "sRGB", filterUnits: "userSpaceOnUse", children: [
    /* @__PURE__ */ a("feFlood", { floodOpacity: 0, result: "BackgroundImageFix" }),
    /* @__PURE__ */ a("feColorMatrix", { in: "SourceAlpha", result: "hardAlpha", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" }),
    /* @__PURE__ */ a("feOffset", { dy: 1.494 }),
    /* @__PURE__ */ a("feGaussianBlur", { stdDeviation: 1.494 }),
    /* @__PURE__ */ a("feComposite", { in2: "hardAlpha", operator: "out" }),
    /* @__PURE__ */ a("feColorMatrix", { values: "0 0 0 0 0.0352941 0 0 0 0 0.0627451 0 0 0 0 0.109804 0 0 0 0.12 0" }),
    /* @__PURE__ */ a("feBlend", { in2: "BackgroundImageFix", result: "effect1_dropShadow_6_110" }),
    /* @__PURE__ */ a("feBlend", { in: "SourceGraphic", in2: "effect1_dropShadow_6_110", result: "shape" })
  ] }) })
] }), B3 = w(V3), L3 = (e, t) => /* @__PURE__ */ b("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: [
  /* @__PURE__ */ b("g", { clipPath: "url(#ModuleProfile_svg__a)", children: [
    /* @__PURE__ */ a("g", { filter: "url(#ModuleProfile_svg__b)", children: /* @__PURE__ */ a("circle", { cx: 12, cy: 8, r: 4.5, fill: "#fff" }) }),
    /* @__PURE__ */ a("g", { filter: "url(#ModuleProfile_svg__c)", children: /* @__PURE__ */ a("path", { fill: "#fff", d: "M12 14.5c-2.873 0-5.337 1.638-7.035 3.202C3.79 18.784 4.64 20.5 6.237 20.5h11.526c1.597 0 2.447-1.716 1.272-2.798C17.338 16.138 14.874 14.5 12 14.5" }) })
  ] }),
  /* @__PURE__ */ b("defs", { children: [
    /* @__PURE__ */ b("filter", { id: "ModuleProfile_svg__b", width: 15.896, height: 15.896, x: 4.052, y: 1.776, colorInterpolationFilters: "sRGB", filterUnits: "userSpaceOnUse", children: [
      /* @__PURE__ */ a("feFlood", { floodOpacity: 0, result: "BackgroundImageFix" }),
      /* @__PURE__ */ a("feColorMatrix", { in: "SourceAlpha", result: "hardAlpha", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" }),
      /* @__PURE__ */ a("feOffset", { dy: 1.724 }),
      /* @__PURE__ */ a("feGaussianBlur", { stdDeviation: 1.724 }),
      /* @__PURE__ */ a("feComposite", { in2: "hardAlpha", operator: "out" }),
      /* @__PURE__ */ a("feColorMatrix", { values: "0 0 0 0 0.0352941 0 0 0 0 0.0627451 0 0 0 0 0.109804 0 0 0 0.12 0" }),
      /* @__PURE__ */ a("feBlend", { in2: "BackgroundImageFix", result: "effect1_dropShadow_5_37" }),
      /* @__PURE__ */ a("feBlend", { in: "SourceGraphic", in2: "effect1_dropShadow_5_37", result: "shape" })
    ] }),
    /* @__PURE__ */ b("filter", { id: "ModuleProfile_svg__c", width: 22.062, height: 12.896, x: 0.969, y: 12.776, colorInterpolationFilters: "sRGB", filterUnits: "userSpaceOnUse", children: [
      /* @__PURE__ */ a("feFlood", { floodOpacity: 0, result: "BackgroundImageFix" }),
      /* @__PURE__ */ a("feColorMatrix", { in: "SourceAlpha", result: "hardAlpha", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" }),
      /* @__PURE__ */ a("feOffset", { dy: 1.724 }),
      /* @__PURE__ */ a("feGaussianBlur", { stdDeviation: 1.724 }),
      /* @__PURE__ */ a("feComposite", { in2: "hardAlpha", operator: "out" }),
      /* @__PURE__ */ a("feColorMatrix", { values: "0 0 0 0 0.0352941 0 0 0 0 0.0627451 0 0 0 0 0.109804 0 0 0 0.12 0" }),
      /* @__PURE__ */ a("feBlend", { in2: "BackgroundImageFix", result: "effect1_dropShadow_5_37" }),
      /* @__PURE__ */ a("feBlend", { in: "SourceGraphic", in2: "effect1_dropShadow_5_37", result: "shape" })
    ] }),
    /* @__PURE__ */ a("clipPath", { id: "ModuleProfile_svg__a", children: /* @__PURE__ */ a("path", { fill: "#fff", d: "M0 0h24v24H0z" }) })
  ] })
] }), $3 = w(L3), z3 = (e, t) => /* @__PURE__ */ b("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 26 25", ref: t, ...e, children: [
  /* @__PURE__ */ a("g", { filter: "url(#ModuleProjects_svg__a)", children: /* @__PURE__ */ a("path", { fill: "#fff", fillRule: "evenodd", d: "M9 6a3 3 0 0 1 3-3h2a3 3 0 0 1 3 3h1a4 4 0 0 1 4 4v6a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4v-6a4 4 0 0 1 4-4zm-3 7v3a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-3h-5v.75c0 .69-.56 1.25-1.25 1.25h-1.5c-.69 0-1.25-.56-1.25-1.25V13zm5-7h4a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1m2 8a1 1 0 1 0 0-2 1 1 0 0 0 0 2", clipRule: "evenodd" }) }),
  /* @__PURE__ */ a("defs", { children: /* @__PURE__ */ b("filter", { id: "ModuleProjects_svg__a", width: 24.346, height: 23.346, x: 0.827, y: 1.413, colorInterpolationFilters: "sRGB", filterUnits: "userSpaceOnUse", children: [
    /* @__PURE__ */ a("feFlood", { floodOpacity: 0, result: "BackgroundImageFix" }),
    /* @__PURE__ */ a("feColorMatrix", { in: "SourceAlpha", result: "hardAlpha", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" }),
    /* @__PURE__ */ a("feOffset", { dy: 1.587 }),
    /* @__PURE__ */ a("feGaussianBlur", { stdDeviation: 1.587 }),
    /* @__PURE__ */ a("feComposite", { in2: "hardAlpha", operator: "out" }),
    /* @__PURE__ */ a("feColorMatrix", { values: "0 0 0 0 0.0352941 0 0 0 0 0.0627451 0 0 0 0 0.109804 0 0 0 0.12 0" }),
    /* @__PURE__ */ a("feBlend", { in2: "BackgroundImageFix", result: "effect1_dropShadow_6_241" }),
    /* @__PURE__ */ a("feBlend", { in: "SourceGraphic", in2: "effect1_dropShadow_6_241", result: "shape" })
  ] }) })
] }), H3 = w(z3), W3 = (e, t) => /* @__PURE__ */ b("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: [
  /* @__PURE__ */ a("g", { filter: "url(#ModuleRecruitment_svg__a)", children: /* @__PURE__ */ a("path", { fill: "#fff", fillRule: "evenodd", d: "M11.579 3.5a7.579 7.579 0 1 0 4.73 13.5l2.253 2.253a.842.842 0 0 0 1.191-1.19L17.5 15.81A7.579 7.579 0 0 0 11.578 3.5m2.32 5.65a2.15 2.15 0 1 1-4.298 0 2.15 2.15 0 0 1 4.298 0m-2.149 2.924c-1.206 0-2.27.569-3.09 1.215-.848.668-.283 1.83.798 1.83h4.584c1.081 0 1.646-1.162.797-1.83-.82-.646-1.883-1.215-3.089-1.215", clipRule: "evenodd" }) }),
  /* @__PURE__ */ a("defs", { children: /* @__PURE__ */ b("filter", { id: "ModuleRecruitment_svg__a", width: 21.578, height: 21.578, x: 1.211, y: 2.105, colorInterpolationFilters: "sRGB", filterUnits: "userSpaceOnUse", children: [
    /* @__PURE__ */ a("feFlood", { floodOpacity: 0, result: "BackgroundImageFix" }),
    /* @__PURE__ */ a("feColorMatrix", { in: "SourceAlpha", result: "hardAlpha", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" }),
    /* @__PURE__ */ a("feOffset", { dy: 1.395 }),
    /* @__PURE__ */ a("feGaussianBlur", { stdDeviation: 1.395 }),
    /* @__PURE__ */ a("feComposite", { in2: "hardAlpha", operator: "out" }),
    /* @__PURE__ */ a("feColorMatrix", { values: "0 0 0 0 0.0352941 0 0 0 0 0.0627451 0 0 0 0 0.109804 0 0 0 0.12 0" }),
    /* @__PURE__ */ a("feBlend", { in2: "BackgroundImageFix", result: "effect1_dropShadow_6_242" }),
    /* @__PURE__ */ a("feBlend", { in: "SourceGraphic", in2: "effect1_dropShadow_6_242", result: "shape" })
  ] }) })
] }), U3 = w(W3), G3 = (e, t) => /* @__PURE__ */ b("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 25", ref: t, ...e, children: [
  /* @__PURE__ */ a("g", { filter: "url(#ModuleReports_svg__a)", children: /* @__PURE__ */ a("path", { fill: "#fff", fillRule: "evenodd", d: "M10 5a2 2 0 1 1 4 0v14a2 2 0 1 1-4 0zM4 15a2 2 0 1 1 4 0v4a2 2 0 1 1-4 0zm14-6a2 2 0 0 0-2 2v8a2 2 0 1 0 4 0v-8a2 2 0 0 0-2-2", clipRule: "evenodd" }) }),
  /* @__PURE__ */ a("defs", { children: /* @__PURE__ */ b("filter", { id: "ModuleReports_svg__a", width: 20.184, height: 22.184, x: 1.908, y: 1.954, colorInterpolationFilters: "sRGB", filterUnits: "userSpaceOnUse", children: [
    /* @__PURE__ */ a("feFlood", { floodOpacity: 0, result: "BackgroundImageFix" }),
    /* @__PURE__ */ a("feColorMatrix", { in: "SourceAlpha", result: "hardAlpha", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" }),
    /* @__PURE__ */ a("feOffset", { dy: 1.046 }),
    /* @__PURE__ */ a("feGaussianBlur", { stdDeviation: 1.046 }),
    /* @__PURE__ */ a("feComposite", { in2: "hardAlpha", operator: "out" }),
    /* @__PURE__ */ a("feColorMatrix", { values: "0 0 0 0 0.0352941 0 0 0 0 0.0627451 0 0 0 0 0.109804 0 0 0 0.12 0" }),
    /* @__PURE__ */ a("feBlend", { in2: "BackgroundImageFix", result: "effect1_dropShadow_6_239" }),
    /* @__PURE__ */ a("feBlend", { in: "SourceGraphic", in2: "effect1_dropShadow_6_239", result: "shape" })
  ] }) })
] }), j3 = w(G3), K3 = (e, t) => /* @__PURE__ */ b("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: [
  /* @__PURE__ */ a("g", { filter: "url(#ModuleShifts_svg__a)", children: /* @__PURE__ */ a("path", { fill: "#fff", fillRule: "evenodd", d: "M3 7.786a3.43 3.43 0 0 1 3.429-3.429h10.285a3.43 3.43 0 0 1 3.429 3.429.857.857 0 0 1-1.714 0c0-.947-.768-1.715-1.715-1.715H6.43c-.947 0-1.715.768-1.715 1.715v6.857c0 .947.768 1.714 1.715 1.714h.857a.857.857 0 1 1 0 1.715h-.857A3.43 3.43 0 0 1 3 14.642zm2.571.857c0-.474.384-.857.858-.857h1.714a.857.857 0 0 1 0 1.714H6.429a.857.857 0 0 1-.858-.857m3.429 6a6 6 0 1 1 12 0 6 6 0 0 1-12 0m-2.571-4.286a.857.857 0 1 0 0 1.715h1.714a.857.857 0 0 0 0-1.715zm0 2.572a.857.857 0 0 0 0 1.714h.857a.857.857 0 0 0 0-1.714zM15 12.5c.473 0 .857.384.857.857v1.286l1.372 1.028a.857.857 0 0 1-1.029 1.372l-1.371-1.029a1.71 1.71 0 0 1-.686-1.371v-1.286c0-.473.384-.857.857-.857", clipRule: "evenodd" }) }),
  /* @__PURE__ */ a("defs", { children: /* @__PURE__ */ b("filter", { id: "ModuleShifts_svg__a", width: 21.586, height: 19.872, x: 1.207, y: 3.461, colorInterpolationFilters: "sRGB", filterUnits: "userSpaceOnUse", children: [
    /* @__PURE__ */ a("feFlood", { floodOpacity: 0, result: "BackgroundImageFix" }),
    /* @__PURE__ */ a("feColorMatrix", { in: "SourceAlpha", result: "hardAlpha", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" }),
    /* @__PURE__ */ a("feOffset", { dy: 0.897 }),
    /* @__PURE__ */ a("feGaussianBlur", { stdDeviation: 0.897 }),
    /* @__PURE__ */ a("feComposite", { in2: "hardAlpha", operator: "out" }),
    /* @__PURE__ */ a("feColorMatrix", { values: "0 0 0 0 0.0352941 0 0 0 0 0.0627451 0 0 0 0 0.109804 0 0 0 0.12 0" }),
    /* @__PURE__ */ a("feBlend", { in2: "BackgroundImageFix", result: "effect1_dropShadow_6_111" }),
    /* @__PURE__ */ a("feBlend", { in: "SourceGraphic", in2: "effect1_dropShadow_6_111", result: "shape" })
  ] }) })
] }), Y3 = w(K3), q3 = (e, t) => /* @__PURE__ */ b("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: [
  /* @__PURE__ */ a("g", { filter: "url(#ModuleSoftware_svg__a)", children: /* @__PURE__ */ a("path", { fill: "#fff", d: "M3 7.5a3.6 3.6 0 0 1 3.6-3.6h10.8A3.6 3.6 0 0 1 21 7.5v5.4a3.6 3.6 0 0 1-3.6 3.6h-1.8v1.8h.9a.9.9 0 0 1 0 1.8h-9a.9.9 0 1 1 0-1.8h.9v-1.8H6.6A3.6 3.6 0 0 1 3 12.9zm3.6 7.2h10.8a1.8 1.8 0 0 0 1.8-1.8V7.5a1.8 1.8 0 0 0-1.8-1.8H6.6a1.8 1.8 0 0 0-1.8 1.8v5.4a1.8 1.8 0 0 0 1.8 1.8" }) }),
  /* @__PURE__ */ a("defs", { children: /* @__PURE__ */ b("filter", { id: "ModuleSoftware_svg__a", width: 22.184, height: 20.384, x: 0.908, y: 2.854, colorInterpolationFilters: "sRGB", filterUnits: "userSpaceOnUse", children: [
    /* @__PURE__ */ a("feFlood", { floodOpacity: 0, result: "BackgroundImageFix" }),
    /* @__PURE__ */ a("feColorMatrix", { in: "SourceAlpha", result: "hardAlpha", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" }),
    /* @__PURE__ */ a("feOffset", { dy: 1.046 }),
    /* @__PURE__ */ a("feGaussianBlur", { stdDeviation: 1.046 }),
    /* @__PURE__ */ a("feComposite", { in2: "hardAlpha", operator: "out" }),
    /* @__PURE__ */ a("feColorMatrix", { values: "0 0 0 0 0.0352941 0 0 0 0 0.0627451 0 0 0 0 0.109804 0 0 0 0.12 0" }),
    /* @__PURE__ */ a("feBlend", { in2: "BackgroundImageFix", result: "effect1_dropShadow_6_235" }),
    /* @__PURE__ */ a("feBlend", { in: "SourceGraphic", in2: "effect1_dropShadow_6_235", result: "shape" })
  ] }) })
] }), X3 = w(q3), Z3 = (e, t) => /* @__PURE__ */ b("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: [
  /* @__PURE__ */ a("g", { filter: "url(#ModuleSpaces_svg__a)", children: /* @__PURE__ */ a("path", { fill: "#fff", fillRule: "evenodd", d: "M10.446 3.948a3.2 3.2 0 0 1 3.108 0l4.8 2.667A3.2 3.2 0 0 1 20 9.412v5.176a3.2 3.2 0 0 1-1.646 2.797l-4.8 2.667a3.2 3.2 0 0 1-3.108 0l-4.8-2.667A3.2 3.2 0 0 1 4 14.588V9.412a3.2 3.2 0 0 1 1.646-2.797zm2.331 1.399a1.6 1.6 0 0 0-1.554 0L6.447 8 12 11.085 17.553 8zm5.622 4.013L12.8 12.47v6.17l1.6-.889v-3.236a1.6 1.6 0 0 1 .823-1.399l.388-.215a.8.8 0 0 1 1.189.699v2.818l.777-.431a1.6 1.6 0 0 0 .823-1.4V9.36", clipRule: "evenodd" }) }),
  /* @__PURE__ */ a("defs", { children: /* @__PURE__ */ b("filter", { id: "ModuleSpaces_svg__a", width: 20.184, height: 21.093, x: 1.908, y: 2.5, colorInterpolationFilters: "sRGB", filterUnits: "userSpaceOnUse", children: [
    /* @__PURE__ */ a("feFlood", { floodOpacity: 0, result: "BackgroundImageFix" }),
    /* @__PURE__ */ a("feColorMatrix", { in: "SourceAlpha", result: "hardAlpha", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" }),
    /* @__PURE__ */ a("feOffset", { dy: 1.046 }),
    /* @__PURE__ */ a("feGaussianBlur", { stdDeviation: 1.046 }),
    /* @__PURE__ */ a("feComposite", { in2: "hardAlpha", operator: "out" }),
    /* @__PURE__ */ a("feColorMatrix", { values: "0 0 0 0 0.0352941 0 0 0 0 0.0627451 0 0 0 0 0.109804 0 0 0 0.12 0" }),
    /* @__PURE__ */ a("feBlend", { in2: "BackgroundImageFix", result: "effect1_dropShadow_6_238" }),
    /* @__PURE__ */ a("feBlend", { in: "SourceGraphic", in2: "effect1_dropShadow_6_238", result: "shape" })
  ] }) })
] }), Q3 = w(Z3), J3 = (e, t) => /* @__PURE__ */ b("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: [
  /* @__PURE__ */ b("g", { fill: "#fff", fillRule: "evenodd", clipRule: "evenodd", filter: "url(#ModuleSpending_svg__a)", children: [
    /* @__PURE__ */ a("path", { d: "M4 7.556a2.667 2.667 0 0 1 2.667-2.667h8a2.667 2.667 0 0 1 2.666 2.667v1.777c0 .491-.398.89-.889.89H6.667A2.667 2.667 0 0 1 4 7.555m2.667-.89a.889.889 0 1 0 0 1.779h8.888v-.89a.89.89 0 0 0-.889-.888z" }),
    /* @__PURE__ */ a("path", { d: "M5.778 7.556H4v8a3.556 3.556 0 0 0 3.556 3.555h8.889A3.555 3.555 0 0 0 20 15.555V12a3.556 3.556 0 0 0-3.556-3.555H5.778zM16 15.11a1.333 1.333 0 1 0 0-2.667 1.333 1.333 0 0 0 0 2.667" })
  ] }),
  /* @__PURE__ */ a("defs", { children: /* @__PURE__ */ b("filter", { id: "ModuleSpending_svg__a", width: 20.508, height: 18.73, x: 1.746, y: 3.762, colorInterpolationFilters: "sRGB", filterUnits: "userSpaceOnUse", children: [
    /* @__PURE__ */ a("feFlood", { floodOpacity: 0, result: "BackgroundImageFix" }),
    /* @__PURE__ */ a("feColorMatrix", { in: "SourceAlpha", result: "hardAlpha", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" }),
    /* @__PURE__ */ a("feOffset", { dy: 1.127 }),
    /* @__PURE__ */ a("feGaussianBlur", { stdDeviation: 1.127 }),
    /* @__PURE__ */ a("feComposite", { in2: "hardAlpha", operator: "out" }),
    /* @__PURE__ */ a("feColorMatrix", { values: "0 0 0 0 0.0352941 0 0 0 0 0.0627451 0 0 0 0 0.109804 0 0 0 0.12 0" }),
    /* @__PURE__ */ a("feBlend", { in2: "BackgroundImageFix", result: "effect1_dropShadow_6_114" }),
    /* @__PURE__ */ a("feBlend", { in: "SourceGraphic", in2: "effect1_dropShadow_6_114", result: "shape" })
  ] }) })
] }), e5 = w(J3), t5 = (e, t) => /* @__PURE__ */ b("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: [
  /* @__PURE__ */ a("g", { filter: "url(#ModuleTasks_svg__a)", children: /* @__PURE__ */ a("path", { fill: "#fff", fillRule: "evenodd", d: "M4 12a8 8 0 1 1 16 0 8 8 0 0 1-16 0m11.338-2.592a.8.8 0 0 1 .054 1.13l-4 4.4a.8.8 0 0 1-1.158.028l-1.6-1.6a.8.8 0 0 1 1.132-1.132l1.006 1.007 3.436-3.78a.8.8 0 0 1 1.13-.053", clipRule: "evenodd" }) }),
  /* @__PURE__ */ a("defs", { children: /* @__PURE__ */ b("filter", { id: "ModuleTasks_svg__a", width: 20.649, height: 20.649, x: 1.676, y: 2.838, colorInterpolationFilters: "sRGB", filterUnits: "userSpaceOnUse", children: [
    /* @__PURE__ */ a("feFlood", { floodOpacity: 0, result: "BackgroundImageFix" }),
    /* @__PURE__ */ a("feColorMatrix", { in: "SourceAlpha", result: "hardAlpha", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" }),
    /* @__PURE__ */ a("feOffset", { dy: 1.162 }),
    /* @__PURE__ */ a("feGaussianBlur", { stdDeviation: 1.162 }),
    /* @__PURE__ */ a("feComposite", { in2: "hardAlpha", operator: "out" }),
    /* @__PURE__ */ a("feColorMatrix", { values: "0 0 0 0 0.0352941 0 0 0 0 0.0627451 0 0 0 0 0.109804 0 0 0 0.12 0" }),
    /* @__PURE__ */ a("feBlend", { in2: "BackgroundImageFix", result: "effect1_dropShadow_5_99" }),
    /* @__PURE__ */ a("feBlend", { in: "SourceGraphic", in2: "effect1_dropShadow_5_99", result: "shape" })
  ] }) })
] }), n5 = w(t5), r5 = (e, t) => /* @__PURE__ */ b("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 25", ref: t, ...e, children: [
  /* @__PURE__ */ a("g", { filter: "url(#ModuleTimeOff_svg__a)", children: /* @__PURE__ */ a("path", { fill: "#fff", fillRule: "evenodd", d: "M8.907 3.573c-1.102-.007-2.253.416-2.734 1.31a.89.89 0 0 0 .089.974l1.043 1.305C4.51 7.693 3.036 9.572 3 11.328c-.01.517.41.906.888.906h1.418a4.7 4.7 0 0 0-.244 3.477.888.888 0 0 0 1.244.524l3.222-1.61-.343 4.116H7.921a.843.843 0 0 0 0 1.686h8.158a.843.843 0 0 0 0-1.686h-1.264l-.343-4.117 3.222 1.611a.888.888 0 0 0 1.244-.524 4.7 4.7 0 0 0-.244-3.477h1.418a.89.89 0 0 0 .888-.906c-.036-1.757-1.51-3.635-4.305-4.166l1.043-1.305a.89.89 0 0 0 .09-.974c-.482-.894-1.633-1.317-2.735-1.31-.98.007-2.08.338-3.093 1.123-1.013-.785-2.112-1.116-3.093-1.123m3.8 10.169L12 13.388l-.707.354-.417 5h2.248z", clipRule: "evenodd" }) }),
  /* @__PURE__ */ a("defs", { children: /* @__PURE__ */ b("filter", { id: "ModuleTimeOff_svg__a", width: 23.811, height: 22.665, x: 0.095, y: 2.12, colorInterpolationFilters: "sRGB", filterUnits: "userSpaceOnUse", children: [
    /* @__PURE__ */ a("feFlood", { floodOpacity: 0, result: "BackgroundImageFix" }),
    /* @__PURE__ */ a("feColorMatrix", { in: "SourceAlpha", result: "hardAlpha", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" }),
    /* @__PURE__ */ a("feOffset", { dy: 1.453 }),
    /* @__PURE__ */ a("feGaussianBlur", { stdDeviation: 1.453 }),
    /* @__PURE__ */ a("feComposite", { in2: "hardAlpha", operator: "out" }),
    /* @__PURE__ */ a("feColorMatrix", { values: "0 0 0 0 0.0352941 0 0 0 0 0.0627451 0 0 0 0 0.109804 0 0 0 0.12 0" }),
    /* @__PURE__ */ a("feBlend", { in2: "BackgroundImageFix", result: "effect1_dropShadow_5_100" }),
    /* @__PURE__ */ a("feBlend", { in: "SourceGraphic", in2: "effect1_dropShadow_5_100", result: "shape" })
  ] }) })
] }), o5 = w(r5), a5 = (e, t) => /* @__PURE__ */ b("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: [
  /* @__PURE__ */ a("g", { filter: "url(#ModuleTimeTracking_svg__a)", children: /* @__PURE__ */ a("path", { fill: "#fff", fillRule: "evenodd", d: "M8.85 2.05a.9.9 0 1 0 0 1.8h2.25v.95a8.101 8.101 0 1 0 1.8 0v-.95h2.25a.9.9 0 1 0 0-1.8zM6.336 5.836a.9.9 0 0 0-1.272-1.272l-1.8 1.8a.9.9 0 0 0 1.272 1.272zm12.6-1.272a.9.9 0 0 0-1.272 1.272l1.8 1.8a.9.9 0 0 0 1.272-1.272zM12.9 9.7a.9.9 0 0 0-1.8 0v2.628a1.8 1.8 0 0 0 .907 1.563l2.697 1.54a.9.9 0 1 0 .893-1.562L12.9 12.328z", clipRule: "evenodd" }) }),
  /* @__PURE__ */ a("defs", { children: /* @__PURE__ */ b("filter", { id: "ModuleTimeTracking_svg__a", width: 21.765, height: 22.666, x: 1.117, y: 1.109, colorInterpolationFilters: "sRGB", filterUnits: "userSpaceOnUse", children: [
    /* @__PURE__ */ a("feFlood", { floodOpacity: 0, result: "BackgroundImageFix" }),
    /* @__PURE__ */ a("feColorMatrix", { in: "SourceAlpha", result: "hardAlpha", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" }),
    /* @__PURE__ */ a("feOffset", { dy: 0.941 }),
    /* @__PURE__ */ a("feGaussianBlur", { stdDeviation: 0.941 }),
    /* @__PURE__ */ a("feComposite", { in2: "hardAlpha", operator: "out" }),
    /* @__PURE__ */ a("feColorMatrix", { values: "0 0 0 0 0.0352941 0 0 0 0 0.0627451 0 0 0 0 0.109804 0 0 0 0.12 0" }),
    /* @__PURE__ */ a("feBlend", { in2: "BackgroundImageFix", result: "effect1_dropShadow_6_115" }),
    /* @__PURE__ */ a("feBlend", { in: "SourceGraphic", in2: "effect1_dropShadow_6_115", result: "shape" })
  ] }) })
] }), i5 = w(a5), s5 = (e, t) => /* @__PURE__ */ b("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 25", ref: t, ...e, children: [
  /* @__PURE__ */ a("g", { filter: "url(#ModuleTrainings_svg__a)", children: /* @__PURE__ */ a("path", { fill: "#fff", d: "M12 6.83C10.748 6.076 9.515 5.3 8.277 5.3c-1.414 0-2.715.547-3.943 1.53A.89.89 0 0 0 4 7.524v8.373c0 .765.464 1.328.998 1.615.524.282 1.198.35 1.81.094 1.354-.569 2.815-.38 4.698.88.299.199.689.199.988 0 1.883-1.26 3.344-1.449 4.699-.88.61.256 1.285.188 1.81-.094.533-.287.997-.85.997-1.615V7.524a.89.89 0 0 0-.334-.694c-1.228-.983-2.529-1.53-3.943-1.53-1.239 0-2.471.776-3.723 1.53" }) }),
  /* @__PURE__ */ a("defs", { children: /* @__PURE__ */ b("filter", { id: "ModuleTrainings_svg__a", width: 23.758, height: 21.093, x: 0.121, y: 3.361, colorInterpolationFilters: "sRGB", filterUnits: "userSpaceOnUse", children: [
    /* @__PURE__ */ a("feFlood", { floodOpacity: 0, result: "BackgroundImageFix" }),
    /* @__PURE__ */ a("feColorMatrix", { in: "SourceAlpha", result: "hardAlpha", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" }),
    /* @__PURE__ */ a("feOffset", { dy: 1.939 }),
    /* @__PURE__ */ a("feGaussianBlur", { stdDeviation: 1.939 }),
    /* @__PURE__ */ a("feComposite", { in2: "hardAlpha", operator: "out" }),
    /* @__PURE__ */ a("feColorMatrix", { values: "0 0 0 0 0.0352941 0 0 0 0 0.0627451 0 0 0 0 0.109804 0 0 0 0.12 0" }),
    /* @__PURE__ */ a("feBlend", { in2: "BackgroundImageFix", result: "effect1_dropShadow_1_4" }),
    /* @__PURE__ */ a("feBlend", { in: "SourceGraphic", in2: "effect1_dropShadow_1_4", result: "shape" })
  ] }) })
] }), l5 = w(s5), c5 = (e, t) => /* @__PURE__ */ b("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: [
  /* @__PURE__ */ a("g", { filter: "url(#ModuleWorkflows_svg__a)", children: /* @__PURE__ */ a("path", { fill: "#fff", d: "M18.42 4.455a1.125 1.125 0 0 0-1.59 1.59l.329.33h-3.85A4.5 4.5 0 0 0 9.491 8.49l-.83 1.328a2.25 2.25 0 0 1-1.908 1.057H4.125a1.125 1.125 0 0 0 0 2.25h2.63c.775 0 1.496.4 1.907 1.057l.83 1.328a4.5 4.5 0 0 0 3.816 2.115h3.851l-.33.33a1.125 1.125 0 0 0 1.592 1.59l2.25-2.25c.439-.439.439-1.151 0-1.59l-2.25-2.25a1.125 1.125 0 0 0-1.591 1.59l.329.33h-3.85a2.25 2.25 0 0 1-1.909-1.057l-.83-1.328a4.5 4.5 0 0 0-.839-.99c.322-.284.606-.616.84-.99l.83-1.328a2.25 2.25 0 0 1 1.907-1.057h3.851l-.33.33a1.125 1.125 0 0 0 1.592 1.59l2.25-2.25c.439-.439.439-1.151 0-1.59z" }) }),
  /* @__PURE__ */ a("defs", { children: /* @__PURE__ */ b("filter", { id: "ModuleWorkflows_svg__a", width: 22.707, height: 20.457, x: 0.647, y: 2.948, colorInterpolationFilters: "sRGB", filterUnits: "userSpaceOnUse", children: [
    /* @__PURE__ */ a("feFlood", { floodOpacity: 0, result: "BackgroundImageFix" }),
    /* @__PURE__ */ a("feColorMatrix", { in: "SourceAlpha", result: "hardAlpha", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" }),
    /* @__PURE__ */ a("feOffset", { dy: 1.177 }),
    /* @__PURE__ */ a("feGaussianBlur", { stdDeviation: 1.177 }),
    /* @__PURE__ */ a("feComposite", { in2: "hardAlpha", operator: "out" }),
    /* @__PURE__ */ a("feColorMatrix", { values: "0 0 0 0 0.0352941 0 0 0 0 0.0627451 0 0 0 0 0.109804 0 0 0 0.12 0" }),
    /* @__PURE__ */ a("feBlend", { in2: "BackgroundImageFix", result: "effect1_dropShadow_6_240" }),
    /* @__PURE__ */ a("feBlend", { in: "SourceGraphic", in2: "effect1_dropShadow_6_240", result: "shape" })
  ] }) })
] }), u5 = w(c5), d5 = (e, t) => /* @__PURE__ */ a("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: /* @__PURE__ */ a("path", { fill: "currentColor", d: "M11.612 4.078a1 1 0 0 1 .776 0l9.5 4a1 1 0 0 1 0 1.844L20 10.717V16a1 1 0 0 1-.606.92l-7 3a1 1 0 0 1-.788 0l-7-3A1 1 0 0 1 4 16v-5.283l-1.888-.795a1 1 0 0 1 0-1.844zM17 11.98v1.52a1 1 0 1 1-2 0v-.678l-2.612 1.1a1 1 0 0 1-.776 0L6 11.559v3.782l6 2.571 6-2.571v-3.782zm-.621-1.909L18.923 9 12 6.085 5.077 9 12 11.915l1.951-.821-2.398-1.2a1 1 0 1 1 .894-1.788z" }) }), f5 = w(d5), h5 = (e, t) => /* @__PURE__ */ a("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: /* @__PURE__ */ a("path", { fill: "currentColor", d: "M12 4a1 1 0 0 1 1 1v6h6a1 1 0 1 1 0 2h-6v6a1 1 0 1 1-2 0v-6H5a1 1 0 1 1 0-2h6V5a1 1 0 0 1 1-1" }) }), p5 = w(h5), m5 = (e, t) => /* @__PURE__ */ a("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: /* @__PURE__ */ a("path", { fill: "currentColor", d: "M10 5a1 1 0 0 1 1 1c0 3.464 2.378 6 5 6a1 1 0 1 1 0 2c-2.622 0-5 2.536-5 6a1 1 0 1 1-2 0c0-3.464-2.378-6-5-6a1 1 0 1 1 0-2c2.622 0 5-2.536 5-6a1 1 0 0 1 1-1m0 5.118C9.375 11.31 8.484 12.313 7.405 13c1.079.687 1.97 1.69 2.595 2.882.625-1.192 1.516-2.195 2.595-2.882-1.079-.687-1.97-1.69-2.595-2.882M17.5 3a1 1 0 0 1 1 1A1.5 1.5 0 0 0 20 5.5a1 1 0 1 1 0 2A1.5 1.5 0 0 0 18.5 9a1 1 0 1 1-2 0A1.5 1.5 0 0 0 15 7.5a1 1 0 1 1 0-2A1.5 1.5 0 0 0 16.5 4a1 1 0 0 1 1-1" }) }), v5 = w(m5), g5 = (e, t) => /* @__PURE__ */ b("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: [
  /* @__PURE__ */ a("path", { fill: "currentColor", d: "M11.033 8.06a.97.97 0 1 1 1.935 0l-.303 3.9a.667.667 0 0 1-1.33 0zM13 15a1 1 0 1 1-2 0 1 1 0 0 1 2 0" }),
  /* @__PURE__ */ a("path", { fill: "currentColor", d: "M12 18a6 6 0 1 1 0-12 6 6 0 0 1 0 12m0 2a8 8 0 1 0 0-16 8 8 0 0 0 0 16" })
] }), w5 = w(g5), y5 = (e, t) => /* @__PURE__ */ a("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: /* @__PURE__ */ a("path", { fill: "currentColor", d: "M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16m-.967-11.94a.97.97 0 1 1 1.935 0l-.303 3.9a.667.667 0 0 1-1.33 0zM13 15a1 1 0 1 1-2 0 1 1 0 0 1 2 0" }) }), x5 = w(y5), b5 = (e, t) => /* @__PURE__ */ b("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: [
  /* @__PURE__ */ a("path", { fill: "currentColor", d: "M11 16a1 1 0 1 1 2 0 1 1 0 0 1-2 0M12 9a1 1 0 0 0-1 1v3a1 1 0 1 0 2 0v-3a1 1 0 0 0-1-1" }),
  /* @__PURE__ */ a("path", { fill: "currentColor", fillRule: "evenodd", d: "M9.385 5.609c1.147-2.04 4.083-2.04 5.23 0l5.58 9.92c1.125 2-.32 4.471-2.615 4.471H6.42c-2.295 0-3.74-2.471-2.615-4.47zm3.486.98a1 1 0 0 0-1.743 0l-5.58 9.92A1 1 0 0 0 6.42 18h11.16a1 1 0 0 0 .872-1.49z", clipRule: "evenodd" })
] }), C5 = w(b5), M5 = (e, t) => /* @__PURE__ */ a("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: /* @__PURE__ */ a("path", { fill: "currentColor", d: "M12 5c.848 0 1.52.715 1.467 1.561l-.469 7.501a1 1 0 0 1-1.996 0l-.469-7.5A1.47 1.47 0 0 1 12 5M13.5 17.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" }) }), S5 = w(M5), R5 = (e, t) => /* @__PURE__ */ a("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: /* @__PURE__ */ a("path", { fill: "currentColor", d: "M4 8a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1M4 12a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1M8 16a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2H9a1 1 0 0 1-1-1" }) }), _5 = w(R5), P5 = (e, t) => /* @__PURE__ */ a("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: /* @__PURE__ */ a("path", { fill: "currentColor", d: "M4 8a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1M4 12a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1M4 16a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1" }) }), $c = w(P5), A5 = (e, t) => /* @__PURE__ */ a("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: /* @__PURE__ */ a("path", { fill: "currentColor", d: "M4 8a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1M4 12a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1M4 16a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1" }) }), T5 = w(A5), N5 = (e, t) => /* @__PURE__ */ a("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: /* @__PURE__ */ a("path", { fill: "currentColor", d: "M4 8a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1M4 12a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1M12 16a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2h-6a1 1 0 0 1-1-1" }) }), D5 = w(N5), k5 = (e, t) => /* @__PURE__ */ a("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: /* @__PURE__ */ a("path", { fill: "currentColor", d: "M20 12a8 8 0 1 1-16 0 8 8 0 0 1 16 0m-8-6a6 6 0 1 0 0 12z" }) }), E5 = w(k5), F5 = (e, t) => /* @__PURE__ */ b("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: [
  /* @__PURE__ */ a("path", { fill: "currentColor", d: "M20.616 5.868a2 2 0 0 0-2.232-1.736L4.368 5.884a2 2 0 0 0-1.736 2.232l.252 2.016c.09.716.547 1.296 1.16 1.574A1 1 0 0 0 4 12v3a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4v-3a1 1 0 1 0-2 0v3a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-3q0-.123-.029-.239l13.16-1.645a2 2 0 0 0 1.737-2.232zm-16 2 14.016-1.752.252 2.016L4.868 9.884z" }),
  /* @__PURE__ */ a("path", { fill: "currentColor", d: "M9 14a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2h-4a1 1 0 0 1-1-1" })
] }), I5 = w(F5), O5 = (e, t) => /* @__PURE__ */ b("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: [
  /* @__PURE__ */ a("path", { fill: "currentColor", d: "M5 5a2 2 0 0 0-2 2v2a2 2 0 0 0 1 1.732V15a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4v-4.268A2 2 0 0 0 21 9V7a2 2 0 0 0-2-2zm13 6v4a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-4zM5 9V7h14v2z" }),
  /* @__PURE__ */ a("path", { fill: "currentColor", d: "M9 14a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2h-4a1 1 0 0 1-1-1" })
] }), V5 = w(O5), B5 = (e, t) => /* @__PURE__ */ a("svg", { width: "192", height: "192", viewBox: "0 0 192 192", ref: t, ...e, fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ a("path", { d: "M154.5 34.5C156.157 34.5 157.5 35.8431 157.5 37.5C157.5 39.1569 156.157 40.5 154.5 40.5C153.414 40.5 152.464 39.9234 151.937 39.0598C151.889 38.9657 151.839 38.8727 151.786 38.7809C151.603 38.3924 151.5 37.9582 151.5 37.5C151.5 35.8431 152.843 34.5 154.5 34.5ZM139.5 37.5C139.5 38.5682 139.612 39.6104 139.824 40.6155L117.905 68.0133C116.66 67.6785 115.351 67.5 114 67.5C110.099 67.5 106.546 68.9892 103.878 71.4302L88.4996 64.5968L88.4999 64.5C88.4999 56.2157 81.7842 49.5 73.4999 49.5C65.2157 49.5 58.4999 56.2157 58.4999 64.5C58.4999 65.1326 58.5391 65.756 58.6151 66.368L36 79.5556V30C36 26.6863 33.3137 24 29.9999 24C26.6862 24 23.9999 26.6863 23.9999 30V89.8974C23.9986 89.9695 23.9986 90.0416 23.9999 90.1139V143.874C23.9981 143.961 23.9981 144.047 23.9999 144.134V165C23.9999 168.314 26.6862 171 29.9999 171H165C168.314 171 171 168.314 171 165C171 161.686 168.314 159 165 159H36V147.804L54.7959 138.939C57.4117 141.16 60.7993 142.5 64.4999 142.5C70.6509 142.5 75.9371 138.798 78.2518 133.5H95.7481C98.0628 138.798 103.349 142.5 109.5 142.5C117.784 142.5 124.5 135.784 124.5 127.5C124.5 127.017 124.477 126.54 124.433 126.069L143.673 115.381C146.403 118.228 150.244 120 154.5 120C162.784 120 169.5 113.284 169.5 105C169.5 96.7157 162.784 90 154.5 90C146.568 90 140.074 96.1567 139.536 103.952L118.605 115.579C116.08 113.647 112.924 112.5 109.5 112.5C103.349 112.5 98.0628 116.202 95.7481 121.5H78.2518C75.9371 116.202 70.6509 112.5 64.4999 112.5C56.2157 112.5 49.4999 119.216 49.4999 127.5C49.4999 127.722 49.5048 127.942 49.5143 128.162L36 134.536V93.4468L64.7476 76.6832C67.2108 78.4559 70.2335 79.5 73.4999 79.5C77.4042 79.5 80.9601 78.0083 83.6288 75.5638L99.0003 82.3943L98.9999 82.5C98.9999 90.7843 105.716 97.5 114 97.5C122.284 97.5 129 90.7843 129 82.5C129 79.9758 128.376 77.5971 127.275 75.5098L147.199 50.6062C149.36 51.8125 151.849 52.5 154.5 52.5C162.784 52.5 169.5 45.7843 169.5 37.5C169.5 29.2157 162.784 22.5 154.5 22.5C146.216 22.5 139.5 29.2157 139.5 37.5ZM67.4999 127.5C67.4999 129.157 66.1568 130.5 64.4999 130.5C62.8431 130.5 61.4999 129.157 61.4999 127.5C61.4999 125.843 62.8431 124.5 64.4999 124.5C66.1568 124.5 67.4999 125.843 67.4999 127.5ZM111.222 81.3655L111.262 81.2772L111.297 81.1973C111.782 80.1929 112.81 79.5 114 79.5C115.657 79.5 117 80.8431 117 82.5C117 84.1569 115.657 85.5 114 85.5C112.343 85.5 111 84.1569 111 82.5C111 82.0985 111.079 81.7155 111.222 81.3655ZM70.9109 66.0164C70.6497 65.5714 70.4999 65.0532 70.4999 64.5C70.4999 62.8431 71.8431 61.5 73.4999 61.5C75.1568 61.5 76.4999 62.8431 76.4999 64.5C76.4999 66.1569 75.1568 67.5 73.4999 67.5C72.4181 67.5 71.4699 66.9273 70.9422 66.0685L70.9109 66.0164ZM109.5 130.5C107.843 130.5 106.5 129.157 106.5 127.5C106.5 125.843 107.843 124.5 109.5 124.5C111.157 124.5 112.5 125.843 112.5 127.5C112.5 129.157 111.157 130.5 109.5 130.5ZM151.662 105.976C151.632 105.843 151.596 105.711 151.556 105.579C151.519 105.392 151.5 105.198 151.5 105C151.5 103.343 152.843 102 154.5 102C156.157 102 157.5 103.343 157.5 105C157.5 106.657 156.157 108 154.5 108C153.185 108 152.067 107.154 151.662 105.976Z", fill: "#F5A51C", fillOpacity: "0.05" }) }), zc = w(B5), L5 = (e, t) => /* @__PURE__ */ a("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: /* @__PURE__ */ a("path", { fill: "currentColor", d: "M11.707 5.293a1 1 0 0 0-1.414 0l-6 6a1 1 0 0 0 0 1.414l6 6a1 1 0 0 0 1.414-1.414L7.414 13H19a1 1 0 1 0 0-2H7.414l4.293-4.293a1 1 0 0 0 0-1.414" }) }), $5 = w(L5), z5 = (e, t) => /* @__PURE__ */ a("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: /* @__PURE__ */ a("path", { fill: "currentColor", d: "M12.293 5.293a1 1 0 0 1 1.414 0l6 6a1 1 0 0 1 0 1.414l-6 6a1 1 0 0 1-1.414-1.414L16.586 13H5a1 1 0 1 1 0-2h11.586l-4.293-4.293a1 1 0 0 1 0-1.414" }) }), H5 = w(z5), W5 = (e, t) => /* @__PURE__ */ a("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: /* @__PURE__ */ a("path", { fill: "currentColor", d: "M17 11a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7M7.5 8.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3M11 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0M4.02 12.443a1 1 0 0 1 1.067-.927l13.966.976a1 1 0 1 1-.14 1.995L13 14.074V18h1a1 1 0 1 1 0 2h-4a1 1 0 1 1 0-2h1v-4q0-.033.002-.066l-6.055-.423a1 1 0 0 1-.928-1.068" }) }), U5 = w(W5), G5 = (e, t) => /* @__PURE__ */ a("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: /* @__PURE__ */ a("path", { fill: "currentColor", d: "M9.097 17.255a1 1 0 0 1 1.412.078c.367.41.899.667 1.49.667.593 0 1.124-.256 1.492-.667a1 1 0 1 1 1.49 1.334A4 4 0 0 1 12 20a4 4 0 0 1-2.981-1.333 1 1 0 0 1 .078-1.412M12 5a4 4 0 0 0-4 4v.726c0 .44-.175.863-.487 1.175l-.774.774A1.362 1.362 0 0 0 7.702 14h8.596a1.362 1.362 0 0 0 .963-2.325l-.774-.774A1.66 1.66 0 0 1 16 9.726V9a4 4 0 0 0-4-4M6 9a6 6 0 1 1 12 0v.586l.675.675A3.362 3.362 0 0 1 16.297 16H7.702a3.362 3.362 0 0 1-2.377-5.74L6 9.587z" }) }), j5 = w(G5), K5 = (e, t) => /* @__PURE__ */ a("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: /* @__PURE__ */ a("path", { fill: "currentColor", fillRule: "evenodd", d: "M9 4a3.5 3.5 0 0 0-3.5 3.5v9A3.5 3.5 0 0 0 9 20h6v-.003c2.715-.084 5-2.227 5-4.997 0-2.194-1.434-3.994-3.379-4.69A4.5 4.5 0 0 0 12.5 4zm3.5 6a1.5 1.5 0 0 0 0-3H9a.5.5 0 0 0-.5.5V10zm-4 3h6.333c1.263 0 2.167.96 2.167 2s-.904 2-2.167 2H9a.5.5 0 0 1-.5-.5z", clipRule: "evenodd" }) }), Y5 = w(K5), q5 = (e, t) => /* @__PURE__ */ a("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: /* @__PURE__ */ a("path", { fill: "currentColor", d: "M11 2a3 3 0 0 0-3 3H7a4 4 0 0 0-4 4v6a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4V9a4 4 0 0 0-4-4h-1a3 3 0 0 0-3-3zm3 3h-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1M5 9a2 2 0 0 1 2-2v10a2 2 0 0 1-2-2zm4 8V7h6v10zm8 0V7a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2" }) }), Hc = w(q5), X5 = (e, t) => /* @__PURE__ */ b("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: [
  /* @__PURE__ */ a("path", { fill: "currentColor", d: "M7.954 4.276q.134-.237.34-.445c.858-.857 2.128-.712 3.082-.372 1.034.37 2.14 1.103 3.117 2.08s1.712 2.084 2.083 3.12c.342.953.492 2.227-.367 3.086a2 2 0 0 1-.409.32l-5.272 3.954a4.5 4.5 0 0 1-5.882-.418l-.152-.153a4.5 4.5 0 0 1-.447-5.843zm1.782.952-.057.077a.6.6 0 0 0-.022.144c-.01.176.025.442.15.791.249.698.794 1.56 1.61 2.375.815.816 1.68 1.364 2.38 1.615.35.125.618.162.795.152a.6.6 0 0 0 .151-.025l.067-.05.005-.012a.5.5 0 0 0 .03-.166c.01-.178-.026-.445-.152-.796-.25-.7-.798-1.564-1.614-2.38s-1.677-1.361-2.375-1.61c-.35-.125-.615-.16-.792-.15a.5.5 0 0 0-.176.035m2.92 6.695c-.896-.406-1.822-1.062-2.654-1.893-.819-.82-1.467-1.73-1.872-2.611l-2.47 3.369a2.5 2.5 0 0 0 .248 3.246l.153.153a2.5 2.5 0 0 0 3.267.232z" }),
  /* @__PURE__ */ a("path", { fill: "currentColor", fillRule: "evenodd", d: "M17.5 15.063a8 8 0 0 0-.402.616c-.358.616-.598 1.256-.598 1.821a1 1 0 1 0 2 0c0-.565-.24-1.205-.598-1.82a8 8 0 0 0-.402-.617m-.913-2.051a1.226 1.226 0 0 1 1.826 0c.267.297.773.898 1.218 1.662.435.748.869 1.75.869 2.826a3 3 0 0 1-6 0c0-1.076.434-2.078.87-2.826.444-.764.95-1.365 1.217-1.662", clipRule: "evenodd" })
] }), Z5 = w(X5), Q5 = (e, t) => /* @__PURE__ */ a("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: /* @__PURE__ */ a("path", { fill: "currentColor", d: "M4.77 8.452a1 1 0 0 1 .273-.908l2-2a1 1 0 0 1 .871-.28l5.493.916 2.136-2.136a3.121 3.121 0 1 1 4.414 4.414l-2.136 2.137.915 5.492a1 1 0 0 1-.279.871l-2 2a1 1 0 0 1-1.636-.335l-1.436-3.592-1.635 1.635v1.585a1 1 0 0 1-.293.707l-2 2a1 1 0 0 1-1.677-.464l-.855-3.418-3.418-.855a1 1 0 0 1-.464-1.677l2-2a1 1 0 0 1 .707-.293h1.586l1.635-1.634L5.379 9.18a1 1 0 0 1-.609-.728m2.76-.566 3.591 1.437a1 1 0 0 1 .336 1.635l-3 3a1 1 0 0 1-.707.293H6.164l-.458.459 2.287.571a1 1 0 0 1 .727.728l.572 2.286.458-.458v-1.586a1 1 0 0 1 .293-.707l3-3a1 1 0 0 1 1.636.336l1.436 3.592.564-.564-.915-5.492a1 1 0 0 1 .279-.872l2.5-2.5a1.121 1.121 0 0 0-1.586-1.586l-2.5 2.5a1 1 0 0 1-.871.28l-5.493-.916z" }) }), J5 = w(Q5), eg = (e, t) => /* @__PURE__ */ a("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: /* @__PURE__ */ a("path", { fill: "currentColor", d: "M9 3a4 4 0 0 0-4 4v10a4 4 0 0 0 4 4h6a4 4 0 0 0 4-4V7a4 4 0 0 0-4-4zM7 7a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2zm0 2h2v2H7zm0 6v-2h2v2zm0 2h2v2a2 2 0 0 1-2-2m4 0h2v2h-2zm2-2h-2v-2h2zm2 4v-6h2v4a2 2 0 0 1-2 2m0-8V9h2v2zm-4 0V9h2v2z" }) }), tg = w(eg), ng = (e, t) => /* @__PURE__ */ a("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: /* @__PURE__ */ a("path", { fill: "currentColor", d: "M9 2a1 1 0 0 1 1 1v1h4V3a1 1 0 1 1 2 0v1a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4V8a4 4 0 0 1 4-4V3a1 1 0 0 1 1-1M8 6a2 2 0 0 0-2 2v1h12V8a2 2 0 0 0-2-2v1a1 1 0 1 1-2 0V6h-4v1a1 1 0 0 1-2 0zm10 5H6v5a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2z" }) }), rg = w(ng), og = (e, t) => /* @__PURE__ */ b("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: [
  /* @__PURE__ */ a("path", { fill: "currentColor", d: "M7.368 5.735A4 4 0 0 1 11.162 3H14a1 1 0 1 1 0 2h-2.838a2 2 0 0 0-1.897 1.368l-.088.264A2 2 0 0 1 7.279 8H7a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-5a1 1 0 1 1 2 0v5a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4v-5a4 4 0 0 1 4-4h.28z" }),
  /* @__PURE__ */ a("path", { fill: "currentColor", d: "M12 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-4 2a4 4 0 1 1 8 0 4 4 0 0 1-8 0M17.5 4a1 1 0 0 1 1 1v.5h.5a1 1 0 1 1 0 2h-.5V8a1 1 0 1 1-2 0v-.5H16a1 1 0 1 1 0-2h.5V5a1 1 0 0 1 1-1" })
] }), ag = w(og), ig = (e, t) => /* @__PURE__ */ b("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: [
  /* @__PURE__ */ a("path", { fill: "currentColor", d: "M3 9a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v6a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4zm4-2a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z" }),
  /* @__PURE__ */ a("path", { fill: "currentColor", d: "M9 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0M13 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0M17 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0" })
] }), sg = w(ig), lg = (e, t) => /* @__PURE__ */ a("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: /* @__PURE__ */ a("path", { fill: "currentColor", d: "M4 5a1 1 0 0 1 1 1v4.773l2.836-2.52a1 1 0 0 1 .939-.215l2.971.85 4.09-3.635a1 1 0 0 1 1.315-.012l3.5 3a1 1 0 0 1-1.302 1.518l-2.837-2.432-3.848 3.42a1 1 0 0 1-.939.214l-2.971-.848L5 13.449V15c0 .316.073.616.204.882l3.089-3.09a1 1 0 0 1 1.203-.16l2.882 1.646 3.464-3.03a1 1 0 0 1 1.24-.062l3.5 2.5a1 1 0 1 1-1.163 1.628l-2.856-2.04-3.404 2.979a1 1 0 0 1-1.155.115l-2.837-1.62-2.251 2.25L7 17h13a1 1 0 1 1 0 2H7a4 4 0 0 1-4-4V6a1 1 0 0 1 1-1" }) }), cg = w(lg), ug = (e, t) => /* @__PURE__ */ b("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: [
  /* @__PURE__ */ a("path", { fill: "currentColor", d: "M12 18a6 6 0 1 1 0-12 6 6 0 0 1 0 12m0 2a8 8 0 1 0 0-16 8 8 0 0 0 0 16" }),
  /* @__PURE__ */ a("path", { fill: "currentColor", d: "M15.1 9.2a1 1 0 0 1 .2 1.4l-3 4a1 1 0 0 1-1.507.107l-2-2a1 1 0 1 1 1.414-1.414l1.185 1.185L13.7 9.4a1 1 0 0 1 1.4-.2" })
] }), dg = w(ug), fg = (e, t) => /* @__PURE__ */ a("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: /* @__PURE__ */ a("path", { fill: "currentColor", d: "M20 12a8 8 0 1 1-16 0 8 8 0 0 1 16 0m-3.2-2.4a1 1 0 1 0-1.6-1.2l-3.808 5.078-2.185-2.185a1 1 0 1 0-1.414 1.414l3 3A1 1 0 0 0 12.3 15.6z" }) }), Wc = w(fg), hg = (e, t) => /* @__PURE__ */ a("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: /* @__PURE__ */ a("path", { fill: "currentColor", d: "M20.1 7.2a1 1 0 0 1 .2 1.4l-7.5 10a1 1 0 0 1-1.6-1.2l7.5-10a1 1 0 0 1 1.4-.2M16.093 6.695a1 1 0 0 1 .212 1.398l-6.31 8.564a2 2 0 0 1-3.024.228l-3.178-3.178a1 1 0 1 1 1.414-1.414l3.178 3.178 6.31-8.564a1 1 0 0 1 1.398-.212" }) }), pg = w(hg), mg = (e, t) => /* @__PURE__ */ a("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: /* @__PURE__ */ a("path", { fill: "currentColor", d: "M18.093 7.695a1 1 0 0 1 .212 1.398l-6.31 8.564a2 2 0 0 1-3.024.228l-3.678-3.678a1 1 0 1 1 1.414-1.414l3.678 3.678 6.31-8.564a1 1 0 0 1 1.398-.212" }) }), vg = w(mg), gg = (e, t) => /* @__PURE__ */ a("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: /* @__PURE__ */ a("path", { fill: "currentColor", d: "M18.707 9.293a1 1 0 0 1 0 1.414L13.414 16a2 2 0 0 1-2.828 0l-5.293-5.293a1 1 0 0 1 1.414-1.414L12 14.586l5.293-5.293a1 1 0 0 1 1.414 0" }) }), lr = w(gg), wg = (e, t) => /* @__PURE__ */ a("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: /* @__PURE__ */ a("path", { fill: "currentColor", d: "M14.707 5.293a1 1 0 0 0-1.414 0L8 10.586a2 2 0 0 0 0 2.828l5.293 5.293a1 1 0 0 0 1.414-1.414L9.414 12l5.293-5.293a1 1 0 0 0 0-1.414" }) }), yg = w(wg), xg = (e, t) => /* @__PURE__ */ a("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: /* @__PURE__ */ a("path", { fill: "currentColor", d: "M9.293 5.293a1 1 0 0 1 1.414 0L16 10.586a2 2 0 0 1 0 2.828l-5.293 5.293a1 1 0 0 1-1.414-1.414L14.586 12 9.293 6.707a1 1 0 0 1 0-1.414" }) }), _o = w(xg), bg = (e, t) => /* @__PURE__ */ a("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: /* @__PURE__ */ a("path", { fill: "currentColor", d: "M18.707 14.707a1 1 0 0 0 0-1.414L13.414 8a2 2 0 0 0-2.828 0l-5.293 5.293a1 1 0 1 0 1.414 1.414L12 9.414l5.293 5.293a1 1 0 0 0 1.414 0" }) }), Uc = w(bg), Cg = (e, t) => /* @__PURE__ */ a("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: /* @__PURE__ */ a("path", { fill: "currentColor", d: "M12 6a6 6 0 1 0 0 12 6 6 0 0 0 0-12m-8 6a8 8 0 1 1 16 0 8 8 0 0 1-16 0" }) }), Mg = w(Cg), Sg = (e, t) => /* @__PURE__ */ a("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: /* @__PURE__ */ a("path", { fill: "currentColor", fillRule: "evenodd", d: "M12 6a6 6 0 1 0 0 12 6 6 0 0 0 0-12m-8 6a8 8 0 1 1 16 0 8 8 0 0 1-16 0", clipRule: "evenodd" }) }), Rg = w(Sg), _g = (e, t) => /* @__PURE__ */ b("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: [
  /* @__PURE__ */ a("path", { fill: "currentColor", d: "M12 18a6 6 0 1 1 0-12 6 6 0 0 1 0 12m0 2a8 8 0 1 0 0-16 8 8 0 0 0 0 16" }),
  /* @__PURE__ */ a("path", { fill: "currentColor", d: "M12 8a1 1 0 0 1 1 1v2.42l2.996 1.712a1 1 0 1 1-.992 1.736l-3.5-2A1 1 0 0 1 11 12V9a1 1 0 0 1 1-1" })
] }), Pg = w(_g), Ag = (e, t) => /* @__PURE__ */ a("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: /* @__PURE__ */ a("path", { fill: "currentColor", d: "M7.084 9.084a5.002 5.002 0 0 1 9.832 0A5.002 5.002 0 0 1 16 19H8a5 5 0 0 1-.916-9.916M12 7a3 3 0 0 0-3 3 1 1 0 0 1-1 1 3 3 0 1 0 0 6h8a3 3 0 1 0 0-6 1 1 0 0 1-1-1 3 3 0 0 0-3-3" }) }), Tg = w(Ag), Ng = (e, t) => /* @__PURE__ */ a("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: /* @__PURE__ */ a("path", { fill: "currentColor", fillRule: "evenodd", d: "M13.625 6.838a2.838 2.838 0 1 1 2.837 2.837h-1.537v3.95h1.537a2.838 2.838 0 1 1-2.837 2.837v-1.537h-3.95v1.538a2.838 2.838 0 1 1-2.838-2.838h1.538v-3.95H6.837a2.837 2.837 0 1 1 2.838-2.837v1.537h3.95zM16.462 5.3c-.849 0-1.537.688-1.537 1.538v1.537h1.537a1.538 1.538 0 0 0 0-3.075M9.675 9.675v3.95h3.95v-3.95zm-1.3-1.3V6.838a1.537 1.537 0 1 0-1.538 1.537zm6.55 6.55v1.537a1.537 1.537 0 1 0 1.537-1.537zm-6.55 0H6.838a1.538 1.538 0 1 0 1.537 1.538z", clipRule: "evenodd" }) }), Gc = w(Ng), Dg = (e, t) => /* @__PURE__ */ a("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: /* @__PURE__ */ a("path", { fill: "currentColor", d: "M9.707 6.293a1 1 0 0 0-1.414 0L4 10.586a2 2 0 0 0 0 2.828l4.293 4.293a1 1 0 0 0 1.414-1.414L5.414 12l4.293-4.293a1 1 0 0 0 0-1.414M14.293 6.293a1 1 0 0 1 1.414 0L20 10.586a2 2 0 0 1 0 2.828l-4.293 4.293a1 1 0 0 1-1.414-1.414L18.586 12l-4.293-4.293a1 1 0 0 1 0-1.414" }) }), kg = w(Dg), Eg = (e, t) => /* @__PURE__ */ a("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: /* @__PURE__ */ a("path", { fill: "currentColor", d: "M8.707 1.293a1 1 0 0 1 0 1.414.414.414 0 0 0 0 .586 1 1 0 0 1-1.414 1.414 2.414 2.414 0 0 1 0-3.414 1 1 0 0 1 1.414 0M12.707 1.293a1 1 0 0 1 0 1.414.414.414 0 0 0 0 .586 1 1 0 0 1-1.414 1.414 2.414 2.414 0 0 1 0-3.414 1 1 0 0 1 1.414 0M7 6.5a2 2 0 0 0-2 2V17a4 4 0 0 0 4 4h4a4 4 0 0 0 3.876-3.008q.06.008.124.008h.5a3 3 0 0 0 3-3v-2a3 3 0 0 0-3-3H17V8.5a2 2 0 0 0-2-2zM17 12h.5a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H17zM7 8.5h8V17a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2z" }) }), Fg = w(Eg), Ig = (e, t) => /* @__PURE__ */ a("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: /* @__PURE__ */ a("path", { fill: "currentColor", d: "M18.5 10.5a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-4a1 1 0 1 1 2 0v1.586l3.793-3.793a1 1 0 1 1 1.414 1.414L15.914 9.5H17.5a1 1 0 0 1 1 1M5.5 13.5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0v-1.586l-3.793 3.793a1 1 0 0 1-1.414-1.414L8.086 14.5H6.5a1 1 0 0 1-1-1" }) }), Og = w(Ig), Vg = (e, t) => /* @__PURE__ */ b("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: [
  /* @__PURE__ */ a("path", { fill: "currentColor", d: "M7.293 8.293a1 1 0 0 1 1.414 0l3 3a1 1 0 0 1 0 1.414l-3 3a1 1 0 0 1-1.414-1.414L9.586 12 7.293 9.707a1 1 0 0 1 0-1.414" }),
  /* @__PURE__ */ a("path", { fill: "currentColor", d: "M3 9v6a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4V9a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4m4-2h10a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2" }),
  /* @__PURE__ */ a("path", { fill: "currentColor", d: "M12 15a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2h-3a1 1 0 0 1-1-1" })
] }), Bg = w(Vg), Lg = (e, t) => /* @__PURE__ */ a("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: /* @__PURE__ */ a("path", { fill: "currentColor", d: "M3 8.857A3.857 3.857 0 0 1 6.857 5H17a4 4 0 0 1 4 4v6a4 4 0 0 1-4 4h-4.667L9.71 20.968A2 2 0 0 1 6.613 20l-.35-1.047A3.87 3.87 0 0 1 3 15.129zM6.857 7A1.857 1.857 0 0 0 5 8.857v6.272A1.87 1.87 0 0 0 6.87 17c.508 0 .959.325 1.12.806l.52 1.561 2.623-1.967a2 2 0 0 1 1.2-.4H17a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z" }) }), $g = w(Lg), zg = (e, t) => /* @__PURE__ */ b("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: [
  /* @__PURE__ */ a("path", { fill: "currentColor", d: "M3 8.857A3.857 3.857 0 0 1 6.857 5H17a4 4 0 0 1 4 4v6a4 4 0 0 1-4 4h-4.667L9.71 20.968A2 2 0 0 1 6.613 20l-.35-1.047A3.87 3.87 0 0 1 3 15.129zM6.857 7A1.857 1.857 0 0 0 5 8.857v6.272A1.87 1.87 0 0 0 6.87 17c.508 0 .959.325 1.12.806l.52 1.561 2.623-1.967a2 2 0 0 1 1.2-.4H17a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z" }),
  /* @__PURE__ */ a("path", { fill: "currentColor", d: "M15 10a1 1 0 1 1-2 0 1 1 0 0 1 2 0M11 10a1 1 0 1 1-2 0 1 1 0 0 1 2 0M9.317 12.724a6 6 0 0 1 5.366 0l.764.382a1 1 0 1 1-.894 1.788l-.764-.382a4 4 0 0 0-3.578 0l-.764.382a1 1 0 1 1-.894-1.788z" })
] }), Hg = w(zg), Wg = (e, t) => /* @__PURE__ */ b("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: [
  /* @__PURE__ */ a("path", { fill: "currentColor", d: "M9 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0M14.22 4.375a1 1 0 0 1 1.406-.155A9.95 9.95 0 0 1 19.363 12a9.95 9.95 0 0 1-3.737 7.78 1 1 0 1 1-1.251-1.56A7.95 7.95 0 0 0 17.363 12a7.95 7.95 0 0 0-2.988-6.22 1 1 0 0 1-.155-1.405" }),
  /* @__PURE__ */ a("path", { fill: "currentColor", d: "M10.22 6.891a1 1 0 0 1 1.406-.155A6.73 6.73 0 0 1 14.154 12c0 2.13-.989 4.03-2.528 5.264a1 1 0 0 1-1.251-1.56A4.73 4.73 0 0 0 12.154 12a4.73 4.73 0 0 0-1.78-3.703 1 1 0 0 1-.154-1.406" })
] }), Ug = w(Wg), Gg = (e, t) => /* @__PURE__ */ b("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: [
  /* @__PURE__ */ a("path", { fill: "currentColor", d: "M5 7a4 4 0 0 1 4-4h3.757a4 4 0 0 1 2.829 1.172l2.242 2.242A4 4 0 0 1 19 9.243V17a4 4 0 0 1-4 4H9a4 4 0 0 1-4-4zm4-2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9.243a2 2 0 0 0-.586-1.415l-2.242-2.242A2 2 0 0 0 12.757 5z" }),
  /* @__PURE__ */ a("path", { fill: "currentColor", d: "M9 16a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2h-4a1 1 0 0 1-1-1" })
] }), jg = w(Gg), Kg = (e, t) => /* @__PURE__ */ a("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: /* @__PURE__ */ a("path", { fill: "currentColor", d: "M16.707 5.293a1 1 0 0 1 0 1.414l-10 10a1 1 0 0 1-1.414-1.414l10-10a1 1 0 0 1 1.414 0m1 5.5a1 1 0 0 1 0 1.414l-5.5 5.5a1 1 0 0 1-1.414-1.414l5.5-5.5a1 1 0 0 1 1.414 0" }) }), Yg = w(Kg), qg = (e, t) => /* @__PURE__ */ b("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: [
  /* @__PURE__ */ a("path", { fill: "currentColor", d: "M3 9a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v6a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4zm4-2a2 2 0 0 0-2 2h14a2 2 0 0 0-2-2zm12 4H5v4a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2z" }),
  /* @__PURE__ */ a("path", { fill: "currentColor", d: "M6 14a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1" })
] }), Xg = w(qg), Zg = (e, t) => /* @__PURE__ */ a("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: /* @__PURE__ */ a("path", { fill: "currentColor", d: "M20 12a8 8 0 1 1-16 0 8 8 0 0 1 16 0M9.707 8.293a1 1 0 0 0-1.414 1.414L10.586 12l-2.293 2.293a1 1 0 1 0 1.414 1.414L12 13.414l2.293 2.293a1 1 0 0 0 1.414-1.414L13.414 12l2.293-2.293a1 1 0 0 0-1.414-1.414L12 10.586z" }) }), Qg = w(Zg), Jg = (e, t) => /* @__PURE__ */ a("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: /* @__PURE__ */ a("path", { fill: "currentColor", d: "M6.293 6.293a1 1 0 0 1 1.414 0L12 10.586l4.293-4.293a1 1 0 1 1 1.414 1.414L13.414 12l4.293 4.293a1 1 0 0 1-1.414 1.414L12 13.414l-4.293 4.293a1 1 0 0 1-1.414-1.414L10.586 12 6.293 7.707a1 1 0 0 1 0-1.414" }) }), jc = w(Jg), e6 = (e, t) => /* @__PURE__ */ a("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: /* @__PURE__ */ a("path", { fill: "currentColor", d: "M10.154 5.83c.684-1.64 3.008-1.64 3.692 0l1.21 2.904 2.73-.993c1.546-.562 3.072.878 2.6 2.454l-2 6.667A3 3 0 0 1 15.511 19H8.488a3 3 0 0 1-2.873-2.138l-2-6.667C3.142 8.62 4.668 7.18 6.214 7.741l2.73.993zm3.056 3.673L12 6.6l-1.21 2.903a2 2 0 0 1-2.53 1.11L5.53 9.62l2 6.667a1 1 0 0 0 .958.713h7.024a1 1 0 0 0 .958-.713l2-6.667-2.73.993a2 2 0 0 1-2.53-1.11" }) }), t6 = w(e6), n6 = (e, t) => /* @__PURE__ */ a("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: /* @__PURE__ */ a("path", { fill: "currentColor", d: "M4 6v2a2 2 0 0 0 2 2h3a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2m5 0v2H6V6zm4 0a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-3a2 2 0 0 1-2-2zm5 0h-3v4h3zM4 14a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm5 0H6v4h3zm4 2a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-3a2 2 0 0 1-2-2zm5 0h-3v2h3z" }) }), r6 = w(n6), o6 = (e, t) => /* @__PURE__ */ a("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: /* @__PURE__ */ a("path", { fill: "currentColor", d: "M7.5 5a2 2 0 0 1 2-2h5a2 2 0 0 1 2 2v2h2a1 1 0 1 1 0 2H18v8a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V9h-.5a1 1 0 0 1 0-2h2zM8 9v8a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V9zm6.5-2V5h-5v2z" }) }), a6 = w(o6), i6 = (e, t) => /* @__PURE__ */ a("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: /* @__PURE__ */ a("path", { fill: "currentColor", d: "M20 12a8 8 0 1 1-16 0 8 8 0 0 1 16 0m-2 0c0-1.296-.41-2.496-1.11-3.476L8.525 16.89A6 6 0 0 0 18 12M7.11 15.477l8.367-8.368a6 6 0 0 0-8.367 8.367" }) }), s6 = w(i6), l6 = (e, t) => /* @__PURE__ */ a("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: /* @__PURE__ */ a("path", { fill: "currentColor", d: "M2 7a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v6a4 4 0 0 1-4 4h-2v2h1a1 1 0 1 1 0 2H7a1 1 0 1 1 0-2h1v-2H6a4 4 0 0 1-4-4zm8 10v2h4v-2zm-4-2h12a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2" }) }), c6 = w(l6), u6 = (e, t) => /* @__PURE__ */ b("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: [
  /* @__PURE__ */ a("path", { fill: "currentColor", fillRule: "evenodd", d: "M3 9a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v6a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4zm4-2a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z", clipRule: "evenodd" }),
  /* @__PURE__ */ a("path", { fill: "currentColor", fillRule: "evenodd", d: "M9 10.5A2.5 2.5 0 0 1 11.5 8H14a1 1 0 1 1 0 2h-2.5a.5.5 0 0 0 0 1h1a2.5 2.5 0 0 1 0 5H10a1 1 0 1 1 0-2h2.5a.5.5 0 0 0 0-1h-1A2.5 2.5 0 0 1 9 10.5", clipRule: "evenodd" }),
  /* @__PURE__ */ a("path", { fill: "currentColor", d: "M16 12a1 1 0 1 1 2 0 1 1 0 0 1-2 0M6 12a1 1 0 1 1 2 0 1 1 0 0 1-2 0" })
] }), d6 = w(u6), f6 = (e, t) => /* @__PURE__ */ a("svg", { fill: "none", height: "20", viewBox: "0 0 20 20", width: "20", xmlns: "http://www.w3.org/2000/svg", ref: t, ...e, children: /* @__PURE__ */ a("path", { clipRule: "evenodd", d: "m9.04521 2.74491c.31279-.0408.6315-.0618.95479-.0618.3233 0 .642.021.9548.0618l-.1681 1.28908c-.2572-.03354-.5198-.05088-.7867-.05088-.26691 0-.52946.01734-.78664.05088zm3.75569.49364c.5952.24681 1.1505.56975 1.6537.95649l-.7921 1.0308c-.4142-.31831-.8708-.58375-1.3596-.78644zm-7.25551.9565c.50327-.38675 1.05854-.70968 1.65372-.9565l.49797 1.20085c-.48879.20269-.94534.46813-1.35956.78644zm10.25931 1.3501c.3868.50327.7097 1.05854.9565 1.65372l-1.2008.49797c-.2027-.48879-.4681-.94534-.7865-1.35957zm-12.5659 1.65372c.24681-.59518.56975-1.15045.95649-1.65372l1.03079.79213c-.31831.41422-.58375.87077-.78644 1.35956zm14.0161 1.8461c.0408.31278.0618.6315.0618.9548 0 .32333-.021.64203-.0618.95483l-1.2891-.1682c.0335-.2571.0509-.5197.0509-.78663s-.0174-.52948-.0509-.78665zm-14.57155.9548c0-.3233.02101-.64202.06181-.9548l1.28908.16815c-.03355.25717-.05089.51972-.05089.78665s.01734.52953.05089.78663l-1.28908.1682c-.0408-.3128-.06181-.6315-.06181-.95483zm14.07785 2.80093c-.2468.5952-.5697 1.1504-.9565 1.6537l-1.0308-.7921c.3184-.4143.5838-.8708.7865-1.3596zm-12.56591 1.6537c-.38674-.5033-.70968-1.0585-.95649-1.6537l1.20084-.498c.20269.4888.46813.9453.78644 1.3596zm10.25931 1.3501c-.5032.3867-1.0585.7097-1.6537.9565l-.498-1.2009c.4888-.2026.9454-.4681 1.3596-.7864zm-7.25549.9565c-.59518-.2468-1.15045-.5698-1.65372-.9565l.79213-1.0308c.41422.3183.87078.5838 1.35956.7864zm3.75569.4936c-.3128.0408-.6315.0618-.9548.0618-.32328 0-.642-.021-.95479-.0618l.16815-1.289c.25718.0335.51973.0508.78664.0508.2669 0 .5295-.0173.7867-.0509z", fill: "#647084", fillRule: "evenodd" }) }), Kc = w(f6), h6 = (e, t) => /* @__PURE__ */ b("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: [
  /* @__PURE__ */ a("path", { fill: "currentColor", d: "M5 14a1 1 0 0 1 1 1v1a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-1a1 1 0 1 1 2 0v1a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4v-1a1 1 0 0 1 1-1" }),
  /* @__PURE__ */ a("path", { fill: "currentColor", d: "M11.293 14.707a1 1 0 0 0 1.414 0l3-3a1 1 0 0 0-1.414-1.414L13 11.586V5a1 1 0 1 0-2 0v6.586l-1.293-1.293a1 1 0 1 0-1.414 1.414z" })
] }), p6 = w(h6), m6 = (e, t) => /* @__PURE__ */ a("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: /* @__PURE__ */ a("path", { fill: "currentColor", d: "M9 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4M15 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4M9 14a2 2 0 1 1 0-4 2 2 0 0 1 0 4M15 14a2 2 0 1 1 0-4 2 2 0 0 1 0 4M9 20a2 2 0 1 1 0-4 2 2 0 0 1 0 4M15 20a2 2 0 1 1 0-4 2 2 0 0 1 0 4" }) }), v6 = w(m6), g6 = (e, t) => /* @__PURE__ */ b("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: [
  /* @__PURE__ */ a("path", { fill: "currentColor", d: "M5 6a4 4 0 0 1 4-4h2.757a4 4 0 0 1 2.829 1.172l2.242 2.242A4 4 0 0 1 18 8.243V14a4 4 0 0 1-4 4H9a4 4 0 0 1-4-4zm4-2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h5a2 2 0 0 0 2-2V8.243a2 2 0 0 0-.586-1.415l-2.242-2.242A2 2 0 0 0 11.757 4z" }),
  /* @__PURE__ */ a("path", { fill: "currentColor", d: "M20 8a1 1 0 0 1 1 1v1.444c0 1.643 0 2.937-.085 3.978-.087 1.063-.267 1.95-.678 2.756a7 7 0 0 1-3.06 3.059c-.805.41-1.692.591-2.755.678-1.041.085-2.335.085-3.978.085H9a1 1 0 1 1 0-2h1.4c1.697 0 2.909 0 3.86-.078.938-.077 1.533-.224 2.01-.467a5 5 0 0 0 2.185-2.185c.243-.477.39-1.072.467-2.01.077-.951.078-2.163.078-3.86V9a1 1 0 0 1 1-1" })
] }), w6 = w(g6), y6 = (e, t) => /* @__PURE__ */ a("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: /* @__PURE__ */ a("path", { fill: "currentColor", fillRule: "evenodd", d: "M9 3a4 4 0 0 0-4 4v10a4 4 0 0 0 4 4 1 1 0 1 0 0-2 2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h3.757a2 2 0 0 1 1.415.586l2.242 2.242A2 2 0 0 1 17 9.243V10a1 1 0 1 0 2 0v-.757a4 4 0 0 0-1.172-2.829l-2.242-2.242A4 4 0 0 0 12.757 3zm1 8a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2zm-1 5a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2h-2a1 1 0 0 1-1-1m13.957-3.457a2.77 2.77 0 0 0-3.914 0l-6.25 6.25a1 1 0 0 0-.28.543l-.5 3a1 1 0 0 0 1.151 1.15l3-.5a1 1 0 0 0 .543-.279l6.25-6.25a2.77 2.77 0 0 0 0-3.914m-2.5 1.414a.768.768 0 0 1 1.086 1.086l-6.023 6.023-1.303.218.217-1.303z", clipRule: "evenodd" }) }), x6 = w(y6), b6 = (e, t) => /* @__PURE__ */ a("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: /* @__PURE__ */ a("path", { fill: "currentColor", d: "M8 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0M14 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0M20 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0" }) }), C6 = w(b6), M6 = (e, t) => /* @__PURE__ */ a("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: /* @__PURE__ */ a("path", { fill: "currentColor", d: "M12 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4M12 14a2 2 0 1 1 0-4 2 2 0 0 1 0 4M12 20a2 2 0 1 1 0-4 2 2 0 0 1 0 4" }) }), Yc = w(M6), S6 = (e, t) => /* @__PURE__ */ b("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: [
  /* @__PURE__ */ a("path", { fill: "currentColor", d: "M3 8.857A3.857 3.857 0 0 1 6.857 5H17a4 4 0 0 1 4 4v6a4 4 0 0 1-4 4h-4.667L9.71 20.968A2 2 0 0 1 6.613 20l-.35-1.047A3.87 3.87 0 0 1 3 15.129zM6.857 7A1.857 1.857 0 0 0 5 8.857v6.272A1.87 1.87 0 0 0 6.87 17c.508 0 .959.325 1.12.806l.52 1.561 2.623-1.967a2 2 0 0 1 1.2-.4H17a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z" }),
  /* @__PURE__ */ a("path", { fill: "currentColor", d: "M10.561 9.875c-.65 0-1.186.619-1.186 1.285 0 .287.118.617.378.987.26.368.625.724 1.021 1.042a9.5 9.5 0 0 0 1.226.829l.129-.075c.305-.18.704-.438 1.097-.754.396-.318.76-.674 1.02-1.042.261-.37.379-.7.379-.987 0-.666-.537-1.285-1.186-1.285-.392 0-.633.178-.787.35a.875.875 0 0 1-1.304 0 1 1 0 0 0-.787-.35M7.625 11.16c0-1.419 1.12-3.035 2.936-3.035.59 0 1.067.167 1.439.391a2.75 2.75 0 0 1 1.439-.391c1.816 0 2.936 1.616 2.936 3.035 0 .769-.312 1.447-.698 1.995-.387.549-.885 1.021-1.356 1.4a11 11 0 0 1-1.753 1.145 4 4 0 0 1-.227.107 1 1 0 0 1-.139.044 1 1 0 0 1-.202.024c-.102 0-.181-.019-.202-.023a1 1 0 0 1-.214-.077l-.152-.075a11.222 11.222 0 0 1-1.753-1.146c-.47-.378-.97-.85-1.356-1.4-.386-.547-.698-1.225-.698-1.994" })
] }), R6 = w(S6), _6 = (e, t) => /* @__PURE__ */ a("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: /* @__PURE__ */ a("path", { fill: "currentColor", d: "M13.789 3.776a4 4 0 0 0-3.578 0L4.106 6.83A2 2 0 0 0 3 8.618V15a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4V8.618a2 2 0 0 0-1.106-1.789zm-2.683 1.79a2 2 0 0 1 1.788 0l5.87 2.934-6.708 3.354a.13.13 0 0 1-.112 0L5.236 8.5zM5 10.617l6.05 3.025c.598.299 1.302.299 1.9 0L19 10.618V15a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2z" }) }), P6 = w(_6), A6 = (e, t) => /* @__PURE__ */ a("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: /* @__PURE__ */ a("path", { fill: "currentColor", d: "M7 5a4 4 0 0 0-4 3.998V15a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4V8.965A4 4 0 0 0 17 5zm11.916 3.424-6.86 3.43a.13.13 0 0 1-.112 0l-6.86-3.43A2 2 0 0 1 7 7h10a2 2 0 0 1 1.916 1.424M5 10.618l6.05 3.025c.598.299 1.302.299 1.9 0L19 10.618V15a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2z" }) }), T6 = w(A6), N6 = (e, t) => /* @__PURE__ */ a("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: /* @__PURE__ */ a("path", { fill: "currentColor", d: "M4 10a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1M4 14a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1" }) }), D6 = w(N6), k6 = (e, t) => /* @__PURE__ */ a("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: /* @__PURE__ */ a("path", { fill: "currentColor", d: "M14 5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0V7.414l-3.793 3.793a1 1 0 0 1-1.414-1.414L16.586 6H15a1 1 0 0 1-1-1M10 19a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-4a1 1 0 1 1 2 0v1.586l3.793-3.793a1 1 0 0 1 1.414 1.414L7.414 18H9a1 1 0 0 1 1 1" }) }), E6 = w(k6), F6 = (e, t) => /* @__PURE__ */ b("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: [
  /* @__PURE__ */ a("path", { fill: "currentColor", d: "M6 3a3 3 0 0 0-3 3v9a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4v-4a4 4 0 0 0-3-3.874V6a3 3 0 0 0-3-3zm10 4H6a1 1 0 0 1 0-2h9a1 1 0 0 1 1 1zM5 8.83c.313.11.65.17 1 .17h11a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2z" }),
  /* @__PURE__ */ a("path", { fill: "currentColor", d: "M18 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" })
] }), I6 = w(F6), O6 = (e, t) => /* @__PURE__ */ a("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: /* @__PURE__ */ a("path", { fill: "currentColor", d: "M3.938 6.694a1.08 1.08 0 0 1 1.44.501c1.14 2.353 3.576 4.391 6.622 4.391s5.483-2.038 6.622-4.391a1.078 1.078 0 1 1 1.94.94c-.406.84-.953 1.663-1.623 2.408l1.767 1.765a1 1 0 0 1-1.413 1.415l-1.831-1.828a9.4 9.4 0 0 1-2.3 1.27l.954 2.853a1 1 0 1 1-1.896.634l-1.001-2.991a9 9 0 0 1-2.375.008l-.998 2.983a1 1 0 1 1-1.896-.634l.947-2.83a9.4 9.4 0 0 1-2.359-1.293l-1.831 1.829a1 1 0 0 1-1.413-1.416l1.768-1.765a10.4 10.4 0 0 1-1.624-2.408 1.08 1.08 0 0 1 .5-1.44" }) }), qc = w(O6), V6 = (e, t) => /* @__PURE__ */ b("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: [
  /* @__PURE__ */ a("path", { fill: "currentColor", d: "M5.147 12c.993 2.543 3.568 4.922 6.853 4.922 3.286 0 5.86-2.38 6.854-4.922C17.86 9.457 15.286 7.078 12 7.078S6.14 9.458 5.147 12m-2.17-.341C4.088 8.326 7.432 4.922 12 4.922s7.912 3.404 9.023 6.737c.074.221.074.46 0 .682-1.111 3.333-4.455 6.737-9.023 6.737s-7.912-3.404-9.023-6.737a1.08 1.08 0 0 1 0-.682" }),
  /* @__PURE__ */ a("path", { fill: "currentColor", d: "M12 13a1 1 0 1 1 0-2 1 1 0 0 1 0 2m0 2a3 3 0 1 0 0-6 3 3 0 0 0 0 6" })
] }), Xc = w(V6), B6 = (e, t) => /* @__PURE__ */ a("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: /* @__PURE__ */ a("path", { fill: "currentColor", fillRule: "evenodd", d: "M10 9a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0v-1a1 1 0 0 1 1-1M14 9a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0v-1a1 1 0 0 1 1-1M8.72 13.375a1 1 0 0 1 1.405-.156 3 3 0 0 0 3.75 0 1 1 0 1 1 1.25 1.562 5 5 0 0 1-6.25 0 1 1 0 0 1-.156-1.406M4 8a4 4 0 0 1 4-4 1 1 0 0 1 0 2 2 2 0 0 0-2 2 1 1 0 0 1-2 0m11-3a1 1 0 0 1 1-1 4 4 0 0 1 4 4 1 1 0 1 1-2 0 2 2 0 0 0-2-2 1 1 0 0 1-1-1M5 15a1 1 0 0 1 1 1 2 2 0 0 0 2 2 1 1 0 1 1 0 2 4 4 0 0 1-4-4 1 1 0 0 1 1-1m14 0a1 1 0 0 1 1 1 4 4 0 0 1-4 4 1 1 0 1 1 0-2 2 2 0 0 0 2-2 1 1 0 0 1 1-1", clipRule: "evenodd" }) }), L6 = w(B6), $6 = (e, t) => /* @__PURE__ */ a("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: /* @__PURE__ */ a("path", { fill: "currentColor", d: "M9.5 5.5a1 1 0 0 1 .91.586l4.09 8.997 1.59-3.497A1 1 0 0 1 17 11h3a1 1 0 1 1 0 2h-2.356l-2.234 4.914a1 1 0 0 1-1.82 0L9.5 8.917l-1.59 3.497A1 1 0 0 1 7 13H4a1 1 0 1 1 0-2h2.356L8.59 6.086A1 1 0 0 1 9.5 5.5" }) }), z6 = w($6), H6 = (e, t) => /* @__PURE__ */ b("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: [
  /* @__PURE__ */ a("path", { fill: "currentColor", d: "M7 13a1 1 0 0 0-1 1v4.586l.293-.293A1 1 0 0 1 7 18h5a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1zm-3 1a3 3 0 0 1 3-3h5a3 3 0 0 1 3 3v3a3 3 0 0 1-3 3H7.414l-.853.854C5.616 21.799 4 21.129 4 19.793z" }),
  /* @__PURE__ */ a("path", { fill: "currentColor", d: "M17 6a1 1 0 0 1 1 1v4.586l-.293-.293A1 1 0 0 0 17 11h-.5a1 1 0 1 0 0 2h.086l.853.854c.945.945 2.561.275 2.561-1.061V7a3 3 0 0 0-3-3h-5a3 3 0 0 0-3 3v2a1 1 0 1 0 2 0V7a1 1 0 0 1 1-1z" })
] }), W6 = w(H6), U6 = (e, t) => /* @__PURE__ */ b("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: [
  /* @__PURE__ */ a("path", { fill: "currentColor", d: "M5 7a4 4 0 0 1 4-4h3.757a4 4 0 0 1 2.829 1.172l2.242 2.242A4 4 0 0 1 19 9.243V17a4 4 0 0 1-4 4H9a4 4 0 0 1-4-4zm4-2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9.243a2 2 0 0 0-.586-1.415l-2.242-2.242A2 2 0 0 0 12.757 5z" }),
  /* @__PURE__ */ a("path", { fill: "currentColor", d: "M9 12a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2h-4a1 1 0 0 1-1-1M9 16a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2h-2a1 1 0 0 1-1-1" })
] }), G6 = w(U6), j6 = (e, t) => /* @__PURE__ */ a("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: /* @__PURE__ */ a("path", { fill: "currentColor", d: "M5 7a4 4 0 0 1 4-4h3.757a4 4 0 0 1 2.829 1.172l2.242 2.242A4 4 0 0 1 19 9.243V17a4 4 0 0 1-4 4H9a4 4 0 0 1-4-4zm4-2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9.243a2 2 0 0 0-.586-1.415l-2.242-2.242A2 2 0 0 0 12.757 5z" }) }), K6 = w(j6), Y6 = (e, t) => /* @__PURE__ */ b("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: [
  /* @__PURE__ */ a("path", { fill: "currentColor", d: "M7.093 3h1.635c1.07 0 2.057.577 2.581 1.51.17.303.49.49.838.49h1.469c.632 0 1.154 0 1.582.028.443.028.854.09 1.252.244a4 4 0 0 1 2.278 2.278c.155.398.216.809.244 1.252.028.428.028.95.028 1.582v.857c0 .805 0 1.47-.044 2.01-.046.563-.145 1.08-.392 1.565a4 4 0 0 1-1.748 1.748c-.485.247-1.002.346-1.564.392-.541.044-1.206.044-2.01.044H8.758c-.805 0-1.47 0-2.01-.044-.563-.046-1.08-.145-1.565-.392a4 4 0 0 1-1.748-1.748c-.247-.485-.346-1.002-.392-1.564C3 12.71 3 12.046 3 11.242V7.092c0-.496 0-.923.027-1.277.029-.372.092-.743.263-1.103A3 3 0 0 1 4.713 3.29c.36-.171.731-.234 1.103-.263C6.17 3 6.597 3 7.093 3M5.97 5.021c-.256.02-.352.054-.4.076a1 1 0 0 0-.473.474c-.022.047-.056.143-.076.399-.02.267-.021.617-.021 1.16v4.07c0 .857 0 1.439.038 1.889.035.438.1.663.18.819a2 2 0 0 0 .874.874c.156.08.38.145.819.18C7.361 15 7.943 15 8.8 15h4.4c.857 0 1.439 0 1.889-.037.438-.036.663-.101.819-.181a2 2 0 0 0 .874-.874c.08-.156.145-.38.18-.819.037-.45.038-1.032.038-1.889v-.783c0-.673 0-1.13-.023-1.486-.023-.348-.064-.53-.113-.656a2 2 0 0 0-1.139-1.139c-.127-.05-.308-.09-.656-.113A26 26 0 0 0 13.583 7h-1.436a2.96 2.96 0 0 1-2.581-1.51.96.96 0 0 0-.838-.49H7.13c-.543 0-.893 0-1.16.021" }),
  /* @__PURE__ */ a("path", { fill: "currentColor", d: "M21 8a1 1 0 0 1 1 1v.444c0 1.643 0 2.937-.085 3.978-.087 1.063-.267 1.95-.678 2.756a7 7 0 0 1-3.06 3.059c-.805.41-1.692.591-2.755.678-1.041.085-2.335.085-3.978.085H7a1 1 0 1 1 0-2h4.4c1.697 0 2.909 0 3.86-.078.938-.077 1.533-.224 2.01-.467a5 5 0 0 0 2.185-2.185c.243-.477.39-1.072.467-2.01.077-.951.078-2.163.078-3.86V9a1 1 0 0 1 1-1" })
] }), q6 = w(Y6), X6 = (e, t) => /* @__PURE__ */ a("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: /* @__PURE__ */ a("path", { fill: "currentColor", d: "M4.656 7.302C3.544 6.004 4.466 4 6.174 4h11.652c1.709 0 2.63 2.004 1.518 3.302L15 12.37v4.13a2 2 0 0 1-.8 1.6l-2 1.5c-1.318.989-3.2.048-3.2-1.6v-5.63zM17.826 6H6.174l4.345 5.068A2 2 0 0 1 11 12.37V18l2-1.5v-4.13a2 2 0 0 1 .482-1.302z" }) }), Z6 = w(X6), Q6 = (e, t) => /* @__PURE__ */ a("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: /* @__PURE__ */ a("path", { fill: "currentColor", d: "M7 4a1 1 0 0 0-2 0v16a1 1 0 1 0 2 0v-4.23c1.283-.312 2.183-.364 2.876-.278.791.1 1.393.39 2.07.84 1.903 1.27 4.367 1.183 6.654-.532a1 1 0 0 0 .4-.8V5.5a1 1 0 0 0-1.6-.8c-1.713 1.285-3.25 1.198-4.345.468-.825-.55-1.723-1.01-2.931-1.16-.891-.112-1.902-.05-3.124.21zm0 2.27c1.283-.312 2.183-.364 2.876-.278.791.1 1.393.39 2.07.84 1.464.977 3.261 1.151 5.054.397v7.248c-1.552.99-2.936.864-3.945.19-.825-.549-1.723-1.008-2.931-1.16-.891-.11-1.902-.048-3.124.211z" }) }), J6 = w(Q6), e8 = (e, t) => /* @__PURE__ */ a("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: /* @__PURE__ */ a("path", { fill: "currentColor", d: "M7.161 3h2.567c1.07 0 2.057.577 2.581 1.51.17.303.49.49.838.49h2.094c.805 0 1.47 0 2.01.044.563.046 1.08.145 1.565.392a4 4 0 0 1 1.748 1.748c.247.485.346 1.002.392 1.564.044.541.044 1.206.044 2.01v2.483c0 .805 0 1.47-.044 2.01-.046.563-.145 1.08-.392 1.565a4 4 0 0 1-1.748 1.748c-.485.247-1.002.346-1.564.392-.541.044-1.206.044-2.01.044H8.758c-.805 0-1.47 0-2.01-.044-.563-.046-1.08-.145-1.565-.392a4 4 0 0 1-1.748-1.748c-.247-.485-.346-1.002-.392-1.564C3 14.71 3 14.046 3 13.242v-6.08c0-.528 0-.982.03-1.357.033-.395.104-.789.297-1.167a3 3 0 0 1 1.311-1.311c.378-.193.772-.264 1.167-.296C6.18 3 6.635 3 7.161 3M5.968 5.024c-.272.022-.373.06-.422.085a1 1 0 0 0-.437.437c-.025.05-.063.15-.085.422C5 6.25 5 6.623 5 7.2v6c0 .857 0 1.439.038 1.889.035.438.1.663.18.819a2 2 0 0 0 .874.874c.156.08.38.145.819.18C7.361 17 7.943 17 8.8 17h6.4c.857 0 1.439 0 1.889-.038.438-.035.663-.1.819-.18a2 2 0 0 0 .874-.874c.08-.156.145-.38.18-.819.037-.45.038-1.032.038-1.889v-2.4c0-.857 0-1.439-.038-1.889-.035-.438-.1-.663-.18-.819a2 2 0 0 0-.874-.874c-.156-.08-.38-.145-.819-.18C16.639 7 16.057 7 15.2 7h-2.053a2.96 2.96 0 0 1-2.581-1.51.96.96 0 0 0-.838-.49H7.2c-.577 0-.949 0-1.232.024" }) }), t8 = w(e8), n8 = (e, t) => /* @__PURE__ */ a("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: /* @__PURE__ */ a("path", { fill: "currentColor", d: "M20 12a8 8 0 1 1-16 0 8 8 0 0 1 16 0m-8 5.657A8.95 8.95 0 0 0 13.945 13h-3.89A8.95 8.95 0 0 0 12 17.657m2.573-.235A6.01 6.01 0 0 0 17.917 13h-1.962a10.9 10.9 0 0 1-1.382 4.422M15.955 11h1.962a6.01 6.01 0 0 0-3.344-4.422A10.9 10.9 0 0 1 15.955 11m-2.01 0A8.95 8.95 0 0 0 12 6.343 8.95 8.95 0 0 0 10.055 11zm-5.9 2H6.083a6.01 6.01 0 0 0 3.344 4.422A10.9 10.9 0 0 1 8.045 13m0-2c.144-1.597.63-3.095 1.382-4.422A6.01 6.01 0 0 0 6.083 11z" }) }), r8 = w(n8), o8 = (e, t) => /* @__PURE__ */ a("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: /* @__PURE__ */ a("path", { fill: "currentColor", d: "M6 4a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2v4a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2h4a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2v-4a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2h-4a2 2 0 0 0-2-2zm12 4h-2V6h2zm-2 2v4a2 2 0 0 0-2 2h-4a2 2 0 0 0-2-2v-4a2 2 0 0 0 2-2h4a2 2 0 0 0 2 2m0 6h2v2h-2zM8 8H6V6h2zm-2 8h2v2H6z" }) }), a8 = w(o8), i8 = (e, t) => /* @__PURE__ */ a("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: /* @__PURE__ */ a("path", { fill: "currentColor", d: "M4 6a1 1 0 0 1 1 1v4h5V7a1 1 0 1 1 2 0v10a1 1 0 1 1-2 0v-4H5v4a1 1 0 1 1-2 0V7a1 1 0 0 1 1-1M20 7a1 1 0 1 0-2 0c0 .175-.098.433-.332.668S17.175 8 17 8a1 1 0 1 0 0 2c.352 0 .69-.073 1-.198V17a1 1 0 1 0 2 0z" }) }), s8 = w(i8), l8 = (e, t) => /* @__PURE__ */ a("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: /* @__PURE__ */ a("path", { fill: "currentColor", d: "M4 6a1 1 0 0 1 1 1v4h5V7a1 1 0 1 1 2 0v10a1 1 0 1 1-2 0v-4H5v4a1 1 0 1 1-2 0V7a1 1 0 0 1 1-1M17.5 8A1.5 1.5 0 0 0 16 9.5a1 1 0 1 1-2 0 3.5 3.5 0 1 1 3.5 3.5 1.5 1.5 0 0 0-1.5 1.5V16h4a1 1 0 1 1 0 2h-5a1 1 0 0 1-1-1v-2.5a3.5 3.5 0 0 1 3.5-3.5 1.5 1.5 0 0 0 0-3" }) }), c8 = w(l8), u8 = (e, t) => /* @__PURE__ */ a("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: /* @__PURE__ */ a("path", { fill: "currentColor", d: "M16 9a1 1 0 0 1 1-1h.5a1.5 1.5 0 0 1 0 3 1 1 0 1 0 0 2 1.5 1.5 0 0 1 0 3H17a1 1 0 0 1-1-1 1 1 0 1 0-2 0 3 3 0 0 0 3 3h.5a3.5 3.5 0 0 0 2.45-6 3.5 3.5 0 0 0-2.45-6H17a3 3 0 0 0-3 3 1 1 0 1 0 2 0M4 6a1 1 0 0 1 1 1v4h5V7a1 1 0 1 1 2 0v10a1 1 0 1 1-2 0v-4H5v4a1 1 0 1 1-2 0V7a1 1 0 0 1 1-1" }) }), d8 = w(u8), f8 = (e, t) => /* @__PURE__ */ a("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: /* @__PURE__ */ a("path", { fill: "currentColor", d: "M8.938 7c.846 0 1.403.285 1.745.545a2.3 2.3 0 0 1 .451.457l.01.014a1 1 0 0 0 1.713 0l.009-.014a2.293 2.293 0 0 1 .451-.457c.342-.26.9-.545 1.745-.545.755 0 1.481.37 2.04 1.002.563.636.898 1.476.898 2.284 0 .805-.333 1.695-.934 2.628-.596.924-1.41 1.817-2.25 2.607A25.5 25.5 0 0 1 12 17.795q-.219-.152-.502-.36a26 26 0 0 1-2.314-1.914c-.84-.79-1.653-1.683-2.25-2.607C6.333 11.98 6 11.09 6 10.286 6 8.286 7.72 7 8.938 7M12 6.037l-.105-.082C11.253 5.465 10.28 5 8.938 5 6.655 5 4 7.143 4 10.286c0 1.338.542 2.608 1.253 3.711.716 1.111 1.654 2.13 2.563 2.982a27.5 27.5 0 0 0 3.623 2.85l.018.011.006.003.001.001s.001.001.536-.844l-.535.845a1 1 0 0 0 1.07 0L12 19l.535.845.002-.002.006-.003.018-.012a12 12 0 0 0 .3-.198 27.478 27.478 0 0 0 3.323-2.65c.91-.854 1.846-1.872 2.563-2.983.71-1.103 1.253-2.373 1.253-3.711 0-1.335-.54-2.638-1.4-3.61C17.739 5.703 16.497 5 15.063 5c-1.34 0-2.315.465-2.957.955z" }) }), h8 = w(f8), p8 = (e, t) => /* @__PURE__ */ b("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: [
  /* @__PURE__ */ a("path", { fill: "currentColor", d: "M15.119 9.381a.875.875 0 0 1 0 1.238l-.506.506H17a.875.875 0 1 1 0 1.75h-2.387l.506.506a.875.875 0 1 1-1.237 1.238l-2-2a.875.875 0 0 1 0-1.238l2-2a.875.875 0 0 1 1.237 0" }),
  /* @__PURE__ */ a("path", { fill: "currentColor", d: "M7 5a4 4 0 0 0-4 4v6a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4V9a4 4 0 0 0-4-4zm1 2v10H7a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2zm2 10V7h7a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2z" })
] }), m8 = w(p8), v8 = (e, t) => /* @__PURE__ */ b("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: [
  /* @__PURE__ */ a("path", { fill: "currentColor", d: "M10.44 4.154a8 8 0 1 1-4.097 13.503 1 1 0 1 1 1.414-1.414A6 6 0 1 0 6.343 10H7a1 1 0 0 1 .707 1.707l-2 2a1 1 0 0 1-1.414 0l-2-2A1 1 0 0 1 3 10h1.254a8 8 0 0 1 6.185-5.846" }),
  /* @__PURE__ */ a("path", { fill: "currentColor", d: "M12 8a1 1 0 0 1 1 1v2.42l2.996 1.712a1 1 0 1 1-.992 1.736l-3.5-2A1 1 0 0 1 11 12V9a1 1 0 0 1 1-1" })
] }), g8 = w(v8), w8 = (e, t) => /* @__PURE__ */ a("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: /* @__PURE__ */ a("path", { fill: "currentColor", d: "M13.163 5.56a2 2 0 0 0-2.325 0l-4 2.856A2 2 0 0 0 6 10.044V16a2 2 0 0 0 2 2h1v-2.5a3 3 0 1 1 6 0V18h1a2 2 0 0 0 2-2v-5.956a2 2 0 0 0-.837-1.628zM9.675 3.931a4 4 0 0 1 4.65 0l4 2.857A4 4 0 0 1 20 10.044V16a4 4 0 0 1-4 4h-1a2 2 0 0 1-2-2v-2.5a1 1 0 1 0-2 0V18a2 2 0 0 1-2 2H8a4 4 0 0 1-4-4v-5.956a4 4 0 0 1 1.675-3.255z" }) }), Zc = w(w8), y8 = (e, t) => /* @__PURE__ */ b("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: [
  /* @__PURE__ */ a("path", { fill: "currentColor", d: "M7 5a4 4 0 0 0-4 4v6a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4V9a4 4 0 0 0-4-4zM5 9a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v3.586l-.172-.172a4 4 0 0 0-5.656 0L8.586 17H7a2 2 0 0 1-2-2zm6.414 8 3.172-3.171a2 2 0 0 1 2.828 0l1.55 1.55A2 2 0 0 1 17 17z" }),
  /* @__PURE__ */ a("path", { fill: "currentColor", d: "M9 12a1 1 0 1 1 0-2 1 1 0 0 1 0 2m0 2a3 3 0 1 0 0-6 3 3 0 0 0 0 6" })
] }), x8 = w(y8), b8 = (e, t) => /* @__PURE__ */ a("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: /* @__PURE__ */ a("path", { fill: "currentColor", d: "M5.004 6.749A4 4 0 0 1 8.31 5h6.993a4 4 0 0 1 3.094 1.465l2.377 2.901A1 1 0 0 1 21 10v5a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4v-5a1 1 0 0 1 .173-.563zM8.31 7a2 2 0 0 0-1.653.874L5.891 9h1.088c1.367 0 2.533.988 2.757 2.336a.795.795 0 0 0 .784.664h2.96c.388 0 .72-.281.783-.664A2.795 2.795 0 0 1 17.02 9h.868L16.85 7.733A2 2 0 0 0 15.303 7zM19 11h-1.98a.795.795 0 0 0-.784.664A2.795 2.795 0 0 1 13.48 14h-2.958a2.795 2.795 0 0 1-2.758-2.336A.795.795 0 0 0 6.98 11H5v4a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2z" }) }), C8 = w(b8), M8 = (e, t) => /* @__PURE__ */ b("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: [
  /* @__PURE__ */ a("path", { fill: "currentColor", d: "M13 9a1 1 0 1 1-2 0 1 1 0 0 1 2 0M12 11a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0v-3a1 1 0 0 1 1-1" }),
  /* @__PURE__ */ a("path", { fill: "currentColor", d: "M12 18a6 6 0 1 1 0-12 6 6 0 0 1 0 12m0 2a8 8 0 1 0 0-16 8 8 0 0 0 0 16" })
] }), Qc = w(M8), S8 = (e, t) => /* @__PURE__ */ a("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: /* @__PURE__ */ a("path", { fill: "currentColor", d: "M20 12a8 8 0 1 1-16 0 8 8 0 0 1 16 0m-8-4a1 1 0 1 0 0 2 1 1 0 0 0 0-2m1 4a1 1 0 1 0-2 0v3a1 1 0 1 0 2 0z" }) }), R8 = w(S8), _8 = (e, t) => /* @__PURE__ */ a("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: /* @__PURE__ */ a("path", { fill: "currentColor", d: "M9 10a1 1 0 0 1 1-1h1a2 2 0 0 1 2 2v6h1a1 1 0 1 1 0 2h-4a1 1 0 1 1 0-2h1v-6h-1a1 1 0 0 1-1-1M13 6.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" }) }), P8 = w(_8), A8 = (e, t) => /* @__PURE__ */ b("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: [
  /* @__PURE__ */ a("path", { fill: "currentColor", d: "M8 6a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2h-2v10h2a1 1 0 1 1 0 2H9a1 1 0 1 1 0-2h2V7H9a1 1 0 0 1-1-1" }),
  /* @__PURE__ */ a("path", { fill: "currentColor", d: "M3 11a3 3 0 0 1 3-3h2a1 1 0 0 1 0 2H6a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 1 1 0 2H6a3 3 0 0 1-3-3zM21 13a3 3 0 0 1-3 3h-2a1 1 0 1 1 0-2h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1h-2a1 1 0 1 1 0-2h2a3 3 0 0 1 3 3z" })
] }), T8 = w(A8), N8 = (e, t) => /* @__PURE__ */ a("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: /* @__PURE__ */ a("path", { fill: "currentColor", d: "M8 6a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2h-3.153l-1.666 10H15a1 1 0 1 1 0 2H7a1 1 0 1 1 0-2h3.153l1.666-10H9a1 1 0 0 1-1-1" }) }), D8 = w(N8), k8 = (e, t) => /* @__PURE__ */ a("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: /* @__PURE__ */ a("path", { fill: "currentColor", d: "M4 7a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v7a2 2 0 0 1 2 2 4 4 0 0 1-4 4H6a4 4 0 0 1-4-4 2 2 0 0 1 2-2zm2 7h3.5a1.5 1.5 0 0 1 1.415 1h2.17a1.5 1.5 0 0 1 1.415-1H18V7a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3.085 2H4a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2h-5.085a1.5 1.5 0 0 1-1.415 1h-3a1.5 1.5 0 0 1-1.415-1" }) }), E8 = w(k8), F8 = (e, t) => /* @__PURE__ */ b("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: [
  /* @__PURE__ */ a("path", { fill: "currentColor", d: "M20 8a1 1 0 0 1 1 1v1.444c0 1.643 0 2.937-.085 3.978-.087 1.063-.267 1.95-.678 2.756a7 7 0 0 1-3.06 3.059c-.805.41-1.692.591-2.755.678-1.041.085-2.335.085-3.978.085H9a1 1 0 1 1 0-2h1.4c1.697 0 2.909 0 3.86-.078.938-.077 1.533-.224 2.01-.467a5 5 0 0 0 2.185-2.185c.243-.477.39-1.072.467-2.01.077-.951.078-2.163.078-3.86V9a1 1 0 0 1 1-1" }),
  /* @__PURE__ */ a("path", { fill: "currentColor", d: "M4 8a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v6a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4zm4-2a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2z" })
] }), I8 = w(F8), O8 = (e, t) => /* @__PURE__ */ a("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: /* @__PURE__ */ a("path", { fill: "currentColor", d: "m7 13.92-.004-.01a.2.2 0 0 0-.038-.054 7 7 0 1 1 10.084 0 .2.2 0 0 0-.042.065V17a4 4 0 0 1-4 4h-2a4 4 0 0 1-4-4zM7 9a4.98 4.98 0 0 0 1.398 3.468A2.1 2.1 0 0 1 9 13.92V15h2v-2.965l-1.055-.703a1 1 0 0 1 1.11-1.664l.945.63.945-.63a1 1 0 0 1 1.11 1.664L13 12.035V15h2v-1.08a2.1 2.1 0 0 1 .601-1.452A5 5 0 1 0 7 9m5 8H9a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2h-3" }) }), V8 = w(O8), B8 = (e, t) => /* @__PURE__ */ a("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: /* @__PURE__ */ a("path", { fill: "currentColor", d: "M4.293 4.293a1 1 0 0 1 1.414 0l1 1a1 1 0 0 1-1.414 1.414l-1-1a1 1 0 0 1 0-1.414M9 3a1 1 0 0 1 1 1v1a1 1 0 0 1-2 0V4a1 1 0 0 1 1-1M3 9a1 1 0 0 1 1-1h1a1 1 0 0 1 0 2H4a1 1 0 0 1-1-1M19.707 19.707a1 1 0 0 1-1.414 0l-1-1a1 1 0 0 1 1.414-1.414l1 1a1 1 0 0 1 0 1.414M15 21a1 1 0 0 1-1-1v-1a1 1 0 1 1 2 0v1a1 1 0 0 1-1 1M21 15a1 1 0 0 1-1 1h-1a1 1 0 1 1 0-2h1a1 1 0 0 1 1 1M7.707 11.293a1 1 0 0 1 0 1.414l-1 1a2.536 2.536 0 0 0 3.586 3.586l1-1a1 1 0 0 1 1.414 1.414l-1 1a4.536 4.536 0 0 1-6.414-6.414l1-1a1 1 0 0 1 1.414 0M16.293 12.707a1 1 0 0 1 0-1.414l1-1a2.536 2.536 0 1 0-3.586-3.586l-1 1a1 1 0 1 1-1.414-1.414l1-1a4.536 4.536 0 1 1 6.414 6.414l-1 1a1 1 0 0 1-1.414 0" }) }), L8 = w(B8), $8 = (e, t) => /* @__PURE__ */ b("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: [
  /* @__PURE__ */ a("path", { fill: "currentColor", d: "M12.293 10.707a1.83 1.83 0 0 0-2.586 0l-3 3a2.536 2.536 0 0 0 3.586 3.586 1 1 0 0 1 1.414 1.414 4.535 4.535 0 1 1-6.414-6.414l3-3a3.83 3.83 0 0 1 5.414 0 1 1 0 0 1-1.414 1.414" }),
  /* @__PURE__ */ a("path", { fill: "currentColor", d: "M11.707 13.293a1.83 1.83 0 0 0 2.586 0l3-3a2.536 2.536 0 1 0-3.586-3.586 1 1 0 1 1-1.414-1.414 4.536 4.536 0 0 1 6.414 6.414l-3 3a3.83 3.83 0 0 1-5.414 0 1 1 0 0 1 1.414-1.414" })
] }), z8 = w($8), H8 = (e, t) => /* @__PURE__ */ a("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: /* @__PURE__ */ a("path", { fill: "currentColor", d: "M8 8a1 1 0 0 1 1-1h10a1 1 0 1 1 0 2H9a1 1 0 0 1-1-1M8 12a1 1 0 0 1 1-1h10a1 1 0 1 1 0 2H9a1 1 0 0 1-1-1M8 16a1 1 0 0 1 1-1h10a1 1 0 1 1 0 2H9a1 1 0 0 1-1-1M4 8a1 1 0 1 1 2 0 1 1 0 0 1-2 0M5 11a1 1 0 1 1 0 2 1 1 0 0 1 0-2M5 15a1 1 0 1 0 0 2 1 1 0 0 0 0-2" }) }), W8 = w(H8), U8 = (e, t) => /* @__PURE__ */ b("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: [
  /* @__PURE__ */ a("path", { fill: "currentColor", d: "M12 13a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0v-1a1 1 0 0 1 1-1" }),
  /* @__PURE__ */ a("path", { fill: "currentColor", d: "M7 9.126V8a5 5 0 0 1 10 0v1.126c1.725.444 3 2.01 3 3.874v3a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4v-3a4 4 0 0 1 3-3.874M9 8v1h6V8a3 3 0 1 0-6 0m7 3H8a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2" })
] }), G8 = w(U8), j8 = (e, t) => /* @__PURE__ */ b("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: [
  /* @__PURE__ */ a("path", { fill: "currentColor", d: "M12 13a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0v-1a1 1 0 0 1 1-1" }),
  /* @__PURE__ */ a("path", { fill: "currentColor", d: "M9 8a3 3 0 0 1 3-3 1 1 0 1 0 0-2 5 5 0 0 0-5 5v1.126C5.275 9.57 4 11.136 4 13v3a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4v-3a4 4 0 0 0-4-4H9zm-1 3h8a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2" })
] }), K8 = w(j8), Y8 = (e, t) => /* @__PURE__ */ b("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: [
  /* @__PURE__ */ a("path", { fill: "currentColor", d: "M6.919 16.284a6.646 6.646 0 1 1 10.162 0q.505.315.964.689l.134.108a8 8 0 1 0-12.358 0l.134-.108q.46-.374.964-.689" }),
  /* @__PURE__ */ a("path", { fill: "currentColor", d: "M17.037 18.215A7.97 7.97 0 0 1 12 20a7.97 7.97 0 0 1-5.037-1.785A7.97 7.97 0 0 1 12 16.431c1.91 0 3.662.668 5.037 1.784M12 14.708A2.954 2.954 0 1 0 12 8.8a2.954 2.954 0 0 0 0 5.908" })
] }), q8 = w(Y8), X8 = (e, t) => /* @__PURE__ */ a("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: /* @__PURE__ */ a("path", { fill: "currentColor", d: "M14.939 10.137q.03-.288.03-.584C14.969 6.486 12.513 4 9.484 4S4 6.486 4 9.553s2.455 5.552 5.484 5.552q.33 0 .65-.039v3.867c0 .59.472 1.067 1.053 1.067h7.275a1.06 1.06 0 0 0 1.053-1.067v-7.73a1.06 1.06 0 0 0-1.053-1.066zm0 0c-.266 2.575-2.271 4.627-4.805 4.93v-3.863c0-.59.472-1.067 1.053-1.067z" }) }), Z8 = w(X8), Q8 = (e, t) => /* @__PURE__ */ a("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: /* @__PURE__ */ a("path", { fill: "currentColor", d: "M11.98 19.194c-.004-.005-.74-1.022-.916-1.406a9 9 0 0 1-.222-.506 5 5 0 0 1-.314.386c-.816.907-1.733 1.496-2.816 1.588a4.8 4.8 0 0 1-1.396-.038 6 6 0 0 1-.479-.838 62 62 0 0 1-.353-.773q-.108.162-.228.306c-.64.766-1.362 1.285-2.325 1.348-.685.045-.931-.052-.931-.052s1.672-6.169 1.942-6.824c.296-.714.748-1.691 1.94-2.571 1.143-.838 2-.887 2.143-.887h.143s-.446 1.487-1.027 3.622q-.079.293-.16.644a57 57 0 0 0-.031 1.7c.005.193.018.416.033.627l.077.784c.52-2.007 1.154-4.386 1.343-4.815.367-.834 1.072-2.258 2.664-3.246a7.4 7.4 0 0 1 2.667-1c.296-.052.242.026.242.026s-.504 1.965-1.201 4.443q-.074.267-.147.567c-.002.579 0 1.342.02 1.736.013.287.052.659.092.994v-.004s.08.53.113.857v.005c.646-2.415 1.455-5.347 1.714-5.869a8.47 8.47 0 0 1 3.57-3.8c1.574-.876 2.78-1.063 3.127-1.116l.056-.01A6 6 0 0 1 22 5s-.69 2.588-1.63 5.867a65 65 0 0 0-.496 1.832c-.25.966-.457 1.766-.847 2.803-.629 1.67-2.458 3.165-4.302 3.613-1.182.289-2.746.079-2.746.079" }) }), J8 = w(Q8), e7 = (e, t) => /* @__PURE__ */ b("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: [
  /* @__PURE__ */ a("path", { fill: "currentColor", d: "M13.635 6.372c.3-.296 1.566-1.118 1.833-.855.25.263-.567 1.529-.85 1.808-.283.296-.5.51-.65.658l.467 4.768-.533.526-1.6-3.65-.633.625c-.45.46-1.117.937-1.666 1.266l.083 1.644-.25.246s-.783-1.446-.816-1.48c-.017-.032-1.483-.821-1.483-.821l.25-.247 1.65.082c.332-.542.799-1.2 1.265-1.66l.617-.608-3.666-1.595.533-.526 4.8.477c.15-.165.366-.379.649-.658" }),
  /* @__PURE__ */ a("path", { fill: "currentColor", d: "M6.337 3.33C9.469.223 14.535.223 17.65 3.33a7.923 7.923 0 0 1 0 11.262c-3.133 3.107-8.198 3.107-11.314 0a7.95 7.95 0 0 1 0-11.262m1 10.292a6.62 6.62 0 0 0 9.33 0c2.583-2.581 2.583-6.74 0-9.289a6.62 6.62 0 0 0-9.33 0 6.537 6.537 0 0 0 0 9.29" }),
  /* @__PURE__ */ a("path", { fill: "currentColor", d: "M12.002 18.34c1.383 0 2.7-.279 3.932-.854a.697.697 0 0 1 .934.345c.15.345 0 .756-.35.92a10.6 10.6 0 0 1-4.516.987c-1.566 0-3.1-.329-4.515-.986a.68.68 0 0 1-.35-.921.697.697 0 0 1 .933-.345 9.5 9.5 0 0 0 3.932.855M12.002 22.5c-1.25 0-2.466-.18-3.649-.559a.716.716 0 0 1-.466-.871.71.71 0 0 1 .883-.46c1.033.328 2.132.493 3.232.493s2.166-.165 3.216-.477a.715.715 0 0 1 .883.46.69.69 0 0 1-.466.872c-1.184.361-2.4.542-3.633.542" })
] }), t7 = w(e7), n7 = (e, t) => /* @__PURE__ */ a("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: /* @__PURE__ */ a("path", { fill: "currentColor", d: "M9 6a3 3 0 1 0 0 6 3 3 0 0 0 0-6M4 9a5 5 0 1 1 10 0A5 5 0 0 1 4 9M15 7a1 1 0 0 1 1-1 4 4 0 0 1 0 8 1 1 0 1 1 0-2 2 2 0 1 0 0-4 1 1 0 0 1-1-1M2.793 17.293a1 1 0 0 0 1.41 1.418l.007-.007.047-.043c.046-.04.12-.104.222-.183a6.6 6.6 0 0 1 .93-.596A7.6 7.6 0 0 1 9 17c1.554 0 2.768.443 3.592.882.412.22.724.438.929.596a4 4 0 0 1 .269.226l.006.006a1 1 0 0 0 1.411-1.417l-.003-.003-.003-.003-.01-.01a3 3 0 0 0-.12-.11 6 6 0 0 0-.326-.27 8.6 8.6 0 0 0-1.212-.78A9.6 9.6 0 0 0 9 15a9.6 9.6 0 0 0-4.533 1.118 8.6 8.6 0 0 0-1.212.779 6 6 0 0 0-.446.38l-.01.01-.003.003-.002.002q-.002.001-.001 0m11 1.415.002.001.001.002M16 16a1 1 0 0 1 1-1c1.07 0 1.919.307 2.502.618a4.8 4.8 0 0 1 .866.592l.057.052.02.018.006.007.003.003.002.002q.002.001.001 0a1 1 0 0 1-1.406 1.423l-.012-.01-.085-.07a3 3 0 0 0-.393-.253A3.3 3.3 0 0 0 17 17a1 1 0 0 1-1-1" }) }), r7 = w(n7), o7 = (e, t) => /* @__PURE__ */ a("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: /* @__PURE__ */ a("path", { fill: "currentColor", d: "M4 11.467a3.06 3.06 0 0 1-1.212-3.365l.629-2.2A4 4 0 0 1 7.263 3h9.474a4 4 0 0 1 3.846 2.901l.629 2.201A3.06 3.06 0 0 1 20 11.467V16a4 4 0 0 1-4 4h-1a2 2 0 0 1-2-2v-2a1 1 0 1 0-2 0v2a2 2 0 0 1-2 2H8a4 4 0 0 1-4-4zM5.34 6.45l-.629 2.2a1.058 1.058 0 0 0 1.963.764l.432-.862a1 1 0 0 1 1.788 0l.553 1.105a.618.618 0 0 0 1.106 0l.553-1.105a1 1 0 0 1 1.788 0l.553 1.105a.618.618 0 0 0 1.106 0l.553-1.105a1 1 0 0 1 1.788 0l.432.862a1.058 1.058 0 0 0 1.963-.763L18.66 6.45A2 2 0 0 0 16.737 5H7.263A2 2 0 0 0 5.34 6.45m2.624 4.577a3.06 3.06 0 0 1-1.964.96V16a2 2 0 0 0 2 2h1v-2a3 3 0 1 1 6 0v2h1a2 2 0 0 0 2-2v-4.012a3.06 3.06 0 0 1-1.964-.96 2.618 2.618 0 0 1-4.036.043 2.618 2.618 0 0 1-4.036-.043" }) }), a7 = w(o7), i7 = (e, t) => /* @__PURE__ */ b("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: [
  /* @__PURE__ */ a("path", { fill: "currentColor", d: "M20 8a1 1 0 0 1 1 1v1.444c0 1.643 0 2.937-.085 3.978-.087 1.063-.267 1.95-.678 2.756a7 7 0 0 1-3.06 3.059c-.805.41-1.692.591-2.755.678-1.041.085-2.335.085-3.978.085H9a1 1 0 1 1 0-2h1.4c1.697 0 2.909 0 3.86-.078.938-.077 1.533-.224 2.01-.467a5 5 0 0 0 2.185-2.185c.243-.477.39-1.072.467-2.01.077-.951.078-2.163.078-3.86V9a1 1 0 0 1 1-1" }),
  /* @__PURE__ */ a("path", { fill: "currentColor", d: "M4 8a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v6a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4zm4-2a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2z" }),
  /* @__PURE__ */ a("path", { fill: "currentColor", d: "M11 7a1 1 0 0 1 1 1v2h2a1 1 0 1 1 0 2h-2v2a1 1 0 1 1-2 0v-2H8a1 1 0 1 1 0-2h2V8a1 1 0 0 1 1-1" })
] }), s7 = w(i7), l7 = (e, t) => /* @__PURE__ */ a("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: /* @__PURE__ */ a("path", { fill: "currentColor", d: "M17.56 5.172A1 1 0 0 1 18 6v11a1 1 0 0 1-1.371.928l-3.928-1.57a5 5 0 0 0-1.201-.315v1.207a2.75 2.75 0 1 1-5.5 0V16a3 3 0 0 1-3-3v-3a3 3 0 0 1 3-3h3.882a10 10 0 0 0 3.714-.715l3.033-1.213a1 1 0 0 1 .932.1M16 7.477l-1.662.665A12 12 0 0 1 9.882 9H6a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h1a1 1 0 0 1 1 1v2.25a.75.75 0 0 0 1.5 0V15a1 1 0 0 1 1-1h.345c.89 0 1.772.17 2.6.5L16 15.524zM20 9a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0v-4a1 1 0 0 1 1-1" }) }), c7 = w(l7), u7 = (e, t) => /* @__PURE__ */ b("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: [
  /* @__PURE__ */ a("path", { fill: "currentColor", d: "M9 11a1 1 0 1 0 0 2 1 1 0 0 0 0-2M11 12a1 1 0 1 1 2 0 1 1 0 0 1-2 0M15 11a1 1 0 1 0 0 2 1 1 0 0 0 0-2" }),
  /* @__PURE__ */ a("path", { fill: "currentColor", d: "M12 6a6 6 0 1 0 0 12 6 6 0 0 0 0-12m-8 6a8 8 0 1 1 16 0 8 8 0 0 1-16 0" })
] }), d7 = w(u7), f7 = (e, t) => /* @__PURE__ */ b("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: [
  /* @__PURE__ */ a("path", { fill: "currentColor", d: "M5 7a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H9a4 4 0 0 1-4-4zm4-2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2z" }),
  /* @__PURE__ */ a("path", { fill: "currentColor", d: "M11 16a1 1 0 1 1 2 0 1 1 0 0 1-2 0" })
] }), h7 = w(f7), p7 = (e, t) => /* @__PURE__ */ b("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: [
  /* @__PURE__ */ a("path", { fill: "currentColor", fillRule: "evenodd", d: "M10.326 1.5a2 2 0 0 0-1.923 2.55l.41 1.438A6 6 0 0 0 5.28 9.945l-.715 4C3.91 17.623 6.736 21 10.472 21h3.056c3.736 0 6.563-3.377 5.907-7.055l-.715-4a6 6 0 0 0-3.534-4.457l.412-1.439A2 2 0 0 0 13.674 1.5zM12.814 7h-1.628a4 4 0 0 0-3.938 3.297l-.714 4A4 4 0 0 0 10.472 19h3.056a4 4 0 0 0 3.938-4.703l-.715-4A4 4 0 0 0 12.814 7m.432-2 .428-1.5h-3.348l.428 1.5z", clipRule: "evenodd" }),
  /* @__PURE__ */ a("path", { fill: "currentColor", d: "M11 9a1 1 0 0 1 2 0h1a1 1 0 1 1 0 2h-2.5a.5.5 0 0 0 0 1h1a2.5 2.5 0 0 1 .499 4.95L13 17a1 1 0 1 1-2 0h-1a1 1 0 1 1 0-2h2.5a.5.5 0 0 0 0-1h-1a2.5 2.5 0 0 1-.499-4.95z" })
] }), m7 = w(p7), v7 = (e, t) => /* @__PURE__ */ a("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: /* @__PURE__ */ a("path", { fill: "currentColor", d: "M4 6a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm5 0H6v3h3zM4 15a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm5 0H6v3h3zM13 6a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-3a2 2 0 0 1-2-2zm5 0h-3v3h3zM13 15a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-3a2 2 0 0 1-2-2zm5 0h-3v3h3z" }) }), g7 = w(v7), w7 = (e, t) => /* @__PURE__ */ b("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: [
  /* @__PURE__ */ a("path", { fill: "currentColor", d: "M7 7a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h3.5a1 1 0 1 1 0 2H7a4 4 0 0 1-4-4V9a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4 1 1 0 1 1-2 0 2 2 0 0 0-2-2z" }),
  /* @__PURE__ */ a("path", { fill: "currentColor", d: "M6 10a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1M7 13a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2zM17.293 12.293a1 1 0 0 1 1.414 0l3 3a1 1 0 0 1 0 1.414l-3 3a1 1 0 0 1-1.414-1.414L18.586 17H14a1 1 0 1 1 0-2h4.586l-1.293-1.293a1 1 0 0 1 0-1.414" })
] }), y7 = w(w7), x7 = (e, t) => /* @__PURE__ */ b("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: [
  /* @__PURE__ */ a("path", { fill: "currentColor", d: "M17.293 12.293a1 1 0 0 1 1.414 0l3 3a1 1 0 0 1 0 1.414l-3 3a1 1 0 0 1-1.414-1.414L18.586 17H14a1 1 0 1 1 0-2h4.586l-1.293-1.293a1 1 0 0 1 0-1.414" }),
  /* @__PURE__ */ a("path", { fill: "currentColor", d: "M7.161 3h2.567c1.07 0 2.057.577 2.581 1.51.17.303.49.49.838.49h2.843c1.49-.028 2.822.154 3.747 1.065.909.896 1.182 2.264 1.262 3.886a1 1 0 0 1-1.998.098c-.078-1.58-.346-2.241-.668-2.56-.304-.3-.89-.517-2.313-.49L16 7h-2.853a2.96 2.96 0 0 1-2.581-1.51.96.96 0 0 0-.838-.49H7.2c-.577 0-.949 0-1.232.024-.272.022-.373.06-.422.085a1 1 0 0 0-.437.437c-.025.05-.063.15-.085.422C5 6.25 5 6.623 5 7.2v6c0 .857 0 1.439.038 1.889.035.438.1.663.18.819a2 2 0 0 0 .874.874c.156.08.38.145.819.18C7.361 17 7.943 17 8.8 17h2.075a1 1 0 1 1 0 2H8.759c-.805 0-1.47 0-2.01-.044-.563-.046-1.08-.145-1.565-.392a4 4 0 0 1-1.748-1.748c-.247-.485-.346-1.002-.392-1.564C3 14.71 3 14.046 3 13.242v-6.08c0-.528 0-.982.03-1.357.033-.395.104-.789.297-1.167a3 3 0 0 1 1.311-1.311c.378-.193.772-.264 1.167-.296C6.18 3 6.635 3 7.161 3" })
] }), b7 = w(x7), C7 = (e, t) => /* @__PURE__ */ a("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: /* @__PURE__ */ a("path", { fill: "currentColor", fillRule: "evenodd", d: "M7.161 3h2.567c1.07 0 2.057.577 2.581 1.51.17.303.49.49.838.49h2.094c.805 0 1.47 0 2.01.044.563.046 1.08.145 1.565.392a4 4 0 0 1 1.748 1.748c.247.485.346 1.002.392 1.564.044.541.044 1.206.044 2.01v2.483c0 .805 0 1.47-.044 2.01-.046.563-.145 1.08-.392 1.565a4 4 0 0 1-1.748 1.748c-.485.247-1.002.346-1.564.392l-.252.017V19H7v-.027l-.252-.017c-.562-.046-1.079-.145-1.564-.392a4 4 0 0 1-1.748-1.748c-.247-.485-.346-1.002-.392-1.564C3 14.71 3 14.046 3 13.242v-6.08c0-.528 0-.982.03-1.357.033-.395.104-.789.297-1.167a3 3 0 0 1 1.311-1.311c.378-.193.772-.264 1.167-.296C6.18 3 6.635 3 7.161 3m9.928 13.962q-.228.019-.51.027a5.02 5.02 0 0 0-2.618-2.59 3.5 3.5 0 1 0-3.922 0 5.02 5.02 0 0 0-2.618 2.59 10 10 0 0 1-.51-.027c-.438-.035-.663-.1-.819-.18a2 2 0 0 1-.874-.874c-.08-.156-.145-.38-.18-.819C5 14.639 5 14.057 5 13.2v-6c0-.577 0-.949.024-1.232.022-.272.06-.373.085-.422a1 1 0 0 1 .437-.437c.05-.025.15-.063.422-.085C6.25 5 6.623 5 7.2 5h2.528c.347 0 .668.187.838.49A2.96 2.96 0 0 0 13.147 7H15.2c.857 0 1.439 0 1.889.038.438.035.663.1.819.18a2 2 0 0 1 .874.874c.08.156.145.38.18.819C19 9.361 19 9.943 19 10.8v2.4c0 .857 0 1.439-.038 1.889-.035.438-.1.663-.18.819a2 2 0 0 1-.874.874c-.156.08-.38.145-.819.18M12 16c.889 0 1.687.386 2.236 1H9.764c.55-.614 1.348-1 2.236-1m-1.5-4.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0", clipRule: "evenodd" }) }), M7 = w(C7), S7 = (e, t) => /* @__PURE__ */ a("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: /* @__PURE__ */ a("path", { fill: "currentColor", d: "M9 12.5a1 1 0 0 1 1-1h2.5a1 1 0 1 1 0 2H10a1 1 0 0 1-1-1M17.65 13.43q-.048.131-.107.248c-.148.295-.322.48-.527.6-.21.124-.524.222-1.016.222a1 1 0 1 0 0 2c.758 0 1.444-.152 2.03-.497.593-.349 1.012-.851 1.302-1.43.552-1.105.668-2.568.668-4.073a3 3 0 1 0-2.35 2.93M16 10.5a1 1 0 1 1 2 0 1 1 0 0 1-2 0M8 8.5a1 1 0 0 0-2 0c0 .175-.097.433-.332.668S5.175 9.5 5 9.5a1 1 0 0 0 0 2c.352 0 .69-.073 1-.197V15.5a1 1 0 1 0 2 0z" }) }), R7 = w(S7), _7 = (e, t) => /* @__PURE__ */ b("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: [
  /* @__PURE__ */ a("path", { fill: "currentColor", d: "M9 12a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2h-4a1 1 0 0 1-1-1M9 8a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2h-4a1 1 0 0 1-1-1" }),
  /* @__PURE__ */ a("path", { fill: "currentColor", d: "M5 7a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v12a1 1 0 1 1 0 2H5a1 1 0 1 1 0-2zm2 12h2v-2.5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2V19h2V7a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2zm6 0v-2.5h-2V19z" })
] }), Jc = w(_7), P7 = (e, t) => /* @__PURE__ */ b("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: [
  /* @__PURE__ */ a("path", { fill: "currentColor", d: "M12 7a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2h-6a1 1 0 0 1-1-1M12 12a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2h-6a1 1 0 0 1-1-1M12 17a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2h-6a1 1 0 0 1-1-1M7 13a1 1 0 0 0-1 1 1 1 0 1 1-2 0 3 3 0 1 1 3 3 1 1 0 0 0-1 1h3a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1v-1a3 3 0 0 1 3-3 1 1 0 1 0 0-2" }),
  /* @__PURE__ */ a("path", { fill: "currentColor", d: "M8 4a1 1 0 0 0-2 0c0 .175-.097.433-.332.668S5.175 5 5 5a1 1 0 0 0 0 2c.352 0 .69-.073 1-.198V10a1 1 0 1 0 2 0z" })
] }), A7 = w(P7), T7 = (e, t) => /* @__PURE__ */ a("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: /* @__PURE__ */ a("path", { fill: "currentColor", d: "M18.293 7.707a1.83 1.83 0 0 0-2.586 0l-7 7a.414.414 0 0 0 .586.586l5-5a1 1 0 1 1 1.414 1.414l-5 5a2.414 2.414 0 0 1-3.414-3.414l7-7a3.828 3.828 0 1 1 5.414 5.414l-7 7a5.243 5.243 0 1 1-7.414-7.414l5-5a1 1 0 1 1 1.414 1.414l-5 5a3.243 3.243 0 1 0 4.586 4.586l7-7a1.83 1.83 0 0 0 0-2.586" }) }), N7 = w(T7), D7 = (e, t) => /* @__PURE__ */ a("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: /* @__PURE__ */ a("path", { fill: "currentColor", d: "M5 6.5c0-.465 0-.697.038-.89A2 2 0 0 1 6.61 4.038C6.803 4 7.035 4 7.5 4s.697 0 .89.038A2 2 0 0 1 9.962 5.61c.038.193.038.425.038.89v11c0 .465 0 .697-.038.89a2 2 0 0 1-1.572 1.571C8.197 20 7.965 20 7.5 20s-.697 0-.89-.039a2 2 0 0 1-1.572-1.571C5 18.197 5 17.965 5 17.5zM14 6.5c0-.465 0-.697.039-.89a2 2 0 0 1 1.57-1.571C15.804 4 16.036 4 16.5 4s.697 0 .89.039a2 2 0 0 1 1.572 1.57c.038.194.038.426.038.891v11c0 .465 0 .697-.038.89a2 2 0 0 1-1.572 1.572c-.193.038-.425.038-.89.038s-.697 0-.89-.038a2 2 0 0 1-1.571-1.572C14 18.197 14 17.965 14 17.5z" }) }), k7 = w(D7), E7 = (e, t) => /* @__PURE__ */ a("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: /* @__PURE__ */ a("path", { fill: "currentColor", fillRule: "evenodd", d: "M5 4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 2h4v12H5zM15 4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 2h4v12h-4z", clipRule: "evenodd" }) }), F7 = w(E7), I7 = (e, t) => /* @__PURE__ */ b("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: [
  /* @__PURE__ */ a("path", { fill: "currentColor", fillRule: "evenodd", d: "M5 6a4 4 0 0 1 4-4h5a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H9a4 4 0 0 1-4-4zm4-2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h5a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z", clipRule: "evenodd" }),
  /* @__PURE__ */ a("path", { fill: "currentColor", fillRule: "evenodd", d: "M20 8a1 1 0 0 1 1 1v1.444c0 1.643 0 2.937-.085 3.978-.087 1.063-.267 1.95-.678 2.756a7 7 0 0 1-3.06 3.059c-.805.41-1.692.591-2.755.678-1.041.085-2.335.085-3.978.085H9a1 1 0 1 1 0-2h1.4c1.697 0 2.909 0 3.86-.078.938-.077 1.533-.224 2.01-.467a5 5 0 0 0 2.185-2.185c.243-.477.39-1.072.467-2.01.077-.951.078-2.163.078-3.86V9a1 1 0 0 1 1-1", clipRule: "evenodd" }),
  /* @__PURE__ */ a("path", { fill: "currentColor", d: "M10.5 6a1 1 0 0 1 2 0h1a1 1 0 1 1 0 2H11a.5.5 0 0 0 0 1h1a2.5 2.5 0 0 1 .499 4.95l.001.05a1 1 0 1 1-2 0h-1a1 1 0 1 1 0-2H12a.5.5 0 0 0 0-1h-1a2.5 2.5 0 0 1-.499-4.95z" })
] }), O7 = w(I7), V7 = (e, t) => /* @__PURE__ */ a("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: /* @__PURE__ */ a("path", { fill: "currentColor", d: "M13.793 4.793a3.828 3.828 0 1 1 5.414 5.414l-7.5 7.5a1 1 0 0 1-.444.258l-5.5 1.5a1 1 0 0 1-1.228-1.228l1.5-5.5a1 1 0 0 1 .258-.444zm4 1.414a1.83 1.83 0 0 0-2.586 0L8.414 13 11 15.586l6.793-6.793a1.83 1.83 0 0 0 0-2.586M9.074 16.49l-1.563-1.563-.586 2.149z" }) }), B7 = w(V7), L7 = (e, t) => /* @__PURE__ */ b("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: [
  /* @__PURE__ */ a("path", { fill: "currentColor", d: "M4 5a1 1 0 0 1 1 1v9a2 2 0 0 0 2 2h13a1 1 0 1 1 0 2H7a4 4 0 0 1-4-4V6a1 1 0 0 1 1-1" }),
  /* @__PURE__ */ a("path", { fill: "currentColor", d: "M17 9a1 1 0 1 1 0-2h3a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0v-.586l-2.94 2.94a1.5 1.5 0 0 1-2.12 0L12 11.414l-3.293 3.293a1 1 0 0 1-1.414-1.414l3.646-3.647a1.5 1.5 0 0 1 2.122 0L15 11.586 17.586 9z" })
] }), $7 = w(L7), z7 = (e, t) => /* @__PURE__ */ a("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: /* @__PURE__ */ a("path", { fill: "currentColor", d: "M12 6a3 3 0 1 0 0 6 3 3 0 0 0 0-6M7 9a5 5 0 1 1 10 0A5 5 0 0 1 7 9M5.793 17.293a1 1 0 0 0 1.41 1.418l.007-.007.047-.043c.046-.04.12-.104.222-.183a6.6 6.6 0 0 1 .93-.596A7.6 7.6 0 0 1 12 17c1.554 0 2.768.443 3.592.882.412.22.724.438.929.596a4 4 0 0 1 .269.226l.006.006a1 1 0 0 0 1.411-1.417l-.003-.003-.003-.003-.01-.01a3 3 0 0 0-.12-.11 6 6 0 0 0-.326-.27 8.6 8.6 0 0 0-1.212-.78A9.6 9.6 0 0 0 12 15a9.6 9.6 0 0 0-4.533 1.118 8.6 8.6 0 0 0-1.212.779 6 6 0 0 0-.446.38l-.01.01-.003.003-.002.002zm11 1.415.002.001.001.002" }) }), H7 = w(z7), W7 = (e, t) => /* @__PURE__ */ a("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: /* @__PURE__ */ a("path", { fill: "currentColor", d: "M3.447 7.496C3.232 5.34 5.09 4 6.907 4h2.872a2 2 0 0 1 1.898 1.368l.974 2.921a2 2 0 0 1-1.155 2.49l-.572.228c.289.462.583.835.908 1.16.326.326.7.62 1.16.909l.23-.572a2 2 0 0 1 2.489-1.154l2.921.973A2 2 0 0 1 20 14.221v2.28c0 2.168-1.815 4.1-4.167 3.645-2.629-.507-6.52-1.778-9.114-5.021-2.324-2.906-3.078-5.682-3.272-7.63M6.907 6c-.996 0-1.534.653-1.47 1.297.161 1.615.79 4.012 2.844 6.578 2.154 2.693 5.478 3.834 7.93 4.308.902.174 1.789-.538 1.789-1.683v-2.28l-2.922-.973-.65 1.624a1 1 0 0 1-1.375.523c-1.06-.53-1.91-1.087-2.635-1.812s-1.282-1.575-1.812-2.635a1 1 0 0 1 .523-1.375l1.624-.65L9.78 6z" }) }), U7 = w(W7), G7 = (e, t) => /* @__PURE__ */ b("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: [
  /* @__PURE__ */ a("path", { fill: "currentColor", d: "M12 6c-2.106 0-4 1.95-4 4.6 0 1.263.507 2.464 1.386 3.743.716 1.04 1.622 2.058 2.614 3.16.992-1.102 1.898-2.12 2.614-3.16C15.493 13.064 16 11.863 16 10.6 16 7.95 14.106 6 12 6m-6 4.6C6 7.065 8.583 4 12 4s6 3.065 6 6.6c0 1.83-.743 3.428-1.738 4.876-.828 1.204-1.889 2.382-2.93 3.538l-.586.652a1 1 0 0 1-1.492 0l-.585-.652c-1.042-1.156-2.103-2.334-2.93-3.538C6.743 14.028 6 12.43 6 10.6" }),
  /* @__PURE__ */ a("path", { fill: "currentColor", d: "M11 10a1 1 0 1 1 2 0 1 1 0 0 1-2 0" })
] }), j7 = w(G7), K7 = (e, t) => /* @__PURE__ */ b("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: [
  /* @__PURE__ */ a("path", { fill: "currentColor", d: "M12 5c-2.702 0-5 2.356-5 5.4 0 1.47.62 2.864 1.686 4.34.902 1.25 2.057 2.472 3.31 3.797l.004.005.005-.005c1.252-1.325 2.407-2.547 3.31-3.797C16.38 13.264 17 11.87 17 10.4 17 7.356 14.702 5 12 5m-7 5.4C5 6.375 8.074 3 12 3s7 3.375 7 7.4c0 2.065-.88 3.87-2.064 5.51-.987 1.368-2.251 2.704-3.502 4.027q-.354.374-.704.747a1 1 0 0 1-1.46 0q-.35-.373-.704-.747c-1.25-1.323-2.515-2.659-3.502-4.026C5.88 14.27 5 12.465 5 10.4" }),
  /* @__PURE__ */ a("path", { fill: "currentColor", d: "M9 10a3 3 0 1 1 6 0 3 3 0 0 1-6 0m3-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2" })
] }), Y7 = w(K7), q7 = (e, t) => /* @__PURE__ */ a("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: /* @__PURE__ */ a("path", { fill: "currentColor", d: "m6.11 8.841-1.422 1.424a2.43 2.43 0 0 0 0 3.441l1.424 1.424 1.392-.007c.315 0 .617-.125.885-.371l2.397-2.394a1.5 1.5 0 0 1 .616-.373 1.9 1.9 0 0 1-.596-.352l-.01-.009-2.408-2.407c-.268-.246-.57-.371-.884-.371zM7.484 16.504c.67-.146 1.677-.387 1.967-.677l2.404-2.404c.002-.002.012-.01.032-.01.019 0 .029.008.03.01l2.414 2.413c.323.323 1.23.742 1.876.951l-2.498 2.498a2.48 2.48 0 0 1-3.441 0zM17.646 15.348l-1.367-.216c-.326 0-.647-.132-.88-.365l-2.412-2.413a1.5 1.5 0 0 0-.614-.37c.226-.08.43-.207.594-.351l.01-.009L15.4 9.203c.232-.23.554-.364.88-.364l1.587.005 1.422 1.421c.95.95.95 2.492 0 3.441zM16.207 7.182l-2.498-2.497a2.436 2.436 0 0 0-3.444 0L7.39 7.562c.699.109 1.773.277 2.066.587l2.4 2.4.002.002q.011.011.012.01h.005c.003 0 .024 0 .056-.025l2.4-2.4c.324-.324 1.23-.745 1.876-.954" }) }), X7 = w(q7), Z7 = (e, t) => /* @__PURE__ */ a("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: /* @__PURE__ */ a("path", { fill: "currentColor", d: "M6 18.503V5.497C6 3.95 7.68 2.989 9.014 3.773l11.055 6.503c1.315.773 1.315 2.675 0 3.448L9.014 20.227C7.681 21.011 6 20.05 6 18.503" }) }), Q7 = w(Z7), J7 = (e, t) => /* @__PURE__ */ a("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: /* @__PURE__ */ a("path", { fill: "currentColor", d: "M6 6.674c0-1.513 1.616-2.478 2.948-1.76l9.89 5.325c1.403.755 1.403 2.767 0 3.522l-9.89 5.326C7.616 19.804 6 18.839 6 17.326zM17.89 12 8 6.674v10.652z" }) }), ew = w(J7), tw = (e, t) => /* @__PURE__ */ b("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: [
  /* @__PURE__ */ a("path", { fill: "currentColor", d: "M21 10c0-1.9-1.325-3.49-3.101-3.899A4 4 0 0 0 14 3h-4C8.1 3 6.51 4.325 6.101 6.101A4 4 0 0 0 3 10v4a4 4 0 0 0 4 4 3 3 0 0 0 3 3h4a3 3 0 0 0 3-3 4 4 0 0 0 4-4zm-5.268-4H8.268A2 2 0 0 1 10 5h4a2 2 0 0 1 1.732 1M17 16v-1a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v1a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2m-8 2v-3h6v3a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1" }),
  /* @__PURE__ */ a("path", { fill: "currentColor", d: "M18 11a1 1 0 1 1-2 0 1 1 0 0 1 2 0" })
] }), nw = w(tw), rw = (e, t) => /* @__PURE__ */ a("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: /* @__PURE__ */ a("path", { fill: "currentColor", d: "M11 3a3 3 0 0 0-3 3H7a4 4 0 0 0-4 4v6a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4v-6a4 4 0 0 0-4-4h-1a3 3 0 0 0-3-3zM5 16v-3h5v.75c0 .69.56 1.25 1.25 1.25h1.5c.69 0 1.25-.56 1.25-1.25V13h5v3a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2m0-5v-1a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v1zm9-5h-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1" }) }), ow = w(rw), aw = (e, t) => /* @__PURE__ */ a("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: /* @__PURE__ */ a("path", { fill: "currentColor", d: "M6.12 5.743A2 2 0 0 1 7.977 3h8.046a2 2 0 0 1 1.857 2.743l-1.184 2.96a2.73 2.73 0 0 0 .38 2.694l1.458 1.875c1.022 1.314.086 3.228-1.579 3.228H13V20a1 1 0 0 1-2 0v-3.5H7.045c-1.665 0-2.6-1.914-1.58-3.228l1.46-1.875a2.73 2.73 0 0 0 .38-2.693zM9.5 9.719c0 1.053-.35 2.075-.997 2.906L7.045 14.5h9.91l-1.458-1.875a4.73 4.73 0 0 1-.659-4.664L16.023 5H7.977l1.184 2.961c.224.56.339 1.156.339 1.758" }) }), iw = w(aw), sw = (e, t) => /* @__PURE__ */ b("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: [
  /* @__PURE__ */ a("path", { fill: "currentColor", d: "M11 16a1 1 0 1 1 2 0 1 1 0 0 1-2 0" }),
  /* @__PURE__ */ a("path", { fill: "currentColor", d: "M12 18a6 6 0 1 1 0-12 6 6 0 0 1 0 12m0 2a8 8 0 1 0 0-16 8 8 0 0 0 0 16" }),
  /* @__PURE__ */ a("path", { fill: "currentColor", d: "M12 9.5a1 1 0 0 0-1 1 1 1 0 1 1-2 0 3 3 0 1 1 4 2.83v.17a1 1 0 1 1-2 0v-1a1 1 0 0 1 1-1 1 1 0 1 0 0-2" })
] }), lw = w(sw), cw = (e, t) => /* @__PURE__ */ a("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: /* @__PURE__ */ a("path", { fill: "currentColor", d: "M20 12a8 8 0 1 1-16 0 8 8 0 0 1 16 0m-9-2a1 1 0 1 1 1 1 1 1 0 0 0-1 1v1a1 1 0 1 0 2 0v-.17A3.001 3.001 0 1 0 9 10a1 1 0 1 0 2 0m1 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2" }) }), uw = w(cw), dw = (e, t) => /* @__PURE__ */ a("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: /* @__PURE__ */ a("path", { fill: "currentColor", d: "M13.5 17.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M10.602 7.497C10.263 7.798 10 8.271 10 9a1 1 0 0 1-2 0c0-1.271.487-2.298 1.273-2.997C10.041 5.32 11.037 5 12 5c1.075 0 2.067.528 2.77 1.23C15.473 6.933 16 7.925 16 9c0 .934-.239 1.664-.642 2.257-.383.565-.881.948-1.258 1.23l-.075.057c-.373.28-.604.452-.775.667-.143.178-.25.396-.25.789a1 1 0 1 1-2 0c0-.857.268-1.514.688-2.039.341-.426.78-.753 1.107-.995l.105-.079c.373-.28.625-.49.804-.754.16-.235.296-.567.296-1.133 0-.425-.223-.933-.645-1.355C12.933 7.222 12.425 7 12 7c-.537 0-1.041.18-1.398.497" }) }), fw = w(dw), hw = (e, t) => /* @__PURE__ */ a("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: /* @__PURE__ */ a("path", { fill: "currentColor", d: "M4 11a6 6 0 0 1 6-6 1 1 0 1 1 0 2 4 4 0 0 0-4 4v1h1.5A3.5 3.5 0 1 1 4 15.5zm5 4.5A1.5 1.5 0 0 0 7.5 14H6v1.5a1.5 1.5 0 0 0 3 0M13 11a6 6 0 0 1 6-6 1 1 0 1 1 0 2 4 4 0 0 0-4 4v1h1.5a3.5 3.5 0 1 1-3.5 3.5zm5 4.5a1.5 1.5 0 0 0-1.5-1.5H15v1.5a1.5 1.5 0 0 0 3 0" }) }), pw = w(hw), mw = (e, t) => /* @__PURE__ */ b("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: [
  /* @__PURE__ */ a("path", { fill: "currentColor", d: "M12 6a6 6 0 1 0 6 6 1 1 0 1 1 2 0 8 8 0 1 1-8-8 1 1 0 1 1 0 2" }),
  /* @__PURE__ */ a("path", { fill: "currentColor", d: "M10 9a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0v-1a1 1 0 0 1 1-1M14 9a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0v-1a1 1 0 0 1 1-1M8.72 13.375a1 1 0 0 1 1.405-.156 3 3 0 0 0 3.75 0 1 1 0 1 1 1.25 1.562 5 5 0 0 1-6.25 0 1 1 0 0 1-.156-1.406M18 2.5a1 1 0 0 1 1 1V5h1.5a1 1 0 1 1 0 2H19v1.5a1 1 0 1 1-2 0V7h-1.5a1 1 0 1 1 0-2H17V3.5a1 1 0 0 1 1-1" })
] }), vw = w(mw), gw = (e, t) => /* @__PURE__ */ a("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: /* @__PURE__ */ a("path", { fill: "currentColor", d: "M11 3a8 8 0 1 0 4.906 14.32l2.387 2.387a1 1 0 0 0 1.414-1.414l-2.387-2.387A8 8 0 0 0 11 3m4.746 11.67a6.24 6.24 0 0 0-2.317-1.65 3.5 3.5 0 1 0-4.858 0 6.24 6.24 0 0 0-2.317 1.651 6 6 0 1 1 9.493 0m-8.021 1.358c1.717-1.98 4.833-1.98 6.55 0A5.97 5.97 0 0 1 11 17a5.97 5.97 0 0 1-3.275-.972M11 9a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3" }) }), ww = w(gw), yw = (e, t) => /* @__PURE__ */ a("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: /* @__PURE__ */ a("path", { fill: "currentColor", d: "M13.038 5.003a1 1 0 0 1-1.005.995 6.002 6.002 0 0 0-4.957 9.433l.892-.584a1 1 0 0 1 1.526 1.042l-.579 2.768a1 1 0 0 1-1.183.775l-2.769-.58a1 1 0 0 1-.342-1.815l.781-.511a8 8 0 0 1-.994-2.003 8.002 8.002 0 0 1 7.635-10.525 1 1 0 0 1 .995 1.005M19.17 8.45l.866-.567a1 1 0 0 0-.343-1.816l-2.769-.579a1 1 0 0 0-1.183.774l-.58 2.769a1 1 0 0 0 1.527 1.041l.791-.517a6.002 6.002 0 0 1-5.512 8.447 1 1 0 1 0-.01 2A8.002 8.002 0 0 0 19.17 8.45" }) }), xw = w(yw), bw = (e, t) => /* @__PURE__ */ a("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: /* @__PURE__ */ a("path", { fill: "currentColor", d: "M4 12a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1" }) }), Cw = w(bw), Mw = (e, t) => /* @__PURE__ */ a("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: /* @__PURE__ */ a("path", { fill: "currentColor", d: "M16.383 3.076A1 1 0 0 1 17 4v1a4 4 0 0 1 4 4v1a1 1 0 1 1-2 0V9a2 2 0 0 0-2-2v1a1 1 0 0 1-1.707.707l-2-2a1 1 0 0 1 0-1.414l2-2a1 1 0 0 1 1.09-.217M7.617 20.924A1 1 0 0 1 7 20v-1a4 4 0 0 1-4-4v-1a1 1 0 1 1 2 0v1a2 2 0 0 0 2 2v-1a1 1 0 0 1 1.707-.707l2 2a1 1 0 0 1 0 1.414l-2 2a1 1 0 0 1-1.09.217M13 16a3 3 0 0 1 3-3h2a3 3 0 0 1 3 3v2a3 3 0 0 1-3 3h-2a3 3 0 0 1-3-3zm3-1a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1zM3 6a3 3 0 0 1 3-3h2a3 3 0 0 1 3 3v2a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3zm3-1a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1z" }) }), Sw = w(Mw), Rw = (e, t) => /* @__PURE__ */ b("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: [
  /* @__PURE__ */ a("path", { fill: "currentColor", d: "M3 9a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v6a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4zm4-2a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z" }),
  /* @__PURE__ */ a("path", { fill: "currentColor", d: "M8 12a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1M12 8a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0V9a1 1 0 0 1 1-1M16 10a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0v-4a1 1 0 0 1 1-1" })
] }), _w = w(Rw), Pw = (e, t) => /* @__PURE__ */ b("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: [
  /* @__PURE__ */ a("path", { fill: "currentColor", d: "M14.324 7.006c-1.108.652-1.995 1.662-2.936 3.176l-.007.011c-.449.7-.852 1.646-1.213 2.561l1.08 1.08c.927-.361 1.888-.766 2.602-1.218q.028-.017.058-.033c1.641-.89 2.64-1.985 3.242-3.215.482-.983.732-2.097.817-3.337-1.586.1-2.727.437-3.643.975M10 15.414 8.586 14H5a1 1 0 0 1-.965-1.262L5 13l-.965-.262.001-.005.003-.009.009-.031a12 12 0 0 1 .154-.515c.106-.332.259-.786.45-1.268.19-.478.427-1.005.702-1.475.26-.445.618-.95 1.09-1.266l.001-.001c.547-.365 1.16-.446 1.682-.421s1.027.16 1.443.306c.235.084.455.175.648.264.875-1.267 1.842-2.299 3.092-3.035C14.822 4.393 16.641 4 19 4a1 1 0 0 1 1 1c0 1.838-.261 3.63-1.054 5.248-.68 1.389-1.728 2.599-3.238 3.588.08.18.163.38.239.594.147.417.281.921.306 1.443.025.523-.056 1.135-.42 1.682l-.002.001c-.316.472-.821.83-1.266 1.09-.47.275-.997.511-1.475.701a19 19 0 0 1-1.783.605l-.031.01-.01.002h-.003L11 19l.263.965A1 1 0 0 1 10 19zm2 2.21q.172-.065.35-.135c.43-.17.855-.364 1.205-.57.375-.218.556-.389.613-.474.05-.077.1-.218.088-.476a3.2 3.2 0 0 0-.195-.872 6 6 0 0 0-.099-.258c-.647.322-1.339.606-1.962.848zm-2.827-7.581a5 5 0 0 0-.27-.104 3.2 3.2 0 0 0-.872-.194c-.258-.013-.4.036-.476.087-.085.057-.256.238-.475.613-.205.35-.399.775-.569 1.204q-.07.18-.134.351h1.939a24 24 0 0 1 .857-1.957" }),
  /* @__PURE__ */ a("path", { fill: "currentColor", d: "M3.673 17.44a2.668 2.668 0 1 1 2.886 2.887l-1.974.17a1 1 0 0 1-1.081-1.082zM6.332 17a.67.67 0 0 0-.666.611l-.068.791.79-.068A.669.669 0 0 0 6.333 17" })
] }), Aw = w(Pw), Tw = (e, t) => /* @__PURE__ */ a("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: /* @__PURE__ */ a("path", { fill: "currentColor", d: "M16 20H8a4 4 0 0 1-4-4V8a4 4 0 0 1 4-4h5.757a4 4 0 0 1 2.829 1.172l2.242 2.242A4 4 0 0 1 20 10.243V16a4 4 0 0 1-4 4M6 8v8a2 2 0 0 0 1 1.732V16a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v1.732A2 2 0 0 0 18 16v-5.757a2 2 0 0 0-.586-1.415L16 7.414V10a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1V6a2 2 0 0 0-2 2m8-1.985A2 2 0 0 0 13.757 6H10v3h4zM15 16a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v2h6z" }) }), Nw = w(Tw), Dw = (e, t) => /* @__PURE__ */ a("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: /* @__PURE__ */ a("path", { fill: "currentColor", d: "M11 3a8 8 0 1 0 4.906 14.32l2.387 2.387a1 1 0 0 0 1.414-1.414l-2.387-2.387A8 8 0 0 0 11 3m-6 8a6 6 0 1 1 12 0 6 6 0 0 1-12 0" }) }), eu = w(Dw), kw = (e, t) => /* @__PURE__ */ b("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: [
  /* @__PURE__ */ a("path", { fill: "currentColor", d: "M9.455 4.187c1.175-1.882 3.915-1.882 5.09 0l.74 1.185a1 1 0 0 0 .813.47l1.396.048c2.217.076 3.587 2.449 2.545 4.407l-.656 1.233a1 1 0 0 0 0 .94l.656 1.233c1.042 1.958-.328 4.33-2.545 4.407l-1.396.049a1 1 0 0 0-.813.47l-.74 1.184c-1.175 1.882-3.915 1.882-5.09 0l-.74-1.185a1 1 0 0 0-.813-.47l-1.396-.048c-2.217-.076-3.587-2.449-2.545-4.407l.656-1.233a1 1 0 0 0 0-.94l-.656-1.233C2.92 8.339 4.29 5.967 6.506 5.89l1.396-.049a1 1 0 0 0 .813-.47zm3.393 1.06a1 1 0 0 0-1.696 0l-.74 1.184a3 3 0 0 1-2.44 1.41l-1.397.047a1 1 0 0 0-.848 1.47l.656 1.233a3 3 0 0 1 0 2.818l-.656 1.233a1 1 0 0 0 .848 1.47l1.396.048a3 3 0 0 1 2.44 1.409l.74 1.185a1 1 0 0 0 1.697 0l.74-1.185a3 3 0 0 1 2.44-1.41l1.397-.047a1 1 0 0 0 .848-1.47l-.656-1.233a3 3 0 0 1 0-2.818l.656-1.233a1 1 0 0 0-.848-1.47l-1.396-.048a3 3 0 0 1-2.44-1.409z" }),
  /* @__PURE__ */ a("path", { fill: "currentColor", d: "M12 10.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M8.5 12a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0" })
] }), Ew = w(kw), Fw = (e, t) => /* @__PURE__ */ b("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: [
  /* @__PURE__ */ a("path", { fill: "currentColor", d: "M4 8a4 4 0 0 1 4-4h2a1 1 0 1 1 0 2H8a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-2.5a1 1 0 1 1 2 0V16a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4z" }),
  /* @__PURE__ */ a("path", { fill: "currentColor", d: "M16.293 3.293a1 1 0 0 1 1.414 0l3 3a1 1 0 0 1 0 1.414l-3 3a1 1 0 0 1-1.414-1.414L17.586 8H15a2 2 0 0 0-2 2v1.5a1 1 0 1 1-2 0V10a4 4 0 0 1 4-4h2.586l-1.293-1.293a1 1 0 0 1 0-1.414" })
] }), Iw = w(Fw), Ow = (e, t) => /* @__PURE__ */ b("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: [
  /* @__PURE__ */ a("path", { fill: "currentColor", d: "M7 7a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h3.5a1 1 0 1 1 0 2H7a4 4 0 0 1-4-4V9a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4 1 1 0 1 1-2 0 2 2 0 0 0-2-2z" }),
  /* @__PURE__ */ a("path", { fill: "currentColor", d: "M16.707 14.793a1 1 0 0 0-1.414 1.414l1 1a1 1 0 0 0 1.414 0l2-2a1 1 0 0 0-1.414-1.414L17 15.086z" }),
  /* @__PURE__ */ a("path", { fill: "currentColor", fillRule: "evenodd", d: "M12 15.5a5.5 5.5 0 1 1 11 0 5.5 5.5 0 0 1-11 0m5.5-3.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7", clipRule: "evenodd" }),
  /* @__PURE__ */ a("path", { fill: "currentColor", d: "M6 10a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1M7 13a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2z" })
] }), Vw = w(Ow), Bw = (e, t) => /* @__PURE__ */ b("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: [
  /* @__PURE__ */ a("path", { fill: "currentColor", d: "M7 7a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h3.5a1 1 0 1 1 0 2H7a4 4 0 0 1-4-4V9a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4 1 1 0 1 1-2 0 2 2 0 0 0-2-2z" }),
  /* @__PURE__ */ a("path", { fill: "currentColor", d: "M12 15.5a5.5 5.5 0 1 1 11 0 5.5 5.5 0 0 1-11 0m5.5-3.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7" }),
  /* @__PURE__ */ a("path", { fill: "currentColor", d: "M17.5 13a1 1 0 0 1 1 1v.965l1.055.703a1 1 0 0 1-1.11 1.664l-1.129-.753a1.83 1.83 0 0 1-.816-1.525V14a1 1 0 0 1 1-1M6 10a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1M6 14a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1" })
] }), Lw = w(Bw), $w = (e, t) => /* @__PURE__ */ b("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: [
  /* @__PURE__ */ a("path", { fill: "currentColor", d: "M7 5a4 4 0 0 0-4 4v6a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4V9a4 4 0 0 0-4-4zm1 2v10H7a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2zm2 10V7h7a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2z" }),
  /* @__PURE__ */ a("path", { fill: "currentColor", d: "M13.881 9.381a.875.875 0 0 0 0 1.238l.507.506H12a.875.875 0 0 0 0 1.75h2.388l-.507.506a.875.875 0 1 0 1.238 1.238l2-2a.875.875 0 0 0 0-1.238l-2-2a.875.875 0 0 0-1.238 0" })
] }), zw = w($w), Hw = (e, t) => /* @__PURE__ */ a("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: /* @__PURE__ */ a("path", { fill: "currentColor", d: "M16.793 6.207a1.12 1.12 0 0 1 0 1.586l-8.764 8.764-1.85.265.264-1.85 8.764-8.765a1.12 1.12 0 0 1 1.586 0m1.414-1.414a3.12 3.12 0 0 0-4.414 0l-9 9a1 1 0 0 0-.283.566l-.5 3.5a1 1 0 0 0 1.131 1.13l3.5-.5a1 1 0 0 0 .566-.282l9-9a3.12 3.12 0 0 0 0-4.414M12 19a1 1 0 0 1 1-1h5a1 1 0 1 1 0 2h-5a1 1 0 0 1-1-1" }) }), Ww = w(Hw), Uw = (e, t) => /* @__PURE__ */ b("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: [
  /* @__PURE__ */ a("path", { fill: "currentColor", d: "M17.106 5.553a1 1 0 0 1 1.341-.447L18 6l.447-.894h.002l.001.001.004.002.01.005.029.015.09.05a5.556 5.556 0 0 1 1.125.864C20.315 6.652 21 7.64 21 9v6a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a4 4 0 0 1 4-4h2a1 1 0 0 1 0 2H7a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V9c0-.641-.316-1.152-.707-1.543a3.6 3.6 0 0 0-.741-.563l-.004-.002.002.001.002.001-.004-.002a1 1 0 0 1-.442-1.34" }),
  /* @__PURE__ */ a("path", { fill: "currentColor", d: "M15.537 3.156a1 1 0 0 1 .307 1.38l-3.5 5.5a1 1 0 0 1-1.688-1.073l3.5-5.5a1 1 0 0 1 1.38-.307M7 15a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1" })
] }), Gw = w(Uw), jw = (e, t) => /* @__PURE__ */ b("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: [
  /* @__PURE__ */ a("path", { fill: "currentColor", fillRule: "evenodd", d: "M12 6a6 6 0 1 0 0 12 6 6 0 0 0 0-12m-8 6a8 8 0 1 1 16 0 8 8 0 0 1-16 0", clipRule: "evenodd" }),
  /* @__PURE__ */ a("path", { fill: "currentColor", fillRule: "evenodd", d: "M10 9a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0v-1a1 1 0 0 1 1-1M14 9a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0v-1a1 1 0 0 1 1-1M8.72 13.375a1 1 0 0 1 1.405-.156 3 3 0 0 0 3.75 0 1 1 0 1 1 1.25 1.562 5 5 0 0 1-6.25 0 1 1 0 0 1-.156-1.406", clipRule: "evenodd" })
] }), Kw = w(jw), Yw = (e, t) => /* @__PURE__ */ a("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: /* @__PURE__ */ a("path", { fill: "currentColor", d: "M10.039 2.956a4 4 0 0 1 3.922 0l5 2.812A4 4 0 0 1 21 9.255v5.49a4 4 0 0 1-2.039 3.487l-5 2.812a4 4 0 0 1-3.922 0l-5-2.812A4 4 0 0 1 3 14.746V9.255a4 4 0 0 1 2.039-3.487zm2.941 1.743a2 2 0 0 0-1.96 0L6.09 7.471 12 10.848l5.91-3.377zM5 9.255v5.49a2 2 0 0 0 1.02 1.744L11 19.29v-6.71L5.003 9.153zm10 8.91v-3.099a1 1 0 0 1 .486-.857l1.257-.755a.5.5 0 0 1 .757.43v2.875l.48-.27A2 2 0 0 0 19 14.746V9.255q0-.051-.003-.102L13 12.58v6.71z" }) }), qw = w(Yw), Xw = (e, t) => /* @__PURE__ */ a("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: /* @__PURE__ */ a("path", { fill: "currentColor", d: "M12 6a6 6 0 1 0 6 6 1 1 0 1 1 2 0 8 8 0 1 1-8-8 1 1 0 1 1 0 2" }) }), Zw = w(Xw), Qw = (e, t) => /* @__PURE__ */ a("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: /* @__PURE__ */ a("path", { fill: "currentColor", d: "M17.707 5.293a1 1 0 1 0-1.414 1.414l.293.293h-3.423A4 4 0 0 0 9.77 8.88l-.738 1.18a2 2 0 0 1-1.696.94H5a1 1 0 1 0 0 2h2.337a2 2 0 0 1 1.696.94l.738 1.18A4 4 0 0 0 13.163 17h3.423l-.293.293a1 1 0 0 0 1.414 1.414l2-2a1 1 0 0 0 0-1.414l-2-2a1 1 0 0 0-1.414 1.414l.293.293h-3.423a2 2 0 0 1-1.696-.94l-.738-1.18a4 4 0 0 0-.746-.88c.286-.252.538-.548.746-.88l.738-1.18A2 2 0 0 1 13.163 9h3.423l-.293.293a1 1 0 0 0 1.414 1.414l2-2a1 1 0 0 0 0-1.414z" }) }), Jw = w(Qw), e9 = (e, t) => /* @__PURE__ */ b("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: [
  /* @__PURE__ */ a("path", { fill: "currentColor", d: "M12 6a6 6 0 1 0 0 12 6 6 0 0 0 0-12m-8 6a8 8 0 1 1 16 0 8 8 0 0 1-16 0" }),
  /* @__PURE__ */ a("path", { fill: "currentColor", d: "M11.697 8.072a.68.68 0 0 1 .607 0 .7.7 0 0 1 .29.289c.04.068.081.154.118.233l.774 1.645 1.723.264c.082.013.175.027.252.046.076.02.234.065.36.204.138.153.199.358.174.557a.7.7 0 0 1-.168.365c-.05.062-.117.13-.177.19l-1.26 1.287.299 1.823c.014.086.03.18.036.26a.73.73 0 0 1-.07.395.69.69 0 0 1-.478.359.7.7 0 0 1-.414-.057c-.073-.032-.156-.078-.229-.118L12 14.968l-1.534.846c-.073.04-.156.086-.229.118a.7.7 0 0 1-.414.057.69.69 0 0 1-.478-.36.73.73 0 0 1-.07-.394c.006-.08.022-.174.036-.26l.298-1.823-1.26-1.287a3 3 0 0 1-.176-.19.7.7 0 0 1-.167-.365.7.7 0 0 1 .174-.557.7.7 0 0 1 .359-.204c.077-.02.17-.033.252-.046l1.723-.264.774-1.645c.037-.079.077-.165.117-.233a.7.7 0 0 1 .292-.29" })
] }), t9 = w(e9), n9 = (e, t) => /* @__PURE__ */ a("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: /* @__PURE__ */ a("path", { fill: "currentColor", d: "M11.393 4.144a1.36 1.36 0 0 1 1.214 0c.334.167.508.45.582.577.08.138.162.31.235.467l.014.028 1.535 3.262 3.414.524.031.004c.164.025.35.054.504.093.151.038.467.129.718.407.277.306.4.716.349 1.114a1.44 1.44 0 0 1-.336.73c-.1.124-.233.259-.352.38l-.022.023-2.497 2.551.59 3.615.006.03c.028.173.059.362.071.521.011.152.027.47-.138.789a1.37 1.37 0 0 1-.956.719 1.4 1.4 0 0 1-.83-.114 6 6 0 0 1-.457-.236l-.027-.015L12 17.936l-3.04 1.677-.028.015c-.147.081-.312.172-.458.236-.138.06-.452.187-.829.114a1.37 1.37 0 0 1-.956-.72 1.45 1.45 0 0 1-.138-.788c.012-.16.043-.348.071-.52l.005-.03.591-3.616-2.497-2.551-.022-.022a6 6 0 0 1-.352-.38c-.1-.122-.291-.374-.336-.731-.05-.398.072-.808.349-1.114.25-.278.566-.37.718-.407a6 6 0 0 1 .504-.093l.03-.004 3.415-.524 1.535-3.262.014-.028c.073-.157.154-.33.235-.467.074-.127.248-.41.582-.577" }) }), r9 = w(n9), o9 = (e, t) => /* @__PURE__ */ a("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: /* @__PURE__ */ a("path", { fill: "currentColor", d: "M11.393 4.144a1.36 1.36 0 0 1 1.214 0c.334.167.508.45.582.577.08.138.162.31.235.467l.014.028 1.535 3.262 3.414.524.031.004c.164.025.35.054.504.093.151.038.467.129.718.407.277.306.4.716.349 1.114a1.44 1.44 0 0 1-.336.73c-.1.124-.233.259-.352.38l-.022.023-2.497 2.551.59 3.615.006.03c.028.173.059.362.071.521.011.152.027.47-.138.789a1.37 1.37 0 0 1-.956.719 1.4 1.4 0 0 1-.83-.114 6 6 0 0 1-.457-.236l-.027-.015L12 17.936l-3.04 1.677-.028.015c-.147.081-.312.172-.458.236-.138.06-.452.187-.829.114a1.37 1.37 0 0 1-.956-.72 1.45 1.45 0 0 1-.138-.788c.012-.16.043-.348.071-.52l.005-.03.591-3.616-2.497-2.551-.022-.022a6 6 0 0 1-.352-.38c-.1-.122-.291-.374-.336-.731-.05-.398.072-.808.349-1.114.25-.278.566-.37.718-.407a6 6 0 0 1 .504-.093l.03-.004 3.415-.524 1.535-3.262.014-.028c.073-.157.154-.33.235-.467.074-.127.248-.41.582-.577M12 6.858l-1.252 2.66-.008.018c-.033.073-.12.263-.26.422a1.4 1.4 0 0 1-.427.324c-.198.097-.412.127-.487.137l-.018.003-2.897.444 2.127 2.172.014.014c.056.056.203.204.303.392.083.155.135.324.155.496.024.207-.012.409-.026.49l-.003.02-.492 3.006 2.512-1.385.015-.01c.066-.037.255-.145.471-.189.18-.037.366-.037.546 0 .216.044.405.152.47.19l.016.009 2.512 1.385-.492-3.005-.003-.021c-.014-.081-.05-.283-.026-.49q.03-.26.155-.496c.1-.189.247-.336.303-.392l.014-.014 2.127-2.172-2.897-.444-.018-.003a1.373 1.373 0 0 1-.913-.46 1.7 1.7 0 0 1-.26-.423l-.01-.018z" }) }), a9 = w(o9), i9 = (e, t) => /* @__PURE__ */ a("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: /* @__PURE__ */ a("path", { fill: "currentColor", d: "M4 8a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4z" }) }), s9 = w(i9), l9 = (e, t) => /* @__PURE__ */ a("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: /* @__PURE__ */ a("path", { fill: "currentColor", d: "M11.606 5a4 4 0 0 0-3.465 6H5a1 1 0 1 0 0 2h7.394a2 2 0 0 1 0 4h-1.313c-.514 0-.97-.329-1.132-.816a1 1 0 0 0-1.898.632A3.19 3.19 0 0 0 11.081 19h1.313a4 4 0 0 0 3.464-6H19a1 1 0 1 0 0-2h-7.395a2 2 0 1 1 0-4h1.314c.514 0 .97.329 1.132.816a1 1 0 0 0 1.898-.632A3.19 3.19 0 0 0 12.919 5z" }) }), c9 = w(l9), u9 = (e, t) => /* @__PURE__ */ a("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: /* @__PURE__ */ a("path", { fill: "currentColor", d: "M8 4a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4V8a4 4 0 0 0-4-4zM6 8h2.5v2H6zm4.5 0h3v2h-3zm5 0H18v2h-2.5zm0 4H18v2h-2.5zm-5 0h3v2h-3zM6 12h2.5v2H6zm9.5 4H18a2 2 0 0 1-2 2h-.5zm-2 0v2h-3v-2zm-5 0v2H8a2 2 0 0 1-2-2z" }) }), d9 = w(u9), f9 = (e, t) => /* @__PURE__ */ b("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: [
  /* @__PURE__ */ a("path", { fill: "currentColor", d: "M18.16 2.013a1 1 0 0 1 .734.54l.851 1.702 1.702.85a1 1 0 0 1 .26 1.602l-3 3A1 1 0 0 1 18 10h-2.586l-2.707 2.707a1 1 0 0 1-1.414-1.414L14 8.586V6a1 1 0 0 1 .293-.707l3-3a1 1 0 0 1 .867-.28M16 8h1.586l1.726-1.726-.76-.38a1 1 0 0 1-.446-.447l-.38-.759L16 6.414z" }),
  /* @__PURE__ */ a("path", { fill: "currentColor", d: "M12 6a6 6 0 1 0 6 6 1 1 0 1 1 2 0 8 8 0 1 1-8-8 1 1 0 1 1 0 2" }),
  /* @__PURE__ */ a("path", { fill: "currentColor", d: "M12 9.5a2.5 2.5 0 1 0 2.5 2.5 1 1 0 1 1 2 0A4.5 4.5 0 1 1 12 7.5a1 1 0 1 1 0 2" })
] }), h9 = w(f9), p9 = (e, t) => /* @__PURE__ */ a("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: /* @__PURE__ */ a("path", { fill: "currentColor", d: "M3 6a1 1 0 0 1 1-1h10a1 1 0 1 1 0 2h-4v11a1 1 0 1 1-2 0V7H4a1 1 0 0 1-1-1m9 6a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2h-2v5a1 1 0 1 1-2 0v-5h-2a1 1 0 0 1-1-1" }) }), m9 = w(p9), v9 = (e, t) => /* @__PURE__ */ a("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: /* @__PURE__ */ a("path", { fill: "currentColor", d: "M4 10.5a3 3 0 0 1 6 0v5a1 1 0 1 1-2 0v-2H6v2a1 1 0 1 1-2 0zm2 1h2v-1a1 1 0 0 0-2 0zM14 8.5a1 1 0 0 1 1-1h4a1 1 0 0 1 .868 1.496L16.723 14.5H19a1 1 0 1 1 0 2h-4a1 1 0 0 1-.868-1.496L17.277 9.5H15a1 1 0 0 1-1-1m-3 4a1 1 0 0 1 1-1h1a1 1 0 1 1 0 2h-1a1 1 0 0 1-1-1" }) }), g9 = w(v9), w9 = (e, t) => /* @__PURE__ */ a("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: /* @__PURE__ */ a("path", { fill: "currentColor", d: "M13.712 18.013A2.315 2.315 0 0 1 9.5 16.685V15H6.062a3 3 0 0 1-2.91-3.728l.81-3.242A4 4 0 0 1 7.842 5H18a3 3 0 0 1 3 3v3a3 3 0 0 1-3 3h-1.48zM17 12h1a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1h-1zm-2-5H7.842a2 2 0 0 0-1.94 1.515l-.81 3.242A1 1 0 0 0 6.061 13H10.5a1 1 0 0 1 1 1v2.685a.315.315 0 0 0 .573.18L15 12.686z" }) }), y9 = w(w9), x9 = (e, t) => /* @__PURE__ */ a("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: /* @__PURE__ */ a("path", { fill: "currentColor", d: "M10.288 5.988A2.315 2.315 0 0 1 14.5 7.315V9h3.438a3 3 0 0 1 2.91 3.728l-.81 3.242a4 4 0 0 1-3.88 3.03H6a3 3 0 0 1-3-3v-3a3 3 0 0 1 3-3h1.48zM7 12H6a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h1zm2 5h7.158a2 2 0 0 0 1.94-1.515l.81-3.242a1 1 0 0 0-.97-1.243H13.5a1 1 0 0 1-1-1V7.315a.315.315 0 0 0-.573-.18L9 11.314z" }) }), b9 = w(x9), C9 = (e, t) => /* @__PURE__ */ b("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: [
  /* @__PURE__ */ a("g", { clipPath: "url(#thunder_svg__a)", children: /* @__PURE__ */ a("path", { fill: "currentColor", d: "M14 5a1 1 0 0 0-1.817-.577l-6 8.5A1 1 0 0 0 7 14.5h3V19a1 1 0 0 0 1.78.625l6-7.5A1 1 0 0 0 17 10.5h-3zm-3 7.5H8.93L12 8.15v3.35a1 1 0 0 0 1 1h1.92L12 16.15V13.5a1 1 0 0 0-1-1" }) }),
  /* @__PURE__ */ a("defs", { children: /* @__PURE__ */ a("clipPath", { id: "thunder_svg__a", children: /* @__PURE__ */ a("path", { fill: "#fff", d: "M0 0h24v24H0z" }) }) })
] }), M9 = w(C9), S9 = (e, t) => /* @__PURE__ */ b("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: [
  /* @__PURE__ */ a("path", { fill: "currentColor", d: "M13.328 20.397a2 2 0 0 1-2.68-.006l-1.167-1.058-1.18 1.011C7.005 21.456 5 20.534 5 18.826V7a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v11.826c0 1.709-2.004 2.63-3.302 1.518l-1.183-1.014zm-1.336-1.488 1.187-1.066a2 2 0 0 1 2.638-.031L17 18.826V7a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v11.826l1.18-1.012a2 2 0 0 1 2.645.037z" }),
  /* @__PURE__ */ a("path", { fill: "currentColor", d: "M8 8a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2H9a1 1 0 0 1-1-1M8 12a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2H9a1 1 0 0 1-1-1" })
] }), R9 = w(S9), _9 = (e, t) => /* @__PURE__ */ a("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: /* @__PURE__ */ a("path", { fill: "currentColor", d: "M8.968 3.125c-1.112-.007-2.32.419-2.836 1.376-.21.39-.141.839.105 1.146l.847 1.06C4.458 7.308 3.037 9.136 3 10.9a1.044 1.044 0 0 0 1.045 1.065h1.124a4.77 4.77 0 0 0-.138 3.29c.195.613.891.902 1.462.616l2.884-1.442L9.08 18H8a1 1 0 1 0 0 2h8a1 1 0 0 0 0-2h-1.08l-.297-3.57 2.884 1.441a1.045 1.045 0 0 0 1.462-.617 4.77 4.77 0 0 0-.138-3.289h1.124c.562 0 1.057-.457 1.045-1.065-.037-1.763-1.458-3.59-4.084-4.194l.847-1.059c.246-.307.314-.756.105-1.146-.515-.957-1.724-1.383-2.836-1.376-.966.007-2.038.322-3.032 1.057-.994-.735-2.066-1.05-3.032-1.057m3.56 10.257L12.913 18h-1.826l.385-4.618.528-.264zm-.08-2.276a1 1 0 0 0-.895 0L6.825 13.47c.077-.642.376-1.25.837-1.75.601-.652.167-1.755-.768-1.755H5.36c.493-.712 1.556-1.444 3.555-1.465.812-.008 1.389-.971.807-1.698l-1.296-1.62c.152-.036.33-.058.528-.057.666.005 1.53.273 2.339 1.082a.997.997 0 0 0 1.414 0c.81-.809 1.673-1.077 2.339-1.082q.3 0 .528.057l-1.296 1.62c-.582.727-.005 1.69.807 1.698 2 .021 3.062.753 3.555 1.465h-1.534c-.935 0-1.37 1.103-.768 1.755.461.5.76 1.108.837 1.75z" }) }), P9 = w(_9), A9 = (e, t) => /* @__PURE__ */ b("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: [
  /* @__PURE__ */ a("path", { fill: "currentColor", d: "M12 9.33a1 1 0 0 1 1 1v2.078l2.486 1.381a1 1 0 0 1-.972 1.749L11 13.585V10.33a1 1 0 0 1 1-1" }),
  /* @__PURE__ */ a("path", { fill: "currentColor", d: "M10 2a1 1 0 1 0 0 2h1v1.062A8.001 8.001 0 0 0 12 21a8 8 0 0 0 1-15.938V4h1a1 1 0 1 0 0-2zM6 13a6 6 0 1 1 12 0 6 6 0 0 1-12 0M18.383 5.293a1 1 0 0 1 1.414 0l1.414 1.414a1 1 0 0 1-1.414 1.414l-1.414-1.414a1 1 0 0 1 0-1.414" }),
  /* @__PURE__ */ a("path", { fill: "currentColor", d: "M5.617 5.293a1 1 0 0 0-1.414 0L2.789 6.707a1 1 0 0 0 1.414 1.414l1.414-1.414a1 1 0 0 0 0-1.414" })
] }), T9 = w(A9), N9 = (e, t) => /* @__PURE__ */ b("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: [
  /* @__PURE__ */ a("path", { fill: "currentColor", d: "M12 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4" }),
  /* @__PURE__ */ a("path", { fill: "currentColor", d: "M9 2a1 1 0 0 1 1 1v1h4V3a1 1 0 1 1 2 0v1a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4V8a4 4 0 0 1 4-4V3a1 1 0 0 1 1-1M8 6a2 2 0 0 0-2 2v1h12V8a2 2 0 0 0-2-2v1a1 1 0 1 1-2 0V6h-4v1a1 1 0 0 1-2 0zm10 5H6v5a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2z" })
] }), D9 = w(N9), k9 = (e, t) => /* @__PURE__ */ b("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: [
  /* @__PURE__ */ a("path", { fill: "currentColor", fillRule: "evenodd", d: "M12 5a7 7 0 0 0-6.126 3.61 1 1 0 0 1-1.748-.971A9 9 0 0 1 12 3c1.58 0 3.068.408 4.361 1.126a1 1 0 1 1-.97 1.748A6.96 6.96 0 0 0 12 5m6.429 2.134a1 1 0 0 1 1.366.365A8.96 8.96 0 0 1 21 12v4a1 1 0 1 1-2 0v-4c0-1.277-.34-2.47-.936-3.5a1 1 0 0 1 .365-1.366M4 11a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0v-4a1 1 0 0 1 1-1", clipRule: "evenodd" }),
  /* @__PURE__ */ a("path", { fill: "currentColor", fillRule: "evenodd", d: "M7 12a5 5 0 0 1 9.842-1.25 1 1 0 1 1-1.936.5A2.999 2.999 0 0 0 12 9a3 3 0 0 0-3.001 3v1a1 1 0 1 1-2 0zm9 2a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0v-4a1 1 0 0 1 1-1m-8 2a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1", clipRule: "evenodd" }),
  /* @__PURE__ */ a("path", { fill: "currentColor", fillRule: "evenodd", d: "M12 11a1 1 0 0 1 1 1v8a1 1 0 1 1-2 0v-8a1 1 0 0 1 1-1", clipRule: "evenodd" })
] }), E9 = w(k9), F9 = (e, t) => /* @__PURE__ */ a("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: /* @__PURE__ */ a("path", { fill: "currentColor", d: "M12 6.316c-1.408-.848-2.795-1.318-4.188-1.318-1.592 0-3.055.616-4.437 1.721A1 1 0 0 0 3 7.5v9.42c0 .86.522 1.494 1.123 1.817.59.316 1.348.393 2.035.105 1.524-.64 3.167-.427 5.286.99a1 1 0 0 0 1.112 0c2.119-1.417 3.762-1.63 5.286-.99a2.39 2.39 0 0 0 2.035-.105c.601-.323 1.123-.957 1.123-1.818V7.5a1 1 0 0 0-.375-.78c-1.382-1.106-2.845-1.721-4.437-1.722-1.393 0-2.78.47-4.188 1.318m-1 1.732v9.23c-1.913-.906-3.77-1.055-5.616-.28a.39.39 0 0 1-.315-.023A.2.2 0 0 1 5 16.92V7.997c.977-.693 1.896-.998 2.813-.999.936 0 1.979.317 3.187 1.05m2 9.23v-9.23c1.208-.733 2.25-1.05 3.187-1.05.917 0 1.836.306 2.813 1v8.921c0 .004.001-.001 0 0a.2.2 0 0 1-.069.056.39.39 0 0 1-.315.023c-1.846-.775-3.703-.626-5.616.28" }) }), I9 = w(F9), O9 = (e, t) => /* @__PURE__ */ a("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: /* @__PURE__ */ a("path", { fill: "currentColor", d: "M8 5a1 1 0 0 1 1 1v5a3 3 0 1 0 6 0V6a1 1 0 1 1 2 0v5a5 5 0 0 1-10 0V6a1 1 0 0 1 1-1M6 18a1 1 0 0 1 1-1h10a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1" }) }), V9 = w(O9), B9 = (e, t) => /* @__PURE__ */ a("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: /* @__PURE__ */ a("path", { fill: "currentColor", d: "M5.73 6.564a.6.6 0 0 1 .54 0 .6.6 0 0 1 .255.248c.028.048.055.106.075.149l.395.838.873.134c.044.007.108.016.162.03a.6.6 0 0 1 .312.18.62.62 0 0 1 .153.49.63.63 0 0 1-.142.317c-.036.043-.08.089-.113.122l-.645.659.153.936c.008.047.018.11.023.165a.607.607 0 0 1-.485.657.6.6 0 0 1-.364-.046 2 2 0 0 1-.147-.075L6 10.941l-.775.427c-.04.022-.095.053-.147.075a.6.6 0 0 1-.363.047.607.607 0 0 1-.486-.658c.005-.055.015-.118.023-.165l.153-.936-.645-.66a2 2 0 0 1-.113-.121.63.63 0 0 1-.142-.318.62.62 0 0 1 .153-.488.6.6 0 0 1 .312-.18c.054-.015.118-.024.162-.03l.873-.135.395-.838c.02-.043.047-.1.075-.149a.6.6 0 0 1 .256-.248M17.73 6.564a.6.6 0 0 1 .54 0 .6.6 0 0 1 .255.248c.028.048.055.106.075.149l.395.838.873.134c.044.007.108.016.162.03a.6.6 0 0 1 .312.18.62.62 0 0 1 .153.49.63.63 0 0 1-.142.317c-.036.043-.08.089-.113.122l-.645.659.153.936c.008.047.018.11.022.165a.607.607 0 0 1-.485.657.6.6 0 0 1-.363-.046 2 2 0 0 1-.147-.075L18 10.941l-.775.427c-.04.022-.096.053-.147.075a.6.6 0 0 1-.363.047.606.606 0 0 1-.486-.658c.005-.055.015-.118.023-.165l.153-.936-.645-.66a2 2 0 0 1-.113-.121.63.63 0 0 1-.142-.318.62.62 0 0 1 .153-.488.6.6 0 0 1 .312-.18c.054-.015.118-.024.162-.03l.873-.135.395-.838c.02-.043.047-.1.075-.149a.6.6 0 0 1 .256-.248M11.73 3.564a.6.6 0 0 1 .54 0 .6.6 0 0 1 .255.248c.028.048.055.106.075.149l.395.838.873.134c.044.007.107.016.162.03a.6.6 0 0 1 .312.18.62.62 0 0 1 .153.49.63.63 0 0 1-.142.317c-.036.043-.08.089-.113.122l-.645.659.153.936c.008.047.018.11.023.165a.607.607 0 0 1-.485.657.6.6 0 0 1-.364-.046 2 2 0 0 1-.147-.075L12 7.941l-.775.427c-.04.022-.095.053-.147.075a.6.6 0 0 1-.363.047.606.606 0 0 1-.486-.658c.005-.055.015-.118.023-.165l.153-.936-.645-.66a2 2 0 0 1-.113-.121.63.63 0 0 1-.142-.318.62.62 0 0 1 .153-.488.6.6 0 0 1 .312-.18c.054-.015.118-.024.162-.03l.873-.135.395-.838c.02-.043.047-.1.075-.149a.6.6 0 0 1 .256-.248M12 10a1 1 0 0 1 1 1v8a1 1 0 1 1-2 0v-8a1 1 0 0 1 1-1M5.051 13.684a1 1 0 0 1 1.265-.633C7.695 13.511 10 15.54 10 19a1 1 0 1 1-2 0c0-2.539-1.695-3.844-2.316-4.051a1 1 0 0 1-.633-1.265M18.949 13.684a1 1 0 0 0-1.265-.633C16.305 13.511 14 15.54 14 19a1 1 0 1 0 2 0c0-2.539 1.695-3.844 2.316-4.051a1 1 0 0 0 .633-1.265" }) }), L9 = w(B9), $9 = (e, t) => /* @__PURE__ */ a("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: /* @__PURE__ */ a("path", { fill: "currentColor", d: "M11.293 4.293a1 1 0 0 1 1.414 0l3 3a1 1 0 0 1-1.414 1.414L13 7.414V14a1 1 0 1 1-2 0V7.414L9.707 8.707a1 1 0 0 1-1.414-1.414zM5 14a1 1 0 0 1 1 1v1a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-1a1 1 0 1 1 2 0v1a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4v-1a1 1 0 0 1 1-1" }) }), z9 = w($9), H9 = (e, t) => /* @__PURE__ */ a("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: /* @__PURE__ */ a("path", { fill: "currentColor", d: "M4 8a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4zm4-2a2 2 0 0 0-2 2v8a2 2 0 0 0 1.143 1.808 5.01 5.01 0 0 1 2.896-3.409 3.5 3.5 0 1 1 3.922 0 5.01 5.01 0 0 1 2.896 3.409A2 2 0 0 0 18 16V8a2 2 0 0 0-2-2zm6.83 12a3.001 3.001 0 0 0-5.66 0zM12 10a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3" }) }), W9 = w(H9), U9 = (e, t) => /* @__PURE__ */ b("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: [
  /* @__PURE__ */ a("path", { fill: "currentColor", d: "M20 8a1 1 0 0 1 1 1v1.444c0 1.643 0 2.937-.085 3.978-.087 1.063-.267 1.95-.678 2.756a7 7 0 0 1-3.06 3.059c-.805.41-1.692.591-2.755.678-1.041.085-2.335.085-3.978.085H9a1 1 0 1 1 0-2h1.4c1.697 0 2.909 0 3.86-.078.938-.077 1.533-.224 2.01-.467a5 5 0 0 0 2.185-2.185c.243-.477.39-1.072.467-2.01.077-.951.078-2.163.078-3.86V9a1 1 0 0 1 1-1" }),
  /* @__PURE__ */ a("path", { fill: "currentColor", d: "M4 8a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v6a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4zm4-2a2 2 0 0 0-2 2v6c0 .646.307 1.221.782 1.587.428-1.018 1.303-1.802 2.363-2.229a3 3 0 1 1 3.71 0c1.06.427 1.935 1.211 2.363 2.229.475-.366.782-.94.782-1.587V8a2 2 0 0 0-2-2zm5.155 10c-.41-.567-1.165-1-2.155-1s-1.746.433-2.155 1zM11 10a1 1 0 1 0 0 2 1 1 0 0 0 0-2" })
] }), G9 = w(U9), j9 = (e, t) => /* @__PURE__ */ b("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: [
  /* @__PURE__ */ a("path", { fill: "currentColor", d: "M11 3a8 8 0 1 0 4.906 14.32l2.387 2.387a1 1 0 0 0 1.414-1.414l-2.387-2.387A8 8 0 0 0 11 3m-6 8a6 6 0 1 1 12 0 6 6 0 0 1-12 0" }),
  /* @__PURE__ */ a("path", { fill: "currentColor", d: "M14.1 8.2a1 1 0 0 1 .2 1.4l-3 4a1 1 0 0 1-1.507.107l-2-2a1 1 0 1 1 1.414-1.414l1.185 1.185L12.7 8.4a1 1 0 0 1 1.4-.2" })
] }), K9 = w(j9), Y9 = (e, t) => /* @__PURE__ */ a("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: /* @__PURE__ */ a("path", { fill: "currentColor", d: "M10.721 3.568a1.75 1.75 0 0 1 2.557 0l.992 1.06c.345.37.832.572 1.337.555l1.451-.05a1.75 1.75 0 0 1 1.808 1.809l-.049 1.45a1.75 1.75 0 0 0 .554 1.338l1.06.992a1.75 1.75 0 0 1 0 2.557l-1.06.99a1.75 1.75 0 0 0-.554 1.338l.05 1.451a1.75 1.75 0 0 1-1.809 1.808l-1.45-.049a1.75 1.75 0 0 0-1.338.555l-.992 1.06a1.75 1.75 0 0 1-2.557 0l-.991-1.06a1.75 1.75 0 0 0-1.338-.555l-1.45.05a1.75 1.75 0 0 1-1.809-1.809l.05-1.45a1.75 1.75 0 0 0-.555-1.338l-1.06-.991a1.75 1.75 0 0 1 0-2.557l1.06-.992a1.75 1.75 0 0 0 .554-1.337l-.049-1.451a1.75 1.75 0 0 1 1.808-1.808l1.451.049a1.75 1.75 0 0 0 1.338-.554zM15.3 10.6a1 1 0 0 0-1.6-1.2l-2.308 3.078-1.185-1.185a1 1 0 1 0-1.414 1.414l2 2A1 1 0 0 0 12.3 14.6z" }) }), q9 = w(Y9), X9 = (e, t) => /* @__PURE__ */ b("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: [
  /* @__PURE__ */ a("path", { fill: "currentColor", d: "M3 9a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v6a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4zm4-2a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z" }),
  /* @__PURE__ */ a("path", { fill: "currentColor", d: "M9.507 8.13a1 1 0 0 1 1.008.013l5 3a1 1 0 0 1 0 1.714l-5 3A1 1 0 0 1 9 15V9a1 1 0 0 1 .507-.87M11 10.766v2.468L13.056 12z" })
] }), Z9 = w(X9), Q9 = (e, t) => /* @__PURE__ */ b("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: [
  /* @__PURE__ */ a("path", { fill: "currentColor", d: "M12 5a7 7 0 0 0-6.297 10.062l.16.328-.824 3.278 3.237-.727.333.185A7 7 0 1 0 12 5m-9 7a9 9 0 1 1 4.984 8.056l-2.507.564a2 2 0 0 1-2.378-2.44l.65-2.582A9 9 0 0 1 3 12" }),
  /* @__PURE__ */ a("path", { fill: "currentColor", d: "M8.941 8h1.544a.5.5 0 0 1 .464.314l.658 1.644a.5.5 0 0 1-.207.614l-.812.487a5.18 5.18 0 0 0 2.353 2.353l.487-.812a.5.5 0 0 1 .614-.207l1.644.658a.5.5 0 0 1 .314.464v1.544a.94.94 0 0 1-.941.941A7.53 7.53 0 0 1 8 8.941.94.94 0 0 1 8.941 8" })
] }), J9 = w(Q9), ey = (e, t) => /* @__PURE__ */ b("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: [
  /* @__PURE__ */ a("path", { fill: "currentColor", d: "M11 3a8 8 0 1 0 4.906 14.32l2.387 2.387a1 1 0 0 0 1.414-1.414l-2.387-2.387A8 8 0 0 0 11 3m-6 8a6 6 0 1 1 12 0 6 6 0 0 1-12 0" }),
  /* @__PURE__ */ a("path", { fill: "currentColor", d: "M10 14a1 1 0 1 0 2 0v-2h2a1 1 0 1 0 0-2h-2V8a1 1 0 1 0-2 0v2H8a1 1 0 1 0 0 2h2z" })
] }), ty = w(ey), ny = (e, t) => /* @__PURE__ */ b("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: [
  /* @__PURE__ */ a("path", { fill: "currentColor", d: "M11 3a8 8 0 1 0 4.906 14.32l2.387 2.387a1 1 0 0 0 1.414-1.414l-2.387-2.387A8 8 0 0 0 11 3m-6 8a6 6 0 1 1 12 0 6 6 0 0 1-12 0" }),
  /* @__PURE__ */ a("path", { fill: "currentColor", d: "M7 11a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1" })
] }), ry = w(ny), Po = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AcademicCap: f5,
  Add: p5,
  Ai: v5,
  Alert: S5,
  AlertCircle: x5,
  AlertCircleLine: w5,
  AlertSign: C5,
  AlignTextCenter: _5,
  AlignTextJustify: $c,
  AlignTextLeft: T5,
  AlignTextRight: D5,
  Appearance: E5,
  Archive: V5,
  ArchiveOpen: I5,
  AreaGraph: zc,
  ArrowLeft: $5,
  ArrowRight: H5,
  Balance: U5,
  Bell: j5,
  Bold: Y5,
  Briefcase: Hc,
  Bucket: Z5,
  BusinessTrip: J5,
  Calculator: tg,
  Calendar: rg,
  CameraPlus: ag,
  CardPin: sg,
  ChartLine: cg,
  Check: vg,
  CheckCircle: Wc,
  CheckCircleLine: dg,
  CheckMulti: pg,
  ChevronDown: lr,
  ChevronLeft: yg,
  ChevronRight: _o,
  ChevronUp: Uc,
  Circle: Rg,
  CircleLine: Mg,
  Clock: Pg,
  Cloud: Tg,
  Cmd: Gc,
  Code: kg,
  Coffee: Fg,
  Collapse: Og,
  Command: Bg,
  Comment: $g,
  Complaint: Hg,
  Contactless: Ug,
  Contract: jg,
  CornerResize: Yg,
  CreditCard: Xg,
  Cross: jc,
  CrossCircle: Qg,
  Crown: t6,
  Dashboard: r6,
  Delete: a6,
  Deny: s6,
  Desktop: c6,
  DollarBill: d6,
  DottedCircle: Kc,
  Download: p6,
  DragAndDrop: v6,
  Duplicate: w6,
  EditFileFilled: x6,
  Ellipsis: Yc,
  EllipsisHorizontal: C6,
  Engagement: R6,
  Envelope: T6,
  EnvelopeOpen: P6,
  Equals: D6,
  Expand: E6,
  Expenses: I6,
  ExternalLink: nh,
  EyeInvisible: qc,
  EyeVisible: Xc,
  FaceId: L6,
  Feed: z6,
  Feedback: W6,
  File: K6,
  FileFilled: G6,
  Files: q6,
  Filter: Z6,
  Flag: J6,
  Folder: t8,
  Globe: r8,
  Group: a8,
  H1: s8,
  H2: c8,
  H3: d8,
  Heart: h8,
  HideSidebar: m8,
  History: g8,
  Home: Zc,
  Image: x8,
  InProgressTask: Lc,
  Inbox: C8,
  Info: P8,
  InfoCircle: R8,
  InfoCircleLine: Qc,
  InputField: T8,
  Italic: D8,
  Laptop: E8,
  LayersFront: I8,
  Lightbulb: V8,
  Link: z8,
  LinkRemove: L8,
  List: W8,
  LockLocked: G8,
  LockUnlocked: K8,
  LogoAvatar: q8,
  LogoEruditai: Z8,
  LogoMeetingdoctors: J8,
  LogoTravelperk: t7,
  Manager: r7,
  Marketplace: a7,
  Media: s7,
  Megaphone: c7,
  Mobile: h7,
  MobileOptions: d7,
  ModuleCalendar: p3,
  ModuleClockIn: v3,
  ModuleDocuments: w3,
  ModuleEngagement: x3,
  ModuleFinance: C3,
  ModuleGoals: S3,
  ModuleHome: _3,
  ModuleInbox: A3,
  ModuleKudos: N3,
  ModuleMyDocuments: k3,
  ModuleOrganization: F3,
  ModulePayroll: O3,
  ModulePerformance: B3,
  ModuleProfile: $3,
  ModuleProjects: H3,
  ModuleRecruitment: U3,
  ModuleReports: j3,
  ModuleShifts: Y3,
  ModuleSoftware: X3,
  ModuleSpaces: Q3,
  ModuleSpending: e5,
  ModuleTasks: n5,
  ModuleTimeOff: o5,
  ModuleTimeTracking: i5,
  ModuleTrainings: l5,
  ModuleWorkflows: u5,
  MoneyBag: m7,
  MoreOptions: g7,
  Move: b7,
  MoveShifts: y7,
  MyDocuments: M7,
  Numbers: R7,
  Office: Jc,
  OlList: A7,
  Paperclip: N7,
  Pause: F7,
  PauseFilled: k7,
  Payroll: O7,
  Pencil: B7,
  Performance: $7,
  Person: H7,
  Phone: U7,
  Pin: Y7,
  PinSmall: j7,
  PixBrazil: X7,
  Play: ew,
  PlayFilled: Q7,
  Printer: nw,
  Projects: ow,
  PushPin: iw,
  Question: fw,
  QuestionCircle: uw,
  QuestionCircleLine: lw,
  Quote: pw,
  Reaction: vw,
  Recruiting: ww,
  Refresh: xw,
  Remove: Cw,
  Replace: Sw,
  Reports: _w,
  Rocket: Aw,
  Save: Nw,
  Search: eu,
  Settings: Ew,
  Share: Iw,
  ShiftCheck: Vw,
  ShiftManagement: Lw,
  ShowSidebar: zw,
  Sign: Ww,
  Signature: Gw,
  Social: Kw,
  SpaceControl: qw,
  Spinner: Zw,
  Split: Jw,
  Star: a9,
  StarCircleLine: t9,
  StarFilled: r9,
  Stop: s9,
  Strikethrough: c9,
  Table: d9,
  Target: h9,
  Text: g9,
  TextSize: m9,
  ThumbsDown: y9,
  ThumbsUp: b9,
  Thunder: M9,
  Ticket: R9,
  TimeOff: P9,
  Timer: T9,
  Today: D9,
  TouchId: E9,
  Trainings: I9,
  Underline: V9,
  UpgradePlan: L9,
  Upload: z9,
  User: W9,
  Users: G9,
  Validation: K9,
  Verified: q9,
  Video: Z9,
  WhatsappChat: J9,
  ZoomIn: ty,
  ZoomOut: ry
}, Symbol.toStringTag, { value: "Module" })), oy = /^(-?)([0-9]+)?(?:([\.,])([0-9]+)?)?$/;
function a0(e, { maxDecimals: t }) {
  if (!e || e === "-")
    return {
      formattedValue: e ?? "",
      value: null
    };
  const n = e.match(oy);
  if (!n) return null;
  let [r, o, i, s, l] = n;
  t && ((l == null ? void 0 : l.length) ?? 0) > t ? l = l == null ? void 0 : l.slice(0, t) : t === 0 && (l = ""), i = (i == null ? void 0 : i.replace(/^0+(\d)/, (d, f) => f)) ?? "";
  const c = `${o}${i}${t !== 0 ? `${s ?? ""}${l ?? ""}` : ""}`, u = parseFloat(c.replace(",", "."));
  return {
    formattedValue: c,
    value: Number.isNaN(u) ? null : u
  };
}
const Rr = (e, t, n) => new Intl.NumberFormat(t, {
  maximumFractionDigits: n,
  useGrouping: !1
}).format(e), ay = w(
  function({ locale: t, value: n, maxDecimals: r, step: o, min: i, max: s, onChange: l, ...c }, u) {
    const [d, f] = be(
      () => n != null ? Rr(n, t, r) : ""
    ), p = (g) => {
      const x = a0(g, { maxDecimals: r });
      if (!x) return;
      const { formattedValue: C, value: y } = x;
      f(C), l == null || l(y);
    }, m = (g) => () => {
      if (!o) return;
      if (n == null)
        return p(Rr(o ?? i ?? 0, t, r));
      const x = g === "increase" ? n + o : n - o;
      i != null && x < i || s != null && x > s || p(Rr(x, t, r));
    }, v = () => o ? /* @__PURE__ */ b(
      "div",
      {
        className: "absolute right-2 top-0.5 hidden h-full flex-col group-focus-within:flex group-hover:flex",
        onClick: (g) => g.preventDefault(),
        children: [
          /* @__PURE__ */ a(
            "div",
            {
              onClick: m("increase"),
              className: "h-4 cursor-pointer",
              role: "button",
              children: /* @__PURE__ */ a(gt, { size: "sm", icon: Uc })
            }
          ),
          /* @__PURE__ */ a(
            "div",
            {
              onClick: m("decrease"),
              className: "h-4 cursor-pointer",
              role: "button",
              children: /* @__PURE__ */ a(gt, { size: "sm", icon: lr })
            }
          )
        ]
      }
    ) : null;
    return We(() => {
      const g = a0(d, { maxDecimals: r });
      n === void 0 || n == (g == null ? void 0 : g.value) || f(n ? Rr(n, t, r) : "");
    }, [d, r, n, t]), /* @__PURE__ */ b("div", { className: "group relative", children: [
      /* @__PURE__ */ a(
        Bi,
        {
          type: "text",
          ref: u,
          value: d,
          inputMode: "decimal",
          className: "group-focus-within:pr-5 group-hover:pr-5",
          onChange: (g) => p(g.target.value),
          ...c
        }
      ),
      /* @__PURE__ */ a(v, {})
    ] });
  }
);
/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const iy = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), tu = (...e) => e.filter((t, n, r) => !!t && r.indexOf(t) === n).join(" ");
/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var sy = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ly = w(
  ({
    color: e = "currentColor",
    size: t = 24,
    strokeWidth: n = 2,
    absoluteStrokeWidth: r,
    className: o = "",
    children: i,
    iconNode: s,
    ...l
  }, c) => zr(
    "svg",
    {
      ref: c,
      ...sy,
      width: t,
      height: t,
      stroke: e,
      strokeWidth: r ? Number(n) * 24 / Number(t) : n,
      className: tu("lucide", o),
      ...l
    },
    [
      ...s.map(([u, d]) => zr(u, d)),
      ...Array.isArray(i) ? i : [i]
    ]
  )
);
/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const st = (e, t) => {
  const n = w(
    ({ className: r, ...o }, i) => zr(ly, {
      ref: i,
      iconNode: t,
      className: tu(`lucide-${iy(e)}`, r),
      ...o
    })
  );
  return n.displayName = `${e}`, n;
};
/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const cy = st("BookOpen", [
  ["path", { d: "M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z", key: "vv98re" }],
  ["path", { d: "M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z", key: "1cyq3y" }]
]);
/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const uy = st("Check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const dy = st("ChevronDown", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]
]);
/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const fy = st("ChevronLeft", [
  ["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]
]);
/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Li = st("ChevronRight", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]
]);
/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const hy = st("ChevronUp", [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]]);
/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const py = st("CircleCheck", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]
]);
/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const my = st("Circle", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]
]);
/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const vy = st("OctagonX", [
  [
    "polygon",
    {
      points: "7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2",
      key: "h1p8hx"
    }
  ],
  ["path", { d: "m15 9-6 6", key: "1uzhvr" }],
  ["path", { d: "m9 9 6 6", key: "z0biqf" }]
]);
/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const gy = st("TriangleAlert", [
  [
    "path",
    {
      d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",
      key: "wmoenq"
    }
  ],
  ["path", { d: "M12 9v4", key: "juzpu7" }],
  ["path", { d: "M12 17h.01", key: "p32p05" }]
]);
/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const wy = st("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]);
function ne(e) {
  const t = Object.prototype.toString.call(e);
  return e instanceof Date || typeof e == "object" && t === "[object Date]" ? new e.constructor(+e) : typeof e == "number" || t === "[object Number]" || typeof e == "string" || t === "[object String]" ? new Date(e) : /* @__PURE__ */ new Date(NaN);
}
function je(e, t) {
  return e instanceof Date ? new e.constructor(t) : new Date(t);
}
function Fe(e, t) {
  const n = ne(e);
  return isNaN(t) ? je(e, NaN) : (t && n.setDate(n.getDate() + t), n);
}
function at(e, t) {
  const n = ne(e);
  if (isNaN(t)) return je(e, NaN);
  if (!t)
    return n;
  const r = n.getDate(), o = je(e, n.getTime());
  o.setMonth(n.getMonth() + t + 1, 0);
  const i = o.getDate();
  return r >= i ? o : (n.setFullYear(
    o.getFullYear(),
    o.getMonth(),
    r
  ), n);
}
const $i = 6048e5, yy = 864e5;
let xy = {};
function cr() {
  return xy;
}
function wt(e, t) {
  var l, c, u, d;
  const n = cr(), r = (t == null ? void 0 : t.weekStartsOn) ?? ((c = (l = t == null ? void 0 : t.locale) == null ? void 0 : l.options) == null ? void 0 : c.weekStartsOn) ?? n.weekStartsOn ?? ((d = (u = n.locale) == null ? void 0 : u.options) == null ? void 0 : d.weekStartsOn) ?? 0, o = ne(e), i = o.getDay(), s = (i < r ? 7 : 0) + i - r;
  return o.setDate(o.getDate() - s), o.setHours(0, 0, 0, 0), o;
}
function on(e) {
  return wt(e, { weekStartsOn: 1 });
}
function nu(e) {
  const t = ne(e), n = t.getFullYear(), r = je(e, 0);
  r.setFullYear(n + 1, 0, 4), r.setHours(0, 0, 0, 0);
  const o = on(r), i = je(e, 0);
  i.setFullYear(n, 0, 4), i.setHours(0, 0, 0, 0);
  const s = on(i);
  return t.getTime() >= o.getTime() ? n + 1 : t.getTime() >= s.getTime() ? n : n - 1;
}
function Pn(e) {
  const t = ne(e);
  return t.setHours(0, 0, 0, 0), t;
}
function qr(e) {
  const t = ne(e), n = new Date(
    Date.UTC(
      t.getFullYear(),
      t.getMonth(),
      t.getDate(),
      t.getHours(),
      t.getMinutes(),
      t.getSeconds(),
      t.getMilliseconds()
    )
  );
  return n.setUTCFullYear(t.getFullYear()), +e - +n;
}
function ht(e, t) {
  const n = Pn(e), r = Pn(t), o = +n - qr(n), i = +r - qr(r);
  return Math.round((o - i) / yy);
}
function by(e) {
  const t = nu(e), n = je(e, 0);
  return n.setFullYear(t, 0, 4), n.setHours(0, 0, 0, 0), on(n);
}
function Ba(e, t) {
  const n = t * 7;
  return Fe(e, n);
}
function Cy(e, t) {
  return at(e, t * 12);
}
function My(e) {
  let t;
  return e.forEach(function(n) {
    const r = ne(n);
    (t === void 0 || t < r || isNaN(Number(r))) && (t = r);
  }), t || /* @__PURE__ */ new Date(NaN);
}
function Sy(e) {
  let t;
  return e.forEach((n) => {
    const r = ne(n);
    (!t || t > r || isNaN(+r)) && (t = r);
  }), t || /* @__PURE__ */ new Date(NaN);
}
function Le(e, t) {
  const n = Pn(e), r = Pn(t);
  return +n == +r;
}
function zi(e) {
  return e instanceof Date || typeof e == "object" && Object.prototype.toString.call(e) === "[object Date]";
}
function Ry(e) {
  if (!zi(e) && typeof e != "number")
    return !1;
  const t = ne(e);
  return !isNaN(Number(t));
}
function tr(e, t) {
  const n = ne(e), r = ne(t), o = n.getFullYear() - r.getFullYear(), i = n.getMonth() - r.getMonth();
  return o * 12 + i;
}
function _y(e, t, n) {
  const r = wt(e, n), o = wt(t, n), i = +r - qr(r), s = +o - qr(o);
  return Math.round((i - s) / $i);
}
function Hi(e) {
  const t = ne(e), n = t.getMonth();
  return t.setFullYear(t.getFullYear(), n + 1, 0), t.setHours(23, 59, 59, 999), t;
}
function $e(e) {
  const t = ne(e);
  return t.setDate(1), t.setHours(0, 0, 0, 0), t;
}
function ru(e) {
  const t = ne(e), n = je(e, 0);
  return n.setFullYear(t.getFullYear(), 0, 1), n.setHours(0, 0, 0, 0), n;
}
function Wi(e, t) {
  var l, c, u, d;
  const n = cr(), r = (t == null ? void 0 : t.weekStartsOn) ?? ((c = (l = t == null ? void 0 : t.locale) == null ? void 0 : l.options) == null ? void 0 : c.weekStartsOn) ?? n.weekStartsOn ?? ((d = (u = n.locale) == null ? void 0 : u.options) == null ? void 0 : d.weekStartsOn) ?? 0, o = ne(e), i = o.getDay(), s = (i < r ? -7 : 0) + 6 - (i - r);
  return o.setDate(o.getDate() + s), o.setHours(23, 59, 59, 999), o;
}
function ou(e) {
  return Wi(e, { weekStartsOn: 1 });
}
const Py = {
  lessThanXSeconds: {
    one: "less than a second",
    other: "less than {{count}} seconds"
  },
  xSeconds: {
    one: "1 second",
    other: "{{count}} seconds"
  },
  halfAMinute: "half a minute",
  lessThanXMinutes: {
    one: "less than a minute",
    other: "less than {{count}} minutes"
  },
  xMinutes: {
    one: "1 minute",
    other: "{{count}} minutes"
  },
  aboutXHours: {
    one: "about 1 hour",
    other: "about {{count}} hours"
  },
  xHours: {
    one: "1 hour",
    other: "{{count}} hours"
  },
  xDays: {
    one: "1 day",
    other: "{{count}} days"
  },
  aboutXWeeks: {
    one: "about 1 week",
    other: "about {{count}} weeks"
  },
  xWeeks: {
    one: "1 week",
    other: "{{count}} weeks"
  },
  aboutXMonths: {
    one: "about 1 month",
    other: "about {{count}} months"
  },
  xMonths: {
    one: "1 month",
    other: "{{count}} months"
  },
  aboutXYears: {
    one: "about 1 year",
    other: "about {{count}} years"
  },
  xYears: {
    one: "1 year",
    other: "{{count}} years"
  },
  overXYears: {
    one: "over 1 year",
    other: "over {{count}} years"
  },
  almostXYears: {
    one: "almost 1 year",
    other: "almost {{count}} years"
  }
}, Ay = (e, t, n) => {
  let r;
  const o = Py[e];
  return typeof o == "string" ? r = o : t === 1 ? r = o.one : r = o.other.replace("{{count}}", t.toString()), n != null && n.addSuffix ? n.comparison && n.comparison > 0 ? "in " + r : r + " ago" : r;
};
function ra(e) {
  return (t = {}) => {
    const n = t.width ? String(t.width) : e.defaultWidth;
    return e.formats[n] || e.formats[e.defaultWidth];
  };
}
const Ty = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, Ny = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, Dy = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, ky = {
  date: ra({
    formats: Ty,
    defaultWidth: "full"
  }),
  time: ra({
    formats: Ny,
    defaultWidth: "full"
  }),
  dateTime: ra({
    formats: Dy,
    defaultWidth: "full"
  })
}, Ey = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, Fy = (e, t, n, r) => Ey[e];
function Vn(e) {
  return (t, n) => {
    const r = n != null && n.context ? String(n.context) : "standalone";
    let o;
    if (r === "formatting" && e.formattingValues) {
      const s = e.defaultFormattingWidth || e.defaultWidth, l = n != null && n.width ? String(n.width) : s;
      o = e.formattingValues[l] || e.formattingValues[s];
    } else {
      const s = e.defaultWidth, l = n != null && n.width ? String(n.width) : e.defaultWidth;
      o = e.values[l] || e.values[s];
    }
    const i = e.argumentCallback ? e.argumentCallback(t) : t;
    return o[i];
  };
}
const Iy = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, Oy = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, Vy = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ],
  wide: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ]
}, By = {
  narrow: ["S", "M", "T", "W", "T", "F", "S"],
  short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  wide: [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ]
}, Ly = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  }
}, $y = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  }
}, zy = (e, t) => {
  const n = Number(e), r = n % 100;
  if (r > 20 || r < 10)
    switch (r % 10) {
      case 1:
        return n + "st";
      case 2:
        return n + "nd";
      case 3:
        return n + "rd";
    }
  return n + "th";
}, Hy = {
  ordinalNumber: zy,
  era: Vn({
    values: Iy,
    defaultWidth: "wide"
  }),
  quarter: Vn({
    values: Oy,
    defaultWidth: "wide",
    argumentCallback: (e) => e - 1
  }),
  month: Vn({
    values: Vy,
    defaultWidth: "wide"
  }),
  day: Vn({
    values: By,
    defaultWidth: "wide"
  }),
  dayPeriod: Vn({
    values: Ly,
    defaultWidth: "wide",
    formattingValues: $y,
    defaultFormattingWidth: "wide"
  })
};
function Bn(e) {
  return (t, n = {}) => {
    const r = n.width, o = r && e.matchPatterns[r] || e.matchPatterns[e.defaultMatchWidth], i = t.match(o);
    if (!i)
      return null;
    const s = i[0], l = r && e.parsePatterns[r] || e.parsePatterns[e.defaultParseWidth], c = Array.isArray(l) ? Uy(l, (f) => f.test(s)) : (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any -- I challange you to fix the type
      Wy(l, (f) => f.test(s))
    );
    let u;
    u = e.valueCallback ? e.valueCallback(c) : c, u = n.valueCallback ? (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any -- I challange you to fix the type
      n.valueCallback(u)
    ) : u;
    const d = t.slice(s.length);
    return { value: u, rest: d };
  };
}
function Wy(e, t) {
  for (const n in e)
    if (Object.prototype.hasOwnProperty.call(e, n) && t(e[n]))
      return n;
}
function Uy(e, t) {
  for (let n = 0; n < e.length; n++)
    if (t(e[n]))
      return n;
}
function Gy(e) {
  return (t, n = {}) => {
    const r = t.match(e.matchPattern);
    if (!r) return null;
    const o = r[0], i = t.match(e.parsePattern);
    if (!i) return null;
    let s = e.valueCallback ? e.valueCallback(i[0]) : i[0];
    s = n.valueCallback ? n.valueCallback(s) : s;
    const l = t.slice(o.length);
    return { value: s, rest: l };
  };
}
const jy = /^(\d+)(th|st|nd|rd)?/i, Ky = /\d+/i, Yy = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, qy = {
  any: [/^b/i, /^(a|c)/i]
}, Xy = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, Zy = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, Qy = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, Jy = {
  narrow: [
    /^j/i,
    /^f/i,
    /^m/i,
    /^a/i,
    /^m/i,
    /^j/i,
    /^j/i,
    /^a/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i
  ],
  any: [
    /^ja/i,
    /^f/i,
    /^mar/i,
    /^ap/i,
    /^may/i,
    /^jun/i,
    /^jul/i,
    /^au/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i
  ]
}, ex = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, tx = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, nx = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, rx = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mi/i,
    noon: /^no/i,
    morning: /morning/i,
    afternoon: /afternoon/i,
    evening: /evening/i,
    night: /night/i
  }
}, ox = {
  ordinalNumber: Gy({
    matchPattern: jy,
    parsePattern: Ky,
    valueCallback: (e) => parseInt(e, 10)
  }),
  era: Bn({
    matchPatterns: Yy,
    defaultMatchWidth: "wide",
    parsePatterns: qy,
    defaultParseWidth: "any"
  }),
  quarter: Bn({
    matchPatterns: Xy,
    defaultMatchWidth: "wide",
    parsePatterns: Zy,
    defaultParseWidth: "any",
    valueCallback: (e) => e + 1
  }),
  month: Bn({
    matchPatterns: Qy,
    defaultMatchWidth: "wide",
    parsePatterns: Jy,
    defaultParseWidth: "any"
  }),
  day: Bn({
    matchPatterns: ex,
    defaultMatchWidth: "wide",
    parsePatterns: tx,
    defaultParseWidth: "any"
  }),
  dayPeriod: Bn({
    matchPatterns: nx,
    defaultMatchWidth: "any",
    parsePatterns: rx,
    defaultParseWidth: "any"
  })
}, au = {
  code: "en-US",
  formatDistance: Ay,
  formatLong: ky,
  formatRelative: Fy,
  localize: Hy,
  match: ox,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
function ax(e) {
  const t = ne(e);
  return ht(t, ru(t)) + 1;
}
function iu(e) {
  const t = ne(e), n = +on(t) - +by(t);
  return Math.round(n / $i) + 1;
}
function su(e, t) {
  var d, f, p, m;
  const n = ne(e), r = n.getFullYear(), o = cr(), i = (t == null ? void 0 : t.firstWeekContainsDate) ?? ((f = (d = t == null ? void 0 : t.locale) == null ? void 0 : d.options) == null ? void 0 : f.firstWeekContainsDate) ?? o.firstWeekContainsDate ?? ((m = (p = o.locale) == null ? void 0 : p.options) == null ? void 0 : m.firstWeekContainsDate) ?? 1, s = je(e, 0);
  s.setFullYear(r + 1, 0, i), s.setHours(0, 0, 0, 0);
  const l = wt(s, t), c = je(e, 0);
  c.setFullYear(r, 0, i), c.setHours(0, 0, 0, 0);
  const u = wt(c, t);
  return n.getTime() >= l.getTime() ? r + 1 : n.getTime() >= u.getTime() ? r : r - 1;
}
function ix(e, t) {
  var l, c, u, d;
  const n = cr(), r = (t == null ? void 0 : t.firstWeekContainsDate) ?? ((c = (l = t == null ? void 0 : t.locale) == null ? void 0 : l.options) == null ? void 0 : c.firstWeekContainsDate) ?? n.firstWeekContainsDate ?? ((d = (u = n.locale) == null ? void 0 : u.options) == null ? void 0 : d.firstWeekContainsDate) ?? 1, o = su(e, t), i = je(e, 0);
  return i.setFullYear(o, 0, r), i.setHours(0, 0, 0, 0), wt(i, t);
}
function lu(e, t) {
  const n = ne(e), r = +wt(n, t) - +ix(n, t);
  return Math.round(r / $i) + 1;
}
function ie(e, t) {
  const n = e < 0 ? "-" : "", r = Math.abs(e).toString().padStart(t, "0");
  return n + r;
}
const Ot = {
  // Year
  y(e, t) {
    const n = e.getFullYear(), r = n > 0 ? n : 1 - n;
    return ie(t === "yy" ? r % 100 : r, t.length);
  },
  // Month
  M(e, t) {
    const n = e.getMonth();
    return t === "M" ? String(n + 1) : ie(n + 1, 2);
  },
  // Day of the month
  d(e, t) {
    return ie(e.getDate(), t.length);
  },
  // AM or PM
  a(e, t) {
    const n = e.getHours() / 12 >= 1 ? "pm" : "am";
    switch (t) {
      case "a":
      case "aa":
        return n.toUpperCase();
      case "aaa":
        return n;
      case "aaaaa":
        return n[0];
      case "aaaa":
      default:
        return n === "am" ? "a.m." : "p.m.";
    }
  },
  // Hour [1-12]
  h(e, t) {
    return ie(e.getHours() % 12 || 12, t.length);
  },
  // Hour [0-23]
  H(e, t) {
    return ie(e.getHours(), t.length);
  },
  // Minute
  m(e, t) {
    return ie(e.getMinutes(), t.length);
  },
  // Second
  s(e, t) {
    return ie(e.getSeconds(), t.length);
  },
  // Fraction of second
  S(e, t) {
    const n = t.length, r = e.getMilliseconds(), o = Math.trunc(
      r * Math.pow(10, n - 3)
    );
    return ie(o, t.length);
  }
}, dn = {
  am: "am",
  pm: "pm",
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
}, i0 = {
  // Era
  G: function(e, t, n) {
    const r = e.getFullYear() > 0 ? 1 : 0;
    switch (t) {
      case "G":
      case "GG":
      case "GGG":
        return n.era(r, { width: "abbreviated" });
      case "GGGGG":
        return n.era(r, { width: "narrow" });
      case "GGGG":
      default:
        return n.era(r, { width: "wide" });
    }
  },
  // Year
  y: function(e, t, n) {
    if (t === "yo") {
      const r = e.getFullYear(), o = r > 0 ? r : 1 - r;
      return n.ordinalNumber(o, { unit: "year" });
    }
    return Ot.y(e, t);
  },
  // Local week-numbering year
  Y: function(e, t, n, r) {
    const o = su(e, r), i = o > 0 ? o : 1 - o;
    if (t === "YY") {
      const s = i % 100;
      return ie(s, 2);
    }
    return t === "Yo" ? n.ordinalNumber(i, { unit: "year" }) : ie(i, t.length);
  },
  // ISO week-numbering year
  R: function(e, t) {
    const n = nu(e);
    return ie(n, t.length);
  },
  // Extended year. This is a single number designating the year of this calendar system.
  // The main difference between `y` and `u` localizers are B.C. years:
  // | Year | `y` | `u` |
  // |------|-----|-----|
  // | AC 1 |   1 |   1 |
  // | BC 1 |   1 |   0 |
  // | BC 2 |   2 |  -1 |
  // Also `yy` always returns the last two digits of a year,
  // while `uu` pads single digit years to 2 characters and returns other years unchanged.
  u: function(e, t) {
    const n = e.getFullYear();
    return ie(n, t.length);
  },
  // Quarter
  Q: function(e, t, n) {
    const r = Math.ceil((e.getMonth() + 1) / 3);
    switch (t) {
      case "Q":
        return String(r);
      case "QQ":
        return ie(r, 2);
      case "Qo":
        return n.ordinalNumber(r, { unit: "quarter" });
      case "QQQ":
        return n.quarter(r, {
          width: "abbreviated",
          context: "formatting"
        });
      case "QQQQQ":
        return n.quarter(r, {
          width: "narrow",
          context: "formatting"
        });
      case "QQQQ":
      default:
        return n.quarter(r, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone quarter
  q: function(e, t, n) {
    const r = Math.ceil((e.getMonth() + 1) / 3);
    switch (t) {
      case "q":
        return String(r);
      case "qq":
        return ie(r, 2);
      case "qo":
        return n.ordinalNumber(r, { unit: "quarter" });
      case "qqq":
        return n.quarter(r, {
          width: "abbreviated",
          context: "standalone"
        });
      case "qqqqq":
        return n.quarter(r, {
          width: "narrow",
          context: "standalone"
        });
      case "qqqq":
      default:
        return n.quarter(r, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // Month
  M: function(e, t, n) {
    const r = e.getMonth();
    switch (t) {
      case "M":
      case "MM":
        return Ot.M(e, t);
      case "Mo":
        return n.ordinalNumber(r + 1, { unit: "month" });
      case "MMM":
        return n.month(r, {
          width: "abbreviated",
          context: "formatting"
        });
      case "MMMMM":
        return n.month(r, {
          width: "narrow",
          context: "formatting"
        });
      case "MMMM":
      default:
        return n.month(r, { width: "wide", context: "formatting" });
    }
  },
  // Stand-alone month
  L: function(e, t, n) {
    const r = e.getMonth();
    switch (t) {
      case "L":
        return String(r + 1);
      case "LL":
        return ie(r + 1, 2);
      case "Lo":
        return n.ordinalNumber(r + 1, { unit: "month" });
      case "LLL":
        return n.month(r, {
          width: "abbreviated",
          context: "standalone"
        });
      case "LLLLL":
        return n.month(r, {
          width: "narrow",
          context: "standalone"
        });
      case "LLLL":
      default:
        return n.month(r, { width: "wide", context: "standalone" });
    }
  },
  // Local week of year
  w: function(e, t, n, r) {
    const o = lu(e, r);
    return t === "wo" ? n.ordinalNumber(o, { unit: "week" }) : ie(o, t.length);
  },
  // ISO week of year
  I: function(e, t, n) {
    const r = iu(e);
    return t === "Io" ? n.ordinalNumber(r, { unit: "week" }) : ie(r, t.length);
  },
  // Day of the month
  d: function(e, t, n) {
    return t === "do" ? n.ordinalNumber(e.getDate(), { unit: "date" }) : Ot.d(e, t);
  },
  // Day of year
  D: function(e, t, n) {
    const r = ax(e);
    return t === "Do" ? n.ordinalNumber(r, { unit: "dayOfYear" }) : ie(r, t.length);
  },
  // Day of week
  E: function(e, t, n) {
    const r = e.getDay();
    switch (t) {
      case "E":
      case "EE":
      case "EEE":
        return n.day(r, {
          width: "abbreviated",
          context: "formatting"
        });
      case "EEEEE":
        return n.day(r, {
          width: "narrow",
          context: "formatting"
        });
      case "EEEEEE":
        return n.day(r, {
          width: "short",
          context: "formatting"
        });
      case "EEEE":
      default:
        return n.day(r, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Local day of week
  e: function(e, t, n, r) {
    const o = e.getDay(), i = (o - r.weekStartsOn + 8) % 7 || 7;
    switch (t) {
      case "e":
        return String(i);
      case "ee":
        return ie(i, 2);
      case "eo":
        return n.ordinalNumber(i, { unit: "day" });
      case "eee":
        return n.day(o, {
          width: "abbreviated",
          context: "formatting"
        });
      case "eeeee":
        return n.day(o, {
          width: "narrow",
          context: "formatting"
        });
      case "eeeeee":
        return n.day(o, {
          width: "short",
          context: "formatting"
        });
      case "eeee":
      default:
        return n.day(o, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone local day of week
  c: function(e, t, n, r) {
    const o = e.getDay(), i = (o - r.weekStartsOn + 8) % 7 || 7;
    switch (t) {
      case "c":
        return String(i);
      case "cc":
        return ie(i, t.length);
      case "co":
        return n.ordinalNumber(i, { unit: "day" });
      case "ccc":
        return n.day(o, {
          width: "abbreviated",
          context: "standalone"
        });
      case "ccccc":
        return n.day(o, {
          width: "narrow",
          context: "standalone"
        });
      case "cccccc":
        return n.day(o, {
          width: "short",
          context: "standalone"
        });
      case "cccc":
      default:
        return n.day(o, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // ISO day of week
  i: function(e, t, n) {
    const r = e.getDay(), o = r === 0 ? 7 : r;
    switch (t) {
      case "i":
        return String(o);
      case "ii":
        return ie(o, t.length);
      case "io":
        return n.ordinalNumber(o, { unit: "day" });
      case "iii":
        return n.day(r, {
          width: "abbreviated",
          context: "formatting"
        });
      case "iiiii":
        return n.day(r, {
          width: "narrow",
          context: "formatting"
        });
      case "iiiiii":
        return n.day(r, {
          width: "short",
          context: "formatting"
        });
      case "iiii":
      default:
        return n.day(r, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM or PM
  a: function(e, t, n) {
    const o = e.getHours() / 12 >= 1 ? "pm" : "am";
    switch (t) {
      case "a":
      case "aa":
        return n.dayPeriod(o, {
          width: "abbreviated",
          context: "formatting"
        });
      case "aaa":
        return n.dayPeriod(o, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "aaaaa":
        return n.dayPeriod(o, {
          width: "narrow",
          context: "formatting"
        });
      case "aaaa":
      default:
        return n.dayPeriod(o, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM, PM, midnight, noon
  b: function(e, t, n) {
    const r = e.getHours();
    let o;
    switch (r === 12 ? o = dn.noon : r === 0 ? o = dn.midnight : o = r / 12 >= 1 ? "pm" : "am", t) {
      case "b":
      case "bb":
        return n.dayPeriod(o, {
          width: "abbreviated",
          context: "formatting"
        });
      case "bbb":
        return n.dayPeriod(o, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "bbbbb":
        return n.dayPeriod(o, {
          width: "narrow",
          context: "formatting"
        });
      case "bbbb":
      default:
        return n.dayPeriod(o, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // in the morning, in the afternoon, in the evening, at night
  B: function(e, t, n) {
    const r = e.getHours();
    let o;
    switch (r >= 17 ? o = dn.evening : r >= 12 ? o = dn.afternoon : r >= 4 ? o = dn.morning : o = dn.night, t) {
      case "B":
      case "BB":
      case "BBB":
        return n.dayPeriod(o, {
          width: "abbreviated",
          context: "formatting"
        });
      case "BBBBB":
        return n.dayPeriod(o, {
          width: "narrow",
          context: "formatting"
        });
      case "BBBB":
      default:
        return n.dayPeriod(o, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Hour [1-12]
  h: function(e, t, n) {
    if (t === "ho") {
      let r = e.getHours() % 12;
      return r === 0 && (r = 12), n.ordinalNumber(r, { unit: "hour" });
    }
    return Ot.h(e, t);
  },
  // Hour [0-23]
  H: function(e, t, n) {
    return t === "Ho" ? n.ordinalNumber(e.getHours(), { unit: "hour" }) : Ot.H(e, t);
  },
  // Hour [0-11]
  K: function(e, t, n) {
    const r = e.getHours() % 12;
    return t === "Ko" ? n.ordinalNumber(r, { unit: "hour" }) : ie(r, t.length);
  },
  // Hour [1-24]
  k: function(e, t, n) {
    let r = e.getHours();
    return r === 0 && (r = 24), t === "ko" ? n.ordinalNumber(r, { unit: "hour" }) : ie(r, t.length);
  },
  // Minute
  m: function(e, t, n) {
    return t === "mo" ? n.ordinalNumber(e.getMinutes(), { unit: "minute" }) : Ot.m(e, t);
  },
  // Second
  s: function(e, t, n) {
    return t === "so" ? n.ordinalNumber(e.getSeconds(), { unit: "second" }) : Ot.s(e, t);
  },
  // Fraction of second
  S: function(e, t) {
    return Ot.S(e, t);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function(e, t, n) {
    const r = e.getTimezoneOffset();
    if (r === 0)
      return "Z";
    switch (t) {
      case "X":
        return l0(r);
      case "XXXX":
      case "XX":
        return Qt(r);
      case "XXXXX":
      case "XXX":
      default:
        return Qt(r, ":");
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function(e, t, n) {
    const r = e.getTimezoneOffset();
    switch (t) {
      case "x":
        return l0(r);
      case "xxxx":
      case "xx":
        return Qt(r);
      case "xxxxx":
      case "xxx":
      default:
        return Qt(r, ":");
    }
  },
  // Timezone (GMT)
  O: function(e, t, n) {
    const r = e.getTimezoneOffset();
    switch (t) {
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + s0(r, ":");
      case "OOOO":
      default:
        return "GMT" + Qt(r, ":");
    }
  },
  // Timezone (specific non-location)
  z: function(e, t, n) {
    const r = e.getTimezoneOffset();
    switch (t) {
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + s0(r, ":");
      case "zzzz":
      default:
        return "GMT" + Qt(r, ":");
    }
  },
  // Seconds timestamp
  t: function(e, t, n) {
    const r = Math.trunc(e.getTime() / 1e3);
    return ie(r, t.length);
  },
  // Milliseconds timestamp
  T: function(e, t, n) {
    const r = e.getTime();
    return ie(r, t.length);
  }
};
function s0(e, t = "") {
  const n = e > 0 ? "-" : "+", r = Math.abs(e), o = Math.trunc(r / 60), i = r % 60;
  return i === 0 ? n + String(o) : n + String(o) + t + ie(i, 2);
}
function l0(e, t) {
  return e % 60 === 0 ? (e > 0 ? "-" : "+") + ie(Math.abs(e) / 60, 2) : Qt(e, t);
}
function Qt(e, t = "") {
  const n = e > 0 ? "-" : "+", r = Math.abs(e), o = ie(Math.trunc(r / 60), 2), i = ie(r % 60, 2);
  return n + o + t + i;
}
const c0 = (e, t) => {
  switch (e) {
    case "P":
      return t.date({ width: "short" });
    case "PP":
      return t.date({ width: "medium" });
    case "PPP":
      return t.date({ width: "long" });
    case "PPPP":
    default:
      return t.date({ width: "full" });
  }
}, cu = (e, t) => {
  switch (e) {
    case "p":
      return t.time({ width: "short" });
    case "pp":
      return t.time({ width: "medium" });
    case "ppp":
      return t.time({ width: "long" });
    case "pppp":
    default:
      return t.time({ width: "full" });
  }
}, sx = (e, t) => {
  const n = e.match(/(P+)(p+)?/) || [], r = n[1], o = n[2];
  if (!o)
    return c0(e, t);
  let i;
  switch (r) {
    case "P":
      i = t.dateTime({ width: "short" });
      break;
    case "PP":
      i = t.dateTime({ width: "medium" });
      break;
    case "PPP":
      i = t.dateTime({ width: "long" });
      break;
    case "PPPP":
    default:
      i = t.dateTime({ width: "full" });
      break;
  }
  return i.replace("{{date}}", c0(r, t)).replace("{{time}}", cu(o, t));
}, lx = {
  p: cu,
  P: sx
}, cx = /^D+$/, ux = /^Y+$/, dx = ["D", "DD", "YY", "YYYY"];
function fx(e) {
  return cx.test(e);
}
function hx(e) {
  return ux.test(e);
}
function px(e, t, n) {
  const r = mx(e, t, n);
  if (console.warn(r), dx.includes(e)) throw new RangeError(r);
}
function mx(e, t, n) {
  const r = e[0] === "Y" ? "years" : "days of the month";
  return `Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
const vx = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, gx = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, wx = /^'([^]*?)'?$/, yx = /''/g, xx = /[a-zA-Z]/;
function ln(e, t, n) {
  var d, f, p, m, v, g, x, C;
  const r = cr(), o = (n == null ? void 0 : n.locale) ?? r.locale ?? au, i = (n == null ? void 0 : n.firstWeekContainsDate) ?? ((f = (d = n == null ? void 0 : n.locale) == null ? void 0 : d.options) == null ? void 0 : f.firstWeekContainsDate) ?? r.firstWeekContainsDate ?? ((m = (p = r.locale) == null ? void 0 : p.options) == null ? void 0 : m.firstWeekContainsDate) ?? 1, s = (n == null ? void 0 : n.weekStartsOn) ?? ((g = (v = n == null ? void 0 : n.locale) == null ? void 0 : v.options) == null ? void 0 : g.weekStartsOn) ?? r.weekStartsOn ?? ((C = (x = r.locale) == null ? void 0 : x.options) == null ? void 0 : C.weekStartsOn) ?? 0, l = ne(e);
  if (!Ry(l))
    throw new RangeError("Invalid time value");
  let c = t.match(gx).map((y) => {
    const M = y[0];
    if (M === "p" || M === "P") {
      const _ = lx[M];
      return _(y, o.formatLong);
    }
    return y;
  }).join("").match(vx).map((y) => {
    if (y === "''")
      return { isToken: !1, value: "'" };
    const M = y[0];
    if (M === "'")
      return { isToken: !1, value: bx(y) };
    if (i0[M])
      return { isToken: !0, value: y };
    if (M.match(xx))
      throw new RangeError(
        "Format string contains an unescaped latin alphabet character `" + M + "`"
      );
    return { isToken: !1, value: y };
  });
  o.localize.preprocessor && (c = o.localize.preprocessor(l, c));
  const u = {
    firstWeekContainsDate: i,
    weekStartsOn: s,
    locale: o
  };
  return c.map((y) => {
    if (!y.isToken) return y.value;
    const M = y.value;
    (!(n != null && n.useAdditionalWeekYearTokens) && hx(M) || !(n != null && n.useAdditionalDayOfYearTokens) && fx(M)) && px(M, t, String(e));
    const _ = i0[M[0]];
    return _(l, M, o.localize, u);
  }).join("");
}
function bx(e) {
  const t = e.match(wx);
  return t ? t[1].replace(yx, "'") : e;
}
function Cx(e) {
  const t = ne(e), n = t.getFullYear(), r = t.getMonth(), o = je(e, 0);
  return o.setFullYear(n, r + 1, 0), o.setHours(0, 0, 0, 0), o.getDate();
}
function Mx(e) {
  return Math.trunc(+ne(e) / 1e3);
}
function Sx(e) {
  const t = ne(e), n = t.getMonth();
  return t.setFullYear(t.getFullYear(), n + 1, 0), t.setHours(0, 0, 0, 0), t;
}
function Rx(e, t) {
  return _y(
    Sx(e),
    $e(e),
    t
  ) + 1;
}
function La(e, t) {
  const n = ne(e), r = ne(t);
  return n.getTime() > r.getTime();
}
function uu(e, t) {
  const n = ne(e), r = ne(t);
  return +n < +r;
}
function Ui(e, t) {
  const n = ne(e), r = ne(t);
  return n.getFullYear() === r.getFullYear() && n.getMonth() === r.getMonth();
}
function _x(e, t) {
  const n = ne(e), r = ne(t);
  return n.getFullYear() === r.getFullYear();
}
function oa(e, t) {
  return Fe(e, -t);
}
function aa(e, t) {
  const n = ne(e), r = n.getFullYear(), o = n.getDate(), i = je(e, 0);
  i.setFullYear(r, t, 15), i.setHours(0, 0, 0, 0);
  const s = Cx(i);
  return n.setMonth(t, Math.min(o, s)), n;
}
function u0(e, t) {
  const n = ne(e);
  return isNaN(+n) ? je(e, NaN) : (n.setFullYear(t), n);
}
var X = function() {
  return X = Object.assign || function(t) {
    for (var n, r = 1, o = arguments.length; r < o; r++) {
      n = arguments[r];
      for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
    }
    return t;
  }, X.apply(this, arguments);
};
function Px(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
}
function du(e, t, n) {
  for (var r = 0, o = t.length, i; r < o; r++)
    (i || !(r in t)) && (i || (i = Array.prototype.slice.call(t, 0, r)), i[r] = t[r]);
  return e.concat(i || Array.prototype.slice.call(t));
}
function ur(e) {
  return e.mode === "multiple";
}
function dr(e) {
  return e.mode === "range";
}
function Ao(e) {
  return e.mode === "single";
}
var Ax = {
  root: "rdp",
  multiple_months: "rdp-multiple_months",
  with_weeknumber: "rdp-with_weeknumber",
  vhidden: "rdp-vhidden",
  button_reset: "rdp-button_reset",
  button: "rdp-button",
  caption: "rdp-caption",
  caption_start: "rdp-caption_start",
  caption_end: "rdp-caption_end",
  caption_between: "rdp-caption_between",
  caption_label: "rdp-caption_label",
  caption_dropdowns: "rdp-caption_dropdowns",
  dropdown: "rdp-dropdown",
  dropdown_month: "rdp-dropdown_month",
  dropdown_year: "rdp-dropdown_year",
  dropdown_icon: "rdp-dropdown_icon",
  months: "rdp-months",
  month: "rdp-month",
  table: "rdp-table",
  tbody: "rdp-tbody",
  tfoot: "rdp-tfoot",
  head: "rdp-head",
  head_row: "rdp-head_row",
  head_cell: "rdp-head_cell",
  nav: "rdp-nav",
  nav_button: "rdp-nav_button",
  nav_button_previous: "rdp-nav_button_previous",
  nav_button_next: "rdp-nav_button_next",
  nav_icon: "rdp-nav_icon",
  row: "rdp-row",
  weeknumber: "rdp-weeknumber",
  cell: "rdp-cell",
  day: "rdp-day",
  day_today: "rdp-day_today",
  day_outside: "rdp-day_outside",
  day_selected: "rdp-day_selected",
  day_disabled: "rdp-day_disabled",
  day_hidden: "rdp-day_hidden",
  day_range_start: "rdp-day_range_start",
  day_range_end: "rdp-day_range_end",
  day_range_middle: "rdp-day_range_middle"
};
function Tx(e, t) {
  return ln(e, "LLLL y", t);
}
function Nx(e, t) {
  return ln(e, "d", t);
}
function Dx(e, t) {
  return ln(e, "LLLL", t);
}
function kx(e) {
  return "".concat(e);
}
function Ex(e, t) {
  return ln(e, "cccccc", t);
}
function Fx(e, t) {
  return ln(e, "yyyy", t);
}
var Ix = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  formatCaption: Tx,
  formatDay: Nx,
  formatMonthCaption: Dx,
  formatWeekNumber: kx,
  formatWeekdayName: Ex,
  formatYearCaption: Fx
}), Ox = function(e, t, n) {
  return ln(e, "do MMMM (EEEE)", n);
}, Vx = function() {
  return "Month: ";
}, Bx = function() {
  return "Go to next month";
}, Lx = function() {
  return "Go to previous month";
}, $x = function(e, t) {
  return ln(e, "cccc", t);
}, zx = function(e) {
  return "Week n. ".concat(e);
}, Hx = function() {
  return "Year: ";
}, Wx = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  labelDay: Ox,
  labelMonthDropdown: Vx,
  labelNext: Bx,
  labelPrevious: Lx,
  labelWeekNumber: zx,
  labelWeekday: $x,
  labelYearDropdown: Hx
});
function Ux() {
  var e = "buttons", t = Ax, n = au, r = {}, o = {}, i = 1, s = {}, l = /* @__PURE__ */ new Date();
  return {
    captionLayout: e,
    classNames: t,
    formatters: Ix,
    labels: Wx,
    locale: n,
    modifiersClassNames: r,
    modifiers: o,
    numberOfMonths: i,
    styles: s,
    today: l,
    mode: "default"
  };
}
function Gx(e) {
  var t = e.fromYear, n = e.toYear, r = e.fromMonth, o = e.toMonth, i = e.fromDate, s = e.toDate;
  return r ? i = $e(r) : t && (i = new Date(t, 0, 1)), o ? s = Hi(o) : n && (s = new Date(n, 11, 31)), {
    fromDate: i ? Pn(i) : void 0,
    toDate: s ? Pn(s) : void 0
  };
}
var fu = He(void 0);
function jx(e) {
  var t, n = e.initialProps, r = Ux(), o = Gx(n), i = o.fromDate, s = o.toDate, l = (t = n.captionLayout) !== null && t !== void 0 ? t : r.captionLayout;
  l !== "buttons" && (!i || !s) && (l = "buttons");
  var c;
  (Ao(n) || ur(n) || dr(n)) && (c = n.onSelect);
  var u = X(X(X({}, r), n), { captionLayout: l, classNames: X(X({}, r.classNames), n.classNames), components: X({}, n.components), formatters: X(X({}, r.formatters), n.formatters), fromDate: i, labels: X(X({}, r.labels), n.labels), mode: n.mode || r.mode, modifiers: X(X({}, r.modifiers), n.modifiers), modifiersClassNames: X(X({}, r.modifiersClassNames), n.modifiersClassNames), onSelect: c, styles: X(X({}, r.styles), n.styles), toDate: s });
  return a(fu.Provider, { value: u, children: e.children });
}
function he() {
  var e = fe(fu);
  if (!e)
    throw new Error("useDayPicker must be used within a DayPickerProvider.");
  return e;
}
function hu(e) {
  var t = he(), n = t.locale, r = t.classNames, o = t.styles, i = t.formatters.formatCaption;
  return a("div", { className: r.caption_label, style: o.caption_label, "aria-live": "polite", role: "presentation", id: e.id, children: i(e.displayMonth, { locale: n }) });
}
function Kx(e) {
  return a("svg", X({ width: "8px", height: "8px", viewBox: "0 0 120 120", "data-testid": "iconDropdown" }, e, { children: a("path", { d: "M4.22182541,48.2218254 C8.44222828,44.0014225 15.2388494,43.9273804 19.5496459,47.9996989 L19.7781746,48.2218254 L60,88.443 L100.221825,48.2218254 C104.442228,44.0014225 111.238849,43.9273804 115.549646,47.9996989 L115.778175,48.2218254 C119.998577,52.4422283 120.07262,59.2388494 116.000301,63.5496459 L115.778175,63.7781746 L67.7781746,111.778175 C63.5577717,115.998577 56.7611506,116.07262 52.4503541,112.000301 L52.2218254,111.778175 L4.22182541,63.7781746 C-0.0739418023,59.4824074 -0.0739418023,52.5175926 4.22182541,48.2218254 Z", fill: "currentColor", fillRule: "nonzero" }) }));
}
function pu(e) {
  var t, n, r = e.onChange, o = e.value, i = e.children, s = e.caption, l = e.className, c = e.style, u = he(), d = (n = (t = u.components) === null || t === void 0 ? void 0 : t.IconDropdown) !== null && n !== void 0 ? n : Kx;
  return b("div", { className: l, style: c, children: [a("span", { className: u.classNames.vhidden, children: e["aria-label"] }), a("select", { name: e.name, "aria-label": e["aria-label"], className: u.classNames.dropdown, style: u.styles.dropdown, value: o, onChange: r, children: i }), b("div", { className: u.classNames.caption_label, style: u.styles.caption_label, "aria-hidden": "true", children: [s, a(d, { className: u.classNames.dropdown_icon, style: u.styles.dropdown_icon })] })] });
}
function Yx(e) {
  var t, n = he(), r = n.fromDate, o = n.toDate, i = n.styles, s = n.locale, l = n.formatters.formatMonthCaption, c = n.classNames, u = n.components, d = n.labels.labelMonthDropdown;
  if (!r)
    return a(me, {});
  if (!o)
    return a(me, {});
  var f = [];
  if (_x(r, o))
    for (var p = $e(r), m = r.getMonth(); m <= o.getMonth(); m++)
      f.push(aa(p, m));
  else
    for (var p = $e(/* @__PURE__ */ new Date()), m = 0; m <= 11; m++)
      f.push(aa(p, m));
  var v = function(x) {
    var C = Number(x.target.value), y = aa($e(e.displayMonth), C);
    e.onChange(y);
  }, g = (t = u == null ? void 0 : u.Dropdown) !== null && t !== void 0 ? t : pu;
  return a(g, { name: "months", "aria-label": d(), className: c.dropdown_month, style: i.dropdown_month, onChange: v, value: e.displayMonth.getMonth(), caption: l(e.displayMonth, { locale: s }), children: f.map(function(x) {
    return a("option", { value: x.getMonth(), children: l(x, { locale: s }) }, x.getMonth());
  }) });
}
function qx(e) {
  var t, n = e.displayMonth, r = he(), o = r.fromDate, i = r.toDate, s = r.locale, l = r.styles, c = r.classNames, u = r.components, d = r.formatters.formatYearCaption, f = r.labels.labelYearDropdown, p = [];
  if (!o)
    return a(me, {});
  if (!i)
    return a(me, {});
  for (var m = o.getFullYear(), v = i.getFullYear(), g = m; g <= v; g++)
    p.push(u0(ru(/* @__PURE__ */ new Date()), g));
  var x = function(y) {
    var M = u0($e(n), Number(y.target.value));
    e.onChange(M);
  }, C = (t = u == null ? void 0 : u.Dropdown) !== null && t !== void 0 ? t : pu;
  return a(C, { name: "years", "aria-label": f(), className: c.dropdown_year, style: l.dropdown_year, onChange: x, value: n.getFullYear(), caption: d(n, { locale: s }), children: p.map(function(y) {
    return a("option", { value: y.getFullYear(), children: d(y, { locale: s }) }, y.getFullYear());
  }) });
}
function Xx(e, t) {
  var n = be(e), r = n[0], o = n[1], i = t === void 0 ? r : t;
  return [i, o];
}
function Zx(e) {
  var t = e.month, n = e.defaultMonth, r = e.today, o = t || n || r || /* @__PURE__ */ new Date(), i = e.toDate, s = e.fromDate, l = e.numberOfMonths, c = l === void 0 ? 1 : l;
  if (i && tr(i, o) < 0) {
    var u = -1 * (c - 1);
    o = at(i, u);
  }
  return s && tr(o, s) < 0 && (o = s), $e(o);
}
function Qx() {
  var e = he(), t = Zx(e), n = Xx(t, e.month), r = n[0], o = n[1], i = function(s) {
    var l;
    if (!e.disableNavigation) {
      var c = $e(s);
      o(c), (l = e.onMonthChange) === null || l === void 0 || l.call(e, c);
    }
  };
  return [r, i];
}
function Jx(e, t) {
  for (var n = t.reverseMonths, r = t.numberOfMonths, o = $e(e), i = $e(at(o, r)), s = tr(i, o), l = [], c = 0; c < s; c++) {
    var u = at(o, c);
    l.push(u);
  }
  return n && (l = l.reverse()), l;
}
function eb(e, t) {
  if (!t.disableNavigation) {
    var n = t.toDate, r = t.pagedNavigation, o = t.numberOfMonths, i = o === void 0 ? 1 : o, s = r ? i : 1, l = $e(e);
    if (!n)
      return at(l, s);
    var c = tr(n, e);
    if (!(c < i))
      return at(l, s);
  }
}
function tb(e, t) {
  if (!t.disableNavigation) {
    var n = t.fromDate, r = t.pagedNavigation, o = t.numberOfMonths, i = o === void 0 ? 1 : o, s = r ? i : 1, l = $e(e);
    if (!n)
      return at(l, -s);
    var c = tr(l, n);
    if (!(c <= 0))
      return at(l, -s);
  }
}
var mu = He(void 0);
function nb(e) {
  var t = he(), n = Qx(), r = n[0], o = n[1], i = Jx(r, t), s = eb(r, t), l = tb(r, t), c = function(f) {
    return i.some(function(p) {
      return Ui(f, p);
    });
  }, u = function(f, p) {
    c(f) || (p && uu(f, p) ? o(at(f, 1 + t.numberOfMonths * -1)) : o(f));
  }, d = {
    currentMonth: r,
    displayMonths: i,
    goToMonth: o,
    goToDate: u,
    previousMonth: l,
    nextMonth: s,
    isDateDisplayed: c
  };
  return a(mu.Provider, { value: d, children: e.children });
}
function fr() {
  var e = fe(mu);
  if (!e)
    throw new Error("useNavigation must be used within a NavigationProvider");
  return e;
}
function d0(e) {
  var t, n = he(), r = n.classNames, o = n.styles, i = n.components, s = fr().goToMonth, l = function(d) {
    s(at(d, e.displayIndex ? -e.displayIndex : 0));
  }, c = (t = i == null ? void 0 : i.CaptionLabel) !== null && t !== void 0 ? t : hu, u = a(c, { id: e.id, displayMonth: e.displayMonth });
  return b("div", { className: r.caption_dropdowns, style: o.caption_dropdowns, children: [a("div", { className: r.vhidden, children: u }), a(Yx, { onChange: l, displayMonth: e.displayMonth }), a(qx, { onChange: l, displayMonth: e.displayMonth })] });
}
function rb(e) {
  return a("svg", X({ width: "16px", height: "16px", viewBox: "0 0 120 120" }, e, { children: a("path", { d: "M69.490332,3.34314575 C72.6145263,0.218951416 77.6798462,0.218951416 80.8040405,3.34314575 C83.8617626,6.40086786 83.9268205,11.3179931 80.9992143,14.4548388 L80.8040405,14.6568542 L35.461,60 L80.8040405,105.343146 C83.8617626,108.400868 83.9268205,113.317993 80.9992143,116.454839 L80.8040405,116.656854 C77.7463184,119.714576 72.8291931,119.779634 69.6923475,116.852028 L69.490332,116.656854 L18.490332,65.6568542 C15.4326099,62.5991321 15.367552,57.6820069 18.2951583,54.5451612 L18.490332,54.3431458 L69.490332,3.34314575 Z", fill: "currentColor", fillRule: "nonzero" }) }));
}
function ob(e) {
  return a("svg", X({ width: "16px", height: "16px", viewBox: "0 0 120 120" }, e, { children: a("path", { d: "M49.8040405,3.34314575 C46.6798462,0.218951416 41.6145263,0.218951416 38.490332,3.34314575 C35.4326099,6.40086786 35.367552,11.3179931 38.2951583,14.4548388 L38.490332,14.6568542 L83.8333725,60 L38.490332,105.343146 C35.4326099,108.400868 35.367552,113.317993 38.2951583,116.454839 L38.490332,116.656854 C41.5480541,119.714576 46.4651794,119.779634 49.602025,116.852028 L49.8040405,116.656854 L100.804041,65.6568542 C103.861763,62.5991321 103.926821,57.6820069 100.999214,54.5451612 L100.804041,54.3431458 L49.8040405,3.34314575 Z", fill: "currentColor" }) }));
}
var Xr = w(function(e, t) {
  var n = he(), r = n.classNames, o = n.styles, i = [r.button_reset, r.button];
  e.className && i.push(e.className);
  var s = i.join(" "), l = X(X({}, o.button_reset), o.button);
  return e.style && Object.assign(l, e.style), a("button", X({}, e, { ref: t, type: "button", className: s, style: l }));
});
function ab(e) {
  var t, n, r = he(), o = r.dir, i = r.locale, s = r.classNames, l = r.styles, c = r.labels, u = c.labelPrevious, d = c.labelNext, f = r.components;
  if (!e.nextMonth && !e.previousMonth)
    return a(me, {});
  var p = u(e.previousMonth, { locale: i }), m = [
    s.nav_button,
    s.nav_button_previous
  ].join(" "), v = d(e.nextMonth, { locale: i }), g = [
    s.nav_button,
    s.nav_button_next
  ].join(" "), x = (t = f == null ? void 0 : f.IconRight) !== null && t !== void 0 ? t : ob, C = (n = f == null ? void 0 : f.IconLeft) !== null && n !== void 0 ? n : rb;
  return b("div", { className: s.nav, style: l.nav, children: [!e.hidePrevious && a(Xr, { name: "previous-month", "aria-label": p, className: m, style: l.nav_button_previous, disabled: !e.previousMonth, onClick: e.onPreviousClick, children: o === "rtl" ? a(x, { className: s.nav_icon, style: l.nav_icon }) : a(C, { className: s.nav_icon, style: l.nav_icon }) }), !e.hideNext && a(Xr, { name: "next-month", "aria-label": v, className: g, style: l.nav_button_next, disabled: !e.nextMonth, onClick: e.onNextClick, children: o === "rtl" ? a(C, { className: s.nav_icon, style: l.nav_icon }) : a(x, { className: s.nav_icon, style: l.nav_icon }) })] });
}
function f0(e) {
  var t = he().numberOfMonths, n = fr(), r = n.previousMonth, o = n.nextMonth, i = n.goToMonth, s = n.displayMonths, l = s.findIndex(function(v) {
    return Ui(e.displayMonth, v);
  }), c = l === 0, u = l === s.length - 1, d = t > 1 && (c || !u), f = t > 1 && (u || !c), p = function() {
    r && i(r);
  }, m = function() {
    o && i(o);
  };
  return a(ab, { displayMonth: e.displayMonth, hideNext: d, hidePrevious: f, nextMonth: o, previousMonth: r, onPreviousClick: p, onNextClick: m });
}
function ib(e) {
  var t, n = he(), r = n.classNames, o = n.disableNavigation, i = n.styles, s = n.captionLayout, l = n.components, c = (t = l == null ? void 0 : l.CaptionLabel) !== null && t !== void 0 ? t : hu, u;
  return o ? u = a(c, { id: e.id, displayMonth: e.displayMonth }) : s === "dropdown" ? u = a(d0, { displayMonth: e.displayMonth, id: e.id }) : s === "dropdown-buttons" ? u = b(me, { children: [a(d0, { displayMonth: e.displayMonth, displayIndex: e.displayIndex, id: e.id }), a(f0, { displayMonth: e.displayMonth, displayIndex: e.displayIndex, id: e.id })] }) : u = b(me, { children: [a(c, { id: e.id, displayMonth: e.displayMonth, displayIndex: e.displayIndex }), a(f0, { displayMonth: e.displayMonth, id: e.id })] }), a("div", { className: r.caption, style: i.caption, children: u });
}
function sb(e) {
  var t = he(), n = t.footer, r = t.styles, o = t.classNames.tfoot;
  return n ? a("tfoot", { className: o, style: r.tfoot, children: a("tr", { children: a("td", { colSpan: 8, children: n }) }) }) : a(me, {});
}
function lb(e, t, n) {
  for (var r = n ? on(/* @__PURE__ */ new Date()) : wt(/* @__PURE__ */ new Date(), { locale: e, weekStartsOn: t }), o = [], i = 0; i < 7; i++) {
    var s = Fe(r, i);
    o.push(s);
  }
  return o;
}
function cb() {
  var e = he(), t = e.classNames, n = e.styles, r = e.showWeekNumber, o = e.locale, i = e.weekStartsOn, s = e.ISOWeek, l = e.formatters.formatWeekdayName, c = e.labels.labelWeekday, u = lb(o, i, s);
  return b("tr", { style: n.head_row, className: t.head_row, children: [r && a("td", { style: n.head_cell, className: t.head_cell }), u.map(function(d, f) {
    return a("th", { scope: "col", className: t.head_cell, style: n.head_cell, "aria-label": c(d, { locale: o }), children: l(d, { locale: o }) }, f);
  })] });
}
function ub() {
  var e, t = he(), n = t.classNames, r = t.styles, o = t.components, i = (e = o == null ? void 0 : o.HeadRow) !== null && e !== void 0 ? e : cb;
  return a("thead", { style: r.head, className: n.head, children: a(i, {}) });
}
function db(e) {
  var t = he(), n = t.locale, r = t.formatters.formatDay;
  return a(me, { children: r(e.date, { locale: n }) });
}
var Gi = He(void 0);
function fb(e) {
  if (!ur(e.initialProps)) {
    var t = {
      selected: void 0,
      modifiers: {
        disabled: []
      }
    };
    return a(Gi.Provider, { value: t, children: e.children });
  }
  return a(hb, { initialProps: e.initialProps, children: e.children });
}
function hb(e) {
  var t = e.initialProps, n = e.children, r = t.selected, o = t.min, i = t.max, s = function(u, d, f) {
    var p, m;
    (p = t.onDayClick) === null || p === void 0 || p.call(t, u, d, f);
    var v = !!(d.selected && o && (r == null ? void 0 : r.length) === o);
    if (!v) {
      var g = !!(!d.selected && i && (r == null ? void 0 : r.length) === i);
      if (!g) {
        var x = r ? du([], r) : [];
        if (d.selected) {
          var C = x.findIndex(function(y) {
            return Le(u, y);
          });
          x.splice(C, 1);
        } else
          x.push(u);
        (m = t.onSelect) === null || m === void 0 || m.call(t, x, u, d, f);
      }
    }
  }, l = {
    disabled: []
  };
  r && l.disabled.push(function(u) {
    var d = i && r.length > i - 1, f = r.some(function(p) {
      return Le(p, u);
    });
    return !!(d && !f);
  });
  var c = {
    selected: r,
    onDayClick: s,
    modifiers: l
  };
  return a(Gi.Provider, { value: c, children: n });
}
function ji() {
  var e = fe(Gi);
  if (!e)
    throw new Error("useSelectMultiple must be used within a SelectMultipleProvider");
  return e;
}
function pb(e, t) {
  var n = t || {}, r = n.from, o = n.to;
  return r && o ? Le(o, e) && Le(r, e) ? void 0 : Le(o, e) ? { from: o, to: void 0 } : Le(r, e) ? void 0 : La(r, e) ? { from: e, to: o } : { from: r, to: e } : o ? La(e, o) ? { from: o, to: e } : { from: e, to: o } : r ? uu(e, r) ? { from: e, to: r } : { from: r, to: e } : { from: e, to: void 0 };
}
var Ki = He(void 0);
function mb(e) {
  if (!dr(e.initialProps)) {
    var t = {
      selected: void 0,
      modifiers: {
        range_start: [],
        range_end: [],
        range_middle: [],
        disabled: []
      }
    };
    return a(Ki.Provider, { value: t, children: e.children });
  }
  return a(vb, { initialProps: e.initialProps, children: e.children });
}
function vb(e) {
  var t = e.initialProps, n = e.children, r = t.selected, o = r || {}, i = o.from, s = o.to, l = t.min, c = t.max, u = function(m, v, g) {
    var x, C;
    (x = t.onDayClick) === null || x === void 0 || x.call(t, m, v, g);
    var y = pb(m, r);
    (C = t.onSelect) === null || C === void 0 || C.call(t, y, m, v, g);
  }, d = {
    range_start: [],
    range_end: [],
    range_middle: [],
    disabled: []
  };
  if (i ? (d.range_start = [i], s ? (d.range_end = [s], Le(i, s) || (d.range_middle = [
    {
      after: i,
      before: s
    }
  ])) : d.range_end = [i]) : s && (d.range_start = [s], d.range_end = [s]), l && (i && !s && d.disabled.push({
    after: oa(i, l - 1),
    before: Fe(i, l - 1)
  }), i && s && d.disabled.push({
    after: i,
    before: Fe(i, l - 1)
  }), !i && s && d.disabled.push({
    after: oa(s, l - 1),
    before: Fe(s, l - 1)
  })), c) {
    if (i && !s && (d.disabled.push({
      before: Fe(i, -c + 1)
    }), d.disabled.push({
      after: Fe(i, c - 1)
    })), i && s) {
      var f = ht(s, i) + 1, p = c - f;
      d.disabled.push({
        before: oa(i, p)
      }), d.disabled.push({
        after: Fe(s, p)
      });
    }
    !i && s && (d.disabled.push({
      before: Fe(s, -c + 1)
    }), d.disabled.push({
      after: Fe(s, c - 1)
    }));
  }
  return a(Ki.Provider, { value: { selected: r, onDayClick: u, modifiers: d }, children: n });
}
function Yi() {
  var e = fe(Ki);
  if (!e)
    throw new Error("useSelectRange must be used within a SelectRangeProvider");
  return e;
}
function Ir(e) {
  return Array.isArray(e) ? du([], e) : e !== void 0 ? [e] : [];
}
function gb(e) {
  var t = {};
  return Object.entries(e).forEach(function(n) {
    var r = n[0], o = n[1];
    t[r] = Ir(o);
  }), t;
}
var it;
(function(e) {
  e.Outside = "outside", e.Disabled = "disabled", e.Selected = "selected", e.Hidden = "hidden", e.Today = "today", e.RangeStart = "range_start", e.RangeEnd = "range_end", e.RangeMiddle = "range_middle";
})(it || (it = {}));
var wb = it.Selected, Ct = it.Disabled, yb = it.Hidden, xb = it.Today, ia = it.RangeEnd, sa = it.RangeMiddle, la = it.RangeStart, bb = it.Outside;
function Cb(e, t, n) {
  var r, o = (r = {}, r[wb] = Ir(e.selected), r[Ct] = Ir(e.disabled), r[yb] = Ir(e.hidden), r[xb] = [e.today], r[ia] = [], r[sa] = [], r[la] = [], r[bb] = [], r);
  return e.fromDate && o[Ct].push({ before: e.fromDate }), e.toDate && o[Ct].push({ after: e.toDate }), ur(e) ? o[Ct] = o[Ct].concat(t.modifiers[Ct]) : dr(e) && (o[Ct] = o[Ct].concat(n.modifiers[Ct]), o[la] = n.modifiers[la], o[sa] = n.modifiers[sa], o[ia] = n.modifiers[ia]), o;
}
var vu = He(void 0);
function Mb(e) {
  var t = he(), n = ji(), r = Yi(), o = Cb(t, n, r), i = gb(t.modifiers), s = X(X({}, o), i);
  return a(vu.Provider, { value: s, children: e.children });
}
function gu() {
  var e = fe(vu);
  if (!e)
    throw new Error("useModifiers must be used within a ModifiersProvider");
  return e;
}
function Sb(e) {
  return !!(e && typeof e == "object" && "before" in e && "after" in e);
}
function Rb(e) {
  return !!(e && typeof e == "object" && "from" in e);
}
function _b(e) {
  return !!(e && typeof e == "object" && "after" in e);
}
function Pb(e) {
  return !!(e && typeof e == "object" && "before" in e);
}
function Ab(e) {
  return !!(e && typeof e == "object" && "dayOfWeek" in e);
}
function Tb(e, t) {
  var n, r = t.from, o = t.to;
  if (r && o) {
    var i = ht(o, r) < 0;
    i && (n = [o, r], r = n[0], o = n[1]);
    var s = ht(e, r) >= 0 && ht(o, e) >= 0;
    return s;
  }
  return o ? Le(o, e) : r ? Le(r, e) : !1;
}
function Nb(e) {
  return zi(e);
}
function Db(e) {
  return Array.isArray(e) && e.every(zi);
}
function kb(e, t) {
  return t.some(function(n) {
    if (typeof n == "boolean")
      return n;
    if (Nb(n))
      return Le(e, n);
    if (Db(n))
      return n.includes(e);
    if (Rb(n))
      return Tb(e, n);
    if (Ab(n))
      return n.dayOfWeek.includes(e.getDay());
    if (Sb(n)) {
      var r = ht(n.before, e), o = ht(n.after, e), i = r > 0, s = o < 0, l = La(n.before, n.after);
      return l ? s && i : i || s;
    }
    return _b(n) ? ht(e, n.after) > 0 : Pb(n) ? ht(n.before, e) > 0 : typeof n == "function" ? n(e) : !1;
  });
}
function qi(e, t, n) {
  var r = Object.keys(t).reduce(function(i, s) {
    var l = t[s];
    return kb(e, l) && i.push(s), i;
  }, []), o = {};
  return r.forEach(function(i) {
    return o[i] = !0;
  }), n && !Ui(e, n) && (o.outside = !0), o;
}
function Eb(e, t) {
  for (var n = $e(e[0]), r = Hi(e[e.length - 1]), o, i, s = n; s <= r; ) {
    var l = qi(s, t), c = !l.disabled && !l.hidden;
    if (!c) {
      s = Fe(s, 1);
      continue;
    }
    if (l.selected)
      return s;
    l.today && !i && (i = s), o || (o = s), s = Fe(s, 1);
  }
  return i || o;
}
var Fb = 365;
function wu(e, t) {
  var n = t.moveBy, r = t.direction, o = t.context, i = t.modifiers, s = t.retry, l = s === void 0 ? { count: 0, lastFocused: e } : s, c = o.weekStartsOn, u = o.fromDate, d = o.toDate, f = o.locale, p = {
    day: Fe,
    week: Ba,
    month: at,
    year: Cy,
    startOfWeek: function(x) {
      return o.ISOWeek ? on(x) : wt(x, { locale: f, weekStartsOn: c });
    },
    endOfWeek: function(x) {
      return o.ISOWeek ? ou(x) : Wi(x, { locale: f, weekStartsOn: c });
    }
  }, m = p[n](e, r === "after" ? 1 : -1);
  r === "before" && u ? m = My([u, m]) : r === "after" && d && (m = Sy([d, m]));
  var v = !0;
  if (i) {
    var g = qi(m, i);
    v = !g.disabled && !g.hidden;
  }
  return v ? m : l.count > Fb ? l.lastFocused : wu(m, {
    moveBy: n,
    direction: r,
    context: o,
    modifiers: i,
    retry: X(X({}, l), { count: l.count + 1 })
  });
}
var yu = He(void 0);
function Ib(e) {
  var t = fr(), n = gu(), r = be(), o = r[0], i = r[1], s = be(), l = s[0], c = s[1], u = Eb(t.displayMonths, n), d = o ?? (l && t.isDateDisplayed(l)) ? l : u, f = function() {
    c(o), i(void 0);
  }, p = function(x) {
    i(x);
  }, m = he(), v = function(x, C) {
    if (o) {
      var y = wu(o, {
        moveBy: x,
        direction: C,
        context: m,
        modifiers: n
      });
      Le(o, y) || (t.goToDate(y, o), p(y));
    }
  }, g = {
    focusedDay: o,
    focusTarget: d,
    blur: f,
    focus: p,
    focusDayAfter: function() {
      return v("day", "after");
    },
    focusDayBefore: function() {
      return v("day", "before");
    },
    focusWeekAfter: function() {
      return v("week", "after");
    },
    focusWeekBefore: function() {
      return v("week", "before");
    },
    focusMonthBefore: function() {
      return v("month", "before");
    },
    focusMonthAfter: function() {
      return v("month", "after");
    },
    focusYearBefore: function() {
      return v("year", "before");
    },
    focusYearAfter: function() {
      return v("year", "after");
    },
    focusStartOfWeek: function() {
      return v("startOfWeek", "before");
    },
    focusEndOfWeek: function() {
      return v("endOfWeek", "after");
    }
  };
  return a(yu.Provider, { value: g, children: e.children });
}
function Xi() {
  var e = fe(yu);
  if (!e)
    throw new Error("useFocusContext must be used within a FocusProvider");
  return e;
}
function Ob(e, t) {
  var n = gu(), r = qi(e, n, t);
  return r;
}
var Zi = He(void 0);
function Vb(e) {
  if (!Ao(e.initialProps)) {
    var t = {
      selected: void 0
    };
    return a(Zi.Provider, { value: t, children: e.children });
  }
  return a(Bb, { initialProps: e.initialProps, children: e.children });
}
function Bb(e) {
  var t = e.initialProps, n = e.children, r = function(i, s, l) {
    var c, u, d;
    if ((c = t.onDayClick) === null || c === void 0 || c.call(t, i, s, l), s.selected && !t.required) {
      (u = t.onSelect) === null || u === void 0 || u.call(t, void 0, i, s, l);
      return;
    }
    (d = t.onSelect) === null || d === void 0 || d.call(t, i, i, s, l);
  }, o = {
    selected: t.selected,
    onDayClick: r
  };
  return a(Zi.Provider, { value: o, children: n });
}
function xu() {
  var e = fe(Zi);
  if (!e)
    throw new Error("useSelectSingle must be used within a SelectSingleProvider");
  return e;
}
function Lb(e, t) {
  var n = he(), r = xu(), o = ji(), i = Yi(), s = Xi(), l = s.focusDayAfter, c = s.focusDayBefore, u = s.focusWeekAfter, d = s.focusWeekBefore, f = s.blur, p = s.focus, m = s.focusMonthBefore, v = s.focusMonthAfter, g = s.focusYearBefore, x = s.focusYearAfter, C = s.focusStartOfWeek, y = s.focusEndOfWeek, M = function(I) {
    var O, W, ue, ge;
    Ao(n) ? (O = r.onDayClick) === null || O === void 0 || O.call(r, e, t, I) : ur(n) ? (W = o.onDayClick) === null || W === void 0 || W.call(o, e, t, I) : dr(n) ? (ue = i.onDayClick) === null || ue === void 0 || ue.call(i, e, t, I) : (ge = n.onDayClick) === null || ge === void 0 || ge.call(n, e, t, I);
  }, _ = function(I) {
    var O;
    p(e), (O = n.onDayFocus) === null || O === void 0 || O.call(n, e, t, I);
  }, P = function(I) {
    var O;
    f(), (O = n.onDayBlur) === null || O === void 0 || O.call(n, e, t, I);
  }, E = function(I) {
    var O;
    (O = n.onDayMouseEnter) === null || O === void 0 || O.call(n, e, t, I);
  }, L = function(I) {
    var O;
    (O = n.onDayMouseLeave) === null || O === void 0 || O.call(n, e, t, I);
  }, N = function(I) {
    var O;
    (O = n.onDayPointerEnter) === null || O === void 0 || O.call(n, e, t, I);
  }, k = function(I) {
    var O;
    (O = n.onDayPointerLeave) === null || O === void 0 || O.call(n, e, t, I);
  }, z = function(I) {
    var O;
    (O = n.onDayTouchCancel) === null || O === void 0 || O.call(n, e, t, I);
  }, Q = function(I) {
    var O;
    (O = n.onDayTouchEnd) === null || O === void 0 || O.call(n, e, t, I);
  }, H = function(I) {
    var O;
    (O = n.onDayTouchMove) === null || O === void 0 || O.call(n, e, t, I);
  }, q = function(I) {
    var O;
    (O = n.onDayTouchStart) === null || O === void 0 || O.call(n, e, t, I);
  }, J = function(I) {
    var O;
    (O = n.onDayKeyUp) === null || O === void 0 || O.call(n, e, t, I);
  }, G = function(I) {
    var O;
    switch (I.key) {
      case "ArrowLeft":
        I.preventDefault(), I.stopPropagation(), n.dir === "rtl" ? l() : c();
        break;
      case "ArrowRight":
        I.preventDefault(), I.stopPropagation(), n.dir === "rtl" ? c() : l();
        break;
      case "ArrowDown":
        I.preventDefault(), I.stopPropagation(), u();
        break;
      case "ArrowUp":
        I.preventDefault(), I.stopPropagation(), d();
        break;
      case "PageUp":
        I.preventDefault(), I.stopPropagation(), I.shiftKey ? g() : m();
        break;
      case "PageDown":
        I.preventDefault(), I.stopPropagation(), I.shiftKey ? x() : v();
        break;
      case "Home":
        I.preventDefault(), I.stopPropagation(), C();
        break;
      case "End":
        I.preventDefault(), I.stopPropagation(), y();
        break;
    }
    (O = n.onDayKeyDown) === null || O === void 0 || O.call(n, e, t, I);
  }, Z = {
    onClick: M,
    onFocus: _,
    onBlur: P,
    onKeyDown: G,
    onKeyUp: J,
    onMouseEnter: E,
    onMouseLeave: L,
    onPointerEnter: N,
    onPointerLeave: k,
    onTouchCancel: z,
    onTouchEnd: Q,
    onTouchMove: H,
    onTouchStart: q
  };
  return Z;
}
function $b() {
  var e = he(), t = xu(), n = ji(), r = Yi(), o = Ao(e) ? t.selected : ur(e) ? n.selected : dr(e) ? r.selected : void 0;
  return o;
}
function zb(e) {
  return Object.values(it).includes(e);
}
function Hb(e, t) {
  var n = [e.classNames.day];
  return Object.keys(t).forEach(function(r) {
    var o = e.modifiersClassNames[r];
    if (o)
      n.push(o);
    else if (zb(r)) {
      var i = e.classNames["day_".concat(r)];
      i && n.push(i);
    }
  }), n;
}
function Wb(e, t) {
  var n = X({}, e.styles.day);
  return Object.keys(t).forEach(function(r) {
    var o;
    n = X(X({}, n), (o = e.modifiersStyles) === null || o === void 0 ? void 0 : o[r]);
  }), n;
}
function Ub(e, t, n) {
  var r, o, i, s = he(), l = Xi(), c = Ob(e, t), u = Lb(e, c), d = $b(), f = !!(s.onDayClick || s.mode !== "default");
  We(function() {
    var E;
    c.outside || l.focusedDay && f && Le(l.focusedDay, e) && ((E = n.current) === null || E === void 0 || E.focus());
  }, [
    l.focusedDay,
    e,
    n,
    f,
    c.outside
  ]);
  var p = Hb(s, c).join(" "), m = Wb(s, c), v = !!(c.outside && !s.showOutsideDays || c.hidden), g = (i = (o = s.components) === null || o === void 0 ? void 0 : o.DayContent) !== null && i !== void 0 ? i : db, x = a(g, { date: e, displayMonth: t, activeModifiers: c }), C = {
    style: m,
    className: p,
    children: x,
    role: "gridcell"
  }, y = l.focusTarget && Le(l.focusTarget, e) && !c.outside, M = l.focusedDay && Le(l.focusedDay, e), _ = X(X(X({}, C), (r = { disabled: c.disabled, role: "gridcell" }, r["aria-selected"] = c.selected, r.tabIndex = M || y ? 0 : -1, r)), u), P = {
    isButton: f,
    isHidden: v,
    activeModifiers: c,
    selectedDays: d,
    buttonProps: _,
    divProps: C
  };
  return P;
}
function Gb(e) {
  var t = ze(null), n = Ub(e.date, e.displayMonth, t);
  return n.isHidden ? a("div", { role: "gridcell" }) : n.isButton ? a(Xr, X({ name: "day", ref: t }, n.buttonProps)) : a("div", X({}, n.divProps));
}
function jb(e) {
  var t = e.number, n = e.dates, r = he(), o = r.onWeekNumberClick, i = r.styles, s = r.classNames, l = r.locale, c = r.labels.labelWeekNumber, u = r.formatters.formatWeekNumber, d = u(Number(t), { locale: l });
  if (!o)
    return a("span", { className: s.weeknumber, style: i.weeknumber, children: d });
  var f = c(Number(t), { locale: l }), p = function(m) {
    o(t, n, m);
  };
  return a(Xr, { name: "week-number", "aria-label": f, className: s.weeknumber, style: i.weeknumber, onClick: p, children: d });
}
function Kb(e) {
  var t, n, r = he(), o = r.styles, i = r.classNames, s = r.showWeekNumber, l = r.components, c = (t = l == null ? void 0 : l.Day) !== null && t !== void 0 ? t : Gb, u = (n = l == null ? void 0 : l.WeekNumber) !== null && n !== void 0 ? n : jb, d;
  return s && (d = a("td", { className: i.cell, style: o.cell, children: a(u, { number: e.weekNumber, dates: e.dates }) })), b("tr", { className: i.row, style: o.row, children: [d, e.dates.map(function(f) {
    return a("td", { className: i.cell, style: o.cell, role: "presentation", children: a(c, { displayMonth: e.displayMonth, date: f }) }, Mx(f));
  })] });
}
function h0(e, t, n) {
  for (var r = n != null && n.ISOWeek ? ou(t) : Wi(t, n), o = n != null && n.ISOWeek ? on(e) : wt(e, n), i = ht(r, o), s = [], l = 0; l <= i; l++)
    s.push(Fe(o, l));
  var c = s.reduce(function(u, d) {
    var f = n != null && n.ISOWeek ? iu(d) : lu(d, n), p = u.find(function(m) {
      return m.weekNumber === f;
    });
    return p ? (p.dates.push(d), u) : (u.push({
      weekNumber: f,
      dates: [d]
    }), u);
  }, []);
  return c;
}
function Yb(e, t) {
  var n = h0($e(e), Hi(e), t);
  if (t != null && t.useFixedWeeks) {
    var r = Rx(e, t);
    if (r < 6) {
      var o = n[n.length - 1], i = o.dates[o.dates.length - 1], s = Ba(i, 6 - r), l = h0(Ba(i, 1), s, t);
      n.push.apply(n, l);
    }
  }
  return n;
}
function qb(e) {
  var t, n, r, o = he(), i = o.locale, s = o.classNames, l = o.styles, c = o.hideHead, u = o.fixedWeeks, d = o.components, f = o.weekStartsOn, p = o.firstWeekContainsDate, m = o.ISOWeek, v = Yb(e.displayMonth, {
    useFixedWeeks: !!u,
    ISOWeek: m,
    locale: i,
    weekStartsOn: f,
    firstWeekContainsDate: p
  }), g = (t = d == null ? void 0 : d.Head) !== null && t !== void 0 ? t : ub, x = (n = d == null ? void 0 : d.Row) !== null && n !== void 0 ? n : Kb, C = (r = d == null ? void 0 : d.Footer) !== null && r !== void 0 ? r : sb;
  return b("table", { id: e.id, className: s.table, style: l.table, role: "grid", "aria-labelledby": e["aria-labelledby"], children: [!c && a(g, {}), a("tbody", { className: s.tbody, style: l.tbody, children: v.map(function(y) {
    return a(x, { displayMonth: e.displayMonth, dates: y.dates, weekNumber: y.weekNumber }, y.weekNumber);
  }) }), a(C, { displayMonth: e.displayMonth })] });
}
function Xb() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
var Zb = Xb() ? X0 : We, ca = !1, Qb = 0;
function p0() {
  return "react-day-picker-".concat(++Qb);
}
function Jb(e) {
  var t, n = e ?? (ca ? p0() : null), r = be(n), o = r[0], i = r[1];
  return Zb(function() {
    o === null && i(p0());
  }, []), We(function() {
    ca === !1 && (ca = !0);
  }, []), (t = e ?? o) !== null && t !== void 0 ? t : void 0;
}
function eC(e) {
  var t, n, r = he(), o = r.dir, i = r.classNames, s = r.styles, l = r.components, c = fr().displayMonths, u = Jb(r.id ? "".concat(r.id, "-").concat(e.displayIndex) : void 0), d = r.id ? "".concat(r.id, "-grid-").concat(e.displayIndex) : void 0, f = [i.month], p = s.month, m = e.displayIndex === 0, v = e.displayIndex === c.length - 1, g = !m && !v;
  o === "rtl" && (t = [m, v], v = t[0], m = t[1]), m && (f.push(i.caption_start), p = X(X({}, p), s.caption_start)), v && (f.push(i.caption_end), p = X(X({}, p), s.caption_end)), g && (f.push(i.caption_between), p = X(X({}, p), s.caption_between));
  var x = (n = l == null ? void 0 : l.Caption) !== null && n !== void 0 ? n : ib;
  return b("div", { className: f.join(" "), style: p, children: [a(x, { id: u, displayMonth: e.displayMonth, displayIndex: e.displayIndex }), a(qb, { id: d, "aria-labelledby": u, displayMonth: e.displayMonth })] }, e.displayIndex);
}
function tC(e) {
  var t = he(), n = t.classNames, r = t.styles;
  return a("div", { className: n.months, style: r.months, children: e.children });
}
function nC(e) {
  var t, n, r = e.initialProps, o = he(), i = Xi(), s = fr(), l = be(!1), c = l[0], u = l[1];
  We(function() {
    o.initialFocus && i.focusTarget && (c || (i.focus(i.focusTarget), u(!0)));
  }, [
    o.initialFocus,
    c,
    i.focus,
    i.focusTarget,
    i
  ]);
  var d = [o.classNames.root, o.className];
  o.numberOfMonths > 1 && d.push(o.classNames.multiple_months), o.showWeekNumber && d.push(o.classNames.with_weeknumber);
  var f = X(X({}, o.styles.root), o.style), p = Object.keys(r).filter(function(v) {
    return v.startsWith("data-");
  }).reduce(function(v, g) {
    var x;
    return X(X({}, v), (x = {}, x[g] = r[g], x));
  }, {}), m = (n = (t = r.components) === null || t === void 0 ? void 0 : t.Months) !== null && n !== void 0 ? n : tC;
  return a("div", X({ className: d.join(" "), style: f, dir: o.dir, id: o.id, nonce: r.nonce, title: r.title, lang: r.lang }, p, { children: a(m, { children: s.displayMonths.map(function(v, g) {
    return a(eC, { displayIndex: g, displayMonth: v }, g);
  }) }) }));
}
function rC(e) {
  var t = e.children, n = Px(e, ["children"]);
  return a(jx, { initialProps: n, children: a(nb, { children: a(Vb, { initialProps: n, children: a(fb, { initialProps: n, children: a(mb, { initialProps: n, children: a(Mb, { children: a(Ib, { children: t }) }) }) }) }) }) });
}
function oC(e) {
  return a(rC, X({}, e, { children: a(nC, { initialProps: e }) }));
}
function aC({
  className: e,
  classNames: t,
  showOutsideDays: n = !0,
  ...r
}) {
  return /* @__PURE__ */ a(
    oC,
    {
      showOutsideDays: n,
      className: T("p-3", e),
      classNames: {
        months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
        month: "space-y-4",
        caption: "flex justify-center pt-1 relative items-center",
        caption_label: "text-sm font-medium",
        nav: "space-x-1 flex items-center",
        nav_button: T(
          Ls({ variant: "outline" }),
          "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100"
        ),
        nav_button_previous: "absolute left-1",
        nav_button_next: "absolute right-1",
        table: "w-full border-collapse space-y-1",
        head_row: "flex",
        head_cell: "text-f1-foreground-secondary rounded-xs w-9 font-normal text-[0.8rem]",
        row: "flex w-full mt-2",
        cell: "rounded-full h-9 w-9 text-center text-sm p-0 relative [&:has([aria-selected].day-outside)]:bg-f1-background-selected focus-within:relative focus-within:z-20 [&:has([aria-selected].day-range-middle)]:rounded-none first:[&:has([aria-selected].day-range-middle)]:rounded-l-lg last:[&:has([aria-selected].day-range-middle)]:rounded-r-lg [&:has([aria-selected].day-range-start)]:rounded-r-none [&:has([aria-selected].day-range-end)]:rounded-l-none first:[&:has([aria-selected].day-range-end)]:rounded-r-[24px] first:[&:has([aria-selected].day-range-end)]:rounded-l-md last:[&:has([aria-selected].day-range-start)]:rounded-l-[24px] last:[&:has([aria-selected].day-range-start)]:rounded-r-md [&:has([aria-selected].day-range-start.day-range-end)]:rounded-full",
        day: T(
          Ls({ variant: "ghost" }),
          "rounded-[inherit] h-9 w-9 p-0 font-normal aria-selected:opacity-100"
        ),
        day_range_start: "day-range-start",
        day_range_end: "day-range-end",
        day_selected: "bg-f1-background-selected-bold text-f1-foreground-inverse",
        day_today: "bg-f1-background-secondary text-f1-foreground",
        day_outside: "day-outside text-f1-foreground-secondary opacity-50 aria-selected:bg-f1-background-selected aria-selected:text-f1-foreground",
        day_disabled: "text-f1-foreground-secondary opacity-50",
        day_range_middle: "day-range-middle",
        day_hidden: "invisible",
        ...t
      },
      components: {
        IconLeft: () => /* @__PURE__ */ a(fy, { className: "h-4 w-4" }),
        IconRight: () => /* @__PURE__ */ a(Li, { className: "h-4 w-4" })
      },
      ...r
    }
  );
}
aC.displayName = "Calendar";
function hr(e) {
  const t = e + "CollectionProvider", [n, r] = Et(t), [o, i] = n(
    t,
    { collectionRef: { current: null }, itemMap: /* @__PURE__ */ new Map() }
  ), s = (m) => {
    const { scope: v, children: g } = m, x = ee.useRef(null), C = ee.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ a(o, { scope: v, itemMap: C, collectionRef: x, children: g });
  };
  s.displayName = t;
  const l = e + "CollectionSlot", c = ee.forwardRef(
    (m, v) => {
      const { scope: g, children: x } = m, C = i(l, g), y = te(v, C.collectionRef);
      return /* @__PURE__ */ a(Mn, { ref: y, children: x });
    }
  );
  c.displayName = l;
  const u = e + "CollectionItemSlot", d = "data-radix-collection-item", f = ee.forwardRef(
    (m, v) => {
      const { scope: g, children: x, ...C } = m, y = ee.useRef(null), M = te(v, y), _ = i(u, g);
      return ee.useEffect(() => (_.itemMap.set(y, { ref: y, ...C }), () => void _.itemMap.delete(y))), /* @__PURE__ */ a(Mn, { [d]: "", ref: M, children: x });
    }
  );
  f.displayName = u;
  function p(m) {
    const v = i(e + "CollectionConsumer", m);
    return ee.useCallback(() => {
      const x = v.collectionRef.current;
      if (!x) return [];
      const C = Array.from(x.querySelectorAll(`[${d}]`));
      return Array.from(v.itemMap.values()).sort(
        (_, P) => C.indexOf(_.ref.current) - C.indexOf(P.ref.current)
      );
    }, [v.collectionRef, v.itemMap]);
  }
  return [
    { Provider: s, Slot: c, ItemSlot: f },
    p,
    r
  ];
}
var ua = 0;
function Qi() {
  h.useEffect(() => {
    const e = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", e[0] ?? m0()), document.body.insertAdjacentElement("beforeend", e[1] ?? m0()), ua++, () => {
      ua === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((t) => t.remove()), ua--;
    };
  }, []);
}
function m0() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.cssText = "outline: none; opacity: 0; position: fixed; pointer-events: none", e;
}
var da = "focusScope.autoFocusOnMount", fa = "focusScope.autoFocusOnUnmount", v0 = { bubbles: !1, cancelable: !0 }, iC = "FocusScope", To = h.forwardRef((e, t) => {
  const {
    loop: n = !1,
    trapped: r = !1,
    onMountAutoFocus: o,
    onUnmountAutoFocus: i,
    ...s
  } = e, [l, c] = h.useState(null), u = xe(o), d = xe(i), f = h.useRef(null), p = te(t, (g) => c(g)), m = h.useRef({
    paused: !1,
    pause() {
      this.paused = !0;
    },
    resume() {
      this.paused = !1;
    }
  }).current;
  h.useEffect(() => {
    if (r) {
      let g = function(M) {
        if (m.paused || !l) return;
        const _ = M.target;
        l.contains(_) ? f.current = _ : Bt(f.current, { select: !0 });
      }, x = function(M) {
        if (m.paused || !l) return;
        const _ = M.relatedTarget;
        _ !== null && (l.contains(_) || Bt(f.current, { select: !0 }));
      }, C = function(M) {
        if (document.activeElement === document.body)
          for (const P of M)
            P.removedNodes.length > 0 && Bt(l);
      };
      document.addEventListener("focusin", g), document.addEventListener("focusout", x);
      const y = new MutationObserver(C);
      return l && y.observe(l, { childList: !0, subtree: !0 }), () => {
        document.removeEventListener("focusin", g), document.removeEventListener("focusout", x), y.disconnect();
      };
    }
  }, [r, l, m.paused]), h.useEffect(() => {
    if (l) {
      w0.add(m);
      const g = document.activeElement;
      if (!l.contains(g)) {
        const C = new CustomEvent(da, v0);
        l.addEventListener(da, u), l.dispatchEvent(C), C.defaultPrevented || (sC(fC(bu(l)), { select: !0 }), document.activeElement === g && Bt(l));
      }
      return () => {
        l.removeEventListener(da, u), setTimeout(() => {
          const C = new CustomEvent(fa, v0);
          l.addEventListener(fa, d), l.dispatchEvent(C), C.defaultPrevented || Bt(g ?? document.body, { select: !0 }), l.removeEventListener(fa, d), w0.remove(m);
        }, 0);
      };
    }
  }, [l, u, d, m]);
  const v = h.useCallback(
    (g) => {
      if (!n && !r || m.paused) return;
      const x = g.key === "Tab" && !g.altKey && !g.ctrlKey && !g.metaKey, C = document.activeElement;
      if (x && C) {
        const y = g.currentTarget, [M, _] = lC(y);
        M && _ ? !g.shiftKey && C === _ ? (g.preventDefault(), n && Bt(M, { select: !0 })) : g.shiftKey && C === M && (g.preventDefault(), n && Bt(_, { select: !0 })) : C === y && g.preventDefault();
      }
    },
    [n, r, m.paused]
  );
  return /* @__PURE__ */ a(Y.div, { tabIndex: -1, ...s, ref: p, onKeyDown: v });
});
To.displayName = iC;
function sC(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const r of e)
    if (Bt(r, { select: t }), document.activeElement !== n) return;
}
function lC(e) {
  const t = bu(e), n = g0(t, e), r = g0(t.reverse(), e);
  return [n, r];
}
function bu(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => {
      const o = r.tagName === "INPUT" && r.type === "hidden";
      return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function g0(e, t) {
  for (const n of e)
    if (!cC(n, { upTo: t })) return n;
}
function cC(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
function uC(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function Bt(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== n && uC(e) && t && e.select();
  }
}
var w0 = dC();
function dC() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && (n == null || n.pause()), e = y0(e, t), e.unshift(t);
    },
    remove(t) {
      var n;
      e = y0(e, t), (n = e[0]) == null || n.resume();
    }
  };
}
function y0(e, t) {
  const n = [...e], r = n.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
function fC(e) {
  return e.filter((t) => t.tagName !== "A");
}
function Cu(e) {
  const t = h.useRef({ value: e, previous: e });
  return h.useMemo(() => (t.current.value !== e && (t.current.previous = t.current.value, t.current.value = e), t.current.previous), [e]);
}
var hC = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, fn = /* @__PURE__ */ new WeakMap(), _r = /* @__PURE__ */ new WeakMap(), Pr = {}, ha = 0, Mu = function(e) {
  return e && (e.host || Mu(e.parentNode));
}, pC = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var r = Mu(n);
    return r && e.contains(r) ? r : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return !!n;
  });
}, mC = function(e, t, n, r) {
  var o = pC(t, Array.isArray(e) ? e : [e]);
  Pr[n] || (Pr[n] = /* @__PURE__ */ new WeakMap());
  var i = Pr[n], s = [], l = /* @__PURE__ */ new Set(), c = new Set(o), u = function(f) {
    !f || l.has(f) || (l.add(f), u(f.parentNode));
  };
  o.forEach(u);
  var d = function(f) {
    !f || c.has(f) || Array.prototype.forEach.call(f.children, function(p) {
      if (l.has(p))
        d(p);
      else
        try {
          var m = p.getAttribute(r), v = m !== null && m !== "false", g = (fn.get(p) || 0) + 1, x = (i.get(p) || 0) + 1;
          fn.set(p, g), i.set(p, x), s.push(p), g === 1 && v && _r.set(p, !0), x === 1 && p.setAttribute(n, "true"), v || p.setAttribute(r, "true");
        } catch (C) {
          console.error("aria-hidden: cannot operate on ", p, C);
        }
    });
  };
  return d(t), l.clear(), ha++, function() {
    s.forEach(function(f) {
      var p = fn.get(f) - 1, m = i.get(f) - 1;
      fn.set(f, p), i.set(f, m), p || (_r.has(f) || f.removeAttribute(r), _r.delete(f)), m || f.removeAttribute(n);
    }), ha--, ha || (fn = /* @__PURE__ */ new WeakMap(), fn = /* @__PURE__ */ new WeakMap(), _r = /* @__PURE__ */ new WeakMap(), Pr = {});
  };
}, Ji = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var r = Array.from(Array.isArray(e) ? e : [e]), o = hC(e);
  return o ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live]"))), mC(r, o, n, "aria-hidden")) : function() {
    return null;
  };
}, ft = function() {
  return ft = Object.assign || function(t) {
    for (var n, r = 1, o = arguments.length; r < o; r++) {
      n = arguments[r];
      for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
    }
    return t;
  }, ft.apply(this, arguments);
};
function Su(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
}
function vC(e, t, n) {
  if (n || arguments.length === 2) for (var r = 0, o = t.length, i; r < o; r++)
    (i || !(r in t)) && (i || (i = Array.prototype.slice.call(t, 0, r)), i[r] = t[r]);
  return e.concat(i || Array.prototype.slice.call(t));
}
var Or = "right-scroll-bar-position", Vr = "width-before-scroll-bar", gC = "with-scroll-bars-hidden", wC = "--removed-body-scroll-bar-size";
function pa(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function yC(e, t) {
  var n = be(function() {
    return {
      // value
      value: e,
      // last callback
      callback: t,
      // "memoized" public interface
      facade: {
        get current() {
          return n.value;
        },
        set current(r) {
          var o = n.value;
          o !== r && (n.value = r, n.callback(r, o));
        }
      }
    };
  })[0];
  return n.callback = t, n.facade;
}
var xC = typeof window < "u" ? h.useLayoutEffect : h.useEffect, x0 = /* @__PURE__ */ new WeakMap();
function bC(e, t) {
  var n = yC(null, function(r) {
    return e.forEach(function(o) {
      return pa(o, r);
    });
  });
  return xC(function() {
    var r = x0.get(n);
    if (r) {
      var o = new Set(r), i = new Set(e), s = n.current;
      o.forEach(function(l) {
        i.has(l) || pa(l, null);
      }), i.forEach(function(l) {
        o.has(l) || pa(l, s);
      });
    }
    x0.set(n, e);
  }, [e]), n;
}
function CC(e) {
  return e;
}
function MC(e, t) {
  t === void 0 && (t = CC);
  var n = [], r = !1, o = {
    read: function() {
      if (r)
        throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
      return n.length ? n[n.length - 1] : e;
    },
    useMedium: function(i) {
      var s = t(i, r);
      return n.push(s), function() {
        n = n.filter(function(l) {
          return l !== s;
        });
      };
    },
    assignSyncMedium: function(i) {
      for (r = !0; n.length; ) {
        var s = n;
        n = [], s.forEach(i);
      }
      n = {
        push: function(l) {
          return i(l);
        },
        filter: function() {
          return n;
        }
      };
    },
    assignMedium: function(i) {
      r = !0;
      var s = [];
      if (n.length) {
        var l = n;
        n = [], l.forEach(i), s = n;
      }
      var c = function() {
        var d = s;
        s = [], d.forEach(i);
      }, u = function() {
        return Promise.resolve().then(c);
      };
      u(), n = {
        push: function(d) {
          s.push(d), u();
        },
        filter: function(d) {
          return s = s.filter(d), n;
        }
      };
    }
  };
  return o;
}
function SC(e) {
  e === void 0 && (e = {});
  var t = MC(null);
  return t.options = ft({ async: !0, ssr: !1 }, e), t;
}
var Ru = function(e) {
  var t = e.sideCar, n = Su(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var r = t.read();
  if (!r)
    throw new Error("Sidecar medium not found");
  return h.createElement(r, ft({}, n));
};
Ru.isSideCarExport = !0;
function RC(e, t) {
  return e.useMedium(t), Ru;
}
var _u = SC(), ma = function() {
}, No = h.forwardRef(function(e, t) {
  var n = h.useRef(null), r = h.useState({
    onScrollCapture: ma,
    onWheelCapture: ma,
    onTouchMoveCapture: ma
  }), o = r[0], i = r[1], s = e.forwardProps, l = e.children, c = e.className, u = e.removeScrollBar, d = e.enabled, f = e.shards, p = e.sideCar, m = e.noIsolation, v = e.inert, g = e.allowPinchZoom, x = e.as, C = x === void 0 ? "div" : x, y = e.gapMode, M = Su(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), _ = p, P = bC([n, t]), E = ft(ft({}, M), o);
  return h.createElement(
    h.Fragment,
    null,
    d && h.createElement(_, { sideCar: _u, removeScrollBar: u, shards: f, noIsolation: m, inert: v, setCallbacks: i, allowPinchZoom: !!g, lockRef: n, gapMode: y }),
    s ? h.cloneElement(h.Children.only(l), ft(ft({}, E), { ref: P })) : h.createElement(C, ft({}, E, { className: c, ref: P }), l)
  );
});
No.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
No.classNames = {
  fullWidth: Vr,
  zeroRight: Or
};
var _C = function() {
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function PC() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = _C();
  return t && e.setAttribute("nonce", t), e;
}
function AC(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function TC(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var NC = function() {
  var e = 0, t = null;
  return {
    add: function(n) {
      e == 0 && (t = PC()) && (AC(t, n), TC(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, DC = function() {
  var e = NC();
  return function(t, n) {
    h.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && n]);
  };
}, Pu = function() {
  var e = DC(), t = function(n) {
    var r = n.styles, o = n.dynamic;
    return e(r, o), null;
  };
  return t;
}, kC = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, va = function(e) {
  return parseInt(e || "", 10) || 0;
}, EC = function(e) {
  var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], r = t[e === "padding" ? "paddingTop" : "marginTop"], o = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [va(n), va(r), va(o)];
}, FC = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return kC;
  var t = EC(e), n = document.documentElement.clientWidth, r = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, r - n + t[2] - t[0])
  };
}, IC = Pu(), Cn = "data-scroll-locked", OC = function(e, t, n, r) {
  var o = e.left, i = e.top, s = e.right, l = e.gap;
  return n === void 0 && (n = "margin"), `
  .`.concat(gC, ` {
   overflow: hidden `).concat(r, `;
   padding-right: `).concat(l, "px ").concat(r, `;
  }
  body[`).concat(Cn, `] {
    overflow: hidden `).concat(r, `;
    overscroll-behavior: contain;
    `).concat([
    t && "position: relative ".concat(r, ";"),
    n === "margin" && `
    padding-left: `.concat(o, `px;
    padding-top: `).concat(i, `px;
    padding-right: `).concat(s, `px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(l, "px ").concat(r, `;
    `),
    n === "padding" && "padding-right: ".concat(l, "px ").concat(r, ";")
  ].filter(Boolean).join(""), `
  }
  
  .`).concat(Or, ` {
    right: `).concat(l, "px ").concat(r, `;
  }
  
  .`).concat(Vr, ` {
    margin-right: `).concat(l, "px ").concat(r, `;
  }
  
  .`).concat(Or, " .").concat(Or, ` {
    right: 0 `).concat(r, `;
  }
  
  .`).concat(Vr, " .").concat(Vr, ` {
    margin-right: 0 `).concat(r, `;
  }
  
  body[`).concat(Cn, `] {
    `).concat(wC, ": ").concat(l, `px;
  }
`);
}, b0 = function() {
  var e = parseInt(document.body.getAttribute(Cn) || "0", 10);
  return isFinite(e) ? e : 0;
}, VC = function() {
  h.useEffect(function() {
    return document.body.setAttribute(Cn, (b0() + 1).toString()), function() {
      var e = b0() - 1;
      e <= 0 ? document.body.removeAttribute(Cn) : document.body.setAttribute(Cn, e.toString());
    };
  }, []);
}, BC = function(e) {
  var t = e.noRelative, n = e.noImportant, r = e.gapMode, o = r === void 0 ? "margin" : r;
  VC();
  var i = h.useMemo(function() {
    return FC(o);
  }, [o]);
  return h.createElement(IC, { styles: OC(i, !t, o, n ? "" : "!important") });
}, $a = !1;
if (typeof window < "u")
  try {
    var Ar = Object.defineProperty({}, "passive", {
      get: function() {
        return $a = !0, !0;
      }
    });
    window.addEventListener("test", Ar, Ar), window.removeEventListener("test", Ar, Ar);
  } catch {
    $a = !1;
  }
var hn = $a ? { passive: !1 } : !1, LC = function(e) {
  return e.tagName === "TEXTAREA";
}, Au = function(e, t) {
  var n = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    n[t] !== "hidden" && // contains scroll inside self
    !(n.overflowY === n.overflowX && !LC(e) && n[t] === "visible")
  );
}, $C = function(e) {
  return Au(e, "overflowY");
}, zC = function(e) {
  return Au(e, "overflowX");
}, C0 = function(e, t) {
  var n = t.ownerDocument, r = t;
  do {
    typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host);
    var o = Tu(e, r);
    if (o) {
      var i = Nu(e, r), s = i[1], l = i[2];
      if (s > l)
        return !0;
    }
    r = r.parentNode;
  } while (r && r !== n.body);
  return !1;
}, HC = function(e) {
  var t = e.scrollTop, n = e.scrollHeight, r = e.clientHeight;
  return [
    t,
    n,
    r
  ];
}, WC = function(e) {
  var t = e.scrollLeft, n = e.scrollWidth, r = e.clientWidth;
  return [
    t,
    n,
    r
  ];
}, Tu = function(e, t) {
  return e === "v" ? $C(t) : zC(t);
}, Nu = function(e, t) {
  return e === "v" ? HC(t) : WC(t);
}, UC = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, GC = function(e, t, n, r, o) {
  var i = UC(e, window.getComputedStyle(t).direction), s = i * r, l = n.target, c = t.contains(l), u = !1, d = s > 0, f = 0, p = 0;
  do {
    var m = Nu(e, l), v = m[0], g = m[1], x = m[2], C = g - x - i * v;
    (v || C) && Tu(e, l) && (f += C, p += v), l instanceof ShadowRoot ? l = l.host : l = l.parentNode;
  } while (
    // portaled content
    !c && l !== document.body || // self content
    c && (t.contains(l) || t === l)
  );
  return (d && (Math.abs(f) < 1 || !o) || !d && (Math.abs(p) < 1 || !o)) && (u = !0), u;
}, Tr = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, M0 = function(e) {
  return [e.deltaX, e.deltaY];
}, S0 = function(e) {
  return e && "current" in e ? e.current : e;
}, jC = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, KC = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, YC = 0, pn = [];
function qC(e) {
  var t = h.useRef([]), n = h.useRef([0, 0]), r = h.useRef(), o = h.useState(YC++)[0], i = h.useState(Pu)[0], s = h.useRef(e);
  h.useEffect(function() {
    s.current = e;
  }, [e]), h.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(o));
      var g = vC([e.lockRef.current], (e.shards || []).map(S0), !0).filter(Boolean);
      return g.forEach(function(x) {
        return x.classList.add("allow-interactivity-".concat(o));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(o)), g.forEach(function(x) {
          return x.classList.remove("allow-interactivity-".concat(o));
        });
      };
    }
  }, [e.inert, e.lockRef.current, e.shards]);
  var l = h.useCallback(function(g, x) {
    if ("touches" in g && g.touches.length === 2)
      return !s.current.allowPinchZoom;
    var C = Tr(g), y = n.current, M = "deltaX" in g ? g.deltaX : y[0] - C[0], _ = "deltaY" in g ? g.deltaY : y[1] - C[1], P, E = g.target, L = Math.abs(M) > Math.abs(_) ? "h" : "v";
    if ("touches" in g && L === "h" && E.type === "range")
      return !1;
    var N = C0(L, E);
    if (!N)
      return !0;
    if (N ? P = L : (P = L === "v" ? "h" : "v", N = C0(L, E)), !N)
      return !1;
    if (!r.current && "changedTouches" in g && (M || _) && (r.current = P), !P)
      return !0;
    var k = r.current || P;
    return GC(k, x, g, k === "h" ? M : _, !0);
  }, []), c = h.useCallback(function(g) {
    var x = g;
    if (!(!pn.length || pn[pn.length - 1] !== i)) {
      var C = "deltaY" in x ? M0(x) : Tr(x), y = t.current.filter(function(P) {
        return P.name === x.type && (P.target === x.target || x.target === P.shadowParent) && jC(P.delta, C);
      })[0];
      if (y && y.should) {
        x.cancelable && x.preventDefault();
        return;
      }
      if (!y) {
        var M = (s.current.shards || []).map(S0).filter(Boolean).filter(function(P) {
          return P.contains(x.target);
        }), _ = M.length > 0 ? l(x, M[0]) : !s.current.noIsolation;
        _ && x.cancelable && x.preventDefault();
      }
    }
  }, []), u = h.useCallback(function(g, x, C, y) {
    var M = { name: g, delta: x, target: C, should: y, shadowParent: XC(C) };
    t.current.push(M), setTimeout(function() {
      t.current = t.current.filter(function(_) {
        return _ !== M;
      });
    }, 1);
  }, []), d = h.useCallback(function(g) {
    n.current = Tr(g), r.current = void 0;
  }, []), f = h.useCallback(function(g) {
    u(g.type, M0(g), g.target, l(g, e.lockRef.current));
  }, []), p = h.useCallback(function(g) {
    u(g.type, Tr(g), g.target, l(g, e.lockRef.current));
  }, []);
  h.useEffect(function() {
    return pn.push(i), e.setCallbacks({
      onScrollCapture: f,
      onWheelCapture: f,
      onTouchMoveCapture: p
    }), document.addEventListener("wheel", c, hn), document.addEventListener("touchmove", c, hn), document.addEventListener("touchstart", d, hn), function() {
      pn = pn.filter(function(g) {
        return g !== i;
      }), document.removeEventListener("wheel", c, hn), document.removeEventListener("touchmove", c, hn), document.removeEventListener("touchstart", d, hn);
    };
  }, []);
  var m = e.removeScrollBar, v = e.inert;
  return h.createElement(
    h.Fragment,
    null,
    v ? h.createElement(i, { styles: KC(o) }) : null,
    m ? h.createElement(BC, { gapMode: e.gapMode }) : null
  );
}
function XC(e) {
  for (var t = null; e !== null; )
    e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
  return t;
}
const ZC = RC(_u, qC);
var Do = h.forwardRef(function(e, t) {
  return h.createElement(No, ft({}, e, { ref: t, sideCar: ZC }));
});
Do.classNames = No.classNames;
var QC = [" ", "Enter", "ArrowUp", "ArrowDown"], JC = [" ", "Enter"], pr = "Select", [ko, Eo, eM] = hr(pr), [En, hA] = Et(pr, [
  eM,
  co
]), Fo = co(), [tM, jt] = En(pr), [nM, rM] = En(pr), Du = (e) => {
  const {
    __scopeSelect: t,
    children: n,
    open: r,
    defaultOpen: o,
    onOpenChange: i,
    value: s,
    defaultValue: l,
    onValueChange: c,
    dir: u,
    name: d,
    autoComplete: f,
    disabled: p,
    required: m
  } = e, v = Fo(t), [g, x] = h.useState(null), [C, y] = h.useState(null), [M, _] = h.useState(!1), P = kn(u), [E = !1, L] = ot({
    prop: r,
    defaultProp: o,
    onChange: i
  }), [N, k] = ot({
    prop: s,
    defaultProp: l,
    onChange: c
  }), z = h.useRef(null), Q = g ? !!g.closest("form") : !0, [H, q] = h.useState(/* @__PURE__ */ new Set()), J = Array.from(H).map((G) => G.props.value).join(";");
  return /* @__PURE__ */ a(q0, { ...v, children: /* @__PURE__ */ b(
    tM,
    {
      required: m,
      scope: t,
      trigger: g,
      onTriggerChange: x,
      valueNode: C,
      onValueNodeChange: y,
      valueNodeHasChildren: M,
      onValueNodeHasChildrenChange: _,
      contentId: Qe(),
      value: N,
      onValueChange: k,
      open: E,
      onOpenChange: L,
      dir: P,
      triggerPointerDownPosRef: z,
      disabled: p,
      children: [
        /* @__PURE__ */ a(ko.Provider, { scope: t, children: /* @__PURE__ */ a(
          nM,
          {
            scope: e.__scopeSelect,
            onNativeOptionAdd: h.useCallback((G) => {
              q((Z) => new Set(Z).add(G));
            }, []),
            onNativeOptionRemove: h.useCallback((G) => {
              q((Z) => {
                const I = new Set(Z);
                return I.delete(G), I;
              });
            }, []),
            children: n
          }
        ) }),
        Q ? /* @__PURE__ */ b(
          td,
          {
            "aria-hidden": !0,
            required: m,
            tabIndex: -1,
            name: d,
            autoComplete: f,
            value: N,
            onChange: (G) => k(G.target.value),
            disabled: p,
            children: [
              N === void 0 ? /* @__PURE__ */ a("option", { value: "" }) : null,
              Array.from(H)
            ]
          },
          J
        ) : null
      ]
    }
  ) });
};
Du.displayName = pr;
var ku = "SelectTrigger", Eu = h.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, disabled: r = !1, ...o } = e, i = Fo(n), s = jt(ku, n), l = s.disabled || r, c = te(t, s.onTriggerChange), u = Eo(n), [d, f, p] = nd((v) => {
      const g = u().filter((y) => !y.disabled), x = g.find((y) => y.value === s.value), C = rd(g, v, x);
      C !== void 0 && s.onValueChange(C.value);
    }), m = () => {
      l || (s.onOpenChange(!0), p());
    };
    return /* @__PURE__ */ a(j0, { asChild: !0, ...i, children: /* @__PURE__ */ a(
      Y.button,
      {
        type: "button",
        role: "combobox",
        "aria-controls": s.contentId,
        "aria-expanded": s.open,
        "aria-required": s.required,
        "aria-autocomplete": "none",
        dir: s.dir,
        "data-state": s.open ? "open" : "closed",
        disabled: l,
        "data-disabled": l ? "" : void 0,
        "data-placeholder": ed(s.value) ? "" : void 0,
        ...o,
        ref: c,
        onClick: V(o.onClick, (v) => {
          v.currentTarget.focus();
        }),
        onPointerDown: V(o.onPointerDown, (v) => {
          const g = v.target;
          g.hasPointerCapture(v.pointerId) && g.releasePointerCapture(v.pointerId), v.button === 0 && v.ctrlKey === !1 && (m(), s.triggerPointerDownPosRef.current = {
            x: Math.round(v.pageX),
            y: Math.round(v.pageY)
          }, v.preventDefault());
        }),
        onKeyDown: V(o.onKeyDown, (v) => {
          const g = d.current !== "";
          !(v.ctrlKey || v.altKey || v.metaKey) && v.key.length === 1 && f(v.key), !(g && v.key === " ") && QC.includes(v.key) && (m(), v.preventDefault());
        })
      }
    ) });
  }
);
Eu.displayName = ku;
var Fu = "SelectValue", Iu = h.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, className: r, style: o, children: i, placeholder: s = "", ...l } = e, c = jt(Fu, n), { onValueNodeHasChildrenChange: u } = c, d = i !== void 0, f = te(t, c.onValueNodeChange);
    return Ne(() => {
      u(d);
    }, [u, d]), /* @__PURE__ */ a(
      Y.span,
      {
        ...l,
        ref: f,
        style: { pointerEvents: "none" },
        children: ed(c.value) ? /* @__PURE__ */ a(me, { children: s }) : i
      }
    );
  }
);
Iu.displayName = Fu;
var oM = "SelectIcon", aM = h.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, children: r, ...o } = e;
    return /* @__PURE__ */ a(Y.span, { "aria-hidden": !0, ...o, ref: t, children: r || "▼" });
  }
);
aM.displayName = oM;
var iM = "SelectPortal", Ou = (e) => /* @__PURE__ */ a(ho, { asChild: !0, ...e });
Ou.displayName = iM;
var an = "SelectContent", Vu = h.forwardRef(
  (e, t) => {
    const n = jt(an, e.__scopeSelect), [r, o] = h.useState();
    if (Ne(() => {
      o(new DocumentFragment());
    }, []), !n.open) {
      const i = r;
      return i ? J0.createPortal(
        /* @__PURE__ */ a(Bu, { scope: e.__scopeSelect, children: /* @__PURE__ */ a(ko.Slot, { scope: e.__scopeSelect, children: /* @__PURE__ */ a("div", { children: e.children }) }) }),
        i
      ) : null;
    }
    return /* @__PURE__ */ a(Lu, { ...e, ref: t });
  }
);
Vu.displayName = an;
var St = 10, [Bu, Kt] = En(an), sM = "SelectContentImpl", Lu = h.forwardRef(
  (e, t) => {
    const {
      __scopeSelect: n,
      position: r = "item-aligned",
      onCloseAutoFocus: o,
      onEscapeKeyDown: i,
      onPointerDownOutside: s,
      //
      // PopperContent props
      side: l,
      sideOffset: c,
      align: u,
      alignOffset: d,
      arrowPadding: f,
      collisionBoundary: p,
      collisionPadding: m,
      sticky: v,
      hideWhenDetached: g,
      avoidCollisions: x,
      //
      ...C
    } = e, y = jt(an, n), [M, _] = h.useState(null), [P, E] = h.useState(null), L = te(t, (j) => _(j)), [N, k] = h.useState(null), [z, Q] = h.useState(
      null
    ), H = Eo(n), [q, J] = h.useState(!1), G = h.useRef(!1);
    h.useEffect(() => {
      if (M) return Ji(M);
    }, [M]), Qi();
    const Z = h.useCallback(
      (j) => {
        const [ae, ...de] = H().map((ce) => ce.ref.current), [se] = de.slice(-1), le = document.activeElement;
        for (const ce of j)
          if (ce === le || (ce == null || ce.scrollIntoView({ block: "nearest" }), ce === ae && P && (P.scrollTop = 0), ce === se && P && (P.scrollTop = P.scrollHeight), ce == null || ce.focus(), document.activeElement !== le)) return;
      },
      [H, P]
    ), I = h.useCallback(
      () => Z([N, M]),
      [Z, N, M]
    );
    h.useEffect(() => {
      q && I();
    }, [q, I]);
    const { onOpenChange: O, triggerPointerDownPosRef: W } = y;
    h.useEffect(() => {
      if (M) {
        let j = { x: 0, y: 0 };
        const ae = (se) => {
          var le, ce;
          j = {
            x: Math.abs(Math.round(se.pageX) - (((le = W.current) == null ? void 0 : le.x) ?? 0)),
            y: Math.abs(Math.round(se.pageY) - (((ce = W.current) == null ? void 0 : ce.y) ?? 0))
          };
        }, de = (se) => {
          j.x <= 10 && j.y <= 10 ? se.preventDefault() : M.contains(se.target) || O(!1), document.removeEventListener("pointermove", ae), W.current = null;
        };
        return W.current !== null && (document.addEventListener("pointermove", ae), document.addEventListener("pointerup", de, { capture: !0, once: !0 })), () => {
          document.removeEventListener("pointermove", ae), document.removeEventListener("pointerup", de, { capture: !0 });
        };
      }
    }, [M, O, W]), h.useEffect(() => {
      const j = () => O(!1);
      return window.addEventListener("blur", j), window.addEventListener("resize", j), () => {
        window.removeEventListener("blur", j), window.removeEventListener("resize", j);
      };
    }, [O]);
    const [ue, ge] = nd((j) => {
      const ae = H().filter((le) => !le.disabled), de = ae.find((le) => le.ref.current === document.activeElement), se = rd(ae, j, de);
      se && setTimeout(() => se.ref.current.focus());
    }), ke = h.useCallback(
      (j, ae, de) => {
        const se = !G.current && !de;
        (y.value !== void 0 && y.value === ae || se) && (k(j), se && (G.current = !0));
      },
      [y.value]
    ), xt = h.useCallback(() => M == null ? void 0 : M.focus(), [M]), Ue = h.useCallback(
      (j, ae, de) => {
        const se = !G.current && !de;
        (y.value !== void 0 && y.value === ae || se) && Q(j);
      },
      [y.value]
    ), bt = r === "popper" ? za : $u, Ee = bt === za ? {
      side: l,
      sideOffset: c,
      align: u,
      alignOffset: d,
      arrowPadding: f,
      collisionBoundary: p,
      collisionPadding: m,
      sticky: v,
      hideWhenDetached: g,
      avoidCollisions: x
    } : {};
    return /* @__PURE__ */ a(
      Bu,
      {
        scope: n,
        content: M,
        viewport: P,
        onViewportChange: E,
        itemRefCallback: ke,
        selectedItem: N,
        onItemLeave: xt,
        itemTextRefCallback: Ue,
        focusSelectedItem: I,
        selectedItemText: z,
        position: r,
        isPositioned: q,
        searchRef: ue,
        children: /* @__PURE__ */ a(Do, { as: Mn, allowPinchZoom: !0, children: /* @__PURE__ */ a(
          To,
          {
            asChild: !0,
            trapped: y.open,
            onMountAutoFocus: (j) => {
              j.preventDefault();
            },
            onUnmountAutoFocus: V(o, (j) => {
              var ae;
              (ae = y.trigger) == null || ae.focus({ preventScroll: !0 }), j.preventDefault();
            }),
            children: /* @__PURE__ */ a(
              uo,
              {
                asChild: !0,
                disableOutsidePointerEvents: !0,
                onEscapeKeyDown: i,
                onPointerDownOutside: s,
                onFocusOutside: (j) => j.preventDefault(),
                onDismiss: () => y.onOpenChange(!1),
                children: /* @__PURE__ */ a(
                  bt,
                  {
                    role: "listbox",
                    id: y.contentId,
                    "data-state": y.open ? "open" : "closed",
                    dir: y.dir,
                    onContextMenu: (j) => j.preventDefault(),
                    ...C,
                    ...Ee,
                    onPlaced: () => J(!0),
                    ref: L,
                    style: {
                      // flex layout so we can place the scroll buttons properly
                      display: "flex",
                      flexDirection: "column",
                      // reset the outline by default as the content MAY get focused
                      outline: "none",
                      ...C.style
                    },
                    onKeyDown: V(C.onKeyDown, (j) => {
                      const ae = j.ctrlKey || j.altKey || j.metaKey;
                      if (j.key === "Tab" && j.preventDefault(), !ae && j.key.length === 1 && ge(j.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes(j.key)) {
                        let se = H().filter((le) => !le.disabled).map((le) => le.ref.current);
                        if (["ArrowUp", "End"].includes(j.key) && (se = se.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(j.key)) {
                          const le = j.target, ce = se.indexOf(le);
                          se = se.slice(ce + 1);
                        }
                        setTimeout(() => Z(se)), j.preventDefault();
                      }
                    })
                  }
                )
              }
            )
          }
        ) })
      }
    );
  }
);
Lu.displayName = sM;
var lM = "SelectItemAlignedPosition", $u = h.forwardRef((e, t) => {
  const { __scopeSelect: n, onPlaced: r, ...o } = e, i = jt(an, n), s = Kt(an, n), [l, c] = h.useState(null), [u, d] = h.useState(null), f = te(t, (L) => d(L)), p = Eo(n), m = h.useRef(!1), v = h.useRef(!0), { viewport: g, selectedItem: x, selectedItemText: C, focusSelectedItem: y } = s, M = h.useCallback(() => {
    if (i.trigger && i.valueNode && l && u && g && x && C) {
      const L = i.trigger.getBoundingClientRect(), N = u.getBoundingClientRect(), k = i.valueNode.getBoundingClientRect(), z = C.getBoundingClientRect();
      if (i.dir !== "rtl") {
        const le = z.left - N.left, ce = k.left - le, ct = L.left - ce, ut = L.width + ct, wr = Math.max(ut, N.width), yr = window.innerWidth - St, xr = Oa(ce, [St, yr - wr]);
        l.style.minWidth = ut + "px", l.style.left = xr + "px";
      } else {
        const le = N.right - z.right, ce = window.innerWidth - k.right - le, ct = window.innerWidth - L.right - ce, ut = L.width + ct, wr = Math.max(ut, N.width), yr = window.innerWidth - St, xr = Oa(ce, [St, yr - wr]);
        l.style.minWidth = ut + "px", l.style.right = xr + "px";
      }
      const Q = p(), H = window.innerHeight - St * 2, q = g.scrollHeight, J = window.getComputedStyle(u), G = parseInt(J.borderTopWidth, 10), Z = parseInt(J.paddingTop, 10), I = parseInt(J.borderBottomWidth, 10), O = parseInt(J.paddingBottom, 10), W = G + Z + q + O + I, ue = Math.min(x.offsetHeight * 5, W), ge = window.getComputedStyle(g), ke = parseInt(ge.paddingTop, 10), xt = parseInt(ge.paddingBottom, 10), Ue = L.top + L.height / 2 - St, bt = H - Ue, Ee = x.offsetHeight / 2, j = x.offsetTop + Ee, ae = G + Z + j, de = W - ae;
      if (ae <= Ue) {
        const le = x === Q[Q.length - 1].ref.current;
        l.style.bottom = "0px";
        const ce = u.clientHeight - g.offsetTop - g.offsetHeight, ct = Math.max(
          bt,
          Ee + // viewport might have padding bottom, include it to avoid a scrollable viewport
          (le ? xt : 0) + ce + I
        ), ut = ae + ct;
        l.style.height = ut + "px";
      } else {
        const le = x === Q[0].ref.current;
        l.style.top = "0px";
        const ct = Math.max(
          Ue,
          G + g.offsetTop + // viewport might have padding top, include it to avoid a scrollable viewport
          (le ? ke : 0) + Ee
        ) + de;
        l.style.height = ct + "px", g.scrollTop = ae - Ue + g.offsetTop;
      }
      l.style.margin = `${St}px 0`, l.style.minHeight = ue + "px", l.style.maxHeight = H + "px", r == null || r(), requestAnimationFrame(() => m.current = !0);
    }
  }, [
    p,
    i.trigger,
    i.valueNode,
    l,
    u,
    g,
    x,
    C,
    i.dir,
    r
  ]);
  Ne(() => M(), [M]);
  const [_, P] = h.useState();
  Ne(() => {
    u && P(window.getComputedStyle(u).zIndex);
  }, [u]);
  const E = h.useCallback(
    (L) => {
      L && v.current === !0 && (M(), y == null || y(), v.current = !1);
    },
    [M, y]
  );
  return /* @__PURE__ */ a(
    uM,
    {
      scope: n,
      contentWrapper: l,
      shouldExpandOnScrollRef: m,
      onScrollButtonChange: E,
      children: /* @__PURE__ */ a(
        "div",
        {
          ref: c,
          style: {
            display: "flex",
            flexDirection: "column",
            position: "fixed",
            zIndex: _
          },
          children: /* @__PURE__ */ a(
            Y.div,
            {
              ...o,
              ref: f,
              style: {
                // When we get the height of the content, it includes borders. If we were to set
                // the height without having `boxSizing: 'border-box'` it would be too big.
                boxSizing: "border-box",
                // We need to ensure the content doesn't get taller than the wrapper
                maxHeight: "100%",
                ...o.style
              }
            }
          )
        }
      )
    }
  );
});
$u.displayName = lM;
var cM = "SelectPopperPosition", za = h.forwardRef((e, t) => {
  const {
    __scopeSelect: n,
    align: r = "start",
    collisionPadding: o = St,
    ...i
  } = e, s = Fo(n);
  return /* @__PURE__ */ a(
    K0,
    {
      ...s,
      ...i,
      ref: t,
      align: r,
      collisionPadding: o,
      style: {
        // Ensure border-box for floating-ui calculations
        boxSizing: "border-box",
        ...i.style,
        "--radix-select-content-transform-origin": "var(--radix-popper-transform-origin)",
        "--radix-select-content-available-width": "var(--radix-popper-available-width)",
        "--radix-select-content-available-height": "var(--radix-popper-available-height)",
        "--radix-select-trigger-width": "var(--radix-popper-anchor-width)",
        "--radix-select-trigger-height": "var(--radix-popper-anchor-height)"
      }
    }
  );
});
za.displayName = cM;
var [uM, es] = En(an, {}), Ha = "SelectViewport", zu = h.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, nonce: r, ...o } = e, i = Kt(Ha, n), s = es(Ha, n), l = te(t, i.onViewportChange), c = h.useRef(0);
    return /* @__PURE__ */ b(me, { children: [
      /* @__PURE__ */ a(
        "style",
        {
          dangerouslySetInnerHTML: {
            __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"
          },
          nonce: r
        }
      ),
      /* @__PURE__ */ a(ko.Slot, { scope: n, children: /* @__PURE__ */ a(
        Y.div,
        {
          "data-radix-select-viewport": "",
          role: "presentation",
          ...o,
          ref: l,
          style: {
            // we use position: 'relative' here on the `viewport` so that when we call
            // `selectedItem.offsetTop` in calculations, the offset is relative to the viewport
            // (independent of the scrollUpButton).
            position: "relative",
            flex: 1,
            overflow: "auto",
            ...o.style
          },
          onScroll: V(o.onScroll, (u) => {
            const d = u.currentTarget, { contentWrapper: f, shouldExpandOnScrollRef: p } = s;
            if (p != null && p.current && f) {
              const m = Math.abs(c.current - d.scrollTop);
              if (m > 0) {
                const v = window.innerHeight - St * 2, g = parseFloat(f.style.minHeight), x = parseFloat(f.style.height), C = Math.max(g, x);
                if (C < v) {
                  const y = C + m, M = Math.min(v, y), _ = y - M;
                  f.style.height = M + "px", f.style.bottom === "0px" && (d.scrollTop = _ > 0 ? _ : 0, f.style.justifyContent = "flex-end");
                }
              }
            }
            c.current = d.scrollTop;
          })
        }
      ) })
    ] });
  }
);
zu.displayName = Ha;
var Hu = "SelectGroup", [dM, fM] = En(Hu), hM = h.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e, o = Qe();
    return /* @__PURE__ */ a(dM, { scope: n, id: o, children: /* @__PURE__ */ a(Y.div, { role: "group", "aria-labelledby": o, ...r, ref: t }) });
  }
);
hM.displayName = Hu;
var Wu = "SelectLabel", Uu = h.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e, o = fM(Wu, n);
    return /* @__PURE__ */ a(Y.div, { id: o.id, ...r, ref: t });
  }
);
Uu.displayName = Wu;
var Zr = "SelectItem", [pM, Gu] = En(Zr), ju = h.forwardRef(
  (e, t) => {
    const {
      __scopeSelect: n,
      value: r,
      disabled: o = !1,
      textValue: i,
      ...s
    } = e, l = jt(Zr, n), c = Kt(Zr, n), u = l.value === r, [d, f] = h.useState(i ?? ""), [p, m] = h.useState(!1), v = te(
      t,
      (C) => {
        var y;
        return (y = c.itemRefCallback) == null ? void 0 : y.call(c, C, r, o);
      }
    ), g = Qe(), x = () => {
      o || (l.onValueChange(r), l.onOpenChange(!1));
    };
    if (r === "")
      throw new Error(
        "A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder."
      );
    return /* @__PURE__ */ a(
      pM,
      {
        scope: n,
        value: r,
        disabled: o,
        textId: g,
        isSelected: u,
        onItemTextChange: h.useCallback((C) => {
          f((y) => y || ((C == null ? void 0 : C.textContent) ?? "").trim());
        }, []),
        children: /* @__PURE__ */ a(
          ko.ItemSlot,
          {
            scope: n,
            value: r,
            disabled: o,
            textValue: d,
            children: /* @__PURE__ */ a(
              Y.div,
              {
                role: "option",
                "aria-labelledby": g,
                "data-highlighted": p ? "" : void 0,
                "aria-selected": u && p,
                "data-state": u ? "checked" : "unchecked",
                "aria-disabled": o || void 0,
                "data-disabled": o ? "" : void 0,
                tabIndex: o ? void 0 : -1,
                ...s,
                ref: v,
                onFocus: V(s.onFocus, () => m(!0)),
                onBlur: V(s.onBlur, () => m(!1)),
                onPointerUp: V(s.onPointerUp, x),
                onPointerMove: V(s.onPointerMove, (C) => {
                  var y;
                  o ? (y = c.onItemLeave) == null || y.call(c) : C.currentTarget.focus({ preventScroll: !0 });
                }),
                onPointerLeave: V(s.onPointerLeave, (C) => {
                  var y;
                  C.currentTarget === document.activeElement && ((y = c.onItemLeave) == null || y.call(c));
                }),
                onKeyDown: V(s.onKeyDown, (C) => {
                  var M;
                  ((M = c.searchRef) == null ? void 0 : M.current) !== "" && C.key === " " || (JC.includes(C.key) && x(), C.key === " " && C.preventDefault());
                })
              }
            )
          }
        )
      }
    );
  }
);
ju.displayName = Zr;
var Hn = "SelectItemText", Ku = h.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, className: r, style: o, ...i } = e, s = jt(Hn, n), l = Kt(Hn, n), c = Gu(Hn, n), u = rM(Hn, n), [d, f] = h.useState(null), p = te(
      t,
      (C) => f(C),
      c.onItemTextChange,
      (C) => {
        var y;
        return (y = l.itemTextRefCallback) == null ? void 0 : y.call(l, C, c.value, c.disabled);
      }
    ), m = d == null ? void 0 : d.textContent, v = h.useMemo(
      () => /* @__PURE__ */ a("option", { value: c.value, disabled: c.disabled, children: m }, c.value),
      [c.disabled, c.value, m]
    ), { onNativeOptionAdd: g, onNativeOptionRemove: x } = u;
    return Ne(() => (g(v), () => x(v)), [g, x, v]), /* @__PURE__ */ b(me, { children: [
      /* @__PURE__ */ a(Y.span, { id: c.textId, ...i, ref: p }),
      c.isSelected && s.valueNode && !s.valueNodeHasChildren ? J0.createPortal(i.children, s.valueNode) : null
    ] });
  }
);
Ku.displayName = Hn;
var Yu = "SelectItemIndicator", qu = h.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e;
    return Gu(Yu, n).isSelected ? /* @__PURE__ */ a(Y.span, { "aria-hidden": !0, ...r, ref: t }) : null;
  }
);
qu.displayName = Yu;
var Wa = "SelectScrollUpButton", Xu = h.forwardRef((e, t) => {
  const n = Kt(Wa, e.__scopeSelect), r = es(Wa, e.__scopeSelect), [o, i] = h.useState(!1), s = te(t, r.onScrollButtonChange);
  return Ne(() => {
    if (n.viewport && n.isPositioned) {
      let l = function() {
        const u = c.scrollTop > 0;
        i(u);
      };
      const c = n.viewport;
      return l(), c.addEventListener("scroll", l), () => c.removeEventListener("scroll", l);
    }
  }, [n.viewport, n.isPositioned]), o ? /* @__PURE__ */ a(
    Qu,
    {
      ...e,
      ref: s,
      onAutoScroll: () => {
        const { viewport: l, selectedItem: c } = n;
        l && c && (l.scrollTop = l.scrollTop - c.offsetHeight);
      }
    }
  ) : null;
});
Xu.displayName = Wa;
var Ua = "SelectScrollDownButton", Zu = h.forwardRef((e, t) => {
  const n = Kt(Ua, e.__scopeSelect), r = es(Ua, e.__scopeSelect), [o, i] = h.useState(!1), s = te(t, r.onScrollButtonChange);
  return Ne(() => {
    if (n.viewport && n.isPositioned) {
      let l = function() {
        const u = c.scrollHeight - c.clientHeight, d = Math.ceil(c.scrollTop) < u;
        i(d);
      };
      const c = n.viewport;
      return l(), c.addEventListener("scroll", l), () => c.removeEventListener("scroll", l);
    }
  }, [n.viewport, n.isPositioned]), o ? /* @__PURE__ */ a(
    Qu,
    {
      ...e,
      ref: s,
      onAutoScroll: () => {
        const { viewport: l, selectedItem: c } = n;
        l && c && (l.scrollTop = l.scrollTop + c.offsetHeight);
      }
    }
  ) : null;
});
Zu.displayName = Ua;
var Qu = h.forwardRef((e, t) => {
  const { __scopeSelect: n, onAutoScroll: r, ...o } = e, i = Kt("SelectScrollButton", n), s = h.useRef(null), l = Eo(n), c = h.useCallback(() => {
    s.current !== null && (window.clearInterval(s.current), s.current = null);
  }, []);
  return h.useEffect(() => () => c(), [c]), Ne(() => {
    var d;
    const u = l().find((f) => f.ref.current === document.activeElement);
    (d = u == null ? void 0 : u.ref.current) == null || d.scrollIntoView({ block: "nearest" });
  }, [l]), /* @__PURE__ */ a(
    Y.div,
    {
      "aria-hidden": !0,
      ...o,
      ref: t,
      style: { flexShrink: 0, ...o.style },
      onPointerDown: V(o.onPointerDown, () => {
        s.current === null && (s.current = window.setInterval(r, 50));
      }),
      onPointerMove: V(o.onPointerMove, () => {
        var u;
        (u = i.onItemLeave) == null || u.call(i), s.current === null && (s.current = window.setInterval(r, 50));
      }),
      onPointerLeave: V(o.onPointerLeave, () => {
        c();
      })
    }
  );
}), mM = "SelectSeparator", Ju = h.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e;
    return /* @__PURE__ */ a(Y.div, { "aria-hidden": !0, ...r, ref: t });
  }
);
Ju.displayName = mM;
var Ga = "SelectArrow", vM = h.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e, o = Fo(n), i = jt(Ga, n), s = Kt(Ga, n);
    return i.open && s.position === "popper" ? /* @__PURE__ */ a(Y0, { ...o, ...r, ref: t }) : null;
  }
);
vM.displayName = Ga;
function ed(e) {
  return e === "" || e === void 0;
}
var td = h.forwardRef(
  (e, t) => {
    const { value: n, ...r } = e, o = h.useRef(null), i = te(t, o), s = Cu(n);
    return h.useEffect(() => {
      const l = o.current, c = window.HTMLSelectElement.prototype, d = Object.getOwnPropertyDescriptor(
        c,
        "value"
      ).set;
      if (s !== n && d) {
        const f = new Event("change", { bubbles: !0 });
        d.call(l, n), l.dispatchEvent(f);
      }
    }, [s, n]), /* @__PURE__ */ a(rh, { asChild: !0, children: /* @__PURE__ */ a("select", { ...r, ref: i, defaultValue: n }) });
  }
);
td.displayName = "BubbleSelect";
function nd(e) {
  const t = xe(e), n = h.useRef(""), r = h.useRef(0), o = h.useCallback(
    (s) => {
      const l = n.current + s;
      t(l), function c(u) {
        n.current = u, window.clearTimeout(r.current), u !== "" && (r.current = window.setTimeout(() => c(""), 1e3));
      }(l);
    },
    [t]
  ), i = h.useCallback(() => {
    n.current = "", window.clearTimeout(r.current);
  }, []);
  return h.useEffect(() => () => window.clearTimeout(r.current), []), [n, o, i];
}
function rd(e, t, n) {
  const o = t.length > 1 && Array.from(t).every((u) => u === t[0]) ? t[0] : t, i = n ? e.indexOf(n) : -1;
  let s = gM(e, Math.max(i, 0));
  o.length === 1 && (s = s.filter((u) => u !== n));
  const c = s.find(
    (u) => u.textValue.toLowerCase().startsWith(o.toLowerCase())
  );
  return c !== n ? c : void 0;
}
function gM(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
var wM = Du, od = Eu, yM = Iu, xM = Ou, ad = Vu, bM = zu, id = Uu, sd = ju, CM = Ku, MM = qu, ld = Xu, cd = Zu, ud = Ju;
const SM = wM, RM = yM, dd = h.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ a(od, { ref: r, className: T(e), ...n, children: t }));
dd.displayName = od.displayName;
const fd = h.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ a(
  ld,
  {
    ref: n,
    className: T(
      "flex cursor-default items-center justify-center py-1",
      e
    ),
    ...t,
    children: /* @__PURE__ */ a(hy, { className: "h-4 w-4 text-f1-foreground" })
  }
));
fd.displayName = ld.displayName;
const hd = h.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ a(
  cd,
  {
    ref: n,
    className: T(
      "flex cursor-default items-center justify-center py-1",
      e
    ),
    ...t,
    children: /* @__PURE__ */ a(dy, { className: "h-4 w-4 text-f1-foreground" })
  }
));
hd.displayName = cd.displayName;
const pd = h.forwardRef(({ className: e, children: t, position: n = "popper", ...r }, o) => /* @__PURE__ */ a(xM, { children: /* @__PURE__ */ b(
  ad,
  {
    ref: o,
    className: T(
      "relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border border-solid border-f1-border bg-f1-background text-f1-foreground shadow-md data-[state=closed]:fade-out-0 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 motion-safe:data-[state=open]:animate-in motion-safe:data-[state=closed]:animate-out motion-safe:data-[state=open]:fade-in-0 motion-safe:data-[state=closed]:zoom-out-95 motion-safe:data-[state=open]:zoom-in-95 motion-safe:data-[side=bottom]:slide-in-from-top-2",
      n === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
      e
    ),
    position: n,
    ...r,
    children: [
      /* @__PURE__ */ a(fd, {}),
      /* @__PURE__ */ a(
        bM,
        {
          className: T(
            "p-1",
            n === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
          ),
          children: t
        }
      ),
      /* @__PURE__ */ a(hd, {})
    ]
  }
) }));
pd.displayName = ad.displayName;
const _M = h.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ a(
  id,
  {
    ref: n,
    className: T("py-1.5 pl-8 pr-2 text-sm font-semibold", e),
    ...t
  }
));
_M.displayName = id.displayName;
const md = h.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ b(
  sd,
  {
    ref: r,
    className: T(
      "relative grid w-full cursor-default select-none grid-cols-[1fr_20px] gap-x-1.5 rounded p-2 outline-none transition-colors focus:bg-f1-background-secondary focus:text-f1-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      "data-[state=checked]:bg-f1-background-selected-bold/5 hover:data-[state=checked]:bg-f1-background-selected-bold/10",
      e
    ),
    ...n,
    children: [
      /* @__PURE__ */ a(CM, { children: t }),
      /* @__PURE__ */ a(MM, { className: "flex", children: /* @__PURE__ */ a(Wc, { className: "size-5 text-f1-icon-selected" }) })
    ]
  }
));
md.displayName = sd.displayName;
const PM = h.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ a(
  ud,
  {
    ref: n,
    className: T("-mx-1 my-1 h-px bg-f1-background-secondary", e),
    ...t
  }
));
PM.displayName = ud.displayName;
const AM = ({ item: e }) => {
  const t = e.icon && Po[e.icon];
  return /* @__PURE__ */ a(md, { value: e.value, children: /* @__PURE__ */ b("div", { className: "flex items-start gap-1.5", children: [
    t && /* @__PURE__ */ a(t, { className: "h-5 w-5 shrink-0 text-f1-icon" }),
    /* @__PURE__ */ b("div", { className: "flex flex-col", children: [
      /* @__PURE__ */ a("span", { className: "font-medium", children: e.label }),
      e.description && /* @__PURE__ */ a("div", { className: "text-f1-foreground-secondary", children: e.description })
    ] })
  ] }) });
}, TM = ({ item: e }) => {
  const t = e.icon && Po[e.icon];
  return /* @__PURE__ */ b("div", { className: "flex items-center gap-1.5", children: [
    t && /* @__PURE__ */ a(t, { className: "h-5 w-5 shrink-0 text-f1-icon" }),
    e.label
  ] });
}, NM = "flex h-10 w-full items-center justify-between rounded-md border border-solid border-f1-border bg-f1-background pl-3 pr-2 py-2.5 transition-colors placeholder:text-f1-foreground-secondary hover:border-f1-border-hover disabled:cursor-not-allowed disabled:bg-f1-background-secondary disabled:opacity-50 [&>span]:line-clamp-1", DM = w(
  function({
    placeholder: t,
    options: n,
    onChange: r,
    value: o,
    children: i,
    disabled: s,
    open: l,
    onOpenChange: c,
    ...u
  }, d) {
    const f = n.find((p) => p.value === o);
    return /* @__PURE__ */ b(
      SM,
      {
        onValueChange: r,
        value: o,
        disabled: s,
        open: l,
        onOpenChange: c,
        ...u,
        children: [
          /* @__PURE__ */ a(dd, { ref: d, asChild: !0, children: i || /* @__PURE__ */ b(
            "button",
            {
              className: T(
                NM,
                Ft("focus-visible:border-f1-border-hover")
              ),
              children: [
                /* @__PURE__ */ a(RM, { placeholder: t, asChild: !0, children: f && /* @__PURE__ */ a(TM, { item: f }) }),
                /* @__PURE__ */ a("div", { className: "flex h-6 w-6 items-center justify-center", children: /* @__PURE__ */ a("div", { className: "h-4 w-4 rounded-2xs bg-f1-background-secondary", children: /* @__PURE__ */ a(lr, { className: "h-3 w-3" }) }) })
              ]
            }
          ) }),
          /* @__PURE__ */ a(pd, { children: n.map((p) => /* @__PURE__ */ a(AM, { item: p }, p.value)) })
        ]
      }
    );
  }
), vd = h.forwardRef(
  ({ className: e, ...t }, n) => /* @__PURE__ */ a(
    "textarea",
    {
      className: T(
        "ring-offset-background focus-visible:ring-ring flex min-h-[80px] w-full rounded-sm border-2 border-solid border-f1-border bg-f1-background px-3 py-2 text-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-f1-foreground-secondary/60 hover:border-f1-border-hover focus-visible:border-f1-border-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:bg-f1-background-secondary disabled:opacity-50",
        e
      ),
      ref: n,
      ...t
    }
  )
);
vd.displayName = "Textarea";
const pA = De(
  {
    name: "Textarea",
    type: "form"
  },
  vd
), mA = De(
  {
    name: "Input",
    type: "form"
  },
  d3
), vA = De(
  {
    name: "NumberInput",
    type: "form"
  },
  ay
);
var mr = (e) => e.type === "checkbox", bn = (e) => e instanceof Date, Ie = (e) => e == null;
const gd = (e) => typeof e == "object";
var Ce = (e) => !Ie(e) && !Array.isArray(e) && gd(e) && !bn(e), kM = (e) => Ce(e) && e.target ? mr(e.target) ? e.target.checked : e.target.value : e, EM = (e) => e.substring(0, e.search(/\.\d+(\.|$)/)) || e, FM = (e, t) => e.has(EM(t)), IM = (e) => {
  const t = e.constructor && e.constructor.prototype;
  return Ce(t) && t.hasOwnProperty("isPrototypeOf");
}, ts = typeof window < "u" && typeof window.HTMLElement < "u" && typeof document < "u";
function qe(e) {
  let t;
  const n = Array.isArray(e);
  if (e instanceof Date)
    t = new Date(e);
  else if (e instanceof Set)
    t = new Set(e);
  else if (!(ts && (e instanceof Blob || e instanceof FileList)) && (n || Ce(e)))
    if (t = n ? [] : {}, !n && !IM(e))
      t = e;
    else
      for (const r in e)
        e.hasOwnProperty(r) && (t[r] = qe(e[r]));
  else
    return e;
  return t;
}
var Io = (e) => Array.isArray(e) ? e.filter(Boolean) : [], ye = (e) => e === void 0, $ = (e, t, n) => {
  if (!t || !Ce(e))
    return n;
  const r = Io(t.split(/[,[\].]+?/)).reduce((o, i) => Ie(o) ? o : o[i], e);
  return ye(r) || r === e ? ye(e[t]) ? n : e[t] : r;
}, dt = (e) => typeof e == "boolean", ns = (e) => /^\w*$/.test(e), wd = (e) => Io(e.replace(/["|']|\]/g, "").split(/\.|\[/)), pe = (e, t, n) => {
  let r = -1;
  const o = ns(t) ? [t] : wd(t), i = o.length, s = i - 1;
  for (; ++r < i; ) {
    const l = o[r];
    let c = n;
    if (r !== s) {
      const u = e[l];
      c = Ce(u) || Array.isArray(u) ? u : isNaN(+o[r + 1]) ? {} : [];
    }
    if (l === "__proto__")
      return;
    e[l] = c, e = e[l];
  }
  return e;
};
const R0 = {
  BLUR: "blur",
  FOCUS_OUT: "focusout",
  CHANGE: "change"
}, rt = {
  onBlur: "onBlur",
  onChange: "onChange",
  onSubmit: "onSubmit",
  onTouched: "onTouched",
  all: "all"
}, Mt = {
  max: "max",
  min: "min",
  maxLength: "maxLength",
  minLength: "minLength",
  pattern: "pattern",
  required: "required",
  validate: "validate"
};
ee.createContext(null);
var OM = (e, t, n, r = !0) => {
  const o = {
    defaultValues: t._defaultValues
  };
  for (const i in e)
    Object.defineProperty(o, i, {
      get: () => {
        const s = i;
        return t._proxyFormState[s] !== rt.all && (t._proxyFormState[s] = !r || rt.all), e[s];
      }
    });
  return o;
}, Be = (e) => Ce(e) && !Object.keys(e).length, VM = (e, t, n, r) => {
  n(e);
  const { name: o, ...i } = e;
  return Be(i) || Object.keys(i).length >= Object.keys(t).length || Object.keys(i).find((s) => t[s] === rt.all);
}, Br = (e) => Array.isArray(e) ? e : [e];
function BM(e) {
  const t = ee.useRef(e);
  t.current = e, ee.useEffect(() => {
    const n = !e.disabled && t.current.subject && t.current.subject.subscribe({
      next: t.current.next
    });
    return () => {
      n && n.unsubscribe();
    };
  }, [e.disabled]);
}
var pt = (e) => typeof e == "string", LM = (e, t, n, r, o) => pt(e) ? (r && t.watch.add(e), $(n, e, o)) : Array.isArray(e) ? e.map((i) => (r && t.watch.add(i), $(n, i))) : (r && (t.watchAll = !0), n), $M = (e, t, n, r, o) => t ? {
  ...n[e],
  types: {
    ...n[e] && n[e].types ? n[e].types : {},
    [r]: o || !0
  }
} : {}, _0 = (e) => ({
  isOnSubmit: !e || e === rt.onSubmit,
  isOnBlur: e === rt.onBlur,
  isOnChange: e === rt.onChange,
  isOnAll: e === rt.all,
  isOnTouch: e === rt.onTouched
}), P0 = (e, t, n) => !n && (t.watchAll || t.watch.has(e) || [...t.watch].some((r) => e.startsWith(r) && /^\.\w+/.test(e.slice(r.length))));
const Yn = (e, t, n, r) => {
  for (const o of n || Object.keys(e)) {
    const i = $(e, o);
    if (i) {
      const { _f: s, ...l } = i;
      if (s) {
        if (s.refs && s.refs[0] && t(s.refs[0], o) && !r)
          return !0;
        if (s.ref && t(s.ref, s.name) && !r)
          return !0;
        if (Yn(l, t))
          break;
      } else if (Ce(l) && Yn(l, t))
        break;
    }
  }
};
var zM = (e, t, n) => {
  const r = Br($(e, n));
  return pe(r, "root", t[n]), pe(e, n, r), e;
}, rs = (e) => e.type === "file", _t = (e) => typeof e == "function", Qr = (e) => {
  if (!ts)
    return !1;
  const t = e ? e.ownerDocument : 0;
  return e instanceof (t && t.defaultView ? t.defaultView.HTMLElement : HTMLElement);
}, Lr = (e) => pt(e), os = (e) => e.type === "radio", Jr = (e) => e instanceof RegExp;
const A0 = {
  value: !1,
  isValid: !1
}, T0 = { value: !0, isValid: !0 };
var yd = (e) => {
  if (Array.isArray(e)) {
    if (e.length > 1) {
      const t = e.filter((n) => n && n.checked && !n.disabled).map((n) => n.value);
      return { value: t, isValid: !!t.length };
    }
    return e[0].checked && !e[0].disabled ? (
      // @ts-expect-error expected to work in the browser
      e[0].attributes && !ye(e[0].attributes.value) ? ye(e[0].value) || e[0].value === "" ? T0 : { value: e[0].value, isValid: !0 } : T0
    ) : A0;
  }
  return A0;
};
const N0 = {
  isValid: !1,
  value: null
};
var xd = (e) => Array.isArray(e) ? e.reduce((t, n) => n && n.checked && !n.disabled ? {
  isValid: !0,
  value: n.value
} : t, N0) : N0;
function D0(e, t, n = "validate") {
  if (Lr(e) || Array.isArray(e) && e.every(Lr) || dt(e) && !e)
    return {
      type: n,
      message: Lr(e) ? e : "",
      ref: t
    };
}
var mn = (e) => Ce(e) && !Jr(e) ? e : {
  value: e,
  message: ""
}, k0 = async (e, t, n, r, o) => {
  const { ref: i, refs: s, required: l, maxLength: c, minLength: u, min: d, max: f, pattern: p, validate: m, name: v, valueAsNumber: g, mount: x, disabled: C } = e._f, y = $(t, v);
  if (!x || C)
    return {};
  const M = s ? s[0] : i, _ = (H) => {
    r && M.reportValidity && (M.setCustomValidity(dt(H) ? "" : H || ""), M.reportValidity());
  }, P = {}, E = os(i), L = mr(i), N = E || L, k = (g || rs(i)) && ye(i.value) && ye(y) || Qr(i) && i.value === "" || y === "" || Array.isArray(y) && !y.length, z = $M.bind(null, v, n, P), Q = (H, q, J, G = Mt.maxLength, Z = Mt.minLength) => {
    const I = H ? q : J;
    P[v] = {
      type: H ? G : Z,
      message: I,
      ref: i,
      ...z(H ? G : Z, I)
    };
  };
  if (o ? !Array.isArray(y) || !y.length : l && (!N && (k || Ie(y)) || dt(y) && !y || L && !yd(s).isValid || E && !xd(s).isValid)) {
    const { value: H, message: q } = Lr(l) ? { value: !!l, message: l } : mn(l);
    if (H && (P[v] = {
      type: Mt.required,
      message: q,
      ref: M,
      ...z(Mt.required, q)
    }, !n))
      return _(q), P;
  }
  if (!k && (!Ie(d) || !Ie(f))) {
    let H, q;
    const J = mn(f), G = mn(d);
    if (!Ie(y) && !isNaN(y)) {
      const Z = i.valueAsNumber || y && +y;
      Ie(J.value) || (H = Z > J.value), Ie(G.value) || (q = Z < G.value);
    } else {
      const Z = i.valueAsDate || new Date(y), I = (ue) => /* @__PURE__ */ new Date((/* @__PURE__ */ new Date()).toDateString() + " " + ue), O = i.type == "time", W = i.type == "week";
      pt(J.value) && y && (H = O ? I(y) > I(J.value) : W ? y > J.value : Z > new Date(J.value)), pt(G.value) && y && (q = O ? I(y) < I(G.value) : W ? y < G.value : Z < new Date(G.value));
    }
    if ((H || q) && (Q(!!H, J.message, G.message, Mt.max, Mt.min), !n))
      return _(P[v].message), P;
  }
  if ((c || u) && !k && (pt(y) || o && Array.isArray(y))) {
    const H = mn(c), q = mn(u), J = !Ie(H.value) && y.length > +H.value, G = !Ie(q.value) && y.length < +q.value;
    if ((J || G) && (Q(J, H.message, q.message), !n))
      return _(P[v].message), P;
  }
  if (p && !k && pt(y)) {
    const { value: H, message: q } = mn(p);
    if (Jr(H) && !y.match(H) && (P[v] = {
      type: Mt.pattern,
      message: q,
      ref: i,
      ...z(Mt.pattern, q)
    }, !n))
      return _(q), P;
  }
  if (m) {
    if (_t(m)) {
      const H = await m(y, t), q = D0(H, M);
      if (q && (P[v] = {
        ...q,
        ...z(Mt.validate, q.message)
      }, !n))
        return _(q.message), P;
    } else if (Ce(m)) {
      let H = {};
      for (const q in m) {
        if (!Be(H) && !n)
          break;
        const J = D0(await m[q](y, t), M, q);
        J && (H = {
          ...J,
          ...z(q, J.message)
        }, _(J.message), n && (P[v] = H));
      }
      if (!Be(H) && (P[v] = {
        ref: M,
        ...H
      }, !n))
        return P;
    }
  }
  return _(!0), P;
};
function HM(e, t) {
  const n = t.slice(0, -1).length;
  let r = 0;
  for (; r < n; )
    e = ye(e) ? r++ : e[t[r++]];
  return e;
}
function WM(e) {
  for (const t in e)
    if (e.hasOwnProperty(t) && !ye(e[t]))
      return !1;
  return !0;
}
function Me(e, t) {
  const n = Array.isArray(t) ? t : ns(t) ? [t] : wd(t), r = n.length === 1 ? e : HM(e, n), o = n.length - 1, i = n[o];
  return r && delete r[i], o !== 0 && (Ce(r) && Be(r) || Array.isArray(r) && WM(r)) && Me(e, n.slice(0, -1)), e;
}
var ga = () => {
  let e = [];
  return {
    get observers() {
      return e;
    },
    next: (o) => {
      for (const i of e)
        i.next && i.next(o);
    },
    subscribe: (o) => (e.push(o), {
      unsubscribe: () => {
        e = e.filter((i) => i !== o);
      }
    }),
    unsubscribe: () => {
      e = [];
    }
  };
}, eo = (e) => Ie(e) || !gd(e);
function Lt(e, t) {
  if (eo(e) || eo(t))
    return e === t;
  if (bn(e) && bn(t))
    return e.getTime() === t.getTime();
  const n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length)
    return !1;
  for (const o of n) {
    const i = e[o];
    if (!r.includes(o))
      return !1;
    if (o !== "ref") {
      const s = t[o];
      if (bn(i) && bn(s) || Ce(i) && Ce(s) || Array.isArray(i) && Array.isArray(s) ? !Lt(i, s) : i !== s)
        return !1;
    }
  }
  return !0;
}
var bd = (e) => e.type === "select-multiple", UM = (e) => os(e) || mr(e), wa = (e) => Qr(e) && e.isConnected, Cd = (e) => {
  for (const t in e)
    if (_t(e[t]))
      return !0;
  return !1;
};
function to(e, t = {}) {
  const n = Array.isArray(e);
  if (Ce(e) || n)
    for (const r in e)
      Array.isArray(e[r]) || Ce(e[r]) && !Cd(e[r]) ? (t[r] = Array.isArray(e[r]) ? [] : {}, to(e[r], t[r])) : Ie(e[r]) || (t[r] = !0);
  return t;
}
function Md(e, t, n) {
  const r = Array.isArray(e);
  if (Ce(e) || r)
    for (const o in e)
      Array.isArray(e[o]) || Ce(e[o]) && !Cd(e[o]) ? ye(t) || eo(n[o]) ? n[o] = Array.isArray(e[o]) ? to(e[o], []) : { ...to(e[o]) } : Md(e[o], Ie(t) ? {} : t[o], n[o]) : n[o] = !Lt(e[o], t[o]);
  return n;
}
var Nr = (e, t) => Md(e, t, to(t)), Sd = (e, { valueAsNumber: t, valueAsDate: n, setValueAs: r }) => ye(e) ? e : t ? e === "" ? NaN : e && +e : n && pt(e) ? new Date(e) : r ? r(e) : e;
function ya(e) {
  const t = e.ref;
  if (!(e.refs ? e.refs.every((n) => n.disabled) : t.disabled))
    return rs(t) ? t.files : os(t) ? xd(e.refs).value : bd(t) ? [...t.selectedOptions].map(({ value: n }) => n) : mr(t) ? yd(e.refs).value : Sd(ye(t.value) ? e.ref.value : t.value, e);
}
var GM = (e, t, n, r) => {
  const o = {};
  for (const i of e) {
    const s = $(t, i);
    s && pe(o, i, s._f);
  }
  return {
    criteriaMode: n,
    names: [...e],
    fields: o,
    shouldUseNativeValidation: r
  };
}, Ln = (e) => ye(e) ? e : Jr(e) ? e.source : Ce(e) ? Jr(e.value) ? e.value.source : e.value : e;
const E0 = "AsyncFunction";
var jM = (e) => (!e || !e.validate) && !!(_t(e.validate) && e.validate.constructor.name === E0 || Ce(e.validate) && Object.values(e.validate).find((t) => t.constructor.name === E0)), KM = (e) => e.mount && (e.required || e.min || e.max || e.maxLength || e.minLength || e.pattern || e.validate);
function F0(e, t, n) {
  const r = $(e, n);
  if (r || ns(n))
    return {
      error: r,
      name: n
    };
  const o = n.split(".");
  for (; o.length; ) {
    const i = o.join("."), s = $(t, i), l = $(e, i);
    if (s && !Array.isArray(s) && n !== i)
      return { name: n };
    if (l && l.type)
      return {
        name: i,
        error: l
      };
    o.pop();
  }
  return {
    name: n
  };
}
var YM = (e, t, n, r, o) => o.isOnAll ? !1 : !n && o.isOnTouch ? !(t || e) : (n ? r.isOnBlur : o.isOnBlur) ? !e : (n ? r.isOnChange : o.isOnChange) ? e : !0, qM = (e, t) => !Io($(e, t)).length && Me(e, t);
const XM = {
  mode: rt.onSubmit,
  reValidateMode: rt.onChange,
  shouldFocusError: !0
};
function ZM(e = {}) {
  let t = {
    ...XM,
    ...e
  }, n = {
    submitCount: 0,
    isDirty: !1,
    isLoading: _t(t.defaultValues),
    isValidating: !1,
    isSubmitted: !1,
    isSubmitting: !1,
    isSubmitSuccessful: !1,
    isValid: !1,
    touchedFields: {},
    dirtyFields: {},
    validatingFields: {},
    errors: t.errors || {},
    disabled: t.disabled || !1
  }, r = {}, o = Ce(t.defaultValues) || Ce(t.values) ? qe(t.defaultValues || t.values) || {} : {}, i = t.shouldUnregister ? {} : qe(o), s = {
    action: !1,
    mount: !1,
    watch: !1
  }, l = {
    mount: /* @__PURE__ */ new Set(),
    unMount: /* @__PURE__ */ new Set(),
    array: /* @__PURE__ */ new Set(),
    watch: /* @__PURE__ */ new Set()
  }, c, u = 0;
  const d = {
    isDirty: !1,
    dirtyFields: !1,
    validatingFields: !1,
    touchedFields: !1,
    isValidating: !1,
    isValid: !1,
    errors: !1
  }, f = {
    values: ga(),
    array: ga(),
    state: ga()
  }, p = _0(t.mode), m = _0(t.reValidateMode), v = t.criteriaMode === rt.all, g = (S) => (R) => {
    clearTimeout(u), u = setTimeout(S, R);
  }, x = async (S) => {
    if (d.isValid || S) {
      const R = t.resolver ? Be((await N()).errors) : await z(r, !0);
      R !== n.isValid && f.state.next({
        isValid: R
      });
    }
  }, C = (S, R) => {
    (d.isValidating || d.validatingFields) && ((S || Array.from(l.mount)).forEach((A) => {
      A && (R ? pe(n.validatingFields, A, R) : Me(n.validatingFields, A));
    }), f.state.next({
      validatingFields: n.validatingFields,
      isValidating: !Be(n.validatingFields)
    }));
  }, y = (S, R = [], A, B, F = !0, D = !0) => {
    if (B && A) {
      if (s.action = !0, D && Array.isArray($(r, S))) {
        const U = A($(r, S), B.argA, B.argB);
        F && pe(r, S, U);
      }
      if (D && Array.isArray($(n.errors, S))) {
        const U = A($(n.errors, S), B.argA, B.argB);
        F && pe(n.errors, S, U), qM(n.errors, S);
      }
      if (d.touchedFields && D && Array.isArray($(n.touchedFields, S))) {
        const U = A($(n.touchedFields, S), B.argA, B.argB);
        F && pe(n.touchedFields, S, U);
      }
      d.dirtyFields && (n.dirtyFields = Nr(o, i)), f.state.next({
        name: S,
        isDirty: H(S, R),
        dirtyFields: n.dirtyFields,
        errors: n.errors,
        isValid: n.isValid
      });
    } else
      pe(i, S, R);
  }, M = (S, R) => {
    pe(n.errors, S, R), f.state.next({
      errors: n.errors
    });
  }, _ = (S) => {
    n.errors = S, f.state.next({
      errors: n.errors,
      isValid: !1
    });
  }, P = (S, R, A, B) => {
    const F = $(r, S);
    if (F) {
      const D = $(i, S, ye(A) ? $(o, S) : A);
      ye(D) || B && B.defaultChecked || R ? pe(i, S, R ? D : ya(F._f)) : G(S, D), s.mount && x();
    }
  }, E = (S, R, A, B, F) => {
    let D = !1, U = !1;
    const re = {
      name: S
    }, Se = !!($(r, S) && $(r, S)._f && $(r, S)._f.disabled);
    if (!A || B) {
      d.isDirty && (U = n.isDirty, n.isDirty = re.isDirty = H(), D = U !== re.isDirty);
      const Re = Se || Lt($(o, S), R);
      U = !!(!Se && $(n.dirtyFields, S)), Re || Se ? Me(n.dirtyFields, S) : pe(n.dirtyFields, S, !0), re.dirtyFields = n.dirtyFields, D = D || d.dirtyFields && U !== !Re;
    }
    if (A) {
      const Re = $(n.touchedFields, S);
      Re || (pe(n.touchedFields, S, A), re.touchedFields = n.touchedFields, D = D || d.touchedFields && Re !== A);
    }
    return D && F && f.state.next(re), D ? re : {};
  }, L = (S, R, A, B) => {
    const F = $(n.errors, S), D = d.isValid && dt(R) && n.isValid !== R;
    if (e.delayError && A ? (c = g(() => M(S, A)), c(e.delayError)) : (clearTimeout(u), c = null, A ? pe(n.errors, S, A) : Me(n.errors, S)), (A ? !Lt(F, A) : F) || !Be(B) || D) {
      const U = {
        ...B,
        ...D && dt(R) ? { isValid: R } : {},
        errors: n.errors,
        name: S
      };
      n = {
        ...n,
        ...U
      }, f.state.next(U);
    }
  }, N = async (S) => {
    C(S, !0);
    const R = await t.resolver(i, t.context, GM(S || l.mount, r, t.criteriaMode, t.shouldUseNativeValidation));
    return C(S), R;
  }, k = async (S) => {
    const { errors: R } = await N(S);
    if (S)
      for (const A of S) {
        const B = $(R, A);
        B ? pe(n.errors, A, B) : Me(n.errors, A);
      }
    else
      n.errors = R;
    return R;
  }, z = async (S, R, A = {
    valid: !0
  }) => {
    for (const B in S) {
      const F = S[B];
      if (F) {
        const { _f: D, ...U } = F;
        if (D) {
          const re = l.array.has(D.name), Se = F._f && jM(F._f);
          Se && d.validatingFields && C([B], !0);
          const Re = await k0(F, i, v, t.shouldUseNativeValidation && !R, re);
          if (Se && d.validatingFields && C([B]), Re[D.name] && (A.valid = !1, R))
            break;
          !R && ($(Re, D.name) ? re ? zM(n.errors, Re, D.name) : pe(n.errors, D.name, Re[D.name]) : Me(n.errors, D.name));
        }
        !Be(U) && await z(U, R, A);
      }
    }
    return A.valid;
  }, Q = () => {
    for (const S of l.unMount) {
      const R = $(r, S);
      R && (R._f.refs ? R._f.refs.every((A) => !wa(A)) : !wa(R._f.ref)) && Ee(S);
    }
    l.unMount = /* @__PURE__ */ new Set();
  }, H = (S, R) => (S && R && pe(i, S, R), !Lt(ge(), o)), q = (S, R, A) => LM(S, l, {
    ...s.mount ? i : ye(R) ? o : pt(S) ? { [S]: R } : R
  }, A, R), J = (S) => Io($(s.mount ? i : o, S, e.shouldUnregister ? $(o, S, []) : [])), G = (S, R, A = {}) => {
    const B = $(r, S);
    let F = R;
    if (B) {
      const D = B._f;
      D && (!D.disabled && pe(i, S, Sd(R, D)), F = Qr(D.ref) && Ie(R) ? "" : R, bd(D.ref) ? [...D.ref.options].forEach((U) => U.selected = F.includes(U.value)) : D.refs ? mr(D.ref) ? D.refs.length > 1 ? D.refs.forEach((U) => (!U.defaultChecked || !U.disabled) && (U.checked = Array.isArray(F) ? !!F.find((re) => re === U.value) : F === U.value)) : D.refs[0] && (D.refs[0].checked = !!F) : D.refs.forEach((U) => U.checked = U.value === F) : rs(D.ref) ? D.ref.value = "" : (D.ref.value = F, D.ref.type || f.values.next({
        name: S,
        values: { ...i }
      })));
    }
    (A.shouldDirty || A.shouldTouch) && E(S, F, A.shouldTouch, A.shouldDirty, !0), A.shouldValidate && ue(S);
  }, Z = (S, R, A) => {
    for (const B in R) {
      const F = R[B], D = `${S}.${B}`, U = $(r, D);
      (l.array.has(S) || !eo(F) || U && !U._f) && !bn(F) ? Z(D, F, A) : G(D, F, A);
    }
  }, I = (S, R, A = {}) => {
    const B = $(r, S), F = l.array.has(S), D = qe(R);
    pe(i, S, D), F ? (f.array.next({
      name: S,
      values: { ...i }
    }), (d.isDirty || d.dirtyFields) && A.shouldDirty && f.state.next({
      name: S,
      dirtyFields: Nr(o, i),
      isDirty: H(S, D)
    })) : B && !B._f && !Ie(D) ? Z(S, D, A) : G(S, D, A), P0(S, l) && f.state.next({ ...n }), f.values.next({
      name: s.mount ? S : void 0,
      values: { ...i }
    });
  }, O = async (S) => {
    s.mount = !0;
    const R = S.target;
    let A = R.name, B = !0;
    const F = $(r, A), D = () => R.type ? ya(F._f) : kM(S), U = (re) => {
      B = Number.isNaN(re) || Lt(re, $(i, A, re));
    };
    if (F) {
      let re, Se;
      const Re = D(), Yt = S.type === R0.BLUR || S.type === R0.FOCUS_OUT, Q2 = !KM(F._f) && !t.resolver && !$(n.errors, A) && !F._f.deps || YM(Yt, $(n.touchedFields, A), n.isSubmitted, m, p), Ho = P0(A, l, Yt);
      pe(i, A, Re), Yt ? (F._f.onBlur && F._f.onBlur(S), c && c(0)) : F._f.onChange && F._f.onChange(S);
      const Wo = E(A, Re, Yt, !1), J2 = !Be(Wo) || Ho;
      if (!Yt && f.values.next({
        name: A,
        type: S.type,
        values: { ...i }
      }), Q2)
        return d.isValid && (e.mode === "onBlur" ? Yt && x() : x()), J2 && f.state.next({ name: A, ...Ho ? {} : Wo });
      if (!Yt && Ho && f.state.next({ ...n }), t.resolver) {
        const { errors: Vs } = await N([A]);
        if (U(Re), B) {
          const eh = F0(n.errors, r, A), Bs = F0(Vs, r, eh.name || A);
          re = Bs.error, A = Bs.name, Se = Be(Vs);
        }
      } else
        C([A], !0), re = (await k0(F, i, v, t.shouldUseNativeValidation))[A], C([A]), U(Re), B && (re ? Se = !1 : d.isValid && (Se = await z(r, !0)));
      B && (F._f.deps && ue(F._f.deps), L(A, Se, re, Wo));
    }
  }, W = (S, R) => {
    if ($(n.errors, R) && S.focus)
      return S.focus(), 1;
  }, ue = async (S, R = {}) => {
    let A, B;
    const F = Br(S);
    if (t.resolver) {
      const D = await k(ye(S) ? S : F);
      A = Be(D), B = S ? !F.some((U) => $(D, U)) : A;
    } else S ? (B = (await Promise.all(F.map(async (D) => {
      const U = $(r, D);
      return await z(U && U._f ? { [D]: U } : U);
    }))).every(Boolean), !(!B && !n.isValid) && x()) : B = A = await z(r);
    return f.state.next({
      ...!pt(S) || d.isValid && A !== n.isValid ? {} : { name: S },
      ...t.resolver || !S ? { isValid: A } : {},
      errors: n.errors
    }), R.shouldFocus && !B && Yn(r, W, S ? F : l.mount), B;
  }, ge = (S) => {
    const R = {
      ...s.mount ? i : o
    };
    return ye(S) ? R : pt(S) ? $(R, S) : S.map((A) => $(R, A));
  }, ke = (S, R) => ({
    invalid: !!$((R || n).errors, S),
    isDirty: !!$((R || n).dirtyFields, S),
    error: $((R || n).errors, S),
    isValidating: !!$(n.validatingFields, S),
    isTouched: !!$((R || n).touchedFields, S)
  }), xt = (S) => {
    S && Br(S).forEach((R) => Me(n.errors, R)), f.state.next({
      errors: S ? n.errors : {}
    });
  }, Ue = (S, R, A) => {
    const B = ($(r, S, { _f: {} })._f || {}).ref, F = $(n.errors, S) || {}, { ref: D, message: U, type: re, ...Se } = F;
    pe(n.errors, S, {
      ...Se,
      ...R,
      ref: B
    }), f.state.next({
      name: S,
      errors: n.errors,
      isValid: !1
    }), A && A.shouldFocus && B && B.focus && B.focus();
  }, bt = (S, R) => _t(S) ? f.values.subscribe({
    next: (A) => S(q(void 0, R), A)
  }) : q(S, R, !0), Ee = (S, R = {}) => {
    for (const A of S ? Br(S) : l.mount)
      l.mount.delete(A), l.array.delete(A), R.keepValue || (Me(r, A), Me(i, A)), !R.keepError && Me(n.errors, A), !R.keepDirty && Me(n.dirtyFields, A), !R.keepTouched && Me(n.touchedFields, A), !R.keepIsValidating && Me(n.validatingFields, A), !t.shouldUnregister && !R.keepDefaultValue && Me(o, A);
    f.values.next({
      values: { ...i }
    }), f.state.next({
      ...n,
      ...R.keepDirty ? { isDirty: H() } : {}
    }), !R.keepIsValid && x();
  }, j = ({ disabled: S, name: R, field: A, fields: B, value: F }) => {
    if (dt(S) && s.mount || S) {
      const D = S ? void 0 : ye(F) ? ya(A ? A._f : $(B, R)._f) : F;
      pe(i, R, D), E(R, D, !1, !1, !0);
    }
  }, ae = (S, R = {}) => {
    let A = $(r, S);
    const B = dt(R.disabled) || dt(e.disabled);
    return pe(r, S, {
      ...A || {},
      _f: {
        ...A && A._f ? A._f : { ref: { name: S } },
        name: S,
        mount: !0,
        ...R
      }
    }), l.mount.add(S), A ? j({
      field: A,
      disabled: dt(R.disabled) ? R.disabled : e.disabled,
      name: S,
      value: R.value
    }) : P(S, !0, R.value), {
      ...B ? { disabled: R.disabled || e.disabled } : {},
      ...t.progressive ? {
        required: !!R.required,
        min: Ln(R.min),
        max: Ln(R.max),
        minLength: Ln(R.minLength),
        maxLength: Ln(R.maxLength),
        pattern: Ln(R.pattern)
      } : {},
      name: S,
      onChange: O,
      onBlur: O,
      ref: (F) => {
        if (F) {
          ae(S, R), A = $(r, S);
          const D = ye(F.value) && F.querySelectorAll && F.querySelectorAll("input,select,textarea")[0] || F, U = UM(D), re = A._f.refs || [];
          if (U ? re.find((Se) => Se === D) : D === A._f.ref)
            return;
          pe(r, S, {
            _f: {
              ...A._f,
              ...U ? {
                refs: [
                  ...re.filter(wa),
                  D,
                  ...Array.isArray($(o, S)) ? [{}] : []
                ],
                ref: { type: D.type, name: S }
              } : { ref: D }
            }
          }), P(S, !1, void 0, D);
        } else
          A = $(r, S, {}), A._f && (A._f.mount = !1), (t.shouldUnregister || R.shouldUnregister) && !(FM(l.array, S) && s.action) && l.unMount.add(S);
      }
    };
  }, de = () => t.shouldFocusError && Yn(r, W, l.mount), se = (S) => {
    dt(S) && (f.state.next({ disabled: S }), Yn(r, (R, A) => {
      const B = $(r, A);
      B && (R.disabled = B._f.disabled || S, Array.isArray(B._f.refs) && B._f.refs.forEach((F) => {
        F.disabled = B._f.disabled || S;
      }));
    }, 0, !1));
  }, le = (S, R) => async (A) => {
    let B;
    A && (A.preventDefault && A.preventDefault(), A.persist && A.persist());
    let F = qe(i);
    if (f.state.next({
      isSubmitting: !0
    }), t.resolver) {
      const { errors: D, values: U } = await N();
      n.errors = D, F = U;
    } else
      await z(r);
    if (Me(n.errors, "root"), Be(n.errors)) {
      f.state.next({
        errors: {}
      });
      try {
        await S(F, A);
      } catch (D) {
        B = D;
      }
    } else
      R && await R({ ...n.errors }, A), de(), setTimeout(de);
    if (f.state.next({
      isSubmitted: !0,
      isSubmitting: !1,
      isSubmitSuccessful: Be(n.errors) && !B,
      submitCount: n.submitCount + 1,
      errors: n.errors
    }), B)
      throw B;
  }, ce = (S, R = {}) => {
    $(r, S) && (ye(R.defaultValue) ? I(S, qe($(o, S))) : (I(S, R.defaultValue), pe(o, S, qe(R.defaultValue))), R.keepTouched || Me(n.touchedFields, S), R.keepDirty || (Me(n.dirtyFields, S), n.isDirty = R.defaultValue ? H(S, qe($(o, S))) : H()), R.keepError || (Me(n.errors, S), d.isValid && x()), f.state.next({ ...n }));
  }, ct = (S, R = {}) => {
    const A = S ? qe(S) : o, B = qe(A), F = Be(S), D = F ? o : B;
    if (R.keepDefaultValues || (o = A), !R.keepValues) {
      if (R.keepDirtyValues)
        for (const U of l.mount)
          $(n.dirtyFields, U) ? pe(D, U, $(i, U)) : I(U, $(D, U));
      else {
        if (ts && ye(S))
          for (const U of l.mount) {
            const re = $(r, U);
            if (re && re._f) {
              const Se = Array.isArray(re._f.refs) ? re._f.refs[0] : re._f.ref;
              if (Qr(Se)) {
                const Re = Se.closest("form");
                if (Re) {
                  Re.reset();
                  break;
                }
              }
            }
          }
        r = {};
      }
      i = e.shouldUnregister ? R.keepDefaultValues ? qe(o) : {} : qe(D), f.array.next({
        values: { ...D }
      }), f.values.next({
        values: { ...D }
      });
    }
    l = {
      mount: R.keepDirtyValues ? l.mount : /* @__PURE__ */ new Set(),
      unMount: /* @__PURE__ */ new Set(),
      array: /* @__PURE__ */ new Set(),
      watch: /* @__PURE__ */ new Set(),
      watchAll: !1,
      focus: ""
    }, s.mount = !d.isValid || !!R.keepIsValid || !!R.keepDirtyValues, s.watch = !!e.shouldUnregister, f.state.next({
      submitCount: R.keepSubmitCount ? n.submitCount : 0,
      isDirty: F ? !1 : R.keepDirty ? n.isDirty : !!(R.keepDefaultValues && !Lt(S, o)),
      isSubmitted: R.keepIsSubmitted ? n.isSubmitted : !1,
      dirtyFields: F ? {} : R.keepDirtyValues ? R.keepDefaultValues && i ? Nr(o, i) : n.dirtyFields : R.keepDefaultValues && S ? Nr(o, S) : R.keepDirty ? n.dirtyFields : {},
      touchedFields: R.keepTouched ? n.touchedFields : {},
      errors: R.keepErrors ? n.errors : {},
      isSubmitSuccessful: R.keepIsSubmitSuccessful ? n.isSubmitSuccessful : !1,
      isSubmitting: !1
    });
  }, ut = (S, R) => ct(_t(S) ? S(i) : S, R);
  return {
    control: {
      register: ae,
      unregister: Ee,
      getFieldState: ke,
      handleSubmit: le,
      setError: Ue,
      _executeSchema: N,
      _getWatch: q,
      _getDirty: H,
      _updateValid: x,
      _removeUnmounted: Q,
      _updateFieldArray: y,
      _updateDisabledField: j,
      _getFieldArray: J,
      _reset: ct,
      _resetDefaultValues: () => _t(t.defaultValues) && t.defaultValues().then((S) => {
        ut(S, t.resetOptions), f.state.next({
          isLoading: !1
        });
      }),
      _updateFormState: (S) => {
        n = {
          ...n,
          ...S
        };
      },
      _disableForm: se,
      _subjects: f,
      _proxyFormState: d,
      _setErrors: _,
      get _fields() {
        return r;
      },
      get _formValues() {
        return i;
      },
      get _state() {
        return s;
      },
      set _state(S) {
        s = S;
      },
      get _defaultValues() {
        return o;
      },
      get _names() {
        return l;
      },
      set _names(S) {
        l = S;
      },
      get _formState() {
        return n;
      },
      set _formState(S) {
        n = S;
      },
      get _options() {
        return t;
      },
      set _options(S) {
        t = {
          ...t,
          ...S
        };
      }
    },
    trigger: ue,
    register: ae,
    handleSubmit: le,
    watch: bt,
    setValue: I,
    getValues: ge,
    reset: ut,
    resetField: ce,
    clearErrors: xt,
    unregister: Ee,
    setError: Ue,
    setFocus: (S, R = {}) => {
      const A = $(r, S), B = A && A._f;
      if (B) {
        const F = B.refs ? B.refs[0] : B.ref;
        F.focus && (F.focus(), R.shouldSelect && F.select());
      }
    },
    getFieldState: ke
  };
}
function gA(e = {}) {
  const t = ee.useRef(), n = ee.useRef(), [r, o] = ee.useState({
    isDirty: !1,
    isValidating: !1,
    isLoading: _t(e.defaultValues),
    isSubmitted: !1,
    isSubmitting: !1,
    isSubmitSuccessful: !1,
    isValid: !1,
    submitCount: 0,
    dirtyFields: {},
    touchedFields: {},
    validatingFields: {},
    errors: e.errors || {},
    disabled: e.disabled || !1,
    defaultValues: _t(e.defaultValues) ? void 0 : e.defaultValues
  });
  t.current || (t.current = {
    ...ZM(e),
    formState: r
  });
  const i = t.current.control;
  return i._options = e, BM({
    subject: i._subjects.state,
    next: (s) => {
      VM(s, i._proxyFormState, i._updateFormState) && o({ ...i._formState });
    }
  }), ee.useEffect(() => i._disableForm(e.disabled), [i, e.disabled]), ee.useEffect(() => {
    if (i._proxyFormState.isDirty) {
      const s = i._getDirty();
      s !== r.isDirty && i._subjects.state.next({
        isDirty: s
      });
    }
  }, [i, r.isDirty]), ee.useEffect(() => {
    e.values && !Lt(e.values, n.current) ? (i._reset(e.values, i._options.resetOptions), n.current = e.values, o((s) => ({ ...s }))) : i._resetDefaultValues();
  }, [e.values, i]), ee.useEffect(() => {
    e.errors && i._setErrors(e.errors);
  }, [e.errors, i]), ee.useEffect(() => {
    i._state.mount || (i._updateValid(), i._state.mount = !0), i._state.watch && (i._state.watch = !1, i._subjects.state.next({ ...i._formState })), i._removeUnmounted();
  }), ee.useEffect(() => {
    e.shouldUnregister && i._subjects.values.next({
      values: i._getWatch()
    });
  }, [e.shouldUnregister, i]), t.current.formState = OM(r, i), t.current;
}
const QM = Ke(
  "relative w-full rounded-xl bg-f1-background-secondary p-6 text-f1-foreground [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-6 [&>svg]:top-6 [&>svg]:text-f1-foreground [&>svg~*]:pl-8",
  {
    variants: {
      variant: {
        destructive: "bg-f1-background-critical [&>svg]:text-f1-icon-critical",
        positive: "bg-f1-background-positive [&>svg]:text-f1-icon-positive",
        warning: "bg-f1-background-warning [&>svg]:text-f1-icon-warning",
        info: "bg-f1-background-info [&>svg]:text-f1-icon-info"
      }
    },
    defaultVariants: {
      variant: "info"
    }
  }
), JM = {
  destructive: vy,
  positive: py,
  warning: gy,
  info: cy
}, wA = De(
  {
    name: "Alert",
    type: "info"
  },
  // eslint-disable-next-line react/display-name
  h.forwardRef(({ className: e, variant: t = "info", children: n, ...r }, o) => {
    const i = t ? JM[t] : null;
    return /* @__PURE__ */ a(
      "div",
      {
        ref: o,
        role: "alert",
        className: T(QM({ variant: t }), e),
        ...r,
        children: /* @__PURE__ */ b("div", { className: "flex flex-row", children: [
          i && /* @__PURE__ */ a("div", { className: "mr-2 flex h-6 items-center", children: /* @__PURE__ */ a(i, { size: 20 }) }),
          /* @__PURE__ */ a("div", { children: n })
        ] })
      }
    );
  })
), yA = h.forwardRef(function({ className: t, ...n }, r) {
  return /* @__PURE__ */ a(
    "h5",
    {
      ref: r,
      className: T("mb-1 text-base font-medium tracking-tight", t),
      ...n
    }
  );
}), xA = h.forwardRef(function({ className: t, ...n }, r) {
  return /* @__PURE__ */ a(
    "div",
    {
      ref: r,
      className: T("[&_p]:leading-relaxed", t),
      ...n
    }
  );
}), eS = Ke(
  "inline-flex items-center justify-center whitespace-nowrap rounded-xs text-sm font-medium tabular-nums",
  {
    variants: {
      size: {
        md: "min-w-5 p-0.5",
        sm: "min-w-4 px-0.5"
      },
      type: {
        default: "border border-solid border-f1-border bg-f1-background-secondary",
        selected: "bg-f1-background-selected-bold text-f1-foreground-inverse",
        bold: "bg-f1-background-accent-bold text-f1-foreground-inverse"
      }
    },
    defaultVariants: {
      size: "md",
      type: "default"
    }
  }
);
function Rd({ size: e, type: t, value: n, maxValue: r }) {
  const o = r && n > r ? `+${r}` : n;
  return /* @__PURE__ */ a("div", { className: eS({ size: e, type: t }), children: o });
}
const tS = [
  "Calendar",
  "ClockIn",
  "Documents",
  "Engagement",
  "Finance",
  "Goals",
  "Home",
  "Inbox",
  "Kudos",
  "MyDocuments",
  "Organization",
  "Payroll",
  "Performance",
  "Profile",
  "Projects",
  "Recruitment",
  "Reports",
  "Shifts",
  "Software",
  "Spaces",
  "Spending",
  "Tasks",
  "TimeOff",
  "TimeTracking",
  "Trainings",
  "Workflows"
], nS = tS.reduce(
  (e, t) => {
    const n = Po[`Module${t}`];
    return n && (e[t] = n), e;
  },
  {}
), rS = Ke(
  "relative flex shrink-0 items-center justify-center",
  {
    variants: {
      size: {
        sm: "h-5 w-5",
        md: "h-6 w-6",
        lg: "h-8 w-8"
      }
    },
    defaultVariants: {
      size: "md"
    }
  }
), oS = Ke("relative text-f1-foreground-inverse", {
  variants: {
    size: {
      sm: "h-3 w-3",
      md: "h-4 w-4",
      lg: "h-6 w-6"
    }
  },
  defaultVariants: {
    size: "md"
  }
}), aS = "M50,0 C43,0 36,0 30,1 23,2 17,5 12,9 5,16 1,25 0,36 0,43 0,57 0,64 1,75 5,84 12,91 17,95 23,98 30,99 36,100 43,100 50,100 57,100 64,100 70,99 77,98 83,95 88,91 95,84 99,75 100,64 100,57 100,43 100,36 99,25 95,16 88,9 83,5 77,2 70,1 64,0 57,0 50,0";
function _d({ size: e = "md", icon: t }) {
  const n = nS[t];
  return /* @__PURE__ */ b("div", { className: rS({ size: e }), children: [
    /* @__PURE__ */ b(
      "svg",
      {
        viewBox: "0 0 100 100",
        className: "absolute h-full w-full",
        preserveAspectRatio: "none",
        children: [
          /* @__PURE__ */ a("defs", { children: /* @__PURE__ */ b("linearGradient", { id: "gradient", x1: "0%", y1: "0%", x2: "100%", y2: "100%", children: [
            /* @__PURE__ */ a("stop", { offset: "0%", stopColor: "#FF355E" }),
            /* @__PURE__ */ a("stop", { offset: "44%", stopColor: "#FF355E" }),
            /* @__PURE__ */ a("stop", { offset: "100%", stopColor: "#D62D4F" })
          ] }) }),
          /* @__PURE__ */ a("path", { d: aS, fill: "url(#gradient)" })
        ]
      }
    ),
    /* @__PURE__ */ a(n, { className: oS({ size: e }) })
  ] });
}
const iS = Ke(
  "flex h-5 items-center justify-center rounded-xs border border-solid py-0.5 text-sm font-semibold uppercase leading-none",
  {
    variants: {
      variant: {
        default: "border-f1-border bg-f1-background-tertiary text-f1-foreground-secondary",
        inverse: "border-f1-border/20 bg-f1-background/10 text-f1-foreground-inverse/70"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
), I0 = {
  cmd: Gc
};
function sS({ keys: e, variant: t }) {
  return /* @__PURE__ */ a("div", { className: "flex flex-wrap items-center gap-0.5", children: e.map((n, r) => {
    const o = n.toLowerCase(), i = o in I0;
    return /* @__PURE__ */ a(
      "kbd",
      {
        className: T(
          iS({ variant: t }),
          i ? "w-5 px-0.5" : "min-w-5 px-1"
        ),
        children: i ? /* @__PURE__ */ a(gt, { icon: I0[o], size: "sm" }) : n
      },
      r
    );
  }) });
}
const lS = () => /* @__PURE__ */ a("div", { className: "mx-6 w-px bg-f1-foreground-disabled" }), cS = w(
  function({ mainContent: t, sideContent: n }, r) {
    return /* @__PURE__ */ b(
      "div",
      {
        ref: r,
        className: "flex h-full flex-col-reverse gap-4 text-f1-foreground sm:flex-row sm:gap-0",
        children: [
          /* @__PURE__ */ a("div", { className: "sm:my-6 sm:ms-6 sm:basis-3/4", children: t }),
          /* @__PURE__ */ a(lS, {}),
          /* @__PURE__ */ a("div", { className: "sm:my-6 sm:me-6 sm:basis-1/4", children: n })
        ]
      }
    );
  }
);
function bA({ children: e }) {
  return /* @__PURE__ */ a("div", { className: "flex flex-1 flex-col gap-4 overflow-y-auto px-6 py-5", children: e });
}
const uS = w(
  function({ title: t, content: n }, r) {
    return /* @__PURE__ */ b(
      "div",
      {
        ref: r,
        className: T("flex flex-col", typeof n != "string" ? "gap-2" : "gap-1"),
        children: [
          /* @__PURE__ */ a("p", { className: "text-f1-foreground-secondary", children: t }),
          /* @__PURE__ */ a("p", { className: "font-medium text-f1-foreground", children: n })
        ]
      }
    );
  }
), CA = w(function({ title: t, details: n }, r) {
  return /* @__PURE__ */ b("div", { ref: r, className: "flex flex-col gap-4", children: [
    !!t && /* @__PURE__ */ a("p", { className: "mb-1 text-sm font-semibold text-f1-foreground-secondary", children: t.toLocaleUpperCase() }),
    /* @__PURE__ */ a("div", { className: "flex flex-col gap-5", children: n == null ? void 0 : n.map((o) => !(o != null && o.title) || !(o != null && o.content) ? null : /* @__PURE__ */ a(
      uS,
      {
        title: o.title,
        content: o.content
      },
      o.title
    )) })
  ] });
}), O0 = {
  grey: "bg-f1-icon",
  radical: "bg-f1-icon-critical",
  tangerine: "bg-f1-icon-warning",
  malibu: "bg-f1-icon-info",
  lime: "bg-f1-icon-positive",
  champagne: "bg-f1-foreground-positive",
  viridian: "bg-f1-foreground-accent",
  purple: "bg-f1-foreground-info"
}, dS = (e) => {
  const t = Object.keys(O0), n = O0;
  let r = 0;
  if (e === void 0 || e.length === 0)
    return n[t[0] ?? ""] || "";
  for (let o = 0; o < e.length; o++)
    r = e.charCodeAt(o) + ((r << 5) - r), r = r & r;
  return r = (r % t.length + t.length) % t.length, n[t[r]] ?? "";
}, Pd = w(
  ({ text: e, avatar: t, onClick: n }, r) => {
    const o = (t == null ? void 0 : t.alt) ?? e.split(/\s+/).slice(0, 2).map((i) => i[0]).join("").toLocaleUpperCase();
    return /* @__PURE__ */ b(
      "div",
      {
        ref: r,
        className: T(
          "flex flex-row items-center justify-start gap-1.5 rounded-md border border-solid border-f1-border py-1 pl-1 pr-2 font-medium text-f1-foreground",
          n && "cursor-pointer"
        ),
        onClick: n,
        children: [
          /* @__PURE__ */ a("span", { children: /* @__PURE__ */ a(
            ei,
            {
              alt: o,
              src: t == null ? void 0 : t.src,
              size: "xsmall",
              color: dS(e)
            }
          ) }),
          /* @__PURE__ */ a("p", { children: e })
        ]
      }
    );
  }
);
Pd.displayName = "Tag";
const fS = w(
  ({ tags: e }, t) => /* @__PURE__ */ a("div", { ref: t, className: "flex flex-wrap gap-3", children: e.map(({ ...n }, r) => /* @__PURE__ */ a(Pd, { ...n }, r)) })
);
fS.displayName = "TagsList";
const MA = De(
  {
    name: "InfoPaneLayout",
    type: "layout"
  },
  cS
), Ad = He(void 0);
function Oo() {
  const e = fe(Ad);
  return e === void 0 ? {
    isSmallScreen: !1,
    sidebarState: "locked",
    toggleSidebar: () => {
    }
  } : e;
}
function hS({ children: e }) {
  const { currentPath: t } = ti(), n = oh("(max-width: 900px)", {
    initializeWithValue: !0
  }), [r, o] = be(!0), [i, s] = be(!1), l = rn(() => {
    n && s(!i), o(!r);
  }, [n, i, r, o, s]), c = rn(
    (d) => {
      n || (d.clientX < 32 && s(!0), d.clientX > 280 && s(!1));
    },
    [n, s]
  ), u = n ? i ? "unlocked" : "hidden" : !r && !i ? "hidden" : !r && i ? "unlocked" : "locked";
  return We(() => {
    s(!1);
  }, [t]), /* @__PURE__ */ a(
    Ad.Provider,
    {
      value: {
        isSmallScreen: n,
        sidebarState: u,
        toggleSidebar: l
      },
      children: /* @__PURE__ */ a("div", { onPointerMove: c, className: "h-screen w-screen", children: e })
    }
  );
}
function SA({ children: e, sidebar: t }) {
  return /* @__PURE__ */ a(hS, { children: /* @__PURE__ */ a(pS, { sidebar: t, children: e }) });
}
function pS({ children: e, sidebar: t }) {
  const { sidebarState: n, toggleSidebar: r, isSmallScreen: o } = Oo(), i = ni();
  return /* @__PURE__ */ a(
    ah,
    {
      reducedMotion: i ? "always" : "never",
      transition: {
        ease: [0.25, 0.1, 0.25, 1],
        duration: i ? 0 : 0.2
      },
      children: /* @__PURE__ */ b("div", { className: "relative flex h-full flex-row", children: [
        /* @__PURE__ */ a(ki, { children: n === "unlocked" && /* @__PURE__ */ a(
          Wt.div,
          {
            className: T("fixed inset-0 z-[5] bg-f1-background-bold/60", {
              hidden: !o
            }),
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            exit: { opacity: 0 },
            transition: { duration: i ? 0 : 0.2 },
            onClick: r
          }
        ) }),
        /* @__PURE__ */ a(
          "div",
          {
            className: T(
              { "transition-all": !i },
              n === "locked" ? "w-64 pl-3" : "w-0"
            ),
            children: t
          }
        ),
        /* @__PURE__ */ a(
          Wt.div,
          {
            className: T(
              "flex max-w-full flex-1 overflow-x-hidden xs:py-1 xs:pr-1",
              n === "locked" ? "pl-0" : "xs:pl-1"
            ),
            layout: !0,
            transition: {
              duration: i ? 0 : 0.3,
              type: "spring",
              stiffness: 300,
              damping: 30
            },
            children: e
          }
        )
      ] })
    }
  );
}
const Td = h.forwardRef(({ ...e }, t) => /* @__PURE__ */ a("nav", { ref: t, "aria-label": "breadcrumb", ...e }));
Td.displayName = "Breadcrumb";
const Nd = h.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ a(
  "ol",
  {
    ref: n,
    className: T(
      "flex list-none flex-nowrap items-center gap-1 text-f1-foreground-secondary",
      e
    ),
    ...t
  }
));
Nd.displayName = "BreadcrumbList";
const Dd = h.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ a(
  "li",
  {
    ref: n,
    className: T("inline-flex items-center gap-0.5", e),
    ...t
  }
));
Dd.displayName = "BreadcrumbItem";
const kd = h.forwardRef(({ asChild: e, className: t, ...n }, r) => /* @__PURE__ */ a(
  e ? Mn : Tn,
  {
    ref: r,
    className: T(
      "rounded-sm px-1.5 py-0.5 font-medium text-f1-foreground no-underline transition-colors hover:bg-f1-background-secondary",
      t
    ),
    ...n
  }
));
kd.displayName = "BreadcrumbLink";
const Ed = h.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ a(
  "span",
  {
    ref: n,
    role: "link",
    "aria-disabled": "true",
    "aria-current": "page",
    className: T("truncate px-1.5 py-0.5 text-f1-foreground", e),
    ...t
  }
));
Ed.displayName = "BreadcrumbPage";
const as = ({
  children: e,
  className: t,
  ...n
}) => /* @__PURE__ */ a(
  "li",
  {
    role: "presentation",
    "aria-hidden": "true",
    className: T("flex align-bottom", t),
    ...n,
    children: e ?? /* @__PURE__ */ a(Li, {})
  }
);
as.displayName = "BreadcrumbSeparator";
var xa = "rovingFocusGroup.onEntryFocus", mS = { bubbles: !1, cancelable: !0 }, Vo = "RovingFocusGroup", [ja, Fd, vS] = hr(Vo), [gS, Bo] = Et(
  Vo,
  [vS]
), [wS, yS] = gS(Vo), Id = h.forwardRef(
  (e, t) => /* @__PURE__ */ a(ja.Provider, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ a(ja.Slot, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ a(xS, { ...e, ref: t }) }) })
);
Id.displayName = Vo;
var xS = h.forwardRef((e, t) => {
  const {
    __scopeRovingFocusGroup: n,
    orientation: r,
    loop: o = !1,
    dir: i,
    currentTabStopId: s,
    defaultCurrentTabStopId: l,
    onCurrentTabStopIdChange: c,
    onEntryFocus: u,
    preventScrollOnEntryFocus: d = !1,
    ...f
  } = e, p = h.useRef(null), m = te(t, p), v = kn(i), [g = null, x] = ot({
    prop: s,
    defaultProp: l,
    onChange: c
  }), [C, y] = h.useState(!1), M = xe(u), _ = Fd(n), P = h.useRef(!1), [E, L] = h.useState(0);
  return h.useEffect(() => {
    const N = p.current;
    if (N)
      return N.addEventListener(xa, M), () => N.removeEventListener(xa, M);
  }, [M]), /* @__PURE__ */ a(
    wS,
    {
      scope: n,
      orientation: r,
      dir: v,
      loop: o,
      currentTabStopId: g,
      onItemFocus: h.useCallback(
        (N) => x(N),
        [x]
      ),
      onItemShiftTab: h.useCallback(() => y(!0), []),
      onFocusableItemAdd: h.useCallback(
        () => L((N) => N + 1),
        []
      ),
      onFocusableItemRemove: h.useCallback(
        () => L((N) => N - 1),
        []
      ),
      children: /* @__PURE__ */ a(
        Y.div,
        {
          tabIndex: C || E === 0 ? -1 : 0,
          "data-orientation": r,
          ...f,
          ref: m,
          style: { outline: "none", ...e.style },
          onMouseDown: V(e.onMouseDown, () => {
            P.current = !0;
          }),
          onFocus: V(e.onFocus, (N) => {
            const k = !P.current;
            if (N.target === N.currentTarget && k && !C) {
              const z = new CustomEvent(xa, mS);
              if (N.currentTarget.dispatchEvent(z), !z.defaultPrevented) {
                const Q = _().filter((Z) => Z.focusable), H = Q.find((Z) => Z.active), q = Q.find((Z) => Z.id === g), G = [H, q, ...Q].filter(
                  Boolean
                ).map((Z) => Z.ref.current);
                Bd(G, d);
              }
            }
            P.current = !1;
          }),
          onBlur: V(e.onBlur, () => y(!1))
        }
      )
    }
  );
}), Od = "RovingFocusGroupItem", Vd = h.forwardRef(
  (e, t) => {
    const {
      __scopeRovingFocusGroup: n,
      focusable: r = !0,
      active: o = !1,
      tabStopId: i,
      ...s
    } = e, l = Qe(), c = i || l, u = yS(Od, n), d = u.currentTabStopId === c, f = Fd(n), { onFocusableItemAdd: p, onFocusableItemRemove: m } = u;
    return h.useEffect(() => {
      if (r)
        return p(), () => m();
    }, [r, p, m]), /* @__PURE__ */ a(
      ja.ItemSlot,
      {
        scope: n,
        id: c,
        focusable: r,
        active: o,
        children: /* @__PURE__ */ a(
          Y.span,
          {
            tabIndex: d ? 0 : -1,
            "data-orientation": u.orientation,
            ...s,
            ref: t,
            onMouseDown: V(e.onMouseDown, (v) => {
              r ? u.onItemFocus(c) : v.preventDefault();
            }),
            onFocus: V(e.onFocus, () => u.onItemFocus(c)),
            onKeyDown: V(e.onKeyDown, (v) => {
              if (v.key === "Tab" && v.shiftKey) {
                u.onItemShiftTab();
                return;
              }
              if (v.target !== v.currentTarget) return;
              const g = MS(v, u.orientation, u.dir);
              if (g !== void 0) {
                if (v.metaKey || v.ctrlKey || v.altKey || v.shiftKey) return;
                v.preventDefault();
                let C = f().filter((y) => y.focusable).map((y) => y.ref.current);
                if (g === "last") C.reverse();
                else if (g === "prev" || g === "next") {
                  g === "prev" && C.reverse();
                  const y = C.indexOf(v.currentTarget);
                  C = u.loop ? SS(C, y + 1) : C.slice(y + 1);
                }
                setTimeout(() => Bd(C));
              }
            })
          }
        )
      }
    );
  }
);
Vd.displayName = Od;
var bS = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function CS(e, t) {
  return t !== "rtl" ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e;
}
function MS(e, t, n) {
  const r = CS(e.key, n);
  if (!(t === "vertical" && ["ArrowLeft", "ArrowRight"].includes(r)) && !(t === "horizontal" && ["ArrowUp", "ArrowDown"].includes(r)))
    return bS[r];
}
function Bd(e, t = !1) {
  const n = document.activeElement;
  for (const r of e)
    if (r === n || (r.focus({ preventScroll: t }), document.activeElement !== n)) return;
}
function SS(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
var Ld = Id, $d = Vd, Ka = ["Enter", " "], RS = ["ArrowDown", "PageUp", "Home"], zd = ["ArrowUp", "PageDown", "End"], _S = [...RS, ...zd], PS = {
  ltr: [...Ka, "ArrowRight"],
  rtl: [...Ka, "ArrowLeft"]
}, AS = {
  ltr: ["ArrowLeft"],
  rtl: ["ArrowRight"]
}, vr = "Menu", [nr, TS, NS] = hr(vr), [cn, Hd] = Et(vr, [
  NS,
  co,
  Bo
]), Lo = co(), Wd = Bo(), [DS, un] = cn(vr), [kS, gr] = cn(vr), Ud = (e) => {
  const { __scopeMenu: t, open: n = !1, children: r, dir: o, onOpenChange: i, modal: s = !0 } = e, l = Lo(t), [c, u] = h.useState(null), d = h.useRef(!1), f = xe(i), p = kn(o);
  return h.useEffect(() => {
    const m = () => {
      d.current = !0, document.addEventListener("pointerdown", v, { capture: !0, once: !0 }), document.addEventListener("pointermove", v, { capture: !0, once: !0 });
    }, v = () => d.current = !1;
    return document.addEventListener("keydown", m, { capture: !0 }), () => {
      document.removeEventListener("keydown", m, { capture: !0 }), document.removeEventListener("pointerdown", v, { capture: !0 }), document.removeEventListener("pointermove", v, { capture: !0 });
    };
  }, []), /* @__PURE__ */ a(q0, { ...l, children: /* @__PURE__ */ a(
    DS,
    {
      scope: t,
      open: n,
      onOpenChange: f,
      content: c,
      onContentChange: u,
      children: /* @__PURE__ */ a(
        kS,
        {
          scope: t,
          onClose: h.useCallback(() => f(!1), [f]),
          isUsingKeyboardRef: d,
          dir: p,
          modal: s,
          children: r
        }
      )
    }
  ) });
};
Ud.displayName = vr;
var ES = "MenuAnchor", is = h.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e, o = Lo(n);
    return /* @__PURE__ */ a(j0, { ...o, ...r, ref: t });
  }
);
is.displayName = ES;
var ss = "MenuPortal", [FS, Gd] = cn(ss, {
  forceMount: void 0
}), jd = (e) => {
  const { __scopeMenu: t, forceMount: n, children: r, container: o } = e, i = un(ss, t);
  return /* @__PURE__ */ a(FS, { scope: t, forceMount: n, children: /* @__PURE__ */ a(Oe, { present: n || i.open, children: /* @__PURE__ */ a(ho, { asChild: !0, container: o, children: r }) }) });
};
jd.displayName = ss;
var Je = "MenuContent", [IS, ls] = cn(Je), Kd = h.forwardRef(
  (e, t) => {
    const n = Gd(Je, e.__scopeMenu), { forceMount: r = n.forceMount, ...o } = e, i = un(Je, e.__scopeMenu), s = gr(Je, e.__scopeMenu);
    return /* @__PURE__ */ a(nr.Provider, { scope: e.__scopeMenu, children: /* @__PURE__ */ a(Oe, { present: r || i.open, children: /* @__PURE__ */ a(nr.Slot, { scope: e.__scopeMenu, children: s.modal ? /* @__PURE__ */ a(OS, { ...o, ref: t }) : /* @__PURE__ */ a(VS, { ...o, ref: t }) }) }) });
  }
), OS = h.forwardRef(
  (e, t) => {
    const n = un(Je, e.__scopeMenu), r = h.useRef(null), o = te(t, r);
    return h.useEffect(() => {
      const i = r.current;
      if (i) return Ji(i);
    }, []), /* @__PURE__ */ a(
      cs,
      {
        ...e,
        ref: o,
        trapFocus: n.open,
        disableOutsidePointerEvents: n.open,
        disableOutsideScroll: !0,
        onFocusOutside: V(
          e.onFocusOutside,
          (i) => i.preventDefault(),
          { checkForDefaultPrevented: !1 }
        ),
        onDismiss: () => n.onOpenChange(!1)
      }
    );
  }
), VS = h.forwardRef((e, t) => {
  const n = un(Je, e.__scopeMenu);
  return /* @__PURE__ */ a(
    cs,
    {
      ...e,
      ref: t,
      trapFocus: !1,
      disableOutsidePointerEvents: !1,
      disableOutsideScroll: !1,
      onDismiss: () => n.onOpenChange(!1)
    }
  );
}), cs = h.forwardRef(
  (e, t) => {
    const {
      __scopeMenu: n,
      loop: r = !1,
      trapFocus: o,
      onOpenAutoFocus: i,
      onCloseAutoFocus: s,
      disableOutsidePointerEvents: l,
      onEntryFocus: c,
      onEscapeKeyDown: u,
      onPointerDownOutside: d,
      onFocusOutside: f,
      onInteractOutside: p,
      onDismiss: m,
      disableOutsideScroll: v,
      ...g
    } = e, x = un(Je, n), C = gr(Je, n), y = Lo(n), M = Wd(n), _ = TS(n), [P, E] = h.useState(null), L = h.useRef(null), N = te(t, L, x.onContentChange), k = h.useRef(0), z = h.useRef(""), Q = h.useRef(0), H = h.useRef(null), q = h.useRef("right"), J = h.useRef(0), G = v ? Do : h.Fragment, Z = v ? { as: Mn, allowPinchZoom: !0 } : void 0, I = (W) => {
      var j, ae;
      const ue = z.current + W, ge = _().filter((de) => !de.disabled), ke = document.activeElement, xt = (j = ge.find((de) => de.ref.current === ke)) == null ? void 0 : j.textValue, Ue = ge.map((de) => de.textValue), bt = qS(Ue, ue, xt), Ee = (ae = ge.find((de) => de.textValue === bt)) == null ? void 0 : ae.ref.current;
      (function de(se) {
        z.current = se, window.clearTimeout(k.current), se !== "" && (k.current = window.setTimeout(() => de(""), 1e3));
      })(ue), Ee && setTimeout(() => Ee.focus());
    };
    h.useEffect(() => () => window.clearTimeout(k.current), []), Qi();
    const O = h.useCallback((W) => {
      var ge, ke;
      return q.current === ((ge = H.current) == null ? void 0 : ge.side) && ZS(W, (ke = H.current) == null ? void 0 : ke.area);
    }, []);
    return /* @__PURE__ */ a(
      IS,
      {
        scope: n,
        searchRef: z,
        onItemEnter: h.useCallback(
          (W) => {
            O(W) && W.preventDefault();
          },
          [O]
        ),
        onItemLeave: h.useCallback(
          (W) => {
            var ue;
            O(W) || ((ue = L.current) == null || ue.focus(), E(null));
          },
          [O]
        ),
        onTriggerLeave: h.useCallback(
          (W) => {
            O(W) && W.preventDefault();
          },
          [O]
        ),
        pointerGraceTimerRef: Q,
        onPointerGraceIntentChange: h.useCallback((W) => {
          H.current = W;
        }, []),
        children: /* @__PURE__ */ a(G, { ...Z, children: /* @__PURE__ */ a(
          To,
          {
            asChild: !0,
            trapped: o,
            onMountAutoFocus: V(i, (W) => {
              var ue;
              W.preventDefault(), (ue = L.current) == null || ue.focus({ preventScroll: !0 });
            }),
            onUnmountAutoFocus: s,
            children: /* @__PURE__ */ a(
              uo,
              {
                asChild: !0,
                disableOutsidePointerEvents: l,
                onEscapeKeyDown: u,
                onPointerDownOutside: d,
                onFocusOutside: f,
                onInteractOutside: p,
                onDismiss: m,
                children: /* @__PURE__ */ a(
                  Ld,
                  {
                    asChild: !0,
                    ...M,
                    dir: C.dir,
                    orientation: "vertical",
                    loop: r,
                    currentTabStopId: P,
                    onCurrentTabStopIdChange: E,
                    onEntryFocus: V(c, (W) => {
                      C.isUsingKeyboardRef.current || W.preventDefault();
                    }),
                    preventScrollOnEntryFocus: !0,
                    children: /* @__PURE__ */ a(
                      K0,
                      {
                        role: "menu",
                        "aria-orientation": "vertical",
                        "data-state": uf(x.open),
                        "data-radix-menu-content": "",
                        dir: C.dir,
                        ...y,
                        ...g,
                        ref: N,
                        style: { outline: "none", ...g.style },
                        onKeyDown: V(g.onKeyDown, (W) => {
                          const ge = W.target.closest("[data-radix-menu-content]") === W.currentTarget, ke = W.ctrlKey || W.altKey || W.metaKey, xt = W.key.length === 1;
                          ge && (W.key === "Tab" && W.preventDefault(), !ke && xt && I(W.key));
                          const Ue = L.current;
                          if (W.target !== Ue || !_S.includes(W.key)) return;
                          W.preventDefault();
                          const Ee = _().filter((j) => !j.disabled).map((j) => j.ref.current);
                          zd.includes(W.key) && Ee.reverse(), KS(Ee);
                        }),
                        onBlur: V(e.onBlur, (W) => {
                          W.currentTarget.contains(W.target) || (window.clearTimeout(k.current), z.current = "");
                        }),
                        onPointerMove: V(
                          e.onPointerMove,
                          rr((W) => {
                            const ue = W.target, ge = J.current !== W.clientX;
                            if (W.currentTarget.contains(ue) && ge) {
                              const ke = W.clientX > J.current ? "right" : "left";
                              q.current = ke, J.current = W.clientX;
                            }
                          })
                        )
                      }
                    )
                  }
                )
              }
            )
          }
        ) })
      }
    );
  }
);
Kd.displayName = Je;
var BS = "MenuGroup", us = h.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e;
    return /* @__PURE__ */ a(Y.div, { role: "group", ...r, ref: t });
  }
);
us.displayName = BS;
var LS = "MenuLabel", Yd = h.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e;
    return /* @__PURE__ */ a(Y.div, { ...r, ref: t });
  }
);
Yd.displayName = LS;
var no = "MenuItem", V0 = "menu.itemSelect", $o = h.forwardRef(
  (e, t) => {
    const { disabled: n = !1, onSelect: r, ...o } = e, i = h.useRef(null), s = gr(no, e.__scopeMenu), l = ls(no, e.__scopeMenu), c = te(t, i), u = h.useRef(!1), d = () => {
      const f = i.current;
      if (!n && f) {
        const p = new CustomEvent(V0, { bubbles: !0, cancelable: !0 });
        f.addEventListener(V0, (m) => r == null ? void 0 : r(m), { once: !0 }), ba(f, p), p.defaultPrevented ? u.current = !1 : s.onClose();
      }
    };
    return /* @__PURE__ */ a(
      qd,
      {
        ...o,
        ref: c,
        disabled: n,
        onClick: V(e.onClick, d),
        onPointerDown: (f) => {
          var p;
          (p = e.onPointerDown) == null || p.call(e, f), u.current = !0;
        },
        onPointerUp: V(e.onPointerUp, (f) => {
          var p;
          u.current || (p = f.currentTarget) == null || p.click();
        }),
        onKeyDown: V(e.onKeyDown, (f) => {
          const p = l.searchRef.current !== "";
          n || p && f.key === " " || Ka.includes(f.key) && (f.currentTarget.click(), f.preventDefault());
        })
      }
    );
  }
);
$o.displayName = no;
var qd = h.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, disabled: r = !1, textValue: o, ...i } = e, s = ls(no, n), l = Wd(n), c = h.useRef(null), u = te(t, c), [d, f] = h.useState(!1), [p, m] = h.useState("");
    return h.useEffect(() => {
      const v = c.current;
      v && m((v.textContent ?? "").trim());
    }, [i.children]), /* @__PURE__ */ a(
      nr.ItemSlot,
      {
        scope: n,
        disabled: r,
        textValue: o ?? p,
        children: /* @__PURE__ */ a($d, { asChild: !0, ...l, focusable: !r, children: /* @__PURE__ */ a(
          Y.div,
          {
            role: "menuitem",
            "data-highlighted": d ? "" : void 0,
            "aria-disabled": r || void 0,
            "data-disabled": r ? "" : void 0,
            ...i,
            ref: u,
            onPointerMove: V(
              e.onPointerMove,
              rr((v) => {
                r ? s.onItemLeave(v) : (s.onItemEnter(v), v.defaultPrevented || v.currentTarget.focus({ preventScroll: !0 }));
              })
            ),
            onPointerLeave: V(
              e.onPointerLeave,
              rr((v) => s.onItemLeave(v))
            ),
            onFocus: V(e.onFocus, () => f(!0)),
            onBlur: V(e.onBlur, () => f(!1))
          }
        ) })
      }
    );
  }
), $S = "MenuCheckboxItem", Xd = h.forwardRef(
  (e, t) => {
    const { checked: n = !1, onCheckedChange: r, ...o } = e;
    return /* @__PURE__ */ a(tf, { scope: e.__scopeMenu, checked: n, children: /* @__PURE__ */ a(
      $o,
      {
        role: "menuitemcheckbox",
        "aria-checked": ro(n) ? "mixed" : n,
        ...o,
        ref: t,
        "data-state": fs(n),
        onSelect: V(
          o.onSelect,
          () => r == null ? void 0 : r(ro(n) ? !0 : !n),
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
);
Xd.displayName = $S;
var Zd = "MenuRadioGroup", [zS, HS] = cn(
  Zd,
  { value: void 0, onValueChange: () => {
  } }
), Qd = h.forwardRef(
  (e, t) => {
    const { value: n, onValueChange: r, ...o } = e, i = xe(r);
    return /* @__PURE__ */ a(zS, { scope: e.__scopeMenu, value: n, onValueChange: i, children: /* @__PURE__ */ a(us, { ...o, ref: t }) });
  }
);
Qd.displayName = Zd;
var Jd = "MenuRadioItem", ef = h.forwardRef(
  (e, t) => {
    const { value: n, ...r } = e, o = HS(Jd, e.__scopeMenu), i = n === o.value;
    return /* @__PURE__ */ a(tf, { scope: e.__scopeMenu, checked: i, children: /* @__PURE__ */ a(
      $o,
      {
        role: "menuitemradio",
        "aria-checked": i,
        ...r,
        ref: t,
        "data-state": fs(i),
        onSelect: V(
          r.onSelect,
          () => {
            var s;
            return (s = o.onValueChange) == null ? void 0 : s.call(o, n);
          },
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
);
ef.displayName = Jd;
var ds = "MenuItemIndicator", [tf, WS] = cn(
  ds,
  { checked: !1 }
), nf = h.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, forceMount: r, ...o } = e, i = WS(ds, n);
    return /* @__PURE__ */ a(
      Oe,
      {
        present: r || ro(i.checked) || i.checked === !0,
        children: /* @__PURE__ */ a(
          Y.span,
          {
            ...o,
            ref: t,
            "data-state": fs(i.checked)
          }
        )
      }
    );
  }
);
nf.displayName = ds;
var US = "MenuSeparator", rf = h.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e;
    return /* @__PURE__ */ a(
      Y.div,
      {
        role: "separator",
        "aria-orientation": "horizontal",
        ...r,
        ref: t
      }
    );
  }
);
rf.displayName = US;
var GS = "MenuArrow", of = h.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e, o = Lo(n);
    return /* @__PURE__ */ a(Y0, { ...o, ...r, ref: t });
  }
);
of.displayName = GS;
var jS = "MenuSub", [RA, af] = cn(jS), Wn = "MenuSubTrigger", sf = h.forwardRef(
  (e, t) => {
    const n = un(Wn, e.__scopeMenu), r = gr(Wn, e.__scopeMenu), o = af(Wn, e.__scopeMenu), i = ls(Wn, e.__scopeMenu), s = h.useRef(null), { pointerGraceTimerRef: l, onPointerGraceIntentChange: c } = i, u = { __scopeMenu: e.__scopeMenu }, d = h.useCallback(() => {
      s.current && window.clearTimeout(s.current), s.current = null;
    }, []);
    return h.useEffect(() => d, [d]), h.useEffect(() => {
      const f = l.current;
      return () => {
        window.clearTimeout(f), c(null);
      };
    }, [l, c]), /* @__PURE__ */ a(is, { asChild: !0, ...u, children: /* @__PURE__ */ a(
      qd,
      {
        id: o.triggerId,
        "aria-haspopup": "menu",
        "aria-expanded": n.open,
        "aria-controls": o.contentId,
        "data-state": uf(n.open),
        ...e,
        ref: ri(t, o.onTriggerChange),
        onClick: (f) => {
          var p;
          (p = e.onClick) == null || p.call(e, f), !(e.disabled || f.defaultPrevented) && (f.currentTarget.focus(), n.open || n.onOpenChange(!0));
        },
        onPointerMove: V(
          e.onPointerMove,
          rr((f) => {
            i.onItemEnter(f), !f.defaultPrevented && !e.disabled && !n.open && !s.current && (i.onPointerGraceIntentChange(null), s.current = window.setTimeout(() => {
              n.onOpenChange(!0), d();
            }, 100));
          })
        ),
        onPointerLeave: V(
          e.onPointerLeave,
          rr((f) => {
            var m, v;
            d();
            const p = (m = n.content) == null ? void 0 : m.getBoundingClientRect();
            if (p) {
              const g = (v = n.content) == null ? void 0 : v.dataset.side, x = g === "right", C = x ? -5 : 5, y = p[x ? "left" : "right"], M = p[x ? "right" : "left"];
              i.onPointerGraceIntentChange({
                area: [
                  // Apply a bleed on clientX to ensure that our exit point is
                  // consistently within polygon bounds
                  { x: f.clientX + C, y: f.clientY },
                  { x: y, y: p.top },
                  { x: M, y: p.top },
                  { x: M, y: p.bottom },
                  { x: y, y: p.bottom }
                ],
                side: g
              }), window.clearTimeout(l.current), l.current = window.setTimeout(
                () => i.onPointerGraceIntentChange(null),
                300
              );
            } else {
              if (i.onTriggerLeave(f), f.defaultPrevented) return;
              i.onPointerGraceIntentChange(null);
            }
          })
        ),
        onKeyDown: V(e.onKeyDown, (f) => {
          var m;
          const p = i.searchRef.current !== "";
          e.disabled || p && f.key === " " || PS[r.dir].includes(f.key) && (n.onOpenChange(!0), (m = n.content) == null || m.focus(), f.preventDefault());
        })
      }
    ) });
  }
);
sf.displayName = Wn;
var lf = "MenuSubContent", cf = h.forwardRef(
  (e, t) => {
    const n = Gd(Je, e.__scopeMenu), { forceMount: r = n.forceMount, ...o } = e, i = un(Je, e.__scopeMenu), s = gr(Je, e.__scopeMenu), l = af(lf, e.__scopeMenu), c = h.useRef(null), u = te(t, c);
    return /* @__PURE__ */ a(nr.Provider, { scope: e.__scopeMenu, children: /* @__PURE__ */ a(Oe, { present: r || i.open, children: /* @__PURE__ */ a(nr.Slot, { scope: e.__scopeMenu, children: /* @__PURE__ */ a(
      cs,
      {
        id: l.contentId,
        "aria-labelledby": l.triggerId,
        ...o,
        ref: u,
        align: "start",
        side: s.dir === "rtl" ? "left" : "right",
        disableOutsidePointerEvents: !1,
        disableOutsideScroll: !1,
        trapFocus: !1,
        onOpenAutoFocus: (d) => {
          var f;
          s.isUsingKeyboardRef.current && ((f = c.current) == null || f.focus()), d.preventDefault();
        },
        onCloseAutoFocus: (d) => d.preventDefault(),
        onFocusOutside: V(e.onFocusOutside, (d) => {
          d.target !== l.trigger && i.onOpenChange(!1);
        }),
        onEscapeKeyDown: V(e.onEscapeKeyDown, (d) => {
          s.onClose(), d.preventDefault();
        }),
        onKeyDown: V(e.onKeyDown, (d) => {
          var m;
          const f = d.currentTarget.contains(d.target), p = AS[s.dir].includes(d.key);
          f && p && (i.onOpenChange(!1), (m = l.trigger) == null || m.focus(), d.preventDefault());
        })
      }
    ) }) }) });
  }
);
cf.displayName = lf;
function uf(e) {
  return e ? "open" : "closed";
}
function ro(e) {
  return e === "indeterminate";
}
function fs(e) {
  return ro(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
function KS(e) {
  const t = document.activeElement;
  for (const n of e)
    if (n === t || (n.focus(), document.activeElement !== t)) return;
}
function YS(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
function qS(e, t, n) {
  const o = t.length > 1 && Array.from(t).every((u) => u === t[0]) ? t[0] : t, i = n ? e.indexOf(n) : -1;
  let s = YS(e, Math.max(i, 0));
  o.length === 1 && (s = s.filter((u) => u !== n));
  const c = s.find(
    (u) => u.toLowerCase().startsWith(o.toLowerCase())
  );
  return c !== n ? c : void 0;
}
function XS(e, t) {
  const { x: n, y: r } = e;
  let o = !1;
  for (let i = 0, s = t.length - 1; i < t.length; s = i++) {
    const l = t[i].x, c = t[i].y, u = t[s].x, d = t[s].y;
    c > r != d > r && n < (u - l) * (r - c) / (d - c) + l && (o = !o);
  }
  return o;
}
function ZS(e, t) {
  if (!t) return !1;
  const n = { x: e.clientX, y: e.clientY };
  return XS(n, t);
}
function rr(e) {
  return (t) => t.pointerType === "mouse" ? e(t) : void 0;
}
var QS = Ud, JS = is, eR = jd, tR = Kd, nR = us, rR = Yd, oR = $o, aR = Xd, iR = Qd, sR = ef, lR = nf, cR = rf, uR = of, dR = sf, fR = cf, hs = "DropdownMenu", [hR, _A] = Et(
  hs,
  [Hd]
), Ve = Hd(), [pR, df] = hR(hs), ff = (e) => {
  const {
    __scopeDropdownMenu: t,
    children: n,
    dir: r,
    open: o,
    defaultOpen: i,
    onOpenChange: s,
    modal: l = !0
  } = e, c = Ve(t), u = h.useRef(null), [d = !1, f] = ot({
    prop: o,
    defaultProp: i,
    onChange: s
  });
  return /* @__PURE__ */ a(
    pR,
    {
      scope: t,
      triggerId: Qe(),
      triggerRef: u,
      contentId: Qe(),
      open: d,
      onOpenChange: f,
      onOpenToggle: h.useCallback(() => f((p) => !p), [f]),
      modal: l,
      children: /* @__PURE__ */ a(QS, { ...c, open: d, onOpenChange: f, dir: r, modal: l, children: n })
    }
  );
};
ff.displayName = hs;
var hf = "DropdownMenuTrigger", pf = h.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, disabled: r = !1, ...o } = e, i = df(hf, n), s = Ve(n);
    return /* @__PURE__ */ a(JS, { asChild: !0, ...s, children: /* @__PURE__ */ a(
      Y.button,
      {
        type: "button",
        id: i.triggerId,
        "aria-haspopup": "menu",
        "aria-expanded": i.open,
        "aria-controls": i.open ? i.contentId : void 0,
        "data-state": i.open ? "open" : "closed",
        "data-disabled": r ? "" : void 0,
        disabled: r,
        ...o,
        ref: ri(t, i.triggerRef),
        onPointerDown: V(e.onPointerDown, (l) => {
          !r && l.button === 0 && l.ctrlKey === !1 && (i.onOpenToggle(), i.open || l.preventDefault());
        }),
        onKeyDown: V(e.onKeyDown, (l) => {
          r || (["Enter", " "].includes(l.key) && i.onOpenToggle(), l.key === "ArrowDown" && i.onOpenChange(!0), ["Enter", " ", "ArrowDown"].includes(l.key) && l.preventDefault());
        })
      }
    ) });
  }
);
pf.displayName = hf;
var mR = "DropdownMenuPortal", mf = (e) => {
  const { __scopeDropdownMenu: t, ...n } = e, r = Ve(t);
  return /* @__PURE__ */ a(eR, { ...r, ...n });
};
mf.displayName = mR;
var vf = "DropdownMenuContent", gf = h.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, o = df(vf, n), i = Ve(n), s = h.useRef(!1);
    return /* @__PURE__ */ a(
      tR,
      {
        id: o.contentId,
        "aria-labelledby": o.triggerId,
        ...i,
        ...r,
        ref: t,
        onCloseAutoFocus: V(e.onCloseAutoFocus, (l) => {
          var c;
          s.current || (c = o.triggerRef.current) == null || c.focus(), s.current = !1, l.preventDefault();
        }),
        onInteractOutside: V(e.onInteractOutside, (l) => {
          const c = l.detail.originalEvent, u = c.button === 0 && c.ctrlKey === !0, d = c.button === 2 || u;
          (!o.modal || d) && (s.current = !0);
        }),
        style: {
          ...e.style,
          "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
          "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
          "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
          "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
          "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
        }
      }
    );
  }
);
gf.displayName = vf;
var vR = "DropdownMenuGroup", gR = h.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, o = Ve(n);
    return /* @__PURE__ */ a(nR, { ...o, ...r, ref: t });
  }
);
gR.displayName = vR;
var wR = "DropdownMenuLabel", wf = h.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, o = Ve(n);
    return /* @__PURE__ */ a(rR, { ...o, ...r, ref: t });
  }
);
wf.displayName = wR;
var yR = "DropdownMenuItem", yf = h.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, o = Ve(n);
    return /* @__PURE__ */ a(oR, { ...o, ...r, ref: t });
  }
);
yf.displayName = yR;
var xR = "DropdownMenuCheckboxItem", xf = h.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = Ve(n);
  return /* @__PURE__ */ a(aR, { ...o, ...r, ref: t });
});
xf.displayName = xR;
var bR = "DropdownMenuRadioGroup", CR = h.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = Ve(n);
  return /* @__PURE__ */ a(iR, { ...o, ...r, ref: t });
});
CR.displayName = bR;
var MR = "DropdownMenuRadioItem", bf = h.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = Ve(n);
  return /* @__PURE__ */ a(sR, { ...o, ...r, ref: t });
});
bf.displayName = MR;
var SR = "DropdownMenuItemIndicator", Cf = h.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = Ve(n);
  return /* @__PURE__ */ a(lR, { ...o, ...r, ref: t });
});
Cf.displayName = SR;
var RR = "DropdownMenuSeparator", Mf = h.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = Ve(n);
  return /* @__PURE__ */ a(cR, { ...o, ...r, ref: t });
});
Mf.displayName = RR;
var _R = "DropdownMenuArrow", PR = h.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, o = Ve(n);
    return /* @__PURE__ */ a(uR, { ...o, ...r, ref: t });
  }
);
PR.displayName = _R;
var AR = "DropdownMenuSubTrigger", Sf = h.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = Ve(n);
  return /* @__PURE__ */ a(dR, { ...o, ...r, ref: t });
});
Sf.displayName = AR;
var TR = "DropdownMenuSubContent", Rf = h.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = Ve(n);
  return /* @__PURE__ */ a(
    fR,
    {
      ...o,
      ...r,
      ref: t,
      style: {
        ...e.style,
        "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
        "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
        "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
        "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
        "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
      }
    }
  );
});
Rf.displayName = TR;
var NR = ff, DR = pf, kR = mf, _f = gf, Pf = wf, Af = yf, Tf = xf, Nf = bf, Df = Cf, kf = Mf, Ef = Sf, Ff = Rf;
const ER = NR, FR = DR, IR = h.forwardRef(({ className: e, inset: t, children: n, ...r }, o) => /* @__PURE__ */ b(
  Ef,
  {
    ref: o,
    className: T(
      "flex cursor-default select-none items-center rounded-2xs px-2 py-1.5 text-sm outline-none focus:bg-f1-background-secondary data-[state=open]:bg-f1-background-secondary",
      t && "pl-8",
      e
    ),
    ...r,
    children: [
      n,
      /* @__PURE__ */ a(Li, { className: "ml-auto h-4 w-4" })
    ]
  }
));
IR.displayName = Ef.displayName;
const OR = h.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ a(
  Ff,
  {
    ref: n,
    className: T(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-f1-background text-f1-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    ...t
  }
));
OR.displayName = Ff.displayName;
const If = h.forwardRef(({ className: e, sideOffset: t = 4, ...n }, r) => /* @__PURE__ */ a(kR, { children: /* @__PURE__ */ a(
  _f,
  {
    ref: r,
    sideOffset: t,
    className: T(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border border-solid border-f1-border bg-f1-background text-f1-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    ...n
  }
) }));
If.displayName = _f.displayName;
const Of = h.forwardRef(({ className: e, inset: t, ...n }, r) => /* @__PURE__ */ a(
  Af,
  {
    ref: r,
    className: T(
      "relative flex cursor-default select-none items-center rounded p-2 text-base font-medium outline-none transition-colors hover:bg-f1-background-secondary focus:bg-f1-background-secondary data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      t && "pl-8",
      e
    ),
    ...n
  }
));
Of.displayName = Af.displayName;
const VR = h.forwardRef(({ className: e, children: t, checked: n, ...r }, o) => /* @__PURE__ */ b(
  Tf,
  {
    ref: o,
    className: T(
      "relative flex cursor-default select-none items-center rounded-xs py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-f1-background-secondary focus:text-f1-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    checked: n,
    ...r,
    children: [
      /* @__PURE__ */ a("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ a(Df, { children: /* @__PURE__ */ a(uy, { className: "h-4 w-4" }) }) }),
      t
    ]
  }
));
VR.displayName = Tf.displayName;
const BR = h.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ b(
  Nf,
  {
    ref: r,
    className: T(
      "relative flex cursor-default select-none items-center rounded-xs py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-f1-background-secondary focus:text-f1-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    ...n,
    children: [
      /* @__PURE__ */ a("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ a(Df, { children: /* @__PURE__ */ a(my, { className: "h-2 w-2 fill-current" }) }) }),
      t
    ]
  }
));
BR.displayName = Nf.displayName;
const LR = h.forwardRef(({ className: e, inset: t, ...n }, r) => /* @__PURE__ */ a(
  Pf,
  {
    ref: r,
    className: T(
      "px-2 py-1.5 text-sm font-semibold",
      t && "pl-8",
      e
    ),
    ...n
  }
));
LR.displayName = Pf.displayName;
const $R = h.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ a(
  kf,
  {
    ref: n,
    className: T("-mx-1 my-1 h-px bg-f1-background-secondary", e),
    ...t
  }
));
$R.displayName = kf.displayName;
const zR = ({ item: e }) => {
  const { label: t, ...n } = e, r = e.icon && Po[e.icon], o = /* @__PURE__ */ b(me, { children: [
    r && /* @__PURE__ */ a(
      r,
      {
        className: T(
          "h-5 w-5 text-f1-icon",
          e.critical && "text-f1-icon-critical"
        )
      }
    ),
    /* @__PURE__ */ b("div", { className: "flex flex-col items-start", children: [
      t,
      e.description && /* @__PURE__ */ a(
        "div",
        {
          className: T(
            "font-normal text-f1-foreground-secondary",
            e.critical && "text-f1-foreground-critical"
          ),
          children: e.description
        }
      )
    ] })
  ] }), i = T(
    "flex items-start gap-1.5 w-full",
    e.critical && "text-f1-foreground-critical"
  );
  return /* @__PURE__ */ a(Of, { asChild: !0, onClick: e.onClick, className: i, children: e.href ? /* @__PURE__ */ a(
    Tn,
    {
      href: e.href,
      className: T(i, "text-f1-foreground no-underline"),
      ...n,
      children: o
    }
  ) : /* @__PURE__ */ a("div", { className: i, children: o }) });
};
function Vf({ items: e, children: t }) {
  return /* @__PURE__ */ b(ER, { children: [
    /* @__PURE__ */ a(FR, { asChild: !0, children: t || /* @__PURE__ */ a(
      nn,
      {
        hideLabel: !0,
        icon: Yc,
        label: "...",
        round: !0,
        variant: "outline"
      }
    ) }),
    /* @__PURE__ */ a(If, { className: "min-w-[var(--radix-dropdown-menu-trigger-width)]", children: /* @__PURE__ */ a("div", { className: "flex flex-col p-1", children: e.map((n, r) => /* @__PURE__ */ a(
      zR,
      {
        item: {
          ...n,
          onClick: n.onClick
        }
      },
      r
    )) }) })
  ] });
}
function B0({ item: e, isLast: t }) {
  const { label: n, ...r } = e;
  return /* @__PURE__ */ a(Dd, { children: t ? /* @__PURE__ */ a(Ed, { children: e.label }) : /* @__PURE__ */ b(me, { children: [
    /* @__PURE__ */ a(
      kd,
      {
        className: T("max-w-40", e.icon && "pl-0.5"),
        asChild: !0,
        children: /* @__PURE__ */ b(
          Tn,
          {
            ...r,
            className: T("flex items-center gap-1.5", Ft()),
            children: [
              e.icon && /* @__PURE__ */ a(_d, { icon: e.icon, size: "sm" }),
              /* @__PURE__ */ a("span", { className: "truncate", children: e.label })
            ]
          }
        )
      }
    ),
    /* @__PURE__ */ a(as, { children: /* @__PURE__ */ a(_o, { className: "h-4 w-4 text-f1-icon-secondary" }) })
  ] }) });
}
function HR({ breadcrumbs: e }) {
  const [t, n] = be(2), r = ze(null);
  We(() => {
    const l = r.current;
    if (!l) return;
    const c = () => {
      if (!r.current || e.length <= 2) {
        n(e.length);
        return;
      }
      const d = r.current.offsetWidth, f = 150, p = 50;
      let m = d - f, v = 1;
      for (let g = e.length - 1; g > 0 && !(m < f); g--)
        m -= f, v++;
      if (v < e.length - 1)
        for (m -= p; m < 0 && v > 1; )
          m += f, v--;
      n(v);
    }, u = new ResizeObserver(() => {
      c();
    });
    return u.observe(l), c(), () => {
      u.disconnect();
    };
  }, [e]);
  const o = e[0], i = e.slice(-t + 1), s = e.slice(1, -t + 1);
  return /* @__PURE__ */ a(Td, { ref: r, className: "w-full", children: /* @__PURE__ */ b(Nd, { children: [
    /* @__PURE__ */ a(B0, { item: o, isLast: !1 }),
    s.length > 0 && /* @__PURE__ */ b(me, { children: [
      /* @__PURE__ */ a(Vf, { items: s, children: /* @__PURE__ */ a("li", { className: "rounded-sm px-1.5 py-0.5 font-medium text-f1-foreground no-underline transition-colors hover:bg-f1-background-secondary", children: "..." }) }),
      /* @__PURE__ */ a(as, { children: /* @__PURE__ */ a(_o, { className: "h-4 w-4 text-f1-icon-secondary" }) })
    ] }),
    i.map((l, c) => /* @__PURE__ */ a(
      B0,
      {
        item: l,
        isLast: c === i.length - 1
      },
      c
    ))
  ] }) });
}
function PA({
  module: e,
  breadcrumbs: t = [],
  actions: n = []
}) {
  const { sidebarState: r, toggleSidebar: o } = Oo(), i = [
    { label: e.name, href: e.href, icon: e.icon },
    ...t
  ], s = t.length > 0;
  return /* @__PURE__ */ b(
    "div",
    {
      className: T(
        "flex h-16 items-center justify-between bg-f1-background/80 px-5 py-4 backdrop-blur-xl xs:px-6",
        s && "border-b border-dashed border-transparent border-b-f1-border/80"
      ),
      children: [
        /* @__PURE__ */ b("div", { className: "flex flex-grow items-center", children: [
          /* @__PURE__ */ a(ki, { children: r !== "locked" && /* @__PURE__ */ a(
            Wt.div,
            {
              initial: { opacity: 0, width: 0 },
              animate: { opacity: 1, width: "auto" },
              exit: { opacity: 0, width: 0 },
              children: /* @__PURE__ */ a("div", { className: "mr-3", children: /* @__PURE__ */ a(
                nn,
                {
                  variant: "ghost",
                  hideLabel: !0,
                  round: !0,
                  onClick: o,
                  label: "Menu",
                  icon: $c
                }
              ) })
            }
          ) }),
          /* @__PURE__ */ b("div", { className: "flex flex-grow items-center gap-3", children: [
            !s && /* @__PURE__ */ a(_d, { icon: e.icon, size: "lg" }),
            i.length > 1 ? /* @__PURE__ */ a(HR, { breadcrumbs: i }) : /* @__PURE__ */ a("div", { className: "text-xl font-semibold", children: e.name })
          ] })
        ] }),
        n && /* @__PURE__ */ a("div", { className: "flex items-center gap-2", children: n.map((l, c) => /* @__PURE__ */ a(
          nn,
          {
            hideLabel: !0,
            round: !0,
            variant: "outline",
            onClick: l.onClick,
            label: l.label,
            icon: l.icon
          },
          c
        )) })
      ]
    }
  );
}
function AA({ children: e, header: t }) {
  return /* @__PURE__ */ b("div", { className: "flex w-full flex-col overflow-hidden rounded-xl bg-f1-background shadow", children: [
    t && /* @__PURE__ */ a("div", { className: "flex flex-col", children: t }),
    e
  ] });
}
function WR({
  companies: e,
  selected: t,
  onChange: n
}) {
  var l;
  const [r, o] = be(!1), i = e.map((c) => ({
    value: c.id,
    label: c.name
  })), s = e.find((c) => c.id === t) || e[0];
  return /* @__PURE__ */ a(
    DM,
    {
      options: i,
      value: t,
      onChange: n,
      placeholder: "Select a company",
      open: r,
      onOpenChange: o,
      children: /* @__PURE__ */ b(
        "div",
        {
          className: T(
            "group flex w-fit flex-nowrap items-center gap-2 truncate rounded p-1.5 text-lg font-semibold text-f1-foreground transition-colors hover:bg-f1-background-secondary-hover data-[state=open]:bg-f1-background-secondary-hover",
            Ft()
          ),
          tabIndex: 0,
          title: s == null ? void 0 : s.name,
          children: [
            /* @__PURE__ */ a(
              ei,
              {
                alt: (l = s == null ? void 0 : s.name) == null ? void 0 : l[0],
                src: s == null ? void 0 : s.logo,
                size: "xsmall"
              }
            ),
            /* @__PURE__ */ a("span", { className: "truncate", children: s == null ? void 0 : s.name }),
            /* @__PURE__ */ a("div", { className: "h-6 w-6 shrink-0 p-1", children: /* @__PURE__ */ a("div", { className: "flex h-4 w-4 items-center justify-center rounded-xs bg-f1-background-secondary-hover transition-all group-hover:brightness-90 group-data-[state=open]:brightness-90", children: /* @__PURE__ */ a(
              Wt.div,
              {
                animate: { rotate: r ? 180 : 0 },
                transition: { duration: 0.2 },
                className: "flex h-3 w-3 items-center justify-center",
                children: /* @__PURE__ */ a(lr, { className: "h-3 w-3 shrink-0 text-f1-icon" })
              }
            ) }) })
          ]
        }
      )
    }
  );
}
function UR({ isExpanded: e }) {
  return /* @__PURE__ */ b(
    "svg",
    {
      width: "20",
      height: "20",
      viewBox: "0 0 20 20",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className: "text-f1-icon-bold",
      children: [
        /* @__PURE__ */ a(
          "rect",
          {
            id: "container",
            x: "3.33325",
            y: "5",
            width: "13.3333",
            height: "10",
            rx: "3",
            strokeWidth: "1.3",
            className: "stroke-current"
          }
        ),
        /* @__PURE__ */ a(
          "path",
          {
            id: "arrow",
            d: e ? "M10.417 10L14.167 10M10.417 10L12.0837 8.33337M10.417 10L12.0837 11.6667" : "M10.75 10L7 10M10.75 10L9.08333 8.33337M10.75 10L9.08333 11.6667",
            strokeWidth: "1.3",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            className: T(
              "translate-x-0 stroke-current transition-all duration-200 ease-out motion-reduce:transition-none",
              e ? "opacity-0 group-hover:-translate-x-1 group-hover:opacity-100" : "opacity-1 group-hover:translate-x-[3px]"
            )
          }
        ),
        /* @__PURE__ */ a(
          "path",
          {
            id: "line",
            d: "M7.5 5L7.5 15",
            strokeWidth: "1.3",
            strokeLinecap: "round",
            className: T(
              "stroke-current transition-all duration-200 ease-out motion-reduce:transition-none",
              e ? "translate-x-0 opacity-100 group-hover:-translate-x-0.5 group-hover:opacity-0" : "-translate-x-0.5 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
            )
          }
        )
      ]
    }
  );
}
function GR() {
  const { sidebarState: e, toggleSidebar: t, isSmallScreen: n } = Oo();
  return /* @__PURE__ */ b(
    ih,
    {
      variant: "ghost",
      size: "md",
      round: !0,
      onClick: t,
      className: "group",
      title: "Toggle Sidebar",
      children: [
        /* @__PURE__ */ a("div", { className: T("hidden", { flex: !n }), children: /* @__PURE__ */ a(UR, { isExpanded: e === "locked" }) }),
        /* @__PURE__ */ a("div", { className: T("hidden", { flex: n }), children: /* @__PURE__ */ a(gt, { icon: jc, size: "md" }) })
      ]
    }
  );
}
function TA({
  companies: e,
  selected: t,
  onChange: n
}) {
  return /* @__PURE__ */ b("div", { className: "flex h-[72px] items-center justify-between gap-3", children: [
    /* @__PURE__ */ a(
      WR,
      {
        companies: e,
        selected: t,
        onChange: n
      }
    ),
    /* @__PURE__ */ a(GR, {})
  ] });
}
function jR(e, t = []) {
  let n = [];
  function r(i, s) {
    const l = h.createContext(s), c = n.length;
    n = [...n, s];
    const u = (f) => {
      var C;
      const { scope: p, children: m, ...v } = f, g = ((C = p == null ? void 0 : p[e]) == null ? void 0 : C[c]) || l, x = h.useMemo(() => v, Object.values(v));
      return /* @__PURE__ */ a(g.Provider, { value: x, children: m });
    };
    u.displayName = i + "Provider";
    function d(f, p) {
      var g;
      const m = ((g = p == null ? void 0 : p[e]) == null ? void 0 : g[c]) || l, v = h.useContext(m);
      if (v) return v;
      if (s !== void 0) return s;
      throw new Error(`\`${f}\` must be used within \`${i}\``);
    }
    return [u, d];
  }
  const o = () => {
    const i = n.map((s) => h.createContext(s));
    return function(l) {
      const c = (l == null ? void 0 : l[e]) || i;
      return h.useMemo(
        () => ({ [`__scope${e}`]: { ...l, [e]: c } }),
        [l, c]
      );
    };
  };
  return o.scopeName = e, [r, KR(o, ...t)];
}
function KR(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const n = () => {
    const r = e.map((o) => ({
      useScope: o(),
      scopeName: o.scopeName
    }));
    return function(i) {
      const s = r.reduce((l, { useScope: c, scopeName: u }) => {
        const f = c(i)[`__scope${u}`];
        return { ...l, ...f };
      }, {});
      return h.useMemo(() => ({ [`__scope${t.scopeName}`]: s }), [s]);
    };
  };
  return n.scopeName = t.scopeName, n;
}
function YR(e, t) {
  return h.useReducer((n, r) => t[n][r] ?? n, e);
}
var Bf = (e) => {
  const { present: t, children: n } = e, r = qR(t), o = typeof n == "function" ? n({ present: r.isPresent }) : h.Children.only(n), i = te(r.ref, XR(o));
  return typeof n == "function" || r.isPresent ? h.cloneElement(o, { ref: i }) : null;
};
Bf.displayName = "Presence";
function qR(e) {
  const [t, n] = h.useState(), r = h.useRef({}), o = h.useRef(e), i = h.useRef("none"), s = e ? "mounted" : "unmounted", [l, c] = YR(s, {
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
  return h.useEffect(() => {
    const u = Dr(r.current);
    i.current = l === "mounted" ? u : "none";
  }, [l]), Ne(() => {
    const u = r.current, d = o.current;
    if (d !== e) {
      const p = i.current, m = Dr(u);
      e ? c("MOUNT") : m === "none" || (u == null ? void 0 : u.display) === "none" ? c("UNMOUNT") : c(d && p !== m ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e;
    }
  }, [e, c]), Ne(() => {
    if (t) {
      let u;
      const d = t.ownerDocument.defaultView ?? window, f = (m) => {
        const g = Dr(r.current).includes(m.animationName);
        if (m.target === t && g && (c("ANIMATION_END"), !o.current)) {
          const x = t.style.animationFillMode;
          t.style.animationFillMode = "forwards", u = d.setTimeout(() => {
            t.style.animationFillMode === "forwards" && (t.style.animationFillMode = x);
          });
        }
      }, p = (m) => {
        m.target === t && (i.current = Dr(r.current));
      };
      return t.addEventListener("animationstart", p), t.addEventListener("animationcancel", f), t.addEventListener("animationend", f), () => {
        d.clearTimeout(u), t.removeEventListener("animationstart", p), t.removeEventListener("animationcancel", f), t.removeEventListener("animationend", f);
      };
    } else
      c("ANIMATION_END");
  }, [t, c]), {
    isPresent: ["mounted", "unmountSuspended"].includes(l),
    ref: h.useCallback((u) => {
      u && (r.current = getComputedStyle(u)), n(u);
    }, [])
  };
}
function Dr(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function XR(e) {
  var r, o;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var ps = "Collapsible", [ZR, NA] = jR(ps), [QR, ms] = ZR(ps), Lf = h.forwardRef(
  (e, t) => {
    const {
      __scopeCollapsible: n,
      open: r,
      defaultOpen: o,
      disabled: i,
      onOpenChange: s,
      ...l
    } = e, [c = !1, u] = ot({
      prop: r,
      defaultProp: o,
      onChange: s
    });
    return /* @__PURE__ */ a(
      QR,
      {
        scope: n,
        disabled: i,
        contentId: Qe(),
        open: c,
        onOpenToggle: h.useCallback(() => u((d) => !d), [u]),
        children: /* @__PURE__ */ a(
          Y.div,
          {
            "data-state": gs(c),
            "data-disabled": i ? "" : void 0,
            ...l,
            ref: t
          }
        )
      }
    );
  }
);
Lf.displayName = ps;
var $f = "CollapsibleTrigger", zf = h.forwardRef(
  (e, t) => {
    const { __scopeCollapsible: n, ...r } = e, o = ms($f, n);
    return /* @__PURE__ */ a(
      Y.button,
      {
        type: "button",
        "aria-controls": o.contentId,
        "aria-expanded": o.open || !1,
        "data-state": gs(o.open),
        "data-disabled": o.disabled ? "" : void 0,
        disabled: o.disabled,
        ...r,
        ref: t,
        onClick: V(e.onClick, o.onOpenToggle)
      }
    );
  }
);
zf.displayName = $f;
var vs = "CollapsibleContent", Hf = h.forwardRef(
  (e, t) => {
    const { forceMount: n, ...r } = e, o = ms(vs, e.__scopeCollapsible);
    return /* @__PURE__ */ a(Bf, { present: n || o.open, children: ({ present: i }) => /* @__PURE__ */ a(JR, { ...r, ref: t, present: i }) });
  }
);
Hf.displayName = vs;
var JR = h.forwardRef((e, t) => {
  const { __scopeCollapsible: n, present: r, children: o, ...i } = e, s = ms(vs, n), [l, c] = h.useState(r), u = h.useRef(null), d = te(t, u), f = h.useRef(0), p = f.current, m = h.useRef(0), v = m.current, g = s.open || l, x = h.useRef(g), C = h.useRef();
  return h.useEffect(() => {
    const y = requestAnimationFrame(() => x.current = !1);
    return () => cancelAnimationFrame(y);
  }, []), Ne(() => {
    const y = u.current;
    if (y) {
      C.current = C.current || {
        transitionDuration: y.style.transitionDuration,
        animationName: y.style.animationName
      }, y.style.transitionDuration = "0s", y.style.animationName = "none";
      const M = y.getBoundingClientRect();
      f.current = M.height, m.current = M.width, x.current || (y.style.transitionDuration = C.current.transitionDuration, y.style.animationName = C.current.animationName), c(r);
    }
  }, [s.open, r]), /* @__PURE__ */ a(
    Y.div,
    {
      "data-state": gs(s.open),
      "data-disabled": s.disabled ? "" : void 0,
      id: s.contentId,
      hidden: !g,
      ...i,
      ref: d,
      style: {
        "--radix-collapsible-content-height": p ? `${p}px` : void 0,
        "--radix-collapsible-content-width": v ? `${v}px` : void 0,
        ...e.style
      },
      children: g && o
    }
  );
});
function gs(e) {
  return e ? "open" : "closed";
}
var e_ = Lf;
const t_ = e_, n_ = zf, r_ = Hf, o_ = ({
  item: e,
  active: t
}) => {
  const n = e.icon;
  return /* @__PURE__ */ b("div", { className: "flex w-full items-center justify-between", children: [
    /* @__PURE__ */ b("div", { className: "flex items-center gap-1.5 font-medium text-f1-foreground", children: [
      /* @__PURE__ */ a(
        n,
        {
          className: T(
            "h-5 w-5 transition-colors",
            t ? "text-f1-icon-bold" : "text-f1-icon"
          )
        }
      ),
      /* @__PURE__ */ a("span", { children: e.label })
    ] }),
    e.badge && /* @__PURE__ */ a(Rd, { value: e.badge, size: "sm", type: "bold" })
  ] });
}, L0 = ({ item: e }) => {
  const { isActive: t } = ti(), { label: n, ...r } = e, o = t(r.href, { exact: r.exactMatch });
  return /* @__PURE__ */ a(
    Tn,
    {
      ...r,
      className: T(
        "flex cursor-pointer items-center rounded py-1.5 pl-1.5 pr-2 no-underline transition-colors",
        Ft(),
        o ? "bg-f1-background-secondary-hover text-f1-foreground" : "hover:bg-f1-background-secondary-hover"
      ),
      children: /* @__PURE__ */ a(o_, { item: e, active: o })
    }
  );
}, a_ = ({ category: e }) => {
  const [t, n] = ee.useState(e.isOpen !== !1), r = ni();
  return e.isRoot ? /* @__PURE__ */ a("div", { className: "flex flex-col gap-1 pb-3", children: e.items.map((o, i) => /* @__PURE__ */ a(L0, { item: o }, i)) }) : /* @__PURE__ */ b(t_, { open: t, onOpenChange: n, children: [
    /* @__PURE__ */ b(
      n_,
      {
        className: T(
          "flex w-full cursor-pointer items-center justify-between border-t border-dashed border-transparent border-t-f1-border px-1.5 pb-2 pt-4 text-sm font-semibold uppercase tracking-wide text-f1-foreground-secondary",
          Ft("focus-visible:rounded-md")
        ),
        children: [
          e.title,
          /* @__PURE__ */ a(
            Wt.div,
            {
              initial: !1,
              animate: { rotate: t ? 0 : -90 },
              transition: { duration: r ? 0 : 0.1 },
              children: /* @__PURE__ */ a(lr, { className: "h-4 w-4 text-f1-icon-secondary" })
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ a(
      r_,
      {
        forceMount: !0,
        className: "flex flex-col gap-1 overflow-hidden pb-3",
        children: /* @__PURE__ */ a(ki, { initial: !1, children: t && /* @__PURE__ */ a(
          Wt.div,
          {
            initial: { height: 0, opacity: 0 },
            animate: { height: "auto", opacity: 1 },
            exit: { height: 0, opacity: 0 },
            transition: {
              duration: r ? 0 : 0.15,
              ease: [0.165, 0.84, 0.44, 1]
            },
            children: /* @__PURE__ */ a("div", { className: "flex flex-col gap-1 pb-3", children: e.items.map((o, i) => /* @__PURE__ */ a(L0, { item: o }, i)) })
          }
        ) })
      }
    )
  ] });
};
function DA({ tree: e }) {
  return /* @__PURE__ */ a("div", { className: "w-full bg-transparent", children: e.map((t, n) => /* @__PURE__ */ a(a_, { category: t }, n)) });
}
function kA({
  onClick: e,
  placeholder: t,
  shortcut: n = ["cmd", "k"],
  ...r
}) {
  return /* @__PURE__ */ b(
    "button",
    {
      onClick: e,
      className: T(
        "mb-4 mt-2 flex w-full cursor-pointer items-center justify-between rounded border border-solid border-f1-border/70 bg-f1-background/80 p-1.5 text-f1-foreground-secondary transition-colors hover:border-f1-border-hover",
        Ft()
      ),
      type: "button",
      ...r,
      children: [
        /* @__PURE__ */ b("div", { className: "flex items-center gap-1", children: [
          /* @__PURE__ */ a(gt, { icon: eu, size: "md" }),
          /* @__PURE__ */ a("span", { children: t })
        ] }),
        /* @__PURE__ */ a("div", { className: "hidden xs:block", children: /* @__PURE__ */ a(sS, { keys: n }) })
      ]
    }
  );
}
function EA({ header: e, body: t, footer: n }) {
  const { sidebarState: r, isSmallScreen: o } = Oo(), i = ni(), s = {
    x: {
      ease: r !== "locked" ? o ? [0.25, 0.46, 0.45, 0.94] : [0.175, 0.885, 0.32, 1.1] : [0, 0, 0.58, 1],
      duration: i ? 0 : r !== "locked" && !o ? 0.3 : 0.2
    },
    top: { duration: i ? 0 : 0.1 },
    left: { duration: i ? 0 : 0.1 },
    default: { duration: i ? 0 : 0.2 }
  };
  return /* @__PURE__ */ b(
    Wt.div,
    {
      initial: !1,
      className: T(
        "absolute bottom-0 left-0 top-0 z-10 flex w-64 flex-col px-3 transition-[background-color]",
        r === "locked" ? "h-screen" : T(
          "pb-3",
          o ? "h-screen bg-f1-background-secondary" : "h-[calc(100vh-16px)] border-solid border-f1-border/40 bg-f1-background/60 shadow-lg backdrop-blur-2xl"
        )
      ),
      animate: {
        top: r === "locked" || o ? 0 : "8px",
        borderRadius: r === "locked" || o ? "0" : "12px",
        left: r === "locked" ? "0" : o ? 0 : "8px",
        x: r === "hidden" ? -260 : 0,
        opacity: r === "hidden" ? o ? 0.7 : 0 : 1,
        pointerEvents: r === "hidden" ? "none" : "auto"
      },
      transition: s,
      children: [
        /* @__PURE__ */ a("div", { className: "flex-shrink-0", children: e }),
        t && /* @__PURE__ */ a("div", { className: "flex-grow overflow-y-auto", children: t }),
        /* @__PURE__ */ a("div", { className: "flex-shrink-0", children: n })
      ]
    }
  );
}
function FA({ name: e, avatarUrl: t, avatarAlt: n, options: r }) {
  return /* @__PURE__ */ a("div", { className: "border-t border-dashed border-transparent border-t-f1-border pt-4", children: /* @__PURE__ */ a(Vf, { items: r, children: /* @__PURE__ */ b(
    "button",
    {
      className: T(
        "flex w-full items-center gap-1.5 rounded p-1.5 font-medium transition-colors hover:bg-f1-background-secondary-hover data-[state=open]:bg-f1-background-secondary-hover",
        Ft()
      ),
      children: [
        /* @__PURE__ */ a(ei, { src: t, alt: n, size: "xxsmall" }),
        e
      ]
    }
  ) }) });
}
var Fn = "NavigationMenu", [ws, Wf, i_] = hr(Fn), [Ya, s_, l_] = hr(Fn), [ys, IA] = Et(
  Fn,
  [i_, l_]
), [c_, nt] = ys(Fn), [u_, d_] = ys(Fn), Uf = h.forwardRef(
  (e, t) => {
    const {
      __scopeNavigationMenu: n,
      value: r,
      onValueChange: o,
      defaultValue: i,
      delayDuration: s = 200,
      skipDelayDuration: l = 300,
      orientation: c = "horizontal",
      dir: u,
      ...d
    } = e, [f, p] = h.useState(null), m = te(t, (k) => p(k)), v = kn(u), g = h.useRef(0), x = h.useRef(0), C = h.useRef(0), [y, M] = h.useState(!0), [_ = "", P] = ot({
      prop: r,
      onChange: (k) => {
        const z = k !== "", Q = l > 0;
        z ? (window.clearTimeout(C.current), Q && M(!1)) : (window.clearTimeout(C.current), C.current = window.setTimeout(
          () => M(!0),
          l
        )), o == null || o(k);
      },
      defaultProp: i
    }), E = h.useCallback(() => {
      window.clearTimeout(x.current), x.current = window.setTimeout(() => P(""), 150);
    }, [P]), L = h.useCallback(
      (k) => {
        window.clearTimeout(x.current), P(k);
      },
      [P]
    ), N = h.useCallback(
      (k) => {
        _ === k ? window.clearTimeout(x.current) : g.current = window.setTimeout(() => {
          window.clearTimeout(x.current), P(k);
        }, s);
      },
      [_, P, s]
    );
    return h.useEffect(() => () => {
      window.clearTimeout(g.current), window.clearTimeout(x.current), window.clearTimeout(C.current);
    }, []), /* @__PURE__ */ a(
      jf,
      {
        scope: n,
        isRootMenu: !0,
        value: _,
        dir: v,
        orientation: c,
        rootNavigationMenu: f,
        onTriggerEnter: (k) => {
          window.clearTimeout(g.current), y ? N(k) : L(k);
        },
        onTriggerLeave: () => {
          window.clearTimeout(g.current), E();
        },
        onContentEnter: () => window.clearTimeout(x.current),
        onContentLeave: E,
        onItemSelect: (k) => {
          P((z) => z === k ? "" : k);
        },
        onItemDismiss: () => P(""),
        children: /* @__PURE__ */ a(
          Y.nav,
          {
            "aria-label": "Main",
            "data-orientation": c,
            dir: v,
            ...d,
            ref: m
          }
        )
      }
    );
  }
);
Uf.displayName = Fn;
var Gf = "NavigationMenuSub", f_ = h.forwardRef(
  (e, t) => {
    const {
      __scopeNavigationMenu: n,
      value: r,
      onValueChange: o,
      defaultValue: i,
      orientation: s = "horizontal",
      ...l
    } = e, c = nt(Gf, n), [u = "", d] = ot({
      prop: r,
      onChange: o,
      defaultProp: i
    });
    return /* @__PURE__ */ a(
      jf,
      {
        scope: n,
        isRootMenu: !1,
        value: u,
        dir: c.dir,
        orientation: s,
        rootNavigationMenu: c.rootNavigationMenu,
        onTriggerEnter: (f) => d(f),
        onItemSelect: (f) => d(f),
        onItemDismiss: () => d(""),
        children: /* @__PURE__ */ a(Y.div, { "data-orientation": s, ...l, ref: t })
      }
    );
  }
);
f_.displayName = Gf;
var jf = (e) => {
  const {
    scope: t,
    isRootMenu: n,
    rootNavigationMenu: r,
    dir: o,
    orientation: i,
    children: s,
    value: l,
    onItemSelect: c,
    onItemDismiss: u,
    onTriggerEnter: d,
    onTriggerLeave: f,
    onContentEnter: p,
    onContentLeave: m
  } = e, [v, g] = h.useState(null), [x, C] = h.useState(/* @__PURE__ */ new Map()), [y, M] = h.useState(null);
  return /* @__PURE__ */ a(
    c_,
    {
      scope: t,
      isRootMenu: n,
      rootNavigationMenu: r,
      value: l,
      previousValue: Cu(l),
      baseId: Qe(),
      dir: o,
      orientation: i,
      viewport: v,
      onViewportChange: g,
      indicatorTrack: y,
      onIndicatorTrackChange: M,
      onTriggerEnter: xe(d),
      onTriggerLeave: xe(f),
      onContentEnter: xe(p),
      onContentLeave: xe(m),
      onItemSelect: xe(c),
      onItemDismiss: xe(u),
      onViewportContentChange: h.useCallback((_, P) => {
        C((E) => (E.set(_, P), new Map(E)));
      }, []),
      onViewportContentRemove: h.useCallback((_) => {
        C((P) => P.has(_) ? (P.delete(_), new Map(P)) : P);
      }, []),
      children: /* @__PURE__ */ a(ws.Provider, { scope: t, children: /* @__PURE__ */ a(u_, { scope: t, items: x, children: s }) })
    }
  );
}, Kf = "NavigationMenuList", Yf = h.forwardRef(
  (e, t) => {
    const { __scopeNavigationMenu: n, ...r } = e, o = nt(Kf, n), i = /* @__PURE__ */ a(Y.ul, { "data-orientation": o.orientation, ...r, ref: t });
    return /* @__PURE__ */ a(Y.div, { style: { position: "relative" }, ref: o.onIndicatorTrackChange, children: /* @__PURE__ */ a(ws.Slot, { scope: n, children: o.isRootMenu ? /* @__PURE__ */ a(e2, { asChild: !0, children: i }) : i }) });
  }
);
Yf.displayName = Kf;
var qf = "NavigationMenuItem", [h_, Xf] = ys(qf), Zf = h.forwardRef(
  (e, t) => {
    const { __scopeNavigationMenu: n, value: r, ...o } = e, i = Qe(), s = r || i || "LEGACY_REACT_AUTO_VALUE", l = h.useRef(null), c = h.useRef(null), u = h.useRef(null), d = h.useRef(() => {
    }), f = h.useRef(!1), p = h.useCallback((v = "start") => {
      if (l.current) {
        d.current();
        const g = Xa(l.current);
        g.length && Cs(v === "start" ? g : g.reverse());
      }
    }, []), m = h.useCallback(() => {
      if (l.current) {
        const v = Xa(l.current);
        v.length && (d.current = S_(v));
      }
    }, []);
    return /* @__PURE__ */ a(
      h_,
      {
        scope: n,
        value: s,
        triggerRef: c,
        contentRef: l,
        focusProxyRef: u,
        wasEscapeCloseRef: f,
        onEntryKeyDown: p,
        onFocusProxyEnter: p,
        onRootContentClose: m,
        onContentFocusOutside: m,
        children: /* @__PURE__ */ a(Y.li, { ...o, ref: t })
      }
    );
  }
);
Zf.displayName = qf;
var qa = "NavigationMenuTrigger", p_ = h.forwardRef((e, t) => {
  const { __scopeNavigationMenu: n, disabled: r, ...o } = e, i = nt(qa, e.__scopeNavigationMenu), s = Xf(qa, e.__scopeNavigationMenu), l = h.useRef(null), c = te(l, s.triggerRef, t), u = n2(i.baseId, s.value), d = r2(i.baseId, s.value), f = h.useRef(!1), p = h.useRef(!1), m = s.value === i.value;
  return /* @__PURE__ */ b(me, { children: [
    /* @__PURE__ */ a(ws.ItemSlot, { scope: n, value: s.value, children: /* @__PURE__ */ a(t2, { asChild: !0, children: /* @__PURE__ */ a(
      Y.button,
      {
        id: u,
        disabled: r,
        "data-disabled": r ? "" : void 0,
        "data-state": Ms(m),
        "aria-expanded": m,
        "aria-controls": d,
        ...o,
        ref: c,
        onPointerEnter: V(e.onPointerEnter, () => {
          p.current = !1, s.wasEscapeCloseRef.current = !1;
        }),
        onPointerMove: V(
          e.onPointerMove,
          oo(() => {
            r || p.current || s.wasEscapeCloseRef.current || f.current || (i.onTriggerEnter(s.value), f.current = !0);
          })
        ),
        onPointerLeave: V(
          e.onPointerLeave,
          oo(() => {
            r || (i.onTriggerLeave(), f.current = !1);
          })
        ),
        onClick: V(e.onClick, () => {
          i.onItemSelect(s.value), p.current = m;
        }),
        onKeyDown: V(e.onKeyDown, (v) => {
          const x = { horizontal: "ArrowDown", vertical: i.dir === "rtl" ? "ArrowLeft" : "ArrowRight" }[i.orientation];
          m && v.key === x && (s.onEntryKeyDown(), v.preventDefault());
        })
      }
    ) }) }),
    m && /* @__PURE__ */ b(me, { children: [
      /* @__PURE__ */ a(
        sh,
        {
          "aria-hidden": !0,
          tabIndex: 0,
          ref: s.focusProxyRef,
          onFocus: (v) => {
            const g = s.contentRef.current, x = v.relatedTarget, C = x === l.current, y = g == null ? void 0 : g.contains(x);
            (C || !y) && s.onFocusProxyEnter(C ? "start" : "end");
          }
        }
      ),
      i.viewport && /* @__PURE__ */ a("span", { "aria-owns": d })
    ] })
  ] });
});
p_.displayName = qa;
var m_ = "NavigationMenuLink", $0 = "navigationMenu.linkSelect", Qf = h.forwardRef(
  (e, t) => {
    const { __scopeNavigationMenu: n, active: r, onSelect: o, ...i } = e;
    return /* @__PURE__ */ a(t2, { asChild: !0, children: /* @__PURE__ */ a(
      Y.a,
      {
        "data-active": r ? "" : void 0,
        "aria-current": r ? "page" : void 0,
        ...i,
        ref: t,
        onClick: V(
          e.onClick,
          (s) => {
            const l = s.target, c = new CustomEvent($0, {
              bubbles: !0,
              cancelable: !0
            });
            if (l.addEventListener($0, (u) => o == null ? void 0 : o(u), { once: !0 }), ba(l, c), !c.defaultPrevented && !s.metaKey) {
              const u = new CustomEvent($r, {
                bubbles: !0,
                cancelable: !0
              });
              ba(l, u);
            }
          },
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
);
Qf.displayName = m_;
var xs = "NavigationMenuIndicator", v_ = h.forwardRef((e, t) => {
  const { forceMount: n, ...r } = e, o = nt(xs, e.__scopeNavigationMenu), i = !!o.value;
  return o.indicatorTrack ? e1.createPortal(
    /* @__PURE__ */ a(Oe, { present: n || i, children: /* @__PURE__ */ a(g_, { ...r, ref: t }) }),
    o.indicatorTrack
  ) : null;
});
v_.displayName = xs;
var g_ = h.forwardRef((e, t) => {
  const { __scopeNavigationMenu: n, ...r } = e, o = nt(xs, n), i = Wf(n), [s, l] = h.useState(
    null
  ), [c, u] = h.useState(null), d = o.orientation === "horizontal", f = !!o.value;
  h.useEffect(() => {
    var g;
    const v = (g = i().find((x) => x.value === o.value)) == null ? void 0 : g.ref.current;
    v && l(v);
  }, [i, o.value]);
  const p = () => {
    s && u({
      size: d ? s.offsetWidth : s.offsetHeight,
      offset: d ? s.offsetLeft : s.offsetTop
    });
  };
  return Za(s, p), Za(o.indicatorTrack, p), c ? /* @__PURE__ */ a(
    Y.div,
    {
      "aria-hidden": !0,
      "data-state": f ? "visible" : "hidden",
      "data-orientation": o.orientation,
      ...r,
      ref: t,
      style: {
        position: "absolute",
        ...d ? {
          left: 0,
          width: c.size + "px",
          transform: `translateX(${c.offset}px)`
        } : {
          top: 0,
          height: c.size + "px",
          transform: `translateY(${c.offset}px)`
        },
        ...r.style
      }
    }
  ) : null;
}), An = "NavigationMenuContent", w_ = h.forwardRef((e, t) => {
  const { forceMount: n, ...r } = e, o = nt(An, e.__scopeNavigationMenu), i = Xf(An, e.__scopeNavigationMenu), s = te(i.contentRef, t), l = i.value === o.value, c = {
    value: i.value,
    triggerRef: i.triggerRef,
    focusProxyRef: i.focusProxyRef,
    wasEscapeCloseRef: i.wasEscapeCloseRef,
    onContentFocusOutside: i.onContentFocusOutside,
    onRootContentClose: i.onRootContentClose,
    ...r
  };
  return o.viewport ? /* @__PURE__ */ a(y_, { forceMount: n, ...c, ref: s }) : /* @__PURE__ */ a(Oe, { present: n || l, children: /* @__PURE__ */ a(
    Jf,
    {
      "data-state": Ms(l),
      ...c,
      ref: s,
      onPointerEnter: V(e.onPointerEnter, o.onContentEnter),
      onPointerLeave: V(
        e.onPointerLeave,
        oo(o.onContentLeave)
      ),
      style: {
        // Prevent interaction when animating out
        pointerEvents: !l && o.isRootMenu ? "none" : void 0,
        ...c.style
      }
    }
  ) });
});
w_.displayName = An;
var y_ = h.forwardRef((e, t) => {
  const n = nt(An, e.__scopeNavigationMenu), { onViewportContentChange: r, onViewportContentRemove: o } = n;
  return Ne(() => {
    r(e.value, {
      ref: t,
      ...e
    });
  }, [e, t, r]), Ne(() => () => o(e.value), [e.value, o]), null;
}), $r = "navigationMenu.rootContentDismiss", Jf = h.forwardRef((e, t) => {
  const {
    __scopeNavigationMenu: n,
    value: r,
    triggerRef: o,
    focusProxyRef: i,
    wasEscapeCloseRef: s,
    onRootContentClose: l,
    onContentFocusOutside: c,
    ...u
  } = e, d = nt(An, n), f = h.useRef(null), p = te(f, t), m = n2(d.baseId, r), v = r2(d.baseId, r), g = Wf(n), x = h.useRef(null), { onItemDismiss: C } = d;
  h.useEffect(() => {
    const M = f.current;
    if (d.isRootMenu && M) {
      const _ = () => {
        var P;
        C(), l(), M.contains(document.activeElement) && ((P = o.current) == null || P.focus());
      };
      return M.addEventListener($r, _), () => M.removeEventListener($r, _);
    }
  }, [d.isRootMenu, e.value, o, C, l]);
  const y = h.useMemo(() => {
    const _ = g().map((z) => z.value);
    d.dir === "rtl" && _.reverse();
    const P = _.indexOf(d.value), E = _.indexOf(d.previousValue), L = r === d.value, N = E === _.indexOf(r);
    if (!L && !N) return x.current;
    const k = (() => {
      if (P !== E) {
        if (L && E !== -1) return P > E ? "from-end" : "from-start";
        if (N && P !== -1) return P > E ? "to-start" : "to-end";
      }
      return null;
    })();
    return x.current = k, k;
  }, [d.previousValue, d.value, d.dir, g, r]);
  return /* @__PURE__ */ a(e2, { asChild: !0, children: /* @__PURE__ */ a(
    uo,
    {
      id: v,
      "aria-labelledby": m,
      "data-motion": y,
      "data-orientation": d.orientation,
      ...u,
      ref: p,
      disableOutsidePointerEvents: !1,
      onDismiss: () => {
        var _;
        const M = new Event($r, {
          bubbles: !0,
          cancelable: !0
        });
        (_ = f.current) == null || _.dispatchEvent(M);
      },
      onFocusOutside: V(e.onFocusOutside, (M) => {
        var P;
        c();
        const _ = M.target;
        (P = d.rootNavigationMenu) != null && P.contains(_) && M.preventDefault();
      }),
      onPointerDownOutside: V(e.onPointerDownOutside, (M) => {
        var L;
        const _ = M.target, P = g().some((N) => {
          var k;
          return (k = N.ref.current) == null ? void 0 : k.contains(_);
        }), E = d.isRootMenu && ((L = d.viewport) == null ? void 0 : L.contains(_));
        (P || E || !d.isRootMenu) && M.preventDefault();
      }),
      onKeyDown: V(e.onKeyDown, (M) => {
        var E;
        const _ = M.altKey || M.ctrlKey || M.metaKey;
        if (M.key === "Tab" && !_) {
          const L = Xa(M.currentTarget), N = document.activeElement, k = L.findIndex((H) => H === N), Q = M.shiftKey ? L.slice(0, k).reverse() : L.slice(k + 1, L.length);
          Cs(Q) ? M.preventDefault() : (E = i.current) == null || E.focus();
        }
      }),
      onEscapeKeyDown: V(e.onEscapeKeyDown, (M) => {
        s.current = !0;
      })
    }
  ) });
}), bs = "NavigationMenuViewport", x_ = h.forwardRef((e, t) => {
  const { forceMount: n, ...r } = e, i = !!nt(bs, e.__scopeNavigationMenu).value;
  return /* @__PURE__ */ a(Oe, { present: n || i, children: /* @__PURE__ */ a(b_, { ...r, ref: t }) });
});
x_.displayName = bs;
var b_ = h.forwardRef((e, t) => {
  const { __scopeNavigationMenu: n, children: r, ...o } = e, i = nt(bs, n), s = te(t, i.onViewportChange), l = d_(
    An,
    e.__scopeNavigationMenu
  ), [c, u] = h.useState(null), [d, f] = h.useState(null), p = c ? (c == null ? void 0 : c.width) + "px" : void 0, m = c ? (c == null ? void 0 : c.height) + "px" : void 0, v = !!i.value, g = v ? i.value : i.previousValue;
  return Za(d, () => {
    d && u({ width: d.offsetWidth, height: d.offsetHeight });
  }), /* @__PURE__ */ a(
    Y.div,
    {
      "data-state": Ms(v),
      "data-orientation": i.orientation,
      ...o,
      ref: s,
      style: {
        // Prevent interaction when animating out
        pointerEvents: !v && i.isRootMenu ? "none" : void 0,
        "--radix-navigation-menu-viewport-width": p,
        "--radix-navigation-menu-viewport-height": m,
        ...o.style
      },
      onPointerEnter: V(e.onPointerEnter, i.onContentEnter),
      onPointerLeave: V(e.onPointerLeave, oo(i.onContentLeave)),
      children: Array.from(l.items).map(([C, { ref: y, forceMount: M, ..._ }]) => {
        const P = g === C;
        return /* @__PURE__ */ a(Oe, { present: M || P, children: /* @__PURE__ */ a(
          Jf,
          {
            ..._,
            ref: ri(y, (E) => {
              P && E && f(E);
            })
          }
        ) }, C);
      })
    }
  );
}), C_ = "FocusGroup", e2 = h.forwardRef(
  (e, t) => {
    const { __scopeNavigationMenu: n, ...r } = e, o = nt(C_, n);
    return /* @__PURE__ */ a(Ya.Provider, { scope: n, children: /* @__PURE__ */ a(Ya.Slot, { scope: n, children: /* @__PURE__ */ a(Y.div, { dir: o.dir, ...r, ref: t }) }) });
  }
), z0 = ["ArrowRight", "ArrowLeft", "ArrowUp", "ArrowDown"], M_ = "FocusGroupItem", t2 = h.forwardRef(
  (e, t) => {
    const { __scopeNavigationMenu: n, ...r } = e, o = s_(n), i = nt(M_, n);
    return /* @__PURE__ */ a(Ya.ItemSlot, { scope: n, children: /* @__PURE__ */ a(
      Y.button,
      {
        ...r,
        ref: t,
        onKeyDown: V(e.onKeyDown, (s) => {
          if (["Home", "End", ...z0].includes(s.key)) {
            let c = o().map((f) => f.ref.current);
            if ([i.dir === "rtl" ? "ArrowRight" : "ArrowLeft", "ArrowUp", "End"].includes(s.key) && c.reverse(), z0.includes(s.key)) {
              const f = c.indexOf(s.currentTarget);
              c = c.slice(f + 1);
            }
            setTimeout(() => Cs(c)), s.preventDefault();
          }
        })
      }
    ) });
  }
);
function Xa(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => {
      const o = r.tagName === "INPUT" && r.type === "hidden";
      return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function Cs(e) {
  const t = document.activeElement;
  return e.some((n) => n === t ? !0 : (n.focus(), document.activeElement !== t));
}
function S_(e) {
  return e.forEach((t) => {
    t.dataset.tabindex = t.getAttribute("tabindex") || "", t.setAttribute("tabindex", "-1");
  }), () => {
    e.forEach((t) => {
      const n = t.dataset.tabindex;
      t.setAttribute("tabindex", n);
    });
  };
}
function Za(e, t) {
  const n = xe(t);
  Ne(() => {
    let r = 0;
    if (e) {
      const o = new ResizeObserver(() => {
        cancelAnimationFrame(r), r = window.requestAnimationFrame(n);
      });
      return o.observe(e), () => {
        window.cancelAnimationFrame(r), o.unobserve(e);
      };
    }
  }, [e, n]);
}
function Ms(e) {
  return e ? "open" : "closed";
}
function n2(e, t) {
  return `${e}-trigger-${t}`;
}
function r2(e, t) {
  return `${e}-content-${t}`;
}
function oo(e) {
  return (t) => t.pointerType === "mouse" ? e(t) : void 0;
}
var R_ = Uf, __ = Yf, P_ = Zf, A_ = Qf;
function T_(e, t) {
  const { asChild: n, children: r } = e;
  if (!n)
    return typeof t == "function" ? t(r) : t;
  const o = h.Children.only(r);
  return h.cloneElement(o, {
    children: typeof t == "function" ? t(o.props.children) : t
  });
}
const N_ = Ke(
  "flex items-center justify-start gap-1 overflow-x-auto whitespace-nowrap border-x-0 border-b border-t-0 border-solid border-f1-border-secondary px-6 py-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
  {
    variants: {
      secondary: {
        true: "bg-f1-background-secondary/25",
        false: "bg-f1-background-transparent"
      }
    },
    defaultVariants: {
      secondary: !1
    }
  }
), o2 = h.forwardRef(({ className: e, children: t, secondary: n, ...r }, o) => {
  const i = fo();
  return /* @__PURE__ */ a(
    R_,
    {
      ref: o,
      ...r,
      asChild: !1,
      children: /* @__PURE__ */ a(Xv, { id: i, children: /* @__PURE__ */ a(
        __,
        {
          className: T(N_({ secondary: n }), e),
          children: t
        }
      ) })
    }
  );
});
o2.displayName = "TabNavigation";
const D_ = Ke(
  "flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1.5 font-medium transition-all",
  {
    variants: {
      secondary: {
        true: "bg-f1-background/60 group-hover:border-f1-border group-data-[active=true]:border-f1-border group-data-[active=true]:text-f1-foreground",
        false: "bg-f1-background-transparent group-hover:bg-f1-background-secondary group-hover:text-f1-foreground group-data-[active=true]:bg-f1-background-secondary group-data-[active=true]:text-f1-foreground"
      },
      disabled: {
        true: "pointer-events-none text-f1-foreground-disabled"
      }
    },
    defaultVariants: {
      secondary: !1,
      disabled: !1
    }
  }
), a2 = h.forwardRef(
  ({ asChild: e, disabled: t, active: n, className: r, children: o, secondary: i, ...s }, l) => /* @__PURE__ */ a(P_, { className: "flex", children: /* @__PURE__ */ a(
    A_,
    {
      "data-active": n ? "true" : void 0,
      "aria-disabled": t || void 0,
      className: T(
        "group relative flex shrink-0 select-none items-center justify-center rounded-md no-underline focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-f1-ring focus-visible:ring-offset-1",
        t ? "pointer-events-none" : ""
      ),
      ref: l,
      onSelect: () => {
      },
      asChild: e,
      ...s,
      children: T_({ asChild: e, children: o }, (c) => /* @__PURE__ */ b(
        "span",
        {
          className: T(
            "border border-solid border-transparent text-f1-foreground-secondary",
            D_({ secondary: i, disabled: t }),
            r
          ),
          children: [
            c,
            n && !i && /* @__PURE__ */ a(
              Wt.div,
              {
                layoutId: "underline",
                className: "absolute inset-x-0 -bottom-3 h-px bg-f1-background-bold",
                transition: {
                  type: "spring",
                  bounce: 0.2,
                  duration: 0.5
                }
              }
            )
          ]
        }
      ))
    }
  ) })
);
a2.displayName = "TabNavigationLink";
function OA({ tabs: e, secondary: t = !1 }) {
  const { isActive: n } = ti();
  return /* @__PURE__ */ a(o2, { secondary: t, children: e.map(({ label: r, ...o }, i) => /* @__PURE__ */ a(
    a2,
    {
      active: n(o.href, { exact: o.exactMatch }),
      href: o.href,
      secondary: t,
      asChild: !0,
      children: /* @__PURE__ */ a(Tn, { ...o, children: r })
    },
    i
  )) });
}
var Ss = "Dialog", [i2, VA] = Et(Ss), [k_, lt] = i2(Ss), s2 = (e) => {
  const {
    __scopeDialog: t,
    children: n,
    open: r,
    defaultOpen: o,
    onOpenChange: i,
    modal: s = !0
  } = e, l = h.useRef(null), c = h.useRef(null), [u = !1, d] = ot({
    prop: r,
    defaultProp: o,
    onChange: i
  });
  return /* @__PURE__ */ a(
    k_,
    {
      scope: t,
      triggerRef: l,
      contentRef: c,
      contentId: Qe(),
      titleId: Qe(),
      descriptionId: Qe(),
      open: u,
      onOpenChange: d,
      onOpenToggle: h.useCallback(() => d((f) => !f), [d]),
      modal: s,
      children: n
    }
  );
};
s2.displayName = Ss;
var l2 = "DialogTrigger", E_ = h.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = lt(l2, n), i = te(t, o.triggerRef);
    return /* @__PURE__ */ a(
      Y.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": o.open,
        "aria-controls": o.contentId,
        "data-state": Ps(o.open),
        ...r,
        ref: i,
        onClick: V(e.onClick, o.onOpenToggle)
      }
    );
  }
);
E_.displayName = l2;
var Rs = "DialogPortal", [F_, c2] = i2(Rs, {
  forceMount: void 0
}), u2 = (e) => {
  const { __scopeDialog: t, forceMount: n, children: r, container: o } = e, i = lt(Rs, t);
  return /* @__PURE__ */ a(F_, { scope: t, forceMount: n, children: h.Children.map(r, (s) => /* @__PURE__ */ a(Oe, { present: n || i.open, children: /* @__PURE__ */ a(ho, { asChild: !0, container: o, children: s }) })) });
};
u2.displayName = Rs;
var ao = "DialogOverlay", d2 = h.forwardRef(
  (e, t) => {
    const n = c2(ao, e.__scopeDialog), { forceMount: r = n.forceMount, ...o } = e, i = lt(ao, e.__scopeDialog);
    return i.modal ? /* @__PURE__ */ a(Oe, { present: r || i.open, children: /* @__PURE__ */ a(I_, { ...o, ref: t }) }) : null;
  }
);
d2.displayName = ao;
var I_ = h.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = lt(ao, n);
    return (
      // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
      // ie. when `Overlay` and `Content` are siblings
      /* @__PURE__ */ a(Do, { as: Mn, allowPinchZoom: !0, shards: [o.contentRef], children: /* @__PURE__ */ a(
        Y.div,
        {
          "data-state": Ps(o.open),
          ...r,
          ref: t,
          style: { pointerEvents: "auto", ...r.style }
        }
      ) })
    );
  }
), sn = "DialogContent", f2 = h.forwardRef(
  (e, t) => {
    const n = c2(sn, e.__scopeDialog), { forceMount: r = n.forceMount, ...o } = e, i = lt(sn, e.__scopeDialog);
    return /* @__PURE__ */ a(Oe, { present: r || i.open, children: i.modal ? /* @__PURE__ */ a(O_, { ...o, ref: t }) : /* @__PURE__ */ a(V_, { ...o, ref: t }) });
  }
);
f2.displayName = sn;
var O_ = h.forwardRef(
  (e, t) => {
    const n = lt(sn, e.__scopeDialog), r = h.useRef(null), o = te(t, n.contentRef, r);
    return h.useEffect(() => {
      const i = r.current;
      if (i) return Ji(i);
    }, []), /* @__PURE__ */ a(
      h2,
      {
        ...e,
        ref: o,
        trapFocus: n.open,
        disableOutsidePointerEvents: !0,
        onCloseAutoFocus: V(e.onCloseAutoFocus, (i) => {
          var s;
          i.preventDefault(), (s = n.triggerRef.current) == null || s.focus();
        }),
        onPointerDownOutside: V(e.onPointerDownOutside, (i) => {
          const s = i.detail.originalEvent, l = s.button === 0 && s.ctrlKey === !0;
          (s.button === 2 || l) && i.preventDefault();
        }),
        onFocusOutside: V(
          e.onFocusOutside,
          (i) => i.preventDefault()
        )
      }
    );
  }
), V_ = h.forwardRef(
  (e, t) => {
    const n = lt(sn, e.__scopeDialog), r = h.useRef(!1), o = h.useRef(!1);
    return /* @__PURE__ */ a(
      h2,
      {
        ...e,
        ref: t,
        trapFocus: !1,
        disableOutsidePointerEvents: !1,
        onCloseAutoFocus: (i) => {
          var s, l;
          (s = e.onCloseAutoFocus) == null || s.call(e, i), i.defaultPrevented || (r.current || (l = n.triggerRef.current) == null || l.focus(), i.preventDefault()), r.current = !1, o.current = !1;
        },
        onInteractOutside: (i) => {
          var c, u;
          (c = e.onInteractOutside) == null || c.call(e, i), i.defaultPrevented || (r.current = !0, i.detail.originalEvent.type === "pointerdown" && (o.current = !0));
          const s = i.target;
          ((u = n.triggerRef.current) == null ? void 0 : u.contains(s)) && i.preventDefault(), i.detail.originalEvent.type === "focusin" && o.current && i.preventDefault();
        }
      }
    );
  }
), h2 = h.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, trapFocus: r, onOpenAutoFocus: o, onCloseAutoFocus: i, ...s } = e, l = lt(sn, n), c = h.useRef(null), u = te(t, c);
    return Qi(), /* @__PURE__ */ b(me, { children: [
      /* @__PURE__ */ a(
        To,
        {
          asChild: !0,
          loop: !0,
          trapped: r,
          onMountAutoFocus: o,
          onUnmountAutoFocus: i,
          children: /* @__PURE__ */ a(
            uo,
            {
              role: "dialog",
              id: l.contentId,
              "aria-describedby": l.descriptionId,
              "aria-labelledby": l.titleId,
              "data-state": Ps(l.open),
              ...s,
              ref: u,
              onDismiss: () => l.onOpenChange(!1)
            }
          )
        }
      ),
      /* @__PURE__ */ b(me, { children: [
        /* @__PURE__ */ a(B_, { titleId: l.titleId }),
        /* @__PURE__ */ a($_, { contentRef: c, descriptionId: l.descriptionId })
      ] })
    ] });
  }
), _s = "DialogTitle", p2 = h.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = lt(_s, n);
    return /* @__PURE__ */ a(Y.h2, { id: o.titleId, ...r, ref: t });
  }
);
p2.displayName = _s;
var m2 = "DialogDescription", v2 = h.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = lt(m2, n);
    return /* @__PURE__ */ a(Y.p, { id: o.descriptionId, ...r, ref: t });
  }
);
v2.displayName = m2;
var g2 = "DialogClose", w2 = h.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = lt(g2, n);
    return /* @__PURE__ */ a(
      Y.button,
      {
        type: "button",
        ...r,
        ref: t,
        onClick: V(e.onClick, () => o.onOpenChange(!1))
      }
    );
  }
);
w2.displayName = g2;
function Ps(e) {
  return e ? "open" : "closed";
}
var y2 = "DialogTitleWarning", [BA, x2] = lh(y2, {
  contentName: sn,
  titleName: _s,
  docsSlug: "dialog"
}), B_ = ({ titleId: e }) => {
  const t = x2(y2), n = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
  return h.useEffect(() => {
    e && (document.getElementById(e) || console.error(n));
  }, [n, e]), null;
}, L_ = "DialogDescriptionWarning", $_ = ({ contentRef: e, descriptionId: t }) => {
  const r = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${x2(L_).contentName}}.`;
  return h.useEffect(() => {
    var i;
    const o = (i = e.current) == null ? void 0 : i.getAttribute("aria-describedby");
    t && o && (document.getElementById(t) || console.warn(r));
  }, [r, e, t]), null;
}, z_ = s2, H_ = u2, b2 = d2, C2 = f2, M2 = p2, S2 = v2, W_ = w2;
const U_ = z_, G_ = H_, R2 = h.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ a(
  b2,
  {
    ref: n,
    className: T(
      "fixed inset-0 z-50 bg-f1-background-bold/40 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      e
    ),
    ...t
  }
));
R2.displayName = b2.displayName;
const _2 = h.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ a(G_, { children: /* @__PURE__ */ a(R2, { className: "grid place-items-center overflow-y-auto sm:p-8", children: /* @__PURE__ */ b(
  C2,
  {
    ref: r,
    onInteractOutside: (o) => o.preventDefault(),
    className: T(
      "relative z-50 grid w-full origin-center gap-4 border bg-f1-background p-8 shadow-xl duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 sm:w-fit sm:min-w-[400px] sm:rounded-xl md:min-w-[456px]",
      e
    ),
    ...n,
    children: [
      t,
      /* @__PURE__ */ b(W_, { className: "ring-offset-background focus:ring-ring absolute right-2 top-2 rounded-2xs p-2 text-f1-foreground opacity-70 transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-f1-background-secondary data-[state=open]:text-f1-foreground-secondary", children: [
        /* @__PURE__ */ a(wy, { className: "h-5 w-5" }),
        /* @__PURE__ */ a("span", { className: "sr-only", children: "Close" })
      ] })
    ]
  }
) }) }));
_2.displayName = C2.displayName;
const P2 = ({
  className: e,
  ...t
}) => /* @__PURE__ */ a(
  "div",
  {
    className: T(
      "text-icon-neutral-bold absolute left-8 top-0 h-16 w-16 translate-y-[-50%] rounded-xl bg-f1-background p-4 shadow-md",
      e
    ),
    ...t
  }
);
P2.displayName = "DialogIcon";
const A2 = ({
  className: e,
  ...t
}) => /* @__PURE__ */ a("div", { className: T("mt-5 flex flex-col text-left", e), ...t });
A2.displayName = "DialogHeader";
const T2 = ({
  className: e,
  ...t
}) => /* @__PURE__ */ a(
  "div",
  {
    className: T(
      "-mx-8 -mb-8 mt-4 flex flex-col-reverse gap-0 rounded-bl-xl rounded-br-xl border-0 border-t border-solid border-f1-border bg-f1-background-secondary/50 px-8 py-4 sm:flex-row sm:justify-end sm:space-x-2",
      e
    ),
    ...t
  }
);
T2.displayName = "DialogFooter";
const N2 = h.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ a(
  M2,
  {
    ref: n,
    className: T("mt-1 text-xl font-medium leading-none", e),
    ...t
  }
));
N2.displayName = M2.displayName;
const D2 = h.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ a(
  S2,
  {
    ref: n,
    className: T("mt-2 text-base text-f1-foreground-secondary", e),
    ...t
  }
));
D2.displayName = S2.displayName;
function io({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    "div",
    {
      className: T(
        "animate-pulse rounded-xs bg-f1-background-secondary",
        e
      ),
      ...t
    }
  );
}
const k2 = w(
  ({ header: e, children: t, loading: n, actions: r, open: o, onClose: i }, s) => {
    const [l, c] = be(!1), u = rn(() => {
      c(!0);
      const d = setTimeout(() => {
        i == null || i(), c(!1);
      }, 200);
      return () => clearTimeout(d);
    }, [i]);
    return /* @__PURE__ */ a(
      U_,
      {
        open: o && !l,
        onOpenChange: (d) => !d && (u == null ? void 0 : u()),
        children: /* @__PURE__ */ b(_2, { ref: s, children: [
          e && /* @__PURE__ */ b(A2, { children: [
            e.icon && /* @__PURE__ */ a(P2, { children: /* @__PURE__ */ a(gt, { size: "lg", icon: e.icon }) }),
            /* @__PURE__ */ a(N2, { children: e.title }),
            /* @__PURE__ */ a(D2, { children: e.description })
          ] }),
          /* @__PURE__ */ a("div", { className: "flex-grow flex-col", children: n ? /* @__PURE__ */ b("div", { className: "flex flex-col gap-4", children: [
            /* @__PURE__ */ a(io, { className: "h-6 w-full rounded-full" }),
            /* @__PURE__ */ a(io, { className: "h-6 w-full rounded-full" })
          ] }) : t }),
          r && /* @__PURE__ */ b(T2, { children: [
            r.secondary && /* @__PURE__ */ a(nn, { variant: "outline", ...r.secondary }),
            /* @__PURE__ */ a(nn, { variant: "default", ...r.primary })
          ] })
        ] })
      }
    );
  }
);
k2.displayName = "Dialog";
const LA = De(
  {
    name: "Dialog",
    type: "info"
  },
  k2
), As = {
  2: "gap-2",
  4: "gap-4",
  8: "gap-8"
}, j_ = Ke("grid grid-cols-1", {
  variants: {
    tileSize: {
      // The amount of columns and autoflow when paginating is an issue if we
      // want to prevent orphan elments. Say, we have 10 elements, we can't just
      // render 3 rows of 3 elements and then an orphan one in the end.
      //
      // This makes sure that everything will look nice when using pages of 48
      // elements, it will always result in even rows.
      sm: "@12xl:grid-cols-16 @md:grid-cols-2 @2xl:grid-cols-3 @4xl:grid-cols-4 @8xl:grid-cols-6 @10xl:grid-cols-8 @11xl:grid-cols-12",
      md: "@lg:grid-cols-2 @4xl:grid-cols-3 @7xl:grid-cols-4 @9xl:grid-cols-6 @10xl:grid-cols-8 @12xl:grid-cols-12",
      lg: "@3xl:grid-cols-2 @7xl:grid-cols-3 @9xl:grid-cols-4 @10xl:grid-cols-6 @12xl:grid-cols-8"
    },
    gap: {
      ...As
    }
  },
  defaultVariants: {
    tileSize: "md",
    gap: "4"
  }
}), K_ = ee.forwardRef(function({ className: t, gap: n, children: r, tileSize: o, ...i }, s) {
  return /* @__PURE__ */ a("div", { className: T("@container", "grow"), ref: s, ...i, children: /* @__PURE__ */ a(
    "div",
    {
      className: T(j_({ gap: n, tileSize: o }), t),
      ref: s,
      ...i,
      children: r
    }
  ) });
}), Y_ = Ke("flex", {
  variants: {
    overflow: {
      hidden: "overflow-hidden",
      auto: "overflow-auto"
    },
    paddingX: {
      none: "px-0",
      "p-2": "px-2",
      "p-4": "px-4",
      "p-8": "px-8",
      "p-12": "px-12",
      "p-16": "px-16"
    },
    maxWidth: {
      xs: "max-w-xs",
      sm: "max-w-sm",
      md: "max-w-md",
      xl: "max-w-xl",
      "screen-sm": "max-w-screen-sm",
      "screen-md": "max-w-screen-md",
      "screen-lg": "max-w-screen-lg",
      "screen-xl": "max-w-screen-xl",
      "screen-2xl": "max-w-screen-2xl"
    },
    height: {
      auto: "h-auto",
      full: "h-full"
    },
    width: {
      auto: "w-auto",
      full: "w-full"
    },
    paddingY: {
      none: "py-0",
      "p-2": "py-2",
      "p-4": "py-4",
      "p-8": "py-8",
      "p-12": "py-12",
      "p-16": "py-16"
    },
    basis: {
      0: "basis-0"
    },
    inline: {
      true: "inline-flex",
      false: "flex"
    },
    justifyContent: {
      center: "justify-center",
      end: "justify-end",
      "space-between": "justify-between",
      start: "justify-start",
      stretch: "justify-stretch"
    },
    alignItems: {
      center: "items-center",
      end: "items-end",
      "space-between": "items-between",
      start: "items-start",
      stretch: "items-stretch"
    },
    grow: {
      true: "flex-grow",
      false: "flex-grow-0"
    },
    shrink: {
      true: "flex-shrink",
      false: "flex-shrink-0"
    }
  },
  defaultVariants: {
    paddingX: "none",
    paddingY: "none",
    inline: !1
  }
}), E2 = w(function({
  className: t,
  grow: n,
  basis: r,
  shrink: o,
  paddingX: i,
  paddingY: s,
  inline: l,
  overflow: c,
  maxWidth: u,
  justifyContent: d,
  alignItems: f,
  height: p,
  width: m,
  ...v
}, g) {
  return /* @__PURE__ */ a(
    "div",
    {
      className: T(
        Y_({
          paddingX: i,
          basis: r,
          paddingY: s,
          grow: n,
          shrink: o,
          inline: l,
          overflow: c,
          maxWidth: u,
          justifyContent: d,
          alignItems: f,
          height: p,
          width: m
        }),
        t
      ),
      ref: g,
      ...v
    }
  );
}), q_ = Ke("flex-row", {
  variants: {
    gap: {
      ...As
    },
    wrap: {
      true: "flex-wrap"
    }
  },
  defaultVariants: {
    wrap: !0
  }
}), X_ = ee.forwardRef(function({ className: t, gap: n, wrap: r, ...o }, i) {
  return /* @__PURE__ */ a(
    E2,
    {
      className: T(q_({ gap: n, wrap: r }), t),
      ref: i,
      ...o
    }
  );
}), Z_ = Ke("flex-col", {
  variants: {
    gap: {
      ...As
    }
  },
  defaultVariants: {}
}), Q_ = w(function({ className: t, gap: n, children: r, ...o }, i) {
  return /* @__PURE__ */ a(
    E2,
    {
      className: T(Z_({ gap: n }), t),
      ref: i,
      ...o,
      children: r
    }
  );
}), $A = De(
  {
    name: "Stack",
    type: "layout"
  },
  Q_
), zA = De(
  {
    name: "Split",
    type: "layout"
  },
  X_
), HA = De(
  {
    name: "AutoGrid",
    type: "layout"
  },
  K_
), WA = ({ children: e }) => {
  const { enabled: t } = ch();
  return /* @__PURE__ */ a("div", { className: T(t && "blur-sm", "inline"), children: e });
};
function It(e, t) {
  const n = e.displayName || e.name || "Component";
  return Object.assign(t, { displayName: `${n}.Skeleton` }), Object.assign(e, { Skeleton: t });
}
const F2 = ({ orientation: e = "vertical", limit: t = 600, children: n }) => /* @__PURE__ */ a(
  "div",
  {
    style: {
      maskImage: `linear-gradient(to ${e == "vertical" ? "bottom" : "right"}, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) calc(min(100% - ${t}px, 100%)), rgba(0, 0, 0, 0) 100%)`
    },
    className: e == "horizontal" ? "w-full overflow-hidden" : "w-auto",
    children: n
  }
), Ts = h.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ a(
  "div",
  {
    ref: n,
    className: T(
      "flex flex-col items-stretch rounded-xl border border-solid border-f1-border bg-f1-background p-4",
      e
    ),
    ...t
  }
));
Ts.displayName = "Card";
const Ns = h.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ a(
  "div",
  {
    ref: n,
    className: T("flex flex-row gap-1.5", e),
    ...t
  }
));
Ns.displayName = "CardHeader";
const Ds = h.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ a("h3", { ref: n, className: T("text-base font-medium", e), ...t }));
Ds.displayName = "CardTitle";
const ks = h.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ a(
  "h3",
  {
    ref: n,
    className: T(
      "truncate text-base font-normal text-f1-foreground-secondary",
      e
    ),
    ...t
  }
));
ks.displayName = "CardSubtitle";
const I2 = h.forwardRef(({ className: e, content: t }, n) => /* @__PURE__ */ a(
  "div",
  {
    ref: n,
    className: T("-ml-1 flex h-6 w-6 items-center justify-center", e),
    children: /* @__PURE__ */ a(uh, { children: /* @__PURE__ */ b(dh, { children: [
      /* @__PURE__ */ a(
        fh,
        {
          className: "h-5 w-5 cursor-help text-f1-foreground-secondary",
          "aria-label": t,
          children: /* @__PURE__ */ a(gt, { icon: Qc, size: "md" })
        }
      ),
      /* @__PURE__ */ a(hh, { children: /* @__PURE__ */ a("p", { children: t }) })
    ] }) })
  }
));
I2.displayName = "CardInfo";
const O2 = h.forwardRef(({ className: e, title: t, ...n }) => /* @__PURE__ */ a(
  Tn,
  {
    className: T(
      "flex h-6 w-6 items-center justify-center rounded-sm border border-solid border-f1-border text-f1-foreground-secondary transition-colors hover:text-f1-foreground",
      e
    ),
    "aria-label": t,
    ...n,
    children: /* @__PURE__ */ a(gt, { icon: _o, size: "sm" })
  }
));
O2.displayName = "CardLink";
const Es = h.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ a("div", { ref: n, className: T("flex grow flex-col", e), ...t }));
Es.displayName = "CardContent";
const Fs = h.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ a("div", { ref: n, className: T("flex items-center", e), ...t }));
Fs.displayName = "CardFooter";
const J_ = h.forwardRef(function({ className: t, ...n }, r) {
  return /* @__PURE__ */ a(
    "div",
    {
      ref: r,
      className: T("flex text-2xl font-semibold", t),
      ...n
    }
  );
});
Fs.displayName = "CardComment";
const eP = w(
  function({ bare: t = !1, ...n }, r) {
    return /* @__PURE__ */ a(
      "div",
      {
        ref: r,
        role: "separator",
        className: T("-mx-4 h-[1px]", t ? void 0 : "my-4"),
        style: {
          backgroundImage: "repeating-linear-gradient(to right, hsl(var(--neutral-30)) 0, hsl(var(--neutral-30)) 3px, transparent 3px, transparent 7px)"
        },
        ...n
      }
    );
  }
), tP = () => /* @__PURE__ */ a("div", { className: "min-h-[0.15rem] min-w-[0.15rem] rounded-full bg-f1-foreground-secondary" }), nP = w(function({ header: t, alert: n, children: r, action: o, summaries: i }, s) {
  const l = (c) => !!c && !(ee.isValidElement(c) && c.type === ee.Fragment && ee.Children.count(c.props.children) === 0);
  return /* @__PURE__ */ b(Ts, { className: "flex gap-4", ref: s, children: [
    t && /* @__PURE__ */ a(Ns, { children: /* @__PURE__ */ b("div", { className: "flex flex-1 flex-col gap-4 truncate", children: [
      /* @__PURE__ */ b("div", { className: "flex flex-row items-center justify-between gap-2", children: [
        /* @__PURE__ */ b("div", { className: "flex min-h-6 grow flex-row items-center gap-1.5 truncate", children: [
          t.title && /* @__PURE__ */ a(Ds, { children: t.title }),
          t.subtitle && /* @__PURE__ */ b(me, { children: [
            /* @__PURE__ */ a(tP, {}),
            /* @__PURE__ */ a(ks, { children: t.subtitle })
          ] }),
          t.info && /* @__PURE__ */ a(I2, { content: t.info })
        ] }),
        n && /* @__PURE__ */ a(oi, { text: n, variant: "critical", hasDot: !0 }),
        t.link && /* @__PURE__ */ a(O2, { href: t.link.url, title: t.link.title })
      ] }),
      t.comment && /* @__PURE__ */ b("div", { className: "flex flex-row items-center gap-3", children: [
        /* @__PURE__ */ a(J_, { className: T(!!t.isBlur && "blur-md"), children: t.comment }),
        !!t.hasBlur && /* @__PURE__ */ a("span", { children: /* @__PURE__ */ a(
          nn,
          {
            icon: t.isBlur ? qc : Xc,
            hideLabel: !0,
            label: "hide/show",
            variant: "outline",
            round: !0,
            onClick: t.toggleBlur,
            size: "sm"
          }
        ) })
      ] })
    ] }) }),
    /* @__PURE__ */ b(Es, { className: "flex flex-col gap-4", children: [
      i && /* @__PURE__ */ a("div", { className: "flex flex-row", children: i.map((c, u) => /* @__PURE__ */ b("div", { className: "grow", children: [
        /* @__PURE__ */ a("div", { className: "mb-0.5 text-sm text-f1-foreground-secondary", children: c.label }),
        /* @__PURE__ */ b("div", { className: "flex flex-row items-end gap-0.5 text-xl font-semibold", children: [
          !!c.prefixUnit && /* @__PURE__ */ a("div", { className: "text-lg font-medium", children: c.prefixUnit }),
          c.value,
          !!c.postfixUnit && /* @__PURE__ */ a("div", { className: "text-lg font-medium", children: c.postfixUnit })
        ] })
      ] }, u)) }),
      ee.Children.toArray(r).filter(l).map((c, u) => /* @__PURE__ */ b(me, { children: [
        u > 0 && /* @__PURE__ */ a(eP, { bare: !0 }),
        c
      ] }))
    ] }),
    o && /* @__PURE__ */ a(Fs, { children: /* @__PURE__ */ a(nn, { variant: "outline", size: "md", ...o }) })
  ] });
}), rP = Ke("", {
  variants: {
    height: {
      sm: "h-36",
      md: "h-48",
      lg: "h-60"
    }
  }
}), oP = w(
  function({ header: t, height: n }, r) {
    return /* @__PURE__ */ b(
      Ts,
      {
        className: "flex gap-4",
        ref: r,
        "aria-live": "polite",
        "aria-busy": !0,
        children: [
          /* @__PURE__ */ a(Ns, { children: /* @__PURE__ */ b(
            "div",
            {
              className: "flex h-6 w-full flex-row items-center gap-1.5",
              "aria-hidden": !0,
              children: [
                t != null && t.title ? /* @__PURE__ */ a(Ds, { children: t.title }) : /* @__PURE__ */ a(io, { className: "h-4 w-full max-w-16" }),
                (t == null ? void 0 : t.subtitle) && /* @__PURE__ */ a(ks, { children: t.subtitle })
              ]
            }
          ) }),
          /* @__PURE__ */ a(
            Es,
            {
              "aria-hidden": !0,
              className: T(rP({ height: n })),
              children: [...Array(4)].map((o, i) => /* @__PURE__ */ a(
                io,
                {
                  className: `mb-1 h-6 ${["w-full", "w-1/2", "w-3/4", "w-1/4"][i]}`
                },
                i
              ))
            }
          )
        ]
      }
    );
  }
), tn = It(nP, oP), et = Object.assign(
  w(function({ chart: t, summaries: n, ...r }, o) {
    return /* @__PURE__ */ a(tn, { ref: o, ...r, summaries: n, children: t && /* @__PURE__ */ a("div", { className: "min-h-52 grow pt-2", children: t }) });
  }),
  {
    Skeleton: tn.Skeleton
  }
), aP = It(
  w(function({ hasBlur: t, ...n }, r) {
    const [o, i] = be(!!t), s = () => i((u) => !u), l = {
      ...n,
      header: {
        ...n.header,
        hasBlur: t,
        isBlur: o,
        toggleBlur: s
      }
    }, c = {
      ...n.chart,
      yAxis: n.chart.yAxis ? { ...n.chart.yAxis, isBlur: o } : { hide: !0 }
    };
    return /* @__PURE__ */ a(
      et,
      {
        ref: r,
        ...l,
        chart: /* @__PURE__ */ a(ph, { ...c })
      }
    );
  }),
  et.Skeleton
), iP = w(function(t, n) {
  return /* @__PURE__ */ a(
    et,
    {
      ref: n,
      ...t,
      chart: /* @__PURE__ */ a(mh, { aspect: null, yAxis: { hide: !0 }, ...t.chart })
    }
  );
}), sP = It(
  iP,
  et.Skeleton
), lP = It(
  w(
    function(t, n) {
      return /* @__PURE__ */ a(
        et,
        {
          ref: n,
          ...t,
          chart: /* @__PURE__ */ a(vh, { aspect: null, yAxis: { hide: !0 }, ...t.chart })
        }
      );
    }
  ),
  et.Skeleton
), cP = It(
  w(
    function(t, n) {
      return /* @__PURE__ */ a(
        et,
        {
          ref: n,
          ...t,
          chart: /* @__PURE__ */ a(gh, { aspect: null, ...t.chart })
        }
      );
    }
  ),
  et.Skeleton
), uP = It(
  w(
    function(t, n) {
      return /* @__PURE__ */ a(et, { ref: n, ...t, chart: null });
    }
  ),
  et.Skeleton
), dP = It(
  w(
    function(t, n) {
      return /* @__PURE__ */ a(
        et,
        {
          ref: n,
          ...t,
          chart: /* @__PURE__ */ a(
            wh,
            {
              aspect: null,
              xAxis: { hide: !0 },
              ...t.chart
            }
          )
        }
      );
    }
  ),
  et.Skeleton
), UA = De(
  {
    name: "AreaChartWidget",
    type: "info"
  },
  aP
), GA = De(
  {
    name: "BarChartWidget",
    type: "info"
  },
  sP
), jA = De(
  {
    name: "LineChartWidget",
    type: "info"
  },
  lP
), KA = De(
  {
    name: "PieChartWidget",
    type: "info"
  },
  cP
), YA = De(
  {
    name: "VerticalBarChartWidget",
    type: "info"
  },
  dP
), qA = De(
  {
    name: "SummariesWidget",
    type: "info"
  },
  uP
);
function XA({
  label: e,
  title: t,
  subtitle: n,
  data: r,
  helpText: o,
  legend: i = !1
}) {
  return /* @__PURE__ */ b("div", { children: [
    /* @__PURE__ */ b("div", { className: "space-y-2", children: [
      /* @__PURE__ */ a("span", { className: "text-sm font-semibold uppercase leading-none text-f1-foreground-secondary", children: e }),
      /* @__PURE__ */ b("div", { className: "flex items-baseline justify-between", children: [
        /* @__PURE__ */ a("span", { className: "text-2xl font-semibold", children: t }),
        /* @__PURE__ */ a("span", { className: "text-2xl font-semibold text-f1-foreground-secondary", children: n })
      ] })
    ] }),
    /* @__PURE__ */ a("div", { className: "mt-2", children: /* @__PURE__ */ a(yh, { data: r, legend: i }) }),
    !!o && /* @__PURE__ */ a("div", { className: "mt-1", children: /* @__PURE__ */ a("span", { className: "text-sm", children: o }) })
  ] });
}
const fP = w(function({ title: t, subtitle: n, description: r, color: o, isPending: i }, s) {
  return /* @__PURE__ */ b(
    "div",
    {
      ref: s,
      className: "relative flex flex-row items-stretch gap-3 overflow-hidden rounded-sm px-2 py-1.5",
      children: [
        /* @__PURE__ */ a(
          "div",
          {
            className: "absolute bottom-0 left-0 right-0 top-0 opacity-10",
            style: {
              background: `linear-gradient(to right, ${o}, transparent)`
            }
          }
        ),
        /* @__PURE__ */ a(
          "div",
          {
            className: "min-h-10 min-w-1 rounded-2xs",
            style: i ? {
              backgroundImage: `repeating-linear-gradient(
              135deg,
              ${o} 0px,
              ${o} 4px, 
              transparent 4px, 
              transparent 5.5px
            )`
            } : {
              backgroundColor: o
            }
          }
        ),
        /* @__PURE__ */ b("div", { className: "flex flex-col gap-0.5", children: [
          /* @__PURE__ */ b("p", { className: "line-clamp-3 font-medium", children: [
            t,
            /* @__PURE__ */ a("span", { className: "pl-1", children: n })
          ] }),
          /* @__PURE__ */ a("p", { className: "text-f1-foreground-secondary", children: r })
        ] })
      ]
    }
  );
}), ZA = w(
  function({ events: t, title: n, limit: r = 3 }, o) {
    return t.length ? /* @__PURE__ */ b("div", { className: "flex flex-col gap-3", ref: o, children: [
      n && /* @__PURE__ */ a("p", { className: "text-sm font-semibold uppercase text-f1-foreground-secondary", children: n }),
      /* @__PURE__ */ a("div", { className: "flex flex-col gap-2", children: t.slice(0, r).map((i) => /* @__PURE__ */ a(
        fP,
        {
          title: i.title,
          subtitle: i.subtitle,
          description: i.description,
          color: i.color,
          isPending: i.isPending
        },
        i.title
      )) })
    ] }) : null;
  }
), hP = {
  office: Jc,
  briefcase: Hc,
  home: Zc
}, pP = w(
  function({ icon: t, texts: n }, r) {
    const o = hP[t];
    return /* @__PURE__ */ b(
      "div",
      {
        ref: r,
        className: "flex flex-row items-start gap-1 text-f1-foreground-secondary",
        children: [
          /* @__PURE__ */ a("div", { className: "relative top-0.5", children: /* @__PURE__ */ a(gt, { icon: o, size: "sm" }) }),
          /* @__PURE__ */ a("p", { className: "font-medium text-f1-foreground", children: n.map((i, s) => /* @__PURE__ */ a(
            "span",
            {
              className: s > 0 ? "before:mx-1 before:content-['·']" : void 0,
              children: i
            },
            i
          )) })
        ]
      }
    );
  }
), QA = w(
  function({ list: t }, n) {
    return /* @__PURE__ */ a("div", { ref: n, className: "flex flex-col gap-2", children: t.map((r) => /* @__PURE__ */ a(pP, { icon: r.icon, texts: r.texts }, r.texts[0])) });
  }
), JA = w(
  function({ items: t }, n) {
    return /* @__PURE__ */ a(
      "div",
      {
        ref: n,
        className: "grid auto-cols-fr grid-flow-col items-end gap-x-3",
        children: t.map(({ label: r, content: o, icon: i, color: s }) => /* @__PURE__ */ b(me, { children: [
          /* @__PURE__ */ a("p", { className: "row-start-1 line-clamp-2 text-sm font-medium uppercase text-f1-foreground-secondary", children: r }),
          /* @__PURE__ */ b("div", { className: "row-start-2 flex items-baseline gap-1", children: [
            /* @__PURE__ */ a("p", { className: "text-2xl font-semibold", children: o }),
            i && /* @__PURE__ */ a("span", { className: s, children: /* @__PURE__ */ a(gt, { icon: i, size: "md" }) })
          ] })
        ] }))
      }
    );
  }
), mP = ({ onClick: e, className: t, children: n }) => e ? /* @__PURE__ */ a("a", { className: t, onClick: e, tabIndex: 0, children: n }) : /* @__PURE__ */ a("div", { className: t, tabIndex: -1, children: n });
function vP({
  task: e,
  status: t,
  onClick: n,
  hideIcon: r = !1
}) {
  const o = T(
    "flex flex-row items-center gap-2 rounded-[8px] border border-solid border-transparent px-2 py-[6px]",
    n ? "cursor-pointer hover:bg-f1-background-tertiary focus:border-f1-background-selected-bold focus:outline-none" : void 0
  );
  return /* @__PURE__ */ b(mP, { onClick: (s) => {
    s.preventDefault(), n == null || n(e);
  }, className: o, children: [
    !r && (t === "due" || t === "no-due") && /* @__PURE__ */ a(
      Kc,
      {
        width: 24,
        color: t === "no-due" ? "hsl(var(--neutral-40))" : "hsl(var(--neutral-50))"
      }
    ),
    !r && t === "in-progress" && /* @__PURE__ */ a(Lc, {}),
    /* @__PURE__ */ a("p", { className: "mt-0.5 line-clamp-2 flex-1 font-medium", children: e.text }),
    !!e.badge && /* @__PURE__ */ a(
      oi,
      {
        text: e.badge.text,
        variant: e.badge.isPastDue ? "critical" : "neutral"
      }
    ),
    !!e.counter && /* @__PURE__ */ a(Rd, { value: e.counter })
  ] });
}
function eT({
  tasks: e,
  onClickTask: t,
  hideIcons: n = !1,
  maxTasksToShow: r = 5,
  emptyMessage: o = "No tasks assigned"
}) {
  const s = [
    { key: "inProgress", status: "in-progress" },
    { key: "due", status: "due" },
    { key: "noDue", status: "no-due" }
  ].flatMap(
    ({ key: c, status: u }) => (e[c] || []).map(({ id: d, text: f, badge: p, counter: m }) => ({
      id: d,
      text: f,
      badge: p,
      counter: m,
      status: u
    }))
  ), l = !s.length;
  return /* @__PURE__ */ a("div", { className: "flex flex-col gap-0", children: l ? /* @__PURE__ */ a("p", { className: "font-medium", children: o }) : s.slice(0, r).map((c) => /* @__PURE__ */ a(
    vP,
    {
      task: c,
      status: c.status,
      hideIcon: n,
      onClick: t
    },
    c.id
  )) });
}
const tT = w(
  function({ time: t, status: n, statusText: r, title: o }, i) {
    return /* @__PURE__ */ b("div", { className: "flex flex-col gap-2", children: [
      /* @__PURE__ */ b(
        "div",
        {
          ref: i,
          className: "flex flex-row items-center gap-3 text-f1-foreground-secondary",
          children: [
            /* @__PURE__ */ a("p", { className: "mr-auto text-sm font-semibold uppercase", children: o }),
            /* @__PURE__ */ a(oi, { text: r, hasDot: !0, variant: {
              in: "positive",
              out: "neutral",
              break: "warning"
            }[n] })
          ]
        }
      ),
      /* @__PURE__ */ a("p", { className: "text-3xl font-semibold", children: t })
    ] });
  }
), gP = ({ title: e, info: t }) => /* @__PURE__ */ b("div", { className: "flex items-center justify-between", children: [
  /* @__PURE__ */ a("p", { className: "flex text-f1-foreground-secondary", children: e }),
  /* @__PURE__ */ a("div", { className: "basis-16 justify-self-end text-right font-medium", children: t })
] }), nT = w(
  function({ title: t, list: n }, r) {
    return /* @__PURE__ */ b("div", { ref: r, className: "flex flex-col gap-2", children: [
      t && /* @__PURE__ */ a("div", { className: "font-medium", children: t }),
      n.map((o) => /* @__PURE__ */ a(gP, { title: o.title, info: o.info }, o.title))
    ] });
  }
);
var wP = "Toggle", Is = h.forwardRef((e, t) => {
  const { pressed: n, defaultPressed: r = !1, onPressedChange: o, ...i } = e, [s = !1, l] = ot({
    prop: n,
    onChange: o,
    defaultProp: r
  });
  return /* @__PURE__ */ a(
    Y.button,
    {
      type: "button",
      "aria-pressed": s,
      "data-state": s ? "on" : "off",
      "data-disabled": e.disabled ? "" : void 0,
      ...i,
      ref: t,
      onClick: V(e.onClick, () => {
        e.disabled || l(!s);
      })
    }
  );
});
Is.displayName = wP;
var V2 = Is, In = "ToggleGroup", [B2, rT] = Et(In, [
  Bo
]), L2 = Bo(), Os = ee.forwardRef((e, t) => {
  const { type: n, ...r } = e;
  if (n === "single")
    return /* @__PURE__ */ a(yP, { ...r, ref: t });
  if (n === "multiple")
    return /* @__PURE__ */ a(xP, { ...r, ref: t });
  throw new Error(`Missing prop \`type\` expected on \`${In}\``);
});
Os.displayName = In;
var [$2, z2] = B2(In), yP = ee.forwardRef((e, t) => {
  const {
    value: n,
    defaultValue: r,
    onValueChange: o = () => {
    },
    ...i
  } = e, [s, l] = ot({
    prop: n,
    defaultProp: r,
    onChange: o
  });
  return /* @__PURE__ */ a(
    $2,
    {
      scope: e.__scopeToggleGroup,
      type: "single",
      value: s ? [s] : [],
      onItemActivate: l,
      onItemDeactivate: ee.useCallback(() => l(""), [l]),
      children: /* @__PURE__ */ a(H2, { ...i, ref: t })
    }
  );
}), xP = ee.forwardRef((e, t) => {
  const {
    value: n,
    defaultValue: r,
    onValueChange: o = () => {
    },
    ...i
  } = e, [s = [], l] = ot({
    prop: n,
    defaultProp: r,
    onChange: o
  }), c = ee.useCallback(
    (d) => l((f = []) => [...f, d]),
    [l]
  ), u = ee.useCallback(
    (d) => l((f = []) => f.filter((p) => p !== d)),
    [l]
  );
  return /* @__PURE__ */ a(
    $2,
    {
      scope: e.__scopeToggleGroup,
      type: "multiple",
      value: s,
      onItemActivate: c,
      onItemDeactivate: u,
      children: /* @__PURE__ */ a(H2, { ...i, ref: t })
    }
  );
});
Os.displayName = In;
var [bP, CP] = B2(In), H2 = ee.forwardRef(
  (e, t) => {
    const {
      __scopeToggleGroup: n,
      disabled: r = !1,
      rovingFocus: o = !0,
      orientation: i,
      dir: s,
      loop: l = !0,
      ...c
    } = e, u = L2(n), d = kn(s), f = { role: "group", dir: d, ...c };
    return /* @__PURE__ */ a(bP, { scope: n, rovingFocus: o, disabled: r, children: o ? /* @__PURE__ */ a(
      Ld,
      {
        asChild: !0,
        ...u,
        orientation: i,
        dir: d,
        loop: l,
        children: /* @__PURE__ */ a(Y.div, { ...f, ref: t })
      }
    ) : /* @__PURE__ */ a(Y.div, { ...f, ref: t }) });
  }
), so = "ToggleGroupItem", W2 = ee.forwardRef(
  (e, t) => {
    const n = z2(so, e.__scopeToggleGroup), r = CP(so, e.__scopeToggleGroup), o = L2(e.__scopeToggleGroup), i = n.value.includes(e.value), s = r.disabled || e.disabled, l = { ...e, pressed: i, disabled: s }, c = ee.useRef(null);
    return r.rovingFocus ? /* @__PURE__ */ a(
      $d,
      {
        asChild: !0,
        ...o,
        focusable: !s,
        active: i,
        ref: c,
        children: /* @__PURE__ */ a(H0, { ...l, ref: t })
      }
    ) : /* @__PURE__ */ a(H0, { ...l, ref: t });
  }
);
W2.displayName = so;
var H0 = ee.forwardRef(
  (e, t) => {
    const { __scopeToggleGroup: n, value: r, ...o } = e, i = z2(so, n), s = { role: "radio", "aria-checked": e.pressed, "aria-pressed": void 0 }, l = i.type === "single" ? s : void 0;
    return /* @__PURE__ */ a(
      Is,
      {
        ...l,
        ...o,
        ref: t,
        onPressedChange: (c) => {
          c ? i.onItemActivate(r) : i.onItemDeactivate(r);
        }
      }
    );
  }
), U2 = Os, G2 = W2;
const j2 = Ke(
  T(
    "inline-flex items-center justify-center rounded-xs text-sm font-medium transition-colors hover:bg-f1-background-secondary hover:text-f1-foreground-secondary disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-f1-background-secondary data-[state=on]:text-f1-foreground",
    Ft()
  ),
  {
    variants: {
      variant: {
        default: "bg-transparent",
        outline: "border border-f1-border bg-transparent hover:bg-f1-background-secondary hover:text-f1-foreground"
      },
      size: {
        default: "h-10 px-3",
        sm: "h-9 px-2.5",
        lg: "h-11 px-5"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
), MP = h.forwardRef(({ className: e, variant: t, size: n, ...r }, o) => /* @__PURE__ */ a(
  V2,
  {
    ref: o,
    className: T(j2({ variant: t, size: n, className: e })),
    ...r
  }
));
MP.displayName = V2.displayName;
const K2 = h.createContext({
  size: "default",
  variant: "default"
}), Y2 = h.forwardRef(({ className: e, variant: t, size: n, children: r, ...o }, i) => /* @__PURE__ */ a(
  U2,
  {
    ref: i,
    className: T("flex items-center justify-center gap-1", e),
    ...o,
    children: /* @__PURE__ */ a(K2.Provider, { value: { variant: t, size: n }, children: r })
  }
));
Y2.displayName = U2.displayName;
const q2 = h.forwardRef(({ className: e, children: t, variant: n, size: r, ...o }, i) => {
  const s = h.useContext(K2);
  return /* @__PURE__ */ a(
    G2,
    {
      ref: i,
      className: T(
        j2({
          variant: s.variant || n,
          size: s.size || r
        }),
        e
      ),
      ...o,
      children: t
    }
  );
});
q2.displayName = G2.displayName;
const SP = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday"
], oT = w(
  function({ daysOfTheWeek: t = SP, activatedDays: n = [] }, r) {
    return /* @__PURE__ */ a(
      Y2,
      {
        type: "multiple",
        value: n,
        disabled: !0,
        className: "flex justify-start",
        ref: r,
        children: t.map((o) => /* @__PURE__ */ a(
          q2,
          {
            "aria-label": o,
            value: o,
            className: "h-6 w-6 shrink-0 grow-0 basis-6 p-0 text-sm font-medium disabled:select-none disabled:bg-f1-background-tertiary disabled:text-f1-foreground-secondary disabled:opacity-100 disabled:data-[state=on]:border disabled:data-[state=on]:border-solid disabled:data-[state=on]:border-f1-border-selected disabled:data-[state=on]:bg-f1-background-selected disabled:data-[state=on]:text-f1-foreground-selected",
            children: o[0]
          },
          o
        ))
      }
    );
  }
);
var RP = Object.defineProperty, _P = Object.defineProperties, PP = Object.getOwnPropertyDescriptors, lo = Object.getOwnPropertySymbols, X2 = Object.prototype.hasOwnProperty, Z2 = Object.prototype.propertyIsEnumerable, W0 = (e, t, n) => t in e ? RP(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, Ze = (e, t) => {
  for (var n in t || (t = {})) X2.call(t, n) && W0(e, n, t[n]);
  if (lo) for (var n of lo(t)) Z2.call(t, n) && W0(e, n, t[n]);
  return e;
}, zo = (e, t) => _P(e, PP(t)), AP = (e, t) => {
  var n = {};
  for (var r in e) X2.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && lo) for (var r of lo(e)) t.indexOf(r) < 0 && Z2.call(e, r) && (n[r] = e[r]);
  return n;
}, TP = (e) => e.right - e.left < 5 || e.bottom && e.bottom - e.top < 5, NP = ({ spotsList: e, usedSpot: t }) => e.some((n) => n !== t && t.left === n.left), DP = ({ position: e, spot: t, stone: n }) => {
  if (e.left > t.left && t.right >= e.left && e.top + n.height > t.top) {
    if (t.bottom && t.bottom < e.top) return t;
    let r = Ze({}, t);
    return r.right = e.left, r;
  }
  return null;
}, kP = ({ position: e, stone: t, spot: n }) => {
  if (e.left + t.width > n.left && e.top >= n.top) {
    if (n.bottom && n.bottom < e.top || n.right < e.left) return n;
    let r = Ze({}, n);
    return r.bottom = e.top, r;
  }
  return null;
}, EP = ({ stone: e, position: t, spotsList: n, optimalSpot: r }) => {
  let o = Ze({}, r);
  return o.left = t.left + e.width, TP(o) || NP({ usedSpot: o, spotsList: n }) ? null : o;
}, FP = ({ spots: e, position: t, optimalSpot: n, stone: r }) => e.map((o, i, s) => {
  if (o === n) return EP({ stone: r, position: t, optimalSpot: n, spotsList: s });
  let l = DP({ position: t, spot: o, stone: r });
  return l || kP({ position: t, stone: r, spot: o }) || o;
});
function IP(e, t) {
  for (let n = 0, r = t.length; n < r; n++) {
    let o = t[n];
    if (e(o)) return o;
  }
  return null;
}
var OP = (e, t) => t.filter(e), VP = (e, t) => [...t].sort(e), BP = (e, t) => e.top === t.top ? e.left < t.left ? -1 : 1 : e.top < t.top ? -1 : 1, LP = (e) => VP(BP, e), $P = ({ availableSpots: e, optimalSpot: t, containerSize: n, stone: r }) => {
  let o = { right: n, top: t.top + r.height, left: t.left };
  t.bottom && (o.bottom = t.bottom);
  for (let i = 0, s = e.length; i < s; i += 1) {
    let l = e[i];
    if (o.left < l.left && o.top < l.top) {
      o.right = l.left;
      break;
    }
  }
  return o;
}, zP = (e, t) => {
  let n = e.right - e.left >= t.width;
  if (!e.bottom) return n;
  let r = e.bottom - e.top >= t.height;
  return n && r;
}, HP = ({ availableSpots: e, stone: t }) => IP((n) => zP(n, t), e);
function WP({ stone: e, availableSpots: t, containerSize: n }) {
  let r = HP({ availableSpots: t, stone: e }), o = { left: r.left, top: r.top }, i = $P({ optimalSpot: r, availableSpots: t.filter((c) => c !== r), stone: e, containerSize: n }), s = [...t, i], l = FP({ spots: s, position: o, optimalSpot: r, stone: e });
  return s = [...OP(Boolean, l)], s = LP(s), { position: o, availableSpots: s };
}
var UP = ({ stones: e, containerSize: t }) => {
  let n = { positions: [], containerHeight: 0, availableSpots: [] };
  if (!e.length) return n;
  let r = 0, o = [], i = [{ top: 0, left: 0, right: t }];
  for (let s of e) {
    let l = WP({ availableSpots: i, stone: s, containerSize: t }), c = l.position.top + s.height;
    r < c && (r = c), o.push(l.position), i = l.availableSpots;
  }
  return { availableSpots: i, positions: o, containerHeight: r };
}, GP = (e) => e.reduce((t, n) => {
  if (!n) return t;
  let r = n.getBoundingClientRect();
  return t.push({ width: r.width, height: r.height }), t;
}, []), jP = ({ boxesRefs: e, wrapperRef: t, children: n, windowWidth: r, wrapperWidth: o }) => {
  let [{ positions: i, containerHeight: s, stones: l, availableSpots: c }, u] = be({ positions: [], containerHeight: null, stones: [], availableSpots: [] });
  return We(() => {
    var d, f;
    let p = GP(e.current), m = (f = (d = t.current) == null ? void 0 : d.offsetWidth) != null ? f : 0;
    if (m === null) return;
    let v = UP({ stones: p, containerSize: m });
    u(zo(Ze({}, v), { stones: p }));
  }, [n, e, t, r, o]), { positions: i, containerHeight: s, stones: l, availableSpots: c };
}, KP = (e) => ({ fade: `${e}ms opacity ease`, fadeMove: `
    ${e}ms opacity ease,
    ${e}ms top ease,
    ${e}ms left ease
  `, move: `
    ${e}ms top ease,
    ${e}ms left ease
  ` }), YP = ({ transition: e, transitionDuration: t }) => e ? { transition: KP(t)[e] } : null, qP = (e) => e ? zo(Ze({}, e), { opacity: 1 }) : { opacity: 0, top: 0, left: 0 }, XP = ({ style: e, position: t, transition: n, transitionDuration: r }) => Ze(Ze(zo(Ze({}, e), { position: "absolute" }), qP(t)), YP({ transition: n, transitionDuration: r }));
function ZP(e, t, n) {
  let r;
  return function(...o) {
    r && clearTimeout(r), r = setTimeout(function() {
      r = null, e.apply(null, o);
    }, t);
  };
}
var QP = () => {
  let [e, t] = be(), n = ze(ZP(t, 300));
  return We(() => {
    let r = () => {
      n.current(window.innerWidth);
    };
    return window.addEventListener("resize", r), () => {
      window.removeEventListener("resize", r);
    };
  }, []), e;
}, JP = (e) => {
  let [t, n] = be(null);
  return We(() => {
    let r = new ResizeObserver((o) => {
      for (let i of o) n(i.contentRect.width);
    });
    return e.current && r.observe(e.current), () => {
      r.disconnect();
    };
  }, [e]), t;
}, eA = (e) => {
  var t = e, { children: n, style: r, transition: o = !1, transitionDuration: i = 500, transitionStep: s = 50 } = t, l = AP(t, ["children", "style", "transition", "transitionDuration", "transitionStep"]);
  let c = ze([]), u = ze(null), d = QP(), f = JP(u), { positions: p, containerHeight: m } = jP({ boxesRefs: c, wrapperRef: u, children: n, windowWidth: d, wrapperWidth: f }), v = Ze({ minHeight: m ?? 0, position: "relative" }, r);
  return a("div", zo(Ze({ ref: u, style: v }, l), { children: ai.map(n, (g, x) => {
    if (typeof g != "object" || !g || !("type" in g)) return g;
    let C = { style: XP({ style: g.props.style, position: p[x], transition: o, transitionDuration: i }), ref: (y) => c.current[x] = y };
    return Ch(g, Ze(Ze({}, g.props), C));
  }) }));
};
const tA = { sm: 340, md: 480, lg: 640 }, U0 = w(
  function({ children: t, widgetWidth: n = "sm" }, r) {
    const o = tA[n], [i, s] = be(), l = ai.toArray(t), c = ze(null);
    return We(() => {
      const u = () => {
        var f;
        const d = (f = c.current) == null ? void 0 : f.offsetWidth;
        d && s(Math.floor(d / o) || 1);
      };
      return u(), window.addEventListener("resize", u), () => {
        window.removeEventListener("resize", u);
      };
    }, [s, o]), /* @__PURE__ */ a("div", { ref: r, className: "text-f1-foreground", children: /* @__PURE__ */ a("div", { ref: c, children: i === 1 ? /* @__PURE__ */ a("div", { className: "flex flex-col gap-4 *:shadow", children: t }) : i && i > 1 && /* @__PURE__ */ a("div", { className: "relative -mr-4", children: /* @__PURE__ */ a(eA, { children: l.map((u, d) => /* @__PURE__ */ a(
      "div",
      {
        style: {
          width: `${Math.floor(1 / i * 1e4) / 100 - 0.05}%`
        },
        className: "pb-[0.01px] pr-4 *:mb-4 *:shadow",
        children: u
      },
      d
    )) }, i) }) }) });
  }
), nA = ["sm", "lg", "md", "md", "lg", "sm", "lg", "lg", "sm", "sm", "md", "md"], aT = It(U0, () => /* @__PURE__ */ a(F2, { children: /* @__PURE__ */ a(U0, { children: nA.map((e, t) => /* @__PURE__ */ a(tn.Skeleton, { height: e }, t)) }) })), G0 = ({ children: e }) => /* @__PURE__ */ a(
  "div",
  {
    className: T(
      "flex min-h-40 flex-row items-stretch gap-4 text-f1-foreground [&>*]:min-w-96 [&>*]:max-w-lg [&>*]:flex-grow [&>*]:basis-0"
    ),
    children: e
  }
), iT = It(
  w(function({ children: t }, n) {
    return /* @__PURE__ */ a(Vi, { ref: n, children: /* @__PURE__ */ a(G0, { children: t }) });
  }),
  () => /* @__PURE__ */ a(F2, { orientation: "horizontal", children: /* @__PURE__ */ b(G0, { children: [
    /* @__PURE__ */ a(tn.Skeleton, {}),
    /* @__PURE__ */ a(tn.Skeleton, {}),
    /* @__PURE__ */ a(tn.Skeleton, {})
  ] }) })
), rA = (e, t) => /* @__PURE__ */ b("svg", { width: "192", height: "192", viewBox: "0 0 192 192", fill: "none", ref: t, ...e, xmlns: "http://www.w3.org/2000/svg", children: [
  /* @__PURE__ */ a("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M72 90C72 76.7452 82.7452 66 96 66C109.255 66 120 76.7452 120 90C120 103.255 109.255 114 96 114C82.7452 114 72 103.255 72 90ZM96 78C89.3726 78 84 83.3726 84 90C84 96.6274 89.3726 102 96 102C102.627 102 108 96.6274 108 90C108 83.3726 102.627 78 96 78Z", fill: "#E51943", fillOpacity: "0.05" }),
  /* @__PURE__ */ a("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M18 60C18 50.0589 26.0589 42 36 42H156C165.941 42 174 50.0589 174 60V120C174 129.941 165.941 138 156 138H36C26.0589 138 18 129.941 18 120V60ZM162 60C162 56.6863 159.314 54 156 54H144C144 63.9411 152.059 72 162 72V60ZM132 54C132 70.5685 145.431 84 162 84V96C145.431 96 132 109.431 132 126H60C60 109.431 46.5685 96 30 96V84C46.5685 84 60 70.5685 60 54H132ZM36 54H48C48 63.9411 39.9411 72 30 72V60C30 56.6863 32.6863 54 36 54ZM144 126H156C159.314 126 162 123.314 162 120V108C152.059 108 144 116.059 144 126ZM48 126C48 116.059 39.9411 108 30 108V120C30 123.314 32.6863 126 36 126H48Z", fill: "#E51943", fillOpacity: "0.05" }),
  /* @__PURE__ */ a("path", { d: "M35.3664 147.317C33.8845 144.353 30.2804 143.152 27.3166 144.633C24.3527 146.115 23.1514 149.719 24.6333 152.683C27.4882 158.393 33.3242 162 39.7081 162H152.292C158.676 162 164.511 158.393 167.366 152.683C168.848 149.719 167.647 146.115 164.683 144.633C161.719 143.152 158.115 144.353 156.633 147.317C155.811 148.961 154.13 150 152.292 150H39.7081C37.8695 150 36.1887 148.961 35.3664 147.317Z", fill: "#E51943", fillOpacity: "0.05" })
] }), oA = w(rA), aA = {
  "area-graph": zc,
  cash: oA
}, sT = w(
  function({ title: t, content: n, icon: r, buttonLabel: o, buttonAction: i, promote: s = !1 }, l) {
    const c = aA[r];
    return /* @__PURE__ */ a(
      tn,
      {
        header: {
          title: t
        },
        action: o ? {
          label: o,
          variant: s ? "promote" : "default",
          onClick: i
        } : void 0,
        ref: l,
        children: /* @__PURE__ */ b("div", { className: "relative flex min-h-28 flex-1", children: [
          /* @__PURE__ */ a(c, { className: "absolute -top-8 right-0 z-10" }),
          /* @__PURE__ */ a("p", { className: "flex w-3/4 text-xl font-semibold", children: n })
        ] })
      }
    );
  }
), lT = De(
  {
    name: "ScrollArea",
    type: "layout"
  },
  Vi
);
export {
  wA as Alert,
  xA as AlertDescription,
  yA as AlertTitle,
  SA as ApplicationFrame,
  UA as AreaChartWidget,
  HA as AutoGrid,
  ei as Avatar,
  GA as BarChartWidget,
  aC as Calendar,
  XA as CategoryBarSection,
  Rd as Counter,
  aT as Dashboard,
  uS as DetailsItem,
  CA as DetailsItemsList,
  LA as Dialog,
  ZA as EventsList,
  pP as IconText,
  QA as IconTextsList,
  JA as IndicatorsList,
  MA as InfoPaneLayout,
  mA as Input,
  jA as LineChartWidget,
  DA as Menu,
  _d as ModuleAvatar,
  vA as NumberInput,
  AA as Page,
  PA as PageHeader,
  KA as PieChartWidget,
  WA as PrivateBox,
  lT as ScrollArea,
  kA as SearchBar,
  DM as Select,
  sS as Shortcut,
  EA as Sidebar,
  TA as SidebarHeader,
  zA as Split,
  $A as Stack,
  bA as StandardLayout,
  qA as SummariesWidget,
  OA as Tabs,
  fS as TagsList,
  eT as TasksList,
  pA as Textarea,
  tT as TimeStatus,
  nT as TwoColumnsList,
  FA as User,
  YA as VerticalBarChartWidget,
  lS as VerticalSeparator,
  oT as Weekdays,
  tn as Widget,
  sT as WidgetEmptyState,
  iT as WidgetStrip,
  nS as iconComponents,
  tS as moduleIconNames,
  gA as useForm
};
