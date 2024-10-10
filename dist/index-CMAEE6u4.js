import { jsxs as Y, jsx as w, Fragment as Do } from "react/jsx-runtime";
import * as yn from "react";
import { createContext as Yi, useContext as Zi, useState as mr, useCallback as Bo, useEffect as Uo, useRef as Vp, useImperativeHandle as jp, forwardRef as jn, useMemo as $o, useLayoutEffect as n0 } from "react";
import { cva as ht } from "class-variance-authority";
import { createPortal as t0 } from "react-dom";
import { Slot as e0 } from "@radix-ui/react-slot";
import { nanoid as r0 } from "nanoid";
import * as Ji from "recharts";
import { AreaChart as i0, CartesianGrid as br, XAxis as xr, YAxis as Cr, Area as u0, Text as f0, BarChart as ko, Bar as Go, LabelList as Ho, LineChart as o0, Line as a0, PieChart as l0, Pie as s0, Label as c0 } from "recharts";
import * as Re from "@radix-ui/react-tooltip";
import { clsx as h0 } from "clsx";
import { twMerge as d0 } from "tailwind-merge";
import * as Zt from "@radix-ui/react-avatar";
const Qi = Yi({ enabled: !1, enable: () => null, disable: () => null, filter: [] }), e1 = ({
  children: p
}) => {
  const [v, u] = mr(!1), [h, x] = mr([]), S = Bo(
    (T) => {
      x(
        T || [...Mo].filter((I) => I !== "layout")
      ), u(!0);
    },
    [x, u]
  ), R = Bo(() => u(!1), [u]);
  return Uo(() => {
    window.XRay = {
      enable: S,
      disable: R
    };
  }, [S, R]), /* @__PURE__ */ Y(Qi.Provider, { value: { enabled: v, enable: S, disable: R, filter: h }, children: [
    p,
    v && typeof document < "u" && t0(
      /* @__PURE__ */ Y("div", { className: "fixed right-2 top-2 z-50 flex flex-col space-y-2 rounded-2xs border-solid border-f1-border bg-white p-4 opacity-80 shadow-md", children: [
        /* @__PURE__ */ w("div", { className: "text-md z-50 font-semibold", children: "XRay" }),
        /* @__PURE__ */ w("div", { className: "flex flex-col space-y-2", children: Mo.map((T) => /* @__PURE__ */ Y("label", { className: "block", children: [
          /* @__PURE__ */ w(
            "input",
            {
              onChange: (I) => I.target.checked ? x([...h, T]) : x(h.filter((N) => N !== T)),
              type: "checkbox",
              checked: h.includes(T),
              className: "mr-2"
            }
          ),
          T
        ] }, T)) })
      ] }),
      document == null ? void 0 : document.body
    )
  ] });
}, g0 = ht(
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
), p0 = ht(
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
), _0 = (p, v) => {
  const { enabled: u, filter: h } = yn.useContext(Qi), x = Vp(null);
  jp(v, () => x.current);
  const S = u && !p.internal, R = typeof document < "u" ? document.body : null;
  return Uo(() => {
    if (!S || !x.current || !h.includes(p.type)) return;
    const T = x.current;
    T.dataset.componentName = p.name;
    let I = null, N = null;
    if (R) {
      const B = T.getBoundingClientRect(), { top: G, left: K, width: j, height: wn } = B;
      I = document.createElement("div"), I.className = g0({ type: p.type }), I.style.top = `${G}px`, I.style.left = `${K}px`, I.style.width = `${j}px`, I.style.height = `${wn}px`, N = document.createElement("div"), N.className = p0({ type: p.type }), N.style.top = `${G}px`, N.style.left = `${K}px`, N.innerText = p.name, R.appendChild(N), R.appendChild(I);
    }
    return () => {
      I && (R == null || R.removeChild(I)), N && (R == null || R.removeChild(N));
    };
  }, [S, p.name, p.type, h, R]), {
    ref: x,
    enabled: u
  };
}, r1 = () => Zi(Qi), Mo = ["layout", "info", "action", "form"], i1 = (p, v) => {
  const u = jn((h, x) => {
    const { ref: S } = _0(p, x);
    return /* @__PURE__ */ w(v, { ref: S, ...h });
  });
  return u.displayName = `${p.name}`, u;
};
function rn(...p) {
  return d0(h0(p));
}
function Ko(p) {
  return rn(
    "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-f1-ring focus-visible:ring-offset-1",
    p
  );
}
const v0 = ht("inline-block shrink-0", {
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
}), m0 = jn(function({ size: v, icon: u, className: h, ...x }, S) {
  return u ? /* @__PURE__ */ w(
    u,
    {
      ref: S,
      ...x,
      className: rn(v0({ size: v }), h)
    }
  ) : null;
}), w0 = (p, v) => /* @__PURE__ */ Y("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: v, ...p, children: [
  /* @__PURE__ */ w("path", { fill: "currentColor", d: "M4 8a4 4 0 0 1 4-4h2a1 1 0 1 1 0 2H8a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-2.5a1 1 0 1 1 2 0V16a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4z" }),
  /* @__PURE__ */ w("path", { fill: "currentColor", d: "M14.5 4a1 1 0 0 1 1-1H20a1 1 0 0 1 1 1v4.5a1 1 0 1 1-2 0V6.414l-5.793 5.793a1 1 0 0 1-1.414-1.414L17.586 5H15.5a1 1 0 0 1-1-1" })
] }), u1 = jn(w0), zo = Yi(void 0), f1 = ({ children: p, component: v, currentPath: u }) => /* @__PURE__ */ w(zo.Provider, { value: { component: v, currentPath: u }, children: p }), qo = () => {
  const p = Zi(zo);
  return {
    controller: () => ({}),
    ...p
  };
}, b0 = () => {
  const { currentPath: p } = qo();
  return {
    currentPath: p,
    isActive: (u, { exact: h = !1 } = { exact: !1 }) => p === void 0 || u === void 0 ? !1 : h ? p === u : p.startsWith(u)
  };
}, o1 = jn(
  function(v, u) {
    const { component: h } = qo(), { isActive: x } = b0(), S = {
      "data-is-active": x(v.href, { exact: v.exactMatch }),
      ...v
    }, R = $o(
      () => jn(function(I, N) {
        return h ? h(I, N) : /* @__PURE__ */ w("a", { ref: N, ...I });
      }),
      [h]
    );
    return /* @__PURE__ */ w(R, { ref: u, ...S });
  }
), x0 = ht(
  rn(
    "group inline-flex items-center justify-center gap-1 whitespace-nowrap rounded-md border-none text-base font-medium transition-colors disabled:pointer-events-none disabled:opacity-50",
    Ko()
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
), Xo = yn.forwardRef(
  ({ className: p, round: v, variant: u, size: h, asChild: x = !1, ...S }, R) => /* @__PURE__ */ w(
    x ? e0 : "button",
    {
      className: rn(x0({ variant: u, size: h, round: v }), p),
      ref: R,
      ...S
    }
  )
);
Xo.displayName = "Button";
const C0 = ht("-ml-0.5 transition-colors", {
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
}), R0 = ht("transition-colors", {
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
}), a1 = jn(function({
  label: v,
  hideLabel: u,
  onClick: h,
  disabled: x,
  loading: S,
  icon: R,
  variant: T = "default",
  size: I = "md",
  ...N
}, B) {
  const [G, K] = mr(!1);
  return /* @__PURE__ */ Y(
    Xo,
    {
      title: u ? v : void 0,
      onClick: async (wn) => {
        const Z = h == null ? void 0 : h(wn);
        if (Z instanceof Promise) {
          K(!0);
          try {
            await Z;
          } finally {
            K(!1);
          }
        }
      },
      disabled: x || G || S,
      ref: B,
      variant: T,
      size: I,
      round: u,
      ...N,
      children: [
        R && /* @__PURE__ */ w(
          m0,
          {
            size: I === "sm" ? "sm" : "md",
            icon: R,
            className: u ? R0({ variant: T }) : C0({ variant: T })
          }
        ),
        !u && v
      ]
    }
  );
}), L0 = ht("", {
  variants: {
    aspect: {
      square: "aspect-square",
      wide: "aspect-video",
      small: "h-40"
    }
  }
}), y0 = { light: "", dark: ".dark" }, Yo = yn.createContext(null);
function Zo() {
  const p = yn.useContext(Yo);
  if (!p)
    throw new Error("useChart must be used within a <ChartContainer />");
  return p;
}
const I0 = ({
  id: p,
  className: v,
  children: u,
  aspect: h,
  config: x,
  ...S
}, R) => {
  const T = yn.useId(), I = `chart-${p || T.replace(/:/g, "")}`, N = yn.useRef(null), [B, G] = mr(), K = $o(() => new ResizeObserver(
    (j) => G(j[0].contentRect.height)
  ), []);
  return n0(() => {
    const j = R && "current" in R ? R.current : N.current;
    return j && K.observe(j.parentElement), () => {
      K.disconnect();
    };
  }, [K, R, N]), /* @__PURE__ */ w(Yo.Provider, { value: { config: x }, children: /* @__PURE__ */ Y(
    "div",
    {
      "data-chromatic": "ignore",
      "data-chart": I,
      ref: R || N,
      className: rn(
        "flex w-full justify-center overflow-visible text-sm [&_.recharts-cartesian-axis-tick_text]:fill-f1-foreground-secondary [&_.recharts-cartesian-grid_line]:stroke-f1-border [&_.recharts-curve.recharts-tooltip-cursor]:stroke-f1-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-none [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-f1-border [&_.recharts-radial-bar-background-sector]:fill-f1-background-secondary [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-f1-background-secondary [&_.recharts-reference-line-line]:stroke-f1-border [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-sector]:outline-none [&_.recharts-surface]:outline-none",
        h ? L0({ aspect: h }) : "aspect-auto h-full",
        v
      ),
      ...S,
      children: [
        /* @__PURE__ */ w(T0, { id: I, config: x }),
        /* @__PURE__ */ w(
          Ji.ResponsiveContainer,
          {
            height: B,
            className: "overflow-visible",
            children: u
          }
        )
      ]
    }
  ) });
}, Jt = yn.forwardRef(I0);
Jt.displayName = "Chart";
const T0 = ({ id: p, config: v }) => {
  const u = Object.entries(v).filter(([h, x]) => x.theme || x.color);
  return u.length ? /* @__PURE__ */ w(
    "style",
    {
      dangerouslySetInnerHTML: {
        __html: Object.entries(y0).map(
          ([h, x]) => `
${x} [data-chart=${p}] {
${u.map(([S, R]) => {
            var I;
            const T = ((I = R.theme) == null ? void 0 : I[h]) || R.color;
            return T ? `  --color-${S}: ${T};` : null;
          }).join(`
`)}
}
`
        )
      }
    }
  ) : null;
}, Le = Ji.Tooltip, Qt = yn.forwardRef(
  ({
    active: p,
    payload: v,
    className: u,
    indicator: h = "dot",
    hideLabel: x = !1,
    hideIndicator: S = !1,
    label: R,
    labelFormatter: T,
    labelClassName: I,
    formatter: N,
    yAxisFormatter: B,
    color: G,
    nameKey: K,
    labelKey: j
  }, wn) => {
    const { config: Z } = Zo(), nn = yn.useMemo(() => {
      var Fn;
      if (x || !(v != null && v.length))
        return null;
      const [Q] = v, bn = `${j || Q.dataKey || Q.name || "value"}`, Pn = Xi(Z, Q, bn), un = !j && typeof R == "string" ? ((Fn = Z[R]) == null ? void 0 : Fn.label) || R : Pn == null ? void 0 : Pn.label;
      return T ? /* @__PURE__ */ w("div", { className: rn("font-medium", I), children: T(un, v) }) : un ? /* @__PURE__ */ w("div", { className: rn("font-medium", I), children: un }) : null;
    }, [
      R,
      T,
      v,
      x,
      I,
      Z,
      j
    ]);
    if (!p || !(v != null && v.length))
      return null;
    const Nn = v.length === 1 && h !== "dot";
    return /* @__PURE__ */ Y(
      "div",
      {
        ref: wn,
        className: rn(
          "grid min-w-[8rem] items-start gap-2 rounded-sm border border-solid border-f1-border bg-f1-background px-3 py-2.5 text-sm shadow-xl",
          u
        ),
        children: [
          Nn ? null : nn,
          /* @__PURE__ */ w("div", { className: "grid gap-2", children: v.map((Q, bn) => {
            const Pn = `${K || Q.name || Q.dataKey || "value"}`, un = Xi(Z, Q, Pn), Fn = G || Q.payload.fill || Q.color;
            return /* @__PURE__ */ w(
              "div",
              {
                className: rn(
                  "flex w-full items-stretch gap-2 [&>svg]:h-2.5 [&>svg]:w-2.5 [&>svg]:text-f1-foreground",
                  h === "dot" && "items-center"
                ),
                children: N && (Q == null ? void 0 : Q.value) !== void 0 && Q.name ? N(Q.value, Q.name, Q, bn, Q.payload) : /* @__PURE__ */ Y(Do, { children: [
                  un != null && un.icon ? /* @__PURE__ */ w(un.icon, {}) : !S && /* @__PURE__ */ w(
                    "div",
                    {
                      className: rn(
                        "shrink-0 rounded-[2px] border-[--color-border] bg-[--color-bg]",
                        {
                          "h-2.5 w-2.5": h === "dot",
                          "w-1": h === "line",
                          "w-0 border-[1.5px] border-dashed bg-transparent": h === "dashed",
                          "my-0.5": Nn && h === "dashed"
                        }
                      ),
                      style: {
                        "--color-bg": Fn,
                        "--color-border": Fn
                      }
                    }
                  ),
                  /* @__PURE__ */ Y(
                    "div",
                    {
                      className: rn(
                        "flex flex-1 justify-between leading-none",
                        Nn ? "items-end" : "items-center"
                      ),
                      children: [
                        /* @__PURE__ */ Y("div", { className: "grid gap-2", children: [
                          Nn ? nn : null,
                          /* @__PURE__ */ w("span", { className: "pr-2 text-f1-foreground", children: (un == null ? void 0 : un.label) || Q.name })
                        ] }),
                        Q.value && /* @__PURE__ */ w("span", { className: "font-mono font-medium tabular-nums text-f1-foreground", children: B ? B(String(Q.value)) : Q.value.toLocaleString() })
                      ]
                    }
                  )
                ] })
              },
              Q.dataKey
            );
          }) })
        ]
      }
    );
  }
);
Qt.displayName = "ChartTooltip";
const Jo = Ji.Legend, Vi = yn.forwardRef(
  ({
    className: p,
    hideIcon: v = !1,
    payload: u,
    verticalAlign: h = "bottom",
    nameKey: x,
    leftShift: S = 0
  }, R) => {
    const { config: T } = Zo();
    return u != null && u.length ? /* @__PURE__ */ w(
      "div",
      {
        ref: R,
        className: rn(
          "relative flex flex-wrap items-center justify-center gap-4 text-f1-foreground-secondary",
          h === "top" ? "pb-2" : "pt-2",
          p
        ),
        style: { marginLeft: S },
        children: u.map((I) => {
          const N = `${x || I.dataKey || "value"}`, B = Xi(T, I, N);
          return /* @__PURE__ */ Y(
            "div",
            {
              className: rn(
                "flex items-center gap-1.5 [&>svg]:h-3 [&>svg]:w-3 [&>svg]:text-f1-foreground"
              ),
              children: [
                B != null && B.icon && !v ? /* @__PURE__ */ w(B.icon, {}) : /* @__PURE__ */ w(
                  "div",
                  {
                    className: "h-2.5 w-2.5 shrink-0 rounded-full",
                    style: {
                      backgroundColor: I.color
                    }
                  }
                ),
                /* @__PURE__ */ w("span", { className: "text font-medium tracking-wide text-f1-foreground", children: B == null ? void 0 : B.label })
              ]
            },
            I.value
          );
        })
      }
    ) : null;
  }
);
Vi.displayName = "ChartLegend";
function Xi(p, v, u) {
  if (typeof v != "object" || v === null)
    return;
  const h = "payload" in v && typeof v.payload == "object" && v.payload !== null ? v.payload : void 0;
  let x = u;
  return u in v && typeof v[u] == "string" ? x = v[u] : h && u in h && typeof h[u] == "string" && (x = h[u]), x in p ? p[x] : p[u];
}
const S0 = {
  "chart-1": "hsl(var(--chart-1))",
  "chart-2": "hsl(var(--chart-2))",
  "chart-3": "hsl(var(--chart-3))",
  "chart-4": "hsl(var(--chart-4))",
  "chart-5": "hsl(var(--chart-5))",
  "chart-6": "hsl(var(--chart-6))",
  "chart-7": "hsl(var(--chart-7))",
  "chart-8": "hsl(var(--chart-8))"
}, ct = (p) => {
  const v = Object.values(S0);
  return v[p % v.length];
};
function Rr(p, v = "12px Inter, sans-serif") {
  const h = document.createElement("canvas").getContext("2d");
  return h ? (h.font = v, h.measureText(p).width) : 0;
}
const ji = (p) => ({
  dataKey: "x",
  tickLine: !1,
  axisLine: !1,
  tickMargin: 8,
  tickCount: p == null ? void 0 : p.tickCount,
  tickFormatter: p == null ? void 0 : p.tickFormatter
}), nu = (p) => ({
  tickLine: !1,
  axisLine: !1,
  tickMargin: 8,
  tickCount: p == null ? void 0 : p.tickCount,
  tickFormatter: p == null ? void 0 : p.tickFormatter
}), Lr = () => ({
  vertical: !1,
  strokeDasharray: "4"
});
function Vt(p) {
  return jn(p);
}
function tu(p) {
  return p.map((v) => ({ x: v.label, ...v.values }));
}
const E0 = ({
  index: p,
  visibleTicksCount: v,
  payload: u,
  tickFormatter: h,
  ...x
}) => {
  const S = p === 0, R = p === v - 1;
  return /* @__PURE__ */ w(f0, { ...x, textAnchor: S ? "start" : R ? "end" : "middle", children: (h == null ? void 0 : h(u.value, u.index)) ?? u.value });
}, O0 = ({
  data: p,
  dataConfig: v,
  xAxis: u,
  yAxis: h,
  lineType: x = "monotoneX",
  aspect: S,
  marginTop: R = 0
}, T) => {
  const I = Object.keys(v), N = r0(12), B = tu(p), G = Math.max(
    ...B.flatMap(
      (Z) => I.map(
        (nn) => Rr(
          h != null && h.tickFormatter ? h.tickFormatter(`${Z[nn]}`) : `${Z[nn]}`
        )
      )
    )
  ), K = (h == null ? void 0 : h.width) ?? G + 20, j = !(h != null && h.hide), wn = !(u != null && u.hide);
  return /* @__PURE__ */ w(Jt, { config: v, ref: T, aspect: S, children: /* @__PURE__ */ Y(
    i0,
    {
      accessibilityLayer: !0,
      data: B,
      className: "overflow-visible [&_.recharts-surface]:overflow-visible",
      margin: {
        top: R
      },
      children: [
        /* @__PURE__ */ Y("defs", { children: [
          /* @__PURE__ */ Y(
            "linearGradient",
            {
              id: `${N}-fadeGradient`,
              gradientUnits: "userSpaceOnUse",
              x1: `${j ? K : 0}`,
              y1: "0",
              x2: "100%",
              y2: "0",
              children: [
                /* @__PURE__ */ w("stop", { offset: "0%", stopColor: "black", stopOpacity: "0" }),
                /* @__PURE__ */ w("stop", { offset: "1%", stopColor: "white", stopOpacity: "0.1" }),
                /* @__PURE__ */ w("stop", { offset: "7%", stopColor: "white", stopOpacity: "1" }),
                /* @__PURE__ */ w("stop", { offset: "93%", stopColor: "white", stopOpacity: "1" }),
                /* @__PURE__ */ w("stop", { offset: "99%", stopColor: "white", stopOpacity: "0.1" }),
                /* @__PURE__ */ w("stop", { offset: "100%", stopColor: "black", stopOpacity: "0" })
              ]
            }
          ),
          /* @__PURE__ */ w(
            "mask",
            {
              id: `${N}-transparent-edges`,
              maskUnits: "userSpaceOnUse",
              maskContentUnits: "userSpaceOnUse",
              children: /* @__PURE__ */ w(
                "rect",
                {
                  x: "0",
                  y: "0",
                  width: "100%",
                  height: "100%",
                  fill: `url(#${N}-fadeGradient)`
                }
              )
            }
          ),
          I.map((Z, nn) => /* @__PURE__ */ Y(
            "linearGradient",
            {
              id: `fill${String(Z)}-${N}`,
              x1: "0",
              y1: "0",
              x2: "0",
              y2: "1",
              children: [
                /* @__PURE__ */ w(
                  "stop",
                  {
                    offset: "5%",
                    stopColor: v[Z].color || ct(nn),
                    stopOpacity: 0.8
                  }
                ),
                /* @__PURE__ */ w(
                  "stop",
                  {
                    offset: "95%",
                    stopColor: v[Z].color || ct(nn),
                    stopOpacity: 0.1
                  }
                )
              ]
            },
            nn
          ))
        ] }),
        /* @__PURE__ */ w(
          br,
          {
            ...Lr(),
            mask: `url(#${N}-transparent-edges)`
          }
        ),
        wn && /* @__PURE__ */ w(
          xr,
          {
            dataKey: "x",
            tickLine: !1,
            axisLine: !1,
            tickMargin: 8,
            tickFormatter: u == null ? void 0 : u.tickFormatter,
            ticks: u == null ? void 0 : u.ticks,
            domain: u == null ? void 0 : u.domain,
            interval: 0,
            tick: E0
          }
        ),
        j && /* @__PURE__ */ w(
          Cr,
          {
            tickLine: !1,
            axisLine: !1,
            tickMargin: 8,
            tickCount: h == null ? void 0 : h.tickCount,
            tickFormatter: h == null ? void 0 : h.tickFormatter,
            ticks: h == null ? void 0 : h.ticks,
            domain: h == null ? void 0 : h.domain,
            width: K,
            className: rn((h == null ? void 0 : h.isBlur) && "blur-sm")
          }
        ),
        /* @__PURE__ */ w(
          Le,
          {
            cursor: !0,
            content: /* @__PURE__ */ w(
              Qt,
              {
                indicator: "dot",
                yAxisFormatter: h == null ? void 0 : h.tickFormatter
              }
            )
          }
        ),
        I.map((Z, nn) => /* @__PURE__ */ w(
          u0,
          {
            isAnimationActive: !1,
            dataKey: Z,
            type: x,
            mask: `url(#${N}-transparent-edges)`,
            fill: `url(#fill${Z}-${N})`,
            fillOpacity: v[Z].dashed ? 0 : 0.4,
            stroke: v[Z].color || ct(nn),
            strokeWidth: 1.5,
            strokeDasharray: v[Z].dashed ? "4 4" : void 0
          },
          Z
        )),
        Object.keys(v).length > 1 && /* @__PURE__ */ w(
          Jo,
          {
            className: "flex justify-start",
            iconType: "star",
            content: /* @__PURE__ */ w(
              Vi,
              {
                leftShift: j ? Math.round(K) : 0
              }
            )
          }
        )
      ]
    }
  ) });
}, l1 = Vt(O0), A0 = ({
  dataConfig: p,
  data: v,
  xAxis: u,
  yAxis: h = { hide: !0 },
  label: x = !1,
  type: S = "simple",
  aspect: R
}, T) => {
  const I = Object.keys(p), N = tu(v), B = Math.max(
    ...N.flatMap(
      (G) => I.map(
        (K) => Rr(
          h != null && h.tickFormatter ? h.tickFormatter(`${G[K]}`) : `${G[K]}`
        )
      )
    )
  );
  return /* @__PURE__ */ w(Jt, { config: p, ref: T, aspect: R, children: /* @__PURE__ */ Y(
    ko,
    {
      accessibilityLayer: !0,
      data: N,
      margin: {
        left: h && !h.hide ? 0 : 12,
        right: 12,
        top: x ? 24 : 0
      },
      stackOffset: S === "stacked-by-sign" ? "sign" : void 0,
      children: [
        /* @__PURE__ */ w(
          Le,
          {
            cursor: !0,
            content: /* @__PURE__ */ w(Qt, { yAxisFormatter: h.tickFormatter })
          }
        ),
        /* @__PURE__ */ w(br, { ...Lr() }),
        /* @__PURE__ */ w(
          Cr,
          {
            ...nu(h),
            tick: !0,
            width: h.width ?? B + 20,
            hide: h.hide
          }
        ),
        /* @__PURE__ */ w(xr, { ...ji(u), hide: u == null ? void 0 : u.hide }),
        I.map((G, K) => /* @__PURE__ */ w(
          Go,
          {
            isAnimationActive: !1,
            dataKey: G,
            stackId: S === "stacked" || S === "stacked-by-sign" ? "stack" : void 0,
            fill: p[G].color || ct(K),
            radius: S === "stacked-by-sign" ? [4, 4, 0, 0] : 4,
            maxBarSize: 32,
            children: x && /* @__PURE__ */ w(
              Ho,
              {
                position: "top",
                offset: 10,
                className: "fill-f1-foreground",
                fontSize: 12
              },
              `label-${G}`
            )
          },
          `bar-${G}`
        ))
      ]
    }
  ) });
}, s1 = Vt(A0), N0 = Re.Provider, P0 = Re.Root, F0 = Re.Trigger, Qo = yn.forwardRef(({ className: p, sideOffset: v = 4, ...u }, h) => /* @__PURE__ */ w(
  Re.Content,
  {
    ref: h,
    sideOffset: v,
    className: rn(
      "z-50 overflow-hidden rounded-sm bg-f1-background px-3 py-1.5 text-sm text-f1-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      p
    ),
    ...u
  }
));
Qo.displayName = Re.Content.displayName;
const W0 = ({ data: p, legend: v = !0 }, u) => {
  const h = p.reduce((x, S) => x + S.value, 0);
  return /* @__PURE__ */ Y(N0, { children: [
    /* @__PURE__ */ w("div", { className: "w-full", ref: u, children: /* @__PURE__ */ w("div", { className: "flex h-2 gap-1 overflow-hidden", children: p.map((x, S) => {
      const R = x.value / h * 100, T = x.color || ct(S), I = (N) => {
        const B = N / h * 100;
        return B % 1 === 0 ? B.toFixed(0) : B.toFixed(1);
      };
      return /* @__PURE__ */ Y(P0, { children: [
        /* @__PURE__ */ w(
          F0,
          {
            className: "h-full cursor-default overflow-hidden rounded-2xs",
            style: { width: `${R}%` },
            title: x.name,
            asChild: !0,
            children: /* @__PURE__ */ w(
              "div",
              {
                className: "h-full w-full",
                style: { backgroundColor: T },
                role: "img",
                title: x.name,
                tabIndex: 0
              }
            )
          }
        ),
        /* @__PURE__ */ Y(Qo, { className: "flex items-center gap-1 text-sm", children: [
          /* @__PURE__ */ w(
            "div",
            {
              className: "h-2.5 w-2.5 shrink-0 translate-y-px rounded-full",
              style: { backgroundColor: T }
            }
          ),
          /* @__PURE__ */ w("span", { className: "pl-0.5 pr-2 text-f1-foreground-secondary", children: x.name }),
          /* @__PURE__ */ Y("span", { className: "font-mono font-medium tabular-nums text-f1-foreground", children: [
            x.value,
            " (",
            I(x.value),
            "%)"
          ] })
        ] })
      ] }, x.name);
    }) }) }),
    v && /* @__PURE__ */ w(
      "div",
      {
        className: "mt-1 flex w-full flex-wrap gap-x-2.5 gap-y-0.5",
        role: "list",
        children: p.map((x, S) => {
          const R = x.color || ct(S);
          return /* @__PURE__ */ Y(
            "div",
            {
              className: "flex items-center gap-1",
              role: "listitem",
              children: [
                /* @__PURE__ */ w(
                  "div",
                  {
                    className: "h-2 w-2 shrink-0 translate-y-px rounded-full",
                    style: { backgroundColor: R }
                  }
                ),
                /* @__PURE__ */ w("span", { className: "text-sm tracking-wide text-f1-foreground-secondary", children: x.name })
              ]
            },
            x.name
          );
        })
      }
    )
  ] });
}, c1 = Vt(W0), B0 = ({
  data: p,
  dataConfig: v,
  xAxis: u,
  yAxis: h = { hide: !0 },
  lineType: x = "natural",
  aspect: S
}, R) => {
  const T = Object.keys(v), I = tu(p), N = Math.max(
    ...I.flatMap(
      (B) => T.map(
        (G) => Rr(
          h != null && h.tickFormatter ? h.tickFormatter(`${B[G]}`) : `${B[G]}`
        )
      )
    )
  );
  return /* @__PURE__ */ w(Jt, { config: v, ref: R, aspect: S, children: /* @__PURE__ */ Y(
    o0,
    {
      accessibilityLayer: !0,
      data: I,
      margin: { left: h && !h.hide ? 0 : 12, right: 12 },
      children: [
        /* @__PURE__ */ w(br, { ...Lr() }),
        !(u != null && u.hide) && /* @__PURE__ */ w(xr, { ...ji(u) }),
        !(h != null && h.hide) && /* @__PURE__ */ w(
          Cr,
          {
            ...nu(h),
            width: h.width ?? N + 20
          }
        ),
        /* @__PURE__ */ w(
          Le,
          {
            cursor: !0,
            content: /* @__PURE__ */ w(Qt, { yAxisFormatter: h == null ? void 0 : h.tickFormatter })
          }
        ),
        T.map((B, G) => /* @__PURE__ */ w(
          a0,
          {
            dataKey: B,
            isAnimationActive: !1,
            type: x,
            stroke: v[B].color || ct(G),
            strokeWidth: 1.5,
            strokeDasharray: v[B].dashed ? "4 4" : void 0,
            dot: !1
          },
          B
        ))
      ]
    }
  ) });
}, h1 = Vt(B0), M0 = ({ data: p, dataConfig: v, overview: u, aspect: h, tickFormatter: x }, S) => {
  const R = p.map((T, I) => {
    var N;
    return {
      ...T,
      fill: ((N = v[T.label]) == null ? void 0 : N.color) || ct(I)
    };
  });
  return /* @__PURE__ */ w(
    Jt,
    {
      config: v,
      ref: S,
      aspect: h,
      "data-chromatic": "ignore",
      children: /* @__PURE__ */ Y(l0, { accessibilityLayer: !0, margin: { left: 0, right: 0 }, children: [
        /* @__PURE__ */ w(
          Le,
          {
            cursor: !0,
            content: /* @__PURE__ */ w(Qt, { yAxisFormatter: x })
          }
        ),
        /* @__PURE__ */ w(
          s0,
          {
            isAnimationActive: !1,
            nameKey: "label",
            legendType: "circle",
            dataKey: "value",
            data: R,
            innerRadius: u ? 50 : 40,
            paddingAngle: 2.5,
            children: /* @__PURE__ */ w(
              c0,
              {
                content: ({ viewBox: T }) => {
                  if (T && "cx" in T && "cy" in T)
                    return /* @__PURE__ */ Y(
                      "text",
                      {
                        x: T.cx,
                        y: T.cy,
                        textAnchor: "middle",
                        dominantBaseline: "middle",
                        children: [
                          /* @__PURE__ */ w(
                            "tspan",
                            {
                              x: T.cx,
                              y: (T.cy || 0) + 8,
                              className: "fill-f1-foreground text-2xl font-semibold",
                              children: u == null ? void 0 : u.number
                            }
                          ),
                          /* @__PURE__ */ w(
                            "tspan",
                            {
                              x: T.cx,
                              y: (T.cy || 0) - 16,
                              className: "fill-f1-foreground-secondary",
                              children: u == null ? void 0 : u.label
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
        /* @__PURE__ */ w(
          Jo,
          {
            content: /* @__PURE__ */ w(Vi, {}),
            align: "right",
            verticalAlign: "middle",
            layout: "vertical",
            className: "flex-col items-start gap-1 pr-3 pt-0"
          }
        )
      ] })
    }
  );
}, d1 = Vt(M0);
var Ce = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, wr = { exports: {} };
/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
wr.exports;
(function(p, v) {
  (function() {
    var u, h = "4.17.21", x = 200, S = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", R = "Expected a function", T = "Invalid `variable` option passed into `_.template`", I = "__lodash_hash_undefined__", N = 500, B = "__lodash_placeholder__", G = 1, K = 2, j = 4, wn = 1, Z = 2, nn = 1, Nn = 2, Q = 4, bn = 8, Pn = 16, un = 32, Fn = 64, nt = 128, jt = 256, yr = 512, ra = 30, ia = "...", ua = 800, fa = 16, eu = 1, oa = 2, aa = 3, Rt = 1 / 0, dt = 9007199254740991, la = 17976931348623157e292, ye = NaN, Zn = 4294967295, sa = Zn - 1, ca = Zn >>> 1, ha = [
      ["ary", nt],
      ["bind", nn],
      ["bindKey", Nn],
      ["curry", bn],
      ["curryRight", Pn],
      ["flip", yr],
      ["partial", un],
      ["partialRight", Fn],
      ["rearg", jt]
    ], Pt = "[object Arguments]", Ie = "[object Array]", da = "[object AsyncFunction]", ne = "[object Boolean]", te = "[object Date]", ga = "[object DOMException]", Te = "[object Error]", Se = "[object Function]", ru = "[object GeneratorFunction]", Hn = "[object Map]", ee = "[object Number]", pa = "[object Null]", tt = "[object Object]", iu = "[object Promise]", _a = "[object Proxy]", re = "[object RegExp]", Kn = "[object Set]", ie = "[object String]", Ee = "[object Symbol]", va = "[object Undefined]", ue = "[object WeakMap]", ma = "[object WeakSet]", fe = "[object ArrayBuffer]", Ft = "[object DataView]", Ir = "[object Float32Array]", Tr = "[object Float64Array]", Sr = "[object Int8Array]", Er = "[object Int16Array]", Or = "[object Int32Array]", Ar = "[object Uint8Array]", Nr = "[object Uint8ClampedArray]", Pr = "[object Uint16Array]", Fr = "[object Uint32Array]", wa = /\b__p \+= '';/g, ba = /\b(__p \+=) '' \+/g, xa = /(__e\(.*?\)|\b__t\)) \+\n'';/g, uu = /&(?:amp|lt|gt|quot|#39);/g, fu = /[&<>"']/g, Ca = RegExp(uu.source), Ra = RegExp(fu.source), La = /<%-([\s\S]+?)%>/g, ya = /<%([\s\S]+?)%>/g, ou = /<%=([\s\S]+?)%>/g, Ia = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Ta = /^\w*$/, Sa = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Wr = /[\\^$.*+?()[\]{}|]/g, Ea = RegExp(Wr.source), Br = /^\s+/, Oa = /\s/, Aa = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, Na = /\{\n\/\* \[wrapped with (.+)\] \*/, Pa = /,? & /, Fa = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, Wa = /[()=,{}\[\]\/\s]/, Ba = /\\(\\)?/g, Ma = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, au = /\w*$/, Da = /^[-+]0x[0-9a-f]+$/i, Ua = /^0b[01]+$/i, $a = /^\[object .+?Constructor\]$/, ka = /^0o[0-7]+$/i, Ga = /^(?:0|[1-9]\d*)$/, Ha = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, Oe = /($^)/, Ka = /['\n\r\u2028\u2029\\]/g, Ae = "\\ud800-\\udfff", za = "\\u0300-\\u036f", qa = "\\ufe20-\\ufe2f", Xa = "\\u20d0-\\u20ff", lu = za + qa + Xa, su = "\\u2700-\\u27bf", cu = "a-z\\xdf-\\xf6\\xf8-\\xff", Ya = "\\xac\\xb1\\xd7\\xf7", Za = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", Ja = "\\u2000-\\u206f", Qa = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", hu = "A-Z\\xc0-\\xd6\\xd8-\\xde", du = "\\ufe0e\\ufe0f", gu = Ya + Za + Ja + Qa, Mr = "['’]", Va = "[" + Ae + "]", pu = "[" + gu + "]", Ne = "[" + lu + "]", _u = "\\d+", ja = "[" + su + "]", vu = "[" + cu + "]", mu = "[^" + Ae + gu + _u + su + cu + hu + "]", Dr = "\\ud83c[\\udffb-\\udfff]", nl = "(?:" + Ne + "|" + Dr + ")", wu = "[^" + Ae + "]", Ur = "(?:\\ud83c[\\udde6-\\uddff]){2}", $r = "[\\ud800-\\udbff][\\udc00-\\udfff]", Wt = "[" + hu + "]", bu = "\\u200d", xu = "(?:" + vu + "|" + mu + ")", tl = "(?:" + Wt + "|" + mu + ")", Cu = "(?:" + Mr + "(?:d|ll|m|re|s|t|ve))?", Ru = "(?:" + Mr + "(?:D|LL|M|RE|S|T|VE))?", Lu = nl + "?", yu = "[" + du + "]?", el = "(?:" + bu + "(?:" + [wu, Ur, $r].join("|") + ")" + yu + Lu + ")*", rl = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", il = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", Iu = yu + Lu + el, ul = "(?:" + [ja, Ur, $r].join("|") + ")" + Iu, fl = "(?:" + [wu + Ne + "?", Ne, Ur, $r, Va].join("|") + ")", ol = RegExp(Mr, "g"), al = RegExp(Ne, "g"), kr = RegExp(Dr + "(?=" + Dr + ")|" + fl + Iu, "g"), ll = RegExp([
      Wt + "?" + vu + "+" + Cu + "(?=" + [pu, Wt, "$"].join("|") + ")",
      tl + "+" + Ru + "(?=" + [pu, Wt + xu, "$"].join("|") + ")",
      Wt + "?" + xu + "+" + Cu,
      Wt + "+" + Ru,
      il,
      rl,
      _u,
      ul
    ].join("|"), "g"), sl = RegExp("[" + bu + Ae + lu + du + "]"), cl = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, hl = [
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
    ], dl = -1, V = {};
    V[Ir] = V[Tr] = V[Sr] = V[Er] = V[Or] = V[Ar] = V[Nr] = V[Pr] = V[Fr] = !0, V[Pt] = V[Ie] = V[fe] = V[ne] = V[Ft] = V[te] = V[Te] = V[Se] = V[Hn] = V[ee] = V[tt] = V[re] = V[Kn] = V[ie] = V[ue] = !1;
    var J = {};
    J[Pt] = J[Ie] = J[fe] = J[Ft] = J[ne] = J[te] = J[Ir] = J[Tr] = J[Sr] = J[Er] = J[Or] = J[Hn] = J[ee] = J[tt] = J[re] = J[Kn] = J[ie] = J[Ee] = J[Ar] = J[Nr] = J[Pr] = J[Fr] = !0, J[Te] = J[Se] = J[ue] = !1;
    var gl = {
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
    }, pl = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    }, _l = {
      "&amp;": "&",
      "&lt;": "<",
      "&gt;": ">",
      "&quot;": '"',
      "&#39;": "'"
    }, vl = {
      "\\": "\\",
      "'": "'",
      "\n": "n",
      "\r": "r",
      "\u2028": "u2028",
      "\u2029": "u2029"
    }, ml = parseFloat, wl = parseInt, Tu = typeof Ce == "object" && Ce && Ce.Object === Object && Ce, bl = typeof self == "object" && self && self.Object === Object && self, hn = Tu || bl || Function("return this")(), Gr = v && !v.nodeType && v, Lt = Gr && !0 && p && !p.nodeType && p, Su = Lt && Lt.exports === Gr, Hr = Su && Tu.process, Wn = function() {
      try {
        var s = Lt && Lt.require && Lt.require("util").types;
        return s || Hr && Hr.binding && Hr.binding("util");
      } catch {
      }
    }(), Eu = Wn && Wn.isArrayBuffer, Ou = Wn && Wn.isDate, Au = Wn && Wn.isMap, Nu = Wn && Wn.isRegExp, Pu = Wn && Wn.isSet, Fu = Wn && Wn.isTypedArray;
    function In(s, g, d) {
      switch (d.length) {
        case 0:
          return s.call(g);
        case 1:
          return s.call(g, d[0]);
        case 2:
          return s.call(g, d[0], d[1]);
        case 3:
          return s.call(g, d[0], d[1], d[2]);
      }
      return s.apply(g, d);
    }
    function xl(s, g, d, L) {
      for (var P = -1, H = s == null ? 0 : s.length; ++P < H; ) {
        var ln = s[P];
        g(L, ln, d(ln), s);
      }
      return L;
    }
    function Bn(s, g) {
      for (var d = -1, L = s == null ? 0 : s.length; ++d < L && g(s[d], d, s) !== !1; )
        ;
      return s;
    }
    function Cl(s, g) {
      for (var d = s == null ? 0 : s.length; d-- && g(s[d], d, s) !== !1; )
        ;
      return s;
    }
    function Wu(s, g) {
      for (var d = -1, L = s == null ? 0 : s.length; ++d < L; )
        if (!g(s[d], d, s))
          return !1;
      return !0;
    }
    function gt(s, g) {
      for (var d = -1, L = s == null ? 0 : s.length, P = 0, H = []; ++d < L; ) {
        var ln = s[d];
        g(ln, d, s) && (H[P++] = ln);
      }
      return H;
    }
    function Pe(s, g) {
      var d = s == null ? 0 : s.length;
      return !!d && Bt(s, g, 0) > -1;
    }
    function Kr(s, g, d) {
      for (var L = -1, P = s == null ? 0 : s.length; ++L < P; )
        if (d(g, s[L]))
          return !0;
      return !1;
    }
    function tn(s, g) {
      for (var d = -1, L = s == null ? 0 : s.length, P = Array(L); ++d < L; )
        P[d] = g(s[d], d, s);
      return P;
    }
    function pt(s, g) {
      for (var d = -1, L = g.length, P = s.length; ++d < L; )
        s[P + d] = g[d];
      return s;
    }
    function zr(s, g, d, L) {
      var P = -1, H = s == null ? 0 : s.length;
      for (L && H && (d = s[++P]); ++P < H; )
        d = g(d, s[P], P, s);
      return d;
    }
    function Rl(s, g, d, L) {
      var P = s == null ? 0 : s.length;
      for (L && P && (d = s[--P]); P--; )
        d = g(d, s[P], P, s);
      return d;
    }
    function qr(s, g) {
      for (var d = -1, L = s == null ? 0 : s.length; ++d < L; )
        if (g(s[d], d, s))
          return !0;
      return !1;
    }
    var Ll = Xr("length");
    function yl(s) {
      return s.split("");
    }
    function Il(s) {
      return s.match(Fa) || [];
    }
    function Bu(s, g, d) {
      var L;
      return d(s, function(P, H, ln) {
        if (g(P, H, ln))
          return L = H, !1;
      }), L;
    }
    function Fe(s, g, d, L) {
      for (var P = s.length, H = d + (L ? 1 : -1); L ? H-- : ++H < P; )
        if (g(s[H], H, s))
          return H;
      return -1;
    }
    function Bt(s, g, d) {
      return g === g ? Dl(s, g, d) : Fe(s, Mu, d);
    }
    function Tl(s, g, d, L) {
      for (var P = d - 1, H = s.length; ++P < H; )
        if (L(s[P], g))
          return P;
      return -1;
    }
    function Mu(s) {
      return s !== s;
    }
    function Du(s, g) {
      var d = s == null ? 0 : s.length;
      return d ? Zr(s, g) / d : ye;
    }
    function Xr(s) {
      return function(g) {
        return g == null ? u : g[s];
      };
    }
    function Yr(s) {
      return function(g) {
        return s == null ? u : s[g];
      };
    }
    function Uu(s, g, d, L, P) {
      return P(s, function(H, ln, X) {
        d = L ? (L = !1, H) : g(d, H, ln, X);
      }), d;
    }
    function Sl(s, g) {
      var d = s.length;
      for (s.sort(g); d--; )
        s[d] = s[d].value;
      return s;
    }
    function Zr(s, g) {
      for (var d, L = -1, P = s.length; ++L < P; ) {
        var H = g(s[L]);
        H !== u && (d = d === u ? H : d + H);
      }
      return d;
    }
    function Jr(s, g) {
      for (var d = -1, L = Array(s); ++d < s; )
        L[d] = g(d);
      return L;
    }
    function El(s, g) {
      return tn(g, function(d) {
        return [d, s[d]];
      });
    }
    function $u(s) {
      return s && s.slice(0, Ku(s) + 1).replace(Br, "");
    }
    function Tn(s) {
      return function(g) {
        return s(g);
      };
    }
    function Qr(s, g) {
      return tn(g, function(d) {
        return s[d];
      });
    }
    function oe(s, g) {
      return s.has(g);
    }
    function ku(s, g) {
      for (var d = -1, L = s.length; ++d < L && Bt(g, s[d], 0) > -1; )
        ;
      return d;
    }
    function Gu(s, g) {
      for (var d = s.length; d-- && Bt(g, s[d], 0) > -1; )
        ;
      return d;
    }
    function Ol(s, g) {
      for (var d = s.length, L = 0; d--; )
        s[d] === g && ++L;
      return L;
    }
    var Al = Yr(gl), Nl = Yr(pl);
    function Pl(s) {
      return "\\" + vl[s];
    }
    function Fl(s, g) {
      return s == null ? u : s[g];
    }
    function Mt(s) {
      return sl.test(s);
    }
    function Wl(s) {
      return cl.test(s);
    }
    function Bl(s) {
      for (var g, d = []; !(g = s.next()).done; )
        d.push(g.value);
      return d;
    }
    function Vr(s) {
      var g = -1, d = Array(s.size);
      return s.forEach(function(L, P) {
        d[++g] = [P, L];
      }), d;
    }
    function Hu(s, g) {
      return function(d) {
        return s(g(d));
      };
    }
    function _t(s, g) {
      for (var d = -1, L = s.length, P = 0, H = []; ++d < L; ) {
        var ln = s[d];
        (ln === g || ln === B) && (s[d] = B, H[P++] = d);
      }
      return H;
    }
    function We(s) {
      var g = -1, d = Array(s.size);
      return s.forEach(function(L) {
        d[++g] = L;
      }), d;
    }
    function Ml(s) {
      var g = -1, d = Array(s.size);
      return s.forEach(function(L) {
        d[++g] = [L, L];
      }), d;
    }
    function Dl(s, g, d) {
      for (var L = d - 1, P = s.length; ++L < P; )
        if (s[L] === g)
          return L;
      return -1;
    }
    function Ul(s, g, d) {
      for (var L = d + 1; L--; )
        if (s[L] === g)
          return L;
      return L;
    }
    function Dt(s) {
      return Mt(s) ? kl(s) : Ll(s);
    }
    function zn(s) {
      return Mt(s) ? Gl(s) : yl(s);
    }
    function Ku(s) {
      for (var g = s.length; g-- && Oa.test(s.charAt(g)); )
        ;
      return g;
    }
    var $l = Yr(_l);
    function kl(s) {
      for (var g = kr.lastIndex = 0; kr.test(s); )
        ++g;
      return g;
    }
    function Gl(s) {
      return s.match(kr) || [];
    }
    function Hl(s) {
      return s.match(ll) || [];
    }
    var Kl = function s(g) {
      g = g == null ? hn : Ut.defaults(hn.Object(), g, Ut.pick(hn, hl));
      var d = g.Array, L = g.Date, P = g.Error, H = g.Function, ln = g.Math, X = g.Object, jr = g.RegExp, zl = g.String, Mn = g.TypeError, Be = d.prototype, ql = H.prototype, $t = X.prototype, Me = g["__core-js_shared__"], De = ql.toString, q = $t.hasOwnProperty, Xl = 0, zu = function() {
        var n = /[^.]+$/.exec(Me && Me.keys && Me.keys.IE_PROTO || "");
        return n ? "Symbol(src)_1." + n : "";
      }(), Ue = $t.toString, Yl = De.call(X), Zl = hn._, Jl = jr(
        "^" + De.call(q).replace(Wr, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
      ), $e = Su ? g.Buffer : u, vt = g.Symbol, ke = g.Uint8Array, qu = $e ? $e.allocUnsafe : u, Ge = Hu(X.getPrototypeOf, X), Xu = X.create, Yu = $t.propertyIsEnumerable, He = Be.splice, Zu = vt ? vt.isConcatSpreadable : u, ae = vt ? vt.iterator : u, yt = vt ? vt.toStringTag : u, Ke = function() {
        try {
          var n = Ot(X, "defineProperty");
          return n({}, "", {}), n;
        } catch {
        }
      }(), Ql = g.clearTimeout !== hn.clearTimeout && g.clearTimeout, Vl = L && L.now !== hn.Date.now && L.now, jl = g.setTimeout !== hn.setTimeout && g.setTimeout, ze = ln.ceil, qe = ln.floor, ni = X.getOwnPropertySymbols, ns = $e ? $e.isBuffer : u, Ju = g.isFinite, ts = Be.join, es = Hu(X.keys, X), sn = ln.max, gn = ln.min, rs = L.now, is = g.parseInt, Qu = ln.random, us = Be.reverse, ti = Ot(g, "DataView"), le = Ot(g, "Map"), ei = Ot(g, "Promise"), kt = Ot(g, "Set"), se = Ot(g, "WeakMap"), ce = Ot(X, "create"), Xe = se && new se(), Gt = {}, fs = At(ti), os = At(le), as = At(ei), ls = At(kt), ss = At(se), Ye = vt ? vt.prototype : u, he = Ye ? Ye.valueOf : u, Vu = Ye ? Ye.toString : u;
      function f(n) {
        if (fn(n) && !F(n) && !(n instanceof $)) {
          if (n instanceof Dn)
            return n;
          if (q.call(n, "__wrapped__"))
            return no(n);
        }
        return new Dn(n);
      }
      var Ht = /* @__PURE__ */ function() {
        function n() {
        }
        return function(t) {
          if (!en(t))
            return {};
          if (Xu)
            return Xu(t);
          n.prototype = t;
          var e = new n();
          return n.prototype = u, e;
        };
      }();
      function Ze() {
      }
      function Dn(n, t) {
        this.__wrapped__ = n, this.__actions__ = [], this.__chain__ = !!t, this.__index__ = 0, this.__values__ = u;
      }
      f.templateSettings = {
        /**
         * Used to detect `data` property values to be HTML-escaped.
         *
         * @memberOf _.templateSettings
         * @type {RegExp}
         */
        escape: La,
        /**
         * Used to detect code to be evaluated.
         *
         * @memberOf _.templateSettings
         * @type {RegExp}
         */
        evaluate: ya,
        /**
         * Used to detect `data` property values to inject.
         *
         * @memberOf _.templateSettings
         * @type {RegExp}
         */
        interpolate: ou,
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
          _: f
        }
      }, f.prototype = Ze.prototype, f.prototype.constructor = f, Dn.prototype = Ht(Ze.prototype), Dn.prototype.constructor = Dn;
      function $(n) {
        this.__wrapped__ = n, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = Zn, this.__views__ = [];
      }
      function cs() {
        var n = new $(this.__wrapped__);
        return n.__actions__ = xn(this.__actions__), n.__dir__ = this.__dir__, n.__filtered__ = this.__filtered__, n.__iteratees__ = xn(this.__iteratees__), n.__takeCount__ = this.__takeCount__, n.__views__ = xn(this.__views__), n;
      }
      function hs() {
        if (this.__filtered__) {
          var n = new $(this);
          n.__dir__ = -1, n.__filtered__ = !0;
        } else
          n = this.clone(), n.__dir__ *= -1;
        return n;
      }
      function ds() {
        var n = this.__wrapped__.value(), t = this.__dir__, e = F(n), r = t < 0, i = e ? n.length : 0, o = yc(0, i, this.__views__), a = o.start, l = o.end, c = l - a, _ = r ? l : a - 1, m = this.__iteratees__, b = m.length, C = 0, y = gn(c, this.__takeCount__);
        if (!e || !r && i == c && y == c)
          return Rf(n, this.__actions__);
        var O = [];
        n:
          for (; c-- && C < y; ) {
            _ += t;
            for (var M = -1, A = n[_]; ++M < b; ) {
              var U = m[M], k = U.iteratee, On = U.type, mn = k(A);
              if (On == oa)
                A = mn;
              else if (!mn) {
                if (On == eu)
                  continue n;
                break n;
              }
            }
            O[C++] = A;
          }
        return O;
      }
      $.prototype = Ht(Ze.prototype), $.prototype.constructor = $;
      function It(n) {
        var t = -1, e = n == null ? 0 : n.length;
        for (this.clear(); ++t < e; ) {
          var r = n[t];
          this.set(r[0], r[1]);
        }
      }
      function gs() {
        this.__data__ = ce ? ce(null) : {}, this.size = 0;
      }
      function ps(n) {
        var t = this.has(n) && delete this.__data__[n];
        return this.size -= t ? 1 : 0, t;
      }
      function _s(n) {
        var t = this.__data__;
        if (ce) {
          var e = t[n];
          return e === I ? u : e;
        }
        return q.call(t, n) ? t[n] : u;
      }
      function vs(n) {
        var t = this.__data__;
        return ce ? t[n] !== u : q.call(t, n);
      }
      function ms(n, t) {
        var e = this.__data__;
        return this.size += this.has(n) ? 0 : 1, e[n] = ce && t === u ? I : t, this;
      }
      It.prototype.clear = gs, It.prototype.delete = ps, It.prototype.get = _s, It.prototype.has = vs, It.prototype.set = ms;
      function et(n) {
        var t = -1, e = n == null ? 0 : n.length;
        for (this.clear(); ++t < e; ) {
          var r = n[t];
          this.set(r[0], r[1]);
        }
      }
      function ws() {
        this.__data__ = [], this.size = 0;
      }
      function bs(n) {
        var t = this.__data__, e = Je(t, n);
        if (e < 0)
          return !1;
        var r = t.length - 1;
        return e == r ? t.pop() : He.call(t, e, 1), --this.size, !0;
      }
      function xs(n) {
        var t = this.__data__, e = Je(t, n);
        return e < 0 ? u : t[e][1];
      }
      function Cs(n) {
        return Je(this.__data__, n) > -1;
      }
      function Rs(n, t) {
        var e = this.__data__, r = Je(e, n);
        return r < 0 ? (++this.size, e.push([n, t])) : e[r][1] = t, this;
      }
      et.prototype.clear = ws, et.prototype.delete = bs, et.prototype.get = xs, et.prototype.has = Cs, et.prototype.set = Rs;
      function rt(n) {
        var t = -1, e = n == null ? 0 : n.length;
        for (this.clear(); ++t < e; ) {
          var r = n[t];
          this.set(r[0], r[1]);
        }
      }
      function Ls() {
        this.size = 0, this.__data__ = {
          hash: new It(),
          map: new (le || et)(),
          string: new It()
        };
      }
      function ys(n) {
        var t = ar(this, n).delete(n);
        return this.size -= t ? 1 : 0, t;
      }
      function Is(n) {
        return ar(this, n).get(n);
      }
      function Ts(n) {
        return ar(this, n).has(n);
      }
      function Ss(n, t) {
        var e = ar(this, n), r = e.size;
        return e.set(n, t), this.size += e.size == r ? 0 : 1, this;
      }
      rt.prototype.clear = Ls, rt.prototype.delete = ys, rt.prototype.get = Is, rt.prototype.has = Ts, rt.prototype.set = Ss;
      function Tt(n) {
        var t = -1, e = n == null ? 0 : n.length;
        for (this.__data__ = new rt(); ++t < e; )
          this.add(n[t]);
      }
      function Es(n) {
        return this.__data__.set(n, I), this;
      }
      function Os(n) {
        return this.__data__.has(n);
      }
      Tt.prototype.add = Tt.prototype.push = Es, Tt.prototype.has = Os;
      function qn(n) {
        var t = this.__data__ = new et(n);
        this.size = t.size;
      }
      function As() {
        this.__data__ = new et(), this.size = 0;
      }
      function Ns(n) {
        var t = this.__data__, e = t.delete(n);
        return this.size = t.size, e;
      }
      function Ps(n) {
        return this.__data__.get(n);
      }
      function Fs(n) {
        return this.__data__.has(n);
      }
      function Ws(n, t) {
        var e = this.__data__;
        if (e instanceof et) {
          var r = e.__data__;
          if (!le || r.length < x - 1)
            return r.push([n, t]), this.size = ++e.size, this;
          e = this.__data__ = new rt(r);
        }
        return e.set(n, t), this.size = e.size, this;
      }
      qn.prototype.clear = As, qn.prototype.delete = Ns, qn.prototype.get = Ps, qn.prototype.has = Fs, qn.prototype.set = Ws;
      function ju(n, t) {
        var e = F(n), r = !e && Nt(n), i = !e && !r && Ct(n), o = !e && !r && !i && Xt(n), a = e || r || i || o, l = a ? Jr(n.length, zl) : [], c = l.length;
        for (var _ in n)
          (t || q.call(n, _)) && !(a && // Safari 9 has enumerable `arguments.length` in strict mode.
          (_ == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
          i && (_ == "offset" || _ == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
          o && (_ == "buffer" || _ == "byteLength" || _ == "byteOffset") || // Skip index properties.
          ot(_, c))) && l.push(_);
        return l;
      }
      function nf(n) {
        var t = n.length;
        return t ? n[di(0, t - 1)] : u;
      }
      function Bs(n, t) {
        return lr(xn(n), St(t, 0, n.length));
      }
      function Ms(n) {
        return lr(xn(n));
      }
      function ri(n, t, e) {
        (e !== u && !Xn(n[t], e) || e === u && !(t in n)) && it(n, t, e);
      }
      function de(n, t, e) {
        var r = n[t];
        (!(q.call(n, t) && Xn(r, e)) || e === u && !(t in n)) && it(n, t, e);
      }
      function Je(n, t) {
        for (var e = n.length; e--; )
          if (Xn(n[e][0], t))
            return e;
        return -1;
      }
      function Ds(n, t, e, r) {
        return mt(n, function(i, o, a) {
          t(r, i, e(i), a);
        }), r;
      }
      function tf(n, t) {
        return n && Qn(t, cn(t), n);
      }
      function Us(n, t) {
        return n && Qn(t, Rn(t), n);
      }
      function it(n, t, e) {
        t == "__proto__" && Ke ? Ke(n, t, {
          configurable: !0,
          enumerable: !0,
          value: e,
          writable: !0
        }) : n[t] = e;
      }
      function ii(n, t) {
        for (var e = -1, r = t.length, i = d(r), o = n == null; ++e < r; )
          i[e] = o ? u : Di(n, t[e]);
        return i;
      }
      function St(n, t, e) {
        return n === n && (e !== u && (n = n <= e ? n : e), t !== u && (n = n >= t ? n : t)), n;
      }
      function Un(n, t, e, r, i, o) {
        var a, l = t & G, c = t & K, _ = t & j;
        if (e && (a = i ? e(n, r, i, o) : e(n)), a !== u)
          return a;
        if (!en(n))
          return n;
        var m = F(n);
        if (m) {
          if (a = Tc(n), !l)
            return xn(n, a);
        } else {
          var b = pn(n), C = b == Se || b == ru;
          if (Ct(n))
            return If(n, l);
          if (b == tt || b == Pt || C && !i) {
            if (a = c || C ? {} : zf(n), !l)
              return c ? _c(n, Us(a, n)) : pc(n, tf(a, n));
          } else {
            if (!J[b])
              return i ? n : {};
            a = Sc(n, b, l);
          }
        }
        o || (o = new qn());
        var y = o.get(n);
        if (y)
          return y;
        o.set(n, a), xo(n) ? n.forEach(function(A) {
          a.add(Un(A, t, e, A, n, o));
        }) : wo(n) && n.forEach(function(A, U) {
          a.set(U, Un(A, t, e, U, n, o));
        });
        var O = _ ? c ? Li : Ri : c ? Rn : cn, M = m ? u : O(n);
        return Bn(M || n, function(A, U) {
          M && (U = A, A = n[U]), de(a, U, Un(A, t, e, U, n, o));
        }), a;
      }
      function $s(n) {
        var t = cn(n);
        return function(e) {
          return ef(e, n, t);
        };
      }
      function ef(n, t, e) {
        var r = e.length;
        if (n == null)
          return !r;
        for (n = X(n); r--; ) {
          var i = e[r], o = t[i], a = n[i];
          if (a === u && !(i in n) || !o(a))
            return !1;
        }
        return !0;
      }
      function rf(n, t, e) {
        if (typeof n != "function")
          throw new Mn(R);
        return be(function() {
          n.apply(u, e);
        }, t);
      }
      function ge(n, t, e, r) {
        var i = -1, o = Pe, a = !0, l = n.length, c = [], _ = t.length;
        if (!l)
          return c;
        e && (t = tn(t, Tn(e))), r ? (o = Kr, a = !1) : t.length >= x && (o = oe, a = !1, t = new Tt(t));
        n:
          for (; ++i < l; ) {
            var m = n[i], b = e == null ? m : e(m);
            if (m = r || m !== 0 ? m : 0, a && b === b) {
              for (var C = _; C--; )
                if (t[C] === b)
                  continue n;
              c.push(m);
            } else o(t, b, r) || c.push(m);
          }
        return c;
      }
      var mt = Af(Jn), uf = Af(fi, !0);
      function ks(n, t) {
        var e = !0;
        return mt(n, function(r, i, o) {
          return e = !!t(r, i, o), e;
        }), e;
      }
      function Qe(n, t, e) {
        for (var r = -1, i = n.length; ++r < i; ) {
          var o = n[r], a = t(o);
          if (a != null && (l === u ? a === a && !En(a) : e(a, l)))
            var l = a, c = o;
        }
        return c;
      }
      function Gs(n, t, e, r) {
        var i = n.length;
        for (e = W(e), e < 0 && (e = -e > i ? 0 : i + e), r = r === u || r > i ? i : W(r), r < 0 && (r += i), r = e > r ? 0 : Ro(r); e < r; )
          n[e++] = t;
        return n;
      }
      function ff(n, t) {
        var e = [];
        return mt(n, function(r, i, o) {
          t(r, i, o) && e.push(r);
        }), e;
      }
      function dn(n, t, e, r, i) {
        var o = -1, a = n.length;
        for (e || (e = Oc), i || (i = []); ++o < a; ) {
          var l = n[o];
          t > 0 && e(l) ? t > 1 ? dn(l, t - 1, e, r, i) : pt(i, l) : r || (i[i.length] = l);
        }
        return i;
      }
      var ui = Nf(), of = Nf(!0);
      function Jn(n, t) {
        return n && ui(n, t, cn);
      }
      function fi(n, t) {
        return n && of(n, t, cn);
      }
      function Ve(n, t) {
        return gt(t, function(e) {
          return at(n[e]);
        });
      }
      function Et(n, t) {
        t = bt(t, n);
        for (var e = 0, r = t.length; n != null && e < r; )
          n = n[Vn(t[e++])];
        return e && e == r ? n : u;
      }
      function af(n, t, e) {
        var r = t(n);
        return F(n) ? r : pt(r, e(n));
      }
      function _n(n) {
        return n == null ? n === u ? va : pa : yt && yt in X(n) ? Lc(n) : Mc(n);
      }
      function oi(n, t) {
        return n > t;
      }
      function Hs(n, t) {
        return n != null && q.call(n, t);
      }
      function Ks(n, t) {
        return n != null && t in X(n);
      }
      function zs(n, t, e) {
        return n >= gn(t, e) && n < sn(t, e);
      }
      function ai(n, t, e) {
        for (var r = e ? Kr : Pe, i = n[0].length, o = n.length, a = o, l = d(o), c = 1 / 0, _ = []; a--; ) {
          var m = n[a];
          a && t && (m = tn(m, Tn(t))), c = gn(m.length, c), l[a] = !e && (t || i >= 120 && m.length >= 120) ? new Tt(a && m) : u;
        }
        m = n[0];
        var b = -1, C = l[0];
        n:
          for (; ++b < i && _.length < c; ) {
            var y = m[b], O = t ? t(y) : y;
            if (y = e || y !== 0 ? y : 0, !(C ? oe(C, O) : r(_, O, e))) {
              for (a = o; --a; ) {
                var M = l[a];
                if (!(M ? oe(M, O) : r(n[a], O, e)))
                  continue n;
              }
              C && C.push(O), _.push(y);
            }
          }
        return _;
      }
      function qs(n, t, e, r) {
        return Jn(n, function(i, o, a) {
          t(r, e(i), o, a);
        }), r;
      }
      function pe(n, t, e) {
        t = bt(t, n), n = Zf(n, t);
        var r = n == null ? n : n[Vn(kn(t))];
        return r == null ? u : In(r, n, e);
      }
      function lf(n) {
        return fn(n) && _n(n) == Pt;
      }
      function Xs(n) {
        return fn(n) && _n(n) == fe;
      }
      function Ys(n) {
        return fn(n) && _n(n) == te;
      }
      function _e(n, t, e, r, i) {
        return n === t ? !0 : n == null || t == null || !fn(n) && !fn(t) ? n !== n && t !== t : Zs(n, t, e, r, _e, i);
      }
      function Zs(n, t, e, r, i, o) {
        var a = F(n), l = F(t), c = a ? Ie : pn(n), _ = l ? Ie : pn(t);
        c = c == Pt ? tt : c, _ = _ == Pt ? tt : _;
        var m = c == tt, b = _ == tt, C = c == _;
        if (C && Ct(n)) {
          if (!Ct(t))
            return !1;
          a = !0, m = !1;
        }
        if (C && !m)
          return o || (o = new qn()), a || Xt(n) ? Gf(n, t, e, r, i, o) : Cc(n, t, c, e, r, i, o);
        if (!(e & wn)) {
          var y = m && q.call(n, "__wrapped__"), O = b && q.call(t, "__wrapped__");
          if (y || O) {
            var M = y ? n.value() : n, A = O ? t.value() : t;
            return o || (o = new qn()), i(M, A, e, r, o);
          }
        }
        return C ? (o || (o = new qn()), Rc(n, t, e, r, i, o)) : !1;
      }
      function Js(n) {
        return fn(n) && pn(n) == Hn;
      }
      function li(n, t, e, r) {
        var i = e.length, o = i, a = !r;
        if (n == null)
          return !o;
        for (n = X(n); i--; ) {
          var l = e[i];
          if (a && l[2] ? l[1] !== n[l[0]] : !(l[0] in n))
            return !1;
        }
        for (; ++i < o; ) {
          l = e[i];
          var c = l[0], _ = n[c], m = l[1];
          if (a && l[2]) {
            if (_ === u && !(c in n))
              return !1;
          } else {
            var b = new qn();
            if (r)
              var C = r(_, m, c, n, t, b);
            if (!(C === u ? _e(m, _, wn | Z, r, b) : C))
              return !1;
          }
        }
        return !0;
      }
      function sf(n) {
        if (!en(n) || Nc(n))
          return !1;
        var t = at(n) ? Jl : $a;
        return t.test(At(n));
      }
      function Qs(n) {
        return fn(n) && _n(n) == re;
      }
      function Vs(n) {
        return fn(n) && pn(n) == Kn;
      }
      function js(n) {
        return fn(n) && pr(n.length) && !!V[_n(n)];
      }
      function cf(n) {
        return typeof n == "function" ? n : n == null ? Ln : typeof n == "object" ? F(n) ? gf(n[0], n[1]) : df(n) : Fo(n);
      }
      function si(n) {
        if (!we(n))
          return es(n);
        var t = [];
        for (var e in X(n))
          q.call(n, e) && e != "constructor" && t.push(e);
        return t;
      }
      function nc(n) {
        if (!en(n))
          return Bc(n);
        var t = we(n), e = [];
        for (var r in n)
          r == "constructor" && (t || !q.call(n, r)) || e.push(r);
        return e;
      }
      function ci(n, t) {
        return n < t;
      }
      function hf(n, t) {
        var e = -1, r = Cn(n) ? d(n.length) : [];
        return mt(n, function(i, o, a) {
          r[++e] = t(i, o, a);
        }), r;
      }
      function df(n) {
        var t = Ii(n);
        return t.length == 1 && t[0][2] ? Xf(t[0][0], t[0][1]) : function(e) {
          return e === n || li(e, n, t);
        };
      }
      function gf(n, t) {
        return Si(n) && qf(t) ? Xf(Vn(n), t) : function(e) {
          var r = Di(e, n);
          return r === u && r === t ? Ui(e, n) : _e(t, r, wn | Z);
        };
      }
      function je(n, t, e, r, i) {
        n !== t && ui(t, function(o, a) {
          if (i || (i = new qn()), en(o))
            tc(n, t, a, e, je, r, i);
          else {
            var l = r ? r(Oi(n, a), o, a + "", n, t, i) : u;
            l === u && (l = o), ri(n, a, l);
          }
        }, Rn);
      }
      function tc(n, t, e, r, i, o, a) {
        var l = Oi(n, e), c = Oi(t, e), _ = a.get(c);
        if (_) {
          ri(n, e, _);
          return;
        }
        var m = o ? o(l, c, e + "", n, t, a) : u, b = m === u;
        if (b) {
          var C = F(c), y = !C && Ct(c), O = !C && !y && Xt(c);
          m = c, C || y || O ? F(l) ? m = l : on(l) ? m = xn(l) : y ? (b = !1, m = If(c, !0)) : O ? (b = !1, m = Tf(c, !0)) : m = [] : xe(c) || Nt(c) ? (m = l, Nt(l) ? m = Lo(l) : (!en(l) || at(l)) && (m = zf(c))) : b = !1;
        }
        b && (a.set(c, m), i(m, c, r, o, a), a.delete(c)), ri(n, e, m);
      }
      function pf(n, t) {
        var e = n.length;
        if (e)
          return t += t < 0 ? e : 0, ot(t, e) ? n[t] : u;
      }
      function _f(n, t, e) {
        t.length ? t = tn(t, function(o) {
          return F(o) ? function(a) {
            return Et(a, o.length === 1 ? o[0] : o);
          } : o;
        }) : t = [Ln];
        var r = -1;
        t = tn(t, Tn(E()));
        var i = hf(n, function(o, a, l) {
          var c = tn(t, function(_) {
            return _(o);
          });
          return { criteria: c, index: ++r, value: o };
        });
        return Sl(i, function(o, a) {
          return gc(o, a, e);
        });
      }
      function ec(n, t) {
        return vf(n, t, function(e, r) {
          return Ui(n, r);
        });
      }
      function vf(n, t, e) {
        for (var r = -1, i = t.length, o = {}; ++r < i; ) {
          var a = t[r], l = Et(n, a);
          e(l, a) && ve(o, bt(a, n), l);
        }
        return o;
      }
      function rc(n) {
        return function(t) {
          return Et(t, n);
        };
      }
      function hi(n, t, e, r) {
        var i = r ? Tl : Bt, o = -1, a = t.length, l = n;
        for (n === t && (t = xn(t)), e && (l = tn(n, Tn(e))); ++o < a; )
          for (var c = 0, _ = t[o], m = e ? e(_) : _; (c = i(l, m, c, r)) > -1; )
            l !== n && He.call(l, c, 1), He.call(n, c, 1);
        return n;
      }
      function mf(n, t) {
        for (var e = n ? t.length : 0, r = e - 1; e--; ) {
          var i = t[e];
          if (e == r || i !== o) {
            var o = i;
            ot(i) ? He.call(n, i, 1) : _i(n, i);
          }
        }
        return n;
      }
      function di(n, t) {
        return n + qe(Qu() * (t - n + 1));
      }
      function ic(n, t, e, r) {
        for (var i = -1, o = sn(ze((t - n) / (e || 1)), 0), a = d(o); o--; )
          a[r ? o : ++i] = n, n += e;
        return a;
      }
      function gi(n, t) {
        var e = "";
        if (!n || t < 1 || t > dt)
          return e;
        do
          t % 2 && (e += n), t = qe(t / 2), t && (n += n);
        while (t);
        return e;
      }
      function D(n, t) {
        return Ai(Yf(n, t, Ln), n + "");
      }
      function uc(n) {
        return nf(Yt(n));
      }
      function fc(n, t) {
        var e = Yt(n);
        return lr(e, St(t, 0, e.length));
      }
      function ve(n, t, e, r) {
        if (!en(n))
          return n;
        t = bt(t, n);
        for (var i = -1, o = t.length, a = o - 1, l = n; l != null && ++i < o; ) {
          var c = Vn(t[i]), _ = e;
          if (c === "__proto__" || c === "constructor" || c === "prototype")
            return n;
          if (i != a) {
            var m = l[c];
            _ = r ? r(m, c, l) : u, _ === u && (_ = en(m) ? m : ot(t[i + 1]) ? [] : {});
          }
          de(l, c, _), l = l[c];
        }
        return n;
      }
      var wf = Xe ? function(n, t) {
        return Xe.set(n, t), n;
      } : Ln, oc = Ke ? function(n, t) {
        return Ke(n, "toString", {
          configurable: !0,
          enumerable: !1,
          value: ki(t),
          writable: !0
        });
      } : Ln;
      function ac(n) {
        return lr(Yt(n));
      }
      function $n(n, t, e) {
        var r = -1, i = n.length;
        t < 0 && (t = -t > i ? 0 : i + t), e = e > i ? i : e, e < 0 && (e += i), i = t > e ? 0 : e - t >>> 0, t >>>= 0;
        for (var o = d(i); ++r < i; )
          o[r] = n[r + t];
        return o;
      }
      function lc(n, t) {
        var e;
        return mt(n, function(r, i, o) {
          return e = t(r, i, o), !e;
        }), !!e;
      }
      function nr(n, t, e) {
        var r = 0, i = n == null ? r : n.length;
        if (typeof t == "number" && t === t && i <= ca) {
          for (; r < i; ) {
            var o = r + i >>> 1, a = n[o];
            a !== null && !En(a) && (e ? a <= t : a < t) ? r = o + 1 : i = o;
          }
          return i;
        }
        return pi(n, t, Ln, e);
      }
      function pi(n, t, e, r) {
        var i = 0, o = n == null ? 0 : n.length;
        if (o === 0)
          return 0;
        t = e(t);
        for (var a = t !== t, l = t === null, c = En(t), _ = t === u; i < o; ) {
          var m = qe((i + o) / 2), b = e(n[m]), C = b !== u, y = b === null, O = b === b, M = En(b);
          if (a)
            var A = r || O;
          else _ ? A = O && (r || C) : l ? A = O && C && (r || !y) : c ? A = O && C && !y && (r || !M) : y || M ? A = !1 : A = r ? b <= t : b < t;
          A ? i = m + 1 : o = m;
        }
        return gn(o, sa);
      }
      function bf(n, t) {
        for (var e = -1, r = n.length, i = 0, o = []; ++e < r; ) {
          var a = n[e], l = t ? t(a) : a;
          if (!e || !Xn(l, c)) {
            var c = l;
            o[i++] = a === 0 ? 0 : a;
          }
        }
        return o;
      }
      function xf(n) {
        return typeof n == "number" ? n : En(n) ? ye : +n;
      }
      function Sn(n) {
        if (typeof n == "string")
          return n;
        if (F(n))
          return tn(n, Sn) + "";
        if (En(n))
          return Vu ? Vu.call(n) : "";
        var t = n + "";
        return t == "0" && 1 / n == -Rt ? "-0" : t;
      }
      function wt(n, t, e) {
        var r = -1, i = Pe, o = n.length, a = !0, l = [], c = l;
        if (e)
          a = !1, i = Kr;
        else if (o >= x) {
          var _ = t ? null : bc(n);
          if (_)
            return We(_);
          a = !1, i = oe, c = new Tt();
        } else
          c = t ? [] : l;
        n:
          for (; ++r < o; ) {
            var m = n[r], b = t ? t(m) : m;
            if (m = e || m !== 0 ? m : 0, a && b === b) {
              for (var C = c.length; C--; )
                if (c[C] === b)
                  continue n;
              t && c.push(b), l.push(m);
            } else i(c, b, e) || (c !== l && c.push(b), l.push(m));
          }
        return l;
      }
      function _i(n, t) {
        return t = bt(t, n), n = Zf(n, t), n == null || delete n[Vn(kn(t))];
      }
      function Cf(n, t, e, r) {
        return ve(n, t, e(Et(n, t)), r);
      }
      function tr(n, t, e, r) {
        for (var i = n.length, o = r ? i : -1; (r ? o-- : ++o < i) && t(n[o], o, n); )
          ;
        return e ? $n(n, r ? 0 : o, r ? o + 1 : i) : $n(n, r ? o + 1 : 0, r ? i : o);
      }
      function Rf(n, t) {
        var e = n;
        return e instanceof $ && (e = e.value()), zr(t, function(r, i) {
          return i.func.apply(i.thisArg, pt([r], i.args));
        }, e);
      }
      function vi(n, t, e) {
        var r = n.length;
        if (r < 2)
          return r ? wt(n[0]) : [];
        for (var i = -1, o = d(r); ++i < r; )
          for (var a = n[i], l = -1; ++l < r; )
            l != i && (o[i] = ge(o[i] || a, n[l], t, e));
        return wt(dn(o, 1), t, e);
      }
      function Lf(n, t, e) {
        for (var r = -1, i = n.length, o = t.length, a = {}; ++r < i; ) {
          var l = r < o ? t[r] : u;
          e(a, n[r], l);
        }
        return a;
      }
      function mi(n) {
        return on(n) ? n : [];
      }
      function wi(n) {
        return typeof n == "function" ? n : Ln;
      }
      function bt(n, t) {
        return F(n) ? n : Si(n, t) ? [n] : jf(z(n));
      }
      var sc = D;
      function xt(n, t, e) {
        var r = n.length;
        return e = e === u ? r : e, !t && e >= r ? n : $n(n, t, e);
      }
      var yf = Ql || function(n) {
        return hn.clearTimeout(n);
      };
      function If(n, t) {
        if (t)
          return n.slice();
        var e = n.length, r = qu ? qu(e) : new n.constructor(e);
        return n.copy(r), r;
      }
      function bi(n) {
        var t = new n.constructor(n.byteLength);
        return new ke(t).set(new ke(n)), t;
      }
      function cc(n, t) {
        var e = t ? bi(n.buffer) : n.buffer;
        return new n.constructor(e, n.byteOffset, n.byteLength);
      }
      function hc(n) {
        var t = new n.constructor(n.source, au.exec(n));
        return t.lastIndex = n.lastIndex, t;
      }
      function dc(n) {
        return he ? X(he.call(n)) : {};
      }
      function Tf(n, t) {
        var e = t ? bi(n.buffer) : n.buffer;
        return new n.constructor(e, n.byteOffset, n.length);
      }
      function Sf(n, t) {
        if (n !== t) {
          var e = n !== u, r = n === null, i = n === n, o = En(n), a = t !== u, l = t === null, c = t === t, _ = En(t);
          if (!l && !_ && !o && n > t || o && a && c && !l && !_ || r && a && c || !e && c || !i)
            return 1;
          if (!r && !o && !_ && n < t || _ && e && i && !r && !o || l && e && i || !a && i || !c)
            return -1;
        }
        return 0;
      }
      function gc(n, t, e) {
        for (var r = -1, i = n.criteria, o = t.criteria, a = i.length, l = e.length; ++r < a; ) {
          var c = Sf(i[r], o[r]);
          if (c) {
            if (r >= l)
              return c;
            var _ = e[r];
            return c * (_ == "desc" ? -1 : 1);
          }
        }
        return n.index - t.index;
      }
      function Ef(n, t, e, r) {
        for (var i = -1, o = n.length, a = e.length, l = -1, c = t.length, _ = sn(o - a, 0), m = d(c + _), b = !r; ++l < c; )
          m[l] = t[l];
        for (; ++i < a; )
          (b || i < o) && (m[e[i]] = n[i]);
        for (; _--; )
          m[l++] = n[i++];
        return m;
      }
      function Of(n, t, e, r) {
        for (var i = -1, o = n.length, a = -1, l = e.length, c = -1, _ = t.length, m = sn(o - l, 0), b = d(m + _), C = !r; ++i < m; )
          b[i] = n[i];
        for (var y = i; ++c < _; )
          b[y + c] = t[c];
        for (; ++a < l; )
          (C || i < o) && (b[y + e[a]] = n[i++]);
        return b;
      }
      function xn(n, t) {
        var e = -1, r = n.length;
        for (t || (t = d(r)); ++e < r; )
          t[e] = n[e];
        return t;
      }
      function Qn(n, t, e, r) {
        var i = !e;
        e || (e = {});
        for (var o = -1, a = t.length; ++o < a; ) {
          var l = t[o], c = r ? r(e[l], n[l], l, e, n) : u;
          c === u && (c = n[l]), i ? it(e, l, c) : de(e, l, c);
        }
        return e;
      }
      function pc(n, t) {
        return Qn(n, Ti(n), t);
      }
      function _c(n, t) {
        return Qn(n, Hf(n), t);
      }
      function er(n, t) {
        return function(e, r) {
          var i = F(e) ? xl : Ds, o = t ? t() : {};
          return i(e, n, E(r, 2), o);
        };
      }
      function Kt(n) {
        return D(function(t, e) {
          var r = -1, i = e.length, o = i > 1 ? e[i - 1] : u, a = i > 2 ? e[2] : u;
          for (o = n.length > 3 && typeof o == "function" ? (i--, o) : u, a && vn(e[0], e[1], a) && (o = i < 3 ? u : o, i = 1), t = X(t); ++r < i; ) {
            var l = e[r];
            l && n(t, l, r, o);
          }
          return t;
        });
      }
      function Af(n, t) {
        return function(e, r) {
          if (e == null)
            return e;
          if (!Cn(e))
            return n(e, r);
          for (var i = e.length, o = t ? i : -1, a = X(e); (t ? o-- : ++o < i) && r(a[o], o, a) !== !1; )
            ;
          return e;
        };
      }
      function Nf(n) {
        return function(t, e, r) {
          for (var i = -1, o = X(t), a = r(t), l = a.length; l--; ) {
            var c = a[n ? l : ++i];
            if (e(o[c], c, o) === !1)
              break;
          }
          return t;
        };
      }
      function vc(n, t, e) {
        var r = t & nn, i = me(n);
        function o() {
          var a = this && this !== hn && this instanceof o ? i : n;
          return a.apply(r ? e : this, arguments);
        }
        return o;
      }
      function Pf(n) {
        return function(t) {
          t = z(t);
          var e = Mt(t) ? zn(t) : u, r = e ? e[0] : t.charAt(0), i = e ? xt(e, 1).join("") : t.slice(1);
          return r[n]() + i;
        };
      }
      function zt(n) {
        return function(t) {
          return zr(No(Ao(t).replace(ol, "")), n, "");
        };
      }
      function me(n) {
        return function() {
          var t = arguments;
          switch (t.length) {
            case 0:
              return new n();
            case 1:
              return new n(t[0]);
            case 2:
              return new n(t[0], t[1]);
            case 3:
              return new n(t[0], t[1], t[2]);
            case 4:
              return new n(t[0], t[1], t[2], t[3]);
            case 5:
              return new n(t[0], t[1], t[2], t[3], t[4]);
            case 6:
              return new n(t[0], t[1], t[2], t[3], t[4], t[5]);
            case 7:
              return new n(t[0], t[1], t[2], t[3], t[4], t[5], t[6]);
          }
          var e = Ht(n.prototype), r = n.apply(e, t);
          return en(r) ? r : e;
        };
      }
      function mc(n, t, e) {
        var r = me(n);
        function i() {
          for (var o = arguments.length, a = d(o), l = o, c = qt(i); l--; )
            a[l] = arguments[l];
          var _ = o < 3 && a[0] !== c && a[o - 1] !== c ? [] : _t(a, c);
          if (o -= _.length, o < e)
            return Df(
              n,
              t,
              rr,
              i.placeholder,
              u,
              a,
              _,
              u,
              u,
              e - o
            );
          var m = this && this !== hn && this instanceof i ? r : n;
          return In(m, this, a);
        }
        return i;
      }
      function Ff(n) {
        return function(t, e, r) {
          var i = X(t);
          if (!Cn(t)) {
            var o = E(e, 3);
            t = cn(t), e = function(l) {
              return o(i[l], l, i);
            };
          }
          var a = n(t, e, r);
          return a > -1 ? i[o ? t[a] : a] : u;
        };
      }
      function Wf(n) {
        return ft(function(t) {
          var e = t.length, r = e, i = Dn.prototype.thru;
          for (n && t.reverse(); r--; ) {
            var o = t[r];
            if (typeof o != "function")
              throw new Mn(R);
            if (i && !a && or(o) == "wrapper")
              var a = new Dn([], !0);
          }
          for (r = a ? r : e; ++r < e; ) {
            o = t[r];
            var l = or(o), c = l == "wrapper" ? yi(o) : u;
            c && Ei(c[0]) && c[1] == (nt | bn | un | jt) && !c[4].length && c[9] == 1 ? a = a[or(c[0])].apply(a, c[3]) : a = o.length == 1 && Ei(o) ? a[l]() : a.thru(o);
          }
          return function() {
            var _ = arguments, m = _[0];
            if (a && _.length == 1 && F(m))
              return a.plant(m).value();
            for (var b = 0, C = e ? t[b].apply(this, _) : m; ++b < e; )
              C = t[b].call(this, C);
            return C;
          };
        });
      }
      function rr(n, t, e, r, i, o, a, l, c, _) {
        var m = t & nt, b = t & nn, C = t & Nn, y = t & (bn | Pn), O = t & yr, M = C ? u : me(n);
        function A() {
          for (var U = arguments.length, k = d(U), On = U; On--; )
            k[On] = arguments[On];
          if (y)
            var mn = qt(A), An = Ol(k, mn);
          if (r && (k = Ef(k, r, i, y)), o && (k = Of(k, o, a, y)), U -= An, y && U < _) {
            var an = _t(k, mn);
            return Df(
              n,
              t,
              rr,
              A.placeholder,
              e,
              k,
              an,
              l,
              c,
              _ - U
            );
          }
          var Yn = b ? e : this, st = C ? Yn[n] : n;
          return U = k.length, l ? k = Dc(k, l) : O && U > 1 && k.reverse(), m && c < U && (k.length = c), this && this !== hn && this instanceof A && (st = M || me(st)), st.apply(Yn, k);
        }
        return A;
      }
      function Bf(n, t) {
        return function(e, r) {
          return qs(e, n, t(r), {});
        };
      }
      function ir(n, t) {
        return function(e, r) {
          var i;
          if (e === u && r === u)
            return t;
          if (e !== u && (i = e), r !== u) {
            if (i === u)
              return r;
            typeof e == "string" || typeof r == "string" ? (e = Sn(e), r = Sn(r)) : (e = xf(e), r = xf(r)), i = n(e, r);
          }
          return i;
        };
      }
      function xi(n) {
        return ft(function(t) {
          return t = tn(t, Tn(E())), D(function(e) {
            var r = this;
            return n(t, function(i) {
              return In(i, r, e);
            });
          });
        });
      }
      function ur(n, t) {
        t = t === u ? " " : Sn(t);
        var e = t.length;
        if (e < 2)
          return e ? gi(t, n) : t;
        var r = gi(t, ze(n / Dt(t)));
        return Mt(t) ? xt(zn(r), 0, n).join("") : r.slice(0, n);
      }
      function wc(n, t, e, r) {
        var i = t & nn, o = me(n);
        function a() {
          for (var l = -1, c = arguments.length, _ = -1, m = r.length, b = d(m + c), C = this && this !== hn && this instanceof a ? o : n; ++_ < m; )
            b[_] = r[_];
          for (; c--; )
            b[_++] = arguments[++l];
          return In(C, i ? e : this, b);
        }
        return a;
      }
      function Mf(n) {
        return function(t, e, r) {
          return r && typeof r != "number" && vn(t, e, r) && (e = r = u), t = lt(t), e === u ? (e = t, t = 0) : e = lt(e), r = r === u ? t < e ? 1 : -1 : lt(r), ic(t, e, r, n);
        };
      }
      function fr(n) {
        return function(t, e) {
          return typeof t == "string" && typeof e == "string" || (t = Gn(t), e = Gn(e)), n(t, e);
        };
      }
      function Df(n, t, e, r, i, o, a, l, c, _) {
        var m = t & bn, b = m ? a : u, C = m ? u : a, y = m ? o : u, O = m ? u : o;
        t |= m ? un : Fn, t &= ~(m ? Fn : un), t & Q || (t &= ~(nn | Nn));
        var M = [
          n,
          t,
          i,
          y,
          b,
          O,
          C,
          l,
          c,
          _
        ], A = e.apply(u, M);
        return Ei(n) && Jf(A, M), A.placeholder = r, Qf(A, n, t);
      }
      function Ci(n) {
        var t = ln[n];
        return function(e, r) {
          if (e = Gn(e), r = r == null ? 0 : gn(W(r), 292), r && Ju(e)) {
            var i = (z(e) + "e").split("e"), o = t(i[0] + "e" + (+i[1] + r));
            return i = (z(o) + "e").split("e"), +(i[0] + "e" + (+i[1] - r));
          }
          return t(e);
        };
      }
      var bc = kt && 1 / We(new kt([, -0]))[1] == Rt ? function(n) {
        return new kt(n);
      } : Ki;
      function Uf(n) {
        return function(t) {
          var e = pn(t);
          return e == Hn ? Vr(t) : e == Kn ? Ml(t) : El(t, n(t));
        };
      }
      function ut(n, t, e, r, i, o, a, l) {
        var c = t & Nn;
        if (!c && typeof n != "function")
          throw new Mn(R);
        var _ = r ? r.length : 0;
        if (_ || (t &= ~(un | Fn), r = i = u), a = a === u ? a : sn(W(a), 0), l = l === u ? l : W(l), _ -= i ? i.length : 0, t & Fn) {
          var m = r, b = i;
          r = i = u;
        }
        var C = c ? u : yi(n), y = [
          n,
          t,
          e,
          r,
          i,
          m,
          b,
          o,
          a,
          l
        ];
        if (C && Wc(y, C), n = y[0], t = y[1], e = y[2], r = y[3], i = y[4], l = y[9] = y[9] === u ? c ? 0 : n.length : sn(y[9] - _, 0), !l && t & (bn | Pn) && (t &= ~(bn | Pn)), !t || t == nn)
          var O = vc(n, t, e);
        else t == bn || t == Pn ? O = mc(n, t, l) : (t == un || t == (nn | un)) && !i.length ? O = wc(n, t, e, r) : O = rr.apply(u, y);
        var M = C ? wf : Jf;
        return Qf(M(O, y), n, t);
      }
      function $f(n, t, e, r) {
        return n === u || Xn(n, $t[e]) && !q.call(r, e) ? t : n;
      }
      function kf(n, t, e, r, i, o) {
        return en(n) && en(t) && (o.set(t, n), je(n, t, u, kf, o), o.delete(t)), n;
      }
      function xc(n) {
        return xe(n) ? u : n;
      }
      function Gf(n, t, e, r, i, o) {
        var a = e & wn, l = n.length, c = t.length;
        if (l != c && !(a && c > l))
          return !1;
        var _ = o.get(n), m = o.get(t);
        if (_ && m)
          return _ == t && m == n;
        var b = -1, C = !0, y = e & Z ? new Tt() : u;
        for (o.set(n, t), o.set(t, n); ++b < l; ) {
          var O = n[b], M = t[b];
          if (r)
            var A = a ? r(M, O, b, t, n, o) : r(O, M, b, n, t, o);
          if (A !== u) {
            if (A)
              continue;
            C = !1;
            break;
          }
          if (y) {
            if (!qr(t, function(U, k) {
              if (!oe(y, k) && (O === U || i(O, U, e, r, o)))
                return y.push(k);
            })) {
              C = !1;
              break;
            }
          } else if (!(O === M || i(O, M, e, r, o))) {
            C = !1;
            break;
          }
        }
        return o.delete(n), o.delete(t), C;
      }
      function Cc(n, t, e, r, i, o, a) {
        switch (e) {
          case Ft:
            if (n.byteLength != t.byteLength || n.byteOffset != t.byteOffset)
              return !1;
            n = n.buffer, t = t.buffer;
          case fe:
            return !(n.byteLength != t.byteLength || !o(new ke(n), new ke(t)));
          case ne:
          case te:
          case ee:
            return Xn(+n, +t);
          case Te:
            return n.name == t.name && n.message == t.message;
          case re:
          case ie:
            return n == t + "";
          case Hn:
            var l = Vr;
          case Kn:
            var c = r & wn;
            if (l || (l = We), n.size != t.size && !c)
              return !1;
            var _ = a.get(n);
            if (_)
              return _ == t;
            r |= Z, a.set(n, t);
            var m = Gf(l(n), l(t), r, i, o, a);
            return a.delete(n), m;
          case Ee:
            if (he)
              return he.call(n) == he.call(t);
        }
        return !1;
      }
      function Rc(n, t, e, r, i, o) {
        var a = e & wn, l = Ri(n), c = l.length, _ = Ri(t), m = _.length;
        if (c != m && !a)
          return !1;
        for (var b = c; b--; ) {
          var C = l[b];
          if (!(a ? C in t : q.call(t, C)))
            return !1;
        }
        var y = o.get(n), O = o.get(t);
        if (y && O)
          return y == t && O == n;
        var M = !0;
        o.set(n, t), o.set(t, n);
        for (var A = a; ++b < c; ) {
          C = l[b];
          var U = n[C], k = t[C];
          if (r)
            var On = a ? r(k, U, C, t, n, o) : r(U, k, C, n, t, o);
          if (!(On === u ? U === k || i(U, k, e, r, o) : On)) {
            M = !1;
            break;
          }
          A || (A = C == "constructor");
        }
        if (M && !A) {
          var mn = n.constructor, An = t.constructor;
          mn != An && "constructor" in n && "constructor" in t && !(typeof mn == "function" && mn instanceof mn && typeof An == "function" && An instanceof An) && (M = !1);
        }
        return o.delete(n), o.delete(t), M;
      }
      function ft(n) {
        return Ai(Yf(n, u, ro), n + "");
      }
      function Ri(n) {
        return af(n, cn, Ti);
      }
      function Li(n) {
        return af(n, Rn, Hf);
      }
      var yi = Xe ? function(n) {
        return Xe.get(n);
      } : Ki;
      function or(n) {
        for (var t = n.name + "", e = Gt[t], r = q.call(Gt, t) ? e.length : 0; r--; ) {
          var i = e[r], o = i.func;
          if (o == null || o == n)
            return i.name;
        }
        return t;
      }
      function qt(n) {
        var t = q.call(f, "placeholder") ? f : n;
        return t.placeholder;
      }
      function E() {
        var n = f.iteratee || Gi;
        return n = n === Gi ? cf : n, arguments.length ? n(arguments[0], arguments[1]) : n;
      }
      function ar(n, t) {
        var e = n.__data__;
        return Ac(t) ? e[typeof t == "string" ? "string" : "hash"] : e.map;
      }
      function Ii(n) {
        for (var t = cn(n), e = t.length; e--; ) {
          var r = t[e], i = n[r];
          t[e] = [r, i, qf(i)];
        }
        return t;
      }
      function Ot(n, t) {
        var e = Fl(n, t);
        return sf(e) ? e : u;
      }
      function Lc(n) {
        var t = q.call(n, yt), e = n[yt];
        try {
          n[yt] = u;
          var r = !0;
        } catch {
        }
        var i = Ue.call(n);
        return r && (t ? n[yt] = e : delete n[yt]), i;
      }
      var Ti = ni ? function(n) {
        return n == null ? [] : (n = X(n), gt(ni(n), function(t) {
          return Yu.call(n, t);
        }));
      } : zi, Hf = ni ? function(n) {
        for (var t = []; n; )
          pt(t, Ti(n)), n = Ge(n);
        return t;
      } : zi, pn = _n;
      (ti && pn(new ti(new ArrayBuffer(1))) != Ft || le && pn(new le()) != Hn || ei && pn(ei.resolve()) != iu || kt && pn(new kt()) != Kn || se && pn(new se()) != ue) && (pn = function(n) {
        var t = _n(n), e = t == tt ? n.constructor : u, r = e ? At(e) : "";
        if (r)
          switch (r) {
            case fs:
              return Ft;
            case os:
              return Hn;
            case as:
              return iu;
            case ls:
              return Kn;
            case ss:
              return ue;
          }
        return t;
      });
      function yc(n, t, e) {
        for (var r = -1, i = e.length; ++r < i; ) {
          var o = e[r], a = o.size;
          switch (o.type) {
            case "drop":
              n += a;
              break;
            case "dropRight":
              t -= a;
              break;
            case "take":
              t = gn(t, n + a);
              break;
            case "takeRight":
              n = sn(n, t - a);
              break;
          }
        }
        return { start: n, end: t };
      }
      function Ic(n) {
        var t = n.match(Na);
        return t ? t[1].split(Pa) : [];
      }
      function Kf(n, t, e) {
        t = bt(t, n);
        for (var r = -1, i = t.length, o = !1; ++r < i; ) {
          var a = Vn(t[r]);
          if (!(o = n != null && e(n, a)))
            break;
          n = n[a];
        }
        return o || ++r != i ? o : (i = n == null ? 0 : n.length, !!i && pr(i) && ot(a, i) && (F(n) || Nt(n)));
      }
      function Tc(n) {
        var t = n.length, e = new n.constructor(t);
        return t && typeof n[0] == "string" && q.call(n, "index") && (e.index = n.index, e.input = n.input), e;
      }
      function zf(n) {
        return typeof n.constructor == "function" && !we(n) ? Ht(Ge(n)) : {};
      }
      function Sc(n, t, e) {
        var r = n.constructor;
        switch (t) {
          case fe:
            return bi(n);
          case ne:
          case te:
            return new r(+n);
          case Ft:
            return cc(n, e);
          case Ir:
          case Tr:
          case Sr:
          case Er:
          case Or:
          case Ar:
          case Nr:
          case Pr:
          case Fr:
            return Tf(n, e);
          case Hn:
            return new r();
          case ee:
          case ie:
            return new r(n);
          case re:
            return hc(n);
          case Kn:
            return new r();
          case Ee:
            return dc(n);
        }
      }
      function Ec(n, t) {
        var e = t.length;
        if (!e)
          return n;
        var r = e - 1;
        return t[r] = (e > 1 ? "& " : "") + t[r], t = t.join(e > 2 ? ", " : " "), n.replace(Aa, `{
/* [wrapped with ` + t + `] */
`);
      }
      function Oc(n) {
        return F(n) || Nt(n) || !!(Zu && n && n[Zu]);
      }
      function ot(n, t) {
        var e = typeof n;
        return t = t ?? dt, !!t && (e == "number" || e != "symbol" && Ga.test(n)) && n > -1 && n % 1 == 0 && n < t;
      }
      function vn(n, t, e) {
        if (!en(e))
          return !1;
        var r = typeof t;
        return (r == "number" ? Cn(e) && ot(t, e.length) : r == "string" && t in e) ? Xn(e[t], n) : !1;
      }
      function Si(n, t) {
        if (F(n))
          return !1;
        var e = typeof n;
        return e == "number" || e == "symbol" || e == "boolean" || n == null || En(n) ? !0 : Ta.test(n) || !Ia.test(n) || t != null && n in X(t);
      }
      function Ac(n) {
        var t = typeof n;
        return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? n !== "__proto__" : n === null;
      }
      function Ei(n) {
        var t = or(n), e = f[t];
        if (typeof e != "function" || !(t in $.prototype))
          return !1;
        if (n === e)
          return !0;
        var r = yi(e);
        return !!r && n === r[0];
      }
      function Nc(n) {
        return !!zu && zu in n;
      }
      var Pc = Me ? at : qi;
      function we(n) {
        var t = n && n.constructor, e = typeof t == "function" && t.prototype || $t;
        return n === e;
      }
      function qf(n) {
        return n === n && !en(n);
      }
      function Xf(n, t) {
        return function(e) {
          return e == null ? !1 : e[n] === t && (t !== u || n in X(e));
        };
      }
      function Fc(n) {
        var t = dr(n, function(r) {
          return e.size === N && e.clear(), r;
        }), e = t.cache;
        return t;
      }
      function Wc(n, t) {
        var e = n[1], r = t[1], i = e | r, o = i < (nn | Nn | nt), a = r == nt && e == bn || r == nt && e == jt && n[7].length <= t[8] || r == (nt | jt) && t[7].length <= t[8] && e == bn;
        if (!(o || a))
          return n;
        r & nn && (n[2] = t[2], i |= e & nn ? 0 : Q);
        var l = t[3];
        if (l) {
          var c = n[3];
          n[3] = c ? Ef(c, l, t[4]) : l, n[4] = c ? _t(n[3], B) : t[4];
        }
        return l = t[5], l && (c = n[5], n[5] = c ? Of(c, l, t[6]) : l, n[6] = c ? _t(n[5], B) : t[6]), l = t[7], l && (n[7] = l), r & nt && (n[8] = n[8] == null ? t[8] : gn(n[8], t[8])), n[9] == null && (n[9] = t[9]), n[0] = t[0], n[1] = i, n;
      }
      function Bc(n) {
        var t = [];
        if (n != null)
          for (var e in X(n))
            t.push(e);
        return t;
      }
      function Mc(n) {
        return Ue.call(n);
      }
      function Yf(n, t, e) {
        return t = sn(t === u ? n.length - 1 : t, 0), function() {
          for (var r = arguments, i = -1, o = sn(r.length - t, 0), a = d(o); ++i < o; )
            a[i] = r[t + i];
          i = -1;
          for (var l = d(t + 1); ++i < t; )
            l[i] = r[i];
          return l[t] = e(a), In(n, this, l);
        };
      }
      function Zf(n, t) {
        return t.length < 2 ? n : Et(n, $n(t, 0, -1));
      }
      function Dc(n, t) {
        for (var e = n.length, r = gn(t.length, e), i = xn(n); r--; ) {
          var o = t[r];
          n[r] = ot(o, e) ? i[o] : u;
        }
        return n;
      }
      function Oi(n, t) {
        if (!(t === "constructor" && typeof n[t] == "function") && t != "__proto__")
          return n[t];
      }
      var Jf = Vf(wf), be = jl || function(n, t) {
        return hn.setTimeout(n, t);
      }, Ai = Vf(oc);
      function Qf(n, t, e) {
        var r = t + "";
        return Ai(n, Ec(r, Uc(Ic(r), e)));
      }
      function Vf(n) {
        var t = 0, e = 0;
        return function() {
          var r = rs(), i = fa - (r - e);
          if (e = r, i > 0) {
            if (++t >= ua)
              return arguments[0];
          } else
            t = 0;
          return n.apply(u, arguments);
        };
      }
      function lr(n, t) {
        var e = -1, r = n.length, i = r - 1;
        for (t = t === u ? r : t; ++e < t; ) {
          var o = di(e, i), a = n[o];
          n[o] = n[e], n[e] = a;
        }
        return n.length = t, n;
      }
      var jf = Fc(function(n) {
        var t = [];
        return n.charCodeAt(0) === 46 && t.push(""), n.replace(Sa, function(e, r, i, o) {
          t.push(i ? o.replace(Ba, "$1") : r || e);
        }), t;
      });
      function Vn(n) {
        if (typeof n == "string" || En(n))
          return n;
        var t = n + "";
        return t == "0" && 1 / n == -Rt ? "-0" : t;
      }
      function At(n) {
        if (n != null) {
          try {
            return De.call(n);
          } catch {
          }
          try {
            return n + "";
          } catch {
          }
        }
        return "";
      }
      function Uc(n, t) {
        return Bn(ha, function(e) {
          var r = "_." + e[0];
          t & e[1] && !Pe(n, r) && n.push(r);
        }), n.sort();
      }
      function no(n) {
        if (n instanceof $)
          return n.clone();
        var t = new Dn(n.__wrapped__, n.__chain__);
        return t.__actions__ = xn(n.__actions__), t.__index__ = n.__index__, t.__values__ = n.__values__, t;
      }
      function $c(n, t, e) {
        (e ? vn(n, t, e) : t === u) ? t = 1 : t = sn(W(t), 0);
        var r = n == null ? 0 : n.length;
        if (!r || t < 1)
          return [];
        for (var i = 0, o = 0, a = d(ze(r / t)); i < r; )
          a[o++] = $n(n, i, i += t);
        return a;
      }
      function kc(n) {
        for (var t = -1, e = n == null ? 0 : n.length, r = 0, i = []; ++t < e; ) {
          var o = n[t];
          o && (i[r++] = o);
        }
        return i;
      }
      function Gc() {
        var n = arguments.length;
        if (!n)
          return [];
        for (var t = d(n - 1), e = arguments[0], r = n; r--; )
          t[r - 1] = arguments[r];
        return pt(F(e) ? xn(e) : [e], dn(t, 1));
      }
      var Hc = D(function(n, t) {
        return on(n) ? ge(n, dn(t, 1, on, !0)) : [];
      }), Kc = D(function(n, t) {
        var e = kn(t);
        return on(e) && (e = u), on(n) ? ge(n, dn(t, 1, on, !0), E(e, 2)) : [];
      }), zc = D(function(n, t) {
        var e = kn(t);
        return on(e) && (e = u), on(n) ? ge(n, dn(t, 1, on, !0), u, e) : [];
      });
      function qc(n, t, e) {
        var r = n == null ? 0 : n.length;
        return r ? (t = e || t === u ? 1 : W(t), $n(n, t < 0 ? 0 : t, r)) : [];
      }
      function Xc(n, t, e) {
        var r = n == null ? 0 : n.length;
        return r ? (t = e || t === u ? 1 : W(t), t = r - t, $n(n, 0, t < 0 ? 0 : t)) : [];
      }
      function Yc(n, t) {
        return n && n.length ? tr(n, E(t, 3), !0, !0) : [];
      }
      function Zc(n, t) {
        return n && n.length ? tr(n, E(t, 3), !0) : [];
      }
      function Jc(n, t, e, r) {
        var i = n == null ? 0 : n.length;
        return i ? (e && typeof e != "number" && vn(n, t, e) && (e = 0, r = i), Gs(n, t, e, r)) : [];
      }
      function to(n, t, e) {
        var r = n == null ? 0 : n.length;
        if (!r)
          return -1;
        var i = e == null ? 0 : W(e);
        return i < 0 && (i = sn(r + i, 0)), Fe(n, E(t, 3), i);
      }
      function eo(n, t, e) {
        var r = n == null ? 0 : n.length;
        if (!r)
          return -1;
        var i = r - 1;
        return e !== u && (i = W(e), i = e < 0 ? sn(r + i, 0) : gn(i, r - 1)), Fe(n, E(t, 3), i, !0);
      }
      function ro(n) {
        var t = n == null ? 0 : n.length;
        return t ? dn(n, 1) : [];
      }
      function Qc(n) {
        var t = n == null ? 0 : n.length;
        return t ? dn(n, Rt) : [];
      }
      function Vc(n, t) {
        var e = n == null ? 0 : n.length;
        return e ? (t = t === u ? 1 : W(t), dn(n, t)) : [];
      }
      function jc(n) {
        for (var t = -1, e = n == null ? 0 : n.length, r = {}; ++t < e; ) {
          var i = n[t];
          r[i[0]] = i[1];
        }
        return r;
      }
      function io(n) {
        return n && n.length ? n[0] : u;
      }
      function nh(n, t, e) {
        var r = n == null ? 0 : n.length;
        if (!r)
          return -1;
        var i = e == null ? 0 : W(e);
        return i < 0 && (i = sn(r + i, 0)), Bt(n, t, i);
      }
      function th(n) {
        var t = n == null ? 0 : n.length;
        return t ? $n(n, 0, -1) : [];
      }
      var eh = D(function(n) {
        var t = tn(n, mi);
        return t.length && t[0] === n[0] ? ai(t) : [];
      }), rh = D(function(n) {
        var t = kn(n), e = tn(n, mi);
        return t === kn(e) ? t = u : e.pop(), e.length && e[0] === n[0] ? ai(e, E(t, 2)) : [];
      }), ih = D(function(n) {
        var t = kn(n), e = tn(n, mi);
        return t = typeof t == "function" ? t : u, t && e.pop(), e.length && e[0] === n[0] ? ai(e, u, t) : [];
      });
      function uh(n, t) {
        return n == null ? "" : ts.call(n, t);
      }
      function kn(n) {
        var t = n == null ? 0 : n.length;
        return t ? n[t - 1] : u;
      }
      function fh(n, t, e) {
        var r = n == null ? 0 : n.length;
        if (!r)
          return -1;
        var i = r;
        return e !== u && (i = W(e), i = i < 0 ? sn(r + i, 0) : gn(i, r - 1)), t === t ? Ul(n, t, i) : Fe(n, Mu, i, !0);
      }
      function oh(n, t) {
        return n && n.length ? pf(n, W(t)) : u;
      }
      var ah = D(uo);
      function uo(n, t) {
        return n && n.length && t && t.length ? hi(n, t) : n;
      }
      function lh(n, t, e) {
        return n && n.length && t && t.length ? hi(n, t, E(e, 2)) : n;
      }
      function sh(n, t, e) {
        return n && n.length && t && t.length ? hi(n, t, u, e) : n;
      }
      var ch = ft(function(n, t) {
        var e = n == null ? 0 : n.length, r = ii(n, t);
        return mf(n, tn(t, function(i) {
          return ot(i, e) ? +i : i;
        }).sort(Sf)), r;
      });
      function hh(n, t) {
        var e = [];
        if (!(n && n.length))
          return e;
        var r = -1, i = [], o = n.length;
        for (t = E(t, 3); ++r < o; ) {
          var a = n[r];
          t(a, r, n) && (e.push(a), i.push(r));
        }
        return mf(n, i), e;
      }
      function Ni(n) {
        return n == null ? n : us.call(n);
      }
      function dh(n, t, e) {
        var r = n == null ? 0 : n.length;
        return r ? (e && typeof e != "number" && vn(n, t, e) ? (t = 0, e = r) : (t = t == null ? 0 : W(t), e = e === u ? r : W(e)), $n(n, t, e)) : [];
      }
      function gh(n, t) {
        return nr(n, t);
      }
      function ph(n, t, e) {
        return pi(n, t, E(e, 2));
      }
      function _h(n, t) {
        var e = n == null ? 0 : n.length;
        if (e) {
          var r = nr(n, t);
          if (r < e && Xn(n[r], t))
            return r;
        }
        return -1;
      }
      function vh(n, t) {
        return nr(n, t, !0);
      }
      function mh(n, t, e) {
        return pi(n, t, E(e, 2), !0);
      }
      function wh(n, t) {
        var e = n == null ? 0 : n.length;
        if (e) {
          var r = nr(n, t, !0) - 1;
          if (Xn(n[r], t))
            return r;
        }
        return -1;
      }
      function bh(n) {
        return n && n.length ? bf(n) : [];
      }
      function xh(n, t) {
        return n && n.length ? bf(n, E(t, 2)) : [];
      }
      function Ch(n) {
        var t = n == null ? 0 : n.length;
        return t ? $n(n, 1, t) : [];
      }
      function Rh(n, t, e) {
        return n && n.length ? (t = e || t === u ? 1 : W(t), $n(n, 0, t < 0 ? 0 : t)) : [];
      }
      function Lh(n, t, e) {
        var r = n == null ? 0 : n.length;
        return r ? (t = e || t === u ? 1 : W(t), t = r - t, $n(n, t < 0 ? 0 : t, r)) : [];
      }
      function yh(n, t) {
        return n && n.length ? tr(n, E(t, 3), !1, !0) : [];
      }
      function Ih(n, t) {
        return n && n.length ? tr(n, E(t, 3)) : [];
      }
      var Th = D(function(n) {
        return wt(dn(n, 1, on, !0));
      }), Sh = D(function(n) {
        var t = kn(n);
        return on(t) && (t = u), wt(dn(n, 1, on, !0), E(t, 2));
      }), Eh = D(function(n) {
        var t = kn(n);
        return t = typeof t == "function" ? t : u, wt(dn(n, 1, on, !0), u, t);
      });
      function Oh(n) {
        return n && n.length ? wt(n) : [];
      }
      function Ah(n, t) {
        return n && n.length ? wt(n, E(t, 2)) : [];
      }
      function Nh(n, t) {
        return t = typeof t == "function" ? t : u, n && n.length ? wt(n, u, t) : [];
      }
      function Pi(n) {
        if (!(n && n.length))
          return [];
        var t = 0;
        return n = gt(n, function(e) {
          if (on(e))
            return t = sn(e.length, t), !0;
        }), Jr(t, function(e) {
          return tn(n, Xr(e));
        });
      }
      function fo(n, t) {
        if (!(n && n.length))
          return [];
        var e = Pi(n);
        return t == null ? e : tn(e, function(r) {
          return In(t, u, r);
        });
      }
      var Ph = D(function(n, t) {
        return on(n) ? ge(n, t) : [];
      }), Fh = D(function(n) {
        return vi(gt(n, on));
      }), Wh = D(function(n) {
        var t = kn(n);
        return on(t) && (t = u), vi(gt(n, on), E(t, 2));
      }), Bh = D(function(n) {
        var t = kn(n);
        return t = typeof t == "function" ? t : u, vi(gt(n, on), u, t);
      }), Mh = D(Pi);
      function Dh(n, t) {
        return Lf(n || [], t || [], de);
      }
      function Uh(n, t) {
        return Lf(n || [], t || [], ve);
      }
      var $h = D(function(n) {
        var t = n.length, e = t > 1 ? n[t - 1] : u;
        return e = typeof e == "function" ? (n.pop(), e) : u, fo(n, e);
      });
      function oo(n) {
        var t = f(n);
        return t.__chain__ = !0, t;
      }
      function kh(n, t) {
        return t(n), n;
      }
      function sr(n, t) {
        return t(n);
      }
      var Gh = ft(function(n) {
        var t = n.length, e = t ? n[0] : 0, r = this.__wrapped__, i = function(o) {
          return ii(o, n);
        };
        return t > 1 || this.__actions__.length || !(r instanceof $) || !ot(e) ? this.thru(i) : (r = r.slice(e, +e + (t ? 1 : 0)), r.__actions__.push({
          func: sr,
          args: [i],
          thisArg: u
        }), new Dn(r, this.__chain__).thru(function(o) {
          return t && !o.length && o.push(u), o;
        }));
      });
      function Hh() {
        return oo(this);
      }
      function Kh() {
        return new Dn(this.value(), this.__chain__);
      }
      function zh() {
        this.__values__ === u && (this.__values__ = Co(this.value()));
        var n = this.__index__ >= this.__values__.length, t = n ? u : this.__values__[this.__index__++];
        return { done: n, value: t };
      }
      function qh() {
        return this;
      }
      function Xh(n) {
        for (var t, e = this; e instanceof Ze; ) {
          var r = no(e);
          r.__index__ = 0, r.__values__ = u, t ? i.__wrapped__ = r : t = r;
          var i = r;
          e = e.__wrapped__;
        }
        return i.__wrapped__ = n, t;
      }
      function Yh() {
        var n = this.__wrapped__;
        if (n instanceof $) {
          var t = n;
          return this.__actions__.length && (t = new $(this)), t = t.reverse(), t.__actions__.push({
            func: sr,
            args: [Ni],
            thisArg: u
          }), new Dn(t, this.__chain__);
        }
        return this.thru(Ni);
      }
      function Zh() {
        return Rf(this.__wrapped__, this.__actions__);
      }
      var Jh = er(function(n, t, e) {
        q.call(n, e) ? ++n[e] : it(n, e, 1);
      });
      function Qh(n, t, e) {
        var r = F(n) ? Wu : ks;
        return e && vn(n, t, e) && (t = u), r(n, E(t, 3));
      }
      function Vh(n, t) {
        var e = F(n) ? gt : ff;
        return e(n, E(t, 3));
      }
      var jh = Ff(to), nd = Ff(eo);
      function td(n, t) {
        return dn(cr(n, t), 1);
      }
      function ed(n, t) {
        return dn(cr(n, t), Rt);
      }
      function rd(n, t, e) {
        return e = e === u ? 1 : W(e), dn(cr(n, t), e);
      }
      function ao(n, t) {
        var e = F(n) ? Bn : mt;
        return e(n, E(t, 3));
      }
      function lo(n, t) {
        var e = F(n) ? Cl : uf;
        return e(n, E(t, 3));
      }
      var id = er(function(n, t, e) {
        q.call(n, e) ? n[e].push(t) : it(n, e, [t]);
      });
      function ud(n, t, e, r) {
        n = Cn(n) ? n : Yt(n), e = e && !r ? W(e) : 0;
        var i = n.length;
        return e < 0 && (e = sn(i + e, 0)), _r(n) ? e <= i && n.indexOf(t, e) > -1 : !!i && Bt(n, t, e) > -1;
      }
      var fd = D(function(n, t, e) {
        var r = -1, i = typeof t == "function", o = Cn(n) ? d(n.length) : [];
        return mt(n, function(a) {
          o[++r] = i ? In(t, a, e) : pe(a, t, e);
        }), o;
      }), od = er(function(n, t, e) {
        it(n, e, t);
      });
      function cr(n, t) {
        var e = F(n) ? tn : hf;
        return e(n, E(t, 3));
      }
      function ad(n, t, e, r) {
        return n == null ? [] : (F(t) || (t = t == null ? [] : [t]), e = r ? u : e, F(e) || (e = e == null ? [] : [e]), _f(n, t, e));
      }
      var ld = er(function(n, t, e) {
        n[e ? 0 : 1].push(t);
      }, function() {
        return [[], []];
      });
      function sd(n, t, e) {
        var r = F(n) ? zr : Uu, i = arguments.length < 3;
        return r(n, E(t, 4), e, i, mt);
      }
      function cd(n, t, e) {
        var r = F(n) ? Rl : Uu, i = arguments.length < 3;
        return r(n, E(t, 4), e, i, uf);
      }
      function hd(n, t) {
        var e = F(n) ? gt : ff;
        return e(n, gr(E(t, 3)));
      }
      function dd(n) {
        var t = F(n) ? nf : uc;
        return t(n);
      }
      function gd(n, t, e) {
        (e ? vn(n, t, e) : t === u) ? t = 1 : t = W(t);
        var r = F(n) ? Bs : fc;
        return r(n, t);
      }
      function pd(n) {
        var t = F(n) ? Ms : ac;
        return t(n);
      }
      function _d(n) {
        if (n == null)
          return 0;
        if (Cn(n))
          return _r(n) ? Dt(n) : n.length;
        var t = pn(n);
        return t == Hn || t == Kn ? n.size : si(n).length;
      }
      function vd(n, t, e) {
        var r = F(n) ? qr : lc;
        return e && vn(n, t, e) && (t = u), r(n, E(t, 3));
      }
      var md = D(function(n, t) {
        if (n == null)
          return [];
        var e = t.length;
        return e > 1 && vn(n, t[0], t[1]) ? t = [] : e > 2 && vn(t[0], t[1], t[2]) && (t = [t[0]]), _f(n, dn(t, 1), []);
      }), hr = Vl || function() {
        return hn.Date.now();
      };
      function wd(n, t) {
        if (typeof t != "function")
          throw new Mn(R);
        return n = W(n), function() {
          if (--n < 1)
            return t.apply(this, arguments);
        };
      }
      function so(n, t, e) {
        return t = e ? u : t, t = n && t == null ? n.length : t, ut(n, nt, u, u, u, u, t);
      }
      function co(n, t) {
        var e;
        if (typeof t != "function")
          throw new Mn(R);
        return n = W(n), function() {
          return --n > 0 && (e = t.apply(this, arguments)), n <= 1 && (t = u), e;
        };
      }
      var Fi = D(function(n, t, e) {
        var r = nn;
        if (e.length) {
          var i = _t(e, qt(Fi));
          r |= un;
        }
        return ut(n, r, t, e, i);
      }), ho = D(function(n, t, e) {
        var r = nn | Nn;
        if (e.length) {
          var i = _t(e, qt(ho));
          r |= un;
        }
        return ut(t, r, n, e, i);
      });
      function go(n, t, e) {
        t = e ? u : t;
        var r = ut(n, bn, u, u, u, u, u, t);
        return r.placeholder = go.placeholder, r;
      }
      function po(n, t, e) {
        t = e ? u : t;
        var r = ut(n, Pn, u, u, u, u, u, t);
        return r.placeholder = po.placeholder, r;
      }
      function _o(n, t, e) {
        var r, i, o, a, l, c, _ = 0, m = !1, b = !1, C = !0;
        if (typeof n != "function")
          throw new Mn(R);
        t = Gn(t) || 0, en(e) && (m = !!e.leading, b = "maxWait" in e, o = b ? sn(Gn(e.maxWait) || 0, t) : o, C = "trailing" in e ? !!e.trailing : C);
        function y(an) {
          var Yn = r, st = i;
          return r = i = u, _ = an, a = n.apply(st, Yn), a;
        }
        function O(an) {
          return _ = an, l = be(U, t), m ? y(an) : a;
        }
        function M(an) {
          var Yn = an - c, st = an - _, Wo = t - Yn;
          return b ? gn(Wo, o - st) : Wo;
        }
        function A(an) {
          var Yn = an - c, st = an - _;
          return c === u || Yn >= t || Yn < 0 || b && st >= o;
        }
        function U() {
          var an = hr();
          if (A(an))
            return k(an);
          l = be(U, M(an));
        }
        function k(an) {
          return l = u, C && r ? y(an) : (r = i = u, a);
        }
        function On() {
          l !== u && yf(l), _ = 0, r = c = i = l = u;
        }
        function mn() {
          return l === u ? a : k(hr());
        }
        function An() {
          var an = hr(), Yn = A(an);
          if (r = arguments, i = this, c = an, Yn) {
            if (l === u)
              return O(c);
            if (b)
              return yf(l), l = be(U, t), y(c);
          }
          return l === u && (l = be(U, t)), a;
        }
        return An.cancel = On, An.flush = mn, An;
      }
      var bd = D(function(n, t) {
        return rf(n, 1, t);
      }), xd = D(function(n, t, e) {
        return rf(n, Gn(t) || 0, e);
      });
      function Cd(n) {
        return ut(n, yr);
      }
      function dr(n, t) {
        if (typeof n != "function" || t != null && typeof t != "function")
          throw new Mn(R);
        var e = function() {
          var r = arguments, i = t ? t.apply(this, r) : r[0], o = e.cache;
          if (o.has(i))
            return o.get(i);
          var a = n.apply(this, r);
          return e.cache = o.set(i, a) || o, a;
        };
        return e.cache = new (dr.Cache || rt)(), e;
      }
      dr.Cache = rt;
      function gr(n) {
        if (typeof n != "function")
          throw new Mn(R);
        return function() {
          var t = arguments;
          switch (t.length) {
            case 0:
              return !n.call(this);
            case 1:
              return !n.call(this, t[0]);
            case 2:
              return !n.call(this, t[0], t[1]);
            case 3:
              return !n.call(this, t[0], t[1], t[2]);
          }
          return !n.apply(this, t);
        };
      }
      function Rd(n) {
        return co(2, n);
      }
      var Ld = sc(function(n, t) {
        t = t.length == 1 && F(t[0]) ? tn(t[0], Tn(E())) : tn(dn(t, 1), Tn(E()));
        var e = t.length;
        return D(function(r) {
          for (var i = -1, o = gn(r.length, e); ++i < o; )
            r[i] = t[i].call(this, r[i]);
          return In(n, this, r);
        });
      }), Wi = D(function(n, t) {
        var e = _t(t, qt(Wi));
        return ut(n, un, u, t, e);
      }), vo = D(function(n, t) {
        var e = _t(t, qt(vo));
        return ut(n, Fn, u, t, e);
      }), yd = ft(function(n, t) {
        return ut(n, jt, u, u, u, t);
      });
      function Id(n, t) {
        if (typeof n != "function")
          throw new Mn(R);
        return t = t === u ? t : W(t), D(n, t);
      }
      function Td(n, t) {
        if (typeof n != "function")
          throw new Mn(R);
        return t = t == null ? 0 : sn(W(t), 0), D(function(e) {
          var r = e[t], i = xt(e, 0, t);
          return r && pt(i, r), In(n, this, i);
        });
      }
      function Sd(n, t, e) {
        var r = !0, i = !0;
        if (typeof n != "function")
          throw new Mn(R);
        return en(e) && (r = "leading" in e ? !!e.leading : r, i = "trailing" in e ? !!e.trailing : i), _o(n, t, {
          leading: r,
          maxWait: t,
          trailing: i
        });
      }
      function Ed(n) {
        return so(n, 1);
      }
      function Od(n, t) {
        return Wi(wi(t), n);
      }
      function Ad() {
        if (!arguments.length)
          return [];
        var n = arguments[0];
        return F(n) ? n : [n];
      }
      function Nd(n) {
        return Un(n, j);
      }
      function Pd(n, t) {
        return t = typeof t == "function" ? t : u, Un(n, j, t);
      }
      function Fd(n) {
        return Un(n, G | j);
      }
      function Wd(n, t) {
        return t = typeof t == "function" ? t : u, Un(n, G | j, t);
      }
      function Bd(n, t) {
        return t == null || ef(n, t, cn(t));
      }
      function Xn(n, t) {
        return n === t || n !== n && t !== t;
      }
      var Md = fr(oi), Dd = fr(function(n, t) {
        return n >= t;
      }), Nt = lf(/* @__PURE__ */ function() {
        return arguments;
      }()) ? lf : function(n) {
        return fn(n) && q.call(n, "callee") && !Yu.call(n, "callee");
      }, F = d.isArray, Ud = Eu ? Tn(Eu) : Xs;
      function Cn(n) {
        return n != null && pr(n.length) && !at(n);
      }
      function on(n) {
        return fn(n) && Cn(n);
      }
      function $d(n) {
        return n === !0 || n === !1 || fn(n) && _n(n) == ne;
      }
      var Ct = ns || qi, kd = Ou ? Tn(Ou) : Ys;
      function Gd(n) {
        return fn(n) && n.nodeType === 1 && !xe(n);
      }
      function Hd(n) {
        if (n == null)
          return !0;
        if (Cn(n) && (F(n) || typeof n == "string" || typeof n.splice == "function" || Ct(n) || Xt(n) || Nt(n)))
          return !n.length;
        var t = pn(n);
        if (t == Hn || t == Kn)
          return !n.size;
        if (we(n))
          return !si(n).length;
        for (var e in n)
          if (q.call(n, e))
            return !1;
        return !0;
      }
      function Kd(n, t) {
        return _e(n, t);
      }
      function zd(n, t, e) {
        e = typeof e == "function" ? e : u;
        var r = e ? e(n, t) : u;
        return r === u ? _e(n, t, u, e) : !!r;
      }
      function Bi(n) {
        if (!fn(n))
          return !1;
        var t = _n(n);
        return t == Te || t == ga || typeof n.message == "string" && typeof n.name == "string" && !xe(n);
      }
      function qd(n) {
        return typeof n == "number" && Ju(n);
      }
      function at(n) {
        if (!en(n))
          return !1;
        var t = _n(n);
        return t == Se || t == ru || t == da || t == _a;
      }
      function mo(n) {
        return typeof n == "number" && n == W(n);
      }
      function pr(n) {
        return typeof n == "number" && n > -1 && n % 1 == 0 && n <= dt;
      }
      function en(n) {
        var t = typeof n;
        return n != null && (t == "object" || t == "function");
      }
      function fn(n) {
        return n != null && typeof n == "object";
      }
      var wo = Au ? Tn(Au) : Js;
      function Xd(n, t) {
        return n === t || li(n, t, Ii(t));
      }
      function Yd(n, t, e) {
        return e = typeof e == "function" ? e : u, li(n, t, Ii(t), e);
      }
      function Zd(n) {
        return bo(n) && n != +n;
      }
      function Jd(n) {
        if (Pc(n))
          throw new P(S);
        return sf(n);
      }
      function Qd(n) {
        return n === null;
      }
      function Vd(n) {
        return n == null;
      }
      function bo(n) {
        return typeof n == "number" || fn(n) && _n(n) == ee;
      }
      function xe(n) {
        if (!fn(n) || _n(n) != tt)
          return !1;
        var t = Ge(n);
        if (t === null)
          return !0;
        var e = q.call(t, "constructor") && t.constructor;
        return typeof e == "function" && e instanceof e && De.call(e) == Yl;
      }
      var Mi = Nu ? Tn(Nu) : Qs;
      function jd(n) {
        return mo(n) && n >= -dt && n <= dt;
      }
      var xo = Pu ? Tn(Pu) : Vs;
      function _r(n) {
        return typeof n == "string" || !F(n) && fn(n) && _n(n) == ie;
      }
      function En(n) {
        return typeof n == "symbol" || fn(n) && _n(n) == Ee;
      }
      var Xt = Fu ? Tn(Fu) : js;
      function ng(n) {
        return n === u;
      }
      function tg(n) {
        return fn(n) && pn(n) == ue;
      }
      function eg(n) {
        return fn(n) && _n(n) == ma;
      }
      var rg = fr(ci), ig = fr(function(n, t) {
        return n <= t;
      });
      function Co(n) {
        if (!n)
          return [];
        if (Cn(n))
          return _r(n) ? zn(n) : xn(n);
        if (ae && n[ae])
          return Bl(n[ae]());
        var t = pn(n), e = t == Hn ? Vr : t == Kn ? We : Yt;
        return e(n);
      }
      function lt(n) {
        if (!n)
          return n === 0 ? n : 0;
        if (n = Gn(n), n === Rt || n === -Rt) {
          var t = n < 0 ? -1 : 1;
          return t * la;
        }
        return n === n ? n : 0;
      }
      function W(n) {
        var t = lt(n), e = t % 1;
        return t === t ? e ? t - e : t : 0;
      }
      function Ro(n) {
        return n ? St(W(n), 0, Zn) : 0;
      }
      function Gn(n) {
        if (typeof n == "number")
          return n;
        if (En(n))
          return ye;
        if (en(n)) {
          var t = typeof n.valueOf == "function" ? n.valueOf() : n;
          n = en(t) ? t + "" : t;
        }
        if (typeof n != "string")
          return n === 0 ? n : +n;
        n = $u(n);
        var e = Ua.test(n);
        return e || ka.test(n) ? wl(n.slice(2), e ? 2 : 8) : Da.test(n) ? ye : +n;
      }
      function Lo(n) {
        return Qn(n, Rn(n));
      }
      function ug(n) {
        return n ? St(W(n), -dt, dt) : n === 0 ? n : 0;
      }
      function z(n) {
        return n == null ? "" : Sn(n);
      }
      var fg = Kt(function(n, t) {
        if (we(t) || Cn(t)) {
          Qn(t, cn(t), n);
          return;
        }
        for (var e in t)
          q.call(t, e) && de(n, e, t[e]);
      }), yo = Kt(function(n, t) {
        Qn(t, Rn(t), n);
      }), vr = Kt(function(n, t, e, r) {
        Qn(t, Rn(t), n, r);
      }), og = Kt(function(n, t, e, r) {
        Qn(t, cn(t), n, r);
      }), ag = ft(ii);
      function lg(n, t) {
        var e = Ht(n);
        return t == null ? e : tf(e, t);
      }
      var sg = D(function(n, t) {
        n = X(n);
        var e = -1, r = t.length, i = r > 2 ? t[2] : u;
        for (i && vn(t[0], t[1], i) && (r = 1); ++e < r; )
          for (var o = t[e], a = Rn(o), l = -1, c = a.length; ++l < c; ) {
            var _ = a[l], m = n[_];
            (m === u || Xn(m, $t[_]) && !q.call(n, _)) && (n[_] = o[_]);
          }
        return n;
      }), cg = D(function(n) {
        return n.push(u, kf), In(Io, u, n);
      });
      function hg(n, t) {
        return Bu(n, E(t, 3), Jn);
      }
      function dg(n, t) {
        return Bu(n, E(t, 3), fi);
      }
      function gg(n, t) {
        return n == null ? n : ui(n, E(t, 3), Rn);
      }
      function pg(n, t) {
        return n == null ? n : of(n, E(t, 3), Rn);
      }
      function _g(n, t) {
        return n && Jn(n, E(t, 3));
      }
      function vg(n, t) {
        return n && fi(n, E(t, 3));
      }
      function mg(n) {
        return n == null ? [] : Ve(n, cn(n));
      }
      function wg(n) {
        return n == null ? [] : Ve(n, Rn(n));
      }
      function Di(n, t, e) {
        var r = n == null ? u : Et(n, t);
        return r === u ? e : r;
      }
      function bg(n, t) {
        return n != null && Kf(n, t, Hs);
      }
      function Ui(n, t) {
        return n != null && Kf(n, t, Ks);
      }
      var xg = Bf(function(n, t, e) {
        t != null && typeof t.toString != "function" && (t = Ue.call(t)), n[t] = e;
      }, ki(Ln)), Cg = Bf(function(n, t, e) {
        t != null && typeof t.toString != "function" && (t = Ue.call(t)), q.call(n, t) ? n[t].push(e) : n[t] = [e];
      }, E), Rg = D(pe);
      function cn(n) {
        return Cn(n) ? ju(n) : si(n);
      }
      function Rn(n) {
        return Cn(n) ? ju(n, !0) : nc(n);
      }
      function Lg(n, t) {
        var e = {};
        return t = E(t, 3), Jn(n, function(r, i, o) {
          it(e, t(r, i, o), r);
        }), e;
      }
      function yg(n, t) {
        var e = {};
        return t = E(t, 3), Jn(n, function(r, i, o) {
          it(e, i, t(r, i, o));
        }), e;
      }
      var Ig = Kt(function(n, t, e) {
        je(n, t, e);
      }), Io = Kt(function(n, t, e, r) {
        je(n, t, e, r);
      }), Tg = ft(function(n, t) {
        var e = {};
        if (n == null)
          return e;
        var r = !1;
        t = tn(t, function(o) {
          return o = bt(o, n), r || (r = o.length > 1), o;
        }), Qn(n, Li(n), e), r && (e = Un(e, G | K | j, xc));
        for (var i = t.length; i--; )
          _i(e, t[i]);
        return e;
      });
      function Sg(n, t) {
        return To(n, gr(E(t)));
      }
      var Eg = ft(function(n, t) {
        return n == null ? {} : ec(n, t);
      });
      function To(n, t) {
        if (n == null)
          return {};
        var e = tn(Li(n), function(r) {
          return [r];
        });
        return t = E(t), vf(n, e, function(r, i) {
          return t(r, i[0]);
        });
      }
      function Og(n, t, e) {
        t = bt(t, n);
        var r = -1, i = t.length;
        for (i || (i = 1, n = u); ++r < i; ) {
          var o = n == null ? u : n[Vn(t[r])];
          o === u && (r = i, o = e), n = at(o) ? o.call(n) : o;
        }
        return n;
      }
      function Ag(n, t, e) {
        return n == null ? n : ve(n, t, e);
      }
      function Ng(n, t, e, r) {
        return r = typeof r == "function" ? r : u, n == null ? n : ve(n, t, e, r);
      }
      var So = Uf(cn), Eo = Uf(Rn);
      function Pg(n, t, e) {
        var r = F(n), i = r || Ct(n) || Xt(n);
        if (t = E(t, 4), e == null) {
          var o = n && n.constructor;
          i ? e = r ? new o() : [] : en(n) ? e = at(o) ? Ht(Ge(n)) : {} : e = {};
        }
        return (i ? Bn : Jn)(n, function(a, l, c) {
          return t(e, a, l, c);
        }), e;
      }
      function Fg(n, t) {
        return n == null ? !0 : _i(n, t);
      }
      function Wg(n, t, e) {
        return n == null ? n : Cf(n, t, wi(e));
      }
      function Bg(n, t, e, r) {
        return r = typeof r == "function" ? r : u, n == null ? n : Cf(n, t, wi(e), r);
      }
      function Yt(n) {
        return n == null ? [] : Qr(n, cn(n));
      }
      function Mg(n) {
        return n == null ? [] : Qr(n, Rn(n));
      }
      function Dg(n, t, e) {
        return e === u && (e = t, t = u), e !== u && (e = Gn(e), e = e === e ? e : 0), t !== u && (t = Gn(t), t = t === t ? t : 0), St(Gn(n), t, e);
      }
      function Ug(n, t, e) {
        return t = lt(t), e === u ? (e = t, t = 0) : e = lt(e), n = Gn(n), zs(n, t, e);
      }
      function $g(n, t, e) {
        if (e && typeof e != "boolean" && vn(n, t, e) && (t = e = u), e === u && (typeof t == "boolean" ? (e = t, t = u) : typeof n == "boolean" && (e = n, n = u)), n === u && t === u ? (n = 0, t = 1) : (n = lt(n), t === u ? (t = n, n = 0) : t = lt(t)), n > t) {
          var r = n;
          n = t, t = r;
        }
        if (e || n % 1 || t % 1) {
          var i = Qu();
          return gn(n + i * (t - n + ml("1e-" + ((i + "").length - 1))), t);
        }
        return di(n, t);
      }
      var kg = zt(function(n, t, e) {
        return t = t.toLowerCase(), n + (e ? Oo(t) : t);
      });
      function Oo(n) {
        return $i(z(n).toLowerCase());
      }
      function Ao(n) {
        return n = z(n), n && n.replace(Ha, Al).replace(al, "");
      }
      function Gg(n, t, e) {
        n = z(n), t = Sn(t);
        var r = n.length;
        e = e === u ? r : St(W(e), 0, r);
        var i = e;
        return e -= t.length, e >= 0 && n.slice(e, i) == t;
      }
      function Hg(n) {
        return n = z(n), n && Ra.test(n) ? n.replace(fu, Nl) : n;
      }
      function Kg(n) {
        return n = z(n), n && Ea.test(n) ? n.replace(Wr, "\\$&") : n;
      }
      var zg = zt(function(n, t, e) {
        return n + (e ? "-" : "") + t.toLowerCase();
      }), qg = zt(function(n, t, e) {
        return n + (e ? " " : "") + t.toLowerCase();
      }), Xg = Pf("toLowerCase");
      function Yg(n, t, e) {
        n = z(n), t = W(t);
        var r = t ? Dt(n) : 0;
        if (!t || r >= t)
          return n;
        var i = (t - r) / 2;
        return ur(qe(i), e) + n + ur(ze(i), e);
      }
      function Zg(n, t, e) {
        n = z(n), t = W(t);
        var r = t ? Dt(n) : 0;
        return t && r < t ? n + ur(t - r, e) : n;
      }
      function Jg(n, t, e) {
        n = z(n), t = W(t);
        var r = t ? Dt(n) : 0;
        return t && r < t ? ur(t - r, e) + n : n;
      }
      function Qg(n, t, e) {
        return e || t == null ? t = 0 : t && (t = +t), is(z(n).replace(Br, ""), t || 0);
      }
      function Vg(n, t, e) {
        return (e ? vn(n, t, e) : t === u) ? t = 1 : t = W(t), gi(z(n), t);
      }
      function jg() {
        var n = arguments, t = z(n[0]);
        return n.length < 3 ? t : t.replace(n[1], n[2]);
      }
      var np = zt(function(n, t, e) {
        return n + (e ? "_" : "") + t.toLowerCase();
      });
      function tp(n, t, e) {
        return e && typeof e != "number" && vn(n, t, e) && (t = e = u), e = e === u ? Zn : e >>> 0, e ? (n = z(n), n && (typeof t == "string" || t != null && !Mi(t)) && (t = Sn(t), !t && Mt(n)) ? xt(zn(n), 0, e) : n.split(t, e)) : [];
      }
      var ep = zt(function(n, t, e) {
        return n + (e ? " " : "") + $i(t);
      });
      function rp(n, t, e) {
        return n = z(n), e = e == null ? 0 : St(W(e), 0, n.length), t = Sn(t), n.slice(e, e + t.length) == t;
      }
      function ip(n, t, e) {
        var r = f.templateSettings;
        e && vn(n, t, e) && (t = u), n = z(n), t = vr({}, t, r, $f);
        var i = vr({}, t.imports, r.imports, $f), o = cn(i), a = Qr(i, o), l, c, _ = 0, m = t.interpolate || Oe, b = "__p += '", C = jr(
          (t.escape || Oe).source + "|" + m.source + "|" + (m === ou ? Ma : Oe).source + "|" + (t.evaluate || Oe).source + "|$",
          "g"
        ), y = "//# sourceURL=" + (q.call(t, "sourceURL") ? (t.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++dl + "]") + `
`;
        n.replace(C, function(A, U, k, On, mn, An) {
          return k || (k = On), b += n.slice(_, An).replace(Ka, Pl), U && (l = !0, b += `' +
__e(` + U + `) +
'`), mn && (c = !0, b += `';
` + mn + `;
__p += '`), k && (b += `' +
((__t = (` + k + `)) == null ? '' : __t) +
'`), _ = An + A.length, A;
        }), b += `';
`;
        var O = q.call(t, "variable") && t.variable;
        if (!O)
          b = `with (obj) {
` + b + `
}
`;
        else if (Wa.test(O))
          throw new P(T);
        b = (c ? b.replace(wa, "") : b).replace(ba, "$1").replace(xa, "$1;"), b = "function(" + (O || "obj") + `) {
` + (O ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (l ? ", __e = _.escape" : "") + (c ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + b + `return __p
}`;
        var M = Po(function() {
          return H(o, y + "return " + b).apply(u, a);
        });
        if (M.source = b, Bi(M))
          throw M;
        return M;
      }
      function up(n) {
        return z(n).toLowerCase();
      }
      function fp(n) {
        return z(n).toUpperCase();
      }
      function op(n, t, e) {
        if (n = z(n), n && (e || t === u))
          return $u(n);
        if (!n || !(t = Sn(t)))
          return n;
        var r = zn(n), i = zn(t), o = ku(r, i), a = Gu(r, i) + 1;
        return xt(r, o, a).join("");
      }
      function ap(n, t, e) {
        if (n = z(n), n && (e || t === u))
          return n.slice(0, Ku(n) + 1);
        if (!n || !(t = Sn(t)))
          return n;
        var r = zn(n), i = Gu(r, zn(t)) + 1;
        return xt(r, 0, i).join("");
      }
      function lp(n, t, e) {
        if (n = z(n), n && (e || t === u))
          return n.replace(Br, "");
        if (!n || !(t = Sn(t)))
          return n;
        var r = zn(n), i = ku(r, zn(t));
        return xt(r, i).join("");
      }
      function sp(n, t) {
        var e = ra, r = ia;
        if (en(t)) {
          var i = "separator" in t ? t.separator : i;
          e = "length" in t ? W(t.length) : e, r = "omission" in t ? Sn(t.omission) : r;
        }
        n = z(n);
        var o = n.length;
        if (Mt(n)) {
          var a = zn(n);
          o = a.length;
        }
        if (e >= o)
          return n;
        var l = e - Dt(r);
        if (l < 1)
          return r;
        var c = a ? xt(a, 0, l).join("") : n.slice(0, l);
        if (i === u)
          return c + r;
        if (a && (l += c.length - l), Mi(i)) {
          if (n.slice(l).search(i)) {
            var _, m = c;
            for (i.global || (i = jr(i.source, z(au.exec(i)) + "g")), i.lastIndex = 0; _ = i.exec(m); )
              var b = _.index;
            c = c.slice(0, b === u ? l : b);
          }
        } else if (n.indexOf(Sn(i), l) != l) {
          var C = c.lastIndexOf(i);
          C > -1 && (c = c.slice(0, C));
        }
        return c + r;
      }
      function cp(n) {
        return n = z(n), n && Ca.test(n) ? n.replace(uu, $l) : n;
      }
      var hp = zt(function(n, t, e) {
        return n + (e ? " " : "") + t.toUpperCase();
      }), $i = Pf("toUpperCase");
      function No(n, t, e) {
        return n = z(n), t = e ? u : t, t === u ? Wl(n) ? Hl(n) : Il(n) : n.match(t) || [];
      }
      var Po = D(function(n, t) {
        try {
          return In(n, u, t);
        } catch (e) {
          return Bi(e) ? e : new P(e);
        }
      }), dp = ft(function(n, t) {
        return Bn(t, function(e) {
          e = Vn(e), it(n, e, Fi(n[e], n));
        }), n;
      });
      function gp(n) {
        var t = n == null ? 0 : n.length, e = E();
        return n = t ? tn(n, function(r) {
          if (typeof r[1] != "function")
            throw new Mn(R);
          return [e(r[0]), r[1]];
        }) : [], D(function(r) {
          for (var i = -1; ++i < t; ) {
            var o = n[i];
            if (In(o[0], this, r))
              return In(o[1], this, r);
          }
        });
      }
      function pp(n) {
        return $s(Un(n, G));
      }
      function ki(n) {
        return function() {
          return n;
        };
      }
      function _p(n, t) {
        return n == null || n !== n ? t : n;
      }
      var vp = Wf(), mp = Wf(!0);
      function Ln(n) {
        return n;
      }
      function Gi(n) {
        return cf(typeof n == "function" ? n : Un(n, G));
      }
      function wp(n) {
        return df(Un(n, G));
      }
      function bp(n, t) {
        return gf(n, Un(t, G));
      }
      var xp = D(function(n, t) {
        return function(e) {
          return pe(e, n, t);
        };
      }), Cp = D(function(n, t) {
        return function(e) {
          return pe(n, e, t);
        };
      });
      function Hi(n, t, e) {
        var r = cn(t), i = Ve(t, r);
        e == null && !(en(t) && (i.length || !r.length)) && (e = t, t = n, n = this, i = Ve(t, cn(t)));
        var o = !(en(e) && "chain" in e) || !!e.chain, a = at(n);
        return Bn(i, function(l) {
          var c = t[l];
          n[l] = c, a && (n.prototype[l] = function() {
            var _ = this.__chain__;
            if (o || _) {
              var m = n(this.__wrapped__), b = m.__actions__ = xn(this.__actions__);
              return b.push({ func: c, args: arguments, thisArg: n }), m.__chain__ = _, m;
            }
            return c.apply(n, pt([this.value()], arguments));
          });
        }), n;
      }
      function Rp() {
        return hn._ === this && (hn._ = Zl), this;
      }
      function Ki() {
      }
      function Lp(n) {
        return n = W(n), D(function(t) {
          return pf(t, n);
        });
      }
      var yp = xi(tn), Ip = xi(Wu), Tp = xi(qr);
      function Fo(n) {
        return Si(n) ? Xr(Vn(n)) : rc(n);
      }
      function Sp(n) {
        return function(t) {
          return n == null ? u : Et(n, t);
        };
      }
      var Ep = Mf(), Op = Mf(!0);
      function zi() {
        return [];
      }
      function qi() {
        return !1;
      }
      function Ap() {
        return {};
      }
      function Np() {
        return "";
      }
      function Pp() {
        return !0;
      }
      function Fp(n, t) {
        if (n = W(n), n < 1 || n > dt)
          return [];
        var e = Zn, r = gn(n, Zn);
        t = E(t), n -= Zn;
        for (var i = Jr(r, t); ++e < n; )
          t(e);
        return i;
      }
      function Wp(n) {
        return F(n) ? tn(n, Vn) : En(n) ? [n] : xn(jf(z(n)));
      }
      function Bp(n) {
        var t = ++Xl;
        return z(n) + t;
      }
      var Mp = ir(function(n, t) {
        return n + t;
      }, 0), Dp = Ci("ceil"), Up = ir(function(n, t) {
        return n / t;
      }, 1), $p = Ci("floor");
      function kp(n) {
        return n && n.length ? Qe(n, Ln, oi) : u;
      }
      function Gp(n, t) {
        return n && n.length ? Qe(n, E(t, 2), oi) : u;
      }
      function Hp(n) {
        return Du(n, Ln);
      }
      function Kp(n, t) {
        return Du(n, E(t, 2));
      }
      function zp(n) {
        return n && n.length ? Qe(n, Ln, ci) : u;
      }
      function qp(n, t) {
        return n && n.length ? Qe(n, E(t, 2), ci) : u;
      }
      var Xp = ir(function(n, t) {
        return n * t;
      }, 1), Yp = Ci("round"), Zp = ir(function(n, t) {
        return n - t;
      }, 0);
      function Jp(n) {
        return n && n.length ? Zr(n, Ln) : 0;
      }
      function Qp(n, t) {
        return n && n.length ? Zr(n, E(t, 2)) : 0;
      }
      return f.after = wd, f.ary = so, f.assign = fg, f.assignIn = yo, f.assignInWith = vr, f.assignWith = og, f.at = ag, f.before = co, f.bind = Fi, f.bindAll = dp, f.bindKey = ho, f.castArray = Ad, f.chain = oo, f.chunk = $c, f.compact = kc, f.concat = Gc, f.cond = gp, f.conforms = pp, f.constant = ki, f.countBy = Jh, f.create = lg, f.curry = go, f.curryRight = po, f.debounce = _o, f.defaults = sg, f.defaultsDeep = cg, f.defer = bd, f.delay = xd, f.difference = Hc, f.differenceBy = Kc, f.differenceWith = zc, f.drop = qc, f.dropRight = Xc, f.dropRightWhile = Yc, f.dropWhile = Zc, f.fill = Jc, f.filter = Vh, f.flatMap = td, f.flatMapDeep = ed, f.flatMapDepth = rd, f.flatten = ro, f.flattenDeep = Qc, f.flattenDepth = Vc, f.flip = Cd, f.flow = vp, f.flowRight = mp, f.fromPairs = jc, f.functions = mg, f.functionsIn = wg, f.groupBy = id, f.initial = th, f.intersection = eh, f.intersectionBy = rh, f.intersectionWith = ih, f.invert = xg, f.invertBy = Cg, f.invokeMap = fd, f.iteratee = Gi, f.keyBy = od, f.keys = cn, f.keysIn = Rn, f.map = cr, f.mapKeys = Lg, f.mapValues = yg, f.matches = wp, f.matchesProperty = bp, f.memoize = dr, f.merge = Ig, f.mergeWith = Io, f.method = xp, f.methodOf = Cp, f.mixin = Hi, f.negate = gr, f.nthArg = Lp, f.omit = Tg, f.omitBy = Sg, f.once = Rd, f.orderBy = ad, f.over = yp, f.overArgs = Ld, f.overEvery = Ip, f.overSome = Tp, f.partial = Wi, f.partialRight = vo, f.partition = ld, f.pick = Eg, f.pickBy = To, f.property = Fo, f.propertyOf = Sp, f.pull = ah, f.pullAll = uo, f.pullAllBy = lh, f.pullAllWith = sh, f.pullAt = ch, f.range = Ep, f.rangeRight = Op, f.rearg = yd, f.reject = hd, f.remove = hh, f.rest = Id, f.reverse = Ni, f.sampleSize = gd, f.set = Ag, f.setWith = Ng, f.shuffle = pd, f.slice = dh, f.sortBy = md, f.sortedUniq = bh, f.sortedUniqBy = xh, f.split = tp, f.spread = Td, f.tail = Ch, f.take = Rh, f.takeRight = Lh, f.takeRightWhile = yh, f.takeWhile = Ih, f.tap = kh, f.throttle = Sd, f.thru = sr, f.toArray = Co, f.toPairs = So, f.toPairsIn = Eo, f.toPath = Wp, f.toPlainObject = Lo, f.transform = Pg, f.unary = Ed, f.union = Th, f.unionBy = Sh, f.unionWith = Eh, f.uniq = Oh, f.uniqBy = Ah, f.uniqWith = Nh, f.unset = Fg, f.unzip = Pi, f.unzipWith = fo, f.update = Wg, f.updateWith = Bg, f.values = Yt, f.valuesIn = Mg, f.without = Ph, f.words = No, f.wrap = Od, f.xor = Fh, f.xorBy = Wh, f.xorWith = Bh, f.zip = Mh, f.zipObject = Dh, f.zipObjectDeep = Uh, f.zipWith = $h, f.entries = So, f.entriesIn = Eo, f.extend = yo, f.extendWith = vr, Hi(f, f), f.add = Mp, f.attempt = Po, f.camelCase = kg, f.capitalize = Oo, f.ceil = Dp, f.clamp = Dg, f.clone = Nd, f.cloneDeep = Fd, f.cloneDeepWith = Wd, f.cloneWith = Pd, f.conformsTo = Bd, f.deburr = Ao, f.defaultTo = _p, f.divide = Up, f.endsWith = Gg, f.eq = Xn, f.escape = Hg, f.escapeRegExp = Kg, f.every = Qh, f.find = jh, f.findIndex = to, f.findKey = hg, f.findLast = nd, f.findLastIndex = eo, f.findLastKey = dg, f.floor = $p, f.forEach = ao, f.forEachRight = lo, f.forIn = gg, f.forInRight = pg, f.forOwn = _g, f.forOwnRight = vg, f.get = Di, f.gt = Md, f.gte = Dd, f.has = bg, f.hasIn = Ui, f.head = io, f.identity = Ln, f.includes = ud, f.indexOf = nh, f.inRange = Ug, f.invoke = Rg, f.isArguments = Nt, f.isArray = F, f.isArrayBuffer = Ud, f.isArrayLike = Cn, f.isArrayLikeObject = on, f.isBoolean = $d, f.isBuffer = Ct, f.isDate = kd, f.isElement = Gd, f.isEmpty = Hd, f.isEqual = Kd, f.isEqualWith = zd, f.isError = Bi, f.isFinite = qd, f.isFunction = at, f.isInteger = mo, f.isLength = pr, f.isMap = wo, f.isMatch = Xd, f.isMatchWith = Yd, f.isNaN = Zd, f.isNative = Jd, f.isNil = Vd, f.isNull = Qd, f.isNumber = bo, f.isObject = en, f.isObjectLike = fn, f.isPlainObject = xe, f.isRegExp = Mi, f.isSafeInteger = jd, f.isSet = xo, f.isString = _r, f.isSymbol = En, f.isTypedArray = Xt, f.isUndefined = ng, f.isWeakMap = tg, f.isWeakSet = eg, f.join = uh, f.kebabCase = zg, f.last = kn, f.lastIndexOf = fh, f.lowerCase = qg, f.lowerFirst = Xg, f.lt = rg, f.lte = ig, f.max = kp, f.maxBy = Gp, f.mean = Hp, f.meanBy = Kp, f.min = zp, f.minBy = qp, f.stubArray = zi, f.stubFalse = qi, f.stubObject = Ap, f.stubString = Np, f.stubTrue = Pp, f.multiply = Xp, f.nth = oh, f.noConflict = Rp, f.noop = Ki, f.now = hr, f.pad = Yg, f.padEnd = Zg, f.padStart = Jg, f.parseInt = Qg, f.random = $g, f.reduce = sd, f.reduceRight = cd, f.repeat = Vg, f.replace = jg, f.result = Og, f.round = Yp, f.runInContext = s, f.sample = dd, f.size = _d, f.snakeCase = np, f.some = vd, f.sortedIndex = gh, f.sortedIndexBy = ph, f.sortedIndexOf = _h, f.sortedLastIndex = vh, f.sortedLastIndexBy = mh, f.sortedLastIndexOf = wh, f.startCase = ep, f.startsWith = rp, f.subtract = Zp, f.sum = Jp, f.sumBy = Qp, f.template = ip, f.times = Fp, f.toFinite = lt, f.toInteger = W, f.toLength = Ro, f.toLower = up, f.toNumber = Gn, f.toSafeInteger = ug, f.toString = z, f.toUpper = fp, f.trim = op, f.trimEnd = ap, f.trimStart = lp, f.truncate = sp, f.unescape = cp, f.uniqueId = Bp, f.upperCase = hp, f.upperFirst = $i, f.each = ao, f.eachRight = lo, f.first = io, Hi(f, function() {
        var n = {};
        return Jn(f, function(t, e) {
          q.call(f.prototype, e) || (n[e] = t);
        }), n;
      }(), { chain: !1 }), f.VERSION = h, Bn(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(n) {
        f[n].placeholder = f;
      }), Bn(["drop", "take"], function(n, t) {
        $.prototype[n] = function(e) {
          e = e === u ? 1 : sn(W(e), 0);
          var r = this.__filtered__ && !t ? new $(this) : this.clone();
          return r.__filtered__ ? r.__takeCount__ = gn(e, r.__takeCount__) : r.__views__.push({
            size: gn(e, Zn),
            type: n + (r.__dir__ < 0 ? "Right" : "")
          }), r;
        }, $.prototype[n + "Right"] = function(e) {
          return this.reverse()[n](e).reverse();
        };
      }), Bn(["filter", "map", "takeWhile"], function(n, t) {
        var e = t + 1, r = e == eu || e == aa;
        $.prototype[n] = function(i) {
          var o = this.clone();
          return o.__iteratees__.push({
            iteratee: E(i, 3),
            type: e
          }), o.__filtered__ = o.__filtered__ || r, o;
        };
      }), Bn(["head", "last"], function(n, t) {
        var e = "take" + (t ? "Right" : "");
        $.prototype[n] = function() {
          return this[e](1).value()[0];
        };
      }), Bn(["initial", "tail"], function(n, t) {
        var e = "drop" + (t ? "" : "Right");
        $.prototype[n] = function() {
          return this.__filtered__ ? new $(this) : this[e](1);
        };
      }), $.prototype.compact = function() {
        return this.filter(Ln);
      }, $.prototype.find = function(n) {
        return this.filter(n).head();
      }, $.prototype.findLast = function(n) {
        return this.reverse().find(n);
      }, $.prototype.invokeMap = D(function(n, t) {
        return typeof n == "function" ? new $(this) : this.map(function(e) {
          return pe(e, n, t);
        });
      }), $.prototype.reject = function(n) {
        return this.filter(gr(E(n)));
      }, $.prototype.slice = function(n, t) {
        n = W(n);
        var e = this;
        return e.__filtered__ && (n > 0 || t < 0) ? new $(e) : (n < 0 ? e = e.takeRight(-n) : n && (e = e.drop(n)), t !== u && (t = W(t), e = t < 0 ? e.dropRight(-t) : e.take(t - n)), e);
      }, $.prototype.takeRightWhile = function(n) {
        return this.reverse().takeWhile(n).reverse();
      }, $.prototype.toArray = function() {
        return this.take(Zn);
      }, Jn($.prototype, function(n, t) {
        var e = /^(?:filter|find|map|reject)|While$/.test(t), r = /^(?:head|last)$/.test(t), i = f[r ? "take" + (t == "last" ? "Right" : "") : t], o = r || /^find/.test(t);
        i && (f.prototype[t] = function() {
          var a = this.__wrapped__, l = r ? [1] : arguments, c = a instanceof $, _ = l[0], m = c || F(a), b = function(U) {
            var k = i.apply(f, pt([U], l));
            return r && C ? k[0] : k;
          };
          m && e && typeof _ == "function" && _.length != 1 && (c = m = !1);
          var C = this.__chain__, y = !!this.__actions__.length, O = o && !C, M = c && !y;
          if (!o && m) {
            a = M ? a : new $(this);
            var A = n.apply(a, l);
            return A.__actions__.push({ func: sr, args: [b], thisArg: u }), new Dn(A, C);
          }
          return O && M ? n.apply(this, l) : (A = this.thru(b), O ? r ? A.value()[0] : A.value() : A);
        });
      }), Bn(["pop", "push", "shift", "sort", "splice", "unshift"], function(n) {
        var t = Be[n], e = /^(?:push|sort|unshift)$/.test(n) ? "tap" : "thru", r = /^(?:pop|shift)$/.test(n);
        f.prototype[n] = function() {
          var i = arguments;
          if (r && !this.__chain__) {
            var o = this.value();
            return t.apply(F(o) ? o : [], i);
          }
          return this[e](function(a) {
            return t.apply(F(a) ? a : [], i);
          });
        };
      }), Jn($.prototype, function(n, t) {
        var e = f[t];
        if (e) {
          var r = e.name + "";
          q.call(Gt, r) || (Gt[r] = []), Gt[r].push({ name: t, func: e });
        }
      }), Gt[rr(u, Nn).name] = [{
        name: "wrapper",
        func: u
      }], $.prototype.clone = cs, $.prototype.reverse = hs, $.prototype.value = ds, f.prototype.at = Gh, f.prototype.chain = Hh, f.prototype.commit = Kh, f.prototype.next = zh, f.prototype.plant = Xh, f.prototype.reverse = Yh, f.prototype.toJSON = f.prototype.valueOf = f.prototype.value = Zh, f.prototype.first = f.prototype.head, ae && (f.prototype[ae] = qh), f;
    }, Ut = Kl();
    Lt ? ((Lt.exports = Ut)._ = Ut, Gr._ = Ut) : hn._ = Ut;
  }).call(Ce);
})(wr, wr.exports);
var D0 = wr.exports;
function U0(p) {
  return p.map((v) => ({ x: v.label, ...v.values }));
}
const $0 = (p) => {
  const v = D0.cloneDeep(p);
  let u = "", h = 0;
  return v.forEach((x) => {
    delete x.x, Object.entries(x).forEach(
      ([S, R]) => {
        h < R && (h = R, u = S);
      }
    );
  }), u;
}, k0 = ({
  dataConfig: p,
  data: v,
  xAxis: u = { hide: !0 },
  yAxis: h,
  label: x = !1,
  aspect: S
}, R) => {
  const T = Object.keys(p), I = U0(v), N = Math.max(
    ...I.map((K) => Rr(`${K.x}`))
  ), B = {
    ...ji(u),
    type: "number",
    dataKey: $0(I)
  }, G = {
    ...nu(h),
    type: "category",
    dataKey: "x"
  };
  return /* @__PURE__ */ w(Jt, { config: p, ref: R, aspect: S, children: /* @__PURE__ */ Y(
    ko,
    {
      layout: "vertical",
      accessibilityLayer: !0,
      data: I,
      margin: { left: h && !h.hide ? 0 : 12, right: x ? 32 : 0 },
      children: [
        /* @__PURE__ */ w(
          Le,
          {
            cursor: !0,
            content: /* @__PURE__ */ w(Qt, { yAxisFormatter: h == null ? void 0 : h.tickFormatter })
          }
        ),
        /* @__PURE__ */ w(
          br,
          {
            ...Lr(),
            vertical: !0,
            horizontal: !1
          }
        ),
        /* @__PURE__ */ w(xr, { ...B, hide: u == null ? void 0 : u.hide }),
        /* @__PURE__ */ w(
          Cr,
          {
            ...G,
            hide: h == null ? void 0 : h.hide,
            width: (h == null ? void 0 : h.width) ?? N + 20
          }
        ),
        T.map((K, j) => /* @__PURE__ */ w(Do, { children: /* @__PURE__ */ w(
          Go,
          {
            isAnimationActive: !1,
            layout: "vertical",
            dataKey: K,
            fill: p[K].color || ct(j),
            radius: 4,
            maxBarSize: 24,
            children: x && /* @__PURE__ */ w(
              Ho,
              {
                position: "right",
                offset: 10,
                className: "fill-f1-foreground",
                fontSize: 12
              },
              `label-{${K}}`
            )
          },
          `bar-${K}`
        ) }))
      ]
    }
  ) });
}, g1 = Vt(k0), Vo = Yi(void 0), p1 = ({ children: p, ...v }) => /* @__PURE__ */ w(Vo.Provider, { value: v, children: p }), G0 = () => ({
  ...Zi(Vo)
}), H0 = jn(
  function(v, u) {
    const { src: h } = G0();
    if (!h) return /* @__PURE__ */ w("img", { ref: u, ...v });
    const x = h(v);
    return /* @__PURE__ */ w("img", { ref: u, ...v, ...x });
  }
), K0 = ht("relative flex shrink-0 overflow-hidden", {
  variants: {
    size: {
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
}), jo = yn.forwardRef(({ size: p, className: v, ...u }, h) => /* @__PURE__ */ w(
  Zt.Root,
  {
    ref: h,
    className: rn(K0({ size: p, className: v })),
    ...u
  }
));
jo.displayName = Zt.Root.displayName;
const na = yn.forwardRef(({ className: p, ...v }, u) => /* @__PURE__ */ w(
  Zt.Image,
  {
    ref: u,
    className: rn("aspect-square h-full w-full", p),
    ...v,
    asChild: !0,
    children: /* @__PURE__ */ w(H0, {})
  }
));
na.displayName = Zt.Image.displayName;
const ta = yn.forwardRef(({ className: p, ...v }, u) => /* @__PURE__ */ w(
  Zt.Fallback,
  {
    ref: u,
    className: rn(
      "flex h-full w-full items-center justify-center rounded-md bg-f1-background-promote text-f1-foreground",
      p
    ),
    ...v
  }
));
ta.displayName = Zt.Fallback.displayName;
const ea = jn(
  ({ src: p, alt: v, size: u, color: h }, x) => /* @__PURE__ */ Y(jo, { size: u, ref: x, children: [
    /* @__PURE__ */ w(na, { src: p, alt: v }),
    /* @__PURE__ */ w(
      ta,
      {
        className: rn(h, h && "text-f1-foreground-inverse"),
        children: v
      }
    )
  ] })
);
ea.displayName = "Avatar";
const z0 = ht(
  rn(
    "focus:ring-ring text inline-flex items-center rounded-full border border-solid px-2.5 py-0.5 font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2",
    Ko()
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
function q0({ className: p, variant: v, ...u }) {
  return /* @__PURE__ */ w("div", { className: rn(z0({ variant: v }), p), ...u });
}
const _1 = jn(function({
  text: v,
  avatar: u,
  hasDot: h = !1,
  variant: x = "name"
}) {
  const S = (u == null ? void 0 : u.src) || (u == null ? void 0 : u.alt), R = {
    name: "bg-f1-background-secondary",
    default: "bg-f1-icon",
    neutral: "bg-f1-icon",
    critical: "bg-f1-icon-critical",
    positive: "bg-f1-icon-positive",
    warning: "bg-f1-icon-warning",
    info: "bg-f1-icon-info"
  };
  return /* @__PURE__ */ Y(
    q0,
    {
      variant: x,
      className: rn(S ? "pl-[0.15rem] pr-2" : "px-2"),
      children: [
        S && /* @__PURE__ */ w("span", { className: "mr-1", children: /* @__PURE__ */ w(ea, { alt: u.alt || v[0], src: u.src, size: "xsmall" }) }),
        h && /* @__PURE__ */ w(
          "span",
          {
            className: rn(
              "mr-1 h-2 w-2 rounded-full",
              x && R[x]
            )
          }
        ),
        v
      ]
    }
  );
});
export {
  l1 as A,
  s1 as B,
  i1 as C,
  u1 as F,
  m0 as I,
  o1 as L,
  d1 as P,
  N0 as T,
  g1 as V,
  e1 as X,
  c1 as a,
  h1 as b,
  rn as c,
  f1 as d,
  p1 as e,
  r1 as f,
  a1 as g,
  _1 as h,
  Ko as i,
  x0 as j,
  ea as k,
  P0 as l,
  F0 as m,
  Qo as n,
  b0 as u
};
