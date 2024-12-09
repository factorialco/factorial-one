import { s as $n, t as Cr, v as No, w as M0, x as oo, D as E0, y as Ui, z as L0, G as N0, H as io, J as P0, K as T0, N as R0, O as ac, Q as A0, R as lc, S as D0, T as Td, U as Rd, W as _0, Y as We, P as fe, Z as ia, _ as sa, $ as I0, b as Vt, a0 as ve, a1 as Xe, a2 as ee, a3 as Ie, c as A, a4 as O0, a5 as V0, a6 as F0, d as cc, a7 as B0, a8 as j0, f as $0, a9 as ft, F as W0, I as Re, aa as uc, ab as H0, a as Fe, ac as Un, ad as Jo, ae as Ad, af as ei, ag as Dd, ah as ct, ai as _d, aj as U0, ak as wt, al as Id, C as $e, m as _t, q as ti, E as z0, L as Jt, am as Or, n as aa, u as la, an as G0, M as K0, ao as ca, ap as Ms, aq as Y0, ar as Z0, as as X0, o as Od, at as q0, au as Q0, av as J0, aw as ev, A as tv, B as nv, g as rv, h as ov, V as iv, e as sv } from "./imageHandler-DoCpUY5P.js";
import { jsx as a, jsxs as x, Fragment as Ce } from "react/jsx-runtime";
import * as p from "react";
import le, { PureComponent as av, createContext as tt, useContext as Se, useId as ni, useEffect as Oe, useCallback as It, Component as lv, useLayoutEffect as Vd, useRef as je, useInsertionEffect as Fd, useMemo as Ct, forwardRef as P, Fragment as Bd, createElement as Po, Children as ri, isValidElement as cv, useState as Ae, useImperativeHandle as uv, memo as dv, cloneElement as fv } from "react";
import * as jd from "react-dom";
import $d from "react-dom";
var hv = ["cx", "cy", "innerRadius", "outerRadius", "gridType", "radialLines"];
function xr(e) {
  "@babel/helpers - typeof";
  return xr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, xr(e);
}
function pv(e, t) {
  if (e == null) return {};
  var n = mv(e, t), r, o;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (o = 0; o < i.length; o++)
      r = i[o], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function mv(e, t) {
  if (e == null) return {};
  var n = {}, r = Object.keys(e), o, i;
  for (i = 0; i < r.length; i++)
    o = r[i], !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
function Xt() {
  return Xt = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Xt.apply(this, arguments);
}
function dc(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function kr(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? dc(Object(n), !0).forEach(function(r) {
      gv(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : dc(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function gv(e, t, n) {
  return t = vv(t), t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function vv(e) {
  var t = yv(e, "string");
  return xr(t) == "symbol" ? t : String(t);
}
function yv(e, t) {
  if (xr(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (xr(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var bv = function(t, n, r, o) {
  var i = "";
  return o.forEach(function(s, l) {
    var c = Cr(n, r, t, s);
    l ? i += "L ".concat(c.x, ",").concat(c.y) : i += "M ".concat(c.x, ",").concat(c.y);
  }), i += "Z", i;
}, wv = function(t) {
  var n = t.cx, r = t.cy, o = t.innerRadius, i = t.outerRadius, s = t.polarAngles, l = t.radialLines;
  if (!s || !s.length || !l)
    return null;
  var c = kr({
    stroke: "#ccc"
  }, $n(t, !1));
  return /* @__PURE__ */ le.createElement("g", {
    className: "recharts-polar-grid-angle"
  }, s.map(function(u) {
    var d = Cr(n, r, o, u), f = Cr(n, r, i, u);
    return /* @__PURE__ */ le.createElement("line", Xt({}, c, {
      key: "line-".concat(u),
      x1: d.x,
      y1: d.y,
      x2: f.x,
      y2: f.y
    }));
  }));
}, Cv = function(t) {
  var n = t.cx, r = t.cy, o = t.radius, i = t.index, s = kr(kr({
    stroke: "#ccc"
  }, $n(t, !1)), {}, {
    fill: "none"
  });
  return /* @__PURE__ */ le.createElement("circle", Xt({}, s, {
    className: No("recharts-polar-grid-concentric-circle", t.className),
    key: "circle-".concat(i),
    cx: n,
    cy: r,
    r: o
  }));
}, xv = function(t) {
  var n = t.radius, r = t.index, o = kr(kr({
    stroke: "#ccc"
  }, $n(t, !1)), {}, {
    fill: "none"
  });
  return /* @__PURE__ */ le.createElement("path", Xt({}, o, {
    className: No("recharts-polar-grid-concentric-polygon", t.className),
    key: "path-".concat(r),
    d: bv(n, t.cx, t.cy, t.polarAngles)
  }));
}, kv = function(t) {
  var n = t.polarRadius, r = t.gridType;
  return !n || !n.length ? null : /* @__PURE__ */ le.createElement("g", {
    className: "recharts-polar-grid-concentric"
  }, n.map(function(o, i) {
    var s = i;
    return r === "circle" ? /* @__PURE__ */ le.createElement(Cv, Xt({
      key: s
    }, t, {
      radius: o,
      index: i
    })) : /* @__PURE__ */ le.createElement(xv, Xt({
      key: s
    }, t, {
      radius: o,
      index: i
    }));
  }));
}, Wd = function(t) {
  var n = t.cx, r = n === void 0 ? 0 : n, o = t.cy, i = o === void 0 ? 0 : o, s = t.innerRadius, l = s === void 0 ? 0 : s, c = t.outerRadius, u = c === void 0 ? 0 : c, d = t.gridType, f = d === void 0 ? "polygon" : d, h = t.radialLines, g = h === void 0 ? !0 : h, m = pv(t, hv);
  return u <= 0 ? null : /* @__PURE__ */ le.createElement("g", {
    className: "recharts-polar-grid"
  }, /* @__PURE__ */ le.createElement(wv, Xt({
    cx: r,
    cy: i,
    innerRadius: l,
    outerRadius: u,
    gridType: f,
    radialLines: g
  }, m)), /* @__PURE__ */ le.createElement(kv, Xt({
    cx: r,
    cy: i,
    innerRadius: l,
    outerRadius: u,
    gridType: f,
    radialLines: g
  }, m)));
};
Wd.displayName = "PolarGrid";
function Sv(e) {
  return e && e.length ? e[0] : void 0;
}
var Mv = Sv, Ev = Mv;
const Lv = /* @__PURE__ */ M0(Ev);
function zn(e) {
  "@babel/helpers - typeof";
  return zn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, zn(e);
}
function To() {
  return To = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, To.apply(this, arguments);
}
function fc(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Ke(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? fc(Object(n), !0).forEach(function(r) {
      Ht(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : fc(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function Nv(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function hc(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, Ud(r.key), r);
  }
}
function Pv(e, t, n) {
  return t && hc(e.prototype, t), n && hc(e, n), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function Tv(e, t, n) {
  return t = Ro(t), Rv(e, Hd() ? Reflect.construct(t, n || [], Ro(e).constructor) : t.apply(e, n));
}
function Rv(e, t) {
  if (t && (zn(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return _n(e);
}
function Hd() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (Hd = function() {
    return !!e;
  })();
}
function Ro(e) {
  return Ro = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Ro(e);
}
function _n(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Av(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Es(e, t);
}
function Es(e, t) {
  return Es = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, o) {
    return r.__proto__ = o, r;
  }, Es(e, t);
}
function Ht(e, t, n) {
  return t = Ud(t), t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function Ud(e) {
  var t = Dv(e, "string");
  return zn(t) == "symbol" ? t : String(t);
}
function Dv(e, t) {
  if (zn(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (zn(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Vr = /* @__PURE__ */ function(e) {
  Av(t, e);
  function t() {
    var n;
    Nv(this, t);
    for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++)
      o[i] = arguments[i];
    return n = Tv(this, t, [].concat(o)), Ht(_n(n), "state", {
      isAnimationFinished: !1
    }), Ht(_n(n), "handleAnimationEnd", function() {
      var s = n.props.onAnimationEnd;
      n.setState({
        isAnimationFinished: !0
      }), oo(s) && s();
    }), Ht(_n(n), "handleAnimationStart", function() {
      var s = n.props.onAnimationStart;
      n.setState({
        isAnimationFinished: !1
      }), oo(s) && s();
    }), Ht(_n(n), "handleMouseEnter", function(s) {
      var l = n.props.onMouseEnter;
      l && l(n.props, s);
    }), Ht(_n(n), "handleMouseLeave", function(s) {
      var l = n.props.onMouseLeave;
      l && l(n.props, s);
    }), n;
  }
  return Pv(t, [{
    key: "renderDots",
    value: function(r) {
      var o = this.props, i = o.dot, s = o.dataKey, l = $n(this.props, !1), c = $n(i, !0), u = r.map(function(d, f) {
        var h = Ke(Ke(Ke({
          key: "dot-".concat(f),
          r: 3
        }, l), c), {}, {
          dataKey: s,
          cx: d.x,
          cy: d.y,
          index: f,
          payload: d
        });
        return t.renderDotItem(i, h);
      });
      return /* @__PURE__ */ le.createElement(Ui, {
        className: "recharts-radar-dots"
      }, u);
    }
  }, {
    key: "renderPolygonStatically",
    value: function(r) {
      var o = this.props, i = o.shape, s = o.dot, l = o.isRange, c = o.baseLinePoints, u = o.connectNulls, d;
      return /* @__PURE__ */ le.isValidElement(i) ? d = /* @__PURE__ */ le.cloneElement(i, Ke(Ke({}, this.props), {}, {
        points: r
      })) : oo(i) ? d = i(Ke(Ke({}, this.props), {}, {
        points: r
      })) : d = /* @__PURE__ */ le.createElement(L0, To({}, $n(this.props, !0), {
        onMouseEnter: this.handleMouseEnter,
        onMouseLeave: this.handleMouseLeave,
        points: r,
        baseLinePoints: l ? c : null,
        connectNulls: u
      })), /* @__PURE__ */ le.createElement(Ui, {
        className: "recharts-radar-polygon"
      }, d, s ? this.renderDots(r) : null);
    }
  }, {
    key: "renderPolygonWithAnimation",
    value: function() {
      var r = this, o = this.props, i = o.points, s = o.isAnimationActive, l = o.animationBegin, c = o.animationDuration, u = o.animationEasing, d = o.animationId, f = this.state.prevPoints;
      return /* @__PURE__ */ le.createElement(N0, {
        begin: l,
        duration: c,
        isActive: s,
        easing: u,
        from: {
          t: 0
        },
        to: {
          t: 1
        },
        key: "radar-".concat(d),
        onAnimationEnd: this.handleAnimationEnd,
        onAnimationStart: this.handleAnimationStart
      }, function(h) {
        var g = h.t, m = f && f.length / i.length, v = i.map(function(y, w) {
          var b = f && f[Math.floor(w * m)];
          if (b) {
            var C = io(b.x, y.x), E = io(b.y, y.y);
            return Ke(Ke({}, y), {}, {
              x: C(g),
              y: E(g)
            });
          }
          var L = io(y.cx, y.x), _ = io(y.cy, y.y);
          return Ke(Ke({}, y), {}, {
            x: L(g),
            y: _(g)
          });
        });
        return r.renderPolygonStatically(v);
      });
    }
  }, {
    key: "renderPolygon",
    value: function() {
      var r = this.props, o = r.points, i = r.isAnimationActive, s = r.isRange, l = this.state.prevPoints;
      return i && o && o.length && !s && (!l || !P0(l, o)) ? this.renderPolygonWithAnimation() : this.renderPolygonStatically(o);
    }
  }, {
    key: "render",
    value: function() {
      var r = this.props, o = r.hide, i = r.className, s = r.points, l = r.isAnimationActive;
      if (o || !s || !s.length)
        return null;
      var c = this.state.isAnimationFinished, u = No("recharts-radar", i);
      return /* @__PURE__ */ le.createElement(Ui, {
        className: u
      }, this.renderPolygon(), (!l || c) && T0.renderCallByParent(this.props, s));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function(r, o) {
      return r.animationId !== o.prevAnimationId ? {
        prevAnimationId: r.animationId,
        curPoints: r.points,
        prevPoints: o.curPoints
      } : r.points !== o.curPoints ? {
        curPoints: r.points
      } : null;
    }
  }, {
    key: "renderDotItem",
    value: function(r, o) {
      var i;
      return /* @__PURE__ */ le.isValidElement(r) ? i = /* @__PURE__ */ le.cloneElement(r, o) : oo(r) ? i = r(o) : i = /* @__PURE__ */ le.createElement(E0, To({}, o, {
        className: No("recharts-radar-dot", typeof r != "boolean" ? r.className : "")
      })), i;
    }
  }]), t;
}(av);
Ht(Vr, "displayName", "Radar");
Ht(Vr, "defaultProps", {
  angleAxisId: 0,
  radiusAxisId: 0,
  hide: !1,
  activeDot: !0,
  dot: !1,
  legendType: "rect",
  isAnimationActive: !R0.isSsr,
  animationBegin: 0,
  animationDuration: 1500,
  animationEasing: "ease"
});
Ht(Vr, "getComposedData", function(e) {
  var t = e.radiusAxis, n = e.angleAxis, r = e.displayedData, o = e.dataKey, i = e.bandSize, s = n.cx, l = n.cy, c = !1, u = [], d = n.type !== "number" ? i ?? 0 : 0;
  r.forEach(function(h, g) {
    var m = ac(h, n.dataKey, g), v = ac(h, o), y = n.scale(m) + d, w = Array.isArray(v) ? A0(v) : v, b = lc(w) ? void 0 : t.scale(w);
    Array.isArray(v) && v.length >= 2 && (c = !0), u.push(Ke(Ke({}, Cr(s, l, b, y)), {}, {
      name: m,
      value: v,
      cx: s,
      cy: l,
      radius: b,
      angle: y,
      payload: h
    }));
  });
  var f = [];
  return c && u.forEach(function(h) {
    if (Array.isArray(h.value)) {
      var g = Lv(h.value), m = lc(g) ? void 0 : t.scale(g);
      f.push(Ke(Ke({}, h), {}, {
        radius: m
      }, Cr(s, l, m, h.angle)));
    } else
      f.push(h);
  }), {
    points: u,
    isRange: c,
    baseLinePoints: f
  };
});
var _v = D0({
  chartName: "RadarChart",
  GraphicalChild: Vr,
  axisComponents: [{
    axisType: "angleAxis",
    AxisComp: Td
  }, {
    axisType: "radiusAxis",
    AxisComp: Rd
  }],
  formatAxisMap: _0,
  defaultProps: {
    layout: "centric",
    startAngle: 90,
    endAngle: -270,
    cx: "50%",
    cy: "50%",
    innerRadius: 0,
    outerRadius: "80%"
  }
}), Iv = "Portal", oi = p.forwardRef((e, t) => {
  var l;
  const { container: n, ...r } = e, [o, i] = p.useState(!1);
  We(() => i(!0), []);
  const s = n || o && ((l = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : l.body);
  return s ? $d.createPortal(/* @__PURE__ */ a(fe.div, { ...r, ref: t }), s) : null;
});
oi.displayName = Iv;
const pc = /* @__PURE__ */ new Set();
function ii(e, t, n) {
  e || pc.has(t) || (console.warn(t), pc.add(t));
}
function Ov(e) {
  if (typeof Proxy > "u")
    return e;
  const t = /* @__PURE__ */ new Map(), n = (...r) => (process.env.NODE_ENV !== "production" && ii(!1, "motion() is deprecated. Use motion.create() instead."), e(...r));
  return new Proxy(n, {
    /**
     * Called when `motion` is referenced with a prop: `motion.div`, `motion.input` etc.
     * The prop name is passed through as `key` and we can use that to generate a `motion`
     * DOM component with that name.
     */
    get: (r, o) => o === "create" ? e : (t.has(o) || t.set(o, e(o)), t.get(o))
  });
}
function Sr(e) {
  return e !== null && typeof e == "object" && typeof e.start == "function";
}
const Ls = (e) => Array.isArray(e);
function zd(e, t) {
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
function Mr(e) {
  return typeof e == "string" || Array.isArray(e);
}
function mc(e) {
  const t = [{}, {}];
  return e == null || e.values.forEach((n, r) => {
    t[0][r] = n.get(), t[1][r] = n.getVelocity();
  }), t;
}
function ua(e, t, n, r) {
  if (typeof t == "function") {
    const [o, i] = mc(r);
    t = t(n !== void 0 ? n : e.custom, o, i);
  }
  if (typeof t == "string" && (t = e.variants && e.variants[t]), typeof t == "function") {
    const [o, i] = mc(r);
    t = t(n !== void 0 ? n : e.custom, o, i);
  }
  return t;
}
function si(e, t, n) {
  const r = e.getProps();
  return ua(r, t, n !== void 0 ? n : r.custom, e);
}
const da = [
  "animate",
  "whileInView",
  "whileFocus",
  "whileHover",
  "whileTap",
  "whileDrag",
  "exit"
], fa = ["initial", ...da], Fr = [
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
], ln = new Set(Fr), Rt = (e) => e * 1e3, Gt = (e) => e / 1e3, Vv = {
  type: "spring",
  stiffness: 500,
  damping: 25,
  restSpeed: 10
}, Fv = (e) => ({
  type: "spring",
  stiffness: 550,
  damping: e === 0 ? 2 * Math.sqrt(550) : 30,
  restSpeed: 10
}), Bv = {
  type: "keyframes",
  duration: 0.8
}, jv = {
  type: "keyframes",
  ease: [0.25, 0.1, 0.35, 1],
  duration: 0.3
}, $v = (e, { keyframes: t }) => t.length > 2 ? Bv : ln.has(e) ? e.startsWith("scale") ? Fv(t[1]) : Vv : jv;
function Wv({ when: e, delay: t, delayChildren: n, staggerChildren: r, staggerDirection: o, repeat: i, repeatType: s, repeatDelay: l, from: c, elapsed: u, ...d }) {
  return !!Object.keys(d).length;
}
function ha(e, t) {
  return e[t] || e.default || e;
}
const Hv = {
  skipAnimations: !1,
  useManualTiming: !1
}, Uv = (e) => e !== null;
function ai(e, { repeat: t, repeatType: n = "loop" }, r) {
  const o = e.filter(Uv), i = t && n !== "loop" && t % 2 === 1 ? 0 : o.length - 1;
  return !i || r === void 0 ? o[i] : r;
}
const Ue = (e) => e;
function zv(e) {
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
      const g = f && r ? t : n;
      return d && i.add(u), g.has(u) || g.add(u), u;
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
const so = [
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
], Gv = 40;
function Gd(e, t) {
  let n = !1, r = !0;
  const o = {
    delta: 0,
    timestamp: 0,
    isProcessing: !1
  }, i = () => n = !0, s = so.reduce((w, b) => (w[b] = zv(i), w), {}), { read: l, resolveKeyframes: c, update: u, preRender: d, render: f, postRender: h } = s, g = () => {
    const w = performance.now();
    n = !1, o.delta = r ? 1e3 / 60 : Math.max(Math.min(w - o.timestamp, Gv), 1), o.timestamp = w, o.isProcessing = !0, l.process(o), c.process(o), u.process(o), d.process(o), f.process(o), h.process(o), o.isProcessing = !1, n && t && (r = !1, e(g));
  }, m = () => {
    n = !0, r = !0, o.isProcessing || e(g);
  };
  return { schedule: so.reduce((w, b) => {
    const C = s[b];
    return w[b] = (E, L = !1, _ = !1) => (n || m(), C.schedule(E, L, _)), w;
  }, {}), cancel: (w) => {
    for (let b = 0; b < so.length; b++)
      s[so[b]].cancel(w);
  }, state: o, steps: s };
}
const { schedule: be, cancel: qt, state: He, steps: zi } = Gd(typeof requestAnimationFrame < "u" ? requestAnimationFrame : Ue, !0), Kd = (e) => /^0[^.\s]+$/u.test(e);
function Kv(e) {
  return typeof e == "number" ? e === 0 : e !== null ? e === "none" || e === "0" || Kd(e) : !0;
}
let Qn = Ue, Qt = Ue;
process.env.NODE_ENV !== "production" && (Qn = (e, t) => {
  !e && typeof console < "u" && console.warn(t);
}, Qt = (e, t) => {
  if (!e)
    throw new Error(t);
});
const Yd = (e) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e), Zd = (e) => (t) => typeof t == "string" && t.startsWith(e), Xd = Zd("--"), Yv = Zd("var(--"), pa = (e) => Yv(e) ? Zv.test(e.split("/*")[0].trim()) : !1, Zv = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu, Xv = (
  // eslint-disable-next-line redos-detector/no-unsafe-regex -- false positive, as it can match a lot of words
  /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u
);
function qv(e) {
  const t = Xv.exec(e);
  if (!t)
    return [,];
  const [, n, r, o] = t;
  return [`--${n ?? r}`, o];
}
const Qv = 4;
function qd(e, t, n = 1) {
  Qt(n <= Qv, `Max CSS variable fallback depth detected in property "${e}". This may indicate a circular fallback dependency.`);
  const [r, o] = qv(e);
  if (!r)
    return;
  const i = window.getComputedStyle(t).getPropertyValue(r);
  if (i) {
    const s = i.trim();
    return Yd(s) ? parseFloat(s) : s;
  }
  return pa(o) ? qd(o, t, n + 1) : o;
}
const sn = (e, t, n) => n > t ? t : n < e ? e : n, Jn = {
  test: (e) => typeof e == "number",
  parse: parseFloat,
  transform: (e) => e
}, mr = {
  ...Jn,
  transform: (e) => sn(0, 1, e)
}, ao = {
  ...Jn,
  default: 1
}, gr = (e) => Math.round(e * 1e5) / 1e5, ma = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu, Jv = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu, e2 = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu;
function Br(e) {
  return typeof e == "string";
}
function t2(e) {
  return e == null;
}
const jr = (e) => ({
  test: (t) => Br(t) && t.endsWith(e) && t.split(" ").length === 1,
  parse: parseFloat,
  transform: (t) => `${t}${e}`
}), nn = /* @__PURE__ */ jr("deg"), At = /* @__PURE__ */ jr("%"), he = /* @__PURE__ */ jr("px"), n2 = /* @__PURE__ */ jr("vh"), r2 = /* @__PURE__ */ jr("vw"), gc = {
  ...At,
  parse: (e) => At.parse(e) / 100,
  transform: (e) => At.transform(e * 100)
}, o2 = /* @__PURE__ */ new Set([
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
]), vc = (e) => e === Jn || e === he, yc = (e, t) => parseFloat(e.split(", ")[t]), bc = (e, t) => (n, { transform: r }) => {
  if (r === "none" || !r)
    return 0;
  const o = r.match(/^matrix3d\((.+)\)$/u);
  if (o)
    return yc(o[1], t);
  {
    const i = r.match(/^matrix\((.+)\)$/u);
    return i ? yc(i[1], e) : 0;
  }
}, i2 = /* @__PURE__ */ new Set(["x", "y", "z"]), s2 = Fr.filter((e) => !i2.has(e));
function a2(e) {
  const t = [];
  return s2.forEach((n) => {
    const r = e.getValue(n);
    r !== void 0 && (t.push([n, r.get()]), r.set(n.startsWith("scale") ? 1 : 0));
  }), t;
}
const Gn = {
  // Dimensions
  width: ({ x: e }, { paddingLeft: t = "0", paddingRight: n = "0" }) => e.max - e.min - parseFloat(t) - parseFloat(n),
  height: ({ y: e }, { paddingTop: t = "0", paddingBottom: n = "0" }) => e.max - e.min - parseFloat(t) - parseFloat(n),
  top: (e, { top: t }) => parseFloat(t),
  left: (e, { left: t }) => parseFloat(t),
  bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
  right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
  // Transform
  x: bc(4, 13),
  y: bc(5, 14)
};
Gn.translateX = Gn.x;
Gn.translateY = Gn.y;
const Qd = (e) => (t) => t.test(e), l2 = {
  test: (e) => e === "auto",
  parse: (e) => e
}, Jd = [Jn, he, At, nn, r2, n2, l2], wc = (e) => Jd.find(Qd(e)), yn = /* @__PURE__ */ new Set();
let Ns = !1, Ps = !1;
function ef() {
  if (Ps) {
    const e = Array.from(yn).filter((r) => r.needsMeasurement), t = new Set(e.map((r) => r.element)), n = /* @__PURE__ */ new Map();
    t.forEach((r) => {
      const o = a2(r);
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
  Ps = !1, Ns = !1, yn.forEach((e) => e.complete()), yn.clear();
}
function tf() {
  yn.forEach((e) => {
    e.readKeyframes(), e.needsMeasurement && (Ps = !0);
  });
}
function c2() {
  tf(), ef();
}
class ga {
  constructor(t, n, r, o, i, s = !1) {
    this.isComplete = !1, this.isAsync = !1, this.needsMeasurement = !1, this.isScheduled = !1, this.unresolvedKeyframes = [...t], this.onComplete = n, this.name = r, this.motionValue = o, this.element = i, this.isAsync = s;
  }
  scheduleResolve() {
    this.isScheduled = !0, this.isAsync ? (yn.add(this), Ns || (Ns = !0, be.read(tf), be.resolveKeyframes(ef))) : (this.readKeyframes(), this.complete());
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
    this.isComplete = !0, this.onComplete(this.unresolvedKeyframes, this.finalKeyframe), yn.delete(this);
  }
  cancel() {
    this.isComplete || (this.isScheduled = !1, yn.delete(this));
  }
  resume() {
    this.isComplete || this.scheduleResolve();
  }
}
const va = (e, t) => (n) => !!(Br(n) && e2.test(n) && n.startsWith(e) || t && !t2(n) && Object.prototype.hasOwnProperty.call(n, t)), nf = (e, t, n) => (r) => {
  if (!Br(r))
    return r;
  const [o, i, s, l] = r.match(ma);
  return {
    [e]: parseFloat(o),
    [t]: parseFloat(i),
    [n]: parseFloat(s),
    alpha: l !== void 0 ? parseFloat(l) : 1
  };
}, u2 = (e) => sn(0, 255, e), Gi = {
  ...Jn,
  transform: (e) => Math.round(u2(e))
}, vn = {
  test: /* @__PURE__ */ va("rgb", "red"),
  parse: /* @__PURE__ */ nf("red", "green", "blue"),
  transform: ({ red: e, green: t, blue: n, alpha: r = 1 }) => "rgba(" + Gi.transform(e) + ", " + Gi.transform(t) + ", " + Gi.transform(n) + ", " + gr(mr.transform(r)) + ")"
};
function d2(e) {
  let t = "", n = "", r = "", o = "";
  return e.length > 5 ? (t = e.substring(1, 3), n = e.substring(3, 5), r = e.substring(5, 7), o = e.substring(7, 9)) : (t = e.substring(1, 2), n = e.substring(2, 3), r = e.substring(3, 4), o = e.substring(4, 5), t += t, n += n, r += r, o += o), {
    red: parseInt(t, 16),
    green: parseInt(n, 16),
    blue: parseInt(r, 16),
    alpha: o ? parseInt(o, 16) / 255 : 1
  };
}
const Ts = {
  test: /* @__PURE__ */ va("#"),
  parse: d2,
  transform: vn.transform
}, In = {
  test: /* @__PURE__ */ va("hsl", "hue"),
  parse: /* @__PURE__ */ nf("hue", "saturation", "lightness"),
  transform: ({ hue: e, saturation: t, lightness: n, alpha: r = 1 }) => "hsla(" + Math.round(e) + ", " + At.transform(gr(t)) + ", " + At.transform(gr(n)) + ", " + gr(mr.transform(r)) + ")"
}, ze = {
  test: (e) => vn.test(e) || Ts.test(e) || In.test(e),
  parse: (e) => vn.test(e) ? vn.parse(e) : In.test(e) ? In.parse(e) : Ts.parse(e),
  transform: (e) => Br(e) ? e : e.hasOwnProperty("red") ? vn.transform(e) : In.transform(e)
};
function f2(e) {
  var t, n;
  return isNaN(e) && Br(e) && (((t = e.match(ma)) === null || t === void 0 ? void 0 : t.length) || 0) + (((n = e.match(Jv)) === null || n === void 0 ? void 0 : n.length) || 0) > 0;
}
const rf = "number", of = "color", h2 = "var", p2 = "var(", Cc = "${}", m2 = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function Er(e) {
  const t = e.toString(), n = [], r = {
    color: [],
    number: [],
    var: []
  }, o = [];
  let i = 0;
  const l = t.replace(m2, (c) => (ze.test(c) ? (r.color.push(i), o.push(of), n.push(ze.parse(c))) : c.startsWith(p2) ? (r.var.push(i), o.push(h2), n.push(c)) : (r.number.push(i), o.push(rf), n.push(parseFloat(c))), ++i, Cc)).split(Cc);
  return { values: n, split: l, indexes: r, types: o };
}
function sf(e) {
  return Er(e).values;
}
function af(e) {
  const { split: t, types: n } = Er(e), r = t.length;
  return (o) => {
    let i = "";
    for (let s = 0; s < r; s++)
      if (i += t[s], o[s] !== void 0) {
        const l = n[s];
        l === rf ? i += gr(o[s]) : l === of ? i += ze.transform(o[s]) : i += o[s];
      }
    return i;
  };
}
const g2 = (e) => typeof e == "number" ? 0 : e;
function v2(e) {
  const t = sf(e);
  return af(e)(t.map(g2));
}
const an = {
  test: f2,
  parse: sf,
  createTransformer: af,
  getAnimatableNone: v2
}, y2 = /* @__PURE__ */ new Set(["brightness", "contrast", "saturate", "opacity"]);
function b2(e) {
  const [t, n] = e.slice(0, -1).split("(");
  if (t === "drop-shadow")
    return e;
  const [r] = n.match(ma) || [];
  if (!r)
    return e;
  const o = n.replace(r, "");
  let i = y2.has(t) ? 1 : 0;
  return r !== n && (i *= 100), t + "(" + i + o + ")";
}
const w2 = /\b([a-z-]*)\(.*?\)/gu, Rs = {
  ...an,
  getAnimatableNone: (e) => {
    const t = e.match(w2);
    return t ? t.map(b2).join(" ") : e;
  }
}, xc = {
  ...Jn,
  transform: Math.round
}, ya = {
  // Border props
  borderWidth: he,
  borderTopWidth: he,
  borderRightWidth: he,
  borderBottomWidth: he,
  borderLeftWidth: he,
  borderRadius: he,
  radius: he,
  borderTopLeftRadius: he,
  borderTopRightRadius: he,
  borderBottomRightRadius: he,
  borderBottomLeftRadius: he,
  // Positioning props
  width: he,
  maxWidth: he,
  height: he,
  maxHeight: he,
  size: he,
  top: he,
  right: he,
  bottom: he,
  left: he,
  // Spacing props
  padding: he,
  paddingTop: he,
  paddingRight: he,
  paddingBottom: he,
  paddingLeft: he,
  margin: he,
  marginTop: he,
  marginRight: he,
  marginBottom: he,
  marginLeft: he,
  // Transform props
  rotate: nn,
  rotateX: nn,
  rotateY: nn,
  rotateZ: nn,
  scale: ao,
  scaleX: ao,
  scaleY: ao,
  scaleZ: ao,
  skew: nn,
  skewX: nn,
  skewY: nn,
  distance: he,
  translateX: he,
  translateY: he,
  translateZ: he,
  x: he,
  y: he,
  z: he,
  perspective: he,
  transformPerspective: he,
  opacity: mr,
  originX: gc,
  originY: gc,
  originZ: he,
  // Misc
  zIndex: xc,
  backgroundPositionX: he,
  backgroundPositionY: he,
  // SVG
  fillOpacity: mr,
  strokeOpacity: mr,
  numOctaves: xc
}, C2 = {
  ...ya,
  // Color props
  color: ze,
  backgroundColor: ze,
  outlineColor: ze,
  fill: ze,
  stroke: ze,
  // Border props
  borderColor: ze,
  borderTopColor: ze,
  borderRightColor: ze,
  borderBottomColor: ze,
  borderLeftColor: ze,
  filter: Rs,
  WebkitFilter: Rs
}, ba = (e) => C2[e];
function lf(e, t) {
  let n = ba(e);
  return n !== Rs && (n = an), n.getAnimatableNone ? n.getAnimatableNone(t) : void 0;
}
const x2 = /* @__PURE__ */ new Set(["auto", "none", "0"]);
function k2(e, t, n) {
  let r = 0, o;
  for (; r < e.length && !o; ) {
    const i = e[r];
    typeof i == "string" && !x2.has(i) && Er(i).values.length && (o = e[r]), r++;
  }
  if (o && n)
    for (const i of t)
      e[i] = lf(n, o);
}
class cf extends ga {
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
      if (typeof u == "string" && (u = u.trim(), pa(u))) {
        const d = qd(u, n.current);
        d !== void 0 && (t[c] = d), c === t.length - 1 && (this.finalKeyframe = u);
      }
    }
    if (this.resolveNoneKeyframes(), !o2.has(r) || t.length !== 2)
      return;
    const [o, i] = t, s = wc(o), l = wc(i);
    if (s !== l)
      if (vc(s) && vc(l))
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
      Kv(t[o]) && r.push(o);
    r.length && k2(t, r, n);
  }
  measureInitialState() {
    const { element: t, unresolvedKeyframes: n, name: r } = this;
    if (!t || !t.current)
      return;
    r === "height" && (this.suspendedScrollY = window.pageYOffset), this.measuredOrigin = Gn[r](t.measureViewportBox(), window.getComputedStyle(t.current)), n[0] = this.measuredOrigin;
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
    o[s] = Gn[r](n.measureViewportBox(), window.getComputedStyle(n.current)), l !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = l), !((t = this.removedTransforms) === null || t === void 0) && t.length && this.removedTransforms.forEach(([c, u]) => {
      n.getValue(c).set(u);
    }), this.resolveNoneKeyframes();
  }
}
function uf(e) {
  let t;
  return () => (t === void 0 && (t = e()), t);
}
let bo;
function S2() {
  bo = void 0;
}
const Kt = {
  now: () => (bo === void 0 && Kt.set(He.isProcessing || Hv.useManualTiming ? He.timestamp : performance.now()), bo),
  set: (e) => {
    bo = e, queueMicrotask(S2);
  }
}, kc = (e, t) => t === "zIndex" ? !1 : !!(typeof e == "number" || Array.isArray(e) || typeof e == "string" && // It's animatable if we have a string
(an.test(e) || e === "0") && // And it contains numbers and/or colors
!e.startsWith("url("));
function M2(e) {
  const t = e[0];
  if (e.length === 1)
    return !0;
  for (let n = 0; n < e.length; n++)
    if (e[n] !== t)
      return !0;
}
function E2(e, t, n, r) {
  const o = e[0];
  if (o === null)
    return !1;
  if (t === "display" || t === "visibility")
    return !0;
  const i = e[e.length - 1], s = kc(o, t), l = kc(i, t);
  return Qn(s === l, `You are trying to animate ${t} from "${o}" to "${i}". ${o} is not an animatable value - to enable this animation set ${o} to a value animatable to ${i} via the \`style\` property.`), !s || !l ? !1 : M2(e) || n === "spring" && r;
}
const L2 = 40;
class df {
  constructor({ autoplay: t = !0, delay: n = 0, type: r = "keyframes", repeat: o = 0, repeatDelay: i = 0, repeatType: s = "loop", ...l }) {
    this.isStopped = !1, this.hasAttemptedResolve = !1, this.createdAt = Kt.now(), this.options = {
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
    return this.resolvedAt ? this.resolvedAt - this.createdAt > L2 ? this.resolvedAt : this.createdAt : this.createdAt;
  }
  /**
   * A getter for resolved data. If keyframes are not yet resolved, accessing
   * this.resolved will synchronously flush all pending keyframe resolvers.
   * This is a deoptimisation, but at its worst still batches read/writes.
   */
  get resolved() {
    return !this._resolved && !this.hasAttemptedResolve && c2(), this._resolved;
  }
  /**
   * A method to be called when the keyframes resolver completes. This method
   * will check if its possible to run the animation and, if not, skip it.
   * Otherwise, it will call initPlayback on the implementing class.
   */
  onKeyframesResolved(t, n) {
    this.resolvedAt = Kt.now(), this.hasAttemptedResolve = !0;
    const { name: r, type: o, velocity: i, delay: s, onComplete: l, onUpdate: c, isGenerator: u } = this.options;
    if (!u && !E2(t, r, o, i))
      if (s)
        this.options.duration = 0;
      else {
        c == null || c(ai(t, this.options, n)), l == null || l(), this.resolveFinishedPromise();
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
function ff(e, t) {
  return t ? e * (1e3 / t) : 0;
}
const N2 = 5;
function hf(e, t, n) {
  const r = Math.max(t - N2, 0);
  return ff(n - e(r), t - r);
}
const Ki = 1e-3, P2 = 0.01, Sc = 10, T2 = 0.05, R2 = 1;
function A2({ duration: e = 800, bounce: t = 0.25, velocity: n = 0, mass: r = 1 }) {
  let o, i;
  Qn(e <= Rt(Sc), "Spring duration must be 10 seconds or less");
  let s = 1 - t;
  s = sn(T2, R2, s), e = sn(P2, Sc, Gt(e)), s < 1 ? (o = (u) => {
    const d = u * s, f = d * e, h = d - n, g = As(u, s), m = Math.exp(-f);
    return Ki - h / g * m;
  }, i = (u) => {
    const f = u * s * e, h = f * n + n, g = Math.pow(s, 2) * Math.pow(u, 2) * e, m = Math.exp(-f), v = As(Math.pow(u, 2), s);
    return (-o(u) + Ki > 0 ? -1 : 1) * ((h - g) * m) / v;
  }) : (o = (u) => {
    const d = Math.exp(-u * e), f = (u - n) * e + 1;
    return -Ki + d * f;
  }, i = (u) => {
    const d = Math.exp(-u * e), f = (n - u) * (e * e);
    return d * f;
  });
  const l = 5 / e, c = _2(o, i, l);
  if (e = Rt(e), isNaN(c))
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
const D2 = 12;
function _2(e, t, n) {
  let r = n;
  for (let o = 1; o < D2; o++)
    r = r - e(r) / t(r);
  return r;
}
function As(e, t) {
  return e * Math.sqrt(1 - t * t);
}
const I2 = ["duration", "bounce"], O2 = ["stiffness", "damping", "mass"];
function Mc(e, t) {
  return t.some((n) => e[n] !== void 0);
}
function V2(e) {
  let t = {
    velocity: 0,
    stiffness: 100,
    damping: 10,
    mass: 1,
    isResolvedFromDuration: !1,
    ...e
  };
  if (!Mc(e, O2) && Mc(e, I2)) {
    const n = A2(e);
    t = {
      ...t,
      ...n,
      mass: 1
    }, t.isResolvedFromDuration = !0;
  }
  return t;
}
function pf({ keyframes: e, restDelta: t, restSpeed: n, ...r }) {
  const o = e[0], i = e[e.length - 1], s = { done: !1, value: o }, { stiffness: l, damping: c, mass: u, duration: d, velocity: f, isResolvedFromDuration: h } = V2({
    ...r,
    velocity: -Gt(r.velocity || 0)
  }), g = f || 0, m = c / (2 * Math.sqrt(l * u)), v = i - o, y = Gt(Math.sqrt(l / u)), w = Math.abs(v) < 5;
  n || (n = w ? 0.01 : 2), t || (t = w ? 5e-3 : 0.5);
  let b;
  if (m < 1) {
    const C = As(y, m);
    b = (E) => {
      const L = Math.exp(-m * y * E);
      return i - L * ((g + m * y * v) / C * Math.sin(C * E) + v * Math.cos(C * E));
    };
  } else if (m === 1)
    b = (C) => i - Math.exp(-y * C) * (v + (g + y * v) * C);
  else {
    const C = y * Math.sqrt(m * m - 1);
    b = (E) => {
      const L = Math.exp(-m * y * E), _ = Math.min(C * E, 300);
      return i - L * ((g + m * y * v) * Math.sinh(_) + C * v * Math.cosh(_)) / C;
    };
  }
  return {
    calculatedDuration: h && d || null,
    next: (C) => {
      const E = b(C);
      if (h)
        s.done = C >= d;
      else {
        let L = 0;
        m < 1 && (L = C === 0 ? Rt(g) : hf(b, C, E));
        const _ = Math.abs(L) <= n, F = Math.abs(i - E) <= t;
        s.done = _ && F;
      }
      return s.value = s.done ? i : E, s;
    }
  };
}
function Ec({ keyframes: e, velocity: t = 0, power: n = 0.8, timeConstant: r = 325, bounceDamping: o = 10, bounceStiffness: i = 500, modifyTarget: s, min: l, max: c, restDelta: u = 0.5, restSpeed: d }) {
  const f = e[0], h = {
    done: !1,
    value: f
  }, g = (R) => l !== void 0 && R < l || c !== void 0 && R > c, m = (R) => l === void 0 ? c : c === void 0 || Math.abs(l - R) < Math.abs(c - R) ? l : c;
  let v = n * t;
  const y = f + v, w = s === void 0 ? y : s(y);
  w !== y && (v = w - f);
  const b = (R) => -v * Math.exp(-R / r), C = (R) => w + b(R), E = (R) => {
    const D = b(R), H = C(R);
    h.done = Math.abs(D) <= u, h.value = h.done ? w : H;
  };
  let L, _;
  const F = (R) => {
    g(h.value) && (L = R, _ = pf({
      keyframes: [h.value, m(h.value)],
      velocity: hf(C, R, h.value),
      // TODO: This should be passing * 1000
      damping: o,
      stiffness: i,
      restDelta: u,
      restSpeed: d
    }));
  };
  return F(0), {
    calculatedDuration: null,
    next: (R) => {
      let D = !1;
      return !_ && L === void 0 && (D = !0, E(R), F(R)), L !== void 0 && R >= L ? _.next(R - L) : (!D && E(R), h);
    }
  };
}
const mf = (e, t, n) => (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e, F2 = 1e-7, B2 = 12;
function j2(e, t, n, r, o) {
  let i, s, l = 0;
  do
    s = t + (n - t) / 2, i = mf(s, r, o) - e, i > 0 ? n = s : t = s;
  while (Math.abs(i) > F2 && ++l < B2);
  return s;
}
function $r(e, t, n, r) {
  if (e === t && n === r)
    return Ue;
  const o = (i) => j2(i, 0, 1, e, n);
  return (i) => i === 0 || i === 1 ? i : mf(o(i), t, r);
}
const $2 = /* @__PURE__ */ $r(0.42, 0, 1, 1), W2 = /* @__PURE__ */ $r(0, 0, 0.58, 1), gf = /* @__PURE__ */ $r(0.42, 0, 0.58, 1), H2 = (e) => Array.isArray(e) && typeof e[0] != "number", vf = (e) => (t) => t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2, yf = (e) => (t) => 1 - e(1 - t), wa = (e) => 1 - Math.sin(Math.acos(e)), bf = yf(wa), U2 = vf(wa), wf = /* @__PURE__ */ $r(0.33, 1.53, 0.69, 0.99), Ca = /* @__PURE__ */ yf(wf), z2 = /* @__PURE__ */ vf(Ca), G2 = (e) => (e *= 2) < 1 ? 0.5 * Ca(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1))), Lc = {
  linear: Ue,
  easeIn: $2,
  easeInOut: gf,
  easeOut: W2,
  circIn: wa,
  circInOut: U2,
  circOut: bf,
  backIn: Ca,
  backInOut: z2,
  backOut: wf,
  anticipate: G2
}, Nc = (e) => {
  if (Array.isArray(e)) {
    Qt(e.length === 4, "Cubic bezier arrays must contain four numerical values.");
    const [t, n, r, o] = e;
    return $r(t, n, r, o);
  } else if (typeof e == "string")
    return Qt(Lc[e] !== void 0, `Invalid easing type '${e}'`), Lc[e];
  return e;
}, K2 = (e, t) => (n) => t(e(n)), Yt = (...e) => e.reduce(K2), Lr = (e, t, n) => {
  const r = t - e;
  return r === 0 ? 1 : (n - e) / r;
}, Pe = (e, t, n) => e + (t - e) * n;
function Yi(e, t, n) {
  return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e;
}
function Y2({ hue: e, saturation: t, lightness: n, alpha: r }) {
  e /= 360, t /= 100, n /= 100;
  let o = 0, i = 0, s = 0;
  if (!t)
    o = i = s = n;
  else {
    const l = n < 0.5 ? n * (1 + t) : n + t - n * t, c = 2 * n - l;
    o = Yi(c, l, e + 1 / 3), i = Yi(c, l, e), s = Yi(c, l, e - 1 / 3);
  }
  return {
    red: Math.round(o * 255),
    green: Math.round(i * 255),
    blue: Math.round(s * 255),
    alpha: r
  };
}
function Ao(e, t) {
  return (n) => n > 0 ? t : e;
}
const Zi = (e, t, n) => {
  const r = e * e, o = n * (t * t - r) + r;
  return o < 0 ? 0 : Math.sqrt(o);
}, Z2 = [Ts, vn, In], X2 = (e) => Z2.find((t) => t.test(e));
function Pc(e) {
  const t = X2(e);
  if (Qn(!!t, `'${e}' is not an animatable color. Use the equivalent color code instead.`), !t)
    return !1;
  let n = t.parse(e);
  return t === In && (n = Y2(n)), n;
}
const Tc = (e, t) => {
  const n = Pc(e), r = Pc(t);
  if (!n || !r)
    return Ao(e, t);
  const o = { ...n };
  return (i) => (o.red = Zi(n.red, r.red, i), o.green = Zi(n.green, r.green, i), o.blue = Zi(n.blue, r.blue, i), o.alpha = Pe(n.alpha, r.alpha, i), vn.transform(o));
}, Ds = /* @__PURE__ */ new Set(["none", "hidden"]);
function q2(e, t) {
  return Ds.has(e) ? (n) => n <= 0 ? e : t : (n) => n >= 1 ? t : e;
}
function Q2(e, t) {
  return (n) => Pe(e, t, n);
}
function xa(e) {
  return typeof e == "number" ? Q2 : typeof e == "string" ? pa(e) ? Ao : ze.test(e) ? Tc : ty : Array.isArray(e) ? Cf : typeof e == "object" ? ze.test(e) ? Tc : J2 : Ao;
}
function Cf(e, t) {
  const n = [...e], r = n.length, o = e.map((i, s) => xa(i)(i, t[s]));
  return (i) => {
    for (let s = 0; s < r; s++)
      n[s] = o[s](i);
    return n;
  };
}
function J2(e, t) {
  const n = { ...e, ...t }, r = {};
  for (const o in n)
    e[o] !== void 0 && t[o] !== void 0 && (r[o] = xa(e[o])(e[o], t[o]));
  return (o) => {
    for (const i in r)
      n[i] = r[i](o);
    return n;
  };
}
function ey(e, t) {
  var n;
  const r = [], o = { color: 0, var: 0, number: 0 };
  for (let i = 0; i < t.values.length; i++) {
    const s = t.types[i], l = e.indexes[s][o[s]], c = (n = e.values[l]) !== null && n !== void 0 ? n : 0;
    r[i] = c, o[s]++;
  }
  return r;
}
const ty = (e, t) => {
  const n = an.createTransformer(t), r = Er(e), o = Er(t);
  return r.indexes.var.length === o.indexes.var.length && r.indexes.color.length === o.indexes.color.length && r.indexes.number.length >= o.indexes.number.length ? Ds.has(e) && !o.values.length || Ds.has(t) && !r.values.length ? q2(e, t) : Yt(Cf(ey(r, o), o.values), n) : (Qn(!0, `Complex values '${e}' and '${t}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`), Ao(e, t));
};
function xf(e, t, n) {
  return typeof e == "number" && typeof t == "number" && typeof n == "number" ? Pe(e, t, n) : xa(e)(e, t);
}
function ny(e, t, n) {
  const r = [], o = n || xf, i = e.length - 1;
  for (let s = 0; s < i; s++) {
    let l = o(e[s], e[s + 1]);
    if (t) {
      const c = Array.isArray(t) ? t[s] || Ue : t;
      l = Yt(c, l);
    }
    r.push(l);
  }
  return r;
}
function ry(e, t, { clamp: n = !0, ease: r, mixer: o } = {}) {
  const i = e.length;
  if (Qt(i === t.length, "Both input and output ranges must be the same length"), i === 1)
    return () => t[0];
  if (i === 2 && e[0] === e[1])
    return () => t[1];
  e[0] > e[i - 1] && (e = [...e].reverse(), t = [...t].reverse());
  const s = ny(t, r, o), l = s.length, c = (u) => {
    let d = 0;
    if (l > 1)
      for (; d < e.length - 2 && !(u < e[d + 1]); d++)
        ;
    const f = Lr(e[d], e[d + 1], u);
    return s[d](f);
  };
  return n ? (u) => c(sn(e[0], e[i - 1], u)) : c;
}
function oy(e, t) {
  const n = e[e.length - 1];
  for (let r = 1; r <= t; r++) {
    const o = Lr(0, t, r);
    e.push(Pe(n, 1, o));
  }
}
function iy(e) {
  const t = [0];
  return oy(t, e.length - 1), t;
}
function sy(e, t) {
  return e.map((n) => n * t);
}
function ay(e, t) {
  return e.map(() => t || gf).splice(0, e.length - 1);
}
function Do({ duration: e = 300, keyframes: t, times: n, ease: r = "easeInOut" }) {
  const o = H2(r) ? r.map(Nc) : Nc(r), i = {
    done: !1,
    value: t[0]
  }, s = sy(
    // Only use the provided offsets if they're the correct length
    // TODO Maybe we should warn here if there's a length mismatch
    n && n.length === t.length ? n : iy(t),
    e
  ), l = ry(s, t, {
    ease: Array.isArray(o) ? o : ay(t, o)
  });
  return {
    calculatedDuration: e,
    next: (c) => (i.value = l(c), i.done = c >= e, i)
  };
}
const Rc = 2e4;
function ly(e) {
  let t = 0;
  const n = 50;
  let r = e.next(t);
  for (; !r.done && t < Rc; )
    t += n, r = e.next(t);
  return t >= Rc ? 1 / 0 : t;
}
const cy = (e) => {
  const t = ({ timestamp: n }) => e(n);
  return {
    start: () => be.update(t, !0),
    stop: () => qt(t),
    /**
     * If we're processing this frame we can use the
     * framelocked timestamp to keep things in sync.
     */
    now: () => He.isProcessing ? He.timestamp : Kt.now()
  };
}, uy = {
  decay: Ec,
  inertia: Ec,
  tween: Do,
  keyframes: Do,
  spring: pf
}, dy = (e) => e / 100;
class ka extends df {
  constructor(t) {
    super(t), this.holdTime = null, this.cancelTime = null, this.currentTime = 0, this.playbackSpeed = 1, this.pendingPlayState = "running", this.startTime = null, this.state = "idle", this.stop = () => {
      if (this.resolver.cancel(), this.isStopped = !0, this.state === "idle")
        return;
      this.teardown();
      const { onStop: c } = this.options;
      c && c();
    };
    const { name: n, motionValue: r, element: o, keyframes: i } = this.options, s = (o == null ? void 0 : o.KeyframeResolver) || ga, l = (c, u) => this.onKeyframesResolved(c, u);
    this.resolver = new s(i, l, n, r, o), this.resolver.scheduleResolve();
  }
  initPlayback(t) {
    const { type: n = "keyframes", repeat: r = 0, repeatDelay: o = 0, repeatType: i, velocity: s = 0 } = this.options, l = uy[n] || Do;
    let c, u;
    l !== Do && typeof t[0] != "number" && (process.env.NODE_ENV !== "production" && Qt(t.length === 2, `Only two keyframes currently supported with spring and inertia animations. Trying to animate ${t}`), c = Yt(dy, xf(t[0], t[1])), t = [0, 100]);
    const d = l({ ...this.options, keyframes: t });
    i === "mirror" && (u = l({
      ...this.options,
      keyframes: [...t].reverse(),
      velocity: -s
    })), d.calculatedDuration === null && (d.calculatedDuration = ly(d));
    const { calculatedDuration: f } = d, h = f + o, g = h * (r + 1) - o;
    return {
      generator: d,
      mirroredGenerator: u,
      mapPercentToKeyframes: c,
      calculatedDuration: f,
      resolvedDuration: h,
      totalDuration: g
    };
  }
  onPostResolved() {
    const { autoplay: t = !0 } = this.options;
    this.play(), this.pendingPlayState === "paused" || !t ? this.pause() : this.state = this.pendingPlayState;
  }
  tick(t, n = !1) {
    const { resolved: r } = this;
    if (!r) {
      const { keyframes: R } = this.options;
      return { done: !0, value: R[R.length - 1] };
    }
    const { finalKeyframe: o, generator: i, mirroredGenerator: s, mapPercentToKeyframes: l, keyframes: c, calculatedDuration: u, totalDuration: d, resolvedDuration: f } = r;
    if (this.startTime === null)
      return i.next(0);
    const { delay: h, repeat: g, repeatType: m, repeatDelay: v, onUpdate: y } = this.options;
    this.speed > 0 ? this.startTime = Math.min(this.startTime, t) : this.speed < 0 && (this.startTime = Math.min(t - d / this.speed, this.startTime)), n ? this.currentTime = t : this.holdTime !== null ? this.currentTime = this.holdTime : this.currentTime = Math.round(t - this.startTime) * this.speed;
    const w = this.currentTime - h * (this.speed >= 0 ? 1 : -1), b = this.speed >= 0 ? w < 0 : w > d;
    this.currentTime = Math.max(w, 0), this.state === "finished" && this.holdTime === null && (this.currentTime = d);
    let C = this.currentTime, E = i;
    if (g) {
      const R = Math.min(this.currentTime, d) / f;
      let D = Math.floor(R), H = R % 1;
      !H && R >= 1 && (H = 1), H === 1 && D--, D = Math.min(D, g + 1), !!(D % 2) && (m === "reverse" ? (H = 1 - H, v && (H -= v / f)) : m === "mirror" && (E = s)), C = sn(0, 1, H) * f;
    }
    const L = b ? { done: !1, value: c[0] } : E.next(C);
    l && (L.value = l(L.value));
    let { done: _ } = L;
    !b && u !== null && (_ = this.speed >= 0 ? this.currentTime >= d : this.currentTime <= 0);
    const F = this.holdTime === null && (this.state === "finished" || this.state === "running" && _);
    return F && o !== void 0 && (L.value = ai(c, this.options, o)), y && y(L.value), F && this.finish(), L;
  }
  get duration() {
    const { resolved: t } = this;
    return t ? Gt(t.calculatedDuration) : 0;
  }
  get time() {
    return Gt(this.currentTime);
  }
  set time(t) {
    t = Rt(t), this.currentTime = t, this.holdTime !== null || this.speed === 0 ? this.holdTime = t : this.driver && (this.startTime = this.driver.now() - t / this.speed);
  }
  get speed() {
    return this.playbackSpeed;
  }
  set speed(t) {
    const n = this.playbackSpeed !== t;
    this.playbackSpeed = t, n && (this.time = Gt(this.currentTime));
  }
  play() {
    if (this.resolver.isScheduled || this.resolver.resume(), !this._resolved) {
      this.pendingPlayState = "running";
      return;
    }
    if (this.isStopped)
      return;
    const { driver: t = cy, onPlay: n, startTime: r } = this.options;
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
const kf = /* @__PURE__ */ new Set([
  "opacity",
  "clipPath",
  "filter",
  "transform"
  // TODO: Can be accelerated but currently disabled until https://issues.chromium.org/issues/41491098 is resolved
  // or until we implement support for linear() easing.
  // "background-color"
]), Sf = (e) => Array.isArray(e) && typeof e[0] == "number";
function Mf(e) {
  return !!(!e || typeof e == "string" && e in Sa || Sf(e) || Array.isArray(e) && e.every(Mf));
}
const lr = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`, Sa = {
  linear: "linear",
  ease: "ease",
  easeIn: "ease-in",
  easeOut: "ease-out",
  easeInOut: "ease-in-out",
  circIn: /* @__PURE__ */ lr([0, 0.65, 0.55, 1]),
  circOut: /* @__PURE__ */ lr([0.55, 0, 1, 0.45]),
  backIn: /* @__PURE__ */ lr([0.31, 0.01, 0.66, -0.59]),
  backOut: /* @__PURE__ */ lr([0.33, 1.53, 0.69, 0.99])
};
function fy(e) {
  return Ef(e) || Sa.easeOut;
}
function Ef(e) {
  if (e)
    return Sf(e) ? lr(e) : Array.isArray(e) ? e.map(fy) : Sa[e];
}
function hy(e, t, n, { delay: r = 0, duration: o = 300, repeat: i = 0, repeatType: s = "loop", ease: l, times: c } = {}) {
  const u = { [t]: n };
  c && (u.offset = c);
  const d = Ef(l);
  return Array.isArray(d) && (u.easing = d), e.animate(u, {
    delay: r,
    duration: o,
    easing: Array.isArray(d) ? "linear" : d,
    fill: "both",
    iterations: i + 1,
    direction: s === "reverse" ? "alternate" : "normal"
  });
}
const py = /* @__PURE__ */ uf(() => Object.hasOwnProperty.call(Element.prototype, "animate")), _o = 10, my = 2e4;
function gy(e) {
  return e.type === "spring" || !Mf(e.ease);
}
function vy(e, t) {
  const n = new ka({
    ...t,
    keyframes: e,
    repeat: 0,
    delay: 0,
    isGenerator: !0
  });
  let r = { done: !1, value: e[0] };
  const o = [];
  let i = 0;
  for (; !r.done && i < my; )
    r = n.sample(i), o.push(r.value), i += _o;
  return {
    times: void 0,
    keyframes: o,
    duration: i - _o,
    ease: "linear"
  };
}
class Ac extends df {
  constructor(t) {
    super(t);
    const { name: n, motionValue: r, element: o, keyframes: i } = this.options;
    this.resolver = new cf(i, (s, l) => this.onKeyframesResolved(s, l), n, r, o), this.resolver.scheduleResolve();
  }
  initPlayback(t, n) {
    var r;
    let { duration: o = 300, times: i, ease: s, type: l, motionValue: c, name: u, startTime: d } = this.options;
    if (!(!((r = c.owner) === null || r === void 0) && r.current))
      return !1;
    if (gy(this.options)) {
      const { onComplete: h, onUpdate: g, motionValue: m, element: v, ...y } = this.options, w = vy(t, y);
      t = w.keyframes, t.length === 1 && (t[1] = t[0]), o = w.duration, i = w.times, s = w.ease, l = "keyframes";
    }
    const f = hy(c.owner.current, u, t, { ...this.options, duration: o, times: i, ease: s });
    return f.startTime = d ?? this.calcStartTime(), this.pendingTimeline ? (f.timeline = this.pendingTimeline, this.pendingTimeline = void 0) : f.onfinish = () => {
      const { onComplete: h } = this.options;
      c.set(ai(t, this.options, n)), h && h(), this.cancel(), this.resolveFinishedPromise();
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
    return Gt(n);
  }
  get time() {
    const { resolved: t } = this;
    if (!t)
      return 0;
    const { animation: n } = t;
    return Gt(n.currentTime || 0);
  }
  set time(t) {
    const { resolved: n } = this;
    if (!n)
      return;
    const { animation: r } = n;
    r.currentTime = Rt(t);
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
        return Ue;
      const { animation: r } = n;
      r.timeline = t, r.onfinish = null;
    }
    return Ue;
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
      const { motionValue: u, onUpdate: d, onComplete: f, element: h, ...g } = this.options, m = new ka({
        ...g,
        keyframes: r,
        duration: o,
        type: i,
        ease: s,
        times: l,
        isGenerator: !0
      }), v = Rt(this.time);
      u.setWithVelocity(m.sample(v - _o).value, m.sample(v).value, _o);
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
    return py() && r && kf.has(r) && n && n.owner && n.owner.current instanceof HTMLElement && /**
     * If we're outputting values to onUpdate then we can't use WAAPI as there's
     * no way to read the value from WAAPI every frame.
     */
    !n.owner.getProps().onUpdate && !o && i !== "mirror" && s !== 0 && l !== "inertia";
  }
}
function yy(e, t) {
  let n;
  const r = () => {
    const { currentTime: o } = t, s = (o === null ? 0 : o.value) / 100;
    n !== s && e(s), n = s;
  };
  return be.update(r, !0), () => qt(r);
}
const by = uf(() => window.ScrollTimeline !== void 0);
class wy {
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
      if (by() && r.attachTimeline)
        r.attachTimeline(t);
      else
        return r.pause(), yy((o) => {
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
const Ma = (e, t, n, r = {}, o, i, s) => (l) => {
  const c = ha(r, e) || {}, u = c.delay || r.delay || 0;
  let { elapsed: d = 0 } = r;
  d = d - Rt(u);
  let f = {
    keyframes: Array.isArray(n) ? n : [null, n],
    ease: "easeOut",
    velocity: t.getVelocity(),
    ...c,
    delay: -d,
    onUpdate: (g) => {
      t.set(g), c.onUpdate && c.onUpdate(g);
    },
    onComplete: () => {
      l(), c.onComplete && c.onComplete(), s && s();
    },
    onStop: s,
    name: e,
    motionValue: t,
    element: i ? void 0 : o
  };
  Wv(c) || (f = {
    ...f,
    ...$v(e, f)
  }), f.duration && (f.duration = Rt(f.duration)), f.repeatDelay && (f.repeatDelay = Rt(f.repeatDelay)), f.from !== void 0 && (f.keyframes[0] = f.from);
  let h = !1;
  if ((f.type === !1 || f.duration === 0 && !f.repeatDelay) && (f.duration = 0, f.delay === 0 && (h = !0)), h && !i && t.get() !== void 0) {
    const g = ai(f.keyframes, c);
    if (g !== void 0)
      return be.update(() => {
        f.onUpdate(g), f.onComplete();
      }), new wy([]);
  }
  return !i && Ac.supports(f) ? new Ac(f) : new ka(f);
}, Cy = (e) => !!(e && typeof e == "object" && e.mix && e.toValue), xy = (e) => Ls(e) ? e[e.length - 1] || 0 : e;
function li(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
function ci(e, t) {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}
class Ea {
  constructor() {
    this.subscriptions = [];
  }
  add(t) {
    return li(this.subscriptions, t), () => ci(this.subscriptions, t);
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
const Dc = 30, ky = (e) => !isNaN(parseFloat(e));
class Lf {
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
      const i = Kt.now();
      this.updatedAt !== i && this.setPrevFrameValue(), this.prev = this.current, this.setCurrent(r), this.current !== this.prev && this.events.change && this.events.change.notify(this.current), o && this.events.renderRequest && this.events.renderRequest.notify(this.current);
    }, this.hasAnimated = !1, this.setCurrent(t), this.owner = n.owner;
  }
  setCurrent(t) {
    this.current = t, this.updatedAt = Kt.now(), this.canTrackVelocity === null && t !== void 0 && (this.canTrackVelocity = ky(this.current));
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
    return process.env.NODE_ENV !== "production" && ii(!1, 'value.onChange(callback) is deprecated. Switch to value.on("change", callback).'), this.on("change", t);
  }
  on(t, n) {
    this.events[t] || (this.events[t] = new Ea());
    const r = this.events[t].add(n);
    return t === "change" ? () => {
      r(), be.read(() => {
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
    const t = Kt.now();
    if (!this.canTrackVelocity || this.prevFrameValue === void 0 || t - this.updatedAt > Dc)
      return 0;
    const n = Math.min(this.updatedAt - this.prevUpdatedAt, Dc);
    return ff(parseFloat(this.current) - parseFloat(this.prevFrameValue), n);
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
function Nr(e, t) {
  return new Lf(e, t);
}
function Sy(e, t, n) {
  e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, Nr(n));
}
function My(e, t) {
  const n = si(e, t);
  let { transitionEnd: r = {}, transition: o = {}, ...i } = n || {};
  i = { ...i, ...r };
  for (const s in i) {
    const l = xy(i[s]);
    Sy(e, s, l);
  }
}
const ui = (e) => e.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(), Ey = "framerAppearId", Nf = "data-" + ui(Ey);
function Pf(e) {
  return e.props[Nf];
}
function Tf(e) {
  if (ln.has(e))
    return "transform";
  if (kf.has(e))
    return ui(e);
}
class Ly extends Lf {
  constructor() {
    super(...arguments), this.output = [], this.counts = /* @__PURE__ */ new Map();
  }
  add(t) {
    const n = Tf(t);
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
      this.counts.set(n, i), i === 0 && (ci(this.output, n), this.update());
    };
  }
  update() {
    this.set(this.output.length ? this.output.join(", ") : "auto");
  }
}
const Ge = (e) => !!(e && e.getVelocity);
function Ny(e) {
  return !!(Ge(e) && e.add);
}
function _s(e, t) {
  var n;
  if (!e.applyWillChange)
    return;
  let r = e.getValue("willChange");
  if (!r && !(!((n = e.props.style) === null || n === void 0) && n.willChange) && (r = new Ly("auto"), e.addValue("willChange", r)), Ny(r))
    return r.add(t);
}
function Py({ protectedKeys: e, needsAnimating: t }, n) {
  const r = e.hasOwnProperty(n) && t[n] !== !0;
  return t[n] = !1, r;
}
function Rf(e, t, { delay: n = 0, transitionOverride: r, type: o } = {}) {
  var i;
  let { transition: s = e.getDefaultTransition(), transitionEnd: l, ...c } = t;
  r && (s = r);
  const u = [], d = o && e.animationState && e.animationState.getState()[o];
  for (const f in c) {
    const h = e.getValue(f, (i = e.latestValues[f]) !== null && i !== void 0 ? i : null), g = c[f];
    if (g === void 0 || d && Py(d, f))
      continue;
    const m = {
      delay: n,
      ...ha(s || {}, f)
    };
    let v = !1;
    if (window.MotionHandoffAnimation) {
      const w = Pf(e);
      if (w) {
        const b = window.MotionHandoffAnimation(w, f, be);
        b !== null && (m.startTime = b, v = !0);
      }
    }
    h.start(Ma(f, h, g, e.shouldReduceMotion && ln.has(f) ? { type: !1 } : m, e, v, _s(e, f)));
    const y = h.animation;
    y && u.push(y);
  }
  return l && Promise.all(u).then(() => {
    be.update(() => {
      l && My(e, l);
    });
  }), u;
}
function Is(e, t, n = {}) {
  var r;
  const o = si(e, t, n.type === "exit" ? (r = e.presenceContext) === null || r === void 0 ? void 0 : r.custom : void 0);
  let { transition: i = e.getDefaultTransition() || {} } = o || {};
  n.transitionOverride && (i = n.transitionOverride);
  const s = o ? () => Promise.all(Rf(e, o, n)) : () => Promise.resolve(), l = e.variantChildren && e.variantChildren.size ? (u = 0) => {
    const { delayChildren: d = 0, staggerChildren: f, staggerDirection: h } = i;
    return Ty(e, t, d + u, f, h, n);
  } : () => Promise.resolve(), { when: c } = i;
  if (c) {
    const [u, d] = c === "beforeChildren" ? [s, l] : [l, s];
    return u().then(() => d());
  } else
    return Promise.all([s(), l(n.delay)]);
}
function Ty(e, t, n = 0, r = 0, o = 1, i) {
  const s = [], l = (e.variantChildren.size - 1) * r, c = o === 1 ? (u = 0) => u * r : (u = 0) => l - u * r;
  return Array.from(e.variantChildren).sort(Ry).forEach((u, d) => {
    u.notify("AnimationStart", t), s.push(Is(u, t, {
      ...i,
      delay: n + c(d)
    }).then(() => u.notify("AnimationComplete", t)));
  }), Promise.all(s);
}
function Ry(e, t) {
  return e.sortNodePosition(t);
}
function Ay(e, t, n = {}) {
  e.notify("AnimationStart", t);
  let r;
  if (Array.isArray(t)) {
    const o = t.map((i) => Is(e, i, n));
    r = Promise.all(o);
  } else if (typeof t == "string")
    r = Is(e, t, n);
  else {
    const o = typeof t == "function" ? si(e, t, n.custom) : t;
    r = Promise.all(Rf(e, o, n));
  }
  return r.then(() => {
    e.notify("AnimationComplete", t);
  });
}
const Dy = [...da].reverse(), _y = da.length;
function Iy(e) {
  return (t) => Promise.all(t.map(({ animation: n, options: r }) => Ay(e, n, r)));
}
function Oy(e) {
  let t = Iy(e), n = _c(), r = !0;
  const o = (c) => (u, d) => {
    var f;
    const h = si(e, d, c === "exit" ? (f = e.presenceContext) === null || f === void 0 ? void 0 : f.custom : void 0);
    if (h) {
      const { transition: g, transitionEnd: m, ...v } = h;
      u = { ...u, ...v, ...m };
    }
    return u;
  };
  function i(c) {
    t = c(e);
  }
  function s(c) {
    const u = e.getProps(), d = e.getVariantContext(!0) || {}, f = [], h = /* @__PURE__ */ new Set();
    let g = {}, m = 1 / 0;
    for (let y = 0; y < _y; y++) {
      const w = Dy[y], b = n[w], C = u[w] !== void 0 ? u[w] : d[w], E = Mr(C), L = w === c ? b.isActive : null;
      L === !1 && (m = y);
      let _ = C === d[w] && C !== u[w] && E;
      if (_ && r && e.manuallyAnimateOnMount && (_ = !1), b.protectedKeys = { ...g }, // If it isn't active and hasn't *just* been set as inactive
      !b.isActive && L === null || // If we didn't and don't have any defined prop for this animation type
      !C && !b.prevProp || // Or if the prop doesn't define an animation
      Sr(C) || typeof C == "boolean")
        continue;
      let R = Vy(b.prevProp, C) || // If we're making this variant active, we want to always make it active
      w === c && b.isActive && !_ && E || // If we removed a higher-priority variant (i is in reverse order)
      y > m && E, D = !1;
      const H = Array.isArray(C) ? C : [C];
      let J = H.reduce(o(w), {});
      L === !1 && (J = {});
      const { prevResolvedValues: K = {} } = b, W = {
        ...K,
        ...J
      }, I = (O) => {
        R = !0, h.has(O) && (D = !0, h.delete(O)), b.needsAnimating[O] = !0;
        const z = e.getValue(O);
        z && (z.liveStyle = !1);
      };
      for (const O in W) {
        const z = J[O], B = K[O];
        if (g.hasOwnProperty(O))
          continue;
        let $ = !1;
        Ls(z) && Ls(B) ? $ = !zd(z, B) : $ = z !== B, $ ? z != null ? I(O) : h.add(O) : z !== void 0 && h.has(O) ? I(O) : b.protectedKeys[O] = !0;
      }
      b.prevProp = C, b.prevResolvedValues = J, b.isActive && (g = { ...g, ...J }), r && e.blockInitialAnimation && (R = !1), R && (!_ || D) && f.push(...H.map((O) => ({
        animation: O,
        options: { type: w }
      })));
    }
    if (h.size) {
      const y = {};
      h.forEach((w) => {
        const b = e.getBaseTarget(w), C = e.getValue(w);
        C && (C.liveStyle = !0), y[w] = b ?? null;
      }), f.push({ animation: y });
    }
    let v = !!f.length;
    return r && (u.initial === !1 || u.initial === u.animate) && !e.manuallyAnimateOnMount && (v = !1), r = !1, v ? t(f) : Promise.resolve();
  }
  function l(c, u) {
    var d;
    if (n[c].isActive === u)
      return Promise.resolve();
    (d = e.variantChildren) === null || d === void 0 || d.forEach((h) => {
      var g;
      return (g = h.animationState) === null || g === void 0 ? void 0 : g.setActive(c, u);
    }), n[c].isActive = u;
    const f = s(c);
    for (const h in n)
      n[h].protectedKeys = {};
    return f;
  }
  return {
    animateChanges: s,
    setActive: l,
    setAnimateFunction: i,
    getState: () => n,
    reset: () => {
      n = _c(), r = !0;
    }
  };
}
function Vy(e, t) {
  return typeof t == "string" ? t !== e : Array.isArray(t) ? !zd(t, e) : !1;
}
function hn(e = !1) {
  return {
    isActive: e,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {}
  };
}
function _c() {
  return {
    animate: hn(!0),
    whileInView: hn(),
    whileHover: hn(),
    whileTap: hn(),
    whileDrag: hn(),
    whileFocus: hn(),
    exit: hn()
  };
}
class cn {
  constructor(t) {
    this.isMounted = !1, this.node = t;
  }
  update() {
  }
}
class Fy extends cn {
  /**
   * We dynamically generate the AnimationState manager as it contains a reference
   * to the underlying animation library. We only want to load that if we load this,
   * so people can optionally code split it out using the `m` component.
   */
  constructor(t) {
    super(t), t.animationState || (t.animationState = Oy(t));
  }
  updateAnimationControlsSubscription() {
    const { animate: t } = this.node.getProps();
    Sr(t) && (this.unmountControls = t.subscribe(this.node));
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
let By = 0;
class jy extends cn {
  constructor() {
    super(...arguments), this.id = By++;
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
const $y = {
  animation: {
    Feature: Fy
  },
  exit: {
    Feature: jy
  }
}, Af = (e) => e.pointerType === "mouse" ? typeof e.button != "number" || e.button <= 0 : e.isPrimary !== !1;
function di(e, t = "page") {
  return {
    point: {
      x: e[`${t}X`],
      y: e[`${t}Y`]
    }
  };
}
const Wy = (e) => (t) => Af(t) && e(t, di(t));
function Ut(e, t, n, r = { passive: !0 }) {
  return e.addEventListener(t, n, r), () => e.removeEventListener(t, n);
}
function Zt(e, t, n, r) {
  return Ut(e, t, Wy(n), r);
}
const Ic = (e, t) => Math.abs(e - t);
function Hy(e, t) {
  const n = Ic(e.x, t.x), r = Ic(e.y, t.y);
  return Math.sqrt(n ** 2 + r ** 2);
}
class Df {
  constructor(t, n, { transformPagePoint: r, contextWindow: o, dragSnapToOrigin: i = !1 } = {}) {
    if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.contextWindow = window, this.updatePoint = () => {
      if (!(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const f = qi(this.lastMoveEventInfo, this.history), h = this.startEvent !== null, g = Hy(f.offset, { x: 0, y: 0 }) >= 3;
      if (!h && !g)
        return;
      const { point: m } = f, { timestamp: v } = He;
      this.history.push({ ...m, timestamp: v });
      const { onStart: y, onMove: w } = this.handlers;
      h || (y && y(this.lastMoveEvent, f), this.startEvent = this.lastMoveEvent), w && w(this.lastMoveEvent, f);
    }, this.handlePointerMove = (f, h) => {
      this.lastMoveEvent = f, this.lastMoveEventInfo = Xi(h, this.transformPagePoint), be.update(this.updatePoint, !0);
    }, this.handlePointerUp = (f, h) => {
      this.end();
      const { onEnd: g, onSessionEnd: m, resumeAnimation: v } = this.handlers;
      if (this.dragSnapToOrigin && v && v(), !(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const y = qi(f.type === "pointercancel" ? this.lastMoveEventInfo : Xi(h, this.transformPagePoint), this.history);
      this.startEvent && g && g(f, y), m && m(f, y);
    }, !Af(t))
      return;
    this.dragSnapToOrigin = i, this.handlers = n, this.transformPagePoint = r, this.contextWindow = o || window;
    const s = di(t), l = Xi(s, this.transformPagePoint), { point: c } = l, { timestamp: u } = He;
    this.history = [{ ...c, timestamp: u }];
    const { onSessionStart: d } = n;
    d && d(t, qi(l, this.history)), this.removeListeners = Yt(Zt(this.contextWindow, "pointermove", this.handlePointerMove), Zt(this.contextWindow, "pointerup", this.handlePointerUp), Zt(this.contextWindow, "pointercancel", this.handlePointerUp));
  }
  updateHandlers(t) {
    this.handlers = t;
  }
  end() {
    this.removeListeners && this.removeListeners(), qt(this.updatePoint);
  }
}
function Xi(e, t) {
  return t ? { point: t(e.point) } : e;
}
function Oc(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function qi({ point: e }, t) {
  return {
    point: e,
    delta: Oc(e, _f(t)),
    offset: Oc(e, Uy(t)),
    velocity: zy(t, 0.1)
  };
}
function Uy(e) {
  return e[0];
}
function _f(e) {
  return e[e.length - 1];
}
function zy(e, t) {
  if (e.length < 2)
    return { x: 0, y: 0 };
  let n = e.length - 1, r = null;
  const o = _f(e);
  for (; n >= 0 && (r = e[n], !(o.timestamp - r.timestamp > Rt(t))); )
    n--;
  if (!r)
    return { x: 0, y: 0 };
  const i = Gt(o.timestamp - r.timestamp);
  if (i === 0)
    return { x: 0, y: 0 };
  const s = {
    x: (o.x - r.x) / i,
    y: (o.y - r.y) / i
  };
  return s.x === 1 / 0 && (s.x = 0), s.y === 1 / 0 && (s.y = 0), s;
}
function If(e) {
  let t = null;
  return () => {
    const n = () => {
      t = null;
    };
    return t === null ? (t = e, n) : !1;
  };
}
const Vc = If("dragHorizontal"), Fc = If("dragVertical");
function Of(e) {
  let t = !1;
  if (e === "y")
    t = Fc();
  else if (e === "x")
    t = Vc();
  else {
    const n = Vc(), r = Fc();
    n && r ? t = () => {
      n(), r();
    } : (n && n(), r && r());
  }
  return t;
}
function Vf() {
  const e = Of(!0);
  return e ? (e(), !1) : !0;
}
function On(e) {
  return e && typeof e == "object" && Object.prototype.hasOwnProperty.call(e, "current");
}
const Ff = 1e-4, Gy = 1 - Ff, Ky = 1 + Ff, Bf = 0.01, Yy = 0 - Bf, Zy = 0 + Bf;
function rt(e) {
  return e.max - e.min;
}
function Xy(e, t, n) {
  return Math.abs(e - t) <= n;
}
function Bc(e, t, n, r = 0.5) {
  e.origin = r, e.originPoint = Pe(t.min, t.max, e.origin), e.scale = rt(n) / rt(t), e.translate = Pe(n.min, n.max, e.origin) - e.originPoint, (e.scale >= Gy && e.scale <= Ky || isNaN(e.scale)) && (e.scale = 1), (e.translate >= Yy && e.translate <= Zy || isNaN(e.translate)) && (e.translate = 0);
}
function vr(e, t, n, r) {
  Bc(e.x, t.x, n.x, r ? r.originX : void 0), Bc(e.y, t.y, n.y, r ? r.originY : void 0);
}
function jc(e, t, n) {
  e.min = n.min + t.min, e.max = e.min + rt(t);
}
function qy(e, t, n) {
  jc(e.x, t.x, n.x), jc(e.y, t.y, n.y);
}
function $c(e, t, n) {
  e.min = t.min - n.min, e.max = e.min + rt(t);
}
function yr(e, t, n) {
  $c(e.x, t.x, n.x), $c(e.y, t.y, n.y);
}
function Qy(e, { min: t, max: n }, r) {
  return t !== void 0 && e < t ? e = r ? Pe(t, e, r.min) : Math.max(e, t) : n !== void 0 && e > n && (e = r ? Pe(n, e, r.max) : Math.min(e, n)), e;
}
function Wc(e, t, n) {
  return {
    min: t !== void 0 ? e.min + t : void 0,
    max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0
  };
}
function Jy(e, { top: t, left: n, bottom: r, right: o }) {
  return {
    x: Wc(e.x, n, o),
    y: Wc(e.y, t, r)
  };
}
function Hc(e, t) {
  let n = t.min - e.min, r = t.max - e.max;
  return t.max - t.min < e.max - e.min && ([n, r] = [r, n]), { min: n, max: r };
}
function e5(e, t) {
  return {
    x: Hc(e.x, t.x),
    y: Hc(e.y, t.y)
  };
}
function t5(e, t) {
  let n = 0.5;
  const r = rt(e), o = rt(t);
  return o > r ? n = Lr(t.min, t.max - r, e.min) : r > o && (n = Lr(e.min, e.max - o, t.min)), sn(0, 1, n);
}
function n5(e, t) {
  const n = {};
  return t.min !== void 0 && (n.min = t.min - e.min), t.max !== void 0 && (n.max = t.max - e.min), n;
}
const Os = 0.35;
function r5(e = Os) {
  return e === !1 ? e = 0 : e === !0 && (e = Os), {
    x: Uc(e, "left", "right"),
    y: Uc(e, "top", "bottom")
  };
}
function Uc(e, t, n) {
  return {
    min: zc(e, t),
    max: zc(e, n)
  };
}
function zc(e, t) {
  return typeof e == "number" ? e : e[t] || 0;
}
const Gc = () => ({
  translate: 0,
  scale: 1,
  origin: 0,
  originPoint: 0
}), Vn = () => ({
  x: Gc(),
  y: Gc()
}), Kc = () => ({ min: 0, max: 0 }), De = () => ({
  x: Kc(),
  y: Kc()
});
function at(e) {
  return [e("x"), e("y")];
}
function jf({ top: e, left: t, right: n, bottom: r }) {
  return {
    x: { min: t, max: n },
    y: { min: e, max: r }
  };
}
function o5({ x: e, y: t }) {
  return { top: t.min, right: e.max, bottom: t.max, left: e.min };
}
function i5(e, t) {
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
function Qi(e) {
  return e === void 0 || e === 1;
}
function Vs({ scale: e, scaleX: t, scaleY: n }) {
  return !Qi(e) || !Qi(t) || !Qi(n);
}
function pn(e) {
  return Vs(e) || $f(e) || e.z || e.rotate || e.rotateX || e.rotateY || e.skewX || e.skewY;
}
function $f(e) {
  return Yc(e.x) || Yc(e.y);
}
function Yc(e) {
  return e && e !== "0%";
}
function Io(e, t, n) {
  const r = e - n, o = t * r;
  return n + o;
}
function Zc(e, t, n, r, o) {
  return o !== void 0 && (e = Io(e, o, r)), Io(e, n, r) + t;
}
function Fs(e, t = 0, n = 1, r, o) {
  e.min = Zc(e.min, t, n, r, o), e.max = Zc(e.max, t, n, r, o);
}
function Wf(e, { x: t, y: n }) {
  Fs(e.x, t.translate, t.scale, t.originPoint), Fs(e.y, n.translate, n.scale, n.originPoint);
}
const Xc = 0.999999999999, qc = 1.0000000000001;
function s5(e, t, n, r = !1) {
  const o = n.length;
  if (!o)
    return;
  t.x = t.y = 1;
  let i, s;
  for (let l = 0; l < o; l++) {
    i = n[l], s = i.projectionDelta;
    const { visualElement: c } = i.options;
    c && c.props.style && c.props.style.display === "contents" || (r && i.options.layoutScroll && i.scroll && i !== i.root && Bn(e, {
      x: -i.scroll.offset.x,
      y: -i.scroll.offset.y
    }), s && (t.x *= s.x.scale, t.y *= s.y.scale, Wf(e, s)), r && pn(i.latestValues) && Bn(e, i.latestValues));
  }
  t.x < qc && t.x > Xc && (t.x = 1), t.y < qc && t.y > Xc && (t.y = 1);
}
function Fn(e, t) {
  e.min = e.min + t, e.max = e.max + t;
}
function Qc(e, t, n, r, o = 0.5) {
  const i = Pe(e.min, e.max, o);
  Fs(e, t, n, i, r);
}
function Bn(e, t) {
  Qc(e.x, t.x, t.scaleX, t.scale, t.originX), Qc(e.y, t.y, t.scaleY, t.scale, t.originY);
}
function Hf(e, t) {
  return jf(i5(e.getBoundingClientRect(), t));
}
function a5(e, t, n) {
  const r = Hf(e, n), { scroll: o } = t;
  return o && (Fn(r.x, o.offset.x), Fn(r.y, o.offset.y)), r;
}
const Uf = ({ current: e }) => e ? e.ownerDocument.defaultView : null, l5 = /* @__PURE__ */ new WeakMap();
class c5 {
  constructor(t) {
    this.openGlobalLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = { x: 0, y: 0 }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = De(), this.visualElement = t;
  }
  start(t, { snapToCursor: n = !1 } = {}) {
    const { presenceContext: r } = this.visualElement;
    if (r && r.isPresent === !1)
      return;
    const o = (d) => {
      const { dragSnapToOrigin: f } = this.getProps();
      f ? this.pauseAnimation() : this.stopAnimation(), n && this.snapToCursor(di(d, "page").point);
    }, i = (d, f) => {
      var h;
      const { drag: g, dragPropagation: m, onDragStart: v } = this.getProps();
      if (g && !m && (this.openGlobalLock && this.openGlobalLock(), this.openGlobalLock = Of(g), !this.openGlobalLock))
        return;
      this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), at((w) => {
        let b = this.getAxisMotionValue(w).get() || 0;
        if (At.test(b)) {
          const { projection: C } = this.visualElement;
          if (C && C.layout) {
            const E = C.layout.layoutBox[w];
            E && (b = rt(E) * (parseFloat(b) / 100));
          }
        }
        this.originPoint[w] = b;
      }), v && be.postRender(() => v(d, f)), (h = this.removeWillChange) === null || h === void 0 || h.call(this), this.removeWillChange = _s(this.visualElement, "transform");
      const { animationState: y } = this.visualElement;
      y && y.setActive("whileDrag", !0);
    }, s = (d, f) => {
      const { dragPropagation: h, dragDirectionLock: g, onDirectionLock: m, onDrag: v } = this.getProps();
      if (!h && !this.openGlobalLock)
        return;
      const { offset: y } = f;
      if (g && this.currentDirection === null) {
        this.currentDirection = u5(y), this.currentDirection !== null && m && m(this.currentDirection);
        return;
      }
      this.updateAxis("x", f.point, y), this.updateAxis("y", f.point, y), this.visualElement.render(), v && v(d, f);
    }, l = (d, f) => this.stop(d, f), c = () => at((d) => {
      var f;
      return this.getAnimationState(d) === "paused" && ((f = this.getAxisMotionValue(d).animation) === null || f === void 0 ? void 0 : f.play());
    }), { dragSnapToOrigin: u } = this.getProps();
    this.panSession = new Df(t, {
      onSessionStart: o,
      onStart: i,
      onMove: s,
      onSessionEnd: l,
      resumeAnimation: c
    }, {
      transformPagePoint: this.visualElement.getTransformPagePoint(),
      dragSnapToOrigin: u,
      contextWindow: Uf(this.visualElement)
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
    s && be.postRender(() => s(t, n));
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
    if (!r || !lo(t, o, this.currentDirection))
      return;
    const i = this.getAxisMotionValue(t);
    let s = this.originPoint[t] + r[t];
    this.constraints && this.constraints[t] && (s = Qy(s, this.constraints[t], this.elastic[t])), i.set(s);
  }
  resolveConstraints() {
    var t;
    const { dragConstraints: n, dragElastic: r } = this.getProps(), o = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : (t = this.visualElement.projection) === null || t === void 0 ? void 0 : t.layout, i = this.constraints;
    n && On(n) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : n && o ? this.constraints = Jy(o.layoutBox, n) : this.constraints = !1, this.elastic = r5(r), i !== this.constraints && o && this.constraints && !this.hasMutatedConstraints && at((s) => {
      this.constraints !== !1 && this.getAxisMotionValue(s) && (this.constraints[s] = n5(o.layoutBox[s], this.constraints[s]));
    });
  }
  resolveRefConstraints() {
    const { dragConstraints: t, onMeasureDragConstraints: n } = this.getProps();
    if (!t || !On(t))
      return !1;
    const r = t.current;
    Qt(r !== null, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.");
    const { projection: o } = this.visualElement;
    if (!o || !o.layout)
      return !1;
    const i = a5(r, o.root, this.visualElement.getTransformPagePoint());
    let s = e5(o.layout.layoutBox, i);
    if (n) {
      const l = n(o5(s));
      this.hasMutatedConstraints = !!l, l && (s = jf(l));
    }
    return s;
  }
  startAnimation(t) {
    const { drag: n, dragMomentum: r, dragElastic: o, dragTransition: i, dragSnapToOrigin: s, onDragTransitionEnd: l } = this.getProps(), c = this.constraints || {}, u = at((d) => {
      if (!lo(d, n, this.currentDirection))
        return;
      let f = c && c[d] || {};
      s && (f = { min: 0, max: 0 });
      const h = o ? 200 : 1e6, g = o ? 40 : 1e7, m = {
        type: "inertia",
        velocity: r ? t[d] : 0,
        bounceStiffness: h,
        bounceDamping: g,
        timeConstant: 750,
        restDelta: 1,
        restSpeed: 10,
        ...i,
        ...f
      };
      return this.startAxisValueAnimation(d, m);
    });
    return Promise.all(u).then(l);
  }
  startAxisValueAnimation(t, n) {
    const r = this.getAxisMotionValue(t);
    return r.start(Ma(t, r, 0, n, this.visualElement, !1, _s(this.visualElement, t)));
  }
  stopAnimation() {
    at((t) => this.getAxisMotionValue(t).stop());
  }
  pauseAnimation() {
    at((t) => {
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
    at((n) => {
      const { drag: r } = this.getProps();
      if (!lo(n, r, this.currentDirection))
        return;
      const { projection: o } = this.visualElement, i = this.getAxisMotionValue(n);
      if (o && o.layout) {
        const { min: s, max: l } = o.layout.layoutBox[n];
        i.set(t[n] - Pe(s, l, 0.5));
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
    if (!On(n) || !r || !this.constraints)
      return;
    this.stopAnimation();
    const o = { x: 0, y: 0 };
    at((s) => {
      const l = this.getAxisMotionValue(s);
      if (l && this.constraints !== !1) {
        const c = l.get();
        o[s] = t5({ min: c, max: c }, this.constraints[s]);
      }
    });
    const { transformTemplate: i } = this.visualElement.getProps();
    this.visualElement.current.style.transform = i ? i({}, "") : "none", r.root && r.root.updateScroll(), r.updateLayout(), this.resolveConstraints(), at((s) => {
      if (!lo(s, t, null))
        return;
      const l = this.getAxisMotionValue(s), { min: c, max: u } = this.constraints[s];
      l.set(Pe(c, u, o[s]));
    });
  }
  addListeners() {
    if (!this.visualElement.current)
      return;
    l5.set(this.visualElement, this);
    const t = this.visualElement.current, n = Zt(t, "pointerdown", (c) => {
      const { drag: u, dragListener: d = !0 } = this.getProps();
      u && d && this.start(c);
    }), r = () => {
      const { dragConstraints: c } = this.getProps();
      On(c) && c.current && (this.constraints = this.resolveRefConstraints());
    }, { projection: o } = this.visualElement, i = o.addEventListener("measure", r);
    o && !o.layout && (o.root && o.root.updateScroll(), o.updateLayout()), be.read(r);
    const s = Ut(window, "resize", () => this.scalePositionWithinConstraints()), l = o.addEventListener("didUpdate", ({ delta: c, hasLayoutChanged: u }) => {
      this.isDragging && u && (at((d) => {
        const f = this.getAxisMotionValue(d);
        f && (this.originPoint[d] += c[d].translate, f.set(f.get() + c[d].translate));
      }), this.visualElement.render());
    });
    return () => {
      s(), n(), i(), l && l();
    };
  }
  getProps() {
    const t = this.visualElement.getProps(), { drag: n = !1, dragDirectionLock: r = !1, dragPropagation: o = !1, dragConstraints: i = !1, dragElastic: s = Os, dragMomentum: l = !0 } = t;
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
function lo(e, t, n) {
  return (t === !0 || t === e) && (n === null || n === e);
}
function u5(e, t = 10) {
  let n = null;
  return Math.abs(e.y) > t ? n = "y" : Math.abs(e.x) > t && (n = "x"), n;
}
class d5 extends cn {
  constructor(t) {
    super(t), this.removeGroupControls = Ue, this.removeListeners = Ue, this.controls = new c5(t);
  }
  mount() {
    const { dragControls: t } = this.node.getProps();
    t && (this.removeGroupControls = t.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || Ue;
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners();
  }
}
const Jc = (e) => (t, n) => {
  e && be.postRender(() => e(t, n));
};
class f5 extends cn {
  constructor() {
    super(...arguments), this.removePointerDownListener = Ue;
  }
  onPointerDown(t) {
    this.session = new Df(t, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: Uf(this.node)
    });
  }
  createPanHandlers() {
    const { onPanSessionStart: t, onPanStart: n, onPan: r, onPanEnd: o } = this.node.getProps();
    return {
      onSessionStart: Jc(t),
      onStart: Jc(n),
      onMove: r,
      onEnd: (i, s) => {
        delete this.session, o && be.postRender(() => o(i, s));
      }
    };
  }
  mount() {
    this.removePointerDownListener = Zt(this.node.current, "pointerdown", (t) => this.onPointerDown(t));
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener(), this.session && this.session.end();
  }
}
const fi = tt(null);
function h5() {
  const e = Se(fi);
  if (e === null)
    return [!0, null];
  const { isPresent: t, onExitComplete: n, register: r } = e, o = ni();
  Oe(() => r(o), []);
  const i = It(() => n && n(o), [o, n]);
  return !t && n ? [!1, i] : [!0];
}
const Pr = tt({}), zf = tt({}), wo = {
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
function eu(e, t) {
  return t.max === t.min ? 0 : e / (t.max - t.min) * 100;
}
const or = {
  correct: (e, t) => {
    if (!t.target)
      return e;
    if (typeof e == "string")
      if (he.test(e))
        e = parseFloat(e);
      else
        return e;
    const n = eu(e, t.target.x), r = eu(e, t.target.y);
    return `${n}% ${r}%`;
  }
}, p5 = {
  correct: (e, { treeScale: t, projectionDelta: n }) => {
    const r = e, o = an.parse(e);
    if (o.length > 5)
      return r;
    const i = an.createTransformer(e), s = typeof o[0] != "number" ? 1 : 0, l = n.x.scale * t.x, c = n.y.scale * t.y;
    o[0 + s] /= l, o[1 + s] /= c;
    const u = Pe(l, c, 0.5);
    return typeof o[2 + s] == "number" && (o[2 + s] /= u), typeof o[3 + s] == "number" && (o[3 + s] /= u), i(o);
  }
}, Oo = {};
function m5(e) {
  Object.assign(Oo, e);
}
const { schedule: La, cancel: _N } = Gd(queueMicrotask, !1);
class g5 extends lv {
  /**
   * This only mounts projection nodes for components that
   * need measuring, we might want to do it for all components
   * in order to incorporate transforms
   */
  componentDidMount() {
    const { visualElement: t, layoutGroup: n, switchLayoutGroup: r, layoutId: o } = this.props, { projection: i } = t;
    m5(v5), i && (n.group && n.group.add(i), r && r.register && o && r.register(i), i.root.didUpdate(), i.addEventListener("animationComplete", () => {
      this.safeToRemove();
    }), i.setOptions({
      ...i.options,
      onExitComplete: () => this.safeToRemove()
    })), wo.hasEverUpdated = !0;
  }
  getSnapshotBeforeUpdate(t) {
    const { layoutDependency: n, visualElement: r, drag: o, isPresent: i } = this.props, s = r.projection;
    return s && (s.isPresent = i, o || t.layoutDependency !== n || n === void 0 ? s.willUpdate() : this.safeToRemove(), t.isPresent !== i && (i ? s.promote() : s.relegate() || be.postRender(() => {
      const l = s.getStack();
      (!l || !l.members.length) && this.safeToRemove();
    }))), null;
  }
  componentDidUpdate() {
    const { projection: t } = this.props.visualElement;
    t && (t.root.didUpdate(), La.postRender(() => {
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
function Gf(e) {
  const [t, n] = h5(), r = Se(Pr);
  return a(g5, { ...e, layoutGroup: r, switchLayoutGroup: Se(zf), isPresent: t, safeToRemove: n });
}
const v5 = {
  borderRadius: {
    ...or,
    applyTo: [
      "borderTopLeftRadius",
      "borderTopRightRadius",
      "borderBottomLeftRadius",
      "borderBottomRightRadius"
    ]
  },
  borderTopLeftRadius: or,
  borderTopRightRadius: or,
  borderBottomLeftRadius: or,
  borderBottomRightRadius: or,
  boxShadow: p5
}, Kf = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"], y5 = Kf.length, tu = (e) => typeof e == "string" ? parseFloat(e) : e, nu = (e) => typeof e == "number" || he.test(e);
function b5(e, t, n, r, o, i) {
  o ? (e.opacity = Pe(
    0,
    // TODO Reinstate this if only child
    n.opacity !== void 0 ? n.opacity : 1,
    w5(r)
  ), e.opacityExit = Pe(t.opacity !== void 0 ? t.opacity : 1, 0, C5(r))) : i && (e.opacity = Pe(t.opacity !== void 0 ? t.opacity : 1, n.opacity !== void 0 ? n.opacity : 1, r));
  for (let s = 0; s < y5; s++) {
    const l = `border${Kf[s]}Radius`;
    let c = ru(t, l), u = ru(n, l);
    if (c === void 0 && u === void 0)
      continue;
    c || (c = 0), u || (u = 0), c === 0 || u === 0 || nu(c) === nu(u) ? (e[l] = Math.max(Pe(tu(c), tu(u), r), 0), (At.test(u) || At.test(c)) && (e[l] += "%")) : e[l] = u;
  }
  (t.rotate || n.rotate) && (e.rotate = Pe(t.rotate || 0, n.rotate || 0, r));
}
function ru(e, t) {
  return e[t] !== void 0 ? e[t] : e.borderRadius;
}
const w5 = /* @__PURE__ */ Yf(0, 0.5, bf), C5 = /* @__PURE__ */ Yf(0.5, 0.95, Ue);
function Yf(e, t, n) {
  return (r) => r < e ? 0 : r > t ? 1 : n(Lr(e, t, r));
}
function ou(e, t) {
  e.min = t.min, e.max = t.max;
}
function it(e, t) {
  ou(e.x, t.x), ou(e.y, t.y);
}
function iu(e, t) {
  e.translate = t.translate, e.scale = t.scale, e.originPoint = t.originPoint, e.origin = t.origin;
}
function su(e, t, n, r, o) {
  return e -= t, e = Io(e, 1 / n, r), o !== void 0 && (e = Io(e, 1 / o, r)), e;
}
function x5(e, t = 0, n = 1, r = 0.5, o, i = e, s = e) {
  if (At.test(t) && (t = parseFloat(t), t = Pe(s.min, s.max, t / 100) - s.min), typeof t != "number")
    return;
  let l = Pe(i.min, i.max, r);
  e === i && (l -= t), e.min = su(e.min, t, n, l, o), e.max = su(e.max, t, n, l, o);
}
function au(e, t, [n, r, o], i, s) {
  x5(e, t[n], t[r], t[o], t.scale, i, s);
}
const k5 = ["x", "scaleX", "originX"], S5 = ["y", "scaleY", "originY"];
function lu(e, t, n, r) {
  au(e.x, t, k5, n ? n.x : void 0, r ? r.x : void 0), au(e.y, t, S5, n ? n.y : void 0, r ? r.y : void 0);
}
function cu(e) {
  return e.translate === 0 && e.scale === 1;
}
function Zf(e) {
  return cu(e.x) && cu(e.y);
}
function uu(e, t) {
  return e.min === t.min && e.max === t.max;
}
function M5(e, t) {
  return uu(e.x, t.x) && uu(e.y, t.y);
}
function du(e, t) {
  return Math.round(e.min) === Math.round(t.min) && Math.round(e.max) === Math.round(t.max);
}
function Xf(e, t) {
  return du(e.x, t.x) && du(e.y, t.y);
}
function fu(e) {
  return rt(e.x) / rt(e.y);
}
function hu(e, t) {
  return e.translate === t.translate && e.scale === t.scale && e.originPoint === t.originPoint;
}
class E5 {
  constructor() {
    this.members = [];
  }
  add(t) {
    li(this.members, t), t.scheduleRender();
  }
  remove(t) {
    if (ci(this.members, t), t === this.prevLead && (this.prevLead = void 0), t === this.lead) {
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
function L5(e, t, n) {
  let r = "";
  const o = e.x.translate / t.x, i = e.y.translate / t.y, s = (n == null ? void 0 : n.z) || 0;
  if ((o || i || s) && (r = `translate3d(${o}px, ${i}px, ${s}px) `), (t.x !== 1 || t.y !== 1) && (r += `scale(${1 / t.x}, ${1 / t.y}) `), n) {
    const { transformPerspective: u, rotate: d, rotateX: f, rotateY: h, skewX: g, skewY: m } = n;
    u && (r = `perspective(${u}px) ${r}`), d && (r += `rotate(${d}deg) `), f && (r += `rotateX(${f}deg) `), h && (r += `rotateY(${h}deg) `), g && (r += `skewX(${g}deg) `), m && (r += `skewY(${m}deg) `);
  }
  const l = e.x.scale * t.x, c = e.y.scale * t.y;
  return (l !== 1 || c !== 1) && (r += `scale(${l}, ${c})`), r || "none";
}
const N5 = (e, t) => e.depth - t.depth;
class P5 {
  constructor() {
    this.children = [], this.isDirty = !1;
  }
  add(t) {
    li(this.children, t), this.isDirty = !0;
  }
  remove(t) {
    ci(this.children, t), this.isDirty = !0;
  }
  forEach(t) {
    this.isDirty && this.children.sort(N5), this.isDirty = !1, this.children.forEach(t);
  }
}
function Co(e) {
  const t = Ge(e) ? e.get() : e;
  return Cy(t) ? t.toValue() : t;
}
function T5(e, t) {
  const n = Kt.now(), r = ({ timestamp: o }) => {
    const i = o - n;
    i >= t && (qt(r), e(i - t));
  };
  return be.read(r, !0), () => qt(r);
}
function R5(e) {
  return e instanceof SVGElement && e.tagName !== "svg";
}
function A5(e, t, n) {
  const r = Ge(e) ? e : Nr(e);
  return r.start(Ma("", r, t, n)), r.animation;
}
const mn = {
  type: "projectionFrame",
  totalNodes: 0,
  resolvedTargetDeltas: 0,
  recalculatedProjection: 0
}, cr = typeof window < "u" && window.MotionDebug !== void 0, Ji = ["", "X", "Y", "Z"], D5 = { visibility: "hidden" }, pu = 1e3;
let _5 = 0;
function es(e, t, n, r) {
  const { latestValues: o } = t;
  o[e] && (n[e] = o[e], t.setStaticValue(e, 0), r && (r[e] = 0));
}
function qf(e) {
  if (e.hasCheckedOptimisedAppear = !0, e.root === e)
    return;
  const { visualElement: t } = e.options;
  if (!t)
    return;
  const n = Pf(t);
  if (window.MotionHasOptimisedAnimation(n, "transform")) {
    const { layout: o, layoutId: i } = e.options;
    window.MotionCancelOptimisedAnimation(n, "transform", be, !(o || i));
  }
  const { parent: r } = e;
  r && !r.hasCheckedOptimisedAppear && qf(r);
}
function Qf({ attachResizeListener: e, defaultParent: t, measureScroll: n, checkIsScrollRoot: r, resetTransform: o }) {
  return class {
    constructor(s = {}, l = t == null ? void 0 : t()) {
      this.id = _5++, this.animationId = 0, this.children = /* @__PURE__ */ new Set(), this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.hasCheckedOptimisedAppear = !1, this.treeScale = { x: 1, y: 1 }, this.eventHandlers = /* @__PURE__ */ new Map(), this.hasTreeAnimated = !1, this.updateScheduled = !1, this.scheduleUpdate = () => this.update(), this.projectionUpdateScheduled = !1, this.checkUpdateFailed = () => {
        this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots());
      }, this.updateProjection = () => {
        this.projectionUpdateScheduled = !1, cr && (mn.totalNodes = mn.resolvedTargetDeltas = mn.recalculatedProjection = 0), this.nodes.forEach(V5), this.nodes.forEach(W5), this.nodes.forEach(H5), this.nodes.forEach(F5), cr && window.MotionDebug.record(mn);
      }, this.resolvedRelativeTargetAt = 0, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = /* @__PURE__ */ new Map(), this.latestValues = s, this.root = l ? l.root || l : this, this.path = l ? [...l.path, l] : [], this.parent = l, this.depth = l ? l.depth + 1 : 0;
      for (let c = 0; c < this.path.length; c++)
        this.path[c].shouldResetTransform = !0;
      this.root === this && (this.nodes = new P5());
    }
    addEventListener(s, l) {
      return this.eventHandlers.has(s) || this.eventHandlers.set(s, new Ea()), this.eventHandlers.get(s).add(l);
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
      this.isSVG = R5(s), this.instance = s;
      const { layoutId: c, layout: u, visualElement: d } = this.options;
      if (d && !d.current && d.mount(s), this.root.nodes.add(this), this.parent && this.parent.children.add(this), l && (u || c) && (this.isLayoutDirty = !0), e) {
        let f;
        const h = () => this.root.updateBlockedByResize = !1;
        e(s, () => {
          this.root.updateBlockedByResize = !0, f && f(), f = T5(h, 250), wo.hasAnimatedSinceResize && (wo.hasAnimatedSinceResize = !1, this.nodes.forEach(gu));
        });
      }
      c && this.root.registerSharedNode(c, this), this.options.animate !== !1 && d && (c || u) && this.addEventListener("didUpdate", ({ delta: f, hasLayoutChanged: h, hasRelativeTargetChanged: g, layout: m }) => {
        if (this.isTreeAnimationBlocked()) {
          this.target = void 0, this.relativeTarget = void 0;
          return;
        }
        const v = this.options.transition || d.getDefaultTransition() || Y5, { onLayoutAnimationStart: y, onLayoutAnimationComplete: w } = d.getProps(), b = !this.targetLayout || !Xf(this.targetLayout, m) || g, C = !h && g;
        if (this.options.layoutRoot || this.resumeFrom && this.resumeFrom.instance || C || h && (b || !this.currentAnimation)) {
          this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0), this.setAnimationOrigin(f, C);
          const E = {
            ...ha(v, "layout"),
            onPlay: y,
            onComplete: w
          };
          (d.shouldReduceMotion || this.options.layoutRoot) && (E.delay = 0, E.type = !1), this.startAnimation(E);
        } else
          h || gu(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
        this.targetLayout = m;
      });
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      const s = this.getStack();
      s && s.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, qt(this.updateProjection);
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
      this.isUpdateBlocked() || (this.isUpdating = !0, this.nodes && this.nodes.forEach(U5), this.animationId++);
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
      if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && qf(this), !this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty)
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
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(mu);
        return;
      }
      this.isUpdating || this.nodes.forEach(j5), this.isUpdating = !1, this.nodes.forEach($5), this.nodes.forEach(I5), this.nodes.forEach(O5), this.clearAllSnapshots();
      const l = Kt.now();
      He.delta = sn(0, 1e3 / 60, l - He.timestamp), He.timestamp = l, He.isProcessing = !0, zi.update.process(He), zi.preRender.process(He), zi.render.process(He), He.isProcessing = !1;
    }
    didUpdate() {
      this.updateScheduled || (this.updateScheduled = !0, La.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      this.nodes.forEach(B5), this.sharedNodes.forEach(z5);
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0, be.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      be.postRender(() => {
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
      this.layout = this.measure(!1), this.layoutCorrected = De(), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
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
      const s = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout, l = this.projectionDelta && !Zf(this.projectionDelta), c = this.getTransformTemplate(), u = c ? c(this.latestValues, "") : void 0, d = u !== this.prevTransformTemplateValue;
      s && (l || pn(this.latestValues) || d) && (o(this.instance, u), this.shouldResetTransform = !1, this.scheduleRender());
    }
    measure(s = !0) {
      const l = this.measurePageBox();
      let c = this.removeElementScroll(l);
      return s && (c = this.removeTransform(c)), Z5(c), {
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
        return De();
      const c = l.measureViewportBox();
      if (!(((s = this.scroll) === null || s === void 0 ? void 0 : s.wasRoot) || this.path.some(X5))) {
        const { scroll: d } = this.root;
        d && (Fn(c.x, d.offset.x), Fn(c.y, d.offset.y));
      }
      return c;
    }
    removeElementScroll(s) {
      var l;
      const c = De();
      if (it(c, s), !((l = this.scroll) === null || l === void 0) && l.wasRoot)
        return c;
      for (let u = 0; u < this.path.length; u++) {
        const d = this.path[u], { scroll: f, options: h } = d;
        d !== this.root && f && h.layoutScroll && (f.wasRoot && it(c, s), Fn(c.x, f.offset.x), Fn(c.y, f.offset.y));
      }
      return c;
    }
    applyTransform(s, l = !1) {
      const c = De();
      it(c, s);
      for (let u = 0; u < this.path.length; u++) {
        const d = this.path[u];
        !l && d.options.layoutScroll && d.scroll && d !== d.root && Bn(c, {
          x: -d.scroll.offset.x,
          y: -d.scroll.offset.y
        }), pn(d.latestValues) && Bn(c, d.latestValues);
      }
      return pn(this.latestValues) && Bn(c, this.latestValues), c;
    }
    removeTransform(s) {
      const l = De();
      it(l, s);
      for (let c = 0; c < this.path.length; c++) {
        const u = this.path[c];
        if (!u.instance || !pn(u.latestValues))
          continue;
        Vs(u.latestValues) && u.updateSnapshot();
        const d = De(), f = u.measurePageBox();
        it(d, f), lu(l, u.latestValues, u.snapshot ? u.snapshot.layoutBox : void 0, d);
      }
      return pn(this.latestValues) && lu(l, this.latestValues), l;
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
      this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== He.timestamp && this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(s = !1) {
      var l;
      const c = this.getLead();
      this.isProjectionDirty || (this.isProjectionDirty = c.isProjectionDirty), this.isTransformDirty || (this.isTransformDirty = c.isTransformDirty), this.isSharedProjectionDirty || (this.isSharedProjectionDirty = c.isSharedProjectionDirty);
      const u = !!this.resumingFrom || this !== c;
      if (!(s || u && this.isSharedProjectionDirty || this.isProjectionDirty || !((l = this.parent) === null || l === void 0) && l.isProjectionDirty || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize))
        return;
      const { layout: f, layoutId: h } = this.options;
      if (!(!this.layout || !(f || h))) {
        if (this.resolvedRelativeTargetAt = He.timestamp, !this.targetDelta && !this.relativeTarget) {
          const g = this.getClosestProjectingParent();
          g && g.layout && this.animationProgress !== 1 ? (this.relativeParent = g, this.forceRelativeParentToResolveTarget(), this.relativeTarget = De(), this.relativeTargetOrigin = De(), yr(this.relativeTargetOrigin, this.layout.layoutBox, g.layout.layoutBox), it(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
        }
        if (!(!this.relativeTarget && !this.targetDelta)) {
          if (this.target || (this.target = De(), this.targetWithTransforms = De()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), qy(this.target, this.relativeTarget, this.relativeParent.target)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : it(this.target, this.layout.layoutBox), Wf(this.target, this.targetDelta)) : it(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget) {
            this.attemptToResolveRelativeTarget = !1;
            const g = this.getClosestProjectingParent();
            g && !!g.resumingFrom == !!this.resumingFrom && !g.options.layoutScroll && g.target && this.animationProgress !== 1 ? (this.relativeParent = g, this.forceRelativeParentToResolveTarget(), this.relativeTarget = De(), this.relativeTargetOrigin = De(), yr(this.relativeTargetOrigin, this.target, g.target), it(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
          }
          cr && mn.resolvedTargetDeltas++;
        }
      }
    }
    getClosestProjectingParent() {
      if (!(!this.parent || Vs(this.parent.latestValues) || $f(this.parent.latestValues)))
        return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout);
    }
    calcProjection() {
      var s;
      const l = this.getLead(), c = !!this.resumingFrom || this !== l;
      let u = !0;
      if ((this.isProjectionDirty || !((s = this.parent) === null || s === void 0) && s.isProjectionDirty) && (u = !1), c && (this.isSharedProjectionDirty || this.isTransformDirty) && (u = !1), this.resolvedRelativeTargetAt === He.timestamp && (u = !1), u)
        return;
      const { layout: d, layoutId: f } = this.options;
      if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(d || f))
        return;
      it(this.layoutCorrected, this.layout.layoutBox);
      const h = this.treeScale.x, g = this.treeScale.y;
      s5(this.layoutCorrected, this.treeScale, this.path, c), l.layout && !l.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (l.target = l.layout.layoutBox, l.targetWithTransforms = De());
      const { target: m } = l;
      if (!m) {
        this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      !this.projectionDelta || !this.prevProjectionDelta ? this.createProjectionDeltas() : (iu(this.prevProjectionDelta.x, this.projectionDelta.x), iu(this.prevProjectionDelta.y, this.projectionDelta.y)), vr(this.projectionDelta, this.layoutCorrected, m, this.latestValues), (this.treeScale.x !== h || this.treeScale.y !== g || !hu(this.projectionDelta.x, this.prevProjectionDelta.x) || !hu(this.projectionDelta.y, this.prevProjectionDelta.y)) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", m)), cr && mn.recalculatedProjection++;
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
      this.prevProjectionDelta = Vn(), this.projectionDelta = Vn(), this.projectionDeltaWithTransform = Vn();
    }
    setAnimationOrigin(s, l = !1) {
      const c = this.snapshot, u = c ? c.latestValues : {}, d = { ...this.latestValues }, f = Vn();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !l;
      const h = De(), g = c ? c.source : void 0, m = this.layout ? this.layout.source : void 0, v = g !== m, y = this.getStack(), w = !y || y.members.length <= 1, b = !!(v && !w && this.options.crossfade === !0 && !this.path.some(K5));
      this.animationProgress = 0;
      let C;
      this.mixTargetDelta = (E) => {
        const L = E / 1e3;
        vu(f.x, s.x, L), vu(f.y, s.y, L), this.setTargetDelta(f), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (yr(h, this.layout.layoutBox, this.relativeParent.layout.layoutBox), G5(this.relativeTarget, this.relativeTargetOrigin, h, L), C && M5(this.relativeTarget, C) && (this.isProjectionDirty = !1), C || (C = De()), it(C, this.relativeTarget)), v && (this.animationValues = d, b5(d, u, this.latestValues, L, b, w)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = L;
      }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(s) {
      this.notifyListeners("animationStart"), this.currentAnimation && this.currentAnimation.stop(), this.resumingFrom && this.resumingFrom.currentAnimation && this.resumingFrom.currentAnimation.stop(), this.pendingAnimation && (qt(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = be.update(() => {
        wo.hasAnimatedSinceResize = !0, this.currentAnimation = A5(0, pu, {
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
      this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(pu), this.currentAnimation.stop()), this.completeAnimation();
    }
    applyTransformsToTarget() {
      const s = this.getLead();
      let { targetWithTransforms: l, target: c, layout: u, latestValues: d } = s;
      if (!(!l || !c || !u)) {
        if (this !== s && this.layout && u && Jf(this.options.animationType, this.layout.layoutBox, u.layoutBox)) {
          c = this.target || De();
          const f = rt(this.layout.layoutBox.x);
          c.x.min = s.target.x.min, c.x.max = c.x.min + f;
          const h = rt(this.layout.layoutBox.y);
          c.y.min = s.target.y.min, c.y.max = c.y.min + h;
        }
        it(l, c), Bn(l, d), vr(this.projectionDeltaWithTransform, this.layoutCorrected, l, d);
      }
    }
    registerSharedNode(s, l) {
      this.sharedNodes.has(s) || this.sharedNodes.set(s, new E5()), this.sharedNodes.get(s).add(l);
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
      c.z && es("z", s, u, this.animationValues);
      for (let d = 0; d < Ji.length; d++)
        es(`rotate${Ji[d]}`, s, u, this.animationValues), es(`skew${Ji[d]}`, s, u, this.animationValues);
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
        return D5;
      const u = {
        visibility: ""
      }, d = this.getTransformTemplate();
      if (this.needsReset)
        return this.needsReset = !1, u.opacity = "", u.pointerEvents = Co(s == null ? void 0 : s.pointerEvents) || "", u.transform = d ? d(this.latestValues, "") : "none", u;
      const f = this.getLead();
      if (!this.projectionDelta || !this.layout || !f.target) {
        const v = {};
        return this.options.layoutId && (v.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1, v.pointerEvents = Co(s == null ? void 0 : s.pointerEvents) || ""), this.hasProjected && !pn(this.latestValues) && (v.transform = d ? d({}, "") : "none", this.hasProjected = !1), v;
      }
      const h = f.animationValues || f.latestValues;
      this.applyTransformsToTarget(), u.transform = L5(this.projectionDeltaWithTransform, this.treeScale, h), d && (u.transform = d(h, u.transform));
      const { x: g, y: m } = this.projectionDelta;
      u.transformOrigin = `${g.origin * 100}% ${m.origin * 100}% 0`, f.animationValues ? u.opacity = f === this ? (c = (l = h.opacity) !== null && l !== void 0 ? l : this.latestValues.opacity) !== null && c !== void 0 ? c : 1 : this.preserveOpacity ? this.latestValues.opacity : h.opacityExit : u.opacity = f === this ? h.opacity !== void 0 ? h.opacity : "" : h.opacityExit !== void 0 ? h.opacityExit : 0;
      for (const v in Oo) {
        if (h[v] === void 0)
          continue;
        const { correct: y, applyTo: w } = Oo[v], b = u.transform === "none" ? h[v] : y(h[v], f);
        if (w) {
          const C = w.length;
          for (let E = 0; E < C; E++)
            u[w[E]] = b;
        } else
          u[v] = b;
      }
      return this.options.layoutId && (u.pointerEvents = f === this ? Co(s == null ? void 0 : s.pointerEvents) || "" : "none"), u;
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    // Only run on root
    resetTree() {
      this.root.nodes.forEach((s) => {
        var l;
        return (l = s.currentAnimation) === null || l === void 0 ? void 0 : l.stop();
      }), this.root.nodes.forEach(mu), this.root.sharedNodes.clear();
    }
  };
}
function I5(e) {
  e.updateLayout();
}
function O5(e) {
  var t;
  const n = ((t = e.resumeFrom) === null || t === void 0 ? void 0 : t.snapshot) || e.snapshot;
  if (e.isLead() && e.layout && n && e.hasListeners("didUpdate")) {
    const { layoutBox: r, measuredBox: o } = e.layout, { animationType: i } = e.options, s = n.source !== e.layout.source;
    i === "size" ? at((f) => {
      const h = s ? n.measuredBox[f] : n.layoutBox[f], g = rt(h);
      h.min = r[f].min, h.max = h.min + g;
    }) : Jf(i, n.layoutBox, r) && at((f) => {
      const h = s ? n.measuredBox[f] : n.layoutBox[f], g = rt(r[f]);
      h.max = h.min + g, e.relativeTarget && !e.currentAnimation && (e.isProjectionDirty = !0, e.relativeTarget[f].max = e.relativeTarget[f].min + g);
    });
    const l = Vn();
    vr(l, r, n.layoutBox);
    const c = Vn();
    s ? vr(c, e.applyTransform(o, !0), n.measuredBox) : vr(c, r, n.layoutBox);
    const u = !Zf(l);
    let d = !1;
    if (!e.resumeFrom) {
      const f = e.getClosestProjectingParent();
      if (f && !f.resumeFrom) {
        const { snapshot: h, layout: g } = f;
        if (h && g) {
          const m = De();
          yr(m, n.layoutBox, h.layoutBox);
          const v = De();
          yr(v, r, g.layoutBox), Xf(m, v) || (d = !0), f.options.layoutRoot && (e.relativeTarget = v, e.relativeTargetOrigin = m, e.relativeParent = f);
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
function V5(e) {
  cr && mn.totalNodes++, e.parent && (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty), e.isSharedProjectionDirty || (e.isSharedProjectionDirty = !!(e.isProjectionDirty || e.parent.isProjectionDirty || e.parent.isSharedProjectionDirty)), e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty));
}
function F5(e) {
  e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
}
function B5(e) {
  e.clearSnapshot();
}
function mu(e) {
  e.clearMeasurements();
}
function j5(e) {
  e.isLayoutDirty = !1;
}
function $5(e) {
  const { visualElement: t } = e.options;
  t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"), e.resetTransform();
}
function gu(e) {
  e.finishAnimation(), e.targetDelta = e.relativeTarget = e.target = void 0, e.isProjectionDirty = !0;
}
function W5(e) {
  e.resolveTargetDelta();
}
function H5(e) {
  e.calcProjection();
}
function U5(e) {
  e.resetSkewAndRotation();
}
function z5(e) {
  e.removeLeadSnapshot();
}
function vu(e, t, n) {
  e.translate = Pe(t.translate, 0, n), e.scale = Pe(t.scale, 1, n), e.origin = t.origin, e.originPoint = t.originPoint;
}
function yu(e, t, n, r) {
  e.min = Pe(t.min, n.min, r), e.max = Pe(t.max, n.max, r);
}
function G5(e, t, n, r) {
  yu(e.x, t.x, n.x, r), yu(e.y, t.y, n.y, r);
}
function K5(e) {
  return e.animationValues && e.animationValues.opacityExit !== void 0;
}
const Y5 = {
  duration: 0.45,
  ease: [0.4, 0, 0.1, 1]
}, bu = (e) => typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(e), wu = bu("applewebkit/") && !bu("chrome/") ? Math.round : Ue;
function Cu(e) {
  e.min = wu(e.min), e.max = wu(e.max);
}
function Z5(e) {
  Cu(e.x), Cu(e.y);
}
function Jf(e, t, n) {
  return e === "position" || e === "preserve-aspect" && !Xy(fu(t), fu(n), 0.2);
}
function X5(e) {
  var t;
  return e !== e.root && ((t = e.scroll) === null || t === void 0 ? void 0 : t.wasRoot);
}
const q5 = Qf({
  attachResizeListener: (e, t) => Ut(e, "resize", t),
  measureScroll: () => ({
    x: document.documentElement.scrollLeft || document.body.scrollLeft,
    y: document.documentElement.scrollTop || document.body.scrollTop
  }),
  checkIsScrollRoot: () => !0
}), ts = {
  current: void 0
}, e1 = Qf({
  measureScroll: (e) => ({
    x: e.scrollLeft,
    y: e.scrollTop
  }),
  defaultParent: () => {
    if (!ts.current) {
      const e = new q5({});
      e.mount(window), e.setOptions({ layoutScroll: !0 }), ts.current = e;
    }
    return ts.current;
  },
  resetTransform: (e, t) => {
    e.style.transform = t !== void 0 ? t : "none";
  },
  checkIsScrollRoot: (e) => window.getComputedStyle(e).position === "fixed"
}), Q5 = {
  pan: {
    Feature: f5
  },
  drag: {
    Feature: d5,
    ProjectionNode: e1,
    MeasureLayout: Gf
  }
};
function xu(e, t) {
  const n = t ? "pointerenter" : "pointerleave", r = t ? "onHoverStart" : "onHoverEnd", o = (i, s) => {
    if (i.pointerType === "touch" || Vf())
      return;
    const l = e.getProps();
    e.animationState && l.whileHover && e.animationState.setActive("whileHover", t);
    const c = l[r];
    c && be.postRender(() => c(i, s));
  };
  return Zt(e.current, n, o, {
    passive: !e.getProps()[r]
  });
}
class J5 extends cn {
  mount() {
    this.unmount = Yt(xu(this.node, !0), xu(this.node, !1));
  }
  unmount() {
  }
}
class e4 extends cn {
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
    this.unmount = Yt(Ut(this.node.current, "focus", () => this.onFocus()), Ut(this.node.current, "blur", () => this.onBlur()));
  }
  unmount() {
  }
}
const t1 = (e, t) => t ? e === t ? !0 : t1(e, t.parentElement) : !1;
function ns(e, t) {
  if (!t)
    return;
  const n = new PointerEvent("pointer" + e);
  t(n, di(n));
}
class t4 extends cn {
  constructor() {
    super(...arguments), this.removeStartListeners = Ue, this.removeEndListeners = Ue, this.removeAccessibleListeners = Ue, this.startPointerPress = (t, n) => {
      if (this.isPressing)
        return;
      this.removeEndListeners();
      const r = this.node.getProps(), i = Zt(window, "pointerup", (l, c) => {
        if (!this.checkPressEnd())
          return;
        const { onTap: u, onTapCancel: d, globalTapTarget: f } = this.node.getProps(), h = !f && !t1(this.node.current, l.target) ? d : u;
        h && be.update(() => h(l, c));
      }, {
        passive: !(r.onTap || r.onPointerUp)
      }), s = Zt(window, "pointercancel", (l, c) => this.cancelPress(l, c), {
        passive: !(r.onTapCancel || r.onPointerCancel)
      });
      this.removeEndListeners = Yt(i, s), this.startPress(t, n);
    }, this.startAccessiblePress = () => {
      const t = (i) => {
        if (i.key !== "Enter" || this.isPressing)
          return;
        const s = (l) => {
          l.key !== "Enter" || !this.checkPressEnd() || ns("up", (c, u) => {
            const { onTap: d } = this.node.getProps();
            d && be.postRender(() => d(c, u));
          });
        };
        this.removeEndListeners(), this.removeEndListeners = Ut(this.node.current, "keyup", s), ns("down", (l, c) => {
          this.startPress(l, c);
        });
      }, n = Ut(this.node.current, "keydown", t), r = () => {
        this.isPressing && ns("cancel", (i, s) => this.cancelPress(i, s));
      }, o = Ut(this.node.current, "blur", r);
      this.removeAccessibleListeners = Yt(n, o);
    };
  }
  startPress(t, n) {
    this.isPressing = !0;
    const { onTapStart: r, whileTap: o } = this.node.getProps();
    o && this.node.animationState && this.node.animationState.setActive("whileTap", !0), r && be.postRender(() => r(t, n));
  }
  checkPressEnd() {
    return this.removeEndListeners(), this.isPressing = !1, this.node.getProps().whileTap && this.node.animationState && this.node.animationState.setActive("whileTap", !1), !Vf();
  }
  cancelPress(t, n) {
    if (!this.checkPressEnd())
      return;
    const { onTapCancel: r } = this.node.getProps();
    r && be.postRender(() => r(t, n));
  }
  mount() {
    const t = this.node.getProps(), n = Zt(t.globalTapTarget ? window : this.node.current, "pointerdown", this.startPointerPress, {
      passive: !(t.onTapStart || t.onPointerStart)
    }), r = Ut(this.node.current, "focus", this.startAccessiblePress);
    this.removeStartListeners = Yt(n, r);
  }
  unmount() {
    this.removeStartListeners(), this.removeEndListeners(), this.removeAccessibleListeners();
  }
}
const Bs = /* @__PURE__ */ new WeakMap(), rs = /* @__PURE__ */ new WeakMap(), n4 = (e) => {
  const t = Bs.get(e.target);
  t && t(e);
}, r4 = (e) => {
  e.forEach(n4);
};
function o4({ root: e, ...t }) {
  const n = e || document;
  rs.has(n) || rs.set(n, {});
  const r = rs.get(n), o = JSON.stringify(t);
  return r[o] || (r[o] = new IntersectionObserver(r4, { root: e, ...t })), r[o];
}
function i4(e, t, n) {
  const r = o4(t);
  return Bs.set(e, n), r.observe(e), () => {
    Bs.delete(e), r.unobserve(e);
  };
}
const s4 = {
  some: 0,
  all: 1
};
class a4 extends cn {
  constructor() {
    super(...arguments), this.hasEnteredView = !1, this.isInView = !1;
  }
  startObserver() {
    this.unmount();
    const { viewport: t = {} } = this.node.getProps(), { root: n, margin: r, amount: o = "some", once: i } = t, s = {
      root: n ? n.current : void 0,
      rootMargin: r,
      threshold: typeof o == "number" ? o : s4[o]
    }, l = (c) => {
      const { isIntersecting: u } = c;
      if (this.isInView === u || (this.isInView = u, i && !u && this.hasEnteredView))
        return;
      u && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", u);
      const { onViewportEnter: d, onViewportLeave: f } = this.node.getProps(), h = u ? d : f;
      h && h(c);
    };
    return i4(this.node.current, s, l);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u")
      return;
    const { props: t, prevProps: n } = this.node;
    ["amount", "margin", "root"].some(l4(t, n)) && this.startObserver();
  }
  unmount() {
  }
}
function l4({ viewport: e = {} }, { viewport: t = {} } = {}) {
  return (n) => e[n] !== t[n];
}
const c4 = {
  inView: {
    Feature: a4
  },
  tap: {
    Feature: t4
  },
  focus: {
    Feature: e4
  },
  hover: {
    Feature: J5
  }
}, u4 = {
  layout: {
    ProjectionNode: e1,
    MeasureLayout: Gf
  }
}, hi = tt({}), Na = typeof window < "u", Pa = Na ? Vd : Oe, n1 = tt({ strict: !1 });
let ku = !1;
function d4(e, t, n, r, o) {
  var i;
  const { visualElement: s } = Se(hi), l = Se(n1), c = Se(fi), u = Se(ia).reducedMotion, d = je();
  r = r || l.renderer, !d.current && r && (d.current = r(e, {
    visualState: t,
    parent: s,
    props: n,
    presenceContext: c,
    blockInitialAnimation: c ? c.initial === !1 : !1,
    reducedMotionConfig: u
  }));
  const f = d.current, h = Se(zf);
  f && !f.projection && o && (f.type === "html" || f.type === "svg") && h4(d.current, n, o, h), Fd(() => {
    f && f.update(n, c);
  });
  const g = n[Nf], m = je(!!g && !window.MotionHandoffIsComplete && ((i = window.MotionHasOptimisedAnimation) === null || i === void 0 ? void 0 : i.call(window, g)));
  return Pa(() => {
    f && (f.updateFeatures(), La.render(f.render), m.current && f.animationState && f.animationState.animateChanges());
  }), Oe(() => {
    f && (!m.current && f.animationState && f.animationState.animateChanges(), m.current = !1, ku || (ku = !0, queueMicrotask(f4)));
  }), f;
}
function f4() {
  window.MotionHandoffIsComplete = !0;
}
function h4(e, t, n, r) {
  const { layoutId: o, layout: i, drag: s, dragConstraints: l, layoutScroll: c, layoutRoot: u } = t;
  e.projection = new n(e.latestValues, t["data-framer-portal-id"] ? void 0 : r1(e.parent)), e.projection.setOptions({
    layoutId: o,
    layout: i,
    alwaysMeasureLayout: !!s || l && On(l),
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
function r1(e) {
  if (e)
    return e.options.allowProjection !== !1 ? e.projection : r1(e.parent);
}
function p4(e, t, n) {
  return It(
    (r) => {
      r && e.mount && e.mount(r), t && (r ? t.mount(r) : t.unmount()), n && (typeof n == "function" ? n(r) : On(n) && (n.current = r));
    },
    /**
     * Only pass a new ref callback to React if we've received a visual element
     * factory. Otherwise we'll be mounting/remounting every time externalRef
     * or other dependencies change.
     */
    [t]
  );
}
function pi(e) {
  return Sr(e.animate) || fa.some((t) => Mr(e[t]));
}
function o1(e) {
  return !!(pi(e) || e.variants);
}
function m4(e, t) {
  if (pi(e)) {
    const { initial: n, animate: r } = e;
    return {
      initial: n === !1 || Mr(n) ? n : void 0,
      animate: Mr(r) ? r : void 0
    };
  }
  return e.inherit !== !1 ? t : {};
}
function g4(e) {
  const { initial: t, animate: n } = m4(e, Se(hi));
  return Ct(() => ({ initial: t, animate: n }), [Su(t), Su(n)]);
}
function Su(e) {
  return Array.isArray(e) ? e.join(" ") : e;
}
const Mu = {
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
}, Kn = {};
for (const e in Mu)
  Kn[e] = {
    isEnabled: (t) => Mu[e].some((n) => !!t[n])
  };
function v4(e) {
  for (const t in e)
    Kn[t] = {
      ...Kn[t],
      ...e[t]
    };
}
const y4 = Symbol.for("motionComponentSymbol");
function b4({ preloadedFeatures: e, createVisualElement: t, useRender: n, useVisualState: r, Component: o }) {
  e && v4(e);
  function i(l, c) {
    let u;
    const d = {
      ...Se(ia),
      ...l,
      layoutId: w4(l)
    }, { isStatic: f } = d, h = g4(l), g = r(l, f);
    if (!f && Na) {
      C4(d, e);
      const m = x4(d);
      u = m.MeasureLayout, h.visualElement = d4(o, g, d, t, m.ProjectionNode);
    }
    return x(hi.Provider, { value: h, children: [u && h.visualElement ? a(u, { visualElement: h.visualElement, ...d }) : null, n(o, l, p4(g, h.visualElement, c), g, f, h.visualElement)] });
  }
  const s = P(i);
  return s[y4] = o, s;
}
function w4({ layoutId: e }) {
  const t = Se(Pr).id;
  return t && e !== void 0 ? t + "-" + e : e;
}
function C4(e, t) {
  const n = Se(n1).strict;
  if (process.env.NODE_ENV !== "production" && t && n) {
    const r = "You have rendered a `motion` component within a `LazyMotion` component. This will break tree shaking. Import and render a `m` component instead.";
    e.ignoreStrict ? Qn(!1, r) : Qt(!1, r);
  }
}
function x4(e) {
  const { drag: t, layout: n } = Kn;
  if (!t && !n)
    return {};
  const r = { ...t, ...n };
  return {
    MeasureLayout: t != null && t.isEnabled(e) || n != null && n.isEnabled(e) ? r.MeasureLayout : void 0,
    ProjectionNode: r.ProjectionNode
  };
}
const k4 = [
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
function Ta(e) {
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
      !!(k4.indexOf(e) > -1 || /**
       * If it contains a capital letter, it's an SVG component
       */
      /[A-Z]/u.test(e))
    )
  );
}
function i1(e, { style: t, vars: n }, r, o) {
  Object.assign(e.style, t, o && o.getProjectionStyles(r));
  for (const i in n)
    e.style.setProperty(i, n[i]);
}
const s1 = /* @__PURE__ */ new Set([
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
function a1(e, t, n, r) {
  i1(e, t, void 0, r);
  for (const o in t.attrs)
    e.setAttribute(s1.has(o) ? o : ui(o), t.attrs[o]);
}
function l1(e, { layout: t, layoutId: n }) {
  return ln.has(e) || e.startsWith("origin") || (t || n !== void 0) && (!!Oo[e] || e === "opacity");
}
function Ra(e, t, n) {
  var r;
  const { style: o } = e, i = {};
  for (const s in o)
    (Ge(o[s]) || t.style && Ge(t.style[s]) || l1(s, e) || ((r = n == null ? void 0 : n.getValue(s)) === null || r === void 0 ? void 0 : r.liveStyle) !== void 0) && (i[s] = o[s]);
  return n && o && typeof o.willChange == "string" && (n.applyWillChange = !1), i;
}
function c1(e, t, n) {
  const r = Ra(e, t, n);
  for (const o in e)
    if (Ge(e[o]) || Ge(t[o])) {
      const i = Fr.indexOf(o) !== -1 ? "attr" + o.charAt(0).toUpperCase() + o.substring(1) : o;
      r[i] = e[o];
    }
  return r;
}
function S4({ applyWillChange: e = !1, scrapeMotionValuesFromProps: t, createRenderState: n, onMount: r }, o, i, s, l) {
  const c = {
    latestValues: E4(o, i, s, l ? !1 : e, t),
    renderState: n()
  };
  return r && (c.mount = (u) => r(o, u, c)), c;
}
const u1 = (e) => (t, n) => {
  const r = Se(hi), o = Se(fi), i = () => S4(e, t, r, o, n);
  return n ? i() : sa(i);
};
function M4(e, t) {
  const n = Tf(t);
  n && li(e, n);
}
function Eu(e, t, n) {
  const r = Array.isArray(t) ? t : [t];
  for (let o = 0; o < r.length; o++) {
    const i = ua(e, r[o]);
    if (i) {
      const { transitionEnd: s, transition: l, ...c } = i;
      n(c, s);
    }
  }
}
function E4(e, t, n, r, o) {
  var i;
  const s = {}, l = [], c = r && ((i = e.style) === null || i === void 0 ? void 0 : i.willChange) === void 0, u = o(e, {});
  for (const y in u)
    s[y] = Co(u[y]);
  let { initial: d, animate: f } = e;
  const h = pi(e), g = o1(e);
  t && g && !h && e.inherit !== !1 && (d === void 0 && (d = t.initial), f === void 0 && (f = t.animate));
  let m = n ? n.initial === !1 : !1;
  m = m || d === !1;
  const v = m ? f : d;
  return v && typeof v != "boolean" && !Sr(v) && Eu(e, v, (y, w) => {
    for (const b in y) {
      let C = y[b];
      if (Array.isArray(C)) {
        const E = m ? C.length - 1 : 0;
        C = C[E];
      }
      C !== null && (s[b] = C);
    }
    for (const b in w)
      s[b] = w[b];
  }), c && (f && d !== !1 && !Sr(f) && Eu(e, f, (y) => {
    for (const w in y)
      M4(l, w);
  }), l.length && (s.willChange = l.join(","))), s;
}
const Aa = () => ({
  style: {},
  transform: {},
  transformOrigin: {},
  vars: {}
}), d1 = () => ({
  ...Aa(),
  attrs: {}
}), f1 = (e, t) => t && typeof e == "number" ? t.transform(e) : e, L4 = {
  x: "translateX",
  y: "translateY",
  z: "translateZ",
  transformPerspective: "perspective"
}, N4 = Fr.length;
function P4(e, t, n) {
  let r = "", o = !0;
  for (let i = 0; i < N4; i++) {
    const s = Fr[i], l = e[s];
    if (l === void 0)
      continue;
    let c = !0;
    if (typeof l == "number" ? c = l === (s.startsWith("scale") ? 1 : 0) : c = parseFloat(l) === 0, !c || n) {
      const u = f1(l, ya[s]);
      if (!c) {
        o = !1;
        const d = L4[s] || s;
        r += `${d}(${u}) `;
      }
      n && (t[s] = u);
    }
  }
  return r = r.trim(), n ? r = n(t, o ? "" : r) : o && (r = "none"), r;
}
function Da(e, t, n) {
  const { style: r, vars: o, transformOrigin: i } = e;
  let s = !1, l = !1;
  for (const c in t) {
    const u = t[c];
    if (ln.has(c)) {
      s = !0;
      continue;
    } else if (Xd(c)) {
      o[c] = u;
      continue;
    } else {
      const d = f1(u, ya[c]);
      c.startsWith("origin") ? (l = !0, i[c] = d) : r[c] = d;
    }
  }
  if (t.transform || (s || n ? r.transform = P4(t, e.transform, n) : r.transform && (r.transform = "none")), l) {
    const { originX: c = "50%", originY: u = "50%", originZ: d = 0 } = i;
    r.transformOrigin = `${c} ${u} ${d}`;
  }
}
function Lu(e, t, n) {
  return typeof e == "string" ? e : he.transform(t + n * e);
}
function T4(e, t, n) {
  const r = Lu(t, e.x, e.width), o = Lu(n, e.y, e.height);
  return `${r} ${o}`;
}
const R4 = {
  offset: "stroke-dashoffset",
  array: "stroke-dasharray"
}, A4 = {
  offset: "strokeDashoffset",
  array: "strokeDasharray"
};
function D4(e, t, n = 1, r = 0, o = !0) {
  e.pathLength = 1;
  const i = o ? R4 : A4;
  e[i.offset] = he.transform(-r);
  const s = he.transform(t), l = he.transform(n);
  e[i.array] = `${s} ${l}`;
}
function _a(e, {
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
  if (Da(e, u, f), d) {
    e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
    return;
  }
  e.attrs = e.style, e.style = {};
  const { attrs: h, style: g, dimensions: m } = e;
  h.transform && (m && (g.transform = h.transform), delete h.transform), m && (o !== void 0 || i !== void 0 || g.transform) && (g.transformOrigin = T4(m, o !== void 0 ? o : 0.5, i !== void 0 ? i : 0.5)), t !== void 0 && (h.x = t), n !== void 0 && (h.y = n), r !== void 0 && (h.scale = r), s !== void 0 && D4(h, s, l, c, !1);
}
const Ia = (e) => typeof e == "string" && e.toLowerCase() === "svg", _4 = {
  useVisualState: u1({
    scrapeMotionValuesFromProps: c1,
    createRenderState: d1,
    onMount: (e, t, { renderState: n, latestValues: r }) => {
      be.read(() => {
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
      }), be.render(() => {
        _a(n, r, Ia(t.tagName), e.transformTemplate), a1(t, n);
      });
    }
  })
}, I4 = {
  useVisualState: u1({
    applyWillChange: !0,
    scrapeMotionValuesFromProps: Ra,
    createRenderState: Aa
  })
};
function h1(e, t, n) {
  for (const r in t)
    !Ge(t[r]) && !l1(r, n) && (e[r] = t[r]);
}
function O4({ transformTemplate: e }, t) {
  return Ct(() => {
    const n = Aa();
    return Da(n, t, e), Object.assign({}, n.vars, n.style);
  }, [t]);
}
function V4(e, t) {
  const n = e.style || {}, r = {};
  return h1(r, n, e), Object.assign(r, O4(e, t)), r;
}
function F4(e, t) {
  const n = {}, r = V4(e, t);
  return e.drag && e.dragListener !== !1 && (n.draggable = !1, r.userSelect = r.WebkitUserSelect = r.WebkitTouchCallout = "none", r.touchAction = e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`), e.tabIndex === void 0 && (e.onTap || e.onTapStart || e.whileTap) && (n.tabIndex = 0), n.style = r, n;
}
function B4(e, t, n, r) {
  const o = Ct(() => {
    const i = d1();
    return _a(i, t, Ia(r), e.transformTemplate), {
      ...i.attrs,
      style: { ...i.style }
    };
  }, [t]);
  if (e.style) {
    const i = {};
    h1(i, e.style, e), o.style = { ...i, ...o.style };
  }
  return o;
}
function j4(e = !1) {
  return (n, r, o, { latestValues: i }, s) => {
    const c = (Ta(n) ? B4 : F4)(r, i, s, n), u = I0(r, typeof n == "string", e), d = n !== Bd ? { ...u, ...c, ref: o } : {}, { children: f } = r, h = Ct(() => Ge(f) ? f.get() : f, [f]);
    return Po(n, {
      ...d,
      children: h
    });
  };
}
function $4(e, t) {
  return function(r, { forwardMotionProps: o } = { forwardMotionProps: !1 }) {
    const s = {
      ...Ta(r) ? _4 : I4,
      preloadedFeatures: e,
      useRender: j4(o),
      createVisualElement: t,
      Component: r
    };
    return b4(s);
  };
}
const js = { current: null }, p1 = { current: !1 };
function W4() {
  if (p1.current = !0, !!Na)
    if (window.matchMedia) {
      const e = window.matchMedia("(prefers-reduced-motion)"), t = () => js.current = e.matches;
      e.addListener(t), t();
    } else
      js.current = !1;
}
function H4(e, t, n) {
  for (const r in t) {
    const o = t[r], i = n[r];
    if (Ge(o))
      e.addValue(r, o), process.env.NODE_ENV === "development" && ii(o.version === "11.5.4", `Attempting to mix Framer Motion versions ${o.version} with 11.5.4 may not work as expected.`);
    else if (Ge(i))
      e.addValue(r, Nr(o, { owner: e }));
    else if (i !== o)
      if (e.hasValue(r)) {
        const s = e.getValue(r);
        s.liveStyle === !0 ? s.jump(o) : s.hasAnimated || s.set(o);
      } else {
        const s = e.getStaticValue(r);
        e.addValue(r, Nr(s !== void 0 ? s : o, { owner: e }));
      }
  }
  for (const r in n)
    t[r] === void 0 && e.removeValue(r);
  return t;
}
const Nu = /* @__PURE__ */ new WeakMap(), U4 = [...Jd, ze, an], z4 = (e) => U4.find(Qd(e)), Pu = [
  "AnimationStart",
  "AnimationComplete",
  "Update",
  "BeforeLayoutMeasure",
  "LayoutMeasure",
  "LayoutAnimationStart",
  "LayoutAnimationComplete"
], G4 = fa.length;
class K4 {
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
    this.applyWillChange = !1, this.current = null, this.children = /* @__PURE__ */ new Set(), this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.values = /* @__PURE__ */ new Map(), this.KeyframeResolver = ga, this.features = {}, this.valueSubscriptions = /* @__PURE__ */ new Map(), this.prevMotionValues = {}, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
      this.isRenderScheduled = !1, this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection));
    }, this.isRenderScheduled = !1, this.scheduleRender = () => {
      this.isRenderScheduled || (this.isRenderScheduled = !0, be.render(this.render, !1, !0));
    };
    const { latestValues: c, renderState: u } = s;
    this.latestValues = c, this.baseTarget = { ...c }, this.initialValues = n.initial ? { ...c } : {}, this.renderState = u, this.parent = t, this.props = n, this.presenceContext = r, this.depth = t ? t.depth + 1 : 0, this.reducedMotionConfig = o, this.options = l, this.blockInitialAnimation = !!i, this.isControllingVariants = pi(n), this.isVariantNode = o1(n), this.isVariantNode && (this.variantChildren = /* @__PURE__ */ new Set()), this.manuallyAnimateOnMount = !!(t && t.current);
    const { willChange: d, ...f } = this.scrapeMotionValuesFromProps(n, {}, this);
    for (const h in f) {
      const g = f[h];
      c[h] !== void 0 && Ge(g) && g.set(c[h], !1);
    }
  }
  mount(t) {
    this.current = t, Nu.set(t, this), this.projection && !this.projection.instance && this.projection.mount(t), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((n, r) => this.bindToMotionValue(r, n)), p1.current || W4(), this.shouldReduceMotion = this.reducedMotionConfig === "never" ? !1 : this.reducedMotionConfig === "always" ? !0 : js.current, process.env.NODE_ENV !== "production" && ii(this.shouldReduceMotion !== !0, "You have Reduced Motion enabled on your device. Animations may not appear as expected."), this.parent && this.parent.children.add(this), this.update(this.props, this.presenceContext);
  }
  unmount() {
    Nu.delete(this.current), this.projection && this.projection.unmount(), qt(this.notifyUpdate), qt(this.render), this.valueSubscriptions.forEach((t) => t()), this.valueSubscriptions.clear(), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent && this.parent.children.delete(this);
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
    const r = ln.has(t), o = n.on("change", (l) => {
      this.latestValues[t] = l, this.props.onUpdate && be.preRender(this.notifyUpdate), r && this.projection && (this.projection.isTransformDirty = !0);
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
    for (t in Kn) {
      const n = Kn[t];
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
    return this.current ? this.measureInstanceViewportBox(this.current, this.props) : De();
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
    for (let r = 0; r < Pu.length; r++) {
      const o = Pu[r];
      this.propEventSubscriptions[o] && (this.propEventSubscriptions[o](), delete this.propEventSubscriptions[o]);
      const i = "on" + o, s = t[i];
      s && (this.propEventSubscriptions[o] = this.on(o, s));
    }
    this.prevMotionValues = H4(this, this.scrapeMotionValuesFromProps(t, this.prevProps, this), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue();
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
    for (let r = 0; r < G4; r++) {
      const o = fa[r], i = this.props[o];
      (Mr(i) || i === !1) && (n[o] = i);
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
    return r === void 0 && n !== void 0 && (r = Nr(n === null ? void 0 : n, { owner: this }), this.addValue(t, r)), r;
  }
  /**
   * If we're trying to animate to a previously unencountered value,
   * we need to check for it in our state and as a last resort read it
   * directly from the instance (which might have performance implications).
   */
  readValue(t, n) {
    var r;
    let o = this.latestValues[t] !== void 0 || !this.current ? this.latestValues[t] : (r = this.getBaseTargetFromProps(this.props, t)) !== null && r !== void 0 ? r : this.readValueFromInstance(this.current, t, this.options);
    return o != null && (typeof o == "string" && (Yd(o) || Kd(o)) ? o = parseFloat(o) : !z4(o) && an.test(n) && (o = lf(t, n)), this.setBaseTarget(t, Ge(o) ? o.get() : o)), Ge(o) ? o.get() : o;
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
      const s = ua(this.props, r, (n = this.presenceContext) === null || n === void 0 ? void 0 : n.custom);
      s && (o = s[t]);
    }
    if (r && o !== void 0)
      return o;
    const i = this.getBaseTargetFromProps(this.props, t);
    return i !== void 0 && !Ge(i) ? i : this.initialValues[t] !== void 0 && o === void 0 ? void 0 : this.baseTarget[t];
  }
  on(t, n) {
    return this.events[t] || (this.events[t] = new Ea()), this.events[t].add(n);
  }
  notify(t, ...n) {
    this.events[t] && this.events[t].notify(...n);
  }
}
class m1 extends K4 {
  constructor() {
    super(...arguments), this.KeyframeResolver = cf;
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
function Y4(e) {
  return window.getComputedStyle(e);
}
class Z4 extends m1 {
  constructor() {
    super(...arguments), this.type = "html", this.applyWillChange = !0, this.renderInstance = i1;
  }
  readValueFromInstance(t, n) {
    if (ln.has(n)) {
      const r = ba(n);
      return r && r.default || 0;
    } else {
      const r = Y4(t), o = (Xd(n) ? r.getPropertyValue(n) : r[n]) || 0;
      return typeof o == "string" ? o.trim() : o;
    }
  }
  measureInstanceViewportBox(t, { transformPagePoint: n }) {
    return Hf(t, n);
  }
  build(t, n, r) {
    Da(t, n, r.transformTemplate);
  }
  scrapeMotionValuesFromProps(t, n, r) {
    return Ra(t, n, r);
  }
  handleChildMotionValue() {
    this.childSubscription && (this.childSubscription(), delete this.childSubscription);
    const { children: t } = this.props;
    Ge(t) && (this.childSubscription = t.on("change", (n) => {
      this.current && (this.current.textContent = `${n}`);
    }));
  }
}
class X4 extends m1 {
  constructor() {
    super(...arguments), this.type = "svg", this.isSVGTag = !1, this.measureInstanceViewportBox = De;
  }
  getBaseTargetFromProps(t, n) {
    return t[n];
  }
  readValueFromInstance(t, n) {
    if (ln.has(n)) {
      const r = ba(n);
      return r && r.default || 0;
    }
    return n = s1.has(n) ? n : ui(n), t.getAttribute(n);
  }
  scrapeMotionValuesFromProps(t, n, r) {
    return c1(t, n, r);
  }
  build(t, n, r) {
    _a(t, n, this.isSVGTag, r.transformTemplate);
  }
  renderInstance(t, n, r, o) {
    a1(t, n, r, o);
  }
  mount(t) {
    this.isSVGTag = Ia(t.tagName), super.mount(t);
  }
}
const q4 = (e, t) => Ta(e) ? new X4(t) : new Z4(t, {
  allowProjection: e !== Bd
}), Q4 = /* @__PURE__ */ $4({
  ...$y,
  ...c4,
  ...Q5,
  ...u4
}, q4), xt = /* @__PURE__ */ Ov(Q4);
class J4 extends p.Component {
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
function eb({ children: e, isPresent: t }) {
  const n = ni(), r = je(null), o = je({
    width: 0,
    height: 0,
    top: 0,
    left: 0
  }), { nonce: i } = Se(ia);
  return Fd(() => {
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
  }, [t]), a(J4, { isPresent: t, childRef: r, sizeRef: o, children: p.cloneElement(e, { ref: r }) });
}
const tb = ({ children: e, initial: t, isPresent: n, onExitComplete: r, custom: o, presenceAffectsLayout: i, mode: s }) => {
  const l = sa(nb), c = ni(), u = Ct(
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
  return Ct(() => {
    l.forEach((d, f) => l.set(f, !1));
  }, [n]), p.useEffect(() => {
    !n && !l.size && r && r();
  }, [n]), s === "popLayout" && (e = a(eb, { isPresent: n, children: e })), a(fi.Provider, { value: u, children: e });
};
function nb() {
  return /* @__PURE__ */ new Map();
}
const co = (e) => e.key || "";
function Tu(e) {
  const t = [];
  return ri.forEach(e, (n) => {
    cv(n) && t.push(n);
  }), t;
}
const Oa = ({ children: e, exitBeforeEnter: t, custom: n, initial: r = !0, onExitComplete: o, presenceAffectsLayout: i = !0, mode: s = "sync" }) => {
  Qt(!t, "Replace exitBeforeEnter with mode='wait'");
  const l = Ct(() => Tu(e), [e]), c = l.map(co), u = je(!0), d = je(l), f = sa(() => /* @__PURE__ */ new Map()), [h, g] = Ae(l), [m, v] = Ae(l);
  Pa(() => {
    u.current = !1, d.current = l;
    for (let b = 0; b < m.length; b++) {
      const C = co(m[b]);
      c.includes(C) ? f.delete(C) : f.get(C) !== !0 && f.set(C, !1);
    }
  }, [m, c.length, c.join("-")]);
  const y = [];
  if (l !== h) {
    let b = [...l];
    for (let C = 0; C < m.length; C++) {
      const E = m[C], L = co(E);
      c.includes(L) || (b.splice(C, 0, E), y.push(E));
    }
    s === "wait" && y.length && (b = y), v(Tu(b)), g(l);
    return;
  }
  process.env.NODE_ENV !== "production" && s === "wait" && m.length > 1 && console.warn(`You're attempting to animate multiple children within AnimatePresence, but its mode is set to "wait". This will lead to odd visual behaviour.`);
  const { forceRender: w } = Se(Pr);
  return a(Ce, { children: m.map((b) => {
    const C = co(b), E = l === m || c.includes(C), L = () => {
      if (f.has(C))
        f.set(C, !0);
      else
        return;
      let _ = !0;
      f.forEach((F) => {
        F || (_ = !1);
      }), _ && (w == null || w(), v(d.current), o && o());
    };
    return a(tb, { isPresent: E, initial: !u.current || r ? void 0 : !1, custom: E ? void 0 : n, presenceAffectsLayout: i, mode: s, onExitComplete: E ? void 0 : L, children: b }, C);
  }) });
}, rb = tt(null);
function ob() {
  const e = je(!1);
  return Pa(() => (e.current = !0, () => {
    e.current = !1;
  }), []), e;
}
function ib() {
  const e = ob(), [t, n] = Ae(0), r = It(() => {
    e.current && n(t + 1);
  }, [t]);
  return [It(() => be.postRender(r), [r]), t];
}
const sb = (e) => !e.isLayoutDirty && e.willUpdate(!1);
function Ru() {
  const e = /* @__PURE__ */ new Set(), t = /* @__PURE__ */ new WeakMap(), n = () => e.forEach(sb);
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
const g1 = (e) => e === !0, ab = (e) => g1(e === !0) || e === "id", lb = ({ children: e, id: t, inherit: n = !0 }) => {
  const r = Se(Pr), o = Se(rb), [i, s] = ib(), l = je(null), c = r.id || o;
  l.current === null && (ab(n) && c && (t = t ? c + "-" + t : c), l.current = {
    id: t,
    group: g1(n) && r.group || Ru()
  });
  const u = Ct(() => ({ ...l.current, forceRender: i }), [s]);
  return a(Pr.Provider, { value: u, children: e });
};
var cb = p.createContext(void 0);
function er(e) {
  const t = p.useContext(cb);
  return e || t || "ltr";
}
function $s(e, [t, n]) {
  return Math.min(n, Math.max(t, e));
}
function ub(e, t) {
  return p.useReducer((n, r) => t[n][r] ?? n, e);
}
var Va = "ScrollArea", [v1, ON] = Vt(Va), [db, ht] = v1(Va), y1 = p.forwardRef(
  (e, t) => {
    const {
      __scopeScrollArea: n,
      type: r = "hover",
      dir: o,
      scrollHideDelay: i = 600,
      ...s
    } = e, [l, c] = p.useState(null), [u, d] = p.useState(null), [f, h] = p.useState(null), [g, m] = p.useState(null), [v, y] = p.useState(null), [w, b] = p.useState(0), [C, E] = p.useState(0), [L, _] = p.useState(!1), [F, R] = p.useState(!1), D = ve(t, (J) => c(J)), H = er(o);
    return /* @__PURE__ */ a(
      db,
      {
        scope: n,
        type: r,
        dir: H,
        scrollHideDelay: i,
        scrollArea: l,
        viewport: u,
        onViewportChange: d,
        content: f,
        onContentChange: h,
        scrollbarX: g,
        onScrollbarXChange: m,
        scrollbarXEnabled: L,
        onScrollbarXEnabledChange: _,
        scrollbarY: v,
        onScrollbarYChange: y,
        scrollbarYEnabled: F,
        onScrollbarYEnabledChange: R,
        onCornerWidthChange: b,
        onCornerHeightChange: E,
        children: /* @__PURE__ */ a(
          fe.div,
          {
            dir: H,
            ...s,
            ref: D,
            style: {
              position: "relative",
              // Pass corner sizes as CSS vars to reduce re-renders of context consumers
              "--radix-scroll-area-corner-width": w + "px",
              "--radix-scroll-area-corner-height": C + "px",
              ...e.style
            }
          }
        )
      }
    );
  }
);
y1.displayName = Va;
var b1 = "ScrollAreaViewport", w1 = p.forwardRef(
  (e, t) => {
    const { __scopeScrollArea: n, children: r, nonce: o, ...i } = e, s = ht(b1, n), l = p.useRef(null), c = ve(t, l, s.onViewportChange);
    return /* @__PURE__ */ x(Ce, { children: [
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
        fe.div,
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
w1.displayName = b1;
var Ft = "ScrollAreaScrollbar", Fa = p.forwardRef(
  (e, t) => {
    const { forceMount: n, ...r } = e, o = ht(Ft, e.__scopeScrollArea), { onScrollbarXEnabledChange: i, onScrollbarYEnabledChange: s } = o, l = e.orientation === "horizontal";
    return p.useEffect(() => (l ? i(!0) : s(!0), () => {
      l ? i(!1) : s(!1);
    }), [l, i, s]), o.type === "hover" ? /* @__PURE__ */ a(fb, { ...r, ref: t, forceMount: n }) : o.type === "scroll" ? /* @__PURE__ */ a(hb, { ...r, ref: t, forceMount: n }) : o.type === "auto" ? /* @__PURE__ */ a(C1, { ...r, ref: t, forceMount: n }) : o.type === "always" ? /* @__PURE__ */ a(Ba, { ...r, ref: t }) : null;
  }
);
Fa.displayName = Ft;
var fb = p.forwardRef((e, t) => {
  const { forceMount: n, ...r } = e, o = ht(Ft, e.__scopeScrollArea), [i, s] = p.useState(!1);
  return p.useEffect(() => {
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
  }, [o.scrollArea, o.scrollHideDelay]), /* @__PURE__ */ a(Xe, { present: n || i, children: /* @__PURE__ */ a(
    C1,
    {
      "data-state": i ? "visible" : "hidden",
      ...r,
      ref: t
    }
  ) });
}), hb = p.forwardRef((e, t) => {
  const { forceMount: n, ...r } = e, o = ht(Ft, e.__scopeScrollArea), i = e.orientation === "horizontal", s = gi(() => c("SCROLL_END"), 100), [l, c] = ub("hidden", {
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
  return p.useEffect(() => {
    if (l === "idle") {
      const u = window.setTimeout(() => c("HIDE"), o.scrollHideDelay);
      return () => window.clearTimeout(u);
    }
  }, [l, o.scrollHideDelay, c]), p.useEffect(() => {
    const u = o.viewport, d = i ? "scrollLeft" : "scrollTop";
    if (u) {
      let f = u[d];
      const h = () => {
        const g = u[d];
        f !== g && (c("SCROLL"), s()), f = g;
      };
      return u.addEventListener("scroll", h), () => u.removeEventListener("scroll", h);
    }
  }, [o.viewport, i, c, s]), /* @__PURE__ */ a(Xe, { present: n || l !== "hidden", children: /* @__PURE__ */ a(
    Ba,
    {
      "data-state": l === "hidden" ? "hidden" : "visible",
      ...r,
      ref: t,
      onPointerEnter: ee(e.onPointerEnter, () => c("POINTER_ENTER")),
      onPointerLeave: ee(e.onPointerLeave, () => c("POINTER_LEAVE"))
    }
  ) });
}), C1 = p.forwardRef((e, t) => {
  const n = ht(Ft, e.__scopeScrollArea), { forceMount: r, ...o } = e, [i, s] = p.useState(!1), l = e.orientation === "horizontal", c = gi(() => {
    if (n.viewport) {
      const u = n.viewport.offsetWidth < n.viewport.scrollWidth, d = n.viewport.offsetHeight < n.viewport.scrollHeight;
      s(l ? u : d);
    }
  }, 10);
  return Yn(n.viewport, c), Yn(n.content, c), /* @__PURE__ */ a(Xe, { present: r || i, children: /* @__PURE__ */ a(
    Ba,
    {
      "data-state": i ? "visible" : "hidden",
      ...o,
      ref: t
    }
  ) });
}), Ba = p.forwardRef((e, t) => {
  const { orientation: n = "vertical", ...r } = e, o = ht(Ft, e.__scopeScrollArea), i = p.useRef(null), s = p.useRef(0), [l, c] = p.useState({
    content: 0,
    viewport: 0,
    scrollbar: { size: 0, paddingStart: 0, paddingEnd: 0 }
  }), u = E1(l.viewport, l.content), d = {
    ...r,
    sizes: l,
    onSizesChange: c,
    hasThumb: u > 0 && u < 1,
    onThumbChange: (h) => i.current = h,
    onThumbPointerUp: () => s.current = 0,
    onThumbPointerDown: (h) => s.current = h
  };
  function f(h, g) {
    return bb(h, s.current, l, g);
  }
  return n === "horizontal" ? /* @__PURE__ */ a(
    pb,
    {
      ...d,
      ref: t,
      onThumbPositionChange: () => {
        if (o.viewport && i.current) {
          const h = o.viewport.scrollLeft, g = Au(h, l, o.dir);
          i.current.style.transform = `translate3d(${g}px, 0, 0)`;
        }
      },
      onWheelScroll: (h) => {
        o.viewport && (o.viewport.scrollLeft = h);
      },
      onDragScroll: (h) => {
        o.viewport && (o.viewport.scrollLeft = f(h, o.dir));
      }
    }
  ) : n === "vertical" ? /* @__PURE__ */ a(
    mb,
    {
      ...d,
      ref: t,
      onThumbPositionChange: () => {
        if (o.viewport && i.current) {
          const h = o.viewport.scrollTop, g = Au(h, l);
          i.current.style.transform = `translate3d(0, ${g}px, 0)`;
        }
      },
      onWheelScroll: (h) => {
        o.viewport && (o.viewport.scrollTop = h);
      },
      onDragScroll: (h) => {
        o.viewport && (o.viewport.scrollTop = f(h));
      }
    }
  ) : null;
}), pb = p.forwardRef((e, t) => {
  const { sizes: n, onSizesChange: r, ...o } = e, i = ht(Ft, e.__scopeScrollArea), [s, l] = p.useState(), c = p.useRef(null), u = ve(t, c, i.onScrollbarXChange);
  return p.useEffect(() => {
    c.current && l(getComputedStyle(c.current));
  }, [c]), /* @__PURE__ */ a(
    k1,
    {
      "data-orientation": "horizontal",
      ...o,
      ref: u,
      sizes: n,
      style: {
        bottom: 0,
        left: i.dir === "rtl" ? "var(--radix-scroll-area-corner-width)" : 0,
        right: i.dir === "ltr" ? "var(--radix-scroll-area-corner-width)" : 0,
        "--radix-scroll-area-thumb-width": mi(n) + "px",
        ...e.style
      },
      onThumbPointerDown: (d) => e.onThumbPointerDown(d.x),
      onDragScroll: (d) => e.onDragScroll(d.x),
      onWheelScroll: (d, f) => {
        if (i.viewport) {
          const h = i.viewport.scrollLeft + d.deltaX;
          e.onWheelScroll(h), N1(h, f) && d.preventDefault();
        }
      },
      onResize: () => {
        c.current && i.viewport && s && r({
          content: i.viewport.scrollWidth,
          viewport: i.viewport.offsetWidth,
          scrollbar: {
            size: c.current.clientWidth,
            paddingStart: Fo(s.paddingLeft),
            paddingEnd: Fo(s.paddingRight)
          }
        });
      }
    }
  );
}), mb = p.forwardRef((e, t) => {
  const { sizes: n, onSizesChange: r, ...o } = e, i = ht(Ft, e.__scopeScrollArea), [s, l] = p.useState(), c = p.useRef(null), u = ve(t, c, i.onScrollbarYChange);
  return p.useEffect(() => {
    c.current && l(getComputedStyle(c.current));
  }, [c]), /* @__PURE__ */ a(
    k1,
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
        "--radix-scroll-area-thumb-height": mi(n) + "px",
        ...e.style
      },
      onThumbPointerDown: (d) => e.onThumbPointerDown(d.y),
      onDragScroll: (d) => e.onDragScroll(d.y),
      onWheelScroll: (d, f) => {
        if (i.viewport) {
          const h = i.viewport.scrollTop + d.deltaY;
          e.onWheelScroll(h), N1(h, f) && d.preventDefault();
        }
      },
      onResize: () => {
        c.current && i.viewport && s && r({
          content: i.viewport.scrollHeight,
          viewport: i.viewport.offsetHeight,
          scrollbar: {
            size: c.current.clientHeight,
            paddingStart: Fo(s.paddingTop),
            paddingEnd: Fo(s.paddingBottom)
          }
        });
      }
    }
  );
}), [gb, x1] = v1(Ft), k1 = p.forwardRef((e, t) => {
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
    ...h
  } = e, g = ht(Ft, n), [m, v] = p.useState(null), y = ve(t, (D) => v(D)), w = p.useRef(null), b = p.useRef(""), C = g.viewport, E = r.content - r.viewport, L = Ie(d), _ = Ie(c), F = gi(f, 10);
  function R(D) {
    if (w.current) {
      const H = D.clientX - w.current.left, J = D.clientY - w.current.top;
      u({ x: H, y: J });
    }
  }
  return p.useEffect(() => {
    const D = (H) => {
      const J = H.target;
      (m == null ? void 0 : m.contains(J)) && L(H, E);
    };
    return document.addEventListener("wheel", D, { passive: !1 }), () => document.removeEventListener("wheel", D, { passive: !1 });
  }, [C, m, E, L]), p.useEffect(_, [r, _]), Yn(m, F), Yn(g.content, F), /* @__PURE__ */ a(
    gb,
    {
      scope: n,
      scrollbar: m,
      hasThumb: o,
      onThumbChange: Ie(i),
      onThumbPointerUp: Ie(s),
      onThumbPositionChange: _,
      onThumbPointerDown: Ie(l),
      children: /* @__PURE__ */ a(
        fe.div,
        {
          ...h,
          ref: y,
          style: { position: "absolute", ...h.style },
          onPointerDown: ee(e.onPointerDown, (D) => {
            D.button === 0 && (D.target.setPointerCapture(D.pointerId), w.current = m.getBoundingClientRect(), b.current = document.body.style.webkitUserSelect, document.body.style.webkitUserSelect = "none", g.viewport && (g.viewport.style.scrollBehavior = "auto"), R(D));
          }),
          onPointerMove: ee(e.onPointerMove, R),
          onPointerUp: ee(e.onPointerUp, (D) => {
            const H = D.target;
            H.hasPointerCapture(D.pointerId) && H.releasePointerCapture(D.pointerId), document.body.style.webkitUserSelect = b.current, g.viewport && (g.viewport.style.scrollBehavior = ""), w.current = null;
          })
        }
      )
    }
  );
}), Vo = "ScrollAreaThumb", S1 = p.forwardRef(
  (e, t) => {
    const { forceMount: n, ...r } = e, o = x1(Vo, e.__scopeScrollArea);
    return /* @__PURE__ */ a(Xe, { present: n || o.hasThumb, children: /* @__PURE__ */ a(vb, { ref: t, ...r }) });
  }
), vb = p.forwardRef(
  (e, t) => {
    const { __scopeScrollArea: n, style: r, ...o } = e, i = ht(Vo, n), s = x1(Vo, n), { onThumbPositionChange: l } = s, c = ve(
      t,
      (f) => s.onThumbChange(f)
    ), u = p.useRef(), d = gi(() => {
      u.current && (u.current(), u.current = void 0);
    }, 100);
    return p.useEffect(() => {
      const f = i.viewport;
      if (f) {
        const h = () => {
          if (d(), !u.current) {
            const g = wb(f, l);
            u.current = g, l();
          }
        };
        return l(), f.addEventListener("scroll", h), () => f.removeEventListener("scroll", h);
      }
    }, [i.viewport, d, l]), /* @__PURE__ */ a(
      fe.div,
      {
        "data-state": s.hasThumb ? "visible" : "hidden",
        ...o,
        ref: c,
        style: {
          width: "var(--radix-scroll-area-thumb-width)",
          height: "var(--radix-scroll-area-thumb-height)",
          ...r
        },
        onPointerDownCapture: ee(e.onPointerDownCapture, (f) => {
          const g = f.target.getBoundingClientRect(), m = f.clientX - g.left, v = f.clientY - g.top;
          s.onThumbPointerDown({ x: m, y: v });
        }),
        onPointerUp: ee(e.onPointerUp, s.onThumbPointerUp)
      }
    );
  }
);
S1.displayName = Vo;
var ja = "ScrollAreaCorner", M1 = p.forwardRef(
  (e, t) => {
    const n = ht(ja, e.__scopeScrollArea), r = !!(n.scrollbarX && n.scrollbarY);
    return n.type !== "scroll" && r ? /* @__PURE__ */ a(yb, { ...e, ref: t }) : null;
  }
);
M1.displayName = ja;
var yb = p.forwardRef((e, t) => {
  const { __scopeScrollArea: n, ...r } = e, o = ht(ja, n), [i, s] = p.useState(0), [l, c] = p.useState(0), u = !!(i && l);
  return Yn(o.scrollbarX, () => {
    var f;
    const d = ((f = o.scrollbarX) == null ? void 0 : f.offsetHeight) || 0;
    o.onCornerHeightChange(d), c(d);
  }), Yn(o.scrollbarY, () => {
    var f;
    const d = ((f = o.scrollbarY) == null ? void 0 : f.offsetWidth) || 0;
    o.onCornerWidthChange(d), s(d);
  }), u ? /* @__PURE__ */ a(
    fe.div,
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
function Fo(e) {
  return e ? parseInt(e, 10) : 0;
}
function E1(e, t) {
  const n = e / t;
  return isNaN(n) ? 0 : n;
}
function mi(e) {
  const t = E1(e.viewport, e.content), n = e.scrollbar.paddingStart + e.scrollbar.paddingEnd, r = (e.scrollbar.size - n) * t;
  return Math.max(r, 18);
}
function bb(e, t, n, r = "ltr") {
  const o = mi(n), i = o / 2, s = t || i, l = o - s, c = n.scrollbar.paddingStart + s, u = n.scrollbar.size - n.scrollbar.paddingEnd - l, d = n.content - n.viewport, f = r === "ltr" ? [0, d] : [d * -1, 0];
  return L1([c, u], f)(e);
}
function Au(e, t, n = "ltr") {
  const r = mi(t), o = t.scrollbar.paddingStart + t.scrollbar.paddingEnd, i = t.scrollbar.size - o, s = t.content - t.viewport, l = i - r, c = n === "ltr" ? [0, s] : [s * -1, 0], u = $s(e, c);
  return L1([0, s], [0, l])(u);
}
function L1(e, t) {
  return (n) => {
    if (e[0] === e[1] || t[0] === t[1]) return t[0];
    const r = (t[1] - t[0]) / (e[1] - e[0]);
    return t[0] + r * (n - e[0]);
  };
}
function N1(e, t) {
  return e > 0 && e < t;
}
var wb = (e, t = () => {
}) => {
  let n = { left: e.scrollLeft, top: e.scrollTop }, r = 0;
  return function o() {
    const i = { left: e.scrollLeft, top: e.scrollTop }, s = n.left !== i.left, l = n.top !== i.top;
    (s || l) && t(), n = i, r = window.requestAnimationFrame(o);
  }(), () => window.cancelAnimationFrame(r);
};
function gi(e, t) {
  const n = Ie(e), r = p.useRef(0);
  return p.useEffect(() => () => window.clearTimeout(r.current), []), p.useCallback(() => {
    window.clearTimeout(r.current), r.current = window.setTimeout(n, t);
  }, [n, t]);
}
function Yn(e, t) {
  const n = Ie(t);
  We(() => {
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
var P1 = y1, Cb = w1, xb = M1;
const $a = p.forwardRef(({ className: e, children: t, showBar: n = !0, ...r }, o) => /* @__PURE__ */ x(
  P1,
  {
    ref: o,
    className: A("relative overflow-hidden", e),
    scrollHideDelay: 200,
    ...r,
    children: [
      /* @__PURE__ */ a(
        Cb,
        {
          className: "h-full w-full rounded-[inherit]",
          "data-scroll-container": !0,
          children: t
        }
      ),
      /* @__PURE__ */ a(Ws, { orientation: "vertical", showBar: n }),
      /* @__PURE__ */ a(Ws, { orientation: "horizontal", showBar: n }),
      /* @__PURE__ */ a(xb, {})
    ]
  }
));
$a.displayName = P1.displayName;
const Ws = p.forwardRef(({ className: e, orientation: t = "vertical", showBar: n = !0, ...r }, o) => /* @__PURE__ */ a(
  Fa,
  {
    ref: o,
    orientation: t,
    forceMount: !0,
    className: A(
      "z-50 flex touch-none select-none p-[1px]",
      "transition-opacity data-[state=hidden]:pointer-events-none data-[state=visible]:pointer-events-auto data-[state=hidden]:opacity-0 data-[state=visible]:opacity-100",
      t === "vertical" && "mr-[2px] h-full w-2.5",
      t === "horizontal" && "mt-[2px] h-2.5 flex-col",
      e
    ),
    ...r,
    children: n && /* @__PURE__ */ a(S1, { className: "relative flex-1 rounded-full bg-f1-background-secondary opacity-50" })
  }
));
Ws.displayName = Fa.displayName;
const kb = ({ data: e, dataConfig: t, scaleMin: n, scaleMax: r, aspect: o }, i) => {
  const s = Object.keys(t), l = e.map((c) => ({
    subject: c.label,
    ...c.values
  }));
  return /* @__PURE__ */ a(
    O0,
    {
      config: t,
      ref: i,
      aspect: o,
      "data-chromatic": "ignore",
      children: /* @__PURE__ */ x(_v, { accessibilityLayer: !0, data: l, children: [
        /* @__PURE__ */ a(
          V0,
          {
            cursor: !0,
            content: /* @__PURE__ */ a(F0, { indicator: "dot" })
          }
        ),
        /* @__PURE__ */ a(Wd, { gridType: "circle" }),
        /* @__PURE__ */ a(Td, { dataKey: "subject" }),
        /* @__PURE__ */ a(
          Rd,
          {
            angle: 90,
            type: "number",
            domain: [n ?? "dataMin", r ?? "dataMax"]
          }
        ),
        s.map((c, u) => /* @__PURE__ */ a(
          Vr,
          {
            dataKey: c,
            fill: t[c].color || cc(u),
            stroke: t[c].color || cc(u),
            strokeWidth: 1.5,
            fillOpacity: 0.3,
            label: t[c].label,
            isAnimationActive: !1
          },
          c
        )),
        Object.keys(t).length > 1 && /* @__PURE__ */ a(B0, { iconType: "star", content: /* @__PURE__ */ a(j0, {}) })
      ] })
    }
  );
}, VN = $0(kb), Wa = p.forwardRef(
  ({ className: e, type: t, ...n }, r) => /* @__PURE__ */ a(
    "input",
    {
      type: t,
      className: A(
        "flex h-10 w-full rounded-sm border-2 border-solid border-f1-border bg-f1-background px-3 py-2 text-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-f1-foreground-secondary/60 hover:border-f1-border-hover disabled:cursor-not-allowed disabled:bg-f1-background-secondary disabled:opacity-50",
        ft("focus-visible:border-f1-border-hover"),
        e
      ),
      ref: r,
      ...n
    }
  )
);
Wa.displayName = "Input";
const Sb = Wa, Mb = (e, t) => /* @__PURE__ */ x("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: [
  /* @__PURE__ */ a("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M12 5V12V19", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ a("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M12 12H5H19", vectorEffect: "non-scaling-stroke" })
] }), Eb = P(Mb), Lb = (e, t) => /* @__PURE__ */ x("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: [
  /* @__PURE__ */ a("path", { stroke: "currentColor", strokeLinejoin: "round", d: "M4 13C7.31371 13 10 9.86599 10 6C10 9.86599 12.6863 13 16 13C12.6863 13 10 16.134 10 20C10 16.134 7.31371 13 4 13Z", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ a("path", { fill: "currentColor", d: "M17.5001 3.35001C17.8591 3.35001 18.1501 3.64102 18.1501 4.00001C18.1501 5.02173 18.9784 5.85001 20.0001 5.85001C20.3591 5.85001 20.6501 6.14102 20.6501 6.50001C20.6501 6.85899 20.3591 7.15001 20.0001 7.15001C18.9784 7.15001 18.1501 7.97828 18.1501 9.00001C18.1501 9.35899 17.8591 9.65001 17.5001 9.65001C17.1411 9.65001 16.8501 9.35899 16.8501 9.00001C16.8501 7.97828 16.0218 7.15001 15.0001 7.15001C14.6411 7.15001 14.3501 6.85899 14.3501 6.50001C14.3501 6.14102 14.6411 5.85001 15.0001 5.85001C16.0218 5.85001 16.8501 5.02173 16.8501 4.00001C16.8501 3.64102 17.1411 3.35001 17.5001 3.35001Z", vectorEffect: "non-scaling-stroke" })
] }), Nb = P(Lb), Pb = (e, t) => /* @__PURE__ */ x("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: [
  /* @__PURE__ */ a("circle", { cx: 12, cy: 12, r: 8, stroke: "currentColor", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ a("path", { stroke: "currentColor", strokeLinecap: "round", d: "M12 12V9", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ a("path", { stroke: "currentColor", strokeLinecap: "round", d: "M12 15.1V15", vectorEffect: "non-scaling-stroke" })
] }), Tb = P(Pb), Rb = (e, t) => /* @__PURE__ */ a("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: /* @__PURE__ */ a("path", { fill: "currentColor", fillRule: "evenodd", d: "M4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12ZM12.65 14.9C12.65 14.541 12.359 14.25 12 14.25C11.641 14.25 11.35 14.541 11.35 14.9L11.35 15C11.35 15.359 11.641 15.65 12 15.65C12.359 15.65 12.65 15.359 12.65 15L12.65 14.9ZM12.65 8.89999C12.65 8.54101 12.359 8.24999 12 8.24999C11.641 8.24999 11.35 8.54101 11.35 8.89999L11.35 11.9C11.35 12.259 11.641 12.55 12 12.55C12.359 12.55 12.65 12.259 12.65 11.9L12.65 8.89999Z", clipRule: "evenodd", vectorEffect: "non-scaling-stroke" }) }), Ha = P(Rb), Ab = (e, t) => /* @__PURE__ */ x("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: [
  /* @__PURE__ */ a("path", { stroke: "currentColor", strokeLinecap: "round", d: "M12 14V6.99997", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ a("path", { stroke: "currentColor", strokeLinecap: "round", d: "M12 17.1V17", vectorEffect: "non-scaling-stroke" })
] }), Db = P(Ab), _b = (e, t) => /* @__PURE__ */ x("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: [
  /* @__PURE__ */ a("mask", { id: "a", fill: "currentColor", children: /* @__PURE__ */ a("path", { fillRule: "evenodd", d: "M12 18.7V5.3C8.29969 5.3 5.3 8.29969 5.3 12C5.3 15.7003 8.29969 18.7 12 18.7ZM13.6123 4.16253C13.4102 4.12118 13.2053 4.08745 12.998 4.06165C12.9977 4.0616 12.9973 4.06156 12.997 4.06152C12.6704 4.02091 12.3376 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C12.338 20 12.6711 19.979 12.998 19.9384C16.9453 19.4471 20 16.0803 20 12C20 8.13401 17.2577 4.9085 13.6123 4.16253Z", clipRule: "evenodd", vectorEffect: "non-scaling-stroke" }) }),
  /* @__PURE__ */ a("path", { fill: "currentColor", fillRule: "evenodd", d: "M12 18.7V5.3C8.29969 5.3 5.3 8.29969 5.3 12C5.3 15.7003 8.29969 18.7 12 18.7ZM13.6123 4.16253C13.4102 4.12118 13.2053 4.08745 12.998 4.06165C12.9977 4.0616 12.9973 4.06156 12.997 4.06152C12.6704 4.02091 12.3376 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C12.338 20 12.6711 19.979 12.998 19.9384C16.9453 19.4471 20 16.0803 20 12C20 8.13401 17.2577 4.9085 13.6123 4.16253Z", clipRule: "evenodd", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ a("path", { fill: "currentColor", d: "M12 5.3H13.3V4H12V5.3ZM12 18.7V20H13.3V18.7H12ZM13.6123 4.16253L13.3517 5.43614L13.3517 5.43614L13.6123 4.16253ZM12.998 4.06165L12.8373 5.35168L12.8375 5.3517L12.998 4.06165ZM12.997 4.06152L12.8366 5.35159L12.8378 5.35174L12.997 4.06152ZM12.998 19.9384L12.8375 18.6483L12.8375 18.6483L12.998 19.9384ZM10.7 5.3V18.7H13.3V5.3H10.7ZM12 4C7.58172 4 4 7.58172 4 12H6.6C6.6 9.01766 9.01766 6.6 12 6.6V4ZM4 12C4 16.4183 7.58172 20 12 20V17.4C9.01766 17.4 6.6 14.9823 6.6 12H4ZM13.8729 2.88892C13.6378 2.84081 13.3995 2.80159 13.1586 2.7716L12.8375 5.3517C13.0111 5.37331 13.1826 5.40155 13.3517 5.43614L13.8729 2.88892ZM13.1587 2.77162C13.1591 2.77166 13.1575 2.77146 13.1561 2.7713L12.8378 5.35174L12.8373 5.35168L13.1587 2.77162ZM13.1573 2.77145C12.7777 2.72425 12.3914 2.7 12 2.7V5.3C12.2839 5.3 12.5631 5.31758 12.8366 5.35159L13.1573 2.77145ZM12 2.7C6.86375 2.7 2.7 6.86375 2.7 12H5.3C5.3 8.29969 8.29969 5.3 12 5.3V2.7ZM2.7 12C2.7 17.1362 6.86375 21.3 12 21.3V18.7C8.29969 18.7 5.3 15.7003 5.3 12H2.7ZM12 21.3C12.3918 21.3 12.7785 21.2757 13.1586 21.2284L12.8375 18.6483C12.5636 18.6824 12.2842 18.7 12 18.7V21.3ZM13.1586 21.2284C17.7486 20.6572 21.3 16.7443 21.3 12H18.7C18.7 15.4163 16.142 18.2371 12.8375 18.6483L13.1586 21.2284ZM21.3 12C21.3 7.50426 18.1113 3.75622 13.8729 2.88892L13.3517 5.43614C16.4042 6.06078 18.7 8.76375 18.7 12H21.3Z", mask: "url(#a)", vectorEffect: "non-scaling-stroke" })
] }), Ib = P(_b), Ob = (e, t) => /* @__PURE__ */ x("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: [
  /* @__PURE__ */ a("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M3.87597 10.0077L3.62403 7.99228C3.55553 7.44426 3.94426 6.94447 4.49228 6.87597L18.5077 5.12403C19.0557 5.05553 19.5555 5.44426 19.624 5.99228L19.876 8.00772C19.9445 8.55574 19.5557 9.05553 19.0077 9.12403L4.99228 10.876C4.44426 10.9445 3.94447 10.5557 3.87597 10.0077Z", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ a("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M19 12V15C19 16.6569 17.6569 18 16 18H8C6.34315 18 5 16.6569 5 15V11", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ a("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M14 14H10", vectorEffect: "non-scaling-stroke" })
] }), Vb = P(Ob), Fb = (e, t) => /* @__PURE__ */ x("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: [
  /* @__PURE__ */ a("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M4 9V7C4 6.44772 4.44772 6 5 6H19C19.5523 6 20 6.44772 20 7V9C20 9.55228 19.5523 10 19 10H5C4.44772 10 4 9.55228 4 9Z", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ a("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M5 15V10H19V15C19 16.6569 17.6569 18 16 18H8C6.34315 18 5 16.6569 5 15Z", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ a("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M14 14H10", vectorEffect: "non-scaling-stroke" })
] }), Bb = P(Fb), jb = (e, t) => /* @__PURE__ */ x("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: [
  /* @__PURE__ */ a("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M18 13L12 19L6.00002 13", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ a("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M12 5L12 18.5", vectorEffect: "non-scaling-stroke" })
] }), T1 = P(jb), $b = (e, t) => /* @__PURE__ */ x("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: [
  /* @__PURE__ */ a("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M11 18L5.00002 12L11 6.00002", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ a("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M19 12L5.50002 12", vectorEffect: "non-scaling-stroke" })
] }), R1 = P($b), Wb = (e, t) => /* @__PURE__ */ x("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: [
  /* @__PURE__ */ a("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M13 6L19 12L13 18", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ a("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M5 12H18.5", vectorEffect: "non-scaling-stroke" })
] }), A1 = P(Wb), Hb = (e, t) => /* @__PURE__ */ x("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: [
  /* @__PURE__ */ a("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M6 11L12 5.00002L18 11", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ a("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M12 19L12 5.50002", vectorEffect: "non-scaling-stroke" })
] }), D1 = P(Hb), Ub = (e, t) => /* @__PURE__ */ x("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: [
  /* @__PURE__ */ a("rect", { width: 16, height: 12, x: 4, y: 6, stroke: "currentColor", rx: 3, vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ a("path", { stroke: "currentColor", strokeLinecap: "round", d: "M8 13L8 15", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ a("path", { stroke: "currentColor", strokeLinecap: "round", d: "M12 9L12 15", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ a("path", { stroke: "currentColor", strokeLinecap: "round", d: "M16 11L16 15", vectorEffect: "non-scaling-stroke" })
] }), zb = P(Ub), Gb = (e, t) => /* @__PURE__ */ x("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: [
  /* @__PURE__ */ a("path", { stroke: "currentColor", strokeLinecap: "round", d: "M9.76367 18C10.313 18.6137 11.1113 19 11.9998 19C12.8883 19 13.6866 18.6137 14.2359 18", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ a("path", { stroke: "currentColor", d: "M12 4C9.23858 4 7 6.23858 7 9V9.72607C7 9.90146 6.93033 10.0697 6.8063 10.1937L6.03225 10.9678C5.39962 11.6004 5.17871 12.5361 5.46164 13.3849C5.78314 14.3494 6.68577 15 7.70246 15H16.2975C17.3142 15 18.2169 14.3494 18.5384 13.3849C18.8213 12.5361 18.6004 11.6004 17.9678 10.9678L17.1937 10.1937C17.0697 10.0697 17 9.90146 17 9.72607V9C17 6.23858 14.7614 4 12 4Z", vectorEffect: "non-scaling-stroke" })
] }), _1 = P(Gb), Kb = (e, t) => /* @__PURE__ */ a("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: /* @__PURE__ */ a("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M12 7.50006C15 5.49507 17.5 5.50004 20 7.50006V16.9194C20 17.7579 19.0021 18.2442 18.2289 17.9199C16.2959 17.109 14.2941 17.4668 12 19M12 7.50006C9 5.49507 6.5 5.50004 4 7.50006L4 16.9194C4 17.7579 4.99792 18.2442 5.77115 17.9199C7.7041 17.109 9.70585 17.4668 12 19M12 7.50006V19", vectorEffect: "non-scaling-stroke" }) }), Yb = P(Kb), Zb = (e, t) => /* @__PURE__ */ x("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: [
  /* @__PURE__ */ a("rect", { width: 16, height: 12, x: 4, y: 7, stroke: "currentColor", rx: 3, vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ a("path", { stroke: "currentColor", d: "M8.9999 6.99998V5.99998C8.9999 4.89542 9.89533 3.99998 10.9999 3.99998H12.9999C14.1045 3.99998 14.9999 4.89542 14.9999 5.99998V6.99998", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ a("path", { stroke: "currentColor", strokeLinejoin: "round", d: "M7.9999 6.99998V19", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ a("path", { stroke: "currentColor", strokeLinejoin: "round", d: "M15.9999 6.99998V19", vectorEffect: "non-scaling-stroke" })
] }), Xb = P(Zb), qb = (e, t) => /* @__PURE__ */ x("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: [
  /* @__PURE__ */ a("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M5.52922 6.63982L10.5292 3.82732C11.4425 3.31362 12.5575 3.31362 13.4708 3.82732L18.4708 6.63982C19.4154 7.17117 20 8.17072 20 9.25454V14.7455C20 15.8293 19.4154 16.8288 18.4708 17.3602L13.4708 20.1727C12.5575 20.6864 11.4425 20.6864 10.5292 20.1727L5.52922 17.3602C4.58459 16.8288 4 15.8293 4 14.7455V9.25454C4 8.17072 4.58459 7.17117 5.52922 6.63982Z", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ a("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M5 8L12 12M12 20V12M19 8L12 12", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ a("path", { fill: "currentColor", d: "M15 15.0662V18.2338C15 19.0111 15.848 19.4912 16.5145 19.0913L17.0145 18.7913C17.3157 18.6106 17.5 18.2851 17.5 17.9338V13.8831C17.5 13.4944 17.076 13.2544 16.7428 13.4543L15.4855 14.2087C15.1843 14.3894 15 14.7149 15 15.0662Z", vectorEffect: "non-scaling-stroke" })
] }), Qb = P(qb), Jb = (e, t) => /* @__PURE__ */ x("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: [
  /* @__PURE__ */ a("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M15 3V5M15 7V5M15 5H9M15 5H16C17.6569 5 19 6.34315 19 8V10V16C19 17.6569 17.6569 19 16 19H8C6.34315 19 5 17.6569 5 16V10V8C5 6.34315 6.34315 5 8 5H9M9 5V3M9 5V7", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ a("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M5 10H19", vectorEffect: "non-scaling-stroke" })
] }), I1 = P(Jb), ew = (e, t) => /* @__PURE__ */ x("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: [
  /* @__PURE__ */ a("path", { stroke: "currentColor", strokeLinecap: "round", d: "M4 6V15C4 16.6569 5.34315 18 7 18H20", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ a("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M4 13L8.5 9L12 10L16.5 6L20 9", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ a("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M5.5 17L9 13.5L12.5 15.5L16.5 12L20 14.5", vectorEffect: "non-scaling-stroke" })
] }), tw = P(ew), nw = (e, t) => /* @__PURE__ */ x("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: [
  /* @__PURE__ */ a("circle", { cx: 12, cy: 12, r: 8, stroke: "currentColor", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ a("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M9.00002 12L11.4 14.4L15 9.6", vectorEffect: "non-scaling-stroke" })
] }), rw = P(nw), ow = (e, t) => /* @__PURE__ */ a("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: /* @__PURE__ */ a("path", { fill: "currentColor", fillRule: "evenodd", d: "M20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12ZM16.52 9.39C16.7354 9.10281 16.6772 8.69539 16.39 8.48C16.1028 8.26461 15.6954 8.32281 15.48 8.61L11.4297 14.0104L8.95963 11.5404C8.70578 11.2865 8.29423 11.2865 8.04039 11.5404C7.78655 11.7942 7.78655 12.2058 8.04039 12.4596L11.0404 15.4596C11.1736 15.5929 11.3581 15.6617 11.5461 15.6484C11.734 15.635 11.9069 15.5407 12.02 15.39L16.52 9.39Z", clipRule: "evenodd", vectorEffect: "non-scaling-stroke" }) }), Ua = P(ow), iw = (e, t) => /* @__PURE__ */ x("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: [
  /* @__PURE__ */ a("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M10.5 18L17.5 8.5", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ a("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M6 13L10.5 18", vectorEffect: "non-scaling-stroke" })
] }), sw = P(iw), aw = (e, t) => /* @__PURE__ */ x("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: [
  /* @__PURE__ */ a("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M18 10L12 16", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ a("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M6 10L12 16", vectorEffect: "non-scaling-stroke" })
] }), Wr = P(aw), lw = (e, t) => /* @__PURE__ */ x("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: [
  /* @__PURE__ */ a("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M15 6L9 12", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ a("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M15 18L9 12", vectorEffect: "non-scaling-stroke" })
] }), cw = P(lw), uw = (e, t) => /* @__PURE__ */ x("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: [
  /* @__PURE__ */ a("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M9 6L15 12", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ a("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M9 18L15 12", vectorEffect: "non-scaling-stroke" })
] }), Hr = P(uw), dw = (e, t) => /* @__PURE__ */ x("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: [
  /* @__PURE__ */ a("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M18 14L12 8", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ a("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M6 14L12 8", vectorEffect: "non-scaling-stroke" })
] }), O1 = P(dw), fw = (e, t) => /* @__PURE__ */ a("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: /* @__PURE__ */ a("rect", { width: 16, height: 16, x: 4, y: 4, fill: "currentColor", rx: 8, vectorEffect: "non-scaling-stroke" }) }), hw = P(fw), pw = (e, t) => /* @__PURE__ */ x("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: [
  /* @__PURE__ */ a("circle", { cx: 12, cy: 12, r: 8, stroke: "currentColor", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ a("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M12 9V12L15.5 14", vectorEffect: "non-scaling-stroke" })
] }), mw = P(pw), gw = (e, t) => /* @__PURE__ */ x("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: [
  /* @__PURE__ */ a("path", { stroke: "currentColor", d: "M18.6499 6.83752C18.6499 8.04565 17.6705 9.02502 16.4624 9.02502L14.2749 9.0246V6.83752C14.2749 5.6294 15.2543 4.65002 16.4624 4.65002C17.6705 4.65002 18.6499 5.6294 18.6499 6.83752Z", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ a("path", { stroke: "currentColor", d: "M9.0249 16.463C9.0249 17.6711 8.04553 18.6505 6.8374 18.6505C5.62928 18.6505 4.6499 17.6711 4.6499 16.463C4.6499 15.2548 5.62928 14.2755 6.8374 14.2755L9.0249 14.275V16.463Z", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ a("path", { stroke: "currentColor", d: "M18.6499 16.4625C18.6499 17.6706 17.6705 18.65 16.4624 18.65C15.2543 18.65 14.2749 17.6706 14.2749 16.4625V14.275H16.4624C17.6705 14.275 18.6499 15.2544 18.6499 16.4625Z", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ a("path", { stroke: "currentColor", d: "M9.0249 6.83771V9.02521H6.8374C5.62928 9.02521 4.6499 8.04583 4.6499 6.83771C4.6499 5.62958 5.62928 4.65021 6.8374 4.65021C8.04553 4.65021 9.0249 5.62958 9.0249 6.83771Z", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ a("path", { stroke: "currentColor", d: "M14.2749 9.02502H9.0249V14.275H14.2749V9.02502Z", vectorEffect: "non-scaling-stroke" })
] }), V1 = P(gw), vw = (e, t) => /* @__PURE__ */ x("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: [
  /* @__PURE__ */ a("path", { stroke: "currentColor", d: "M6 17V8.5C6 7.94772 6.44772 7.5 7 7.5H15C15.5523 7.5 16 7.94772 16 8.5V17C16 18.6569 14.6569 20 13 20H9C7.34315 20 6 18.6569 6 17Z", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ a("path", { stroke: "currentColor", strokeLinecap: "round", d: "M8 2V2C7.44772 2.55228 7.44772 3.44772 8 4V4", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ a("path", { stroke: "currentColor", strokeLinecap: "round", d: "M12 2V2C11.4477 2.55228 11.4477 3.44772 12 4V4", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ a("path", { stroke: "currentColor", strokeLinecap: "round", d: "M16 11H17.5C18.6046 11 19.5 11.8954 19.5 13V15C19.5 16.1046 18.6046 17 17.5 17H16", vectorEffect: "non-scaling-stroke" })
] }), yw = P(vw), bw = (e, t) => /* @__PURE__ */ x("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: [
  /* @__PURE__ */ a("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M16.9497 7.05026L12 12L7.05025 16.9498", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ a("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M12 12L7.05025 7.05026L16.9497 16.9498", vectorEffect: "non-scaling-stroke" })
] }), F1 = P(bw), ww = (e, t) => /* @__PURE__ */ a("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: /* @__PURE__ */ a("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M17 8V17C17 18.6569 15.6569 20 14 20H10C8.34315 20 7 18.6569 7 17V8M17 8H15.5M17 8H18.5M7 8H8.5M7 8H5.5M15.5 8V5C15.5 4.44772 15.0523 4 14.5 4L9.5 4C8.94772 4 8.5 4.44772 8.5 5V8M15.5 8H8.5", vectorEffect: "non-scaling-stroke" }) }), Cw = P(ww), xw = (e, t) => /* @__PURE__ */ x("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: [
  /* @__PURE__ */ a("path", { stroke: "currentColor", strokeLinejoin: "round", d: "M6 4H18C19.6569 4 21 5.34315 21 7V13C21 14.6569 19.6569 16 18 16H6C4.34315 16 3 14.6569 3 13V7C3 5.34315 4.34315 4 6 4Z", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ a("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M7 20H17", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ a("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M9 20L9 16", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ a("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M15 20L15 16", vectorEffect: "non-scaling-stroke" })
] }), kw = P(xw), Sw = (e, t) => /* @__PURE__ */ x("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: [
  /* @__PURE__ */ a("rect", { width: 16, height: 12, x: 4, y: 6, stroke: "currentColor", rx: 3, vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ a("path", { stroke: "currentColor", strokeLinecap: "round", d: "M14 9H11.5C10.6716 9 10 9.67157 10 10.5V10.5C10 11.3284 10.6716 12 11.5 12H12.5C13.3284 12 14 12.6716 14 13.5V13.5C14 14.3284 13.3284 15 12.5 15H10", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ a("path", { stroke: "currentColor", strokeLinecap: "round", d: "M7 12V12.1", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ a("path", { stroke: "currentColor", strokeLinecap: "round", d: "M17 12V12.1", vectorEffect: "non-scaling-stroke" })
] }), Mw = P(Sw), Ew = (e, t) => /* @__PURE__ */ a("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: /* @__PURE__ */ a("circle", { cx: 12, cy: 12, r: 8, stroke: "currentColor", strokeDasharray: "2 2", vectorEffect: "non-scaling-stroke" }) }), B1 = P(Ew), Lw = (e, t) => /* @__PURE__ */ x("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: [
  /* @__PURE__ */ a("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M19 15V16C19 17.6569 17.6569 19 16 19H8C6.34315 19 5 17.6569 5 16V15", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ a("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M12 5V14M12 14L9 11M12 14L15 11", vectorEffect: "non-scaling-stroke" })
] }), Nw = P(Lw), Pw = (e, t) => /* @__PURE__ */ x("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: [
  /* @__PURE__ */ a("circle", { cx: 12, cy: 12, r: 1.5, fill: "currentColor", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ a("circle", { cx: 6.5, cy: 12, r: 1.5, fill: "currentColor", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ a("circle", { cx: 17.5, cy: 12, r: 1.5, fill: "currentColor", vectorEffect: "non-scaling-stroke" })
] }), Tw = P(Pw), Rw = (e, t) => /* @__PURE__ */ x("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: [
  /* @__PURE__ */ a("circle", { cx: 12, cy: 12, r: 1.5, fill: "currentColor", transform: "rotate(90 12 12)", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ a("circle", { cx: 12, cy: 6.5, r: 1.5, fill: "currentColor", transform: "rotate(90 12 6.5)", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ a("circle", { cx: 12, cy: 17.5, r: 1.5, fill: "currentColor", transform: "rotate(90 12 17.5)", vectorEffect: "non-scaling-stroke" })
] }), j1 = P(Rw), Aw = (e, t) => /* @__PURE__ */ x("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: [
  /* @__PURE__ */ a("path", { stroke: "currentColor", d: "M20 15V8.61803C20 8.23926 19.786 7.893 19.4472 7.72361L13.3416 4.67082C12.4971 4.24853 11.5029 4.24853 10.6584 4.67082L4.55279 7.72361C4.214 7.893 4 8.23926 4 8.61803V15C4 16.6569 5.34315 18 7 18H17C18.6569 18 20 16.6569 20 15Z", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ a("path", { stroke: "currentColor", d: "M4 9L11.4969 12.7484C11.8136 12.9068 12.1864 12.9068 12.5031 12.7484L20 9", vectorEffect: "non-scaling-stroke" })
] }), Dw = P(Aw), _w = (e, t) => /* @__PURE__ */ x("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: [
  /* @__PURE__ */ a("rect", { width: 16, height: 12, x: 4, y: 6, stroke: "currentColor", rx: 3, vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ a("path", { stroke: "currentColor", strokeLinecap: "round", d: "M4.5 9.5L11.1542 12.6053C11.6903 12.8555 12.3097 12.8555 12.8458 12.6053L19.5 9.5", vectorEffect: "non-scaling-stroke" })
] }), Iw = P(_w), Ow = (e, t) => /* @__PURE__ */ x("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: [
  /* @__PURE__ */ a("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M10.0001 12L19.0001 12M19.0001 12L16.0001 9.00001M19.0001 12L16.0001 15", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ a("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M11.0001 19L8.00011 19C6.34325 19 5.00011 17.6569 5.00011 16L5.00011 8.00001C5.00011 6.34315 6.34325 5.00001 8.00011 5.00001L11.0001 5.00001", vectorEffect: "non-scaling-stroke" })
] }), Vw = P(Ow), Fw = (e, t) => /* @__PURE__ */ x("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: [
  /* @__PURE__ */ a("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M19.5919 7.66492C18.318 10.297 15.5536 12.6649 11.9999 12.6649C8.44623 12.6649 5.68183 10.297 4.40796 7.66492", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ a("path", { stroke: "currentColor", strokeLinecap: "round", d: "M10.0083 13.0159L8.89773 16.3351", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ a("path", { stroke: "currentColor", strokeLinecap: "round", d: "M14.0576 13.0159L15.1682 16.3351", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ a("path", { stroke: "currentColor", strokeLinecap: "round", d: "M17.5232 10.543L20 13.0159", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ a("path", { stroke: "currentColor", strokeLinecap: "round", d: "M6.47681 10.543L4.00002 13.0159", vectorEffect: "non-scaling-stroke" })
] }), $1 = P(Fw), Bw = (e, t) => /* @__PURE__ */ x("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: [
  /* @__PURE__ */ a("path", { stroke: "currentColor", strokeLinejoin: "round", d: "M20 12C19 9 16 6 12 6C8 6 5 9 4 12C5 15 8 18 12 18C16 18 19 15 20 12Z", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ a("circle", { cx: 12, cy: 12, r: 2.35, stroke: "currentColor", vectorEffect: "non-scaling-stroke" })
] }), W1 = P(Bw), jw = (e, t) => /* @__PURE__ */ a("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: /* @__PURE__ */ a("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M14.8787 4.87868L17.1213 7.12132C17.684 7.68393 18 8.44699 18 9.24264V17C18 18.6569 16.6569 20 15 20H9.00002C7.34317 20 6.00002 18.6569 6.00002 17V7C6.00002 5.34315 7.34317 4 9.00002 4H12.7574C13.553 4 14.3161 4.31607 14.8787 4.87868Z", vectorEffect: "non-scaling-stroke" }) }), $w = P(jw), Ww = (e, t) => /* @__PURE__ */ x("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: [
  /* @__PURE__ */ a("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M6 5.50001C9.5 4.50001 11 5.00001 12.5 6.00001C14 7 16 7.00002 18 5.50002V15C16 16.5 14 16.5 12.5 15.5C11 14.5 9.5 14 6 15", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ a("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M6 4V20", vectorEffect: "non-scaling-stroke" })
] }), Hw = P(Ww), Uw = (e, t) => /* @__PURE__ */ a("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: /* @__PURE__ */ a("path", { stroke: "currentColor", d: "M11.4375 6C11.09 5.38228 10.4364 5 9.72763 5H7.19998C6.07987 5 5.51982 5 5.092 5.21799C4.71567 5.40973 4.40971 5.71569 4.21796 6.09202C3.99998 6.51984 3.99998 7.07989 3.99998 8.2V14.2C3.99998 15.8802 3.99998 16.7202 4.32696 17.362C4.61458 17.9265 5.07352 18.3854 5.63801 18.673C6.27974 19 7.11982 19 8.79998 19H15.2C16.8801 19 17.7202 19 18.3619 18.673C18.9264 18.3854 19.3854 17.9265 19.673 17.362C20 16.7202 20 15.8802 20 14.2V11.8C20 10.1198 20 9.27976 19.673 8.63803C19.3854 8.07354 18.9264 7.6146 18.3619 7.32698C17.7202 7 16.8801 7 15.2 7H13.1473C12.4386 7 11.7849 6.61772 11.4375 6V6Z", vectorEffect: "non-scaling-stroke" }) }), zw = P(Uw), Gw = (e, t) => /* @__PURE__ */ x("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: [
  /* @__PURE__ */ a("path", { stroke: "currentColor", d: "M10.4375 5C10.09 4.38228 9.43639 4 8.72765 4H7.12954C6.07585 4 5.54901 4 5.14167 4.19355C4.72595 4.39108 4.39108 4.72595 4.19355 5.14167C4 5.54901 4 6.07585 4 7.12954V11.2C4 12.8802 4 13.7202 4.32698 14.362C4.6146 14.9265 5.07354 15.3854 5.63803 15.673C6.27976 16 7.11984 16 8.8 16H13.2C14.8802 16 15.7202 16 16.362 15.673C16.9265 15.3854 17.3854 14.9265 17.673 14.362C18 13.7202 18 12.8802 18 11.2V10.4168C18 9.09704 18 8.43714 17.796 7.91257C17.4911 7.12874 16.8713 6.50887 16.0874 6.20402C15.5629 6 14.903 6 13.5832 6H12.1473C11.4386 6 10.785 5.61772 10.4375 5V5Z", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ a("path", { stroke: "currentColor", strokeLinecap: "round", d: "M7 19H11.4C14.7603 19 16.4405 19 17.7239 18.346C18.8529 17.7708 19.7708 16.8529 20.346 15.7239C21 14.4405 21 12.7603 21 9.4V9", vectorEffect: "non-scaling-stroke" })
] }), Kw = P(Gw), Yw = (e, t) => /* @__PURE__ */ x("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: [
  /* @__PURE__ */ a("path", { stroke: "currentColor", strokeLinecap: "round", d: "M4 6V15C4 16.6569 5.34315 18 7 18H20", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ a("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M8 14L11.6464 10.3536C11.8417 10.1583 12.1583 10.1583 12.3536 10.3536L14.6464 12.6464C14.8417 12.8417 15.1583 12.8417 15.3536 12.6464L20 8M20 8V11M20 8H17", vectorEffect: "non-scaling-stroke" })
] }), Zw = P(Yw), Xw = (e, t) => /* @__PURE__ */ a("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: /* @__PURE__ */ a("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M15.0625 6C12.875 6 12 8 12 8C12 8 11.125 6 8.9375 6C7.1875 6 5 7.71429 5 10.2857C5 14.5714 12 19 12 19C12 19 19 14.5714 19 10.2857C19 8.14286 17.25 6 15.0625 6Z", vectorEffect: "non-scaling-stroke" }) }), qw = P(Xw), Qw = (e, t) => /* @__PURE__ */ x("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: [
  /* @__PURE__ */ a("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M6.02676 21H8.70114C8.88929 21 9.06254 20.8948 9.14268 20.7245C9.74058 19.4545 9.99622 18.2105 9.99622 17.0039C9.99622 16.3524 9.76813 15.9227 9.46286 15.2206C9.26905 14.7748 9.03558 14.2714 8.87603 14.0142C8.55464 13.4962 7.92802 13.3349 7.46497 13.5664C7.00191 13.7979 6.88253 14.3546 7.13253 14.8546C7.38253 15.3546 8.08594 16.7242 7.42007 17.162C7.00161 17.437 6.48266 17.3625 6.10336 16.889C5.87911 16.609 5.50323 16.1147 5.50323 15.6956L5.50312 11C5.50312 9.99999 5.25003 9 4.2344 9C3.21877 9 3 10 3 11V16C3 17.5096 3.59595 18.2663 5.20354 20.5694C5.39126 20.8383 5.6988 21 6.02676 21Z", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ a("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M17.9695 21H15.2951C15.1069 21 14.9337 20.8948 14.8535 20.7245C14.2556 19.4545 14 18.2105 14 17.0039C14 16.3524 14.2281 15.9227 14.5334 15.2206C14.7272 14.7748 14.9606 14.2714 15.1202 14.0142C15.4416 13.4962 16.0682 13.3349 16.5312 13.5664C16.9943 13.7979 17.1137 14.3546 16.8637 14.8546C16.6137 15.3546 15.9103 16.7242 16.5761 17.162C16.9946 17.437 17.5136 17.3625 17.8929 16.889C18.1171 16.609 18.493 16.1147 18.493 15.6956L18.4931 11C18.4931 9.99999 18.7462 9 19.7618 9C20.7774 9 20.9962 10 20.9962 11V16C20.9962 17.5096 20.4003 18.2663 18.7927 20.5694C18.605 20.8383 18.2974 21 17.9695 21Z", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ a("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M14.2611 2C16.1983 2 17.5 3.76447 17.5 5.41053C17.5 8.74408 12 12 12 12C11.9022 12 6.5 8.74408 6.5 5.41053C6.5 3.76447 7.80167 2 9.73889 2C10.8511 2 11.5783 2.53882 12 3.0125C12.4217 2.53882 13.1489 2 14.2611 2Z", vectorEffect: "non-scaling-stroke" })
] }), Jw = P(Qw), e6 = (e, t) => /* @__PURE__ */ a("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: /* @__PURE__ */ a("path", { stroke: "currentColor", strokeLinejoin: "round", d: "M6.25629 7.60265L10.2563 4.74551C11.2994 4.00044 12.7006 4.00044 13.7437 4.74551L17.7437 7.60265C18.5321 8.16579 19 9.075 19 10.0439V16C19 17.6569 17.6569 19 16 19H15C14.4477 19 14 18.5523 14 18V15.5C14 14.3954 13.1046 13.5 12 13.5C10.8954 13.5 10 14.3954 10 15.5V18C10 18.5523 9.55228 19 9 19H8C6.34315 19 5 17.6569 5 16V10.0439C5 9.075 5.4679 8.16579 6.25629 7.60265Z", vectorEffect: "non-scaling-stroke" }) }), t6 = P(e6), n6 = (e, t) => /* @__PURE__ */ x("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: [
  /* @__PURE__ */ a("circle", { cx: 12, cy: 12, r: 8, stroke: "currentColor", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ a("path", { fill: "currentColor", d: "M11.9999 18C15.3136 18 17.9999 15.3137 17.9999 12C17.9999 8.68629 15.3136 6 11.9999 6V18Z", vectorEffect: "non-scaling-stroke" })
] }), H1 = P(n6), r6 = (e, t) => /* @__PURE__ */ x("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: [
  /* @__PURE__ */ a("path", { stroke: "currentColor", strokeLinejoin: "round", d: "M20 15V10.7146C20 10.2525 19.84 9.80468 19.5471 9.44721L17.6236 7.09895C17.0538 6.40334 16.202 6.00001 15.3028 6.00001H8.31014C7.31744 6.00001 6.38901 6.49108 5.83033 7.31164L4.34677 9.49064C4.12081 9.82252 3.99997 10.2147 3.99997 10.6162V15C3.99997 16.6569 5.34312 18 6.99997 18H17C18.6568 18 20 16.6569 20 15Z", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ a("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M4.49998 10H7.65285C8.14169 10 8.55888 10.3534 8.63924 10.8356L8.86071 12.1644C8.94107 12.6466 9.35827 13 9.8471 13H14.1529C14.6417 13 15.0589 12.6466 15.1392 12.1644L15.3607 10.8356C15.4411 10.3534 15.8583 10 16.3471 10H19.5", vectorEffect: "non-scaling-stroke" })
] }), o6 = P(r6), i6 = (e, t) => /* @__PURE__ */ x("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: [
  /* @__PURE__ */ a("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M12 12V15", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ a("circle", { cx: 12, cy: 12, r: 8, stroke: "currentColor", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ a("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M12 9V9.1", vectorEffect: "non-scaling-stroke" })
] }), U1 = P(i6), s6 = (e, t) => /* @__PURE__ */ a("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: /* @__PURE__ */ a("path", { fill: "currentColor", fillRule: "evenodd", d: "M20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12ZM11.35 9.10001C11.35 9.45899 11.641 9.75001 12 9.75001C12.359 9.75001 12.65 9.45899 12.65 9.10001V9.00001C12.65 8.64102 12.359 8.35001 12 8.35001C11.641 8.35001 11.35 8.64102 11.35 9.00001V9.10001ZM11.35 15.1C11.35 15.459 11.641 15.75 12 15.75C12.359 15.75 12.65 15.459 12.65 15.1V12.1C12.65 11.741 12.359 11.45 12 11.45C11.641 11.45 11.35 11.741 11.35 12.1L11.35 15.1Z", clipRule: "evenodd", vectorEffect: "non-scaling-stroke" }) }), za = P(s6), a6 = (e, t) => /* @__PURE__ */ x("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: [
  /* @__PURE__ */ a("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M10 10H11C11.5523 10 12 10.4477 12 11V17C12 17.5523 11.5523 18 11 18H10H14", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ a("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M12 7V7.1", vectorEffect: "non-scaling-stroke" })
] }), l6 = P(a6), c6 = (e, t) => /* @__PURE__ */ x("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: [
  /* @__PURE__ */ a("path", { stroke: "currentColor", strokeLinecap: "round", d: "M9 20H10.4C13.7603 20 15.4405 20 16.7239 19.346C17.8529 18.7708 18.7708 17.8529 19.346 16.7239C20 15.4405 20 13.7603 20 10.4V9", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ a("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M8 5H14C15.6569 5 17 6.34315 17 8V14C17 15.6569 15.6569 17 14 17H8C6.34315 17 5 15.6569 5 14V8C5 6.34315 6.34315 5 8 5Z", vectorEffect: "non-scaling-stroke" })
] }), z1 = P(c6), u6 = (e, t) => /* @__PURE__ */ x("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: [
  /* @__PURE__ */ a("path", { stroke: "currentColor", d: "M8 16H16V17C16 18.6569 14.6569 20 13 20H11C9.34315 20 8 18.6569 8 17V16Z", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ a("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M12 16V11.5M12 11.5L10.5 10.5M12 11.5L13.5 10.5", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ a("path", { stroke: "currentColor", d: "M8 16V13.9192C8 13.6348 7.87558 13.3669 7.67824 13.162C6.63904 12.0832 6 10.6162 6 9C6 5.68629 8.68629 3 12 3C15.3137 3 18 5.68629 18 9C18 10.6162 17.361 12.0832 16.3218 13.162C16.1244 13.3669 16 13.6348 16 13.9192V16", vectorEffect: "non-scaling-stroke" })
] }), d6 = P(u6), f6 = (e, t) => /* @__PURE__ */ x("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: [
  /* @__PURE__ */ a("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M16 10H8C6.34315 10 5 11.3431 5 13V16C5 17.6569 6.34315 19 8 19H16C17.6569 19 19 17.6569 19 16V13C19 11.3431 17.6569 10 16 10Z", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ a("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M12 14V15", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ a("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M8 10V8C8 5.79086 9.79086 4 12 4V4C14.2091 4 16 5.79086 16 8V10", vectorEffect: "non-scaling-stroke" })
] }), h6 = P(f6), p6 = (e, t) => /* @__PURE__ */ x("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: [
  /* @__PURE__ */ a("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M16 10H8C6.34315 10 5 11.3431 5 13V16C5 17.6569 6.34315 19 8 19H16C17.6569 19 19 17.6569 19 16V13C19 11.3431 17.6569 10 16 10Z", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ a("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M12 14V15", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ a("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M8 10V8C8 5.79086 9.79086 4 12 4V4", vectorEffect: "non-scaling-stroke" })
] }), m6 = P(p6), g6 = (e, t) => /* @__PURE__ */ x("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: [
  /* @__PURE__ */ a("path", { fill: "currentColor", d: "M6.91895 16.2844C5.94243 15.1275 5.35384 13.6325 5.35384 12C5.35384 8.32943 8.32943 5.35384 12 5.35384C15.6706 5.35384 18.6461 8.32943 18.6461 12C18.6461 13.6325 18.0576 15.1275 17.0811 16.2844C17.417 16.4944 17.739 16.7244 18.0453 16.973L18.1792 17.0815C19.3168 15.6997 20 13.9296 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 13.9296 4.68318 15.6997 5.82087 17.0815L5.95467 16.973C6.26096 16.7244 6.58297 16.4944 6.91895 16.2844Z", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ a("path", { fill: "currentColor", d: "M17.0372 18.2154C15.6619 19.3313 13.9091 20 12 20C10.0909 20 8.33808 19.3313 6.96283 18.2154C8.33808 17.0995 10.0909 16.4308 12 16.4308C13.9091 16.4308 15.6619 17.0995 17.0372 18.2154Z", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ a("path", { fill: "currentColor", d: "M12 14.7077C13.6314 14.7077 14.9539 13.3852 14.9539 11.7539C14.9539 10.1225 13.6314 8.8 12 8.8C10.3686 8.8 9.04614 10.1225 9.04614 11.7539C9.04614 13.3852 10.3686 14.7077 12 14.7077Z", vectorEffect: "non-scaling-stroke" })
] }), v6 = P(g6), y6 = (e, t) => /* @__PURE__ */ a("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: /* @__PURE__ */ a("path", { fill: "currentColor", d: "M14.9388 10.137C14.9587 9.94491 14.9689 9.74991 14.9689 9.55251C14.9689 6.48594 12.5134 4 9.48443 4C6.45546 4 4 6.48594 4 9.55251C4 12.6191 6.45546 15.105 9.48443 15.105C9.70417 15.105 9.9209 15.0919 10.1339 15.0665V18.9333C10.1339 19.5224 10.6056 20 11.1875 20H18.4616C19.0434 20 19.5152 19.5224 19.5152 18.9333V11.2037C19.5152 10.6145 19.0434 10.137 18.4616 10.137H14.9388ZM14.9388 10.137C14.6727 12.7123 12.6678 14.7638 10.1339 15.0665V11.2037C10.1339 10.6145 10.6056 10.137 11.1875 10.137H14.9388Z", vectorEffect: "non-scaling-stroke" }) }), b6 = P(y6), w6 = (e, t) => /* @__PURE__ */ x("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: [
  /* @__PURE__ */ a("path", { fill: "currentColor", d: "M13.635 6.37192C13.9349 6.076 15.2013 5.25398 15.4679 5.51702C15.7178 5.78007 14.9013 7.04599 14.6181 7.32547C14.3348 7.6214 14.1182 7.83513 13.9682 7.98309L14.4348 12.7508L13.9016 13.2769L12.302 9.62714L11.6688 10.2519C11.219 10.7122 10.5525 11.189 10.0026 11.5178L10.0859 13.1618L9.83599 13.4084C9.83599 13.4084 9.05286 11.9617 9.01953 11.9288C9.00287 11.8959 7.53659 11.1068 7.53659 11.1068L7.78652 10.8602L9.43609 10.9424C9.76934 10.3998 10.2359 9.74222 10.7024 9.28189L11.3189 8.67359L7.65322 7.07887L8.18642 6.55277L12.9852 7.02954C13.1351 6.86514 13.3517 6.65141 13.635 6.37192Z", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ a("path", { fill: "currentColor", d: "M6.33689 3.33043C9.46941 0.223189 14.5348 0.223189 17.6506 3.33043C20.7831 6.43768 20.7831 11.4849 17.6506 14.5921C14.5181 17.6994 9.45275 17.6994 6.33689 14.5921C3.22104 11.4849 3.22104 6.43768 6.33689 3.33043ZM7.33663 13.6222C9.91929 16.1869 14.0849 16.1869 16.6675 13.6222C19.2502 11.041 19.2502 6.88157 16.6675 4.3333C14.0849 1.76859 9.91929 1.76859 7.33663 4.3333C4.75397 6.89801 4.75397 11.0574 7.33663 13.6222Z", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ a("path", { fill: "currentColor", d: "M12.0021 18.3406C13.3851 18.3406 14.7014 18.0611 15.9344 17.4857C16.2843 17.3212 16.7009 17.4692 16.8675 17.8309C17.0175 18.1762 16.8675 18.5872 16.5176 18.7516C15.1013 19.4092 13.585 19.738 12.0021 19.738C10.4358 19.738 8.9029 19.4092 7.48661 18.7516C7.12004 18.5872 6.97007 18.1762 7.1367 17.8309C7.30332 17.4692 7.71988 17.3212 8.06979 17.4857C9.3028 18.0446 10.6358 18.3406 12.0021 18.3406Z", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ a("path", { fill: "currentColor", d: "M12.0021 22.5C10.7524 22.5 9.53607 22.3192 8.35304 21.941C7.98647 21.8259 7.78652 21.4314 7.8865 21.0697C8.00313 20.708 8.38637 20.4943 8.7696 20.6093C9.80266 20.9382 10.9024 21.1026 12.0021 21.1026C13.1018 21.1026 14.1682 20.9382 15.2179 20.6258C15.5845 20.5107 15.9844 20.7244 16.101 21.0861C16.2177 21.4478 16.0177 21.8424 15.6345 21.9575C14.4515 22.3192 13.2351 22.5 12.0021 22.5Z", vectorEffect: "non-scaling-stroke" })
] }), C6 = P(w6), x6 = (e, t) => /* @__PURE__ */ x("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: [
  /* @__PURE__ */ a("path", { stroke: "currentColor", d: "M5 6C5 5.44772 5.44772 5 6 5H9C9.55228 5 10 5.44772 10 6V8C10 8.55228 9.55228 9 9 9H6C5.44772 9 5 8.55228 5 8V6Z", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ a("path", { stroke: "currentColor", d: "M5 14C5 13.4477 5.44772 13 6 13H9C9.55228 13 10 13.4477 10 14V18C10 18.5523 9.55228 19 9 19H6C5.44772 19 5 18.5523 5 18V14Z", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ a("path", { stroke: "currentColor", d: "M14 16C14 15.4477 14.4477 15 15 15H18C18.5523 15 19 15.4477 19 16V18C19 18.5523 18.5523 19 18 19H15C14.4477 19 14 18.5523 14 18V16Z", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ a("path", { stroke: "currentColor", d: "M14 6C14 5.44772 14.4477 5 15 5H18C18.5523 5 19 5.44772 19 6V10C19 10.5523 18.5523 11 18 11H15C14.4477 11 14 10.5523 14 10V6Z", vectorEffect: "non-scaling-stroke" })
] }), k6 = P(x6), S6 = (e, t) => /* @__PURE__ */ x("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: [
  /* @__PURE__ */ a("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M4.99989 7H18.9999", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ a("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M5 12H19", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ a("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M4.99989 17H18.9999", vectorEffect: "non-scaling-stroke" })
] }), G1 = P(S6), M6 = (e, t) => /* @__PURE__ */ x("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: [
  /* @__PURE__ */ a("path", { stroke: "currentColor", d: "M17 6H6.85714C5.27919 6 4 7.27919 4 8.85714V15.1293C4 16.7148 5.28525 18 6.87068 18C6.94791 18 7.01647 18.0494 7.04089 18.1227L7.56126 19.6838C7.7771 20.3313 8.56389 20.5771 9.10994 20.1675L11.7333 18.2C11.9064 18.0702 12.117 18 12.3333 18H17C18.6569 18 20 16.6569 20 15V9C20 7.34315 18.6569 6 17 6Z", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ a("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M15 14L14.2361 13.618C12.8284 12.9142 11.1716 12.9142 9.76393 13.618L9 14", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ a("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M10 10V11", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ a("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M14 10V11", vectorEffect: "non-scaling-stroke" })
] }), E6 = P(M6), L6 = (e, t) => /* @__PURE__ */ x("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: [
  /* @__PURE__ */ a("path", { stroke: "currentColor", d: "M17 6H6.85714C5.27919 6 4 7.27919 4 8.85714V15.1293C4 16.7148 5.28525 18 6.87068 18C6.94791 18 7.01647 18.0494 7.04089 18.1227L7.56126 19.6838C7.7771 20.3313 8.56389 20.5771 9.10994 20.1675L11.7333 18.2C11.9064 18.0702 12.117 18 12.3333 18H17C18.6569 18 20 16.6569 20 15V9C20 7.34315 18.6569 6 17 6Z", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ a("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M13.4389 9C14.6716 9 15.5 10.1175 15.5 11.16C15.5 13.2713 12.0622 15 12 15C11.9378 15 8.5 13.2713 8.5 11.16C8.5 10.1175 9.32833 9 10.5611 9C11.2689 9 11.7317 9.34125 12 9.64125C12.2683 9.34125 12.7311 9 13.4389 9Z", vectorEffect: "non-scaling-stroke" })
] }), N6 = P(L6), P6 = (e, t) => /* @__PURE__ */ x("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: [
  /* @__PURE__ */ a("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M14 17V14C14 12.8954 13.1046 12 12 12H7C5.89543 12 5 12.8954 5 14V19.7929C5 20.2383 5.53857 20.4614 5.85355 20.1464L7 19H12C13.1046 19 14 18.1046 14 17Z", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ a("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M10 9V7C10 5.89543 10.8954 5 12 5H17C18.1046 5 19 5.89543 19 7V12.7929C19 13.2383 18.4614 13.4614 18.1464 13.1464L17 12H16.5", vectorEffect: "non-scaling-stroke" })
] }), T6 = P(P6), R6 = (e, t) => /* @__PURE__ */ x("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: [
  /* @__PURE__ */ a("path", { stroke: "currentColor", d: "M5.54981 14.121L6.2641 10.121C6.68993 7.73641 8.76387 6 11.1862 6H12.8138C15.2361 6 17.3101 7.73641 17.7359 10.121L18.4502 14.121C18.9974 17.1857 16.6412 20 13.528 20H10.472C7.35882 20 5.00255 17.1857 5.54981 14.121Z", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ a("path", { stroke: "currentColor", d: "M10.3257 2.5H13.6743C14.3386 2.5 14.8183 3.13591 14.6358 3.77472L14 6H10L9.36421 3.77472C9.18169 3.1359 9.66135 2.5 10.3257 2.5Z", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ a("path", { stroke: "currentColor", strokeLinecap: "round", d: "M14 10H11.5C10.6716 10 10 10.6716 10 11.5V11.5C10 12.3284 10.6716 13 11.5 13H12.5C13.3284 13 14 13.6716 14 14.5V14.5C14 15.3284 13.3284 16 12.5 16H10", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ a("path", { stroke: "currentColor", strokeLinecap: "round", d: "M12 16V17", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ a("path", { stroke: "currentColor", strokeLinecap: "round", d: "M12 9V10", vectorEffect: "non-scaling-stroke" })
] }), A6 = P(R6), D6 = (e, t) => /* @__PURE__ */ x("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: [
  /* @__PURE__ */ a("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M9 3H14C15.6569 3 17 4.34315 17 6V14C17 15.6569 15.6569 17 14 17H9C7.34315 17 6 15.6569 6 14V6C6 4.34315 7.34315 3 9 3Z", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ a("path", { stroke: "currentColor", strokeLinecap: "round", d: "M9 20H10.4C13.7603 20 15.4405 20 16.7239 19.346C17.8529 18.7708 18.7708 17.8529 19.346 16.7239C20 15.4405 20 13.7603 20 10.4V9", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ a("path", { stroke: "currentColor", strokeLinecap: "round", d: "M13.5 7H11C10.1716 7 9.5 7.67157 9.5 8.5V8.5C9.5 9.32843 10.1716 10 11 10H12C12.8284 10 13.5 10.6716 13.5 11.5V11.5C13.5 12.3284 12.8284 13 12 13H9.5", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ a("path", { stroke: "currentColor", strokeLinecap: "round", d: "M11.5 7V6", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ a("path", { stroke: "currentColor", strokeLinecap: "round", d: "M11.5 14V13", vectorEffect: "non-scaling-stroke" })
] }), _6 = P(D6), I6 = (e, t) => /* @__PURE__ */ x("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: [
  /* @__PURE__ */ a("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M6 7C6 5.34315 7.34315 4 9 4H15C16.6569 4 18 5.34315 18 7V19C18 19.5523 17.5523 20 17 20H7C6.44772 20 6 19.5523 6 19V7Z", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ a("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M10 12H14", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ a("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M10 8H14", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ a("path", { stroke: "currentColor", d: "M10 16.5C10 15.9477 10.4477 15.5 11 15.5H13C13.5523 15.5 14 15.9477 14 16.5V20H10V16.5Z", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ a("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M19 20H5", vectorEffect: "non-scaling-stroke" })
] }), O6 = P(I6), V6 = (e, t) => /* @__PURE__ */ x("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: [
  /* @__PURE__ */ a("path", { stroke: "currentColor", strokeLinecap: "round", d: "M12 12L17.9536 14.9768C17.9781 14.989 18.0078 14.9765 18.0161 14.9505C18.4772 13.5039 18.0133 12.0621 17.0728 11.0423C17.0459 11.0131 17.0663 10.9652 17.1061 10.9652H19.955C19.9799 10.9652 20.0001 10.9454 19.9995 10.9205C19.9697 9.47309 18.492 7.53588 15.0948 7.50048C15.0571 7.50008 15.0349 7.45634 15.0585 7.42687L16.982 5.02247C16.993 5.00876 16.9952 4.99013 16.9869 4.97467C16.4577 3.99167 13.9831 3.51695 12 5.5", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ a("path", { stroke: "currentColor", strokeLinecap: "round", d: "M12 12L6.04641 14.9768C6.02191 14.989 5.99217 14.9766 5.98385 14.9505C5.52281 13.5039 5.98675 12.0621 6.92718 11.0423C6.95411 11.0131 6.93366 10.9652 6.89394 10.9652H4.045C4.02015 10.9652 3.99995 10.9454 4.00046 10.9206C4.0303 9.47311 5.50795 7.5359 8.90518 7.50049C8.94291 7.5001 8.96508 7.45635 8.94151 7.42689L7.01799 5.02248C7.00702 5.00878 7.00482 4.99014 7.01314 4.97469C7.54231 3.99168 10.0169 3.51697 12 5.50001", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ a("path", { stroke: "currentColor", strokeLinecap: "round", d: "M8 19H16M13.5 13L14 19M10.5 13L10 19", vectorEffect: "non-scaling-stroke" })
] }), F6 = P(V6), B6 = (e, t) => /* @__PURE__ */ a("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: /* @__PURE__ */ a("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M7 13L5.5 18.5L11 17M7 13L14.5 5.5C15.6046 4.39543 17.3954 4.39543 18.5 5.5V5.5C19.6046 6.60457 19.6046 8.39543 18.5 9.5L11 17M7 13L11 17", vectorEffect: "non-scaling-stroke" }) }), j6 = P(B6), $6 = (e, t) => /* @__PURE__ */ x("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: [
  /* @__PURE__ */ a("circle", { cx: 9, cy: 9, r: 4, stroke: "currentColor", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ a("path", { stroke: "currentColor", strokeLinecap: "round", d: "M16 13C17.6569 13 19 11.6569 19 10C19 8.34315 17.6569 7 16 7", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ a("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M4.00002 18C4.00002 18 5.50002 16 9.00002 16C12.5 16 14 18 14 18", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ a("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M17 16C19 16 19.75 17 19.75 17", vectorEffect: "non-scaling-stroke" })
] }), W6 = P($6), H6 = (e, t) => /* @__PURE__ */ x("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: [
  /* @__PURE__ */ a("circle", { cx: 12, cy: 9, r: 4, stroke: "currentColor", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ a("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M7 18C7 18 8.5 16 12 16C15.5 16 17 18 17 18", vectorEffect: "non-scaling-stroke" })
] }), U6 = P(H6), z6 = (e, t) => /* @__PURE__ */ x("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: [
  /* @__PURE__ */ a("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M12 20C15 16.8 18 13.9346 18 10.4C18 6.86538 15.3137 4 12 4C8.68629 4 6 6.86538 6 10.4C6 13.9346 9 16.8 12 20Z", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ a("rect", { width: 4, height: 4, x: 10, y: 8, stroke: "currentColor", rx: 2, vectorEffect: "non-scaling-stroke" })
] }), G6 = P(z6), K6 = (e, t) => /* @__PURE__ */ x("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: [
  /* @__PURE__ */ a("path", { fill: "currentColor", d: "M6.11014 8.84108L4.6879 10.2653C3.73682 11.2149 3.73682 12.7569 4.6879 13.7065L6.11159 15.1297L7.50354 15.1231C7.81855 15.1231 8.1205 14.9978 8.38856 14.7521L10.7855 12.3583C10.9609 12.1819 11.1741 12.057 11.4017 11.985C11.175 11.9053 10.9713 11.7774 10.806 11.6328L10.7959 11.624L8.38846 9.21653C8.12043 8.97081 7.81852 8.84554 7.50354 8.84554L6.11014 8.84108Z", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ a("path", { fill: "currentColor", d: "M7.48424 16.5045C8.15386 16.3583 9.16119 16.117 9.45141 15.8268L11.8553 13.4229C11.8575 13.4207 11.8672 13.4135 11.8866 13.4135C11.9059 13.4135 11.9156 13.4207 11.9179 13.4229L14.3311 15.8362C14.6543 16.1593 15.5618 16.578 16.207 16.7873L13.7091 19.2852C12.7595 20.2098 11.2175 20.2098 10.2678 19.2852L7.48424 16.5045Z", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ a("path", { fill: "currentColor", d: "M17.6459 15.3484L16.279 15.1325C15.9533 15.1325 15.6321 14.9996 15.3999 14.7674L12.9867 12.3541C12.8119 12.1793 12.6001 12.0561 12.3733 11.9845C12.5991 11.9048 12.8023 11.777 12.9672 11.6328L12.9772 11.624L15.3985 9.20274C15.6311 8.97284 15.9534 8.83927 16.279 8.83927L17.8664 8.84388L19.2878 10.2653C20.2374 11.2149 20.2374 12.7569 19.2878 13.7065L17.6459 15.3484Z", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ a("path", { fill: "currentColor", d: "M16.207 7.18168L13.7091 4.68534C12.7595 3.73426 11.2175 3.73426 10.2647 4.68534L7.3897 7.56152C8.0887 7.6709 9.16261 7.83918 9.45559 8.14921L11.8553 10.5489L11.8578 10.5515C11.8651 10.5589 11.8704 10.5612 11.8704 10.5612C11.8704 10.5612 11.8721 10.5619 11.8746 10.5618C11.8783 10.5618 11.8992 10.5604 11.9312 10.5355L14.3311 8.13563C14.6548 7.81198 15.5616 7.39149 16.207 7.18168Z", vectorEffect: "non-scaling-stroke" })
] }), Y6 = P(K6), Z6 = (e, t) => /* @__PURE__ */ x("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: [
  /* @__PURE__ */ a("circle", { cx: 12, cy: 12, r: 8, stroke: "currentColor", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ a("path", { stroke: "currentColor", strokeLinejoin: "round", d: "M17.5 6.5L6.5 17.5", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ a("path", { stroke: "currentColor", strokeLinejoin: "round", d: "M17.5 17.5L6.5 6.5", vectorEffect: "non-scaling-stroke" })
] }), X6 = P(Z6), q6 = (e, t) => /* @__PURE__ */ x("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: [
  /* @__PURE__ */ a("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M9 9C9 7 10.5 6 12 6C13.5 6 15 7.5 15 9C15 12 12 11.5 12 14", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ a("path", { stroke: "currentColor", strokeLinecap: "round", d: "M12 17V17.1", vectorEffect: "non-scaling-stroke" })
] }), K1 = P(q6), Q6 = (e, t) => /* @__PURE__ */ x("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: [
  /* @__PURE__ */ a("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M19 12C19 15.866 15.866 19 12 19C8.13401 19 5 15.866 5 12C5 8.13401 8.13401 5 12 5", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ a("path", { stroke: "currentColor", strokeLinecap: "round", d: "M10 10V11", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ a("path", { stroke: "currentColor", strokeLinecap: "round", d: "M14 10V11", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ a("path", { stroke: "currentColor", strokeLinecap: "round", d: "M9.5 14V14C10.9616 15.1693 13.0384 15.1693 14.5 14V14", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ a("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M18 3V6M18 9V6M18 6H15H21", vectorEffect: "non-scaling-stroke" })
] }), Y1 = P(Q6), J6 = (e, t) => /* @__PURE__ */ x("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: [
  /* @__PURE__ */ a("path", { stroke: "currentColor", strokeLinecap: "round", d: "M18 6.99999L18 18.8258C18 19.6801 16.9979 20.141 16.3492 19.585L15.1663 18.5711C14.7851 18.2444 14.2207 18.2509 13.8472 18.5865L12.6599 19.653C12.2785 19.9957 11.6998 19.9944 11.32 19.65L10.1531 18.5921C9.77987 18.2537 9.21318 18.2458 8.83066 18.5737L7.65079 19.585C7.00211 20.141 6 19.6801 6 18.8258L6 6.99999C6 5.34313 7.34314 3.99999 9 3.99999L15 3.99998C16.6569 3.99998 18 5.34313 18 6.99999Z", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ a("path", { stroke: "currentColor", strokeLinecap: "round", d: "M9 8H15", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ a("path", { stroke: "currentColor", strokeLinecap: "round", d: "M9 12H13", vectorEffect: "non-scaling-stroke" })
] }), e3 = P(J6), t3 = (e, t) => /* @__PURE__ */ x("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: [
  /* @__PURE__ */ a("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M11 14.9999L9 12.9999M11 14.9999C12.0745 14.5913 13.413 14.0759 14.3846 13.4615M11 14.9999V18.9999C11 18.9999 14.2538 18.1153 15 16.9999C15.8308 15.7538 14.3846 13.4615 14.3846 13.4615M9 12.9999C9.40934 11.938 9.92477 10.6124 10.5385 9.6539M9 12.9999H5C5 12.9999 5.88462 9.74607 7 8.99993C8.24615 8.16917 10.5385 9.6539 10.5385 9.6539M10.5385 9.6539C12.5 6.50003 14.5 5.00003 19 5.00003C19 8.50003 18 11.5 14.3846 13.4615", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ a("path", { stroke: "currentColor", strokeLinejoin: "round", d: "M4.66921 17.526C4.74318 16.6629 5.46533 16 6.33156 16V16C7.25301 16 8 16.747 8 17.6684V17.6684C8 18.5347 7.3371 19.2568 6.47404 19.3308L4.5 19.5L4.66921 17.526Z", vectorEffect: "non-scaling-stroke" })
] }), n3 = P(t3), r3 = (e, t) => /* @__PURE__ */ x("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: [
  /* @__PURE__ */ a("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M16 19V19C17.6569 19 19 17.6569 19 16V10.2426C19 9.44699 18.6839 8.68393 18.1213 8.12132L15.8787 5.87868C15.3161 5.31607 14.553 5 13.7574 5H8V5C6.34315 5 5 6.34315 5 8V16C5 17.6569 6.34315 19 8 19V19M16 19V16C16 14.8954 15.1046 14 14 14H10C8.89543 14 8 14.8954 8 16V19M16 19H8", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ a("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M15 6V10H9V6", vectorEffect: "non-scaling-stroke" })
] }), o3 = P(r3), i3 = (e, t) => /* @__PURE__ */ x("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: [
  /* @__PURE__ */ a("path", { stroke: "currentColor", strokeLinecap: "round", d: "M10.5 18H7C5.34315 18 4 16.6569 4 15V9C4 7.34315 5.34315 6 7 6H17C18.6569 6 20 7.34315 20 9V9", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ a("circle", { cx: 17.5, cy: 15.5, r: 4.5, stroke: "currentColor", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ a("path", { stroke: "currentColor", strokeLinecap: "round", d: "M17.5 14V15.054C17.5 15.3326 17.6393 15.5928 17.8711 15.7474L19 16.5", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ a("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M7 10L11 10", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ a("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M7 14H9", vectorEffect: "non-scaling-stroke" })
] }), s3 = P(i3), a3 = (e, t) => /* @__PURE__ */ x("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: [
  /* @__PURE__ */ a("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M6.5 16V16C8.60581 12.7243 13.3942 12.7243 15.5 16V16", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ a("path", { stroke: "currentColor", strokeLinecap: "round", d: "M16 16L19 19", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ a("circle", { cx: 11, cy: 10.5, r: 2.5, stroke: "currentColor", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ a("circle", { cx: 11, cy: 11, r: 7, stroke: "currentColor", vectorEffect: "non-scaling-stroke" })
] }), l3 = P(a3), c3 = (e, t) => /* @__PURE__ */ x("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: [
  /* @__PURE__ */ a("path", { stroke: "currentColor", strokeLinecap: "round", d: "M16 16L19 19", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ a("rect", { width: 14, height: 14, x: 4, y: 4, stroke: "currentColor", rx: 7, vectorEffect: "non-scaling-stroke" })
] }), Z1 = P(c3), u3 = (e, t) => /* @__PURE__ */ x("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: [
  /* @__PURE__ */ a("path", { stroke: "currentColor", d: "M10.3036 4.71638C11.0868 3.46223 12.9132 3.46223 13.6964 4.71638L14.4364 5.90129C14.7887 6.46555 15.3986 6.81766 16.0635 6.8407L17.4596 6.88908C18.9373 6.94029 19.8505 8.52194 19.156 9.8273L18.4998 11.0606C18.1873 11.6479 18.1873 12.3521 18.4998 12.9394L19.156 14.1727C19.8505 15.4781 18.9373 17.0597 17.4596 17.1109L16.0635 17.1593C15.3986 17.1823 14.7887 17.5345 14.4364 18.0987L13.6964 19.2836C12.9132 20.5378 11.0868 20.5378 10.3036 19.2836L9.56365 18.0987C9.21127 17.5345 8.60139 17.1823 7.93654 17.1593L6.54039 17.1109C5.06266 17.0597 4.14949 15.4781 4.84401 14.1727L5.50018 12.9394C5.81266 12.3521 5.81266 11.6479 5.50018 11.0606L4.84401 9.8273C4.14949 8.52194 5.06266 6.94029 6.54039 6.88908L7.93654 6.8407C8.60139 6.81766 9.21127 6.46555 9.56365 5.90129L10.3036 4.71638Z", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ a("circle", { cx: 11.999, cy: 12, r: 2.5, stroke: "currentColor", vectorEffect: "non-scaling-stroke" })
] }), d3 = P(u3), f3 = (e, t) => /* @__PURE__ */ x("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: [
  /* @__PURE__ */ a("path", { stroke: "currentColor", strokeLinecap: "round", d: "M6 13V21", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ a("path", { stroke: "currentColor", strokeLinecap: "round", d: "M18 13V21", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ a("path", { stroke: "currentColor", strokeLinecap: "round", d: "M12 3V11", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ a("path", { stroke: "currentColor", strokeLinecap: "round", d: "M6 3L6 4", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ a("path", { stroke: "currentColor", strokeLinecap: "round", d: "M18 3L18 4", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ a("path", { stroke: "currentColor", strokeLinecap: "round", d: "M12 20L12 21", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ a("rect", { width: 6, height: 3, x: 3, y: 7, stroke: "currentColor", rx: 1.5, vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ a("rect", { width: 6, height: 3, x: 9, y: 14, stroke: "currentColor", rx: 1.5, vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ a("rect", { width: 6, height: 3, x: 15, y: 7, stroke: "currentColor", rx: 1.5, vectorEffect: "non-scaling-stroke" })
] }), h3 = P(f3), p3 = (e, t) => /* @__PURE__ */ x("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: [
  /* @__PURE__ */ a("path", { fill: "currentColor", d: "M11.7977 3.69779C11.9251 3.63406 12.0747 3.63406 12.2021 3.69779C12.3154 3.75444 12.3728 3.84956 12.3952 3.88789C12.4197 3.92977 12.444 3.98153 12.4647 4.02555L12.4688 4.03428L12.8928 4.93538L13.8346 5.07976L13.8442 5.08122C13.89 5.08823 13.9461 5.0968 13.9933 5.1087C14.0395 5.12036 14.1455 5.15012 14.2306 5.24425C14.3225 5.34607 14.3628 5.48181 14.3462 5.61368C14.331 5.73432 14.2664 5.81806 14.2363 5.85495C14.2056 5.89263 14.1658 5.93327 14.1323 5.96743L14.1256 5.97427L13.4348 6.68001L13.5985 7.68083L13.6 7.69027C13.608 7.73883 13.6172 7.7953 13.6209 7.84374C13.6243 7.8894 13.6302 7.99564 13.5743 8.10354C13.5119 8.22399 13.3972 8.31509 13.2564 8.34246C13.1285 8.36734 13.0233 8.32389 12.9816 8.30574C12.9371 8.28636 12.8872 8.25883 12.8462 8.23614L12.8377 8.23146L11.9999 7.76934L11.1621 8.23146L11.1536 8.23614L11.1536 8.23615C11.1125 8.25884 11.0627 8.28636 11.0182 8.30574C10.9765 8.32389 10.8713 8.36734 10.7434 8.34246C10.6026 8.31509 10.4879 8.22399 10.4255 8.10354C10.3696 7.99564 10.3755 7.8894 10.3789 7.84374C10.3826 7.7953 10.3918 7.73883 10.3998 7.69027L10.4013 7.68083L10.565 6.68001L9.87419 5.97427L9.86748 5.96742C9.83402 5.93327 9.79421 5.89263 9.76348 5.85495C9.73338 5.81806 9.66874 5.73432 9.65355 5.61368C9.63695 5.48181 9.67727 5.34607 9.76924 5.24425C9.85426 5.15012 9.96026 5.12036 10.0065 5.1087C10.0537 5.0968 10.1098 5.08823 10.1556 5.08122L10.1556 5.08122L10.1652 5.07976L11.1069 4.93538L11.531 4.03428L11.5351 4.02555L11.5351 4.02555C11.5558 3.98153 11.5801 3.92977 11.6046 3.88789C11.6269 3.84956 11.6844 3.75444 11.7977 3.69779Z", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ a("path", { fill: "currentColor", d: "M5.79768 6.69779C5.92512 6.63406 6.07467 6.63406 6.20211 6.69779C6.31538 6.75444 6.37285 6.84956 6.39522 6.88789C6.41966 6.92977 6.444 6.98153 6.46469 7.02555L6.46879 7.03428L6.89285 7.93538L7.83464 8.07976L7.84417 8.08122C7.89003 8.08823 7.94612 8.0968 7.99331 8.1087C8.03953 8.12036 8.14553 8.15012 8.23056 8.24425C8.32252 8.34607 8.36284 8.48181 8.34624 8.61368C8.33105 8.73432 8.26641 8.81806 8.23631 8.85495C8.20558 8.89263 8.16576 8.93327 8.1323 8.96743L8.1256 8.97427L7.4348 9.68001L7.59845 10.6808L7.6 10.6903C7.60796 10.7388 7.61721 10.7953 7.62087 10.8437C7.62432 10.8894 7.63019 10.9956 7.57431 11.1035C7.51194 11.224 7.39718 11.3151 7.25642 11.3425C7.12848 11.3673 7.02333 11.3239 6.98162 11.3057C6.93709 11.2864 6.88725 11.2588 6.84616 11.2361L6.83768 11.2315L5.9999 10.7693L5.16211 11.2315L5.15363 11.2361L5.15363 11.2361C5.11254 11.2588 5.0627 11.2864 5.01817 11.3057C4.97646 11.3239 4.87131 11.3673 4.74337 11.3425C4.60261 11.3151 4.48786 11.224 4.42548 11.1035C4.36961 10.9956 4.37547 10.8894 4.37892 10.8437C4.38258 10.7953 4.39183 10.7388 4.39979 10.6903L4.40134 10.6808L4.56499 9.68001L3.87419 8.97427L3.86748 8.96742C3.83402 8.93327 3.79421 8.89263 3.76348 8.85495C3.73338 8.81806 3.66874 8.73432 3.65355 8.61368C3.63695 8.48181 3.67727 8.34607 3.76924 8.24425C3.85426 8.15012 3.96026 8.12036 4.00649 8.1087C4.05367 8.0968 4.10975 8.08823 4.15562 8.08122L4.15562 8.08122L4.16516 8.07976L5.10694 7.93538L5.531 7.03428L5.5351 7.02555L5.5351 7.02555C5.5558 6.98153 5.58013 6.92977 5.60457 6.88789C5.62694 6.84956 5.68441 6.75444 5.79768 6.69779Z", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ a("path", { fill: "currentColor", d: "M17.7977 6.69779C17.9251 6.63406 18.0747 6.63406 18.2021 6.69779C18.3154 6.75444 18.3728 6.84956 18.3952 6.88789C18.4197 6.92977 18.444 6.98153 18.4647 7.02555L18.4688 7.03428L18.8928 7.93538L19.8346 8.07976L19.8442 8.08122C19.89 8.08823 19.9461 8.0968 19.9933 8.1087C20.0395 8.12036 20.1455 8.15012 20.2306 8.24425C20.3225 8.34607 20.3628 8.48181 20.3462 8.61368C20.331 8.73432 20.2664 8.81806 20.2363 8.85495C20.2056 8.89263 20.1658 8.93327 20.1323 8.96743L20.1256 8.97427L19.4348 9.68001L19.5985 10.6808L19.6 10.6903C19.608 10.7388 19.6172 10.7953 19.6209 10.8437C19.6243 10.8894 19.6302 10.9956 19.5743 11.1035C19.5119 11.224 19.3972 11.3151 19.2564 11.3425C19.1285 11.3673 19.0233 11.3239 18.9816 11.3057C18.9371 11.2864 18.8872 11.2588 18.8462 11.2361L18.8377 11.2315L17.9999 10.7693L17.1621 11.2315L17.1536 11.2361L17.1536 11.2361C17.1125 11.2588 17.0627 11.2864 17.0182 11.3057C16.9765 11.3239 16.8713 11.3673 16.7434 11.3425C16.6026 11.3151 16.4879 11.224 16.4255 11.1035C16.3696 10.9956 16.3755 10.8894 16.3789 10.8437C16.3826 10.7953 16.3918 10.7388 16.3998 10.6903L16.4013 10.6808L16.565 9.68001L15.8742 8.97427L15.8675 8.96742C15.834 8.93327 15.7942 8.89263 15.7635 8.85495C15.7334 8.81806 15.6687 8.73432 15.6536 8.61368C15.6369 8.48181 15.6773 8.34607 15.7692 8.24425C15.8543 8.15012 15.9603 8.12036 16.0065 8.1087C16.0537 8.0968 16.1098 8.08823 16.1556 8.08122L16.1556 8.08122L16.1652 8.07976L17.1069 7.93538L17.531 7.03428L17.5351 7.02555L17.5351 7.02555C17.5558 6.98153 17.5801 6.92977 17.6046 6.88789C17.6269 6.84956 17.6844 6.75444 17.7977 6.69779Z", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ a("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M12 11V19", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ a("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M6 14C7 14.3333 9 16 9 19", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ a("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M18 14C17 14.3333 15 16 15 19", vectorEffect: "non-scaling-stroke" })
] }), m3 = P(p3), g3 = (e, t) => /* @__PURE__ */ x("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: [
  /* @__PURE__ */ a("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M5 12H9L10.6187 9.41C11.167 8.53286 12.1284 8 13.1627 8H19M19 8L17 6M19 8L17 10", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ a("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M19 16H13.1627C12.1284 16 11.167 15.4671 10.6187 14.59L9 12H5M19 16L17 14M19 16L17 18", vectorEffect: "non-scaling-stroke" })
] }), v3 = P(g3), y3 = (e, t) => /* @__PURE__ */ a("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: /* @__PURE__ */ a("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M11.4673 5.64161C11.6384 5.27788 11.724 5.09602 11.8402 5.03792C11.9413 4.98736 12.0587 4.98736 12.1598 5.03792C12.276 5.09602 12.3616 5.27788 12.5327 5.64161L14.1567 9.09236C14.2072 9.19974 14.2325 9.25343 14.2694 9.29512C14.3021 9.33202 14.3413 9.36193 14.3848 9.38317C14.434 9.40717 14.4905 9.41583 14.6035 9.43315L18.236 9.99005C18.6185 10.0487 18.8097 10.078 18.8982 10.176C18.9752 10.2613 19.0115 10.3784 18.9968 10.4949C18.98 10.6287 18.8415 10.7702 18.5646 11.0531L15.9371 13.7374C15.8552 13.8211 15.8142 13.8629 15.7878 13.9127C15.7644 13.9568 15.7494 14.0052 15.7436 14.0553C15.737 14.1118 15.7467 14.1709 15.766 14.2891L16.386 18.0806C16.4514 18.4805 16.4841 18.6804 16.4226 18.7991C16.3692 18.9023 16.2742 18.9747 16.164 18.9962C16.0375 19.0208 15.8663 18.9263 15.5239 18.7375L12.2765 16.9462C12.1754 16.8904 12.1248 16.8625 12.0715 16.8515C12.0243 16.8418 11.9757 16.8418 11.9285 16.8515C11.8752 16.8625 11.8247 16.8904 11.7235 16.9462L8.47609 18.7375C8.13373 18.9263 7.96254 19.0208 7.83597 18.9962C7.72584 18.9747 7.63081 18.9023 7.57736 18.7991C7.51591 18.6804 7.54861 18.4805 7.614 18.0806L8.23396 14.2891C8.25329 14.1709 8.26295 14.1118 8.25642 14.0553C8.25063 14.0052 8.23561 13.9568 8.21222 13.9127C8.18579 13.8629 8.14484 13.8211 8.06293 13.7374L5.43544 11.0531C5.15851 10.7702 5.02005 10.6287 5.0032 10.4949C4.98854 10.3784 5.02476 10.2613 5.10177 10.176C5.19028 10.078 5.38153 10.0487 5.76405 9.99005L9.39651 9.43315C9.50948 9.41583 9.56596 9.40717 9.61515 9.38317C9.65871 9.36193 9.69792 9.33202 9.73061 9.29512C9.76753 9.25343 9.7928 9.19974 9.84333 9.09236L11.4673 5.64161Z", vectorEffect: "non-scaling-stroke" }) }), b3 = P(y3), w3 = (e, t) => /* @__PURE__ */ x("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: [
  /* @__PURE__ */ a("rect", { width: 16, height: 12, x: 4, y: 7.5, stroke: "currentColor", rx: 3, vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ a("path", { stroke: "currentColor", d: "M9 7.49999V6.49999C9 5.39542 9.89543 4.49999 11 4.49999H13C14.1046 4.49999 15 5.39542 15 6.49999V7.49999", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ a("path", { stroke: "currentColor", strokeLinecap: "round", d: "M20 12.5L4 12.5", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ a("path", { stroke: "currentColor", strokeLinecap: "round", d: "M11 12.5V14.25C11 14.3881 11.1119 14.5 11.25 14.5H12.75C12.8881 14.5 13 14.3881 13 14.25V12.5", vectorEffect: "non-scaling-stroke" })
] }), C3 = P(w3), x3 = (e, t) => /* @__PURE__ */ x("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: [
  /* @__PURE__ */ a("circle", { cx: 12, cy: 13, r: 7.35, stroke: "currentColor", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ a("path", { stroke: "currentColor", strokeLinecap: "round", d: "M12 10.3301V12.9967L15 14.6634", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ a("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M12 5.5V3", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ a("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M10 3H14", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ a("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M19.0901 6L20.5043 7.41421", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ a("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M4.90991 6L3.4957 7.41421", vectorEffect: "non-scaling-stroke" })
] }), k3 = P(x3), S3 = (e, t) => /* @__PURE__ */ x("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: [
  /* @__PURE__ */ a("path", { stroke: "currentColor", strokeLinejoin: "round", d: "M4 7V16C4 17.6569 5.34315 19 7 19H17C18.6569 19 20 17.6569 20 16V12C20 10.3431 18.6569 9 17 9H16", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ a("path", { stroke: "currentColor", strokeLinejoin: "round", d: "M6 5H15C16.1046 5 17 5.89543 17 7V9H6C4.89543 9 4 8.10457 4 7C4 5.89543 4.89543 5 6 5Z", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ a("circle", { cx: 16.25, cy: 13.75, r: 1.25, fill: "currentColor", vectorEffect: "non-scaling-stroke" })
] }), M3 = P(S3), E3 = (e, t) => /* @__PURE__ */ a("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: /* @__PURE__ */ a("path", { fill: "currentColor", fillRule: "evenodd", d: "M5.39903 19C3.87406 19 2.91012 17.3618 3.65071 16.0287L10.2517 4.14697C11.0137 2.77535 12.9863 2.77535 13.7483 4.14697L20.3493 16.0287C21.0899 17.3618 20.1259 19 18.601 19H5.39903ZM12 7.5C11.4345 7.5 10.9888 7.98166 11.0325 8.54549L11.3353 12.4456C11.3623 12.7927 11.6518 13.0607 12 13.0607C12.3482 13.0607 12.6377 12.7927 12.6647 12.4456L12.9675 8.54549C13.0112 7.98166 12.5655 7.5 12 7.5ZM12 16.4869C12.5523 16.4869 13 16.0391 13 15.4869C13 14.9346 12.5523 14.4869 12 14.4869C11.4477 14.4869 11 14.9346 11 15.4869C11 16.0391 11.4477 16.4869 12 16.4869Z", clipRule: "evenodd", vectorEffect: "non-scaling-stroke" }) }), Ga = P(E3), X1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Add: Eb,
  Ai: Nb,
  Alert: Db,
  AlertCircle: Ha,
  AlertCircleLine: Tb,
  Appearance: Ib,
  Archive: Bb,
  ArchiveOpen: Vb,
  ArrowDown: T1,
  ArrowLeft: R1,
  ArrowRight: A1,
  ArrowUp: D1,
  BarGraph: zb,
  Bell: _1,
  BookOpen: Yb,
  Briefcase: Xb,
  Building: Qb,
  Calendar: I1,
  ChartLine: tw,
  Check: sw,
  CheckCircle: Ua,
  CheckCircleLine: rw,
  ChevronDown: Wr,
  ChevronLeft: cw,
  ChevronRight: Hr,
  ChevronUp: O1,
  Circle: hw,
  Clock: mw,
  Cmd: V1,
  Coffee: yw,
  Cross: F1,
  Delete: Cw,
  Desktop: kw,
  DollarBill: Mw,
  DottedCircle: B1,
  Download: Nw,
  Ellipsis: j1,
  EllipsisHorizontal: Tw,
  Envelope: Iw,
  EnvelopeOpen: Dw,
  Exit: Vw,
  ExternalLink: W0,
  EyeInvisible: $1,
  EyeVisible: W1,
  File: $w,
  Flag: Hw,
  Folder: zw,
  Folders: Kw,
  Graph: Zw,
  Heart: qw,
  HoldHeart: Jw,
  Home: t6,
  InProgressTask: H1,
  Inbox: o6,
  Info: l6,
  InfoCircle: za,
  InfoCircleLine: U1,
  LayersFront: z1,
  Lightbulb: d6,
  LockLocked: h6,
  LockUnlocked: m6,
  LogoAvatar: v6,
  LogoEruditai: b6,
  LogoTravelperk: C6,
  Masonry: k6,
  Menu: G1,
  MessageFrown: E6,
  MessageHeart: N6,
  Messages: T6,
  Money: _6,
  MoneyBag: A6,
  Office: O6,
  PalmTree: F6,
  Pencil: j6,
  People: W6,
  Person: U6,
  Pin: G6,
  PixBrazil: Y6,
  Placeholder: X6,
  Question: K1,
  Reaction: Y1,
  Receipt: e3,
  Rocket: n3,
  Save: o3,
  Schedule: s3,
  Search: Z1,
  SearchPerson: l3,
  Settings: d3,
  Sliders: h3,
  Sparkles: m3,
  Split: v3,
  Star: b3,
  Suitcase: C3,
  Timer: k3,
  Wallet: M3,
  Warning: Ga
}, Symbol.toStringTag, { value: "Module" })), L3 = /^(-?)([0-9]+)?(?:([\.,])([0-9]+)?)?$/;
function Du(e, { maxDecimals: t }) {
  if (!e || e === "-")
    return {
      formattedValue: e ?? "",
      value: null
    };
  const n = e.match(L3);
  if (!n) return null;
  let [r, o, i, s, l] = n;
  t && ((l == null ? void 0 : l.length) ?? 0) > t ? l = l == null ? void 0 : l.slice(0, t) : t === 0 && (l = ""), i = (i == null ? void 0 : i.replace(/^0+(\d)/, (d, f) => f)) ?? "";
  const c = `${o}${i}${t !== 0 ? `${s ?? ""}${l ?? ""}` : ""}`, u = parseFloat(c.replace(",", "."));
  return {
    formattedValue: c,
    value: Number.isNaN(u) ? null : u
  };
}
const uo = (e, t, n) => new Intl.NumberFormat(t, {
  maximumFractionDigits: n,
  useGrouping: !1
}).format(e), N3 = P(
  function({ locale: t, value: n, maxDecimals: r, step: o, min: i, max: s, onChange: l, ...c }, u) {
    const [d, f] = Ae(
      () => n != null ? uo(n, t, r) : ""
    ), h = (v) => {
      const y = Du(v, { maxDecimals: r });
      if (!y) return;
      const { formattedValue: w, value: b } = y;
      f(w), l == null || l(b);
    }, g = (v) => () => {
      if (!o) return;
      if (n == null)
        return h(uo(o ?? i ?? 0, t, r));
      const y = v === "increase" ? n + o : n - o;
      i != null && y < i || s != null && y > s || h(uo(y, t, r));
    }, m = () => o ? /* @__PURE__ */ x(
      "div",
      {
        className: "absolute right-2 top-0.5 hidden h-full flex-col group-focus-within:flex group-hover:flex",
        onClick: (v) => v.preventDefault(),
        children: [
          /* @__PURE__ */ a(
            "div",
            {
              onClick: g("increase"),
              className: "h-4 cursor-pointer",
              role: "button",
              children: /* @__PURE__ */ a(Re, { size: "sm", icon: O1 })
            }
          ),
          /* @__PURE__ */ a(
            "div",
            {
              onClick: g("decrease"),
              className: "h-4 cursor-pointer",
              role: "button",
              children: /* @__PURE__ */ a(Re, { size: "sm", icon: Wr })
            }
          )
        ]
      }
    ) : null;
    return Oe(() => {
      const v = Du(d, { maxDecimals: r });
      n === void 0 || n == (v == null ? void 0 : v.value) || f(n ? uo(n, t, r) : "");
    }, [d, r, n, t]), /* @__PURE__ */ x("div", { className: "group relative", children: [
      /* @__PURE__ */ a(
        Wa,
        {
          type: "text",
          ref: u,
          value: d,
          inputMode: "decimal",
          className: "group-focus-within:pr-5 group-hover:pr-5",
          onChange: (v) => h(v.target.value),
          ...c
        }
      ),
      /* @__PURE__ */ a(m, {})
    ] });
  }
);
/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const P3 = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), q1 = (...e) => e.filter((t, n, r) => !!t && r.indexOf(t) === n).join(" ");
/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var T3 = {
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
const R3 = P(
  ({
    color: e = "currentColor",
    size: t = 24,
    strokeWidth: n = 2,
    absoluteStrokeWidth: r,
    className: o = "",
    children: i,
    iconNode: s,
    ...l
  }, c) => Po(
    "svg",
    {
      ref: c,
      ...T3,
      width: t,
      height: t,
      stroke: e,
      strokeWidth: r ? Number(n) * 24 / Number(t) : n,
      className: q1("lucide", o),
      ...l
    },
    [
      ...s.map(([u, d]) => Po(u, d)),
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
const Mt = (e, t) => {
  const n = P(
    ({ className: r, ...o }, i) => Po(R3, {
      ref: i,
      iconNode: t,
      className: q1(`lucide-${P3(e)}`, r),
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
const A3 = Mt("BookOpen", [
  ["path", { d: "M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z", key: "vv98re" }],
  ["path", { d: "M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z", key: "1cyq3y" }]
]);
/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const D3 = Mt("Check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _3 = Mt("ChevronDown", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]
]);
/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const I3 = Mt("ChevronLeft", [
  ["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]
]);
/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ka = Mt("ChevronRight", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]
]);
/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const O3 = Mt("ChevronUp", [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]]);
/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const V3 = Mt("CircleCheck", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]
]);
/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const F3 = Mt("Circle", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]
]);
/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const B3 = Mt("OctagonX", [
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
const j3 = Mt("TriangleAlert", [
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
const $3 = Mt("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]);
function ye(e) {
  const t = Object.prototype.toString.call(e);
  return e instanceof Date || typeof e == "object" && t === "[object Date]" ? new e.constructor(+e) : typeof e == "number" || t === "[object Number]" || typeof e == "string" || t === "[object String]" ? new Date(e) : /* @__PURE__ */ new Date(NaN);
}
function ot(e, t) {
  return e instanceof Date ? new e.constructor(t) : new Date(t);
}
function Ye(e, t) {
  const n = ye(e);
  return isNaN(t) ? ot(e, NaN) : (t && n.setDate(n.getDate() + t), n);
}
function kt(e, t) {
  const n = ye(e);
  if (isNaN(t)) return ot(e, NaN);
  if (!t)
    return n;
  const r = n.getDate(), o = ot(e, n.getTime());
  o.setMonth(n.getMonth() + t + 1, 0);
  const i = o.getDate();
  return r >= i ? o : (n.setFullYear(
    o.getFullYear(),
    o.getMonth(),
    r
  ), n);
}
const Ya = 6048e5, W3 = 864e5;
let H3 = {};
function Ur() {
  return H3;
}
function Ot(e, t) {
  var l, c, u, d;
  const n = Ur(), r = (t == null ? void 0 : t.weekStartsOn) ?? ((c = (l = t == null ? void 0 : t.locale) == null ? void 0 : l.options) == null ? void 0 : c.weekStartsOn) ?? n.weekStartsOn ?? ((d = (u = n.locale) == null ? void 0 : u.options) == null ? void 0 : d.weekStartsOn) ?? 0, o = ye(e), i = o.getDay(), s = (i < r ? 7 : 0) + i - r;
  return o.setDate(o.getDate() - s), o.setHours(0, 0, 0, 0), o;
}
function wn(e) {
  return Ot(e, { weekStartsOn: 1 });
}
function Q1(e) {
  const t = ye(e), n = t.getFullYear(), r = ot(e, 0);
  r.setFullYear(n + 1, 0, 4), r.setHours(0, 0, 0, 0);
  const o = wn(r), i = ot(e, 0);
  i.setFullYear(n, 0, 4), i.setHours(0, 0, 0, 0);
  const s = wn(i);
  return t.getTime() >= o.getTime() ? n + 1 : t.getTime() >= s.getTime() ? n : n - 1;
}
function Zn(e) {
  const t = ye(e);
  return t.setHours(0, 0, 0, 0), t;
}
function Bo(e) {
  const t = ye(e), n = new Date(
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
function Pt(e, t) {
  const n = Zn(e), r = Zn(t), o = +n - Bo(n), i = +r - Bo(r);
  return Math.round((o - i) / W3);
}
function U3(e) {
  const t = Q1(e), n = ot(e, 0);
  return n.setFullYear(t, 0, 4), n.setHours(0, 0, 0, 0), wn(n);
}
function Hs(e, t) {
  const n = t * 7;
  return Ye(e, n);
}
function z3(e, t) {
  return kt(e, t * 12);
}
function G3(e) {
  let t;
  return e.forEach(function(n) {
    const r = ye(n);
    (t === void 0 || t < r || isNaN(Number(r))) && (t = r);
  }), t || /* @__PURE__ */ new Date(NaN);
}
function K3(e) {
  let t;
  return e.forEach((n) => {
    const r = ye(n);
    (!t || t > r || isNaN(+r)) && (t = r);
  }), t || /* @__PURE__ */ new Date(NaN);
}
function Je(e, t) {
  const n = Zn(e), r = Zn(t);
  return +n == +r;
}
function Za(e) {
  return e instanceof Date || typeof e == "object" && Object.prototype.toString.call(e) === "[object Date]";
}
function Y3(e) {
  if (!Za(e) && typeof e != "number")
    return !1;
  const t = ye(e);
  return !isNaN(Number(t));
}
function Tr(e, t) {
  const n = ye(e), r = ye(t), o = n.getFullYear() - r.getFullYear(), i = n.getMonth() - r.getMonth();
  return o * 12 + i;
}
function Z3(e, t, n) {
  const r = Ot(e, n), o = Ot(t, n), i = +r - Bo(r), s = +o - Bo(o);
  return Math.round((i - s) / Ya);
}
function Xa(e) {
  const t = ye(e), n = t.getMonth();
  return t.setFullYear(t.getFullYear(), n + 1, 0), t.setHours(23, 59, 59, 999), t;
}
function et(e) {
  const t = ye(e);
  return t.setDate(1), t.setHours(0, 0, 0, 0), t;
}
function J1(e) {
  const t = ye(e), n = ot(e, 0);
  return n.setFullYear(t.getFullYear(), 0, 1), n.setHours(0, 0, 0, 0), n;
}
function qa(e, t) {
  var l, c, u, d;
  const n = Ur(), r = (t == null ? void 0 : t.weekStartsOn) ?? ((c = (l = t == null ? void 0 : t.locale) == null ? void 0 : l.options) == null ? void 0 : c.weekStartsOn) ?? n.weekStartsOn ?? ((d = (u = n.locale) == null ? void 0 : u.options) == null ? void 0 : d.weekStartsOn) ?? 0, o = ye(e), i = o.getDay(), s = (i < r ? -7 : 0) + 6 - (i - r);
  return o.setDate(o.getDate() + s), o.setHours(23, 59, 59, 999), o;
}
function eh(e) {
  return qa(e, { weekStartsOn: 1 });
}
const X3 = {
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
}, q3 = (e, t, n) => {
  let r;
  const o = X3[e];
  return typeof o == "string" ? r = o : t === 1 ? r = o.one : r = o.other.replace("{{count}}", t.toString()), n != null && n.addSuffix ? n.comparison && n.comparison > 0 ? "in " + r : r + " ago" : r;
};
function os(e) {
  return (t = {}) => {
    const n = t.width ? String(t.width) : e.defaultWidth;
    return e.formats[n] || e.formats[e.defaultWidth];
  };
}
const Q3 = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, J3 = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, e9 = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, t9 = {
  date: os({
    formats: Q3,
    defaultWidth: "full"
  }),
  time: os({
    formats: J3,
    defaultWidth: "full"
  }),
  dateTime: os({
    formats: e9,
    defaultWidth: "full"
  })
}, n9 = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, r9 = (e, t, n, r) => n9[e];
function ir(e) {
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
const o9 = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, i9 = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, s9 = {
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
}, a9 = {
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
}, l9 = {
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
}, c9 = {
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
}, u9 = (e, t) => {
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
}, d9 = {
  ordinalNumber: u9,
  era: ir({
    values: o9,
    defaultWidth: "wide"
  }),
  quarter: ir({
    values: i9,
    defaultWidth: "wide",
    argumentCallback: (e) => e - 1
  }),
  month: ir({
    values: s9,
    defaultWidth: "wide"
  }),
  day: ir({
    values: a9,
    defaultWidth: "wide"
  }),
  dayPeriod: ir({
    values: l9,
    defaultWidth: "wide",
    formattingValues: c9,
    defaultFormattingWidth: "wide"
  })
};
function sr(e) {
  return (t, n = {}) => {
    const r = n.width, o = r && e.matchPatterns[r] || e.matchPatterns[e.defaultMatchWidth], i = t.match(o);
    if (!i)
      return null;
    const s = i[0], l = r && e.parsePatterns[r] || e.parsePatterns[e.defaultParseWidth], c = Array.isArray(l) ? h9(l, (f) => f.test(s)) : (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any -- I challange you to fix the type
      f9(l, (f) => f.test(s))
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
function f9(e, t) {
  for (const n in e)
    if (Object.prototype.hasOwnProperty.call(e, n) && t(e[n]))
      return n;
}
function h9(e, t) {
  for (let n = 0; n < e.length; n++)
    if (t(e[n]))
      return n;
}
function p9(e) {
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
const m9 = /^(\d+)(th|st|nd|rd)?/i, g9 = /\d+/i, v9 = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, y9 = {
  any: [/^b/i, /^(a|c)/i]
}, b9 = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, w9 = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, C9 = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, x9 = {
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
}, k9 = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, S9 = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, M9 = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, E9 = {
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
}, L9 = {
  ordinalNumber: p9({
    matchPattern: m9,
    parsePattern: g9,
    valueCallback: (e) => parseInt(e, 10)
  }),
  era: sr({
    matchPatterns: v9,
    defaultMatchWidth: "wide",
    parsePatterns: y9,
    defaultParseWidth: "any"
  }),
  quarter: sr({
    matchPatterns: b9,
    defaultMatchWidth: "wide",
    parsePatterns: w9,
    defaultParseWidth: "any",
    valueCallback: (e) => e + 1
  }),
  month: sr({
    matchPatterns: C9,
    defaultMatchWidth: "wide",
    parsePatterns: x9,
    defaultParseWidth: "any"
  }),
  day: sr({
    matchPatterns: k9,
    defaultMatchWidth: "wide",
    parsePatterns: S9,
    defaultParseWidth: "any"
  }),
  dayPeriod: sr({
    matchPatterns: M9,
    defaultMatchWidth: "any",
    parsePatterns: E9,
    defaultParseWidth: "any"
  })
}, th = {
  code: "en-US",
  formatDistance: q3,
  formatLong: t9,
  formatRelative: r9,
  localize: d9,
  match: L9,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
function N9(e) {
  const t = ye(e);
  return Pt(t, J1(t)) + 1;
}
function nh(e) {
  const t = ye(e), n = +wn(t) - +U3(t);
  return Math.round(n / Ya) + 1;
}
function rh(e, t) {
  var d, f, h, g;
  const n = ye(e), r = n.getFullYear(), o = Ur(), i = (t == null ? void 0 : t.firstWeekContainsDate) ?? ((f = (d = t == null ? void 0 : t.locale) == null ? void 0 : d.options) == null ? void 0 : f.firstWeekContainsDate) ?? o.firstWeekContainsDate ?? ((g = (h = o.locale) == null ? void 0 : h.options) == null ? void 0 : g.firstWeekContainsDate) ?? 1, s = ot(e, 0);
  s.setFullYear(r + 1, 0, i), s.setHours(0, 0, 0, 0);
  const l = Ot(s, t), c = ot(e, 0);
  c.setFullYear(r, 0, i), c.setHours(0, 0, 0, 0);
  const u = Ot(c, t);
  return n.getTime() >= l.getTime() ? r + 1 : n.getTime() >= u.getTime() ? r : r - 1;
}
function P9(e, t) {
  var l, c, u, d;
  const n = Ur(), r = (t == null ? void 0 : t.firstWeekContainsDate) ?? ((c = (l = t == null ? void 0 : t.locale) == null ? void 0 : l.options) == null ? void 0 : c.firstWeekContainsDate) ?? n.firstWeekContainsDate ?? ((d = (u = n.locale) == null ? void 0 : u.options) == null ? void 0 : d.firstWeekContainsDate) ?? 1, o = rh(e, t), i = ot(e, 0);
  return i.setFullYear(o, 0, r), i.setHours(0, 0, 0, 0), Ot(i, t);
}
function oh(e, t) {
  const n = ye(e), r = +Ot(n, t) - +P9(n, t);
  return Math.round(r / Ya) + 1;
}
function we(e, t) {
  const n = e < 0 ? "-" : "", r = Math.abs(e).toString().padStart(t, "0");
  return n + r;
}
const tn = {
  // Year
  y(e, t) {
    const n = e.getFullYear(), r = n > 0 ? n : 1 - n;
    return we(t === "yy" ? r % 100 : r, t.length);
  },
  // Month
  M(e, t) {
    const n = e.getMonth();
    return t === "M" ? String(n + 1) : we(n + 1, 2);
  },
  // Day of the month
  d(e, t) {
    return we(e.getDate(), t.length);
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
    return we(e.getHours() % 12 || 12, t.length);
  },
  // Hour [0-23]
  H(e, t) {
    return we(e.getHours(), t.length);
  },
  // Minute
  m(e, t) {
    return we(e.getMinutes(), t.length);
  },
  // Second
  s(e, t) {
    return we(e.getSeconds(), t.length);
  },
  // Fraction of second
  S(e, t) {
    const n = t.length, r = e.getMilliseconds(), o = Math.trunc(
      r * Math.pow(10, n - 3)
    );
    return we(o, t.length);
  }
}, Pn = {
  am: "am",
  pm: "pm",
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
}, _u = {
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
    return tn.y(e, t);
  },
  // Local week-numbering year
  Y: function(e, t, n, r) {
    const o = rh(e, r), i = o > 0 ? o : 1 - o;
    if (t === "YY") {
      const s = i % 100;
      return we(s, 2);
    }
    return t === "Yo" ? n.ordinalNumber(i, { unit: "year" }) : we(i, t.length);
  },
  // ISO week-numbering year
  R: function(e, t) {
    const n = Q1(e);
    return we(n, t.length);
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
    return we(n, t.length);
  },
  // Quarter
  Q: function(e, t, n) {
    const r = Math.ceil((e.getMonth() + 1) / 3);
    switch (t) {
      case "Q":
        return String(r);
      case "QQ":
        return we(r, 2);
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
        return we(r, 2);
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
        return tn.M(e, t);
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
        return we(r + 1, 2);
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
    const o = oh(e, r);
    return t === "wo" ? n.ordinalNumber(o, { unit: "week" }) : we(o, t.length);
  },
  // ISO week of year
  I: function(e, t, n) {
    const r = nh(e);
    return t === "Io" ? n.ordinalNumber(r, { unit: "week" }) : we(r, t.length);
  },
  // Day of the month
  d: function(e, t, n) {
    return t === "do" ? n.ordinalNumber(e.getDate(), { unit: "date" }) : tn.d(e, t);
  },
  // Day of year
  D: function(e, t, n) {
    const r = N9(e);
    return t === "Do" ? n.ordinalNumber(r, { unit: "dayOfYear" }) : we(r, t.length);
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
        return we(i, 2);
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
        return we(i, t.length);
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
        return we(o, t.length);
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
    switch (r === 12 ? o = Pn.noon : r === 0 ? o = Pn.midnight : o = r / 12 >= 1 ? "pm" : "am", t) {
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
    switch (r >= 17 ? o = Pn.evening : r >= 12 ? o = Pn.afternoon : r >= 4 ? o = Pn.morning : o = Pn.night, t) {
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
    return tn.h(e, t);
  },
  // Hour [0-23]
  H: function(e, t, n) {
    return t === "Ho" ? n.ordinalNumber(e.getHours(), { unit: "hour" }) : tn.H(e, t);
  },
  // Hour [0-11]
  K: function(e, t, n) {
    const r = e.getHours() % 12;
    return t === "Ko" ? n.ordinalNumber(r, { unit: "hour" }) : we(r, t.length);
  },
  // Hour [1-24]
  k: function(e, t, n) {
    let r = e.getHours();
    return r === 0 && (r = 24), t === "ko" ? n.ordinalNumber(r, { unit: "hour" }) : we(r, t.length);
  },
  // Minute
  m: function(e, t, n) {
    return t === "mo" ? n.ordinalNumber(e.getMinutes(), { unit: "minute" }) : tn.m(e, t);
  },
  // Second
  s: function(e, t, n) {
    return t === "so" ? n.ordinalNumber(e.getSeconds(), { unit: "second" }) : tn.s(e, t);
  },
  // Fraction of second
  S: function(e, t) {
    return tn.S(e, t);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function(e, t, n) {
    const r = e.getTimezoneOffset();
    if (r === 0)
      return "Z";
    switch (t) {
      case "X":
        return Ou(r);
      case "XXXX":
      case "XX":
        return gn(r);
      case "XXXXX":
      case "XXX":
      default:
        return gn(r, ":");
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function(e, t, n) {
    const r = e.getTimezoneOffset();
    switch (t) {
      case "x":
        return Ou(r);
      case "xxxx":
      case "xx":
        return gn(r);
      case "xxxxx":
      case "xxx":
      default:
        return gn(r, ":");
    }
  },
  // Timezone (GMT)
  O: function(e, t, n) {
    const r = e.getTimezoneOffset();
    switch (t) {
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + Iu(r, ":");
      case "OOOO":
      default:
        return "GMT" + gn(r, ":");
    }
  },
  // Timezone (specific non-location)
  z: function(e, t, n) {
    const r = e.getTimezoneOffset();
    switch (t) {
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + Iu(r, ":");
      case "zzzz":
      default:
        return "GMT" + gn(r, ":");
    }
  },
  // Seconds timestamp
  t: function(e, t, n) {
    const r = Math.trunc(e.getTime() / 1e3);
    return we(r, t.length);
  },
  // Milliseconds timestamp
  T: function(e, t, n) {
    const r = e.getTime();
    return we(r, t.length);
  }
};
function Iu(e, t = "") {
  const n = e > 0 ? "-" : "+", r = Math.abs(e), o = Math.trunc(r / 60), i = r % 60;
  return i === 0 ? n + String(o) : n + String(o) + t + we(i, 2);
}
function Ou(e, t) {
  return e % 60 === 0 ? (e > 0 ? "-" : "+") + we(Math.abs(e) / 60, 2) : gn(e, t);
}
function gn(e, t = "") {
  const n = e > 0 ? "-" : "+", r = Math.abs(e), o = we(Math.trunc(r / 60), 2), i = we(r % 60, 2);
  return n + o + t + i;
}
const Vu = (e, t) => {
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
}, ih = (e, t) => {
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
}, T9 = (e, t) => {
  const n = e.match(/(P+)(p+)?/) || [], r = n[1], o = n[2];
  if (!o)
    return Vu(e, t);
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
  return i.replace("{{date}}", Vu(r, t)).replace("{{time}}", ih(o, t));
}, R9 = {
  p: ih,
  P: T9
}, A9 = /^D+$/, D9 = /^Y+$/, _9 = ["D", "DD", "YY", "YYYY"];
function I9(e) {
  return A9.test(e);
}
function O9(e) {
  return D9.test(e);
}
function V9(e, t, n) {
  const r = F9(e, t, n);
  if (console.warn(r), _9.includes(e)) throw new RangeError(r);
}
function F9(e, t, n) {
  const r = e[0] === "Y" ? "years" : "days of the month";
  return `Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
const B9 = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, j9 = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, $9 = /^'([^]*?)'?$/, W9 = /''/g, H9 = /[a-zA-Z]/;
function Sn(e, t, n) {
  var d, f, h, g, m, v, y, w;
  const r = Ur(), o = (n == null ? void 0 : n.locale) ?? r.locale ?? th, i = (n == null ? void 0 : n.firstWeekContainsDate) ?? ((f = (d = n == null ? void 0 : n.locale) == null ? void 0 : d.options) == null ? void 0 : f.firstWeekContainsDate) ?? r.firstWeekContainsDate ?? ((g = (h = r.locale) == null ? void 0 : h.options) == null ? void 0 : g.firstWeekContainsDate) ?? 1, s = (n == null ? void 0 : n.weekStartsOn) ?? ((v = (m = n == null ? void 0 : n.locale) == null ? void 0 : m.options) == null ? void 0 : v.weekStartsOn) ?? r.weekStartsOn ?? ((w = (y = r.locale) == null ? void 0 : y.options) == null ? void 0 : w.weekStartsOn) ?? 0, l = ye(e);
  if (!Y3(l))
    throw new RangeError("Invalid time value");
  let c = t.match(j9).map((b) => {
    const C = b[0];
    if (C === "p" || C === "P") {
      const E = R9[C];
      return E(b, o.formatLong);
    }
    return b;
  }).join("").match(B9).map((b) => {
    if (b === "''")
      return { isToken: !1, value: "'" };
    const C = b[0];
    if (C === "'")
      return { isToken: !1, value: U9(b) };
    if (_u[C])
      return { isToken: !0, value: b };
    if (C.match(H9))
      throw new RangeError(
        "Format string contains an unescaped latin alphabet character `" + C + "`"
      );
    return { isToken: !1, value: b };
  });
  o.localize.preprocessor && (c = o.localize.preprocessor(l, c));
  const u = {
    firstWeekContainsDate: i,
    weekStartsOn: s,
    locale: o
  };
  return c.map((b) => {
    if (!b.isToken) return b.value;
    const C = b.value;
    (!(n != null && n.useAdditionalWeekYearTokens) && O9(C) || !(n != null && n.useAdditionalDayOfYearTokens) && I9(C)) && V9(C, t, String(e));
    const E = _u[C[0]];
    return E(l, C, o.localize, u);
  }).join("");
}
function U9(e) {
  const t = e.match($9);
  return t ? t[1].replace(W9, "'") : e;
}
function z9(e) {
  const t = ye(e), n = t.getFullYear(), r = t.getMonth(), o = ot(e, 0);
  return o.setFullYear(n, r + 1, 0), o.setHours(0, 0, 0, 0), o.getDate();
}
function G9(e) {
  return Math.trunc(+ye(e) / 1e3);
}
function K9(e) {
  const t = ye(e), n = t.getMonth();
  return t.setFullYear(t.getFullYear(), n + 1, 0), t.setHours(0, 0, 0, 0), t;
}
function Y9(e, t) {
  return Z3(
    K9(e),
    et(e),
    t
  ) + 1;
}
function Us(e, t) {
  const n = ye(e), r = ye(t);
  return n.getTime() > r.getTime();
}
function sh(e, t) {
  const n = ye(e), r = ye(t);
  return +n < +r;
}
function Qa(e, t) {
  const n = ye(e), r = ye(t);
  return n.getFullYear() === r.getFullYear() && n.getMonth() === r.getMonth();
}
function Z9(e, t) {
  const n = ye(e), r = ye(t);
  return n.getFullYear() === r.getFullYear();
}
function is(e, t) {
  return Ye(e, -t);
}
function ss(e, t) {
  const n = ye(e), r = n.getFullYear(), o = n.getDate(), i = ot(e, 0);
  i.setFullYear(r, t, 15), i.setHours(0, 0, 0, 0);
  const s = z9(i);
  return n.setMonth(t, Math.min(o, s)), n;
}
function Fu(e, t) {
  const n = ye(e);
  return isNaN(+n) ? ot(e, NaN) : (n.setFullYear(t), n);
}
var pe = function() {
  return pe = Object.assign || function(t) {
    for (var n, r = 1, o = arguments.length; r < o; r++) {
      n = arguments[r];
      for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
    }
    return t;
  }, pe.apply(this, arguments);
};
function X9(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
}
function ah(e, t, n) {
  for (var r = 0, o = t.length, i; r < o; r++)
    (i || !(r in t)) && (i || (i = Array.prototype.slice.call(t, 0, r)), i[r] = t[r]);
  return e.concat(i || Array.prototype.slice.call(t));
}
function zr(e) {
  return e.mode === "multiple";
}
function Gr(e) {
  return e.mode === "range";
}
function vi(e) {
  return e.mode === "single";
}
var q9 = {
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
function Q9(e, t) {
  return Sn(e, "LLLL y", t);
}
function J9(e, t) {
  return Sn(e, "d", t);
}
function eC(e, t) {
  return Sn(e, "LLLL", t);
}
function tC(e) {
  return "".concat(e);
}
function nC(e, t) {
  return Sn(e, "cccccc", t);
}
function rC(e, t) {
  return Sn(e, "yyyy", t);
}
var oC = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  formatCaption: Q9,
  formatDay: J9,
  formatMonthCaption: eC,
  formatWeekNumber: tC,
  formatWeekdayName: nC,
  formatYearCaption: rC
}), iC = function(e, t, n) {
  return Sn(e, "do MMMM (EEEE)", n);
}, sC = function() {
  return "Month: ";
}, aC = function() {
  return "Go to next month";
}, lC = function() {
  return "Go to previous month";
}, cC = function(e, t) {
  return Sn(e, "cccc", t);
}, uC = function(e) {
  return "Week n. ".concat(e);
}, dC = function() {
  return "Year: ";
}, fC = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  labelDay: iC,
  labelMonthDropdown: sC,
  labelNext: aC,
  labelPrevious: lC,
  labelWeekNumber: uC,
  labelWeekday: cC,
  labelYearDropdown: dC
});
function hC() {
  var e = "buttons", t = q9, n = th, r = {}, o = {}, i = 1, s = {}, l = /* @__PURE__ */ new Date();
  return {
    captionLayout: e,
    classNames: t,
    formatters: oC,
    labels: fC,
    locale: n,
    modifiersClassNames: r,
    modifiers: o,
    numberOfMonths: i,
    styles: s,
    today: l,
    mode: "default"
  };
}
function pC(e) {
  var t = e.fromYear, n = e.toYear, r = e.fromMonth, o = e.toMonth, i = e.fromDate, s = e.toDate;
  return r ? i = et(r) : t && (i = new Date(t, 0, 1)), o ? s = Xa(o) : n && (s = new Date(n, 11, 31)), {
    fromDate: i ? Zn(i) : void 0,
    toDate: s ? Zn(s) : void 0
  };
}
var lh = tt(void 0);
function mC(e) {
  var t, n = e.initialProps, r = hC(), o = pC(n), i = o.fromDate, s = o.toDate, l = (t = n.captionLayout) !== null && t !== void 0 ? t : r.captionLayout;
  l !== "buttons" && (!i || !s) && (l = "buttons");
  var c;
  (vi(n) || zr(n) || Gr(n)) && (c = n.onSelect);
  var u = pe(pe(pe({}, r), n), { captionLayout: l, classNames: pe(pe({}, r.classNames), n.classNames), components: pe({}, n.components), formatters: pe(pe({}, r.formatters), n.formatters), fromDate: i, labels: pe(pe({}, r.labels), n.labels), mode: n.mode || r.mode, modifiers: pe(pe({}, r.modifiers), n.modifiers), modifiersClassNames: pe(pe({}, r.modifiersClassNames), n.modifiersClassNames), onSelect: c, styles: pe(pe({}, r.styles), n.styles), toDate: s });
  return a(lh.Provider, { value: u, children: e.children });
}
function Me() {
  var e = Se(lh);
  if (!e)
    throw new Error("useDayPicker must be used within a DayPickerProvider.");
  return e;
}
function ch(e) {
  var t = Me(), n = t.locale, r = t.classNames, o = t.styles, i = t.formatters.formatCaption;
  return a("div", { className: r.caption_label, style: o.caption_label, "aria-live": "polite", role: "presentation", id: e.id, children: i(e.displayMonth, { locale: n }) });
}
function gC(e) {
  return a("svg", pe({ width: "8px", height: "8px", viewBox: "0 0 120 120", "data-testid": "iconDropdown" }, e, { children: a("path", { d: "M4.22182541,48.2218254 C8.44222828,44.0014225 15.2388494,43.9273804 19.5496459,47.9996989 L19.7781746,48.2218254 L60,88.443 L100.221825,48.2218254 C104.442228,44.0014225 111.238849,43.9273804 115.549646,47.9996989 L115.778175,48.2218254 C119.998577,52.4422283 120.07262,59.2388494 116.000301,63.5496459 L115.778175,63.7781746 L67.7781746,111.778175 C63.5577717,115.998577 56.7611506,116.07262 52.4503541,112.000301 L52.2218254,111.778175 L4.22182541,63.7781746 C-0.0739418023,59.4824074 -0.0739418023,52.5175926 4.22182541,48.2218254 Z", fill: "currentColor", fillRule: "nonzero" }) }));
}
function uh(e) {
  var t, n, r = e.onChange, o = e.value, i = e.children, s = e.caption, l = e.className, c = e.style, u = Me(), d = (n = (t = u.components) === null || t === void 0 ? void 0 : t.IconDropdown) !== null && n !== void 0 ? n : gC;
  return x("div", { className: l, style: c, children: [a("span", { className: u.classNames.vhidden, children: e["aria-label"] }), a("select", { name: e.name, "aria-label": e["aria-label"], className: u.classNames.dropdown, style: u.styles.dropdown, value: o, onChange: r, children: i }), x("div", { className: u.classNames.caption_label, style: u.styles.caption_label, "aria-hidden": "true", children: [s, a(d, { className: u.classNames.dropdown_icon, style: u.styles.dropdown_icon })] })] });
}
function vC(e) {
  var t, n = Me(), r = n.fromDate, o = n.toDate, i = n.styles, s = n.locale, l = n.formatters.formatMonthCaption, c = n.classNames, u = n.components, d = n.labels.labelMonthDropdown;
  if (!r)
    return a(Ce, {});
  if (!o)
    return a(Ce, {});
  var f = [];
  if (Z9(r, o))
    for (var h = et(r), g = r.getMonth(); g <= o.getMonth(); g++)
      f.push(ss(h, g));
  else
    for (var h = et(/* @__PURE__ */ new Date()), g = 0; g <= 11; g++)
      f.push(ss(h, g));
  var m = function(y) {
    var w = Number(y.target.value), b = ss(et(e.displayMonth), w);
    e.onChange(b);
  }, v = (t = u == null ? void 0 : u.Dropdown) !== null && t !== void 0 ? t : uh;
  return a(v, { name: "months", "aria-label": d(), className: c.dropdown_month, style: i.dropdown_month, onChange: m, value: e.displayMonth.getMonth(), caption: l(e.displayMonth, { locale: s }), children: f.map(function(y) {
    return a("option", { value: y.getMonth(), children: l(y, { locale: s }) }, y.getMonth());
  }) });
}
function yC(e) {
  var t, n = e.displayMonth, r = Me(), o = r.fromDate, i = r.toDate, s = r.locale, l = r.styles, c = r.classNames, u = r.components, d = r.formatters.formatYearCaption, f = r.labels.labelYearDropdown, h = [];
  if (!o)
    return a(Ce, {});
  if (!i)
    return a(Ce, {});
  for (var g = o.getFullYear(), m = i.getFullYear(), v = g; v <= m; v++)
    h.push(Fu(J1(/* @__PURE__ */ new Date()), v));
  var y = function(b) {
    var C = Fu(et(n), Number(b.target.value));
    e.onChange(C);
  }, w = (t = u == null ? void 0 : u.Dropdown) !== null && t !== void 0 ? t : uh;
  return a(w, { name: "years", "aria-label": f(), className: c.dropdown_year, style: l.dropdown_year, onChange: y, value: n.getFullYear(), caption: d(n, { locale: s }), children: h.map(function(b) {
    return a("option", { value: b.getFullYear(), children: d(b, { locale: s }) }, b.getFullYear());
  }) });
}
function bC(e, t) {
  var n = Ae(e), r = n[0], o = n[1], i = t === void 0 ? r : t;
  return [i, o];
}
function wC(e) {
  var t = e.month, n = e.defaultMonth, r = e.today, o = t || n || r || /* @__PURE__ */ new Date(), i = e.toDate, s = e.fromDate, l = e.numberOfMonths, c = l === void 0 ? 1 : l;
  if (i && Tr(i, o) < 0) {
    var u = -1 * (c - 1);
    o = kt(i, u);
  }
  return s && Tr(o, s) < 0 && (o = s), et(o);
}
function CC() {
  var e = Me(), t = wC(e), n = bC(t, e.month), r = n[0], o = n[1], i = function(s) {
    var l;
    if (!e.disableNavigation) {
      var c = et(s);
      o(c), (l = e.onMonthChange) === null || l === void 0 || l.call(e, c);
    }
  };
  return [r, i];
}
function xC(e, t) {
  for (var n = t.reverseMonths, r = t.numberOfMonths, o = et(e), i = et(kt(o, r)), s = Tr(i, o), l = [], c = 0; c < s; c++) {
    var u = kt(o, c);
    l.push(u);
  }
  return n && (l = l.reverse()), l;
}
function kC(e, t) {
  if (!t.disableNavigation) {
    var n = t.toDate, r = t.pagedNavigation, o = t.numberOfMonths, i = o === void 0 ? 1 : o, s = r ? i : 1, l = et(e);
    if (!n)
      return kt(l, s);
    var c = Tr(n, e);
    if (!(c < i))
      return kt(l, s);
  }
}
function SC(e, t) {
  if (!t.disableNavigation) {
    var n = t.fromDate, r = t.pagedNavigation, o = t.numberOfMonths, i = o === void 0 ? 1 : o, s = r ? i : 1, l = et(e);
    if (!n)
      return kt(l, -s);
    var c = Tr(l, n);
    if (!(c <= 0))
      return kt(l, -s);
  }
}
var dh = tt(void 0);
function MC(e) {
  var t = Me(), n = CC(), r = n[0], o = n[1], i = xC(r, t), s = kC(r, t), l = SC(r, t), c = function(f) {
    return i.some(function(h) {
      return Qa(f, h);
    });
  }, u = function(f, h) {
    c(f) || (h && sh(f, h) ? o(kt(f, 1 + t.numberOfMonths * -1)) : o(f));
  }, d = {
    currentMonth: r,
    displayMonths: i,
    goToMonth: o,
    goToDate: u,
    previousMonth: l,
    nextMonth: s,
    isDateDisplayed: c
  };
  return a(dh.Provider, { value: d, children: e.children });
}
function Kr() {
  var e = Se(dh);
  if (!e)
    throw new Error("useNavigation must be used within a NavigationProvider");
  return e;
}
function Bu(e) {
  var t, n = Me(), r = n.classNames, o = n.styles, i = n.components, s = Kr().goToMonth, l = function(d) {
    s(kt(d, e.displayIndex ? -e.displayIndex : 0));
  }, c = (t = i == null ? void 0 : i.CaptionLabel) !== null && t !== void 0 ? t : ch, u = a(c, { id: e.id, displayMonth: e.displayMonth });
  return x("div", { className: r.caption_dropdowns, style: o.caption_dropdowns, children: [a("div", { className: r.vhidden, children: u }), a(vC, { onChange: l, displayMonth: e.displayMonth }), a(yC, { onChange: l, displayMonth: e.displayMonth })] });
}
function EC(e) {
  return a("svg", pe({ width: "16px", height: "16px", viewBox: "0 0 120 120" }, e, { children: a("path", { d: "M69.490332,3.34314575 C72.6145263,0.218951416 77.6798462,0.218951416 80.8040405,3.34314575 C83.8617626,6.40086786 83.9268205,11.3179931 80.9992143,14.4548388 L80.8040405,14.6568542 L35.461,60 L80.8040405,105.343146 C83.8617626,108.400868 83.9268205,113.317993 80.9992143,116.454839 L80.8040405,116.656854 C77.7463184,119.714576 72.8291931,119.779634 69.6923475,116.852028 L69.490332,116.656854 L18.490332,65.6568542 C15.4326099,62.5991321 15.367552,57.6820069 18.2951583,54.5451612 L18.490332,54.3431458 L69.490332,3.34314575 Z", fill: "currentColor", fillRule: "nonzero" }) }));
}
function LC(e) {
  return a("svg", pe({ width: "16px", height: "16px", viewBox: "0 0 120 120" }, e, { children: a("path", { d: "M49.8040405,3.34314575 C46.6798462,0.218951416 41.6145263,0.218951416 38.490332,3.34314575 C35.4326099,6.40086786 35.367552,11.3179931 38.2951583,14.4548388 L38.490332,14.6568542 L83.8333725,60 L38.490332,105.343146 C35.4326099,108.400868 35.367552,113.317993 38.2951583,116.454839 L38.490332,116.656854 C41.5480541,119.714576 46.4651794,119.779634 49.602025,116.852028 L49.8040405,116.656854 L100.804041,65.6568542 C103.861763,62.5991321 103.926821,57.6820069 100.999214,54.5451612 L100.804041,54.3431458 L49.8040405,3.34314575 Z", fill: "currentColor" }) }));
}
var jo = P(function(e, t) {
  var n = Me(), r = n.classNames, o = n.styles, i = [r.button_reset, r.button];
  e.className && i.push(e.className);
  var s = i.join(" "), l = pe(pe({}, o.button_reset), o.button);
  return e.style && Object.assign(l, e.style), a("button", pe({}, e, { ref: t, type: "button", className: s, style: l }));
});
function NC(e) {
  var t, n, r = Me(), o = r.dir, i = r.locale, s = r.classNames, l = r.styles, c = r.labels, u = c.labelPrevious, d = c.labelNext, f = r.components;
  if (!e.nextMonth && !e.previousMonth)
    return a(Ce, {});
  var h = u(e.previousMonth, { locale: i }), g = [
    s.nav_button,
    s.nav_button_previous
  ].join(" "), m = d(e.nextMonth, { locale: i }), v = [
    s.nav_button,
    s.nav_button_next
  ].join(" "), y = (t = f == null ? void 0 : f.IconRight) !== null && t !== void 0 ? t : LC, w = (n = f == null ? void 0 : f.IconLeft) !== null && n !== void 0 ? n : EC;
  return x("div", { className: s.nav, style: l.nav, children: [!e.hidePrevious && a(jo, { name: "previous-month", "aria-label": h, className: g, style: l.nav_button_previous, disabled: !e.previousMonth, onClick: e.onPreviousClick, children: o === "rtl" ? a(y, { className: s.nav_icon, style: l.nav_icon }) : a(w, { className: s.nav_icon, style: l.nav_icon }) }), !e.hideNext && a(jo, { name: "next-month", "aria-label": m, className: v, style: l.nav_button_next, disabled: !e.nextMonth, onClick: e.onNextClick, children: o === "rtl" ? a(w, { className: s.nav_icon, style: l.nav_icon }) : a(y, { className: s.nav_icon, style: l.nav_icon }) })] });
}
function ju(e) {
  var t = Me().numberOfMonths, n = Kr(), r = n.previousMonth, o = n.nextMonth, i = n.goToMonth, s = n.displayMonths, l = s.findIndex(function(m) {
    return Qa(e.displayMonth, m);
  }), c = l === 0, u = l === s.length - 1, d = t > 1 && (c || !u), f = t > 1 && (u || !c), h = function() {
    r && i(r);
  }, g = function() {
    o && i(o);
  };
  return a(NC, { displayMonth: e.displayMonth, hideNext: d, hidePrevious: f, nextMonth: o, previousMonth: r, onPreviousClick: h, onNextClick: g });
}
function PC(e) {
  var t, n = Me(), r = n.classNames, o = n.disableNavigation, i = n.styles, s = n.captionLayout, l = n.components, c = (t = l == null ? void 0 : l.CaptionLabel) !== null && t !== void 0 ? t : ch, u;
  return o ? u = a(c, { id: e.id, displayMonth: e.displayMonth }) : s === "dropdown" ? u = a(Bu, { displayMonth: e.displayMonth, id: e.id }) : s === "dropdown-buttons" ? u = x(Ce, { children: [a(Bu, { displayMonth: e.displayMonth, displayIndex: e.displayIndex, id: e.id }), a(ju, { displayMonth: e.displayMonth, displayIndex: e.displayIndex, id: e.id })] }) : u = x(Ce, { children: [a(c, { id: e.id, displayMonth: e.displayMonth, displayIndex: e.displayIndex }), a(ju, { displayMonth: e.displayMonth, id: e.id })] }), a("div", { className: r.caption, style: i.caption, children: u });
}
function TC(e) {
  var t = Me(), n = t.footer, r = t.styles, o = t.classNames.tfoot;
  return n ? a("tfoot", { className: o, style: r.tfoot, children: a("tr", { children: a("td", { colSpan: 8, children: n }) }) }) : a(Ce, {});
}
function RC(e, t, n) {
  for (var r = n ? wn(/* @__PURE__ */ new Date()) : Ot(/* @__PURE__ */ new Date(), { locale: e, weekStartsOn: t }), o = [], i = 0; i < 7; i++) {
    var s = Ye(r, i);
    o.push(s);
  }
  return o;
}
function AC() {
  var e = Me(), t = e.classNames, n = e.styles, r = e.showWeekNumber, o = e.locale, i = e.weekStartsOn, s = e.ISOWeek, l = e.formatters.formatWeekdayName, c = e.labels.labelWeekday, u = RC(o, i, s);
  return x("tr", { style: n.head_row, className: t.head_row, children: [r && a("td", { style: n.head_cell, className: t.head_cell }), u.map(function(d, f) {
    return a("th", { scope: "col", className: t.head_cell, style: n.head_cell, "aria-label": c(d, { locale: o }), children: l(d, { locale: o }) }, f);
  })] });
}
function DC() {
  var e, t = Me(), n = t.classNames, r = t.styles, o = t.components, i = (e = o == null ? void 0 : o.HeadRow) !== null && e !== void 0 ? e : AC;
  return a("thead", { style: r.head, className: n.head, children: a(i, {}) });
}
function _C(e) {
  var t = Me(), n = t.locale, r = t.formatters.formatDay;
  return a(Ce, { children: r(e.date, { locale: n }) });
}
var Ja = tt(void 0);
function IC(e) {
  if (!zr(e.initialProps)) {
    var t = {
      selected: void 0,
      modifiers: {
        disabled: []
      }
    };
    return a(Ja.Provider, { value: t, children: e.children });
  }
  return a(OC, { initialProps: e.initialProps, children: e.children });
}
function OC(e) {
  var t = e.initialProps, n = e.children, r = t.selected, o = t.min, i = t.max, s = function(u, d, f) {
    var h, g;
    (h = t.onDayClick) === null || h === void 0 || h.call(t, u, d, f);
    var m = !!(d.selected && o && (r == null ? void 0 : r.length) === o);
    if (!m) {
      var v = !!(!d.selected && i && (r == null ? void 0 : r.length) === i);
      if (!v) {
        var y = r ? ah([], r) : [];
        if (d.selected) {
          var w = y.findIndex(function(b) {
            return Je(u, b);
          });
          y.splice(w, 1);
        } else
          y.push(u);
        (g = t.onSelect) === null || g === void 0 || g.call(t, y, u, d, f);
      }
    }
  }, l = {
    disabled: []
  };
  r && l.disabled.push(function(u) {
    var d = i && r.length > i - 1, f = r.some(function(h) {
      return Je(h, u);
    });
    return !!(d && !f);
  });
  var c = {
    selected: r,
    onDayClick: s,
    modifiers: l
  };
  return a(Ja.Provider, { value: c, children: n });
}
function el() {
  var e = Se(Ja);
  if (!e)
    throw new Error("useSelectMultiple must be used within a SelectMultipleProvider");
  return e;
}
function VC(e, t) {
  var n = t || {}, r = n.from, o = n.to;
  return r && o ? Je(o, e) && Je(r, e) ? void 0 : Je(o, e) ? { from: o, to: void 0 } : Je(r, e) ? void 0 : Us(r, e) ? { from: e, to: o } : { from: r, to: e } : o ? Us(e, o) ? { from: o, to: e } : { from: e, to: o } : r ? sh(e, r) ? { from: e, to: r } : { from: r, to: e } : { from: e, to: void 0 };
}
var tl = tt(void 0);
function FC(e) {
  if (!Gr(e.initialProps)) {
    var t = {
      selected: void 0,
      modifiers: {
        range_start: [],
        range_end: [],
        range_middle: [],
        disabled: []
      }
    };
    return a(tl.Provider, { value: t, children: e.children });
  }
  return a(BC, { initialProps: e.initialProps, children: e.children });
}
function BC(e) {
  var t = e.initialProps, n = e.children, r = t.selected, o = r || {}, i = o.from, s = o.to, l = t.min, c = t.max, u = function(g, m, v) {
    var y, w;
    (y = t.onDayClick) === null || y === void 0 || y.call(t, g, m, v);
    var b = VC(g, r);
    (w = t.onSelect) === null || w === void 0 || w.call(t, b, g, m, v);
  }, d = {
    range_start: [],
    range_end: [],
    range_middle: [],
    disabled: []
  };
  if (i ? (d.range_start = [i], s ? (d.range_end = [s], Je(i, s) || (d.range_middle = [
    {
      after: i,
      before: s
    }
  ])) : d.range_end = [i]) : s && (d.range_start = [s], d.range_end = [s]), l && (i && !s && d.disabled.push({
    after: is(i, l - 1),
    before: Ye(i, l - 1)
  }), i && s && d.disabled.push({
    after: i,
    before: Ye(i, l - 1)
  }), !i && s && d.disabled.push({
    after: is(s, l - 1),
    before: Ye(s, l - 1)
  })), c) {
    if (i && !s && (d.disabled.push({
      before: Ye(i, -c + 1)
    }), d.disabled.push({
      after: Ye(i, c - 1)
    })), i && s) {
      var f = Pt(s, i) + 1, h = c - f;
      d.disabled.push({
        before: is(i, h)
      }), d.disabled.push({
        after: Ye(s, h)
      });
    }
    !i && s && (d.disabled.push({
      before: Ye(s, -c + 1)
    }), d.disabled.push({
      after: Ye(s, c - 1)
    }));
  }
  return a(tl.Provider, { value: { selected: r, onDayClick: u, modifiers: d }, children: n });
}
function nl() {
  var e = Se(tl);
  if (!e)
    throw new Error("useSelectRange must be used within a SelectRangeProvider");
  return e;
}
function xo(e) {
  return Array.isArray(e) ? ah([], e) : e !== void 0 ? [e] : [];
}
function jC(e) {
  var t = {};
  return Object.entries(e).forEach(function(n) {
    var r = n[0], o = n[1];
    t[r] = xo(o);
  }), t;
}
var St;
(function(e) {
  e.Outside = "outside", e.Disabled = "disabled", e.Selected = "selected", e.Hidden = "hidden", e.Today = "today", e.RangeStart = "range_start", e.RangeEnd = "range_end", e.RangeMiddle = "range_middle";
})(St || (St = {}));
var $C = St.Selected, jt = St.Disabled, WC = St.Hidden, HC = St.Today, as = St.RangeEnd, ls = St.RangeMiddle, cs = St.RangeStart, UC = St.Outside;
function zC(e, t, n) {
  var r, o = (r = {}, r[$C] = xo(e.selected), r[jt] = xo(e.disabled), r[WC] = xo(e.hidden), r[HC] = [e.today], r[as] = [], r[ls] = [], r[cs] = [], r[UC] = [], r);
  return e.fromDate && o[jt].push({ before: e.fromDate }), e.toDate && o[jt].push({ after: e.toDate }), zr(e) ? o[jt] = o[jt].concat(t.modifiers[jt]) : Gr(e) && (o[jt] = o[jt].concat(n.modifiers[jt]), o[cs] = n.modifiers[cs], o[ls] = n.modifiers[ls], o[as] = n.modifiers[as]), o;
}
var fh = tt(void 0);
function GC(e) {
  var t = Me(), n = el(), r = nl(), o = zC(t, n, r), i = jC(t.modifiers), s = pe(pe({}, o), i);
  return a(fh.Provider, { value: s, children: e.children });
}
function hh() {
  var e = Se(fh);
  if (!e)
    throw new Error("useModifiers must be used within a ModifiersProvider");
  return e;
}
function KC(e) {
  return !!(e && typeof e == "object" && "before" in e && "after" in e);
}
function YC(e) {
  return !!(e && typeof e == "object" && "from" in e);
}
function ZC(e) {
  return !!(e && typeof e == "object" && "after" in e);
}
function XC(e) {
  return !!(e && typeof e == "object" && "before" in e);
}
function qC(e) {
  return !!(e && typeof e == "object" && "dayOfWeek" in e);
}
function QC(e, t) {
  var n, r = t.from, o = t.to;
  if (r && o) {
    var i = Pt(o, r) < 0;
    i && (n = [o, r], r = n[0], o = n[1]);
    var s = Pt(e, r) >= 0 && Pt(o, e) >= 0;
    return s;
  }
  return o ? Je(o, e) : r ? Je(r, e) : !1;
}
function JC(e) {
  return Za(e);
}
function e8(e) {
  return Array.isArray(e) && e.every(Za);
}
function t8(e, t) {
  return t.some(function(n) {
    if (typeof n == "boolean")
      return n;
    if (JC(n))
      return Je(e, n);
    if (e8(n))
      return n.includes(e);
    if (YC(n))
      return QC(e, n);
    if (qC(n))
      return n.dayOfWeek.includes(e.getDay());
    if (KC(n)) {
      var r = Pt(n.before, e), o = Pt(n.after, e), i = r > 0, s = o < 0, l = Us(n.before, n.after);
      return l ? s && i : i || s;
    }
    return ZC(n) ? Pt(e, n.after) > 0 : XC(n) ? Pt(n.before, e) > 0 : typeof n == "function" ? n(e) : !1;
  });
}
function rl(e, t, n) {
  var r = Object.keys(t).reduce(function(i, s) {
    var l = t[s];
    return t8(e, l) && i.push(s), i;
  }, []), o = {};
  return r.forEach(function(i) {
    return o[i] = !0;
  }), n && !Qa(e, n) && (o.outside = !0), o;
}
function n8(e, t) {
  for (var n = et(e[0]), r = Xa(e[e.length - 1]), o, i, s = n; s <= r; ) {
    var l = rl(s, t), c = !l.disabled && !l.hidden;
    if (!c) {
      s = Ye(s, 1);
      continue;
    }
    if (l.selected)
      return s;
    l.today && !i && (i = s), o || (o = s), s = Ye(s, 1);
  }
  return i || o;
}
var r8 = 365;
function ph(e, t) {
  var n = t.moveBy, r = t.direction, o = t.context, i = t.modifiers, s = t.retry, l = s === void 0 ? { count: 0, lastFocused: e } : s, c = o.weekStartsOn, u = o.fromDate, d = o.toDate, f = o.locale, h = {
    day: Ye,
    week: Hs,
    month: kt,
    year: z3,
    startOfWeek: function(y) {
      return o.ISOWeek ? wn(y) : Ot(y, { locale: f, weekStartsOn: c });
    },
    endOfWeek: function(y) {
      return o.ISOWeek ? eh(y) : qa(y, { locale: f, weekStartsOn: c });
    }
  }, g = h[n](e, r === "after" ? 1 : -1);
  r === "before" && u ? g = G3([u, g]) : r === "after" && d && (g = K3([d, g]));
  var m = !0;
  if (i) {
    var v = rl(g, i);
    m = !v.disabled && !v.hidden;
  }
  return m ? g : l.count > r8 ? l.lastFocused : ph(g, {
    moveBy: n,
    direction: r,
    context: o,
    modifiers: i,
    retry: pe(pe({}, l), { count: l.count + 1 })
  });
}
var mh = tt(void 0);
function o8(e) {
  var t = Kr(), n = hh(), r = Ae(), o = r[0], i = r[1], s = Ae(), l = s[0], c = s[1], u = n8(t.displayMonths, n), d = o ?? (l && t.isDateDisplayed(l)) ? l : u, f = function() {
    c(o), i(void 0);
  }, h = function(y) {
    i(y);
  }, g = Me(), m = function(y, w) {
    if (o) {
      var b = ph(o, {
        moveBy: y,
        direction: w,
        context: g,
        modifiers: n
      });
      Je(o, b) || (t.goToDate(b, o), h(b));
    }
  }, v = {
    focusedDay: o,
    focusTarget: d,
    blur: f,
    focus: h,
    focusDayAfter: function() {
      return m("day", "after");
    },
    focusDayBefore: function() {
      return m("day", "before");
    },
    focusWeekAfter: function() {
      return m("week", "after");
    },
    focusWeekBefore: function() {
      return m("week", "before");
    },
    focusMonthBefore: function() {
      return m("month", "before");
    },
    focusMonthAfter: function() {
      return m("month", "after");
    },
    focusYearBefore: function() {
      return m("year", "before");
    },
    focusYearAfter: function() {
      return m("year", "after");
    },
    focusStartOfWeek: function() {
      return m("startOfWeek", "before");
    },
    focusEndOfWeek: function() {
      return m("endOfWeek", "after");
    }
  };
  return a(mh.Provider, { value: v, children: e.children });
}
function ol() {
  var e = Se(mh);
  if (!e)
    throw new Error("useFocusContext must be used within a FocusProvider");
  return e;
}
function i8(e, t) {
  var n = hh(), r = rl(e, n, t);
  return r;
}
var il = tt(void 0);
function s8(e) {
  if (!vi(e.initialProps)) {
    var t = {
      selected: void 0
    };
    return a(il.Provider, { value: t, children: e.children });
  }
  return a(a8, { initialProps: e.initialProps, children: e.children });
}
function a8(e) {
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
  return a(il.Provider, { value: o, children: n });
}
function gh() {
  var e = Se(il);
  if (!e)
    throw new Error("useSelectSingle must be used within a SelectSingleProvider");
  return e;
}
function l8(e, t) {
  var n = Me(), r = gh(), o = el(), i = nl(), s = ol(), l = s.focusDayAfter, c = s.focusDayBefore, u = s.focusWeekAfter, d = s.focusWeekBefore, f = s.blur, h = s.focus, g = s.focusMonthBefore, m = s.focusMonthAfter, v = s.focusYearBefore, y = s.focusYearAfter, w = s.focusStartOfWeek, b = s.focusEndOfWeek, C = function(B) {
    var $, G, M, S;
    vi(n) ? ($ = r.onDayClick) === null || $ === void 0 || $.call(r, e, t, B) : zr(n) ? (G = o.onDayClick) === null || G === void 0 || G.call(o, e, t, B) : Gr(n) ? (M = i.onDayClick) === null || M === void 0 || M.call(i, e, t, B) : (S = n.onDayClick) === null || S === void 0 || S.call(n, e, t, B);
  }, E = function(B) {
    var $;
    h(e), ($ = n.onDayFocus) === null || $ === void 0 || $.call(n, e, t, B);
  }, L = function(B) {
    var $;
    f(), ($ = n.onDayBlur) === null || $ === void 0 || $.call(n, e, t, B);
  }, _ = function(B) {
    var $;
    ($ = n.onDayMouseEnter) === null || $ === void 0 || $.call(n, e, t, B);
  }, F = function(B) {
    var $;
    ($ = n.onDayMouseLeave) === null || $ === void 0 || $.call(n, e, t, B);
  }, R = function(B) {
    var $;
    ($ = n.onDayPointerEnter) === null || $ === void 0 || $.call(n, e, t, B);
  }, D = function(B) {
    var $;
    ($ = n.onDayPointerLeave) === null || $ === void 0 || $.call(n, e, t, B);
  }, H = function(B) {
    var $;
    ($ = n.onDayTouchCancel) === null || $ === void 0 || $.call(n, e, t, B);
  }, J = function(B) {
    var $;
    ($ = n.onDayTouchEnd) === null || $ === void 0 || $.call(n, e, t, B);
  }, K = function(B) {
    var $;
    ($ = n.onDayTouchMove) === null || $ === void 0 || $.call(n, e, t, B);
  }, W = function(B) {
    var $;
    ($ = n.onDayTouchStart) === null || $ === void 0 || $.call(n, e, t, B);
  }, I = function(B) {
    var $;
    ($ = n.onDayKeyUp) === null || $ === void 0 || $.call(n, e, t, B);
  }, O = function(B) {
    var $;
    switch (B.key) {
      case "ArrowLeft":
        B.preventDefault(), B.stopPropagation(), n.dir === "rtl" ? l() : c();
        break;
      case "ArrowRight":
        B.preventDefault(), B.stopPropagation(), n.dir === "rtl" ? c() : l();
        break;
      case "ArrowDown":
        B.preventDefault(), B.stopPropagation(), u();
        break;
      case "ArrowUp":
        B.preventDefault(), B.stopPropagation(), d();
        break;
      case "PageUp":
        B.preventDefault(), B.stopPropagation(), B.shiftKey ? v() : g();
        break;
      case "PageDown":
        B.preventDefault(), B.stopPropagation(), B.shiftKey ? y() : m();
        break;
      case "Home":
        B.preventDefault(), B.stopPropagation(), w();
        break;
      case "End":
        B.preventDefault(), B.stopPropagation(), b();
        break;
    }
    ($ = n.onDayKeyDown) === null || $ === void 0 || $.call(n, e, t, B);
  }, z = {
    onClick: C,
    onFocus: E,
    onBlur: L,
    onKeyDown: O,
    onKeyUp: I,
    onMouseEnter: _,
    onMouseLeave: F,
    onPointerEnter: R,
    onPointerLeave: D,
    onTouchCancel: H,
    onTouchEnd: J,
    onTouchMove: K,
    onTouchStart: W
  };
  return z;
}
function c8() {
  var e = Me(), t = gh(), n = el(), r = nl(), o = vi(e) ? t.selected : zr(e) ? n.selected : Gr(e) ? r.selected : void 0;
  return o;
}
function u8(e) {
  return Object.values(St).includes(e);
}
function d8(e, t) {
  var n = [e.classNames.day];
  return Object.keys(t).forEach(function(r) {
    var o = e.modifiersClassNames[r];
    if (o)
      n.push(o);
    else if (u8(r)) {
      var i = e.classNames["day_".concat(r)];
      i && n.push(i);
    }
  }), n;
}
function f8(e, t) {
  var n = pe({}, e.styles.day);
  return Object.keys(t).forEach(function(r) {
    var o;
    n = pe(pe({}, n), (o = e.modifiersStyles) === null || o === void 0 ? void 0 : o[r]);
  }), n;
}
function h8(e, t, n) {
  var r, o, i, s = Me(), l = ol(), c = i8(e, t), u = l8(e, c), d = c8(), f = !!(s.onDayClick || s.mode !== "default");
  Oe(function() {
    var _;
    c.outside || l.focusedDay && f && Je(l.focusedDay, e) && ((_ = n.current) === null || _ === void 0 || _.focus());
  }, [
    l.focusedDay,
    e,
    n,
    f,
    c.outside
  ]);
  var h = d8(s, c).join(" "), g = f8(s, c), m = !!(c.outside && !s.showOutsideDays || c.hidden), v = (i = (o = s.components) === null || o === void 0 ? void 0 : o.DayContent) !== null && i !== void 0 ? i : _C, y = a(v, { date: e, displayMonth: t, activeModifiers: c }), w = {
    style: g,
    className: h,
    children: y,
    role: "gridcell"
  }, b = l.focusTarget && Je(l.focusTarget, e) && !c.outside, C = l.focusedDay && Je(l.focusedDay, e), E = pe(pe(pe({}, w), (r = { disabled: c.disabled, role: "gridcell" }, r["aria-selected"] = c.selected, r.tabIndex = C || b ? 0 : -1, r)), u), L = {
    isButton: f,
    isHidden: m,
    activeModifiers: c,
    selectedDays: d,
    buttonProps: E,
    divProps: w
  };
  return L;
}
function p8(e) {
  var t = je(null), n = h8(e.date, e.displayMonth, t);
  return n.isHidden ? a("div", { role: "gridcell" }) : n.isButton ? a(jo, pe({ name: "day", ref: t }, n.buttonProps)) : a("div", pe({}, n.divProps));
}
function m8(e) {
  var t = e.number, n = e.dates, r = Me(), o = r.onWeekNumberClick, i = r.styles, s = r.classNames, l = r.locale, c = r.labels.labelWeekNumber, u = r.formatters.formatWeekNumber, d = u(Number(t), { locale: l });
  if (!o)
    return a("span", { className: s.weeknumber, style: i.weeknumber, children: d });
  var f = c(Number(t), { locale: l }), h = function(g) {
    o(t, n, g);
  };
  return a(jo, { name: "week-number", "aria-label": f, className: s.weeknumber, style: i.weeknumber, onClick: h, children: d });
}
function g8(e) {
  var t, n, r = Me(), o = r.styles, i = r.classNames, s = r.showWeekNumber, l = r.components, c = (t = l == null ? void 0 : l.Day) !== null && t !== void 0 ? t : p8, u = (n = l == null ? void 0 : l.WeekNumber) !== null && n !== void 0 ? n : m8, d;
  return s && (d = a("td", { className: i.cell, style: o.cell, children: a(u, { number: e.weekNumber, dates: e.dates }) })), x("tr", { className: i.row, style: o.row, children: [d, e.dates.map(function(f) {
    return a("td", { className: i.cell, style: o.cell, role: "presentation", children: a(c, { displayMonth: e.displayMonth, date: f }) }, G9(f));
  })] });
}
function $u(e, t, n) {
  for (var r = n != null && n.ISOWeek ? eh(t) : qa(t, n), o = n != null && n.ISOWeek ? wn(e) : Ot(e, n), i = Pt(r, o), s = [], l = 0; l <= i; l++)
    s.push(Ye(o, l));
  var c = s.reduce(function(u, d) {
    var f = n != null && n.ISOWeek ? nh(d) : oh(d, n), h = u.find(function(g) {
      return g.weekNumber === f;
    });
    return h ? (h.dates.push(d), u) : (u.push({
      weekNumber: f,
      dates: [d]
    }), u);
  }, []);
  return c;
}
function v8(e, t) {
  var n = $u(et(e), Xa(e), t);
  if (t != null && t.useFixedWeeks) {
    var r = Y9(e, t);
    if (r < 6) {
      var o = n[n.length - 1], i = o.dates[o.dates.length - 1], s = Hs(i, 6 - r), l = $u(Hs(i, 1), s, t);
      n.push.apply(n, l);
    }
  }
  return n;
}
function y8(e) {
  var t, n, r, o = Me(), i = o.locale, s = o.classNames, l = o.styles, c = o.hideHead, u = o.fixedWeeks, d = o.components, f = o.weekStartsOn, h = o.firstWeekContainsDate, g = o.ISOWeek, m = v8(e.displayMonth, {
    useFixedWeeks: !!u,
    ISOWeek: g,
    locale: i,
    weekStartsOn: f,
    firstWeekContainsDate: h
  }), v = (t = d == null ? void 0 : d.Head) !== null && t !== void 0 ? t : DC, y = (n = d == null ? void 0 : d.Row) !== null && n !== void 0 ? n : g8, w = (r = d == null ? void 0 : d.Footer) !== null && r !== void 0 ? r : TC;
  return x("table", { id: e.id, className: s.table, style: l.table, role: "grid", "aria-labelledby": e["aria-labelledby"], children: [!c && a(v, {}), a("tbody", { className: s.tbody, style: l.tbody, children: m.map(function(b) {
    return a(y, { displayMonth: e.displayMonth, dates: b.dates, weekNumber: b.weekNumber }, b.weekNumber);
  }) }), a(w, { displayMonth: e.displayMonth })] });
}
function b8() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
var w8 = b8() ? Vd : Oe, us = !1, C8 = 0;
function Wu() {
  return "react-day-picker-".concat(++C8);
}
function x8(e) {
  var t, n = e ?? (us ? Wu() : null), r = Ae(n), o = r[0], i = r[1];
  return w8(function() {
    o === null && i(Wu());
  }, []), Oe(function() {
    us === !1 && (us = !0);
  }, []), (t = e ?? o) !== null && t !== void 0 ? t : void 0;
}
function k8(e) {
  var t, n, r = Me(), o = r.dir, i = r.classNames, s = r.styles, l = r.components, c = Kr().displayMonths, u = x8(r.id ? "".concat(r.id, "-").concat(e.displayIndex) : void 0), d = r.id ? "".concat(r.id, "-grid-").concat(e.displayIndex) : void 0, f = [i.month], h = s.month, g = e.displayIndex === 0, m = e.displayIndex === c.length - 1, v = !g && !m;
  o === "rtl" && (t = [g, m], m = t[0], g = t[1]), g && (f.push(i.caption_start), h = pe(pe({}, h), s.caption_start)), m && (f.push(i.caption_end), h = pe(pe({}, h), s.caption_end)), v && (f.push(i.caption_between), h = pe(pe({}, h), s.caption_between));
  var y = (n = l == null ? void 0 : l.Caption) !== null && n !== void 0 ? n : PC;
  return x("div", { className: f.join(" "), style: h, children: [a(y, { id: u, displayMonth: e.displayMonth, displayIndex: e.displayIndex }), a(y8, { id: d, "aria-labelledby": u, displayMonth: e.displayMonth })] }, e.displayIndex);
}
function S8(e) {
  var t = Me(), n = t.classNames, r = t.styles;
  return a("div", { className: n.months, style: r.months, children: e.children });
}
function M8(e) {
  var t, n, r = e.initialProps, o = Me(), i = ol(), s = Kr(), l = Ae(!1), c = l[0], u = l[1];
  Oe(function() {
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
  var f = pe(pe({}, o.styles.root), o.style), h = Object.keys(r).filter(function(m) {
    return m.startsWith("data-");
  }).reduce(function(m, v) {
    var y;
    return pe(pe({}, m), (y = {}, y[v] = r[v], y));
  }, {}), g = (n = (t = r.components) === null || t === void 0 ? void 0 : t.Months) !== null && n !== void 0 ? n : S8;
  return a("div", pe({ className: d.join(" "), style: f, dir: o.dir, id: o.id, nonce: r.nonce, title: r.title, lang: r.lang }, h, { children: a(g, { children: s.displayMonths.map(function(m, v) {
    return a(k8, { displayIndex: v, displayMonth: m }, v);
  }) }) }));
}
function E8(e) {
  var t = e.children, n = X9(e, ["children"]);
  return a(mC, { initialProps: n, children: a(MC, { children: a(s8, { initialProps: n, children: a(IC, { initialProps: n, children: a(FC, { initialProps: n, children: a(GC, { children: a(o8, { children: t }) }) }) }) }) }) });
}
function L8(e) {
  return a(E8, pe({}, e, { children: a(M8, { initialProps: e }) }));
}
function N8({
  className: e,
  classNames: t,
  showOutsideDays: n = !0,
  ...r
}) {
  return /* @__PURE__ */ a(
    L8,
    {
      showOutsideDays: n,
      className: A("p-3", e),
      classNames: {
        months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
        month: "space-y-4",
        caption: "flex justify-center pt-1 relative items-center",
        caption_label: "text-sm font-medium",
        nav: "space-x-1 flex items-center",
        nav_button: A(
          uc({ variant: "outline" }),
          "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100"
        ),
        nav_button_previous: "absolute left-1",
        nav_button_next: "absolute right-1",
        table: "w-full border-collapse space-y-1",
        head_row: "flex",
        head_cell: "text-f1-foreground-secondary rounded-xs w-9 font-normal text-[0.8rem]",
        row: "flex w-full mt-2",
        cell: "rounded-full h-9 w-9 text-center text-sm p-0 relative [&:has([aria-selected].day-outside)]:bg-f1-background-selected focus-within:relative focus-within:z-20 [&:has([aria-selected].day-range-middle)]:rounded-none first:[&:has([aria-selected].day-range-middle)]:rounded-l-lg last:[&:has([aria-selected].day-range-middle)]:rounded-r-lg [&:has([aria-selected].day-range-start)]:rounded-r-none [&:has([aria-selected].day-range-end)]:rounded-l-none first:[&:has([aria-selected].day-range-end)]:rounded-r-[24px] first:[&:has([aria-selected].day-range-end)]:rounded-l-md last:[&:has([aria-selected].day-range-start)]:rounded-l-[24px] last:[&:has([aria-selected].day-range-start)]:rounded-r-md [&:has([aria-selected].day-range-start.day-range-end)]:rounded-full",
        day: A(
          uc({ variant: "ghost" }),
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
        IconLeft: () => /* @__PURE__ */ a(I3, { className: "h-4 w-4" }),
        IconRight: () => /* @__PURE__ */ a(Ka, { className: "h-4 w-4" })
      },
      ...r
    }
  );
}
N8.displayName = "Calendar";
var sl = "Avatar", [P8, FN] = Vt(sl), [T8, vh] = P8(sl), yh = p.forwardRef(
  (e, t) => {
    const { __scopeAvatar: n, ...r } = e, [o, i] = p.useState("idle");
    return /* @__PURE__ */ a(
      T8,
      {
        scope: n,
        imageLoadingStatus: o,
        onImageLoadingStatusChange: i,
        children: /* @__PURE__ */ a(fe.span, { ...r, ref: t })
      }
    );
  }
);
yh.displayName = sl;
var bh = "AvatarImage", wh = p.forwardRef(
  (e, t) => {
    const { __scopeAvatar: n, src: r, onLoadingStatusChange: o = () => {
    }, ...i } = e, s = vh(bh, n), l = R8(r), c = Ie((u) => {
      o(u), s.onImageLoadingStatusChange(u);
    });
    return We(() => {
      l !== "idle" && c(l);
    }, [l, c]), l === "loaded" ? /* @__PURE__ */ a(fe.img, { ...i, ref: t, src: r }) : null;
  }
);
wh.displayName = bh;
var Ch = "AvatarFallback", xh = p.forwardRef(
  (e, t) => {
    const { __scopeAvatar: n, delayMs: r, ...o } = e, i = vh(Ch, n), [s, l] = p.useState(r === void 0);
    return p.useEffect(() => {
      if (r !== void 0) {
        const c = window.setTimeout(() => l(!0), r);
        return () => window.clearTimeout(c);
      }
    }, [r]), s && i.imageLoadingStatus !== "loaded" ? /* @__PURE__ */ a(fe.span, { ...o, ref: t }) : null;
  }
);
xh.displayName = Ch;
function R8(e) {
  const [t, n] = p.useState("idle");
  return We(() => {
    if (!e) {
      n("error");
      return;
    }
    let r = !0;
    const o = new window.Image(), i = (s) => () => {
      r && n(s);
    };
    return n("loading"), o.onload = i("loaded"), o.onerror = i("error"), o.src = e, () => {
      r = !1;
    };
  }, [e]), t;
}
var kh = yh, Sh = wh, Mh = xh;
const fo = [
  "viridian",
  "malibu",
  "yellow",
  "purple",
  "lilac",
  "barbie",
  "smoke",
  "army",
  "flubber",
  "indigo",
  "camel"
], A8 = Fe(
  "relative flex shrink-0 items-center justify-center overflow-hidden text-center font-semibold ring-1 ring-inset ring-f1-border-secondary",
  {
    variants: {
      size: {
        xsmall: "size-5 rounded-xs text-sm",
        small: "size-6 rounded-sm text-sm",
        medium: "size-8 rounded",
        large: "size-18 rounded-xl text-2xl"
      },
      type: {
        base: "",
        rounded: "rounded-full"
      },
      color: {
        viridian: "bg-[hsl(theme(colors.viridian.50))]",
        malibu: "bg-[hsl(theme(colors.malibu.50))]",
        yellow: "bg-[hsl(theme(colors.yellow.50))]",
        purple: "bg-[hsl(theme(colors.purple.50))]",
        lilac: "bg-[hsl(theme(colors.lilac.50))]",
        barbie: "bg-[hsl(theme(colors.barbie.50))]",
        smoke: "bg-[hsl(theme(colors.smoke.50))]",
        army: "bg-[hsl(theme(colors.army.50))]",
        flubber: "bg-[hsl(theme(colors.flubber.50))]",
        indigo: "bg-[hsl(theme(colors.indigo.50))]",
        camel: "bg-[hsl(theme(colors.camel.50))]"
      }
    },
    defaultVariants: {
      size: "medium",
      type: "base",
      color: "viridian"
    }
  }
), Eh = p.forwardRef(({ size: e, type: t, color: n, className: r, ...o }, i) => /* @__PURE__ */ a(
  kh,
  {
    ref: i,
    className: A(A8({ size: e, type: t, color: n, className: r })),
    ...o
  }
));
Eh.displayName = kh.displayName;
const Lh = p.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ a(
  Sh,
  {
    ref: n,
    className: A("aspect-square h-full w-full object-cover", e),
    ...t,
    asChild: !0,
    children: /* @__PURE__ */ a(H0, {})
  }
));
Lh.displayName = Sh.displayName;
const Nh = p.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ a(
  Mh,
  {
    ref: n,
    className: A(
      "flex h-full w-full items-center justify-center text-f1-foreground-inverse/90",
      e
    ),
    ...t
  }
));
Nh.displayName = Mh.displayName;
function D8(e, t) {
  const n = Array.isArray(e) ? e : [e];
  return t === "xsmall" || t === "small" ? (n[0][0] ?? "").toUpperCase() : Array.isArray(e) ? n.slice(0, 2).map((o) => o[0]).join("").toUpperCase() : e.slice(0, 2).toUpperCase();
}
function Ph(e) {
  let t = 0;
  for (let r = 0; r < e.length; r++)
    t = e.charCodeAt(r) + ((t << 5) - t), t = t & t;
  const n = (t % fo.length + fo.length) % fo.length;
  return fo[n];
}
const yi = P(
  ({
    src: e,
    name: t,
    size: n,
    type: r,
    color: o = "random",
    "aria-label": i,
    "aria-labelledby": s
  }, l) => {
    const c = D8(t, n), u = o === "random" ? Ph(Array.isArray(t) ? t.join("") : t) : o;
    return /* @__PURE__ */ x(
      Eh,
      {
        size: n,
        type: r,
        color: u,
        ref: l,
        role: "img",
        "aria-hidden": !!!(i || s),
        "aria-label": i,
        "aria-labelledby": s,
        className: e ? "bg-f1-background dark:bg-f1-background-inverse-secondary" : "",
        children: [
          /* @__PURE__ */ a(Lh, { src: e, alt: c }),
          /* @__PURE__ */ a(Nh, { children: c })
        ]
      }
    );
  }
);
yi.displayName = "BaseAvatar";
const bi = ({
  name: e,
  src: t,
  size: n,
  "aria-label": r,
  "aria-labelledby": o
}) => /* @__PURE__ */ a(
  yi,
  {
    type: "base",
    name: e,
    src: t,
    size: n,
    color: "viridian",
    "aria-label": r,
    "aria-labelledby": o
  }
);
bi.displayName = "CompanyAvatar";
const Yr = ({
  firstName: e,
  lastName: t,
  src: n,
  size: r,
  "aria-label": o,
  "aria-labelledby": i
}) => /* @__PURE__ */ a(
  yi,
  {
    type: "rounded",
    name: [e, t],
    src: n,
    size: r,
    color: "random",
    "aria-label": o,
    "aria-labelledby": i
  }
);
Yr.displayName = "PersonAvatar";
const al = ({
  name: e,
  src: t,
  size: n,
  "aria-label": r,
  "aria-labelledby": o
}) => /* @__PURE__ */ a(
  yi,
  {
    type: "base",
    name: e,
    src: t,
    size: n,
    color: "random",
    "aria-label": r,
    "aria-labelledby": o
  }
);
al.displayName = "TeamAvatar";
function ll(e, t = "xsmall") {
  switch (e.type) {
    case "person":
      return /* @__PURE__ */ a(
        Yr,
        {
          firstName: e.firstName,
          lastName: e.lastName,
          src: e.src,
          size: t,
          "aria-label": e["aria-label"],
          "aria-labelledby": e["aria-labelledby"]
        }
      );
    case "team":
      return /* @__PURE__ */ a(
        al,
        {
          name: e.name,
          src: e.src,
          size: t,
          "aria-label": e["aria-label"],
          "aria-labelledby": e["aria-labelledby"]
        }
      );
    case "company":
      return /* @__PURE__ */ a(
        bi,
        {
          name: e.name,
          src: e.src,
          size: t,
          "aria-label": e["aria-label"],
          "aria-labelledby": e["aria-labelledby"]
        }
      );
  }
}
function Zr(e) {
  const t = e + "CollectionProvider", [n, r] = Vt(t), [o, i] = n(
    t,
    { collectionRef: { current: null }, itemMap: /* @__PURE__ */ new Map() }
  ), s = (g) => {
    const { scope: m, children: v } = g, y = le.useRef(null), w = le.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ a(o, { scope: m, itemMap: w, collectionRef: y, children: v });
  };
  s.displayName = t;
  const l = e + "CollectionSlot", c = le.forwardRef(
    (g, m) => {
      const { scope: v, children: y } = g, w = i(l, v), b = ve(m, w.collectionRef);
      return /* @__PURE__ */ a(Un, { ref: b, children: y });
    }
  );
  c.displayName = l;
  const u = e + "CollectionItemSlot", d = "data-radix-collection-item", f = le.forwardRef(
    (g, m) => {
      const { scope: v, children: y, ...w } = g, b = le.useRef(null), C = ve(m, b), E = i(u, v);
      return le.useEffect(() => (E.itemMap.set(b, { ref: b, ...w }), () => void E.itemMap.delete(b))), /* @__PURE__ */ a(Un, { [d]: "", ref: C, children: y });
    }
  );
  f.displayName = u;
  function h(g) {
    const m = i(e + "CollectionConsumer", g);
    return le.useCallback(() => {
      const y = m.collectionRef.current;
      if (!y) return [];
      const w = Array.from(y.querySelectorAll(`[${d}]`));
      return Array.from(m.itemMap.values()).sort(
        (E, L) => w.indexOf(E.ref.current) - w.indexOf(L.ref.current)
      );
    }, [m.collectionRef, m.itemMap]);
  }
  return [
    { Provider: s, Slot: c, ItemSlot: f },
    h,
    r
  ];
}
var ds = 0;
function cl() {
  p.useEffect(() => {
    const e = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", e[0] ?? Hu()), document.body.insertAdjacentElement("beforeend", e[1] ?? Hu()), ds++, () => {
      ds === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((t) => t.remove()), ds--;
    };
  }, []);
}
function Hu() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.cssText = "outline: none; opacity: 0; position: fixed; pointer-events: none", e;
}
var fs = "focusScope.autoFocusOnMount", hs = "focusScope.autoFocusOnUnmount", Uu = { bubbles: !1, cancelable: !0 }, _8 = "FocusScope", wi = p.forwardRef((e, t) => {
  const {
    loop: n = !1,
    trapped: r = !1,
    onMountAutoFocus: o,
    onUnmountAutoFocus: i,
    ...s
  } = e, [l, c] = p.useState(null), u = Ie(o), d = Ie(i), f = p.useRef(null), h = ve(t, (v) => c(v)), g = p.useRef({
    paused: !1,
    pause() {
      this.paused = !0;
    },
    resume() {
      this.paused = !1;
    }
  }).current;
  p.useEffect(() => {
    if (r) {
      let v = function(C) {
        if (g.paused || !l) return;
        const E = C.target;
        l.contains(E) ? f.current = E : rn(f.current, { select: !0 });
      }, y = function(C) {
        if (g.paused || !l) return;
        const E = C.relatedTarget;
        E !== null && (l.contains(E) || rn(f.current, { select: !0 }));
      }, w = function(C) {
        if (document.activeElement === document.body)
          for (const L of C)
            L.removedNodes.length > 0 && rn(l);
      };
      document.addEventListener("focusin", v), document.addEventListener("focusout", y);
      const b = new MutationObserver(w);
      return l && b.observe(l, { childList: !0, subtree: !0 }), () => {
        document.removeEventListener("focusin", v), document.removeEventListener("focusout", y), b.disconnect();
      };
    }
  }, [r, l, g.paused]), p.useEffect(() => {
    if (l) {
      Gu.add(g);
      const v = document.activeElement;
      if (!l.contains(v)) {
        const w = new CustomEvent(fs, Uu);
        l.addEventListener(fs, u), l.dispatchEvent(w), w.defaultPrevented || (I8(j8(Th(l)), { select: !0 }), document.activeElement === v && rn(l));
      }
      return () => {
        l.removeEventListener(fs, u), setTimeout(() => {
          const w = new CustomEvent(hs, Uu);
          l.addEventListener(hs, d), l.dispatchEvent(w), w.defaultPrevented || rn(v ?? document.body, { select: !0 }), l.removeEventListener(hs, d), Gu.remove(g);
        }, 0);
      };
    }
  }, [l, u, d, g]);
  const m = p.useCallback(
    (v) => {
      if (!n && !r || g.paused) return;
      const y = v.key === "Tab" && !v.altKey && !v.ctrlKey && !v.metaKey, w = document.activeElement;
      if (y && w) {
        const b = v.currentTarget, [C, E] = O8(b);
        C && E ? !v.shiftKey && w === E ? (v.preventDefault(), n && rn(C, { select: !0 })) : v.shiftKey && w === C && (v.preventDefault(), n && rn(E, { select: !0 })) : w === b && v.preventDefault();
      }
    },
    [n, r, g.paused]
  );
  return /* @__PURE__ */ a(fe.div, { tabIndex: -1, ...s, ref: h, onKeyDown: m });
});
wi.displayName = _8;
function I8(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const r of e)
    if (rn(r, { select: t }), document.activeElement !== n) return;
}
function O8(e) {
  const t = Th(e), n = zu(t, e), r = zu(t.reverse(), e);
  return [n, r];
}
function Th(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => {
      const o = r.tagName === "INPUT" && r.type === "hidden";
      return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function zu(e, t) {
  for (const n of e)
    if (!V8(n, { upTo: t })) return n;
}
function V8(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
function F8(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function rn(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== n && F8(e) && t && e.select();
  }
}
var Gu = B8();
function B8() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && (n == null || n.pause()), e = Ku(e, t), e.unshift(t);
    },
    remove(t) {
      var n;
      e = Ku(e, t), (n = e[0]) == null || n.resume();
    }
  };
}
function Ku(e, t) {
  const n = [...e], r = n.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
function j8(e) {
  return e.filter((t) => t.tagName !== "A");
}
function Rh(e) {
  const t = p.useRef({ value: e, previous: e });
  return p.useMemo(() => (t.current.value !== e && (t.current.previous = t.current.value, t.current.value = e), t.current.previous), [e]);
}
var $8 = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, Tn = /* @__PURE__ */ new WeakMap(), ho = /* @__PURE__ */ new WeakMap(), po = {}, ps = 0, Ah = function(e) {
  return e && (e.host || Ah(e.parentNode));
}, W8 = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var r = Ah(n);
    return r && e.contains(r) ? r : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return !!n;
  });
}, H8 = function(e, t, n, r) {
  var o = W8(t, Array.isArray(e) ? e : [e]);
  po[n] || (po[n] = /* @__PURE__ */ new WeakMap());
  var i = po[n], s = [], l = /* @__PURE__ */ new Set(), c = new Set(o), u = function(f) {
    !f || l.has(f) || (l.add(f), u(f.parentNode));
  };
  o.forEach(u);
  var d = function(f) {
    !f || c.has(f) || Array.prototype.forEach.call(f.children, function(h) {
      if (l.has(h))
        d(h);
      else
        try {
          var g = h.getAttribute(r), m = g !== null && g !== "false", v = (Tn.get(h) || 0) + 1, y = (i.get(h) || 0) + 1;
          Tn.set(h, v), i.set(h, y), s.push(h), v === 1 && m && ho.set(h, !0), y === 1 && h.setAttribute(n, "true"), m || h.setAttribute(r, "true");
        } catch (w) {
          console.error("aria-hidden: cannot operate on ", h, w);
        }
    });
  };
  return d(t), l.clear(), ps++, function() {
    s.forEach(function(f) {
      var h = Tn.get(f) - 1, g = i.get(f) - 1;
      Tn.set(f, h), i.set(f, g), h || (ho.has(f) || f.removeAttribute(r), ho.delete(f)), g || f.removeAttribute(n);
    }), ps--, ps || (Tn = /* @__PURE__ */ new WeakMap(), Tn = /* @__PURE__ */ new WeakMap(), ho = /* @__PURE__ */ new WeakMap(), po = {});
  };
}, ul = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var r = Array.from(Array.isArray(e) ? e : [e]), o = $8(e);
  return o ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live]"))), H8(r, o, n, "aria-hidden")) : function() {
    return null;
  };
}, Nt = function() {
  return Nt = Object.assign || function(t) {
    for (var n, r = 1, o = arguments.length; r < o; r++) {
      n = arguments[r];
      for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
    }
    return t;
  }, Nt.apply(this, arguments);
};
function Dh(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
}
function U8(e, t, n) {
  if (n || arguments.length === 2) for (var r = 0, o = t.length, i; r < o; r++)
    (i || !(r in t)) && (i || (i = Array.prototype.slice.call(t, 0, r)), i[r] = t[r]);
  return e.concat(i || Array.prototype.slice.call(t));
}
var ko = "right-scroll-bar-position", So = "width-before-scroll-bar", z8 = "with-scroll-bars-hidden", G8 = "--removed-body-scroll-bar-size";
function ms(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function K8(e, t) {
  var n = Ae(function() {
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
var Y8 = typeof window < "u" ? p.useLayoutEffect : p.useEffect, Yu = /* @__PURE__ */ new WeakMap();
function Z8(e, t) {
  var n = K8(null, function(r) {
    return e.forEach(function(o) {
      return ms(o, r);
    });
  });
  return Y8(function() {
    var r = Yu.get(n);
    if (r) {
      var o = new Set(r), i = new Set(e), s = n.current;
      o.forEach(function(l) {
        i.has(l) || ms(l, null);
      }), i.forEach(function(l) {
        o.has(l) || ms(l, s);
      });
    }
    Yu.set(n, e);
  }, [e]), n;
}
function X8(e) {
  return e;
}
function q8(e, t) {
  t === void 0 && (t = X8);
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
function Q8(e) {
  e === void 0 && (e = {});
  var t = q8(null);
  return t.options = Nt({ async: !0, ssr: !1 }, e), t;
}
var _h = function(e) {
  var t = e.sideCar, n = Dh(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var r = t.read();
  if (!r)
    throw new Error("Sidecar medium not found");
  return p.createElement(r, Nt({}, n));
};
_h.isSideCarExport = !0;
function J8(e, t) {
  return e.useMedium(t), _h;
}
var Ih = Q8(), gs = function() {
}, Ci = p.forwardRef(function(e, t) {
  var n = p.useRef(null), r = p.useState({
    onScrollCapture: gs,
    onWheelCapture: gs,
    onTouchMoveCapture: gs
  }), o = r[0], i = r[1], s = e.forwardProps, l = e.children, c = e.className, u = e.removeScrollBar, d = e.enabled, f = e.shards, h = e.sideCar, g = e.noIsolation, m = e.inert, v = e.allowPinchZoom, y = e.as, w = y === void 0 ? "div" : y, b = e.gapMode, C = Dh(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), E = h, L = Z8([n, t]), _ = Nt(Nt({}, C), o);
  return p.createElement(
    p.Fragment,
    null,
    d && p.createElement(E, { sideCar: Ih, removeScrollBar: u, shards: f, noIsolation: g, inert: m, setCallbacks: i, allowPinchZoom: !!v, lockRef: n, gapMode: b }),
    s ? p.cloneElement(p.Children.only(l), Nt(Nt({}, _), { ref: L })) : p.createElement(w, Nt({}, _, { className: c, ref: L }), l)
  );
});
Ci.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
Ci.classNames = {
  fullWidth: So,
  zeroRight: ko
};
var ex = function() {
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function tx() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = ex();
  return t && e.setAttribute("nonce", t), e;
}
function nx(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function rx(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var ox = function() {
  var e = 0, t = null;
  return {
    add: function(n) {
      e == 0 && (t = tx()) && (nx(t, n), rx(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, ix = function() {
  var e = ox();
  return function(t, n) {
    p.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && n]);
  };
}, Oh = function() {
  var e = ix(), t = function(n) {
    var r = n.styles, o = n.dynamic;
    return e(r, o), null;
  };
  return t;
}, sx = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, vs = function(e) {
  return parseInt(e || "", 10) || 0;
}, ax = function(e) {
  var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], r = t[e === "padding" ? "paddingTop" : "marginTop"], o = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [vs(n), vs(r), vs(o)];
}, lx = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return sx;
  var t = ax(e), n = document.documentElement.clientWidth, r = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, r - n + t[2] - t[0])
  };
}, cx = Oh(), Wn = "data-scroll-locked", ux = function(e, t, n, r) {
  var o = e.left, i = e.top, s = e.right, l = e.gap;
  return n === void 0 && (n = "margin"), `
  .`.concat(z8, ` {
   overflow: hidden `).concat(r, `;
   padding-right: `).concat(l, "px ").concat(r, `;
  }
  body[`).concat(Wn, `] {
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
  
  .`).concat(ko, ` {
    right: `).concat(l, "px ").concat(r, `;
  }
  
  .`).concat(So, ` {
    margin-right: `).concat(l, "px ").concat(r, `;
  }
  
  .`).concat(ko, " .").concat(ko, ` {
    right: 0 `).concat(r, `;
  }
  
  .`).concat(So, " .").concat(So, ` {
    margin-right: 0 `).concat(r, `;
  }
  
  body[`).concat(Wn, `] {
    `).concat(G8, ": ").concat(l, `px;
  }
`);
}, Zu = function() {
  var e = parseInt(document.body.getAttribute(Wn) || "0", 10);
  return isFinite(e) ? e : 0;
}, dx = function() {
  p.useEffect(function() {
    return document.body.setAttribute(Wn, (Zu() + 1).toString()), function() {
      var e = Zu() - 1;
      e <= 0 ? document.body.removeAttribute(Wn) : document.body.setAttribute(Wn, e.toString());
    };
  }, []);
}, fx = function(e) {
  var t = e.noRelative, n = e.noImportant, r = e.gapMode, o = r === void 0 ? "margin" : r;
  dx();
  var i = p.useMemo(function() {
    return lx(o);
  }, [o]);
  return p.createElement(cx, { styles: ux(i, !t, o, n ? "" : "!important") });
}, zs = !1;
if (typeof window < "u")
  try {
    var mo = Object.defineProperty({}, "passive", {
      get: function() {
        return zs = !0, !0;
      }
    });
    window.addEventListener("test", mo, mo), window.removeEventListener("test", mo, mo);
  } catch {
    zs = !1;
  }
var Rn = zs ? { passive: !1 } : !1, hx = function(e) {
  return e.tagName === "TEXTAREA";
}, Vh = function(e, t) {
  var n = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    n[t] !== "hidden" && // contains scroll inside self
    !(n.overflowY === n.overflowX && !hx(e) && n[t] === "visible")
  );
}, px = function(e) {
  return Vh(e, "overflowY");
}, mx = function(e) {
  return Vh(e, "overflowX");
}, Xu = function(e, t) {
  var n = t.ownerDocument, r = t;
  do {
    typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host);
    var o = Fh(e, r);
    if (o) {
      var i = Bh(e, r), s = i[1], l = i[2];
      if (s > l)
        return !0;
    }
    r = r.parentNode;
  } while (r && r !== n.body);
  return !1;
}, gx = function(e) {
  var t = e.scrollTop, n = e.scrollHeight, r = e.clientHeight;
  return [
    t,
    n,
    r
  ];
}, vx = function(e) {
  var t = e.scrollLeft, n = e.scrollWidth, r = e.clientWidth;
  return [
    t,
    n,
    r
  ];
}, Fh = function(e, t) {
  return e === "v" ? px(t) : mx(t);
}, Bh = function(e, t) {
  return e === "v" ? gx(t) : vx(t);
}, yx = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, bx = function(e, t, n, r, o) {
  var i = yx(e, window.getComputedStyle(t).direction), s = i * r, l = n.target, c = t.contains(l), u = !1, d = s > 0, f = 0, h = 0;
  do {
    var g = Bh(e, l), m = g[0], v = g[1], y = g[2], w = v - y - i * m;
    (m || w) && Fh(e, l) && (f += w, h += m), l instanceof ShadowRoot ? l = l.host : l = l.parentNode;
  } while (
    // portaled content
    !c && l !== document.body || // self content
    c && (t.contains(l) || t === l)
  );
  return (d && (Math.abs(f) < 1 || !o) || !d && (Math.abs(h) < 1 || !o)) && (u = !0), u;
}, go = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, qu = function(e) {
  return [e.deltaX, e.deltaY];
}, Qu = function(e) {
  return e && "current" in e ? e.current : e;
}, wx = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, Cx = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, xx = 0, An = [];
function kx(e) {
  var t = p.useRef([]), n = p.useRef([0, 0]), r = p.useRef(), o = p.useState(xx++)[0], i = p.useState(Oh)[0], s = p.useRef(e);
  p.useEffect(function() {
    s.current = e;
  }, [e]), p.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(o));
      var v = U8([e.lockRef.current], (e.shards || []).map(Qu), !0).filter(Boolean);
      return v.forEach(function(y) {
        return y.classList.add("allow-interactivity-".concat(o));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(o)), v.forEach(function(y) {
          return y.classList.remove("allow-interactivity-".concat(o));
        });
      };
    }
  }, [e.inert, e.lockRef.current, e.shards]);
  var l = p.useCallback(function(v, y) {
    if ("touches" in v && v.touches.length === 2)
      return !s.current.allowPinchZoom;
    var w = go(v), b = n.current, C = "deltaX" in v ? v.deltaX : b[0] - w[0], E = "deltaY" in v ? v.deltaY : b[1] - w[1], L, _ = v.target, F = Math.abs(C) > Math.abs(E) ? "h" : "v";
    if ("touches" in v && F === "h" && _.type === "range")
      return !1;
    var R = Xu(F, _);
    if (!R)
      return !0;
    if (R ? L = F : (L = F === "v" ? "h" : "v", R = Xu(F, _)), !R)
      return !1;
    if (!r.current && "changedTouches" in v && (C || E) && (r.current = L), !L)
      return !0;
    var D = r.current || L;
    return bx(D, y, v, D === "h" ? C : E, !0);
  }, []), c = p.useCallback(function(v) {
    var y = v;
    if (!(!An.length || An[An.length - 1] !== i)) {
      var w = "deltaY" in y ? qu(y) : go(y), b = t.current.filter(function(L) {
        return L.name === y.type && (L.target === y.target || y.target === L.shadowParent) && wx(L.delta, w);
      })[0];
      if (b && b.should) {
        y.cancelable && y.preventDefault();
        return;
      }
      if (!b) {
        var C = (s.current.shards || []).map(Qu).filter(Boolean).filter(function(L) {
          return L.contains(y.target);
        }), E = C.length > 0 ? l(y, C[0]) : !s.current.noIsolation;
        E && y.cancelable && y.preventDefault();
      }
    }
  }, []), u = p.useCallback(function(v, y, w, b) {
    var C = { name: v, delta: y, target: w, should: b, shadowParent: Sx(w) };
    t.current.push(C), setTimeout(function() {
      t.current = t.current.filter(function(E) {
        return E !== C;
      });
    }, 1);
  }, []), d = p.useCallback(function(v) {
    n.current = go(v), r.current = void 0;
  }, []), f = p.useCallback(function(v) {
    u(v.type, qu(v), v.target, l(v, e.lockRef.current));
  }, []), h = p.useCallback(function(v) {
    u(v.type, go(v), v.target, l(v, e.lockRef.current));
  }, []);
  p.useEffect(function() {
    return An.push(i), e.setCallbacks({
      onScrollCapture: f,
      onWheelCapture: f,
      onTouchMoveCapture: h
    }), document.addEventListener("wheel", c, Rn), document.addEventListener("touchmove", c, Rn), document.addEventListener("touchstart", d, Rn), function() {
      An = An.filter(function(v) {
        return v !== i;
      }), document.removeEventListener("wheel", c, Rn), document.removeEventListener("touchmove", c, Rn), document.removeEventListener("touchstart", d, Rn);
    };
  }, []);
  var g = e.removeScrollBar, m = e.inert;
  return p.createElement(
    p.Fragment,
    null,
    m ? p.createElement(i, { styles: Cx(o) }) : null,
    g ? p.createElement(fx, { gapMode: e.gapMode }) : null
  );
}
function Sx(e) {
  for (var t = null; e !== null; )
    e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
  return t;
}
const Mx = J8(Ih, kx);
var xi = p.forwardRef(function(e, t) {
  return p.createElement(Ci, Nt({}, e, { ref: t, sideCar: Mx }));
});
xi.classNames = Ci.classNames;
var Ex = [" ", "Enter", "ArrowUp", "ArrowDown"], Lx = [" ", "Enter"], Xr = "Select", [ki, Si, Nx] = Zr(Xr), [tr, BN] = Vt(Xr, [
  Nx,
  Jo
]), Mi = Jo(), [Px, un] = tr(Xr), [Tx, Rx] = tr(Xr), jh = (e) => {
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
    disabled: h,
    required: g
  } = e, m = Mi(t), [v, y] = p.useState(null), [w, b] = p.useState(null), [C, E] = p.useState(!1), L = er(u), [_ = !1, F] = wt({
    prop: r,
    defaultProp: o,
    onChange: i
  }), [R, D] = wt({
    prop: s,
    defaultProp: l,
    onChange: c
  }), H = p.useRef(null), J = v ? !!v.closest("form") : !0, [K, W] = p.useState(/* @__PURE__ */ new Set()), I = Array.from(K).map((O) => O.props.value).join(";");
  return /* @__PURE__ */ a(Id, { ...m, children: /* @__PURE__ */ x(
    Px,
    {
      required: g,
      scope: t,
      trigger: v,
      onTriggerChange: y,
      valueNode: w,
      onValueNodeChange: b,
      valueNodeHasChildren: C,
      onValueNodeHasChildrenChange: E,
      contentId: ct(),
      value: R,
      onValueChange: D,
      open: _,
      onOpenChange: F,
      dir: L,
      triggerPointerDownPosRef: H,
      disabled: h,
      children: [
        /* @__PURE__ */ a(ki.Provider, { scope: t, children: /* @__PURE__ */ a(
          Tx,
          {
            scope: e.__scopeSelect,
            onNativeOptionAdd: p.useCallback((O) => {
              W((z) => new Set(z).add(O));
            }, []),
            onNativeOptionRemove: p.useCallback((O) => {
              W((z) => {
                const B = new Set(z);
                return B.delete(O), B;
              });
            }, []),
            children: n
          }
        ) }),
        J ? /* @__PURE__ */ x(
          up,
          {
            "aria-hidden": !0,
            required: g,
            tabIndex: -1,
            name: d,
            autoComplete: f,
            value: R,
            onChange: (O) => D(O.target.value),
            disabled: h,
            children: [
              R === void 0 ? /* @__PURE__ */ a("option", { value: "" }) : null,
              Array.from(K)
            ]
          },
          I
        ) : null
      ]
    }
  ) });
};
jh.displayName = Xr;
var $h = "SelectTrigger", Wh = p.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, disabled: r = !1, ...o } = e, i = Mi(n), s = un($h, n), l = s.disabled || r, c = ve(t, s.onTriggerChange), u = Si(n), [d, f, h] = dp((m) => {
      const v = u().filter((b) => !b.disabled), y = v.find((b) => b.value === s.value), w = fp(v, m, y);
      w !== void 0 && s.onValueChange(w.value);
    }), g = () => {
      l || (s.onOpenChange(!0), h());
    };
    return /* @__PURE__ */ a(Ad, { asChild: !0, ...i, children: /* @__PURE__ */ a(
      fe.button,
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
        "data-placeholder": cp(s.value) ? "" : void 0,
        ...o,
        ref: c,
        onClick: ee(o.onClick, (m) => {
          m.currentTarget.focus();
        }),
        onPointerDown: ee(o.onPointerDown, (m) => {
          const v = m.target;
          v.hasPointerCapture(m.pointerId) && v.releasePointerCapture(m.pointerId), m.button === 0 && m.ctrlKey === !1 && (g(), s.triggerPointerDownPosRef.current = {
            x: Math.round(m.pageX),
            y: Math.round(m.pageY)
          }, m.preventDefault());
        }),
        onKeyDown: ee(o.onKeyDown, (m) => {
          const v = d.current !== "";
          !(m.ctrlKey || m.altKey || m.metaKey) && m.key.length === 1 && f(m.key), !(v && m.key === " ") && Ex.includes(m.key) && (g(), m.preventDefault());
        })
      }
    ) });
  }
);
Wh.displayName = $h;
var Hh = "SelectValue", Uh = p.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, className: r, style: o, children: i, placeholder: s = "", ...l } = e, c = un(Hh, n), { onValueNodeHasChildrenChange: u } = c, d = i !== void 0, f = ve(t, c.onValueNodeChange);
    return We(() => {
      u(d);
    }, [u, d]), /* @__PURE__ */ a(
      fe.span,
      {
        ...l,
        ref: f,
        style: { pointerEvents: "none" },
        children: cp(c.value) ? /* @__PURE__ */ a(Ce, { children: s }) : i
      }
    );
  }
);
Uh.displayName = Hh;
var Ax = "SelectIcon", Dx = p.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, children: r, ...o } = e;
    return /* @__PURE__ */ a(fe.span, { "aria-hidden": !0, ...o, ref: t, children: r || "▼" });
  }
);
Dx.displayName = Ax;
var _x = "SelectPortal", zh = (e) => /* @__PURE__ */ a(oi, { asChild: !0, ...e });
zh.displayName = _x;
var Cn = "SelectContent", Gh = p.forwardRef(
  (e, t) => {
    const n = un(Cn, e.__scopeSelect), [r, o] = p.useState();
    if (We(() => {
      o(new DocumentFragment());
    }, []), !n.open) {
      const i = r;
      return i ? jd.createPortal(
        /* @__PURE__ */ a(Kh, { scope: e.__scopeSelect, children: /* @__PURE__ */ a(ki.Slot, { scope: e.__scopeSelect, children: /* @__PURE__ */ a("div", { children: e.children }) }) }),
        i
      ) : null;
    }
    return /* @__PURE__ */ a(Yh, { ...e, ref: t });
  }
);
Gh.displayName = Cn;
var Wt = 10, [Kh, dn] = tr(Cn), Ix = "SelectContentImpl", Yh = p.forwardRef(
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
      collisionBoundary: h,
      collisionPadding: g,
      sticky: m,
      hideWhenDetached: v,
      avoidCollisions: y,
      //
      ...w
    } = e, b = un(Cn, n), [C, E] = p.useState(null), [L, _] = p.useState(null), F = ve(t, (V) => E(V)), [R, D] = p.useState(null), [H, J] = p.useState(
      null
    ), K = Si(n), [W, I] = p.useState(!1), O = p.useRef(!1);
    p.useEffect(() => {
      if (C) return ul(C);
    }, [C]), cl();
    const z = p.useCallback(
      (V) => {
        const [Z, ...se] = K().map((j) => j.ref.current), [re] = se.slice(-1), q = document.activeElement;
        for (const j of V)
          if (j === q || (j == null || j.scrollIntoView({ block: "nearest" }), j === Z && L && (L.scrollTop = 0), j === re && L && (L.scrollTop = L.scrollHeight), j == null || j.focus(), document.activeElement !== q)) return;
      },
      [K, L]
    ), B = p.useCallback(
      () => z([R, C]),
      [z, R, C]
    );
    p.useEffect(() => {
      W && B();
    }, [W, B]);
    const { onOpenChange: $, triggerPointerDownPosRef: G } = b;
    p.useEffect(() => {
      if (C) {
        let V = { x: 0, y: 0 };
        const Z = (re) => {
          var q, j;
          V = {
            x: Math.abs(Math.round(re.pageX) - (((q = G.current) == null ? void 0 : q.x) ?? 0)),
            y: Math.abs(Math.round(re.pageY) - (((j = G.current) == null ? void 0 : j.y) ?? 0))
          };
        }, se = (re) => {
          V.x <= 10 && V.y <= 10 ? re.preventDefault() : C.contains(re.target) || $(!1), document.removeEventListener("pointermove", Z), G.current = null;
        };
        return G.current !== null && (document.addEventListener("pointermove", Z), document.addEventListener("pointerup", se, { capture: !0, once: !0 })), () => {
          document.removeEventListener("pointermove", Z), document.removeEventListener("pointerup", se, { capture: !0 });
        };
      }
    }, [C, $, G]), p.useEffect(() => {
      const V = () => $(!1);
      return window.addEventListener("blur", V), window.addEventListener("resize", V), () => {
        window.removeEventListener("blur", V), window.removeEventListener("resize", V);
      };
    }, [$]);
    const [M, S] = dp((V) => {
      const Z = K().filter((q) => !q.disabled), se = Z.find((q) => q.ref.current === document.activeElement), re = fp(Z, V, se);
      re && setTimeout(() => re.ref.current.focus());
    }), X = p.useCallback(
      (V, Z, se) => {
        const re = !O.current && !se;
        (b.value !== void 0 && b.value === Z || re) && (D(V), re && (O.current = !0));
      },
      [b.value]
    ), te = p.useCallback(() => C == null ? void 0 : C.focus(), [C]), ie = p.useCallback(
      (V, Z, se) => {
        const re = !O.current && !se;
        (b.value !== void 0 && b.value === Z || re) && J(V);
      },
      [b.value]
    ), de = r === "popper" ? Gs : Zh, ce = de === Gs ? {
      side: l,
      sideOffset: c,
      align: u,
      alignOffset: d,
      arrowPadding: f,
      collisionBoundary: h,
      collisionPadding: g,
      sticky: m,
      hideWhenDetached: v,
      avoidCollisions: y
    } : {};
    return /* @__PURE__ */ a(
      Kh,
      {
        scope: n,
        content: C,
        viewport: L,
        onViewportChange: _,
        itemRefCallback: X,
        selectedItem: R,
        onItemLeave: te,
        itemTextRefCallback: ie,
        focusSelectedItem: B,
        selectedItemText: H,
        position: r,
        isPositioned: W,
        searchRef: M,
        children: /* @__PURE__ */ a(xi, { as: Un, allowPinchZoom: !0, children: /* @__PURE__ */ a(
          wi,
          {
            asChild: !0,
            trapped: b.open,
            onMountAutoFocus: (V) => {
              V.preventDefault();
            },
            onUnmountAutoFocus: ee(o, (V) => {
              var Z;
              (Z = b.trigger) == null || Z.focus({ preventScroll: !0 }), V.preventDefault();
            }),
            children: /* @__PURE__ */ a(
              ei,
              {
                asChild: !0,
                disableOutsidePointerEvents: !0,
                onEscapeKeyDown: i,
                onPointerDownOutside: s,
                onFocusOutside: (V) => V.preventDefault(),
                onDismiss: () => b.onOpenChange(!1),
                children: /* @__PURE__ */ a(
                  de,
                  {
                    role: "listbox",
                    id: b.contentId,
                    "data-state": b.open ? "open" : "closed",
                    dir: b.dir,
                    onContextMenu: (V) => V.preventDefault(),
                    ...w,
                    ...ce,
                    onPlaced: () => I(!0),
                    ref: F,
                    style: {
                      // flex layout so we can place the scroll buttons properly
                      display: "flex",
                      flexDirection: "column",
                      // reset the outline by default as the content MAY get focused
                      outline: "none",
                      ...w.style
                    },
                    onKeyDown: ee(w.onKeyDown, (V) => {
                      const Z = V.ctrlKey || V.altKey || V.metaKey;
                      if (V.key === "Tab" && V.preventDefault(), !Z && V.key.length === 1 && S(V.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes(V.key)) {
                        let re = K().filter((q) => !q.disabled).map((q) => q.ref.current);
                        if (["ArrowUp", "End"].includes(V.key) && (re = re.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(V.key)) {
                          const q = V.target, j = re.indexOf(q);
                          re = re.slice(j + 1);
                        }
                        setTimeout(() => z(re)), V.preventDefault();
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
Yh.displayName = Ix;
var Ox = "SelectItemAlignedPosition", Zh = p.forwardRef((e, t) => {
  const { __scopeSelect: n, onPlaced: r, ...o } = e, i = un(Cn, n), s = dn(Cn, n), [l, c] = p.useState(null), [u, d] = p.useState(null), f = ve(t, (F) => d(F)), h = Si(n), g = p.useRef(!1), m = p.useRef(!0), { viewport: v, selectedItem: y, selectedItemText: w, focusSelectedItem: b } = s, C = p.useCallback(() => {
    if (i.trigger && i.valueNode && l && u && v && y && w) {
      const F = i.trigger.getBoundingClientRect(), R = u.getBoundingClientRect(), D = i.valueNode.getBoundingClientRect(), H = w.getBoundingClientRect();
      if (i.dir !== "rtl") {
        const q = H.left - R.left, j = D.left - q, ue = F.left - j, ne = F.width + ue, me = Math.max(ne, R.width), xe = window.innerWidth - Wt, ke = $s(j, [Wt, xe - me]);
        l.style.minWidth = ne + "px", l.style.left = ke + "px";
      } else {
        const q = R.right - H.right, j = window.innerWidth - D.right - q, ue = window.innerWidth - F.right - j, ne = F.width + ue, me = Math.max(ne, R.width), xe = window.innerWidth - Wt, ke = $s(j, [Wt, xe - me]);
        l.style.minWidth = ne + "px", l.style.right = ke + "px";
      }
      const J = h(), K = window.innerHeight - Wt * 2, W = v.scrollHeight, I = window.getComputedStyle(u), O = parseInt(I.borderTopWidth, 10), z = parseInt(I.paddingTop, 10), B = parseInt(I.borderBottomWidth, 10), $ = parseInt(I.paddingBottom, 10), G = O + z + W + $ + B, M = Math.min(y.offsetHeight * 5, G), S = window.getComputedStyle(v), X = parseInt(S.paddingTop, 10), te = parseInt(S.paddingBottom, 10), ie = F.top + F.height / 2 - Wt, de = K - ie, ce = y.offsetHeight / 2, V = y.offsetTop + ce, Z = O + z + V, se = G - Z;
      if (Z <= ie) {
        const q = y === J[J.length - 1].ref.current;
        l.style.bottom = "0px";
        const j = u.clientHeight - v.offsetTop - v.offsetHeight, ue = Math.max(
          de,
          ce + // viewport might have padding bottom, include it to avoid a scrollable viewport
          (q ? te : 0) + j + B
        ), ne = Z + ue;
        l.style.height = ne + "px";
      } else {
        const q = y === J[0].ref.current;
        l.style.top = "0px";
        const ue = Math.max(
          ie,
          O + v.offsetTop + // viewport might have padding top, include it to avoid a scrollable viewport
          (q ? X : 0) + ce
        ) + se;
        l.style.height = ue + "px", v.scrollTop = Z - ie + v.offsetTop;
      }
      l.style.margin = `${Wt}px 0`, l.style.minHeight = M + "px", l.style.maxHeight = K + "px", r == null || r(), requestAnimationFrame(() => g.current = !0);
    }
  }, [
    h,
    i.trigger,
    i.valueNode,
    l,
    u,
    v,
    y,
    w,
    i.dir,
    r
  ]);
  We(() => C(), [C]);
  const [E, L] = p.useState();
  We(() => {
    u && L(window.getComputedStyle(u).zIndex);
  }, [u]);
  const _ = p.useCallback(
    (F) => {
      F && m.current === !0 && (C(), b == null || b(), m.current = !1);
    },
    [C, b]
  );
  return /* @__PURE__ */ a(
    Fx,
    {
      scope: n,
      contentWrapper: l,
      shouldExpandOnScrollRef: g,
      onScrollButtonChange: _,
      children: /* @__PURE__ */ a(
        "div",
        {
          ref: c,
          style: {
            display: "flex",
            flexDirection: "column",
            position: "fixed",
            zIndex: E
          },
          children: /* @__PURE__ */ a(
            fe.div,
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
Zh.displayName = Ox;
var Vx = "SelectPopperPosition", Gs = p.forwardRef((e, t) => {
  const {
    __scopeSelect: n,
    align: r = "start",
    collisionPadding: o = Wt,
    ...i
  } = e, s = Mi(n);
  return /* @__PURE__ */ a(
    Dd,
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
Gs.displayName = Vx;
var [Fx, dl] = tr(Cn, {}), Ks = "SelectViewport", Xh = p.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, nonce: r, ...o } = e, i = dn(Ks, n), s = dl(Ks, n), l = ve(t, i.onViewportChange), c = p.useRef(0);
    return /* @__PURE__ */ x(Ce, { children: [
      /* @__PURE__ */ a(
        "style",
        {
          dangerouslySetInnerHTML: {
            __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"
          },
          nonce: r
        }
      ),
      /* @__PURE__ */ a(ki.Slot, { scope: n, children: /* @__PURE__ */ a(
        fe.div,
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
          onScroll: ee(o.onScroll, (u) => {
            const d = u.currentTarget, { contentWrapper: f, shouldExpandOnScrollRef: h } = s;
            if (h != null && h.current && f) {
              const g = Math.abs(c.current - d.scrollTop);
              if (g > 0) {
                const m = window.innerHeight - Wt * 2, v = parseFloat(f.style.minHeight), y = parseFloat(f.style.height), w = Math.max(v, y);
                if (w < m) {
                  const b = w + g, C = Math.min(m, b), E = b - C;
                  f.style.height = C + "px", f.style.bottom === "0px" && (d.scrollTop = E > 0 ? E : 0, f.style.justifyContent = "flex-end");
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
Xh.displayName = Ks;
var qh = "SelectGroup", [Bx, jx] = tr(qh), $x = p.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e, o = ct();
    return /* @__PURE__ */ a(Bx, { scope: n, id: o, children: /* @__PURE__ */ a(fe.div, { role: "group", "aria-labelledby": o, ...r, ref: t }) });
  }
);
$x.displayName = qh;
var Qh = "SelectLabel", Jh = p.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e, o = jx(Qh, n);
    return /* @__PURE__ */ a(fe.div, { id: o.id, ...r, ref: t });
  }
);
Jh.displayName = Qh;
var $o = "SelectItem", [Wx, ep] = tr($o), tp = p.forwardRef(
  (e, t) => {
    const {
      __scopeSelect: n,
      value: r,
      disabled: o = !1,
      textValue: i,
      ...s
    } = e, l = un($o, n), c = dn($o, n), u = l.value === r, [d, f] = p.useState(i ?? ""), [h, g] = p.useState(!1), m = ve(
      t,
      (w) => {
        var b;
        return (b = c.itemRefCallback) == null ? void 0 : b.call(c, w, r, o);
      }
    ), v = ct(), y = () => {
      o || (l.onValueChange(r), l.onOpenChange(!1));
    };
    if (r === "")
      throw new Error(
        "A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder."
      );
    return /* @__PURE__ */ a(
      Wx,
      {
        scope: n,
        value: r,
        disabled: o,
        textId: v,
        isSelected: u,
        onItemTextChange: p.useCallback((w) => {
          f((b) => b || ((w == null ? void 0 : w.textContent) ?? "").trim());
        }, []),
        children: /* @__PURE__ */ a(
          ki.ItemSlot,
          {
            scope: n,
            value: r,
            disabled: o,
            textValue: d,
            children: /* @__PURE__ */ a(
              fe.div,
              {
                role: "option",
                "aria-labelledby": v,
                "data-highlighted": h ? "" : void 0,
                "aria-selected": u && h,
                "data-state": u ? "checked" : "unchecked",
                "aria-disabled": o || void 0,
                "data-disabled": o ? "" : void 0,
                tabIndex: o ? void 0 : -1,
                ...s,
                ref: m,
                onFocus: ee(s.onFocus, () => g(!0)),
                onBlur: ee(s.onBlur, () => g(!1)),
                onPointerUp: ee(s.onPointerUp, y),
                onPointerMove: ee(s.onPointerMove, (w) => {
                  var b;
                  o ? (b = c.onItemLeave) == null || b.call(c) : w.currentTarget.focus({ preventScroll: !0 });
                }),
                onPointerLeave: ee(s.onPointerLeave, (w) => {
                  var b;
                  w.currentTarget === document.activeElement && ((b = c.onItemLeave) == null || b.call(c));
                }),
                onKeyDown: ee(s.onKeyDown, (w) => {
                  var C;
                  ((C = c.searchRef) == null ? void 0 : C.current) !== "" && w.key === " " || (Lx.includes(w.key) && y(), w.key === " " && w.preventDefault());
                })
              }
            )
          }
        )
      }
    );
  }
);
tp.displayName = $o;
var ur = "SelectItemText", np = p.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, className: r, style: o, ...i } = e, s = un(ur, n), l = dn(ur, n), c = ep(ur, n), u = Rx(ur, n), [d, f] = p.useState(null), h = ve(
      t,
      (w) => f(w),
      c.onItemTextChange,
      (w) => {
        var b;
        return (b = l.itemTextRefCallback) == null ? void 0 : b.call(l, w, c.value, c.disabled);
      }
    ), g = d == null ? void 0 : d.textContent, m = p.useMemo(
      () => /* @__PURE__ */ a("option", { value: c.value, disabled: c.disabled, children: g }, c.value),
      [c.disabled, c.value, g]
    ), { onNativeOptionAdd: v, onNativeOptionRemove: y } = u;
    return We(() => (v(m), () => y(m)), [v, y, m]), /* @__PURE__ */ x(Ce, { children: [
      /* @__PURE__ */ a(fe.span, { id: c.textId, ...i, ref: h }),
      c.isSelected && s.valueNode && !s.valueNodeHasChildren ? jd.createPortal(i.children, s.valueNode) : null
    ] });
  }
);
np.displayName = ur;
var rp = "SelectItemIndicator", op = p.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e;
    return ep(rp, n).isSelected ? /* @__PURE__ */ a(fe.span, { "aria-hidden": !0, ...r, ref: t }) : null;
  }
);
op.displayName = rp;
var Ys = "SelectScrollUpButton", ip = p.forwardRef((e, t) => {
  const n = dn(Ys, e.__scopeSelect), r = dl(Ys, e.__scopeSelect), [o, i] = p.useState(!1), s = ve(t, r.onScrollButtonChange);
  return We(() => {
    if (n.viewport && n.isPositioned) {
      let l = function() {
        const u = c.scrollTop > 0;
        i(u);
      };
      const c = n.viewport;
      return l(), c.addEventListener("scroll", l), () => c.removeEventListener("scroll", l);
    }
  }, [n.viewport, n.isPositioned]), o ? /* @__PURE__ */ a(
    ap,
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
ip.displayName = Ys;
var Zs = "SelectScrollDownButton", sp = p.forwardRef((e, t) => {
  const n = dn(Zs, e.__scopeSelect), r = dl(Zs, e.__scopeSelect), [o, i] = p.useState(!1), s = ve(t, r.onScrollButtonChange);
  return We(() => {
    if (n.viewport && n.isPositioned) {
      let l = function() {
        const u = c.scrollHeight - c.clientHeight, d = Math.ceil(c.scrollTop) < u;
        i(d);
      };
      const c = n.viewport;
      return l(), c.addEventListener("scroll", l), () => c.removeEventListener("scroll", l);
    }
  }, [n.viewport, n.isPositioned]), o ? /* @__PURE__ */ a(
    ap,
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
sp.displayName = Zs;
var ap = p.forwardRef((e, t) => {
  const { __scopeSelect: n, onAutoScroll: r, ...o } = e, i = dn("SelectScrollButton", n), s = p.useRef(null), l = Si(n), c = p.useCallback(() => {
    s.current !== null && (window.clearInterval(s.current), s.current = null);
  }, []);
  return p.useEffect(() => () => c(), [c]), We(() => {
    var d;
    const u = l().find((f) => f.ref.current === document.activeElement);
    (d = u == null ? void 0 : u.ref.current) == null || d.scrollIntoView({ block: "nearest" });
  }, [l]), /* @__PURE__ */ a(
    fe.div,
    {
      "aria-hidden": !0,
      ...o,
      ref: t,
      style: { flexShrink: 0, ...o.style },
      onPointerDown: ee(o.onPointerDown, () => {
        s.current === null && (s.current = window.setInterval(r, 50));
      }),
      onPointerMove: ee(o.onPointerMove, () => {
        var u;
        (u = i.onItemLeave) == null || u.call(i), s.current === null && (s.current = window.setInterval(r, 50));
      }),
      onPointerLeave: ee(o.onPointerLeave, () => {
        c();
      })
    }
  );
}), Hx = "SelectSeparator", lp = p.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e;
    return /* @__PURE__ */ a(fe.div, { "aria-hidden": !0, ...r, ref: t });
  }
);
lp.displayName = Hx;
var Xs = "SelectArrow", Ux = p.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e, o = Mi(n), i = un(Xs, n), s = dn(Xs, n);
    return i.open && s.position === "popper" ? /* @__PURE__ */ a(_d, { ...o, ...r, ref: t }) : null;
  }
);
Ux.displayName = Xs;
function cp(e) {
  return e === "" || e === void 0;
}
var up = p.forwardRef(
  (e, t) => {
    const { value: n, ...r } = e, o = p.useRef(null), i = ve(t, o), s = Rh(n);
    return p.useEffect(() => {
      const l = o.current, c = window.HTMLSelectElement.prototype, d = Object.getOwnPropertyDescriptor(
        c,
        "value"
      ).set;
      if (s !== n && d) {
        const f = new Event("change", { bubbles: !0 });
        d.call(l, n), l.dispatchEvent(f);
      }
    }, [s, n]), /* @__PURE__ */ a(U0, { asChild: !0, children: /* @__PURE__ */ a("select", { ...r, ref: i, defaultValue: n }) });
  }
);
up.displayName = "BubbleSelect";
function dp(e) {
  const t = Ie(e), n = p.useRef(""), r = p.useRef(0), o = p.useCallback(
    (s) => {
      const l = n.current + s;
      t(l), function c(u) {
        n.current = u, window.clearTimeout(r.current), u !== "" && (r.current = window.setTimeout(() => c(""), 1e3));
      }(l);
    },
    [t]
  ), i = p.useCallback(() => {
    n.current = "", window.clearTimeout(r.current);
  }, []);
  return p.useEffect(() => () => window.clearTimeout(r.current), []), [n, o, i];
}
function fp(e, t, n) {
  const o = t.length > 1 && Array.from(t).every((u) => u === t[0]) ? t[0] : t, i = n ? e.indexOf(n) : -1;
  let s = zx(e, Math.max(i, 0));
  o.length === 1 && (s = s.filter((u) => u !== n));
  const c = s.find(
    (u) => u.textValue.toLowerCase().startsWith(o.toLowerCase())
  );
  return c !== n ? c : void 0;
}
function zx(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
var Gx = jh, hp = Wh, Kx = Uh, Yx = zh, pp = Gh, Zx = Xh, mp = Jh, gp = tp, Xx = np, qx = op, vp = ip, yp = sp, bp = lp;
const Qx = Gx, Jx = Kx, wp = p.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ a(hp, { ref: r, className: A(e), ...n, children: t }));
wp.displayName = hp.displayName;
const Cp = p.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ a(
  vp,
  {
    ref: n,
    className: A(
      "flex cursor-default items-center justify-center py-1",
      e
    ),
    ...t,
    children: /* @__PURE__ */ a(O3, { className: "h-4 w-4 text-f1-foreground" })
  }
));
Cp.displayName = vp.displayName;
const xp = p.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ a(
  yp,
  {
    ref: n,
    className: A(
      "flex cursor-default items-center justify-center py-1",
      e
    ),
    ...t,
    children: /* @__PURE__ */ a(_3, { className: "h-4 w-4 text-f1-foreground" })
  }
));
xp.displayName = yp.displayName;
const kp = p.forwardRef(({ className: e, children: t, position: n = "popper", ...r }, o) => /* @__PURE__ */ a(Yx, { children: /* @__PURE__ */ x(
  pp,
  {
    ref: o,
    className: A(
      "relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border border-solid border-f1-border-secondary bg-f1-background text-f1-foreground shadow-md data-[state=closed]:fade-out-0 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 motion-safe:data-[state=open]:animate-in motion-safe:data-[state=closed]:animate-out motion-safe:data-[state=open]:fade-in-0 motion-safe:data-[state=closed]:zoom-out-95 motion-safe:data-[state=open]:zoom-in-95 motion-safe:data-[side=bottom]:slide-in-from-top-2",
      n === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
      e
    ),
    position: n,
    ...r,
    children: [
      /* @__PURE__ */ a(Cp, {}),
      /* @__PURE__ */ a(
        Zx,
        {
          className: A(
            n === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
          ),
          children: t
        }
      ),
      /* @__PURE__ */ a(xp, {})
    ]
  }
) }));
kp.displayName = pp.displayName;
const e7 = p.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ a(
  mp,
  {
    ref: n,
    className: A("py-1.5 pl-8 pr-2 text-sm font-semibold", e),
    ...t
  }
));
e7.displayName = mp.displayName;
const Sp = p.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ x(
  gp,
  {
    ref: r,
    className: A(
      "relative grid w-full cursor-default select-none grid-cols-[1fr_20px] gap-x-1.5 rounded px-3 py-2 outline-none transition-colors after:absolute after:inset-x-1 after:inset-y-0 after:h-full after:rounded after:bg-f1-background-hover after:opacity-0 after:transition-opacity after:duration-75 after:content-[''] first:pt-3 first:after:top-1 first:after:h-[calc(100%-0.25rem)] last:pb-3 last:after:bottom-1 last:after:h-[calc(100%-0.25rem)] hover:after:opacity-100 focus:after:bg-f1-background-hover focus:after:text-f1-foreground focus:after:opacity-100 data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      "data-[state=checked]:after:bg-f1-background-selected-bold/10 data-[state=checked]:after:opacity-100 hover:data-[state=checked]:after:bg-f1-background-selected-bold/10 dark:data-[state=checked]:after:bg-f1-background-selected-bold/20 dark:hover:data-[state=checked]:after:bg-f1-background-selected-bold/20",
      "focus:outline-none focus:ring-0 focus:ring-transparent",
      // Temporal fix for Gamma issue
      e
    ),
    ...n,
    children: [
      /* @__PURE__ */ a(Xx, { children: t }),
      /* @__PURE__ */ a(qx, { className: "flex", children: /* @__PURE__ */ a(Ua, { className: "size-5 text-f1-icon-selected" }) })
    ]
  }
));
Sp.displayName = gp.displayName;
const t7 = p.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ a(
  bp,
  {
    ref: n,
    className: A("-mx-1 my-1 h-px bg-f1-background-secondary", e),
    ...t
  }
));
t7.displayName = bp.displayName;
const n7 = ({ item: e }) => {
  const t = e.icon && X1[e.icon];
  return /* @__PURE__ */ a(Sp, { value: e.value, children: /* @__PURE__ */ x("div", { className: "flex items-start gap-1.5", children: [
    e.avatar && ll(e.avatar, "xsmall"),
    t && /* @__PURE__ */ a(t, { className: "h-5 w-5 shrink-0 text-f1-icon" }),
    /* @__PURE__ */ x("div", { className: "flex flex-col", children: [
      /* @__PURE__ */ a("span", { className: "font-medium", children: e.label }),
      e.description && /* @__PURE__ */ a("div", { className: "text-f1-foreground-secondary", children: e.description })
    ] })
  ] }) });
}, r7 = ({ item: e }) => {
  const t = e.icon && X1[e.icon];
  return /* @__PURE__ */ x("div", { className: "flex items-center gap-1.5", children: [
    t && /* @__PURE__ */ a(t, { className: "h-5 w-5 shrink-0 text-f1-icon" }),
    e.label
  ] });
}, o7 = "flex h-10 w-full items-center justify-between rounded-md border border-solid border-f1-border bg-f1-background pl-3 pr-2 py-2.5 transition-colors placeholder:text-f1-foreground-secondary hover:border-f1-border-hover disabled:cursor-not-allowed disabled:bg-f1-background-secondary disabled:opacity-50 [&>span]:line-clamp-1", i7 = P(
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
    const f = n.find((h) => h.value === o);
    return /* @__PURE__ */ x(
      Qx,
      {
        onValueChange: r,
        value: o,
        disabled: s,
        open: l,
        onOpenChange: c,
        ...u,
        children: [
          /* @__PURE__ */ a(wp, { ref: d, asChild: !0, children: i || /* @__PURE__ */ x(
            "button",
            {
              className: A(
                o7,
                ft("focus-visible:border-f1-border-hover")
              ),
              children: [
                /* @__PURE__ */ a(Jx, { placeholder: t, asChild: !0, children: f && /* @__PURE__ */ a(r7, { item: f }) }),
                /* @__PURE__ */ a("div", { className: "flex h-6 w-6 items-center justify-center", children: /* @__PURE__ */ a("div", { className: "h-4 w-4 rounded-2xs bg-f1-background-secondary", children: /* @__PURE__ */ a(Wr, { className: "h-3 w-3" }) }) })
              ]
            }
          ) }),
          /* @__PURE__ */ a(kp, { children: n.map((h) => /* @__PURE__ */ a(n7, { item: h }, h.value)) })
        ]
      }
    );
  }
), Mp = p.forwardRef(
  ({ className: e, ...t }, n) => /* @__PURE__ */ a(
    "textarea",
    {
      className: A(
        "ring-offset-background focus-visible:ring-ring flex min-h-[80px] w-full rounded-sm border-2 border-solid border-f1-border bg-f1-background px-3 py-2 text-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-f1-foreground-secondary/60 hover:border-f1-border-hover focus-visible:border-f1-border-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:bg-f1-background-secondary disabled:opacity-50",
        e
      ),
      ref: n,
      ...t
    }
  )
);
Mp.displayName = "Textarea";
const jN = $e(
  {
    name: "Textarea",
    type: "form"
  },
  Mp
), $N = $e(
  {
    name: "Input",
    type: "form"
  },
  Sb
), WN = $e(
  {
    name: "NumberInput",
    type: "form"
  },
  N3
);
var qr = (e) => e.type === "checkbox", jn = (e) => e instanceof Date, Ze = (e) => e == null;
const Ep = (e) => typeof e == "object";
var Ve = (e) => !Ze(e) && !Array.isArray(e) && Ep(e) && !jn(e), s7 = (e) => Ve(e) && e.target ? qr(e.target) ? e.target.checked : e.target.value : e, a7 = (e) => e.substring(0, e.search(/\.\d+(\.|$)/)) || e, l7 = (e, t) => e.has(a7(t)), c7 = (e) => {
  const t = e.constructor && e.constructor.prototype;
  return Ve(t) && t.hasOwnProperty("isPrototypeOf");
}, fl = typeof window < "u" && typeof window.HTMLElement < "u" && typeof document < "u";
function st(e) {
  let t;
  const n = Array.isArray(e);
  if (e instanceof Date)
    t = new Date(e);
  else if (e instanceof Set)
    t = new Set(e);
  else if (!(fl && (e instanceof Blob || e instanceof FileList)) && (n || Ve(e)))
    if (t = n ? [] : {}, !n && !c7(e))
      t = e;
    else
      for (const r in e)
        e.hasOwnProperty(r) && (t[r] = st(e[r]));
  else
    return e;
  return t;
}
var Ei = (e) => Array.isArray(e) ? e.filter(Boolean) : [], _e = (e) => e === void 0, oe = (e, t, n) => {
  if (!t || !Ve(e))
    return n;
  const r = Ei(t.split(/[,[\].]+?/)).reduce((o, i) => Ze(o) ? o : o[i], e);
  return _e(r) || r === e ? _e(e[t]) ? n : e[t] : r;
}, Lt = (e) => typeof e == "boolean", hl = (e) => /^\w*$/.test(e), Lp = (e) => Ei(e.replace(/["|']|\]/g, "").split(/\.|\[/)), Ee = (e, t, n) => {
  let r = -1;
  const o = hl(t) ? [t] : Lp(t), i = o.length, s = i - 1;
  for (; ++r < i; ) {
    const l = o[r];
    let c = n;
    if (r !== s) {
      const u = e[l];
      c = Ve(u) || Array.isArray(u) ? u : isNaN(+o[r + 1]) ? {} : [];
    }
    if (l === "__proto__")
      return;
    e[l] = c, e = e[l];
  }
  return e;
};
const Ju = {
  BLUR: "blur",
  FOCUS_OUT: "focusout",
  CHANGE: "change"
}, yt = {
  onBlur: "onBlur",
  onChange: "onChange",
  onSubmit: "onSubmit",
  onTouched: "onTouched",
  all: "all"
}, $t = {
  max: "max",
  min: "min",
  maxLength: "maxLength",
  minLength: "minLength",
  pattern: "pattern",
  required: "required",
  validate: "validate"
};
le.createContext(null);
var u7 = (e, t, n, r = !0) => {
  const o = {
    defaultValues: t._defaultValues
  };
  for (const i in e)
    Object.defineProperty(o, i, {
      get: () => {
        const s = i;
        return t._proxyFormState[s] !== yt.all && (t._proxyFormState[s] = !r || yt.all), e[s];
      }
    });
  return o;
}, Qe = (e) => Ve(e) && !Object.keys(e).length, d7 = (e, t, n, r) => {
  n(e);
  const { name: o, ...i } = e;
  return Qe(i) || Object.keys(i).length >= Object.keys(t).length || Object.keys(i).find((s) => t[s] === yt.all);
}, Mo = (e) => Array.isArray(e) ? e : [e];
function f7(e) {
  const t = le.useRef(e);
  t.current = e, le.useEffect(() => {
    const n = !e.disabled && t.current.subject && t.current.subject.subscribe({
      next: t.current.next
    });
    return () => {
      n && n.unsubscribe();
    };
  }, [e.disabled]);
}
var Tt = (e) => typeof e == "string", h7 = (e, t, n, r, o) => Tt(e) ? (r && t.watch.add(e), oe(n, e, o)) : Array.isArray(e) ? e.map((i) => (r && t.watch.add(i), oe(n, i))) : (r && (t.watchAll = !0), n), p7 = (e, t, n, r, o) => t ? {
  ...n[e],
  types: {
    ...n[e] && n[e].types ? n[e].types : {},
    [r]: o || !0
  }
} : {}, ed = (e) => ({
  isOnSubmit: !e || e === yt.onSubmit,
  isOnBlur: e === yt.onBlur,
  isOnChange: e === yt.onChange,
  isOnAll: e === yt.all,
  isOnTouch: e === yt.onTouched
}), td = (e, t, n) => !n && (t.watchAll || t.watch.has(e) || [...t.watch].some((r) => e.startsWith(r) && /^\.\w+/.test(e.slice(r.length))));
const br = (e, t, n, r) => {
  for (const o of n || Object.keys(e)) {
    const i = oe(e, o);
    if (i) {
      const { _f: s, ...l } = i;
      if (s) {
        if (s.refs && s.refs[0] && t(s.refs[0], o) && !r)
          return !0;
        if (s.ref && t(s.ref, s.name) && !r)
          return !0;
        if (br(l, t))
          break;
      } else if (Ve(l) && br(l, t))
        break;
    }
  }
};
var m7 = (e, t, n) => {
  const r = Mo(oe(e, n));
  return Ee(r, "root", t[n]), Ee(e, n, r), e;
}, pl = (e) => e.type === "file", zt = (e) => typeof e == "function", Wo = (e) => {
  if (!fl)
    return !1;
  const t = e ? e.ownerDocument : 0;
  return e instanceof (t && t.defaultView ? t.defaultView.HTMLElement : HTMLElement);
}, Eo = (e) => Tt(e), ml = (e) => e.type === "radio", Ho = (e) => e instanceof RegExp;
const nd = {
  value: !1,
  isValid: !1
}, rd = { value: !0, isValid: !0 };
var Np = (e) => {
  if (Array.isArray(e)) {
    if (e.length > 1) {
      const t = e.filter((n) => n && n.checked && !n.disabled).map((n) => n.value);
      return { value: t, isValid: !!t.length };
    }
    return e[0].checked && !e[0].disabled ? (
      // @ts-expect-error expected to work in the browser
      e[0].attributes && !_e(e[0].attributes.value) ? _e(e[0].value) || e[0].value === "" ? rd : { value: e[0].value, isValid: !0 } : rd
    ) : nd;
  }
  return nd;
};
const od = {
  isValid: !1,
  value: null
};
var Pp = (e) => Array.isArray(e) ? e.reduce((t, n) => n && n.checked && !n.disabled ? {
  isValid: !0,
  value: n.value
} : t, od) : od;
function id(e, t, n = "validate") {
  if (Eo(e) || Array.isArray(e) && e.every(Eo) || Lt(e) && !e)
    return {
      type: n,
      message: Eo(e) ? e : "",
      ref: t
    };
}
var Dn = (e) => Ve(e) && !Ho(e) ? e : {
  value: e,
  message: ""
}, sd = async (e, t, n, r, o) => {
  const { ref: i, refs: s, required: l, maxLength: c, minLength: u, min: d, max: f, pattern: h, validate: g, name: m, valueAsNumber: v, mount: y, disabled: w } = e._f, b = oe(t, m);
  if (!y || w)
    return {};
  const C = s ? s[0] : i, E = (K) => {
    r && C.reportValidity && (C.setCustomValidity(Lt(K) ? "" : K || ""), C.reportValidity());
  }, L = {}, _ = ml(i), F = qr(i), R = _ || F, D = (v || pl(i)) && _e(i.value) && _e(b) || Wo(i) && i.value === "" || b === "" || Array.isArray(b) && !b.length, H = p7.bind(null, m, n, L), J = (K, W, I, O = $t.maxLength, z = $t.minLength) => {
    const B = K ? W : I;
    L[m] = {
      type: K ? O : z,
      message: B,
      ref: i,
      ...H(K ? O : z, B)
    };
  };
  if (o ? !Array.isArray(b) || !b.length : l && (!R && (D || Ze(b)) || Lt(b) && !b || F && !Np(s).isValid || _ && !Pp(s).isValid)) {
    const { value: K, message: W } = Eo(l) ? { value: !!l, message: l } : Dn(l);
    if (K && (L[m] = {
      type: $t.required,
      message: W,
      ref: C,
      ...H($t.required, W)
    }, !n))
      return E(W), L;
  }
  if (!D && (!Ze(d) || !Ze(f))) {
    let K, W;
    const I = Dn(f), O = Dn(d);
    if (!Ze(b) && !isNaN(b)) {
      const z = i.valueAsNumber || b && +b;
      Ze(I.value) || (K = z > I.value), Ze(O.value) || (W = z < O.value);
    } else {
      const z = i.valueAsDate || new Date(b), B = (M) => /* @__PURE__ */ new Date((/* @__PURE__ */ new Date()).toDateString() + " " + M), $ = i.type == "time", G = i.type == "week";
      Tt(I.value) && b && (K = $ ? B(b) > B(I.value) : G ? b > I.value : z > new Date(I.value)), Tt(O.value) && b && (W = $ ? B(b) < B(O.value) : G ? b < O.value : z < new Date(O.value));
    }
    if ((K || W) && (J(!!K, I.message, O.message, $t.max, $t.min), !n))
      return E(L[m].message), L;
  }
  if ((c || u) && !D && (Tt(b) || o && Array.isArray(b))) {
    const K = Dn(c), W = Dn(u), I = !Ze(K.value) && b.length > +K.value, O = !Ze(W.value) && b.length < +W.value;
    if ((I || O) && (J(I, K.message, W.message), !n))
      return E(L[m].message), L;
  }
  if (h && !D && Tt(b)) {
    const { value: K, message: W } = Dn(h);
    if (Ho(K) && !b.match(K) && (L[m] = {
      type: $t.pattern,
      message: W,
      ref: i,
      ...H($t.pattern, W)
    }, !n))
      return E(W), L;
  }
  if (g) {
    if (zt(g)) {
      const K = await g(b, t), W = id(K, C);
      if (W && (L[m] = {
        ...W,
        ...H($t.validate, W.message)
      }, !n))
        return E(W.message), L;
    } else if (Ve(g)) {
      let K = {};
      for (const W in g) {
        if (!Qe(K) && !n)
          break;
        const I = id(await g[W](b, t), C, W);
        I && (K = {
          ...I,
          ...H(W, I.message)
        }, E(I.message), n && (L[m] = K));
      }
      if (!Qe(K) && (L[m] = {
        ref: C,
        ...K
      }, !n))
        return L;
    }
  }
  return E(!0), L;
};
function g7(e, t) {
  const n = t.slice(0, -1).length;
  let r = 0;
  for (; r < n; )
    e = _e(e) ? r++ : e[t[r++]];
  return e;
}
function v7(e) {
  for (const t in e)
    if (e.hasOwnProperty(t) && !_e(e[t]))
      return !1;
  return !0;
}
function Be(e, t) {
  const n = Array.isArray(t) ? t : hl(t) ? [t] : Lp(t), r = n.length === 1 ? e : g7(e, n), o = n.length - 1, i = n[o];
  return r && delete r[i], o !== 0 && (Ve(r) && Qe(r) || Array.isArray(r) && v7(r)) && Be(e, n.slice(0, -1)), e;
}
var ys = () => {
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
}, Uo = (e) => Ze(e) || !Ep(e);
function on(e, t) {
  if (Uo(e) || Uo(t))
    return e === t;
  if (jn(e) && jn(t))
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
      if (jn(i) && jn(s) || Ve(i) && Ve(s) || Array.isArray(i) && Array.isArray(s) ? !on(i, s) : i !== s)
        return !1;
    }
  }
  return !0;
}
var Tp = (e) => e.type === "select-multiple", y7 = (e) => ml(e) || qr(e), bs = (e) => Wo(e) && e.isConnected, Rp = (e) => {
  for (const t in e)
    if (zt(e[t]))
      return !0;
  return !1;
};
function zo(e, t = {}) {
  const n = Array.isArray(e);
  if (Ve(e) || n)
    for (const r in e)
      Array.isArray(e[r]) || Ve(e[r]) && !Rp(e[r]) ? (t[r] = Array.isArray(e[r]) ? [] : {}, zo(e[r], t[r])) : Ze(e[r]) || (t[r] = !0);
  return t;
}
function Ap(e, t, n) {
  const r = Array.isArray(e);
  if (Ve(e) || r)
    for (const o in e)
      Array.isArray(e[o]) || Ve(e[o]) && !Rp(e[o]) ? _e(t) || Uo(n[o]) ? n[o] = Array.isArray(e[o]) ? zo(e[o], []) : { ...zo(e[o]) } : Ap(e[o], Ze(t) ? {} : t[o], n[o]) : n[o] = !on(e[o], t[o]);
  return n;
}
var vo = (e, t) => Ap(e, t, zo(t)), Dp = (e, { valueAsNumber: t, valueAsDate: n, setValueAs: r }) => _e(e) ? e : t ? e === "" ? NaN : e && +e : n && Tt(e) ? new Date(e) : r ? r(e) : e;
function ws(e) {
  const t = e.ref;
  if (!(e.refs ? e.refs.every((n) => n.disabled) : t.disabled))
    return pl(t) ? t.files : ml(t) ? Pp(e.refs).value : Tp(t) ? [...t.selectedOptions].map(({ value: n }) => n) : qr(t) ? Np(e.refs).value : Dp(_e(t.value) ? e.ref.value : t.value, e);
}
var b7 = (e, t, n, r) => {
  const o = {};
  for (const i of e) {
    const s = oe(t, i);
    s && Ee(o, i, s._f);
  }
  return {
    criteriaMode: n,
    names: [...e],
    fields: o,
    shouldUseNativeValidation: r
  };
}, ar = (e) => _e(e) ? e : Ho(e) ? e.source : Ve(e) ? Ho(e.value) ? e.value.source : e.value : e;
const ad = "AsyncFunction";
var w7 = (e) => (!e || !e.validate) && !!(zt(e.validate) && e.validate.constructor.name === ad || Ve(e.validate) && Object.values(e.validate).find((t) => t.constructor.name === ad)), C7 = (e) => e.mount && (e.required || e.min || e.max || e.maxLength || e.minLength || e.pattern || e.validate);
function ld(e, t, n) {
  const r = oe(e, n);
  if (r || hl(n))
    return {
      error: r,
      name: n
    };
  const o = n.split(".");
  for (; o.length; ) {
    const i = o.join("."), s = oe(t, i), l = oe(e, i);
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
var x7 = (e, t, n, r, o) => o.isOnAll ? !1 : !n && o.isOnTouch ? !(t || e) : (n ? r.isOnBlur : o.isOnBlur) ? !e : (n ? r.isOnChange : o.isOnChange) ? e : !0, k7 = (e, t) => !Ei(oe(e, t)).length && Be(e, t);
const S7 = {
  mode: yt.onSubmit,
  reValidateMode: yt.onChange,
  shouldFocusError: !0
};
function M7(e = {}) {
  let t = {
    ...S7,
    ...e
  }, n = {
    submitCount: 0,
    isDirty: !1,
    isLoading: zt(t.defaultValues),
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
  }, r = {}, o = Ve(t.defaultValues) || Ve(t.values) ? st(t.defaultValues || t.values) || {} : {}, i = t.shouldUnregister ? {} : st(o), s = {
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
    values: ys(),
    array: ys(),
    state: ys()
  }, h = ed(t.mode), g = ed(t.reValidateMode), m = t.criteriaMode === yt.all, v = (k) => (N) => {
    clearTimeout(u), u = setTimeout(k, N);
  }, y = async (k) => {
    if (d.isValid || k) {
      const N = t.resolver ? Qe((await R()).errors) : await H(r, !0);
      N !== n.isValid && f.state.next({
        isValid: N
      });
    }
  }, w = (k, N) => {
    (d.isValidating || d.validatingFields) && ((k || Array.from(l.mount)).forEach((T) => {
      T && (N ? Ee(n.validatingFields, T, N) : Be(n.validatingFields, T));
    }), f.state.next({
      validatingFields: n.validatingFields,
      isValidating: !Qe(n.validatingFields)
    }));
  }, b = (k, N = [], T, Q, Y = !0, U = !0) => {
    if (Q && T) {
      if (s.action = !0, U && Array.isArray(oe(r, k))) {
        const ae = T(oe(r, k), Q.argA, Q.argB);
        Y && Ee(r, k, ae);
      }
      if (U && Array.isArray(oe(n.errors, k))) {
        const ae = T(oe(n.errors, k), Q.argA, Q.argB);
        Y && Ee(n.errors, k, ae), k7(n.errors, k);
      }
      if (d.touchedFields && U && Array.isArray(oe(n.touchedFields, k))) {
        const ae = T(oe(n.touchedFields, k), Q.argA, Q.argB);
        Y && Ee(n.touchedFields, k, ae);
      }
      d.dirtyFields && (n.dirtyFields = vo(o, i)), f.state.next({
        name: k,
        isDirty: K(k, N),
        dirtyFields: n.dirtyFields,
        errors: n.errors,
        isValid: n.isValid
      });
    } else
      Ee(i, k, N);
  }, C = (k, N) => {
    Ee(n.errors, k, N), f.state.next({
      errors: n.errors
    });
  }, E = (k) => {
    n.errors = k, f.state.next({
      errors: n.errors,
      isValid: !1
    });
  }, L = (k, N, T, Q) => {
    const Y = oe(r, k);
    if (Y) {
      const U = oe(i, k, _e(T) ? oe(o, k) : T);
      _e(U) || Q && Q.defaultChecked || N ? Ee(i, k, N ? U : ws(Y._f)) : O(k, U), s.mount && y();
    }
  }, _ = (k, N, T, Q, Y) => {
    let U = !1, ae = !1;
    const ge = {
      name: k
    }, Le = !!(oe(r, k) && oe(r, k)._f && oe(r, k)._f.disabled);
    if (!T || Q) {
      d.isDirty && (ae = n.isDirty, n.isDirty = ge.isDirty = K(), U = ae !== ge.isDirty);
      const Ne = Le || on(oe(o, k), N);
      ae = !!(!Le && oe(n.dirtyFields, k)), Ne || Le ? Be(n.dirtyFields, k) : Ee(n.dirtyFields, k, !0), ge.dirtyFields = n.dirtyFields, U = U || d.dirtyFields && ae !== !Ne;
    }
    if (T) {
      const Ne = oe(n.touchedFields, k);
      Ne || (Ee(n.touchedFields, k, T), ge.touchedFields = n.touchedFields, U = U || d.touchedFields && Ne !== T);
    }
    return U && Y && f.state.next(ge), U ? ge : {};
  }, F = (k, N, T, Q) => {
    const Y = oe(n.errors, k), U = d.isValid && Lt(N) && n.isValid !== N;
    if (e.delayError && T ? (c = v(() => C(k, T)), c(e.delayError)) : (clearTimeout(u), c = null, T ? Ee(n.errors, k, T) : Be(n.errors, k)), (T ? !on(Y, T) : Y) || !Qe(Q) || U) {
      const ae = {
        ...Q,
        ...U && Lt(N) ? { isValid: N } : {},
        errors: n.errors,
        name: k
      };
      n = {
        ...n,
        ...ae
      }, f.state.next(ae);
    }
  }, R = async (k) => {
    w(k, !0);
    const N = await t.resolver(i, t.context, b7(k || l.mount, r, t.criteriaMode, t.shouldUseNativeValidation));
    return w(k), N;
  }, D = async (k) => {
    const { errors: N } = await R(k);
    if (k)
      for (const T of k) {
        const Q = oe(N, T);
        Q ? Ee(n.errors, T, Q) : Be(n.errors, T);
      }
    else
      n.errors = N;
    return N;
  }, H = async (k, N, T = {
    valid: !0
  }) => {
    for (const Q in k) {
      const Y = k[Q];
      if (Y) {
        const { _f: U, ...ae } = Y;
        if (U) {
          const ge = l.array.has(U.name), Le = Y._f && w7(Y._f);
          Le && d.validatingFields && w([Q], !0);
          const Ne = await sd(Y, i, m, t.shouldUseNativeValidation && !N, ge);
          if (Le && d.validatingFields && w([Q]), Ne[U.name] && (T.valid = !1, N))
            break;
          !N && (oe(Ne, U.name) ? ge ? m7(n.errors, Ne, U.name) : Ee(n.errors, U.name, Ne[U.name]) : Be(n.errors, U.name));
        }
        !Qe(ae) && await H(ae, N, T);
      }
    }
    return T.valid;
  }, J = () => {
    for (const k of l.unMount) {
      const N = oe(r, k);
      N && (N._f.refs ? N._f.refs.every((T) => !bs(T)) : !bs(N._f.ref)) && ce(k);
    }
    l.unMount = /* @__PURE__ */ new Set();
  }, K = (k, N) => (k && N && Ee(i, k, N), !on(S(), o)), W = (k, N, T) => h7(k, l, {
    ...s.mount ? i : _e(N) ? o : Tt(k) ? { [k]: N } : N
  }, T, N), I = (k) => Ei(oe(s.mount ? i : o, k, e.shouldUnregister ? oe(o, k, []) : [])), O = (k, N, T = {}) => {
    const Q = oe(r, k);
    let Y = N;
    if (Q) {
      const U = Q._f;
      U && (!U.disabled && Ee(i, k, Dp(N, U)), Y = Wo(U.ref) && Ze(N) ? "" : N, Tp(U.ref) ? [...U.ref.options].forEach((ae) => ae.selected = Y.includes(ae.value)) : U.refs ? qr(U.ref) ? U.refs.length > 1 ? U.refs.forEach((ae) => (!ae.defaultChecked || !ae.disabled) && (ae.checked = Array.isArray(Y) ? !!Y.find((ge) => ge === ae.value) : Y === ae.value)) : U.refs[0] && (U.refs[0].checked = !!Y) : U.refs.forEach((ae) => ae.checked = ae.value === Y) : pl(U.ref) ? U.ref.value = "" : (U.ref.value = Y, U.ref.type || f.values.next({
        name: k,
        values: { ...i }
      })));
    }
    (T.shouldDirty || T.shouldTouch) && _(k, Y, T.shouldTouch, T.shouldDirty, !0), T.shouldValidate && M(k);
  }, z = (k, N, T) => {
    for (const Q in N) {
      const Y = N[Q], U = `${k}.${Q}`, ae = oe(r, U);
      (l.array.has(k) || !Uo(Y) || ae && !ae._f) && !jn(Y) ? z(U, Y, T) : O(U, Y, T);
    }
  }, B = (k, N, T = {}) => {
    const Q = oe(r, k), Y = l.array.has(k), U = st(N);
    Ee(i, k, U), Y ? (f.array.next({
      name: k,
      values: { ...i }
    }), (d.isDirty || d.dirtyFields) && T.shouldDirty && f.state.next({
      name: k,
      dirtyFields: vo(o, i),
      isDirty: K(k, U)
    })) : Q && !Q._f && !Ze(U) ? z(k, U, T) : O(k, U, T), td(k, l) && f.state.next({ ...n }), f.values.next({
      name: s.mount ? k : void 0,
      values: { ...i }
    });
  }, $ = async (k) => {
    s.mount = !0;
    const N = k.target;
    let T = N.name, Q = !0;
    const Y = oe(r, T), U = () => N.type ? ws(Y._f) : s7(k), ae = (ge) => {
      Q = Number.isNaN(ge) || on(ge, oe(i, T, ge));
    };
    if (Y) {
      let ge, Le;
      const Ne = U(), gt = k.type === Ju.BLUR || k.type === Ju.FOCUS_OUT, en = !C7(Y._f) && !t.resolver && !oe(n.errors, T) && !Y._f.deps || x7(gt, oe(n.touchedFields, T), n.isSubmitted, g, h), nt = td(T, l, gt);
      Ee(i, T, Ne), gt ? (Y._f.onBlur && Y._f.onBlur(k), c && c(0)) : Y._f.onChange && Y._f.onChange(k);
      const vt = _(T, Ne, gt, !1), fn = !Qe(vt) || nt;
      if (!gt && f.values.next({
        name: T,
        type: k.type,
        values: { ...i }
      }), en)
        return d.isValid && (e.mode === "onBlur" ? gt && y() : y()), fn && f.state.next({ name: T, ...nt ? {} : vt });
      if (!gt && nt && f.state.next({ ...n }), t.resolver) {
        const { errors: Bt } = await R([T]);
        if (ae(Ne), Q) {
          const Hi = ld(n.errors, r, T), ro = ld(Bt, r, Hi.name || T);
          ge = ro.error, T = ro.name, Le = Qe(Bt);
        }
      } else
        w([T], !0), ge = (await sd(Y, i, m, t.shouldUseNativeValidation))[T], w([T]), ae(Ne), Q && (ge ? Le = !1 : d.isValid && (Le = await H(r, !0)));
      Q && (Y._f.deps && M(Y._f.deps), F(T, Le, ge, vt));
    }
  }, G = (k, N) => {
    if (oe(n.errors, N) && k.focus)
      return k.focus(), 1;
  }, M = async (k, N = {}) => {
    let T, Q;
    const Y = Mo(k);
    if (t.resolver) {
      const U = await D(_e(k) ? k : Y);
      T = Qe(U), Q = k ? !Y.some((ae) => oe(U, ae)) : T;
    } else k ? (Q = (await Promise.all(Y.map(async (U) => {
      const ae = oe(r, U);
      return await H(ae && ae._f ? { [U]: ae } : ae);
    }))).every(Boolean), !(!Q && !n.isValid) && y()) : Q = T = await H(r);
    return f.state.next({
      ...!Tt(k) || d.isValid && T !== n.isValid ? {} : { name: k },
      ...t.resolver || !k ? { isValid: T } : {},
      errors: n.errors
    }), N.shouldFocus && !Q && br(r, G, k ? Y : l.mount), Q;
  }, S = (k) => {
    const N = {
      ...s.mount ? i : o
    };
    return _e(k) ? N : Tt(k) ? oe(N, k) : k.map((T) => oe(N, T));
  }, X = (k, N) => ({
    invalid: !!oe((N || n).errors, k),
    isDirty: !!oe((N || n).dirtyFields, k),
    error: oe((N || n).errors, k),
    isValidating: !!oe(n.validatingFields, k),
    isTouched: !!oe((N || n).touchedFields, k)
  }), te = (k) => {
    k && Mo(k).forEach((N) => Be(n.errors, N)), f.state.next({
      errors: k ? n.errors : {}
    });
  }, ie = (k, N, T) => {
    const Q = (oe(r, k, { _f: {} })._f || {}).ref, Y = oe(n.errors, k) || {}, { ref: U, message: ae, type: ge, ...Le } = Y;
    Ee(n.errors, k, {
      ...Le,
      ...N,
      ref: Q
    }), f.state.next({
      name: k,
      errors: n.errors,
      isValid: !1
    }), T && T.shouldFocus && Q && Q.focus && Q.focus();
  }, de = (k, N) => zt(k) ? f.values.subscribe({
    next: (T) => k(W(void 0, N), T)
  }) : W(k, N, !0), ce = (k, N = {}) => {
    for (const T of k ? Mo(k) : l.mount)
      l.mount.delete(T), l.array.delete(T), N.keepValue || (Be(r, T), Be(i, T)), !N.keepError && Be(n.errors, T), !N.keepDirty && Be(n.dirtyFields, T), !N.keepTouched && Be(n.touchedFields, T), !N.keepIsValidating && Be(n.validatingFields, T), !t.shouldUnregister && !N.keepDefaultValue && Be(o, T);
    f.values.next({
      values: { ...i }
    }), f.state.next({
      ...n,
      ...N.keepDirty ? { isDirty: K() } : {}
    }), !N.keepIsValid && y();
  }, V = ({ disabled: k, name: N, field: T, fields: Q, value: Y }) => {
    if (Lt(k) && s.mount || k) {
      const U = k ? void 0 : _e(Y) ? ws(T ? T._f : oe(Q, N)._f) : Y;
      Ee(i, N, U), _(N, U, !1, !1, !0);
    }
  }, Z = (k, N = {}) => {
    let T = oe(r, k);
    const Q = Lt(N.disabled) || Lt(e.disabled);
    return Ee(r, k, {
      ...T || {},
      _f: {
        ...T && T._f ? T._f : { ref: { name: k } },
        name: k,
        mount: !0,
        ...N
      }
    }), l.mount.add(k), T ? V({
      field: T,
      disabled: Lt(N.disabled) ? N.disabled : e.disabled,
      name: k,
      value: N.value
    }) : L(k, !0, N.value), {
      ...Q ? { disabled: N.disabled || e.disabled } : {},
      ...t.progressive ? {
        required: !!N.required,
        min: ar(N.min),
        max: ar(N.max),
        minLength: ar(N.minLength),
        maxLength: ar(N.maxLength),
        pattern: ar(N.pattern)
      } : {},
      name: k,
      onChange: $,
      onBlur: $,
      ref: (Y) => {
        if (Y) {
          Z(k, N), T = oe(r, k);
          const U = _e(Y.value) && Y.querySelectorAll && Y.querySelectorAll("input,select,textarea")[0] || Y, ae = y7(U), ge = T._f.refs || [];
          if (ae ? ge.find((Le) => Le === U) : U === T._f.ref)
            return;
          Ee(r, k, {
            _f: {
              ...T._f,
              ...ae ? {
                refs: [
                  ...ge.filter(bs),
                  U,
                  ...Array.isArray(oe(o, k)) ? [{}] : []
                ],
                ref: { type: U.type, name: k }
              } : { ref: U }
            }
          }), L(k, !1, void 0, U);
        } else
          T = oe(r, k, {}), T._f && (T._f.mount = !1), (t.shouldUnregister || N.shouldUnregister) && !(l7(l.array, k) && s.action) && l.unMount.add(k);
      }
    };
  }, se = () => t.shouldFocusError && br(r, G, l.mount), re = (k) => {
    Lt(k) && (f.state.next({ disabled: k }), br(r, (N, T) => {
      const Q = oe(r, T);
      Q && (N.disabled = Q._f.disabled || k, Array.isArray(Q._f.refs) && Q._f.refs.forEach((Y) => {
        Y.disabled = Q._f.disabled || k;
      }));
    }, 0, !1));
  }, q = (k, N) => async (T) => {
    let Q;
    T && (T.preventDefault && T.preventDefault(), T.persist && T.persist());
    let Y = st(i);
    if (f.state.next({
      isSubmitting: !0
    }), t.resolver) {
      const { errors: U, values: ae } = await R();
      n.errors = U, Y = ae;
    } else
      await H(r);
    if (Be(n.errors, "root"), Qe(n.errors)) {
      f.state.next({
        errors: {}
      });
      try {
        await k(Y, T);
      } catch (U) {
        Q = U;
      }
    } else
      N && await N({ ...n.errors }, T), se(), setTimeout(se);
    if (f.state.next({
      isSubmitted: !0,
      isSubmitting: !1,
      isSubmitSuccessful: Qe(n.errors) && !Q,
      submitCount: n.submitCount + 1,
      errors: n.errors
    }), Q)
      throw Q;
  }, j = (k, N = {}) => {
    oe(r, k) && (_e(N.defaultValue) ? B(k, st(oe(o, k))) : (B(k, N.defaultValue), Ee(o, k, st(N.defaultValue))), N.keepTouched || Be(n.touchedFields, k), N.keepDirty || (Be(n.dirtyFields, k), n.isDirty = N.defaultValue ? K(k, st(oe(o, k))) : K()), N.keepError || (Be(n.errors, k), d.isValid && y()), f.state.next({ ...n }));
  }, ue = (k, N = {}) => {
    const T = k ? st(k) : o, Q = st(T), Y = Qe(k), U = Y ? o : Q;
    if (N.keepDefaultValues || (o = T), !N.keepValues) {
      if (N.keepDirtyValues)
        for (const ae of l.mount)
          oe(n.dirtyFields, ae) ? Ee(U, ae, oe(i, ae)) : B(ae, oe(U, ae));
      else {
        if (fl && _e(k))
          for (const ae of l.mount) {
            const ge = oe(r, ae);
            if (ge && ge._f) {
              const Le = Array.isArray(ge._f.refs) ? ge._f.refs[0] : ge._f.ref;
              if (Wo(Le)) {
                const Ne = Le.closest("form");
                if (Ne) {
                  Ne.reset();
                  break;
                }
              }
            }
          }
        r = {};
      }
      i = e.shouldUnregister ? N.keepDefaultValues ? st(o) : {} : st(U), f.array.next({
        values: { ...U }
      }), f.values.next({
        values: { ...U }
      });
    }
    l = {
      mount: N.keepDirtyValues ? l.mount : /* @__PURE__ */ new Set(),
      unMount: /* @__PURE__ */ new Set(),
      array: /* @__PURE__ */ new Set(),
      watch: /* @__PURE__ */ new Set(),
      watchAll: !1,
      focus: ""
    }, s.mount = !d.isValid || !!N.keepIsValid || !!N.keepDirtyValues, s.watch = !!e.shouldUnregister, f.state.next({
      submitCount: N.keepSubmitCount ? n.submitCount : 0,
      isDirty: Y ? !1 : N.keepDirty ? n.isDirty : !!(N.keepDefaultValues && !on(k, o)),
      isSubmitted: N.keepIsSubmitted ? n.isSubmitted : !1,
      dirtyFields: Y ? {} : N.keepDirtyValues ? N.keepDefaultValues && i ? vo(o, i) : n.dirtyFields : N.keepDefaultValues && k ? vo(o, k) : N.keepDirty ? n.dirtyFields : {},
      touchedFields: N.keepTouched ? n.touchedFields : {},
      errors: N.keepErrors ? n.errors : {},
      isSubmitSuccessful: N.keepIsSubmitSuccessful ? n.isSubmitSuccessful : !1,
      isSubmitting: !1
    });
  }, ne = (k, N) => ue(zt(k) ? k(i) : k, N);
  return {
    control: {
      register: Z,
      unregister: ce,
      getFieldState: X,
      handleSubmit: q,
      setError: ie,
      _executeSchema: R,
      _getWatch: W,
      _getDirty: K,
      _updateValid: y,
      _removeUnmounted: J,
      _updateFieldArray: b,
      _updateDisabledField: V,
      _getFieldArray: I,
      _reset: ue,
      _resetDefaultValues: () => zt(t.defaultValues) && t.defaultValues().then((k) => {
        ne(k, t.resetOptions), f.state.next({
          isLoading: !1
        });
      }),
      _updateFormState: (k) => {
        n = {
          ...n,
          ...k
        };
      },
      _disableForm: re,
      _subjects: f,
      _proxyFormState: d,
      _setErrors: E,
      get _fields() {
        return r;
      },
      get _formValues() {
        return i;
      },
      get _state() {
        return s;
      },
      set _state(k) {
        s = k;
      },
      get _defaultValues() {
        return o;
      },
      get _names() {
        return l;
      },
      set _names(k) {
        l = k;
      },
      get _formState() {
        return n;
      },
      set _formState(k) {
        n = k;
      },
      get _options() {
        return t;
      },
      set _options(k) {
        t = {
          ...t,
          ...k
        };
      }
    },
    trigger: M,
    register: Z,
    handleSubmit: q,
    watch: de,
    setValue: B,
    getValues: S,
    reset: ne,
    resetField: j,
    clearErrors: te,
    unregister: ce,
    setError: ie,
    setFocus: (k, N = {}) => {
      const T = oe(r, k), Q = T && T._f;
      if (Q) {
        const Y = Q.refs ? Q.refs[0] : Q.ref;
        Y.focus && (Y.focus(), N.shouldSelect && Y.select());
      }
    },
    getFieldState: X
  };
}
function HN(e = {}) {
  const t = le.useRef(), n = le.useRef(), [r, o] = le.useState({
    isDirty: !1,
    isValidating: !1,
    isLoading: zt(e.defaultValues),
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
    defaultValues: zt(e.defaultValues) ? void 0 : e.defaultValues
  });
  t.current || (t.current = {
    ...M7(e),
    formState: r
  });
  const i = t.current.control;
  return i._options = e, f7({
    subject: i._subjects.state,
    next: (s) => {
      d7(s, i._proxyFormState, i._updateFormState) && o({ ...i._formState });
    }
  }), le.useEffect(() => i._disableForm(e.disabled), [i, e.disabled]), le.useEffect(() => {
    if (i._proxyFormState.isDirty) {
      const s = i._getDirty();
      s !== r.isDirty && i._subjects.state.next({
        isDirty: s
      });
    }
  }, [i, r.isDirty]), le.useEffect(() => {
    e.values && !on(e.values, n.current) ? (i._reset(e.values, i._options.resetOptions), n.current = e.values, o((s) => ({ ...s }))) : i._resetDefaultValues();
  }, [e.values, i]), le.useEffect(() => {
    e.errors && i._setErrors(e.errors);
  }, [e.errors, i]), le.useEffect(() => {
    i._state.mount || (i._updateValid(), i._state.mount = !0), i._state.watch && (i._state.watch = !1, i._subjects.state.next({ ...i._formState })), i._removeUnmounted();
  }), le.useEffect(() => {
    e.shouldUnregister && i._subjects.values.next({
      values: i._getWatch()
    });
  }, [e.shouldUnregister, i]), t.current.formState = u7(r, i), t.current;
}
const E7 = Fe(
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
), L7 = {
  destructive: B3,
  positive: V3,
  warning: j3,
  info: A3
}, UN = $e(
  {
    name: "Alert",
    type: "info"
  },
  // eslint-disable-next-line react/display-name
  p.forwardRef(({ className: e, variant: t = "info", children: n, ...r }, o) => {
    const i = t ? L7[t] : null;
    return /* @__PURE__ */ a(
      "div",
      {
        ref: o,
        role: "alert",
        className: A(E7({ variant: t }), e),
        ...r,
        children: /* @__PURE__ */ x("div", { className: "flex flex-row", children: [
          i && /* @__PURE__ */ a("div", { className: "mr-2 flex h-6 items-center", children: /* @__PURE__ */ a(i, { size: 20 }) }),
          /* @__PURE__ */ a("div", { children: n })
        ] })
      }
    );
  })
), zN = p.forwardRef(function({ className: t, ...n }, r) {
  return /* @__PURE__ */ a(
    "h5",
    {
      ref: r,
      className: A("mb-1 text-base font-medium tracking-tight", t),
      ...n
    }
  );
}), GN = p.forwardRef(function({ className: t, ...n }, r) {
  return /* @__PURE__ */ a(
    "div",
    {
      ref: r,
      className: A("[&_p]:leading-relaxed", t),
      ...n
    }
  );
}), N7 = Fe(
  "flex items-center justify-center border border-solid",
  {
    variants: {
      type: {
        critical: "border-f1-border-critical bg-f1-background-critical text-f1-icon-critical",
        warning: "border-f1-border-warning bg-f1-background-warning text-f1-icon-warning",
        info: "border-f1-border-info bg-f1-background-info text-f1-icon-info"
      },
      size: {
        sm: "h-6 w-6 rounded-sm",
        md: "h-8 w-8 rounded",
        lg: "h-10 w-10 rounded-md"
      }
    },
    defaultVariants: {
      type: "info",
      size: "md"
    }
  }
), KN = ({ type: e, size: t }) => {
  const n = {
    critical: Ha,
    warning: Ga,
    info: za
  };
  return /* @__PURE__ */ a("div", { className: N7({ type: e, size: t }), children: /* @__PURE__ */ a(Re, { icon: n[e], size: t }) });
}, P7 = ({ month: e, day: t }) => {
  const n = e.slice(0, 3);
  return /* @__PURE__ */ x("div", { className: "flex h-10 w-10 flex-col items-center justify-center rounded border border-solid border-f1-border-secondary bg-f1-background-inverse-secondary", children: [
    /* @__PURE__ */ a("div", { className: "pt-0.5 text-xs font-semibold uppercase leading-3 text-f1-foreground-critical dark:text-f1-foreground-inverse-secondary", children: n }),
    /* @__PURE__ */ a("div", { className: "flex items-center justify-center text-lg font-medium leading-tight text-f1-foreground", children: t })
  ] });
};
function pt(e, t) {
  const n = e.displayName || e.name || "Component";
  return Object.assign(t, { displayName: `${n}.Skeleton` }), Object.assign(e, { Skeleton: t });
}
const _p = ({ orientation: e = "vertical", limit: t = 600, children: n }) => /* @__PURE__ */ a(
  "div",
  {
    style: {
      maskImage: `linear-gradient(to ${e == "vertical" ? "bottom" : "right"}, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) calc(min(100% - ${t}px, 100%)), rgba(0, 0, 0, 0) 100%)`
    },
    className: e == "horizontal" ? "w-full overflow-hidden" : "w-auto",
    children: n
  }
);
function Dt({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    "div",
    {
      className: A(
        "animate-pulse rounded-xs bg-f1-background-secondary",
        e
      ),
      ...t
    }
  );
}
const T7 = {
  birthday: "🎂",
  anniversary: "🎉",
  "first-day": "💼"
}, R7 = {
  viridian: "bg-[hsl(theme(colors.viridian.50)_/_0.2)]",
  malibu: "bg-[hsl(theme(colors.malibu.50)_/_0.2)]",
  yellow: "bg-[hsl(theme(colors.yellow.50)_/_0.2)]",
  purple: "bg-[hsl(theme(colors.purple.50)_/_0.2)]",
  lilac: "bg-[hsl(theme(colors.lilac.50)_/_0.2)]",
  barbie: "bg-[hsl(theme(colors.barbie.50)_/_0.2)]",
  smoke: "bg-[hsl(theme(colors.smoke.50)_/_0.2)]",
  army: "bg-[hsl(theme(colors.army.50)_/_0.2)]",
  flubber: "bg-[hsl(theme(colors.flubber.50)_/_0.2)]",
  indigo: "bg-[hsl(theme(colors.indigo.50)_/_0.2)]",
  camel: "bg-[hsl(theme(colors.camel.50)_/_0.2)]"
};
function A7({
  firstName: e,
  lastName: t,
  src: n,
  canReact: r
}) {
  return /* @__PURE__ */ x(
    "div",
    {
      className: A(
        "relative h-32 w-full overflow-hidden rounded-md bg-f1-background",
        n ? "" : R7[Ph(
          [e, t].join("")
        )]
      ),
      children: [
        n && /* @__PURE__ */ a(
          "div",
          {
            className: "absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10",
            style: { backgroundImage: `url(${n})` }
          }
        ),
        /* @__PURE__ */ a("div", { className: "relative flex h-full w-full items-center justify-center overflow-hidden rounded-md backdrop-blur", children: /* @__PURE__ */ x("div", { className: "relative h-fit w-fit", children: [
          /* @__PURE__ */ a(
            "div",
            {
              style: r ? {
                clipPath: "path('M69.6933 48.707C71.1842 44.7556 72 40.4731 72 36C72 16.1177 55.8823 0 36 0C16.1177 0 0 16.1177 0 36C0 55.8823 16.1177 72 36 72C40.4731 72 44.7556 71.1842 48.707 69.6933C48.6283 69.4953 48.5557 69.2942 48.4894 69.0902C48 67.5838 48 65.7226 48 62C48 58.2774 48 56.4162 48.4894 54.9098C49.4786 51.8655 51.8655 49.4786 54.9098 48.4894C56.4162 48 58.2774 48 62 48C65.7226 48 67.5838 48 69.0902 48.4894C69.2942 48.5557 69.4953 48.6283 69.6933 48.707')"
              } : {},
              children: /* @__PURE__ */ a(
                Yr,
                {
                  src: n,
                  firstName: e,
                  lastName: t,
                  size: "large"
                }
              )
            }
          ),
          r && /* @__PURE__ */ a("div", { className: "absolute -bottom-[3px] -right-0.5", children: /* @__PURE__ */ a(
            _t,
            {
              label: "React",
              hideLabel: !0,
              round: !0,
              variant: "neutral",
              size: "sm",
              icon: Y1
            }
          ) })
        ] }) })
      ]
    }
  );
}
var gl = {};
(function e(t, n, r, o) {
  var i = !!(t.Worker && t.Blob && t.Promise && t.OffscreenCanvas && t.OffscreenCanvasRenderingContext2D && t.HTMLCanvasElement && t.HTMLCanvasElement.prototype.transferControlToOffscreen && t.URL && t.URL.createObjectURL), s = typeof Path2D == "function" && typeof DOMMatrix == "function", l = function() {
    if (!t.OffscreenCanvas)
      return !1;
    var M = new OffscreenCanvas(1, 1), S = M.getContext("2d");
    S.fillRect(0, 0, 1, 1);
    var X = M.transferToImageBitmap();
    try {
      S.createPattern(X, "no-repeat");
    } catch {
      return !1;
    }
    return !0;
  }();
  function c() {
  }
  function u(M) {
    var S = n.exports.Promise, X = S !== void 0 ? S : t.Promise;
    return typeof X == "function" ? new X(M) : (M(c, c), null);
  }
  var d = /* @__PURE__ */ function(M, S) {
    return {
      transform: function(X) {
        if (M)
          return X;
        if (S.has(X))
          return S.get(X);
        var te = new OffscreenCanvas(X.width, X.height), ie = te.getContext("2d");
        return ie.drawImage(X, 0, 0), S.set(X, te), te;
      },
      clear: function() {
        S.clear();
      }
    };
  }(l, /* @__PURE__ */ new Map()), f = function() {
    var M = Math.floor(16.666666666666668), S, X, te = {}, ie = 0;
    return typeof requestAnimationFrame == "function" && typeof cancelAnimationFrame == "function" ? (S = function(de) {
      var ce = Math.random();
      return te[ce] = requestAnimationFrame(function V(Z) {
        ie === Z || ie + M - 1 < Z ? (ie = Z, delete te[ce], de()) : te[ce] = requestAnimationFrame(V);
      }), ce;
    }, X = function(de) {
      te[de] && cancelAnimationFrame(te[de]);
    }) : (S = function(de) {
      return setTimeout(de, M);
    }, X = function(de) {
      return clearTimeout(de);
    }), { frame: S, cancel: X };
  }(), h = /* @__PURE__ */ function() {
    var M, S, X = {};
    function te(ie) {
      function de(ce, V) {
        ie.postMessage({ options: ce || {}, callback: V });
      }
      ie.init = function(V) {
        var Z = V.transferControlToOffscreen();
        ie.postMessage({ canvas: Z }, [Z]);
      }, ie.fire = function(V, Z, se) {
        if (S)
          return de(V, null), S;
        var re = Math.random().toString(36).slice(2);
        return S = u(function(q) {
          function j(ue) {
            ue.data.callback === re && (delete X[re], ie.removeEventListener("message", j), S = null, d.clear(), se(), q());
          }
          ie.addEventListener("message", j), de(V, re), X[re] = j.bind(null, { data: { callback: re } });
        }), S;
      }, ie.reset = function() {
        ie.postMessage({ reset: !0 });
        for (var V in X)
          X[V](), delete X[V];
      };
    }
    return function() {
      if (M)
        return M;
      if (!r && i) {
        var ie = [
          "var CONFETTI, SIZE = {}, module = {};",
          "(" + e.toString() + ")(this, module, true, SIZE);",
          "onmessage = function(msg) {",
          "  if (msg.data.options) {",
          "    CONFETTI(msg.data.options).then(function () {",
          "      if (msg.data.callback) {",
          "        postMessage({ callback: msg.data.callback });",
          "      }",
          "    });",
          "  } else if (msg.data.reset) {",
          "    CONFETTI && CONFETTI.reset();",
          "  } else if (msg.data.resize) {",
          "    SIZE.width = msg.data.resize.width;",
          "    SIZE.height = msg.data.resize.height;",
          "  } else if (msg.data.canvas) {",
          "    SIZE.width = msg.data.canvas.width;",
          "    SIZE.height = msg.data.canvas.height;",
          "    CONFETTI = module.exports.create(msg.data.canvas);",
          "  }",
          "}"
        ].join(`
`);
        try {
          M = new Worker(URL.createObjectURL(new Blob([ie])));
        } catch (de) {
          return typeof console !== void 0 && typeof console.warn == "function" && console.warn("🎊 Could not load worker", de), null;
        }
        te(M);
      }
      return M;
    };
  }(), g = {
    particleCount: 50,
    angle: 90,
    spread: 45,
    startVelocity: 45,
    decay: 0.9,
    gravity: 1,
    drift: 0,
    ticks: 200,
    x: 0.5,
    y: 0.5,
    shapes: ["square", "circle"],
    zIndex: 100,
    colors: [
      "#26ccff",
      "#a25afd",
      "#ff5e7e",
      "#88ff5a",
      "#fcff42",
      "#ffa62d",
      "#ff36ff"
    ],
    // probably should be true, but back-compat
    disableForReducedMotion: !1,
    scalar: 1
  };
  function m(M, S) {
    return S ? S(M) : M;
  }
  function v(M) {
    return M != null;
  }
  function y(M, S, X) {
    return m(
      M && v(M[S]) ? M[S] : g[S],
      X
    );
  }
  function w(M) {
    return M < 0 ? 0 : Math.floor(M);
  }
  function b(M, S) {
    return Math.floor(Math.random() * (S - M)) + M;
  }
  function C(M) {
    return parseInt(M, 16);
  }
  function E(M) {
    return M.map(L);
  }
  function L(M) {
    var S = String(M).replace(/[^0-9a-f]/gi, "");
    return S.length < 6 && (S = S[0] + S[0] + S[1] + S[1] + S[2] + S[2]), {
      r: C(S.substring(0, 2)),
      g: C(S.substring(2, 4)),
      b: C(S.substring(4, 6))
    };
  }
  function _(M) {
    var S = y(M, "origin", Object);
    return S.x = y(S, "x", Number), S.y = y(S, "y", Number), S;
  }
  function F(M) {
    M.width = document.documentElement.clientWidth, M.height = document.documentElement.clientHeight;
  }
  function R(M) {
    var S = M.getBoundingClientRect();
    M.width = S.width, M.height = S.height;
  }
  function D(M) {
    var S = document.createElement("canvas");
    return S.style.position = "fixed", S.style.top = "0px", S.style.left = "0px", S.style.pointerEvents = "none", S.style.zIndex = M, S;
  }
  function H(M, S, X, te, ie, de, ce, V, Z) {
    M.save(), M.translate(S, X), M.rotate(de), M.scale(te, ie), M.arc(0, 0, 1, ce, V, Z), M.restore();
  }
  function J(M) {
    var S = M.angle * (Math.PI / 180), X = M.spread * (Math.PI / 180);
    return {
      x: M.x,
      y: M.y,
      wobble: Math.random() * 10,
      wobbleSpeed: Math.min(0.11, Math.random() * 0.1 + 0.05),
      velocity: M.startVelocity * 0.5 + Math.random() * M.startVelocity,
      angle2D: -S + (0.5 * X - Math.random() * X),
      tiltAngle: (Math.random() * (0.75 - 0.25) + 0.25) * Math.PI,
      color: M.color,
      shape: M.shape,
      tick: 0,
      totalTicks: M.ticks,
      decay: M.decay,
      drift: M.drift,
      random: Math.random() + 2,
      tiltSin: 0,
      tiltCos: 0,
      wobbleX: 0,
      wobbleY: 0,
      gravity: M.gravity * 3,
      ovalScalar: 0.6,
      scalar: M.scalar,
      flat: M.flat
    };
  }
  function K(M, S) {
    S.x += Math.cos(S.angle2D) * S.velocity + S.drift, S.y += Math.sin(S.angle2D) * S.velocity + S.gravity, S.velocity *= S.decay, S.flat ? (S.wobble = 0, S.wobbleX = S.x + 10 * S.scalar, S.wobbleY = S.y + 10 * S.scalar, S.tiltSin = 0, S.tiltCos = 0, S.random = 1) : (S.wobble += S.wobbleSpeed, S.wobbleX = S.x + 10 * S.scalar * Math.cos(S.wobble), S.wobbleY = S.y + 10 * S.scalar * Math.sin(S.wobble), S.tiltAngle += 0.1, S.tiltSin = Math.sin(S.tiltAngle), S.tiltCos = Math.cos(S.tiltAngle), S.random = Math.random() + 2);
    var X = S.tick++ / S.totalTicks, te = S.x + S.random * S.tiltCos, ie = S.y + S.random * S.tiltSin, de = S.wobbleX + S.random * S.tiltCos, ce = S.wobbleY + S.random * S.tiltSin;
    if (M.fillStyle = "rgba(" + S.color.r + ", " + S.color.g + ", " + S.color.b + ", " + (1 - X) + ")", M.beginPath(), s && S.shape.type === "path" && typeof S.shape.path == "string" && Array.isArray(S.shape.matrix))
      M.fill(B(
        S.shape.path,
        S.shape.matrix,
        S.x,
        S.y,
        Math.abs(de - te) * 0.1,
        Math.abs(ce - ie) * 0.1,
        Math.PI / 10 * S.wobble
      ));
    else if (S.shape.type === "bitmap") {
      var V = Math.PI / 10 * S.wobble, Z = Math.abs(de - te) * 0.1, se = Math.abs(ce - ie) * 0.1, re = S.shape.bitmap.width * S.scalar, q = S.shape.bitmap.height * S.scalar, j = new DOMMatrix([
        Math.cos(V) * Z,
        Math.sin(V) * Z,
        -Math.sin(V) * se,
        Math.cos(V) * se,
        S.x,
        S.y
      ]);
      j.multiplySelf(new DOMMatrix(S.shape.matrix));
      var ue = M.createPattern(d.transform(S.shape.bitmap), "no-repeat");
      ue.setTransform(j), M.globalAlpha = 1 - X, M.fillStyle = ue, M.fillRect(
        S.x - re / 2,
        S.y - q / 2,
        re,
        q
      ), M.globalAlpha = 1;
    } else if (S.shape === "circle")
      M.ellipse ? M.ellipse(S.x, S.y, Math.abs(de - te) * S.ovalScalar, Math.abs(ce - ie) * S.ovalScalar, Math.PI / 10 * S.wobble, 0, 2 * Math.PI) : H(M, S.x, S.y, Math.abs(de - te) * S.ovalScalar, Math.abs(ce - ie) * S.ovalScalar, Math.PI / 10 * S.wobble, 0, 2 * Math.PI);
    else if (S.shape === "star")
      for (var ne = Math.PI / 2 * 3, me = 4 * S.scalar, xe = 8 * S.scalar, ke = S.x, k = S.y, N = 5, T = Math.PI / N; N--; )
        ke = S.x + Math.cos(ne) * xe, k = S.y + Math.sin(ne) * xe, M.lineTo(ke, k), ne += T, ke = S.x + Math.cos(ne) * me, k = S.y + Math.sin(ne) * me, M.lineTo(ke, k), ne += T;
    else
      M.moveTo(Math.floor(S.x), Math.floor(S.y)), M.lineTo(Math.floor(S.wobbleX), Math.floor(ie)), M.lineTo(Math.floor(de), Math.floor(ce)), M.lineTo(Math.floor(te), Math.floor(S.wobbleY));
    return M.closePath(), M.fill(), S.tick < S.totalTicks;
  }
  function W(M, S, X, te, ie) {
    var de = S.slice(), ce = M.getContext("2d"), V, Z, se = u(function(re) {
      function q() {
        V = Z = null, ce.clearRect(0, 0, te.width, te.height), d.clear(), ie(), re();
      }
      function j() {
        r && !(te.width === o.width && te.height === o.height) && (te.width = M.width = o.width, te.height = M.height = o.height), !te.width && !te.height && (X(M), te.width = M.width, te.height = M.height), ce.clearRect(0, 0, te.width, te.height), de = de.filter(function(ue) {
          return K(ce, ue);
        }), de.length ? V = f.frame(j) : q();
      }
      V = f.frame(j), Z = q;
    });
    return {
      addFettis: function(re) {
        return de = de.concat(re), se;
      },
      canvas: M,
      promise: se,
      reset: function() {
        V && f.cancel(V), Z && Z();
      }
    };
  }
  function I(M, S) {
    var X = !M, te = !!y(S || {}, "resize"), ie = !1, de = y(S, "disableForReducedMotion", Boolean), ce = i && !!y(S || {}, "useWorker"), V = ce ? h() : null, Z = X ? F : R, se = M && V ? !!M.__confetti_initialized : !1, re = typeof matchMedia == "function" && matchMedia("(prefers-reduced-motion)").matches, q;
    function j(ne, me, xe) {
      for (var ke = y(ne, "particleCount", w), k = y(ne, "angle", Number), N = y(ne, "spread", Number), T = y(ne, "startVelocity", Number), Q = y(ne, "decay", Number), Y = y(ne, "gravity", Number), U = y(ne, "drift", Number), ae = y(ne, "colors", E), ge = y(ne, "ticks", Number), Le = y(ne, "shapes"), Ne = y(ne, "scalar"), gt = !!y(ne, "flat"), en = _(ne), nt = ke, vt = [], fn = M.width * en.x, Bt = M.height * en.y; nt--; )
        vt.push(
          J({
            x: fn,
            y: Bt,
            angle: k,
            spread: N,
            startVelocity: T,
            color: ae[nt % ae.length],
            shape: Le[b(0, Le.length)],
            ticks: ge,
            decay: Q,
            gravity: Y,
            drift: U,
            scalar: Ne,
            flat: gt
          })
        );
      return q ? q.addFettis(vt) : (q = W(M, vt, Z, me, xe), q.promise);
    }
    function ue(ne) {
      var me = de || y(ne, "disableForReducedMotion", Boolean), xe = y(ne, "zIndex", Number);
      if (me && re)
        return u(function(T) {
          T();
        });
      X && q ? M = q.canvas : X && !M && (M = D(xe), document.body.appendChild(M)), te && !se && Z(M);
      var ke = {
        width: M.width,
        height: M.height
      };
      V && !se && V.init(M), se = !0, V && (M.__confetti_initialized = !0);
      function k() {
        if (V) {
          var T = {
            getBoundingClientRect: function() {
              if (!X)
                return M.getBoundingClientRect();
            }
          };
          Z(T), V.postMessage({
            resize: {
              width: T.width,
              height: T.height
            }
          });
          return;
        }
        ke.width = ke.height = null;
      }
      function N() {
        q = null, te && (ie = !1, t.removeEventListener("resize", k)), X && M && (document.body.contains(M) && document.body.removeChild(M), M = null, se = !1);
      }
      return te && !ie && (ie = !0, t.addEventListener("resize", k, !1)), V ? V.fire(ne, ke, N) : j(ne, ke, N);
    }
    return ue.reset = function() {
      V && V.reset(), q && q.reset();
    }, ue;
  }
  var O;
  function z() {
    return O || (O = I(null, { useWorker: !0, resize: !0 })), O;
  }
  function B(M, S, X, te, ie, de, ce) {
    var V = new Path2D(M), Z = new Path2D();
    Z.addPath(V, new DOMMatrix(S));
    var se = new Path2D();
    return se.addPath(Z, new DOMMatrix([
      Math.cos(ce) * ie,
      Math.sin(ce) * ie,
      -Math.sin(ce) * de,
      Math.cos(ce) * de,
      X,
      te
    ])), se;
  }
  function $(M) {
    if (!s)
      throw new Error("path confetti are not supported in this browser");
    var S, X;
    typeof M == "string" ? S = M : (S = M.path, X = M.matrix);
    var te = new Path2D(S), ie = document.createElement("canvas"), de = ie.getContext("2d");
    if (!X) {
      for (var ce = 1e3, V = ce, Z = ce, se = 0, re = 0, q, j, ue = 0; ue < ce; ue += 2)
        for (var ne = 0; ne < ce; ne += 2)
          de.isPointInPath(te, ue, ne, "nonzero") && (V = Math.min(V, ue), Z = Math.min(Z, ne), se = Math.max(se, ue), re = Math.max(re, ne));
      q = se - V, j = re - Z;
      var me = 10, xe = Math.min(me / q, me / j);
      X = [
        xe,
        0,
        0,
        xe,
        -Math.round(q / 2 + V) * xe,
        -Math.round(j / 2 + Z) * xe
      ];
    }
    return {
      type: "path",
      path: S,
      matrix: X
    };
  }
  function G(M) {
    var S, X = 1, te = "#000000", ie = '"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif';
    typeof M == "string" ? S = M : (S = M.text, X = "scalar" in M ? M.scalar : X, ie = "fontFamily" in M ? M.fontFamily : ie, te = "color" in M ? M.color : te);
    var de = 10 * X, ce = "" + de + "px " + ie, V = new OffscreenCanvas(de, de), Z = V.getContext("2d");
    Z.font = ce;
    var se = Z.measureText(S), re = Math.ceil(se.actualBoundingBoxRight + se.actualBoundingBoxLeft), q = Math.ceil(se.actualBoundingBoxAscent + se.actualBoundingBoxDescent), j = 2, ue = se.actualBoundingBoxLeft + j, ne = se.actualBoundingBoxAscent + j;
    re += j + j, q += j + j, V = new OffscreenCanvas(re, q), Z = V.getContext("2d"), Z.font = ce, Z.fillStyle = te, Z.fillText(S, ue, ne);
    var me = 1 / X;
    return {
      type: "bitmap",
      // TODO these probably need to be transfered for workers
      bitmap: V.transferToImageBitmap(),
      matrix: [me, 0, 0, me, -re * me / 2, -q * me / 2]
    };
  }
  n.exports = function() {
    return z().apply(this, arguments);
  }, n.exports.reset = function() {
    z().reset();
  }, n.exports.create = I, n.exports.shapeFromPath = $, n.exports.shapeFromText = G;
})(/* @__PURE__ */ function() {
  return typeof window < "u" ? window : typeof self < "u" ? self : this || {};
}(), gl, !1);
const D7 = gl.exports;
gl.exports.create;
function _7(e) {
  const t = je(null), n = je(), r = It(() => {
    const i = t.current;
    if (!i) return;
    const s = D7.create(i, {
      resize: !0,
      useWorker: !1
    }), l = ["9D76F3", "3FC495", "E61D46", "F6AF3D"], c = 0.1;
    n.current = setInterval(() => {
      s({
        particleCount: 1,
        angle: 90,
        spread: 45,
        origin: {
          x: c + Math.random() * (1 - c * 2),
          y: -0.1
        },
        gravity: 0.65,
        scalar: 1,
        ticks: 80,
        startVelocity: 1,
        disableForReducedMotion: e,
        colors: [
          l[Math.floor(Math.random() * l.length)]
        ]
      });
    }, 100);
  }, [e]), o = It(() => {
    clearInterval(n.current);
  }, []);
  return { canvasRef: t, handleMouseEnter: r, handleMouseLeave: o };
}
const I7 = ({
  link: e,
  firstName: t,
  lastName: n,
  src: r,
  canReact: o = !0,
  type: i,
  typeLabel: s,
  date: l
}) => {
  const c = ti(), { canvasRef: u, handleMouseEnter: d, handleMouseLeave: f } = _7(c), h = z0({
    emoji: T7[i],
    size: "sm"
  });
  return /* @__PURE__ */ x(
    Jt,
    {
      href: e,
      className: A(
        "relative flex flex-col rounded-xl border border-solid border-f1-border-secondary bg-f1-background-inverse-secondary no-underline transition-shadow hover:shadow",
        ft()
      ),
      onMouseEnter: c ? void 0 : d,
      onMouseLeave: c ? void 0 : f,
      children: [
        /* @__PURE__ */ a(
          "canvas",
          {
            ref: u,
            className: "pointer-events-none absolute inset-0 z-50 h-full w-full"
          }
        ),
        /* @__PURE__ */ a("div", { className: "basis-2/3 px-1 pt-1", children: /* @__PURE__ */ a(
          A7,
          {
            firstName: t,
            lastName: n,
            src: r,
            canReact: o
          }
        ) }),
        /* @__PURE__ */ x("div", { className: "flex basis-1/3 flex-row justify-between gap-2 p-3", children: [
          /* @__PURE__ */ x("div", { className: "flex min-w-0 flex-1 flex-col", children: [
            /* @__PURE__ */ x("div", { className: "truncate font-medium text-f1-foreground", children: [
              t,
              " ",
              n
            ] }),
            /* @__PURE__ */ x("div", { className: "flex flex-row items-center gap-1.5 text-f1-foreground-secondary", children: [
              /* @__PURE__ */ a("span", { className: "truncate", children: s }),
              /* @__PURE__ */ a("span", { className: "shrink-0 leading-none", children: h })
            ] })
          ] }),
          /* @__PURE__ */ a("div", { className: "shrink-0", children: /* @__PURE__ */ a(P7, { month: l.month, day: l.day }) })
        ] })
      ]
    }
  );
}, O7 = () => /* @__PURE__ */ x(
  "div",
  {
    className: "bg-f1-background-inverse-secondar flex flex-col rounded-xl border border-solid border-f1-border-secondary",
    role: "status",
    "aria-busy": "true",
    "aria-live": "polite",
    children: [
      /* @__PURE__ */ a("div", { className: "basis-2/3 px-1 pt-1", children: /* @__PURE__ */ a(Dt, { className: "h-32 w-full rounded-lg" }) }),
      /* @__PURE__ */ a("div", { className: "flex basis-1/3 flex-row justify-between gap-2 p-3", children: /* @__PURE__ */ a("div", { className: "flex min-w-0 flex-1 flex-col", children: /* @__PURE__ */ x("div", { className: "flex flex-col gap-2 py-1", children: [
        /* @__PURE__ */ a(Dt, { className: "h-3 w-2/3" }),
        /* @__PURE__ */ a(Dt, { className: "h-3 w-1/3" })
      ] }) }) })
    ]
  }
), YN = pt(I7, O7), V7 = Fe(
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
), F7 = Fe(
  "relative text-f1-foreground-inverse drop-shadow",
  {
    variants: {
      size: {
        sm: "h-[14px] w-[14px]",
        md: "h-[18px] w-[18px]",
        lg: "h-6 w-6"
      }
    },
    defaultVariants: {
      size: "md"
    }
  }
), B7 = "M50,0 C43,0 36,0 30,1 23,2 17,5 12,9 5,16 1,25 0,36 0,43 0,57 0,64 1,75 5,84 12,91 17,95 23,98 30,99 36,100 43,100 50,100 57,100 64,100 70,99 77,98 83,95 88,91 95,84 99,75 100,64 100,57 100,43 100,36 99,25 95,16 88,9 83,5 77,2 70,1 64,0 57,0 50,0";
function Li({ size: e = "md", icon: t }) {
  const n = t;
  return /* @__PURE__ */ x("div", { className: V7({ size: e }), children: [
    /* @__PURE__ */ x(
      "svg",
      {
        viewBox: "0 0 100 100",
        className: "absolute h-full w-full",
        preserveAspectRatio: "none",
        children: [
          /* @__PURE__ */ a("defs", { children: /* @__PURE__ */ x("linearGradient", { id: "gradient", x1: "0%", y1: "0%", x2: "100%", y2: "100%", children: [
            /* @__PURE__ */ a("stop", { offset: "0%", stopColor: "#FF355E" }),
            /* @__PURE__ */ a("stop", { offset: "44%", stopColor: "#FF355E" }),
            /* @__PURE__ */ a("stop", { offset: "100%", stopColor: "#D62D4F" })
          ] }) }),
          /* @__PURE__ */ a("path", { d: B7, fill: "url(#gradient)" })
        ]
      }
    ),
    /* @__PURE__ */ a(n, { className: F7({ size: e }) })
  ] });
}
const j7 = (e, t) => /* @__PURE__ */ a("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: /* @__PURE__ */ a("path", { fill: "currentColor", d: "M11.8951 5.95457C11.9312 5.98204 11.9661 6.00955 12 6.037C12.0339 6.00955 12.0688 5.98204 12.1049 5.95457C12.7472 5.46517 13.7214 5 15.0625 5C16.4958 5 17.7381 5.70182 18.6005 6.67667C19.4599 7.64807 20 8.95087 20 10.2857C20 11.6236 19.4578 12.8943 18.7467 13.9972C18.0305 15.1081 17.0931 16.1261 16.1844 16.9791C15.272 17.8356 14.3638 18.5488 13.6858 19.047C13.346 19.2966 13.0618 19.4939 12.861 19.6297C12.7606 19.6976 12.6809 19.7502 12.6254 19.7865C12.5976 19.8046 12.5759 19.8187 12.5606 19.8285L12.5426 19.84L12.5374 19.8433L12.5346 19.8451C12.2081 20.0516 11.7919 20.0516 11.4654 19.8451L12 19C11.4654 19.8451 11.4643 19.8444 11.4643 19.8444L11.4626 19.8433L11.4574 19.84L11.4394 19.8285C11.4241 19.8187 11.4024 19.8046 11.3746 19.7865C11.3191 19.7502 11.2394 19.6976 11.139 19.6297C10.9382 19.4939 10.654 19.2966 10.3142 19.047C9.63618 18.5488 8.72799 17.8356 7.81556 16.9791C6.90694 16.1261 5.96949 15.1081 5.25329 13.9972C4.54219 12.8943 4 11.6236 4 10.2857C4 7.14266 6.65475 5 8.9375 5C10.2786 5 11.2528 5.46517 11.8951 5.95457Z", vectorEffect: "non-scaling-stroke" }) }), $7 = P(j7), ZN = ({
  title: e,
  subtitle: t,
  buttonLabel: n,
  onClick: r
}) => /* @__PURE__ */ x("div", { className: "flex w-full flex-col items-start justify-between gap-4 rounded-md bg-gradient-to-r from-[#F5A51C]/30 via-[#E51943]/30 to-[#5596F6]/30 px-3 py-3 ring-1 ring-inset ring-f1-border-secondary sm:flex-row sm:items-center sm:px-4", children: [
  /* @__PURE__ */ x("div", { className: "flex flex-col items-start gap-3 sm:flex-row sm:items-center", children: [
    /* @__PURE__ */ a(Li, { icon: $7, size: "lg" }),
    /* @__PURE__ */ x("div", { className: "flex flex-col gap-0", children: [
      /* @__PURE__ */ a("span", { className: "font-medium text-f1-foreground", children: e }),
      /* @__PURE__ */ a("span", { className: "text-f1-foreground-secondary", children: t })
    ] })
  ] }),
  /* @__PURE__ */ a("div", { className: "w-full sm:w-fit", children: /* @__PURE__ */ a(
    Or,
    {
      variant: "outline",
      onClick: r,
      className: "w-full sm:w-auto",
      children: n
    }
  ) })
] }), W7 = Fe(
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
function vl({ size: e, type: t, value: n, maxValue: r }) {
  const o = r && n > r ? `+${r}` : n;
  return /* @__PURE__ */ a("div", { className: W7({ size: e, type: t }), children: o });
}
function yl({
  title: e,
  avatar: t,
  description: n,
  eyebrow: r,
  footer: o,
  primaryAction: i,
  secondaryActions: s
}) {
  return /* @__PURE__ */ x("div", { className: "flex flex-col items-start justify-start gap-4 p-8 md:flex-row", children: [
    /* @__PURE__ */ x("div", { className: "flex grow flex-col items-start justify-start gap-4 md:flex-row md:items-center", children: [
      t && /* @__PURE__ */ a("div", { className: "flex items-start", children: ll(t, "large") }),
      /* @__PURE__ */ x("div", { className: "flex flex-col gap-1", children: [
        r && /* @__PURE__ */ a("div", { className: "w-fit text-f1-foreground-secondary", children: r }),
        /* @__PURE__ */ a("span", { className: "text-xl font-semibold text-f1-foreground", children: e }),
        n && /* @__PURE__ */ a("div", { className: "text-lg text-f1-foreground-secondary", children: n }),
        o && /* @__PURE__ */ a("div", { className: "w-fit text-f1-foreground-secondary", children: o })
      ] })
    ] }),
    /* @__PURE__ */ x(
      "div",
      {
        className: A(
          "flex shrink-0 flex-wrap items-center gap-x-3 gap-y-2 overflow-x-auto md:flex-row-reverse",
          t && "md:pt-1.5"
        ),
        children: [
          i && /* @__PURE__ */ a(
            _t,
            {
              label: i.label,
              onClick: i.onClick,
              variant: "default",
              icon: i.icon
            }
          ),
          i && s && /* @__PURE__ */ a("div", { className: "hidden h-4 w-px bg-f1-background-secondary md:block" }),
          s && s.map((l) => /* @__PURE__ */ a(
            _t,
            {
              label: l.label,
              onClick: l.onClick,
              variant: l.variant ?? "outline",
              icon: l.icon
            },
            l.label
          ))
        ]
      }
    )
  ] });
}
const XN = ({
  name: e,
  description: t,
  src: n,
  primaryAction: r,
  secondaryActions: o
}) => /* @__PURE__ */ a(
  yl,
  {
    title: e,
    description: t,
    avatar: {
      type: "company",
      name: e,
      src: n
    },
    primaryAction: r,
    secondaryActions: o
  }
), qN = ({
  firstName: e,
  lastName: t,
  description: n,
  src: r,
  primaryAction: o,
  secondaryActions: i
}) => /* @__PURE__ */ a(
  yl,
  {
    title: `${e} ${t}`,
    description: n,
    avatar: {
      type: "person",
      firstName: e,
      lastName: t,
      src: r
    },
    primaryAction: o,
    secondaryActions: i
  }
), H7 = (e, t) => {
  if (t.disallowEmpty && e.length === 0)
    throw Error("You need to provide some text that is not empty");
  if (t.maxLength !== void 0 && e.length > t.maxLength)
    throw Error(
      `"${e}" should have no more than ${t.maxLength} characters`
    );
  if (t.minLength !== void 0 && e.length < t.minLength)
    throw Error(`"${e}" should have at least ${t.minLength} characters`);
}, Mn = (e, t) => {
  Oe(() => {
    e !== void 0 && t && H7(e, t);
  }, [e, t]);
}, En = P(
  ({ left: e, text: t, additionalAccesibleText: n, onClick: r, className: o }, i) => /* @__PURE__ */ x(
    "div",
    {
      ref: i,
      className: A(
        "line-clamp-1 flex flex-row items-center justify-start gap-0.5 rounded-full py-0.5 pl-0.5 pr-2 text-base font-medium",
        r && "cursor-pointer hover:bg-f1-background-hover",
        o
      ),
      onClick: r,
      children: [
        e,
        n && /* @__PURE__ */ a("span", { className: "sr-only", children: n }),
        /* @__PURE__ */ a("span", { children: t })
      ]
    }
  )
);
En.displayName = "BaseTag";
const Ni = P(
  ({ text: e, variant: t }, n) => (Mn(e, { disallowEmpty: !0 }), /* @__PURE__ */ a(
    En,
    {
      ref: n,
      className: A(
        "pl-1",
        {
          neutral: "bg-f1-background-secondary text-f1-foreground-secondary",
          info: "bg-f1-background-info text-f1-foreground-info",
          positive: "bg-f1-background-positive text-f1-foreground-positive",
          warning: "bg-f1-background-warning text-f1-foreground-warning",
          critical: "bg-f1-background-critical text-f1-foreground-critical"
        }[t]
      ),
      left: /* @__PURE__ */ a(
        "div",
        {
          className: A(
            "m-1 aspect-square w-2 rounded-full",
            {
              neutral: "bg-f1-icon",
              info: "bg-f1-icon-info",
              positive: "bg-f1-icon-positive",
              warning: "bg-f1-icon-warning",
              critical: "bg-f1-icon-critical"
            }[t]
          ),
          "aria-hidden": !0
        }
      ),
      additionalAccesibleText: "Status",
      text: e
    }
  ))
);
Ni.displayName = "StatusTag";
const QN = ({
  title: e,
  description: t,
  primaryAction: n,
  secondaryActions: r,
  status: o
}) => /* @__PURE__ */ a(
  yl,
  {
    title: e,
    description: t,
    primaryAction: n,
    secondaryActions: r,
    eyebrow: o && /* @__PURE__ */ a(Ni, { text: o.label, variant: o.variant })
  }
), U7 = Fe(
  "flex h-5 items-center justify-center rounded-xs border border-solid py-0.5 text-sm font-semibold uppercase leading-none",
  {
    variants: {
      variant: {
        default: "border-f1-border-secondary bg-f1-background-tertiary text-f1-foreground-secondary",
        inverse: "border-f1-border-inverse text-f1-foreground-inverse-secondary"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
), cd = {
  cmd: V1
};
function z7({ keys: e, variant: t }) {
  return /* @__PURE__ */ a("div", { className: "flex flex-wrap items-center gap-0.5", children: e.map((n, r) => {
    const o = n.toLowerCase(), i = o in cd;
    return /* @__PURE__ */ a(
      "kbd",
      {
        className: A(
          U7({ variant: t }),
          i ? "w-5 px-0.5" : "min-w-5 px-1"
        ),
        children: i ? /* @__PURE__ */ a(Re, { icon: cd[o], size: "sm" }) : n
      },
      r
    );
  }) });
}
const G7 = Fe(
  "flex select-none items-center justify-center text-f1-foreground-secondary",
  {
    variants: {
      size: {
        small: "h-4 w-4 [&_circle]:stroke-[4]",
        medium: "h-8 w-8 [&_circle]:stroke-[2.6]",
        large: "h-12 w-12 [&_circle]:stroke-2"
      }
    },
    defaultVariants: {
      size: "medium"
    }
  }
);
function JN({ size: e, className: t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      className: A(G7({ size: e, className: t })),
      "aria-live": "polite",
      "aria-busy": !0,
      children: /* @__PURE__ */ x(
        "svg",
        {
          viewBox: "0 0 32 32",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          className: "h-full w-full",
          children: [
            /* @__PURE__ */ a(
              "circle",
              {
                cx: "16",
                cy: "16",
                r: "12",
                className: "stroke-f1-background-secondary"
              }
            ),
            /* @__PURE__ */ a(
              xt.circle,
              {
                cx: "16",
                cy: "16",
                r: "12",
                stroke: "currentColor",
                strokeLinecap: "round",
                strokeDasharray: "1 80",
                className: "opacity-50",
                initial: {
                  rotate: 0,
                  originX: "50%",
                  originY: "50%"
                },
                animate: {
                  rotate: [0, 450, 1080],
                  strokeDasharray: ["1 80", "60 40", "1 80"]
                },
                transition: {
                  duration: 2,
                  ease: "linear",
                  repeat: 1 / 0
                }
              }
            )
          ]
        }
      )
    }
  );
}
const K7 = {
  info: za,
  warning: Ga,
  critical: Ha
}, bl = P(
  ({ text: e, level: t }, n) => (Mn(e, { disallowEmpty: !0 }), /* @__PURE__ */ a(
    En,
    {
      ref: n,
      className: {
        info: "bg-f1-background-info text-f1-foreground-info",
        warning: "bg-f1-background-warning text-f1-foreground-warning",
        critical: "bg-f1-background-critical text-f1-foreground-critical"
      }[t],
      left: /* @__PURE__ */ a(
        aa,
        {
          icon: K7[t],
          size: "md",
          "aria-hidden": !0,
          className: A(
            {
              info: "text-f1-icon-info",
              warning: "text-f1-icon-warning",
              critical: "text-f1-icon-critical"
            }[t]
          )
        }
      ),
      text: e
    }
  ))
);
bl.displayName = "AlertTag";
const Y7 = {
  positive: D1,
  negative: T1
}, Z7 = P(
  ({ text: e, status: t }, n) => (Mn(e, { disallowEmpty: !0 }), /* @__PURE__ */ a(
    En,
    {
      ref: n,
      className: A(
        "pl-1",
        {
          positive: "bg-f1-background-positive text-f1-foreground-positive",
          negative: "bg-f1-background-critical text-f1-foreground-critical"
        }[t]
      ),
      left: /* @__PURE__ */ a(
        aa,
        {
          icon: Y7[t],
          size: "sm",
          className: A(
            {
              positive: "text-f1-icon-positive",
              negative: "text-f1-icon-critical"
            }[t]
          )
        }
      ),
      additionalAccesibleText: `${t} balance`,
      text: e
    }
  ))
);
Z7.displayName = "BalanceTag";
const Pi = P(
  ({ imageUrl: e, text: t, rounded: n = !1, onClick: r }, o) => (Mn(t, { disallowEmpty: !0 }), /* @__PURE__ */ a(
    En,
    {
      ref: o,
      className: A(
        "gap-1 border-[1px] border-solid border-f1-border-secondary pl-0.5",
        n ? "rounded-full" : "rounded-[8px]"
      ),
      left: /* @__PURE__ */ a(
        "img",
        {
          src: e,
          "aria-hidden": !0,
          className: A(
            "h-[20px] w-[20x]",
            n ? "rounded-full" : "rounded-[6px]"
          )
        }
      ),
      text: t,
      onClick: r
    }
  ))
);
Pi.displayName = "ImageTag";
const X7 = P(
  ({ companyName: e, companyImageUrl: t, onClick: n }, r) => /* @__PURE__ */ a(
    Pi,
    {
      ref: r,
      imageUrl: t,
      text: e,
      onClick: n
    }
  )
);
X7.displayName = "CompanyTag";
const q7 = {
  white: {
    3: "0 0% 100% / 0.03",
    5: "0 0% 100% / 0.05",
    10: "0 0% 100% / 0.1",
    20: "0 0% 100% / 0.2",
    30: "0 0% 100% / 0.3",
    40: "0 0% 100% / 0.4",
    50: "0 0% 100% / 0.5",
    60: "0 0% 100% / 0.6",
    70: "0 0% 100% / 0.7",
    80: "0 0% 100% / 0.8",
    90: "0 0% 100% / 0.9",
    100: "0 0% 100%"
  },
  current: "currentColor",
  transparent: "transparent",
  grey: {
    0: "210 91% 22% / 0.02",
    5: "220 88% 17% / 0.04",
    10: "216 89% 18% / 0.06",
    20: "214 70% 20% / 0.1",
    30: "213 87% 15% / 0.14",
    40: "219 97% 15% / 0.37",
    50: "217 96% 11% / 0.61",
    60: "220 88% 10% / 0.82",
    70: "219 91% 8% / 0.88",
    80: "219 94% 7% / 0.9",
    90: "219 88% 6% / 0.92",
    100: "218 48% 10%",
    solid: {
      40: "219 18% 69%",
      50: "218 14% 45%"
    }
  },
  lilac: {
    50: "340 49% 60%",
    60: "341 34% 50%",
    70: "340 33% 41%"
  },
  barbie: {
    50: "331 84% 63%",
    60: "331 55% 53%",
    70: "330 49% 43%"
  },
  smoke: {
    50: "192 26% 54%",
    60: "192 22% 45%",
    70: "192 22% 37%"
  },
  army: {
    50: "162 44% 33%",
    60: "163 45% 28%",
    70: "162 44% 23%"
  },
  flubber: {
    50: "84 55% 53%",
    60: "84 48% 45%",
    70: "83 48% 33%"
  },
  indigo: {
    50: "239 91% 64%",
    60: "239 59% 54%",
    70: "239 51% 44%"
  },
  camel: {
    50: "25 46% 53%",
    60: "25 42% 44%",
    70: "25 42% 36%"
  },
  radical: {
    50: "348 80% 50%",
    60: "348 80% 42%",
    70: "347 80% 34%"
  },
  viridian: {
    50: "184 92% 35%",
    60: "184 92% 30%",
    70: "184 92% 24%"
  },
  orange: {
    50: "25 95% 53%",
    60: "24 69% 49%",
    70: "24 69% 40%"
  },
  red: {
    50: "5 69% 56%",
    60: "4 61% 49%",
    70: "3 71% 41%"
  },
  grass: {
    50: "160 84% 39%",
    60: "160 85% 33%",
    70: "161 84% 27%"
  },
  malibu: {
    50: "216 90% 65%",
    60: "216 59% 55%",
    70: "216 48% 44%"
  },
  yellow: {
    50: "38 92% 54%",
    60: "38 79% 45%",
    70: "38 80% 36%"
  },
  purple: {
    50: "258 88% 67%",
    60: "258 56% 56%",
    70: "258 43% 46%"
  }
}, Q7 = P(
  ({ text: e, color: t }, n) => {
    Mn(e, { disallowEmpty: !0 });
    const r = q7[t][50];
    return /* @__PURE__ */ a(
      En,
      {
        ref: n,
        className: "border-[1px] border-solid border-f1-border-secondary pl-1",
        left: /* @__PURE__ */ a(
          "div",
          {
            className: "m-1 aspect-square w-2 rounded-full",
            style: {
              backgroundColor: `hsl(${r})`
            },
            "aria-hidden": !0
          }
        ),
        text: e
      }
    );
  }
);
Q7.displayName = "DotTag";
const J7 = P(
  ({ name: e, avatarUrl: t, onClick: n }, r) => /* @__PURE__ */ a(
    Pi,
    {
      ref: r,
      imageUrl: t,
      text: e,
      onClick: n,
      rounded: !0
    }
  )
);
J7.displayName = "PersonTag";
const Ip = P(
  ({ text: e, icon: t }, n) => (Mn(e, { disallowEmpty: !0 }), /* @__PURE__ */ a(
    En,
    {
      ref: n,
      className: A(
        "border-[1px] border-solid border-f1-border-secondary pl-1",
        t ? "pl-1" : "pl-2"
      ),
      left: t ? /* @__PURE__ */ a(aa, { icon: t, size: "sm", className: "text-f1-icon", "aria-hidden": !0 }) : null,
      text: e
    }
  ))
);
Ip.displayName = "RawTag";
const ek = P(
  ({ teamName: e, teamImageUrl: t, onClick: n }, r) => /* @__PURE__ */ a(
    Pi,
    {
      ref: r,
      imageUrl: t,
      text: e,
      onClick: n
    }
  )
);
ek.displayName = "TeamTag";
const Op = tt(void 0);
function Ti() {
  const e = Se(Op);
  return e === void 0 ? {
    isSmallScreen: !1,
    sidebarState: "locked",
    toggleSidebar: () => {
    }
  } : e;
}
function tk({ children: e }) {
  const { currentPath: t } = la(), n = G0("(max-width: 900px)", {
    initializeWithValue: !0
  }), [r, o] = Ae(!0), [i, s] = Ae(!1), l = It(() => {
    n && s(!i), o(!r);
  }, [n, i, r, o, s]), c = It(
    (d) => {
      n || (d.clientX < 32 && s(!0), d.clientX > 280 && s(!1));
    },
    [n, s]
  ), u = n ? i ? "unlocked" : "hidden" : !r && !i ? "hidden" : !r && i ? "unlocked" : "locked";
  return Oe(() => {
    s(!1);
  }, [t]), /* @__PURE__ */ a(
    Op.Provider,
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
function eP({ children: e, sidebar: t }) {
  return /* @__PURE__ */ a(tk, { children: /* @__PURE__ */ a(rk, { sidebar: t, children: e }) });
}
const nk = ({ contentId: e }) => /* @__PURE__ */ a(
  "a",
  {
    href: `#${e}`,
    className: ft(
      "absolute z-50 -translate-y-full translate-x-4 rounded-md bg-f1-background px-4 py-2.5 text-base font-medium text-f1-foreground no-underline transition-transform duration-200 focus-visible:translate-y-4"
    ),
    children: "Skip to content"
  }
);
function rk({ children: e, sidebar: t }) {
  const { sidebarState: n, toggleSidebar: r, isSmallScreen: o } = Ti(), i = ti();
  return /* @__PURE__ */ x(Ce, { children: [
    /* @__PURE__ */ a(nk, { contentId: "content" }),
    /* @__PURE__ */ a(
      K0,
      {
        reducedMotion: i ? "always" : "never",
        transition: {
          ease: [0.25, 0.1, 0.25, 1],
          duration: i ? 0 : 0.2
        },
        children: /* @__PURE__ */ x("div", { className: "relative isolate flex h-full flex-row", children: [
          /* @__PURE__ */ a(Oa, { children: n === "unlocked" && /* @__PURE__ */ a(
            xt.div,
            {
              className: A("fixed inset-0 z-[5] bg-f1-background-bold", {
                hidden: !o
              }),
              initial: { opacity: 0 },
              animate: { opacity: 0.1 },
              exit: { opacity: 0 },
              transition: { duration: i ? 0 : 0.2 },
              onClick: r
            }
          ) }),
          /* @__PURE__ */ a(
            "div",
            {
              className: A(
                { "transition-all": !i },
                n === "locked" ? "w-[240px] shrink-0 pl-3" : "w-0"
              ),
              children: t
            }
          ),
          /* @__PURE__ */ a(
            xt.main,
            {
              id: "content",
              className: A(
                "flex max-w-full flex-1 overflow-auto xs:py-1 xs:pr-1",
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
    )
  ] });
}
function ok(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function ud(e) {
  return ok(e) || Array.isArray(e);
}
function ik() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
function wl(e, t) {
  const n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length) return !1;
  const o = JSON.stringify(Object.keys(e.breakpoints || {})), i = JSON.stringify(Object.keys(t.breakpoints || {}));
  return o !== i ? !1 : n.every((s) => {
    const l = e[s], c = t[s];
    return typeof l == "function" ? `${l}` == `${c}` : !ud(l) || !ud(c) ? l === c : wl(l, c);
  });
}
function dd(e) {
  return e.concat().sort((t, n) => t.name > n.name ? 1 : -1).map((t) => t.options);
}
function sk(e, t) {
  if (e.length !== t.length) return !1;
  const n = dd(e), r = dd(t);
  return n.every((o, i) => {
    const s = r[i];
    return wl(o, s);
  });
}
function Cl(e) {
  return typeof e == "number";
}
function qs(e) {
  return typeof e == "string";
}
function Ri(e) {
  return typeof e == "boolean";
}
function fd(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function Te(e) {
  return Math.abs(e);
}
function xl(e) {
  return Math.sign(e);
}
function wr(e, t) {
  return Te(e - t);
}
function ak(e, t) {
  if (e === 0 || t === 0 || Te(e) <= Te(t)) return 0;
  const n = wr(Te(e), Te(t));
  return Te(n / e);
}
function lk(e) {
  return Math.round(e * 100) / 100;
}
function Rr(e) {
  return Ar(e).map(Number);
}
function bt(e) {
  return e[Qr(e)];
}
function Qr(e) {
  return Math.max(0, e.length - 1);
}
function kl(e, t) {
  return t === Qr(e);
}
function hd(e, t = 0) {
  return Array.from(Array(e), (n, r) => t + r);
}
function Ar(e) {
  return Object.keys(e);
}
function Vp(e, t) {
  return [e, t].reduce((n, r) => (Ar(r).forEach((o) => {
    const i = n[o], s = r[o], l = fd(i) && fd(s);
    n[o] = l ? Vp(i, s) : s;
  }), n), {});
}
function Qs(e, t) {
  return typeof t.MouseEvent < "u" && e instanceof t.MouseEvent;
}
function ck(e, t) {
  const n = {
    start: r,
    center: o,
    end: i
  };
  function r() {
    return 0;
  }
  function o(c) {
    return i(c) / 2;
  }
  function i(c) {
    return t - c;
  }
  function s(c, u) {
    return qs(e) ? n[e](c) : e(t, c, u);
  }
  return {
    measure: s
  };
}
function Dr() {
  let e = [];
  function t(o, i, s, l = {
    passive: !0
  }) {
    let c;
    if ("addEventListener" in o)
      o.addEventListener(i, s, l), c = () => o.removeEventListener(i, s, l);
    else {
      const u = o;
      u.addListener(s), c = () => u.removeListener(s);
    }
    return e.push(c), r;
  }
  function n() {
    e = e.filter((o) => o());
  }
  const r = {
    add: t,
    clear: n
  };
  return r;
}
function uk(e, t, n, r) {
  const o = Dr(), i = 1e3 / 60;
  let s = null, l = 0, c = 0;
  function u() {
    o.add(e, "visibilitychange", () => {
      e.hidden && m();
    });
  }
  function d() {
    g(), o.clear();
  }
  function f(y) {
    if (!c) return;
    s || (s = y);
    const w = y - s;
    for (s = y, l += w; l >= i; )
      n(), l -= i;
    const b = l / i;
    r(b), c && (c = t.requestAnimationFrame(f));
  }
  function h() {
    c || (c = t.requestAnimationFrame(f));
  }
  function g() {
    t.cancelAnimationFrame(c), s = null, l = 0, c = 0;
  }
  function m() {
    s = null, l = 0;
  }
  return {
    init: u,
    destroy: d,
    start: h,
    stop: g,
    update: n,
    render: r
  };
}
function dk(e, t) {
  const n = t === "rtl", r = e === "y", o = r ? "y" : "x", i = r ? "x" : "y", s = !r && n ? -1 : 1, l = d(), c = f();
  function u(m) {
    const {
      height: v,
      width: y
    } = m;
    return r ? v : y;
  }
  function d() {
    return r ? "top" : n ? "right" : "left";
  }
  function f() {
    return r ? "bottom" : n ? "left" : "right";
  }
  function h(m) {
    return m * s;
  }
  return {
    scroll: o,
    cross: i,
    startEdge: l,
    endEdge: c,
    measureSize: u,
    direction: h
  };
}
function xn(e = 0, t = 0) {
  const n = Te(e - t);
  function r(u) {
    return u < e;
  }
  function o(u) {
    return u > t;
  }
  function i(u) {
    return r(u) || o(u);
  }
  function s(u) {
    return i(u) ? r(u) ? e : t : u;
  }
  function l(u) {
    return n ? u - n * Math.ceil((u - t) / n) : u;
  }
  return {
    length: n,
    max: t,
    min: e,
    constrain: s,
    reachedAny: i,
    reachedMax: o,
    reachedMin: r,
    removeOffset: l
  };
}
function Fp(e, t, n) {
  const {
    constrain: r
  } = xn(0, e), o = e + 1;
  let i = s(t);
  function s(h) {
    return n ? Te((o + h) % o) : r(h);
  }
  function l() {
    return i;
  }
  function c(h) {
    return i = s(h), f;
  }
  function u(h) {
    return d().set(l() + h);
  }
  function d() {
    return Fp(e, l(), n);
  }
  const f = {
    get: l,
    set: c,
    add: u,
    clone: d
  };
  return f;
}
function fk(e, t, n, r, o, i, s, l, c, u, d, f, h, g, m, v, y, w, b) {
  const {
    cross: C,
    direction: E
  } = e, L = ["INPUT", "SELECT", "TEXTAREA"], _ = {
    passive: !1
  }, F = Dr(), R = Dr(), D = xn(50, 225).constrain(g.measure(20)), H = {
    mouse: 300,
    touch: 400
  }, J = {
    mouse: 500,
    touch: 600
  }, K = m ? 43 : 25;
  let W = !1, I = 0, O = 0, z = !1, B = !1, $ = !1, G = !1;
  function M(j) {
    if (!b) return;
    function ue(me) {
      (Ri(b) || b(j, me)) && ce(me);
    }
    const ne = t;
    F.add(ne, "dragstart", (me) => me.preventDefault(), _).add(ne, "touchmove", () => {
    }, _).add(ne, "touchend", () => {
    }).add(ne, "touchstart", ue).add(ne, "mousedown", ue).add(ne, "touchcancel", Z).add(ne, "contextmenu", Z).add(ne, "click", se, !0);
  }
  function S() {
    F.clear(), R.clear();
  }
  function X() {
    const j = G ? n : t;
    R.add(j, "touchmove", V, _).add(j, "touchend", Z).add(j, "mousemove", V, _).add(j, "mouseup", Z);
  }
  function te(j) {
    const ue = j.nodeName || "";
    return L.includes(ue);
  }
  function ie() {
    return (m ? J : H)[G ? "mouse" : "touch"];
  }
  function de(j, ue) {
    const ne = f.add(xl(j) * -1), me = d.byDistance(j, !m).distance;
    return m || Te(j) < D ? me : y && ue ? me * 0.5 : d.byIndex(ne.get(), 0).distance;
  }
  function ce(j) {
    const ue = Qs(j, r);
    G = ue, $ = m && ue && !j.buttons && W, W = wr(o.get(), s.get()) >= 2, !(ue && j.button !== 0) && (te(j.target) || (z = !0, i.pointerDown(j), u.useFriction(0).useDuration(0), o.set(s), X(), I = i.readPoint(j), O = i.readPoint(j, C), h.emit("pointerDown")));
  }
  function V(j) {
    if (!Qs(j, r) && j.touches.length >= 2) return Z(j);
    const ne = i.readPoint(j), me = i.readPoint(j, C), xe = wr(ne, I), ke = wr(me, O);
    if (!B && !G && (!j.cancelable || (B = xe > ke, !B)))
      return Z(j);
    const k = i.pointerMove(j);
    xe > v && ($ = !0), u.useFriction(0.3).useDuration(0.75), l.start(), o.add(E(k)), j.preventDefault();
  }
  function Z(j) {
    const ne = d.byDistance(0, !1).index !== f.get(), me = i.pointerUp(j) * ie(), xe = de(E(me), ne), ke = ak(me, xe), k = K - 10 * ke, N = w + ke / 50;
    B = !1, z = !1, R.clear(), u.useDuration(k).useFriction(N), c.distance(xe, !m), G = !1, h.emit("pointerUp");
  }
  function se(j) {
    $ && (j.stopPropagation(), j.preventDefault(), $ = !1);
  }
  function re() {
    return z;
  }
  return {
    init: M,
    destroy: S,
    pointerDown: re
  };
}
function hk(e, t) {
  let r, o;
  function i(f) {
    return f.timeStamp;
  }
  function s(f, h) {
    const m = `client${(h || e.scroll) === "x" ? "X" : "Y"}`;
    return (Qs(f, t) ? f : f.touches[0])[m];
  }
  function l(f) {
    return r = f, o = f, s(f);
  }
  function c(f) {
    const h = s(f) - s(o), g = i(f) - i(r) > 170;
    return o = f, g && (r = f), h;
  }
  function u(f) {
    if (!r || !o) return 0;
    const h = s(o) - s(r), g = i(f) - i(r), m = i(f) - i(o) > 170, v = h / g;
    return g && !m && Te(v) > 0.1 ? v : 0;
  }
  return {
    pointerDown: l,
    pointerMove: c,
    pointerUp: u,
    readPoint: s
  };
}
function pk() {
  function e(n) {
    const {
      offsetTop: r,
      offsetLeft: o,
      offsetWidth: i,
      offsetHeight: s
    } = n;
    return {
      top: r,
      right: o + i,
      bottom: r + s,
      left: o,
      width: i,
      height: s
    };
  }
  return {
    measure: e
  };
}
function mk(e) {
  function t(r) {
    return e * (r / 100);
  }
  return {
    measure: t
  };
}
function gk(e, t, n, r, o, i, s) {
  const l = [e].concat(r);
  let c, u, d = [], f = !1;
  function h(y) {
    return o.measureSize(s.measure(y));
  }
  function g(y) {
    if (!i) return;
    u = h(e), d = r.map(h);
    function w(b) {
      for (const C of b) {
        if (f) return;
        const E = C.target === e, L = r.indexOf(C.target), _ = E ? u : d[L], F = h(E ? e : r[L]);
        if (Te(F - _) >= 0.5) {
          y.reInit(), t.emit("resize");
          break;
        }
      }
    }
    c = new ResizeObserver((b) => {
      (Ri(i) || i(y, b)) && w(b);
    }), n.requestAnimationFrame(() => {
      l.forEach((b) => c.observe(b));
    });
  }
  function m() {
    f = !0, c && c.disconnect();
  }
  return {
    init: g,
    destroy: m
  };
}
function vk(e, t, n, r, o, i) {
  let s = 0, l = 0, c = o, u = i, d = e.get(), f = 0;
  function h() {
    const _ = r.get() - e.get(), F = !c;
    let R = 0;
    return F ? (s = 0, n.set(r), e.set(r), R = _) : (n.set(e), s += _ / c, s *= u, d += s, e.add(s), R = d - f), l = xl(R), f = d, L;
  }
  function g() {
    const _ = r.get() - t.get();
    return Te(_) < 1e-3;
  }
  function m() {
    return c;
  }
  function v() {
    return l;
  }
  function y() {
    return s;
  }
  function w() {
    return C(o);
  }
  function b() {
    return E(i);
  }
  function C(_) {
    return c = _, L;
  }
  function E(_) {
    return u = _, L;
  }
  const L = {
    direction: v,
    duration: m,
    velocity: y,
    seek: h,
    settled: g,
    useBaseFriction: b,
    useBaseDuration: w,
    useFriction: E,
    useDuration: C
  };
  return L;
}
function yk(e, t, n, r, o) {
  const i = o.measure(10), s = o.measure(50), l = xn(0.1, 0.99);
  let c = !1;
  function u() {
    return !(c || !e.reachedAny(n.get()) || !e.reachedAny(t.get()));
  }
  function d(g) {
    if (!u()) return;
    const m = e.reachedMin(t.get()) ? "min" : "max", v = Te(e[m] - t.get()), y = n.get() - t.get(), w = l.constrain(v / s);
    n.subtract(y * w), !g && Te(y) < i && (n.set(e.constrain(n.get())), r.useDuration(25).useBaseFriction());
  }
  function f(g) {
    c = !g;
  }
  return {
    shouldConstrain: u,
    constrain: d,
    toggleActive: f
  };
}
function bk(e, t, n, r, o) {
  const i = xn(-t + e, 0), s = f(), l = d(), c = h();
  function u(m, v) {
    return wr(m, v) < 1;
  }
  function d() {
    const m = s[0], v = bt(s), y = s.lastIndexOf(m), w = s.indexOf(v) + 1;
    return xn(y, w);
  }
  function f() {
    return n.map((m, v) => {
      const {
        min: y,
        max: w
      } = i, b = i.constrain(m), C = !v, E = kl(n, v);
      return C ? w : E || u(y, b) ? y : u(w, b) ? w : b;
    }).map((m) => parseFloat(m.toFixed(3)));
  }
  function h() {
    if (t <= e + o) return [i.max];
    if (r === "keepSnaps") return s;
    const {
      min: m,
      max: v
    } = l;
    return s.slice(m, v);
  }
  return {
    snapsContained: c,
    scrollContainLimit: l
  };
}
function wk(e, t, n) {
  const r = t[0], o = n ? r - e : bt(t);
  return {
    limit: xn(o, r)
  };
}
function Ck(e, t, n, r) {
  const i = t.min + 0.1, s = t.max + 0.1, {
    reachedMin: l,
    reachedMax: c
  } = xn(i, s);
  function u(h) {
    return h === 1 ? c(n.get()) : h === -1 ? l(n.get()) : !1;
  }
  function d(h) {
    if (!u(h)) return;
    const g = e * (h * -1);
    r.forEach((m) => m.add(g));
  }
  return {
    loop: d
  };
}
function xk(e) {
  const {
    max: t,
    length: n
  } = e;
  function r(i) {
    const s = i - t;
    return n ? s / -n : 0;
  }
  return {
    get: r
  };
}
function kk(e, t, n, r, o) {
  const {
    startEdge: i,
    endEdge: s
  } = e, {
    groupSlides: l
  } = o, c = f().map(t.measure), u = h(), d = g();
  function f() {
    return l(r).map((v) => bt(v)[s] - v[0][i]).map(Te);
  }
  function h() {
    return r.map((v) => n[i] - v[i]).map((v) => -Te(v));
  }
  function g() {
    return l(u).map((v) => v[0]).map((v, y) => v + c[y]);
  }
  return {
    snaps: u,
    snapsAligned: d
  };
}
function Sk(e, t, n, r, o, i) {
  const {
    groupSlides: s
  } = o, {
    min: l,
    max: c
  } = r, u = d();
  function d() {
    const h = s(i), g = !e || t === "keepSnaps";
    return n.length === 1 ? [i] : g ? h : h.slice(l, c).map((m, v, y) => {
      const w = !v, b = kl(y, v);
      if (w) {
        const C = bt(y[0]) + 1;
        return hd(C);
      }
      if (b) {
        const C = Qr(i) - bt(y)[0] + 1;
        return hd(C, bt(y)[0]);
      }
      return m;
    });
  }
  return {
    slideRegistry: u
  };
}
function Mk(e, t, n, r, o) {
  const {
    reachedAny: i,
    removeOffset: s,
    constrain: l
  } = r;
  function c(m) {
    return m.concat().sort((v, y) => Te(v) - Te(y))[0];
  }
  function u(m) {
    const v = e ? s(m) : l(m), y = t.map((b, C) => ({
      diff: d(b - v, 0),
      index: C
    })).sort((b, C) => Te(b.diff) - Te(C.diff)), {
      index: w
    } = y[0];
    return {
      index: w,
      distance: v
    };
  }
  function d(m, v) {
    const y = [m, m + n, m - n];
    if (!e) return m;
    if (!v) return c(y);
    const w = y.filter((b) => xl(b) === v);
    return w.length ? c(w) : bt(y) - n;
  }
  function f(m, v) {
    const y = t[m] - o.get(), w = d(y, v);
    return {
      index: m,
      distance: w
    };
  }
  function h(m, v) {
    const y = o.get() + m, {
      index: w,
      distance: b
    } = u(y), C = !e && i(y);
    if (!v || C) return {
      index: w,
      distance: m
    };
    const E = t[w] - b, L = m + d(E, 0);
    return {
      index: w,
      distance: L
    };
  }
  return {
    byDistance: h,
    byIndex: f,
    shortcut: d
  };
}
function Ek(e, t, n, r, o, i, s) {
  function l(f) {
    const h = f.distance, g = f.index !== t.get();
    i.add(h), h && (r.duration() ? e.start() : (e.update(), e.render(1), e.update())), g && (n.set(t.get()), t.set(f.index), s.emit("select"));
  }
  function c(f, h) {
    const g = o.byDistance(f, h);
    l(g);
  }
  function u(f, h) {
    const g = t.clone().set(f), m = o.byIndex(g.get(), h);
    l(m);
  }
  return {
    distance: c,
    index: u
  };
}
function Lk(e, t, n, r, o, i, s, l) {
  const c = {
    passive: !0,
    capture: !0
  };
  let u = 0;
  function d(g) {
    if (!l) return;
    function m(v) {
      if ((/* @__PURE__ */ new Date()).getTime() - u > 10) return;
      s.emit("slideFocusStart"), e.scrollLeft = 0;
      const b = n.findIndex((C) => C.includes(v));
      Cl(b) && (o.useDuration(0), r.index(b, 0), s.emit("slideFocus"));
    }
    i.add(document, "keydown", f, !1), t.forEach((v, y) => {
      i.add(v, "focus", (w) => {
        (Ri(l) || l(g, w)) && m(y);
      }, c);
    });
  }
  function f(g) {
    g.code === "Tab" && (u = (/* @__PURE__ */ new Date()).getTime());
  }
  return {
    init: d
  };
}
function dr(e) {
  let t = e;
  function n() {
    return t;
  }
  function r(c) {
    t = s(c);
  }
  function o(c) {
    t += s(c);
  }
  function i(c) {
    t -= s(c);
  }
  function s(c) {
    return Cl(c) ? c : c.get();
  }
  return {
    get: n,
    set: r,
    add: o,
    subtract: i
  };
}
function Bp(e, t) {
  const n = e.scroll === "x" ? s : l, r = t.style;
  let o = null, i = !1;
  function s(h) {
    return `translate3d(${h}px,0px,0px)`;
  }
  function l(h) {
    return `translate3d(0px,${h}px,0px)`;
  }
  function c(h) {
    if (i) return;
    const g = lk(e.direction(h));
    g !== o && (r.transform = n(g), o = g);
  }
  function u(h) {
    i = !h;
  }
  function d() {
    i || (r.transform = "", t.getAttribute("style") || t.removeAttribute("style"));
  }
  return {
    clear: d,
    to: c,
    toggleActive: u
  };
}
function Nk(e, t, n, r, o, i, s, l, c) {
  const d = Rr(o), f = Rr(o).reverse(), h = w().concat(b());
  function g(F, R) {
    return F.reduce((D, H) => D - o[H], R);
  }
  function m(F, R) {
    return F.reduce((D, H) => g(D, R) > 0 ? D.concat([H]) : D, []);
  }
  function v(F) {
    return i.map((R, D) => ({
      start: R - r[D] + 0.5 + F,
      end: R + t - 0.5 + F
    }));
  }
  function y(F, R, D) {
    const H = v(R);
    return F.map((J) => {
      const K = D ? 0 : -n, W = D ? n : 0, I = D ? "end" : "start", O = H[J][I];
      return {
        index: J,
        loopPoint: O,
        slideLocation: dr(-1),
        translate: Bp(e, c[J]),
        target: () => l.get() > O ? K : W
      };
    });
  }
  function w() {
    const F = s[0], R = m(f, F);
    return y(R, n, !1);
  }
  function b() {
    const F = t - s[0] - 1, R = m(d, F);
    return y(R, -n, !0);
  }
  function C() {
    return h.every(({
      index: F
    }) => {
      const R = d.filter((D) => D !== F);
      return g(R, t) <= 0.1;
    });
  }
  function E() {
    h.forEach((F) => {
      const {
        target: R,
        translate: D,
        slideLocation: H
      } = F, J = R();
      J !== H.get() && (D.to(J), H.set(J));
    });
  }
  function L() {
    h.forEach((F) => F.translate.clear());
  }
  return {
    canLoop: C,
    clear: L,
    loop: E,
    loopPoints: h
  };
}
function Pk(e, t, n) {
  let r, o = !1;
  function i(c) {
    if (!n) return;
    function u(d) {
      for (const f of d)
        if (f.type === "childList") {
          c.reInit(), t.emit("slidesChanged");
          break;
        }
    }
    r = new MutationObserver((d) => {
      o || (Ri(n) || n(c, d)) && u(d);
    }), r.observe(e, {
      childList: !0
    });
  }
  function s() {
    r && r.disconnect(), o = !0;
  }
  return {
    init: i,
    destroy: s
  };
}
function Tk(e, t, n, r) {
  const o = {};
  let i = null, s = null, l, c = !1;
  function u() {
    l = new IntersectionObserver((m) => {
      c || (m.forEach((v) => {
        const y = t.indexOf(v.target);
        o[y] = v;
      }), i = null, s = null, n.emit("slidesInView"));
    }, {
      root: e.parentElement,
      threshold: r
    }), t.forEach((m) => l.observe(m));
  }
  function d() {
    l && l.disconnect(), c = !0;
  }
  function f(m) {
    return Ar(o).reduce((v, y) => {
      const w = parseInt(y), {
        isIntersecting: b
      } = o[w];
      return (m && b || !m && !b) && v.push(w), v;
    }, []);
  }
  function h(m = !0) {
    if (m && i) return i;
    if (!m && s) return s;
    const v = f(m);
    return m && (i = v), m || (s = v), v;
  }
  return {
    init: u,
    destroy: d,
    get: h
  };
}
function Rk(e, t, n, r, o, i) {
  const {
    measureSize: s,
    startEdge: l,
    endEdge: c
  } = e, u = n[0] && o, d = m(), f = v(), h = n.map(s), g = y();
  function m() {
    if (!u) return 0;
    const b = n[0];
    return Te(t[l] - b[l]);
  }
  function v() {
    if (!u) return 0;
    const b = i.getComputedStyle(bt(r));
    return parseFloat(b.getPropertyValue(`margin-${c}`));
  }
  function y() {
    return n.map((b, C, E) => {
      const L = !C, _ = kl(E, C);
      return L ? h[C] + d : _ ? h[C] + f : E[C + 1][l] - b[l];
    }).map(Te);
  }
  return {
    slideSizes: h,
    slideSizesWithGaps: g,
    startGap: d,
    endGap: f
  };
}
function Ak(e, t, n, r, o, i, s, l, c) {
  const {
    startEdge: u,
    endEdge: d,
    direction: f
  } = e, h = Cl(n);
  function g(w, b) {
    return Rr(w).filter((C) => C % b === 0).map((C) => w.slice(C, C + b));
  }
  function m(w) {
    return w.length ? Rr(w).reduce((b, C, E) => {
      const L = bt(b) || 0, _ = L === 0, F = C === Qr(w), R = o[u] - i[L][u], D = o[u] - i[C][d], H = !r && _ ? f(s) : 0, J = !r && F ? f(l) : 0, K = Te(D - J - (R + H));
      return E && K > t + c && b.push(C), F && b.push(w.length), b;
    }, []).map((b, C, E) => {
      const L = Math.max(E[C - 1] || 0);
      return w.slice(L, b);
    }) : [];
  }
  function v(w) {
    return h ? g(w, n) : m(w);
  }
  return {
    groupSlides: v
  };
}
function Dk(e, t, n, r, o, i, s) {
  const {
    align: l,
    axis: c,
    direction: u,
    startIndex: d,
    loop: f,
    duration: h,
    dragFree: g,
    dragThreshold: m,
    inViewThreshold: v,
    slidesToScroll: y,
    skipSnaps: w,
    containScroll: b,
    watchResize: C,
    watchSlides: E,
    watchDrag: L,
    watchFocus: _
  } = i, F = 2, R = pk(), D = R.measure(t), H = n.map(R.measure), J = dk(c, u), K = J.measureSize(D), W = mk(K), I = ck(l, K), O = !f && !!b, z = f || !!b, {
    slideSizes: B,
    slideSizesWithGaps: $,
    startGap: G,
    endGap: M
  } = Rk(J, D, H, n, z, o), S = Ak(J, K, y, f, D, H, G, M, F), {
    snaps: X,
    snapsAligned: te
  } = kk(J, I, D, H, S), ie = -bt(X) + bt($), {
    snapsContained: de,
    scrollContainLimit: ce
  } = bk(K, ie, te, b, F), V = O ? de : te, {
    limit: Z
  } = wk(ie, V, f), se = Fp(Qr(V), d, f), re = se.clone(), q = Rr(n), j = ({
    dragHandler: nt,
    scrollBody: vt,
    scrollBounds: fn,
    options: {
      loop: Bt
    }
  }) => {
    Bt || fn.constrain(nt.pointerDown()), vt.seek();
  }, ue = ({
    scrollBody: nt,
    translate: vt,
    location: fn,
    offsetLocation: Bt,
    previousLocation: Hi,
    scrollLooper: ro,
    slideLooper: b0,
    dragHandler: w0,
    animation: C0,
    eventHandler: nc,
    scrollBounds: x0,
    options: {
      loop: rc
    }
  }, oc) => {
    const ic = nt.settled(), k0 = !x0.shouldConstrain(), sc = rc ? ic : ic && k0;
    sc && !w0.pointerDown() && (C0.stop(), nc.emit("settle")), sc || nc.emit("scroll");
    const S0 = fn.get() * oc + Hi.get() * (1 - oc);
    Bt.set(S0), rc && (ro.loop(nt.direction()), b0.loop()), vt.to(Bt.get());
  }, ne = uk(r, o, () => j(en), (nt) => ue(en, nt)), me = 0.68, xe = V[se.get()], ke = dr(xe), k = dr(xe), N = dr(xe), T = dr(xe), Q = vk(ke, N, k, T, h, me), Y = Mk(f, V, ie, Z, T), U = Ek(ne, se, re, Q, Y, T, s), ae = xk(Z), ge = Dr(), Le = Tk(t, n, s, v), {
    slideRegistry: Ne
  } = Sk(O, b, V, ce, S, q), gt = Lk(e, n, Ne, U, Q, ge, s, _), en = {
    ownerDocument: r,
    ownerWindow: o,
    eventHandler: s,
    containerRect: D,
    slideRects: H,
    animation: ne,
    axis: J,
    dragHandler: fk(J, e, r, o, T, hk(J, o), ke, ne, U, Q, Y, se, s, W, g, m, w, me, L),
    eventStore: ge,
    percentOfView: W,
    index: se,
    indexPrevious: re,
    limit: Z,
    location: ke,
    offsetLocation: N,
    previousLocation: k,
    options: i,
    resizeHandler: gk(t, s, o, n, J, C, R),
    scrollBody: Q,
    scrollBounds: yk(Z, N, T, Q, W),
    scrollLooper: Ck(ie, Z, N, [ke, N, k, T]),
    scrollProgress: ae,
    scrollSnapList: V.map(ae.get),
    scrollSnaps: V,
    scrollTarget: Y,
    scrollTo: U,
    slideLooper: Nk(J, K, ie, B, $, X, V, N, n),
    slideFocus: gt,
    slidesHandler: Pk(t, s, E),
    slidesInView: Le,
    slideIndexes: q,
    slideRegistry: Ne,
    slidesToScroll: S,
    target: T,
    translate: Bp(J, t)
  };
  return en;
}
function _k() {
  let e = {}, t;
  function n(u) {
    t = u;
  }
  function r(u) {
    return e[u] || [];
  }
  function o(u) {
    return r(u).forEach((d) => d(t, u)), c;
  }
  function i(u, d) {
    return e[u] = r(u).concat([d]), c;
  }
  function s(u, d) {
    return e[u] = r(u).filter((f) => f !== d), c;
  }
  function l() {
    e = {};
  }
  const c = {
    init: n,
    emit: o,
    off: s,
    on: i,
    clear: l
  };
  return c;
}
const Ik = {
  align: "center",
  axis: "x",
  container: null,
  slides: null,
  containScroll: "trimSnaps",
  direction: "ltr",
  slidesToScroll: 1,
  inViewThreshold: 0,
  breakpoints: {},
  dragFree: !1,
  dragThreshold: 10,
  loop: !1,
  skipSnaps: !1,
  duration: 25,
  startIndex: 0,
  active: !0,
  watchDrag: !0,
  watchResize: !0,
  watchSlides: !0,
  watchFocus: !0
};
function Ok(e) {
  function t(i, s) {
    return Vp(i, s || {});
  }
  function n(i) {
    const s = i.breakpoints || {}, l = Ar(s).filter((c) => e.matchMedia(c).matches).map((c) => s[c]).reduce((c, u) => t(c, u), {});
    return t(i, l);
  }
  function r(i) {
    return i.map((s) => Ar(s.breakpoints || {})).reduce((s, l) => s.concat(l), []).map(e.matchMedia);
  }
  return {
    mergeOptions: t,
    optionsAtMedia: n,
    optionsMediaQueries: r
  };
}
function Vk(e) {
  let t = [];
  function n(i, s) {
    return t = s.filter(({
      options: l
    }) => e.optionsAtMedia(l).active !== !1), t.forEach((l) => l.init(i, e)), s.reduce((l, c) => Object.assign(l, {
      [c.name]: c
    }), {});
  }
  function r() {
    t = t.filter((i) => i.destroy());
  }
  return {
    init: n,
    destroy: r
  };
}
function Go(e, t, n) {
  const r = e.ownerDocument, o = r.defaultView, i = Ok(o), s = Vk(i), l = Dr(), c = _k(), {
    mergeOptions: u,
    optionsAtMedia: d,
    optionsMediaQueries: f
  } = i, {
    on: h,
    off: g,
    emit: m
  } = c, v = J;
  let y = !1, w, b = u(Ik, Go.globalOptions), C = u(b), E = [], L, _, F;
  function R() {
    const {
      container: q,
      slides: j
    } = C;
    _ = (qs(q) ? e.querySelector(q) : q) || e.children[0];
    const ne = qs(j) ? _.querySelectorAll(j) : j;
    F = [].slice.call(ne || _.children);
  }
  function D(q) {
    const j = Dk(e, _, F, r, o, q, c);
    if (q.loop && !j.slideLooper.canLoop()) {
      const ue = Object.assign({}, q, {
        loop: !1
      });
      return D(ue);
    }
    return j;
  }
  function H(q, j) {
    y || (b = u(b, q), C = d(b), E = j || E, R(), w = D(C), f([b, ...E.map(({
      options: ue
    }) => ue)]).forEach((ue) => l.add(ue, "change", J)), C.active && (w.translate.to(w.location.get()), w.animation.init(), w.slidesInView.init(), w.slideFocus.init(re), w.eventHandler.init(re), w.resizeHandler.init(re), w.slidesHandler.init(re), w.options.loop && w.slideLooper.loop(), _.offsetParent && F.length && w.dragHandler.init(re), L = s.init(re, E)));
  }
  function J(q, j) {
    const ue = S();
    K(), H(u({
      startIndex: ue
    }, q), j), c.emit("reInit");
  }
  function K() {
    w.dragHandler.destroy(), w.eventStore.clear(), w.translate.clear(), w.slideLooper.clear(), w.resizeHandler.destroy(), w.slidesHandler.destroy(), w.slidesInView.destroy(), w.animation.destroy(), s.destroy(), l.clear();
  }
  function W() {
    y || (y = !0, l.clear(), K(), c.emit("destroy"), c.clear());
  }
  function I(q, j, ue) {
    !C.active || y || (w.scrollBody.useBaseFriction().useDuration(j === !0 ? 0 : C.duration), w.scrollTo.index(q, ue || 0));
  }
  function O(q) {
    const j = w.index.add(1).get();
    I(j, q, -1);
  }
  function z(q) {
    const j = w.index.add(-1).get();
    I(j, q, 1);
  }
  function B() {
    return w.index.add(1).get() !== S();
  }
  function $() {
    return w.index.add(-1).get() !== S();
  }
  function G() {
    return w.scrollSnapList;
  }
  function M() {
    return w.scrollProgress.get(w.location.get());
  }
  function S() {
    return w.index.get();
  }
  function X() {
    return w.indexPrevious.get();
  }
  function te() {
    return w.slidesInView.get();
  }
  function ie() {
    return w.slidesInView.get(!1);
  }
  function de() {
    return L;
  }
  function ce() {
    return w;
  }
  function V() {
    return e;
  }
  function Z() {
    return _;
  }
  function se() {
    return F;
  }
  const re = {
    canScrollNext: B,
    canScrollPrev: $,
    containerNode: Z,
    internalEngine: ce,
    destroy: W,
    off: g,
    on: h,
    emit: m,
    plugins: de,
    previousScrollSnap: X,
    reInit: v,
    rootNode: V,
    scrollNext: O,
    scrollPrev: z,
    scrollProgress: M,
    scrollSnapList: G,
    scrollTo: I,
    selectedScrollSnap: S,
    slideNodes: se,
    slidesInView: te,
    slidesNotInView: ie
  };
  return H(t, n), setTimeout(() => c.emit("init"), 0), re;
}
Go.globalOptions = void 0;
function Sl(e = {}, t = []) {
  const n = je(e), r = je(t), [o, i] = Ae(), [s, l] = Ae(), c = It(() => {
    o && o.reInit(n.current, r.current);
  }, [o]);
  return Oe(() => {
    wl(n.current, e) || (n.current = e, c());
  }, [e, c]), Oe(() => {
    sk(r.current, t) || (r.current = t, c());
  }, [t, c]), Oe(() => {
    if (ik() && s) {
      Go.globalOptions = Sl.globalOptions;
      const u = Go(s, n.current, r.current);
      return i(u), () => u.destroy();
    } else
      i(void 0);
  }, [s, i]), [l, o];
}
Sl.globalOptions = void 0;
const jp = p.createContext(null);
function Jr() {
  const e = p.useContext(jp);
  if (!e)
    throw new Error("useCarousel must be used within a <Carousel />");
  return e;
}
const $p = p.forwardRef(
  ({
    orientation: e = "horizontal",
    opts: t,
    setApi: n,
    plugins: r,
    className: o,
    children: i,
    ...s
  }, l) => {
    const [c, u] = Sl(
      {
        ...t,
        axis: e === "horizontal" ? "x" : "y"
      },
      r
    ), [d, f] = p.useState(!1), [h, g] = p.useState(!1), m = p.useCallback((b) => {
      b && (f(b.canScrollPrev()), g(b.canScrollNext()));
    }, []), v = p.useCallback(() => {
      u == null || u.scrollPrev();
    }, [u]), y = p.useCallback(() => {
      u == null || u.scrollNext();
    }, [u]), w = p.useCallback(
      (b) => {
        b.key === "ArrowLeft" ? (b.preventDefault(), v()) : b.key === "ArrowRight" && (b.preventDefault(), y());
      },
      [v, y]
    );
    return p.useEffect(() => {
      !u || !n || n(u);
    }, [u, n]), p.useEffect(() => {
      if (u)
        return m(u), u.on("reInit", m), u.on("select", m), () => {
          u == null || u.off("select", m);
        };
    }, [u, m]), /* @__PURE__ */ a(
      jp.Provider,
      {
        value: {
          carouselRef: c,
          api: u,
          opts: t,
          orientation: e || ((t == null ? void 0 : t.axis) === "y" ? "vertical" : "horizontal"),
          scrollPrev: v,
          scrollNext: y,
          canScrollPrev: d,
          canScrollNext: h
        },
        children: /* @__PURE__ */ a(
          "div",
          {
            ref: l,
            onKeyDownCapture: w,
            className: A("relative", o),
            role: "region",
            "aria-roledescription": "carousel",
            ...s,
            children: i
          }
        )
      }
    );
  }
);
$p.displayName = "Carousel";
const Wp = p.forwardRef(({ className: e, ...t }, n) => {
  const { carouselRef: r, orientation: o } = Jr();
  return /* @__PURE__ */ a("div", { ref: r, className: "overflow-hidden", children: /* @__PURE__ */ a(
    "div",
    {
      ref: n,
      className: A(
        "flex",
        o === "horizontal" ? "-ml-4" : "-mt-4 flex-col",
        e
      ),
      ...t
    }
  ) });
});
Wp.displayName = "CarouselContent";
const Hp = p.forwardRef(({ className: e, ...t }, n) => {
  const { orientation: r } = Jr();
  return /* @__PURE__ */ a(
    "div",
    {
      ref: n,
      role: "group",
      "aria-roledescription": "slide",
      className: A(
        "min-w-0 shrink-0 grow-0 basis-full",
        r === "horizontal" ? "pl-4" : "pt-4",
        e
      ),
      ...t
    }
  );
});
Hp.displayName = "CarouselItem";
const Up = p.forwardRef(({ className: e, variant: t = "outline", ...n }, r) => {
  const { orientation: o, scrollPrev: i, canScrollPrev: s } = Jr();
  return /* @__PURE__ */ x(
    Or,
    {
      ref: r,
      size: "sm",
      variant: t,
      round: !0,
      className: A(
        "absolute opacity-100 transition-all",
        !s && "disabled:opacity-0",
        o === "horizontal" ? "-left-3 top-1/2 -translate-y-1/2" : "-top-3 left-1/2 -translate-x-1/2 rotate-90",
        e
      ),
      disabled: !s,
      onClick: i,
      ...n,
      children: [
        /* @__PURE__ */ a(Re, { size: "sm", icon: R1 }),
        /* @__PURE__ */ a("span", { className: "sr-only", children: "Previous" })
      ]
    }
  );
});
Up.displayName = "CarouselPrevious";
const zp = p.forwardRef(({ className: e, variant: t = "outline", ...n }, r) => {
  const { orientation: o, scrollNext: i, canScrollNext: s } = Jr();
  return /* @__PURE__ */ x(
    Or,
    {
      ref: r,
      size: "sm",
      variant: t,
      round: !0,
      className: A(
        "absolute opacity-100 transition-all",
        !s && "disabled:opacity-0",
        o === "horizontal" ? "-right-3 top-1/2 -translate-y-1/2" : "-bottom-3 left-1/2 -translate-x-1/2 rotate-90",
        e
      ),
      disabled: !s,
      onClick: i,
      ...n,
      children: [
        /* @__PURE__ */ a(Re, { size: "sm", icon: A1 }),
        /* @__PURE__ */ a("span", { className: "sr-only", children: "Mext" })
      ]
    }
  );
});
zp.displayName = "CarouselNext";
const Gp = p.forwardRef((e, t) => {
  const { api: n } = Jr(), [, r] = p.useState(!1), o = p.useCallback(() => {
    r((l) => !l);
  }, []);
  p.useEffect(() => {
    if (n)
      return n.on("select", o), n.on("reInit", o), () => {
        n.off("select", o), n.off("reInit", o);
      };
  }, [n, o]);
  const i = (n == null ? void 0 : n.scrollSnapList().length) || 0, s = (n == null ? void 0 : n.selectedScrollSnap()) || 0;
  return i > 1 ? /* @__PURE__ */ a(
    "div",
    {
      ref: t,
      className: A("flex justify-center gap-2", e.className),
      children: Array.from({ length: i }, (l, c) => /* @__PURE__ */ a(
        Or,
        {
          className: A("h-2 w-2 rounded-full p-0 transition-all", {
            "bg-f1-foreground-secondary hover:scale-110 hover:bg-f1-foreground-secondary": c === s,
            "bg-f1-background-secondary hover:scale-110 hover:bg-f1-background-secondary-hover": c !== s
          }),
          "aria-label": `Go to slide ${c + 1}`,
          onClick: () => n == null ? void 0 : n.scrollTo(c)
        },
        c
      ))
    }
  ) : /* @__PURE__ */ a(Ce, {});
});
Gp.displayName = "CarouselDots";
const Fk = {
  active: !0,
  breakpoints: {},
  delay: 4e3,
  jump: !1,
  playOnInit: !0,
  stopOnFocusIn: !0,
  stopOnInteraction: !0,
  stopOnMouseEnter: !1,
  stopOnLastSnap: !1,
  rootNode: null
};
function Bk(e, t) {
  const n = e.scrollSnapList();
  return typeof t == "number" ? n.map(() => t) : t(n, e);
}
function jk(e, t) {
  const n = e.rootNode();
  return t && t(n) || n;
}
function Ml(e = {}) {
  let t, n, r, o, i = null, s = 0, l = !1, c = !1, u = !1, d = !1;
  function f(I, O) {
    n = I;
    const {
      mergeOptions: z,
      optionsAtMedia: B
    } = O, $ = z(Fk, Ml.globalOptions), G = z($, e);
    if (t = B(G), n.scrollSnapList().length <= 1) return;
    d = t.jump, r = !1, o = Bk(n, t.delay);
    const {
      eventStore: M,
      ownerDocument: S
    } = n.internalEngine(), X = !!n.internalEngine().options.watchDrag, te = jk(n, t.rootNode);
    M.add(S, "visibilitychange", w), X && n.on("pointerDown", C), X && !t.stopOnInteraction && n.on("pointerUp", E), t.stopOnMouseEnter && M.add(te, "mouseenter", L), t.stopOnMouseEnter && !t.stopOnInteraction && M.add(te, "mouseleave", _), t.stopOnFocusIn && n.on("slideFocusStart", y), t.stopOnFocusIn && !t.stopOnInteraction && M.add(n.containerNode(), "focusout", v), t.playOnInit && !b() && v();
  }
  function h() {
    n.off("pointerDown", C).off("pointerUp", E).off("slideFocusStart", y), y(), r = !0, l = !1;
  }
  function g() {
    const {
      ownerWindow: I
    } = n.internalEngine();
    I.clearTimeout(s), s = I.setTimeout(J, o[n.selectedScrollSnap()]), i = (/* @__PURE__ */ new Date()).getTime(), n.emit("autoplay:timerset");
  }
  function m() {
    const {
      ownerWindow: I
    } = n.internalEngine();
    I.clearTimeout(s), s = 0, i = null, n.emit("autoplay:timerstopped");
  }
  function v() {
    r || (l || n.emit("autoplay:play"), g(), l = !0);
  }
  function y() {
    r || (l && n.emit("autoplay:stop"), m(), l = !1);
  }
  function w() {
    if (b())
      return u = l, y();
    u && v();
  }
  function b() {
    const {
      ownerDocument: I
    } = n.internalEngine();
    return I.visibilityState === "hidden";
  }
  function C() {
    c || y();
  }
  function E() {
    c || v();
  }
  function L() {
    c = !0, y();
  }
  function _() {
    c = !1, v();
  }
  function F(I) {
    typeof I < "u" && (d = I), v();
  }
  function R() {
    l && y();
  }
  function D() {
    l && v();
  }
  function H() {
    return l;
  }
  function J() {
    const {
      index: I
    } = n.internalEngine(), O = I.clone().add(1).get(), z = n.scrollSnapList().length - 1, B = t.stopOnLastSnap && O === z;
    if (n.canScrollNext() ? n.scrollNext(d) : n.scrollTo(0, d), n.emit("autoplay:select"), B) return y();
    v();
  }
  function K() {
    if (!i) return null;
    const I = o[n.selectedScrollSnap()], O = (/* @__PURE__ */ new Date()).getTime() - i;
    return I - O;
  }
  return {
    name: "autoplay",
    options: e,
    init: f,
    destroy: h,
    play: F,
    stop: R,
    reset: D,
    isPlaying: H,
    timeUntilNext: K
  };
}
Ml.globalOptions = void 0;
function bn() {
  return bn = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, bn.apply(this, arguments);
}
var $k = 0.996, Wk = function(t, n) {
  return n === void 0 && (n = $k), t * n / (1 - n);
};
function Hk(e) {
  return e[e.length - 1];
}
function Uk(e) {
  return e.reduce(function(t, n) {
    return t + n;
  }) / e.length;
}
var zk = function(t, n, r) {
  return Math.min(Math.max(n, t), r);
};
function Cs(e, t) {
  if (e.length !== t.length)
    throw new Error("vectors must be same length");
  return e.map(function(n, r) {
    return n + t[r];
  });
}
function pd(e) {
  return Math.max.apply(Math, e.map(Math.abs));
}
function Xn(e) {
  return Object.freeze(e), Object.values(e).forEach(function(t) {
    t !== null && typeof t == "object" && !Object.isFrozen(t) && Xn(t);
  }), e;
}
function Gk() {
  var e = {};
  function t(o, i) {
    return e[o] = (e[o] || []).concat(i), function() {
      return n(o, i);
    };
  }
  function n(o, i) {
    e[o] = (e[o] || []).filter(function(s) {
      return s !== i;
    });
  }
  function r(o, i) {
    o in e && e[o].forEach(function(s) {
      return s(i);
    });
  }
  return Xn({
    on: t,
    off: n,
    dispatch: r
  });
}
function Kk(e) {
  var t = [], n = function(s) {
    return s.addEventListener("wheel", e, {
      passive: !1
    }), t.push(s), function() {
      return r(s);
    };
  }, r = function(s) {
    s.removeEventListener("wheel", e), t = t.filter(function(l) {
      return l !== s;
    });
  }, o = function() {
    t.forEach(r);
  };
  return Xn({
    observe: n,
    unobserve: r,
    disconnect: o
  });
}
var Yk = 16 * 1.125, Zk = typeof window < "u" && window.innerHeight || 800, xs = [1, Yk, Zk];
function Xk(e) {
  var t = e.deltaX * xs[e.deltaMode], n = e.deltaY * xs[e.deltaMode], r = (e.deltaZ || 0) * xs[e.deltaMode];
  return {
    timeStamp: e.timeStamp,
    axisDelta: [t, n, r]
  };
}
var qk = [-1, -1, -1];
function Qk(e, t) {
  if (!t)
    return e;
  var n = t === !0 ? qk : t.map(function(r) {
    return r ? -1 : 1;
  });
  return bn({}, e, {
    axisDelta: e.axisDelta.map(function(r, o) {
      return r * n[o];
    })
  });
}
var md = 700, Jk = function(t) {
  return bn({}, t, {
    axisDelta: t.axisDelta.map(function(n) {
      return zk(n, -md, md);
    })
  });
}, ks = process.env.NODE_ENV !== "production", eS = 0.6, tS = 0.96, nS = 2, gd = 5, vd = /* @__PURE__ */ Xn({
  preventWheelAction: !0,
  reverseSign: [!0, !0, !1]
}), rS = 400;
function yd() {
  return {
    isStarted: !1,
    isStartPublished: !1,
    isMomentum: !1,
    startTime: 0,
    lastAbsDelta: 1 / 0,
    axisMovement: [0, 0, 0],
    axisVelocity: [0, 0, 0],
    accelerationFactors: [],
    scrollPoints: [],
    scrollPointsToMerge: [],
    willEndTimeout: rS
  };
}
function oS(e) {
  e === void 0 && (e = {});
  var t = Gk(), n = t.on, r = t.off, o = t.dispatch, i = vd, s = yd(), l, c = !1, u, d = function(I) {
    Array.isArray(I) ? I.forEach(function(O) {
      return m(O);
    }) : m(I);
  }, f = function(I) {
    return I === void 0 && (I = {}), Object.values(I).some(function(O) {
      return O == null;
    }) ? (ks && console.error("updateOptions ignored! undefined & null options not allowed"), i) : i = Xn(bn({}, vd, i, I));
  }, h = function(I) {
    var O = bn({
      event: l,
      isStart: !1,
      isEnding: !1,
      isMomentumCancel: !1,
      isMomentum: s.isMomentum,
      axisDelta: [0, 0, 0],
      axisVelocity: s.axisVelocity,
      axisMovement: s.axisMovement,
      get axisMovementProjection() {
        return Cs(O.axisMovement, O.axisVelocity.map(function(z) {
          return Wk(z);
        }));
      }
    }, I);
    o("wheel", bn({}, O, {
      previous: u
    })), u = O;
  }, g = function(I, O) {
    var z = i, B = z.preventWheelAction, $ = O[0], G = O[1], M = O[2];
    if (typeof B == "boolean") return B;
    switch (B) {
      case "x":
        return Math.abs($) >= I;
      case "y":
        return Math.abs(G) >= I;
      case "z":
        return Math.abs(M) >= I;
      default:
        return ks && console.warn("unsupported preventWheelAction value: " + B, "warn"), !1;
    }
  }, m = function(I) {
    var O = Jk(Qk(Xk(I), i.reverseSign)), z = O.axisDelta, B = O.timeStamp, $ = pd(z);
    if (I.preventDefault && g($, z) && I.preventDefault(), s.isStarted ? s.isMomentum && $ > Math.max(2, s.lastAbsDelta * 2) && (R(!0), _()) : _(), $ === 0 && Object.is && Object.is(I.deltaX, -0)) {
      c = !0;
      return;
    }
    l = I, s.axisMovement = Cs(s.axisMovement, z), s.lastAbsDelta = $, s.scrollPointsToMerge.push({
      axisDelta: z,
      timeStamp: B
    }), v(), h({
      axisDelta: z,
      isStart: !s.isStartPublished
    }), s.isStartPublished = !0, F();
  }, v = function() {
    s.scrollPointsToMerge.length === nS ? (s.scrollPoints.unshift({
      axisDeltaSum: s.scrollPointsToMerge.map(function(I) {
        return I.axisDelta;
      }).reduce(Cs),
      timeStamp: Uk(s.scrollPointsToMerge.map(function(I) {
        return I.timeStamp;
      }))
    }), w(), s.scrollPointsToMerge.length = 0, s.scrollPoints.length = 1, s.isMomentum || E()) : s.isStartPublished || y();
  }, y = function() {
    s.axisVelocity = Hk(s.scrollPointsToMerge).axisDelta.map(function(I) {
      return I / s.willEndTimeout;
    });
  }, w = function() {
    var I = s.scrollPoints, O = I[0], z = I[1];
    if (!(!z || !O)) {
      var B = O.timeStamp - z.timeStamp;
      if (B <= 0) {
        ks && console.warn("invalid deltaTime");
        return;
      }
      var $ = O.axisDeltaSum.map(function(M) {
        return M / B;
      }), G = $.map(function(M, S) {
        return M / (s.axisVelocity[S] || 1);
      });
      s.axisVelocity = $, s.accelerationFactors.push(G), b(B);
    }
  }, b = function(I) {
    var O = Math.ceil(I / 10) * 10 * 1.2;
    s.isMomentum || (O = Math.max(100, O * 2)), s.willEndTimeout = Math.min(1e3, Math.round(O));
  }, C = function(I) {
    return I === 0 ? !0 : I <= tS && I >= eS;
  }, E = function() {
    if (s.accelerationFactors.length >= gd) {
      if (c && (c = !1, pd(s.axisVelocity) >= 0.2)) {
        L();
        return;
      }
      var I = s.accelerationFactors.slice(gd * -1), O = I.every(function(z) {
        var B = !!z.reduce(function(G, M) {
          return G && G < 1 && G === M ? 1 : 0;
        }), $ = z.filter(C).length === z.length;
        return B || $;
      });
      O && L(), s.accelerationFactors = I;
    }
  }, L = function() {
    s.isMomentum = !0;
  }, _ = function() {
    s = yd(), s.isStarted = !0, s.startTime = Date.now(), u = void 0, c = !1;
  }, F = /* @__PURE__ */ function() {
    var W;
    return function() {
      clearTimeout(W), W = setTimeout(R, s.willEndTimeout);
    };
  }(), R = function(I) {
    I === void 0 && (I = !1), s.isStarted && (s.isMomentum && I ? h({
      isEnding: !0,
      isMomentumCancel: !0
    }) : h({
      isEnding: !0
    }), s.isMomentum = !1, s.isStarted = !1);
  }, D = Kk(d), H = D.observe, J = D.unobserve, K = D.disconnect;
  return f(e), Xn({
    on: n,
    off: r,
    observe: H,
    unobserve: J,
    disconnect: K,
    feedWheel: d,
    updateOptions: f
  });
}
var iS = {
  active: !0,
  breakpoints: {},
  wheelDraggingClass: "is-wheel-dragging",
  forceWheelAxis: void 0,
  target: void 0
};
El.globalOptions = void 0;
var sS = process.env.NODE_ENV !== "production";
function El(e) {
  e === void 0 && (e = {});
  var t, n = function() {
  };
  function r(i, s) {
    var l, c, u = s.mergeOptions, d = s.optionsAtMedia, f = u(iS, El.globalOptions), h = u(f, e);
    t = d(h);
    var g = i.internalEngine(), m = (l = t.target) != null ? l : i.containerNode().parentNode, v = (c = t.forceWheelAxis) != null ? c : g.options.axis, y = oS({
      preventWheelAction: v,
      reverseSign: [!0, !0, !1]
    }), w = y.observe(m), b = y.on("wheel", K), C = !1, E;
    function L(W) {
      try {
        E = new MouseEvent("mousedown", W.event), J(E);
      } catch {
        return sS && console.warn("Legacy browser requires events-polyfill (https://github.com/xiel/embla-carousel-wheel-gestures#legacy-browsers)"), n();
      }
      C = !0, F(), t.wheelDraggingClass && m.classList.add(t.wheelDraggingClass);
    }
    function _(W) {
      C = !1, J(H("mouseup", W)), R(), t.wheelDraggingClass && m.classList.remove(t.wheelDraggingClass);
    }
    function F() {
      document.documentElement.addEventListener("mousemove", D, !0), document.documentElement.addEventListener("mouseup", D, !0), document.documentElement.addEventListener("mousedown", D, !0);
    }
    function R() {
      document.documentElement.removeEventListener("mousemove", D, !0), document.documentElement.removeEventListener("mouseup", D, !0), document.documentElement.removeEventListener("mousedown", D, !0);
    }
    function D(W) {
      C && W.isTrusted && W.stopImmediatePropagation();
    }
    function H(W, I) {
      var O, z;
      if (v === g.options.axis) {
        var B = I.axisMovement;
        O = B[0], z = B[1];
      } else {
        var $ = I.axisMovement;
        z = $[0], O = $[1];
      }
      if (!g.options.skipSnaps && !g.options.dragFree) {
        var G = g.containerRect.width, M = g.containerRect.height;
        O = O < 0 ? Math.max(O, -G) : Math.min(O, G), z = z < 0 ? Math.max(z, -M) : Math.min(z, M);
      }
      return new MouseEvent(W, {
        clientX: E.clientX + O,
        clientY: E.clientY + z,
        screenX: E.screenX + O,
        screenY: E.screenY + z,
        movementX: O,
        movementY: z,
        button: 0,
        bubbles: !0,
        cancelable: !0,
        composed: !0
      });
    }
    function J(W) {
      i.containerNode().dispatchEvent(W);
    }
    function K(W) {
      var I = W.axisDelta, O = I[0], z = I[1], B = v === "x" ? O : z, $ = v === "x" ? z : O, G = W.isMomentum && W.previous && !W.previous.isMomentum, M = W.isEnding && !W.isMomentum || G, S = Math.abs(B) > Math.abs($);
      S && !C && !W.isMomentum && L(W), C && (M ? _(W) : J(H("mousemove", W)));
    }
    n = function() {
      w(), b(), R();
    };
  }
  var o = {
    name: "wheelGestures",
    options: e,
    init: r,
    destroy: function() {
      return n();
    }
  };
  return o;
}
const aS = Fe("", {
  variants: {
    peek: { true: "", false: "" },
    default: {
      1: "basis-full",
      2: "basis-1/2",
      3: "basis-1/3",
      4: "basis-1/4",
      6: "basis-1/6",
      peek1: "basis-[85%]",
      peek2: "basis-[48%]",
      peek3: "basis-[32%]",
      peek4: "basis-[24%]",
      peek6: "basis-[16%]"
    },
    xs: {
      1: "xs:basis-full",
      2: "xs:basis-1/2",
      3: "xs:basis-1/3",
      4: "xs:basis-1/4",
      6: "xs:basis-1/6",
      peek1: "xs:basis-[85%]",
      peek2: "xs:basis-[48%]",
      peek3: "xs:basis-[32%]",
      peek4: "xs:basis-[24%]",
      peek6: "xs:basis-[16%]"
    },
    sm: {
      1: "sm:basis-full",
      2: "sm:basis-1/2",
      3: "sm:basis-1/3",
      4: "sm:basis-1/4",
      6: "sm:basis-1/6",
      peek1: "sm:basis-[85%]",
      peek2: "sm:basis-[48%]",
      peek3: "sm:basis-[32%]",
      peek4: "sm:basis-[24%]",
      peek6: "sm:basis-[16%]"
    },
    md: {
      1: "md:basis-full",
      2: "md:basis-1/2",
      3: "md:basis-1/3",
      4: "md:basis-1/4",
      6: "md:basis-1/6",
      peek1: "md:basis-[85%]",
      peek2: "md:basis-[48%]",
      peek3: "md:basis-[32%]",
      peek4: "md:basis-[24%]",
      peek6: "md:basis-[16%]"
    },
    lg: {
      1: "lg:basis-full",
      2: "lg:basis-1/2",
      3: "lg:basis-1/3",
      4: "lg:basis-1/4",
      6: "lg:basis-1/6",
      peek1: "lg:basis-[85%]",
      peek2: "lg:basis-[48%]",
      peek3: "lg:basis-[32%]",
      peek4: "lg:basis-[24%]",
      peek6: "lg:basis-[16%]"
    }
  },
  defaultVariants: {
    peek: !1,
    default: 1
  }
}), lS = ({
  children: e,
  showArrows: t = !0,
  showDots: n = !0,
  autoplay: r = !1,
  delay: o = 3e3,
  columns: i = { default: 1 },
  showPeek: s = !1
}) => {
  const l = le.Children.toArray(e), c = le.useRef(
    r ? Ml({ delay: o, stopOnInteraction: !0 }) : void 0
  ), u = () => {
    c.current && c.current.stop();
  }, d = () => {
    c.current && c.current.play();
  };
  function f(h, g) {
    return g ? `peek${h || 1}` : h || 1;
  }
  return /* @__PURE__ */ a(
    $p,
    {
      className: "flex flex-col gap-3",
      opts: {
        align: "center",
        slidesToScroll: "auto",
        duration: 20,
        containScroll: !1
      },
      plugins: [c.current, El()].filter(Boolean),
      onMouseEnter: r ? u : void 0,
      onMouseLeave: r ? d : void 0,
      children: /* @__PURE__ */ x("div", { className: "flex flex-col gap-3", children: [
        /* @__PURE__ */ x("div", { className: "relative", children: [
          /* @__PURE__ */ a(Wp, { children: le.Children.map(l, (h, g) => /* @__PURE__ */ a(
            Hp,
            {
              className: aS({
                default: f(i.default, s),
                xs: f(i.xs, s),
                sm: f(i.sm, s),
                md: f(i.md, s),
                lg: f(i.lg, s),
                peek: s
              }),
              children: h
            },
            g
          )) }),
          t && /* @__PURE__ */ x(Ce, { children: [
            /* @__PURE__ */ a(Up, {}),
            /* @__PURE__ */ a(zp, {})
          ] })
        ] }),
        n && /* @__PURE__ */ a(Gp, {})
      ] })
    }
  );
}, Kp = p.forwardRef(({ ...e }, t) => /* @__PURE__ */ a("nav", { ref: t, "aria-label": "breadcrumb", ...e }));
Kp.displayName = "Breadcrumb";
const Yp = p.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ a(
  "ol",
  {
    ref: n,
    className: A(
      "flex list-none flex-nowrap items-center gap-1 text-f1-foreground-secondary",
      e
    ),
    ...t
  }
));
Yp.displayName = "BreadcrumbList";
const Zp = p.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ a(
  "li",
  {
    ref: n,
    className: A("inline-flex items-center gap-0.5", e),
    ...t
  }
));
Zp.displayName = "BreadcrumbItem";
const Xp = p.forwardRef(({ asChild: e, className: t, ...n }, r) => /* @__PURE__ */ a(
  e ? Un : Jt,
  {
    ref: r,
    className: A(
      "rounded-sm px-1.5 py-0.5 font-medium text-f1-foreground no-underline transition-colors hover:bg-f1-background-secondary",
      t
    ),
    ...n
  }
));
Xp.displayName = "BreadcrumbLink";
const qp = p.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ a(
  "span",
  {
    ref: n,
    role: "link",
    "aria-disabled": "true",
    "aria-current": "page",
    className: A("truncate px-1.5 py-0.5 text-f1-foreground", e),
    ...t
  }
));
qp.displayName = "BreadcrumbPage";
const Ll = ({
  children: e,
  className: t,
  ...n
}) => /* @__PURE__ */ a(
  "li",
  {
    role: "presentation",
    "aria-hidden": "true",
    className: A("flex align-bottom", t),
    ...n,
    children: e ?? /* @__PURE__ */ a(Ka, {})
  }
);
Ll.displayName = "BreadcrumbSeparator";
var Ss = "rovingFocusGroup.onEntryFocus", cS = { bubbles: !1, cancelable: !0 }, Ai = "RovingFocusGroup", [Js, Qp, uS] = Zr(Ai), [dS, Di] = Vt(
  Ai,
  [uS]
), [fS, hS] = dS(Ai), Jp = p.forwardRef(
  (e, t) => /* @__PURE__ */ a(Js.Provider, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ a(Js.Slot, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ a(pS, { ...e, ref: t }) }) })
);
Jp.displayName = Ai;
var pS = p.forwardRef((e, t) => {
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
  } = e, h = p.useRef(null), g = ve(t, h), m = er(i), [v = null, y] = wt({
    prop: s,
    defaultProp: l,
    onChange: c
  }), [w, b] = p.useState(!1), C = Ie(u), E = Qp(n), L = p.useRef(!1), [_, F] = p.useState(0);
  return p.useEffect(() => {
    const R = h.current;
    if (R)
      return R.addEventListener(Ss, C), () => R.removeEventListener(Ss, C);
  }, [C]), /* @__PURE__ */ a(
    fS,
    {
      scope: n,
      orientation: r,
      dir: m,
      loop: o,
      currentTabStopId: v,
      onItemFocus: p.useCallback(
        (R) => y(R),
        [y]
      ),
      onItemShiftTab: p.useCallback(() => b(!0), []),
      onFocusableItemAdd: p.useCallback(
        () => F((R) => R + 1),
        []
      ),
      onFocusableItemRemove: p.useCallback(
        () => F((R) => R - 1),
        []
      ),
      children: /* @__PURE__ */ a(
        fe.div,
        {
          tabIndex: w || _ === 0 ? -1 : 0,
          "data-orientation": r,
          ...f,
          ref: g,
          style: { outline: "none", ...e.style },
          onMouseDown: ee(e.onMouseDown, () => {
            L.current = !0;
          }),
          onFocus: ee(e.onFocus, (R) => {
            const D = !L.current;
            if (R.target === R.currentTarget && D && !w) {
              const H = new CustomEvent(Ss, cS);
              if (R.currentTarget.dispatchEvent(H), !H.defaultPrevented) {
                const J = E().filter((z) => z.focusable), K = J.find((z) => z.active), W = J.find((z) => z.id === v), O = [K, W, ...J].filter(
                  Boolean
                ).map((z) => z.ref.current);
                nm(O, d);
              }
            }
            L.current = !1;
          }),
          onBlur: ee(e.onBlur, () => b(!1))
        }
      )
    }
  );
}), em = "RovingFocusGroupItem", tm = p.forwardRef(
  (e, t) => {
    const {
      __scopeRovingFocusGroup: n,
      focusable: r = !0,
      active: o = !1,
      tabStopId: i,
      ...s
    } = e, l = ct(), c = i || l, u = hS(em, n), d = u.currentTabStopId === c, f = Qp(n), { onFocusableItemAdd: h, onFocusableItemRemove: g } = u;
    return p.useEffect(() => {
      if (r)
        return h(), () => g();
    }, [r, h, g]), /* @__PURE__ */ a(
      Js.ItemSlot,
      {
        scope: n,
        id: c,
        focusable: r,
        active: o,
        children: /* @__PURE__ */ a(
          fe.span,
          {
            tabIndex: d ? 0 : -1,
            "data-orientation": u.orientation,
            ...s,
            ref: t,
            onMouseDown: ee(e.onMouseDown, (m) => {
              r ? u.onItemFocus(c) : m.preventDefault();
            }),
            onFocus: ee(e.onFocus, () => u.onItemFocus(c)),
            onKeyDown: ee(e.onKeyDown, (m) => {
              if (m.key === "Tab" && m.shiftKey) {
                u.onItemShiftTab();
                return;
              }
              if (m.target !== m.currentTarget) return;
              const v = vS(m, u.orientation, u.dir);
              if (v !== void 0) {
                if (m.metaKey || m.ctrlKey || m.altKey || m.shiftKey) return;
                m.preventDefault();
                let w = f().filter((b) => b.focusable).map((b) => b.ref.current);
                if (v === "last") w.reverse();
                else if (v === "prev" || v === "next") {
                  v === "prev" && w.reverse();
                  const b = w.indexOf(m.currentTarget);
                  w = u.loop ? yS(w, b + 1) : w.slice(b + 1);
                }
                setTimeout(() => nm(w));
              }
            })
          }
        )
      }
    );
  }
);
tm.displayName = em;
var mS = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function gS(e, t) {
  return t !== "rtl" ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e;
}
function vS(e, t, n) {
  const r = gS(e.key, n);
  if (!(t === "vertical" && ["ArrowLeft", "ArrowRight"].includes(r)) && !(t === "horizontal" && ["ArrowUp", "ArrowDown"].includes(r)))
    return mS[r];
}
function nm(e, t = !1) {
  const n = document.activeElement;
  for (const r of e)
    if (r === n || (r.focus({ preventScroll: t }), document.activeElement !== n)) return;
}
function yS(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
var rm = Jp, om = tm, ea = ["Enter", " "], bS = ["ArrowDown", "PageUp", "Home"], im = ["ArrowUp", "PageDown", "End"], wS = [...bS, ...im], CS = {
  ltr: [...ea, "ArrowRight"],
  rtl: [...ea, "ArrowLeft"]
}, xS = {
  ltr: ["ArrowLeft"],
  rtl: ["ArrowRight"]
}, eo = "Menu", [_r, kS, SS] = Zr(eo), [Ln, sm] = Vt(eo, [
  SS,
  Jo,
  Di
]), _i = Jo(), am = Di(), [MS, Nn] = Ln(eo), [ES, to] = Ln(eo), lm = (e) => {
  const { __scopeMenu: t, open: n = !1, children: r, dir: o, onOpenChange: i, modal: s = !0 } = e, l = _i(t), [c, u] = p.useState(null), d = p.useRef(!1), f = Ie(i), h = er(o);
  return p.useEffect(() => {
    const g = () => {
      d.current = !0, document.addEventListener("pointerdown", m, { capture: !0, once: !0 }), document.addEventListener("pointermove", m, { capture: !0, once: !0 });
    }, m = () => d.current = !1;
    return document.addEventListener("keydown", g, { capture: !0 }), () => {
      document.removeEventListener("keydown", g, { capture: !0 }), document.removeEventListener("pointerdown", m, { capture: !0 }), document.removeEventListener("pointermove", m, { capture: !0 });
    };
  }, []), /* @__PURE__ */ a(Id, { ...l, children: /* @__PURE__ */ a(
    MS,
    {
      scope: t,
      open: n,
      onOpenChange: f,
      content: c,
      onContentChange: u,
      children: /* @__PURE__ */ a(
        ES,
        {
          scope: t,
          onClose: p.useCallback(() => f(!1), [f]),
          isUsingKeyboardRef: d,
          dir: h,
          modal: s,
          children: r
        }
      )
    }
  ) });
};
lm.displayName = eo;
var LS = "MenuAnchor", Nl = p.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e, o = _i(n);
    return /* @__PURE__ */ a(Ad, { ...o, ...r, ref: t });
  }
);
Nl.displayName = LS;
var Pl = "MenuPortal", [NS, cm] = Ln(Pl, {
  forceMount: void 0
}), um = (e) => {
  const { __scopeMenu: t, forceMount: n, children: r, container: o } = e, i = Nn(Pl, t);
  return /* @__PURE__ */ a(NS, { scope: t, forceMount: n, children: /* @__PURE__ */ a(Xe, { present: n || i.open, children: /* @__PURE__ */ a(oi, { asChild: !0, container: o, children: r }) }) });
};
um.displayName = Pl;
var ut = "MenuContent", [PS, Tl] = Ln(ut), dm = p.forwardRef(
  (e, t) => {
    const n = cm(ut, e.__scopeMenu), { forceMount: r = n.forceMount, ...o } = e, i = Nn(ut, e.__scopeMenu), s = to(ut, e.__scopeMenu);
    return /* @__PURE__ */ a(_r.Provider, { scope: e.__scopeMenu, children: /* @__PURE__ */ a(Xe, { present: r || i.open, children: /* @__PURE__ */ a(_r.Slot, { scope: e.__scopeMenu, children: s.modal ? /* @__PURE__ */ a(TS, { ...o, ref: t }) : /* @__PURE__ */ a(RS, { ...o, ref: t }) }) }) });
  }
), TS = p.forwardRef(
  (e, t) => {
    const n = Nn(ut, e.__scopeMenu), r = p.useRef(null), o = ve(t, r);
    return p.useEffect(() => {
      const i = r.current;
      if (i) return ul(i);
    }, []), /* @__PURE__ */ a(
      Rl,
      {
        ...e,
        ref: o,
        trapFocus: n.open,
        disableOutsidePointerEvents: n.open,
        disableOutsideScroll: !0,
        onFocusOutside: ee(
          e.onFocusOutside,
          (i) => i.preventDefault(),
          { checkForDefaultPrevented: !1 }
        ),
        onDismiss: () => n.onOpenChange(!1)
      }
    );
  }
), RS = p.forwardRef((e, t) => {
  const n = Nn(ut, e.__scopeMenu);
  return /* @__PURE__ */ a(
    Rl,
    {
      ...e,
      ref: t,
      trapFocus: !1,
      disableOutsidePointerEvents: !1,
      disableOutsideScroll: !1,
      onDismiss: () => n.onOpenChange(!1)
    }
  );
}), Rl = p.forwardRef(
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
      onInteractOutside: h,
      onDismiss: g,
      disableOutsideScroll: m,
      ...v
    } = e, y = Nn(ut, n), w = to(ut, n), b = _i(n), C = am(n), E = kS(n), [L, _] = p.useState(null), F = p.useRef(null), R = ve(t, F, y.onContentChange), D = p.useRef(0), H = p.useRef(""), J = p.useRef(0), K = p.useRef(null), W = p.useRef("right"), I = p.useRef(0), O = m ? xi : p.Fragment, z = m ? { as: Un, allowPinchZoom: !0 } : void 0, B = (G) => {
      var V, Z;
      const M = H.current + G, S = E().filter((se) => !se.disabled), X = document.activeElement, te = (V = S.find((se) => se.ref.current === X)) == null ? void 0 : V.textValue, ie = S.map((se) => se.textValue), de = HS(ie, M, te), ce = (Z = S.find((se) => se.textValue === de)) == null ? void 0 : Z.ref.current;
      (function se(re) {
        H.current = re, window.clearTimeout(D.current), re !== "" && (D.current = window.setTimeout(() => se(""), 1e3));
      })(M), ce && setTimeout(() => ce.focus());
    };
    p.useEffect(() => () => window.clearTimeout(D.current), []), cl();
    const $ = p.useCallback((G) => {
      var S, X;
      return W.current === ((S = K.current) == null ? void 0 : S.side) && zS(G, (X = K.current) == null ? void 0 : X.area);
    }, []);
    return /* @__PURE__ */ a(
      PS,
      {
        scope: n,
        searchRef: H,
        onItemEnter: p.useCallback(
          (G) => {
            $(G) && G.preventDefault();
          },
          [$]
        ),
        onItemLeave: p.useCallback(
          (G) => {
            var M;
            $(G) || ((M = F.current) == null || M.focus(), _(null));
          },
          [$]
        ),
        onTriggerLeave: p.useCallback(
          (G) => {
            $(G) && G.preventDefault();
          },
          [$]
        ),
        pointerGraceTimerRef: J,
        onPointerGraceIntentChange: p.useCallback((G) => {
          K.current = G;
        }, []),
        children: /* @__PURE__ */ a(O, { ...z, children: /* @__PURE__ */ a(
          wi,
          {
            asChild: !0,
            trapped: o,
            onMountAutoFocus: ee(i, (G) => {
              var M;
              G.preventDefault(), (M = F.current) == null || M.focus({ preventScroll: !0 });
            }),
            onUnmountAutoFocus: s,
            children: /* @__PURE__ */ a(
              ei,
              {
                asChild: !0,
                disableOutsidePointerEvents: l,
                onEscapeKeyDown: u,
                onPointerDownOutside: d,
                onFocusOutside: f,
                onInteractOutside: h,
                onDismiss: g,
                children: /* @__PURE__ */ a(
                  rm,
                  {
                    asChild: !0,
                    ...C,
                    dir: w.dir,
                    orientation: "vertical",
                    loop: r,
                    currentTabStopId: L,
                    onCurrentTabStopIdChange: _,
                    onEntryFocus: ee(c, (G) => {
                      w.isUsingKeyboardRef.current || G.preventDefault();
                    }),
                    preventScrollOnEntryFocus: !0,
                    children: /* @__PURE__ */ a(
                      Dd,
                      {
                        role: "menu",
                        "aria-orientation": "vertical",
                        "data-state": Lm(y.open),
                        "data-radix-menu-content": "",
                        dir: w.dir,
                        ...b,
                        ...v,
                        ref: R,
                        style: { outline: "none", ...v.style },
                        onKeyDown: ee(v.onKeyDown, (G) => {
                          const S = G.target.closest("[data-radix-menu-content]") === G.currentTarget, X = G.ctrlKey || G.altKey || G.metaKey, te = G.key.length === 1;
                          S && (G.key === "Tab" && G.preventDefault(), !X && te && B(G.key));
                          const ie = F.current;
                          if (G.target !== ie || !wS.includes(G.key)) return;
                          G.preventDefault();
                          const ce = E().filter((V) => !V.disabled).map((V) => V.ref.current);
                          im.includes(G.key) && ce.reverse(), $S(ce);
                        }),
                        onBlur: ee(e.onBlur, (G) => {
                          G.currentTarget.contains(G.target) || (window.clearTimeout(D.current), H.current = "");
                        }),
                        onPointerMove: ee(
                          e.onPointerMove,
                          Ir((G) => {
                            const M = G.target, S = I.current !== G.clientX;
                            if (G.currentTarget.contains(M) && S) {
                              const X = G.clientX > I.current ? "right" : "left";
                              W.current = X, I.current = G.clientX;
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
dm.displayName = ut;
var AS = "MenuGroup", Al = p.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e;
    return /* @__PURE__ */ a(fe.div, { role: "group", ...r, ref: t });
  }
);
Al.displayName = AS;
var DS = "MenuLabel", fm = p.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e;
    return /* @__PURE__ */ a(fe.div, { ...r, ref: t });
  }
);
fm.displayName = DS;
var Ko = "MenuItem", bd = "menu.itemSelect", Ii = p.forwardRef(
  (e, t) => {
    const { disabled: n = !1, onSelect: r, ...o } = e, i = p.useRef(null), s = to(Ko, e.__scopeMenu), l = Tl(Ko, e.__scopeMenu), c = ve(t, i), u = p.useRef(!1), d = () => {
      const f = i.current;
      if (!n && f) {
        const h = new CustomEvent(bd, { bubbles: !0, cancelable: !0 });
        f.addEventListener(bd, (g) => r == null ? void 0 : r(g), { once: !0 }), Ms(f, h), h.defaultPrevented ? u.current = !1 : s.onClose();
      }
    };
    return /* @__PURE__ */ a(
      hm,
      {
        ...o,
        ref: c,
        disabled: n,
        onClick: ee(e.onClick, d),
        onPointerDown: (f) => {
          var h;
          (h = e.onPointerDown) == null || h.call(e, f), u.current = !0;
        },
        onPointerUp: ee(e.onPointerUp, (f) => {
          var h;
          u.current || (h = f.currentTarget) == null || h.click();
        }),
        onKeyDown: ee(e.onKeyDown, (f) => {
          const h = l.searchRef.current !== "";
          n || h && f.key === " " || ea.includes(f.key) && (f.currentTarget.click(), f.preventDefault());
        })
      }
    );
  }
);
Ii.displayName = Ko;
var hm = p.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, disabled: r = !1, textValue: o, ...i } = e, s = Tl(Ko, n), l = am(n), c = p.useRef(null), u = ve(t, c), [d, f] = p.useState(!1), [h, g] = p.useState("");
    return p.useEffect(() => {
      const m = c.current;
      m && g((m.textContent ?? "").trim());
    }, [i.children]), /* @__PURE__ */ a(
      _r.ItemSlot,
      {
        scope: n,
        disabled: r,
        textValue: o ?? h,
        children: /* @__PURE__ */ a(om, { asChild: !0, ...l, focusable: !r, children: /* @__PURE__ */ a(
          fe.div,
          {
            role: "menuitem",
            "data-highlighted": d ? "" : void 0,
            "aria-disabled": r || void 0,
            "data-disabled": r ? "" : void 0,
            ...i,
            ref: u,
            onPointerMove: ee(
              e.onPointerMove,
              Ir((m) => {
                r ? s.onItemLeave(m) : (s.onItemEnter(m), m.defaultPrevented || m.currentTarget.focus({ preventScroll: !0 }));
              })
            ),
            onPointerLeave: ee(
              e.onPointerLeave,
              Ir((m) => s.onItemLeave(m))
            ),
            onFocus: ee(e.onFocus, () => f(!0)),
            onBlur: ee(e.onBlur, () => f(!1))
          }
        ) })
      }
    );
  }
), _S = "MenuCheckboxItem", pm = p.forwardRef(
  (e, t) => {
    const { checked: n = !1, onCheckedChange: r, ...o } = e;
    return /* @__PURE__ */ a(bm, { scope: e.__scopeMenu, checked: n, children: /* @__PURE__ */ a(
      Ii,
      {
        role: "menuitemcheckbox",
        "aria-checked": Yo(n) ? "mixed" : n,
        ...o,
        ref: t,
        "data-state": _l(n),
        onSelect: ee(
          o.onSelect,
          () => r == null ? void 0 : r(Yo(n) ? !0 : !n),
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
);
pm.displayName = _S;
var mm = "MenuRadioGroup", [IS, OS] = Ln(
  mm,
  { value: void 0, onValueChange: () => {
  } }
), gm = p.forwardRef(
  (e, t) => {
    const { value: n, onValueChange: r, ...o } = e, i = Ie(r);
    return /* @__PURE__ */ a(IS, { scope: e.__scopeMenu, value: n, onValueChange: i, children: /* @__PURE__ */ a(Al, { ...o, ref: t }) });
  }
);
gm.displayName = mm;
var vm = "MenuRadioItem", ym = p.forwardRef(
  (e, t) => {
    const { value: n, ...r } = e, o = OS(vm, e.__scopeMenu), i = n === o.value;
    return /* @__PURE__ */ a(bm, { scope: e.__scopeMenu, checked: i, children: /* @__PURE__ */ a(
      Ii,
      {
        role: "menuitemradio",
        "aria-checked": i,
        ...r,
        ref: t,
        "data-state": _l(i),
        onSelect: ee(
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
ym.displayName = vm;
var Dl = "MenuItemIndicator", [bm, VS] = Ln(
  Dl,
  { checked: !1 }
), wm = p.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, forceMount: r, ...o } = e, i = VS(Dl, n);
    return /* @__PURE__ */ a(
      Xe,
      {
        present: r || Yo(i.checked) || i.checked === !0,
        children: /* @__PURE__ */ a(
          fe.span,
          {
            ...o,
            ref: t,
            "data-state": _l(i.checked)
          }
        )
      }
    );
  }
);
wm.displayName = Dl;
var FS = "MenuSeparator", Cm = p.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e;
    return /* @__PURE__ */ a(
      fe.div,
      {
        role: "separator",
        "aria-orientation": "horizontal",
        ...r,
        ref: t
      }
    );
  }
);
Cm.displayName = FS;
var BS = "MenuArrow", xm = p.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e, o = _i(n);
    return /* @__PURE__ */ a(_d, { ...o, ...r, ref: t });
  }
);
xm.displayName = BS;
var jS = "MenuSub", [tP, km] = Ln(jS), fr = "MenuSubTrigger", Sm = p.forwardRef(
  (e, t) => {
    const n = Nn(fr, e.__scopeMenu), r = to(fr, e.__scopeMenu), o = km(fr, e.__scopeMenu), i = Tl(fr, e.__scopeMenu), s = p.useRef(null), { pointerGraceTimerRef: l, onPointerGraceIntentChange: c } = i, u = { __scopeMenu: e.__scopeMenu }, d = p.useCallback(() => {
      s.current && window.clearTimeout(s.current), s.current = null;
    }, []);
    return p.useEffect(() => d, [d]), p.useEffect(() => {
      const f = l.current;
      return () => {
        window.clearTimeout(f), c(null);
      };
    }, [l, c]), /* @__PURE__ */ a(Nl, { asChild: !0, ...u, children: /* @__PURE__ */ a(
      hm,
      {
        id: o.triggerId,
        "aria-haspopup": "menu",
        "aria-expanded": n.open,
        "aria-controls": o.contentId,
        "data-state": Lm(n.open),
        ...e,
        ref: ca(t, o.onTriggerChange),
        onClick: (f) => {
          var h;
          (h = e.onClick) == null || h.call(e, f), !(e.disabled || f.defaultPrevented) && (f.currentTarget.focus(), n.open || n.onOpenChange(!0));
        },
        onPointerMove: ee(
          e.onPointerMove,
          Ir((f) => {
            i.onItemEnter(f), !f.defaultPrevented && !e.disabled && !n.open && !s.current && (i.onPointerGraceIntentChange(null), s.current = window.setTimeout(() => {
              n.onOpenChange(!0), d();
            }, 100));
          })
        ),
        onPointerLeave: ee(
          e.onPointerLeave,
          Ir((f) => {
            var g, m;
            d();
            const h = (g = n.content) == null ? void 0 : g.getBoundingClientRect();
            if (h) {
              const v = (m = n.content) == null ? void 0 : m.dataset.side, y = v === "right", w = y ? -5 : 5, b = h[y ? "left" : "right"], C = h[y ? "right" : "left"];
              i.onPointerGraceIntentChange({
                area: [
                  // Apply a bleed on clientX to ensure that our exit point is
                  // consistently within polygon bounds
                  { x: f.clientX + w, y: f.clientY },
                  { x: b, y: h.top },
                  { x: C, y: h.top },
                  { x: C, y: h.bottom },
                  { x: b, y: h.bottom }
                ],
                side: v
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
        onKeyDown: ee(e.onKeyDown, (f) => {
          var g;
          const h = i.searchRef.current !== "";
          e.disabled || h && f.key === " " || CS[r.dir].includes(f.key) && (n.onOpenChange(!0), (g = n.content) == null || g.focus(), f.preventDefault());
        })
      }
    ) });
  }
);
Sm.displayName = fr;
var Mm = "MenuSubContent", Em = p.forwardRef(
  (e, t) => {
    const n = cm(ut, e.__scopeMenu), { forceMount: r = n.forceMount, ...o } = e, i = Nn(ut, e.__scopeMenu), s = to(ut, e.__scopeMenu), l = km(Mm, e.__scopeMenu), c = p.useRef(null), u = ve(t, c);
    return /* @__PURE__ */ a(_r.Provider, { scope: e.__scopeMenu, children: /* @__PURE__ */ a(Xe, { present: r || i.open, children: /* @__PURE__ */ a(_r.Slot, { scope: e.__scopeMenu, children: /* @__PURE__ */ a(
      Rl,
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
        onFocusOutside: ee(e.onFocusOutside, (d) => {
          d.target !== l.trigger && i.onOpenChange(!1);
        }),
        onEscapeKeyDown: ee(e.onEscapeKeyDown, (d) => {
          s.onClose(), d.preventDefault();
        }),
        onKeyDown: ee(e.onKeyDown, (d) => {
          var g;
          const f = d.currentTarget.contains(d.target), h = xS[s.dir].includes(d.key);
          f && h && (i.onOpenChange(!1), (g = l.trigger) == null || g.focus(), d.preventDefault());
        })
      }
    ) }) }) });
  }
);
Em.displayName = Mm;
function Lm(e) {
  return e ? "open" : "closed";
}
function Yo(e) {
  return e === "indeterminate";
}
function _l(e) {
  return Yo(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
function $S(e) {
  const t = document.activeElement;
  for (const n of e)
    if (n === t || (n.focus(), document.activeElement !== t)) return;
}
function WS(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
function HS(e, t, n) {
  const o = t.length > 1 && Array.from(t).every((u) => u === t[0]) ? t[0] : t, i = n ? e.indexOf(n) : -1;
  let s = WS(e, Math.max(i, 0));
  o.length === 1 && (s = s.filter((u) => u !== n));
  const c = s.find(
    (u) => u.toLowerCase().startsWith(o.toLowerCase())
  );
  return c !== n ? c : void 0;
}
function US(e, t) {
  const { x: n, y: r } = e;
  let o = !1;
  for (let i = 0, s = t.length - 1; i < t.length; s = i++) {
    const l = t[i].x, c = t[i].y, u = t[s].x, d = t[s].y;
    c > r != d > r && n < (u - l) * (r - c) / (d - c) + l && (o = !o);
  }
  return o;
}
function zS(e, t) {
  if (!t) return !1;
  const n = { x: e.clientX, y: e.clientY };
  return US(n, t);
}
function Ir(e) {
  return (t) => t.pointerType === "mouse" ? e(t) : void 0;
}
var GS = lm, KS = Nl, YS = um, ZS = dm, XS = Al, qS = fm, QS = Ii, JS = pm, eM = gm, tM = ym, nM = wm, rM = Cm, oM = xm, iM = Sm, sM = Em, Il = "DropdownMenu", [aM, nP] = Vt(
  Il,
  [sm]
), qe = sm(), [lM, Nm] = aM(Il), Pm = (e) => {
  const {
    __scopeDropdownMenu: t,
    children: n,
    dir: r,
    open: o,
    defaultOpen: i,
    onOpenChange: s,
    modal: l = !0
  } = e, c = qe(t), u = p.useRef(null), [d = !1, f] = wt({
    prop: o,
    defaultProp: i,
    onChange: s
  });
  return /* @__PURE__ */ a(
    lM,
    {
      scope: t,
      triggerId: ct(),
      triggerRef: u,
      contentId: ct(),
      open: d,
      onOpenChange: f,
      onOpenToggle: p.useCallback(() => f((h) => !h), [f]),
      modal: l,
      children: /* @__PURE__ */ a(GS, { ...c, open: d, onOpenChange: f, dir: r, modal: l, children: n })
    }
  );
};
Pm.displayName = Il;
var Tm = "DropdownMenuTrigger", Rm = p.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, disabled: r = !1, ...o } = e, i = Nm(Tm, n), s = qe(n);
    return /* @__PURE__ */ a(KS, { asChild: !0, ...s, children: /* @__PURE__ */ a(
      fe.button,
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
        ref: ca(t, i.triggerRef),
        onPointerDown: ee(e.onPointerDown, (l) => {
          !r && l.button === 0 && l.ctrlKey === !1 && (i.onOpenToggle(), i.open || l.preventDefault());
        }),
        onKeyDown: ee(e.onKeyDown, (l) => {
          r || (["Enter", " "].includes(l.key) && i.onOpenToggle(), l.key === "ArrowDown" && i.onOpenChange(!0), ["Enter", " ", "ArrowDown"].includes(l.key) && l.preventDefault());
        })
      }
    ) });
  }
);
Rm.displayName = Tm;
var cM = "DropdownMenuPortal", Am = (e) => {
  const { __scopeDropdownMenu: t, ...n } = e, r = qe(t);
  return /* @__PURE__ */ a(YS, { ...r, ...n });
};
Am.displayName = cM;
var Dm = "DropdownMenuContent", _m = p.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, o = Nm(Dm, n), i = qe(n), s = p.useRef(!1);
    return /* @__PURE__ */ a(
      ZS,
      {
        id: o.contentId,
        "aria-labelledby": o.triggerId,
        ...i,
        ...r,
        ref: t,
        onCloseAutoFocus: ee(e.onCloseAutoFocus, (l) => {
          var c;
          s.current || (c = o.triggerRef.current) == null || c.focus(), s.current = !1, l.preventDefault();
        }),
        onInteractOutside: ee(e.onInteractOutside, (l) => {
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
_m.displayName = Dm;
var uM = "DropdownMenuGroup", dM = p.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, o = qe(n);
    return /* @__PURE__ */ a(XS, { ...o, ...r, ref: t });
  }
);
dM.displayName = uM;
var fM = "DropdownMenuLabel", Im = p.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, o = qe(n);
    return /* @__PURE__ */ a(qS, { ...o, ...r, ref: t });
  }
);
Im.displayName = fM;
var hM = "DropdownMenuItem", Om = p.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, o = qe(n);
    return /* @__PURE__ */ a(QS, { ...o, ...r, ref: t });
  }
);
Om.displayName = hM;
var pM = "DropdownMenuCheckboxItem", Vm = p.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = qe(n);
  return /* @__PURE__ */ a(JS, { ...o, ...r, ref: t });
});
Vm.displayName = pM;
var mM = "DropdownMenuRadioGroup", gM = p.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = qe(n);
  return /* @__PURE__ */ a(eM, { ...o, ...r, ref: t });
});
gM.displayName = mM;
var vM = "DropdownMenuRadioItem", Fm = p.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = qe(n);
  return /* @__PURE__ */ a(tM, { ...o, ...r, ref: t });
});
Fm.displayName = vM;
var yM = "DropdownMenuItemIndicator", Bm = p.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = qe(n);
  return /* @__PURE__ */ a(nM, { ...o, ...r, ref: t });
});
Bm.displayName = yM;
var bM = "DropdownMenuSeparator", jm = p.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = qe(n);
  return /* @__PURE__ */ a(rM, { ...o, ...r, ref: t });
});
jm.displayName = bM;
var wM = "DropdownMenuArrow", CM = p.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, o = qe(n);
    return /* @__PURE__ */ a(oM, { ...o, ...r, ref: t });
  }
);
CM.displayName = wM;
var xM = "DropdownMenuSubTrigger", $m = p.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = qe(n);
  return /* @__PURE__ */ a(iM, { ...o, ...r, ref: t });
});
$m.displayName = xM;
var kM = "DropdownMenuSubContent", Wm = p.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = qe(n);
  return /* @__PURE__ */ a(
    sM,
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
Wm.displayName = kM;
var SM = Pm, MM = Rm, EM = Am, Hm = _m, Um = Im, zm = Om, Gm = Vm, Km = Fm, Ym = Bm, Zm = jm, Xm = $m, qm = Wm;
const LM = SM, NM = MM, PM = p.forwardRef(({ className: e, inset: t, children: n, ...r }, o) => /* @__PURE__ */ x(
  Xm,
  {
    ref: o,
    className: A(
      "flex cursor-default select-none items-center rounded-2xs px-2 py-1.5 text-sm outline-none focus:bg-f1-background-secondary data-[state=open]:bg-f1-background-secondary",
      t && "pl-8",
      e
    ),
    ...r,
    children: [
      n,
      /* @__PURE__ */ a(Ka, { className: "ml-auto h-4 w-4" })
    ]
  }
));
PM.displayName = Xm.displayName;
const TM = p.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ a(
  qm,
  {
    ref: n,
    className: A(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-f1-background text-f1-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    ...t
  }
));
TM.displayName = qm.displayName;
const Qm = p.forwardRef(({ className: e, sideOffset: t = 4, ...n }, r) => /* @__PURE__ */ a(EM, { children: /* @__PURE__ */ a(
  Hm,
  {
    ref: r,
    sideOffset: t,
    className: A(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border border-solid border-f1-border-secondary bg-f1-background text-f1-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    ...n
  }
) }));
Qm.displayName = Hm.displayName;
const Jm = p.forwardRef(({ className: e, inset: t, ...n }, r) => /* @__PURE__ */ a(
  zm,
  {
    ref: r,
    className: A(
      "relative flex cursor-default select-none items-center rounded px-3 py-2 text-base font-medium outline-none transition-colors after:absolute after:inset-x-1 after:inset-y-0 after:h-full after:rounded after:bg-f1-background-hover after:opacity-0 after:transition-opacity after:duration-75 after:content-[''] first:pt-3 first:after:top-1 first:after:h-[calc(100%-0.25rem)] last:pb-3 last:after:bottom-1 last:after:h-[calc(100%-0.25rem)] hover:after:opacity-100 focus:after:opacity-100 data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      "focus:outline-none focus:ring-0 focus:ring-transparent",
      // Temporal fix for Gamma issue
      t && "pl-8",
      e
    ),
    ...n
  }
));
Jm.displayName = zm.displayName;
const RM = p.forwardRef(({ className: e, children: t, checked: n, ...r }, o) => /* @__PURE__ */ x(
  Gm,
  {
    ref: o,
    className: A(
      "relative flex cursor-default select-none items-center rounded-xs py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-f1-background-secondary focus:text-f1-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    checked: n,
    ...r,
    children: [
      /* @__PURE__ */ a("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ a(Ym, { children: /* @__PURE__ */ a(D3, { className: "h-4 w-4" }) }) }),
      t
    ]
  }
));
RM.displayName = Gm.displayName;
const AM = p.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ x(
  Km,
  {
    ref: r,
    className: A(
      "relative flex cursor-default select-none items-center rounded-xs py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-f1-background-secondary focus:text-f1-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    ...n,
    children: [
      /* @__PURE__ */ a("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ a(Ym, { children: /* @__PURE__ */ a(F3, { className: "h-2 w-2 fill-current" }) }) }),
      t
    ]
  }
));
AM.displayName = Km.displayName;
const DM = p.forwardRef(({ className: e, inset: t, ...n }, r) => /* @__PURE__ */ a(
  Um,
  {
    ref: r,
    className: A(
      "px-2 py-1.5 text-sm font-semibold",
      t && "pl-8",
      e
    ),
    ...n
  }
));
DM.displayName = Um.displayName;
const _M = p.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ a(
  Zm,
  {
    ref: n,
    className: A("-mx-1 my-1 h-px bg-f1-background-secondary", e),
    ...t
  }
));
_M.displayName = Zm.displayName;
const IM = ({ item: e }) => {
  const { label: t, ...n } = e, r = /* @__PURE__ */ x(Ce, { children: [
    e.avatar && ll(e.avatar, "xsmall"),
    e.icon && /* @__PURE__ */ a(
      Re,
      {
        icon: e.icon,
        size: "md",
        className: A(
          "text-f1-icon",
          e.critical && "text-f1-icon-critical"
        )
      }
    ),
    /* @__PURE__ */ x("div", { className: "flex flex-col items-start", children: [
      t,
      e.description && /* @__PURE__ */ a(
        "div",
        {
          className: A(
            "font-normal text-f1-foreground-secondary",
            e.critical && "text-f1-foreground-critical"
          ),
          children: e.description
        }
      )
    ] })
  ] }), o = A(
    "flex items-start gap-1.5 w-full",
    e.critical && "text-f1-foreground-critical"
  );
  return /* @__PURE__ */ a(Jm, { asChild: !0, onClick: e.onClick, className: o, children: e.href ? /* @__PURE__ */ a(
    Jt,
    {
      href: e.href,
      className: A(
        o,
        "text-f1-foreground no-underline hover:cursor-pointer"
      ),
      ...n,
      children: r
    }
  ) : /* @__PURE__ */ a("div", { className: o, children: r }) });
};
function Oi({ items: e, children: t }) {
  return /* @__PURE__ */ x(LM, { children: [
    /* @__PURE__ */ a(NM, { asChild: !0, children: t || /* @__PURE__ */ a(
      _t,
      {
        hideLabel: !0,
        icon: j1,
        label: "...",
        round: !0,
        variant: "outline"
      }
    ) }),
    /* @__PURE__ */ a(Qm, { className: "min-w-[var(--radix-dropdown-menu-trigger-width)]", children: /* @__PURE__ */ a("div", { className: "flex flex-col", children: e.map((n, r) => /* @__PURE__ */ a(
      IM,
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
function wd({ item: e, isLast: t }) {
  const { label: n, ...r } = e;
  return /* @__PURE__ */ a(Zp, { children: t ? /* @__PURE__ */ a(qp, { children: e.label }) : /* @__PURE__ */ x(Ce, { children: [
    /* @__PURE__ */ a(
      Xp,
      {
        className: A("max-w-40", e.icon && "pl-0.5"),
        asChild: !0,
        children: /* @__PURE__ */ x(
          Jt,
          {
            ...r,
            className: A("flex items-center gap-1.5", ft()),
            children: [
              e.icon && /* @__PURE__ */ a(Li, { icon: e.icon, size: "sm" }),
              /* @__PURE__ */ a("span", { className: "truncate", children: e.label })
            ]
          }
        )
      }
    ),
    /* @__PURE__ */ a(Ll, { children: /* @__PURE__ */ a(Hr, { className: "h-4 w-4 text-f1-icon-secondary" }) })
  ] }) });
}
function OM({ breadcrumbs: e }) {
  const [t, n] = Ae(2), r = je(null);
  Oe(() => {
    const l = r.current;
    if (!l) return;
    const c = () => {
      if (!r.current || e.length <= 2) {
        n(e.length);
        return;
      }
      const d = r.current.offsetWidth, f = 150, h = 50;
      let g = d - f, m = 1;
      for (let v = e.length - 1; v > 0 && !(g < f); v--)
        g -= f, m++;
      if (m < e.length - 1)
        for (g -= h; g < 0 && m > 1; )
          g += f, m--;
      n(m);
    }, u = new ResizeObserver(() => {
      c();
    });
    return u.observe(l), c(), () => {
      u.disconnect();
    };
  }, [e]);
  const o = e[0], i = e.slice(-t + 1), s = e.slice(1, -t + 1);
  return /* @__PURE__ */ a(Kp, { ref: r, className: "w-full", children: /* @__PURE__ */ x(Yp, { children: [
    /* @__PURE__ */ a(wd, { item: o, isLast: !1 }),
    s.length > 0 && /* @__PURE__ */ x(Ce, { children: [
      /* @__PURE__ */ a(Oi, { items: s, children: /* @__PURE__ */ a("li", { className: "rounded-sm px-1.5 py-0.5 font-medium text-f1-foreground no-underline transition-colors hover:bg-f1-background-secondary", children: "..." }) }),
      /* @__PURE__ */ a(Ll, { children: /* @__PURE__ */ a(Hr, { className: "h-4 w-4 text-f1-icon-secondary" }) })
    ] }),
    i.map((l, c) => /* @__PURE__ */ a(
      wd,
      {
        item: l,
        isLast: c === i.length - 1
      },
      c
    ))
  ] }) });
}
function rP({
  module: e,
  statusTag: t = void 0,
  breadcrumbs: n = [],
  actions: r = []
}) {
  const { sidebarState: o, toggleSidebar: i } = Ti(), s = [
    { label: e.name, href: e.href, icon: e.icon },
    ...n
  ], l = t && Object.keys(t).length !== 0, c = n.length > 0, u = r.length > 0;
  return /* @__PURE__ */ x(
    "div",
    {
      className: A(
        "flex h-16 items-center justify-between px-5 py-4 backdrop-blur-xl xs:px-6",
        c && "border-b border-dashed border-transparent border-b-f1-border"
      ),
      children: [
        /* @__PURE__ */ x("div", { className: "flex flex-grow items-center", children: [
          /* @__PURE__ */ a(Oa, { children: o !== "locked" && /* @__PURE__ */ a(
            xt.div,
            {
              initial: { opacity: 0, width: 0 },
              animate: { opacity: 1, width: "auto" },
              exit: { opacity: 0, width: 0 },
              children: /* @__PURE__ */ a("div", { className: "mr-3", children: /* @__PURE__ */ a(
                _t,
                {
                  variant: "ghost",
                  hideLabel: !0,
                  round: !0,
                  onClick: i,
                  label: "Menu",
                  icon: G1
                }
              ) })
            }
          ) }),
          /* @__PURE__ */ x("div", { className: "flex flex-grow items-center gap-3", children: [
            !c && /* @__PURE__ */ a(Li, { icon: e.icon, size: "lg" }),
            s.length > 1 ? /* @__PURE__ */ a(OM, { breadcrumbs: s }) : /* @__PURE__ */ a("div", { className: "text-xl font-semibold text-f1-foreground", children: e.name })
          ] })
        ] }),
        /* @__PURE__ */ x("div", { className: "flex items-center", children: [
          !c && l && /* @__PURE__ */ a("div", { className: "pe-3", children: /* @__PURE__ */ a(Ni, { text: t.text, variant: t.variant }) }),
          l && u && /* @__PURE__ */ a("div", { className: "right-0 h-4 w-px bg-f1-border-secondary" }),
          u && /* @__PURE__ */ a("div", { className: "items-right flex gap-2 ps-3", children: r.map((d, f) => /* @__PURE__ */ a(VM, { action: d }, f)) })
        ] })
      ]
    }
  );
}
const Cd = Fe(
  "inline-flex aspect-square h-8 items-center justify-center rounded border border-solid border-f1-border bg-f1-background-inverse-secondary px-0 text-f1-foreground hover:border-f1-border-hover"
);
function VM({ action: e }) {
  return "actions" in e ? /* @__PURE__ */ a(Oi, { items: e.actions, children: /* @__PURE__ */ a("button", { title: e.label, className: Cd(), children: /* @__PURE__ */ a(Re, { icon: e.icon, size: "md" }) }) }) : /* @__PURE__ */ a(
    Jt,
    {
      href: e.href,
      title: e.label,
      className: Cd(),
      children: /* @__PURE__ */ a(Re, { icon: e.icon, size: "md" })
    }
  );
}
function FM(e) {
  return e.filter((t) => !!t.title).map(({ title: t, description: n, href: r, onClick: o, target: i }) => ({
    label: t,
    description: n,
    href: r,
    onClick: o ? () => o(void 0) : void 0
  }));
}
function oP({ label: e, options: t, hasNewUpdate: n }) {
  return /* @__PURE__ */ a(
    "div",
    {
      className: "fixed z-10",
      style: {
        bottom: "calc(8px + env(safe-area-inset-bottom))",
        right: "calc(8px + env(safe-area-inset-right))"
      },
      children: /* @__PURE__ */ a(Oi, { items: FM(t), children: /* @__PURE__ */ x(
        "button",
        {
          className: A(
            "relative flex h-6 w-6 items-center justify-center rounded-full bg-f1-background-bold text-f1-foreground-inverse shadow-md transition-all",
            ft()
          ),
          "aria-label": e,
          children: [
            /* @__PURE__ */ a(Re, { icon: K1, size: "sm" }),
            n && /* @__PURE__ */ a("div", { className: "absolute right-0.5 top-0.5 h-1.5 w-1.5 rounded-full bg-f1-background-critical-bold ring-2 ring-f1-background-critical" })
          ]
        }
      ) })
    }
  );
}
function BM({ children: e, header: t }) {
  return /* @__PURE__ */ x("div", { className: "flex w-full flex-col overflow-hidden rounded-xl bg-f1-page shadow", children: [
    t && /* @__PURE__ */ a("div", { className: "flex flex-col", children: t }),
    /* @__PURE__ */ a("div", { className: "isolate flex w-full flex-1 flex-col overflow-auto [&>*]:flex-1", children: e })
  ] });
}
BM.displayName = "Page";
const jM = Fe(
  "pointer-events-none absolute inset-0 h-screen max-h-[1000px] opacity-[0.08]",
  {
    variants: {
      period: {
        morning: "bg-gradient-to-bl from-[#E51943] from-20% via-[#F97316] via-35% to-transparent to-50%",
        afternoon: "bg-gradient-to-bl from-[#5596F6] from-20% via-[#10B881] via-35% to-transparent to-50%",
        evening: "bg-gradient-to-bl from-[#3739A8] from-20% via-[#CB6687] via-35% to-transparent to-50%"
      }
    },
    defaultVariants: {
      period: "morning"
    }
  }
);
function $M({ children: e, header: t, period: n }) {
  return /* @__PURE__ */ x("div", { className: "relative flex w-full flex-col overflow-hidden rounded-xl bg-f1-page shadow", children: [
    /* @__PURE__ */ a("div", { className: jM({ period: n }) }),
    t && /* @__PURE__ */ a("div", { className: "flex flex-col", children: t }),
    /* @__PURE__ */ a("div", { className: "isolate flex w-full flex-1 flex-col overflow-auto [&>*]:flex-1", children: e })
  ] });
}
$M.displayName = "DaytimePage";
function WM({
  companies: e,
  selected: t,
  onChange: n,
  isLoading: r = !1
}) {
  const o = Ct(
    () => e.find((i) => i.id === t) || e[0],
    [e, t]
  );
  return r ? /* @__PURE__ */ x("div", { className: "flex w-fit items-center gap-2 p-1.5", children: [
    /* @__PURE__ */ a(Dt, { className: "size-6" }),
    /* @__PURE__ */ a(Dt, { className: "h-3 w-14" })
  ] }) : e.length === 1 ? /* @__PURE__ */ a("div", { className: "w-fit p-1.5", children: /* @__PURE__ */ a(xd, { company: o }) }) : /* @__PURE__ */ a(
    HM,
    {
      companies: e,
      selected: o,
      onChange: n,
      children: /* @__PURE__ */ a(xd, { company: o })
    }
  );
}
const HM = ({
  companies: e,
  selected: t,
  onChange: n,
  children: r
}) => {
  const [o, i] = Ae(!1), s = Ct(
    () => e.map((l) => ({
      value: l.id,
      label: l.name,
      avatar: {
        type: "company",
        name: l.name,
        src: l.logo,
        "aria-label": `${l.name} logo`
      }
    })),
    [e]
  );
  return /* @__PURE__ */ a(
    i7,
    {
      options: s,
      value: t.id,
      onChange: n,
      placeholder: "Select a company",
      open: o,
      onOpenChange: i,
      children: /* @__PURE__ */ x(
        "div",
        {
          className: A(
            "group flex w-fit max-w-full flex-nowrap items-center justify-center gap-1 truncate rounded p-1.5 text-f1-foreground transition-colors hover:bg-f1-background-hover data-[state=open]:bg-f1-background-hover",
            ft()
          ),
          tabIndex: 0,
          title: t == null ? void 0 : t.name,
          children: [
            r,
            /* @__PURE__ */ a("div", { className: "flex w-5 shrink-0 items-center justify-center", children: /* @__PURE__ */ a("div", { className: "flex h-3 w-3 items-center justify-center rounded-2xs bg-f1-background-secondary transition-all", children: /* @__PURE__ */ a(
              xt.div,
              {
                animate: { rotate: o ? 180 : 0 },
                transition: { duration: 0.2 },
                className: "flex h-3 w-3 items-center justify-center",
                children: /* @__PURE__ */ a(Wr, { className: "h-3 w-3 shrink-0 text-f1-icon-bold" })
              }
            ) }) })
          ]
        }
      )
    }
  );
}, xd = ({
  company: e
}) => {
  var t;
  return /* @__PURE__ */ x(
    "div",
    {
      className: A(
        "flex w-fit min-w-0 max-w-full items-center gap-2 rounded text-lg font-semibold text-f1-foreground transition-colors"
      ),
      title: e == null ? void 0 : e.name,
      children: [
        /* @__PURE__ */ a(
          bi,
          {
            name: (t = e == null ? void 0 : e.name) == null ? void 0 : t[0],
            src: e == null ? void 0 : e.logo,
            size: "xsmall"
          }
        ),
        /* @__PURE__ */ a("div", { className: "min-w-0 flex-1", children: /* @__PURE__ */ a("span", { className: "block truncate", children: e == null ? void 0 : e.name }) })
      ]
    }
  );
};
function UM({ isExpanded: e }) {
  return /* @__PURE__ */ x(
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
            className: A(
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
            className: A(
              "stroke-current transition-all duration-200 ease-out motion-reduce:transition-none",
              e ? "translate-x-0 opacity-100 group-hover:-translate-x-0.5 group-hover:opacity-0" : "-translate-x-0.5 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
            )
          }
        )
      ]
    }
  );
}
function zM() {
  const { sidebarState: e, toggleSidebar: t, isSmallScreen: n } = Ti();
  return /* @__PURE__ */ x(
    Or,
    {
      variant: "ghost",
      size: "md",
      round: !0,
      onClick: t,
      className: "group hover:bg-f1-background-hover",
      title: "Toggle Sidebar",
      children: [
        /* @__PURE__ */ a("div", { className: A("hidden", { flex: !n }), children: /* @__PURE__ */ a(UM, { isExpanded: e === "locked" }) }),
        /* @__PURE__ */ a("div", { className: A("hidden", { flex: n }), children: /* @__PURE__ */ a(Re, { icon: F1, size: "md" }) })
      ]
    }
  );
}
function iP({
  companies: e,
  selected: t,
  onChange: n
}) {
  return /* @__PURE__ */ x("div", { className: "flex h-[72px] items-center justify-between gap-3 px-3", children: [
    /* @__PURE__ */ a(
      WM,
      {
        companies: e,
        selected: t,
        onChange: n
      }
    ),
    /* @__PURE__ */ a(zM, {})
  ] });
}
function GM(e, t = []) {
  let n = [];
  function r(i, s) {
    const l = p.createContext(s), c = n.length;
    n = [...n, s];
    const u = (f) => {
      var w;
      const { scope: h, children: g, ...m } = f, v = ((w = h == null ? void 0 : h[e]) == null ? void 0 : w[c]) || l, y = p.useMemo(() => m, Object.values(m));
      return /* @__PURE__ */ a(v.Provider, { value: y, children: g });
    };
    u.displayName = i + "Provider";
    function d(f, h) {
      var v;
      const g = ((v = h == null ? void 0 : h[e]) == null ? void 0 : v[c]) || l, m = p.useContext(g);
      if (m) return m;
      if (s !== void 0) return s;
      throw new Error(`\`${f}\` must be used within \`${i}\``);
    }
    return [u, d];
  }
  const o = () => {
    const i = n.map((s) => p.createContext(s));
    return function(l) {
      const c = (l == null ? void 0 : l[e]) || i;
      return p.useMemo(
        () => ({ [`__scope${e}`]: { ...l, [e]: c } }),
        [l, c]
      );
    };
  };
  return o.scopeName = e, [r, KM(o, ...t)];
}
function KM(...e) {
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
      return p.useMemo(() => ({ [`__scope${t.scopeName}`]: s }), [s]);
    };
  };
  return n.scopeName = t.scopeName, n;
}
function YM(e, t) {
  return p.useReducer((n, r) => t[n][r] ?? n, e);
}
var eg = (e) => {
  const { present: t, children: n } = e, r = ZM(t), o = typeof n == "function" ? n({ present: r.isPresent }) : p.Children.only(n), i = ve(r.ref, XM(o));
  return typeof n == "function" || r.isPresent ? p.cloneElement(o, { ref: i }) : null;
};
eg.displayName = "Presence";
function ZM(e) {
  const [t, n] = p.useState(), r = p.useRef({}), o = p.useRef(e), i = p.useRef("none"), s = e ? "mounted" : "unmounted", [l, c] = YM(s, {
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
  return p.useEffect(() => {
    const u = yo(r.current);
    i.current = l === "mounted" ? u : "none";
  }, [l]), We(() => {
    const u = r.current, d = o.current;
    if (d !== e) {
      const h = i.current, g = yo(u);
      e ? c("MOUNT") : g === "none" || (u == null ? void 0 : u.display) === "none" ? c("UNMOUNT") : c(d && h !== g ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e;
    }
  }, [e, c]), We(() => {
    if (t) {
      let u;
      const d = t.ownerDocument.defaultView ?? window, f = (g) => {
        const v = yo(r.current).includes(g.animationName);
        if (g.target === t && v && (c("ANIMATION_END"), !o.current)) {
          const y = t.style.animationFillMode;
          t.style.animationFillMode = "forwards", u = d.setTimeout(() => {
            t.style.animationFillMode === "forwards" && (t.style.animationFillMode = y);
          });
        }
      }, h = (g) => {
        g.target === t && (i.current = yo(r.current));
      };
      return t.addEventListener("animationstart", h), t.addEventListener("animationcancel", f), t.addEventListener("animationend", f), () => {
        d.clearTimeout(u), t.removeEventListener("animationstart", h), t.removeEventListener("animationcancel", f), t.removeEventListener("animationend", f);
      };
    } else
      c("ANIMATION_END");
  }, [t, c]), {
    isPresent: ["mounted", "unmountSuspended"].includes(l),
    ref: p.useCallback((u) => {
      u && (r.current = getComputedStyle(u)), n(u);
    }, [])
  };
}
function yo(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function XM(e) {
  var r, o;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var Ol = "Collapsible", [qM, sP] = GM(Ol), [QM, Vl] = qM(Ol), tg = p.forwardRef(
  (e, t) => {
    const {
      __scopeCollapsible: n,
      open: r,
      defaultOpen: o,
      disabled: i,
      onOpenChange: s,
      ...l
    } = e, [c = !1, u] = wt({
      prop: r,
      defaultProp: o,
      onChange: s
    });
    return /* @__PURE__ */ a(
      QM,
      {
        scope: n,
        disabled: i,
        contentId: ct(),
        open: c,
        onOpenToggle: p.useCallback(() => u((d) => !d), [u]),
        children: /* @__PURE__ */ a(
          fe.div,
          {
            "data-state": Bl(c),
            "data-disabled": i ? "" : void 0,
            ...l,
            ref: t
          }
        )
      }
    );
  }
);
tg.displayName = Ol;
var ng = "CollapsibleTrigger", rg = p.forwardRef(
  (e, t) => {
    const { __scopeCollapsible: n, ...r } = e, o = Vl(ng, n);
    return /* @__PURE__ */ a(
      fe.button,
      {
        type: "button",
        "aria-controls": o.contentId,
        "aria-expanded": o.open || !1,
        "data-state": Bl(o.open),
        "data-disabled": o.disabled ? "" : void 0,
        disabled: o.disabled,
        ...r,
        ref: t,
        onClick: ee(e.onClick, o.onOpenToggle)
      }
    );
  }
);
rg.displayName = ng;
var Fl = "CollapsibleContent", og = p.forwardRef(
  (e, t) => {
    const { forceMount: n, ...r } = e, o = Vl(Fl, e.__scopeCollapsible);
    return /* @__PURE__ */ a(eg, { present: n || o.open, children: ({ present: i }) => /* @__PURE__ */ a(JM, { ...r, ref: t, present: i }) });
  }
);
og.displayName = Fl;
var JM = p.forwardRef((e, t) => {
  const { __scopeCollapsible: n, present: r, children: o, ...i } = e, s = Vl(Fl, n), [l, c] = p.useState(r), u = p.useRef(null), d = ve(t, u), f = p.useRef(0), h = f.current, g = p.useRef(0), m = g.current, v = s.open || l, y = p.useRef(v), w = p.useRef();
  return p.useEffect(() => {
    const b = requestAnimationFrame(() => y.current = !1);
    return () => cancelAnimationFrame(b);
  }, []), We(() => {
    const b = u.current;
    if (b) {
      w.current = w.current || {
        transitionDuration: b.style.transitionDuration,
        animationName: b.style.animationName
      }, b.style.transitionDuration = "0s", b.style.animationName = "none";
      const C = b.getBoundingClientRect();
      f.current = C.height, g.current = C.width, y.current || (b.style.transitionDuration = w.current.transitionDuration, b.style.animationName = w.current.animationName), c(r);
    }
  }, [s.open, r]), /* @__PURE__ */ a(
    fe.div,
    {
      "data-state": Bl(s.open),
      "data-disabled": s.disabled ? "" : void 0,
      id: s.contentId,
      hidden: !v,
      ...i,
      ref: d,
      style: {
        "--radix-collapsible-content-height": h ? `${h}px` : void 0,
        "--radix-collapsible-content-width": m ? `${m}px` : void 0,
        ...e.style
      },
      children: v && o
    }
  );
});
function Bl(e) {
  return e ? "open" : "closed";
}
var eE = tg;
const tE = eE, nE = rg, rE = og, oE = ({
  item: e,
  active: t
}) => /* @__PURE__ */ x("div", { className: "flex w-full items-center justify-between", children: [
  /* @__PURE__ */ x("div", { className: "flex items-center gap-1.5 font-medium text-f1-foreground", children: [
    /* @__PURE__ */ a(
      Re,
      {
        icon: e.icon,
        size: "md",
        className: A(
          "transition-colors",
          t ? "text-f1-icon-bold" : "text-f1-icon"
        )
      }
    ),
    /* @__PURE__ */ a("span", { children: e.label })
  ] }),
  e.badge && /* @__PURE__ */ a(vl, { value: e.badge, size: "sm", type: "bold" })
] }), kd = ({ item: e }) => {
  const { isActive: t } = la(), { label: n, ...r } = e, o = t(r.href, { exact: r.exactMatch });
  return /* @__PURE__ */ a(
    Jt,
    {
      ...r,
      className: A(
        "flex cursor-pointer items-center rounded py-1.5 pl-1.5 pr-2 no-underline transition-colors",
        ft(),
        o ? "bg-f1-background-secondary text-f1-foreground" : "hover:bg-f1-background-secondary"
      ),
      children: /* @__PURE__ */ a(oE, { item: e, active: o })
    }
  );
}, iE = ({ category: e }) => {
  const [t, n] = le.useState(e.isOpen !== !1), r = ti();
  return e.isRoot ? /* @__PURE__ */ a("div", { className: "flex flex-col gap-1 pb-3", children: e.items.map((o, i) => /* @__PURE__ */ a(kd, { item: o }, i)) }) : /* @__PURE__ */ x(tE, { open: t, onOpenChange: n, children: [
    /* @__PURE__ */ x(
      nE,
      {
        className: A(
          "flex w-full cursor-pointer items-center justify-between border-t border-dashed border-transparent border-t-f1-border px-1.5 pb-2 pt-4 text-sm font-semibold uppercase tracking-wide text-f1-foreground-secondary",
          ft("focus-visible:rounded-md")
        ),
        children: [
          e.title,
          /* @__PURE__ */ a(
            xt.div,
            {
              initial: !1,
              animate: { rotate: t ? 0 : -90 },
              transition: { duration: r ? 0 : 0.1 },
              children: /* @__PURE__ */ a(
                Re,
                {
                  icon: Wr,
                  size: "sm",
                  className: "text-f1-icon-secondary"
                }
              )
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ a(
      rE,
      {
        forceMount: !0,
        className: "flex flex-col gap-1 overflow-hidden pb-2",
        children: /* @__PURE__ */ a(
          xt.div,
          {
            initial: { height: 0, opacity: 0 },
            animate: {
              height: t ? "auto" : 0,
              opacity: t ? 1 : 0,
              visibility: t ? "visible" : "hidden",
              pointerEvents: t ? "auto" : "none"
            },
            transition: {
              duration: r ? 0 : 0.15,
              ease: [0.165, 0.84, 0.44, 1]
            },
            children: /* @__PURE__ */ a("div", { className: "flex flex-col gap-1 pb-3", children: e.items.map((o, i) => /* @__PURE__ */ a(kd, { item: o }, i)) })
          }
        )
      }
    )
  ] });
};
function aP({ tree: e }) {
  return /* @__PURE__ */ a("div", { className: "w-full bg-transparent px-3", children: e.map((t, n) => /* @__PURE__ */ a(iE, { category: t }, n)) });
}
function lP({
  onClick: e,
  placeholder: t,
  shortcut: n = ["cmd", "k"],
  ...r
}) {
  return /* @__PURE__ */ a("div", { className: "px-3", children: /* @__PURE__ */ x(
    "button",
    {
      onClick: e,
      className: A(
        "mb-[calc(0.75rem-1px)] flex w-full cursor-pointer items-center justify-between rounded bg-f1-background-inverse-secondary p-1.5 text-f1-foreground-secondary ring-1 ring-inset ring-f1-border-secondary transition-all hover:ring-f1-border-hover",
        ft()
      ),
      type: "button",
      ...r,
      children: [
        /* @__PURE__ */ x("div", { className: "flex items-center gap-1", children: [
          /* @__PURE__ */ a(Re, { icon: Z1, size: "md" }),
          /* @__PURE__ */ a("span", { children: t })
        ] }),
        /* @__PURE__ */ a("div", { className: "hidden xs:block", children: /* @__PURE__ */ a(z7, { keys: n }) })
      ]
    }
  ) });
}
function cP({ header: e, body: t, footer: n }) {
  const { sidebarState: r, isSmallScreen: o } = Ti(), i = ti(), [s, l] = Ae(!1), c = (d) => {
    l(d.currentTarget.scrollTop > 0);
  }, u = {
    x: {
      ease: r !== "locked" ? o ? [0.25, 0.46, 0.45, 0.94] : [0.175, 0.885, 0.32, 1.1] : [0, 0, 0.58, 1],
      duration: i ? 0 : r !== "locked" && !o ? 0.3 : 0.2
    },
    top: { duration: i ? 0 : 0.1 },
    left: { duration: i ? 0 : 0.1 },
    default: { duration: i ? 0 : 0.2 }
  };
  return /* @__PURE__ */ x(
    xt.div,
    {
      initial: !1,
      className: A(
        "absolute bottom-0 left-0 top-0 z-10 flex w-[240px] flex-col transition-[background-color]",
        r === "locked" ? "h-screen" : A(
          "border-solid border-f1-border-secondary shadow-lg backdrop-blur-2xl",
          o ? "h-screen border-y-transparent border-l-transparent bg-f1-background/90" : "h-[calc(100vh-16px)] bg-f1-background/60"
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
      transition: u,
      children: [
        /* @__PURE__ */ a("div", { className: "flex-shrink-0", children: e }),
        t && /* @__PURE__ */ x("div", { className: "relative flex-grow overflow-y-hidden", children: [
          /* @__PURE__ */ a(Oa, { children: s && /* @__PURE__ */ a(
            xt.div,
            {
              initial: { opacity: 0 },
              animate: { opacity: 0.5 },
              exit: { opacity: 0 },
              transition: { duration: 0.2, ease: "easeOut" },
              className: "pointer-events-none absolute inset-x-0 top-0 z-10 h-3 bg-gradient-to-b from-f1-background-secondary to-transparent after:absolute after:inset-x-0 after:top-0 after:h-px after:bg-f1-background-bold after:opacity-[0.04] after:content-['']"
            }
          ) }),
          /* @__PURE__ */ a(
            "div",
            {
              className: "h-full overflow-y-auto",
              onScroll: c,
              onTouchMove: c,
              children: t
            }
          )
        ] }),
        /* @__PURE__ */ a("div", { className: "flex-shrink-0", children: n })
      ]
    }
  );
}
function uP({ firstName: e, lastName: t, avatarUrl: n, options: r }) {
  return /* @__PURE__ */ a("div", { className: "mx-3 border-t border-dashed border-transparent border-t-f1-border pb-3 pt-4", children: /* @__PURE__ */ a(Oi, { items: r, children: /* @__PURE__ */ x(
    "button",
    {
      className: A(
        "flex w-full items-center gap-1.5 rounded p-1.5 font-medium transition-colors hover:bg-f1-background-secondary data-[state=open]:bg-f1-background-secondary",
        ft()
      ),
      children: [
        /* @__PURE__ */ a(
          Yr,
          {
            src: n,
            firstName: e,
            lastName: t,
            size: "xsmall"
          }
        ),
        /* @__PURE__ */ x("span", { className: "min-w-0 truncate text-f1-foreground", children: [
          e,
          " ",
          t
        ] })
      ]
    }
  ) }) });
}
var nr = "NavigationMenu", [jl, ig, sE] = Zr(nr), [ta, aE, lE] = Zr(nr), [$l, dP] = Vt(
  nr,
  [sE, lE]
), [cE, mt] = $l(nr), [uE, dE] = $l(nr), sg = p.forwardRef(
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
    } = e, [f, h] = p.useState(null), g = ve(t, (D) => h(D)), m = er(u), v = p.useRef(0), y = p.useRef(0), w = p.useRef(0), [b, C] = p.useState(!0), [E = "", L] = wt({
      prop: r,
      onChange: (D) => {
        const H = D !== "", J = l > 0;
        H ? (window.clearTimeout(w.current), J && C(!1)) : (window.clearTimeout(w.current), w.current = window.setTimeout(
          () => C(!0),
          l
        )), o == null || o(D);
      },
      defaultProp: i
    }), _ = p.useCallback(() => {
      window.clearTimeout(y.current), y.current = window.setTimeout(() => L(""), 150);
    }, [L]), F = p.useCallback(
      (D) => {
        window.clearTimeout(y.current), L(D);
      },
      [L]
    ), R = p.useCallback(
      (D) => {
        E === D ? window.clearTimeout(y.current) : v.current = window.setTimeout(() => {
          window.clearTimeout(y.current), L(D);
        }, s);
      },
      [E, L, s]
    );
    return p.useEffect(() => () => {
      window.clearTimeout(v.current), window.clearTimeout(y.current), window.clearTimeout(w.current);
    }, []), /* @__PURE__ */ a(
      lg,
      {
        scope: n,
        isRootMenu: !0,
        value: E,
        dir: m,
        orientation: c,
        rootNavigationMenu: f,
        onTriggerEnter: (D) => {
          window.clearTimeout(v.current), b ? R(D) : F(D);
        },
        onTriggerLeave: () => {
          window.clearTimeout(v.current), _();
        },
        onContentEnter: () => window.clearTimeout(y.current),
        onContentLeave: _,
        onItemSelect: (D) => {
          L((H) => H === D ? "" : D);
        },
        onItemDismiss: () => L(""),
        children: /* @__PURE__ */ a(
          fe.nav,
          {
            "aria-label": "Main",
            "data-orientation": c,
            dir: m,
            ...d,
            ref: g
          }
        )
      }
    );
  }
);
sg.displayName = nr;
var ag = "NavigationMenuSub", fE = p.forwardRef(
  (e, t) => {
    const {
      __scopeNavigationMenu: n,
      value: r,
      onValueChange: o,
      defaultValue: i,
      orientation: s = "horizontal",
      ...l
    } = e, c = mt(ag, n), [u = "", d] = wt({
      prop: r,
      onChange: o,
      defaultProp: i
    });
    return /* @__PURE__ */ a(
      lg,
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
        children: /* @__PURE__ */ a(fe.div, { "data-orientation": s, ...l, ref: t })
      }
    );
  }
);
fE.displayName = ag;
var lg = (e) => {
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
    onContentEnter: h,
    onContentLeave: g
  } = e, [m, v] = p.useState(null), [y, w] = p.useState(/* @__PURE__ */ new Map()), [b, C] = p.useState(null);
  return /* @__PURE__ */ a(
    cE,
    {
      scope: t,
      isRootMenu: n,
      rootNavigationMenu: r,
      value: l,
      previousValue: Rh(l),
      baseId: ct(),
      dir: o,
      orientation: i,
      viewport: m,
      onViewportChange: v,
      indicatorTrack: b,
      onIndicatorTrackChange: C,
      onTriggerEnter: Ie(d),
      onTriggerLeave: Ie(f),
      onContentEnter: Ie(h),
      onContentLeave: Ie(g),
      onItemSelect: Ie(c),
      onItemDismiss: Ie(u),
      onViewportContentChange: p.useCallback((E, L) => {
        w((_) => (_.set(E, L), new Map(_)));
      }, []),
      onViewportContentRemove: p.useCallback((E) => {
        w((L) => L.has(E) ? (L.delete(E), new Map(L)) : L);
      }, []),
      children: /* @__PURE__ */ a(jl.Provider, { scope: t, children: /* @__PURE__ */ a(uE, { scope: t, items: y, children: s }) })
    }
  );
}, cg = "NavigationMenuList", ug = p.forwardRef(
  (e, t) => {
    const { __scopeNavigationMenu: n, ...r } = e, o = mt(cg, n), i = /* @__PURE__ */ a(fe.ul, { "data-orientation": o.orientation, ...r, ref: t });
    return /* @__PURE__ */ a(fe.div, { style: { position: "relative" }, ref: o.onIndicatorTrackChange, children: /* @__PURE__ */ a(jl.Slot, { scope: n, children: o.isRootMenu ? /* @__PURE__ */ a(gg, { asChild: !0, children: i }) : i }) });
  }
);
ug.displayName = cg;
var dg = "NavigationMenuItem", [hE, fg] = $l(dg), hg = p.forwardRef(
  (e, t) => {
    const { __scopeNavigationMenu: n, value: r, ...o } = e, i = ct(), s = r || i || "LEGACY_REACT_AUTO_VALUE", l = p.useRef(null), c = p.useRef(null), u = p.useRef(null), d = p.useRef(() => {
    }), f = p.useRef(!1), h = p.useCallback((m = "start") => {
      if (l.current) {
        d.current();
        const v = ra(l.current);
        v.length && Ul(m === "start" ? v : v.reverse());
      }
    }, []), g = p.useCallback(() => {
      if (l.current) {
        const m = ra(l.current);
        m.length && (d.current = SE(m));
      }
    }, []);
    return /* @__PURE__ */ a(
      hE,
      {
        scope: n,
        value: s,
        triggerRef: c,
        contentRef: l,
        focusProxyRef: u,
        wasEscapeCloseRef: f,
        onEntryKeyDown: h,
        onFocusProxyEnter: h,
        onRootContentClose: g,
        onContentFocusOutside: g,
        children: /* @__PURE__ */ a(fe.li, { ...o, ref: t })
      }
    );
  }
);
hg.displayName = dg;
var na = "NavigationMenuTrigger", pE = p.forwardRef((e, t) => {
  const { __scopeNavigationMenu: n, disabled: r, ...o } = e, i = mt(na, e.__scopeNavigationMenu), s = fg(na, e.__scopeNavigationMenu), l = p.useRef(null), c = ve(l, s.triggerRef, t), u = yg(i.baseId, s.value), d = bg(i.baseId, s.value), f = p.useRef(!1), h = p.useRef(!1), g = s.value === i.value;
  return /* @__PURE__ */ x(Ce, { children: [
    /* @__PURE__ */ a(jl.ItemSlot, { scope: n, value: s.value, children: /* @__PURE__ */ a(vg, { asChild: !0, children: /* @__PURE__ */ a(
      fe.button,
      {
        id: u,
        disabled: r,
        "data-disabled": r ? "" : void 0,
        "data-state": zl(g),
        "aria-expanded": g,
        "aria-controls": d,
        ...o,
        ref: c,
        onPointerEnter: ee(e.onPointerEnter, () => {
          h.current = !1, s.wasEscapeCloseRef.current = !1;
        }),
        onPointerMove: ee(
          e.onPointerMove,
          Zo(() => {
            r || h.current || s.wasEscapeCloseRef.current || f.current || (i.onTriggerEnter(s.value), f.current = !0);
          })
        ),
        onPointerLeave: ee(
          e.onPointerLeave,
          Zo(() => {
            r || (i.onTriggerLeave(), f.current = !1);
          })
        ),
        onClick: ee(e.onClick, () => {
          i.onItemSelect(s.value), h.current = g;
        }),
        onKeyDown: ee(e.onKeyDown, (m) => {
          const y = { horizontal: "ArrowDown", vertical: i.dir === "rtl" ? "ArrowLeft" : "ArrowRight" }[i.orientation];
          g && m.key === y && (s.onEntryKeyDown(), m.preventDefault());
        })
      }
    ) }) }),
    g && /* @__PURE__ */ x(Ce, { children: [
      /* @__PURE__ */ a(
        Y0,
        {
          "aria-hidden": !0,
          tabIndex: 0,
          ref: s.focusProxyRef,
          onFocus: (m) => {
            const v = s.contentRef.current, y = m.relatedTarget, w = y === l.current, b = v == null ? void 0 : v.contains(y);
            (w || !b) && s.onFocusProxyEnter(w ? "start" : "end");
          }
        }
      ),
      i.viewport && /* @__PURE__ */ a("span", { "aria-owns": d })
    ] })
  ] });
});
pE.displayName = na;
var mE = "NavigationMenuLink", Sd = "navigationMenu.linkSelect", pg = p.forwardRef(
  (e, t) => {
    const { __scopeNavigationMenu: n, active: r, onSelect: o, ...i } = e;
    return /* @__PURE__ */ a(vg, { asChild: !0, children: /* @__PURE__ */ a(
      fe.a,
      {
        "data-active": r ? "" : void 0,
        "aria-current": r ? "page" : void 0,
        ...i,
        ref: t,
        onClick: ee(
          e.onClick,
          (s) => {
            const l = s.target, c = new CustomEvent(Sd, {
              bubbles: !0,
              cancelable: !0
            });
            if (l.addEventListener(Sd, (u) => o == null ? void 0 : o(u), { once: !0 }), Ms(l, c), !c.defaultPrevented && !s.metaKey) {
              const u = new CustomEvent(Lo, {
                bubbles: !0,
                cancelable: !0
              });
              Ms(l, u);
            }
          },
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
);
pg.displayName = mE;
var Wl = "NavigationMenuIndicator", gE = p.forwardRef((e, t) => {
  const { forceMount: n, ...r } = e, o = mt(Wl, e.__scopeNavigationMenu), i = !!o.value;
  return o.indicatorTrack ? $d.createPortal(
    /* @__PURE__ */ a(Xe, { present: n || i, children: /* @__PURE__ */ a(vE, { ...r, ref: t }) }),
    o.indicatorTrack
  ) : null;
});
gE.displayName = Wl;
var vE = p.forwardRef((e, t) => {
  const { __scopeNavigationMenu: n, ...r } = e, o = mt(Wl, n), i = ig(n), [s, l] = p.useState(
    null
  ), [c, u] = p.useState(null), d = o.orientation === "horizontal", f = !!o.value;
  p.useEffect(() => {
    var v;
    const m = (v = i().find((y) => y.value === o.value)) == null ? void 0 : v.ref.current;
    m && l(m);
  }, [i, o.value]);
  const h = () => {
    s && u({
      size: d ? s.offsetWidth : s.offsetHeight,
      offset: d ? s.offsetLeft : s.offsetTop
    });
  };
  return oa(s, h), oa(o.indicatorTrack, h), c ? /* @__PURE__ */ a(
    fe.div,
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
}), qn = "NavigationMenuContent", yE = p.forwardRef((e, t) => {
  const { forceMount: n, ...r } = e, o = mt(qn, e.__scopeNavigationMenu), i = fg(qn, e.__scopeNavigationMenu), s = ve(i.contentRef, t), l = i.value === o.value, c = {
    value: i.value,
    triggerRef: i.triggerRef,
    focusProxyRef: i.focusProxyRef,
    wasEscapeCloseRef: i.wasEscapeCloseRef,
    onContentFocusOutside: i.onContentFocusOutside,
    onRootContentClose: i.onRootContentClose,
    ...r
  };
  return o.viewport ? /* @__PURE__ */ a(bE, { forceMount: n, ...c, ref: s }) : /* @__PURE__ */ a(Xe, { present: n || l, children: /* @__PURE__ */ a(
    mg,
    {
      "data-state": zl(l),
      ...c,
      ref: s,
      onPointerEnter: ee(e.onPointerEnter, o.onContentEnter),
      onPointerLeave: ee(
        e.onPointerLeave,
        Zo(o.onContentLeave)
      ),
      style: {
        // Prevent interaction when animating out
        pointerEvents: !l && o.isRootMenu ? "none" : void 0,
        ...c.style
      }
    }
  ) });
});
yE.displayName = qn;
var bE = p.forwardRef((e, t) => {
  const n = mt(qn, e.__scopeNavigationMenu), { onViewportContentChange: r, onViewportContentRemove: o } = n;
  return We(() => {
    r(e.value, {
      ref: t,
      ...e
    });
  }, [e, t, r]), We(() => () => o(e.value), [e.value, o]), null;
}), Lo = "navigationMenu.rootContentDismiss", mg = p.forwardRef((e, t) => {
  const {
    __scopeNavigationMenu: n,
    value: r,
    triggerRef: o,
    focusProxyRef: i,
    wasEscapeCloseRef: s,
    onRootContentClose: l,
    onContentFocusOutside: c,
    ...u
  } = e, d = mt(qn, n), f = p.useRef(null), h = ve(f, t), g = yg(d.baseId, r), m = bg(d.baseId, r), v = ig(n), y = p.useRef(null), { onItemDismiss: w } = d;
  p.useEffect(() => {
    const C = f.current;
    if (d.isRootMenu && C) {
      const E = () => {
        var L;
        w(), l(), C.contains(document.activeElement) && ((L = o.current) == null || L.focus());
      };
      return C.addEventListener(Lo, E), () => C.removeEventListener(Lo, E);
    }
  }, [d.isRootMenu, e.value, o, w, l]);
  const b = p.useMemo(() => {
    const E = v().map((H) => H.value);
    d.dir === "rtl" && E.reverse();
    const L = E.indexOf(d.value), _ = E.indexOf(d.previousValue), F = r === d.value, R = _ === E.indexOf(r);
    if (!F && !R) return y.current;
    const D = (() => {
      if (L !== _) {
        if (F && _ !== -1) return L > _ ? "from-end" : "from-start";
        if (R && L !== -1) return L > _ ? "to-start" : "to-end";
      }
      return null;
    })();
    return y.current = D, D;
  }, [d.previousValue, d.value, d.dir, v, r]);
  return /* @__PURE__ */ a(gg, { asChild: !0, children: /* @__PURE__ */ a(
    ei,
    {
      id: m,
      "aria-labelledby": g,
      "data-motion": b,
      "data-orientation": d.orientation,
      ...u,
      ref: h,
      disableOutsidePointerEvents: !1,
      onDismiss: () => {
        var E;
        const C = new Event(Lo, {
          bubbles: !0,
          cancelable: !0
        });
        (E = f.current) == null || E.dispatchEvent(C);
      },
      onFocusOutside: ee(e.onFocusOutside, (C) => {
        var L;
        c();
        const E = C.target;
        (L = d.rootNavigationMenu) != null && L.contains(E) && C.preventDefault();
      }),
      onPointerDownOutside: ee(e.onPointerDownOutside, (C) => {
        var F;
        const E = C.target, L = v().some((R) => {
          var D;
          return (D = R.ref.current) == null ? void 0 : D.contains(E);
        }), _ = d.isRootMenu && ((F = d.viewport) == null ? void 0 : F.contains(E));
        (L || _ || !d.isRootMenu) && C.preventDefault();
      }),
      onKeyDown: ee(e.onKeyDown, (C) => {
        var _;
        const E = C.altKey || C.ctrlKey || C.metaKey;
        if (C.key === "Tab" && !E) {
          const F = ra(C.currentTarget), R = document.activeElement, D = F.findIndex((K) => K === R), J = C.shiftKey ? F.slice(0, D).reverse() : F.slice(D + 1, F.length);
          Ul(J) ? C.preventDefault() : (_ = i.current) == null || _.focus();
        }
      }),
      onEscapeKeyDown: ee(e.onEscapeKeyDown, (C) => {
        s.current = !0;
      })
    }
  ) });
}), Hl = "NavigationMenuViewport", wE = p.forwardRef((e, t) => {
  const { forceMount: n, ...r } = e, i = !!mt(Hl, e.__scopeNavigationMenu).value;
  return /* @__PURE__ */ a(Xe, { present: n || i, children: /* @__PURE__ */ a(CE, { ...r, ref: t }) });
});
wE.displayName = Hl;
var CE = p.forwardRef((e, t) => {
  const { __scopeNavigationMenu: n, children: r, ...o } = e, i = mt(Hl, n), s = ve(t, i.onViewportChange), l = dE(
    qn,
    e.__scopeNavigationMenu
  ), [c, u] = p.useState(null), [d, f] = p.useState(null), h = c ? (c == null ? void 0 : c.width) + "px" : void 0, g = c ? (c == null ? void 0 : c.height) + "px" : void 0, m = !!i.value, v = m ? i.value : i.previousValue;
  return oa(d, () => {
    d && u({ width: d.offsetWidth, height: d.offsetHeight });
  }), /* @__PURE__ */ a(
    fe.div,
    {
      "data-state": zl(m),
      "data-orientation": i.orientation,
      ...o,
      ref: s,
      style: {
        // Prevent interaction when animating out
        pointerEvents: !m && i.isRootMenu ? "none" : void 0,
        "--radix-navigation-menu-viewport-width": h,
        "--radix-navigation-menu-viewport-height": g,
        ...o.style
      },
      onPointerEnter: ee(e.onPointerEnter, i.onContentEnter),
      onPointerLeave: ee(e.onPointerLeave, Zo(i.onContentLeave)),
      children: Array.from(l.items).map(([w, { ref: b, forceMount: C, ...E }]) => {
        const L = v === w;
        return /* @__PURE__ */ a(Xe, { present: C || L, children: /* @__PURE__ */ a(
          mg,
          {
            ...E,
            ref: ca(b, (_) => {
              L && _ && f(_);
            })
          }
        ) }, w);
      })
    }
  );
}), xE = "FocusGroup", gg = p.forwardRef(
  (e, t) => {
    const { __scopeNavigationMenu: n, ...r } = e, o = mt(xE, n);
    return /* @__PURE__ */ a(ta.Provider, { scope: n, children: /* @__PURE__ */ a(ta.Slot, { scope: n, children: /* @__PURE__ */ a(fe.div, { dir: o.dir, ...r, ref: t }) }) });
  }
), Md = ["ArrowRight", "ArrowLeft", "ArrowUp", "ArrowDown"], kE = "FocusGroupItem", vg = p.forwardRef(
  (e, t) => {
    const { __scopeNavigationMenu: n, ...r } = e, o = aE(n), i = mt(kE, n);
    return /* @__PURE__ */ a(ta.ItemSlot, { scope: n, children: /* @__PURE__ */ a(
      fe.button,
      {
        ...r,
        ref: t,
        onKeyDown: ee(e.onKeyDown, (s) => {
          if (["Home", "End", ...Md].includes(s.key)) {
            let c = o().map((f) => f.ref.current);
            if ([i.dir === "rtl" ? "ArrowRight" : "ArrowLeft", "ArrowUp", "End"].includes(s.key) && c.reverse(), Md.includes(s.key)) {
              const f = c.indexOf(s.currentTarget);
              c = c.slice(f + 1);
            }
            setTimeout(() => Ul(c)), s.preventDefault();
          }
        })
      }
    ) });
  }
);
function ra(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => {
      const o = r.tagName === "INPUT" && r.type === "hidden";
      return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function Ul(e) {
  const t = document.activeElement;
  return e.some((n) => n === t ? !0 : (n.focus(), document.activeElement !== t));
}
function SE(e) {
  return e.forEach((t) => {
    t.dataset.tabindex = t.getAttribute("tabindex") || "", t.setAttribute("tabindex", "-1");
  }), () => {
    e.forEach((t) => {
      const n = t.dataset.tabindex;
      t.setAttribute("tabindex", n);
    });
  };
}
function oa(e, t) {
  const n = Ie(t);
  We(() => {
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
function zl(e) {
  return e ? "open" : "closed";
}
function yg(e, t) {
  return `${e}-trigger-${t}`;
}
function bg(e, t) {
  return `${e}-content-${t}`;
}
function Zo(e) {
  return (t) => t.pointerType === "mouse" ? e(t) : void 0;
}
var ME = sg, EE = ug, LE = hg, NE = pg;
function PE(e, t) {
  const { asChild: n, children: r } = e;
  if (!n)
    return typeof t == "function" ? t(r) : t;
  const o = p.Children.only(r);
  return p.cloneElement(o, {
    children: typeof t == "function" ? t(o.props.children) : t
  });
}
const TE = Fe(
  "relative flex items-center justify-start gap-1 overflow-x-auto whitespace-nowrap px-6 py-3 [scrollbar-width:none] before:absolute before:inset-x-0 before:bottom-0 before:h-px before:bg-f1-border-secondary before:content-[''] [&::-webkit-scrollbar]:hidden",
  {
    variants: {
      secondary: {
        true: "bg-f1-foreground/[.02] dark:bg-f1-foreground/[.02]",
        false: "bg-f1-background-transparent pt-1"
      }
    },
    defaultVariants: {
      secondary: !1
    }
  }
), Gl = p.forwardRef(({ className: e, children: t, secondary: n, ...r }, o) => {
  const i = ni();
  return /* @__PURE__ */ a(
    ME,
    {
      ref: o,
      ...r,
      asChild: !1,
      children: /* @__PURE__ */ a(lb, { id: i, children: /* @__PURE__ */ a(
        EE,
        {
          className: A(TE({ secondary: n }), e),
          children: t
        }
      ) })
    }
  );
});
Gl.displayName = "TabNavigation";
const RE = Fe(
  "flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1.5 font-medium transition-all",
  {
    variants: {
      secondary: {
        true: "group-hover:ring-f1-border group-data-[active=true]:bg-f1-background-inverse-secondary group-data-[active=true]:text-f1-foreground group-data-[active=true]:ring-f1-border",
        false: "bg-f1-background-transparent group-hover:bg-f1-background-tertiary group-hover:text-f1-foreground group-data-[active=true]:bg-f1-background-tertiary group-data-[active=true]:text-f1-foreground"
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
), AE = p.forwardRef(function({ asChild: t, disabled: n, active: r, className: o, children: i, secondary: s, ...l }, c) {
  return /* @__PURE__ */ a(LE, { className: "flex", children: /* @__PURE__ */ a(
    NE,
    {
      "data-active": r ? "true" : void 0,
      "aria-disabled": n || void 0,
      className: A(
        "group relative flex shrink-0 select-none items-center justify-center rounded-md no-underline focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-f1-ring focus-visible:ring-offset-1",
        n ? "pointer-events-none" : ""
      ),
      ref: c,
      onSelect: () => {
      },
      asChild: t,
      ...l,
      children: PE({ asChild: t, children: i }, (u) => /* @__PURE__ */ x(
        "span",
        {
          className: A(
            "text-f1-foreground-secondary ring-1 ring-inset ring-transparent",
            RE({ secondary: s, disabled: n }),
            o
          ),
          children: [
            u,
            r && !s && /* @__PURE__ */ a(
              xt.div,
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
  ) });
}), DE = ({
  className: e
}) => /* @__PURE__ */ a("li", { className: "list-none", children: /* @__PURE__ */ a(
  Dt,
  {
    className: A(
      "mr-4 w-20 rounded-md py-1.5 ring-1 ring-inset ring-transparent",
      e
    ),
    children: " "
  }
) }), hr = pt(
  AE,
  DE
), _E = ({ tabs: e, secondary: t = !1 }) => {
  const { isActive: n } = la(), o = [...e].sort((i, s) => i.index ? 1 : s.index ? -1 : 0).find((i) => n(i.href));
  return /* @__PURE__ */ a(
    Gl,
    {
      secondary: t,
      asChild: !0,
      "aria-label": t ? "primary-navigation" : "secondary-navigation",
      children: e.map(({ label: i, ...s }, l) => /* @__PURE__ */ a(
        hr,
        {
          active: (o == null ? void 0 : o.href) === s.href,
          href: s.href,
          secondary: t,
          asChild: !0,
          children: /* @__PURE__ */ a(Jt, { role: "link", ...s, children: i })
        },
        l
      ))
    }
  );
}, IE = ({
  secondary: e
}) => /* @__PURE__ */ x(
  Gl,
  {
    "aria-label": e ? "Secondary empty nav" : "Main empty nav",
    secondary: e,
    "aria-busy": "true",
    "aria-live": "polite",
    children: [
      /* @__PURE__ */ a(hr.Skeleton, { className: "w-24" }),
      /* @__PURE__ */ a(hr.Skeleton, { className: "w-20" }),
      /* @__PURE__ */ a(hr.Skeleton, { className: "w-28" }),
      /* @__PURE__ */ a(hr.Skeleton, { className: "w-20" })
    ]
  }
), fP = pt(_E, IE);
var Kl = "Dialog", [wg, hP] = Vt(Kl), [OE, Et] = wg(Kl), Cg = (e) => {
  const {
    __scopeDialog: t,
    children: n,
    open: r,
    defaultOpen: o,
    onOpenChange: i,
    modal: s = !0
  } = e, l = p.useRef(null), c = p.useRef(null), [u = !1, d] = wt({
    prop: r,
    defaultProp: o,
    onChange: i
  });
  return /* @__PURE__ */ a(
    OE,
    {
      scope: t,
      triggerRef: l,
      contentRef: c,
      contentId: ct(),
      titleId: ct(),
      descriptionId: ct(),
      open: u,
      onOpenChange: d,
      onOpenToggle: p.useCallback(() => d((f) => !f), [d]),
      modal: s,
      children: n
    }
  );
};
Cg.displayName = Kl;
var xg = "DialogTrigger", VE = p.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = Et(xg, n), i = ve(t, o.triggerRef);
    return /* @__PURE__ */ a(
      fe.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": o.open,
        "aria-controls": o.contentId,
        "data-state": Xl(o.open),
        ...r,
        ref: i,
        onClick: ee(e.onClick, o.onOpenToggle)
      }
    );
  }
);
VE.displayName = xg;
var Yl = "DialogPortal", [FE, kg] = wg(Yl, {
  forceMount: void 0
}), Sg = (e) => {
  const { __scopeDialog: t, forceMount: n, children: r, container: o } = e, i = Et(Yl, t);
  return /* @__PURE__ */ a(FE, { scope: t, forceMount: n, children: p.Children.map(r, (s) => /* @__PURE__ */ a(Xe, { present: n || i.open, children: /* @__PURE__ */ a(oi, { asChild: !0, container: o, children: s }) })) });
};
Sg.displayName = Yl;
var Xo = "DialogOverlay", Mg = p.forwardRef(
  (e, t) => {
    const n = kg(Xo, e.__scopeDialog), { forceMount: r = n.forceMount, ...o } = e, i = Et(Xo, e.__scopeDialog);
    return i.modal ? /* @__PURE__ */ a(Xe, { present: r || i.open, children: /* @__PURE__ */ a(BE, { ...o, ref: t }) }) : null;
  }
);
Mg.displayName = Xo;
var BE = p.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = Et(Xo, n);
    return (
      // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
      // ie. when `Overlay` and `Content` are siblings
      /* @__PURE__ */ a(xi, { as: Un, allowPinchZoom: !0, shards: [o.contentRef], children: /* @__PURE__ */ a(
        fe.div,
        {
          "data-state": Xl(o.open),
          ...r,
          ref: t,
          style: { pointerEvents: "auto", ...r.style }
        }
      ) })
    );
  }
), kn = "DialogContent", Eg = p.forwardRef(
  (e, t) => {
    const n = kg(kn, e.__scopeDialog), { forceMount: r = n.forceMount, ...o } = e, i = Et(kn, e.__scopeDialog);
    return /* @__PURE__ */ a(Xe, { present: r || i.open, children: i.modal ? /* @__PURE__ */ a(jE, { ...o, ref: t }) : /* @__PURE__ */ a($E, { ...o, ref: t }) });
  }
);
Eg.displayName = kn;
var jE = p.forwardRef(
  (e, t) => {
    const n = Et(kn, e.__scopeDialog), r = p.useRef(null), o = ve(t, n.contentRef, r);
    return p.useEffect(() => {
      const i = r.current;
      if (i) return ul(i);
    }, []), /* @__PURE__ */ a(
      Lg,
      {
        ...e,
        ref: o,
        trapFocus: n.open,
        disableOutsidePointerEvents: !0,
        onCloseAutoFocus: ee(e.onCloseAutoFocus, (i) => {
          var s;
          i.preventDefault(), (s = n.triggerRef.current) == null || s.focus();
        }),
        onPointerDownOutside: ee(e.onPointerDownOutside, (i) => {
          const s = i.detail.originalEvent, l = s.button === 0 && s.ctrlKey === !0;
          (s.button === 2 || l) && i.preventDefault();
        }),
        onFocusOutside: ee(
          e.onFocusOutside,
          (i) => i.preventDefault()
        )
      }
    );
  }
), $E = p.forwardRef(
  (e, t) => {
    const n = Et(kn, e.__scopeDialog), r = p.useRef(!1), o = p.useRef(!1);
    return /* @__PURE__ */ a(
      Lg,
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
), Lg = p.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, trapFocus: r, onOpenAutoFocus: o, onCloseAutoFocus: i, ...s } = e, l = Et(kn, n), c = p.useRef(null), u = ve(t, c);
    return cl(), /* @__PURE__ */ x(Ce, { children: [
      /* @__PURE__ */ a(
        wi,
        {
          asChild: !0,
          loop: !0,
          trapped: r,
          onMountAutoFocus: o,
          onUnmountAutoFocus: i,
          children: /* @__PURE__ */ a(
            ei,
            {
              role: "dialog",
              id: l.contentId,
              "aria-describedby": l.descriptionId,
              "aria-labelledby": l.titleId,
              "data-state": Xl(l.open),
              ...s,
              ref: u,
              onDismiss: () => l.onOpenChange(!1)
            }
          )
        }
      ),
      /* @__PURE__ */ x(Ce, { children: [
        /* @__PURE__ */ a(WE, { titleId: l.titleId }),
        /* @__PURE__ */ a(UE, { contentRef: c, descriptionId: l.descriptionId })
      ] })
    ] });
  }
), Zl = "DialogTitle", Ng = p.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = Et(Zl, n);
    return /* @__PURE__ */ a(fe.h2, { id: o.titleId, ...r, ref: t });
  }
);
Ng.displayName = Zl;
var Pg = "DialogDescription", Tg = p.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = Et(Pg, n);
    return /* @__PURE__ */ a(fe.p, { id: o.descriptionId, ...r, ref: t });
  }
);
Tg.displayName = Pg;
var Rg = "DialogClose", Ag = p.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = Et(Rg, n);
    return /* @__PURE__ */ a(
      fe.button,
      {
        type: "button",
        ...r,
        ref: t,
        onClick: ee(e.onClick, () => o.onOpenChange(!1))
      }
    );
  }
);
Ag.displayName = Rg;
function Xl(e) {
  return e ? "open" : "closed";
}
var Dg = "DialogTitleWarning", [pP, _g] = Z0(Dg, {
  contentName: kn,
  titleName: Zl,
  docsSlug: "dialog"
}), WE = ({ titleId: e }) => {
  const t = _g(Dg), n = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
  return p.useEffect(() => {
    e && (document.getElementById(e) || console.error(n));
  }, [n, e]), null;
}, HE = "DialogDescriptionWarning", UE = ({ contentRef: e, descriptionId: t }) => {
  const r = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${_g(HE).contentName}}.`;
  return p.useEffect(() => {
    var i;
    const o = (i = e.current) == null ? void 0 : i.getAttribute("aria-describedby");
    t && o && (document.getElementById(t) || console.warn(r));
  }, [r, e, t]), null;
}, zE = Cg, GE = Sg, Ig = Mg, Og = Eg, Vg = Ng, Fg = Tg, KE = Ag;
const YE = zE, ZE = GE, Bg = p.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ a(
  Ig,
  {
    ref: n,
    className: A(
      "fixed inset-0 z-50 bg-f1-background-bold/40 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      e
    ),
    ...t
  }
));
Bg.displayName = Ig.displayName;
const jg = p.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ a(ZE, { children: /* @__PURE__ */ a(Bg, { className: "grid place-items-center overflow-y-auto sm:p-8", children: /* @__PURE__ */ x(
  Og,
  {
    ref: r,
    onInteractOutside: (o) => o.preventDefault(),
    className: A(
      "relative z-50 grid w-full origin-center gap-4 border bg-f1-background p-8 shadow-xl duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 sm:w-fit sm:min-w-[400px] sm:rounded-xl md:min-w-[456px]",
      e
    ),
    ...n,
    children: [
      t,
      /* @__PURE__ */ x(KE, { className: "ring-offset-background focus:ring-ring absolute right-2 top-2 rounded-2xs p-2 text-f1-foreground opacity-70 transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-f1-background-secondary data-[state=open]:text-f1-foreground-secondary", children: [
        /* @__PURE__ */ a($3, { className: "h-5 w-5" }),
        /* @__PURE__ */ a("span", { className: "sr-only", children: "Close" })
      ] })
    ]
  }
) }) }));
jg.displayName = Og.displayName;
const $g = ({
  className: e,
  ...t
}) => /* @__PURE__ */ a(
  "div",
  {
    className: A(
      "text-icon-neutral-bold absolute left-8 top-0 h-16 w-16 translate-y-[-50%] rounded-xl bg-f1-background p-4 shadow-md",
      e
    ),
    ...t
  }
);
$g.displayName = "DialogIcon";
const Wg = ({
  className: e,
  ...t
}) => /* @__PURE__ */ a("div", { className: A("mt-5 flex flex-col text-left", e), ...t });
Wg.displayName = "DialogHeader";
const Hg = ({
  className: e,
  ...t
}) => /* @__PURE__ */ a(
  "div",
  {
    className: A(
      "-mx-8 -mb-8 mt-4 flex flex-col-reverse gap-0 rounded-bl-xl rounded-br-xl border-0 border-t border-solid border-f1-border bg-f1-background-secondary/50 px-8 py-4 sm:flex-row sm:justify-end sm:space-x-2",
      e
    ),
    ...t
  }
);
Hg.displayName = "DialogFooter";
const Ug = p.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ a(
  Vg,
  {
    ref: n,
    className: A("mt-1 text-xl font-medium leading-none", e),
    ...t
  }
));
Ug.displayName = Vg.displayName;
const zg = p.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ a(
  Fg,
  {
    ref: n,
    className: A("mt-2 text-base text-f1-foreground-secondary", e),
    ...t
  }
));
zg.displayName = Fg.displayName;
const Gg = P(
  ({ header: e, children: t, loading: n, actions: r, open: o, onClose: i }, s) => {
    const [l, c] = Ae(!1), u = It(() => {
      c(!0);
      const d = setTimeout(() => {
        i == null || i(), c(!1);
      }, 200);
      return () => clearTimeout(d);
    }, [i]);
    return /* @__PURE__ */ a(
      YE,
      {
        open: o && !l,
        onOpenChange: (d) => !d && (u == null ? void 0 : u()),
        children: /* @__PURE__ */ x(jg, { ref: s, children: [
          e && /* @__PURE__ */ x(Wg, { children: [
            e.icon && /* @__PURE__ */ a($g, { children: /* @__PURE__ */ a(Re, { size: "lg", icon: e.icon }) }),
            /* @__PURE__ */ a(Ug, { children: e.title }),
            /* @__PURE__ */ a(zg, { children: e.description })
          ] }),
          /* @__PURE__ */ a("div", { className: "flex-grow flex-col", children: n ? /* @__PURE__ */ x("div", { className: "flex flex-col gap-4", children: [
            /* @__PURE__ */ a(Dt, { className: "h-6 w-full rounded-full" }),
            /* @__PURE__ */ a(Dt, { className: "h-6 w-full rounded-full" })
          ] }) : t }),
          r && /* @__PURE__ */ x(Hg, { children: [
            r.secondary && /* @__PURE__ */ a(_t, { variant: "outline", ...r.secondary }),
            /* @__PURE__ */ a(_t, { variant: "default", ...r.primary })
          ] })
        ] })
      }
    );
  }
);
Gg.displayName = "Dialog";
const mP = $e(
  {
    name: "Dialog",
    type: "info"
  },
  Gg
), Kg = P(
  ({ children: e, ...t }, n) => /* @__PURE__ */ a("div", { ref: n, ...t, className: "relative flex flex-1 [&>div]:flex-1", children: e })
);
Kg.displayName = "FullscreenLayout";
const XE = P(function({ widgets: t, children: n }, r) {
  const o = je(null);
  uv(r, () => o.current);
  const { width: i } = X0({
    ref: o
  }), s = !!i, l = s && i < 992;
  let c = ri.toArray(t).filter((u) => !!u);
  return l ? (c = c.map((u, d) => /* @__PURE__ */ a("div", { className: "h-full [&>div]:h-full [&>div]:shadow-none", children: u }, d)), /* @__PURE__ */ a("div", { ref: o, className: "flex flex-col gap-6 px-3 pb-3 pt-2", children: s && /* @__PURE__ */ x(Ce, { children: [
    /* @__PURE__ */ a(
      lS,
      {
        columns: {
          default: 1,
          md: 2
        },
        showArrows: !1,
        children: c
      }
    ),
    /* @__PURE__ */ a("main", { children: n })
  ] }) })) : /* @__PURE__ */ a("div", { ref: o, className: "grid grid-cols-3 gap-6 px-6 pb-6 pt-2", children: s && /* @__PURE__ */ x(Ce, { children: [
    /* @__PURE__ */ a("div", { className: "col-span-3 flex flex-row gap-6 *:flex-1", children: c.slice(0, 3) }),
    /* @__PURE__ */ a("main", { className: "col-span-2", children: n }),
    /* @__PURE__ */ a("div", { className: "flex flex-1 flex-col gap-6", children: c.slice(3) })
  ] }) });
}), qE = 750, QE = ({ text: e, children: t }) => {
  const [n, r] = Ae(!1);
  Oe(() => {
    if (n) {
      const i = setTimeout(() => r(!1), qE);
      return () => clearTimeout(i);
    }
  }, [n]);
  const o = async () => {
    try {
      await navigator.clipboard.writeText(e), r(!0);
    } catch {
    }
  };
  return /* @__PURE__ */ x(
    "button",
    {
      type: "button",
      "aria-label": n ? "Copied!" : `Copy ${e}`,
      className: A(
        "group flex items-center gap-1.5 rounded p-1.5",
        "focus-visible:outline focus-visible:outline-2 focus-visible:outline-f1-border-selected-bold",
        "transition-colors duration-300 hover:bg-f1-background-hover active:bg-f1-background-secondary-hover",
        n ? "hover:bg-f1-background-positive focus-visible:bg-f1-background-positive" : void 0
      ),
      onClick: o,
      children: [
        t,
        /* @__PURE__ */ x("div", { className: "grid", children: [
          /* @__PURE__ */ a(
            Re,
            {
              icon: z1,
              size: "md",
              "aria-hidden": !0,
              className: A(
                "col-start-1 col-end-2 row-start-1 row-end-2",
                "opacity-0 transition-opacity duration-300",
                !n && "group-hover:opacity-100 group-focus-visible:opacity-100"
              )
            }
          ),
          /* @__PURE__ */ a(
            Re,
            {
              icon: Ua,
              size: "md",
              "aria-hidden": !0,
              className: A(
                "col-start-1 col-end-2 row-start-1 row-end-2",
                // place to the same cell
                "text-f1-icon-positive opacity-0 transition-opacity duration-300",
                n && "group-hover:opacity-100 group-focus-visible:opacity-100"
              )
            }
          )
        ] })
      ]
    }
  );
}, Yg = dv(
  ({ children: e, className: t, ...n }) => /* @__PURE__ */ x(
    Jt,
    {
      ...n,
      className: A(
        "text-inherit group flex items-center gap-1.5 rounded p-1.5 text-f1-foreground",
        "no-underline hover:bg-f1-background-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-f1-border-selected-bold active:bg-f1-background-secondary-hover",
        t
      ),
      children: [
        e,
        /* @__PURE__ */ a("div", { className: "grid", children: /* @__PURE__ */ a(
          Re,
          {
            "aria-hidden": !0,
            icon: Hr,
            size: "md",
            className: "opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100 group-active:opacity-100"
          }
        ) })
      ]
    }
  )
);
Yg.displayName = "NavigateAction";
const no = P(
  (e, t) => {
    const {
      text: n,
      leftIcon: r,
      className: o,
      action: i = { type: "noop" }
    } = e;
    return /* @__PURE__ */ a(
      "li",
      {
        className: "flex rounded font-medium text-f1-foreground *:flex-1",
        ref: t,
        children: /* @__PURE__ */ x(
          JE,
          {
            action: i,
            className: A("flex items-center gap-1.5 p-1.5", o),
            children: [
              r && (typeof r == "function" ? r({}) : /* @__PURE__ */ a(Re, { icon: r, size: "md", "aria-hidden": "true" })),
              /* @__PURE__ */ a("div", { className: "line-clamp-5 flex-1 whitespace-pre-line text-left", children: n })
            ]
          }
        )
      }
    );
  }
);
no.displayName = "ItemContainer";
const JE = ({
  children: e,
  action: t,
  ...n
}) => {
  const r = t.type;
  switch (r) {
    case "copy":
      return /* @__PURE__ */ a(QE, { ...t, ...n, children: e });
    case "navigate":
      return /* @__PURE__ */ a(Yg, { ...t, ...n, children: e });
    case "noop":
      return /* @__PURE__ */ a("div", { ...n, children: e });
    default:
      return r;
  }
}, Zg = P(
  ({ children: e, label: t }, n) => /* @__PURE__ */ x("div", { className: "min-w-32 max-w-72", children: [
    t && /* @__PURE__ */ a("p", { className: "mb-0.5 px-1.5 text-f1-foreground-secondary", children: t }),
    /* @__PURE__ */ a("ul", { className: "flex flex-col gap-0.5", ref: n, children: e })
  ] })
);
Zg.displayName = "DataList";
const Xg = P(
  ({ text: e, icon: t, action: n }, r) => /* @__PURE__ */ a(
    no,
    {
      ref: r,
      text: e,
      leftIcon: t,
      action: Vi(n, e)
    }
  )
);
Xg.displayName = "DataList.Item";
const qg = P(
  ({ action: e, avatarUrl: t, firstName: n, lastName: r }, o) => {
    const i = `${n} ${r}`;
    return /* @__PURE__ */ a(
      no,
      {
        ref: o,
        leftIcon: () => /* @__PURE__ */ a(
          Yr,
          {
            size: "xsmall",
            src: t,
            firstName: n,
            lastName: r
          }
        ),
        text: i,
        action: Vi(e, i)
      }
    );
  }
);
qg.displayName = "PersonItem";
const Qg = P(
  ({ avatarUrl: e, name: t, action: n }, r) => /* @__PURE__ */ a(
    no,
    {
      ref: r,
      leftIcon: () => /* @__PURE__ */ a(bi, { name: t, size: "xsmall", src: e }),
      text: t,
      action: Vi(n, t)
    }
  )
);
Qg.displayName = "CompanyItem";
const Jg = P(
  ({ action: e, name: t }, n) => /* @__PURE__ */ a(
    no,
    {
      ref: n,
      leftIcon: () => /* @__PURE__ */ a(al, { name: t, size: "xsmall" }),
      text: t,
      action: Vi(e, t)
    }
  )
);
Jg.displayName = "TeamItem";
const Vi = (e, t) => e && e.type === "copy" ? { type: "copy", text: e.text ?? t } : e, pr = Object.assign(Zg, {
  Item: Xg,
  CompanyItem: Qg,
  PersonItem: qg,
  TeamItem: Jg
});
var eL = "Toggle", ql = p.forwardRef((e, t) => {
  const { pressed: n, defaultPressed: r = !1, onPressedChange: o, ...i } = e, [s = !1, l] = wt({
    prop: n,
    onChange: o,
    defaultProp: r
  });
  return /* @__PURE__ */ a(
    fe.button,
    {
      type: "button",
      "aria-pressed": s,
      "data-state": s ? "on" : "off",
      "data-disabled": e.disabled ? "" : void 0,
      ...i,
      ref: t,
      onClick: ee(e.onClick, () => {
        e.disabled || l(!s);
      })
    }
  );
});
ql.displayName = eL;
var e0 = ql, rr = "ToggleGroup", [t0, gP] = Vt(rr, [
  Di
]), n0 = Di(), Ql = le.forwardRef((e, t) => {
  const { type: n, ...r } = e;
  if (n === "single")
    return /* @__PURE__ */ a(tL, { ...r, ref: t });
  if (n === "multiple")
    return /* @__PURE__ */ a(nL, { ...r, ref: t });
  throw new Error(`Missing prop \`type\` expected on \`${rr}\``);
});
Ql.displayName = rr;
var [r0, o0] = t0(rr), tL = le.forwardRef((e, t) => {
  const {
    value: n,
    defaultValue: r,
    onValueChange: o = () => {
    },
    ...i
  } = e, [s, l] = wt({
    prop: n,
    defaultProp: r,
    onChange: o
  });
  return /* @__PURE__ */ a(
    r0,
    {
      scope: e.__scopeToggleGroup,
      type: "single",
      value: s ? [s] : [],
      onItemActivate: l,
      onItemDeactivate: le.useCallback(() => l(""), [l]),
      children: /* @__PURE__ */ a(i0, { ...i, ref: t })
    }
  );
}), nL = le.forwardRef((e, t) => {
  const {
    value: n,
    defaultValue: r,
    onValueChange: o = () => {
    },
    ...i
  } = e, [s = [], l] = wt({
    prop: n,
    defaultProp: r,
    onChange: o
  }), c = le.useCallback(
    (d) => l((f = []) => [...f, d]),
    [l]
  ), u = le.useCallback(
    (d) => l((f = []) => f.filter((h) => h !== d)),
    [l]
  );
  return /* @__PURE__ */ a(
    r0,
    {
      scope: e.__scopeToggleGroup,
      type: "multiple",
      value: s,
      onItemActivate: c,
      onItemDeactivate: u,
      children: /* @__PURE__ */ a(i0, { ...i, ref: t })
    }
  );
});
Ql.displayName = rr;
var [rL, oL] = t0(rr), i0 = le.forwardRef(
  (e, t) => {
    const {
      __scopeToggleGroup: n,
      disabled: r = !1,
      rovingFocus: o = !0,
      orientation: i,
      dir: s,
      loop: l = !0,
      ...c
    } = e, u = n0(n), d = er(s), f = { role: "group", dir: d, ...c };
    return /* @__PURE__ */ a(rL, { scope: n, rovingFocus: o, disabled: r, children: o ? /* @__PURE__ */ a(
      rm,
      {
        asChild: !0,
        ...u,
        orientation: i,
        dir: d,
        loop: l,
        children: /* @__PURE__ */ a(fe.div, { ...f, ref: t })
      }
    ) : /* @__PURE__ */ a(fe.div, { ...f, ref: t }) });
  }
), qo = "ToggleGroupItem", s0 = le.forwardRef(
  (e, t) => {
    const n = o0(qo, e.__scopeToggleGroup), r = oL(qo, e.__scopeToggleGroup), o = n0(e.__scopeToggleGroup), i = n.value.includes(e.value), s = r.disabled || e.disabled, l = { ...e, pressed: i, disabled: s }, c = le.useRef(null);
    return r.rovingFocus ? /* @__PURE__ */ a(
      om,
      {
        asChild: !0,
        ...o,
        focusable: !s,
        active: i,
        ref: c,
        children: /* @__PURE__ */ a(Ed, { ...l, ref: t })
      }
    ) : /* @__PURE__ */ a(Ed, { ...l, ref: t });
  }
);
s0.displayName = qo;
var Ed = le.forwardRef(
  (e, t) => {
    const { __scopeToggleGroup: n, value: r, ...o } = e, i = o0(qo, n), s = { role: "radio", "aria-checked": e.pressed, "aria-pressed": void 0 }, l = i.type === "single" ? s : void 0;
    return /* @__PURE__ */ a(
      ql,
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
), a0 = Ql, l0 = s0;
const c0 = Fe(
  A(
    "inline-flex items-center justify-center rounded-sm text-sm font-medium transition-colors hover:bg-f1-background-secondary hover:text-f1-foreground-secondary disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-f1-background-secondary data-[state=on]:text-f1-foreground",
    ft()
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
), iL = p.forwardRef(({ className: e, variant: t, size: n, ...r }, o) => /* @__PURE__ */ a(
  e0,
  {
    ref: o,
    className: A(c0({ variant: t, size: n, className: e })),
    ...r
  }
));
iL.displayName = e0.displayName;
const u0 = p.createContext({
  size: "default",
  variant: "default"
}), d0 = p.forwardRef(({ className: e, variant: t, size: n, children: r, ...o }, i) => /* @__PURE__ */ a(
  a0,
  {
    ref: i,
    className: A("flex items-center justify-center gap-1.5", e),
    ...o,
    children: /* @__PURE__ */ a(u0.Provider, { value: { variant: t, size: n }, children: r })
  }
));
d0.displayName = a0.displayName;
const f0 = p.forwardRef(({ className: e, children: t, variant: n, size: r, ...o }, i) => {
  const s = p.useContext(u0);
  return /* @__PURE__ */ a(
    l0,
    {
      ref: i,
      className: A(
        c0({
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
f0.displayName = l0.displayName;
const sL = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday"
], aL = P(
  function({ daysOfTheWeek: t = sL, activatedDays: n = [] }, r) {
    return /* @__PURE__ */ a(
      d0,
      {
        type: "multiple",
        value: n,
        disabled: !0,
        className: "flex justify-start",
        ref: r,
        children: t.map((o) => /* @__PURE__ */ a(
          f0,
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
), lL = ({ content: e }) => /* @__PURE__ */ x(Ce, { children: [
  e.type === "weekdays" && /* @__PURE__ */ a("li", { className: "list-none px-1.5 py-1", children: /* @__PURE__ */ a(aL, { ...e }) }),
  e.type === "person" && /* @__PURE__ */ a(pr.PersonItem, { ...e }),
  e.type === "item" && /* @__PURE__ */ a(pr.Item, { ...e }),
  e.type === "team" && /* @__PURE__ */ a(pr.TeamItem, { ...e }),
  e.type === "company" && /* @__PURE__ */ a(pr.CompanyItem, { ...e })
] }), cL = P(
  function({ title: t, content: n, spacingAtTheBottom: r }, o) {
    const i = Array.isArray(n) ? n : [n];
    return /* @__PURE__ */ a(
      "div",
      {
        ref: o,
        className: A("flex flex-col gap-0.5", r && "pb-3"),
        children: /* @__PURE__ */ a(pr, { label: t, children: i.map((s, l) => /* @__PURE__ */ a(lL, { content: s }, l)) })
      }
    );
  }
), uL = P(function({ title: t, details: n }, r) {
  return /* @__PURE__ */ x("div", { ref: r, className: "flex flex-col gap-4", children: [
    !!t && /* @__PURE__ */ a("p", { className: "mb-1 pl-1.5 text-sm font-semibold text-f1-foreground-secondary", children: t.toLocaleUpperCase() }),
    /* @__PURE__ */ a("div", { className: "flex flex-col gap-3", children: n == null ? void 0 : n.map((o) => /* @__PURE__ */ a(
      cL,
      {
        title: o.title,
        content: o.content,
        spacingAtTheBottom: o.spacingAtTheBottom
      },
      o.title
    )) })
  ] });
}), h0 = P(
  function({ children: t, sideContent: n }, r) {
    return /* @__PURE__ */ a("div", { ref: r, className: "h-full overflow-auto", children: /* @__PURE__ */ x("div", { className: "flex h-full flex-col-reverse overflow-auto text-f1-foreground sm:flex-row", children: [
      /* @__PURE__ */ a("main", { className: "h-fit min-h-full border-0 px-6 py-5 sm:basis-3/4 sm:border-r sm:border-solid sm:border-r-f1-border-secondary", children: t }),
      /* @__PURE__ */ a("aside", { className: "py-5 pl-2 pr-4 sm:basis-1/4 sm:pb-6", children: n })
    ] }) });
  }
), dL = P(
  function({ children: t, sidepanel: n }, r) {
    return /* @__PURE__ */ a(
      h0,
      {
        ref: r,
        sideContent: /* @__PURE__ */ a(uL, { title: n.title, details: n.items }),
        children: t
      }
    );
  }
), fL = Fe(
  "relative flex min-h-full w-full flex-col gap-4 place-self-center overflow-y-auto px-6 py-5",
  {
    variants: {
      variant: {
        narrow: "max-w-screen-lg"
      }
    }
  }
), hL = le.forwardRef(({ children: e, variant: t, className: n, ...r }, o) => /* @__PURE__ */ a(
  "section",
  {
    ref: o,
    className: A("relative flex-1 overflow-auto", n),
    ...r,
    children: /* @__PURE__ */ a("div", { className: A(fL({ variant: t })), children: e })
  }
));
hL.displayName = "StandardLayout";
const vP = $e(
  {
    name: "InfoPaneLayout",
    type: "layout"
  },
  h0
), yP = $e(
  {
    name: "FullscreenLayout",
    type: "layout"
  },
  Kg
), bP = $e(
  {
    name: "OverviewLayout",
    type: "layout"
  },
  dL
), wP = $e(
  {
    name: "HomeLayout",
    type: "layout"
  },
  XE
), Jl = {
  2: "gap-2",
  4: "gap-4",
  8: "gap-8"
}, pL = Fe("grid grid-cols-1", {
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
      ...Jl
    }
  },
  defaultVariants: {
    tileSize: "md",
    gap: "4"
  }
}), mL = le.forwardRef(function({ className: t, gap: n, children: r, tileSize: o, ...i }, s) {
  return /* @__PURE__ */ a("div", { className: A("@container", "grow"), ref: s, ...i, children: /* @__PURE__ */ a(
    "div",
    {
      className: A(pL({ gap: n, tileSize: o }), t),
      ref: s,
      ...i,
      children: r
    }
  ) });
}), gL = Fe("flex", {
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
}), p0 = P(function({
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
  height: h,
  width: g,
  ...m
}, v) {
  return /* @__PURE__ */ a(
    "div",
    {
      className: A(
        gL({
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
          height: h,
          width: g
        }),
        t
      ),
      ref: v,
      ...m
    }
  );
}), vL = Fe("flex-row", {
  variants: {
    gap: {
      ...Jl
    },
    wrap: {
      true: "flex-wrap"
    }
  },
  defaultVariants: {
    wrap: !0
  }
}), yL = le.forwardRef(function({ className: t, gap: n, wrap: r, ...o }, i) {
  return /* @__PURE__ */ a(
    p0,
    {
      className: A(vL({ gap: n, wrap: r }), t),
      ref: i,
      ...o
    }
  );
}), bL = Fe("flex-col", {
  variants: {
    gap: {
      ...Jl
    }
  },
  defaultVariants: {}
}), wL = P(function({ className: t, gap: n, children: r, ...o }, i) {
  return /* @__PURE__ */ a(
    p0,
    {
      className: A(bL({ gap: n }), t),
      ref: i,
      ...o,
      children: r
    }
  );
}), CP = $e(
  {
    name: "Stack",
    type: "layout"
  },
  wL
), xP = $e(
  {
    name: "Split",
    type: "layout"
  },
  yL
), kP = $e(
  {
    name: "AutoGrid",
    type: "layout"
  },
  mL
), CL = ({ children: e }) => {
  const { enabled: t } = Od();
  return /* @__PURE__ */ a(
    "div",
    {
      className: A(
        "inline-flex ring-1 ring-inset ring-transparent transition-all duration-150",
        t && "select-none overflow-hidden rounded-sm bg-f1-background-tertiary ring-f1-border-secondary"
      ),
      "aria-hidden": t,
      children: /* @__PURE__ */ a(
        xt.div,
        {
          className: "h-full w-full",
          animate: {
            opacity: t ? 0 : 1,
            scale: t ? 0.95 : 1
          },
          transition: { duration: 0.15 },
          children: e
        }
      )
    }
  );
}, Fi = p.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ a(
  "div",
  {
    ref: n,
    className: A(
      "flex flex-col items-stretch rounded-xl border border-solid border-f1-border-secondary bg-f1-background-inverse-secondary p-4 shadow",
      e
    ),
    ...t
  }
));
Fi.displayName = "Card";
const Bi = p.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ a(
  "div",
  {
    ref: n,
    className: A("flex flex-row gap-1.5", e),
    ...t
  }
));
Bi.displayName = "CardHeader";
const ji = p.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ a("h3", { ref: n, className: A("text-base font-medium", e), ...t }));
ji.displayName = "CardTitle";
const ec = p.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ a(
  "h3",
  {
    ref: n,
    className: A(
      "line-clamp-1 truncate text-base font-normal text-f1-foreground-secondary",
      e
    ),
    ...t
  }
));
ec.displayName = "CardSubtitle";
const xL = p.forwardRef(({ className: e, content: t }, n) => /* @__PURE__ */ a(
  "div",
  {
    ref: n,
    className: A("-ml-1 flex h-6 w-6 items-center justify-center", e),
    children: /* @__PURE__ */ a(q0, { children: /* @__PURE__ */ x(Q0, { children: [
      /* @__PURE__ */ a(
        J0,
        {
          className: "h-5 w-5 cursor-help text-f1-foreground-secondary",
          "aria-label": t,
          children: /* @__PURE__ */ a(Re, { icon: U1, size: "md" })
        }
      ),
      /* @__PURE__ */ a(ev, { children: /* @__PURE__ */ a("p", { children: t }) })
    ] }) })
  }
));
xL.displayName = "CardInfo";
const m0 = p.forwardRef(({ className: e, title: t, ...n }) => /* @__PURE__ */ a(
  Jt,
  {
    className: A(
      "flex h-6 w-6 items-center justify-center rounded-sm border border-solid border-f1-border text-f1-foreground-secondary transition-colors hover:text-f1-foreground",
      e
    ),
    "aria-label": t,
    ...n,
    children: /* @__PURE__ */ a(Re, { icon: Hr, size: "sm" })
  }
));
m0.displayName = "CardLink";
const $i = p.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ a("div", { ref: n, className: A("flex grow flex-col", e), ...t }));
$i.displayName = "CardContent";
const tc = p.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ a("div", { ref: n, className: A("flex items-center", e), ...t }));
tc.displayName = "CardFooter";
const kL = p.forwardRef(function({ className: t, ...n }, r) {
  return /* @__PURE__ */ a(
    "div",
    {
      ref: r,
      className: A("flex text-2xl font-semibold", t),
      ...n
    }
  );
});
tc.displayName = "CardComment";
const SL = P(
  function({ bare: t = !1, ...n }, r) {
    return /* @__PURE__ */ a(
      "div",
      {
        ref: r,
        role: "separator",
        className: A("-mx-4 h-[1px]", t ? void 0 : "my-4"),
        style: {
          backgroundImage: "repeating-linear-gradient(to right, hsl(var(--neutral-20)) 0, hsl(var(--neutral-20)) 3px, transparent 3px, transparent 7px)"
        },
        ...n
      }
    );
  }
), ML = () => /* @__PURE__ */ a("div", { className: "min-h-[0.15rem] min-w-[0.15rem] rounded-full bg-f1-foreground-secondary" }), EL = P(function({ header: t, children: n, action: r, summaries: o, alert: i, status: s }, l) {
  const { enabled: c, toggle: u } = Od();
  Oe(() => {
    if (i && s)
      throw Error(
        "You cannot pass both alert and status at the same time to this component"
      );
  }, [i, s]);
  const d = (f) => !!f && !(le.isValidElement(f) && f.type === le.Fragment && le.Children.count(f.props.children) === 0);
  return /* @__PURE__ */ x(Fi, { className: "relative flex gap-4 border-f1-border-secondary", ref: l, children: [
    t && /* @__PURE__ */ a(Bi, { className: "-mr-1 -mt-1", children: /* @__PURE__ */ x("div", { className: "flex w-full flex-1 flex-col gap-4", children: [
      /* @__PURE__ */ x("div", { className: "flex flex-1 flex-row flex-nowrap items-center justify-between gap-2", children: [
        /* @__PURE__ */ x("div", { className: "flex min-h-6 grow flex-row items-center gap-1 truncate", children: [
          t.title && /* @__PURE__ */ a(ji, { className: "truncate", children: t.title }),
          t.subtitle && /* @__PURE__ */ x("div", { className: "flex flex-row items-center gap-1", children: [
            /* @__PURE__ */ a(ML, {}),
            /* @__PURE__ */ a(ec, { className: "truncate", children: t.subtitle })
          ] }),
          t.count && /* @__PURE__ */ a("div", { className: "ml-0.5", children: /* @__PURE__ */ a(vl, { value: t.count }) })
        ] }),
        /* @__PURE__ */ x("div", { className: "flex flex-row items-center gap-3", children: [
          i && /* @__PURE__ */ a(bl, { text: i, level: "critical" }),
          s && /* @__PURE__ */ a(Ni, { text: s.text, variant: s.variant }),
          t.link && /* @__PURE__ */ a(m0, { href: t.link.url, title: t.link.title })
        ] })
      ] }),
      t.comment && /* @__PURE__ */ x("div", { className: "flex flex-row items-center gap-3 overflow-visible", children: [
        /* @__PURE__ */ a(CL, { children: /* @__PURE__ */ a(kL, { children: t.comment }) }),
        !!t.canBeBlurred && /* @__PURE__ */ a("span", { children: /* @__PURE__ */ a(
          _t,
          {
            icon: c ? $1 : W1,
            hideLabel: !0,
            label: "hide/show",
            variant: "outline",
            round: !0,
            onClick: u,
            size: "sm"
          }
        ) })
      ] })
    ] }) }),
    /* @__PURE__ */ x($i, { className: "flex flex-col gap-4", children: [
      o && /* @__PURE__ */ a("div", { className: "flex flex-row", children: o.map((f, h) => /* @__PURE__ */ x("div", { className: "grow", children: [
        /* @__PURE__ */ a("div", { className: "mb-0.5 text-sm text-f1-foreground-secondary", children: f.label }),
        /* @__PURE__ */ x("div", { className: "flex flex-row items-end gap-0.5 text-xl font-semibold", children: [
          !!f.prefixUnit && /* @__PURE__ */ a("div", { className: "text-lg font-medium", children: f.prefixUnit }),
          f.value,
          !!f.postfixUnit && /* @__PURE__ */ a("div", { className: "text-lg font-medium", children: f.postfixUnit })
        ] })
      ] }, h)) }),
      le.Children.toArray(n).filter(d).map((f, h) => /* @__PURE__ */ x(Ce, { children: [
        h > 0 && /* @__PURE__ */ a(SL, { bare: !0 }),
        f
      ] }))
    ] }),
    r && /* @__PURE__ */ a(tc, { children: /* @__PURE__ */ a(_t, { variant: "neutral", size: "sm", ...r }) })
  ] });
}), LL = Fe("", {
  variants: {
    height: {
      sm: "h-36",
      md: "h-48",
      lg: "h-60"
    }
  }
}), NL = P(
  function({ header: t, height: n }, r) {
    return /* @__PURE__ */ x(
      Fi,
      {
        className: "flex gap-4 border-f1-border-secondary",
        ref: r,
        "aria-live": "polite",
        "aria-busy": !0,
        children: [
          /* @__PURE__ */ a(Bi, { className: "-mr-1 -mt-1", children: /* @__PURE__ */ x(
            "div",
            {
              className: "flex h-6 w-full flex-row items-center gap-1.5",
              "aria-hidden": !0,
              children: [
                t != null && t.title ? /* @__PURE__ */ a(ji, { children: t.title }) : /* @__PURE__ */ a(Dt, { className: "h-4 w-full max-w-16" }),
                (t == null ? void 0 : t.subtitle) && /* @__PURE__ */ a(ec, { children: t.subtitle })
              ]
            }
          ) }),
          /* @__PURE__ */ a(
            $i,
            {
              "aria-hidden": !0,
              className: A(LL({ height: n })),
              children: [...Array(4)].map((o, i) => /* @__PURE__ */ a(
                Dt,
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
), Hn = pt(EL, NL), dt = Object.assign(
  P(function({ chart: t, summaries: n, ...r }, o) {
    return /* @__PURE__ */ a(Hn, { ref: o, ...r, summaries: n, children: t && /* @__PURE__ */ a("div", { className: "min-h-52 grow pt-2", children: t }) });
  }),
  {
    Skeleton: Hn.Skeleton
  }
), PL = pt(
  P(function({ canBeBlurred: t, ...n }, r) {
    const o = {
      ...n,
      header: {
        ...n.header,
        canBeBlurred: t
      }
    }, i = {
      ...n.chart,
      yAxis: n.chart.yAxis ? { ...n.chart.yAxis } : { hide: !0 }
    };
    return /* @__PURE__ */ a(
      dt,
      {
        ref: r,
        ...o,
        chart: /* @__PURE__ */ a(tv, { ...i, canBeBlurred: t })
      }
    );
  }),
  dt.Skeleton
), TL = P(function(t, n) {
  return /* @__PURE__ */ a(
    dt,
    {
      ref: n,
      ...t,
      chart: /* @__PURE__ */ a(nv, { aspect: null, yAxis: { hide: !0 }, ...t.chart })
    }
  );
}), RL = pt(
  TL,
  dt.Skeleton
), AL = pt(
  P(
    function(t, n) {
      return /* @__PURE__ */ a(
        dt,
        {
          ref: n,
          ...t,
          chart: /* @__PURE__ */ a(rv, { aspect: null, yAxis: { hide: !0 }, ...t.chart })
        }
      );
    }
  ),
  dt.Skeleton
), DL = pt(
  P(
    function(t, n) {
      return /* @__PURE__ */ a(
        dt,
        {
          ref: n,
          ...t,
          chart: /* @__PURE__ */ a(ov, { aspect: null, ...t.chart })
        }
      );
    }
  ),
  dt.Skeleton
), _L = pt(
  P(
    function(t, n) {
      return /* @__PURE__ */ a(dt, { ref: n, ...t, chart: null });
    }
  ),
  dt.Skeleton
), IL = pt(
  P(
    function(t, n) {
      return /* @__PURE__ */ a(
        dt,
        {
          ref: n,
          ...t,
          chart: /* @__PURE__ */ a(
            iv,
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
  dt.Skeleton
), SP = $e(
  {
    name: "AreaChartWidget",
    type: "info"
  },
  PL
), MP = $e(
  {
    name: "BarChartWidget",
    type: "info"
  },
  RL
), EP = $e(
  {
    name: "LineChartWidget",
    type: "info"
  },
  AL
), LP = $e(
  {
    name: "PieChartWidget",
    type: "info"
  },
  DL
), NP = $e(
  {
    name: "VerticalBarChartWidget",
    type: "info"
  },
  IL
), PP = $e(
  {
    name: "SummariesWidget",
    type: "info"
  },
  _L
), OL = (e, t) => /* @__PURE__ */ x(
  "svg",
  {
    width: "366",
    height: "146",
    viewBox: "0 0 366 146",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: t,
    ...e,
    children: [
      /* @__PURE__ */ a("g", { filter: "url(#filter0_b_378_17717)", children: /* @__PURE__ */ a(
        "rect",
        {
          y: "60",
          width: "40",
          height: "86",
          rx: "10",
          fill: "#F5A51C",
          fillOpacity: "0.1"
        }
      ) }),
      /* @__PURE__ */ a("g", { filter: "url(#filter1_b_378_17717)", children: /* @__PURE__ */ a(
        "rect",
        {
          x: "80",
          y: "33",
          width: "40",
          height: "113",
          rx: "10",
          fill: "#F5A51C",
          fillOpacity: "0.1"
        }
      ) }),
      /* @__PURE__ */ a("g", { filter: "url(#filter2_b_378_17717)", children: /* @__PURE__ */ a(
        "rect",
        {
          x: "162",
          y: "60",
          width: "40",
          height: "86",
          rx: "10",
          fill: "#F5A51C",
          fillOpacity: "0.1"
        }
      ) }),
      /* @__PURE__ */ a("g", { filter: "url(#filter3_b_378_17717)", children: /* @__PURE__ */ a(
        "rect",
        {
          x: "244",
          y: "38",
          width: "40",
          height: "108",
          rx: "10",
          fill: "#F5A51C",
          fillOpacity: "0.1"
        }
      ) }),
      /* @__PURE__ */ a("g", { filter: "url(#filter4_b_378_17717)", children: /* @__PURE__ */ a(
        "rect",
        {
          x: "326",
          width: "40",
          height: "146",
          rx: "10",
          fill: "#F5A51C",
          fillOpacity: "0.1"
        }
      ) }),
      /* @__PURE__ */ x("defs", { children: [
        /* @__PURE__ */ x(
          "filter",
          {
            id: "filter0_b_378_17717",
            x: "-40",
            y: "20",
            width: "120",
            height: "166",
            filterUnits: "userSpaceOnUse",
            colorInterpolationFilters: "sRGB",
            children: [
              /* @__PURE__ */ a("feFlood", { floodOpacity: "0", result: "BackgroundImageFix" }),
              /* @__PURE__ */ a("feGaussianBlur", { in: "BackgroundImageFix", stdDeviation: "20" }),
              /* @__PURE__ */ a(
                "feComposite",
                {
                  in2: "SourceAlpha",
                  operator: "in",
                  result: "effect1_backgroundBlur_378_17717"
                }
              ),
              /* @__PURE__ */ a(
                "feBlend",
                {
                  mode: "normal",
                  in: "SourceGraphic",
                  in2: "effect1_backgroundBlur_378_17717",
                  result: "shape"
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ x(
          "filter",
          {
            id: "filter1_b_378_17717",
            x: "40",
            y: "-7",
            width: "120",
            height: "193",
            filterUnits: "userSpaceOnUse",
            colorInterpolationFilters: "sRGB",
            children: [
              /* @__PURE__ */ a("feFlood", { floodOpacity: "0", result: "BackgroundImageFix" }),
              /* @__PURE__ */ a("feGaussianBlur", { in: "BackgroundImageFix", stdDeviation: "20" }),
              /* @__PURE__ */ a(
                "feComposite",
                {
                  in2: "SourceAlpha",
                  operator: "in",
                  result: "effect1_backgroundBlur_378_17717"
                }
              ),
              /* @__PURE__ */ a(
                "feBlend",
                {
                  mode: "normal",
                  in: "SourceGraphic",
                  in2: "effect1_backgroundBlur_378_17717",
                  result: "shape"
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ x(
          "filter",
          {
            id: "filter2_b_378_17717",
            x: "122",
            y: "20",
            width: "120",
            height: "166",
            filterUnits: "userSpaceOnUse",
            colorInterpolationFilters: "sRGB",
            children: [
              /* @__PURE__ */ a("feFlood", { floodOpacity: "0", result: "BackgroundImageFix" }),
              /* @__PURE__ */ a("feGaussianBlur", { in: "BackgroundImageFix", stdDeviation: "20" }),
              /* @__PURE__ */ a(
                "feComposite",
                {
                  in2: "SourceAlpha",
                  operator: "in",
                  result: "effect1_backgroundBlur_378_17717"
                }
              ),
              /* @__PURE__ */ a(
                "feBlend",
                {
                  mode: "normal",
                  in: "SourceGraphic",
                  in2: "effect1_backgroundBlur_378_17717",
                  result: "shape"
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ x(
          "filter",
          {
            id: "filter3_b_378_17717",
            x: "204",
            y: "-2",
            width: "120",
            height: "188",
            filterUnits: "userSpaceOnUse",
            colorInterpolationFilters: "sRGB",
            children: [
              /* @__PURE__ */ a("feFlood", { floodOpacity: "0", result: "BackgroundImageFix" }),
              /* @__PURE__ */ a("feGaussianBlur", { in: "BackgroundImageFix", stdDeviation: "20" }),
              /* @__PURE__ */ a(
                "feComposite",
                {
                  in2: "SourceAlpha",
                  operator: "in",
                  result: "effect1_backgroundBlur_378_17717"
                }
              ),
              /* @__PURE__ */ a(
                "feBlend",
                {
                  mode: "normal",
                  in: "SourceGraphic",
                  in2: "effect1_backgroundBlur_378_17717",
                  result: "shape"
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ x(
          "filter",
          {
            id: "filter4_b_378_17717",
            x: "286",
            y: "-40",
            width: "120",
            height: "226",
            filterUnits: "userSpaceOnUse",
            colorInterpolationFilters: "sRGB",
            children: [
              /* @__PURE__ */ a("feFlood", { floodOpacity: "0", result: "BackgroundImageFix" }),
              /* @__PURE__ */ a("feGaussianBlur", { in: "BackgroundImageFix", stdDeviation: "20" }),
              /* @__PURE__ */ a(
                "feComposite",
                {
                  in2: "SourceAlpha",
                  operator: "in",
                  result: "effect1_backgroundBlur_378_17717"
                }
              ),
              /* @__PURE__ */ a(
                "feBlend",
                {
                  mode: "normal",
                  in: "SourceGraphic",
                  in2: "effect1_backgroundBlur_378_17717",
                  result: "shape"
                }
              )
            ]
          }
        )
      ] })
    ]
  }
), VL = P(OL), FL = (e, t) => /* @__PURE__ */ x(
  "svg",
  {
    width: "406",
    height: "179",
    viewBox: "0 0 406 179",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: t,
    ...e,
    children: [
      /* @__PURE__ */ a(
        "path",
        {
          d: "M406 1L352.178 11.5985C343.237 13.359 334.653 16.5974 326.777 21.1805L270.327 54.031L208.727 80.0238C204.915 81.6326 200.986 82.9506 196.974 83.9662L146.837 96.6597C139.431 98.5348 132.323 101.436 125.72 105.279L80.2168 131.758C71.6933 136.718 62.3449 140.1 52.6208 141.742L1.12057e-05 150.623",
          stroke: "#E51943",
          strokeOpacity: "0.1",
          strokeWidth: "1.3",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ a(
        "path",
        {
          d: "M203 82.4405L270.327 54.031L338.673 14.2578L406 1V179H0V150.623L67.3266 139.26L135.673 99.4862L203 82.4405Z",
          fill: "url(#paint0_linear_3715_9085)"
        }
      ),
      /* @__PURE__ */ a("defs", { children: /* @__PURE__ */ x(
        "linearGradient",
        {
          id: "paint0_linear_3715_9085",
          x1: "203",
          y1: "179",
          x2: "203",
          y2: "1",
          gradientUnits: "userSpaceOnUse",
          children: [
            /* @__PURE__ */ a("stop", { stopColor: "#E51943", stopOpacity: "0" }),
            /* @__PURE__ */ a("stop", { offset: "1", stopColor: "#E51943", stopOpacity: "0.05" })
          ]
        }
      ) })
    ]
  }
), BL = P(FL), jL = {
  "line-chart": "border-f1-border-accent-alpha20",
  "bar-chart": "border-f1-border-promote-alpha30"
}, $L = {
  "line-chart": "min-h-48",
  "bar-chart": "min-h-64"
}, WL = {
  "line-chart": "from-f1-background-accent-alpha5",
  "bar-chart": "from-f1-background-promote-alpha5"
}, HL = {
  "line-chart": "default",
  "bar-chart": "promote"
}, TP = P(
  function({ title: t, content: n, buttonLabel: r, buttonIcon: o, buttonAction: i, type: s }, l) {
    const c = jL[s], u = $L[s], d = WL[s], f = HL[s];
    return /* @__PURE__ */ x(
      Fi,
      {
        className: A(
          "relative flex gap-4 overflow-hidden border-dashed",
          c
        ),
        ref: l,
        children: [
          /* @__PURE__ */ a(Bi, { className: "-mt-0.5", children: /* @__PURE__ */ a(ji, { children: t }) }),
          /* @__PURE__ */ x($i, { className: A("flex flex-col gap-4", u), children: [
            /* @__PURE__ */ x(
              "div",
              {
                className: A(
                  "absolute -top-12 bottom-0 left-0 right-0 flex flex-col justify-end bg-gradient-to-b to-transparent",
                  d
                ),
                children: [
                  s === "bar-chart" && /* @__PURE__ */ a("div", { className: "absolute bottom-1 left-4 right-4", children: /* @__PURE__ */ a(VL, { className: "w-full" }) }),
                  s === "line-chart" && /* @__PURE__ */ a(BL, { className: "w-full" })
                ]
              }
            ),
            /* @__PURE__ */ x("div", { className: "relative flex min-h-28 flex-1 flex-col items-start gap-5", children: [
              /* @__PURE__ */ a("p", { className: "flex w-3/4 text-xl font-semibold", children: n }),
              r && /* @__PURE__ */ a(
                _t,
                {
                  label: r,
                  icon: o,
                  variant: f,
                  onClick: i
                }
              )
            ] })
          ] })
        ]
      }
    );
  }
);
function RP({
  title: e,
  subtitle: t,
  data: n,
  helpText: r,
  legend: o = !1
}) {
  return /* @__PURE__ */ x("div", { children: [
    /* @__PURE__ */ x("div", { className: "flex items-baseline justify-between", children: [
      /* @__PURE__ */ a("span", { className: "text-2xl font-semibold", children: e }),
      /* @__PURE__ */ a("span", { className: "text-2xl font-semibold text-f1-foreground-secondary", children: t })
    ] }),
    /* @__PURE__ */ a("div", { className: "mt-2", children: /* @__PURE__ */ a(sv, { data: n, legend: o }) }),
    !!r && /* @__PURE__ */ a("div", { className: "mt-1", children: /* @__PURE__ */ a("span", { className: "text-sm", children: r }) })
  ] });
}
const UL = P(function({ title: t, subtitle: n, description: r, color: o, isPending: i }, s) {
  return /* @__PURE__ */ x(
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
        /* @__PURE__ */ x("div", { className: "flex flex-col gap-0.5", children: [
          /* @__PURE__ */ x("p", { className: "line-clamp-3 font-medium", children: [
            t,
            /* @__PURE__ */ a("span", { className: "pl-1", children: n })
          ] }),
          /* @__PURE__ */ a("p", { className: "text-f1-foreground-secondary", children: r })
        ] })
      ]
    }
  );
}), AP = P(
  function({ events: t, limit: n = 3 }, r) {
    return t.length ? /* @__PURE__ */ a("div", { className: "flex flex-col gap-2", ref: r, children: t.slice(0, n).map((o) => /* @__PURE__ */ a(
      UL,
      {
        title: o.title,
        subtitle: o.subtitle,
        description: o.description,
        color: o.color,
        isPending: o.isPending
      },
      o.title
    )) }) : null;
  }
), zL = P(
  function({ content: t, label: n, icon: r, color: o }, i) {
    return /* @__PURE__ */ x("div", { className: "grid-row-2 col-span-1 grid", ref: i, children: [
      /* @__PURE__ */ a("p", { className: "text-2xl font-semibold", children: t }),
      /* @__PURE__ */ x("div", { className: "flex items-center gap-1", children: [
        /* @__PURE__ */ a(
          "p",
          {
            className: "line-clamp-1 text-f1-foreground-secondary",
            title: n,
            children: n
          }
        ),
        r && /* @__PURE__ */ a("span", { className: A("flex", o), children: /* @__PURE__ */ a(Re, { icon: r }) })
      ] })
    ] }, n);
  }
), DP = P(
  function({ items: t }, n) {
    return /* @__PURE__ */ a(
      "div",
      {
        ref: n,
        className: "grid auto-cols-fr grid-flow-col items-end gap-x-3",
        children: t.map(({ label: r, content: o, icon: i, color: s }) => /* @__PURE__ */ a(
          zL,
          {
            label: r,
            content: o,
            icon: i,
            color: s
          },
          `${r}-${o}`
        ))
      }
    );
  }
), GL = ({ onClick: e, className: t, children: n }) => e ? /* @__PURE__ */ a("a", { className: t, onClick: e, tabIndex: 0, children: n }) : /* @__PURE__ */ a("div", { className: t, tabIndex: -1, children: n });
function KL({
  id: e,
  title: t,
  subtitle: n,
  icon: r = _1,
  onClick: o
}) {
  const i = A(
    "flex flex-row gap-2 rounded-md border border-solid border-transparent p-2 text-f1-foreground",
    o ? "cursor-pointer hover:bg-f1-background-tertiary focus:border-f1-background-selected-bold focus:outline-none" : void 0
  );
  return /* @__PURE__ */ x(GL, { onClick: (l) => {
    l.preventDefault(), o == null || o(e);
  }, className: i, children: [
    /* @__PURE__ */ a(Li, { icon: r, size: "md" }),
    /* @__PURE__ */ x("div", { className: "flex-1", children: [
      /* @__PURE__ */ a("p", { className: "line-clamp-1 font-medium", children: t }),
      /* @__PURE__ */ a("p", { className: "line-clamp-1 text-f1-foreground-secondary", children: n })
    ] })
  ] });
}
function _P({ items: e, onClickItem: t }) {
  return /* @__PURE__ */ a("div", { className: "flex flex-col gap-2", children: e.map((n) => /* @__PURE__ */ a(KL, { ...n, onClick: t }, n.id)) });
}
const YL = ({ onClick: e, className: t, children: n }) => e ? /* @__PURE__ */ a("a", { className: t, onClick: e, tabIndex: 0, children: n }) : /* @__PURE__ */ a("div", { className: t, tabIndex: -1, children: n });
function g0({
  id: e,
  title: t,
  alert: n,
  rawTag: r,
  count: o,
  icon: i,
  iconClassName: s = "text-f1-icon-secondary",
  onClick: l
}) {
  const c = A(
    "flex flex-row items-start gap-1 rounded-md border border-solid border-transparent px-2 py-1.5 text-f1-foreground",
    l ? "cursor-pointer hover:bg-f1-background-tertiary focus:border-f1-background-selected-bold focus:outline-none" : void 0
  );
  return /* @__PURE__ */ x(YL, { onClick: (d) => {
    d.preventDefault(), l == null || l(e);
  }, className: c, children: [
    i && /* @__PURE__ */ a(Re, { icon: i, size: "md", className: A("mt-0.5", s) }),
    /* @__PURE__ */ a("p", { className: "mt-0.5 line-clamp-2 flex-1 font-medium", children: t }),
    /* @__PURE__ */ x("div", { className: "flex flex-row items-center gap-2", children: [
      n && /* @__PURE__ */ a(bl, { ...n }),
      r && /* @__PURE__ */ a(Ip, { ...r }),
      !!o && /* @__PURE__ */ a(vl, { value: o })
    ] })
  ] });
}
function IP({ items: e, onClickItem: t }) {
  return /* @__PURE__ */ a("div", { className: "flex flex-col gap-1", children: e.map((n) => /* @__PURE__ */ a(g0, { ...n, onClick: t }, n.id)) });
}
function ZL({
  task: e,
  status: t,
  onClick: n,
  hideIcon: r = !1
}) {
  var s;
  const o = () => {
    n == null || n(e);
  }, i = Ct(() => {
    if (!r) {
      if (t === "todo")
        return B1;
      if (t === "in-progress")
        return H1;
    }
  }, [t, r]);
  return /* @__PURE__ */ a(
    g0,
    {
      id: e.id,
      title: e.text,
      icon: i,
      iconClassName: t === "todo" ? void 0 : "text-f1-icon-info",
      alert: (s = e.badge) != null && s.isPastDue ? {
        text: e.badge.text,
        level: "critical"
      } : void 0,
      rawTag: e.badge && !e.badge.isPastDue ? {
        text: e.badge.text,
        icon: I1
      } : void 0,
      count: e.counter,
      onClick: o
    }
  );
}
function OP({
  tasks: e,
  onClickTask: t,
  hideIcons: n = !1,
  maxTasksToShow: r = 5,
  emptyMessage: o = "No tasks assigned"
}) {
  const s = [
    { key: "inProgress", status: "in-progress" },
    { key: "todo", status: "todo" }
  ].flatMap(
    ({ key: c, status: u }) => (e[c] || []).map(
      (d) => typeof d == "string" ? {
        id: d,
        text: d
      } : d
    ).map(({ id: d, text: f, badge: h, counter: g }) => ({
      id: d,
      text: f,
      badge: h,
      counter: g,
      status: u
    }))
  ), l = !s.length;
  return /* @__PURE__ */ a("div", { className: "flex flex-col gap-0", children: l ? /* @__PURE__ */ a("p", { className: "pl-2 font-medium", children: o }) : s.slice(0, r).map((c) => /* @__PURE__ */ a(
    ZL,
    {
      task: c,
      status: c.status,
      hideIcon: n,
      onClick: t
    },
    c.id
  )) });
}
const XL = ({ title: e, info: t }) => /* @__PURE__ */ x("div", { className: "flex items-center justify-between", children: [
  /* @__PURE__ */ a("p", { className: "flex text-f1-foreground-secondary", children: e }),
  /* @__PURE__ */ a("div", { className: "basis-16 justify-self-end text-right font-medium", children: t })
] }), VP = P(
  function({ title: t, list: n }, r) {
    return /* @__PURE__ */ x("div", { ref: r, className: "flex flex-col gap-2", children: [
      t && /* @__PURE__ */ a("div", { className: "font-medium", children: t }),
      n.map((o) => /* @__PURE__ */ a(XL, { title: o.title, info: o.info }, o.title))
    ] });
  }
);
var qL = Object.defineProperty, QL = Object.defineProperties, JL = Object.getOwnPropertyDescriptors, Qo = Object.getOwnPropertySymbols, v0 = Object.prototype.hasOwnProperty, y0 = Object.prototype.propertyIsEnumerable, Ld = (e, t, n) => t in e ? qL(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, lt = (e, t) => {
  for (var n in t || (t = {})) v0.call(t, n) && Ld(e, n, t[n]);
  if (Qo) for (var n of Qo(t)) y0.call(t, n) && Ld(e, n, t[n]);
  return e;
}, Wi = (e, t) => QL(e, JL(t)), eN = (e, t) => {
  var n = {};
  for (var r in e) v0.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && Qo) for (var r of Qo(e)) t.indexOf(r) < 0 && y0.call(e, r) && (n[r] = e[r]);
  return n;
}, tN = (e) => e.right - e.left < 5 || e.bottom && e.bottom - e.top < 5, nN = ({ spotsList: e, usedSpot: t }) => e.some((n) => n !== t && t.left === n.left), rN = ({ position: e, spot: t, stone: n }) => {
  if (e.left > t.left && t.right >= e.left && e.top + n.height > t.top) {
    if (t.bottom && t.bottom < e.top) return t;
    let r = lt({}, t);
    return r.right = e.left, r;
  }
  return null;
}, oN = ({ position: e, stone: t, spot: n }) => {
  if (e.left + t.width > n.left && e.top >= n.top) {
    if (n.bottom && n.bottom < e.top || n.right < e.left) return n;
    let r = lt({}, n);
    return r.bottom = e.top, r;
  }
  return null;
}, iN = ({ stone: e, position: t, spotsList: n, optimalSpot: r }) => {
  let o = lt({}, r);
  return o.left = t.left + e.width, tN(o) || nN({ usedSpot: o, spotsList: n }) ? null : o;
}, sN = ({ spots: e, position: t, optimalSpot: n, stone: r }) => e.map((o, i, s) => {
  if (o === n) return iN({ stone: r, position: t, optimalSpot: n, spotsList: s });
  let l = rN({ position: t, spot: o, stone: r });
  return l || oN({ position: t, stone: r, spot: o }) || o;
});
function aN(e, t) {
  for (let n = 0, r = t.length; n < r; n++) {
    let o = t[n];
    if (e(o)) return o;
  }
  return null;
}
var lN = (e, t) => t.filter(e), cN = (e, t) => [...t].sort(e), uN = (e, t) => e.top === t.top ? e.left < t.left ? -1 : 1 : e.top < t.top ? -1 : 1, dN = (e) => cN(uN, e), fN = ({ availableSpots: e, optimalSpot: t, containerSize: n, stone: r }) => {
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
}, hN = (e, t) => {
  let n = e.right - e.left >= t.width;
  if (!e.bottom) return n;
  let r = e.bottom - e.top >= t.height;
  return n && r;
}, pN = ({ availableSpots: e, stone: t }) => aN((n) => hN(n, t), e);
function mN({ stone: e, availableSpots: t, containerSize: n }) {
  let r = pN({ availableSpots: t, stone: e }), o = { left: r.left, top: r.top }, i = fN({ optimalSpot: r, availableSpots: t.filter((c) => c !== r), stone: e, containerSize: n }), s = [...t, i], l = sN({ spots: s, position: o, optimalSpot: r, stone: e });
  return s = [...lN(Boolean, l)], s = dN(s), { position: o, availableSpots: s };
}
var gN = ({ stones: e, containerSize: t }) => {
  let n = { positions: [], containerHeight: 0, availableSpots: [] };
  if (!e.length) return n;
  let r = 0, o = [], i = [{ top: 0, left: 0, right: t }];
  for (let s of e) {
    let l = mN({ availableSpots: i, stone: s, containerSize: t }), c = l.position.top + s.height;
    r < c && (r = c), o.push(l.position), i = l.availableSpots;
  }
  return { availableSpots: i, positions: o, containerHeight: r };
}, vN = (e) => e.reduce((t, n) => {
  if (!n) return t;
  let r = n.getBoundingClientRect();
  return t.push({ width: r.width, height: r.height }), t;
}, []), yN = ({ boxesRefs: e, wrapperRef: t, children: n, windowWidth: r, wrapperWidth: o }) => {
  let [{ positions: i, containerHeight: s, stones: l, availableSpots: c }, u] = Ae({ positions: [], containerHeight: null, stones: [], availableSpots: [] });
  return Oe(() => {
    var d, f;
    let h = vN(e.current), g = (f = (d = t.current) == null ? void 0 : d.offsetWidth) != null ? f : 0;
    if (g === null) return;
    let m = gN({ stones: h, containerSize: g });
    u(Wi(lt({}, m), { stones: h }));
  }, [n, e, t, r, o]), { positions: i, containerHeight: s, stones: l, availableSpots: c };
}, bN = (e) => ({ fade: `${e}ms opacity ease`, fadeMove: `
    ${e}ms opacity ease,
    ${e}ms top ease,
    ${e}ms left ease
  `, move: `
    ${e}ms top ease,
    ${e}ms left ease
  ` }), wN = ({ transition: e, transitionDuration: t }) => e ? { transition: bN(t)[e] } : null, CN = (e) => e ? Wi(lt({}, e), { opacity: 1 }) : { opacity: 0, top: 0, left: 0 }, xN = ({ style: e, position: t, transition: n, transitionDuration: r }) => lt(lt(Wi(lt({}, e), { position: "absolute" }), CN(t)), wN({ transition: n, transitionDuration: r }));
function kN(e, t, n) {
  let r;
  return function(...o) {
    r && clearTimeout(r), r = setTimeout(function() {
      r = null, e.apply(null, o);
    }, t);
  };
}
var SN = () => {
  let [e, t] = Ae(), n = je(kN(t, 300));
  return Oe(() => {
    let r = () => {
      n.current(window.innerWidth);
    };
    return window.addEventListener("resize", r), () => {
      window.removeEventListener("resize", r);
    };
  }, []), e;
}, MN = (e) => {
  let [t, n] = Ae(null);
  return Oe(() => {
    let r = new ResizeObserver((o) => {
      for (let i of o) n(i.contentRect.width);
    });
    return e.current && r.observe(e.current), () => {
      r.disconnect();
    };
  }, [e]), t;
}, EN = (e) => {
  var t = e, { children: n, style: r, transition: o = !1, transitionDuration: i = 500, transitionStep: s = 50 } = t, l = eN(t, ["children", "style", "transition", "transitionDuration", "transitionStep"]);
  let c = je([]), u = je(null), d = SN(), f = MN(u), { positions: h, containerHeight: g } = yN({ boxesRefs: c, wrapperRef: u, children: n, windowWidth: d, wrapperWidth: f }), m = lt({ minHeight: g ?? 0, position: "relative" }, r);
  return a("div", Wi(lt({ ref: u, style: m }, l), { children: ri.map(n, (v, y) => {
    if (typeof v != "object" || !v || !("type" in v)) return v;
    let w = { style: xN({ style: v.props.style, position: h[y], transition: o, transitionDuration: i }), ref: (b) => c.current[y] = b };
    return fv(v, lt(lt({}, v.props), w));
  }) }));
};
const LN = { sm: 340, md: 480, lg: 640 }, Nd = P(
  function({ children: t, widgetWidth: n = "sm" }, r) {
    const o = LN[n], [i, s] = Ae(), l = ri.toArray(t), c = je(null);
    return Oe(() => {
      const u = () => {
        var f;
        const d = (f = c.current) == null ? void 0 : f.offsetWidth;
        d && s(Math.floor(d / o) || 1);
      };
      return u(), window.addEventListener("resize", u), () => {
        window.removeEventListener("resize", u);
      };
    }, [s, o]), /* @__PURE__ */ a("div", { ref: r, className: "text-f1-foreground", children: /* @__PURE__ */ a("div", { ref: c, children: i === 1 ? /* @__PURE__ */ a("div", { className: "flex flex-col gap-4 *:shadow", children: t }) : i && i > 1 && /* @__PURE__ */ a("div", { className: "relative -mr-4", children: /* @__PURE__ */ a(EN, { children: l.map((u, d) => /* @__PURE__ */ a(
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
), NN = ["sm", "lg", "md", "md", "lg", "sm", "lg", "lg", "sm", "sm", "md", "md"], FP = pt(Nd, () => /* @__PURE__ */ a(_p, { children: /* @__PURE__ */ a(Nd, { children: NN.map((e, t) => /* @__PURE__ */ a(Hn.Skeleton, { height: e }, t)) }) })), Pd = ({ children: e }) => /* @__PURE__ */ a("div", { className: "flex min-h-40 flex-row items-stretch gap-4 text-f1-foreground @container [&>div]:min-w-[calc(100vw-64px)] @2xl:[&>div]:min-w-[calc(50vw-48px)]", children: e }), BP = pt(
  P(function({ children: t }, n) {
    return /* @__PURE__ */ a($a, { ref: n, showBar: !1, children: /* @__PURE__ */ a(Pd, { children: t }) });
  }),
  () => /* @__PURE__ */ a(_p, { orientation: "horizontal", children: /* @__PURE__ */ x(Pd, { children: [
    /* @__PURE__ */ a(Hn.Skeleton, {}),
    /* @__PURE__ */ a(Hn.Skeleton, {}),
    /* @__PURE__ */ a(Hn.Skeleton, {})
  ] }) })
), PN = P(
  ({ title: e, children: t }, n) => (Mn(e, { disallowEmpty: !0 }), /* @__PURE__ */ x("div", { ref: n, className: "flex flex-col gap-2", children: [
    /* @__PURE__ */ a("p", { className: "text-base font-medium text-f1-foreground-secondary", children: e }),
    t
  ] }))
);
PN.displayName = "WidgetSection";
const jP = $e(
  {
    name: "ScrollArea",
    type: "layout"
  },
  $a
);
export {
  UN as Alert,
  KN as AlertAvatar,
  GN as AlertDescription,
  bl as AlertTag,
  zN as AlertTitle,
  eP as ApplicationFrame,
  SP as AreaChartWidget,
  kP as AutoGrid,
  Z7 as BalanceTag,
  MP as BarChartWidget,
  I7 as BaseCelebration,
  _E as BaseTabs,
  N8 as Calendar,
  lS as Carousel,
  RP as CategoryBarSection,
  YN as Celebration,
  O7 as CelebrationSkeleton,
  TP as ChartWidgetEmptyState,
  bi as CompanyAvatar,
  XN as CompanyHeader,
  X7 as CompanyTag,
  vl as Counter,
  FP as Dashboard,
  P7 as DateAvatar,
  $M as DaytimePage,
  cL as DetailsItem,
  uL as DetailsItemsList,
  mP as Dialog,
  Q7 as DotTag,
  AP as EventsList,
  yP as FullscreenLayout,
  ZN as HighlightBanner,
  wP as HomeLayout,
  DP as IndicatorsList,
  vP as InfoPaneLayout,
  $N as Input,
  EP as LineChartWidget,
  aP as Menu,
  Li as ModuleAvatar,
  WN as NumberInput,
  oP as OmniButton,
  bP as OverviewLayout,
  BM as Page,
  rP as PageHeader,
  Yr as PersonAvatar,
  qN as PersonHeader,
  J7 as PersonTag,
  LP as PieChartWidget,
  CL as PrivateBox,
  VN as RadarChart,
  Ip as RawTag,
  QN as ResourceHeader,
  jP as ScrollArea,
  lP as SearchBar,
  i7 as Select,
  z7 as Shortcut,
  cP as Sidebar,
  iP as SidebarHeader,
  JN as Spinner,
  xP as Split,
  CP as Stack,
  hL as StandardLayout,
  Ni as StatusTag,
  PP as SummariesWidget,
  fP as Tabs,
  IE as TabsSkeleton,
  OP as TasksList,
  al as TeamAvatar,
  ek as TeamTag,
  jN as Textarea,
  VP as TwoColumnsList,
  uP as User,
  NP as VerticalBarChartWidget,
  aL as Weekdays,
  Hn as Widget,
  _P as WidgetInboxList,
  PN as WidgetSection,
  IP as WidgetSimpleList,
  BP as WidgetStrip,
  kb as _RadarChart,
  ll as renderAvatar,
  HN as useForm
};
