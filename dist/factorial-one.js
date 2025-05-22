import { C as d, L as D, c as T, P as b, a as f, f as j, b as H, A as O, B as X, d as z, e as G, g as W, V as q, h as w, i as J, j as K, k as Q, l as Y, m as x, F as Z, n as y, o as U, U as ee, p as ae, I as re, q as oe, X as te, r as se, s as le, M as ne, u as ie } from "./imageHandler-DN_DsCRj.js";
import { x as Qe, t as Ye, G as Ze, w as Ue, v as ea, z as aa, H as ra, J as oa, y as ta, E as sa, D as la } from "./imageHandler-DN_DsCRj.js";
import { jsx as a, jsxs as u, Fragment as ce } from "react/jsx-runtime";
import * as v from "react";
import de, { forwardRef as L, useRef as $, useImperativeHandle as ue, Children as fe, useState as I, useEffect as me, createContext as he } from "react";
const _e = d(
  {
    name: "Link",
    type: "info"
  },
  D
);
var p = "Progress", g = 100, [ve, Fe] = T(p), [pe, ge] = ve(p), R = v.forwardRef(
  (e, r) => {
    const {
      __scopeProgress: t,
      value: o = null,
      max: s,
      getValueLabel: l = xe,
      ...n
    } = e;
    (s || s === 0) && !C(s) && console.error(ye(`${s}`, "Progress"));
    const i = C(s) ? s : g;
    o !== null && !N(o, i) && console.error(Ce(`${o}`, "Progress"));
    const c = N(o, i) ? o : null, m = h(c) ? l(c, i) : void 0;
    return /* @__PURE__ */ a(pe, { scope: t, value: c, max: i, children: /* @__PURE__ */ a(
      b.div,
      {
        "aria-valuemax": i,
        "aria-valuemin": 0,
        "aria-valuenow": h(c) ? c : void 0,
        "aria-valuetext": m,
        role: "progressbar",
        "data-state": A(c, i),
        "data-value": c ?? void 0,
        "data-max": i,
        ...n,
        ref: r
      }
    ) });
  }
);
R.displayName = p;
var B = "ProgressIndicator", E = v.forwardRef(
  (e, r) => {
    const { __scopeProgress: t, ...o } = e, s = ge(B, t);
    return /* @__PURE__ */ a(
      b.div,
      {
        "data-state": A(s.value, s.max),
        "data-value": s.value ?? void 0,
        "data-max": s.max,
        ...o,
        ref: r
      }
    );
  }
);
E.displayName = B;
function xe(e, r) {
  return `${Math.round(e / r * 100)}%`;
}
function A(e, r) {
  return e == null ? "indeterminate" : e === r ? "complete" : "loading";
}
function h(e) {
  return typeof e == "number";
}
function C(e) {
  return h(e) && !isNaN(e) && e > 0;
}
function N(e, r) {
  return h(e) && !isNaN(e) && e <= r && e >= 0;
}
function ye(e, r) {
  return `Invalid prop \`max\` of value \`${e}\` supplied to \`${r}\`. Only numbers greater than 0 are valid max values. Defaulting to \`${g}\`.`;
}
function Ce(e, r) {
  return `Invalid prop \`value\` of value \`${e}\` supplied to \`${r}\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or ${g} if no \`max\` prop is set)
  - \`null\` or \`undefined\` if the progress is indeterminate.

Defaulting to \`null\`.`;
}
var M = R, Ne = E;
const S = v.forwardRef(({ className: e, value: r, ...t }, o) => /* @__PURE__ */ a(
  M,
  {
    ref: o,
    className: f(
      "relative h-2 w-full overflow-hidden rounded-full bg-f1-background-secondary",
      e
    ),
    ...t,
    children: /* @__PURE__ */ a(
      Ne,
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
S.displayName = M.displayName;
const Pe = ({ value: e, max: r = 100, label: t, color: o }, s) => {
  const l = o || H(0), n = e / r * 100;
  return /* @__PURE__ */ u("div", { className: "flex items-center space-x-2", "aria-live": "polite", children: [
    /* @__PURE__ */ a("div", { className: "flex-grow", children: /* @__PURE__ */ a(
      S,
      {
        color: l,
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
}, be = j(Pe), Ve = d(
  {
    name: "AreaChart",
    type: "info"
  },
  O
), ke = d(
  {
    name: "BarChart",
    type: "info"
  },
  X
), De = d(
  {
    name: "CategoryBarChart",
    type: "info"
  },
  z
), Te = d(
  {
    name: "LineChart",
    type: "info"
  },
  G
), je = d(
  {
    name: "PieChart",
    type: "info"
  },
  W
), He = d(
  {
    name: "VerticalBarChart",
    type: "info"
  },
  q
), Oe = d(
  {
    name: "ProgressBarChart",
    type: "info"
  },
  be
), we = {
  xs: 1,
  sm: 2,
  md: 2,
  lg: 2
}, Le = L(function({ widgets: r, children: t }, o) {
  const s = $(null);
  ue(o, () => s.current);
  const l = fe.toArray(r).filter((n) => !!n).map((n, i) => /* @__PURE__ */ a("div", { className: "h-full @5xl:h-auto [&>div]:h-full", children: n }, i));
  return /* @__PURE__ */ a(w, { layout: "home", children: /* @__PURE__ */ u("div", { ref: s, className: "@container", children: [
    /* @__PURE__ */ u("div", { className: "flex flex-col gap-6 px-5 pt-4 @md:pt-2 @5xl:hidden", children: [
      /* @__PURE__ */ a(J, { columns: we, showArrows: !1, children: l }),
      /* @__PURE__ */ a("main", { children: t })
    ] }),
    /* @__PURE__ */ u("div", { className: "hidden grid-cols-3 gap-5 px-6 pb-6 pt-2 @5xl:grid", children: [
      /* @__PURE__ */ a("div", { className: "col-span-3 flex flex-row gap-5 *:flex-1", children: l.slice(0, 3) }),
      /* @__PURE__ */ a("main", { className: "col-span-2", children: t }),
      /* @__PURE__ */ a("div", { className: "flex flex-1 flex-col gap-5", children: l.slice(3) })
    ] })
  ] }) });
}), $e = L(
  function({ children: r, sideContent: t, mainColumnPosition: o = "left" }, s) {
    return /* @__PURE__ */ a("div", { ref: s, className: "h-full overflow-auto", children: /* @__PURE__ */ u(
      "div",
      {
        className: f(
          "flex h-full overflow-auto text-f1-foreground sm:flex-row",
          o === "right" ? "flex-col" : "flex-col-reverse"
        ),
        children: [
          o === "right" && /* @__PURE__ */ a(P, { children: t }),
          /* @__PURE__ */ a(
            "main",
            {
              className: f(
                "h-fit min-h-full border-0 px-6 py-5 sm:basis-3/4 sm:border-solid",
                o === "right" ? "sm:border-l sm:border-l-f1-border-secondary" : "sm:border-r sm:border-r-f1-border-secondary"
              ),
              children: r
            }
          ),
          o === "left" && /* @__PURE__ */ a(P, { children: t })
        ]
      }
    ) });
  }
), P = ({ children: e }) => /* @__PURE__ */ a("aside", { className: "py-5 pl-2 pr-4 sm:basis-1/4 sm:pb-6", children: e }), Ie = K({
  base: "relative flex min-h-full w-full flex-col gap-4 place-self-center overflow-y-auto px-6 py-5",
  variants: {
    variant: {
      narrow: "max-w-screen-lg"
    }
  }
}), _ = de.forwardRef(({ children: e, variant: r, className: t, ...o }, s) => /* @__PURE__ */ a(w, { layout: "standard", children: /* @__PURE__ */ a(
  "section",
  {
    ref: s,
    className: f("relative flex-1 overflow-auto", t),
    ...o,
    children: /* @__PURE__ */ a("div", { className: f(Ie({ variant: r })), children: e })
  }
) }));
_.displayName = "StandardLayout";
const Xe = d(
  {
    name: "StandardLayout",
    type: "layout"
  },
  _
), ze = d(
  {
    name: "TwoColumnLayout",
    type: "layout"
  },
  $e
), Ge = d(
  {
    name: "HomeLayout",
    type: "layout"
  },
  Le
);
function We({
  mediaUrl: e,
  title: r,
  description: t,
  buttonText: o,
  onClick: s,
  onClose: l,
  dismissible: n,
  width: i,
  trackVisibility: c
}) {
  const [m, F] = I(!1), V = () => {
    F(!0), l && l();
  };
  me(() => {
    c && c(!m);
  }, [c, m]);
  const k = e == null ? void 0 : e.includes(".mp4");
  return /* @__PURE__ */ a(ce, { children: m ? null : /* @__PURE__ */ u(Q, { style: { width: i }, className: "relative bg-f1-background p-1", children: [
    /* @__PURE__ */ u(Y, { children: [
      n && /* @__PURE__ */ a("div", { className: "absolute right-2 top-2 z-10", children: /* @__PURE__ */ a(
        x,
        {
          variant: "ghost",
          icon: Z,
          size: "sm",
          hideLabel: !0,
          onClick: V,
          label: "Close"
        }
      ) }),
      /* @__PURE__ */ u("div", { children: [
        /* @__PURE__ */ a("div", { children: k ? /* @__PURE__ */ a(
          "video",
          {
            src: e,
            autoPlay: !0,
            muted: !0,
            loop: !0,
            playsInline: !0,
            className: "h-full w-full rounded-md"
          }
        ) : /* @__PURE__ */ a(
          "img",
          {
            src: e,
            alt: r,
            className: "h-full w-full rounded-md"
          }
        ) }),
        /* @__PURE__ */ u("div", { className: "flex flex-col gap-[2px] p-3", children: [
          /* @__PURE__ */ a(y, { className: "text-lg font-medium", children: r }),
          /* @__PURE__ */ a(y, { className: "line-clamp-2 text-base font-normal text-f1-foreground-secondary", children: t })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ a(U, { className: "p-3", children: /* @__PURE__ */ a(
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
const Re = he(
  null
), Be = ({ children: e, fullScreen: r = !0 }) => {
  const t = $(null), [o, s] = I(t.current);
  return ie(() => {
    s(t.current);
  }, []), /* @__PURE__ */ a(Re.Provider, { value: { element: o }, children: /* @__PURE__ */ a(
    "div",
    {
      ref: t,
      id: "factorial-one-layout",
      className: f({
        "flex h-screen w-screen flex-col bg-[#F5F6F8] dark:bg-[#0D1625]": r
      }),
      children: e
    }
  ) });
}, Ee = ({
  children: e
}) => /* @__PURE__ */ a(ne, { reducedMotion: "user", children: e }), qe = ({
  children: e,
  layout: r,
  link: t,
  privacyModeInitiallyEnabled: o,
  image: s,
  i18n: l,
  l10n: n
}) => /* @__PURE__ */ a(Ee, { children: /* @__PURE__ */ a(ee, { children: /* @__PURE__ */ a(ae, { ...n, children: /* @__PURE__ */ a(re, { ...l, children: /* @__PURE__ */ a(oe, { ...t, children: /* @__PURE__ */ a(Be, { ...r, children: /* @__PURE__ */ a(te, { children: /* @__PURE__ */ a(
  se,
  {
    initiallyEnabled: o,
    children: /* @__PURE__ */ a(le, { ...s, children: e })
  }
) }) }) }) }) }) }) });
export {
  Ve as AreaChart,
  Qe as Await,
  ke as BarChart,
  x as Button,
  De as CategoryBarChart,
  Ye as CopyButton,
  Ze as EmojiImage,
  qe as FactorialOneProvider,
  Ge as HomeLayout,
  Ue as Icon,
  Te as LineChart,
  _e as Link,
  je as PieChart,
  se as PrivacyModeProvider,
  ea as ProductCard,
  We as ProductWidget,
  Oe as ProgressBarChart,
  Xe as StandardLayout,
  ze as TwoColumnLayout,
  He as VerticalBarChart,
  aa as buildTranslations,
  ra as getEmojiLabel,
  oa as useEmojiConfetti,
  ta as usePrivacyMode,
  sa as useReducedMotion,
  la as useXRay
};
