import { C as m, L as oe, c as se, P as z, a as g, f as ne, b as ie, A as de, B as ce, d as ue, e as fe, g as me, V as he, h as T, i as pe, j as ve, M as j, I as V, F as R, D as H, k as X, l as xe, m as ge, n as be, o as q, p as Ne, S as ye, q as Ce, r as we, s as b, t as Pe, u as G, v as Le, w as ke, x as Re, y as $e, z as F, E as Be, G as Ie, U as Se, H as De, J as Fe, K as _e, X as Ee, N as Oe, O as ze, Q as Te, R as je } from "./imageHandler-olirJ4TT.js";
import { T as _a, a1 as Ea, Y as Oa, W as za, _ as Ta, a2 as ja, a3 as Va, Z as Ha, a0 as Xa, $ as qa } from "./imageHandler-olirJ4TT.js";
import { jsx as e, jsxs as s, Fragment as C } from "react/jsx-runtime";
import * as $ from "react";
import Ve, { forwardRef as k, useRef as W, useImperativeHandle as He, Children as Xe, useState as p, useCallback as qe, useEffect as A, createContext as Ge } from "react";
const xa = m(
  {
    name: "Link",
    type: "info"
  },
  oe
);
var B = "Progress", I = 100, [We, ga] = se(B), [Ae, Me] = We(B), M = $.forwardRef(
  (a, l) => {
    const {
      __scopeProgress: r,
      value: t = null,
      max: o,
      getValueLabel: i = Ue,
      ...n
    } = a;
    (o || o === 0) && !_(o) && console.error(Je(`${o}`, "Progress"));
    const d = _(o) ? o : I;
    t !== null && !E(t, d) && console.error(Ke(`${t}`, "Progress"));
    const c = E(t, d) ? t : null, h = L(c) ? i(c, d) : void 0;
    return /* @__PURE__ */ e(Ae, { scope: r, value: c, max: d, children: /* @__PURE__ */ e(
      z.div,
      {
        "aria-valuemax": d,
        "aria-valuemin": 0,
        "aria-valuenow": L(c) ? c : void 0,
        "aria-valuetext": h,
        role: "progressbar",
        "data-state": K(c, d),
        "data-value": c ?? void 0,
        "data-max": d,
        ...n,
        ref: l
      }
    ) });
  }
);
M.displayName = B;
var U = "ProgressIndicator", J = $.forwardRef(
  (a, l) => {
    const { __scopeProgress: r, ...t } = a, o = Me(U, r);
    return /* @__PURE__ */ e(
      z.div,
      {
        "data-state": K(o.value, o.max),
        "data-value": o.value ?? void 0,
        "data-max": o.max,
        ...t,
        ref: l
      }
    );
  }
);
J.displayName = U;
function Ue(a, l) {
  return `${Math.round(a / l * 100)}%`;
}
function K(a, l) {
  return a == null ? "indeterminate" : a === l ? "complete" : "loading";
}
function L(a) {
  return typeof a == "number";
}
function _(a) {
  return L(a) && !isNaN(a) && a > 0;
}
function E(a, l) {
  return L(a) && !isNaN(a) && a <= l && a >= 0;
}
function Je(a, l) {
  return `Invalid prop \`max\` of value \`${a}\` supplied to \`${l}\`. Only numbers greater than 0 are valid max values. Defaulting to \`${I}\`.`;
}
function Ke(a, l) {
  return `Invalid prop \`value\` of value \`${a}\` supplied to \`${l}\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or ${I} if no \`max\` prop is set)
  - \`null\` or \`undefined\` if the progress is indeterminate.

Defaulting to \`null\`.`;
}
var Q = M, Qe = J;
const Y = $.forwardRef(({ className: a, value: l, ...r }, t) => /* @__PURE__ */ e(
  Q,
  {
    ref: t,
    className: g(
      "relative h-2 w-full overflow-hidden rounded-full bg-f1-background-secondary",
      a
    ),
    ...r,
    children: /* @__PURE__ */ e(
      Qe,
      {
        className: "h-full w-full flex-1 transition-all",
        style: {
          backgroundColor: r.color,
          transform: `translateX(-${100 - (l || 0)}%)`
        }
      }
    )
  }
));
Y.displayName = Q.displayName;
const Ye = ({ value: a, max: l = 100, label: r, color: t }, o) => {
  const i = t || ie(0), n = a / l * 100;
  return /* @__PURE__ */ s("div", { className: "flex items-center space-x-2", "aria-live": "polite", children: [
    /* @__PURE__ */ e("div", { className: "flex-grow", children: /* @__PURE__ */ e(
      Y,
      {
        color: i,
        value: n,
        className: "w-full",
        "aria-valuemin": 0,
        "aria-valuemax": l,
        "aria-valuenow": a,
        "aria-label": `${n.toFixed(1)}%`
      }
    ) }),
    r && /* @__PURE__ */ e("div", { className: "flex-shrink-0 text-sm font-medium", children: r })
  ] });
}, Ze = ne(Ye), ba = m(
  {
    name: "AreaChart",
    type: "info"
  },
  de
), Na = m(
  {
    name: "BarChart",
    type: "info"
  },
  ce
), ya = m(
  {
    name: "CategoryBarChart",
    type: "info"
  },
  ue
), Ca = m(
  {
    name: "LineChart",
    type: "info"
  },
  fe
), wa = m(
  {
    name: "PieChart",
    type: "info"
  },
  me
), Pa = m(
  {
    name: "VerticalBarChart",
    type: "info"
  },
  he
), La = m(
  {
    name: "ProgressBarChart",
    type: "info"
  },
  Ze
), ea = {
  xs: 1,
  sm: 2,
  md: 2,
  lg: 2
}, aa = k(function({ widgets: l, children: r }, t) {
  const o = W(null);
  He(t, () => o.current);
  const i = Xe.toArray(l).filter((n) => !!n).map((n, d) => /* @__PURE__ */ e("div", { className: "h-full @5xl:h-auto [&>div]:h-full", children: n }, d));
  return /* @__PURE__ */ e(T, { layout: "home", children: /* @__PURE__ */ s("div", { ref: o, className: "@container", children: [
    /* @__PURE__ */ s("div", { className: "flex flex-col gap-6 px-5 pt-4 @md:pt-2 @5xl:hidden", children: [
      /* @__PURE__ */ e(pe, { columns: ea, showArrows: !1, children: i }),
      /* @__PURE__ */ e("main", { children: r })
    ] }),
    /* @__PURE__ */ s("div", { className: "hidden grid-cols-3 gap-5 px-6 pb-6 pt-2 @5xl:grid", children: [
      /* @__PURE__ */ e("div", { className: "col-span-3 flex flex-row gap-5 *:flex-1", children: i.slice(0, 3) }),
      /* @__PURE__ */ e("main", { className: "col-span-2", children: r }),
      /* @__PURE__ */ e("div", { className: "flex flex-1 flex-col gap-5", children: i.slice(3) })
    ] })
  ] }) });
}), la = k(
  function({ children: l, sideContent: r, mainColumnPosition: t = "left" }, o) {
    return /* @__PURE__ */ e("div", { ref: o, className: "h-full overflow-auto", children: /* @__PURE__ */ s(
      "div",
      {
        className: g(
          "flex h-full overflow-auto text-f1-foreground sm:flex-row",
          t === "right" ? "flex-col" : "flex-col-reverse"
        ),
        children: [
          t === "right" && /* @__PURE__ */ e(O, { children: r }),
          /* @__PURE__ */ e(
            "main",
            {
              className: g(
                "h-fit min-h-full border-0 px-6 py-5 sm:basis-3/4 sm:border-solid",
                t === "right" ? "sm:border-l sm:border-l-f1-border-secondary" : "sm:border-r sm:border-r-f1-border-secondary"
              ),
              children: l
            }
          ),
          t === "left" && /* @__PURE__ */ e(O, { children: r })
        ]
      }
    ) });
  }
), O = ({ children: a }) => /* @__PURE__ */ e("aside", { className: "py-5 pl-2 pr-4 sm:basis-1/4 sm:pb-6", children: a }), ra = ve({
  base: "relative flex min-h-full w-full flex-col gap-4 place-self-center overflow-y-auto px-6 py-5",
  variants: {
    variant: {
      narrow: "max-w-screen-lg"
    }
  }
}), Z = Ve.forwardRef(({ children: a, variant: l, className: r, ...t }, o) => /* @__PURE__ */ e(T, { layout: "standard", children: /* @__PURE__ */ e(
  "section",
  {
    ref: o,
    className: g("relative flex-1 overflow-auto", r),
    ...t,
    children: /* @__PURE__ */ e("div", { className: g(ra({ variant: l })), children: a })
  }
) }));
Z.displayName = "StandardLayout";
const ka = m(
  {
    name: "StandardLayout",
    type: "layout"
  },
  Z
), Ra = m(
  {
    name: "TwoColumnLayout",
    type: "layout"
  },
  la
), $a = m(
  {
    name: "HomeLayout",
    type: "layout"
  },
  aa
), ta = ({ benefits: a }) => /* @__PURE__ */ e("div", { className: "flex flex-col gap-2", children: a.map((l, r) => /* @__PURE__ */ e(oa, { text: l }, r)) }), oa = ({ text: a }) => /* @__PURE__ */ s("div", { className: "flex flex-row items-start gap-2", children: [
  /* @__PURE__ */ e(V, { icon: R, size: "md", className: "text-f1-icon-positive" }),
  /* @__PURE__ */ e("span", { children: a })
] }), ee = k(
  ({ title: a, image: l, benefits: r, actions: t, withShadow: o = !0, icon: i, moduleName: n }, d) => /* @__PURE__ */ s(
    "div",
    {
      ref: d,
      className: g(
        "bg-white flex flex-row rounded-xl border border-f1-border-secondary",
        o && "shadow-md"
      ),
      children: [
        /* @__PURE__ */ e("div", { className: "aspect-auto flex-shrink-0 overflow-hidden rounded-xl py-1 pl-1", children: /* @__PURE__ */ e(
          "img",
          {
            src: l,
            alt: "",
            className: "h-full w-full rounded-lg object-cover"
          }
        ) }),
        /* @__PURE__ */ s("div", { className: "flex flex-col justify-center gap-8 px-8 py-5", children: [
          /* @__PURE__ */ s("div", { className: "flex flex-col gap-5", children: [
            /* @__PURE__ */ s("div", { className: "flex flex-col gap-2", children: [
              /* @__PURE__ */ s("div", { className: "flex flex-row items-center gap-2", children: [
                i && /* @__PURE__ */ e(j, { icon: i }),
                n && /* @__PURE__ */ e("p", { className: "text-base font-medium text-f1-foreground", children: n })
              ] }),
              /* @__PURE__ */ e("h2", { className: "font-bold text-xl text-f1-foreground", children: a })
            ] }),
            /* @__PURE__ */ e(ta, { benefits: r })
          ] }),
          t && /* @__PURE__ */ e("div", { className: "flex gap-3", children: t })
        ] })
      ]
    }
  )
);
ee.displayName = "ProductBlankslate";
const sa = ({ text: a, isCompleted: l }) => /* @__PURE__ */ s("div", { className: "flex flex-row items-center gap-2", children: [
  /* @__PURE__ */ e(
    V,
    {
      className: l ? "text-f1-icon-positive" : "text-f1-icon-secondary",
      icon: l ? R : we,
      size: "md"
    }
  ),
  /* @__PURE__ */ e(
    "span",
    {
      className: l ? "font-medium text-f1-foreground" : "text-f1-foreground-secondary",
      children: a
    }
  )
] }), na = ({ title: a, items: l }) => /* @__PURE__ */ s("div", { className: "px-4 pb-2", children: [
  /* @__PURE__ */ e("div", { className: "mb-2 text-sm text-f1-foreground-secondary", children: a }),
  /* @__PURE__ */ e("div", { className: "flex flex-col gap-2", children: l.map((r) => /* @__PURE__ */ e(
    sa,
    {
      text: r.text,
      isCompleted: r.isCompleted ?? !1
    },
    r.text
  )) })
] }), ia = ({
  onClose: a,
  success: l,
  successButtonOnClick: r,
  successButtonLabel: t,
  closeLabel: o
}) => {
  const i = (n = !1) => /* @__PURE__ */ s(C, { children: [
    /* @__PURE__ */ e(
      b,
      {
        variant: "outline",
        label: o,
        onClick: a,
        size: n ? "lg" : void 0
      }
    ),
    l && /* @__PURE__ */ e(
      b,
      {
        variant: "promote",
        label: t,
        onClick: () => {
          r(), a == null || a();
        },
        size: n ? "lg" : void 0
      }
    )
  ] });
  return /* @__PURE__ */ s(Ce, { className: "px-4 pb-4 pt-2 [&_div]:w-full", children: [
    /* @__PURE__ */ e("div", { className: "hidden sm:flex sm:flex-row sm:justify-between sm:gap-3", children: i() }),
    /* @__PURE__ */ e("div", { className: "flex flex-col-reverse gap-2 sm:hidden", children: i(!0) })
  ] });
}, S = k(
  ({
    open: a,
    onClose: l,
    success: r = !0,
    errorMessage: t,
    successMessage: o,
    nextSteps: i,
    closeLabel: n
  }, d) => {
    const [c, h] = p(!1), f = qe(() => {
      h(!0), setTimeout(() => {
        l == null || l(), h(!1);
      }, 200);
    }, [l]);
    return /* @__PURE__ */ e(
      H,
      {
        open: a && !c,
        onOpenChange: (v) => !v && (f == null ? void 0 : f()),
        children: /* @__PURE__ */ s(
          X,
          {
            ref: d,
            className: "bottom-3 top-auto max-w-[400px] translate-y-0 sm:bottom-auto sm:top-[50%] sm:translate-y-[-50%]",
            children: [
              /* @__PURE__ */ s(
                xe,
                {
                  className: `flex flex-col items-start gap-4 px-4 ${r ? "pt-5" : "py-5"}`,
                  children: [
                    /* @__PURE__ */ e(
                      ge,
                      {
                        type: r ? "positive" : "critical",
                        size: "lg",
                        icon: r ? R : be
                      }
                    ),
                    /* @__PURE__ */ s("div", { className: "flex flex-col gap-0.5", children: [
                      /* @__PURE__ */ e(q, { className: "text-xl font-semibold sm:text-lg", children: r ? o == null ? void 0 : o.title : t == null ? void 0 : t.title }),
                      /* @__PURE__ */ e(Ne, { className: "text-lg sm:text-base", children: r ? o == null ? void 0 : o.description : t == null ? void 0 : t.description })
                    ] })
                  ]
                }
              ),
              r ? /* @__PURE__ */ s(C, { children: [
                /* @__PURE__ */ e(ye, {}),
                /* @__PURE__ */ e(na, { title: i.title, items: i.items })
              ] }) : null,
              /* @__PURE__ */ e(
                ia,
                {
                  onClose: f,
                  success: r,
                  successButtonLabel: o.buttonLabel,
                  successButtonOnClick: o.buttonOnClick,
                  closeLabel: n
                }
              )
            ]
          }
        )
      }
    );
  }
);
S.displayName = "UpsellRequestResponseDialog";
function da({
  isOpen: a,
  onClose: l,
  title: r,
  children: t,
  icon: o
}) {
  const [i, n] = p(a);
  return A(() => {
    n(a);
  }, [a]), /* @__PURE__ */ e(H, { open: i, onOpenChange: (c) => {
    n(c), c || l();
  }, modal: !0, children: /* @__PURE__ */ s(X, { className: "max-h-[620px] w-[760px] overflow-y-auto overflow-x-hidden bg-f1-background", children: [
    /* @__PURE__ */ s("div", { className: "flex flex-row items-center justify-between px-4 py-4", children: [
      /* @__PURE__ */ s(q, { className: "flex flex-row items-center gap-2 text-lg font-semibold text-f1-foreground", children: [
        o && /* @__PURE__ */ e(j, { icon: o, size: "lg" }),
        r
      ] }),
      /* @__PURE__ */ e(
        Pe,
        {
          variant: "outline",
          icon: G,
          onClick: l,
          label: "Close modal",
          hideLabel: !0
        }
      )
    ] }),
    /* @__PURE__ */ s(Le, { className: "[*[data-state=visible]_div]:bg-f1-background flex max-h-[512px] flex-col", children: [
      t,
      /* @__PURE__ */ e(
        ke,
        {
          orientation: "vertical",
          className: "[&_div]:bg-f1-background"
        }
      )
    ] })
  ] }) });
}
function Ba({
  isOpen: a,
  onClose: l,
  title: r,
  image: t,
  benefits: o,
  errorMessage: i,
  successMessage: n,
  loadingState: d,
  nextSteps: c,
  closeLabel: h,
  primaryAction: f,
  modalTitle: v,
  modalIcon: u,
  secondaryAction: x
}) {
  const [w, P] = p(a), [N, y] = p(null), [ae, D] = p(!1), le = async () => {
    if (f != null && f.onClick) {
      D(!0);
      try {
        await f.onClick(), P(!1), y("success");
      } catch {
        y("error");
      } finally {
        D(!1);
      }
    }
  }, re = () => {
    P(!1), l == null || l();
  }, te = ae;
  return /* @__PURE__ */ s(C, { children: [
    /* @__PURE__ */ e(
      da,
      {
        isOpen: w,
        onClose: re,
        title: v,
        icon: u,
        children: /* @__PURE__ */ e("div", { className: "pb-4 pl-4", children: /* @__PURE__ */ e(
          ee,
          {
            title: r,
            image: t,
            benefits: o,
            withShadow: !1,
            actions: /* @__PURE__ */ s("div", { className: "flex gap-3", children: [
              f && /* @__PURE__ */ e(
                b,
                {
                  variant: f.variant,
                  label: te ? d.label : f.label,
                  icon: f.icon || void 0,
                  onClick: le,
                  loading: f.loading,
                  size: f.size
                }
              ),
              x && /* @__PURE__ */ e(
                b,
                {
                  onClick: x.onClick,
                  label: x.label,
                  variant: x.variant,
                  size: x.size,
                  icon: x.icon
                }
              )
            ] })
          }
        ) })
      }
    ),
    N && /* @__PURE__ */ e(
      S,
      {
        open: !0,
        onClose: () => {
          y(null);
        },
        success: N === "success",
        errorMessage: i,
        successMessage: n,
        nextSteps: c,
        closeLabel: h
      }
    )
  ] });
}
function Ia({
  mediaUrl: a,
  title: l,
  description: r,
  onClose: t,
  dismissible: o,
  width: i,
  trackVisibility: n,
  actions: d
}) {
  const [c, h] = p(!1), f = () => {
    h(!0), t && t();
  };
  A(() => {
    n && n(!c);
  }, [n, c]);
  const v = a == null ? void 0 : a.includes(".mp4");
  return /* @__PURE__ */ e(C, { children: c ? null : /* @__PURE__ */ s(Re, { style: { width: i }, className: "relative bg-f1-background p-1", children: [
    /* @__PURE__ */ s($e, { children: [
      o && /* @__PURE__ */ e("div", { className: "absolute right-2 top-2 z-10", children: /* @__PURE__ */ e(
        b,
        {
          variant: "ghost",
          icon: G,
          size: "sm",
          hideLabel: !0,
          onClick: f,
          label: "Close"
        }
      ) }),
      /* @__PURE__ */ s("div", { children: [
        /* @__PURE__ */ e("div", { children: v ? /* @__PURE__ */ e(
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
            alt: l,
            className: "h-full w-full rounded-md"
          }
        ) }),
        /* @__PURE__ */ s("div", { className: "flex flex-col gap-[2px] p-3", children: [
          /* @__PURE__ */ e(F, { className: "text-lg font-medium", children: l }),
          /* @__PURE__ */ e(F, { className: "line-clamp-2 text-base font-normal text-f1-foreground-secondary", children: r })
        ] })
      ] })
    ] }),
    d && /* @__PURE__ */ e(Be, { className: "p-3", children: d.map(
      (u) => u.type === "upsell" ? /* @__PURE__ */ e(
        ca,
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
        b,
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
function ca({
  label: a,
  showIcon: l = !0,
  onRequest: r,
  showConfirmation: t = !0,
  loading: o,
  errorMessage: i,
  successMessage: n,
  loadingState: d,
  nextSteps: c,
  closeLabel: h,
  ...f
}) {
  const [v, u] = p(null), [x, w] = p(!1), P = async () => {
    if (r) {
      w(!0);
      try {
        await r(), t && u("success");
      } catch {
        u("error");
      } finally {
        w(!1);
      }
    }
  }, N = o || x, y = N ? d.label : a;
  return /* @__PURE__ */ s(C, { children: [
    /* @__PURE__ */ e(
      b,
      {
        variant: "promote",
        label: y,
        icon: l ? Ie : void 0,
        onClick: P,
        loading: N,
        ...f
      }
    ),
    t && v && /* @__PURE__ */ e(
      S,
      {
        open: !0,
        onClose: () => u(null),
        success: v === "success",
        errorMessage: i,
        successMessage: n,
        nextSteps: c,
        closeLabel: h
      }
    )
  ] });
}
const ua = Ge(
  null
), fa = ({ children: a, fullScreen: l = !0 }) => {
  const r = W(null), [t, o] = p(r.current);
  return je(() => {
    o(r.current);
  }, []), /* @__PURE__ */ e(ua.Provider, { value: { element: t }, children: /* @__PURE__ */ e(
    "div",
    {
      ref: r,
      id: "factorial-one-layout",
      className: g({
        "flex h-screen w-screen flex-col bg-[#F5F6F8] dark:bg-[#0D1625]": l
      }),
      children: a
    }
  ) });
}, ma = ({
  children: a
}) => /* @__PURE__ */ e(Te, { reducedMotion: "user", children: a }), Sa = ({
  children: a,
  layout: l,
  link: r,
  privacyModeInitiallyEnabled: t,
  image: o,
  i18n: i,
  l10n: n
}) => /* @__PURE__ */ e(ma, { children: /* @__PURE__ */ e(Se, { children: /* @__PURE__ */ e(De, { ...n, children: /* @__PURE__ */ e(Fe, { ...i, children: /* @__PURE__ */ e(_e, { ...r, children: /* @__PURE__ */ e(fa, { ...l, children: /* @__PURE__ */ e(Ee, { children: /* @__PURE__ */ e(
  Oe,
  {
    initiallyEnabled: t,
    children: /* @__PURE__ */ e(ze, { ...o, children: a })
  }
) }) }) }) }) }) }) });
export {
  ba as AreaChart,
  Na as BarChart,
  b as Button,
  ya as CategoryBarChart,
  _a as CopyButton,
  Ea as EmojiImage,
  Sa as FactorialOneProvider,
  $a as HomeLayout,
  Oa as Icon,
  Ca as LineChart,
  xa as Link,
  wa as PieChart,
  Oe as PrivacyModeProvider,
  ee as ProductBlankslate,
  za as ProductCard,
  Ba as ProductModal,
  Ia as ProductWidget,
  La as ProgressBarChart,
  ka as StandardLayout,
  Ra as TwoColumnLayout,
  S as UpsellRequestResponseDialog,
  ca as UpsellingButton,
  Pa as VerticalBarChart,
  Ta as buildTranslations,
  ja as getEmojiLabel,
  Va as useEmojiConfetti,
  Ha as usePrivacyMode,
  Xa as useReducedMotion,
  qa as useXRay
};
