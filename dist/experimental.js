import { p as Lr, q as Fo, r as ra, s as Dw, t as xi, D as Aw, v as Ts, w as _w, x as Ow, y as Ci, z as Lw, F as Iw, G as Fw, H as Rd, J as Vw, K as Dd, N as $w, O as Im, Q as Fm, R as Bw, S as Xe, P as ve, T as gc, U as yc, W as Ww, c as rn, Y as Se, Z as Ct, _ as re, $ as Ve, a as A, a0 as jw, a1 as Uw, a2 as Hw, b as Ad, a3 as zw, a4 as Gw, f as Yw, a5 as _d, a6 as kt, a7 as Ce, a8 as Ye, a9 as Kw, aa as ar, ab as Yr, ac as Ra, ad as Da, ae as bc, af as Mt, ag as wc, ah as Xw, ai as It, aj as xc, C as rt, j as $e, n as Kr, E as Cc, ak as Vt, al as Fn, o as Vm, am as $m, an as Bm, ao as Wm, ap as jm, aq as qw, ar as Sc, as as Cl, k as Vo, L as io, at as Nc, au as Zw, M as Qw, av as Od, aw as Jw, ax as ex, l as Um, A as tx, B as nx, e as rx, g as ox, V as ix, d as ax, ay as sx, az as lx, aA as cx } from "./imageHandler-Bw41VGPW.js";
import { jsx as l, jsxs as S, Fragment as we } from "react/jsx-runtime";
import * as m from "react";
import L, { PureComponent as ux, createContext as St, useContext as Oe, useId as Aa, useEffect as We, useCallback as zt, Component as dx, useLayoutEffect as Pc, useRef as Ge, useInsertionEffect as Hm, useMemo as Et, forwardRef as Z, Fragment as zm, createElement as oa, Children as _a, isValidElement as fx, useState as Te, useImperativeHandle as hx, memo as mx, cloneElement as px } from "react";
import * as Mc from "react-dom";
import Ec from "react-dom";
import './experimental.css';var vx = ["cx", "cy", "innerRadius", "outerRadius", "gridType", "radialLines"];
function $o(e) {
  "@babel/helpers - typeof";
  return $o = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, $o(e);
}
function gx(e, t) {
  if (e == null) return {};
  var n = yx(e, t), r, o;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (o = 0; o < i.length; o++)
      r = i[o], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function yx(e, t) {
  if (e == null) return {};
  var n = {}, r = Object.keys(e), o, i;
  for (i = 0; i < r.length; i++)
    o = r[i], !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
function xn() {
  return xn = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, xn.apply(this, arguments);
}
function Ld(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Bo(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Ld(Object(n), !0).forEach(function(r) {
      bx(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Ld(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function bx(e, t, n) {
  return t = wx(t), t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function wx(e) {
  var t = xx(e, "string");
  return $o(t) == "symbol" ? t : String(t);
}
function xx(e, t) {
  if ($o(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if ($o(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Cx = function(t, n, r, o) {
  var i = "";
  return o.forEach(function(a, s) {
    var c = Fo(n, r, t, a);
    s ? i += "L ".concat(c.x, ",").concat(c.y) : i += "M ".concat(c.x, ",").concat(c.y);
  }), i += "Z", i;
}, Sx = function(t) {
  var n = t.cx, r = t.cy, o = t.innerRadius, i = t.outerRadius, a = t.polarAngles, s = t.radialLines;
  if (!a || !a.length || !s)
    return null;
  var c = Bo({
    stroke: "#ccc"
  }, Lr(t, !1));
  return /* @__PURE__ */ L.createElement("g", {
    className: "recharts-polar-grid-angle"
  }, a.map(function(u) {
    var d = Fo(n, r, o, u), f = Fo(n, r, i, u);
    return /* @__PURE__ */ L.createElement("line", xn({}, c, {
      key: "line-".concat(u),
      x1: d.x,
      y1: d.y,
      x2: f.x,
      y2: f.y
    }));
  }));
}, Nx = function(t) {
  var n = t.cx, r = t.cy, o = t.radius, i = t.index, a = Bo(Bo({
    stroke: "#ccc"
  }, Lr(t, !1)), {}, {
    fill: "none"
  });
  return /* @__PURE__ */ L.createElement("circle", xn({}, a, {
    className: ra("recharts-polar-grid-concentric-circle", t.className),
    key: "circle-".concat(i),
    cx: n,
    cy: r,
    r: o
  }));
}, Px = function(t) {
  var n = t.radius, r = t.index, o = Bo(Bo({
    stroke: "#ccc"
  }, Lr(t, !1)), {}, {
    fill: "none"
  });
  return /* @__PURE__ */ L.createElement("path", xn({}, o, {
    className: ra("recharts-polar-grid-concentric-polygon", t.className),
    key: "path-".concat(r),
    d: Cx(n, t.cx, t.cy, t.polarAngles)
  }));
}, Mx = function(t) {
  var n = t.polarRadius, r = t.gridType;
  return !n || !n.length ? null : /* @__PURE__ */ L.createElement("g", {
    className: "recharts-polar-grid-concentric"
  }, n.map(function(o, i) {
    var a = i;
    return r === "circle" ? /* @__PURE__ */ L.createElement(Nx, xn({
      key: a
    }, t, {
      radius: o,
      index: i
    })) : /* @__PURE__ */ L.createElement(Px, xn({
      key: a
    }, t, {
      radius: o,
      index: i
    }));
  }));
}, Gm = function(t) {
  var n = t.cx, r = n === void 0 ? 0 : n, o = t.cy, i = o === void 0 ? 0 : o, a = t.innerRadius, s = a === void 0 ? 0 : a, c = t.outerRadius, u = c === void 0 ? 0 : c, d = t.gridType, f = d === void 0 ? "polygon" : d, h = t.radialLines, v = h === void 0 ? !0 : h, g = gx(t, vx);
  return u <= 0 ? null : /* @__PURE__ */ L.createElement("g", {
    className: "recharts-polar-grid"
  }, /* @__PURE__ */ L.createElement(Sx, xn({
    cx: r,
    cy: i,
    innerRadius: s,
    outerRadius: u,
    gridType: f,
    radialLines: v
  }, g)), /* @__PURE__ */ L.createElement(Mx, xn({
    cx: r,
    cy: i,
    innerRadius: s,
    outerRadius: u,
    gridType: f,
    radialLines: v
  }, g)));
};
Gm.displayName = "PolarGrid";
var ks, Id;
function Ex() {
  if (Id) return ks;
  Id = 1;
  function e(t) {
    return t && t.length ? t[0] : void 0;
  }
  return ks = e, ks;
}
var Rs, Fd;
function Tx() {
  return Fd || (Fd = 1, Rs = Ex()), Rs;
}
var kx = Tx();
const Rx = /* @__PURE__ */ Dw(kx);
function Vr(e) {
  "@babel/helpers - typeof";
  return Vr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Vr(e);
}
function ia() {
  return ia = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, ia.apply(this, arguments);
}
function Vd(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function ut(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Vd(Object(n), !0).forEach(function(r) {
      hn(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Vd(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function Dx(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function $d(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, Km(r.key), r);
  }
}
function Ax(e, t, n) {
  return t && $d(e.prototype, t), n && $d(e, n), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function _x(e, t, n) {
  return t = aa(t), Ox(e, Ym() ? Reflect.construct(t, n || [], aa(e).constructor) : t.apply(e, n));
}
function Ox(e, t) {
  if (t && (Vr(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return Mr(e);
}
function Ym() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (Ym = function() {
    return !!e;
  })();
}
function aa(e) {
  return aa = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, aa(e);
}
function Mr(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Lx(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Sl(e, t);
}
function Sl(e, t) {
  return Sl = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, o) {
    return r.__proto__ = o, r;
  }, Sl(e, t);
}
function hn(e, t, n) {
  return t = Km(t), t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function Km(e) {
  var t = Ix(e, "string");
  return Vr(t) == "symbol" ? t : String(t);
}
function Ix(e, t) {
  if (Vr(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (Vr(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var ei = /* @__PURE__ */ function(e) {
  Lx(t, e);
  function t() {
    var n;
    Dx(this, t);
    for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++)
      o[i] = arguments[i];
    return n = _x(this, t, [].concat(o)), hn(Mr(n), "state", {
      isAnimationFinished: !1
    }), hn(Mr(n), "handleAnimationEnd", function() {
      var a = n.props.onAnimationEnd;
      n.setState({
        isAnimationFinished: !0
      }), xi(a) && a();
    }), hn(Mr(n), "handleAnimationStart", function() {
      var a = n.props.onAnimationStart;
      n.setState({
        isAnimationFinished: !1
      }), xi(a) && a();
    }), hn(Mr(n), "handleMouseEnter", function(a) {
      var s = n.props.onMouseEnter;
      s && s(n.props, a);
    }), hn(Mr(n), "handleMouseLeave", function(a) {
      var s = n.props.onMouseLeave;
      s && s(n.props, a);
    }), n;
  }
  return Ax(t, [{
    key: "renderDots",
    value: function(r) {
      var o = this.props, i = o.dot, a = o.dataKey, s = Lr(this.props, !1), c = Lr(i, !0), u = r.map(function(d, f) {
        var h = ut(ut(ut({
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
      return /* @__PURE__ */ L.createElement(Ts, {
        className: "recharts-radar-dots"
      }, u);
    }
  }, {
    key: "renderPolygonStatically",
    value: function(r) {
      var o = this.props, i = o.shape, a = o.dot, s = o.isRange, c = o.baseLinePoints, u = o.connectNulls, d;
      return /* @__PURE__ */ L.isValidElement(i) ? d = /* @__PURE__ */ L.cloneElement(i, ut(ut({}, this.props), {}, {
        points: r
      })) : xi(i) ? d = i(ut(ut({}, this.props), {}, {
        points: r
      })) : d = /* @__PURE__ */ L.createElement(_w, ia({}, Lr(this.props, !0), {
        onMouseEnter: this.handleMouseEnter,
        onMouseLeave: this.handleMouseLeave,
        points: r,
        baseLinePoints: s ? c : null,
        connectNulls: u
      })), /* @__PURE__ */ L.createElement(Ts, {
        className: "recharts-radar-polygon"
      }, d, a ? this.renderDots(r) : null);
    }
  }, {
    key: "renderPolygonWithAnimation",
    value: function() {
      var r = this, o = this.props, i = o.points, a = o.isAnimationActive, s = o.animationBegin, c = o.animationDuration, u = o.animationEasing, d = o.animationId, f = this.state.prevPoints;
      return /* @__PURE__ */ L.createElement(Ow, {
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
        var v = h.t, g = f && f.length / i.length, p = i.map(function(y, b) {
          var w = f && f[Math.floor(b * g)];
          if (w) {
            var x = Ci(w.x, y.x), C = Ci(w.y, y.y);
            return ut(ut({}, y), {}, {
              x: x(v),
              y: C(v)
            });
          }
          var M = Ci(y.cx, y.x), I = Ci(y.cy, y.y);
          return ut(ut({}, y), {}, {
            x: M(v),
            y: I(v)
          });
        });
        return r.renderPolygonStatically(p);
      });
    }
  }, {
    key: "renderPolygon",
    value: function() {
      var r = this.props, o = r.points, i = r.isAnimationActive, a = r.isRange, s = this.state.prevPoints;
      return i && o && o.length && !a && (!s || !Lw(s, o)) ? this.renderPolygonWithAnimation() : this.renderPolygonStatically(o);
    }
  }, {
    key: "render",
    value: function() {
      var r = this.props, o = r.hide, i = r.className, a = r.points, s = r.isAnimationActive;
      if (o || !a || !a.length)
        return null;
      var c = this.state.isAnimationFinished, u = ra("recharts-radar", i);
      return /* @__PURE__ */ L.createElement(Ts, {
        className: u
      }, this.renderPolygon(), (!s || c) && Iw.renderCallByParent(this.props, a));
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
      return /* @__PURE__ */ L.isValidElement(r) ? i = /* @__PURE__ */ L.cloneElement(r, o) : xi(r) ? i = r(o) : i = /* @__PURE__ */ L.createElement(Aw, ia({}, o, {
        className: ra("recharts-radar-dot", typeof r != "boolean" ? r.className : "")
      })), i;
    }
  }]), t;
}(ux);
hn(ei, "displayName", "Radar");
hn(ei, "defaultProps", {
  angleAxisId: 0,
  radiusAxisId: 0,
  hide: !1,
  activeDot: !0,
  dot: !1,
  legendType: "rect",
  isAnimationActive: !Fw.isSsr,
  animationBegin: 0,
  animationDuration: 1500,
  animationEasing: "ease"
});
hn(ei, "getComposedData", function(e) {
  var t = e.radiusAxis, n = e.angleAxis, r = e.displayedData, o = e.dataKey, i = e.bandSize, a = n.cx, s = n.cy, c = !1, u = [], d = n.type !== "number" ? i ?? 0 : 0;
  r.forEach(function(h, v) {
    var g = Rd(h, n.dataKey, v), p = Rd(h, o), y = n.scale(g) + d, b = Array.isArray(p) ? Vw(p) : p, w = Dd(b) ? void 0 : t.scale(b);
    Array.isArray(p) && p.length >= 2 && (c = !0), u.push(ut(ut({}, Fo(a, s, w, y)), {}, {
      name: g,
      value: p,
      cx: a,
      cy: s,
      radius: w,
      angle: y,
      payload: h
    }));
  });
  var f = [];
  return c && u.forEach(function(h) {
    if (Array.isArray(h.value)) {
      var v = Rx(h.value), g = Dd(v) ? void 0 : t.scale(v);
      f.push(ut(ut({}, h), {}, {
        radius: g
      }, Fo(a, s, g, h.angle)));
    } else
      f.push(h);
  }), {
    points: u,
    isRange: c,
    baseLinePoints: f
  };
});
var Fx = $w({
  chartName: "RadarChart",
  GraphicalChild: ei,
  axisComponents: [{
    axisType: "angleAxis",
    AxisComp: Im
  }, {
    axisType: "radiusAxis",
    AxisComp: Fm
  }],
  formatAxisMap: Bw,
  defaultProps: {
    layout: "centric",
    startAngle: 90,
    endAngle: -270,
    cx: "50%",
    cy: "50%",
    innerRadius: 0,
    outerRadius: "80%"
  }
}), Vx = "Portal", Oa = m.forwardRef((e, t) => {
  var s;
  const { container: n, ...r } = e, [o, i] = m.useState(!1);
  Xe(() => i(!0), []);
  const a = n || o && ((s = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : s.body);
  return a ? Ec.createPortal(/* @__PURE__ */ l(ve.div, { ...r, ref: t }), a) : null;
});
Oa.displayName = Vx;
const Bd = /* @__PURE__ */ new Set();
function La(e, t, n) {
  e || Bd.has(t) || (console.warn(t), Bd.add(t));
}
function $x(e) {
  if (typeof Proxy > "u")
    return e;
  const t = /* @__PURE__ */ new Map(), n = (...r) => (process.env.NODE_ENV !== "production" && La(!1, "motion() is deprecated. Use motion.create() instead."), e(...r));
  return new Proxy(n, {
    /**
     * Called when `motion` is referenced with a prop: `motion.div`, `motion.input` etc.
     * The prop name is passed through as `key` and we can use that to generate a `motion`
     * DOM component with that name.
     */
    get: (r, o) => o === "create" ? e : (t.has(o) || t.set(o, e(o)), t.get(o))
  });
}
function Wo(e) {
  return e !== null && typeof e == "object" && typeof e.start == "function";
}
const Nl = (e) => Array.isArray(e);
function Xm(e, t) {
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
function jo(e) {
  return typeof e == "string" || Array.isArray(e);
}
function Wd(e) {
  const t = [{}, {}];
  return e == null || e.values.forEach((n, r) => {
    t[0][r] = n.get(), t[1][r] = n.getVelocity();
  }), t;
}
function Tc(e, t, n, r) {
  if (typeof t == "function") {
    const [o, i] = Wd(r);
    t = t(n !== void 0 ? n : e.custom, o, i);
  }
  if (typeof t == "string" && (t = e.variants && e.variants[t]), typeof t == "function") {
    const [o, i] = Wd(r);
    t = t(n !== void 0 ? n : e.custom, o, i);
  }
  return t;
}
function Ia(e, t, n) {
  const r = e.getProps();
  return Tc(r, t, n !== void 0 ? n : r.custom, e);
}
const kc = [
  "animate",
  "whileInView",
  "whileFocus",
  "whileHover",
  "whileTap",
  "whileDrag",
  "exit"
], Rc = ["initial", ...kc], ti = [
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
], Bn = new Set(ti), en = (e) => e * 1e3, vn = (e) => e / 1e3, Bx = {
  type: "spring",
  stiffness: 500,
  damping: 25,
  restSpeed: 10
}, Wx = (e) => ({
  type: "spring",
  stiffness: 550,
  damping: e === 0 ? 2 * Math.sqrt(550) : 30,
  restSpeed: 10
}), jx = {
  type: "keyframes",
  duration: 0.8
}, Ux = {
  type: "keyframes",
  ease: [0.25, 0.1, 0.35, 1],
  duration: 0.3
}, Hx = (e, { keyframes: t }) => t.length > 2 ? jx : Bn.has(e) ? e.startsWith("scale") ? Wx(t[1]) : Bx : Ux;
function zx({ when: e, delay: t, delayChildren: n, staggerChildren: r, staggerDirection: o, repeat: i, repeatType: a, repeatDelay: s, from: c, elapsed: u, ...d }) {
  return !!Object.keys(d).length;
}
function Dc(e, t) {
  return e[t] || e.default || e;
}
const Gx = {
  skipAnimations: !1,
  useManualTiming: !1
}, Yx = (e) => e !== null;
function Fa(e, { repeat: t, repeatType: n = "loop" }, r) {
  const o = e.filter(Yx), i = t && n !== "loop" && t % 2 === 1 ? 0 : o.length - 1;
  return !i || r === void 0 ? o[i] : r;
}
const nt = (e) => e;
function Kx(e) {
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
      const v = f && r ? t : n;
      return d && i.add(u), v.has(u) || v.add(u), u;
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
const Si = [
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
], Xx = 40;
function qm(e, t) {
  let n = !1, r = !0;
  const o = {
    delta: 0,
    timestamp: 0,
    isProcessing: !1
  }, i = () => n = !0, a = Si.reduce((b, w) => (b[w] = Kx(i), b), {}), { read: s, resolveKeyframes: c, update: u, preRender: d, render: f, postRender: h } = a, v = () => {
    const b = performance.now();
    n = !1, o.delta = r ? 1e3 / 60 : Math.max(Math.min(b - o.timestamp, Xx), 1), o.timestamp = b, o.isProcessing = !0, s.process(o), c.process(o), u.process(o), d.process(o), f.process(o), h.process(o), o.isProcessing = !1, n && t && (r = !1, e(v));
  }, g = () => {
    n = !0, r = !0, o.isProcessing || e(v);
  };
  return { schedule: Si.reduce((b, w) => {
    const x = a[w];
    return b[w] = (C, M = !1, I = !1) => (n || g(), x.schedule(C, M, I)), b;
  }, {}), cancel: (b) => {
    for (let w = 0; w < Si.length; w++)
      a[Si[w]].cancel(b);
  }, state: o, steps: a };
}
const { schedule: Ee, cancel: Cn, state: tt, steps: Ds } = qm(typeof requestAnimationFrame < "u" ? requestAnimationFrame : nt, !0), Zm = (e) => /^0[^.\s]+$/u.test(e);
function qx(e) {
  return typeof e == "number" ? e === 0 : e !== null ? e === "none" || e === "0" || Zm(e) : !0;
}
let Xr = nt, Sn = nt;
process.env.NODE_ENV !== "production" && (Xr = (e, t) => {
  !e && typeof console < "u" && console.warn(t);
}, Sn = (e, t) => {
  if (!e)
    throw new Error(t);
});
const Qm = (e) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e), Jm = (e) => (t) => typeof t == "string" && t.startsWith(e), ep = Jm("--"), Zx = Jm("var(--"), Ac = (e) => Zx(e) ? Qx.test(e.split("/*")[0].trim()) : !1, Qx = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu, Jx = (
  // eslint-disable-next-line redos-detector/no-unsafe-regex -- false positive, as it can match a lot of words
  /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u
);
function eC(e) {
  const t = Jx.exec(e);
  if (!t)
    return [,];
  const [, n, r, o] = t;
  return [`--${n ?? r}`, o];
}
const tC = 4;
function tp(e, t, n = 1) {
  Sn(n <= tC, `Max CSS variable fallback depth detected in property "${e}". This may indicate a circular fallback dependency.`);
  const [r, o] = eC(e);
  if (!r)
    return;
  const i = window.getComputedStyle(t).getPropertyValue(r);
  if (i) {
    const a = i.trim();
    return Qm(a) ? parseFloat(a) : a;
  }
  return Ac(o) ? tp(o, t, n + 1) : o;
}
const Vn = (e, t, n) => n > t ? t : n < e ? e : n, qr = {
  test: (e) => typeof e == "number",
  parse: parseFloat,
  transform: (e) => e
}, Eo = {
  ...qr,
  transform: (e) => Vn(0, 1, e)
}, Ni = {
  ...qr,
  default: 1
}, To = (e) => Math.round(e * 1e5) / 1e5, _c = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu, nC = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu, rC = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu;
function ni(e) {
  return typeof e == "string";
}
function oC(e) {
  return e == null;
}
const ri = (e) => ({
  test: (t) => ni(t) && t.endsWith(e) && t.split(" ").length === 1,
  parse: parseFloat,
  transform: (t) => `${t}${e}`
}), Tn = /* @__PURE__ */ ri("deg"), tn = /* @__PURE__ */ ri("%"), me = /* @__PURE__ */ ri("px"), iC = /* @__PURE__ */ ri("vh"), aC = /* @__PURE__ */ ri("vw"), jd = {
  ...tn,
  parse: (e) => tn.parse(e) / 100,
  transform: (e) => tn.transform(e * 100)
}, sC = /* @__PURE__ */ new Set([
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
]), Ud = (e) => e === qr || e === me, Hd = (e, t) => parseFloat(e.split(", ")[t]), zd = (e, t) => (n, { transform: r }) => {
  if (r === "none" || !r)
    return 0;
  const o = r.match(/^matrix3d\((.+)\)$/u);
  if (o)
    return Hd(o[1], t);
  {
    const i = r.match(/^matrix\((.+)\)$/u);
    return i ? Hd(i[1], e) : 0;
  }
}, lC = /* @__PURE__ */ new Set(["x", "y", "z"]), cC = ti.filter((e) => !lC.has(e));
function uC(e) {
  const t = [];
  return cC.forEach((n) => {
    const r = e.getValue(n);
    r !== void 0 && (t.push([n, r.get()]), r.set(n.startsWith("scale") ? 1 : 0));
  }), t;
}
const $r = {
  // Dimensions
  width: ({ x: e }, { paddingLeft: t = "0", paddingRight: n = "0" }) => e.max - e.min - parseFloat(t) - parseFloat(n),
  height: ({ y: e }, { paddingTop: t = "0", paddingBottom: n = "0" }) => e.max - e.min - parseFloat(t) - parseFloat(n),
  top: (e, { top: t }) => parseFloat(t),
  left: (e, { left: t }) => parseFloat(t),
  bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
  right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
  // Transform
  x: zd(4, 13),
  y: zd(5, 14)
};
$r.translateX = $r.x;
$r.translateY = $r.y;
const np = (e) => (t) => t.test(e), dC = {
  test: (e) => e === "auto",
  parse: (e) => e
}, rp = [qr, me, tn, Tn, aC, iC, dC], Gd = (e) => rp.find(np(e)), or = /* @__PURE__ */ new Set();
let Pl = !1, Ml = !1;
function op() {
  if (Ml) {
    const e = Array.from(or).filter((r) => r.needsMeasurement), t = new Set(e.map((r) => r.element)), n = /* @__PURE__ */ new Map();
    t.forEach((r) => {
      const o = uC(r);
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
  Ml = !1, Pl = !1, or.forEach((e) => e.complete()), or.clear();
}
function ip() {
  or.forEach((e) => {
    e.readKeyframes(), e.needsMeasurement && (Ml = !0);
  });
}
function fC() {
  ip(), op();
}
class Oc {
  constructor(t, n, r, o, i, a = !1) {
    this.isComplete = !1, this.isAsync = !1, this.needsMeasurement = !1, this.isScheduled = !1, this.unresolvedKeyframes = [...t], this.onComplete = n, this.name = r, this.motionValue = o, this.element = i, this.isAsync = a;
  }
  scheduleResolve() {
    this.isScheduled = !0, this.isAsync ? (or.add(this), Pl || (Pl = !0, Ee.read(ip), Ee.resolveKeyframes(op))) : (this.readKeyframes(), this.complete());
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
    this.isComplete = !0, this.onComplete(this.unresolvedKeyframes, this.finalKeyframe), or.delete(this);
  }
  cancel() {
    this.isComplete || (this.isScheduled = !1, or.delete(this));
  }
  resume() {
    this.isComplete || this.scheduleResolve();
  }
}
const Lc = (e, t) => (n) => !!(ni(n) && rC.test(n) && n.startsWith(e) || t && !oC(n) && Object.prototype.hasOwnProperty.call(n, t)), ap = (e, t, n) => (r) => {
  if (!ni(r))
    return r;
  const [o, i, a, s] = r.match(_c);
  return {
    [e]: parseFloat(o),
    [t]: parseFloat(i),
    [n]: parseFloat(a),
    alpha: s !== void 0 ? parseFloat(s) : 1
  };
}, hC = (e) => Vn(0, 255, e), As = {
  ...qr,
  transform: (e) => Math.round(hC(e))
}, rr = {
  test: /* @__PURE__ */ Lc("rgb", "red"),
  parse: /* @__PURE__ */ ap("red", "green", "blue"),
  transform: ({ red: e, green: t, blue: n, alpha: r = 1 }) => "rgba(" + As.transform(e) + ", " + As.transform(t) + ", " + As.transform(n) + ", " + To(Eo.transform(r)) + ")"
};
function mC(e) {
  let t = "", n = "", r = "", o = "";
  return e.length > 5 ? (t = e.substring(1, 3), n = e.substring(3, 5), r = e.substring(5, 7), o = e.substring(7, 9)) : (t = e.substring(1, 2), n = e.substring(2, 3), r = e.substring(3, 4), o = e.substring(4, 5), t += t, n += n, r += r, o += o), {
    red: parseInt(t, 16),
    green: parseInt(n, 16),
    blue: parseInt(r, 16),
    alpha: o ? parseInt(o, 16) / 255 : 1
  };
}
const El = {
  test: /* @__PURE__ */ Lc("#"),
  parse: mC,
  transform: rr.transform
}, kr = {
  test: /* @__PURE__ */ Lc("hsl", "hue"),
  parse: /* @__PURE__ */ ap("hue", "saturation", "lightness"),
  transform: ({ hue: e, saturation: t, lightness: n, alpha: r = 1 }) => "hsla(" + Math.round(e) + ", " + tn.transform(To(t)) + ", " + tn.transform(To(n)) + ", " + To(Eo.transform(r)) + ")"
}, st = {
  test: (e) => rr.test(e) || El.test(e) || kr.test(e),
  parse: (e) => rr.test(e) ? rr.parse(e) : kr.test(e) ? kr.parse(e) : El.parse(e),
  transform: (e) => ni(e) ? e : e.hasOwnProperty("red") ? rr.transform(e) : kr.transform(e)
};
function pC(e) {
  var t, n;
  return isNaN(e) && ni(e) && (((t = e.match(_c)) === null || t === void 0 ? void 0 : t.length) || 0) + (((n = e.match(nC)) === null || n === void 0 ? void 0 : n.length) || 0) > 0;
}
const sp = "number", lp = "color", vC = "var", gC = "var(", Yd = "${}", yC = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function Uo(e) {
  const t = e.toString(), n = [], r = {
    color: [],
    number: [],
    var: []
  }, o = [];
  let i = 0;
  const s = t.replace(yC, (c) => (st.test(c) ? (r.color.push(i), o.push(lp), n.push(st.parse(c))) : c.startsWith(gC) ? (r.var.push(i), o.push(vC), n.push(c)) : (r.number.push(i), o.push(sp), n.push(parseFloat(c))), ++i, Yd)).split(Yd);
  return { values: n, split: s, indexes: r, types: o };
}
function cp(e) {
  return Uo(e).values;
}
function up(e) {
  const { split: t, types: n } = Uo(e), r = t.length;
  return (o) => {
    let i = "";
    for (let a = 0; a < r; a++)
      if (i += t[a], o[a] !== void 0) {
        const s = n[a];
        s === sp ? i += To(o[a]) : s === lp ? i += st.transform(o[a]) : i += o[a];
      }
    return i;
  };
}
const bC = (e) => typeof e == "number" ? 0 : e;
function wC(e) {
  const t = cp(e);
  return up(e)(t.map(bC));
}
const $n = {
  test: pC,
  parse: cp,
  createTransformer: up,
  getAnimatableNone: wC
}, xC = /* @__PURE__ */ new Set(["brightness", "contrast", "saturate", "opacity"]);
function CC(e) {
  const [t, n] = e.slice(0, -1).split("(");
  if (t === "drop-shadow")
    return e;
  const [r] = n.match(_c) || [];
  if (!r)
    return e;
  const o = n.replace(r, "");
  let i = xC.has(t) ? 1 : 0;
  return r !== n && (i *= 100), t + "(" + i + o + ")";
}
const SC = /\b([a-z-]*)\(.*?\)/gu, Tl = {
  ...$n,
  getAnimatableNone: (e) => {
    const t = e.match(SC);
    return t ? t.map(CC).join(" ") : e;
  }
}, Kd = {
  ...qr,
  transform: Math.round
}, Ic = {
  // Border props
  borderWidth: me,
  borderTopWidth: me,
  borderRightWidth: me,
  borderBottomWidth: me,
  borderLeftWidth: me,
  borderRadius: me,
  radius: me,
  borderTopLeftRadius: me,
  borderTopRightRadius: me,
  borderBottomRightRadius: me,
  borderBottomLeftRadius: me,
  // Positioning props
  width: me,
  maxWidth: me,
  height: me,
  maxHeight: me,
  size: me,
  top: me,
  right: me,
  bottom: me,
  left: me,
  // Spacing props
  padding: me,
  paddingTop: me,
  paddingRight: me,
  paddingBottom: me,
  paddingLeft: me,
  margin: me,
  marginTop: me,
  marginRight: me,
  marginBottom: me,
  marginLeft: me,
  // Transform props
  rotate: Tn,
  rotateX: Tn,
  rotateY: Tn,
  rotateZ: Tn,
  scale: Ni,
  scaleX: Ni,
  scaleY: Ni,
  scaleZ: Ni,
  skew: Tn,
  skewX: Tn,
  skewY: Tn,
  distance: me,
  translateX: me,
  translateY: me,
  translateZ: me,
  x: me,
  y: me,
  z: me,
  perspective: me,
  transformPerspective: me,
  opacity: Eo,
  originX: jd,
  originY: jd,
  originZ: me,
  // Misc
  zIndex: Kd,
  backgroundPositionX: me,
  backgroundPositionY: me,
  // SVG
  fillOpacity: Eo,
  strokeOpacity: Eo,
  numOctaves: Kd
}, NC = {
  ...Ic,
  // Color props
  color: st,
  backgroundColor: st,
  outlineColor: st,
  fill: st,
  stroke: st,
  // Border props
  borderColor: st,
  borderTopColor: st,
  borderRightColor: st,
  borderBottomColor: st,
  borderLeftColor: st,
  filter: Tl,
  WebkitFilter: Tl
}, Fc = (e) => NC[e];
function dp(e, t) {
  let n = Fc(e);
  return n !== Tl && (n = $n), n.getAnimatableNone ? n.getAnimatableNone(t) : void 0;
}
const PC = /* @__PURE__ */ new Set(["auto", "none", "0"]);
function MC(e, t, n) {
  let r = 0, o;
  for (; r < e.length && !o; ) {
    const i = e[r];
    typeof i == "string" && !PC.has(i) && Uo(i).values.length && (o = e[r]), r++;
  }
  if (o && n)
    for (const i of t)
      e[i] = dp(n, o);
}
class fp extends Oc {
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
      if (typeof u == "string" && (u = u.trim(), Ac(u))) {
        const d = tp(u, n.current);
        d !== void 0 && (t[c] = d), c === t.length - 1 && (this.finalKeyframe = u);
      }
    }
    if (this.resolveNoneKeyframes(), !sC.has(r) || t.length !== 2)
      return;
    const [o, i] = t, a = Gd(o), s = Gd(i);
    if (a !== s)
      if (Ud(a) && Ud(s))
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
      qx(t[o]) && r.push(o);
    r.length && MC(t, r, n);
  }
  measureInitialState() {
    const { element: t, unresolvedKeyframes: n, name: r } = this;
    if (!t || !t.current)
      return;
    r === "height" && (this.suspendedScrollY = window.pageYOffset), this.measuredOrigin = $r[r](t.measureViewportBox(), window.getComputedStyle(t.current)), n[0] = this.measuredOrigin;
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
    o[a] = $r[r](n.measureViewportBox(), window.getComputedStyle(n.current)), s !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = s), !((t = this.removedTransforms) === null || t === void 0) && t.length && this.removedTransforms.forEach(([c, u]) => {
      n.getValue(c).set(u);
    }), this.resolveNoneKeyframes();
  }
}
function hp(e) {
  let t;
  return () => (t === void 0 && (t = e()), t);
}
let ji;
function EC() {
  ji = void 0;
}
const gn = {
  now: () => (ji === void 0 && gn.set(tt.isProcessing || Gx.useManualTiming ? tt.timestamp : performance.now()), ji),
  set: (e) => {
    ji = e, queueMicrotask(EC);
  }
}, Xd = (e, t) => t === "zIndex" ? !1 : !!(typeof e == "number" || Array.isArray(e) || typeof e == "string" && // It's animatable if we have a string
($n.test(e) || e === "0") && // And it contains numbers and/or colors
!e.startsWith("url("));
function TC(e) {
  const t = e[0];
  if (e.length === 1)
    return !0;
  for (let n = 0; n < e.length; n++)
    if (e[n] !== t)
      return !0;
}
function kC(e, t, n, r) {
  const o = e[0];
  if (o === null)
    return !1;
  if (t === "display" || t === "visibility")
    return !0;
  const i = e[e.length - 1], a = Xd(o, t), s = Xd(i, t);
  return Xr(a === s, `You are trying to animate ${t} from "${o}" to "${i}". ${o} is not an animatable value - to enable this animation set ${o} to a value animatable to ${i} via the \`style\` property.`), !a || !s ? !1 : TC(e) || n === "spring" && r;
}
const RC = 40;
class mp {
  constructor({ autoplay: t = !0, delay: n = 0, type: r = "keyframes", repeat: o = 0, repeatDelay: i = 0, repeatType: a = "loop", ...s }) {
    this.isStopped = !1, this.hasAttemptedResolve = !1, this.createdAt = gn.now(), this.options = {
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
    return this.resolvedAt ? this.resolvedAt - this.createdAt > RC ? this.resolvedAt : this.createdAt : this.createdAt;
  }
  /**
   * A getter for resolved data. If keyframes are not yet resolved, accessing
   * this.resolved will synchronously flush all pending keyframe resolvers.
   * This is a deoptimisation, but at its worst still batches read/writes.
   */
  get resolved() {
    return !this._resolved && !this.hasAttemptedResolve && fC(), this._resolved;
  }
  /**
   * A method to be called when the keyframes resolver completes. This method
   * will check if its possible to run the animation and, if not, skip it.
   * Otherwise, it will call initPlayback on the implementing class.
   */
  onKeyframesResolved(t, n) {
    this.resolvedAt = gn.now(), this.hasAttemptedResolve = !0;
    const { name: r, type: o, velocity: i, delay: a, onComplete: s, onUpdate: c, isGenerator: u } = this.options;
    if (!u && !kC(t, r, o, i))
      if (a)
        this.options.duration = 0;
      else {
        c == null || c(Fa(t, this.options, n)), s == null || s(), this.resolveFinishedPromise();
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
function pp(e, t) {
  return t ? e * (1e3 / t) : 0;
}
const DC = 5;
function vp(e, t, n) {
  const r = Math.max(t - DC, 0);
  return pp(n - e(r), t - r);
}
const _s = 1e-3, AC = 0.01, qd = 10, _C = 0.05, OC = 1;
function LC({ duration: e = 800, bounce: t = 0.25, velocity: n = 0, mass: r = 1 }) {
  let o, i;
  Xr(e <= en(qd), "Spring duration must be 10 seconds or less");
  let a = 1 - t;
  a = Vn(_C, OC, a), e = Vn(AC, qd, vn(e)), a < 1 ? (o = (u) => {
    const d = u * a, f = d * e, h = d - n, v = kl(u, a), g = Math.exp(-f);
    return _s - h / v * g;
  }, i = (u) => {
    const f = u * a * e, h = f * n + n, v = Math.pow(a, 2) * Math.pow(u, 2) * e, g = Math.exp(-f), p = kl(Math.pow(u, 2), a);
    return (-o(u) + _s > 0 ? -1 : 1) * ((h - v) * g) / p;
  }) : (o = (u) => {
    const d = Math.exp(-u * e), f = (u - n) * e + 1;
    return -_s + d * f;
  }, i = (u) => {
    const d = Math.exp(-u * e), f = (n - u) * (e * e);
    return d * f;
  });
  const s = 5 / e, c = FC(o, i, s);
  if (e = en(e), isNaN(c))
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
const IC = 12;
function FC(e, t, n) {
  let r = n;
  for (let o = 1; o < IC; o++)
    r = r - e(r) / t(r);
  return r;
}
function kl(e, t) {
  return e * Math.sqrt(1 - t * t);
}
const VC = ["duration", "bounce"], $C = ["stiffness", "damping", "mass"];
function Zd(e, t) {
  return t.some((n) => e[n] !== void 0);
}
function BC(e) {
  let t = {
    velocity: 0,
    stiffness: 100,
    damping: 10,
    mass: 1,
    isResolvedFromDuration: !1,
    ...e
  };
  if (!Zd(e, $C) && Zd(e, VC)) {
    const n = LC(e);
    t = {
      ...t,
      ...n,
      mass: 1
    }, t.isResolvedFromDuration = !0;
  }
  return t;
}
function gp({ keyframes: e, restDelta: t, restSpeed: n, ...r }) {
  const o = e[0], i = e[e.length - 1], a = { done: !1, value: o }, { stiffness: s, damping: c, mass: u, duration: d, velocity: f, isResolvedFromDuration: h } = BC({
    ...r,
    velocity: -vn(r.velocity || 0)
  }), v = f || 0, g = c / (2 * Math.sqrt(s * u)), p = i - o, y = vn(Math.sqrt(s / u)), b = Math.abs(p) < 5;
  n || (n = b ? 0.01 : 2), t || (t = b ? 5e-3 : 0.5);
  let w;
  if (g < 1) {
    const x = kl(y, g);
    w = (C) => {
      const M = Math.exp(-g * y * C);
      return i - M * ((v + g * y * p) / x * Math.sin(x * C) + p * Math.cos(x * C));
    };
  } else if (g === 1)
    w = (x) => i - Math.exp(-y * x) * (p + (v + y * p) * x);
  else {
    const x = y * Math.sqrt(g * g - 1);
    w = (C) => {
      const M = Math.exp(-g * y * C), I = Math.min(x * C, 300);
      return i - M * ((v + g * y * p) * Math.sinh(I) + x * p * Math.cosh(I)) / x;
    };
  }
  return {
    calculatedDuration: h && d || null,
    next: (x) => {
      const C = w(x);
      if (h)
        a.done = x >= d;
      else {
        let M = 0;
        g < 1 && (M = x === 0 ? en(v) : vp(w, x, C));
        const I = Math.abs(M) <= n, T = Math.abs(i - C) <= t;
        a.done = I && T;
      }
      return a.value = a.done ? i : C, a;
    }
  };
}
function Qd({ keyframes: e, velocity: t = 0, power: n = 0.8, timeConstant: r = 325, bounceDamping: o = 10, bounceStiffness: i = 500, modifyTarget: a, min: s, max: c, restDelta: u = 0.5, restSpeed: d }) {
  const f = e[0], h = {
    done: !1,
    value: f
  }, v = (k) => s !== void 0 && k < s || c !== void 0 && k > c, g = (k) => s === void 0 ? c : c === void 0 || Math.abs(s - k) < Math.abs(c - k) ? s : c;
  let p = n * t;
  const y = f + p, b = a === void 0 ? y : a(y);
  b !== y && (p = b - f);
  const w = (k) => -p * Math.exp(-k / r), x = (k) => b + w(k), C = (k) => {
    const R = w(k), j = x(k);
    h.done = Math.abs(R) <= u, h.value = h.done ? b : j;
  };
  let M, I;
  const T = (k) => {
    v(h.value) && (M = k, I = gp({
      keyframes: [h.value, g(h.value)],
      velocity: vp(x, k, h.value),
      // TODO: This should be passing * 1000
      damping: o,
      stiffness: i,
      restDelta: u,
      restSpeed: d
    }));
  };
  return T(0), {
    calculatedDuration: null,
    next: (k) => {
      let R = !1;
      return !I && M === void 0 && (R = !0, C(k), T(k)), M !== void 0 && k >= M ? I.next(k - M) : (!R && C(k), h);
    }
  };
}
const yp = (e, t, n) => (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e, WC = 1e-7, jC = 12;
function UC(e, t, n, r, o) {
  let i, a, s = 0;
  do
    a = t + (n - t) / 2, i = yp(a, r, o) - e, i > 0 ? n = a : t = a;
  while (Math.abs(i) > WC && ++s < jC);
  return a;
}
function oi(e, t, n, r) {
  if (e === t && n === r)
    return nt;
  const o = (i) => UC(i, 0, 1, e, n);
  return (i) => i === 0 || i === 1 ? i : yp(o(i), t, r);
}
const HC = /* @__PURE__ */ oi(0.42, 0, 1, 1), zC = /* @__PURE__ */ oi(0, 0, 0.58, 1), bp = /* @__PURE__ */ oi(0.42, 0, 0.58, 1), GC = (e) => Array.isArray(e) && typeof e[0] != "number", wp = (e) => (t) => t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2, xp = (e) => (t) => 1 - e(1 - t), Vc = (e) => 1 - Math.sin(Math.acos(e)), Cp = xp(Vc), YC = wp(Vc), Sp = /* @__PURE__ */ oi(0.33, 1.53, 0.69, 0.99), $c = /* @__PURE__ */ xp(Sp), KC = /* @__PURE__ */ wp($c), XC = (e) => (e *= 2) < 1 ? 0.5 * $c(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1))), Jd = {
  linear: nt,
  easeIn: HC,
  easeInOut: bp,
  easeOut: zC,
  circIn: Vc,
  circInOut: YC,
  circOut: Cp,
  backIn: $c,
  backInOut: KC,
  backOut: Sp,
  anticipate: XC
}, ef = (e) => {
  if (Array.isArray(e)) {
    Sn(e.length === 4, "Cubic bezier arrays must contain four numerical values.");
    const [t, n, r, o] = e;
    return oi(t, n, r, o);
  } else if (typeof e == "string")
    return Sn(Jd[e] !== void 0, `Invalid easing type '${e}'`), Jd[e];
  return e;
}, qC = (e, t) => (n) => t(e(n)), yn = (...e) => e.reduce(qC), Ho = (e, t, n) => {
  const r = t - e;
  return r === 0 ? 1 : (n - e) / r;
}, Ue = (e, t, n) => e + (t - e) * n;
function Os(e, t, n) {
  return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e;
}
function ZC({ hue: e, saturation: t, lightness: n, alpha: r }) {
  e /= 360, t /= 100, n /= 100;
  let o = 0, i = 0, a = 0;
  if (!t)
    o = i = a = n;
  else {
    const s = n < 0.5 ? n * (1 + t) : n + t - n * t, c = 2 * n - s;
    o = Os(c, s, e + 1 / 3), i = Os(c, s, e), a = Os(c, s, e - 1 / 3);
  }
  return {
    red: Math.round(o * 255),
    green: Math.round(i * 255),
    blue: Math.round(a * 255),
    alpha: r
  };
}
function sa(e, t) {
  return (n) => n > 0 ? t : e;
}
const Ls = (e, t, n) => {
  const r = e * e, o = n * (t * t - r) + r;
  return o < 0 ? 0 : Math.sqrt(o);
}, QC = [El, rr, kr], JC = (e) => QC.find((t) => t.test(e));
function tf(e) {
  const t = JC(e);
  if (Xr(!!t, `'${e}' is not an animatable color. Use the equivalent color code instead.`), !t)
    return !1;
  let n = t.parse(e);
  return t === kr && (n = ZC(n)), n;
}
const nf = (e, t) => {
  const n = tf(e), r = tf(t);
  if (!n || !r)
    return sa(e, t);
  const o = { ...n };
  return (i) => (o.red = Ls(n.red, r.red, i), o.green = Ls(n.green, r.green, i), o.blue = Ls(n.blue, r.blue, i), o.alpha = Ue(n.alpha, r.alpha, i), rr.transform(o));
}, Rl = /* @__PURE__ */ new Set(["none", "hidden"]);
function eS(e, t) {
  return Rl.has(e) ? (n) => n <= 0 ? e : t : (n) => n >= 1 ? t : e;
}
function tS(e, t) {
  return (n) => Ue(e, t, n);
}
function Bc(e) {
  return typeof e == "number" ? tS : typeof e == "string" ? Ac(e) ? sa : st.test(e) ? nf : oS : Array.isArray(e) ? Np : typeof e == "object" ? st.test(e) ? nf : nS : sa;
}
function Np(e, t) {
  const n = [...e], r = n.length, o = e.map((i, a) => Bc(i)(i, t[a]));
  return (i) => {
    for (let a = 0; a < r; a++)
      n[a] = o[a](i);
    return n;
  };
}
function nS(e, t) {
  const n = { ...e, ...t }, r = {};
  for (const o in n)
    e[o] !== void 0 && t[o] !== void 0 && (r[o] = Bc(e[o])(e[o], t[o]));
  return (o) => {
    for (const i in r)
      n[i] = r[i](o);
    return n;
  };
}
function rS(e, t) {
  var n;
  const r = [], o = { color: 0, var: 0, number: 0 };
  for (let i = 0; i < t.values.length; i++) {
    const a = t.types[i], s = e.indexes[a][o[a]], c = (n = e.values[s]) !== null && n !== void 0 ? n : 0;
    r[i] = c, o[a]++;
  }
  return r;
}
const oS = (e, t) => {
  const n = $n.createTransformer(t), r = Uo(e), o = Uo(t);
  return r.indexes.var.length === o.indexes.var.length && r.indexes.color.length === o.indexes.color.length && r.indexes.number.length >= o.indexes.number.length ? Rl.has(e) && !o.values.length || Rl.has(t) && !r.values.length ? eS(e, t) : yn(Np(rS(r, o), o.values), n) : (Xr(!0, `Complex values '${e}' and '${t}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`), sa(e, t));
};
function Pp(e, t, n) {
  return typeof e == "number" && typeof t == "number" && typeof n == "number" ? Ue(e, t, n) : Bc(e)(e, t);
}
function iS(e, t, n) {
  const r = [], o = n || Pp, i = e.length - 1;
  for (let a = 0; a < i; a++) {
    let s = o(e[a], e[a + 1]);
    if (t) {
      const c = Array.isArray(t) ? t[a] || nt : t;
      s = yn(c, s);
    }
    r.push(s);
  }
  return r;
}
function aS(e, t, { clamp: n = !0, ease: r, mixer: o } = {}) {
  const i = e.length;
  if (Sn(i === t.length, "Both input and output ranges must be the same length"), i === 1)
    return () => t[0];
  if (i === 2 && e[0] === e[1])
    return () => t[1];
  e[0] > e[i - 1] && (e = [...e].reverse(), t = [...t].reverse());
  const a = iS(t, r, o), s = a.length, c = (u) => {
    let d = 0;
    if (s > 1)
      for (; d < e.length - 2 && !(u < e[d + 1]); d++)
        ;
    const f = Ho(e[d], e[d + 1], u);
    return a[d](f);
  };
  return n ? (u) => c(Vn(e[0], e[i - 1], u)) : c;
}
function sS(e, t) {
  const n = e[e.length - 1];
  for (let r = 1; r <= t; r++) {
    const o = Ho(0, t, r);
    e.push(Ue(n, 1, o));
  }
}
function lS(e) {
  const t = [0];
  return sS(t, e.length - 1), t;
}
function cS(e, t) {
  return e.map((n) => n * t);
}
function uS(e, t) {
  return e.map(() => t || bp).splice(0, e.length - 1);
}
function la({ duration: e = 300, keyframes: t, times: n, ease: r = "easeInOut" }) {
  const o = GC(r) ? r.map(ef) : ef(r), i = {
    done: !1,
    value: t[0]
  }, a = cS(
    // Only use the provided offsets if they're the correct length
    // TODO Maybe we should warn here if there's a length mismatch
    n && n.length === t.length ? n : lS(t),
    e
  ), s = aS(a, t, {
    ease: Array.isArray(o) ? o : uS(t, o)
  });
  return {
    calculatedDuration: e,
    next: (c) => (i.value = s(c), i.done = c >= e, i)
  };
}
const rf = 2e4;
function dS(e) {
  let t = 0;
  const n = 50;
  let r = e.next(t);
  for (; !r.done && t < rf; )
    t += n, r = e.next(t);
  return t >= rf ? 1 / 0 : t;
}
const fS = (e) => {
  const t = ({ timestamp: n }) => e(n);
  return {
    start: () => Ee.update(t, !0),
    stop: () => Cn(t),
    /**
     * If we're processing this frame we can use the
     * framelocked timestamp to keep things in sync.
     */
    now: () => tt.isProcessing ? tt.timestamp : gn.now()
  };
}, hS = {
  decay: Qd,
  inertia: Qd,
  tween: la,
  keyframes: la,
  spring: gp
}, mS = (e) => e / 100;
class Wc extends mp {
  constructor(t) {
    super(t), this.holdTime = null, this.cancelTime = null, this.currentTime = 0, this.playbackSpeed = 1, this.pendingPlayState = "running", this.startTime = null, this.state = "idle", this.stop = () => {
      if (this.resolver.cancel(), this.isStopped = !0, this.state === "idle")
        return;
      this.teardown();
      const { onStop: c } = this.options;
      c && c();
    };
    const { name: n, motionValue: r, element: o, keyframes: i } = this.options, a = (o == null ? void 0 : o.KeyframeResolver) || Oc, s = (c, u) => this.onKeyframesResolved(c, u);
    this.resolver = new a(i, s, n, r, o), this.resolver.scheduleResolve();
  }
  initPlayback(t) {
    const { type: n = "keyframes", repeat: r = 0, repeatDelay: o = 0, repeatType: i, velocity: a = 0 } = this.options, s = hS[n] || la;
    let c, u;
    s !== la && typeof t[0] != "number" && (process.env.NODE_ENV !== "production" && Sn(t.length === 2, `Only two keyframes currently supported with spring and inertia animations. Trying to animate ${t}`), c = yn(mS, Pp(t[0], t[1])), t = [0, 100]);
    const d = s({ ...this.options, keyframes: t });
    i === "mirror" && (u = s({
      ...this.options,
      keyframes: [...t].reverse(),
      velocity: -a
    })), d.calculatedDuration === null && (d.calculatedDuration = dS(d));
    const { calculatedDuration: f } = d, h = f + o, v = h * (r + 1) - o;
    return {
      generator: d,
      mirroredGenerator: u,
      mapPercentToKeyframes: c,
      calculatedDuration: f,
      resolvedDuration: h,
      totalDuration: v
    };
  }
  onPostResolved() {
    const { autoplay: t = !0 } = this.options;
    this.play(), this.pendingPlayState === "paused" || !t ? this.pause() : this.state = this.pendingPlayState;
  }
  tick(t, n = !1) {
    const { resolved: r } = this;
    if (!r) {
      const { keyframes: k } = this.options;
      return { done: !0, value: k[k.length - 1] };
    }
    const { finalKeyframe: o, generator: i, mirroredGenerator: a, mapPercentToKeyframes: s, keyframes: c, calculatedDuration: u, totalDuration: d, resolvedDuration: f } = r;
    if (this.startTime === null)
      return i.next(0);
    const { delay: h, repeat: v, repeatType: g, repeatDelay: p, onUpdate: y } = this.options;
    this.speed > 0 ? this.startTime = Math.min(this.startTime, t) : this.speed < 0 && (this.startTime = Math.min(t - d / this.speed, this.startTime)), n ? this.currentTime = t : this.holdTime !== null ? this.currentTime = this.holdTime : this.currentTime = Math.round(t - this.startTime) * this.speed;
    const b = this.currentTime - h * (this.speed >= 0 ? 1 : -1), w = this.speed >= 0 ? b < 0 : b > d;
    this.currentTime = Math.max(b, 0), this.state === "finished" && this.holdTime === null && (this.currentTime = d);
    let x = this.currentTime, C = i;
    if (v) {
      const k = Math.min(this.currentTime, d) / f;
      let R = Math.floor(k), j = k % 1;
      !j && k >= 1 && (j = 1), j === 1 && R--, R = Math.min(R, v + 1), !!(R % 2) && (g === "reverse" ? (j = 1 - j, p && (j -= p / f)) : g === "mirror" && (C = a)), x = Vn(0, 1, j) * f;
    }
    const M = w ? { done: !1, value: c[0] } : C.next(x);
    s && (M.value = s(M.value));
    let { done: I } = M;
    !w && u !== null && (I = this.speed >= 0 ? this.currentTime >= d : this.currentTime <= 0);
    const T = this.holdTime === null && (this.state === "finished" || this.state === "running" && I);
    return T && o !== void 0 && (M.value = Fa(c, this.options, o)), y && y(M.value), T && this.finish(), M;
  }
  get duration() {
    const { resolved: t } = this;
    return t ? vn(t.calculatedDuration) : 0;
  }
  get time() {
    return vn(this.currentTime);
  }
  set time(t) {
    t = en(t), this.currentTime = t, this.holdTime !== null || this.speed === 0 ? this.holdTime = t : this.driver && (this.startTime = this.driver.now() - t / this.speed);
  }
  get speed() {
    return this.playbackSpeed;
  }
  set speed(t) {
    const n = this.playbackSpeed !== t;
    this.playbackSpeed = t, n && (this.time = vn(this.currentTime));
  }
  play() {
    if (this.resolver.isScheduled || this.resolver.resume(), !this._resolved) {
      this.pendingPlayState = "running";
      return;
    }
    if (this.isStopped)
      return;
    const { driver: t = fS, onPlay: n, startTime: r } = this.options;
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
const Mp = /* @__PURE__ */ new Set([
  "opacity",
  "clipPath",
  "filter",
  "transform"
  // TODO: Can be accelerated but currently disabled until https://issues.chromium.org/issues/41491098 is resolved
  // or until we implement support for linear() easing.
  // "background-color"
]), Ep = (e) => Array.isArray(e) && typeof e[0] == "number";
function Tp(e) {
  return !!(!e || typeof e == "string" && e in jc || Ep(e) || Array.isArray(e) && e.every(Tp));
}
const mo = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`, jc = {
  linear: "linear",
  ease: "ease",
  easeIn: "ease-in",
  easeOut: "ease-out",
  easeInOut: "ease-in-out",
  circIn: /* @__PURE__ */ mo([0, 0.65, 0.55, 1]),
  circOut: /* @__PURE__ */ mo([0.55, 0, 1, 0.45]),
  backIn: /* @__PURE__ */ mo([0.31, 0.01, 0.66, -0.59]),
  backOut: /* @__PURE__ */ mo([0.33, 1.53, 0.69, 0.99])
};
function pS(e) {
  return kp(e) || jc.easeOut;
}
function kp(e) {
  if (e)
    return Ep(e) ? mo(e) : Array.isArray(e) ? e.map(pS) : jc[e];
}
function vS(e, t, n, { delay: r = 0, duration: o = 300, repeat: i = 0, repeatType: a = "loop", ease: s, times: c } = {}) {
  const u = { [t]: n };
  c && (u.offset = c);
  const d = kp(s);
  return Array.isArray(d) && (u.easing = d), e.animate(u, {
    delay: r,
    duration: o,
    easing: Array.isArray(d) ? "linear" : d,
    fill: "both",
    iterations: i + 1,
    direction: a === "reverse" ? "alternate" : "normal"
  });
}
const gS = /* @__PURE__ */ hp(() => Object.hasOwnProperty.call(Element.prototype, "animate")), ca = 10, yS = 2e4;
function bS(e) {
  return e.type === "spring" || !Tp(e.ease);
}
function wS(e, t) {
  const n = new Wc({
    ...t,
    keyframes: e,
    repeat: 0,
    delay: 0,
    isGenerator: !0
  });
  let r = { done: !1, value: e[0] };
  const o = [];
  let i = 0;
  for (; !r.done && i < yS; )
    r = n.sample(i), o.push(r.value), i += ca;
  return {
    times: void 0,
    keyframes: o,
    duration: i - ca,
    ease: "linear"
  };
}
class of extends mp {
  constructor(t) {
    super(t);
    const { name: n, motionValue: r, element: o, keyframes: i } = this.options;
    this.resolver = new fp(i, (a, s) => this.onKeyframesResolved(a, s), n, r, o), this.resolver.scheduleResolve();
  }
  initPlayback(t, n) {
    var r;
    let { duration: o = 300, times: i, ease: a, type: s, motionValue: c, name: u, startTime: d } = this.options;
    if (!(!((r = c.owner) === null || r === void 0) && r.current))
      return !1;
    if (bS(this.options)) {
      const { onComplete: h, onUpdate: v, motionValue: g, element: p, ...y } = this.options, b = wS(t, y);
      t = b.keyframes, t.length === 1 && (t[1] = t[0]), o = b.duration, i = b.times, a = b.ease, s = "keyframes";
    }
    const f = vS(c.owner.current, u, t, { ...this.options, duration: o, times: i, ease: a });
    return f.startTime = d ?? this.calcStartTime(), this.pendingTimeline ? (f.timeline = this.pendingTimeline, this.pendingTimeline = void 0) : f.onfinish = () => {
      const { onComplete: h } = this.options;
      c.set(Fa(t, this.options, n)), h && h(), this.cancel(), this.resolveFinishedPromise();
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
    return vn(n);
  }
  get time() {
    const { resolved: t } = this;
    if (!t)
      return 0;
    const { animation: n } = t;
    return vn(n.currentTime || 0);
  }
  set time(t) {
    const { resolved: n } = this;
    if (!n)
      return;
    const { animation: r } = n;
    r.currentTime = en(t);
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
        return nt;
      const { animation: r } = n;
      r.timeline = t, r.onfinish = null;
    }
    return nt;
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
      const { motionValue: u, onUpdate: d, onComplete: f, element: h, ...v } = this.options, g = new Wc({
        ...v,
        keyframes: r,
        duration: o,
        type: i,
        ease: a,
        times: s,
        isGenerator: !0
      }), p = en(this.time);
      u.setWithVelocity(g.sample(p - ca).value, g.sample(p).value, ca);
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
    return gS() && r && Mp.has(r) && n && n.owner && n.owner.current instanceof HTMLElement && /**
     * If we're outputting values to onUpdate then we can't use WAAPI as there's
     * no way to read the value from WAAPI every frame.
     */
    !n.owner.getProps().onUpdate && !o && i !== "mirror" && a !== 0 && s !== "inertia";
  }
}
function xS(e, t) {
  let n;
  const r = () => {
    const { currentTime: o } = t, a = (o === null ? 0 : o.value) / 100;
    n !== a && e(a), n = a;
  };
  return Ee.update(r, !0), () => Cn(r);
}
const CS = hp(() => window.ScrollTimeline !== void 0);
class SS {
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
      if (CS() && r.attachTimeline)
        r.attachTimeline(t);
      else
        return r.pause(), xS((o) => {
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
const Uc = (e, t, n, r = {}, o, i, a) => (s) => {
  const c = Dc(r, e) || {}, u = c.delay || r.delay || 0;
  let { elapsed: d = 0 } = r;
  d = d - en(u);
  let f = {
    keyframes: Array.isArray(n) ? n : [null, n],
    ease: "easeOut",
    velocity: t.getVelocity(),
    ...c,
    delay: -d,
    onUpdate: (v) => {
      t.set(v), c.onUpdate && c.onUpdate(v);
    },
    onComplete: () => {
      s(), c.onComplete && c.onComplete(), a && a();
    },
    onStop: a,
    name: e,
    motionValue: t,
    element: i ? void 0 : o
  };
  zx(c) || (f = {
    ...f,
    ...Hx(e, f)
  }), f.duration && (f.duration = en(f.duration)), f.repeatDelay && (f.repeatDelay = en(f.repeatDelay)), f.from !== void 0 && (f.keyframes[0] = f.from);
  let h = !1;
  if ((f.type === !1 || f.duration === 0 && !f.repeatDelay) && (f.duration = 0, f.delay === 0 && (h = !0)), h && !i && t.get() !== void 0) {
    const v = Fa(f.keyframes, c);
    if (v !== void 0)
      return Ee.update(() => {
        f.onUpdate(v), f.onComplete();
      }), new SS([]);
  }
  return !i && of.supports(f) ? new of(f) : new Wc(f);
}, NS = (e) => !!(e && typeof e == "object" && e.mix && e.toValue), PS = (e) => Nl(e) ? e[e.length - 1] || 0 : e;
function Va(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
function $a(e, t) {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}
class Hc {
  constructor() {
    this.subscriptions = [];
  }
  add(t) {
    return Va(this.subscriptions, t), () => $a(this.subscriptions, t);
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
const af = 30, MS = (e) => !isNaN(parseFloat(e));
class Rp {
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
      const i = gn.now();
      this.updatedAt !== i && this.setPrevFrameValue(), this.prev = this.current, this.setCurrent(r), this.current !== this.prev && this.events.change && this.events.change.notify(this.current), o && this.events.renderRequest && this.events.renderRequest.notify(this.current);
    }, this.hasAnimated = !1, this.setCurrent(t), this.owner = n.owner;
  }
  setCurrent(t) {
    this.current = t, this.updatedAt = gn.now(), this.canTrackVelocity === null && t !== void 0 && (this.canTrackVelocity = MS(this.current));
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
    return process.env.NODE_ENV !== "production" && La(!1, 'value.onChange(callback) is deprecated. Switch to value.on("change", callback).'), this.on("change", t);
  }
  on(t, n) {
    this.events[t] || (this.events[t] = new Hc());
    const r = this.events[t].add(n);
    return t === "change" ? () => {
      r(), Ee.read(() => {
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
    const t = gn.now();
    if (!this.canTrackVelocity || this.prevFrameValue === void 0 || t - this.updatedAt > af)
      return 0;
    const n = Math.min(this.updatedAt - this.prevUpdatedAt, af);
    return pp(parseFloat(this.current) - parseFloat(this.prevFrameValue), n);
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
function zo(e, t) {
  return new Rp(e, t);
}
function ES(e, t, n) {
  e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, zo(n));
}
function TS(e, t) {
  const n = Ia(e, t);
  let { transitionEnd: r = {}, transition: o = {}, ...i } = n || {};
  i = { ...i, ...r };
  for (const a in i) {
    const s = PS(i[a]);
    ES(e, a, s);
  }
}
const Ba = (e) => e.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(), kS = "framerAppearId", Dp = "data-" + Ba(kS);
function Ap(e) {
  return e.props[Dp];
}
function _p(e) {
  if (Bn.has(e))
    return "transform";
  if (Mp.has(e))
    return Ba(e);
}
class RS extends Rp {
  constructor() {
    super(...arguments), this.output = [], this.counts = /* @__PURE__ */ new Map();
  }
  add(t) {
    const n = _p(t);
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
      this.counts.set(n, i), i === 0 && ($a(this.output, n), this.update());
    };
  }
  update() {
    this.set(this.output.length ? this.output.join(", ") : "auto");
  }
}
const ct = (e) => !!(e && e.getVelocity);
function DS(e) {
  return !!(ct(e) && e.add);
}
function Dl(e, t) {
  var n;
  if (!e.applyWillChange)
    return;
  let r = e.getValue("willChange");
  if (!r && !(!((n = e.props.style) === null || n === void 0) && n.willChange) && (r = new RS("auto"), e.addValue("willChange", r)), DS(r))
    return r.add(t);
}
function AS({ protectedKeys: e, needsAnimating: t }, n) {
  const r = e.hasOwnProperty(n) && t[n] !== !0;
  return t[n] = !1, r;
}
function Op(e, t, { delay: n = 0, transitionOverride: r, type: o } = {}) {
  var i;
  let { transition: a = e.getDefaultTransition(), transitionEnd: s, ...c } = t;
  r && (a = r);
  const u = [], d = o && e.animationState && e.animationState.getState()[o];
  for (const f in c) {
    const h = e.getValue(f, (i = e.latestValues[f]) !== null && i !== void 0 ? i : null), v = c[f];
    if (v === void 0 || d && AS(d, f))
      continue;
    const g = {
      delay: n,
      ...Dc(a || {}, f)
    };
    let p = !1;
    if (window.MotionHandoffAnimation) {
      const b = Ap(e);
      if (b) {
        const w = window.MotionHandoffAnimation(b, f, Ee);
        w !== null && (g.startTime = w, p = !0);
      }
    }
    h.start(Uc(f, h, v, e.shouldReduceMotion && Bn.has(f) ? { type: !1 } : g, e, p, Dl(e, f)));
    const y = h.animation;
    y && u.push(y);
  }
  return s && Promise.all(u).then(() => {
    Ee.update(() => {
      s && TS(e, s);
    });
  }), u;
}
function Al(e, t, n = {}) {
  var r;
  const o = Ia(e, t, n.type === "exit" ? (r = e.presenceContext) === null || r === void 0 ? void 0 : r.custom : void 0);
  let { transition: i = e.getDefaultTransition() || {} } = o || {};
  n.transitionOverride && (i = n.transitionOverride);
  const a = o ? () => Promise.all(Op(e, o, n)) : () => Promise.resolve(), s = e.variantChildren && e.variantChildren.size ? (u = 0) => {
    const { delayChildren: d = 0, staggerChildren: f, staggerDirection: h } = i;
    return _S(e, t, d + u, f, h, n);
  } : () => Promise.resolve(), { when: c } = i;
  if (c) {
    const [u, d] = c === "beforeChildren" ? [a, s] : [s, a];
    return u().then(() => d());
  } else
    return Promise.all([a(), s(n.delay)]);
}
function _S(e, t, n = 0, r = 0, o = 1, i) {
  const a = [], s = (e.variantChildren.size - 1) * r, c = o === 1 ? (u = 0) => u * r : (u = 0) => s - u * r;
  return Array.from(e.variantChildren).sort(OS).forEach((u, d) => {
    u.notify("AnimationStart", t), a.push(Al(u, t, {
      ...i,
      delay: n + c(d)
    }).then(() => u.notify("AnimationComplete", t)));
  }), Promise.all(a);
}
function OS(e, t) {
  return e.sortNodePosition(t);
}
function LS(e, t, n = {}) {
  e.notify("AnimationStart", t);
  let r;
  if (Array.isArray(t)) {
    const o = t.map((i) => Al(e, i, n));
    r = Promise.all(o);
  } else if (typeof t == "string")
    r = Al(e, t, n);
  else {
    const o = typeof t == "function" ? Ia(e, t, n.custom) : t;
    r = Promise.all(Op(e, o, n));
  }
  return r.then(() => {
    e.notify("AnimationComplete", t);
  });
}
const IS = [...kc].reverse(), FS = kc.length;
function VS(e) {
  return (t) => Promise.all(t.map(({ animation: n, options: r }) => LS(e, n, r)));
}
function $S(e) {
  let t = VS(e), n = sf(), r = !0;
  const o = (c) => (u, d) => {
    var f;
    const h = Ia(e, d, c === "exit" ? (f = e.presenceContext) === null || f === void 0 ? void 0 : f.custom : void 0);
    if (h) {
      const { transition: v, transitionEnd: g, ...p } = h;
      u = { ...u, ...p, ...g };
    }
    return u;
  };
  function i(c) {
    t = c(e);
  }
  function a(c) {
    const u = e.getProps(), d = e.getVariantContext(!0) || {}, f = [], h = /* @__PURE__ */ new Set();
    let v = {}, g = 1 / 0;
    for (let y = 0; y < FS; y++) {
      const b = IS[y], w = n[b], x = u[b] !== void 0 ? u[b] : d[b], C = jo(x), M = b === c ? w.isActive : null;
      M === !1 && (g = y);
      let I = x === d[b] && x !== u[b] && C;
      if (I && r && e.manuallyAnimateOnMount && (I = !1), w.protectedKeys = { ...v }, // If it isn't active and hasn't *just* been set as inactive
      !w.isActive && M === null || // If we didn't and don't have any defined prop for this animation type
      !x && !w.prevProp || // Or if the prop doesn't define an animation
      Wo(x) || typeof x == "boolean")
        continue;
      let k = BS(w.prevProp, x) || // If we're making this variant active, we want to always make it active
      b === c && w.isActive && !I && C || // If we removed a higher-priority variant (i is in reverse order)
      y > g && C, R = !1;
      const j = Array.isArray(x) ? x : [x];
      let X = j.reduce(o(b), {});
      M === !1 && (X = {});
      const { prevResolvedValues: G = {} } = w, _ = {
        ...G,
        ...X
      }, F = (V) => {
        k = !0, h.has(V) && (R = !0, h.delete(V)), w.needsAnimating[V] = !0;
        const z = e.getValue(V);
        z && (z.liveStyle = !1);
      };
      for (const V in _) {
        const z = X[V], $ = G[V];
        if (v.hasOwnProperty(V))
          continue;
        let W = !1;
        Nl(z) && Nl($) ? W = !Xm(z, $) : W = z !== $, W ? z != null ? F(V) : h.add(V) : z !== void 0 && h.has(V) ? F(V) : w.protectedKeys[V] = !0;
      }
      w.prevProp = x, w.prevResolvedValues = X, w.isActive && (v = { ...v, ...X }), r && e.blockInitialAnimation && (k = !1), k && (!I || R) && f.push(...j.map((V) => ({
        animation: V,
        options: { type: b }
      })));
    }
    if (h.size) {
      const y = {};
      h.forEach((b) => {
        const w = e.getBaseTarget(b), x = e.getValue(b);
        x && (x.liveStyle = !0), y[b] = w ?? null;
      }), f.push({ animation: y });
    }
    let p = !!f.length;
    return r && (u.initial === !1 || u.initial === u.animate) && !e.manuallyAnimateOnMount && (p = !1), r = !1, p ? t(f) : Promise.resolve();
  }
  function s(c, u) {
    var d;
    if (n[c].isActive === u)
      return Promise.resolve();
    (d = e.variantChildren) === null || d === void 0 || d.forEach((h) => {
      var v;
      return (v = h.animationState) === null || v === void 0 ? void 0 : v.setActive(c, u);
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
      n = sf(), r = !0;
    }
  };
}
function BS(e, t) {
  return typeof t == "string" ? t !== e : Array.isArray(t) ? !Xm(t, e) : !1;
}
function Gn(e = !1) {
  return {
    isActive: e,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {}
  };
}
function sf() {
  return {
    animate: Gn(!0),
    whileInView: Gn(),
    whileHover: Gn(),
    whileTap: Gn(),
    whileDrag: Gn(),
    whileFocus: Gn(),
    exit: Gn()
  };
}
class Wn {
  constructor(t) {
    this.isMounted = !1, this.node = t;
  }
  update() {
  }
}
class WS extends Wn {
  /**
   * We dynamically generate the AnimationState manager as it contains a reference
   * to the underlying animation library. We only want to load that if we load this,
   * so people can optionally code split it out using the `m` component.
   */
  constructor(t) {
    super(t), t.animationState || (t.animationState = $S(t));
  }
  updateAnimationControlsSubscription() {
    const { animate: t } = this.node.getProps();
    Wo(t) && (this.unmountControls = t.subscribe(this.node));
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
let jS = 0;
class US extends Wn {
  constructor() {
    super(...arguments), this.id = jS++;
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
const HS = {
  animation: {
    Feature: WS
  },
  exit: {
    Feature: US
  }
}, Lp = (e) => e.pointerType === "mouse" ? typeof e.button != "number" || e.button <= 0 : e.isPrimary !== !1;
function Wa(e, t = "page") {
  return {
    point: {
      x: e[`${t}X`],
      y: e[`${t}Y`]
    }
  };
}
const zS = (e) => (t) => Lp(t) && e(t, Wa(t));
function mn(e, t, n, r = { passive: !0 }) {
  return e.addEventListener(t, n, r), () => e.removeEventListener(t, n);
}
function bn(e, t, n, r) {
  return mn(e, t, zS(n), r);
}
const lf = (e, t) => Math.abs(e - t);
function GS(e, t) {
  const n = lf(e.x, t.x), r = lf(e.y, t.y);
  return Math.sqrt(n ** 2 + r ** 2);
}
class Ip {
  constructor(t, n, { transformPagePoint: r, contextWindow: o, dragSnapToOrigin: i = !1 } = {}) {
    if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.contextWindow = window, this.updatePoint = () => {
      if (!(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const f = Fs(this.lastMoveEventInfo, this.history), h = this.startEvent !== null, v = GS(f.offset, { x: 0, y: 0 }) >= 3;
      if (!h && !v)
        return;
      const { point: g } = f, { timestamp: p } = tt;
      this.history.push({ ...g, timestamp: p });
      const { onStart: y, onMove: b } = this.handlers;
      h || (y && y(this.lastMoveEvent, f), this.startEvent = this.lastMoveEvent), b && b(this.lastMoveEvent, f);
    }, this.handlePointerMove = (f, h) => {
      this.lastMoveEvent = f, this.lastMoveEventInfo = Is(h, this.transformPagePoint), Ee.update(this.updatePoint, !0);
    }, this.handlePointerUp = (f, h) => {
      this.end();
      const { onEnd: v, onSessionEnd: g, resumeAnimation: p } = this.handlers;
      if (this.dragSnapToOrigin && p && p(), !(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const y = Fs(f.type === "pointercancel" ? this.lastMoveEventInfo : Is(h, this.transformPagePoint), this.history);
      this.startEvent && v && v(f, y), g && g(f, y);
    }, !Lp(t))
      return;
    this.dragSnapToOrigin = i, this.handlers = n, this.transformPagePoint = r, this.contextWindow = o || window;
    const a = Wa(t), s = Is(a, this.transformPagePoint), { point: c } = s, { timestamp: u } = tt;
    this.history = [{ ...c, timestamp: u }];
    const { onSessionStart: d } = n;
    d && d(t, Fs(s, this.history)), this.removeListeners = yn(bn(this.contextWindow, "pointermove", this.handlePointerMove), bn(this.contextWindow, "pointerup", this.handlePointerUp), bn(this.contextWindow, "pointercancel", this.handlePointerUp));
  }
  updateHandlers(t) {
    this.handlers = t;
  }
  end() {
    this.removeListeners && this.removeListeners(), Cn(this.updatePoint);
  }
}
function Is(e, t) {
  return t ? { point: t(e.point) } : e;
}
function cf(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function Fs({ point: e }, t) {
  return {
    point: e,
    delta: cf(e, Fp(t)),
    offset: cf(e, YS(t)),
    velocity: KS(t, 0.1)
  };
}
function YS(e) {
  return e[0];
}
function Fp(e) {
  return e[e.length - 1];
}
function KS(e, t) {
  if (e.length < 2)
    return { x: 0, y: 0 };
  let n = e.length - 1, r = null;
  const o = Fp(e);
  for (; n >= 0 && (r = e[n], !(o.timestamp - r.timestamp > en(t))); )
    n--;
  if (!r)
    return { x: 0, y: 0 };
  const i = vn(o.timestamp - r.timestamp);
  if (i === 0)
    return { x: 0, y: 0 };
  const a = {
    x: (o.x - r.x) / i,
    y: (o.y - r.y) / i
  };
  return a.x === 1 / 0 && (a.x = 0), a.y === 1 / 0 && (a.y = 0), a;
}
function Vp(e) {
  let t = null;
  return () => {
    const n = () => {
      t = null;
    };
    return t === null ? (t = e, n) : !1;
  };
}
const uf = Vp("dragHorizontal"), df = Vp("dragVertical");
function $p(e) {
  let t = !1;
  if (e === "y")
    t = df();
  else if (e === "x")
    t = uf();
  else {
    const n = uf(), r = df();
    n && r ? t = () => {
      n(), r();
    } : (n && n(), r && r());
  }
  return t;
}
function Bp() {
  const e = $p(!0);
  return e ? (e(), !1) : !0;
}
function Rr(e) {
  return e && typeof e == "object" && Object.prototype.hasOwnProperty.call(e, "current");
}
const Wp = 1e-4, XS = 1 - Wp, qS = 1 + Wp, jp = 0.01, ZS = 0 - jp, QS = 0 + jp;
function Tt(e) {
  return e.max - e.min;
}
function JS(e, t, n) {
  return Math.abs(e - t) <= n;
}
function ff(e, t, n, r = 0.5) {
  e.origin = r, e.originPoint = Ue(t.min, t.max, e.origin), e.scale = Tt(n) / Tt(t), e.translate = Ue(n.min, n.max, e.origin) - e.originPoint, (e.scale >= XS && e.scale <= qS || isNaN(e.scale)) && (e.scale = 1), (e.translate >= ZS && e.translate <= QS || isNaN(e.translate)) && (e.translate = 0);
}
function ko(e, t, n, r) {
  ff(e.x, t.x, n.x, r ? r.originX : void 0), ff(e.y, t.y, n.y, r ? r.originY : void 0);
}
function hf(e, t, n) {
  e.min = n.min + t.min, e.max = e.min + Tt(t);
}
function eN(e, t, n) {
  hf(e.x, t.x, n.x), hf(e.y, t.y, n.y);
}
function mf(e, t, n) {
  e.min = t.min - n.min, e.max = e.min + Tt(t);
}
function Ro(e, t, n) {
  mf(e.x, t.x, n.x), mf(e.y, t.y, n.y);
}
function tN(e, { min: t, max: n }, r) {
  return t !== void 0 && e < t ? e = r ? Ue(t, e, r.min) : Math.max(e, t) : n !== void 0 && e > n && (e = r ? Ue(n, e, r.max) : Math.min(e, n)), e;
}
function pf(e, t, n) {
  return {
    min: t !== void 0 ? e.min + t : void 0,
    max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0
  };
}
function nN(e, { top: t, left: n, bottom: r, right: o }) {
  return {
    x: pf(e.x, n, o),
    y: pf(e.y, t, r)
  };
}
function vf(e, t) {
  let n = t.min - e.min, r = t.max - e.max;
  return t.max - t.min < e.max - e.min && ([n, r] = [r, n]), { min: n, max: r };
}
function rN(e, t) {
  return {
    x: vf(e.x, t.x),
    y: vf(e.y, t.y)
  };
}
function oN(e, t) {
  let n = 0.5;
  const r = Tt(e), o = Tt(t);
  return o > r ? n = Ho(t.min, t.max - r, e.min) : r > o && (n = Ho(e.min, e.max - o, t.min)), Vn(0, 1, n);
}
function iN(e, t) {
  const n = {};
  return t.min !== void 0 && (n.min = t.min - e.min), t.max !== void 0 && (n.max = t.max - e.min), n;
}
const _l = 0.35;
function aN(e = _l) {
  return e === !1 ? e = 0 : e === !0 && (e = _l), {
    x: gf(e, "left", "right"),
    y: gf(e, "top", "bottom")
  };
}
function gf(e, t, n) {
  return {
    min: yf(e, t),
    max: yf(e, n)
  };
}
function yf(e, t) {
  return typeof e == "number" ? e : e[t] || 0;
}
const bf = () => ({
  translate: 0,
  scale: 1,
  origin: 0,
  originPoint: 0
}), Dr = () => ({
  x: bf(),
  y: bf()
}), wf = () => ({ min: 0, max: 0 }), Ke = () => ({
  x: wf(),
  y: wf()
});
function At(e) {
  return [e("x"), e("y")];
}
function Up({ top: e, left: t, right: n, bottom: r }) {
  return {
    x: { min: t, max: n },
    y: { min: e, max: r }
  };
}
function sN({ x: e, y: t }) {
  return { top: t.min, right: e.max, bottom: t.max, left: e.min };
}
function lN(e, t) {
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
function Vs(e) {
  return e === void 0 || e === 1;
}
function Ol({ scale: e, scaleX: t, scaleY: n }) {
  return !Vs(e) || !Vs(t) || !Vs(n);
}
function Xn(e) {
  return Ol(e) || Hp(e) || e.z || e.rotate || e.rotateX || e.rotateY || e.skewX || e.skewY;
}
function Hp(e) {
  return xf(e.x) || xf(e.y);
}
function xf(e) {
  return e && e !== "0%";
}
function ua(e, t, n) {
  const r = e - n, o = t * r;
  return n + o;
}
function Cf(e, t, n, r, o) {
  return o !== void 0 && (e = ua(e, o, r)), ua(e, n, r) + t;
}
function Ll(e, t = 0, n = 1, r, o) {
  e.min = Cf(e.min, t, n, r, o), e.max = Cf(e.max, t, n, r, o);
}
function zp(e, { x: t, y: n }) {
  Ll(e.x, t.translate, t.scale, t.originPoint), Ll(e.y, n.translate, n.scale, n.originPoint);
}
const Sf = 0.999999999999, Nf = 1.0000000000001;
function cN(e, t, n, r = !1) {
  const o = n.length;
  if (!o)
    return;
  t.x = t.y = 1;
  let i, a;
  for (let s = 0; s < o; s++) {
    i = n[s], a = i.projectionDelta;
    const { visualElement: c } = i.options;
    c && c.props.style && c.props.style.display === "contents" || (r && i.options.layoutScroll && i.scroll && i !== i.root && _r(e, {
      x: -i.scroll.offset.x,
      y: -i.scroll.offset.y
    }), a && (t.x *= a.x.scale, t.y *= a.y.scale, zp(e, a)), r && Xn(i.latestValues) && _r(e, i.latestValues));
  }
  t.x < Nf && t.x > Sf && (t.x = 1), t.y < Nf && t.y > Sf && (t.y = 1);
}
function Ar(e, t) {
  e.min = e.min + t, e.max = e.max + t;
}
function Pf(e, t, n, r, o = 0.5) {
  const i = Ue(e.min, e.max, o);
  Ll(e, t, n, i, r);
}
function _r(e, t) {
  Pf(e.x, t.x, t.scaleX, t.scale, t.originX), Pf(e.y, t.y, t.scaleY, t.scale, t.originY);
}
function Gp(e, t) {
  return Up(lN(e.getBoundingClientRect(), t));
}
function uN(e, t, n) {
  const r = Gp(e, n), { scroll: o } = t;
  return o && (Ar(r.x, o.offset.x), Ar(r.y, o.offset.y)), r;
}
const Yp = ({ current: e }) => e ? e.ownerDocument.defaultView : null, dN = /* @__PURE__ */ new WeakMap();
class fN {
  constructor(t) {
    this.openGlobalLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = { x: 0, y: 0 }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = Ke(), this.visualElement = t;
  }
  start(t, { snapToCursor: n = !1 } = {}) {
    const { presenceContext: r } = this.visualElement;
    if (r && r.isPresent === !1)
      return;
    const o = (d) => {
      const { dragSnapToOrigin: f } = this.getProps();
      f ? this.pauseAnimation() : this.stopAnimation(), n && this.snapToCursor(Wa(d, "page").point);
    }, i = (d, f) => {
      var h;
      const { drag: v, dragPropagation: g, onDragStart: p } = this.getProps();
      if (v && !g && (this.openGlobalLock && this.openGlobalLock(), this.openGlobalLock = $p(v), !this.openGlobalLock))
        return;
      this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), At((b) => {
        let w = this.getAxisMotionValue(b).get() || 0;
        if (tn.test(w)) {
          const { projection: x } = this.visualElement;
          if (x && x.layout) {
            const C = x.layout.layoutBox[b];
            C && (w = Tt(C) * (parseFloat(w) / 100));
          }
        }
        this.originPoint[b] = w;
      }), p && Ee.postRender(() => p(d, f)), (h = this.removeWillChange) === null || h === void 0 || h.call(this), this.removeWillChange = Dl(this.visualElement, "transform");
      const { animationState: y } = this.visualElement;
      y && y.setActive("whileDrag", !0);
    }, a = (d, f) => {
      const { dragPropagation: h, dragDirectionLock: v, onDirectionLock: g, onDrag: p } = this.getProps();
      if (!h && !this.openGlobalLock)
        return;
      const { offset: y } = f;
      if (v && this.currentDirection === null) {
        this.currentDirection = hN(y), this.currentDirection !== null && g && g(this.currentDirection);
        return;
      }
      this.updateAxis("x", f.point, y), this.updateAxis("y", f.point, y), this.visualElement.render(), p && p(d, f);
    }, s = (d, f) => this.stop(d, f), c = () => At((d) => {
      var f;
      return this.getAnimationState(d) === "paused" && ((f = this.getAxisMotionValue(d).animation) === null || f === void 0 ? void 0 : f.play());
    }), { dragSnapToOrigin: u } = this.getProps();
    this.panSession = new Ip(t, {
      onSessionStart: o,
      onStart: i,
      onMove: a,
      onSessionEnd: s,
      resumeAnimation: c
    }, {
      transformPagePoint: this.visualElement.getTransformPagePoint(),
      dragSnapToOrigin: u,
      contextWindow: Yp(this.visualElement)
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
    a && Ee.postRender(() => a(t, n));
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
    if (!r || !Pi(t, o, this.currentDirection))
      return;
    const i = this.getAxisMotionValue(t);
    let a = this.originPoint[t] + r[t];
    this.constraints && this.constraints[t] && (a = tN(a, this.constraints[t], this.elastic[t])), i.set(a);
  }
  resolveConstraints() {
    var t;
    const { dragConstraints: n, dragElastic: r } = this.getProps(), o = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : (t = this.visualElement.projection) === null || t === void 0 ? void 0 : t.layout, i = this.constraints;
    n && Rr(n) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : n && o ? this.constraints = nN(o.layoutBox, n) : this.constraints = !1, this.elastic = aN(r), i !== this.constraints && o && this.constraints && !this.hasMutatedConstraints && At((a) => {
      this.constraints !== !1 && this.getAxisMotionValue(a) && (this.constraints[a] = iN(o.layoutBox[a], this.constraints[a]));
    });
  }
  resolveRefConstraints() {
    const { dragConstraints: t, onMeasureDragConstraints: n } = this.getProps();
    if (!t || !Rr(t))
      return !1;
    const r = t.current;
    Sn(r !== null, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.");
    const { projection: o } = this.visualElement;
    if (!o || !o.layout)
      return !1;
    const i = uN(r, o.root, this.visualElement.getTransformPagePoint());
    let a = rN(o.layout.layoutBox, i);
    if (n) {
      const s = n(sN(a));
      this.hasMutatedConstraints = !!s, s && (a = Up(s));
    }
    return a;
  }
  startAnimation(t) {
    const { drag: n, dragMomentum: r, dragElastic: o, dragTransition: i, dragSnapToOrigin: a, onDragTransitionEnd: s } = this.getProps(), c = this.constraints || {}, u = At((d) => {
      if (!Pi(d, n, this.currentDirection))
        return;
      let f = c && c[d] || {};
      a && (f = { min: 0, max: 0 });
      const h = o ? 200 : 1e6, v = o ? 40 : 1e7, g = {
        type: "inertia",
        velocity: r ? t[d] : 0,
        bounceStiffness: h,
        bounceDamping: v,
        timeConstant: 750,
        restDelta: 1,
        restSpeed: 10,
        ...i,
        ...f
      };
      return this.startAxisValueAnimation(d, g);
    });
    return Promise.all(u).then(s);
  }
  startAxisValueAnimation(t, n) {
    const r = this.getAxisMotionValue(t);
    return r.start(Uc(t, r, 0, n, this.visualElement, !1, Dl(this.visualElement, t)));
  }
  stopAnimation() {
    At((t) => this.getAxisMotionValue(t).stop());
  }
  pauseAnimation() {
    At((t) => {
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
    At((n) => {
      const { drag: r } = this.getProps();
      if (!Pi(n, r, this.currentDirection))
        return;
      const { projection: o } = this.visualElement, i = this.getAxisMotionValue(n);
      if (o && o.layout) {
        const { min: a, max: s } = o.layout.layoutBox[n];
        i.set(t[n] - Ue(a, s, 0.5));
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
    if (!Rr(n) || !r || !this.constraints)
      return;
    this.stopAnimation();
    const o = { x: 0, y: 0 };
    At((a) => {
      const s = this.getAxisMotionValue(a);
      if (s && this.constraints !== !1) {
        const c = s.get();
        o[a] = oN({ min: c, max: c }, this.constraints[a]);
      }
    });
    const { transformTemplate: i } = this.visualElement.getProps();
    this.visualElement.current.style.transform = i ? i({}, "") : "none", r.root && r.root.updateScroll(), r.updateLayout(), this.resolveConstraints(), At((a) => {
      if (!Pi(a, t, null))
        return;
      const s = this.getAxisMotionValue(a), { min: c, max: u } = this.constraints[a];
      s.set(Ue(c, u, o[a]));
    });
  }
  addListeners() {
    if (!this.visualElement.current)
      return;
    dN.set(this.visualElement, this);
    const t = this.visualElement.current, n = bn(t, "pointerdown", (c) => {
      const { drag: u, dragListener: d = !0 } = this.getProps();
      u && d && this.start(c);
    }), r = () => {
      const { dragConstraints: c } = this.getProps();
      Rr(c) && c.current && (this.constraints = this.resolveRefConstraints());
    }, { projection: o } = this.visualElement, i = o.addEventListener("measure", r);
    o && !o.layout && (o.root && o.root.updateScroll(), o.updateLayout()), Ee.read(r);
    const a = mn(window, "resize", () => this.scalePositionWithinConstraints()), s = o.addEventListener("didUpdate", ({ delta: c, hasLayoutChanged: u }) => {
      this.isDragging && u && (At((d) => {
        const f = this.getAxisMotionValue(d);
        f && (this.originPoint[d] += c[d].translate, f.set(f.get() + c[d].translate));
      }), this.visualElement.render());
    });
    return () => {
      a(), n(), i(), s && s();
    };
  }
  getProps() {
    const t = this.visualElement.getProps(), { drag: n = !1, dragDirectionLock: r = !1, dragPropagation: o = !1, dragConstraints: i = !1, dragElastic: a = _l, dragMomentum: s = !0 } = t;
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
function Pi(e, t, n) {
  return (t === !0 || t === e) && (n === null || n === e);
}
function hN(e, t = 10) {
  let n = null;
  return Math.abs(e.y) > t ? n = "y" : Math.abs(e.x) > t && (n = "x"), n;
}
class mN extends Wn {
  constructor(t) {
    super(t), this.removeGroupControls = nt, this.removeListeners = nt, this.controls = new fN(t);
  }
  mount() {
    const { dragControls: t } = this.node.getProps();
    t && (this.removeGroupControls = t.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || nt;
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners();
  }
}
const Mf = (e) => (t, n) => {
  e && Ee.postRender(() => e(t, n));
};
class pN extends Wn {
  constructor() {
    super(...arguments), this.removePointerDownListener = nt;
  }
  onPointerDown(t) {
    this.session = new Ip(t, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: Yp(this.node)
    });
  }
  createPanHandlers() {
    const { onPanSessionStart: t, onPanStart: n, onPan: r, onPanEnd: o } = this.node.getProps();
    return {
      onSessionStart: Mf(t),
      onStart: Mf(n),
      onMove: r,
      onEnd: (i, a) => {
        delete this.session, o && Ee.postRender(() => o(i, a));
      }
    };
  }
  mount() {
    this.removePointerDownListener = bn(this.node.current, "pointerdown", (t) => this.onPointerDown(t));
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener(), this.session && this.session.end();
  }
}
const ja = St(null);
function vN() {
  const e = Oe(ja);
  if (e === null)
    return [!0, null];
  const { isPresent: t, onExitComplete: n, register: r } = e, o = Aa();
  We(() => r(o), []);
  const i = zt(() => n && n(o), [o, n]);
  return !t && n ? [!1, i] : [!0];
}
const Go = St({}), Kp = St({}), Ui = {
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
function Ef(e, t) {
  return t.max === t.min ? 0 : e / (t.max - t.min) * 100;
}
const ao = {
  correct: (e, t) => {
    if (!t.target)
      return e;
    if (typeof e == "string")
      if (me.test(e))
        e = parseFloat(e);
      else
        return e;
    const n = Ef(e, t.target.x), r = Ef(e, t.target.y);
    return `${n}% ${r}%`;
  }
}, gN = {
  correct: (e, { treeScale: t, projectionDelta: n }) => {
    const r = e, o = $n.parse(e);
    if (o.length > 5)
      return r;
    const i = $n.createTransformer(e), a = typeof o[0] != "number" ? 1 : 0, s = n.x.scale * t.x, c = n.y.scale * t.y;
    o[0 + a] /= s, o[1 + a] /= c;
    const u = Ue(s, c, 0.5);
    return typeof o[2 + a] == "number" && (o[2 + a] /= u), typeof o[3 + a] == "number" && (o[3 + a] /= u), i(o);
  }
}, da = {};
function yN(e) {
  Object.assign(da, e);
}
const { schedule: zc, cancel: aI } = qm(queueMicrotask, !1);
class bN extends dx {
  /**
   * This only mounts projection nodes for components that
   * need measuring, we might want to do it for all components
   * in order to incorporate transforms
   */
  componentDidMount() {
    const { visualElement: t, layoutGroup: n, switchLayoutGroup: r, layoutId: o } = this.props, { projection: i } = t;
    yN(wN), i && (n.group && n.group.add(i), r && r.register && o && r.register(i), i.root.didUpdate(), i.addEventListener("animationComplete", () => {
      this.safeToRemove();
    }), i.setOptions({
      ...i.options,
      onExitComplete: () => this.safeToRemove()
    })), Ui.hasEverUpdated = !0;
  }
  getSnapshotBeforeUpdate(t) {
    const { layoutDependency: n, visualElement: r, drag: o, isPresent: i } = this.props, a = r.projection;
    return a && (a.isPresent = i, o || t.layoutDependency !== n || n === void 0 ? a.willUpdate() : this.safeToRemove(), t.isPresent !== i && (i ? a.promote() : a.relegate() || Ee.postRender(() => {
      const s = a.getStack();
      (!s || !s.members.length) && this.safeToRemove();
    }))), null;
  }
  componentDidUpdate() {
    const { projection: t } = this.props.visualElement;
    t && (t.root.didUpdate(), zc.postRender(() => {
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
function Xp(e) {
  const [t, n] = vN(), r = Oe(Go);
  return l(bN, { ...e, layoutGroup: r, switchLayoutGroup: Oe(Kp), isPresent: t, safeToRemove: n });
}
const wN = {
  borderRadius: {
    ...ao,
    applyTo: [
      "borderTopLeftRadius",
      "borderTopRightRadius",
      "borderBottomLeftRadius",
      "borderBottomRightRadius"
    ]
  },
  borderTopLeftRadius: ao,
  borderTopRightRadius: ao,
  borderBottomLeftRadius: ao,
  borderBottomRightRadius: ao,
  boxShadow: gN
}, qp = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"], xN = qp.length, Tf = (e) => typeof e == "string" ? parseFloat(e) : e, kf = (e) => typeof e == "number" || me.test(e);
function CN(e, t, n, r, o, i) {
  o ? (e.opacity = Ue(
    0,
    // TODO Reinstate this if only child
    n.opacity !== void 0 ? n.opacity : 1,
    SN(r)
  ), e.opacityExit = Ue(t.opacity !== void 0 ? t.opacity : 1, 0, NN(r))) : i && (e.opacity = Ue(t.opacity !== void 0 ? t.opacity : 1, n.opacity !== void 0 ? n.opacity : 1, r));
  for (let a = 0; a < xN; a++) {
    const s = `border${qp[a]}Radius`;
    let c = Rf(t, s), u = Rf(n, s);
    if (c === void 0 && u === void 0)
      continue;
    c || (c = 0), u || (u = 0), c === 0 || u === 0 || kf(c) === kf(u) ? (e[s] = Math.max(Ue(Tf(c), Tf(u), r), 0), (tn.test(u) || tn.test(c)) && (e[s] += "%")) : e[s] = u;
  }
  (t.rotate || n.rotate) && (e.rotate = Ue(t.rotate || 0, n.rotate || 0, r));
}
function Rf(e, t) {
  return e[t] !== void 0 ? e[t] : e.borderRadius;
}
const SN = /* @__PURE__ */ Zp(0, 0.5, Cp), NN = /* @__PURE__ */ Zp(0.5, 0.95, nt);
function Zp(e, t, n) {
  return (r) => r < e ? 0 : r > t ? 1 : n(Ho(e, t, r));
}
function Df(e, t) {
  e.min = t.min, e.max = t.max;
}
function Dt(e, t) {
  Df(e.x, t.x), Df(e.y, t.y);
}
function Af(e, t) {
  e.translate = t.translate, e.scale = t.scale, e.originPoint = t.originPoint, e.origin = t.origin;
}
function _f(e, t, n, r, o) {
  return e -= t, e = ua(e, 1 / n, r), o !== void 0 && (e = ua(e, 1 / o, r)), e;
}
function PN(e, t = 0, n = 1, r = 0.5, o, i = e, a = e) {
  if (tn.test(t) && (t = parseFloat(t), t = Ue(a.min, a.max, t / 100) - a.min), typeof t != "number")
    return;
  let s = Ue(i.min, i.max, r);
  e === i && (s -= t), e.min = _f(e.min, t, n, s, o), e.max = _f(e.max, t, n, s, o);
}
function Of(e, t, [n, r, o], i, a) {
  PN(e, t[n], t[r], t[o], t.scale, i, a);
}
const MN = ["x", "scaleX", "originX"], EN = ["y", "scaleY", "originY"];
function Lf(e, t, n, r) {
  Of(e.x, t, MN, n ? n.x : void 0, r ? r.x : void 0), Of(e.y, t, EN, n ? n.y : void 0, r ? r.y : void 0);
}
function If(e) {
  return e.translate === 0 && e.scale === 1;
}
function Qp(e) {
  return If(e.x) && If(e.y);
}
function Ff(e, t) {
  return e.min === t.min && e.max === t.max;
}
function TN(e, t) {
  return Ff(e.x, t.x) && Ff(e.y, t.y);
}
function Vf(e, t) {
  return Math.round(e.min) === Math.round(t.min) && Math.round(e.max) === Math.round(t.max);
}
function Jp(e, t) {
  return Vf(e.x, t.x) && Vf(e.y, t.y);
}
function $f(e) {
  return Tt(e.x) / Tt(e.y);
}
function Bf(e, t) {
  return e.translate === t.translate && e.scale === t.scale && e.originPoint === t.originPoint;
}
class kN {
  constructor() {
    this.members = [];
  }
  add(t) {
    Va(this.members, t), t.scheduleRender();
  }
  remove(t) {
    if ($a(this.members, t), t === this.prevLead && (this.prevLead = void 0), t === this.lead) {
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
function RN(e, t, n) {
  let r = "";
  const o = e.x.translate / t.x, i = e.y.translate / t.y, a = (n == null ? void 0 : n.z) || 0;
  if ((o || i || a) && (r = `translate3d(${o}px, ${i}px, ${a}px) `), (t.x !== 1 || t.y !== 1) && (r += `scale(${1 / t.x}, ${1 / t.y}) `), n) {
    const { transformPerspective: u, rotate: d, rotateX: f, rotateY: h, skewX: v, skewY: g } = n;
    u && (r = `perspective(${u}px) ${r}`), d && (r += `rotate(${d}deg) `), f && (r += `rotateX(${f}deg) `), h && (r += `rotateY(${h}deg) `), v && (r += `skewX(${v}deg) `), g && (r += `skewY(${g}deg) `);
  }
  const s = e.x.scale * t.x, c = e.y.scale * t.y;
  return (s !== 1 || c !== 1) && (r += `scale(${s}, ${c})`), r || "none";
}
const DN = (e, t) => e.depth - t.depth;
class AN {
  constructor() {
    this.children = [], this.isDirty = !1;
  }
  add(t) {
    Va(this.children, t), this.isDirty = !0;
  }
  remove(t) {
    $a(this.children, t), this.isDirty = !0;
  }
  forEach(t) {
    this.isDirty && this.children.sort(DN), this.isDirty = !1, this.children.forEach(t);
  }
}
function Hi(e) {
  const t = ct(e) ? e.get() : e;
  return NS(t) ? t.toValue() : t;
}
function _N(e, t) {
  const n = gn.now(), r = ({ timestamp: o }) => {
    const i = o - n;
    i >= t && (Cn(r), e(i - t));
  };
  return Ee.read(r, !0), () => Cn(r);
}
function ON(e) {
  return e instanceof SVGElement && e.tagName !== "svg";
}
function LN(e, t, n) {
  const r = ct(e) ? e : zo(e);
  return r.start(Uc("", r, t, n)), r.animation;
}
const qn = {
  type: "projectionFrame",
  totalNodes: 0,
  resolvedTargetDeltas: 0,
  recalculatedProjection: 0
}, po = typeof window < "u" && window.MotionDebug !== void 0, $s = ["", "X", "Y", "Z"], IN = { visibility: "hidden" }, Wf = 1e3;
let FN = 0;
function Bs(e, t, n, r) {
  const { latestValues: o } = t;
  o[e] && (n[e] = o[e], t.setStaticValue(e, 0), r && (r[e] = 0));
}
function ev(e) {
  if (e.hasCheckedOptimisedAppear = !0, e.root === e)
    return;
  const { visualElement: t } = e.options;
  if (!t)
    return;
  const n = Ap(t);
  if (window.MotionHasOptimisedAnimation(n, "transform")) {
    const { layout: o, layoutId: i } = e.options;
    window.MotionCancelOptimisedAnimation(n, "transform", Ee, !(o || i));
  }
  const { parent: r } = e;
  r && !r.hasCheckedOptimisedAppear && ev(r);
}
function tv({ attachResizeListener: e, defaultParent: t, measureScroll: n, checkIsScrollRoot: r, resetTransform: o }) {
  return class {
    constructor(a = {}, s = t == null ? void 0 : t()) {
      this.id = FN++, this.animationId = 0, this.children = /* @__PURE__ */ new Set(), this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.hasCheckedOptimisedAppear = !1, this.treeScale = { x: 1, y: 1 }, this.eventHandlers = /* @__PURE__ */ new Map(), this.hasTreeAnimated = !1, this.updateScheduled = !1, this.scheduleUpdate = () => this.update(), this.projectionUpdateScheduled = !1, this.checkUpdateFailed = () => {
        this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots());
      }, this.updateProjection = () => {
        this.projectionUpdateScheduled = !1, po && (qn.totalNodes = qn.resolvedTargetDeltas = qn.recalculatedProjection = 0), this.nodes.forEach(BN), this.nodes.forEach(zN), this.nodes.forEach(GN), this.nodes.forEach(WN), po && window.MotionDebug.record(qn);
      }, this.resolvedRelativeTargetAt = 0, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = /* @__PURE__ */ new Map(), this.latestValues = a, this.root = s ? s.root || s : this, this.path = s ? [...s.path, s] : [], this.parent = s, this.depth = s ? s.depth + 1 : 0;
      for (let c = 0; c < this.path.length; c++)
        this.path[c].shouldResetTransform = !0;
      this.root === this && (this.nodes = new AN());
    }
    addEventListener(a, s) {
      return this.eventHandlers.has(a) || this.eventHandlers.set(a, new Hc()), this.eventHandlers.get(a).add(s);
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
      this.isSVG = ON(a), this.instance = a;
      const { layoutId: c, layout: u, visualElement: d } = this.options;
      if (d && !d.current && d.mount(a), this.root.nodes.add(this), this.parent && this.parent.children.add(this), s && (u || c) && (this.isLayoutDirty = !0), e) {
        let f;
        const h = () => this.root.updateBlockedByResize = !1;
        e(a, () => {
          this.root.updateBlockedByResize = !0, f && f(), f = _N(h, 250), Ui.hasAnimatedSinceResize && (Ui.hasAnimatedSinceResize = !1, this.nodes.forEach(Uf));
        });
      }
      c && this.root.registerSharedNode(c, this), this.options.animate !== !1 && d && (c || u) && this.addEventListener("didUpdate", ({ delta: f, hasLayoutChanged: h, hasRelativeTargetChanged: v, layout: g }) => {
        if (this.isTreeAnimationBlocked()) {
          this.target = void 0, this.relativeTarget = void 0;
          return;
        }
        const p = this.options.transition || d.getDefaultTransition() || ZN, { onLayoutAnimationStart: y, onLayoutAnimationComplete: b } = d.getProps(), w = !this.targetLayout || !Jp(this.targetLayout, g) || v, x = !h && v;
        if (this.options.layoutRoot || this.resumeFrom && this.resumeFrom.instance || x || h && (w || !this.currentAnimation)) {
          this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0), this.setAnimationOrigin(f, x);
          const C = {
            ...Dc(p, "layout"),
            onPlay: y,
            onComplete: b
          };
          (d.shouldReduceMotion || this.options.layoutRoot) && (C.delay = 0, C.type = !1), this.startAnimation(C);
        } else
          h || Uf(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
        this.targetLayout = g;
      });
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      const a = this.getStack();
      a && a.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, Cn(this.updateProjection);
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
      this.isUpdateBlocked() || (this.isUpdating = !0, this.nodes && this.nodes.forEach(YN), this.animationId++);
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
      if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && ev(this), !this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty)
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
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(jf);
        return;
      }
      this.isUpdating || this.nodes.forEach(UN), this.isUpdating = !1, this.nodes.forEach(HN), this.nodes.forEach(VN), this.nodes.forEach($N), this.clearAllSnapshots();
      const s = gn.now();
      tt.delta = Vn(0, 1e3 / 60, s - tt.timestamp), tt.timestamp = s, tt.isProcessing = !0, Ds.update.process(tt), Ds.preRender.process(tt), Ds.render.process(tt), tt.isProcessing = !1;
    }
    didUpdate() {
      this.updateScheduled || (this.updateScheduled = !0, zc.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      this.nodes.forEach(jN), this.sharedNodes.forEach(KN);
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0, Ee.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      Ee.postRender(() => {
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
      this.layout = this.measure(!1), this.layoutCorrected = Ke(), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
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
      const a = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout, s = this.projectionDelta && !Qp(this.projectionDelta), c = this.getTransformTemplate(), u = c ? c(this.latestValues, "") : void 0, d = u !== this.prevTransformTemplateValue;
      a && (s || Xn(this.latestValues) || d) && (o(this.instance, u), this.shouldResetTransform = !1, this.scheduleRender());
    }
    measure(a = !0) {
      const s = this.measurePageBox();
      let c = this.removeElementScroll(s);
      return a && (c = this.removeTransform(c)), QN(c), {
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
        return Ke();
      const c = s.measureViewportBox();
      if (!(((a = this.scroll) === null || a === void 0 ? void 0 : a.wasRoot) || this.path.some(JN))) {
        const { scroll: d } = this.root;
        d && (Ar(c.x, d.offset.x), Ar(c.y, d.offset.y));
      }
      return c;
    }
    removeElementScroll(a) {
      var s;
      const c = Ke();
      if (Dt(c, a), !((s = this.scroll) === null || s === void 0) && s.wasRoot)
        return c;
      for (let u = 0; u < this.path.length; u++) {
        const d = this.path[u], { scroll: f, options: h } = d;
        d !== this.root && f && h.layoutScroll && (f.wasRoot && Dt(c, a), Ar(c.x, f.offset.x), Ar(c.y, f.offset.y));
      }
      return c;
    }
    applyTransform(a, s = !1) {
      const c = Ke();
      Dt(c, a);
      for (let u = 0; u < this.path.length; u++) {
        const d = this.path[u];
        !s && d.options.layoutScroll && d.scroll && d !== d.root && _r(c, {
          x: -d.scroll.offset.x,
          y: -d.scroll.offset.y
        }), Xn(d.latestValues) && _r(c, d.latestValues);
      }
      return Xn(this.latestValues) && _r(c, this.latestValues), c;
    }
    removeTransform(a) {
      const s = Ke();
      Dt(s, a);
      for (let c = 0; c < this.path.length; c++) {
        const u = this.path[c];
        if (!u.instance || !Xn(u.latestValues))
          continue;
        Ol(u.latestValues) && u.updateSnapshot();
        const d = Ke(), f = u.measurePageBox();
        Dt(d, f), Lf(s, u.latestValues, u.snapshot ? u.snapshot.layoutBox : void 0, d);
      }
      return Xn(this.latestValues) && Lf(s, this.latestValues), s;
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
      this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== tt.timestamp && this.relativeParent.resolveTargetDelta(!0);
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
        if (this.resolvedRelativeTargetAt = tt.timestamp, !this.targetDelta && !this.relativeTarget) {
          const v = this.getClosestProjectingParent();
          v && v.layout && this.animationProgress !== 1 ? (this.relativeParent = v, this.forceRelativeParentToResolveTarget(), this.relativeTarget = Ke(), this.relativeTargetOrigin = Ke(), Ro(this.relativeTargetOrigin, this.layout.layoutBox, v.layout.layoutBox), Dt(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
        }
        if (!(!this.relativeTarget && !this.targetDelta)) {
          if (this.target || (this.target = Ke(), this.targetWithTransforms = Ke()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), eN(this.target, this.relativeTarget, this.relativeParent.target)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : Dt(this.target, this.layout.layoutBox), zp(this.target, this.targetDelta)) : Dt(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget) {
            this.attemptToResolveRelativeTarget = !1;
            const v = this.getClosestProjectingParent();
            v && !!v.resumingFrom == !!this.resumingFrom && !v.options.layoutScroll && v.target && this.animationProgress !== 1 ? (this.relativeParent = v, this.forceRelativeParentToResolveTarget(), this.relativeTarget = Ke(), this.relativeTargetOrigin = Ke(), Ro(this.relativeTargetOrigin, this.target, v.target), Dt(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
          }
          po && qn.resolvedTargetDeltas++;
        }
      }
    }
    getClosestProjectingParent() {
      if (!(!this.parent || Ol(this.parent.latestValues) || Hp(this.parent.latestValues)))
        return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout);
    }
    calcProjection() {
      var a;
      const s = this.getLead(), c = !!this.resumingFrom || this !== s;
      let u = !0;
      if ((this.isProjectionDirty || !((a = this.parent) === null || a === void 0) && a.isProjectionDirty) && (u = !1), c && (this.isSharedProjectionDirty || this.isTransformDirty) && (u = !1), this.resolvedRelativeTargetAt === tt.timestamp && (u = !1), u)
        return;
      const { layout: d, layoutId: f } = this.options;
      if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(d || f))
        return;
      Dt(this.layoutCorrected, this.layout.layoutBox);
      const h = this.treeScale.x, v = this.treeScale.y;
      cN(this.layoutCorrected, this.treeScale, this.path, c), s.layout && !s.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (s.target = s.layout.layoutBox, s.targetWithTransforms = Ke());
      const { target: g } = s;
      if (!g) {
        this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      !this.projectionDelta || !this.prevProjectionDelta ? this.createProjectionDeltas() : (Af(this.prevProjectionDelta.x, this.projectionDelta.x), Af(this.prevProjectionDelta.y, this.projectionDelta.y)), ko(this.projectionDelta, this.layoutCorrected, g, this.latestValues), (this.treeScale.x !== h || this.treeScale.y !== v || !Bf(this.projectionDelta.x, this.prevProjectionDelta.x) || !Bf(this.projectionDelta.y, this.prevProjectionDelta.y)) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", g)), po && qn.recalculatedProjection++;
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
      this.prevProjectionDelta = Dr(), this.projectionDelta = Dr(), this.projectionDeltaWithTransform = Dr();
    }
    setAnimationOrigin(a, s = !1) {
      const c = this.snapshot, u = c ? c.latestValues : {}, d = { ...this.latestValues }, f = Dr();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !s;
      const h = Ke(), v = c ? c.source : void 0, g = this.layout ? this.layout.source : void 0, p = v !== g, y = this.getStack(), b = !y || y.members.length <= 1, w = !!(p && !b && this.options.crossfade === !0 && !this.path.some(qN));
      this.animationProgress = 0;
      let x;
      this.mixTargetDelta = (C) => {
        const M = C / 1e3;
        Hf(f.x, a.x, M), Hf(f.y, a.y, M), this.setTargetDelta(f), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (Ro(h, this.layout.layoutBox, this.relativeParent.layout.layoutBox), XN(this.relativeTarget, this.relativeTargetOrigin, h, M), x && TN(this.relativeTarget, x) && (this.isProjectionDirty = !1), x || (x = Ke()), Dt(x, this.relativeTarget)), p && (this.animationValues = d, CN(d, u, this.latestValues, M, w, b)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = M;
      }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(a) {
      this.notifyListeners("animationStart"), this.currentAnimation && this.currentAnimation.stop(), this.resumingFrom && this.resumingFrom.currentAnimation && this.resumingFrom.currentAnimation.stop(), this.pendingAnimation && (Cn(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = Ee.update(() => {
        Ui.hasAnimatedSinceResize = !0, this.currentAnimation = LN(0, Wf, {
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
      this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(Wf), this.currentAnimation.stop()), this.completeAnimation();
    }
    applyTransformsToTarget() {
      const a = this.getLead();
      let { targetWithTransforms: s, target: c, layout: u, latestValues: d } = a;
      if (!(!s || !c || !u)) {
        if (this !== a && this.layout && u && nv(this.options.animationType, this.layout.layoutBox, u.layoutBox)) {
          c = this.target || Ke();
          const f = Tt(this.layout.layoutBox.x);
          c.x.min = a.target.x.min, c.x.max = c.x.min + f;
          const h = Tt(this.layout.layoutBox.y);
          c.y.min = a.target.y.min, c.y.max = c.y.min + h;
        }
        Dt(s, c), _r(s, d), ko(this.projectionDeltaWithTransform, this.layoutCorrected, s, d);
      }
    }
    registerSharedNode(a, s) {
      this.sharedNodes.has(a) || this.sharedNodes.set(a, new kN()), this.sharedNodes.get(a).add(s);
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
      c.z && Bs("z", a, u, this.animationValues);
      for (let d = 0; d < $s.length; d++)
        Bs(`rotate${$s[d]}`, a, u, this.animationValues), Bs(`skew${$s[d]}`, a, u, this.animationValues);
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
        return IN;
      const u = {
        visibility: ""
      }, d = this.getTransformTemplate();
      if (this.needsReset)
        return this.needsReset = !1, u.opacity = "", u.pointerEvents = Hi(a == null ? void 0 : a.pointerEvents) || "", u.transform = d ? d(this.latestValues, "") : "none", u;
      const f = this.getLead();
      if (!this.projectionDelta || !this.layout || !f.target) {
        const p = {};
        return this.options.layoutId && (p.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1, p.pointerEvents = Hi(a == null ? void 0 : a.pointerEvents) || ""), this.hasProjected && !Xn(this.latestValues) && (p.transform = d ? d({}, "") : "none", this.hasProjected = !1), p;
      }
      const h = f.animationValues || f.latestValues;
      this.applyTransformsToTarget(), u.transform = RN(this.projectionDeltaWithTransform, this.treeScale, h), d && (u.transform = d(h, u.transform));
      const { x: v, y: g } = this.projectionDelta;
      u.transformOrigin = `${v.origin * 100}% ${g.origin * 100}% 0`, f.animationValues ? u.opacity = f === this ? (c = (s = h.opacity) !== null && s !== void 0 ? s : this.latestValues.opacity) !== null && c !== void 0 ? c : 1 : this.preserveOpacity ? this.latestValues.opacity : h.opacityExit : u.opacity = f === this ? h.opacity !== void 0 ? h.opacity : "" : h.opacityExit !== void 0 ? h.opacityExit : 0;
      for (const p in da) {
        if (h[p] === void 0)
          continue;
        const { correct: y, applyTo: b } = da[p], w = u.transform === "none" ? h[p] : y(h[p], f);
        if (b) {
          const x = b.length;
          for (let C = 0; C < x; C++)
            u[b[C]] = w;
        } else
          u[p] = w;
      }
      return this.options.layoutId && (u.pointerEvents = f === this ? Hi(a == null ? void 0 : a.pointerEvents) || "" : "none"), u;
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    // Only run on root
    resetTree() {
      this.root.nodes.forEach((a) => {
        var s;
        return (s = a.currentAnimation) === null || s === void 0 ? void 0 : s.stop();
      }), this.root.nodes.forEach(jf), this.root.sharedNodes.clear();
    }
  };
}
function VN(e) {
  e.updateLayout();
}
function $N(e) {
  var t;
  const n = ((t = e.resumeFrom) === null || t === void 0 ? void 0 : t.snapshot) || e.snapshot;
  if (e.isLead() && e.layout && n && e.hasListeners("didUpdate")) {
    const { layoutBox: r, measuredBox: o } = e.layout, { animationType: i } = e.options, a = n.source !== e.layout.source;
    i === "size" ? At((f) => {
      const h = a ? n.measuredBox[f] : n.layoutBox[f], v = Tt(h);
      h.min = r[f].min, h.max = h.min + v;
    }) : nv(i, n.layoutBox, r) && At((f) => {
      const h = a ? n.measuredBox[f] : n.layoutBox[f], v = Tt(r[f]);
      h.max = h.min + v, e.relativeTarget && !e.currentAnimation && (e.isProjectionDirty = !0, e.relativeTarget[f].max = e.relativeTarget[f].min + v);
    });
    const s = Dr();
    ko(s, r, n.layoutBox);
    const c = Dr();
    a ? ko(c, e.applyTransform(o, !0), n.measuredBox) : ko(c, r, n.layoutBox);
    const u = !Qp(s);
    let d = !1;
    if (!e.resumeFrom) {
      const f = e.getClosestProjectingParent();
      if (f && !f.resumeFrom) {
        const { snapshot: h, layout: v } = f;
        if (h && v) {
          const g = Ke();
          Ro(g, n.layoutBox, h.layoutBox);
          const p = Ke();
          Ro(p, r, v.layoutBox), Jp(g, p) || (d = !0), f.options.layoutRoot && (e.relativeTarget = p, e.relativeTargetOrigin = g, e.relativeParent = f);
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
function BN(e) {
  po && qn.totalNodes++, e.parent && (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty), e.isSharedProjectionDirty || (e.isSharedProjectionDirty = !!(e.isProjectionDirty || e.parent.isProjectionDirty || e.parent.isSharedProjectionDirty)), e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty));
}
function WN(e) {
  e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
}
function jN(e) {
  e.clearSnapshot();
}
function jf(e) {
  e.clearMeasurements();
}
function UN(e) {
  e.isLayoutDirty = !1;
}
function HN(e) {
  const { visualElement: t } = e.options;
  t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"), e.resetTransform();
}
function Uf(e) {
  e.finishAnimation(), e.targetDelta = e.relativeTarget = e.target = void 0, e.isProjectionDirty = !0;
}
function zN(e) {
  e.resolveTargetDelta();
}
function GN(e) {
  e.calcProjection();
}
function YN(e) {
  e.resetSkewAndRotation();
}
function KN(e) {
  e.removeLeadSnapshot();
}
function Hf(e, t, n) {
  e.translate = Ue(t.translate, 0, n), e.scale = Ue(t.scale, 1, n), e.origin = t.origin, e.originPoint = t.originPoint;
}
function zf(e, t, n, r) {
  e.min = Ue(t.min, n.min, r), e.max = Ue(t.max, n.max, r);
}
function XN(e, t, n, r) {
  zf(e.x, t.x, n.x, r), zf(e.y, t.y, n.y, r);
}
function qN(e) {
  return e.animationValues && e.animationValues.opacityExit !== void 0;
}
const ZN = {
  duration: 0.45,
  ease: [0.4, 0, 0.1, 1]
}, Gf = (e) => typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(e), Yf = Gf("applewebkit/") && !Gf("chrome/") ? Math.round : nt;
function Kf(e) {
  e.min = Yf(e.min), e.max = Yf(e.max);
}
function QN(e) {
  Kf(e.x), Kf(e.y);
}
function nv(e, t, n) {
  return e === "position" || e === "preserve-aspect" && !JS($f(t), $f(n), 0.2);
}
function JN(e) {
  var t;
  return e !== e.root && ((t = e.scroll) === null || t === void 0 ? void 0 : t.wasRoot);
}
const e2 = tv({
  attachResizeListener: (e, t) => mn(e, "resize", t),
  measureScroll: () => ({
    x: document.documentElement.scrollLeft || document.body.scrollLeft,
    y: document.documentElement.scrollTop || document.body.scrollTop
  }),
  checkIsScrollRoot: () => !0
}), Ws = {
  current: void 0
}, rv = tv({
  measureScroll: (e) => ({
    x: e.scrollLeft,
    y: e.scrollTop
  }),
  defaultParent: () => {
    if (!Ws.current) {
      const e = new e2({});
      e.mount(window), e.setOptions({ layoutScroll: !0 }), Ws.current = e;
    }
    return Ws.current;
  },
  resetTransform: (e, t) => {
    e.style.transform = t !== void 0 ? t : "none";
  },
  checkIsScrollRoot: (e) => window.getComputedStyle(e).position === "fixed"
}), t2 = {
  pan: {
    Feature: pN
  },
  drag: {
    Feature: mN,
    ProjectionNode: rv,
    MeasureLayout: Xp
  }
};
function Xf(e, t) {
  const n = t ? "pointerenter" : "pointerleave", r = t ? "onHoverStart" : "onHoverEnd", o = (i, a) => {
    if (i.pointerType === "touch" || Bp())
      return;
    const s = e.getProps();
    e.animationState && s.whileHover && e.animationState.setActive("whileHover", t);
    const c = s[r];
    c && Ee.postRender(() => c(i, a));
  };
  return bn(e.current, n, o, {
    passive: !e.getProps()[r]
  });
}
class n2 extends Wn {
  mount() {
    this.unmount = yn(Xf(this.node, !0), Xf(this.node, !1));
  }
  unmount() {
  }
}
class r2 extends Wn {
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
    this.unmount = yn(mn(this.node.current, "focus", () => this.onFocus()), mn(this.node.current, "blur", () => this.onBlur()));
  }
  unmount() {
  }
}
const ov = (e, t) => t ? e === t ? !0 : ov(e, t.parentElement) : !1;
function js(e, t) {
  if (!t)
    return;
  const n = new PointerEvent("pointer" + e);
  t(n, Wa(n));
}
class o2 extends Wn {
  constructor() {
    super(...arguments), this.removeStartListeners = nt, this.removeEndListeners = nt, this.removeAccessibleListeners = nt, this.startPointerPress = (t, n) => {
      if (this.isPressing)
        return;
      this.removeEndListeners();
      const r = this.node.getProps(), i = bn(window, "pointerup", (s, c) => {
        if (!this.checkPressEnd())
          return;
        const { onTap: u, onTapCancel: d, globalTapTarget: f } = this.node.getProps(), h = !f && !ov(this.node.current, s.target) ? d : u;
        h && Ee.update(() => h(s, c));
      }, {
        passive: !(r.onTap || r.onPointerUp)
      }), a = bn(window, "pointercancel", (s, c) => this.cancelPress(s, c), {
        passive: !(r.onTapCancel || r.onPointerCancel)
      });
      this.removeEndListeners = yn(i, a), this.startPress(t, n);
    }, this.startAccessiblePress = () => {
      const t = (i) => {
        if (i.key !== "Enter" || this.isPressing)
          return;
        const a = (s) => {
          s.key !== "Enter" || !this.checkPressEnd() || js("up", (c, u) => {
            const { onTap: d } = this.node.getProps();
            d && Ee.postRender(() => d(c, u));
          });
        };
        this.removeEndListeners(), this.removeEndListeners = mn(this.node.current, "keyup", a), js("down", (s, c) => {
          this.startPress(s, c);
        });
      }, n = mn(this.node.current, "keydown", t), r = () => {
        this.isPressing && js("cancel", (i, a) => this.cancelPress(i, a));
      }, o = mn(this.node.current, "blur", r);
      this.removeAccessibleListeners = yn(n, o);
    };
  }
  startPress(t, n) {
    this.isPressing = !0;
    const { onTapStart: r, whileTap: o } = this.node.getProps();
    o && this.node.animationState && this.node.animationState.setActive("whileTap", !0), r && Ee.postRender(() => r(t, n));
  }
  checkPressEnd() {
    return this.removeEndListeners(), this.isPressing = !1, this.node.getProps().whileTap && this.node.animationState && this.node.animationState.setActive("whileTap", !1), !Bp();
  }
  cancelPress(t, n) {
    if (!this.checkPressEnd())
      return;
    const { onTapCancel: r } = this.node.getProps();
    r && Ee.postRender(() => r(t, n));
  }
  mount() {
    const t = this.node.getProps(), n = bn(t.globalTapTarget ? window : this.node.current, "pointerdown", this.startPointerPress, {
      passive: !(t.onTapStart || t.onPointerStart)
    }), r = mn(this.node.current, "focus", this.startAccessiblePress);
    this.removeStartListeners = yn(n, r);
  }
  unmount() {
    this.removeStartListeners(), this.removeEndListeners(), this.removeAccessibleListeners();
  }
}
const Il = /* @__PURE__ */ new WeakMap(), Us = /* @__PURE__ */ new WeakMap(), i2 = (e) => {
  const t = Il.get(e.target);
  t && t(e);
}, a2 = (e) => {
  e.forEach(i2);
};
function s2({ root: e, ...t }) {
  const n = e || document;
  Us.has(n) || Us.set(n, {});
  const r = Us.get(n), o = JSON.stringify(t);
  return r[o] || (r[o] = new IntersectionObserver(a2, { root: e, ...t })), r[o];
}
function l2(e, t, n) {
  const r = s2(t);
  return Il.set(e, n), r.observe(e), () => {
    Il.delete(e), r.unobserve(e);
  };
}
const c2 = {
  some: 0,
  all: 1
};
class u2 extends Wn {
  constructor() {
    super(...arguments), this.hasEnteredView = !1, this.isInView = !1;
  }
  startObserver() {
    this.unmount();
    const { viewport: t = {} } = this.node.getProps(), { root: n, margin: r, amount: o = "some", once: i } = t, a = {
      root: n ? n.current : void 0,
      rootMargin: r,
      threshold: typeof o == "number" ? o : c2[o]
    }, s = (c) => {
      const { isIntersecting: u } = c;
      if (this.isInView === u || (this.isInView = u, i && !u && this.hasEnteredView))
        return;
      u && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", u);
      const { onViewportEnter: d, onViewportLeave: f } = this.node.getProps(), h = u ? d : f;
      h && h(c);
    };
    return l2(this.node.current, a, s);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u")
      return;
    const { props: t, prevProps: n } = this.node;
    ["amount", "margin", "root"].some(d2(t, n)) && this.startObserver();
  }
  unmount() {
  }
}
function d2({ viewport: e = {} }, { viewport: t = {} } = {}) {
  return (n) => e[n] !== t[n];
}
const f2 = {
  inView: {
    Feature: u2
  },
  tap: {
    Feature: o2
  },
  focus: {
    Feature: r2
  },
  hover: {
    Feature: n2
  }
}, h2 = {
  layout: {
    ProjectionNode: rv,
    MeasureLayout: Xp
  }
}, Ua = St({}), Gc = typeof window < "u", Yc = Gc ? Pc : We, iv = St({ strict: !1 });
let qf = !1;
function m2(e, t, n, r, o) {
  var i;
  const { visualElement: a } = Oe(Ua), s = Oe(iv), c = Oe(ja), u = Oe(gc).reducedMotion, d = Ge();
  r = r || s.renderer, !d.current && r && (d.current = r(e, {
    visualState: t,
    parent: a,
    props: n,
    presenceContext: c,
    blockInitialAnimation: c ? c.initial === !1 : !1,
    reducedMotionConfig: u
  }));
  const f = d.current, h = Oe(Kp);
  f && !f.projection && o && (f.type === "html" || f.type === "svg") && v2(d.current, n, o, h), Hm(() => {
    f && f.update(n, c);
  });
  const v = n[Dp], g = Ge(!!v && !window.MotionHandoffIsComplete && ((i = window.MotionHasOptimisedAnimation) === null || i === void 0 ? void 0 : i.call(window, v)));
  return Yc(() => {
    f && (f.updateFeatures(), zc.render(f.render), g.current && f.animationState && f.animationState.animateChanges());
  }), We(() => {
    f && (!g.current && f.animationState && f.animationState.animateChanges(), g.current = !1, qf || (qf = !0, queueMicrotask(p2)));
  }), f;
}
function p2() {
  window.MotionHandoffIsComplete = !0;
}
function v2(e, t, n, r) {
  const { layoutId: o, layout: i, drag: a, dragConstraints: s, layoutScroll: c, layoutRoot: u } = t;
  e.projection = new n(e.latestValues, t["data-framer-portal-id"] ? void 0 : av(e.parent)), e.projection.setOptions({
    layoutId: o,
    layout: i,
    alwaysMeasureLayout: !!a || s && Rr(s),
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
function av(e) {
  if (e)
    return e.options.allowProjection !== !1 ? e.projection : av(e.parent);
}
function g2(e, t, n) {
  return zt(
    (r) => {
      r && e.mount && e.mount(r), t && (r ? t.mount(r) : t.unmount()), n && (typeof n == "function" ? n(r) : Rr(n) && (n.current = r));
    },
    /**
     * Only pass a new ref callback to React if we've received a visual element
     * factory. Otherwise we'll be mounting/remounting every time externalRef
     * or other dependencies change.
     */
    [t]
  );
}
function Ha(e) {
  return Wo(e.animate) || Rc.some((t) => jo(e[t]));
}
function sv(e) {
  return !!(Ha(e) || e.variants);
}
function y2(e, t) {
  if (Ha(e)) {
    const { initial: n, animate: r } = e;
    return {
      initial: n === !1 || jo(n) ? n : void 0,
      animate: jo(r) ? r : void 0
    };
  }
  return e.inherit !== !1 ? t : {};
}
function b2(e) {
  const { initial: t, animate: n } = y2(e, Oe(Ua));
  return Et(() => ({ initial: t, animate: n }), [Zf(t), Zf(n)]);
}
function Zf(e) {
  return Array.isArray(e) ? e.join(" ") : e;
}
const Qf = {
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
}, Br = {};
for (const e in Qf)
  Br[e] = {
    isEnabled: (t) => Qf[e].some((n) => !!t[n])
  };
function w2(e) {
  for (const t in e)
    Br[t] = {
      ...Br[t],
      ...e[t]
    };
}
const x2 = Symbol.for("motionComponentSymbol");
function C2({ preloadedFeatures: e, createVisualElement: t, useRender: n, useVisualState: r, Component: o }) {
  e && w2(e);
  function i(s, c) {
    let u;
    const d = {
      ...Oe(gc),
      ...s,
      layoutId: S2(s)
    }, { isStatic: f } = d, h = b2(s), v = r(s, f);
    if (!f && Gc) {
      N2(d, e);
      const g = P2(d);
      u = g.MeasureLayout, h.visualElement = m2(o, v, d, t, g.ProjectionNode);
    }
    return S(Ua.Provider, { value: h, children: [u && h.visualElement ? l(u, { visualElement: h.visualElement, ...d }) : null, n(o, s, g2(v, h.visualElement, c), v, f, h.visualElement)] });
  }
  const a = Z(i);
  return a[x2] = o, a;
}
function S2({ layoutId: e }) {
  const t = Oe(Go).id;
  return t && e !== void 0 ? t + "-" + e : e;
}
function N2(e, t) {
  const n = Oe(iv).strict;
  if (process.env.NODE_ENV !== "production" && t && n) {
    const r = "You have rendered a `motion` component within a `LazyMotion` component. This will break tree shaking. Import and render a `m` component instead.";
    e.ignoreStrict ? Xr(!1, r) : Sn(!1, r);
  }
}
function P2(e) {
  const { drag: t, layout: n } = Br;
  if (!t && !n)
    return {};
  const r = { ...t, ...n };
  return {
    MeasureLayout: t != null && t.isEnabled(e) || n != null && n.isEnabled(e) ? r.MeasureLayout : void 0,
    ProjectionNode: r.ProjectionNode
  };
}
const M2 = [
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
function Kc(e) {
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
      !!(M2.indexOf(e) > -1 || /**
       * If it contains a capital letter, it's an SVG component
       */
      /[A-Z]/u.test(e))
    )
  );
}
function lv(e, { style: t, vars: n }, r, o) {
  Object.assign(e.style, t, o && o.getProjectionStyles(r));
  for (const i in n)
    e.style.setProperty(i, n[i]);
}
const cv = /* @__PURE__ */ new Set([
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
function uv(e, t, n, r) {
  lv(e, t, void 0, r);
  for (const o in t.attrs)
    e.setAttribute(cv.has(o) ? o : Ba(o), t.attrs[o]);
}
function dv(e, { layout: t, layoutId: n }) {
  return Bn.has(e) || e.startsWith("origin") || (t || n !== void 0) && (!!da[e] || e === "opacity");
}
function Xc(e, t, n) {
  var r;
  const { style: o } = e, i = {};
  for (const a in o)
    (ct(o[a]) || t.style && ct(t.style[a]) || dv(a, e) || ((r = n == null ? void 0 : n.getValue(a)) === null || r === void 0 ? void 0 : r.liveStyle) !== void 0) && (i[a] = o[a]);
  return n && o && typeof o.willChange == "string" && (n.applyWillChange = !1), i;
}
function fv(e, t, n) {
  const r = Xc(e, t, n);
  for (const o in e)
    if (ct(e[o]) || ct(t[o])) {
      const i = ti.indexOf(o) !== -1 ? "attr" + o.charAt(0).toUpperCase() + o.substring(1) : o;
      r[i] = e[o];
    }
  return r;
}
function E2({ applyWillChange: e = !1, scrapeMotionValuesFromProps: t, createRenderState: n, onMount: r }, o, i, a, s) {
  const c = {
    latestValues: k2(o, i, a, s ? !1 : e, t),
    renderState: n()
  };
  return r && (c.mount = (u) => r(o, u, c)), c;
}
const hv = (e) => (t, n) => {
  const r = Oe(Ua), o = Oe(ja), i = () => E2(e, t, r, o, n);
  return n ? i() : yc(i);
};
function T2(e, t) {
  const n = _p(t);
  n && Va(e, n);
}
function Jf(e, t, n) {
  const r = Array.isArray(t) ? t : [t];
  for (let o = 0; o < r.length; o++) {
    const i = Tc(e, r[o]);
    if (i) {
      const { transitionEnd: a, transition: s, ...c } = i;
      n(c, a);
    }
  }
}
function k2(e, t, n, r, o) {
  var i;
  const a = {}, s = [], c = r && ((i = e.style) === null || i === void 0 ? void 0 : i.willChange) === void 0, u = o(e, {});
  for (const y in u)
    a[y] = Hi(u[y]);
  let { initial: d, animate: f } = e;
  const h = Ha(e), v = sv(e);
  t && v && !h && e.inherit !== !1 && (d === void 0 && (d = t.initial), f === void 0 && (f = t.animate));
  let g = n ? n.initial === !1 : !1;
  g = g || d === !1;
  const p = g ? f : d;
  return p && typeof p != "boolean" && !Wo(p) && Jf(e, p, (y, b) => {
    for (const w in y) {
      let x = y[w];
      if (Array.isArray(x)) {
        const C = g ? x.length - 1 : 0;
        x = x[C];
      }
      x !== null && (a[w] = x);
    }
    for (const w in b)
      a[w] = b[w];
  }), c && (f && d !== !1 && !Wo(f) && Jf(e, f, (y) => {
    for (const b in y)
      T2(s, b);
  }), s.length && (a.willChange = s.join(","))), a;
}
const qc = () => ({
  style: {},
  transform: {},
  transformOrigin: {},
  vars: {}
}), mv = () => ({
  ...qc(),
  attrs: {}
}), pv = (e, t) => t && typeof e == "number" ? t.transform(e) : e, R2 = {
  x: "translateX",
  y: "translateY",
  z: "translateZ",
  transformPerspective: "perspective"
}, D2 = ti.length;
function A2(e, t, n) {
  let r = "", o = !0;
  for (let i = 0; i < D2; i++) {
    const a = ti[i], s = e[a];
    if (s === void 0)
      continue;
    let c = !0;
    if (typeof s == "number" ? c = s === (a.startsWith("scale") ? 1 : 0) : c = parseFloat(s) === 0, !c || n) {
      const u = pv(s, Ic[a]);
      if (!c) {
        o = !1;
        const d = R2[a] || a;
        r += `${d}(${u}) `;
      }
      n && (t[a] = u);
    }
  }
  return r = r.trim(), n ? r = n(t, o ? "" : r) : o && (r = "none"), r;
}
function Zc(e, t, n) {
  const { style: r, vars: o, transformOrigin: i } = e;
  let a = !1, s = !1;
  for (const c in t) {
    const u = t[c];
    if (Bn.has(c)) {
      a = !0;
      continue;
    } else if (ep(c)) {
      o[c] = u;
      continue;
    } else {
      const d = pv(u, Ic[c]);
      c.startsWith("origin") ? (s = !0, i[c] = d) : r[c] = d;
    }
  }
  if (t.transform || (a || n ? r.transform = A2(t, e.transform, n) : r.transform && (r.transform = "none")), s) {
    const { originX: c = "50%", originY: u = "50%", originZ: d = 0 } = i;
    r.transformOrigin = `${c} ${u} ${d}`;
  }
}
function eh(e, t, n) {
  return typeof e == "string" ? e : me.transform(t + n * e);
}
function _2(e, t, n) {
  const r = eh(t, e.x, e.width), o = eh(n, e.y, e.height);
  return `${r} ${o}`;
}
const O2 = {
  offset: "stroke-dashoffset",
  array: "stroke-dasharray"
}, L2 = {
  offset: "strokeDashoffset",
  array: "strokeDasharray"
};
function I2(e, t, n = 1, r = 0, o = !0) {
  e.pathLength = 1;
  const i = o ? O2 : L2;
  e[i.offset] = me.transform(-r);
  const a = me.transform(t), s = me.transform(n);
  e[i.array] = `${a} ${s}`;
}
function Qc(e, {
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
  if (Zc(e, u, f), d) {
    e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
    return;
  }
  e.attrs = e.style, e.style = {};
  const { attrs: h, style: v, dimensions: g } = e;
  h.transform && (g && (v.transform = h.transform), delete h.transform), g && (o !== void 0 || i !== void 0 || v.transform) && (v.transformOrigin = _2(g, o !== void 0 ? o : 0.5, i !== void 0 ? i : 0.5)), t !== void 0 && (h.x = t), n !== void 0 && (h.y = n), r !== void 0 && (h.scale = r), a !== void 0 && I2(h, a, s, c, !1);
}
const Jc = (e) => typeof e == "string" && e.toLowerCase() === "svg", F2 = {
  useVisualState: hv({
    scrapeMotionValuesFromProps: fv,
    createRenderState: mv,
    onMount: (e, t, { renderState: n, latestValues: r }) => {
      Ee.read(() => {
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
      }), Ee.render(() => {
        Qc(n, r, Jc(t.tagName), e.transformTemplate), uv(t, n);
      });
    }
  })
}, V2 = {
  useVisualState: hv({
    applyWillChange: !0,
    scrapeMotionValuesFromProps: Xc,
    createRenderState: qc
  })
};
function vv(e, t, n) {
  for (const r in t)
    !ct(t[r]) && !dv(r, n) && (e[r] = t[r]);
}
function $2({ transformTemplate: e }, t) {
  return Et(() => {
    const n = qc();
    return Zc(n, t, e), Object.assign({}, n.vars, n.style);
  }, [t]);
}
function B2(e, t) {
  const n = e.style || {}, r = {};
  return vv(r, n, e), Object.assign(r, $2(e, t)), r;
}
function W2(e, t) {
  const n = {}, r = B2(e, t);
  return e.drag && e.dragListener !== !1 && (n.draggable = !1, r.userSelect = r.WebkitUserSelect = r.WebkitTouchCallout = "none", r.touchAction = e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`), e.tabIndex === void 0 && (e.onTap || e.onTapStart || e.whileTap) && (n.tabIndex = 0), n.style = r, n;
}
function j2(e, t, n, r) {
  const o = Et(() => {
    const i = mv();
    return Qc(i, t, Jc(r), e.transformTemplate), {
      ...i.attrs,
      style: { ...i.style }
    };
  }, [t]);
  if (e.style) {
    const i = {};
    vv(i, e.style, e), o.style = { ...i, ...o.style };
  }
  return o;
}
function U2(e = !1) {
  return (n, r, o, { latestValues: i }, a) => {
    const c = (Kc(n) ? j2 : W2)(r, i, a, n), u = Ww(r, typeof n == "string", e), d = n !== zm ? { ...u, ...c, ref: o } : {}, { children: f } = r, h = Et(() => ct(f) ? f.get() : f, [f]);
    return oa(n, {
      ...d,
      children: h
    });
  };
}
function H2(e, t) {
  return function(r, { forwardMotionProps: o } = { forwardMotionProps: !1 }) {
    const a = {
      ...Kc(r) ? F2 : V2,
      preloadedFeatures: e,
      useRender: U2(o),
      createVisualElement: t,
      Component: r
    };
    return C2(a);
  };
}
const Fl = { current: null }, gv = { current: !1 };
function z2() {
  if (gv.current = !0, !!Gc)
    if (window.matchMedia) {
      const e = window.matchMedia("(prefers-reduced-motion)"), t = () => Fl.current = e.matches;
      e.addListener(t), t();
    } else
      Fl.current = !1;
}
function G2(e, t, n) {
  for (const r in t) {
    const o = t[r], i = n[r];
    if (ct(o))
      e.addValue(r, o), process.env.NODE_ENV === "development" && La(o.version === "11.5.4", `Attempting to mix Framer Motion versions ${o.version} with 11.5.4 may not work as expected.`);
    else if (ct(i))
      e.addValue(r, zo(o, { owner: e }));
    else if (i !== o)
      if (e.hasValue(r)) {
        const a = e.getValue(r);
        a.liveStyle === !0 ? a.jump(o) : a.hasAnimated || a.set(o);
      } else {
        const a = e.getStaticValue(r);
        e.addValue(r, zo(a !== void 0 ? a : o, { owner: e }));
      }
  }
  for (const r in n)
    t[r] === void 0 && e.removeValue(r);
  return t;
}
const th = /* @__PURE__ */ new WeakMap(), Y2 = [...rp, st, $n], K2 = (e) => Y2.find(np(e)), nh = [
  "AnimationStart",
  "AnimationComplete",
  "Update",
  "BeforeLayoutMeasure",
  "LayoutMeasure",
  "LayoutAnimationStart",
  "LayoutAnimationComplete"
], X2 = Rc.length;
class q2 {
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
    this.applyWillChange = !1, this.current = null, this.children = /* @__PURE__ */ new Set(), this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.values = /* @__PURE__ */ new Map(), this.KeyframeResolver = Oc, this.features = {}, this.valueSubscriptions = /* @__PURE__ */ new Map(), this.prevMotionValues = {}, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
      this.isRenderScheduled = !1, this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection));
    }, this.isRenderScheduled = !1, this.scheduleRender = () => {
      this.isRenderScheduled || (this.isRenderScheduled = !0, Ee.render(this.render, !1, !0));
    };
    const { latestValues: c, renderState: u } = a;
    this.latestValues = c, this.baseTarget = { ...c }, this.initialValues = n.initial ? { ...c } : {}, this.renderState = u, this.parent = t, this.props = n, this.presenceContext = r, this.depth = t ? t.depth + 1 : 0, this.reducedMotionConfig = o, this.options = s, this.blockInitialAnimation = !!i, this.isControllingVariants = Ha(n), this.isVariantNode = sv(n), this.isVariantNode && (this.variantChildren = /* @__PURE__ */ new Set()), this.manuallyAnimateOnMount = !!(t && t.current);
    const { willChange: d, ...f } = this.scrapeMotionValuesFromProps(n, {}, this);
    for (const h in f) {
      const v = f[h];
      c[h] !== void 0 && ct(v) && v.set(c[h], !1);
    }
  }
  mount(t) {
    this.current = t, th.set(t, this), this.projection && !this.projection.instance && this.projection.mount(t), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((n, r) => this.bindToMotionValue(r, n)), gv.current || z2(), this.shouldReduceMotion = this.reducedMotionConfig === "never" ? !1 : this.reducedMotionConfig === "always" ? !0 : Fl.current, process.env.NODE_ENV !== "production" && La(this.shouldReduceMotion !== !0, "You have Reduced Motion enabled on your device. Animations may not appear as expected."), this.parent && this.parent.children.add(this), this.update(this.props, this.presenceContext);
  }
  unmount() {
    th.delete(this.current), this.projection && this.projection.unmount(), Cn(this.notifyUpdate), Cn(this.render), this.valueSubscriptions.forEach((t) => t()), this.valueSubscriptions.clear(), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent && this.parent.children.delete(this);
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
    const r = Bn.has(t), o = n.on("change", (s) => {
      this.latestValues[t] = s, this.props.onUpdate && Ee.preRender(this.notifyUpdate), r && this.projection && (this.projection.isTransformDirty = !0);
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
    for (t in Br) {
      const n = Br[t];
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
    return this.current ? this.measureInstanceViewportBox(this.current, this.props) : Ke();
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
    for (let r = 0; r < nh.length; r++) {
      const o = nh[r];
      this.propEventSubscriptions[o] && (this.propEventSubscriptions[o](), delete this.propEventSubscriptions[o]);
      const i = "on" + o, a = t[i];
      a && (this.propEventSubscriptions[o] = this.on(o, a));
    }
    this.prevMotionValues = G2(this, this.scrapeMotionValuesFromProps(t, this.prevProps, this), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue();
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
    for (let r = 0; r < X2; r++) {
      const o = Rc[r], i = this.props[o];
      (jo(i) || i === !1) && (n[o] = i);
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
    return r === void 0 && n !== void 0 && (r = zo(n === null ? void 0 : n, { owner: this }), this.addValue(t, r)), r;
  }
  /**
   * If we're trying to animate to a previously unencountered value,
   * we need to check for it in our state and as a last resort read it
   * directly from the instance (which might have performance implications).
   */
  readValue(t, n) {
    var r;
    let o = this.latestValues[t] !== void 0 || !this.current ? this.latestValues[t] : (r = this.getBaseTargetFromProps(this.props, t)) !== null && r !== void 0 ? r : this.readValueFromInstance(this.current, t, this.options);
    return o != null && (typeof o == "string" && (Qm(o) || Zm(o)) ? o = parseFloat(o) : !K2(o) && $n.test(n) && (o = dp(t, n)), this.setBaseTarget(t, ct(o) ? o.get() : o)), ct(o) ? o.get() : o;
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
      const a = Tc(this.props, r, (n = this.presenceContext) === null || n === void 0 ? void 0 : n.custom);
      a && (o = a[t]);
    }
    if (r && o !== void 0)
      return o;
    const i = this.getBaseTargetFromProps(this.props, t);
    return i !== void 0 && !ct(i) ? i : this.initialValues[t] !== void 0 && o === void 0 ? void 0 : this.baseTarget[t];
  }
  on(t, n) {
    return this.events[t] || (this.events[t] = new Hc()), this.events[t].add(n);
  }
  notify(t, ...n) {
    this.events[t] && this.events[t].notify(...n);
  }
}
class yv extends q2 {
  constructor() {
    super(...arguments), this.KeyframeResolver = fp;
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
function Z2(e) {
  return window.getComputedStyle(e);
}
class Q2 extends yv {
  constructor() {
    super(...arguments), this.type = "html", this.applyWillChange = !0, this.renderInstance = lv;
  }
  readValueFromInstance(t, n) {
    if (Bn.has(n)) {
      const r = Fc(n);
      return r && r.default || 0;
    } else {
      const r = Z2(t), o = (ep(n) ? r.getPropertyValue(n) : r[n]) || 0;
      return typeof o == "string" ? o.trim() : o;
    }
  }
  measureInstanceViewportBox(t, { transformPagePoint: n }) {
    return Gp(t, n);
  }
  build(t, n, r) {
    Zc(t, n, r.transformTemplate);
  }
  scrapeMotionValuesFromProps(t, n, r) {
    return Xc(t, n, r);
  }
  handleChildMotionValue() {
    this.childSubscription && (this.childSubscription(), delete this.childSubscription);
    const { children: t } = this.props;
    ct(t) && (this.childSubscription = t.on("change", (n) => {
      this.current && (this.current.textContent = `${n}`);
    }));
  }
}
class J2 extends yv {
  constructor() {
    super(...arguments), this.type = "svg", this.isSVGTag = !1, this.measureInstanceViewportBox = Ke;
  }
  getBaseTargetFromProps(t, n) {
    return t[n];
  }
  readValueFromInstance(t, n) {
    if (Bn.has(n)) {
      const r = Fc(n);
      return r && r.default || 0;
    }
    return n = cv.has(n) ? n : Ba(n), t.getAttribute(n);
  }
  scrapeMotionValuesFromProps(t, n, r) {
    return fv(t, n, r);
  }
  build(t, n, r) {
    Qc(t, n, this.isSVGTag, r.transformTemplate);
  }
  renderInstance(t, n, r, o) {
    uv(t, n, r, o);
  }
  mount(t) {
    this.isSVGTag = Jc(t.tagName), super.mount(t);
  }
}
const eP = (e, t) => Kc(e) ? new J2(t) : new Q2(t, {
  allowProjection: e !== zm
}), tP = /* @__PURE__ */ H2({
  ...HS,
  ...f2,
  ...t2,
  ...h2
}, eP), wt = /* @__PURE__ */ $x(tP);
class nP extends m.Component {
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
function rP({ children: e, isPresent: t }) {
  const n = Aa(), r = Ge(null), o = Ge({
    width: 0,
    height: 0,
    top: 0,
    left: 0
  }), { nonce: i } = Oe(gc);
  return Hm(() => {
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
  }, [t]), l(nP, { isPresent: t, childRef: r, sizeRef: o, children: m.cloneElement(e, { ref: r }) });
}
const oP = ({ children: e, initial: t, isPresent: n, onExitComplete: r, custom: o, presenceAffectsLayout: i, mode: a }) => {
  const s = yc(iP), c = Aa(), u = Et(
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
  return Et(() => {
    s.forEach((d, f) => s.set(f, !1));
  }, [n]), m.useEffect(() => {
    !n && !s.size && r && r();
  }, [n]), a === "popLayout" && (e = l(rP, { isPresent: n, children: e })), l(ja.Provider, { value: u, children: e });
};
function iP() {
  return /* @__PURE__ */ new Map();
}
const Mi = (e) => e.key || "";
function rh(e) {
  const t = [];
  return _a.forEach(e, (n) => {
    fx(n) && t.push(n);
  }), t;
}
const ii = ({ children: e, exitBeforeEnter: t, custom: n, initial: r = !0, onExitComplete: o, presenceAffectsLayout: i = !0, mode: a = "sync" }) => {
  Sn(!t, "Replace exitBeforeEnter with mode='wait'");
  const s = Et(() => rh(e), [e]), c = s.map(Mi), u = Ge(!0), d = Ge(s), f = yc(() => /* @__PURE__ */ new Map()), [h, v] = Te(s), [g, p] = Te(s);
  Yc(() => {
    u.current = !1, d.current = s;
    for (let w = 0; w < g.length; w++) {
      const x = Mi(g[w]);
      c.includes(x) ? f.delete(x) : f.get(x) !== !0 && f.set(x, !1);
    }
  }, [g, c.length, c.join("-")]);
  const y = [];
  if (s !== h) {
    let w = [...s];
    for (let x = 0; x < g.length; x++) {
      const C = g[x], M = Mi(C);
      c.includes(M) || (w.splice(x, 0, C), y.push(C));
    }
    a === "wait" && y.length && (w = y), p(rh(w)), v(s);
    return;
  }
  process.env.NODE_ENV !== "production" && a === "wait" && g.length > 1 && console.warn(`You're attempting to animate multiple children within AnimatePresence, but its mode is set to "wait". This will lead to odd visual behaviour.`);
  const { forceRender: b } = Oe(Go);
  return l(we, { children: g.map((w) => {
    const x = Mi(w), C = s === g || c.includes(x), M = () => {
      if (f.has(x))
        f.set(x, !0);
      else
        return;
      let I = !0;
      f.forEach((T) => {
        T || (I = !1);
      }), I && (b == null || b(), p(d.current), o && o());
    };
    return l(oP, { isPresent: C, initial: !u.current || r ? void 0 : !1, custom: C ? void 0 : n, presenceAffectsLayout: i, mode: a, onExitComplete: C ? void 0 : M, children: w }, x);
  }) });
}, aP = St(null);
function sP() {
  const e = Ge(!1);
  return Yc(() => (e.current = !0, () => {
    e.current = !1;
  }), []), e;
}
function lP() {
  const e = sP(), [t, n] = Te(0), r = zt(() => {
    e.current && n(t + 1);
  }, [t]);
  return [zt(() => Ee.postRender(r), [r]), t];
}
const cP = (e) => !e.isLayoutDirty && e.willUpdate(!1);
function oh() {
  const e = /* @__PURE__ */ new Set(), t = /* @__PURE__ */ new WeakMap(), n = () => e.forEach(cP);
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
const bv = (e) => e === !0, uP = (e) => bv(e === !0) || e === "id", dP = ({ children: e, id: t, inherit: n = !0 }) => {
  const r = Oe(Go), o = Oe(aP), [i, a] = lP(), s = Ge(null), c = r.id || o;
  s.current === null && (uP(n) && c && (t = t ? c + "-" + t : c), s.current = {
    id: t,
    group: bv(n) && r.group || oh()
  });
  const u = Et(() => ({ ...s.current, forceRender: i }), [a]);
  return l(Go.Provider, { value: u, children: e });
};
var fP = m.createContext(void 0);
function Zr(e) {
  const t = m.useContext(fP);
  return e || t || "ltr";
}
function Vl(e, [t, n]) {
  return Math.min(n, Math.max(t, e));
}
function hP(e, t) {
  return m.useReducer((n, r) => t[n][r] ?? n, e);
}
var eu = "ScrollArea", [wv, lI] = rn(eu), [mP, $t] = wv(eu), xv = m.forwardRef(
  (e, t) => {
    const {
      __scopeScrollArea: n,
      type: r = "hover",
      dir: o,
      scrollHideDelay: i = 600,
      ...a
    } = e, [s, c] = m.useState(null), [u, d] = m.useState(null), [f, h] = m.useState(null), [v, g] = m.useState(null), [p, y] = m.useState(null), [b, w] = m.useState(0), [x, C] = m.useState(0), [M, I] = m.useState(!1), [T, k] = m.useState(!1), R = Se(t, (X) => c(X)), j = Zr(o);
    return /* @__PURE__ */ l(
      mP,
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
        scrollbarX: v,
        onScrollbarXChange: g,
        scrollbarXEnabled: M,
        onScrollbarXEnabledChange: I,
        scrollbarY: p,
        onScrollbarYChange: y,
        scrollbarYEnabled: T,
        onScrollbarYEnabledChange: k,
        onCornerWidthChange: w,
        onCornerHeightChange: C,
        children: /* @__PURE__ */ l(
          ve.div,
          {
            dir: j,
            ...a,
            ref: R,
            style: {
              position: "relative",
              // Pass corner sizes as CSS vars to reduce re-renders of context consumers
              "--radix-scroll-area-corner-width": b + "px",
              "--radix-scroll-area-corner-height": x + "px",
              ...e.style
            }
          }
        )
      }
    );
  }
);
xv.displayName = eu;
var Cv = "ScrollAreaViewport", Sv = m.forwardRef(
  (e, t) => {
    const { __scopeScrollArea: n, children: r, nonce: o, ...i } = e, a = $t(Cv, n), s = m.useRef(null), c = Se(t, s, a.onViewportChange);
    return /* @__PURE__ */ S(we, { children: [
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
        ve.div,
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
Sv.displayName = Cv;
var on = "ScrollAreaScrollbar", tu = m.forwardRef(
  (e, t) => {
    const { forceMount: n, ...r } = e, o = $t(on, e.__scopeScrollArea), { onScrollbarXEnabledChange: i, onScrollbarYEnabledChange: a } = o, s = e.orientation === "horizontal";
    return m.useEffect(() => (s ? i(!0) : a(!0), () => {
      s ? i(!1) : a(!1);
    }), [s, i, a]), o.type === "hover" ? /* @__PURE__ */ l(pP, { ...r, ref: t, forceMount: n }) : o.type === "scroll" ? /* @__PURE__ */ l(vP, { ...r, ref: t, forceMount: n }) : o.type === "auto" ? /* @__PURE__ */ l(Nv, { ...r, ref: t, forceMount: n }) : o.type === "always" ? /* @__PURE__ */ l(nu, { ...r, ref: t }) : null;
  }
);
tu.displayName = on;
var pP = m.forwardRef((e, t) => {
  const { forceMount: n, ...r } = e, o = $t(on, e.__scopeScrollArea), [i, a] = m.useState(!1);
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
  }, [o.scrollArea, o.scrollHideDelay]), /* @__PURE__ */ l(Ct, { present: n || i, children: /* @__PURE__ */ l(
    Nv,
    {
      "data-state": i ? "visible" : "hidden",
      ...r,
      ref: t
    }
  ) });
}), vP = m.forwardRef((e, t) => {
  const { forceMount: n, ...r } = e, o = $t(on, e.__scopeScrollArea), i = e.orientation === "horizontal", a = Ga(() => c("SCROLL_END"), 100), [s, c] = hP("hidden", {
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
        const v = u[d];
        f !== v && (c("SCROLL"), a()), f = v;
      };
      return u.addEventListener("scroll", h), () => u.removeEventListener("scroll", h);
    }
  }, [o.viewport, i, c, a]), /* @__PURE__ */ l(Ct, { present: n || s !== "hidden", children: /* @__PURE__ */ l(
    nu,
    {
      "data-state": s === "hidden" ? "hidden" : "visible",
      ...r,
      ref: t,
      onPointerEnter: re(e.onPointerEnter, () => c("POINTER_ENTER")),
      onPointerLeave: re(e.onPointerLeave, () => c("POINTER_LEAVE"))
    }
  ) });
}), Nv = m.forwardRef((e, t) => {
  const n = $t(on, e.__scopeScrollArea), { forceMount: r, ...o } = e, [i, a] = m.useState(!1), s = e.orientation === "horizontal", c = Ga(() => {
    if (n.viewport) {
      const u = n.viewport.offsetWidth < n.viewport.scrollWidth, d = n.viewport.offsetHeight < n.viewport.scrollHeight;
      a(s ? u : d);
    }
  }, 10);
  return Wr(n.viewport, c), Wr(n.content, c), /* @__PURE__ */ l(Ct, { present: r || i, children: /* @__PURE__ */ l(
    nu,
    {
      "data-state": i ? "visible" : "hidden",
      ...o,
      ref: t
    }
  ) });
}), nu = m.forwardRef((e, t) => {
  const { orientation: n = "vertical", ...r } = e, o = $t(on, e.__scopeScrollArea), i = m.useRef(null), a = m.useRef(0), [s, c] = m.useState({
    content: 0,
    viewport: 0,
    scrollbar: { size: 0, paddingStart: 0, paddingEnd: 0 }
  }), u = kv(s.viewport, s.content), d = {
    ...r,
    sizes: s,
    onSizesChange: c,
    hasThumb: u > 0 && u < 1,
    onThumbChange: (h) => i.current = h,
    onThumbPointerUp: () => a.current = 0,
    onThumbPointerDown: (h) => a.current = h
  };
  function f(h, v) {
    return CP(h, a.current, s, v);
  }
  return n === "horizontal" ? /* @__PURE__ */ l(
    gP,
    {
      ...d,
      ref: t,
      onThumbPositionChange: () => {
        if (o.viewport && i.current) {
          const h = o.viewport.scrollLeft, v = ih(h, s, o.dir);
          i.current.style.transform = `translate3d(${v}px, 0, 0)`;
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
    yP,
    {
      ...d,
      ref: t,
      onThumbPositionChange: () => {
        if (o.viewport && i.current) {
          const h = o.viewport.scrollTop, v = ih(h, s);
          i.current.style.transform = `translate3d(0, ${v}px, 0)`;
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
}), gP = m.forwardRef((e, t) => {
  const { sizes: n, onSizesChange: r, ...o } = e, i = $t(on, e.__scopeScrollArea), [a, s] = m.useState(), c = m.useRef(null), u = Se(t, c, i.onScrollbarXChange);
  return m.useEffect(() => {
    c.current && s(getComputedStyle(c.current));
  }, [c]), /* @__PURE__ */ l(
    Mv,
    {
      "data-orientation": "horizontal",
      ...o,
      ref: u,
      sizes: n,
      style: {
        bottom: 0,
        left: i.dir === "rtl" ? "var(--radix-scroll-area-corner-width)" : 0,
        right: i.dir === "ltr" ? "var(--radix-scroll-area-corner-width)" : 0,
        "--radix-scroll-area-thumb-width": za(n) + "px",
        ...e.style
      },
      onThumbPointerDown: (d) => e.onThumbPointerDown(d.x),
      onDragScroll: (d) => e.onDragScroll(d.x),
      onWheelScroll: (d, f) => {
        if (i.viewport) {
          const h = i.viewport.scrollLeft + d.deltaX;
          e.onWheelScroll(h), Dv(h, f) && d.preventDefault();
        }
      },
      onResize: () => {
        c.current && i.viewport && a && r({
          content: i.viewport.scrollWidth,
          viewport: i.viewport.offsetWidth,
          scrollbar: {
            size: c.current.clientWidth,
            paddingStart: ha(a.paddingLeft),
            paddingEnd: ha(a.paddingRight)
          }
        });
      }
    }
  );
}), yP = m.forwardRef((e, t) => {
  const { sizes: n, onSizesChange: r, ...o } = e, i = $t(on, e.__scopeScrollArea), [a, s] = m.useState(), c = m.useRef(null), u = Se(t, c, i.onScrollbarYChange);
  return m.useEffect(() => {
    c.current && s(getComputedStyle(c.current));
  }, [c]), /* @__PURE__ */ l(
    Mv,
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
        "--radix-scroll-area-thumb-height": za(n) + "px",
        ...e.style
      },
      onThumbPointerDown: (d) => e.onThumbPointerDown(d.y),
      onDragScroll: (d) => e.onDragScroll(d.y),
      onWheelScroll: (d, f) => {
        if (i.viewport) {
          const h = i.viewport.scrollTop + d.deltaY;
          e.onWheelScroll(h), Dv(h, f) && d.preventDefault();
        }
      },
      onResize: () => {
        c.current && i.viewport && a && r({
          content: i.viewport.scrollHeight,
          viewport: i.viewport.offsetHeight,
          scrollbar: {
            size: c.current.clientHeight,
            paddingStart: ha(a.paddingTop),
            paddingEnd: ha(a.paddingBottom)
          }
        });
      }
    }
  );
}), [bP, Pv] = wv(on), Mv = m.forwardRef((e, t) => {
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
  } = e, v = $t(on, n), [g, p] = m.useState(null), y = Se(t, (R) => p(R)), b = m.useRef(null), w = m.useRef(""), x = v.viewport, C = r.content - r.viewport, M = Ve(d), I = Ve(c), T = Ga(f, 10);
  function k(R) {
    if (b.current) {
      const j = R.clientX - b.current.left, X = R.clientY - b.current.top;
      u({ x: j, y: X });
    }
  }
  return m.useEffect(() => {
    const R = (j) => {
      const X = j.target;
      (g == null ? void 0 : g.contains(X)) && M(j, C);
    };
    return document.addEventListener("wheel", R, { passive: !1 }), () => document.removeEventListener("wheel", R, { passive: !1 });
  }, [x, g, C, M]), m.useEffect(I, [r, I]), Wr(g, T), Wr(v.content, T), /* @__PURE__ */ l(
    bP,
    {
      scope: n,
      scrollbar: g,
      hasThumb: o,
      onThumbChange: Ve(i),
      onThumbPointerUp: Ve(a),
      onThumbPositionChange: I,
      onThumbPointerDown: Ve(s),
      children: /* @__PURE__ */ l(
        ve.div,
        {
          ...h,
          ref: y,
          style: { position: "absolute", ...h.style },
          onPointerDown: re(e.onPointerDown, (R) => {
            R.button === 0 && (R.target.setPointerCapture(R.pointerId), b.current = g.getBoundingClientRect(), w.current = document.body.style.webkitUserSelect, document.body.style.webkitUserSelect = "none", v.viewport && (v.viewport.style.scrollBehavior = "auto"), k(R));
          }),
          onPointerMove: re(e.onPointerMove, k),
          onPointerUp: re(e.onPointerUp, (R) => {
            const j = R.target;
            j.hasPointerCapture(R.pointerId) && j.releasePointerCapture(R.pointerId), document.body.style.webkitUserSelect = w.current, v.viewport && (v.viewport.style.scrollBehavior = ""), b.current = null;
          })
        }
      )
    }
  );
}), fa = "ScrollAreaThumb", Ev = m.forwardRef(
  (e, t) => {
    const { forceMount: n, ...r } = e, o = Pv(fa, e.__scopeScrollArea);
    return /* @__PURE__ */ l(Ct, { present: n || o.hasThumb, children: /* @__PURE__ */ l(wP, { ref: t, ...r }) });
  }
), wP = m.forwardRef(
  (e, t) => {
    const { __scopeScrollArea: n, style: r, ...o } = e, i = $t(fa, n), a = Pv(fa, n), { onThumbPositionChange: s } = a, c = Se(
      t,
      (f) => a.onThumbChange(f)
    ), u = m.useRef(), d = Ga(() => {
      u.current && (u.current(), u.current = void 0);
    }, 100);
    return m.useEffect(() => {
      const f = i.viewport;
      if (f) {
        const h = () => {
          if (d(), !u.current) {
            const v = SP(f, s);
            u.current = v, s();
          }
        };
        return s(), f.addEventListener("scroll", h), () => f.removeEventListener("scroll", h);
      }
    }, [i.viewport, d, s]), /* @__PURE__ */ l(
      ve.div,
      {
        "data-state": a.hasThumb ? "visible" : "hidden",
        ...o,
        ref: c,
        style: {
          width: "var(--radix-scroll-area-thumb-width)",
          height: "var(--radix-scroll-area-thumb-height)",
          ...r
        },
        onPointerDownCapture: re(e.onPointerDownCapture, (f) => {
          const v = f.target.getBoundingClientRect(), g = f.clientX - v.left, p = f.clientY - v.top;
          a.onThumbPointerDown({ x: g, y: p });
        }),
        onPointerUp: re(e.onPointerUp, a.onThumbPointerUp)
      }
    );
  }
);
Ev.displayName = fa;
var ru = "ScrollAreaCorner", Tv = m.forwardRef(
  (e, t) => {
    const n = $t(ru, e.__scopeScrollArea), r = !!(n.scrollbarX && n.scrollbarY);
    return n.type !== "scroll" && r ? /* @__PURE__ */ l(xP, { ...e, ref: t }) : null;
  }
);
Tv.displayName = ru;
var xP = m.forwardRef((e, t) => {
  const { __scopeScrollArea: n, ...r } = e, o = $t(ru, n), [i, a] = m.useState(0), [s, c] = m.useState(0), u = !!(i && s);
  return Wr(o.scrollbarX, () => {
    var f;
    const d = ((f = o.scrollbarX) == null ? void 0 : f.offsetHeight) || 0;
    o.onCornerHeightChange(d), c(d);
  }), Wr(o.scrollbarY, () => {
    var f;
    const d = ((f = o.scrollbarY) == null ? void 0 : f.offsetWidth) || 0;
    o.onCornerWidthChange(d), a(d);
  }), u ? /* @__PURE__ */ l(
    ve.div,
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
function ha(e) {
  return e ? parseInt(e, 10) : 0;
}
function kv(e, t) {
  const n = e / t;
  return isNaN(n) ? 0 : n;
}
function za(e) {
  const t = kv(e.viewport, e.content), n = e.scrollbar.paddingStart + e.scrollbar.paddingEnd, r = (e.scrollbar.size - n) * t;
  return Math.max(r, 18);
}
function CP(e, t, n, r = "ltr") {
  const o = za(n), i = o / 2, a = t || i, s = o - a, c = n.scrollbar.paddingStart + a, u = n.scrollbar.size - n.scrollbar.paddingEnd - s, d = n.content - n.viewport, f = r === "ltr" ? [0, d] : [d * -1, 0];
  return Rv([c, u], f)(e);
}
function ih(e, t, n = "ltr") {
  const r = za(t), o = t.scrollbar.paddingStart + t.scrollbar.paddingEnd, i = t.scrollbar.size - o, a = t.content - t.viewport, s = i - r, c = n === "ltr" ? [0, a] : [a * -1, 0], u = Vl(e, c);
  return Rv([0, a], [0, s])(u);
}
function Rv(e, t) {
  return (n) => {
    if (e[0] === e[1] || t[0] === t[1]) return t[0];
    const r = (t[1] - t[0]) / (e[1] - e[0]);
    return t[0] + r * (n - e[0]);
  };
}
function Dv(e, t) {
  return e > 0 && e < t;
}
var SP = (e, t = () => {
}) => {
  let n = { left: e.scrollLeft, top: e.scrollTop }, r = 0;
  return function o() {
    const i = { left: e.scrollLeft, top: e.scrollTop }, a = n.left !== i.left, s = n.top !== i.top;
    (a || s) && t(), n = i, r = window.requestAnimationFrame(o);
  }(), () => window.cancelAnimationFrame(r);
};
function Ga(e, t) {
  const n = Ve(e), r = m.useRef(0);
  return m.useEffect(() => () => window.clearTimeout(r.current), []), m.useCallback(() => {
    window.clearTimeout(r.current), r.current = window.setTimeout(n, t);
  }, [n, t]);
}
function Wr(e, t) {
  const n = Ve(t);
  Xe(() => {
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
var Av = xv, NP = Sv, PP = Tv;
const Ya = m.forwardRef(({ className: e, children: t, showBar: n = !0, ...r }, o) => /* @__PURE__ */ S(
  Av,
  {
    ref: o,
    className: A("relative overflow-hidden", e),
    scrollHideDelay: 200,
    ...r,
    children: [
      /* @__PURE__ */ l(
        NP,
        {
          className: "h-full w-full rounded-[inherit]",
          "data-scroll-container": !0,
          children: t
        }
      ),
      /* @__PURE__ */ l($l, { orientation: "vertical", showBar: n }),
      /* @__PURE__ */ l($l, { orientation: "horizontal", showBar: n }),
      /* @__PURE__ */ l(PP, {})
    ]
  }
));
Ya.displayName = Av.displayName;
const $l = m.forwardRef(({ className: e, orientation: t = "vertical", showBar: n = !0, ...r }, o) => /* @__PURE__ */ l(
  tu,
  {
    ref: o,
    orientation: t,
    forceMount: !0,
    className: A(
      "group/scrollbar z-50 flex touch-none select-none p-[1px]",
      "transition-opacity data-[state=hidden]:pointer-events-none data-[state=visible]:pointer-events-auto data-[state=hidden]:opacity-0 data-[state=visible]:opacity-100",
      t === "vertical" && "mr-[2px] h-full w-2",
      t === "horizontal" && "mt-[2px] h-2 flex-col",
      e
    ),
    ...r,
    children: n && /* @__PURE__ */ l(Ev, { className: "relative flex-1 rounded-full bg-f1-background-bold opacity-30 transition-opacity group-hover/scrollbar:opacity-50" })
  }
));
$l.displayName = tu.displayName;
const MP = ({ data: e, dataConfig: t, scaleMin: n, scaleMax: r, aspect: o }, i) => {
  const a = Object.keys(t), s = e.map((c) => ({
    subject: c.label,
    ...c.values
  }));
  return /* @__PURE__ */ l(
    jw,
    {
      config: t,
      ref: i,
      aspect: o,
      "data-chromatic": "ignore",
      children: /* @__PURE__ */ S(Fx, { accessibilityLayer: !0, data: s, children: [
        /* @__PURE__ */ l(
          Uw,
          {
            cursor: !0,
            content: /* @__PURE__ */ l(Hw, { indicator: "dot" })
          }
        ),
        /* @__PURE__ */ l(Gm, { gridType: "circle" }),
        /* @__PURE__ */ l(Im, { dataKey: "subject" }),
        /* @__PURE__ */ l(
          Fm,
          {
            angle: 90,
            type: "number",
            domain: [n ?? "dataMin", r ?? "dataMax"]
          }
        ),
        a.map((c, u) => /* @__PURE__ */ l(
          ei,
          {
            dataKey: c,
            fill: t[c].color || Ad(u),
            stroke: t[c].color || Ad(u),
            strokeWidth: 1.5,
            fillOpacity: 0.3,
            label: t[c].label,
            isAnimationActive: !1
          },
          c
        )),
        Object.keys(t).length > 1 && /* @__PURE__ */ l(zw, { iconType: "star", content: /* @__PURE__ */ l(Gw, {}) })
      ] })
    }
  );
}, cI = Yw(MP);
/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const EP = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), _v = (...e) => e.filter((t, n, r) => !!t && r.indexOf(t) === n).join(" ");
/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var TP = {
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
const kP = Z(
  ({
    color: e = "currentColor",
    size: t = 24,
    strokeWidth: n = 2,
    absoluteStrokeWidth: r,
    className: o = "",
    children: i,
    iconNode: a,
    ...s
  }, c) => oa(
    "svg",
    {
      ref: c,
      ...TP,
      width: t,
      height: t,
      stroke: e,
      strokeWidth: r ? Number(n) * 24 / Number(t) : n,
      className: _v("lucide", o),
      ...s
    },
    [
      ...a.map(([u, d]) => oa(u, d)),
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
const Nn = (e, t) => {
  const n = Z(
    ({ className: r, ...o }, i) => oa(kP, {
      ref: i,
      iconNode: t,
      className: _v(`lucide-${EP(e)}`, r),
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
const RP = Nn("BookOpen", [
  ["path", { d: "M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z", key: "vv98re" }],
  ["path", { d: "M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z", key: "1cyq3y" }]
]);
/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const DP = Nn("Check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const AP = Nn("ChevronLeft", [
  ["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]
]);
/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ov = Nn("ChevronRight", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]
]);
/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _P = Nn("CircleCheck", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]
]);
/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const OP = Nn("Circle", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]
]);
/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const LP = Nn("OctagonX", [
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
const IP = Nn("TriangleAlert", [
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
const FP = Nn("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]);
function ge(e) {
  const t = Object.prototype.toString.call(e);
  return e instanceof Date || typeof e == "object" && t === "[object Date]" ? new e.constructor(+e) : typeof e == "number" || t === "[object Number]" || typeof e == "string" || t === "[object String]" ? new Date(e) : /* @__PURE__ */ new Date(NaN);
}
function xt(e, t) {
  return e instanceof Date ? new e.constructor(t) : new Date(t);
}
function dt(e, t) {
  const n = ge(e);
  return isNaN(t) ? xt(e, NaN) : (t && n.setDate(n.getDate() + t), n);
}
function Gt(e, t) {
  const n = ge(e);
  if (isNaN(t)) return xt(e, NaN);
  if (!t)
    return n;
  const r = n.getDate(), o = xt(e, n.getTime());
  o.setMonth(n.getMonth() + t + 1, 0);
  const i = o.getDate();
  return r >= i ? o : (n.setFullYear(
    o.getFullYear(),
    o.getMonth(),
    r
  ), n);
}
const ou = 6048e5, VP = 864e5, ah = 6e4, sh = 525600, lh = 43200, ch = 1440;
let $P = {};
function Qr() {
  return $P;
}
function nn(e, t) {
  var s, c, u, d;
  const n = Qr(), r = (t == null ? void 0 : t.weekStartsOn) ?? ((c = (s = t == null ? void 0 : t.locale) == null ? void 0 : s.options) == null ? void 0 : c.weekStartsOn) ?? n.weekStartsOn ?? ((d = (u = n.locale) == null ? void 0 : u.options) == null ? void 0 : d.weekStartsOn) ?? 0, o = ge(e), i = o.getDay(), a = (i < r ? 7 : 0) + i - r;
  return o.setDate(o.getDate() - a), o.setHours(0, 0, 0, 0), o;
}
function sr(e) {
  return nn(e, { weekStartsOn: 1 });
}
function Lv(e) {
  const t = ge(e), n = t.getFullYear(), r = xt(e, 0);
  r.setFullYear(n + 1, 0, 4), r.setHours(0, 0, 0, 0);
  const o = sr(r), i = xt(e, 0);
  i.setFullYear(n, 0, 4), i.setHours(0, 0, 0, 0);
  const a = sr(i);
  return t.getTime() >= o.getTime() ? n + 1 : t.getTime() >= a.getTime() ? n : n - 1;
}
function jr(e) {
  const t = ge(e);
  return t.setHours(0, 0, 0, 0), t;
}
function Ur(e) {
  const t = ge(e), n = new Date(
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
function Qt(e, t) {
  const n = jr(e), r = jr(t), o = +n - Ur(n), i = +r - Ur(r);
  return Math.round((o - i) / VP);
}
function BP(e) {
  const t = Lv(e), n = xt(e, 0);
  return n.setFullYear(t, 0, 4), n.setHours(0, 0, 0, 0), sr(n);
}
function Bl(e, t) {
  const n = t * 7;
  return dt(e, n);
}
function WP(e, t) {
  return Gt(e, t * 12);
}
function jP(e) {
  let t;
  return e.forEach(function(n) {
    const r = ge(n);
    (t === void 0 || t < r || isNaN(Number(r))) && (t = r);
  }), t || /* @__PURE__ */ new Date(NaN);
}
function UP(e) {
  let t;
  return e.forEach((n) => {
    const r = ge(n);
    (!t || t > r || isNaN(+r)) && (t = r);
  }), t || /* @__PURE__ */ new Date(NaN);
}
function HP(e, t) {
  const n = ge(e), r = ge(t), o = n.getTime() - r.getTime();
  return o < 0 ? -1 : o > 0 ? 1 : o;
}
function zP(e) {
  return xt(e, Date.now());
}
function yt(e, t) {
  const n = jr(e), r = jr(t);
  return +n == +r;
}
function iu(e) {
  return e instanceof Date || typeof e == "object" && Object.prototype.toString.call(e) === "[object Date]";
}
function GP(e) {
  if (!iu(e) && typeof e != "number")
    return !1;
  const t = ge(e);
  return !isNaN(Number(t));
}
function Yo(e, t) {
  const n = ge(e), r = ge(t), o = n.getFullYear() - r.getFullYear(), i = n.getMonth() - r.getMonth();
  return o * 12 + i;
}
function YP(e, t, n) {
  const r = nn(e, n), o = nn(t, n), i = +r - Ur(r), a = +o - Ur(o);
  return Math.round((i - a) / ou);
}
function KP(e) {
  return (t) => {
    const r = (e ? Math[e] : Math.trunc)(t);
    return r === 0 ? 0 : r;
  };
}
function au(e) {
  const t = ge(e), n = t.getMonth();
  return t.setFullYear(t.getFullYear(), n + 1, 0), t.setHours(23, 59, 59, 999), t;
}
function bt(e) {
  const t = ge(e);
  return t.setDate(1), t.setHours(0, 0, 0, 0), t;
}
function Iv(e) {
  const t = ge(e), n = xt(e, 0);
  return n.setFullYear(t.getFullYear(), 0, 1), n.setHours(0, 0, 0, 0), n;
}
function su(e, t) {
  var s, c, u, d;
  const n = Qr(), r = (t == null ? void 0 : t.weekStartsOn) ?? ((c = (s = t == null ? void 0 : t.locale) == null ? void 0 : s.options) == null ? void 0 : c.weekStartsOn) ?? n.weekStartsOn ?? ((d = (u = n.locale) == null ? void 0 : u.options) == null ? void 0 : d.weekStartsOn) ?? 0, o = ge(e), i = o.getDay(), a = (i < r ? -7 : 0) + 6 - (i - r);
  return o.setDate(o.getDate() + a), o.setHours(23, 59, 59, 999), o;
}
function Fv(e) {
  return su(e, { weekStartsOn: 1 });
}
const XP = {
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
}, qP = (e, t, n) => {
  let r;
  const o = XP[e];
  return typeof o == "string" ? r = o : t === 1 ? r = o.one : r = o.other.replace("{{count}}", t.toString()), n != null && n.addSuffix ? n.comparison && n.comparison > 0 ? "in " + r : r + " ago" : r;
};
function Hs(e) {
  return (t = {}) => {
    const n = t.width ? String(t.width) : e.defaultWidth;
    return e.formats[n] || e.formats[e.defaultWidth];
  };
}
const ZP = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, QP = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, JP = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, eM = {
  date: Hs({
    formats: ZP,
    defaultWidth: "full"
  }),
  time: Hs({
    formats: QP,
    defaultWidth: "full"
  }),
  dateTime: Hs({
    formats: JP,
    defaultWidth: "full"
  })
}, tM = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, nM = (e, t, n, r) => tM[e];
function so(e) {
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
const rM = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, oM = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, iM = {
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
}, aM = {
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
}, sM = {
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
}, lM = {
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
}, cM = (e, t) => {
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
}, uM = {
  ordinalNumber: cM,
  era: so({
    values: rM,
    defaultWidth: "wide"
  }),
  quarter: so({
    values: oM,
    defaultWidth: "wide",
    argumentCallback: (e) => e - 1
  }),
  month: so({
    values: iM,
    defaultWidth: "wide"
  }),
  day: so({
    values: aM,
    defaultWidth: "wide"
  }),
  dayPeriod: so({
    values: sM,
    defaultWidth: "wide",
    formattingValues: lM,
    defaultFormattingWidth: "wide"
  })
};
function lo(e) {
  return (t, n = {}) => {
    const r = n.width, o = r && e.matchPatterns[r] || e.matchPatterns[e.defaultMatchWidth], i = t.match(o);
    if (!i)
      return null;
    const a = i[0], s = r && e.parsePatterns[r] || e.parsePatterns[e.defaultParseWidth], c = Array.isArray(s) ? fM(s, (f) => f.test(a)) : (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any -- I challange you to fix the type
      dM(s, (f) => f.test(a))
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
function dM(e, t) {
  for (const n in e)
    if (Object.prototype.hasOwnProperty.call(e, n) && t(e[n]))
      return n;
}
function fM(e, t) {
  for (let n = 0; n < e.length; n++)
    if (t(e[n]))
      return n;
}
function hM(e) {
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
const mM = /^(\d+)(th|st|nd|rd)?/i, pM = /\d+/i, vM = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, gM = {
  any: [/^b/i, /^(a|c)/i]
}, yM = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, bM = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, wM = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, xM = {
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
}, CM = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, SM = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, NM = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, PM = {
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
}, MM = {
  ordinalNumber: hM({
    matchPattern: mM,
    parsePattern: pM,
    valueCallback: (e) => parseInt(e, 10)
  }),
  era: lo({
    matchPatterns: vM,
    defaultMatchWidth: "wide",
    parsePatterns: gM,
    defaultParseWidth: "any"
  }),
  quarter: lo({
    matchPatterns: yM,
    defaultMatchWidth: "wide",
    parsePatterns: bM,
    defaultParseWidth: "any",
    valueCallback: (e) => e + 1
  }),
  month: lo({
    matchPatterns: wM,
    defaultMatchWidth: "wide",
    parsePatterns: xM,
    defaultParseWidth: "any"
  }),
  day: lo({
    matchPatterns: CM,
    defaultMatchWidth: "wide",
    parsePatterns: SM,
    defaultParseWidth: "any"
  }),
  dayPeriod: lo({
    matchPatterns: NM,
    defaultMatchWidth: "any",
    parsePatterns: PM,
    defaultParseWidth: "any"
  })
}, lu = {
  code: "en-US",
  formatDistance: qP,
  formatLong: eM,
  formatRelative: nM,
  localize: uM,
  match: MM,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
function EM(e) {
  const t = ge(e);
  return Qt(t, Iv(t)) + 1;
}
function Vv(e) {
  const t = ge(e), n = +sr(t) - +BP(t);
  return Math.round(n / ou) + 1;
}
function $v(e, t) {
  var d, f, h, v;
  const n = ge(e), r = n.getFullYear(), o = Qr(), i = (t == null ? void 0 : t.firstWeekContainsDate) ?? ((f = (d = t == null ? void 0 : t.locale) == null ? void 0 : d.options) == null ? void 0 : f.firstWeekContainsDate) ?? o.firstWeekContainsDate ?? ((v = (h = o.locale) == null ? void 0 : h.options) == null ? void 0 : v.firstWeekContainsDate) ?? 1, a = xt(e, 0);
  a.setFullYear(r + 1, 0, i), a.setHours(0, 0, 0, 0);
  const s = nn(a, t), c = xt(e, 0);
  c.setFullYear(r, 0, i), c.setHours(0, 0, 0, 0);
  const u = nn(c, t);
  return n.getTime() >= s.getTime() ? r + 1 : n.getTime() >= u.getTime() ? r : r - 1;
}
function TM(e, t) {
  var s, c, u, d;
  const n = Qr(), r = (t == null ? void 0 : t.firstWeekContainsDate) ?? ((c = (s = t == null ? void 0 : t.locale) == null ? void 0 : s.options) == null ? void 0 : c.firstWeekContainsDate) ?? n.firstWeekContainsDate ?? ((d = (u = n.locale) == null ? void 0 : u.options) == null ? void 0 : d.firstWeekContainsDate) ?? 1, o = $v(e, t), i = xt(e, 0);
  return i.setFullYear(o, 0, r), i.setHours(0, 0, 0, 0), nn(i, t);
}
function Bv(e, t) {
  const n = ge(e), r = +nn(n, t) - +TM(n, t);
  return Math.round(r / ou) + 1;
}
function Re(e, t) {
  const n = e < 0 ? "-" : "", r = Math.abs(e).toString().padStart(t, "0");
  return n + r;
}
const En = {
  // Year
  y(e, t) {
    const n = e.getFullYear(), r = n > 0 ? n : 1 - n;
    return Re(t === "yy" ? r % 100 : r, t.length);
  },
  // Month
  M(e, t) {
    const n = e.getMonth();
    return t === "M" ? String(n + 1) : Re(n + 1, 2);
  },
  // Day of the month
  d(e, t) {
    return Re(e.getDate(), t.length);
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
    return Re(e.getHours() % 12 || 12, t.length);
  },
  // Hour [0-23]
  H(e, t) {
    return Re(e.getHours(), t.length);
  },
  // Minute
  m(e, t) {
    return Re(e.getMinutes(), t.length);
  },
  // Second
  s(e, t) {
    return Re(e.getSeconds(), t.length);
  },
  // Fraction of second
  S(e, t) {
    const n = t.length, r = e.getMilliseconds(), o = Math.trunc(
      r * Math.pow(10, n - 3)
    );
    return Re(o, t.length);
  }
}, br = {
  am: "am",
  pm: "pm",
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
}, uh = {
  // Era
  G: function(e, t, n) {
    const r = e.getFullYear() > 0 ? 1 : 0;
    switch (t) {
      // AD, BC
      case "G":
      case "GG":
      case "GGG":
        return n.era(r, { width: "abbreviated" });
      // A, B
      case "GGGGG":
        return n.era(r, { width: "narrow" });
      // Anno Domini, Before Christ
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
    return En.y(e, t);
  },
  // Local week-numbering year
  Y: function(e, t, n, r) {
    const o = $v(e, r), i = o > 0 ? o : 1 - o;
    if (t === "YY") {
      const a = i % 100;
      return Re(a, 2);
    }
    return t === "Yo" ? n.ordinalNumber(i, { unit: "year" }) : Re(i, t.length);
  },
  // ISO week-numbering year
  R: function(e, t) {
    const n = Lv(e);
    return Re(n, t.length);
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
    return Re(n, t.length);
  },
  // Quarter
  Q: function(e, t, n) {
    const r = Math.ceil((e.getMonth() + 1) / 3);
    switch (t) {
      // 1, 2, 3, 4
      case "Q":
        return String(r);
      // 01, 02, 03, 04
      case "QQ":
        return Re(r, 2);
      // 1st, 2nd, 3rd, 4th
      case "Qo":
        return n.ordinalNumber(r, { unit: "quarter" });
      // Q1, Q2, Q3, Q4
      case "QQQ":
        return n.quarter(r, {
          width: "abbreviated",
          context: "formatting"
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)
      case "QQQQQ":
        return n.quarter(r, {
          width: "narrow",
          context: "formatting"
        });
      // 1st quarter, 2nd quarter, ...
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
      // 1, 2, 3, 4
      case "q":
        return String(r);
      // 01, 02, 03, 04
      case "qq":
        return Re(r, 2);
      // 1st, 2nd, 3rd, 4th
      case "qo":
        return n.ordinalNumber(r, { unit: "quarter" });
      // Q1, Q2, Q3, Q4
      case "qqq":
        return n.quarter(r, {
          width: "abbreviated",
          context: "standalone"
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)
      case "qqqqq":
        return n.quarter(r, {
          width: "narrow",
          context: "standalone"
        });
      // 1st quarter, 2nd quarter, ...
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
        return En.M(e, t);
      // 1st, 2nd, ..., 12th
      case "Mo":
        return n.ordinalNumber(r + 1, { unit: "month" });
      // Jan, Feb, ..., Dec
      case "MMM":
        return n.month(r, {
          width: "abbreviated",
          context: "formatting"
        });
      // J, F, ..., D
      case "MMMMM":
        return n.month(r, {
          width: "narrow",
          context: "formatting"
        });
      // January, February, ..., December
      case "MMMM":
      default:
        return n.month(r, { width: "wide", context: "formatting" });
    }
  },
  // Stand-alone month
  L: function(e, t, n) {
    const r = e.getMonth();
    switch (t) {
      // 1, 2, ..., 12
      case "L":
        return String(r + 1);
      // 01, 02, ..., 12
      case "LL":
        return Re(r + 1, 2);
      // 1st, 2nd, ..., 12th
      case "Lo":
        return n.ordinalNumber(r + 1, { unit: "month" });
      // Jan, Feb, ..., Dec
      case "LLL":
        return n.month(r, {
          width: "abbreviated",
          context: "standalone"
        });
      // J, F, ..., D
      case "LLLLL":
        return n.month(r, {
          width: "narrow",
          context: "standalone"
        });
      // January, February, ..., December
      case "LLLL":
      default:
        return n.month(r, { width: "wide", context: "standalone" });
    }
  },
  // Local week of year
  w: function(e, t, n, r) {
    const o = Bv(e, r);
    return t === "wo" ? n.ordinalNumber(o, { unit: "week" }) : Re(o, t.length);
  },
  // ISO week of year
  I: function(e, t, n) {
    const r = Vv(e);
    return t === "Io" ? n.ordinalNumber(r, { unit: "week" }) : Re(r, t.length);
  },
  // Day of the month
  d: function(e, t, n) {
    return t === "do" ? n.ordinalNumber(e.getDate(), { unit: "date" }) : En.d(e, t);
  },
  // Day of year
  D: function(e, t, n) {
    const r = EM(e);
    return t === "Do" ? n.ordinalNumber(r, { unit: "dayOfYear" }) : Re(r, t.length);
  },
  // Day of week
  E: function(e, t, n) {
    const r = e.getDay();
    switch (t) {
      // Tue
      case "E":
      case "EE":
      case "EEE":
        return n.day(r, {
          width: "abbreviated",
          context: "formatting"
        });
      // T
      case "EEEEE":
        return n.day(r, {
          width: "narrow",
          context: "formatting"
        });
      // Tu
      case "EEEEEE":
        return n.day(r, {
          width: "short",
          context: "formatting"
        });
      // Tuesday
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
      // Numerical value (Nth day of week with current locale or weekStartsOn)
      case "e":
        return String(i);
      // Padded numerical value
      case "ee":
        return Re(i, 2);
      // 1st, 2nd, ..., 7th
      case "eo":
        return n.ordinalNumber(i, { unit: "day" });
      case "eee":
        return n.day(o, {
          width: "abbreviated",
          context: "formatting"
        });
      // T
      case "eeeee":
        return n.day(o, {
          width: "narrow",
          context: "formatting"
        });
      // Tu
      case "eeeeee":
        return n.day(o, {
          width: "short",
          context: "formatting"
        });
      // Tuesday
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
      // Numerical value (same as in `e`)
      case "c":
        return String(i);
      // Padded numerical value
      case "cc":
        return Re(i, t.length);
      // 1st, 2nd, ..., 7th
      case "co":
        return n.ordinalNumber(i, { unit: "day" });
      case "ccc":
        return n.day(o, {
          width: "abbreviated",
          context: "standalone"
        });
      // T
      case "ccccc":
        return n.day(o, {
          width: "narrow",
          context: "standalone"
        });
      // Tu
      case "cccccc":
        return n.day(o, {
          width: "short",
          context: "standalone"
        });
      // Tuesday
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
      // 2
      case "i":
        return String(o);
      // 02
      case "ii":
        return Re(o, t.length);
      // 2nd
      case "io":
        return n.ordinalNumber(o, { unit: "day" });
      // Tue
      case "iii":
        return n.day(r, {
          width: "abbreviated",
          context: "formatting"
        });
      // T
      case "iiiii":
        return n.day(r, {
          width: "narrow",
          context: "formatting"
        });
      // Tu
      case "iiiiii":
        return n.day(r, {
          width: "short",
          context: "formatting"
        });
      // Tuesday
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
    switch (r === 12 ? o = br.noon : r === 0 ? o = br.midnight : o = r / 12 >= 1 ? "pm" : "am", t) {
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
    switch (r >= 17 ? o = br.evening : r >= 12 ? o = br.afternoon : r >= 4 ? o = br.morning : o = br.night, t) {
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
    return En.h(e, t);
  },
  // Hour [0-23]
  H: function(e, t, n) {
    return t === "Ho" ? n.ordinalNumber(e.getHours(), { unit: "hour" }) : En.H(e, t);
  },
  // Hour [0-11]
  K: function(e, t, n) {
    const r = e.getHours() % 12;
    return t === "Ko" ? n.ordinalNumber(r, { unit: "hour" }) : Re(r, t.length);
  },
  // Hour [1-24]
  k: function(e, t, n) {
    let r = e.getHours();
    return r === 0 && (r = 24), t === "ko" ? n.ordinalNumber(r, { unit: "hour" }) : Re(r, t.length);
  },
  // Minute
  m: function(e, t, n) {
    return t === "mo" ? n.ordinalNumber(e.getMinutes(), { unit: "minute" }) : En.m(e, t);
  },
  // Second
  s: function(e, t, n) {
    return t === "so" ? n.ordinalNumber(e.getSeconds(), { unit: "second" }) : En.s(e, t);
  },
  // Fraction of second
  S: function(e, t) {
    return En.S(e, t);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function(e, t, n) {
    const r = e.getTimezoneOffset();
    if (r === 0)
      return "Z";
    switch (t) {
      // Hours and optional minutes
      case "X":
        return fh(r);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XX`
      case "XXXX":
      case "XX":
        return Zn(r);
      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XXX`
      case "XXXXX":
      case "XXX":
      // Hours and minutes with `:` delimiter
      default:
        return Zn(r, ":");
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function(e, t, n) {
    const r = e.getTimezoneOffset();
    switch (t) {
      // Hours and optional minutes
      case "x":
        return fh(r);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xx`
      case "xxxx":
      case "xx":
        return Zn(r);
      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xxx`
      case "xxxxx":
      case "xxx":
      // Hours and minutes with `:` delimiter
      default:
        return Zn(r, ":");
    }
  },
  // Timezone (GMT)
  O: function(e, t, n) {
    const r = e.getTimezoneOffset();
    switch (t) {
      // Short
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + dh(r, ":");
      // Long
      case "OOOO":
      default:
        return "GMT" + Zn(r, ":");
    }
  },
  // Timezone (specific non-location)
  z: function(e, t, n) {
    const r = e.getTimezoneOffset();
    switch (t) {
      // Short
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + dh(r, ":");
      // Long
      case "zzzz":
      default:
        return "GMT" + Zn(r, ":");
    }
  },
  // Seconds timestamp
  t: function(e, t, n) {
    const r = Math.trunc(e.getTime() / 1e3);
    return Re(r, t.length);
  },
  // Milliseconds timestamp
  T: function(e, t, n) {
    const r = e.getTime();
    return Re(r, t.length);
  }
};
function dh(e, t = "") {
  const n = e > 0 ? "-" : "+", r = Math.abs(e), o = Math.trunc(r / 60), i = r % 60;
  return i === 0 ? n + String(o) : n + String(o) + t + Re(i, 2);
}
function fh(e, t) {
  return e % 60 === 0 ? (e > 0 ? "-" : "+") + Re(Math.abs(e) / 60, 2) : Zn(e, t);
}
function Zn(e, t = "") {
  const n = e > 0 ? "-" : "+", r = Math.abs(e), o = Re(Math.trunc(r / 60), 2), i = Re(r % 60, 2);
  return n + o + t + i;
}
const hh = (e, t) => {
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
}, Wv = (e, t) => {
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
}, kM = (e, t) => {
  const n = e.match(/(P+)(p+)?/) || [], r = n[1], o = n[2];
  if (!o)
    return hh(e, t);
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
  return i.replace("{{date}}", hh(r, t)).replace("{{time}}", Wv(o, t));
}, RM = {
  p: Wv,
  P: kM
}, DM = /^D+$/, AM = /^Y+$/, _M = ["D", "DD", "YY", "YYYY"];
function OM(e) {
  return DM.test(e);
}
function LM(e) {
  return AM.test(e);
}
function IM(e, t, n) {
  const r = FM(e, t, n);
  if (console.warn(r), _M.includes(e)) throw new RangeError(r);
}
function FM(e, t, n) {
  const r = e[0] === "Y" ? "years" : "days of the month";
  return `Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
const VM = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, $M = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, BM = /^'([^]*?)'?$/, WM = /''/g, jM = /[a-zA-Z]/;
function an(e, t, n) {
  var d, f, h, v, g, p, y, b;
  const r = Qr(), o = (n == null ? void 0 : n.locale) ?? r.locale ?? lu, i = (n == null ? void 0 : n.firstWeekContainsDate) ?? ((f = (d = n == null ? void 0 : n.locale) == null ? void 0 : d.options) == null ? void 0 : f.firstWeekContainsDate) ?? r.firstWeekContainsDate ?? ((v = (h = r.locale) == null ? void 0 : h.options) == null ? void 0 : v.firstWeekContainsDate) ?? 1, a = (n == null ? void 0 : n.weekStartsOn) ?? ((p = (g = n == null ? void 0 : n.locale) == null ? void 0 : g.options) == null ? void 0 : p.weekStartsOn) ?? r.weekStartsOn ?? ((b = (y = r.locale) == null ? void 0 : y.options) == null ? void 0 : b.weekStartsOn) ?? 0, s = ge(e);
  if (!GP(s))
    throw new RangeError("Invalid time value");
  let c = t.match($M).map((w) => {
    const x = w[0];
    if (x === "p" || x === "P") {
      const C = RM[x];
      return C(w, o.formatLong);
    }
    return w;
  }).join("").match(VM).map((w) => {
    if (w === "''")
      return { isToken: !1, value: "'" };
    const x = w[0];
    if (x === "'")
      return { isToken: !1, value: UM(w) };
    if (uh[x])
      return { isToken: !0, value: w };
    if (x.match(jM))
      throw new RangeError(
        "Format string contains an unescaped latin alphabet character `" + x + "`"
      );
    return { isToken: !1, value: w };
  });
  o.localize.preprocessor && (c = o.localize.preprocessor(s, c));
  const u = {
    firstWeekContainsDate: i,
    weekStartsOn: a,
    locale: o
  };
  return c.map((w) => {
    if (!w.isToken) return w.value;
    const x = w.value;
    (!(n != null && n.useAdditionalWeekYearTokens) && LM(x) || !(n != null && n.useAdditionalDayOfYearTokens) && OM(x)) && IM(x, t, String(e));
    const C = uh[x[0]];
    return C(s, x, o.localize, u);
  }).join("");
}
function UM(e) {
  const t = e.match(BM);
  return t ? t[1].replace(WM, "'") : e;
}
function HM(e, t, n) {
  const r = Qr(), o = (n == null ? void 0 : n.locale) ?? r.locale ?? lu, i = HP(e, t);
  if (isNaN(i))
    throw new RangeError("Invalid time value");
  const a = Object.assign({}, n, {
    addSuffix: n == null ? void 0 : n.addSuffix,
    comparison: i
  });
  let s, c;
  i > 0 ? (s = ge(t), c = ge(e)) : (s = ge(e), c = ge(t));
  const u = KP((n == null ? void 0 : n.roundingMethod) ?? "round"), d = c.getTime() - s.getTime(), f = d / ah, h = Ur(c) - Ur(s), v = (d - h) / ah, g = n == null ? void 0 : n.unit;
  let p;
  if (g ? p = g : f < 1 ? p = "second" : f < 60 ? p = "minute" : f < ch ? p = "hour" : v < lh ? p = "day" : v < sh ? p = "month" : p = "year", p === "second") {
    const y = u(d / 1e3);
    return o.formatDistance("xSeconds", y, a);
  } else if (p === "minute") {
    const y = u(f);
    return o.formatDistance("xMinutes", y, a);
  } else if (p === "hour") {
    const y = u(f / 60);
    return o.formatDistance("xHours", y, a);
  } else if (p === "day") {
    const y = u(v / ch);
    return o.formatDistance("xDays", y, a);
  } else if (p === "month") {
    const y = u(v / lh);
    return y === 12 && g !== "month" ? o.formatDistance("xYears", 1, a) : o.formatDistance("xMonths", y, a);
  } else {
    const y = u(v / sh);
    return o.formatDistance("xYears", y, a);
  }
}
function zM(e, t) {
  return HM(e, zP(e), t);
}
function GM(e) {
  const t = ge(e), n = t.getFullYear(), r = t.getMonth(), o = xt(e, 0);
  return o.setFullYear(n, r + 1, 0), o.setHours(0, 0, 0, 0), o.getDate();
}
function YM(e) {
  return Math.trunc(+ge(e) / 1e3);
}
function KM(e) {
  const t = ge(e), n = t.getMonth();
  return t.setFullYear(t.getFullYear(), n + 1, 0), t.setHours(0, 0, 0, 0), t;
}
function XM(e, t) {
  return YP(
    KM(e),
    bt(e),
    t
  ) + 1;
}
function Wl(e, t) {
  const n = ge(e), r = ge(t);
  return n.getTime() > r.getTime();
}
function jv(e, t) {
  const n = ge(e), r = ge(t);
  return +n < +r;
}
function cu(e, t) {
  const n = ge(e), r = ge(t);
  return n.getFullYear() === r.getFullYear() && n.getMonth() === r.getMonth();
}
function qM(e, t) {
  const n = ge(e), r = ge(t);
  return n.getFullYear() === r.getFullYear();
}
function zs(e, t) {
  return dt(e, -t);
}
function Gs(e, t) {
  const n = ge(e), r = n.getFullYear(), o = n.getDate(), i = xt(e, 0);
  i.setFullYear(r, t, 15), i.setHours(0, 0, 0, 0);
  const a = GM(i);
  return n.setMonth(t, Math.min(o, a)), n;
}
function mh(e, t) {
  const n = ge(e);
  return isNaN(+n) ? xt(e, NaN) : (n.setFullYear(t), n);
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
function ZM(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
}
function Uv(e, t, n) {
  for (var r = 0, o = t.length, i; r < o; r++)
    (i || !(r in t)) && (i || (i = Array.prototype.slice.call(t, 0, r)), i[r] = t[r]);
  return e.concat(i || Array.prototype.slice.call(t));
}
function ai(e) {
  return e.mode === "multiple";
}
function si(e) {
  return e.mode === "range";
}
function Ka(e) {
  return e.mode === "single";
}
var QM = {
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
function JM(e, t) {
  return an(e, "LLLL y", t);
}
function eE(e, t) {
  return an(e, "d", t);
}
function tE(e, t) {
  return an(e, "LLLL", t);
}
function nE(e) {
  return "".concat(e);
}
function rE(e, t) {
  return an(e, "cccccc", t);
}
function oE(e, t) {
  return an(e, "yyyy", t);
}
var iE = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  formatCaption: JM,
  formatDay: eE,
  formatMonthCaption: tE,
  formatWeekNumber: nE,
  formatWeekdayName: rE,
  formatYearCaption: oE
}), aE = function(e, t, n) {
  return an(e, "do MMMM (EEEE)", n);
}, sE = function() {
  return "Month: ";
}, lE = function() {
  return "Go to next month";
}, cE = function() {
  return "Go to previous month";
}, uE = function(e, t) {
  return an(e, "cccc", t);
}, dE = function(e) {
  return "Week n. ".concat(e);
}, fE = function() {
  return "Year: ";
}, hE = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  labelDay: aE,
  labelMonthDropdown: sE,
  labelNext: lE,
  labelPrevious: cE,
  labelWeekNumber: dE,
  labelWeekday: uE,
  labelYearDropdown: fE
});
function mE() {
  var e = "buttons", t = QM, n = lu, r = {}, o = {}, i = 1, a = {}, s = /* @__PURE__ */ new Date();
  return {
    captionLayout: e,
    classNames: t,
    formatters: iE,
    labels: hE,
    locale: n,
    modifiersClassNames: r,
    modifiers: o,
    numberOfMonths: i,
    styles: a,
    today: s,
    mode: "default"
  };
}
function pE(e) {
  var t = e.fromYear, n = e.toYear, r = e.fromMonth, o = e.toMonth, i = e.fromDate, a = e.toDate;
  return r ? i = bt(r) : t && (i = new Date(t, 0, 1)), o ? a = au(o) : n && (a = new Date(n, 11, 31)), {
    fromDate: i ? jr(i) : void 0,
    toDate: a ? jr(a) : void 0
  };
}
var Hv = St(void 0);
function vE(e) {
  var t, n = e.initialProps, r = mE(), o = pE(n), i = o.fromDate, a = o.toDate, s = (t = n.captionLayout) !== null && t !== void 0 ? t : r.captionLayout;
  s !== "buttons" && (!i || !a) && (s = "buttons");
  var c;
  (Ka(n) || ai(n) || si(n)) && (c = n.onSelect);
  var u = pe(pe(pe({}, r), n), { captionLayout: s, classNames: pe(pe({}, r.classNames), n.classNames), components: pe({}, n.components), formatters: pe(pe({}, r.formatters), n.formatters), fromDate: i, labels: pe(pe({}, r.labels), n.labels), mode: n.mode || r.mode, modifiers: pe(pe({}, r.modifiers), n.modifiers), modifiersClassNames: pe(pe({}, r.modifiersClassNames), n.modifiersClassNames), onSelect: c, styles: pe(pe({}, r.styles), n.styles), toDate: a });
  return l(Hv.Provider, { value: u, children: e.children });
}
function Le() {
  var e = Oe(Hv);
  if (!e)
    throw new Error("useDayPicker must be used within a DayPickerProvider.");
  return e;
}
function zv(e) {
  var t = Le(), n = t.locale, r = t.classNames, o = t.styles, i = t.formatters.formatCaption;
  return l("div", { className: r.caption_label, style: o.caption_label, "aria-live": "polite", role: "presentation", id: e.id, children: i(e.displayMonth, { locale: n }) });
}
function gE(e) {
  return l("svg", pe({ width: "8px", height: "8px", viewBox: "0 0 120 120", "data-testid": "iconDropdown" }, e, { children: l("path", { d: "M4.22182541,48.2218254 C8.44222828,44.0014225 15.2388494,43.9273804 19.5496459,47.9996989 L19.7781746,48.2218254 L60,88.443 L100.221825,48.2218254 C104.442228,44.0014225 111.238849,43.9273804 115.549646,47.9996989 L115.778175,48.2218254 C119.998577,52.4422283 120.07262,59.2388494 116.000301,63.5496459 L115.778175,63.7781746 L67.7781746,111.778175 C63.5577717,115.998577 56.7611506,116.07262 52.4503541,112.000301 L52.2218254,111.778175 L4.22182541,63.7781746 C-0.0739418023,59.4824074 -0.0739418023,52.5175926 4.22182541,48.2218254 Z", fill: "currentColor", fillRule: "nonzero" }) }));
}
function Gv(e) {
  var t, n, r = e.onChange, o = e.value, i = e.children, a = e.caption, s = e.className, c = e.style, u = Le(), d = (n = (t = u.components) === null || t === void 0 ? void 0 : t.IconDropdown) !== null && n !== void 0 ? n : gE;
  return S("div", { className: s, style: c, children: [l("span", { className: u.classNames.vhidden, children: e["aria-label"] }), l("select", { name: e.name, "aria-label": e["aria-label"], className: u.classNames.dropdown, style: u.styles.dropdown, value: o, onChange: r, children: i }), S("div", { className: u.classNames.caption_label, style: u.styles.caption_label, "aria-hidden": "true", children: [a, l(d, { className: u.classNames.dropdown_icon, style: u.styles.dropdown_icon })] })] });
}
function yE(e) {
  var t, n = Le(), r = n.fromDate, o = n.toDate, i = n.styles, a = n.locale, s = n.formatters.formatMonthCaption, c = n.classNames, u = n.components, d = n.labels.labelMonthDropdown;
  if (!r)
    return l(we, {});
  if (!o)
    return l(we, {});
  var f = [];
  if (qM(r, o))
    for (var h = bt(r), v = r.getMonth(); v <= o.getMonth(); v++)
      f.push(Gs(h, v));
  else
    for (var h = bt(/* @__PURE__ */ new Date()), v = 0; v <= 11; v++)
      f.push(Gs(h, v));
  var g = function(y) {
    var b = Number(y.target.value), w = Gs(bt(e.displayMonth), b);
    e.onChange(w);
  }, p = (t = u == null ? void 0 : u.Dropdown) !== null && t !== void 0 ? t : Gv;
  return l(p, { name: "months", "aria-label": d(), className: c.dropdown_month, style: i.dropdown_month, onChange: g, value: e.displayMonth.getMonth(), caption: s(e.displayMonth, { locale: a }), children: f.map(function(y) {
    return l("option", { value: y.getMonth(), children: s(y, { locale: a }) }, y.getMonth());
  }) });
}
function bE(e) {
  var t, n = e.displayMonth, r = Le(), o = r.fromDate, i = r.toDate, a = r.locale, s = r.styles, c = r.classNames, u = r.components, d = r.formatters.formatYearCaption, f = r.labels.labelYearDropdown, h = [];
  if (!o)
    return l(we, {});
  if (!i)
    return l(we, {});
  for (var v = o.getFullYear(), g = i.getFullYear(), p = v; p <= g; p++)
    h.push(mh(Iv(/* @__PURE__ */ new Date()), p));
  var y = function(w) {
    var x = mh(bt(n), Number(w.target.value));
    e.onChange(x);
  }, b = (t = u == null ? void 0 : u.Dropdown) !== null && t !== void 0 ? t : Gv;
  return l(b, { name: "years", "aria-label": f(), className: c.dropdown_year, style: s.dropdown_year, onChange: y, value: n.getFullYear(), caption: d(n, { locale: a }), children: h.map(function(w) {
    return l("option", { value: w.getFullYear(), children: d(w, { locale: a }) }, w.getFullYear());
  }) });
}
function wE(e, t) {
  var n = Te(e), r = n[0], o = n[1], i = t === void 0 ? r : t;
  return [i, o];
}
function xE(e) {
  var t = e.month, n = e.defaultMonth, r = e.today, o = t || n || r || /* @__PURE__ */ new Date(), i = e.toDate, a = e.fromDate, s = e.numberOfMonths, c = s === void 0 ? 1 : s;
  if (i && Yo(i, o) < 0) {
    var u = -1 * (c - 1);
    o = Gt(i, u);
  }
  return a && Yo(o, a) < 0 && (o = a), bt(o);
}
function CE() {
  var e = Le(), t = xE(e), n = wE(t, e.month), r = n[0], o = n[1], i = function(a) {
    var s;
    if (!e.disableNavigation) {
      var c = bt(a);
      o(c), (s = e.onMonthChange) === null || s === void 0 || s.call(e, c);
    }
  };
  return [r, i];
}
function SE(e, t) {
  for (var n = t.reverseMonths, r = t.numberOfMonths, o = bt(e), i = bt(Gt(o, r)), a = Yo(i, o), s = [], c = 0; c < a; c++) {
    var u = Gt(o, c);
    s.push(u);
  }
  return n && (s = s.reverse()), s;
}
function NE(e, t) {
  if (!t.disableNavigation) {
    var n = t.toDate, r = t.pagedNavigation, o = t.numberOfMonths, i = o === void 0 ? 1 : o, a = r ? i : 1, s = bt(e);
    if (!n)
      return Gt(s, a);
    var c = Yo(n, e);
    if (!(c < i))
      return Gt(s, a);
  }
}
function PE(e, t) {
  if (!t.disableNavigation) {
    var n = t.fromDate, r = t.pagedNavigation, o = t.numberOfMonths, i = o === void 0 ? 1 : o, a = r ? i : 1, s = bt(e);
    if (!n)
      return Gt(s, -a);
    var c = Yo(s, n);
    if (!(c <= 0))
      return Gt(s, -a);
  }
}
var Yv = St(void 0);
function ME(e) {
  var t = Le(), n = CE(), r = n[0], o = n[1], i = SE(r, t), a = NE(r, t), s = PE(r, t), c = function(f) {
    return i.some(function(h) {
      return cu(f, h);
    });
  }, u = function(f, h) {
    c(f) || (h && jv(f, h) ? o(Gt(f, 1 + t.numberOfMonths * -1)) : o(f));
  }, d = {
    currentMonth: r,
    displayMonths: i,
    goToMonth: o,
    goToDate: u,
    previousMonth: s,
    nextMonth: a,
    isDateDisplayed: c
  };
  return l(Yv.Provider, { value: d, children: e.children });
}
function li() {
  var e = Oe(Yv);
  if (!e)
    throw new Error("useNavigation must be used within a NavigationProvider");
  return e;
}
function ph(e) {
  var t, n = Le(), r = n.classNames, o = n.styles, i = n.components, a = li().goToMonth, s = function(d) {
    a(Gt(d, e.displayIndex ? -e.displayIndex : 0));
  }, c = (t = i == null ? void 0 : i.CaptionLabel) !== null && t !== void 0 ? t : zv, u = l(c, { id: e.id, displayMonth: e.displayMonth });
  return S("div", { className: r.caption_dropdowns, style: o.caption_dropdowns, children: [l("div", { className: r.vhidden, children: u }), l(yE, { onChange: s, displayMonth: e.displayMonth }), l(bE, { onChange: s, displayMonth: e.displayMonth })] });
}
function EE(e) {
  return l("svg", pe({ width: "16px", height: "16px", viewBox: "0 0 120 120" }, e, { children: l("path", { d: "M69.490332,3.34314575 C72.6145263,0.218951416 77.6798462,0.218951416 80.8040405,3.34314575 C83.8617626,6.40086786 83.9268205,11.3179931 80.9992143,14.4548388 L80.8040405,14.6568542 L35.461,60 L80.8040405,105.343146 C83.8617626,108.400868 83.9268205,113.317993 80.9992143,116.454839 L80.8040405,116.656854 C77.7463184,119.714576 72.8291931,119.779634 69.6923475,116.852028 L69.490332,116.656854 L18.490332,65.6568542 C15.4326099,62.5991321 15.367552,57.6820069 18.2951583,54.5451612 L18.490332,54.3431458 L69.490332,3.34314575 Z", fill: "currentColor", fillRule: "nonzero" }) }));
}
function TE(e) {
  return l("svg", pe({ width: "16px", height: "16px", viewBox: "0 0 120 120" }, e, { children: l("path", { d: "M49.8040405,3.34314575 C46.6798462,0.218951416 41.6145263,0.218951416 38.490332,3.34314575 C35.4326099,6.40086786 35.367552,11.3179931 38.2951583,14.4548388 L38.490332,14.6568542 L83.8333725,60 L38.490332,105.343146 C35.4326099,108.400868 35.367552,113.317993 38.2951583,116.454839 L38.490332,116.656854 C41.5480541,119.714576 46.4651794,119.779634 49.602025,116.852028 L49.8040405,116.656854 L100.804041,65.6568542 C103.861763,62.5991321 103.926821,57.6820069 100.999214,54.5451612 L100.804041,54.3431458 L49.8040405,3.34314575 Z", fill: "currentColor" }) }));
}
var ma = Z(function(e, t) {
  var n = Le(), r = n.classNames, o = n.styles, i = [r.button_reset, r.button];
  e.className && i.push(e.className);
  var a = i.join(" "), s = pe(pe({}, o.button_reset), o.button);
  return e.style && Object.assign(s, e.style), l("button", pe({}, e, { ref: t, type: "button", className: a, style: s }));
});
function kE(e) {
  var t, n, r = Le(), o = r.dir, i = r.locale, a = r.classNames, s = r.styles, c = r.labels, u = c.labelPrevious, d = c.labelNext, f = r.components;
  if (!e.nextMonth && !e.previousMonth)
    return l(we, {});
  var h = u(e.previousMonth, { locale: i }), v = [
    a.nav_button,
    a.nav_button_previous
  ].join(" "), g = d(e.nextMonth, { locale: i }), p = [
    a.nav_button,
    a.nav_button_next
  ].join(" "), y = (t = f == null ? void 0 : f.IconRight) !== null && t !== void 0 ? t : TE, b = (n = f == null ? void 0 : f.IconLeft) !== null && n !== void 0 ? n : EE;
  return S("div", { className: a.nav, style: s.nav, children: [!e.hidePrevious && l(ma, { name: "previous-month", "aria-label": h, className: v, style: s.nav_button_previous, disabled: !e.previousMonth, onClick: e.onPreviousClick, children: o === "rtl" ? l(y, { className: a.nav_icon, style: s.nav_icon }) : l(b, { className: a.nav_icon, style: s.nav_icon }) }), !e.hideNext && l(ma, { name: "next-month", "aria-label": g, className: p, style: s.nav_button_next, disabled: !e.nextMonth, onClick: e.onNextClick, children: o === "rtl" ? l(b, { className: a.nav_icon, style: s.nav_icon }) : l(y, { className: a.nav_icon, style: s.nav_icon }) })] });
}
function vh(e) {
  var t = Le().numberOfMonths, n = li(), r = n.previousMonth, o = n.nextMonth, i = n.goToMonth, a = n.displayMonths, s = a.findIndex(function(g) {
    return cu(e.displayMonth, g);
  }), c = s === 0, u = s === a.length - 1, d = t > 1 && (c || !u), f = t > 1 && (u || !c), h = function() {
    r && i(r);
  }, v = function() {
    o && i(o);
  };
  return l(kE, { displayMonth: e.displayMonth, hideNext: d, hidePrevious: f, nextMonth: o, previousMonth: r, onPreviousClick: h, onNextClick: v });
}
function RE(e) {
  var t, n = Le(), r = n.classNames, o = n.disableNavigation, i = n.styles, a = n.captionLayout, s = n.components, c = (t = s == null ? void 0 : s.CaptionLabel) !== null && t !== void 0 ? t : zv, u;
  return o ? u = l(c, { id: e.id, displayMonth: e.displayMonth }) : a === "dropdown" ? u = l(ph, { displayMonth: e.displayMonth, id: e.id }) : a === "dropdown-buttons" ? u = S(we, { children: [l(ph, { displayMonth: e.displayMonth, displayIndex: e.displayIndex, id: e.id }), l(vh, { displayMonth: e.displayMonth, displayIndex: e.displayIndex, id: e.id })] }) : u = S(we, { children: [l(c, { id: e.id, displayMonth: e.displayMonth, displayIndex: e.displayIndex }), l(vh, { displayMonth: e.displayMonth, id: e.id })] }), l("div", { className: r.caption, style: i.caption, children: u });
}
function DE(e) {
  var t = Le(), n = t.footer, r = t.styles, o = t.classNames.tfoot;
  return n ? l("tfoot", { className: o, style: r.tfoot, children: l("tr", { children: l("td", { colSpan: 8, children: n }) }) }) : l(we, {});
}
function AE(e, t, n) {
  for (var r = n ? sr(/* @__PURE__ */ new Date()) : nn(/* @__PURE__ */ new Date(), { locale: e, weekStartsOn: t }), o = [], i = 0; i < 7; i++) {
    var a = dt(r, i);
    o.push(a);
  }
  return o;
}
function _E() {
  var e = Le(), t = e.classNames, n = e.styles, r = e.showWeekNumber, o = e.locale, i = e.weekStartsOn, a = e.ISOWeek, s = e.formatters.formatWeekdayName, c = e.labels.labelWeekday, u = AE(o, i, a);
  return S("tr", { style: n.head_row, className: t.head_row, children: [r && l("td", { style: n.head_cell, className: t.head_cell }), u.map(function(d, f) {
    return l("th", { scope: "col", className: t.head_cell, style: n.head_cell, "aria-label": c(d, { locale: o }), children: s(d, { locale: o }) }, f);
  })] });
}
function OE() {
  var e, t = Le(), n = t.classNames, r = t.styles, o = t.components, i = (e = o == null ? void 0 : o.HeadRow) !== null && e !== void 0 ? e : _E;
  return l("thead", { style: r.head, className: n.head, children: l(i, {}) });
}
function LE(e) {
  var t = Le(), n = t.locale, r = t.formatters.formatDay;
  return l(we, { children: r(e.date, { locale: n }) });
}
var uu = St(void 0);
function IE(e) {
  if (!ai(e.initialProps)) {
    var t = {
      selected: void 0,
      modifiers: {
        disabled: []
      }
    };
    return l(uu.Provider, { value: t, children: e.children });
  }
  return l(FE, { initialProps: e.initialProps, children: e.children });
}
function FE(e) {
  var t = e.initialProps, n = e.children, r = t.selected, o = t.min, i = t.max, a = function(u, d, f) {
    var h, v;
    (h = t.onDayClick) === null || h === void 0 || h.call(t, u, d, f);
    var g = !!(d.selected && o && (r == null ? void 0 : r.length) === o);
    if (!g) {
      var p = !!(!d.selected && i && (r == null ? void 0 : r.length) === i);
      if (!p) {
        var y = r ? Uv([], r) : [];
        if (d.selected) {
          var b = y.findIndex(function(w) {
            return yt(u, w);
          });
          y.splice(b, 1);
        } else
          y.push(u);
        (v = t.onSelect) === null || v === void 0 || v.call(t, y, u, d, f);
      }
    }
  }, s = {
    disabled: []
  };
  r && s.disabled.push(function(u) {
    var d = i && r.length > i - 1, f = r.some(function(h) {
      return yt(h, u);
    });
    return !!(d && !f);
  });
  var c = {
    selected: r,
    onDayClick: a,
    modifiers: s
  };
  return l(uu.Provider, { value: c, children: n });
}
function du() {
  var e = Oe(uu);
  if (!e)
    throw new Error("useSelectMultiple must be used within a SelectMultipleProvider");
  return e;
}
function VE(e, t) {
  var n = t || {}, r = n.from, o = n.to;
  return r && o ? yt(o, e) && yt(r, e) ? void 0 : yt(o, e) ? { from: o, to: void 0 } : yt(r, e) ? void 0 : Wl(r, e) ? { from: e, to: o } : { from: r, to: e } : o ? Wl(e, o) ? { from: o, to: e } : { from: e, to: o } : r ? jv(e, r) ? { from: e, to: r } : { from: r, to: e } : { from: e, to: void 0 };
}
var fu = St(void 0);
function $E(e) {
  if (!si(e.initialProps)) {
    var t = {
      selected: void 0,
      modifiers: {
        range_start: [],
        range_end: [],
        range_middle: [],
        disabled: []
      }
    };
    return l(fu.Provider, { value: t, children: e.children });
  }
  return l(BE, { initialProps: e.initialProps, children: e.children });
}
function BE(e) {
  var t = e.initialProps, n = e.children, r = t.selected, o = r || {}, i = o.from, a = o.to, s = t.min, c = t.max, u = function(v, g, p) {
    var y, b;
    (y = t.onDayClick) === null || y === void 0 || y.call(t, v, g, p);
    var w = VE(v, r);
    (b = t.onSelect) === null || b === void 0 || b.call(t, w, v, g, p);
  }, d = {
    range_start: [],
    range_end: [],
    range_middle: [],
    disabled: []
  };
  if (i ? (d.range_start = [i], a ? (d.range_end = [a], yt(i, a) || (d.range_middle = [
    {
      after: i,
      before: a
    }
  ])) : d.range_end = [i]) : a && (d.range_start = [a], d.range_end = [a]), s && (i && !a && d.disabled.push({
    after: zs(i, s - 1),
    before: dt(i, s - 1)
  }), i && a && d.disabled.push({
    after: i,
    before: dt(i, s - 1)
  }), !i && a && d.disabled.push({
    after: zs(a, s - 1),
    before: dt(a, s - 1)
  })), c) {
    if (i && !a && (d.disabled.push({
      before: dt(i, -c + 1)
    }), d.disabled.push({
      after: dt(i, c - 1)
    })), i && a) {
      var f = Qt(a, i) + 1, h = c - f;
      d.disabled.push({
        before: zs(i, h)
      }), d.disabled.push({
        after: dt(a, h)
      });
    }
    !i && a && (d.disabled.push({
      before: dt(a, -c + 1)
    }), d.disabled.push({
      after: dt(a, c - 1)
    }));
  }
  return l(fu.Provider, { value: { selected: r, onDayClick: u, modifiers: d }, children: n });
}
function hu() {
  var e = Oe(fu);
  if (!e)
    throw new Error("useSelectRange must be used within a SelectRangeProvider");
  return e;
}
function zi(e) {
  return Array.isArray(e) ? Uv([], e) : e !== void 0 ? [e] : [];
}
function WE(e) {
  var t = {};
  return Object.entries(e).forEach(function(n) {
    var r = n[0], o = n[1];
    t[r] = zi(o);
  }), t;
}
var Yt;
(function(e) {
  e.Outside = "outside", e.Disabled = "disabled", e.Selected = "selected", e.Hidden = "hidden", e.Today = "today", e.RangeStart = "range_start", e.RangeEnd = "range_end", e.RangeMiddle = "range_middle";
})(Yt || (Yt = {}));
var jE = Yt.Selected, ln = Yt.Disabled, UE = Yt.Hidden, HE = Yt.Today, Ys = Yt.RangeEnd, Ks = Yt.RangeMiddle, Xs = Yt.RangeStart, zE = Yt.Outside;
function GE(e, t, n) {
  var r, o = (r = {}, r[jE] = zi(e.selected), r[ln] = zi(e.disabled), r[UE] = zi(e.hidden), r[HE] = [e.today], r[Ys] = [], r[Ks] = [], r[Xs] = [], r[zE] = [], r);
  return e.fromDate && o[ln].push({ before: e.fromDate }), e.toDate && o[ln].push({ after: e.toDate }), ai(e) ? o[ln] = o[ln].concat(t.modifiers[ln]) : si(e) && (o[ln] = o[ln].concat(n.modifiers[ln]), o[Xs] = n.modifiers[Xs], o[Ks] = n.modifiers[Ks], o[Ys] = n.modifiers[Ys]), o;
}
var Kv = St(void 0);
function YE(e) {
  var t = Le(), n = du(), r = hu(), o = GE(t, n, r), i = WE(t.modifiers), a = pe(pe({}, o), i);
  return l(Kv.Provider, { value: a, children: e.children });
}
function Xv() {
  var e = Oe(Kv);
  if (!e)
    throw new Error("useModifiers must be used within a ModifiersProvider");
  return e;
}
function KE(e) {
  return !!(e && typeof e == "object" && "before" in e && "after" in e);
}
function XE(e) {
  return !!(e && typeof e == "object" && "from" in e);
}
function qE(e) {
  return !!(e && typeof e == "object" && "after" in e);
}
function ZE(e) {
  return !!(e && typeof e == "object" && "before" in e);
}
function QE(e) {
  return !!(e && typeof e == "object" && "dayOfWeek" in e);
}
function JE(e, t) {
  var n, r = t.from, o = t.to;
  if (r && o) {
    var i = Qt(o, r) < 0;
    i && (n = [o, r], r = n[0], o = n[1]);
    var a = Qt(e, r) >= 0 && Qt(o, e) >= 0;
    return a;
  }
  return o ? yt(o, e) : r ? yt(r, e) : !1;
}
function eT(e) {
  return iu(e);
}
function tT(e) {
  return Array.isArray(e) && e.every(iu);
}
function nT(e, t) {
  return t.some(function(n) {
    if (typeof n == "boolean")
      return n;
    if (eT(n))
      return yt(e, n);
    if (tT(n))
      return n.includes(e);
    if (XE(n))
      return JE(e, n);
    if (QE(n))
      return n.dayOfWeek.includes(e.getDay());
    if (KE(n)) {
      var r = Qt(n.before, e), o = Qt(n.after, e), i = r > 0, a = o < 0, s = Wl(n.before, n.after);
      return s ? a && i : i || a;
    }
    return qE(n) ? Qt(e, n.after) > 0 : ZE(n) ? Qt(n.before, e) > 0 : typeof n == "function" ? n(e) : !1;
  });
}
function mu(e, t, n) {
  var r = Object.keys(t).reduce(function(i, a) {
    var s = t[a];
    return nT(e, s) && i.push(a), i;
  }, []), o = {};
  return r.forEach(function(i) {
    return o[i] = !0;
  }), n && !cu(e, n) && (o.outside = !0), o;
}
function rT(e, t) {
  for (var n = bt(e[0]), r = au(e[e.length - 1]), o, i, a = n; a <= r; ) {
    var s = mu(a, t), c = !s.disabled && !s.hidden;
    if (!c) {
      a = dt(a, 1);
      continue;
    }
    if (s.selected)
      return a;
    s.today && !i && (i = a), o || (o = a), a = dt(a, 1);
  }
  return i || o;
}
var oT = 365;
function qv(e, t) {
  var n = t.moveBy, r = t.direction, o = t.context, i = t.modifiers, a = t.retry, s = a === void 0 ? { count: 0, lastFocused: e } : a, c = o.weekStartsOn, u = o.fromDate, d = o.toDate, f = o.locale, h = {
    day: dt,
    week: Bl,
    month: Gt,
    year: WP,
    startOfWeek: function(y) {
      return o.ISOWeek ? sr(y) : nn(y, { locale: f, weekStartsOn: c });
    },
    endOfWeek: function(y) {
      return o.ISOWeek ? Fv(y) : su(y, { locale: f, weekStartsOn: c });
    }
  }, v = h[n](e, r === "after" ? 1 : -1);
  r === "before" && u ? v = jP([u, v]) : r === "after" && d && (v = UP([d, v]));
  var g = !0;
  if (i) {
    var p = mu(v, i);
    g = !p.disabled && !p.hidden;
  }
  return g ? v : s.count > oT ? s.lastFocused : qv(v, {
    moveBy: n,
    direction: r,
    context: o,
    modifiers: i,
    retry: pe(pe({}, s), { count: s.count + 1 })
  });
}
var Zv = St(void 0);
function iT(e) {
  var t = li(), n = Xv(), r = Te(), o = r[0], i = r[1], a = Te(), s = a[0], c = a[1], u = rT(t.displayMonths, n), d = o ?? (s && t.isDateDisplayed(s)) ? s : u, f = function() {
    c(o), i(void 0);
  }, h = function(y) {
    i(y);
  }, v = Le(), g = function(y, b) {
    if (o) {
      var w = qv(o, {
        moveBy: y,
        direction: b,
        context: v,
        modifiers: n
      });
      yt(o, w) || (t.goToDate(w, o), h(w));
    }
  }, p = {
    focusedDay: o,
    focusTarget: d,
    blur: f,
    focus: h,
    focusDayAfter: function() {
      return g("day", "after");
    },
    focusDayBefore: function() {
      return g("day", "before");
    },
    focusWeekAfter: function() {
      return g("week", "after");
    },
    focusWeekBefore: function() {
      return g("week", "before");
    },
    focusMonthBefore: function() {
      return g("month", "before");
    },
    focusMonthAfter: function() {
      return g("month", "after");
    },
    focusYearBefore: function() {
      return g("year", "before");
    },
    focusYearAfter: function() {
      return g("year", "after");
    },
    focusStartOfWeek: function() {
      return g("startOfWeek", "before");
    },
    focusEndOfWeek: function() {
      return g("endOfWeek", "after");
    }
  };
  return l(Zv.Provider, { value: p, children: e.children });
}
function pu() {
  var e = Oe(Zv);
  if (!e)
    throw new Error("useFocusContext must be used within a FocusProvider");
  return e;
}
function aT(e, t) {
  var n = Xv(), r = mu(e, n, t);
  return r;
}
var vu = St(void 0);
function sT(e) {
  if (!Ka(e.initialProps)) {
    var t = {
      selected: void 0
    };
    return l(vu.Provider, { value: t, children: e.children });
  }
  return l(lT, { initialProps: e.initialProps, children: e.children });
}
function lT(e) {
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
  return l(vu.Provider, { value: o, children: n });
}
function Qv() {
  var e = Oe(vu);
  if (!e)
    throw new Error("useSelectSingle must be used within a SelectSingleProvider");
  return e;
}
function cT(e, t) {
  var n = Le(), r = Qv(), o = du(), i = hu(), a = pu(), s = a.focusDayAfter, c = a.focusDayBefore, u = a.focusWeekAfter, d = a.focusWeekBefore, f = a.blur, h = a.focus, v = a.focusMonthBefore, g = a.focusMonthAfter, p = a.focusYearBefore, y = a.focusYearAfter, b = a.focusStartOfWeek, w = a.focusEndOfWeek, x = function($) {
    var W, K, E, P;
    Ka(n) ? (W = r.onDayClick) === null || W === void 0 || W.call(r, e, t, $) : ai(n) ? (K = o.onDayClick) === null || K === void 0 || K.call(o, e, t, $) : si(n) ? (E = i.onDayClick) === null || E === void 0 || E.call(i, e, t, $) : (P = n.onDayClick) === null || P === void 0 || P.call(n, e, t, $);
  }, C = function($) {
    var W;
    h(e), (W = n.onDayFocus) === null || W === void 0 || W.call(n, e, t, $);
  }, M = function($) {
    var W;
    f(), (W = n.onDayBlur) === null || W === void 0 || W.call(n, e, t, $);
  }, I = function($) {
    var W;
    (W = n.onDayMouseEnter) === null || W === void 0 || W.call(n, e, t, $);
  }, T = function($) {
    var W;
    (W = n.onDayMouseLeave) === null || W === void 0 || W.call(n, e, t, $);
  }, k = function($) {
    var W;
    (W = n.onDayPointerEnter) === null || W === void 0 || W.call(n, e, t, $);
  }, R = function($) {
    var W;
    (W = n.onDayPointerLeave) === null || W === void 0 || W.call(n, e, t, $);
  }, j = function($) {
    var W;
    (W = n.onDayTouchCancel) === null || W === void 0 || W.call(n, e, t, $);
  }, X = function($) {
    var W;
    (W = n.onDayTouchEnd) === null || W === void 0 || W.call(n, e, t, $);
  }, G = function($) {
    var W;
    (W = n.onDayTouchMove) === null || W === void 0 || W.call(n, e, t, $);
  }, _ = function($) {
    var W;
    (W = n.onDayTouchStart) === null || W === void 0 || W.call(n, e, t, $);
  }, F = function($) {
    var W;
    (W = n.onDayKeyUp) === null || W === void 0 || W.call(n, e, t, $);
  }, V = function($) {
    var W;
    switch ($.key) {
      case "ArrowLeft":
        $.preventDefault(), $.stopPropagation(), n.dir === "rtl" ? s() : c();
        break;
      case "ArrowRight":
        $.preventDefault(), $.stopPropagation(), n.dir === "rtl" ? c() : s();
        break;
      case "ArrowDown":
        $.preventDefault(), $.stopPropagation(), u();
        break;
      case "ArrowUp":
        $.preventDefault(), $.stopPropagation(), d();
        break;
      case "PageUp":
        $.preventDefault(), $.stopPropagation(), $.shiftKey ? p() : v();
        break;
      case "PageDown":
        $.preventDefault(), $.stopPropagation(), $.shiftKey ? y() : g();
        break;
      case "Home":
        $.preventDefault(), $.stopPropagation(), b();
        break;
      case "End":
        $.preventDefault(), $.stopPropagation(), w();
        break;
    }
    (W = n.onDayKeyDown) === null || W === void 0 || W.call(n, e, t, $);
  }, z = {
    onClick: x,
    onFocus: C,
    onBlur: M,
    onKeyDown: V,
    onKeyUp: F,
    onMouseEnter: I,
    onMouseLeave: T,
    onPointerEnter: k,
    onPointerLeave: R,
    onTouchCancel: j,
    onTouchEnd: X,
    onTouchMove: G,
    onTouchStart: _
  };
  return z;
}
function uT() {
  var e = Le(), t = Qv(), n = du(), r = hu(), o = Ka(e) ? t.selected : ai(e) ? n.selected : si(e) ? r.selected : void 0;
  return o;
}
function dT(e) {
  return Object.values(Yt).includes(e);
}
function fT(e, t) {
  var n = [e.classNames.day];
  return Object.keys(t).forEach(function(r) {
    var o = e.modifiersClassNames[r];
    if (o)
      n.push(o);
    else if (dT(r)) {
      var i = e.classNames["day_".concat(r)];
      i && n.push(i);
    }
  }), n;
}
function hT(e, t) {
  var n = pe({}, e.styles.day);
  return Object.keys(t).forEach(function(r) {
    var o;
    n = pe(pe({}, n), (o = e.modifiersStyles) === null || o === void 0 ? void 0 : o[r]);
  }), n;
}
function mT(e, t, n) {
  var r, o, i, a = Le(), s = pu(), c = aT(e, t), u = cT(e, c), d = uT(), f = !!(a.onDayClick || a.mode !== "default");
  We(function() {
    var I;
    c.outside || s.focusedDay && f && yt(s.focusedDay, e) && ((I = n.current) === null || I === void 0 || I.focus());
  }, [
    s.focusedDay,
    e,
    n,
    f,
    c.outside
  ]);
  var h = fT(a, c).join(" "), v = hT(a, c), g = !!(c.outside && !a.showOutsideDays || c.hidden), p = (i = (o = a.components) === null || o === void 0 ? void 0 : o.DayContent) !== null && i !== void 0 ? i : LE, y = l(p, { date: e, displayMonth: t, activeModifiers: c }), b = {
    style: v,
    className: h,
    children: y,
    role: "gridcell"
  }, w = s.focusTarget && yt(s.focusTarget, e) && !c.outside, x = s.focusedDay && yt(s.focusedDay, e), C = pe(pe(pe({}, b), (r = { disabled: c.disabled, role: "gridcell" }, r["aria-selected"] = c.selected, r.tabIndex = x || w ? 0 : -1, r)), u), M = {
    isButton: f,
    isHidden: g,
    activeModifiers: c,
    selectedDays: d,
    buttonProps: C,
    divProps: b
  };
  return M;
}
function pT(e) {
  var t = Ge(null), n = mT(e.date, e.displayMonth, t);
  return n.isHidden ? l("div", { role: "gridcell" }) : n.isButton ? l(ma, pe({ name: "day", ref: t }, n.buttonProps)) : l("div", pe({}, n.divProps));
}
function vT(e) {
  var t = e.number, n = e.dates, r = Le(), o = r.onWeekNumberClick, i = r.styles, a = r.classNames, s = r.locale, c = r.labels.labelWeekNumber, u = r.formatters.formatWeekNumber, d = u(Number(t), { locale: s });
  if (!o)
    return l("span", { className: a.weeknumber, style: i.weeknumber, children: d });
  var f = c(Number(t), { locale: s }), h = function(v) {
    o(t, n, v);
  };
  return l(ma, { name: "week-number", "aria-label": f, className: a.weeknumber, style: i.weeknumber, onClick: h, children: d });
}
function gT(e) {
  var t, n, r = Le(), o = r.styles, i = r.classNames, a = r.showWeekNumber, s = r.components, c = (t = s == null ? void 0 : s.Day) !== null && t !== void 0 ? t : pT, u = (n = s == null ? void 0 : s.WeekNumber) !== null && n !== void 0 ? n : vT, d;
  return a && (d = l("td", { className: i.cell, style: o.cell, children: l(u, { number: e.weekNumber, dates: e.dates }) })), S("tr", { className: i.row, style: o.row, children: [d, e.dates.map(function(f) {
    return l("td", { className: i.cell, style: o.cell, role: "presentation", children: l(c, { displayMonth: e.displayMonth, date: f }) }, YM(f));
  })] });
}
function gh(e, t, n) {
  for (var r = n != null && n.ISOWeek ? Fv(t) : su(t, n), o = n != null && n.ISOWeek ? sr(e) : nn(e, n), i = Qt(r, o), a = [], s = 0; s <= i; s++)
    a.push(dt(o, s));
  var c = a.reduce(function(u, d) {
    var f = n != null && n.ISOWeek ? Vv(d) : Bv(d, n), h = u.find(function(v) {
      return v.weekNumber === f;
    });
    return h ? (h.dates.push(d), u) : (u.push({
      weekNumber: f,
      dates: [d]
    }), u);
  }, []);
  return c;
}
function yT(e, t) {
  var n = gh(bt(e), au(e), t);
  if (t != null && t.useFixedWeeks) {
    var r = XM(e, t);
    if (r < 6) {
      var o = n[n.length - 1], i = o.dates[o.dates.length - 1], a = Bl(i, 6 - r), s = gh(Bl(i, 1), a, t);
      n.push.apply(n, s);
    }
  }
  return n;
}
function bT(e) {
  var t, n, r, o = Le(), i = o.locale, a = o.classNames, s = o.styles, c = o.hideHead, u = o.fixedWeeks, d = o.components, f = o.weekStartsOn, h = o.firstWeekContainsDate, v = o.ISOWeek, g = yT(e.displayMonth, {
    useFixedWeeks: !!u,
    ISOWeek: v,
    locale: i,
    weekStartsOn: f,
    firstWeekContainsDate: h
  }), p = (t = d == null ? void 0 : d.Head) !== null && t !== void 0 ? t : OE, y = (n = d == null ? void 0 : d.Row) !== null && n !== void 0 ? n : gT, b = (r = d == null ? void 0 : d.Footer) !== null && r !== void 0 ? r : DE;
  return S("table", { id: e.id, className: a.table, style: s.table, role: "grid", "aria-labelledby": e["aria-labelledby"], children: [!c && l(p, {}), l("tbody", { className: a.tbody, style: s.tbody, children: g.map(function(w) {
    return l(y, { displayMonth: e.displayMonth, dates: w.dates, weekNumber: w.weekNumber }, w.weekNumber);
  }) }), l(b, { displayMonth: e.displayMonth })] });
}
function wT() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
var xT = wT() ? Pc : We, qs = !1, CT = 0;
function yh() {
  return "react-day-picker-".concat(++CT);
}
function ST(e) {
  var t, n = e ?? (qs ? yh() : null), r = Te(n), o = r[0], i = r[1];
  return xT(function() {
    o === null && i(yh());
  }, []), We(function() {
    qs === !1 && (qs = !0);
  }, []), (t = e ?? o) !== null && t !== void 0 ? t : void 0;
}
function NT(e) {
  var t, n, r = Le(), o = r.dir, i = r.classNames, a = r.styles, s = r.components, c = li().displayMonths, u = ST(r.id ? "".concat(r.id, "-").concat(e.displayIndex) : void 0), d = r.id ? "".concat(r.id, "-grid-").concat(e.displayIndex) : void 0, f = [i.month], h = a.month, v = e.displayIndex === 0, g = e.displayIndex === c.length - 1, p = !v && !g;
  o === "rtl" && (t = [v, g], g = t[0], v = t[1]), v && (f.push(i.caption_start), h = pe(pe({}, h), a.caption_start)), g && (f.push(i.caption_end), h = pe(pe({}, h), a.caption_end)), p && (f.push(i.caption_between), h = pe(pe({}, h), a.caption_between));
  var y = (n = s == null ? void 0 : s.Caption) !== null && n !== void 0 ? n : RE;
  return S("div", { className: f.join(" "), style: h, children: [l(y, { id: u, displayMonth: e.displayMonth, displayIndex: e.displayIndex }), l(bT, { id: d, "aria-labelledby": u, displayMonth: e.displayMonth })] }, e.displayIndex);
}
function PT(e) {
  var t = Le(), n = t.classNames, r = t.styles;
  return l("div", { className: n.months, style: r.months, children: e.children });
}
function MT(e) {
  var t, n, r = e.initialProps, o = Le(), i = pu(), a = li(), s = Te(!1), c = s[0], u = s[1];
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
  var f = pe(pe({}, o.styles.root), o.style), h = Object.keys(r).filter(function(g) {
    return g.startsWith("data-");
  }).reduce(function(g, p) {
    var y;
    return pe(pe({}, g), (y = {}, y[p] = r[p], y));
  }, {}), v = (n = (t = r.components) === null || t === void 0 ? void 0 : t.Months) !== null && n !== void 0 ? n : PT;
  return l("div", pe({ className: d.join(" "), style: f, dir: o.dir, id: o.id, nonce: r.nonce, title: r.title, lang: r.lang }, h, { children: l(v, { children: a.displayMonths.map(function(g, p) {
    return l(NT, { displayIndex: p, displayMonth: g }, p);
  }) }) }));
}
function ET(e) {
  var t = e.children, n = ZM(e, ["children"]);
  return l(vE, { initialProps: n, children: l(ME, { children: l(sT, { initialProps: n, children: l(IE, { initialProps: n, children: l($E, { initialProps: n, children: l(YE, { children: l(iT, { children: t }) }) }) }) }) }) });
}
function TT(e) {
  return l(ET, pe({}, e, { children: l(MT, { initialProps: e }) }));
}
function kT({
  className: e,
  classNames: t,
  showOutsideDays: n = !0,
  ...r
}) {
  return /* @__PURE__ */ l(
    TT,
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
          _d({ variant: "outline" }),
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
          _d({ variant: "ghost" }),
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
        IconLeft: () => /* @__PURE__ */ l(AP, { className: "h-4 w-4" }),
        IconRight: () => /* @__PURE__ */ l(Ov, { className: "h-4 w-4" })
      },
      ...r
    }
  );
}
kT.displayName = "Calendar";
const Jv = m.forwardRef(
  ({ className: e, type: t, ...n }, r) => /* @__PURE__ */ l(
    "input",
    {
      type: t,
      className: A(
        "flex h-10 w-full rounded-sm border-2 border-solid border-f1-border bg-f1-background px-3 py-2 text-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-f1-foreground-secondary/60 hover:border-f1-border-hover disabled:cursor-not-allowed disabled:bg-f1-background-secondary disabled:opacity-50",
        kt("focus-visible:border-f1-border-hover"),
        e
      ),
      ref: r,
      ...n
    }
  )
);
Jv.displayName = "Input";
const RT = (e, t) => /* @__PURE__ */ l("svg", { viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg", ref: t, ...e, children: /* @__PURE__ */ l("path", { d: "M9.99998 16.6667C13.6819 16.6667 16.6666 13.6819 16.6666 10C16.6666 6.3181 13.6819 3.33333 9.99998 3.33333C6.31808 3.33333 3.33331 6.3181 3.33331 10C3.33331 13.6819 6.31808 16.6667 9.99998 16.6667ZM9.19376 6.71637C9.15728 6.24651 9.52871 5.84513 9.99998 5.84513C10.4713 5.84513 10.8427 6.24651 10.8062 6.71637L10.5539 9.96646C10.5314 10.2557 10.2901 10.479 9.99998 10.479C9.70983 10.479 9.46855 10.2557 9.44609 9.96646L9.19376 6.71637ZM10.8333 12.5008C10.8333 12.9611 10.4602 13.3342 9.99998 13.3342C9.53974 13.3342 9.16665 12.9611 9.16665 12.5008C9.16665 12.0406 9.53974 11.6675 9.99998 11.6675C10.4602 11.6675 10.8333 12.0406 10.8333 12.5008Z", fill: "#DC5042" }) }), eg = Z(RT), DT = (e, t) => /* @__PURE__ */ S("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: [
  /* @__PURE__ */ l("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M18 13L12 19L6.00002 13", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ l("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M12 5L12 18.5", vectorEffect: "non-scaling-stroke" })
] }), AT = Z(DT), _T = (e, t) => /* @__PURE__ */ S("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: [
  /* @__PURE__ */ l("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M11 18L5.00002 12L11 6.00002", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ l("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M19 12L5.50002 12", vectorEffect: "non-scaling-stroke" })
] }), tg = Z(_T), OT = (e, t) => /* @__PURE__ */ S("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: [
  /* @__PURE__ */ l("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M13 6L19 12L13 18", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ l("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M5 12H18.5", vectorEffect: "non-scaling-stroke" })
] }), ng = Z(OT), LT = (e, t) => /* @__PURE__ */ S("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: [
  /* @__PURE__ */ l("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M6 11L12 5.00002L18 11", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ l("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M12 19L12 5.50002", vectorEffect: "non-scaling-stroke" })
] }), IT = Z(LT), FT = (e, t) => /* @__PURE__ */ S("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: [
  /* @__PURE__ */ l("path", { stroke: "currentColor", strokeLinecap: "round", d: "M9.76367 18C10.313 18.6137 11.1113 19 11.9998 19C12.8883 19 13.6866 18.6137 14.2359 18", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ l("path", { stroke: "currentColor", d: "M12 4C9.23858 4 7 6.23858 7 9V9.72607C7 9.90146 6.93033 10.0697 6.8063 10.1937L6.03225 10.9678C5.39962 11.6004 5.17871 12.5361 5.46164 13.3849C5.78314 14.3494 6.68577 15 7.70246 15H16.2975C17.3142 15 18.2169 14.3494 18.5384 13.3849C18.8213 12.5361 18.6004 11.6004 17.9678 10.9678L17.1937 10.1937C17.0697 10.0697 17 9.90146 17 9.72607V9C17 6.23858 14.7614 4 12 4Z", vectorEffect: "non-scaling-stroke" })
] }), VT = Z(FT), $T = (e, t) => /* @__PURE__ */ S("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: [
  /* @__PURE__ */ l("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M15 3V5M15 7V5M15 5H9M15 5H16C17.6569 5 19 6.34315 19 8V10V16C19 17.6569 17.6569 19 16 19H8C6.34315 19 5 17.6569 5 16V10V8C5 6.34315 6.34315 5 8 5H9M9 5V3M9 5V7", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ l("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M5 10H19", vectorEffect: "non-scaling-stroke" })
] }), BT = Z($T), WT = (e, t) => /* @__PURE__ */ l("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: /* @__PURE__ */ l("path", { fill: "currentColor", fillRule: "evenodd", d: "M20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12ZM16.52 9.39C16.7354 9.10281 16.6772 8.69539 16.39 8.48C16.1028 8.26461 15.6954 8.32281 15.48 8.61L11.4297 14.0104L8.95963 11.5404C8.70578 11.2865 8.29423 11.2865 8.04039 11.5404C7.78655 11.7942 7.78655 12.2058 8.04039 12.4596L11.0404 15.4596C11.1736 15.5929 11.3581 15.6617 11.5461 15.6484C11.734 15.635 11.9069 15.5407 12.02 15.39L16.52 9.39Z", clipRule: "evenodd", vectorEffect: "non-scaling-stroke" }) }), rg = Z(WT), jT = (e, t) => /* @__PURE__ */ S("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: [
  /* @__PURE__ */ l("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M18 10L12 16", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ l("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M6 10L12 16", vectorEffect: "non-scaling-stroke" })
] }), Jr = Z(jT), UT = (e, t) => /* @__PURE__ */ S("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: [
  /* @__PURE__ */ l("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M15 6L9 12", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ l("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M15 18L9 12", vectorEffect: "non-scaling-stroke" })
] }), HT = Z(UT), zT = (e, t) => /* @__PURE__ */ S("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: [
  /* @__PURE__ */ l("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M9 6L15 12", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ l("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M9 18L15 12", vectorEffect: "non-scaling-stroke" })
] }), Xa = Z(zT), GT = (e, t) => /* @__PURE__ */ S("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: [
  /* @__PURE__ */ l("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M18 14L12 8", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ l("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M6 14L12 8", vectorEffect: "non-scaling-stroke" })
] }), gu = Z(GT), YT = (e, t) => /* @__PURE__ */ l("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: /* @__PURE__ */ l("rect", { width: 16, height: 16, x: 4, y: 4, fill: "currentColor", rx: 8, vectorEffect: "non-scaling-stroke" }) }), KT = Z(YT), XT = (e, t) => /* @__PURE__ */ S("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: [
  /* @__PURE__ */ l("path", { stroke: "currentColor", d: "M18.6499 6.83752C18.6499 8.04565 17.6705 9.02502 16.4624 9.02502L14.2749 9.0246V6.83752C14.2749 5.6294 15.2543 4.65002 16.4624 4.65002C17.6705 4.65002 18.6499 5.6294 18.6499 6.83752Z", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ l("path", { stroke: "currentColor", d: "M9.0249 16.463C9.0249 17.6711 8.04553 18.6505 6.8374 18.6505C5.62928 18.6505 4.6499 17.6711 4.6499 16.463C4.6499 15.2548 5.62928 14.2755 6.8374 14.2755L9.0249 14.275V16.463Z", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ l("path", { stroke: "currentColor", d: "M18.6499 16.4625C18.6499 17.6706 17.6705 18.65 16.4624 18.65C15.2543 18.65 14.2749 17.6706 14.2749 16.4625V14.275H16.4624C17.6705 14.275 18.6499 15.2544 18.6499 16.4625Z", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ l("path", { stroke: "currentColor", d: "M9.0249 6.83771V9.02521H6.8374C5.62928 9.02521 4.6499 8.04583 4.6499 6.83771C4.6499 5.62958 5.62928 4.65021 6.8374 4.65021C8.04553 4.65021 9.0249 5.62958 9.0249 6.83771Z", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ l("path", { stroke: "currentColor", d: "M14.2749 9.02502H9.0249V14.275H14.2749V9.02502Z", vectorEffect: "non-scaling-stroke" })
] }), qT = Z(XT), ZT = (e, t) => /* @__PURE__ */ S("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: [
  /* @__PURE__ */ l("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M16.9497 7.05026L12 12L7.05025 16.9498", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ l("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M12 12L7.05025 7.05026L16.9497 16.9498", vectorEffect: "non-scaling-stroke" })
] }), QT = Z(ZT), JT = (e, t) => /* @__PURE__ */ l("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: /* @__PURE__ */ l("circle", { cx: 12, cy: 12, r: 8, stroke: "currentColor", strokeDasharray: "2 2", vectorEffect: "non-scaling-stroke" }) }), ek = Z(JT), tk = (e, t) => /* @__PURE__ */ S("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: [
  /* @__PURE__ */ l("circle", { cx: 12, cy: 12, r: 1.5, fill: "currentColor", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ l("circle", { cx: 6.5, cy: 12, r: 1.5, fill: "currentColor", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ l("circle", { cx: 17.5, cy: 12, r: 1.5, fill: "currentColor", vectorEffect: "non-scaling-stroke" })
] }), jl = Z(tk), nk = (e, t) => /* @__PURE__ */ S("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: [
  /* @__PURE__ */ l("circle", { cx: 12, cy: 12, r: 1.5, fill: "currentColor", transform: "rotate(90 12 12)", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ l("circle", { cx: 12, cy: 6.5, r: 1.5, fill: "currentColor", transform: "rotate(90 12 6.5)", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ l("circle", { cx: 12, cy: 17.5, r: 1.5, fill: "currentColor", transform: "rotate(90 12 17.5)", vectorEffect: "non-scaling-stroke" })
] }), rk = Z(nk), ok = (e, t) => /* @__PURE__ */ S("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: [
  /* @__PURE__ */ l("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M19.5919 7.66492C18.318 10.297 15.5536 12.6649 11.9999 12.6649C8.44623 12.6649 5.68183 10.297 4.40796 7.66492", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ l("path", { stroke: "currentColor", strokeLinecap: "round", d: "M10.0083 13.0159L8.89773 16.3351", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ l("path", { stroke: "currentColor", strokeLinecap: "round", d: "M14.0576 13.0159L15.1682 16.3351", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ l("path", { stroke: "currentColor", strokeLinecap: "round", d: "M17.5232 10.543L20 13.0159", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ l("path", { stroke: "currentColor", strokeLinecap: "round", d: "M6.47681 10.543L4.00002 13.0159", vectorEffect: "non-scaling-stroke" })
] }), ik = Z(ok), ak = (e, t) => /* @__PURE__ */ S("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: [
  /* @__PURE__ */ l("path", { stroke: "currentColor", strokeLinejoin: "round", d: "M20 12C19 9 16 6 12 6C8 6 5 9 4 12C5 15 8 18 12 18C16 18 19 15 20 12Z", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ l("circle", { cx: 12, cy: 12, r: 2.35, stroke: "currentColor", vectorEffect: "non-scaling-stroke" })
] }), sk = Z(ak), lk = (e, t) => /* @__PURE__ */ S("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: [
  /* @__PURE__ */ l("circle", { cx: 12, cy: 12, r: 8, stroke: "currentColor", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ l("path", { fill: "currentColor", d: "M11.9999 18C15.3136 18 17.9999 15.3137 17.9999 12C17.9999 8.68629 15.3136 6 11.9999 6V18Z", vectorEffect: "non-scaling-stroke" })
] }), ck = Z(lk), uk = (e, t) => /* @__PURE__ */ S("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: [
  /* @__PURE__ */ l("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M12 12V15", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ l("circle", { cx: 12, cy: 12, r: 8, stroke: "currentColor", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ l("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M12 9V9.1", vectorEffect: "non-scaling-stroke" })
] }), dk = Z(uk), fk = (e, t) => /* @__PURE__ */ l("svg", { viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg", ref: t, ...e, children: /* @__PURE__ */ l("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M16.6666 10C16.6666 13.6819 13.6819 16.6667 9.99998 16.6667C6.31808 16.6667 3.33331 13.6819 3.33331 10C3.33331 6.3181 6.31808 3.33333 9.99998 3.33333C13.6819 3.33333 16.6666 6.3181 16.6666 10ZM9.29169 7.375C9.29169 6.9838 9.60882 6.66667 10 6.66667C10.3912 6.66667 10.7084 6.9838 10.7084 7.375C10.7084 7.7662 10.3912 8.08333 10 8.08333C9.60882 8.08333 9.29169 7.7662 9.29169 7.375ZM10 8.93333C10.359 8.93333 10.65 9.22435 10.65 9.58333L10.65 12.5C10.65 12.859 10.359 13.15 10 13.15C9.64101 13.15 9.35 12.859 9.35 12.5V9.58333C9.35 9.22435 9.64101 8.93333 10 8.93333Z", fill: "currentColor" }) }), og = Z(fk), hk = (e, t) => /* @__PURE__ */ S("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: [
  /* @__PURE__ */ l("path", { stroke: "currentColor", strokeLinecap: "round", d: "M9 20H10.4C13.7603 20 15.4405 20 16.7239 19.346C17.8529 18.7708 18.7708 17.8529 19.346 16.7239C20 15.4405 20 13.7603 20 10.4V9", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ l("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M8 5H14C15.6569 5 17 6.34315 17 8V14C17 15.6569 15.6569 17 14 17H8C6.34315 17 5 15.6569 5 14V8C5 6.34315 6.34315 5 8 5Z", vectorEffect: "non-scaling-stroke" })
] }), mk = Z(hk), pk = (e, t) => /* @__PURE__ */ S("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: [
  /* @__PURE__ */ l("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M4.99989 7H18.9999", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ l("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M5 12H19", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ l("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M4.99989 17H18.9999", vectorEffect: "non-scaling-stroke" })
] }), vk = Z(pk), gk = (e, t) => /* @__PURE__ */ S("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: [
  /* @__PURE__ */ l("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M9 9C9 7 10.5 6 12 6C13.5 6 15 7.5 15 9C15 12 12 11.5 12 14", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ l("path", { stroke: "currentColor", strokeLinecap: "round", d: "M12 17V17.1", vectorEffect: "non-scaling-stroke" })
] }), yk = Z(gk), bk = (e, t) => /* @__PURE__ */ S("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: [
  /* @__PURE__ */ l("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M19 12C19 15.866 15.866 19 12 19C8.13401 19 5 15.866 5 12C5 8.13401 8.13401 5 12 5", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ l("path", { stroke: "currentColor", strokeLinecap: "round", d: "M10 10V11", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ l("path", { stroke: "currentColor", strokeLinecap: "round", d: "M14 10V11", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ l("path", { stroke: "currentColor", strokeLinecap: "round", d: "M9.5 14V14C10.9616 15.1693 13.0384 15.1693 14.5 14V14", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ l("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M18 3V6M18 9V6M18 6H15H21", vectorEffect: "non-scaling-stroke" })
] }), ig = Z(bk), wk = (e, t) => /* @__PURE__ */ S("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: [
  /* @__PURE__ */ l("path", { stroke: "currentColor", strokeLinecap: "round", d: "M16 16L19 19", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ l("rect", { width: 14, height: 14, x: 4, y: 4, stroke: "currentColor", rx: 7, vectorEffect: "non-scaling-stroke" })
] }), xk = Z(wk), Ck = (e, t) => /* @__PURE__ */ l("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: /* @__PURE__ */ l("path", { fill: "currentColor", fillRule: "evenodd", d: "M5.39903 19C3.87406 19 2.91012 17.3618 3.65071 16.0287L10.2517 4.14697C11.0137 2.77535 12.9863 2.77535 13.7483 4.14697L20.3493 16.0287C21.0899 17.3618 20.1259 19 18.601 19H5.39903ZM12 7.5C11.4345 7.5 10.9888 7.98166 11.0325 8.54549L11.3353 12.4456C11.3623 12.7927 11.6518 13.0607 12 13.0607C12.3482 13.0607 12.6377 12.7927 12.6647 12.4456L12.9675 8.54549C13.0112 7.98166 12.5655 7.5 12 7.5ZM12 16.4869C12.5523 16.4869 13 16.0391 13 15.4869C13 14.9346 12.5523 14.4869 12 14.4869C11.4477 14.4869 11 14.9346 11 15.4869C11 16.0391 11.4477 16.4869 12 16.4869Z", clipRule: "evenodd", vectorEffect: "non-scaling-stroke" }) }), ag = Z(Ck), Sk = (e, t) => /* @__PURE__ */ l("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: /* @__PURE__ */ l("path", { fill: "currentColor", d: "M5.99988 16.5537V7.44638C5.99988 5.91073 7.65884 4.948 8.99216 5.70989L16.961 10.2635C18.3047 11.0313 18.3047 12.9687 16.961 13.7365L8.99216 18.2901C7.65884 19.052 5.99988 18.0893 5.99988 16.5537Z", vectorEffect: "non-scaling-stroke" }) }), bh = Z(Sk), Nk = (e, t) => /* @__PURE__ */ l("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: /* @__PURE__ */ l("path", { fill: "currentColor", d: "M8 5H16C17.6569 5 19 6.34315 19 8V16C19 17.6569 17.6569 19 16 19H8C6.34315 19 5 17.6569 5 16V8C5 6.34315 6.34315 5 8 5Z", vectorEffect: "non-scaling-stroke" }) }), wh = Z(Nk), Pk = (e, t) => /* @__PURE__ */ l("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: /* @__PURE__ */ l("path", { fill: "currentColor", fillRule: "evenodd", d: "M6 7V17C6 18.1046 6.89543 19 8 19C9.10457 19 10 18.1046 10 17V7C10 5.89543 9.10457 5 8 5C6.89543 5 6 5.89543 6 7ZM14 7V17C14 18.1046 14.8954 19 16 19C17.1046 19 18 18.1046 18 17V7C18 5.89543 17.1046 5 16 5C14.8954 5 14 5.89543 14 7Z", clipRule: "evenodd", vectorEffect: "non-scaling-stroke" }) }), Mk = Z(Pk), Ek = /^(-?)([0-9]+)?(?:([\.,])([0-9]+)?)?$/;
function xh(e, { maxDecimals: t }) {
  if (!e || e === "-")
    return {
      formattedValue: e ?? "",
      value: null
    };
  const n = e.match(Ek);
  if (!n) return null;
  let [r, o, i, a, s] = n;
  t && ((s == null ? void 0 : s.length) ?? 0) > t ? s = s == null ? void 0 : s.slice(0, t) : t === 0 && (s = ""), i = (i == null ? void 0 : i.replace(/^0+(\d)/, (d, f) => f)) ?? "";
  const c = `${o}${i}${t !== 0 ? `${a ?? ""}${s ?? ""}` : ""}`, u = parseFloat(c.replace(",", "."));
  return {
    formattedValue: c,
    value: Number.isNaN(u) ? null : u
  };
}
const Ei = (e, t, n) => new Intl.NumberFormat(t, {
  maximumFractionDigits: n,
  useGrouping: !1
}).format(e), uI = Z(
  function({ locale: t, value: n, maxDecimals: r, step: o, min: i, max: a, onChange: s, ...c }, u) {
    const [d, f] = Te(
      () => n != null ? Ei(n, t, r) : ""
    ), h = (p) => {
      const y = xh(p, { maxDecimals: r });
      if (!y) return;
      const { formattedValue: b, value: w } = y;
      f(b), s == null || s(w);
    }, v = (p) => () => {
      if (!o) return;
      if (n == null)
        return h(Ei(o ?? i ?? 0, t, r));
      const y = p === "increase" ? n + o : n - o;
      i != null && y < i || a != null && y > a || h(Ei(y, t, r));
    }, g = () => o ? /* @__PURE__ */ S(
      "div",
      {
        className: "absolute right-2 top-0.5 hidden h-full flex-col group-focus-within:flex group-hover:flex",
        onClick: (p) => p.preventDefault(),
        children: [
          /* @__PURE__ */ l(
            "div",
            {
              onClick: v("increase"),
              className: "h-4 cursor-pointer",
              role: "button",
              children: /* @__PURE__ */ l(Ce, { size: "sm", icon: gu })
            }
          ),
          /* @__PURE__ */ l(
            "div",
            {
              onClick: v("decrease"),
              className: "h-4 cursor-pointer",
              role: "button",
              children: /* @__PURE__ */ l(Ce, { size: "sm", icon: Jr })
            }
          )
        ]
      }
    ) : null;
    return We(() => {
      const p = xh(d, { maxDecimals: r });
      n === void 0 || n == (p == null ? void 0 : p.value) || f(n ? Ei(n, t, r) : "");
    }, [d, r, n, t]), /* @__PURE__ */ S("div", { className: "group relative", children: [
      /* @__PURE__ */ l(
        Jv,
        {
          type: "text",
          ref: u,
          value: d,
          inputMode: "decimal",
          className: "group-focus-within:pr-5 group-hover:pr-5",
          onChange: (p) => h(p.target.value),
          ...c
        }
      ),
      /* @__PURE__ */ l(g, {})
    ] });
  }
), Tk = Ye(
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
), kk = {
  sm: "xs",
  md: "sm",
  lg: "md"
}, Rk = ({ type: e, size: t = "md", icon: n }) => /* @__PURE__ */ l("div", { className: Tk({ type: e, size: t }), children: /* @__PURE__ */ l(Ce, { icon: n, size: kk[t] }) });
var yu = "Avatar", [Dk, dI] = rn(yu), [Ak, sg] = Dk(yu), lg = m.forwardRef(
  (e, t) => {
    const { __scopeAvatar: n, ...r } = e, [o, i] = m.useState("idle");
    return /* @__PURE__ */ l(
      Ak,
      {
        scope: n,
        imageLoadingStatus: o,
        onImageLoadingStatusChange: i,
        children: /* @__PURE__ */ l(ve.span, { ...r, ref: t })
      }
    );
  }
);
lg.displayName = yu;
var cg = "AvatarImage", ug = m.forwardRef(
  (e, t) => {
    const { __scopeAvatar: n, src: r, onLoadingStatusChange: o = () => {
    }, ...i } = e, a = sg(cg, n), s = _k(r), c = Ve((u) => {
      o(u), a.onImageLoadingStatusChange(u);
    });
    return Xe(() => {
      s !== "idle" && c(s);
    }, [s, c]), s === "loaded" ? /* @__PURE__ */ l(ve.img, { ...i, ref: t, src: r }) : null;
  }
);
ug.displayName = cg;
var dg = "AvatarFallback", fg = m.forwardRef(
  (e, t) => {
    const { __scopeAvatar: n, delayMs: r, ...o } = e, i = sg(dg, n), [a, s] = m.useState(r === void 0);
    return m.useEffect(() => {
      if (r !== void 0) {
        const c = window.setTimeout(() => s(!0), r);
        return () => window.clearTimeout(c);
      }
    }, [r]), a && i.imageLoadingStatus !== "loaded" ? /* @__PURE__ */ l(ve.span, { ...o, ref: t }) : null;
  }
);
fg.displayName = dg;
function _k(e) {
  const [t, n] = m.useState("idle");
  return Xe(() => {
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
var hg = lg, mg = ug, pg = fg;
const Ti = [
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
], Ok = Ye(
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
), vg = m.forwardRef(({ size: e, type: t, color: n, className: r, ...o }, i) => /* @__PURE__ */ l(
  hg,
  {
    ref: i,
    className: A(Ok({ size: e, type: t, color: n, className: r })),
    ...o
  }
));
vg.displayName = hg.displayName;
const gg = m.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l(
  mg,
  {
    ref: n,
    className: A("aspect-square h-full w-full object-cover", e),
    ...t,
    asChild: !0,
    children: /* @__PURE__ */ l(Kw, {})
  }
));
gg.displayName = mg.displayName;
const yg = m.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l(
  pg,
  {
    ref: n,
    className: A(
      "flex h-full w-full items-center justify-center text-f1-foreground-inverse/90",
      e
    ),
    ...t
  }
));
yg.displayName = pg.displayName;
function Lk(e, t) {
  const n = Array.isArray(e) ? e : [e];
  return t === "xsmall" || t === "small" ? (n[0][0] ?? "").toUpperCase() : Array.isArray(e) ? n.slice(0, 2).map((o) => o[0]).join("").toUpperCase() : e.slice(0, 2).toUpperCase();
}
function bg(e) {
  let t = 0;
  for (let r = 0; r < e.length; r++)
    t = e.charCodeAt(r) + ((t << 5) - t), t = t & t;
  const n = (t % Ti.length + Ti.length) % Ti.length;
  return Ti[n];
}
const wg = {
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
  get: (e = "base", t = "medium") => wg[e][t]
}, Ik = (e) => e === "xlarge" ? "lg" : e === "large" ? "md" : "sm", qa = Z(
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
    const u = Lk(t, n), d = o === "random" ? bg(Array.isArray(t) ? t.join("") : t) : o, f = !!(i || a);
    return /* @__PURE__ */ S("div", { className: "relative inline-flex", children: [
      /* @__PURE__ */ l(
        "div",
        {
          className: "h-fit w-fit",
          style: s ? { clipPath: wg.get(r, n) } : void 0,
          children: /* @__PURE__ */ S(
            vg,
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
                /* @__PURE__ */ l(gg, { src: e, alt: u }),
                /* @__PURE__ */ l(yg, { children: u })
              ]
            }
          )
        }
      ),
      s && /* @__PURE__ */ l("div", { className: "absolute -bottom-0.5 -right-0.5", children: /* @__PURE__ */ l(
        Rk,
        {
          type: s.type,
          icon: s.icon,
          size: Ik(n)
        }
      ) })
    ] });
  }
);
qa.displayName = "BaseAvatar";
const Za = ({
  name: e,
  src: t,
  size: n,
  "aria-label": r,
  "aria-labelledby": o,
  badge: i
}) => /* @__PURE__ */ l(
  qa,
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
Za.displayName = "CompanyAvatar";
const lr = ({
  firstName: e,
  lastName: t,
  src: n,
  size: r,
  "aria-label": o,
  "aria-labelledby": i,
  badge: a
}) => /* @__PURE__ */ l(
  qa,
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
lr.displayName = "PersonAvatar";
const bu = ({
  name: e,
  src: t,
  size: n,
  "aria-label": r,
  "aria-labelledby": o,
  badge: i
}) => /* @__PURE__ */ l(
  qa,
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
bu.displayName = "TeamAvatar";
function Qa(e, t = "xsmall") {
  switch (e.type) {
    case "person":
      return /* @__PURE__ */ l(
        lr,
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
        bu,
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
        Za,
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
function ci(e) {
  const t = e + "CollectionProvider", [n, r] = rn(t), [o, i] = n(
    t,
    { collectionRef: { current: null }, itemMap: /* @__PURE__ */ new Map() }
  ), a = (v) => {
    const { scope: g, children: p } = v, y = L.useRef(null), b = L.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ l(o, { scope: g, itemMap: b, collectionRef: y, children: p });
  };
  a.displayName = t;
  const s = e + "CollectionSlot", c = L.forwardRef(
    (v, g) => {
      const { scope: p, children: y } = v, b = i(s, p), w = Se(g, b.collectionRef);
      return /* @__PURE__ */ l(ar, { ref: w, children: y });
    }
  );
  c.displayName = s;
  const u = e + "CollectionItemSlot", d = "data-radix-collection-item", f = L.forwardRef(
    (v, g) => {
      const { scope: p, children: y, ...b } = v, w = L.useRef(null), x = Se(g, w), C = i(u, p);
      return L.useEffect(() => (C.itemMap.set(w, { ref: w, ...b }), () => void C.itemMap.delete(w))), /* @__PURE__ */ l(ar, { [d]: "", ref: x, children: y });
    }
  );
  f.displayName = u;
  function h(v) {
    const g = i(e + "CollectionConsumer", v);
    return L.useCallback(() => {
      const y = g.collectionRef.current;
      if (!y) return [];
      const b = Array.from(y.querySelectorAll(`[${d}]`));
      return Array.from(g.itemMap.values()).sort(
        (C, M) => b.indexOf(C.ref.current) - b.indexOf(M.ref.current)
      );
    }, [g.collectionRef, g.itemMap]);
  }
  return [
    { Provider: a, Slot: c, ItemSlot: f },
    h,
    r
  ];
}
var Zs = 0;
function wu() {
  m.useEffect(() => {
    const e = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", e[0] ?? Ch()), document.body.insertAdjacentElement("beforeend", e[1] ?? Ch()), Zs++, () => {
      Zs === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((t) => t.remove()), Zs--;
    };
  }, []);
}
function Ch() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.cssText = "outline: none; opacity: 0; position: fixed; pointer-events: none", e;
}
var Qs = "focusScope.autoFocusOnMount", Js = "focusScope.autoFocusOnUnmount", Sh = { bubbles: !1, cancelable: !0 }, Fk = "FocusScope", Ja = m.forwardRef((e, t) => {
  const {
    loop: n = !1,
    trapped: r = !1,
    onMountAutoFocus: o,
    onUnmountAutoFocus: i,
    ...a
  } = e, [s, c] = m.useState(null), u = Ve(o), d = Ve(i), f = m.useRef(null), h = Se(t, (p) => c(p)), v = m.useRef({
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
      let p = function(x) {
        if (v.paused || !s) return;
        const C = x.target;
        s.contains(C) ? f.current = C : kn(f.current, { select: !0 });
      }, y = function(x) {
        if (v.paused || !s) return;
        const C = x.relatedTarget;
        C !== null && (s.contains(C) || kn(f.current, { select: !0 }));
      }, b = function(x) {
        if (document.activeElement === document.body)
          for (const M of x)
            M.removedNodes.length > 0 && kn(s);
      };
      document.addEventListener("focusin", p), document.addEventListener("focusout", y);
      const w = new MutationObserver(b);
      return s && w.observe(s, { childList: !0, subtree: !0 }), () => {
        document.removeEventListener("focusin", p), document.removeEventListener("focusout", y), w.disconnect();
      };
    }
  }, [r, s, v.paused]), m.useEffect(() => {
    if (s) {
      Ph.add(v);
      const p = document.activeElement;
      if (!s.contains(p)) {
        const b = new CustomEvent(Qs, Sh);
        s.addEventListener(Qs, u), s.dispatchEvent(b), b.defaultPrevented || (Vk(Uk(xg(s)), { select: !0 }), document.activeElement === p && kn(s));
      }
      return () => {
        s.removeEventListener(Qs, u), setTimeout(() => {
          const b = new CustomEvent(Js, Sh);
          s.addEventListener(Js, d), s.dispatchEvent(b), b.defaultPrevented || kn(p ?? document.body, { select: !0 }), s.removeEventListener(Js, d), Ph.remove(v);
        }, 0);
      };
    }
  }, [s, u, d, v]);
  const g = m.useCallback(
    (p) => {
      if (!n && !r || v.paused) return;
      const y = p.key === "Tab" && !p.altKey && !p.ctrlKey && !p.metaKey, b = document.activeElement;
      if (y && b) {
        const w = p.currentTarget, [x, C] = $k(w);
        x && C ? !p.shiftKey && b === C ? (p.preventDefault(), n && kn(x, { select: !0 })) : p.shiftKey && b === x && (p.preventDefault(), n && kn(C, { select: !0 })) : b === w && p.preventDefault();
      }
    },
    [n, r, v.paused]
  );
  return /* @__PURE__ */ l(ve.div, { tabIndex: -1, ...a, ref: h, onKeyDown: g });
});
Ja.displayName = Fk;
function Vk(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const r of e)
    if (kn(r, { select: t }), document.activeElement !== n) return;
}
function $k(e) {
  const t = xg(e), n = Nh(t, e), r = Nh(t.reverse(), e);
  return [n, r];
}
function xg(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => {
      const o = r.tagName === "INPUT" && r.type === "hidden";
      return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function Nh(e, t) {
  for (const n of e)
    if (!Bk(n, { upTo: t })) return n;
}
function Bk(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
function Wk(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function kn(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== n && Wk(e) && t && e.select();
  }
}
var Ph = jk();
function jk() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && (n == null || n.pause()), e = Mh(e, t), e.unshift(t);
    },
    remove(t) {
      var n;
      e = Mh(e, t), (n = e[0]) == null || n.resume();
    }
  };
}
function Mh(e, t) {
  const n = [...e], r = n.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
function Uk(e) {
  return e.filter((t) => t.tagName !== "A");
}
function Cg(e) {
  const t = m.useRef({ value: e, previous: e });
  return m.useMemo(() => (t.current.value !== e && (t.current.previous = t.current.value, t.current.value = e), t.current.previous), [e]);
}
var Hk = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, wr = /* @__PURE__ */ new WeakMap(), ki = /* @__PURE__ */ new WeakMap(), Ri = {}, el = 0, Sg = function(e) {
  return e && (e.host || Sg(e.parentNode));
}, zk = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var r = Sg(n);
    return r && e.contains(r) ? r : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return !!n;
  });
}, Gk = function(e, t, n, r) {
  var o = zk(t, Array.isArray(e) ? e : [e]);
  Ri[n] || (Ri[n] = /* @__PURE__ */ new WeakMap());
  var i = Ri[n], a = [], s = /* @__PURE__ */ new Set(), c = new Set(o), u = function(f) {
    !f || s.has(f) || (s.add(f), u(f.parentNode));
  };
  o.forEach(u);
  var d = function(f) {
    !f || c.has(f) || Array.prototype.forEach.call(f.children, function(h) {
      if (s.has(h))
        d(h);
      else
        try {
          var v = h.getAttribute(r), g = v !== null && v !== "false", p = (wr.get(h) || 0) + 1, y = (i.get(h) || 0) + 1;
          wr.set(h, p), i.set(h, y), a.push(h), p === 1 && g && ki.set(h, !0), y === 1 && h.setAttribute(n, "true"), g || h.setAttribute(r, "true");
        } catch (b) {
          console.error("aria-hidden: cannot operate on ", h, b);
        }
    });
  };
  return d(t), s.clear(), el++, function() {
    a.forEach(function(f) {
      var h = wr.get(f) - 1, v = i.get(f) - 1;
      wr.set(f, h), i.set(f, v), h || (ki.has(f) || f.removeAttribute(r), ki.delete(f)), v || f.removeAttribute(n);
    }), el--, el || (wr = /* @__PURE__ */ new WeakMap(), wr = /* @__PURE__ */ new WeakMap(), ki = /* @__PURE__ */ new WeakMap(), Ri = {});
  };
}, es = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var r = Array.from(Array.isArray(e) ? e : [e]), o = Hk(e);
  return o ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live]"))), Gk(r, o, n, "aria-hidden")) : function() {
    return null;
  };
}, lt = function() {
  return lt = Object.assign || function(t) {
    for (var n, r = 1, o = arguments.length; r < o; r++) {
      n = arguments[r];
      for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
    }
    return t;
  }, lt.apply(this, arguments);
};
function xu(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
}
function Ng(e, t, n) {
  if (n || arguments.length === 2) for (var r = 0, o = t.length, i; r < o; r++)
    (i || !(r in t)) && (i || (i = Array.prototype.slice.call(t, 0, r)), i[r] = t[r]);
  return e.concat(i || Array.prototype.slice.call(t));
}
var Do = "right-scroll-bar-position", Ao = "width-before-scroll-bar", Yk = "with-scroll-bars-hidden", Kk = "--removed-body-scroll-bar-size";
function tl(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function Xk(e, t) {
  var n = Te(function() {
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
var qk = typeof window < "u" ? m.useLayoutEffect : m.useEffect, Eh = /* @__PURE__ */ new WeakMap();
function Pg(e, t) {
  var n = Xk(null, function(r) {
    return e.forEach(function(o) {
      return tl(o, r);
    });
  });
  return qk(function() {
    var r = Eh.get(n);
    if (r) {
      var o = new Set(r), i = new Set(e), a = n.current;
      o.forEach(function(s) {
        i.has(s) || tl(s, null);
      }), i.forEach(function(s) {
        o.has(s) || tl(s, a);
      });
    }
    Eh.set(n, e);
  }, [e]), n;
}
function Zk(e) {
  return e;
}
function Qk(e, t) {
  t === void 0 && (t = Zk);
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
function Mg(e) {
  e === void 0 && (e = {});
  var t = Qk(null);
  return t.options = lt({ async: !0, ssr: !1 }, e), t;
}
var Eg = function(e) {
  var t = e.sideCar, n = xu(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var r = t.read();
  if (!r)
    throw new Error("Sidecar medium not found");
  return m.createElement(r, lt({}, n));
};
Eg.isSideCarExport = !0;
function Tg(e, t) {
  return e.useMedium(t), Eg;
}
var kg = Mg(), nl = function() {
}, ts = m.forwardRef(function(e, t) {
  var n = m.useRef(null), r = m.useState({
    onScrollCapture: nl,
    onWheelCapture: nl,
    onTouchMoveCapture: nl
  }), o = r[0], i = r[1], a = e.forwardProps, s = e.children, c = e.className, u = e.removeScrollBar, d = e.enabled, f = e.shards, h = e.sideCar, v = e.noIsolation, g = e.inert, p = e.allowPinchZoom, y = e.as, b = y === void 0 ? "div" : y, w = e.gapMode, x = xu(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), C = h, M = Pg([n, t]), I = lt(lt({}, x), o);
  return m.createElement(
    m.Fragment,
    null,
    d && m.createElement(C, { sideCar: kg, removeScrollBar: u, shards: f, noIsolation: v, inert: g, setCallbacks: i, allowPinchZoom: !!p, lockRef: n, gapMode: w }),
    a ? m.cloneElement(m.Children.only(s), lt(lt({}, I), { ref: M })) : m.createElement(b, lt({}, I, { className: c, ref: M }), s)
  );
});
ts.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
ts.classNames = {
  fullWidth: Ao,
  zeroRight: Do
};
var Jk = function() {
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function eR() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = Jk();
  return t && e.setAttribute("nonce", t), e;
}
function tR(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function nR(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var rR = function() {
  var e = 0, t = null;
  return {
    add: function(n) {
      e == 0 && (t = eR()) && (tR(t, n), nR(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, oR = function() {
  var e = rR();
  return function(t, n) {
    m.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && n]);
  };
}, Cu = function() {
  var e = oR(), t = function(n) {
    var r = n.styles, o = n.dynamic;
    return e(r, o), null;
  };
  return t;
}, iR = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, rl = function(e) {
  return parseInt(e || "", 10) || 0;
}, aR = function(e) {
  var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], r = t[e === "padding" ? "paddingTop" : "marginTop"], o = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [rl(n), rl(r), rl(o)];
}, sR = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return iR;
  var t = aR(e), n = document.documentElement.clientWidth, r = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, r - n + t[2] - t[0])
  };
}, lR = Cu(), Ir = "data-scroll-locked", cR = function(e, t, n, r) {
  var o = e.left, i = e.top, a = e.right, s = e.gap;
  return n === void 0 && (n = "margin"), `
  .`.concat(Yk, ` {
   overflow: hidden `).concat(r, `;
   padding-right: `).concat(s, "px ").concat(r, `;
  }
  body[`).concat(Ir, `] {
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
  
  .`).concat(Do, ` {
    right: `).concat(s, "px ").concat(r, `;
  }
  
  .`).concat(Ao, ` {
    margin-right: `).concat(s, "px ").concat(r, `;
  }
  
  .`).concat(Do, " .").concat(Do, ` {
    right: 0 `).concat(r, `;
  }
  
  .`).concat(Ao, " .").concat(Ao, ` {
    margin-right: 0 `).concat(r, `;
  }
  
  body[`).concat(Ir, `] {
    `).concat(Kk, ": ").concat(s, `px;
  }
`);
}, Th = function() {
  var e = parseInt(document.body.getAttribute(Ir) || "0", 10);
  return isFinite(e) ? e : 0;
}, uR = function() {
  m.useEffect(function() {
    return document.body.setAttribute(Ir, (Th() + 1).toString()), function() {
      var e = Th() - 1;
      e <= 0 ? document.body.removeAttribute(Ir) : document.body.setAttribute(Ir, e.toString());
    };
  }, []);
}, Rg = function(e) {
  var t = e.noRelative, n = e.noImportant, r = e.gapMode, o = r === void 0 ? "margin" : r;
  uR();
  var i = m.useMemo(function() {
    return sR(o);
  }, [o]);
  return m.createElement(lR, { styles: cR(i, !t, o, n ? "" : "!important") });
}, Ul = !1;
if (typeof window < "u")
  try {
    var Di = Object.defineProperty({}, "passive", {
      get: function() {
        return Ul = !0, !0;
      }
    });
    window.addEventListener("test", Di, Di), window.removeEventListener("test", Di, Di);
  } catch {
    Ul = !1;
  }
var xr = Ul ? { passive: !1 } : !1, dR = function(e) {
  return e.tagName === "TEXTAREA";
}, Dg = function(e, t) {
  var n = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    n[t] !== "hidden" && // contains scroll inside self
    !(n.overflowY === n.overflowX && !dR(e) && n[t] === "visible")
  );
}, fR = function(e) {
  return Dg(e, "overflowY");
}, hR = function(e) {
  return Dg(e, "overflowX");
}, kh = function(e, t) {
  var n = t.ownerDocument, r = t;
  do {
    typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host);
    var o = Ag(e, r);
    if (o) {
      var i = _g(e, r), a = i[1], s = i[2];
      if (a > s)
        return !0;
    }
    r = r.parentNode;
  } while (r && r !== n.body);
  return !1;
}, mR = function(e) {
  var t = e.scrollTop, n = e.scrollHeight, r = e.clientHeight;
  return [
    t,
    n,
    r
  ];
}, pR = function(e) {
  var t = e.scrollLeft, n = e.scrollWidth, r = e.clientWidth;
  return [
    t,
    n,
    r
  ];
}, Ag = function(e, t) {
  return e === "v" ? fR(t) : hR(t);
}, _g = function(e, t) {
  return e === "v" ? mR(t) : pR(t);
}, vR = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, gR = function(e, t, n, r, o) {
  var i = vR(e, window.getComputedStyle(t).direction), a = i * r, s = n.target, c = t.contains(s), u = !1, d = a > 0, f = 0, h = 0;
  do {
    var v = _g(e, s), g = v[0], p = v[1], y = v[2], b = p - y - i * g;
    (g || b) && Ag(e, s) && (f += b, h += g), s instanceof ShadowRoot ? s = s.host : s = s.parentNode;
  } while (
    // portaled content
    !c && s !== document.body || // self content
    c && (t.contains(s) || t === s)
  );
  return (d && (Math.abs(f) < 1 || !o) || !d && (Math.abs(h) < 1 || !o)) && (u = !0), u;
}, Ai = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, Rh = function(e) {
  return [e.deltaX, e.deltaY];
}, Dh = function(e) {
  return e && "current" in e ? e.current : e;
}, yR = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, bR = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, wR = 0, Cr = [];
function xR(e) {
  var t = m.useRef([]), n = m.useRef([0, 0]), r = m.useRef(), o = m.useState(wR++)[0], i = m.useState(Cu)[0], a = m.useRef(e);
  m.useEffect(function() {
    a.current = e;
  }, [e]), m.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(o));
      var p = Ng([e.lockRef.current], (e.shards || []).map(Dh), !0).filter(Boolean);
      return p.forEach(function(y) {
        return y.classList.add("allow-interactivity-".concat(o));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(o)), p.forEach(function(y) {
          return y.classList.remove("allow-interactivity-".concat(o));
        });
      };
    }
  }, [e.inert, e.lockRef.current, e.shards]);
  var s = m.useCallback(function(p, y) {
    if ("touches" in p && p.touches.length === 2)
      return !a.current.allowPinchZoom;
    var b = Ai(p), w = n.current, x = "deltaX" in p ? p.deltaX : w[0] - b[0], C = "deltaY" in p ? p.deltaY : w[1] - b[1], M, I = p.target, T = Math.abs(x) > Math.abs(C) ? "h" : "v";
    if ("touches" in p && T === "h" && I.type === "range")
      return !1;
    var k = kh(T, I);
    if (!k)
      return !0;
    if (k ? M = T : (M = T === "v" ? "h" : "v", k = kh(T, I)), !k)
      return !1;
    if (!r.current && "changedTouches" in p && (x || C) && (r.current = M), !M)
      return !0;
    var R = r.current || M;
    return gR(R, y, p, R === "h" ? x : C, !0);
  }, []), c = m.useCallback(function(p) {
    var y = p;
    if (!(!Cr.length || Cr[Cr.length - 1] !== i)) {
      var b = "deltaY" in y ? Rh(y) : Ai(y), w = t.current.filter(function(M) {
        return M.name === y.type && (M.target === y.target || y.target === M.shadowParent) && yR(M.delta, b);
      })[0];
      if (w && w.should) {
        y.cancelable && y.preventDefault();
        return;
      }
      if (!w) {
        var x = (a.current.shards || []).map(Dh).filter(Boolean).filter(function(M) {
          return M.contains(y.target);
        }), C = x.length > 0 ? s(y, x[0]) : !a.current.noIsolation;
        C && y.cancelable && y.preventDefault();
      }
    }
  }, []), u = m.useCallback(function(p, y, b, w) {
    var x = { name: p, delta: y, target: b, should: w, shadowParent: CR(b) };
    t.current.push(x), setTimeout(function() {
      t.current = t.current.filter(function(C) {
        return C !== x;
      });
    }, 1);
  }, []), d = m.useCallback(function(p) {
    n.current = Ai(p), r.current = void 0;
  }, []), f = m.useCallback(function(p) {
    u(p.type, Rh(p), p.target, s(p, e.lockRef.current));
  }, []), h = m.useCallback(function(p) {
    u(p.type, Ai(p), p.target, s(p, e.lockRef.current));
  }, []);
  m.useEffect(function() {
    return Cr.push(i), e.setCallbacks({
      onScrollCapture: f,
      onWheelCapture: f,
      onTouchMoveCapture: h
    }), document.addEventListener("wheel", c, xr), document.addEventListener("touchmove", c, xr), document.addEventListener("touchstart", d, xr), function() {
      Cr = Cr.filter(function(p) {
        return p !== i;
      }), document.removeEventListener("wheel", c, xr), document.removeEventListener("touchmove", c, xr), document.removeEventListener("touchstart", d, xr);
    };
  }, []);
  var v = e.removeScrollBar, g = e.inert;
  return m.createElement(
    m.Fragment,
    null,
    g ? m.createElement(i, { styles: bR(o) }) : null,
    v ? m.createElement(Rg, { gapMode: e.gapMode }) : null
  );
}
function CR(e) {
  for (var t = null; e !== null; )
    e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
  return t;
}
const SR = Tg(kg, xR);
var ns = m.forwardRef(function(e, t) {
  return m.createElement(ts, lt({}, e, { ref: t, sideCar: SR }));
});
ns.classNames = ts.classNames;
var NR = [" ", "Enter", "ArrowUp", "ArrowDown"], PR = [" ", "Enter"], ui = "Select", [rs, os, MR] = ci(ui), [eo, fI] = rn(ui, [
  MR,
  Yr
]), is = Yr(), [ER, jn] = eo(ui), [TR, kR] = eo(ui), Og = (e) => {
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
    required: v
  } = e, g = is(t), [p, y] = m.useState(null), [b, w] = m.useState(null), [x, C] = m.useState(!1), M = Zr(u), [I = !1, T] = It({
    prop: r,
    defaultProp: o,
    onChange: i
  }), [k, R] = It({
    prop: a,
    defaultProp: s,
    onChange: c
  }), j = m.useRef(null), X = p ? !!p.closest("form") : !0, [G, _] = m.useState(/* @__PURE__ */ new Set()), F = Array.from(G).map((V) => V.props.value).join(";");
  return /* @__PURE__ */ l(xc, { ...g, children: /* @__PURE__ */ S(
    ER,
    {
      required: v,
      scope: t,
      trigger: p,
      onTriggerChange: y,
      valueNode: b,
      onValueNodeChange: w,
      valueNodeHasChildren: x,
      onValueNodeHasChildrenChange: C,
      contentId: Mt(),
      value: k,
      onValueChange: R,
      open: I,
      onOpenChange: T,
      dir: M,
      triggerPointerDownPosRef: j,
      disabled: h,
      children: [
        /* @__PURE__ */ l(rs.Provider, { scope: t, children: /* @__PURE__ */ l(
          TR,
          {
            scope: e.__scopeSelect,
            onNativeOptionAdd: m.useCallback((V) => {
              _((z) => new Set(z).add(V));
            }, []),
            onNativeOptionRemove: m.useCallback((V) => {
              _((z) => {
                const $ = new Set(z);
                return $.delete(V), $;
              });
            }, []),
            children: n
          }
        ) }),
        X ? /* @__PURE__ */ S(
          oy,
          {
            "aria-hidden": !0,
            required: v,
            tabIndex: -1,
            name: d,
            autoComplete: f,
            value: k,
            onChange: (V) => R(V.target.value),
            disabled: h,
            children: [
              k === void 0 ? /* @__PURE__ */ l("option", { value: "" }) : null,
              Array.from(G)
            ]
          },
          F
        ) : null
      ]
    }
  ) });
};
Og.displayName = ui;
var Lg = "SelectTrigger", Ig = m.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, disabled: r = !1, ...o } = e, i = is(n), a = jn(Lg, n), s = a.disabled || r, c = Se(t, a.onTriggerChange), u = os(n), [d, f, h] = iy((g) => {
      const p = u().filter((w) => !w.disabled), y = p.find((w) => w.value === a.value), b = ay(p, g, y);
      b !== void 0 && a.onValueChange(b.value);
    }), v = () => {
      s || (a.onOpenChange(!0), h());
    };
    return /* @__PURE__ */ l(Ra, { asChild: !0, ...i, children: /* @__PURE__ */ l(
      ve.button,
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
        "data-placeholder": ry(a.value) ? "" : void 0,
        ...o,
        ref: c,
        onClick: re(o.onClick, (g) => {
          g.currentTarget.focus();
        }),
        onPointerDown: re(o.onPointerDown, (g) => {
          const p = g.target;
          p.hasPointerCapture(g.pointerId) && p.releasePointerCapture(g.pointerId), g.button === 0 && g.ctrlKey === !1 && (v(), a.triggerPointerDownPosRef.current = {
            x: Math.round(g.pageX),
            y: Math.round(g.pageY)
          }, g.preventDefault());
        }),
        onKeyDown: re(o.onKeyDown, (g) => {
          const p = d.current !== "";
          !(g.ctrlKey || g.altKey || g.metaKey) && g.key.length === 1 && f(g.key), !(p && g.key === " ") && NR.includes(g.key) && (v(), g.preventDefault());
        })
      }
    ) });
  }
);
Ig.displayName = Lg;
var Fg = "SelectValue", Vg = m.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, className: r, style: o, children: i, placeholder: a = "", ...s } = e, c = jn(Fg, n), { onValueNodeHasChildrenChange: u } = c, d = i !== void 0, f = Se(t, c.onValueNodeChange);
    return Xe(() => {
      u(d);
    }, [u, d]), /* @__PURE__ */ l(
      ve.span,
      {
        ...s,
        ref: f,
        style: { pointerEvents: "none" },
        children: ry(c.value) ? /* @__PURE__ */ l(we, { children: a }) : i
      }
    );
  }
);
Vg.displayName = Fg;
var RR = "SelectIcon", DR = m.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, children: r, ...o } = e;
    return /* @__PURE__ */ l(ve.span, { "aria-hidden": !0, ...o, ref: t, children: r || "▼" });
  }
);
DR.displayName = RR;
var AR = "SelectPortal", $g = (e) => /* @__PURE__ */ l(Oa, { asChild: !0, ...e });
$g.displayName = AR;
var cr = "SelectContent", Bg = m.forwardRef(
  (e, t) => {
    const n = jn(cr, e.__scopeSelect), [r, o] = m.useState();
    if (Xe(() => {
      o(new DocumentFragment());
    }, []), !n.open) {
      const i = r;
      return i ? Mc.createPortal(
        /* @__PURE__ */ l(Wg, { scope: e.__scopeSelect, children: /* @__PURE__ */ l(rs.Slot, { scope: e.__scopeSelect, children: /* @__PURE__ */ l("div", { children: e.children }) }) }),
        i
      ) : null;
    }
    return /* @__PURE__ */ l(jg, { ...e, ref: t });
  }
);
Bg.displayName = cr;
var dn = 10, [Wg, Un] = eo(cr), _R = "SelectContentImpl", jg = m.forwardRef(
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
      collisionPadding: v,
      sticky: g,
      hideWhenDetached: p,
      avoidCollisions: y,
      //
      ...b
    } = e, w = jn(cr, n), [x, C] = m.useState(null), [M, I] = m.useState(null), T = Se(t, (B) => C(B)), [k, R] = m.useState(null), [j, X] = m.useState(
      null
    ), G = os(n), [_, F] = m.useState(!1), V = m.useRef(!1);
    m.useEffect(() => {
      if (x) return es(x);
    }, [x]), wu();
    const z = m.useCallback(
      (B) => {
        const [q, ...se] = G().map((U) => U.ref.current), [ae] = se.slice(-1), Q = document.activeElement;
        for (const U of B)
          if (U === Q || (U == null || U.scrollIntoView({ block: "nearest" }), U === q && M && (M.scrollTop = 0), U === ae && M && (M.scrollTop = M.scrollHeight), U == null || U.focus(), document.activeElement !== Q)) return;
      },
      [G, M]
    ), $ = m.useCallback(
      () => z([k, x]),
      [z, k, x]
    );
    m.useEffect(() => {
      _ && $();
    }, [_, $]);
    const { onOpenChange: W, triggerPointerDownPosRef: K } = w;
    m.useEffect(() => {
      if (x) {
        let B = { x: 0, y: 0 };
        const q = (ae) => {
          var Q, U;
          B = {
            x: Math.abs(Math.round(ae.pageX) - (((Q = K.current) == null ? void 0 : Q.x) ?? 0)),
            y: Math.abs(Math.round(ae.pageY) - (((U = K.current) == null ? void 0 : U.y) ?? 0))
          };
        }, se = (ae) => {
          B.x <= 10 && B.y <= 10 ? ae.preventDefault() : x.contains(ae.target) || W(!1), document.removeEventListener("pointermove", q), K.current = null;
        };
        return K.current !== null && (document.addEventListener("pointermove", q), document.addEventListener("pointerup", se, { capture: !0, once: !0 })), () => {
          document.removeEventListener("pointermove", q), document.removeEventListener("pointerup", se, { capture: !0 });
        };
      }
    }, [x, W, K]), m.useEffect(() => {
      const B = () => W(!1);
      return window.addEventListener("blur", B), window.addEventListener("resize", B), () => {
        window.removeEventListener("blur", B), window.removeEventListener("resize", B);
      };
    }, [W]);
    const [E, P] = iy((B) => {
      const q = G().filter((Q) => !Q.disabled), se = q.find((Q) => Q.ref.current === document.activeElement), ae = ay(q, B, se);
      ae && setTimeout(() => ae.ref.current.focus());
    }), ee = m.useCallback(
      (B, q, se) => {
        const ae = !V.current && !se;
        (w.value !== void 0 && w.value === q || ae) && (R(B), ae && (V.current = !0));
      },
      [w.value]
    ), oe = m.useCallback(() => x == null ? void 0 : x.focus(), [x]), ie = m.useCallback(
      (B, q, se) => {
        const ae = !V.current && !se;
        (w.value !== void 0 && w.value === q || ae) && X(B);
      },
      [w.value]
    ), de = r === "popper" ? Hl : Ug, ce = de === Hl ? {
      side: s,
      sideOffset: c,
      align: u,
      alignOffset: d,
      arrowPadding: f,
      collisionBoundary: h,
      collisionPadding: v,
      sticky: g,
      hideWhenDetached: p,
      avoidCollisions: y
    } : {};
    return /* @__PURE__ */ l(
      Wg,
      {
        scope: n,
        content: x,
        viewport: M,
        onViewportChange: I,
        itemRefCallback: ee,
        selectedItem: k,
        onItemLeave: oe,
        itemTextRefCallback: ie,
        focusSelectedItem: $,
        selectedItemText: j,
        position: r,
        isPositioned: _,
        searchRef: E,
        children: /* @__PURE__ */ l(ns, { as: ar, allowPinchZoom: !0, children: /* @__PURE__ */ l(
          Ja,
          {
            asChild: !0,
            trapped: w.open,
            onMountAutoFocus: (B) => {
              B.preventDefault();
            },
            onUnmountAutoFocus: re(o, (B) => {
              var q;
              (q = w.trigger) == null || q.focus({ preventScroll: !0 }), B.preventDefault();
            }),
            children: /* @__PURE__ */ l(
              Da,
              {
                asChild: !0,
                disableOutsidePointerEvents: !0,
                onEscapeKeyDown: i,
                onPointerDownOutside: a,
                onFocusOutside: (B) => B.preventDefault(),
                onDismiss: () => w.onOpenChange(!1),
                children: /* @__PURE__ */ l(
                  de,
                  {
                    role: "listbox",
                    id: w.contentId,
                    "data-state": w.open ? "open" : "closed",
                    dir: w.dir,
                    onContextMenu: (B) => B.preventDefault(),
                    ...b,
                    ...ce,
                    onPlaced: () => F(!0),
                    ref: T,
                    style: {
                      // flex layout so we can place the scroll buttons properly
                      display: "flex",
                      flexDirection: "column",
                      // reset the outline by default as the content MAY get focused
                      outline: "none",
                      ...b.style
                    },
                    onKeyDown: re(b.onKeyDown, (B) => {
                      const q = B.ctrlKey || B.altKey || B.metaKey;
                      if (B.key === "Tab" && B.preventDefault(), !q && B.key.length === 1 && P(B.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes(B.key)) {
                        let ae = G().filter((Q) => !Q.disabled).map((Q) => Q.ref.current);
                        if (["ArrowUp", "End"].includes(B.key) && (ae = ae.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(B.key)) {
                          const Q = B.target, U = ae.indexOf(Q);
                          ae = ae.slice(U + 1);
                        }
                        setTimeout(() => z(ae)), B.preventDefault();
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
jg.displayName = _R;
var OR = "SelectItemAlignedPosition", Ug = m.forwardRef((e, t) => {
  const { __scopeSelect: n, onPlaced: r, ...o } = e, i = jn(cr, n), a = Un(cr, n), [s, c] = m.useState(null), [u, d] = m.useState(null), f = Se(t, (T) => d(T)), h = os(n), v = m.useRef(!1), g = m.useRef(!0), { viewport: p, selectedItem: y, selectedItemText: b, focusSelectedItem: w } = a, x = m.useCallback(() => {
    if (i.trigger && i.valueNode && s && u && p && y && b) {
      const T = i.trigger.getBoundingClientRect(), k = u.getBoundingClientRect(), R = i.valueNode.getBoundingClientRect(), j = b.getBoundingClientRect();
      if (i.dir !== "rtl") {
        const Q = j.left - k.left, U = R.left - Q, fe = T.left - U, H = T.width + fe, ye = Math.max(H, k.width), Pe = window.innerWidth - dn, Me = Vl(U, [dn, Pe - ye]);
        s.style.minWidth = H + "px", s.style.left = Me + "px";
      } else {
        const Q = k.right - j.right, U = window.innerWidth - R.right - Q, fe = window.innerWidth - T.right - U, H = T.width + fe, ye = Math.max(H, k.width), Pe = window.innerWidth - dn, Me = Vl(U, [dn, Pe - ye]);
        s.style.minWidth = H + "px", s.style.right = Me + "px";
      }
      const X = h(), G = window.innerHeight - dn * 2, _ = p.scrollHeight, F = window.getComputedStyle(u), V = parseInt(F.borderTopWidth, 10), z = parseInt(F.paddingTop, 10), $ = parseInt(F.borderBottomWidth, 10), W = parseInt(F.paddingBottom, 10), K = V + z + _ + W + $, E = Math.min(y.offsetHeight * 5, K), P = window.getComputedStyle(p), ee = parseInt(P.paddingTop, 10), oe = parseInt(P.paddingBottom, 10), ie = T.top + T.height / 2 - dn, de = G - ie, ce = y.offsetHeight / 2, B = y.offsetTop + ce, q = V + z + B, se = K - q;
      if (q <= ie) {
        const Q = y === X[X.length - 1].ref.current;
        s.style.bottom = "0px";
        const U = u.clientHeight - p.offsetTop - p.offsetHeight, fe = Math.max(
          de,
          ce + // viewport might have padding bottom, include it to avoid a scrollable viewport
          (Q ? oe : 0) + U + $
        ), H = q + fe;
        s.style.height = H + "px";
      } else {
        const Q = y === X[0].ref.current;
        s.style.top = "0px";
        const fe = Math.max(
          ie,
          V + p.offsetTop + // viewport might have padding top, include it to avoid a scrollable viewport
          (Q ? ee : 0) + ce
        ) + se;
        s.style.height = fe + "px", p.scrollTop = q - ie + p.offsetTop;
      }
      s.style.margin = `${dn}px 0`, s.style.minHeight = E + "px", s.style.maxHeight = G + "px", r == null || r(), requestAnimationFrame(() => v.current = !0);
    }
  }, [
    h,
    i.trigger,
    i.valueNode,
    s,
    u,
    p,
    y,
    b,
    i.dir,
    r
  ]);
  Xe(() => x(), [x]);
  const [C, M] = m.useState();
  Xe(() => {
    u && M(window.getComputedStyle(u).zIndex);
  }, [u]);
  const I = m.useCallback(
    (T) => {
      T && g.current === !0 && (x(), w == null || w(), g.current = !1);
    },
    [x, w]
  );
  return /* @__PURE__ */ l(
    IR,
    {
      scope: n,
      contentWrapper: s,
      shouldExpandOnScrollRef: v,
      onScrollButtonChange: I,
      children: /* @__PURE__ */ l(
        "div",
        {
          ref: c,
          style: {
            display: "flex",
            flexDirection: "column",
            position: "fixed",
            zIndex: C
          },
          children: /* @__PURE__ */ l(
            ve.div,
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
Ug.displayName = OR;
var LR = "SelectPopperPosition", Hl = m.forwardRef((e, t) => {
  const {
    __scopeSelect: n,
    align: r = "start",
    collisionPadding: o = dn,
    ...i
  } = e, a = is(n);
  return /* @__PURE__ */ l(
    bc,
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
Hl.displayName = LR;
var [IR, Su] = eo(cr, {}), zl = "SelectViewport", Hg = m.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, nonce: r, ...o } = e, i = Un(zl, n), a = Su(zl, n), s = Se(t, i.onViewportChange), c = m.useRef(0);
    return /* @__PURE__ */ S(we, { children: [
      /* @__PURE__ */ l(
        "style",
        {
          dangerouslySetInnerHTML: {
            __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"
          },
          nonce: r
        }
      ),
      /* @__PURE__ */ l(rs.Slot, { scope: n, children: /* @__PURE__ */ l(
        ve.div,
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
          onScroll: re(o.onScroll, (u) => {
            const d = u.currentTarget, { contentWrapper: f, shouldExpandOnScrollRef: h } = a;
            if (h != null && h.current && f) {
              const v = Math.abs(c.current - d.scrollTop);
              if (v > 0) {
                const g = window.innerHeight - dn * 2, p = parseFloat(f.style.minHeight), y = parseFloat(f.style.height), b = Math.max(p, y);
                if (b < g) {
                  const w = b + v, x = Math.min(g, w), C = w - x;
                  f.style.height = x + "px", f.style.bottom === "0px" && (d.scrollTop = C > 0 ? C : 0, f.style.justifyContent = "flex-end");
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
Hg.displayName = zl;
var zg = "SelectGroup", [FR, VR] = eo(zg), $R = m.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e, o = Mt();
    return /* @__PURE__ */ l(FR, { scope: n, id: o, children: /* @__PURE__ */ l(ve.div, { role: "group", "aria-labelledby": o, ...r, ref: t }) });
  }
);
$R.displayName = zg;
var Gg = "SelectLabel", Yg = m.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e, o = VR(Gg, n);
    return /* @__PURE__ */ l(ve.div, { id: o.id, ...r, ref: t });
  }
);
Yg.displayName = Gg;
var pa = "SelectItem", [BR, Kg] = eo(pa), Xg = m.forwardRef(
  (e, t) => {
    const {
      __scopeSelect: n,
      value: r,
      disabled: o = !1,
      textValue: i,
      ...a
    } = e, s = jn(pa, n), c = Un(pa, n), u = s.value === r, [d, f] = m.useState(i ?? ""), [h, v] = m.useState(!1), g = Se(
      t,
      (b) => {
        var w;
        return (w = c.itemRefCallback) == null ? void 0 : w.call(c, b, r, o);
      }
    ), p = Mt(), y = () => {
      o || (s.onValueChange(r), s.onOpenChange(!1));
    };
    if (r === "")
      throw new Error(
        "A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder."
      );
    return /* @__PURE__ */ l(
      BR,
      {
        scope: n,
        value: r,
        disabled: o,
        textId: p,
        isSelected: u,
        onItemTextChange: m.useCallback((b) => {
          f((w) => w || ((b == null ? void 0 : b.textContent) ?? "").trim());
        }, []),
        children: /* @__PURE__ */ l(
          rs.ItemSlot,
          {
            scope: n,
            value: r,
            disabled: o,
            textValue: d,
            children: /* @__PURE__ */ l(
              ve.div,
              {
                role: "option",
                "aria-labelledby": p,
                "data-highlighted": h ? "" : void 0,
                "aria-selected": u && h,
                "data-state": u ? "checked" : "unchecked",
                "aria-disabled": o || void 0,
                "data-disabled": o ? "" : void 0,
                tabIndex: o ? void 0 : -1,
                ...a,
                ref: g,
                onFocus: re(a.onFocus, () => v(!0)),
                onBlur: re(a.onBlur, () => v(!1)),
                onPointerUp: re(a.onPointerUp, y),
                onPointerMove: re(a.onPointerMove, (b) => {
                  var w;
                  o ? (w = c.onItemLeave) == null || w.call(c) : b.currentTarget.focus({ preventScroll: !0 });
                }),
                onPointerLeave: re(a.onPointerLeave, (b) => {
                  var w;
                  b.currentTarget === document.activeElement && ((w = c.onItemLeave) == null || w.call(c));
                }),
                onKeyDown: re(a.onKeyDown, (b) => {
                  var x;
                  ((x = c.searchRef) == null ? void 0 : x.current) !== "" && b.key === " " || (PR.includes(b.key) && y(), b.key === " " && b.preventDefault());
                })
              }
            )
          }
        )
      }
    );
  }
);
Xg.displayName = pa;
var vo = "SelectItemText", qg = m.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, className: r, style: o, ...i } = e, a = jn(vo, n), s = Un(vo, n), c = Kg(vo, n), u = kR(vo, n), [d, f] = m.useState(null), h = Se(
      t,
      (b) => f(b),
      c.onItemTextChange,
      (b) => {
        var w;
        return (w = s.itemTextRefCallback) == null ? void 0 : w.call(s, b, c.value, c.disabled);
      }
    ), v = d == null ? void 0 : d.textContent, g = m.useMemo(
      () => /* @__PURE__ */ l("option", { value: c.value, disabled: c.disabled, children: v }, c.value),
      [c.disabled, c.value, v]
    ), { onNativeOptionAdd: p, onNativeOptionRemove: y } = u;
    return Xe(() => (p(g), () => y(g)), [p, y, g]), /* @__PURE__ */ S(we, { children: [
      /* @__PURE__ */ l(ve.span, { id: c.textId, ...i, ref: h }),
      c.isSelected && a.valueNode && !a.valueNodeHasChildren ? Mc.createPortal(i.children, a.valueNode) : null
    ] });
  }
);
qg.displayName = vo;
var Zg = "SelectItemIndicator", Qg = m.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e;
    return Kg(Zg, n).isSelected ? /* @__PURE__ */ l(ve.span, { "aria-hidden": !0, ...r, ref: t }) : null;
  }
);
Qg.displayName = Zg;
var Gl = "SelectScrollUpButton", Jg = m.forwardRef((e, t) => {
  const n = Un(Gl, e.__scopeSelect), r = Su(Gl, e.__scopeSelect), [o, i] = m.useState(!1), a = Se(t, r.onScrollButtonChange);
  return Xe(() => {
    if (n.viewport && n.isPositioned) {
      let s = function() {
        const u = c.scrollTop > 0;
        i(u);
      };
      const c = n.viewport;
      return s(), c.addEventListener("scroll", s), () => c.removeEventListener("scroll", s);
    }
  }, [n.viewport, n.isPositioned]), o ? /* @__PURE__ */ l(
    ty,
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
Jg.displayName = Gl;
var Yl = "SelectScrollDownButton", ey = m.forwardRef((e, t) => {
  const n = Un(Yl, e.__scopeSelect), r = Su(Yl, e.__scopeSelect), [o, i] = m.useState(!1), a = Se(t, r.onScrollButtonChange);
  return Xe(() => {
    if (n.viewport && n.isPositioned) {
      let s = function() {
        const u = c.scrollHeight - c.clientHeight, d = Math.ceil(c.scrollTop) < u;
        i(d);
      };
      const c = n.viewport;
      return s(), c.addEventListener("scroll", s), () => c.removeEventListener("scroll", s);
    }
  }, [n.viewport, n.isPositioned]), o ? /* @__PURE__ */ l(
    ty,
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
ey.displayName = Yl;
var ty = m.forwardRef((e, t) => {
  const { __scopeSelect: n, onAutoScroll: r, ...o } = e, i = Un("SelectScrollButton", n), a = m.useRef(null), s = os(n), c = m.useCallback(() => {
    a.current !== null && (window.clearInterval(a.current), a.current = null);
  }, []);
  return m.useEffect(() => () => c(), [c]), Xe(() => {
    var d;
    const u = s().find((f) => f.ref.current === document.activeElement);
    (d = u == null ? void 0 : u.ref.current) == null || d.scrollIntoView({ block: "nearest" });
  }, [s]), /* @__PURE__ */ l(
    ve.div,
    {
      "aria-hidden": !0,
      ...o,
      ref: t,
      style: { flexShrink: 0, ...o.style },
      onPointerDown: re(o.onPointerDown, () => {
        a.current === null && (a.current = window.setInterval(r, 50));
      }),
      onPointerMove: re(o.onPointerMove, () => {
        var u;
        (u = i.onItemLeave) == null || u.call(i), a.current === null && (a.current = window.setInterval(r, 50));
      }),
      onPointerLeave: re(o.onPointerLeave, () => {
        c();
      })
    }
  );
}), WR = "SelectSeparator", ny = m.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e;
    return /* @__PURE__ */ l(ve.div, { "aria-hidden": !0, ...r, ref: t });
  }
);
ny.displayName = WR;
var Kl = "SelectArrow", jR = m.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e, o = is(n), i = jn(Kl, n), a = Un(Kl, n);
    return i.open && a.position === "popper" ? /* @__PURE__ */ l(wc, { ...o, ...r, ref: t }) : null;
  }
);
jR.displayName = Kl;
function ry(e) {
  return e === "" || e === void 0;
}
var oy = m.forwardRef(
  (e, t) => {
    const { value: n, ...r } = e, o = m.useRef(null), i = Se(t, o), a = Cg(n);
    return m.useEffect(() => {
      const s = o.current, c = window.HTMLSelectElement.prototype, d = Object.getOwnPropertyDescriptor(
        c,
        "value"
      ).set;
      if (a !== n && d) {
        const f = new Event("change", { bubbles: !0 });
        d.call(s, n), s.dispatchEvent(f);
      }
    }, [a, n]), /* @__PURE__ */ l(Xw, { asChild: !0, children: /* @__PURE__ */ l("select", { ...r, ref: i, defaultValue: n }) });
  }
);
oy.displayName = "BubbleSelect";
function iy(e) {
  const t = Ve(e), n = m.useRef(""), r = m.useRef(0), o = m.useCallback(
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
function ay(e, t, n) {
  const o = t.length > 1 && Array.from(t).every((u) => u === t[0]) ? t[0] : t, i = n ? e.indexOf(n) : -1;
  let a = UR(e, Math.max(i, 0));
  o.length === 1 && (a = a.filter((u) => u !== n));
  const c = a.find(
    (u) => u.textValue.toLowerCase().startsWith(o.toLowerCase())
  );
  return c !== n ? c : void 0;
}
function UR(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
var HR = Og, sy = Ig, zR = Vg, GR = $g, ly = Bg, YR = Hg, cy = Yg, uy = Xg, KR = qg, XR = Qg, dy = Jg, fy = ey, hy = ny;
const qR = HR, ZR = zR, my = m.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ l(sy, { ref: r, className: A(e), ...n, children: t }));
my.displayName = sy.displayName;
const py = m.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l(
  dy,
  {
    ref: n,
    className: A(
      "flex cursor-default items-center justify-center py-1 text-f1-icon",
      e
    ),
    ...t,
    children: /* @__PURE__ */ l(Ce, { icon: gu, size: "sm" })
  }
));
py.displayName = dy.displayName;
const vy = m.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l(
  fy,
  {
    ref: n,
    className: A(
      "flex cursor-default items-center justify-center py-1 text-f1-icon",
      e
    ),
    ...t,
    children: /* @__PURE__ */ l(Ce, { icon: Jr, size: "sm" })
  }
));
vy.displayName = fy.displayName;
const gy = m.forwardRef(({ className: e, children: t, position: n = "popper", ...r }, o) => /* @__PURE__ */ l(GR, { children: /* @__PURE__ */ S(
  ly,
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
      /* @__PURE__ */ l(py, {}),
      /* @__PURE__ */ l(
        YR,
        {
          className: A(
            n === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
          ),
          children: t
        }
      ),
      /* @__PURE__ */ l(vy, {})
    ]
  }
) }));
gy.displayName = ly.displayName;
const QR = m.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l(
  cy,
  {
    ref: n,
    className: A("py-1.5 pl-8 pr-2 text-sm font-semibold", e),
    ...t
  }
));
QR.displayName = cy.displayName;
const yy = m.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ S(
  uy,
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
      /* @__PURE__ */ l(KR, { children: t }),
      /* @__PURE__ */ l(XR, { className: "flex text-f1-icon-selected", children: /* @__PURE__ */ l(Ce, { icon: rg, size: "md" }) })
    ]
  }
));
yy.displayName = uy.displayName;
const by = m.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l(
  hy,
  {
    ref: n,
    className: A("-mx-1 my-1 h-px bg-f1-border-secondary", e),
    ...t
  }
));
by.displayName = hy.displayName;
const JR = ({ item: e }) => /* @__PURE__ */ l(yy, { value: e.value, children: /* @__PURE__ */ S("div", { className: "flex items-start gap-1.5", children: [
  e.avatar && Qa(e.avatar, "xsmall"),
  e.icon && /* @__PURE__ */ l("div", { className: "text-f1-icon", children: /* @__PURE__ */ l(Ce, { icon: e.icon }) }),
  /* @__PURE__ */ S("div", { className: "flex flex-col", children: [
    /* @__PURE__ */ l("span", { className: "font-medium", children: e.label }),
    e.description && /* @__PURE__ */ l("div", { className: "text-f1-foreground-secondary", children: e.description })
  ] })
] }) }), eD = ({ item: e }) => /* @__PURE__ */ S("div", { className: "flex items-center gap-1.5", children: [
  e.icon && /* @__PURE__ */ l("div", { className: "h-5 shrink-0 text-f1-icon", children: /* @__PURE__ */ l(Ce, { icon: e.icon }) }),
  e.label
] }), tD = "flex h-10 w-full items-center justify-between rounded-md border border-solid border-f1-border bg-f1-background pl-3 pr-2 py-2.5 transition-colors placeholder:text-f1-foreground-secondary hover:border-f1-border-hover disabled:cursor-not-allowed disabled:bg-f1-background-secondary disabled:opacity-50 [&>span]:line-clamp-1", nD = Z(
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
    return /* @__PURE__ */ S(
      qR,
      {
        onValueChange: r,
        value: o,
        disabled: a,
        open: s,
        onOpenChange: c,
        ...u,
        children: [
          /* @__PURE__ */ l(my, { ref: d, asChild: !0, children: i || /* @__PURE__ */ S(
            "button",
            {
              className: A(
                tD,
                kt("focus-visible:border-f1-border-hover")
              ),
              children: [
                /* @__PURE__ */ l(ZR, { placeholder: t, asChild: !0, children: f && /* @__PURE__ */ l(eD, { item: f }) }),
                /* @__PURE__ */ l("div", { className: "flex h-6 w-6 items-center justify-center", children: /* @__PURE__ */ l("div", { className: "h-4 w-4 rounded-2xs bg-f1-background-secondary", children: /* @__PURE__ */ l(Ce, { icon: Jr, size: "xs" }) }) })
              ]
            }
          ) }),
          /* @__PURE__ */ l(gy, { children: n.map(
            (h, v) => h === "separator" ? /* @__PURE__ */ l(by, {}, `separator-${v}`) : /* @__PURE__ */ l(JR, { item: h }, h.value)
          ) })
        ]
      }
    );
  }
), wy = m.forwardRef(
  ({ className: e, ...t }, n) => /* @__PURE__ */ l(
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
wy.displayName = "Textarea";
const hI = rt(
  {
    name: "Textarea",
    type: "form"
  },
  wy
);
var ol = "rovingFocusGroup.onEntryFocus", rD = { bubbles: !1, cancelable: !0 }, as = "RovingFocusGroup", [Xl, xy, oD] = ci(as), [iD, ss] = rn(
  as,
  [oD]
), [aD, sD] = iD(as), Cy = m.forwardRef(
  (e, t) => /* @__PURE__ */ l(Xl.Provider, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ l(Xl.Slot, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ l(lD, { ...e, ref: t }) }) })
);
Cy.displayName = as;
var lD = m.forwardRef((e, t) => {
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
  } = e, h = m.useRef(null), v = Se(t, h), g = Zr(i), [p = null, y] = It({
    prop: a,
    defaultProp: s,
    onChange: c
  }), [b, w] = m.useState(!1), x = Ve(u), C = xy(n), M = m.useRef(!1), [I, T] = m.useState(0);
  return m.useEffect(() => {
    const k = h.current;
    if (k)
      return k.addEventListener(ol, x), () => k.removeEventListener(ol, x);
  }, [x]), /* @__PURE__ */ l(
    aD,
    {
      scope: n,
      orientation: r,
      dir: g,
      loop: o,
      currentTabStopId: p,
      onItemFocus: m.useCallback(
        (k) => y(k),
        [y]
      ),
      onItemShiftTab: m.useCallback(() => w(!0), []),
      onFocusableItemAdd: m.useCallback(
        () => T((k) => k + 1),
        []
      ),
      onFocusableItemRemove: m.useCallback(
        () => T((k) => k - 1),
        []
      ),
      children: /* @__PURE__ */ l(
        ve.div,
        {
          tabIndex: b || I === 0 ? -1 : 0,
          "data-orientation": r,
          ...f,
          ref: v,
          style: { outline: "none", ...e.style },
          onMouseDown: re(e.onMouseDown, () => {
            M.current = !0;
          }),
          onFocus: re(e.onFocus, (k) => {
            const R = !M.current;
            if (k.target === k.currentTarget && R && !b) {
              const j = new CustomEvent(ol, rD);
              if (k.currentTarget.dispatchEvent(j), !j.defaultPrevented) {
                const X = C().filter((z) => z.focusable), G = X.find((z) => z.active), _ = X.find((z) => z.id === p), V = [G, _, ...X].filter(
                  Boolean
                ).map((z) => z.ref.current);
                Py(V, d);
              }
            }
            M.current = !1;
          }),
          onBlur: re(e.onBlur, () => w(!1))
        }
      )
    }
  );
}), Sy = "RovingFocusGroupItem", Ny = m.forwardRef(
  (e, t) => {
    const {
      __scopeRovingFocusGroup: n,
      focusable: r = !0,
      active: o = !1,
      tabStopId: i,
      ...a
    } = e, s = Mt(), c = i || s, u = sD(Sy, n), d = u.currentTabStopId === c, f = xy(n), { onFocusableItemAdd: h, onFocusableItemRemove: v } = u;
    return m.useEffect(() => {
      if (r)
        return h(), () => v();
    }, [r, h, v]), /* @__PURE__ */ l(
      Xl.ItemSlot,
      {
        scope: n,
        id: c,
        focusable: r,
        active: o,
        children: /* @__PURE__ */ l(
          ve.span,
          {
            tabIndex: d ? 0 : -1,
            "data-orientation": u.orientation,
            ...a,
            ref: t,
            onMouseDown: re(e.onMouseDown, (g) => {
              r ? u.onItemFocus(c) : g.preventDefault();
            }),
            onFocus: re(e.onFocus, () => u.onItemFocus(c)),
            onKeyDown: re(e.onKeyDown, (g) => {
              if (g.key === "Tab" && g.shiftKey) {
                u.onItemShiftTab();
                return;
              }
              if (g.target !== g.currentTarget) return;
              const p = dD(g, u.orientation, u.dir);
              if (p !== void 0) {
                if (g.metaKey || g.ctrlKey || g.altKey || g.shiftKey) return;
                g.preventDefault();
                let b = f().filter((w) => w.focusable).map((w) => w.ref.current);
                if (p === "last") b.reverse();
                else if (p === "prev" || p === "next") {
                  p === "prev" && b.reverse();
                  const w = b.indexOf(g.currentTarget);
                  b = u.loop ? fD(b, w + 1) : b.slice(w + 1);
                }
                setTimeout(() => Py(b));
              }
            })
          }
        )
      }
    );
  }
);
Ny.displayName = Sy;
var cD = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function uD(e, t) {
  return t !== "rtl" ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e;
}
function dD(e, t, n) {
  const r = uD(e.key, n);
  if (!(t === "vertical" && ["ArrowLeft", "ArrowRight"].includes(r)) && !(t === "horizontal" && ["ArrowUp", "ArrowDown"].includes(r)))
    return cD[r];
}
function Py(e, t = !1) {
  const n = document.activeElement;
  for (const r of e)
    if (r === n || (r.focus({ preventScroll: t }), document.activeElement !== n)) return;
}
function fD(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
var My = Cy, Ey = Ny, hD = "Toggle", Nu = m.forwardRef((e, t) => {
  const { pressed: n, defaultPressed: r = !1, onPressedChange: o, ...i } = e, [a = !1, s] = It({
    prop: n,
    onChange: o,
    defaultProp: r
  });
  return /* @__PURE__ */ l(
    ve.button,
    {
      type: "button",
      "aria-pressed": a,
      "data-state": a ? "on" : "off",
      "data-disabled": e.disabled ? "" : void 0,
      ...i,
      ref: t,
      onClick: re(e.onClick, () => {
        e.disabled || s(!a);
      })
    }
  );
});
Nu.displayName = hD;
var Ty = Nu, to = "ToggleGroup", [ky, mI] = rn(to, [
  ss
]), Ry = ss(), Pu = L.forwardRef((e, t) => {
  const { type: n, ...r } = e;
  if (n === "single")
    return /* @__PURE__ */ l(mD, { ...r, ref: t });
  if (n === "multiple")
    return /* @__PURE__ */ l(pD, { ...r, ref: t });
  throw new Error(`Missing prop \`type\` expected on \`${to}\``);
});
Pu.displayName = to;
var [Dy, Ay] = ky(to), mD = L.forwardRef((e, t) => {
  const {
    value: n,
    defaultValue: r,
    onValueChange: o = () => {
    },
    ...i
  } = e, [a, s] = It({
    prop: n,
    defaultProp: r,
    onChange: o
  });
  return /* @__PURE__ */ l(
    Dy,
    {
      scope: e.__scopeToggleGroup,
      type: "single",
      value: a ? [a] : [],
      onItemActivate: s,
      onItemDeactivate: L.useCallback(() => s(""), [s]),
      children: /* @__PURE__ */ l(_y, { ...i, ref: t })
    }
  );
}), pD = L.forwardRef((e, t) => {
  const {
    value: n,
    defaultValue: r,
    onValueChange: o = () => {
    },
    ...i
  } = e, [a = [], s] = It({
    prop: n,
    defaultProp: r,
    onChange: o
  }), c = L.useCallback(
    (d) => s((f = []) => [...f, d]),
    [s]
  ), u = L.useCallback(
    (d) => s((f = []) => f.filter((h) => h !== d)),
    [s]
  );
  return /* @__PURE__ */ l(
    Dy,
    {
      scope: e.__scopeToggleGroup,
      type: "multiple",
      value: a,
      onItemActivate: c,
      onItemDeactivate: u,
      children: /* @__PURE__ */ l(_y, { ...i, ref: t })
    }
  );
});
Pu.displayName = to;
var [vD, gD] = ky(to), _y = L.forwardRef(
  (e, t) => {
    const {
      __scopeToggleGroup: n,
      disabled: r = !1,
      rovingFocus: o = !0,
      orientation: i,
      dir: a,
      loop: s = !0,
      ...c
    } = e, u = Ry(n), d = Zr(a), f = { role: "group", dir: d, ...c };
    return /* @__PURE__ */ l(vD, { scope: n, rovingFocus: o, disabled: r, children: o ? /* @__PURE__ */ l(
      My,
      {
        asChild: !0,
        ...u,
        orientation: i,
        dir: d,
        loop: s,
        children: /* @__PURE__ */ l(ve.div, { ...f, ref: t })
      }
    ) : /* @__PURE__ */ l(ve.div, { ...f, ref: t }) });
  }
), va = "ToggleGroupItem", Oy = L.forwardRef(
  (e, t) => {
    const n = Ay(va, e.__scopeToggleGroup), r = gD(va, e.__scopeToggleGroup), o = Ry(e.__scopeToggleGroup), i = n.value.includes(e.value), a = r.disabled || e.disabled, s = { ...e, pressed: i, disabled: a }, c = L.useRef(null);
    return r.rovingFocus ? /* @__PURE__ */ l(
      Ey,
      {
        asChild: !0,
        ...o,
        focusable: !a,
        active: i,
        ref: c,
        children: /* @__PURE__ */ l(Ah, { ...s, ref: t })
      }
    ) : /* @__PURE__ */ l(Ah, { ...s, ref: t });
  }
);
Oy.displayName = va;
var Ah = L.forwardRef(
  (e, t) => {
    const { __scopeToggleGroup: n, value: r, ...o } = e, i = Ay(va, n), a = { role: "radio", "aria-checked": e.pressed, "aria-pressed": void 0 }, s = i.type === "single" ? a : void 0;
    return /* @__PURE__ */ l(
      Nu,
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
), Ly = Pu, Iy = Oy;
const Fy = Ye(
  A(
    "inline-flex items-center justify-center rounded-sm text-sm font-medium transition-colors hover:bg-f1-background-secondary hover:text-f1-foreground-secondary disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-f1-background-secondary data-[state=on]:text-f1-foreground",
    kt()
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
), yD = m.forwardRef(({ className: e, variant: t, size: n, ...r }, o) => /* @__PURE__ */ l(
  Ty,
  {
    ref: o,
    className: A(Fy({ variant: t, size: n, className: e })),
    ...r
  }
));
yD.displayName = Ty.displayName;
const Vy = m.createContext({
  size: "default",
  variant: "default"
}), $y = m.forwardRef(({ className: e, variant: t, size: n, children: r, ...o }, i) => /* @__PURE__ */ l(
  Ly,
  {
    ref: i,
    className: A("flex items-center justify-center gap-1.5", e),
    ...o,
    children: /* @__PURE__ */ l(Vy.Provider, { value: { variant: t, size: n }, children: r })
  }
));
$y.displayName = Ly.displayName;
const By = m.forwardRef(({ className: e, children: t, variant: n, size: r, ...o }, i) => {
  const a = m.useContext(Vy);
  return /* @__PURE__ */ l(
    Iy,
    {
      ref: i,
      className: A(
        Fy({
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
By.displayName = Iy.displayName;
var di = (e) => e.type === "checkbox", Or = (e) => e instanceof Date, ft = (e) => e == null;
const Wy = (e) => typeof e == "object";
var Ze = (e) => !ft(e) && !Array.isArray(e) && Wy(e) && !Or(e), jy = (e) => Ze(e) && e.target ? di(e.target) ? e.target.checked : e.target.value : e, bD = (e) => e.substring(0, e.search(/\.\d+(\.|$)/)) || e, Uy = (e, t) => e.has(bD(t)), wD = (e) => {
  const t = e.constructor && e.constructor.prototype;
  return Ze(t) && t.hasOwnProperty("isPrototypeOf");
}, Mu = typeof window < "u" && typeof window.HTMLElement < "u" && typeof document < "u";
function vt(e) {
  let t;
  const n = Array.isArray(e);
  if (e instanceof Date)
    t = new Date(e);
  else if (e instanceof Set)
    t = new Set(e);
  else if (!(Mu && (e instanceof Blob || e instanceof FileList)) && (n || Ze(e)))
    if (t = n ? [] : {}, !n && !wD(e))
      t = e;
    else
      for (const r in e)
        e.hasOwnProperty(r) && (t[r] = vt(e[r]));
  else
    return e;
  return t;
}
var ls = (e) => Array.isArray(e) ? e.filter(Boolean) : [], ze = (e) => e === void 0, ne = (e, t, n) => {
  if (!t || !Ze(e))
    return n;
  const r = ls(t.split(/[,[\].]+?/)).reduce((o, i) => ft(o) ? o : o[i], e);
  return ze(r) || r === e ? ze(e[t]) ? n : e[t] : r;
}, _t = (e) => typeof e == "boolean", Eu = (e) => /^\w*$/.test(e), Hy = (e) => ls(e.replace(/["|']|\]/g, "").split(/\.|\[/)), _e = (e, t, n) => {
  let r = -1;
  const o = Eu(t) ? [t] : Hy(t), i = o.length, a = i - 1;
  for (; ++r < i; ) {
    const s = o[r];
    let c = n;
    if (r !== a) {
      const u = e[s];
      c = Ze(u) || Array.isArray(u) ? u : isNaN(+o[r + 1]) ? {} : [];
    }
    if (s === "__proto__")
      return;
    e[s] = c, e = e[s];
  }
  return e;
};
const ga = {
  BLUR: "blur",
  FOCUS_OUT: "focusout",
  CHANGE: "change"
}, Ut = {
  onBlur: "onBlur",
  onChange: "onChange",
  onSubmit: "onSubmit",
  onTouched: "onTouched",
  all: "all"
}, cn = {
  max: "max",
  min: "min",
  maxLength: "maxLength",
  minLength: "minLength",
  pattern: "pattern",
  required: "required",
  validate: "validate"
}, zy = L.createContext(null), fi = () => L.useContext(zy), xD = (e) => {
  const { children: t, ...n } = e;
  return L.createElement(zy.Provider, { value: n }, t);
};
var Gy = (e, t, n, r = !0) => {
  const o = {
    defaultValues: t._defaultValues
  };
  for (const i in e)
    Object.defineProperty(o, i, {
      get: () => {
        const a = i;
        return t._proxyFormState[a] !== Ut.all && (t._proxyFormState[a] = !r || Ut.all), n && (n[a] = !0), e[a];
      }
    });
  return o;
}, gt = (e) => Ze(e) && !Object.keys(e).length, Yy = (e, t, n, r) => {
  n(e);
  const { name: o, ...i } = e;
  return gt(i) || Object.keys(i).length >= Object.keys(t).length || Object.keys(i).find((a) => t[a] === (!r || Ut.all));
}, _o = (e) => Array.isArray(e) ? e : [e], Ky = (e, t, n) => !e || !t || e === t || _o(e).some((r) => r && (n ? r === t : r.startsWith(t) || t.startsWith(r)));
function Tu(e) {
  const t = L.useRef(e);
  t.current = e, L.useEffect(() => {
    const n = !e.disabled && t.current.subject && t.current.subject.subscribe({
      next: t.current.next
    });
    return () => {
      n && n.unsubscribe();
    };
  }, [e.disabled]);
}
function CD(e) {
  const t = fi(), { control: n = t.control, disabled: r, name: o, exact: i } = e || {}, [a, s] = L.useState(n._formState), c = L.useRef(!0), u = L.useRef({
    isDirty: !1,
    isLoading: !1,
    dirtyFields: !1,
    touchedFields: !1,
    validatingFields: !1,
    isValidating: !1,
    isValid: !1,
    errors: !1
  }), d = L.useRef(o);
  return d.current = o, Tu({
    disabled: r,
    next: (f) => c.current && Ky(d.current, f.name, i) && Yy(f, u.current, n._updateFormState) && s({
      ...n._formState,
      ...f
    }),
    subject: n._subjects.state
  }), L.useEffect(() => (c.current = !0, u.current.isValid && n._updateValid(!0), () => {
    c.current = !1;
  }), [n]), Gy(a, n, u.current, !1);
}
var Jt = (e) => typeof e == "string", Xy = (e, t, n, r, o) => Jt(e) ? (r && t.watch.add(e), ne(n, e, o)) : Array.isArray(e) ? e.map((i) => (r && t.watch.add(i), ne(n, i))) : (r && (t.watchAll = !0), n);
function SD(e) {
  const t = fi(), { control: n = t.control, name: r, defaultValue: o, disabled: i, exact: a } = e || {}, s = L.useRef(r);
  s.current = r, Tu({
    disabled: i,
    subject: n._subjects.values,
    next: (d) => {
      Ky(s.current, d.name, a) && u(vt(Xy(s.current, n._names, d.values || n._formValues, !1, o)));
    }
  });
  const [c, u] = L.useState(n._getWatch(r, o));
  return L.useEffect(() => n._removeUnmounted()), c;
}
function ND(e) {
  const t = fi(), { name: n, disabled: r, control: o = t.control, shouldUnregister: i } = e, a = Uy(o._names.array, n), s = SD({
    control: o,
    name: n,
    defaultValue: ne(o._formValues, n, ne(o._defaultValues, n, e.defaultValue)),
    exact: !0
  }), c = CD({
    control: o,
    name: n,
    exact: !0
  }), u = L.useRef(o.register(n, {
    ...e.rules,
    value: s,
    ..._t(e.disabled) ? { disabled: e.disabled } : {}
  }));
  return L.useEffect(() => {
    const d = o._options.shouldUnregister || i, f = (h, v) => {
      const g = ne(o._fields, h);
      g && g._f && (g._f.mount = v);
    };
    if (f(n, !0), d) {
      const h = vt(ne(o._options.defaultValues, n));
      _e(o._defaultValues, n, h), ze(ne(o._formValues, n)) && _e(o._formValues, n, h);
    }
    return () => {
      (a ? d && !o._state.action : d) ? o.unregister(n) : f(n, !1);
    };
  }, [n, o, a, i]), L.useEffect(() => {
    ne(o._fields, n) && o._updateDisabledField({
      disabled: r,
      fields: o._fields,
      name: n,
      value: ne(o._fields, n)._f.value
    });
  }, [r, n, o]), {
    field: {
      name: n,
      value: s,
      ..._t(r) || c.disabled ? { disabled: c.disabled || r } : {},
      onChange: L.useCallback((d) => u.current.onChange({
        target: {
          value: jy(d),
          name: n
        },
        type: ga.CHANGE
      }), [n]),
      onBlur: L.useCallback(() => u.current.onBlur({
        target: {
          value: ne(o._formValues, n),
          name: n
        },
        type: ga.BLUR
      }), [n, o]),
      ref: L.useCallback((d) => {
        const f = ne(o._fields, n);
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
        get: () => !!ne(c.errors, n)
      },
      isDirty: {
        enumerable: !0,
        get: () => !!ne(c.dirtyFields, n)
      },
      isTouched: {
        enumerable: !0,
        get: () => !!ne(c.touchedFields, n)
      },
      isValidating: {
        enumerable: !0,
        get: () => !!ne(c.validatingFields, n)
      },
      error: {
        enumerable: !0,
        get: () => ne(c.errors, n)
      }
    })
  };
}
const PD = (e) => e.render(ND(e));
var MD = (e, t, n, r, o) => t ? {
  ...n[e],
  types: {
    ...n[e] && n[e].types ? n[e].types : {},
    [r]: o || !0
  }
} : {}, _h = (e) => ({
  isOnSubmit: !e || e === Ut.onSubmit,
  isOnBlur: e === Ut.onBlur,
  isOnChange: e === Ut.onChange,
  isOnAll: e === Ut.all,
  isOnTouch: e === Ut.onTouched
}), Oh = (e, t, n) => !n && (t.watchAll || t.watch.has(e) || [...t.watch].some((r) => e.startsWith(r) && /^\.\w+/.test(e.slice(r.length))));
const Oo = (e, t, n, r) => {
  for (const o of n || Object.keys(e)) {
    const i = ne(e, o);
    if (i) {
      const { _f: a, ...s } = i;
      if (a) {
        if (a.refs && a.refs[0] && t(a.refs[0], o) && !r)
          return !0;
        if (a.ref && t(a.ref, a.name) && !r)
          return !0;
        if (Oo(s, t))
          break;
      } else if (Ze(s) && Oo(s, t))
        break;
    }
  }
};
var ED = (e, t, n) => {
  const r = _o(ne(e, n));
  return _e(r, "root", t[n]), _e(e, n, r), e;
}, ku = (e) => e.type === "file", pn = (e) => typeof e == "function", ya = (e) => {
  if (!Mu)
    return !1;
  const t = e ? e.ownerDocument : 0;
  return e instanceof (t && t.defaultView ? t.defaultView.HTMLElement : HTMLElement);
}, Gi = (e) => Jt(e), Ru = (e) => e.type === "radio", ba = (e) => e instanceof RegExp;
const Lh = {
  value: !1,
  isValid: !1
}, Ih = { value: !0, isValid: !0 };
var qy = (e) => {
  if (Array.isArray(e)) {
    if (e.length > 1) {
      const t = e.filter((n) => n && n.checked && !n.disabled).map((n) => n.value);
      return { value: t, isValid: !!t.length };
    }
    return e[0].checked && !e[0].disabled ? (
      // @ts-expect-error expected to work in the browser
      e[0].attributes && !ze(e[0].attributes.value) ? ze(e[0].value) || e[0].value === "" ? Ih : { value: e[0].value, isValid: !0 } : Ih
    ) : Lh;
  }
  return Lh;
};
const Fh = {
  isValid: !1,
  value: null
};
var Zy = (e) => Array.isArray(e) ? e.reduce((t, n) => n && n.checked && !n.disabled ? {
  isValid: !0,
  value: n.value
} : t, Fh) : Fh;
function Vh(e, t, n = "validate") {
  if (Gi(e) || Array.isArray(e) && e.every(Gi) || _t(e) && !e)
    return {
      type: n,
      message: Gi(e) ? e : "",
      ref: t
    };
}
var Sr = (e) => Ze(e) && !ba(e) ? e : {
  value: e,
  message: ""
}, $h = async (e, t, n, r, o) => {
  const { ref: i, refs: a, required: s, maxLength: c, minLength: u, min: d, max: f, pattern: h, validate: v, name: g, valueAsNumber: p, mount: y, disabled: b } = e._f, w = ne(t, g);
  if (!y || b)
    return {};
  const x = a ? a[0] : i, C = (G) => {
    r && x.reportValidity && (x.setCustomValidity(_t(G) ? "" : G || ""), x.reportValidity());
  }, M = {}, I = Ru(i), T = di(i), k = I || T, R = (p || ku(i)) && ze(i.value) && ze(w) || ya(i) && i.value === "" || w === "" || Array.isArray(w) && !w.length, j = MD.bind(null, g, n, M), X = (G, _, F, V = cn.maxLength, z = cn.minLength) => {
    const $ = G ? _ : F;
    M[g] = {
      type: G ? V : z,
      message: $,
      ref: i,
      ...j(G ? V : z, $)
    };
  };
  if (o ? !Array.isArray(w) || !w.length : s && (!k && (R || ft(w)) || _t(w) && !w || T && !qy(a).isValid || I && !Zy(a).isValid)) {
    const { value: G, message: _ } = Gi(s) ? { value: !!s, message: s } : Sr(s);
    if (G && (M[g] = {
      type: cn.required,
      message: _,
      ref: x,
      ...j(cn.required, _)
    }, !n))
      return C(_), M;
  }
  if (!R && (!ft(d) || !ft(f))) {
    let G, _;
    const F = Sr(f), V = Sr(d);
    if (!ft(w) && !isNaN(w)) {
      const z = i.valueAsNumber || w && +w;
      ft(F.value) || (G = z > F.value), ft(V.value) || (_ = z < V.value);
    } else {
      const z = i.valueAsDate || new Date(w), $ = (E) => /* @__PURE__ */ new Date((/* @__PURE__ */ new Date()).toDateString() + " " + E), W = i.type == "time", K = i.type == "week";
      Jt(F.value) && w && (G = W ? $(w) > $(F.value) : K ? w > F.value : z > new Date(F.value)), Jt(V.value) && w && (_ = W ? $(w) < $(V.value) : K ? w < V.value : z < new Date(V.value));
    }
    if ((G || _) && (X(!!G, F.message, V.message, cn.max, cn.min), !n))
      return C(M[g].message), M;
  }
  if ((c || u) && !R && (Jt(w) || o && Array.isArray(w))) {
    const G = Sr(c), _ = Sr(u), F = !ft(G.value) && w.length > +G.value, V = !ft(_.value) && w.length < +_.value;
    if ((F || V) && (X(F, G.message, _.message), !n))
      return C(M[g].message), M;
  }
  if (h && !R && Jt(w)) {
    const { value: G, message: _ } = Sr(h);
    if (ba(G) && !w.match(G) && (M[g] = {
      type: cn.pattern,
      message: _,
      ref: i,
      ...j(cn.pattern, _)
    }, !n))
      return C(_), M;
  }
  if (v) {
    if (pn(v)) {
      const G = await v(w, t), _ = Vh(G, x);
      if (_ && (M[g] = {
        ..._,
        ...j(cn.validate, _.message)
      }, !n))
        return C(_.message), M;
    } else if (Ze(v)) {
      let G = {};
      for (const _ in v) {
        if (!gt(G) && !n)
          break;
        const F = Vh(await v[_](w, t), x, _);
        F && (G = {
          ...F,
          ...j(_, F.message)
        }, C(F.message), n && (M[g] = G));
      }
      if (!gt(G) && (M[g] = {
        ref: x,
        ...G
      }, !n))
        return M;
    }
  }
  return C(!0), M;
};
function TD(e, t) {
  const n = t.slice(0, -1).length;
  let r = 0;
  for (; r < n; )
    e = ze(e) ? r++ : e[t[r++]];
  return e;
}
function kD(e) {
  for (const t in e)
    if (e.hasOwnProperty(t) && !ze(e[t]))
      return !1;
  return !0;
}
function Qe(e, t) {
  const n = Array.isArray(t) ? t : Eu(t) ? [t] : Hy(t), r = n.length === 1 ? e : TD(e, n), o = n.length - 1, i = n[o];
  return r && delete r[i], o !== 0 && (Ze(r) && gt(r) || Array.isArray(r) && kD(r)) && Qe(e, n.slice(0, -1)), e;
}
var il = () => {
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
}, wa = (e) => ft(e) || !Wy(e);
function On(e, t) {
  if (wa(e) || wa(t))
    return e === t;
  if (Or(e) && Or(t))
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
      if (Or(i) && Or(a) || Ze(i) && Ze(a) || Array.isArray(i) && Array.isArray(a) ? !On(i, a) : i !== a)
        return !1;
    }
  }
  return !0;
}
var Qy = (e) => e.type === "select-multiple", RD = (e) => Ru(e) || di(e), al = (e) => ya(e) && e.isConnected, Jy = (e) => {
  for (const t in e)
    if (pn(e[t]))
      return !0;
  return !1;
};
function xa(e, t = {}) {
  const n = Array.isArray(e);
  if (Ze(e) || n)
    for (const r in e)
      Array.isArray(e[r]) || Ze(e[r]) && !Jy(e[r]) ? (t[r] = Array.isArray(e[r]) ? [] : {}, xa(e[r], t[r])) : ft(e[r]) || (t[r] = !0);
  return t;
}
function e0(e, t, n) {
  const r = Array.isArray(e);
  if (Ze(e) || r)
    for (const o in e)
      Array.isArray(e[o]) || Ze(e[o]) && !Jy(e[o]) ? ze(t) || wa(n[o]) ? n[o] = Array.isArray(e[o]) ? xa(e[o], []) : { ...xa(e[o]) } : e0(e[o], ft(t) ? {} : t[o], n[o]) : n[o] = !On(e[o], t[o]);
  return n;
}
var _i = (e, t) => e0(e, t, xa(t)), t0 = (e, { valueAsNumber: t, valueAsDate: n, setValueAs: r }) => ze(e) ? e : t ? e === "" ? NaN : e && +e : n && Jt(e) ? new Date(e) : r ? r(e) : e;
function sl(e) {
  const t = e.ref;
  if (!(e.refs ? e.refs.every((n) => n.disabled) : t.disabled))
    return ku(t) ? t.files : Ru(t) ? Zy(e.refs).value : Qy(t) ? [...t.selectedOptions].map(({ value: n }) => n) : di(t) ? qy(e.refs).value : t0(ze(t.value) ? e.ref.value : t.value, e);
}
var DD = (e, t, n, r) => {
  const o = {};
  for (const i of e) {
    const a = ne(t, i);
    a && _e(o, i, a._f);
  }
  return {
    criteriaMode: n,
    names: [...e],
    fields: o,
    shouldUseNativeValidation: r
  };
}, co = (e) => ze(e) ? e : ba(e) ? e.source : Ze(e) ? ba(e.value) ? e.value.source : e.value : e;
const Bh = "AsyncFunction";
var AD = (e) => (!e || !e.validate) && !!(pn(e.validate) && e.validate.constructor.name === Bh || Ze(e.validate) && Object.values(e.validate).find((t) => t.constructor.name === Bh)), _D = (e) => e.mount && (e.required || e.min || e.max || e.maxLength || e.minLength || e.pattern || e.validate);
function Wh(e, t, n) {
  const r = ne(e, n);
  if (r || Eu(n))
    return {
      error: r,
      name: n
    };
  const o = n.split(".");
  for (; o.length; ) {
    const i = o.join("."), a = ne(t, i), s = ne(e, i);
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
var OD = (e, t, n, r, o) => o.isOnAll ? !1 : !n && o.isOnTouch ? !(t || e) : (n ? r.isOnBlur : o.isOnBlur) ? !e : (n ? r.isOnChange : o.isOnChange) ? e : !0, LD = (e, t) => !ls(ne(e, t)).length && Qe(e, t);
const ID = {
  mode: Ut.onSubmit,
  reValidateMode: Ut.onChange,
  shouldFocusError: !0
};
function FD(e = {}) {
  let t = {
    ...ID,
    ...e
  }, n = {
    submitCount: 0,
    isDirty: !1,
    isLoading: pn(t.defaultValues),
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
  }, r = {}, o = Ze(t.defaultValues) || Ze(t.values) ? vt(t.defaultValues || t.values) || {} : {}, i = t.shouldUnregister ? {} : vt(o), a = {
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
    values: il(),
    array: il(),
    state: il()
  }, h = _h(t.mode), v = _h(t.reValidateMode), g = t.criteriaMode === Ut.all, p = (N) => (D) => {
    clearTimeout(u), u = setTimeout(N, D);
  }, y = async (N) => {
    if (d.isValid || N) {
      const D = t.resolver ? gt((await k()).errors) : await j(r, !0);
      D !== n.isValid && f.state.next({
        isValid: D
      });
    }
  }, b = (N, D) => {
    (d.isValidating || d.validatingFields) && ((N || Array.from(s.mount)).forEach((O) => {
      O && (D ? _e(n.validatingFields, O, D) : Qe(n.validatingFields, O));
    }), f.state.next({
      validatingFields: n.validatingFields,
      isValidating: !gt(n.validatingFields)
    }));
  }, w = (N, D = [], O, te, J = !0, Y = !0) => {
    if (te && O) {
      if (a.action = !0, Y && Array.isArray(ne(r, N))) {
        const le = O(ne(r, N), te.argA, te.argB);
        J && _e(r, N, le);
      }
      if (Y && Array.isArray(ne(n.errors, N))) {
        const le = O(ne(n.errors, N), te.argA, te.argB);
        J && _e(n.errors, N, le), LD(n.errors, N);
      }
      if (d.touchedFields && Y && Array.isArray(ne(n.touchedFields, N))) {
        const le = O(ne(n.touchedFields, N), te.argA, te.argB);
        J && _e(n.touchedFields, N, le);
      }
      d.dirtyFields && (n.dirtyFields = _i(o, i)), f.state.next({
        name: N,
        isDirty: G(N, D),
        dirtyFields: n.dirtyFields,
        errors: n.errors,
        isValid: n.isValid
      });
    } else
      _e(i, N, D);
  }, x = (N, D) => {
    _e(n.errors, N, D), f.state.next({
      errors: n.errors
    });
  }, C = (N) => {
    n.errors = N, f.state.next({
      errors: n.errors,
      isValid: !1
    });
  }, M = (N, D, O, te) => {
    const J = ne(r, N);
    if (J) {
      const Y = ne(i, N, ze(O) ? ne(o, N) : O);
      ze(Y) || te && te.defaultChecked || D ? _e(i, N, D ? Y : sl(J._f)) : V(N, Y), a.mount && y();
    }
  }, I = (N, D, O, te, J) => {
    let Y = !1, le = !1;
    const be = {
      name: N
    }, Ie = !!(ne(r, N) && ne(r, N)._f && ne(r, N)._f.disabled);
    if (!O || te) {
      d.isDirty && (le = n.isDirty, n.isDirty = be.isDirty = G(), Y = le !== be.isDirty);
      const Fe = Ie || On(ne(o, N), D);
      le = !!(!Ie && ne(n.dirtyFields, N)), Fe || Ie ? Qe(n.dirtyFields, N) : _e(n.dirtyFields, N, !0), be.dirtyFields = n.dirtyFields, Y = Y || d.dirtyFields && le !== !Fe;
    }
    if (O) {
      const Fe = ne(n.touchedFields, N);
      Fe || (_e(n.touchedFields, N, O), be.touchedFields = n.touchedFields, Y = Y || d.touchedFields && Fe !== O);
    }
    return Y && J && f.state.next(be), Y ? be : {};
  }, T = (N, D, O, te) => {
    const J = ne(n.errors, N), Y = d.isValid && _t(D) && n.isValid !== D;
    if (e.delayError && O ? (c = p(() => x(N, O)), c(e.delayError)) : (clearTimeout(u), c = null, O ? _e(n.errors, N, O) : Qe(n.errors, N)), (O ? !On(J, O) : J) || !gt(te) || Y) {
      const le = {
        ...te,
        ...Y && _t(D) ? { isValid: D } : {},
        errors: n.errors,
        name: N
      };
      n = {
        ...n,
        ...le
      }, f.state.next(le);
    }
  }, k = async (N) => {
    b(N, !0);
    const D = await t.resolver(i, t.context, DD(N || s.mount, r, t.criteriaMode, t.shouldUseNativeValidation));
    return b(N), D;
  }, R = async (N) => {
    const { errors: D } = await k(N);
    if (N)
      for (const O of N) {
        const te = ne(D, O);
        te ? _e(n.errors, O, te) : Qe(n.errors, O);
      }
    else
      n.errors = D;
    return D;
  }, j = async (N, D, O = {
    valid: !0
  }) => {
    for (const te in N) {
      const J = N[te];
      if (J) {
        const { _f: Y, ...le } = J;
        if (Y) {
          const be = s.array.has(Y.name), Ie = J._f && AD(J._f);
          Ie && d.validatingFields && b([te], !0);
          const Fe = await $h(J, i, g, t.shouldUseNativeValidation && !D, be);
          if (Ie && d.validatingFields && b([te]), Fe[Y.name] && (O.valid = !1, D))
            break;
          !D && (ne(Fe, Y.name) ? be ? ED(n.errors, Fe, Y.name) : _e(n.errors, Y.name, Fe[Y.name]) : Qe(n.errors, Y.name));
        }
        !gt(le) && await j(le, D, O);
      }
    }
    return O.valid;
  }, X = () => {
    for (const N of s.unMount) {
      const D = ne(r, N);
      D && (D._f.refs ? D._f.refs.every((O) => !al(O)) : !al(D._f.ref)) && ce(N);
    }
    s.unMount = /* @__PURE__ */ new Set();
  }, G = (N, D) => (N && D && _e(i, N, D), !On(P(), o)), _ = (N, D, O) => Xy(N, s, {
    ...a.mount ? i : ze(D) ? o : Jt(N) ? { [N]: D } : D
  }, O, D), F = (N) => ls(ne(a.mount ? i : o, N, e.shouldUnregister ? ne(o, N, []) : [])), V = (N, D, O = {}) => {
    const te = ne(r, N);
    let J = D;
    if (te) {
      const Y = te._f;
      Y && (!Y.disabled && _e(i, N, t0(D, Y)), J = ya(Y.ref) && ft(D) ? "" : D, Qy(Y.ref) ? [...Y.ref.options].forEach((le) => le.selected = J.includes(le.value)) : Y.refs ? di(Y.ref) ? Y.refs.length > 1 ? Y.refs.forEach((le) => (!le.defaultChecked || !le.disabled) && (le.checked = Array.isArray(J) ? !!J.find((be) => be === le.value) : J === le.value)) : Y.refs[0] && (Y.refs[0].checked = !!J) : Y.refs.forEach((le) => le.checked = le.value === J) : ku(Y.ref) ? Y.ref.value = "" : (Y.ref.value = J, Y.ref.type || f.values.next({
        name: N,
        values: { ...i }
      })));
    }
    (O.shouldDirty || O.shouldTouch) && I(N, J, O.shouldTouch, O.shouldDirty, !0), O.shouldValidate && E(N);
  }, z = (N, D, O) => {
    for (const te in D) {
      const J = D[te], Y = `${N}.${te}`, le = ne(r, Y);
      (s.array.has(N) || !wa(J) || le && !le._f) && !Or(J) ? z(Y, J, O) : V(Y, J, O);
    }
  }, $ = (N, D, O = {}) => {
    const te = ne(r, N), J = s.array.has(N), Y = vt(D);
    _e(i, N, Y), J ? (f.array.next({
      name: N,
      values: { ...i }
    }), (d.isDirty || d.dirtyFields) && O.shouldDirty && f.state.next({
      name: N,
      dirtyFields: _i(o, i),
      isDirty: G(N, Y)
    })) : te && !te._f && !ft(Y) ? z(N, Y, O) : V(N, Y, O), Oh(N, s) && f.state.next({ ...n }), f.values.next({
      name: a.mount ? N : void 0,
      values: { ...i }
    });
  }, W = async (N) => {
    a.mount = !0;
    const D = N.target;
    let O = D.name, te = !0;
    const J = ne(r, O), Y = () => D.type ? sl(J._f) : jy(N), le = (be) => {
      te = Number.isNaN(be) || On(be, ne(i, O, be));
    };
    if (J) {
      let be, Ie;
      const Fe = Y(), ot = N.type === ga.BLUR || N.type === ga.FOCUS_OUT, Xt = !_D(J._f) && !t.resolver && !ne(n.errors, O) && !J._f.deps || OD(ot, ne(n.touchedFields, O), n.isSubmitted, v, h), it = Oh(O, s, ot);
      _e(i, O, Fe), ot ? (J._f.onBlur && J._f.onBlur(N), c && c(0)) : J._f.onChange && J._f.onChange(N);
      const Nt = I(O, Fe, ot, !1), Pt = !gt(Nt) || it;
      if (!ot && f.values.next({
        name: O,
        type: N.type,
        values: { ...i }
      }), Xt)
        return d.isValid && (e.mode === "onBlur" ? ot && y() : y()), Pt && f.state.next({ name: O, ...it ? {} : Nt });
      if (!ot && it && f.state.next({ ...n }), t.resolver) {
        const { errors: Rt } = await k([O]);
        if (le(Fe), te) {
          const oo = Wh(n.errors, r, O), yr = Wh(Rt, r, oo.name || O);
          be = yr.error, O = yr.name, Ie = gt(Rt);
        }
      } else
        b([O], !0), be = (await $h(J, i, g, t.shouldUseNativeValidation))[O], b([O]), le(Fe), te && (be ? Ie = !1 : d.isValid && (Ie = await j(r, !0)));
      te && (J._f.deps && E(J._f.deps), T(O, Ie, be, Nt));
    }
  }, K = (N, D) => {
    if (ne(n.errors, D) && N.focus)
      return N.focus(), 1;
  }, E = async (N, D = {}) => {
    let O, te;
    const J = _o(N);
    if (t.resolver) {
      const Y = await R(ze(N) ? N : J);
      O = gt(Y), te = N ? !J.some((le) => ne(Y, le)) : O;
    } else N ? (te = (await Promise.all(J.map(async (Y) => {
      const le = ne(r, Y);
      return await j(le && le._f ? { [Y]: le } : le);
    }))).every(Boolean), !(!te && !n.isValid) && y()) : te = O = await j(r);
    return f.state.next({
      ...!Jt(N) || d.isValid && O !== n.isValid ? {} : { name: N },
      ...t.resolver || !N ? { isValid: O } : {},
      errors: n.errors
    }), D.shouldFocus && !te && Oo(r, K, N ? J : s.mount), te;
  }, P = (N) => {
    const D = {
      ...a.mount ? i : o
    };
    return ze(N) ? D : Jt(N) ? ne(D, N) : N.map((O) => ne(D, O));
  }, ee = (N, D) => ({
    invalid: !!ne((D || n).errors, N),
    isDirty: !!ne((D || n).dirtyFields, N),
    error: ne((D || n).errors, N),
    isValidating: !!ne(n.validatingFields, N),
    isTouched: !!ne((D || n).touchedFields, N)
  }), oe = (N) => {
    N && _o(N).forEach((D) => Qe(n.errors, D)), f.state.next({
      errors: N ? n.errors : {}
    });
  }, ie = (N, D, O) => {
    const te = (ne(r, N, { _f: {} })._f || {}).ref, J = ne(n.errors, N) || {}, { ref: Y, message: le, type: be, ...Ie } = J;
    _e(n.errors, N, {
      ...Ie,
      ...D,
      ref: te
    }), f.state.next({
      name: N,
      errors: n.errors,
      isValid: !1
    }), O && O.shouldFocus && te && te.focus && te.focus();
  }, de = (N, D) => pn(N) ? f.values.subscribe({
    next: (O) => N(_(void 0, D), O)
  }) : _(N, D, !0), ce = (N, D = {}) => {
    for (const O of N ? _o(N) : s.mount)
      s.mount.delete(O), s.array.delete(O), D.keepValue || (Qe(r, O), Qe(i, O)), !D.keepError && Qe(n.errors, O), !D.keepDirty && Qe(n.dirtyFields, O), !D.keepTouched && Qe(n.touchedFields, O), !D.keepIsValidating && Qe(n.validatingFields, O), !t.shouldUnregister && !D.keepDefaultValue && Qe(o, O);
    f.values.next({
      values: { ...i }
    }), f.state.next({
      ...n,
      ...D.keepDirty ? { isDirty: G() } : {}
    }), !D.keepIsValid && y();
  }, B = ({ disabled: N, name: D, field: O, fields: te, value: J }) => {
    if (_t(N) && a.mount || N) {
      const Y = N ? void 0 : ze(J) ? sl(O ? O._f : ne(te, D)._f) : J;
      _e(i, D, Y), I(D, Y, !1, !1, !0);
    }
  }, q = (N, D = {}) => {
    let O = ne(r, N);
    const te = _t(D.disabled) || _t(e.disabled);
    return _e(r, N, {
      ...O || {},
      _f: {
        ...O && O._f ? O._f : { ref: { name: N } },
        name: N,
        mount: !0,
        ...D
      }
    }), s.mount.add(N), O ? B({
      field: O,
      disabled: _t(D.disabled) ? D.disabled : e.disabled,
      name: N,
      value: D.value
    }) : M(N, !0, D.value), {
      ...te ? { disabled: D.disabled || e.disabled } : {},
      ...t.progressive ? {
        required: !!D.required,
        min: co(D.min),
        max: co(D.max),
        minLength: co(D.minLength),
        maxLength: co(D.maxLength),
        pattern: co(D.pattern)
      } : {},
      name: N,
      onChange: W,
      onBlur: W,
      ref: (J) => {
        if (J) {
          q(N, D), O = ne(r, N);
          const Y = ze(J.value) && J.querySelectorAll && J.querySelectorAll("input,select,textarea")[0] || J, le = RD(Y), be = O._f.refs || [];
          if (le ? be.find((Ie) => Ie === Y) : Y === O._f.ref)
            return;
          _e(r, N, {
            _f: {
              ...O._f,
              ...le ? {
                refs: [
                  ...be.filter(al),
                  Y,
                  ...Array.isArray(ne(o, N)) ? [{}] : []
                ],
                ref: { type: Y.type, name: N }
              } : { ref: Y }
            }
          }), M(N, !1, void 0, Y);
        } else
          O = ne(r, N, {}), O._f && (O._f.mount = !1), (t.shouldUnregister || D.shouldUnregister) && !(Uy(s.array, N) && a.action) && s.unMount.add(N);
      }
    };
  }, se = () => t.shouldFocusError && Oo(r, K, s.mount), ae = (N) => {
    _t(N) && (f.state.next({ disabled: N }), Oo(r, (D, O) => {
      const te = ne(r, O);
      te && (D.disabled = te._f.disabled || N, Array.isArray(te._f.refs) && te._f.refs.forEach((J) => {
        J.disabled = te._f.disabled || N;
      }));
    }, 0, !1));
  }, Q = (N, D) => async (O) => {
    let te;
    O && (O.preventDefault && O.preventDefault(), O.persist && O.persist());
    let J = vt(i);
    if (f.state.next({
      isSubmitting: !0
    }), t.resolver) {
      const { errors: Y, values: le } = await k();
      n.errors = Y, J = le;
    } else
      await j(r);
    if (Qe(n.errors, "root"), gt(n.errors)) {
      f.state.next({
        errors: {}
      });
      try {
        await N(J, O);
      } catch (Y) {
        te = Y;
      }
    } else
      D && await D({ ...n.errors }, O), se(), setTimeout(se);
    if (f.state.next({
      isSubmitted: !0,
      isSubmitting: !1,
      isSubmitSuccessful: gt(n.errors) && !te,
      submitCount: n.submitCount + 1,
      errors: n.errors
    }), te)
      throw te;
  }, U = (N, D = {}) => {
    ne(r, N) && (ze(D.defaultValue) ? $(N, vt(ne(o, N))) : ($(N, D.defaultValue), _e(o, N, vt(D.defaultValue))), D.keepTouched || Qe(n.touchedFields, N), D.keepDirty || (Qe(n.dirtyFields, N), n.isDirty = D.defaultValue ? G(N, vt(ne(o, N))) : G()), D.keepError || (Qe(n.errors, N), d.isValid && y()), f.state.next({ ...n }));
  }, fe = (N, D = {}) => {
    const O = N ? vt(N) : o, te = vt(O), J = gt(N), Y = J ? o : te;
    if (D.keepDefaultValues || (o = O), !D.keepValues) {
      if (D.keepDirtyValues)
        for (const le of s.mount)
          ne(n.dirtyFields, le) ? _e(Y, le, ne(i, le)) : $(le, ne(Y, le));
      else {
        if (Mu && ze(N))
          for (const le of s.mount) {
            const be = ne(r, le);
            if (be && be._f) {
              const Ie = Array.isArray(be._f.refs) ? be._f.refs[0] : be._f.ref;
              if (ya(Ie)) {
                const Fe = Ie.closest("form");
                if (Fe) {
                  Fe.reset();
                  break;
                }
              }
            }
          }
        r = {};
      }
      i = e.shouldUnregister ? D.keepDefaultValues ? vt(o) : {} : vt(Y), f.array.next({
        values: { ...Y }
      }), f.values.next({
        values: { ...Y }
      });
    }
    s = {
      mount: D.keepDirtyValues ? s.mount : /* @__PURE__ */ new Set(),
      unMount: /* @__PURE__ */ new Set(),
      array: /* @__PURE__ */ new Set(),
      watch: /* @__PURE__ */ new Set(),
      watchAll: !1,
      focus: ""
    }, a.mount = !d.isValid || !!D.keepIsValid || !!D.keepDirtyValues, a.watch = !!e.shouldUnregister, f.state.next({
      submitCount: D.keepSubmitCount ? n.submitCount : 0,
      isDirty: J ? !1 : D.keepDirty ? n.isDirty : !!(D.keepDefaultValues && !On(N, o)),
      isSubmitted: D.keepIsSubmitted ? n.isSubmitted : !1,
      dirtyFields: J ? {} : D.keepDirtyValues ? D.keepDefaultValues && i ? _i(o, i) : n.dirtyFields : D.keepDefaultValues && N ? _i(o, N) : D.keepDirty ? n.dirtyFields : {},
      touchedFields: D.keepTouched ? n.touchedFields : {},
      errors: D.keepErrors ? n.errors : {},
      isSubmitSuccessful: D.keepIsSubmitSuccessful ? n.isSubmitSuccessful : !1,
      isSubmitting: !1
    });
  }, H = (N, D) => fe(pn(N) ? N(i) : N, D);
  return {
    control: {
      register: q,
      unregister: ce,
      getFieldState: ee,
      handleSubmit: Q,
      setError: ie,
      _executeSchema: k,
      _getWatch: _,
      _getDirty: G,
      _updateValid: y,
      _removeUnmounted: X,
      _updateFieldArray: w,
      _updateDisabledField: B,
      _getFieldArray: F,
      _reset: fe,
      _resetDefaultValues: () => pn(t.defaultValues) && t.defaultValues().then((N) => {
        H(N, t.resetOptions), f.state.next({
          isLoading: !1
        });
      }),
      _updateFormState: (N) => {
        n = {
          ...n,
          ...N
        };
      },
      _disableForm: ae,
      _subjects: f,
      _proxyFormState: d,
      _setErrors: C,
      get _fields() {
        return r;
      },
      get _formValues() {
        return i;
      },
      get _state() {
        return a;
      },
      set _state(N) {
        a = N;
      },
      get _defaultValues() {
        return o;
      },
      get _names() {
        return s;
      },
      set _names(N) {
        s = N;
      },
      get _formState() {
        return n;
      },
      set _formState(N) {
        n = N;
      },
      get _options() {
        return t;
      },
      set _options(N) {
        t = {
          ...t,
          ...N
        };
      }
    },
    trigger: E,
    register: q,
    handleSubmit: Q,
    watch: de,
    setValue: $,
    getValues: P,
    reset: H,
    resetField: U,
    clearErrors: oe,
    unregister: ce,
    setError: ie,
    setFocus: (N, D = {}) => {
      const O = ne(r, N), te = O && O._f;
      if (te) {
        const J = te.refs ? te.refs[0] : te.ref;
        J.focus && (J.focus(), D.shouldSelect && J.select());
      }
    },
    getFieldState: ee
  };
}
function pI(e = {}) {
  const t = L.useRef(), n = L.useRef(), [r, o] = L.useState({
    isDirty: !1,
    isValidating: !1,
    isLoading: pn(e.defaultValues),
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
    defaultValues: pn(e.defaultValues) ? void 0 : e.defaultValues
  });
  t.current || (t.current = {
    ...FD(e),
    formState: r
  });
  const i = t.current.control;
  return i._options = e, Tu({
    subject: i._subjects.state,
    next: (a) => {
      Yy(a, i._proxyFormState, i._updateFormState, !0) && o({ ...i._formState });
    }
  }), L.useEffect(() => i._disableForm(e.disabled), [i, e.disabled]), L.useEffect(() => {
    if (i._proxyFormState.isDirty) {
      const a = i._getDirty();
      a !== r.isDirty && i._subjects.state.next({
        isDirty: a
      });
    }
  }, [i, r.isDirty]), L.useEffect(() => {
    e.values && !On(e.values, n.current) ? (i._reset(e.values, i._options.resetOptions), n.current = e.values, o((a) => ({ ...a }))) : i._resetDefaultValues();
  }, [e.values, i]), L.useEffect(() => {
    e.errors && i._setErrors(e.errors);
  }, [e.errors, i]), L.useEffect(() => {
    i._state.mount || (i._updateValid(), i._state.mount = !0), i._state.watch && (i._state.watch = !1, i._subjects.state.next({ ...i._formState })), i._removeUnmounted();
  }), L.useEffect(() => {
    e.shouldUnregister && i._subjects.values.next({
      values: i._getWatch()
    });
  }, [e.shouldUnregister, i]), t.current.formState = Gy(r, i), t.current;
}
var VD = "Label", n0 = m.forwardRef((e, t) => /* @__PURE__ */ l(
  ve.label,
  {
    ...e,
    ref: t,
    onMouseDown: (n) => {
      var o;
      n.target.closest("button, input, select, textarea") || ((o = e.onMouseDown) == null || o.call(e, n), !n.defaultPrevented && n.detail > 1 && n.preventDefault());
    }
  }
));
n0.displayName = VD;
var r0 = n0;
const $D = Ye(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
), o0 = m.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l(
  r0,
  {
    ref: n,
    className: A($D(), e),
    ...t
  }
));
o0.displayName = r0.displayName;
const BD = xD, i0 = m.createContext(
  {}
), WD = ({
  ...e
}) => {
  const { formState: t } = fi();
  return /* @__PURE__ */ l(i0.Provider, { value: { name: e.name }, children: /* @__PURE__ */ l(PD, { ...e, disabled: t.isSubmitting }) });
}, cs = () => {
  const e = m.useContext(i0), t = m.useContext(a0), { getFieldState: n, formState: r } = fi(), o = n(e.name, r);
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
}, a0 = m.createContext(
  {}
), s0 = m.forwardRef(({ className: e, ...t }, n) => {
  const r = m.useId();
  return /* @__PURE__ */ l(a0.Provider, { value: { id: r }, children: /* @__PURE__ */ l("div", { ref: n, className: A("space-y-2", e), ...t }) });
});
s0.displayName = "FormItem";
const l0 = m.forwardRef(({ className: e, ...t }, n) => {
  const { error: r, formItemId: o } = cs();
  return /* @__PURE__ */ l(
    o0,
    {
      ref: n,
      className: A(r && "text-f1-foreground-critical", e),
      htmlFor: o,
      ...t
    }
  );
});
l0.displayName = "FormLabel";
const c0 = m.forwardRef(({ ...e }, t) => {
  const { error: n, formItemId: r, formDescriptionId: o, formMessageId: i } = cs();
  return /* @__PURE__ */ l(
    ar,
    {
      ref: t,
      id: r,
      "aria-describedby": n ? `${o} ${i}` : `${o}`,
      "aria-invalid": !!n,
      ...e
    }
  );
});
c0.displayName = "FormControl";
const u0 = m.forwardRef(({ className: e, ...t }, n) => {
  const { formDescriptionId: r } = cs();
  return /* @__PURE__ */ l(
    "p",
    {
      ref: n,
      id: r,
      className: A("text-sm text-f1-foreground-secondary", e),
      ...t
    }
  );
});
u0.displayName = "FormDescription";
const d0 = m.forwardRef(({ className: e, children: t, ...n }, r) => {
  const { error: o, formMessageId: i } = cs(), a = o ? String(o == null ? void 0 : o.message) : t;
  return a ? /* @__PURE__ */ l(
    "p",
    {
      ref: r,
      id: i,
      className: A(
        "text-sm font-medium text-f1-foreground-critical",
        e
      ),
      ...n,
      children: a
    }
  ) : null;
});
d0.displayName = "FormMessage";
function vI({
  onSubmit: e,
  children: t,
  ...n
}) {
  const r = n.formState.errors.root;
  return /* @__PURE__ */ l(BD, { ...n, children: /* @__PURE__ */ S("form", { onSubmit: e, className: "flex flex-col gap-4", children: [
    r && /* @__PURE__ */ l("p", { className: "text-sm font-medium text-f1-foreground-critical", children: r.message }),
    t
  ] }) });
}
function gI({
  submitLabel: e,
  form: t
}) {
  return /* @__PURE__ */ l("div", { children: /* @__PURE__ */ l(
    $e,
    {
      type: "submit",
      label: e,
      loading: t.formState.isSubmitting
    }
  ) });
}
const yI = ({
  label: e,
  description: t,
  children: n,
  ...r
}) => /* @__PURE__ */ l(
  WD,
  {
    ...r,
    render: ({ field: o }) => /* @__PURE__ */ S(s0, { children: [
      /* @__PURE__ */ l(l0, { children: e }),
      /* @__PURE__ */ l(c0, { children: n(o) }),
      /* @__PURE__ */ l(u0, { children: t }),
      /* @__PURE__ */ l(d0, {})
    ] })
  }
), jD = Ye(
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
), UD = {
  destructive: LP,
  positive: _P,
  warning: IP,
  info: RP
}, bI = rt(
  {
    name: "Alert",
    type: "info"
  },
  // eslint-disable-next-line react/display-name
  m.forwardRef(({ className: e, variant: t = "info", children: n, ...r }, o) => {
    const i = t ? UD[t] : null;
    return /* @__PURE__ */ l(
      "div",
      {
        ref: o,
        role: "alert",
        className: A(jD({ variant: t }), e),
        ...r,
        children: /* @__PURE__ */ S("div", { className: "flex flex-row", children: [
          i && /* @__PURE__ */ l("div", { className: "mr-2 flex h-6 items-center", children: /* @__PURE__ */ l(i, { size: 20 }) }),
          /* @__PURE__ */ l("div", { children: n })
        ] })
      }
    );
  })
), wI = m.forwardRef(function({ className: t, ...n }, r) {
  return /* @__PURE__ */ l(
    "h5",
    {
      ref: r,
      className: A("mb-1 text-base font-medium tracking-tight", t),
      ...n
    }
  );
}), xI = m.forwardRef(function({ className: t, ...n }, r) {
  return /* @__PURE__ */ l(
    "div",
    {
      ref: r,
      className: A("[&_p]:leading-relaxed", t),
      ...n
    }
  );
}), HD = Ye(
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
), CI = ({ type: e, size: t }) => {
  const n = {
    critical: eg,
    warning: ag,
    info: og
  };
  return /* @__PURE__ */ l("div", { className: HD({ type: e, size: t }), children: /* @__PURE__ */ l(Ce, { icon: n[e], size: t }) });
};
function zD(e) {
  return an(e, "p");
}
function ll(e) {
  return an(e, "HH:mm");
}
function GD(e) {
  return an(e, "LLL");
}
function YD(e) {
  return e.getDate();
}
function KD(e) {
  return zM(e, { addSuffix: !0 });
}
const ql = ({ date: e }) => {
  const t = YD(e), n = GD(e);
  return /* @__PURE__ */ S("div", { className: "flex h-10 w-10 flex-col items-center justify-center rounded border border-solid border-f1-border-secondary bg-f1-background-inverse-secondary", children: [
    /* @__PURE__ */ l("div", { className: "pt-0.5 text-xs font-semibold uppercase leading-3 text-f1-special-highlight dark:text-f1-foreground-inverse-secondary", children: n }),
    /* @__PURE__ */ l("div", { className: "flex items-center justify-center text-lg font-medium leading-tight text-f1-foreground", children: t })
  ] });
};
function ht(e, t) {
  const n = e.displayName || e.name || "Component";
  return Object.assign(t, { displayName: `${n}.Skeleton` }), Object.assign(e, { Skeleton: t });
}
const f0 = ({ orientation: e = "vertical", limit: t = 600, children: n }) => /* @__PURE__ */ l(
  "div",
  {
    style: {
      maskImage: `linear-gradient(to ${e == "vertical" ? "bottom" : "right"}, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) calc(min(100% - ${t}px, 100%)), rgba(0, 0, 0, 0) 100%)`
    },
    className: e == "horizontal" ? "w-full overflow-hidden" : "w-auto",
    children: n
  }
);
function Ae({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ l(
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
const XD = {
  birthday: "🎂",
  anniversary: "🎉",
  "first-day": "💼"
}, qD = {
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
function ZD({
  firstName: e,
  lastName: t,
  src: n,
  canReact: r
}) {
  return /* @__PURE__ */ S(
    "div",
    {
      className: A(
        "relative h-32 w-full overflow-hidden rounded-md bg-f1-background",
        n ? "" : qD[bg(
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
        /* @__PURE__ */ l("div", { className: "relative flex h-full w-full items-center justify-center overflow-hidden rounded-md backdrop-blur", children: /* @__PURE__ */ S("div", { className: "relative h-fit w-fit", children: [
          /* @__PURE__ */ l(
            "div",
            {
              style: r ? {
                clipPath: "path('M69.6933 48.707C71.1842 44.7556 72 40.4731 72 36C72 16.1177 55.8823 0 36 0C16.1177 0 0 16.1177 0 36C0 55.8823 16.1177 72 36 72C40.4731 72 44.7556 71.1842 48.707 69.6933C48.6283 69.4953 48.5557 69.2942 48.4894 69.0902C48 67.5838 48 65.7226 48 62C48 58.2774 48 56.4162 48.4894 54.9098C49.4786 51.8655 51.8655 49.4786 54.9098 48.4894C56.4162 48 58.2774 48 62 48C65.7226 48 67.5838 48 69.0902 48.4894C69.2942 48.5557 69.4953 48.6283 69.6933 48.707')"
              } : {},
              children: /* @__PURE__ */ l(
                lr,
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
            $e,
            {
              label: "React",
              hideLabel: !0,
              round: !0,
              variant: "neutral",
              size: "sm",
              icon: ig
            }
          ) })
        ] }) })
      ]
    }
  );
}
var Du = {};
(function e(t, n, r, o) {
  var i = !!(t.Worker && t.Blob && t.Promise && t.OffscreenCanvas && t.OffscreenCanvasRenderingContext2D && t.HTMLCanvasElement && t.HTMLCanvasElement.prototype.transferControlToOffscreen && t.URL && t.URL.createObjectURL), a = typeof Path2D == "function" && typeof DOMMatrix == "function", s = function() {
    if (!t.OffscreenCanvas)
      return !1;
    var E = new OffscreenCanvas(1, 1), P = E.getContext("2d");
    P.fillRect(0, 0, 1, 1);
    var ee = E.transferToImageBitmap();
    try {
      P.createPattern(ee, "no-repeat");
    } catch {
      return !1;
    }
    return !0;
  }();
  function c() {
  }
  function u(E) {
    var P = n.exports.Promise, ee = P !== void 0 ? P : t.Promise;
    return typeof ee == "function" ? new ee(E) : (E(c, c), null);
  }
  var d = /* @__PURE__ */ function(E, P) {
    return {
      transform: function(ee) {
        if (E)
          return ee;
        if (P.has(ee))
          return P.get(ee);
        var oe = new OffscreenCanvas(ee.width, ee.height), ie = oe.getContext("2d");
        return ie.drawImage(ee, 0, 0), P.set(ee, oe), oe;
      },
      clear: function() {
        P.clear();
      }
    };
  }(s, /* @__PURE__ */ new Map()), f = function() {
    var E = Math.floor(16.666666666666668), P, ee, oe = {}, ie = 0;
    return typeof requestAnimationFrame == "function" && typeof cancelAnimationFrame == "function" ? (P = function(de) {
      var ce = Math.random();
      return oe[ce] = requestAnimationFrame(function B(q) {
        ie === q || ie + E - 1 < q ? (ie = q, delete oe[ce], de()) : oe[ce] = requestAnimationFrame(B);
      }), ce;
    }, ee = function(de) {
      oe[de] && cancelAnimationFrame(oe[de]);
    }) : (P = function(de) {
      return setTimeout(de, E);
    }, ee = function(de) {
      return clearTimeout(de);
    }), { frame: P, cancel: ee };
  }(), h = /* @__PURE__ */ function() {
    var E, P, ee = {};
    function oe(ie) {
      function de(ce, B) {
        ie.postMessage({ options: ce || {}, callback: B });
      }
      ie.init = function(B) {
        var q = B.transferControlToOffscreen();
        ie.postMessage({ canvas: q }, [q]);
      }, ie.fire = function(B, q, se) {
        if (P)
          return de(B, null), P;
        var ae = Math.random().toString(36).slice(2);
        return P = u(function(Q) {
          function U(fe) {
            fe.data.callback === ae && (delete ee[ae], ie.removeEventListener("message", U), P = null, d.clear(), se(), Q());
          }
          ie.addEventListener("message", U), de(B, ae), ee[ae] = U.bind(null, { data: { callback: ae } });
        }), P;
      }, ie.reset = function() {
        ie.postMessage({ reset: !0 });
        for (var B in ee)
          ee[B](), delete ee[B];
      };
    }
    return function() {
      if (E)
        return E;
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
          E = new Worker(URL.createObjectURL(new Blob([ie])));
        } catch (de) {
          return typeof console !== void 0 && typeof console.warn == "function" && console.warn("🎊 Could not load worker", de), null;
        }
        oe(E);
      }
      return E;
    };
  }(), v = {
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
  function g(E, P) {
    return P ? P(E) : E;
  }
  function p(E) {
    return E != null;
  }
  function y(E, P, ee) {
    return g(
      E && p(E[P]) ? E[P] : v[P],
      ee
    );
  }
  function b(E) {
    return E < 0 ? 0 : Math.floor(E);
  }
  function w(E, P) {
    return Math.floor(Math.random() * (P - E)) + E;
  }
  function x(E) {
    return parseInt(E, 16);
  }
  function C(E) {
    return E.map(M);
  }
  function M(E) {
    var P = String(E).replace(/[^0-9a-f]/gi, "");
    return P.length < 6 && (P = P[0] + P[0] + P[1] + P[1] + P[2] + P[2]), {
      r: x(P.substring(0, 2)),
      g: x(P.substring(2, 4)),
      b: x(P.substring(4, 6))
    };
  }
  function I(E) {
    var P = y(E, "origin", Object);
    return P.x = y(P, "x", Number), P.y = y(P, "y", Number), P;
  }
  function T(E) {
    E.width = document.documentElement.clientWidth, E.height = document.documentElement.clientHeight;
  }
  function k(E) {
    var P = E.getBoundingClientRect();
    E.width = P.width, E.height = P.height;
  }
  function R(E) {
    var P = document.createElement("canvas");
    return P.style.position = "fixed", P.style.top = "0px", P.style.left = "0px", P.style.pointerEvents = "none", P.style.zIndex = E, P;
  }
  function j(E, P, ee, oe, ie, de, ce, B, q) {
    E.save(), E.translate(P, ee), E.rotate(de), E.scale(oe, ie), E.arc(0, 0, 1, ce, B, q), E.restore();
  }
  function X(E) {
    var P = E.angle * (Math.PI / 180), ee = E.spread * (Math.PI / 180);
    return {
      x: E.x,
      y: E.y,
      wobble: Math.random() * 10,
      wobbleSpeed: Math.min(0.11, Math.random() * 0.1 + 0.05),
      velocity: E.startVelocity * 0.5 + Math.random() * E.startVelocity,
      angle2D: -P + (0.5 * ee - Math.random() * ee),
      tiltAngle: (Math.random() * (0.75 - 0.25) + 0.25) * Math.PI,
      color: E.color,
      shape: E.shape,
      tick: 0,
      totalTicks: E.ticks,
      decay: E.decay,
      drift: E.drift,
      random: Math.random() + 2,
      tiltSin: 0,
      tiltCos: 0,
      wobbleX: 0,
      wobbleY: 0,
      gravity: E.gravity * 3,
      ovalScalar: 0.6,
      scalar: E.scalar,
      flat: E.flat
    };
  }
  function G(E, P) {
    P.x += Math.cos(P.angle2D) * P.velocity + P.drift, P.y += Math.sin(P.angle2D) * P.velocity + P.gravity, P.velocity *= P.decay, P.flat ? (P.wobble = 0, P.wobbleX = P.x + 10 * P.scalar, P.wobbleY = P.y + 10 * P.scalar, P.tiltSin = 0, P.tiltCos = 0, P.random = 1) : (P.wobble += P.wobbleSpeed, P.wobbleX = P.x + 10 * P.scalar * Math.cos(P.wobble), P.wobbleY = P.y + 10 * P.scalar * Math.sin(P.wobble), P.tiltAngle += 0.1, P.tiltSin = Math.sin(P.tiltAngle), P.tiltCos = Math.cos(P.tiltAngle), P.random = Math.random() + 2);
    var ee = P.tick++ / P.totalTicks, oe = P.x + P.random * P.tiltCos, ie = P.y + P.random * P.tiltSin, de = P.wobbleX + P.random * P.tiltCos, ce = P.wobbleY + P.random * P.tiltSin;
    if (E.fillStyle = "rgba(" + P.color.r + ", " + P.color.g + ", " + P.color.b + ", " + (1 - ee) + ")", E.beginPath(), a && P.shape.type === "path" && typeof P.shape.path == "string" && Array.isArray(P.shape.matrix))
      E.fill($(
        P.shape.path,
        P.shape.matrix,
        P.x,
        P.y,
        Math.abs(de - oe) * 0.1,
        Math.abs(ce - ie) * 0.1,
        Math.PI / 10 * P.wobble
      ));
    else if (P.shape.type === "bitmap") {
      var B = Math.PI / 10 * P.wobble, q = Math.abs(de - oe) * 0.1, se = Math.abs(ce - ie) * 0.1, ae = P.shape.bitmap.width * P.scalar, Q = P.shape.bitmap.height * P.scalar, U = new DOMMatrix([
        Math.cos(B) * q,
        Math.sin(B) * q,
        -Math.sin(B) * se,
        Math.cos(B) * se,
        P.x,
        P.y
      ]);
      U.multiplySelf(new DOMMatrix(P.shape.matrix));
      var fe = E.createPattern(d.transform(P.shape.bitmap), "no-repeat");
      fe.setTransform(U), E.globalAlpha = 1 - ee, E.fillStyle = fe, E.fillRect(
        P.x - ae / 2,
        P.y - Q / 2,
        ae,
        Q
      ), E.globalAlpha = 1;
    } else if (P.shape === "circle")
      E.ellipse ? E.ellipse(P.x, P.y, Math.abs(de - oe) * P.ovalScalar, Math.abs(ce - ie) * P.ovalScalar, Math.PI / 10 * P.wobble, 0, 2 * Math.PI) : j(E, P.x, P.y, Math.abs(de - oe) * P.ovalScalar, Math.abs(ce - ie) * P.ovalScalar, Math.PI / 10 * P.wobble, 0, 2 * Math.PI);
    else if (P.shape === "star")
      for (var H = Math.PI / 2 * 3, ye = 4 * P.scalar, Pe = 8 * P.scalar, Me = P.x, N = P.y, D = 5, O = Math.PI / D; D--; )
        Me = P.x + Math.cos(H) * Pe, N = P.y + Math.sin(H) * Pe, E.lineTo(Me, N), H += O, Me = P.x + Math.cos(H) * ye, N = P.y + Math.sin(H) * ye, E.lineTo(Me, N), H += O;
    else
      E.moveTo(Math.floor(P.x), Math.floor(P.y)), E.lineTo(Math.floor(P.wobbleX), Math.floor(ie)), E.lineTo(Math.floor(de), Math.floor(ce)), E.lineTo(Math.floor(oe), Math.floor(P.wobbleY));
    return E.closePath(), E.fill(), P.tick < P.totalTicks;
  }
  function _(E, P, ee, oe, ie) {
    var de = P.slice(), ce = E.getContext("2d"), B, q, se = u(function(ae) {
      function Q() {
        B = q = null, ce.clearRect(0, 0, oe.width, oe.height), d.clear(), ie(), ae();
      }
      function U() {
        r && !(oe.width === o.width && oe.height === o.height) && (oe.width = E.width = o.width, oe.height = E.height = o.height), !oe.width && !oe.height && (ee(E), oe.width = E.width, oe.height = E.height), ce.clearRect(0, 0, oe.width, oe.height), de = de.filter(function(fe) {
          return G(ce, fe);
        }), de.length ? B = f.frame(U) : Q();
      }
      B = f.frame(U), q = Q;
    });
    return {
      addFettis: function(ae) {
        return de = de.concat(ae), se;
      },
      canvas: E,
      promise: se,
      reset: function() {
        B && f.cancel(B), q && q();
      }
    };
  }
  function F(E, P) {
    var ee = !E, oe = !!y(P || {}, "resize"), ie = !1, de = y(P, "disableForReducedMotion", Boolean), ce = i && !!y(P || {}, "useWorker"), B = ce ? h() : null, q = ee ? T : k, se = E && B ? !!E.__confetti_initialized : !1, ae = typeof matchMedia == "function" && matchMedia("(prefers-reduced-motion)").matches, Q;
    function U(H, ye, Pe) {
      for (var Me = y(H, "particleCount", b), N = y(H, "angle", Number), D = y(H, "spread", Number), O = y(H, "startVelocity", Number), te = y(H, "decay", Number), J = y(H, "gravity", Number), Y = y(H, "drift", Number), le = y(H, "colors", C), be = y(H, "ticks", Number), Ie = y(H, "shapes"), Fe = y(H, "scalar"), ot = !!y(H, "flat"), Xt = I(H), it = Me, Nt = [], Pt = E.width * Xt.x, Rt = E.height * Xt.y; it--; )
        Nt.push(
          X({
            x: Pt,
            y: Rt,
            angle: N,
            spread: D,
            startVelocity: O,
            color: le[it % le.length],
            shape: Ie[w(0, Ie.length)],
            ticks: be,
            decay: te,
            gravity: J,
            drift: Y,
            scalar: Fe,
            flat: ot
          })
        );
      return Q ? Q.addFettis(Nt) : (Q = _(E, Nt, q, ye, Pe), Q.promise);
    }
    function fe(H) {
      var ye = de || y(H, "disableForReducedMotion", Boolean), Pe = y(H, "zIndex", Number);
      if (ye && ae)
        return u(function(O) {
          O();
        });
      ee && Q ? E = Q.canvas : ee && !E && (E = R(Pe), document.body.appendChild(E)), oe && !se && q(E);
      var Me = {
        width: E.width,
        height: E.height
      };
      B && !se && B.init(E), se = !0, B && (E.__confetti_initialized = !0);
      function N() {
        if (B) {
          var O = {
            getBoundingClientRect: function() {
              if (!ee)
                return E.getBoundingClientRect();
            }
          };
          q(O), B.postMessage({
            resize: {
              width: O.width,
              height: O.height
            }
          });
          return;
        }
        Me.width = Me.height = null;
      }
      function D() {
        Q = null, oe && (ie = !1, t.removeEventListener("resize", N)), ee && E && (document.body.contains(E) && document.body.removeChild(E), E = null, se = !1);
      }
      return oe && !ie && (ie = !0, t.addEventListener("resize", N, !1)), B ? B.fire(H, Me, D) : U(H, Me, D);
    }
    return fe.reset = function() {
      B && B.reset(), Q && Q.reset();
    }, fe;
  }
  var V;
  function z() {
    return V || (V = F(null, { useWorker: !0, resize: !0 })), V;
  }
  function $(E, P, ee, oe, ie, de, ce) {
    var B = new Path2D(E), q = new Path2D();
    q.addPath(B, new DOMMatrix(P));
    var se = new Path2D();
    return se.addPath(q, new DOMMatrix([
      Math.cos(ce) * ie,
      Math.sin(ce) * ie,
      -Math.sin(ce) * de,
      Math.cos(ce) * de,
      ee,
      oe
    ])), se;
  }
  function W(E) {
    if (!a)
      throw new Error("path confetti are not supported in this browser");
    var P, ee;
    typeof E == "string" ? P = E : (P = E.path, ee = E.matrix);
    var oe = new Path2D(P), ie = document.createElement("canvas"), de = ie.getContext("2d");
    if (!ee) {
      for (var ce = 1e3, B = ce, q = ce, se = 0, ae = 0, Q, U, fe = 0; fe < ce; fe += 2)
        for (var H = 0; H < ce; H += 2)
          de.isPointInPath(oe, fe, H, "nonzero") && (B = Math.min(B, fe), q = Math.min(q, H), se = Math.max(se, fe), ae = Math.max(ae, H));
      Q = se - B, U = ae - q;
      var ye = 10, Pe = Math.min(ye / Q, ye / U);
      ee = [
        Pe,
        0,
        0,
        Pe,
        -Math.round(Q / 2 + B) * Pe,
        -Math.round(U / 2 + q) * Pe
      ];
    }
    return {
      type: "path",
      path: P,
      matrix: ee
    };
  }
  function K(E) {
    var P, ee = 1, oe = "#000000", ie = '"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif';
    typeof E == "string" ? P = E : (P = E.text, ee = "scalar" in E ? E.scalar : ee, ie = "fontFamily" in E ? E.fontFamily : ie, oe = "color" in E ? E.color : oe);
    var de = 10 * ee, ce = "" + de + "px " + ie, B = new OffscreenCanvas(de, de), q = B.getContext("2d");
    q.font = ce;
    var se = q.measureText(P), ae = Math.ceil(se.actualBoundingBoxRight + se.actualBoundingBoxLeft), Q = Math.ceil(se.actualBoundingBoxAscent + se.actualBoundingBoxDescent), U = 2, fe = se.actualBoundingBoxLeft + U, H = se.actualBoundingBoxAscent + U;
    ae += U + U, Q += U + U, B = new OffscreenCanvas(ae, Q), q = B.getContext("2d"), q.font = ce, q.fillStyle = oe, q.fillText(P, fe, H);
    var ye = 1 / ee;
    return {
      type: "bitmap",
      // TODO these probably need to be transfered for workers
      bitmap: B.transferToImageBitmap(),
      matrix: [ye, 0, 0, ye, -ae * ye / 2, -Q * ye / 2]
    };
  }
  n.exports = function() {
    return z().apply(this, arguments);
  }, n.exports.reset = function() {
    z().reset();
  }, n.exports.create = F, n.exports.shapeFromPath = W, n.exports.shapeFromText = K;
})(/* @__PURE__ */ function() {
  return typeof window < "u" ? window : typeof self < "u" ? self : this || {};
}(), Du, !1);
const Zl = Du.exports;
Du.exports.create;
function QD(e) {
  const t = Ge(null), n = Ge(), r = zt(() => {
    const i = t.current;
    if (!i) return;
    const a = Zl.create(i, {
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
  }, [e]), o = zt(() => {
    clearInterval(n.current);
  }, []);
  return { canvasRef: t, handleMouseEnter: r, handleMouseLeave: o };
}
const JD = ({
  link: e,
  firstName: t,
  lastName: n,
  src: r,
  canReact: o = !0,
  type: i,
  typeLabel: a,
  date: s
}) => {
  const c = Kr(), { canvasRef: u, handleMouseEnter: d, handleMouseLeave: f } = QD(c), h = Cc({
    emoji: XD[i],
    size: "sm"
  });
  return /* @__PURE__ */ S(
    Vt,
    {
      href: e,
      className: A(
        "relative flex flex-col rounded-xl border border-solid border-f1-border-secondary bg-f1-background-inverse-secondary no-underline transition-shadow hover:shadow",
        kt()
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
          ZD,
          {
            firstName: t,
            lastName: n,
            src: r,
            canReact: o
          }
        ) }),
        /* @__PURE__ */ S("div", { className: "flex basis-1/3 flex-row justify-between gap-2 p-3", children: [
          /* @__PURE__ */ S("div", { className: "flex min-w-0 flex-1 flex-col", children: [
            /* @__PURE__ */ S("div", { className: "truncate font-medium text-f1-foreground", children: [
              t,
              " ",
              n
            ] }),
            /* @__PURE__ */ S("div", { className: "flex flex-row items-center gap-1.5 text-f1-foreground-secondary", children: [
              /* @__PURE__ */ l("span", { className: "truncate", children: a }),
              /* @__PURE__ */ l("span", { className: "shrink-0 leading-none", children: h })
            ] })
          ] }),
          /* @__PURE__ */ l("div", { className: "shrink-0", children: /* @__PURE__ */ l(ql, { date: s }) })
        ] })
      ]
    }
  );
}, eA = () => /* @__PURE__ */ S(
  "div",
  {
    className: "bg-f1-background-inverse-secondar flex flex-col rounded-xl border border-solid border-f1-border-secondary",
    role: "status",
    "aria-busy": "true",
    "aria-live": "polite",
    children: [
      /* @__PURE__ */ l("div", { className: "basis-2/3 px-1 pt-1", children: /* @__PURE__ */ l(Ae, { className: "h-32 w-full rounded-lg" }) }),
      /* @__PURE__ */ l("div", { className: "flex basis-1/3 flex-row justify-between gap-2 p-3", children: /* @__PURE__ */ l("div", { className: "flex min-w-0 flex-1 flex-col", children: /* @__PURE__ */ S("div", { className: "flex flex-col gap-2 py-1", children: [
        /* @__PURE__ */ l(Ae, { className: "h-3 w-2/3" }),
        /* @__PURE__ */ l(Ae, { className: "h-3 w-1/3" })
      ] }) }) })
    ]
  }
), SI = ht(JD, eA), tA = Ye(
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
), nA = Ye(
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
), rA = "M50,0 C43,0 36,0 30,1 23,2 17,5 12,9 5,16 1,25 0,36 0,43 0,57 0,64 1,75 5,84 12,91 17,95 23,98 30,99 36,100 43,100 50,100 57,100 64,100 70,99 77,98 83,95 88,91 95,84 99,75 100,64 100,57 100,43 100,36 99,25 95,16 88,9 83,5 77,2 70,1 64,0 57,0 50,0";
function us({ size: e = "md", icon: t }) {
  const n = t;
  return /* @__PURE__ */ S("div", { className: tA({ size: e }), "aria-hidden": "true", children: [
    /* @__PURE__ */ S(
      "svg",
      {
        viewBox: "0 0 100 100",
        className: "absolute h-full w-full",
        preserveAspectRatio: "none",
        children: [
          /* @__PURE__ */ l("defs", { children: /* @__PURE__ */ S("linearGradient", { id: "gradient", x1: "0%", y1: "0%", x2: "100%", y2: "100%", children: [
            /* @__PURE__ */ l("stop", { offset: "0%", stopColor: "#FF355E" }),
            /* @__PURE__ */ l("stop", { offset: "44%", stopColor: "#FF355E" }),
            /* @__PURE__ */ l("stop", { offset: "100%", stopColor: "#D62D4F" })
          ] }) }),
          /* @__PURE__ */ l("path", { d: rA, fill: "url(#gradient)" })
        ]
      }
    ),
    /* @__PURE__ */ l(n, { className: nA({ size: e }) })
  ] });
}
const oA = (e, t) => /* @__PURE__ */ l("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: /* @__PURE__ */ l("path", { fill: "currentColor", d: "M11.8951 5.95457C11.9312 5.98204 11.9661 6.00955 12 6.037C12.0339 6.00955 12.0688 5.98204 12.1049 5.95457C12.7472 5.46517 13.7214 5 15.0625 5C16.4958 5 17.7381 5.70182 18.6005 6.67667C19.4599 7.64807 20 8.95087 20 10.2857C20 11.6236 19.4578 12.8943 18.7467 13.9972C18.0305 15.1081 17.0931 16.1261 16.1844 16.9791C15.272 17.8356 14.3638 18.5488 13.6858 19.047C13.346 19.2966 13.0618 19.4939 12.861 19.6297C12.7606 19.6976 12.6809 19.7502 12.6254 19.7865C12.5976 19.8046 12.5759 19.8187 12.5606 19.8285L12.5426 19.84L12.5374 19.8433L12.5346 19.8451C12.2081 20.0516 11.7919 20.0516 11.4654 19.8451L12 19C11.4654 19.8451 11.4643 19.8444 11.4643 19.8444L11.4626 19.8433L11.4574 19.84L11.4394 19.8285C11.4241 19.8187 11.4024 19.8046 11.3746 19.7865C11.3191 19.7502 11.2394 19.6976 11.139 19.6297C10.9382 19.4939 10.654 19.2966 10.3142 19.047C9.63618 18.5488 8.72799 17.8356 7.81556 16.9791C6.90694 16.1261 5.96949 15.1081 5.25329 13.9972C4.54219 12.8943 4 11.6236 4 10.2857C4 7.14266 6.65475 5 8.9375 5C10.2786 5 11.2528 5.46517 11.8951 5.95457Z", vectorEffect: "non-scaling-stroke" }) }), iA = Z(oA), NI = ({
  title: e,
  subtitle: t,
  buttonLabel: n,
  onClick: r
}) => /* @__PURE__ */ S("div", { className: "flex w-full flex-col items-start justify-between gap-4 rounded-md bg-gradient-to-r from-[#F5A51C]/30 via-[#E51943]/30 to-[#5596F6]/30 px-3 py-3 ring-1 ring-inset ring-f1-border-secondary sm:flex-row sm:items-center sm:px-4", children: [
  /* @__PURE__ */ S("div", { className: "flex flex-col items-start gap-3 sm:flex-row sm:items-center", children: [
    /* @__PURE__ */ l(us, { icon: iA, size: "lg" }),
    /* @__PURE__ */ S("div", { className: "flex flex-col gap-0", children: [
      /* @__PURE__ */ l("span", { className: "font-medium text-f1-foreground", children: e }),
      /* @__PURE__ */ l("span", { className: "text-f1-foreground-secondary", children: t })
    ] })
  ] }),
  /* @__PURE__ */ l("div", { className: "w-full sm:w-fit", children: /* @__PURE__ */ l(
    Fn,
    {
      variant: "outline",
      onClick: r,
      className: "w-full sm:w-auto",
      children: n
    }
  ) })
] });
var Au = "Popover", [h0, PI] = rn(Au, [
  Yr
]), hi = Yr(), [aA, Hn] = h0(Au), m0 = (e) => {
  const {
    __scopePopover: t,
    children: n,
    open: r,
    defaultOpen: o,
    onOpenChange: i,
    modal: a = !1
  } = e, s = hi(t), c = m.useRef(null), [u, d] = m.useState(!1), [f = !1, h] = It({
    prop: r,
    defaultProp: o,
    onChange: i
  });
  return /* @__PURE__ */ l(xc, { ...s, children: /* @__PURE__ */ l(
    aA,
    {
      scope: t,
      contentId: Mt(),
      triggerRef: c,
      open: f,
      onOpenChange: h,
      onOpenToggle: m.useCallback(() => h((v) => !v), [h]),
      hasCustomAnchor: u,
      onCustomAnchorAdd: m.useCallback(() => d(!0), []),
      onCustomAnchorRemove: m.useCallback(() => d(!1), []),
      modal: a,
      children: n
    }
  ) });
};
m0.displayName = Au;
var p0 = "PopoverAnchor", sA = m.forwardRef(
  (e, t) => {
    const { __scopePopover: n, ...r } = e, o = Hn(p0, n), i = hi(n), { onCustomAnchorAdd: a, onCustomAnchorRemove: s } = o;
    return m.useEffect(() => (a(), () => s()), [a, s]), /* @__PURE__ */ l(Ra, { ...i, ...r, ref: t });
  }
);
sA.displayName = p0;
var v0 = "PopoverTrigger", g0 = m.forwardRef(
  (e, t) => {
    const { __scopePopover: n, ...r } = e, o = Hn(v0, n), i = hi(n), a = Se(t, o.triggerRef), s = /* @__PURE__ */ l(
      ve.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": o.open,
        "aria-controls": o.contentId,
        "data-state": C0(o.open),
        ...r,
        ref: a,
        onClick: re(e.onClick, o.onOpenToggle)
      }
    );
    return o.hasCustomAnchor ? s : /* @__PURE__ */ l(Ra, { asChild: !0, ...i, children: s });
  }
);
g0.displayName = v0;
var _u = "PopoverPortal", [lA, cA] = h0(_u, {
  forceMount: void 0
}), y0 = (e) => {
  const { __scopePopover: t, forceMount: n, children: r, container: o } = e, i = Hn(_u, t);
  return /* @__PURE__ */ l(lA, { scope: t, forceMount: n, children: /* @__PURE__ */ l(Ct, { present: n || i.open, children: /* @__PURE__ */ l(Oa, { asChild: !0, container: o, children: r }) }) });
};
y0.displayName = _u;
var Hr = "PopoverContent", b0 = m.forwardRef(
  (e, t) => {
    const n = cA(Hr, e.__scopePopover), { forceMount: r = n.forceMount, ...o } = e, i = Hn(Hr, e.__scopePopover);
    return /* @__PURE__ */ l(Ct, { present: r || i.open, children: i.modal ? /* @__PURE__ */ l(uA, { ...o, ref: t }) : /* @__PURE__ */ l(dA, { ...o, ref: t }) });
  }
);
b0.displayName = Hr;
var uA = m.forwardRef(
  (e, t) => {
    const n = Hn(Hr, e.__scopePopover), r = m.useRef(null), o = Se(t, r), i = m.useRef(!1);
    return m.useEffect(() => {
      const a = r.current;
      if (a) return es(a);
    }, []), /* @__PURE__ */ l(ns, { as: ar, allowPinchZoom: !0, children: /* @__PURE__ */ l(
      w0,
      {
        ...e,
        ref: o,
        trapFocus: n.open,
        disableOutsidePointerEvents: !0,
        onCloseAutoFocus: re(e.onCloseAutoFocus, (a) => {
          var s;
          a.preventDefault(), i.current || (s = n.triggerRef.current) == null || s.focus();
        }),
        onPointerDownOutside: re(
          e.onPointerDownOutside,
          (a) => {
            const s = a.detail.originalEvent, c = s.button === 0 && s.ctrlKey === !0, u = s.button === 2 || c;
            i.current = u;
          },
          { checkForDefaultPrevented: !1 }
        ),
        onFocusOutside: re(
          e.onFocusOutside,
          (a) => a.preventDefault(),
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
), dA = m.forwardRef(
  (e, t) => {
    const n = Hn(Hr, e.__scopePopover), r = m.useRef(!1), o = m.useRef(!1);
    return /* @__PURE__ */ l(
      w0,
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
), w0 = m.forwardRef(
  (e, t) => {
    const {
      __scopePopover: n,
      trapFocus: r,
      onOpenAutoFocus: o,
      onCloseAutoFocus: i,
      disableOutsidePointerEvents: a,
      onEscapeKeyDown: s,
      onPointerDownOutside: c,
      onFocusOutside: u,
      onInteractOutside: d,
      ...f
    } = e, h = Hn(Hr, n), v = hi(n);
    return wu(), /* @__PURE__ */ l(
      Ja,
      {
        asChild: !0,
        loop: !0,
        trapped: r,
        onMountAutoFocus: o,
        onUnmountAutoFocus: i,
        children: /* @__PURE__ */ l(
          Da,
          {
            asChild: !0,
            disableOutsidePointerEvents: a,
            onInteractOutside: d,
            onEscapeKeyDown: s,
            onPointerDownOutside: c,
            onFocusOutside: u,
            onDismiss: () => h.onOpenChange(!1),
            children: /* @__PURE__ */ l(
              bc,
              {
                "data-state": C0(h.open),
                role: "dialog",
                id: h.contentId,
                ...v,
                ...f,
                ref: t,
                style: {
                  ...f.style,
                  "--radix-popover-content-transform-origin": "var(--radix-popper-transform-origin)",
                  "--radix-popover-content-available-width": "var(--radix-popper-available-width)",
                  "--radix-popover-content-available-height": "var(--radix-popper-available-height)",
                  "--radix-popover-trigger-width": "var(--radix-popper-anchor-width)",
                  "--radix-popover-trigger-height": "var(--radix-popper-anchor-height)"
                }
              }
            )
          }
        )
      }
    );
  }
), x0 = "PopoverClose", fA = m.forwardRef(
  (e, t) => {
    const { __scopePopover: n, ...r } = e, o = Hn(x0, n);
    return /* @__PURE__ */ l(
      ve.button,
      {
        type: "button",
        ...r,
        ref: t,
        onClick: re(e.onClick, () => o.onOpenChange(!1))
      }
    );
  }
);
fA.displayName = x0;
var hA = "PopoverArrow", mA = m.forwardRef(
  (e, t) => {
    const { __scopePopover: n, ...r } = e, o = hi(n);
    return /* @__PURE__ */ l(wc, { ...o, ...r, ref: t });
  }
);
mA.displayName = hA;
function C0(e) {
  return e ? "open" : "closed";
}
var pA = m0, vA = g0, gA = y0, S0 = b0;
const yA = pA, bA = vA, N0 = m.forwardRef(({ className: e, align: t = "center", sideOffset: n = 4, ...r }, o) => /* @__PURE__ */ l(gA, { children: /* @__PURE__ */ l(
  S0,
  {
    ref: o,
    align: t,
    sideOffset: n,
    className: A(
      "z-50 w-72 rounded-xs border bg-f1-background p-4 text-f1-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    ...r
  }
) }));
N0.displayName = S0.displayName;
const wA = ["👍", "🎉", "😂", "🍆", "🚀", "🙏"];
function xA({ onSelect: e }) {
  const [t, n] = Te(!1), r = Kr();
  return /* @__PURE__ */ S(yA, { open: t, onOpenChange: n, children: [
    /* @__PURE__ */ l(bA, { asChild: !0, children: /* @__PURE__ */ l(
      $e,
      {
        variant: "outline",
        label: "Add reaction",
        icon: ig,
        onClick: (o) => {
          o.stopPropagation();
        },
        hideLabel: !0
      }
    ) }),
    /* @__PURE__ */ l(
      N0,
      {
        side: "top",
        align: "start",
        className: "w-auto rounded-md border border-solid border-f1-border bg-f1-background p-1",
        children: /* @__PURE__ */ l("div", { className: "flex flex-wrap", children: /* @__PURE__ */ l(ii, { children: wA.map((o, i) => /* @__PURE__ */ l(
          wt.button,
          {
            initial: { opacity: 0, y: 8, width: 0 },
            animate: { opacity: 1, y: 0, width: 28 },
            transition: {
              duration: r ? 0 : 0.1,
              delay: i * 0.02 * (r ? 0 : 1)
            },
            onClick: (a) => {
              a.stopPropagation(), n(!1), e == null || e(o);
            },
            className: A(
              "flex h-8 items-center justify-center rounded-xs text-xl transition-colors hover:bg-f1-background-hover",
              kt()
            ),
            "aria-label": Vm(o),
            type: "button",
            tabIndex: 0,
            children: /* @__PURE__ */ l(Cc, { emoji: o, size: "md" })
          },
          o
        )) }) })
      }
    )
  ] });
}
const CA = Ye(
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
), jh = {
  cmd: qT
};
function P0({ keys: e, variant: t }) {
  return /* @__PURE__ */ l("div", { className: "flex flex-wrap items-center gap-0.5", children: e.map((n, r) => {
    const o = n.toLowerCase(), i = o in jh;
    return /* @__PURE__ */ l(
      "kbd",
      {
        className: A(
          CA({ variant: t }),
          i ? "w-5 px-0.5" : "min-w-5 px-1"
        ),
        children: i ? /* @__PURE__ */ l(Ce, { icon: jh[o], size: "sm" }) : n
      },
      r
    );
  }) });
}
function ds({
  label: e,
  description: t,
  children: n,
  shortcut: r
}) {
  return /* @__PURE__ */ l($m, { children: /* @__PURE__ */ S(Bm, { children: [
    /* @__PURE__ */ l(Wm, { asChild: !0, children: n }),
    /* @__PURE__ */ l(jm, { className: A("max-w-xs", r && "pr-1.5"), children: /* @__PURE__ */ S("div", { className: "flex flex-col gap-0.5", children: [
      /* @__PURE__ */ S("div", { className: "flex items-center gap-2", children: [
        e && /* @__PURE__ */ l("p", { className: "font-semibold", children: e }),
        r && /* @__PURE__ */ l(P0, { keys: r, variant: "inverse" })
      ] }),
      t && /* @__PURE__ */ l("p", { className: "font-normal", children: t })
    ] }) })
  ] }) });
}
function ue(e, t, n, r) {
  if (n === "a" && !r) throw new TypeError("Private accessor was defined without a getter");
  if (typeof t == "function" ? e !== t || !r : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return n === "m" ? r : n === "a" ? r.call(e) : r ? r.value : t.get(e);
}
function De(e, t, n, r, o) {
  if (typeof t == "function" ? e !== t || !o : !t.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return t.set(e, n), n;
}
const mi = typeof window < "u", wn = (e, t, n) => {
  const r = document.createElement(e), [o, i] = Array.isArray(t) ? [void 0, t] : [t, n];
  return o && Object.assign(r, o), i == null || i.forEach((a) => r.appendChild(a)), r;
}, SA = (e, t) => {
  var n;
  return t === "left" ? e.offsetLeft : (((n = e.offsetParent instanceof HTMLElement ? e.offsetParent : null) == null ? void 0 : n.offsetWidth) ?? 0) - e.offsetWidth - e.offsetLeft;
}, NA = (e) => e.offsetWidth > 0 && e.offsetHeight > 0, PA = (e, t) => {
  if (!(!mi || customElements.get(e) === t))
    return customElements.define(e, t);
};
function MA(e, t, { reverse: n = !1 } = {}) {
  const r = e.length;
  for (let o = n ? r - 1 : 0; n ? o >= 0 : o < r; n ? o-- : o++)
    t(e[o], o);
}
function EA(e, t) {
  const n = t.formatToParts(e), r = [], o = [], i = [], a = [], s = {}, c = (v) => {
    const g = s[v] == null ? s[v] = 0 : ++s[v];
    return `${v}:${g}`;
  };
  let u = "", d = !1, f = !1;
  for (const v of n) {
    u += v.value;
    const g = v.type === "minusSign" || v.type === "plusSign" ? "sign" : v.type;
    g === "integer" ? (d = !0, o.push(...v.value.split("").map((p) => ({ type: g, value: parseInt(p) })))) : g === "group" ? o.push({ type: g, value: v.value }) : g === "decimal" ? (f = !0, i.push({ type: g, value: v.value, key: c(g) })) : g === "fraction" ? i.push(...v.value.split("").map((p) => ({
      type: g,
      value: parseInt(p),
      key: c(g),
      place: -1 - s[g]
    }))) : (d || f ? a : r).push({
      type: g,
      value: v.value,
      key: c(g)
    });
  }
  const h = [];
  for (let v = o.length - 1; v >= 0; v--) {
    const g = o[v];
    h.unshift(g.type === "integer" ? {
      ...g,
      key: c(g.type),
      place: s[g.type]
    } : {
      ...g,
      key: c(g.type)
    });
  }
  return {
    pre: r,
    integer: h,
    fraction: i,
    post: a,
    formatted: u,
    value: typeof e == "string" ? parseFloat(e) : e
  };
}
const TA = String.raw, kA = mi && typeof CSS < "u" && CSS.supports("animation-timing-function", "linear(1,2)"), RA = mi && typeof CSS < "u" && CSS.supports("line-height", "mod(1,1)"), Uh = mi ? matchMedia("(prefers-reduced-motion: reduce)") : null, Ca = "--_number-flow-d-opacity", Ou = "--_number-flow-d-width", Sa = "--_number-flow-dx", Lu = "--_number-flow-d", DA = (() => {
  try {
    return CSS.registerProperty({
      name: Ca,
      syntax: "<number>",
      inherits: !1,
      initialValue: "0"
    }), CSS.registerProperty({
      name: Sa,
      syntax: "<length>",
      inherits: !0,
      initialValue: "0px"
    }), CSS.registerProperty({
      name: Ou,
      syntax: "<number>",
      inherits: !1,
      initialValue: "0"
    }), CSS.registerProperty({
      name: Lu,
      syntax: "<number>",
      inherits: !0,
      initialValue: "0"
    }), !0;
  } catch {
    return !1;
  }
})(), M0 = "var(--number-flow-char-height, 1em)", fn = "var(--number-flow-mask-height, 0.25em)", uo = `calc(${fn} / 2)`, Ql = "var(--number-flow-mask-width, 0.5em)", Yn = `calc(${Ql} / var(--scale-x))`, Oi = "#000 0, transparent 71%", Jl = "span", Hh = TA`:host{display:inline-flex;align-items:baseline;direction:ltr;white-space:nowrap;position:relative;line-height:${M0} !important;isolation:isolate;}::slotted(${Jl}){position:absolute;left:0;top:0;color:transparent !important;will-change:unset !important;z-index:-5;}:host > .number,:host > .section{pointer-events:none;user-select:none;}.number,.number__inner{display:inline-flex;align-items:baseline;transform-origin:left top;}:host([data-will-change]) .number,:host([data-will-change]) .number__inner{will-change:transform;}.number{--scale-x:calc(1 + var(${Ou}) / var(--width));transform:translateX(var(${Sa})) scaleX(var(--scale-x));margin:0 calc(-1 * ${Ql});position:relative;z-index:-1;overflow:clip;-webkit-mask-image:linear-gradient( to right,transparent 0,#000 ${Yn},#000 calc(100% - ${Yn}),transparent ),linear-gradient( to bottom,transparent 0,#000 ${fn},#000 calc(100% - ${fn}),transparent 100% ),radial-gradient(at bottom right,${Oi}),radial-gradient(at bottom left,${Oi}),radial-gradient(at top left,${Oi}),radial-gradient(at top right,${Oi});-webkit-mask-size:100% calc(100% - ${fn} * 2),calc(100% - ${Yn} * 2) 100%,${Yn} ${fn},${Yn} ${fn},${Yn} ${fn},${Yn} ${fn};-webkit-mask-position:center,center,top left,top right,bottom right,bottom left;-webkit-mask-repeat:no-repeat;}.number__inner{padding:0 ${Ql};transform:scaleX(calc(1 / var(--scale-x))) translateX(calc(-1 * var(${Sa})));}.section{display:inline-flex;align-items:baseline;padding-bottom:${uo};padding-top:${uo};position:relative;isolation:isolate;}.section::after{content:'\200b';display:block;padding:${uo} 0;}:host([data-will-change]) .section{will-change:transform;}.section--justify-left{transform-origin:center left;}.section--justify-right{transform-origin:center right;}.section__exiting{position:absolute !important;z-index:-1;}.digit{display:block;position:relative;--c:var(--current) + var(${Lu});}:host([data-will-change]) .digit,:host([data-will-change]) .digit__num{will-change:transform;}.digit__num{display:block;padding:${uo} 0;--offset-raw:mod(10 + var(--n) - mod(var(--c),10),10);--offset:calc(var(--offset-raw) - 10 * round(down,var(--offset-raw) / 5,1));--y:clamp(-100%,var(--offset) * 100%,100%);transform:translateY(var(--y));}.digit__num:not(.is-current){position:absolute;top:0;left:50%;transform:translateX(-50%) translateY(var(--y));}.digit:not(.is-spinning) .digit__num:not(.is-current){display:none;}.symbol{display:inline-flex;align-items:baseline;position:relative;isolation:isolate;padding:${uo} 0;}:host([data-will-change]) .symbol{will-change:transform;}.symbol__value{display:block;white-space:pre;}.symbol__exiting{position:absolute;z-index:-1;}.section--justify-left .symbol__exiting{left:0;}.section--justify-right .symbol__exiting{right:0;}.animate-presence{opacity:calc(1 + var(${Ca}));}`, AA = mi ? HTMLElement : class {
}, _A = ({ formatted: e, willChange: t }) => `<${Jl} style="font-kerning: none; display: inline-block; line-height: ${M0}; padding: ${fn} 0;${t ? "will-change: transform" : ""}">${e}</${Jl}>`, OA = (e, t) => e != null && t == null ? e : e == null && t != null ? t : e != null && t != null ? Math.max(e, t) : null;
var Er, Yi, Qn, Jn, er, Rn, go, yo, bo, Tr, Ki, tr, nr, Xi, qi, Zi, wo, Qi, xo, Co, Dn, Ji, ec, An, ea, ta;
const LA = RA && kA && DA;
var Ln;
(function(e) {
  e[e.UP = 1] = "UP", e[e.DOWN = -1] = "DOWN", e[e.NONE = 0] = "NONE";
})(Ln || (Ln = {}));
let Li;
class E0 extends AA {
  constructor() {
    super(...arguments), this.transformTiming = this.constructor.defaultProps.transformTiming, this.spinTiming = this.constructor.defaultProps.spinTiming, this.opacityTiming = this.constructor.defaultProps.opacityTiming, this.respectMotionPreference = this.constructor.defaultProps.respectMotionPreference, this.trend = this.constructor.defaultProps.trend, this.continuous = this.constructor.defaultProps.continuous, Er.set(this, this.constructor.defaultProps.animated), Yi.set(this, !1), Qn.set(this, void 0), Jn.set(this, void 0), er.set(this, void 0), Rn.set(this, void 0), go.set(this, void 0), yo.set(this, ue(this, Er, "f")), bo.set(this, void 0), this.manual = !1, Tr.set(this, void 0);
  }
  get animated() {
    return ue(this, Er, "f");
  }
  set animated(t) {
    var n;
    this.animated !== t && (De(this, Er, t), (n = this.shadowRoot) == null || n.getAnimations().forEach((r) => r.finish()));
  }
  get computedTrend() {
    return ue(this, Rn, "f");
  }
  get startingPlace() {
    return ue(this, go, "f");
  }
  get computedAnimated() {
    return ue(this, yo, "f");
  }
  set parts(t) {
    if (t == null)
      return;
    const { pre: n, integer: r, fraction: o, post: i, value: a } = t;
    if (ue(this, Yi, "f")) {
      const s = ue(this, bo, "f");
      if (De(this, bo, t), this.trend === !0 ? De(this, Rn, Math.sign(a - s.value)) : this.trend === "increasing" ? De(this, Rn, Ln.UP) : this.trend === "decreasing" ? De(this, Rn, Ln.DOWN) : De(this, Rn, Ln.NONE), De(this, go, void 0), ue(this, Rn, "f") !== Ln.NONE && this.continuous) {
        const c = s.integer.concat(s.fraction).filter((h) => h.type === "integer" || h.type === "fraction"), u = t.integer.concat(t.fraction).filter((h) => h.type === "integer" || h.type === "fraction"), d = c.find((h) => !u.find((v) => v.place === h.place && v.value === h.value)), f = u.find((h) => !c.find((v) => h.place === v.place && h.value === v.value));
        De(this, go, OA(d == null ? void 0 : d.place, f == null ? void 0 : f.place));
      }
      De(this, yo, LA && ue(this, Er, "f") && (!this.respectMotionPreference || !(Uh != null && Uh.matches)) && // https://github.com/barvian/number-flow/issues/9
      NA(this)), this.manual || this.willUpdate(), ue(this, Qn, "f").update(n), ue(this, Jn, "f").update({ integer: r, fraction: o }), ue(this, er, "f").update(i), this.manual || this.didUpdate();
    } else {
      if (De(this, bo, t), this.attachShadow({ mode: "open" }), typeof CSSStyleSheet < "u" && this.shadowRoot.adoptedStyleSheets)
        Li || (Li = new CSSStyleSheet(), Li.replaceSync(Hh)), this.shadowRoot.adoptedStyleSheets = [Li];
      else {
        const s = document.createElement("style");
        s.textContent = Hh, this.shadowRoot.appendChild(s);
      }
      this.shadowRoot.appendChild(wn("slot")), De(this, Qn, new Gh(this, n, {
        inert: !0,
        ariaHidden: "true",
        justify: "right"
      })), this.shadowRoot.appendChild(ue(this, Qn, "f").el), De(this, Jn, new IA(this, r, o, {
        inert: !0,
        ariaHidden: "true"
      })), this.shadowRoot.appendChild(ue(this, Jn, "f").el), De(this, er, new Gh(this, i, {
        inert: !0,
        ariaHidden: "true",
        justify: "left"
      })), this.shadowRoot.appendChild(ue(this, er, "f").el);
    }
    De(this, Yi, !0);
  }
  willUpdate() {
    ue(this, Qn, "f").willUpdate(), ue(this, Jn, "f").willUpdate(), ue(this, er, "f").willUpdate();
  }
  didUpdate() {
    if (!ue(this, yo, "f"))
      return;
    ue(this, Tr, "f") ? ue(this, Tr, "f").abort() : this.dispatchEvent(new Event("animationsstart")), ue(this, Qn, "f").didUpdate(), ue(this, Jn, "f").didUpdate(), ue(this, er, "f").didUpdate();
    const t = new AbortController();
    Promise.all(this.shadowRoot.getAnimations().map((n) => n.finished)).then(() => {
      t.signal.aborted || (this.dispatchEvent(new Event("animationsfinish")), De(this, Tr, void 0));
    }), De(this, Tr, t);
  }
}
Er = /* @__PURE__ */ new WeakMap(), Yi = /* @__PURE__ */ new WeakMap(), Qn = /* @__PURE__ */ new WeakMap(), Jn = /* @__PURE__ */ new WeakMap(), er = /* @__PURE__ */ new WeakMap(), Rn = /* @__PURE__ */ new WeakMap(), go = /* @__PURE__ */ new WeakMap(), yo = /* @__PURE__ */ new WeakMap(), bo = /* @__PURE__ */ new WeakMap(), Tr = /* @__PURE__ */ new WeakMap();
E0.defaultProps = {
  transformTiming: {
    duration: 900,
    // Make sure to keep this minified:
    easing: "linear(0,.005,.019,.039,.066,.096,.129,.165,.202,.24,.278,.316,.354,.39,.426,.461,.494,.526,.557,.586,.614,.64,.665,.689,.711,.731,.751,.769,.786,.802,.817,.831,.844,.856,.867,.877,.887,.896,.904,.912,.919,.925,.931,.937,.942,.947,.951,.955,.959,.962,.965,.968,.971,.973,.976,.978,.98,.981,.983,.984,.986,.987,.988,.989,.99,.991,.992,.992,.993,.994,.994,.995,.995,.996,.996,.9963,.9967,.9969,.9972,.9975,.9977,.9979,.9981,.9982,.9984,.9985,.9987,.9988,.9989,1)"
  },
  spinTiming: void 0,
  opacityTiming: { duration: 450, easing: "ease-out" },
  animated: !0,
  trend: !0,
  continuous: !1,
  respectMotionPreference: !0
};
class IA {
  constructor(t, n, r, { className: o, ...i } = {}) {
    this.flow = t, Ki.set(this, void 0), tr.set(this, void 0), nr.set(this, void 0), Xi.set(this, void 0), qi.set(this, void 0), De(this, tr, new zh(t, n, {
      justify: "right"
    })), De(this, nr, new zh(t, r, {
      justify: "left"
    })), De(this, Ki, wn("span", {
      className: "number__inner"
    }, [ue(this, tr, "f").el, ue(this, nr, "f").el])), this.el = wn("span", {
      ...i,
      className: `number ${o ?? ""}`
    }, [ue(this, Ki, "f")]);
  }
  willUpdate() {
    De(this, Xi, this.el.offsetWidth), De(this, qi, this.el.getBoundingClientRect().left), ue(this, tr, "f").willUpdate(), ue(this, nr, "f").willUpdate();
  }
  update({ integer: t, fraction: n }) {
    ue(this, tr, "f").update(t), ue(this, nr, "f").update(n);
  }
  didUpdate() {
    const t = this.el.getBoundingClientRect();
    ue(this, tr, "f").didUpdate(), ue(this, nr, "f").didUpdate();
    const n = ue(this, qi, "f") - t.left, r = this.el.offsetWidth, o = ue(this, Xi, "f") - r;
    this.el.style.setProperty("--width", String(r)), this.el.animate({
      [Sa]: [`${n}px`, "0px"],
      [Ou]: [o, 0]
    }, {
      ...this.flow.transformTiming,
      composite: "accumulate"
    });
  }
}
Ki = /* @__PURE__ */ new WeakMap(), tr = /* @__PURE__ */ new WeakMap(), nr = /* @__PURE__ */ new WeakMap(), Xi = /* @__PURE__ */ new WeakMap(), qi = /* @__PURE__ */ new WeakMap();
class T0 {
  constructor(t, n, { justify: r, className: o, ...i }, a) {
    this.flow = t, this.children = /* @__PURE__ */ new Map(), this.onCharRemove = (c) => () => {
      this.children.delete(c);
    }, Zi.set(this, void 0), this.justify = r;
    const s = n.map((c) => this.addChar(c).el);
    this.el = wn("span", {
      ...i,
      className: `section section--justify-${r} ${o ?? ""}`
    }, a ? a(s) : s);
  }
  addChar(t, { startDigitsAtZero: n = !1, ...r } = {}) {
    const o = t.type === "integer" || t.type === "fraction" ? new R0(this, t.type, n ? 0 : t.value, t.place, {
      ...r,
      onRemove: this.onCharRemove(t.key)
    }) : new FA(this, t.type, t.value, {
      ...r,
      onRemove: this.onCharRemove(t.key)
    });
    return this.children.set(t.key, o), o;
  }
  unpop(t) {
    t.el.classList.remove("section__exiting"), t.el.style[this.justify] = "";
  }
  pop(t) {
    t.forEach((n) => {
      n.el.style[this.justify] = `${SA(n.el, this.justify)}px`;
    }), t.forEach((n) => {
      n.el.classList.add("section__exiting"), n.present = !1;
    });
  }
  addNewAndUpdateExisting(t) {
    const n = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map(), o = this.justify === "left", i = o ? "prepend" : "append";
    if (MA(t, (a) => {
      let s;
      this.children.has(a.key) ? (s = this.children.get(a.key), r.set(a, s), this.unpop(s), s.present = !0) : (s = this.addChar(a, { startDigitsAtZero: !0, animateIn: !0 }), n.set(a, s)), this.el[i](s.el);
    }, { reverse: o }), this.flow.computedAnimated) {
      const a = this.el.getBoundingClientRect();
      n.forEach((s) => {
        s.willUpdate(a);
      });
    }
    n.forEach((a, s) => {
      a.update(s.value);
    }), r.forEach((a, s) => {
      a.update(s.value);
    });
  }
  willUpdate() {
    const t = this.el.getBoundingClientRect();
    De(this, Zi, t[this.justify]), this.children.forEach((n) => n.willUpdate(t));
  }
  didUpdate() {
    const t = this.el.getBoundingClientRect();
    this.children.forEach((o) => o.didUpdate(t));
    const n = t[this.justify], r = ue(this, Zi, "f") - n;
    this.el.animate({
      transform: [`translateX(${r}px)`, "none"]
    }, {
      ...this.flow.transformTiming,
      composite: "accumulate"
    });
  }
}
Zi = /* @__PURE__ */ new WeakMap();
class zh extends T0 {
  update(t) {
    const n = /* @__PURE__ */ new Map();
    this.children.forEach((r, o) => {
      t.find((i) => i.key === o) || n.set(o, r), this.unpop(r);
    }), this.addNewAndUpdateExisting(t), n.forEach((r) => {
      r instanceof R0 && r.update(0);
    }), this.pop(n);
  }
}
class Gh extends T0 {
  update(t) {
    const n = /* @__PURE__ */ new Map();
    this.children.forEach((r, o) => {
      t.find((i) => i.key === o) || n.set(o, r);
    }), this.pop(n), this.addNewAndUpdateExisting(t);
  }
}
class tc {
  constructor(t, n, { onRemove: r, animateIn: o = !1 } = {}) {
    this.flow = t, this.el = n, wo.set(this, !0), Qi.set(this, void 0), xo.set(this, () => {
      var i;
      this.el.remove(), (i = ue(this, Qi, "f")) == null || i.call(this);
    }), this.el.classList.add("animate-presence"), this.flow.computedAnimated && o && this.el.animate({
      [Ca]: [-0.9999, 0]
    }, {
      ...this.flow.opacityTiming,
      composite: "accumulate"
    }), De(this, Qi, r);
  }
  get present() {
    return ue(this, wo, "f");
  }
  set present(t) {
    if (ue(this, wo, "f") !== t) {
      if (De(this, wo, t), !this.flow.computedAnimated) {
        t || ue(this, xo, "f").call(this);
        return;
      }
      this.el.style.setProperty("--_number-flow-d-opacity", t ? "0" : "-.999"), this.el.animate({
        [Ca]: t ? [-0.9999, 0] : [0.999, 0]
      }, {
        ...this.flow.opacityTiming,
        composite: "accumulate"
      }), t ? this.flow.removeEventListener("animationsfinish", ue(this, xo, "f")) : this.flow.addEventListener("animationsfinish", ue(this, xo, "f"), {
        once: !0
      });
    }
  }
}
wo = /* @__PURE__ */ new WeakMap(), Qi = /* @__PURE__ */ new WeakMap(), xo = /* @__PURE__ */ new WeakMap();
let k0 = class extends tc {
  constructor(t, n, r, o) {
    super(t.flow, r, o), this.section = t, this.value = n, this.el = r;
  }
};
class R0 extends k0 {
  constructor(t, n, r, o, i) {
    const a = Array.from({ length: 10 }).map((c, u) => {
      const d = wn("span", { className: `digit__num${u === r ? " is-current" : ""}` }, [document.createTextNode(String(u))]);
      return d.style.setProperty("--n", String(u)), d;
    }), s = wn("span", {
      className: "digit"
    }, a);
    s.style.setProperty("--current", String(r)), super(t, r, s, i), this.place = o, Co.set(this, void 0), Dn.set(this, void 0), Ji.set(this, void 0), ec.set(this, () => {
      this.el.classList.remove("is-spinning");
    }), De(this, Co, a);
  }
  willUpdate(t) {
    const n = this.el.getBoundingClientRect();
    De(this, Dn, this.value);
    const r = n[this.section.justify] - t[this.section.justify], o = n.width / 2;
    De(this, Ji, this.section.justify === "left" ? r + o : r - o);
  }
  update(t) {
    var n, r;
    (n = ue(this, Co, "f")[this.value]) == null || n.classList.remove("is-current"), this.el.style.setProperty("--current", String(t)), (r = ue(this, Co, "f")[t]) == null || r.classList.add("is-current"), this.value = t;
  }
  didUpdate(t) {
    const n = this.el.getBoundingClientRect(), r = n[this.section.justify] - t[this.section.justify], o = n.width / 2, i = this.section.justify === "left" ? r + o : r - o;
    this.el.animate({
      transform: [`translateX(${ue(this, Ji, "f") - i}px)`, "none"]
    }, {
      ...this.flow.transformTiming,
      composite: "accumulate"
    });
    const a = this.diff;
    a && (this.el.classList.add("is-spinning"), this.el.animate({
      [Lu]: [-a, 0]
    }, {
      ...this.flow.spinTiming ?? this.flow.transformTiming,
      composite: "accumulate"
    }), this.flow.addEventListener("animationsfinish", ue(this, ec, "f"), { once: !0 }));
  }
  get diff() {
    let t = this.flow.computedTrend;
    const n = this.value - ue(this, Dn, "f");
    return !n && this.flow.startingPlace != null && this.flow.startingPlace >= this.place ? 10 * t : (t || (t = Math.sign(n)), t === Ln.DOWN && this.value > ue(this, Dn, "f") ? this.value - 10 - ue(this, Dn, "f") : t === Ln.UP && this.value < ue(this, Dn, "f") ? 10 - ue(this, Dn, "f") + this.value : n);
  }
}
Co = /* @__PURE__ */ new WeakMap(), Dn = /* @__PURE__ */ new WeakMap(), Ji = /* @__PURE__ */ new WeakMap(), ec = /* @__PURE__ */ new WeakMap();
class FA extends k0 {
  constructor(t, n, r, o) {
    const i = wn("span", {
      className: "symbol__value",
      textContent: r
    });
    super(t, r, wn("span", {
      className: "symbol"
    }, [i]), o), this.type = n, An.set(this, /* @__PURE__ */ new Map()), ea.set(this, void 0), ta.set(this, (a) => () => {
      ue(this, An, "f").delete(a);
    }), ue(this, An, "f").set(r, new tc(this.flow, i, {
      onRemove: ue(this, ta, "f").call(this, r)
    }));
  }
  willUpdate(t) {
    if (this.type === "decimal")
      return;
    const n = this.el.getBoundingClientRect();
    De(this, ea, n[this.section.justify] - t[this.section.justify]);
  }
  update(t) {
    if (this.value !== t) {
      const n = ue(this, An, "f").get(this.value);
      if (n.present = !1, n.el.classList.add("symbol__exiting"), ue(this, An, "f").has(t)) {
        const r = ue(this, An, "f").get(t);
        r.present = !0, r.el.classList.remove("symbol__exiting");
      } else {
        const r = wn("span", {
          className: "symbol__value",
          textContent: t
        });
        this.el.appendChild(r), ue(this, An, "f").set(t, new tc(this.flow, r, {
          animateIn: !0,
          onRemove: ue(this, ta, "f").call(this, t)
        }));
      }
    }
    this.value = t;
  }
  didUpdate(t) {
    if (this.type === "decimal")
      return;
    const n = this.el.getBoundingClientRect()[this.section.justify] - t[this.section.justify];
    this.el.animate({
      transform: [`translateX(${ue(this, ea, "f") - n}px)`, "none"]
    }, { ...this.flow.transformTiming, composite: "accumulate" });
  }
}
An = /* @__PURE__ */ new WeakMap(), ea = /* @__PURE__ */ new WeakMap(), ta = /* @__PURE__ */ new WeakMap();
var D0 = (e) => {
  throw TypeError(e);
}, A0 = (e, t, n) => t.has(e) || D0("Cannot " + n), jt = (e, t, n) => (A0(e, t, "read from private field"), t.get(e)), VA = (e, t, n) => t.has(e) ? D0("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), $A = (e, t, n, r) => (A0(e, t, "write to private field"), t.set(e, n), n), Lm, BA = parseInt((Lm = m.version.match(/^(\d+)\./)) == null ? void 0 : Lm[1]), Iu = BA >= 19, WA = ["parts"], _0 = class extends E0 {
  attributeChangedCallback(e, t, n) {
    this[e] = JSON.parse(n);
  }
};
_0.observedAttributes = Iu ? [] : WA;
PA("number-flow-react", _0);
var cl = {}, jA = Iu ? (e) => e : JSON.stringify;
function Yh(e) {
  const {
    transformTiming: t,
    spinTiming: n,
    opacityTiming: r,
    animated: o,
    respectMotionPreference: i,
    trend: a,
    continuous: s,
    ...c
  } = e;
  return [
    {
      transformTiming: t,
      spinTiming: n,
      opacityTiming: r,
      animated: o,
      respectMotionPreference: i,
      trend: a,
      continuous: s
    },
    c
  ];
}
var pt, UA = class extends m.Component {
  constructor(e) {
    super(e), VA(this, pt), this.handleRef = this.handleRef.bind(this);
  }
  // Update the non-`parts` props to avoid JSON serialization
  // Parts needs to be set in render still:
  updateNonPartsProps(e) {
    if (!jt(this, pt)) return;
    jt(this, pt).manual = !this.props.isolate;
    const [t] = Yh(this.props);
    Object.assign(
      jt(this, pt),
      Object.fromEntries(Object.entries(t).filter(([n, r]) => r != null))
    ), e != null && e.onAnimationsStart && jt(this, pt).removeEventListener("animationsstart", e.onAnimationsStart), this.props.onAnimationsStart && jt(this, pt).addEventListener("animationsstart", this.props.onAnimationsStart), e != null && e.onAnimationsFinish && jt(this, pt).removeEventListener(
      "animationsfinish",
      e.onAnimationsFinish
    ), this.props.onAnimationsFinish && jt(this, pt).addEventListener("animationsfinish", this.props.onAnimationsFinish);
  }
  componentDidMount() {
    this.updateNonPartsProps(), Iu && jt(this, pt) && (jt(this, pt).parts = this.props.parts);
  }
  getSnapshotBeforeUpdate(e) {
    var t;
    return this.updateNonPartsProps(e), this.props.isolate || this.props.animated === !1 || e.parts === this.props.parts ? !1 : ((t = jt(this, pt)) == null || t.willUpdate(), !0);
  }
  componentDidUpdate(e, t, n) {
    var r;
    n && ((r = jt(this, pt)) == null || r.didUpdate());
  }
  handleRef(e) {
    this.props.innerRef && (this.props.innerRef.current = e), $A(this, pt, e);
  }
  render() {
    const [e, { innerRef: t, className: n, parts: r, willChange: o, isolate: i, ...a }] = Yh(this.props);
    return (
      // @ts-expect-error missing types
      /* @__PURE__ */ m.createElement(
        "number-flow-react",
        {
          ref: this.handleRef,
          "data-will-change": o ? "" : void 0,
          class: n,
          ...a,
          dangerouslySetInnerHTML: { __html: _A({ formatted: r.formatted, willChange: o }) },
          parts: jA(r)
        }
      )
    );
  }
};
pt = /* @__PURE__ */ new WeakMap();
var HA = m.forwardRef(function({ value: t, locales: n, format: r, ...o }, i) {
  m.useImperativeHandle(i, () => a.current, []);
  const a = m.useRef(), s = m.useMemo(() => n ? JSON.stringify(n) : "", [n]), c = m.useMemo(() => r ? JSON.stringify(r) : "", [r]), u = m.useMemo(() => {
    var f;
    const d = cl[f = `${s}:${c}`] ?? (cl[f] = new Intl.NumberFormat(
      n,
      r
    ));
    return EA(t, d);
  }, [t, s, c]);
  return /* @__PURE__ */ m.createElement(UA, { ...o, parts: u, innerRef: a });
}), zA = HA;
function GA({
  emoji: e,
  initialCount: t,
  hasReacted: n = !1,
  users: r,
  onInteraction: o
}) {
  const [i, a] = Te(n), [s, c] = Te(t), u = Ge(null), d = Kr(), f = zt(() => {
    const p = u.current;
    if (p) {
      const y = p.getBoundingClientRect(), b = y.left + y.width / 2, w = y.top;
      Zl({
        particleCount: 5,
        gravity: 0.8,
        spread: 45,
        startVelocity: 12,
        ticks: 30,
        // @ts-expect-error flat property exists in canvas-confetti
        flat: !0,
        origin: {
          x: b / window.innerWidth,
          y: w / window.innerHeight
        },
        shapes: [Zl.shapeFromText({ text: e })],
        scalar: 1.5,
        disableInteraction: d
      });
    }
  }, [e, d]), h = (p, y) => {
    p.stopPropagation(), c(s + (i ? -1 : 1)), a(!i), o == null || o(y), !i && !d && f();
  }, v = (r == null ? void 0 : r.map((p) => p.name).join(", ")) || "", g = /* @__PURE__ */ S(
    Fn,
    {
      ref: u,
      variant: "outline",
      size: "md",
      onClick: (p) => {
        h(p, e);
      },
      className: A(
        "flex items-center gap-1 px-2 py-1 font-medium leading-tight transition-all active:scale-90 motion-reduce:transition-none motion-reduce:active:scale-100",
        i && "border-f1-border-selected bg-f1-background-selected hover:border-f1-border-selected-bold"
      ),
      "aria-label": Vm(e),
      children: [
        /* @__PURE__ */ l(Cc, { emoji: e, size: "md" }),
        /* @__PURE__ */ l(
          zA,
          {
            value: s,
            spinTiming: {
              duration: 200,
              easing: "cubic-bezier(0.175, 0.885, 0.32, 1.275)"
            },
            className: A(
              "tabular-nums",
              i ? "text-f1-foreground-selected" : "text-f1-foreground"
            )
          }
        )
      ]
    }
  );
  return v ? /* @__PURE__ */ l(ds, { label: v, children: g }) : g;
}
function YA({ items: e, onInteraction: t }) {
  return /* @__PURE__ */ S("div", { className: "flex flex-wrap gap-2", children: [
    /* @__PURE__ */ l(xA, { onSelect: t }),
    e.map((n) => /* @__PURE__ */ l(
      GA,
      {
        emoji: n.emoji,
        initialCount: n.initialCount,
        hasReacted: n.hasReacted,
        users: n.users,
        onInteraction: t
      },
      n.emoji
    ))
  ] });
}
function In(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function(o) {
    if (e == null || e(o), n === !1 || !o.defaultPrevented)
      return t == null ? void 0 : t(o);
  };
}
function Kh(e, t) {
  if (typeof e == "function")
    return e(t);
  e != null && (e.current = t);
}
function O0(...e) {
  return (t) => {
    let n = !1;
    const r = e.map((o) => {
      const i = Kh(o, t);
      return !n && typeof i == "function" && (n = !0), i;
    });
    if (n)
      return () => {
        for (let o = 0; o < r.length; o++) {
          const i = r[o];
          typeof i == "function" ? i() : Kh(e[o], null);
        }
      };
  };
}
function hr(...e) {
  return m.useCallback(O0(...e), e);
}
function KA(e, t) {
  const n = m.createContext(t), r = (i) => {
    const { children: a, ...s } = i, c = m.useMemo(() => s, Object.values(s));
    return /* @__PURE__ */ l(n.Provider, { value: c, children: a });
  };
  r.displayName = e + "Provider";
  function o(i) {
    const a = m.useContext(n);
    if (a) return a;
    if (t !== void 0) return t;
    throw new Error(`\`${i}\` must be used within \`${e}\``);
  }
  return [r, o];
}
function XA(e, t = []) {
  let n = [];
  function r(i, a) {
    const s = m.createContext(a), c = n.length;
    n = [...n, a];
    const u = (f) => {
      var b;
      const { scope: h, children: v, ...g } = f, p = ((b = h == null ? void 0 : h[e]) == null ? void 0 : b[c]) || s, y = m.useMemo(() => g, Object.values(g));
      return /* @__PURE__ */ l(p.Provider, { value: y, children: v });
    };
    u.displayName = i + "Provider";
    function d(f, h) {
      var p;
      const v = ((p = h == null ? void 0 : h[e]) == null ? void 0 : p[c]) || s, g = m.useContext(v);
      if (g) return g;
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
  return o.scopeName = e, [r, qA(o, ...t)];
}
function qA(...e) {
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
var Fu = m.forwardRef((e, t) => {
  const { children: n, ...r } = e, o = m.Children.toArray(n), i = o.find(QA);
  if (i) {
    const a = i.props.children, s = o.map((c) => c === i ? m.Children.count(a) > 1 ? m.Children.only(null) : m.isValidElement(a) ? a.props.children : null : c);
    return /* @__PURE__ */ l(nc, { ...r, ref: t, children: m.isValidElement(a) ? m.cloneElement(a, void 0, s) : null });
  }
  return /* @__PURE__ */ l(nc, { ...r, ref: t, children: n });
});
Fu.displayName = "Slot";
var nc = m.forwardRef((e, t) => {
  const { children: n, ...r } = e;
  if (m.isValidElement(n)) {
    const o = e_(n);
    return m.cloneElement(n, {
      ...JA(r, n.props),
      // @ts-ignore
      ref: t ? O0(t, o) : o
    });
  }
  return m.Children.count(n) > 1 ? m.Children.only(null) : null;
});
nc.displayName = "SlotClone";
var ZA = ({ children: e }) => /* @__PURE__ */ l(we, { children: e });
function QA(e) {
  return m.isValidElement(e) && e.type === ZA;
}
function JA(e, t) {
  const n = { ...t };
  for (const r in t) {
    const o = e[r], i = t[r];
    /^on[A-Z]/.test(r) ? o && i ? n[r] = (...s) => {
      i(...s), o(...s);
    } : o && (n[r] = o) : r === "style" ? n[r] = { ...o, ...i } : r === "className" && (n[r] = [o, i].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function e_(e) {
  var r, o;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var t_ = [
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
], Pn = t_.reduce((e, t) => {
  const n = m.forwardRef((r, o) => {
    const { asChild: i, ...a } = r, s = i ? Fu : t;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ l(s, { ...a, ref: o });
  });
  return n.displayName = `Primitive.${t}`, { ...e, [t]: n };
}, {});
function n_(e, t) {
  e && Mc.flushSync(() => e.dispatchEvent(t));
}
var r_ = "DismissableLayer", rc = "dismissableLayer.update", o_ = "dismissableLayer.pointerDownOutside", i_ = "dismissableLayer.focusOutside", Xh, L0 = m.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), I0 = m.forwardRef(
  (e, t) => {
    const {
      disableOutsidePointerEvents: n = !1,
      onEscapeKeyDown: r,
      onPointerDownOutside: o,
      onFocusOutside: i,
      onInteractOutside: a,
      onDismiss: s,
      ...c
    } = e, u = m.useContext(L0), [d, f] = m.useState(null), h = (d == null ? void 0 : d.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), [, v] = m.useState({}), g = hr(t, (T) => f(T)), p = Array.from(u.layers), [y] = [...u.layersWithOutsidePointerEventsDisabled].slice(-1), b = p.indexOf(y), w = d ? p.indexOf(d) : -1, x = u.layersWithOutsidePointerEventsDisabled.size > 0, C = w >= b, M = l_((T) => {
      const k = T.target, R = [...u.branches].some((j) => j.contains(k));
      !C || R || (o == null || o(T), a == null || a(T), T.defaultPrevented || s == null || s());
    }, h), I = c_((T) => {
      const k = T.target;
      [...u.branches].some((j) => j.contains(k)) || (i == null || i(T), a == null || a(T), T.defaultPrevented || s == null || s());
    }, h);
    return qw((T) => {
      w === u.layers.size - 1 && (r == null || r(T), !T.defaultPrevented && s && (T.preventDefault(), s()));
    }, h), m.useEffect(() => {
      if (d)
        return n && (u.layersWithOutsidePointerEventsDisabled.size === 0 && (Xh = h.body.style.pointerEvents, h.body.style.pointerEvents = "none"), u.layersWithOutsidePointerEventsDisabled.add(d)), u.layers.add(d), qh(), () => {
          n && u.layersWithOutsidePointerEventsDisabled.size === 1 && (h.body.style.pointerEvents = Xh);
        };
    }, [d, h, n, u]), m.useEffect(() => () => {
      d && (u.layers.delete(d), u.layersWithOutsidePointerEventsDisabled.delete(d), qh());
    }, [d, u]), m.useEffect(() => {
      const T = () => v({});
      return document.addEventListener(rc, T), () => document.removeEventListener(rc, T);
    }, []), /* @__PURE__ */ l(
      Pn.div,
      {
        ...c,
        ref: g,
        style: {
          pointerEvents: x ? C ? "auto" : "none" : void 0,
          ...e.style
        },
        onFocusCapture: In(e.onFocusCapture, I.onFocusCapture),
        onBlurCapture: In(e.onBlurCapture, I.onBlurCapture),
        onPointerDownCapture: In(
          e.onPointerDownCapture,
          M.onPointerDownCapture
        )
      }
    );
  }
);
I0.displayName = r_;
var a_ = "DismissableLayerBranch", s_ = m.forwardRef((e, t) => {
  const n = m.useContext(L0), r = m.useRef(null), o = hr(t, r);
  return m.useEffect(() => {
    const i = r.current;
    if (i)
      return n.branches.add(i), () => {
        n.branches.delete(i);
      };
  }, [n.branches]), /* @__PURE__ */ l(Pn.div, { ...e, ref: o });
});
s_.displayName = a_;
function l_(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Ve(e), r = m.useRef(!1), o = m.useRef(() => {
  });
  return m.useEffect(() => {
    const i = (s) => {
      if (s.target && !r.current) {
        let c = function() {
          F0(
            o_,
            n,
            u,
            { discrete: !0 }
          );
        };
        const u = { originalEvent: s };
        s.pointerType === "touch" ? (t.removeEventListener("click", o.current), o.current = c, t.addEventListener("click", o.current, { once: !0 })) : c();
      } else
        t.removeEventListener("click", o.current);
      r.current = !1;
    }, a = window.setTimeout(() => {
      t.addEventListener("pointerdown", i);
    }, 0);
    return () => {
      window.clearTimeout(a), t.removeEventListener("pointerdown", i), t.removeEventListener("click", o.current);
    };
  }, [t, n]), {
    // ensures we check React component tree (not just DOM tree)
    onPointerDownCapture: () => r.current = !0
  };
}
function c_(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Ve(e), r = m.useRef(!1);
  return m.useEffect(() => {
    const o = (i) => {
      i.target && !r.current && F0(i_, n, { originalEvent: i }, {
        discrete: !1
      });
    };
    return t.addEventListener("focusin", o), () => t.removeEventListener("focusin", o);
  }, [t, n]), {
    onFocusCapture: () => r.current = !0,
    onBlurCapture: () => r.current = !1
  };
}
function qh() {
  const e = new CustomEvent(rc);
  document.dispatchEvent(e);
}
function F0(e, t, n, { discrete: r }) {
  const o = n.originalEvent.target, i = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  t && o.addEventListener(e, t, { once: !0 }), r ? n_(o, i) : o.dispatchEvent(i);
}
var ul = "focusScope.autoFocusOnMount", dl = "focusScope.autoFocusOnUnmount", Zh = { bubbles: !1, cancelable: !0 }, u_ = "FocusScope", V0 = m.forwardRef((e, t) => {
  const {
    loop: n = !1,
    trapped: r = !1,
    onMountAutoFocus: o,
    onUnmountAutoFocus: i,
    ...a
  } = e, [s, c] = m.useState(null), u = Ve(o), d = Ve(i), f = m.useRef(null), h = hr(t, (p) => c(p)), v = m.useRef({
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
      let p = function(x) {
        if (v.paused || !s) return;
        const C = x.target;
        s.contains(C) ? f.current = C : _n(f.current, { select: !0 });
      }, y = function(x) {
        if (v.paused || !s) return;
        const C = x.relatedTarget;
        C !== null && (s.contains(C) || _n(f.current, { select: !0 }));
      }, b = function(x) {
        if (document.activeElement === document.body)
          for (const M of x)
            M.removedNodes.length > 0 && _n(s);
      };
      document.addEventListener("focusin", p), document.addEventListener("focusout", y);
      const w = new MutationObserver(b);
      return s && w.observe(s, { childList: !0, subtree: !0 }), () => {
        document.removeEventListener("focusin", p), document.removeEventListener("focusout", y), w.disconnect();
      };
    }
  }, [r, s, v.paused]), m.useEffect(() => {
    if (s) {
      Jh.add(v);
      const p = document.activeElement;
      if (!s.contains(p)) {
        const b = new CustomEvent(ul, Zh);
        s.addEventListener(ul, u), s.dispatchEvent(b), b.defaultPrevented || (d_(v_($0(s)), { select: !0 }), document.activeElement === p && _n(s));
      }
      return () => {
        s.removeEventListener(ul, u), setTimeout(() => {
          const b = new CustomEvent(dl, Zh);
          s.addEventListener(dl, d), s.dispatchEvent(b), b.defaultPrevented || _n(p ?? document.body, { select: !0 }), s.removeEventListener(dl, d), Jh.remove(v);
        }, 0);
      };
    }
  }, [s, u, d, v]);
  const g = m.useCallback(
    (p) => {
      if (!n && !r || v.paused) return;
      const y = p.key === "Tab" && !p.altKey && !p.ctrlKey && !p.metaKey, b = document.activeElement;
      if (y && b) {
        const w = p.currentTarget, [x, C] = f_(w);
        x && C ? !p.shiftKey && b === C ? (p.preventDefault(), n && _n(x, { select: !0 })) : p.shiftKey && b === x && (p.preventDefault(), n && _n(C, { select: !0 })) : b === w && p.preventDefault();
      }
    },
    [n, r, v.paused]
  );
  return /* @__PURE__ */ l(Pn.div, { tabIndex: -1, ...a, ref: h, onKeyDown: g });
});
V0.displayName = u_;
function d_(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const r of e)
    if (_n(r, { select: t }), document.activeElement !== n) return;
}
function f_(e) {
  const t = $0(e), n = Qh(t, e), r = Qh(t.reverse(), e);
  return [n, r];
}
function $0(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => {
      const o = r.tagName === "INPUT" && r.type === "hidden";
      return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function Qh(e, t) {
  for (const n of e)
    if (!h_(n, { upTo: t })) return n;
}
function h_(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
function m_(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function _n(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== n && m_(e) && t && e.select();
  }
}
var Jh = p_();
function p_() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && (n == null || n.pause()), e = em(e, t), e.unshift(t);
    },
    remove(t) {
      var n;
      e = em(e, t), (n = e[0]) == null || n.resume();
    }
  };
}
function em(e, t) {
  const n = [...e], r = n.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
function v_(e) {
  return e.filter((t) => t.tagName !== "A");
}
var g_ = "Portal", B0 = m.forwardRef((e, t) => {
  var s;
  const { container: n, ...r } = e, [o, i] = m.useState(!1);
  Xe(() => i(!0), []);
  const a = n || o && ((s = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : s.body);
  return a ? Ec.createPortal(/* @__PURE__ */ l(Pn.div, { ...r, ref: t }), a) : null;
});
B0.displayName = g_;
function y_(e, t) {
  return m.useReducer((n, r) => t[n][r] ?? n, e);
}
var fs = (e) => {
  const { present: t, children: n } = e, r = b_(t), o = typeof n == "function" ? n({ present: r.isPresent }) : m.Children.only(n), i = hr(r.ref, w_(o));
  return typeof n == "function" || r.isPresent ? m.cloneElement(o, { ref: i }) : null;
};
fs.displayName = "Presence";
function b_(e) {
  const [t, n] = m.useState(), r = m.useRef({}), o = m.useRef(e), i = m.useRef("none"), a = e ? "mounted" : "unmounted", [s, c] = y_(a, {
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
    const u = Ii(r.current);
    i.current = s === "mounted" ? u : "none";
  }, [s]), Xe(() => {
    const u = r.current, d = o.current;
    if (d !== e) {
      const h = i.current, v = Ii(u);
      e ? c("MOUNT") : v === "none" || (u == null ? void 0 : u.display) === "none" ? c("UNMOUNT") : c(d && h !== v ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e;
    }
  }, [e, c]), Xe(() => {
    if (t) {
      let u;
      const d = t.ownerDocument.defaultView ?? window, f = (v) => {
        const p = Ii(r.current).includes(v.animationName);
        if (v.target === t && p && (c("ANIMATION_END"), !o.current)) {
          const y = t.style.animationFillMode;
          t.style.animationFillMode = "forwards", u = d.setTimeout(() => {
            t.style.animationFillMode === "forwards" && (t.style.animationFillMode = y);
          });
        }
      }, h = (v) => {
        v.target === t && (i.current = Ii(r.current));
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
function Ii(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function w_(e) {
  var r, o;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var fl = 0;
function x_() {
  m.useEffect(() => {
    const e = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", e[0] ?? tm()), document.body.insertAdjacentElement("beforeend", e[1] ?? tm()), fl++, () => {
      fl === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((t) => t.remove()), fl--;
    };
  }, []);
}
function tm() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e;
}
var W0 = Mg(), hl = function() {
}, hs = m.forwardRef(function(e, t) {
  var n = m.useRef(null), r = m.useState({
    onScrollCapture: hl,
    onWheelCapture: hl,
    onTouchMoveCapture: hl
  }), o = r[0], i = r[1], a = e.forwardProps, s = e.children, c = e.className, u = e.removeScrollBar, d = e.enabled, f = e.shards, h = e.sideCar, v = e.noIsolation, g = e.inert, p = e.allowPinchZoom, y = e.as, b = y === void 0 ? "div" : y, w = e.gapMode, x = xu(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), C = h, M = Pg([n, t]), I = lt(lt({}, x), o);
  return m.createElement(
    m.Fragment,
    null,
    d && m.createElement(C, { sideCar: W0, removeScrollBar: u, shards: f, noIsolation: v, inert: g, setCallbacks: i, allowPinchZoom: !!p, lockRef: n, gapMode: w }),
    a ? m.cloneElement(m.Children.only(s), lt(lt({}, I), { ref: M })) : m.createElement(b, lt({}, I, { className: c, ref: M }), s)
  );
});
hs.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
hs.classNames = {
  fullWidth: Ao,
  zeroRight: Do
};
var oc = !1;
if (typeof window < "u")
  try {
    var Fi = Object.defineProperty({}, "passive", {
      get: function() {
        return oc = !0, !0;
      }
    });
    window.addEventListener("test", Fi, Fi), window.removeEventListener("test", Fi, Fi);
  } catch {
    oc = !1;
  }
var Nr = oc ? { passive: !1 } : !1, C_ = function(e) {
  return e.tagName === "TEXTAREA";
}, j0 = function(e, t) {
  if (!(e instanceof Element))
    return !1;
  var n = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    n[t] !== "hidden" && // contains scroll inside self
    !(n.overflowY === n.overflowX && !C_(e) && n[t] === "visible")
  );
}, S_ = function(e) {
  return j0(e, "overflowY");
}, N_ = function(e) {
  return j0(e, "overflowX");
}, nm = function(e, t) {
  var n = t.ownerDocument, r = t;
  do {
    typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host);
    var o = U0(e, r);
    if (o) {
      var i = H0(e, r), a = i[1], s = i[2];
      if (a > s)
        return !0;
    }
    r = r.parentNode;
  } while (r && r !== n.body);
  return !1;
}, P_ = function(e) {
  var t = e.scrollTop, n = e.scrollHeight, r = e.clientHeight;
  return [
    t,
    n,
    r
  ];
}, M_ = function(e) {
  var t = e.scrollLeft, n = e.scrollWidth, r = e.clientWidth;
  return [
    t,
    n,
    r
  ];
}, U0 = function(e, t) {
  return e === "v" ? S_(t) : N_(t);
}, H0 = function(e, t) {
  return e === "v" ? P_(t) : M_(t);
}, E_ = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, T_ = function(e, t, n, r, o) {
  var i = E_(e, window.getComputedStyle(t).direction), a = i * r, s = n.target, c = t.contains(s), u = !1, d = a > 0, f = 0, h = 0;
  do {
    var v = H0(e, s), g = v[0], p = v[1], y = v[2], b = p - y - i * g;
    (g || b) && U0(e, s) && (f += b, h += g), s instanceof ShadowRoot ? s = s.host : s = s.parentNode;
  } while (
    // portaled content
    !c && s !== document.body || // self content
    c && (t.contains(s) || t === s)
  );
  return (d && (Math.abs(f) < 1 || !o) || !d && (Math.abs(h) < 1 || !o)) && (u = !0), u;
}, Vi = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, rm = function(e) {
  return [e.deltaX, e.deltaY];
}, om = function(e) {
  return e && "current" in e ? e.current : e;
}, k_ = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, R_ = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, D_ = 0, Pr = [];
function A_(e) {
  var t = m.useRef([]), n = m.useRef([0, 0]), r = m.useRef(), o = m.useState(D_++)[0], i = m.useState(Cu)[0], a = m.useRef(e);
  m.useEffect(function() {
    a.current = e;
  }, [e]), m.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(o));
      var p = Ng([e.lockRef.current], (e.shards || []).map(om), !0).filter(Boolean);
      return p.forEach(function(y) {
        return y.classList.add("allow-interactivity-".concat(o));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(o)), p.forEach(function(y) {
          return y.classList.remove("allow-interactivity-".concat(o));
        });
      };
    }
  }, [e.inert, e.lockRef.current, e.shards]);
  var s = m.useCallback(function(p, y) {
    if ("touches" in p && p.touches.length === 2 || p.type === "wheel" && p.ctrlKey)
      return !a.current.allowPinchZoom;
    var b = Vi(p), w = n.current, x = "deltaX" in p ? p.deltaX : w[0] - b[0], C = "deltaY" in p ? p.deltaY : w[1] - b[1], M, I = p.target, T = Math.abs(x) > Math.abs(C) ? "h" : "v";
    if ("touches" in p && T === "h" && I.type === "range")
      return !1;
    var k = nm(T, I);
    if (!k)
      return !0;
    if (k ? M = T : (M = T === "v" ? "h" : "v", k = nm(T, I)), !k)
      return !1;
    if (!r.current && "changedTouches" in p && (x || C) && (r.current = M), !M)
      return !0;
    var R = r.current || M;
    return T_(R, y, p, R === "h" ? x : C, !0);
  }, []), c = m.useCallback(function(p) {
    var y = p;
    if (!(!Pr.length || Pr[Pr.length - 1] !== i)) {
      var b = "deltaY" in y ? rm(y) : Vi(y), w = t.current.filter(function(M) {
        return M.name === y.type && (M.target === y.target || y.target === M.shadowParent) && k_(M.delta, b);
      })[0];
      if (w && w.should) {
        y.cancelable && y.preventDefault();
        return;
      }
      if (!w) {
        var x = (a.current.shards || []).map(om).filter(Boolean).filter(function(M) {
          return M.contains(y.target);
        }), C = x.length > 0 ? s(y, x[0]) : !a.current.noIsolation;
        C && y.cancelable && y.preventDefault();
      }
    }
  }, []), u = m.useCallback(function(p, y, b, w) {
    var x = { name: p, delta: y, target: b, should: w, shadowParent: __(b) };
    t.current.push(x), setTimeout(function() {
      t.current = t.current.filter(function(C) {
        return C !== x;
      });
    }, 1);
  }, []), d = m.useCallback(function(p) {
    n.current = Vi(p), r.current = void 0;
  }, []), f = m.useCallback(function(p) {
    u(p.type, rm(p), p.target, s(p, e.lockRef.current));
  }, []), h = m.useCallback(function(p) {
    u(p.type, Vi(p), p.target, s(p, e.lockRef.current));
  }, []);
  m.useEffect(function() {
    return Pr.push(i), e.setCallbacks({
      onScrollCapture: f,
      onWheelCapture: f,
      onTouchMoveCapture: h
    }), document.addEventListener("wheel", c, Nr), document.addEventListener("touchmove", c, Nr), document.addEventListener("touchstart", d, Nr), function() {
      Pr = Pr.filter(function(p) {
        return p !== i;
      }), document.removeEventListener("wheel", c, Nr), document.removeEventListener("touchmove", c, Nr), document.removeEventListener("touchstart", d, Nr);
    };
  }, []);
  var v = e.removeScrollBar, g = e.inert;
  return m.createElement(
    m.Fragment,
    null,
    g ? m.createElement(i, { styles: R_(o) }) : null,
    v ? m.createElement(Rg, { gapMode: e.gapMode }) : null
  );
}
function __(e) {
  for (var t = null; e !== null; )
    e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
  return t;
}
const O_ = Tg(W0, A_);
var z0 = m.forwardRef(function(e, t) {
  return m.createElement(hs, lt({}, e, { ref: t, sideCar: O_ }));
});
z0.classNames = hs.classNames;
var Vu = "Dialog", [G0, EI] = XA(Vu), [L_, Kt] = G0(Vu), Y0 = (e) => {
  const {
    __scopeDialog: t,
    children: n,
    open: r,
    defaultOpen: o,
    onOpenChange: i,
    modal: a = !0
  } = e, s = m.useRef(null), c = m.useRef(null), [u = !1, d] = It({
    prop: r,
    defaultProp: o,
    onChange: i
  });
  return /* @__PURE__ */ l(
    L_,
    {
      scope: t,
      triggerRef: s,
      contentRef: c,
      contentId: Mt(),
      titleId: Mt(),
      descriptionId: Mt(),
      open: u,
      onOpenChange: d,
      onOpenToggle: m.useCallback(() => d((f) => !f), [d]),
      modal: a,
      children: n
    }
  );
};
Y0.displayName = Vu;
var K0 = "DialogTrigger", X0 = m.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = Kt(K0, n), i = hr(t, o.triggerRef);
    return /* @__PURE__ */ l(
      Pn.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": o.open,
        "aria-controls": o.contentId,
        "data-state": Wu(o.open),
        ...r,
        ref: i,
        onClick: In(e.onClick, o.onOpenToggle)
      }
    );
  }
);
X0.displayName = K0;
var $u = "DialogPortal", [I_, q0] = G0($u, {
  forceMount: void 0
}), Z0 = (e) => {
  const { __scopeDialog: t, forceMount: n, children: r, container: o } = e, i = Kt($u, t);
  return /* @__PURE__ */ l(I_, { scope: t, forceMount: n, children: m.Children.map(r, (a) => /* @__PURE__ */ l(fs, { present: n || i.open, children: /* @__PURE__ */ l(B0, { asChild: !0, container: o, children: a }) })) });
};
Z0.displayName = $u;
var Na = "DialogOverlay", Q0 = m.forwardRef(
  (e, t) => {
    const n = q0(Na, e.__scopeDialog), { forceMount: r = n.forceMount, ...o } = e, i = Kt(Na, e.__scopeDialog);
    return i.modal ? /* @__PURE__ */ l(fs, { present: r || i.open, children: /* @__PURE__ */ l(F_, { ...o, ref: t }) }) : null;
  }
);
Q0.displayName = Na;
var F_ = m.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = Kt(Na, n);
    return (
      // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
      // ie. when `Overlay` and `Content` are siblings
      /* @__PURE__ */ l(z0, { as: Fu, allowPinchZoom: !0, shards: [o.contentRef], children: /* @__PURE__ */ l(
        Pn.div,
        {
          "data-state": Wu(o.open),
          ...r,
          ref: t,
          style: { pointerEvents: "auto", ...r.style }
        }
      ) })
    );
  }
), ur = "DialogContent", J0 = m.forwardRef(
  (e, t) => {
    const n = q0(ur, e.__scopeDialog), { forceMount: r = n.forceMount, ...o } = e, i = Kt(ur, e.__scopeDialog);
    return /* @__PURE__ */ l(fs, { present: r || i.open, children: i.modal ? /* @__PURE__ */ l(V_, { ...o, ref: t }) : /* @__PURE__ */ l($_, { ...o, ref: t }) });
  }
);
J0.displayName = ur;
var V_ = m.forwardRef(
  (e, t) => {
    const n = Kt(ur, e.__scopeDialog), r = m.useRef(null), o = hr(t, n.contentRef, r);
    return m.useEffect(() => {
      const i = r.current;
      if (i) return es(i);
    }, []), /* @__PURE__ */ l(
      eb,
      {
        ...e,
        ref: o,
        trapFocus: n.open,
        disableOutsidePointerEvents: !0,
        onCloseAutoFocus: In(e.onCloseAutoFocus, (i) => {
          var a;
          i.preventDefault(), (a = n.triggerRef.current) == null || a.focus();
        }),
        onPointerDownOutside: In(e.onPointerDownOutside, (i) => {
          const a = i.detail.originalEvent, s = a.button === 0 && a.ctrlKey === !0;
          (a.button === 2 || s) && i.preventDefault();
        }),
        onFocusOutside: In(
          e.onFocusOutside,
          (i) => i.preventDefault()
        )
      }
    );
  }
), $_ = m.forwardRef(
  (e, t) => {
    const n = Kt(ur, e.__scopeDialog), r = m.useRef(!1), o = m.useRef(!1);
    return /* @__PURE__ */ l(
      eb,
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
), eb = m.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, trapFocus: r, onOpenAutoFocus: o, onCloseAutoFocus: i, ...a } = e, s = Kt(ur, n), c = m.useRef(null), u = hr(t, c);
    return x_(), /* @__PURE__ */ S(we, { children: [
      /* @__PURE__ */ l(
        V0,
        {
          asChild: !0,
          loop: !0,
          trapped: r,
          onMountAutoFocus: o,
          onUnmountAutoFocus: i,
          children: /* @__PURE__ */ l(
            I0,
            {
              role: "dialog",
              id: s.contentId,
              "aria-describedby": s.descriptionId,
              "aria-labelledby": s.titleId,
              "data-state": Wu(s.open),
              ...a,
              ref: u,
              onDismiss: () => s.onOpenChange(!1)
            }
          )
        }
      ),
      /* @__PURE__ */ S(we, { children: [
        /* @__PURE__ */ l(B_, { titleId: s.titleId }),
        /* @__PURE__ */ l(j_, { contentRef: c, descriptionId: s.descriptionId })
      ] })
    ] });
  }
), Bu = "DialogTitle", tb = m.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = Kt(Bu, n);
    return /* @__PURE__ */ l(Pn.h2, { id: o.titleId, ...r, ref: t });
  }
);
tb.displayName = Bu;
var nb = "DialogDescription", rb = m.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = Kt(nb, n);
    return /* @__PURE__ */ l(Pn.p, { id: o.descriptionId, ...r, ref: t });
  }
);
rb.displayName = nb;
var ob = "DialogClose", ib = m.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = Kt(ob, n);
    return /* @__PURE__ */ l(
      Pn.button,
      {
        type: "button",
        ...r,
        ref: t,
        onClick: In(e.onClick, () => o.onOpenChange(!1))
      }
    );
  }
);
ib.displayName = ob;
function Wu(e) {
  return e ? "open" : "closed";
}
var ab = "DialogTitleWarning", [TI, sb] = KA(ab, {
  contentName: ur,
  titleName: Bu,
  docsSlug: "dialog"
}), B_ = ({ titleId: e }) => {
  const t = sb(ab), n = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
  return m.useEffect(() => {
    e && (document.getElementById(e) || console.error(n));
  }, [n, e]), null;
}, W_ = "DialogDescriptionWarning", j_ = ({ contentRef: e, descriptionId: t }) => {
  const r = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${sb(W_).contentName}}.`;
  return m.useEffect(() => {
    var i;
    const o = (i = e.current) == null ? void 0 : i.getAttribute("aria-describedby");
    t && o && (document.getElementById(t) || console.warn(r));
  }, [r, e, t]), null;
}, lb = Y0, U_ = X0, cb = Z0, ju = Q0, Uu = J0, Hu = tb, zu = rb, ub = ib;
function H_(e) {
  if (typeof document > "u") return;
  let t = document.head || document.getElementsByTagName("head")[0], n = document.createElement("style");
  n.type = "text/css", t.appendChild(n), n.styleSheet ? n.styleSheet.cssText = e : n.appendChild(document.createTextNode(e));
}
const db = L.createContext({
  drawerRef: {
    current: null
  },
  overlayRef: {
    current: null
  },
  onPress: () => {
  },
  onRelease: () => {
  },
  onDrag: () => {
  },
  onNestedDrag: () => {
  },
  onNestedOpenChange: () => {
  },
  onNestedRelease: () => {
  },
  openProp: void 0,
  dismissible: !1,
  isOpen: !1,
  isDragging: !1,
  keyboardIsOpen: {
    current: !1
  },
  snapPointsOffset: null,
  snapPoints: null,
  handleOnly: !1,
  modal: !1,
  shouldFade: !1,
  activeSnapPoint: null,
  onOpenChange: () => {
  },
  setActiveSnapPoint: () => {
  },
  closeDrawer: () => {
  },
  direction: "bottom",
  shouldAnimate: {
    current: !0
  },
  shouldScaleBackground: !1,
  setBackgroundColorOnScale: !0,
  noBodyStyles: !1,
  container: null,
  autoFocus: !1
}), no = () => {
  const e = L.useContext(db);
  if (!e)
    throw new Error("useDrawerContext must be used within a Drawer.Root");
  return e;
};
H_(`[data-vaul-drawer]{touch-action:none;will-change:transform;transition:transform .5s cubic-bezier(.32, .72, 0, 1);animation-duration:.5s;animation-timing-function:cubic-bezier(0.32,0.72,0,1)}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=bottom][data-state=open]{animation-name:slideFromBottom}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=bottom][data-state=closed]{animation-name:slideToBottom}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=top][data-state=open]{animation-name:slideFromTop}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=top][data-state=closed]{animation-name:slideToTop}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=left][data-state=open]{animation-name:slideFromLeft}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=left][data-state=closed]{animation-name:slideToLeft}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=right][data-state=open]{animation-name:slideFromRight}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=right][data-state=closed]{animation-name:slideToRight}[data-vaul-drawer][data-vaul-snap-points=true][data-vaul-drawer-direction=bottom]{transform:translate3d(0,var(--initial-transform,100%),0)}[data-vaul-drawer][data-vaul-snap-points=true][data-vaul-drawer-direction=top]{transform:translate3d(0,calc(var(--initial-transform,100%) * -1),0)}[data-vaul-drawer][data-vaul-snap-points=true][data-vaul-drawer-direction=left]{transform:translate3d(calc(var(--initial-transform,100%) * -1),0,0)}[data-vaul-drawer][data-vaul-snap-points=true][data-vaul-drawer-direction=right]{transform:translate3d(var(--initial-transform,100%),0,0)}[data-vaul-drawer][data-vaul-delayed-snap-points=true][data-vaul-drawer-direction=top]{transform:translate3d(0,var(--snap-point-height,0),0)}[data-vaul-drawer][data-vaul-delayed-snap-points=true][data-vaul-drawer-direction=bottom]{transform:translate3d(0,var(--snap-point-height,0),0)}[data-vaul-drawer][data-vaul-delayed-snap-points=true][data-vaul-drawer-direction=left]{transform:translate3d(var(--snap-point-height,0),0,0)}[data-vaul-drawer][data-vaul-delayed-snap-points=true][data-vaul-drawer-direction=right]{transform:translate3d(var(--snap-point-height,0),0,0)}[data-vaul-overlay][data-vaul-snap-points=false]{animation-duration:.5s;animation-timing-function:cubic-bezier(0.32,0.72,0,1)}[data-vaul-overlay][data-vaul-snap-points=false][data-state=open]{animation-name:fadeIn}[data-vaul-overlay][data-state=closed]{animation-name:fadeOut}[data-vaul-animate=false]{animation:none!important}[data-vaul-overlay][data-vaul-snap-points=true]{opacity:0;transition:opacity .5s cubic-bezier(.32, .72, 0, 1)}[data-vaul-overlay][data-vaul-snap-points=true]{opacity:1}[data-vaul-drawer]:not([data-vaul-custom-container=true])::after{content:'';position:absolute;background:inherit;background-color:inherit}[data-vaul-drawer][data-vaul-drawer-direction=top]::after{top:initial;bottom:100%;left:0;right:0;height:200%}[data-vaul-drawer][data-vaul-drawer-direction=bottom]::after{top:100%;bottom:initial;left:0;right:0;height:200%}[data-vaul-drawer][data-vaul-drawer-direction=left]::after{left:initial;right:100%;top:0;bottom:0;width:200%}[data-vaul-drawer][data-vaul-drawer-direction=right]::after{left:100%;right:initial;top:0;bottom:0;width:200%}[data-vaul-overlay][data-vaul-snap-points=true]:not([data-vaul-snap-points-overlay=true]):not(
[data-state=closed]
){opacity:0}[data-vaul-overlay][data-vaul-snap-points-overlay=true]{opacity:1}[data-vaul-handle]{display:block;position:relative;opacity:.7;background:#e2e2e4;margin-left:auto;margin-right:auto;height:5px;width:32px;border-radius:1rem;touch-action:pan-y}[data-vaul-handle]:active,[data-vaul-handle]:hover{opacity:1}[data-vaul-handle-hitarea]{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);width:max(100%,2.75rem);height:max(100%,2.75rem);touch-action:inherit}@media (hover:hover) and (pointer:fine){[data-vaul-drawer]{user-select:none}}@media (pointer:fine){[data-vaul-handle-hitarea]:{width:100%;height:100%}}@keyframes fadeIn{from{opacity:0}to{opacity:1}}@keyframes fadeOut{to{opacity:0}}@keyframes slideFromBottom{from{transform:translate3d(0,var(--initial-transform,100%),0)}to{transform:translate3d(0,0,0)}}@keyframes slideToBottom{to{transform:translate3d(0,var(--initial-transform,100%),0)}}@keyframes slideFromTop{from{transform:translate3d(0,calc(var(--initial-transform,100%) * -1),0)}to{transform:translate3d(0,0,0)}}@keyframes slideToTop{to{transform:translate3d(0,calc(var(--initial-transform,100%) * -1),0)}}@keyframes slideFromLeft{from{transform:translate3d(calc(var(--initial-transform,100%) * -1),0,0)}to{transform:translate3d(0,0,0)}}@keyframes slideToLeft{to{transform:translate3d(calc(var(--initial-transform,100%) * -1),0,0)}}@keyframes slideFromRight{from{transform:translate3d(var(--initial-transform,100%),0,0)}to{transform:translate3d(0,0,0)}}@keyframes slideToRight{to{transform:translate3d(var(--initial-transform,100%),0,0)}}`);
function z_() {
  const e = navigator.userAgent;
  return typeof window < "u" && (/Firefox/.test(e) && /Mobile/.test(e) || // Android Firefox
  /FxiOS/.test(e));
}
function G_() {
  return Gu(/^Mac/);
}
function Y_() {
  return Gu(/^iPhone/);
}
function im() {
  return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
}
function K_() {
  return Gu(/^iPad/) || // iPadOS 13 lies and says it's a Mac, but we can distinguish by detecting touch support.
  G_() && navigator.maxTouchPoints > 1;
}
function fb() {
  return Y_() || K_();
}
function Gu(e) {
  return typeof window < "u" && window.navigator != null ? e.test(window.navigator.platform) : void 0;
}
const X_ = 24, q_ = typeof window < "u" ? Pc : We;
function am(...e) {
  return (...t) => {
    for (let n of e)
      typeof n == "function" && n(...t);
  };
}
const ml = typeof document < "u" && window.visualViewport;
function sm(e) {
  let t = window.getComputedStyle(e);
  return /(auto|scroll)/.test(t.overflow + t.overflowX + t.overflowY);
}
function hb(e) {
  for (sm(e) && (e = e.parentElement); e && !sm(e); )
    e = e.parentElement;
  return e || document.scrollingElement || document.documentElement;
}
const Z_ = /* @__PURE__ */ new Set([
  "checkbox",
  "radio",
  "range",
  "color",
  "file",
  "image",
  "button",
  "submit",
  "reset"
]);
let $i = 0, pl;
function Q_(e = {}) {
  let { isDisabled: t } = e;
  q_(() => {
    if (!t)
      return $i++, $i === 1 && fb() && (pl = J_()), () => {
        $i--, $i === 0 && (pl == null || pl());
      };
  }, [
    t
  ]);
}
function J_() {
  let e, t = 0, n = (f) => {
    e = hb(f.target), !(e === document.documentElement && e === document.body) && (t = f.changedTouches[0].pageY);
  }, r = (f) => {
    if (!e || e === document.documentElement || e === document.body) {
      f.preventDefault();
      return;
    }
    let h = f.changedTouches[0].pageY, v = e.scrollTop, g = e.scrollHeight - e.clientHeight;
    g !== 0 && ((v <= 0 && h > t || v >= g && h < t) && f.preventDefault(), t = h);
  }, o = (f) => {
    let h = f.target;
    ic(h) && h !== document.activeElement && (f.preventDefault(), h.style.transform = "translateY(-2000px)", h.focus(), requestAnimationFrame(() => {
      h.style.transform = "";
    }));
  }, i = (f) => {
    let h = f.target;
    ic(h) && (h.style.transform = "translateY(-2000px)", requestAnimationFrame(() => {
      h.style.transform = "", ml && (ml.height < window.innerHeight ? requestAnimationFrame(() => {
        lm(h);
      }) : ml.addEventListener("resize", () => lm(h), {
        once: !0
      }));
    }));
  }, a = () => {
    window.scrollTo(0, 0);
  }, s = window.pageXOffset, c = window.pageYOffset, u = am(e5(document.documentElement, "paddingRight", `${window.innerWidth - document.documentElement.clientWidth}px`));
  window.scrollTo(0, 0);
  let d = am(fo(document, "touchstart", n, {
    passive: !1,
    capture: !0
  }), fo(document, "touchmove", r, {
    passive: !1,
    capture: !0
  }), fo(document, "touchend", o, {
    passive: !1,
    capture: !0
  }), fo(document, "focus", i, !0), fo(window, "scroll", a));
  return () => {
    u(), d(), window.scrollTo(s, c);
  };
}
function e5(e, t, n) {
  let r = e.style[t];
  return e.style[t] = n, () => {
    e.style[t] = r;
  };
}
function fo(e, t, n, r) {
  return e.addEventListener(t, n, r), () => {
    e.removeEventListener(t, n, r);
  };
}
function lm(e) {
  let t = document.scrollingElement || document.documentElement;
  for (; e && e !== t; ) {
    let n = hb(e);
    if (n !== document.documentElement && n !== document.body && n !== e) {
      let r = n.getBoundingClientRect().top, o = e.getBoundingClientRect().top, i = e.getBoundingClientRect().bottom;
      const a = n.getBoundingClientRect().bottom + X_;
      i > a && (n.scrollTop += o - r);
    }
    e = n.parentElement;
  }
}
function ic(e) {
  return e instanceof HTMLInputElement && !Z_.has(e.type) || e instanceof HTMLTextAreaElement || e instanceof HTMLElement && e.isContentEditable;
}
function t5(e, t) {
  typeof e == "function" ? e(t) : e != null && (e.current = t);
}
function n5(...e) {
  return (t) => e.forEach((n) => t5(n, t));
}
function mb(...e) {
  return m.useCallback(n5(...e), e);
}
const pb = /* @__PURE__ */ new WeakMap();
function Je(e, t, n = !1) {
  if (!e || !(e instanceof HTMLElement)) return;
  let r = {};
  Object.entries(t).forEach(([o, i]) => {
    if (o.startsWith("--")) {
      e.style.setProperty(o, i);
      return;
    }
    r[o] = e.style[o], e.style[o] = i;
  }), !n && pb.set(e, r);
}
function r5(e, t) {
  if (!e || !(e instanceof HTMLElement)) return;
  let n = pb.get(e);
  n && (e.style[t] = n[t]);
}
const qe = (e) => {
  switch (e) {
    case "top":
    case "bottom":
      return !0;
    case "left":
    case "right":
      return !1;
    default:
      return e;
  }
};
function Bi(e, t) {
  if (!e)
    return null;
  const n = window.getComputedStyle(e), r = (
    // @ts-ignore
    n.transform || n.webkitTransform || n.mozTransform
  );
  let o = r.match(/^matrix3d\((.+)\)$/);
  return o ? parseFloat(o[1].split(", ")[qe(t) ? 13 : 12]) : (o = r.match(/^matrix\((.+)\)$/), o ? parseFloat(o[1].split(", ")[qe(t) ? 5 : 4]) : null);
}
function o5(e) {
  return 8 * (Math.log(e + 1) - 2);
}
function vl(e, t) {
  if (!e) return () => {
  };
  const n = e.style.cssText;
  return Object.assign(e.style, t), () => {
    e.style.cssText = n;
  };
}
function i5(...e) {
  return (...t) => {
    for (const n of e)
      typeof n == "function" && n(...t);
  };
}
const je = {
  DURATION: 0.5,
  EASE: [
    0.32,
    0.72,
    0,
    1
  ]
}, vb = 0.4, a5 = 0.25, s5 = 100, gb = 8, Kn = 16, ac = 26, gl = "vaul-dragging";
function yb(e) {
  const t = L.useRef(e);
  return L.useEffect(() => {
    t.current = e;
  }), L.useMemo(() => (...n) => t.current == null ? void 0 : t.current.call(t, ...n), []);
}
function l5({ defaultProp: e, onChange: t }) {
  const n = L.useState(e), [r] = n, o = L.useRef(r), i = yb(t);
  return L.useEffect(() => {
    o.current !== r && (i(r), o.current = r);
  }, [
    r,
    o,
    i
  ]), n;
}
function bb({ prop: e, defaultProp: t, onChange: n = () => {
} }) {
  const [r, o] = l5({
    defaultProp: t,
    onChange: n
  }), i = e !== void 0, a = i ? e : r, s = yb(n), c = L.useCallback((u) => {
    if (i) {
      const f = typeof u == "function" ? u(e) : u;
      f !== e && s(f);
    } else
      o(u);
  }, [
    i,
    e,
    o,
    s
  ]);
  return [
    a,
    c
  ];
}
function c5({ activeSnapPointProp: e, setActiveSnapPointProp: t, snapPoints: n, drawerRef: r, overlayRef: o, fadeFromIndex: i, onSnapPointChange: a, direction: s = "bottom", container: c, snapToSequentialPoint: u }) {
  const [d, f] = bb({
    prop: e,
    defaultProp: n == null ? void 0 : n[0],
    onChange: t
  }), [h, v] = L.useState(typeof window < "u" ? {
    innerWidth: window.innerWidth,
    innerHeight: window.innerHeight
  } : void 0);
  L.useEffect(() => {
    function T() {
      v({
        innerWidth: window.innerWidth,
        innerHeight: window.innerHeight
      });
    }
    return window.addEventListener("resize", T), () => window.removeEventListener("resize", T);
  }, []);
  const g = L.useMemo(() => d === (n == null ? void 0 : n[n.length - 1]) || null, [
    n,
    d
  ]), p = L.useMemo(() => {
    var T;
    return (T = n == null ? void 0 : n.findIndex((k) => k === d)) != null ? T : null;
  }, [
    n,
    d
  ]), y = n && n.length > 0 && (i || i === 0) && !Number.isNaN(i) && n[i] === d || !n, b = L.useMemo(() => {
    const T = c ? {
      width: c.getBoundingClientRect().width,
      height: c.getBoundingClientRect().height
    } : typeof window < "u" ? {
      width: window.innerWidth,
      height: window.innerHeight
    } : {
      width: 0,
      height: 0
    };
    var k;
    return (k = n == null ? void 0 : n.map((R) => {
      const j = typeof R == "string";
      let X = 0;
      if (j && (X = parseInt(R, 10)), qe(s)) {
        const _ = j ? X : h ? R * T.height : 0;
        return h ? s === "bottom" ? T.height - _ : -T.height + _ : _;
      }
      const G = j ? X : h ? R * T.width : 0;
      return h ? s === "right" ? T.width - G : -T.width + G : G;
    })) != null ? k : [];
  }, [
    n,
    h,
    c
  ]), w = L.useMemo(() => p !== null ? b == null ? void 0 : b[p] : null, [
    b,
    p
  ]), x = L.useCallback((T) => {
    var k;
    const R = (k = b == null ? void 0 : b.findIndex((j) => j === T)) != null ? k : null;
    a(R), Je(r.current, {
      transition: `transform ${je.DURATION}s cubic-bezier(${je.EASE.join(",")})`,
      transform: qe(s) ? `translate3d(0, ${T}px, 0)` : `translate3d(${T}px, 0, 0)`
    }), b && R !== b.length - 1 && i !== void 0 && R !== i && R < i ? Je(o.current, {
      transition: `opacity ${je.DURATION}s cubic-bezier(${je.EASE.join(",")})`,
      opacity: "0"
    }) : Je(o.current, {
      transition: `opacity ${je.DURATION}s cubic-bezier(${je.EASE.join(",")})`,
      opacity: "1"
    }), f(n == null ? void 0 : n[Math.max(R, 0)]);
  }, [
    r.current,
    n,
    b,
    i,
    o,
    f
  ]);
  L.useEffect(() => {
    if (d || e) {
      var T;
      const k = (T = n == null ? void 0 : n.findIndex((R) => R === e || R === d)) != null ? T : -1;
      b && k !== -1 && typeof b[k] == "number" && x(b[k]);
    }
  }, [
    d,
    e,
    n,
    b,
    x
  ]);
  function C({ draggedDistance: T, closeDrawer: k, velocity: R, dismissible: j }) {
    if (i === void 0) return;
    const X = s === "bottom" || s === "right" ? (w ?? 0) - T : (w ?? 0) + T, G = p === i - 1, _ = p === 0, F = T > 0;
    if (G && Je(o.current, {
      transition: `opacity ${je.DURATION}s cubic-bezier(${je.EASE.join(",")})`
    }), !u && R > 2 && !F) {
      j ? k() : x(b[0]);
      return;
    }
    if (!u && R > 2 && F && b && n) {
      x(b[n.length - 1]);
      return;
    }
    const V = b == null ? void 0 : b.reduce(($, W) => typeof $ != "number" || typeof W != "number" ? $ : Math.abs(W - X) < Math.abs($ - X) ? W : $), z = qe(s) ? window.innerHeight : window.innerWidth;
    if (R > vb && Math.abs(T) < z * 0.4) {
      const $ = F ? 1 : -1;
      if ($ > 0 && g && n) {
        x(b[n.length - 1]);
        return;
      }
      if (_ && $ < 0 && j && k(), p === null) return;
      x(b[p + $]);
      return;
    }
    x(V);
  }
  function M({ draggedDistance: T }) {
    if (w === null) return;
    const k = s === "bottom" || s === "right" ? w - T : w + T;
    (s === "bottom" || s === "right") && k < b[b.length - 1] || (s === "top" || s === "left") && k > b[b.length - 1] || Je(r.current, {
      transform: qe(s) ? `translate3d(0, ${k}px, 0)` : `translate3d(${k}px, 0, 0)`
    });
  }
  function I(T, k) {
    if (!n || typeof p != "number" || !b || i === void 0) return null;
    const R = p === i - 1;
    if (p >= i && k)
      return 0;
    if (R && !k) return 1;
    if (!y && !R) return null;
    const X = R ? p + 1 : p - 1, G = R ? b[X] - b[X - 1] : b[X + 1] - b[X], _ = T / Math.abs(G);
    return R ? 1 - _ : _;
  }
  return {
    isLastSnapPoint: g,
    activeSnapPoint: d,
    shouldFade: y,
    getPercentageDragged: I,
    setActiveSnapPoint: f,
    activeSnapPointIndex: p,
    onRelease: C,
    onDrag: M,
    snapPointsOffset: b
  };
}
const u5 = () => () => {
};
function d5() {
  const { direction: e, isOpen: t, shouldScaleBackground: n, setBackgroundColorOnScale: r, noBodyStyles: o } = no(), i = L.useRef(null), a = Et(() => document.body.style.backgroundColor, []);
  function s() {
    return (window.innerWidth - ac) / window.innerWidth;
  }
  L.useEffect(() => {
    if (t && n) {
      i.current && clearTimeout(i.current);
      const c = document.querySelector("[data-vaul-drawer-wrapper]") || document.querySelector("[vaul-drawer-wrapper]");
      if (!c) return;
      i5(r && !o ? vl(document.body, {
        background: "black"
      }) : u5, vl(c, {
        transformOrigin: qe(e) ? "top" : "left",
        transitionProperty: "transform, border-radius",
        transitionDuration: `${je.DURATION}s`,
        transitionTimingFunction: `cubic-bezier(${je.EASE.join(",")})`
      }));
      const u = vl(c, {
        borderRadius: `${gb}px`,
        overflow: "hidden",
        ...qe(e) ? {
          transform: `scale(${s()}) translate3d(0, calc(env(safe-area-inset-top) + 14px), 0)`
        } : {
          transform: `scale(${s()}) translate3d(calc(env(safe-area-inset-top) + 14px), 0, 0)`
        }
      });
      return () => {
        u(), i.current = window.setTimeout(() => {
          a ? document.body.style.background = a : document.body.style.removeProperty("background");
        }, je.DURATION * 1e3);
      };
    }
  }, [
    t,
    n,
    a
  ]);
}
let ho = null;
function f5({ isOpen: e, modal: t, nested: n, hasBeenOpened: r, preventScrollRestoration: o, noBodyStyles: i }) {
  const [a, s] = L.useState(() => typeof window < "u" ? window.location.href : ""), c = L.useRef(0), u = L.useCallback(() => {
    if (im() && ho === null && e && !i) {
      ho = {
        position: document.body.style.position,
        top: document.body.style.top,
        left: document.body.style.left,
        height: document.body.style.height,
        right: "unset"
      };
      const { scrollX: f, innerHeight: h } = window;
      document.body.style.setProperty("position", "fixed", "important"), Object.assign(document.body.style, {
        top: `${-c.current}px`,
        left: `${-f}px`,
        right: "0px",
        height: "auto"
      }), window.setTimeout(() => window.requestAnimationFrame(() => {
        const v = h - window.innerHeight;
        v && c.current >= h && (document.body.style.top = `${-(c.current + v)}px`);
      }), 300);
    }
  }, [
    e
  ]), d = L.useCallback(() => {
    if (im() && ho !== null && !i) {
      const f = -parseInt(document.body.style.top, 10), h = -parseInt(document.body.style.left, 10);
      Object.assign(document.body.style, ho), window.requestAnimationFrame(() => {
        if (o && a !== window.location.href) {
          s(window.location.href);
          return;
        }
        window.scrollTo(h, f);
      }), ho = null;
    }
  }, [
    a
  ]);
  return L.useEffect(() => {
    function f() {
      c.current = window.scrollY;
    }
    return f(), window.addEventListener("scroll", f), () => {
      window.removeEventListener("scroll", f);
    };
  }, []), L.useEffect(() => {
    if (t)
      return () => {
        typeof document > "u" || document.querySelector("[data-vaul-drawer]") || d();
      };
  }, [
    t,
    d
  ]), L.useEffect(() => {
    n || !r || (e ? (!window.matchMedia("(display-mode: standalone)").matches && u(), t || window.setTimeout(() => {
      d();
    }, 500)) : d());
  }, [
    e,
    r,
    a,
    t,
    n,
    u,
    d
  ]), {
    restorePositionSetting: d
  };
}
function wb({ open: e, onOpenChange: t, children: n, onDrag: r, onRelease: o, snapPoints: i, shouldScaleBackground: a = !1, setBackgroundColorOnScale: s = !0, closeThreshold: c = a5, scrollLockTimeout: u = s5, dismissible: d = !0, handleOnly: f = !1, fadeFromIndex: h = i && i.length - 1, activeSnapPoint: v, setActiveSnapPoint: g, fixed: p, modal: y = !0, onClose: b, nested: w, noBodyStyles: x = !1, direction: C = "bottom", defaultOpen: M = !1, disablePreventScroll: I = !0, snapToSequentialPoint: T = !1, preventScrollRestoration: k = !1, repositionInputs: R = !0, onAnimationEnd: j, container: X, autoFocus: G = !1 }) {
  var _, F;
  const [V = !1, z] = bb({
    defaultProp: M,
    prop: e,
    onChange: (he) => {
      t == null || t(he), !he && !w && Fe(), setTimeout(() => {
        j == null || j(he);
      }, je.DURATION * 1e3), he && !y && typeof window < "u" && window.requestAnimationFrame(() => {
        document.body.style.pointerEvents = "auto";
      }), he || (document.body.style.pointerEvents = "auto");
    }
  }), [$, W] = L.useState(!1), [K, E] = L.useState(!1), [P, ee] = L.useState(!1), oe = L.useRef(null), ie = L.useRef(null), de = L.useRef(null), ce = L.useRef(null), B = L.useRef(null), q = L.useRef(!1), se = L.useRef(null), ae = L.useRef(0), Q = L.useRef(!1), U = L.useRef(!M), fe = L.useRef(0), H = L.useRef(null), ye = L.useRef(((_ = H.current) == null ? void 0 : _.getBoundingClientRect().height) || 0), Pe = L.useRef(((F = H.current) == null ? void 0 : F.getBoundingClientRect().width) || 0), Me = L.useRef(0), N = L.useCallback((he) => {
    i && he === Y.length - 1 && (ie.current = /* @__PURE__ */ new Date());
  }, []), { activeSnapPoint: D, activeSnapPointIndex: O, setActiveSnapPoint: te, onRelease: J, snapPointsOffset: Y, onDrag: le, shouldFade: be, getPercentageDragged: Ie } = c5({
    snapPoints: i,
    activeSnapPointProp: v,
    setActiveSnapPointProp: g,
    drawerRef: H,
    fadeFromIndex: h,
    overlayRef: oe,
    onSnapPointChange: N,
    direction: C,
    container: X,
    snapToSequentialPoint: T
  });
  Q_({
    isDisabled: !V || K || !y || P || !$ || !R || !I
  });
  const { restorePositionSetting: Fe } = f5({
    isOpen: V,
    modal: y,
    nested: w ?? !1,
    hasBeenOpened: $,
    preventScrollRestoration: k,
    noBodyStyles: x
  });
  function ot() {
    return (window.innerWidth - ac) / window.innerWidth;
  }
  function Xt(he) {
    var Ne, ke;
    !d && !i || H.current && !H.current.contains(he.target) || (ye.current = ((Ne = H.current) == null ? void 0 : Ne.getBoundingClientRect().height) || 0, Pe.current = ((ke = H.current) == null ? void 0 : ke.getBoundingClientRect().width) || 0, E(!0), de.current = /* @__PURE__ */ new Date(), fb() && window.addEventListener("touchend", () => q.current = !1, {
      once: !0
    }), he.target.setPointerCapture(he.pointerId), ae.current = qe(C) ? he.pageY : he.pageX);
  }
  function it(he, Ne) {
    var ke;
    let xe = he;
    const Be = (ke = window.getSelection()) == null ? void 0 : ke.toString(), at = H.current ? Bi(H.current, C) : null, et = /* @__PURE__ */ new Date();
    if (xe.tagName === "SELECT" || xe.hasAttribute("data-vaul-no-drag") || xe.closest("[data-vaul-no-drag]"))
      return !1;
    if (C === "right" || C === "left")
      return !0;
    if (ie.current && et.getTime() - ie.current.getTime() < 500)
      return !1;
    if (at !== null && (C === "bottom" ? at > 0 : at < 0))
      return !0;
    if (Be && Be.length > 0)
      return !1;
    if (B.current && et.getTime() - B.current.getTime() < u && at === 0 || Ne)
      return B.current = et, !1;
    for (; xe; ) {
      if (xe.scrollHeight > xe.clientHeight) {
        if (xe.scrollTop !== 0)
          return B.current = /* @__PURE__ */ new Date(), !1;
        if (xe.getAttribute("role") === "dialog")
          return !0;
      }
      xe = xe.parentNode;
    }
    return !0;
  }
  function Nt(he) {
    if (H.current && K) {
      const Ne = C === "bottom" || C === "right" ? 1 : -1, ke = (ae.current - (qe(C) ? he.pageY : he.pageX)) * Ne, xe = ke > 0, Be = i && !d && !xe;
      if (Be && O === 0) return;
      const at = Math.abs(ke), et = document.querySelector("[data-vaul-drawer-wrapper]"), qt = C === "bottom" || C === "top" ? ye.current : Pe.current;
      let Wt = at / qt;
      const zn = Ie(at, xe);
      if (zn !== null && (Wt = zn), Be && Wt >= 1 || !q.current && !it(he.target, xe)) return;
      if (H.current.classList.add(gl), q.current = !0, Je(H.current, {
        transition: "none"
      }), Je(oe.current, {
        transition: "none"
      }), i && le({
        draggedDistance: ke
      }), xe && !i) {
        const Zt = o5(ke), wi = Math.min(Zt * -1, 0) * Ne;
        Je(H.current, {
          transform: qe(C) ? `translate3d(0, ${wi}px, 0)` : `translate3d(${wi}px, 0, 0)`
        });
        return;
      }
      const Mn = 1 - Wt;
      if ((be || h && O === h - 1) && (r == null || r(he, Wt), Je(oe.current, {
        opacity: `${Mn}`,
        transition: "none"
      }, !0)), et && oe.current && a) {
        const Zt = Math.min(ot() + Wt * (1 - ot()), 1), wi = 8 - Wt * 8, kd = Math.max(0, 14 - Wt * 14);
        Je(et, {
          borderRadius: `${wi}px`,
          transform: qe(C) ? `scale(${Zt}) translate3d(0, ${kd}px, 0)` : `scale(${Zt}) translate3d(${kd}px, 0, 0)`,
          transition: "none"
        }, !0);
      }
      if (!i) {
        const Zt = at * Ne;
        Je(H.current, {
          transform: qe(C) ? `translate3d(0, ${Zt}px, 0)` : `translate3d(${Zt}px, 0, 0)`
        });
      }
    }
  }
  L.useEffect(() => {
    window.requestAnimationFrame(() => {
      U.current = !0;
    });
  }, []), L.useEffect(() => {
    var he;
    function Ne() {
      if (!H.current || !R) return;
      const ke = document.activeElement;
      if (ic(ke) || Q.current) {
        var xe;
        const Be = ((xe = window.visualViewport) == null ? void 0 : xe.height) || 0, at = window.innerHeight;
        let et = at - Be;
        const qt = H.current.getBoundingClientRect().height || 0, Wt = qt > at * 0.8;
        Me.current || (Me.current = qt);
        const zn = H.current.getBoundingClientRect().top;
        if (Math.abs(fe.current - et) > 60 && (Q.current = !Q.current), i && i.length > 0 && Y && O) {
          const Mn = Y[O] || 0;
          et += Mn;
        }
        if (fe.current = et, qt > Be || Q.current) {
          const Mn = H.current.getBoundingClientRect().height;
          let Zt = Mn;
          Mn > Be && (Zt = Be - (Wt ? zn : ac)), p ? H.current.style.height = `${Mn - Math.max(et, 0)}px` : H.current.style.height = `${Math.max(Zt, Be - zn)}px`;
        } else z_() || (H.current.style.height = `${Me.current}px`);
        i && i.length > 0 && !Q.current ? H.current.style.bottom = "0px" : H.current.style.bottom = `${Math.max(et, 0)}px`;
      }
    }
    return (he = window.visualViewport) == null || he.addEventListener("resize", Ne), () => {
      var ke;
      return (ke = window.visualViewport) == null ? void 0 : ke.removeEventListener("resize", Ne);
    };
  }, [
    O,
    i,
    Y
  ]);
  function Pt(he) {
    oo(), b == null || b(), he || z(!1), setTimeout(() => {
      i && te(i[0]);
    }, je.DURATION * 1e3);
  }
  function Rt() {
    if (!H.current) return;
    const he = document.querySelector("[data-vaul-drawer-wrapper]"), Ne = Bi(H.current, C);
    Je(H.current, {
      transform: "translate3d(0, 0, 0)",
      transition: `transform ${je.DURATION}s cubic-bezier(${je.EASE.join(",")})`
    }), Je(oe.current, {
      transition: `opacity ${je.DURATION}s cubic-bezier(${je.EASE.join(",")})`,
      opacity: "1"
    }), a && Ne && Ne > 0 && V && Je(he, {
      borderRadius: `${gb}px`,
      overflow: "hidden",
      ...qe(C) ? {
        transform: `scale(${ot()}) translate3d(0, calc(env(safe-area-inset-top) + 14px), 0)`,
        transformOrigin: "top"
      } : {
        transform: `scale(${ot()}) translate3d(calc(env(safe-area-inset-top) + 14px), 0, 0)`,
        transformOrigin: "left"
      },
      transitionProperty: "transform, border-radius",
      transitionDuration: `${je.DURATION}s`,
      transitionTimingFunction: `cubic-bezier(${je.EASE.join(",")})`
    }, !0);
  }
  function oo() {
    !K || !H.current || (H.current.classList.remove(gl), q.current = !1, E(!1), ce.current = /* @__PURE__ */ new Date());
  }
  function yr(he) {
    if (!K || !H.current) return;
    H.current.classList.remove(gl), q.current = !1, E(!1), ce.current = /* @__PURE__ */ new Date();
    const Ne = Bi(H.current, C);
    if (!he || !it(he.target, !1) || !Ne || Number.isNaN(Ne) || de.current === null) return;
    const ke = ce.current.getTime() - de.current.getTime(), xe = ae.current - (qe(C) ? he.pageY : he.pageX), Be = Math.abs(xe) / ke;
    if (Be > 0.05 && (ee(!0), setTimeout(() => {
      ee(!1);
    }, 200)), i) {
      J({
        draggedDistance: xe * (C === "bottom" || C === "right" ? 1 : -1),
        closeDrawer: Pt,
        velocity: Be,
        dismissible: d
      }), o == null || o(he, !0);
      return;
    }
    if (C === "bottom" || C === "right" ? xe > 0 : xe < 0) {
      Rt(), o == null || o(he, !0);
      return;
    }
    if (Be > vb) {
      Pt(), o == null || o(he, !1);
      return;
    }
    var at;
    const et = Math.min((at = H.current.getBoundingClientRect().height) != null ? at : 0, window.innerHeight);
    var qt;
    const Wt = Math.min((qt = H.current.getBoundingClientRect().width) != null ? qt : 0, window.innerWidth), zn = C === "left" || C === "right";
    if (Math.abs(Ne) >= (zn ? Wt : et) * c) {
      Pt(), o == null || o(he, !1);
      return;
    }
    o == null || o(he, !0), Rt();
  }
  L.useEffect(() => (V && (Je(document.documentElement, {
    scrollBehavior: "auto"
  }), ie.current = /* @__PURE__ */ new Date()), () => {
    r5(document.documentElement, "scrollBehavior");
  }), [
    V
  ]);
  function Ps(he) {
    const Ne = he ? (window.innerWidth - Kn) / window.innerWidth : 1, ke = he ? -Kn : 0;
    se.current && window.clearTimeout(se.current), Je(H.current, {
      transition: `transform ${je.DURATION}s cubic-bezier(${je.EASE.join(",")})`,
      transform: qe(C) ? `scale(${Ne}) translate3d(0, ${ke}px, 0)` : `scale(${Ne}) translate3d(${ke}px, 0, 0)`
    }), !he && H.current && (se.current = setTimeout(() => {
      const xe = Bi(H.current, C);
      Je(H.current, {
        transition: "none",
        transform: qe(C) ? `translate3d(0, ${xe}px, 0)` : `translate3d(${xe}px, 0, 0)`
      });
    }, 500));
  }
  function Ms(he, Ne) {
    if (Ne < 0) return;
    const ke = (window.innerWidth - Kn) / window.innerWidth, xe = ke + Ne * (1 - ke), Be = -Kn + Ne * Kn;
    Je(H.current, {
      transform: qe(C) ? `scale(${xe}) translate3d(0, ${Be}px, 0)` : `scale(${xe}) translate3d(${Be}px, 0, 0)`,
      transition: "none"
    });
  }
  function Es(he, Ne) {
    const ke = qe(C) ? window.innerHeight : window.innerWidth, xe = Ne ? (ke - Kn) / ke : 1, Be = Ne ? -Kn : 0;
    Ne && Je(H.current, {
      transition: `transform ${je.DURATION}s cubic-bezier(${je.EASE.join(",")})`,
      transform: qe(C) ? `scale(${xe}) translate3d(0, ${Be}px, 0)` : `scale(${xe}) translate3d(${Be}px, 0, 0)`
    });
  }
  return L.useEffect(() => {
    y || window.requestAnimationFrame(() => {
      document.body.style.pointerEvents = "auto";
    });
  }, [
    y
  ]), /* @__PURE__ */ L.createElement(lb, {
    defaultOpen: M,
    onOpenChange: (he) => {
      !d && !he || (he ? W(!0) : Pt(!0), z(he));
    },
    open: V
  }, /* @__PURE__ */ L.createElement(db.Provider, {
    value: {
      activeSnapPoint: D,
      snapPoints: i,
      setActiveSnapPoint: te,
      drawerRef: H,
      overlayRef: oe,
      onOpenChange: t,
      onPress: Xt,
      onRelease: yr,
      onDrag: Nt,
      dismissible: d,
      shouldAnimate: U,
      handleOnly: f,
      isOpen: V,
      isDragging: K,
      shouldFade: be,
      closeDrawer: Pt,
      onNestedDrag: Ms,
      onNestedOpenChange: Ps,
      onNestedRelease: Es,
      keyboardIsOpen: Q,
      modal: y,
      snapPointsOffset: Y,
      activeSnapPointIndex: O,
      direction: C,
      shouldScaleBackground: a,
      setBackgroundColorOnScale: s,
      noBodyStyles: x,
      container: X,
      autoFocus: G
    }
  }, n));
}
const xb = /* @__PURE__ */ L.forwardRef(function({ ...e }, t) {
  const { overlayRef: n, snapPoints: r, onRelease: o, shouldFade: i, isOpen: a, modal: s, shouldAnimate: c } = no(), u = mb(t, n), d = r && r.length > 0;
  if (!s)
    return null;
  const f = L.useCallback((h) => o(h), [
    o
  ]);
  return /* @__PURE__ */ L.createElement(ju, {
    onMouseUp: f,
    ref: u,
    "data-vaul-overlay": "",
    "data-vaul-snap-points": a && d ? "true" : "false",
    "data-vaul-snap-points-overlay": a && i ? "true" : "false",
    "data-vaul-animate": c != null && c.current ? "true" : "false",
    ...e
  });
});
xb.displayName = "Drawer.Overlay";
const Cb = /* @__PURE__ */ L.forwardRef(function({ onPointerDownOutside: e, style: t, onOpenAutoFocus: n, ...r }, o) {
  const { drawerRef: i, onPress: a, onRelease: s, onDrag: c, keyboardIsOpen: u, snapPointsOffset: d, activeSnapPointIndex: f, modal: h, isOpen: v, direction: g, snapPoints: p, container: y, handleOnly: b, shouldAnimate: w, autoFocus: x } = no(), [C, M] = L.useState(!1), I = mb(o, i), T = L.useRef(null), k = L.useRef(null), R = L.useRef(!1), j = p && p.length > 0;
  d5();
  const X = (_, F, V = 0) => {
    if (R.current) return !0;
    const z = Math.abs(_.y), $ = Math.abs(_.x), W = $ > z, K = [
      "bottom",
      "right"
    ].includes(F) ? 1 : -1;
    if (F === "left" || F === "right") {
      if (!(_.x * K < 0) && $ >= 0 && $ <= V)
        return W;
    } else if (!(_.y * K < 0) && z >= 0 && z <= V)
      return !W;
    return R.current = !0, !0;
  };
  L.useEffect(() => {
    j && window.requestAnimationFrame(() => {
      M(!0);
    });
  }, []);
  function G(_) {
    T.current = null, R.current = !1, s(_);
  }
  return /* @__PURE__ */ L.createElement(Uu, {
    "data-vaul-drawer-direction": g,
    "data-vaul-drawer": "",
    "data-vaul-delayed-snap-points": C ? "true" : "false",
    "data-vaul-snap-points": v && j ? "true" : "false",
    "data-vaul-custom-container": y ? "true" : "false",
    "data-vaul-animate": w != null && w.current ? "true" : "false",
    ...r,
    ref: I,
    style: d && d.length > 0 ? {
      "--snap-point-height": `${d[f ?? 0]}px`,
      ...t
    } : t,
    onPointerDown: (_) => {
      b || (r.onPointerDown == null || r.onPointerDown.call(r, _), T.current = {
        x: _.pageX,
        y: _.pageY
      }, a(_));
    },
    onOpenAutoFocus: (_) => {
      n == null || n(_), x || _.preventDefault();
    },
    onPointerDownOutside: (_) => {
      if (e == null || e(_), !h || _.defaultPrevented) {
        _.preventDefault();
        return;
      }
      u.current && (u.current = !1);
    },
    onFocusOutside: (_) => {
      if (!h) {
        _.preventDefault();
        return;
      }
    },
    onPointerMove: (_) => {
      if (k.current = _, b || (r.onPointerMove == null || r.onPointerMove.call(r, _), !T.current)) return;
      const F = _.pageY - T.current.y, V = _.pageX - T.current.x, z = _.pointerType === "touch" ? 10 : 2;
      X({
        x: V,
        y: F
      }, g, z) ? c(_) : (Math.abs(V) > z || Math.abs(F) > z) && (T.current = null);
    },
    onPointerUp: (_) => {
      r.onPointerUp == null || r.onPointerUp.call(r, _), T.current = null, R.current = !1, s(_);
    },
    onPointerOut: (_) => {
      r.onPointerOut == null || r.onPointerOut.call(r, _), G(k.current);
    },
    onContextMenu: (_) => {
      r.onContextMenu == null || r.onContextMenu.call(r, _), k.current && G(k.current);
    }
  });
});
Cb.displayName = "Drawer.Content";
const h5 = 250, m5 = 120, Sb = /* @__PURE__ */ L.forwardRef(function({ preventCycle: e = !1, children: t, ...n }, r) {
  const { closeDrawer: o, isDragging: i, snapPoints: a, activeSnapPoint: s, setActiveSnapPoint: c, dismissible: u, handleOnly: d, isOpen: f, onPress: h, onDrag: v } = no(), g = L.useRef(null), p = L.useRef(!1);
  function y() {
    if (p.current) {
      x();
      return;
    }
    window.setTimeout(() => {
      b();
    }, m5);
  }
  function b() {
    if (i || e || p.current) {
      x();
      return;
    }
    if (x(), !a || a.length === 0) {
      u || o();
      return;
    }
    if (s === a[a.length - 1] && u) {
      o();
      return;
    }
    const M = a.findIndex((T) => T === s);
    if (M === -1) return;
    const I = a[M + 1];
    c(I);
  }
  function w() {
    g.current = window.setTimeout(() => {
      p.current = !0;
    }, h5);
  }
  function x() {
    g.current && window.clearTimeout(g.current), p.current = !1;
  }
  return /* @__PURE__ */ L.createElement("div", {
    onClick: y,
    onPointerCancel: x,
    onPointerDown: (C) => {
      d && h(C), w();
    },
    onPointerMove: (C) => {
      d && v(C);
    },
    // onPointerUp is already handled by the content component
    ref: r,
    "data-vaul-drawer-visible": f ? "true" : "false",
    "data-vaul-handle": "",
    "aria-hidden": "true",
    ...n
  }, /* @__PURE__ */ L.createElement("span", {
    "data-vaul-handle-hitarea": "",
    "aria-hidden": "true"
  }, t));
});
Sb.displayName = "Drawer.Handle";
function p5({ onDrag: e, onOpenChange: t, open: n, ...r }) {
  const { onNestedDrag: o, onNestedOpenChange: i, onNestedRelease: a } = no();
  if (!o)
    throw new Error("Drawer.NestedRoot must be placed in another drawer");
  return /* @__PURE__ */ L.createElement(wb, {
    nested: !0,
    open: n,
    onClose: () => {
      i(!1);
    },
    onDrag: (s, c) => {
      o(s, c), e == null || e(s, c);
    },
    onOpenChange: (s) => {
      s && i(s), t == null || t(s);
    },
    onRelease: a,
    ...r
  });
}
function v5(e) {
  const t = no(), { container: n = t.container, ...r } = e;
  return /* @__PURE__ */ L.createElement(cb, {
    container: n,
    ...r
  });
}
const sn = {
  Root: wb,
  NestedRoot: p5,
  Content: Cb,
  Overlay: xb,
  Trigger: U_,
  Portal: v5,
  Handle: Sb,
  Close: ub,
  Title: Hu,
  Description: zu
}, Nb = ({
  shouldScaleBackground: e = !0,
  ...t
}) => /* @__PURE__ */ l(
  sn.Root,
  {
    shouldScaleBackground: e,
    ...t
  }
);
Nb.displayName = "Drawer";
const g5 = sn.Trigger, y5 = sn.Portal, Yu = m.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l(
  sn.Overlay,
  {
    ref: n,
    className: A("bg-black/80 fixed inset-0 z-50", e),
    ...t
  }
));
Yu.displayName = sn.Overlay.displayName;
const Pb = m.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ S(y5, { children: [
  /* @__PURE__ */ l(Yu, {}),
  /* @__PURE__ */ S(
    sn.Content,
    {
      ref: r,
      className: A(
        "bg-background fixed inset-x-0 bottom-0 z-50 mt-24 flex h-auto flex-col rounded-t-[10px] border",
        e
      ),
      ...n,
      children: [
        /* @__PURE__ */ l("div", { className: "bg-muted mx-auto mt-4 h-2 w-[100px] rounded-full" }),
        t
      ]
    }
  )
] }));
Pb.displayName = "DrawerContent";
const b5 = m.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l(
  sn.Title,
  {
    ref: n,
    className: A(
      "text-lg font-semibold leading-none tracking-tight",
      e
    ),
    ...t
  }
));
b5.displayName = sn.Title.displayName;
const w5 = m.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l(
  sn.Description,
  {
    ref: n,
    className: A("text-muted-foreground text-sm", e),
    ...t
  }
));
w5.displayName = sn.Description.displayName;
var sc = ["Enter", " "], x5 = ["ArrowDown", "PageUp", "Home"], Mb = ["ArrowUp", "PageDown", "End"], C5 = [...x5, ...Mb], S5 = {
  ltr: [...sc, "ArrowRight"],
  rtl: [...sc, "ArrowLeft"]
}, N5 = {
  ltr: ["ArrowLeft"],
  rtl: ["ArrowRight"]
}, pi = "Menu", [Ko, P5, M5] = ci(pi), [mr, Eb] = rn(pi, [
  M5,
  Yr,
  ss
]), ms = Yr(), Tb = ss(), [E5, pr] = mr(pi), [T5, vi] = mr(pi), kb = (e) => {
  const { __scopeMenu: t, open: n = !1, children: r, dir: o, onOpenChange: i, modal: a = !0 } = e, s = ms(t), [c, u] = m.useState(null), d = m.useRef(!1), f = Ve(i), h = Zr(o);
  return m.useEffect(() => {
    const v = () => {
      d.current = !0, document.addEventListener("pointerdown", g, { capture: !0, once: !0 }), document.addEventListener("pointermove", g, { capture: !0, once: !0 });
    }, g = () => d.current = !1;
    return document.addEventListener("keydown", v, { capture: !0 }), () => {
      document.removeEventListener("keydown", v, { capture: !0 }), document.removeEventListener("pointerdown", g, { capture: !0 }), document.removeEventListener("pointermove", g, { capture: !0 });
    };
  }, []), /* @__PURE__ */ l(xc, { ...s, children: /* @__PURE__ */ l(
    E5,
    {
      scope: t,
      open: n,
      onOpenChange: f,
      content: c,
      onContentChange: u,
      children: /* @__PURE__ */ l(
        T5,
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
kb.displayName = pi;
var k5 = "MenuAnchor", Ku = m.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e, o = ms(n);
    return /* @__PURE__ */ l(Ra, { ...o, ...r, ref: t });
  }
);
Ku.displayName = k5;
var Xu = "MenuPortal", [R5, Rb] = mr(Xu, {
  forceMount: void 0
}), Db = (e) => {
  const { __scopeMenu: t, forceMount: n, children: r, container: o } = e, i = pr(Xu, t);
  return /* @__PURE__ */ l(R5, { scope: t, forceMount: n, children: /* @__PURE__ */ l(Ct, { present: n || i.open, children: /* @__PURE__ */ l(Oa, { asChild: !0, container: o, children: r }) }) });
};
Db.displayName = Xu;
var Lt = "MenuContent", [D5, qu] = mr(Lt), Ab = m.forwardRef(
  (e, t) => {
    const n = Rb(Lt, e.__scopeMenu), { forceMount: r = n.forceMount, ...o } = e, i = pr(Lt, e.__scopeMenu), a = vi(Lt, e.__scopeMenu);
    return /* @__PURE__ */ l(Ko.Provider, { scope: e.__scopeMenu, children: /* @__PURE__ */ l(Ct, { present: r || i.open, children: /* @__PURE__ */ l(Ko.Slot, { scope: e.__scopeMenu, children: a.modal ? /* @__PURE__ */ l(A5, { ...o, ref: t }) : /* @__PURE__ */ l(_5, { ...o, ref: t }) }) }) });
  }
), A5 = m.forwardRef(
  (e, t) => {
    const n = pr(Lt, e.__scopeMenu), r = m.useRef(null), o = Se(t, r);
    return m.useEffect(() => {
      const i = r.current;
      if (i) return es(i);
    }, []), /* @__PURE__ */ l(
      Zu,
      {
        ...e,
        ref: o,
        trapFocus: n.open,
        disableOutsidePointerEvents: n.open,
        disableOutsideScroll: !0,
        onFocusOutside: re(
          e.onFocusOutside,
          (i) => i.preventDefault(),
          { checkForDefaultPrevented: !1 }
        ),
        onDismiss: () => n.onOpenChange(!1)
      }
    );
  }
), _5 = m.forwardRef((e, t) => {
  const n = pr(Lt, e.__scopeMenu);
  return /* @__PURE__ */ l(
    Zu,
    {
      ...e,
      ref: t,
      trapFocus: !1,
      disableOutsidePointerEvents: !1,
      disableOutsideScroll: !1,
      onDismiss: () => n.onOpenChange(!1)
    }
  );
}), Zu = m.forwardRef(
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
      onDismiss: v,
      disableOutsideScroll: g,
      ...p
    } = e, y = pr(Lt, n), b = vi(Lt, n), w = ms(n), x = Tb(n), C = P5(n), [M, I] = m.useState(null), T = m.useRef(null), k = Se(t, T, y.onContentChange), R = m.useRef(0), j = m.useRef(""), X = m.useRef(0), G = m.useRef(null), _ = m.useRef("right"), F = m.useRef(0), V = g ? ns : m.Fragment, z = g ? { as: ar, allowPinchZoom: !0 } : void 0, $ = (K) => {
      var B, q;
      const E = j.current + K, P = C().filter((se) => !se.disabled), ee = document.activeElement, oe = (B = P.find((se) => se.ref.current === ee)) == null ? void 0 : B.textValue, ie = P.map((se) => se.textValue), de = z5(ie, E, oe), ce = (q = P.find((se) => se.textValue === de)) == null ? void 0 : q.ref.current;
      (function se(ae) {
        j.current = ae, window.clearTimeout(R.current), ae !== "" && (R.current = window.setTimeout(() => se(""), 1e3));
      })(E), ce && setTimeout(() => ce.focus());
    };
    m.useEffect(() => () => window.clearTimeout(R.current), []), wu();
    const W = m.useCallback((K) => {
      var P, ee;
      return _.current === ((P = G.current) == null ? void 0 : P.side) && Y5(K, (ee = G.current) == null ? void 0 : ee.area);
    }, []);
    return /* @__PURE__ */ l(
      D5,
      {
        scope: n,
        searchRef: j,
        onItemEnter: m.useCallback(
          (K) => {
            W(K) && K.preventDefault();
          },
          [W]
        ),
        onItemLeave: m.useCallback(
          (K) => {
            var E;
            W(K) || ((E = T.current) == null || E.focus(), I(null));
          },
          [W]
        ),
        onTriggerLeave: m.useCallback(
          (K) => {
            W(K) && K.preventDefault();
          },
          [W]
        ),
        pointerGraceTimerRef: X,
        onPointerGraceIntentChange: m.useCallback((K) => {
          G.current = K;
        }, []),
        children: /* @__PURE__ */ l(V, { ...z, children: /* @__PURE__ */ l(
          Ja,
          {
            asChild: !0,
            trapped: o,
            onMountAutoFocus: re(i, (K) => {
              var E;
              K.preventDefault(), (E = T.current) == null || E.focus({ preventScroll: !0 });
            }),
            onUnmountAutoFocus: a,
            children: /* @__PURE__ */ l(
              Da,
              {
                asChild: !0,
                disableOutsidePointerEvents: s,
                onEscapeKeyDown: u,
                onPointerDownOutside: d,
                onFocusOutside: f,
                onInteractOutside: h,
                onDismiss: v,
                children: /* @__PURE__ */ l(
                  My,
                  {
                    asChild: !0,
                    ...x,
                    dir: b.dir,
                    orientation: "vertical",
                    loop: r,
                    currentTabStopId: M,
                    onCurrentTabStopIdChange: I,
                    onEntryFocus: re(c, (K) => {
                      b.isUsingKeyboardRef.current || K.preventDefault();
                    }),
                    preventScrollOnEntryFocus: !0,
                    children: /* @__PURE__ */ l(
                      bc,
                      {
                        role: "menu",
                        "aria-orientation": "vertical",
                        "data-state": Kb(y.open),
                        "data-radix-menu-content": "",
                        dir: b.dir,
                        ...w,
                        ...p,
                        ref: k,
                        style: { outline: "none", ...p.style },
                        onKeyDown: re(p.onKeyDown, (K) => {
                          const P = K.target.closest("[data-radix-menu-content]") === K.currentTarget, ee = K.ctrlKey || K.altKey || K.metaKey, oe = K.key.length === 1;
                          P && (K.key === "Tab" && K.preventDefault(), !ee && oe && $(K.key));
                          const ie = T.current;
                          if (K.target !== ie || !C5.includes(K.key)) return;
                          K.preventDefault();
                          const ce = C().filter((B) => !B.disabled).map((B) => B.ref.current);
                          Mb.includes(K.key) && ce.reverse(), U5(ce);
                        }),
                        onBlur: re(e.onBlur, (K) => {
                          K.currentTarget.contains(K.target) || (window.clearTimeout(R.current), j.current = "");
                        }),
                        onPointerMove: re(
                          e.onPointerMove,
                          Xo((K) => {
                            const E = K.target, P = F.current !== K.clientX;
                            if (K.currentTarget.contains(E) && P) {
                              const ee = K.clientX > F.current ? "right" : "left";
                              _.current = ee, F.current = K.clientX;
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
Ab.displayName = Lt;
var O5 = "MenuGroup", Qu = m.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e;
    return /* @__PURE__ */ l(ve.div, { role: "group", ...r, ref: t });
  }
);
Qu.displayName = O5;
var L5 = "MenuLabel", _b = m.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e;
    return /* @__PURE__ */ l(ve.div, { ...r, ref: t });
  }
);
_b.displayName = L5;
var Pa = "MenuItem", cm = "menu.itemSelect", ps = m.forwardRef(
  (e, t) => {
    const { disabled: n = !1, onSelect: r, ...o } = e, i = m.useRef(null), a = vi(Pa, e.__scopeMenu), s = qu(Pa, e.__scopeMenu), c = Se(t, i), u = m.useRef(!1), d = () => {
      const f = i.current;
      if (!n && f) {
        const h = new CustomEvent(cm, { bubbles: !0, cancelable: !0 });
        f.addEventListener(cm, (v) => r == null ? void 0 : r(v), { once: !0 }), Cl(f, h), h.defaultPrevented ? u.current = !1 : a.onClose();
      }
    };
    return /* @__PURE__ */ l(
      Ob,
      {
        ...o,
        ref: c,
        disabled: n,
        onClick: re(e.onClick, d),
        onPointerDown: (f) => {
          var h;
          (h = e.onPointerDown) == null || h.call(e, f), u.current = !0;
        },
        onPointerUp: re(e.onPointerUp, (f) => {
          var h;
          u.current || (h = f.currentTarget) == null || h.click();
        }),
        onKeyDown: re(e.onKeyDown, (f) => {
          const h = s.searchRef.current !== "";
          n || h && f.key === " " || sc.includes(f.key) && (f.currentTarget.click(), f.preventDefault());
        })
      }
    );
  }
);
ps.displayName = Pa;
var Ob = m.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, disabled: r = !1, textValue: o, ...i } = e, a = qu(Pa, n), s = Tb(n), c = m.useRef(null), u = Se(t, c), [d, f] = m.useState(!1), [h, v] = m.useState("");
    return m.useEffect(() => {
      const g = c.current;
      g && v((g.textContent ?? "").trim());
    }, [i.children]), /* @__PURE__ */ l(
      Ko.ItemSlot,
      {
        scope: n,
        disabled: r,
        textValue: o ?? h,
        children: /* @__PURE__ */ l(Ey, { asChild: !0, ...s, focusable: !r, children: /* @__PURE__ */ l(
          ve.div,
          {
            role: "menuitem",
            "data-highlighted": d ? "" : void 0,
            "aria-disabled": r || void 0,
            "data-disabled": r ? "" : void 0,
            ...i,
            ref: u,
            onPointerMove: re(
              e.onPointerMove,
              Xo((g) => {
                r ? a.onItemLeave(g) : (a.onItemEnter(g), g.defaultPrevented || g.currentTarget.focus({ preventScroll: !0 }));
              })
            ),
            onPointerLeave: re(
              e.onPointerLeave,
              Xo((g) => a.onItemLeave(g))
            ),
            onFocus: re(e.onFocus, () => f(!0)),
            onBlur: re(e.onBlur, () => f(!1))
          }
        ) })
      }
    );
  }
), I5 = "MenuCheckboxItem", Lb = m.forwardRef(
  (e, t) => {
    const { checked: n = !1, onCheckedChange: r, ...o } = e;
    return /* @__PURE__ */ l(Bb, { scope: e.__scopeMenu, checked: n, children: /* @__PURE__ */ l(
      ps,
      {
        role: "menuitemcheckbox",
        "aria-checked": Ma(n) ? "mixed" : n,
        ...o,
        ref: t,
        "data-state": ed(n),
        onSelect: re(
          o.onSelect,
          () => r == null ? void 0 : r(Ma(n) ? !0 : !n),
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
);
Lb.displayName = I5;
var Ib = "MenuRadioGroup", [F5, V5] = mr(
  Ib,
  { value: void 0, onValueChange: () => {
  } }
), Fb = m.forwardRef(
  (e, t) => {
    const { value: n, onValueChange: r, ...o } = e, i = Ve(r);
    return /* @__PURE__ */ l(F5, { scope: e.__scopeMenu, value: n, onValueChange: i, children: /* @__PURE__ */ l(Qu, { ...o, ref: t }) });
  }
);
Fb.displayName = Ib;
var Vb = "MenuRadioItem", $b = m.forwardRef(
  (e, t) => {
    const { value: n, ...r } = e, o = V5(Vb, e.__scopeMenu), i = n === o.value;
    return /* @__PURE__ */ l(Bb, { scope: e.__scopeMenu, checked: i, children: /* @__PURE__ */ l(
      ps,
      {
        role: "menuitemradio",
        "aria-checked": i,
        ...r,
        ref: t,
        "data-state": ed(i),
        onSelect: re(
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
$b.displayName = Vb;
var Ju = "MenuItemIndicator", [Bb, $5] = mr(
  Ju,
  { checked: !1 }
), Wb = m.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, forceMount: r, ...o } = e, i = $5(Ju, n);
    return /* @__PURE__ */ l(
      Ct,
      {
        present: r || Ma(i.checked) || i.checked === !0,
        children: /* @__PURE__ */ l(
          ve.span,
          {
            ...o,
            ref: t,
            "data-state": ed(i.checked)
          }
        )
      }
    );
  }
);
Wb.displayName = Ju;
var B5 = "MenuSeparator", jb = m.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e;
    return /* @__PURE__ */ l(
      ve.div,
      {
        role: "separator",
        "aria-orientation": "horizontal",
        ...r,
        ref: t
      }
    );
  }
);
jb.displayName = B5;
var W5 = "MenuArrow", Ub = m.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e, o = ms(n);
    return /* @__PURE__ */ l(wc, { ...o, ...r, ref: t });
  }
);
Ub.displayName = W5;
var j5 = "MenuSub", [kI, Hb] = mr(j5), So = "MenuSubTrigger", zb = m.forwardRef(
  (e, t) => {
    const n = pr(So, e.__scopeMenu), r = vi(So, e.__scopeMenu), o = Hb(So, e.__scopeMenu), i = qu(So, e.__scopeMenu), a = m.useRef(null), { pointerGraceTimerRef: s, onPointerGraceIntentChange: c } = i, u = { __scopeMenu: e.__scopeMenu }, d = m.useCallback(() => {
      a.current && window.clearTimeout(a.current), a.current = null;
    }, []);
    return m.useEffect(() => d, [d]), m.useEffect(() => {
      const f = s.current;
      return () => {
        window.clearTimeout(f), c(null);
      };
    }, [s, c]), /* @__PURE__ */ l(Ku, { asChild: !0, ...u, children: /* @__PURE__ */ l(
      Ob,
      {
        id: o.triggerId,
        "aria-haspopup": "menu",
        "aria-expanded": n.open,
        "aria-controls": o.contentId,
        "data-state": Kb(n.open),
        ...e,
        ref: Sc(t, o.onTriggerChange),
        onClick: (f) => {
          var h;
          (h = e.onClick) == null || h.call(e, f), !(e.disabled || f.defaultPrevented) && (f.currentTarget.focus(), n.open || n.onOpenChange(!0));
        },
        onPointerMove: re(
          e.onPointerMove,
          Xo((f) => {
            i.onItemEnter(f), !f.defaultPrevented && !e.disabled && !n.open && !a.current && (i.onPointerGraceIntentChange(null), a.current = window.setTimeout(() => {
              n.onOpenChange(!0), d();
            }, 100));
          })
        ),
        onPointerLeave: re(
          e.onPointerLeave,
          Xo((f) => {
            var v, g;
            d();
            const h = (v = n.content) == null ? void 0 : v.getBoundingClientRect();
            if (h) {
              const p = (g = n.content) == null ? void 0 : g.dataset.side, y = p === "right", b = y ? -5 : 5, w = h[y ? "left" : "right"], x = h[y ? "right" : "left"];
              i.onPointerGraceIntentChange({
                area: [
                  // Apply a bleed on clientX to ensure that our exit point is
                  // consistently within polygon bounds
                  { x: f.clientX + b, y: f.clientY },
                  { x: w, y: h.top },
                  { x, y: h.top },
                  { x, y: h.bottom },
                  { x: w, y: h.bottom }
                ],
                side: p
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
        onKeyDown: re(e.onKeyDown, (f) => {
          var v;
          const h = i.searchRef.current !== "";
          e.disabled || h && f.key === " " || S5[r.dir].includes(f.key) && (n.onOpenChange(!0), (v = n.content) == null || v.focus(), f.preventDefault());
        })
      }
    ) });
  }
);
zb.displayName = So;
var Gb = "MenuSubContent", Yb = m.forwardRef(
  (e, t) => {
    const n = Rb(Lt, e.__scopeMenu), { forceMount: r = n.forceMount, ...o } = e, i = pr(Lt, e.__scopeMenu), a = vi(Lt, e.__scopeMenu), s = Hb(Gb, e.__scopeMenu), c = m.useRef(null), u = Se(t, c);
    return /* @__PURE__ */ l(Ko.Provider, { scope: e.__scopeMenu, children: /* @__PURE__ */ l(Ct, { present: r || i.open, children: /* @__PURE__ */ l(Ko.Slot, { scope: e.__scopeMenu, children: /* @__PURE__ */ l(
      Zu,
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
        onFocusOutside: re(e.onFocusOutside, (d) => {
          d.target !== s.trigger && i.onOpenChange(!1);
        }),
        onEscapeKeyDown: re(e.onEscapeKeyDown, (d) => {
          a.onClose(), d.preventDefault();
        }),
        onKeyDown: re(e.onKeyDown, (d) => {
          var v;
          const f = d.currentTarget.contains(d.target), h = N5[a.dir].includes(d.key);
          f && h && (i.onOpenChange(!1), (v = s.trigger) == null || v.focus(), d.preventDefault());
        })
      }
    ) }) }) });
  }
);
Yb.displayName = Gb;
function Kb(e) {
  return e ? "open" : "closed";
}
function Ma(e) {
  return e === "indeterminate";
}
function ed(e) {
  return Ma(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
function U5(e) {
  const t = document.activeElement;
  for (const n of e)
    if (n === t || (n.focus(), document.activeElement !== t)) return;
}
function H5(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
function z5(e, t, n) {
  const o = t.length > 1 && Array.from(t).every((u) => u === t[0]) ? t[0] : t, i = n ? e.indexOf(n) : -1;
  let a = H5(e, Math.max(i, 0));
  o.length === 1 && (a = a.filter((u) => u !== n));
  const c = a.find(
    (u) => u.toLowerCase().startsWith(o.toLowerCase())
  );
  return c !== n ? c : void 0;
}
function G5(e, t) {
  const { x: n, y: r } = e;
  let o = !1;
  for (let i = 0, a = t.length - 1; i < t.length; a = i++) {
    const s = t[i].x, c = t[i].y, u = t[a].x, d = t[a].y;
    c > r != d > r && n < (u - s) * (r - c) / (d - c) + s && (o = !o);
  }
  return o;
}
function Y5(e, t) {
  if (!t) return !1;
  const n = { x: e.clientX, y: e.clientY };
  return G5(n, t);
}
function Xo(e) {
  return (t) => t.pointerType === "mouse" ? e(t) : void 0;
}
var K5 = kb, X5 = Ku, q5 = Db, Z5 = Ab, Q5 = Qu, J5 = _b, e3 = ps, t3 = Lb, n3 = Fb, r3 = $b, o3 = Wb, i3 = jb, a3 = Ub, s3 = zb, l3 = Yb, td = "DropdownMenu", [c3, RI] = rn(
  td,
  [Eb]
), mt = Eb(), [u3, Xb] = c3(td), qb = (e) => {
  const {
    __scopeDropdownMenu: t,
    children: n,
    dir: r,
    open: o,
    defaultOpen: i,
    onOpenChange: a,
    modal: s = !0
  } = e, c = mt(t), u = m.useRef(null), [d = !1, f] = It({
    prop: o,
    defaultProp: i,
    onChange: a
  });
  return /* @__PURE__ */ l(
    u3,
    {
      scope: t,
      triggerId: Mt(),
      triggerRef: u,
      contentId: Mt(),
      open: d,
      onOpenChange: f,
      onOpenToggle: m.useCallback(() => f((h) => !h), [f]),
      modal: s,
      children: /* @__PURE__ */ l(K5, { ...c, open: d, onOpenChange: f, dir: r, modal: s, children: n })
    }
  );
};
qb.displayName = td;
var Zb = "DropdownMenuTrigger", Qb = m.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, disabled: r = !1, ...o } = e, i = Xb(Zb, n), a = mt(n);
    return /* @__PURE__ */ l(X5, { asChild: !0, ...a, children: /* @__PURE__ */ l(
      ve.button,
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
        ref: Sc(t, i.triggerRef),
        onPointerDown: re(e.onPointerDown, (s) => {
          !r && s.button === 0 && s.ctrlKey === !1 && (i.onOpenToggle(), i.open || s.preventDefault());
        }),
        onKeyDown: re(e.onKeyDown, (s) => {
          r || (["Enter", " "].includes(s.key) && i.onOpenToggle(), s.key === "ArrowDown" && i.onOpenChange(!0), ["Enter", " ", "ArrowDown"].includes(s.key) && s.preventDefault());
        })
      }
    ) });
  }
);
Qb.displayName = Zb;
var d3 = "DropdownMenuPortal", Jb = (e) => {
  const { __scopeDropdownMenu: t, ...n } = e, r = mt(t);
  return /* @__PURE__ */ l(q5, { ...r, ...n });
};
Jb.displayName = d3;
var e1 = "DropdownMenuContent", t1 = m.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, o = Xb(e1, n), i = mt(n), a = m.useRef(!1);
    return /* @__PURE__ */ l(
      Z5,
      {
        id: o.contentId,
        "aria-labelledby": o.triggerId,
        ...i,
        ...r,
        ref: t,
        onCloseAutoFocus: re(e.onCloseAutoFocus, (s) => {
          var c;
          a.current || (c = o.triggerRef.current) == null || c.focus(), a.current = !1, s.preventDefault();
        }),
        onInteractOutside: re(e.onInteractOutside, (s) => {
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
t1.displayName = e1;
var f3 = "DropdownMenuGroup", h3 = m.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, o = mt(n);
    return /* @__PURE__ */ l(Q5, { ...o, ...r, ref: t });
  }
);
h3.displayName = f3;
var m3 = "DropdownMenuLabel", n1 = m.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, o = mt(n);
    return /* @__PURE__ */ l(J5, { ...o, ...r, ref: t });
  }
);
n1.displayName = m3;
var p3 = "DropdownMenuItem", r1 = m.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, o = mt(n);
    return /* @__PURE__ */ l(e3, { ...o, ...r, ref: t });
  }
);
r1.displayName = p3;
var v3 = "DropdownMenuCheckboxItem", o1 = m.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = mt(n);
  return /* @__PURE__ */ l(t3, { ...o, ...r, ref: t });
});
o1.displayName = v3;
var g3 = "DropdownMenuRadioGroup", y3 = m.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = mt(n);
  return /* @__PURE__ */ l(n3, { ...o, ...r, ref: t });
});
y3.displayName = g3;
var b3 = "DropdownMenuRadioItem", i1 = m.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = mt(n);
  return /* @__PURE__ */ l(r3, { ...o, ...r, ref: t });
});
i1.displayName = b3;
var w3 = "DropdownMenuItemIndicator", a1 = m.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = mt(n);
  return /* @__PURE__ */ l(o3, { ...o, ...r, ref: t });
});
a1.displayName = w3;
var x3 = "DropdownMenuSeparator", s1 = m.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = mt(n);
  return /* @__PURE__ */ l(i3, { ...o, ...r, ref: t });
});
s1.displayName = x3;
var C3 = "DropdownMenuArrow", S3 = m.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, o = mt(n);
    return /* @__PURE__ */ l(a3, { ...o, ...r, ref: t });
  }
);
S3.displayName = C3;
var N3 = "DropdownMenuSubTrigger", l1 = m.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = mt(n);
  return /* @__PURE__ */ l(s3, { ...o, ...r, ref: t });
});
l1.displayName = N3;
var P3 = "DropdownMenuSubContent", c1 = m.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = mt(n);
  return /* @__PURE__ */ l(
    l3,
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
c1.displayName = P3;
var M3 = qb, E3 = Qb, T3 = Jb, u1 = t1, d1 = n1, f1 = r1, h1 = o1, m1 = i1, p1 = a1, v1 = s1, g1 = l1, y1 = c1;
const k3 = M3, R3 = E3, D3 = m.forwardRef(({ className: e, inset: t, children: n, ...r }, o) => /* @__PURE__ */ S(
  g1,
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
      /* @__PURE__ */ l(Ov, { className: "ml-auto h-4 w-4" })
    ]
  }
));
D3.displayName = g1.displayName;
const A3 = m.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l(
  y1,
  {
    ref: n,
    className: A(
      "z-50 min-w-[--radix-popper-anchor-width] overflow-hidden rounded-md border bg-f1-background text-f1-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    ...t
  }
));
A3.displayName = y1.displayName;
const b1 = m.forwardRef(({ className: e, sideOffset: t = 4, ...n }, r) => /* @__PURE__ */ l(T3, { children: /* @__PURE__ */ l(
  u1,
  {
    ref: r,
    sideOffset: t,
    className: A(
      "z-50 min-w-[--radix-popper-anchor-width] overflow-hidden rounded-md border border-solid border-f1-border-secondary bg-f1-background text-f1-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    ...n
  }
) }));
b1.displayName = u1.displayName;
const w1 = m.forwardRef(({ className: e, inset: t, ...n }, r) => /* @__PURE__ */ l(
  f1,
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
w1.displayName = f1.displayName;
const _3 = m.forwardRef(({ className: e, children: t, checked: n, ...r }, o) => /* @__PURE__ */ S(
  h1,
  {
    ref: o,
    className: A(
      "relative flex cursor-default select-none items-center rounded-xs py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-f1-background-secondary focus:text-f1-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    checked: n,
    ...r,
    children: [
      /* @__PURE__ */ l("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ l(p1, { children: /* @__PURE__ */ l(DP, { className: "h-4 w-4" }) }) }),
      t
    ]
  }
));
_3.displayName = h1.displayName;
const O3 = m.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ S(
  m1,
  {
    ref: r,
    className: A(
      "relative flex cursor-default select-none items-center rounded-xs py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-f1-background-secondary focus:text-f1-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    ...n,
    children: [
      /* @__PURE__ */ l("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ l(p1, { children: /* @__PURE__ */ l(OP, { className: "h-2 w-2 fill-current" }) }) }),
      t
    ]
  }
));
O3.displayName = m1.displayName;
const L3 = m.forwardRef(({ className: e, inset: t, ...n }, r) => /* @__PURE__ */ l(
  d1,
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
L3.displayName = d1.displayName;
const x1 = m.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l(
  v1,
  {
    ref: n,
    className: A("-mx-1 my-1 h-px bg-f1-border-secondary", e),
    ...t
  }
));
x1.displayName = v1.displayName;
const C1 = Z(
  function({ bare: t = !1, ...n }, r) {
    return /* @__PURE__ */ l(
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
), lc = ({ item: e }) => /* @__PURE__ */ S(we, { children: [
  e.avatar && Qa(e.avatar, "xsmall"),
  e.icon && /* @__PURE__ */ l(
    Ce,
    {
      icon: e.icon,
      size: "md",
      className: A("text-f1-icon", e.critical && "text-f1-icon-critical")
    }
  ),
  /* @__PURE__ */ S("div", { className: "flex flex-col items-start", children: [
    e.label,
    e.description && /* @__PURE__ */ l(
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
] }), I3 = ({ item: e }) => {
  const { label: t, ...n } = e, r = A(
    "flex items-start gap-1.5 w-full",
    e.critical && "text-f1-foreground-critical"
  );
  return /* @__PURE__ */ l(w1, { asChild: !0, onClick: e.onClick, className: r, children: e.href ? /* @__PURE__ */ l(
    Vt,
    {
      href: e.href,
      className: A(
        r,
        "text-f1-foreground no-underline hover:cursor-pointer"
      ),
      ...n,
      children: /* @__PURE__ */ l(lc, { item: e })
    }
  ) : /* @__PURE__ */ l("div", { className: r, children: /* @__PURE__ */ l(lc, { item: e }) }) });
};
function dr({
  items: e,
  icon: t = rk,
  size: n,
  children: r
}) {
  return /* @__PURE__ */ S(k3, { children: [
    /* @__PURE__ */ l(R3, { asChild: !0, children: r || /* @__PURE__ */ l(
      $e,
      {
        hideLabel: !0,
        icon: t,
        size: n,
        label: "...",
        round: !0,
        variant: "outline"
      }
    ) }),
    /* @__PURE__ */ l(b1, { align: "end", children: e.map(
      (o, i) => o === "separator" ? /* @__PURE__ */ l(x1, {}, i) : /* @__PURE__ */ l(I3, { item: o }, i)
    ) })
  ] });
}
const F3 = ({ items: e, children: t }) => {
  const [n, r] = Te(!1);
  return /* @__PURE__ */ S(Nb, { open: n, onOpenChange: r, children: [
    /* @__PURE__ */ l(g5, { asChild: !0, children: /* @__PURE__ */ l("div", { className: "w-full [&>*]:w-full", children: t || /* @__PURE__ */ l(
      $e,
      {
        label: "Other actions",
        icon: jl,
        variant: "outline",
        size: "lg"
      }
    ) }) }),
    /* @__PURE__ */ l(Yu, { className: "bg-f1-background-overlay" }),
    /* @__PURE__ */ l(Pb, { className: "bg-f1-background", children: /* @__PURE__ */ l("div", { className: "flex flex-col gap-2 p-4", children: e.map(
      (o, i) => o === "separator" ? /* @__PURE__ */ l(C1, {}, `separator-${i}`) : o.href ? /* @__PURE__ */ l(
        Vt,
        {
          ...o,
          href: o.href,
          className: A(
            "flex w-full items-start gap-1.5",
            o.critical && "text-f1-foreground-critical",
            "text-f1-foreground no-underline hover:cursor-pointer"
          ),
          children: /* @__PURE__ */ l(lc, { item: o })
        }
      ) : /* @__PURE__ */ l(
        $e,
        {
          label: o.label,
          onClick: () => {
            var a;
            (a = o.onClick) == null || a.call(o), r(!1);
          },
          variant: o.critical ? "critical" : "outline",
          icon: o.icon,
          size: "lg"
        },
        o.label
      )
    ) }) })
  ] });
}, um = (e) => {
  e.stopPropagation();
}, V3 = ({
  content: e,
  collapsed: t
}) => {
  const n = "FactorialOneTextEditor";
  return document.querySelectorAll(`.${n} a`).forEach((r) => {
    r.removeEventListener("click", um), r.addEventListener("click", um);
  }), /* @__PURE__ */ l(
    "div",
    {
      dangerouslySetInnerHTML: { __html: e },
      className: A(n, t && "line-clamp-5")
    }
  );
}, $3 = () => /* @__PURE__ */ S("div", { className: "flex flex-col justify-around gap-3 py-2", children: [
  /* @__PURE__ */ l(Ae, { className: "h-2.5 w-1/2 rounded-2xs" }),
  /* @__PURE__ */ l(Ae, { className: "h-2.5 w-2/3 rounded-2xs" })
] }), S1 = ht(
  V3,
  $3
), B3 = (e, t) => {
  if (t.disallowEmpty && e.length === 0)
    throw Error("You need to provide some text that is not empty");
  if (t.maxLength !== void 0 && e.length > t.maxLength)
    throw Error(
      `"${e}" should have no more than ${t.maxLength} characters`
    );
  if (t.minLength !== void 0 && e.length < t.minLength)
    throw Error(`"${e}" should have at least ${t.minLength} characters`);
}, vr = (e, t) => {
  We(() => {
    e !== void 0 && t && B3(e, t);
  }, [e, t]);
}, gr = Z(
  ({ left: e, text: t, additionalAccesibleText: n, onClick: r, className: o }, i) => /* @__PURE__ */ S(
    "div",
    {
      ref: i,
      className: A(
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
gr.displayName = "BaseTag";
const nd = Z(
  ({ text: e, additionalAccesibleText: t, icon: n }, r) => (vr(e, { disallowEmpty: !0 }), /* @__PURE__ */ l(
    gr,
    {
      ref: r,
      className: A("border-[1px] border-solid border-f1-border-secondary"),
      left: n ? /* @__PURE__ */ l(Vo, { icon: n, size: "sm", className: "text-f1-icon", "aria-hidden": !0 }) : null,
      text: e,
      additionalAccesibleText: t
    }
  ))
);
nd.displayName = "RawTag";
const dm = ({ tags: e, right: t }) => /* @__PURE__ */ l(
  "div",
  {
    className: A(
      "flex flex-1 flex-row items-center gap-1.5",
      t && "justify-end"
    ),
    children: e.map((n) => {
      const r = /* @__PURE__ */ l("div", { children: /* @__PURE__ */ l(
        nd,
        {
          icon: n.icon,
          additionalAccesibleText: `${n.label}: ${n.description}`
        }
      ) });
      return n.label || n.description ? /* @__PURE__ */ l(
        ds,
        {
          label: n.label,
          description: n.description,
          children: r
        },
        n.label ?? n.description
      ) : r;
    })
  }
), N1 = Z(
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
    return /* @__PURE__ */ S(
      "div",
      {
        ref: h,
        className: "relative flex flex-row items-stretch gap-2.5 overflow-hidden rounded-sm p-2",
        children: [
          !f && /* @__PURE__ */ S(we, { children: [
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
          /* @__PURE__ */ S("div", { className: "z-10 flex flex-1 flex-col gap-2", children: [
            /* @__PURE__ */ S("div", { className: "flex flex-row items-start gap-2.5", children: [
              /* @__PURE__ */ S("div", { className: "flex flex-1 flex-col gap-0.5", children: [
                !!t && /* @__PURE__ */ l("p", { className: "line-clamp-1 text-sm text-f1-foreground-secondary", children: t }),
                /* @__PURE__ */ S("p", { className: "line-clamp-3 font-medium", children: [
                  n,
                  !!r && /* @__PURE__ */ l("span", { className: "pl-1 font-normal text-f1-foreground-secondary", children: `· ${r}` })
                ] }),
                /* @__PURE__ */ l("p", { className: "text-f1-foreground-secondary", children: o })
              ] }),
              /* @__PURE__ */ S("div", { className: "flex flex-row items-center", children: [
                u && /* @__PURE__ */ S(we, { children: [
                  /* @__PURE__ */ l(ql, { date: u }),
                  /* @__PURE__ */ l(
                    Ce,
                    {
                      icon: Xa,
                      size: "sm",
                      className: "text-f1-foreground-tertiary"
                    }
                  )
                ] }),
                d && /* @__PURE__ */ l(ql, { date: d })
              ] })
            ] }),
            (s || c) && /* @__PURE__ */ S("div", { className: "flex flex-row items-center justify-between", children: [
              s && /* @__PURE__ */ l(dm, { tags: s }),
              c && /* @__PURE__ */ l(dm, { tags: c, right: !0 })
            ] })
          ] })
        ]
      }
    );
  }
), W3 = {
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
}, j3 = {
  foreground: {
    DEFAULT: "hsl(var(--neutral-100))",
    secondary: "hsl(var(--neutral-50))",
    tertiary: "hsl(var(--neutral-40))",
    inverse: {
      DEFAULT: "hsl(var(--white-100))",
      secondary: "hsl(var(--white-80))"
    },
    disabled: "hsl(var(--neutral-30))",
    accent: "hsl(var(--accent-70))",
    critical: "hsl(var(--critical-70))",
    info: "hsl(var(--info-70))",
    warning: "hsl(var(--warning-70))",
    positive: "hsl(var(--positive-70))",
    selected: "hsl(var(--selected-70))"
  },
  background: {
    DEFAULT: "hsl(var(--neutral-0))",
    hover: "hsl(var(--neutral-5))",
    secondary: {
      DEFAULT: "hsl(var(--neutral-10))",
      hover: "hsl(var(--neutral-20))"
    },
    tertiary: "hsl(var(--neutral-5))",
    inverse: {
      DEFAULT: "hsl(var(--neutral-90))",
      secondary: "hsl(var(--white-60))"
    },
    bold: "hsl(var(--neutral-90))",
    accent: {
      DEFAULT: "hsl(var(--accent-50) / 0.1)",
      bold: {
        DEFAULT: "hsl(var(--accent-50))",
        hover: "hsl(var(--accent-60))"
      },
      alpha5: "hsl(var(--accent-50) / 0.05)"
    },
    promote: {
      DEFAULT: "hsl(var(--promote-50) / 0.2)",
      hover: "hsl(var(--promote-50) / 0.4)",
      alpha5: "hsl(var(--promote-50) / 0.05)"
    },
    critical: {
      DEFAULT: "hsl(var(--critical-50) / 0.1)",
      bold: "hsl(var(--critical-50))"
    },
    info: {
      DEFAULT: "hsl(var(--info-50) / 0.1)",
      bold: "hsl(var(--info-50))"
    },
    warning: {
      DEFAULT: "hsl(var(--warning-50) / 0.1)",
      bold: "hsl(var(--warning-50))"
    },
    positive: {
      DEFAULT: "hsl(var(--positive-50) / 0.1)",
      bold: "hsl(var(--positive-50))"
    },
    selected: {
      DEFAULT: "hsl(var(--selected-50) / 0.1)",
      bold: "hsl(var(--selected-50))"
    },
    overlay: {
      DEFAULT: "hsl(var(--neutral-40))"
    }
  },
  border: {
    DEFAULT: "hsl(var(--neutral-30))",
    hover: "hsl(var(--neutral-40))",
    secondary: "hsl(var(--neutral-10))",
    inverse: "hsl(var(--neutral-0) / 0.2)",
    promote: {
      DEFAULT: "hsl(var(--promote-50) / 0.4)",
      alpha30: "hsl(var(--promote-50) / 0.3)"
    },
    selected: {
      DEFAULT: "hsl(var(--selected-50) / 0.2)",
      bold: "hsl(var(--selected-50))"
    },
    accent: {
      alpha20: "hsl(var(--accent-50) / 0.2)"
    },
    critical: {
      DEFAULT: "hsl(var(--critical-50) / 0.1)",
      bold: "hsl(var(--critical-50))"
    },
    warning: "hsl(var(--warning-50) / 0.1)",
    info: "hsl(var(--info-50) / 0.1)"
  },
  icon: {
    DEFAULT: "hsl(var(--neutral-solid-50))",
    secondary: "hsl(var(--neutral-solid-40))",
    inverse: "hsl(var(--neutral-0))",
    bold: "hsl(var(--neutral-100))",
    critical: {
      DEFAULT: "hsl(var(--critical-50))",
      bold: "hsl(var(--critical-70))"
    },
    info: "hsl(var(--info-50))",
    warning: "hsl(var(--warning-50))",
    positive: "hsl(var(--positive-50))",
    selected: "hsl(var(--selected-50))"
  },
  ring: "hsl(var(--ring))",
  link: "hsl(var(--link))",
  page: "hsl(var(--page))",
  "special-highlight": "hsl(var(--special-highlight))"
}, U3 = ({
  title: e,
  imageUrl: t,
  place: n,
  date: r
}) => {
  let o = zD(r);
  return n && (o = `${o} · ${n}`), /* @__PURE__ */ S("div", { className: "flex w-full flex-col gap-1 rounded-xl border border-solid border-f1-border-secondary bg-f1-background-inverse-secondary p-1 shadow", children: [
    t && /* @__PURE__ */ S("div", { className: "relative aspect-video w-full overflow-hidden rounded-md", children: [
      /* @__PURE__ */ l(
        "img",
        {
          src: t,
          role: "presentation",
          loading: "lazy",
          className: "aspect-video h-full w-full object-cover"
        }
      ),
      /* @__PURE__ */ l(Ae, { className: "absolute inset-0 h-full w-full" })
    ] }),
    /* @__PURE__ */ l(
      N1,
      {
        title: e,
        description: o,
        color: j3["special-highlight"],
        isPending: !1,
        toDate: r,
        noBackground: !0
      }
    )
  ] });
}, H3 = () => /* @__PURE__ */ S(
  "div",
  {
    className: "flex w-full flex-col gap-1 rounded-xl border border-solid border-f1-border-secondary bg-f1-background-inverse-secondary p-1",
    role: "status",
    "aria-busy": "true",
    "aria-live": "polite",
    children: [
      /* @__PURE__ */ l("div", { children: /* @__PURE__ */ l(Ae, { className: "aspect-video h-full w-full rounded-lg" }) }),
      /* @__PURE__ */ S("div", { className: "flex h-full flex-row gap-3 p-2", children: [
        /* @__PURE__ */ l(Ae, { className: "w-1 shrink-0 self-stretch rounded-full" }),
        /* @__PURE__ */ S("div", { className: "flex grow flex-col gap-1.5 py-1", children: [
          /* @__PURE__ */ l(Ae, { className: "mt-px h-3 w-1/2" }),
          /* @__PURE__ */ l(Ae, { className: "mb-px h-3 w-1/4" })
        ] })
      ] })
    ]
  }
), P1 = ht(U3, H3), z3 = ({
  id: e,
  author: t,
  group: n,
  createdAt: r,
  title: o,
  description: i,
  onClick: a,
  imageUrl: s,
  event: c,
  counters: u,
  reactions: d,
  inLabel: f,
  comment: h,
  dropdownItems: v
}) => {
  const g = [u.views, u.comments].filter(Boolean).join(" · "), p = KD(r), y = () => {
    a(e);
  }, b = `${t.firstName} ${t.lastName}`;
  return /* @__PURE__ */ S(
    "div",
    {
      className: "flex w-full cursor-pointer flex-row gap-3 rounded-xl border border-solid border-transparent p-3 pt-2 hover:bg-f1-background-hover focus:border-f1-border-secondary focus:outline focus:outline-1 focus:outline-offset-1 focus:outline-f1-border-selected-bold md:pb-4 md:pt-3",
      onClick: y,
      children: [
        /* @__PURE__ */ l("div", { className: "hidden md:block", children: /* @__PURE__ */ l(io, { href: t.url, title: b, stopPropagation: !0, children: /* @__PURE__ */ l(
          lr,
          {
            firstName: t.firstName,
            lastName: t.lastName,
            src: t.avatarUrl
          }
        ) }) }),
        /* @__PURE__ */ S("div", { className: "flex flex-1 flex-col gap-3", children: [
          /* @__PURE__ */ S("div", { className: "flex flex-col gap-2", children: [
            /* @__PURE__ */ S("div", { className: "flex flex-row justify-between", children: [
              /* @__PURE__ */ S("div", { className: "flex flex-1 flex-row flex-wrap items-center gap-1", children: [
                /* @__PURE__ */ l(
                  io,
                  {
                    href: t.url,
                    className: "block md:hidden",
                    title: b,
                    stopPropagation: !0,
                    children: /* @__PURE__ */ l("span", { className: "flex items-center", children: /* @__PURE__ */ l(
                      lr,
                      {
                        firstName: t.firstName,
                        lastName: t.lastName,
                        src: t.avatarUrl,
                        size: "xsmall"
                      }
                    ) })
                  }
                ),
                /* @__PURE__ */ l(
                  io,
                  {
                    href: t.url,
                    title: b,
                    className: "font-medium text-f1-foreground no-underline visited:text-f1-foreground",
                    stopPropagation: !0,
                    children: b
                  }
                ),
                /* @__PURE__ */ l("span", { className: "text-f1-foreground-secondary", children: f }),
                /* @__PURE__ */ l(
                  io,
                  {
                    onClick: n.onClick,
                    title: n.title,
                    className: "font-medium text-f1-foreground no-underline visited:text-f1-foreground",
                    stopPropagation: !0,
                    children: n.title
                  }
                ),
                /* @__PURE__ */ l("span", { className: "hidden text-f1-foreground-secondary md:inline", children: "·" }),
                /* @__PURE__ */ l("span", { className: "text-f1-foreground-secondary", children: p })
              ] }),
              /* @__PURE__ */ S("div", { className: "flex flex-row gap-2", children: [
                /* @__PURE__ */ S("div", { className: "hidden flex-row gap-2 md:flex", children: [
                  /* @__PURE__ */ l(
                    io,
                    {
                      onClick: h.onClick,
                      title: h.label,
                      stopPropagation: !0,
                      children: /* @__PURE__ */ l($e, { label: h.label, size: "sm", variant: "outline" })
                    }
                  ),
                  (v == null ? void 0 : v.length) && /* @__PURE__ */ l(
                    dr,
                    {
                      items: v,
                      icon: jl,
                      size: "sm"
                    }
                  )
                ] }),
                /* @__PURE__ */ l("div", { className: "md:hidden", children: /* @__PURE__ */ l(
                  dr,
                  {
                    items: [
                      {
                        label: h.label,
                        onClick: h.onClick
                      },
                      ...v ?? []
                    ],
                    icon: jl,
                    size: "sm"
                  }
                ) })
              ] })
            ] }),
            /* @__PURE__ */ S("div", { className: "flex flex-col gap-1", children: [
              /* @__PURE__ */ l("p", { className: "text-xl font-semibold", children: o }),
              i && /* @__PURE__ */ l(S1, { content: i, collapsed: !0 })
            ] })
          ] }),
          s && !c && /* @__PURE__ */ S("div", { className: "relative aspect-video overflow-hidden rounded-xl md:w-2/3", children: [
            /* @__PURE__ */ l(
              "img",
              {
                src: s,
                role: "presentation",
                loading: "lazy",
                className: "aspect-video h-full w-full object-cover"
              }
            ),
            /* @__PURE__ */ l(Ae, { className: "absolute inset-0 h-full w-full" })
          ] }),
          c && /* @__PURE__ */ l("div", { className: "w-full md:w-2/3", children: /* @__PURE__ */ l(P1, { ...c }) }),
          /* @__PURE__ */ l("p", { className: "text-f1-foreground-secondary", children: g }),
          /* @__PURE__ */ l(
            YA,
            {
              items: (d == null ? void 0 : d.items) ?? [],
              onInteraction: d == null ? void 0 : d.onInteraction
            }
          )
        ] })
      ]
    }
  );
}, G3 = ({
  withEvent: e,
  withImage: t
}) => /* @__PURE__ */ S("div", { className: "flex w-full cursor-wait flex-row gap-3 rounded-xl p-3 pt-2 md:pb-4 md:pt-3", children: [
  /* @__PURE__ */ l("div", { className: "hidden md:block", children: /* @__PURE__ */ l(Ae, { className: "aspect-square w-8 rounded-full" }) }),
  /* @__PURE__ */ S("div", { className: "w-full", children: [
    /* @__PURE__ */ S("div", { className: "flex h-6 flex-row items-center gap-2", children: [
      /* @__PURE__ */ l("div", { className: "md:hidden", children: /* @__PURE__ */ l(Ae, { className: "aspect-square w-4 rounded-full" }) }),
      /* @__PURE__ */ l(Ae, { className: "h-2.5 w-14 rounded-2xs" }),
      /* @__PURE__ */ l(Ae, { className: "h-2.5 w-18 rounded-2xs" })
    ] }),
    /* @__PURE__ */ l(Ae, { className: "mt-3.5 h-3.5 w-1/5 rounded-2xs" }),
    /* @__PURE__ */ l("div", { className: "mt-3", children: /* @__PURE__ */ l(S1.Skeleton, {}) }),
    t && !e && /* @__PURE__ */ l("div", { className: "mt-3 aspect-video w-full overflow-hidden rounded-xl md:w-2/3", children: /* @__PURE__ */ l(Ae, { className: "h-full w-full rounded-2xs" }) }),
    e && /* @__PURE__ */ l("div", { className: "mt-3 w-full md:w-2/3", children: /* @__PURE__ */ l(P1.Skeleton, {}) }),
    /* @__PURE__ */ S("div", { className: "mt-3 flex flex-row items-center gap-1 py-1", children: [
      /* @__PURE__ */ l(Ae, { className: "h-2.5 w-14 rounded-2xs" }),
      /* @__PURE__ */ l(Ae, { className: "h-2.5 w-14 rounded-2xs" })
    ] })
  ] })
] }), DI = ht(
  z3,
  G3
), Y3 = Ye(
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
function rd({ size: e, type: t, value: n, maxValue: r }) {
  const o = r && n > r ? `+${r}` : n;
  return /* @__PURE__ */ l("div", { className: Y3({ size: e, type: t }), children: o });
}
const qo = Z(
  ({ text: e, additionalAccesibleText: t, variant: n }, r) => (vr(e, { disallowEmpty: !0 }), /* @__PURE__ */ l(
    gr,
    {
      ref: r,
      className: A(
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
          className: A(
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
qo.displayName = "StatusTag";
function fm(e) {
  switch (e.value.type) {
    case "text":
      return /* @__PURE__ */ l("span", { children: e.value.content });
    case "avatar":
      return /* @__PURE__ */ S("div", { className: "flex items-center gap-1", children: [
        Qa(e.value.variant, "xsmall"),
        e.value.text && /* @__PURE__ */ l("span", { children: e.value.text })
      ] });
    case "status":
      return /* @__PURE__ */ l(qo, { text: e.value.label, variant: e.value.variant });
  }
}
function K3({ item: e }) {
  var o, i;
  const [t, n] = Te(!1), r = (o = e.actions) == null ? void 0 : o.length;
  return /* @__PURE__ */ S("div", { className: "flex h-8 items-center gap-2", children: [
    /* @__PURE__ */ l("div", { className: "w-28 truncate text-f1-foreground-secondary md:w-fit", children: e.label }),
    /* @__PURE__ */ S(
      "div",
      {
        role: "button",
        tabIndex: r ? 0 : -1,
        onMouseEnter: () => r && n(!0),
        onMouseLeave: () => r && n(!1),
        onFocus: () => r && n(!0),
        onBlur: () => r && n(!1),
        className: "relative flex h-5 w-fit items-center hover:cursor-default",
        children: [
          /* @__PURE__ */ l("div", { className: "font-medium text-f1-foreground", children: fm(e) }),
          /* @__PURE__ */ l(ii, { children: t && r && /* @__PURE__ */ S(
            wt.div,
            {
              className: A(
                "absolute -left-1.5 -top-1.5 z-50 flex hidden h-8 items-center justify-center gap-1.5 whitespace-nowrap rounded-sm bg-f1-background py-1 pl-1.5 shadow-md ring-1 ring-inset ring-f1-border-secondary md:flex",
                r ? "pr-1" : "pr-1.5"
              ),
              initial: { opacity: 0 },
              animate: { opacity: 1 },
              exit: { opacity: 0 },
              transition: { duration: 0.1 },
              children: [
                /* @__PURE__ */ l("div", { className: "flex h-5 items-center font-medium text-f1-foreground", children: fm(e) }),
                r && /* @__PURE__ */ l(
                  wt.div,
                  {
                    className: "flex gap-1",
                    initial: { x: -16 },
                    animate: { x: 0 },
                    exit: { x: -16 },
                    transition: { duration: 0.1 },
                    children: (i = e.actions) == null ? void 0 : i.map((a, s) => /* @__PURE__ */ l(ds, { label: a.label, children: /* @__PURE__ */ l(
                      $e,
                      {
                        size: "sm",
                        variant: "neutral",
                        round: !0,
                        label: a.label,
                        hideLabel: !0,
                        icon: a.icon,
                        onClick: a.onClick
                      },
                      `action-${s}`
                    ) }, `tooltip-${s}`))
                  }
                )
              ]
            }
          ) })
        ]
      }
    )
  ] });
}
function hm({ items: e }) {
  return e != null && e.length ? /* @__PURE__ */ l("div", { className: "flex flex-col items-start gap-x-3 gap-y-0 md:flex-row md:flex-wrap md:items-center", children: e.map((t, n) => /* @__PURE__ */ S(we, { children: [
    /* @__PURE__ */ l(K3, { item: t }, `item-${n}`),
    n < e.length - 1 && /* @__PURE__ */ l(
      "div",
      {
        className: "hidden h-4 w-[1px] bg-f1-border md:block"
      },
      `separator-${n}`
    )
  ] })) }) : null;
}
function od({
  title: e,
  avatar: t,
  description: n,
  eyebrow: r,
  primaryAction: o,
  secondaryActions: i,
  otherActions: a,
  status: s,
  metadata: c
}) {
  const u = s ? [
    {
      label: s.label,
      value: {
        type: "status",
        label: s.text,
        variant: s.variant
      }
    },
    ...c ?? []
  ] : c;
  return /* @__PURE__ */ S("div", { className: "flex flex-col gap-3 p-8", children: [
    /* @__PURE__ */ S("div", { className: "flex flex-col items-start justify-start gap-4 md:flex-row", children: [
      /* @__PURE__ */ S("div", { className: "flex grow flex-col items-start justify-start gap-3 md:flex-row md:items-center", children: [
        t && /* @__PURE__ */ l("div", { className: "flex items-start", children: Qa(t, "large") }),
        /* @__PURE__ */ S("div", { className: "flex flex-col gap-1", children: [
          r && /* @__PURE__ */ l("div", { className: "text-lg text-f1-foreground-secondary", children: r }),
          /* @__PURE__ */ l("span", { className: "text-xl font-semibold text-f1-foreground", children: e }),
          n && /* @__PURE__ */ l("div", { className: "text-lg text-f1-foreground-secondary", children: n })
        ] })
      ] }),
      /* @__PURE__ */ l("div", { className: "flex flex-wrap items-center gap-x-3 gap-y-1 md:hidden", children: c && /* @__PURE__ */ l(hm, { items: u }) }),
      /* @__PURE__ */ S("div", { className: "flex w-full shrink-0 flex-wrap items-center gap-x-3 gap-y-4 md:w-fit md:flex-row-reverse md:gap-y-2 md:overflow-x-auto", children: [
        o && /* @__PURE__ */ S(we, { children: [
          /* @__PURE__ */ l("div", { className: "hidden md:block", children: /* @__PURE__ */ l(
            $e,
            {
              label: o.label,
              onClick: o.onClick,
              variant: "default",
              icon: o.icon
            }
          ) }),
          /* @__PURE__ */ l("div", { className: "w-full md:hidden [&>*]:w-full", children: /* @__PURE__ */ l(
            $e,
            {
              label: o.label,
              onClick: o.onClick,
              variant: "default",
              icon: o.icon,
              size: "lg"
            }
          ) })
        ] }),
        o && (i || a) && /* @__PURE__ */ l("div", { className: "hidden h-4 w-px bg-f1-background-secondary md:block" }),
        i && i.map((d) => /* @__PURE__ */ S(we, { children: [
          /* @__PURE__ */ l("div", { className: "hidden md:block", children: /* @__PURE__ */ l(
            $e,
            {
              label: d.label,
              onClick: d.onClick,
              variant: d.variant ?? "outline",
              icon: d.icon
            },
            d.label
          ) }),
          /* @__PURE__ */ l("div", { className: "w-full md:hidden [&>*]:w-full", children: /* @__PURE__ */ l(
            $e,
            {
              label: d.label,
              onClick: d.onClick,
              variant: d.variant ?? "outline",
              icon: d.icon,
              size: "lg"
            },
            d.label
          ) })
        ] })),
        a && a.length > 0 && /* @__PURE__ */ S(we, { children: [
          /* @__PURE__ */ l("div", { className: "hidden md:block", children: /* @__PURE__ */ l(
            dr,
            {
              items: a.map((d) => ({
                label: d.label,
                icon: d.icon,
                onClick: d.onClick,
                critical: d.variant === "critical"
              }))
            }
          ) }),
          /* @__PURE__ */ l("div", { className: "w-full md:hidden", children: /* @__PURE__ */ l(
            F3,
            {
              items: a.map((d) => ({
                label: d.label,
                icon: d.icon,
                onClick: d.onClick,
                critical: d.variant === "critical"
              }))
            }
          ) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ l("div", { className: "flex hidden flex-wrap items-center gap-x-3 gap-y-1 md:block", children: c && /* @__PURE__ */ l(hm, { items: u }) })
  ] });
}
const AI = ({
  name: e,
  description: t,
  src: n,
  primaryAction: r,
  secondaryActions: o,
  otherActions: i,
  metadata: a,
  status: s
}) => /* @__PURE__ */ l(
  od,
  {
    title: e,
    description: t,
    avatar: {
      type: "company",
      name: e,
      src: n
    },
    primaryAction: r,
    secondaryActions: o,
    otherActions: i,
    metadata: a,
    status: s
  }
), _I = ({
  firstName: e,
  lastName: t,
  description: n,
  src: r,
  primaryAction: o,
  secondaryActions: i,
  otherActions: a,
  metadata: s,
  status: c
}) => /* @__PURE__ */ l(
  od,
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
    secondaryActions: i,
    otherActions: a,
    metadata: s,
    status: c
  }
), OI = ({
  title: e,
  description: t,
  primaryAction: n,
  secondaryActions: r,
  otherActions: o,
  status: i,
  metadata: a
}) => /* @__PURE__ */ l(
  od,
  {
    title: e,
    description: t,
    primaryAction: n,
    secondaryActions: r,
    otherActions: o,
    status: i,
    metadata: a
  }
), X3 = Ye(
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
function LI({ size: e, className: t }) {
  return /* @__PURE__ */ l(
    "div",
    {
      className: A(X3({ size: e, className: t })),
      "aria-live": "polite",
      "aria-busy": !0,
      children: /* @__PURE__ */ S(
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
              wt.circle,
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
const q3 = {
  info: og,
  warning: ag,
  critical: eg
}, id = Z(
  ({ text: e, level: t }, n) => (vr(e, { disallowEmpty: !0 }), /* @__PURE__ */ l(
    gr,
    {
      ref: n,
      className: A(
        "pl-0.5",
        {
          info: "bg-f1-background-info text-f1-foreground-info",
          warning: "bg-f1-background-warning text-f1-foreground-warning",
          critical: "bg-f1-background-critical text-f1-foreground-critical"
        }[t]
      ),
      left: /* @__PURE__ */ l(
        Vo,
        {
          icon: q3[t],
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
id.displayName = "AlertTag";
const Z3 = {
  positive: IT,
  negative: AT
}, Q3 = Z(
  ({ text: e, status: t }, n) => (vr(e, { disallowEmpty: !0 }), /* @__PURE__ */ l(
    gr,
    {
      ref: n,
      className: A(
        {
          positive: "bg-f1-background-positive text-f1-foreground-positive",
          neutral: "bg-f1-background-secondary text-f1-foreground-secondary",
          negative: "bg-f1-background-critical text-f1-foreground-critical"
        }[t]
      ),
      left: t === "neutral" ? null : /* @__PURE__ */ l(
        Vo,
        {
          icon: Z3[t],
          size: "sm",
          className: A(
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
Q3.displayName = "BalanceTag";
const vs = Z(
  ({ imageUrl: e, text: t, rounded: n = !1, onClick: r }, o) => (vr(t, { disallowEmpty: !0 }), /* @__PURE__ */ l(
    gr,
    {
      ref: o,
      className: A(
        "gap-1 border-[1px] border-solid border-f1-border-secondary py-[1px] pl-[1px]",
        n ? "rounded-full" : "rounded-[8px]"
      ),
      left: /* @__PURE__ */ l(
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
vs.displayName = "ImageTag";
const J3 = Z(
  ({ companyName: e, companyImageUrl: t, onClick: n }, r) => /* @__PURE__ */ l(
    vs,
    {
      ref: r,
      imageUrl: t,
      text: e,
      onClick: n
    }
  )
);
J3.displayName = "CompanyTag";
const e4 = Z(
  ({ text: e, color: t }, n) => {
    vr(e, { disallowEmpty: !0 });
    const r = W3[t][50];
    return /* @__PURE__ */ l(
      gr,
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
e4.displayName = "DotTag";
const t4 = Z(
  ({ name: e, avatarUrl: t, onClick: n }, r) => /* @__PURE__ */ l(
    vs,
    {
      ref: r,
      imageUrl: t,
      text: e,
      onClick: n,
      rounded: !0
    }
  )
);
t4.displayName = "PersonTag";
const n4 = Z(
  ({ teamName: e, teamImageUrl: t, onClick: n }, r) => /* @__PURE__ */ l(
    vs,
    {
      ref: r,
      imageUrl: t,
      text: e,
      onClick: n
    }
  )
);
n4.displayName = "TeamTag";
const M1 = St(void 0);
function gs() {
  const e = Oe(M1);
  return e === void 0 ? {
    isSmallScreen: !1,
    prevSidebarState: null,
    sidebarState: "locked",
    toggleSidebar: () => {
    }
  } : e;
}
function r4({ children: e }) {
  const { currentPath: t } = Nc(), n = Zw("(max-width: 900px)", {
    initializeWithValue: !0
  }), [r, o] = Te(!0), [i, a] = Te(!1), [s, c] = Te(
    null
  ), u = zt(() => {
    n && a(!i), o(!r);
  }, [n, i, r, o, a]), d = zt(
    (h) => {
      n || (h.clientX < 32 && a(!0), h.clientX > 280 && a(!1));
    },
    [n, a]
  ), f = Et(() => n ? i ? "unlocked" : "hidden" : !r && !i ? "hidden" : !r && i ? "unlocked" : "locked", [n, i, r]);
  return We(() => {
    a(!1);
  }, [t]), We(() => () => {
    c(f);
  }, [f]), /* @__PURE__ */ l(
    M1.Provider,
    {
      value: {
        isSmallScreen: n,
        sidebarState: f,
        toggleSidebar: u,
        prevSidebarState: s
      },
      children: /* @__PURE__ */ l("div", { onPointerMove: d, className: "h-screen w-screen", children: e })
    }
  );
}
function II({
  children: e,
  sidebar: t,
  banner: n
}) {
  return /* @__PURE__ */ l(r4, { children: /* @__PURE__ */ l(i4, { sidebar: t, banner: n, children: e }) });
}
const o4 = ({ contentId: e }) => /* @__PURE__ */ l(
  "a",
  {
    href: `#${e}`,
    className: kt(
      "absolute z-50 -translate-y-full translate-x-4 rounded-md bg-f1-background px-4 py-2.5 text-base font-medium text-f1-foreground no-underline transition-transform duration-200 focus-visible:translate-y-4"
    ),
    children: "Skip to content"
  }
);
function i4({
  children: e,
  sidebar: t,
  banner: n
}) {
  const { sidebarState: r, toggleSidebar: o, isSmallScreen: i } = gs(), a = Kr();
  return /* @__PURE__ */ l(we, { children: /* @__PURE__ */ l(
    Qw,
    {
      reducedMotion: a ? "always" : "never",
      transition: {
        ease: [0.25, 0.1, 0.25, 1],
        duration: a ? 0 : 0.2
      },
      children: /* @__PURE__ */ S("div", { className: "grid h-screen grid-cols-1 grid-rows-[auto_minmax(0,1fr)] items-stretch", children: [
        /* @__PURE__ */ l("div", { className: "col-[1/-1]", children: n }),
        /* @__PURE__ */ S("div", { className: "relative isolate flex h-full", children: [
          /* @__PURE__ */ l(ii, { children: r === "unlocked" && /* @__PURE__ */ l(
            wt.div,
            {
              className: A("fixed inset-0 z-[5] bg-f1-background-bold", {
                hidden: !i
              }),
              initial: { opacity: 0 },
              animate: { opacity: 0.1 },
              exit: { opacity: 0 },
              transition: { duration: a ? 0 : 0.2 },
              onClick: o
            }
          ) }),
          /* @__PURE__ */ S(
            "div",
            {
              className: A(
                { "transition-all": !a },
                r === "locked" ? "w-[240px] shrink-0 pl-3" : "w-0"
              ),
              ref: (s) => {
                r === "hidden" ? s == null || s.setAttribute("inert", "") : s == null || s.removeAttribute("inert");
              },
              children: [
                /* @__PURE__ */ l(o4, { contentId: "content" }),
                t
              ]
            }
          ),
          /* @__PURE__ */ l(
            wt.main,
            {
              id: "content",
              className: A(
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
  ) });
}
function a4(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function mm(e) {
  return a4(e) || Array.isArray(e);
}
function s4() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
function ad(e, t) {
  const n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length) return !1;
  const o = JSON.stringify(Object.keys(e.breakpoints || {})), i = JSON.stringify(Object.keys(t.breakpoints || {}));
  return o !== i ? !1 : n.every((a) => {
    const s = e[a], c = t[a];
    return typeof s == "function" ? `${s}` == `${c}` : !mm(s) || !mm(c) ? s === c : ad(s, c);
  });
}
function pm(e) {
  return e.concat().sort((t, n) => t.name > n.name ? 1 : -1).map((t) => t.options);
}
function l4(e, t) {
  if (e.length !== t.length) return !1;
  const n = pm(e), r = pm(t);
  return n.every((o, i) => {
    const a = r[i];
    return ad(o, a);
  });
}
function sd(e) {
  return typeof e == "number";
}
function cc(e) {
  return typeof e == "string";
}
function ys(e) {
  return typeof e == "boolean";
}
function vm(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function He(e) {
  return Math.abs(e);
}
function ld(e) {
  return Math.sign(e);
}
function Lo(e, t) {
  return He(e - t);
}
function c4(e, t) {
  if (e === 0 || t === 0 || He(e) <= He(t)) return 0;
  const n = Lo(He(e), He(t));
  return He(n / e);
}
function u4(e) {
  return Math.round(e * 100) / 100;
}
function Zo(e) {
  return Qo(e).map(Number);
}
function Ht(e) {
  return e[gi(e)];
}
function gi(e) {
  return Math.max(0, e.length - 1);
}
function cd(e, t) {
  return t === gi(e);
}
function gm(e, t = 0) {
  return Array.from(Array(e), (n, r) => t + r);
}
function Qo(e) {
  return Object.keys(e);
}
function E1(e, t) {
  return [e, t].reduce((n, r) => (Qo(r).forEach((o) => {
    const i = n[o], a = r[o], s = vm(i) && vm(a);
    n[o] = s ? E1(i, a) : a;
  }), n), {});
}
function uc(e, t) {
  return typeof t.MouseEvent < "u" && e instanceof t.MouseEvent;
}
function d4(e, t) {
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
    return cc(e) ? n[e](c) : e(t, c, u);
  }
  return {
    measure: a
  };
}
function Jo() {
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
function f4(e, t, n, r) {
  const o = Jo(), i = 1e3 / 60;
  let a = null, s = 0, c = 0;
  function u() {
    o.add(e, "visibilitychange", () => {
      e.hidden && g();
    });
  }
  function d() {
    v(), o.clear();
  }
  function f(y) {
    if (!c) return;
    a || (a = y);
    const b = y - a;
    for (a = y, s += b; s >= i; )
      n(), s -= i;
    const w = s / i;
    r(w), c && (c = t.requestAnimationFrame(f));
  }
  function h() {
    c || (c = t.requestAnimationFrame(f));
  }
  function v() {
    t.cancelAnimationFrame(c), a = null, s = 0, c = 0;
  }
  function g() {
    a = null, s = 0;
  }
  return {
    init: u,
    destroy: d,
    start: h,
    stop: v,
    update: n,
    render: r
  };
}
function h4(e, t) {
  const n = t === "rtl", r = e === "y", o = r ? "y" : "x", i = r ? "x" : "y", a = !r && n ? -1 : 1, s = d(), c = f();
  function u(g) {
    const {
      height: p,
      width: y
    } = g;
    return r ? p : y;
  }
  function d() {
    return r ? "top" : n ? "right" : "left";
  }
  function f() {
    return r ? "bottom" : n ? "left" : "right";
  }
  function h(g) {
    return g * a;
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
function fr(e = 0, t = 0) {
  const n = He(e - t);
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
function T1(e, t, n) {
  const {
    constrain: r
  } = fr(0, e), o = e + 1;
  let i = a(t);
  function a(h) {
    return n ? He((o + h) % o) : r(h);
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
    return T1(e, s(), n);
  }
  const f = {
    get: s,
    set: c,
    add: u,
    clone: d
  };
  return f;
}
function m4(e, t, n, r, o, i, a, s, c, u, d, f, h, v, g, p, y, b, w) {
  const {
    cross: x,
    direction: C
  } = e, M = ["INPUT", "SELECT", "TEXTAREA"], I = {
    passive: !1
  }, T = Jo(), k = Jo(), R = fr(50, 225).constrain(v.measure(20)), j = {
    mouse: 300,
    touch: 400
  }, X = {
    mouse: 500,
    touch: 600
  }, G = g ? 43 : 25;
  let _ = !1, F = 0, V = 0, z = !1, $ = !1, W = !1, K = !1;
  function E(U) {
    if (!w) return;
    function fe(ye) {
      (ys(w) || w(U, ye)) && ce(ye);
    }
    const H = t;
    T.add(H, "dragstart", (ye) => ye.preventDefault(), I).add(H, "touchmove", () => {
    }, I).add(H, "touchend", () => {
    }).add(H, "touchstart", fe).add(H, "mousedown", fe).add(H, "touchcancel", q).add(H, "contextmenu", q).add(H, "click", se, !0);
  }
  function P() {
    T.clear(), k.clear();
  }
  function ee() {
    const U = K ? n : t;
    k.add(U, "touchmove", B, I).add(U, "touchend", q).add(U, "mousemove", B, I).add(U, "mouseup", q);
  }
  function oe(U) {
    const fe = U.nodeName || "";
    return M.includes(fe);
  }
  function ie() {
    return (g ? X : j)[K ? "mouse" : "touch"];
  }
  function de(U, fe) {
    const H = f.add(ld(U) * -1), ye = d.byDistance(U, !g).distance;
    return g || He(U) < R ? ye : y && fe ? ye * 0.5 : d.byIndex(H.get(), 0).distance;
  }
  function ce(U) {
    const fe = uc(U, r);
    K = fe, W = g && fe && !U.buttons && _, _ = Lo(o.get(), a.get()) >= 2, !(fe && U.button !== 0) && (oe(U.target) || (z = !0, i.pointerDown(U), u.useFriction(0).useDuration(0), o.set(a), ee(), F = i.readPoint(U), V = i.readPoint(U, x), h.emit("pointerDown")));
  }
  function B(U) {
    if (!uc(U, r) && U.touches.length >= 2) return q(U);
    const H = i.readPoint(U), ye = i.readPoint(U, x), Pe = Lo(H, F), Me = Lo(ye, V);
    if (!$ && !K && (!U.cancelable || ($ = Pe > Me, !$)))
      return q(U);
    const N = i.pointerMove(U);
    Pe > p && (W = !0), u.useFriction(0.3).useDuration(0.75), s.start(), o.add(C(N)), U.preventDefault();
  }
  function q(U) {
    const H = d.byDistance(0, !1).index !== f.get(), ye = i.pointerUp(U) * ie(), Pe = de(C(ye), H), Me = c4(ye, Pe), N = G - 10 * Me, D = b + Me / 50;
    $ = !1, z = !1, k.clear(), u.useDuration(N).useFriction(D), c.distance(Pe, !g), K = !1, h.emit("pointerUp");
  }
  function se(U) {
    W && (U.stopPropagation(), U.preventDefault(), W = !1);
  }
  function ae() {
    return z;
  }
  return {
    init: E,
    destroy: P,
    pointerDown: ae
  };
}
function p4(e, t) {
  let r, o;
  function i(f) {
    return f.timeStamp;
  }
  function a(f, h) {
    const g = `client${(h || e.scroll) === "x" ? "X" : "Y"}`;
    return (uc(f, t) ? f : f.touches[0])[g];
  }
  function s(f) {
    return r = f, o = f, a(f);
  }
  function c(f) {
    const h = a(f) - a(o), v = i(f) - i(r) > 170;
    return o = f, v && (r = f), h;
  }
  function u(f) {
    if (!r || !o) return 0;
    const h = a(o) - a(r), v = i(f) - i(r), g = i(f) - i(o) > 170, p = h / v;
    return v && !g && He(p) > 0.1 ? p : 0;
  }
  return {
    pointerDown: s,
    pointerMove: c,
    pointerUp: u,
    readPoint: a
  };
}
function v4() {
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
function g4(e) {
  function t(r) {
    return e * (r / 100);
  }
  return {
    measure: t
  };
}
function y4(e, t, n, r, o, i, a) {
  const s = [e].concat(r);
  let c, u, d = [], f = !1;
  function h(y) {
    return o.measureSize(a.measure(y));
  }
  function v(y) {
    if (!i) return;
    u = h(e), d = r.map(h);
    function b(w) {
      for (const x of w) {
        if (f) return;
        const C = x.target === e, M = r.indexOf(x.target), I = C ? u : d[M], T = h(C ? e : r[M]);
        if (He(T - I) >= 0.5) {
          y.reInit(), t.emit("resize");
          break;
        }
      }
    }
    c = new ResizeObserver((w) => {
      (ys(i) || i(y, w)) && b(w);
    }), n.requestAnimationFrame(() => {
      s.forEach((w) => c.observe(w));
    });
  }
  function g() {
    f = !0, c && c.disconnect();
  }
  return {
    init: v,
    destroy: g
  };
}
function b4(e, t, n, r, o, i) {
  let a = 0, s = 0, c = o, u = i, d = e.get(), f = 0;
  function h() {
    const I = r.get() - e.get(), T = !c;
    let k = 0;
    return T ? (a = 0, n.set(r), e.set(r), k = I) : (n.set(e), a += I / c, a *= u, d += a, e.add(a), k = d - f), s = ld(k), f = d, M;
  }
  function v() {
    const I = r.get() - t.get();
    return He(I) < 1e-3;
  }
  function g() {
    return c;
  }
  function p() {
    return s;
  }
  function y() {
    return a;
  }
  function b() {
    return x(o);
  }
  function w() {
    return C(i);
  }
  function x(I) {
    return c = I, M;
  }
  function C(I) {
    return u = I, M;
  }
  const M = {
    direction: p,
    duration: g,
    velocity: y,
    seek: h,
    settled: v,
    useBaseFriction: w,
    useBaseDuration: b,
    useFriction: C,
    useDuration: x
  };
  return M;
}
function w4(e, t, n, r, o) {
  const i = o.measure(10), a = o.measure(50), s = fr(0.1, 0.99);
  let c = !1;
  function u() {
    return !(c || !e.reachedAny(n.get()) || !e.reachedAny(t.get()));
  }
  function d(v) {
    if (!u()) return;
    const g = e.reachedMin(t.get()) ? "min" : "max", p = He(e[g] - t.get()), y = n.get() - t.get(), b = s.constrain(p / a);
    n.subtract(y * b), !v && He(y) < i && (n.set(e.constrain(n.get())), r.useDuration(25).useBaseFriction());
  }
  function f(v) {
    c = !v;
  }
  return {
    shouldConstrain: u,
    constrain: d,
    toggleActive: f
  };
}
function x4(e, t, n, r, o) {
  const i = fr(-t + e, 0), a = f(), s = d(), c = h();
  function u(g, p) {
    return Lo(g, p) < 1;
  }
  function d() {
    const g = a[0], p = Ht(a), y = a.lastIndexOf(g), b = a.indexOf(p) + 1;
    return fr(y, b);
  }
  function f() {
    return n.map((g, p) => {
      const {
        min: y,
        max: b
      } = i, w = i.constrain(g), x = !p, C = cd(n, p);
      return x ? b : C || u(y, w) ? y : u(b, w) ? b : w;
    }).map((g) => parseFloat(g.toFixed(3)));
  }
  function h() {
    if (t <= e + o) return [i.max];
    if (r === "keepSnaps") return a;
    const {
      min: g,
      max: p
    } = s;
    return a.slice(g, p);
  }
  return {
    snapsContained: c,
    scrollContainLimit: s
  };
}
function C4(e, t, n) {
  const r = t[0], o = n ? r - e : Ht(t);
  return {
    limit: fr(o, r)
  };
}
function S4(e, t, n, r) {
  const i = t.min + 0.1, a = t.max + 0.1, {
    reachedMin: s,
    reachedMax: c
  } = fr(i, a);
  function u(h) {
    return h === 1 ? c(n.get()) : h === -1 ? s(n.get()) : !1;
  }
  function d(h) {
    if (!u(h)) return;
    const v = e * (h * -1);
    r.forEach((g) => g.add(v));
  }
  return {
    loop: d
  };
}
function N4(e) {
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
function P4(e, t, n, r, o) {
  const {
    startEdge: i,
    endEdge: a
  } = e, {
    groupSlides: s
  } = o, c = f().map(t.measure), u = h(), d = v();
  function f() {
    return s(r).map((p) => Ht(p)[a] - p[0][i]).map(He);
  }
  function h() {
    return r.map((p) => n[i] - p[i]).map((p) => -He(p));
  }
  function v() {
    return s(u).map((p) => p[0]).map((p, y) => p + c[y]);
  }
  return {
    snaps: u,
    snapsAligned: d
  };
}
function M4(e, t, n, r, o, i) {
  const {
    groupSlides: a
  } = o, {
    min: s,
    max: c
  } = r, u = d();
  function d() {
    const h = a(i), v = !e || t === "keepSnaps";
    return n.length === 1 ? [i] : v ? h : h.slice(s, c).map((g, p, y) => {
      const b = !p, w = cd(y, p);
      if (b) {
        const x = Ht(y[0]) + 1;
        return gm(x);
      }
      if (w) {
        const x = gi(i) - Ht(y)[0] + 1;
        return gm(x, Ht(y)[0]);
      }
      return g;
    });
  }
  return {
    slideRegistry: u
  };
}
function E4(e, t, n, r, o) {
  const {
    reachedAny: i,
    removeOffset: a,
    constrain: s
  } = r;
  function c(g) {
    return g.concat().sort((p, y) => He(p) - He(y))[0];
  }
  function u(g) {
    const p = e ? a(g) : s(g), y = t.map((w, x) => ({
      diff: d(w - p, 0),
      index: x
    })).sort((w, x) => He(w.diff) - He(x.diff)), {
      index: b
    } = y[0];
    return {
      index: b,
      distance: p
    };
  }
  function d(g, p) {
    const y = [g, g + n, g - n];
    if (!e) return g;
    if (!p) return c(y);
    const b = y.filter((w) => ld(w) === p);
    return b.length ? c(b) : Ht(y) - n;
  }
  function f(g, p) {
    const y = t[g] - o.get(), b = d(y, p);
    return {
      index: g,
      distance: b
    };
  }
  function h(g, p) {
    const y = o.get() + g, {
      index: b,
      distance: w
    } = u(y), x = !e && i(y);
    if (!p || x) return {
      index: b,
      distance: g
    };
    const C = t[b] - w, M = g + d(C, 0);
    return {
      index: b,
      distance: M
    };
  }
  return {
    byDistance: h,
    byIndex: f,
    shortcut: d
  };
}
function T4(e, t, n, r, o, i, a) {
  function s(f) {
    const h = f.distance, v = f.index !== t.get();
    i.add(h), h && (r.duration() ? e.start() : (e.update(), e.render(1), e.update())), v && (n.set(t.get()), t.set(f.index), a.emit("select"));
  }
  function c(f, h) {
    const v = o.byDistance(f, h);
    s(v);
  }
  function u(f, h) {
    const v = t.clone().set(f), g = o.byIndex(v.get(), h);
    s(g);
  }
  return {
    distance: c,
    index: u
  };
}
function k4(e, t, n, r, o, i, a, s) {
  const c = {
    passive: !0,
    capture: !0
  };
  let u = 0;
  function d(v) {
    if (!s) return;
    function g(p) {
      if ((/* @__PURE__ */ new Date()).getTime() - u > 10) return;
      a.emit("slideFocusStart"), e.scrollLeft = 0;
      const w = n.findIndex((x) => x.includes(p));
      sd(w) && (o.useDuration(0), r.index(w, 0), a.emit("slideFocus"));
    }
    i.add(document, "keydown", f, !1), t.forEach((p, y) => {
      i.add(p, "focus", (b) => {
        (ys(s) || s(v, b)) && g(y);
      }, c);
    });
  }
  function f(v) {
    v.code === "Tab" && (u = (/* @__PURE__ */ new Date()).getTime());
  }
  return {
    init: d
  };
}
function No(e) {
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
    return sd(c) ? c : c.get();
  }
  return {
    get: n,
    set: r,
    add: o,
    subtract: i
  };
}
function k1(e, t) {
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
    const v = u4(e.direction(h));
    v !== o && (r.transform = n(v), o = v);
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
function R4(e, t, n, r, o, i, a, s, c) {
  const d = Zo(o), f = Zo(o).reverse(), h = b().concat(w());
  function v(T, k) {
    return T.reduce((R, j) => R - o[j], k);
  }
  function g(T, k) {
    return T.reduce((R, j) => v(R, k) > 0 ? R.concat([j]) : R, []);
  }
  function p(T) {
    return i.map((k, R) => ({
      start: k - r[R] + 0.5 + T,
      end: k + t - 0.5 + T
    }));
  }
  function y(T, k, R) {
    const j = p(k);
    return T.map((X) => {
      const G = R ? 0 : -n, _ = R ? n : 0, F = R ? "end" : "start", V = j[X][F];
      return {
        index: X,
        loopPoint: V,
        slideLocation: No(-1),
        translate: k1(e, c[X]),
        target: () => s.get() > V ? G : _
      };
    });
  }
  function b() {
    const T = a[0], k = g(f, T);
    return y(k, n, !1);
  }
  function w() {
    const T = t - a[0] - 1, k = g(d, T);
    return y(k, -n, !0);
  }
  function x() {
    return h.every(({
      index: T
    }) => {
      const k = d.filter((R) => R !== T);
      return v(k, t) <= 0.1;
    });
  }
  function C() {
    h.forEach((T) => {
      const {
        target: k,
        translate: R,
        slideLocation: j
      } = T, X = k();
      X !== j.get() && (R.to(X), j.set(X));
    });
  }
  function M() {
    h.forEach((T) => T.translate.clear());
  }
  return {
    canLoop: x,
    clear: M,
    loop: C,
    loopPoints: h
  };
}
function D4(e, t, n) {
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
      o || (ys(n) || n(c, d)) && u(d);
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
function A4(e, t, n, r) {
  const o = {};
  let i = null, a = null, s, c = !1;
  function u() {
    s = new IntersectionObserver((g) => {
      c || (g.forEach((p) => {
        const y = t.indexOf(p.target);
        o[y] = p;
      }), i = null, a = null, n.emit("slidesInView"));
    }, {
      root: e.parentElement,
      threshold: r
    }), t.forEach((g) => s.observe(g));
  }
  function d() {
    s && s.disconnect(), c = !0;
  }
  function f(g) {
    return Qo(o).reduce((p, y) => {
      const b = parseInt(y), {
        isIntersecting: w
      } = o[b];
      return (g && w || !g && !w) && p.push(b), p;
    }, []);
  }
  function h(g = !0) {
    if (g && i) return i;
    if (!g && a) return a;
    const p = f(g);
    return g && (i = p), g || (a = p), p;
  }
  return {
    init: u,
    destroy: d,
    get: h
  };
}
function _4(e, t, n, r, o, i) {
  const {
    measureSize: a,
    startEdge: s,
    endEdge: c
  } = e, u = n[0] && o, d = g(), f = p(), h = n.map(a), v = y();
  function g() {
    if (!u) return 0;
    const w = n[0];
    return He(t[s] - w[s]);
  }
  function p() {
    if (!u) return 0;
    const w = i.getComputedStyle(Ht(r));
    return parseFloat(w.getPropertyValue(`margin-${c}`));
  }
  function y() {
    return n.map((w, x, C) => {
      const M = !x, I = cd(C, x);
      return M ? h[x] + d : I ? h[x] + f : C[x + 1][s] - w[s];
    }).map(He);
  }
  return {
    slideSizes: h,
    slideSizesWithGaps: v,
    startGap: d,
    endGap: f
  };
}
function O4(e, t, n, r, o, i, a, s, c) {
  const {
    startEdge: u,
    endEdge: d,
    direction: f
  } = e, h = sd(n);
  function v(b, w) {
    return Zo(b).filter((x) => x % w === 0).map((x) => b.slice(x, x + w));
  }
  function g(b) {
    return b.length ? Zo(b).reduce((w, x, C) => {
      const M = Ht(w) || 0, I = M === 0, T = x === gi(b), k = o[u] - i[M][u], R = o[u] - i[x][d], j = !r && I ? f(a) : 0, X = !r && T ? f(s) : 0, G = He(R - X - (k + j));
      return C && G > t + c && w.push(x), T && w.push(b.length), w;
    }, []).map((w, x, C) => {
      const M = Math.max(C[x - 1] || 0);
      return b.slice(M, w);
    }) : [];
  }
  function p(b) {
    return h ? v(b, n) : g(b);
  }
  return {
    groupSlides: p
  };
}
function L4(e, t, n, r, o, i, a) {
  const {
    align: s,
    axis: c,
    direction: u,
    startIndex: d,
    loop: f,
    duration: h,
    dragFree: v,
    dragThreshold: g,
    inViewThreshold: p,
    slidesToScroll: y,
    skipSnaps: b,
    containScroll: w,
    watchResize: x,
    watchSlides: C,
    watchDrag: M,
    watchFocus: I
  } = i, T = 2, k = v4(), R = k.measure(t), j = n.map(k.measure), X = h4(c, u), G = X.measureSize(R), _ = g4(G), F = d4(s, G), V = !f && !!w, z = f || !!w, {
    slideSizes: $,
    slideSizesWithGaps: W,
    startGap: K,
    endGap: E
  } = _4(X, R, j, n, z, o), P = O4(X, G, y, f, R, j, K, E, T), {
    snaps: ee,
    snapsAligned: oe
  } = P4(X, F, R, j, P), ie = -Ht(ee) + Ht(W), {
    snapsContained: de,
    scrollContainLimit: ce
  } = x4(G, ie, oe, w, T), B = V ? de : oe, {
    limit: q
  } = C4(ie, B, f), se = T1(gi(B), d, f), ae = se.clone(), Q = Zo(n), U = ({
    dragHandler: it,
    scrollBody: Nt,
    scrollBounds: Pt,
    options: {
      loop: Rt
    }
  }) => {
    Rt || Pt.constrain(it.pointerDown()), Nt.seek();
  }, fe = ({
    scrollBody: it,
    translate: Nt,
    location: Pt,
    offsetLocation: Rt,
    previousLocation: oo,
    scrollLooper: yr,
    slideLooper: Ps,
    dragHandler: Ms,
    animation: Es,
    eventHandler: he,
    scrollBounds: Ne,
    options: {
      loop: ke
    }
  }, xe) => {
    const Be = it.settled(), at = !Ne.shouldConstrain(), et = ke ? Be : Be && at;
    et && !Ms.pointerDown() && (Es.stop(), he.emit("settle")), et || he.emit("scroll");
    const qt = Pt.get() * xe + oo.get() * (1 - xe);
    Rt.set(qt), ke && (yr.loop(it.direction()), Ps.loop()), Nt.to(Rt.get());
  }, H = f4(r, o, () => U(Xt), (it) => fe(Xt, it)), ye = 0.68, Pe = B[se.get()], Me = No(Pe), N = No(Pe), D = No(Pe), O = No(Pe), te = b4(Me, D, N, O, h, ye), J = E4(f, B, ie, q, O), Y = T4(H, se, ae, te, J, O, a), le = N4(q), be = Jo(), Ie = A4(t, n, a, p), {
    slideRegistry: Fe
  } = M4(V, w, B, ce, P, Q), ot = k4(e, n, Fe, Y, te, be, a, I), Xt = {
    ownerDocument: r,
    ownerWindow: o,
    eventHandler: a,
    containerRect: R,
    slideRects: j,
    animation: H,
    axis: X,
    dragHandler: m4(X, e, r, o, O, p4(X, o), Me, H, Y, te, J, se, a, _, v, g, b, ye, M),
    eventStore: be,
    percentOfView: _,
    index: se,
    indexPrevious: ae,
    limit: q,
    location: Me,
    offsetLocation: D,
    previousLocation: N,
    options: i,
    resizeHandler: y4(t, a, o, n, X, x, k),
    scrollBody: te,
    scrollBounds: w4(q, D, O, te, _),
    scrollLooper: S4(ie, q, D, [Me, D, N, O]),
    scrollProgress: le,
    scrollSnapList: B.map(le.get),
    scrollSnaps: B,
    scrollTarget: J,
    scrollTo: Y,
    slideLooper: R4(X, G, ie, $, W, ee, B, D, n),
    slideFocus: ot,
    slidesHandler: D4(t, a, C),
    slidesInView: Ie,
    slideIndexes: Q,
    slideRegistry: Fe,
    slidesToScroll: P,
    target: O,
    translate: k1(X, t)
  };
  return Xt;
}
function I4() {
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
const F4 = {
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
function V4(e) {
  function t(i, a) {
    return E1(i, a || {});
  }
  function n(i) {
    const a = i.breakpoints || {}, s = Qo(a).filter((c) => e.matchMedia(c).matches).map((c) => a[c]).reduce((c, u) => t(c, u), {});
    return t(i, s);
  }
  function r(i) {
    return i.map((a) => Qo(a.breakpoints || {})).reduce((a, s) => a.concat(s), []).map(e.matchMedia);
  }
  return {
    mergeOptions: t,
    optionsAtMedia: n,
    optionsMediaQueries: r
  };
}
function $4(e) {
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
function Ea(e, t, n) {
  const r = e.ownerDocument, o = r.defaultView, i = V4(o), a = $4(i), s = Jo(), c = I4(), {
    mergeOptions: u,
    optionsAtMedia: d,
    optionsMediaQueries: f
  } = i, {
    on: h,
    off: v,
    emit: g
  } = c, p = X;
  let y = !1, b, w = u(F4, Ea.globalOptions), x = u(w), C = [], M, I, T;
  function k() {
    const {
      container: Q,
      slides: U
    } = x;
    I = (cc(Q) ? e.querySelector(Q) : Q) || e.children[0];
    const H = cc(U) ? I.querySelectorAll(U) : U;
    T = [].slice.call(H || I.children);
  }
  function R(Q) {
    const U = L4(e, I, T, r, o, Q, c);
    if (Q.loop && !U.slideLooper.canLoop()) {
      const fe = Object.assign({}, Q, {
        loop: !1
      });
      return R(fe);
    }
    return U;
  }
  function j(Q, U) {
    y || (w = u(w, Q), x = d(w), C = U || C, k(), b = R(x), f([w, ...C.map(({
      options: fe
    }) => fe)]).forEach((fe) => s.add(fe, "change", X)), x.active && (b.translate.to(b.location.get()), b.animation.init(), b.slidesInView.init(), b.slideFocus.init(ae), b.eventHandler.init(ae), b.resizeHandler.init(ae), b.slidesHandler.init(ae), b.options.loop && b.slideLooper.loop(), I.offsetParent && T.length && b.dragHandler.init(ae), M = a.init(ae, C)));
  }
  function X(Q, U) {
    const fe = P();
    G(), j(u({
      startIndex: fe
    }, Q), U), c.emit("reInit");
  }
  function G() {
    b.dragHandler.destroy(), b.eventStore.clear(), b.translate.clear(), b.slideLooper.clear(), b.resizeHandler.destroy(), b.slidesHandler.destroy(), b.slidesInView.destroy(), b.animation.destroy(), a.destroy(), s.clear();
  }
  function _() {
    y || (y = !0, s.clear(), G(), c.emit("destroy"), c.clear());
  }
  function F(Q, U, fe) {
    !x.active || y || (b.scrollBody.useBaseFriction().useDuration(U === !0 ? 0 : x.duration), b.scrollTo.index(Q, fe || 0));
  }
  function V(Q) {
    const U = b.index.add(1).get();
    F(U, Q, -1);
  }
  function z(Q) {
    const U = b.index.add(-1).get();
    F(U, Q, 1);
  }
  function $() {
    return b.index.add(1).get() !== P();
  }
  function W() {
    return b.index.add(-1).get() !== P();
  }
  function K() {
    return b.scrollSnapList;
  }
  function E() {
    return b.scrollProgress.get(b.location.get());
  }
  function P() {
    return b.index.get();
  }
  function ee() {
    return b.indexPrevious.get();
  }
  function oe() {
    return b.slidesInView.get();
  }
  function ie() {
    return b.slidesInView.get(!1);
  }
  function de() {
    return M;
  }
  function ce() {
    return b;
  }
  function B() {
    return e;
  }
  function q() {
    return I;
  }
  function se() {
    return T;
  }
  const ae = {
    canScrollNext: $,
    canScrollPrev: W,
    containerNode: q,
    internalEngine: ce,
    destroy: _,
    off: v,
    on: h,
    emit: g,
    plugins: de,
    previousScrollSnap: ee,
    reInit: p,
    rootNode: B,
    scrollNext: V,
    scrollPrev: z,
    scrollProgress: E,
    scrollSnapList: K,
    scrollTo: F,
    selectedScrollSnap: P,
    slideNodes: se,
    slidesInView: oe,
    slidesNotInView: ie
  };
  return j(t, n), setTimeout(() => c.emit("init"), 0), ae;
}
Ea.globalOptions = void 0;
function ud(e = {}, t = []) {
  const n = Ge(e), r = Ge(t), [o, i] = Te(), [a, s] = Te(), c = zt(() => {
    o && o.reInit(n.current, r.current);
  }, [o]);
  return We(() => {
    ad(n.current, e) || (n.current = e, c());
  }, [e, c]), We(() => {
    l4(r.current, t) || (r.current = t, c());
  }, [t, c]), We(() => {
    if (s4() && a) {
      Ea.globalOptions = ud.globalOptions;
      const u = Ea(a, n.current, r.current);
      return i(u), () => u.destroy();
    } else
      i(void 0);
  }, [a, i]), [s, o];
}
ud.globalOptions = void 0;
const R1 = m.createContext(null);
function yi() {
  const e = m.useContext(R1);
  if (!e)
    throw new Error("useCarousel must be used within a <Carousel />");
  return e;
}
const D1 = m.forwardRef(
  ({
    orientation: e = "horizontal",
    opts: t,
    setApi: n,
    plugins: r,
    className: o,
    children: i,
    ...a
  }, s) => {
    const [c, u] = ud(
      {
        ...t,
        axis: e === "horizontal" ? "x" : "y"
      },
      r
    ), [d, f] = m.useState(!1), [h, v] = m.useState(!1), g = m.useCallback((w) => {
      w && (f(w.canScrollPrev()), v(w.canScrollNext()));
    }, []), p = m.useCallback(() => {
      u == null || u.scrollPrev();
    }, [u]), y = m.useCallback(() => {
      u == null || u.scrollNext();
    }, [u]), b = m.useCallback(
      (w) => {
        w.key === "ArrowLeft" ? (w.preventDefault(), p()) : w.key === "ArrowRight" && (w.preventDefault(), y());
      },
      [p, y]
    );
    return m.useEffect(() => {
      !u || !n || n(u);
    }, [u, n]), m.useEffect(() => {
      if (u)
        return g(u), u.on("reInit", g), u.on("select", g), () => {
          u == null || u.off("select", g);
        };
    }, [u, g]), /* @__PURE__ */ l(
      R1.Provider,
      {
        value: {
          carouselRef: c,
          api: u,
          opts: t,
          orientation: e || ((t == null ? void 0 : t.axis) === "y" ? "vertical" : "horizontal"),
          scrollPrev: p,
          scrollNext: y,
          canScrollPrev: d,
          canScrollNext: h
        },
        children: /* @__PURE__ */ l(
          "div",
          {
            ref: s,
            onKeyDownCapture: b,
            className: A("relative", o),
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
D1.displayName = "Carousel";
const A1 = m.forwardRef(({ className: e, ...t }, n) => {
  const { carouselRef: r, orientation: o } = yi();
  return /* @__PURE__ */ l("div", { ref: r, className: "overflow-hidden", children: /* @__PURE__ */ l(
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
A1.displayName = "CarouselContent";
const _1 = m.forwardRef(({ className: e, ...t }, n) => {
  const { orientation: r } = yi();
  return /* @__PURE__ */ l(
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
_1.displayName = "CarouselItem";
const O1 = m.forwardRef(({ className: e, variant: t = "outline", ...n }, r) => {
  const { orientation: o, scrollPrev: i, canScrollPrev: a } = yi();
  return /* @__PURE__ */ S(
    Fn,
    {
      ref: r,
      size: "sm",
      variant: t,
      round: !0,
      className: A(
        "absolute opacity-100 transition-all",
        !a && "disabled:opacity-0",
        o === "horizontal" ? "-left-3 top-1/2 -translate-y-1/2" : "-top-3 left-1/2 -translate-x-1/2 rotate-90",
        e
      ),
      disabled: !a,
      onClick: i,
      ...n,
      children: [
        /* @__PURE__ */ l(Ce, { size: "sm", icon: tg }),
        /* @__PURE__ */ l("span", { className: "sr-only", children: "Previous" })
      ]
    }
  );
});
O1.displayName = "CarouselPrevious";
const L1 = m.forwardRef(({ className: e, variant: t = "outline", ...n }, r) => {
  const { orientation: o, scrollNext: i, canScrollNext: a } = yi();
  return /* @__PURE__ */ S(
    Fn,
    {
      ref: r,
      size: "sm",
      variant: t,
      round: !0,
      className: A(
        "absolute opacity-100 transition-all",
        !a && "disabled:opacity-0",
        o === "horizontal" ? "-right-3 top-1/2 -translate-y-1/2" : "-bottom-3 left-1/2 -translate-x-1/2 rotate-90",
        e
      ),
      disabled: !a,
      onClick: i,
      ...n,
      children: [
        /* @__PURE__ */ l(Ce, { size: "sm", icon: ng }),
        /* @__PURE__ */ l("span", { className: "sr-only", children: "Next" })
      ]
    }
  );
});
L1.displayName = "CarouselNext";
const I1 = m.forwardRef((e, t) => {
  const { api: n } = yi(), [, r] = m.useState(!1), o = m.useCallback(() => {
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
      className: A("flex justify-center gap-2", e.className),
      children: Array.from({ length: i }, (s, c) => /* @__PURE__ */ l(
        Fn,
        {
          className: A("h-2 w-2 rounded-full p-0 transition-all", {
            "bg-f1-foreground-secondary hover:scale-110 hover:bg-f1-foreground-secondary": c === a,
            "bg-f1-background-secondary hover:scale-110 hover:bg-f1-background-secondary-hover": c !== a
          }),
          "aria-label": `Go to slide ${c + 1}`,
          onClick: () => n == null ? void 0 : n.scrollTo(c)
        },
        c
      ))
    }
  ) : /* @__PURE__ */ l(we, {});
});
I1.displayName = "CarouselDots";
const B4 = {
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
function W4(e, t) {
  const n = e.scrollSnapList();
  return typeof t == "number" ? n.map(() => t) : t(n, e);
}
function j4(e, t) {
  const n = e.rootNode();
  return t && t(n) || n;
}
function dd(e = {}) {
  let t, n, r, o, i = null, a = 0, s = !1, c = !1, u = !1, d = !1;
  function f(F, V) {
    n = F;
    const {
      mergeOptions: z,
      optionsAtMedia: $
    } = V, W = z(B4, dd.globalOptions), K = z(W, e);
    if (t = $(K), n.scrollSnapList().length <= 1) return;
    d = t.jump, r = !1, o = W4(n, t.delay);
    const {
      eventStore: E,
      ownerDocument: P
    } = n.internalEngine(), ee = !!n.internalEngine().options.watchDrag, oe = j4(n, t.rootNode);
    E.add(P, "visibilitychange", b), ee && n.on("pointerDown", x), ee && !t.stopOnInteraction && n.on("pointerUp", C), t.stopOnMouseEnter && E.add(oe, "mouseenter", M), t.stopOnMouseEnter && !t.stopOnInteraction && E.add(oe, "mouseleave", I), t.stopOnFocusIn && n.on("slideFocusStart", y), t.stopOnFocusIn && !t.stopOnInteraction && E.add(n.containerNode(), "focusout", p), t.playOnInit && !w() && p();
  }
  function h() {
    n.off("pointerDown", x).off("pointerUp", C).off("slideFocusStart", y), y(), r = !0, s = !1;
  }
  function v() {
    const {
      ownerWindow: F
    } = n.internalEngine();
    F.clearTimeout(a), a = F.setTimeout(X, o[n.selectedScrollSnap()]), i = (/* @__PURE__ */ new Date()).getTime(), n.emit("autoplay:timerset");
  }
  function g() {
    const {
      ownerWindow: F
    } = n.internalEngine();
    F.clearTimeout(a), a = 0, i = null, n.emit("autoplay:timerstopped");
  }
  function p() {
    r || (s || n.emit("autoplay:play"), v(), s = !0);
  }
  function y() {
    r || (s && n.emit("autoplay:stop"), g(), s = !1);
  }
  function b() {
    if (w())
      return u = s, y();
    u && p();
  }
  function w() {
    const {
      ownerDocument: F
    } = n.internalEngine();
    return F.visibilityState === "hidden";
  }
  function x() {
    c || y();
  }
  function C() {
    c || p();
  }
  function M() {
    c = !0, y();
  }
  function I() {
    c = !1, p();
  }
  function T(F) {
    typeof F < "u" && (d = F), p();
  }
  function k() {
    s && y();
  }
  function R() {
    s && p();
  }
  function j() {
    return s;
  }
  function X() {
    const {
      index: F
    } = n.internalEngine(), V = F.clone().add(1).get(), z = n.scrollSnapList().length - 1, $ = t.stopOnLastSnap && V === z;
    if (n.canScrollNext() ? n.scrollNext(d) : n.scrollTo(0, d), n.emit("autoplay:select"), $) return y();
    p();
  }
  function G() {
    if (!i) return null;
    const F = o[n.selectedScrollSnap()], V = (/* @__PURE__ */ new Date()).getTime() - i;
    return F - V;
  }
  return {
    name: "autoplay",
    options: e,
    init: f,
    destroy: h,
    play: T,
    stop: k,
    reset: R,
    isPlaying: j,
    timeUntilNext: G
  };
}
dd.globalOptions = void 0;
function ir() {
  return ir = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, ir.apply(this, arguments);
}
var U4 = 0.996, H4 = function(t, n) {
  return n === void 0 && (n = U4), t * n / (1 - n);
};
function z4(e) {
  return e[e.length - 1];
}
function G4(e) {
  return e.reduce(function(t, n) {
    return t + n;
  }) / e.length;
}
var Y4 = function(t, n, r) {
  return Math.min(Math.max(n, t), r);
};
function yl(e, t) {
  if (e.length !== t.length)
    throw new Error("vectors must be same length");
  return e.map(function(n, r) {
    return n + t[r];
  });
}
function ym(e) {
  return Math.max.apply(Math, e.map(Math.abs));
}
function zr(e) {
  return Object.freeze(e), Object.values(e).forEach(function(t) {
    t !== null && typeof t == "object" && !Object.isFrozen(t) && zr(t);
  }), e;
}
function K4() {
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
  return zr({
    on: t,
    off: n,
    dispatch: r
  });
}
function X4(e) {
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
  return zr({
    observe: n,
    unobserve: r,
    disconnect: o
  });
}
var q4 = 16 * 1.125, Z4 = typeof window < "u" && window.innerHeight || 800, bl = [1, q4, Z4];
function Q4(e) {
  var t = e.deltaX * bl[e.deltaMode], n = e.deltaY * bl[e.deltaMode], r = (e.deltaZ || 0) * bl[e.deltaMode];
  return {
    timeStamp: e.timeStamp,
    axisDelta: [t, n, r]
  };
}
var J4 = [-1, -1, -1];
function e6(e, t) {
  if (!t)
    return e;
  var n = t === !0 ? J4 : t.map(function(r) {
    return r ? -1 : 1;
  });
  return ir({}, e, {
    axisDelta: e.axisDelta.map(function(r, o) {
      return r * n[o];
    })
  });
}
var bm = 700, t6 = function(t) {
  return ir({}, t, {
    axisDelta: t.axisDelta.map(function(n) {
      return Y4(n, -bm, bm);
    })
  });
}, wl = process.env.NODE_ENV !== "production", n6 = 0.6, r6 = 0.96, o6 = 2, wm = 5, xm = /* @__PURE__ */ zr({
  preventWheelAction: !0,
  reverseSign: [!0, !0, !1]
}), i6 = 400;
function Cm() {
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
    willEndTimeout: i6
  };
}
function a6(e) {
  e === void 0 && (e = {});
  var t = K4(), n = t.on, r = t.off, o = t.dispatch, i = xm, a = Cm(), s, c = !1, u, d = function(F) {
    Array.isArray(F) ? F.forEach(function(V) {
      return g(V);
    }) : g(F);
  }, f = function(F) {
    return F === void 0 && (F = {}), Object.values(F).some(function(V) {
      return V == null;
    }) ? (wl && console.error("updateOptions ignored! undefined & null options not allowed"), i) : i = zr(ir({}, xm, i, F));
  }, h = function(F) {
    var V = ir({
      event: s,
      isStart: !1,
      isEnding: !1,
      isMomentumCancel: !1,
      isMomentum: a.isMomentum,
      axisDelta: [0, 0, 0],
      axisVelocity: a.axisVelocity,
      axisMovement: a.axisMovement,
      get axisMovementProjection() {
        return yl(V.axisMovement, V.axisVelocity.map(function(z) {
          return H4(z);
        }));
      }
    }, F);
    o("wheel", ir({}, V, {
      previous: u
    })), u = V;
  }, v = function(F, V) {
    var z = i, $ = z.preventWheelAction, W = V[0], K = V[1], E = V[2];
    if (typeof $ == "boolean") return $;
    switch ($) {
      case "x":
        return Math.abs(W) >= F;
      case "y":
        return Math.abs(K) >= F;
      case "z":
        return Math.abs(E) >= F;
      default:
        return wl && console.warn("unsupported preventWheelAction value: " + $, "warn"), !1;
    }
  }, g = function(F) {
    var V = t6(e6(Q4(F), i.reverseSign)), z = V.axisDelta, $ = V.timeStamp, W = ym(z);
    if (F.preventDefault && v(W, z) && F.preventDefault(), a.isStarted ? a.isMomentum && W > Math.max(2, a.lastAbsDelta * 2) && (k(!0), I()) : I(), W === 0 && Object.is && Object.is(F.deltaX, -0)) {
      c = !0;
      return;
    }
    s = F, a.axisMovement = yl(a.axisMovement, z), a.lastAbsDelta = W, a.scrollPointsToMerge.push({
      axisDelta: z,
      timeStamp: $
    }), p(), h({
      axisDelta: z,
      isStart: !a.isStartPublished
    }), a.isStartPublished = !0, T();
  }, p = function() {
    a.scrollPointsToMerge.length === o6 ? (a.scrollPoints.unshift({
      axisDeltaSum: a.scrollPointsToMerge.map(function(F) {
        return F.axisDelta;
      }).reduce(yl),
      timeStamp: G4(a.scrollPointsToMerge.map(function(F) {
        return F.timeStamp;
      }))
    }), b(), a.scrollPointsToMerge.length = 0, a.scrollPoints.length = 1, a.isMomentum || C()) : a.isStartPublished || y();
  }, y = function() {
    a.axisVelocity = z4(a.scrollPointsToMerge).axisDelta.map(function(F) {
      return F / a.willEndTimeout;
    });
  }, b = function() {
    var F = a.scrollPoints, V = F[0], z = F[1];
    if (!(!z || !V)) {
      var $ = V.timeStamp - z.timeStamp;
      if ($ <= 0) {
        wl && console.warn("invalid deltaTime");
        return;
      }
      var W = V.axisDeltaSum.map(function(E) {
        return E / $;
      }), K = W.map(function(E, P) {
        return E / (a.axisVelocity[P] || 1);
      });
      a.axisVelocity = W, a.accelerationFactors.push(K), w($);
    }
  }, w = function(F) {
    var V = Math.ceil(F / 10) * 10 * 1.2;
    a.isMomentum || (V = Math.max(100, V * 2)), a.willEndTimeout = Math.min(1e3, Math.round(V));
  }, x = function(F) {
    return F === 0 ? !0 : F <= r6 && F >= n6;
  }, C = function() {
    if (a.accelerationFactors.length >= wm) {
      if (c && (c = !1, ym(a.axisVelocity) >= 0.2)) {
        M();
        return;
      }
      var F = a.accelerationFactors.slice(wm * -1), V = F.every(function(z) {
        var $ = !!z.reduce(function(K, E) {
          return K && K < 1 && K === E ? 1 : 0;
        }), W = z.filter(x).length === z.length;
        return $ || W;
      });
      V && M(), a.accelerationFactors = F;
    }
  }, M = function() {
    a.isMomentum = !0;
  }, I = function() {
    a = Cm(), a.isStarted = !0, a.startTime = Date.now(), u = void 0, c = !1;
  }, T = /* @__PURE__ */ function() {
    var _;
    return function() {
      clearTimeout(_), _ = setTimeout(k, a.willEndTimeout);
    };
  }(), k = function(F) {
    F === void 0 && (F = !1), a.isStarted && (a.isMomentum && F ? h({
      isEnding: !0,
      isMomentumCancel: !0
    }) : h({
      isEnding: !0
    }), a.isMomentum = !1, a.isStarted = !1);
  }, R = X4(d), j = R.observe, X = R.unobserve, G = R.disconnect;
  return f(e), zr({
    on: n,
    off: r,
    observe: j,
    unobserve: X,
    disconnect: G,
    feedWheel: d,
    updateOptions: f
  });
}
var s6 = {
  active: !0,
  breakpoints: {},
  wheelDraggingClass: "is-wheel-dragging",
  forceWheelAxis: void 0,
  target: void 0
};
fd.globalOptions = void 0;
var l6 = process.env.NODE_ENV !== "production";
function fd(e) {
  e === void 0 && (e = {});
  var t, n = function() {
  };
  function r(i, a) {
    var s, c, u = a.mergeOptions, d = a.optionsAtMedia, f = u(s6, fd.globalOptions), h = u(f, e);
    t = d(h);
    var v = i.internalEngine(), g = (s = t.target) != null ? s : i.containerNode().parentNode, p = (c = t.forceWheelAxis) != null ? c : v.options.axis, y = a6({
      preventWheelAction: p,
      reverseSign: [!0, !0, !1]
    }), b = y.observe(g), w = y.on("wheel", G), x = !1, C;
    function M(_) {
      try {
        C = new MouseEvent("mousedown", _.event), X(C);
      } catch {
        return l6 && console.warn("Legacy browser requires events-polyfill (https://github.com/xiel/embla-carousel-wheel-gestures#legacy-browsers)"), n();
      }
      x = !0, T(), t.wheelDraggingClass && g.classList.add(t.wheelDraggingClass);
    }
    function I(_) {
      x = !1, X(j("mouseup", _)), k(), t.wheelDraggingClass && g.classList.remove(t.wheelDraggingClass);
    }
    function T() {
      document.documentElement.addEventListener("mousemove", R, !0), document.documentElement.addEventListener("mouseup", R, !0), document.documentElement.addEventListener("mousedown", R, !0);
    }
    function k() {
      document.documentElement.removeEventListener("mousemove", R, !0), document.documentElement.removeEventListener("mouseup", R, !0), document.documentElement.removeEventListener("mousedown", R, !0);
    }
    function R(_) {
      x && _.isTrusted && _.stopImmediatePropagation();
    }
    function j(_, F) {
      var V, z;
      if (p === v.options.axis) {
        var $ = F.axisMovement;
        V = $[0], z = $[1];
      } else {
        var W = F.axisMovement;
        z = W[0], V = W[1];
      }
      if (!v.options.skipSnaps && !v.options.dragFree) {
        var K = v.containerRect.width, E = v.containerRect.height;
        V = V < 0 ? Math.max(V, -K) : Math.min(V, K), z = z < 0 ? Math.max(z, -E) : Math.min(z, E);
      }
      return new MouseEvent(_, {
        clientX: C.clientX + V,
        clientY: C.clientY + z,
        screenX: C.screenX + V,
        screenY: C.screenY + z,
        movementX: V,
        movementY: z,
        button: 0,
        bubbles: !0,
        cancelable: !0,
        composed: !0
      });
    }
    function X(_) {
      i.containerNode().dispatchEvent(_);
    }
    function G(_) {
      var F = _.axisDelta, V = F[0], z = F[1], $ = p === "x" ? V : z, W = p === "x" ? z : V, K = _.isMomentum && _.previous && !_.previous.isMomentum, E = _.isEnding && !_.isMomentum || K, P = Math.abs($) > Math.abs(W);
      P && !x && !_.isMomentum && M(_), x && (E ? I(_) : X(j("mousemove", _)));
    }
    n = function() {
      b(), w(), k();
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
const un = 28, c6 = ({ children: e }) => {
  const t = Ge(null), [n, r] = Te(!0), [o, i] = Te(!1), a = (c) => {
    if (t.current) {
      const u = t.current, { scrollLeft: d } = u;
      if (c === "right") {
        const f = Array.from(u.children).find((h) => h.offsetLeft - un > d);
        f && u.scrollTo({
          left: f.offsetLeft - un,
          behavior: "smooth"
        });
      } else {
        const f = Array.from(u.children).reverse().find((h) => h.offsetLeft + h.offsetWidth < d);
        f && u.scrollTo({
          left: f.offsetLeft - un,
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
  return We(() => {
    const c = t.current;
    return c && (c.addEventListener("scroll", s), s()), () => {
      c && c.removeEventListener("scroll", s);
    };
  }, []), /* @__PURE__ */ S("div", { className: "relative", children: [
    /* @__PURE__ */ S(
      "div",
      {
        ref: t,
        className: "relative flex gap-4 overflow-x-auto overflow-y-visible scroll-smooth",
        style: {
          scrollbarWidth: "none",
          // Para Firefox
          msOverflowStyle: "none",
          // Para IE y Edge
          margin: `-${un}px`,
          padding: `${un}px`,
          height: `calc(100% + ${un * 2}px)`,
          width: `calc(100% + ${un * 2}px)`
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
        className: A(
          "w-[60px]",
          "absolute",
          "h-full",
          "top-0",
          "bg-gradient-to-l from-transparent from-0% to-f1-background to-100%"
        ),
        style: { left: `-${un}px` }
      }
    ),
    n && /* @__PURE__ */ l(
      "div",
      {
        className: A(
          "w-[60px]",
          "absolute",
          "h-full",
          "top-0",
          "bg-gradient-to-r from-transparent from-0% to-f1-background to-100%"
        ),
        style: { right: `-${un}px` }
      }
    ),
    o && /* @__PURE__ */ S(
      Fn,
      {
        size: "sm",
        variant: "outline",
        round: !0,
        className: A(
          "absolute opacity-100 transition-all",
          "-left-3 top-1/2 -translate-y-1/2"
        ),
        onClick: () => a("left"),
        children: [
          /* @__PURE__ */ l(Vo, { size: "sm", icon: tg }),
          /* @__PURE__ */ l("span", { className: "sr-only", children: "Previous" })
        ]
      }
    ),
    n && /* @__PURE__ */ S(
      Fn,
      {
        size: "sm",
        variant: "outline",
        round: !0,
        className: A(
          "absolute opacity-100 transition-all",
          "-right-3 top-1/2 -translate-y-1/2"
        ),
        onClick: () => a("right"),
        children: [
          /* @__PURE__ */ l(Vo, { size: "sm", icon: ng }),
          /* @__PURE__ */ l("span", { className: "sr-only", children: "Next" })
        ]
      }
    )
  ] });
}, u6 = Ye("", {
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
}), d6 = ({
  children: e,
  columns: t,
  showArrows: n = !0,
  showDots: r = !0,
  autoplay: o = !1,
  delay: i = 3e3,
  showPeek: a = !1
}) => {
  const s = L.Children.toArray(e), c = L.useRef(
    o ? dd({ delay: i, stopOnInteraction: !0 }) : void 0
  ), u = () => {
    c.current && c.current.stop();
  }, d = () => {
    c.current && c.current.play();
  };
  function f(h, v) {
    return v ? `peek${h || 1}` : h || 1;
  }
  return t ? /* @__PURE__ */ l(
    D1,
    {
      className: "flex w-full flex-col gap-3",
      opts: {
        align: "center",
        slidesToScroll: "auto",
        duration: 20,
        containScroll: !1
      },
      plugins: [c.current, fd()].filter(Boolean),
      onMouseEnter: o ? u : void 0,
      onMouseLeave: o ? d : void 0,
      children: /* @__PURE__ */ S("div", { className: "flex flex-col gap-3", children: [
        /* @__PURE__ */ S("div", { className: "relative", children: [
          /* @__PURE__ */ l(A1, { children: L.Children.map(s, (h, v) => /* @__PURE__ */ l(
            _1,
            {
              className: u6({
                default: f(t.default, a),
                xs: f(t.xs, a),
                sm: f(t.sm, a),
                md: f(t.md, a),
                lg: f(t.lg, a),
                peek: a
              }),
              children: h
            },
            v
          )) }),
          n && /* @__PURE__ */ S(we, { children: [
            /* @__PURE__ */ l(O1, {}),
            /* @__PURE__ */ l(L1, {})
          ] })
        ] }),
        r && /* @__PURE__ */ l(I1, {})
      ] })
    }
  ) : /* @__PURE__ */ l(c6, { children: e });
}, dc = m.forwardRef(({ ...e }, t) => /* @__PURE__ */ l("nav", { ref: t, "aria-label": "breadcrumb", ...e }));
dc.displayName = "Breadcrumb";
const F1 = m.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l(
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
F1.displayName = "BreadcrumbList";
const hd = m.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l(
  "li",
  {
    ref: n,
    className: A("inline-flex items-center gap-0.5", e),
    ...t
  }
));
hd.displayName = "BreadcrumbItem";
const V1 = m.forwardRef(({ asChild: e, className: t, ...n }, r) => /* @__PURE__ */ l(
  e ? ar : Vt,
  {
    ref: r,
    className: A(
      "rounded-sm px-1.5 py-0.5 font-medium text-f1-foreground no-underline transition-colors hover:bg-f1-background-secondary",
      t
    ),
    ...n
  }
));
V1.displayName = "BreadcrumbLink";
const $1 = m.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l(
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
$1.displayName = "BreadcrumbPage";
function f6() {
  return /* @__PURE__ */ l("div", { className: "px-1.5", children: /* @__PURE__ */ l(Ae, { className: "h-4 w-24", "aria-hidden": "true" }) });
}
function h6({ item: e, className: t }) {
  return /* @__PURE__ */ l(
    V1,
    {
      className: A("max-w-40", e.icon && "pl-0.5", t),
      asChild: !0,
      children: /* @__PURE__ */ S(Vt, { ...e, className: A("flex items-center gap-1.5", kt()), children: [
        e.icon && /* @__PURE__ */ l(us, { icon: e.icon, size: "sm" }),
        /* @__PURE__ */ l("span", { className: "truncate", children: e.label })
      ] })
    }
  );
}
function B1() {
  return /* @__PURE__ */ l("div", { className: "flex items-center", children: /* @__PURE__ */ l(Xa, { className: "h-4 w-4 text-f1-icon-secondary" }) });
}
function m6({ item: e, isLast: t }) {
  return "loading" in e ? /* @__PURE__ */ l("div", { className: "max-w-40", children: /* @__PURE__ */ l(f6, {}) }) : t ? /* @__PURE__ */ l($1, { "aria-hidden": "true", children: e.label }) : /* @__PURE__ */ l(h6, { item: e });
}
function Sm({
  item: e,
  isLast: t,
  showSeparator: n = !0
}) {
  return /* @__PURE__ */ S(hd, { children: [
    /* @__PURE__ */ l("div", { className: "flex items-center", children: /* @__PURE__ */ l(m6, { item: e, isLast: t }) }),
    n && /* @__PURE__ */ l(B1, {})
  ] });
}
function p6({
  items: e,
  showSeparator: t = !0
}) {
  return /* @__PURE__ */ S(hd, { children: [
    /* @__PURE__ */ l("div", { className: "flex items-center", children: /* @__PURE__ */ l(dr, { items: e, children: /* @__PURE__ */ l("button", { className: "rounded-sm px-1.5 py-0.5 font-medium text-f1-foreground no-underline transition-colors hover:bg-f1-background-secondary", children: "..." }) }) }),
    t && /* @__PURE__ */ l(B1, {})
  ] });
}
function v6({ breadcrumbs: e }) {
  const [t, n] = Te(2), r = Ge(null);
  if (We(() => {
    const s = r.current;
    if (!s) return;
    const c = () => {
      if (!r.current || e.length <= 2) {
        n(e.length);
        return;
      }
      const d = r.current.getBoundingClientRect().width, f = 150, h = 50;
      let v = d - f, g = 1;
      for (let p = e.length - 1; p > 0 && !(v < f); p--)
        v -= f, g++;
      if (g < e.length - 1)
        for (v -= h; v < 0 && g > 1; )
          v += f, g--;
      n(Math.max(2, g));
    }, u = new ResizeObserver(() => {
      c();
    });
    return u.observe(s), c(), () => {
      u.disconnect();
    };
  }, [e]), !e.length)
    return /* @__PURE__ */ l(dc, { ref: r, className: "w-full" });
  const o = e[0], i = e.slice(-t + 1), a = e.slice(1, -t + 1);
  return /* @__PURE__ */ l(dc, { ref: r, className: "w-full", children: /* @__PURE__ */ S(F1, { children: [
    /* @__PURE__ */ l(
      Sm,
      {
        item: o,
        isLast: !1,
        showSeparator: !("loading" in o)
      }
    ),
    a.length > 0 && /* @__PURE__ */ l(
      p6,
      {
        items: a
      }
    ),
    i.map((s, c) => /* @__PURE__ */ l(
      Sm,
      {
        item: s,
        isLast: c === i.length - 1,
        showSeparator: c !== i.length - 1
      },
      c
    ))
  ] }) });
}
function Nm({
  icon: e,
  href: t,
  label: n,
  disabled: r
}) {
  return /* @__PURE__ */ l(
    Vt,
    {
      href: r ? "" : t,
      title: n,
      "aria-label": n,
      className: A(
        "inline-flex aspect-square h-6 items-center justify-center rounded-sm border border-solid border-f1-border bg-f1-background px-0 text-f1-foreground hover:border-f1-border-hover",
        r && "pointer-events-none opacity-50"
      ),
      children: /* @__PURE__ */ l(Ce, { icon: e, size: "md" })
    }
  );
}
function FI({
  module: e,
  statusTag: t = void 0,
  breadcrumbs: n = [],
  actions: r = [],
  embedded: o = !1,
  navigation: i
}) {
  var p, y, b, w;
  const { sidebarState: a, toggleSidebar: s } = gs(), c = [
    { label: e.name, href: e.href, icon: e.icon },
    ...n
  ], u = t && Object.keys(t).length !== 0, d = n.length > 0, f = !o && r.length > 0, h = o && d, v = c[c.length - 1], g = d ? c[c.length - 2] : null;
  return /* @__PURE__ */ S(
    "div",
    {
      className: A(
        "flex items-center justify-between px-5 py-4 xs:px-6",
        o ? "h-12" : "h-16",
        d && !o && "border-b border-dashed border-transparent border-b-f1-border"
      ),
      children: [
        /* @__PURE__ */ S("div", { className: "flex flex-grow items-center", children: [
          /* @__PURE__ */ l(ii, { children: !o && a !== "locked" && /* @__PURE__ */ l(
            wt.div,
            {
              initial: { opacity: 0, width: 0 },
              animate: { opacity: 1, width: "auto" },
              exit: { opacity: 0, width: 0 },
              children: /* @__PURE__ */ l("div", { className: "mr-3", children: /* @__PURE__ */ l(
                $e,
                {
                  ref: (x) => {
                    x == null || x.focus();
                  },
                  variant: "ghost",
                  hideLabel: !0,
                  round: !0,
                  onClick: s,
                  label: "Open main menu",
                  icon: vk
                }
              ) })
            }
          ) }),
          /* @__PURE__ */ S(
            "div",
            {
              className: A(
                "flex flex-grow items-center gap-2",
                o && d && "justify-center"
              ),
              children: [
                h && g && !("loading" in g) && /* @__PURE__ */ l("div", { className: "absolute left-4", children: /* @__PURE__ */ l(Vt, { href: g.href, children: /* @__PURE__ */ l(
                  $e,
                  {
                    variant: "ghost",
                    hideLabel: !0,
                    round: !0,
                    label: "Back",
                    icon: HT
                  }
                ) }) }),
                !d && /* @__PURE__ */ l(us, { icon: e.icon, size: "lg" }),
                o && d ? /* @__PURE__ */ l("div", { className: "text-lg font-semibold text-f1-foreground", children: "loading" in v ? /* @__PURE__ */ l(Ae, { className: "h-4 w-24" }) : v.label }) : c.length > 1 ? /* @__PURE__ */ l(v6, { breadcrumbs: c }) : /* @__PURE__ */ l("div", { className: "text-xl font-semibold text-f1-foreground", children: e.name })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ S("div", { className: "flex items-center gap-3", children: [
          !o && u && /* @__PURE__ */ l("div", { children: t.tooltip ? /* @__PURE__ */ l(ds, { label: t.tooltip, children: /* @__PURE__ */ l("div", { children: /* @__PURE__ */ l(
            qo,
            {
              text: t.text,
              variant: t.variant,
              additionalAccesibleText: t.tooltip
            }
          ) }) }) : /* @__PURE__ */ l(qo, { text: t.text, variant: t.variant }) }),
          !o && u && (i || f) && /* @__PURE__ */ l("div", { className: "h-4 w-px bg-f1-border-secondary" }),
          i && /* @__PURE__ */ S("div", { className: "flex items-center gap-3", children: [
            i.counter && /* @__PURE__ */ S("span", { className: "text-sm text-f1-foreground-secondary", children: [
              i.counter.current,
              "/",
              i.counter.total
            ] }),
            /* @__PURE__ */ S("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ l(
                Nm,
                {
                  icon: gu,
                  label: ((p = i.previous) == null ? void 0 : p.title) || "Previous",
                  href: ((y = i.previous) == null ? void 0 : y.url) || "",
                  disabled: !i.previous
                }
              ),
              /* @__PURE__ */ l(
                Nm,
                {
                  icon: Jr,
                  label: ((b = i.next) == null ? void 0 : b.title) || "Next",
                  href: ((w = i.next) == null ? void 0 : w.url) || "",
                  disabled: !i.next
                }
              )
            ] })
          ] }),
          i && f && /* @__PURE__ */ l("div", { className: "h-4 w-px bg-f1-border-secondary" }),
          f && /* @__PURE__ */ l("div", { className: "items-right flex gap-2", children: r.map((x, C) => /* @__PURE__ */ l(g6, { action: x }, C)) })
        ] })
      ]
    }
  );
}
const Pm = Ye(
  "inline-flex aspect-square h-8 items-center justify-center rounded border border-solid border-f1-border bg-f1-background-inverse-secondary px-0 text-f1-foreground hover:border-f1-border-hover"
);
function g6({ action: e }) {
  return "actions" in e ? /* @__PURE__ */ l(dr, { items: e.actions, children: /* @__PURE__ */ l("button", { title: e.label, className: Pm(), children: /* @__PURE__ */ l(Ce, { icon: e.icon, size: "md" }) }) }) : /* @__PURE__ */ l(
    Vt,
    {
      href: e.href,
      title: e.label,
      className: Pm(),
      children: /* @__PURE__ */ l(Ce, { icon: e.icon, size: "md" })
    }
  );
}
function y6(e) {
  return e.filter((t) => !!t.title).map(({ title: t, description: n, href: r, onClick: o, target: i }) => ({
    label: t,
    description: n,
    href: r,
    onClick: o ? () => o(void 0) : void 0
  }));
}
function VI({ label: e, options: t, hasNewUpdate: n }) {
  return /* @__PURE__ */ l(
    "div",
    {
      className: "fixed z-10",
      style: {
        bottom: "calc(8px + env(safe-area-inset-bottom))",
        right: "calc(8px + env(safe-area-inset-right))"
      },
      children: /* @__PURE__ */ l(dr, { items: y6(t), children: /* @__PURE__ */ S(
        "button",
        {
          className: A(
            "relative flex h-6 w-6 items-center justify-center rounded-full bg-f1-background-bold text-f1-foreground-inverse shadow-md transition-all",
            kt()
          ),
          "aria-label": e,
          children: [
            /* @__PURE__ */ l(Ce, { icon: yk, size: "sm" }),
            n && /* @__PURE__ */ l("div", { className: "absolute right-0.5 top-0.5 h-1.5 w-1.5 rounded-full bg-f1-background-critical-bold ring-2 ring-f1-background-critical" })
          ]
        }
      ) })
    }
  );
}
function b6({ children: e, header: t, embedded: n = !1 }) {
  return /* @__PURE__ */ S(
    "div",
    {
      className: `flex w-full flex-col overflow-hidden ${n ? "" : "rounded-xl"} bg-f1-page ring-1 ring-inset ring-f1-border-secondary`,
      children: [
        t && /* @__PURE__ */ l("div", { className: "flex flex-col", children: t }),
        /* @__PURE__ */ l("div", { className: "isolate flex w-full flex-1 flex-col overflow-auto [&>*]:flex-1", children: e })
      ]
    }
  );
}
b6.displayName = "Page";
const w6 = Ye(
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
function x6({
  children: e,
  header: t,
  period: n,
  embedded: r = !1
}) {
  return /* @__PURE__ */ S(
    "div",
    {
      className: `relative flex w-full flex-col overflow-hidden ${r ? "" : "rounded-xl"} bg-f1-page shadow`,
      children: [
        /* @__PURE__ */ l("div", { className: w6({ period: n }) }),
        t && /* @__PURE__ */ l("div", { className: "flex flex-col", children: t }),
        /* @__PURE__ */ l("div", { className: "isolate flex w-full flex-1 flex-col overflow-auto [&>*]:flex-1", children: e })
      ]
    }
  );
}
x6.displayName = "DaytimePage";
function C6({
  companies: e,
  selected: t,
  onChange: n,
  isLoading: r = !1,
  withNotification: o = !1,
  additionalOptions: i = []
}) {
  const a = Et(
    () => e.find((s) => s.id === t) || e[0],
    [e, t]
  );
  return r ? /* @__PURE__ */ S("div", { className: "flex w-fit items-center gap-2 p-1.5", children: [
    /* @__PURE__ */ l(Ae, { className: "size-6" }),
    /* @__PURE__ */ l(Ae, { className: "h-3 w-14" })
  ] }) : e.length + ((i == null ? void 0 : i.length) || 0) === 1 ? /* @__PURE__ */ l("div", { className: "p-1.5", children: /* @__PURE__ */ l(
    Mm,
    {
      company: a,
      withNotification: o
    }
  ) }) : /* @__PURE__ */ l(
    S6,
    {
      companies: e,
      selected: a,
      onChange: n,
      additionalOptions: i,
      children: /* @__PURE__ */ l(
        Mm,
        {
          company: a,
          withNotification: o
        }
      )
    }
  );
}
const S6 = ({
  companies: e,
  selected: t,
  onChange: n,
  children: r,
  additionalOptions: o = []
}) => {
  const [i, a] = Te(!1), s = Et(
    () => [
      ...e.map((u) => ({
        value: u.id,
        label: u.name,
        avatar: {
          type: "company",
          name: u.name,
          src: u.logo,
          "aria-label": `${u.name} logo`
        }
      })),
      ...o.length ? ["separator"] : [],
      ...o
    ],
    [e, o]
  ), c = (u) => {
    const d = o == null ? void 0 : o.find((f) => f.value === u);
    if (d != null && d.onClick) {
      d.onClick();
      return;
    }
    n(u);
  };
  return /* @__PURE__ */ l(
    nD,
    {
      options: s,
      value: t.id,
      onChange: c,
      placeholder: "Select a company",
      open: i,
      onOpenChange: a,
      children: /* @__PURE__ */ S(
        "div",
        {
          className: A(
            "group flex w-fit max-w-full flex-nowrap items-center justify-center gap-1 truncate rounded p-1.5 text-f1-foreground transition-colors hover:bg-f1-background-hover data-[state=open]:bg-f1-background-hover",
            kt()
          ),
          tabIndex: 0,
          title: t == null ? void 0 : t.name,
          children: [
            r,
            /* @__PURE__ */ l("div", { className: "flex w-5 shrink-0 items-center justify-center", children: /* @__PURE__ */ l("div", { className: "flex h-3 w-3 items-center justify-center rounded-2xs bg-f1-background-secondary transition-all", children: /* @__PURE__ */ l(
              wt.div,
              {
                animate: { rotate: i ? 180 : 0 },
                transition: { duration: 0.2 },
                className: "flex h-3 w-3 shrink-0 items-center justify-center text-f1-icon-bold",
                children: /* @__PURE__ */ l(Ce, { icon: Jr, size: "xs" })
              }
            ) }) })
          ]
        }
      )
    }
  );
}, Mm = ({
  company: e,
  withNotification: t = !1
}) => {
  var n;
  return /* @__PURE__ */ S(
    "div",
    {
      className: A(
        "flex w-fit min-w-0 max-w-full items-center gap-2 rounded text-lg font-semibold text-f1-foreground transition-colors"
      ),
      children: [
        /* @__PURE__ */ l(
          Za,
          {
            name: (n = e == null ? void 0 : e.name) == null ? void 0 : n[0],
            src: e == null ? void 0 : e.logo,
            size: "small",
            badge: t ? { icon: KT, type: "highlight" } : void 0
          }
        ),
        /* @__PURE__ */ l("div", { className: "min-w-0 flex-1", children: /* @__PURE__ */ l("span", { className: "block truncate", children: e == null ? void 0 : e.name }) })
      ]
    }
  );
};
function N6({ isExpanded: e }) {
  return /* @__PURE__ */ S(
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
            className: A(
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
function P6() {
  const { prevSidebarState: e, sidebarState: t, toggleSidebar: n, isSmallScreen: r } = gs(), o = Ge(null);
  return We(() => {
    var i;
    e === "hidden" && t === "locked" && ((i = o.current) == null || i.focus());
  }, [e, t]), /* @__PURE__ */ S(
    Fn,
    {
      variant: "ghost",
      size: "md",
      round: !0,
      onClick: n,
      className: "group hover:bg-f1-background-hover",
      title: "Close Sidebar",
      ref: o,
      children: [
        /* @__PURE__ */ l("div", { className: A("hidden", { flex: !r }), children: /* @__PURE__ */ l(N6, { isExpanded: t === "locked" }) }),
        /* @__PURE__ */ l("div", { className: A("hidden", { flex: r }), children: /* @__PURE__ */ l(Ce, { icon: QT, size: "md" }) })
      ]
    }
  );
}
function $I({
  companies: e,
  selected: t,
  onChange: n,
  withNotification: r = !1,
  additionalOptions: o
}) {
  return /* @__PURE__ */ S("div", { className: "flex h-[72px] items-center justify-between gap-3 px-3", children: [
    /* @__PURE__ */ l(
      C6,
      {
        companies: e,
        selected: t,
        onChange: n,
        withNotification: r,
        additionalOptions: o
      }
    ),
    /* @__PURE__ */ l(P6, {})
  ] });
}
function M6(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function(o) {
    if (e == null || e(o), n === !1 || !o.defaultPrevented)
      return t == null ? void 0 : t(o);
  };
}
function E6(e, t = []) {
  let n = [];
  function r(i, a) {
    const s = m.createContext(a), c = n.length;
    n = [...n, a];
    const u = (f) => {
      var b;
      const { scope: h, children: v, ...g } = f, p = ((b = h == null ? void 0 : h[e]) == null ? void 0 : b[c]) || s, y = m.useMemo(() => g, Object.values(g));
      return /* @__PURE__ */ l(p.Provider, { value: y, children: v });
    };
    u.displayName = i + "Provider";
    function d(f, h) {
      var p;
      const v = ((p = h == null ? void 0 : h[e]) == null ? void 0 : p[c]) || s, g = m.useContext(v);
      if (g) return g;
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
  return o.scopeName = e, [r, T6(o, ...t)];
}
function T6(...e) {
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
function Em(e, t) {
  if (typeof e == "function")
    return e(t);
  e != null && (e.current = t);
}
function W1(...e) {
  return (t) => {
    let n = !1;
    const r = e.map((o) => {
      const i = Em(o, t);
      return !n && typeof i == "function" && (n = !0), i;
    });
    if (n)
      return () => {
        for (let o = 0; o < r.length; o++) {
          const i = r[o];
          typeof i == "function" ? i() : Em(e[o], null);
        }
      };
  };
}
function j1(...e) {
  return m.useCallback(W1(...e), e);
}
var U1 = m.forwardRef((e, t) => {
  const { children: n, ...r } = e, o = m.Children.toArray(n), i = o.find(R6);
  if (i) {
    const a = i.props.children, s = o.map((c) => c === i ? m.Children.count(a) > 1 ? m.Children.only(null) : m.isValidElement(a) ? a.props.children : null : c);
    return /* @__PURE__ */ l(fc, { ...r, ref: t, children: m.isValidElement(a) ? m.cloneElement(a, void 0, s) : null });
  }
  return /* @__PURE__ */ l(fc, { ...r, ref: t, children: n });
});
U1.displayName = "Slot";
var fc = m.forwardRef((e, t) => {
  const { children: n, ...r } = e;
  if (m.isValidElement(n)) {
    const o = A6(n);
    return m.cloneElement(n, {
      ...D6(r, n.props),
      // @ts-ignore
      ref: t ? W1(t, o) : o
    });
  }
  return m.Children.count(n) > 1 ? m.Children.only(null) : null;
});
fc.displayName = "SlotClone";
var k6 = ({ children: e }) => /* @__PURE__ */ l(we, { children: e });
function R6(e) {
  return m.isValidElement(e) && e.type === k6;
}
function D6(e, t) {
  const n = { ...t };
  for (const r in t) {
    const o = e[r], i = t[r];
    /^on[A-Z]/.test(r) ? o && i ? n[r] = (...s) => {
      i(...s), o(...s);
    } : o && (n[r] = o) : r === "style" ? n[r] = { ...o, ...i } : r === "className" && (n[r] = [o, i].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function A6(e) {
  var r, o;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var _6 = [
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
], md = _6.reduce((e, t) => {
  const n = m.forwardRef((r, o) => {
    const { asChild: i, ...a } = r, s = i ? U1 : t;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ l(s, { ...a, ref: o });
  });
  return n.displayName = `Primitive.${t}`, { ...e, [t]: n };
}, {});
function O6(e, t) {
  return m.useReducer((n, r) => t[n][r] ?? n, e);
}
var H1 = (e) => {
  const { present: t, children: n } = e, r = L6(t), o = typeof n == "function" ? n({ present: r.isPresent }) : m.Children.only(n), i = j1(r.ref, I6(o));
  return typeof n == "function" || r.isPresent ? m.cloneElement(o, { ref: i }) : null;
};
H1.displayName = "Presence";
function L6(e) {
  const [t, n] = m.useState(), r = m.useRef({}), o = m.useRef(e), i = m.useRef("none"), a = e ? "mounted" : "unmounted", [s, c] = O6(a, {
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
    const u = Wi(r.current);
    i.current = s === "mounted" ? u : "none";
  }, [s]), Xe(() => {
    const u = r.current, d = o.current;
    if (d !== e) {
      const h = i.current, v = Wi(u);
      e ? c("MOUNT") : v === "none" || (u == null ? void 0 : u.display) === "none" ? c("UNMOUNT") : c(d && h !== v ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e;
    }
  }, [e, c]), Xe(() => {
    if (t) {
      let u;
      const d = t.ownerDocument.defaultView ?? window, f = (v) => {
        const p = Wi(r.current).includes(v.animationName);
        if (v.target === t && p && (c("ANIMATION_END"), !o.current)) {
          const y = t.style.animationFillMode;
          t.style.animationFillMode = "forwards", u = d.setTimeout(() => {
            t.style.animationFillMode === "forwards" && (t.style.animationFillMode = y);
          });
        }
      }, h = (v) => {
        v.target === t && (i.current = Wi(r.current));
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
function Wi(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function I6(e) {
  var r, o;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var pd = "Collapsible", [F6, BI] = E6(pd), [V6, vd] = F6(pd), z1 = m.forwardRef(
  (e, t) => {
    const {
      __scopeCollapsible: n,
      open: r,
      defaultOpen: o,
      disabled: i,
      onOpenChange: a,
      ...s
    } = e, [c = !1, u] = It({
      prop: r,
      defaultProp: o,
      onChange: a
    });
    return /* @__PURE__ */ l(
      V6,
      {
        scope: n,
        disabled: i,
        contentId: Mt(),
        open: c,
        onOpenToggle: m.useCallback(() => u((d) => !d), [u]),
        children: /* @__PURE__ */ l(
          md.div,
          {
            "data-state": yd(c),
            "data-disabled": i ? "" : void 0,
            ...s,
            ref: t
          }
        )
      }
    );
  }
);
z1.displayName = pd;
var G1 = "CollapsibleTrigger", Y1 = m.forwardRef(
  (e, t) => {
    const { __scopeCollapsible: n, ...r } = e, o = vd(G1, n);
    return /* @__PURE__ */ l(
      md.button,
      {
        type: "button",
        "aria-controls": o.contentId,
        "aria-expanded": o.open || !1,
        "data-state": yd(o.open),
        "data-disabled": o.disabled ? "" : void 0,
        disabled: o.disabled,
        ...r,
        ref: t,
        onClick: M6(e.onClick, o.onOpenToggle)
      }
    );
  }
);
Y1.displayName = G1;
var gd = "CollapsibleContent", K1 = m.forwardRef(
  (e, t) => {
    const { forceMount: n, ...r } = e, o = vd(gd, e.__scopeCollapsible);
    return /* @__PURE__ */ l(H1, { present: n || o.open, children: ({ present: i }) => /* @__PURE__ */ l($6, { ...r, ref: t, present: i }) });
  }
);
K1.displayName = gd;
var $6 = m.forwardRef((e, t) => {
  const { __scopeCollapsible: n, present: r, children: o, ...i } = e, a = vd(gd, n), [s, c] = m.useState(r), u = m.useRef(null), d = j1(t, u), f = m.useRef(0), h = f.current, v = m.useRef(0), g = v.current, p = a.open || s, y = m.useRef(p), b = m.useRef(void 0);
  return m.useEffect(() => {
    const w = requestAnimationFrame(() => y.current = !1);
    return () => cancelAnimationFrame(w);
  }, []), Xe(() => {
    const w = u.current;
    if (w) {
      b.current = b.current || {
        transitionDuration: w.style.transitionDuration,
        animationName: w.style.animationName
      }, w.style.transitionDuration = "0s", w.style.animationName = "none";
      const x = w.getBoundingClientRect();
      f.current = x.height, v.current = x.width, y.current || (w.style.transitionDuration = b.current.transitionDuration, w.style.animationName = b.current.animationName), c(r);
    }
  }, [a.open, r]), /* @__PURE__ */ l(
    md.div,
    {
      "data-state": yd(a.open),
      "data-disabled": a.disabled ? "" : void 0,
      id: a.contentId,
      hidden: !p,
      ...i,
      ref: d,
      style: {
        "--radix-collapsible-content-height": h ? `${h}px` : void 0,
        "--radix-collapsible-content-width": g ? `${g}px` : void 0,
        ...e.style
      },
      children: p && o
    }
  );
});
function yd(e) {
  return e ? "open" : "closed";
}
var B6 = z1;
const W6 = B6, j6 = Y1, U6 = K1, H6 = ({
  item: e,
  active: t
}) => /* @__PURE__ */ S("div", { className: "flex w-full items-center justify-between", children: [
  /* @__PURE__ */ S("div", { className: "flex items-center gap-1.5 font-medium text-f1-foreground", children: [
    /* @__PURE__ */ l(
      Ce,
      {
        icon: e.icon,
        size: "md",
        className: A(
          "transition-colors",
          t ? "text-f1-icon-bold" : "text-f1-icon"
        )
      }
    ),
    /* @__PURE__ */ l("span", { children: e.label })
  ] }),
  e.badge && /* @__PURE__ */ l(rd, { value: e.badge, size: "sm", type: "bold" })
] }), Tm = ({ item: e }) => {
  const { isActive: t } = Nc(), { label: n, ...r } = e, o = t(r.href, { exact: r.exactMatch });
  return /* @__PURE__ */ l(
    Vt,
    {
      ...r,
      className: A(
        "flex cursor-pointer items-center rounded py-1.5 pl-1.5 pr-2 no-underline transition-colors",
        kt("focus-visible:ring-inset"),
        o ? "bg-f1-background-secondary text-f1-foreground" : "hover:bg-f1-background-secondary"
      ),
      children: /* @__PURE__ */ l(H6, { item: e, active: o })
    }
  );
}, z6 = ({ category: e }) => {
  const [t, n] = L.useState(e.isOpen !== !1), r = Kr();
  return e.isRoot ? /* @__PURE__ */ l("div", { className: "flex flex-col gap-1 pb-3", children: e.items.map((o, i) => /* @__PURE__ */ l(Tm, { item: o }, i)) }) : /* @__PURE__ */ S(W6, { open: t, onOpenChange: n, children: [
    /* @__PURE__ */ S(
      j6,
      {
        className: A(
          "flex w-full cursor-pointer items-center justify-between border-t border-dashed border-transparent border-t-f1-border px-1.5 pb-2 pt-4 text-sm font-semibold uppercase tracking-wide text-f1-foreground-secondary",
          kt("focus-visible:rounded-md")
        ),
        children: [
          e.title,
          /* @__PURE__ */ l(
            wt.div,
            {
              initial: !1,
              animate: { rotate: t ? 0 : -90 },
              transition: { duration: r ? 0 : 0.1 },
              children: /* @__PURE__ */ l(
                Ce,
                {
                  icon: Jr,
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
      U6,
      {
        forceMount: !0,
        className: "flex flex-col gap-1 overflow-hidden pb-2",
        children: /* @__PURE__ */ l(
          wt.div,
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
            children: /* @__PURE__ */ l("div", { className: "flex flex-col gap-1 pb-3", children: e.items.map((o, i) => /* @__PURE__ */ l(Tm, { item: o }, i)) })
          }
        )
      }
    )
  ] });
};
function WI({ tree: e }) {
  return /* @__PURE__ */ l("div", { className: "w-full bg-transparent px-3", children: e.map((t, n) => /* @__PURE__ */ l(z6, { category: t }, n)) });
}
function jI({
  onClick: e,
  placeholder: t,
  shortcut: n = ["cmd", "k"],
  ...r
}) {
  return /* @__PURE__ */ l("div", { className: "px-3", children: /* @__PURE__ */ S(
    "button",
    {
      onClick: e,
      className: A(
        "mb-[calc(0.75rem-1px)] flex w-full cursor-pointer items-center justify-between rounded bg-f1-background-inverse-secondary p-1.5 text-f1-foreground-secondary ring-1 ring-inset ring-f1-border-secondary transition-all hover:ring-f1-border-hover",
        kt()
      ),
      type: "button",
      ...r,
      children: [
        /* @__PURE__ */ S("div", { className: "flex items-center gap-1", children: [
          /* @__PURE__ */ l(Ce, { icon: xk, size: "md" }),
          /* @__PURE__ */ l("span", { children: t })
        ] }),
        /* @__PURE__ */ l("div", { className: "hidden xs:block", children: /* @__PURE__ */ l(P0, { keys: n }) })
      ]
    }
  ) });
}
const km = ({ position: e }) => /* @__PURE__ */ l(
  wt.div,
  {
    initial: { opacity: 0 },
    animate: { opacity: 0.5 },
    exit: { opacity: 0 },
    transition: { duration: 0.2, ease: "easeOut" },
    className: A(
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
function UI({ header: e, body: t, footer: n }) {
  const { sidebarState: r, isSmallScreen: o } = gs(), i = Kr(), [a, s] = Od({ threshold: 1 }), [c, u] = Od({ threshold: 1 }), d = {
    x: {
      ease: r !== "locked" ? o ? [0.25, 0.46, 0.45, 0.94] : [0.175, 0.885, 0.32, 1.1] : [0, 0, 0.58, 1],
      duration: i ? 0 : r !== "locked" && !o ? 0.3 : 0.2
    },
    top: { duration: i ? 0 : 0.1 },
    left: { duration: i ? 0 : 0.1 },
    default: { duration: i ? 0 : 0.2 }
  };
  return /* @__PURE__ */ S(
    wt.div,
    {
      initial: !1,
      className: A(
        "absolute bottom-0 left-0 top-0 z-10 flex w-[240px] flex-col transition-[background-color]",
        r === "locked" ? "h-full" : A(
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
        /* @__PURE__ */ l("header", { className: "flex-shrink-0", children: e }),
        t && /* @__PURE__ */ S("nav", { className: "relative flex-grow overflow-y-hidden", children: [
          /* @__PURE__ */ S(Ya, { className: "h-full", children: [
            /* @__PURE__ */ l(
              "div",
              {
                ref: a,
                className: "h-px",
                "aria-hidden": "true"
              },
              "top-ref"
            ),
            t,
            /* @__PURE__ */ l(
              "div",
              {
                ref: c,
                className: "h-px",
                "aria-hidden": "true"
              },
              "bottom-ref"
            )
          ] }),
          /* @__PURE__ */ S(ii, { children: [
            !s && /* @__PURE__ */ l(km, { position: "top" }, "shadow-scroll-top"),
            !u && /* @__PURE__ */ l(km, { position: "bottom" }, "shadow-scroll-bottom")
          ] })
        ] }),
        /* @__PURE__ */ l("div", { className: "flex-shrink-0", children: n })
      ]
    }
  );
}
function HI({ firstName: e, lastName: t, avatarUrl: n, options: r }) {
  return /* @__PURE__ */ l("div", { className: "mx-3 pb-3 pt-3", children: /* @__PURE__ */ l(dr, { items: r, children: /* @__PURE__ */ S(
    "button",
    {
      className: A(
        "flex w-full items-center gap-1.5 rounded p-1.5 font-medium transition-colors hover:bg-f1-background-secondary data-[state=open]:bg-f1-background-secondary",
        kt("focus-visible:ring-inset")
      ),
      children: [
        /* @__PURE__ */ l(
          lr,
          {
            src: n,
            firstName: e,
            lastName: t,
            size: "xsmall"
          }
        ),
        /* @__PURE__ */ S("span", { className: "min-w-0 truncate text-f1-foreground", children: [
          e,
          " ",
          t
        ] })
      ]
    }
  ) }) });
}
var ro = "NavigationMenu", [bd, X1, G6] = ci(ro), [hc, Y6, K6] = ci(ro), [wd, zI] = rn(
  ro,
  [G6, K6]
), [X6, Bt] = wd(ro), [q6, Z6] = wd(ro), q1 = m.forwardRef(
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
    } = e, [f, h] = m.useState(null), v = Se(t, (R) => h(R)), g = Zr(u), p = m.useRef(0), y = m.useRef(0), b = m.useRef(0), [w, x] = m.useState(!0), [C = "", M] = It({
      prop: r,
      onChange: (R) => {
        const j = R !== "", X = s > 0;
        j ? (window.clearTimeout(b.current), X && x(!1)) : (window.clearTimeout(b.current), b.current = window.setTimeout(
          () => x(!0),
          s
        )), o == null || o(R);
      },
      defaultProp: i
    }), I = m.useCallback(() => {
      window.clearTimeout(y.current), y.current = window.setTimeout(() => M(""), 150);
    }, [M]), T = m.useCallback(
      (R) => {
        window.clearTimeout(y.current), M(R);
      },
      [M]
    ), k = m.useCallback(
      (R) => {
        C === R ? window.clearTimeout(y.current) : p.current = window.setTimeout(() => {
          window.clearTimeout(y.current), M(R);
        }, a);
      },
      [C, M, a]
    );
    return m.useEffect(() => () => {
      window.clearTimeout(p.current), window.clearTimeout(y.current), window.clearTimeout(b.current);
    }, []), /* @__PURE__ */ l(
      Q1,
      {
        scope: n,
        isRootMenu: !0,
        value: C,
        dir: g,
        orientation: c,
        rootNavigationMenu: f,
        onTriggerEnter: (R) => {
          window.clearTimeout(p.current), w ? k(R) : T(R);
        },
        onTriggerLeave: () => {
          window.clearTimeout(p.current), I();
        },
        onContentEnter: () => window.clearTimeout(y.current),
        onContentLeave: I,
        onItemSelect: (R) => {
          M((j) => j === R ? "" : R);
        },
        onItemDismiss: () => M(""),
        children: /* @__PURE__ */ l(
          ve.nav,
          {
            "aria-label": "Main",
            "data-orientation": c,
            dir: g,
            ...d,
            ref: v
          }
        )
      }
    );
  }
);
q1.displayName = ro;
var Z1 = "NavigationMenuSub", Q6 = m.forwardRef(
  (e, t) => {
    const {
      __scopeNavigationMenu: n,
      value: r,
      onValueChange: o,
      defaultValue: i,
      orientation: a = "horizontal",
      ...s
    } = e, c = Bt(Z1, n), [u = "", d] = It({
      prop: r,
      onChange: o,
      defaultProp: i
    });
    return /* @__PURE__ */ l(
      Q1,
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
        children: /* @__PURE__ */ l(ve.div, { "data-orientation": a, ...s, ref: t })
      }
    );
  }
);
Q6.displayName = Z1;
var Q1 = (e) => {
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
    onContentLeave: v
  } = e, [g, p] = m.useState(null), [y, b] = m.useState(/* @__PURE__ */ new Map()), [w, x] = m.useState(null);
  return /* @__PURE__ */ l(
    X6,
    {
      scope: t,
      isRootMenu: n,
      rootNavigationMenu: r,
      value: s,
      previousValue: Cg(s),
      baseId: Mt(),
      dir: o,
      orientation: i,
      viewport: g,
      onViewportChange: p,
      indicatorTrack: w,
      onIndicatorTrackChange: x,
      onTriggerEnter: Ve(d),
      onTriggerLeave: Ve(f),
      onContentEnter: Ve(h),
      onContentLeave: Ve(v),
      onItemSelect: Ve(c),
      onItemDismiss: Ve(u),
      onViewportContentChange: m.useCallback((C, M) => {
        b((I) => (I.set(C, M), new Map(I)));
      }, []),
      onViewportContentRemove: m.useCallback((C) => {
        b((M) => M.has(C) ? (M.delete(C), new Map(M)) : M);
      }, []),
      children: /* @__PURE__ */ l(bd.Provider, { scope: t, children: /* @__PURE__ */ l(q6, { scope: t, items: y, children: a }) })
    }
  );
}, J1 = "NavigationMenuList", ew = m.forwardRef(
  (e, t) => {
    const { __scopeNavigationMenu: n, ...r } = e, o = Bt(J1, n), i = /* @__PURE__ */ l(ve.ul, { "data-orientation": o.orientation, ...r, ref: t });
    return /* @__PURE__ */ l(ve.div, { style: { position: "relative" }, ref: o.onIndicatorTrackChange, children: /* @__PURE__ */ l(bd.Slot, { scope: n, children: o.isRootMenu ? /* @__PURE__ */ l(aw, { asChild: !0, children: i }) : i }) });
  }
);
ew.displayName = J1;
var tw = "NavigationMenuItem", [J6, nw] = wd(tw), rw = m.forwardRef(
  (e, t) => {
    const { __scopeNavigationMenu: n, value: r, ...o } = e, i = Mt(), a = r || i || "LEGACY_REACT_AUTO_VALUE", s = m.useRef(null), c = m.useRef(null), u = m.useRef(null), d = m.useRef(() => {
    }), f = m.useRef(!1), h = m.useCallback((g = "start") => {
      if (s.current) {
        d.current();
        const p = pc(s.current);
        p.length && Sd(g === "start" ? p : p.reverse());
      }
    }, []), v = m.useCallback(() => {
      if (s.current) {
        const g = pc(s.current);
        g.length && (d.current = uO(g));
      }
    }, []);
    return /* @__PURE__ */ l(
      J6,
      {
        scope: n,
        value: a,
        triggerRef: c,
        contentRef: s,
        focusProxyRef: u,
        wasEscapeCloseRef: f,
        onEntryKeyDown: h,
        onFocusProxyEnter: h,
        onRootContentClose: v,
        onContentFocusOutside: v,
        children: /* @__PURE__ */ l(ve.li, { ...o, ref: t })
      }
    );
  }
);
rw.displayName = tw;
var mc = "NavigationMenuTrigger", eO = m.forwardRef((e, t) => {
  const { __scopeNavigationMenu: n, disabled: r, ...o } = e, i = Bt(mc, e.__scopeNavigationMenu), a = nw(mc, e.__scopeNavigationMenu), s = m.useRef(null), c = Se(s, a.triggerRef, t), u = lw(i.baseId, a.value), d = cw(i.baseId, a.value), f = m.useRef(!1), h = m.useRef(!1), v = a.value === i.value;
  return /* @__PURE__ */ S(we, { children: [
    /* @__PURE__ */ l(bd.ItemSlot, { scope: n, value: a.value, children: /* @__PURE__ */ l(sw, { asChild: !0, children: /* @__PURE__ */ l(
      ve.button,
      {
        id: u,
        disabled: r,
        "data-disabled": r ? "" : void 0,
        "data-state": Nd(v),
        "aria-expanded": v,
        "aria-controls": d,
        ...o,
        ref: c,
        onPointerEnter: re(e.onPointerEnter, () => {
          h.current = !1, a.wasEscapeCloseRef.current = !1;
        }),
        onPointerMove: re(
          e.onPointerMove,
          Ta(() => {
            r || h.current || a.wasEscapeCloseRef.current || f.current || (i.onTriggerEnter(a.value), f.current = !0);
          })
        ),
        onPointerLeave: re(
          e.onPointerLeave,
          Ta(() => {
            r || (i.onTriggerLeave(), f.current = !1);
          })
        ),
        onClick: re(e.onClick, () => {
          i.onItemSelect(a.value), h.current = v;
        }),
        onKeyDown: re(e.onKeyDown, (g) => {
          const y = { horizontal: "ArrowDown", vertical: i.dir === "rtl" ? "ArrowLeft" : "ArrowRight" }[i.orientation];
          v && g.key === y && (a.onEntryKeyDown(), g.preventDefault());
        })
      }
    ) }) }),
    v && /* @__PURE__ */ S(we, { children: [
      /* @__PURE__ */ l(
        Jw,
        {
          "aria-hidden": !0,
          tabIndex: 0,
          ref: a.focusProxyRef,
          onFocus: (g) => {
            const p = a.contentRef.current, y = g.relatedTarget, b = y === s.current, w = p == null ? void 0 : p.contains(y);
            (b || !w) && a.onFocusProxyEnter(b ? "start" : "end");
          }
        }
      ),
      i.viewport && /* @__PURE__ */ l("span", { "aria-owns": d })
    ] })
  ] });
});
eO.displayName = mc;
var tO = "NavigationMenuLink", Rm = "navigationMenu.linkSelect", ow = m.forwardRef(
  (e, t) => {
    const { __scopeNavigationMenu: n, active: r, onSelect: o, ...i } = e;
    return /* @__PURE__ */ l(sw, { asChild: !0, children: /* @__PURE__ */ l(
      ve.a,
      {
        "data-active": r ? "" : void 0,
        "aria-current": r ? "page" : void 0,
        ...i,
        ref: t,
        onClick: re(
          e.onClick,
          (a) => {
            const s = a.target, c = new CustomEvent(Rm, {
              bubbles: !0,
              cancelable: !0
            });
            if (s.addEventListener(Rm, (u) => o == null ? void 0 : o(u), { once: !0 }), Cl(s, c), !c.defaultPrevented && !a.metaKey) {
              const u = new CustomEvent(na, {
                bubbles: !0,
                cancelable: !0
              });
              Cl(s, u);
            }
          },
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
);
ow.displayName = tO;
var xd = "NavigationMenuIndicator", nO = m.forwardRef((e, t) => {
  const { forceMount: n, ...r } = e, o = Bt(xd, e.__scopeNavigationMenu), i = !!o.value;
  return o.indicatorTrack ? Ec.createPortal(
    /* @__PURE__ */ l(Ct, { present: n || i, children: /* @__PURE__ */ l(rO, { ...r, ref: t }) }),
    o.indicatorTrack
  ) : null;
});
nO.displayName = xd;
var rO = m.forwardRef((e, t) => {
  const { __scopeNavigationMenu: n, ...r } = e, o = Bt(xd, n), i = X1(n), [a, s] = m.useState(
    null
  ), [c, u] = m.useState(null), d = o.orientation === "horizontal", f = !!o.value;
  m.useEffect(() => {
    var p;
    const g = (p = i().find((y) => y.value === o.value)) == null ? void 0 : p.ref.current;
    g && s(g);
  }, [i, o.value]);
  const h = () => {
    a && u({
      size: d ? a.offsetWidth : a.offsetHeight,
      offset: d ? a.offsetLeft : a.offsetTop
    });
  };
  return vc(a, h), vc(o.indicatorTrack, h), c ? /* @__PURE__ */ l(
    ve.div,
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
}), Gr = "NavigationMenuContent", oO = m.forwardRef((e, t) => {
  const { forceMount: n, ...r } = e, o = Bt(Gr, e.__scopeNavigationMenu), i = nw(Gr, e.__scopeNavigationMenu), a = Se(i.contentRef, t), s = i.value === o.value, c = {
    value: i.value,
    triggerRef: i.triggerRef,
    focusProxyRef: i.focusProxyRef,
    wasEscapeCloseRef: i.wasEscapeCloseRef,
    onContentFocusOutside: i.onContentFocusOutside,
    onRootContentClose: i.onRootContentClose,
    ...r
  };
  return o.viewport ? /* @__PURE__ */ l(iO, { forceMount: n, ...c, ref: a }) : /* @__PURE__ */ l(Ct, { present: n || s, children: /* @__PURE__ */ l(
    iw,
    {
      "data-state": Nd(s),
      ...c,
      ref: a,
      onPointerEnter: re(e.onPointerEnter, o.onContentEnter),
      onPointerLeave: re(
        e.onPointerLeave,
        Ta(o.onContentLeave)
      ),
      style: {
        // Prevent interaction when animating out
        pointerEvents: !s && o.isRootMenu ? "none" : void 0,
        ...c.style
      }
    }
  ) });
});
oO.displayName = Gr;
var iO = m.forwardRef((e, t) => {
  const n = Bt(Gr, e.__scopeNavigationMenu), { onViewportContentChange: r, onViewportContentRemove: o } = n;
  return Xe(() => {
    r(e.value, {
      ref: t,
      ...e
    });
  }, [e, t, r]), Xe(() => () => o(e.value), [e.value, o]), null;
}), na = "navigationMenu.rootContentDismiss", iw = m.forwardRef((e, t) => {
  const {
    __scopeNavigationMenu: n,
    value: r,
    triggerRef: o,
    focusProxyRef: i,
    wasEscapeCloseRef: a,
    onRootContentClose: s,
    onContentFocusOutside: c,
    ...u
  } = e, d = Bt(Gr, n), f = m.useRef(null), h = Se(f, t), v = lw(d.baseId, r), g = cw(d.baseId, r), p = X1(n), y = m.useRef(null), { onItemDismiss: b } = d;
  m.useEffect(() => {
    const x = f.current;
    if (d.isRootMenu && x) {
      const C = () => {
        var M;
        b(), s(), x.contains(document.activeElement) && ((M = o.current) == null || M.focus());
      };
      return x.addEventListener(na, C), () => x.removeEventListener(na, C);
    }
  }, [d.isRootMenu, e.value, o, b, s]);
  const w = m.useMemo(() => {
    const C = p().map((j) => j.value);
    d.dir === "rtl" && C.reverse();
    const M = C.indexOf(d.value), I = C.indexOf(d.previousValue), T = r === d.value, k = I === C.indexOf(r);
    if (!T && !k) return y.current;
    const R = (() => {
      if (M !== I) {
        if (T && I !== -1) return M > I ? "from-end" : "from-start";
        if (k && M !== -1) return M > I ? "to-start" : "to-end";
      }
      return null;
    })();
    return y.current = R, R;
  }, [d.previousValue, d.value, d.dir, p, r]);
  return /* @__PURE__ */ l(aw, { asChild: !0, children: /* @__PURE__ */ l(
    Da,
    {
      id: g,
      "aria-labelledby": v,
      "data-motion": w,
      "data-orientation": d.orientation,
      ...u,
      ref: h,
      disableOutsidePointerEvents: !1,
      onDismiss: () => {
        var C;
        const x = new Event(na, {
          bubbles: !0,
          cancelable: !0
        });
        (C = f.current) == null || C.dispatchEvent(x);
      },
      onFocusOutside: re(e.onFocusOutside, (x) => {
        var M;
        c();
        const C = x.target;
        (M = d.rootNavigationMenu) != null && M.contains(C) && x.preventDefault();
      }),
      onPointerDownOutside: re(e.onPointerDownOutside, (x) => {
        var T;
        const C = x.target, M = p().some((k) => {
          var R;
          return (R = k.ref.current) == null ? void 0 : R.contains(C);
        }), I = d.isRootMenu && ((T = d.viewport) == null ? void 0 : T.contains(C));
        (M || I || !d.isRootMenu) && x.preventDefault();
      }),
      onKeyDown: re(e.onKeyDown, (x) => {
        var I;
        const C = x.altKey || x.ctrlKey || x.metaKey;
        if (x.key === "Tab" && !C) {
          const T = pc(x.currentTarget), k = document.activeElement, R = T.findIndex((G) => G === k), X = x.shiftKey ? T.slice(0, R).reverse() : T.slice(R + 1, T.length);
          Sd(X) ? x.preventDefault() : (I = i.current) == null || I.focus();
        }
      }),
      onEscapeKeyDown: re(e.onEscapeKeyDown, (x) => {
        a.current = !0;
      })
    }
  ) });
}), Cd = "NavigationMenuViewport", aO = m.forwardRef((e, t) => {
  const { forceMount: n, ...r } = e, i = !!Bt(Cd, e.__scopeNavigationMenu).value;
  return /* @__PURE__ */ l(Ct, { present: n || i, children: /* @__PURE__ */ l(sO, { ...r, ref: t }) });
});
aO.displayName = Cd;
var sO = m.forwardRef((e, t) => {
  const { __scopeNavigationMenu: n, children: r, ...o } = e, i = Bt(Cd, n), a = Se(t, i.onViewportChange), s = Z6(
    Gr,
    e.__scopeNavigationMenu
  ), [c, u] = m.useState(null), [d, f] = m.useState(null), h = c ? (c == null ? void 0 : c.width) + "px" : void 0, v = c ? (c == null ? void 0 : c.height) + "px" : void 0, g = !!i.value, p = g ? i.value : i.previousValue;
  return vc(d, () => {
    d && u({ width: d.offsetWidth, height: d.offsetHeight });
  }), /* @__PURE__ */ l(
    ve.div,
    {
      "data-state": Nd(g),
      "data-orientation": i.orientation,
      ...o,
      ref: a,
      style: {
        // Prevent interaction when animating out
        pointerEvents: !g && i.isRootMenu ? "none" : void 0,
        "--radix-navigation-menu-viewport-width": h,
        "--radix-navigation-menu-viewport-height": v,
        ...o.style
      },
      onPointerEnter: re(e.onPointerEnter, i.onContentEnter),
      onPointerLeave: re(e.onPointerLeave, Ta(i.onContentLeave)),
      children: Array.from(s.items).map(([b, { ref: w, forceMount: x, ...C }]) => {
        const M = p === b;
        return /* @__PURE__ */ l(Ct, { present: x || M, children: /* @__PURE__ */ l(
          iw,
          {
            ...C,
            ref: Sc(w, (I) => {
              M && I && f(I);
            })
          }
        ) }, b);
      })
    }
  );
}), lO = "FocusGroup", aw = m.forwardRef(
  (e, t) => {
    const { __scopeNavigationMenu: n, ...r } = e, o = Bt(lO, n);
    return /* @__PURE__ */ l(hc.Provider, { scope: n, children: /* @__PURE__ */ l(hc.Slot, { scope: n, children: /* @__PURE__ */ l(ve.div, { dir: o.dir, ...r, ref: t }) }) });
  }
), Dm = ["ArrowRight", "ArrowLeft", "ArrowUp", "ArrowDown"], cO = "FocusGroupItem", sw = m.forwardRef(
  (e, t) => {
    const { __scopeNavigationMenu: n, ...r } = e, o = Y6(n), i = Bt(cO, n);
    return /* @__PURE__ */ l(hc.ItemSlot, { scope: n, children: /* @__PURE__ */ l(
      ve.button,
      {
        ...r,
        ref: t,
        onKeyDown: re(e.onKeyDown, (a) => {
          if (["Home", "End", ...Dm].includes(a.key)) {
            let c = o().map((f) => f.ref.current);
            if ([i.dir === "rtl" ? "ArrowRight" : "ArrowLeft", "ArrowUp", "End"].includes(a.key) && c.reverse(), Dm.includes(a.key)) {
              const f = c.indexOf(a.currentTarget);
              c = c.slice(f + 1);
            }
            setTimeout(() => Sd(c)), a.preventDefault();
          }
        })
      }
    ) });
  }
);
function pc(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => {
      const o = r.tagName === "INPUT" && r.type === "hidden";
      return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function Sd(e) {
  const t = document.activeElement;
  return e.some((n) => n === t ? !0 : (n.focus(), document.activeElement !== t));
}
function uO(e) {
  return e.forEach((t) => {
    t.dataset.tabindex = t.getAttribute("tabindex") || "", t.setAttribute("tabindex", "-1");
  }), () => {
    e.forEach((t) => {
      const n = t.dataset.tabindex;
      t.setAttribute("tabindex", n);
    });
  };
}
function vc(e, t) {
  const n = Ve(t);
  Xe(() => {
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
function Nd(e) {
  return e ? "open" : "closed";
}
function lw(e, t) {
  return `${e}-trigger-${t}`;
}
function cw(e, t) {
  return `${e}-content-${t}`;
}
function Ta(e) {
  return (t) => t.pointerType === "mouse" ? e(t) : void 0;
}
var dO = q1, fO = ew, hO = rw, mO = ow;
function pO(e, t) {
  const { asChild: n, children: r } = e;
  if (!n)
    return typeof t == "function" ? t(r) : t;
  const o = m.Children.only(r);
  return m.cloneElement(o, {
    children: typeof t == "function" ? t(o.props.children) : t
  });
}
const vO = Ye(
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
), Pd = m.forwardRef(({ className: e, children: t, secondary: n, ...r }, o) => {
  const i = Aa();
  return /* @__PURE__ */ l(
    dO,
    {
      ref: o,
      ...r,
      asChild: !1,
      children: /* @__PURE__ */ l(dP, { id: i, children: /* @__PURE__ */ l(
        fO,
        {
          className: A(vO({ secondary: n }), e),
          children: t
        }
      ) })
    }
  );
});
Pd.displayName = "TabNavigation";
const gO = Ye(
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
), yO = m.forwardRef(function({ asChild: t, disabled: n, active: r, className: o, children: i, secondary: a, ...s }, c) {
  return /* @__PURE__ */ l(hO, { className: "flex", children: /* @__PURE__ */ l(
    mO,
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
      ...s,
      children: pO({ asChild: t, children: i }, (u) => /* @__PURE__ */ S(
        "span",
        {
          className: A(
            "text-f1-foreground-secondary ring-1 ring-inset ring-transparent",
            gO({ secondary: a, disabled: n }),
            o
          ),
          children: [
            u,
            r && !a && /* @__PURE__ */ l(
              wt.div,
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
}), bO = ({
  className: e
}) => /* @__PURE__ */ l("li", { className: "list-none", children: /* @__PURE__ */ l(
  Ae,
  {
    className: A(
      "mr-4 w-20 rounded-md py-1.5 ring-1 ring-inset ring-transparent",
      e
    ),
    children: " "
  }
) }), Po = ht(
  yO,
  bO
), wO = ({
  tabs: e,
  secondary: t = !1,
  embedded: n = !1
}) => {
  const { isActive: r } = Nc(), o = n ? [e[0]] : e, a = [...o].sort(
    (s, c) => s.index ? 1 : c.index ? -1 : 0
  ).find((s) => r(s.href));
  return /* @__PURE__ */ l(
    Pd,
    {
      secondary: t,
      asChild: !0,
      "aria-label": t ? "primary-navigation" : "secondary-navigation",
      children: o.length === 1 ? /* @__PURE__ */ l("li", { className: "flex h-8 items-center justify-center whitespace-nowrap text-lg font-medium text-f1-foreground", children: o[0].label }) : o.map(({ label: s, ...c }, u) => /* @__PURE__ */ l(
        Po,
        {
          active: (a == null ? void 0 : a.href) === c.href,
          href: c.href,
          secondary: t,
          asChild: !0,
          children: /* @__PURE__ */ l(Vt, { role: "link", ...c, children: s })
        },
        u
      ))
    }
  );
}, xO = ({
  secondary: e
}) => /* @__PURE__ */ S(
  Pd,
  {
    "aria-label": e ? "Secondary empty nav" : "Main empty nav",
    secondary: e,
    "aria-busy": "true",
    "aria-live": "polite",
    children: [
      /* @__PURE__ */ l(Po.Skeleton, { className: "w-24" }),
      /* @__PURE__ */ l(Po.Skeleton, { className: "w-20" }),
      /* @__PURE__ */ l(Po.Skeleton, { className: "w-28" }),
      /* @__PURE__ */ l(Po.Skeleton, { className: "w-20" })
    ]
  }
), GI = ht(wO, xO), CO = lb, SO = cb, uw = m.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l(
  ju,
  {
    ref: n,
    className: A(
      "fixed inset-0 z-50 bg-f1-background-bold/40 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      e
    ),
    ...t
  }
));
uw.displayName = ju.displayName;
const dw = m.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ l(SO, { children: /* @__PURE__ */ l(uw, { className: "grid place-items-center overflow-y-auto sm:p-8", children: /* @__PURE__ */ S(
  Uu,
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
      /* @__PURE__ */ S(ub, { className: "ring-offset-background focus:ring-ring absolute right-2 top-2 rounded-2xs p-2 text-f1-foreground opacity-70 transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-f1-background-secondary data-[state=open]:text-f1-foreground-secondary", children: [
        /* @__PURE__ */ l(FP, { className: "h-5 w-5" }),
        /* @__PURE__ */ l("span", { className: "sr-only", children: "Close" })
      ] })
    ]
  }
) }) }));
dw.displayName = Uu.displayName;
const fw = ({
  className: e,
  ...t
}) => /* @__PURE__ */ l(
  "div",
  {
    className: A(
      "text-icon-neutral-bold absolute left-8 top-0 h-16 w-16 translate-y-[-50%] rounded-xl bg-f1-background p-4 shadow-md",
      e
    ),
    ...t
  }
);
fw.displayName = "DialogIcon";
const hw = ({
  className: e,
  ...t
}) => /* @__PURE__ */ l("div", { className: A("mt-5 flex flex-col text-left", e), ...t });
hw.displayName = "DialogHeader";
const mw = ({
  className: e,
  ...t
}) => /* @__PURE__ */ l(
  "div",
  {
    className: A(
      "-mx-8 -mb-8 mt-4 flex flex-col-reverse gap-0 rounded-bl-xl rounded-br-xl border-0 border-t border-solid border-f1-border bg-f1-background-secondary/50 px-8 py-4 sm:flex-row sm:justify-end sm:space-x-2",
      e
    ),
    ...t
  }
);
mw.displayName = "DialogFooter";
const pw = m.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l(
  Hu,
  {
    ref: n,
    className: A("mt-1 text-xl font-medium leading-none", e),
    ...t
  }
));
pw.displayName = Hu.displayName;
const vw = m.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l(
  zu,
  {
    ref: n,
    className: A("mt-2 text-base text-f1-foreground-secondary", e),
    ...t
  }
));
vw.displayName = zu.displayName;
const gw = Z(
  ({ header: e, children: t, loading: n, actions: r, open: o, onClose: i }, a) => {
    const [s, c] = Te(!1), u = zt(() => {
      c(!0);
      const d = setTimeout(() => {
        i == null || i(), c(!1);
      }, 200);
      return () => clearTimeout(d);
    }, [i]);
    return /* @__PURE__ */ l(
      CO,
      {
        open: o && !s,
        onOpenChange: (d) => !d && (u == null ? void 0 : u()),
        children: /* @__PURE__ */ S(dw, { ref: a, children: [
          e && /* @__PURE__ */ S(hw, { children: [
            e.icon && /* @__PURE__ */ l(fw, { children: /* @__PURE__ */ l(Ce, { size: "lg", icon: e.icon }) }),
            /* @__PURE__ */ l(pw, { children: e.title }),
            /* @__PURE__ */ l(vw, { children: e.description })
          ] }),
          /* @__PURE__ */ l("div", { className: "flex-grow flex-col", children: n ? /* @__PURE__ */ S("div", { className: "flex flex-col gap-4", children: [
            /* @__PURE__ */ l(Ae, { className: "h-6 w-full rounded-full" }),
            /* @__PURE__ */ l(Ae, { className: "h-6 w-full rounded-full" })
          ] }) : t }),
          r && /* @__PURE__ */ S(mw, { children: [
            r.secondary && /* @__PURE__ */ l($e, { variant: "outline", ...r.secondary }),
            /* @__PURE__ */ l($e, { variant: "default", ...r.primary })
          ] })
        ] })
      }
    );
  }
);
gw.displayName = "Dialog";
const YI = rt(
  {
    name: "Dialog",
    type: "info"
  },
  gw
), yw = Z(
  ({ children: e, ...t }, n) => /* @__PURE__ */ l("div", { ref: n, ...t, className: "relative flex flex-1 [&>div]:flex-1", children: e })
);
yw.displayName = "FullscreenLayout";
const NO = Z(function({ widgets: t, children: n }, r) {
  const o = Ge(null);
  hx(r, () => o.current);
  const { width: i } = ex(), a = !!i, s = a && i < 992;
  let c = _a.toArray(t).filter((u) => !!u);
  return s ? (c = c.map((u, d) => /* @__PURE__ */ l("div", { className: "h-full [&>div]:h-full [&>div]:shadow-none", children: u }, d)), /* @__PURE__ */ l("div", { ref: o, className: "flex flex-col gap-6 px-3 pb-3 pt-2", children: a && /* @__PURE__ */ S(we, { children: [
    /* @__PURE__ */ l(
      d6,
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
  ] }) })) : /* @__PURE__ */ l("div", { ref: o, className: "grid grid-cols-3 gap-6 px-6 pb-6 pt-2", children: a && /* @__PURE__ */ S(we, { children: [
    /* @__PURE__ */ l("div", { className: "col-span-3 flex flex-row gap-6 *:flex-1", children: c.slice(0, 3) }),
    /* @__PURE__ */ l("main", { className: "col-span-2", children: n }),
    /* @__PURE__ */ l("div", { className: "flex flex-1 flex-col gap-6", children: c.slice(3) })
  ] }) });
}), PO = 750, MO = ({ text: e, children: t }) => {
  const [n, r] = Te(!1);
  We(() => {
    if (n) {
      const i = setTimeout(() => r(!1), PO);
      return () => clearTimeout(i);
    }
  }, [n]);
  const o = async () => {
    try {
      await navigator.clipboard.writeText(e), r(!0);
    } catch {
    }
  };
  return /* @__PURE__ */ S(
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
        /* @__PURE__ */ S("div", { className: "grid", children: [
          /* @__PURE__ */ l(
            Ce,
            {
              icon: mk,
              size: "md",
              "aria-hidden": !0,
              className: A(
                "col-start-1 col-end-2 row-start-1 row-end-2",
                "opacity-0 transition-opacity duration-300",
                !n && "group-hover:opacity-100 group-focus-visible:opacity-100"
              )
            }
          ),
          /* @__PURE__ */ l(
            Ce,
            {
              icon: rg,
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
}, bw = mx(
  ({ children: e, className: t, ...n }) => /* @__PURE__ */ S(
    Vt,
    {
      ...n,
      className: A(
        "text-inherit group flex items-center gap-1.5 rounded p-1.5 text-f1-foreground",
        "no-underline hover:bg-f1-background-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-f1-border-selected-bold active:bg-f1-background-secondary-hover",
        t
      ),
      children: [
        e,
        /* @__PURE__ */ l("div", { className: "grid", children: /* @__PURE__ */ l(
          Ce,
          {
            "aria-hidden": !0,
            icon: Xa,
            size: "md",
            className: "opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100 group-active:opacity-100"
          }
        ) })
      ]
    }
  )
);
bw.displayName = "NavigateAction";
const bi = Z(
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
        children: /* @__PURE__ */ S(
          EO,
          {
            action: i,
            className: A("flex items-center gap-1.5 p-1.5", o),
            children: [
              r && (typeof r == "function" ? r({}) : /* @__PURE__ */ l(Ce, { icon: r, size: "md", "aria-hidden": "true" })),
              /* @__PURE__ */ l("div", { className: "line-clamp-5 flex-1 whitespace-pre-line text-left", children: n })
            ]
          }
        )
      }
    );
  }
);
bi.displayName = "ItemContainer";
const EO = ({
  children: e,
  action: t,
  ...n
}) => {
  const r = t.type;
  switch (r) {
    case "copy":
      return /* @__PURE__ */ l(MO, { ...t, ...n, children: e });
    case "navigate":
      return /* @__PURE__ */ l(bw, { ...t, ...n, children: e });
    case "noop":
      return /* @__PURE__ */ l("div", { ...n, children: e });
    default:
      return r;
  }
}, ww = Z(
  ({ children: e, label: t }, n) => /* @__PURE__ */ S("div", { className: "min-w-32 max-w-72", children: [
    t && /* @__PURE__ */ l("p", { className: "mb-0.5 px-1.5 text-f1-foreground-secondary", children: t }),
    /* @__PURE__ */ l("ul", { className: "flex flex-col gap-0.5", ref: n, children: e })
  ] })
);
ww.displayName = "DataList";
const xw = Z(
  ({ text: e, icon: t, action: n }, r) => /* @__PURE__ */ l(
    bi,
    {
      ref: r,
      text: e,
      leftIcon: t,
      action: bs(n, e)
    }
  )
);
xw.displayName = "DataList.Item";
const Cw = Z(
  ({ action: e, avatarUrl: t, firstName: n, lastName: r }, o) => {
    const i = `${n} ${r}`;
    return /* @__PURE__ */ l(
      bi,
      {
        ref: o,
        leftIcon: () => /* @__PURE__ */ l(
          lr,
          {
            size: "xsmall",
            src: t,
            firstName: n,
            lastName: r
          }
        ),
        text: i,
        action: bs(e, i)
      }
    );
  }
);
Cw.displayName = "PersonItem";
const Sw = Z(
  ({ avatarUrl: e, name: t, action: n }, r) => /* @__PURE__ */ l(
    bi,
    {
      ref: r,
      leftIcon: () => /* @__PURE__ */ l(Za, { name: t, size: "xsmall", src: e }),
      text: t,
      action: bs(n, t)
    }
  )
);
Sw.displayName = "CompanyItem";
const Nw = Z(
  ({ action: e, name: t }, n) => /* @__PURE__ */ l(
    bi,
    {
      ref: n,
      leftIcon: () => /* @__PURE__ */ l(bu, { name: t, size: "xsmall" }),
      text: t,
      action: bs(e, t)
    }
  )
);
Nw.displayName = "TeamItem";
const bs = (e, t) => e && e.type === "copy" ? { type: "copy", text: e.text ?? t } : e, Mo = Object.assign(ww, {
  Item: xw,
  CompanyItem: Sw,
  PersonItem: Cw,
  TeamItem: Nw
}), TO = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday"
], kO = Z(
  function({ daysOfTheWeek: t = TO, activatedDays: n = [] }, r) {
    return /* @__PURE__ */ l(
      $y,
      {
        type: "multiple",
        value: n,
        disabled: !0,
        className: "flex justify-start",
        ref: r,
        children: t.map((o) => /* @__PURE__ */ l(
          By,
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
), RO = ({ content: e }) => /* @__PURE__ */ S(we, { children: [
  e.type === "weekdays" && /* @__PURE__ */ l("li", { className: "list-none px-1.5 py-1", children: /* @__PURE__ */ l(kO, { ...e }) }),
  e.type === "person" && /* @__PURE__ */ l(Mo.PersonItem, { ...e }),
  e.type === "item" && /* @__PURE__ */ l(Mo.Item, { ...e }),
  e.type === "team" && /* @__PURE__ */ l(Mo.TeamItem, { ...e }),
  e.type === "company" && /* @__PURE__ */ l(Mo.CompanyItem, { ...e })
] }), DO = Z(
  function({ title: t, content: n, spacingAtTheBottom: r }, o) {
    const i = Array.isArray(n) ? n : [n];
    return /* @__PURE__ */ l(
      "div",
      {
        ref: o,
        className: A("flex flex-col gap-0.5", r && "pb-3"),
        children: /* @__PURE__ */ l(Mo, { label: t, children: i.map((a, s) => /* @__PURE__ */ l(RO, { content: a }, s)) })
      }
    );
  }
), AO = Z(function({ title: t, details: n }, r) {
  return /* @__PURE__ */ S("div", { ref: r, className: "flex flex-col gap-4", children: [
    !!t && /* @__PURE__ */ l("p", { className: "mb-1 pl-1.5 text-sm font-semibold text-f1-foreground-secondary", children: t.toLocaleUpperCase() }),
    /* @__PURE__ */ l("div", { className: "flex flex-col gap-3", children: n == null ? void 0 : n.map((o) => /* @__PURE__ */ l(
      DO,
      {
        title: o.title,
        content: o.content,
        spacingAtTheBottom: o.spacingAtTheBottom
      },
      o.title
    )) })
  ] });
}), Pw = Z(
  function({ children: t, sideContent: n }, r) {
    return /* @__PURE__ */ l("div", { ref: r, className: "h-full overflow-auto", children: /* @__PURE__ */ S("div", { className: "flex h-full flex-col-reverse overflow-auto text-f1-foreground sm:flex-row", children: [
      /* @__PURE__ */ l("main", { className: "h-fit min-h-full border-0 px-6 py-5 sm:basis-3/4 sm:border-r sm:border-solid sm:border-r-f1-border-secondary", children: t }),
      /* @__PURE__ */ l("aside", { className: "py-5 pl-2 pr-4 sm:basis-1/4 sm:pb-6", children: n })
    ] }) });
  }
), _O = Z(
  function({ children: t, sidepanel: n }, r) {
    return /* @__PURE__ */ l(
      Pw,
      {
        ref: r,
        sideContent: /* @__PURE__ */ l(AO, { title: n.title, details: n.items }),
        children: t
      }
    );
  }
), OO = Ye(
  "relative flex min-h-full w-full flex-col gap-4 place-self-center overflow-y-auto px-6 py-5",
  {
    variants: {
      variant: {
        narrow: "max-w-screen-lg"
      }
    }
  }
), LO = L.forwardRef(({ children: e, variant: t, className: n, ...r }, o) => /* @__PURE__ */ l(
  "section",
  {
    ref: o,
    className: A("relative flex-1 overflow-auto", n),
    ...r,
    children: /* @__PURE__ */ l("div", { className: A(OO({ variant: t })), children: e })
  }
));
LO.displayName = "StandardLayout";
const KI = rt(
  {
    name: "InfoPaneLayout",
    type: "layout"
  },
  Pw
), XI = rt(
  {
    name: "FullscreenLayout",
    type: "layout"
  },
  yw
), qI = rt(
  {
    name: "OverviewLayout",
    type: "layout"
  },
  _O
), ZI = rt(
  {
    name: "HomeLayout",
    type: "layout"
  },
  NO
), Md = {
  2: "gap-2",
  4: "gap-4",
  8: "gap-8"
}, IO = Ye("grid grid-cols-1", {
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
      ...Md
    }
  },
  defaultVariants: {
    tileSize: "md",
    gap: "4"
  }
}), FO = L.forwardRef(function({ className: t, gap: n, children: r, tileSize: o, ...i }, a) {
  return /* @__PURE__ */ l("div", { className: A("@container", "grow"), ref: a, ...i, children: /* @__PURE__ */ l(
    "div",
    {
      className: A(IO({ gap: n, tileSize: o }), t),
      ref: a,
      ...i,
      children: r
    }
  ) });
}), VO = Ye("flex", {
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
}), Mw = Z(function({
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
  width: v,
  ...g
}, p) {
  return /* @__PURE__ */ l(
    "div",
    {
      className: A(
        VO({
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
          width: v
        }),
        t
      ),
      ref: p,
      ...g
    }
  );
}), $O = Ye("flex-row", {
  variants: {
    gap: {
      ...Md
    },
    wrap: {
      true: "flex-wrap"
    }
  },
  defaultVariants: {
    wrap: !0
  }
}), BO = L.forwardRef(function({ className: t, gap: n, wrap: r, ...o }, i) {
  return /* @__PURE__ */ l(
    Mw,
    {
      className: A($O({ gap: n, wrap: r }), t),
      ref: i,
      ...o
    }
  );
}), WO = Ye("flex-col", {
  variants: {
    gap: {
      ...Md
    }
  },
  defaultVariants: {}
}), jO = Z(function({ className: t, gap: n, children: r, ...o }, i) {
  return /* @__PURE__ */ l(
    Mw,
    {
      className: A(WO({ gap: n }), t),
      ref: i,
      ...o,
      children: r
    }
  );
}), QI = rt(
  {
    name: "Stack",
    type: "layout"
  },
  jO
), JI = rt(
  {
    name: "Split",
    type: "layout"
  },
  BO
), e9 = rt(
  {
    name: "AutoGrid",
    type: "layout"
  },
  FO
), UO = ({ children: e }) => {
  const { enabled: t } = Um();
  return /* @__PURE__ */ l(
    "div",
    {
      className: A(
        "inline-flex ring-1 ring-inset ring-transparent transition-all duration-150",
        t && "select-none overflow-hidden rounded-sm bg-f1-background-tertiary ring-f1-border-secondary"
      ),
      "aria-hidden": t,
      children: /* @__PURE__ */ l(
        wt.div,
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
}, ws = m.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l(
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
ws.displayName = "Card";
const xs = m.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l(
  "div",
  {
    ref: n,
    className: A("flex flex-row gap-1.5", e),
    ...t
  }
));
xs.displayName = "CardHeader";
const Cs = m.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l("h3", { ref: n, className: A("text-base font-medium", e), ...t }));
Cs.displayName = "CardTitle";
const Ed = m.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l(
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
Ed.displayName = "CardSubtitle";
const HO = m.forwardRef(({ className: e, content: t }, n) => /* @__PURE__ */ l(
  "div",
  {
    ref: n,
    className: A("-ml-1 flex h-6 w-6 items-center justify-center", e),
    children: /* @__PURE__ */ l($m, { children: /* @__PURE__ */ S(Bm, { children: [
      /* @__PURE__ */ l(
        Wm,
        {
          className: "h-5 w-5 cursor-help text-f1-foreground-secondary",
          "aria-label": t,
          children: /* @__PURE__ */ l(Ce, { icon: dk, size: "md" })
        }
      ),
      /* @__PURE__ */ l(jm, { children: /* @__PURE__ */ l("p", { children: t }) })
    ] }) })
  }
));
HO.displayName = "CardInfo";
const Ew = m.forwardRef(({ className: e, title: t, ...n }) => /* @__PURE__ */ l(Vt, { className: e, "aria-label": t, ...n, children: /* @__PURE__ */ l(
  $e,
  {
    icon: Xa,
    label: t ?? "",
    variant: "outline",
    size: "sm",
    hideLabel: !0
  }
) }));
Ew.displayName = "CardLink";
const Ss = m.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l("div", { ref: n, className: A("flex grow flex-col", e), ...t }));
Ss.displayName = "CardContent";
const Td = m.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l("div", { ref: n, className: A("flex items-center", e), ...t }));
Td.displayName = "CardFooter";
const zO = m.forwardRef(function({ className: t, ...n }, r) {
  return /* @__PURE__ */ l(
    "div",
    {
      ref: r,
      className: A("flex text-2xl font-semibold", t),
      ...n
    }
  );
});
Td.displayName = "CardComment";
const GO = () => /* @__PURE__ */ l("div", { className: "min-h-[0.15rem] min-w-[0.15rem] rounded-full bg-f1-foreground-secondary" }), YO = Z(function({ header: t, children: n, action: r, summaries: o, alert: i, status: a, fullHeight: s = !1 }, c) {
  const { enabled: u, toggle: d } = Um();
  We(() => {
    if (i && a)
      throw Error(
        "You cannot pass both alert and status at the same time to this component"
      );
  }, [i, a]);
  const f = (v) => !!v && !(L.isValidElement(v) && v.type === L.Fragment && L.Children.count(v.props.children) === 0), h = () => {
    var v, g;
    (g = (v = t == null ? void 0 : t.link) == null ? void 0 : v.onClick) == null || g.call(v);
  };
  return /* @__PURE__ */ S(
    ws,
    {
      className: A(
        s ? "h-full" : "",
        "relative flex gap-4 border-f1-border-secondary"
      ),
      ref: c,
      children: [
        t && /* @__PURE__ */ l(xs, { className: "-mr-1 -mt-1", children: /* @__PURE__ */ S("div", { className: "flex w-full flex-1 flex-col gap-4", children: [
          /* @__PURE__ */ S("div", { className: "flex flex-1 flex-row flex-nowrap items-center justify-between gap-2", children: [
            /* @__PURE__ */ S("div", { className: "flex min-h-6 grow flex-row items-center gap-1 truncate", children: [
              t.title && /* @__PURE__ */ l(Cs, { className: "truncate", children: t.title }),
              t.subtitle && /* @__PURE__ */ S("div", { className: "flex flex-row items-center gap-1", children: [
                /* @__PURE__ */ l(GO, {}),
                /* @__PURE__ */ l(Ed, { className: "truncate", children: t.subtitle })
              ] }),
              t.count && /* @__PURE__ */ l("div", { className: "ml-0.5", children: /* @__PURE__ */ l(rd, { value: t.count }) })
            ] }),
            /* @__PURE__ */ S("div", { className: "flex flex-row items-center gap-3", children: [
              i && /* @__PURE__ */ l(id, { text: i, level: "critical" }),
              a && /* @__PURE__ */ l(qo, { text: a.text, variant: a.variant }),
              t.link && /* @__PURE__ */ l(
                Ew,
                {
                  onClick: h,
                  href: t.link.url,
                  title: t.link.title
                }
              )
            ] })
          ] }),
          t.comment && /* @__PURE__ */ S("div", { className: "flex flex-row items-center gap-3 overflow-visible", children: [
            /* @__PURE__ */ l(UO, { children: /* @__PURE__ */ l(zO, { children: t.comment }) }),
            !!t.canBeBlurred && /* @__PURE__ */ l("span", { children: /* @__PURE__ */ l(
              $e,
              {
                icon: u ? ik : sk,
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
        /* @__PURE__ */ S(Ss, { className: "flex h-full flex-col gap-4", children: [
          o && /* @__PURE__ */ l("div", { className: "flex flex-row", children: o.map((v, g) => /* @__PURE__ */ S("div", { className: "grow", children: [
            /* @__PURE__ */ l("div", { className: "mb-0.5 text-sm text-f1-foreground-secondary", children: v.label }),
            /* @__PURE__ */ S("div", { className: "flex flex-row items-end gap-0.5 text-xl font-semibold", children: [
              !!v.prefixUnit && /* @__PURE__ */ l("div", { className: "text-lg font-medium", children: v.prefixUnit }),
              v.value,
              !!v.postfixUnit && /* @__PURE__ */ l("div", { className: "text-lg font-medium", children: v.postfixUnit })
            ] })
          ] }, g)) }),
          L.Children.toArray(n).filter(f).map((v, g) => /* @__PURE__ */ S(we, { children: [
            g > 0 && /* @__PURE__ */ l(C1, { bare: !0 }),
            v
          ] }))
        ] }),
        r && /* @__PURE__ */ l(Td, { children: /* @__PURE__ */ l($e, { variant: "neutral", size: "sm", ...r }) })
      ]
    }
  );
}), KO = Ye("", {
  variants: {
    height: {
      sm: "h-36",
      md: "h-48",
      lg: "h-60"
    }
  }
}), XO = Z(
  function({ header: t, height: n }, r) {
    return /* @__PURE__ */ S(
      ws,
      {
        className: "flex gap-4 border-f1-border-secondary",
        ref: r,
        "aria-live": "polite",
        "aria-busy": !0,
        children: [
          /* @__PURE__ */ l(xs, { className: "-mr-1 -mt-1", children: /* @__PURE__ */ S(
            "div",
            {
              className: "flex h-6 w-full flex-row items-center gap-1.5",
              "aria-hidden": !0,
              children: [
                t != null && t.title ? /* @__PURE__ */ l(Cs, { children: t.title }) : /* @__PURE__ */ l(Ae, { className: "h-4 w-full max-w-16" }),
                (t == null ? void 0 : t.subtitle) && /* @__PURE__ */ l(Ed, { children: t.subtitle })
              ]
            }
          ) }),
          /* @__PURE__ */ l(
            Ss,
            {
              "aria-hidden": !0,
              className: A(KO({ height: n })),
              children: [...Array(4)].map((o, i) => /* @__PURE__ */ l(
                Ae,
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
), Fr = ht(YO, XO), Ft = Object.assign(
  Z(function({ chart: t, summaries: n, ...r }, o) {
    return /* @__PURE__ */ l(Fr, { ref: o, ...r, summaries: n, children: t && /* @__PURE__ */ l("div", { className: "min-h-52 min-w-52 grow pt-2", children: t }) });
  }),
  {
    Skeleton: Fr.Skeleton
  }
), qO = ht(
  Z(function({ canBeBlurred: t, ...n }, r) {
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
      Ft,
      {
        ref: r,
        ...o,
        chart: /* @__PURE__ */ l(tx, { ...i, canBeBlurred: t })
      }
    );
  }),
  Ft.Skeleton
), ZO = Z(function(t, n) {
  return /* @__PURE__ */ l(
    Ft,
    {
      ref: n,
      ...t,
      chart: /* @__PURE__ */ l(nx, { aspect: null, yAxis: { hide: !0 }, ...t.chart })
    }
  );
}), QO = ht(
  ZO,
  Ft.Skeleton
), JO = ht(
  Z(
    function(t, n) {
      return /* @__PURE__ */ l(
        Ft,
        {
          ref: n,
          ...t,
          chart: /* @__PURE__ */ l(rx, { aspect: null, yAxis: { hide: !0 }, ...t.chart })
        }
      );
    }
  ),
  Ft.Skeleton
), eL = ht(
  Z(
    function(t, n) {
      return /* @__PURE__ */ l(
        Ft,
        {
          ref: n,
          ...t,
          chart: /* @__PURE__ */ l(ox, { aspect: null, ...t.chart })
        }
      );
    }
  ),
  Ft.Skeleton
), tL = ht(
  Z(
    function(t, n) {
      return /* @__PURE__ */ l(Ft, { ref: n, ...t, chart: null });
    }
  ),
  Ft.Skeleton
), nL = ht(
  Z(
    function(t, n) {
      return /* @__PURE__ */ l(
        Ft,
        {
          ref: n,
          ...t,
          chart: /* @__PURE__ */ l(
            ix,
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
  Ft.Skeleton
), t9 = rt(
  {
    name: "AreaChartWidget",
    type: "info"
  },
  qO
), n9 = rt(
  {
    name: "BarChartWidget",
    type: "info"
  },
  QO
), r9 = rt(
  {
    name: "LineChartWidget",
    type: "info"
  },
  JO
), o9 = rt(
  {
    name: "PieChartWidget",
    type: "info"
  },
  eL
), i9 = rt(
  {
    name: "VerticalBarChartWidget",
    type: "info"
  },
  nL
), a9 = rt(
  {
    name: "SummariesWidget",
    type: "info"
  },
  tL
), rL = (e, t) => /* @__PURE__ */ S(
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
      /* @__PURE__ */ S("defs", { children: [
        /* @__PURE__ */ S(
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
        /* @__PURE__ */ S(
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
        /* @__PURE__ */ S(
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
        /* @__PURE__ */ S(
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
        /* @__PURE__ */ S(
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
), oL = Z(rL), iL = (e, t) => /* @__PURE__ */ S(
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
      /* @__PURE__ */ l("defs", { children: /* @__PURE__ */ S(
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
), aL = Z(iL), sL = {
  "line-chart": "border-f1-border-accent-alpha20",
  "bar-chart": "border-f1-border-promote-alpha30"
}, lL = {
  "line-chart": "min-h-48",
  "bar-chart": "min-h-64"
}, cL = {
  "line-chart": "from-f1-background-accent-alpha5",
  "bar-chart": "from-f1-background-promote-alpha5"
}, uL = {
  "line-chart": "default",
  "bar-chart": "promote"
}, s9 = Z(
  function({ title: t, content: n, buttonLabel: r, buttonIcon: o, buttonAction: i, type: a }, s) {
    const c = sL[a], u = lL[a], d = cL[a], f = uL[a];
    return /* @__PURE__ */ S(
      ws,
      {
        className: A(
          "relative flex gap-4 overflow-hidden border-dashed",
          c
        ),
        ref: s,
        children: [
          /* @__PURE__ */ l(xs, { className: "-mt-0.5", children: /* @__PURE__ */ l(Cs, { children: t }) }),
          /* @__PURE__ */ S(Ss, { className: A("flex flex-col gap-4", u), children: [
            /* @__PURE__ */ S(
              "div",
              {
                className: A(
                  "absolute -top-12 bottom-0 left-0 right-0 flex flex-col justify-end bg-gradient-to-b to-transparent",
                  d
                ),
                children: [
                  a === "bar-chart" && /* @__PURE__ */ l("div", { className: "absolute bottom-1 left-4 right-4", children: /* @__PURE__ */ l(oL, { className: "w-full" }) }),
                  a === "line-chart" && /* @__PURE__ */ l(aL, { className: "w-full" })
                ]
              }
            ),
            /* @__PURE__ */ S("div", { className: "relative flex min-h-28 flex-1 flex-col items-start gap-5", children: [
              /* @__PURE__ */ l("p", { className: "flex w-3/4 text-xl font-semibold", children: n }),
              r && /* @__PURE__ */ l(
                $e,
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
), l9 = Z(function({ events: t, limit: n = 3 }, r) {
  return t.length ? /* @__PURE__ */ l("div", { className: "flex flex-col gap-2", ref: r, children: t.slice(0, n).map((o) => /* @__PURE__ */ l(N1, { ...o }, o.title)) }) : null;
});
function c9({
  title: e,
  subtitle: t,
  data: n,
  helpText: r,
  legend: o = !1
}) {
  return /* @__PURE__ */ S("div", { children: [
    /* @__PURE__ */ S("div", { className: "flex items-baseline justify-between", children: [
      /* @__PURE__ */ l("span", { className: "text-2xl font-semibold", children: e }),
      /* @__PURE__ */ l("span", { className: "text-xl text-f1-foreground-secondary", children: t })
    ] }),
    /* @__PURE__ */ l("div", { className: "mt-2", children: /* @__PURE__ */ l(ax, { data: n, legend: o }) }),
    !!r && /* @__PURE__ */ l("div", { className: "mt-1", children: /* @__PURE__ */ l("span", { className: "text-sm", children: r }) })
  ] });
}
const xl = "--:--", dL = (e) => e && e > 0 ? {
  value: e,
  color: Io.empty
} : e && e < 0 ? {
  value: Math.abs(e),
  color: Io.overtime
} : {
  value: 1,
  color: Io.empty
}, fL = (e = [], t) => {
  const n = dL(t);
  return [
    ...t ? e.map((r) => ({
      value: Math.floor(
        (r.to.getTime() - r.from.getTime()) / 6e4
      ),
      color: Io[r.variant]
    })) : [],
    n
  ];
}, hL = ({
  data: e = [],
  remainingMinutes: t
}) => {
  var v, g;
  const n = (v = e.find((p) => p.variant === "clocked-in")) == null ? void 0 : v.from, r = (g = e.find(
    (p) => p.variant === "clocked-out"
  )) == null ? void 0 : g.from, o = e[e.length - 1], i = e.slice().reverse().find((p) => p.variant === "clocked-in"), a = n ? ll(n) : xl, s = t && t < 0 ? i ? ll(i.to) : xl : r ? ll(r) : xl, u = (o == null ? void 0 : o.variant) === "clocked-in" ? e.reduce((p, y) => y.variant === "clocked-in" ? p + (y.to.getTime() - y.from.getTime()) : p, 0) : (o == null ? void 0 : o.to.getTime()) - (o == null ? void 0 : o.from.getTime()) || 0, d = Math.floor(u / (1e3 * 60 * 60)), f = Math.floor(u % (1e3 * 60 * 60) / (1e3 * 60)), h = `${d.toString().padStart(2, "0")}:${f.toString().padStart(2, "0")}`;
  return {
    primaryLabel: a,
    secondaryLabel: s,
    time: h
  };
}, Io = {
  "clocked-in": "hsl(var(--positive-50))",
  break: "hsl(var(--promote-50))",
  empty: "hsl(var(--neutral-10))",
  "clocked-out": "hsl(var(--neutral-10))",
  overtime: "hsl(var(--warning-50))"
};
function mL({
  data: e = [],
  remainingMinutes: t
}) {
  const n = fL(e, t), { primaryLabel: r, secondaryLabel: o, time: i } = hL({
    data: e,
    remainingMinutes: t
  });
  return /* @__PURE__ */ S("div", { className: "relative h-40 w-40", children: [
    /* @__PURE__ */ l(sx, { width: 156, height: 156, children: /* @__PURE__ */ l(
      lx,
      {
        data: n,
        cx: 74,
        cy: 74,
        innerRadius: 62,
        outerRadius: 74,
        startAngle: 225,
        endAngle: -45,
        paddingAngle: 2,
        cornerRadius: 4,
        dataKey: "value",
        strokeWidth: 0,
        isAnimationActive: !1,
        children: n.map((a, s) => /* @__PURE__ */ l(
          cx,
          {
            fill: a.color,
            role: "presentation",
            "aria-label": `${a.value} minutes`
          },
          `cell-${s}`
        ))
      }
    ) }),
    /* @__PURE__ */ l("div", { className: "absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ l("span", { className: "text-2xl font-semibold", children: i }) }),
    /* @__PURE__ */ S("div", { className: "absolute bottom-3 flex w-full justify-between px-8", children: [
      /* @__PURE__ */ l("span", { className: "text-sm font-medium opacity-60", children: r }),
      /* @__PURE__ */ l("span", { className: "text-sm font-medium opacity-60", children: o })
    ] })
  ] });
}
const pL = ({
  data: e = [],
  labels: t,
  remainingMinutes: n
}) => {
  const r = e[e.length - 1], o = (r == null ? void 0 : r.variant) || "clocked-out", i = {
    "clocked-out": t.clockedOut,
    "clocked-in": t.clockedIn,
    break: t.onBreak
  }[o], a = (() => {
    if (n === void 0) return;
    const c = Math.abs(n), u = Math.floor(c / 60), d = Math.floor(c % 60), f = `${u.toString().padStart(2, "0")}:${d.toString().padStart(2, "0")}`;
    return n >= 0 ? `${t.remainingTime} ${f}` : `${t.overtime} ${f}`;
  })(), s = Io[o];
  return {
    status: o,
    statusText: i,
    subtitle: a,
    statusColor: s
  };
};
function u9({
  remainingMinutes: e,
  data: t = [],
  labels: n,
  onClockIn: r,
  onClockOut: o,
  onBreak: i,
  collapsed: a = !1
}) {
  const { status: s, statusText: c, subtitle: u, statusColor: d } = pL({
    data: t,
    labels: n,
    remainingMinutes: e
  });
  return /* @__PURE__ */ S(
    "div",
    {
      className: A("flex items-center gap-10", a && "flex-col gap-2"),
      children: [
        /* @__PURE__ */ S("div", { className: A("flex-1 space-y-4", a && "order-2"), children: [
          /* @__PURE__ */ S(
            "div",
            {
              className: A(
                "space-y-0.5",
                a && "flex flex-col items-center"
              ),
              children: [
                /* @__PURE__ */ S("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ l("span", { className: "text-xl font-semibold", children: c }),
                  /* @__PURE__ */ S("div", { className: "relative aspect-square h-4", children: [
                    /* @__PURE__ */ l(
                      "div",
                      {
                        className: "absolute inset-0 rounded-full opacity-20",
                        style: {
                          backgroundColor: d
                        }
                      }
                    ),
                    /* @__PURE__ */ l(
                      "div",
                      {
                        className: "absolute inset-[3px] rounded-full",
                        style: {
                          backgroundColor: d
                        }
                      }
                    )
                  ] })
                ] }),
                u && /* @__PURE__ */ l("p", { className: "text-f1-foreground-secondary", children: u })
              ]
            }
          ),
          /* @__PURE__ */ S("div", { className: A("flex gap-2", a && "justify-center"), children: [
            s === "clocked-out" && /* @__PURE__ */ l("div", { className: A(a && "mr-3"), children: /* @__PURE__ */ l(
              $e,
              {
                onClick: r,
                label: n.clockIn,
                icon: bh
              }
            ) }),
            s === "clocked-in" && /* @__PURE__ */ S(we, { children: [
              /* @__PURE__ */ l(
                $e,
                {
                  onClick: i,
                  label: n.break,
                  variant: "neutral",
                  icon: Mk,
                  hideLabel: !0
                }
              ),
              /* @__PURE__ */ l(
                $e,
                {
                  onClick: o,
                  label: n.clockOut,
                  variant: "neutral",
                  icon: wh
                }
              )
            ] }),
            s === "break" && /* @__PURE__ */ S(we, { children: [
              /* @__PURE__ */ l(
                $e,
                {
                  onClick: o,
                  label: n.clockOut,
                  variant: "neutral",
                  icon: wh,
                  hideLabel: !0
                }
              ),
              /* @__PURE__ */ l(
                $e,
                {
                  onClick: r,
                  label: n.resume,
                  icon: bh
                }
              )
            ] })
          ] })
        ] }),
        /* @__PURE__ */ l(mL, { data: t, remainingMinutes: e })
      ]
    }
  );
}
const vL = ({ onClick: e, children: t }) => {
  const n = "block rounded-lg border border-solid border-transparent p-[1px] -m-1";
  return e ? /* @__PURE__ */ l(
    "a",
    {
      className: A(
        n,
        "focus:border-f1-background-selected-bold focus:outline-none"
      ),
      onClick: e,
      tabIndex: 0,
      children: t
    }
  ) : /* @__PURE__ */ l("div", { className: n, tabIndex: 1, children: t });
};
function d9({
  label: e,
  count: t,
  icon: n,
  iconClassName: r,
  onClick: o
}) {
  return /* @__PURE__ */ l(vL, { onClick: o, children: /* @__PURE__ */ S("div", { className: "flex cursor-pointer flex-col gap-0.5 rounded-md border border-solid border-f1-border-secondary px-3 py-2.5 hover:border-f1-border-hover", children: [
    /* @__PURE__ */ S("div", { className: "flex flex-row items-center", children: [
      /* @__PURE__ */ l("p", { className: "line-clamp-1 flex-1 text-f1-foreground-secondary", children: e }),
      /* @__PURE__ */ l(Ce, { icon: n, size: "md", className: r })
    ] }),
    /* @__PURE__ */ l("p", { className: "line-clamp-1 flex-1 text-2xl font-semibold text-f1-foreground", children: t })
  ] }) });
}
const gL = Z(
  function({ content: t, label: n, icon: r, color: o }, i) {
    return /* @__PURE__ */ S("div", { className: "grid-row-2 col-span-1 grid", ref: i, children: [
      /* @__PURE__ */ l("p", { className: "text-2xl font-semibold", children: t }),
      /* @__PURE__ */ S("div", { className: "flex items-center gap-1", children: [
        /* @__PURE__ */ l(
          "p",
          {
            className: "line-clamp-1 text-f1-foreground-secondary",
            title: n,
            children: n
          }
        ),
        r && /* @__PURE__ */ l("span", { className: A("flex", o), children: /* @__PURE__ */ l(Ce, { icon: r }) })
      ] })
    ] }, n);
  }
), f9 = Z(
  function({ items: t }, n) {
    return /* @__PURE__ */ l(
      "div",
      {
        ref: n,
        className: "grid auto-cols-fr grid-flow-col items-end gap-x-3",
        children: t.map(({ label: r, content: o, icon: i, color: a }) => /* @__PURE__ */ l(
          gL,
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
), yL = ({ onClick: e, className: t, children: n }) => e ? /* @__PURE__ */ l("a", { className: t, onClick: e, tabIndex: 0, children: n }) : /* @__PURE__ */ l("div", { className: t, tabIndex: -1, children: n });
function bL({
  id: e,
  title: t,
  subtitle: n,
  icon: r = VT,
  onClick: o
}) {
  const i = A(
    "flex flex-row gap-2 rounded-md border border-solid border-transparent p-2 text-f1-foreground",
    o ? "cursor-pointer hover:bg-f1-background-tertiary focus:border-f1-background-selected-bold focus:outline-none" : void 0
  );
  return /* @__PURE__ */ S(yL, { onClick: (s) => {
    s.preventDefault(), o == null || o(e);
  }, className: i, children: [
    /* @__PURE__ */ l(us, { icon: r, size: "md" }),
    /* @__PURE__ */ S("div", { className: "flex-1", children: [
      /* @__PURE__ */ l("p", { className: "line-clamp-1 font-medium", children: t }),
      /* @__PURE__ */ l("p", { className: "line-clamp-1 text-f1-foreground-secondary", children: n })
    ] })
  ] });
}
function h9({ items: e, onClickItem: t }) {
  return /* @__PURE__ */ l("div", { className: "flex flex-col gap-2", children: e.map((n) => /* @__PURE__ */ l(bL, { ...n, onClick: t }, n.id)) });
}
const wL = ({ onClick: e, className: t, children: n }) => e ? /* @__PURE__ */ l("a", { className: t, onClick: e, tabIndex: 0, children: n }) : /* @__PURE__ */ l("div", { className: t, tabIndex: -1, children: n });
function Tw({
  id: e,
  title: t,
  alert: n,
  rawTag: r,
  count: o,
  icon: i,
  rightIcon: a,
  iconClassName: s = "text-f1-icon-secondary",
  rightIconClassName: c = "text-f1-icon-secondary",
  onClick: u
}) {
  const d = A(
    "flex flex-row items-start gap-1 rounded-md border border-solid border-transparent px-2 py-1.5 text-f1-foreground",
    u ? "cursor-pointer hover:bg-f1-background-tertiary focus:border-f1-background-selected-bold focus:outline-none" : void 0
  );
  return /* @__PURE__ */ S(wL, { onClick: (h) => {
    h.preventDefault(), u == null || u(e);
  }, className: d, children: [
    /* @__PURE__ */ S("div", { className: "flex flex-1 flex-row items-start gap-1", children: [
      i && /* @__PURE__ */ l(Ce, { icon: i, size: "md", className: A("mt-0.5", s) }),
      /* @__PURE__ */ l("p", { className: "mt-0.5 line-clamp-2 font-medium", children: t }),
      a && /* @__PURE__ */ l(
        Ce,
        {
          icon: a,
          size: "md",
          className: A("mt-0.5", c)
        }
      )
    ] }),
    /* @__PURE__ */ S("div", { className: "flex flex-row items-center gap-2", children: [
      n && /* @__PURE__ */ l(id, { ...n }),
      r && /* @__PURE__ */ l(nd, { ...r }),
      !!o && /* @__PURE__ */ l(rd, { value: o })
    ] })
  ] });
}
function m9({ items: e, onClickItem: t }) {
  return /* @__PURE__ */ l("div", { className: "flex flex-col gap-1", children: e.map((n) => /* @__PURE__ */ l(Tw, { ...n, onClick: t }, n.id)) });
}
function xL({
  task: e,
  status: t,
  onClick: n,
  hideIcon: r = !1
}) {
  var a;
  const o = () => {
    n == null || n(e);
  }, i = Et(() => {
    if (!r) {
      if (t === "todo")
        return ek;
      if (t === "in-progress")
        return ck;
    }
  }, [t, r]);
  return /* @__PURE__ */ l(
    Tw,
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
        icon: BT
      } : void 0,
      count: e.counter,
      onClick: o
    }
  );
}
function p9({
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
    ).map(({ id: d, text: f, badge: h, counter: v }) => ({
      id: d,
      text: f,
      badge: h,
      counter: v,
      status: u
    }))
  ), s = !a.length;
  return /* @__PURE__ */ l("div", { className: "flex flex-col gap-0", children: s ? /* @__PURE__ */ l("p", { className: "pl-2 font-medium", children: o }) : a.slice(0, r).map((c) => /* @__PURE__ */ l(
    xL,
    {
      task: c,
      status: c.status,
      hideIcon: n,
      onClick: t
    },
    c.id
  )) });
}
const CL = ({ title: e, info: t }) => /* @__PURE__ */ S("div", { className: "flex items-center justify-between", children: [
  /* @__PURE__ */ l("p", { className: "flex text-f1-foreground-secondary", children: e }),
  /* @__PURE__ */ l("div", { className: "basis-16 justify-self-end text-right font-medium", children: t })
] }), v9 = Z(
  function({ title: t, list: n }, r) {
    return /* @__PURE__ */ S("div", { ref: r, className: "flex flex-col gap-2", children: [
      t && /* @__PURE__ */ l("div", { className: "font-medium", children: t }),
      n.map((o) => /* @__PURE__ */ l(CL, { title: o.title, info: o.info }, o.title))
    ] });
  }
);
var SL = Object.defineProperty, NL = Object.defineProperties, PL = Object.getOwnPropertyDescriptors, ka = Object.getOwnPropertySymbols, kw = Object.prototype.hasOwnProperty, Rw = Object.prototype.propertyIsEnumerable, Am = (e, t, n) => t in e ? SL(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, Ot = (e, t) => {
  for (var n in t || (t = {})) kw.call(t, n) && Am(e, n, t[n]);
  if (ka) for (var n of ka(t)) Rw.call(t, n) && Am(e, n, t[n]);
  return e;
}, Ns = (e, t) => NL(e, PL(t)), ML = (e, t) => {
  var n = {};
  for (var r in e) kw.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && ka) for (var r of ka(e)) t.indexOf(r) < 0 && Rw.call(e, r) && (n[r] = e[r]);
  return n;
}, EL = (e) => e.right - e.left < 5 || e.bottom && e.bottom - e.top < 5, TL = ({ spotsList: e, usedSpot: t }) => e.some((n) => n !== t && t.left === n.left), kL = ({ position: e, spot: t, stone: n }) => {
  if (e.left > t.left && t.right >= e.left && e.top + n.height > t.top) {
    if (t.bottom && t.bottom < e.top) return t;
    let r = Ot({}, t);
    return r.right = e.left, r;
  }
  return null;
}, RL = ({ position: e, stone: t, spot: n }) => {
  if (e.left + t.width > n.left && e.top >= n.top) {
    if (n.bottom && n.bottom < e.top || n.right < e.left) return n;
    let r = Ot({}, n);
    return r.bottom = e.top, r;
  }
  return null;
}, DL = ({ stone: e, position: t, spotsList: n, optimalSpot: r }) => {
  let o = Ot({}, r);
  return o.left = t.left + e.width, EL(o) || TL({ usedSpot: o, spotsList: n }) ? null : o;
}, AL = ({ spots: e, position: t, optimalSpot: n, stone: r }) => e.map((o, i, a) => {
  if (o === n) return DL({ stone: r, position: t, optimalSpot: n, spotsList: a });
  let s = kL({ position: t, spot: o, stone: r });
  return s || RL({ position: t, stone: r, spot: o }) || o;
});
function _L(e, t) {
  for (let n = 0, r = t.length; n < r; n++) {
    let o = t[n];
    if (e(o)) return o;
  }
  return null;
}
var OL = (e, t) => t.filter(e), LL = (e, t) => [...t].sort(e), IL = (e, t) => e.top === t.top ? e.left < t.left ? -1 : 1 : e.top < t.top ? -1 : 1, FL = (e) => LL(IL, e), VL = ({ availableSpots: e, optimalSpot: t, containerSize: n, stone: r }) => {
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
}, $L = (e, t) => {
  let n = e.right - e.left >= t.width;
  if (!e.bottom) return n;
  let r = e.bottom - e.top >= t.height;
  return n && r;
}, BL = ({ availableSpots: e, stone: t }) => _L((n) => $L(n, t), e);
function WL({ stone: e, availableSpots: t, containerSize: n }) {
  let r = BL({ availableSpots: t, stone: e }), o = { left: r.left, top: r.top }, i = VL({ optimalSpot: r, availableSpots: t.filter((c) => c !== r), stone: e, containerSize: n }), a = [...t, i], s = AL({ spots: a, position: o, optimalSpot: r, stone: e });
  return a = [...OL(Boolean, s)], a = FL(a), { position: o, availableSpots: a };
}
var jL = ({ stones: e, containerSize: t }) => {
  let n = { positions: [], containerHeight: 0, availableSpots: [] };
  if (!e.length) return n;
  let r = 0, o = [], i = [{ top: 0, left: 0, right: t }];
  for (let a of e) {
    let s = WL({ availableSpots: i, stone: a, containerSize: t }), c = s.position.top + a.height;
    r < c && (r = c), o.push(s.position), i = s.availableSpots;
  }
  return { availableSpots: i, positions: o, containerHeight: r };
}, UL = (e) => e.reduce((t, n) => {
  if (!n) return t;
  let r = n.getBoundingClientRect();
  return t.push({ width: r.width, height: r.height }), t;
}, []), HL = ({ boxesRefs: e, wrapperRef: t, children: n, windowWidth: r, wrapperWidth: o }) => {
  let [{ positions: i, containerHeight: a, stones: s, availableSpots: c }, u] = Te({ positions: [], containerHeight: null, stones: [], availableSpots: [] });
  return We(() => {
    var d, f;
    let h = UL(e.current), v = (f = (d = t.current) == null ? void 0 : d.offsetWidth) != null ? f : 0;
    if (v === null) return;
    let g = jL({ stones: h, containerSize: v });
    u(Ns(Ot({}, g), { stones: h }));
  }, [n, e, t, r, o]), { positions: i, containerHeight: a, stones: s, availableSpots: c };
}, zL = (e) => ({ fade: `${e}ms opacity ease`, fadeMove: `
    ${e}ms opacity ease,
    ${e}ms top ease,
    ${e}ms left ease
  `, move: `
    ${e}ms top ease,
    ${e}ms left ease
  ` }), GL = ({ transition: e, transitionDuration: t }) => e ? { transition: zL(t)[e] } : null, YL = (e) => e ? Ns(Ot({}, e), { opacity: 1 }) : { opacity: 0, top: 0, left: 0 }, KL = ({ style: e, position: t, transition: n, transitionDuration: r }) => Ot(Ot(Ns(Ot({}, e), { position: "absolute" }), YL(t)), GL({ transition: n, transitionDuration: r }));
function XL(e, t, n) {
  let r;
  return function(...o) {
    r && clearTimeout(r), r = setTimeout(function() {
      r = null, e.apply(null, o);
    }, t);
  };
}
var qL = () => {
  let [e, t] = Te(), n = Ge(XL(t, 300));
  return We(() => {
    let r = () => {
      n.current(window.innerWidth);
    };
    return window.addEventListener("resize", r), () => {
      window.removeEventListener("resize", r);
    };
  }, []), e;
}, ZL = (e) => {
  let [t, n] = Te(null);
  return We(() => {
    let r = new ResizeObserver((o) => {
      for (let i of o) n(i.contentRect.width);
    });
    return e.current && r.observe(e.current), () => {
      r.disconnect();
    };
  }, [e]), t;
}, QL = (e) => {
  var t = e, { children: n, style: r, transition: o = !1, transitionDuration: i = 500, transitionStep: a = 50 } = t, s = ML(t, ["children", "style", "transition", "transitionDuration", "transitionStep"]);
  let c = Ge([]), u = Ge(null), d = qL(), f = ZL(u), { positions: h, containerHeight: v } = HL({ boxesRefs: c, wrapperRef: u, children: n, windowWidth: d, wrapperWidth: f }), g = Ot({ minHeight: v ?? 0, position: "relative" }, r);
  return l("div", Ns(Ot({ ref: u, style: g }, s), { children: _a.map(n, (p, y) => {
    if (typeof p != "object" || !p || !("type" in p)) return p;
    let b = { style: KL({ style: p.props.style, position: h[y], transition: o, transitionDuration: i }), ref: (w) => c.current[y] = w };
    return px(p, Ot(Ot({}, p.props), b));
  }) }));
};
const JL = { sm: 340, md: 480, lg: 640 }, _m = Z(
  function({ children: t, widgetWidth: n = "sm" }, r) {
    const o = JL[n], [i, a] = Te(), s = _a.toArray(t), c = Ge(null);
    return We(() => {
      const u = () => {
        var f;
        const d = (f = c.current) == null ? void 0 : f.offsetWidth;
        d && a(Math.floor(d / o) || 1);
      };
      return u(), window.addEventListener("resize", u), () => {
        window.removeEventListener("resize", u);
      };
    }, [a, o]), /* @__PURE__ */ l("div", { ref: r, className: "text-f1-foreground", children: /* @__PURE__ */ l("div", { ref: c, children: i === 1 ? /* @__PURE__ */ l("div", { className: "flex flex-col gap-4 *:shadow", children: t }) : i && i > 1 && /* @__PURE__ */ l("div", { className: "relative -mr-4", children: /* @__PURE__ */ l(QL, { children: s.map((u, d) => /* @__PURE__ */ l(
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
), eI = ["sm", "lg", "md", "md", "lg", "sm", "lg", "lg", "sm", "sm", "md", "md"], g9 = ht(_m, () => /* @__PURE__ */ l(f0, { children: /* @__PURE__ */ l(_m, { children: eI.map((e, t) => /* @__PURE__ */ l(Fr.Skeleton, { height: e }, t)) }) })), Om = ({ children: e }) => /* @__PURE__ */ l("div", { className: "flex min-h-40 flex-row items-stretch gap-4 text-f1-foreground @container [&>div]:min-w-[calc(100vw-64px)] @2xl:[&>div]:min-w-[calc(50vw-48px)]", children: e }), y9 = ht(
  Z(function({ children: t }, n) {
    return /* @__PURE__ */ l(Ya, { ref: n, showBar: !1, children: /* @__PURE__ */ l(Om, { children: t }) });
  }),
  () => /* @__PURE__ */ l(f0, { orientation: "horizontal", children: /* @__PURE__ */ S(Om, { children: [
    /* @__PURE__ */ l(Fr.Skeleton, {}),
    /* @__PURE__ */ l(Fr.Skeleton, {}),
    /* @__PURE__ */ l(Fr.Skeleton, {})
  ] }) })
), tI = Z(
  ({ title: e, children: t }, n) => (vr(e, { disallowEmpty: !0 }), /* @__PURE__ */ S("div", { ref: n, className: "flex flex-col gap-2", children: [
    /* @__PURE__ */ l("p", { className: "text-base font-medium text-f1-foreground-secondary", children: e }),
    t
  ] }))
);
tI.displayName = "WidgetSection";
const b9 = rt(
  {
    name: "ScrollArea",
    type: "layout"
  },
  Ya
);
export {
  bI as Alert,
  CI as AlertAvatar,
  xI as AlertDescription,
  id as AlertTag,
  wI as AlertTitle,
  II as ApplicationFrame,
  t9 as AreaChartWidget,
  e9 as AutoGrid,
  Rk as Badge,
  Q3 as BalanceTag,
  n9 as BarChartWidget,
  JD as BaseCelebration,
  z3 as BaseCommunityPost,
  wO as BaseTabs,
  kT as Calendar,
  l9 as CalendarEventList,
  d6 as Carousel,
  c9 as CategoryBarSection,
  SI as Celebration,
  eA as CelebrationSkeleton,
  s9 as ChartWidgetEmptyState,
  u9 as ClockInControls,
  DI as CommunityPost,
  G3 as CommunityPostSkeleton,
  Za as CompanyAvatar,
  AI as CompanyHeader,
  C6 as CompanySelector,
  J3 as CompanyTag,
  rd as Counter,
  g9 as Dashboard,
  ql as DateAvatar,
  x6 as DaytimePage,
  DO as DetailsItem,
  AO as DetailsItemsList,
  YI as Dialog,
  e4 as DotTag,
  dr as Dropdown,
  vI as Form,
  gI as FormActions,
  yI as FormField,
  XI as FullscreenLayout,
  NI as HighlightBanner,
  ZI as HomeLayout,
  f9 as IndicatorsList,
  KI as InfoPaneLayout,
  r9 as LineChartWidget,
  WI as Menu,
  F3 as MobileDropdown,
  us as ModuleAvatar,
  uI as NumberInput,
  VI as OmniButton,
  qI as OverviewLayout,
  b6 as Page,
  FI as PageHeader,
  lr as PersonAvatar,
  _I as PersonHeader,
  t4 as PersonTag,
  o9 as PieChartWidget,
  UO as PrivateBox,
  cI as RadarChart,
  nd as RawTag,
  OI as ResourceHeader,
  b9 as ScrollArea,
  jI as SearchBar,
  nD as Select,
  P0 as Shortcut,
  UI as Sidebar,
  $I as SidebarHeader,
  LI as Spinner,
  JI as Split,
  QI as Stack,
  LO as StandardLayout,
  qo as StatusTag,
  a9 as SummariesWidget,
  GI as Tabs,
  xO as TabsSkeleton,
  p9 as TasksList,
  bu as TeamAvatar,
  n4 as TeamTag,
  hI as Textarea,
  $y as ToggleGroup,
  By as ToggleGroupItem,
  v9 as TwoColumnsList,
  HI as User,
  i9 as VerticalBarChartWidget,
  kO as Weekdays,
  Fr as Widget,
  d9 as WidgetHighlightButton,
  h9 as WidgetInboxList,
  tI as WidgetSection,
  m9 as WidgetSimpleList,
  y9 as WidgetStrip,
  MP as _RadarChart,
  Qa as renderAvatar,
  pI as useForm
};
