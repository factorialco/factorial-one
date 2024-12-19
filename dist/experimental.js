import { s as Hn, t as Nr, v as _o, w as $y, x as co, D as jy, y as qi, z as Uy, G as Hy, H as uo, J as zy, K as Gy, N as Ky, O as cc, Q as Yy, R as uc, S as Xy, T as Id, U as Ld, W as qy, Y as $e, P as fe, Z as fs, _ as hs, $ as Zy, b as Ot, a0 as ve, a1 as qe, a2 as ne, a3 as Oe, c as E, a4 as Qy, a5 as Jy, a6 as e0, d as dc, a7 as t0, a8 as n0, f as r0, a9 as fc, aa as mt, I as be, a as Ie, ab as o0, ac as Cn, ad as oi, ae as Od, af as ii, ag as Fd, ah as ut, ai as Vd, aj as i0, ak as Ct, al as Bd, C as He, m as ft, q as ai, E as a0, L as Jt, am as Sn, n as Mr, u as ms, an as s0, M as l0, ao as ps, ap as Da, aq as Wd, ar as $d, as as jd, at as Ud, au as hc, av as c0, aw as u0, ax as d0, o as Hd, A as f0, B as h0, g as m0, h as p0, V as g0, e as v0 } from "./imageHandler-CG1jrPcp.js";
import { jsx as l, jsxs as N, Fragment as xe } from "react/jsx-runtime";
import * as m from "react";
import ee, { PureComponent as y0, createContext as nt, useContext as Pe, useId as si, useEffect as Fe, useCallback as It, Component as b0, useLayoutEffect as zd, useRef as Ve, useInsertionEffect as Gd, useMemo as St, forwardRef as X, Fragment as Kd, createElement as Ro, Children as li, isValidElement as w0, useState as ke, useImperativeHandle as x0, memo as C0, cloneElement as S0 } from "react";
import * as Yd from "react-dom";
import Xd from "react-dom";
var N0 = ["cx", "cy", "innerRadius", "outerRadius", "gridType", "radialLines"];
function Pr(e) {
  "@babel/helpers - typeof";
  return Pr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Pr(e);
}
function M0(e, t) {
  if (e == null) return {};
  var n = P0(e, t), r, o;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (o = 0; o < i.length; o++)
      r = i[o], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function P0(e, t) {
  if (e == null) return {};
  var n = {}, r = Object.keys(e), o, i;
  for (i = 0; i < r.length; i++)
    o = r[i], !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
function qt() {
  return qt = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, qt.apply(this, arguments);
}
function mc(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Tr(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? mc(Object(n), !0).forEach(function(r) {
      T0(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : mc(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function T0(e, t, n) {
  return t = k0(t), t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function k0(e) {
  var t = E0(e, "string");
  return Pr(t) == "symbol" ? t : String(t);
}
function E0(e, t) {
  if (Pr(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (Pr(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var A0 = function(t, n, r, o) {
  var i = "";
  return o.forEach(function(a, s) {
    var c = Nr(n, r, t, a);
    s ? i += "L ".concat(c.x, ",").concat(c.y) : i += "M ".concat(c.x, ",").concat(c.y);
  }), i += "Z", i;
}, D0 = function(t) {
  var n = t.cx, r = t.cy, o = t.innerRadius, i = t.outerRadius, a = t.polarAngles, s = t.radialLines;
  if (!a || !a.length || !s)
    return null;
  var c = Tr({
    stroke: "#ccc"
  }, Hn(t, !1));
  return /* @__PURE__ */ ee.createElement("g", {
    className: "recharts-polar-grid-angle"
  }, a.map(function(u) {
    var d = Nr(n, r, o, u), f = Nr(n, r, i, u);
    return /* @__PURE__ */ ee.createElement("line", qt({}, c, {
      key: "line-".concat(u),
      x1: d.x,
      y1: d.y,
      x2: f.x,
      y2: f.y
    }));
  }));
}, _0 = function(t) {
  var n = t.cx, r = t.cy, o = t.radius, i = t.index, a = Tr(Tr({
    stroke: "#ccc"
  }, Hn(t, !1)), {}, {
    fill: "none"
  });
  return /* @__PURE__ */ ee.createElement("circle", qt({}, a, {
    className: _o("recharts-polar-grid-concentric-circle", t.className),
    key: "circle-".concat(i),
    cx: n,
    cy: r,
    r: o
  }));
}, R0 = function(t) {
  var n = t.radius, r = t.index, o = Tr(Tr({
    stroke: "#ccc"
  }, Hn(t, !1)), {}, {
    fill: "none"
  });
  return /* @__PURE__ */ ee.createElement("path", qt({}, o, {
    className: _o("recharts-polar-grid-concentric-polygon", t.className),
    key: "path-".concat(r),
    d: A0(n, t.cx, t.cy, t.polarAngles)
  }));
}, I0 = function(t) {
  var n = t.polarRadius, r = t.gridType;
  return !n || !n.length ? null : /* @__PURE__ */ ee.createElement("g", {
    className: "recharts-polar-grid-concentric"
  }, n.map(function(o, i) {
    var a = i;
    return r === "circle" ? /* @__PURE__ */ ee.createElement(_0, qt({
      key: a
    }, t, {
      radius: o,
      index: i
    })) : /* @__PURE__ */ ee.createElement(R0, qt({
      key: a
    }, t, {
      radius: o,
      index: i
    }));
  }));
}, qd = function(t) {
  var n = t.cx, r = n === void 0 ? 0 : n, o = t.cy, i = o === void 0 ? 0 : o, a = t.innerRadius, s = a === void 0 ? 0 : a, c = t.outerRadius, u = c === void 0 ? 0 : c, d = t.gridType, f = d === void 0 ? "polygon" : d, h = t.radialLines, g = h === void 0 ? !0 : h, p = M0(t, N0);
  return u <= 0 ? null : /* @__PURE__ */ ee.createElement("g", {
    className: "recharts-polar-grid"
  }, /* @__PURE__ */ ee.createElement(D0, qt({
    cx: r,
    cy: i,
    innerRadius: s,
    outerRadius: u,
    gridType: f,
    radialLines: g
  }, p)), /* @__PURE__ */ ee.createElement(I0, qt({
    cx: r,
    cy: i,
    innerRadius: s,
    outerRadius: u,
    gridType: f,
    radialLines: g
  }, p)));
};
qd.displayName = "PolarGrid";
function L0(e) {
  return e && e.length ? e[0] : void 0;
}
var O0 = L0, F0 = O0;
const V0 = /* @__PURE__ */ $y(F0);
function Kn(e) {
  "@babel/helpers - typeof";
  return Kn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Kn(e);
}
function Io() {
  return Io = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Io.apply(this, arguments);
}
function pc(e, t) {
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
    t % 2 ? pc(Object(n), !0).forEach(function(r) {
      Ut(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : pc(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function B0(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function gc(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, Qd(r.key), r);
  }
}
function W0(e, t, n) {
  return t && gc(e.prototype, t), n && gc(e, n), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function $0(e, t, n) {
  return t = Lo(t), j0(e, Zd() ? Reflect.construct(t, n || [], Lo(e).constructor) : t.apply(e, n));
}
function j0(e, t) {
  if (t && (Kn(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return Fn(e);
}
function Zd() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (Zd = function() {
    return !!e;
  })();
}
function Lo(e) {
  return Lo = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Lo(e);
}
function Fn(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function U0(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && _a(e, t);
}
function _a(e, t) {
  return _a = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, o) {
    return r.__proto__ = o, r;
  }, _a(e, t);
}
function Ut(e, t, n) {
  return t = Qd(t), t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function Qd(e) {
  var t = H0(e, "string");
  return Kn(t) == "symbol" ? t : String(t);
}
function H0(e, t) {
  if (Kn(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (Kn(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var $r = /* @__PURE__ */ function(e) {
  U0(t, e);
  function t() {
    var n;
    B0(this, t);
    for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++)
      o[i] = arguments[i];
    return n = $0(this, t, [].concat(o)), Ut(Fn(n), "state", {
      isAnimationFinished: !1
    }), Ut(Fn(n), "handleAnimationEnd", function() {
      var a = n.props.onAnimationEnd;
      n.setState({
        isAnimationFinished: !0
      }), co(a) && a();
    }), Ut(Fn(n), "handleAnimationStart", function() {
      var a = n.props.onAnimationStart;
      n.setState({
        isAnimationFinished: !1
      }), co(a) && a();
    }), Ut(Fn(n), "handleMouseEnter", function(a) {
      var s = n.props.onMouseEnter;
      s && s(n.props, a);
    }), Ut(Fn(n), "handleMouseLeave", function(a) {
      var s = n.props.onMouseLeave;
      s && s(n.props, a);
    }), n;
  }
  return W0(t, [{
    key: "renderDots",
    value: function(r) {
      var o = this.props, i = o.dot, a = o.dataKey, s = Hn(this.props, !1), c = Hn(i, !0), u = r.map(function(d, f) {
        var h = Ke(Ke(Ke({
          key: "dot-".concat(f),
          r: 3
        }, s), c), {}, {
          dataKey: a,
          cx: d.x,
          cy: d.y,
          index: f,
          payload: d
        });
        return t.renderDotItem(i, h);
      });
      return /* @__PURE__ */ ee.createElement(qi, {
        className: "recharts-radar-dots"
      }, u);
    }
  }, {
    key: "renderPolygonStatically",
    value: function(r) {
      var o = this.props, i = o.shape, a = o.dot, s = o.isRange, c = o.baseLinePoints, u = o.connectNulls, d;
      return /* @__PURE__ */ ee.isValidElement(i) ? d = /* @__PURE__ */ ee.cloneElement(i, Ke(Ke({}, this.props), {}, {
        points: r
      })) : co(i) ? d = i(Ke(Ke({}, this.props), {}, {
        points: r
      })) : d = /* @__PURE__ */ ee.createElement(Uy, Io({}, Hn(this.props, !0), {
        onMouseEnter: this.handleMouseEnter,
        onMouseLeave: this.handleMouseLeave,
        points: r,
        baseLinePoints: s ? c : null,
        connectNulls: u
      })), /* @__PURE__ */ ee.createElement(qi, {
        className: "recharts-radar-polygon"
      }, d, a ? this.renderDots(r) : null);
    }
  }, {
    key: "renderPolygonWithAnimation",
    value: function() {
      var r = this, o = this.props, i = o.points, a = o.isAnimationActive, s = o.animationBegin, c = o.animationDuration, u = o.animationEasing, d = o.animationId, f = this.state.prevPoints;
      return /* @__PURE__ */ ee.createElement(Hy, {
        begin: s,
        duration: c,
        isActive: a,
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
        var g = h.t, p = f && f.length / i.length, v = i.map(function(y, w) {
          var b = f && f[Math.floor(w * p)];
          if (b) {
            var x = uo(b.x, y.x), P = uo(b.y, y.y);
            return Ke(Ke({}, y), {}, {
              x: x(g),
              y: P(g)
            });
          }
          var T = uo(y.cx, y.x), R = uo(y.cy, y.y);
          return Ke(Ke({}, y), {}, {
            x: T(g),
            y: R(g)
          });
        });
        return r.renderPolygonStatically(v);
      });
    }
  }, {
    key: "renderPolygon",
    value: function() {
      var r = this.props, o = r.points, i = r.isAnimationActive, a = r.isRange, s = this.state.prevPoints;
      return i && o && o.length && !a && (!s || !zy(s, o)) ? this.renderPolygonWithAnimation() : this.renderPolygonStatically(o);
    }
  }, {
    key: "render",
    value: function() {
      var r = this.props, o = r.hide, i = r.className, a = r.points, s = r.isAnimationActive;
      if (o || !a || !a.length)
        return null;
      var c = this.state.isAnimationFinished, u = _o("recharts-radar", i);
      return /* @__PURE__ */ ee.createElement(qi, {
        className: u
      }, this.renderPolygon(), (!s || c) && Gy.renderCallByParent(this.props, a));
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
      return /* @__PURE__ */ ee.isValidElement(r) ? i = /* @__PURE__ */ ee.cloneElement(r, o) : co(r) ? i = r(o) : i = /* @__PURE__ */ ee.createElement(jy, Io({}, o, {
        className: _o("recharts-radar-dot", typeof r != "boolean" ? r.className : "")
      })), i;
    }
  }]), t;
}(y0);
Ut($r, "displayName", "Radar");
Ut($r, "defaultProps", {
  angleAxisId: 0,
  radiusAxisId: 0,
  hide: !1,
  activeDot: !0,
  dot: !1,
  legendType: "rect",
  isAnimationActive: !Ky.isSsr,
  animationBegin: 0,
  animationDuration: 1500,
  animationEasing: "ease"
});
Ut($r, "getComposedData", function(e) {
  var t = e.radiusAxis, n = e.angleAxis, r = e.displayedData, o = e.dataKey, i = e.bandSize, a = n.cx, s = n.cy, c = !1, u = [], d = n.type !== "number" ? i ?? 0 : 0;
  r.forEach(function(h, g) {
    var p = cc(h, n.dataKey, g), v = cc(h, o), y = n.scale(p) + d, w = Array.isArray(v) ? Yy(v) : v, b = uc(w) ? void 0 : t.scale(w);
    Array.isArray(v) && v.length >= 2 && (c = !0), u.push(Ke(Ke({}, Nr(a, s, b, y)), {}, {
      name: p,
      value: v,
      cx: a,
      cy: s,
      radius: b,
      angle: y,
      payload: h
    }));
  });
  var f = [];
  return c && u.forEach(function(h) {
    if (Array.isArray(h.value)) {
      var g = V0(h.value), p = uc(g) ? void 0 : t.scale(g);
      f.push(Ke(Ke({}, h), {}, {
        radius: p
      }, Nr(a, s, p, h.angle)));
    } else
      f.push(h);
  }), {
    points: u,
    isRange: c,
    baseLinePoints: f
  };
});
var z0 = Xy({
  chartName: "RadarChart",
  GraphicalChild: $r,
  axisComponents: [{
    axisType: "angleAxis",
    AxisComp: Id
  }, {
    axisType: "radiusAxis",
    AxisComp: Ld
  }],
  formatAxisMap: qy,
  defaultProps: {
    layout: "centric",
    startAngle: 90,
    endAngle: -270,
    cx: "50%",
    cy: "50%",
    innerRadius: 0,
    outerRadius: "80%"
  }
}), G0 = "Portal", ci = m.forwardRef((e, t) => {
  var s;
  const { container: n, ...r } = e, [o, i] = m.useState(!1);
  $e(() => i(!0), []);
  const a = n || o && ((s = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : s.body);
  return a ? Xd.createPortal(/* @__PURE__ */ l(fe.div, { ...r, ref: t }), a) : null;
});
ci.displayName = G0;
const vc = /* @__PURE__ */ new Set();
function ui(e, t, n) {
  e || vc.has(t) || (console.warn(t), vc.add(t));
}
function K0(e) {
  if (typeof Proxy > "u")
    return e;
  const t = /* @__PURE__ */ new Map(), n = (...r) => (process.env.NODE_ENV !== "production" && ui(!1, "motion() is deprecated. Use motion.create() instead."), e(...r));
  return new Proxy(n, {
    /**
     * Called when `motion` is referenced with a prop: `motion.div`, `motion.input` etc.
     * The prop name is passed through as `key` and we can use that to generate a `motion`
     * DOM component with that name.
     */
    get: (r, o) => o === "create" ? e : (t.has(o) || t.set(o, e(o)), t.get(o))
  });
}
function kr(e) {
  return e !== null && typeof e == "object" && typeof e.start == "function";
}
const Ra = (e) => Array.isArray(e);
function Jd(e, t) {
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
function Er(e) {
  return typeof e == "string" || Array.isArray(e);
}
function yc(e) {
  const t = [{}, {}];
  return e == null || e.values.forEach((n, r) => {
    t[0][r] = n.get(), t[1][r] = n.getVelocity();
  }), t;
}
function gs(e, t, n, r) {
  if (typeof t == "function") {
    const [o, i] = yc(r);
    t = t(n !== void 0 ? n : e.custom, o, i);
  }
  if (typeof t == "string" && (t = e.variants && e.variants[t]), typeof t == "function") {
    const [o, i] = yc(r);
    t = t(n !== void 0 ? n : e.custom, o, i);
  }
  return t;
}
function di(e, t, n) {
  const r = e.getProps();
  return gs(r, t, n !== void 0 ? n : r.custom, e);
}
const vs = [
  "animate",
  "whileInView",
  "whileFocus",
  "whileHover",
  "whileTap",
  "whileDrag",
  "exit"
], ys = ["initial", ...vs], jr = [
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
], cn = new Set(jr), Dt = (e) => e * 1e3, Gt = (e) => e / 1e3, Y0 = {
  type: "spring",
  stiffness: 500,
  damping: 25,
  restSpeed: 10
}, X0 = (e) => ({
  type: "spring",
  stiffness: 550,
  damping: e === 0 ? 2 * Math.sqrt(550) : 30,
  restSpeed: 10
}), q0 = {
  type: "keyframes",
  duration: 0.8
}, Z0 = {
  type: "keyframes",
  ease: [0.25, 0.1, 0.35, 1],
  duration: 0.3
}, Q0 = (e, { keyframes: t }) => t.length > 2 ? q0 : cn.has(e) ? e.startsWith("scale") ? X0(t[1]) : Y0 : Z0;
function J0({ when: e, delay: t, delayChildren: n, staggerChildren: r, staggerDirection: o, repeat: i, repeatType: a, repeatDelay: s, from: c, elapsed: u, ...d }) {
  return !!Object.keys(d).length;
}
function bs(e, t) {
  return e[t] || e.default || e;
}
const e1 = {
  skipAnimations: !1,
  useManualTiming: !1
}, t1 = (e) => e !== null;
function fi(e, { repeat: t, repeatType: n = "loop" }, r) {
  const o = e.filter(t1), i = t && n !== "loop" && t % 2 === 1 ? 0 : o.length - 1;
  return !i || r === void 0 ? o[i] : r;
}
const Ue = (e) => e;
function n1(e) {
  let t = /* @__PURE__ */ new Set(), n = /* @__PURE__ */ new Set(), r = !1, o = !1;
  const i = /* @__PURE__ */ new WeakSet();
  let a = {
    delta: 0,
    timestamp: 0,
    isProcessing: !1
  };
  function s(u) {
    i.has(u) && (c.schedule(u), e()), u(a);
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
      if (a = u, r) {
        o = !0;
        return;
      }
      r = !0, [t, n] = [n, t], n.clear(), t.forEach(s), r = !1, o && (o = !1, c.process(u));
    }
  };
  return c;
}
const fo = [
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
], r1 = 40;
function ef(e, t) {
  let n = !1, r = !0;
  const o = {
    delta: 0,
    timestamp: 0,
    isProcessing: !1
  }, i = () => n = !0, a = fo.reduce((w, b) => (w[b] = n1(i), w), {}), { read: s, resolveKeyframes: c, update: u, preRender: d, render: f, postRender: h } = a, g = () => {
    const w = performance.now();
    n = !1, o.delta = r ? 1e3 / 60 : Math.max(Math.min(w - o.timestamp, r1), 1), o.timestamp = w, o.isProcessing = !0, s.process(o), c.process(o), u.process(o), d.process(o), f.process(o), h.process(o), o.isProcessing = !1, n && t && (r = !1, e(g));
  }, p = () => {
    n = !0, r = !0, o.isProcessing || e(g);
  };
  return { schedule: fo.reduce((w, b) => {
    const x = a[b];
    return w[b] = (P, T = !1, R = !1) => (n || p(), x.schedule(P, T, R)), w;
  }, {}), cancel: (w) => {
    for (let b = 0; b < fo.length; b++)
      a[fo[b]].cancel(w);
  }, state: o, steps: a };
}
const { schedule: we, cancel: Zt, state: je, steps: Zi } = ef(typeof requestAnimationFrame < "u" ? requestAnimationFrame : Ue, !0), tf = (e) => /^0[^.\s]+$/u.test(e);
function o1(e) {
  return typeof e == "number" ? e === 0 : e !== null ? e === "none" || e === "0" || tf(e) : !0;
}
let er = Ue, Qt = Ue;
process.env.NODE_ENV !== "production" && (er = (e, t) => {
  !e && typeof console < "u" && console.warn(t);
}, Qt = (e, t) => {
  if (!e)
    throw new Error(t);
});
const nf = (e) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e), rf = (e) => (t) => typeof t == "string" && t.startsWith(e), of = rf("--"), i1 = rf("var(--"), ws = (e) => i1(e) ? a1.test(e.split("/*")[0].trim()) : !1, a1 = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu, s1 = (
  // eslint-disable-next-line redos-detector/no-unsafe-regex -- false positive, as it can match a lot of words
  /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u
);
function l1(e) {
  const t = s1.exec(e);
  if (!t)
    return [,];
  const [, n, r, o] = t;
  return [`--${n ?? r}`, o];
}
const c1 = 4;
function af(e, t, n = 1) {
  Qt(n <= c1, `Max CSS variable fallback depth detected in property "${e}". This may indicate a circular fallback dependency.`);
  const [r, o] = l1(e);
  if (!r)
    return;
  const i = window.getComputedStyle(t).getPropertyValue(r);
  if (i) {
    const a = i.trim();
    return nf(a) ? parseFloat(a) : a;
  }
  return ws(o) ? af(o, t, n + 1) : o;
}
const sn = (e, t, n) => n > t ? t : n < e ? e : n, tr = {
  test: (e) => typeof e == "number",
  parse: parseFloat,
  transform: (e) => e
}, vr = {
  ...tr,
  transform: (e) => sn(0, 1, e)
}, ho = {
  ...tr,
  default: 1
}, yr = (e) => Math.round(e * 1e5) / 1e5, xs = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu, u1 = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu, d1 = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu;
function Ur(e) {
  return typeof e == "string";
}
function f1(e) {
  return e == null;
}
const Hr = (e) => ({
  test: (t) => Ur(t) && t.endsWith(e) && t.split(" ").length === 1,
  parse: parseFloat,
  transform: (t) => `${t}${e}`
}), rn = /* @__PURE__ */ Hr("deg"), _t = /* @__PURE__ */ Hr("%"), he = /* @__PURE__ */ Hr("px"), h1 = /* @__PURE__ */ Hr("vh"), m1 = /* @__PURE__ */ Hr("vw"), bc = {
  ..._t,
  parse: (e) => _t.parse(e) / 100,
  transform: (e) => _t.transform(e * 100)
}, p1 = /* @__PURE__ */ new Set([
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
]), wc = (e) => e === tr || e === he, xc = (e, t) => parseFloat(e.split(", ")[t]), Cc = (e, t) => (n, { transform: r }) => {
  if (r === "none" || !r)
    return 0;
  const o = r.match(/^matrix3d\((.+)\)$/u);
  if (o)
    return xc(o[1], t);
  {
    const i = r.match(/^matrix\((.+)\)$/u);
    return i ? xc(i[1], e) : 0;
  }
}, g1 = /* @__PURE__ */ new Set(["x", "y", "z"]), v1 = jr.filter((e) => !g1.has(e));
function y1(e) {
  const t = [];
  return v1.forEach((n) => {
    const r = e.getValue(n);
    r !== void 0 && (t.push([n, r.get()]), r.set(n.startsWith("scale") ? 1 : 0));
  }), t;
}
const Yn = {
  // Dimensions
  width: ({ x: e }, { paddingLeft: t = "0", paddingRight: n = "0" }) => e.max - e.min - parseFloat(t) - parseFloat(n),
  height: ({ y: e }, { paddingTop: t = "0", paddingBottom: n = "0" }) => e.max - e.min - parseFloat(t) - parseFloat(n),
  top: (e, { top: t }) => parseFloat(t),
  left: (e, { left: t }) => parseFloat(t),
  bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
  right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
  // Transform
  x: Cc(4, 13),
  y: Cc(5, 14)
};
Yn.translateX = Yn.x;
Yn.translateY = Yn.y;
const sf = (e) => (t) => t.test(e), b1 = {
  test: (e) => e === "auto",
  parse: (e) => e
}, lf = [tr, he, _t, rn, m1, h1, b1], Sc = (e) => lf.find(sf(e)), wn = /* @__PURE__ */ new Set();
let Ia = !1, La = !1;
function cf() {
  if (La) {
    const e = Array.from(wn).filter((r) => r.needsMeasurement), t = new Set(e.map((r) => r.element)), n = /* @__PURE__ */ new Map();
    t.forEach((r) => {
      const o = y1(r);
      o.length && (n.set(r, o), r.render());
    }), e.forEach((r) => r.measureInitialState()), t.forEach((r) => {
      r.render();
      const o = n.get(r);
      o && o.forEach(([i, a]) => {
        var s;
        (s = r.getValue(i)) === null || s === void 0 || s.set(a);
      });
    }), e.forEach((r) => r.measureEndState()), e.forEach((r) => {
      r.suspendedScrollY !== void 0 && window.scrollTo(0, r.suspendedScrollY);
    });
  }
  La = !1, Ia = !1, wn.forEach((e) => e.complete()), wn.clear();
}
function uf() {
  wn.forEach((e) => {
    e.readKeyframes(), e.needsMeasurement && (La = !0);
  });
}
function w1() {
  uf(), cf();
}
class Cs {
  constructor(t, n, r, o, i, a = !1) {
    this.isComplete = !1, this.isAsync = !1, this.needsMeasurement = !1, this.isScheduled = !1, this.unresolvedKeyframes = [...t], this.onComplete = n, this.name = r, this.motionValue = o, this.element = i, this.isAsync = a;
  }
  scheduleResolve() {
    this.isScheduled = !0, this.isAsync ? (wn.add(this), Ia || (Ia = !0, we.read(uf), we.resolveKeyframes(cf))) : (this.readKeyframes(), this.complete());
  }
  readKeyframes() {
    const { unresolvedKeyframes: t, name: n, element: r, motionValue: o } = this;
    for (let i = 0; i < t.length; i++)
      if (t[i] === null)
        if (i === 0) {
          const a = o == null ? void 0 : o.get(), s = t[t.length - 1];
          if (a !== void 0)
            t[0] = a;
          else if (r && n) {
            const c = r.readValue(n, s);
            c != null && (t[0] = c);
          }
          t[0] === void 0 && (t[0] = s), o && a === void 0 && o.set(t[0]);
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
    this.isComplete = !0, this.onComplete(this.unresolvedKeyframes, this.finalKeyframe), wn.delete(this);
  }
  cancel() {
    this.isComplete || (this.isScheduled = !1, wn.delete(this));
  }
  resume() {
    this.isComplete || this.scheduleResolve();
  }
}
const Ss = (e, t) => (n) => !!(Ur(n) && d1.test(n) && n.startsWith(e) || t && !f1(n) && Object.prototype.hasOwnProperty.call(n, t)), df = (e, t, n) => (r) => {
  if (!Ur(r))
    return r;
  const [o, i, a, s] = r.match(xs);
  return {
    [e]: parseFloat(o),
    [t]: parseFloat(i),
    [n]: parseFloat(a),
    alpha: s !== void 0 ? parseFloat(s) : 1
  };
}, x1 = (e) => sn(0, 255, e), Qi = {
  ...tr,
  transform: (e) => Math.round(x1(e))
}, bn = {
  test: /* @__PURE__ */ Ss("rgb", "red"),
  parse: /* @__PURE__ */ df("red", "green", "blue"),
  transform: ({ red: e, green: t, blue: n, alpha: r = 1 }) => "rgba(" + Qi.transform(e) + ", " + Qi.transform(t) + ", " + Qi.transform(n) + ", " + yr(vr.transform(r)) + ")"
};
function C1(e) {
  let t = "", n = "", r = "", o = "";
  return e.length > 5 ? (t = e.substring(1, 3), n = e.substring(3, 5), r = e.substring(5, 7), o = e.substring(7, 9)) : (t = e.substring(1, 2), n = e.substring(2, 3), r = e.substring(3, 4), o = e.substring(4, 5), t += t, n += n, r += r, o += o), {
    red: parseInt(t, 16),
    green: parseInt(n, 16),
    blue: parseInt(r, 16),
    alpha: o ? parseInt(o, 16) / 255 : 1
  };
}
const Oa = {
  test: /* @__PURE__ */ Ss("#"),
  parse: C1,
  transform: bn.transform
}, Vn = {
  test: /* @__PURE__ */ Ss("hsl", "hue"),
  parse: /* @__PURE__ */ df("hue", "saturation", "lightness"),
  transform: ({ hue: e, saturation: t, lightness: n, alpha: r = 1 }) => "hsla(" + Math.round(e) + ", " + _t.transform(yr(t)) + ", " + _t.transform(yr(n)) + ", " + yr(vr.transform(r)) + ")"
}, ze = {
  test: (e) => bn.test(e) || Oa.test(e) || Vn.test(e),
  parse: (e) => bn.test(e) ? bn.parse(e) : Vn.test(e) ? Vn.parse(e) : Oa.parse(e),
  transform: (e) => Ur(e) ? e : e.hasOwnProperty("red") ? bn.transform(e) : Vn.transform(e)
};
function S1(e) {
  var t, n;
  return isNaN(e) && Ur(e) && (((t = e.match(xs)) === null || t === void 0 ? void 0 : t.length) || 0) + (((n = e.match(u1)) === null || n === void 0 ? void 0 : n.length) || 0) > 0;
}
const ff = "number", hf = "color", N1 = "var", M1 = "var(", Nc = "${}", P1 = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function Ar(e) {
  const t = e.toString(), n = [], r = {
    color: [],
    number: [],
    var: []
  }, o = [];
  let i = 0;
  const s = t.replace(P1, (c) => (ze.test(c) ? (r.color.push(i), o.push(hf), n.push(ze.parse(c))) : c.startsWith(M1) ? (r.var.push(i), o.push(N1), n.push(c)) : (r.number.push(i), o.push(ff), n.push(parseFloat(c))), ++i, Nc)).split(Nc);
  return { values: n, split: s, indexes: r, types: o };
}
function mf(e) {
  return Ar(e).values;
}
function pf(e) {
  const { split: t, types: n } = Ar(e), r = t.length;
  return (o) => {
    let i = "";
    for (let a = 0; a < r; a++)
      if (i += t[a], o[a] !== void 0) {
        const s = n[a];
        s === ff ? i += yr(o[a]) : s === hf ? i += ze.transform(o[a]) : i += o[a];
      }
    return i;
  };
}
const T1 = (e) => typeof e == "number" ? 0 : e;
function k1(e) {
  const t = mf(e);
  return pf(e)(t.map(T1));
}
const ln = {
  test: S1,
  parse: mf,
  createTransformer: pf,
  getAnimatableNone: k1
}, E1 = /* @__PURE__ */ new Set(["brightness", "contrast", "saturate", "opacity"]);
function A1(e) {
  const [t, n] = e.slice(0, -1).split("(");
  if (t === "drop-shadow")
    return e;
  const [r] = n.match(xs) || [];
  if (!r)
    return e;
  const o = n.replace(r, "");
  let i = E1.has(t) ? 1 : 0;
  return r !== n && (i *= 100), t + "(" + i + o + ")";
}
const D1 = /\b([a-z-]*)\(.*?\)/gu, Fa = {
  ...ln,
  getAnimatableNone: (e) => {
    const t = e.match(D1);
    return t ? t.map(A1).join(" ") : e;
  }
}, Mc = {
  ...tr,
  transform: Math.round
}, Ns = {
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
  rotate: rn,
  rotateX: rn,
  rotateY: rn,
  rotateZ: rn,
  scale: ho,
  scaleX: ho,
  scaleY: ho,
  scaleZ: ho,
  skew: rn,
  skewX: rn,
  skewY: rn,
  distance: he,
  translateX: he,
  translateY: he,
  translateZ: he,
  x: he,
  y: he,
  z: he,
  perspective: he,
  transformPerspective: he,
  opacity: vr,
  originX: bc,
  originY: bc,
  originZ: he,
  // Misc
  zIndex: Mc,
  backgroundPositionX: he,
  backgroundPositionY: he,
  // SVG
  fillOpacity: vr,
  strokeOpacity: vr,
  numOctaves: Mc
}, _1 = {
  ...Ns,
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
  filter: Fa,
  WebkitFilter: Fa
}, Ms = (e) => _1[e];
function gf(e, t) {
  let n = Ms(e);
  return n !== Fa && (n = ln), n.getAnimatableNone ? n.getAnimatableNone(t) : void 0;
}
const R1 = /* @__PURE__ */ new Set(["auto", "none", "0"]);
function I1(e, t, n) {
  let r = 0, o;
  for (; r < e.length && !o; ) {
    const i = e[r];
    typeof i == "string" && !R1.has(i) && Ar(i).values.length && (o = e[r]), r++;
  }
  if (o && n)
    for (const i of t)
      e[i] = gf(n, o);
}
class vf extends Cs {
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
      if (typeof u == "string" && (u = u.trim(), ws(u))) {
        const d = af(u, n.current);
        d !== void 0 && (t[c] = d), c === t.length - 1 && (this.finalKeyframe = u);
      }
    }
    if (this.resolveNoneKeyframes(), !p1.has(r) || t.length !== 2)
      return;
    const [o, i] = t, a = Sc(o), s = Sc(i);
    if (a !== s)
      if (wc(a) && wc(s))
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
      o1(t[o]) && r.push(o);
    r.length && I1(t, r, n);
  }
  measureInitialState() {
    const { element: t, unresolvedKeyframes: n, name: r } = this;
    if (!t || !t.current)
      return;
    r === "height" && (this.suspendedScrollY = window.pageYOffset), this.measuredOrigin = Yn[r](t.measureViewportBox(), window.getComputedStyle(t.current)), n[0] = this.measuredOrigin;
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
    const a = o.length - 1, s = o[a];
    o[a] = Yn[r](n.measureViewportBox(), window.getComputedStyle(n.current)), s !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = s), !((t = this.removedTransforms) === null || t === void 0) && t.length && this.removedTransforms.forEach(([c, u]) => {
      n.getValue(c).set(u);
    }), this.resolveNoneKeyframes();
  }
}
function yf(e) {
  let t;
  return () => (t === void 0 && (t = e()), t);
}
let No;
function L1() {
  No = void 0;
}
const Kt = {
  now: () => (No === void 0 && Kt.set(je.isProcessing || e1.useManualTiming ? je.timestamp : performance.now()), No),
  set: (e) => {
    No = e, queueMicrotask(L1);
  }
}, Pc = (e, t) => t === "zIndex" ? !1 : !!(typeof e == "number" || Array.isArray(e) || typeof e == "string" && // It's animatable if we have a string
(ln.test(e) || e === "0") && // And it contains numbers and/or colors
!e.startsWith("url("));
function O1(e) {
  const t = e[0];
  if (e.length === 1)
    return !0;
  for (let n = 0; n < e.length; n++)
    if (e[n] !== t)
      return !0;
}
function F1(e, t, n, r) {
  const o = e[0];
  if (o === null)
    return !1;
  if (t === "display" || t === "visibility")
    return !0;
  const i = e[e.length - 1], a = Pc(o, t), s = Pc(i, t);
  return er(a === s, `You are trying to animate ${t} from "${o}" to "${i}". ${o} is not an animatable value - to enable this animation set ${o} to a value animatable to ${i} via the \`style\` property.`), !a || !s ? !1 : O1(e) || n === "spring" && r;
}
const V1 = 40;
class bf {
  constructor({ autoplay: t = !0, delay: n = 0, type: r = "keyframes", repeat: o = 0, repeatDelay: i = 0, repeatType: a = "loop", ...s }) {
    this.isStopped = !1, this.hasAttemptedResolve = !1, this.createdAt = Kt.now(), this.options = {
      autoplay: t,
      delay: n,
      type: r,
      repeat: o,
      repeatDelay: i,
      repeatType: a,
      ...s
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
    return this.resolvedAt ? this.resolvedAt - this.createdAt > V1 ? this.resolvedAt : this.createdAt : this.createdAt;
  }
  /**
   * A getter for resolved data. If keyframes are not yet resolved, accessing
   * this.resolved will synchronously flush all pending keyframe resolvers.
   * This is a deoptimisation, but at its worst still batches read/writes.
   */
  get resolved() {
    return !this._resolved && !this.hasAttemptedResolve && w1(), this._resolved;
  }
  /**
   * A method to be called when the keyframes resolver completes. This method
   * will check if its possible to run the animation and, if not, skip it.
   * Otherwise, it will call initPlayback on the implementing class.
   */
  onKeyframesResolved(t, n) {
    this.resolvedAt = Kt.now(), this.hasAttemptedResolve = !0;
    const { name: r, type: o, velocity: i, delay: a, onComplete: s, onUpdate: c, isGenerator: u } = this.options;
    if (!u && !F1(t, r, o, i))
      if (a)
        this.options.duration = 0;
      else {
        c == null || c(fi(t, this.options, n)), s == null || s(), this.resolveFinishedPromise();
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
function wf(e, t) {
  return t ? e * (1e3 / t) : 0;
}
const B1 = 5;
function xf(e, t, n) {
  const r = Math.max(t - B1, 0);
  return wf(n - e(r), t - r);
}
const Ji = 1e-3, W1 = 0.01, Tc = 10, $1 = 0.05, j1 = 1;
function U1({ duration: e = 800, bounce: t = 0.25, velocity: n = 0, mass: r = 1 }) {
  let o, i;
  er(e <= Dt(Tc), "Spring duration must be 10 seconds or less");
  let a = 1 - t;
  a = sn($1, j1, a), e = sn(W1, Tc, Gt(e)), a < 1 ? (o = (u) => {
    const d = u * a, f = d * e, h = d - n, g = Va(u, a), p = Math.exp(-f);
    return Ji - h / g * p;
  }, i = (u) => {
    const f = u * a * e, h = f * n + n, g = Math.pow(a, 2) * Math.pow(u, 2) * e, p = Math.exp(-f), v = Va(Math.pow(u, 2), a);
    return (-o(u) + Ji > 0 ? -1 : 1) * ((h - g) * p) / v;
  }) : (o = (u) => {
    const d = Math.exp(-u * e), f = (u - n) * e + 1;
    return -Ji + d * f;
  }, i = (u) => {
    const d = Math.exp(-u * e), f = (n - u) * (e * e);
    return d * f;
  });
  const s = 5 / e, c = z1(o, i, s);
  if (e = Dt(e), isNaN(c))
    return {
      stiffness: 100,
      damping: 10,
      duration: e
    };
  {
    const u = Math.pow(c, 2) * r;
    return {
      stiffness: u,
      damping: a * 2 * Math.sqrt(r * u),
      duration: e
    };
  }
}
const H1 = 12;
function z1(e, t, n) {
  let r = n;
  for (let o = 1; o < H1; o++)
    r = r - e(r) / t(r);
  return r;
}
function Va(e, t) {
  return e * Math.sqrt(1 - t * t);
}
const G1 = ["duration", "bounce"], K1 = ["stiffness", "damping", "mass"];
function kc(e, t) {
  return t.some((n) => e[n] !== void 0);
}
function Y1(e) {
  let t = {
    velocity: 0,
    stiffness: 100,
    damping: 10,
    mass: 1,
    isResolvedFromDuration: !1,
    ...e
  };
  if (!kc(e, K1) && kc(e, G1)) {
    const n = U1(e);
    t = {
      ...t,
      ...n,
      mass: 1
    }, t.isResolvedFromDuration = !0;
  }
  return t;
}
function Cf({ keyframes: e, restDelta: t, restSpeed: n, ...r }) {
  const o = e[0], i = e[e.length - 1], a = { done: !1, value: o }, { stiffness: s, damping: c, mass: u, duration: d, velocity: f, isResolvedFromDuration: h } = Y1({
    ...r,
    velocity: -Gt(r.velocity || 0)
  }), g = f || 0, p = c / (2 * Math.sqrt(s * u)), v = i - o, y = Gt(Math.sqrt(s / u)), w = Math.abs(v) < 5;
  n || (n = w ? 0.01 : 2), t || (t = w ? 5e-3 : 0.5);
  let b;
  if (p < 1) {
    const x = Va(y, p);
    b = (P) => {
      const T = Math.exp(-p * y * P);
      return i - T * ((g + p * y * v) / x * Math.sin(x * P) + v * Math.cos(x * P));
    };
  } else if (p === 1)
    b = (x) => i - Math.exp(-y * x) * (v + (g + y * v) * x);
  else {
    const x = y * Math.sqrt(p * p - 1);
    b = (P) => {
      const T = Math.exp(-p * y * P), R = Math.min(x * P, 300);
      return i - T * ((g + p * y * v) * Math.sinh(R) + x * v * Math.cosh(R)) / x;
    };
  }
  return {
    calculatedDuration: h && d || null,
    next: (x) => {
      const P = b(x);
      if (h)
        a.done = x >= d;
      else {
        let T = 0;
        p < 1 && (T = x === 0 ? Dt(g) : xf(b, x, P));
        const R = Math.abs(T) <= n, F = Math.abs(i - P) <= t;
        a.done = R && F;
      }
      return a.value = a.done ? i : P, a;
    }
  };
}
function Ec({ keyframes: e, velocity: t = 0, power: n = 0.8, timeConstant: r = 325, bounceDamping: o = 10, bounceStiffness: i = 500, modifyTarget: a, min: s, max: c, restDelta: u = 0.5, restSpeed: d }) {
  const f = e[0], h = {
    done: !1,
    value: f
  }, g = (D) => s !== void 0 && D < s || c !== void 0 && D > c, p = (D) => s === void 0 ? c : c === void 0 || Math.abs(s - D) < Math.abs(c - D) ? s : c;
  let v = n * t;
  const y = f + v, w = a === void 0 ? y : a(y);
  w !== y && (v = w - f);
  const b = (D) => -v * Math.exp(-D / r), x = (D) => w + b(D), P = (D) => {
    const _ = b(D), j = x(D);
    h.done = Math.abs(_) <= u, h.value = h.done ? w : j;
  };
  let T, R;
  const F = (D) => {
    g(h.value) && (T = D, R = Cf({
      keyframes: [h.value, p(h.value)],
      velocity: xf(x, D, h.value),
      // TODO: This should be passing * 1000
      damping: o,
      stiffness: i,
      restDelta: u,
      restSpeed: d
    }));
  };
  return F(0), {
    calculatedDuration: null,
    next: (D) => {
      let _ = !1;
      return !R && T === void 0 && (_ = !0, P(D), F(D)), T !== void 0 && D >= T ? R.next(D - T) : (!_ && P(D), h);
    }
  };
}
const Sf = (e, t, n) => (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e, X1 = 1e-7, q1 = 12;
function Z1(e, t, n, r, o) {
  let i, a, s = 0;
  do
    a = t + (n - t) / 2, i = Sf(a, r, o) - e, i > 0 ? n = a : t = a;
  while (Math.abs(i) > X1 && ++s < q1);
  return a;
}
function zr(e, t, n, r) {
  if (e === t && n === r)
    return Ue;
  const o = (i) => Z1(i, 0, 1, e, n);
  return (i) => i === 0 || i === 1 ? i : Sf(o(i), t, r);
}
const Q1 = /* @__PURE__ */ zr(0.42, 0, 1, 1), J1 = /* @__PURE__ */ zr(0, 0, 0.58, 1), Nf = /* @__PURE__ */ zr(0.42, 0, 0.58, 1), eb = (e) => Array.isArray(e) && typeof e[0] != "number", Mf = (e) => (t) => t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2, Pf = (e) => (t) => 1 - e(1 - t), Ps = (e) => 1 - Math.sin(Math.acos(e)), Tf = Pf(Ps), tb = Mf(Ps), kf = /* @__PURE__ */ zr(0.33, 1.53, 0.69, 0.99), Ts = /* @__PURE__ */ Pf(kf), nb = /* @__PURE__ */ Mf(Ts), rb = (e) => (e *= 2) < 1 ? 0.5 * Ts(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1))), Ac = {
  linear: Ue,
  easeIn: Q1,
  easeInOut: Nf,
  easeOut: J1,
  circIn: Ps,
  circInOut: tb,
  circOut: Tf,
  backIn: Ts,
  backInOut: nb,
  backOut: kf,
  anticipate: rb
}, Dc = (e) => {
  if (Array.isArray(e)) {
    Qt(e.length === 4, "Cubic bezier arrays must contain four numerical values.");
    const [t, n, r, o] = e;
    return zr(t, n, r, o);
  } else if (typeof e == "string")
    return Qt(Ac[e] !== void 0, `Invalid easing type '${e}'`), Ac[e];
  return e;
}, ob = (e, t) => (n) => t(e(n)), Yt = (...e) => e.reduce(ob), Dr = (e, t, n) => {
  const r = t - e;
  return r === 0 ? 1 : (n - e) / r;
}, De = (e, t, n) => e + (t - e) * n;
function ea(e, t, n) {
  return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e;
}
function ib({ hue: e, saturation: t, lightness: n, alpha: r }) {
  e /= 360, t /= 100, n /= 100;
  let o = 0, i = 0, a = 0;
  if (!t)
    o = i = a = n;
  else {
    const s = n < 0.5 ? n * (1 + t) : n + t - n * t, c = 2 * n - s;
    o = ea(c, s, e + 1 / 3), i = ea(c, s, e), a = ea(c, s, e - 1 / 3);
  }
  return {
    red: Math.round(o * 255),
    green: Math.round(i * 255),
    blue: Math.round(a * 255),
    alpha: r
  };
}
function Oo(e, t) {
  return (n) => n > 0 ? t : e;
}
const ta = (e, t, n) => {
  const r = e * e, o = n * (t * t - r) + r;
  return o < 0 ? 0 : Math.sqrt(o);
}, ab = [Oa, bn, Vn], sb = (e) => ab.find((t) => t.test(e));
function _c(e) {
  const t = sb(e);
  if (er(!!t, `'${e}' is not an animatable color. Use the equivalent color code instead.`), !t)
    return !1;
  let n = t.parse(e);
  return t === Vn && (n = ib(n)), n;
}
const Rc = (e, t) => {
  const n = _c(e), r = _c(t);
  if (!n || !r)
    return Oo(e, t);
  const o = { ...n };
  return (i) => (o.red = ta(n.red, r.red, i), o.green = ta(n.green, r.green, i), o.blue = ta(n.blue, r.blue, i), o.alpha = De(n.alpha, r.alpha, i), bn.transform(o));
}, Ba = /* @__PURE__ */ new Set(["none", "hidden"]);
function lb(e, t) {
  return Ba.has(e) ? (n) => n <= 0 ? e : t : (n) => n >= 1 ? t : e;
}
function cb(e, t) {
  return (n) => De(e, t, n);
}
function ks(e) {
  return typeof e == "number" ? cb : typeof e == "string" ? ws(e) ? Oo : ze.test(e) ? Rc : fb : Array.isArray(e) ? Ef : typeof e == "object" ? ze.test(e) ? Rc : ub : Oo;
}
function Ef(e, t) {
  const n = [...e], r = n.length, o = e.map((i, a) => ks(i)(i, t[a]));
  return (i) => {
    for (let a = 0; a < r; a++)
      n[a] = o[a](i);
    return n;
  };
}
function ub(e, t) {
  const n = { ...e, ...t }, r = {};
  for (const o in n)
    e[o] !== void 0 && t[o] !== void 0 && (r[o] = ks(e[o])(e[o], t[o]));
  return (o) => {
    for (const i in r)
      n[i] = r[i](o);
    return n;
  };
}
function db(e, t) {
  var n;
  const r = [], o = { color: 0, var: 0, number: 0 };
  for (let i = 0; i < t.values.length; i++) {
    const a = t.types[i], s = e.indexes[a][o[a]], c = (n = e.values[s]) !== null && n !== void 0 ? n : 0;
    r[i] = c, o[a]++;
  }
  return r;
}
const fb = (e, t) => {
  const n = ln.createTransformer(t), r = Ar(e), o = Ar(t);
  return r.indexes.var.length === o.indexes.var.length && r.indexes.color.length === o.indexes.color.length && r.indexes.number.length >= o.indexes.number.length ? Ba.has(e) && !o.values.length || Ba.has(t) && !r.values.length ? lb(e, t) : Yt(Ef(db(r, o), o.values), n) : (er(!0, `Complex values '${e}' and '${t}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`), Oo(e, t));
};
function Af(e, t, n) {
  return typeof e == "number" && typeof t == "number" && typeof n == "number" ? De(e, t, n) : ks(e)(e, t);
}
function hb(e, t, n) {
  const r = [], o = n || Af, i = e.length - 1;
  for (let a = 0; a < i; a++) {
    let s = o(e[a], e[a + 1]);
    if (t) {
      const c = Array.isArray(t) ? t[a] || Ue : t;
      s = Yt(c, s);
    }
    r.push(s);
  }
  return r;
}
function mb(e, t, { clamp: n = !0, ease: r, mixer: o } = {}) {
  const i = e.length;
  if (Qt(i === t.length, "Both input and output ranges must be the same length"), i === 1)
    return () => t[0];
  if (i === 2 && e[0] === e[1])
    return () => t[1];
  e[0] > e[i - 1] && (e = [...e].reverse(), t = [...t].reverse());
  const a = hb(t, r, o), s = a.length, c = (u) => {
    let d = 0;
    if (s > 1)
      for (; d < e.length - 2 && !(u < e[d + 1]); d++)
        ;
    const f = Dr(e[d], e[d + 1], u);
    return a[d](f);
  };
  return n ? (u) => c(sn(e[0], e[i - 1], u)) : c;
}
function pb(e, t) {
  const n = e[e.length - 1];
  for (let r = 1; r <= t; r++) {
    const o = Dr(0, t, r);
    e.push(De(n, 1, o));
  }
}
function gb(e) {
  const t = [0];
  return pb(t, e.length - 1), t;
}
function vb(e, t) {
  return e.map((n) => n * t);
}
function yb(e, t) {
  return e.map(() => t || Nf).splice(0, e.length - 1);
}
function Fo({ duration: e = 300, keyframes: t, times: n, ease: r = "easeInOut" }) {
  const o = eb(r) ? r.map(Dc) : Dc(r), i = {
    done: !1,
    value: t[0]
  }, a = vb(
    // Only use the provided offsets if they're the correct length
    // TODO Maybe we should warn here if there's a length mismatch
    n && n.length === t.length ? n : gb(t),
    e
  ), s = mb(a, t, {
    ease: Array.isArray(o) ? o : yb(t, o)
  });
  return {
    calculatedDuration: e,
    next: (c) => (i.value = s(c), i.done = c >= e, i)
  };
}
const Ic = 2e4;
function bb(e) {
  let t = 0;
  const n = 50;
  let r = e.next(t);
  for (; !r.done && t < Ic; )
    t += n, r = e.next(t);
  return t >= Ic ? 1 / 0 : t;
}
const wb = (e) => {
  const t = ({ timestamp: n }) => e(n);
  return {
    start: () => we.update(t, !0),
    stop: () => Zt(t),
    /**
     * If we're processing this frame we can use the
     * framelocked timestamp to keep things in sync.
     */
    now: () => je.isProcessing ? je.timestamp : Kt.now()
  };
}, xb = {
  decay: Ec,
  inertia: Ec,
  tween: Fo,
  keyframes: Fo,
  spring: Cf
}, Cb = (e) => e / 100;
class Es extends bf {
  constructor(t) {
    super(t), this.holdTime = null, this.cancelTime = null, this.currentTime = 0, this.playbackSpeed = 1, this.pendingPlayState = "running", this.startTime = null, this.state = "idle", this.stop = () => {
      if (this.resolver.cancel(), this.isStopped = !0, this.state === "idle")
        return;
      this.teardown();
      const { onStop: c } = this.options;
      c && c();
    };
    const { name: n, motionValue: r, element: o, keyframes: i } = this.options, a = (o == null ? void 0 : o.KeyframeResolver) || Cs, s = (c, u) => this.onKeyframesResolved(c, u);
    this.resolver = new a(i, s, n, r, o), this.resolver.scheduleResolve();
  }
  initPlayback(t) {
    const { type: n = "keyframes", repeat: r = 0, repeatDelay: o = 0, repeatType: i, velocity: a = 0 } = this.options, s = xb[n] || Fo;
    let c, u;
    s !== Fo && typeof t[0] != "number" && (process.env.NODE_ENV !== "production" && Qt(t.length === 2, `Only two keyframes currently supported with spring and inertia animations. Trying to animate ${t}`), c = Yt(Cb, Af(t[0], t[1])), t = [0, 100]);
    const d = s({ ...this.options, keyframes: t });
    i === "mirror" && (u = s({
      ...this.options,
      keyframes: [...t].reverse(),
      velocity: -a
    })), d.calculatedDuration === null && (d.calculatedDuration = bb(d));
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
      const { keyframes: D } = this.options;
      return { done: !0, value: D[D.length - 1] };
    }
    const { finalKeyframe: o, generator: i, mirroredGenerator: a, mapPercentToKeyframes: s, keyframes: c, calculatedDuration: u, totalDuration: d, resolvedDuration: f } = r;
    if (this.startTime === null)
      return i.next(0);
    const { delay: h, repeat: g, repeatType: p, repeatDelay: v, onUpdate: y } = this.options;
    this.speed > 0 ? this.startTime = Math.min(this.startTime, t) : this.speed < 0 && (this.startTime = Math.min(t - d / this.speed, this.startTime)), n ? this.currentTime = t : this.holdTime !== null ? this.currentTime = this.holdTime : this.currentTime = Math.round(t - this.startTime) * this.speed;
    const w = this.currentTime - h * (this.speed >= 0 ? 1 : -1), b = this.speed >= 0 ? w < 0 : w > d;
    this.currentTime = Math.max(w, 0), this.state === "finished" && this.holdTime === null && (this.currentTime = d);
    let x = this.currentTime, P = i;
    if (g) {
      const D = Math.min(this.currentTime, d) / f;
      let _ = Math.floor(D), j = D % 1;
      !j && D >= 1 && (j = 1), j === 1 && _--, _ = Math.min(_, g + 1), !!(_ % 2) && (p === "reverse" ? (j = 1 - j, v && (j -= v / f)) : p === "mirror" && (P = a)), x = sn(0, 1, j) * f;
    }
    const T = b ? { done: !1, value: c[0] } : P.next(x);
    s && (T.value = s(T.value));
    let { done: R } = T;
    !b && u !== null && (R = this.speed >= 0 ? this.currentTime >= d : this.currentTime <= 0);
    const F = this.holdTime === null && (this.state === "finished" || this.state === "running" && R);
    return F && o !== void 0 && (T.value = fi(c, this.options, o)), y && y(T.value), F && this.finish(), T;
  }
  get duration() {
    const { resolved: t } = this;
    return t ? Gt(t.calculatedDuration) : 0;
  }
  get time() {
    return Gt(this.currentTime);
  }
  set time(t) {
    t = Dt(t), this.currentTime = t, this.holdTime !== null || this.speed === 0 ? this.holdTime = t : this.driver && (this.startTime = this.driver.now() - t / this.speed);
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
    const { driver: t = wb, onPlay: n, startTime: r } = this.options;
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
const Df = /* @__PURE__ */ new Set([
  "opacity",
  "clipPath",
  "filter",
  "transform"
  // TODO: Can be accelerated but currently disabled until https://issues.chromium.org/issues/41491098 is resolved
  // or until we implement support for linear() easing.
  // "background-color"
]), _f = (e) => Array.isArray(e) && typeof e[0] == "number";
function Rf(e) {
  return !!(!e || typeof e == "string" && e in As || _f(e) || Array.isArray(e) && e.every(Rf));
}
const ur = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`, As = {
  linear: "linear",
  ease: "ease",
  easeIn: "ease-in",
  easeOut: "ease-out",
  easeInOut: "ease-in-out",
  circIn: /* @__PURE__ */ ur([0, 0.65, 0.55, 1]),
  circOut: /* @__PURE__ */ ur([0.55, 0, 1, 0.45]),
  backIn: /* @__PURE__ */ ur([0.31, 0.01, 0.66, -0.59]),
  backOut: /* @__PURE__ */ ur([0.33, 1.53, 0.69, 0.99])
};
function Sb(e) {
  return If(e) || As.easeOut;
}
function If(e) {
  if (e)
    return _f(e) ? ur(e) : Array.isArray(e) ? e.map(Sb) : As[e];
}
function Nb(e, t, n, { delay: r = 0, duration: o = 300, repeat: i = 0, repeatType: a = "loop", ease: s, times: c } = {}) {
  const u = { [t]: n };
  c && (u.offset = c);
  const d = If(s);
  return Array.isArray(d) && (u.easing = d), e.animate(u, {
    delay: r,
    duration: o,
    easing: Array.isArray(d) ? "linear" : d,
    fill: "both",
    iterations: i + 1,
    direction: a === "reverse" ? "alternate" : "normal"
  });
}
const Mb = /* @__PURE__ */ yf(() => Object.hasOwnProperty.call(Element.prototype, "animate")), Vo = 10, Pb = 2e4;
function Tb(e) {
  return e.type === "spring" || !Rf(e.ease);
}
function kb(e, t) {
  const n = new Es({
    ...t,
    keyframes: e,
    repeat: 0,
    delay: 0,
    isGenerator: !0
  });
  let r = { done: !1, value: e[0] };
  const o = [];
  let i = 0;
  for (; !r.done && i < Pb; )
    r = n.sample(i), o.push(r.value), i += Vo;
  return {
    times: void 0,
    keyframes: o,
    duration: i - Vo,
    ease: "linear"
  };
}
class Lc extends bf {
  constructor(t) {
    super(t);
    const { name: n, motionValue: r, element: o, keyframes: i } = this.options;
    this.resolver = new vf(i, (a, s) => this.onKeyframesResolved(a, s), n, r, o), this.resolver.scheduleResolve();
  }
  initPlayback(t, n) {
    var r;
    let { duration: o = 300, times: i, ease: a, type: s, motionValue: c, name: u, startTime: d } = this.options;
    if (!(!((r = c.owner) === null || r === void 0) && r.current))
      return !1;
    if (Tb(this.options)) {
      const { onComplete: h, onUpdate: g, motionValue: p, element: v, ...y } = this.options, w = kb(t, y);
      t = w.keyframes, t.length === 1 && (t[1] = t[0]), o = w.duration, i = w.times, a = w.ease, s = "keyframes";
    }
    const f = Nb(c.owner.current, u, t, { ...this.options, duration: o, times: i, ease: a });
    return f.startTime = d ?? this.calcStartTime(), this.pendingTimeline ? (f.timeline = this.pendingTimeline, this.pendingTimeline = void 0) : f.onfinish = () => {
      const { onComplete: h } = this.options;
      c.set(fi(t, this.options, n)), h && h(), this.cancel(), this.resolveFinishedPromise();
    }, {
      animation: f,
      duration: o,
      times: i,
      type: s,
      ease: a,
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
    r.currentTime = Dt(t);
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
    const { animation: n, keyframes: r, duration: o, type: i, ease: a, times: s } = t;
    if (n.playState === "idle" || n.playState === "finished")
      return;
    if (this.time) {
      const { motionValue: u, onUpdate: d, onComplete: f, element: h, ...g } = this.options, p = new Es({
        ...g,
        keyframes: r,
        duration: o,
        type: i,
        ease: a,
        times: s,
        isGenerator: !0
      }), v = Dt(this.time);
      u.setWithVelocity(p.sample(v - Vo).value, p.sample(v).value, Vo);
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
    const { motionValue: n, name: r, repeatDelay: o, repeatType: i, damping: a, type: s } = t;
    return Mb() && r && Df.has(r) && n && n.owner && n.owner.current instanceof HTMLElement && /**
     * If we're outputting values to onUpdate then we can't use WAAPI as there's
     * no way to read the value from WAAPI every frame.
     */
    !n.owner.getProps().onUpdate && !o && i !== "mirror" && a !== 0 && s !== "inertia";
  }
}
function Eb(e, t) {
  let n;
  const r = () => {
    const { currentTime: o } = t, a = (o === null ? 0 : o.value) / 100;
    n !== a && e(a), n = a;
  };
  return we.update(r, !0), () => Zt(r);
}
const Ab = yf(() => window.ScrollTimeline !== void 0);
class Db {
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
      if (Ab() && r.attachTimeline)
        r.attachTimeline(t);
      else
        return r.pause(), Eb((o) => {
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
const Ds = (e, t, n, r = {}, o, i, a) => (s) => {
  const c = bs(r, e) || {}, u = c.delay || r.delay || 0;
  let { elapsed: d = 0 } = r;
  d = d - Dt(u);
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
      s(), c.onComplete && c.onComplete(), a && a();
    },
    onStop: a,
    name: e,
    motionValue: t,
    element: i ? void 0 : o
  };
  J0(c) || (f = {
    ...f,
    ...Q0(e, f)
  }), f.duration && (f.duration = Dt(f.duration)), f.repeatDelay && (f.repeatDelay = Dt(f.repeatDelay)), f.from !== void 0 && (f.keyframes[0] = f.from);
  let h = !1;
  if ((f.type === !1 || f.duration === 0 && !f.repeatDelay) && (f.duration = 0, f.delay === 0 && (h = !0)), h && !i && t.get() !== void 0) {
    const g = fi(f.keyframes, c);
    if (g !== void 0)
      return we.update(() => {
        f.onUpdate(g), f.onComplete();
      }), new Db([]);
  }
  return !i && Lc.supports(f) ? new Lc(f) : new Es(f);
}, _b = (e) => !!(e && typeof e == "object" && e.mix && e.toValue), Rb = (e) => Ra(e) ? e[e.length - 1] || 0 : e;
function hi(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
function mi(e, t) {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}
class _s {
  constructor() {
    this.subscriptions = [];
  }
  add(t) {
    return hi(this.subscriptions, t), () => mi(this.subscriptions, t);
  }
  notify(t, n, r) {
    const o = this.subscriptions.length;
    if (o)
      if (o === 1)
        this.subscriptions[0](t, n, r);
      else
        for (let i = 0; i < o; i++) {
          const a = this.subscriptions[i];
          a && a(t, n, r);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
const Oc = 30, Ib = (e) => !isNaN(parseFloat(e));
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
    this.current = t, this.updatedAt = Kt.now(), this.canTrackVelocity === null && t !== void 0 && (this.canTrackVelocity = Ib(this.current));
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
    return process.env.NODE_ENV !== "production" && ui(!1, 'value.onChange(callback) is deprecated. Switch to value.on("change", callback).'), this.on("change", t);
  }
  on(t, n) {
    this.events[t] || (this.events[t] = new _s());
    const r = this.events[t].add(n);
    return t === "change" ? () => {
      r(), we.read(() => {
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
    if (!this.canTrackVelocity || this.prevFrameValue === void 0 || t - this.updatedAt > Oc)
      return 0;
    const n = Math.min(this.updatedAt - this.prevUpdatedAt, Oc);
    return wf(parseFloat(this.current) - parseFloat(this.prevFrameValue), n);
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
function _r(e, t) {
  return new Lf(e, t);
}
function Lb(e, t, n) {
  e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, _r(n));
}
function Ob(e, t) {
  const n = di(e, t);
  let { transitionEnd: r = {}, transition: o = {}, ...i } = n || {};
  i = { ...i, ...r };
  for (const a in i) {
    const s = Rb(i[a]);
    Lb(e, a, s);
  }
}
const pi = (e) => e.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(), Fb = "framerAppearId", Of = "data-" + pi(Fb);
function Ff(e) {
  return e.props[Of];
}
function Vf(e) {
  if (cn.has(e))
    return "transform";
  if (Df.has(e))
    return pi(e);
}
class Vb extends Lf {
  constructor() {
    super(...arguments), this.output = [], this.counts = /* @__PURE__ */ new Map();
  }
  add(t) {
    const n = Vf(t);
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
      this.counts.set(n, i), i === 0 && (mi(this.output, n), this.update());
    };
  }
  update() {
    this.set(this.output.length ? this.output.join(", ") : "auto");
  }
}
const Ge = (e) => !!(e && e.getVelocity);
function Bb(e) {
  return !!(Ge(e) && e.add);
}
function Wa(e, t) {
  var n;
  if (!e.applyWillChange)
    return;
  let r = e.getValue("willChange");
  if (!r && !(!((n = e.props.style) === null || n === void 0) && n.willChange) && (r = new Vb("auto"), e.addValue("willChange", r)), Bb(r))
    return r.add(t);
}
function Wb({ protectedKeys: e, needsAnimating: t }, n) {
  const r = e.hasOwnProperty(n) && t[n] !== !0;
  return t[n] = !1, r;
}
function Bf(e, t, { delay: n = 0, transitionOverride: r, type: o } = {}) {
  var i;
  let { transition: a = e.getDefaultTransition(), transitionEnd: s, ...c } = t;
  r && (a = r);
  const u = [], d = o && e.animationState && e.animationState.getState()[o];
  for (const f in c) {
    const h = e.getValue(f, (i = e.latestValues[f]) !== null && i !== void 0 ? i : null), g = c[f];
    if (g === void 0 || d && Wb(d, f))
      continue;
    const p = {
      delay: n,
      ...bs(a || {}, f)
    };
    let v = !1;
    if (window.MotionHandoffAnimation) {
      const w = Ff(e);
      if (w) {
        const b = window.MotionHandoffAnimation(w, f, we);
        b !== null && (p.startTime = b, v = !0);
      }
    }
    h.start(Ds(f, h, g, e.shouldReduceMotion && cn.has(f) ? { type: !1 } : p, e, v, Wa(e, f)));
    const y = h.animation;
    y && u.push(y);
  }
  return s && Promise.all(u).then(() => {
    we.update(() => {
      s && Ob(e, s);
    });
  }), u;
}
function $a(e, t, n = {}) {
  var r;
  const o = di(e, t, n.type === "exit" ? (r = e.presenceContext) === null || r === void 0 ? void 0 : r.custom : void 0);
  let { transition: i = e.getDefaultTransition() || {} } = o || {};
  n.transitionOverride && (i = n.transitionOverride);
  const a = o ? () => Promise.all(Bf(e, o, n)) : () => Promise.resolve(), s = e.variantChildren && e.variantChildren.size ? (u = 0) => {
    const { delayChildren: d = 0, staggerChildren: f, staggerDirection: h } = i;
    return $b(e, t, d + u, f, h, n);
  } : () => Promise.resolve(), { when: c } = i;
  if (c) {
    const [u, d] = c === "beforeChildren" ? [a, s] : [s, a];
    return u().then(() => d());
  } else
    return Promise.all([a(), s(n.delay)]);
}
function $b(e, t, n = 0, r = 0, o = 1, i) {
  const a = [], s = (e.variantChildren.size - 1) * r, c = o === 1 ? (u = 0) => u * r : (u = 0) => s - u * r;
  return Array.from(e.variantChildren).sort(jb).forEach((u, d) => {
    u.notify("AnimationStart", t), a.push($a(u, t, {
      ...i,
      delay: n + c(d)
    }).then(() => u.notify("AnimationComplete", t)));
  }), Promise.all(a);
}
function jb(e, t) {
  return e.sortNodePosition(t);
}
function Ub(e, t, n = {}) {
  e.notify("AnimationStart", t);
  let r;
  if (Array.isArray(t)) {
    const o = t.map((i) => $a(e, i, n));
    r = Promise.all(o);
  } else if (typeof t == "string")
    r = $a(e, t, n);
  else {
    const o = typeof t == "function" ? di(e, t, n.custom) : t;
    r = Promise.all(Bf(e, o, n));
  }
  return r.then(() => {
    e.notify("AnimationComplete", t);
  });
}
const Hb = [...vs].reverse(), zb = vs.length;
function Gb(e) {
  return (t) => Promise.all(t.map(({ animation: n, options: r }) => Ub(e, n, r)));
}
function Kb(e) {
  let t = Gb(e), n = Fc(), r = !0;
  const o = (c) => (u, d) => {
    var f;
    const h = di(e, d, c === "exit" ? (f = e.presenceContext) === null || f === void 0 ? void 0 : f.custom : void 0);
    if (h) {
      const { transition: g, transitionEnd: p, ...v } = h;
      u = { ...u, ...v, ...p };
    }
    return u;
  };
  function i(c) {
    t = c(e);
  }
  function a(c) {
    const u = e.getProps(), d = e.getVariantContext(!0) || {}, f = [], h = /* @__PURE__ */ new Set();
    let g = {}, p = 1 / 0;
    for (let y = 0; y < zb; y++) {
      const w = Hb[y], b = n[w], x = u[w] !== void 0 ? u[w] : d[w], P = Er(x), T = w === c ? b.isActive : null;
      T === !1 && (p = y);
      let R = x === d[w] && x !== u[w] && P;
      if (R && r && e.manuallyAnimateOnMount && (R = !1), b.protectedKeys = { ...g }, // If it isn't active and hasn't *just* been set as inactive
      !b.isActive && T === null || // If we didn't and don't have any defined prop for this animation type
      !x && !b.prevProp || // Or if the prop doesn't define an animation
      kr(x) || typeof x == "boolean")
        continue;
      let D = Yb(b.prevProp, x) || // If we're making this variant active, we want to always make it active
      w === c && b.isActive && !R && P || // If we removed a higher-priority variant (i is in reverse order)
      y > p && P, _ = !1;
      const j = Array.isArray(x) ? x : [x];
      let te = j.reduce(o(w), {});
      T === !1 && (te = {});
      const { prevResolvedValues: G = {} } = b, $ = {
        ...G,
        ...te
      }, I = (L) => {
        D = !0, h.has(L) && (_ = !0, h.delete(L)), b.needsAnimating[L] = !0;
        const H = e.getValue(L);
        H && (H.liveStyle = !1);
      };
      for (const L in $) {
        const H = te[L], V = G[L];
        if (g.hasOwnProperty(L))
          continue;
        let W = !1;
        Ra(H) && Ra(V) ? W = !Jd(H, V) : W = H !== V, W ? H != null ? I(L) : h.add(L) : H !== void 0 && h.has(L) ? I(L) : b.protectedKeys[L] = !0;
      }
      b.prevProp = x, b.prevResolvedValues = te, b.isActive && (g = { ...g, ...te }), r && e.blockInitialAnimation && (D = !1), D && (!R || _) && f.push(...j.map((L) => ({
        animation: L,
        options: { type: w }
      })));
    }
    if (h.size) {
      const y = {};
      h.forEach((w) => {
        const b = e.getBaseTarget(w), x = e.getValue(w);
        x && (x.liveStyle = !0), y[w] = b ?? null;
      }), f.push({ animation: y });
    }
    let v = !!f.length;
    return r && (u.initial === !1 || u.initial === u.animate) && !e.manuallyAnimateOnMount && (v = !1), r = !1, v ? t(f) : Promise.resolve();
  }
  function s(c, u) {
    var d;
    if (n[c].isActive === u)
      return Promise.resolve();
    (d = e.variantChildren) === null || d === void 0 || d.forEach((h) => {
      var g;
      return (g = h.animationState) === null || g === void 0 ? void 0 : g.setActive(c, u);
    }), n[c].isActive = u;
    const f = a(c);
    for (const h in n)
      n[h].protectedKeys = {};
    return f;
  }
  return {
    animateChanges: a,
    setActive: s,
    setAnimateFunction: i,
    getState: () => n,
    reset: () => {
      n = Fc(), r = !0;
    }
  };
}
function Yb(e, t) {
  return typeof t == "string" ? t !== e : Array.isArray(t) ? !Jd(t, e) : !1;
}
function pn(e = !1) {
  return {
    isActive: e,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {}
  };
}
function Fc() {
  return {
    animate: pn(!0),
    whileInView: pn(),
    whileHover: pn(),
    whileTap: pn(),
    whileDrag: pn(),
    whileFocus: pn(),
    exit: pn()
  };
}
class un {
  constructor(t) {
    this.isMounted = !1, this.node = t;
  }
  update() {
  }
}
class Xb extends un {
  /**
   * We dynamically generate the AnimationState manager as it contains a reference
   * to the underlying animation library. We only want to load that if we load this,
   * so people can optionally code split it out using the `m` component.
   */
  constructor(t) {
    super(t), t.animationState || (t.animationState = Kb(t));
  }
  updateAnimationControlsSubscription() {
    const { animate: t } = this.node.getProps();
    kr(t) && (this.unmountControls = t.subscribe(this.node));
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
let qb = 0;
class Zb extends un {
  constructor() {
    super(...arguments), this.id = qb++;
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
const Qb = {
  animation: {
    Feature: Xb
  },
  exit: {
    Feature: Zb
  }
}, Wf = (e) => e.pointerType === "mouse" ? typeof e.button != "number" || e.button <= 0 : e.isPrimary !== !1;
function gi(e, t = "page") {
  return {
    point: {
      x: e[`${t}X`],
      y: e[`${t}Y`]
    }
  };
}
const Jb = (e) => (t) => Wf(t) && e(t, gi(t));
function Ht(e, t, n, r = { passive: !0 }) {
  return e.addEventListener(t, n, r), () => e.removeEventListener(t, n);
}
function Xt(e, t, n, r) {
  return Ht(e, t, Jb(n), r);
}
const Vc = (e, t) => Math.abs(e - t);
function ew(e, t) {
  const n = Vc(e.x, t.x), r = Vc(e.y, t.y);
  return Math.sqrt(n ** 2 + r ** 2);
}
class $f {
  constructor(t, n, { transformPagePoint: r, contextWindow: o, dragSnapToOrigin: i = !1 } = {}) {
    if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.contextWindow = window, this.updatePoint = () => {
      if (!(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const f = ra(this.lastMoveEventInfo, this.history), h = this.startEvent !== null, g = ew(f.offset, { x: 0, y: 0 }) >= 3;
      if (!h && !g)
        return;
      const { point: p } = f, { timestamp: v } = je;
      this.history.push({ ...p, timestamp: v });
      const { onStart: y, onMove: w } = this.handlers;
      h || (y && y(this.lastMoveEvent, f), this.startEvent = this.lastMoveEvent), w && w(this.lastMoveEvent, f);
    }, this.handlePointerMove = (f, h) => {
      this.lastMoveEvent = f, this.lastMoveEventInfo = na(h, this.transformPagePoint), we.update(this.updatePoint, !0);
    }, this.handlePointerUp = (f, h) => {
      this.end();
      const { onEnd: g, onSessionEnd: p, resumeAnimation: v } = this.handlers;
      if (this.dragSnapToOrigin && v && v(), !(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const y = ra(f.type === "pointercancel" ? this.lastMoveEventInfo : na(h, this.transformPagePoint), this.history);
      this.startEvent && g && g(f, y), p && p(f, y);
    }, !Wf(t))
      return;
    this.dragSnapToOrigin = i, this.handlers = n, this.transformPagePoint = r, this.contextWindow = o || window;
    const a = gi(t), s = na(a, this.transformPagePoint), { point: c } = s, { timestamp: u } = je;
    this.history = [{ ...c, timestamp: u }];
    const { onSessionStart: d } = n;
    d && d(t, ra(s, this.history)), this.removeListeners = Yt(Xt(this.contextWindow, "pointermove", this.handlePointerMove), Xt(this.contextWindow, "pointerup", this.handlePointerUp), Xt(this.contextWindow, "pointercancel", this.handlePointerUp));
  }
  updateHandlers(t) {
    this.handlers = t;
  }
  end() {
    this.removeListeners && this.removeListeners(), Zt(this.updatePoint);
  }
}
function na(e, t) {
  return t ? { point: t(e.point) } : e;
}
function Bc(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function ra({ point: e }, t) {
  return {
    point: e,
    delta: Bc(e, jf(t)),
    offset: Bc(e, tw(t)),
    velocity: nw(t, 0.1)
  };
}
function tw(e) {
  return e[0];
}
function jf(e) {
  return e[e.length - 1];
}
function nw(e, t) {
  if (e.length < 2)
    return { x: 0, y: 0 };
  let n = e.length - 1, r = null;
  const o = jf(e);
  for (; n >= 0 && (r = e[n], !(o.timestamp - r.timestamp > Dt(t))); )
    n--;
  if (!r)
    return { x: 0, y: 0 };
  const i = Gt(o.timestamp - r.timestamp);
  if (i === 0)
    return { x: 0, y: 0 };
  const a = {
    x: (o.x - r.x) / i,
    y: (o.y - r.y) / i
  };
  return a.x === 1 / 0 && (a.x = 0), a.y === 1 / 0 && (a.y = 0), a;
}
function Uf(e) {
  let t = null;
  return () => {
    const n = () => {
      t = null;
    };
    return t === null ? (t = e, n) : !1;
  };
}
const Wc = Uf("dragHorizontal"), $c = Uf("dragVertical");
function Hf(e) {
  let t = !1;
  if (e === "y")
    t = $c();
  else if (e === "x")
    t = Wc();
  else {
    const n = Wc(), r = $c();
    n && r ? t = () => {
      n(), r();
    } : (n && n(), r && r());
  }
  return t;
}
function zf() {
  const e = Hf(!0);
  return e ? (e(), !1) : !0;
}
function Bn(e) {
  return e && typeof e == "object" && Object.prototype.hasOwnProperty.call(e, "current");
}
const Gf = 1e-4, rw = 1 - Gf, ow = 1 + Gf, Kf = 0.01, iw = 0 - Kf, aw = 0 + Kf;
function ot(e) {
  return e.max - e.min;
}
function sw(e, t, n) {
  return Math.abs(e - t) <= n;
}
function jc(e, t, n, r = 0.5) {
  e.origin = r, e.originPoint = De(t.min, t.max, e.origin), e.scale = ot(n) / ot(t), e.translate = De(n.min, n.max, e.origin) - e.originPoint, (e.scale >= rw && e.scale <= ow || isNaN(e.scale)) && (e.scale = 1), (e.translate >= iw && e.translate <= aw || isNaN(e.translate)) && (e.translate = 0);
}
function br(e, t, n, r) {
  jc(e.x, t.x, n.x, r ? r.originX : void 0), jc(e.y, t.y, n.y, r ? r.originY : void 0);
}
function Uc(e, t, n) {
  e.min = n.min + t.min, e.max = e.min + ot(t);
}
function lw(e, t, n) {
  Uc(e.x, t.x, n.x), Uc(e.y, t.y, n.y);
}
function Hc(e, t, n) {
  e.min = t.min - n.min, e.max = e.min + ot(t);
}
function wr(e, t, n) {
  Hc(e.x, t.x, n.x), Hc(e.y, t.y, n.y);
}
function cw(e, { min: t, max: n }, r) {
  return t !== void 0 && e < t ? e = r ? De(t, e, r.min) : Math.max(e, t) : n !== void 0 && e > n && (e = r ? De(n, e, r.max) : Math.min(e, n)), e;
}
function zc(e, t, n) {
  return {
    min: t !== void 0 ? e.min + t : void 0,
    max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0
  };
}
function uw(e, { top: t, left: n, bottom: r, right: o }) {
  return {
    x: zc(e.x, n, o),
    y: zc(e.y, t, r)
  };
}
function Gc(e, t) {
  let n = t.min - e.min, r = t.max - e.max;
  return t.max - t.min < e.max - e.min && ([n, r] = [r, n]), { min: n, max: r };
}
function dw(e, t) {
  return {
    x: Gc(e.x, t.x),
    y: Gc(e.y, t.y)
  };
}
function fw(e, t) {
  let n = 0.5;
  const r = ot(e), o = ot(t);
  return o > r ? n = Dr(t.min, t.max - r, e.min) : r > o && (n = Dr(e.min, e.max - o, t.min)), sn(0, 1, n);
}
function hw(e, t) {
  const n = {};
  return t.min !== void 0 && (n.min = t.min - e.min), t.max !== void 0 && (n.max = t.max - e.min), n;
}
const ja = 0.35;
function mw(e = ja) {
  return e === !1 ? e = 0 : e === !0 && (e = ja), {
    x: Kc(e, "left", "right"),
    y: Kc(e, "top", "bottom")
  };
}
function Kc(e, t, n) {
  return {
    min: Yc(e, t),
    max: Yc(e, n)
  };
}
function Yc(e, t) {
  return typeof e == "number" ? e : e[t] || 0;
}
const Xc = () => ({
  translate: 0,
  scale: 1,
  origin: 0,
  originPoint: 0
}), Wn = () => ({
  x: Xc(),
  y: Xc()
}), qc = () => ({ min: 0, max: 0 }), Le = () => ({
  x: qc(),
  y: qc()
});
function st(e) {
  return [e("x"), e("y")];
}
function Yf({ top: e, left: t, right: n, bottom: r }) {
  return {
    x: { min: t, max: n },
    y: { min: e, max: r }
  };
}
function pw({ x: e, y: t }) {
  return { top: t.min, right: e.max, bottom: t.max, left: e.min };
}
function gw(e, t) {
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
function oa(e) {
  return e === void 0 || e === 1;
}
function Ua({ scale: e, scaleX: t, scaleY: n }) {
  return !oa(e) || !oa(t) || !oa(n);
}
function gn(e) {
  return Ua(e) || Xf(e) || e.z || e.rotate || e.rotateX || e.rotateY || e.skewX || e.skewY;
}
function Xf(e) {
  return Zc(e.x) || Zc(e.y);
}
function Zc(e) {
  return e && e !== "0%";
}
function Bo(e, t, n) {
  const r = e - n, o = t * r;
  return n + o;
}
function Qc(e, t, n, r, o) {
  return o !== void 0 && (e = Bo(e, o, r)), Bo(e, n, r) + t;
}
function Ha(e, t = 0, n = 1, r, o) {
  e.min = Qc(e.min, t, n, r, o), e.max = Qc(e.max, t, n, r, o);
}
function qf(e, { x: t, y: n }) {
  Ha(e.x, t.translate, t.scale, t.originPoint), Ha(e.y, n.translate, n.scale, n.originPoint);
}
const Jc = 0.999999999999, eu = 1.0000000000001;
function vw(e, t, n, r = !1) {
  const o = n.length;
  if (!o)
    return;
  t.x = t.y = 1;
  let i, a;
  for (let s = 0; s < o; s++) {
    i = n[s], a = i.projectionDelta;
    const { visualElement: c } = i.options;
    c && c.props.style && c.props.style.display === "contents" || (r && i.options.layoutScroll && i.scroll && i !== i.root && jn(e, {
      x: -i.scroll.offset.x,
      y: -i.scroll.offset.y
    }), a && (t.x *= a.x.scale, t.y *= a.y.scale, qf(e, a)), r && gn(i.latestValues) && jn(e, i.latestValues));
  }
  t.x < eu && t.x > Jc && (t.x = 1), t.y < eu && t.y > Jc && (t.y = 1);
}
function $n(e, t) {
  e.min = e.min + t, e.max = e.max + t;
}
function tu(e, t, n, r, o = 0.5) {
  const i = De(e.min, e.max, o);
  Ha(e, t, n, i, r);
}
function jn(e, t) {
  tu(e.x, t.x, t.scaleX, t.scale, t.originX), tu(e.y, t.y, t.scaleY, t.scale, t.originY);
}
function Zf(e, t) {
  return Yf(gw(e.getBoundingClientRect(), t));
}
function yw(e, t, n) {
  const r = Zf(e, n), { scroll: o } = t;
  return o && ($n(r.x, o.offset.x), $n(r.y, o.offset.y)), r;
}
const Qf = ({ current: e }) => e ? e.ownerDocument.defaultView : null, bw = /* @__PURE__ */ new WeakMap();
class ww {
  constructor(t) {
    this.openGlobalLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = { x: 0, y: 0 }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = Le(), this.visualElement = t;
  }
  start(t, { snapToCursor: n = !1 } = {}) {
    const { presenceContext: r } = this.visualElement;
    if (r && r.isPresent === !1)
      return;
    const o = (d) => {
      const { dragSnapToOrigin: f } = this.getProps();
      f ? this.pauseAnimation() : this.stopAnimation(), n && this.snapToCursor(gi(d, "page").point);
    }, i = (d, f) => {
      var h;
      const { drag: g, dragPropagation: p, onDragStart: v } = this.getProps();
      if (g && !p && (this.openGlobalLock && this.openGlobalLock(), this.openGlobalLock = Hf(g), !this.openGlobalLock))
        return;
      this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), st((w) => {
        let b = this.getAxisMotionValue(w).get() || 0;
        if (_t.test(b)) {
          const { projection: x } = this.visualElement;
          if (x && x.layout) {
            const P = x.layout.layoutBox[w];
            P && (b = ot(P) * (parseFloat(b) / 100));
          }
        }
        this.originPoint[w] = b;
      }), v && we.postRender(() => v(d, f)), (h = this.removeWillChange) === null || h === void 0 || h.call(this), this.removeWillChange = Wa(this.visualElement, "transform");
      const { animationState: y } = this.visualElement;
      y && y.setActive("whileDrag", !0);
    }, a = (d, f) => {
      const { dragPropagation: h, dragDirectionLock: g, onDirectionLock: p, onDrag: v } = this.getProps();
      if (!h && !this.openGlobalLock)
        return;
      const { offset: y } = f;
      if (g && this.currentDirection === null) {
        this.currentDirection = xw(y), this.currentDirection !== null && p && p(this.currentDirection);
        return;
      }
      this.updateAxis("x", f.point, y), this.updateAxis("y", f.point, y), this.visualElement.render(), v && v(d, f);
    }, s = (d, f) => this.stop(d, f), c = () => st((d) => {
      var f;
      return this.getAnimationState(d) === "paused" && ((f = this.getAxisMotionValue(d).animation) === null || f === void 0 ? void 0 : f.play());
    }), { dragSnapToOrigin: u } = this.getProps();
    this.panSession = new $f(t, {
      onSessionStart: o,
      onStart: i,
      onMove: a,
      onSessionEnd: s,
      resumeAnimation: c
    }, {
      transformPagePoint: this.visualElement.getTransformPagePoint(),
      dragSnapToOrigin: u,
      contextWindow: Qf(this.visualElement)
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
    const { onDragEnd: a } = this.getProps();
    a && we.postRender(() => a(t, n));
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
    if (!r || !mo(t, o, this.currentDirection))
      return;
    const i = this.getAxisMotionValue(t);
    let a = this.originPoint[t] + r[t];
    this.constraints && this.constraints[t] && (a = cw(a, this.constraints[t], this.elastic[t])), i.set(a);
  }
  resolveConstraints() {
    var t;
    const { dragConstraints: n, dragElastic: r } = this.getProps(), o = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : (t = this.visualElement.projection) === null || t === void 0 ? void 0 : t.layout, i = this.constraints;
    n && Bn(n) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : n && o ? this.constraints = uw(o.layoutBox, n) : this.constraints = !1, this.elastic = mw(r), i !== this.constraints && o && this.constraints && !this.hasMutatedConstraints && st((a) => {
      this.constraints !== !1 && this.getAxisMotionValue(a) && (this.constraints[a] = hw(o.layoutBox[a], this.constraints[a]));
    });
  }
  resolveRefConstraints() {
    const { dragConstraints: t, onMeasureDragConstraints: n } = this.getProps();
    if (!t || !Bn(t))
      return !1;
    const r = t.current;
    Qt(r !== null, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.");
    const { projection: o } = this.visualElement;
    if (!o || !o.layout)
      return !1;
    const i = yw(r, o.root, this.visualElement.getTransformPagePoint());
    let a = dw(o.layout.layoutBox, i);
    if (n) {
      const s = n(pw(a));
      this.hasMutatedConstraints = !!s, s && (a = Yf(s));
    }
    return a;
  }
  startAnimation(t) {
    const { drag: n, dragMomentum: r, dragElastic: o, dragTransition: i, dragSnapToOrigin: a, onDragTransitionEnd: s } = this.getProps(), c = this.constraints || {}, u = st((d) => {
      if (!mo(d, n, this.currentDirection))
        return;
      let f = c && c[d] || {};
      a && (f = { min: 0, max: 0 });
      const h = o ? 200 : 1e6, g = o ? 40 : 1e7, p = {
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
      return this.startAxisValueAnimation(d, p);
    });
    return Promise.all(u).then(s);
  }
  startAxisValueAnimation(t, n) {
    const r = this.getAxisMotionValue(t);
    return r.start(Ds(t, r, 0, n, this.visualElement, !1, Wa(this.visualElement, t)));
  }
  stopAnimation() {
    st((t) => this.getAxisMotionValue(t).stop());
  }
  pauseAnimation() {
    st((t) => {
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
    st((n) => {
      const { drag: r } = this.getProps();
      if (!mo(n, r, this.currentDirection))
        return;
      const { projection: o } = this.visualElement, i = this.getAxisMotionValue(n);
      if (o && o.layout) {
        const { min: a, max: s } = o.layout.layoutBox[n];
        i.set(t[n] - De(a, s, 0.5));
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
    if (!Bn(n) || !r || !this.constraints)
      return;
    this.stopAnimation();
    const o = { x: 0, y: 0 };
    st((a) => {
      const s = this.getAxisMotionValue(a);
      if (s && this.constraints !== !1) {
        const c = s.get();
        o[a] = fw({ min: c, max: c }, this.constraints[a]);
      }
    });
    const { transformTemplate: i } = this.visualElement.getProps();
    this.visualElement.current.style.transform = i ? i({}, "") : "none", r.root && r.root.updateScroll(), r.updateLayout(), this.resolveConstraints(), st((a) => {
      if (!mo(a, t, null))
        return;
      const s = this.getAxisMotionValue(a), { min: c, max: u } = this.constraints[a];
      s.set(De(c, u, o[a]));
    });
  }
  addListeners() {
    if (!this.visualElement.current)
      return;
    bw.set(this.visualElement, this);
    const t = this.visualElement.current, n = Xt(t, "pointerdown", (c) => {
      const { drag: u, dragListener: d = !0 } = this.getProps();
      u && d && this.start(c);
    }), r = () => {
      const { dragConstraints: c } = this.getProps();
      Bn(c) && c.current && (this.constraints = this.resolveRefConstraints());
    }, { projection: o } = this.visualElement, i = o.addEventListener("measure", r);
    o && !o.layout && (o.root && o.root.updateScroll(), o.updateLayout()), we.read(r);
    const a = Ht(window, "resize", () => this.scalePositionWithinConstraints()), s = o.addEventListener("didUpdate", ({ delta: c, hasLayoutChanged: u }) => {
      this.isDragging && u && (st((d) => {
        const f = this.getAxisMotionValue(d);
        f && (this.originPoint[d] += c[d].translate, f.set(f.get() + c[d].translate));
      }), this.visualElement.render());
    });
    return () => {
      a(), n(), i(), s && s();
    };
  }
  getProps() {
    const t = this.visualElement.getProps(), { drag: n = !1, dragDirectionLock: r = !1, dragPropagation: o = !1, dragConstraints: i = !1, dragElastic: a = ja, dragMomentum: s = !0 } = t;
    return {
      ...t,
      drag: n,
      dragDirectionLock: r,
      dragPropagation: o,
      dragConstraints: i,
      dragElastic: a,
      dragMomentum: s
    };
  }
}
function mo(e, t, n) {
  return (t === !0 || t === e) && (n === null || n === e);
}
function xw(e, t = 10) {
  let n = null;
  return Math.abs(e.y) > t ? n = "y" : Math.abs(e.x) > t && (n = "x"), n;
}
class Cw extends un {
  constructor(t) {
    super(t), this.removeGroupControls = Ue, this.removeListeners = Ue, this.controls = new ww(t);
  }
  mount() {
    const { dragControls: t } = this.node.getProps();
    t && (this.removeGroupControls = t.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || Ue;
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners();
  }
}
const nu = (e) => (t, n) => {
  e && we.postRender(() => e(t, n));
};
class Sw extends un {
  constructor() {
    super(...arguments), this.removePointerDownListener = Ue;
  }
  onPointerDown(t) {
    this.session = new $f(t, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: Qf(this.node)
    });
  }
  createPanHandlers() {
    const { onPanSessionStart: t, onPanStart: n, onPan: r, onPanEnd: o } = this.node.getProps();
    return {
      onSessionStart: nu(t),
      onStart: nu(n),
      onMove: r,
      onEnd: (i, a) => {
        delete this.session, o && we.postRender(() => o(i, a));
      }
    };
  }
  mount() {
    this.removePointerDownListener = Xt(this.node.current, "pointerdown", (t) => this.onPointerDown(t));
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener(), this.session && this.session.end();
  }
}
const vi = nt(null);
function Nw() {
  const e = Pe(vi);
  if (e === null)
    return [!0, null];
  const { isPresent: t, onExitComplete: n, register: r } = e, o = si();
  Fe(() => r(o), []);
  const i = It(() => n && n(o), [o, n]);
  return !t && n ? [!1, i] : [!0];
}
const Rr = nt({}), Jf = nt({}), Mo = {
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
function ru(e, t) {
  return t.max === t.min ? 0 : e / (t.max - t.min) * 100;
}
const ar = {
  correct: (e, t) => {
    if (!t.target)
      return e;
    if (typeof e == "string")
      if (he.test(e))
        e = parseFloat(e);
      else
        return e;
    const n = ru(e, t.target.x), r = ru(e, t.target.y);
    return `${n}% ${r}%`;
  }
}, Mw = {
  correct: (e, { treeScale: t, projectionDelta: n }) => {
    const r = e, o = ln.parse(e);
    if (o.length > 5)
      return r;
    const i = ln.createTransformer(e), a = typeof o[0] != "number" ? 1 : 0, s = n.x.scale * t.x, c = n.y.scale * t.y;
    o[0 + a] /= s, o[1 + a] /= c;
    const u = De(s, c, 0.5);
    return typeof o[2 + a] == "number" && (o[2 + a] /= u), typeof o[3 + a] == "number" && (o[3 + a] /= u), i(o);
  }
}, Wo = {};
function Pw(e) {
  Object.assign(Wo, e);
}
const { schedule: Rs, cancel: L5 } = ef(queueMicrotask, !1);
class Tw extends b0 {
  /**
   * This only mounts projection nodes for components that
   * need measuring, we might want to do it for all components
   * in order to incorporate transforms
   */
  componentDidMount() {
    const { visualElement: t, layoutGroup: n, switchLayoutGroup: r, layoutId: o } = this.props, { projection: i } = t;
    Pw(kw), i && (n.group && n.group.add(i), r && r.register && o && r.register(i), i.root.didUpdate(), i.addEventListener("animationComplete", () => {
      this.safeToRemove();
    }), i.setOptions({
      ...i.options,
      onExitComplete: () => this.safeToRemove()
    })), Mo.hasEverUpdated = !0;
  }
  getSnapshotBeforeUpdate(t) {
    const { layoutDependency: n, visualElement: r, drag: o, isPresent: i } = this.props, a = r.projection;
    return a && (a.isPresent = i, o || t.layoutDependency !== n || n === void 0 ? a.willUpdate() : this.safeToRemove(), t.isPresent !== i && (i ? a.promote() : a.relegate() || we.postRender(() => {
      const s = a.getStack();
      (!s || !s.members.length) && this.safeToRemove();
    }))), null;
  }
  componentDidUpdate() {
    const { projection: t } = this.props.visualElement;
    t && (t.root.didUpdate(), Rs.postRender(() => {
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
function eh(e) {
  const [t, n] = Nw(), r = Pe(Rr);
  return l(Tw, { ...e, layoutGroup: r, switchLayoutGroup: Pe(Jf), isPresent: t, safeToRemove: n });
}
const kw = {
  borderRadius: {
    ...ar,
    applyTo: [
      "borderTopLeftRadius",
      "borderTopRightRadius",
      "borderBottomLeftRadius",
      "borderBottomRightRadius"
    ]
  },
  borderTopLeftRadius: ar,
  borderTopRightRadius: ar,
  borderBottomLeftRadius: ar,
  borderBottomRightRadius: ar,
  boxShadow: Mw
}, th = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"], Ew = th.length, ou = (e) => typeof e == "string" ? parseFloat(e) : e, iu = (e) => typeof e == "number" || he.test(e);
function Aw(e, t, n, r, o, i) {
  o ? (e.opacity = De(
    0,
    // TODO Reinstate this if only child
    n.opacity !== void 0 ? n.opacity : 1,
    Dw(r)
  ), e.opacityExit = De(t.opacity !== void 0 ? t.opacity : 1, 0, _w(r))) : i && (e.opacity = De(t.opacity !== void 0 ? t.opacity : 1, n.opacity !== void 0 ? n.opacity : 1, r));
  for (let a = 0; a < Ew; a++) {
    const s = `border${th[a]}Radius`;
    let c = au(t, s), u = au(n, s);
    if (c === void 0 && u === void 0)
      continue;
    c || (c = 0), u || (u = 0), c === 0 || u === 0 || iu(c) === iu(u) ? (e[s] = Math.max(De(ou(c), ou(u), r), 0), (_t.test(u) || _t.test(c)) && (e[s] += "%")) : e[s] = u;
  }
  (t.rotate || n.rotate) && (e.rotate = De(t.rotate || 0, n.rotate || 0, r));
}
function au(e, t) {
  return e[t] !== void 0 ? e[t] : e.borderRadius;
}
const Dw = /* @__PURE__ */ nh(0, 0.5, Tf), _w = /* @__PURE__ */ nh(0.5, 0.95, Ue);
function nh(e, t, n) {
  return (r) => r < e ? 0 : r > t ? 1 : n(Dr(e, t, r));
}
function su(e, t) {
  e.min = t.min, e.max = t.max;
}
function at(e, t) {
  su(e.x, t.x), su(e.y, t.y);
}
function lu(e, t) {
  e.translate = t.translate, e.scale = t.scale, e.originPoint = t.originPoint, e.origin = t.origin;
}
function cu(e, t, n, r, o) {
  return e -= t, e = Bo(e, 1 / n, r), o !== void 0 && (e = Bo(e, 1 / o, r)), e;
}
function Rw(e, t = 0, n = 1, r = 0.5, o, i = e, a = e) {
  if (_t.test(t) && (t = parseFloat(t), t = De(a.min, a.max, t / 100) - a.min), typeof t != "number")
    return;
  let s = De(i.min, i.max, r);
  e === i && (s -= t), e.min = cu(e.min, t, n, s, o), e.max = cu(e.max, t, n, s, o);
}
function uu(e, t, [n, r, o], i, a) {
  Rw(e, t[n], t[r], t[o], t.scale, i, a);
}
const Iw = ["x", "scaleX", "originX"], Lw = ["y", "scaleY", "originY"];
function du(e, t, n, r) {
  uu(e.x, t, Iw, n ? n.x : void 0, r ? r.x : void 0), uu(e.y, t, Lw, n ? n.y : void 0, r ? r.y : void 0);
}
function fu(e) {
  return e.translate === 0 && e.scale === 1;
}
function rh(e) {
  return fu(e.x) && fu(e.y);
}
function hu(e, t) {
  return e.min === t.min && e.max === t.max;
}
function Ow(e, t) {
  return hu(e.x, t.x) && hu(e.y, t.y);
}
function mu(e, t) {
  return Math.round(e.min) === Math.round(t.min) && Math.round(e.max) === Math.round(t.max);
}
function oh(e, t) {
  return mu(e.x, t.x) && mu(e.y, t.y);
}
function pu(e) {
  return ot(e.x) / ot(e.y);
}
function gu(e, t) {
  return e.translate === t.translate && e.scale === t.scale && e.originPoint === t.originPoint;
}
class Fw {
  constructor() {
    this.members = [];
  }
  add(t) {
    hi(this.members, t), t.scheduleRender();
  }
  remove(t) {
    if (mi(this.members, t), t === this.prevLead && (this.prevLead = void 0), t === this.lead) {
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
function Vw(e, t, n) {
  let r = "";
  const o = e.x.translate / t.x, i = e.y.translate / t.y, a = (n == null ? void 0 : n.z) || 0;
  if ((o || i || a) && (r = `translate3d(${o}px, ${i}px, ${a}px) `), (t.x !== 1 || t.y !== 1) && (r += `scale(${1 / t.x}, ${1 / t.y}) `), n) {
    const { transformPerspective: u, rotate: d, rotateX: f, rotateY: h, skewX: g, skewY: p } = n;
    u && (r = `perspective(${u}px) ${r}`), d && (r += `rotate(${d}deg) `), f && (r += `rotateX(${f}deg) `), h && (r += `rotateY(${h}deg) `), g && (r += `skewX(${g}deg) `), p && (r += `skewY(${p}deg) `);
  }
  const s = e.x.scale * t.x, c = e.y.scale * t.y;
  return (s !== 1 || c !== 1) && (r += `scale(${s}, ${c})`), r || "none";
}
const Bw = (e, t) => e.depth - t.depth;
class Ww {
  constructor() {
    this.children = [], this.isDirty = !1;
  }
  add(t) {
    hi(this.children, t), this.isDirty = !0;
  }
  remove(t) {
    mi(this.children, t), this.isDirty = !0;
  }
  forEach(t) {
    this.isDirty && this.children.sort(Bw), this.isDirty = !1, this.children.forEach(t);
  }
}
function Po(e) {
  const t = Ge(e) ? e.get() : e;
  return _b(t) ? t.toValue() : t;
}
function $w(e, t) {
  const n = Kt.now(), r = ({ timestamp: o }) => {
    const i = o - n;
    i >= t && (Zt(r), e(i - t));
  };
  return we.read(r, !0), () => Zt(r);
}
function jw(e) {
  return e instanceof SVGElement && e.tagName !== "svg";
}
function Uw(e, t, n) {
  const r = Ge(e) ? e : _r(e);
  return r.start(Ds("", r, t, n)), r.animation;
}
const vn = {
  type: "projectionFrame",
  totalNodes: 0,
  resolvedTargetDeltas: 0,
  recalculatedProjection: 0
}, dr = typeof window < "u" && window.MotionDebug !== void 0, ia = ["", "X", "Y", "Z"], Hw = { visibility: "hidden" }, vu = 1e3;
let zw = 0;
function aa(e, t, n, r) {
  const { latestValues: o } = t;
  o[e] && (n[e] = o[e], t.setStaticValue(e, 0), r && (r[e] = 0));
}
function ih(e) {
  if (e.hasCheckedOptimisedAppear = !0, e.root === e)
    return;
  const { visualElement: t } = e.options;
  if (!t)
    return;
  const n = Ff(t);
  if (window.MotionHasOptimisedAnimation(n, "transform")) {
    const { layout: o, layoutId: i } = e.options;
    window.MotionCancelOptimisedAnimation(n, "transform", we, !(o || i));
  }
  const { parent: r } = e;
  r && !r.hasCheckedOptimisedAppear && ih(r);
}
function ah({ attachResizeListener: e, defaultParent: t, measureScroll: n, checkIsScrollRoot: r, resetTransform: o }) {
  return class {
    constructor(a = {}, s = t == null ? void 0 : t()) {
      this.id = zw++, this.animationId = 0, this.children = /* @__PURE__ */ new Set(), this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.hasCheckedOptimisedAppear = !1, this.treeScale = { x: 1, y: 1 }, this.eventHandlers = /* @__PURE__ */ new Map(), this.hasTreeAnimated = !1, this.updateScheduled = !1, this.scheduleUpdate = () => this.update(), this.projectionUpdateScheduled = !1, this.checkUpdateFailed = () => {
        this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots());
      }, this.updateProjection = () => {
        this.projectionUpdateScheduled = !1, dr && (vn.totalNodes = vn.resolvedTargetDeltas = vn.recalculatedProjection = 0), this.nodes.forEach(Yw), this.nodes.forEach(Jw), this.nodes.forEach(ex), this.nodes.forEach(Xw), dr && window.MotionDebug.record(vn);
      }, this.resolvedRelativeTargetAt = 0, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = /* @__PURE__ */ new Map(), this.latestValues = a, this.root = s ? s.root || s : this, this.path = s ? [...s.path, s] : [], this.parent = s, this.depth = s ? s.depth + 1 : 0;
      for (let c = 0; c < this.path.length; c++)
        this.path[c].shouldResetTransform = !0;
      this.root === this && (this.nodes = new Ww());
    }
    addEventListener(a, s) {
      return this.eventHandlers.has(a) || this.eventHandlers.set(a, new _s()), this.eventHandlers.get(a).add(s);
    }
    notifyListeners(a, ...s) {
      const c = this.eventHandlers.get(a);
      c && c.notify(...s);
    }
    hasListeners(a) {
      return this.eventHandlers.has(a);
    }
    /**
     * Lifecycles
     */
    mount(a, s = this.root.hasTreeAnimated) {
      if (this.instance)
        return;
      this.isSVG = jw(a), this.instance = a;
      const { layoutId: c, layout: u, visualElement: d } = this.options;
      if (d && !d.current && d.mount(a), this.root.nodes.add(this), this.parent && this.parent.children.add(this), s && (u || c) && (this.isLayoutDirty = !0), e) {
        let f;
        const h = () => this.root.updateBlockedByResize = !1;
        e(a, () => {
          this.root.updateBlockedByResize = !0, f && f(), f = $w(h, 250), Mo.hasAnimatedSinceResize && (Mo.hasAnimatedSinceResize = !1, this.nodes.forEach(bu));
        });
      }
      c && this.root.registerSharedNode(c, this), this.options.animate !== !1 && d && (c || u) && this.addEventListener("didUpdate", ({ delta: f, hasLayoutChanged: h, hasRelativeTargetChanged: g, layout: p }) => {
        if (this.isTreeAnimationBlocked()) {
          this.target = void 0, this.relativeTarget = void 0;
          return;
        }
        const v = this.options.transition || d.getDefaultTransition() || ix, { onLayoutAnimationStart: y, onLayoutAnimationComplete: w } = d.getProps(), b = !this.targetLayout || !oh(this.targetLayout, p) || g, x = !h && g;
        if (this.options.layoutRoot || this.resumeFrom && this.resumeFrom.instance || x || h && (b || !this.currentAnimation)) {
          this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0), this.setAnimationOrigin(f, x);
          const P = {
            ...bs(v, "layout"),
            onPlay: y,
            onComplete: w
          };
          (d.shouldReduceMotion || this.options.layoutRoot) && (P.delay = 0, P.type = !1), this.startAnimation(P);
        } else
          h || bu(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
        this.targetLayout = p;
      });
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      const a = this.getStack();
      a && a.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, Zt(this.updateProjection);
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
      this.isUpdateBlocked() || (this.isUpdating = !0, this.nodes && this.nodes.forEach(tx), this.animationId++);
    }
    getTransformTemplate() {
      const { visualElement: a } = this.options;
      return a && a.getProps().transformTemplate;
    }
    willUpdate(a = !0) {
      if (this.root.hasTreeAnimated = !0, this.root.isUpdateBlocked()) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && ih(this), !this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty)
        return;
      this.isLayoutDirty = !0;
      for (let d = 0; d < this.path.length; d++) {
        const f = this.path[d];
        f.shouldResetTransform = !0, f.updateScroll("snapshot"), f.options.layoutRoot && f.willUpdate(!1);
      }
      const { layoutId: s, layout: c } = this.options;
      if (s === void 0 && !c)
        return;
      const u = this.getTransformTemplate();
      this.prevTransformTemplateValue = u ? u(this.latestValues, "") : void 0, this.updateSnapshot(), a && this.notifyListeners("willUpdate");
    }
    update() {
      if (this.updateScheduled = !1, this.isUpdateBlocked()) {
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(yu);
        return;
      }
      this.isUpdating || this.nodes.forEach(Zw), this.isUpdating = !1, this.nodes.forEach(Qw), this.nodes.forEach(Gw), this.nodes.forEach(Kw), this.clearAllSnapshots();
      const s = Kt.now();
      je.delta = sn(0, 1e3 / 60, s - je.timestamp), je.timestamp = s, je.isProcessing = !0, Zi.update.process(je), Zi.preRender.process(je), Zi.render.process(je), je.isProcessing = !1;
    }
    didUpdate() {
      this.updateScheduled || (this.updateScheduled = !0, Rs.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      this.nodes.forEach(qw), this.sharedNodes.forEach(nx);
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0, we.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      we.postRender(() => {
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
      const a = this.layout;
      this.layout = this.measure(!1), this.layoutCorrected = Le(), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
      const { visualElement: s } = this.options;
      s && s.notify("LayoutMeasure", this.layout.layoutBox, a ? a.layoutBox : void 0);
    }
    updateScroll(a = "measure") {
      let s = !!(this.options.layoutScroll && this.instance);
      if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === a && (s = !1), s) {
        const c = r(this.instance);
        this.scroll = {
          animationId: this.root.animationId,
          phase: a,
          isRoot: c,
          offset: n(this.instance),
          wasRoot: this.scroll ? this.scroll.isRoot : c
        };
      }
    }
    resetTransform() {
      if (!o)
        return;
      const a = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout, s = this.projectionDelta && !rh(this.projectionDelta), c = this.getTransformTemplate(), u = c ? c(this.latestValues, "") : void 0, d = u !== this.prevTransformTemplateValue;
      a && (s || gn(this.latestValues) || d) && (o(this.instance, u), this.shouldResetTransform = !1, this.scheduleRender());
    }
    measure(a = !0) {
      const s = this.measurePageBox();
      let c = this.removeElementScroll(s);
      return a && (c = this.removeTransform(c)), ax(c), {
        animationId: this.root.animationId,
        measuredBox: s,
        layoutBox: c,
        latestValues: {},
        source: this.id
      };
    }
    measurePageBox() {
      var a;
      const { visualElement: s } = this.options;
      if (!s)
        return Le();
      const c = s.measureViewportBox();
      if (!(((a = this.scroll) === null || a === void 0 ? void 0 : a.wasRoot) || this.path.some(sx))) {
        const { scroll: d } = this.root;
        d && ($n(c.x, d.offset.x), $n(c.y, d.offset.y));
      }
      return c;
    }
    removeElementScroll(a) {
      var s;
      const c = Le();
      if (at(c, a), !((s = this.scroll) === null || s === void 0) && s.wasRoot)
        return c;
      for (let u = 0; u < this.path.length; u++) {
        const d = this.path[u], { scroll: f, options: h } = d;
        d !== this.root && f && h.layoutScroll && (f.wasRoot && at(c, a), $n(c.x, f.offset.x), $n(c.y, f.offset.y));
      }
      return c;
    }
    applyTransform(a, s = !1) {
      const c = Le();
      at(c, a);
      for (let u = 0; u < this.path.length; u++) {
        const d = this.path[u];
        !s && d.options.layoutScroll && d.scroll && d !== d.root && jn(c, {
          x: -d.scroll.offset.x,
          y: -d.scroll.offset.y
        }), gn(d.latestValues) && jn(c, d.latestValues);
      }
      return gn(this.latestValues) && jn(c, this.latestValues), c;
    }
    removeTransform(a) {
      const s = Le();
      at(s, a);
      for (let c = 0; c < this.path.length; c++) {
        const u = this.path[c];
        if (!u.instance || !gn(u.latestValues))
          continue;
        Ua(u.latestValues) && u.updateSnapshot();
        const d = Le(), f = u.measurePageBox();
        at(d, f), du(s, u.latestValues, u.snapshot ? u.snapshot.layoutBox : void 0, d);
      }
      return gn(this.latestValues) && du(s, this.latestValues), s;
    }
    setTargetDelta(a) {
      this.targetDelta = a, this.root.scheduleUpdateProjection(), this.isProjectionDirty = !0;
    }
    setOptions(a) {
      this.options = {
        ...this.options,
        ...a,
        crossfade: a.crossfade !== void 0 ? a.crossfade : !0
      };
    }
    clearMeasurements() {
      this.scroll = void 0, this.layout = void 0, this.snapshot = void 0, this.prevTransformTemplateValue = void 0, this.targetDelta = void 0, this.target = void 0, this.isLayoutDirty = !1;
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== je.timestamp && this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(a = !1) {
      var s;
      const c = this.getLead();
      this.isProjectionDirty || (this.isProjectionDirty = c.isProjectionDirty), this.isTransformDirty || (this.isTransformDirty = c.isTransformDirty), this.isSharedProjectionDirty || (this.isSharedProjectionDirty = c.isSharedProjectionDirty);
      const u = !!this.resumingFrom || this !== c;
      if (!(a || u && this.isSharedProjectionDirty || this.isProjectionDirty || !((s = this.parent) === null || s === void 0) && s.isProjectionDirty || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize))
        return;
      const { layout: f, layoutId: h } = this.options;
      if (!(!this.layout || !(f || h))) {
        if (this.resolvedRelativeTargetAt = je.timestamp, !this.targetDelta && !this.relativeTarget) {
          const g = this.getClosestProjectingParent();
          g && g.layout && this.animationProgress !== 1 ? (this.relativeParent = g, this.forceRelativeParentToResolveTarget(), this.relativeTarget = Le(), this.relativeTargetOrigin = Le(), wr(this.relativeTargetOrigin, this.layout.layoutBox, g.layout.layoutBox), at(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
        }
        if (!(!this.relativeTarget && !this.targetDelta)) {
          if (this.target || (this.target = Le(), this.targetWithTransforms = Le()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), lw(this.target, this.relativeTarget, this.relativeParent.target)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : at(this.target, this.layout.layoutBox), qf(this.target, this.targetDelta)) : at(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget) {
            this.attemptToResolveRelativeTarget = !1;
            const g = this.getClosestProjectingParent();
            g && !!g.resumingFrom == !!this.resumingFrom && !g.options.layoutScroll && g.target && this.animationProgress !== 1 ? (this.relativeParent = g, this.forceRelativeParentToResolveTarget(), this.relativeTarget = Le(), this.relativeTargetOrigin = Le(), wr(this.relativeTargetOrigin, this.target, g.target), at(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
          }
          dr && vn.resolvedTargetDeltas++;
        }
      }
    }
    getClosestProjectingParent() {
      if (!(!this.parent || Ua(this.parent.latestValues) || Xf(this.parent.latestValues)))
        return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout);
    }
    calcProjection() {
      var a;
      const s = this.getLead(), c = !!this.resumingFrom || this !== s;
      let u = !0;
      if ((this.isProjectionDirty || !((a = this.parent) === null || a === void 0) && a.isProjectionDirty) && (u = !1), c && (this.isSharedProjectionDirty || this.isTransformDirty) && (u = !1), this.resolvedRelativeTargetAt === je.timestamp && (u = !1), u)
        return;
      const { layout: d, layoutId: f } = this.options;
      if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(d || f))
        return;
      at(this.layoutCorrected, this.layout.layoutBox);
      const h = this.treeScale.x, g = this.treeScale.y;
      vw(this.layoutCorrected, this.treeScale, this.path, c), s.layout && !s.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (s.target = s.layout.layoutBox, s.targetWithTransforms = Le());
      const { target: p } = s;
      if (!p) {
        this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      !this.projectionDelta || !this.prevProjectionDelta ? this.createProjectionDeltas() : (lu(this.prevProjectionDelta.x, this.projectionDelta.x), lu(this.prevProjectionDelta.y, this.projectionDelta.y)), br(this.projectionDelta, this.layoutCorrected, p, this.latestValues), (this.treeScale.x !== h || this.treeScale.y !== g || !gu(this.projectionDelta.x, this.prevProjectionDelta.x) || !gu(this.projectionDelta.y, this.prevProjectionDelta.y)) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", p)), dr && vn.recalculatedProjection++;
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(a = !0) {
      var s;
      if ((s = this.options.visualElement) === null || s === void 0 || s.scheduleRender(), a) {
        const c = this.getStack();
        c && c.scheduleRender();
      }
      this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0);
    }
    createProjectionDeltas() {
      this.prevProjectionDelta = Wn(), this.projectionDelta = Wn(), this.projectionDeltaWithTransform = Wn();
    }
    setAnimationOrigin(a, s = !1) {
      const c = this.snapshot, u = c ? c.latestValues : {}, d = { ...this.latestValues }, f = Wn();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !s;
      const h = Le(), g = c ? c.source : void 0, p = this.layout ? this.layout.source : void 0, v = g !== p, y = this.getStack(), w = !y || y.members.length <= 1, b = !!(v && !w && this.options.crossfade === !0 && !this.path.some(ox));
      this.animationProgress = 0;
      let x;
      this.mixTargetDelta = (P) => {
        const T = P / 1e3;
        wu(f.x, a.x, T), wu(f.y, a.y, T), this.setTargetDelta(f), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (wr(h, this.layout.layoutBox, this.relativeParent.layout.layoutBox), rx(this.relativeTarget, this.relativeTargetOrigin, h, T), x && Ow(this.relativeTarget, x) && (this.isProjectionDirty = !1), x || (x = Le()), at(x, this.relativeTarget)), v && (this.animationValues = d, Aw(d, u, this.latestValues, T, b, w)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = T;
      }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(a) {
      this.notifyListeners("animationStart"), this.currentAnimation && this.currentAnimation.stop(), this.resumingFrom && this.resumingFrom.currentAnimation && this.resumingFrom.currentAnimation.stop(), this.pendingAnimation && (Zt(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = we.update(() => {
        Mo.hasAnimatedSinceResize = !0, this.currentAnimation = Uw(0, vu, {
          ...a,
          onUpdate: (s) => {
            this.mixTargetDelta(s), a.onUpdate && a.onUpdate(s);
          },
          onComplete: () => {
            a.onComplete && a.onComplete(), this.completeAnimation();
          }
        }), this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation), this.pendingAnimation = void 0;
      });
    }
    completeAnimation() {
      this.resumingFrom && (this.resumingFrom.currentAnimation = void 0, this.resumingFrom.preserveOpacity = void 0);
      const a = this.getStack();
      a && a.exitAnimationComplete(), this.resumingFrom = this.currentAnimation = this.animationValues = void 0, this.notifyListeners("animationComplete");
    }
    finishAnimation() {
      this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(vu), this.currentAnimation.stop()), this.completeAnimation();
    }
    applyTransformsToTarget() {
      const a = this.getLead();
      let { targetWithTransforms: s, target: c, layout: u, latestValues: d } = a;
      if (!(!s || !c || !u)) {
        if (this !== a && this.layout && u && sh(this.options.animationType, this.layout.layoutBox, u.layoutBox)) {
          c = this.target || Le();
          const f = ot(this.layout.layoutBox.x);
          c.x.min = a.target.x.min, c.x.max = c.x.min + f;
          const h = ot(this.layout.layoutBox.y);
          c.y.min = a.target.y.min, c.y.max = c.y.min + h;
        }
        at(s, c), jn(s, d), br(this.projectionDeltaWithTransform, this.layoutCorrected, s, d);
      }
    }
    registerSharedNode(a, s) {
      this.sharedNodes.has(a) || this.sharedNodes.set(a, new Fw()), this.sharedNodes.get(a).add(s);
      const u = s.options.initialPromotionConfig;
      s.promote({
        transition: u ? u.transition : void 0,
        preserveFollowOpacity: u && u.shouldPreserveFollowOpacity ? u.shouldPreserveFollowOpacity(s) : void 0
      });
    }
    isLead() {
      const a = this.getStack();
      return a ? a.lead === this : !0;
    }
    getLead() {
      var a;
      const { layoutId: s } = this.options;
      return s ? ((a = this.getStack()) === null || a === void 0 ? void 0 : a.lead) || this : this;
    }
    getPrevLead() {
      var a;
      const { layoutId: s } = this.options;
      return s ? (a = this.getStack()) === null || a === void 0 ? void 0 : a.prevLead : void 0;
    }
    getStack() {
      const { layoutId: a } = this.options;
      if (a)
        return this.root.sharedNodes.get(a);
    }
    promote({ needsReset: a, transition: s, preserveFollowOpacity: c } = {}) {
      const u = this.getStack();
      u && u.promote(this, c), a && (this.projectionDelta = void 0, this.needsReset = !0), s && this.setOptions({ transition: s });
    }
    relegate() {
      const a = this.getStack();
      return a ? a.relegate(this) : !1;
    }
    resetSkewAndRotation() {
      const { visualElement: a } = this.options;
      if (!a)
        return;
      let s = !1;
      const { latestValues: c } = a;
      if ((c.z || c.rotate || c.rotateX || c.rotateY || c.rotateZ || c.skewX || c.skewY) && (s = !0), !s)
        return;
      const u = {};
      c.z && aa("z", a, u, this.animationValues);
      for (let d = 0; d < ia.length; d++)
        aa(`rotate${ia[d]}`, a, u, this.animationValues), aa(`skew${ia[d]}`, a, u, this.animationValues);
      a.render();
      for (const d in u)
        a.setStaticValue(d, u[d]), this.animationValues && (this.animationValues[d] = u[d]);
      a.scheduleRender();
    }
    getProjectionStyles(a) {
      var s, c;
      if (!this.instance || this.isSVG)
        return;
      if (!this.isVisible)
        return Hw;
      const u = {
        visibility: ""
      }, d = this.getTransformTemplate();
      if (this.needsReset)
        return this.needsReset = !1, u.opacity = "", u.pointerEvents = Po(a == null ? void 0 : a.pointerEvents) || "", u.transform = d ? d(this.latestValues, "") : "none", u;
      const f = this.getLead();
      if (!this.projectionDelta || !this.layout || !f.target) {
        const v = {};
        return this.options.layoutId && (v.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1, v.pointerEvents = Po(a == null ? void 0 : a.pointerEvents) || ""), this.hasProjected && !gn(this.latestValues) && (v.transform = d ? d({}, "") : "none", this.hasProjected = !1), v;
      }
      const h = f.animationValues || f.latestValues;
      this.applyTransformsToTarget(), u.transform = Vw(this.projectionDeltaWithTransform, this.treeScale, h), d && (u.transform = d(h, u.transform));
      const { x: g, y: p } = this.projectionDelta;
      u.transformOrigin = `${g.origin * 100}% ${p.origin * 100}% 0`, f.animationValues ? u.opacity = f === this ? (c = (s = h.opacity) !== null && s !== void 0 ? s : this.latestValues.opacity) !== null && c !== void 0 ? c : 1 : this.preserveOpacity ? this.latestValues.opacity : h.opacityExit : u.opacity = f === this ? h.opacity !== void 0 ? h.opacity : "" : h.opacityExit !== void 0 ? h.opacityExit : 0;
      for (const v in Wo) {
        if (h[v] === void 0)
          continue;
        const { correct: y, applyTo: w } = Wo[v], b = u.transform === "none" ? h[v] : y(h[v], f);
        if (w) {
          const x = w.length;
          for (let P = 0; P < x; P++)
            u[w[P]] = b;
        } else
          u[v] = b;
      }
      return this.options.layoutId && (u.pointerEvents = f === this ? Po(a == null ? void 0 : a.pointerEvents) || "" : "none"), u;
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    // Only run on root
    resetTree() {
      this.root.nodes.forEach((a) => {
        var s;
        return (s = a.currentAnimation) === null || s === void 0 ? void 0 : s.stop();
      }), this.root.nodes.forEach(yu), this.root.sharedNodes.clear();
    }
  };
}
function Gw(e) {
  e.updateLayout();
}
function Kw(e) {
  var t;
  const n = ((t = e.resumeFrom) === null || t === void 0 ? void 0 : t.snapshot) || e.snapshot;
  if (e.isLead() && e.layout && n && e.hasListeners("didUpdate")) {
    const { layoutBox: r, measuredBox: o } = e.layout, { animationType: i } = e.options, a = n.source !== e.layout.source;
    i === "size" ? st((f) => {
      const h = a ? n.measuredBox[f] : n.layoutBox[f], g = ot(h);
      h.min = r[f].min, h.max = h.min + g;
    }) : sh(i, n.layoutBox, r) && st((f) => {
      const h = a ? n.measuredBox[f] : n.layoutBox[f], g = ot(r[f]);
      h.max = h.min + g, e.relativeTarget && !e.currentAnimation && (e.isProjectionDirty = !0, e.relativeTarget[f].max = e.relativeTarget[f].min + g);
    });
    const s = Wn();
    br(s, r, n.layoutBox);
    const c = Wn();
    a ? br(c, e.applyTransform(o, !0), n.measuredBox) : br(c, r, n.layoutBox);
    const u = !rh(s);
    let d = !1;
    if (!e.resumeFrom) {
      const f = e.getClosestProjectingParent();
      if (f && !f.resumeFrom) {
        const { snapshot: h, layout: g } = f;
        if (h && g) {
          const p = Le();
          wr(p, n.layoutBox, h.layoutBox);
          const v = Le();
          wr(v, r, g.layoutBox), oh(p, v) || (d = !0), f.options.layoutRoot && (e.relativeTarget = v, e.relativeTargetOrigin = p, e.relativeParent = f);
        }
      }
    }
    e.notifyListeners("didUpdate", {
      layout: r,
      snapshot: n,
      delta: c,
      layoutDelta: s,
      hasLayoutChanged: u,
      hasRelativeTargetChanged: d
    });
  } else if (e.isLead()) {
    const { onExitComplete: r } = e.options;
    r && r();
  }
  e.options.transition = void 0;
}
function Yw(e) {
  dr && vn.totalNodes++, e.parent && (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty), e.isSharedProjectionDirty || (e.isSharedProjectionDirty = !!(e.isProjectionDirty || e.parent.isProjectionDirty || e.parent.isSharedProjectionDirty)), e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty));
}
function Xw(e) {
  e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
}
function qw(e) {
  e.clearSnapshot();
}
function yu(e) {
  e.clearMeasurements();
}
function Zw(e) {
  e.isLayoutDirty = !1;
}
function Qw(e) {
  const { visualElement: t } = e.options;
  t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"), e.resetTransform();
}
function bu(e) {
  e.finishAnimation(), e.targetDelta = e.relativeTarget = e.target = void 0, e.isProjectionDirty = !0;
}
function Jw(e) {
  e.resolveTargetDelta();
}
function ex(e) {
  e.calcProjection();
}
function tx(e) {
  e.resetSkewAndRotation();
}
function nx(e) {
  e.removeLeadSnapshot();
}
function wu(e, t, n) {
  e.translate = De(t.translate, 0, n), e.scale = De(t.scale, 1, n), e.origin = t.origin, e.originPoint = t.originPoint;
}
function xu(e, t, n, r) {
  e.min = De(t.min, n.min, r), e.max = De(t.max, n.max, r);
}
function rx(e, t, n, r) {
  xu(e.x, t.x, n.x, r), xu(e.y, t.y, n.y, r);
}
function ox(e) {
  return e.animationValues && e.animationValues.opacityExit !== void 0;
}
const ix = {
  duration: 0.45,
  ease: [0.4, 0, 0.1, 1]
}, Cu = (e) => typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(e), Su = Cu("applewebkit/") && !Cu("chrome/") ? Math.round : Ue;
function Nu(e) {
  e.min = Su(e.min), e.max = Su(e.max);
}
function ax(e) {
  Nu(e.x), Nu(e.y);
}
function sh(e, t, n) {
  return e === "position" || e === "preserve-aspect" && !sw(pu(t), pu(n), 0.2);
}
function sx(e) {
  var t;
  return e !== e.root && ((t = e.scroll) === null || t === void 0 ? void 0 : t.wasRoot);
}
const lx = ah({
  attachResizeListener: (e, t) => Ht(e, "resize", t),
  measureScroll: () => ({
    x: document.documentElement.scrollLeft || document.body.scrollLeft,
    y: document.documentElement.scrollTop || document.body.scrollTop
  }),
  checkIsScrollRoot: () => !0
}), sa = {
  current: void 0
}, lh = ah({
  measureScroll: (e) => ({
    x: e.scrollLeft,
    y: e.scrollTop
  }),
  defaultParent: () => {
    if (!sa.current) {
      const e = new lx({});
      e.mount(window), e.setOptions({ layoutScroll: !0 }), sa.current = e;
    }
    return sa.current;
  },
  resetTransform: (e, t) => {
    e.style.transform = t !== void 0 ? t : "none";
  },
  checkIsScrollRoot: (e) => window.getComputedStyle(e).position === "fixed"
}), cx = {
  pan: {
    Feature: Sw
  },
  drag: {
    Feature: Cw,
    ProjectionNode: lh,
    MeasureLayout: eh
  }
};
function Mu(e, t) {
  const n = t ? "pointerenter" : "pointerleave", r = t ? "onHoverStart" : "onHoverEnd", o = (i, a) => {
    if (i.pointerType === "touch" || zf())
      return;
    const s = e.getProps();
    e.animationState && s.whileHover && e.animationState.setActive("whileHover", t);
    const c = s[r];
    c && we.postRender(() => c(i, a));
  };
  return Xt(e.current, n, o, {
    passive: !e.getProps()[r]
  });
}
class ux extends un {
  mount() {
    this.unmount = Yt(Mu(this.node, !0), Mu(this.node, !1));
  }
  unmount() {
  }
}
class dx extends un {
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
    this.unmount = Yt(Ht(this.node.current, "focus", () => this.onFocus()), Ht(this.node.current, "blur", () => this.onBlur()));
  }
  unmount() {
  }
}
const ch = (e, t) => t ? e === t ? !0 : ch(e, t.parentElement) : !1;
function la(e, t) {
  if (!t)
    return;
  const n = new PointerEvent("pointer" + e);
  t(n, gi(n));
}
class fx extends un {
  constructor() {
    super(...arguments), this.removeStartListeners = Ue, this.removeEndListeners = Ue, this.removeAccessibleListeners = Ue, this.startPointerPress = (t, n) => {
      if (this.isPressing)
        return;
      this.removeEndListeners();
      const r = this.node.getProps(), i = Xt(window, "pointerup", (s, c) => {
        if (!this.checkPressEnd())
          return;
        const { onTap: u, onTapCancel: d, globalTapTarget: f } = this.node.getProps(), h = !f && !ch(this.node.current, s.target) ? d : u;
        h && we.update(() => h(s, c));
      }, {
        passive: !(r.onTap || r.onPointerUp)
      }), a = Xt(window, "pointercancel", (s, c) => this.cancelPress(s, c), {
        passive: !(r.onTapCancel || r.onPointerCancel)
      });
      this.removeEndListeners = Yt(i, a), this.startPress(t, n);
    }, this.startAccessiblePress = () => {
      const t = (i) => {
        if (i.key !== "Enter" || this.isPressing)
          return;
        const a = (s) => {
          s.key !== "Enter" || !this.checkPressEnd() || la("up", (c, u) => {
            const { onTap: d } = this.node.getProps();
            d && we.postRender(() => d(c, u));
          });
        };
        this.removeEndListeners(), this.removeEndListeners = Ht(this.node.current, "keyup", a), la("down", (s, c) => {
          this.startPress(s, c);
        });
      }, n = Ht(this.node.current, "keydown", t), r = () => {
        this.isPressing && la("cancel", (i, a) => this.cancelPress(i, a));
      }, o = Ht(this.node.current, "blur", r);
      this.removeAccessibleListeners = Yt(n, o);
    };
  }
  startPress(t, n) {
    this.isPressing = !0;
    const { onTapStart: r, whileTap: o } = this.node.getProps();
    o && this.node.animationState && this.node.animationState.setActive("whileTap", !0), r && we.postRender(() => r(t, n));
  }
  checkPressEnd() {
    return this.removeEndListeners(), this.isPressing = !1, this.node.getProps().whileTap && this.node.animationState && this.node.animationState.setActive("whileTap", !1), !zf();
  }
  cancelPress(t, n) {
    if (!this.checkPressEnd())
      return;
    const { onTapCancel: r } = this.node.getProps();
    r && we.postRender(() => r(t, n));
  }
  mount() {
    const t = this.node.getProps(), n = Xt(t.globalTapTarget ? window : this.node.current, "pointerdown", this.startPointerPress, {
      passive: !(t.onTapStart || t.onPointerStart)
    }), r = Ht(this.node.current, "focus", this.startAccessiblePress);
    this.removeStartListeners = Yt(n, r);
  }
  unmount() {
    this.removeStartListeners(), this.removeEndListeners(), this.removeAccessibleListeners();
  }
}
const za = /* @__PURE__ */ new WeakMap(), ca = /* @__PURE__ */ new WeakMap(), hx = (e) => {
  const t = za.get(e.target);
  t && t(e);
}, mx = (e) => {
  e.forEach(hx);
};
function px({ root: e, ...t }) {
  const n = e || document;
  ca.has(n) || ca.set(n, {});
  const r = ca.get(n), o = JSON.stringify(t);
  return r[o] || (r[o] = new IntersectionObserver(mx, { root: e, ...t })), r[o];
}
function gx(e, t, n) {
  const r = px(t);
  return za.set(e, n), r.observe(e), () => {
    za.delete(e), r.unobserve(e);
  };
}
const vx = {
  some: 0,
  all: 1
};
class yx extends un {
  constructor() {
    super(...arguments), this.hasEnteredView = !1, this.isInView = !1;
  }
  startObserver() {
    this.unmount();
    const { viewport: t = {} } = this.node.getProps(), { root: n, margin: r, amount: o = "some", once: i } = t, a = {
      root: n ? n.current : void 0,
      rootMargin: r,
      threshold: typeof o == "number" ? o : vx[o]
    }, s = (c) => {
      const { isIntersecting: u } = c;
      if (this.isInView === u || (this.isInView = u, i && !u && this.hasEnteredView))
        return;
      u && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", u);
      const { onViewportEnter: d, onViewportLeave: f } = this.node.getProps(), h = u ? d : f;
      h && h(c);
    };
    return gx(this.node.current, a, s);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u")
      return;
    const { props: t, prevProps: n } = this.node;
    ["amount", "margin", "root"].some(bx(t, n)) && this.startObserver();
  }
  unmount() {
  }
}
function bx({ viewport: e = {} }, { viewport: t = {} } = {}) {
  return (n) => e[n] !== t[n];
}
const wx = {
  inView: {
    Feature: yx
  },
  tap: {
    Feature: fx
  },
  focus: {
    Feature: dx
  },
  hover: {
    Feature: ux
  }
}, xx = {
  layout: {
    ProjectionNode: lh,
    MeasureLayout: eh
  }
}, yi = nt({}), Is = typeof window < "u", Ls = Is ? zd : Fe, uh = nt({ strict: !1 });
let Pu = !1;
function Cx(e, t, n, r, o) {
  var i;
  const { visualElement: a } = Pe(yi), s = Pe(uh), c = Pe(vi), u = Pe(fs).reducedMotion, d = Ve();
  r = r || s.renderer, !d.current && r && (d.current = r(e, {
    visualState: t,
    parent: a,
    props: n,
    presenceContext: c,
    blockInitialAnimation: c ? c.initial === !1 : !1,
    reducedMotionConfig: u
  }));
  const f = d.current, h = Pe(Jf);
  f && !f.projection && o && (f.type === "html" || f.type === "svg") && Nx(d.current, n, o, h), Gd(() => {
    f && f.update(n, c);
  });
  const g = n[Of], p = Ve(!!g && !window.MotionHandoffIsComplete && ((i = window.MotionHasOptimisedAnimation) === null || i === void 0 ? void 0 : i.call(window, g)));
  return Ls(() => {
    f && (f.updateFeatures(), Rs.render(f.render), p.current && f.animationState && f.animationState.animateChanges());
  }), Fe(() => {
    f && (!p.current && f.animationState && f.animationState.animateChanges(), p.current = !1, Pu || (Pu = !0, queueMicrotask(Sx)));
  }), f;
}
function Sx() {
  window.MotionHandoffIsComplete = !0;
}
function Nx(e, t, n, r) {
  const { layoutId: o, layout: i, drag: a, dragConstraints: s, layoutScroll: c, layoutRoot: u } = t;
  e.projection = new n(e.latestValues, t["data-framer-portal-id"] ? void 0 : dh(e.parent)), e.projection.setOptions({
    layoutId: o,
    layout: i,
    alwaysMeasureLayout: !!a || s && Bn(s),
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
function dh(e) {
  if (e)
    return e.options.allowProjection !== !1 ? e.projection : dh(e.parent);
}
function Mx(e, t, n) {
  return It(
    (r) => {
      r && e.mount && e.mount(r), t && (r ? t.mount(r) : t.unmount()), n && (typeof n == "function" ? n(r) : Bn(n) && (n.current = r));
    },
    /**
     * Only pass a new ref callback to React if we've received a visual element
     * factory. Otherwise we'll be mounting/remounting every time externalRef
     * or other dependencies change.
     */
    [t]
  );
}
function bi(e) {
  return kr(e.animate) || ys.some((t) => Er(e[t]));
}
function fh(e) {
  return !!(bi(e) || e.variants);
}
function Px(e, t) {
  if (bi(e)) {
    const { initial: n, animate: r } = e;
    return {
      initial: n === !1 || Er(n) ? n : void 0,
      animate: Er(r) ? r : void 0
    };
  }
  return e.inherit !== !1 ? t : {};
}
function Tx(e) {
  const { initial: t, animate: n } = Px(e, Pe(yi));
  return St(() => ({ initial: t, animate: n }), [Tu(t), Tu(n)]);
}
function Tu(e) {
  return Array.isArray(e) ? e.join(" ") : e;
}
const ku = {
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
}, Xn = {};
for (const e in ku)
  Xn[e] = {
    isEnabled: (t) => ku[e].some((n) => !!t[n])
  };
function kx(e) {
  for (const t in e)
    Xn[t] = {
      ...Xn[t],
      ...e[t]
    };
}
const Ex = Symbol.for("motionComponentSymbol");
function Ax({ preloadedFeatures: e, createVisualElement: t, useRender: n, useVisualState: r, Component: o }) {
  e && kx(e);
  function i(s, c) {
    let u;
    const d = {
      ...Pe(fs),
      ...s,
      layoutId: Dx(s)
    }, { isStatic: f } = d, h = Tx(s), g = r(s, f);
    if (!f && Is) {
      _x(d, e);
      const p = Rx(d);
      u = p.MeasureLayout, h.visualElement = Cx(o, g, d, t, p.ProjectionNode);
    }
    return N(yi.Provider, { value: h, children: [u && h.visualElement ? l(u, { visualElement: h.visualElement, ...d }) : null, n(o, s, Mx(g, h.visualElement, c), g, f, h.visualElement)] });
  }
  const a = X(i);
  return a[Ex] = o, a;
}
function Dx({ layoutId: e }) {
  const t = Pe(Rr).id;
  return t && e !== void 0 ? t + "-" + e : e;
}
function _x(e, t) {
  const n = Pe(uh).strict;
  if (process.env.NODE_ENV !== "production" && t && n) {
    const r = "You have rendered a `motion` component within a `LazyMotion` component. This will break tree shaking. Import and render a `m` component instead.";
    e.ignoreStrict ? er(!1, r) : Qt(!1, r);
  }
}
function Rx(e) {
  const { drag: t, layout: n } = Xn;
  if (!t && !n)
    return {};
  const r = { ...t, ...n };
  return {
    MeasureLayout: t != null && t.isEnabled(e) || n != null && n.isEnabled(e) ? r.MeasureLayout : void 0,
    ProjectionNode: r.ProjectionNode
  };
}
const Ix = [
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
function Os(e) {
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
      !!(Ix.indexOf(e) > -1 || /**
       * If it contains a capital letter, it's an SVG component
       */
      /[A-Z]/u.test(e))
    )
  );
}
function hh(e, { style: t, vars: n }, r, o) {
  Object.assign(e.style, t, o && o.getProjectionStyles(r));
  for (const i in n)
    e.style.setProperty(i, n[i]);
}
const mh = /* @__PURE__ */ new Set([
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
function ph(e, t, n, r) {
  hh(e, t, void 0, r);
  for (const o in t.attrs)
    e.setAttribute(mh.has(o) ? o : pi(o), t.attrs[o]);
}
function gh(e, { layout: t, layoutId: n }) {
  return cn.has(e) || e.startsWith("origin") || (t || n !== void 0) && (!!Wo[e] || e === "opacity");
}
function Fs(e, t, n) {
  var r;
  const { style: o } = e, i = {};
  for (const a in o)
    (Ge(o[a]) || t.style && Ge(t.style[a]) || gh(a, e) || ((r = n == null ? void 0 : n.getValue(a)) === null || r === void 0 ? void 0 : r.liveStyle) !== void 0) && (i[a] = o[a]);
  return n && o && typeof o.willChange == "string" && (n.applyWillChange = !1), i;
}
function vh(e, t, n) {
  const r = Fs(e, t, n);
  for (const o in e)
    if (Ge(e[o]) || Ge(t[o])) {
      const i = jr.indexOf(o) !== -1 ? "attr" + o.charAt(0).toUpperCase() + o.substring(1) : o;
      r[i] = e[o];
    }
  return r;
}
function Lx({ applyWillChange: e = !1, scrapeMotionValuesFromProps: t, createRenderState: n, onMount: r }, o, i, a, s) {
  const c = {
    latestValues: Fx(o, i, a, s ? !1 : e, t),
    renderState: n()
  };
  return r && (c.mount = (u) => r(o, u, c)), c;
}
const yh = (e) => (t, n) => {
  const r = Pe(yi), o = Pe(vi), i = () => Lx(e, t, r, o, n);
  return n ? i() : hs(i);
};
function Ox(e, t) {
  const n = Vf(t);
  n && hi(e, n);
}
function Eu(e, t, n) {
  const r = Array.isArray(t) ? t : [t];
  for (let o = 0; o < r.length; o++) {
    const i = gs(e, r[o]);
    if (i) {
      const { transitionEnd: a, transition: s, ...c } = i;
      n(c, a);
    }
  }
}
function Fx(e, t, n, r, o) {
  var i;
  const a = {}, s = [], c = r && ((i = e.style) === null || i === void 0 ? void 0 : i.willChange) === void 0, u = o(e, {});
  for (const y in u)
    a[y] = Po(u[y]);
  let { initial: d, animate: f } = e;
  const h = bi(e), g = fh(e);
  t && g && !h && e.inherit !== !1 && (d === void 0 && (d = t.initial), f === void 0 && (f = t.animate));
  let p = n ? n.initial === !1 : !1;
  p = p || d === !1;
  const v = p ? f : d;
  return v && typeof v != "boolean" && !kr(v) && Eu(e, v, (y, w) => {
    for (const b in y) {
      let x = y[b];
      if (Array.isArray(x)) {
        const P = p ? x.length - 1 : 0;
        x = x[P];
      }
      x !== null && (a[b] = x);
    }
    for (const b in w)
      a[b] = w[b];
  }), c && (f && d !== !1 && !kr(f) && Eu(e, f, (y) => {
    for (const w in y)
      Ox(s, w);
  }), s.length && (a.willChange = s.join(","))), a;
}
const Vs = () => ({
  style: {},
  transform: {},
  transformOrigin: {},
  vars: {}
}), bh = () => ({
  ...Vs(),
  attrs: {}
}), wh = (e, t) => t && typeof e == "number" ? t.transform(e) : e, Vx = {
  x: "translateX",
  y: "translateY",
  z: "translateZ",
  transformPerspective: "perspective"
}, Bx = jr.length;
function Wx(e, t, n) {
  let r = "", o = !0;
  for (let i = 0; i < Bx; i++) {
    const a = jr[i], s = e[a];
    if (s === void 0)
      continue;
    let c = !0;
    if (typeof s == "number" ? c = s === (a.startsWith("scale") ? 1 : 0) : c = parseFloat(s) === 0, !c || n) {
      const u = wh(s, Ns[a]);
      if (!c) {
        o = !1;
        const d = Vx[a] || a;
        r += `${d}(${u}) `;
      }
      n && (t[a] = u);
    }
  }
  return r = r.trim(), n ? r = n(t, o ? "" : r) : o && (r = "none"), r;
}
function Bs(e, t, n) {
  const { style: r, vars: o, transformOrigin: i } = e;
  let a = !1, s = !1;
  for (const c in t) {
    const u = t[c];
    if (cn.has(c)) {
      a = !0;
      continue;
    } else if (of(c)) {
      o[c] = u;
      continue;
    } else {
      const d = wh(u, Ns[c]);
      c.startsWith("origin") ? (s = !0, i[c] = d) : r[c] = d;
    }
  }
  if (t.transform || (a || n ? r.transform = Wx(t, e.transform, n) : r.transform && (r.transform = "none")), s) {
    const { originX: c = "50%", originY: u = "50%", originZ: d = 0 } = i;
    r.transformOrigin = `${c} ${u} ${d}`;
  }
}
function Au(e, t, n) {
  return typeof e == "string" ? e : he.transform(t + n * e);
}
function $x(e, t, n) {
  const r = Au(t, e.x, e.width), o = Au(n, e.y, e.height);
  return `${r} ${o}`;
}
const jx = {
  offset: "stroke-dashoffset",
  array: "stroke-dasharray"
}, Ux = {
  offset: "strokeDashoffset",
  array: "strokeDasharray"
};
function Hx(e, t, n = 1, r = 0, o = !0) {
  e.pathLength = 1;
  const i = o ? jx : Ux;
  e[i.offset] = he.transform(-r);
  const a = he.transform(t), s = he.transform(n);
  e[i.array] = `${a} ${s}`;
}
function Ws(e, {
  attrX: t,
  attrY: n,
  attrScale: r,
  originX: o,
  originY: i,
  pathLength: a,
  pathSpacing: s = 1,
  pathOffset: c = 0,
  // This is object creation, which we try to avoid per-frame.
  ...u
}, d, f) {
  if (Bs(e, u, f), d) {
    e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
    return;
  }
  e.attrs = e.style, e.style = {};
  const { attrs: h, style: g, dimensions: p } = e;
  h.transform && (p && (g.transform = h.transform), delete h.transform), p && (o !== void 0 || i !== void 0 || g.transform) && (g.transformOrigin = $x(p, o !== void 0 ? o : 0.5, i !== void 0 ? i : 0.5)), t !== void 0 && (h.x = t), n !== void 0 && (h.y = n), r !== void 0 && (h.scale = r), a !== void 0 && Hx(h, a, s, c, !1);
}
const $s = (e) => typeof e == "string" && e.toLowerCase() === "svg", zx = {
  useVisualState: yh({
    scrapeMotionValuesFromProps: vh,
    createRenderState: bh,
    onMount: (e, t, { renderState: n, latestValues: r }) => {
      we.read(() => {
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
      }), we.render(() => {
        Ws(n, r, $s(t.tagName), e.transformTemplate), ph(t, n);
      });
    }
  })
}, Gx = {
  useVisualState: yh({
    applyWillChange: !0,
    scrapeMotionValuesFromProps: Fs,
    createRenderState: Vs
  })
};
function xh(e, t, n) {
  for (const r in t)
    !Ge(t[r]) && !gh(r, n) && (e[r] = t[r]);
}
function Kx({ transformTemplate: e }, t) {
  return St(() => {
    const n = Vs();
    return Bs(n, t, e), Object.assign({}, n.vars, n.style);
  }, [t]);
}
function Yx(e, t) {
  const n = e.style || {}, r = {};
  return xh(r, n, e), Object.assign(r, Kx(e, t)), r;
}
function Xx(e, t) {
  const n = {}, r = Yx(e, t);
  return e.drag && e.dragListener !== !1 && (n.draggable = !1, r.userSelect = r.WebkitUserSelect = r.WebkitTouchCallout = "none", r.touchAction = e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`), e.tabIndex === void 0 && (e.onTap || e.onTapStart || e.whileTap) && (n.tabIndex = 0), n.style = r, n;
}
function qx(e, t, n, r) {
  const o = St(() => {
    const i = bh();
    return Ws(i, t, $s(r), e.transformTemplate), {
      ...i.attrs,
      style: { ...i.style }
    };
  }, [t]);
  if (e.style) {
    const i = {};
    xh(i, e.style, e), o.style = { ...i, ...o.style };
  }
  return o;
}
function Zx(e = !1) {
  return (n, r, o, { latestValues: i }, a) => {
    const c = (Os(n) ? qx : Xx)(r, i, a, n), u = Zy(r, typeof n == "string", e), d = n !== Kd ? { ...u, ...c, ref: o } : {}, { children: f } = r, h = St(() => Ge(f) ? f.get() : f, [f]);
    return Ro(n, {
      ...d,
      children: h
    });
  };
}
function Qx(e, t) {
  return function(r, { forwardMotionProps: o } = { forwardMotionProps: !1 }) {
    const a = {
      ...Os(r) ? zx : Gx,
      preloadedFeatures: e,
      useRender: Zx(o),
      createVisualElement: t,
      Component: r
    };
    return Ax(a);
  };
}
const Ga = { current: null }, Ch = { current: !1 };
function Jx() {
  if (Ch.current = !0, !!Is)
    if (window.matchMedia) {
      const e = window.matchMedia("(prefers-reduced-motion)"), t = () => Ga.current = e.matches;
      e.addListener(t), t();
    } else
      Ga.current = !1;
}
function eC(e, t, n) {
  for (const r in t) {
    const o = t[r], i = n[r];
    if (Ge(o))
      e.addValue(r, o), process.env.NODE_ENV === "development" && ui(o.version === "11.5.4", `Attempting to mix Framer Motion versions ${o.version} with 11.5.4 may not work as expected.`);
    else if (Ge(i))
      e.addValue(r, _r(o, { owner: e }));
    else if (i !== o)
      if (e.hasValue(r)) {
        const a = e.getValue(r);
        a.liveStyle === !0 ? a.jump(o) : a.hasAnimated || a.set(o);
      } else {
        const a = e.getStaticValue(r);
        e.addValue(r, _r(a !== void 0 ? a : o, { owner: e }));
      }
  }
  for (const r in n)
    t[r] === void 0 && e.removeValue(r);
  return t;
}
const Du = /* @__PURE__ */ new WeakMap(), tC = [...lf, ze, ln], nC = (e) => tC.find(sf(e)), _u = [
  "AnimationStart",
  "AnimationComplete",
  "Update",
  "BeforeLayoutMeasure",
  "LayoutMeasure",
  "LayoutAnimationStart",
  "LayoutAnimationComplete"
], rC = ys.length;
class oC {
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
  constructor({ parent: t, props: n, presenceContext: r, reducedMotionConfig: o, blockInitialAnimation: i, visualState: a }, s = {}) {
    this.applyWillChange = !1, this.current = null, this.children = /* @__PURE__ */ new Set(), this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.values = /* @__PURE__ */ new Map(), this.KeyframeResolver = Cs, this.features = {}, this.valueSubscriptions = /* @__PURE__ */ new Map(), this.prevMotionValues = {}, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
      this.isRenderScheduled = !1, this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection));
    }, this.isRenderScheduled = !1, this.scheduleRender = () => {
      this.isRenderScheduled || (this.isRenderScheduled = !0, we.render(this.render, !1, !0));
    };
    const { latestValues: c, renderState: u } = a;
    this.latestValues = c, this.baseTarget = { ...c }, this.initialValues = n.initial ? { ...c } : {}, this.renderState = u, this.parent = t, this.props = n, this.presenceContext = r, this.depth = t ? t.depth + 1 : 0, this.reducedMotionConfig = o, this.options = s, this.blockInitialAnimation = !!i, this.isControllingVariants = bi(n), this.isVariantNode = fh(n), this.isVariantNode && (this.variantChildren = /* @__PURE__ */ new Set()), this.manuallyAnimateOnMount = !!(t && t.current);
    const { willChange: d, ...f } = this.scrapeMotionValuesFromProps(n, {}, this);
    for (const h in f) {
      const g = f[h];
      c[h] !== void 0 && Ge(g) && g.set(c[h], !1);
    }
  }
  mount(t) {
    this.current = t, Du.set(t, this), this.projection && !this.projection.instance && this.projection.mount(t), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((n, r) => this.bindToMotionValue(r, n)), Ch.current || Jx(), this.shouldReduceMotion = this.reducedMotionConfig === "never" ? !1 : this.reducedMotionConfig === "always" ? !0 : Ga.current, process.env.NODE_ENV !== "production" && ui(this.shouldReduceMotion !== !0, "You have Reduced Motion enabled on your device. Animations may not appear as expected."), this.parent && this.parent.children.add(this), this.update(this.props, this.presenceContext);
  }
  unmount() {
    Du.delete(this.current), this.projection && this.projection.unmount(), Zt(this.notifyUpdate), Zt(this.render), this.valueSubscriptions.forEach((t) => t()), this.valueSubscriptions.clear(), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent && this.parent.children.delete(this);
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
    const r = cn.has(t), o = n.on("change", (s) => {
      this.latestValues[t] = s, this.props.onUpdate && we.preRender(this.notifyUpdate), r && this.projection && (this.projection.isTransformDirty = !0);
    }), i = n.on("renderRequest", this.scheduleRender);
    let a;
    window.MotionCheckAppearSync && (a = window.MotionCheckAppearSync(this, t, n)), this.valueSubscriptions.set(t, () => {
      o(), i(), a && a(), n.owner && n.stop();
    });
  }
  sortNodePosition(t) {
    return !this.current || !this.sortInstanceNodePosition || this.type !== t.type ? 0 : this.sortInstanceNodePosition(this.current, t.current);
  }
  updateFeatures() {
    let t = "animation";
    for (t in Xn) {
      const n = Xn[t];
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
    return this.current ? this.measureInstanceViewportBox(this.current, this.props) : Le();
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
    for (let r = 0; r < _u.length; r++) {
      const o = _u[r];
      this.propEventSubscriptions[o] && (this.propEventSubscriptions[o](), delete this.propEventSubscriptions[o]);
      const i = "on" + o, a = t[i];
      a && (this.propEventSubscriptions[o] = this.on(o, a));
    }
    this.prevMotionValues = eC(this, this.scrapeMotionValuesFromProps(t, this.prevProps, this), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue();
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
    for (let r = 0; r < rC; r++) {
      const o = ys[r], i = this.props[o];
      (Er(i) || i === !1) && (n[o] = i);
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
    return r === void 0 && n !== void 0 && (r = _r(n === null ? void 0 : n, { owner: this }), this.addValue(t, r)), r;
  }
  /**
   * If we're trying to animate to a previously unencountered value,
   * we need to check for it in our state and as a last resort read it
   * directly from the instance (which might have performance implications).
   */
  readValue(t, n) {
    var r;
    let o = this.latestValues[t] !== void 0 || !this.current ? this.latestValues[t] : (r = this.getBaseTargetFromProps(this.props, t)) !== null && r !== void 0 ? r : this.readValueFromInstance(this.current, t, this.options);
    return o != null && (typeof o == "string" && (nf(o) || tf(o)) ? o = parseFloat(o) : !nC(o) && ln.test(n) && (o = gf(t, n)), this.setBaseTarget(t, Ge(o) ? o.get() : o)), Ge(o) ? o.get() : o;
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
      const a = gs(this.props, r, (n = this.presenceContext) === null || n === void 0 ? void 0 : n.custom);
      a && (o = a[t]);
    }
    if (r && o !== void 0)
      return o;
    const i = this.getBaseTargetFromProps(this.props, t);
    return i !== void 0 && !Ge(i) ? i : this.initialValues[t] !== void 0 && o === void 0 ? void 0 : this.baseTarget[t];
  }
  on(t, n) {
    return this.events[t] || (this.events[t] = new _s()), this.events[t].add(n);
  }
  notify(t, ...n) {
    this.events[t] && this.events[t].notify(...n);
  }
}
class Sh extends oC {
  constructor() {
    super(...arguments), this.KeyframeResolver = vf;
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
function iC(e) {
  return window.getComputedStyle(e);
}
class aC extends Sh {
  constructor() {
    super(...arguments), this.type = "html", this.applyWillChange = !0, this.renderInstance = hh;
  }
  readValueFromInstance(t, n) {
    if (cn.has(n)) {
      const r = Ms(n);
      return r && r.default || 0;
    } else {
      const r = iC(t), o = (of(n) ? r.getPropertyValue(n) : r[n]) || 0;
      return typeof o == "string" ? o.trim() : o;
    }
  }
  measureInstanceViewportBox(t, { transformPagePoint: n }) {
    return Zf(t, n);
  }
  build(t, n, r) {
    Bs(t, n, r.transformTemplate);
  }
  scrapeMotionValuesFromProps(t, n, r) {
    return Fs(t, n, r);
  }
  handleChildMotionValue() {
    this.childSubscription && (this.childSubscription(), delete this.childSubscription);
    const { children: t } = this.props;
    Ge(t) && (this.childSubscription = t.on("change", (n) => {
      this.current && (this.current.textContent = `${n}`);
    }));
  }
}
class sC extends Sh {
  constructor() {
    super(...arguments), this.type = "svg", this.isSVGTag = !1, this.measureInstanceViewportBox = Le;
  }
  getBaseTargetFromProps(t, n) {
    return t[n];
  }
  readValueFromInstance(t, n) {
    if (cn.has(n)) {
      const r = Ms(n);
      return r && r.default || 0;
    }
    return n = mh.has(n) ? n : pi(n), t.getAttribute(n);
  }
  scrapeMotionValuesFromProps(t, n, r) {
    return vh(t, n, r);
  }
  build(t, n, r) {
    Ws(t, n, this.isSVGTag, r.transformTemplate);
  }
  renderInstance(t, n, r, o) {
    ph(t, n, r, o);
  }
  mount(t) {
    this.isSVGTag = $s(t.tagName), super.mount(t);
  }
}
const lC = (e, t) => Os(e) ? new sC(t) : new aC(t, {
  allowProjection: e !== Kd
}), cC = /* @__PURE__ */ Qx({
  ...Qb,
  ...wx,
  ...cx,
  ...xx
}, lC), Nt = /* @__PURE__ */ K0(cC);
class uC extends m.Component {
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
function dC({ children: e, isPresent: t }) {
  const n = si(), r = Ve(null), o = Ve({
    width: 0,
    height: 0,
    top: 0,
    left: 0
  }), { nonce: i } = Pe(fs);
  return Gd(() => {
    const { width: a, height: s, top: c, left: u } = o.current;
    if (t || !r.current || !a || !s)
      return;
    r.current.dataset.motionPopId = n;
    const d = document.createElement("style");
    return i && (d.nonce = i), document.head.appendChild(d), d.sheet && d.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${a}px !important;
            height: ${s}px !important;
            top: ${c}px !important;
            left: ${u}px !important;
          }
        `), () => {
      document.head.removeChild(d);
    };
  }, [t]), l(uC, { isPresent: t, childRef: r, sizeRef: o, children: m.cloneElement(e, { ref: r }) });
}
const fC = ({ children: e, initial: t, isPresent: n, onExitComplete: r, custom: o, presenceAffectsLayout: i, mode: a }) => {
  const s = hs(hC), c = si(), u = St(
    () => ({
      id: c,
      initial: t,
      isPresent: n,
      custom: o,
      onExitComplete: (d) => {
        s.set(d, !0);
        for (const f of s.values())
          if (!f)
            return;
        r && r();
      },
      register: (d) => (s.set(d, !1), () => s.delete(d))
    }),
    /**
     * If the presence of a child affects the layout of the components around it,
     * we want to make a new context value to ensure they get re-rendered
     * so they can detect that layout change.
     */
    i ? [Math.random()] : [n]
  );
  return St(() => {
    s.forEach((d, f) => s.set(f, !1));
  }, [n]), m.useEffect(() => {
    !n && !s.size && r && r();
  }, [n]), a === "popLayout" && (e = l(dC, { isPresent: n, children: e })), l(vi.Provider, { value: u, children: e });
};
function hC() {
  return /* @__PURE__ */ new Map();
}
const po = (e) => e.key || "";
function Ru(e) {
  const t = [];
  return li.forEach(e, (n) => {
    w0(n) && t.push(n);
  }), t;
}
const js = ({ children: e, exitBeforeEnter: t, custom: n, initial: r = !0, onExitComplete: o, presenceAffectsLayout: i = !0, mode: a = "sync" }) => {
  Qt(!t, "Replace exitBeforeEnter with mode='wait'");
  const s = St(() => Ru(e), [e]), c = s.map(po), u = Ve(!0), d = Ve(s), f = hs(() => /* @__PURE__ */ new Map()), [h, g] = ke(s), [p, v] = ke(s);
  Ls(() => {
    u.current = !1, d.current = s;
    for (let b = 0; b < p.length; b++) {
      const x = po(p[b]);
      c.includes(x) ? f.delete(x) : f.get(x) !== !0 && f.set(x, !1);
    }
  }, [p, c.length, c.join("-")]);
  const y = [];
  if (s !== h) {
    let b = [...s];
    for (let x = 0; x < p.length; x++) {
      const P = p[x], T = po(P);
      c.includes(T) || (b.splice(x, 0, P), y.push(P));
    }
    a === "wait" && y.length && (b = y), v(Ru(b)), g(s);
    return;
  }
  process.env.NODE_ENV !== "production" && a === "wait" && p.length > 1 && console.warn(`You're attempting to animate multiple children within AnimatePresence, but its mode is set to "wait". This will lead to odd visual behaviour.`);
  const { forceRender: w } = Pe(Rr);
  return l(xe, { children: p.map((b) => {
    const x = po(b), P = s === p || c.includes(x), T = () => {
      if (f.has(x))
        f.set(x, !0);
      else
        return;
      let R = !0;
      f.forEach((F) => {
        F || (R = !1);
      }), R && (w == null || w(), v(d.current), o && o());
    };
    return l(fC, { isPresent: P, initial: !u.current || r ? void 0 : !1, custom: P ? void 0 : n, presenceAffectsLayout: i, mode: a, onExitComplete: P ? void 0 : T, children: b }, x);
  }) });
}, mC = nt(null);
function pC() {
  const e = Ve(!1);
  return Ls(() => (e.current = !0, () => {
    e.current = !1;
  }), []), e;
}
function gC() {
  const e = pC(), [t, n] = ke(0), r = It(() => {
    e.current && n(t + 1);
  }, [t]);
  return [It(() => we.postRender(r), [r]), t];
}
const vC = (e) => !e.isLayoutDirty && e.willUpdate(!1);
function Iu() {
  const e = /* @__PURE__ */ new Set(), t = /* @__PURE__ */ new WeakMap(), n = () => e.forEach(vC);
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
const Nh = (e) => e === !0, yC = (e) => Nh(e === !0) || e === "id", bC = ({ children: e, id: t, inherit: n = !0 }) => {
  const r = Pe(Rr), o = Pe(mC), [i, a] = gC(), s = Ve(null), c = r.id || o;
  s.current === null && (yC(n) && c && (t = t ? c + "-" + t : c), s.current = {
    id: t,
    group: Nh(n) && r.group || Iu()
  });
  const u = St(() => ({ ...s.current, forceRender: i }), [a]);
  return l(Rr.Provider, { value: u, children: e });
};
var wC = m.createContext(void 0);
function nr(e) {
  const t = m.useContext(wC);
  return e || t || "ltr";
}
function Ka(e, [t, n]) {
  return Math.min(n, Math.max(t, e));
}
function xC(e, t) {
  return m.useReducer((n, r) => t[n][r] ?? n, e);
}
var Us = "ScrollArea", [Mh, F5] = Ot(Us), [CC, pt] = Mh(Us), Ph = m.forwardRef(
  (e, t) => {
    const {
      __scopeScrollArea: n,
      type: r = "hover",
      dir: o,
      scrollHideDelay: i = 600,
      ...a
    } = e, [s, c] = m.useState(null), [u, d] = m.useState(null), [f, h] = m.useState(null), [g, p] = m.useState(null), [v, y] = m.useState(null), [w, b] = m.useState(0), [x, P] = m.useState(0), [T, R] = m.useState(!1), [F, D] = m.useState(!1), _ = ve(t, (te) => c(te)), j = nr(o);
    return /* @__PURE__ */ l(
      CC,
      {
        scope: n,
        type: r,
        dir: j,
        scrollHideDelay: i,
        scrollArea: s,
        viewport: u,
        onViewportChange: d,
        content: f,
        onContentChange: h,
        scrollbarX: g,
        onScrollbarXChange: p,
        scrollbarXEnabled: T,
        onScrollbarXEnabledChange: R,
        scrollbarY: v,
        onScrollbarYChange: y,
        scrollbarYEnabled: F,
        onScrollbarYEnabledChange: D,
        onCornerWidthChange: b,
        onCornerHeightChange: P,
        children: /* @__PURE__ */ l(
          fe.div,
          {
            dir: j,
            ...a,
            ref: _,
            style: {
              position: "relative",
              // Pass corner sizes as CSS vars to reduce re-renders of context consumers
              "--radix-scroll-area-corner-width": w + "px",
              "--radix-scroll-area-corner-height": x + "px",
              ...e.style
            }
          }
        )
      }
    );
  }
);
Ph.displayName = Us;
var Th = "ScrollAreaViewport", kh = m.forwardRef(
  (e, t) => {
    const { __scopeScrollArea: n, children: r, nonce: o, ...i } = e, a = pt(Th, n), s = m.useRef(null), c = ve(t, s, a.onViewportChange);
    return /* @__PURE__ */ N(xe, { children: [
      /* @__PURE__ */ l(
        "style",
        {
          dangerouslySetInnerHTML: {
            __html: "[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}"
          },
          nonce: o
        }
      ),
      /* @__PURE__ */ l(
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
            overflowX: a.scrollbarXEnabled ? "scroll" : "hidden",
            overflowY: a.scrollbarYEnabled ? "scroll" : "hidden",
            ...e.style
          },
          children: /* @__PURE__ */ l("div", { ref: a.onContentChange, style: { minWidth: "100%", display: "table" }, children: r })
        }
      )
    ] });
  }
);
kh.displayName = Th;
var Ft = "ScrollAreaScrollbar", Hs = m.forwardRef(
  (e, t) => {
    const { forceMount: n, ...r } = e, o = pt(Ft, e.__scopeScrollArea), { onScrollbarXEnabledChange: i, onScrollbarYEnabledChange: a } = o, s = e.orientation === "horizontal";
    return m.useEffect(() => (s ? i(!0) : a(!0), () => {
      s ? i(!1) : a(!1);
    }), [s, i, a]), o.type === "hover" ? /* @__PURE__ */ l(SC, { ...r, ref: t, forceMount: n }) : o.type === "scroll" ? /* @__PURE__ */ l(NC, { ...r, ref: t, forceMount: n }) : o.type === "auto" ? /* @__PURE__ */ l(Eh, { ...r, ref: t, forceMount: n }) : o.type === "always" ? /* @__PURE__ */ l(zs, { ...r, ref: t }) : null;
  }
);
Hs.displayName = Ft;
var SC = m.forwardRef((e, t) => {
  const { forceMount: n, ...r } = e, o = pt(Ft, e.__scopeScrollArea), [i, a] = m.useState(!1);
  return m.useEffect(() => {
    const s = o.scrollArea;
    let c = 0;
    if (s) {
      const u = () => {
        window.clearTimeout(c), a(!0);
      }, d = () => {
        c = window.setTimeout(() => a(!1), o.scrollHideDelay);
      };
      return s.addEventListener("pointerenter", u), s.addEventListener("pointerleave", d), () => {
        window.clearTimeout(c), s.removeEventListener("pointerenter", u), s.removeEventListener("pointerleave", d);
      };
    }
  }, [o.scrollArea, o.scrollHideDelay]), /* @__PURE__ */ l(qe, { present: n || i, children: /* @__PURE__ */ l(
    Eh,
    {
      "data-state": i ? "visible" : "hidden",
      ...r,
      ref: t
    }
  ) });
}), NC = m.forwardRef((e, t) => {
  const { forceMount: n, ...r } = e, o = pt(Ft, e.__scopeScrollArea), i = e.orientation === "horizontal", a = xi(() => c("SCROLL_END"), 100), [s, c] = xC("hidden", {
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
  return m.useEffect(() => {
    if (s === "idle") {
      const u = window.setTimeout(() => c("HIDE"), o.scrollHideDelay);
      return () => window.clearTimeout(u);
    }
  }, [s, o.scrollHideDelay, c]), m.useEffect(() => {
    const u = o.viewport, d = i ? "scrollLeft" : "scrollTop";
    if (u) {
      let f = u[d];
      const h = () => {
        const g = u[d];
        f !== g && (c("SCROLL"), a()), f = g;
      };
      return u.addEventListener("scroll", h), () => u.removeEventListener("scroll", h);
    }
  }, [o.viewport, i, c, a]), /* @__PURE__ */ l(qe, { present: n || s !== "hidden", children: /* @__PURE__ */ l(
    zs,
    {
      "data-state": s === "hidden" ? "hidden" : "visible",
      ...r,
      ref: t,
      onPointerEnter: ne(e.onPointerEnter, () => c("POINTER_ENTER")),
      onPointerLeave: ne(e.onPointerLeave, () => c("POINTER_LEAVE"))
    }
  ) });
}), Eh = m.forwardRef((e, t) => {
  const n = pt(Ft, e.__scopeScrollArea), { forceMount: r, ...o } = e, [i, a] = m.useState(!1), s = e.orientation === "horizontal", c = xi(() => {
    if (n.viewport) {
      const u = n.viewport.offsetWidth < n.viewport.scrollWidth, d = n.viewport.offsetHeight < n.viewport.scrollHeight;
      a(s ? u : d);
    }
  }, 10);
  return qn(n.viewport, c), qn(n.content, c), /* @__PURE__ */ l(qe, { present: r || i, children: /* @__PURE__ */ l(
    zs,
    {
      "data-state": i ? "visible" : "hidden",
      ...o,
      ref: t
    }
  ) });
}), zs = m.forwardRef((e, t) => {
  const { orientation: n = "vertical", ...r } = e, o = pt(Ft, e.__scopeScrollArea), i = m.useRef(null), a = m.useRef(0), [s, c] = m.useState({
    content: 0,
    viewport: 0,
    scrollbar: { size: 0, paddingStart: 0, paddingEnd: 0 }
  }), u = Ih(s.viewport, s.content), d = {
    ...r,
    sizes: s,
    onSizesChange: c,
    hasThumb: u > 0 && u < 1,
    onThumbChange: (h) => i.current = h,
    onThumbPointerUp: () => a.current = 0,
    onThumbPointerDown: (h) => a.current = h
  };
  function f(h, g) {
    return AC(h, a.current, s, g);
  }
  return n === "horizontal" ? /* @__PURE__ */ l(
    MC,
    {
      ...d,
      ref: t,
      onThumbPositionChange: () => {
        if (o.viewport && i.current) {
          const h = o.viewport.scrollLeft, g = Lu(h, s, o.dir);
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
  ) : n === "vertical" ? /* @__PURE__ */ l(
    PC,
    {
      ...d,
      ref: t,
      onThumbPositionChange: () => {
        if (o.viewport && i.current) {
          const h = o.viewport.scrollTop, g = Lu(h, s);
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
}), MC = m.forwardRef((e, t) => {
  const { sizes: n, onSizesChange: r, ...o } = e, i = pt(Ft, e.__scopeScrollArea), [a, s] = m.useState(), c = m.useRef(null), u = ve(t, c, i.onScrollbarXChange);
  return m.useEffect(() => {
    c.current && s(getComputedStyle(c.current));
  }, [c]), /* @__PURE__ */ l(
    Dh,
    {
      "data-orientation": "horizontal",
      ...o,
      ref: u,
      sizes: n,
      style: {
        bottom: 0,
        left: i.dir === "rtl" ? "var(--radix-scroll-area-corner-width)" : 0,
        right: i.dir === "ltr" ? "var(--radix-scroll-area-corner-width)" : 0,
        "--radix-scroll-area-thumb-width": wi(n) + "px",
        ...e.style
      },
      onThumbPointerDown: (d) => e.onThumbPointerDown(d.x),
      onDragScroll: (d) => e.onDragScroll(d.x),
      onWheelScroll: (d, f) => {
        if (i.viewport) {
          const h = i.viewport.scrollLeft + d.deltaX;
          e.onWheelScroll(h), Oh(h, f) && d.preventDefault();
        }
      },
      onResize: () => {
        c.current && i.viewport && a && r({
          content: i.viewport.scrollWidth,
          viewport: i.viewport.offsetWidth,
          scrollbar: {
            size: c.current.clientWidth,
            paddingStart: jo(a.paddingLeft),
            paddingEnd: jo(a.paddingRight)
          }
        });
      }
    }
  );
}), PC = m.forwardRef((e, t) => {
  const { sizes: n, onSizesChange: r, ...o } = e, i = pt(Ft, e.__scopeScrollArea), [a, s] = m.useState(), c = m.useRef(null), u = ve(t, c, i.onScrollbarYChange);
  return m.useEffect(() => {
    c.current && s(getComputedStyle(c.current));
  }, [c]), /* @__PURE__ */ l(
    Dh,
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
        "--radix-scroll-area-thumb-height": wi(n) + "px",
        ...e.style
      },
      onThumbPointerDown: (d) => e.onThumbPointerDown(d.y),
      onDragScroll: (d) => e.onDragScroll(d.y),
      onWheelScroll: (d, f) => {
        if (i.viewport) {
          const h = i.viewport.scrollTop + d.deltaY;
          e.onWheelScroll(h), Oh(h, f) && d.preventDefault();
        }
      },
      onResize: () => {
        c.current && i.viewport && a && r({
          content: i.viewport.scrollHeight,
          viewport: i.viewport.offsetHeight,
          scrollbar: {
            size: c.current.clientHeight,
            paddingStart: jo(a.paddingTop),
            paddingEnd: jo(a.paddingBottom)
          }
        });
      }
    }
  );
}), [TC, Ah] = Mh(Ft), Dh = m.forwardRef((e, t) => {
  const {
    __scopeScrollArea: n,
    sizes: r,
    hasThumb: o,
    onThumbChange: i,
    onThumbPointerUp: a,
    onThumbPointerDown: s,
    onThumbPositionChange: c,
    onDragScroll: u,
    onWheelScroll: d,
    onResize: f,
    ...h
  } = e, g = pt(Ft, n), [p, v] = m.useState(null), y = ve(t, (_) => v(_)), w = m.useRef(null), b = m.useRef(""), x = g.viewport, P = r.content - r.viewport, T = Oe(d), R = Oe(c), F = xi(f, 10);
  function D(_) {
    if (w.current) {
      const j = _.clientX - w.current.left, te = _.clientY - w.current.top;
      u({ x: j, y: te });
    }
  }
  return m.useEffect(() => {
    const _ = (j) => {
      const te = j.target;
      (p == null ? void 0 : p.contains(te)) && T(j, P);
    };
    return document.addEventListener("wheel", _, { passive: !1 }), () => document.removeEventListener("wheel", _, { passive: !1 });
  }, [x, p, P, T]), m.useEffect(R, [r, R]), qn(p, F), qn(g.content, F), /* @__PURE__ */ l(
    TC,
    {
      scope: n,
      scrollbar: p,
      hasThumb: o,
      onThumbChange: Oe(i),
      onThumbPointerUp: Oe(a),
      onThumbPositionChange: R,
      onThumbPointerDown: Oe(s),
      children: /* @__PURE__ */ l(
        fe.div,
        {
          ...h,
          ref: y,
          style: { position: "absolute", ...h.style },
          onPointerDown: ne(e.onPointerDown, (_) => {
            _.button === 0 && (_.target.setPointerCapture(_.pointerId), w.current = p.getBoundingClientRect(), b.current = document.body.style.webkitUserSelect, document.body.style.webkitUserSelect = "none", g.viewport && (g.viewport.style.scrollBehavior = "auto"), D(_));
          }),
          onPointerMove: ne(e.onPointerMove, D),
          onPointerUp: ne(e.onPointerUp, (_) => {
            const j = _.target;
            j.hasPointerCapture(_.pointerId) && j.releasePointerCapture(_.pointerId), document.body.style.webkitUserSelect = b.current, g.viewport && (g.viewport.style.scrollBehavior = ""), w.current = null;
          })
        }
      )
    }
  );
}), $o = "ScrollAreaThumb", _h = m.forwardRef(
  (e, t) => {
    const { forceMount: n, ...r } = e, o = Ah($o, e.__scopeScrollArea);
    return /* @__PURE__ */ l(qe, { present: n || o.hasThumb, children: /* @__PURE__ */ l(kC, { ref: t, ...r }) });
  }
), kC = m.forwardRef(
  (e, t) => {
    const { __scopeScrollArea: n, style: r, ...o } = e, i = pt($o, n), a = Ah($o, n), { onThumbPositionChange: s } = a, c = ve(
      t,
      (f) => a.onThumbChange(f)
    ), u = m.useRef(), d = xi(() => {
      u.current && (u.current(), u.current = void 0);
    }, 100);
    return m.useEffect(() => {
      const f = i.viewport;
      if (f) {
        const h = () => {
          if (d(), !u.current) {
            const g = DC(f, s);
            u.current = g, s();
          }
        };
        return s(), f.addEventListener("scroll", h), () => f.removeEventListener("scroll", h);
      }
    }, [i.viewport, d, s]), /* @__PURE__ */ l(
      fe.div,
      {
        "data-state": a.hasThumb ? "visible" : "hidden",
        ...o,
        ref: c,
        style: {
          width: "var(--radix-scroll-area-thumb-width)",
          height: "var(--radix-scroll-area-thumb-height)",
          ...r
        },
        onPointerDownCapture: ne(e.onPointerDownCapture, (f) => {
          const g = f.target.getBoundingClientRect(), p = f.clientX - g.left, v = f.clientY - g.top;
          a.onThumbPointerDown({ x: p, y: v });
        }),
        onPointerUp: ne(e.onPointerUp, a.onThumbPointerUp)
      }
    );
  }
);
_h.displayName = $o;
var Gs = "ScrollAreaCorner", Rh = m.forwardRef(
  (e, t) => {
    const n = pt(Gs, e.__scopeScrollArea), r = !!(n.scrollbarX && n.scrollbarY);
    return n.type !== "scroll" && r ? /* @__PURE__ */ l(EC, { ...e, ref: t }) : null;
  }
);
Rh.displayName = Gs;
var EC = m.forwardRef((e, t) => {
  const { __scopeScrollArea: n, ...r } = e, o = pt(Gs, n), [i, a] = m.useState(0), [s, c] = m.useState(0), u = !!(i && s);
  return qn(o.scrollbarX, () => {
    var f;
    const d = ((f = o.scrollbarX) == null ? void 0 : f.offsetHeight) || 0;
    o.onCornerHeightChange(d), c(d);
  }), qn(o.scrollbarY, () => {
    var f;
    const d = ((f = o.scrollbarY) == null ? void 0 : f.offsetWidth) || 0;
    o.onCornerWidthChange(d), a(d);
  }), u ? /* @__PURE__ */ l(
    fe.div,
    {
      ...r,
      ref: t,
      style: {
        width: i,
        height: s,
        position: "absolute",
        right: o.dir === "ltr" ? 0 : void 0,
        left: o.dir === "rtl" ? 0 : void 0,
        bottom: 0,
        ...e.style
      }
    }
  ) : null;
});
function jo(e) {
  return e ? parseInt(e, 10) : 0;
}
function Ih(e, t) {
  const n = e / t;
  return isNaN(n) ? 0 : n;
}
function wi(e) {
  const t = Ih(e.viewport, e.content), n = e.scrollbar.paddingStart + e.scrollbar.paddingEnd, r = (e.scrollbar.size - n) * t;
  return Math.max(r, 18);
}
function AC(e, t, n, r = "ltr") {
  const o = wi(n), i = o / 2, a = t || i, s = o - a, c = n.scrollbar.paddingStart + a, u = n.scrollbar.size - n.scrollbar.paddingEnd - s, d = n.content - n.viewport, f = r === "ltr" ? [0, d] : [d * -1, 0];
  return Lh([c, u], f)(e);
}
function Lu(e, t, n = "ltr") {
  const r = wi(t), o = t.scrollbar.paddingStart + t.scrollbar.paddingEnd, i = t.scrollbar.size - o, a = t.content - t.viewport, s = i - r, c = n === "ltr" ? [0, a] : [a * -1, 0], u = Ka(e, c);
  return Lh([0, a], [0, s])(u);
}
function Lh(e, t) {
  return (n) => {
    if (e[0] === e[1] || t[0] === t[1]) return t[0];
    const r = (t[1] - t[0]) / (e[1] - e[0]);
    return t[0] + r * (n - e[0]);
  };
}
function Oh(e, t) {
  return e > 0 && e < t;
}
var DC = (e, t = () => {
}) => {
  let n = { left: e.scrollLeft, top: e.scrollTop }, r = 0;
  return function o() {
    const i = { left: e.scrollLeft, top: e.scrollTop }, a = n.left !== i.left, s = n.top !== i.top;
    (a || s) && t(), n = i, r = window.requestAnimationFrame(o);
  }(), () => window.cancelAnimationFrame(r);
};
function xi(e, t) {
  const n = Oe(e), r = m.useRef(0);
  return m.useEffect(() => () => window.clearTimeout(r.current), []), m.useCallback(() => {
    window.clearTimeout(r.current), r.current = window.setTimeout(n, t);
  }, [n, t]);
}
function qn(e, t) {
  const n = Oe(t);
  $e(() => {
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
var Fh = Ph, _C = kh, RC = Rh;
const Ci = m.forwardRef(({ className: e, children: t, showBar: n = !0, ...r }, o) => /* @__PURE__ */ N(
  Fh,
  {
    ref: o,
    className: E("relative overflow-hidden", e),
    scrollHideDelay: 200,
    ...r,
    children: [
      /* @__PURE__ */ l(
        _C,
        {
          className: "h-full w-full rounded-[inherit]",
          "data-scroll-container": !0,
          children: t
        }
      ),
      /* @__PURE__ */ l(Ya, { orientation: "vertical", showBar: n }),
      /* @__PURE__ */ l(Ya, { orientation: "horizontal", showBar: n }),
      /* @__PURE__ */ l(RC, {})
    ]
  }
));
Ci.displayName = Fh.displayName;
const Ya = m.forwardRef(({ className: e, orientation: t = "vertical", showBar: n = !0, ...r }, o) => /* @__PURE__ */ l(
  Hs,
  {
    ref: o,
    orientation: t,
    forceMount: !0,
    className: E(
      "group/scrollbar z-50 flex touch-none select-none p-[1px]",
      "transition-opacity data-[state=hidden]:pointer-events-none data-[state=visible]:pointer-events-auto data-[state=hidden]:opacity-0 data-[state=visible]:opacity-100",
      t === "vertical" && "mr-[2px] h-full w-2",
      t === "horizontal" && "mt-[2px] h-2 flex-col",
      e
    ),
    ...r,
    children: n && /* @__PURE__ */ l(_h, { className: "relative flex-1 rounded-full bg-f1-background-bold opacity-30 transition-opacity group-hover/scrollbar:opacity-50" })
  }
));
Ya.displayName = Hs.displayName;
const IC = ({ data: e, dataConfig: t, scaleMin: n, scaleMax: r, aspect: o }, i) => {
  const a = Object.keys(t), s = e.map((c) => ({
    subject: c.label,
    ...c.values
  }));
  return /* @__PURE__ */ l(
    Qy,
    {
      config: t,
      ref: i,
      aspect: o,
      "data-chromatic": "ignore",
      children: /* @__PURE__ */ N(z0, { accessibilityLayer: !0, data: s, children: [
        /* @__PURE__ */ l(
          Jy,
          {
            cursor: !0,
            content: /* @__PURE__ */ l(e0, { indicator: "dot" })
          }
        ),
        /* @__PURE__ */ l(qd, { gridType: "circle" }),
        /* @__PURE__ */ l(Id, { dataKey: "subject" }),
        /* @__PURE__ */ l(
          Ld,
          {
            angle: 90,
            type: "number",
            domain: [n ?? "dataMin", r ?? "dataMax"]
          }
        ),
        a.map((c, u) => /* @__PURE__ */ l(
          $r,
          {
            dataKey: c,
            fill: t[c].color || dc(u),
            stroke: t[c].color || dc(u),
            strokeWidth: 1.5,
            fillOpacity: 0.3,
            label: t[c].label,
            isAnimationActive: !1
          },
          c
        )),
        Object.keys(t).length > 1 && /* @__PURE__ */ l(t0, { iconType: "star", content: /* @__PURE__ */ l(n0, {}) })
      ] })
    }
  );
}, V5 = r0(IC);
/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const LC = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), Vh = (...e) => e.filter((t, n, r) => !!t && r.indexOf(t) === n).join(" ");
/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var OC = {
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
const FC = X(
  ({
    color: e = "currentColor",
    size: t = 24,
    strokeWidth: n = 2,
    absoluteStrokeWidth: r,
    className: o = "",
    children: i,
    iconNode: a,
    ...s
  }, c) => Ro(
    "svg",
    {
      ref: c,
      ...OC,
      width: t,
      height: t,
      stroke: e,
      strokeWidth: r ? Number(n) * 24 / Number(t) : n,
      className: Vh("lucide", o),
      ...s
    },
    [
      ...a.map(([u, d]) => Ro(u, d)),
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
const en = (e, t) => {
  const n = X(
    ({ className: r, ...o }, i) => Ro(FC, {
      ref: i,
      iconNode: t,
      className: Vh(`lucide-${LC(e)}`, r),
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
const VC = en("BookOpen", [
  ["path", { d: "M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z", key: "vv98re" }],
  ["path", { d: "M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z", key: "1cyq3y" }]
]);
/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const BC = en("Check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const WC = en("ChevronLeft", [
  ["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]
]);
/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ks = en("ChevronRight", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]
]);
/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $C = en("CircleCheck", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]
]);
/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const jC = en("Circle", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]
]);
/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const UC = en("OctagonX", [
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
const HC = en("TriangleAlert", [
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
const zC = en("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]);
function ye(e) {
  const t = Object.prototype.toString.call(e);
  return e instanceof Date || typeof e == "object" && t === "[object Date]" ? new e.constructor(+e) : typeof e == "number" || t === "[object Number]" || typeof e == "string" || t === "[object String]" ? new Date(e) : /* @__PURE__ */ new Date(NaN);
}
function it(e, t) {
  return e instanceof Date ? new e.constructor(t) : new Date(t);
}
function Ye(e, t) {
  const n = ye(e);
  return isNaN(t) ? it(e, NaN) : (t && n.setDate(n.getDate() + t), n);
}
function Mt(e, t) {
  const n = ye(e);
  if (isNaN(t)) return it(e, NaN);
  if (!t)
    return n;
  const r = n.getDate(), o = it(e, n.getTime());
  o.setMonth(n.getMonth() + t + 1, 0);
  const i = o.getDate();
  return r >= i ? o : (n.setFullYear(
    o.getFullYear(),
    o.getMonth(),
    r
  ), n);
}
const Ys = 6048e5, GC = 864e5;
let KC = {};
function Gr() {
  return KC;
}
function Lt(e, t) {
  var s, c, u, d;
  const n = Gr(), r = (t == null ? void 0 : t.weekStartsOn) ?? ((c = (s = t == null ? void 0 : t.locale) == null ? void 0 : s.options) == null ? void 0 : c.weekStartsOn) ?? n.weekStartsOn ?? ((d = (u = n.locale) == null ? void 0 : u.options) == null ? void 0 : d.weekStartsOn) ?? 0, o = ye(e), i = o.getDay(), a = (i < r ? 7 : 0) + i - r;
  return o.setDate(o.getDate() - a), o.setHours(0, 0, 0, 0), o;
}
function Nn(e) {
  return Lt(e, { weekStartsOn: 1 });
}
function Bh(e) {
  const t = ye(e), n = t.getFullYear(), r = it(e, 0);
  r.setFullYear(n + 1, 0, 4), r.setHours(0, 0, 0, 0);
  const o = Nn(r), i = it(e, 0);
  i.setFullYear(n, 0, 4), i.setHours(0, 0, 0, 0);
  const a = Nn(i);
  return t.getTime() >= o.getTime() ? n + 1 : t.getTime() >= a.getTime() ? n : n - 1;
}
function Zn(e) {
  const t = ye(e);
  return t.setHours(0, 0, 0, 0), t;
}
function Uo(e) {
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
function Et(e, t) {
  const n = Zn(e), r = Zn(t), o = +n - Uo(n), i = +r - Uo(r);
  return Math.round((o - i) / GC);
}
function YC(e) {
  const t = Bh(e), n = it(e, 0);
  return n.setFullYear(t, 0, 4), n.setHours(0, 0, 0, 0), Nn(n);
}
function Xa(e, t) {
  const n = t * 7;
  return Ye(e, n);
}
function XC(e, t) {
  return Mt(e, t * 12);
}
function qC(e) {
  let t;
  return e.forEach(function(n) {
    const r = ye(n);
    (t === void 0 || t < r || isNaN(Number(r))) && (t = r);
  }), t || /* @__PURE__ */ new Date(NaN);
}
function ZC(e) {
  let t;
  return e.forEach((n) => {
    const r = ye(n);
    (!t || t > r || isNaN(+r)) && (t = r);
  }), t || /* @__PURE__ */ new Date(NaN);
}
function et(e, t) {
  const n = Zn(e), r = Zn(t);
  return +n == +r;
}
function Xs(e) {
  return e instanceof Date || typeof e == "object" && Object.prototype.toString.call(e) === "[object Date]";
}
function QC(e) {
  if (!Xs(e) && typeof e != "number")
    return !1;
  const t = ye(e);
  return !isNaN(Number(t));
}
function Ir(e, t) {
  const n = ye(e), r = ye(t), o = n.getFullYear() - r.getFullYear(), i = n.getMonth() - r.getMonth();
  return o * 12 + i;
}
function JC(e, t, n) {
  const r = Lt(e, n), o = Lt(t, n), i = +r - Uo(r), a = +o - Uo(o);
  return Math.round((i - a) / Ys);
}
function qs(e) {
  const t = ye(e), n = t.getMonth();
  return t.setFullYear(t.getFullYear(), n + 1, 0), t.setHours(23, 59, 59, 999), t;
}
function tt(e) {
  const t = ye(e);
  return t.setDate(1), t.setHours(0, 0, 0, 0), t;
}
function Wh(e) {
  const t = ye(e), n = it(e, 0);
  return n.setFullYear(t.getFullYear(), 0, 1), n.setHours(0, 0, 0, 0), n;
}
function Zs(e, t) {
  var s, c, u, d;
  const n = Gr(), r = (t == null ? void 0 : t.weekStartsOn) ?? ((c = (s = t == null ? void 0 : t.locale) == null ? void 0 : s.options) == null ? void 0 : c.weekStartsOn) ?? n.weekStartsOn ?? ((d = (u = n.locale) == null ? void 0 : u.options) == null ? void 0 : d.weekStartsOn) ?? 0, o = ye(e), i = o.getDay(), a = (i < r ? -7 : 0) + 6 - (i - r);
  return o.setDate(o.getDate() + a), o.setHours(23, 59, 59, 999), o;
}
function $h(e) {
  return Zs(e, { weekStartsOn: 1 });
}
const eS = {
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
}, tS = (e, t, n) => {
  let r;
  const o = eS[e];
  return typeof o == "string" ? r = o : t === 1 ? r = o.one : r = o.other.replace("{{count}}", t.toString()), n != null && n.addSuffix ? n.comparison && n.comparison > 0 ? "in " + r : r + " ago" : r;
};
function ua(e) {
  return (t = {}) => {
    const n = t.width ? String(t.width) : e.defaultWidth;
    return e.formats[n] || e.formats[e.defaultWidth];
  };
}
const nS = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, rS = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, oS = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, iS = {
  date: ua({
    formats: nS,
    defaultWidth: "full"
  }),
  time: ua({
    formats: rS,
    defaultWidth: "full"
  }),
  dateTime: ua({
    formats: oS,
    defaultWidth: "full"
  })
}, aS = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, sS = (e, t, n, r) => aS[e];
function sr(e) {
  return (t, n) => {
    const r = n != null && n.context ? String(n.context) : "standalone";
    let o;
    if (r === "formatting" && e.formattingValues) {
      const a = e.defaultFormattingWidth || e.defaultWidth, s = n != null && n.width ? String(n.width) : a;
      o = e.formattingValues[s] || e.formattingValues[a];
    } else {
      const a = e.defaultWidth, s = n != null && n.width ? String(n.width) : e.defaultWidth;
      o = e.values[s] || e.values[a];
    }
    const i = e.argumentCallback ? e.argumentCallback(t) : t;
    return o[i];
  };
}
const lS = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, cS = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, uS = {
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
}, dS = {
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
}, fS = {
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
}, hS = {
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
}, mS = (e, t) => {
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
}, pS = {
  ordinalNumber: mS,
  era: sr({
    values: lS,
    defaultWidth: "wide"
  }),
  quarter: sr({
    values: cS,
    defaultWidth: "wide",
    argumentCallback: (e) => e - 1
  }),
  month: sr({
    values: uS,
    defaultWidth: "wide"
  }),
  day: sr({
    values: dS,
    defaultWidth: "wide"
  }),
  dayPeriod: sr({
    values: fS,
    defaultWidth: "wide",
    formattingValues: hS,
    defaultFormattingWidth: "wide"
  })
};
function lr(e) {
  return (t, n = {}) => {
    const r = n.width, o = r && e.matchPatterns[r] || e.matchPatterns[e.defaultMatchWidth], i = t.match(o);
    if (!i)
      return null;
    const a = i[0], s = r && e.parsePatterns[r] || e.parsePatterns[e.defaultParseWidth], c = Array.isArray(s) ? vS(s, (f) => f.test(a)) : (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any -- I challange you to fix the type
      gS(s, (f) => f.test(a))
    );
    let u;
    u = e.valueCallback ? e.valueCallback(c) : c, u = n.valueCallback ? (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any -- I challange you to fix the type
      n.valueCallback(u)
    ) : u;
    const d = t.slice(a.length);
    return { value: u, rest: d };
  };
}
function gS(e, t) {
  for (const n in e)
    if (Object.prototype.hasOwnProperty.call(e, n) && t(e[n]))
      return n;
}
function vS(e, t) {
  for (let n = 0; n < e.length; n++)
    if (t(e[n]))
      return n;
}
function yS(e) {
  return (t, n = {}) => {
    const r = t.match(e.matchPattern);
    if (!r) return null;
    const o = r[0], i = t.match(e.parsePattern);
    if (!i) return null;
    let a = e.valueCallback ? e.valueCallback(i[0]) : i[0];
    a = n.valueCallback ? n.valueCallback(a) : a;
    const s = t.slice(o.length);
    return { value: a, rest: s };
  };
}
const bS = /^(\d+)(th|st|nd|rd)?/i, wS = /\d+/i, xS = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, CS = {
  any: [/^b/i, /^(a|c)/i]
}, SS = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, NS = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, MS = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, PS = {
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
}, TS = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, kS = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, ES = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, AS = {
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
}, DS = {
  ordinalNumber: yS({
    matchPattern: bS,
    parsePattern: wS,
    valueCallback: (e) => parseInt(e, 10)
  }),
  era: lr({
    matchPatterns: xS,
    defaultMatchWidth: "wide",
    parsePatterns: CS,
    defaultParseWidth: "any"
  }),
  quarter: lr({
    matchPatterns: SS,
    defaultMatchWidth: "wide",
    parsePatterns: NS,
    defaultParseWidth: "any",
    valueCallback: (e) => e + 1
  }),
  month: lr({
    matchPatterns: MS,
    defaultMatchWidth: "wide",
    parsePatterns: PS,
    defaultParseWidth: "any"
  }),
  day: lr({
    matchPatterns: TS,
    defaultMatchWidth: "wide",
    parsePatterns: kS,
    defaultParseWidth: "any"
  }),
  dayPeriod: lr({
    matchPatterns: ES,
    defaultMatchWidth: "any",
    parsePatterns: AS,
    defaultParseWidth: "any"
  })
}, jh = {
  code: "en-US",
  formatDistance: tS,
  formatLong: iS,
  formatRelative: sS,
  localize: pS,
  match: DS,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
function _S(e) {
  const t = ye(e);
  return Et(t, Wh(t)) + 1;
}
function Uh(e) {
  const t = ye(e), n = +Nn(t) - +YC(t);
  return Math.round(n / Ys) + 1;
}
function Hh(e, t) {
  var d, f, h, g;
  const n = ye(e), r = n.getFullYear(), o = Gr(), i = (t == null ? void 0 : t.firstWeekContainsDate) ?? ((f = (d = t == null ? void 0 : t.locale) == null ? void 0 : d.options) == null ? void 0 : f.firstWeekContainsDate) ?? o.firstWeekContainsDate ?? ((g = (h = o.locale) == null ? void 0 : h.options) == null ? void 0 : g.firstWeekContainsDate) ?? 1, a = it(e, 0);
  a.setFullYear(r + 1, 0, i), a.setHours(0, 0, 0, 0);
  const s = Lt(a, t), c = it(e, 0);
  c.setFullYear(r, 0, i), c.setHours(0, 0, 0, 0);
  const u = Lt(c, t);
  return n.getTime() >= s.getTime() ? r + 1 : n.getTime() >= u.getTime() ? r : r - 1;
}
function RS(e, t) {
  var s, c, u, d;
  const n = Gr(), r = (t == null ? void 0 : t.firstWeekContainsDate) ?? ((c = (s = t == null ? void 0 : t.locale) == null ? void 0 : s.options) == null ? void 0 : c.firstWeekContainsDate) ?? n.firstWeekContainsDate ?? ((d = (u = n.locale) == null ? void 0 : u.options) == null ? void 0 : d.firstWeekContainsDate) ?? 1, o = Hh(e, t), i = it(e, 0);
  return i.setFullYear(o, 0, r), i.setHours(0, 0, 0, 0), Lt(i, t);
}
function zh(e, t) {
  const n = ye(e), r = +Lt(n, t) - +RS(n, t);
  return Math.round(r / Ys) + 1;
}
function Ce(e, t) {
  const n = e < 0 ? "-" : "", r = Math.abs(e).toString().padStart(t, "0");
  return n + r;
}
const nn = {
  // Year
  y(e, t) {
    const n = e.getFullYear(), r = n > 0 ? n : 1 - n;
    return Ce(t === "yy" ? r % 100 : r, t.length);
  },
  // Month
  M(e, t) {
    const n = e.getMonth();
    return t === "M" ? String(n + 1) : Ce(n + 1, 2);
  },
  // Day of the month
  d(e, t) {
    return Ce(e.getDate(), t.length);
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
    return Ce(e.getHours() % 12 || 12, t.length);
  },
  // Hour [0-23]
  H(e, t) {
    return Ce(e.getHours(), t.length);
  },
  // Minute
  m(e, t) {
    return Ce(e.getMinutes(), t.length);
  },
  // Second
  s(e, t) {
    return Ce(e.getSeconds(), t.length);
  },
  // Fraction of second
  S(e, t) {
    const n = t.length, r = e.getMilliseconds(), o = Math.trunc(
      r * Math.pow(10, n - 3)
    );
    return Ce(o, t.length);
  }
}, _n = {
  am: "am",
  pm: "pm",
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
}, Ou = {
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
    return nn.y(e, t);
  },
  // Local week-numbering year
  Y: function(e, t, n, r) {
    const o = Hh(e, r), i = o > 0 ? o : 1 - o;
    if (t === "YY") {
      const a = i % 100;
      return Ce(a, 2);
    }
    return t === "Yo" ? n.ordinalNumber(i, { unit: "year" }) : Ce(i, t.length);
  },
  // ISO week-numbering year
  R: function(e, t) {
    const n = Bh(e);
    return Ce(n, t.length);
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
    return Ce(n, t.length);
  },
  // Quarter
  Q: function(e, t, n) {
    const r = Math.ceil((e.getMonth() + 1) / 3);
    switch (t) {
      case "Q":
        return String(r);
      case "QQ":
        return Ce(r, 2);
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
        return Ce(r, 2);
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
        return nn.M(e, t);
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
        return Ce(r + 1, 2);
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
    const o = zh(e, r);
    return t === "wo" ? n.ordinalNumber(o, { unit: "week" }) : Ce(o, t.length);
  },
  // ISO week of year
  I: function(e, t, n) {
    const r = Uh(e);
    return t === "Io" ? n.ordinalNumber(r, { unit: "week" }) : Ce(r, t.length);
  },
  // Day of the month
  d: function(e, t, n) {
    return t === "do" ? n.ordinalNumber(e.getDate(), { unit: "date" }) : nn.d(e, t);
  },
  // Day of year
  D: function(e, t, n) {
    const r = _S(e);
    return t === "Do" ? n.ordinalNumber(r, { unit: "dayOfYear" }) : Ce(r, t.length);
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
        return Ce(i, 2);
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
        return Ce(i, t.length);
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
        return Ce(o, t.length);
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
    switch (r === 12 ? o = _n.noon : r === 0 ? o = _n.midnight : o = r / 12 >= 1 ? "pm" : "am", t) {
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
    switch (r >= 17 ? o = _n.evening : r >= 12 ? o = _n.afternoon : r >= 4 ? o = _n.morning : o = _n.night, t) {
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
    return nn.h(e, t);
  },
  // Hour [0-23]
  H: function(e, t, n) {
    return t === "Ho" ? n.ordinalNumber(e.getHours(), { unit: "hour" }) : nn.H(e, t);
  },
  // Hour [0-11]
  K: function(e, t, n) {
    const r = e.getHours() % 12;
    return t === "Ko" ? n.ordinalNumber(r, { unit: "hour" }) : Ce(r, t.length);
  },
  // Hour [1-24]
  k: function(e, t, n) {
    let r = e.getHours();
    return r === 0 && (r = 24), t === "ko" ? n.ordinalNumber(r, { unit: "hour" }) : Ce(r, t.length);
  },
  // Minute
  m: function(e, t, n) {
    return t === "mo" ? n.ordinalNumber(e.getMinutes(), { unit: "minute" }) : nn.m(e, t);
  },
  // Second
  s: function(e, t, n) {
    return t === "so" ? n.ordinalNumber(e.getSeconds(), { unit: "second" }) : nn.s(e, t);
  },
  // Fraction of second
  S: function(e, t) {
    return nn.S(e, t);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function(e, t, n) {
    const r = e.getTimezoneOffset();
    if (r === 0)
      return "Z";
    switch (t) {
      case "X":
        return Vu(r);
      case "XXXX":
      case "XX":
        return yn(r);
      case "XXXXX":
      case "XXX":
      default:
        return yn(r, ":");
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function(e, t, n) {
    const r = e.getTimezoneOffset();
    switch (t) {
      case "x":
        return Vu(r);
      case "xxxx":
      case "xx":
        return yn(r);
      case "xxxxx":
      case "xxx":
      default:
        return yn(r, ":");
    }
  },
  // Timezone (GMT)
  O: function(e, t, n) {
    const r = e.getTimezoneOffset();
    switch (t) {
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + Fu(r, ":");
      case "OOOO":
      default:
        return "GMT" + yn(r, ":");
    }
  },
  // Timezone (specific non-location)
  z: function(e, t, n) {
    const r = e.getTimezoneOffset();
    switch (t) {
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + Fu(r, ":");
      case "zzzz":
      default:
        return "GMT" + yn(r, ":");
    }
  },
  // Seconds timestamp
  t: function(e, t, n) {
    const r = Math.trunc(e.getTime() / 1e3);
    return Ce(r, t.length);
  },
  // Milliseconds timestamp
  T: function(e, t, n) {
    const r = e.getTime();
    return Ce(r, t.length);
  }
};
function Fu(e, t = "") {
  const n = e > 0 ? "-" : "+", r = Math.abs(e), o = Math.trunc(r / 60), i = r % 60;
  return i === 0 ? n + String(o) : n + String(o) + t + Ce(i, 2);
}
function Vu(e, t) {
  return e % 60 === 0 ? (e > 0 ? "-" : "+") + Ce(Math.abs(e) / 60, 2) : yn(e, t);
}
function yn(e, t = "") {
  const n = e > 0 ? "-" : "+", r = Math.abs(e), o = Ce(Math.trunc(r / 60), 2), i = Ce(r % 60, 2);
  return n + o + t + i;
}
const Bu = (e, t) => {
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
}, Gh = (e, t) => {
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
}, IS = (e, t) => {
  const n = e.match(/(P+)(p+)?/) || [], r = n[1], o = n[2];
  if (!o)
    return Bu(e, t);
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
  return i.replace("{{date}}", Bu(r, t)).replace("{{time}}", Gh(o, t));
}, LS = {
  p: Gh,
  P: IS
}, OS = /^D+$/, FS = /^Y+$/, VS = ["D", "DD", "YY", "YYYY"];
function BS(e) {
  return OS.test(e);
}
function WS(e) {
  return FS.test(e);
}
function $S(e, t, n) {
  const r = jS(e, t, n);
  if (console.warn(r), VS.includes(e)) throw new RangeError(r);
}
function jS(e, t, n) {
  const r = e[0] === "Y" ? "years" : "days of the month";
  return `Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
const US = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, HS = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, zS = /^'([^]*?)'?$/, GS = /''/g, KS = /[a-zA-Z]/;
function dn(e, t, n) {
  var d, f, h, g, p, v, y, w;
  const r = Gr(), o = (n == null ? void 0 : n.locale) ?? r.locale ?? jh, i = (n == null ? void 0 : n.firstWeekContainsDate) ?? ((f = (d = n == null ? void 0 : n.locale) == null ? void 0 : d.options) == null ? void 0 : f.firstWeekContainsDate) ?? r.firstWeekContainsDate ?? ((g = (h = r.locale) == null ? void 0 : h.options) == null ? void 0 : g.firstWeekContainsDate) ?? 1, a = (n == null ? void 0 : n.weekStartsOn) ?? ((v = (p = n == null ? void 0 : n.locale) == null ? void 0 : p.options) == null ? void 0 : v.weekStartsOn) ?? r.weekStartsOn ?? ((w = (y = r.locale) == null ? void 0 : y.options) == null ? void 0 : w.weekStartsOn) ?? 0, s = ye(e);
  if (!QC(s))
    throw new RangeError("Invalid time value");
  let c = t.match(HS).map((b) => {
    const x = b[0];
    if (x === "p" || x === "P") {
      const P = LS[x];
      return P(b, o.formatLong);
    }
    return b;
  }).join("").match(US).map((b) => {
    if (b === "''")
      return { isToken: !1, value: "'" };
    const x = b[0];
    if (x === "'")
      return { isToken: !1, value: YS(b) };
    if (Ou[x])
      return { isToken: !0, value: b };
    if (x.match(KS))
      throw new RangeError(
        "Format string contains an unescaped latin alphabet character `" + x + "`"
      );
    return { isToken: !1, value: b };
  });
  o.localize.preprocessor && (c = o.localize.preprocessor(s, c));
  const u = {
    firstWeekContainsDate: i,
    weekStartsOn: a,
    locale: o
  };
  return c.map((b) => {
    if (!b.isToken) return b.value;
    const x = b.value;
    (!(n != null && n.useAdditionalWeekYearTokens) && WS(x) || !(n != null && n.useAdditionalDayOfYearTokens) && BS(x)) && $S(x, t, String(e));
    const P = Ou[x[0]];
    return P(s, x, o.localize, u);
  }).join("");
}
function YS(e) {
  const t = e.match(zS);
  return t ? t[1].replace(GS, "'") : e;
}
function XS(e) {
  const t = ye(e), n = t.getFullYear(), r = t.getMonth(), o = it(e, 0);
  return o.setFullYear(n, r + 1, 0), o.setHours(0, 0, 0, 0), o.getDate();
}
function qS(e) {
  return Math.trunc(+ye(e) / 1e3);
}
function ZS(e) {
  const t = ye(e), n = t.getMonth();
  return t.setFullYear(t.getFullYear(), n + 1, 0), t.setHours(0, 0, 0, 0), t;
}
function QS(e, t) {
  return JC(
    ZS(e),
    tt(e),
    t
  ) + 1;
}
function qa(e, t) {
  const n = ye(e), r = ye(t);
  return n.getTime() > r.getTime();
}
function Kh(e, t) {
  const n = ye(e), r = ye(t);
  return +n < +r;
}
function Qs(e, t) {
  const n = ye(e), r = ye(t);
  return n.getFullYear() === r.getFullYear() && n.getMonth() === r.getMonth();
}
function JS(e, t) {
  const n = ye(e), r = ye(t);
  return n.getFullYear() === r.getFullYear();
}
function da(e, t) {
  return Ye(e, -t);
}
function fa(e, t) {
  const n = ye(e), r = n.getFullYear(), o = n.getDate(), i = it(e, 0);
  i.setFullYear(r, t, 15), i.setHours(0, 0, 0, 0);
  const a = XS(i);
  return n.setMonth(t, Math.min(o, a)), n;
}
function Wu(e, t) {
  const n = ye(e);
  return isNaN(+n) ? it(e, NaN) : (n.setFullYear(t), n);
}
var me = function() {
  return me = Object.assign || function(t) {
    for (var n, r = 1, o = arguments.length; r < o; r++) {
      n = arguments[r];
      for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
    }
    return t;
  }, me.apply(this, arguments);
};
function e2(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
}
function Yh(e, t, n) {
  for (var r = 0, o = t.length, i; r < o; r++)
    (i || !(r in t)) && (i || (i = Array.prototype.slice.call(t, 0, r)), i[r] = t[r]);
  return e.concat(i || Array.prototype.slice.call(t));
}
function Kr(e) {
  return e.mode === "multiple";
}
function Yr(e) {
  return e.mode === "range";
}
function Si(e) {
  return e.mode === "single";
}
var t2 = {
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
function n2(e, t) {
  return dn(e, "LLLL y", t);
}
function r2(e, t) {
  return dn(e, "d", t);
}
function o2(e, t) {
  return dn(e, "LLLL", t);
}
function i2(e) {
  return "".concat(e);
}
function a2(e, t) {
  return dn(e, "cccccc", t);
}
function s2(e, t) {
  return dn(e, "yyyy", t);
}
var l2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  formatCaption: n2,
  formatDay: r2,
  formatMonthCaption: o2,
  formatWeekNumber: i2,
  formatWeekdayName: a2,
  formatYearCaption: s2
}), c2 = function(e, t, n) {
  return dn(e, "do MMMM (EEEE)", n);
}, u2 = function() {
  return "Month: ";
}, d2 = function() {
  return "Go to next month";
}, f2 = function() {
  return "Go to previous month";
}, h2 = function(e, t) {
  return dn(e, "cccc", t);
}, m2 = function(e) {
  return "Week n. ".concat(e);
}, p2 = function() {
  return "Year: ";
}, g2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  labelDay: c2,
  labelMonthDropdown: u2,
  labelNext: d2,
  labelPrevious: f2,
  labelWeekNumber: m2,
  labelWeekday: h2,
  labelYearDropdown: p2
});
function v2() {
  var e = "buttons", t = t2, n = jh, r = {}, o = {}, i = 1, a = {}, s = /* @__PURE__ */ new Date();
  return {
    captionLayout: e,
    classNames: t,
    formatters: l2,
    labels: g2,
    locale: n,
    modifiersClassNames: r,
    modifiers: o,
    numberOfMonths: i,
    styles: a,
    today: s,
    mode: "default"
  };
}
function y2(e) {
  var t = e.fromYear, n = e.toYear, r = e.fromMonth, o = e.toMonth, i = e.fromDate, a = e.toDate;
  return r ? i = tt(r) : t && (i = new Date(t, 0, 1)), o ? a = qs(o) : n && (a = new Date(n, 11, 31)), {
    fromDate: i ? Zn(i) : void 0,
    toDate: a ? Zn(a) : void 0
  };
}
var Xh = nt(void 0);
function b2(e) {
  var t, n = e.initialProps, r = v2(), o = y2(n), i = o.fromDate, a = o.toDate, s = (t = n.captionLayout) !== null && t !== void 0 ? t : r.captionLayout;
  s !== "buttons" && (!i || !a) && (s = "buttons");
  var c;
  (Si(n) || Kr(n) || Yr(n)) && (c = n.onSelect);
  var u = me(me(me({}, r), n), { captionLayout: s, classNames: me(me({}, r.classNames), n.classNames), components: me({}, n.components), formatters: me(me({}, r.formatters), n.formatters), fromDate: i, labels: me(me({}, r.labels), n.labels), mode: n.mode || r.mode, modifiers: me(me({}, r.modifiers), n.modifiers), modifiersClassNames: me(me({}, r.modifiersClassNames), n.modifiersClassNames), onSelect: c, styles: me(me({}, r.styles), n.styles), toDate: a });
  return l(Xh.Provider, { value: u, children: e.children });
}
function Te() {
  var e = Pe(Xh);
  if (!e)
    throw new Error("useDayPicker must be used within a DayPickerProvider.");
  return e;
}
function qh(e) {
  var t = Te(), n = t.locale, r = t.classNames, o = t.styles, i = t.formatters.formatCaption;
  return l("div", { className: r.caption_label, style: o.caption_label, "aria-live": "polite", role: "presentation", id: e.id, children: i(e.displayMonth, { locale: n }) });
}
function w2(e) {
  return l("svg", me({ width: "8px", height: "8px", viewBox: "0 0 120 120", "data-testid": "iconDropdown" }, e, { children: l("path", { d: "M4.22182541,48.2218254 C8.44222828,44.0014225 15.2388494,43.9273804 19.5496459,47.9996989 L19.7781746,48.2218254 L60,88.443 L100.221825,48.2218254 C104.442228,44.0014225 111.238849,43.9273804 115.549646,47.9996989 L115.778175,48.2218254 C119.998577,52.4422283 120.07262,59.2388494 116.000301,63.5496459 L115.778175,63.7781746 L67.7781746,111.778175 C63.5577717,115.998577 56.7611506,116.07262 52.4503541,112.000301 L52.2218254,111.778175 L4.22182541,63.7781746 C-0.0739418023,59.4824074 -0.0739418023,52.5175926 4.22182541,48.2218254 Z", fill: "currentColor", fillRule: "nonzero" }) }));
}
function Zh(e) {
  var t, n, r = e.onChange, o = e.value, i = e.children, a = e.caption, s = e.className, c = e.style, u = Te(), d = (n = (t = u.components) === null || t === void 0 ? void 0 : t.IconDropdown) !== null && n !== void 0 ? n : w2;
  return N("div", { className: s, style: c, children: [l("span", { className: u.classNames.vhidden, children: e["aria-label"] }), l("select", { name: e.name, "aria-label": e["aria-label"], className: u.classNames.dropdown, style: u.styles.dropdown, value: o, onChange: r, children: i }), N("div", { className: u.classNames.caption_label, style: u.styles.caption_label, "aria-hidden": "true", children: [a, l(d, { className: u.classNames.dropdown_icon, style: u.styles.dropdown_icon })] })] });
}
function x2(e) {
  var t, n = Te(), r = n.fromDate, o = n.toDate, i = n.styles, a = n.locale, s = n.formatters.formatMonthCaption, c = n.classNames, u = n.components, d = n.labels.labelMonthDropdown;
  if (!r)
    return l(xe, {});
  if (!o)
    return l(xe, {});
  var f = [];
  if (JS(r, o))
    for (var h = tt(r), g = r.getMonth(); g <= o.getMonth(); g++)
      f.push(fa(h, g));
  else
    for (var h = tt(/* @__PURE__ */ new Date()), g = 0; g <= 11; g++)
      f.push(fa(h, g));
  var p = function(y) {
    var w = Number(y.target.value), b = fa(tt(e.displayMonth), w);
    e.onChange(b);
  }, v = (t = u == null ? void 0 : u.Dropdown) !== null && t !== void 0 ? t : Zh;
  return l(v, { name: "months", "aria-label": d(), className: c.dropdown_month, style: i.dropdown_month, onChange: p, value: e.displayMonth.getMonth(), caption: s(e.displayMonth, { locale: a }), children: f.map(function(y) {
    return l("option", { value: y.getMonth(), children: s(y, { locale: a }) }, y.getMonth());
  }) });
}
function C2(e) {
  var t, n = e.displayMonth, r = Te(), o = r.fromDate, i = r.toDate, a = r.locale, s = r.styles, c = r.classNames, u = r.components, d = r.formatters.formatYearCaption, f = r.labels.labelYearDropdown, h = [];
  if (!o)
    return l(xe, {});
  if (!i)
    return l(xe, {});
  for (var g = o.getFullYear(), p = i.getFullYear(), v = g; v <= p; v++)
    h.push(Wu(Wh(/* @__PURE__ */ new Date()), v));
  var y = function(b) {
    var x = Wu(tt(n), Number(b.target.value));
    e.onChange(x);
  }, w = (t = u == null ? void 0 : u.Dropdown) !== null && t !== void 0 ? t : Zh;
  return l(w, { name: "years", "aria-label": f(), className: c.dropdown_year, style: s.dropdown_year, onChange: y, value: n.getFullYear(), caption: d(n, { locale: a }), children: h.map(function(b) {
    return l("option", { value: b.getFullYear(), children: d(b, { locale: a }) }, b.getFullYear());
  }) });
}
function S2(e, t) {
  var n = ke(e), r = n[0], o = n[1], i = t === void 0 ? r : t;
  return [i, o];
}
function N2(e) {
  var t = e.month, n = e.defaultMonth, r = e.today, o = t || n || r || /* @__PURE__ */ new Date(), i = e.toDate, a = e.fromDate, s = e.numberOfMonths, c = s === void 0 ? 1 : s;
  if (i && Ir(i, o) < 0) {
    var u = -1 * (c - 1);
    o = Mt(i, u);
  }
  return a && Ir(o, a) < 0 && (o = a), tt(o);
}
function M2() {
  var e = Te(), t = N2(e), n = S2(t, e.month), r = n[0], o = n[1], i = function(a) {
    var s;
    if (!e.disableNavigation) {
      var c = tt(a);
      o(c), (s = e.onMonthChange) === null || s === void 0 || s.call(e, c);
    }
  };
  return [r, i];
}
function P2(e, t) {
  for (var n = t.reverseMonths, r = t.numberOfMonths, o = tt(e), i = tt(Mt(o, r)), a = Ir(i, o), s = [], c = 0; c < a; c++) {
    var u = Mt(o, c);
    s.push(u);
  }
  return n && (s = s.reverse()), s;
}
function T2(e, t) {
  if (!t.disableNavigation) {
    var n = t.toDate, r = t.pagedNavigation, o = t.numberOfMonths, i = o === void 0 ? 1 : o, a = r ? i : 1, s = tt(e);
    if (!n)
      return Mt(s, a);
    var c = Ir(n, e);
    if (!(c < i))
      return Mt(s, a);
  }
}
function k2(e, t) {
  if (!t.disableNavigation) {
    var n = t.fromDate, r = t.pagedNavigation, o = t.numberOfMonths, i = o === void 0 ? 1 : o, a = r ? i : 1, s = tt(e);
    if (!n)
      return Mt(s, -a);
    var c = Ir(s, n);
    if (!(c <= 0))
      return Mt(s, -a);
  }
}
var Qh = nt(void 0);
function E2(e) {
  var t = Te(), n = M2(), r = n[0], o = n[1], i = P2(r, t), a = T2(r, t), s = k2(r, t), c = function(f) {
    return i.some(function(h) {
      return Qs(f, h);
    });
  }, u = function(f, h) {
    c(f) || (h && Kh(f, h) ? o(Mt(f, 1 + t.numberOfMonths * -1)) : o(f));
  }, d = {
    currentMonth: r,
    displayMonths: i,
    goToMonth: o,
    goToDate: u,
    previousMonth: s,
    nextMonth: a,
    isDateDisplayed: c
  };
  return l(Qh.Provider, { value: d, children: e.children });
}
function Xr() {
  var e = Pe(Qh);
  if (!e)
    throw new Error("useNavigation must be used within a NavigationProvider");
  return e;
}
function $u(e) {
  var t, n = Te(), r = n.classNames, o = n.styles, i = n.components, a = Xr().goToMonth, s = function(d) {
    a(Mt(d, e.displayIndex ? -e.displayIndex : 0));
  }, c = (t = i == null ? void 0 : i.CaptionLabel) !== null && t !== void 0 ? t : qh, u = l(c, { id: e.id, displayMonth: e.displayMonth });
  return N("div", { className: r.caption_dropdowns, style: o.caption_dropdowns, children: [l("div", { className: r.vhidden, children: u }), l(x2, { onChange: s, displayMonth: e.displayMonth }), l(C2, { onChange: s, displayMonth: e.displayMonth })] });
}
function A2(e) {
  return l("svg", me({ width: "16px", height: "16px", viewBox: "0 0 120 120" }, e, { children: l("path", { d: "M69.490332,3.34314575 C72.6145263,0.218951416 77.6798462,0.218951416 80.8040405,3.34314575 C83.8617626,6.40086786 83.9268205,11.3179931 80.9992143,14.4548388 L80.8040405,14.6568542 L35.461,60 L80.8040405,105.343146 C83.8617626,108.400868 83.9268205,113.317993 80.9992143,116.454839 L80.8040405,116.656854 C77.7463184,119.714576 72.8291931,119.779634 69.6923475,116.852028 L69.490332,116.656854 L18.490332,65.6568542 C15.4326099,62.5991321 15.367552,57.6820069 18.2951583,54.5451612 L18.490332,54.3431458 L69.490332,3.34314575 Z", fill: "currentColor", fillRule: "nonzero" }) }));
}
function D2(e) {
  return l("svg", me({ width: "16px", height: "16px", viewBox: "0 0 120 120" }, e, { children: l("path", { d: "M49.8040405,3.34314575 C46.6798462,0.218951416 41.6145263,0.218951416 38.490332,3.34314575 C35.4326099,6.40086786 35.367552,11.3179931 38.2951583,14.4548388 L38.490332,14.6568542 L83.8333725,60 L38.490332,105.343146 C35.4326099,108.400868 35.367552,113.317993 38.2951583,116.454839 L38.490332,116.656854 C41.5480541,119.714576 46.4651794,119.779634 49.602025,116.852028 L49.8040405,116.656854 L100.804041,65.6568542 C103.861763,62.5991321 103.926821,57.6820069 100.999214,54.5451612 L100.804041,54.3431458 L49.8040405,3.34314575 Z", fill: "currentColor" }) }));
}
var Ho = X(function(e, t) {
  var n = Te(), r = n.classNames, o = n.styles, i = [r.button_reset, r.button];
  e.className && i.push(e.className);
  var a = i.join(" "), s = me(me({}, o.button_reset), o.button);
  return e.style && Object.assign(s, e.style), l("button", me({}, e, { ref: t, type: "button", className: a, style: s }));
});
function _2(e) {
  var t, n, r = Te(), o = r.dir, i = r.locale, a = r.classNames, s = r.styles, c = r.labels, u = c.labelPrevious, d = c.labelNext, f = r.components;
  if (!e.nextMonth && !e.previousMonth)
    return l(xe, {});
  var h = u(e.previousMonth, { locale: i }), g = [
    a.nav_button,
    a.nav_button_previous
  ].join(" "), p = d(e.nextMonth, { locale: i }), v = [
    a.nav_button,
    a.nav_button_next
  ].join(" "), y = (t = f == null ? void 0 : f.IconRight) !== null && t !== void 0 ? t : D2, w = (n = f == null ? void 0 : f.IconLeft) !== null && n !== void 0 ? n : A2;
  return N("div", { className: a.nav, style: s.nav, children: [!e.hidePrevious && l(Ho, { name: "previous-month", "aria-label": h, className: g, style: s.nav_button_previous, disabled: !e.previousMonth, onClick: e.onPreviousClick, children: o === "rtl" ? l(y, { className: a.nav_icon, style: s.nav_icon }) : l(w, { className: a.nav_icon, style: s.nav_icon }) }), !e.hideNext && l(Ho, { name: "next-month", "aria-label": p, className: v, style: s.nav_button_next, disabled: !e.nextMonth, onClick: e.onNextClick, children: o === "rtl" ? l(w, { className: a.nav_icon, style: s.nav_icon }) : l(y, { className: a.nav_icon, style: s.nav_icon }) })] });
}
function ju(e) {
  var t = Te().numberOfMonths, n = Xr(), r = n.previousMonth, o = n.nextMonth, i = n.goToMonth, a = n.displayMonths, s = a.findIndex(function(p) {
    return Qs(e.displayMonth, p);
  }), c = s === 0, u = s === a.length - 1, d = t > 1 && (c || !u), f = t > 1 && (u || !c), h = function() {
    r && i(r);
  }, g = function() {
    o && i(o);
  };
  return l(_2, { displayMonth: e.displayMonth, hideNext: d, hidePrevious: f, nextMonth: o, previousMonth: r, onPreviousClick: h, onNextClick: g });
}
function R2(e) {
  var t, n = Te(), r = n.classNames, o = n.disableNavigation, i = n.styles, a = n.captionLayout, s = n.components, c = (t = s == null ? void 0 : s.CaptionLabel) !== null && t !== void 0 ? t : qh, u;
  return o ? u = l(c, { id: e.id, displayMonth: e.displayMonth }) : a === "dropdown" ? u = l($u, { displayMonth: e.displayMonth, id: e.id }) : a === "dropdown-buttons" ? u = N(xe, { children: [l($u, { displayMonth: e.displayMonth, displayIndex: e.displayIndex, id: e.id }), l(ju, { displayMonth: e.displayMonth, displayIndex: e.displayIndex, id: e.id })] }) : u = N(xe, { children: [l(c, { id: e.id, displayMonth: e.displayMonth, displayIndex: e.displayIndex }), l(ju, { displayMonth: e.displayMonth, id: e.id })] }), l("div", { className: r.caption, style: i.caption, children: u });
}
function I2(e) {
  var t = Te(), n = t.footer, r = t.styles, o = t.classNames.tfoot;
  return n ? l("tfoot", { className: o, style: r.tfoot, children: l("tr", { children: l("td", { colSpan: 8, children: n }) }) }) : l(xe, {});
}
function L2(e, t, n) {
  for (var r = n ? Nn(/* @__PURE__ */ new Date()) : Lt(/* @__PURE__ */ new Date(), { locale: e, weekStartsOn: t }), o = [], i = 0; i < 7; i++) {
    var a = Ye(r, i);
    o.push(a);
  }
  return o;
}
function O2() {
  var e = Te(), t = e.classNames, n = e.styles, r = e.showWeekNumber, o = e.locale, i = e.weekStartsOn, a = e.ISOWeek, s = e.formatters.formatWeekdayName, c = e.labels.labelWeekday, u = L2(o, i, a);
  return N("tr", { style: n.head_row, className: t.head_row, children: [r && l("td", { style: n.head_cell, className: t.head_cell }), u.map(function(d, f) {
    return l("th", { scope: "col", className: t.head_cell, style: n.head_cell, "aria-label": c(d, { locale: o }), children: s(d, { locale: o }) }, f);
  })] });
}
function F2() {
  var e, t = Te(), n = t.classNames, r = t.styles, o = t.components, i = (e = o == null ? void 0 : o.HeadRow) !== null && e !== void 0 ? e : O2;
  return l("thead", { style: r.head, className: n.head, children: l(i, {}) });
}
function V2(e) {
  var t = Te(), n = t.locale, r = t.formatters.formatDay;
  return l(xe, { children: r(e.date, { locale: n }) });
}
var Js = nt(void 0);
function B2(e) {
  if (!Kr(e.initialProps)) {
    var t = {
      selected: void 0,
      modifiers: {
        disabled: []
      }
    };
    return l(Js.Provider, { value: t, children: e.children });
  }
  return l(W2, { initialProps: e.initialProps, children: e.children });
}
function W2(e) {
  var t = e.initialProps, n = e.children, r = t.selected, o = t.min, i = t.max, a = function(u, d, f) {
    var h, g;
    (h = t.onDayClick) === null || h === void 0 || h.call(t, u, d, f);
    var p = !!(d.selected && o && (r == null ? void 0 : r.length) === o);
    if (!p) {
      var v = !!(!d.selected && i && (r == null ? void 0 : r.length) === i);
      if (!v) {
        var y = r ? Yh([], r) : [];
        if (d.selected) {
          var w = y.findIndex(function(b) {
            return et(u, b);
          });
          y.splice(w, 1);
        } else
          y.push(u);
        (g = t.onSelect) === null || g === void 0 || g.call(t, y, u, d, f);
      }
    }
  }, s = {
    disabled: []
  };
  r && s.disabled.push(function(u) {
    var d = i && r.length > i - 1, f = r.some(function(h) {
      return et(h, u);
    });
    return !!(d && !f);
  });
  var c = {
    selected: r,
    onDayClick: a,
    modifiers: s
  };
  return l(Js.Provider, { value: c, children: n });
}
function el() {
  var e = Pe(Js);
  if (!e)
    throw new Error("useSelectMultiple must be used within a SelectMultipleProvider");
  return e;
}
function $2(e, t) {
  var n = t || {}, r = n.from, o = n.to;
  return r && o ? et(o, e) && et(r, e) ? void 0 : et(o, e) ? { from: o, to: void 0 } : et(r, e) ? void 0 : qa(r, e) ? { from: e, to: o } : { from: r, to: e } : o ? qa(e, o) ? { from: o, to: e } : { from: e, to: o } : r ? Kh(e, r) ? { from: e, to: r } : { from: r, to: e } : { from: e, to: void 0 };
}
var tl = nt(void 0);
function j2(e) {
  if (!Yr(e.initialProps)) {
    var t = {
      selected: void 0,
      modifiers: {
        range_start: [],
        range_end: [],
        range_middle: [],
        disabled: []
      }
    };
    return l(tl.Provider, { value: t, children: e.children });
  }
  return l(U2, { initialProps: e.initialProps, children: e.children });
}
function U2(e) {
  var t = e.initialProps, n = e.children, r = t.selected, o = r || {}, i = o.from, a = o.to, s = t.min, c = t.max, u = function(g, p, v) {
    var y, w;
    (y = t.onDayClick) === null || y === void 0 || y.call(t, g, p, v);
    var b = $2(g, r);
    (w = t.onSelect) === null || w === void 0 || w.call(t, b, g, p, v);
  }, d = {
    range_start: [],
    range_end: [],
    range_middle: [],
    disabled: []
  };
  if (i ? (d.range_start = [i], a ? (d.range_end = [a], et(i, a) || (d.range_middle = [
    {
      after: i,
      before: a
    }
  ])) : d.range_end = [i]) : a && (d.range_start = [a], d.range_end = [a]), s && (i && !a && d.disabled.push({
    after: da(i, s - 1),
    before: Ye(i, s - 1)
  }), i && a && d.disabled.push({
    after: i,
    before: Ye(i, s - 1)
  }), !i && a && d.disabled.push({
    after: da(a, s - 1),
    before: Ye(a, s - 1)
  })), c) {
    if (i && !a && (d.disabled.push({
      before: Ye(i, -c + 1)
    }), d.disabled.push({
      after: Ye(i, c - 1)
    })), i && a) {
      var f = Et(a, i) + 1, h = c - f;
      d.disabled.push({
        before: da(i, h)
      }), d.disabled.push({
        after: Ye(a, h)
      });
    }
    !i && a && (d.disabled.push({
      before: Ye(a, -c + 1)
    }), d.disabled.push({
      after: Ye(a, c - 1)
    }));
  }
  return l(tl.Provider, { value: { selected: r, onDayClick: u, modifiers: d }, children: n });
}
function nl() {
  var e = Pe(tl);
  if (!e)
    throw new Error("useSelectRange must be used within a SelectRangeProvider");
  return e;
}
function To(e) {
  return Array.isArray(e) ? Yh([], e) : e !== void 0 ? [e] : [];
}
function H2(e) {
  var t = {};
  return Object.entries(e).forEach(function(n) {
    var r = n[0], o = n[1];
    t[r] = To(o);
  }), t;
}
var Pt;
(function(e) {
  e.Outside = "outside", e.Disabled = "disabled", e.Selected = "selected", e.Hidden = "hidden", e.Today = "today", e.RangeStart = "range_start", e.RangeEnd = "range_end", e.RangeMiddle = "range_middle";
})(Pt || (Pt = {}));
var z2 = Pt.Selected, Bt = Pt.Disabled, G2 = Pt.Hidden, K2 = Pt.Today, ha = Pt.RangeEnd, ma = Pt.RangeMiddle, pa = Pt.RangeStart, Y2 = Pt.Outside;
function X2(e, t, n) {
  var r, o = (r = {}, r[z2] = To(e.selected), r[Bt] = To(e.disabled), r[G2] = To(e.hidden), r[K2] = [e.today], r[ha] = [], r[ma] = [], r[pa] = [], r[Y2] = [], r);
  return e.fromDate && o[Bt].push({ before: e.fromDate }), e.toDate && o[Bt].push({ after: e.toDate }), Kr(e) ? o[Bt] = o[Bt].concat(t.modifiers[Bt]) : Yr(e) && (o[Bt] = o[Bt].concat(n.modifiers[Bt]), o[pa] = n.modifiers[pa], o[ma] = n.modifiers[ma], o[ha] = n.modifiers[ha]), o;
}
var Jh = nt(void 0);
function q2(e) {
  var t = Te(), n = el(), r = nl(), o = X2(t, n, r), i = H2(t.modifiers), a = me(me({}, o), i);
  return l(Jh.Provider, { value: a, children: e.children });
}
function em() {
  var e = Pe(Jh);
  if (!e)
    throw new Error("useModifiers must be used within a ModifiersProvider");
  return e;
}
function Z2(e) {
  return !!(e && typeof e == "object" && "before" in e && "after" in e);
}
function Q2(e) {
  return !!(e && typeof e == "object" && "from" in e);
}
function J2(e) {
  return !!(e && typeof e == "object" && "after" in e);
}
function eN(e) {
  return !!(e && typeof e == "object" && "before" in e);
}
function tN(e) {
  return !!(e && typeof e == "object" && "dayOfWeek" in e);
}
function nN(e, t) {
  var n, r = t.from, o = t.to;
  if (r && o) {
    var i = Et(o, r) < 0;
    i && (n = [o, r], r = n[0], o = n[1]);
    var a = Et(e, r) >= 0 && Et(o, e) >= 0;
    return a;
  }
  return o ? et(o, e) : r ? et(r, e) : !1;
}
function rN(e) {
  return Xs(e);
}
function oN(e) {
  return Array.isArray(e) && e.every(Xs);
}
function iN(e, t) {
  return t.some(function(n) {
    if (typeof n == "boolean")
      return n;
    if (rN(n))
      return et(e, n);
    if (oN(n))
      return n.includes(e);
    if (Q2(n))
      return nN(e, n);
    if (tN(n))
      return n.dayOfWeek.includes(e.getDay());
    if (Z2(n)) {
      var r = Et(n.before, e), o = Et(n.after, e), i = r > 0, a = o < 0, s = qa(n.before, n.after);
      return s ? a && i : i || a;
    }
    return J2(n) ? Et(e, n.after) > 0 : eN(n) ? Et(n.before, e) > 0 : typeof n == "function" ? n(e) : !1;
  });
}
function rl(e, t, n) {
  var r = Object.keys(t).reduce(function(i, a) {
    var s = t[a];
    return iN(e, s) && i.push(a), i;
  }, []), o = {};
  return r.forEach(function(i) {
    return o[i] = !0;
  }), n && !Qs(e, n) && (o.outside = !0), o;
}
function aN(e, t) {
  for (var n = tt(e[0]), r = qs(e[e.length - 1]), o, i, a = n; a <= r; ) {
    var s = rl(a, t), c = !s.disabled && !s.hidden;
    if (!c) {
      a = Ye(a, 1);
      continue;
    }
    if (s.selected)
      return a;
    s.today && !i && (i = a), o || (o = a), a = Ye(a, 1);
  }
  return i || o;
}
var sN = 365;
function tm(e, t) {
  var n = t.moveBy, r = t.direction, o = t.context, i = t.modifiers, a = t.retry, s = a === void 0 ? { count: 0, lastFocused: e } : a, c = o.weekStartsOn, u = o.fromDate, d = o.toDate, f = o.locale, h = {
    day: Ye,
    week: Xa,
    month: Mt,
    year: XC,
    startOfWeek: function(y) {
      return o.ISOWeek ? Nn(y) : Lt(y, { locale: f, weekStartsOn: c });
    },
    endOfWeek: function(y) {
      return o.ISOWeek ? $h(y) : Zs(y, { locale: f, weekStartsOn: c });
    }
  }, g = h[n](e, r === "after" ? 1 : -1);
  r === "before" && u ? g = qC([u, g]) : r === "after" && d && (g = ZC([d, g]));
  var p = !0;
  if (i) {
    var v = rl(g, i);
    p = !v.disabled && !v.hidden;
  }
  return p ? g : s.count > sN ? s.lastFocused : tm(g, {
    moveBy: n,
    direction: r,
    context: o,
    modifiers: i,
    retry: me(me({}, s), { count: s.count + 1 })
  });
}
var nm = nt(void 0);
function lN(e) {
  var t = Xr(), n = em(), r = ke(), o = r[0], i = r[1], a = ke(), s = a[0], c = a[1], u = aN(t.displayMonths, n), d = o ?? (s && t.isDateDisplayed(s)) ? s : u, f = function() {
    c(o), i(void 0);
  }, h = function(y) {
    i(y);
  }, g = Te(), p = function(y, w) {
    if (o) {
      var b = tm(o, {
        moveBy: y,
        direction: w,
        context: g,
        modifiers: n
      });
      et(o, b) || (t.goToDate(b, o), h(b));
    }
  }, v = {
    focusedDay: o,
    focusTarget: d,
    blur: f,
    focus: h,
    focusDayAfter: function() {
      return p("day", "after");
    },
    focusDayBefore: function() {
      return p("day", "before");
    },
    focusWeekAfter: function() {
      return p("week", "after");
    },
    focusWeekBefore: function() {
      return p("week", "before");
    },
    focusMonthBefore: function() {
      return p("month", "before");
    },
    focusMonthAfter: function() {
      return p("month", "after");
    },
    focusYearBefore: function() {
      return p("year", "before");
    },
    focusYearAfter: function() {
      return p("year", "after");
    },
    focusStartOfWeek: function() {
      return p("startOfWeek", "before");
    },
    focusEndOfWeek: function() {
      return p("endOfWeek", "after");
    }
  };
  return l(nm.Provider, { value: v, children: e.children });
}
function ol() {
  var e = Pe(nm);
  if (!e)
    throw new Error("useFocusContext must be used within a FocusProvider");
  return e;
}
function cN(e, t) {
  var n = em(), r = rl(e, n, t);
  return r;
}
var il = nt(void 0);
function uN(e) {
  if (!Si(e.initialProps)) {
    var t = {
      selected: void 0
    };
    return l(il.Provider, { value: t, children: e.children });
  }
  return l(dN, { initialProps: e.initialProps, children: e.children });
}
function dN(e) {
  var t = e.initialProps, n = e.children, r = function(i, a, s) {
    var c, u, d;
    if ((c = t.onDayClick) === null || c === void 0 || c.call(t, i, a, s), a.selected && !t.required) {
      (u = t.onSelect) === null || u === void 0 || u.call(t, void 0, i, a, s);
      return;
    }
    (d = t.onSelect) === null || d === void 0 || d.call(t, i, i, a, s);
  }, o = {
    selected: t.selected,
    onDayClick: r
  };
  return l(il.Provider, { value: o, children: n });
}
function rm() {
  var e = Pe(il);
  if (!e)
    throw new Error("useSelectSingle must be used within a SelectSingleProvider");
  return e;
}
function fN(e, t) {
  var n = Te(), r = rm(), o = el(), i = nl(), a = ol(), s = a.focusDayAfter, c = a.focusDayBefore, u = a.focusWeekAfter, d = a.focusWeekBefore, f = a.blur, h = a.focus, g = a.focusMonthBefore, p = a.focusMonthAfter, v = a.focusYearBefore, y = a.focusYearAfter, w = a.focusStartOfWeek, b = a.focusEndOfWeek, x = function(V) {
    var W, z, M, S;
    Si(n) ? (W = r.onDayClick) === null || W === void 0 || W.call(r, e, t, V) : Kr(n) ? (z = o.onDayClick) === null || z === void 0 || z.call(o, e, t, V) : Yr(n) ? (M = i.onDayClick) === null || M === void 0 || M.call(i, e, t, V) : (S = n.onDayClick) === null || S === void 0 || S.call(n, e, t, V);
  }, P = function(V) {
    var W;
    h(e), (W = n.onDayFocus) === null || W === void 0 || W.call(n, e, t, V);
  }, T = function(V) {
    var W;
    f(), (W = n.onDayBlur) === null || W === void 0 || W.call(n, e, t, V);
  }, R = function(V) {
    var W;
    (W = n.onDayMouseEnter) === null || W === void 0 || W.call(n, e, t, V);
  }, F = function(V) {
    var W;
    (W = n.onDayMouseLeave) === null || W === void 0 || W.call(n, e, t, V);
  }, D = function(V) {
    var W;
    (W = n.onDayPointerEnter) === null || W === void 0 || W.call(n, e, t, V);
  }, _ = function(V) {
    var W;
    (W = n.onDayPointerLeave) === null || W === void 0 || W.call(n, e, t, V);
  }, j = function(V) {
    var W;
    (W = n.onDayTouchCancel) === null || W === void 0 || W.call(n, e, t, V);
  }, te = function(V) {
    var W;
    (W = n.onDayTouchEnd) === null || W === void 0 || W.call(n, e, t, V);
  }, G = function(V) {
    var W;
    (W = n.onDayTouchMove) === null || W === void 0 || W.call(n, e, t, V);
  }, $ = function(V) {
    var W;
    (W = n.onDayTouchStart) === null || W === void 0 || W.call(n, e, t, V);
  }, I = function(V) {
    var W;
    (W = n.onDayKeyUp) === null || W === void 0 || W.call(n, e, t, V);
  }, L = function(V) {
    var W;
    switch (V.key) {
      case "ArrowLeft":
        V.preventDefault(), V.stopPropagation(), n.dir === "rtl" ? s() : c();
        break;
      case "ArrowRight":
        V.preventDefault(), V.stopPropagation(), n.dir === "rtl" ? c() : s();
        break;
      case "ArrowDown":
        V.preventDefault(), V.stopPropagation(), u();
        break;
      case "ArrowUp":
        V.preventDefault(), V.stopPropagation(), d();
        break;
      case "PageUp":
        V.preventDefault(), V.stopPropagation(), V.shiftKey ? v() : g();
        break;
      case "PageDown":
        V.preventDefault(), V.stopPropagation(), V.shiftKey ? y() : p();
        break;
      case "Home":
        V.preventDefault(), V.stopPropagation(), w();
        break;
      case "End":
        V.preventDefault(), V.stopPropagation(), b();
        break;
    }
    (W = n.onDayKeyDown) === null || W === void 0 || W.call(n, e, t, V);
  }, H = {
    onClick: x,
    onFocus: P,
    onBlur: T,
    onKeyDown: L,
    onKeyUp: I,
    onMouseEnter: R,
    onMouseLeave: F,
    onPointerEnter: D,
    onPointerLeave: _,
    onTouchCancel: j,
    onTouchEnd: te,
    onTouchMove: G,
    onTouchStart: $
  };
  return H;
}
function hN() {
  var e = Te(), t = rm(), n = el(), r = nl(), o = Si(e) ? t.selected : Kr(e) ? n.selected : Yr(e) ? r.selected : void 0;
  return o;
}
function mN(e) {
  return Object.values(Pt).includes(e);
}
function pN(e, t) {
  var n = [e.classNames.day];
  return Object.keys(t).forEach(function(r) {
    var o = e.modifiersClassNames[r];
    if (o)
      n.push(o);
    else if (mN(r)) {
      var i = e.classNames["day_".concat(r)];
      i && n.push(i);
    }
  }), n;
}
function gN(e, t) {
  var n = me({}, e.styles.day);
  return Object.keys(t).forEach(function(r) {
    var o;
    n = me(me({}, n), (o = e.modifiersStyles) === null || o === void 0 ? void 0 : o[r]);
  }), n;
}
function vN(e, t, n) {
  var r, o, i, a = Te(), s = ol(), c = cN(e, t), u = fN(e, c), d = hN(), f = !!(a.onDayClick || a.mode !== "default");
  Fe(function() {
    var R;
    c.outside || s.focusedDay && f && et(s.focusedDay, e) && ((R = n.current) === null || R === void 0 || R.focus());
  }, [
    s.focusedDay,
    e,
    n,
    f,
    c.outside
  ]);
  var h = pN(a, c).join(" "), g = gN(a, c), p = !!(c.outside && !a.showOutsideDays || c.hidden), v = (i = (o = a.components) === null || o === void 0 ? void 0 : o.DayContent) !== null && i !== void 0 ? i : V2, y = l(v, { date: e, displayMonth: t, activeModifiers: c }), w = {
    style: g,
    className: h,
    children: y,
    role: "gridcell"
  }, b = s.focusTarget && et(s.focusTarget, e) && !c.outside, x = s.focusedDay && et(s.focusedDay, e), P = me(me(me({}, w), (r = { disabled: c.disabled, role: "gridcell" }, r["aria-selected"] = c.selected, r.tabIndex = x || b ? 0 : -1, r)), u), T = {
    isButton: f,
    isHidden: p,
    activeModifiers: c,
    selectedDays: d,
    buttonProps: P,
    divProps: w
  };
  return T;
}
function yN(e) {
  var t = Ve(null), n = vN(e.date, e.displayMonth, t);
  return n.isHidden ? l("div", { role: "gridcell" }) : n.isButton ? l(Ho, me({ name: "day", ref: t }, n.buttonProps)) : l("div", me({}, n.divProps));
}
function bN(e) {
  var t = e.number, n = e.dates, r = Te(), o = r.onWeekNumberClick, i = r.styles, a = r.classNames, s = r.locale, c = r.labels.labelWeekNumber, u = r.formatters.formatWeekNumber, d = u(Number(t), { locale: s });
  if (!o)
    return l("span", { className: a.weeknumber, style: i.weeknumber, children: d });
  var f = c(Number(t), { locale: s }), h = function(g) {
    o(t, n, g);
  };
  return l(Ho, { name: "week-number", "aria-label": f, className: a.weeknumber, style: i.weeknumber, onClick: h, children: d });
}
function wN(e) {
  var t, n, r = Te(), o = r.styles, i = r.classNames, a = r.showWeekNumber, s = r.components, c = (t = s == null ? void 0 : s.Day) !== null && t !== void 0 ? t : yN, u = (n = s == null ? void 0 : s.WeekNumber) !== null && n !== void 0 ? n : bN, d;
  return a && (d = l("td", { className: i.cell, style: o.cell, children: l(u, { number: e.weekNumber, dates: e.dates }) })), N("tr", { className: i.row, style: o.row, children: [d, e.dates.map(function(f) {
    return l("td", { className: i.cell, style: o.cell, role: "presentation", children: l(c, { displayMonth: e.displayMonth, date: f }) }, qS(f));
  })] });
}
function Uu(e, t, n) {
  for (var r = n != null && n.ISOWeek ? $h(t) : Zs(t, n), o = n != null && n.ISOWeek ? Nn(e) : Lt(e, n), i = Et(r, o), a = [], s = 0; s <= i; s++)
    a.push(Ye(o, s));
  var c = a.reduce(function(u, d) {
    var f = n != null && n.ISOWeek ? Uh(d) : zh(d, n), h = u.find(function(g) {
      return g.weekNumber === f;
    });
    return h ? (h.dates.push(d), u) : (u.push({
      weekNumber: f,
      dates: [d]
    }), u);
  }, []);
  return c;
}
function xN(e, t) {
  var n = Uu(tt(e), qs(e), t);
  if (t != null && t.useFixedWeeks) {
    var r = QS(e, t);
    if (r < 6) {
      var o = n[n.length - 1], i = o.dates[o.dates.length - 1], a = Xa(i, 6 - r), s = Uu(Xa(i, 1), a, t);
      n.push.apply(n, s);
    }
  }
  return n;
}
function CN(e) {
  var t, n, r, o = Te(), i = o.locale, a = o.classNames, s = o.styles, c = o.hideHead, u = o.fixedWeeks, d = o.components, f = o.weekStartsOn, h = o.firstWeekContainsDate, g = o.ISOWeek, p = xN(e.displayMonth, {
    useFixedWeeks: !!u,
    ISOWeek: g,
    locale: i,
    weekStartsOn: f,
    firstWeekContainsDate: h
  }), v = (t = d == null ? void 0 : d.Head) !== null && t !== void 0 ? t : F2, y = (n = d == null ? void 0 : d.Row) !== null && n !== void 0 ? n : wN, w = (r = d == null ? void 0 : d.Footer) !== null && r !== void 0 ? r : I2;
  return N("table", { id: e.id, className: a.table, style: s.table, role: "grid", "aria-labelledby": e["aria-labelledby"], children: [!c && l(v, {}), l("tbody", { className: a.tbody, style: s.tbody, children: p.map(function(b) {
    return l(y, { displayMonth: e.displayMonth, dates: b.dates, weekNumber: b.weekNumber }, b.weekNumber);
  }) }), l(w, { displayMonth: e.displayMonth })] });
}
function SN() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
var NN = SN() ? zd : Fe, ga = !1, MN = 0;
function Hu() {
  return "react-day-picker-".concat(++MN);
}
function PN(e) {
  var t, n = e ?? (ga ? Hu() : null), r = ke(n), o = r[0], i = r[1];
  return NN(function() {
    o === null && i(Hu());
  }, []), Fe(function() {
    ga === !1 && (ga = !0);
  }, []), (t = e ?? o) !== null && t !== void 0 ? t : void 0;
}
function TN(e) {
  var t, n, r = Te(), o = r.dir, i = r.classNames, a = r.styles, s = r.components, c = Xr().displayMonths, u = PN(r.id ? "".concat(r.id, "-").concat(e.displayIndex) : void 0), d = r.id ? "".concat(r.id, "-grid-").concat(e.displayIndex) : void 0, f = [i.month], h = a.month, g = e.displayIndex === 0, p = e.displayIndex === c.length - 1, v = !g && !p;
  o === "rtl" && (t = [g, p], p = t[0], g = t[1]), g && (f.push(i.caption_start), h = me(me({}, h), a.caption_start)), p && (f.push(i.caption_end), h = me(me({}, h), a.caption_end)), v && (f.push(i.caption_between), h = me(me({}, h), a.caption_between));
  var y = (n = s == null ? void 0 : s.Caption) !== null && n !== void 0 ? n : R2;
  return N("div", { className: f.join(" "), style: h, children: [l(y, { id: u, displayMonth: e.displayMonth, displayIndex: e.displayIndex }), l(CN, { id: d, "aria-labelledby": u, displayMonth: e.displayMonth })] }, e.displayIndex);
}
function kN(e) {
  var t = Te(), n = t.classNames, r = t.styles;
  return l("div", { className: n.months, style: r.months, children: e.children });
}
function EN(e) {
  var t, n, r = e.initialProps, o = Te(), i = ol(), a = Xr(), s = ke(!1), c = s[0], u = s[1];
  Fe(function() {
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
  var f = me(me({}, o.styles.root), o.style), h = Object.keys(r).filter(function(p) {
    return p.startsWith("data-");
  }).reduce(function(p, v) {
    var y;
    return me(me({}, p), (y = {}, y[v] = r[v], y));
  }, {}), g = (n = (t = r.components) === null || t === void 0 ? void 0 : t.Months) !== null && n !== void 0 ? n : kN;
  return l("div", me({ className: d.join(" "), style: f, dir: o.dir, id: o.id, nonce: r.nonce, title: r.title, lang: r.lang }, h, { children: l(g, { children: a.displayMonths.map(function(p, v) {
    return l(TN, { displayIndex: v, displayMonth: p }, v);
  }) }) }));
}
function AN(e) {
  var t = e.children, n = e2(e, ["children"]);
  return l(b2, { initialProps: n, children: l(E2, { children: l(uN, { initialProps: n, children: l(B2, { initialProps: n, children: l(j2, { initialProps: n, children: l(q2, { children: l(lN, { children: t }) }) }) }) }) }) });
}
function DN(e) {
  return l(AN, me({}, e, { children: l(EN, { initialProps: e }) }));
}
function _N({
  className: e,
  classNames: t,
  showOutsideDays: n = !0,
  ...r
}) {
  return /* @__PURE__ */ l(
    DN,
    {
      showOutsideDays: n,
      className: E("p-3", e),
      classNames: {
        months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
        month: "space-y-4",
        caption: "flex justify-center pt-1 relative items-center",
        caption_label: "text-sm font-medium",
        nav: "space-x-1 flex items-center",
        nav_button: E(
          fc({ variant: "outline" }),
          "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100"
        ),
        nav_button_previous: "absolute left-1",
        nav_button_next: "absolute right-1",
        table: "w-full border-collapse space-y-1",
        head_row: "flex",
        head_cell: "text-f1-foreground-secondary rounded-xs w-9 font-normal text-[0.8rem]",
        row: "flex w-full mt-2",
        cell: "rounded-full h-9 w-9 text-center text-sm p-0 relative [&:has([aria-selected].day-outside)]:bg-f1-background-selected focus-within:relative focus-within:z-20 [&:has([aria-selected].day-range-middle)]:rounded-none first:[&:has([aria-selected].day-range-middle)]:rounded-l-lg last:[&:has([aria-selected].day-range-middle)]:rounded-r-lg [&:has([aria-selected].day-range-start)]:rounded-r-none [&:has([aria-selected].day-range-end)]:rounded-l-none first:[&:has([aria-selected].day-range-end)]:rounded-r-[24px] first:[&:has([aria-selected].day-range-end)]:rounded-l-md last:[&:has([aria-selected].day-range-start)]:rounded-l-[24px] last:[&:has([aria-selected].day-range-start)]:rounded-r-md [&:has([aria-selected].day-range-start.day-range-end)]:rounded-full",
        day: E(
          fc({ variant: "ghost" }),
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
        IconLeft: () => /* @__PURE__ */ l(WC, { className: "h-4 w-4" }),
        IconRight: () => /* @__PURE__ */ l(Ks, { className: "h-4 w-4" })
      },
      ...r
    }
  );
}
_N.displayName = "Calendar";
const om = m.forwardRef(
  ({ className: e, type: t, ...n }, r) => /* @__PURE__ */ l(
    "input",
    {
      type: t,
      className: E(
        "flex h-10 w-full rounded-sm border-2 border-solid border-f1-border bg-f1-background px-3 py-2 text-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-f1-foreground-secondary/60 hover:border-f1-border-hover disabled:cursor-not-allowed disabled:bg-f1-background-secondary disabled:opacity-50",
        mt("focus-visible:border-f1-border-hover"),
        e
      ),
      ref: r,
      ...n
    }
  )
);
om.displayName = "Input";
const RN = (e, t) => /* @__PURE__ */ l("svg", { viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg", ref: t, ...e, children: /* @__PURE__ */ l("path", { d: "M9.99998 16.6667C13.6819 16.6667 16.6666 13.6819 16.6666 10C16.6666 6.3181 13.6819 3.33333 9.99998 3.33333C6.31808 3.33333 3.33331 6.3181 3.33331 10C3.33331 13.6819 6.31808 16.6667 9.99998 16.6667ZM9.19376 6.71637C9.15728 6.24651 9.52871 5.84513 9.99998 5.84513C10.4713 5.84513 10.8427 6.24651 10.8062 6.71637L10.5539 9.96646C10.5314 10.2557 10.2901 10.479 9.99998 10.479C9.70983 10.479 9.46855 10.2557 9.44609 9.96646L9.19376 6.71637ZM10.8333 12.5008C10.8333 12.9611 10.4602 13.3342 9.99998 13.3342C9.53974 13.3342 9.16665 12.9611 9.16665 12.5008C9.16665 12.0406 9.53974 11.6675 9.99998 11.6675C10.4602 11.6675 10.8333 12.0406 10.8333 12.5008Z", fill: "#DC5042" }) }), im = X(RN), IN = (e, t) => /* @__PURE__ */ N("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: [
  /* @__PURE__ */ l("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M18 13L12 19L6.00002 13", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ l("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M12 5L12 18.5", vectorEffect: "non-scaling-stroke" })
] }), LN = X(IN), ON = (e, t) => /* @__PURE__ */ N("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: [
  /* @__PURE__ */ l("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M11 18L5.00002 12L11 6.00002", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ l("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M19 12L5.50002 12", vectorEffect: "non-scaling-stroke" })
] }), am = X(ON), FN = (e, t) => /* @__PURE__ */ N("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: [
  /* @__PURE__ */ l("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M13 6L19 12L13 18", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ l("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M5 12H18.5", vectorEffect: "non-scaling-stroke" })
] }), sm = X(FN), VN = (e, t) => /* @__PURE__ */ N("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: [
  /* @__PURE__ */ l("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M6 11L12 5.00002L18 11", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ l("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M12 19L12 5.50002", vectorEffect: "non-scaling-stroke" })
] }), BN = X(VN), WN = (e, t) => /* @__PURE__ */ N("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: [
  /* @__PURE__ */ l("path", { stroke: "currentColor", strokeLinecap: "round", d: "M9.76367 18C10.313 18.6137 11.1113 19 11.9998 19C12.8883 19 13.6866 18.6137 14.2359 18", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ l("path", { stroke: "currentColor", d: "M12 4C9.23858 4 7 6.23858 7 9V9.72607C7 9.90146 6.93033 10.0697 6.8063 10.1937L6.03225 10.9678C5.39962 11.6004 5.17871 12.5361 5.46164 13.3849C5.78314 14.3494 6.68577 15 7.70246 15H16.2975C17.3142 15 18.2169 14.3494 18.5384 13.3849C18.8213 12.5361 18.6004 11.6004 17.9678 10.9678L17.1937 10.1937C17.0697 10.0697 17 9.90146 17 9.72607V9C17 6.23858 14.7614 4 12 4Z", vectorEffect: "non-scaling-stroke" })
] }), $N = X(WN), jN = (e, t) => /* @__PURE__ */ N("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: [
  /* @__PURE__ */ l("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M15 3V5M15 7V5M15 5H9M15 5H16C17.6569 5 19 6.34315 19 8V10V16C19 17.6569 17.6569 19 16 19H8C6.34315 19 5 17.6569 5 16V10V8C5 6.34315 6.34315 5 8 5H9M9 5V3M9 5V7", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ l("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M5 10H19", vectorEffect: "non-scaling-stroke" })
] }), UN = X(jN), HN = (e, t) => /* @__PURE__ */ l("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: /* @__PURE__ */ l("path", { fill: "currentColor", fillRule: "evenodd", d: "M20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12ZM16.52 9.39C16.7354 9.10281 16.6772 8.69539 16.39 8.48C16.1028 8.26461 15.6954 8.32281 15.48 8.61L11.4297 14.0104L8.95963 11.5404C8.70578 11.2865 8.29423 11.2865 8.04039 11.5404C7.78655 11.7942 7.78655 12.2058 8.04039 12.4596L11.0404 15.4596C11.1736 15.5929 11.3581 15.6617 11.5461 15.6484C11.734 15.635 11.9069 15.5407 12.02 15.39L16.52 9.39Z", clipRule: "evenodd", vectorEffect: "non-scaling-stroke" }) }), lm = X(HN), zN = (e, t) => /* @__PURE__ */ N("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: [
  /* @__PURE__ */ l("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M18 10L12 16", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ l("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M6 10L12 16", vectorEffect: "non-scaling-stroke" })
] }), qr = X(zN), GN = (e, t) => /* @__PURE__ */ N("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: [
  /* @__PURE__ */ l("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M9 6L15 12", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ l("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M9 18L15 12", vectorEffect: "non-scaling-stroke" })
] }), Zr = X(GN), KN = (e, t) => /* @__PURE__ */ N("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: [
  /* @__PURE__ */ l("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M18 14L12 8", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ l("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M6 14L12 8", vectorEffect: "non-scaling-stroke" })
] }), cm = X(KN), YN = (e, t) => /* @__PURE__ */ N("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: [
  /* @__PURE__ */ l("path", { stroke: "currentColor", d: "M18.6499 6.83752C18.6499 8.04565 17.6705 9.02502 16.4624 9.02502L14.2749 9.0246V6.83752C14.2749 5.6294 15.2543 4.65002 16.4624 4.65002C17.6705 4.65002 18.6499 5.6294 18.6499 6.83752Z", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ l("path", { stroke: "currentColor", d: "M9.0249 16.463C9.0249 17.6711 8.04553 18.6505 6.8374 18.6505C5.62928 18.6505 4.6499 17.6711 4.6499 16.463C4.6499 15.2548 5.62928 14.2755 6.8374 14.2755L9.0249 14.275V16.463Z", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ l("path", { stroke: "currentColor", d: "M18.6499 16.4625C18.6499 17.6706 17.6705 18.65 16.4624 18.65C15.2543 18.65 14.2749 17.6706 14.2749 16.4625V14.275H16.4624C17.6705 14.275 18.6499 15.2544 18.6499 16.4625Z", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ l("path", { stroke: "currentColor", d: "M9.0249 6.83771V9.02521H6.8374C5.62928 9.02521 4.6499 8.04583 4.6499 6.83771C4.6499 5.62958 5.62928 4.65021 6.8374 4.65021C8.04553 4.65021 9.0249 5.62958 9.0249 6.83771Z", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ l("path", { stroke: "currentColor", d: "M14.2749 9.02502H9.0249V14.275H14.2749V9.02502Z", vectorEffect: "non-scaling-stroke" })
] }), XN = X(YN), qN = (e, t) => /* @__PURE__ */ N("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: [
  /* @__PURE__ */ l("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M16.9497 7.05026L12 12L7.05025 16.9498", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ l("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M12 12L7.05025 7.05026L16.9497 16.9498", vectorEffect: "non-scaling-stroke" })
] }), ZN = X(qN), QN = (e, t) => /* @__PURE__ */ l("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: /* @__PURE__ */ l("circle", { cx: 12, cy: 12, r: 8, stroke: "currentColor", strokeDasharray: "2 2", vectorEffect: "non-scaling-stroke" }) }), JN = X(QN), eM = (e, t) => /* @__PURE__ */ N("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: [
  /* @__PURE__ */ l("circle", { cx: 12, cy: 12, r: 1.5, fill: "currentColor", transform: "rotate(90 12 12)", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ l("circle", { cx: 12, cy: 6.5, r: 1.5, fill: "currentColor", transform: "rotate(90 12 6.5)", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ l("circle", { cx: 12, cy: 17.5, r: 1.5, fill: "currentColor", transform: "rotate(90 12 17.5)", vectorEffect: "non-scaling-stroke" })
] }), tM = X(eM), nM = (e, t) => /* @__PURE__ */ N("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: [
  /* @__PURE__ */ l("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M19.5919 7.66492C18.318 10.297 15.5536 12.6649 11.9999 12.6649C8.44623 12.6649 5.68183 10.297 4.40796 7.66492", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ l("path", { stroke: "currentColor", strokeLinecap: "round", d: "M10.0083 13.0159L8.89773 16.3351", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ l("path", { stroke: "currentColor", strokeLinecap: "round", d: "M14.0576 13.0159L15.1682 16.3351", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ l("path", { stroke: "currentColor", strokeLinecap: "round", d: "M17.5232 10.543L20 13.0159", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ l("path", { stroke: "currentColor", strokeLinecap: "round", d: "M6.47681 10.543L4.00002 13.0159", vectorEffect: "non-scaling-stroke" })
] }), rM = X(nM), oM = (e, t) => /* @__PURE__ */ N("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: [
  /* @__PURE__ */ l("path", { stroke: "currentColor", strokeLinejoin: "round", d: "M20 12C19 9 16 6 12 6C8 6 5 9 4 12C5 15 8 18 12 18C16 18 19 15 20 12Z", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ l("circle", { cx: 12, cy: 12, r: 2.35, stroke: "currentColor", vectorEffect: "non-scaling-stroke" })
] }), iM = X(oM), aM = (e, t) => /* @__PURE__ */ N("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: [
  /* @__PURE__ */ l("circle", { cx: 12, cy: 12, r: 8, stroke: "currentColor", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ l("path", { fill: "currentColor", d: "M11.9999 18C15.3136 18 17.9999 15.3137 17.9999 12C17.9999 8.68629 15.3136 6 11.9999 6V18Z", vectorEffect: "non-scaling-stroke" })
] }), sM = X(aM), lM = (e, t) => /* @__PURE__ */ N("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: [
  /* @__PURE__ */ l("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M12 12V15", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ l("circle", { cx: 12, cy: 12, r: 8, stroke: "currentColor", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ l("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M12 9V9.1", vectorEffect: "non-scaling-stroke" })
] }), cM = X(lM), uM = (e, t) => /* @__PURE__ */ l("svg", { viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg", ref: t, ...e, children: /* @__PURE__ */ l("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M16.6666 10C16.6666 13.6819 13.6819 16.6667 9.99998 16.6667C6.31808 16.6667 3.33331 13.6819 3.33331 10C3.33331 6.3181 6.31808 3.33333 9.99998 3.33333C13.6819 3.33333 16.6666 6.3181 16.6666 10ZM9.29169 7.375C9.29169 6.9838 9.60882 6.66667 10 6.66667C10.3912 6.66667 10.7084 6.9838 10.7084 7.375C10.7084 7.7662 10.3912 8.08333 10 8.08333C9.60882 8.08333 9.29169 7.7662 9.29169 7.375ZM10 8.93333C10.359 8.93333 10.65 9.22435 10.65 9.58333L10.65 12.5C10.65 12.859 10.359 13.15 10 13.15C9.64101 13.15 9.35 12.859 9.35 12.5V9.58333C9.35 9.22435 9.64101 8.93333 10 8.93333Z", fill: "currentColor" }) }), um = X(uM), dM = (e, t) => /* @__PURE__ */ N("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: [
  /* @__PURE__ */ l("path", { stroke: "currentColor", strokeLinecap: "round", d: "M9 20H10.4C13.7603 20 15.4405 20 16.7239 19.346C17.8529 18.7708 18.7708 17.8529 19.346 16.7239C20 15.4405 20 13.7603 20 10.4V9", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ l("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M8 5H14C15.6569 5 17 6.34315 17 8V14C17 15.6569 15.6569 17 14 17H8C6.34315 17 5 15.6569 5 14V8C5 6.34315 6.34315 5 8 5Z", vectorEffect: "non-scaling-stroke" })
] }), fM = X(dM), hM = (e, t) => /* @__PURE__ */ N("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: [
  /* @__PURE__ */ l("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M4.99989 7H18.9999", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ l("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M5 12H19", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ l("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M4.99989 17H18.9999", vectorEffect: "non-scaling-stroke" })
] }), mM = X(hM), pM = (e, t) => /* @__PURE__ */ N("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: [
  /* @__PURE__ */ l("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M9 9C9 7 10.5 6 12 6C13.5 6 15 7.5 15 9C15 12 12 11.5 12 14", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ l("path", { stroke: "currentColor", strokeLinecap: "round", d: "M12 17V17.1", vectorEffect: "non-scaling-stroke" })
] }), gM = X(pM), vM = (e, t) => /* @__PURE__ */ N("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: [
  /* @__PURE__ */ l("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M19 12C19 15.866 15.866 19 12 19C8.13401 19 5 15.866 5 12C5 8.13401 8.13401 5 12 5", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ l("path", { stroke: "currentColor", strokeLinecap: "round", d: "M10 10V11", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ l("path", { stroke: "currentColor", strokeLinecap: "round", d: "M14 10V11", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ l("path", { stroke: "currentColor", strokeLinecap: "round", d: "M9.5 14V14C10.9616 15.1693 13.0384 15.1693 14.5 14V14", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ l("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M18 3V6M18 9V6M18 6H15H21", vectorEffect: "non-scaling-stroke" })
] }), yM = X(vM), bM = (e, t) => /* @__PURE__ */ N("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: [
  /* @__PURE__ */ l("path", { stroke: "currentColor", strokeLinecap: "round", d: "M16 16L19 19", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ l("rect", { width: 14, height: 14, x: 4, y: 4, stroke: "currentColor", rx: 7, vectorEffect: "non-scaling-stroke" })
] }), wM = X(bM), xM = (e, t) => /* @__PURE__ */ l("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: /* @__PURE__ */ l("path", { fill: "currentColor", fillRule: "evenodd", d: "M5.39903 19C3.87406 19 2.91012 17.3618 3.65071 16.0287L10.2517 4.14697C11.0137 2.77535 12.9863 2.77535 13.7483 4.14697L20.3493 16.0287C21.0899 17.3618 20.1259 19 18.601 19H5.39903ZM12 7.5C11.4345 7.5 10.9888 7.98166 11.0325 8.54549L11.3353 12.4456C11.3623 12.7927 11.6518 13.0607 12 13.0607C12.3482 13.0607 12.6377 12.7927 12.6647 12.4456L12.9675 8.54549C13.0112 7.98166 12.5655 7.5 12 7.5ZM12 16.4869C12.5523 16.4869 13 16.0391 13 15.4869C13 14.9346 12.5523 14.4869 12 14.4869C11.4477 14.4869 11 14.9346 11 15.4869C11 16.0391 11.4477 16.4869 12 16.4869Z", clipRule: "evenodd", vectorEffect: "non-scaling-stroke" }) }), dm = X(xM), CM = /^(-?)([0-9]+)?(?:([\.,])([0-9]+)?)?$/;
function zu(e, { maxDecimals: t }) {
  if (!e || e === "-")
    return {
      formattedValue: e ?? "",
      value: null
    };
  const n = e.match(CM);
  if (!n) return null;
  let [r, o, i, a, s] = n;
  t && ((s == null ? void 0 : s.length) ?? 0) > t ? s = s == null ? void 0 : s.slice(0, t) : t === 0 && (s = ""), i = (i == null ? void 0 : i.replace(/^0+(\d)/, (d, f) => f)) ?? "";
  const c = `${o}${i}${t !== 0 ? `${a ?? ""}${s ?? ""}` : ""}`, u = parseFloat(c.replace(",", "."));
  return {
    formattedValue: c,
    value: Number.isNaN(u) ? null : u
  };
}
const go = (e, t, n) => new Intl.NumberFormat(t, {
  maximumFractionDigits: n,
  useGrouping: !1
}).format(e), B5 = X(
  function({ locale: t, value: n, maxDecimals: r, step: o, min: i, max: a, onChange: s, ...c }, u) {
    const [d, f] = ke(
      () => n != null ? go(n, t, r) : ""
    ), h = (v) => {
      const y = zu(v, { maxDecimals: r });
      if (!y) return;
      const { formattedValue: w, value: b } = y;
      f(w), s == null || s(b);
    }, g = (v) => () => {
      if (!o) return;
      if (n == null)
        return h(go(o ?? i ?? 0, t, r));
      const y = v === "increase" ? n + o : n - o;
      i != null && y < i || a != null && y > a || h(go(y, t, r));
    }, p = () => o ? /* @__PURE__ */ N(
      "div",
      {
        className: "absolute right-2 top-0.5 hidden h-full flex-col group-focus-within:flex group-hover:flex",
        onClick: (v) => v.preventDefault(),
        children: [
          /* @__PURE__ */ l(
            "div",
            {
              onClick: g("increase"),
              className: "h-4 cursor-pointer",
              role: "button",
              children: /* @__PURE__ */ l(be, { size: "sm", icon: cm })
            }
          ),
          /* @__PURE__ */ l(
            "div",
            {
              onClick: g("decrease"),
              className: "h-4 cursor-pointer",
              role: "button",
              children: /* @__PURE__ */ l(be, { size: "sm", icon: qr })
            }
          )
        ]
      }
    ) : null;
    return Fe(() => {
      const v = zu(d, { maxDecimals: r });
      n === void 0 || n == (v == null ? void 0 : v.value) || f(n ? go(n, t, r) : "");
    }, [d, r, n, t]), /* @__PURE__ */ N("div", { className: "group relative", children: [
      /* @__PURE__ */ l(
        om,
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
      /* @__PURE__ */ l(p, {})
    ] });
  }
), SM = Ie(
  "flex shrink-0 items-center justify-center rounded-full",
  {
    variants: {
      type: {
        neutral: "bg-transparent text-f1-icon",
        highlight: "text-f1-special-highlight",
        positive: "bg-f1-background-positive-bold text-f1-foreground-inverse",
        critical: "bg-f1-background-critical-bold text-f1-foreground-inverse",
        warning: "bg-f1-background-warning-bold text-f1-foreground-inverse"
      },
      size: {
        sm: "h-3 w-3",
        md: "h-5 w-5",
        lg: "h-6 w-6"
      }
    },
    defaultVariants: {
      type: "neutral",
      size: "md"
    }
  }
), NM = {
  sm: "xs",
  md: "sm",
  lg: "md"
}, MM = ({ type: e, size: t = "md", icon: n }) => /* @__PURE__ */ l("div", { className: SM({ type: e, size: t }), children: /* @__PURE__ */ l(be, { icon: n, size: NM[t] }) });
var al = "Avatar", [PM, W5] = Ot(al), [TM, fm] = PM(al), hm = m.forwardRef(
  (e, t) => {
    const { __scopeAvatar: n, ...r } = e, [o, i] = m.useState("idle");
    return /* @__PURE__ */ l(
      TM,
      {
        scope: n,
        imageLoadingStatus: o,
        onImageLoadingStatusChange: i,
        children: /* @__PURE__ */ l(fe.span, { ...r, ref: t })
      }
    );
  }
);
hm.displayName = al;
var mm = "AvatarImage", pm = m.forwardRef(
  (e, t) => {
    const { __scopeAvatar: n, src: r, onLoadingStatusChange: o = () => {
    }, ...i } = e, a = fm(mm, n), s = kM(r), c = Oe((u) => {
      o(u), a.onImageLoadingStatusChange(u);
    });
    return $e(() => {
      s !== "idle" && c(s);
    }, [s, c]), s === "loaded" ? /* @__PURE__ */ l(fe.img, { ...i, ref: t, src: r }) : null;
  }
);
pm.displayName = mm;
var gm = "AvatarFallback", vm = m.forwardRef(
  (e, t) => {
    const { __scopeAvatar: n, delayMs: r, ...o } = e, i = fm(gm, n), [a, s] = m.useState(r === void 0);
    return m.useEffect(() => {
      if (r !== void 0) {
        const c = window.setTimeout(() => s(!0), r);
        return () => window.clearTimeout(c);
      }
    }, [r]), a && i.imageLoadingStatus !== "loaded" ? /* @__PURE__ */ l(fe.span, { ...o, ref: t }) : null;
  }
);
vm.displayName = gm;
function kM(e) {
  const [t, n] = m.useState("idle");
  return $e(() => {
    if (!e) {
      n("error");
      return;
    }
    let r = !0;
    const o = new window.Image(), i = (a) => () => {
      r && n(a);
    };
    return n("loading"), o.onload = i("loaded"), o.onerror = i("error"), o.src = e, () => {
      r = !1;
    };
  }, [e]), t;
}
var ym = hm, bm = pm, wm = vm;
const vo = [
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
], EM = Ie(
  "relative flex shrink-0 items-center justify-center overflow-hidden text-center font-semibold ring-1 ring-inset ring-f1-border-secondary",
  {
    variants: {
      size: {
        xsmall: "size-5 rounded-xs text-sm",
        small: "size-6 rounded-sm text-sm",
        medium: "size-8 rounded",
        large: "size-14 rounded-xl text-xl",
        xlarge: "size-18 rounded-[20px] text-2xl"
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
), xm = m.forwardRef(({ size: e, type: t, color: n, className: r, ...o }, i) => /* @__PURE__ */ l(
  ym,
  {
    ref: i,
    className: E(EM({ size: e, type: t, color: n, className: r })),
    ...o
  }
));
xm.displayName = ym.displayName;
const Cm = m.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l(
  bm,
  {
    ref: n,
    className: E("aspect-square h-full w-full object-cover", e),
    ...t,
    asChild: !0,
    children: /* @__PURE__ */ l(o0, {})
  }
));
Cm.displayName = bm.displayName;
const Sm = m.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l(
  wm,
  {
    ref: n,
    className: E(
      "flex h-full w-full items-center justify-center text-f1-foreground-inverse/90",
      e
    ),
    ...t
  }
));
Sm.displayName = wm.displayName;
function AM(e, t) {
  const n = Array.isArray(e) ? e : [e];
  return t === "xsmall" || t === "small" ? (n[0][0] ?? "").toUpperCase() : Array.isArray(e) ? n.slice(0, 2).map((o) => o[0]).join("").toUpperCase() : e.slice(0, 2).toUpperCase();
}
function Nm(e) {
  let t = 0;
  for (let r = 0; r < e.length; r++)
    t = e.charCodeAt(r) + ((t << 5) - t), t = t & t;
  const n = (t % vo.length + vo.length) % vo.length;
  return vo[n];
}
const Mm = {
  base: {
    xlarge: "path('M72 0H0V72H52.202C49.6089 69.459 48 65.9174 48 62C48 54.268 54.268 48 62 48C65.9174 48 69.459 49.6089 72 52.202V0ZM72 71.798C71.9333 71.866 71.866 71.9333 71.798 72H72V71.798Z')",
    large: "path('M56 0H0V56H39.0556C37.1554 53.877 36 51.0734 36 48C36 41.3726 41.3726 36 48 36C51.0734 36 53.877 37.1554 56 39.0556V0Z')",
    medium: "path('M32 0H0V32H22.2547C21.4638 30.8662 21 29.4872 21 28C21 24.134 24.134 21 28 21C29.4872 21 30.8662 21.4638 32 22.2547V0Z')",
    small: "path('M24 0H0V24H14.2547C13.4638 22.8662 13 21.4872 13 20C13 16.134 16.134 13 20 13C21.4872 13 22.8662 13.4638 24 14.2547V0Z')",
    xsmall: "path('M20 0H0V20H10.2547C9.46381 18.8662 9 17.4872 9 16C9 12.134 12.134 9 16 9C17.4872 9 18.8662 9.46381 20 10.2547V0Z')"
  },
  rounded: {
    xlarge: "path('M69.1842 49.9814C70.9975 45.6828 72 40.9585 72 36C72 16.1177 55.8823 0 36 0C16.1177 0 0 16.1177 0 36C0 55.8823 16.1177 72 36 72C40.9585 72 45.6828 70.9975 49.9814 69.1842C48.7232 67.0839 48 64.6264 48 62C48 54.268 54.268 48 62 48C64.6264 48 67.0839 48.7232 69.1842 49.9814Z')",
    large: "path('M54.2534 37.7562C55.3828 34.7182 56 31.4312 56 28C56 12.536 43.464 0 28 0C12.536 0 0 12.536 0 28C0 43.464 12.536 56 28 56C31.4312 56 34.7182 55.3828 37.7562 54.2534C36.6421 52.4324 36 50.2912 36 48C36 41.3726 41.3726 36 48 36C50.2912 36 52.4324 36.6421 54.2534 37.7562Z')",
    medium: "path('M30.9702 21.6596C31.6358 19.9001 32 17.9926 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32C17.9926 32 19.9001 31.6358 21.6596 30.9702C21.2365 30.0686 21 29.0619 21 28C21 24.134 24.134 21 28 21C29.0619 21 30.0686 21.2365 30.9702 21.6596Z')",
    small: "path('M23.8119 14.128C23.9355 13.4373 24 12.7262 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24C12.7262 24 13.4373 23.9355 14.128 23.8119C13.4145 22.7151 13 21.406 13 20C13 16.134 16.134 13 20 13C21.406 13 22.7151 13.4145 23.8119 14.128Z')",
    xsmall: "path('M19.9969 10.2525C19.999 10.1686 20 10.0844 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20C10.0844 20 10.1686 19.999 10.2525 19.9969C9.46297 18.8636 9 17.4859 9 16C9 12.134 12.134 9 16 9C17.4859 9 18.8636 9.46297 19.9969 10.2525Z')"
  },
  get: (e = "base", t = "medium") => Mm[e][t]
}, DM = (e) => e === "xlarge" ? "lg" : e === "large" ? "md" : "sm", Ni = X(
  ({
    src: e,
    name: t,
    size: n,
    type: r = "base",
    color: o = "random",
    "aria-label": i,
    "aria-labelledby": a,
    badge: s
  }, c) => {
    const u = AM(t, n), d = o === "random" ? Nm(Array.isArray(t) ? t.join("") : t) : o, f = !!(i || a);
    return /* @__PURE__ */ N("div", { className: "relative inline-flex", children: [
      /* @__PURE__ */ l(
        "div",
        {
          className: "h-fit w-fit",
          style: s ? { clipPath: Mm.get(r, n) } : void 0,
          children: /* @__PURE__ */ N(
            xm,
            {
              size: n,
              type: r,
              color: d,
              ref: c,
              role: "img",
              "aria-hidden": !f,
              "aria-label": i,
              "aria-labelledby": a,
              className: e ? "bg-f1-background dark:bg-f1-background-inverse-secondary" : "",
              children: [
                /* @__PURE__ */ l(Cm, { src: e, alt: u }),
                /* @__PURE__ */ l(Sm, { children: u })
              ]
            }
          )
        }
      ),
      s && /* @__PURE__ */ l("div", { className: "absolute -bottom-0.5 -right-0.5", children: /* @__PURE__ */ l(
        MM,
        {
          type: s.type,
          icon: s.icon,
          size: DM(n)
        }
      ) })
    ] });
  }
);
Ni.displayName = "BaseAvatar";
const Mi = ({
  name: e,
  src: t,
  size: n,
  "aria-label": r,
  "aria-labelledby": o,
  badge: i
}) => /* @__PURE__ */ l(
  Ni,
  {
    type: "base",
    name: e,
    src: t,
    size: n,
    color: "viridian",
    "aria-label": r,
    "aria-labelledby": o,
    badge: i
  }
);
Mi.displayName = "CompanyAvatar";
const Qr = ({
  firstName: e,
  lastName: t,
  src: n,
  size: r,
  "aria-label": o,
  "aria-labelledby": i,
  badge: a
}) => /* @__PURE__ */ l(
  Ni,
  {
    type: "rounded",
    name: [e, t],
    src: n,
    size: r,
    color: "random",
    "aria-label": o,
    "aria-labelledby": i,
    badge: a
  }
);
Qr.displayName = "PersonAvatar";
const sl = ({
  name: e,
  src: t,
  size: n,
  "aria-label": r,
  "aria-labelledby": o,
  badge: i
}) => /* @__PURE__ */ l(
  Ni,
  {
    type: "base",
    name: e,
    src: t,
    size: n,
    color: "random",
    "aria-label": r,
    "aria-labelledby": o,
    badge: i
  }
);
sl.displayName = "TeamAvatar";
function ll(e, t = "xsmall") {
  switch (e.type) {
    case "person":
      return /* @__PURE__ */ l(
        Qr,
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
      return /* @__PURE__ */ l(
        sl,
        {
          name: e.name,
          src: e.src,
          size: t,
          "aria-label": e["aria-label"],
          "aria-labelledby": e["aria-labelledby"]
        }
      );
    case "company":
      return /* @__PURE__ */ l(
        Mi,
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
function Jr(e) {
  const t = e + "CollectionProvider", [n, r] = Ot(t), [o, i] = n(
    t,
    { collectionRef: { current: null }, itemMap: /* @__PURE__ */ new Map() }
  ), a = (g) => {
    const { scope: p, children: v } = g, y = ee.useRef(null), w = ee.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ l(o, { scope: p, itemMap: w, collectionRef: y, children: v });
  };
  a.displayName = t;
  const s = e + "CollectionSlot", c = ee.forwardRef(
    (g, p) => {
      const { scope: v, children: y } = g, w = i(s, v), b = ve(p, w.collectionRef);
      return /* @__PURE__ */ l(Cn, { ref: b, children: y });
    }
  );
  c.displayName = s;
  const u = e + "CollectionItemSlot", d = "data-radix-collection-item", f = ee.forwardRef(
    (g, p) => {
      const { scope: v, children: y, ...w } = g, b = ee.useRef(null), x = ve(p, b), P = i(u, v);
      return ee.useEffect(() => (P.itemMap.set(b, { ref: b, ...w }), () => void P.itemMap.delete(b))), /* @__PURE__ */ l(Cn, { [d]: "", ref: x, children: y });
    }
  );
  f.displayName = u;
  function h(g) {
    const p = i(e + "CollectionConsumer", g);
    return ee.useCallback(() => {
      const y = p.collectionRef.current;
      if (!y) return [];
      const w = Array.from(y.querySelectorAll(`[${d}]`));
      return Array.from(p.itemMap.values()).sort(
        (P, T) => w.indexOf(P.ref.current) - w.indexOf(T.ref.current)
      );
    }, [p.collectionRef, p.itemMap]);
  }
  return [
    { Provider: a, Slot: c, ItemSlot: f },
    h,
    r
  ];
}
var va = 0;
function cl() {
  m.useEffect(() => {
    const e = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", e[0] ?? Gu()), document.body.insertAdjacentElement("beforeend", e[1] ?? Gu()), va++, () => {
      va === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((t) => t.remove()), va--;
    };
  }, []);
}
function Gu() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.cssText = "outline: none; opacity: 0; position: fixed; pointer-events: none", e;
}
var ya = "focusScope.autoFocusOnMount", ba = "focusScope.autoFocusOnUnmount", Ku = { bubbles: !1, cancelable: !0 }, _M = "FocusScope", Pi = m.forwardRef((e, t) => {
  const {
    loop: n = !1,
    trapped: r = !1,
    onMountAutoFocus: o,
    onUnmountAutoFocus: i,
    ...a
  } = e, [s, c] = m.useState(null), u = Oe(o), d = Oe(i), f = m.useRef(null), h = ve(t, (v) => c(v)), g = m.useRef({
    paused: !1,
    pause() {
      this.paused = !0;
    },
    resume() {
      this.paused = !1;
    }
  }).current;
  m.useEffect(() => {
    if (r) {
      let v = function(x) {
        if (g.paused || !s) return;
        const P = x.target;
        s.contains(P) ? f.current = P : on(f.current, { select: !0 });
      }, y = function(x) {
        if (g.paused || !s) return;
        const P = x.relatedTarget;
        P !== null && (s.contains(P) || on(f.current, { select: !0 }));
      }, w = function(x) {
        if (document.activeElement === document.body)
          for (const T of x)
            T.removedNodes.length > 0 && on(s);
      };
      document.addEventListener("focusin", v), document.addEventListener("focusout", y);
      const b = new MutationObserver(w);
      return s && b.observe(s, { childList: !0, subtree: !0 }), () => {
        document.removeEventListener("focusin", v), document.removeEventListener("focusout", y), b.disconnect();
      };
    }
  }, [r, s, g.paused]), m.useEffect(() => {
    if (s) {
      Xu.add(g);
      const v = document.activeElement;
      if (!s.contains(v)) {
        const w = new CustomEvent(ya, Ku);
        s.addEventListener(ya, u), s.dispatchEvent(w), w.defaultPrevented || (RM(VM(Pm(s)), { select: !0 }), document.activeElement === v && on(s));
      }
      return () => {
        s.removeEventListener(ya, u), setTimeout(() => {
          const w = new CustomEvent(ba, Ku);
          s.addEventListener(ba, d), s.dispatchEvent(w), w.defaultPrevented || on(v ?? document.body, { select: !0 }), s.removeEventListener(ba, d), Xu.remove(g);
        }, 0);
      };
    }
  }, [s, u, d, g]);
  const p = m.useCallback(
    (v) => {
      if (!n && !r || g.paused) return;
      const y = v.key === "Tab" && !v.altKey && !v.ctrlKey && !v.metaKey, w = document.activeElement;
      if (y && w) {
        const b = v.currentTarget, [x, P] = IM(b);
        x && P ? !v.shiftKey && w === P ? (v.preventDefault(), n && on(x, { select: !0 })) : v.shiftKey && w === x && (v.preventDefault(), n && on(P, { select: !0 })) : w === b && v.preventDefault();
      }
    },
    [n, r, g.paused]
  );
  return /* @__PURE__ */ l(fe.div, { tabIndex: -1, ...a, ref: h, onKeyDown: p });
});
Pi.displayName = _M;
function RM(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const r of e)
    if (on(r, { select: t }), document.activeElement !== n) return;
}
function IM(e) {
  const t = Pm(e), n = Yu(t, e), r = Yu(t.reverse(), e);
  return [n, r];
}
function Pm(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => {
      const o = r.tagName === "INPUT" && r.type === "hidden";
      return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function Yu(e, t) {
  for (const n of e)
    if (!LM(n, { upTo: t })) return n;
}
function LM(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
function OM(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function on(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== n && OM(e) && t && e.select();
  }
}
var Xu = FM();
function FM() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && (n == null || n.pause()), e = qu(e, t), e.unshift(t);
    },
    remove(t) {
      var n;
      e = qu(e, t), (n = e[0]) == null || n.resume();
    }
  };
}
function qu(e, t) {
  const n = [...e], r = n.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
function VM(e) {
  return e.filter((t) => t.tagName !== "A");
}
function Tm(e) {
  const t = m.useRef({ value: e, previous: e });
  return m.useMemo(() => (t.current.value !== e && (t.current.previous = t.current.value, t.current.value = e), t.current.previous), [e]);
}
var BM = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, Rn = /* @__PURE__ */ new WeakMap(), yo = /* @__PURE__ */ new WeakMap(), bo = {}, wa = 0, km = function(e) {
  return e && (e.host || km(e.parentNode));
}, WM = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var r = km(n);
    return r && e.contains(r) ? r : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return !!n;
  });
}, $M = function(e, t, n, r) {
  var o = WM(t, Array.isArray(e) ? e : [e]);
  bo[n] || (bo[n] = /* @__PURE__ */ new WeakMap());
  var i = bo[n], a = [], s = /* @__PURE__ */ new Set(), c = new Set(o), u = function(f) {
    !f || s.has(f) || (s.add(f), u(f.parentNode));
  };
  o.forEach(u);
  var d = function(f) {
    !f || c.has(f) || Array.prototype.forEach.call(f.children, function(h) {
      if (s.has(h))
        d(h);
      else
        try {
          var g = h.getAttribute(r), p = g !== null && g !== "false", v = (Rn.get(h) || 0) + 1, y = (i.get(h) || 0) + 1;
          Rn.set(h, v), i.set(h, y), a.push(h), v === 1 && p && yo.set(h, !0), y === 1 && h.setAttribute(n, "true"), p || h.setAttribute(r, "true");
        } catch (w) {
          console.error("aria-hidden: cannot operate on ", h, w);
        }
    });
  };
  return d(t), s.clear(), wa++, function() {
    a.forEach(function(f) {
      var h = Rn.get(f) - 1, g = i.get(f) - 1;
      Rn.set(f, h), i.set(f, g), h || (yo.has(f) || f.removeAttribute(r), yo.delete(f)), g || f.removeAttribute(n);
    }), wa--, wa || (Rn = /* @__PURE__ */ new WeakMap(), Rn = /* @__PURE__ */ new WeakMap(), yo = /* @__PURE__ */ new WeakMap(), bo = {});
  };
}, ul = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var r = Array.from(Array.isArray(e) ? e : [e]), o = BM(e);
  return o ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live]"))), $M(r, o, n, "aria-hidden")) : function() {
    return null;
  };
}, kt = function() {
  return kt = Object.assign || function(t) {
    for (var n, r = 1, o = arguments.length; r < o; r++) {
      n = arguments[r];
      for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
    }
    return t;
  }, kt.apply(this, arguments);
};
function Em(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
}
function jM(e, t, n) {
  if (n || arguments.length === 2) for (var r = 0, o = t.length, i; r < o; r++)
    (i || !(r in t)) && (i || (i = Array.prototype.slice.call(t, 0, r)), i[r] = t[r]);
  return e.concat(i || Array.prototype.slice.call(t));
}
var ko = "right-scroll-bar-position", Eo = "width-before-scroll-bar", UM = "with-scroll-bars-hidden", HM = "--removed-body-scroll-bar-size";
function xa(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function zM(e, t) {
  var n = ke(function() {
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
var GM = typeof window < "u" ? m.useLayoutEffect : m.useEffect, Zu = /* @__PURE__ */ new WeakMap();
function KM(e, t) {
  var n = zM(null, function(r) {
    return e.forEach(function(o) {
      return xa(o, r);
    });
  });
  return GM(function() {
    var r = Zu.get(n);
    if (r) {
      var o = new Set(r), i = new Set(e), a = n.current;
      o.forEach(function(s) {
        i.has(s) || xa(s, null);
      }), i.forEach(function(s) {
        o.has(s) || xa(s, a);
      });
    }
    Zu.set(n, e);
  }, [e]), n;
}
function YM(e) {
  return e;
}
function XM(e, t) {
  t === void 0 && (t = YM);
  var n = [], r = !1, o = {
    read: function() {
      if (r)
        throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
      return n.length ? n[n.length - 1] : e;
    },
    useMedium: function(i) {
      var a = t(i, r);
      return n.push(a), function() {
        n = n.filter(function(s) {
          return s !== a;
        });
      };
    },
    assignSyncMedium: function(i) {
      for (r = !0; n.length; ) {
        var a = n;
        n = [], a.forEach(i);
      }
      n = {
        push: function(s) {
          return i(s);
        },
        filter: function() {
          return n;
        }
      };
    },
    assignMedium: function(i) {
      r = !0;
      var a = [];
      if (n.length) {
        var s = n;
        n = [], s.forEach(i), a = n;
      }
      var c = function() {
        var d = a;
        a = [], d.forEach(i);
      }, u = function() {
        return Promise.resolve().then(c);
      };
      u(), n = {
        push: function(d) {
          a.push(d), u();
        },
        filter: function(d) {
          return a = a.filter(d), n;
        }
      };
    }
  };
  return o;
}
function qM(e) {
  e === void 0 && (e = {});
  var t = XM(null);
  return t.options = kt({ async: !0, ssr: !1 }, e), t;
}
var Am = function(e) {
  var t = e.sideCar, n = Em(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var r = t.read();
  if (!r)
    throw new Error("Sidecar medium not found");
  return m.createElement(r, kt({}, n));
};
Am.isSideCarExport = !0;
function ZM(e, t) {
  return e.useMedium(t), Am;
}
var Dm = qM(), Ca = function() {
}, Ti = m.forwardRef(function(e, t) {
  var n = m.useRef(null), r = m.useState({
    onScrollCapture: Ca,
    onWheelCapture: Ca,
    onTouchMoveCapture: Ca
  }), o = r[0], i = r[1], a = e.forwardProps, s = e.children, c = e.className, u = e.removeScrollBar, d = e.enabled, f = e.shards, h = e.sideCar, g = e.noIsolation, p = e.inert, v = e.allowPinchZoom, y = e.as, w = y === void 0 ? "div" : y, b = e.gapMode, x = Em(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), P = h, T = KM([n, t]), R = kt(kt({}, x), o);
  return m.createElement(
    m.Fragment,
    null,
    d && m.createElement(P, { sideCar: Dm, removeScrollBar: u, shards: f, noIsolation: g, inert: p, setCallbacks: i, allowPinchZoom: !!v, lockRef: n, gapMode: b }),
    a ? m.cloneElement(m.Children.only(s), kt(kt({}, R), { ref: T })) : m.createElement(w, kt({}, R, { className: c, ref: T }), s)
  );
});
Ti.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
Ti.classNames = {
  fullWidth: Eo,
  zeroRight: ko
};
var QM = function() {
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function JM() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = QM();
  return t && e.setAttribute("nonce", t), e;
}
function eP(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function tP(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var nP = function() {
  var e = 0, t = null;
  return {
    add: function(n) {
      e == 0 && (t = JM()) && (eP(t, n), tP(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, rP = function() {
  var e = nP();
  return function(t, n) {
    m.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && n]);
  };
}, _m = function() {
  var e = rP(), t = function(n) {
    var r = n.styles, o = n.dynamic;
    return e(r, o), null;
  };
  return t;
}, oP = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, Sa = function(e) {
  return parseInt(e || "", 10) || 0;
}, iP = function(e) {
  var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], r = t[e === "padding" ? "paddingTop" : "marginTop"], o = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [Sa(n), Sa(r), Sa(o)];
}, aP = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return oP;
  var t = iP(e), n = document.documentElement.clientWidth, r = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, r - n + t[2] - t[0])
  };
}, sP = _m(), zn = "data-scroll-locked", lP = function(e, t, n, r) {
  var o = e.left, i = e.top, a = e.right, s = e.gap;
  return n === void 0 && (n = "margin"), `
  .`.concat(UM, ` {
   overflow: hidden `).concat(r, `;
   padding-right: `).concat(s, "px ").concat(r, `;
  }
  body[`).concat(zn, `] {
    overflow: hidden `).concat(r, `;
    overscroll-behavior: contain;
    `).concat([
    t && "position: relative ".concat(r, ";"),
    n === "margin" && `
    padding-left: `.concat(o, `px;
    padding-top: `).concat(i, `px;
    padding-right: `).concat(a, `px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(s, "px ").concat(r, `;
    `),
    n === "padding" && "padding-right: ".concat(s, "px ").concat(r, ";")
  ].filter(Boolean).join(""), `
  }
  
  .`).concat(ko, ` {
    right: `).concat(s, "px ").concat(r, `;
  }
  
  .`).concat(Eo, ` {
    margin-right: `).concat(s, "px ").concat(r, `;
  }
  
  .`).concat(ko, " .").concat(ko, ` {
    right: 0 `).concat(r, `;
  }
  
  .`).concat(Eo, " .").concat(Eo, ` {
    margin-right: 0 `).concat(r, `;
  }
  
  body[`).concat(zn, `] {
    `).concat(HM, ": ").concat(s, `px;
  }
`);
}, Qu = function() {
  var e = parseInt(document.body.getAttribute(zn) || "0", 10);
  return isFinite(e) ? e : 0;
}, cP = function() {
  m.useEffect(function() {
    return document.body.setAttribute(zn, (Qu() + 1).toString()), function() {
      var e = Qu() - 1;
      e <= 0 ? document.body.removeAttribute(zn) : document.body.setAttribute(zn, e.toString());
    };
  }, []);
}, uP = function(e) {
  var t = e.noRelative, n = e.noImportant, r = e.gapMode, o = r === void 0 ? "margin" : r;
  cP();
  var i = m.useMemo(function() {
    return aP(o);
  }, [o]);
  return m.createElement(sP, { styles: lP(i, !t, o, n ? "" : "!important") });
}, Za = !1;
if (typeof window < "u")
  try {
    var wo = Object.defineProperty({}, "passive", {
      get: function() {
        return Za = !0, !0;
      }
    });
    window.addEventListener("test", wo, wo), window.removeEventListener("test", wo, wo);
  } catch {
    Za = !1;
  }
var In = Za ? { passive: !1 } : !1, dP = function(e) {
  return e.tagName === "TEXTAREA";
}, Rm = function(e, t) {
  var n = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    n[t] !== "hidden" && // contains scroll inside self
    !(n.overflowY === n.overflowX && !dP(e) && n[t] === "visible")
  );
}, fP = function(e) {
  return Rm(e, "overflowY");
}, hP = function(e) {
  return Rm(e, "overflowX");
}, Ju = function(e, t) {
  var n = t.ownerDocument, r = t;
  do {
    typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host);
    var o = Im(e, r);
    if (o) {
      var i = Lm(e, r), a = i[1], s = i[2];
      if (a > s)
        return !0;
    }
    r = r.parentNode;
  } while (r && r !== n.body);
  return !1;
}, mP = function(e) {
  var t = e.scrollTop, n = e.scrollHeight, r = e.clientHeight;
  return [
    t,
    n,
    r
  ];
}, pP = function(e) {
  var t = e.scrollLeft, n = e.scrollWidth, r = e.clientWidth;
  return [
    t,
    n,
    r
  ];
}, Im = function(e, t) {
  return e === "v" ? fP(t) : hP(t);
}, Lm = function(e, t) {
  return e === "v" ? mP(t) : pP(t);
}, gP = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, vP = function(e, t, n, r, o) {
  var i = gP(e, window.getComputedStyle(t).direction), a = i * r, s = n.target, c = t.contains(s), u = !1, d = a > 0, f = 0, h = 0;
  do {
    var g = Lm(e, s), p = g[0], v = g[1], y = g[2], w = v - y - i * p;
    (p || w) && Im(e, s) && (f += w, h += p), s instanceof ShadowRoot ? s = s.host : s = s.parentNode;
  } while (
    // portaled content
    !c && s !== document.body || // self content
    c && (t.contains(s) || t === s)
  );
  return (d && (Math.abs(f) < 1 || !o) || !d && (Math.abs(h) < 1 || !o)) && (u = !0), u;
}, xo = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, ed = function(e) {
  return [e.deltaX, e.deltaY];
}, td = function(e) {
  return e && "current" in e ? e.current : e;
}, yP = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, bP = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, wP = 0, Ln = [];
function xP(e) {
  var t = m.useRef([]), n = m.useRef([0, 0]), r = m.useRef(), o = m.useState(wP++)[0], i = m.useState(_m)[0], a = m.useRef(e);
  m.useEffect(function() {
    a.current = e;
  }, [e]), m.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(o));
      var v = jM([e.lockRef.current], (e.shards || []).map(td), !0).filter(Boolean);
      return v.forEach(function(y) {
        return y.classList.add("allow-interactivity-".concat(o));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(o)), v.forEach(function(y) {
          return y.classList.remove("allow-interactivity-".concat(o));
        });
      };
    }
  }, [e.inert, e.lockRef.current, e.shards]);
  var s = m.useCallback(function(v, y) {
    if ("touches" in v && v.touches.length === 2)
      return !a.current.allowPinchZoom;
    var w = xo(v), b = n.current, x = "deltaX" in v ? v.deltaX : b[0] - w[0], P = "deltaY" in v ? v.deltaY : b[1] - w[1], T, R = v.target, F = Math.abs(x) > Math.abs(P) ? "h" : "v";
    if ("touches" in v && F === "h" && R.type === "range")
      return !1;
    var D = Ju(F, R);
    if (!D)
      return !0;
    if (D ? T = F : (T = F === "v" ? "h" : "v", D = Ju(F, R)), !D)
      return !1;
    if (!r.current && "changedTouches" in v && (x || P) && (r.current = T), !T)
      return !0;
    var _ = r.current || T;
    return vP(_, y, v, _ === "h" ? x : P, !0);
  }, []), c = m.useCallback(function(v) {
    var y = v;
    if (!(!Ln.length || Ln[Ln.length - 1] !== i)) {
      var w = "deltaY" in y ? ed(y) : xo(y), b = t.current.filter(function(T) {
        return T.name === y.type && (T.target === y.target || y.target === T.shadowParent) && yP(T.delta, w);
      })[0];
      if (b && b.should) {
        y.cancelable && y.preventDefault();
        return;
      }
      if (!b) {
        var x = (a.current.shards || []).map(td).filter(Boolean).filter(function(T) {
          return T.contains(y.target);
        }), P = x.length > 0 ? s(y, x[0]) : !a.current.noIsolation;
        P && y.cancelable && y.preventDefault();
      }
    }
  }, []), u = m.useCallback(function(v, y, w, b) {
    var x = { name: v, delta: y, target: w, should: b, shadowParent: CP(w) };
    t.current.push(x), setTimeout(function() {
      t.current = t.current.filter(function(P) {
        return P !== x;
      });
    }, 1);
  }, []), d = m.useCallback(function(v) {
    n.current = xo(v), r.current = void 0;
  }, []), f = m.useCallback(function(v) {
    u(v.type, ed(v), v.target, s(v, e.lockRef.current));
  }, []), h = m.useCallback(function(v) {
    u(v.type, xo(v), v.target, s(v, e.lockRef.current));
  }, []);
  m.useEffect(function() {
    return Ln.push(i), e.setCallbacks({
      onScrollCapture: f,
      onWheelCapture: f,
      onTouchMoveCapture: h
    }), document.addEventListener("wheel", c, In), document.addEventListener("touchmove", c, In), document.addEventListener("touchstart", d, In), function() {
      Ln = Ln.filter(function(v) {
        return v !== i;
      }), document.removeEventListener("wheel", c, In), document.removeEventListener("touchmove", c, In), document.removeEventListener("touchstart", d, In);
    };
  }, []);
  var g = e.removeScrollBar, p = e.inert;
  return m.createElement(
    m.Fragment,
    null,
    p ? m.createElement(i, { styles: bP(o) }) : null,
    g ? m.createElement(uP, { gapMode: e.gapMode }) : null
  );
}
function CP(e) {
  for (var t = null; e !== null; )
    e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
  return t;
}
const SP = ZM(Dm, xP);
var ki = m.forwardRef(function(e, t) {
  return m.createElement(Ti, kt({}, e, { ref: t, sideCar: SP }));
});
ki.classNames = Ti.classNames;
var NP = [" ", "Enter", "ArrowUp", "ArrowDown"], MP = [" ", "Enter"], eo = "Select", [Ei, Ai, PP] = Jr(eo), [rr, $5] = Ot(eo, [
  PP,
  oi
]), Di = oi(), [TP, fn] = rr(eo), [kP, EP] = rr(eo), Om = (e) => {
  const {
    __scopeSelect: t,
    children: n,
    open: r,
    defaultOpen: o,
    onOpenChange: i,
    value: a,
    defaultValue: s,
    onValueChange: c,
    dir: u,
    name: d,
    autoComplete: f,
    disabled: h,
    required: g
  } = e, p = Di(t), [v, y] = m.useState(null), [w, b] = m.useState(null), [x, P] = m.useState(!1), T = nr(u), [R = !1, F] = Ct({
    prop: r,
    defaultProp: o,
    onChange: i
  }), [D, _] = Ct({
    prop: a,
    defaultProp: s,
    onChange: c
  }), j = m.useRef(null), te = v ? !!v.closest("form") : !0, [G, $] = m.useState(/* @__PURE__ */ new Set()), I = Array.from(G).map((L) => L.props.value).join(";");
  return /* @__PURE__ */ l(Bd, { ...p, children: /* @__PURE__ */ N(
    TP,
    {
      required: g,
      scope: t,
      trigger: v,
      onTriggerChange: y,
      valueNode: w,
      onValueNodeChange: b,
      valueNodeHasChildren: x,
      onValueNodeHasChildrenChange: P,
      contentId: ut(),
      value: D,
      onValueChange: _,
      open: R,
      onOpenChange: F,
      dir: T,
      triggerPointerDownPosRef: j,
      disabled: h,
      children: [
        /* @__PURE__ */ l(Ei.Provider, { scope: t, children: /* @__PURE__ */ l(
          kP,
          {
            scope: e.__scopeSelect,
            onNativeOptionAdd: m.useCallback((L) => {
              $((H) => new Set(H).add(L));
            }, []),
            onNativeOptionRemove: m.useCallback((L) => {
              $((H) => {
                const V = new Set(H);
                return V.delete(L), V;
              });
            }, []),
            children: n
          }
        ) }),
        te ? /* @__PURE__ */ N(
          ap,
          {
            "aria-hidden": !0,
            required: g,
            tabIndex: -1,
            name: d,
            autoComplete: f,
            value: D,
            onChange: (L) => _(L.target.value),
            disabled: h,
            children: [
              D === void 0 ? /* @__PURE__ */ l("option", { value: "" }) : null,
              Array.from(G)
            ]
          },
          I
        ) : null
      ]
    }
  ) });
};
Om.displayName = eo;
var Fm = "SelectTrigger", Vm = m.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, disabled: r = !1, ...o } = e, i = Di(n), a = fn(Fm, n), s = a.disabled || r, c = ve(t, a.onTriggerChange), u = Ai(n), [d, f, h] = sp((p) => {
      const v = u().filter((b) => !b.disabled), y = v.find((b) => b.value === a.value), w = lp(v, p, y);
      w !== void 0 && a.onValueChange(w.value);
    }), g = () => {
      s || (a.onOpenChange(!0), h());
    };
    return /* @__PURE__ */ l(Od, { asChild: !0, ...i, children: /* @__PURE__ */ l(
      fe.button,
      {
        type: "button",
        role: "combobox",
        "aria-controls": a.contentId,
        "aria-expanded": a.open,
        "aria-required": a.required,
        "aria-autocomplete": "none",
        dir: a.dir,
        "data-state": a.open ? "open" : "closed",
        disabled: s,
        "data-disabled": s ? "" : void 0,
        "data-placeholder": ip(a.value) ? "" : void 0,
        ...o,
        ref: c,
        onClick: ne(o.onClick, (p) => {
          p.currentTarget.focus();
        }),
        onPointerDown: ne(o.onPointerDown, (p) => {
          const v = p.target;
          v.hasPointerCapture(p.pointerId) && v.releasePointerCapture(p.pointerId), p.button === 0 && p.ctrlKey === !1 && (g(), a.triggerPointerDownPosRef.current = {
            x: Math.round(p.pageX),
            y: Math.round(p.pageY)
          }, p.preventDefault());
        }),
        onKeyDown: ne(o.onKeyDown, (p) => {
          const v = d.current !== "";
          !(p.ctrlKey || p.altKey || p.metaKey) && p.key.length === 1 && f(p.key), !(v && p.key === " ") && NP.includes(p.key) && (g(), p.preventDefault());
        })
      }
    ) });
  }
);
Vm.displayName = Fm;
var Bm = "SelectValue", Wm = m.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, className: r, style: o, children: i, placeholder: a = "", ...s } = e, c = fn(Bm, n), { onValueNodeHasChildrenChange: u } = c, d = i !== void 0, f = ve(t, c.onValueNodeChange);
    return $e(() => {
      u(d);
    }, [u, d]), /* @__PURE__ */ l(
      fe.span,
      {
        ...s,
        ref: f,
        style: { pointerEvents: "none" },
        children: ip(c.value) ? /* @__PURE__ */ l(xe, { children: a }) : i
      }
    );
  }
);
Wm.displayName = Bm;
var AP = "SelectIcon", DP = m.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, children: r, ...o } = e;
    return /* @__PURE__ */ l(fe.span, { "aria-hidden": !0, ...o, ref: t, children: r || "▼" });
  }
);
DP.displayName = AP;
var _P = "SelectPortal", $m = (e) => /* @__PURE__ */ l(ci, { asChild: !0, ...e });
$m.displayName = _P;
var Mn = "SelectContent", jm = m.forwardRef(
  (e, t) => {
    const n = fn(Mn, e.__scopeSelect), [r, o] = m.useState();
    if ($e(() => {
      o(new DocumentFragment());
    }, []), !n.open) {
      const i = r;
      return i ? Yd.createPortal(
        /* @__PURE__ */ l(Um, { scope: e.__scopeSelect, children: /* @__PURE__ */ l(Ei.Slot, { scope: e.__scopeSelect, children: /* @__PURE__ */ l("div", { children: e.children }) }) }),
        i
      ) : null;
    }
    return /* @__PURE__ */ l(Hm, { ...e, ref: t });
  }
);
jm.displayName = Mn;
var jt = 10, [Um, hn] = rr(Mn), RP = "SelectContentImpl", Hm = m.forwardRef(
  (e, t) => {
    const {
      __scopeSelect: n,
      position: r = "item-aligned",
      onCloseAutoFocus: o,
      onEscapeKeyDown: i,
      onPointerDownOutside: a,
      //
      // PopperContent props
      side: s,
      sideOffset: c,
      align: u,
      alignOffset: d,
      arrowPadding: f,
      collisionBoundary: h,
      collisionPadding: g,
      sticky: p,
      hideWhenDetached: v,
      avoidCollisions: y,
      //
      ...w
    } = e, b = fn(Mn, n), [x, P] = m.useState(null), [T, R] = m.useState(null), F = ve(t, (O) => P(O)), [D, _] = m.useState(null), [j, te] = m.useState(
      null
    ), G = Ai(n), [$, I] = m.useState(!1), L = m.useRef(!1);
    m.useEffect(() => {
      if (x) return ul(x);
    }, [x]), cl();
    const H = m.useCallback(
      (O) => {
        const [Y, ...se] = G().map((B) => B.ref.current), [ie] = se.slice(-1), Z = document.activeElement;
        for (const B of O)
          if (B === Z || (B == null || B.scrollIntoView({ block: "nearest" }), B === Y && T && (T.scrollTop = 0), B === ie && T && (T.scrollTop = T.scrollHeight), B == null || B.focus(), document.activeElement !== Z)) return;
      },
      [G, T]
    ), V = m.useCallback(
      () => H([D, x]),
      [H, D, x]
    );
    m.useEffect(() => {
      $ && V();
    }, [$, V]);
    const { onOpenChange: W, triggerPointerDownPosRef: z } = b;
    m.useEffect(() => {
      if (x) {
        let O = { x: 0, y: 0 };
        const Y = (ie) => {
          var Z, B;
          O = {
            x: Math.abs(Math.round(ie.pageX) - (((Z = z.current) == null ? void 0 : Z.x) ?? 0)),
            y: Math.abs(Math.round(ie.pageY) - (((B = z.current) == null ? void 0 : B.y) ?? 0))
          };
        }, se = (ie) => {
          O.x <= 10 && O.y <= 10 ? ie.preventDefault() : x.contains(ie.target) || W(!1), document.removeEventListener("pointermove", Y), z.current = null;
        };
        return z.current !== null && (document.addEventListener("pointermove", Y), document.addEventListener("pointerup", se, { capture: !0, once: !0 })), () => {
          document.removeEventListener("pointermove", Y), document.removeEventListener("pointerup", se, { capture: !0 });
        };
      }
    }, [x, W, z]), m.useEffect(() => {
      const O = () => W(!1);
      return window.addEventListener("blur", O), window.addEventListener("resize", O), () => {
        window.removeEventListener("blur", O), window.removeEventListener("resize", O);
      };
    }, [W]);
    const [M, S] = sp((O) => {
      const Y = G().filter((Z) => !Z.disabled), se = Y.find((Z) => Z.ref.current === document.activeElement), ie = lp(Y, O, se);
      ie && setTimeout(() => ie.ref.current.focus());
    }), q = m.useCallback(
      (O, Y, se) => {
        const ie = !L.current && !se;
        (b.value !== void 0 && b.value === Y || ie) && (_(O), ie && (L.current = !0));
      },
      [b.value]
    ), re = m.useCallback(() => x == null ? void 0 : x.focus(), [x]), ae = m.useCallback(
      (O, Y, se) => {
        const ie = !L.current && !se;
        (b.value !== void 0 && b.value === Y || ie) && te(O);
      },
      [b.value]
    ), de = r === "popper" ? Qa : zm, ce = de === Qa ? {
      side: s,
      sideOffset: c,
      align: u,
      alignOffset: d,
      arrowPadding: f,
      collisionBoundary: h,
      collisionPadding: g,
      sticky: p,
      hideWhenDetached: v,
      avoidCollisions: y
    } : {};
    return /* @__PURE__ */ l(
      Um,
      {
        scope: n,
        content: x,
        viewport: T,
        onViewportChange: R,
        itemRefCallback: q,
        selectedItem: D,
        onItemLeave: re,
        itemTextRefCallback: ae,
        focusSelectedItem: V,
        selectedItemText: j,
        position: r,
        isPositioned: $,
        searchRef: M,
        children: /* @__PURE__ */ l(ki, { as: Cn, allowPinchZoom: !0, children: /* @__PURE__ */ l(
          Pi,
          {
            asChild: !0,
            trapped: b.open,
            onMountAutoFocus: (O) => {
              O.preventDefault();
            },
            onUnmountAutoFocus: ne(o, (O) => {
              var Y;
              (Y = b.trigger) == null || Y.focus({ preventScroll: !0 }), O.preventDefault();
            }),
            children: /* @__PURE__ */ l(
              ii,
              {
                asChild: !0,
                disableOutsidePointerEvents: !0,
                onEscapeKeyDown: i,
                onPointerDownOutside: a,
                onFocusOutside: (O) => O.preventDefault(),
                onDismiss: () => b.onOpenChange(!1),
                children: /* @__PURE__ */ l(
                  de,
                  {
                    role: "listbox",
                    id: b.contentId,
                    "data-state": b.open ? "open" : "closed",
                    dir: b.dir,
                    onContextMenu: (O) => O.preventDefault(),
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
                    onKeyDown: ne(w.onKeyDown, (O) => {
                      const Y = O.ctrlKey || O.altKey || O.metaKey;
                      if (O.key === "Tab" && O.preventDefault(), !Y && O.key.length === 1 && S(O.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes(O.key)) {
                        let ie = G().filter((Z) => !Z.disabled).map((Z) => Z.ref.current);
                        if (["ArrowUp", "End"].includes(O.key) && (ie = ie.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(O.key)) {
                          const Z = O.target, B = ie.indexOf(Z);
                          ie = ie.slice(B + 1);
                        }
                        setTimeout(() => H(ie)), O.preventDefault();
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
Hm.displayName = RP;
var IP = "SelectItemAlignedPosition", zm = m.forwardRef((e, t) => {
  const { __scopeSelect: n, onPlaced: r, ...o } = e, i = fn(Mn, n), a = hn(Mn, n), [s, c] = m.useState(null), [u, d] = m.useState(null), f = ve(t, (F) => d(F)), h = Ai(n), g = m.useRef(!1), p = m.useRef(!0), { viewport: v, selectedItem: y, selectedItemText: w, focusSelectedItem: b } = a, x = m.useCallback(() => {
    if (i.trigger && i.valueNode && s && u && v && y && w) {
      const F = i.trigger.getBoundingClientRect(), D = u.getBoundingClientRect(), _ = i.valueNode.getBoundingClientRect(), j = w.getBoundingClientRect();
      if (i.dir !== "rtl") {
        const Z = j.left - D.left, B = _.left - Z, ue = F.left - B, oe = F.width + ue, pe = Math.max(oe, D.width), Se = window.innerWidth - jt, Me = Ka(B, [jt, Se - pe]);
        s.style.minWidth = oe + "px", s.style.left = Me + "px";
      } else {
        const Z = D.right - j.right, B = window.innerWidth - _.right - Z, ue = window.innerWidth - F.right - B, oe = F.width + ue, pe = Math.max(oe, D.width), Se = window.innerWidth - jt, Me = Ka(B, [jt, Se - pe]);
        s.style.minWidth = oe + "px", s.style.right = Me + "px";
      }
      const te = h(), G = window.innerHeight - jt * 2, $ = v.scrollHeight, I = window.getComputedStyle(u), L = parseInt(I.borderTopWidth, 10), H = parseInt(I.paddingTop, 10), V = parseInt(I.borderBottomWidth, 10), W = parseInt(I.paddingBottom, 10), z = L + H + $ + W + V, M = Math.min(y.offsetHeight * 5, z), S = window.getComputedStyle(v), q = parseInt(S.paddingTop, 10), re = parseInt(S.paddingBottom, 10), ae = F.top + F.height / 2 - jt, de = G - ae, ce = y.offsetHeight / 2, O = y.offsetTop + ce, Y = L + H + O, se = z - Y;
      if (Y <= ae) {
        const Z = y === te[te.length - 1].ref.current;
        s.style.bottom = "0px";
        const B = u.clientHeight - v.offsetTop - v.offsetHeight, ue = Math.max(
          de,
          ce + // viewport might have padding bottom, include it to avoid a scrollable viewport
          (Z ? re : 0) + B + V
        ), oe = Y + ue;
        s.style.height = oe + "px";
      } else {
        const Z = y === te[0].ref.current;
        s.style.top = "0px";
        const ue = Math.max(
          ae,
          L + v.offsetTop + // viewport might have padding top, include it to avoid a scrollable viewport
          (Z ? q : 0) + ce
        ) + se;
        s.style.height = ue + "px", v.scrollTop = Y - ae + v.offsetTop;
      }
      s.style.margin = `${jt}px 0`, s.style.minHeight = M + "px", s.style.maxHeight = G + "px", r == null || r(), requestAnimationFrame(() => g.current = !0);
    }
  }, [
    h,
    i.trigger,
    i.valueNode,
    s,
    u,
    v,
    y,
    w,
    i.dir,
    r
  ]);
  $e(() => x(), [x]);
  const [P, T] = m.useState();
  $e(() => {
    u && T(window.getComputedStyle(u).zIndex);
  }, [u]);
  const R = m.useCallback(
    (F) => {
      F && p.current === !0 && (x(), b == null || b(), p.current = !1);
    },
    [x, b]
  );
  return /* @__PURE__ */ l(
    OP,
    {
      scope: n,
      contentWrapper: s,
      shouldExpandOnScrollRef: g,
      onScrollButtonChange: R,
      children: /* @__PURE__ */ l(
        "div",
        {
          ref: c,
          style: {
            display: "flex",
            flexDirection: "column",
            position: "fixed",
            zIndex: P
          },
          children: /* @__PURE__ */ l(
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
zm.displayName = IP;
var LP = "SelectPopperPosition", Qa = m.forwardRef((e, t) => {
  const {
    __scopeSelect: n,
    align: r = "start",
    collisionPadding: o = jt,
    ...i
  } = e, a = Di(n);
  return /* @__PURE__ */ l(
    Fd,
    {
      ...a,
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
Qa.displayName = LP;
var [OP, dl] = rr(Mn, {}), Ja = "SelectViewport", Gm = m.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, nonce: r, ...o } = e, i = hn(Ja, n), a = dl(Ja, n), s = ve(t, i.onViewportChange), c = m.useRef(0);
    return /* @__PURE__ */ N(xe, { children: [
      /* @__PURE__ */ l(
        "style",
        {
          dangerouslySetInnerHTML: {
            __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"
          },
          nonce: r
        }
      ),
      /* @__PURE__ */ l(Ei.Slot, { scope: n, children: /* @__PURE__ */ l(
        fe.div,
        {
          "data-radix-select-viewport": "",
          role: "presentation",
          ...o,
          ref: s,
          style: {
            // we use position: 'relative' here on the `viewport` so that when we call
            // `selectedItem.offsetTop` in calculations, the offset is relative to the viewport
            // (independent of the scrollUpButton).
            position: "relative",
            flex: 1,
            overflow: "auto",
            ...o.style
          },
          onScroll: ne(o.onScroll, (u) => {
            const d = u.currentTarget, { contentWrapper: f, shouldExpandOnScrollRef: h } = a;
            if (h != null && h.current && f) {
              const g = Math.abs(c.current - d.scrollTop);
              if (g > 0) {
                const p = window.innerHeight - jt * 2, v = parseFloat(f.style.minHeight), y = parseFloat(f.style.height), w = Math.max(v, y);
                if (w < p) {
                  const b = w + g, x = Math.min(p, b), P = b - x;
                  f.style.height = x + "px", f.style.bottom === "0px" && (d.scrollTop = P > 0 ? P : 0, f.style.justifyContent = "flex-end");
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
Gm.displayName = Ja;
var Km = "SelectGroup", [FP, VP] = rr(Km), BP = m.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e, o = ut();
    return /* @__PURE__ */ l(FP, { scope: n, id: o, children: /* @__PURE__ */ l(fe.div, { role: "group", "aria-labelledby": o, ...r, ref: t }) });
  }
);
BP.displayName = Km;
var Ym = "SelectLabel", Xm = m.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e, o = VP(Ym, n);
    return /* @__PURE__ */ l(fe.div, { id: o.id, ...r, ref: t });
  }
);
Xm.displayName = Ym;
var zo = "SelectItem", [WP, qm] = rr(zo), Zm = m.forwardRef(
  (e, t) => {
    const {
      __scopeSelect: n,
      value: r,
      disabled: o = !1,
      textValue: i,
      ...a
    } = e, s = fn(zo, n), c = hn(zo, n), u = s.value === r, [d, f] = m.useState(i ?? ""), [h, g] = m.useState(!1), p = ve(
      t,
      (w) => {
        var b;
        return (b = c.itemRefCallback) == null ? void 0 : b.call(c, w, r, o);
      }
    ), v = ut(), y = () => {
      o || (s.onValueChange(r), s.onOpenChange(!1));
    };
    if (r === "")
      throw new Error(
        "A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder."
      );
    return /* @__PURE__ */ l(
      WP,
      {
        scope: n,
        value: r,
        disabled: o,
        textId: v,
        isSelected: u,
        onItemTextChange: m.useCallback((w) => {
          f((b) => b || ((w == null ? void 0 : w.textContent) ?? "").trim());
        }, []),
        children: /* @__PURE__ */ l(
          Ei.ItemSlot,
          {
            scope: n,
            value: r,
            disabled: o,
            textValue: d,
            children: /* @__PURE__ */ l(
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
                ...a,
                ref: p,
                onFocus: ne(a.onFocus, () => g(!0)),
                onBlur: ne(a.onBlur, () => g(!1)),
                onPointerUp: ne(a.onPointerUp, y),
                onPointerMove: ne(a.onPointerMove, (w) => {
                  var b;
                  o ? (b = c.onItemLeave) == null || b.call(c) : w.currentTarget.focus({ preventScroll: !0 });
                }),
                onPointerLeave: ne(a.onPointerLeave, (w) => {
                  var b;
                  w.currentTarget === document.activeElement && ((b = c.onItemLeave) == null || b.call(c));
                }),
                onKeyDown: ne(a.onKeyDown, (w) => {
                  var x;
                  ((x = c.searchRef) == null ? void 0 : x.current) !== "" && w.key === " " || (MP.includes(w.key) && y(), w.key === " " && w.preventDefault());
                })
              }
            )
          }
        )
      }
    );
  }
);
Zm.displayName = zo;
var fr = "SelectItemText", Qm = m.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, className: r, style: o, ...i } = e, a = fn(fr, n), s = hn(fr, n), c = qm(fr, n), u = EP(fr, n), [d, f] = m.useState(null), h = ve(
      t,
      (w) => f(w),
      c.onItemTextChange,
      (w) => {
        var b;
        return (b = s.itemTextRefCallback) == null ? void 0 : b.call(s, w, c.value, c.disabled);
      }
    ), g = d == null ? void 0 : d.textContent, p = m.useMemo(
      () => /* @__PURE__ */ l("option", { value: c.value, disabled: c.disabled, children: g }, c.value),
      [c.disabled, c.value, g]
    ), { onNativeOptionAdd: v, onNativeOptionRemove: y } = u;
    return $e(() => (v(p), () => y(p)), [v, y, p]), /* @__PURE__ */ N(xe, { children: [
      /* @__PURE__ */ l(fe.span, { id: c.textId, ...i, ref: h }),
      c.isSelected && a.valueNode && !a.valueNodeHasChildren ? Yd.createPortal(i.children, a.valueNode) : null
    ] });
  }
);
Qm.displayName = fr;
var Jm = "SelectItemIndicator", ep = m.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e;
    return qm(Jm, n).isSelected ? /* @__PURE__ */ l(fe.span, { "aria-hidden": !0, ...r, ref: t }) : null;
  }
);
ep.displayName = Jm;
var es = "SelectScrollUpButton", tp = m.forwardRef((e, t) => {
  const n = hn(es, e.__scopeSelect), r = dl(es, e.__scopeSelect), [o, i] = m.useState(!1), a = ve(t, r.onScrollButtonChange);
  return $e(() => {
    if (n.viewport && n.isPositioned) {
      let s = function() {
        const u = c.scrollTop > 0;
        i(u);
      };
      const c = n.viewport;
      return s(), c.addEventListener("scroll", s), () => c.removeEventListener("scroll", s);
    }
  }, [n.viewport, n.isPositioned]), o ? /* @__PURE__ */ l(
    rp,
    {
      ...e,
      ref: a,
      onAutoScroll: () => {
        const { viewport: s, selectedItem: c } = n;
        s && c && (s.scrollTop = s.scrollTop - c.offsetHeight);
      }
    }
  ) : null;
});
tp.displayName = es;
var ts = "SelectScrollDownButton", np = m.forwardRef((e, t) => {
  const n = hn(ts, e.__scopeSelect), r = dl(ts, e.__scopeSelect), [o, i] = m.useState(!1), a = ve(t, r.onScrollButtonChange);
  return $e(() => {
    if (n.viewport && n.isPositioned) {
      let s = function() {
        const u = c.scrollHeight - c.clientHeight, d = Math.ceil(c.scrollTop) < u;
        i(d);
      };
      const c = n.viewport;
      return s(), c.addEventListener("scroll", s), () => c.removeEventListener("scroll", s);
    }
  }, [n.viewport, n.isPositioned]), o ? /* @__PURE__ */ l(
    rp,
    {
      ...e,
      ref: a,
      onAutoScroll: () => {
        const { viewport: s, selectedItem: c } = n;
        s && c && (s.scrollTop = s.scrollTop + c.offsetHeight);
      }
    }
  ) : null;
});
np.displayName = ts;
var rp = m.forwardRef((e, t) => {
  const { __scopeSelect: n, onAutoScroll: r, ...o } = e, i = hn("SelectScrollButton", n), a = m.useRef(null), s = Ai(n), c = m.useCallback(() => {
    a.current !== null && (window.clearInterval(a.current), a.current = null);
  }, []);
  return m.useEffect(() => () => c(), [c]), $e(() => {
    var d;
    const u = s().find((f) => f.ref.current === document.activeElement);
    (d = u == null ? void 0 : u.ref.current) == null || d.scrollIntoView({ block: "nearest" });
  }, [s]), /* @__PURE__ */ l(
    fe.div,
    {
      "aria-hidden": !0,
      ...o,
      ref: t,
      style: { flexShrink: 0, ...o.style },
      onPointerDown: ne(o.onPointerDown, () => {
        a.current === null && (a.current = window.setInterval(r, 50));
      }),
      onPointerMove: ne(o.onPointerMove, () => {
        var u;
        (u = i.onItemLeave) == null || u.call(i), a.current === null && (a.current = window.setInterval(r, 50));
      }),
      onPointerLeave: ne(o.onPointerLeave, () => {
        c();
      })
    }
  );
}), $P = "SelectSeparator", op = m.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e;
    return /* @__PURE__ */ l(fe.div, { "aria-hidden": !0, ...r, ref: t });
  }
);
op.displayName = $P;
var ns = "SelectArrow", jP = m.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e, o = Di(n), i = fn(ns, n), a = hn(ns, n);
    return i.open && a.position === "popper" ? /* @__PURE__ */ l(Vd, { ...o, ...r, ref: t }) : null;
  }
);
jP.displayName = ns;
function ip(e) {
  return e === "" || e === void 0;
}
var ap = m.forwardRef(
  (e, t) => {
    const { value: n, ...r } = e, o = m.useRef(null), i = ve(t, o), a = Tm(n);
    return m.useEffect(() => {
      const s = o.current, c = window.HTMLSelectElement.prototype, d = Object.getOwnPropertyDescriptor(
        c,
        "value"
      ).set;
      if (a !== n && d) {
        const f = new Event("change", { bubbles: !0 });
        d.call(s, n), s.dispatchEvent(f);
      }
    }, [a, n]), /* @__PURE__ */ l(i0, { asChild: !0, children: /* @__PURE__ */ l("select", { ...r, ref: i, defaultValue: n }) });
  }
);
ap.displayName = "BubbleSelect";
function sp(e) {
  const t = Oe(e), n = m.useRef(""), r = m.useRef(0), o = m.useCallback(
    (a) => {
      const s = n.current + a;
      t(s), function c(u) {
        n.current = u, window.clearTimeout(r.current), u !== "" && (r.current = window.setTimeout(() => c(""), 1e3));
      }(s);
    },
    [t]
  ), i = m.useCallback(() => {
    n.current = "", window.clearTimeout(r.current);
  }, []);
  return m.useEffect(() => () => window.clearTimeout(r.current), []), [n, o, i];
}
function lp(e, t, n) {
  const o = t.length > 1 && Array.from(t).every((u) => u === t[0]) ? t[0] : t, i = n ? e.indexOf(n) : -1;
  let a = UP(e, Math.max(i, 0));
  o.length === 1 && (a = a.filter((u) => u !== n));
  const c = a.find(
    (u) => u.textValue.toLowerCase().startsWith(o.toLowerCase())
  );
  return c !== n ? c : void 0;
}
function UP(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
var HP = Om, cp = Vm, zP = Wm, GP = $m, up = jm, KP = Gm, dp = Xm, fp = Zm, YP = Qm, XP = ep, hp = tp, mp = np, pp = op;
const qP = HP, ZP = zP, gp = m.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ l(cp, { ref: r, className: E(e), ...n, children: t }));
gp.displayName = cp.displayName;
const vp = m.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l(
  hp,
  {
    ref: n,
    className: E(
      "flex cursor-default items-center justify-center py-1 text-f1-icon",
      e
    ),
    ...t,
    children: /* @__PURE__ */ l(be, { icon: cm, size: "sm" })
  }
));
vp.displayName = hp.displayName;
const yp = m.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l(
  mp,
  {
    ref: n,
    className: E(
      "flex cursor-default items-center justify-center py-1 text-f1-icon",
      e
    ),
    ...t,
    children: /* @__PURE__ */ l(be, { icon: qr, size: "sm" })
  }
));
yp.displayName = mp.displayName;
const bp = m.forwardRef(({ className: e, children: t, position: n = "popper", ...r }, o) => /* @__PURE__ */ l(GP, { children: /* @__PURE__ */ N(
  up,
  {
    ref: o,
    className: E(
      "relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border border-solid border-f1-border-secondary bg-f1-background text-f1-foreground shadow-md data-[state=closed]:fade-out-0 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 motion-safe:data-[state=open]:animate-in motion-safe:data-[state=closed]:animate-out motion-safe:data-[state=open]:fade-in-0 motion-safe:data-[state=closed]:zoom-out-95 motion-safe:data-[state=open]:zoom-in-95 motion-safe:data-[side=bottom]:slide-in-from-top-2",
      n === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
      e
    ),
    position: n,
    ...r,
    children: [
      /* @__PURE__ */ l(vp, {}),
      /* @__PURE__ */ l(
        KP,
        {
          className: E(
            n === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
          ),
          children: t
        }
      ),
      /* @__PURE__ */ l(yp, {})
    ]
  }
) }));
bp.displayName = up.displayName;
const QP = m.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l(
  dp,
  {
    ref: n,
    className: E("py-1.5 pl-8 pr-2 text-sm font-semibold", e),
    ...t
  }
));
QP.displayName = dp.displayName;
const wp = m.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ N(
  fp,
  {
    ref: r,
    className: E(
      "relative grid w-full cursor-default select-none grid-cols-[1fr_20px] gap-x-1.5 rounded px-3 py-2 outline-none transition-colors after:absolute after:inset-x-1 after:inset-y-0 after:h-full after:rounded after:bg-f1-background-hover after:opacity-0 after:transition-opacity after:duration-75 after:content-[''] first:pt-3 first:after:top-1 first:after:h-[calc(100%-0.25rem)] last:pb-3 last:after:bottom-1 last:after:h-[calc(100%-0.25rem)] hover:after:opacity-100 focus:after:bg-f1-background-hover focus:after:text-f1-foreground focus:after:opacity-100 data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      "data-[state=checked]:after:bg-f1-background-selected-bold/10 data-[state=checked]:after:opacity-100 hover:data-[state=checked]:after:bg-f1-background-selected-bold/10 dark:data-[state=checked]:after:bg-f1-background-selected-bold/20 dark:hover:data-[state=checked]:after:bg-f1-background-selected-bold/20",
      "focus:outline-none focus:ring-0 focus:ring-transparent",
      // Temporal fix for Gamma issue
      e
    ),
    ...n,
    children: [
      /* @__PURE__ */ l(YP, { children: t }),
      /* @__PURE__ */ l(XP, { className: "flex text-f1-icon-selected", children: /* @__PURE__ */ l(be, { icon: lm, size: "md" }) })
    ]
  }
));
wp.displayName = fp.displayName;
const xp = m.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l(
  pp,
  {
    ref: n,
    className: E("-mx-1 my-1 h-px bg-f1-border-secondary", e),
    ...t
  }
));
xp.displayName = pp.displayName;
const JP = ({ item: e }) => /* @__PURE__ */ l(wp, { value: e.value, children: /* @__PURE__ */ N("div", { className: "flex items-start gap-1.5", children: [
  e.avatar && ll(e.avatar, "xsmall"),
  e.icon && /* @__PURE__ */ l("div", { className: "text-f1-icon", children: /* @__PURE__ */ l(be, { icon: e.icon }) }),
  /* @__PURE__ */ N("div", { className: "flex flex-col", children: [
    /* @__PURE__ */ l("span", { className: "font-medium", children: e.label }),
    e.description && /* @__PURE__ */ l("div", { className: "text-f1-foreground-secondary", children: e.description })
  ] })
] }) }), eT = ({ item: e }) => /* @__PURE__ */ N("div", { className: "flex items-center gap-1.5", children: [
  e.icon && /* @__PURE__ */ l("div", { className: "h-5 shrink-0 text-f1-icon", children: /* @__PURE__ */ l(be, { icon: e.icon }) }),
  e.label
] }), tT = "flex h-10 w-full items-center justify-between rounded-md border border-solid border-f1-border bg-f1-background pl-3 pr-2 py-2.5 transition-colors placeholder:text-f1-foreground-secondary hover:border-f1-border-hover disabled:cursor-not-allowed disabled:bg-f1-background-secondary disabled:opacity-50 [&>span]:line-clamp-1", nT = X(
  function({
    placeholder: t,
    options: n,
    onChange: r,
    value: o,
    children: i,
    disabled: a,
    open: s,
    onOpenChange: c,
    ...u
  }, d) {
    const f = n.find(
      (h) => h !== "separator" && h.value === o
    );
    return /* @__PURE__ */ N(
      qP,
      {
        onValueChange: r,
        value: o,
        disabled: a,
        open: s,
        onOpenChange: c,
        ...u,
        children: [
          /* @__PURE__ */ l(gp, { ref: d, asChild: !0, children: i || /* @__PURE__ */ N(
            "button",
            {
              className: E(
                tT,
                mt("focus-visible:border-f1-border-hover")
              ),
              children: [
                /* @__PURE__ */ l(ZP, { placeholder: t, asChild: !0, children: f && /* @__PURE__ */ l(eT, { item: f }) }),
                /* @__PURE__ */ l("div", { className: "flex h-6 w-6 items-center justify-center", children: /* @__PURE__ */ l("div", { className: "h-4 w-4 rounded-2xs bg-f1-background-secondary", children: /* @__PURE__ */ l(be, { icon: qr, size: "xs" }) }) })
              ]
            }
          ) }),
          /* @__PURE__ */ l(bp, { children: n.map(
            (h, g) => h === "separator" ? /* @__PURE__ */ l(xp, {}, `separator-${g}`) : /* @__PURE__ */ l(JP, { item: h }, h.value)
          ) })
        ]
      }
    );
  }
), Cp = m.forwardRef(
  ({ className: e, ...t }, n) => /* @__PURE__ */ l(
    "textarea",
    {
      className: E(
        "ring-offset-background focus-visible:ring-ring flex min-h-[80px] w-full rounded-sm border-2 border-solid border-f1-border bg-f1-background px-3 py-2 text-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-f1-foreground-secondary/60 hover:border-f1-border-hover focus-visible:border-f1-border-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:bg-f1-background-secondary disabled:opacity-50",
        e
      ),
      ref: n,
      ...t
    }
  )
);
Cp.displayName = "Textarea";
const j5 = He(
  {
    name: "Textarea",
    type: "form"
  },
  Cp
);
var Na = "rovingFocusGroup.onEntryFocus", rT = { bubbles: !1, cancelable: !0 }, _i = "RovingFocusGroup", [rs, Sp, oT] = Jr(_i), [iT, Ri] = Ot(
  _i,
  [oT]
), [aT, sT] = iT(_i), Np = m.forwardRef(
  (e, t) => /* @__PURE__ */ l(rs.Provider, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ l(rs.Slot, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ l(lT, { ...e, ref: t }) }) })
);
Np.displayName = _i;
var lT = m.forwardRef((e, t) => {
  const {
    __scopeRovingFocusGroup: n,
    orientation: r,
    loop: o = !1,
    dir: i,
    currentTabStopId: a,
    defaultCurrentTabStopId: s,
    onCurrentTabStopIdChange: c,
    onEntryFocus: u,
    preventScrollOnEntryFocus: d = !1,
    ...f
  } = e, h = m.useRef(null), g = ve(t, h), p = nr(i), [v = null, y] = Ct({
    prop: a,
    defaultProp: s,
    onChange: c
  }), [w, b] = m.useState(!1), x = Oe(u), P = Sp(n), T = m.useRef(!1), [R, F] = m.useState(0);
  return m.useEffect(() => {
    const D = h.current;
    if (D)
      return D.addEventListener(Na, x), () => D.removeEventListener(Na, x);
  }, [x]), /* @__PURE__ */ l(
    aT,
    {
      scope: n,
      orientation: r,
      dir: p,
      loop: o,
      currentTabStopId: v,
      onItemFocus: m.useCallback(
        (D) => y(D),
        [y]
      ),
      onItemShiftTab: m.useCallback(() => b(!0), []),
      onFocusableItemAdd: m.useCallback(
        () => F((D) => D + 1),
        []
      ),
      onFocusableItemRemove: m.useCallback(
        () => F((D) => D - 1),
        []
      ),
      children: /* @__PURE__ */ l(
        fe.div,
        {
          tabIndex: w || R === 0 ? -1 : 0,
          "data-orientation": r,
          ...f,
          ref: g,
          style: { outline: "none", ...e.style },
          onMouseDown: ne(e.onMouseDown, () => {
            T.current = !0;
          }),
          onFocus: ne(e.onFocus, (D) => {
            const _ = !T.current;
            if (D.target === D.currentTarget && _ && !w) {
              const j = new CustomEvent(Na, rT);
              if (D.currentTarget.dispatchEvent(j), !j.defaultPrevented) {
                const te = P().filter((H) => H.focusable), G = te.find((H) => H.active), $ = te.find((H) => H.id === v), L = [G, $, ...te].filter(
                  Boolean
                ).map((H) => H.ref.current);
                Tp(L, d);
              }
            }
            T.current = !1;
          }),
          onBlur: ne(e.onBlur, () => b(!1))
        }
      )
    }
  );
}), Mp = "RovingFocusGroupItem", Pp = m.forwardRef(
  (e, t) => {
    const {
      __scopeRovingFocusGroup: n,
      focusable: r = !0,
      active: o = !1,
      tabStopId: i,
      ...a
    } = e, s = ut(), c = i || s, u = sT(Mp, n), d = u.currentTabStopId === c, f = Sp(n), { onFocusableItemAdd: h, onFocusableItemRemove: g } = u;
    return m.useEffect(() => {
      if (r)
        return h(), () => g();
    }, [r, h, g]), /* @__PURE__ */ l(
      rs.ItemSlot,
      {
        scope: n,
        id: c,
        focusable: r,
        active: o,
        children: /* @__PURE__ */ l(
          fe.span,
          {
            tabIndex: d ? 0 : -1,
            "data-orientation": u.orientation,
            ...a,
            ref: t,
            onMouseDown: ne(e.onMouseDown, (p) => {
              r ? u.onItemFocus(c) : p.preventDefault();
            }),
            onFocus: ne(e.onFocus, () => u.onItemFocus(c)),
            onKeyDown: ne(e.onKeyDown, (p) => {
              if (p.key === "Tab" && p.shiftKey) {
                u.onItemShiftTab();
                return;
              }
              if (p.target !== p.currentTarget) return;
              const v = dT(p, u.orientation, u.dir);
              if (v !== void 0) {
                if (p.metaKey || p.ctrlKey || p.altKey || p.shiftKey) return;
                p.preventDefault();
                let w = f().filter((b) => b.focusable).map((b) => b.ref.current);
                if (v === "last") w.reverse();
                else if (v === "prev" || v === "next") {
                  v === "prev" && w.reverse();
                  const b = w.indexOf(p.currentTarget);
                  w = u.loop ? fT(w, b + 1) : w.slice(b + 1);
                }
                setTimeout(() => Tp(w));
              }
            })
          }
        )
      }
    );
  }
);
Pp.displayName = Mp;
var cT = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function uT(e, t) {
  return t !== "rtl" ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e;
}
function dT(e, t, n) {
  const r = uT(e.key, n);
  if (!(t === "vertical" && ["ArrowLeft", "ArrowRight"].includes(r)) && !(t === "horizontal" && ["ArrowUp", "ArrowDown"].includes(r)))
    return cT[r];
}
function Tp(e, t = !1) {
  const n = document.activeElement;
  for (const r of e)
    if (r === n || (r.focus({ preventScroll: t }), document.activeElement !== n)) return;
}
function fT(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
var kp = Np, Ep = Pp, hT = "Toggle", fl = m.forwardRef((e, t) => {
  const { pressed: n, defaultPressed: r = !1, onPressedChange: o, ...i } = e, [a = !1, s] = Ct({
    prop: n,
    onChange: o,
    defaultProp: r
  });
  return /* @__PURE__ */ l(
    fe.button,
    {
      type: "button",
      "aria-pressed": a,
      "data-state": a ? "on" : "off",
      "data-disabled": e.disabled ? "" : void 0,
      ...i,
      ref: t,
      onClick: ne(e.onClick, () => {
        e.disabled || s(!a);
      })
    }
  );
});
fl.displayName = hT;
var Ap = fl, or = "ToggleGroup", [Dp, U5] = Ot(or, [
  Ri
]), _p = Ri(), hl = ee.forwardRef((e, t) => {
  const { type: n, ...r } = e;
  if (n === "single")
    return /* @__PURE__ */ l(mT, { ...r, ref: t });
  if (n === "multiple")
    return /* @__PURE__ */ l(pT, { ...r, ref: t });
  throw new Error(`Missing prop \`type\` expected on \`${or}\``);
});
hl.displayName = or;
var [Rp, Ip] = Dp(or), mT = ee.forwardRef((e, t) => {
  const {
    value: n,
    defaultValue: r,
    onValueChange: o = () => {
    },
    ...i
  } = e, [a, s] = Ct({
    prop: n,
    defaultProp: r,
    onChange: o
  });
  return /* @__PURE__ */ l(
    Rp,
    {
      scope: e.__scopeToggleGroup,
      type: "single",
      value: a ? [a] : [],
      onItemActivate: s,
      onItemDeactivate: ee.useCallback(() => s(""), [s]),
      children: /* @__PURE__ */ l(Lp, { ...i, ref: t })
    }
  );
}), pT = ee.forwardRef((e, t) => {
  const {
    value: n,
    defaultValue: r,
    onValueChange: o = () => {
    },
    ...i
  } = e, [a = [], s] = Ct({
    prop: n,
    defaultProp: r,
    onChange: o
  }), c = ee.useCallback(
    (d) => s((f = []) => [...f, d]),
    [s]
  ), u = ee.useCallback(
    (d) => s((f = []) => f.filter((h) => h !== d)),
    [s]
  );
  return /* @__PURE__ */ l(
    Rp,
    {
      scope: e.__scopeToggleGroup,
      type: "multiple",
      value: a,
      onItemActivate: c,
      onItemDeactivate: u,
      children: /* @__PURE__ */ l(Lp, { ...i, ref: t })
    }
  );
});
hl.displayName = or;
var [gT, vT] = Dp(or), Lp = ee.forwardRef(
  (e, t) => {
    const {
      __scopeToggleGroup: n,
      disabled: r = !1,
      rovingFocus: o = !0,
      orientation: i,
      dir: a,
      loop: s = !0,
      ...c
    } = e, u = _p(n), d = nr(a), f = { role: "group", dir: d, ...c };
    return /* @__PURE__ */ l(gT, { scope: n, rovingFocus: o, disabled: r, children: o ? /* @__PURE__ */ l(
      kp,
      {
        asChild: !0,
        ...u,
        orientation: i,
        dir: d,
        loop: s,
        children: /* @__PURE__ */ l(fe.div, { ...f, ref: t })
      }
    ) : /* @__PURE__ */ l(fe.div, { ...f, ref: t }) });
  }
), Go = "ToggleGroupItem", Op = ee.forwardRef(
  (e, t) => {
    const n = Ip(Go, e.__scopeToggleGroup), r = vT(Go, e.__scopeToggleGroup), o = _p(e.__scopeToggleGroup), i = n.value.includes(e.value), a = r.disabled || e.disabled, s = { ...e, pressed: i, disabled: a }, c = ee.useRef(null);
    return r.rovingFocus ? /* @__PURE__ */ l(
      Ep,
      {
        asChild: !0,
        ...o,
        focusable: !a,
        active: i,
        ref: c,
        children: /* @__PURE__ */ l(nd, { ...s, ref: t })
      }
    ) : /* @__PURE__ */ l(nd, { ...s, ref: t });
  }
);
Op.displayName = Go;
var nd = ee.forwardRef(
  (e, t) => {
    const { __scopeToggleGroup: n, value: r, ...o } = e, i = Ip(Go, n), a = { role: "radio", "aria-checked": e.pressed, "aria-pressed": void 0 }, s = i.type === "single" ? a : void 0;
    return /* @__PURE__ */ l(
      fl,
      {
        ...s,
        ...o,
        ref: t,
        onPressedChange: (c) => {
          c ? i.onItemActivate(r) : i.onItemDeactivate(r);
        }
      }
    );
  }
), Fp = hl, Vp = Op;
const Bp = Ie(
  E(
    "inline-flex items-center justify-center rounded-sm text-sm font-medium transition-colors hover:bg-f1-background-secondary hover:text-f1-foreground-secondary disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-f1-background-secondary data-[state=on]:text-f1-foreground",
    mt()
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
), yT = m.forwardRef(({ className: e, variant: t, size: n, ...r }, o) => /* @__PURE__ */ l(
  Ap,
  {
    ref: o,
    className: E(Bp({ variant: t, size: n, className: e })),
    ...r
  }
));
yT.displayName = Ap.displayName;
const Wp = m.createContext({
  size: "default",
  variant: "default"
}), $p = m.forwardRef(({ className: e, variant: t, size: n, children: r, ...o }, i) => /* @__PURE__ */ l(
  Fp,
  {
    ref: i,
    className: E("flex items-center justify-center gap-1.5", e),
    ...o,
    children: /* @__PURE__ */ l(Wp.Provider, { value: { variant: t, size: n }, children: r })
  }
));
$p.displayName = Fp.displayName;
const jp = m.forwardRef(({ className: e, children: t, variant: n, size: r, ...o }, i) => {
  const a = m.useContext(Wp);
  return /* @__PURE__ */ l(
    Vp,
    {
      ref: i,
      className: E(
        Bp({
          variant: a.variant || n,
          size: a.size || r
        }),
        e
      ),
      ...o,
      children: t
    }
  );
});
jp.displayName = Vp.displayName;
var to = (e) => e.type === "checkbox", Un = (e) => e instanceof Date, Xe = (e) => e == null;
const Up = (e) => typeof e == "object";
var Be = (e) => !Xe(e) && !Array.isArray(e) && Up(e) && !Un(e), Hp = (e) => Be(e) && e.target ? to(e.target) ? e.target.checked : e.target.value : e, bT = (e) => e.substring(0, e.search(/\.\d+(\.|$)/)) || e, zp = (e, t) => e.has(bT(t)), wT = (e) => {
  const t = e.constructor && e.constructor.prototype;
  return Be(t) && t.hasOwnProperty("isPrototypeOf");
}, ml = typeof window < "u" && typeof window.HTMLElement < "u" && typeof document < "u";
function Qe(e) {
  let t;
  const n = Array.isArray(e);
  if (e instanceof Date)
    t = new Date(e);
  else if (e instanceof Set)
    t = new Set(e);
  else if (!(ml && (e instanceof Blob || e instanceof FileList)) && (n || Be(e)))
    if (t = n ? [] : {}, !n && !wT(e))
      t = e;
    else
      for (const r in e)
        e.hasOwnProperty(r) && (t[r] = Qe(e[r]));
  else
    return e;
  return t;
}
var Ii = (e) => Array.isArray(e) ? e.filter(Boolean) : [], Re = (e) => e === void 0, J = (e, t, n) => {
  if (!t || !Be(e))
    return n;
  const r = Ii(t.split(/[,[\].]+?/)).reduce((o, i) => Xe(o) ? o : o[i], e);
  return Re(r) || r === e ? Re(e[t]) ? n : e[t] : r;
}, lt = (e) => typeof e == "boolean", pl = (e) => /^\w*$/.test(e), Gp = (e) => Ii(e.replace(/["|']|\]/g, "").split(/\.|\[/)), Ne = (e, t, n) => {
  let r = -1;
  const o = pl(t) ? [t] : Gp(t), i = o.length, a = i - 1;
  for (; ++r < i; ) {
    const s = o[r];
    let c = n;
    if (r !== a) {
      const u = e[s];
      c = Be(u) || Array.isArray(u) ? u : isNaN(+o[r + 1]) ? {} : [];
    }
    if (s === "__proto__")
      return;
    e[s] = c, e = e[s];
  }
  return e;
};
const Ko = {
  BLUR: "blur",
  FOCUS_OUT: "focusout",
  CHANGE: "change"
}, wt = {
  onBlur: "onBlur",
  onChange: "onChange",
  onSubmit: "onSubmit",
  onTouched: "onTouched",
  all: "all"
}, Wt = {
  max: "max",
  min: "min",
  maxLength: "maxLength",
  minLength: "minLength",
  pattern: "pattern",
  required: "required",
  validate: "validate"
}, Kp = ee.createContext(null), no = () => ee.useContext(Kp), xT = (e) => {
  const { children: t, ...n } = e;
  return ee.createElement(Kp.Provider, { value: n }, t);
};
var Yp = (e, t, n, r = !0) => {
  const o = {
    defaultValues: t._defaultValues
  };
  for (const i in e)
    Object.defineProperty(o, i, {
      get: () => {
        const a = i;
        return t._proxyFormState[a] !== wt.all && (t._proxyFormState[a] = !r || wt.all), n && (n[a] = !0), e[a];
      }
    });
  return o;
}, Je = (e) => Be(e) && !Object.keys(e).length, Xp = (e, t, n, r) => {
  n(e);
  const { name: o, ...i } = e;
  return Je(i) || Object.keys(i).length >= Object.keys(t).length || Object.keys(i).find((a) => t[a] === (!r || wt.all));
}, xr = (e) => Array.isArray(e) ? e : [e], qp = (e, t, n) => !e || !t || e === t || xr(e).some((r) => r && (n ? r === t : r.startsWith(t) || t.startsWith(r)));
function gl(e) {
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
function CT(e) {
  const t = no(), { control: n = t.control, disabled: r, name: o, exact: i } = e || {}, [a, s] = ee.useState(n._formState), c = ee.useRef(!0), u = ee.useRef({
    isDirty: !1,
    isLoading: !1,
    dirtyFields: !1,
    touchedFields: !1,
    validatingFields: !1,
    isValidating: !1,
    isValid: !1,
    errors: !1
  }), d = ee.useRef(o);
  return d.current = o, gl({
    disabled: r,
    next: (f) => c.current && qp(d.current, f.name, i) && Xp(f, u.current, n._updateFormState) && s({
      ...n._formState,
      ...f
    }),
    subject: n._subjects.state
  }), ee.useEffect(() => (c.current = !0, u.current.isValid && n._updateValid(!0), () => {
    c.current = !1;
  }), [n]), Yp(a, n, u.current, !1);
}
var At = (e) => typeof e == "string", Zp = (e, t, n, r, o) => At(e) ? (r && t.watch.add(e), J(n, e, o)) : Array.isArray(e) ? e.map((i) => (r && t.watch.add(i), J(n, i))) : (r && (t.watchAll = !0), n);
function ST(e) {
  const t = no(), { control: n = t.control, name: r, defaultValue: o, disabled: i, exact: a } = e || {}, s = ee.useRef(r);
  s.current = r, gl({
    disabled: i,
    subject: n._subjects.values,
    next: (d) => {
      qp(s.current, d.name, a) && u(Qe(Zp(s.current, n._names, d.values || n._formValues, !1, o)));
    }
  });
  const [c, u] = ee.useState(n._getWatch(r, o));
  return ee.useEffect(() => n._removeUnmounted()), c;
}
function NT(e) {
  const t = no(), { name: n, disabled: r, control: o = t.control, shouldUnregister: i } = e, a = zp(o._names.array, n), s = ST({
    control: o,
    name: n,
    defaultValue: J(o._formValues, n, J(o._defaultValues, n, e.defaultValue)),
    exact: !0
  }), c = CT({
    control: o,
    name: n,
    exact: !0
  }), u = ee.useRef(o.register(n, {
    ...e.rules,
    value: s,
    ...lt(e.disabled) ? { disabled: e.disabled } : {}
  }));
  return ee.useEffect(() => {
    const d = o._options.shouldUnregister || i, f = (h, g) => {
      const p = J(o._fields, h);
      p && p._f && (p._f.mount = g);
    };
    if (f(n, !0), d) {
      const h = Qe(J(o._options.defaultValues, n));
      Ne(o._defaultValues, n, h), Re(J(o._formValues, n)) && Ne(o._formValues, n, h);
    }
    return () => {
      (a ? d && !o._state.action : d) ? o.unregister(n) : f(n, !1);
    };
  }, [n, o, a, i]), ee.useEffect(() => {
    J(o._fields, n) && o._updateDisabledField({
      disabled: r,
      fields: o._fields,
      name: n,
      value: J(o._fields, n)._f.value
    });
  }, [r, n, o]), {
    field: {
      name: n,
      value: s,
      ...lt(r) || c.disabled ? { disabled: c.disabled || r } : {},
      onChange: ee.useCallback((d) => u.current.onChange({
        target: {
          value: Hp(d),
          name: n
        },
        type: Ko.CHANGE
      }), [n]),
      onBlur: ee.useCallback(() => u.current.onBlur({
        target: {
          value: J(o._formValues, n),
          name: n
        },
        type: Ko.BLUR
      }), [n, o]),
      ref: ee.useCallback((d) => {
        const f = J(o._fields, n);
        f && d && (f._f.ref = {
          focus: () => d.focus(),
          select: () => d.select(),
          setCustomValidity: (h) => d.setCustomValidity(h),
          reportValidity: () => d.reportValidity()
        });
      }, [o._fields, n])
    },
    formState: c,
    fieldState: Object.defineProperties({}, {
      invalid: {
        enumerable: !0,
        get: () => !!J(c.errors, n)
      },
      isDirty: {
        enumerable: !0,
        get: () => !!J(c.dirtyFields, n)
      },
      isTouched: {
        enumerable: !0,
        get: () => !!J(c.touchedFields, n)
      },
      isValidating: {
        enumerable: !0,
        get: () => !!J(c.validatingFields, n)
      },
      error: {
        enumerable: !0,
        get: () => J(c.errors, n)
      }
    })
  };
}
const MT = (e) => e.render(NT(e));
var PT = (e, t, n, r, o) => t ? {
  ...n[e],
  types: {
    ...n[e] && n[e].types ? n[e].types : {},
    [r]: o || !0
  }
} : {}, rd = (e) => ({
  isOnSubmit: !e || e === wt.onSubmit,
  isOnBlur: e === wt.onBlur,
  isOnChange: e === wt.onChange,
  isOnAll: e === wt.all,
  isOnTouch: e === wt.onTouched
}), od = (e, t, n) => !n && (t.watchAll || t.watch.has(e) || [...t.watch].some((r) => e.startsWith(r) && /^\.\w+/.test(e.slice(r.length))));
const Cr = (e, t, n, r) => {
  for (const o of n || Object.keys(e)) {
    const i = J(e, o);
    if (i) {
      const { _f: a, ...s } = i;
      if (a) {
        if (a.refs && a.refs[0] && t(a.refs[0], o) && !r)
          return !0;
        if (a.ref && t(a.ref, a.name) && !r)
          return !0;
        if (Cr(s, t))
          break;
      } else if (Be(s) && Cr(s, t))
        break;
    }
  }
};
var TT = (e, t, n) => {
  const r = xr(J(e, n));
  return Ne(r, "root", t[n]), Ne(e, n, r), e;
}, vl = (e) => e.type === "file", zt = (e) => typeof e == "function", Yo = (e) => {
  if (!ml)
    return !1;
  const t = e ? e.ownerDocument : 0;
  return e instanceof (t && t.defaultView ? t.defaultView.HTMLElement : HTMLElement);
}, Ao = (e) => At(e), yl = (e) => e.type === "radio", Xo = (e) => e instanceof RegExp;
const id = {
  value: !1,
  isValid: !1
}, ad = { value: !0, isValid: !0 };
var Qp = (e) => {
  if (Array.isArray(e)) {
    if (e.length > 1) {
      const t = e.filter((n) => n && n.checked && !n.disabled).map((n) => n.value);
      return { value: t, isValid: !!t.length };
    }
    return e[0].checked && !e[0].disabled ? (
      // @ts-expect-error expected to work in the browser
      e[0].attributes && !Re(e[0].attributes.value) ? Re(e[0].value) || e[0].value === "" ? ad : { value: e[0].value, isValid: !0 } : ad
    ) : id;
  }
  return id;
};
const sd = {
  isValid: !1,
  value: null
};
var Jp = (e) => Array.isArray(e) ? e.reduce((t, n) => n && n.checked && !n.disabled ? {
  isValid: !0,
  value: n.value
} : t, sd) : sd;
function ld(e, t, n = "validate") {
  if (Ao(e) || Array.isArray(e) && e.every(Ao) || lt(e) && !e)
    return {
      type: n,
      message: Ao(e) ? e : "",
      ref: t
    };
}
var On = (e) => Be(e) && !Xo(e) ? e : {
  value: e,
  message: ""
}, cd = async (e, t, n, r, o) => {
  const { ref: i, refs: a, required: s, maxLength: c, minLength: u, min: d, max: f, pattern: h, validate: g, name: p, valueAsNumber: v, mount: y, disabled: w } = e._f, b = J(t, p);
  if (!y || w)
    return {};
  const x = a ? a[0] : i, P = (G) => {
    r && x.reportValidity && (x.setCustomValidity(lt(G) ? "" : G || ""), x.reportValidity());
  }, T = {}, R = yl(i), F = to(i), D = R || F, _ = (v || vl(i)) && Re(i.value) && Re(b) || Yo(i) && i.value === "" || b === "" || Array.isArray(b) && !b.length, j = PT.bind(null, p, n, T), te = (G, $, I, L = Wt.maxLength, H = Wt.minLength) => {
    const V = G ? $ : I;
    T[p] = {
      type: G ? L : H,
      message: V,
      ref: i,
      ...j(G ? L : H, V)
    };
  };
  if (o ? !Array.isArray(b) || !b.length : s && (!D && (_ || Xe(b)) || lt(b) && !b || F && !Qp(a).isValid || R && !Jp(a).isValid)) {
    const { value: G, message: $ } = Ao(s) ? { value: !!s, message: s } : On(s);
    if (G && (T[p] = {
      type: Wt.required,
      message: $,
      ref: x,
      ...j(Wt.required, $)
    }, !n))
      return P($), T;
  }
  if (!_ && (!Xe(d) || !Xe(f))) {
    let G, $;
    const I = On(f), L = On(d);
    if (!Xe(b) && !isNaN(b)) {
      const H = i.valueAsNumber || b && +b;
      Xe(I.value) || (G = H > I.value), Xe(L.value) || ($ = H < L.value);
    } else {
      const H = i.valueAsDate || new Date(b), V = (M) => /* @__PURE__ */ new Date((/* @__PURE__ */ new Date()).toDateString() + " " + M), W = i.type == "time", z = i.type == "week";
      At(I.value) && b && (G = W ? V(b) > V(I.value) : z ? b > I.value : H > new Date(I.value)), At(L.value) && b && ($ = W ? V(b) < V(L.value) : z ? b < L.value : H < new Date(L.value));
    }
    if ((G || $) && (te(!!G, I.message, L.message, Wt.max, Wt.min), !n))
      return P(T[p].message), T;
  }
  if ((c || u) && !_ && (At(b) || o && Array.isArray(b))) {
    const G = On(c), $ = On(u), I = !Xe(G.value) && b.length > +G.value, L = !Xe($.value) && b.length < +$.value;
    if ((I || L) && (te(I, G.message, $.message), !n))
      return P(T[p].message), T;
  }
  if (h && !_ && At(b)) {
    const { value: G, message: $ } = On(h);
    if (Xo(G) && !b.match(G) && (T[p] = {
      type: Wt.pattern,
      message: $,
      ref: i,
      ...j(Wt.pattern, $)
    }, !n))
      return P($), T;
  }
  if (g) {
    if (zt(g)) {
      const G = await g(b, t), $ = ld(G, x);
      if ($ && (T[p] = {
        ...$,
        ...j(Wt.validate, $.message)
      }, !n))
        return P($.message), T;
    } else if (Be(g)) {
      let G = {};
      for (const $ in g) {
        if (!Je(G) && !n)
          break;
        const I = ld(await g[$](b, t), x, $);
        I && (G = {
          ...I,
          ...j($, I.message)
        }, P(I.message), n && (T[p] = G));
      }
      if (!Je(G) && (T[p] = {
        ref: x,
        ...G
      }, !n))
        return T;
    }
  }
  return P(!0), T;
};
function kT(e, t) {
  const n = t.slice(0, -1).length;
  let r = 0;
  for (; r < n; )
    e = Re(e) ? r++ : e[t[r++]];
  return e;
}
function ET(e) {
  for (const t in e)
    if (e.hasOwnProperty(t) && !Re(e[t]))
      return !1;
  return !0;
}
function We(e, t) {
  const n = Array.isArray(t) ? t : pl(t) ? [t] : Gp(t), r = n.length === 1 ? e : kT(e, n), o = n.length - 1, i = n[o];
  return r && delete r[i], o !== 0 && (Be(r) && Je(r) || Array.isArray(r) && ET(r)) && We(e, n.slice(0, -1)), e;
}
var Ma = () => {
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
}, qo = (e) => Xe(e) || !Up(e);
function an(e, t) {
  if (qo(e) || qo(t))
    return e === t;
  if (Un(e) && Un(t))
    return e.getTime() === t.getTime();
  const n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length)
    return !1;
  for (const o of n) {
    const i = e[o];
    if (!r.includes(o))
      return !1;
    if (o !== "ref") {
      const a = t[o];
      if (Un(i) && Un(a) || Be(i) && Be(a) || Array.isArray(i) && Array.isArray(a) ? !an(i, a) : i !== a)
        return !1;
    }
  }
  return !0;
}
var eg = (e) => e.type === "select-multiple", AT = (e) => yl(e) || to(e), Pa = (e) => Yo(e) && e.isConnected, tg = (e) => {
  for (const t in e)
    if (zt(e[t]))
      return !0;
  return !1;
};
function Zo(e, t = {}) {
  const n = Array.isArray(e);
  if (Be(e) || n)
    for (const r in e)
      Array.isArray(e[r]) || Be(e[r]) && !tg(e[r]) ? (t[r] = Array.isArray(e[r]) ? [] : {}, Zo(e[r], t[r])) : Xe(e[r]) || (t[r] = !0);
  return t;
}
function ng(e, t, n) {
  const r = Array.isArray(e);
  if (Be(e) || r)
    for (const o in e)
      Array.isArray(e[o]) || Be(e[o]) && !tg(e[o]) ? Re(t) || qo(n[o]) ? n[o] = Array.isArray(e[o]) ? Zo(e[o], []) : { ...Zo(e[o]) } : ng(e[o], Xe(t) ? {} : t[o], n[o]) : n[o] = !an(e[o], t[o]);
  return n;
}
var Co = (e, t) => ng(e, t, Zo(t)), rg = (e, { valueAsNumber: t, valueAsDate: n, setValueAs: r }) => Re(e) ? e : t ? e === "" ? NaN : e && +e : n && At(e) ? new Date(e) : r ? r(e) : e;
function Ta(e) {
  const t = e.ref;
  if (!(e.refs ? e.refs.every((n) => n.disabled) : t.disabled))
    return vl(t) ? t.files : yl(t) ? Jp(e.refs).value : eg(t) ? [...t.selectedOptions].map(({ value: n }) => n) : to(t) ? Qp(e.refs).value : rg(Re(t.value) ? e.ref.value : t.value, e);
}
var DT = (e, t, n, r) => {
  const o = {};
  for (const i of e) {
    const a = J(t, i);
    a && Ne(o, i, a._f);
  }
  return {
    criteriaMode: n,
    names: [...e],
    fields: o,
    shouldUseNativeValidation: r
  };
}, cr = (e) => Re(e) ? e : Xo(e) ? e.source : Be(e) ? Xo(e.value) ? e.value.source : e.value : e;
const ud = "AsyncFunction";
var _T = (e) => (!e || !e.validate) && !!(zt(e.validate) && e.validate.constructor.name === ud || Be(e.validate) && Object.values(e.validate).find((t) => t.constructor.name === ud)), RT = (e) => e.mount && (e.required || e.min || e.max || e.maxLength || e.minLength || e.pattern || e.validate);
function dd(e, t, n) {
  const r = J(e, n);
  if (r || pl(n))
    return {
      error: r,
      name: n
    };
  const o = n.split(".");
  for (; o.length; ) {
    const i = o.join("."), a = J(t, i), s = J(e, i);
    if (a && !Array.isArray(a) && n !== i)
      return { name: n };
    if (s && s.type)
      return {
        name: i,
        error: s
      };
    o.pop();
  }
  return {
    name: n
  };
}
var IT = (e, t, n, r, o) => o.isOnAll ? !1 : !n && o.isOnTouch ? !(t || e) : (n ? r.isOnBlur : o.isOnBlur) ? !e : (n ? r.isOnChange : o.isOnChange) ? e : !0, LT = (e, t) => !Ii(J(e, t)).length && We(e, t);
const OT = {
  mode: wt.onSubmit,
  reValidateMode: wt.onChange,
  shouldFocusError: !0
};
function FT(e = {}) {
  let t = {
    ...OT,
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
  }, r = {}, o = Be(t.defaultValues) || Be(t.values) ? Qe(t.defaultValues || t.values) || {} : {}, i = t.shouldUnregister ? {} : Qe(o), a = {
    action: !1,
    mount: !1,
    watch: !1
  }, s = {
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
    values: Ma(),
    array: Ma(),
    state: Ma()
  }, h = rd(t.mode), g = rd(t.reValidateMode), p = t.criteriaMode === wt.all, v = (C) => (k) => {
    clearTimeout(u), u = setTimeout(C, k);
  }, y = async (C) => {
    if (d.isValid || C) {
      const k = t.resolver ? Je((await D()).errors) : await j(r, !0);
      k !== n.isValid && f.state.next({
        isValid: k
      });
    }
  }, w = (C, k) => {
    (d.isValidating || d.validatingFields) && ((C || Array.from(s.mount)).forEach((A) => {
      A && (k ? Ne(n.validatingFields, A, k) : We(n.validatingFields, A));
    }), f.state.next({
      validatingFields: n.validatingFields,
      isValidating: !Je(n.validatingFields)
    }));
  }, b = (C, k = [], A, Q, K = !0, U = !0) => {
    if (Q && A) {
      if (a.action = !0, U && Array.isArray(J(r, C))) {
        const le = A(J(r, C), Q.argA, Q.argB);
        K && Ne(r, C, le);
      }
      if (U && Array.isArray(J(n.errors, C))) {
        const le = A(J(n.errors, C), Q.argA, Q.argB);
        K && Ne(n.errors, C, le), LT(n.errors, C);
      }
      if (d.touchedFields && U && Array.isArray(J(n.touchedFields, C))) {
        const le = A(J(n.touchedFields, C), Q.argA, Q.argB);
        K && Ne(n.touchedFields, C, le);
      }
      d.dirtyFields && (n.dirtyFields = Co(o, i)), f.state.next({
        name: C,
        isDirty: G(C, k),
        dirtyFields: n.dirtyFields,
        errors: n.errors,
        isValid: n.isValid
      });
    } else
      Ne(i, C, k);
  }, x = (C, k) => {
    Ne(n.errors, C, k), f.state.next({
      errors: n.errors
    });
  }, P = (C) => {
    n.errors = C, f.state.next({
      errors: n.errors,
      isValid: !1
    });
  }, T = (C, k, A, Q) => {
    const K = J(r, C);
    if (K) {
      const U = J(i, C, Re(A) ? J(o, C) : A);
      Re(U) || Q && Q.defaultChecked || k ? Ne(i, C, k ? U : Ta(K._f)) : L(C, U), a.mount && y();
    }
  }, R = (C, k, A, Q, K) => {
    let U = !1, le = !1;
    const ge = {
      name: C
    }, Ee = !!(J(r, C) && J(r, C)._f && J(r, C)._f.disabled);
    if (!A || Q) {
      d.isDirty && (le = n.isDirty, n.isDirty = ge.isDirty = G(), U = le !== ge.isDirty);
      const Ae = Ee || an(J(o, C), k);
      le = !!(!Ee && J(n.dirtyFields, C)), Ae || Ee ? We(n.dirtyFields, C) : Ne(n.dirtyFields, C, !0), ge.dirtyFields = n.dirtyFields, U = U || d.dirtyFields && le !== !Ae;
    }
    if (A) {
      const Ae = J(n.touchedFields, C);
      Ae || (Ne(n.touchedFields, C, A), ge.touchedFields = n.touchedFields, U = U || d.touchedFields && Ae !== A);
    }
    return U && K && f.state.next(ge), U ? ge : {};
  }, F = (C, k, A, Q) => {
    const K = J(n.errors, C), U = d.isValid && lt(k) && n.isValid !== k;
    if (e.delayError && A ? (c = v(() => x(C, A)), c(e.delayError)) : (clearTimeout(u), c = null, A ? Ne(n.errors, C, A) : We(n.errors, C)), (A ? !an(K, A) : K) || !Je(Q) || U) {
      const le = {
        ...Q,
        ...U && lt(k) ? { isValid: k } : {},
        errors: n.errors,
        name: C
      };
      n = {
        ...n,
        ...le
      }, f.state.next(le);
    }
  }, D = async (C) => {
    w(C, !0);
    const k = await t.resolver(i, t.context, DT(C || s.mount, r, t.criteriaMode, t.shouldUseNativeValidation));
    return w(C), k;
  }, _ = async (C) => {
    const { errors: k } = await D(C);
    if (C)
      for (const A of C) {
        const Q = J(k, A);
        Q ? Ne(n.errors, A, Q) : We(n.errors, A);
      }
    else
      n.errors = k;
    return k;
  }, j = async (C, k, A = {
    valid: !0
  }) => {
    for (const Q in C) {
      const K = C[Q];
      if (K) {
        const { _f: U, ...le } = K;
        if (U) {
          const ge = s.array.has(U.name), Ee = K._f && _T(K._f);
          Ee && d.validatingFields && w([Q], !0);
          const Ae = await cd(K, i, p, t.shouldUseNativeValidation && !k, ge);
          if (Ee && d.validatingFields && w([Q]), Ae[U.name] && (A.valid = !1, k))
            break;
          !k && (J(Ae, U.name) ? ge ? TT(n.errors, Ae, U.name) : Ne(n.errors, U.name, Ae[U.name]) : We(n.errors, U.name));
        }
        !Je(le) && await j(le, k, A);
      }
    }
    return A.valid;
  }, te = () => {
    for (const C of s.unMount) {
      const k = J(r, C);
      k && (k._f.refs ? k._f.refs.every((A) => !Pa(A)) : !Pa(k._f.ref)) && ce(C);
    }
    s.unMount = /* @__PURE__ */ new Set();
  }, G = (C, k) => (C && k && Ne(i, C, k), !an(S(), o)), $ = (C, k, A) => Zp(C, s, {
    ...a.mount ? i : Re(k) ? o : At(C) ? { [C]: k } : k
  }, A, k), I = (C) => Ii(J(a.mount ? i : o, C, e.shouldUnregister ? J(o, C, []) : [])), L = (C, k, A = {}) => {
    const Q = J(r, C);
    let K = k;
    if (Q) {
      const U = Q._f;
      U && (!U.disabled && Ne(i, C, rg(k, U)), K = Yo(U.ref) && Xe(k) ? "" : k, eg(U.ref) ? [...U.ref.options].forEach((le) => le.selected = K.includes(le.value)) : U.refs ? to(U.ref) ? U.refs.length > 1 ? U.refs.forEach((le) => (!le.defaultChecked || !le.disabled) && (le.checked = Array.isArray(K) ? !!K.find((ge) => ge === le.value) : K === le.value)) : U.refs[0] && (U.refs[0].checked = !!K) : U.refs.forEach((le) => le.checked = le.value === K) : vl(U.ref) ? U.ref.value = "" : (U.ref.value = K, U.ref.type || f.values.next({
        name: C,
        values: { ...i }
      })));
    }
    (A.shouldDirty || A.shouldTouch) && R(C, K, A.shouldTouch, A.shouldDirty, !0), A.shouldValidate && M(C);
  }, H = (C, k, A) => {
    for (const Q in k) {
      const K = k[Q], U = `${C}.${Q}`, le = J(r, U);
      (s.array.has(C) || !qo(K) || le && !le._f) && !Un(K) ? H(U, K, A) : L(U, K, A);
    }
  }, V = (C, k, A = {}) => {
    const Q = J(r, C), K = s.array.has(C), U = Qe(k);
    Ne(i, C, U), K ? (f.array.next({
      name: C,
      values: { ...i }
    }), (d.isDirty || d.dirtyFields) && A.shouldDirty && f.state.next({
      name: C,
      dirtyFields: Co(o, i),
      isDirty: G(C, U)
    })) : Q && !Q._f && !Xe(U) ? H(C, U, A) : L(C, U, A), od(C, s) && f.state.next({ ...n }), f.values.next({
      name: a.mount ? C : void 0,
      values: { ...i }
    });
  }, W = async (C) => {
    a.mount = !0;
    const k = C.target;
    let A = k.name, Q = !0;
    const K = J(r, A), U = () => k.type ? Ta(K._f) : Hp(C), le = (ge) => {
      Q = Number.isNaN(ge) || an(ge, J(i, A, ge));
    };
    if (K) {
      let ge, Ee;
      const Ae = U(), yt = C.type === Ko.BLUR || C.type === Ko.FOCUS_OUT, tn = !RT(K._f) && !t.resolver && !J(n.errors, A) && !K._f.deps || IT(yt, J(n.touchedFields, A), n.isSubmitted, g, h), rt = od(A, s, yt);
      Ne(i, A, Ae), yt ? (K._f.onBlur && K._f.onBlur(C), c && c(0)) : K._f.onChange && K._f.onChange(C);
      const bt = R(A, Ae, yt, !1), mn = !Je(bt) || rt;
      if (!yt && f.values.next({
        name: A,
        type: C.type,
        values: { ...i }
      }), tn)
        return d.isValid && (e.mode === "onBlur" ? yt && y() : y()), mn && f.state.next({ name: A, ...rt ? {} : bt });
      if (!yt && rt && f.state.next({ ...n }), t.resolver) {
        const { errors: Vt } = await D([A]);
        if (le(Ae), Q) {
          const Xi = dd(n.errors, r, A), lo = dd(Vt, r, Xi.name || A);
          ge = lo.error, A = lo.name, Ee = Je(Vt);
        }
      } else
        w([A], !0), ge = (await cd(K, i, p, t.shouldUseNativeValidation))[A], w([A]), le(Ae), Q && (ge ? Ee = !1 : d.isValid && (Ee = await j(r, !0)));
      Q && (K._f.deps && M(K._f.deps), F(A, Ee, ge, bt));
    }
  }, z = (C, k) => {
    if (J(n.errors, k) && C.focus)
      return C.focus(), 1;
  }, M = async (C, k = {}) => {
    let A, Q;
    const K = xr(C);
    if (t.resolver) {
      const U = await _(Re(C) ? C : K);
      A = Je(U), Q = C ? !K.some((le) => J(U, le)) : A;
    } else C ? (Q = (await Promise.all(K.map(async (U) => {
      const le = J(r, U);
      return await j(le && le._f ? { [U]: le } : le);
    }))).every(Boolean), !(!Q && !n.isValid) && y()) : Q = A = await j(r);
    return f.state.next({
      ...!At(C) || d.isValid && A !== n.isValid ? {} : { name: C },
      ...t.resolver || !C ? { isValid: A } : {},
      errors: n.errors
    }), k.shouldFocus && !Q && Cr(r, z, C ? K : s.mount), Q;
  }, S = (C) => {
    const k = {
      ...a.mount ? i : o
    };
    return Re(C) ? k : At(C) ? J(k, C) : C.map((A) => J(k, A));
  }, q = (C, k) => ({
    invalid: !!J((k || n).errors, C),
    isDirty: !!J((k || n).dirtyFields, C),
    error: J((k || n).errors, C),
    isValidating: !!J(n.validatingFields, C),
    isTouched: !!J((k || n).touchedFields, C)
  }), re = (C) => {
    C && xr(C).forEach((k) => We(n.errors, k)), f.state.next({
      errors: C ? n.errors : {}
    });
  }, ae = (C, k, A) => {
    const Q = (J(r, C, { _f: {} })._f || {}).ref, K = J(n.errors, C) || {}, { ref: U, message: le, type: ge, ...Ee } = K;
    Ne(n.errors, C, {
      ...Ee,
      ...k,
      ref: Q
    }), f.state.next({
      name: C,
      errors: n.errors,
      isValid: !1
    }), A && A.shouldFocus && Q && Q.focus && Q.focus();
  }, de = (C, k) => zt(C) ? f.values.subscribe({
    next: (A) => C($(void 0, k), A)
  }) : $(C, k, !0), ce = (C, k = {}) => {
    for (const A of C ? xr(C) : s.mount)
      s.mount.delete(A), s.array.delete(A), k.keepValue || (We(r, A), We(i, A)), !k.keepError && We(n.errors, A), !k.keepDirty && We(n.dirtyFields, A), !k.keepTouched && We(n.touchedFields, A), !k.keepIsValidating && We(n.validatingFields, A), !t.shouldUnregister && !k.keepDefaultValue && We(o, A);
    f.values.next({
      values: { ...i }
    }), f.state.next({
      ...n,
      ...k.keepDirty ? { isDirty: G() } : {}
    }), !k.keepIsValid && y();
  }, O = ({ disabled: C, name: k, field: A, fields: Q, value: K }) => {
    if (lt(C) && a.mount || C) {
      const U = C ? void 0 : Re(K) ? Ta(A ? A._f : J(Q, k)._f) : K;
      Ne(i, k, U), R(k, U, !1, !1, !0);
    }
  }, Y = (C, k = {}) => {
    let A = J(r, C);
    const Q = lt(k.disabled) || lt(e.disabled);
    return Ne(r, C, {
      ...A || {},
      _f: {
        ...A && A._f ? A._f : { ref: { name: C } },
        name: C,
        mount: !0,
        ...k
      }
    }), s.mount.add(C), A ? O({
      field: A,
      disabled: lt(k.disabled) ? k.disabled : e.disabled,
      name: C,
      value: k.value
    }) : T(C, !0, k.value), {
      ...Q ? { disabled: k.disabled || e.disabled } : {},
      ...t.progressive ? {
        required: !!k.required,
        min: cr(k.min),
        max: cr(k.max),
        minLength: cr(k.minLength),
        maxLength: cr(k.maxLength),
        pattern: cr(k.pattern)
      } : {},
      name: C,
      onChange: W,
      onBlur: W,
      ref: (K) => {
        if (K) {
          Y(C, k), A = J(r, C);
          const U = Re(K.value) && K.querySelectorAll && K.querySelectorAll("input,select,textarea")[0] || K, le = AT(U), ge = A._f.refs || [];
          if (le ? ge.find((Ee) => Ee === U) : U === A._f.ref)
            return;
          Ne(r, C, {
            _f: {
              ...A._f,
              ...le ? {
                refs: [
                  ...ge.filter(Pa),
                  U,
                  ...Array.isArray(J(o, C)) ? [{}] : []
                ],
                ref: { type: U.type, name: C }
              } : { ref: U }
            }
          }), T(C, !1, void 0, U);
        } else
          A = J(r, C, {}), A._f && (A._f.mount = !1), (t.shouldUnregister || k.shouldUnregister) && !(zp(s.array, C) && a.action) && s.unMount.add(C);
      }
    };
  }, se = () => t.shouldFocusError && Cr(r, z, s.mount), ie = (C) => {
    lt(C) && (f.state.next({ disabled: C }), Cr(r, (k, A) => {
      const Q = J(r, A);
      Q && (k.disabled = Q._f.disabled || C, Array.isArray(Q._f.refs) && Q._f.refs.forEach((K) => {
        K.disabled = Q._f.disabled || C;
      }));
    }, 0, !1));
  }, Z = (C, k) => async (A) => {
    let Q;
    A && (A.preventDefault && A.preventDefault(), A.persist && A.persist());
    let K = Qe(i);
    if (f.state.next({
      isSubmitting: !0
    }), t.resolver) {
      const { errors: U, values: le } = await D();
      n.errors = U, K = le;
    } else
      await j(r);
    if (We(n.errors, "root"), Je(n.errors)) {
      f.state.next({
        errors: {}
      });
      try {
        await C(K, A);
      } catch (U) {
        Q = U;
      }
    } else
      k && await k({ ...n.errors }, A), se(), setTimeout(se);
    if (f.state.next({
      isSubmitted: !0,
      isSubmitting: !1,
      isSubmitSuccessful: Je(n.errors) && !Q,
      submitCount: n.submitCount + 1,
      errors: n.errors
    }), Q)
      throw Q;
  }, B = (C, k = {}) => {
    J(r, C) && (Re(k.defaultValue) ? V(C, Qe(J(o, C))) : (V(C, k.defaultValue), Ne(o, C, Qe(k.defaultValue))), k.keepTouched || We(n.touchedFields, C), k.keepDirty || (We(n.dirtyFields, C), n.isDirty = k.defaultValue ? G(C, Qe(J(o, C))) : G()), k.keepError || (We(n.errors, C), d.isValid && y()), f.state.next({ ...n }));
  }, ue = (C, k = {}) => {
    const A = C ? Qe(C) : o, Q = Qe(A), K = Je(C), U = K ? o : Q;
    if (k.keepDefaultValues || (o = A), !k.keepValues) {
      if (k.keepDirtyValues)
        for (const le of s.mount)
          J(n.dirtyFields, le) ? Ne(U, le, J(i, le)) : V(le, J(U, le));
      else {
        if (ml && Re(C))
          for (const le of s.mount) {
            const ge = J(r, le);
            if (ge && ge._f) {
              const Ee = Array.isArray(ge._f.refs) ? ge._f.refs[0] : ge._f.ref;
              if (Yo(Ee)) {
                const Ae = Ee.closest("form");
                if (Ae) {
                  Ae.reset();
                  break;
                }
              }
            }
          }
        r = {};
      }
      i = e.shouldUnregister ? k.keepDefaultValues ? Qe(o) : {} : Qe(U), f.array.next({
        values: { ...U }
      }), f.values.next({
        values: { ...U }
      });
    }
    s = {
      mount: k.keepDirtyValues ? s.mount : /* @__PURE__ */ new Set(),
      unMount: /* @__PURE__ */ new Set(),
      array: /* @__PURE__ */ new Set(),
      watch: /* @__PURE__ */ new Set(),
      watchAll: !1,
      focus: ""
    }, a.mount = !d.isValid || !!k.keepIsValid || !!k.keepDirtyValues, a.watch = !!e.shouldUnregister, f.state.next({
      submitCount: k.keepSubmitCount ? n.submitCount : 0,
      isDirty: K ? !1 : k.keepDirty ? n.isDirty : !!(k.keepDefaultValues && !an(C, o)),
      isSubmitted: k.keepIsSubmitted ? n.isSubmitted : !1,
      dirtyFields: K ? {} : k.keepDirtyValues ? k.keepDefaultValues && i ? Co(o, i) : n.dirtyFields : k.keepDefaultValues && C ? Co(o, C) : k.keepDirty ? n.dirtyFields : {},
      touchedFields: k.keepTouched ? n.touchedFields : {},
      errors: k.keepErrors ? n.errors : {},
      isSubmitSuccessful: k.keepIsSubmitSuccessful ? n.isSubmitSuccessful : !1,
      isSubmitting: !1
    });
  }, oe = (C, k) => ue(zt(C) ? C(i) : C, k);
  return {
    control: {
      register: Y,
      unregister: ce,
      getFieldState: q,
      handleSubmit: Z,
      setError: ae,
      _executeSchema: D,
      _getWatch: $,
      _getDirty: G,
      _updateValid: y,
      _removeUnmounted: te,
      _updateFieldArray: b,
      _updateDisabledField: O,
      _getFieldArray: I,
      _reset: ue,
      _resetDefaultValues: () => zt(t.defaultValues) && t.defaultValues().then((C) => {
        oe(C, t.resetOptions), f.state.next({
          isLoading: !1
        });
      }),
      _updateFormState: (C) => {
        n = {
          ...n,
          ...C
        };
      },
      _disableForm: ie,
      _subjects: f,
      _proxyFormState: d,
      _setErrors: P,
      get _fields() {
        return r;
      },
      get _formValues() {
        return i;
      },
      get _state() {
        return a;
      },
      set _state(C) {
        a = C;
      },
      get _defaultValues() {
        return o;
      },
      get _names() {
        return s;
      },
      set _names(C) {
        s = C;
      },
      get _formState() {
        return n;
      },
      set _formState(C) {
        n = C;
      },
      get _options() {
        return t;
      },
      set _options(C) {
        t = {
          ...t,
          ...C
        };
      }
    },
    trigger: M,
    register: Y,
    handleSubmit: Z,
    watch: de,
    setValue: V,
    getValues: S,
    reset: oe,
    resetField: B,
    clearErrors: re,
    unregister: ce,
    setError: ae,
    setFocus: (C, k = {}) => {
      const A = J(r, C), Q = A && A._f;
      if (Q) {
        const K = Q.refs ? Q.refs[0] : Q.ref;
        K.focus && (K.focus(), k.shouldSelect && K.select());
      }
    },
    getFieldState: q
  };
}
function H5(e = {}) {
  const t = ee.useRef(), n = ee.useRef(), [r, o] = ee.useState({
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
    ...FT(e),
    formState: r
  });
  const i = t.current.control;
  return i._options = e, gl({
    subject: i._subjects.state,
    next: (a) => {
      Xp(a, i._proxyFormState, i._updateFormState, !0) && o({ ...i._formState });
    }
  }), ee.useEffect(() => i._disableForm(e.disabled), [i, e.disabled]), ee.useEffect(() => {
    if (i._proxyFormState.isDirty) {
      const a = i._getDirty();
      a !== r.isDirty && i._subjects.state.next({
        isDirty: a
      });
    }
  }, [i, r.isDirty]), ee.useEffect(() => {
    e.values && !an(e.values, n.current) ? (i._reset(e.values, i._options.resetOptions), n.current = e.values, o((a) => ({ ...a }))) : i._resetDefaultValues();
  }, [e.values, i]), ee.useEffect(() => {
    e.errors && i._setErrors(e.errors);
  }, [e.errors, i]), ee.useEffect(() => {
    i._state.mount || (i._updateValid(), i._state.mount = !0), i._state.watch && (i._state.watch = !1, i._subjects.state.next({ ...i._formState })), i._removeUnmounted();
  }), ee.useEffect(() => {
    e.shouldUnregister && i._subjects.values.next({
      values: i._getWatch()
    });
  }, [e.shouldUnregister, i]), t.current.formState = Yp(r, i), t.current;
}
var VT = "Label", og = m.forwardRef((e, t) => /* @__PURE__ */ l(
  fe.label,
  {
    ...e,
    ref: t,
    onMouseDown: (n) => {
      var o;
      n.target.closest("button, input, select, textarea") || ((o = e.onMouseDown) == null || o.call(e, n), !n.defaultPrevented && n.detail > 1 && n.preventDefault());
    }
  }
));
og.displayName = VT;
var ig = og;
const BT = Ie(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
), ag = m.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l(
  ig,
  {
    ref: n,
    className: E(BT(), e),
    ...t
  }
));
ag.displayName = ig.displayName;
const WT = xT, sg = m.createContext(
  {}
), $T = ({
  ...e
}) => {
  const { formState: t } = no();
  return /* @__PURE__ */ l(sg.Provider, { value: { name: e.name }, children: /* @__PURE__ */ l(MT, { ...e, disabled: t.isSubmitting }) });
}, Li = () => {
  const e = m.useContext(sg), t = m.useContext(lg), { getFieldState: n, formState: r } = no(), o = n(e.name, r);
  if (!e)
    throw new Error("useFormField should be used within <FormField>");
  const { id: i } = t;
  return {
    id: i,
    name: e.name,
    formItemId: `${i}-form-item`,
    formDescriptionId: `${i}-form-item-description`,
    formMessageId: `${i}-form-item-message`,
    ...o
  };
}, lg = m.createContext(
  {}
), cg = m.forwardRef(({ className: e, ...t }, n) => {
  const r = m.useId();
  return /* @__PURE__ */ l(lg.Provider, { value: { id: r }, children: /* @__PURE__ */ l("div", { ref: n, className: E("space-y-2", e), ...t }) });
});
cg.displayName = "FormItem";
const ug = m.forwardRef(({ className: e, ...t }, n) => {
  const { error: r, formItemId: o } = Li();
  return /* @__PURE__ */ l(
    ag,
    {
      ref: n,
      className: E(r && "text-f1-foreground-critical", e),
      htmlFor: o,
      ...t
    }
  );
});
ug.displayName = "FormLabel";
const dg = m.forwardRef(({ ...e }, t) => {
  const { error: n, formItemId: r, formDescriptionId: o, formMessageId: i } = Li();
  return /* @__PURE__ */ l(
    Cn,
    {
      ref: t,
      id: r,
      "aria-describedby": n ? `${o} ${i}` : `${o}`,
      "aria-invalid": !!n,
      ...e
    }
  );
});
dg.displayName = "FormControl";
const fg = m.forwardRef(({ className: e, ...t }, n) => {
  const { formDescriptionId: r } = Li();
  return /* @__PURE__ */ l(
    "p",
    {
      ref: n,
      id: r,
      className: E("text-sm text-f1-foreground-secondary", e),
      ...t
    }
  );
});
fg.displayName = "FormDescription";
const hg = m.forwardRef(({ className: e, children: t, ...n }, r) => {
  const { error: o, formMessageId: i } = Li(), a = o ? String(o == null ? void 0 : o.message) : t;
  return a ? /* @__PURE__ */ l(
    "p",
    {
      ref: r,
      id: i,
      className: E(
        "text-sm font-medium text-f1-foreground-critical",
        e
      ),
      ...n,
      children: a
    }
  ) : null;
});
hg.displayName = "FormMessage";
function z5({
  onSubmit: e,
  children: t,
  ...n
}) {
  const r = n.formState.errors.root;
  return /* @__PURE__ */ l(WT, { ...n, children: /* @__PURE__ */ N("form", { onSubmit: e, className: "flex flex-col gap-4", children: [
    r && /* @__PURE__ */ l("p", { className: "text-sm font-medium text-f1-foreground-critical", children: r.message }),
    t
  ] }) });
}
function G5({
  submitLabel: e,
  form: t
}) {
  return /* @__PURE__ */ l("div", { children: /* @__PURE__ */ l(
    ft,
    {
      type: "submit",
      label: e,
      loading: t.formState.isSubmitting
    }
  ) });
}
const K5 = ({
  label: e,
  description: t,
  children: n,
  ...r
}) => /* @__PURE__ */ l(
  $T,
  {
    ...r,
    render: ({ field: o }) => /* @__PURE__ */ N(cg, { children: [
      /* @__PURE__ */ l(ug, { children: e }),
      /* @__PURE__ */ l(dg, { children: n(o) }),
      /* @__PURE__ */ l(fg, { children: t }),
      /* @__PURE__ */ l(hg, {})
    ] })
  }
), jT = Ie(
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
), UT = {
  destructive: UC,
  positive: $C,
  warning: HC,
  info: VC
}, Y5 = He(
  {
    name: "Alert",
    type: "info"
  },
  // eslint-disable-next-line react/display-name
  m.forwardRef(({ className: e, variant: t = "info", children: n, ...r }, o) => {
    const i = t ? UT[t] : null;
    return /* @__PURE__ */ l(
      "div",
      {
        ref: o,
        role: "alert",
        className: E(jT({ variant: t }), e),
        ...r,
        children: /* @__PURE__ */ N("div", { className: "flex flex-row", children: [
          i && /* @__PURE__ */ l("div", { className: "mr-2 flex h-6 items-center", children: /* @__PURE__ */ l(i, { size: 20 }) }),
          /* @__PURE__ */ l("div", { children: n })
        ] })
      }
    );
  })
), X5 = m.forwardRef(function({ className: t, ...n }, r) {
  return /* @__PURE__ */ l(
    "h5",
    {
      ref: r,
      className: E("mb-1 text-base font-medium tracking-tight", t),
      ...n
    }
  );
}), q5 = m.forwardRef(function({ className: t, ...n }, r) {
  return /* @__PURE__ */ l(
    "div",
    {
      ref: r,
      className: E("[&_p]:leading-relaxed", t),
      ...n
    }
  );
}), HT = Ie(
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
), Z5 = ({ type: e, size: t }) => {
  const n = {
    critical: im,
    warning: dm,
    info: um
  };
  return /* @__PURE__ */ l("div", { className: HT({ type: e, size: t }), children: /* @__PURE__ */ l(be, { icon: n[e], size: t }) });
};
function zT(e) {
  return dn(e, "LLL");
}
function GT(e) {
  return e.getDate();
}
const os = ({ date: e }) => {
  const t = GT(e), n = zT(e);
  return /* @__PURE__ */ N("div", { className: "flex h-10 w-10 flex-col items-center justify-center rounded border border-solid border-f1-border-secondary bg-f1-background-inverse-secondary", children: [
    /* @__PURE__ */ l("div", { className: "pt-0.5 text-xs font-semibold uppercase leading-3 text-f1-special-highlight dark:text-f1-foreground-inverse-secondary", children: n }),
    /* @__PURE__ */ l("div", { className: "flex items-center justify-center text-lg font-medium leading-tight text-f1-foreground", children: t })
  ] });
};
function gt(e, t) {
  const n = e.displayName || e.name || "Component";
  return Object.assign(t, { displayName: `${n}.Skeleton` }), Object.assign(e, { Skeleton: t });
}
const mg = ({ orientation: e = "vertical", limit: t = 600, children: n }) => /* @__PURE__ */ l(
  "div",
  {
    style: {
      maskImage: `linear-gradient(to ${e == "vertical" ? "bottom" : "right"}, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) calc(min(100% - ${t}px, 100%)), rgba(0, 0, 0, 0) 100%)`
    },
    className: e == "horizontal" ? "w-full overflow-hidden" : "w-auto",
    children: n
  }
);
function Rt({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ l(
    "div",
    {
      className: E(
        "animate-pulse rounded-xs bg-f1-background-secondary",
        e
      ),
      ...t
    }
  );
}
const KT = {
  birthday: "🎂",
  anniversary: "🎉",
  "first-day": "💼"
}, YT = {
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
function XT({
  firstName: e,
  lastName: t,
  src: n,
  canReact: r
}) {
  return /* @__PURE__ */ N(
    "div",
    {
      className: E(
        "relative h-32 w-full overflow-hidden rounded-md bg-f1-background",
        n ? "" : YT[Nm(
          [e, t].join("")
        )]
      ),
      children: [
        n && /* @__PURE__ */ l(
          "div",
          {
            className: "absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10",
            style: { backgroundImage: `url(${n})` }
          }
        ),
        /* @__PURE__ */ l("div", { className: "relative flex h-full w-full items-center justify-center overflow-hidden rounded-md backdrop-blur", children: /* @__PURE__ */ N("div", { className: "relative h-fit w-fit", children: [
          /* @__PURE__ */ l(
            "div",
            {
              style: r ? {
                clipPath: "path('M69.6933 48.707C71.1842 44.7556 72 40.4731 72 36C72 16.1177 55.8823 0 36 0C16.1177 0 0 16.1177 0 36C0 55.8823 16.1177 72 36 72C40.4731 72 44.7556 71.1842 48.707 69.6933C48.6283 69.4953 48.5557 69.2942 48.4894 69.0902C48 67.5838 48 65.7226 48 62C48 58.2774 48 56.4162 48.4894 54.9098C49.4786 51.8655 51.8655 49.4786 54.9098 48.4894C56.4162 48 58.2774 48 62 48C65.7226 48 67.5838 48 69.0902 48.4894C69.2942 48.5557 69.4953 48.6283 69.6933 48.707')"
              } : {},
              children: /* @__PURE__ */ l(
                Qr,
                {
                  src: n,
                  firstName: e,
                  lastName: t,
                  size: "xlarge"
                }
              )
            }
          ),
          r && /* @__PURE__ */ l("div", { className: "absolute -right-0.5 bottom-0.5", children: /* @__PURE__ */ l(
            ft,
            {
              label: "React",
              hideLabel: !0,
              round: !0,
              variant: "neutral",
              size: "sm",
              icon: yM
            }
          ) })
        ] }) })
      ]
    }
  );
}
var bl = {};
(function e(t, n, r, o) {
  var i = !!(t.Worker && t.Blob && t.Promise && t.OffscreenCanvas && t.OffscreenCanvasRenderingContext2D && t.HTMLCanvasElement && t.HTMLCanvasElement.prototype.transferControlToOffscreen && t.URL && t.URL.createObjectURL), a = typeof Path2D == "function" && typeof DOMMatrix == "function", s = function() {
    if (!t.OffscreenCanvas)
      return !1;
    var M = new OffscreenCanvas(1, 1), S = M.getContext("2d");
    S.fillRect(0, 0, 1, 1);
    var q = M.transferToImageBitmap();
    try {
      S.createPattern(q, "no-repeat");
    } catch {
      return !1;
    }
    return !0;
  }();
  function c() {
  }
  function u(M) {
    var S = n.exports.Promise, q = S !== void 0 ? S : t.Promise;
    return typeof q == "function" ? new q(M) : (M(c, c), null);
  }
  var d = /* @__PURE__ */ function(M, S) {
    return {
      transform: function(q) {
        if (M)
          return q;
        if (S.has(q))
          return S.get(q);
        var re = new OffscreenCanvas(q.width, q.height), ae = re.getContext("2d");
        return ae.drawImage(q, 0, 0), S.set(q, re), re;
      },
      clear: function() {
        S.clear();
      }
    };
  }(s, /* @__PURE__ */ new Map()), f = function() {
    var M = Math.floor(16.666666666666668), S, q, re = {}, ae = 0;
    return typeof requestAnimationFrame == "function" && typeof cancelAnimationFrame == "function" ? (S = function(de) {
      var ce = Math.random();
      return re[ce] = requestAnimationFrame(function O(Y) {
        ae === Y || ae + M - 1 < Y ? (ae = Y, delete re[ce], de()) : re[ce] = requestAnimationFrame(O);
      }), ce;
    }, q = function(de) {
      re[de] && cancelAnimationFrame(re[de]);
    }) : (S = function(de) {
      return setTimeout(de, M);
    }, q = function(de) {
      return clearTimeout(de);
    }), { frame: S, cancel: q };
  }(), h = /* @__PURE__ */ function() {
    var M, S, q = {};
    function re(ae) {
      function de(ce, O) {
        ae.postMessage({ options: ce || {}, callback: O });
      }
      ae.init = function(O) {
        var Y = O.transferControlToOffscreen();
        ae.postMessage({ canvas: Y }, [Y]);
      }, ae.fire = function(O, Y, se) {
        if (S)
          return de(O, null), S;
        var ie = Math.random().toString(36).slice(2);
        return S = u(function(Z) {
          function B(ue) {
            ue.data.callback === ie && (delete q[ie], ae.removeEventListener("message", B), S = null, d.clear(), se(), Z());
          }
          ae.addEventListener("message", B), de(O, ie), q[ie] = B.bind(null, { data: { callback: ie } });
        }), S;
      }, ae.reset = function() {
        ae.postMessage({ reset: !0 });
        for (var O in q)
          q[O](), delete q[O];
      };
    }
    return function() {
      if (M)
        return M;
      if (!r && i) {
        var ae = [
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
          M = new Worker(URL.createObjectURL(new Blob([ae])));
        } catch (de) {
          return typeof console !== void 0 && typeof console.warn == "function" && console.warn("🎊 Could not load worker", de), null;
        }
        re(M);
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
  function p(M, S) {
    return S ? S(M) : M;
  }
  function v(M) {
    return M != null;
  }
  function y(M, S, q) {
    return p(
      M && v(M[S]) ? M[S] : g[S],
      q
    );
  }
  function w(M) {
    return M < 0 ? 0 : Math.floor(M);
  }
  function b(M, S) {
    return Math.floor(Math.random() * (S - M)) + M;
  }
  function x(M) {
    return parseInt(M, 16);
  }
  function P(M) {
    return M.map(T);
  }
  function T(M) {
    var S = String(M).replace(/[^0-9a-f]/gi, "");
    return S.length < 6 && (S = S[0] + S[0] + S[1] + S[1] + S[2] + S[2]), {
      r: x(S.substring(0, 2)),
      g: x(S.substring(2, 4)),
      b: x(S.substring(4, 6))
    };
  }
  function R(M) {
    var S = y(M, "origin", Object);
    return S.x = y(S, "x", Number), S.y = y(S, "y", Number), S;
  }
  function F(M) {
    M.width = document.documentElement.clientWidth, M.height = document.documentElement.clientHeight;
  }
  function D(M) {
    var S = M.getBoundingClientRect();
    M.width = S.width, M.height = S.height;
  }
  function _(M) {
    var S = document.createElement("canvas");
    return S.style.position = "fixed", S.style.top = "0px", S.style.left = "0px", S.style.pointerEvents = "none", S.style.zIndex = M, S;
  }
  function j(M, S, q, re, ae, de, ce, O, Y) {
    M.save(), M.translate(S, q), M.rotate(de), M.scale(re, ae), M.arc(0, 0, 1, ce, O, Y), M.restore();
  }
  function te(M) {
    var S = M.angle * (Math.PI / 180), q = M.spread * (Math.PI / 180);
    return {
      x: M.x,
      y: M.y,
      wobble: Math.random() * 10,
      wobbleSpeed: Math.min(0.11, Math.random() * 0.1 + 0.05),
      velocity: M.startVelocity * 0.5 + Math.random() * M.startVelocity,
      angle2D: -S + (0.5 * q - Math.random() * q),
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
  function G(M, S) {
    S.x += Math.cos(S.angle2D) * S.velocity + S.drift, S.y += Math.sin(S.angle2D) * S.velocity + S.gravity, S.velocity *= S.decay, S.flat ? (S.wobble = 0, S.wobbleX = S.x + 10 * S.scalar, S.wobbleY = S.y + 10 * S.scalar, S.tiltSin = 0, S.tiltCos = 0, S.random = 1) : (S.wobble += S.wobbleSpeed, S.wobbleX = S.x + 10 * S.scalar * Math.cos(S.wobble), S.wobbleY = S.y + 10 * S.scalar * Math.sin(S.wobble), S.tiltAngle += 0.1, S.tiltSin = Math.sin(S.tiltAngle), S.tiltCos = Math.cos(S.tiltAngle), S.random = Math.random() + 2);
    var q = S.tick++ / S.totalTicks, re = S.x + S.random * S.tiltCos, ae = S.y + S.random * S.tiltSin, de = S.wobbleX + S.random * S.tiltCos, ce = S.wobbleY + S.random * S.tiltSin;
    if (M.fillStyle = "rgba(" + S.color.r + ", " + S.color.g + ", " + S.color.b + ", " + (1 - q) + ")", M.beginPath(), a && S.shape.type === "path" && typeof S.shape.path == "string" && Array.isArray(S.shape.matrix))
      M.fill(V(
        S.shape.path,
        S.shape.matrix,
        S.x,
        S.y,
        Math.abs(de - re) * 0.1,
        Math.abs(ce - ae) * 0.1,
        Math.PI / 10 * S.wobble
      ));
    else if (S.shape.type === "bitmap") {
      var O = Math.PI / 10 * S.wobble, Y = Math.abs(de - re) * 0.1, se = Math.abs(ce - ae) * 0.1, ie = S.shape.bitmap.width * S.scalar, Z = S.shape.bitmap.height * S.scalar, B = new DOMMatrix([
        Math.cos(O) * Y,
        Math.sin(O) * Y,
        -Math.sin(O) * se,
        Math.cos(O) * se,
        S.x,
        S.y
      ]);
      B.multiplySelf(new DOMMatrix(S.shape.matrix));
      var ue = M.createPattern(d.transform(S.shape.bitmap), "no-repeat");
      ue.setTransform(B), M.globalAlpha = 1 - q, M.fillStyle = ue, M.fillRect(
        S.x - ie / 2,
        S.y - Z / 2,
        ie,
        Z
      ), M.globalAlpha = 1;
    } else if (S.shape === "circle")
      M.ellipse ? M.ellipse(S.x, S.y, Math.abs(de - re) * S.ovalScalar, Math.abs(ce - ae) * S.ovalScalar, Math.PI / 10 * S.wobble, 0, 2 * Math.PI) : j(M, S.x, S.y, Math.abs(de - re) * S.ovalScalar, Math.abs(ce - ae) * S.ovalScalar, Math.PI / 10 * S.wobble, 0, 2 * Math.PI);
    else if (S.shape === "star")
      for (var oe = Math.PI / 2 * 3, pe = 4 * S.scalar, Se = 8 * S.scalar, Me = S.x, C = S.y, k = 5, A = Math.PI / k; k--; )
        Me = S.x + Math.cos(oe) * Se, C = S.y + Math.sin(oe) * Se, M.lineTo(Me, C), oe += A, Me = S.x + Math.cos(oe) * pe, C = S.y + Math.sin(oe) * pe, M.lineTo(Me, C), oe += A;
    else
      M.moveTo(Math.floor(S.x), Math.floor(S.y)), M.lineTo(Math.floor(S.wobbleX), Math.floor(ae)), M.lineTo(Math.floor(de), Math.floor(ce)), M.lineTo(Math.floor(re), Math.floor(S.wobbleY));
    return M.closePath(), M.fill(), S.tick < S.totalTicks;
  }
  function $(M, S, q, re, ae) {
    var de = S.slice(), ce = M.getContext("2d"), O, Y, se = u(function(ie) {
      function Z() {
        O = Y = null, ce.clearRect(0, 0, re.width, re.height), d.clear(), ae(), ie();
      }
      function B() {
        r && !(re.width === o.width && re.height === o.height) && (re.width = M.width = o.width, re.height = M.height = o.height), !re.width && !re.height && (q(M), re.width = M.width, re.height = M.height), ce.clearRect(0, 0, re.width, re.height), de = de.filter(function(ue) {
          return G(ce, ue);
        }), de.length ? O = f.frame(B) : Z();
      }
      O = f.frame(B), Y = Z;
    });
    return {
      addFettis: function(ie) {
        return de = de.concat(ie), se;
      },
      canvas: M,
      promise: se,
      reset: function() {
        O && f.cancel(O), Y && Y();
      }
    };
  }
  function I(M, S) {
    var q = !M, re = !!y(S || {}, "resize"), ae = !1, de = y(S, "disableForReducedMotion", Boolean), ce = i && !!y(S || {}, "useWorker"), O = ce ? h() : null, Y = q ? F : D, se = M && O ? !!M.__confetti_initialized : !1, ie = typeof matchMedia == "function" && matchMedia("(prefers-reduced-motion)").matches, Z;
    function B(oe, pe, Se) {
      for (var Me = y(oe, "particleCount", w), C = y(oe, "angle", Number), k = y(oe, "spread", Number), A = y(oe, "startVelocity", Number), Q = y(oe, "decay", Number), K = y(oe, "gravity", Number), U = y(oe, "drift", Number), le = y(oe, "colors", P), ge = y(oe, "ticks", Number), Ee = y(oe, "shapes"), Ae = y(oe, "scalar"), yt = !!y(oe, "flat"), tn = R(oe), rt = Me, bt = [], mn = M.width * tn.x, Vt = M.height * tn.y; rt--; )
        bt.push(
          te({
            x: mn,
            y: Vt,
            angle: C,
            spread: k,
            startVelocity: A,
            color: le[rt % le.length],
            shape: Ee[b(0, Ee.length)],
            ticks: ge,
            decay: Q,
            gravity: K,
            drift: U,
            scalar: Ae,
            flat: yt
          })
        );
      return Z ? Z.addFettis(bt) : (Z = $(M, bt, Y, pe, Se), Z.promise);
    }
    function ue(oe) {
      var pe = de || y(oe, "disableForReducedMotion", Boolean), Se = y(oe, "zIndex", Number);
      if (pe && ie)
        return u(function(A) {
          A();
        });
      q && Z ? M = Z.canvas : q && !M && (M = _(Se), document.body.appendChild(M)), re && !se && Y(M);
      var Me = {
        width: M.width,
        height: M.height
      };
      O && !se && O.init(M), se = !0, O && (M.__confetti_initialized = !0);
      function C() {
        if (O) {
          var A = {
            getBoundingClientRect: function() {
              if (!q)
                return M.getBoundingClientRect();
            }
          };
          Y(A), O.postMessage({
            resize: {
              width: A.width,
              height: A.height
            }
          });
          return;
        }
        Me.width = Me.height = null;
      }
      function k() {
        Z = null, re && (ae = !1, t.removeEventListener("resize", C)), q && M && (document.body.contains(M) && document.body.removeChild(M), M = null, se = !1);
      }
      return re && !ae && (ae = !0, t.addEventListener("resize", C, !1)), O ? O.fire(oe, Me, k) : B(oe, Me, k);
    }
    return ue.reset = function() {
      O && O.reset(), Z && Z.reset();
    }, ue;
  }
  var L;
  function H() {
    return L || (L = I(null, { useWorker: !0, resize: !0 })), L;
  }
  function V(M, S, q, re, ae, de, ce) {
    var O = new Path2D(M), Y = new Path2D();
    Y.addPath(O, new DOMMatrix(S));
    var se = new Path2D();
    return se.addPath(Y, new DOMMatrix([
      Math.cos(ce) * ae,
      Math.sin(ce) * ae,
      -Math.sin(ce) * de,
      Math.cos(ce) * de,
      q,
      re
    ])), se;
  }
  function W(M) {
    if (!a)
      throw new Error("path confetti are not supported in this browser");
    var S, q;
    typeof M == "string" ? S = M : (S = M.path, q = M.matrix);
    var re = new Path2D(S), ae = document.createElement("canvas"), de = ae.getContext("2d");
    if (!q) {
      for (var ce = 1e3, O = ce, Y = ce, se = 0, ie = 0, Z, B, ue = 0; ue < ce; ue += 2)
        for (var oe = 0; oe < ce; oe += 2)
          de.isPointInPath(re, ue, oe, "nonzero") && (O = Math.min(O, ue), Y = Math.min(Y, oe), se = Math.max(se, ue), ie = Math.max(ie, oe));
      Z = se - O, B = ie - Y;
      var pe = 10, Se = Math.min(pe / Z, pe / B);
      q = [
        Se,
        0,
        0,
        Se,
        -Math.round(Z / 2 + O) * Se,
        -Math.round(B / 2 + Y) * Se
      ];
    }
    return {
      type: "path",
      path: S,
      matrix: q
    };
  }
  function z(M) {
    var S, q = 1, re = "#000000", ae = '"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif';
    typeof M == "string" ? S = M : (S = M.text, q = "scalar" in M ? M.scalar : q, ae = "fontFamily" in M ? M.fontFamily : ae, re = "color" in M ? M.color : re);
    var de = 10 * q, ce = "" + de + "px " + ae, O = new OffscreenCanvas(de, de), Y = O.getContext("2d");
    Y.font = ce;
    var se = Y.measureText(S), ie = Math.ceil(se.actualBoundingBoxRight + se.actualBoundingBoxLeft), Z = Math.ceil(se.actualBoundingBoxAscent + se.actualBoundingBoxDescent), B = 2, ue = se.actualBoundingBoxLeft + B, oe = se.actualBoundingBoxAscent + B;
    ie += B + B, Z += B + B, O = new OffscreenCanvas(ie, Z), Y = O.getContext("2d"), Y.font = ce, Y.fillStyle = re, Y.fillText(S, ue, oe);
    var pe = 1 / q;
    return {
      type: "bitmap",
      // TODO these probably need to be transfered for workers
      bitmap: O.transferToImageBitmap(),
      matrix: [pe, 0, 0, pe, -ie * pe / 2, -Z * pe / 2]
    };
  }
  n.exports = function() {
    return H().apply(this, arguments);
  }, n.exports.reset = function() {
    H().reset();
  }, n.exports.create = I, n.exports.shapeFromPath = W, n.exports.shapeFromText = z;
})(/* @__PURE__ */ function() {
  return typeof window < "u" ? window : typeof self < "u" ? self : this || {};
}(), bl, !1);
const qT = bl.exports;
bl.exports.create;
function ZT(e) {
  const t = Ve(null), n = Ve(), r = It(() => {
    const i = t.current;
    if (!i) return;
    const a = qT.create(i, {
      resize: !0,
      useWorker: !1
    }), s = ["9D76F3", "3FC495", "E61D46", "F6AF3D"], c = 0.1;
    n.current = setInterval(() => {
      a({
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
          s[Math.floor(Math.random() * s.length)]
        ]
      });
    }, 100);
  }, [e]), o = It(() => {
    clearInterval(n.current);
  }, []);
  return { canvasRef: t, handleMouseEnter: r, handleMouseLeave: o };
}
const QT = ({
  link: e,
  firstName: t,
  lastName: n,
  src: r,
  canReact: o = !0,
  type: i,
  typeLabel: a,
  date: s
}) => {
  const c = ai(), { canvasRef: u, handleMouseEnter: d, handleMouseLeave: f } = ZT(c), h = a0({
    emoji: KT[i],
    size: "sm"
  });
  return /* @__PURE__ */ N(
    Jt,
    {
      href: e,
      className: E(
        "relative flex flex-col rounded-xl border border-solid border-f1-border-secondary bg-f1-background-inverse-secondary no-underline transition-shadow hover:shadow",
        mt()
      ),
      onMouseEnter: c ? void 0 : d,
      onMouseLeave: c ? void 0 : f,
      children: [
        /* @__PURE__ */ l(
          "canvas",
          {
            ref: u,
            className: "pointer-events-none absolute inset-0 z-50 h-full w-full"
          }
        ),
        /* @__PURE__ */ l("div", { className: "basis-2/3 px-1 pt-1", children: /* @__PURE__ */ l(
          XT,
          {
            firstName: t,
            lastName: n,
            src: r,
            canReact: o
          }
        ) }),
        /* @__PURE__ */ N("div", { className: "flex basis-1/3 flex-row justify-between gap-2 p-3", children: [
          /* @__PURE__ */ N("div", { className: "flex min-w-0 flex-1 flex-col", children: [
            /* @__PURE__ */ N("div", { className: "truncate font-medium text-f1-foreground", children: [
              t,
              " ",
              n
            ] }),
            /* @__PURE__ */ N("div", { className: "flex flex-row items-center gap-1.5 text-f1-foreground-secondary", children: [
              /* @__PURE__ */ l("span", { className: "truncate", children: a }),
              /* @__PURE__ */ l("span", { className: "shrink-0 leading-none", children: h })
            ] })
          ] }),
          /* @__PURE__ */ l("div", { className: "shrink-0", children: /* @__PURE__ */ l(os, { date: s }) })
        ] })
      ]
    }
  );
}, JT = () => /* @__PURE__ */ N(
  "div",
  {
    className: "bg-f1-background-inverse-secondar flex flex-col rounded-xl border border-solid border-f1-border-secondary",
    role: "status",
    "aria-busy": "true",
    "aria-live": "polite",
    children: [
      /* @__PURE__ */ l("div", { className: "basis-2/3 px-1 pt-1", children: /* @__PURE__ */ l(Rt, { className: "h-32 w-full rounded-lg" }) }),
      /* @__PURE__ */ l("div", { className: "flex basis-1/3 flex-row justify-between gap-2 p-3", children: /* @__PURE__ */ l("div", { className: "flex min-w-0 flex-1 flex-col", children: /* @__PURE__ */ N("div", { className: "flex flex-col gap-2 py-1", children: [
        /* @__PURE__ */ l(Rt, { className: "h-3 w-2/3" }),
        /* @__PURE__ */ l(Rt, { className: "h-3 w-1/3" })
      ] }) }) })
    ]
  }
), Q5 = gt(QT, JT), ek = Ie(
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
), tk = Ie(
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
), nk = "M50,0 C43,0 36,0 30,1 23,2 17,5 12,9 5,16 1,25 0,36 0,43 0,57 0,64 1,75 5,84 12,91 17,95 23,98 30,99 36,100 43,100 50,100 57,100 64,100 70,99 77,98 83,95 88,91 95,84 99,75 100,64 100,57 100,43 100,36 99,25 95,16 88,9 83,5 77,2 70,1 64,0 57,0 50,0";
function Oi({ size: e = "md", icon: t }) {
  const n = t;
  return /* @__PURE__ */ N("div", { className: ek({ size: e }), children: [
    /* @__PURE__ */ N(
      "svg",
      {
        viewBox: "0 0 100 100",
        className: "absolute h-full w-full",
        preserveAspectRatio: "none",
        children: [
          /* @__PURE__ */ l("defs", { children: /* @__PURE__ */ N("linearGradient", { id: "gradient", x1: "0%", y1: "0%", x2: "100%", y2: "100%", children: [
            /* @__PURE__ */ l("stop", { offset: "0%", stopColor: "#FF355E" }),
            /* @__PURE__ */ l("stop", { offset: "44%", stopColor: "#FF355E" }),
            /* @__PURE__ */ l("stop", { offset: "100%", stopColor: "#D62D4F" })
          ] }) }),
          /* @__PURE__ */ l("path", { d: nk, fill: "url(#gradient)" })
        ]
      }
    ),
    /* @__PURE__ */ l(n, { className: tk({ size: e }) })
  ] });
}
const rk = (e, t) => /* @__PURE__ */ l("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: /* @__PURE__ */ l("path", { fill: "currentColor", d: "M11.8951 5.95457C11.9312 5.98204 11.9661 6.00955 12 6.037C12.0339 6.00955 12.0688 5.98204 12.1049 5.95457C12.7472 5.46517 13.7214 5 15.0625 5C16.4958 5 17.7381 5.70182 18.6005 6.67667C19.4599 7.64807 20 8.95087 20 10.2857C20 11.6236 19.4578 12.8943 18.7467 13.9972C18.0305 15.1081 17.0931 16.1261 16.1844 16.9791C15.272 17.8356 14.3638 18.5488 13.6858 19.047C13.346 19.2966 13.0618 19.4939 12.861 19.6297C12.7606 19.6976 12.6809 19.7502 12.6254 19.7865C12.5976 19.8046 12.5759 19.8187 12.5606 19.8285L12.5426 19.84L12.5374 19.8433L12.5346 19.8451C12.2081 20.0516 11.7919 20.0516 11.4654 19.8451L12 19C11.4654 19.8451 11.4643 19.8444 11.4643 19.8444L11.4626 19.8433L11.4574 19.84L11.4394 19.8285C11.4241 19.8187 11.4024 19.8046 11.3746 19.7865C11.3191 19.7502 11.2394 19.6976 11.139 19.6297C10.9382 19.4939 10.654 19.2966 10.3142 19.047C9.63618 18.5488 8.72799 17.8356 7.81556 16.9791C6.90694 16.1261 5.96949 15.1081 5.25329 13.9972C4.54219 12.8943 4 11.6236 4 10.2857C4 7.14266 6.65475 5 8.9375 5C10.2786 5 11.2528 5.46517 11.8951 5.95457Z", vectorEffect: "non-scaling-stroke" }) }), ok = X(rk), J5 = ({
  title: e,
  subtitle: t,
  buttonLabel: n,
  onClick: r
}) => /* @__PURE__ */ N("div", { className: "flex w-full flex-col items-start justify-between gap-4 rounded-md bg-gradient-to-r from-[#F5A51C]/30 via-[#E51943]/30 to-[#5596F6]/30 px-3 py-3 ring-1 ring-inset ring-f1-border-secondary sm:flex-row sm:items-center sm:px-4", children: [
  /* @__PURE__ */ N("div", { className: "flex flex-col items-start gap-3 sm:flex-row sm:items-center", children: [
    /* @__PURE__ */ l(Oi, { icon: ok, size: "lg" }),
    /* @__PURE__ */ N("div", { className: "flex flex-col gap-0", children: [
      /* @__PURE__ */ l("span", { className: "font-medium text-f1-foreground", children: e }),
      /* @__PURE__ */ l("span", { className: "text-f1-foreground-secondary", children: t })
    ] })
  ] }),
  /* @__PURE__ */ l("div", { className: "w-full sm:w-fit", children: /* @__PURE__ */ l(
    Sn,
    {
      variant: "outline",
      onClick: r,
      className: "w-full sm:w-auto",
      children: n
    }
  ) })
] }), ik = Ie(
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
function wl({ size: e, type: t, value: n, maxValue: r }) {
  const o = r && n > r ? `+${r}` : n;
  return /* @__PURE__ */ l("div", { className: ik({ size: e, type: t }), children: o });
}
function xl({
  title: e,
  avatar: t,
  description: n,
  eyebrow: r,
  footer: o,
  primaryAction: i,
  secondaryActions: a
}) {
  return /* @__PURE__ */ N("div", { className: "flex flex-col items-start justify-start gap-4 p-8 md:flex-row", children: [
    /* @__PURE__ */ N("div", { className: "flex grow flex-col items-start justify-start gap-4 md:flex-row md:items-center", children: [
      t && /* @__PURE__ */ l("div", { className: "flex items-start", children: ll(t, "large") }),
      /* @__PURE__ */ N("div", { className: "flex flex-col gap-1", children: [
        r && /* @__PURE__ */ l("div", { className: "w-fit text-f1-foreground-secondary", children: r }),
        /* @__PURE__ */ l("span", { className: "text-xl font-semibold text-f1-foreground", children: e }),
        n && /* @__PURE__ */ l("div", { className: "text-lg text-f1-foreground-secondary", children: n }),
        o && /* @__PURE__ */ l("div", { className: "w-fit text-f1-foreground-secondary", children: o })
      ] })
    ] }),
    /* @__PURE__ */ N(
      "div",
      {
        className: E(
          "flex shrink-0 flex-wrap items-center gap-x-3 gap-y-2 overflow-x-auto md:flex-row-reverse",
          t && "md:pt-1.5"
        ),
        children: [
          i && /* @__PURE__ */ l(
            ft,
            {
              label: i.label,
              onClick: i.onClick,
              variant: "default",
              icon: i.icon
            }
          ),
          i && a && /* @__PURE__ */ l("div", { className: "hidden h-4 w-px bg-f1-background-secondary md:block" }),
          a && a.map((s) => /* @__PURE__ */ l(
            ft,
            {
              label: s.label,
              onClick: s.onClick,
              variant: s.variant ?? "outline",
              icon: s.icon
            },
            s.label
          ))
        ]
      }
    )
  ] });
}
const eR = ({
  name: e,
  description: t,
  src: n,
  primaryAction: r,
  secondaryActions: o
}) => /* @__PURE__ */ l(
  xl,
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
), tR = ({
  firstName: e,
  lastName: t,
  description: n,
  src: r,
  primaryAction: o,
  secondaryActions: i
}) => /* @__PURE__ */ l(
  xl,
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
), ak = (e, t) => {
  if (t.disallowEmpty && e.length === 0)
    throw Error("You need to provide some text that is not empty");
  if (t.maxLength !== void 0 && e.length > t.maxLength)
    throw Error(
      `"${e}" should have no more than ${t.maxLength} characters`
    );
  if (t.minLength !== void 0 && e.length < t.minLength)
    throw Error(`"${e}" should have at least ${t.minLength} characters`);
}, kn = (e, t) => {
  Fe(() => {
    e !== void 0 && t && ak(e, t);
  }, [e, t]);
}, En = X(
  ({ left: e, text: t, additionalAccesibleText: n, onClick: r, className: o }, i) => /* @__PURE__ */ N(
    "div",
    {
      ref: i,
      className: E(
        "line-clamp-1 flex flex-row items-center justify-start gap-0.5 rounded-full py-0.5 pr-2 text-base font-medium",
        r && "cursor-pointer hover:bg-f1-background-hover",
        !t && "aspect-square w-6 items-center justify-center p-1",
        e ? "pl-1" : "pl-2",
        o
      ),
      onClick: r,
      children: [
        e,
        !!t && /* @__PURE__ */ l("span", { children: t }),
        n && /* @__PURE__ */ l("span", { className: "sr-only", children: n })
      ]
    }
  )
);
En.displayName = "BaseTag";
const Lr = X(
  ({ text: e, additionalAccesibleText: t, variant: n }, r) => (kn(e, { disallowEmpty: !0 }), /* @__PURE__ */ l(
    En,
    {
      ref: r,
      className: E(
        {
          neutral: "bg-f1-background-secondary text-f1-foreground-secondary",
          info: "bg-f1-background-info text-f1-foreground-info",
          positive: "bg-f1-background-positive text-f1-foreground-positive",
          warning: "bg-f1-background-warning text-f1-foreground-warning",
          critical: "bg-f1-background-critical text-f1-foreground-critical"
        }[n]
      ),
      left: /* @__PURE__ */ l(
        "div",
        {
          className: E(
            "m-1 aspect-square w-2 rounded-full",
            {
              neutral: "bg-f1-icon",
              info: "bg-f1-icon-info",
              positive: "bg-f1-icon-positive",
              warning: "bg-f1-icon-warning",
              critical: "bg-f1-icon-critical"
            }[n]
          ),
          "aria-hidden": !0
        }
      ),
      additionalAccesibleText: t,
      text: e
    }
  ))
);
Lr.displayName = "StatusTag";
const nR = ({
  title: e,
  description: t,
  primaryAction: n,
  secondaryActions: r,
  status: o
}) => /* @__PURE__ */ l(
  xl,
  {
    title: e,
    description: t,
    primaryAction: n,
    secondaryActions: r,
    eyebrow: o && /* @__PURE__ */ l(Lr, { text: o.label, variant: o.variant })
  }
), sk = Ie(
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
), fd = {
  cmd: XN
};
function pg({ keys: e, variant: t }) {
  return /* @__PURE__ */ l("div", { className: "flex flex-wrap items-center gap-0.5", children: e.map((n, r) => {
    const o = n.toLowerCase(), i = o in fd;
    return /* @__PURE__ */ l(
      "kbd",
      {
        className: E(
          sk({ variant: t }),
          i ? "w-5 px-0.5" : "min-w-5 px-1"
        ),
        children: i ? /* @__PURE__ */ l(be, { icon: fd[o], size: "sm" }) : n
      },
      r
    );
  }) });
}
const lk = Ie(
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
function rR({ size: e, className: t }) {
  return /* @__PURE__ */ l(
    "div",
    {
      className: E(lk({ size: e, className: t })),
      "aria-live": "polite",
      "aria-busy": !0,
      children: /* @__PURE__ */ N(
        "svg",
        {
          viewBox: "0 0 32 32",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          className: "h-full w-full",
          children: [
            /* @__PURE__ */ l(
              "circle",
              {
                cx: "16",
                cy: "16",
                r: "12",
                className: "stroke-f1-background-secondary"
              }
            ),
            /* @__PURE__ */ l(
              Nt.circle,
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
const ck = {
  info: um,
  warning: dm,
  critical: im
}, Cl = X(
  ({ text: e, level: t }, n) => (kn(e, { disallowEmpty: !0 }), /* @__PURE__ */ l(
    En,
    {
      ref: n,
      className: E(
        "pl-0.5",
        {
          info: "bg-f1-background-info text-f1-foreground-info",
          warning: "bg-f1-background-warning text-f1-foreground-warning",
          critical: "bg-f1-background-critical text-f1-foreground-critical"
        }[t]
      ),
      left: /* @__PURE__ */ l(
        Mr,
        {
          icon: ck[t],
          size: "md",
          "aria-hidden": !0,
          className: E(
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
Cl.displayName = "AlertTag";
const uk = {
  positive: BN,
  negative: LN
}, dk = X(
  ({ text: e, status: t }, n) => (kn(e, { disallowEmpty: !0 }), /* @__PURE__ */ l(
    En,
    {
      ref: n,
      className: E(
        {
          positive: "bg-f1-background-positive text-f1-foreground-positive",
          neutral: "bg-f1-background-secondary text-f1-foreground-secondary",
          negative: "bg-f1-background-critical text-f1-foreground-critical"
        }[t]
      ),
      left: t === "neutral" ? null : /* @__PURE__ */ l(
        Mr,
        {
          icon: uk[t],
          size: "sm",
          className: E(
            {
              positive: "text-f1-icon-positive",
              neutral: "text-f1-icon-secondary",
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
dk.displayName = "BalanceTag";
const Fi = X(
  ({ imageUrl: e, text: t, rounded: n = !1, onClick: r }, o) => (kn(t, { disallowEmpty: !0 }), /* @__PURE__ */ l(
    En,
    {
      ref: o,
      className: E(
        "gap-1 border-[1px] border-solid border-f1-border-secondary py-[1px] pl-[1px]",
        n ? "rounded-full" : "rounded-[8px]"
      ),
      left: /* @__PURE__ */ l(
        "img",
        {
          src: e,
          "aria-hidden": !0,
          className: E(
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
Fi.displayName = "ImageTag";
const fk = X(
  ({ companyName: e, companyImageUrl: t, onClick: n }, r) => /* @__PURE__ */ l(
    Fi,
    {
      ref: r,
      imageUrl: t,
      text: e,
      onClick: n
    }
  )
);
fk.displayName = "CompanyTag";
const hk = {
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
  },
  special: {
    highlight: "348 80% 50%"
  }
}, mk = X(
  ({ text: e, color: t }, n) => {
    kn(e, { disallowEmpty: !0 });
    const r = hk[t][50];
    return /* @__PURE__ */ l(
      En,
      {
        ref: n,
        className: "border-[1px] border-solid border-f1-border-secondary",
        left: /* @__PURE__ */ l(
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
mk.displayName = "DotTag";
const pk = X(
  ({ name: e, avatarUrl: t, onClick: n }, r) => /* @__PURE__ */ l(
    Fi,
    {
      ref: r,
      imageUrl: t,
      text: e,
      onClick: n,
      rounded: !0
    }
  )
);
pk.displayName = "PersonTag";
const Sl = X(
  ({ text: e, additionalAccesibleText: t, icon: n }, r) => (kn(e, { disallowEmpty: !0 }), /* @__PURE__ */ l(
    En,
    {
      ref: r,
      className: E("border-[1px] border-solid border-f1-border-secondary"),
      left: n ? /* @__PURE__ */ l(Mr, { icon: n, size: "sm", className: "text-f1-icon", "aria-hidden": !0 }) : null,
      text: e,
      additionalAccesibleText: t
    }
  ))
);
Sl.displayName = "RawTag";
const gk = X(
  ({ teamName: e, teamImageUrl: t, onClick: n }, r) => /* @__PURE__ */ l(
    Fi,
    {
      ref: r,
      imageUrl: t,
      text: e,
      onClick: n
    }
  )
);
gk.displayName = "TeamTag";
const gg = nt(void 0);
function Vi() {
  const e = Pe(gg);
  return e === void 0 ? {
    isSmallScreen: !1,
    sidebarState: "locked",
    toggleSidebar: () => {
    }
  } : e;
}
function vk({ children: e }) {
  const { currentPath: t } = ms(), n = s0("(max-width: 900px)", {
    initializeWithValue: !0
  }), [r, o] = ke(!0), [i, a] = ke(!1), s = It(() => {
    n && a(!i), o(!r);
  }, [n, i, r, o, a]), c = It(
    (d) => {
      n || (d.clientX < 32 && a(!0), d.clientX > 280 && a(!1));
    },
    [n, a]
  ), u = n ? i ? "unlocked" : "hidden" : !r && !i ? "hidden" : !r && i ? "unlocked" : "locked";
  return Fe(() => {
    a(!1);
  }, [t]), /* @__PURE__ */ l(
    gg.Provider,
    {
      value: {
        isSmallScreen: n,
        sidebarState: u,
        toggleSidebar: s
      },
      children: /* @__PURE__ */ l("div", { onPointerMove: c, className: "h-screen w-screen", children: e })
    }
  );
}
function oR({
  children: e,
  sidebar: t,
  banner: n
}) {
  return /* @__PURE__ */ l(vk, { children: /* @__PURE__ */ l(bk, { sidebar: t, banner: n, children: e }) });
}
const yk = ({ contentId: e }) => /* @__PURE__ */ l(
  "a",
  {
    href: `#${e}`,
    className: mt(
      "absolute z-50 -translate-y-full translate-x-4 rounded-md bg-f1-background px-4 py-2.5 text-base font-medium text-f1-foreground no-underline transition-transform duration-200 focus-visible:translate-y-4"
    ),
    children: "Skip to content"
  }
);
function bk({
  children: e,
  sidebar: t,
  banner: n
}) {
  const { sidebarState: r, toggleSidebar: o, isSmallScreen: i } = Vi(), a = ai();
  return /* @__PURE__ */ N(xe, { children: [
    /* @__PURE__ */ l(yk, { contentId: "content" }),
    /* @__PURE__ */ l(
      l0,
      {
        reducedMotion: a ? "always" : "never",
        transition: {
          ease: [0.25, 0.1, 0.25, 1],
          duration: a ? 0 : 0.2
        },
        children: /* @__PURE__ */ N("div", { className: "grid h-screen grid-cols-1 grid-rows-[auto_minmax(0,1fr)] items-stretch", children: [
          /* @__PURE__ */ l("div", { className: "col-[1/-1]", children: n }),
          /* @__PURE__ */ N("div", { className: "relative isolate flex h-full", children: [
            /* @__PURE__ */ l(js, { children: r === "unlocked" && /* @__PURE__ */ l(
              Nt.div,
              {
                className: E("fixed inset-0 z-[5] bg-f1-background-bold", {
                  hidden: !i
                }),
                initial: { opacity: 0 },
                animate: { opacity: 0.1 },
                exit: { opacity: 0 },
                transition: { duration: a ? 0 : 0.2 },
                onClick: o
              }
            ) }),
            /* @__PURE__ */ l(
              "div",
              {
                className: E(
                  { "transition-all": !a },
                  r === "locked" ? "w-[240px] shrink-0 pl-3" : "w-0"
                ),
                children: t
              }
            ),
            /* @__PURE__ */ l(
              Nt.main,
              {
                id: "content",
                className: E(
                  "flex max-w-full flex-1 overflow-auto xs:py-1 xs:pr-1",
                  r === "locked" ? "pl-0" : "xs:pl-1"
                ),
                layout: !0,
                transition: {
                  duration: a ? 0 : 0.3,
                  type: "spring",
                  stiffness: 300,
                  damping: 30
                },
                children: e
              }
            )
          ] })
        ] })
      }
    )
  ] });
}
function wk(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function hd(e) {
  return wk(e) || Array.isArray(e);
}
function xk() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
function Nl(e, t) {
  const n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length) return !1;
  const o = JSON.stringify(Object.keys(e.breakpoints || {})), i = JSON.stringify(Object.keys(t.breakpoints || {}));
  return o !== i ? !1 : n.every((a) => {
    const s = e[a], c = t[a];
    return typeof s == "function" ? `${s}` == `${c}` : !hd(s) || !hd(c) ? s === c : Nl(s, c);
  });
}
function md(e) {
  return e.concat().sort((t, n) => t.name > n.name ? 1 : -1).map((t) => t.options);
}
function Ck(e, t) {
  if (e.length !== t.length) return !1;
  const n = md(e), r = md(t);
  return n.every((o, i) => {
    const a = r[i];
    return Nl(o, a);
  });
}
function Ml(e) {
  return typeof e == "number";
}
function is(e) {
  return typeof e == "string";
}
function Bi(e) {
  return typeof e == "boolean";
}
function pd(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function _e(e) {
  return Math.abs(e);
}
function Pl(e) {
  return Math.sign(e);
}
function Sr(e, t) {
  return _e(e - t);
}
function Sk(e, t) {
  if (e === 0 || t === 0 || _e(e) <= _e(t)) return 0;
  const n = Sr(_e(e), _e(t));
  return _e(n / e);
}
function Nk(e) {
  return Math.round(e * 100) / 100;
}
function Or(e) {
  return Fr(e).map(Number);
}
function xt(e) {
  return e[ro(e)];
}
function ro(e) {
  return Math.max(0, e.length - 1);
}
function Tl(e, t) {
  return t === ro(e);
}
function gd(e, t = 0) {
  return Array.from(Array(e), (n, r) => t + r);
}
function Fr(e) {
  return Object.keys(e);
}
function vg(e, t) {
  return [e, t].reduce((n, r) => (Fr(r).forEach((o) => {
    const i = n[o], a = r[o], s = pd(i) && pd(a);
    n[o] = s ? vg(i, a) : a;
  }), n), {});
}
function as(e, t) {
  return typeof t.MouseEvent < "u" && e instanceof t.MouseEvent;
}
function Mk(e, t) {
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
  function a(c, u) {
    return is(e) ? n[e](c) : e(t, c, u);
  }
  return {
    measure: a
  };
}
function Vr() {
  let e = [];
  function t(o, i, a, s = {
    passive: !0
  }) {
    let c;
    if ("addEventListener" in o)
      o.addEventListener(i, a, s), c = () => o.removeEventListener(i, a, s);
    else {
      const u = o;
      u.addListener(a), c = () => u.removeListener(a);
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
function Pk(e, t, n, r) {
  const o = Vr(), i = 1e3 / 60;
  let a = null, s = 0, c = 0;
  function u() {
    o.add(e, "visibilitychange", () => {
      e.hidden && p();
    });
  }
  function d() {
    g(), o.clear();
  }
  function f(y) {
    if (!c) return;
    a || (a = y);
    const w = y - a;
    for (a = y, s += w; s >= i; )
      n(), s -= i;
    const b = s / i;
    r(b), c && (c = t.requestAnimationFrame(f));
  }
  function h() {
    c || (c = t.requestAnimationFrame(f));
  }
  function g() {
    t.cancelAnimationFrame(c), a = null, s = 0, c = 0;
  }
  function p() {
    a = null, s = 0;
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
function Tk(e, t) {
  const n = t === "rtl", r = e === "y", o = r ? "y" : "x", i = r ? "x" : "y", a = !r && n ? -1 : 1, s = d(), c = f();
  function u(p) {
    const {
      height: v,
      width: y
    } = p;
    return r ? v : y;
  }
  function d() {
    return r ? "top" : n ? "right" : "left";
  }
  function f() {
    return r ? "bottom" : n ? "left" : "right";
  }
  function h(p) {
    return p * a;
  }
  return {
    scroll: o,
    cross: i,
    startEdge: s,
    endEdge: c,
    measureSize: u,
    direction: h
  };
}
function Pn(e = 0, t = 0) {
  const n = _e(e - t);
  function r(u) {
    return u < e;
  }
  function o(u) {
    return u > t;
  }
  function i(u) {
    return r(u) || o(u);
  }
  function a(u) {
    return i(u) ? r(u) ? e : t : u;
  }
  function s(u) {
    return n ? u - n * Math.ceil((u - t) / n) : u;
  }
  return {
    length: n,
    max: t,
    min: e,
    constrain: a,
    reachedAny: i,
    reachedMax: o,
    reachedMin: r,
    removeOffset: s
  };
}
function yg(e, t, n) {
  const {
    constrain: r
  } = Pn(0, e), o = e + 1;
  let i = a(t);
  function a(h) {
    return n ? _e((o + h) % o) : r(h);
  }
  function s() {
    return i;
  }
  function c(h) {
    return i = a(h), f;
  }
  function u(h) {
    return d().set(s() + h);
  }
  function d() {
    return yg(e, s(), n);
  }
  const f = {
    get: s,
    set: c,
    add: u,
    clone: d
  };
  return f;
}
function kk(e, t, n, r, o, i, a, s, c, u, d, f, h, g, p, v, y, w, b) {
  const {
    cross: x,
    direction: P
  } = e, T = ["INPUT", "SELECT", "TEXTAREA"], R = {
    passive: !1
  }, F = Vr(), D = Vr(), _ = Pn(50, 225).constrain(g.measure(20)), j = {
    mouse: 300,
    touch: 400
  }, te = {
    mouse: 500,
    touch: 600
  }, G = p ? 43 : 25;
  let $ = !1, I = 0, L = 0, H = !1, V = !1, W = !1, z = !1;
  function M(B) {
    if (!b) return;
    function ue(pe) {
      (Bi(b) || b(B, pe)) && ce(pe);
    }
    const oe = t;
    F.add(oe, "dragstart", (pe) => pe.preventDefault(), R).add(oe, "touchmove", () => {
    }, R).add(oe, "touchend", () => {
    }).add(oe, "touchstart", ue).add(oe, "mousedown", ue).add(oe, "touchcancel", Y).add(oe, "contextmenu", Y).add(oe, "click", se, !0);
  }
  function S() {
    F.clear(), D.clear();
  }
  function q() {
    const B = z ? n : t;
    D.add(B, "touchmove", O, R).add(B, "touchend", Y).add(B, "mousemove", O, R).add(B, "mouseup", Y);
  }
  function re(B) {
    const ue = B.nodeName || "";
    return T.includes(ue);
  }
  function ae() {
    return (p ? te : j)[z ? "mouse" : "touch"];
  }
  function de(B, ue) {
    const oe = f.add(Pl(B) * -1), pe = d.byDistance(B, !p).distance;
    return p || _e(B) < _ ? pe : y && ue ? pe * 0.5 : d.byIndex(oe.get(), 0).distance;
  }
  function ce(B) {
    const ue = as(B, r);
    z = ue, W = p && ue && !B.buttons && $, $ = Sr(o.get(), a.get()) >= 2, !(ue && B.button !== 0) && (re(B.target) || (H = !0, i.pointerDown(B), u.useFriction(0).useDuration(0), o.set(a), q(), I = i.readPoint(B), L = i.readPoint(B, x), h.emit("pointerDown")));
  }
  function O(B) {
    if (!as(B, r) && B.touches.length >= 2) return Y(B);
    const oe = i.readPoint(B), pe = i.readPoint(B, x), Se = Sr(oe, I), Me = Sr(pe, L);
    if (!V && !z && (!B.cancelable || (V = Se > Me, !V)))
      return Y(B);
    const C = i.pointerMove(B);
    Se > v && (W = !0), u.useFriction(0.3).useDuration(0.75), s.start(), o.add(P(C)), B.preventDefault();
  }
  function Y(B) {
    const oe = d.byDistance(0, !1).index !== f.get(), pe = i.pointerUp(B) * ae(), Se = de(P(pe), oe), Me = Sk(pe, Se), C = G - 10 * Me, k = w + Me / 50;
    V = !1, H = !1, D.clear(), u.useDuration(C).useFriction(k), c.distance(Se, !p), z = !1, h.emit("pointerUp");
  }
  function se(B) {
    W && (B.stopPropagation(), B.preventDefault(), W = !1);
  }
  function ie() {
    return H;
  }
  return {
    init: M,
    destroy: S,
    pointerDown: ie
  };
}
function Ek(e, t) {
  let r, o;
  function i(f) {
    return f.timeStamp;
  }
  function a(f, h) {
    const p = `client${(h || e.scroll) === "x" ? "X" : "Y"}`;
    return (as(f, t) ? f : f.touches[0])[p];
  }
  function s(f) {
    return r = f, o = f, a(f);
  }
  function c(f) {
    const h = a(f) - a(o), g = i(f) - i(r) > 170;
    return o = f, g && (r = f), h;
  }
  function u(f) {
    if (!r || !o) return 0;
    const h = a(o) - a(r), g = i(f) - i(r), p = i(f) - i(o) > 170, v = h / g;
    return g && !p && _e(v) > 0.1 ? v : 0;
  }
  return {
    pointerDown: s,
    pointerMove: c,
    pointerUp: u,
    readPoint: a
  };
}
function Ak() {
  function e(n) {
    const {
      offsetTop: r,
      offsetLeft: o,
      offsetWidth: i,
      offsetHeight: a
    } = n;
    return {
      top: r,
      right: o + i,
      bottom: r + a,
      left: o,
      width: i,
      height: a
    };
  }
  return {
    measure: e
  };
}
function Dk(e) {
  function t(r) {
    return e * (r / 100);
  }
  return {
    measure: t
  };
}
function _k(e, t, n, r, o, i, a) {
  const s = [e].concat(r);
  let c, u, d = [], f = !1;
  function h(y) {
    return o.measureSize(a.measure(y));
  }
  function g(y) {
    if (!i) return;
    u = h(e), d = r.map(h);
    function w(b) {
      for (const x of b) {
        if (f) return;
        const P = x.target === e, T = r.indexOf(x.target), R = P ? u : d[T], F = h(P ? e : r[T]);
        if (_e(F - R) >= 0.5) {
          y.reInit(), t.emit("resize");
          break;
        }
      }
    }
    c = new ResizeObserver((b) => {
      (Bi(i) || i(y, b)) && w(b);
    }), n.requestAnimationFrame(() => {
      s.forEach((b) => c.observe(b));
    });
  }
  function p() {
    f = !0, c && c.disconnect();
  }
  return {
    init: g,
    destroy: p
  };
}
function Rk(e, t, n, r, o, i) {
  let a = 0, s = 0, c = o, u = i, d = e.get(), f = 0;
  function h() {
    const R = r.get() - e.get(), F = !c;
    let D = 0;
    return F ? (a = 0, n.set(r), e.set(r), D = R) : (n.set(e), a += R / c, a *= u, d += a, e.add(a), D = d - f), s = Pl(D), f = d, T;
  }
  function g() {
    const R = r.get() - t.get();
    return _e(R) < 1e-3;
  }
  function p() {
    return c;
  }
  function v() {
    return s;
  }
  function y() {
    return a;
  }
  function w() {
    return x(o);
  }
  function b() {
    return P(i);
  }
  function x(R) {
    return c = R, T;
  }
  function P(R) {
    return u = R, T;
  }
  const T = {
    direction: v,
    duration: p,
    velocity: y,
    seek: h,
    settled: g,
    useBaseFriction: b,
    useBaseDuration: w,
    useFriction: P,
    useDuration: x
  };
  return T;
}
function Ik(e, t, n, r, o) {
  const i = o.measure(10), a = o.measure(50), s = Pn(0.1, 0.99);
  let c = !1;
  function u() {
    return !(c || !e.reachedAny(n.get()) || !e.reachedAny(t.get()));
  }
  function d(g) {
    if (!u()) return;
    const p = e.reachedMin(t.get()) ? "min" : "max", v = _e(e[p] - t.get()), y = n.get() - t.get(), w = s.constrain(v / a);
    n.subtract(y * w), !g && _e(y) < i && (n.set(e.constrain(n.get())), r.useDuration(25).useBaseFriction());
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
function Lk(e, t, n, r, o) {
  const i = Pn(-t + e, 0), a = f(), s = d(), c = h();
  function u(p, v) {
    return Sr(p, v) < 1;
  }
  function d() {
    const p = a[0], v = xt(a), y = a.lastIndexOf(p), w = a.indexOf(v) + 1;
    return Pn(y, w);
  }
  function f() {
    return n.map((p, v) => {
      const {
        min: y,
        max: w
      } = i, b = i.constrain(p), x = !v, P = Tl(n, v);
      return x ? w : P || u(y, b) ? y : u(w, b) ? w : b;
    }).map((p) => parseFloat(p.toFixed(3)));
  }
  function h() {
    if (t <= e + o) return [i.max];
    if (r === "keepSnaps") return a;
    const {
      min: p,
      max: v
    } = s;
    return a.slice(p, v);
  }
  return {
    snapsContained: c,
    scrollContainLimit: s
  };
}
function Ok(e, t, n) {
  const r = t[0], o = n ? r - e : xt(t);
  return {
    limit: Pn(o, r)
  };
}
function Fk(e, t, n, r) {
  const i = t.min + 0.1, a = t.max + 0.1, {
    reachedMin: s,
    reachedMax: c
  } = Pn(i, a);
  function u(h) {
    return h === 1 ? c(n.get()) : h === -1 ? s(n.get()) : !1;
  }
  function d(h) {
    if (!u(h)) return;
    const g = e * (h * -1);
    r.forEach((p) => p.add(g));
  }
  return {
    loop: d
  };
}
function Vk(e) {
  const {
    max: t,
    length: n
  } = e;
  function r(i) {
    const a = i - t;
    return n ? a / -n : 0;
  }
  return {
    get: r
  };
}
function Bk(e, t, n, r, o) {
  const {
    startEdge: i,
    endEdge: a
  } = e, {
    groupSlides: s
  } = o, c = f().map(t.measure), u = h(), d = g();
  function f() {
    return s(r).map((v) => xt(v)[a] - v[0][i]).map(_e);
  }
  function h() {
    return r.map((v) => n[i] - v[i]).map((v) => -_e(v));
  }
  function g() {
    return s(u).map((v) => v[0]).map((v, y) => v + c[y]);
  }
  return {
    snaps: u,
    snapsAligned: d
  };
}
function Wk(e, t, n, r, o, i) {
  const {
    groupSlides: a
  } = o, {
    min: s,
    max: c
  } = r, u = d();
  function d() {
    const h = a(i), g = !e || t === "keepSnaps";
    return n.length === 1 ? [i] : g ? h : h.slice(s, c).map((p, v, y) => {
      const w = !v, b = Tl(y, v);
      if (w) {
        const x = xt(y[0]) + 1;
        return gd(x);
      }
      if (b) {
        const x = ro(i) - xt(y)[0] + 1;
        return gd(x, xt(y)[0]);
      }
      return p;
    });
  }
  return {
    slideRegistry: u
  };
}
function $k(e, t, n, r, o) {
  const {
    reachedAny: i,
    removeOffset: a,
    constrain: s
  } = r;
  function c(p) {
    return p.concat().sort((v, y) => _e(v) - _e(y))[0];
  }
  function u(p) {
    const v = e ? a(p) : s(p), y = t.map((b, x) => ({
      diff: d(b - v, 0),
      index: x
    })).sort((b, x) => _e(b.diff) - _e(x.diff)), {
      index: w
    } = y[0];
    return {
      index: w,
      distance: v
    };
  }
  function d(p, v) {
    const y = [p, p + n, p - n];
    if (!e) return p;
    if (!v) return c(y);
    const w = y.filter((b) => Pl(b) === v);
    return w.length ? c(w) : xt(y) - n;
  }
  function f(p, v) {
    const y = t[p] - o.get(), w = d(y, v);
    return {
      index: p,
      distance: w
    };
  }
  function h(p, v) {
    const y = o.get() + p, {
      index: w,
      distance: b
    } = u(y), x = !e && i(y);
    if (!v || x) return {
      index: w,
      distance: p
    };
    const P = t[w] - b, T = p + d(P, 0);
    return {
      index: w,
      distance: T
    };
  }
  return {
    byDistance: h,
    byIndex: f,
    shortcut: d
  };
}
function jk(e, t, n, r, o, i, a) {
  function s(f) {
    const h = f.distance, g = f.index !== t.get();
    i.add(h), h && (r.duration() ? e.start() : (e.update(), e.render(1), e.update())), g && (n.set(t.get()), t.set(f.index), a.emit("select"));
  }
  function c(f, h) {
    const g = o.byDistance(f, h);
    s(g);
  }
  function u(f, h) {
    const g = t.clone().set(f), p = o.byIndex(g.get(), h);
    s(p);
  }
  return {
    distance: c,
    index: u
  };
}
function Uk(e, t, n, r, o, i, a, s) {
  const c = {
    passive: !0,
    capture: !0
  };
  let u = 0;
  function d(g) {
    if (!s) return;
    function p(v) {
      if ((/* @__PURE__ */ new Date()).getTime() - u > 10) return;
      a.emit("slideFocusStart"), e.scrollLeft = 0;
      const b = n.findIndex((x) => x.includes(v));
      Ml(b) && (o.useDuration(0), r.index(b, 0), a.emit("slideFocus"));
    }
    i.add(document, "keydown", f, !1), t.forEach((v, y) => {
      i.add(v, "focus", (w) => {
        (Bi(s) || s(g, w)) && p(y);
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
function hr(e) {
  let t = e;
  function n() {
    return t;
  }
  function r(c) {
    t = a(c);
  }
  function o(c) {
    t += a(c);
  }
  function i(c) {
    t -= a(c);
  }
  function a(c) {
    return Ml(c) ? c : c.get();
  }
  return {
    get: n,
    set: r,
    add: o,
    subtract: i
  };
}
function bg(e, t) {
  const n = e.scroll === "x" ? a : s, r = t.style;
  let o = null, i = !1;
  function a(h) {
    return `translate3d(${h}px,0px,0px)`;
  }
  function s(h) {
    return `translate3d(0px,${h}px,0px)`;
  }
  function c(h) {
    if (i) return;
    const g = Nk(e.direction(h));
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
function Hk(e, t, n, r, o, i, a, s, c) {
  const d = Or(o), f = Or(o).reverse(), h = w().concat(b());
  function g(F, D) {
    return F.reduce((_, j) => _ - o[j], D);
  }
  function p(F, D) {
    return F.reduce((_, j) => g(_, D) > 0 ? _.concat([j]) : _, []);
  }
  function v(F) {
    return i.map((D, _) => ({
      start: D - r[_] + 0.5 + F,
      end: D + t - 0.5 + F
    }));
  }
  function y(F, D, _) {
    const j = v(D);
    return F.map((te) => {
      const G = _ ? 0 : -n, $ = _ ? n : 0, I = _ ? "end" : "start", L = j[te][I];
      return {
        index: te,
        loopPoint: L,
        slideLocation: hr(-1),
        translate: bg(e, c[te]),
        target: () => s.get() > L ? G : $
      };
    });
  }
  function w() {
    const F = a[0], D = p(f, F);
    return y(D, n, !1);
  }
  function b() {
    const F = t - a[0] - 1, D = p(d, F);
    return y(D, -n, !0);
  }
  function x() {
    return h.every(({
      index: F
    }) => {
      const D = d.filter((_) => _ !== F);
      return g(D, t) <= 0.1;
    });
  }
  function P() {
    h.forEach((F) => {
      const {
        target: D,
        translate: _,
        slideLocation: j
      } = F, te = D();
      te !== j.get() && (_.to(te), j.set(te));
    });
  }
  function T() {
    h.forEach((F) => F.translate.clear());
  }
  return {
    canLoop: x,
    clear: T,
    loop: P,
    loopPoints: h
  };
}
function zk(e, t, n) {
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
      o || (Bi(n) || n(c, d)) && u(d);
    }), r.observe(e, {
      childList: !0
    });
  }
  function a() {
    r && r.disconnect(), o = !0;
  }
  return {
    init: i,
    destroy: a
  };
}
function Gk(e, t, n, r) {
  const o = {};
  let i = null, a = null, s, c = !1;
  function u() {
    s = new IntersectionObserver((p) => {
      c || (p.forEach((v) => {
        const y = t.indexOf(v.target);
        o[y] = v;
      }), i = null, a = null, n.emit("slidesInView"));
    }, {
      root: e.parentElement,
      threshold: r
    }), t.forEach((p) => s.observe(p));
  }
  function d() {
    s && s.disconnect(), c = !0;
  }
  function f(p) {
    return Fr(o).reduce((v, y) => {
      const w = parseInt(y), {
        isIntersecting: b
      } = o[w];
      return (p && b || !p && !b) && v.push(w), v;
    }, []);
  }
  function h(p = !0) {
    if (p && i) return i;
    if (!p && a) return a;
    const v = f(p);
    return p && (i = v), p || (a = v), v;
  }
  return {
    init: u,
    destroy: d,
    get: h
  };
}
function Kk(e, t, n, r, o, i) {
  const {
    measureSize: a,
    startEdge: s,
    endEdge: c
  } = e, u = n[0] && o, d = p(), f = v(), h = n.map(a), g = y();
  function p() {
    if (!u) return 0;
    const b = n[0];
    return _e(t[s] - b[s]);
  }
  function v() {
    if (!u) return 0;
    const b = i.getComputedStyle(xt(r));
    return parseFloat(b.getPropertyValue(`margin-${c}`));
  }
  function y() {
    return n.map((b, x, P) => {
      const T = !x, R = Tl(P, x);
      return T ? h[x] + d : R ? h[x] + f : P[x + 1][s] - b[s];
    }).map(_e);
  }
  return {
    slideSizes: h,
    slideSizesWithGaps: g,
    startGap: d,
    endGap: f
  };
}
function Yk(e, t, n, r, o, i, a, s, c) {
  const {
    startEdge: u,
    endEdge: d,
    direction: f
  } = e, h = Ml(n);
  function g(w, b) {
    return Or(w).filter((x) => x % b === 0).map((x) => w.slice(x, x + b));
  }
  function p(w) {
    return w.length ? Or(w).reduce((b, x, P) => {
      const T = xt(b) || 0, R = T === 0, F = x === ro(w), D = o[u] - i[T][u], _ = o[u] - i[x][d], j = !r && R ? f(a) : 0, te = !r && F ? f(s) : 0, G = _e(_ - te - (D + j));
      return P && G > t + c && b.push(x), F && b.push(w.length), b;
    }, []).map((b, x, P) => {
      const T = Math.max(P[x - 1] || 0);
      return w.slice(T, b);
    }) : [];
  }
  function v(w) {
    return h ? g(w, n) : p(w);
  }
  return {
    groupSlides: v
  };
}
function Xk(e, t, n, r, o, i, a) {
  const {
    align: s,
    axis: c,
    direction: u,
    startIndex: d,
    loop: f,
    duration: h,
    dragFree: g,
    dragThreshold: p,
    inViewThreshold: v,
    slidesToScroll: y,
    skipSnaps: w,
    containScroll: b,
    watchResize: x,
    watchSlides: P,
    watchDrag: T,
    watchFocus: R
  } = i, F = 2, D = Ak(), _ = D.measure(t), j = n.map(D.measure), te = Tk(c, u), G = te.measureSize(_), $ = Dk(G), I = Mk(s, G), L = !f && !!b, H = f || !!b, {
    slideSizes: V,
    slideSizesWithGaps: W,
    startGap: z,
    endGap: M
  } = Kk(te, _, j, n, H, o), S = Yk(te, G, y, f, _, j, z, M, F), {
    snaps: q,
    snapsAligned: re
  } = Bk(te, I, _, j, S), ae = -xt(q) + xt(W), {
    snapsContained: de,
    scrollContainLimit: ce
  } = Lk(G, ae, re, b, F), O = L ? de : re, {
    limit: Y
  } = Ok(ae, O, f), se = yg(ro(O), d, f), ie = se.clone(), Z = Or(n), B = ({
    dragHandler: rt,
    scrollBody: bt,
    scrollBounds: mn,
    options: {
      loop: Vt
    }
  }) => {
    Vt || mn.constrain(rt.pointerDown()), bt.seek();
  }, ue = ({
    scrollBody: rt,
    translate: bt,
    location: mn,
    offsetLocation: Vt,
    previousLocation: Xi,
    scrollLooper: lo,
    slideLooper: Ly,
    dragHandler: Oy,
    animation: Fy,
    eventHandler: oc,
    scrollBounds: Vy,
    options: {
      loop: ic
    }
  }, ac) => {
    const sc = rt.settled(), By = !Vy.shouldConstrain(), lc = ic ? sc : sc && By;
    lc && !Oy.pointerDown() && (Fy.stop(), oc.emit("settle")), lc || oc.emit("scroll");
    const Wy = mn.get() * ac + Xi.get() * (1 - ac);
    Vt.set(Wy), ic && (lo.loop(rt.direction()), Ly.loop()), bt.to(Vt.get());
  }, oe = Pk(r, o, () => B(tn), (rt) => ue(tn, rt)), pe = 0.68, Se = O[se.get()], Me = hr(Se), C = hr(Se), k = hr(Se), A = hr(Se), Q = Rk(Me, k, C, A, h, pe), K = $k(f, O, ae, Y, A), U = jk(oe, se, ie, Q, K, A, a), le = Vk(Y), ge = Vr(), Ee = Gk(t, n, a, v), {
    slideRegistry: Ae
  } = Wk(L, b, O, ce, S, Z), yt = Uk(e, n, Ae, U, Q, ge, a, R), tn = {
    ownerDocument: r,
    ownerWindow: o,
    eventHandler: a,
    containerRect: _,
    slideRects: j,
    animation: oe,
    axis: te,
    dragHandler: kk(te, e, r, o, A, Ek(te, o), Me, oe, U, Q, K, se, a, $, g, p, w, pe, T),
    eventStore: ge,
    percentOfView: $,
    index: se,
    indexPrevious: ie,
    limit: Y,
    location: Me,
    offsetLocation: k,
    previousLocation: C,
    options: i,
    resizeHandler: _k(t, a, o, n, te, x, D),
    scrollBody: Q,
    scrollBounds: Ik(Y, k, A, Q, $),
    scrollLooper: Fk(ae, Y, k, [Me, k, C, A]),
    scrollProgress: le,
    scrollSnapList: O.map(le.get),
    scrollSnaps: O,
    scrollTarget: K,
    scrollTo: U,
    slideLooper: Hk(te, G, ae, V, W, q, O, k, n),
    slideFocus: yt,
    slidesHandler: zk(t, a, P),
    slidesInView: Ee,
    slideIndexes: Z,
    slideRegistry: Ae,
    slidesToScroll: S,
    target: A,
    translate: bg(te, t)
  };
  return tn;
}
function qk() {
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
  function a(u, d) {
    return e[u] = r(u).filter((f) => f !== d), c;
  }
  function s() {
    e = {};
  }
  const c = {
    init: n,
    emit: o,
    off: a,
    on: i,
    clear: s
  };
  return c;
}
const Zk = {
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
function Qk(e) {
  function t(i, a) {
    return vg(i, a || {});
  }
  function n(i) {
    const a = i.breakpoints || {}, s = Fr(a).filter((c) => e.matchMedia(c).matches).map((c) => a[c]).reduce((c, u) => t(c, u), {});
    return t(i, s);
  }
  function r(i) {
    return i.map((a) => Fr(a.breakpoints || {})).reduce((a, s) => a.concat(s), []).map(e.matchMedia);
  }
  return {
    mergeOptions: t,
    optionsAtMedia: n,
    optionsMediaQueries: r
  };
}
function Jk(e) {
  let t = [];
  function n(i, a) {
    return t = a.filter(({
      options: s
    }) => e.optionsAtMedia(s).active !== !1), t.forEach((s) => s.init(i, e)), a.reduce((s, c) => Object.assign(s, {
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
function Qo(e, t, n) {
  const r = e.ownerDocument, o = r.defaultView, i = Qk(o), a = Jk(i), s = Vr(), c = qk(), {
    mergeOptions: u,
    optionsAtMedia: d,
    optionsMediaQueries: f
  } = i, {
    on: h,
    off: g,
    emit: p
  } = c, v = te;
  let y = !1, w, b = u(Zk, Qo.globalOptions), x = u(b), P = [], T, R, F;
  function D() {
    const {
      container: Z,
      slides: B
    } = x;
    R = (is(Z) ? e.querySelector(Z) : Z) || e.children[0];
    const oe = is(B) ? R.querySelectorAll(B) : B;
    F = [].slice.call(oe || R.children);
  }
  function _(Z) {
    const B = Xk(e, R, F, r, o, Z, c);
    if (Z.loop && !B.slideLooper.canLoop()) {
      const ue = Object.assign({}, Z, {
        loop: !1
      });
      return _(ue);
    }
    return B;
  }
  function j(Z, B) {
    y || (b = u(b, Z), x = d(b), P = B || P, D(), w = _(x), f([b, ...P.map(({
      options: ue
    }) => ue)]).forEach((ue) => s.add(ue, "change", te)), x.active && (w.translate.to(w.location.get()), w.animation.init(), w.slidesInView.init(), w.slideFocus.init(ie), w.eventHandler.init(ie), w.resizeHandler.init(ie), w.slidesHandler.init(ie), w.options.loop && w.slideLooper.loop(), R.offsetParent && F.length && w.dragHandler.init(ie), T = a.init(ie, P)));
  }
  function te(Z, B) {
    const ue = S();
    G(), j(u({
      startIndex: ue
    }, Z), B), c.emit("reInit");
  }
  function G() {
    w.dragHandler.destroy(), w.eventStore.clear(), w.translate.clear(), w.slideLooper.clear(), w.resizeHandler.destroy(), w.slidesHandler.destroy(), w.slidesInView.destroy(), w.animation.destroy(), a.destroy(), s.clear();
  }
  function $() {
    y || (y = !0, s.clear(), G(), c.emit("destroy"), c.clear());
  }
  function I(Z, B, ue) {
    !x.active || y || (w.scrollBody.useBaseFriction().useDuration(B === !0 ? 0 : x.duration), w.scrollTo.index(Z, ue || 0));
  }
  function L(Z) {
    const B = w.index.add(1).get();
    I(B, Z, -1);
  }
  function H(Z) {
    const B = w.index.add(-1).get();
    I(B, Z, 1);
  }
  function V() {
    return w.index.add(1).get() !== S();
  }
  function W() {
    return w.index.add(-1).get() !== S();
  }
  function z() {
    return w.scrollSnapList;
  }
  function M() {
    return w.scrollProgress.get(w.location.get());
  }
  function S() {
    return w.index.get();
  }
  function q() {
    return w.indexPrevious.get();
  }
  function re() {
    return w.slidesInView.get();
  }
  function ae() {
    return w.slidesInView.get(!1);
  }
  function de() {
    return T;
  }
  function ce() {
    return w;
  }
  function O() {
    return e;
  }
  function Y() {
    return R;
  }
  function se() {
    return F;
  }
  const ie = {
    canScrollNext: V,
    canScrollPrev: W,
    containerNode: Y,
    internalEngine: ce,
    destroy: $,
    off: g,
    on: h,
    emit: p,
    plugins: de,
    previousScrollSnap: q,
    reInit: v,
    rootNode: O,
    scrollNext: L,
    scrollPrev: H,
    scrollProgress: M,
    scrollSnapList: z,
    scrollTo: I,
    selectedScrollSnap: S,
    slideNodes: se,
    slidesInView: re,
    slidesNotInView: ae
  };
  return j(t, n), setTimeout(() => c.emit("init"), 0), ie;
}
Qo.globalOptions = void 0;
function kl(e = {}, t = []) {
  const n = Ve(e), r = Ve(t), [o, i] = ke(), [a, s] = ke(), c = It(() => {
    o && o.reInit(n.current, r.current);
  }, [o]);
  return Fe(() => {
    Nl(n.current, e) || (n.current = e, c());
  }, [e, c]), Fe(() => {
    Ck(r.current, t) || (r.current = t, c());
  }, [t, c]), Fe(() => {
    if (xk() && a) {
      Qo.globalOptions = kl.globalOptions;
      const u = Qo(a, n.current, r.current);
      return i(u), () => u.destroy();
    } else
      i(void 0);
  }, [a, i]), [s, o];
}
kl.globalOptions = void 0;
const wg = m.createContext(null);
function oo() {
  const e = m.useContext(wg);
  if (!e)
    throw new Error("useCarousel must be used within a <Carousel />");
  return e;
}
const xg = m.forwardRef(
  ({
    orientation: e = "horizontal",
    opts: t,
    setApi: n,
    plugins: r,
    className: o,
    children: i,
    ...a
  }, s) => {
    const [c, u] = kl(
      {
        ...t,
        axis: e === "horizontal" ? "x" : "y"
      },
      r
    ), [d, f] = m.useState(!1), [h, g] = m.useState(!1), p = m.useCallback((b) => {
      b && (f(b.canScrollPrev()), g(b.canScrollNext()));
    }, []), v = m.useCallback(() => {
      u == null || u.scrollPrev();
    }, [u]), y = m.useCallback(() => {
      u == null || u.scrollNext();
    }, [u]), w = m.useCallback(
      (b) => {
        b.key === "ArrowLeft" ? (b.preventDefault(), v()) : b.key === "ArrowRight" && (b.preventDefault(), y());
      },
      [v, y]
    );
    return m.useEffect(() => {
      !u || !n || n(u);
    }, [u, n]), m.useEffect(() => {
      if (u)
        return p(u), u.on("reInit", p), u.on("select", p), () => {
          u == null || u.off("select", p);
        };
    }, [u, p]), /* @__PURE__ */ l(
      wg.Provider,
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
        children: /* @__PURE__ */ l(
          "div",
          {
            ref: s,
            onKeyDownCapture: w,
            className: E("relative", o),
            role: "region",
            "aria-roledescription": "carousel",
            ...a,
            children: i
          }
        )
      }
    );
  }
);
xg.displayName = "Carousel";
const Cg = m.forwardRef(({ className: e, ...t }, n) => {
  const { carouselRef: r, orientation: o } = oo();
  return /* @__PURE__ */ l("div", { ref: r, className: "overflow-hidden", children: /* @__PURE__ */ l(
    "div",
    {
      ref: n,
      className: E(
        "flex",
        o === "horizontal" ? "-ml-4" : "-mt-4 flex-col",
        e
      ),
      ...t
    }
  ) });
});
Cg.displayName = "CarouselContent";
const Sg = m.forwardRef(({ className: e, ...t }, n) => {
  const { orientation: r } = oo();
  return /* @__PURE__ */ l(
    "div",
    {
      ref: n,
      role: "group",
      "aria-roledescription": "slide",
      className: E(
        "min-w-0 shrink-0 grow-0 basis-full",
        r === "horizontal" ? "pl-4" : "pt-4",
        e
      ),
      ...t
    }
  );
});
Sg.displayName = "CarouselItem";
const Ng = m.forwardRef(({ className: e, variant: t = "outline", ...n }, r) => {
  const { orientation: o, scrollPrev: i, canScrollPrev: a } = oo();
  return /* @__PURE__ */ N(
    Sn,
    {
      ref: r,
      size: "sm",
      variant: t,
      round: !0,
      className: E(
        "absolute opacity-100 transition-all",
        !a && "disabled:opacity-0",
        o === "horizontal" ? "-left-3 top-1/2 -translate-y-1/2" : "-top-3 left-1/2 -translate-x-1/2 rotate-90",
        e
      ),
      disabled: !a,
      onClick: i,
      ...n,
      children: [
        /* @__PURE__ */ l(be, { size: "sm", icon: am }),
        /* @__PURE__ */ l("span", { className: "sr-only", children: "Previous" })
      ]
    }
  );
});
Ng.displayName = "CarouselPrevious";
const Mg = m.forwardRef(({ className: e, variant: t = "outline", ...n }, r) => {
  const { orientation: o, scrollNext: i, canScrollNext: a } = oo();
  return /* @__PURE__ */ N(
    Sn,
    {
      ref: r,
      size: "sm",
      variant: t,
      round: !0,
      className: E(
        "absolute opacity-100 transition-all",
        !a && "disabled:opacity-0",
        o === "horizontal" ? "-right-3 top-1/2 -translate-y-1/2" : "-bottom-3 left-1/2 -translate-x-1/2 rotate-90",
        e
      ),
      disabled: !a,
      onClick: i,
      ...n,
      children: [
        /* @__PURE__ */ l(be, { size: "sm", icon: sm }),
        /* @__PURE__ */ l("span", { className: "sr-only", children: "Next" })
      ]
    }
  );
});
Mg.displayName = "CarouselNext";
const Pg = m.forwardRef((e, t) => {
  const { api: n } = oo(), [, r] = m.useState(!1), o = m.useCallback(() => {
    r((s) => !s);
  }, []);
  m.useEffect(() => {
    if (n)
      return n.on("select", o), n.on("reInit", o), () => {
        n.off("select", o), n.off("reInit", o);
      };
  }, [n, o]);
  const i = (n == null ? void 0 : n.scrollSnapList().length) || 0, a = (n == null ? void 0 : n.selectedScrollSnap()) || 0;
  return i > 1 ? /* @__PURE__ */ l(
    "div",
    {
      ref: t,
      className: E("flex justify-center gap-2", e.className),
      children: Array.from({ length: i }, (s, c) => /* @__PURE__ */ l(
        Sn,
        {
          className: E("h-2 w-2 rounded-full p-0 transition-all", {
            "bg-f1-foreground-secondary hover:scale-110 hover:bg-f1-foreground-secondary": c === a,
            "bg-f1-background-secondary hover:scale-110 hover:bg-f1-background-secondary-hover": c !== a
          }),
          "aria-label": `Go to slide ${c + 1}`,
          onClick: () => n == null ? void 0 : n.scrollTo(c)
        },
        c
      ))
    }
  ) : /* @__PURE__ */ l(xe, {});
});
Pg.displayName = "CarouselDots";
const eE = {
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
function tE(e, t) {
  const n = e.scrollSnapList();
  return typeof t == "number" ? n.map(() => t) : t(n, e);
}
function nE(e, t) {
  const n = e.rootNode();
  return t && t(n) || n;
}
function El(e = {}) {
  let t, n, r, o, i = null, a = 0, s = !1, c = !1, u = !1, d = !1;
  function f(I, L) {
    n = I;
    const {
      mergeOptions: H,
      optionsAtMedia: V
    } = L, W = H(eE, El.globalOptions), z = H(W, e);
    if (t = V(z), n.scrollSnapList().length <= 1) return;
    d = t.jump, r = !1, o = tE(n, t.delay);
    const {
      eventStore: M,
      ownerDocument: S
    } = n.internalEngine(), q = !!n.internalEngine().options.watchDrag, re = nE(n, t.rootNode);
    M.add(S, "visibilitychange", w), q && n.on("pointerDown", x), q && !t.stopOnInteraction && n.on("pointerUp", P), t.stopOnMouseEnter && M.add(re, "mouseenter", T), t.stopOnMouseEnter && !t.stopOnInteraction && M.add(re, "mouseleave", R), t.stopOnFocusIn && n.on("slideFocusStart", y), t.stopOnFocusIn && !t.stopOnInteraction && M.add(n.containerNode(), "focusout", v), t.playOnInit && !b() && v();
  }
  function h() {
    n.off("pointerDown", x).off("pointerUp", P).off("slideFocusStart", y), y(), r = !0, s = !1;
  }
  function g() {
    const {
      ownerWindow: I
    } = n.internalEngine();
    I.clearTimeout(a), a = I.setTimeout(te, o[n.selectedScrollSnap()]), i = (/* @__PURE__ */ new Date()).getTime(), n.emit("autoplay:timerset");
  }
  function p() {
    const {
      ownerWindow: I
    } = n.internalEngine();
    I.clearTimeout(a), a = 0, i = null, n.emit("autoplay:timerstopped");
  }
  function v() {
    r || (s || n.emit("autoplay:play"), g(), s = !0);
  }
  function y() {
    r || (s && n.emit("autoplay:stop"), p(), s = !1);
  }
  function w() {
    if (b())
      return u = s, y();
    u && v();
  }
  function b() {
    const {
      ownerDocument: I
    } = n.internalEngine();
    return I.visibilityState === "hidden";
  }
  function x() {
    c || y();
  }
  function P() {
    c || v();
  }
  function T() {
    c = !0, y();
  }
  function R() {
    c = !1, v();
  }
  function F(I) {
    typeof I < "u" && (d = I), v();
  }
  function D() {
    s && y();
  }
  function _() {
    s && v();
  }
  function j() {
    return s;
  }
  function te() {
    const {
      index: I
    } = n.internalEngine(), L = I.clone().add(1).get(), H = n.scrollSnapList().length - 1, V = t.stopOnLastSnap && L === H;
    if (n.canScrollNext() ? n.scrollNext(d) : n.scrollTo(0, d), n.emit("autoplay:select"), V) return y();
    v();
  }
  function G() {
    if (!i) return null;
    const I = o[n.selectedScrollSnap()], L = (/* @__PURE__ */ new Date()).getTime() - i;
    return I - L;
  }
  return {
    name: "autoplay",
    options: e,
    init: f,
    destroy: h,
    play: F,
    stop: D,
    reset: _,
    isPlaying: j,
    timeUntilNext: G
  };
}
El.globalOptions = void 0;
function xn() {
  return xn = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, xn.apply(this, arguments);
}
var rE = 0.996, oE = function(t, n) {
  return n === void 0 && (n = rE), t * n / (1 - n);
};
function iE(e) {
  return e[e.length - 1];
}
function aE(e) {
  return e.reduce(function(t, n) {
    return t + n;
  }) / e.length;
}
var sE = function(t, n, r) {
  return Math.min(Math.max(n, t), r);
};
function ka(e, t) {
  if (e.length !== t.length)
    throw new Error("vectors must be same length");
  return e.map(function(n, r) {
    return n + t[r];
  });
}
function vd(e) {
  return Math.max.apply(Math, e.map(Math.abs));
}
function Qn(e) {
  return Object.freeze(e), Object.values(e).forEach(function(t) {
    t !== null && typeof t == "object" && !Object.isFrozen(t) && Qn(t);
  }), e;
}
function lE() {
  var e = {};
  function t(o, i) {
    return e[o] = (e[o] || []).concat(i), function() {
      return n(o, i);
    };
  }
  function n(o, i) {
    e[o] = (e[o] || []).filter(function(a) {
      return a !== i;
    });
  }
  function r(o, i) {
    o in e && e[o].forEach(function(a) {
      return a(i);
    });
  }
  return Qn({
    on: t,
    off: n,
    dispatch: r
  });
}
function cE(e) {
  var t = [], n = function(a) {
    return a.addEventListener("wheel", e, {
      passive: !1
    }), t.push(a), function() {
      return r(a);
    };
  }, r = function(a) {
    a.removeEventListener("wheel", e), t = t.filter(function(s) {
      return s !== a;
    });
  }, o = function() {
    t.forEach(r);
  };
  return Qn({
    observe: n,
    unobserve: r,
    disconnect: o
  });
}
var uE = 16 * 1.125, dE = typeof window < "u" && window.innerHeight || 800, Ea = [1, uE, dE];
function fE(e) {
  var t = e.deltaX * Ea[e.deltaMode], n = e.deltaY * Ea[e.deltaMode], r = (e.deltaZ || 0) * Ea[e.deltaMode];
  return {
    timeStamp: e.timeStamp,
    axisDelta: [t, n, r]
  };
}
var hE = [-1, -1, -1];
function mE(e, t) {
  if (!t)
    return e;
  var n = t === !0 ? hE : t.map(function(r) {
    return r ? -1 : 1;
  });
  return xn({}, e, {
    axisDelta: e.axisDelta.map(function(r, o) {
      return r * n[o];
    })
  });
}
var yd = 700, pE = function(t) {
  return xn({}, t, {
    axisDelta: t.axisDelta.map(function(n) {
      return sE(n, -yd, yd);
    })
  });
}, Aa = process.env.NODE_ENV !== "production", gE = 0.6, vE = 0.96, yE = 2, bd = 5, wd = /* @__PURE__ */ Qn({
  preventWheelAction: !0,
  reverseSign: [!0, !0, !1]
}), bE = 400;
function xd() {
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
    willEndTimeout: bE
  };
}
function wE(e) {
  e === void 0 && (e = {});
  var t = lE(), n = t.on, r = t.off, o = t.dispatch, i = wd, a = xd(), s, c = !1, u, d = function(I) {
    Array.isArray(I) ? I.forEach(function(L) {
      return p(L);
    }) : p(I);
  }, f = function(I) {
    return I === void 0 && (I = {}), Object.values(I).some(function(L) {
      return L == null;
    }) ? (Aa && console.error("updateOptions ignored! undefined & null options not allowed"), i) : i = Qn(xn({}, wd, i, I));
  }, h = function(I) {
    var L = xn({
      event: s,
      isStart: !1,
      isEnding: !1,
      isMomentumCancel: !1,
      isMomentum: a.isMomentum,
      axisDelta: [0, 0, 0],
      axisVelocity: a.axisVelocity,
      axisMovement: a.axisMovement,
      get axisMovementProjection() {
        return ka(L.axisMovement, L.axisVelocity.map(function(H) {
          return oE(H);
        }));
      }
    }, I);
    o("wheel", xn({}, L, {
      previous: u
    })), u = L;
  }, g = function(I, L) {
    var H = i, V = H.preventWheelAction, W = L[0], z = L[1], M = L[2];
    if (typeof V == "boolean") return V;
    switch (V) {
      case "x":
        return Math.abs(W) >= I;
      case "y":
        return Math.abs(z) >= I;
      case "z":
        return Math.abs(M) >= I;
      default:
        return Aa && console.warn("unsupported preventWheelAction value: " + V, "warn"), !1;
    }
  }, p = function(I) {
    var L = pE(mE(fE(I), i.reverseSign)), H = L.axisDelta, V = L.timeStamp, W = vd(H);
    if (I.preventDefault && g(W, H) && I.preventDefault(), a.isStarted ? a.isMomentum && W > Math.max(2, a.lastAbsDelta * 2) && (D(!0), R()) : R(), W === 0 && Object.is && Object.is(I.deltaX, -0)) {
      c = !0;
      return;
    }
    s = I, a.axisMovement = ka(a.axisMovement, H), a.lastAbsDelta = W, a.scrollPointsToMerge.push({
      axisDelta: H,
      timeStamp: V
    }), v(), h({
      axisDelta: H,
      isStart: !a.isStartPublished
    }), a.isStartPublished = !0, F();
  }, v = function() {
    a.scrollPointsToMerge.length === yE ? (a.scrollPoints.unshift({
      axisDeltaSum: a.scrollPointsToMerge.map(function(I) {
        return I.axisDelta;
      }).reduce(ka),
      timeStamp: aE(a.scrollPointsToMerge.map(function(I) {
        return I.timeStamp;
      }))
    }), w(), a.scrollPointsToMerge.length = 0, a.scrollPoints.length = 1, a.isMomentum || P()) : a.isStartPublished || y();
  }, y = function() {
    a.axisVelocity = iE(a.scrollPointsToMerge).axisDelta.map(function(I) {
      return I / a.willEndTimeout;
    });
  }, w = function() {
    var I = a.scrollPoints, L = I[0], H = I[1];
    if (!(!H || !L)) {
      var V = L.timeStamp - H.timeStamp;
      if (V <= 0) {
        Aa && console.warn("invalid deltaTime");
        return;
      }
      var W = L.axisDeltaSum.map(function(M) {
        return M / V;
      }), z = W.map(function(M, S) {
        return M / (a.axisVelocity[S] || 1);
      });
      a.axisVelocity = W, a.accelerationFactors.push(z), b(V);
    }
  }, b = function(I) {
    var L = Math.ceil(I / 10) * 10 * 1.2;
    a.isMomentum || (L = Math.max(100, L * 2)), a.willEndTimeout = Math.min(1e3, Math.round(L));
  }, x = function(I) {
    return I === 0 ? !0 : I <= vE && I >= gE;
  }, P = function() {
    if (a.accelerationFactors.length >= bd) {
      if (c && (c = !1, vd(a.axisVelocity) >= 0.2)) {
        T();
        return;
      }
      var I = a.accelerationFactors.slice(bd * -1), L = I.every(function(H) {
        var V = !!H.reduce(function(z, M) {
          return z && z < 1 && z === M ? 1 : 0;
        }), W = H.filter(x).length === H.length;
        return V || W;
      });
      L && T(), a.accelerationFactors = I;
    }
  }, T = function() {
    a.isMomentum = !0;
  }, R = function() {
    a = xd(), a.isStarted = !0, a.startTime = Date.now(), u = void 0, c = !1;
  }, F = /* @__PURE__ */ function() {
    var $;
    return function() {
      clearTimeout($), $ = setTimeout(D, a.willEndTimeout);
    };
  }(), D = function(I) {
    I === void 0 && (I = !1), a.isStarted && (a.isMomentum && I ? h({
      isEnding: !0,
      isMomentumCancel: !0
    }) : h({
      isEnding: !0
    }), a.isMomentum = !1, a.isStarted = !1);
  }, _ = cE(d), j = _.observe, te = _.unobserve, G = _.disconnect;
  return f(e), Qn({
    on: n,
    off: r,
    observe: j,
    unobserve: te,
    disconnect: G,
    feedWheel: d,
    updateOptions: f
  });
}
var xE = {
  active: !0,
  breakpoints: {},
  wheelDraggingClass: "is-wheel-dragging",
  forceWheelAxis: void 0,
  target: void 0
};
Al.globalOptions = void 0;
var CE = process.env.NODE_ENV !== "production";
function Al(e) {
  e === void 0 && (e = {});
  var t, n = function() {
  };
  function r(i, a) {
    var s, c, u = a.mergeOptions, d = a.optionsAtMedia, f = u(xE, Al.globalOptions), h = u(f, e);
    t = d(h);
    var g = i.internalEngine(), p = (s = t.target) != null ? s : i.containerNode().parentNode, v = (c = t.forceWheelAxis) != null ? c : g.options.axis, y = wE({
      preventWheelAction: v,
      reverseSign: [!0, !0, !1]
    }), w = y.observe(p), b = y.on("wheel", G), x = !1, P;
    function T($) {
      try {
        P = new MouseEvent("mousedown", $.event), te(P);
      } catch {
        return CE && console.warn("Legacy browser requires events-polyfill (https://github.com/xiel/embla-carousel-wheel-gestures#legacy-browsers)"), n();
      }
      x = !0, F(), t.wheelDraggingClass && p.classList.add(t.wheelDraggingClass);
    }
    function R($) {
      x = !1, te(j("mouseup", $)), D(), t.wheelDraggingClass && p.classList.remove(t.wheelDraggingClass);
    }
    function F() {
      document.documentElement.addEventListener("mousemove", _, !0), document.documentElement.addEventListener("mouseup", _, !0), document.documentElement.addEventListener("mousedown", _, !0);
    }
    function D() {
      document.documentElement.removeEventListener("mousemove", _, !0), document.documentElement.removeEventListener("mouseup", _, !0), document.documentElement.removeEventListener("mousedown", _, !0);
    }
    function _($) {
      x && $.isTrusted && $.stopImmediatePropagation();
    }
    function j($, I) {
      var L, H;
      if (v === g.options.axis) {
        var V = I.axisMovement;
        L = V[0], H = V[1];
      } else {
        var W = I.axisMovement;
        H = W[0], L = W[1];
      }
      if (!g.options.skipSnaps && !g.options.dragFree) {
        var z = g.containerRect.width, M = g.containerRect.height;
        L = L < 0 ? Math.max(L, -z) : Math.min(L, z), H = H < 0 ? Math.max(H, -M) : Math.min(H, M);
      }
      return new MouseEvent($, {
        clientX: P.clientX + L,
        clientY: P.clientY + H,
        screenX: P.screenX + L,
        screenY: P.screenY + H,
        movementX: L,
        movementY: H,
        button: 0,
        bubbles: !0,
        cancelable: !0,
        composed: !0
      });
    }
    function te($) {
      i.containerNode().dispatchEvent($);
    }
    function G($) {
      var I = $.axisDelta, L = I[0], H = I[1], V = v === "x" ? L : H, W = v === "x" ? H : L, z = $.isMomentum && $.previous && !$.previous.isMomentum, M = $.isEnding && !$.isMomentum || z, S = Math.abs(V) > Math.abs(W);
      S && !x && !$.isMomentum && T($), x && (M ? R($) : te(j("mousemove", $)));
    }
    n = function() {
      w(), b(), D();
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
const $t = 28, SE = ({ children: e }) => {
  const t = Ve(null), [n, r] = ke(!0), [o, i] = ke(!1), a = (c) => {
    if (t.current) {
      const u = t.current, { scrollLeft: d } = u;
      if (c === "right") {
        const f = Array.from(u.children).find((h) => h.offsetLeft - $t > d);
        f && u.scrollTo({
          left: f.offsetLeft - $t,
          behavior: "smooth"
        });
      } else {
        const f = Array.from(u.children).reverse().find((h) => h.offsetLeft + h.offsetWidth < d);
        f && u.scrollTo({
          left: f.offsetLeft - $t,
          behavior: "smooth"
        });
      }
    }
  }, s = () => {
    if (t.current) {
      const { scrollLeft: c, scrollWidth: u, clientWidth: d } = t.current;
      i(c > 0), r(c + d < u);
    }
  };
  return Fe(() => {
    const c = t.current;
    return c && (c.addEventListener("scroll", s), s()), () => {
      c && c.removeEventListener("scroll", s);
    };
  }, []), /* @__PURE__ */ N("div", { className: "relative", children: [
    /* @__PURE__ */ N(
      "div",
      {
        ref: t,
        className: "relative flex gap-4 overflow-x-auto overflow-y-visible scroll-smooth",
        style: {
          scrollbarWidth: "none",
          // Para Firefox
          msOverflowStyle: "none",
          // Para IE y Edge
          margin: `-${$t}px`,
          padding: `${$t}px`,
          height: `calc(100% + ${$t * 2}px)`,
          width: `calc(100% + ${$t * 2}px)`
        },
        children: [
          /* @__PURE__ */ l("style", { children: `
              /* Para ocultar scrollbar en Chrome, Safari y Edge */
              .no-scrollbar::-webkit-scrollbar {
                display: none;
              }
            ` }),
          Array.isArray(e) ? e.map((c, u) => /* @__PURE__ */ l(
            "div",
            {
              className: "flex-shrink-0",
              style: { scrollSnapAlign: "start" },
              children: c
            },
            u
          )) : e && /* @__PURE__ */ l(
            "div",
            {
              className: "flex-shrink-0",
              style: { scrollSnapAlign: "start" },
              children: e
            }
          )
        ]
      }
    ),
    o && /* @__PURE__ */ l(
      "div",
      {
        className: E(
          "w-[60px]",
          "absolute",
          "h-full",
          "top-0",
          "bg-gradient-to-l from-transparent from-0% to-f1-background to-100%"
        ),
        style: { left: `-${$t}px` }
      }
    ),
    n && /* @__PURE__ */ l(
      "div",
      {
        className: E(
          "w-[60px]",
          "absolute",
          "h-full",
          "top-0",
          "bg-gradient-to-r from-transparent from-0% to-f1-background to-100%"
        ),
        style: { right: `-${$t}px` }
      }
    ),
    o && /* @__PURE__ */ N(
      Sn,
      {
        size: "sm",
        variant: "outline",
        round: !0,
        className: E(
          "absolute opacity-100 transition-all",
          "-left-3 top-1/2 -translate-y-1/2"
        ),
        onClick: () => a("left"),
        children: [
          /* @__PURE__ */ l(Mr, { size: "sm", icon: am }),
          /* @__PURE__ */ l("span", { className: "sr-only", children: "Previous" })
        ]
      }
    ),
    n && /* @__PURE__ */ N(
      Sn,
      {
        size: "sm",
        variant: "outline",
        round: !0,
        className: E(
          "absolute opacity-100 transition-all",
          "-right-3 top-1/2 -translate-y-1/2"
        ),
        onClick: () => a("right"),
        children: [
          /* @__PURE__ */ l(Mr, { size: "sm", icon: sm }),
          /* @__PURE__ */ l("span", { className: "sr-only", children: "Next" })
        ]
      }
    )
  ] });
}, NE = Ie("", {
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
}), ME = ({
  children: e,
  columns: t,
  showArrows: n = !0,
  showDots: r = !0,
  autoplay: o = !1,
  delay: i = 3e3,
  showPeek: a = !1
}) => {
  const s = ee.Children.toArray(e), c = ee.useRef(
    o ? El({ delay: i, stopOnInteraction: !0 }) : void 0
  ), u = () => {
    c.current && c.current.stop();
  }, d = () => {
    c.current && c.current.play();
  };
  function f(h, g) {
    return g ? `peek${h || 1}` : h || 1;
  }
  return t ? /* @__PURE__ */ l(
    xg,
    {
      className: "flex w-full flex-col gap-3",
      opts: {
        align: "center",
        slidesToScroll: "auto",
        duration: 20,
        containScroll: !1
      },
      plugins: [c.current, Al()].filter(Boolean),
      onMouseEnter: o ? u : void 0,
      onMouseLeave: o ? d : void 0,
      children: /* @__PURE__ */ N("div", { className: "flex flex-col gap-3", children: [
        /* @__PURE__ */ N("div", { className: "relative", children: [
          /* @__PURE__ */ l(Cg, { children: ee.Children.map(s, (h, g) => /* @__PURE__ */ l(
            Sg,
            {
              className: NE({
                default: f(t.default, a),
                xs: f(t.xs, a),
                sm: f(t.sm, a),
                md: f(t.md, a),
                lg: f(t.lg, a),
                peek: a
              }),
              children: h
            },
            g
          )) }),
          n && /* @__PURE__ */ N(xe, { children: [
            /* @__PURE__ */ l(Ng, {}),
            /* @__PURE__ */ l(Mg, {})
          ] })
        ] }),
        r && /* @__PURE__ */ l(Pg, {})
      ] })
    }
  ) : /* @__PURE__ */ l(SE, { children: e });
}, Tg = m.forwardRef(({ ...e }, t) => /* @__PURE__ */ l("nav", { ref: t, "aria-label": "breadcrumb", ...e }));
Tg.displayName = "Breadcrumb";
const kg = m.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l(
  "ol",
  {
    ref: n,
    className: E(
      "flex list-none flex-nowrap items-center gap-1 text-f1-foreground-secondary",
      e
    ),
    ...t
  }
));
kg.displayName = "BreadcrumbList";
const Eg = m.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l(
  "li",
  {
    ref: n,
    className: E("inline-flex items-center gap-0.5", e),
    ...t
  }
));
Eg.displayName = "BreadcrumbItem";
const Ag = m.forwardRef(({ asChild: e, className: t, ...n }, r) => /* @__PURE__ */ l(
  e ? Cn : Jt,
  {
    ref: r,
    className: E(
      "rounded-sm px-1.5 py-0.5 font-medium text-f1-foreground no-underline transition-colors hover:bg-f1-background-secondary",
      t
    ),
    ...n
  }
));
Ag.displayName = "BreadcrumbLink";
const Dg = m.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l(
  "span",
  {
    ref: n,
    role: "link",
    "aria-disabled": "true",
    "aria-current": "page",
    className: E("truncate px-1.5 py-0.5 text-f1-foreground", e),
    ...t
  }
));
Dg.displayName = "BreadcrumbPage";
const Dl = ({
  children: e,
  className: t,
  ...n
}) => /* @__PURE__ */ l(
  "li",
  {
    role: "presentation",
    "aria-hidden": "true",
    className: E("flex align-bottom", t),
    ...n,
    children: e ?? /* @__PURE__ */ l(Ks, {})
  }
);
Dl.displayName = "BreadcrumbSeparator";
var ss = ["Enter", " "], PE = ["ArrowDown", "PageUp", "Home"], _g = ["ArrowUp", "PageDown", "End"], TE = [...PE, ..._g], kE = {
  ltr: [...ss, "ArrowRight"],
  rtl: [...ss, "ArrowLeft"]
}, EE = {
  ltr: ["ArrowLeft"],
  rtl: ["ArrowRight"]
}, io = "Menu", [Br, AE, DE] = Jr(io), [An, Rg] = Ot(io, [
  DE,
  oi,
  Ri
]), Wi = oi(), Ig = Ri(), [_E, Dn] = An(io), [RE, ao] = An(io), Lg = (e) => {
  const { __scopeMenu: t, open: n = !1, children: r, dir: o, onOpenChange: i, modal: a = !0 } = e, s = Wi(t), [c, u] = m.useState(null), d = m.useRef(!1), f = Oe(i), h = nr(o);
  return m.useEffect(() => {
    const g = () => {
      d.current = !0, document.addEventListener("pointerdown", p, { capture: !0, once: !0 }), document.addEventListener("pointermove", p, { capture: !0, once: !0 });
    }, p = () => d.current = !1;
    return document.addEventListener("keydown", g, { capture: !0 }), () => {
      document.removeEventListener("keydown", g, { capture: !0 }), document.removeEventListener("pointerdown", p, { capture: !0 }), document.removeEventListener("pointermove", p, { capture: !0 });
    };
  }, []), /* @__PURE__ */ l(Bd, { ...s, children: /* @__PURE__ */ l(
    _E,
    {
      scope: t,
      open: n,
      onOpenChange: f,
      content: c,
      onContentChange: u,
      children: /* @__PURE__ */ l(
        RE,
        {
          scope: t,
          onClose: m.useCallback(() => f(!1), [f]),
          isUsingKeyboardRef: d,
          dir: h,
          modal: a,
          children: r
        }
      )
    }
  ) });
};
Lg.displayName = io;
var IE = "MenuAnchor", _l = m.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e, o = Wi(n);
    return /* @__PURE__ */ l(Od, { ...o, ...r, ref: t });
  }
);
_l.displayName = IE;
var Rl = "MenuPortal", [LE, Og] = An(Rl, {
  forceMount: void 0
}), Fg = (e) => {
  const { __scopeMenu: t, forceMount: n, children: r, container: o } = e, i = Dn(Rl, t);
  return /* @__PURE__ */ l(LE, { scope: t, forceMount: n, children: /* @__PURE__ */ l(qe, { present: n || i.open, children: /* @__PURE__ */ l(ci, { asChild: !0, container: o, children: r }) }) });
};
Fg.displayName = Rl;
var dt = "MenuContent", [OE, Il] = An(dt), Vg = m.forwardRef(
  (e, t) => {
    const n = Og(dt, e.__scopeMenu), { forceMount: r = n.forceMount, ...o } = e, i = Dn(dt, e.__scopeMenu), a = ao(dt, e.__scopeMenu);
    return /* @__PURE__ */ l(Br.Provider, { scope: e.__scopeMenu, children: /* @__PURE__ */ l(qe, { present: r || i.open, children: /* @__PURE__ */ l(Br.Slot, { scope: e.__scopeMenu, children: a.modal ? /* @__PURE__ */ l(FE, { ...o, ref: t }) : /* @__PURE__ */ l(VE, { ...o, ref: t }) }) }) });
  }
), FE = m.forwardRef(
  (e, t) => {
    const n = Dn(dt, e.__scopeMenu), r = m.useRef(null), o = ve(t, r);
    return m.useEffect(() => {
      const i = r.current;
      if (i) return ul(i);
    }, []), /* @__PURE__ */ l(
      Ll,
      {
        ...e,
        ref: o,
        trapFocus: n.open,
        disableOutsidePointerEvents: n.open,
        disableOutsideScroll: !0,
        onFocusOutside: ne(
          e.onFocusOutside,
          (i) => i.preventDefault(),
          { checkForDefaultPrevented: !1 }
        ),
        onDismiss: () => n.onOpenChange(!1)
      }
    );
  }
), VE = m.forwardRef((e, t) => {
  const n = Dn(dt, e.__scopeMenu);
  return /* @__PURE__ */ l(
    Ll,
    {
      ...e,
      ref: t,
      trapFocus: !1,
      disableOutsidePointerEvents: !1,
      disableOutsideScroll: !1,
      onDismiss: () => n.onOpenChange(!1)
    }
  );
}), Ll = m.forwardRef(
  (e, t) => {
    const {
      __scopeMenu: n,
      loop: r = !1,
      trapFocus: o,
      onOpenAutoFocus: i,
      onCloseAutoFocus: a,
      disableOutsidePointerEvents: s,
      onEntryFocus: c,
      onEscapeKeyDown: u,
      onPointerDownOutside: d,
      onFocusOutside: f,
      onInteractOutside: h,
      onDismiss: g,
      disableOutsideScroll: p,
      ...v
    } = e, y = Dn(dt, n), w = ao(dt, n), b = Wi(n), x = Ig(n), P = AE(n), [T, R] = m.useState(null), F = m.useRef(null), D = ve(t, F, y.onContentChange), _ = m.useRef(0), j = m.useRef(""), te = m.useRef(0), G = m.useRef(null), $ = m.useRef("right"), I = m.useRef(0), L = p ? ki : m.Fragment, H = p ? { as: Cn, allowPinchZoom: !0 } : void 0, V = (z) => {
      var O, Y;
      const M = j.current + z, S = P().filter((se) => !se.disabled), q = document.activeElement, re = (O = S.find((se) => se.ref.current === q)) == null ? void 0 : O.textValue, ae = S.map((se) => se.textValue), de = qE(ae, M, re), ce = (Y = S.find((se) => se.textValue === de)) == null ? void 0 : Y.ref.current;
      (function se(ie) {
        j.current = ie, window.clearTimeout(_.current), ie !== "" && (_.current = window.setTimeout(() => se(""), 1e3));
      })(M), ce && setTimeout(() => ce.focus());
    };
    m.useEffect(() => () => window.clearTimeout(_.current), []), cl();
    const W = m.useCallback((z) => {
      var S, q;
      return $.current === ((S = G.current) == null ? void 0 : S.side) && QE(z, (q = G.current) == null ? void 0 : q.area);
    }, []);
    return /* @__PURE__ */ l(
      OE,
      {
        scope: n,
        searchRef: j,
        onItemEnter: m.useCallback(
          (z) => {
            W(z) && z.preventDefault();
          },
          [W]
        ),
        onItemLeave: m.useCallback(
          (z) => {
            var M;
            W(z) || ((M = F.current) == null || M.focus(), R(null));
          },
          [W]
        ),
        onTriggerLeave: m.useCallback(
          (z) => {
            W(z) && z.preventDefault();
          },
          [W]
        ),
        pointerGraceTimerRef: te,
        onPointerGraceIntentChange: m.useCallback((z) => {
          G.current = z;
        }, []),
        children: /* @__PURE__ */ l(L, { ...H, children: /* @__PURE__ */ l(
          Pi,
          {
            asChild: !0,
            trapped: o,
            onMountAutoFocus: ne(i, (z) => {
              var M;
              z.preventDefault(), (M = F.current) == null || M.focus({ preventScroll: !0 });
            }),
            onUnmountAutoFocus: a,
            children: /* @__PURE__ */ l(
              ii,
              {
                asChild: !0,
                disableOutsidePointerEvents: s,
                onEscapeKeyDown: u,
                onPointerDownOutside: d,
                onFocusOutside: f,
                onInteractOutside: h,
                onDismiss: g,
                children: /* @__PURE__ */ l(
                  kp,
                  {
                    asChild: !0,
                    ...x,
                    dir: w.dir,
                    orientation: "vertical",
                    loop: r,
                    currentTabStopId: T,
                    onCurrentTabStopIdChange: R,
                    onEntryFocus: ne(c, (z) => {
                      w.isUsingKeyboardRef.current || z.preventDefault();
                    }),
                    preventScrollOnEntryFocus: !0,
                    children: /* @__PURE__ */ l(
                      Fd,
                      {
                        role: "menu",
                        "aria-orientation": "vertical",
                        "data-state": ev(y.open),
                        "data-radix-menu-content": "",
                        dir: w.dir,
                        ...b,
                        ...v,
                        ref: D,
                        style: { outline: "none", ...v.style },
                        onKeyDown: ne(v.onKeyDown, (z) => {
                          const S = z.target.closest("[data-radix-menu-content]") === z.currentTarget, q = z.ctrlKey || z.altKey || z.metaKey, re = z.key.length === 1;
                          S && (z.key === "Tab" && z.preventDefault(), !q && re && V(z.key));
                          const ae = F.current;
                          if (z.target !== ae || !TE.includes(z.key)) return;
                          z.preventDefault();
                          const ce = P().filter((O) => !O.disabled).map((O) => O.ref.current);
                          _g.includes(z.key) && ce.reverse(), YE(ce);
                        }),
                        onBlur: ne(e.onBlur, (z) => {
                          z.currentTarget.contains(z.target) || (window.clearTimeout(_.current), j.current = "");
                        }),
                        onPointerMove: ne(
                          e.onPointerMove,
                          Wr((z) => {
                            const M = z.target, S = I.current !== z.clientX;
                            if (z.currentTarget.contains(M) && S) {
                              const q = z.clientX > I.current ? "right" : "left";
                              $.current = q, I.current = z.clientX;
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
Vg.displayName = dt;
var BE = "MenuGroup", Ol = m.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e;
    return /* @__PURE__ */ l(fe.div, { role: "group", ...r, ref: t });
  }
);
Ol.displayName = BE;
var WE = "MenuLabel", Bg = m.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e;
    return /* @__PURE__ */ l(fe.div, { ...r, ref: t });
  }
);
Bg.displayName = WE;
var Jo = "MenuItem", Cd = "menu.itemSelect", $i = m.forwardRef(
  (e, t) => {
    const { disabled: n = !1, onSelect: r, ...o } = e, i = m.useRef(null), a = ao(Jo, e.__scopeMenu), s = Il(Jo, e.__scopeMenu), c = ve(t, i), u = m.useRef(!1), d = () => {
      const f = i.current;
      if (!n && f) {
        const h = new CustomEvent(Cd, { bubbles: !0, cancelable: !0 });
        f.addEventListener(Cd, (g) => r == null ? void 0 : r(g), { once: !0 }), Da(f, h), h.defaultPrevented ? u.current = !1 : a.onClose();
      }
    };
    return /* @__PURE__ */ l(
      Wg,
      {
        ...o,
        ref: c,
        disabled: n,
        onClick: ne(e.onClick, d),
        onPointerDown: (f) => {
          var h;
          (h = e.onPointerDown) == null || h.call(e, f), u.current = !0;
        },
        onPointerUp: ne(e.onPointerUp, (f) => {
          var h;
          u.current || (h = f.currentTarget) == null || h.click();
        }),
        onKeyDown: ne(e.onKeyDown, (f) => {
          const h = s.searchRef.current !== "";
          n || h && f.key === " " || ss.includes(f.key) && (f.currentTarget.click(), f.preventDefault());
        })
      }
    );
  }
);
$i.displayName = Jo;
var Wg = m.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, disabled: r = !1, textValue: o, ...i } = e, a = Il(Jo, n), s = Ig(n), c = m.useRef(null), u = ve(t, c), [d, f] = m.useState(!1), [h, g] = m.useState("");
    return m.useEffect(() => {
      const p = c.current;
      p && g((p.textContent ?? "").trim());
    }, [i.children]), /* @__PURE__ */ l(
      Br.ItemSlot,
      {
        scope: n,
        disabled: r,
        textValue: o ?? h,
        children: /* @__PURE__ */ l(Ep, { asChild: !0, ...s, focusable: !r, children: /* @__PURE__ */ l(
          fe.div,
          {
            role: "menuitem",
            "data-highlighted": d ? "" : void 0,
            "aria-disabled": r || void 0,
            "data-disabled": r ? "" : void 0,
            ...i,
            ref: u,
            onPointerMove: ne(
              e.onPointerMove,
              Wr((p) => {
                r ? a.onItemLeave(p) : (a.onItemEnter(p), p.defaultPrevented || p.currentTarget.focus({ preventScroll: !0 }));
              })
            ),
            onPointerLeave: ne(
              e.onPointerLeave,
              Wr((p) => a.onItemLeave(p))
            ),
            onFocus: ne(e.onFocus, () => f(!0)),
            onBlur: ne(e.onBlur, () => f(!1))
          }
        ) })
      }
    );
  }
), $E = "MenuCheckboxItem", $g = m.forwardRef(
  (e, t) => {
    const { checked: n = !1, onCheckedChange: r, ...o } = e;
    return /* @__PURE__ */ l(Gg, { scope: e.__scopeMenu, checked: n, children: /* @__PURE__ */ l(
      $i,
      {
        role: "menuitemcheckbox",
        "aria-checked": ei(n) ? "mixed" : n,
        ...o,
        ref: t,
        "data-state": Vl(n),
        onSelect: ne(
          o.onSelect,
          () => r == null ? void 0 : r(ei(n) ? !0 : !n),
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
);
$g.displayName = $E;
var jg = "MenuRadioGroup", [jE, UE] = An(
  jg,
  { value: void 0, onValueChange: () => {
  } }
), Ug = m.forwardRef(
  (e, t) => {
    const { value: n, onValueChange: r, ...o } = e, i = Oe(r);
    return /* @__PURE__ */ l(jE, { scope: e.__scopeMenu, value: n, onValueChange: i, children: /* @__PURE__ */ l(Ol, { ...o, ref: t }) });
  }
);
Ug.displayName = jg;
var Hg = "MenuRadioItem", zg = m.forwardRef(
  (e, t) => {
    const { value: n, ...r } = e, o = UE(Hg, e.__scopeMenu), i = n === o.value;
    return /* @__PURE__ */ l(Gg, { scope: e.__scopeMenu, checked: i, children: /* @__PURE__ */ l(
      $i,
      {
        role: "menuitemradio",
        "aria-checked": i,
        ...r,
        ref: t,
        "data-state": Vl(i),
        onSelect: ne(
          r.onSelect,
          () => {
            var a;
            return (a = o.onValueChange) == null ? void 0 : a.call(o, n);
          },
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
);
zg.displayName = Hg;
var Fl = "MenuItemIndicator", [Gg, HE] = An(
  Fl,
  { checked: !1 }
), Kg = m.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, forceMount: r, ...o } = e, i = HE(Fl, n);
    return /* @__PURE__ */ l(
      qe,
      {
        present: r || ei(i.checked) || i.checked === !0,
        children: /* @__PURE__ */ l(
          fe.span,
          {
            ...o,
            ref: t,
            "data-state": Vl(i.checked)
          }
        )
      }
    );
  }
);
Kg.displayName = Fl;
var zE = "MenuSeparator", Yg = m.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e;
    return /* @__PURE__ */ l(
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
Yg.displayName = zE;
var GE = "MenuArrow", Xg = m.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e, o = Wi(n);
    return /* @__PURE__ */ l(Vd, { ...o, ...r, ref: t });
  }
);
Xg.displayName = GE;
var KE = "MenuSub", [iR, qg] = An(KE), mr = "MenuSubTrigger", Zg = m.forwardRef(
  (e, t) => {
    const n = Dn(mr, e.__scopeMenu), r = ao(mr, e.__scopeMenu), o = qg(mr, e.__scopeMenu), i = Il(mr, e.__scopeMenu), a = m.useRef(null), { pointerGraceTimerRef: s, onPointerGraceIntentChange: c } = i, u = { __scopeMenu: e.__scopeMenu }, d = m.useCallback(() => {
      a.current && window.clearTimeout(a.current), a.current = null;
    }, []);
    return m.useEffect(() => d, [d]), m.useEffect(() => {
      const f = s.current;
      return () => {
        window.clearTimeout(f), c(null);
      };
    }, [s, c]), /* @__PURE__ */ l(_l, { asChild: !0, ...u, children: /* @__PURE__ */ l(
      Wg,
      {
        id: o.triggerId,
        "aria-haspopup": "menu",
        "aria-expanded": n.open,
        "aria-controls": o.contentId,
        "data-state": ev(n.open),
        ...e,
        ref: ps(t, o.onTriggerChange),
        onClick: (f) => {
          var h;
          (h = e.onClick) == null || h.call(e, f), !(e.disabled || f.defaultPrevented) && (f.currentTarget.focus(), n.open || n.onOpenChange(!0));
        },
        onPointerMove: ne(
          e.onPointerMove,
          Wr((f) => {
            i.onItemEnter(f), !f.defaultPrevented && !e.disabled && !n.open && !a.current && (i.onPointerGraceIntentChange(null), a.current = window.setTimeout(() => {
              n.onOpenChange(!0), d();
            }, 100));
          })
        ),
        onPointerLeave: ne(
          e.onPointerLeave,
          Wr((f) => {
            var g, p;
            d();
            const h = (g = n.content) == null ? void 0 : g.getBoundingClientRect();
            if (h) {
              const v = (p = n.content) == null ? void 0 : p.dataset.side, y = v === "right", w = y ? -5 : 5, b = h[y ? "left" : "right"], x = h[y ? "right" : "left"];
              i.onPointerGraceIntentChange({
                area: [
                  // Apply a bleed on clientX to ensure that our exit point is
                  // consistently within polygon bounds
                  { x: f.clientX + w, y: f.clientY },
                  { x: b, y: h.top },
                  { x, y: h.top },
                  { x, y: h.bottom },
                  { x: b, y: h.bottom }
                ],
                side: v
              }), window.clearTimeout(s.current), s.current = window.setTimeout(
                () => i.onPointerGraceIntentChange(null),
                300
              );
            } else {
              if (i.onTriggerLeave(f), f.defaultPrevented) return;
              i.onPointerGraceIntentChange(null);
            }
          })
        ),
        onKeyDown: ne(e.onKeyDown, (f) => {
          var g;
          const h = i.searchRef.current !== "";
          e.disabled || h && f.key === " " || kE[r.dir].includes(f.key) && (n.onOpenChange(!0), (g = n.content) == null || g.focus(), f.preventDefault());
        })
      }
    ) });
  }
);
Zg.displayName = mr;
var Qg = "MenuSubContent", Jg = m.forwardRef(
  (e, t) => {
    const n = Og(dt, e.__scopeMenu), { forceMount: r = n.forceMount, ...o } = e, i = Dn(dt, e.__scopeMenu), a = ao(dt, e.__scopeMenu), s = qg(Qg, e.__scopeMenu), c = m.useRef(null), u = ve(t, c);
    return /* @__PURE__ */ l(Br.Provider, { scope: e.__scopeMenu, children: /* @__PURE__ */ l(qe, { present: r || i.open, children: /* @__PURE__ */ l(Br.Slot, { scope: e.__scopeMenu, children: /* @__PURE__ */ l(
      Ll,
      {
        id: s.contentId,
        "aria-labelledby": s.triggerId,
        ...o,
        ref: u,
        align: "start",
        side: a.dir === "rtl" ? "left" : "right",
        disableOutsidePointerEvents: !1,
        disableOutsideScroll: !1,
        trapFocus: !1,
        onOpenAutoFocus: (d) => {
          var f;
          a.isUsingKeyboardRef.current && ((f = c.current) == null || f.focus()), d.preventDefault();
        },
        onCloseAutoFocus: (d) => d.preventDefault(),
        onFocusOutside: ne(e.onFocusOutside, (d) => {
          d.target !== s.trigger && i.onOpenChange(!1);
        }),
        onEscapeKeyDown: ne(e.onEscapeKeyDown, (d) => {
          a.onClose(), d.preventDefault();
        }),
        onKeyDown: ne(e.onKeyDown, (d) => {
          var g;
          const f = d.currentTarget.contains(d.target), h = EE[a.dir].includes(d.key);
          f && h && (i.onOpenChange(!1), (g = s.trigger) == null || g.focus(), d.preventDefault());
        })
      }
    ) }) }) });
  }
);
Jg.displayName = Qg;
function ev(e) {
  return e ? "open" : "closed";
}
function ei(e) {
  return e === "indeterminate";
}
function Vl(e) {
  return ei(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
function YE(e) {
  const t = document.activeElement;
  for (const n of e)
    if (n === t || (n.focus(), document.activeElement !== t)) return;
}
function XE(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
function qE(e, t, n) {
  const o = t.length > 1 && Array.from(t).every((u) => u === t[0]) ? t[0] : t, i = n ? e.indexOf(n) : -1;
  let a = XE(e, Math.max(i, 0));
  o.length === 1 && (a = a.filter((u) => u !== n));
  const c = a.find(
    (u) => u.toLowerCase().startsWith(o.toLowerCase())
  );
  return c !== n ? c : void 0;
}
function ZE(e, t) {
  const { x: n, y: r } = e;
  let o = !1;
  for (let i = 0, a = t.length - 1; i < t.length; a = i++) {
    const s = t[i].x, c = t[i].y, u = t[a].x, d = t[a].y;
    c > r != d > r && n < (u - s) * (r - c) / (d - c) + s && (o = !o);
  }
  return o;
}
function QE(e, t) {
  if (!t) return !1;
  const n = { x: e.clientX, y: e.clientY };
  return ZE(n, t);
}
function Wr(e) {
  return (t) => t.pointerType === "mouse" ? e(t) : void 0;
}
var JE = Lg, eA = _l, tA = Fg, nA = Vg, rA = Ol, oA = Bg, iA = $i, aA = $g, sA = Ug, lA = zg, cA = Kg, uA = Yg, dA = Xg, fA = Zg, hA = Jg, Bl = "DropdownMenu", [mA, aR] = Ot(
  Bl,
  [Rg]
), Ze = Rg(), [pA, tv] = mA(Bl), nv = (e) => {
  const {
    __scopeDropdownMenu: t,
    children: n,
    dir: r,
    open: o,
    defaultOpen: i,
    onOpenChange: a,
    modal: s = !0
  } = e, c = Ze(t), u = m.useRef(null), [d = !1, f] = Ct({
    prop: o,
    defaultProp: i,
    onChange: a
  });
  return /* @__PURE__ */ l(
    pA,
    {
      scope: t,
      triggerId: ut(),
      triggerRef: u,
      contentId: ut(),
      open: d,
      onOpenChange: f,
      onOpenToggle: m.useCallback(() => f((h) => !h), [f]),
      modal: s,
      children: /* @__PURE__ */ l(JE, { ...c, open: d, onOpenChange: f, dir: r, modal: s, children: n })
    }
  );
};
nv.displayName = Bl;
var rv = "DropdownMenuTrigger", ov = m.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, disabled: r = !1, ...o } = e, i = tv(rv, n), a = Ze(n);
    return /* @__PURE__ */ l(eA, { asChild: !0, ...a, children: /* @__PURE__ */ l(
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
        ref: ps(t, i.triggerRef),
        onPointerDown: ne(e.onPointerDown, (s) => {
          !r && s.button === 0 && s.ctrlKey === !1 && (i.onOpenToggle(), i.open || s.preventDefault());
        }),
        onKeyDown: ne(e.onKeyDown, (s) => {
          r || (["Enter", " "].includes(s.key) && i.onOpenToggle(), s.key === "ArrowDown" && i.onOpenChange(!0), ["Enter", " ", "ArrowDown"].includes(s.key) && s.preventDefault());
        })
      }
    ) });
  }
);
ov.displayName = rv;
var gA = "DropdownMenuPortal", iv = (e) => {
  const { __scopeDropdownMenu: t, ...n } = e, r = Ze(t);
  return /* @__PURE__ */ l(tA, { ...r, ...n });
};
iv.displayName = gA;
var av = "DropdownMenuContent", sv = m.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, o = tv(av, n), i = Ze(n), a = m.useRef(!1);
    return /* @__PURE__ */ l(
      nA,
      {
        id: o.contentId,
        "aria-labelledby": o.triggerId,
        ...i,
        ...r,
        ref: t,
        onCloseAutoFocus: ne(e.onCloseAutoFocus, (s) => {
          var c;
          a.current || (c = o.triggerRef.current) == null || c.focus(), a.current = !1, s.preventDefault();
        }),
        onInteractOutside: ne(e.onInteractOutside, (s) => {
          const c = s.detail.originalEvent, u = c.button === 0 && c.ctrlKey === !0, d = c.button === 2 || u;
          (!o.modal || d) && (a.current = !0);
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
sv.displayName = av;
var vA = "DropdownMenuGroup", yA = m.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, o = Ze(n);
    return /* @__PURE__ */ l(rA, { ...o, ...r, ref: t });
  }
);
yA.displayName = vA;
var bA = "DropdownMenuLabel", lv = m.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, o = Ze(n);
    return /* @__PURE__ */ l(oA, { ...o, ...r, ref: t });
  }
);
lv.displayName = bA;
var wA = "DropdownMenuItem", cv = m.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, o = Ze(n);
    return /* @__PURE__ */ l(iA, { ...o, ...r, ref: t });
  }
);
cv.displayName = wA;
var xA = "DropdownMenuCheckboxItem", uv = m.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = Ze(n);
  return /* @__PURE__ */ l(aA, { ...o, ...r, ref: t });
});
uv.displayName = xA;
var CA = "DropdownMenuRadioGroup", SA = m.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = Ze(n);
  return /* @__PURE__ */ l(sA, { ...o, ...r, ref: t });
});
SA.displayName = CA;
var NA = "DropdownMenuRadioItem", dv = m.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = Ze(n);
  return /* @__PURE__ */ l(lA, { ...o, ...r, ref: t });
});
dv.displayName = NA;
var MA = "DropdownMenuItemIndicator", fv = m.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = Ze(n);
  return /* @__PURE__ */ l(cA, { ...o, ...r, ref: t });
});
fv.displayName = MA;
var PA = "DropdownMenuSeparator", hv = m.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = Ze(n);
  return /* @__PURE__ */ l(uA, { ...o, ...r, ref: t });
});
hv.displayName = PA;
var TA = "DropdownMenuArrow", kA = m.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, o = Ze(n);
    return /* @__PURE__ */ l(dA, { ...o, ...r, ref: t });
  }
);
kA.displayName = TA;
var EA = "DropdownMenuSubTrigger", mv = m.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = Ze(n);
  return /* @__PURE__ */ l(fA, { ...o, ...r, ref: t });
});
mv.displayName = EA;
var AA = "DropdownMenuSubContent", pv = m.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = Ze(n);
  return /* @__PURE__ */ l(
    hA,
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
pv.displayName = AA;
var DA = nv, _A = ov, RA = iv, gv = sv, vv = lv, yv = cv, bv = uv, wv = dv, xv = fv, Cv = hv, Sv = mv, Nv = pv;
const IA = DA, LA = _A, OA = m.forwardRef(({ className: e, inset: t, children: n, ...r }, o) => /* @__PURE__ */ N(
  Sv,
  {
    ref: o,
    className: E(
      "flex cursor-default select-none items-center rounded-2xs px-2 py-1.5 text-sm outline-none focus:bg-f1-background-secondary data-[state=open]:bg-f1-background-secondary",
      t && "pl-8",
      e
    ),
    ...r,
    children: [
      n,
      /* @__PURE__ */ l(Ks, { className: "ml-auto h-4 w-4" })
    ]
  }
));
OA.displayName = Sv.displayName;
const FA = m.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l(
  Nv,
  {
    ref: n,
    className: E(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-f1-background text-f1-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    ...t
  }
));
FA.displayName = Nv.displayName;
const Mv = m.forwardRef(({ className: e, sideOffset: t = 4, ...n }, r) => /* @__PURE__ */ l(RA, { children: /* @__PURE__ */ l(
  gv,
  {
    ref: r,
    sideOffset: t,
    className: E(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border border-solid border-f1-border-secondary bg-f1-background text-f1-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    ...n
  }
) }));
Mv.displayName = gv.displayName;
const Pv = m.forwardRef(({ className: e, inset: t, ...n }, r) => /* @__PURE__ */ l(
  yv,
  {
    ref: r,
    className: E(
      "relative flex cursor-default select-none items-center rounded px-3 py-2 text-base font-medium outline-none transition-colors after:absolute after:inset-x-1 after:inset-y-0 after:h-full after:rounded after:bg-f1-background-hover after:opacity-0 after:transition-opacity after:duration-75 after:content-[''] first:pt-3 first:after:top-1 first:after:h-[calc(100%-0.25rem)] last:pb-3 last:after:bottom-1 last:after:h-[calc(100%-0.25rem)] hover:after:opacity-100 focus:after:opacity-100 data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      "focus:outline-none focus:ring-0 focus:ring-transparent",
      // Temporal fix for Gamma issue
      t && "pl-8",
      e
    ),
    ...n
  }
));
Pv.displayName = yv.displayName;
const VA = m.forwardRef(({ className: e, children: t, checked: n, ...r }, o) => /* @__PURE__ */ N(
  bv,
  {
    ref: o,
    className: E(
      "relative flex cursor-default select-none items-center rounded-xs py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-f1-background-secondary focus:text-f1-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    checked: n,
    ...r,
    children: [
      /* @__PURE__ */ l("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ l(xv, { children: /* @__PURE__ */ l(BC, { className: "h-4 w-4" }) }) }),
      t
    ]
  }
));
VA.displayName = bv.displayName;
const BA = m.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ N(
  wv,
  {
    ref: r,
    className: E(
      "relative flex cursor-default select-none items-center rounded-xs py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-f1-background-secondary focus:text-f1-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    ...n,
    children: [
      /* @__PURE__ */ l("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ l(xv, { children: /* @__PURE__ */ l(jC, { className: "h-2 w-2 fill-current" }) }) }),
      t
    ]
  }
));
BA.displayName = wv.displayName;
const WA = m.forwardRef(({ className: e, inset: t, ...n }, r) => /* @__PURE__ */ l(
  vv,
  {
    ref: r,
    className: E(
      "px-2 py-1.5 text-sm font-semibold",
      t && "pl-8",
      e
    ),
    ...n
  }
));
WA.displayName = vv.displayName;
const Tv = m.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l(
  Cv,
  {
    ref: n,
    className: E("-mx-1 my-1 h-px bg-f1-border-secondary", e),
    ...t
  }
));
Tv.displayName = Cv.displayName;
const $A = ({ item: e }) => {
  const { label: t, ...n } = e, r = /* @__PURE__ */ N(xe, { children: [
    e.avatar && ll(e.avatar, "xsmall"),
    e.icon && /* @__PURE__ */ l(
      be,
      {
        icon: e.icon,
        size: "md",
        className: E(
          "text-f1-icon",
          e.critical && "text-f1-icon-critical"
        )
      }
    ),
    /* @__PURE__ */ N("div", { className: "flex flex-col items-start", children: [
      t,
      e.description && /* @__PURE__ */ l(
        "div",
        {
          className: E(
            "font-normal text-f1-foreground-secondary",
            e.critical && "text-f1-foreground-critical"
          ),
          children: e.description
        }
      )
    ] })
  ] }), o = E(
    "flex items-start gap-1.5 w-full",
    e.critical && "text-f1-foreground-critical"
  );
  return /* @__PURE__ */ l(Pv, { asChild: !0, onClick: e.onClick, className: o, children: e.href ? /* @__PURE__ */ l(
    Jt,
    {
      href: e.href,
      className: E(
        o,
        "text-f1-foreground no-underline hover:cursor-pointer"
      ),
      ...n,
      children: r
    }
  ) : /* @__PURE__ */ l("div", { className: o, children: r }) });
};
function ji({ items: e, children: t }) {
  return /* @__PURE__ */ N(IA, { children: [
    /* @__PURE__ */ l(LA, { asChild: !0, children: t || /* @__PURE__ */ l(
      ft,
      {
        hideLabel: !0,
        icon: tM,
        label: "...",
        round: !0,
        variant: "outline"
      }
    ) }),
    /* @__PURE__ */ l(Mv, { className: "min-w-[var(--radix-dropdown-menu-trigger-width)]", children: /* @__PURE__ */ l("div", { className: "flex flex-col", children: e.map(
      (n, r) => n === "separator" ? /* @__PURE__ */ l(Tv, {}, `separator-${r}`) : /* @__PURE__ */ l(
        $A,
        {
          item: {
            ...n,
            onClick: n.onClick
          }
        },
        r
      )
    ) }) })
  ] });
}
function Sd({ item: e, isLast: t }) {
  const { label: n, ...r } = e;
  return /* @__PURE__ */ l(Eg, { children: t ? /* @__PURE__ */ l(Dg, { children: e.label }) : /* @__PURE__ */ N(xe, { children: [
    /* @__PURE__ */ l(
      Ag,
      {
        className: E("max-w-40", e.icon && "pl-0.5"),
        asChild: !0,
        children: /* @__PURE__ */ N(
          Jt,
          {
            ...r,
            className: E("flex items-center gap-1.5", mt()),
            children: [
              e.icon && /* @__PURE__ */ l(Oi, { icon: e.icon, size: "sm" }),
              /* @__PURE__ */ l("span", { className: "truncate", children: e.label })
            ]
          }
        )
      }
    ),
    /* @__PURE__ */ l(Dl, { children: /* @__PURE__ */ l(Zr, { className: "h-4 w-4 text-f1-icon-secondary" }) })
  ] }) });
}
function jA({ breadcrumbs: e }) {
  const [t, n] = ke(2), r = Ve(null);
  Fe(() => {
    const s = r.current;
    if (!s) return;
    const c = () => {
      if (!r.current || e.length <= 2) {
        n(e.length);
        return;
      }
      const d = r.current.offsetWidth, f = 150, h = 50;
      let g = d - f, p = 1;
      for (let v = e.length - 1; v > 0 && !(g < f); v--)
        g -= f, p++;
      if (p < e.length - 1)
        for (g -= h; g < 0 && p > 1; )
          g += f, p--;
      n(p);
    }, u = new ResizeObserver(() => {
      c();
    });
    return u.observe(s), c(), () => {
      u.disconnect();
    };
  }, [e]);
  const o = e[0], i = e.slice(-t + 1), a = e.slice(1, -t + 1);
  return /* @__PURE__ */ l(Tg, { ref: r, className: "w-full", children: /* @__PURE__ */ N(kg, { children: [
    /* @__PURE__ */ l(Sd, { item: o, isLast: !1 }),
    a.length > 0 && /* @__PURE__ */ N(xe, { children: [
      /* @__PURE__ */ l(ji, { items: a, children: /* @__PURE__ */ l("li", { className: "rounded-sm px-1.5 py-0.5 font-medium text-f1-foreground no-underline transition-colors hover:bg-f1-background-secondary", children: "..." }) }),
      /* @__PURE__ */ l(Dl, { children: /* @__PURE__ */ l(Zr, { className: "h-4 w-4 text-f1-icon-secondary" }) })
    ] }),
    i.map((s, c) => /* @__PURE__ */ l(
      Sd,
      {
        item: s,
        isLast: c === i.length - 1
      },
      c
    ))
  ] }) });
}
function kv({
  label: e,
  description: t,
  children: n,
  shortcut: r
}) {
  return /* @__PURE__ */ l(Wd, { children: /* @__PURE__ */ N($d, { children: [
    /* @__PURE__ */ l(jd, { asChild: !0, children: n }),
    /* @__PURE__ */ l(Ud, { className: E("max-w-xs", r && "pr-1.5"), children: /* @__PURE__ */ N("div", { className: "flex flex-col gap-0.5", children: [
      /* @__PURE__ */ N("div", { className: "flex items-center gap-2", children: [
        e && /* @__PURE__ */ l("p", { className: "font-semibold", children: e }),
        r && /* @__PURE__ */ l(pg, { keys: r, variant: "inverse" })
      ] }),
      t && /* @__PURE__ */ l("p", { className: "font-normal", children: t })
    ] }) })
  ] }) });
}
function sR({
  module: e,
  statusTag: t = void 0,
  breadcrumbs: n = [],
  actions: r = []
}) {
  const { sidebarState: o, toggleSidebar: i } = Vi(), a = [
    { label: e.name, href: e.href, icon: e.icon },
    ...n
  ], s = t && Object.keys(t).length !== 0, c = n.length > 0, u = r.length > 0;
  return /* @__PURE__ */ N(
    "div",
    {
      className: E(
        "flex h-16 items-center justify-between px-5 py-4 xs:px-6",
        c && "border-b border-dashed border-transparent border-b-f1-border"
      ),
      children: [
        /* @__PURE__ */ N("div", { className: "flex flex-grow items-center", children: [
          /* @__PURE__ */ l(js, { children: o !== "locked" && /* @__PURE__ */ l(
            Nt.div,
            {
              initial: { opacity: 0, width: 0 },
              animate: { opacity: 1, width: "auto" },
              exit: { opacity: 0, width: 0 },
              children: /* @__PURE__ */ l("div", { className: "mr-3", children: /* @__PURE__ */ l(
                ft,
                {
                  variant: "ghost",
                  hideLabel: !0,
                  round: !0,
                  onClick: i,
                  label: "Menu",
                  icon: mM
                }
              ) })
            }
          ) }),
          /* @__PURE__ */ N("div", { className: "flex flex-grow items-center gap-2", children: [
            !c && /* @__PURE__ */ l(Oi, { icon: e.icon, size: "lg" }),
            a.length > 1 ? /* @__PURE__ */ l(jA, { breadcrumbs: a }) : /* @__PURE__ */ l("div", { className: "text-xl font-semibold text-f1-foreground", children: e.name })
          ] })
        ] }),
        /* @__PURE__ */ N("div", { className: "flex items-center", children: [
          !c && s && /* @__PURE__ */ l("div", { className: "pe-3", children: t.tooltip ? /* @__PURE__ */ l(kv, { label: t.tooltip, children: /* @__PURE__ */ l("div", { children: /* @__PURE__ */ l(
            Lr,
            {
              text: t.text,
              variant: t.variant,
              additionalAccesibleText: t.tooltip
            }
          ) }) }) : /* @__PURE__ */ l(Lr, { text: t.text, variant: t.variant }) }),
          s && u && /* @__PURE__ */ l("div", { className: "right-0 h-4 w-px bg-f1-border-secondary" }),
          u && /* @__PURE__ */ l("div", { className: "items-right flex gap-2 ps-3", children: r.map((d, f) => /* @__PURE__ */ l(UA, { action: d }, f)) })
        ] })
      ]
    }
  );
}
const Nd = Ie(
  "inline-flex aspect-square h-8 items-center justify-center rounded border border-solid border-f1-border bg-f1-background-inverse-secondary px-0 text-f1-foreground hover:border-f1-border-hover"
);
function UA({ action: e }) {
  return "actions" in e ? /* @__PURE__ */ l(ji, { items: e.actions, children: /* @__PURE__ */ l("button", { title: e.label, className: Nd(), children: /* @__PURE__ */ l(be, { icon: e.icon, size: "md" }) }) }) : /* @__PURE__ */ l(
    Jt,
    {
      href: e.href,
      title: e.label,
      className: Nd(),
      children: /* @__PURE__ */ l(be, { icon: e.icon, size: "md" })
    }
  );
}
function HA(e) {
  return e.filter((t) => !!t.title).map(({ title: t, description: n, href: r, onClick: o, target: i }) => ({
    label: t,
    description: n,
    href: r,
    onClick: o ? () => o(void 0) : void 0
  }));
}
function lR({ label: e, options: t, hasNewUpdate: n }) {
  return /* @__PURE__ */ l(
    "div",
    {
      className: "fixed z-10",
      style: {
        bottom: "calc(8px + env(safe-area-inset-bottom))",
        right: "calc(8px + env(safe-area-inset-right))"
      },
      children: /* @__PURE__ */ l(ji, { items: HA(t), children: /* @__PURE__ */ N(
        "button",
        {
          className: E(
            "relative flex h-6 w-6 items-center justify-center rounded-full bg-f1-background-bold text-f1-foreground-inverse shadow-md transition-all",
            mt()
          ),
          "aria-label": e,
          children: [
            /* @__PURE__ */ l(be, { icon: gM, size: "sm" }),
            n && /* @__PURE__ */ l("div", { className: "absolute right-0.5 top-0.5 h-1.5 w-1.5 rounded-full bg-f1-background-critical-bold ring-2 ring-f1-background-critical" })
          ]
        }
      ) })
    }
  );
}
function zA({ children: e, header: t }) {
  return /* @__PURE__ */ N("div", { className: "flex w-full flex-col overflow-hidden rounded-xl bg-f1-page ring-1 ring-inset ring-f1-border-secondary", children: [
    t && /* @__PURE__ */ l("div", { className: "flex flex-col", children: t }),
    /* @__PURE__ */ l("div", { className: "isolate flex w-full flex-1 flex-col overflow-auto [&>*]:flex-1", children: e })
  ] });
}
zA.displayName = "Page";
const GA = Ie(
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
function KA({ children: e, header: t, period: n }) {
  return /* @__PURE__ */ N("div", { className: "relative flex w-full flex-col overflow-hidden rounded-xl bg-f1-page shadow", children: [
    /* @__PURE__ */ l("div", { className: GA({ period: n }) }),
    t && /* @__PURE__ */ l("div", { className: "flex flex-col", children: t }),
    /* @__PURE__ */ l("div", { className: "isolate flex w-full flex-1 flex-col overflow-auto [&>*]:flex-1", children: e })
  ] });
}
KA.displayName = "DaytimePage";
function YA({
  companies: e,
  selected: t,
  onChange: n,
  isLoading: r = !1
}) {
  const o = St(
    () => e.find((i) => i.id === t) || e[0],
    [e, t]
  );
  return r ? /* @__PURE__ */ N("div", { className: "flex w-fit items-center gap-2 p-1.5", children: [
    /* @__PURE__ */ l(Rt, { className: "size-6" }),
    /* @__PURE__ */ l(Rt, { className: "h-3 w-14" })
  ] }) : e.length === 1 ? /* @__PURE__ */ l("div", { className: "p-1.5", children: /* @__PURE__ */ l(Md, { company: o }) }) : /* @__PURE__ */ l(
    XA,
    {
      companies: e,
      selected: o,
      onChange: n,
      children: /* @__PURE__ */ l(Md, { company: o })
    }
  );
}
const XA = ({
  companies: e,
  selected: t,
  onChange: n,
  children: r
}) => {
  const [o, i] = ke(!1), a = St(
    () => e.map((s) => ({
      value: s.id,
      label: s.name,
      avatar: {
        type: "company",
        name: s.name,
        src: s.logo,
        "aria-label": `${s.name} logo`
      }
    })),
    [e]
  );
  return /* @__PURE__ */ l(
    nT,
    {
      options: a,
      value: t.id,
      onChange: n,
      placeholder: "Select a company",
      open: o,
      onOpenChange: i,
      children: /* @__PURE__ */ N(
        "div",
        {
          className: E(
            "group flex w-fit max-w-full flex-nowrap items-center justify-center gap-1 truncate rounded p-1.5 text-f1-foreground transition-colors hover:bg-f1-background-hover data-[state=open]:bg-f1-background-hover",
            mt()
          ),
          tabIndex: 0,
          title: t == null ? void 0 : t.name,
          children: [
            r,
            /* @__PURE__ */ l("div", { className: "flex w-5 shrink-0 items-center justify-center", children: /* @__PURE__ */ l("div", { className: "flex h-3 w-3 items-center justify-center rounded-2xs bg-f1-background-secondary transition-all", children: /* @__PURE__ */ l(
              Nt.div,
              {
                animate: { rotate: o ? 180 : 0 },
                transition: { duration: 0.2 },
                className: "flex h-3 w-3 items-center justify-center",
                children: /* @__PURE__ */ l(qr, { className: "h-3 w-3 shrink-0 text-f1-icon-bold" })
              }
            ) }) })
          ]
        }
      )
    }
  );
}, Md = ({
  company: e
}) => {
  var t;
  return /* @__PURE__ */ N(
    "div",
    {
      className: E(
        "flex w-fit min-w-0 max-w-full items-center gap-2 rounded text-lg font-semibold text-f1-foreground transition-colors"
      ),
      title: e == null ? void 0 : e.name,
      children: [
        /* @__PURE__ */ l(
          Mi,
          {
            name: (t = e == null ? void 0 : e.name) == null ? void 0 : t[0],
            src: e == null ? void 0 : e.logo,
            size: "small"
          }
        ),
        /* @__PURE__ */ l("div", { className: "min-w-0 flex-1", children: /* @__PURE__ */ l("span", { className: "block truncate", children: e == null ? void 0 : e.name }) })
      ]
    }
  );
};
function qA({ isExpanded: e }) {
  return /* @__PURE__ */ N(
    "svg",
    {
      width: "20",
      height: "20",
      viewBox: "0 0 20 20",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className: "text-f1-icon-bold",
      children: [
        /* @__PURE__ */ l(
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
        /* @__PURE__ */ l(
          "path",
          {
            id: "arrow",
            d: e ? "M10.417 10L14.167 10M10.417 10L12.0837 8.33337M10.417 10L12.0837 11.6667" : "M10.75 10L7 10M10.75 10L9.08333 8.33337M10.75 10L9.08333 11.6667",
            strokeWidth: "1.3",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            className: E(
              "translate-x-0 stroke-current transition-all duration-200 ease-out motion-reduce:transition-none",
              e ? "opacity-0 group-hover:-translate-x-1 group-hover:opacity-100" : "opacity-1 group-hover:translate-x-[3px]"
            )
          }
        ),
        /* @__PURE__ */ l(
          "path",
          {
            id: "line",
            d: "M7.5 5L7.5 15",
            strokeWidth: "1.3",
            strokeLinecap: "round",
            className: E(
              "stroke-current transition-all duration-200 ease-out motion-reduce:transition-none",
              e ? "translate-x-0 opacity-100 group-hover:-translate-x-0.5 group-hover:opacity-0" : "-translate-x-0.5 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
            )
          }
        )
      ]
    }
  );
}
function ZA() {
  const { sidebarState: e, toggleSidebar: t, isSmallScreen: n } = Vi();
  return /* @__PURE__ */ N(
    Sn,
    {
      variant: "ghost",
      size: "md",
      round: !0,
      onClick: t,
      className: "group hover:bg-f1-background-hover",
      title: "Toggle Sidebar",
      children: [
        /* @__PURE__ */ l("div", { className: E("hidden", { flex: !n }), children: /* @__PURE__ */ l(qA, { isExpanded: e === "locked" }) }),
        /* @__PURE__ */ l("div", { className: E("hidden", { flex: n }), children: /* @__PURE__ */ l(be, { icon: ZN, size: "md" }) })
      ]
    }
  );
}
function cR({
  companies: e,
  selected: t,
  onChange: n
}) {
  return /* @__PURE__ */ N("div", { className: "flex h-[72px] items-center justify-between gap-3 px-3", children: [
    /* @__PURE__ */ l(
      YA,
      {
        companies: e,
        selected: t,
        onChange: n
      }
    ),
    /* @__PURE__ */ l(ZA, {})
  ] });
}
function QA(e, t = []) {
  let n = [];
  function r(i, a) {
    const s = m.createContext(a), c = n.length;
    n = [...n, a];
    const u = (f) => {
      var w;
      const { scope: h, children: g, ...p } = f, v = ((w = h == null ? void 0 : h[e]) == null ? void 0 : w[c]) || s, y = m.useMemo(() => p, Object.values(p));
      return /* @__PURE__ */ l(v.Provider, { value: y, children: g });
    };
    u.displayName = i + "Provider";
    function d(f, h) {
      var v;
      const g = ((v = h == null ? void 0 : h[e]) == null ? void 0 : v[c]) || s, p = m.useContext(g);
      if (p) return p;
      if (a !== void 0) return a;
      throw new Error(`\`${f}\` must be used within \`${i}\``);
    }
    return [u, d];
  }
  const o = () => {
    const i = n.map((a) => m.createContext(a));
    return function(s) {
      const c = (s == null ? void 0 : s[e]) || i;
      return m.useMemo(
        () => ({ [`__scope${e}`]: { ...s, [e]: c } }),
        [s, c]
      );
    };
  };
  return o.scopeName = e, [r, JA(o, ...t)];
}
function JA(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const n = () => {
    const r = e.map((o) => ({
      useScope: o(),
      scopeName: o.scopeName
    }));
    return function(i) {
      const a = r.reduce((s, { useScope: c, scopeName: u }) => {
        const f = c(i)[`__scope${u}`];
        return { ...s, ...f };
      }, {});
      return m.useMemo(() => ({ [`__scope${t.scopeName}`]: a }), [a]);
    };
  };
  return n.scopeName = t.scopeName, n;
}
function eD(e, t) {
  return m.useReducer((n, r) => t[n][r] ?? n, e);
}
var Ev = (e) => {
  const { present: t, children: n } = e, r = tD(t), o = typeof n == "function" ? n({ present: r.isPresent }) : m.Children.only(n), i = ve(r.ref, nD(o));
  return typeof n == "function" || r.isPresent ? m.cloneElement(o, { ref: i }) : null;
};
Ev.displayName = "Presence";
function tD(e) {
  const [t, n] = m.useState(), r = m.useRef({}), o = m.useRef(e), i = m.useRef("none"), a = e ? "mounted" : "unmounted", [s, c] = eD(a, {
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
  return m.useEffect(() => {
    const u = So(r.current);
    i.current = s === "mounted" ? u : "none";
  }, [s]), $e(() => {
    const u = r.current, d = o.current;
    if (d !== e) {
      const h = i.current, g = So(u);
      e ? c("MOUNT") : g === "none" || (u == null ? void 0 : u.display) === "none" ? c("UNMOUNT") : c(d && h !== g ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e;
    }
  }, [e, c]), $e(() => {
    if (t) {
      let u;
      const d = t.ownerDocument.defaultView ?? window, f = (g) => {
        const v = So(r.current).includes(g.animationName);
        if (g.target === t && v && (c("ANIMATION_END"), !o.current)) {
          const y = t.style.animationFillMode;
          t.style.animationFillMode = "forwards", u = d.setTimeout(() => {
            t.style.animationFillMode === "forwards" && (t.style.animationFillMode = y);
          });
        }
      }, h = (g) => {
        g.target === t && (i.current = So(r.current));
      };
      return t.addEventListener("animationstart", h), t.addEventListener("animationcancel", f), t.addEventListener("animationend", f), () => {
        d.clearTimeout(u), t.removeEventListener("animationstart", h), t.removeEventListener("animationcancel", f), t.removeEventListener("animationend", f);
      };
    } else
      c("ANIMATION_END");
  }, [t, c]), {
    isPresent: ["mounted", "unmountSuspended"].includes(s),
    ref: m.useCallback((u) => {
      u && (r.current = getComputedStyle(u)), n(u);
    }, [])
  };
}
function So(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function nD(e) {
  var r, o;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var Wl = "Collapsible", [rD, uR] = QA(Wl), [oD, $l] = rD(Wl), Av = m.forwardRef(
  (e, t) => {
    const {
      __scopeCollapsible: n,
      open: r,
      defaultOpen: o,
      disabled: i,
      onOpenChange: a,
      ...s
    } = e, [c = !1, u] = Ct({
      prop: r,
      defaultProp: o,
      onChange: a
    });
    return /* @__PURE__ */ l(
      oD,
      {
        scope: n,
        disabled: i,
        contentId: ut(),
        open: c,
        onOpenToggle: m.useCallback(() => u((d) => !d), [u]),
        children: /* @__PURE__ */ l(
          fe.div,
          {
            "data-state": Ul(c),
            "data-disabled": i ? "" : void 0,
            ...s,
            ref: t
          }
        )
      }
    );
  }
);
Av.displayName = Wl;
var Dv = "CollapsibleTrigger", _v = m.forwardRef(
  (e, t) => {
    const { __scopeCollapsible: n, ...r } = e, o = $l(Dv, n);
    return /* @__PURE__ */ l(
      fe.button,
      {
        type: "button",
        "aria-controls": o.contentId,
        "aria-expanded": o.open || !1,
        "data-state": Ul(o.open),
        "data-disabled": o.disabled ? "" : void 0,
        disabled: o.disabled,
        ...r,
        ref: t,
        onClick: ne(e.onClick, o.onOpenToggle)
      }
    );
  }
);
_v.displayName = Dv;
var jl = "CollapsibleContent", Rv = m.forwardRef(
  (e, t) => {
    const { forceMount: n, ...r } = e, o = $l(jl, e.__scopeCollapsible);
    return /* @__PURE__ */ l(Ev, { present: n || o.open, children: ({ present: i }) => /* @__PURE__ */ l(iD, { ...r, ref: t, present: i }) });
  }
);
Rv.displayName = jl;
var iD = m.forwardRef((e, t) => {
  const { __scopeCollapsible: n, present: r, children: o, ...i } = e, a = $l(jl, n), [s, c] = m.useState(r), u = m.useRef(null), d = ve(t, u), f = m.useRef(0), h = f.current, g = m.useRef(0), p = g.current, v = a.open || s, y = m.useRef(v), w = m.useRef();
  return m.useEffect(() => {
    const b = requestAnimationFrame(() => y.current = !1);
    return () => cancelAnimationFrame(b);
  }, []), $e(() => {
    const b = u.current;
    if (b) {
      w.current = w.current || {
        transitionDuration: b.style.transitionDuration,
        animationName: b.style.animationName
      }, b.style.transitionDuration = "0s", b.style.animationName = "none";
      const x = b.getBoundingClientRect();
      f.current = x.height, g.current = x.width, y.current || (b.style.transitionDuration = w.current.transitionDuration, b.style.animationName = w.current.animationName), c(r);
    }
  }, [a.open, r]), /* @__PURE__ */ l(
    fe.div,
    {
      "data-state": Ul(a.open),
      "data-disabled": a.disabled ? "" : void 0,
      id: a.contentId,
      hidden: !v,
      ...i,
      ref: d,
      style: {
        "--radix-collapsible-content-height": h ? `${h}px` : void 0,
        "--radix-collapsible-content-width": p ? `${p}px` : void 0,
        ...e.style
      },
      children: v && o
    }
  );
});
function Ul(e) {
  return e ? "open" : "closed";
}
var aD = Av;
const sD = aD, lD = _v, cD = Rv, uD = ({
  item: e,
  active: t
}) => /* @__PURE__ */ N("div", { className: "flex w-full items-center justify-between", children: [
  /* @__PURE__ */ N("div", { className: "flex items-center gap-1.5 font-medium text-f1-foreground", children: [
    /* @__PURE__ */ l(
      be,
      {
        icon: e.icon,
        size: "md",
        className: E(
          "transition-colors",
          t ? "text-f1-icon-bold" : "text-f1-icon"
        )
      }
    ),
    /* @__PURE__ */ l("span", { children: e.label })
  ] }),
  e.badge && /* @__PURE__ */ l(wl, { value: e.badge, size: "sm", type: "bold" })
] }), Pd = ({ item: e }) => {
  const { isActive: t } = ms(), { label: n, ...r } = e, o = t(r.href, { exact: r.exactMatch });
  return /* @__PURE__ */ l(
    Jt,
    {
      ...r,
      className: E(
        "flex cursor-pointer items-center rounded py-1.5 pl-1.5 pr-2 no-underline transition-colors",
        mt("focus-visible:ring-inset"),
        o ? "bg-f1-background-secondary text-f1-foreground" : "hover:bg-f1-background-secondary"
      ),
      children: /* @__PURE__ */ l(uD, { item: e, active: o })
    }
  );
}, dD = ({ category: e }) => {
  const [t, n] = ee.useState(e.isOpen !== !1), r = ai();
  return e.isRoot ? /* @__PURE__ */ l("div", { className: "flex flex-col gap-1 pb-3", children: e.items.map((o, i) => /* @__PURE__ */ l(Pd, { item: o }, i)) }) : /* @__PURE__ */ N(sD, { open: t, onOpenChange: n, children: [
    /* @__PURE__ */ N(
      lD,
      {
        className: E(
          "flex w-full cursor-pointer items-center justify-between border-t border-dashed border-transparent border-t-f1-border px-1.5 pb-2 pt-4 text-sm font-semibold uppercase tracking-wide text-f1-foreground-secondary",
          mt("focus-visible:rounded-md")
        ),
        children: [
          e.title,
          /* @__PURE__ */ l(
            Nt.div,
            {
              initial: !1,
              animate: { rotate: t ? 0 : -90 },
              transition: { duration: r ? 0 : 0.1 },
              children: /* @__PURE__ */ l(
                be,
                {
                  icon: qr,
                  size: "sm",
                  className: "text-f1-icon-secondary"
                }
              )
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ l(
      cD,
      {
        forceMount: !0,
        className: "flex flex-col gap-1 overflow-hidden pb-2",
        children: /* @__PURE__ */ l(
          Nt.div,
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
            children: /* @__PURE__ */ l("div", { className: "flex flex-col gap-1 pb-3", children: e.items.map((o, i) => /* @__PURE__ */ l(Pd, { item: o }, i)) })
          }
        )
      }
    )
  ] });
};
function dR({ tree: e }) {
  return /* @__PURE__ */ l("div", { className: "w-full bg-transparent px-3", children: e.map((t, n) => /* @__PURE__ */ l(dD, { category: t }, n)) });
}
function fR({
  onClick: e,
  placeholder: t,
  shortcut: n = ["cmd", "k"],
  ...r
}) {
  return /* @__PURE__ */ l("div", { className: "px-3", children: /* @__PURE__ */ N(
    "button",
    {
      onClick: e,
      className: E(
        "mb-[calc(0.75rem-1px)] flex w-full cursor-pointer items-center justify-between rounded bg-f1-background-inverse-secondary p-1.5 text-f1-foreground-secondary ring-1 ring-inset ring-f1-border-secondary transition-all hover:ring-f1-border-hover",
        mt()
      ),
      type: "button",
      ...r,
      children: [
        /* @__PURE__ */ N("div", { className: "flex items-center gap-1", children: [
          /* @__PURE__ */ l(be, { icon: wM, size: "md" }),
          /* @__PURE__ */ l("span", { children: t })
        ] }),
        /* @__PURE__ */ l("div", { className: "hidden xs:block", children: /* @__PURE__ */ l(pg, { keys: n }) })
      ]
    }
  ) });
}
const Td = ({ position: e }) => /* @__PURE__ */ l(
  Nt.div,
  {
    initial: { opacity: 0 },
    animate: { opacity: 0.5 },
    exit: { opacity: 0 },
    transition: { duration: 0.2, ease: "easeOut" },
    className: E(
      "pointer-events-none absolute inset-x-0 z-10 h-3 after:absolute after:inset-x-0 after:h-px after:bg-f1-background-bold after:opacity-[0.04] after:content-['']",
      e === "top" ? [
        "top-0",
        "bg-gradient-to-b from-f1-background-secondary to-transparent",
        "after:top-0"
      ] : [
        "bottom-0",
        "bg-gradient-to-t from-f1-background-secondary to-transparent",
        "after:bottom-0"
      ]
    )
  }
);
function hR({ header: e, body: t, footer: n }) {
  const { sidebarState: r, isSmallScreen: o } = Vi(), i = ai(), [a, s] = hc({ threshold: 1 }), [c, u] = hc({ threshold: 1 }), d = {
    x: {
      ease: r !== "locked" ? o ? [0.25, 0.46, 0.45, 0.94] : [0.175, 0.885, 0.32, 1.1] : [0, 0, 0.58, 1],
      duration: i ? 0 : r !== "locked" && !o ? 0.3 : 0.2
    },
    top: { duration: i ? 0 : 0.1 },
    left: { duration: i ? 0 : 0.1 },
    default: { duration: i ? 0 : 0.2 }
  };
  return /* @__PURE__ */ N(
    Nt.div,
    {
      initial: !1,
      className: E(
        "absolute bottom-0 left-0 top-0 z-10 flex w-[240px] flex-col transition-[background-color]",
        r === "locked" ? "h-full" : E(
          "border-solid border-f1-border-secondary shadow-lg backdrop-blur-2xl",
          o ? "h-full border-y-transparent border-l-transparent bg-f1-background/90" : "h-[calc(100%-16px)] bg-f1-background/60"
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
      transition: d,
      children: [
        /* @__PURE__ */ l("div", { className: "flex-shrink-0", children: e }),
        t && /* @__PURE__ */ N("div", { className: "relative flex-grow overflow-y-hidden", children: [
          /* @__PURE__ */ N(Ci, { className: "h-full", children: [
            /* @__PURE__ */ l("div", { ref: a, className: "h-px", "aria-hidden": "true" }),
            t,
            /* @__PURE__ */ l("div", { ref: c, className: "h-px", "aria-hidden": "true" })
          ] }),
          /* @__PURE__ */ N(js, { children: [
            !s && /* @__PURE__ */ l(Td, { position: "top" }),
            !u && /* @__PURE__ */ l(Td, { position: "bottom" })
          ] })
        ] }),
        /* @__PURE__ */ l("div", { className: "flex-shrink-0", children: n })
      ]
    }
  );
}
function mR({ firstName: e, lastName: t, avatarUrl: n, options: r }) {
  return /* @__PURE__ */ l("div", { className: "mx-3 pb-3 pt-3", children: /* @__PURE__ */ l(ji, { items: r, children: /* @__PURE__ */ N(
    "button",
    {
      className: E(
        "flex w-full items-center gap-1.5 rounded p-1.5 font-medium transition-colors hover:bg-f1-background-secondary data-[state=open]:bg-f1-background-secondary",
        mt("focus-visible:ring-inset")
      ),
      children: [
        /* @__PURE__ */ l(
          Qr,
          {
            src: n,
            firstName: e,
            lastName: t,
            size: "xsmall"
          }
        ),
        /* @__PURE__ */ N("span", { className: "min-w-0 truncate text-f1-foreground", children: [
          e,
          " ",
          t
        ] })
      ]
    }
  ) }) });
}
var ir = "NavigationMenu", [Hl, Iv, fD] = Jr(ir), [ls, hD, mD] = Jr(ir), [zl, pR] = Ot(
  ir,
  [fD, mD]
), [pD, vt] = zl(ir), [gD, vD] = zl(ir), Lv = m.forwardRef(
  (e, t) => {
    const {
      __scopeNavigationMenu: n,
      value: r,
      onValueChange: o,
      defaultValue: i,
      delayDuration: a = 200,
      skipDelayDuration: s = 300,
      orientation: c = "horizontal",
      dir: u,
      ...d
    } = e, [f, h] = m.useState(null), g = ve(t, (_) => h(_)), p = nr(u), v = m.useRef(0), y = m.useRef(0), w = m.useRef(0), [b, x] = m.useState(!0), [P = "", T] = Ct({
      prop: r,
      onChange: (_) => {
        const j = _ !== "", te = s > 0;
        j ? (window.clearTimeout(w.current), te && x(!1)) : (window.clearTimeout(w.current), w.current = window.setTimeout(
          () => x(!0),
          s
        )), o == null || o(_);
      },
      defaultProp: i
    }), R = m.useCallback(() => {
      window.clearTimeout(y.current), y.current = window.setTimeout(() => T(""), 150);
    }, [T]), F = m.useCallback(
      (_) => {
        window.clearTimeout(y.current), T(_);
      },
      [T]
    ), D = m.useCallback(
      (_) => {
        P === _ ? window.clearTimeout(y.current) : v.current = window.setTimeout(() => {
          window.clearTimeout(y.current), T(_);
        }, a);
      },
      [P, T, a]
    );
    return m.useEffect(() => () => {
      window.clearTimeout(v.current), window.clearTimeout(y.current), window.clearTimeout(w.current);
    }, []), /* @__PURE__ */ l(
      Fv,
      {
        scope: n,
        isRootMenu: !0,
        value: P,
        dir: p,
        orientation: c,
        rootNavigationMenu: f,
        onTriggerEnter: (_) => {
          window.clearTimeout(v.current), b ? D(_) : F(_);
        },
        onTriggerLeave: () => {
          window.clearTimeout(v.current), R();
        },
        onContentEnter: () => window.clearTimeout(y.current),
        onContentLeave: R,
        onItemSelect: (_) => {
          T((j) => j === _ ? "" : _);
        },
        onItemDismiss: () => T(""),
        children: /* @__PURE__ */ l(
          fe.nav,
          {
            "aria-label": "Main",
            "data-orientation": c,
            dir: p,
            ...d,
            ref: g
          }
        )
      }
    );
  }
);
Lv.displayName = ir;
var Ov = "NavigationMenuSub", yD = m.forwardRef(
  (e, t) => {
    const {
      __scopeNavigationMenu: n,
      value: r,
      onValueChange: o,
      defaultValue: i,
      orientation: a = "horizontal",
      ...s
    } = e, c = vt(Ov, n), [u = "", d] = Ct({
      prop: r,
      onChange: o,
      defaultProp: i
    });
    return /* @__PURE__ */ l(
      Fv,
      {
        scope: n,
        isRootMenu: !1,
        value: u,
        dir: c.dir,
        orientation: a,
        rootNavigationMenu: c.rootNavigationMenu,
        onTriggerEnter: (f) => d(f),
        onItemSelect: (f) => d(f),
        onItemDismiss: () => d(""),
        children: /* @__PURE__ */ l(fe.div, { "data-orientation": a, ...s, ref: t })
      }
    );
  }
);
yD.displayName = Ov;
var Fv = (e) => {
  const {
    scope: t,
    isRootMenu: n,
    rootNavigationMenu: r,
    dir: o,
    orientation: i,
    children: a,
    value: s,
    onItemSelect: c,
    onItemDismiss: u,
    onTriggerEnter: d,
    onTriggerLeave: f,
    onContentEnter: h,
    onContentLeave: g
  } = e, [p, v] = m.useState(null), [y, w] = m.useState(/* @__PURE__ */ new Map()), [b, x] = m.useState(null);
  return /* @__PURE__ */ l(
    pD,
    {
      scope: t,
      isRootMenu: n,
      rootNavigationMenu: r,
      value: s,
      previousValue: Tm(s),
      baseId: ut(),
      dir: o,
      orientation: i,
      viewport: p,
      onViewportChange: v,
      indicatorTrack: b,
      onIndicatorTrackChange: x,
      onTriggerEnter: Oe(d),
      onTriggerLeave: Oe(f),
      onContentEnter: Oe(h),
      onContentLeave: Oe(g),
      onItemSelect: Oe(c),
      onItemDismiss: Oe(u),
      onViewportContentChange: m.useCallback((P, T) => {
        w((R) => (R.set(P, T), new Map(R)));
      }, []),
      onViewportContentRemove: m.useCallback((P) => {
        w((T) => T.has(P) ? (T.delete(P), new Map(T)) : T);
      }, []),
      children: /* @__PURE__ */ l(Hl.Provider, { scope: t, children: /* @__PURE__ */ l(gD, { scope: t, items: y, children: a }) })
    }
  );
}, Vv = "NavigationMenuList", Bv = m.forwardRef(
  (e, t) => {
    const { __scopeNavigationMenu: n, ...r } = e, o = vt(Vv, n), i = /* @__PURE__ */ l(fe.ul, { "data-orientation": o.orientation, ...r, ref: t });
    return /* @__PURE__ */ l(fe.div, { style: { position: "relative" }, ref: o.onIndicatorTrackChange, children: /* @__PURE__ */ l(Hl.Slot, { scope: n, children: o.isRootMenu ? /* @__PURE__ */ l(zv, { asChild: !0, children: i }) : i }) });
  }
);
Bv.displayName = Vv;
var Wv = "NavigationMenuItem", [bD, $v] = zl(Wv), jv = m.forwardRef(
  (e, t) => {
    const { __scopeNavigationMenu: n, value: r, ...o } = e, i = ut(), a = r || i || "LEGACY_REACT_AUTO_VALUE", s = m.useRef(null), c = m.useRef(null), u = m.useRef(null), d = m.useRef(() => {
    }), f = m.useRef(!1), h = m.useCallback((p = "start") => {
      if (s.current) {
        d.current();
        const v = us(s.current);
        v.length && Yl(p === "start" ? v : v.reverse());
      }
    }, []), g = m.useCallback(() => {
      if (s.current) {
        const p = us(s.current);
        p.length && (d.current = AD(p));
      }
    }, []);
    return /* @__PURE__ */ l(
      bD,
      {
        scope: n,
        value: a,
        triggerRef: c,
        contentRef: s,
        focusProxyRef: u,
        wasEscapeCloseRef: f,
        onEntryKeyDown: h,
        onFocusProxyEnter: h,
        onRootContentClose: g,
        onContentFocusOutside: g,
        children: /* @__PURE__ */ l(fe.li, { ...o, ref: t })
      }
    );
  }
);
jv.displayName = Wv;
var cs = "NavigationMenuTrigger", wD = m.forwardRef((e, t) => {
  const { __scopeNavigationMenu: n, disabled: r, ...o } = e, i = vt(cs, e.__scopeNavigationMenu), a = $v(cs, e.__scopeNavigationMenu), s = m.useRef(null), c = ve(s, a.triggerRef, t), u = Kv(i.baseId, a.value), d = Yv(i.baseId, a.value), f = m.useRef(!1), h = m.useRef(!1), g = a.value === i.value;
  return /* @__PURE__ */ N(xe, { children: [
    /* @__PURE__ */ l(Hl.ItemSlot, { scope: n, value: a.value, children: /* @__PURE__ */ l(Gv, { asChild: !0, children: /* @__PURE__ */ l(
      fe.button,
      {
        id: u,
        disabled: r,
        "data-disabled": r ? "" : void 0,
        "data-state": Xl(g),
        "aria-expanded": g,
        "aria-controls": d,
        ...o,
        ref: c,
        onPointerEnter: ne(e.onPointerEnter, () => {
          h.current = !1, a.wasEscapeCloseRef.current = !1;
        }),
        onPointerMove: ne(
          e.onPointerMove,
          ti(() => {
            r || h.current || a.wasEscapeCloseRef.current || f.current || (i.onTriggerEnter(a.value), f.current = !0);
          })
        ),
        onPointerLeave: ne(
          e.onPointerLeave,
          ti(() => {
            r || (i.onTriggerLeave(), f.current = !1);
          })
        ),
        onClick: ne(e.onClick, () => {
          i.onItemSelect(a.value), h.current = g;
        }),
        onKeyDown: ne(e.onKeyDown, (p) => {
          const y = { horizontal: "ArrowDown", vertical: i.dir === "rtl" ? "ArrowLeft" : "ArrowRight" }[i.orientation];
          g && p.key === y && (a.onEntryKeyDown(), p.preventDefault());
        })
      }
    ) }) }),
    g && /* @__PURE__ */ N(xe, { children: [
      /* @__PURE__ */ l(
        c0,
        {
          "aria-hidden": !0,
          tabIndex: 0,
          ref: a.focusProxyRef,
          onFocus: (p) => {
            const v = a.contentRef.current, y = p.relatedTarget, w = y === s.current, b = v == null ? void 0 : v.contains(y);
            (w || !b) && a.onFocusProxyEnter(w ? "start" : "end");
          }
        }
      ),
      i.viewport && /* @__PURE__ */ l("span", { "aria-owns": d })
    ] })
  ] });
});
wD.displayName = cs;
var xD = "NavigationMenuLink", kd = "navigationMenu.linkSelect", Uv = m.forwardRef(
  (e, t) => {
    const { __scopeNavigationMenu: n, active: r, onSelect: o, ...i } = e;
    return /* @__PURE__ */ l(Gv, { asChild: !0, children: /* @__PURE__ */ l(
      fe.a,
      {
        "data-active": r ? "" : void 0,
        "aria-current": r ? "page" : void 0,
        ...i,
        ref: t,
        onClick: ne(
          e.onClick,
          (a) => {
            const s = a.target, c = new CustomEvent(kd, {
              bubbles: !0,
              cancelable: !0
            });
            if (s.addEventListener(kd, (u) => o == null ? void 0 : o(u), { once: !0 }), Da(s, c), !c.defaultPrevented && !a.metaKey) {
              const u = new CustomEvent(Do, {
                bubbles: !0,
                cancelable: !0
              });
              Da(s, u);
            }
          },
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
);
Uv.displayName = xD;
var Gl = "NavigationMenuIndicator", CD = m.forwardRef((e, t) => {
  const { forceMount: n, ...r } = e, o = vt(Gl, e.__scopeNavigationMenu), i = !!o.value;
  return o.indicatorTrack ? Xd.createPortal(
    /* @__PURE__ */ l(qe, { present: n || i, children: /* @__PURE__ */ l(SD, { ...r, ref: t }) }),
    o.indicatorTrack
  ) : null;
});
CD.displayName = Gl;
var SD = m.forwardRef((e, t) => {
  const { __scopeNavigationMenu: n, ...r } = e, o = vt(Gl, n), i = Iv(n), [a, s] = m.useState(
    null
  ), [c, u] = m.useState(null), d = o.orientation === "horizontal", f = !!o.value;
  m.useEffect(() => {
    var v;
    const p = (v = i().find((y) => y.value === o.value)) == null ? void 0 : v.ref.current;
    p && s(p);
  }, [i, o.value]);
  const h = () => {
    a && u({
      size: d ? a.offsetWidth : a.offsetHeight,
      offset: d ? a.offsetLeft : a.offsetTop
    });
  };
  return ds(a, h), ds(o.indicatorTrack, h), c ? /* @__PURE__ */ l(
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
}), Jn = "NavigationMenuContent", ND = m.forwardRef((e, t) => {
  const { forceMount: n, ...r } = e, o = vt(Jn, e.__scopeNavigationMenu), i = $v(Jn, e.__scopeNavigationMenu), a = ve(i.contentRef, t), s = i.value === o.value, c = {
    value: i.value,
    triggerRef: i.triggerRef,
    focusProxyRef: i.focusProxyRef,
    wasEscapeCloseRef: i.wasEscapeCloseRef,
    onContentFocusOutside: i.onContentFocusOutside,
    onRootContentClose: i.onRootContentClose,
    ...r
  };
  return o.viewport ? /* @__PURE__ */ l(MD, { forceMount: n, ...c, ref: a }) : /* @__PURE__ */ l(qe, { present: n || s, children: /* @__PURE__ */ l(
    Hv,
    {
      "data-state": Xl(s),
      ...c,
      ref: a,
      onPointerEnter: ne(e.onPointerEnter, o.onContentEnter),
      onPointerLeave: ne(
        e.onPointerLeave,
        ti(o.onContentLeave)
      ),
      style: {
        // Prevent interaction when animating out
        pointerEvents: !s && o.isRootMenu ? "none" : void 0,
        ...c.style
      }
    }
  ) });
});
ND.displayName = Jn;
var MD = m.forwardRef((e, t) => {
  const n = vt(Jn, e.__scopeNavigationMenu), { onViewportContentChange: r, onViewportContentRemove: o } = n;
  return $e(() => {
    r(e.value, {
      ref: t,
      ...e
    });
  }, [e, t, r]), $e(() => () => o(e.value), [e.value, o]), null;
}), Do = "navigationMenu.rootContentDismiss", Hv = m.forwardRef((e, t) => {
  const {
    __scopeNavigationMenu: n,
    value: r,
    triggerRef: o,
    focusProxyRef: i,
    wasEscapeCloseRef: a,
    onRootContentClose: s,
    onContentFocusOutside: c,
    ...u
  } = e, d = vt(Jn, n), f = m.useRef(null), h = ve(f, t), g = Kv(d.baseId, r), p = Yv(d.baseId, r), v = Iv(n), y = m.useRef(null), { onItemDismiss: w } = d;
  m.useEffect(() => {
    const x = f.current;
    if (d.isRootMenu && x) {
      const P = () => {
        var T;
        w(), s(), x.contains(document.activeElement) && ((T = o.current) == null || T.focus());
      };
      return x.addEventListener(Do, P), () => x.removeEventListener(Do, P);
    }
  }, [d.isRootMenu, e.value, o, w, s]);
  const b = m.useMemo(() => {
    const P = v().map((j) => j.value);
    d.dir === "rtl" && P.reverse();
    const T = P.indexOf(d.value), R = P.indexOf(d.previousValue), F = r === d.value, D = R === P.indexOf(r);
    if (!F && !D) return y.current;
    const _ = (() => {
      if (T !== R) {
        if (F && R !== -1) return T > R ? "from-end" : "from-start";
        if (D && T !== -1) return T > R ? "to-start" : "to-end";
      }
      return null;
    })();
    return y.current = _, _;
  }, [d.previousValue, d.value, d.dir, v, r]);
  return /* @__PURE__ */ l(zv, { asChild: !0, children: /* @__PURE__ */ l(
    ii,
    {
      id: p,
      "aria-labelledby": g,
      "data-motion": b,
      "data-orientation": d.orientation,
      ...u,
      ref: h,
      disableOutsidePointerEvents: !1,
      onDismiss: () => {
        var P;
        const x = new Event(Do, {
          bubbles: !0,
          cancelable: !0
        });
        (P = f.current) == null || P.dispatchEvent(x);
      },
      onFocusOutside: ne(e.onFocusOutside, (x) => {
        var T;
        c();
        const P = x.target;
        (T = d.rootNavigationMenu) != null && T.contains(P) && x.preventDefault();
      }),
      onPointerDownOutside: ne(e.onPointerDownOutside, (x) => {
        var F;
        const P = x.target, T = v().some((D) => {
          var _;
          return (_ = D.ref.current) == null ? void 0 : _.contains(P);
        }), R = d.isRootMenu && ((F = d.viewport) == null ? void 0 : F.contains(P));
        (T || R || !d.isRootMenu) && x.preventDefault();
      }),
      onKeyDown: ne(e.onKeyDown, (x) => {
        var R;
        const P = x.altKey || x.ctrlKey || x.metaKey;
        if (x.key === "Tab" && !P) {
          const F = us(x.currentTarget), D = document.activeElement, _ = F.findIndex((G) => G === D), te = x.shiftKey ? F.slice(0, _).reverse() : F.slice(_ + 1, F.length);
          Yl(te) ? x.preventDefault() : (R = i.current) == null || R.focus();
        }
      }),
      onEscapeKeyDown: ne(e.onEscapeKeyDown, (x) => {
        a.current = !0;
      })
    }
  ) });
}), Kl = "NavigationMenuViewport", PD = m.forwardRef((e, t) => {
  const { forceMount: n, ...r } = e, i = !!vt(Kl, e.__scopeNavigationMenu).value;
  return /* @__PURE__ */ l(qe, { present: n || i, children: /* @__PURE__ */ l(TD, { ...r, ref: t }) });
});
PD.displayName = Kl;
var TD = m.forwardRef((e, t) => {
  const { __scopeNavigationMenu: n, children: r, ...o } = e, i = vt(Kl, n), a = ve(t, i.onViewportChange), s = vD(
    Jn,
    e.__scopeNavigationMenu
  ), [c, u] = m.useState(null), [d, f] = m.useState(null), h = c ? (c == null ? void 0 : c.width) + "px" : void 0, g = c ? (c == null ? void 0 : c.height) + "px" : void 0, p = !!i.value, v = p ? i.value : i.previousValue;
  return ds(d, () => {
    d && u({ width: d.offsetWidth, height: d.offsetHeight });
  }), /* @__PURE__ */ l(
    fe.div,
    {
      "data-state": Xl(p),
      "data-orientation": i.orientation,
      ...o,
      ref: a,
      style: {
        // Prevent interaction when animating out
        pointerEvents: !p && i.isRootMenu ? "none" : void 0,
        "--radix-navigation-menu-viewport-width": h,
        "--radix-navigation-menu-viewport-height": g,
        ...o.style
      },
      onPointerEnter: ne(e.onPointerEnter, i.onContentEnter),
      onPointerLeave: ne(e.onPointerLeave, ti(i.onContentLeave)),
      children: Array.from(s.items).map(([w, { ref: b, forceMount: x, ...P }]) => {
        const T = v === w;
        return /* @__PURE__ */ l(qe, { present: x || T, children: /* @__PURE__ */ l(
          Hv,
          {
            ...P,
            ref: ps(b, (R) => {
              T && R && f(R);
            })
          }
        ) }, w);
      })
    }
  );
}), kD = "FocusGroup", zv = m.forwardRef(
  (e, t) => {
    const { __scopeNavigationMenu: n, ...r } = e, o = vt(kD, n);
    return /* @__PURE__ */ l(ls.Provider, { scope: n, children: /* @__PURE__ */ l(ls.Slot, { scope: n, children: /* @__PURE__ */ l(fe.div, { dir: o.dir, ...r, ref: t }) }) });
  }
), Ed = ["ArrowRight", "ArrowLeft", "ArrowUp", "ArrowDown"], ED = "FocusGroupItem", Gv = m.forwardRef(
  (e, t) => {
    const { __scopeNavigationMenu: n, ...r } = e, o = hD(n), i = vt(ED, n);
    return /* @__PURE__ */ l(ls.ItemSlot, { scope: n, children: /* @__PURE__ */ l(
      fe.button,
      {
        ...r,
        ref: t,
        onKeyDown: ne(e.onKeyDown, (a) => {
          if (["Home", "End", ...Ed].includes(a.key)) {
            let c = o().map((f) => f.ref.current);
            if ([i.dir === "rtl" ? "ArrowRight" : "ArrowLeft", "ArrowUp", "End"].includes(a.key) && c.reverse(), Ed.includes(a.key)) {
              const f = c.indexOf(a.currentTarget);
              c = c.slice(f + 1);
            }
            setTimeout(() => Yl(c)), a.preventDefault();
          }
        })
      }
    ) });
  }
);
function us(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => {
      const o = r.tagName === "INPUT" && r.type === "hidden";
      return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function Yl(e) {
  const t = document.activeElement;
  return e.some((n) => n === t ? !0 : (n.focus(), document.activeElement !== t));
}
function AD(e) {
  return e.forEach((t) => {
    t.dataset.tabindex = t.getAttribute("tabindex") || "", t.setAttribute("tabindex", "-1");
  }), () => {
    e.forEach((t) => {
      const n = t.dataset.tabindex;
      t.setAttribute("tabindex", n);
    });
  };
}
function ds(e, t) {
  const n = Oe(t);
  $e(() => {
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
function Xl(e) {
  return e ? "open" : "closed";
}
function Kv(e, t) {
  return `${e}-trigger-${t}`;
}
function Yv(e, t) {
  return `${e}-content-${t}`;
}
function ti(e) {
  return (t) => t.pointerType === "mouse" ? e(t) : void 0;
}
var DD = Lv, _D = Bv, RD = jv, ID = Uv;
function LD(e, t) {
  const { asChild: n, children: r } = e;
  if (!n)
    return typeof t == "function" ? t(r) : t;
  const o = m.Children.only(r);
  return m.cloneElement(o, {
    children: typeof t == "function" ? t(o.props.children) : t
  });
}
const OD = Ie(
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
), ql = m.forwardRef(({ className: e, children: t, secondary: n, ...r }, o) => {
  const i = si();
  return /* @__PURE__ */ l(
    DD,
    {
      ref: o,
      ...r,
      asChild: !1,
      children: /* @__PURE__ */ l(bC, { id: i, children: /* @__PURE__ */ l(
        _D,
        {
          className: E(OD({ secondary: n }), e),
          children: t
        }
      ) })
    }
  );
});
ql.displayName = "TabNavigation";
const FD = Ie(
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
), VD = m.forwardRef(function({ asChild: t, disabled: n, active: r, className: o, children: i, secondary: a, ...s }, c) {
  return /* @__PURE__ */ l(RD, { className: "flex", children: /* @__PURE__ */ l(
    ID,
    {
      "data-active": r ? "true" : void 0,
      "aria-disabled": n || void 0,
      className: E(
        "group relative flex shrink-0 select-none items-center justify-center rounded-md no-underline focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-f1-ring focus-visible:ring-offset-1",
        n ? "pointer-events-none" : ""
      ),
      ref: c,
      onSelect: () => {
      },
      asChild: t,
      ...s,
      children: LD({ asChild: t, children: i }, (u) => /* @__PURE__ */ N(
        "span",
        {
          className: E(
            "text-f1-foreground-secondary ring-1 ring-inset ring-transparent",
            FD({ secondary: a, disabled: n }),
            o
          ),
          children: [
            u,
            r && !a && /* @__PURE__ */ l(
              Nt.div,
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
}), BD = ({
  className: e
}) => /* @__PURE__ */ l("li", { className: "list-none", children: /* @__PURE__ */ l(
  Rt,
  {
    className: E(
      "mr-4 w-20 rounded-md py-1.5 ring-1 ring-inset ring-transparent",
      e
    ),
    children: " "
  }
) }), pr = gt(
  VD,
  BD
), WD = ({ tabs: e, secondary: t = !1 }) => {
  const { isActive: n } = ms(), o = [...e].sort((i, a) => i.index ? 1 : a.index ? -1 : 0).find((i) => n(i.href));
  return /* @__PURE__ */ l(
    ql,
    {
      secondary: t,
      asChild: !0,
      "aria-label": t ? "primary-navigation" : "secondary-navigation",
      children: e.length === 1 ? /* @__PURE__ */ l("li", { className: "flex h-8 items-center justify-center whitespace-nowrap text-lg font-medium text-f1-foreground", children: e[0].label }) : e.map(({ label: i, ...a }, s) => /* @__PURE__ */ l(
        pr,
        {
          active: (o == null ? void 0 : o.href) === a.href,
          href: a.href,
          secondary: t,
          asChild: !0,
          children: /* @__PURE__ */ l(Jt, { role: "link", ...a, children: i })
        },
        s
      ))
    }
  );
}, $D = ({
  secondary: e
}) => /* @__PURE__ */ N(
  ql,
  {
    "aria-label": e ? "Secondary empty nav" : "Main empty nav",
    secondary: e,
    "aria-busy": "true",
    "aria-live": "polite",
    children: [
      /* @__PURE__ */ l(pr.Skeleton, { className: "w-24" }),
      /* @__PURE__ */ l(pr.Skeleton, { className: "w-20" }),
      /* @__PURE__ */ l(pr.Skeleton, { className: "w-28" }),
      /* @__PURE__ */ l(pr.Skeleton, { className: "w-20" })
    ]
  }
), gR = gt(WD, $D);
var Zl = "Dialog", [Xv, vR] = Ot(Zl), [jD, Tt] = Xv(Zl), qv = (e) => {
  const {
    __scopeDialog: t,
    children: n,
    open: r,
    defaultOpen: o,
    onOpenChange: i,
    modal: a = !0
  } = e, s = m.useRef(null), c = m.useRef(null), [u = !1, d] = Ct({
    prop: r,
    defaultProp: o,
    onChange: i
  });
  return /* @__PURE__ */ l(
    jD,
    {
      scope: t,
      triggerRef: s,
      contentRef: c,
      contentId: ut(),
      titleId: ut(),
      descriptionId: ut(),
      open: u,
      onOpenChange: d,
      onOpenToggle: m.useCallback(() => d((f) => !f), [d]),
      modal: a,
      children: n
    }
  );
};
qv.displayName = Zl;
var Zv = "DialogTrigger", UD = m.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = Tt(Zv, n), i = ve(t, o.triggerRef);
    return /* @__PURE__ */ l(
      fe.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": o.open,
        "aria-controls": o.contentId,
        "data-state": ec(o.open),
        ...r,
        ref: i,
        onClick: ne(e.onClick, o.onOpenToggle)
      }
    );
  }
);
UD.displayName = Zv;
var Ql = "DialogPortal", [HD, Qv] = Xv(Ql, {
  forceMount: void 0
}), Jv = (e) => {
  const { __scopeDialog: t, forceMount: n, children: r, container: o } = e, i = Tt(Ql, t);
  return /* @__PURE__ */ l(HD, { scope: t, forceMount: n, children: m.Children.map(r, (a) => /* @__PURE__ */ l(qe, { present: n || i.open, children: /* @__PURE__ */ l(ci, { asChild: !0, container: o, children: a }) })) });
};
Jv.displayName = Ql;
var ni = "DialogOverlay", ey = m.forwardRef(
  (e, t) => {
    const n = Qv(ni, e.__scopeDialog), { forceMount: r = n.forceMount, ...o } = e, i = Tt(ni, e.__scopeDialog);
    return i.modal ? /* @__PURE__ */ l(qe, { present: r || i.open, children: /* @__PURE__ */ l(zD, { ...o, ref: t }) }) : null;
  }
);
ey.displayName = ni;
var zD = m.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = Tt(ni, n);
    return (
      // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
      // ie. when `Overlay` and `Content` are siblings
      /* @__PURE__ */ l(ki, { as: Cn, allowPinchZoom: !0, shards: [o.contentRef], children: /* @__PURE__ */ l(
        fe.div,
        {
          "data-state": ec(o.open),
          ...r,
          ref: t,
          style: { pointerEvents: "auto", ...r.style }
        }
      ) })
    );
  }
), Tn = "DialogContent", ty = m.forwardRef(
  (e, t) => {
    const n = Qv(Tn, e.__scopeDialog), { forceMount: r = n.forceMount, ...o } = e, i = Tt(Tn, e.__scopeDialog);
    return /* @__PURE__ */ l(qe, { present: r || i.open, children: i.modal ? /* @__PURE__ */ l(GD, { ...o, ref: t }) : /* @__PURE__ */ l(KD, { ...o, ref: t }) });
  }
);
ty.displayName = Tn;
var GD = m.forwardRef(
  (e, t) => {
    const n = Tt(Tn, e.__scopeDialog), r = m.useRef(null), o = ve(t, n.contentRef, r);
    return m.useEffect(() => {
      const i = r.current;
      if (i) return ul(i);
    }, []), /* @__PURE__ */ l(
      ny,
      {
        ...e,
        ref: o,
        trapFocus: n.open,
        disableOutsidePointerEvents: !0,
        onCloseAutoFocus: ne(e.onCloseAutoFocus, (i) => {
          var a;
          i.preventDefault(), (a = n.triggerRef.current) == null || a.focus();
        }),
        onPointerDownOutside: ne(e.onPointerDownOutside, (i) => {
          const a = i.detail.originalEvent, s = a.button === 0 && a.ctrlKey === !0;
          (a.button === 2 || s) && i.preventDefault();
        }),
        onFocusOutside: ne(
          e.onFocusOutside,
          (i) => i.preventDefault()
        )
      }
    );
  }
), KD = m.forwardRef(
  (e, t) => {
    const n = Tt(Tn, e.__scopeDialog), r = m.useRef(!1), o = m.useRef(!1);
    return /* @__PURE__ */ l(
      ny,
      {
        ...e,
        ref: t,
        trapFocus: !1,
        disableOutsidePointerEvents: !1,
        onCloseAutoFocus: (i) => {
          var a, s;
          (a = e.onCloseAutoFocus) == null || a.call(e, i), i.defaultPrevented || (r.current || (s = n.triggerRef.current) == null || s.focus(), i.preventDefault()), r.current = !1, o.current = !1;
        },
        onInteractOutside: (i) => {
          var c, u;
          (c = e.onInteractOutside) == null || c.call(e, i), i.defaultPrevented || (r.current = !0, i.detail.originalEvent.type === "pointerdown" && (o.current = !0));
          const a = i.target;
          ((u = n.triggerRef.current) == null ? void 0 : u.contains(a)) && i.preventDefault(), i.detail.originalEvent.type === "focusin" && o.current && i.preventDefault();
        }
      }
    );
  }
), ny = m.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, trapFocus: r, onOpenAutoFocus: o, onCloseAutoFocus: i, ...a } = e, s = Tt(Tn, n), c = m.useRef(null), u = ve(t, c);
    return cl(), /* @__PURE__ */ N(xe, { children: [
      /* @__PURE__ */ l(
        Pi,
        {
          asChild: !0,
          loop: !0,
          trapped: r,
          onMountAutoFocus: o,
          onUnmountAutoFocus: i,
          children: /* @__PURE__ */ l(
            ii,
            {
              role: "dialog",
              id: s.contentId,
              "aria-describedby": s.descriptionId,
              "aria-labelledby": s.titleId,
              "data-state": ec(s.open),
              ...a,
              ref: u,
              onDismiss: () => s.onOpenChange(!1)
            }
          )
        }
      ),
      /* @__PURE__ */ N(xe, { children: [
        /* @__PURE__ */ l(YD, { titleId: s.titleId }),
        /* @__PURE__ */ l(qD, { contentRef: c, descriptionId: s.descriptionId })
      ] })
    ] });
  }
), Jl = "DialogTitle", ry = m.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = Tt(Jl, n);
    return /* @__PURE__ */ l(fe.h2, { id: o.titleId, ...r, ref: t });
  }
);
ry.displayName = Jl;
var oy = "DialogDescription", iy = m.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = Tt(oy, n);
    return /* @__PURE__ */ l(fe.p, { id: o.descriptionId, ...r, ref: t });
  }
);
iy.displayName = oy;
var ay = "DialogClose", sy = m.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = Tt(ay, n);
    return /* @__PURE__ */ l(
      fe.button,
      {
        type: "button",
        ...r,
        ref: t,
        onClick: ne(e.onClick, () => o.onOpenChange(!1))
      }
    );
  }
);
sy.displayName = ay;
function ec(e) {
  return e ? "open" : "closed";
}
var ly = "DialogTitleWarning", [yR, cy] = u0(ly, {
  contentName: Tn,
  titleName: Jl,
  docsSlug: "dialog"
}), YD = ({ titleId: e }) => {
  const t = cy(ly), n = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
  return m.useEffect(() => {
    e && (document.getElementById(e) || console.error(n));
  }, [n, e]), null;
}, XD = "DialogDescriptionWarning", qD = ({ contentRef: e, descriptionId: t }) => {
  const r = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${cy(XD).contentName}}.`;
  return m.useEffect(() => {
    var i;
    const o = (i = e.current) == null ? void 0 : i.getAttribute("aria-describedby");
    t && o && (document.getElementById(t) || console.warn(r));
  }, [r, e, t]), null;
}, ZD = qv, QD = Jv, uy = ey, dy = ty, fy = ry, hy = iy, JD = sy;
const e_ = ZD, t_ = QD, my = m.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l(
  uy,
  {
    ref: n,
    className: E(
      "fixed inset-0 z-50 bg-f1-background-bold/40 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      e
    ),
    ...t
  }
));
my.displayName = uy.displayName;
const py = m.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ l(t_, { children: /* @__PURE__ */ l(my, { className: "grid place-items-center overflow-y-auto sm:p-8", children: /* @__PURE__ */ N(
  dy,
  {
    ref: r,
    onInteractOutside: (o) => o.preventDefault(),
    className: E(
      "relative z-50 grid w-full origin-center gap-4 border bg-f1-background p-8 shadow-xl duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 sm:w-fit sm:min-w-[400px] sm:rounded-xl md:min-w-[456px]",
      e
    ),
    ...n,
    children: [
      t,
      /* @__PURE__ */ N(JD, { className: "ring-offset-background focus:ring-ring absolute right-2 top-2 rounded-2xs p-2 text-f1-foreground opacity-70 transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-f1-background-secondary data-[state=open]:text-f1-foreground-secondary", children: [
        /* @__PURE__ */ l(zC, { className: "h-5 w-5" }),
        /* @__PURE__ */ l("span", { className: "sr-only", children: "Close" })
      ] })
    ]
  }
) }) }));
py.displayName = dy.displayName;
const gy = ({
  className: e,
  ...t
}) => /* @__PURE__ */ l(
  "div",
  {
    className: E(
      "text-icon-neutral-bold absolute left-8 top-0 h-16 w-16 translate-y-[-50%] rounded-xl bg-f1-background p-4 shadow-md",
      e
    ),
    ...t
  }
);
gy.displayName = "DialogIcon";
const vy = ({
  className: e,
  ...t
}) => /* @__PURE__ */ l("div", { className: E("mt-5 flex flex-col text-left", e), ...t });
vy.displayName = "DialogHeader";
const yy = ({
  className: e,
  ...t
}) => /* @__PURE__ */ l(
  "div",
  {
    className: E(
      "-mx-8 -mb-8 mt-4 flex flex-col-reverse gap-0 rounded-bl-xl rounded-br-xl border-0 border-t border-solid border-f1-border bg-f1-background-secondary/50 px-8 py-4 sm:flex-row sm:justify-end sm:space-x-2",
      e
    ),
    ...t
  }
);
yy.displayName = "DialogFooter";
const by = m.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l(
  fy,
  {
    ref: n,
    className: E("mt-1 text-xl font-medium leading-none", e),
    ...t
  }
));
by.displayName = fy.displayName;
const wy = m.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l(
  hy,
  {
    ref: n,
    className: E("mt-2 text-base text-f1-foreground-secondary", e),
    ...t
  }
));
wy.displayName = hy.displayName;
const xy = X(
  ({ header: e, children: t, loading: n, actions: r, open: o, onClose: i }, a) => {
    const [s, c] = ke(!1), u = It(() => {
      c(!0);
      const d = setTimeout(() => {
        i == null || i(), c(!1);
      }, 200);
      return () => clearTimeout(d);
    }, [i]);
    return /* @__PURE__ */ l(
      e_,
      {
        open: o && !s,
        onOpenChange: (d) => !d && (u == null ? void 0 : u()),
        children: /* @__PURE__ */ N(py, { ref: a, children: [
          e && /* @__PURE__ */ N(vy, { children: [
            e.icon && /* @__PURE__ */ l(gy, { children: /* @__PURE__ */ l(be, { size: "lg", icon: e.icon }) }),
            /* @__PURE__ */ l(by, { children: e.title }),
            /* @__PURE__ */ l(wy, { children: e.description })
          ] }),
          /* @__PURE__ */ l("div", { className: "flex-grow flex-col", children: n ? /* @__PURE__ */ N("div", { className: "flex flex-col gap-4", children: [
            /* @__PURE__ */ l(Rt, { className: "h-6 w-full rounded-full" }),
            /* @__PURE__ */ l(Rt, { className: "h-6 w-full rounded-full" })
          ] }) : t }),
          r && /* @__PURE__ */ N(yy, { children: [
            r.secondary && /* @__PURE__ */ l(ft, { variant: "outline", ...r.secondary }),
            /* @__PURE__ */ l(ft, { variant: "default", ...r.primary })
          ] })
        ] })
      }
    );
  }
);
xy.displayName = "Dialog";
const bR = He(
  {
    name: "Dialog",
    type: "info"
  },
  xy
), Cy = X(
  ({ children: e, ...t }, n) => /* @__PURE__ */ l("div", { ref: n, ...t, className: "relative flex flex-1 [&>div]:flex-1", children: e })
);
Cy.displayName = "FullscreenLayout";
const n_ = X(function({ widgets: t, children: n }, r) {
  const o = Ve(null);
  x0(r, () => o.current);
  const { width: i } = d0(), a = !!i, s = a && i < 992;
  let c = li.toArray(t).filter((u) => !!u);
  return s ? (c = c.map((u, d) => /* @__PURE__ */ l("div", { className: "h-full [&>div]:h-full [&>div]:shadow-none", children: u }, d)), /* @__PURE__ */ l("div", { ref: o, className: "flex flex-col gap-6 px-3 pb-3 pt-2", children: a && /* @__PURE__ */ N(xe, { children: [
    /* @__PURE__ */ l(
      ME,
      {
        columns: {
          xs: 1,
          sm: 1,
          md: 2,
          lg: 2
        },
        showArrows: !1,
        children: c
      }
    ),
    /* @__PURE__ */ l("main", { children: n })
  ] }) })) : /* @__PURE__ */ l("div", { ref: o, className: "grid grid-cols-3 gap-6 px-6 pb-6 pt-2", children: a && /* @__PURE__ */ N(xe, { children: [
    /* @__PURE__ */ l("div", { className: "col-span-3 flex flex-row gap-6 *:flex-1", children: c.slice(0, 3) }),
    /* @__PURE__ */ l("main", { className: "col-span-2", children: n }),
    /* @__PURE__ */ l("div", { className: "flex flex-1 flex-col gap-6", children: c.slice(3) })
  ] }) });
}), r_ = 750, o_ = ({ text: e, children: t }) => {
  const [n, r] = ke(!1);
  Fe(() => {
    if (n) {
      const i = setTimeout(() => r(!1), r_);
      return () => clearTimeout(i);
    }
  }, [n]);
  const o = async () => {
    try {
      await navigator.clipboard.writeText(e), r(!0);
    } catch {
    }
  };
  return /* @__PURE__ */ N(
    "button",
    {
      type: "button",
      "aria-label": n ? "Copied!" : `Copy ${e}`,
      className: E(
        "group flex items-center gap-1.5 rounded p-1.5",
        "focus-visible:outline focus-visible:outline-2 focus-visible:outline-f1-border-selected-bold",
        "transition-colors duration-300 hover:bg-f1-background-hover active:bg-f1-background-secondary-hover",
        n ? "hover:bg-f1-background-positive focus-visible:bg-f1-background-positive" : void 0
      ),
      onClick: o,
      children: [
        t,
        /* @__PURE__ */ N("div", { className: "grid", children: [
          /* @__PURE__ */ l(
            be,
            {
              icon: fM,
              size: "md",
              "aria-hidden": !0,
              className: E(
                "col-start-1 col-end-2 row-start-1 row-end-2",
                "opacity-0 transition-opacity duration-300",
                !n && "group-hover:opacity-100 group-focus-visible:opacity-100"
              )
            }
          ),
          /* @__PURE__ */ l(
            be,
            {
              icon: lm,
              size: "md",
              "aria-hidden": !0,
              className: E(
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
}, Sy = C0(
  ({ children: e, className: t, ...n }) => /* @__PURE__ */ N(
    Jt,
    {
      ...n,
      className: E(
        "text-inherit group flex items-center gap-1.5 rounded p-1.5 text-f1-foreground",
        "no-underline hover:bg-f1-background-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-f1-border-selected-bold active:bg-f1-background-secondary-hover",
        t
      ),
      children: [
        e,
        /* @__PURE__ */ l("div", { className: "grid", children: /* @__PURE__ */ l(
          be,
          {
            "aria-hidden": !0,
            icon: Zr,
            size: "md",
            className: "opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100 group-active:opacity-100"
          }
        ) })
      ]
    }
  )
);
Sy.displayName = "NavigateAction";
const so = X(
  (e, t) => {
    const {
      text: n,
      leftIcon: r,
      className: o,
      action: i = { type: "noop" }
    } = e;
    return /* @__PURE__ */ l(
      "li",
      {
        className: "flex rounded font-medium text-f1-foreground *:flex-1",
        ref: t,
        children: /* @__PURE__ */ N(
          i_,
          {
            action: i,
            className: E("flex items-center gap-1.5 p-1.5", o),
            children: [
              r && (typeof r == "function" ? r({}) : /* @__PURE__ */ l(be, { icon: r, size: "md", "aria-hidden": "true" })),
              /* @__PURE__ */ l("div", { className: "line-clamp-5 flex-1 whitespace-pre-line text-left", children: n })
            ]
          }
        )
      }
    );
  }
);
so.displayName = "ItemContainer";
const i_ = ({
  children: e,
  action: t,
  ...n
}) => {
  const r = t.type;
  switch (r) {
    case "copy":
      return /* @__PURE__ */ l(o_, { ...t, ...n, children: e });
    case "navigate":
      return /* @__PURE__ */ l(Sy, { ...t, ...n, children: e });
    case "noop":
      return /* @__PURE__ */ l("div", { ...n, children: e });
    default:
      return r;
  }
}, Ny = X(
  ({ children: e, label: t }, n) => /* @__PURE__ */ N("div", { className: "min-w-32 max-w-72", children: [
    t && /* @__PURE__ */ l("p", { className: "mb-0.5 px-1.5 text-f1-foreground-secondary", children: t }),
    /* @__PURE__ */ l("ul", { className: "flex flex-col gap-0.5", ref: n, children: e })
  ] })
);
Ny.displayName = "DataList";
const My = X(
  ({ text: e, icon: t, action: n }, r) => /* @__PURE__ */ l(
    so,
    {
      ref: r,
      text: e,
      leftIcon: t,
      action: Ui(n, e)
    }
  )
);
My.displayName = "DataList.Item";
const Py = X(
  ({ action: e, avatarUrl: t, firstName: n, lastName: r }, o) => {
    const i = `${n} ${r}`;
    return /* @__PURE__ */ l(
      so,
      {
        ref: o,
        leftIcon: () => /* @__PURE__ */ l(
          Qr,
          {
            size: "xsmall",
            src: t,
            firstName: n,
            lastName: r
          }
        ),
        text: i,
        action: Ui(e, i)
      }
    );
  }
);
Py.displayName = "PersonItem";
const Ty = X(
  ({ avatarUrl: e, name: t, action: n }, r) => /* @__PURE__ */ l(
    so,
    {
      ref: r,
      leftIcon: () => /* @__PURE__ */ l(Mi, { name: t, size: "xsmall", src: e }),
      text: t,
      action: Ui(n, t)
    }
  )
);
Ty.displayName = "CompanyItem";
const ky = X(
  ({ action: e, name: t }, n) => /* @__PURE__ */ l(
    so,
    {
      ref: n,
      leftIcon: () => /* @__PURE__ */ l(sl, { name: t, size: "xsmall" }),
      text: t,
      action: Ui(e, t)
    }
  )
);
ky.displayName = "TeamItem";
const Ui = (e, t) => e && e.type === "copy" ? { type: "copy", text: e.text ?? t } : e, gr = Object.assign(Ny, {
  Item: My,
  CompanyItem: Ty,
  PersonItem: Py,
  TeamItem: ky
}), a_ = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday"
], s_ = X(
  function({ daysOfTheWeek: t = a_, activatedDays: n = [] }, r) {
    return /* @__PURE__ */ l(
      $p,
      {
        type: "multiple",
        value: n,
        disabled: !0,
        className: "flex justify-start",
        ref: r,
        children: t.map((o) => /* @__PURE__ */ l(
          jp,
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
), l_ = ({ content: e }) => /* @__PURE__ */ N(xe, { children: [
  e.type === "weekdays" && /* @__PURE__ */ l("li", { className: "list-none px-1.5 py-1", children: /* @__PURE__ */ l(s_, { ...e }) }),
  e.type === "person" && /* @__PURE__ */ l(gr.PersonItem, { ...e }),
  e.type === "item" && /* @__PURE__ */ l(gr.Item, { ...e }),
  e.type === "team" && /* @__PURE__ */ l(gr.TeamItem, { ...e }),
  e.type === "company" && /* @__PURE__ */ l(gr.CompanyItem, { ...e })
] }), c_ = X(
  function({ title: t, content: n, spacingAtTheBottom: r }, o) {
    const i = Array.isArray(n) ? n : [n];
    return /* @__PURE__ */ l(
      "div",
      {
        ref: o,
        className: E("flex flex-col gap-0.5", r && "pb-3"),
        children: /* @__PURE__ */ l(gr, { label: t, children: i.map((a, s) => /* @__PURE__ */ l(l_, { content: a }, s)) })
      }
    );
  }
), u_ = X(function({ title: t, details: n }, r) {
  return /* @__PURE__ */ N("div", { ref: r, className: "flex flex-col gap-4", children: [
    !!t && /* @__PURE__ */ l("p", { className: "mb-1 pl-1.5 text-sm font-semibold text-f1-foreground-secondary", children: t.toLocaleUpperCase() }),
    /* @__PURE__ */ l("div", { className: "flex flex-col gap-3", children: n == null ? void 0 : n.map((o) => /* @__PURE__ */ l(
      c_,
      {
        title: o.title,
        content: o.content,
        spacingAtTheBottom: o.spacingAtTheBottom
      },
      o.title
    )) })
  ] });
}), Ey = X(
  function({ children: t, sideContent: n }, r) {
    return /* @__PURE__ */ l("div", { ref: r, className: "h-full overflow-auto", children: /* @__PURE__ */ N("div", { className: "flex h-full flex-col-reverse overflow-auto text-f1-foreground sm:flex-row", children: [
      /* @__PURE__ */ l("main", { className: "h-fit min-h-full border-0 px-6 py-5 sm:basis-3/4 sm:border-r sm:border-solid sm:border-r-f1-border-secondary", children: t }),
      /* @__PURE__ */ l("aside", { className: "py-5 pl-2 pr-4 sm:basis-1/4 sm:pb-6", children: n })
    ] }) });
  }
), d_ = X(
  function({ children: t, sidepanel: n }, r) {
    return /* @__PURE__ */ l(
      Ey,
      {
        ref: r,
        sideContent: /* @__PURE__ */ l(u_, { title: n.title, details: n.items }),
        children: t
      }
    );
  }
), f_ = Ie(
  "relative flex min-h-full w-full flex-col gap-4 place-self-center overflow-y-auto px-6 py-5",
  {
    variants: {
      variant: {
        narrow: "max-w-screen-lg"
      }
    }
  }
), h_ = ee.forwardRef(({ children: e, variant: t, className: n, ...r }, o) => /* @__PURE__ */ l(
  "section",
  {
    ref: o,
    className: E("relative flex-1 overflow-auto", n),
    ...r,
    children: /* @__PURE__ */ l("div", { className: E(f_({ variant: t })), children: e })
  }
));
h_.displayName = "StandardLayout";
const wR = He(
  {
    name: "InfoPaneLayout",
    type: "layout"
  },
  Ey
), xR = He(
  {
    name: "FullscreenLayout",
    type: "layout"
  },
  Cy
), CR = He(
  {
    name: "OverviewLayout",
    type: "layout"
  },
  d_
), SR = He(
  {
    name: "HomeLayout",
    type: "layout"
  },
  n_
), tc = {
  2: "gap-2",
  4: "gap-4",
  8: "gap-8"
}, m_ = Ie("grid grid-cols-1", {
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
      ...tc
    }
  },
  defaultVariants: {
    tileSize: "md",
    gap: "4"
  }
}), p_ = ee.forwardRef(function({ className: t, gap: n, children: r, tileSize: o, ...i }, a) {
  return /* @__PURE__ */ l("div", { className: E("@container", "grow"), ref: a, ...i, children: /* @__PURE__ */ l(
    "div",
    {
      className: E(m_({ gap: n, tileSize: o }), t),
      ref: a,
      ...i,
      children: r
    }
  ) });
}), g_ = Ie("flex", {
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
}), Ay = X(function({
  className: t,
  grow: n,
  basis: r,
  shrink: o,
  paddingX: i,
  paddingY: a,
  inline: s,
  overflow: c,
  maxWidth: u,
  justifyContent: d,
  alignItems: f,
  height: h,
  width: g,
  ...p
}, v) {
  return /* @__PURE__ */ l(
    "div",
    {
      className: E(
        g_({
          paddingX: i,
          basis: r,
          paddingY: a,
          grow: n,
          shrink: o,
          inline: s,
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
      ...p
    }
  );
}), v_ = Ie("flex-row", {
  variants: {
    gap: {
      ...tc
    },
    wrap: {
      true: "flex-wrap"
    }
  },
  defaultVariants: {
    wrap: !0
  }
}), y_ = ee.forwardRef(function({ className: t, gap: n, wrap: r, ...o }, i) {
  return /* @__PURE__ */ l(
    Ay,
    {
      className: E(v_({ gap: n, wrap: r }), t),
      ref: i,
      ...o
    }
  );
}), b_ = Ie("flex-col", {
  variants: {
    gap: {
      ...tc
    }
  },
  defaultVariants: {}
}), w_ = X(function({ className: t, gap: n, children: r, ...o }, i) {
  return /* @__PURE__ */ l(
    Ay,
    {
      className: E(b_({ gap: n }), t),
      ref: i,
      ...o,
      children: r
    }
  );
}), NR = He(
  {
    name: "Stack",
    type: "layout"
  },
  w_
), MR = He(
  {
    name: "Split",
    type: "layout"
  },
  y_
), PR = He(
  {
    name: "AutoGrid",
    type: "layout"
  },
  p_
), x_ = ({ children: e }) => {
  const { enabled: t } = Hd();
  return /* @__PURE__ */ l(
    "div",
    {
      className: E(
        "inline-flex ring-1 ring-inset ring-transparent transition-all duration-150",
        t && "select-none overflow-hidden rounded-sm bg-f1-background-tertiary ring-f1-border-secondary"
      ),
      "aria-hidden": t,
      children: /* @__PURE__ */ l(
        Nt.div,
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
}, Hi = m.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l(
  "div",
  {
    ref: n,
    className: E(
      "flex flex-col items-stretch rounded-xl border border-solid border-f1-border-secondary bg-f1-background-inverse-secondary p-4 shadow",
      e
    ),
    ...t
  }
));
Hi.displayName = "Card";
const zi = m.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l(
  "div",
  {
    ref: n,
    className: E("flex flex-row gap-1.5", e),
    ...t
  }
));
zi.displayName = "CardHeader";
const Gi = m.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l("h3", { ref: n, className: E("text-base font-medium", e), ...t }));
Gi.displayName = "CardTitle";
const nc = m.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l(
  "h3",
  {
    ref: n,
    className: E(
      "line-clamp-1 truncate text-base font-normal text-f1-foreground-secondary",
      e
    ),
    ...t
  }
));
nc.displayName = "CardSubtitle";
const C_ = m.forwardRef(({ className: e, content: t }, n) => /* @__PURE__ */ l(
  "div",
  {
    ref: n,
    className: E("-ml-1 flex h-6 w-6 items-center justify-center", e),
    children: /* @__PURE__ */ l(Wd, { children: /* @__PURE__ */ N($d, { children: [
      /* @__PURE__ */ l(
        jd,
        {
          className: "h-5 w-5 cursor-help text-f1-foreground-secondary",
          "aria-label": t,
          children: /* @__PURE__ */ l(be, { icon: cM, size: "md" })
        }
      ),
      /* @__PURE__ */ l(Ud, { children: /* @__PURE__ */ l("p", { children: t }) })
    ] }) })
  }
));
C_.displayName = "CardInfo";
const Dy = m.forwardRef(({ className: e, title: t, ...n }) => /* @__PURE__ */ l(Jt, { className: e, "aria-label": t, ...n, children: /* @__PURE__ */ l(
  ft,
  {
    icon: Zr,
    label: t ?? "",
    variant: "outline",
    size: "sm",
    hideLabel: !0
  }
) }));
Dy.displayName = "CardLink";
const Ki = m.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l("div", { ref: n, className: E("flex grow flex-col", e), ...t }));
Ki.displayName = "CardContent";
const rc = m.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l("div", { ref: n, className: E("flex items-center", e), ...t }));
rc.displayName = "CardFooter";
const S_ = m.forwardRef(function({ className: t, ...n }, r) {
  return /* @__PURE__ */ l(
    "div",
    {
      ref: r,
      className: E("flex text-2xl font-semibold", t),
      ...n
    }
  );
});
rc.displayName = "CardComment";
const N_ = X(
  function({ bare: t = !1, ...n }, r) {
    return /* @__PURE__ */ l(
      "div",
      {
        ref: r,
        role: "separator",
        className: E("-mx-4 h-[1px]", t ? void 0 : "my-4"),
        style: {
          backgroundImage: "repeating-linear-gradient(to right, hsl(var(--neutral-20)) 0, hsl(var(--neutral-20)) 3px, transparent 3px, transparent 7px)"
        },
        ...n
      }
    );
  }
), M_ = () => /* @__PURE__ */ l("div", { className: "min-h-[0.15rem] min-w-[0.15rem] rounded-full bg-f1-foreground-secondary" }), P_ = X(function({ header: t, children: n, action: r, summaries: o, alert: i, status: a, fullHeight: s = !1 }, c) {
  const { enabled: u, toggle: d } = Hd();
  Fe(() => {
    if (i && a)
      throw Error(
        "You cannot pass both alert and status at the same time to this component"
      );
  }, [i, a]);
  const f = (g) => !!g && !(ee.isValidElement(g) && g.type === ee.Fragment && ee.Children.count(g.props.children) === 0), h = () => {
    var g, p;
    (p = (g = t == null ? void 0 : t.link) == null ? void 0 : g.onClick) == null || p.call(g);
  };
  return /* @__PURE__ */ N(
    Hi,
    {
      className: E(
        s ? "h-full" : "",
        "relative flex gap-4 border-f1-border-secondary"
      ),
      ref: c,
      children: [
        t && /* @__PURE__ */ l(zi, { className: "-mr-1 -mt-1", children: /* @__PURE__ */ N("div", { className: "flex w-full flex-1 flex-col gap-4", children: [
          /* @__PURE__ */ N("div", { className: "flex flex-1 flex-row flex-nowrap items-center justify-between gap-2", children: [
            /* @__PURE__ */ N("div", { className: "flex min-h-6 grow flex-row items-center gap-1 truncate", children: [
              t.title && /* @__PURE__ */ l(Gi, { className: "truncate", children: t.title }),
              t.subtitle && /* @__PURE__ */ N("div", { className: "flex flex-row items-center gap-1", children: [
                /* @__PURE__ */ l(M_, {}),
                /* @__PURE__ */ l(nc, { className: "truncate", children: t.subtitle })
              ] }),
              t.count && /* @__PURE__ */ l("div", { className: "ml-0.5", children: /* @__PURE__ */ l(wl, { value: t.count }) })
            ] }),
            /* @__PURE__ */ N("div", { className: "flex flex-row items-center gap-3", children: [
              i && /* @__PURE__ */ l(Cl, { text: i, level: "critical" }),
              a && /* @__PURE__ */ l(Lr, { text: a.text, variant: a.variant }),
              t.link && /* @__PURE__ */ l(
                Dy,
                {
                  onClick: h,
                  href: t.link.url,
                  title: t.link.title
                }
              )
            ] })
          ] }),
          t.comment && /* @__PURE__ */ N("div", { className: "flex flex-row items-center gap-3 overflow-visible", children: [
            /* @__PURE__ */ l(x_, { children: /* @__PURE__ */ l(S_, { children: t.comment }) }),
            !!t.canBeBlurred && /* @__PURE__ */ l("span", { children: /* @__PURE__ */ l(
              ft,
              {
                icon: u ? rM : iM,
                hideLabel: !0,
                label: "hide/show",
                variant: "outline",
                round: !0,
                onClick: d,
                size: "sm"
              }
            ) })
          ] })
        ] }) }),
        /* @__PURE__ */ N(Ki, { className: "flex h-full flex-col gap-4", children: [
          o && /* @__PURE__ */ l("div", { className: "flex flex-row", children: o.map((g, p) => /* @__PURE__ */ N("div", { className: "grow", children: [
            /* @__PURE__ */ l("div", { className: "mb-0.5 text-sm text-f1-foreground-secondary", children: g.label }),
            /* @__PURE__ */ N("div", { className: "flex flex-row items-end gap-0.5 text-xl font-semibold", children: [
              !!g.prefixUnit && /* @__PURE__ */ l("div", { className: "text-lg font-medium", children: g.prefixUnit }),
              g.value,
              !!g.postfixUnit && /* @__PURE__ */ l("div", { className: "text-lg font-medium", children: g.postfixUnit })
            ] })
          ] }, p)) }),
          ee.Children.toArray(n).filter(f).map((g, p) => /* @__PURE__ */ N(xe, { children: [
            p > 0 && /* @__PURE__ */ l(N_, { bare: !0 }),
            g
          ] }))
        ] }),
        r && /* @__PURE__ */ l(rc, { children: /* @__PURE__ */ l(ft, { variant: "neutral", size: "sm", ...r }) })
      ]
    }
  );
}), T_ = Ie("", {
  variants: {
    height: {
      sm: "h-36",
      md: "h-48",
      lg: "h-60"
    }
  }
}), k_ = X(
  function({ header: t, height: n }, r) {
    return /* @__PURE__ */ N(
      Hi,
      {
        className: "flex gap-4 border-f1-border-secondary",
        ref: r,
        "aria-live": "polite",
        "aria-busy": !0,
        children: [
          /* @__PURE__ */ l(zi, { className: "-mr-1 -mt-1", children: /* @__PURE__ */ N(
            "div",
            {
              className: "flex h-6 w-full flex-row items-center gap-1.5",
              "aria-hidden": !0,
              children: [
                t != null && t.title ? /* @__PURE__ */ l(Gi, { children: t.title }) : /* @__PURE__ */ l(Rt, { className: "h-4 w-full max-w-16" }),
                (t == null ? void 0 : t.subtitle) && /* @__PURE__ */ l(nc, { children: t.subtitle })
              ]
            }
          ) }),
          /* @__PURE__ */ l(
            Ki,
            {
              "aria-hidden": !0,
              className: E(T_({ height: n })),
              children: [...Array(4)].map((o, i) => /* @__PURE__ */ l(
                Rt,
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
), Gn = gt(P_, k_), ht = Object.assign(
  X(function({ chart: t, summaries: n, ...r }, o) {
    return /* @__PURE__ */ l(Gn, { ref: o, ...r, summaries: n, children: t && /* @__PURE__ */ l("div", { className: "min-h-52 min-w-52 grow pt-2", children: t }) });
  }),
  {
    Skeleton: Gn.Skeleton
  }
), E_ = gt(
  X(function({ canBeBlurred: t, ...n }, r) {
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
    return /* @__PURE__ */ l(
      ht,
      {
        ref: r,
        ...o,
        chart: /* @__PURE__ */ l(f0, { ...i, canBeBlurred: t })
      }
    );
  }),
  ht.Skeleton
), A_ = X(function(t, n) {
  return /* @__PURE__ */ l(
    ht,
    {
      ref: n,
      ...t,
      chart: /* @__PURE__ */ l(h0, { aspect: null, yAxis: { hide: !0 }, ...t.chart })
    }
  );
}), D_ = gt(
  A_,
  ht.Skeleton
), __ = gt(
  X(
    function(t, n) {
      return /* @__PURE__ */ l(
        ht,
        {
          ref: n,
          ...t,
          chart: /* @__PURE__ */ l(m0, { aspect: null, yAxis: { hide: !0 }, ...t.chart })
        }
      );
    }
  ),
  ht.Skeleton
), R_ = gt(
  X(
    function(t, n) {
      return /* @__PURE__ */ l(
        ht,
        {
          ref: n,
          ...t,
          chart: /* @__PURE__ */ l(p0, { aspect: null, ...t.chart })
        }
      );
    }
  ),
  ht.Skeleton
), I_ = gt(
  X(
    function(t, n) {
      return /* @__PURE__ */ l(ht, { ref: n, ...t, chart: null });
    }
  ),
  ht.Skeleton
), L_ = gt(
  X(
    function(t, n) {
      return /* @__PURE__ */ l(
        ht,
        {
          ref: n,
          ...t,
          chart: /* @__PURE__ */ l(
            g0,
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
  ht.Skeleton
), TR = He(
  {
    name: "AreaChartWidget",
    type: "info"
  },
  E_
), kR = He(
  {
    name: "BarChartWidget",
    type: "info"
  },
  D_
), ER = He(
  {
    name: "LineChartWidget",
    type: "info"
  },
  __
), AR = He(
  {
    name: "PieChartWidget",
    type: "info"
  },
  R_
), DR = He(
  {
    name: "VerticalBarChartWidget",
    type: "info"
  },
  L_
), _R = He(
  {
    name: "SummariesWidget",
    type: "info"
  },
  I_
), O_ = (e, t) => /* @__PURE__ */ N(
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
      /* @__PURE__ */ l("g", { filter: "url(#filter0_b_378_17717)", children: /* @__PURE__ */ l(
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
      /* @__PURE__ */ l("g", { filter: "url(#filter1_b_378_17717)", children: /* @__PURE__ */ l(
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
      /* @__PURE__ */ l("g", { filter: "url(#filter2_b_378_17717)", children: /* @__PURE__ */ l(
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
      /* @__PURE__ */ l("g", { filter: "url(#filter3_b_378_17717)", children: /* @__PURE__ */ l(
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
      /* @__PURE__ */ l("g", { filter: "url(#filter4_b_378_17717)", children: /* @__PURE__ */ l(
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
      /* @__PURE__ */ N("defs", { children: [
        /* @__PURE__ */ N(
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
              /* @__PURE__ */ l("feFlood", { floodOpacity: "0", result: "BackgroundImageFix" }),
              /* @__PURE__ */ l("feGaussianBlur", { in: "BackgroundImageFix", stdDeviation: "20" }),
              /* @__PURE__ */ l(
                "feComposite",
                {
                  in2: "SourceAlpha",
                  operator: "in",
                  result: "effect1_backgroundBlur_378_17717"
                }
              ),
              /* @__PURE__ */ l(
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
        /* @__PURE__ */ N(
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
              /* @__PURE__ */ l("feFlood", { floodOpacity: "0", result: "BackgroundImageFix" }),
              /* @__PURE__ */ l("feGaussianBlur", { in: "BackgroundImageFix", stdDeviation: "20" }),
              /* @__PURE__ */ l(
                "feComposite",
                {
                  in2: "SourceAlpha",
                  operator: "in",
                  result: "effect1_backgroundBlur_378_17717"
                }
              ),
              /* @__PURE__ */ l(
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
        /* @__PURE__ */ N(
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
              /* @__PURE__ */ l("feFlood", { floodOpacity: "0", result: "BackgroundImageFix" }),
              /* @__PURE__ */ l("feGaussianBlur", { in: "BackgroundImageFix", stdDeviation: "20" }),
              /* @__PURE__ */ l(
                "feComposite",
                {
                  in2: "SourceAlpha",
                  operator: "in",
                  result: "effect1_backgroundBlur_378_17717"
                }
              ),
              /* @__PURE__ */ l(
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
        /* @__PURE__ */ N(
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
              /* @__PURE__ */ l("feFlood", { floodOpacity: "0", result: "BackgroundImageFix" }),
              /* @__PURE__ */ l("feGaussianBlur", { in: "BackgroundImageFix", stdDeviation: "20" }),
              /* @__PURE__ */ l(
                "feComposite",
                {
                  in2: "SourceAlpha",
                  operator: "in",
                  result: "effect1_backgroundBlur_378_17717"
                }
              ),
              /* @__PURE__ */ l(
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
        /* @__PURE__ */ N(
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
              /* @__PURE__ */ l("feFlood", { floodOpacity: "0", result: "BackgroundImageFix" }),
              /* @__PURE__ */ l("feGaussianBlur", { in: "BackgroundImageFix", stdDeviation: "20" }),
              /* @__PURE__ */ l(
                "feComposite",
                {
                  in2: "SourceAlpha",
                  operator: "in",
                  result: "effect1_backgroundBlur_378_17717"
                }
              ),
              /* @__PURE__ */ l(
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
), F_ = X(O_), V_ = (e, t) => /* @__PURE__ */ N(
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
      /* @__PURE__ */ l(
        "path",
        {
          d: "M406 1L352.178 11.5985C343.237 13.359 334.653 16.5974 326.777 21.1805L270.327 54.031L208.727 80.0238C204.915 81.6326 200.986 82.9506 196.974 83.9662L146.837 96.6597C139.431 98.5348 132.323 101.436 125.72 105.279L80.2168 131.758C71.6933 136.718 62.3449 140.1 52.6208 141.742L1.12057e-05 150.623",
          stroke: "#E51943",
          strokeOpacity: "0.1",
          strokeWidth: "1.3",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ l(
        "path",
        {
          d: "M203 82.4405L270.327 54.031L338.673 14.2578L406 1V179H0V150.623L67.3266 139.26L135.673 99.4862L203 82.4405Z",
          fill: "url(#paint0_linear_3715_9085)"
        }
      ),
      /* @__PURE__ */ l("defs", { children: /* @__PURE__ */ N(
        "linearGradient",
        {
          id: "paint0_linear_3715_9085",
          x1: "203",
          y1: "179",
          x2: "203",
          y2: "1",
          gradientUnits: "userSpaceOnUse",
          children: [
            /* @__PURE__ */ l("stop", { stopColor: "#E51943", stopOpacity: "0" }),
            /* @__PURE__ */ l("stop", { offset: "1", stopColor: "#E51943", stopOpacity: "0.05" })
          ]
        }
      ) })
    ]
  }
), B_ = X(V_), W_ = {
  "line-chart": "border-f1-border-accent-alpha20",
  "bar-chart": "border-f1-border-promote-alpha30"
}, $_ = {
  "line-chart": "min-h-48",
  "bar-chart": "min-h-64"
}, j_ = {
  "line-chart": "from-f1-background-accent-alpha5",
  "bar-chart": "from-f1-background-promote-alpha5"
}, U_ = {
  "line-chart": "default",
  "bar-chart": "promote"
}, RR = X(
  function({ title: t, content: n, buttonLabel: r, buttonIcon: o, buttonAction: i, type: a }, s) {
    const c = W_[a], u = $_[a], d = j_[a], f = U_[a];
    return /* @__PURE__ */ N(
      Hi,
      {
        className: E(
          "relative flex gap-4 overflow-hidden border-dashed",
          c
        ),
        ref: s,
        children: [
          /* @__PURE__ */ l(zi, { className: "-mt-0.5", children: /* @__PURE__ */ l(Gi, { children: t }) }),
          /* @__PURE__ */ N(Ki, { className: E("flex flex-col gap-4", u), children: [
            /* @__PURE__ */ N(
              "div",
              {
                className: E(
                  "absolute -top-12 bottom-0 left-0 right-0 flex flex-col justify-end bg-gradient-to-b to-transparent",
                  d
                ),
                children: [
                  a === "bar-chart" && /* @__PURE__ */ l("div", { className: "absolute bottom-1 left-4 right-4", children: /* @__PURE__ */ l(F_, { className: "w-full" }) }),
                  a === "line-chart" && /* @__PURE__ */ l(B_, { className: "w-full" })
                ]
              }
            ),
            /* @__PURE__ */ N("div", { className: "relative flex min-h-28 flex-1 flex-col items-start gap-5", children: [
              /* @__PURE__ */ l("p", { className: "flex w-3/4 text-xl font-semibold", children: n }),
              r && /* @__PURE__ */ l(
                ft,
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
), Ad = ({ tags: e, right: t }) => /* @__PURE__ */ l(
  "div",
  {
    className: E(
      "flex flex-1 flex-row items-center gap-1.5",
      t && "justify-end"
    ),
    children: e.map((n) => {
      const r = /* @__PURE__ */ l("div", { children: /* @__PURE__ */ l(
        Sl,
        {
          icon: n.icon,
          additionalAccesibleText: `${n.label}: ${n.description}`
        }
      ) });
      return n.label || n.description ? /* @__PURE__ */ l(
        kv,
        {
          label: n.label,
          description: n.description,
          children: r
        },
        n.label ?? n.description
      ) : r;
    })
  }
), H_ = X(
  function({
    label: t,
    title: n,
    subtitle: r,
    description: o,
    color: i,
    isPending: a,
    leftTags: s,
    rightTags: c,
    fromDate: u,
    toDate: d,
    noBackground: f
  }, h) {
    return /* @__PURE__ */ N(
      "div",
      {
        ref: h,
        className: "relative flex flex-row items-stretch gap-2.5 overflow-hidden rounded-sm p-2",
        children: [
          !f && /* @__PURE__ */ N(xe, { children: [
            /* @__PURE__ */ l(
              "div",
              {
                className: "absolute bottom-0 left-0 right-0 top-0 opacity-5",
                style: {
                  background: `${i}`
                }
              }
            ),
            /* @__PURE__ */ l(
              "div",
              {
                className: "absolute bottom-0 left-0 right-0 top-0 opacity-5",
                style: {
                  background: `linear-gradient(to right, ${i}, transparent)`
                }
              }
            )
          ] }),
          /* @__PURE__ */ l(
            "div",
            {
              className: "min-h-10 min-w-1 rounded-2xs",
              style: a ? {
                backgroundImage: `repeating-linear-gradient(
              135deg,
              ${i} 0px,
              ${i} 4px, 
              transparent 4px, 
              transparent 5.5px
            )`
              } : {
                backgroundColor: i
              }
            }
          ),
          /* @__PURE__ */ N("div", { className: "z-10 flex flex-1 flex-col gap-2", children: [
            /* @__PURE__ */ N("div", { className: "flex flex-row items-start gap-2.5", children: [
              /* @__PURE__ */ N("div", { className: "flex flex-1 flex-col gap-0.5", children: [
                !!t && /* @__PURE__ */ l("p", { className: "line-clamp-1 text-sm text-f1-foreground-secondary", children: t }),
                /* @__PURE__ */ N("p", { className: "line-clamp-3 font-medium", children: [
                  n,
                  !!r && /* @__PURE__ */ l("span", { className: "pl-1 font-normal text-f1-foreground-secondary", children: `· ${r}` })
                ] }),
                /* @__PURE__ */ l("p", { className: "text-f1-foreground-secondary", children: o })
              ] }),
              /* @__PURE__ */ N("div", { className: "flex flex-row items-center", children: [
                u && /* @__PURE__ */ N(xe, { children: [
                  /* @__PURE__ */ l(os, { date: u }),
                  /* @__PURE__ */ l(
                    be,
                    {
                      icon: Zr,
                      size: "sm",
                      className: "text-f1-foreground-tertiary"
                    }
                  )
                ] }),
                d && /* @__PURE__ */ l(os, { date: d })
              ] })
            ] }),
            (s || c) && /* @__PURE__ */ N("div", { className: "flex flex-row items-center justify-between", children: [
              s && /* @__PURE__ */ l(Ad, { tags: s }),
              c && /* @__PURE__ */ l(Ad, { tags: c, right: !0 })
            ] })
          ] })
        ]
      }
    );
  }
), IR = X(function({ events: t, limit: n = 3 }, r) {
  return t.length ? /* @__PURE__ */ l("div", { className: "flex flex-col gap-2", ref: r, children: t.slice(0, n).map((o) => /* @__PURE__ */ l(H_, { ...o }, o.title)) }) : null;
});
function LR({
  title: e,
  subtitle: t,
  data: n,
  helpText: r,
  legend: o = !1
}) {
  return /* @__PURE__ */ N("div", { children: [
    /* @__PURE__ */ N("div", { className: "flex items-baseline justify-between", children: [
      /* @__PURE__ */ l("span", { className: "text-2xl font-semibold", children: e }),
      /* @__PURE__ */ l("span", { className: "text-xl text-f1-foreground-secondary", children: t })
    ] }),
    /* @__PURE__ */ l("div", { className: "mt-2", children: /* @__PURE__ */ l(v0, { data: n, legend: o }) }),
    !!r && /* @__PURE__ */ l("div", { className: "mt-1", children: /* @__PURE__ */ l("span", { className: "text-sm", children: r }) })
  ] });
}
const z_ = ({ onClick: e, children: t }) => {
  const n = "block rounded-lg border border-solid border-transparent p-[1px] -m-1";
  return e ? /* @__PURE__ */ l(
    "a",
    {
      className: E(
        n,
        "focus:border-f1-background-selected-bold focus:outline-none"
      ),
      onClick: e,
      tabIndex: 0,
      children: t
    }
  ) : /* @__PURE__ */ l("div", { className: n, tabIndex: 1, children: t });
};
function OR({
  label: e,
  count: t,
  icon: n,
  iconClassName: r,
  onClick: o
}) {
  return /* @__PURE__ */ l(z_, { onClick: o, children: /* @__PURE__ */ N("div", { className: "flex cursor-pointer flex-col gap-0.5 rounded-md border border-solid border-f1-border-secondary px-3 py-2.5 hover:border-f1-border-hover", children: [
    /* @__PURE__ */ N("div", { className: "flex flex-row items-center", children: [
      /* @__PURE__ */ l("p", { className: "line-clamp-1 flex-1 text-f1-foreground-secondary", children: e }),
      /* @__PURE__ */ l(be, { icon: n, size: "md", className: r })
    ] }),
    /* @__PURE__ */ l("p", { className: "line-clamp-1 flex-1 text-2xl font-semibold text-f1-foreground", children: t })
  ] }) });
}
const G_ = X(
  function({ content: t, label: n, icon: r, color: o }, i) {
    return /* @__PURE__ */ N("div", { className: "grid-row-2 col-span-1 grid", ref: i, children: [
      /* @__PURE__ */ l("p", { className: "text-2xl font-semibold", children: t }),
      /* @__PURE__ */ N("div", { className: "flex items-center gap-1", children: [
        /* @__PURE__ */ l(
          "p",
          {
            className: "line-clamp-1 text-f1-foreground-secondary",
            title: n,
            children: n
          }
        ),
        r && /* @__PURE__ */ l("span", { className: E("flex", o), children: /* @__PURE__ */ l(be, { icon: r }) })
      ] })
    ] }, n);
  }
), FR = X(
  function({ items: t }, n) {
    return /* @__PURE__ */ l(
      "div",
      {
        ref: n,
        className: "grid auto-cols-fr grid-flow-col items-end gap-x-3",
        children: t.map(({ label: r, content: o, icon: i, color: a }) => /* @__PURE__ */ l(
          G_,
          {
            label: r,
            content: o,
            icon: i,
            color: a
          },
          `${r}-${o}`
        ))
      }
    );
  }
), K_ = ({ onClick: e, className: t, children: n }) => e ? /* @__PURE__ */ l("a", { className: t, onClick: e, tabIndex: 0, children: n }) : /* @__PURE__ */ l("div", { className: t, tabIndex: -1, children: n });
function Y_({
  id: e,
  title: t,
  subtitle: n,
  icon: r = $N,
  onClick: o
}) {
  const i = E(
    "flex flex-row gap-2 rounded-md border border-solid border-transparent p-2 text-f1-foreground",
    o ? "cursor-pointer hover:bg-f1-background-tertiary focus:border-f1-background-selected-bold focus:outline-none" : void 0
  );
  return /* @__PURE__ */ N(K_, { onClick: (s) => {
    s.preventDefault(), o == null || o(e);
  }, className: i, children: [
    /* @__PURE__ */ l(Oi, { icon: r, size: "md" }),
    /* @__PURE__ */ N("div", { className: "flex-1", children: [
      /* @__PURE__ */ l("p", { className: "line-clamp-1 font-medium", children: t }),
      /* @__PURE__ */ l("p", { className: "line-clamp-1 text-f1-foreground-secondary", children: n })
    ] })
  ] });
}
function VR({ items: e, onClickItem: t }) {
  return /* @__PURE__ */ l("div", { className: "flex flex-col gap-2", children: e.map((n) => /* @__PURE__ */ l(Y_, { ...n, onClick: t }, n.id)) });
}
const X_ = ({ onClick: e, className: t, children: n }) => e ? /* @__PURE__ */ l("a", { className: t, onClick: e, tabIndex: 0, children: n }) : /* @__PURE__ */ l("div", { className: t, tabIndex: -1, children: n });
function _y({
  id: e,
  title: t,
  alert: n,
  rawTag: r,
  count: o,
  icon: i,
  iconClassName: a = "text-f1-icon-secondary",
  onClick: s
}) {
  const c = E(
    "flex flex-row items-start gap-1 rounded-md border border-solid border-transparent px-2 py-1.5 text-f1-foreground",
    s ? "cursor-pointer hover:bg-f1-background-tertiary focus:border-f1-background-selected-bold focus:outline-none" : void 0
  );
  return /* @__PURE__ */ N(X_, { onClick: (d) => {
    d.preventDefault(), s == null || s(e);
  }, className: c, children: [
    i && /* @__PURE__ */ l(be, { icon: i, size: "md", className: E("mt-0.5", a) }),
    /* @__PURE__ */ l("p", { className: "mt-0.5 line-clamp-2 flex-1 font-medium", children: t }),
    /* @__PURE__ */ N("div", { className: "flex flex-row items-center gap-2", children: [
      n && /* @__PURE__ */ l(Cl, { ...n }),
      r && /* @__PURE__ */ l(Sl, { ...r }),
      !!o && /* @__PURE__ */ l(wl, { value: o })
    ] })
  ] });
}
function BR({ items: e, onClickItem: t }) {
  return /* @__PURE__ */ l("div", { className: "flex flex-col gap-1", children: e.map((n) => /* @__PURE__ */ l(_y, { ...n, onClick: t }, n.id)) });
}
function q_({
  task: e,
  status: t,
  onClick: n,
  hideIcon: r = !1
}) {
  var a;
  const o = () => {
    n == null || n(e);
  }, i = St(() => {
    if (!r) {
      if (t === "todo")
        return JN;
      if (t === "in-progress")
        return sM;
    }
  }, [t, r]);
  return /* @__PURE__ */ l(
    _y,
    {
      id: e.id,
      title: e.text,
      icon: i,
      iconClassName: t === "todo" ? "text-f1-icon" : "text-f1-icon-info",
      alert: (a = e.badge) != null && a.isPastDue ? {
        text: e.badge.text,
        level: "critical"
      } : void 0,
      rawTag: e.badge && !e.badge.isPastDue ? {
        text: e.badge.text,
        icon: UN
      } : void 0,
      count: e.counter,
      onClick: o
    }
  );
}
function WR({
  tasks: e,
  onClickTask: t,
  hideIcons: n = !1,
  maxTasksToShow: r = 5,
  emptyMessage: o = "No tasks assigned"
}) {
  const a = [
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
  ), s = !a.length;
  return /* @__PURE__ */ l("div", { className: "flex flex-col gap-0", children: s ? /* @__PURE__ */ l("p", { className: "pl-2 font-medium", children: o }) : a.slice(0, r).map((c) => /* @__PURE__ */ l(
    q_,
    {
      task: c,
      status: c.status,
      hideIcon: n,
      onClick: t
    },
    c.id
  )) });
}
const Z_ = ({ title: e, info: t }) => /* @__PURE__ */ N("div", { className: "flex items-center justify-between", children: [
  /* @__PURE__ */ l("p", { className: "flex text-f1-foreground-secondary", children: e }),
  /* @__PURE__ */ l("div", { className: "basis-16 justify-self-end text-right font-medium", children: t })
] }), $R = X(
  function({ title: t, list: n }, r) {
    return /* @__PURE__ */ N("div", { ref: r, className: "flex flex-col gap-2", children: [
      t && /* @__PURE__ */ l("div", { className: "font-medium", children: t }),
      n.map((o) => /* @__PURE__ */ l(Z_, { title: o.title, info: o.info }, o.title))
    ] });
  }
);
var Q_ = Object.defineProperty, J_ = Object.defineProperties, e5 = Object.getOwnPropertyDescriptors, ri = Object.getOwnPropertySymbols, Ry = Object.prototype.hasOwnProperty, Iy = Object.prototype.propertyIsEnumerable, Dd = (e, t, n) => t in e ? Q_(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, ct = (e, t) => {
  for (var n in t || (t = {})) Ry.call(t, n) && Dd(e, n, t[n]);
  if (ri) for (var n of ri(t)) Iy.call(t, n) && Dd(e, n, t[n]);
  return e;
}, Yi = (e, t) => J_(e, e5(t)), t5 = (e, t) => {
  var n = {};
  for (var r in e) Ry.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && ri) for (var r of ri(e)) t.indexOf(r) < 0 && Iy.call(e, r) && (n[r] = e[r]);
  return n;
}, n5 = (e) => e.right - e.left < 5 || e.bottom && e.bottom - e.top < 5, r5 = ({ spotsList: e, usedSpot: t }) => e.some((n) => n !== t && t.left === n.left), o5 = ({ position: e, spot: t, stone: n }) => {
  if (e.left > t.left && t.right >= e.left && e.top + n.height > t.top) {
    if (t.bottom && t.bottom < e.top) return t;
    let r = ct({}, t);
    return r.right = e.left, r;
  }
  return null;
}, i5 = ({ position: e, stone: t, spot: n }) => {
  if (e.left + t.width > n.left && e.top >= n.top) {
    if (n.bottom && n.bottom < e.top || n.right < e.left) return n;
    let r = ct({}, n);
    return r.bottom = e.top, r;
  }
  return null;
}, a5 = ({ stone: e, position: t, spotsList: n, optimalSpot: r }) => {
  let o = ct({}, r);
  return o.left = t.left + e.width, n5(o) || r5({ usedSpot: o, spotsList: n }) ? null : o;
}, s5 = ({ spots: e, position: t, optimalSpot: n, stone: r }) => e.map((o, i, a) => {
  if (o === n) return a5({ stone: r, position: t, optimalSpot: n, spotsList: a });
  let s = o5({ position: t, spot: o, stone: r });
  return s || i5({ position: t, stone: r, spot: o }) || o;
});
function l5(e, t) {
  for (let n = 0, r = t.length; n < r; n++) {
    let o = t[n];
    if (e(o)) return o;
  }
  return null;
}
var c5 = (e, t) => t.filter(e), u5 = (e, t) => [...t].sort(e), d5 = (e, t) => e.top === t.top ? e.left < t.left ? -1 : 1 : e.top < t.top ? -1 : 1, f5 = (e) => u5(d5, e), h5 = ({ availableSpots: e, optimalSpot: t, containerSize: n, stone: r }) => {
  let o = { right: n, top: t.top + r.height, left: t.left };
  t.bottom && (o.bottom = t.bottom);
  for (let i = 0, a = e.length; i < a; i += 1) {
    let s = e[i];
    if (o.left < s.left && o.top < s.top) {
      o.right = s.left;
      break;
    }
  }
  return o;
}, m5 = (e, t) => {
  let n = e.right - e.left >= t.width;
  if (!e.bottom) return n;
  let r = e.bottom - e.top >= t.height;
  return n && r;
}, p5 = ({ availableSpots: e, stone: t }) => l5((n) => m5(n, t), e);
function g5({ stone: e, availableSpots: t, containerSize: n }) {
  let r = p5({ availableSpots: t, stone: e }), o = { left: r.left, top: r.top }, i = h5({ optimalSpot: r, availableSpots: t.filter((c) => c !== r), stone: e, containerSize: n }), a = [...t, i], s = s5({ spots: a, position: o, optimalSpot: r, stone: e });
  return a = [...c5(Boolean, s)], a = f5(a), { position: o, availableSpots: a };
}
var v5 = ({ stones: e, containerSize: t }) => {
  let n = { positions: [], containerHeight: 0, availableSpots: [] };
  if (!e.length) return n;
  let r = 0, o = [], i = [{ top: 0, left: 0, right: t }];
  for (let a of e) {
    let s = g5({ availableSpots: i, stone: a, containerSize: t }), c = s.position.top + a.height;
    r < c && (r = c), o.push(s.position), i = s.availableSpots;
  }
  return { availableSpots: i, positions: o, containerHeight: r };
}, y5 = (e) => e.reduce((t, n) => {
  if (!n) return t;
  let r = n.getBoundingClientRect();
  return t.push({ width: r.width, height: r.height }), t;
}, []), b5 = ({ boxesRefs: e, wrapperRef: t, children: n, windowWidth: r, wrapperWidth: o }) => {
  let [{ positions: i, containerHeight: a, stones: s, availableSpots: c }, u] = ke({ positions: [], containerHeight: null, stones: [], availableSpots: [] });
  return Fe(() => {
    var d, f;
    let h = y5(e.current), g = (f = (d = t.current) == null ? void 0 : d.offsetWidth) != null ? f : 0;
    if (g === null) return;
    let p = v5({ stones: h, containerSize: g });
    u(Yi(ct({}, p), { stones: h }));
  }, [n, e, t, r, o]), { positions: i, containerHeight: a, stones: s, availableSpots: c };
}, w5 = (e) => ({ fade: `${e}ms opacity ease`, fadeMove: `
    ${e}ms opacity ease,
    ${e}ms top ease,
    ${e}ms left ease
  `, move: `
    ${e}ms top ease,
    ${e}ms left ease
  ` }), x5 = ({ transition: e, transitionDuration: t }) => e ? { transition: w5(t)[e] } : null, C5 = (e) => e ? Yi(ct({}, e), { opacity: 1 }) : { opacity: 0, top: 0, left: 0 }, S5 = ({ style: e, position: t, transition: n, transitionDuration: r }) => ct(ct(Yi(ct({}, e), { position: "absolute" }), C5(t)), x5({ transition: n, transitionDuration: r }));
function N5(e, t, n) {
  let r;
  return function(...o) {
    r && clearTimeout(r), r = setTimeout(function() {
      r = null, e.apply(null, o);
    }, t);
  };
}
var M5 = () => {
  let [e, t] = ke(), n = Ve(N5(t, 300));
  return Fe(() => {
    let r = () => {
      n.current(window.innerWidth);
    };
    return window.addEventListener("resize", r), () => {
      window.removeEventListener("resize", r);
    };
  }, []), e;
}, P5 = (e) => {
  let [t, n] = ke(null);
  return Fe(() => {
    let r = new ResizeObserver((o) => {
      for (let i of o) n(i.contentRect.width);
    });
    return e.current && r.observe(e.current), () => {
      r.disconnect();
    };
  }, [e]), t;
}, T5 = (e) => {
  var t = e, { children: n, style: r, transition: o = !1, transitionDuration: i = 500, transitionStep: a = 50 } = t, s = t5(t, ["children", "style", "transition", "transitionDuration", "transitionStep"]);
  let c = Ve([]), u = Ve(null), d = M5(), f = P5(u), { positions: h, containerHeight: g } = b5({ boxesRefs: c, wrapperRef: u, children: n, windowWidth: d, wrapperWidth: f }), p = ct({ minHeight: g ?? 0, position: "relative" }, r);
  return l("div", Yi(ct({ ref: u, style: p }, s), { children: li.map(n, (v, y) => {
    if (typeof v != "object" || !v || !("type" in v)) return v;
    let w = { style: S5({ style: v.props.style, position: h[y], transition: o, transitionDuration: i }), ref: (b) => c.current[y] = b };
    return S0(v, ct(ct({}, v.props), w));
  }) }));
};
const k5 = { sm: 340, md: 480, lg: 640 }, _d = X(
  function({ children: t, widgetWidth: n = "sm" }, r) {
    const o = k5[n], [i, a] = ke(), s = li.toArray(t), c = Ve(null);
    return Fe(() => {
      const u = () => {
        var f;
        const d = (f = c.current) == null ? void 0 : f.offsetWidth;
        d && a(Math.floor(d / o) || 1);
      };
      return u(), window.addEventListener("resize", u), () => {
        window.removeEventListener("resize", u);
      };
    }, [a, o]), /* @__PURE__ */ l("div", { ref: r, className: "text-f1-foreground", children: /* @__PURE__ */ l("div", { ref: c, children: i === 1 ? /* @__PURE__ */ l("div", { className: "flex flex-col gap-4 *:shadow", children: t }) : i && i > 1 && /* @__PURE__ */ l("div", { className: "relative -mr-4", children: /* @__PURE__ */ l(T5, { children: s.map((u, d) => /* @__PURE__ */ l(
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
), E5 = ["sm", "lg", "md", "md", "lg", "sm", "lg", "lg", "sm", "sm", "md", "md"], jR = gt(_d, () => /* @__PURE__ */ l(mg, { children: /* @__PURE__ */ l(_d, { children: E5.map((e, t) => /* @__PURE__ */ l(Gn.Skeleton, { height: e }, t)) }) })), Rd = ({ children: e }) => /* @__PURE__ */ l("div", { className: "flex min-h-40 flex-row items-stretch gap-4 text-f1-foreground @container [&>div]:min-w-[calc(100vw-64px)] @2xl:[&>div]:min-w-[calc(50vw-48px)]", children: e }), UR = gt(
  X(function({ children: t }, n) {
    return /* @__PURE__ */ l(Ci, { ref: n, showBar: !1, children: /* @__PURE__ */ l(Rd, { children: t }) });
  }),
  () => /* @__PURE__ */ l(mg, { orientation: "horizontal", children: /* @__PURE__ */ N(Rd, { children: [
    /* @__PURE__ */ l(Gn.Skeleton, {}),
    /* @__PURE__ */ l(Gn.Skeleton, {}),
    /* @__PURE__ */ l(Gn.Skeleton, {})
  ] }) })
), A5 = X(
  ({ title: e, children: t }, n) => (kn(e, { disallowEmpty: !0 }), /* @__PURE__ */ N("div", { ref: n, className: "flex flex-col gap-2", children: [
    /* @__PURE__ */ l("p", { className: "text-base font-medium text-f1-foreground-secondary", children: e }),
    t
  ] }))
);
A5.displayName = "WidgetSection";
const HR = He(
  {
    name: "ScrollArea",
    type: "layout"
  },
  Ci
);
export {
  Y5 as Alert,
  Z5 as AlertAvatar,
  q5 as AlertDescription,
  Cl as AlertTag,
  X5 as AlertTitle,
  oR as ApplicationFrame,
  TR as AreaChartWidget,
  PR as AutoGrid,
  MM as Badge,
  dk as BalanceTag,
  kR as BarChartWidget,
  QT as BaseCelebration,
  WD as BaseTabs,
  _N as Calendar,
  IR as CalendarEventList,
  ME as Carousel,
  LR as CategoryBarSection,
  Q5 as Celebration,
  JT as CelebrationSkeleton,
  RR as ChartWidgetEmptyState,
  Mi as CompanyAvatar,
  eR as CompanyHeader,
  YA as CompanySelector,
  fk as CompanyTag,
  wl as Counter,
  jR as Dashboard,
  os as DateAvatar,
  KA as DaytimePage,
  c_ as DetailsItem,
  u_ as DetailsItemsList,
  bR as Dialog,
  mk as DotTag,
  z5 as Form,
  G5 as FormActions,
  K5 as FormField,
  xR as FullscreenLayout,
  J5 as HighlightBanner,
  SR as HomeLayout,
  FR as IndicatorsList,
  wR as InfoPaneLayout,
  ER as LineChartWidget,
  dR as Menu,
  Oi as ModuleAvatar,
  B5 as NumberInput,
  lR as OmniButton,
  CR as OverviewLayout,
  zA as Page,
  sR as PageHeader,
  Qr as PersonAvatar,
  tR as PersonHeader,
  pk as PersonTag,
  AR as PieChartWidget,
  x_ as PrivateBox,
  V5 as RadarChart,
  Sl as RawTag,
  nR as ResourceHeader,
  HR as ScrollArea,
  fR as SearchBar,
  nT as Select,
  pg as Shortcut,
  hR as Sidebar,
  cR as SidebarHeader,
  rR as Spinner,
  MR as Split,
  NR as Stack,
  h_ as StandardLayout,
  Lr as StatusTag,
  _R as SummariesWidget,
  gR as Tabs,
  $D as TabsSkeleton,
  WR as TasksList,
  sl as TeamAvatar,
  gk as TeamTag,
  j5 as Textarea,
  $p as ToggleGroup,
  jp as ToggleGroupItem,
  $R as TwoColumnsList,
  mR as User,
  DR as VerticalBarChartWidget,
  s_ as Weekdays,
  Gn as Widget,
  OR as WidgetHighlightButton,
  VR as WidgetInboxList,
  A5 as WidgetSection,
  BR as WidgetSimpleList,
  UR as WidgetStrip,
  IC as _RadarChart,
  ll as renderAvatar,
  H5 as useForm
};
