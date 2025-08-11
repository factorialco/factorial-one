import { C as m, L as ue, c as fe, P as q, a as x, f as pe, b as me, A as he, B as ge, d as ve, e as xe, g as be, V as ye, h as U, O as Ce, i as H, j as we, M as W, I as Y, F as Ne, D as Le, k as Pe, l as Se, m as Me, n as G, S as ke, o as Te, p as w, U as X, q as Re, r as De, s as E, t as Be, u as J, v as Ie, w as $e, x as Fe, y as Oe, z as Ee, E as _e, G as je, H as Ve, J as ze, X as qe, K as Ue, N as He, Q as We, R as Ye } from "./F0Card--d_ZYbZv.js";
import { $ as Ha, T as Wa, a5 as Ya, W as Ga, Y as Xa, Z as Ja, _ as Qa, a2 as Ka, a0 as Za, a6 as Aa, a7 as er, a1 as ar, a4 as rr, a3 as tr } from "./F0Card--d_ZYbZv.js";
import { jsx as e, jsxs as u, Fragment as I } from "react/jsx-runtime";
import * as $ from "react";
import Ge, { forwardRef as N, createElement as Xe, useRef as Q, useImperativeHandle as Je, Children as Qe, useState as v, useEffect as K, createContext as Ke } from "react";
const Pa = {
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
    close: "Close",
    showAll: "Show all",
    showLess: "Show less",
    skipToContent: "Skip to content",
    view: "View",
    unselect: "Unselect",
    search: "Search",
    clear: "Clear",
    more: "More",
    moveUp: "Move up",
    moveDown: "Move down",
    thumbsUp: "Like",
    thumbsDown: "Dislike",
    other: "Other actions",
    toggle: "Toggle"
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
  notifications: "Notifications",
  ai: {
    openChat: "Open Chat",
    description: "Chat with AI"
  }
}, Sa = m(
  {
    name: "Link",
    type: "info"
  },
  ue
);
var F = "Progress", O = 100, [Ze, Ma] = fe(F), [Ae, ea] = Ze(F), Z = $.forwardRef(
  (a, r) => {
    const {
      __scopeProgress: t,
      value: s = null,
      max: o,
      getValueLabel: n = aa,
      ...d
    } = a;
    (o || o === 0) && !_(o) && console.error(ra(`${o}`, "Progress"));
    const i = _(o) ? o : O;
    s !== null && !j(s, i) && console.error(ta(`${s}`, "Progress"));
    const l = j(s, i) ? s : null, f = D(l) ? n(l, i) : void 0;
    return /* @__PURE__ */ e(Ae, { scope: t, value: l, max: i, children: /* @__PURE__ */ e(
      q.div,
      {
        "aria-valuemax": i,
        "aria-valuemin": 0,
        "aria-valuenow": D(l) ? l : void 0,
        "aria-valuetext": f,
        role: "progressbar",
        "data-state": ae(l, i),
        "data-value": l ?? void 0,
        "data-max": i,
        ...d,
        ref: r
      }
    ) });
  }
);
Z.displayName = F;
var A = "ProgressIndicator", ee = $.forwardRef(
  (a, r) => {
    const { __scopeProgress: t, ...s } = a, o = ea(A, t);
    return /* @__PURE__ */ e(
      q.div,
      {
        "data-state": ae(o.value, o.max),
        "data-value": o.value ?? void 0,
        "data-max": o.max,
        ...s,
        ref: r
      }
    );
  }
);
ee.displayName = A;
function aa(a, r) {
  return `${Math.round(a / r * 100)}%`;
}
function ae(a, r) {
  return a == null ? "indeterminate" : a === r ? "complete" : "loading";
}
function D(a) {
  return typeof a == "number";
}
function _(a) {
  return D(a) && !isNaN(a) && a > 0;
}
function j(a, r) {
  return D(a) && !isNaN(a) && a <= r && a >= 0;
}
function ra(a, r) {
  return `Invalid prop \`max\` of value \`${a}\` supplied to \`${r}\`. Only numbers greater than 0 are valid max values. Defaulting to \`${O}\`.`;
}
function ta(a, r) {
  return `Invalid prop \`value\` of value \`${a}\` supplied to \`${r}\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or ${O} if no \`max\` prop is set)
  - \`null\` or \`undefined\` if the progress is indeterminate.

Defaulting to \`null\`.`;
}
var re = Z, sa = ee;
const te = $.forwardRef(({ className: a, value: r, ...t }, s) => /* @__PURE__ */ e(
  re,
  {
    ref: s,
    className: x(
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
          transform: `translateX(-${100 - (r || 0)}%)`
        }
      }
    )
  }
));
te.displayName = re.displayName;
const oa = ({ value: a, max: r = 100, label: t, color: s }, o) => {
  const n = s || me(0), d = a / r * 100;
  return /* @__PURE__ */ u("div", { className: "flex items-center space-x-2", "aria-live": "polite", children: [
    /* @__PURE__ */ e("div", { className: "flex-grow", children: /* @__PURE__ */ e(
      te,
      {
        color: n,
        value: d,
        className: "w-full",
        "aria-valuemin": 0,
        "aria-valuemax": r,
        "aria-valuenow": a,
        "aria-label": `${d.toFixed(1)}%`
      }
    ) }),
    t && /* @__PURE__ */ e("div", { className: "flex-shrink-0 text-sm font-medium", children: t })
  ] });
}, la = pe(oa), ka = m(
  {
    name: "AreaChart",
    type: "info"
  },
  he
), Ta = m(
  {
    name: "BarChart",
    type: "info"
  },
  ge
), Ra = m(
  {
    name: "CategoryBarChart",
    type: "info"
  },
  ve
), Da = m(
  {
    name: "LineChart",
    type: "info"
  },
  xe
), Ba = m(
  {
    name: "PieChart",
    type: "info"
  },
  be
), Ia = m(
  {
    name: "VerticalBarChart",
    type: "info"
  },
  ye
), $a = m(
  {
    name: "ProgressBarChart",
    type: "info"
  },
  la
), V = U({
  base: "text-base text-f1-foreground",
  variants: {
    variant: {
      // -- PUBLIC VARIANTS
      // Heading
      heading: "text-lg font-semibold",
      // Body
      body: "",
      description: "text-f1-foreground-secondary",
      small: "text-sm font-medium text-f1-foreground-secondary",
      inverse: "text-f1-foreground-inverse",
      code: "text-f1-foreground-secondary",
      // Label
      label: "font-medium",
      // -- PRIVATE VARIANTS
      // Heading
      "heading-large": "text-2xl font-semibold",
      // Label
      "label-input": "font-medium text-f1-foreground-secondary",
      // Semantic text
      selected: "font-medium text-f1-foreground-selected",
      warning: "text-f1-foreground-warning",
      critical: "text-f1-foreground-critical",
      positive: "text-f1-foreground-positive",
      info: "text-f1-foreground-info",
      "warning-strong": "font-semibold text-f1-foreground-warning",
      "critical-strong": "font-semibold text-f1-foreground-critical",
      "positive-strong": "font-semibold text-f1-foreground-positive",
      "info-strong": "font-semibold text-f1-foreground-info"
    },
    align: {
      left: "text-left",
      center: "text-center",
      right: "text-right"
    }
  },
  defaultVariants: {
    variant: "body",
    align: "left"
  }
}), na = {
  "heading-large": "h1",
  heading: "h2",
  body: "p",
  description: "p",
  label: "p",
  "label-input": "label",
  small: "p",
  selected: "p",
  inverse: "p",
  warning: "p",
  critical: "p",
  positive: "p",
  info: "p",
  "warning-strong": "p",
  "critical-strong": "p",
  "positive-strong": "p",
  "info-strong": "p",
  code: "code"
}, se = N(
  ({
    children: a,
    variant: r,
    align: t,
    className: s,
    as: o,
    ellipsis: n,
    noEllipsisTooltip: d,
    ...i
  }, l) => {
    const f = o ?? na[r ?? "body"];
    return n !== void 0 ? /* @__PURE__ */ e(
      Ce,
      {
        ref: l,
        lines: typeof n == "number" ? n : 1,
        noTooltip: d,
        tag: f,
        className: x(V({ variant: r, align: t }), s),
        ...i,
        children: a
      }
    ) : Xe(
      f,
      {
        ...i,
        className: x(V({ variant: r, align: t }), s),
        ref: l
      },
      a
    );
  }
);
se.displayName = "TextInternal";
const ia = ["className"], da = N((a) => {
  const r = ia.reduce((t, s) => {
    const { [s]: o, ...n } = t;
    return n;
  }, a);
  return /* @__PURE__ */ e(se, { ...r });
});
da.displayName = "F0Text";
const ca = {
  xs: 1,
  sm: 2,
  md: 2,
  lg: 2
}, ua = N(function({ widgets: r, children: t }, s) {
  const o = Q(null);
  Je(s, () => o.current);
  const n = Qe.toArray(r).filter((d) => !!d).map((d, i) => /* @__PURE__ */ e("div", { className: "h-full @5xl:h-auto [&>div]:h-full", children: d }, i));
  return /* @__PURE__ */ e(H, { layout: "home", children: /* @__PURE__ */ u("div", { ref: o, className: "@container", children: [
    /* @__PURE__ */ u("div", { className: "flex flex-col gap-6 px-5 pt-4 @md:pt-2 @5xl:hidden", children: [
      /* @__PURE__ */ e(we, { columns: ca, showArrows: !1, children: n }),
      /* @__PURE__ */ e("main", { children: t })
    ] }),
    /* @__PURE__ */ u("div", { className: "hidden grid-cols-3 gap-5 px-6 pb-6 pt-2 @5xl:grid", children: [
      /* @__PURE__ */ e("div", { className: "col-span-3 flex flex-row gap-5 *:flex-1", children: n.slice(0, 3) }),
      /* @__PURE__ */ e("main", { className: "col-span-2", children: t }),
      /* @__PURE__ */ e("div", { className: "flex flex-1 flex-col gap-5", children: n.slice(3) })
    ] })
  ] }) });
}), fa = N(
  function({ children: r, sideContent: t, mainColumnPosition: s = "left" }, o) {
    return /* @__PURE__ */ e("div", { ref: o, className: "h-full overflow-auto", children: /* @__PURE__ */ u(
      "div",
      {
        className: x(
          "flex h-full overflow-auto text-f1-foreground sm:flex-row",
          s === "right" ? "flex-col" : "flex-col-reverse"
        ),
        children: [
          s === "right" && /* @__PURE__ */ e(z, { children: t }),
          /* @__PURE__ */ e(
            "main",
            {
              className: x(
                "h-fit min-h-full border-0 px-6 py-5 sm:basis-3/4 sm:border-solid",
                s === "right" ? "sm:border-l sm:border-l-f1-border-secondary" : "sm:border-r sm:border-r-f1-border-secondary"
              ),
              children: r
            }
          ),
          s === "left" && /* @__PURE__ */ e(z, { children: t })
        ]
      }
    ) });
  }
), z = ({ children: a }) => /* @__PURE__ */ e("aside", { className: "py-5 pl-2 pr-4 sm:basis-1/4 sm:pb-6", children: a }), pa = U({
  base: "relative flex min-h-full w-full flex-col gap-4 place-self-center overflow-y-auto px-6 py-5",
  variants: {
    variant: {
      narrow: "max-w-screen-lg"
    }
  }
}), oe = Ge.forwardRef(({ children: a, variant: r, className: t, ...s }, o) => /* @__PURE__ */ e(H, { layout: "standard", children: /* @__PURE__ */ e(
  "section",
  {
    ref: o,
    className: x("relative flex-1 overflow-auto", t),
    ...s,
    children: /* @__PURE__ */ e("div", { className: x(pa({ variant: r })), children: a })
  }
) }));
oe.displayName = "StandardLayout";
const Fa = m(
  {
    name: "StandardLayout",
    type: "layout"
  },
  oe
), Oa = m(
  {
    name: "TwoColumnLayout",
    type: "layout"
  },
  fa
), Ea = m(
  {
    name: "HomeLayout",
    type: "layout"
  },
  ua
), ma = ({ benefits: a }) => /* @__PURE__ */ e("div", { className: "flex flex-col gap-2", children: a.map((r, t) => /* @__PURE__ */ e(ha, { text: r }, t)) }), ha = ({ text: a }) => /* @__PURE__ */ u("div", { className: "flex flex-row items-start gap-2", children: [
  /* @__PURE__ */ e(Y, { icon: Ne, size: "md", className: "text-f1-icon-positive" }),
  /* @__PURE__ */ e("span", { children: a })
] }), le = N(
  ({ title: a, image: r, benefits: t, actions: s, withShadow: o = !0, icon: n, moduleName: d }, i) => /* @__PURE__ */ u(
    "div",
    {
      ref: i,
      className: x(
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
        /* @__PURE__ */ u("div", { className: "flex flex-col justify-center gap-8 px-8 py-5", children: [
          /* @__PURE__ */ u("div", { className: "flex flex-col gap-5", children: [
            /* @__PURE__ */ u("div", { className: "flex flex-col gap-2", children: [
              /* @__PURE__ */ u("div", { className: "flex flex-row items-center gap-2", children: [
                n && /* @__PURE__ */ e(W, { icon: n }),
                d && /* @__PURE__ */ e("p", { className: "text-base font-medium text-f1-foreground", children: d })
              ] }),
              /* @__PURE__ */ e("h2", { className: "font-bold text-xl text-f1-foreground", children: a })
            ] }),
            /* @__PURE__ */ e(ma, { benefits: t })
          ] }),
          s && /* @__PURE__ */ e("div", { className: "flex gap-3", children: s })
        ] })
      ]
    }
  )
);
le.displayName = "ProductBlankslate";
function ga({
  isOpen: a,
  onClose: r,
  title: t,
  children: s,
  icon: o,
  portalContainer: n
}) {
  const [d, i] = v(a);
  return K(() => {
    i(a);
  }, [a]), /* @__PURE__ */ e(Le, { open: d, onOpenChange: (f) => {
    i(f), f || r();
  }, modal: !0, children: /* @__PURE__ */ u(
    Pe,
    {
      className: "max-h-[620px] w-[760px] overflow-y-auto overflow-x-hidden bg-f1-background",
      container: n,
      children: [
        /* @__PURE__ */ u("div", { className: "flex flex-row items-center justify-between px-4 py-4", children: [
          /* @__PURE__ */ u(Se, { className: "flex flex-row items-center gap-2 text-lg font-semibold text-f1-foreground", children: [
            o && /* @__PURE__ */ e(W, { icon: o, size: "lg" }),
            t
          ] }),
          /* @__PURE__ */ e(
            Me,
            {
              variant: "outline",
              icon: G,
              onClick: r,
              label: "Close modal",
              hideLabel: !0
            }
          )
        ] }),
        /* @__PURE__ */ u(ke, { className: "[*[data-state=visible]_div]:bg-f1-background flex max-h-[512px] flex-col", children: [
          s,
          /* @__PURE__ */ e(
            Te,
            {
              orientation: "vertical",
              className: "[&_div]:bg-f1-background"
            }
          )
        ] })
      ]
    }
  ) });
}
function _a({
  isOpen: a,
  onClose: r,
  title: t,
  image: s,
  benefits: o,
  errorMessage: n,
  successMessage: d,
  loadingState: i,
  nextSteps: l,
  closeLabel: f,
  primaryAction: p,
  modalTitle: L,
  modalIcon: P,
  secondaryAction: c,
  portalContainer: y
}) {
  const [M, k] = v(a), [T, b] = v(null), [R, C] = v(!1), g = async () => {
    if (p != null && p.onClick) {
      C(!0);
      try {
        await p.onClick(), k(!1), b("success");
      } catch {
        b("error");
      } finally {
        C(!1);
      }
    }
  }, S = () => {
    k(!1), r == null || r();
  }, B = R;
  return /* @__PURE__ */ u(I, { children: [
    /* @__PURE__ */ e(
      ga,
      {
        isOpen: M,
        onClose: S,
        title: L,
        icon: P,
        portalContainer: y,
        children: /* @__PURE__ */ e("div", { className: "pb-4 pl-4", children: /* @__PURE__ */ e(
          le,
          {
            title: t,
            image: s,
            benefits: o,
            withShadow: !1,
            actions: /* @__PURE__ */ u("div", { className: "flex gap-3", children: [
              p && /* @__PURE__ */ e(
                w,
                {
                  variant: p.variant,
                  label: B ? i.label : p.label,
                  icon: p.icon || void 0,
                  onClick: g,
                  loading: p.loading,
                  size: p.size
                }
              ),
              c && /* @__PURE__ */ e(
                w,
                {
                  onClick: c.onClick,
                  label: c.label,
                  variant: c.variant,
                  size: c.size,
                  icon: c.icon
                }
              )
            ] })
          }
        ) })
      }
    ),
    T && /* @__PURE__ */ e(
      X,
      {
        open: !0,
        onClose: () => {
          S(), b(null);
        },
        success: T === "success",
        errorMessage: n,
        successMessage: d,
        nextSteps: l,
        closeLabel: f,
        portalContainer: y
      }
    )
  ] });
}
function va({
  mediaUrl: a,
  title: r,
  description: t,
  onClose: s,
  dismissible: o,
  width: n,
  trackVisibility: d,
  actions: i,
  showConfirmation: l = !0
}) {
  const [f, p] = v(!1), L = () => {
    p(!0), s && s();
  };
  K(() => {
    d && d(!f);
  }, [d, f]);
  const P = a == null ? void 0 : a.includes(".mp4");
  return /* @__PURE__ */ e(I, { children: f ? null : /* @__PURE__ */ u(Re, { style: { width: n }, className: "relative bg-f1-background p-1", children: [
    /* @__PURE__ */ u(De, { children: [
      o && /* @__PURE__ */ e("div", { className: "absolute right-2 top-2 z-10", children: /* @__PURE__ */ e(
        w,
        {
          variant: "ghost",
          icon: G,
          size: "sm",
          hideLabel: !0,
          onClick: L,
          label: "Close"
        }
      ) }),
      /* @__PURE__ */ u("div", { children: [
        /* @__PURE__ */ e("div", { children: a && (P ? /* @__PURE__ */ e(
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
        /* @__PURE__ */ u("div", { className: "flex flex-col gap-[2px] p-3", children: [
          /* @__PURE__ */ e(E, { className: "text-lg font-medium", children: r }),
          /* @__PURE__ */ e(E, { className: "line-clamp-3 text-base font-normal text-f1-foreground-secondary", children: t })
        ] })
      ] })
    ] }),
    i && /* @__PURE__ */ e(Be, { className: "p-3", children: i.map(
      (c) => c.type === "upsell" ? /* @__PURE__ */ e(
        J,
        {
          label: c.label,
          onRequest: c.onClick,
          errorMessage: c.errorMessage,
          successMessage: c.successMessage,
          loadingState: c.loadingState,
          nextSteps: c.nextSteps,
          closeLabel: c.closeLabel,
          showConfirmation: l && c.showConfirmation,
          variant: c.variant
        },
        c.label
      ) : /* @__PURE__ */ e(
        w,
        {
          label: c.label,
          onClick: c.onClick,
          variant: c.variant
        },
        c.label
      )
    ) })
  ] }) });
}
const xa = N(
  function({ primaryAction: r, secondaryAction: t, ...s }, o) {
    const n = (l) => l.variant === "promote" ? /* @__PURE__ */ e(
      J,
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
    ) : /* @__PURE__ */ e(
      w,
      {
        onClick: l.onClick,
        label: l.label,
        variant: l.variant || "default",
        size: "md",
        icon: l.icon
      }
    ), d = (r == null ? void 0 : r.variant) !== "promote" ? r : void 0, i = (t == null ? void 0 : t.variant) !== "promote" ? t : void 0;
    return /* @__PURE__ */ u(
      Ie,
      {
        ref: o,
        ...s,
        primaryAction: d,
        secondaryAction: i,
        children: [
          (r == null ? void 0 : r.variant) === "promote" && n(r),
          (t == null ? void 0 : t.variant) === "promote" && n(t)
        ]
      }
    );
  }
);
xa.displayName = "UpsellingBanner";
function ja({
  isOpen: a,
  setIsOpen: r,
  label: t,
  variant: s = "promote",
  size: o = "md",
  showIcon: n = !0,
  side: d = "right",
  align: i = "center",
  icon: l = Oe,
  mediaUrl: f,
  title: p,
  description: L,
  width: P = "300px",
  trackVisibility: c,
  actions: y,
  onClick: M,
  hideLabel: k = !1
}) {
  const [T, b] = v(!1), [R, C] = v(null), [g, S] = v(null), B = (h) => {
    r(h), M && M();
  }, ne = async (h) => {
    if (h.type === "upsell") {
      S(h);
      try {
        await h.onClick(), h.showConfirmation && (b(!0), C("success"));
      } catch {
        b(!0), C("error");
      }
    }
  }, ie = () => {
    C(null), b(!1), S(null), r(!1);
  }, de = a && !T, ce = y == null ? void 0 : y.map((h) => h.type === "upsell" ? {
    ...h,
    onClick: () => ne(h)
  } : h);
  return /* @__PURE__ */ u(I, { children: [
    /* @__PURE__ */ u($e, { open: de, onOpenChange: B, children: [
      /* @__PURE__ */ e(Fe, { asChild: !0, children: /* @__PURE__ */ e(
        w,
        {
          variant: s,
          label: t,
          size: o,
          icon: n ? l : void 0,
          onClick: () => r(a),
          hideLabel: k
        }
      ) }),
      /* @__PURE__ */ e(
        Ee,
        {
          side: d,
          align: i,
          className: "w-fit border-none bg-transparent p-2 shadow-none",
          children: /* @__PURE__ */ e(
            va,
            {
              mediaUrl: f,
              title: p,
              description: L,
              onClose: () => r(!1),
              dismissible: !1,
              width: P,
              trackVisibility: c,
              actions: ce,
              showConfirmation: !1
            }
          )
        }
      )
    ] }),
    (g == null ? void 0 : g.type) === "upsell" && g.showConfirmation && R && /* @__PURE__ */ e(
      X,
      {
        open: !0,
        onClose: ie,
        success: R === "success",
        errorMessage: g.errorMessage,
        successMessage: g.successMessage,
        nextSteps: g.nextSteps,
        closeLabel: g.closeLabel,
        portalContainer: null
      }
    )
  ] });
}
const Va = m(
  {
    name: "Icon",
    type: "info"
  },
  Y
), ba = Ke(
  null
), ya = ({ children: a, fullScreen: r = !0 }) => {
  const t = Q(null), [s, o] = v(t.current);
  return Ye(() => {
    o(t.current);
  }, []), /* @__PURE__ */ e(ba.Provider, { value: { element: s }, children: /* @__PURE__ */ e(
    "div",
    {
      ref: t,
      id: "factorial-one-layout",
      className: x({
        "flex h-screen w-screen flex-col bg-[#F5F6F8] dark:bg-[#0D1625]": r
      }),
      children: a
    }
  ) });
}, Ca = ({
  children: a
}) => /* @__PURE__ */ e(We, { reducedMotion: "user", children: a }), za = ({
  children: a,
  layout: r,
  link: t,
  privacyModeInitiallyEnabled: s,
  image: o,
  i18n: n,
  l10n: d,
  isDev: i = !1,
  showExperimentalWarnings: l = !1
}) => /* @__PURE__ */ e(Ca, { children: /* @__PURE__ */ e(
  _e,
  {
    isDev: i,
    showExperimentalWarnings: l,
    children: /* @__PURE__ */ e(je, { ...d, children: /* @__PURE__ */ e(Ve, { ...n, children: /* @__PURE__ */ e(ze, { ...t, children: /* @__PURE__ */ e(ya, { ...r, children: /* @__PURE__ */ e(qe, { children: /* @__PURE__ */ e(
      Ue,
      {
        initiallyEnabled: s,
        children: /* @__PURE__ */ e(He, { ...o, children: a })
      }
    ) }) }) }) }) })
  }
) });
export {
  ka as AreaChart,
  Ha as Await,
  Ta as BarChart,
  w as Button,
  Ra as CategoryBarChart,
  Wa as CopyButton,
  Ya as EmojiImage,
  Ga as F0Card,
  Xa as F0Checkbox,
  da as F0Text,
  za as FactorialOneProvider,
  Ea as HomeLayout,
  Va as Icon,
  Da as LineChart,
  Sa as Link,
  Ja as OneFilterPicker,
  Ba as PieChart,
  Ue as PrivacyModeProvider,
  le as ProductBlankslate,
  Qa as ProductCard,
  _a as ProductModal,
  va as ProductWidget,
  $a as ProgressBarChart,
  Fa as StandardLayout,
  Oa as TwoColumnLayout,
  X as UpsellRequestResponseDialog,
  xa as UpsellingBanner,
  J as UpsellingButton,
  ja as UpsellingPopover,
  Ia as VerticalBarChart,
  Ka as buildTranslations,
  Pa as defaultTranslations,
  Za as experimental,
  Aa as getEmojiLabel,
  er as useEmojiConfetti,
  ar as usePrivacyMode,
  rr as useReducedMotion,
  tr as useXRay
};
