import { C as g, L as ne, c as ie, P as V, a as b, f as de, b as ce, A as ue, B as fe, d as he, e as me, g as pe, V as ge, h as q, i as ve, j as xe, M as H, I as be, F as ye, D as Ce, k as we, l as Ne, m as Le, n as B, S as Pe, o as Se, p as x, U as W, q as Me, r as ke, s as E, t as Re, u as Y, v as De, w as Be, x as Te, y as $e, z as Ie, E as Fe, G as je, H as Ee, X as Oe, J as _e, K as ze, N as Ve, O as qe } from "./imageHandler-CdNnpvKc.js";
import { W as Fa, Q as ja, a0 as Ea, T as Oa, R as _a, Z as za, a1 as Va, a2 as qa, Y as Ha, $ as Wa, _ as Ya } from "./imageHandler-CdNnpvKc.js";
import { jsx as e, jsxs as o, Fragment as T } from "react/jsx-runtime";
import * as $ from "react";
import He, { forwardRef as I, useRef as G, useImperativeHandle as We, Children as Ye, useState as v, useEffect as X, createContext as Ge } from "react";
const va = {
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
}, xa = g(
  {
    name: "Link",
    type: "info"
  },
  ne
);
var F = "Progress", j = 100, [Xe, ba] = ie(F), [Je, Qe] = Xe(F), J = $.forwardRef(
  (a, r) => {
    const {
      __scopeProgress: l,
      value: s = null,
      max: t,
      getValueLabel: d = Ke,
      ...n
    } = a;
    (t || t === 0) && !O(t) && console.error(Ze(`${t}`, "Progress"));
    const c = O(t) ? t : j;
    s !== null && !_(s, c) && console.error(Ue(`${s}`, "Progress"));
    const u = _(s, c) ? s : null, h = D(u) ? d(u, c) : void 0;
    return /* @__PURE__ */ e(Je, { scope: l, value: u, max: c, children: /* @__PURE__ */ e(
      V.div,
      {
        "aria-valuemax": c,
        "aria-valuemin": 0,
        "aria-valuenow": D(u) ? u : void 0,
        "aria-valuetext": h,
        role: "progressbar",
        "data-state": Z(u, c),
        "data-value": u ?? void 0,
        "data-max": c,
        ...n,
        ref: r
      }
    ) });
  }
);
J.displayName = F;
var Q = "ProgressIndicator", K = $.forwardRef(
  (a, r) => {
    const { __scopeProgress: l, ...s } = a, t = Qe(Q, l);
    return /* @__PURE__ */ e(
      V.div,
      {
        "data-state": Z(t.value, t.max),
        "data-value": t.value ?? void 0,
        "data-max": t.max,
        ...s,
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
function D(a) {
  return typeof a == "number";
}
function O(a) {
  return D(a) && !isNaN(a) && a > 0;
}
function _(a, r) {
  return D(a) && !isNaN(a) && a <= r && a >= 0;
}
function Ze(a, r) {
  return `Invalid prop \`max\` of value \`${a}\` supplied to \`${r}\`. Only numbers greater than 0 are valid max values. Defaulting to \`${j}\`.`;
}
function Ue(a, r) {
  return `Invalid prop \`value\` of value \`${a}\` supplied to \`${r}\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or ${j} if no \`max\` prop is set)
  - \`null\` or \`undefined\` if the progress is indeterminate.

Defaulting to \`null\`.`;
}
var U = J, Ae = K;
const A = $.forwardRef(({ className: a, value: r, ...l }, s) => /* @__PURE__ */ e(
  U,
  {
    ref: s,
    className: b(
      "relative h-2 w-full overflow-hidden rounded-full bg-f1-background-secondary",
      a
    ),
    ...l,
    children: /* @__PURE__ */ e(
      Ae,
      {
        className: "h-full w-full flex-1 transition-all",
        style: {
          backgroundColor: l.color,
          transform: `translateX(-${100 - (r || 0)}%)`
        }
      }
    )
  }
));
A.displayName = U.displayName;
const ea = ({ value: a, max: r = 100, label: l, color: s }, t) => {
  const d = s || ce(0), n = a / r * 100;
  return /* @__PURE__ */ o("div", { className: "flex items-center space-x-2", "aria-live": "polite", children: [
    /* @__PURE__ */ e("div", { className: "flex-grow", children: /* @__PURE__ */ e(
      A,
      {
        color: d,
        value: n,
        className: "w-full",
        "aria-valuemin": 0,
        "aria-valuemax": r,
        "aria-valuenow": a,
        "aria-label": `${n.toFixed(1)}%`
      }
    ) }),
    l && /* @__PURE__ */ e("div", { className: "flex-shrink-0 text-sm font-medium", children: l })
  ] });
}, aa = de(ea), ya = g(
  {
    name: "AreaChart",
    type: "info"
  },
  ue
), Ca = g(
  {
    name: "BarChart",
    type: "info"
  },
  fe
), wa = g(
  {
    name: "CategoryBarChart",
    type: "info"
  },
  he
), Na = g(
  {
    name: "LineChart",
    type: "info"
  },
  me
), La = g(
  {
    name: "PieChart",
    type: "info"
  },
  pe
), Pa = g(
  {
    name: "VerticalBarChart",
    type: "info"
  },
  ge
), Sa = g(
  {
    name: "ProgressBarChart",
    type: "info"
  },
  aa
), sa = {
  xs: 1,
  sm: 2,
  md: 2,
  lg: 2
}, ra = I(function({ widgets: r, children: l }, s) {
  const t = G(null);
  We(s, () => t.current);
  const d = Ye.toArray(r).filter((n) => !!n).map((n, c) => /* @__PURE__ */ e("div", { className: "h-full @5xl:h-auto [&>div]:h-full", children: n }, c));
  return /* @__PURE__ */ e(q, { layout: "home", children: /* @__PURE__ */ o("div", { ref: t, className: "@container", children: [
    /* @__PURE__ */ o("div", { className: "flex flex-col gap-6 px-5 pt-4 @md:pt-2 @5xl:hidden", children: [
      /* @__PURE__ */ e(ve, { columns: sa, showArrows: !1, children: d }),
      /* @__PURE__ */ e("main", { children: l })
    ] }),
    /* @__PURE__ */ o("div", { className: "hidden grid-cols-3 gap-5 px-6 pb-6 pt-2 @5xl:grid", children: [
      /* @__PURE__ */ e("div", { className: "col-span-3 flex flex-row gap-5 *:flex-1", children: d.slice(0, 3) }),
      /* @__PURE__ */ e("main", { className: "col-span-2", children: l }),
      /* @__PURE__ */ e("div", { className: "flex flex-1 flex-col gap-5", children: d.slice(3) })
    ] })
  ] }) });
}), la = I(
  function({ children: r, sideContent: l, mainColumnPosition: s = "left" }, t) {
    return /* @__PURE__ */ e("div", { ref: t, className: "h-full overflow-auto", children: /* @__PURE__ */ o(
      "div",
      {
        className: b(
          "flex h-full overflow-auto text-f1-foreground sm:flex-row",
          s === "right" ? "flex-col" : "flex-col-reverse"
        ),
        children: [
          s === "right" && /* @__PURE__ */ e(z, { children: l }),
          /* @__PURE__ */ e(
            "main",
            {
              className: b(
                "h-fit min-h-full border-0 px-6 py-5 sm:basis-3/4 sm:border-solid",
                s === "right" ? "sm:border-l sm:border-l-f1-border-secondary" : "sm:border-r sm:border-r-f1-border-secondary"
              ),
              children: r
            }
          ),
          s === "left" && /* @__PURE__ */ e(z, { children: l })
        ]
      }
    ) });
  }
), z = ({ children: a }) => /* @__PURE__ */ e("aside", { className: "py-5 pl-2 pr-4 sm:basis-1/4 sm:pb-6", children: a }), ta = xe({
  base: "relative flex min-h-full w-full flex-col gap-4 place-self-center overflow-y-auto px-6 py-5",
  variants: {
    variant: {
      narrow: "max-w-screen-lg"
    }
  }
}), ee = He.forwardRef(({ children: a, variant: r, className: l, ...s }, t) => /* @__PURE__ */ e(q, { layout: "standard", children: /* @__PURE__ */ e(
  "section",
  {
    ref: t,
    className: b("relative flex-1 overflow-auto", l),
    ...s,
    children: /* @__PURE__ */ e("div", { className: b(ta({ variant: r })), children: a })
  }
) }));
ee.displayName = "StandardLayout";
const Ma = g(
  {
    name: "StandardLayout",
    type: "layout"
  },
  ee
), ka = g(
  {
    name: "TwoColumnLayout",
    type: "layout"
  },
  la
), Ra = g(
  {
    name: "HomeLayout",
    type: "layout"
  },
  ra
), oa = ({ benefits: a }) => /* @__PURE__ */ e("div", { className: "flex flex-col gap-2", children: a.map((r, l) => /* @__PURE__ */ e(na, { text: r }, l)) }), na = ({ text: a }) => /* @__PURE__ */ o("div", { className: "flex flex-row items-start gap-2", children: [
  /* @__PURE__ */ e(be, { icon: ye, size: "md", className: "text-f1-icon-positive" }),
  /* @__PURE__ */ e("span", { children: a })
] }), ae = I(
  ({ title: a, image: r, benefits: l, actions: s, withShadow: t = !0, icon: d, moduleName: n }, c) => /* @__PURE__ */ o(
    "div",
    {
      ref: c,
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
        /* @__PURE__ */ o("div", { className: "flex flex-col justify-center gap-8 px-8 py-5", children: [
          /* @__PURE__ */ o("div", { className: "flex flex-col gap-5", children: [
            /* @__PURE__ */ o("div", { className: "flex flex-col gap-2", children: [
              /* @__PURE__ */ o("div", { className: "flex flex-row items-center gap-2", children: [
                d && /* @__PURE__ */ e(H, { icon: d }),
                n && /* @__PURE__ */ e("p", { className: "text-base font-medium text-f1-foreground", children: n })
              ] }),
              /* @__PURE__ */ e("h2", { className: "font-bold text-xl text-f1-foreground", children: a })
            ] }),
            /* @__PURE__ */ e(oa, { benefits: l })
          ] }),
          s && /* @__PURE__ */ e("div", { className: "flex gap-3", children: s })
        ] })
      ]
    }
  )
);
ae.displayName = "ProductBlankslate";
function ia({
  isOpen: a,
  onClose: r,
  title: l,
  children: s,
  icon: t
}) {
  const [d, n] = v(a);
  return X(() => {
    n(a);
  }, [a]), /* @__PURE__ */ e(Ce, { open: d, onOpenChange: (u) => {
    n(u), u || r();
  }, modal: !0, children: /* @__PURE__ */ o(we, { className: "max-h-[620px] w-[760px] overflow-y-auto overflow-x-hidden bg-f1-background", children: [
    /* @__PURE__ */ o("div", { className: "flex flex-row items-center justify-between px-4 py-4", children: [
      /* @__PURE__ */ o(Ne, { className: "flex flex-row items-center gap-2 text-lg font-semibold text-f1-foreground", children: [
        t && /* @__PURE__ */ e(H, { icon: t, size: "lg" }),
        l
      ] }),
      /* @__PURE__ */ e(
        Le,
        {
          variant: "outline",
          icon: B,
          onClick: r,
          label: "Close modal",
          hideLabel: !0
        }
      )
    ] }),
    /* @__PURE__ */ o(Pe, { className: "[*[data-state=visible]_div]:bg-f1-background flex max-h-[512px] flex-col", children: [
      s,
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
  title: l,
  image: s,
  benefits: t,
  errorMessage: d,
  successMessage: n,
  loadingState: c,
  nextSteps: u,
  closeLabel: h,
  primaryAction: f,
  modalTitle: y,
  modalIcon: C,
  secondaryAction: i
}) {
  const [w, N] = v(a), [k, L] = v(null), [P, S] = v(!1), M = async () => {
    if (f != null && f.onClick) {
      S(!0);
      try {
        await f.onClick(), N(!1), L("success");
      } catch {
        L("error");
      } finally {
        S(!1);
      }
    }
  }, m = () => {
    N(!1), r == null || r();
  }, R = P;
  return /* @__PURE__ */ o(T, { children: [
    /* @__PURE__ */ e(
      ia,
      {
        isOpen: w,
        onClose: m,
        title: y,
        icon: C,
        children: /* @__PURE__ */ e("div", { className: "pb-4 pl-4", children: /* @__PURE__ */ e(
          ae,
          {
            title: l,
            image: s,
            benefits: t,
            withShadow: !1,
            actions: /* @__PURE__ */ o("div", { className: "flex gap-3", children: [
              f && /* @__PURE__ */ e(
                x,
                {
                  variant: f.variant,
                  label: R ? c.label : f.label,
                  icon: f.icon || void 0,
                  onClick: M,
                  loading: f.loading,
                  size: f.size
                }
              ),
              i && /* @__PURE__ */ e(
                x,
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
          m(), L(null);
        },
        success: k === "success",
        errorMessage: d,
        successMessage: n,
        nextSteps: u,
        closeLabel: h
      }
    )
  ] });
}
function da({
  mediaUrl: a,
  title: r,
  description: l,
  onClose: s,
  dismissible: t,
  width: d,
  trackVisibility: n,
  actions: c,
  showConfirmation: u = !0
}) {
  const [h, f] = v(!1), y = () => {
    f(!0), s && s();
  };
  X(() => {
    n && n(!h);
  }, [n, h]);
  const C = a == null ? void 0 : a.includes(".mp4");
  return /* @__PURE__ */ e(T, { children: h ? null : /* @__PURE__ */ o(Me, { style: { width: d }, className: "relative bg-f1-background p-1", children: [
    /* @__PURE__ */ o(ke, { children: [
      t && /* @__PURE__ */ e("div", { className: "absolute right-2 top-2 z-10", children: /* @__PURE__ */ e(
        x,
        {
          variant: "ghost",
          icon: B,
          size: "sm",
          hideLabel: !0,
          onClick: y,
          label: "Close"
        }
      ) }),
      /* @__PURE__ */ o("div", { children: [
        /* @__PURE__ */ e("div", { children: a && (C ? /* @__PURE__ */ e(
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
        /* @__PURE__ */ o("div", { className: "flex flex-col gap-[2px] p-3", children: [
          /* @__PURE__ */ e(E, { className: "text-lg font-medium", children: r }),
          /* @__PURE__ */ e(E, { className: "line-clamp-3 text-base font-normal text-f1-foreground-secondary", children: l })
        ] })
      ] })
    ] }),
    c && /* @__PURE__ */ e(Re, { className: "p-3", children: c.map(
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
          showConfirmation: u && i.showConfirmation,
          variant: i.variant
        },
        i.label
      ) : /* @__PURE__ */ e(
        x,
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
function ca({
  title: a,
  subtitle: r,
  mediaUrl: l,
  primaryAction: s,
  secondaryAction: t,
  onClose: d
}) {
  const n = l == null ? void 0 : l.includes(".mp4"), [c, u] = v(!1), h = () => {
    d && d(), u(!0);
  };
  return c ? null : /* @__PURE__ */ o("div", { className: "bg-white relative flex w-full flex-col gap-4 rounded-xl border border-f1-border-secondary shadow-md sm:flex-row sm:gap-5", children: [
    /* @__PURE__ */ e("div", { className: "aspect-video w-full flex-shrink-0 overflow-hidden rounded-xl px-1 pb-0 pt-1 sm:max-w-80 sm:py-1 sm:pl-1", children: n ? /* @__PURE__ */ e(
      "video",
      {
        src: l,
        autoPlay: !0,
        muted: !0,
        loop: !0,
        className: "h-full w-full rounded-lg object-cover"
      }
    ) : /* @__PURE__ */ e(
      "img",
      {
        src: l,
        alt: "",
        className: "h-full w-full rounded-lg object-cover"
      }
    ) }),
    /* @__PURE__ */ o("div", { className: "flex flex-col justify-center gap-5 px-3 pb-3 sm:py-3 sm:pl-0 sm:pr-3", children: [
      /* @__PURE__ */ o("div", { className: "flex w-full flex-col gap-1 sm:max-w-lg", children: [
        /* @__PURE__ */ e("h3", { className: "font-bold text-xl text-f1-foreground", children: a }),
        r && /* @__PURE__ */ e("p", { className: "text-base text-f1-foreground-secondary", children: r })
      ] }),
      /* @__PURE__ */ o("div", { className: "flex gap-3", children: [
        s && s.variant === "promote" && /* @__PURE__ */ e(
          Y,
          {
            label: s.label,
            onRequest: async () => {
              await s.onClick();
            },
            errorMessage: s.errorMessage,
            successMessage: s.successMessage,
            loadingState: s.loadingState,
            nextSteps: s.nextSteps,
            closeLabel: s.closeLabel,
            showIcon: s.showIcon,
            showConfirmation: s.showConfirmation,
            variant: s.variant
          }
        ),
        s && s.variant === "default" && /* @__PURE__ */ e(
          x,
          {
            onClick: s.onClick,
            label: s.label,
            variant: "default",
            size: "md"
          }
        ),
        t && /* @__PURE__ */ e(
          x,
          {
            onClick: t.onClick,
            label: t.label,
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
        icon: B,
        size: "sm",
        hideLabel: !0,
        onClick: h,
        label: "Close"
      }
    ) })
  ] });
}
ca.displayName = "UpsellingBanner";
function Ba({
  isOpen: a,
  setIsOpen: r,
  label: l,
  variant: s = "promote",
  size: t = "md",
  showIcon: d = !0,
  side: n = "right",
  align: c = "center",
  icon: u = Te,
  mediaUrl: h,
  title: f,
  description: y,
  width: C = "300px",
  trackVisibility: i,
  actions: w,
  onClick: N,
  hideLabel: k = !1
}) {
  const [L, P] = v(!1), [S, M] = v(null), [m, R] = v(null), se = (p) => {
    r(p), N && N();
  }, re = async (p) => {
    if (p.type === "upsell") {
      R(p);
      try {
        await p.onClick(), p.showConfirmation && (P(!0), M("success"));
      } catch {
        P(!0), M("error");
      }
    }
  }, le = () => {
    M(null), P(!1), R(null), r(!1);
  }, te = a && !L, oe = w == null ? void 0 : w.map((p) => p.type === "upsell" ? {
    ...p,
    onClick: () => re(p)
  } : p);
  return /* @__PURE__ */ o(T, { children: [
    /* @__PURE__ */ o(De, { open: te, onOpenChange: se, children: [
      /* @__PURE__ */ e(Be, { asChild: !0, children: /* @__PURE__ */ e(
        x,
        {
          variant: s,
          label: l,
          size: t,
          icon: d ? u : void 0,
          onClick: () => r(a),
          hideLabel: k
        }
      ) }),
      /* @__PURE__ */ e(
        $e,
        {
          side: n,
          align: c,
          className: "w-fit border-none bg-transparent p-2 shadow-none",
          children: /* @__PURE__ */ e(
            da,
            {
              mediaUrl: h,
              title: f,
              description: y,
              onClose: () => r(!1),
              dismissible: !1,
              width: C,
              trackVisibility: i,
              actions: oe,
              showConfirmation: !1
            }
          )
        }
      )
    ] }),
    (m == null ? void 0 : m.type) === "upsell" && m.showConfirmation && S && /* @__PURE__ */ e(
      W,
      {
        open: !0,
        onClose: le,
        success: S === "success",
        errorMessage: m.errorMessage,
        successMessage: m.successMessage,
        nextSteps: m.nextSteps,
        closeLabel: m.closeLabel
      }
    )
  ] });
}
const ua = Ge(
  null
), fa = ({ children: a, fullScreen: r = !0 }) => {
  const l = G(null), [s, t] = v(l.current);
  return qe(() => {
    t(l.current);
  }, []), /* @__PURE__ */ e(ua.Provider, { value: { element: s }, children: /* @__PURE__ */ e(
    "div",
    {
      ref: l,
      id: "factorial-one-layout",
      className: b({
        "flex h-screen w-screen flex-col bg-[#F5F6F8] dark:bg-[#0D1625]": r
      }),
      children: a
    }
  ) });
}, ha = ({
  children: a
}) => /* @__PURE__ */ e(Ve, { reducedMotion: "user", children: a }), Ta = ({
  children: a,
  layout: r,
  link: l,
  privacyModeInitiallyEnabled: s,
  image: t,
  i18n: d,
  l10n: n,
  isDev: c = !1
}) => /* @__PURE__ */ e(ha, { children: /* @__PURE__ */ e(Ie, { isDev: c, children: /* @__PURE__ */ e(Fe, { ...n, children: /* @__PURE__ */ e(je, { ...d, children: /* @__PURE__ */ e(Ee, { ...l, children: /* @__PURE__ */ e(fa, { ...r, children: /* @__PURE__ */ e(Oe, { children: /* @__PURE__ */ e(
  _e,
  {
    initiallyEnabled: s,
    children: /* @__PURE__ */ e(ze, { ...t, children: a })
  }
) }) }) }) }) }) }) });
export {
  ya as AreaChart,
  Fa as Await,
  Ca as BarChart,
  x as Button,
  wa as CategoryBarChart,
  ja as CopyButton,
  Ea as EmojiImage,
  Ta as FactorialOneProvider,
  Ra as HomeLayout,
  Oa as Icon,
  Na as LineChart,
  xa as Link,
  La as PieChart,
  _e as PrivacyModeProvider,
  ae as ProductBlankslate,
  _a as ProductCard,
  Da as ProductModal,
  da as ProductWidget,
  Sa as ProgressBarChart,
  Ma as StandardLayout,
  ka as TwoColumnLayout,
  W as UpsellRequestResponseDialog,
  ca as UpsellingBanner,
  Y as UpsellingButton,
  Ba as UpsellingPopover,
  Pa as VerticalBarChart,
  za as buildTranslations,
  va as defaultTranslations,
  Va as getEmojiLabel,
  qa as useEmojiConfetti,
  Ha as usePrivacyMode,
  Wa as useReducedMotion,
  Ya as useXRay
};
