import { C as m, L as A, c as ee, P as E, a as h, f as ae, b as re, A as le, B as se, d as oe, e as te, g as ne, V as ie, h as _, i as de, j as ce, M as D, I as ue, F as fe, D as me, k as he, l as ve, m as pe, n as F, S as ge, o as xe, p as x, U as be, q as Ne, r as Ce, s as B, t as ye, u as we, v as Pe, w as Le, x as ke, y as Re, X as $e, z as Be, E as Ie, G as Me, H as Se } from "./imageHandler-D6zImHjb.js";
import { J as ya, W as wa, N as Pa, K as La, Q as ka, Y as Ra, Z as $a, O as Ba, T as Ia, R as Ma } from "./imageHandler-D6zImHjb.js";
import { jsx as e, jsxs as n, Fragment as O } from "react/jsx-runtime";
import * as y from "react";
import Ee, { forwardRef as w, useRef as T, useImperativeHandle as _e, Children as De, useState as p, useEffect as V, createContext as Fe } from "react";
const oa = m(
  {
    name: "Link",
    type: "info"
  },
  A
);
var P = "Progress", L = 100, [Oe, ta] = ee(P), [Te, Ve] = Oe(P), j = y.forwardRef(
  (a, r) => {
    const {
      __scopeProgress: s,
      value: l = null,
      max: o,
      getValueLabel: d = je,
      ...t
    } = a;
    (o || o === 0) && !I(o) && console.error(ze(`${o}`, "Progress"));
    const i = I(o) ? o : L;
    l !== null && !M(l, i) && console.error(He(`${l}`, "Progress"));
    const c = M(l, i) ? l : null, g = b(c) ? d(c, i) : void 0;
    return /* @__PURE__ */ e(Te, { scope: s, value: c, max: i, children: /* @__PURE__ */ e(
      E.div,
      {
        "aria-valuemax": i,
        "aria-valuemin": 0,
        "aria-valuenow": b(c) ? c : void 0,
        "aria-valuetext": g,
        role: "progressbar",
        "data-state": X(c, i),
        "data-value": c ?? void 0,
        "data-max": i,
        ...t,
        ref: r
      }
    ) });
  }
);
j.displayName = P;
var z = "ProgressIndicator", H = y.forwardRef(
  (a, r) => {
    const { __scopeProgress: s, ...l } = a, o = Ve(z, s);
    return /* @__PURE__ */ e(
      E.div,
      {
        "data-state": X(o.value, o.max),
        "data-value": o.value ?? void 0,
        "data-max": o.max,
        ...l,
        ref: r
      }
    );
  }
);
H.displayName = z;
function je(a, r) {
  return `${Math.round(a / r * 100)}%`;
}
function X(a, r) {
  return a == null ? "indeterminate" : a === r ? "complete" : "loading";
}
function b(a) {
  return typeof a == "number";
}
function I(a) {
  return b(a) && !isNaN(a) && a > 0;
}
function M(a, r) {
  return b(a) && !isNaN(a) && a <= r && a >= 0;
}
function ze(a, r) {
  return `Invalid prop \`max\` of value \`${a}\` supplied to \`${r}\`. Only numbers greater than 0 are valid max values. Defaulting to \`${L}\`.`;
}
function He(a, r) {
  return `Invalid prop \`value\` of value \`${a}\` supplied to \`${r}\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or ${L} if no \`max\` prop is set)
  - \`null\` or \`undefined\` if the progress is indeterminate.

Defaulting to \`null\`.`;
}
var q = j, Xe = H;
const G = y.forwardRef(({ className: a, value: r, ...s }, l) => /* @__PURE__ */ e(
  q,
  {
    ref: l,
    className: h(
      "relative h-2 w-full overflow-hidden rounded-full bg-f1-background-secondary",
      a
    ),
    ...s,
    children: /* @__PURE__ */ e(
      Xe,
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
G.displayName = q.displayName;
const qe = ({ value: a, max: r = 100, label: s, color: l }, o) => {
  const d = l || re(0), t = a / r * 100;
  return /* @__PURE__ */ n("div", { className: "flex items-center space-x-2", "aria-live": "polite", children: [
    /* @__PURE__ */ e("div", { className: "flex-grow", children: /* @__PURE__ */ e(
      G,
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
}, Ge = ae(qe), na = m(
  {
    name: "AreaChart",
    type: "info"
  },
  le
), ia = m(
  {
    name: "BarChart",
    type: "info"
  },
  se
), da = m(
  {
    name: "CategoryBarChart",
    type: "info"
  },
  oe
), ca = m(
  {
    name: "LineChart",
    type: "info"
  },
  te
), ua = m(
  {
    name: "PieChart",
    type: "info"
  },
  ne
), fa = m(
  {
    name: "VerticalBarChart",
    type: "info"
  },
  ie
), ma = m(
  {
    name: "ProgressBarChart",
    type: "info"
  },
  Ge
), We = {
  xs: 1,
  sm: 2,
  md: 2,
  lg: 2
}, Je = w(function({ widgets: r, children: s }, l) {
  const o = T(null);
  _e(l, () => o.current);
  const d = De.toArray(r).filter((t) => !!t).map((t, i) => /* @__PURE__ */ e("div", { className: "h-full @5xl:h-auto [&>div]:h-full", children: t }, i));
  return /* @__PURE__ */ e(_, { layout: "home", children: /* @__PURE__ */ n("div", { ref: o, className: "@container", children: [
    /* @__PURE__ */ n("div", { className: "flex flex-col gap-6 px-5 pt-4 @md:pt-2 @5xl:hidden", children: [
      /* @__PURE__ */ e(de, { columns: We, showArrows: !1, children: d }),
      /* @__PURE__ */ e("main", { children: s })
    ] }),
    /* @__PURE__ */ n("div", { className: "hidden grid-cols-3 gap-5 px-6 pb-6 pt-2 @5xl:grid", children: [
      /* @__PURE__ */ e("div", { className: "col-span-3 flex flex-row gap-5 *:flex-1", children: d.slice(0, 3) }),
      /* @__PURE__ */ e("main", { className: "col-span-2", children: s }),
      /* @__PURE__ */ e("div", { className: "flex flex-1 flex-col gap-5", children: d.slice(3) })
    ] })
  ] }) });
}), Ke = w(
  function({ children: r, sideContent: s, mainColumnPosition: l = "left" }, o) {
    return /* @__PURE__ */ e("div", { ref: o, className: "h-full overflow-auto", children: /* @__PURE__ */ n(
      "div",
      {
        className: h(
          "flex h-full overflow-auto text-f1-foreground sm:flex-row",
          l === "right" ? "flex-col" : "flex-col-reverse"
        ),
        children: [
          l === "right" && /* @__PURE__ */ e(S, { children: s }),
          /* @__PURE__ */ e(
            "main",
            {
              className: h(
                "h-fit min-h-full border-0 px-6 py-5 sm:basis-3/4 sm:border-solid",
                l === "right" ? "sm:border-l sm:border-l-f1-border-secondary" : "sm:border-r sm:border-r-f1-border-secondary"
              ),
              children: r
            }
          ),
          l === "left" && /* @__PURE__ */ e(S, { children: s })
        ]
      }
    ) });
  }
), S = ({ children: a }) => /* @__PURE__ */ e("aside", { className: "py-5 pl-2 pr-4 sm:basis-1/4 sm:pb-6", children: a }), Qe = ce({
  base: "relative flex min-h-full w-full flex-col gap-4 place-self-center overflow-y-auto px-6 py-5",
  variants: {
    variant: {
      narrow: "max-w-screen-lg"
    }
  }
}), W = Ee.forwardRef(({ children: a, variant: r, className: s, ...l }, o) => /* @__PURE__ */ e(_, { layout: "standard", children: /* @__PURE__ */ e(
  "section",
  {
    ref: o,
    className: h("relative flex-1 overflow-auto", s),
    ...l,
    children: /* @__PURE__ */ e("div", { className: h(Qe({ variant: r })), children: a })
  }
) }));
W.displayName = "StandardLayout";
const ha = m(
  {
    name: "StandardLayout",
    type: "layout"
  },
  W
), va = m(
  {
    name: "TwoColumnLayout",
    type: "layout"
  },
  Ke
), pa = m(
  {
    name: "HomeLayout",
    type: "layout"
  },
  Je
), Ye = ({ benefits: a }) => /* @__PURE__ */ e("div", { className: "flex flex-col gap-2", children: a.map((r, s) => /* @__PURE__ */ e(Ze, { text: r }, s)) }), Ze = ({ text: a }) => /* @__PURE__ */ n("div", { className: "flex flex-row items-start gap-2", children: [
  /* @__PURE__ */ e(ue, { icon: fe, size: "md", className: "text-f1-icon-positive" }),
  /* @__PURE__ */ e("span", { children: a })
] }), J = w(
  ({ title: a, image: r, benefits: s, actions: l, withShadow: o = !0, icon: d, moduleName: t }, i) => /* @__PURE__ */ n(
    "div",
    {
      ref: i,
      className: h(
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
            /* @__PURE__ */ e(Ye, { benefits: s })
          ] }),
          l && /* @__PURE__ */ e("div", { className: "flex gap-3", children: l })
        ] })
      ]
    }
  )
);
J.displayName = "ProductBlankslate";
function Ue({
  isOpen: a,
  onClose: r,
  title: s,
  children: l,
  icon: o
}) {
  const [d, t] = p(a);
  return V(() => {
    t(a);
  }, [a]), /* @__PURE__ */ e(me, { open: d, onOpenChange: (c) => {
    t(c), c || r();
  }, modal: !0, children: /* @__PURE__ */ n(he, { className: "max-h-[620px] w-[760px] overflow-y-auto overflow-x-hidden bg-f1-background", children: [
    /* @__PURE__ */ n("div", { className: "flex flex-row items-center justify-between px-4 py-4", children: [
      /* @__PURE__ */ n(ve, { className: "flex flex-row items-center gap-2 text-lg font-semibold text-f1-foreground", children: [
        o && /* @__PURE__ */ e(D, { icon: o, size: "lg" }),
        s
      ] }),
      /* @__PURE__ */ e(
        pe,
        {
          variant: "outline",
          icon: F,
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
function ga({
  isOpen: a,
  onClose: r,
  title: s,
  image: l,
  benefits: o,
  errorMessage: d,
  successMessage: t,
  loadingState: i,
  nextSteps: c,
  closeLabel: g,
  primaryAction: f,
  modalTitle: N,
  modalIcon: u,
  secondaryAction: v
}) {
  const [K, k] = p(a), [R, C] = p(null), [Q, $] = p(!1), Y = async () => {
    if (f != null && f.onClick) {
      $(!0);
      try {
        await f.onClick(), k(!1), C("success");
      } catch {
        C("error");
      } finally {
        $(!1);
      }
    }
  }, Z = () => {
    k(!1), r == null || r();
  }, U = Q;
  return /* @__PURE__ */ n(O, { children: [
    /* @__PURE__ */ e(
      Ue,
      {
        isOpen: K,
        onClose: Z,
        title: N,
        icon: u,
        children: /* @__PURE__ */ e("div", { className: "pb-4 pl-4", children: /* @__PURE__ */ e(
          J,
          {
            title: s,
            image: l,
            benefits: o,
            withShadow: !1,
            actions: /* @__PURE__ */ n("div", { className: "flex gap-3", children: [
              f && /* @__PURE__ */ e(
                x,
                {
                  variant: f.variant,
                  label: U ? i.label : f.label,
                  icon: f.icon || void 0,
                  onClick: Y,
                  loading: f.loading,
                  size: f.size
                }
              ),
              v && /* @__PURE__ */ e(
                x,
                {
                  onClick: v.onClick,
                  label: v.label,
                  variant: v.variant,
                  size: v.size,
                  icon: v.icon
                }
              )
            ] })
          }
        ) })
      }
    ),
    R && /* @__PURE__ */ e(
      be,
      {
        open: !0,
        onClose: () => {
          C(null);
        },
        success: R === "success",
        errorMessage: d,
        successMessage: t,
        nextSteps: c,
        closeLabel: g
      }
    )
  ] });
}
function xa({
  mediaUrl: a,
  title: r,
  description: s,
  onClose: l,
  dismissible: o,
  width: d,
  trackVisibility: t,
  actions: i
}) {
  const [c, g] = p(!1), f = () => {
    g(!0), l && l();
  };
  V(() => {
    t && t(!c);
  }, [t, c]);
  const N = a == null ? void 0 : a.includes(".mp4");
  return /* @__PURE__ */ e(O, { children: c ? null : /* @__PURE__ */ n(Ne, { style: { width: d }, className: "relative bg-f1-background p-1", children: [
    /* @__PURE__ */ n(Ce, { children: [
      o && /* @__PURE__ */ e("div", { className: "absolute right-2 top-2 z-10", children: /* @__PURE__ */ e(
        x,
        {
          variant: "ghost",
          icon: F,
          size: "sm",
          hideLabel: !0,
          onClick: f,
          label: "Close"
        }
      ) }),
      /* @__PURE__ */ n("div", { children: [
        /* @__PURE__ */ e("div", { children: a && (N ? /* @__PURE__ */ e(
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
          /* @__PURE__ */ e(B, { className: "text-lg font-medium", children: r }),
          /* @__PURE__ */ e(B, { className: "line-clamp-2 text-base font-normal text-f1-foreground-secondary", children: s })
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
        x,
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
const Ae = Fe(
  null
), ea = ({ children: a, fullScreen: r = !0 }) => {
  const s = T(null), [l, o] = p(s.current);
  return Se(() => {
    o(s.current);
  }, []), /* @__PURE__ */ e(Ae.Provider, { value: { element: l }, children: /* @__PURE__ */ e(
    "div",
    {
      ref: s,
      id: "factorial-one-layout",
      className: h({
        "flex h-screen w-screen flex-col bg-[#F5F6F8] dark:bg-[#0D1625]": r
      }),
      children: a
    }
  ) });
}, aa = ({
  children: a
}) => /* @__PURE__ */ e(Me, { reducedMotion: "user", children: a }), ba = ({
  children: a,
  layout: r,
  link: s,
  privacyModeInitiallyEnabled: l,
  image: o,
  i18n: d,
  l10n: t,
  isDev: i = !1
}) => /* @__PURE__ */ e(aa, { children: /* @__PURE__ */ e(Pe, { isDev: i, children: /* @__PURE__ */ e(Le, { ...t, children: /* @__PURE__ */ e(ke, { ...d, children: /* @__PURE__ */ e(Re, { ...s, children: /* @__PURE__ */ e(ea, { ...r, children: /* @__PURE__ */ e($e, { children: /* @__PURE__ */ e(
  Be,
  {
    initiallyEnabled: l,
    children: /* @__PURE__ */ e(Ie, { ...o, children: a })
  }
) }) }) }) }) }) }) });
export {
  na as AreaChart,
  ia as BarChart,
  x as Button,
  da as CategoryBarChart,
  ya as CopyButton,
  wa as EmojiImage,
  ba as FactorialOneProvider,
  pa as HomeLayout,
  Pa as Icon,
  ca as LineChart,
  oa as Link,
  ua as PieChart,
  Be as PrivacyModeProvider,
  J as ProductBlankslate,
  La as ProductCard,
  ga as ProductModal,
  xa as ProductWidget,
  ma as ProgressBarChart,
  ha as StandardLayout,
  va as TwoColumnLayout,
  be as UpsellRequestResponseDialog,
  we as UpsellingButton,
  fa as VerticalBarChart,
  ka as buildTranslations,
  Ra as getEmojiLabel,
  $a as useEmojiConfetti,
  Ba as usePrivacyMode,
  Ia as useReducedMotion,
  Ma as useXRay
};
