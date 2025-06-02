import { C as m, L as A, c as ee, P as _, a as v, f as ae, b as re, A as le, B as se, d as oe, e as te, g as ne, V as ie, h as F, i as de, j as ce, M as D, I as ue, F as fe, D as me, k as he, l as pe, m as ve, n as O, S as ge, o as xe, p as N, U as be, q as Ce, r as Ne, s as M, t as ye, u as we, v as Pe, w as Le, x as $e, y as ke, z as Re, E as Be, G as Me, H as Se, X as Ie, J as Ee, K as _e, N as Fe, O as De } from "./imageHandler-qFHCo2bW.js";
import { Q as ka, $ as Ra, T as Ba, R as Ma, Y as Sa, a0 as Ia, a1 as Ea, W as _a, _ as Fa, Z as Da } from "./imageHandler-qFHCo2bW.js";
import { jsx as e, jsxs as n, Fragment as T } from "react/jsx-runtime";
import * as L from "react";
import Oe, { forwardRef as $, useRef as V, useImperativeHandle as Te, Children as Ve, useState as g, useEffect as j, createContext as je } from "react";
const ca = m(
  {
    name: "Link",
    type: "info"
  },
  A
);
var k = "Progress", R = 100, [ze, ua] = ee(k), [He, Xe] = ze(k), z = L.forwardRef(
  (a, r) => {
    const {
      __scopeProgress: s,
      value: l = null,
      max: o,
      getValueLabel: d = qe,
      ...t
    } = a;
    (o || o === 0) && !S(o) && console.error(Ge(`${o}`, "Progress"));
    const i = S(o) ? o : R;
    l !== null && !I(l, i) && console.error(We(`${l}`, "Progress"));
    const c = I(l, i) ? l : null, p = y(c) ? d(c, i) : void 0;
    return /* @__PURE__ */ e(He, { scope: s, value: c, max: i, children: /* @__PURE__ */ e(
      _.div,
      {
        "aria-valuemax": i,
        "aria-valuemin": 0,
        "aria-valuenow": y(c) ? c : void 0,
        "aria-valuetext": p,
        role: "progressbar",
        "data-state": q(c, i),
        "data-value": c ?? void 0,
        "data-max": i,
        ...t,
        ref: r
      }
    ) });
  }
);
z.displayName = k;
var H = "ProgressIndicator", X = L.forwardRef(
  (a, r) => {
    const { __scopeProgress: s, ...l } = a, o = Xe(H, s);
    return /* @__PURE__ */ e(
      _.div,
      {
        "data-state": q(o.value, o.max),
        "data-value": o.value ?? void 0,
        "data-max": o.max,
        ...l,
        ref: r
      }
    );
  }
);
X.displayName = H;
function qe(a, r) {
  return `${Math.round(a / r * 100)}%`;
}
function q(a, r) {
  return a == null ? "indeterminate" : a === r ? "complete" : "loading";
}
function y(a) {
  return typeof a == "number";
}
function S(a) {
  return y(a) && !isNaN(a) && a > 0;
}
function I(a, r) {
  return y(a) && !isNaN(a) && a <= r && a >= 0;
}
function Ge(a, r) {
  return `Invalid prop \`max\` of value \`${a}\` supplied to \`${r}\`. Only numbers greater than 0 are valid max values. Defaulting to \`${R}\`.`;
}
function We(a, r) {
  return `Invalid prop \`value\` of value \`${a}\` supplied to \`${r}\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or ${R} if no \`max\` prop is set)
  - \`null\` or \`undefined\` if the progress is indeterminate.

Defaulting to \`null\`.`;
}
var G = z, Je = X;
const W = L.forwardRef(({ className: a, value: r, ...s }, l) => /* @__PURE__ */ e(
  G,
  {
    ref: l,
    className: v(
      "relative h-2 w-full overflow-hidden rounded-full bg-f1-background-secondary",
      a
    ),
    ...s,
    children: /* @__PURE__ */ e(
      Je,
      {
        className: "h-full w-full flex-1 transition-all",
        style: {
          backgroundColor: s.color,
          transform: `translateX(-${100 - (r || 0)}%)`
        }
      }
    )
  }
));
W.displayName = G.displayName;
const Ke = ({ value: a, max: r = 100, label: s, color: l }, o) => {
  const d = l || re(0), t = a / r * 100;
  return /* @__PURE__ */ n("div", { className: "flex items-center space-x-2", "aria-live": "polite", children: [
    /* @__PURE__ */ e("div", { className: "flex-grow", children: /* @__PURE__ */ e(
      W,
      {
        color: d,
        value: t,
        className: "w-full",
        "aria-valuemin": 0,
        "aria-valuemax": r,
        "aria-valuenow": a,
        "aria-label": `${t.toFixed(1)}%`
      }
    ) }),
    s && /* @__PURE__ */ e("div", { className: "flex-shrink-0 text-sm font-medium", children: s })
  ] });
}, Qe = ae(Ke), fa = m(
  {
    name: "AreaChart",
    type: "info"
  },
  le
), ma = m(
  {
    name: "BarChart",
    type: "info"
  },
  se
), ha = m(
  {
    name: "CategoryBarChart",
    type: "info"
  },
  oe
), pa = m(
  {
    name: "LineChart",
    type: "info"
  },
  te
), va = m(
  {
    name: "PieChart",
    type: "info"
  },
  ne
), ga = m(
  {
    name: "VerticalBarChart",
    type: "info"
  },
  ie
), xa = m(
  {
    name: "ProgressBarChart",
    type: "info"
  },
  Qe
), Ue = {
  xs: 1,
  sm: 2,
  md: 2,
  lg: 2
}, Ye = $(function({ widgets: r, children: s }, l) {
  const o = V(null);
  Te(l, () => o.current);
  const d = Ve.toArray(r).filter((t) => !!t).map((t, i) => /* @__PURE__ */ e("div", { className: "h-full @5xl:h-auto [&>div]:h-full", children: t }, i));
  return /* @__PURE__ */ e(F, { layout: "home", children: /* @__PURE__ */ n("div", { ref: o, className: "@container", children: [
    /* @__PURE__ */ n("div", { className: "flex flex-col gap-6 px-5 pt-4 @md:pt-2 @5xl:hidden", children: [
      /* @__PURE__ */ e(de, { columns: Ue, showArrows: !1, children: d }),
      /* @__PURE__ */ e("main", { children: s })
    ] }),
    /* @__PURE__ */ n("div", { className: "hidden grid-cols-3 gap-5 px-6 pb-6 pt-2 @5xl:grid", children: [
      /* @__PURE__ */ e("div", { className: "col-span-3 flex flex-row gap-5 *:flex-1", children: d.slice(0, 3) }),
      /* @__PURE__ */ e("main", { className: "col-span-2", children: s }),
      /* @__PURE__ */ e("div", { className: "flex flex-1 flex-col gap-5", children: d.slice(3) })
    ] })
  ] }) });
}), Ze = $(
  function({ children: r, sideContent: s, mainColumnPosition: l = "left" }, o) {
    return /* @__PURE__ */ e("div", { ref: o, className: "h-full overflow-auto", children: /* @__PURE__ */ n(
      "div",
      {
        className: v(
          "flex h-full overflow-auto text-f1-foreground sm:flex-row",
          l === "right" ? "flex-col" : "flex-col-reverse"
        ),
        children: [
          l === "right" && /* @__PURE__ */ e(E, { children: s }),
          /* @__PURE__ */ e(
            "main",
            {
              className: v(
                "h-fit min-h-full border-0 px-6 py-5 sm:basis-3/4 sm:border-solid",
                l === "right" ? "sm:border-l sm:border-l-f1-border-secondary" : "sm:border-r sm:border-r-f1-border-secondary"
              ),
              children: r
            }
          ),
          l === "left" && /* @__PURE__ */ e(E, { children: s })
        ]
      }
    ) });
  }
), E = ({ children: a }) => /* @__PURE__ */ e("aside", { className: "py-5 pl-2 pr-4 sm:basis-1/4 sm:pb-6", children: a }), Ae = ce({
  base: "relative flex min-h-full w-full flex-col gap-4 place-self-center overflow-y-auto px-6 py-5",
  variants: {
    variant: {
      narrow: "max-w-screen-lg"
    }
  }
}), J = Oe.forwardRef(({ children: a, variant: r, className: s, ...l }, o) => /* @__PURE__ */ e(F, { layout: "standard", children: /* @__PURE__ */ e(
  "section",
  {
    ref: o,
    className: v("relative flex-1 overflow-auto", s),
    ...l,
    children: /* @__PURE__ */ e("div", { className: v(Ae({ variant: r })), children: a })
  }
) }));
J.displayName = "StandardLayout";
const ba = m(
  {
    name: "StandardLayout",
    type: "layout"
  },
  J
), Ca = m(
  {
    name: "TwoColumnLayout",
    type: "layout"
  },
  Ze
), Na = m(
  {
    name: "HomeLayout",
    type: "layout"
  },
  Ye
), ea = ({ benefits: a }) => /* @__PURE__ */ e("div", { className: "flex flex-col gap-2", children: a.map((r, s) => /* @__PURE__ */ e(aa, { text: r }, s)) }), aa = ({ text: a }) => /* @__PURE__ */ n("div", { className: "flex flex-row items-start gap-2", children: [
  /* @__PURE__ */ e(ue, { icon: fe, size: "md", className: "text-f1-icon-positive" }),
  /* @__PURE__ */ e("span", { children: a })
] }), K = $(
  ({ title: a, image: r, benefits: s, actions: l, withShadow: o = !0, icon: d, moduleName: t }, i) => /* @__PURE__ */ n(
    "div",
    {
      ref: i,
      className: v(
        "bg-white flex flex-row rounded-xl border border-f1-border-secondary",
        o && "shadow-md"
      ),
      children: [
        /* @__PURE__ */ e("div", { className: "aspect-auto flex-shrink-0 overflow-hidden rounded-xl py-1 pl-1", children: /* @__PURE__ */ e(
          "img",
          {
            src: r,
            alt: "",
            className: "h-full w-full rounded-lg object-cover"
          }
        ) }),
        /* @__PURE__ */ n("div", { className: "flex flex-col justify-center gap-8 px-8 py-5", children: [
          /* @__PURE__ */ n("div", { className: "flex flex-col gap-5", children: [
            /* @__PURE__ */ n("div", { className: "flex flex-col gap-2", children: [
              /* @__PURE__ */ n("div", { className: "flex flex-row items-center gap-2", children: [
                d && /* @__PURE__ */ e(D, { icon: d }),
                t && /* @__PURE__ */ e("p", { className: "text-base font-medium text-f1-foreground", children: t })
              ] }),
              /* @__PURE__ */ e("h2", { className: "font-bold text-xl text-f1-foreground", children: a })
            ] }),
            /* @__PURE__ */ e(ea, { benefits: s })
          ] }),
          l && /* @__PURE__ */ e("div", { className: "flex gap-3", children: l })
        ] })
      ]
    }
  )
);
K.displayName = "ProductBlankslate";
function ra({
  isOpen: a,
  onClose: r,
  title: s,
  children: l,
  icon: o
}) {
  const [d, t] = g(a);
  return j(() => {
    t(a);
  }, [a]), /* @__PURE__ */ e(me, { open: d, onOpenChange: (c) => {
    t(c), c || r();
  }, modal: !0, children: /* @__PURE__ */ n(he, { className: "max-h-[620px] w-[760px] overflow-y-auto overflow-x-hidden bg-f1-background", children: [
    /* @__PURE__ */ n("div", { className: "flex flex-row items-center justify-between px-4 py-4", children: [
      /* @__PURE__ */ n(pe, { className: "flex flex-row items-center gap-2 text-lg font-semibold text-f1-foreground", children: [
        o && /* @__PURE__ */ e(D, { icon: o, size: "lg" }),
        s
      ] }),
      /* @__PURE__ */ e(
        ve,
        {
          variant: "outline",
          icon: O,
          onClick: r,
          label: "Close modal",
          hideLabel: !0
        }
      )
    ] }),
    /* @__PURE__ */ n(ge, { className: "[*[data-state=visible]_div]:bg-f1-background flex max-h-[512px] flex-col", children: [
      l,
      /* @__PURE__ */ e(
        xe,
        {
          orientation: "vertical",
          className: "[&_div]:bg-f1-background"
        }
      )
    ] })
  ] }) });
}
function ya({
  isOpen: a,
  onClose: r,
  title: s,
  image: l,
  benefits: o,
  errorMessage: d,
  successMessage: t,
  loadingState: i,
  nextSteps: c,
  closeLabel: p,
  primaryAction: f,
  modalTitle: x,
  modalIcon: u,
  secondaryAction: h
}) {
  const [w, b] = g(a), [P, C] = g(null), [Q, B] = g(!1), U = async () => {
    if (f != null && f.onClick) {
      B(!0);
      try {
        await f.onClick(), b(!1), C("success");
      } catch {
        C("error");
      } finally {
        B(!1);
      }
    }
  }, Y = () => {
    b(!1), r == null || r();
  }, Z = Q;
  return /* @__PURE__ */ n(T, { children: [
    /* @__PURE__ */ e(
      ra,
      {
        isOpen: w,
        onClose: Y,
        title: x,
        icon: u,
        children: /* @__PURE__ */ e("div", { className: "pb-4 pl-4", children: /* @__PURE__ */ e(
          K,
          {
            title: s,
            image: l,
            benefits: o,
            withShadow: !1,
            actions: /* @__PURE__ */ n("div", { className: "flex gap-3", children: [
              f && /* @__PURE__ */ e(
                N,
                {
                  variant: f.variant,
                  label: Z ? i.label : f.label,
                  icon: f.icon || void 0,
                  onClick: U,
                  loading: f.loading,
                  size: f.size
                }
              ),
              h && /* @__PURE__ */ e(
                N,
                {
                  onClick: h.onClick,
                  label: h.label,
                  variant: h.variant,
                  size: h.size,
                  icon: h.icon
                }
              )
            ] })
          }
        ) })
      }
    ),
    P && /* @__PURE__ */ e(
      be,
      {
        open: !0,
        onClose: () => {
          C(null);
        },
        success: P === "success",
        errorMessage: d,
        successMessage: t,
        nextSteps: c,
        closeLabel: p
      }
    )
  ] });
}
function la({
  mediaUrl: a,
  title: r,
  description: s,
  onClose: l,
  dismissible: o,
  width: d,
  trackVisibility: t,
  actions: i
}) {
  const [c, p] = g(!1), f = () => {
    p(!0), l && l();
  };
  j(() => {
    t && t(!c);
  }, [t, c]);
  const x = a == null ? void 0 : a.includes(".mp4");
  return /* @__PURE__ */ e(T, { children: c ? null : /* @__PURE__ */ n(Ce, { style: { width: d }, className: "relative bg-f1-background p-1", children: [
    /* @__PURE__ */ n(Ne, { children: [
      o && /* @__PURE__ */ e("div", { className: "absolute right-2 top-2 z-10", children: /* @__PURE__ */ e(
        N,
        {
          variant: "ghost",
          icon: O,
          size: "sm",
          hideLabel: !0,
          onClick: f,
          label: "Close"
        }
      ) }),
      /* @__PURE__ */ n("div", { children: [
        /* @__PURE__ */ e("div", { children: a && (x ? /* @__PURE__ */ e(
          "video",
          {
            src: a,
            autoPlay: !0,
            muted: !0,
            loop: !0,
            playsInline: !0,
            className: "h-full w-full rounded-md"
          }
        ) : /* @__PURE__ */ e(
          "img",
          {
            src: a,
            alt: r,
            className: "h-full w-full rounded-md"
          }
        )) }),
        /* @__PURE__ */ n("div", { className: "flex flex-col gap-[2px] p-3", children: [
          /* @__PURE__ */ e(M, { className: "text-lg font-medium", children: r }),
          /* @__PURE__ */ e(M, { className: "line-clamp-2 text-base font-normal text-f1-foreground-secondary", children: s })
        ] })
      ] })
    ] }),
    i && /* @__PURE__ */ e(ye, { className: "p-3", children: i.map(
      (u) => u.type === "upsell" ? /* @__PURE__ */ e(
        we,
        {
          label: u.label,
          onRequest: u.onClick,
          errorMessage: u.errorMessage,
          successMessage: u.successMessage,
          loadingState: u.loadingState,
          nextSteps: u.nextSteps,
          closeLabel: u.closeLabel,
          showConfirmation: u.showConfirmation
        },
        u.label
      ) : /* @__PURE__ */ e(
        N,
        {
          label: u.label,
          onClick: u.onClick,
          variant: u.variant
        },
        u.label
      )
    ) })
  ] }) });
}
function wa({
  isOpen: a,
  setIsOpen: r,
  label: s,
  variant: l = "promote",
  size: o = "md",
  showIcon: d = !0,
  side: t = "right",
  align: i = "center",
  icon: c = $e,
  mediaUrl: p,
  title: f,
  description: x,
  width: u = "300px",
  trackVisibility: h,
  actions: w,
  onClick: b
}) {
  return /* @__PURE__ */ n(Pe, { open: a, onOpenChange: (C) => {
    r(C), b && b();
  }, children: [
    /* @__PURE__ */ e(Le, { asChild: !0, children: /* @__PURE__ */ e(
      N,
      {
        variant: l,
        label: s,
        size: o,
        icon: d ? c : void 0,
        onClick: () => r(a)
      }
    ) }),
    /* @__PURE__ */ e(
      ke,
      {
        side: t,
        align: i,
        className: "w-fit border-none bg-transparent p-2 shadow-none",
        children: /* @__PURE__ */ e(
          la,
          {
            mediaUrl: p,
            title: f,
            description: x,
            onClose: () => r(!1),
            dismissible: !1,
            width: u,
            trackVisibility: h,
            actions: w
          }
        )
      }
    )
  ] });
}
const sa = je(
  null
), oa = ({ children: a, fullScreen: r = !0 }) => {
  const s = V(null), [l, o] = g(s.current);
  return De(() => {
    o(s.current);
  }, []), /* @__PURE__ */ e(sa.Provider, { value: { element: l }, children: /* @__PURE__ */ e(
    "div",
    {
      ref: s,
      id: "factorial-one-layout",
      className: v({
        "flex h-screen w-screen flex-col bg-[#F5F6F8] dark:bg-[#0D1625]": r
      }),
      children: a
    }
  ) });
}, ta = ({
  children: a
}) => /* @__PURE__ */ e(Fe, { reducedMotion: "user", children: a }), Pa = ({
  children: a,
  layout: r,
  link: s,
  privacyModeInitiallyEnabled: l,
  image: o,
  i18n: d,
  l10n: t,
  isDev: i = !1
}) => /* @__PURE__ */ e(ta, { children: /* @__PURE__ */ e(Re, { isDev: i, children: /* @__PURE__ */ e(Be, { ...t, children: /* @__PURE__ */ e(Me, { ...d, children: /* @__PURE__ */ e(Se, { ...s, children: /* @__PURE__ */ e(oa, { ...r, children: /* @__PURE__ */ e(Ie, { children: /* @__PURE__ */ e(
  Ee,
  {
    initiallyEnabled: l,
    children: /* @__PURE__ */ e(_e, { ...o, children: a })
  }
) }) }) }) }) }) }) });
export {
  fa as AreaChart,
  ma as BarChart,
  N as Button,
  ha as CategoryBarChart,
  ka as CopyButton,
  Ra as EmojiImage,
  Pa as FactorialOneProvider,
  Na as HomeLayout,
  Ba as Icon,
  pa as LineChart,
  ca as Link,
  va as PieChart,
  Ee as PrivacyModeProvider,
  K as ProductBlankslate,
  Ma as ProductCard,
  ya as ProductModal,
  la as ProductWidget,
  xa as ProgressBarChart,
  ba as StandardLayout,
  Ca as TwoColumnLayout,
  be as UpsellRequestResponseDialog,
  we as UpsellingButton,
  wa as UpsellingPopover,
  ga as VerticalBarChart,
  Sa as buildTranslations,
  Ia as getEmojiLabel,
  Ea as useEmojiConfetti,
  _a as usePrivacyMode,
  Fa as useReducedMotion,
  Da as useXRay
};
