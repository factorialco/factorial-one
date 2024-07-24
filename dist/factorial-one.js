import { jsx as a, jsxs as f, Fragment as Ve } from "react/jsx-runtime";
import { clsx as Pe } from "clsx";
import { twMerge as Fe } from "tailwind-merge";
import { cva as v } from "class-variance-authority";
import * as c from "react";
import te, { forwardRef as k, useState as T, createContext as re, useContext as Ae, useCallback as V, useEffect as ae, useRef as ne, useImperativeHandle as Oe } from "react";
import { useIsomorphicLayoutEffect as J } from "usehooks-ts";
import { createPortal as Be } from "react-dom";
import { Slot as Xe } from "@radix-ui/react-slot";
import * as oe from "recharts";
import { AreaChart as He, CartesianGrid as se, XAxis as ie, YAxis as le, Area as Ge, LineChart as Me, Line as Ee } from "recharts";
import { ChevronLeft as Ke, ChevronRight as Ue, ChevronDown as de, ChevronUp as qe, Check as Ye, OctagonX as We, CircleCheck as Je, TriangleAlert as Qe, BookOpen as Ze, TrendingUp as et, X as tt } from "lucide-react";
import { DayPicker as rt } from "react-day-picker";
import * as p from "@radix-ui/react-select";
import * as I from "@radix-ui/react-avatar";
import * as S from "@radix-ui/react-tabs";
import * as y from "@radix-ui/react-dialog";
import * as R from "@radix-ui/react-scroll-area";
const at = v("inline-block fill-current", {
  variants: {
    size: {
      large: "h-8 w-8",
      medium: "h-6 w-6",
      small: "h-4 w-4",
      tiny: "h-3 w-3"
    }
  },
  defaultVariants: {
    size: "medium"
  }
});
function ce({
  size: e,
  icon: t
}) {
  return t ? /* @__PURE__ */ a(t, { className: at({ size: e }) }) : null;
}
function s(...e) {
  return Fe(Pe(e));
}
const P = v(
  "inline-flex items-center justify-center gap-1 whitespace-nowrap rounded-full border-solid text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "border-2 border-primary-intermediate bg-background text-primary-foreground hover:bg-primary",
        secondary: "border-2 border-secondary-intermediate bg-background text-secondary-foreground hover:bg-secondary",
        outline: "border-2 border-solid border-secondary-intermediate bg-background text-secondary-foreground hover:bg-secondary",
        destructive: "border-2 border-destructive-intermediate bg-destructive text-destructive-foreground hover:bg-destructive/70",
        positive: "border-2 border-positive-intermediate bg-positive text-positive-foreground hover:bg-positive/70",
        ghost: "border-none text-intermediate hover:bg-accent hover:text-accent-foreground"
      },
      rounded: {
        true: "aspect-square px-0"
      },
      size: {
        default: "h-10 py-2",
        sm: "h-8"
      }
    },
    compoundVariants: [
      {
        size: "default",
        rounded: !1,
        class: "px-4"
      },
      {
        size: "sm",
        rounded: !1,
        class: "px-3"
      }
    ],
    defaultVariants: {
      variant: "default",
      size: "default",
      rounded: !1
    }
  }
), ue = c.forwardRef(
  ({ className: e, rounded: t, variant: r, size: n, asChild: o = !1, ...d }, i) => /* @__PURE__ */ a(
    o ? Xe : "button",
    {
      className: s(P({ variant: r, size: n, className: e, rounded: t })),
      ref: i,
      ...d
    }
  )
);
ue.displayName = "Button";
const Q = k(({ label: e, hideLabel: t, onClick: r, disabled: n, icon: o, ...d }, i) => {
  const [l, u] = T(!1);
  return /* @__PURE__ */ f(
    ue,
    {
      title: t ? e : void 0,
      onClick: async (b) => {
        const w = r == null ? void 0 : r(b);
        if (w instanceof Promise) {
          u(!0);
          try {
            await w;
          } finally {
            u(!1);
          }
        }
      },
      disabled: n || l,
      rounded: t,
      ref: i,
      ...d,
      children: [
        o && /* @__PURE__ */ a(ce, { size: "small", icon: o }),
        !t && e
      ]
    }
  );
}), nt = v("flex", {
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
}), fe = k(
  ({
    className: e,
    grow: t,
    basis: r,
    shrink: n,
    paddingX: o,
    paddingY: d,
    inline: i,
    overflow: l,
    maxWidth: u,
    justifyContent: m,
    alignItems: b,
    height: w,
    width: N,
    ...$
  }, C) => /* @__PURE__ */ a(
    "div",
    {
      className: s(
        nt({
          paddingX: o,
          basis: r,
          paddingY: d,
          grow: t,
          shrink: n,
          inline: i,
          overflow: l,
          maxWidth: u,
          justifyContent: m,
          alignItems: b,
          height: w,
          width: N
        }),
        e
      ),
      ref: C,
      ...$
    }
  )
), B = {
  2: "gap-2",
  4: "gap-4",
  8: "gap-8"
}, ot = v("flex-col", {
  variants: {
    gap: {
      ...B
    }
  },
  defaultVariants: {}
}), _ = k(({ className: e, gap: t, children: r, ...n }, o) => /* @__PURE__ */ a(
  fe,
  {
    className: s(ot({ gap: t }), e),
    ref: o,
    ...n,
    children: r
  }
)), X = re({ enabled: !1, enable: () => null, disable: () => null, filter: [] }), st = ({
  children: e
}) => {
  const [t, r] = T(!1), [n, o] = T([]), d = V(
    (l) => {
      o(
        l || [...Z].filter((u) => u !== "layout")
      ), r(!0);
    },
    [o, r]
  ), i = V(() => r(!1), [r]);
  return ae(() => {
    window.XRay = {
      enable: d,
      disable: i
    };
  }, [d, i]), /* @__PURE__ */ f(X.Provider, { value: { enabled: t, enable: d, disable: i, filter: n }, children: [
    e,
    t && typeof document < "u" && Be(
      /* @__PURE__ */ f(
        _,
        {
          gap: "2",
          className: "fixed right-2 top-2 z-50 rounded-sm border-solid border-gray-300 bg-white p-4 opacity-80 shadow-md",
          children: [
            /* @__PURE__ */ a("div", { className: "text-md z-50 font-bold", children: "XRay" }),
            /* @__PURE__ */ a(_, { gap: "2", children: Z.map((l) => /* @__PURE__ */ f("label", { className: "block", children: [
              /* @__PURE__ */ a(
                "input",
                {
                  onChange: (u) => u.target.checked ? o([...n, l]) : o(n.filter((m) => m !== l)),
                  type: "checkbox",
                  checked: n.includes(l),
                  className: "mr-2"
                }
              ),
              l
            ] })) })
          ]
        }
      ),
      document == null ? void 0 : document.body
    )
  ] });
}, it = v(
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
), lt = v(
  "absolute z-40 bg-opacity-50 px-2 py-1 text-xs uppercase",
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
), dt = (e, t) => {
  const { enabled: r, filter: n } = c.useContext(X), o = ne(null);
  Oe(t, () => o.current);
  const d = r && !e.internal, i = typeof document < "u" ? document.body : null;
  return ae(() => {
    if (!d || !o.current || !n.includes(e.type)) return;
    const l = o.current;
    l.dataset.componentName = e.name;
    let u = null, m = null;
    if (i) {
      const b = l.getBoundingClientRect(), { top: w, left: N, width: $, height: C } = b;
      u = document.createElement("div"), u.className = it({ type: e.type }), u.style.top = `${w}px`, u.style.left = `${N}px`, u.style.width = `${$}px`, u.style.height = `${C}px`, m = document.createElement("div"), m.className = lt({ type: e.type }), m.style.top = `${w}px`, m.style.left = `${N}px`, m.innerText = e.name, i.appendChild(m), i.appendChild(u);
    }
    return () => {
      u && (i == null || i.removeChild(u)), m && (i == null || i.removeChild(m));
    };
  }, [d, e.name, e.type, n, i]), {
    ref: o,
    enabled: r
  };
}, or = () => Ae(X), Z = ["layout", "info", "action", "form"], h = (e, t) => {
  const r = k((n, o) => {
    const { ref: d } = dt(e, o);
    return /* @__PURE__ */ a(t, { ref: d, ...n });
  });
  return r.displayName = `${e.name}`, r;
}, H = c.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ a(
  "div",
  {
    ref: r,
    className: s(
      "rounded-2xl border border-solid border-border bg-card text-card-foreground shadow-sm",
      e
    ),
    ...t
  }
));
H.displayName = "Card";
const G = c.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ a(
  "div",
  {
    ref: r,
    className: s("flex flex-col space-y-1.5 p-6 pb-0", e),
    ...t
  }
));
G.displayName = "CardHeader";
const M = c.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ a(
  "h3",
  {
    ref: r,
    className: s(
      "text-2xl font-semibold leading-none tracking-tight",
      e
    ),
    ...t
  }
));
M.displayName = "CardTitle";
const E = c.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ a(
  "p",
  {
    ref: r,
    className: s("text-sm text-muted-foreground", e),
    ...t
  }
));
E.displayName = "CardDescription";
const K = c.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ a("div", { ref: r, className: s("p-6", e), ...t }));
K.displayName = "CardContent";
const U = c.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ a(
  "div",
  {
    ref: r,
    className: s("flex items-center px-6 pb-6 pt-0", e),
    ...t
  }
));
U.displayName = "CardFooter";
const sr = h(
  {
    name: "Card",
    type: "info"
  },
  H
), ir = h(
  {
    name: "CardContent",
    type: "info",
    internal: !0
  },
  K
), lr = h(
  {
    name: "CardDescription",
    type: "info",
    internal: !0
  },
  E
), dr = h(
  {
    name: "CardFooter",
    type: "info",
    internal: !0
  },
  U
), cr = h(
  {
    name: "CardHeader",
    type: "info",
    internal: !0
  },
  G
), ur = h(
  {
    name: "CardTitle",
    type: "info",
    internal: !0
  },
  M
), ct = { light: "", dark: ".dark" }, me = c.createContext(null);
function pe() {
  const e = c.useContext(me);
  if (!e)
    throw new Error("useChart must be used within a <ChartContainer />");
  return e;
}
const q = c.forwardRef(({ id: e, className: t, children: r, config: n, ...o }, d) => {
  const i = c.useId(), l = `chart-${e || i.replace(/:/g, "")}`;
  return /* @__PURE__ */ a(me.Provider, { value: { config: n }, children: /* @__PURE__ */ f(
    "div",
    {
      "data-chart": l,
      ref: d,
      className: s(
        "flex aspect-video justify-center text-xs [&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-none [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line-line]:stroke-border [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-sector]:outline-none [&_.recharts-surface]:outline-none",
        t
      ),
      ...o,
      children: [
        /* @__PURE__ */ a(ut, { id: l, config: n }),
        /* @__PURE__ */ a(oe.ResponsiveContainer, { children: r })
      ]
    }
  ) });
});
q.displayName = "Chart";
const ut = ({ id: e, config: t }) => {
  const r = Object.entries(t).filter(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    ([n, o]) => o.theme || o.color
  );
  return r.length ? /* @__PURE__ */ a(
    "style",
    {
      dangerouslySetInnerHTML: {
        __html: Object.entries(ct).map(
          ([n, o]) => `
${o} [data-chart=${e}] {
${r.map(([d, i]) => {
            var u;
            const l = ((u = i.theme) == null ? void 0 : u[n]) || i.color;
            return l ? `  --color-${d}: ${l};` : null;
          }).join(`
`)}
}
`
        )
      }
    }
  ) : null;
}, ge = oe.Tooltip, Y = c.forwardRef(
  ({
    active: e,
    payload: t,
    className: r,
    indicator: n = "dot",
    hideLabel: o = !1,
    hideIndicator: d = !1,
    label: i,
    labelFormatter: l,
    labelClassName: u,
    formatter: m,
    color: b,
    nameKey: w,
    labelKey: N
  }, $) => {
    const { config: C } = pe(), W = c.useMemo(() => {
      var D;
      if (o || !(t != null && t.length))
        return null;
      const [g] = t, j = `${N || g.dataKey || g.name || "value"}`, L = F(C, g, j), x = !N && typeof i == "string" ? ((D = C[i]) == null ? void 0 : D.label) || i : L == null ? void 0 : L.label;
      return l ? /* @__PURE__ */ a("div", { className: s("font-medium", u), children: l(x, t) }) : x ? /* @__PURE__ */ a("div", { className: s("font-medium", u), children: x }) : null;
    }, [
      i,
      l,
      t,
      o,
      u,
      C,
      N
    ]);
    if (!e || !(t != null && t.length))
      return null;
    const z = t.length === 1 && n !== "dot";
    return /* @__PURE__ */ f(
      "div",
      {
        ref: $,
        className: s(
          "grid min-w-[8rem] items-start gap-1.5 rounded-lg border border-border/50 bg-background px-2.5 py-1.5 text-xs shadow-xl",
          r
        ),
        children: [
          z ? null : W,
          /* @__PURE__ */ a("div", { className: "grid gap-1.5", children: t.map((g, j) => {
            const L = `${w || g.name || g.dataKey || "value"}`, x = F(C, g, L), D = b || g.payload.fill || g.color;
            return /* @__PURE__ */ a(
              "div",
              {
                className: s(
                  "flex w-full items-stretch gap-2 [&>svg]:h-2.5 [&>svg]:w-2.5 [&>svg]:text-muted-foreground",
                  n === "dot" && "items-center"
                ),
                children: m && (g == null ? void 0 : g.value) !== void 0 && g.name ? m(g.value, g.name, g, j, g.payload) : /* @__PURE__ */ f(Ve, { children: [
                  x != null && x.icon ? /* @__PURE__ */ a(x.icon, {}) : !d && /* @__PURE__ */ a(
                    "div",
                    {
                      className: s(
                        "shrink-0 rounded-[2px] border-[--color-border] bg-[--color-bg]",
                        {
                          "h-2.5 w-2.5": n === "dot",
                          "w-1": n === "line",
                          "w-0 border-[1.5px] border-dashed bg-transparent": n === "dashed",
                          "my-0.5": z && n === "dashed"
                        }
                      ),
                      style: {
                        "--color-bg": D,
                        "--color-border": D
                      }
                    }
                  ),
                  /* @__PURE__ */ f(
                    "div",
                    {
                      className: s(
                        "flex flex-1 justify-between leading-none",
                        z ? "items-end" : "items-center"
                      ),
                      children: [
                        /* @__PURE__ */ f("div", { className: "grid gap-1.5", children: [
                          z ? W : null,
                          /* @__PURE__ */ a("span", { className: "text-muted-foreground", children: (x == null ? void 0 : x.label) || g.name })
                        ] }),
                        g.value && /* @__PURE__ */ a("span", { className: "font-mono font-medium tabular-nums text-foreground", children: g.value.toLocaleString() })
                      ]
                    }
                  )
                ] })
              },
              g.dataKey
            );
          }) })
        ]
      }
    );
  }
);
Y.displayName = "ChartTooltip";
const ft = c.forwardRef(
  ({ className: e, hideIcon: t = !1, payload: r, verticalAlign: n = "bottom", nameKey: o }, d) => {
    const { config: i } = pe();
    return r != null && r.length ? /* @__PURE__ */ a(
      "div",
      {
        ref: d,
        className: s(
          "flex items-center justify-center gap-4",
          n === "top" ? "pb-3" : "pt-3",
          e
        ),
        children: r.map((l) => {
          const u = `${o || l.dataKey || "value"}`, m = F(i, l, u);
          return /* @__PURE__ */ f(
            "div",
            {
              className: s(
                "flex items-center gap-1.5 [&>svg]:h-3 [&>svg]:w-3 [&>svg]:text-muted-foreground"
              ),
              children: [
                m != null && m.icon && !t ? /* @__PURE__ */ a(m.icon, {}) : /* @__PURE__ */ a(
                  "div",
                  {
                    className: "h-2 w-2 shrink-0 rounded-[2px]",
                    style: {
                      backgroundColor: l.color
                    }
                  }
                ),
                m == null ? void 0 : m.label
              ]
            },
            l.value
          );
        })
      }
    ) : null;
  }
);
ft.displayName = "ChartLegend";
function F(e, t, r) {
  if (typeof t != "object" || t === null)
    return;
  const n = "payload" in t && typeof t.payload == "object" && t.payload !== null ? t.payload : void 0;
  let o = r;
  return r in t && typeof t[r] == "string" ? o = t[r] : n && r in n && typeof n[r] == "string" && (o = n[r]), o in e ? e[o] : e[r];
}
const mt = {
  "chart-1": "hsl(var(--chart-1))",
  "chart-2": "hsl(var(--chart-2))",
  "chart-3": "hsl(var(--chart-3))",
  "chart-4": "hsl(var(--chart-4))",
  "chart-5": "hsl(var(--chart-5))"
}, A = (e) => {
  const t = Object.values(mt);
  return t[e % t.length];
}, he = (e) => ({
  dataKey: "x",
  tickLine: !1,
  axisLine: !1,
  tickMargin: 8,
  tickFormatter: e == null ? void 0 : e.tickFormatter
}), be = (e) => ({
  tickLine: !1,
  axisLine: !1,
  tickMargin: 8,
  tickFormatter: e == null ? void 0 : e.tickFormatter
}), xe = () => ({
  vertical: !1
});
function ye(e) {
  return k(e);
}
function ve(e) {
  return e.map((t) => ({ x: t.label, ...t.values }));
}
const pt = ({
  data: e,
  dataConfig: t,
  xAxis: r,
  yAxis: n,
  lineType: o
}, d) => {
  const i = Object.keys(t);
  return /* @__PURE__ */ a(q, { config: t, ref: d, children: /* @__PURE__ */ f(
    He,
    {
      accessibilityLayer: !0,
      data: ve(e),
      margin: { left: 12, right: 12 },
      children: [
        /* @__PURE__ */ a(se, { ...xe() }),
        !(r != null && r.hide) && /* @__PURE__ */ a(ie, { ...he(r) }),
        !(n != null && n.hide) && /* @__PURE__ */ a(le, { ...be(n) }),
        /* @__PURE__ */ a(
          ge,
          {
            cursor: !0,
            content: /* @__PURE__ */ a(Y, { indicator: "dot" })
          }
        ),
        i.map((l, u) => /* @__PURE__ */ a(
          Ge,
          {
            dataKey: l,
            type: o,
            fill: t[l].color || A(u),
            fillOpacity: 0.4,
            stroke: t[l].color || A(u)
          },
          l
        ))
      ]
    }
  ) });
}, we = ye(pt), gt = ({
  data: e,
  dataConfig: t,
  xAxis: r,
  yAxis: n,
  lineType: o = "natural"
}, d) => {
  const i = Object.keys(t);
  return /* @__PURE__ */ a(q, { config: t, ref: d, children: /* @__PURE__ */ f(
    Me,
    {
      accessibilityLayer: !0,
      data: ve(e),
      margin: { left: 12, right: 12 },
      children: [
        /* @__PURE__ */ a(se, { ...xe() }),
        !(r != null && r.hide) && /* @__PURE__ */ a(ie, { ...he(r) }),
        !(n != null && n.hide) && /* @__PURE__ */ a(le, { ...be(n) }),
        /* @__PURE__ */ a(ge, { cursor: !0, content: /* @__PURE__ */ a(Y, { hideLabel: !0 }) }),
        i.map((l, u) => /* @__PURE__ */ a(
          Ee,
          {
            dataKey: l,
            type: o,
            stroke: t[l].color || A(u),
            strokeWidth: 2,
            dot: !1
          },
          l
        ))
      ]
    }
  ) });
}, Ne = ye(gt), fr = h(
  {
    name: "AreaChart",
    type: "info"
  },
  we
), mr = h(
  {
    name: "LineChart",
    type: "info"
  },
  Ne
), Ce = c.forwardRef(
  ({ className: e, type: t, ...r }, n) => /* @__PURE__ */ a(
    "input",
    {
      type: t,
      className: s(
        "flex h-10 w-full rounded-lg border-2 border-solid border-input bg-background px-3 py-2 text-sm ring-offset-background transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground/60 hover:border-input-hover focus-visible:border-input-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:bg-muted disabled:opacity-50",
        e
      ),
      ref: n,
      ...r
    }
  )
);
Ce.displayName = "Input";
const ht = Ce;
function bt({
  className: e,
  classNames: t,
  showOutsideDays: r = !0,
  ...n
}) {
  return /* @__PURE__ */ a(
    rt,
    {
      showOutsideDays: r,
      className: s("p-3", e),
      classNames: {
        months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
        month: "space-y-4",
        caption: "flex justify-center pt-1 relative items-center",
        caption_label: "text-sm font-medium",
        nav: "space-x-1 flex items-center",
        nav_button: s(
          P({ variant: "outline" }),
          "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100"
        ),
        nav_button_previous: "absolute left-1",
        nav_button_next: "absolute right-1",
        table: "w-full border-collapse space-y-1",
        head_row: "flex",
        head_cell: "text-muted-foreground rounded-md w-9 font-normal text-[0.8rem]",
        row: "flex w-full mt-2",
        cell: "rounded-full h-9 w-9 text-center text-sm p-0 relative [&:has([aria-selected].day-outside)]:bg-accent focus-within:relative focus-within:z-20 [&:has([aria-selected].day-range-middle)]:rounded-none first:[&:has([aria-selected].day-range-middle)]:rounded-l-lg last:[&:has([aria-selected].day-range-middle)]:rounded-r-lg [&:has([aria-selected].day-range-start)]:rounded-r-none [&:has([aria-selected].day-range-end)]:rounded-l-none first:[&:has([aria-selected].day-range-end)]:rounded-r-[24px] first:[&:has([aria-selected].day-range-end)]:rounded-l-md last:[&:has([aria-selected].day-range-start)]:rounded-l-[24px] last:[&:has([aria-selected].day-range-start)]:rounded-r-md [&:has([aria-selected].day-range-start.day-range-end)]:rounded-full",
        day: s(
          P({ variant: "ghost" }),
          "rounded-[inherit] h-9 w-9 p-0 font-normal aria-selected:opacity-100"
        ),
        day_range_start: "day-range-start",
        day_range_end: "day-range-end",
        day_selected: "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",
        day_today: "bg-accent text-accent-foreground",
        day_outside: "day-outside text-muted-foreground opacity-50 aria-selected:bg-accent aria-selected:text-muted-foreground",
        day_disabled: "text-muted-foreground opacity-50",
        day_range_middle: "day-range-middle",
        day_hidden: "invisible",
        ...t
      },
      components: {
        IconLeft: () => /* @__PURE__ */ a(Ke, { className: "h-4 w-4" }),
        IconRight: () => /* @__PURE__ */ a(Ue, { className: "h-4 w-4" })
      },
      ...n
    }
  );
}
bt.displayName = "Calendar";
const pr = p.Root, gr = p.Group, hr = p.Value, xt = c.forwardRef(({ className: e, children: t, ...r }, n) => /* @__PURE__ */ f(
  p.Trigger,
  {
    ref: n,
    className: s(
      "flex h-10 w-full items-center justify-between rounded-lg border-2 border-solid border-input bg-background px-3 py-2 text-sm ring-offset-background transition-colors placeholder:text-muted-foreground hover:border-input-hover focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus-visible:border-input-hover disabled:cursor-not-allowed disabled:bg-muted disabled:opacity-50 [&>span]:line-clamp-1",
      e
    ),
    ...r,
    children: [
      t,
      /* @__PURE__ */ a(p.Icon, { asChild: !0, children: /* @__PURE__ */ a(de, { className: "h-4 w-4 opacity-50" }) })
    ]
  }
));
xt.displayName = p.Trigger.displayName;
const ke = c.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ a(
  p.ScrollUpButton,
  {
    ref: r,
    className: s(
      "flex cursor-default items-center justify-center py-1",
      e
    ),
    ...t,
    children: /* @__PURE__ */ a(qe, { className: "h-4 w-4 text-secondary-foreground" })
  }
));
ke.displayName = p.ScrollUpButton.displayName;
const Re = c.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ a(
  p.ScrollDownButton,
  {
    ref: r,
    className: s(
      "flex cursor-default items-center justify-center py-1",
      e
    ),
    ...t,
    children: /* @__PURE__ */ a(de, { className: "h-4 w-4 text-secondary-foreground" })
  }
));
Re.displayName = p.ScrollDownButton.displayName;
const yt = c.forwardRef(({ className: e, children: t, position: r = "popper", ...n }, o) => /* @__PURE__ */ a(p.Portal, { children: /* @__PURE__ */ f(
  p.Content,
  {
    ref: o,
    className: s(
      "relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-lg border bg-popover text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      r === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
      e
    ),
    position: r,
    ...n,
    children: [
      /* @__PURE__ */ a(ke, {}),
      /* @__PURE__ */ a(
        p.Viewport,
        {
          className: s(
            "p-1",
            r === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
          ),
          children: t
        }
      ),
      /* @__PURE__ */ a(Re, {})
    ]
  }
) }));
yt.displayName = p.Content.displayName;
const vt = c.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ a(
  p.Label,
  {
    ref: r,
    className: s("py-1.5 pl-8 pr-2 text-sm font-semibold", e),
    ...t
  }
));
vt.displayName = p.Label.displayName;
const wt = c.forwardRef(({ className: e, children: t, ...r }, n) => /* @__PURE__ */ f(
  p.Item,
  {
    ref: n,
    className: s(
      "relative flex w-full cursor-default select-none items-center rounded-md py-2 pl-2 pr-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    ...r,
    children: [
      /* @__PURE__ */ a("span", { className: "absolute right-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ a(p.ItemIndicator, { children: /* @__PURE__ */ a(Ye, { className: "h-4 w-4" }) }) }),
      /* @__PURE__ */ a(p.ItemText, { children: t })
    ]
  }
));
wt.displayName = p.Item.displayName;
const Nt = c.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ a(
  p.Separator,
  {
    ref: r,
    className: s("-mx-1 my-1 h-px bg-muted", e),
    ...t
  }
));
Nt.displayName = p.Separator.displayName;
const br = h(
  {
    name: "Input",
    type: "form"
  },
  ht
), Ct = v(
  "relative w-full rounded-2xl bg-secondary p-6 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-6 [&>svg]:top-6 [&>svg]:text-foreground [&>svg~*]:pl-8",
  {
    variants: {
      variant: {
        destructive: "bg-destructive text-destructive-foreground dark:border-destructive-intermediate [&>svg]:text-destructive-intermediate",
        positive: "bg-positive text-positive-foreground dark:border-positive-intermediate [&>svg]:text-positive-intermediate",
        warning: "bg-warning text-warning-foreground dark:border-warning-intermediate [&>svg]:text-warning-intermediate",
        info: "bg-info text-info-foreground dark:border-info-intermediate [&>svg]:text-info-intermediate"
      }
    },
    defaultVariants: {
      variant: "info"
    }
  }
), kt = {
  destructive: We,
  positive: Je,
  warning: Qe,
  info: Ze
}, xr = h(
  {
    name: "Alert",
    type: "info"
  },
  c.forwardRef(({ className: e, variant: t = "info", children: r, ...n }, o) => {
    const d = t ? kt[t] : null;
    return /* @__PURE__ */ a(
      "div",
      {
        ref: o,
        role: "alert",
        className: s(Ct({ variant: t }), e),
        ...n,
        children: /* @__PURE__ */ f("div", { className: "flex flex-row", children: [
          d && /* @__PURE__ */ a("div", { className: "mr-2 flex h-6 items-center", children: /* @__PURE__ */ a(d, { size: 20 }) }),
          /* @__PURE__ */ a("div", { children: r })
        ] })
      }
    );
  })
), Rt = c.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ a(
  "h5",
  {
    ref: r,
    className: s("mb-1 text-base font-medium tracking-tight", e),
    ...t
  }
));
Rt.displayName = "AlertTitle";
const St = c.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ a(
  "div",
  {
    ref: r,
    className: s("[&_p]:leading-relaxed", e),
    ...t
  }
));
St.displayName = "AlertDescription";
const yr = [
  "xsmall",
  "small",
  "medium",
  "large",
  "xlarge",
  "xxlarge"
], _t = v("relative flex shrink-0 overflow-hidden", {
  variants: {
    size: {
      xsmall: "h-8 w-8 rounded-xl text-xs",
      small: "h-10 w-10 rounded-xl text-sm",
      medium: "h-12 w-12 rounded-xl",
      large: "h-16 w-16 rounded-2xl text-xl",
      xlarge: "h-20 w-20 rounded-2xl text-2xl",
      xxlarge: "h-32 w-32 rounded-3xl text-3xl"
    }
  },
  defaultVariants: {
    size: "medium"
  }
}), It = c.forwardRef(({ size: e, className: t, ...r }, n) => /* @__PURE__ */ a(
  I.Root,
  {
    ref: n,
    className: s(_t({ size: e, className: t })),
    ...r
  }
));
It.displayName = I.Root.displayName;
const $t = c.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ a(
  I.Image,
  {
    ref: r,
    className: s("aspect-square h-full w-full", e),
    ...t
  }
));
$t.displayName = I.Image.displayName;
const Lt = c.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ a(
  I.Fallback,
  {
    ref: r,
    className: s(
      "flex h-full w-full items-center justify-center rounded-xl bg-muted",
      e
    ),
    ...t
  }
));
Lt.displayName = I.Fallback.displayName;
const Dt = v(
  "inline-flex items-center rounded-full border border-solid px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "border-secondary-intermediate bg-transparent text-secondary-foreground",
        neutral: "border-transparent bg-secondary text-secondary-foreground",
        destructive: "border-transparent bg-destructive text-destructive-foreground",
        positive: "border-transparent bg-positive text-positive-foreground",
        warning: "border-transparent bg-warning text-warning-foreground",
        info: "border-transparent bg-info text-info-foreground"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
function vr({ className: e, variant: t, ...r }) {
  return /* @__PURE__ */ a("div", { className: s(Dt({ variant: t }), e), ...r });
}
const Tt = k(({ header: e, footer: t, children: r }, n) => /* @__PURE__ */ f(H, { ref: n, children: [
  /* @__PURE__ */ f(G, { children: [
    /* @__PURE__ */ a(M, { children: e.title }),
    /* @__PURE__ */ a(E, { children: e.description })
  ] }),
  /* @__PURE__ */ a(K, { children: r }),
  /* @__PURE__ */ a(U, { children: /* @__PURE__ */ a("div", { className: "flex w-full items-start gap-2 text-sm", children: /* @__PURE__ */ f("div", { className: "grid gap-2", children: [
    /* @__PURE__ */ f("div", { className: "flex items-center gap-2 font-medium leading-none", children: [
      t.trend,
      " ",
      /* @__PURE__ */ a(et, { className: "h-4 w-4" })
    ] }),
    /* @__PURE__ */ a("div", { className: "flex items-center gap-2 leading-none text-muted-foreground", children: t.time })
  ] }) }) })
] }));
function Se(e, t) {
  return ({ [t]: r, ref: n, ...o }) => /* @__PURE__ */ a(
    Tt,
    {
      ref: n,
      ...o,
      children: /* @__PURE__ */ a(e, { ...r })
    }
  );
}
const zt = Se(we, "chart"), jt = Se(Ne, "chart"), wr = h(
  {
    name: "AreaChartInsight",
    type: "info"
  },
  zt
), Nr = h(
  {
    name: "LineChartInsight",
    type: "info"
  },
  jt
), Cr = k(({ header: e, children: t, tileSize: r }, n) => /* @__PURE__ */ f("div", { children: [
  e && /* @__PURE__ */ f("div", { className: "flex flex-col gap-1 pb-6 leading-normal", children: [
    /* @__PURE__ */ a("h2", { className: "text-xl font-semibold", children: e.title }),
    e.description && /* @__PURE__ */ a("div", { className: "max-w-screen-md text-muted-foreground", children: e.description })
  ] }),
  /* @__PURE__ */ a(Ot, { ref: n, tileSize: r, children: t })
] })), Vt = v("grid grid-cols-1", {
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
      ...B
    }
  },
  defaultVariants: {
    tileSize: "md",
    gap: "4"
  }
}), Pt = te.forwardRef(({ className: e, gap: t, children: r, tileSize: n, ...o }, d) => /* @__PURE__ */ a("div", { className: s("@container", "grow"), ref: d, ...o, children: /* @__PURE__ */ a(
  "div",
  {
    className: s(Vt({ gap: t, tileSize: n }), e),
    ref: d,
    ...o,
    children: r
  }
) })), Ft = v("flex-row", {
  variants: {
    gap: {
      ...B
    },
    wrap: {
      true: "flex-wrap"
    }
  },
  defaultVariants: {
    wrap: !0
  }
}), At = te.forwardRef(({ className: e, gap: t, wrap: r, ...n }, o) => /* @__PURE__ */ a(
  fe,
  {
    className: s(Ft({ gap: t, wrap: r }), e),
    ref: o,
    ...n
  }
)), kr = h(
  {
    name: "Stack",
    type: "layout"
  },
  _
), Rr = h(
  {
    name: "Split",
    type: "layout"
  },
  At
), Ot = h(
  {
    name: "AutoGrid",
    type: "layout"
  },
  Pt
), Sr = S.Root, Bt = c.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ a(
  S.List,
  {
    ref: r,
    className: s(
      "inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",
      e
    ),
    ...t
  }
));
Bt.displayName = S.List.displayName;
const Xt = c.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ a(
  S.Trigger,
  {
    ref: r,
    className: s(
      "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",
      e
    ),
    ...t
  }
));
Xt.displayName = S.Trigger.displayName;
const Ht = c.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ a(
  S.Content,
  {
    ref: r,
    className: s(
      "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      e
    ),
    ...t
  }
));
Ht.displayName = S.Content.displayName;
const Gt = y.Root, Mt = y.Portal, _e = c.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ a(
  y.Overlay,
  {
    ref: r,
    className: s(
      "fixed inset-0 z-50 bg-black/40 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      e
    ),
    ...t
  }
));
_e.displayName = y.Overlay.displayName;
const Ie = c.forwardRef(({ className: e, children: t, ...r }, n) => /* @__PURE__ */ a(Mt, { children: /* @__PURE__ */ a(_e, { className: "grid place-items-center overflow-y-auto sm:p-8", children: /* @__PURE__ */ f(
  y.Content,
  {
    ref: n,
    onInteractOutside: (o) => o.preventDefault(),
    className: s(
      "relative z-50 grid w-full origin-center gap-4 border bg-background p-8 shadow-2xl duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 sm:w-fit sm:min-w-[400px] sm:rounded-2xl md:min-w-[456px]",
      e
    ),
    ...r,
    children: [
      t,
      /* @__PURE__ */ f(y.Close, { className: "absolute right-2 top-2 rounded-sm p-2 text-secondary-foreground opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground", children: [
        /* @__PURE__ */ a(tt, { className: "h-5 w-5" }),
        /* @__PURE__ */ a("span", { className: "sr-only", children: "Close" })
      ] })
    ]
  }
) }) }));
Ie.displayName = y.Content.displayName;
const $e = ({
  className: e,
  ...t
}) => /* @__PURE__ */ a(
  "div",
  {
    className: s(
      "absolute left-8 top-0 h-16 w-16 translate-y-[-50%] rounded-2xl bg-background p-4 text-primary-foreground shadow-md",
      e
    ),
    ...t
  }
);
$e.displayName = "DialogIcon";
const Le = ({
  className: e,
  ...t
}) => /* @__PURE__ */ a("div", { className: s("mt-5 flex flex-col text-left", e), ...t });
Le.displayName = "DialogHeader";
const De = ({
  className: e,
  ...t
}) => /* @__PURE__ */ a(
  "div",
  {
    className: s(
      "-mx-8 -mb-8 mt-4 flex flex-col-reverse gap-0 rounded-bl-2xl rounded-br-2xl border-0 border-t border-solid border-secondary-intermediate/50 bg-secondary/25 px-8 py-4 sm:flex-row sm:justify-end sm:space-x-2",
      e
    ),
    ...t
  }
);
De.displayName = "DialogFooter";
const Te = c.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ a(
  y.Title,
  {
    ref: r,
    className: s("mt-1 text-xl font-medium leading-none", e),
    ...t
  }
));
Te.displayName = y.Title.displayName;
const ze = c.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ a(
  y.Description,
  {
    ref: r,
    className: s("mt-2 text-base text-muted-foreground", e),
    ...t
  }
));
ze.displayName = y.Description.displayName;
function ee({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    "div",
    {
      className: s("animate-pulse rounded-md bg-muted", e),
      ...t
    }
  );
}
const Et = k(
  ({ header: e, children: t, loading: r, actions: n, open: o, onClose: d }, i) => {
    const [l, u] = T(!1), m = V(() => {
      u(!0);
      const b = setTimeout(() => {
        d == null || d(), u(!1);
      }, 200);
      return () => clearTimeout(b);
    }, [d]);
    return /* @__PURE__ */ a(
      Gt,
      {
        open: o && !l,
        onOpenChange: (b) => !b && (m == null ? void 0 : m()),
        children: /* @__PURE__ */ f(Ie, { ref: i, children: [
          e && /* @__PURE__ */ f(Le, { children: [
            e.icon && /* @__PURE__ */ a($e, { children: /* @__PURE__ */ a(ce, { size: "large", icon: e.icon }) }),
            /* @__PURE__ */ a(Te, { children: e.title }),
            /* @__PURE__ */ a(ze, { children: e.description })
          ] }),
          /* @__PURE__ */ a(_, { grow: !0, children: r ? /* @__PURE__ */ f(_, { gap: "4", children: [
            /* @__PURE__ */ a(ee, { className: "h-6 w-full rounded-full" }),
            /* @__PURE__ */ a(ee, { className: "h-6 w-full rounded-full" })
          ] }) : t }),
          n && /* @__PURE__ */ f(De, { children: [
            n.secondary && /* @__PURE__ */ a(Q, { variant: "secondary", size: "sm", ...n.secondary }),
            /* @__PURE__ */ a(Q, { variant: "default", size: "sm", ...n.primary })
          ] })
        ] })
      }
    );
  }
), _r = h(
  {
    name: "Dialog",
    type: "info"
  },
  Et
), je = c.forwardRef(({ className: e, children: t, ...r }, n) => /* @__PURE__ */ f(
  R.Root,
  {
    ref: n,
    className: s("relative overflow-hidden", e),
    scrollHideDelay: 200,
    ...r,
    children: [
      /* @__PURE__ */ a(
        R.Viewport,
        {
          className: "h-full w-full rounded-[inherit]",
          "data-scroll-container": !0,
          children: t
        }
      ),
      /* @__PURE__ */ a(O, { orientation: "vertical" }),
      /* @__PURE__ */ a(O, { orientation: "horizontal" }),
      /* @__PURE__ */ a(R.Corner, {})
    ]
  }
));
je.displayName = R.Root.displayName;
const O = c.forwardRef(({ className: e, orientation: t = "vertical", ...r }, n) => /* @__PURE__ */ a(
  R.ScrollAreaScrollbar,
  {
    ref: n,
    orientation: t,
    forceMount: !0,
    className: s(
      "z-50 flex touch-none select-none p-[1px]",
      "transition-opacity data-[state=hidden]:pointer-events-none data-[state=visible]:pointer-events-auto data-[state=hidden]:opacity-50 data-[state=visible]:opacity-100",
      t === "vertical" && "mr-[2px] h-full w-2.5",
      t === "horizontal" && "mt-[2px] h-2.5 flex-col",
      e
    ),
    ...r,
    children: /* @__PURE__ */ a(R.ScrollAreaThumb, { className: "relative flex-1 rounded-full bg-foreground opacity-50" })
  }
));
O.displayName = R.ScrollAreaScrollbar.displayName;
const Ir = h(
  {
    name: "ScrollArea",
    type: "layout"
  },
  je
), Kt = re(
  null
), Ut = ({ children: e, fullScreen: t = !0, addBodyClasses: r = !0 }) => {
  const n = ne(null), [o, d] = T(n.current);
  return J(() => {
    d(n.current);
  }, []), J(() => {
    if (r && typeof document < "u") {
      const i = s("font-sans text-foreground").split(" ");
      return document.body.classList.add(...i), () => document.body.classList.remove(...i);
    }
  }, [r]), /* @__PURE__ */ a(Kt.Provider, { value: { element: o }, children: /* @__PURE__ */ a(
    _,
    {
      ref: n,
      className: s("font-sans text-foreground", {
        "h-screen w-screen bg-page-background": t
      }),
      children: e
    }
  ) });
}, $r = ({ children: e, layout: t }) => /* @__PURE__ */ a(Ut, { ...t, children: /* @__PURE__ */ a(st, { children: e }) });
export {
  xr as Alert,
  St as AlertDescription,
  Rt as AlertTitle,
  fr as AreaChart,
  wr as AreaChartInsight,
  Ot as AutoGrid,
  It as Avatar,
  Lt as AvatarFallback,
  $t as AvatarImage,
  vr as Badge,
  Q as Button,
  bt as Calendar,
  sr as Card,
  ir as CardContent,
  lr as CardDescription,
  dr as CardFooter,
  cr as CardHeader,
  ur as CardTitle,
  _r as Dialog,
  $r as FactorialOneProvider,
  br as Input,
  Tt as InsightsContainer,
  Cr as InsightsDashboard,
  mr as LineChart,
  Nr as LineChartInsight,
  Ir as ScrollArea,
  pr as Select,
  yt as SelectContent,
  gr as SelectGroup,
  wt as SelectItem,
  vt as SelectLabel,
  Re as SelectScrollDownButton,
  ke as SelectScrollUpButton,
  Nt as SelectSeparator,
  xt as SelectTrigger,
  hr as SelectValue,
  Rr as Split,
  kr as Stack,
  Sr as Tabs,
  Ht as TabsContent,
  Bt as TabsList,
  Xt as TabsTrigger,
  Dt as badgeVariants,
  yr as sizes,
  or as useXRay,
  Se as wrap
};
