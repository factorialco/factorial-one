import { C as h, L as ee, c as ae, P as E, a as x, f as re, b as le, A as se, B as te, d as oe, e as ne, g as ie, V as de, h as O, i as ce, j as ue, M as _, I as fe, F as he, D as me, k as pe, l as ve, m as ge, n as S, S as xe, o as be, p as v, U as ye, q as Ce, r as we, s as $, t as Ne, u as z, v as Le, w as Pe, x as Se, y as ke, z as Me, E as Re, G as De, H as Be, X as Te, J as $e, K as Ie, N as Fe, O as je } from "./imageHandler-DmLHqxUR.js";
import { W as Ra, Q as Da, a0 as Ba, T as Ta, R as $a, Z as Ia, a1 as Fa, a2 as ja, Y as Ea, $ as Oa, _ as _a } from "./imageHandler-DmLHqxUR.js";
import { jsx as e, jsxs as n, Fragment as V } from "react/jsx-runtime";
import * as k from "react";
import Ee, { forwardRef as M, useRef as q, useImperativeHandle as Oe, Children as _e, useState as g, useEffect as H, createContext as ze } from "react";
const ua = {
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
}, fa = h(
  {
    name: "Link",
    type: "info"
  },
  ee
);
var R = "Progress", D = 100, [Ve, ha] = ae(R), [qe, He] = Ve(R), W = k.forwardRef(
  (a, l) => {
    const {
      __scopeProgress: s,
      value: r = null,
      max: t,
      getValueLabel: i = We,
      ...o
    } = a;
    (t || t === 0) && !I(t) && console.error(Ye(`${t}`, "Progress"));
    const d = I(t) ? t : D;
    r !== null && !F(r, d) && console.error(Ge(`${r}`, "Progress"));
    const c = F(r, d) ? r : null, m = N(c) ? i(c, d) : void 0;
    return /* @__PURE__ */ e(qe, { scope: s, value: c, max: d, children: /* @__PURE__ */ e(
      E.div,
      {
        "aria-valuemax": d,
        "aria-valuemin": 0,
        "aria-valuenow": N(c) ? c : void 0,
        "aria-valuetext": m,
        role: "progressbar",
        "data-state": X(c, d),
        "data-value": c ?? void 0,
        "data-max": d,
        ...o,
        ref: l
      }
    ) });
  }
);
W.displayName = R;
var Y = "ProgressIndicator", G = k.forwardRef(
  (a, l) => {
    const { __scopeProgress: s, ...r } = a, t = He(Y, s);
    return /* @__PURE__ */ e(
      E.div,
      {
        "data-state": X(t.value, t.max),
        "data-value": t.value ?? void 0,
        "data-max": t.max,
        ...r,
        ref: l
      }
    );
  }
);
G.displayName = Y;
function We(a, l) {
  return `${Math.round(a / l * 100)}%`;
}
function X(a, l) {
  return a == null ? "indeterminate" : a === l ? "complete" : "loading";
}
function N(a) {
  return typeof a == "number";
}
function I(a) {
  return N(a) && !isNaN(a) && a > 0;
}
function F(a, l) {
  return N(a) && !isNaN(a) && a <= l && a >= 0;
}
function Ye(a, l) {
  return `Invalid prop \`max\` of value \`${a}\` supplied to \`${l}\`. Only numbers greater than 0 are valid max values. Defaulting to \`${D}\`.`;
}
function Ge(a, l) {
  return `Invalid prop \`value\` of value \`${a}\` supplied to \`${l}\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or ${D} if no \`max\` prop is set)
  - \`null\` or \`undefined\` if the progress is indeterminate.

Defaulting to \`null\`.`;
}
var J = W, Xe = G;
const Q = k.forwardRef(({ className: a, value: l, ...s }, r) => /* @__PURE__ */ e(
  J,
  {
    ref: r,
    className: x(
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
          transform: `translateX(-${100 - (l || 0)}%)`
        }
      }
    )
  }
));
Q.displayName = J.displayName;
const Je = ({ value: a, max: l = 100, label: s, color: r }, t) => {
  const i = r || le(0), o = a / l * 100;
  return /* @__PURE__ */ n("div", { className: "flex items-center space-x-2", "aria-live": "polite", children: [
    /* @__PURE__ */ e("div", { className: "flex-grow", children: /* @__PURE__ */ e(
      Q,
      {
        color: i,
        value: o,
        className: "w-full",
        "aria-valuemin": 0,
        "aria-valuemax": l,
        "aria-valuenow": a,
        "aria-label": `${o.toFixed(1)}%`
      }
    ) }),
    s && /* @__PURE__ */ e("div", { className: "flex-shrink-0 text-sm font-medium", children: s })
  ] });
}, Qe = re(Je), ma = h(
  {
    name: "AreaChart",
    type: "info"
  },
  se
), pa = h(
  {
    name: "BarChart",
    type: "info"
  },
  te
), va = h(
  {
    name: "CategoryBarChart",
    type: "info"
  },
  oe
), ga = h(
  {
    name: "LineChart",
    type: "info"
  },
  ne
), xa = h(
  {
    name: "PieChart",
    type: "info"
  },
  ie
), ba = h(
  {
    name: "VerticalBarChart",
    type: "info"
  },
  de
), ya = h(
  {
    name: "ProgressBarChart",
    type: "info"
  },
  Qe
), Ke = {
  xs: 1,
  sm: 2,
  md: 2,
  lg: 2
}, Ze = M(function({ widgets: l, children: s }, r) {
  const t = q(null);
  Oe(r, () => t.current);
  const i = _e.toArray(l).filter((o) => !!o).map((o, d) => /* @__PURE__ */ e("div", { className: "h-full @5xl:h-auto [&>div]:h-full", children: o }, d));
  return /* @__PURE__ */ e(O, { layout: "home", children: /* @__PURE__ */ n("div", { ref: t, className: "@container", children: [
    /* @__PURE__ */ n("div", { className: "flex flex-col gap-6 px-5 pt-4 @md:pt-2 @5xl:hidden", children: [
      /* @__PURE__ */ e(ce, { columns: Ke, showArrows: !1, children: i }),
      /* @__PURE__ */ e("main", { children: s })
    ] }),
    /* @__PURE__ */ n("div", { className: "hidden grid-cols-3 gap-5 px-6 pb-6 pt-2 @5xl:grid", children: [
      /* @__PURE__ */ e("div", { className: "col-span-3 flex flex-row gap-5 *:flex-1", children: i.slice(0, 3) }),
      /* @__PURE__ */ e("main", { className: "col-span-2", children: s }),
      /* @__PURE__ */ e("div", { className: "flex flex-1 flex-col gap-5", children: i.slice(3) })
    ] })
  ] }) });
}), Ue = M(
  function({ children: l, sideContent: s, mainColumnPosition: r = "left" }, t) {
    return /* @__PURE__ */ e("div", { ref: t, className: "h-full overflow-auto", children: /* @__PURE__ */ n(
      "div",
      {
        className: x(
          "flex h-full overflow-auto text-f1-foreground sm:flex-row",
          r === "right" ? "flex-col" : "flex-col-reverse"
        ),
        children: [
          r === "right" && /* @__PURE__ */ e(j, { children: s }),
          /* @__PURE__ */ e(
            "main",
            {
              className: x(
                "h-fit min-h-full border-0 px-6 py-5 sm:basis-3/4 sm:border-solid",
                r === "right" ? "sm:border-l sm:border-l-f1-border-secondary" : "sm:border-r sm:border-r-f1-border-secondary"
              ),
              children: l
            }
          ),
          r === "left" && /* @__PURE__ */ e(j, { children: s })
        ]
      }
    ) });
  }
), j = ({ children: a }) => /* @__PURE__ */ e("aside", { className: "py-5 pl-2 pr-4 sm:basis-1/4 sm:pb-6", children: a }), Ae = ue({
  base: "relative flex min-h-full w-full flex-col gap-4 place-self-center overflow-y-auto px-6 py-5",
  variants: {
    variant: {
      narrow: "max-w-screen-lg"
    }
  }
}), K = Ee.forwardRef(({ children: a, variant: l, className: s, ...r }, t) => /* @__PURE__ */ e(O, { layout: "standard", children: /* @__PURE__ */ e(
  "section",
  {
    ref: t,
    className: x("relative flex-1 overflow-auto", s),
    ...r,
    children: /* @__PURE__ */ e("div", { className: x(Ae({ variant: l })), children: a })
  }
) }));
K.displayName = "StandardLayout";
const Ca = h(
  {
    name: "StandardLayout",
    type: "layout"
  },
  K
), wa = h(
  {
    name: "TwoColumnLayout",
    type: "layout"
  },
  Ue
), Na = h(
  {
    name: "HomeLayout",
    type: "layout"
  },
  Ze
), ea = ({ benefits: a }) => /* @__PURE__ */ e("div", { className: "flex flex-col gap-2", children: a.map((l, s) => /* @__PURE__ */ e(aa, { text: l }, s)) }), aa = ({ text: a }) => /* @__PURE__ */ n("div", { className: "flex flex-row items-start gap-2", children: [
  /* @__PURE__ */ e(fe, { icon: he, size: "md", className: "text-f1-icon-positive" }),
  /* @__PURE__ */ e("span", { children: a })
] }), Z = M(
  ({ title: a, image: l, benefits: s, actions: r, withShadow: t = !0, icon: i, moduleName: o }, d) => /* @__PURE__ */ n(
    "div",
    {
      ref: d,
      className: x(
        "bg-white flex flex-row rounded-xl border border-f1-border-secondary",
        t && "shadow-md"
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
                i && /* @__PURE__ */ e(_, { icon: i }),
                o && /* @__PURE__ */ e("p", { className: "text-base font-medium text-f1-foreground", children: o })
              ] }),
              /* @__PURE__ */ e("h2", { className: "font-bold text-xl text-f1-foreground", children: a })
            ] }),
            /* @__PURE__ */ e(ea, { benefits: s })
          ] }),
          r && /* @__PURE__ */ e("div", { className: "flex gap-3", children: r })
        ] })
      ]
    }
  )
);
Z.displayName = "ProductBlankslate";
function ra({
  isOpen: a,
  onClose: l,
  title: s,
  children: r,
  icon: t
}) {
  const [i, o] = g(a);
  return H(() => {
    o(a);
  }, [a]), /* @__PURE__ */ e(me, { open: i, onOpenChange: (c) => {
    o(c), c || l();
  }, modal: !0, children: /* @__PURE__ */ n(pe, { className: "max-h-[620px] w-[760px] overflow-y-auto overflow-x-hidden bg-f1-background", children: [
    /* @__PURE__ */ n("div", { className: "flex flex-row items-center justify-between px-4 py-4", children: [
      /* @__PURE__ */ n(ve, { className: "flex flex-row items-center gap-2 text-lg font-semibold text-f1-foreground", children: [
        t && /* @__PURE__ */ e(_, { icon: t, size: "lg" }),
        s
      ] }),
      /* @__PURE__ */ e(
        ge,
        {
          variant: "outline",
          icon: S,
          onClick: l,
          label: "Close modal",
          hideLabel: !0
        }
      )
    ] }),
    /* @__PURE__ */ n(xe, { className: "[*[data-state=visible]_div]:bg-f1-background flex max-h-[512px] flex-col", children: [
      r,
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
function La({
  isOpen: a,
  onClose: l,
  title: s,
  image: r,
  benefits: t,
  errorMessage: i,
  successMessage: o,
  loadingState: d,
  nextSteps: c,
  closeLabel: m,
  primaryAction: f,
  modalTitle: b,
  modalIcon: u,
  secondaryAction: p
}) {
  const [L, y] = g(a), [C, w] = g(null), [P, B] = g(!1), U = async () => {
    if (f != null && f.onClick) {
      B(!0);
      try {
        await f.onClick(), y(!1), w("success");
      } catch {
        w("error");
      } finally {
        B(!1);
      }
    }
  }, T = () => {
    y(!1), l == null || l();
  }, A = P;
  return /* @__PURE__ */ n(V, { children: [
    /* @__PURE__ */ e(
      ra,
      {
        isOpen: L,
        onClose: T,
        title: b,
        icon: u,
        children: /* @__PURE__ */ e("div", { className: "pb-4 pl-4", children: /* @__PURE__ */ e(
          Z,
          {
            title: s,
            image: r,
            benefits: t,
            withShadow: !1,
            actions: /* @__PURE__ */ n("div", { className: "flex gap-3", children: [
              f && /* @__PURE__ */ e(
                v,
                {
                  variant: f.variant,
                  label: A ? d.label : f.label,
                  icon: f.icon || void 0,
                  onClick: U,
                  loading: f.loading,
                  size: f.size
                }
              ),
              p && /* @__PURE__ */ e(
                v,
                {
                  onClick: p.onClick,
                  label: p.label,
                  variant: p.variant,
                  size: p.size,
                  icon: p.icon
                }
              )
            ] })
          }
        ) })
      }
    ),
    C && /* @__PURE__ */ e(
      ye,
      {
        open: !0,
        onClose: () => {
          T(), w(null);
        },
        success: C === "success",
        errorMessage: i,
        successMessage: o,
        nextSteps: c,
        closeLabel: m
      }
    )
  ] });
}
function la({
  mediaUrl: a,
  title: l,
  description: s,
  onClose: r,
  dismissible: t,
  width: i,
  trackVisibility: o,
  actions: d
}) {
  const [c, m] = g(!1), f = () => {
    m(!0), r && r();
  };
  H(() => {
    o && o(!c);
  }, [o, c]);
  const b = a == null ? void 0 : a.includes(".mp4");
  return /* @__PURE__ */ e(V, { children: c ? null : /* @__PURE__ */ n(Ce, { style: { width: i }, className: "relative bg-f1-background p-1", children: [
    /* @__PURE__ */ n(we, { children: [
      t && /* @__PURE__ */ e("div", { className: "absolute right-2 top-2 z-10", children: /* @__PURE__ */ e(
        v,
        {
          variant: "ghost",
          icon: S,
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
            alt: l,
            className: "h-full w-full rounded-md"
          }
        )) }),
        /* @__PURE__ */ n("div", { className: "flex flex-col gap-[2px] p-3", children: [
          /* @__PURE__ */ e($, { className: "text-lg font-medium", children: l }),
          /* @__PURE__ */ e($, { className: "line-clamp-3 text-base font-normal text-f1-foreground-secondary", children: s })
        ] })
      ] })
    ] }),
    d && /* @__PURE__ */ e(Ne, { className: "p-3", children: d.map(
      (u) => u.type === "upsell" ? /* @__PURE__ */ e(
        z,
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
        v,
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
function sa({
  title: a,
  subtitle: l,
  mediaUrl: s,
  primaryAction: r,
  secondaryAction: t,
  onClose: i
}) {
  const o = s == null ? void 0 : s.includes(".mp4"), [d, c] = g(!1), m = () => {
    i && i(), c(!0);
  };
  return d ? null : /* @__PURE__ */ n("div", { className: "bg-white relative flex w-full flex-col gap-4 rounded-xl border border-f1-border-secondary shadow-md sm:flex-row sm:gap-5", children: [
    /* @__PURE__ */ e("div", { className: "aspect-video w-full flex-shrink-0 overflow-hidden rounded-xl px-1 pb-0 pt-1 sm:max-w-80 sm:py-1 sm:pl-1", children: o ? /* @__PURE__ */ e(
      "video",
      {
        src: s,
        autoPlay: !0,
        muted: !0,
        loop: !0,
        className: "h-full w-full rounded-lg object-cover"
      }
    ) : /* @__PURE__ */ e(
      "img",
      {
        src: s,
        alt: "",
        className: "h-full w-full rounded-lg object-cover"
      }
    ) }),
    /* @__PURE__ */ n("div", { className: "flex flex-col justify-center gap-5 px-3 pb-3 sm:py-3 sm:pl-0 sm:pr-3", children: [
      /* @__PURE__ */ n("div", { className: "flex w-full flex-col gap-1 sm:max-w-lg", children: [
        /* @__PURE__ */ e("h3", { className: "font-bold text-xl text-f1-foreground", children: a }),
        l && /* @__PURE__ */ e("p", { className: "text-base text-f1-foreground-secondary", children: l })
      ] }),
      /* @__PURE__ */ n("div", { className: "flex gap-3", children: [
        r && r.variant === "promote" && /* @__PURE__ */ e(
          z,
          {
            label: r.label,
            onRequest: async () => {
              await r.onClick();
            },
            errorMessage: r.errorMessage,
            successMessage: r.successMessage,
            loadingState: r.loadingState,
            nextSteps: r.nextSteps,
            closeLabel: r.closeLabel,
            showIcon: r.showIcon,
            showConfirmation: r.showConfirmation,
            variant: r.variant
          }
        ),
        r && r.variant === "default" && /* @__PURE__ */ e(
          v,
          {
            onClick: r.onClick,
            label: r.label,
            variant: "default",
            size: "md"
          }
        ),
        t && /* @__PURE__ */ e(
          v,
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
      v,
      {
        variant: "ghost",
        icon: S,
        size: "sm",
        hideLabel: !0,
        onClick: m,
        label: "Close"
      }
    ) })
  ] });
}
sa.displayName = "UpsellingBanner";
function Pa({
  isOpen: a,
  setIsOpen: l,
  label: s,
  variant: r = "promote",
  size: t = "md",
  showIcon: i = !0,
  side: o = "right",
  align: d = "center",
  icon: c = Se,
  mediaUrl: m,
  title: f,
  description: b,
  width: u = "300px",
  trackVisibility: p,
  actions: L,
  onClick: y,
  hideLabel: C = !1
}) {
  return /* @__PURE__ */ n(Le, { open: a, onOpenChange: (P) => {
    l(P), y && y();
  }, children: [
    /* @__PURE__ */ e(Pe, { asChild: !0, children: /* @__PURE__ */ e(
      v,
      {
        variant: r,
        label: s,
        size: t,
        icon: i ? c : void 0,
        onClick: () => l(a),
        hideLabel: C
      }
    ) }),
    /* @__PURE__ */ e(
      ke,
      {
        side: o,
        align: d,
        className: "w-fit border-none bg-transparent p-2 shadow-none",
        children: /* @__PURE__ */ e(
          la,
          {
            mediaUrl: m,
            title: f,
            description: b,
            onClose: () => l(!1),
            dismissible: !1,
            width: u,
            trackVisibility: p,
            actions: L
          }
        )
      }
    )
  ] });
}
const ta = ze(
  null
), oa = ({ children: a, fullScreen: l = !0 }) => {
  const s = q(null), [r, t] = g(s.current);
  return je(() => {
    t(s.current);
  }, []), /* @__PURE__ */ e(ta.Provider, { value: { element: r }, children: /* @__PURE__ */ e(
    "div",
    {
      ref: s,
      id: "factorial-one-layout",
      className: x({
        "flex h-screen w-screen flex-col bg-[#F5F6F8] dark:bg-[#0D1625]": l
      }),
      children: a
    }
  ) });
}, na = ({
  children: a
}) => /* @__PURE__ */ e(Fe, { reducedMotion: "user", children: a }), Sa = ({
  children: a,
  layout: l,
  link: s,
  privacyModeInitiallyEnabled: r,
  image: t,
  i18n: i,
  l10n: o,
  isDev: d = !1
}) => /* @__PURE__ */ e(na, { children: /* @__PURE__ */ e(Me, { isDev: d, children: /* @__PURE__ */ e(Re, { ...o, children: /* @__PURE__ */ e(De, { ...i, children: /* @__PURE__ */ e(Be, { ...s, children: /* @__PURE__ */ e(oa, { ...l, children: /* @__PURE__ */ e(Te, { children: /* @__PURE__ */ e(
  $e,
  {
    initiallyEnabled: r,
    children: /* @__PURE__ */ e(Ie, { ...t, children: a })
  }
) }) }) }) }) }) }) });
export {
  ma as AreaChart,
  Ra as Await,
  pa as BarChart,
  v as Button,
  va as CategoryBarChart,
  Da as CopyButton,
  Ba as EmojiImage,
  Sa as FactorialOneProvider,
  Na as HomeLayout,
  Ta as Icon,
  ga as LineChart,
  fa as Link,
  xa as PieChart,
  $e as PrivacyModeProvider,
  Z as ProductBlankslate,
  $a as ProductCard,
  La as ProductModal,
  la as ProductWidget,
  ya as ProgressBarChart,
  Ca as StandardLayout,
  wa as TwoColumnLayout,
  ye as UpsellRequestResponseDialog,
  sa as UpsellingBanner,
  z as UpsellingButton,
  Pa as UpsellingPopover,
  ba as VerticalBarChart,
  Ia as buildTranslations,
  ua as defaultTranslations,
  Fa as getEmojiLabel,
  ja as useEmojiConfetti,
  Ea as usePrivacyMode,
  Oa as useReducedMotion,
  _a as useXRay
};
