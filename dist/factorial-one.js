import { C as u, L as W, c as q, P as k, a as h, f as Z, b as J, A as K, B as Q, d as Y, e as M, g as ee, V as ae, h as A, i as re, j as te, k as le, l as oe, m as x, F as ne, n as R, o as se, D as ie, p as de, q as ce, r as ue, s as F, t as fe, u as me, v as pe, S as he, w as ve, I as xe, x as ge, U as ye, y as Ne, z as be, E as Ce, X as we, G as Pe, H as Le, M as $e, J as Re } from "./imageHandler-CbEjq7UH.js";
import { K as ba, Y as Ca, O as wa, N as Pa, R as La, Z as $a, _ as Ra, Q as Ia, W as Ba, T as Da } from "./imageHandler-CbEjq7UH.js";
import { jsx as e, jsxs as i, Fragment as N } from "react/jsx-runtime";
import * as C from "react";
import Ie, { forwardRef as b, useRef as S, useImperativeHandle as Be, Children as De, useState as g, useEffect as ke, useCallback as Ae, createContext as Fe } from "react";
const Se = (a, r) => /* @__PURE__ */ e(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 25",
    ref: r,
    ...a,
    children: /* @__PURE__ */ e(
      "path",
      {
        fill: "currentColor",
        d: "M13.9999 5.50006C13.9999 5.06432 13.7178 4.67875 13.3025 4.54693C12.8871 4.41511 12.4343 4.5674 12.183 4.92339L6.18303 13.4233C5.9676 13.7285 5.94025 14.1284 6.11212 14.4601C6.28399 14.7918 6.62642 15 7 15H9.99997V19.5C9.99997 19.9246 10.2682 20.303 10.669 20.4436C11.0697 20.5841 11.5155 20.4563 11.7808 20.1246L17.7808 12.6247C18.0209 12.3245 18.0677 11.9133 17.9012 11.5668C17.7347 11.2204 17.3843 11 16.9999 11H13.9999V5.50006Z"
      }
    )
  }
), Ee = b(Se), la = u(
  {
    name: "Link",
    type: "info"
  },
  W
);
var w = "Progress", P = 100, [_e, oa] = q(w), [Ve, Te] = _e(w), E = C.forwardRef(
  (a, r) => {
    const {
      __scopeProgress: t,
      value: l = null,
      max: o,
      getValueLabel: n = Oe,
      ...s
    } = a;
    (o || o === 0) && !I(o) && console.error(He(`${o}`, "Progress"));
    const d = I(o) ? o : P;
    l !== null && !B(l, d) && console.error(ze(`${l}`, "Progress"));
    const c = B(l, d) ? l : null, f = y(c) ? n(c, d) : void 0;
    return /* @__PURE__ */ e(Ve, { scope: t, value: c, max: d, children: /* @__PURE__ */ e(
      k.div,
      {
        "aria-valuemax": d,
        "aria-valuemin": 0,
        "aria-valuenow": y(c) ? c : void 0,
        "aria-valuetext": f,
        role: "progressbar",
        "data-state": T(c, d),
        "data-value": c ?? void 0,
        "data-max": d,
        ...s,
        ref: r
      }
    ) });
  }
);
E.displayName = w;
var _ = "ProgressIndicator", V = C.forwardRef(
  (a, r) => {
    const { __scopeProgress: t, ...l } = a, o = Te(_, t);
    return /* @__PURE__ */ e(
      k.div,
      {
        "data-state": T(o.value, o.max),
        "data-value": o.value ?? void 0,
        "data-max": o.max,
        ...l,
        ref: r
      }
    );
  }
);
V.displayName = _;
function Oe(a, r) {
  return `${Math.round(a / r * 100)}%`;
}
function T(a, r) {
  return a == null ? "indeterminate" : a === r ? "complete" : "loading";
}
function y(a) {
  return typeof a == "number";
}
function I(a) {
  return y(a) && !isNaN(a) && a > 0;
}
function B(a, r) {
  return y(a) && !isNaN(a) && a <= r && a >= 0;
}
function He(a, r) {
  return `Invalid prop \`max\` of value \`${a}\` supplied to \`${r}\`. Only numbers greater than 0 are valid max values. Defaulting to \`${P}\`.`;
}
function ze(a, r) {
  return `Invalid prop \`value\` of value \`${a}\` supplied to \`${r}\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or ${P} if no \`max\` prop is set)
  - \`null\` or \`undefined\` if the progress is indeterminate.

Defaulting to \`null\`.`;
}
var O = E, je = V;
const H = C.forwardRef(({ className: a, value: r, ...t }, l) => /* @__PURE__ */ e(
  O,
  {
    ref: l,
    className: h(
      "relative h-2 w-full overflow-hidden rounded-full bg-f1-background-secondary",
      a
    ),
    ...t,
    children: /* @__PURE__ */ e(
      je,
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
H.displayName = O.displayName;
const Xe = ({ value: a, max: r = 100, label: t, color: l }, o) => {
  const n = l || J(0), s = a / r * 100;
  return /* @__PURE__ */ i("div", { className: "flex items-center space-x-2", "aria-live": "polite", children: [
    /* @__PURE__ */ e("div", { className: "flex-grow", children: /* @__PURE__ */ e(
      H,
      {
        color: n,
        value: s,
        className: "w-full",
        "aria-valuemin": 0,
        "aria-valuemax": r,
        "aria-valuenow": a,
        "aria-label": `${s.toFixed(1)}%`
      }
    ) }),
    t && /* @__PURE__ */ e("div", { className: "flex-shrink-0 text-sm font-medium", children: t })
  ] });
}, Ge = Z(Xe), na = u(
  {
    name: "AreaChart",
    type: "info"
  },
  K
), sa = u(
  {
    name: "BarChart",
    type: "info"
  },
  Q
), ia = u(
  {
    name: "CategoryBarChart",
    type: "info"
  },
  Y
), da = u(
  {
    name: "LineChart",
    type: "info"
  },
  M
), ca = u(
  {
    name: "PieChart",
    type: "info"
  },
  ee
), ua = u(
  {
    name: "VerticalBarChart",
    type: "info"
  },
  ae
), fa = u(
  {
    name: "ProgressBarChart",
    type: "info"
  },
  Ge
), Ue = {
  xs: 1,
  sm: 2,
  md: 2,
  lg: 2
}, We = b(function({ widgets: r, children: t }, l) {
  const o = S(null);
  Be(l, () => o.current);
  const n = De.toArray(r).filter((s) => !!s).map((s, d) => /* @__PURE__ */ e("div", { className: "h-full @5xl:h-auto [&>div]:h-full", children: s }, d));
  return /* @__PURE__ */ e(A, { layout: "home", children: /* @__PURE__ */ i("div", { ref: o, className: "@container", children: [
    /* @__PURE__ */ i("div", { className: "flex flex-col gap-6 px-5 pt-4 @md:pt-2 @5xl:hidden", children: [
      /* @__PURE__ */ e(re, { columns: Ue, showArrows: !1, children: n }),
      /* @__PURE__ */ e("main", { children: t })
    ] }),
    /* @__PURE__ */ i("div", { className: "hidden grid-cols-3 gap-5 px-6 pb-6 pt-2 @5xl:grid", children: [
      /* @__PURE__ */ e("div", { className: "col-span-3 flex flex-row gap-5 *:flex-1", children: n.slice(0, 3) }),
      /* @__PURE__ */ e("main", { className: "col-span-2", children: t }),
      /* @__PURE__ */ e("div", { className: "flex flex-1 flex-col gap-5", children: n.slice(3) })
    ] })
  ] }) });
}), qe = b(
  function({ children: r, sideContent: t, mainColumnPosition: l = "left" }, o) {
    return /* @__PURE__ */ e("div", { ref: o, className: "h-full overflow-auto", children: /* @__PURE__ */ i(
      "div",
      {
        className: h(
          "flex h-full overflow-auto text-f1-foreground sm:flex-row",
          l === "right" ? "flex-col" : "flex-col-reverse"
        ),
        children: [
          l === "right" && /* @__PURE__ */ e(D, { children: t }),
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
          l === "left" && /* @__PURE__ */ e(D, { children: t })
        ]
      }
    ) });
  }
), D = ({ children: a }) => /* @__PURE__ */ e("aside", { className: "py-5 pl-2 pr-4 sm:basis-1/4 sm:pb-6", children: a }), Ze = te({
  base: "relative flex min-h-full w-full flex-col gap-4 place-self-center overflow-y-auto px-6 py-5",
  variants: {
    variant: {
      narrow: "max-w-screen-lg"
    }
  }
}), z = Ie.forwardRef(({ children: a, variant: r, className: t, ...l }, o) => /* @__PURE__ */ e(A, { layout: "standard", children: /* @__PURE__ */ e(
  "section",
  {
    ref: o,
    className: h("relative flex-1 overflow-auto", t),
    ...l,
    children: /* @__PURE__ */ e("div", { className: h(Ze({ variant: r })), children: a })
  }
) }));
z.displayName = "StandardLayout";
const ma = u(
  {
    name: "StandardLayout",
    type: "layout"
  },
  z
), pa = u(
  {
    name: "TwoColumnLayout",
    type: "layout"
  },
  qe
), ha = u(
  {
    name: "HomeLayout",
    type: "layout"
  },
  We
);
function va({
  mediaUrl: a,
  title: r,
  description: t,
  buttonText: l,
  onClick: o,
  onClose: n,
  dismissible: s,
  width: d,
  trackVisibility: c
}) {
  const [f, m] = g(!1), p = () => {
    m(!0), n && n();
  };
  ke(() => {
    c && c(!f);
  }, [c, f]);
  const v = a == null ? void 0 : a.includes(".mp4");
  return /* @__PURE__ */ e(N, { children: f ? null : /* @__PURE__ */ i(le, { style: { width: d }, className: "relative bg-f1-background p-1", children: [
    /* @__PURE__ */ i(oe, { children: [
      s && /* @__PURE__ */ e("div", { className: "absolute right-2 top-2 z-10", children: /* @__PURE__ */ e(
        x,
        {
          variant: "ghost",
          icon: ne,
          size: "sm",
          hideLabel: !0,
          onClick: p,
          label: "Close"
        }
      ) }),
      /* @__PURE__ */ i("div", { children: [
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
            alt: r,
            className: "h-full w-full rounded-md"
          }
        ) }),
        /* @__PURE__ */ i("div", { className: "flex flex-col gap-[2px] p-3", children: [
          /* @__PURE__ */ e(R, { className: "text-lg font-medium", children: r }),
          /* @__PURE__ */ e(R, { className: "line-clamp-2 text-base font-normal text-f1-foreground-secondary", children: t })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ e(se, { className: "p-3", children: /* @__PURE__ */ e(
      x,
      {
        variant: "neutral",
        size: "sm",
        label: l,
        onClick: o
      }
    ) })
  ] }) });
}
const Je = ({ text: a, isCompleted: r }) => /* @__PURE__ */ i("div", { className: "flex flex-row items-center gap-2", children: [
  /* @__PURE__ */ e(
    xe,
    {
      className: r ? "text-f1-icon-positive" : "text-f1-icon-secondary",
      icon: r ? F : ge,
      size: "md"
    }
  ),
  /* @__PURE__ */ e(
    "span",
    {
      className: r ? "font-medium text-f1-foreground" : "text-f1-foreground-secondary",
      children: a
    }
  )
] }), Ke = ({ title: a, items: r }) => /* @__PURE__ */ i("div", { className: "px-4 pb-2", children: [
  /* @__PURE__ */ e("div", { className: "mb-2 text-sm text-f1-foreground-secondary", children: a }),
  /* @__PURE__ */ e("div", { className: "flex flex-col gap-2", children: r.map((t) => /* @__PURE__ */ e(
    Je,
    {
      text: t.text,
      isCompleted: t.isCompleted ?? !1
    },
    t.text
  )) })
] }), Qe = ({
  onClose: a,
  success: r,
  successButtonOnClick: t,
  successButtonLabel: l,
  closeLabel: o
}) => {
  const n = (s = !1) => /* @__PURE__ */ i(N, { children: [
    /* @__PURE__ */ e(
      x,
      {
        variant: "outline",
        label: o,
        onClick: a,
        size: s ? "lg" : void 0
      }
    ),
    r && /* @__PURE__ */ e(
      x,
      {
        variant: "promote",
        label: l,
        onClick: () => {
          t(), a == null || a();
        },
        size: s ? "lg" : void 0
      }
    )
  ] });
  return /* @__PURE__ */ i(ve, { className: "px-4 pb-4 pt-2 [&_div]:w-full", children: [
    /* @__PURE__ */ e("div", { className: "hidden sm:flex sm:flex-row sm:justify-between sm:gap-3", children: n() }),
    /* @__PURE__ */ e("div", { className: "flex flex-col-reverse gap-2 sm:hidden", children: n(!0) })
  ] });
}, j = b(
  ({
    open: a,
    onClose: r,
    success: t = !0,
    errorMessage: l,
    successMessage: o,
    nextSteps: n,
    closeLabel: s
  }, d) => {
    const [c, f] = g(!1), m = Ae(() => {
      f(!0), setTimeout(() => {
        r == null || r(), f(!1);
      }, 200);
    }, [r]);
    return /* @__PURE__ */ e(
      ie,
      {
        open: a && !c,
        onOpenChange: (p) => !p && (m == null ? void 0 : m()),
        children: /* @__PURE__ */ i(
          de,
          {
            ref: d,
            className: "bottom-3 top-auto max-w-[400px] translate-y-0 sm:bottom-auto sm:top-[50%] sm:translate-y-[-50%]",
            children: [
              /* @__PURE__ */ i(
                ce,
                {
                  className: `flex flex-col items-start gap-4 px-4 ${t ? "pt-5" : "py-5"}`,
                  children: [
                    /* @__PURE__ */ e(
                      ue,
                      {
                        type: t ? "positive" : "critical",
                        size: "lg",
                        icon: t ? F : fe
                      }
                    ),
                    /* @__PURE__ */ i("div", { className: "flex flex-col gap-0.5", children: [
                      /* @__PURE__ */ e(me, { className: "text-xl font-semibold sm:text-lg", children: t ? o == null ? void 0 : o.title : l == null ? void 0 : l.title }),
                      /* @__PURE__ */ e(pe, { className: "text-lg sm:text-base", children: t ? o == null ? void 0 : o.description : l == null ? void 0 : l.description })
                    ] })
                  ]
                }
              ),
              t ? /* @__PURE__ */ i(N, { children: [
                /* @__PURE__ */ e(he, {}),
                /* @__PURE__ */ e(Ke, { title: n.title, items: n.items })
              ] }) : null,
              /* @__PURE__ */ e(
                Qe,
                {
                  onClose: m,
                  success: t,
                  successButtonLabel: o.buttonLabel,
                  successButtonOnClick: o.buttonOnClick,
                  closeLabel: s
                }
              )
            ]
          }
        )
      }
    );
  }
);
j.displayName = "UpsellRequestResponseDialog";
function xa({
  label: a,
  showIcon: r = !0,
  onRequest: t,
  showConfirmation: l = !0,
  loading: o,
  errorMessage: n,
  successMessage: s,
  loadingState: d,
  nextSteps: c,
  closeLabel: f,
  ...m
}) {
  const [p, v] = g(null), [X, L] = g(!1), G = async () => {
    if (t) {
      L(!0);
      try {
        await t(), l && v("success");
      } catch {
        v("error");
      } finally {
        L(!1);
      }
    }
  }, $ = o || X, U = $ ? d.label : a;
  return /* @__PURE__ */ i(N, { children: [
    /* @__PURE__ */ e(
      x,
      {
        variant: "promote",
        label: U,
        icon: r ? Ee : void 0,
        onClick: G,
        loading: $,
        ...m
      }
    ),
    l && p && /* @__PURE__ */ e(
      j,
      {
        open: !0,
        onClose: () => v(null),
        success: p === "success",
        errorMessage: n,
        successMessage: s,
        nextSteps: c,
        closeLabel: f
      }
    )
  ] });
}
const Ye = Fe(
  null
), Me = ({ children: a, fullScreen: r = !0 }) => {
  const t = S(null), [l, o] = g(t.current);
  return Re(() => {
    o(t.current);
  }, []), /* @__PURE__ */ e(Ye.Provider, { value: { element: l }, children: /* @__PURE__ */ e(
    "div",
    {
      ref: t,
      id: "factorial-one-layout",
      className: h({
        "flex h-screen w-screen flex-col bg-[#F5F6F8] dark:bg-[#0D1625]": r
      }),
      children: a
    }
  ) });
}, ea = ({
  children: a
}) => /* @__PURE__ */ e($e, { reducedMotion: "user", children: a }), ga = ({
  children: a,
  layout: r,
  link: t,
  privacyModeInitiallyEnabled: l,
  image: o,
  i18n: n,
  l10n: s
}) => /* @__PURE__ */ e(ea, { children: /* @__PURE__ */ e(ye, { children: /* @__PURE__ */ e(Ne, { ...s, children: /* @__PURE__ */ e(be, { ...n, children: /* @__PURE__ */ e(Ce, { ...t, children: /* @__PURE__ */ e(Me, { ...r, children: /* @__PURE__ */ e(we, { children: /* @__PURE__ */ e(
  Pe,
  {
    initiallyEnabled: l,
    children: /* @__PURE__ */ e(Le, { ...o, children: a })
  }
) }) }) }) }) }) }) });
export {
  na as AreaChart,
  sa as BarChart,
  x as Button,
  ia as CategoryBarChart,
  ba as CopyButton,
  Ca as EmojiImage,
  ga as FactorialOneProvider,
  ha as HomeLayout,
  wa as Icon,
  da as LineChart,
  la as Link,
  ca as PieChart,
  Pe as PrivacyModeProvider,
  Pa as ProductCard,
  va as ProductWidget,
  fa as ProgressBarChart,
  ma as StandardLayout,
  pa as TwoColumnLayout,
  j as UpsellRequestResponseDialog,
  xa as UpsellingButton,
  ua as VerticalBarChart,
  La as buildTranslations,
  $a as getEmojiLabel,
  Ra as useEmojiConfetti,
  Ia as usePrivacyMode,
  Ba as useReducedMotion,
  Da as useXRay
};
