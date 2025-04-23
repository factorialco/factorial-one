import { C as l, L as M, c as S, P, a as u, f as _, b as V, A as k, B as T, d as F, e as j, g as O, V as D, h as C, i as H, j as U, U as X, k as G, I as q, l as W, X as z, m as J, n as K, M as Q, u as Y } from "./imageHandler-3DNqY8dw.js";
import { q as Fe, o as je, E as Oe, p as De, s as He, w as Ue, x as Xe, r as Ge, v as qe, t as We } from "./imageHandler-3DNqY8dw.js";
import { jsx as a, jsxs as f } from "react/jsx-runtime";
import * as v from "react";
import Z, { forwardRef as N, useRef as b, useImperativeHandle as ee, Children as ae, useState as re, createContext as oe } from "react";
const be = l(
  {
    name: "Link",
    type: "info"
  },
  M
);
var h = "Progress", p = 100, [te, Le] = S(h), [se, le] = te(h), L = v.forwardRef(
  (e, r) => {
    const {
      __scopeProgress: t,
      value: o = null,
      max: s,
      getValueLabel: i = ne,
      ...n
    } = e;
    (s || s === 0) && !x(s) && console.error(ie(`${s}`, "Progress"));
    const c = x(s) ? s : p;
    o !== null && !y(o, c) && console.error(ce(`${o}`, "Progress"));
    const d = y(o, c) ? o : null, E = m(d) ? i(d, c) : void 0;
    return /* @__PURE__ */ a(se, { scope: t, value: d, max: c, children: /* @__PURE__ */ a(
      P.div,
      {
        "aria-valuemax": c,
        "aria-valuemin": 0,
        "aria-valuenow": m(d) ? d : void 0,
        "aria-valuetext": E,
        role: "progressbar",
        "data-state": R(d, c),
        "data-value": d ?? void 0,
        "data-max": c,
        ...n,
        ref: r
      }
    ) });
  }
);
L.displayName = h;
var w = "ProgressIndicator", $ = v.forwardRef(
  (e, r) => {
    const { __scopeProgress: t, ...o } = e, s = le(w, t);
    return /* @__PURE__ */ a(
      P.div,
      {
        "data-state": R(s.value, s.max),
        "data-value": s.value ?? void 0,
        "data-max": s.max,
        ...o,
        ref: r
      }
    );
  }
);
$.displayName = w;
function ne(e, r) {
  return `${Math.round(e / r * 100)}%`;
}
function R(e, r) {
  return e == null ? "indeterminate" : e === r ? "complete" : "loading";
}
function m(e) {
  return typeof e == "number";
}
function x(e) {
  return m(e) && !isNaN(e) && e > 0;
}
function y(e, r) {
  return m(e) && !isNaN(e) && e <= r && e >= 0;
}
function ie(e, r) {
  return `Invalid prop \`max\` of value \`${e}\` supplied to \`${r}\`. Only numbers greater than 0 are valid max values. Defaulting to \`${p}\`.`;
}
function ce(e, r) {
  return `Invalid prop \`value\` of value \`${e}\` supplied to \`${r}\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or ${p} if no \`max\` prop is set)
  - \`null\` or \`undefined\` if the progress is indeterminate.

Defaulting to \`null\`.`;
}
var I = L, de = $;
const B = v.forwardRef(({ className: e, value: r, ...t }, o) => /* @__PURE__ */ a(
  I,
  {
    ref: o,
    className: u(
      "relative h-2 w-full overflow-hidden rounded-full bg-f1-background-secondary",
      e
    ),
    ...t,
    children: /* @__PURE__ */ a(
      de,
      {
        className: "h-full w-full flex-1 transition-all",
        style: {
          backgroundColor: t.color,
          transform: `translateX(-${100 - (r || 0)}%)`
        }
      }
    )
  }
));
B.displayName = I.displayName;
const ue = ({ value: e, max: r = 100, label: t, color: o }, s) => {
  const i = o || V(0), n = e / r * 100;
  return /* @__PURE__ */ f("div", { className: "flex items-center space-x-2", "aria-live": "polite", children: [
    /* @__PURE__ */ a("div", { className: "flex-grow", children: /* @__PURE__ */ a(
      B,
      {
        color: i,
        value: n,
        className: "w-full",
        "aria-valuemin": 0,
        "aria-valuemax": r,
        "aria-valuenow": e,
        "aria-label": `${n.toFixed(1)}%`
      }
    ) }),
    t && /* @__PURE__ */ a("div", { className: "flex-shrink-0 text-sm font-medium", children: t })
  ] });
}, fe = _(ue), we = l(
  {
    name: "AreaChart",
    type: "info"
  },
  k
), $e = l(
  {
    name: "BarChart",
    type: "info"
  },
  T
), Re = l(
  {
    name: "CategoryBarChart",
    type: "info"
  },
  F
), Ie = l(
  {
    name: "LineChart",
    type: "info"
  },
  j
), Be = l(
  {
    name: "PieChart",
    type: "info"
  },
  O
), Ae = l(
  {
    name: "VerticalBarChart",
    type: "info"
  },
  D
), Ee = l(
  {
    name: "ProgressBarChart",
    type: "info"
  },
  fe
), me = {
  xs: 1,
  sm: 2,
  md: 2,
  lg: 2
}, ve = N(function({ widgets: r, children: t }, o) {
  const s = b(null);
  ee(o, () => s.current);
  const i = ae.toArray(r).filter((n) => !!n).map((n, c) => /* @__PURE__ */ a("div", { className: "h-full @5xl:h-auto [&>div]:h-full", children: n }, c));
  return /* @__PURE__ */ a(C, { layout: "home", children: /* @__PURE__ */ f("div", { ref: s, className: "@container", children: [
    /* @__PURE__ */ f("div", { className: "flex flex-col gap-6 px-5 pt-4 @md:pt-2 @5xl:hidden", children: [
      /* @__PURE__ */ a(H, { columns: me, showArrows: !1, children: i }),
      /* @__PURE__ */ a("main", { children: t })
    ] }),
    /* @__PURE__ */ f("div", { className: "hidden grid-cols-3 gap-5 px-6 pb-6 pt-2 @5xl:grid", children: [
      /* @__PURE__ */ a("div", { className: "col-span-3 flex flex-row gap-5 *:flex-1", children: i.slice(0, 3) }),
      /* @__PURE__ */ a("main", { className: "col-span-2", children: t }),
      /* @__PURE__ */ a("div", { className: "flex flex-1 flex-col gap-5", children: i.slice(3) })
    ] })
  ] }) });
}), he = N(
  function({ children: r, sideContent: t, mainColumnPosition: o = "left" }, s) {
    return /* @__PURE__ */ a("div", { ref: s, className: "h-full overflow-auto", children: /* @__PURE__ */ f(
      "div",
      {
        className: u(
          "flex h-full overflow-auto text-f1-foreground sm:flex-row",
          o === "right" ? "flex-col" : "flex-col-reverse"
        ),
        children: [
          o === "right" && /* @__PURE__ */ a(g, { children: t }),
          /* @__PURE__ */ a(
            "main",
            {
              className: u(
                "h-fit min-h-full border-0 px-6 py-5 sm:basis-3/4 sm:border-solid",
                o === "right" ? "sm:border-l sm:border-l-f1-border-secondary" : "sm:border-r sm:border-r-f1-border-secondary"
              ),
              children: r
            }
          ),
          o === "left" && /* @__PURE__ */ a(g, { children: t })
        ]
      }
    ) });
  }
), g = ({ children: e }) => /* @__PURE__ */ a("aside", { className: "py-5 pl-2 pr-4 sm:basis-1/4 sm:pb-6", children: e }), pe = U({
  base: "relative flex min-h-full w-full flex-col gap-4 place-self-center overflow-y-auto px-6 py-5",
  variants: {
    variant: {
      narrow: "max-w-screen-lg"
    }
  }
}), A = Z.forwardRef(({ children: e, variant: r, className: t, ...o }, s) => /* @__PURE__ */ a(C, { layout: "standard", children: /* @__PURE__ */ a(
  "section",
  {
    ref: s,
    className: u("relative flex-1 overflow-auto", t),
    ...o,
    children: /* @__PURE__ */ a("div", { className: u(pe({ variant: r })), children: e })
  }
) }));
A.displayName = "StandardLayout";
const Me = l(
  {
    name: "StandardLayout",
    type: "layout"
  },
  A
), Se = l(
  {
    name: "TwoColumnLayout",
    type: "layout"
  },
  he
), _e = l(
  {
    name: "HomeLayout",
    type: "layout"
  },
  ve
), xe = oe(
  null
), ye = ({ children: e, fullScreen: r = !0 }) => {
  const t = b(null), [o, s] = re(t.current);
  return Y(() => {
    s(t.current);
  }, []), /* @__PURE__ */ a(xe.Provider, { value: { element: o }, children: /* @__PURE__ */ a(
    "div",
    {
      ref: t,
      id: "factorial-one-layout",
      className: u({
        "flex h-screen w-screen flex-col bg-[#F5F6F8] dark:bg-[#0D1625]": r
      }),
      children: e
    }
  ) });
}, ge = ({
  children: e
}) => /* @__PURE__ */ a(Q, { reducedMotion: "user", children: e }), Ve = ({
  children: e,
  layout: r,
  link: t,
  privacyModeInitiallyEnabled: o,
  image: s,
  i18n: i,
  l10n: n
}) => /* @__PURE__ */ a(ge, { children: /* @__PURE__ */ a(X, { children: /* @__PURE__ */ a(G, { ...n, children: /* @__PURE__ */ a(q, { ...i, children: /* @__PURE__ */ a(W, { ...t, children: /* @__PURE__ */ a(ye, { ...r, children: /* @__PURE__ */ a(z, { children: /* @__PURE__ */ a(
  J,
  {
    initiallyEnabled: o,
    children: /* @__PURE__ */ a(K, { ...s, children: e })
  }
) }) }) }) }) }) }) });
export {
  we as AreaChart,
  Fe as Await,
  $e as BarChart,
  je as Button,
  Re as CategoryBarChart,
  Oe as EmojiImage,
  Ve as FactorialOneProvider,
  _e as HomeLayout,
  De as Icon,
  Ie as LineChart,
  be as Link,
  Be as PieChart,
  J as PrivacyModeProvider,
  Ee as ProgressBarChart,
  Me as StandardLayout,
  Se as TwoColumnLayout,
  Ae as VerticalBarChart,
  He as buildTranslations,
  Ue as getEmojiLabel,
  Xe as useEmojiConfetti,
  Ge as usePrivacyMode,
  qe as useReducedMotion,
  We as useXRay
};
