import { C as p, L as ne, c as ie, P as V, a as b, f as de, b as ce, A as ue, B as fe, d as he, e as pe, g as me, V as ve, h as q, i as ge, j as xe, M as H, I as be, F as ye, D as Ce, k as we, l as Ne, m as Le, n as U, S as Pe, o as Se, p as C, U as W, q as Me, r as ke, s as O, t as Re, u as Y, v as Be, w as De, x as Te, y as $e, z as Ie, E as Fe, G as Ee, H as Oe, J as _e, X as je, K as ze, N as Ve, O as qe, Q as He } from "./experimental-Dp1FWhLU.js";
import { Z as Ea, R as Oa, a3 as _a, Y as ja, T as za, W as Va, a0 as qa, _ as Ha, a4 as Ua, a5 as Wa, $ as Ya, a2 as Ga, a1 as Xa } from "./experimental-Dp1FWhLU.js";
import { jsx as e, jsxs as d, Fragment as $ } from "react/jsx-runtime";
import * as I from "react";
import Ue, { forwardRef as D, useRef as G, useImperativeHandle as We, Children as Ye, useState as g, useEffect as X, createContext as Ge } from "react";
const xa = {
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
    cancel: "Cancel",
    failedToLoadOptions: "Failed to load options",
    retry: "Retry"
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
}, ba = p(
  {
    name: "Link",
    type: "info"
  },
  ne
);
var F = "Progress", E = 100, [Xe, ya] = ie(F), [Je, Qe] = Xe(F), J = I.forwardRef(
  (a, r) => {
    const {
      __scopeProgress: s,
      value: l = null,
      max: t,
      getValueLabel: c = Ke,
      ...n
    } = a;
    (t || t === 0) && !_(t) && console.error(Ze(`${t}`, "Progress"));
    const u = _(t) ? t : E;
    l !== null && !j(l, u) && console.error(Ae(`${l}`, "Progress"));
    const o = j(l, u) ? l : null, v = B(o) ? c(o, u) : void 0;
    return /* @__PURE__ */ e(Je, { scope: s, value: o, max: u, children: /* @__PURE__ */ e(
      V.div,
      {
        "aria-valuemax": u,
        "aria-valuemin": 0,
        "aria-valuenow": B(o) ? o : void 0,
        "aria-valuetext": v,
        role: "progressbar",
        "data-state": Z(o, u),
        "data-value": o ?? void 0,
        "data-max": u,
        ...n,
        ref: r
      }
    ) });
  }
);
J.displayName = F;
var Q = "ProgressIndicator", K = I.forwardRef(
  (a, r) => {
    const { __scopeProgress: s, ...l } = a, t = Qe(Q, s);
    return /* @__PURE__ */ e(
      V.div,
      {
        "data-state": Z(t.value, t.max),
        "data-value": t.value ?? void 0,
        "data-max": t.max,
        ...l,
        ref: r
      }
    );
  }
);
K.displayName = Q;
function Ke(a, r) {
  return `${Math.round(a / r * 100)}%`;
}
function Z(a, r) {
  return a == null ? "indeterminate" : a === r ? "complete" : "loading";
}
function B(a) {
  return typeof a == "number";
}
function _(a) {
  return B(a) && !isNaN(a) && a > 0;
}
function j(a, r) {
  return B(a) && !isNaN(a) && a <= r && a >= 0;
}
function Ze(a, r) {
  return `Invalid prop \`max\` of value \`${a}\` supplied to \`${r}\`. Only numbers greater than 0 are valid max values. Defaulting to \`${E}\`.`;
}
function Ae(a, r) {
  return `Invalid prop \`value\` of value \`${a}\` supplied to \`${r}\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or ${E} if no \`max\` prop is set)
  - \`null\` or \`undefined\` if the progress is indeterminate.

Defaulting to \`null\`.`;
}
var A = J, ea = K;
const ee = I.forwardRef(({ className: a, value: r, ...s }, l) => /* @__PURE__ */ e(
  A,
  {
    ref: l,
    className: b(
      "relative h-2 w-full overflow-hidden rounded-full bg-f1-background-secondary",
      a
    ),
    ...s,
    children: /* @__PURE__ */ e(
      ea,
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
ee.displayName = A.displayName;
const aa = ({ value: a, max: r = 100, label: s, color: l }, t) => {
  const c = l || ce(0), n = a / r * 100;
  return /* @__PURE__ */ d("div", { className: "flex items-center space-x-2", "aria-live": "polite", children: [
    /* @__PURE__ */ e("div", { className: "flex-grow", children: /* @__PURE__ */ e(
      ee,
      {
        color: c,
        value: n,
        className: "w-full",
        "aria-valuemin": 0,
        "aria-valuemax": r,
        "aria-valuenow": a,
        "aria-label": `${n.toFixed(1)}%`
      }
    ) }),
    s && /* @__PURE__ */ e("div", { className: "flex-shrink-0 text-sm font-medium", children: s })
  ] });
}, ra = de(aa), Ca = p(
  {
    name: "AreaChart",
    type: "info"
  },
  ue
), wa = p(
  {
    name: "BarChart",
    type: "info"
  },
  fe
), Na = p(
  {
    name: "CategoryBarChart",
    type: "info"
  },
  he
), La = p(
  {
    name: "LineChart",
    type: "info"
  },
  pe
), Pa = p(
  {
    name: "PieChart",
    type: "info"
  },
  me
), Sa = p(
  {
    name: "VerticalBarChart",
    type: "info"
  },
  ve
), Ma = p(
  {
    name: "ProgressBarChart",
    type: "info"
  },
  ra
), sa = {
  xs: 1,
  sm: 2,
  md: 2,
  lg: 2
}, la = D(function({ widgets: r, children: s }, l) {
  const t = G(null);
  We(l, () => t.current);
  const c = Ye.toArray(r).filter((n) => !!n).map((n, u) => /* @__PURE__ */ e("div", { className: "h-full @5xl:h-auto [&>div]:h-full", children: n }, u));
  return /* @__PURE__ */ e(q, { layout: "home", children: /* @__PURE__ */ d("div", { ref: t, className: "@container", children: [
    /* @__PURE__ */ d("div", { className: "flex flex-col gap-6 px-5 pt-4 @md:pt-2 @5xl:hidden", children: [
      /* @__PURE__ */ e(ge, { columns: sa, showArrows: !1, children: c }),
      /* @__PURE__ */ e("main", { children: s })
    ] }),
    /* @__PURE__ */ d("div", { className: "hidden grid-cols-3 gap-5 px-6 pb-6 pt-2 @5xl:grid", children: [
      /* @__PURE__ */ e("div", { className: "col-span-3 flex flex-row gap-5 *:flex-1", children: c.slice(0, 3) }),
      /* @__PURE__ */ e("main", { className: "col-span-2", children: s }),
      /* @__PURE__ */ e("div", { className: "flex flex-1 flex-col gap-5", children: c.slice(3) })
    ] })
  ] }) });
}), ta = D(
  function({ children: r, sideContent: s, mainColumnPosition: l = "left" }, t) {
    return /* @__PURE__ */ e("div", { ref: t, className: "h-full overflow-auto", children: /* @__PURE__ */ d(
      "div",
      {
        className: b(
          "flex h-full overflow-auto text-f1-foreground sm:flex-row",
          l === "right" ? "flex-col" : "flex-col-reverse"
        ),
        children: [
          l === "right" && /* @__PURE__ */ e(z, { children: s }),
          /* @__PURE__ */ e(
            "main",
            {
              className: b(
                "h-fit min-h-full border-0 px-6 py-5 sm:basis-3/4 sm:border-solid",
                l === "right" ? "sm:border-l sm:border-l-f1-border-secondary" : "sm:border-r sm:border-r-f1-border-secondary"
              ),
              children: r
            }
          ),
          l === "left" && /* @__PURE__ */ e(z, { children: s })
        ]
      }
    ) });
  }
), z = ({ children: a }) => /* @__PURE__ */ e("aside", { className: "py-5 pl-2 pr-4 sm:basis-1/4 sm:pb-6", children: a }), oa = xe({
  base: "relative flex min-h-full w-full flex-col gap-4 place-self-center overflow-y-auto px-6 py-5",
  variants: {
    variant: {
      narrow: "max-w-screen-lg"
    }
  }
}), ae = Ue.forwardRef(({ children: a, variant: r, className: s, ...l }, t) => /* @__PURE__ */ e(q, { layout: "standard", children: /* @__PURE__ */ e(
  "section",
  {
    ref: t,
    className: b("relative flex-1 overflow-auto", s),
    ...l,
    children: /* @__PURE__ */ e("div", { className: b(oa({ variant: r })), children: a })
  }
) }));
ae.displayName = "StandardLayout";
const ka = p(
  {
    name: "StandardLayout",
    type: "layout"
  },
  ae
), Ra = p(
  {
    name: "TwoColumnLayout",
    type: "layout"
  },
  ta
), Ba = p(
  {
    name: "HomeLayout",
    type: "layout"
  },
  la
), na = ({ benefits: a }) => /* @__PURE__ */ e("div", { className: "flex flex-col gap-2", children: a.map((r, s) => /* @__PURE__ */ e(ia, { text: r }, s)) }), ia = ({ text: a }) => /* @__PURE__ */ d("div", { className: "flex flex-row items-start gap-2", children: [
  /* @__PURE__ */ e(be, { icon: ye, size: "md", className: "text-f1-icon-positive" }),
  /* @__PURE__ */ e("span", { children: a })
] }), re = D(
  ({ title: a, image: r, benefits: s, actions: l, withShadow: t = !0, icon: c, moduleName: n }, u) => /* @__PURE__ */ d(
    "div",
    {
      ref: u,
      className: b(
        "bg-white flex flex-row rounded-xl border border-f1-border-secondary",
        t && "shadow-md"
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
        /* @__PURE__ */ d("div", { className: "flex flex-col justify-center gap-8 px-8 py-5", children: [
          /* @__PURE__ */ d("div", { className: "flex flex-col gap-5", children: [
            /* @__PURE__ */ d("div", { className: "flex flex-col gap-2", children: [
              /* @__PURE__ */ d("div", { className: "flex flex-row items-center gap-2", children: [
                c && /* @__PURE__ */ e(H, { icon: c }),
                n && /* @__PURE__ */ e("p", { className: "text-base font-medium text-f1-foreground", children: n })
              ] }),
              /* @__PURE__ */ e("h2", { className: "font-bold text-xl text-f1-foreground", children: a })
            ] }),
            /* @__PURE__ */ e(na, { benefits: s })
          ] }),
          l && /* @__PURE__ */ e("div", { className: "flex gap-3", children: l })
        ] })
      ]
    }
  )
);
re.displayName = "ProductBlankslate";
function da({
  isOpen: a,
  onClose: r,
  title: s,
  children: l,
  icon: t
}) {
  const [c, n] = g(a);
  return X(() => {
    n(a);
  }, [a]), /* @__PURE__ */ e(Ce, { open: c, onOpenChange: (o) => {
    n(o), o || r();
  }, modal: !0, children: /* @__PURE__ */ d(we, { className: "max-h-[620px] w-[760px] overflow-y-auto overflow-x-hidden bg-f1-background", children: [
    /* @__PURE__ */ d("div", { className: "flex flex-row items-center justify-between px-4 py-4", children: [
      /* @__PURE__ */ d(Ne, { className: "flex flex-row items-center gap-2 text-lg font-semibold text-f1-foreground", children: [
        t && /* @__PURE__ */ e(H, { icon: t, size: "lg" }),
        s
      ] }),
      /* @__PURE__ */ e(
        Le,
        {
          variant: "outline",
          icon: U,
          onClick: r,
          label: "Close modal",
          hideLabel: !0
        }
      )
    ] }),
    /* @__PURE__ */ d(Pe, { className: "[*[data-state=visible]_div]:bg-f1-background flex max-h-[512px] flex-col", children: [
      l,
      /* @__PURE__ */ e(
        Se,
        {
          orientation: "vertical",
          className: "[&_div]:bg-f1-background"
        }
      )
    ] })
  ] }) });
}
function Da({
  isOpen: a,
  onClose: r,
  title: s,
  image: l,
  benefits: t,
  errorMessage: c,
  successMessage: n,
  loadingState: u,
  nextSteps: o,
  closeLabel: v,
  primaryAction: f,
  modalTitle: w,
  modalIcon: N,
  secondaryAction: i,
  portalContainer: L
}) {
  const [S, M] = g(a), [k, x] = g(null), [R, y] = g(!1), m = async () => {
    if (f != null && f.onClick) {
      y(!0);
      try {
        await f.onClick(), M(!1), x("success");
      } catch {
        x("error");
      } finally {
        y(!1);
      }
    }
  }, P = () => {
    M(!1), r == null || r();
  }, T = R;
  return /* @__PURE__ */ d($, { children: [
    /* @__PURE__ */ e(
      da,
      {
        isOpen: S,
        onClose: P,
        title: w,
        icon: N,
        children: /* @__PURE__ */ e("div", { className: "pb-4 pl-4", children: /* @__PURE__ */ e(
          re,
          {
            title: s,
            image: l,
            benefits: t,
            withShadow: !1,
            actions: /* @__PURE__ */ d("div", { className: "flex gap-3", children: [
              f && /* @__PURE__ */ e(
                C,
                {
                  variant: f.variant,
                  label: T ? u.label : f.label,
                  icon: f.icon || void 0,
                  onClick: m,
                  loading: f.loading,
                  size: f.size
                }
              ),
              i && /* @__PURE__ */ e(
                C,
                {
                  onClick: i.onClick,
                  label: i.label,
                  variant: i.variant,
                  size: i.size,
                  icon: i.icon
                }
              )
            ] })
          }
        ) })
      }
    ),
    k && /* @__PURE__ */ e(
      W,
      {
        open: !0,
        onClose: () => {
          P(), x(null);
        },
        success: k === "success",
        errorMessage: c,
        successMessage: n,
        nextSteps: o,
        closeLabel: v,
        portalContainer: L
      }
    )
  ] });
}
function ca({
  mediaUrl: a,
  title: r,
  description: s,
  onClose: l,
  dismissible: t,
  width: c,
  trackVisibility: n,
  actions: u,
  showConfirmation: o = !0
}) {
  const [v, f] = g(!1), w = () => {
    f(!0), l && l();
  };
  X(() => {
    n && n(!v);
  }, [n, v]);
  const N = a == null ? void 0 : a.includes(".mp4");
  return /* @__PURE__ */ e($, { children: v ? null : /* @__PURE__ */ d(Me, { style: { width: c }, className: "relative bg-f1-background p-1", children: [
    /* @__PURE__ */ d(ke, { children: [
      t && /* @__PURE__ */ e("div", { className: "absolute right-2 top-2 z-10", children: /* @__PURE__ */ e(
        C,
        {
          variant: "ghost",
          icon: U,
          size: "sm",
          hideLabel: !0,
          onClick: w,
          label: "Close"
        }
      ) }),
      /* @__PURE__ */ d("div", { children: [
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
        /* @__PURE__ */ d("div", { className: "flex flex-col gap-[2px] p-3", children: [
          /* @__PURE__ */ e(O, { className: "text-lg font-medium", children: r }),
          /* @__PURE__ */ e(O, { className: "line-clamp-3 text-base font-normal text-f1-foreground-secondary", children: s })
        ] })
      ] })
    ] }),
    u && /* @__PURE__ */ e(Re, { className: "p-3", children: u.map(
      (i) => i.type === "upsell" ? /* @__PURE__ */ e(
        Y,
        {
          label: i.label,
          onRequest: i.onClick,
          errorMessage: i.errorMessage,
          successMessage: i.successMessage,
          loadingState: i.loadingState,
          nextSteps: i.nextSteps,
          closeLabel: i.closeLabel,
          showConfirmation: o && i.showConfirmation,
          variant: i.variant
        },
        i.label
      ) : /* @__PURE__ */ e(
        C,
        {
          label: i.label,
          onClick: i.onClick,
          variant: i.variant
        },
        i.label
      )
    ) })
  ] }) });
}
const ua = D(
  function({ primaryAction: r, secondaryAction: s, ...l }, t) {
    const c = (o) => o.variant === "promote" ? /* @__PURE__ */ e(
      Y,
      {
        label: o.label,
        onRequest: async () => {
          await o.onClick();
        },
        errorMessage: o.errorMessage,
        successMessage: o.successMessage,
        loadingState: o.loadingState,
        nextSteps: o.nextSteps,
        closeLabel: o.closeLabel,
        showIcon: o.showIcon,
        showConfirmation: o.showConfirmation,
        variant: o.variant
      }
    ) : /* @__PURE__ */ e(
      C,
      {
        onClick: o.onClick,
        label: o.label,
        variant: o.variant || "default",
        size: "md"
      }
    ), n = (r == null ? void 0 : r.variant) !== "promote" ? r : void 0, u = (s == null ? void 0 : s.variant) !== "promote" ? s : void 0;
    return /* @__PURE__ */ d(
      Be,
      {
        ref: t,
        ...l,
        primaryAction: n,
        secondaryAction: u,
        children: [
          (r == null ? void 0 : r.variant) === "promote" && c(r),
          (s == null ? void 0 : s.variant) === "promote" && c(s)
        ]
      }
    );
  }
);
ua.displayName = "UpsellingBanner";
function Ta({
  isOpen: a,
  setIsOpen: r,
  label: s,
  variant: l = "promote",
  size: t = "md",
  showIcon: c = !0,
  side: n = "right",
  align: u = "center",
  icon: o = $e,
  mediaUrl: v,
  title: f,
  description: w,
  width: N = "300px",
  trackVisibility: i,
  actions: L,
  onClick: S,
  hideLabel: M = !1
}) {
  const [k, x] = g(!1), [R, y] = g(null), [m, P] = g(null), T = (h) => {
    r(h), S && S();
  }, se = async (h) => {
    if (h.type === "upsell") {
      P(h);
      try {
        await h.onClick(), h.showConfirmation && (x(!0), y("success"));
      } catch {
        x(!0), y("error");
      }
    }
  }, le = () => {
    y(null), x(!1), P(null), r(!1);
  }, te = a && !k, oe = L == null ? void 0 : L.map((h) => h.type === "upsell" ? {
    ...h,
    onClick: () => se(h)
  } : h);
  return /* @__PURE__ */ d($, { children: [
    /* @__PURE__ */ d(De, { open: te, onOpenChange: T, children: [
      /* @__PURE__ */ e(Te, { asChild: !0, children: /* @__PURE__ */ e(
        C,
        {
          variant: l,
          label: s,
          size: t,
          icon: c ? o : void 0,
          onClick: () => r(a),
          hideLabel: M
        }
      ) }),
      /* @__PURE__ */ e(
        Ie,
        {
          side: n,
          align: u,
          className: "w-fit border-none bg-transparent p-2 shadow-none",
          children: /* @__PURE__ */ e(
            ca,
            {
              mediaUrl: v,
              title: f,
              description: w,
              onClose: () => r(!1),
              dismissible: !1,
              width: N,
              trackVisibility: i,
              actions: oe,
              showConfirmation: !1
            }
          )
        }
      )
    ] }),
    (m == null ? void 0 : m.type) === "upsell" && m.showConfirmation && R && /* @__PURE__ */ e(
      W,
      {
        open: !0,
        onClose: le,
        success: R === "success",
        errorMessage: m.errorMessage,
        successMessage: m.successMessage,
        nextSteps: m.nextSteps,
        closeLabel: m.closeLabel,
        portalContainer: null
      }
    )
  ] });
}
const fa = Ge(
  null
), ha = ({ children: a, fullScreen: r = !0 }) => {
  const s = G(null), [l, t] = g(s.current);
  return He(() => {
    t(s.current);
  }, []), /* @__PURE__ */ e(fa.Provider, { value: { element: l }, children: /* @__PURE__ */ e(
    "div",
    {
      ref: s,
      id: "factorial-one-layout",
      className: b({
        "flex h-screen w-screen flex-col bg-[#F5F6F8] dark:bg-[#0D1625]": r
      }),
      children: a
    }
  ) });
}, pa = ({
  children: a
}) => /* @__PURE__ */ e(qe, { reducedMotion: "user", children: a }), $a = ({
  children: a,
  layout: r,
  link: s,
  privacyModeInitiallyEnabled: l,
  image: t,
  i18n: c,
  l10n: n,
  isDev: u = !1,
  showExperimentalWarnings: o = !1
}) => /* @__PURE__ */ e(pa, { children: /* @__PURE__ */ e(
  Fe,
  {
    isDev: u,
    showExperimentalWarnings: o,
    children: /* @__PURE__ */ e(Ee, { ...n, children: /* @__PURE__ */ e(Oe, { ...c, children: /* @__PURE__ */ e(_e, { ...s, children: /* @__PURE__ */ e(ha, { ...r, children: /* @__PURE__ */ e(je, { children: /* @__PURE__ */ e(
      ze,
      {
        initiallyEnabled: l,
        children: /* @__PURE__ */ e(Ve, { ...t, children: a })
      }
    ) }) }) }) }) })
  }
) });
export {
  Ca as AreaChart,
  Ea as Await,
  wa as BarChart,
  C as Button,
  Na as CategoryBarChart,
  Oa as CopyButton,
  _a as EmojiImage,
  $a as FactorialOneProvider,
  Ba as HomeLayout,
  ja as Icon,
  La as LineChart,
  ba as Link,
  za as OneFilterPicker,
  Pa as PieChart,
  ze as PrivacyModeProvider,
  re as ProductBlankslate,
  Va as ProductCard,
  Da as ProductModal,
  ca as ProductWidget,
  Ma as ProgressBarChart,
  ka as StandardLayout,
  Ra as TwoColumnLayout,
  W as UpsellRequestResponseDialog,
  ua as UpsellingBanner,
  Y as UpsellingButton,
  Ta as UpsellingPopover,
  Sa as VerticalBarChart,
  qa as buildTranslations,
  xa as defaultTranslations,
  Ha as experimental,
  Ua as getEmojiLabel,
  Wa as useEmojiConfetti,
  Ya as usePrivacyMode,
  Ga as useReducedMotion,
  Xa as useXRay
};
