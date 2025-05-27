import { C as m, L as oe, c as ne, P as z, a as g, f as se, b as ie, A as de, B as ce, d as ue, e as fe, g as me, V as he, h as V, i as pe, j as ve, M as T, I as j, F as $, D as H, k as X, l as xe, m as ge, n as be, o as G, p as Ne, S as ye, q as Ce, r as we, s as b, t as Pe, u as U, v as Le, w as ke, x as $e, y as Re, z as F, E as Be, U as Ie, G as Se, H as De, J as Fe, X as _e, K as Ee, N as Oe, O as ze, Q as Ve } from "./imageHandler-0P0aWnWT.js";
import { R as Ea, a0 as Oa, W as za, T as Va, Z as Ta, a1 as ja, a2 as Ha, Y as Xa, $ as Ga, _ as Ua } from "./imageHandler-0P0aWnWT.js";
import { jsx as e, jsxs as n, Fragment as C } from "react/jsx-runtime";
import * as R from "react";
import Te, { forwardRef as w, useRef as W, useImperativeHandle as je, Children as He, useState as h, useCallback as Xe, useEffect as q, createContext as Ge } from "react";
const Ue = (a, l) => /* @__PURE__ */ e(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 25",
    ref: l,
    ...a,
    children: /* @__PURE__ */ e(
      "path",
      {
        fill: "currentColor",
        d: "M13.9999 5.50006C13.9999 5.06432 13.7178 4.67875 13.3025 4.54693C12.8871 4.41511 12.4343 4.5674 12.183 4.92339L6.18303 13.4233C5.9676 13.7285 5.94025 14.1284 6.11212 14.4601C6.28399 14.7918 6.62642 15 7 15H9.99997V19.5C9.99997 19.9246 10.2682 20.303 10.669 20.4436C11.0697 20.5841 11.5155 20.4563 11.7808 20.1246L17.7808 12.6247C18.0209 12.3245 18.0677 11.9133 17.9012 11.5668C17.7347 11.2204 17.3843 11 16.9999 11H13.9999V5.50006Z"
      }
    )
  }
), We = w(Ue), xa = m(
  {
    name: "Link",
    type: "info"
  },
  oe
);
var B = "Progress", I = 100, [qe, ga] = ne(B), [Ae, Ze] = qe(B), A = R.forwardRef(
  (a, l) => {
    const {
      __scopeProgress: t,
      value: r = null,
      max: o,
      getValueLabel: s = Je,
      ...i
    } = a;
    (o || o === 0) && !_(o) && console.error(Ke(`${o}`, "Progress"));
    const d = _(o) ? o : I;
    r !== null && !E(r, d) && console.error(Qe(`${r}`, "Progress"));
    const c = E(r, d) ? r : null, f = k(c) ? s(c, d) : void 0;
    return /* @__PURE__ */ e(Ae, { scope: t, value: c, max: d, children: /* @__PURE__ */ e(
      z.div,
      {
        "aria-valuemax": d,
        "aria-valuemin": 0,
        "aria-valuenow": k(c) ? c : void 0,
        "aria-valuetext": f,
        role: "progressbar",
        "data-state": K(c, d),
        "data-value": c ?? void 0,
        "data-max": d,
        ...i,
        ref: l
      }
    ) });
  }
);
A.displayName = B;
var Z = "ProgressIndicator", J = R.forwardRef(
  (a, l) => {
    const { __scopeProgress: t, ...r } = a, o = Ze(Z, t);
    return /* @__PURE__ */ e(
      z.div,
      {
        "data-state": K(o.value, o.max),
        "data-value": o.value ?? void 0,
        "data-max": o.max,
        ...r,
        ref: l
      }
    );
  }
);
J.displayName = Z;
function Je(a, l) {
  return `${Math.round(a / l * 100)}%`;
}
function K(a, l) {
  return a == null ? "indeterminate" : a === l ? "complete" : "loading";
}
function k(a) {
  return typeof a == "number";
}
function _(a) {
  return k(a) && !isNaN(a) && a > 0;
}
function E(a, l) {
  return k(a) && !isNaN(a) && a <= l && a >= 0;
}
function Ke(a, l) {
  return `Invalid prop \`max\` of value \`${a}\` supplied to \`${l}\`. Only numbers greater than 0 are valid max values. Defaulting to \`${I}\`.`;
}
function Qe(a, l) {
  return `Invalid prop \`value\` of value \`${a}\` supplied to \`${l}\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or ${I} if no \`max\` prop is set)
  - \`null\` or \`undefined\` if the progress is indeterminate.

Defaulting to \`null\`.`;
}
var Q = A, Ye = J;
const Y = R.forwardRef(({ className: a, value: l, ...t }, r) => /* @__PURE__ */ e(
  Q,
  {
    ref: r,
    className: g(
      "relative h-2 w-full overflow-hidden rounded-full bg-f1-background-secondary",
      a
    ),
    ...t,
    children: /* @__PURE__ */ e(
      Ye,
      {
        className: "h-full w-full flex-1 transition-all",
        style: {
          backgroundColor: t.color,
          transform: `translateX(-${100 - (l || 0)}%)`
        }
      }
    )
  }
));
Y.displayName = Q.displayName;
const Me = ({ value: a, max: l = 100, label: t, color: r }, o) => {
  const s = r || ie(0), i = a / l * 100;
  return /* @__PURE__ */ n("div", { className: "flex items-center space-x-2", "aria-live": "polite", children: [
    /* @__PURE__ */ e("div", { className: "flex-grow", children: /* @__PURE__ */ e(
      Y,
      {
        color: s,
        value: i,
        className: "w-full",
        "aria-valuemin": 0,
        "aria-valuemax": l,
        "aria-valuenow": a,
        "aria-label": `${i.toFixed(1)}%`
      }
    ) }),
    t && /* @__PURE__ */ e("div", { className: "flex-shrink-0 text-sm font-medium", children: t })
  ] });
}, ea = se(Me), ba = m(
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
  ea
), aa = {
  xs: 1,
  sm: 2,
  md: 2,
  lg: 2
}, la = w(function({ widgets: l, children: t }, r) {
  const o = W(null);
  je(r, () => o.current);
  const s = He.toArray(l).filter((i) => !!i).map((i, d) => /* @__PURE__ */ e("div", { className: "h-full @5xl:h-auto [&>div]:h-full", children: i }, d));
  return /* @__PURE__ */ e(V, { layout: "home", children: /* @__PURE__ */ n("div", { ref: o, className: "@container", children: [
    /* @__PURE__ */ n("div", { className: "flex flex-col gap-6 px-5 pt-4 @md:pt-2 @5xl:hidden", children: [
      /* @__PURE__ */ e(pe, { columns: aa, showArrows: !1, children: s }),
      /* @__PURE__ */ e("main", { children: t })
    ] }),
    /* @__PURE__ */ n("div", { className: "hidden grid-cols-3 gap-5 px-6 pb-6 pt-2 @5xl:grid", children: [
      /* @__PURE__ */ e("div", { className: "col-span-3 flex flex-row gap-5 *:flex-1", children: s.slice(0, 3) }),
      /* @__PURE__ */ e("main", { className: "col-span-2", children: t }),
      /* @__PURE__ */ e("div", { className: "flex flex-1 flex-col gap-5", children: s.slice(3) })
    ] })
  ] }) });
}), ta = w(
  function({ children: l, sideContent: t, mainColumnPosition: r = "left" }, o) {
    return /* @__PURE__ */ e("div", { ref: o, className: "h-full overflow-auto", children: /* @__PURE__ */ n(
      "div",
      {
        className: g(
          "flex h-full overflow-auto text-f1-foreground sm:flex-row",
          r === "right" ? "flex-col" : "flex-col-reverse"
        ),
        children: [
          r === "right" && /* @__PURE__ */ e(O, { children: t }),
          /* @__PURE__ */ e(
            "main",
            {
              className: g(
                "h-fit min-h-full border-0 px-6 py-5 sm:basis-3/4 sm:border-solid",
                r === "right" ? "sm:border-l sm:border-l-f1-border-secondary" : "sm:border-r sm:border-r-f1-border-secondary"
              ),
              children: l
            }
          ),
          r === "left" && /* @__PURE__ */ e(O, { children: t })
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
}), M = Te.forwardRef(({ children: a, variant: l, className: t, ...r }, o) => /* @__PURE__ */ e(V, { layout: "standard", children: /* @__PURE__ */ e(
  "section",
  {
    ref: o,
    className: g("relative flex-1 overflow-auto", t),
    ...r,
    children: /* @__PURE__ */ e("div", { className: g(ra({ variant: l })), children: a })
  }
) }));
M.displayName = "StandardLayout";
const ka = m(
  {
    name: "StandardLayout",
    type: "layout"
  },
  M
), $a = m(
  {
    name: "TwoColumnLayout",
    type: "layout"
  },
  ta
), Ra = m(
  {
    name: "HomeLayout",
    type: "layout"
  },
  la
), oa = ({ benefits: a }) => /* @__PURE__ */ e("div", { className: "flex flex-col gap-2", children: a.map((l, t) => /* @__PURE__ */ e(na, { text: l }, t)) }), na = ({ text: a }) => /* @__PURE__ */ n("div", { className: "flex flex-row items-start gap-2", children: [
  /* @__PURE__ */ e(j, { icon: $, size: "md", className: "text-f1-icon-positive" }),
  /* @__PURE__ */ e("span", { children: a })
] }), ee = w(
  ({ title: a, image: l, benefits: t, actions: r, withShadow: o = !0, icon: s, moduleName: i }, d) => /* @__PURE__ */ n(
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
        /* @__PURE__ */ n("div", { className: "flex flex-col justify-center gap-8 px-8 py-5", children: [
          /* @__PURE__ */ n("div", { className: "flex flex-col gap-5", children: [
            /* @__PURE__ */ n("div", { className: "flex flex-col gap-2", children: [
              /* @__PURE__ */ n("div", { className: "flex flex-row items-center gap-2", children: [
                s && /* @__PURE__ */ e(T, { icon: s }),
                i && /* @__PURE__ */ e("p", { className: "text-base font-medium text-f1-foreground", children: i })
              ] }),
              /* @__PURE__ */ e("h2", { className: "font-bold text-xl text-f1-foreground", children: a })
            ] }),
            /* @__PURE__ */ e(oa, { benefits: t })
          ] }),
          r && /* @__PURE__ */ e("div", { className: "flex gap-3", children: r })
        ] })
      ]
    }
  )
);
ee.displayName = "ProductBlankslate";
const sa = ({ text: a, isCompleted: l }) => /* @__PURE__ */ n("div", { className: "flex flex-row items-center gap-2", children: [
  /* @__PURE__ */ e(
    j,
    {
      className: l ? "text-f1-icon-positive" : "text-f1-icon-secondary",
      icon: l ? $ : we,
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
] }), ia = ({ title: a, items: l }) => /* @__PURE__ */ n("div", { className: "px-4 pb-2", children: [
  /* @__PURE__ */ e("div", { className: "mb-2 text-sm text-f1-foreground-secondary", children: a }),
  /* @__PURE__ */ e("div", { className: "flex flex-col gap-2", children: l.map((t) => /* @__PURE__ */ e(
    sa,
    {
      text: t.text,
      isCompleted: t.isCompleted ?? !1
    },
    t.text
  )) })
] }), da = ({
  onClose: a,
  success: l,
  successButtonOnClick: t,
  successButtonLabel: r,
  closeLabel: o
}) => {
  const s = (i = !1) => /* @__PURE__ */ n(C, { children: [
    /* @__PURE__ */ e(
      b,
      {
        variant: "outline",
        label: o,
        onClick: a,
        size: i ? "lg" : void 0
      }
    ),
    l && /* @__PURE__ */ e(
      b,
      {
        variant: "promote",
        label: r,
        onClick: () => {
          t(), a == null || a();
        },
        size: i ? "lg" : void 0
      }
    )
  ] });
  return /* @__PURE__ */ n(Ce, { className: "px-4 pb-4 pt-2 [&_div]:w-full", children: [
    /* @__PURE__ */ e("div", { className: "hidden sm:flex sm:flex-row sm:justify-between sm:gap-3", children: s() }),
    /* @__PURE__ */ e("div", { className: "flex flex-col-reverse gap-2 sm:hidden", children: s(!0) })
  ] });
}, S = w(
  ({
    open: a,
    onClose: l,
    success: t = !0,
    errorMessage: r,
    successMessage: o,
    nextSteps: s,
    closeLabel: i
  }, d) => {
    const [c, f] = h(!1), u = Xe(() => {
      f(!0), setTimeout(() => {
        l == null || l(), f(!1);
      }, 200);
    }, [l]);
    return /* @__PURE__ */ e(
      H,
      {
        open: a && !c,
        onOpenChange: (p) => !p && (u == null ? void 0 : u()),
        children: /* @__PURE__ */ n(
          X,
          {
            ref: d,
            className: "bottom-3 top-auto max-w-[400px] translate-y-0 sm:bottom-auto sm:top-[50%] sm:translate-y-[-50%]",
            children: [
              /* @__PURE__ */ n(
                xe,
                {
                  className: `flex flex-col items-start gap-4 px-4 ${t ? "pt-5" : "py-5"}`,
                  children: [
                    /* @__PURE__ */ e(
                      ge,
                      {
                        type: t ? "positive" : "critical",
                        size: "lg",
                        icon: t ? $ : be
                      }
                    ),
                    /* @__PURE__ */ n("div", { className: "flex flex-col gap-0.5", children: [
                      /* @__PURE__ */ e(G, { className: "text-xl font-semibold sm:text-lg", children: t ? o == null ? void 0 : o.title : r == null ? void 0 : r.title }),
                      /* @__PURE__ */ e(Ne, { className: "text-lg sm:text-base", children: t ? o == null ? void 0 : o.description : r == null ? void 0 : r.description })
                    ] })
                  ]
                }
              ),
              t ? /* @__PURE__ */ n(C, { children: [
                /* @__PURE__ */ e(ye, {}),
                /* @__PURE__ */ e(ia, { title: s.title, items: s.items })
              ] }) : null,
              /* @__PURE__ */ e(
                da,
                {
                  onClose: u,
                  success: t,
                  successButtonLabel: o.buttonLabel,
                  successButtonOnClick: o.buttonOnClick,
                  closeLabel: i
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
function ca({
  isOpen: a,
  onClose: l,
  title: t,
  children: r,
  icon: o
}) {
  const [s, i] = h(a);
  return q(() => {
    i(a);
  }, [a]), /* @__PURE__ */ e(H, { open: s, onOpenChange: (c) => {
    i(c), c || l();
  }, modal: !0, children: /* @__PURE__ */ n(X, { className: "max-h-[620px] w-[760px] overflow-y-auto overflow-x-hidden bg-f1-background", children: [
    /* @__PURE__ */ n("div", { className: "flex flex-row items-center justify-between px-4 py-4", children: [
      /* @__PURE__ */ n(G, { className: "flex flex-row items-center gap-2 text-lg font-semibold text-f1-foreground", children: [
        o && /* @__PURE__ */ e(T, { icon: o, size: "lg" }),
        t
      ] }),
      /* @__PURE__ */ e(
        Pe,
        {
          variant: "outline",
          icon: U,
          onClick: l,
          label: "Close modal",
          hideLabel: !0
        }
      )
    ] }),
    /* @__PURE__ */ n(Le, { className: "[*[data-state=visible]_div]:bg-f1-background flex max-h-[512px] flex-col", children: [
      r,
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
  title: t,
  image: r,
  benefits: o,
  errorMessage: s,
  successMessage: i,
  loadingState: d,
  nextSteps: c,
  closeLabel: f,
  primaryAction: u,
  modalTitle: p,
  modalIcon: x,
  secondaryAction: v
}) {
  const [P, L] = h(a), [N, y] = h(null), [ae, D] = h(!1), le = async () => {
    if (u != null && u.onClick) {
      D(!0);
      try {
        await u.onClick(), L(!1), y("success");
      } catch {
        y("error");
      } finally {
        D(!1);
      }
    }
  }, te = () => {
    L(!1), l == null || l();
  }, re = ae;
  return /* @__PURE__ */ n(C, { children: [
    /* @__PURE__ */ e(
      ca,
      {
        isOpen: P,
        onClose: te,
        title: p,
        icon: x,
        children: /* @__PURE__ */ e("div", { className: "pb-4 pl-4", children: /* @__PURE__ */ e(
          ee,
          {
            title: t,
            image: r,
            benefits: o,
            withShadow: !1,
            actions: /* @__PURE__ */ n("div", { className: "flex gap-3", children: [
              u && /* @__PURE__ */ e(
                b,
                {
                  variant: u.variant,
                  label: re ? d.label : u.label,
                  icon: u.icon || void 0,
                  onClick: le,
                  loading: u.loading,
                  size: u.size
                }
              ),
              v && /* @__PURE__ */ e(
                b,
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
      S,
      {
        open: !0,
        onClose: () => {
          y(null);
        },
        success: N === "success",
        errorMessage: s,
        successMessage: i,
        nextSteps: c,
        closeLabel: f
      }
    )
  ] });
}
function Ia({
  mediaUrl: a,
  title: l,
  description: t,
  buttonText: r,
  onClick: o,
  onClose: s,
  dismissible: i,
  width: d,
  trackVisibility: c
}) {
  const [f, u] = h(!1), p = () => {
    u(!0), s && s();
  };
  q(() => {
    c && c(!f);
  }, [c, f]);
  const x = a == null ? void 0 : a.includes(".mp4");
  return /* @__PURE__ */ e(C, { children: f ? null : /* @__PURE__ */ n($e, { style: { width: d }, className: "relative bg-f1-background p-1", children: [
    /* @__PURE__ */ n(Re, { children: [
      i && /* @__PURE__ */ e("div", { className: "absolute right-2 top-2 z-10", children: /* @__PURE__ */ e(
        b,
        {
          variant: "ghost",
          icon: U,
          size: "sm",
          hideLabel: !0,
          onClick: p,
          label: "Close"
        }
      ) }),
      /* @__PURE__ */ n("div", { children: [
        /* @__PURE__ */ e("div", { children: x ? /* @__PURE__ */ e(
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
        /* @__PURE__ */ n("div", { className: "flex flex-col gap-[2px] p-3", children: [
          /* @__PURE__ */ e(F, { className: "text-lg font-medium", children: l }),
          /* @__PURE__ */ e(F, { className: "line-clamp-2 text-base font-normal text-f1-foreground-secondary", children: t })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ e(Be, { className: "p-3", children: /* @__PURE__ */ e(
      b,
      {
        variant: "neutral",
        size: "sm",
        label: r,
        onClick: o
      }
    ) })
  ] }) });
}
function Sa({
  label: a,
  showIcon: l = !0,
  onRequest: t,
  showConfirmation: r = !0,
  loading: o,
  errorMessage: s,
  successMessage: i,
  loadingState: d,
  nextSteps: c,
  closeLabel: f,
  ...u
}) {
  const [p, x] = h(null), [v, P] = h(!1), L = async () => {
    if (t) {
      P(!0);
      try {
        await t(), r && x("success");
      } catch {
        x("error");
      } finally {
        P(!1);
      }
    }
  }, N = o || v, y = N ? d.label : a;
  return /* @__PURE__ */ n(C, { children: [
    /* @__PURE__ */ e(
      b,
      {
        variant: "promote",
        label: y,
        icon: l ? We : void 0,
        onClick: L,
        loading: N,
        ...u
      }
    ),
    r && p && /* @__PURE__ */ e(
      S,
      {
        open: !0,
        onClose: () => x(null),
        success: p === "success",
        errorMessage: s,
        successMessage: i,
        nextSteps: c,
        closeLabel: f
      }
    )
  ] });
}
const ua = Ge(
  null
), fa = ({ children: a, fullScreen: l = !0 }) => {
  const t = W(null), [r, o] = h(t.current);
  return Ve(() => {
    o(t.current);
  }, []), /* @__PURE__ */ e(ua.Provider, { value: { element: r }, children: /* @__PURE__ */ e(
    "div",
    {
      ref: t,
      id: "factorial-one-layout",
      className: g({
        "flex h-screen w-screen flex-col bg-[#F5F6F8] dark:bg-[#0D1625]": l
      }),
      children: a
    }
  ) });
}, ma = ({
  children: a
}) => /* @__PURE__ */ e(ze, { reducedMotion: "user", children: a }), Da = ({
  children: a,
  layout: l,
  link: t,
  privacyModeInitiallyEnabled: r,
  image: o,
  i18n: s,
  l10n: i
}) => /* @__PURE__ */ e(ma, { children: /* @__PURE__ */ e(Ie, { children: /* @__PURE__ */ e(Se, { ...i, children: /* @__PURE__ */ e(De, { ...s, children: /* @__PURE__ */ e(Fe, { ...t, children: /* @__PURE__ */ e(fa, { ...l, children: /* @__PURE__ */ e(_e, { children: /* @__PURE__ */ e(
  Ee,
  {
    initiallyEnabled: r,
    children: /* @__PURE__ */ e(Oe, { ...o, children: a })
  }
) }) }) }) }) }) }) });
export {
  ba as AreaChart,
  Na as BarChart,
  b as Button,
  ya as CategoryBarChart,
  Ea as CopyButton,
  Oa as EmojiImage,
  Da as FactorialOneProvider,
  Ra as HomeLayout,
  za as Icon,
  Ca as LineChart,
  xa as Link,
  wa as PieChart,
  Ee as PrivacyModeProvider,
  ee as ProductBlankslate,
  Va as ProductCard,
  Ba as ProductModal,
  Ia as ProductWidget,
  La as ProgressBarChart,
  ka as StandardLayout,
  $a as TwoColumnLayout,
  S as UpsellRequestResponseDialog,
  Sa as UpsellingButton,
  Pa as VerticalBarChart,
  Ta as buildTranslations,
  ja as getEmojiLabel,
  Ha as useEmojiConfetti,
  Xa as usePrivacyMode,
  Ga as useReducedMotion,
  Ua as useXRay
};
