import { C as g, L as de, c as ce, P as q, a as N, f as ue, b as fe, A as he, B as me, d as pe, e as ge, g as ve, V as xe, h as H, i as be, j as we, M as W, I as ye, F as Ne, D as Ce, k as Le, l as Pe, m as Se, n as $, S as ke, o as Me, p as x, U as Y, q as Re, r as Be, s as z, t as De, u as G, w as Te, v as y, x as $e, y as Ie, z as Fe, E as je, G as Ee, H as ze, J as Oe, K as _e, X as Ve, N as qe, O as He, Q as We, R as Ye } from "./imageHandler-BUC9XNPS.js";
import { Z as Oa, T as _a, a3 as Va, Y as qa, W as Ha, a0 as Wa, _ as Ya, a4 as Ga, a5 as Xa, $ as Ja, a2 as Ua, a1 as Qa } from "./imageHandler-BUC9XNPS.js";
import { jsx as e, jsxs as o, Fragment as I } from "react/jsx-runtime";
import * as F from "react";
import Ge, { forwardRef as R, useRef as X, useImperativeHandle as Xe, Children as Je, useState as v, useEffect as J, createContext as Ue } from "react";
const ya = {
  approvals: {
    history: "Approval history",
    statuses: {
      waiting: "Waiting",
      pending: "Pending",
      approved: "Approved",
      rejected: "Rejected"
    },
    requiredNumbers: {
      one: "One approval required",
      other: "{{count}} approvals required"
    }
  },
  navigation: {
    sidebar: "Main navigation",
    previous: "Previous",
    next: "Next"
  },
  actions: {
    add: "Add",
    edit: "Edit",
    save: "Save",
    cancel: "Cancel",
    copy: "Copy",
    showAll: "Show all",
    showLess: "Show less",
    skipToContent: "Skip to content",
    view: "View",
    unselect: "Unselect",
    search: "Search",
    clear: "Clear",
    more: "More",
    moveUp: "Move up",
    moveDown: "Move down"
  },
  status: {
    selected: {
      singular: "Selected",
      plural: "Selected"
    }
  },
  filters: {
    label: "Filters",
    applyFilters: "Apply filters",
    cancel: "Cancel"
  },
  collections: {
    sorting: {
      noSorting: "No sorting",
      toggleDirection: "Toggle sorting direction",
      sortBy: "Sort by"
    },
    grouping: {
      noGrouping: "No grouping",
      groupBy: "Group by",
      toggleDirection: "Toggle direction"
    },
    actions: {
      actions: "Actions"
    },
    visualizations: {
      table: "Table view",
      card: "Card view",
      list: "List view",
      pagination: {
        of: "of"
      }
    },
    filters: {
      failedToLoadOptions: "Failed to load options",
      retry: "Retry"
    },
    itemsCount: "items",
    emptyStates: {
      noData: {
        title: "No data",
        description: "No data available"
      },
      noResults: {
        title: "No results",
        description: "No results found try another search or clear the filters",
        clearFilters: "Clear filters"
      },
      error: {
        title: "Error",
        description: "An error occurred while loading the data",
        retry: "Retry"
      }
    },
    summaries: {
      types: {
        sum: "sum"
      }
    }
  },
  shortcut: "Shortcut",
  date: {
    from: "From",
    to: "To",
    none: "None",
    date: "Date",
    custom: "Custom period",
    selectDate: "Select Date",
    compareTo: "Compare to",
    presets: {
      last7Days: "Last 7 days",
      last30Days: "Last 30 days",
      last3Months: "Last 3 months",
      last6Months: "Last 6 months",
      lastYear: "Last year",
      last3Years: "Last 3 years",
      last100Years: "Last 100 years"
    },
    range: "Range",
    selectedBy: "Selected by",
    groups: {
      today: "Today",
      yesterday: "Yesterday",
      lastWeek: "Last week",
      lastMonth: "Last month",
      other: "Other"
    },
    granularities: {
      day: {
        currentDate: "Today",
        label: "Day"
      },
      week: {
        currentDate: "This week",
        label: "Week"
      },
      month: {
        currentDate: "This month",
        label: "Month"
      },
      quarter: {
        currentDate: "This quarter",
        label: "Quarter"
      },
      halfyear: {
        currentDate: "This half year",
        label: "Half year"
      },
      year: {
        currentDate: "This year",
        label: "Year"
      },
      range: {
        currentDate: "Today",
        label: "Range"
      }
    },
    month: {
      january: "January",
      february: "February",
      march: "March",
      april: "April",
      may: "May",
      june: "June",
      july: "July",
      august: "August",
      september: "September",
      october: "October",
      november: "November",
      december: "December"
    }
  },
  favorites: {
    favorites: "Favorites",
    remove: "Remove favorite"
  },
  notifications: "Notifications"
}, Na = g(
  {
    name: "Link",
    type: "info"
  },
  de
);
var j = "Progress", E = 100, [Qe, Ca] = ce(j), [Ke, Ze] = Qe(j), U = F.forwardRef(
  (a, s) => {
    const {
      __scopeProgress: t,
      value: r = null,
      max: l,
      getValueLabel: i = Ae,
      ...n
    } = a;
    (l || l === 0) && !O(l) && console.error(ea(`${l}`, "Progress"));
    const c = O(l) ? l : E;
    r !== null && !_(r, c) && console.error(aa(`${r}`, "Progress"));
    const u = _(r, c) ? r : null, h = T(u) ? i(u, c) : void 0;
    return /* @__PURE__ */ e(Ke, { scope: t, value: u, max: c, children: /* @__PURE__ */ e(
      q.div,
      {
        "aria-valuemax": c,
        "aria-valuemin": 0,
        "aria-valuenow": T(u) ? u : void 0,
        "aria-valuetext": h,
        role: "progressbar",
        "data-state": Z(u, c),
        "data-value": u ?? void 0,
        "data-max": c,
        ...n,
        ref: s
      }
    ) });
  }
);
U.displayName = j;
var Q = "ProgressIndicator", K = F.forwardRef(
  (a, s) => {
    const { __scopeProgress: t, ...r } = a, l = Ze(Q, t);
    return /* @__PURE__ */ e(
      q.div,
      {
        "data-state": Z(l.value, l.max),
        "data-value": l.value ?? void 0,
        "data-max": l.max,
        ...r,
        ref: s
      }
    );
  }
);
K.displayName = Q;
function Ae(a, s) {
  return `${Math.round(a / s * 100)}%`;
}
function Z(a, s) {
  return a == null ? "indeterminate" : a === s ? "complete" : "loading";
}
function T(a) {
  return typeof a == "number";
}
function O(a) {
  return T(a) && !isNaN(a) && a > 0;
}
function _(a, s) {
  return T(a) && !isNaN(a) && a <= s && a >= 0;
}
function ea(a, s) {
  return `Invalid prop \`max\` of value \`${a}\` supplied to \`${s}\`. Only numbers greater than 0 are valid max values. Defaulting to \`${E}\`.`;
}
function aa(a, s) {
  return `Invalid prop \`value\` of value \`${a}\` supplied to \`${s}\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or ${E} if no \`max\` prop is set)
  - \`null\` or \`undefined\` if the progress is indeterminate.

Defaulting to \`null\`.`;
}
var A = U, sa = K;
const ee = F.forwardRef(({ className: a, value: s, ...t }, r) => /* @__PURE__ */ e(
  A,
  {
    ref: r,
    className: N(
      "relative h-2 w-full overflow-hidden rounded-full bg-f1-background-secondary",
      a
    ),
    ...t,
    children: /* @__PURE__ */ e(
      sa,
      {
        className: "h-full w-full flex-1 transition-all",
        style: {
          backgroundColor: t.color,
          transform: `translateX(-${100 - (s || 0)}%)`
        }
      }
    )
  }
));
ee.displayName = A.displayName;
const la = ({ value: a, max: s = 100, label: t, color: r }, l) => {
  const i = r || fe(0), n = a / s * 100;
  return /* @__PURE__ */ o("div", { className: "flex items-center space-x-2", "aria-live": "polite", children: [
    /* @__PURE__ */ e("div", { className: "flex-grow", children: /* @__PURE__ */ e(
      ee,
      {
        color: i,
        value: n,
        className: "w-full",
        "aria-valuemin": 0,
        "aria-valuemax": s,
        "aria-valuenow": a,
        "aria-label": `${n.toFixed(1)}%`
      }
    ) }),
    t && /* @__PURE__ */ e("div", { className: "flex-shrink-0 text-sm font-medium", children: t })
  ] });
}, ra = ue(la), La = g(
  {
    name: "AreaChart",
    type: "info"
  },
  he
), Pa = g(
  {
    name: "BarChart",
    type: "info"
  },
  me
), Sa = g(
  {
    name: "CategoryBarChart",
    type: "info"
  },
  pe
), ka = g(
  {
    name: "LineChart",
    type: "info"
  },
  ge
), Ma = g(
  {
    name: "PieChart",
    type: "info"
  },
  ve
), Ra = g(
  {
    name: "VerticalBarChart",
    type: "info"
  },
  xe
), Ba = g(
  {
    name: "ProgressBarChart",
    type: "info"
  },
  ra
), ta = {
  xs: 1,
  sm: 2,
  md: 2,
  lg: 2
}, oa = R(function({ widgets: s, children: t }, r) {
  const l = X(null);
  Xe(r, () => l.current);
  const i = Je.toArray(s).filter((n) => !!n).map((n, c) => /* @__PURE__ */ e("div", { className: "h-full @5xl:h-auto [&>div]:h-full", children: n }, c));
  return /* @__PURE__ */ e(H, { layout: "home", children: /* @__PURE__ */ o("div", { ref: l, className: "@container", children: [
    /* @__PURE__ */ o("div", { className: "flex flex-col gap-6 px-5 pt-4 @md:pt-2 @5xl:hidden", children: [
      /* @__PURE__ */ e(be, { columns: ta, showArrows: !1, children: i }),
      /* @__PURE__ */ e("main", { children: t })
    ] }),
    /* @__PURE__ */ o("div", { className: "hidden grid-cols-3 gap-5 px-6 pb-6 pt-2 @5xl:grid", children: [
      /* @__PURE__ */ e("div", { className: "col-span-3 flex flex-row gap-5 *:flex-1", children: i.slice(0, 3) }),
      /* @__PURE__ */ e("main", { className: "col-span-2", children: t }),
      /* @__PURE__ */ e("div", { className: "flex flex-1 flex-col gap-5", children: i.slice(3) })
    ] })
  ] }) });
}), na = R(
  function({ children: s, sideContent: t, mainColumnPosition: r = "left" }, l) {
    return /* @__PURE__ */ e("div", { ref: l, className: "h-full overflow-auto", children: /* @__PURE__ */ o(
      "div",
      {
        className: N(
          "flex h-full overflow-auto text-f1-foreground sm:flex-row",
          r === "right" ? "flex-col" : "flex-col-reverse"
        ),
        children: [
          r === "right" && /* @__PURE__ */ e(V, { children: t }),
          /* @__PURE__ */ e(
            "main",
            {
              className: N(
                "h-fit min-h-full border-0 px-6 py-5 sm:basis-3/4 sm:border-solid",
                r === "right" ? "sm:border-l sm:border-l-f1-border-secondary" : "sm:border-r sm:border-r-f1-border-secondary"
              ),
              children: s
            }
          ),
          r === "left" && /* @__PURE__ */ e(V, { children: t })
        ]
      }
    ) });
  }
), V = ({ children: a }) => /* @__PURE__ */ e("aside", { className: "py-5 pl-2 pr-4 sm:basis-1/4 sm:pb-6", children: a }), ia = we({
  base: "relative flex min-h-full w-full flex-col gap-4 place-self-center overflow-y-auto px-6 py-5",
  variants: {
    variant: {
      narrow: "max-w-screen-lg"
    }
  }
}), ae = Ge.forwardRef(({ children: a, variant: s, className: t, ...r }, l) => /* @__PURE__ */ e(H, { layout: "standard", children: /* @__PURE__ */ e(
  "section",
  {
    ref: l,
    className: N("relative flex-1 overflow-auto", t),
    ...r,
    children: /* @__PURE__ */ e("div", { className: N(ia({ variant: s })), children: a })
  }
) }));
ae.displayName = "StandardLayout";
const Da = g(
  {
    name: "StandardLayout",
    type: "layout"
  },
  ae
), Ta = g(
  {
    name: "TwoColumnLayout",
    type: "layout"
  },
  na
), $a = g(
  {
    name: "HomeLayout",
    type: "layout"
  },
  oa
), da = ({ benefits: a }) => /* @__PURE__ */ e("div", { className: "flex flex-col gap-2", children: a.map((s, t) => /* @__PURE__ */ e(ca, { text: s }, t)) }), ca = ({ text: a }) => /* @__PURE__ */ o("div", { className: "flex flex-row items-start gap-2", children: [
  /* @__PURE__ */ e(ye, { icon: Ne, size: "md", className: "text-f1-icon-positive" }),
  /* @__PURE__ */ e("span", { children: a })
] }), se = R(
  ({ title: a, image: s, benefits: t, actions: r, withShadow: l = !0, icon: i, moduleName: n }, c) => /* @__PURE__ */ o(
    "div",
    {
      ref: c,
      className: N(
        "bg-white flex flex-row rounded-xl border border-f1-border-secondary",
        l && "shadow-md"
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
        /* @__PURE__ */ o("div", { className: "flex flex-col justify-center gap-8 px-8 py-5", children: [
          /* @__PURE__ */ o("div", { className: "flex flex-col gap-5", children: [
            /* @__PURE__ */ o("div", { className: "flex flex-col gap-2", children: [
              /* @__PURE__ */ o("div", { className: "flex flex-row items-center gap-2", children: [
                i && /* @__PURE__ */ e(W, { icon: i }),
                n && /* @__PURE__ */ e("p", { className: "text-base font-medium text-f1-foreground", children: n })
              ] }),
              /* @__PURE__ */ e("h2", { className: "font-bold text-xl text-f1-foreground", children: a })
            ] }),
            /* @__PURE__ */ e(da, { benefits: t })
          ] }),
          r && /* @__PURE__ */ e("div", { className: "flex gap-3", children: r })
        ] })
      ]
    }
  )
);
se.displayName = "ProductBlankslate";
function ua({
  isOpen: a,
  onClose: s,
  title: t,
  children: r,
  icon: l
}) {
  const [i, n] = v(a);
  return J(() => {
    n(a);
  }, [a]), /* @__PURE__ */ e(Ce, { open: i, onOpenChange: (u) => {
    n(u), u || s();
  }, modal: !0, children: /* @__PURE__ */ o(Le, { className: "max-h-[620px] w-[760px] overflow-y-auto overflow-x-hidden bg-f1-background", children: [
    /* @__PURE__ */ o("div", { className: "flex flex-row items-center justify-between px-4 py-4", children: [
      /* @__PURE__ */ o(Pe, { className: "flex flex-row items-center gap-2 text-lg font-semibold text-f1-foreground", children: [
        l && /* @__PURE__ */ e(W, { icon: l, size: "lg" }),
        t
      ] }),
      /* @__PURE__ */ e(
        Se,
        {
          variant: "outline",
          icon: $,
          onClick: s,
          label: "Close modal",
          hideLabel: !0
        }
      )
    ] }),
    /* @__PURE__ */ o(ke, { className: "[*[data-state=visible]_div]:bg-f1-background flex max-h-[512px] flex-col", children: [
      r,
      /* @__PURE__ */ e(
        Me,
        {
          orientation: "vertical",
          className: "[&_div]:bg-f1-background"
        }
      )
    ] })
  ] }) });
}
function Ia({
  isOpen: a,
  onClose: s,
  title: t,
  image: r,
  benefits: l,
  errorMessage: i,
  successMessage: n,
  loadingState: c,
  nextSteps: u,
  closeLabel: h,
  primaryAction: f,
  modalTitle: b,
  modalIcon: w,
  secondaryAction: d
}) {
  const [C, L] = v(a), [B, P] = v(null), [S, k] = v(!1), M = async () => {
    if (f != null && f.onClick) {
      k(!0);
      try {
        await f.onClick(), L(!1), P("success");
      } catch {
        P("error");
      } finally {
        k(!1);
      }
    }
  }, m = () => {
    L(!1), s == null || s();
  }, D = S;
  return /* @__PURE__ */ o(I, { children: [
    /* @__PURE__ */ e(
      ua,
      {
        isOpen: C,
        onClose: m,
        title: b,
        icon: w,
        children: /* @__PURE__ */ e("div", { className: "pb-4 pl-4", children: /* @__PURE__ */ e(
          se,
          {
            title: t,
            image: r,
            benefits: l,
            withShadow: !1,
            actions: /* @__PURE__ */ o("div", { className: "flex gap-3", children: [
              f && /* @__PURE__ */ e(
                x,
                {
                  variant: f.variant,
                  label: D ? c.label : f.label,
                  icon: f.icon || void 0,
                  onClick: M,
                  loading: f.loading,
                  size: f.size
                }
              ),
              d && /* @__PURE__ */ e(
                x,
                {
                  onClick: d.onClick,
                  label: d.label,
                  variant: d.variant,
                  size: d.size,
                  icon: d.icon
                }
              )
            ] })
          }
        ) })
      }
    ),
    B && /* @__PURE__ */ e(
      Y,
      {
        open: !0,
        onClose: () => {
          m(), P(null);
        },
        success: B === "success",
        errorMessage: i,
        successMessage: n,
        nextSteps: u,
        closeLabel: h
      }
    )
  ] });
}
function fa({
  mediaUrl: a,
  title: s,
  description: t,
  onClose: r,
  dismissible: l,
  width: i,
  trackVisibility: n,
  actions: c,
  showConfirmation: u = !0
}) {
  const [h, f] = v(!1), b = () => {
    f(!0), r && r();
  };
  J(() => {
    n && n(!h);
  }, [n, h]);
  const w = a == null ? void 0 : a.includes(".mp4");
  return /* @__PURE__ */ e(I, { children: h ? null : /* @__PURE__ */ o(Re, { style: { width: i }, className: "relative bg-f1-background p-1", children: [
    /* @__PURE__ */ o(Be, { children: [
      l && /* @__PURE__ */ e("div", { className: "absolute right-2 top-2 z-10", children: /* @__PURE__ */ e(
        x,
        {
          variant: "ghost",
          icon: $,
          size: "sm",
          hideLabel: !0,
          onClick: b,
          label: "Close"
        }
      ) }),
      /* @__PURE__ */ o("div", { children: [
        /* @__PURE__ */ e("div", { children: a && (w ? /* @__PURE__ */ e(
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
        /* @__PURE__ */ o("div", { className: "flex flex-col gap-[2px] p-3", children: [
          /* @__PURE__ */ e(z, { className: "text-lg font-medium", children: s }),
          /* @__PURE__ */ e(z, { className: "line-clamp-3 text-base font-normal text-f1-foreground-secondary", children: t })
        ] })
      ] })
    ] }),
    c && /* @__PURE__ */ e(De, { className: "p-3", children: c.map(
      (d) => d.type === "upsell" ? /* @__PURE__ */ e(
        G,
        {
          label: d.label,
          onRequest: d.onClick,
          errorMessage: d.errorMessage,
          successMessage: d.successMessage,
          loadingState: d.loadingState,
          nextSteps: d.nextSteps,
          closeLabel: d.closeLabel,
          showConfirmation: u && d.showConfirmation,
          variant: d.variant
        },
        d.label
      ) : /* @__PURE__ */ e(
        x,
        {
          label: d.label,
          onClick: d.onClick,
          variant: d.variant
        },
        d.label
      )
    ) })
  ] }) });
}
const ha = R(function({
  title: s,
  subtitle: t,
  mediaUrl: r,
  primaryAction: l,
  secondaryAction: i,
  onClose: n,
  isLoading: c = !1
}, u) {
  const h = r == null ? void 0 : r.includes(".mp4"), [f, b] = v(!1), w = () => {
    n && n(), b(!0);
  };
  return c ? /* @__PURE__ */ e(le, { ref: u }) : f ? null : /* @__PURE__ */ o(
    "div",
    {
      ref: u,
      className: "bg-white relative flex w-full flex-col gap-4 rounded-xl border border-f1-border-secondary shadow-md sm:flex-row sm:gap-5",
      children: [
        /* @__PURE__ */ e("div", { className: "aspect-video w-full flex-shrink-0 overflow-hidden rounded-xl px-1 pb-0 pt-1 sm:max-w-80 sm:py-1 sm:pl-1", children: h ? /* @__PURE__ */ e(
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
        /* @__PURE__ */ o("div", { className: "flex flex-col justify-center gap-5 px-3 pb-3 sm:py-3 sm:pl-0 sm:pr-3", children: [
          /* @__PURE__ */ o("div", { className: "flex w-full flex-col gap-1 sm:max-w-lg", children: [
            /* @__PURE__ */ e("h3", { className: "font-bold text-xl text-f1-foreground", children: s }),
            t && /* @__PURE__ */ e("p", { className: "text-base text-f1-foreground-secondary", children: t })
          ] }),
          /* @__PURE__ */ o("div", { className: "flex gap-3", children: [
            l && l.variant === "promote" && /* @__PURE__ */ e(
              G,
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
              x,
              {
                onClick: l.onClick,
                label: l.label,
                variant: "default",
                size: "md"
              }
            ),
            i && /* @__PURE__ */ e(
              x,
              {
                onClick: i.onClick,
                label: i.label,
                variant: "outline",
                size: "md"
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ e("div", { className: "absolute right-2 top-2 z-10", children: /* @__PURE__ */ e(
          x,
          {
            variant: "ghost",
            icon: $,
            size: "sm",
            hideLabel: !0,
            onClick: w,
            label: "Close"
          }
        ) })
      ]
    }
  );
}), le = R(
  function(s, t) {
    return /* @__PURE__ */ o(
      "div",
      {
        ref: t,
        className: "bg-white relative flex w-full flex-col gap-4 rounded-xl border border-f1-border-secondary shadow-md sm:flex-row sm:gap-5",
        role: "status",
        "aria-busy": "true",
        "aria-live": "polite",
        ...s,
        children: [
          /* @__PURE__ */ e("div", { className: "aspect-video w-full flex-shrink-0 overflow-hidden rounded-xl px-1 pb-0 pt-1 sm:max-w-80 sm:py-1 sm:pl-1", children: /* @__PURE__ */ e(y, { className: "h-full w-full rounded-lg" }) }),
          /* @__PURE__ */ o("div", { className: "flex flex-col justify-center gap-5 px-3 pb-3 sm:py-3 sm:pl-0 sm:pr-3", children: [
            /* @__PURE__ */ o("div", { className: "flex w-full flex-col gap-1 sm:max-w-lg", children: [
              /* @__PURE__ */ e(y, { className: "h-7 w-3/4" }),
              /* @__PURE__ */ e(y, { className: "h-4 w-full" }),
              /* @__PURE__ */ e(y, { className: "h-4 w-2/3" })
            ] }),
            /* @__PURE__ */ o("div", { className: "flex gap-3", children: [
              /* @__PURE__ */ e(y, { className: "h-9 w-32" }),
              /* @__PURE__ */ e(y, { className: "h-9 w-24" })
            ] })
          ] }),
          /* @__PURE__ */ e("div", { className: "absolute right-2 top-2 z-10", children: /* @__PURE__ */ e(y, { className: "h-8 w-8 rounded-md" }) })
        ]
      }
    );
  }
), ma = Te(
  ha,
  le
);
ma.displayName = "UpsellingBanner";
function Fa({
  isOpen: a,
  setIsOpen: s,
  label: t,
  variant: r = "promote",
  size: l = "md",
  showIcon: i = !0,
  side: n = "right",
  align: c = "center",
  icon: u = Fe,
  mediaUrl: h,
  title: f,
  description: b,
  width: w = "300px",
  trackVisibility: d,
  actions: C,
  onClick: L,
  hideLabel: B = !1
}) {
  const [P, S] = v(!1), [k, M] = v(null), [m, D] = v(null), re = (p) => {
    s(p), L && L();
  }, te = async (p) => {
    if (p.type === "upsell") {
      D(p);
      try {
        await p.onClick(), p.showConfirmation && (S(!0), M("success"));
      } catch {
        S(!0), M("error");
      }
    }
  }, oe = () => {
    M(null), S(!1), D(null), s(!1);
  }, ne = a && !P, ie = C == null ? void 0 : C.map((p) => p.type === "upsell" ? {
    ...p,
    onClick: () => te(p)
  } : p);
  return /* @__PURE__ */ o(I, { children: [
    /* @__PURE__ */ o($e, { open: ne, onOpenChange: re, children: [
      /* @__PURE__ */ e(Ie, { asChild: !0, children: /* @__PURE__ */ e(
        x,
        {
          variant: r,
          label: t,
          size: l,
          icon: i ? u : void 0,
          onClick: () => s(a),
          hideLabel: B
        }
      ) }),
      /* @__PURE__ */ e(
        je,
        {
          side: n,
          align: c,
          className: "w-fit border-none bg-transparent p-2 shadow-none",
          children: /* @__PURE__ */ e(
            fa,
            {
              mediaUrl: h,
              title: f,
              description: b,
              onClose: () => s(!1),
              dismissible: !1,
              width: w,
              trackVisibility: d,
              actions: ie,
              showConfirmation: !1
            }
          )
        }
      )
    ] }),
    (m == null ? void 0 : m.type) === "upsell" && m.showConfirmation && k && /* @__PURE__ */ e(
      Y,
      {
        open: !0,
        onClose: oe,
        success: k === "success",
        errorMessage: m.errorMessage,
        successMessage: m.successMessage,
        nextSteps: m.nextSteps,
        closeLabel: m.closeLabel
      }
    )
  ] });
}
const pa = Ue(
  null
), ga = ({ children: a, fullScreen: s = !0 }) => {
  const t = X(null), [r, l] = v(t.current);
  return Ye(() => {
    l(t.current);
  }, []), /* @__PURE__ */ e(pa.Provider, { value: { element: r }, children: /* @__PURE__ */ e(
    "div",
    {
      ref: t,
      id: "factorial-one-layout",
      className: N({
        "flex h-screen w-screen flex-col bg-[#F5F6F8] dark:bg-[#0D1625]": s
      }),
      children: a
    }
  ) });
}, va = ({
  children: a
}) => /* @__PURE__ */ e(We, { reducedMotion: "user", children: a }), ja = ({
  children: a,
  layout: s,
  link: t,
  privacyModeInitiallyEnabled: r,
  image: l,
  i18n: i,
  l10n: n,
  isDev: c = !1
}) => /* @__PURE__ */ e(va, { children: /* @__PURE__ */ e(Ee, { isDev: c, children: /* @__PURE__ */ e(ze, { ...n, children: /* @__PURE__ */ e(Oe, { ...i, children: /* @__PURE__ */ e(_e, { ...t, children: /* @__PURE__ */ e(ga, { ...s, children: /* @__PURE__ */ e(Ve, { children: /* @__PURE__ */ e(
  qe,
  {
    initiallyEnabled: r,
    children: /* @__PURE__ */ e(He, { ...l, children: a })
  }
) }) }) }) }) }) }) });
export {
  La as AreaChart,
  Oa as Await,
  Pa as BarChart,
  x as Button,
  Sa as CategoryBarChart,
  _a as CopyButton,
  Va as EmojiImage,
  ja as FactorialOneProvider,
  $a as HomeLayout,
  qa as Icon,
  ka as LineChart,
  Na as Link,
  Ma as PieChart,
  qe as PrivacyModeProvider,
  se as ProductBlankslate,
  Ha as ProductCard,
  Ia as ProductModal,
  fa as ProductWidget,
  Ba as ProgressBarChart,
  Da as StandardLayout,
  Ta as TwoColumnLayout,
  Y as UpsellRequestResponseDialog,
  ma as UpsellingBanner,
  G as UpsellingButton,
  Fa as UpsellingPopover,
  Ra as VerticalBarChart,
  Wa as buildTranslations,
  Ya as categorizeItemsByDate,
  ya as defaultTranslations,
  Ga as getEmojiLabel,
  Xa as useEmojiConfetti,
  Ja as usePrivacyMode,
  Ua as useReducedMotion,
  Qa as useXRay
};
