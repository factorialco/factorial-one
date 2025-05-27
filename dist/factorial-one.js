import { C as c, L as V, c as D, P as b, a as f, f as T, b as j, A as H, B as O, d as X, e as z, g as U, V as G, h as L, i as W, j as q, k as J, l as K, m as x, F as Q, n as y, o as Y, U as Z, p as ee, I as ae, q as re, X as oe, r as te, s as se, M as le, u as ne } from "./imageHandler-Cj0B4T9U.js";
import { t as Je, E as Ke, w as Qe, v as Ye, y as Ze, G as ea, H as aa, x as ra, D as oa, z as ta } from "./imageHandler-Cj0B4T9U.js";
import { jsx as e, jsxs as u, Fragment as ie } from "react/jsx-runtime";
import * as v from "react";
import de, { forwardRef as w, useRef as $, useImperativeHandle as ce, Children as ue, useState as R, useEffect as fe, createContext as me } from "react";
const Se = c(
  {
    name: "Link",
    type: "info"
  },
  V
);
var p = "Progress", g = 100, [he, _e] = D(p), [ve, pe] = he(p), I = v.forwardRef(
  (a, r) => {
    const {
      __scopeProgress: t,
      value: o = null,
      max: s,
      getValueLabel: l = ge,
      ...n
    } = a;
    (s || s === 0) && !C(s) && console.error(xe(`${s}`, "Progress"));
    const i = C(s) ? s : g;
    o !== null && !N(o, i) && console.error(ye(`${o}`, "Progress"));
    const d = N(o, i) ? o : null, m = h(d) ? l(d, i) : void 0;
    return /* @__PURE__ */ e(ve, { scope: t, value: d, max: i, children: /* @__PURE__ */ e(
      b.div,
      {
        "aria-valuemax": i,
        "aria-valuemin": 0,
        "aria-valuenow": h(d) ? d : void 0,
        "aria-valuetext": m,
        role: "progressbar",
        "data-state": M(d, i),
        "data-value": d ?? void 0,
        "data-max": i,
        ...n,
        ref: r
      }
    ) });
  }
);
I.displayName = p;
var B = "ProgressIndicator", E = v.forwardRef(
  (a, r) => {
    const { __scopeProgress: t, ...o } = a, s = pe(B, t);
    return /* @__PURE__ */ e(
      b.div,
      {
        "data-state": M(s.value, s.max),
        "data-value": s.value ?? void 0,
        "data-max": s.max,
        ...o,
        ref: r
      }
    );
  }
);
E.displayName = B;
function ge(a, r) {
  return `${Math.round(a / r * 100)}%`;
}
function M(a, r) {
  return a == null ? "indeterminate" : a === r ? "complete" : "loading";
}
function h(a) {
  return typeof a == "number";
}
function C(a) {
  return h(a) && !isNaN(a) && a > 0;
}
function N(a, r) {
  return h(a) && !isNaN(a) && a <= r && a >= 0;
}
function xe(a, r) {
  return `Invalid prop \`max\` of value \`${a}\` supplied to \`${r}\`. Only numbers greater than 0 are valid max values. Defaulting to \`${g}\`.`;
}
function ye(a, r) {
  return `Invalid prop \`value\` of value \`${a}\` supplied to \`${r}\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or ${g} if no \`max\` prop is set)
  - \`null\` or \`undefined\` if the progress is indeterminate.

Defaulting to \`null\`.`;
}
var A = I, Ce = E;
const S = v.forwardRef(({ className: a, value: r, ...t }, o) => /* @__PURE__ */ e(
  A,
  {
    ref: o,
    className: f(
      "relative h-2 w-full overflow-hidden rounded-full bg-f1-background-secondary",
      a
    ),
    ...t,
    children: /* @__PURE__ */ e(
      Ce,
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
S.displayName = A.displayName;
const Ne = ({ value: a, max: r = 100, label: t, color: o }, s) => {
  const l = o || j(0), n = a / r * 100;
  return /* @__PURE__ */ u("div", { className: "flex items-center space-x-2", "aria-live": "polite", children: [
    /* @__PURE__ */ e("div", { className: "flex-grow", children: /* @__PURE__ */ e(
      S,
      {
        color: l,
        value: n,
        className: "w-full",
        "aria-valuemin": 0,
        "aria-valuemax": r,
        "aria-valuenow": a,
        "aria-label": `${n.toFixed(1)}%`
      }
    ) }),
    t && /* @__PURE__ */ e("div", { className: "flex-shrink-0 text-sm font-medium", children: t })
  ] });
}, Pe = T(Ne), Fe = c(
  {
    name: "AreaChart",
    type: "info"
  },
  H
), ke = c(
  {
    name: "BarChart",
    type: "info"
  },
  O
), Ve = c(
  {
    name: "CategoryBarChart",
    type: "info"
  },
  X
), De = c(
  {
    name: "LineChart",
    type: "info"
  },
  z
), Te = c(
  {
    name: "PieChart",
    type: "info"
  },
  U
), je = c(
  {
    name: "VerticalBarChart",
    type: "info"
  },
  G
), He = c(
  {
    name: "ProgressBarChart",
    type: "info"
  },
  Pe
), be = {
  xs: 1,
  sm: 2,
  md: 2,
  lg: 2
}, Le = w(function({ widgets: r, children: t }, o) {
  const s = $(null);
  ce(o, () => s.current);
  const l = ue.toArray(r).filter((n) => !!n).map((n, i) => /* @__PURE__ */ e("div", { className: "h-full @5xl:h-auto [&>div]:h-full", children: n }, i));
  return /* @__PURE__ */ e(L, { layout: "home", children: /* @__PURE__ */ u("div", { ref: s, className: "@container", children: [
    /* @__PURE__ */ u("div", { className: "flex flex-col gap-6 px-5 pt-4 @md:pt-2 @5xl:hidden", children: [
      /* @__PURE__ */ e(W, { columns: be, showArrows: !1, children: l }),
      /* @__PURE__ */ e("main", { children: t })
    ] }),
    /* @__PURE__ */ u("div", { className: "hidden grid-cols-3 gap-5 px-6 pb-6 pt-2 @5xl:grid", children: [
      /* @__PURE__ */ e("div", { className: "col-span-3 flex flex-row gap-5 *:flex-1", children: l.slice(0, 3) }),
      /* @__PURE__ */ e("main", { className: "col-span-2", children: t }),
      /* @__PURE__ */ e("div", { className: "flex flex-1 flex-col gap-5", children: l.slice(3) })
    ] })
  ] }) });
}), we = w(
  function({ children: r, sideContent: t, mainColumnPosition: o = "left" }, s) {
    return /* @__PURE__ */ e("div", { ref: s, className: "h-full overflow-auto", children: /* @__PURE__ */ u(
      "div",
      {
        className: f(
          "flex h-full overflow-auto text-f1-foreground sm:flex-row",
          o === "right" ? "flex-col" : "flex-col-reverse"
        ),
        children: [
          o === "right" && /* @__PURE__ */ e(P, { children: t }),
          /* @__PURE__ */ e(
            "main",
            {
              className: f(
                "h-fit min-h-full border-0 px-6 py-5 sm:basis-3/4 sm:border-solid",
                o === "right" ? "sm:border-l sm:border-l-f1-border-secondary" : "sm:border-r sm:border-r-f1-border-secondary"
              ),
              children: r
            }
          ),
          o === "left" && /* @__PURE__ */ e(P, { children: t })
        ]
      }
    ) });
  }
), P = ({ children: a }) => /* @__PURE__ */ e("aside", { className: "py-5 pl-2 pr-4 sm:basis-1/4 sm:pb-6", children: a }), $e = q({
  base: "relative flex min-h-full w-full flex-col gap-4 place-self-center overflow-y-auto px-6 py-5",
  variants: {
    variant: {
      narrow: "max-w-screen-lg"
    }
  }
}), _ = de.forwardRef(({ children: a, variant: r, className: t, ...o }, s) => /* @__PURE__ */ e(L, { layout: "standard", children: /* @__PURE__ */ e(
  "section",
  {
    ref: s,
    className: f("relative flex-1 overflow-auto", t),
    ...o,
    children: /* @__PURE__ */ e("div", { className: f($e({ variant: r })), children: a })
  }
) }));
_.displayName = "StandardLayout";
const Oe = c(
  {
    name: "StandardLayout",
    type: "layout"
  },
  _
), Xe = c(
  {
    name: "TwoColumnLayout",
    type: "layout"
  },
  we
), ze = c(
  {
    name: "HomeLayout",
    type: "layout"
  },
  Le
);
function Ue({
  imageUrl: a,
  title: r,
  description: t,
  buttonText: o,
  onClick: s,
  onClose: l,
  dismissible: n,
  width: i,
  trackVisibility: d
}) {
  const [m, F] = R(!1), k = () => {
    F(!0), l && l();
  };
  return fe(() => {
    d && d(!m);
  }, [d, m]), /* @__PURE__ */ e(ie, { children: m ? null : /* @__PURE__ */ u(J, { style: { width: i }, className: "relative bg-f1-background p-1", children: [
    /* @__PURE__ */ u(K, { children: [
      n && /* @__PURE__ */ e("div", { className: "absolute right-2 top-2 z-10", children: /* @__PURE__ */ e(
        x,
        {
          variant: "ghost",
          icon: Q,
          size: "sm",
          hideLabel: !0,
          onClick: k,
          label: "Close"
        }
      ) }),
      /* @__PURE__ */ u("div", { children: [
        /* @__PURE__ */ e("div", { children: a && /* @__PURE__ */ e(
          "img",
          {
            src: a,
            alt: r,
            className: "h-full w-full rounded-md"
          }
        ) }),
        /* @__PURE__ */ u("div", { className: "flex flex-col gap-[2px] p-3", children: [
          /* @__PURE__ */ e(y, { className: "text-lg font-medium", children: r }),
          /* @__PURE__ */ e(y, { className: "line-clamp-2 text-base font-normal text-f1-foreground-secondary", children: t })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ e(Y, { className: "p-3", children: /* @__PURE__ */ e(
      x,
      {
        variant: "neutral",
        size: "sm",
        label: o,
        onClick: s
      }
    ) })
  ] }) });
}
const Re = me(
  null
), Ie = ({ children: a, fullScreen: r = !0 }) => {
  const t = $(null), [o, s] = R(t.current);
  return ne(() => {
    s(t.current);
  }, []), /* @__PURE__ */ e(Re.Provider, { value: { element: o }, children: /* @__PURE__ */ e(
    "div",
    {
      ref: t,
      id: "factorial-one-layout",
      className: f({
        "flex h-screen w-screen flex-col bg-[#F5F6F8] dark:bg-[#0D1625]": r
      }),
      children: a
    }
  ) });
}, Be = ({
  children: a
}) => /* @__PURE__ */ e(le, { reducedMotion: "user", children: a }), Ge = ({
  children: a,
  layout: r,
  link: t,
  privacyModeInitiallyEnabled: o,
  image: s,
  i18n: l,
  l10n: n
}) => /* @__PURE__ */ e(Be, { children: /* @__PURE__ */ e(Z, { children: /* @__PURE__ */ e(ee, { ...n, children: /* @__PURE__ */ e(ae, { ...l, children: /* @__PURE__ */ e(re, { ...t, children: /* @__PURE__ */ e(Ie, { ...r, children: /* @__PURE__ */ e(oe, { children: /* @__PURE__ */ e(
  te,
  {
    initiallyEnabled: o,
    children: /* @__PURE__ */ e(se, { ...s, children: a })
  }
) }) }) }) }) }) }) });
export {
  Fe as AreaChart,
  ke as BarChart,
  x as Button,
  Ve as CategoryBarChart,
  Je as CopyButton,
  Ke as EmojiImage,
  Ge as FactorialOneProvider,
  ze as HomeLayout,
  Qe as Icon,
  De as LineChart,
  Se as Link,
  Te as PieChart,
  te as PrivacyModeProvider,
  Ye as ProductCard,
  Ue as ProductWidget,
  He as ProgressBarChart,
  Oe as StandardLayout,
  Xe as TwoColumnLayout,
  je as VerticalBarChart,
  Ze as buildTranslations,
  ea as getEmojiLabel,
  aa as useEmojiConfetti,
  ra as usePrivacyMode,
  oa as useReducedMotion,
  ta as useXRay
};
