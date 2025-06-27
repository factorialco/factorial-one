import { C as h, L as ee, c as ae, P as F, a as x, f as le, b as se, A as re, B as oe, d as te, e as ne, g as ie, V as de, h as j, i as ce, j as ue, M as O, I as fe, F as he, D as me, k as ve, l as pe, m as ge, n as k, S as xe, o as be, p, U as Ce, q as Ne, r as we, s as E, t as Pe, u as T, v as ye, w as Le, x as ke, y as Me, z as Re, E as Se, G as $e, H as Be, X as Ie, J as Ee, K as _e, N as De, O as ze } from "./imageHandler-D1me0yiz.js";
import { W as Ra, Q as Sa, a1 as $a, T as Ba, R as Ia, _ as Ea, Y as _a, a2 as Da, a3 as za, Z as Fa, a0 as ja, $ as Oa } from "./imageHandler-D1me0yiz.js";
import { jsx as e, jsxs as n, Fragment as V } from "react/jsx-runtime";
import * as M from "react";
import Fe, { forwardRef as R, useRef as H, useImperativeHandle as je, Children as Oe, useState as g, useEffect as X, createContext as Te } from "react";
const ua = h(
  {
    name: "Link",
    type: "info"
  },
  ee
);
var S = "Progress", $ = 100, [Ve, fa] = ae(S), [He, Xe] = Ve(S), q = M.forwardRef(
  (a, s) => {
    const {
      __scopeProgress: r,
      value: l = null,
      max: o,
      getValueLabel: i = qe,
      ...t
    } = a;
    (o || o === 0) && !_(o) && console.error(Ge(`${o}`, "Progress"));
    const d = _(o) ? o : $;
    l !== null && !D(l, d) && console.error(We(`${l}`, "Progress"));
    const c = D(l, d) ? l : null, m = P(c) ? i(c, d) : void 0;
    return /* @__PURE__ */ e(He, { scope: r, value: c, max: d, children: /* @__PURE__ */ e(
      F.div,
      {
        "aria-valuemax": d,
        "aria-valuemin": 0,
        "aria-valuenow": P(c) ? c : void 0,
        "aria-valuetext": m,
        role: "progressbar",
        "data-state": J(c, d),
        "data-value": c ?? void 0,
        "data-max": d,
        ...t,
        ref: s
      }
    ) });
  }
);
q.displayName = S;
var G = "ProgressIndicator", W = M.forwardRef(
  (a, s) => {
    const { __scopeProgress: r, ...l } = a, o = Xe(G, r);
    return /* @__PURE__ */ e(
      F.div,
      {
        "data-state": J(o.value, o.max),
        "data-value": o.value ?? void 0,
        "data-max": o.max,
        ...l,
        ref: s
      }
    );
  }
);
W.displayName = G;
function qe(a, s) {
  return `${Math.round(a / s * 100)}%`;
}
function J(a, s) {
  return a == null ? "indeterminate" : a === s ? "complete" : "loading";
}
function P(a) {
  return typeof a == "number";
}
function _(a) {
  return P(a) && !isNaN(a) && a > 0;
}
function D(a, s) {
  return P(a) && !isNaN(a) && a <= s && a >= 0;
}
function Ge(a, s) {
  return `Invalid prop \`max\` of value \`${a}\` supplied to \`${s}\`. Only numbers greater than 0 are valid max values. Defaulting to \`${$}\`.`;
}
function We(a, s) {
  return `Invalid prop \`value\` of value \`${a}\` supplied to \`${s}\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or ${$} if no \`max\` prop is set)
  - \`null\` or \`undefined\` if the progress is indeterminate.

Defaulting to \`null\`.`;
}
var K = q, Je = W;
const Q = M.forwardRef(({ className: a, value: s, ...r }, l) => /* @__PURE__ */ e(
  K,
  {
    ref: l,
    className: x(
      "relative h-2 w-full overflow-hidden rounded-full bg-f1-background-secondary",
      a
    ),
    ...r,
    children: /* @__PURE__ */ e(
      Je,
      {
        className: "h-full w-full flex-1 transition-all",
        style: {
          backgroundColor: r.color,
          transform: `translateX(-${100 - (s || 0)}%)`
        }
      }
    )
  }
));
Q.displayName = K.displayName;
const Ke = ({ value: a, max: s = 100, label: r, color: l }, o) => {
  const i = l || se(0), t = a / s * 100;
  return /* @__PURE__ */ n("div", { className: "flex items-center space-x-2", "aria-live": "polite", children: [
    /* @__PURE__ */ e("div", { className: "flex-grow", children: /* @__PURE__ */ e(
      Q,
      {
        color: i,
        value: t,
        className: "w-full",
        "aria-valuemin": 0,
        "aria-valuemax": s,
        "aria-valuenow": a,
        "aria-label": `${t.toFixed(1)}%`
      }
    ) }),
    r && /* @__PURE__ */ e("div", { className: "flex-shrink-0 text-sm font-medium", children: r })
  ] });
}, Qe = le(Ke), ha = h(
  {
    name: "AreaChart",
    type: "info"
  },
  re
), ma = h(
  {
    name: "BarChart",
    type: "info"
  },
  oe
), va = h(
  {
    name: "CategoryBarChart",
    type: "info"
  },
  te
), pa = h(
  {
    name: "LineChart",
    type: "info"
  },
  ne
), ga = h(
  {
    name: "PieChart",
    type: "info"
  },
  ie
), xa = h(
  {
    name: "VerticalBarChart",
    type: "info"
  },
  de
), ba = h(
  {
    name: "ProgressBarChart",
    type: "info"
  },
  Qe
), Ye = {
  xs: 1,
  sm: 2,
  md: 2,
  lg: 2
}, Ze = R(function({ widgets: s, children: r }, l) {
  const o = H(null);
  je(l, () => o.current);
  const i = Oe.toArray(s).filter((t) => !!t).map((t, d) => /* @__PURE__ */ e("div", { className: "h-full @5xl:h-auto [&>div]:h-full", children: t }, d));
  return /* @__PURE__ */ e(j, { layout: "home", children: /* @__PURE__ */ n("div", { ref: o, className: "@container", children: [
    /* @__PURE__ */ n("div", { className: "flex flex-col gap-6 px-5 pt-4 @md:pt-2 @5xl:hidden", children: [
      /* @__PURE__ */ e(ce, { columns: Ye, showArrows: !1, children: i }),
      /* @__PURE__ */ e("main", { children: r })
    ] }),
    /* @__PURE__ */ n("div", { className: "hidden grid-cols-3 gap-5 px-6 pb-6 pt-2 @5xl:grid", children: [
      /* @__PURE__ */ e("div", { className: "col-span-3 flex flex-row gap-5 *:flex-1", children: i.slice(0, 3) }),
      /* @__PURE__ */ e("main", { className: "col-span-2", children: r }),
      /* @__PURE__ */ e("div", { className: "flex flex-1 flex-col gap-5", children: i.slice(3) })
    ] })
  ] }) });
}), Ue = R(
  function({ children: s, sideContent: r, mainColumnPosition: l = "left" }, o) {
    return /* @__PURE__ */ e("div", { ref: o, className: "h-full overflow-auto", children: /* @__PURE__ */ n(
      "div",
      {
        className: x(
          "flex h-full overflow-auto text-f1-foreground sm:flex-row",
          l === "right" ? "flex-col" : "flex-col-reverse"
        ),
        children: [
          l === "right" && /* @__PURE__ */ e(z, { children: r }),
          /* @__PURE__ */ e(
            "main",
            {
              className: x(
                "h-fit min-h-full border-0 px-6 py-5 sm:basis-3/4 sm:border-solid",
                l === "right" ? "sm:border-l sm:border-l-f1-border-secondary" : "sm:border-r sm:border-r-f1-border-secondary"
              ),
              children: s
            }
          ),
          l === "left" && /* @__PURE__ */ e(z, { children: r })
        ]
      }
    ) });
  }
), z = ({ children: a }) => /* @__PURE__ */ e("aside", { className: "py-5 pl-2 pr-4 sm:basis-1/4 sm:pb-6", children: a }), Ae = ue({
  base: "relative flex min-h-full w-full flex-col gap-4 place-self-center overflow-y-auto px-6 py-5",
  variants: {
    variant: {
      narrow: "max-w-screen-lg"
    }
  }
}), Y = Fe.forwardRef(({ children: a, variant: s, className: r, ...l }, o) => /* @__PURE__ */ e(j, { layout: "standard", children: /* @__PURE__ */ e(
  "section",
  {
    ref: o,
    className: x("relative flex-1 overflow-auto", r),
    ...l,
    children: /* @__PURE__ */ e("div", { className: x(Ae({ variant: s })), children: a })
  }
) }));
Y.displayName = "StandardLayout";
const Ca = h(
  {
    name: "StandardLayout",
    type: "layout"
  },
  Y
), Na = h(
  {
    name: "TwoColumnLayout",
    type: "layout"
  },
  Ue
), wa = h(
  {
    name: "HomeLayout",
    type: "layout"
  },
  Ze
), ea = ({ benefits: a }) => /* @__PURE__ */ e("div", { className: "flex flex-col gap-2", children: a.map((s, r) => /* @__PURE__ */ e(aa, { text: s }, r)) }), aa = ({ text: a }) => /* @__PURE__ */ n("div", { className: "flex flex-row items-start gap-2", children: [
  /* @__PURE__ */ e(fe, { icon: he, size: "md", className: "text-f1-icon-positive" }),
  /* @__PURE__ */ e("span", { children: a })
] }), Z = R(
  ({ title: a, image: s, benefits: r, actions: l, withShadow: o = !0, icon: i, moduleName: t }, d) => /* @__PURE__ */ n(
    "div",
    {
      ref: d,
      className: x(
        "bg-white flex flex-row rounded-xl border border-f1-border-secondary",
        o && "shadow-md"
      ),
      children: [
        /* @__PURE__ */ e("div", { className: "aspect-auto flex-shrink-0 overflow-hidden rounded-xl py-1 pl-1", children: /* @__PURE__ */ e(
          "img",
          {
            src: s,
            alt: "",
            className: "h-full w-full rounded-lg object-cover"
          }
        ) }),
        /* @__PURE__ */ n("div", { className: "flex flex-col justify-center gap-8 px-8 py-5", children: [
          /* @__PURE__ */ n("div", { className: "flex flex-col gap-5", children: [
            /* @__PURE__ */ n("div", { className: "flex flex-col gap-2", children: [
              /* @__PURE__ */ n("div", { className: "flex flex-row items-center gap-2", children: [
                i && /* @__PURE__ */ e(O, { icon: i }),
                t && /* @__PURE__ */ e("p", { className: "text-base font-medium text-f1-foreground", children: t })
              ] }),
              /* @__PURE__ */ e("h2", { className: "font-bold text-xl text-f1-foreground", children: a })
            ] }),
            /* @__PURE__ */ e(ea, { benefits: r })
          ] }),
          l && /* @__PURE__ */ e("div", { className: "flex gap-3", children: l })
        ] })
      ]
    }
  )
);
Z.displayName = "ProductBlankslate";
function la({
  isOpen: a,
  onClose: s,
  title: r,
  children: l,
  icon: o
}) {
  const [i, t] = g(a);
  return X(() => {
    t(a);
  }, [a]), /* @__PURE__ */ e(me, { open: i, onOpenChange: (c) => {
    t(c), c || s();
  }, modal: !0, children: /* @__PURE__ */ n(ve, { className: "max-h-[620px] w-[760px] overflow-y-auto overflow-x-hidden bg-f1-background", children: [
    /* @__PURE__ */ n("div", { className: "flex flex-row items-center justify-between px-4 py-4", children: [
      /* @__PURE__ */ n(pe, { className: "flex flex-row items-center gap-2 text-lg font-semibold text-f1-foreground", children: [
        o && /* @__PURE__ */ e(O, { icon: o, size: "lg" }),
        r
      ] }),
      /* @__PURE__ */ e(
        ge,
        {
          variant: "outline",
          icon: k,
          onClick: s,
          label: "Close modal",
          hideLabel: !0
        }
      )
    ] }),
    /* @__PURE__ */ n(xe, { className: "[*[data-state=visible]_div]:bg-f1-background flex max-h-[512px] flex-col", children: [
      l,
      /* @__PURE__ */ e(
        be,
        {
          orientation: "vertical",
          className: "[&_div]:bg-f1-background"
        }
      )
    ] })
  ] }) });
}
function Pa({
  isOpen: a,
  onClose: s,
  title: r,
  image: l,
  benefits: o,
  errorMessage: i,
  successMessage: t,
  loadingState: d,
  nextSteps: c,
  closeLabel: m,
  primaryAction: f,
  modalTitle: b,
  modalIcon: u,
  secondaryAction: v
}) {
  const [y, C] = g(a), [N, w] = g(null), [L, B] = g(!1), U = async () => {
    if (f != null && f.onClick) {
      B(!0);
      try {
        await f.onClick(), C(!1), w("success");
      } catch {
        w("error");
      } finally {
        B(!1);
      }
    }
  }, I = () => {
    C(!1), s == null || s();
  }, A = L;
  return /* @__PURE__ */ n(V, { children: [
    /* @__PURE__ */ e(
      la,
      {
        isOpen: y,
        onClose: I,
        title: b,
        icon: u,
        children: /* @__PURE__ */ e("div", { className: "pb-4 pl-4", children: /* @__PURE__ */ e(
          Z,
          {
            title: r,
            image: l,
            benefits: o,
            withShadow: !1,
            actions: /* @__PURE__ */ n("div", { className: "flex gap-3", children: [
              f && /* @__PURE__ */ e(
                p,
                {
                  variant: f.variant,
                  label: A ? d.label : f.label,
                  icon: f.icon || void 0,
                  onClick: U,
                  loading: f.loading,
                  size: f.size
                }
              ),
              v && /* @__PURE__ */ e(
                p,
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
    N && /* @__PURE__ */ e(
      Ce,
      {
        open: !0,
        onClose: () => {
          I(), w(null);
        },
        success: N === "success",
        errorMessage: i,
        successMessage: t,
        nextSteps: c,
        closeLabel: m
      }
    )
  ] });
}
function sa({
  mediaUrl: a,
  title: s,
  description: r,
  onClose: l,
  dismissible: o,
  width: i,
  trackVisibility: t,
  actions: d
}) {
  const [c, m] = g(!1), f = () => {
    m(!0), l && l();
  };
  X(() => {
    t && t(!c);
  }, [t, c]);
  const b = a == null ? void 0 : a.includes(".mp4");
  return /* @__PURE__ */ e(V, { children: c ? null : /* @__PURE__ */ n(Ne, { style: { width: i }, className: "relative bg-f1-background p-1", children: [
    /* @__PURE__ */ n(we, { children: [
      o && /* @__PURE__ */ e("div", { className: "absolute right-2 top-2 z-10", children: /* @__PURE__ */ e(
        p,
        {
          variant: "ghost",
          icon: k,
          size: "sm",
          hideLabel: !0,
          onClick: f,
          label: "Close"
        }
      ) }),
      /* @__PURE__ */ n("div", { children: [
        /* @__PURE__ */ e("div", { children: a && (b ? /* @__PURE__ */ e(
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
            alt: s,
            className: "h-full w-full rounded-md"
          }
        )) }),
        /* @__PURE__ */ n("div", { className: "flex flex-col gap-[2px] p-3", children: [
          /* @__PURE__ */ e(E, { className: "text-lg font-medium", children: s }),
          /* @__PURE__ */ e(E, { className: "line-clamp-3 text-base font-normal text-f1-foreground-secondary", children: r })
        ] })
      ] })
    ] }),
    d && /* @__PURE__ */ e(Pe, { className: "p-3", children: d.map(
      (u) => u.type === "upsell" ? /* @__PURE__ */ e(
        T,
        {
          label: u.label,
          onRequest: u.onClick,
          errorMessage: u.errorMessage,
          successMessage: u.successMessage,
          loadingState: u.loadingState,
          nextSteps: u.nextSteps,
          closeLabel: u.closeLabel,
          showConfirmation: u.showConfirmation,
          variant: u.variant
        },
        u.label
      ) : /* @__PURE__ */ e(
        p,
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
function ra({
  title: a,
  subtitle: s,
  mediaUrl: r,
  primaryAction: l,
  secondaryAction: o,
  onClose: i
}) {
  const t = r == null ? void 0 : r.includes(".mp4"), [d, c] = g(!1), m = () => {
    i && i(), c(!0);
  };
  return d ? null : /* @__PURE__ */ n("div", { className: "bg-white relative flex w-full flex-col gap-4 rounded-xl border border-f1-border-secondary shadow-md sm:flex-row sm:gap-5", children: [
    /* @__PURE__ */ e("div", { className: "aspect-video w-full flex-shrink-0 overflow-hidden rounded-xl px-1 pb-0 pt-1 sm:max-w-80 sm:py-1 sm:pl-1", children: t ? /* @__PURE__ */ e(
      "video",
      {
        src: r,
        autoPlay: !0,
        muted: !0,
        loop: !0,
        className: "h-full w-full rounded-lg object-cover"
      }
    ) : /* @__PURE__ */ e(
      "img",
      {
        src: r,
        alt: "",
        className: "h-full w-full rounded-lg object-cover"
      }
    ) }),
    /* @__PURE__ */ n("div", { className: "flex flex-col justify-center gap-5 px-3 pb-3 sm:py-3 sm:pl-0 sm:pr-3", children: [
      /* @__PURE__ */ n("div", { className: "flex w-full flex-col gap-1 sm:max-w-lg", children: [
        /* @__PURE__ */ e("h3", { className: "font-bold text-xl text-f1-foreground", children: a }),
        s && /* @__PURE__ */ e("p", { className: "text-base text-f1-foreground-secondary", children: s })
      ] }),
      /* @__PURE__ */ n("div", { className: "flex gap-3", children: [
        l && l.variant === "promote" && /* @__PURE__ */ e(
          T,
          {
            label: l.label,
            onRequest: async () => {
              await l.onClick();
            },
            errorMessage: l.errorMessage,
            successMessage: l.successMessage,
            loadingState: l.loadingState,
            nextSteps: l.nextSteps,
            closeLabel: l.closeLabel,
            showIcon: l.showIcon,
            showConfirmation: l.showConfirmation,
            variant: l.variant
          }
        ),
        l && l.variant === "default" && /* @__PURE__ */ e(
          p,
          {
            onClick: l.onClick,
            label: l.label,
            variant: "default",
            size: "md"
          }
        ),
        o && /* @__PURE__ */ e(
          p,
          {
            onClick: o.onClick,
            label: o.label,
            variant: "outline",
            size: "md"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ e("div", { className: "absolute right-2 top-2 z-10", children: /* @__PURE__ */ e(
      p,
      {
        variant: "ghost",
        icon: k,
        size: "sm",
        hideLabel: !0,
        onClick: m,
        label: "Close"
      }
    ) })
  ] });
}
ra.displayName = "UpsellingBanner";
function ya({
  isOpen: a,
  setIsOpen: s,
  label: r,
  variant: l = "promote",
  size: o = "md",
  showIcon: i = !0,
  side: t = "right",
  align: d = "center",
  icon: c = ke,
  mediaUrl: m,
  title: f,
  description: b,
  width: u = "300px",
  trackVisibility: v,
  actions: y,
  onClick: C,
  hideLabel: N = !1
}) {
  return /* @__PURE__ */ n(ye, { open: a, onOpenChange: (L) => {
    s(L), C && C();
  }, children: [
    /* @__PURE__ */ e(Le, { asChild: !0, children: /* @__PURE__ */ e(
      p,
      {
        variant: l,
        label: r,
        size: o,
        icon: i ? c : void 0,
        onClick: () => s(a),
        hideLabel: N
      }
    ) }),
    /* @__PURE__ */ e(
      Me,
      {
        side: t,
        align: d,
        className: "w-fit border-none bg-transparent p-2 shadow-none",
        children: /* @__PURE__ */ e(
          sa,
          {
            mediaUrl: m,
            title: f,
            description: b,
            onClose: () => s(!1),
            dismissible: !1,
            width: u,
            trackVisibility: v,
            actions: y
          }
        )
      }
    )
  ] });
}
const oa = Te(
  null
), ta = ({ children: a, fullScreen: s = !0 }) => {
  const r = H(null), [l, o] = g(r.current);
  return ze(() => {
    o(r.current);
  }, []), /* @__PURE__ */ e(oa.Provider, { value: { element: l }, children: /* @__PURE__ */ e(
    "div",
    {
      ref: r,
      id: "factorial-one-layout",
      className: x({
        "flex h-screen w-screen flex-col bg-[#F5F6F8] dark:bg-[#0D1625]": s
      }),
      children: a
    }
  ) });
}, na = ({
  children: a
}) => /* @__PURE__ */ e(De, { reducedMotion: "user", children: a }), La = ({
  children: a,
  layout: s,
  link: r,
  privacyModeInitiallyEnabled: l,
  image: o,
  i18n: i,
  l10n: t,
  isDev: d = !1,
  showExperimentalWarnings: c = !1
}) => /* @__PURE__ */ e(na, { children: /* @__PURE__ */ e(
  Re,
  {
    isDev: d,
    showExperimentalWarnings: c,
    children: /* @__PURE__ */ e(Se, { ...t, children: /* @__PURE__ */ e($e, { ...i, children: /* @__PURE__ */ e(Be, { ...r, children: /* @__PURE__ */ e(ta, { ...s, children: /* @__PURE__ */ e(Ie, { children: /* @__PURE__ */ e(
      Ee,
      {
        initiallyEnabled: l,
        children: /* @__PURE__ */ e(_e, { ...o, children: a })
      }
    ) }) }) }) }) })
  }
) });
export {
  ha as AreaChart,
  Ra as Await,
  ma as BarChart,
  p as Button,
  va as CategoryBarChart,
  Sa as CopyButton,
  $a as EmojiImage,
  La as FactorialOneProvider,
  wa as HomeLayout,
  Ba as Icon,
  pa as LineChart,
  ua as Link,
  ga as PieChart,
  Ee as PrivacyModeProvider,
  Z as ProductBlankslate,
  Ia as ProductCard,
  Pa as ProductModal,
  sa as ProductWidget,
  ba as ProgressBarChart,
  Ca as StandardLayout,
  Na as TwoColumnLayout,
  Ce as UpsellRequestResponseDialog,
  ra as UpsellingBanner,
  T as UpsellingButton,
  ya as UpsellingPopover,
  xa as VerticalBarChart,
  Ea as buildTranslations,
  _a as experimental,
  Da as getEmojiLabel,
  za as useEmojiConfetti,
  Fa as usePrivacyMode,
  ja as useReducedMotion,
  Oa as useXRay
};
