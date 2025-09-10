import { C as v, L as ne, c as ie, P as q, a as x, f as de, b as ce, A as ue, B as fe, d as he, e as me, g as pe, V as ve, h as A, i as ge, j as xe, F as H, k as be, l as ye, m as Ce, D as we, n as Ne, o as Le, p as Pe, q as U, S as Se, r as ke, s as w, U as W, t as Fe, u as Me, v as j, w as Te, x as Y, y as De, z as Re, E as Be, G as Ie, H as $e, I as Ee, J as Oe, K as je, M as _e, X as ze, N as Ve, O as qe, Q as Ae, R as He } from "./hooks-ByFsTBZ7.js";
import { ak as ja, T as _a, am as za, av as Va, W as qa, Y as Aa, Z as Ha, _ as Ua, $ as Wa, a0 as Ya, a1 as Ga, a2 as Xa, a4 as Ja, a5 as Ka, a6 as Qa, a7 as Za, a9 as er, aa as ar, ab as rr, ac as sr, af as tr, ag as lr, ah as or, ai as nr, a8 as ir, aj as dr, ae as cr, as as ur, al as fr, aq as hr, aw as mr, a3 as pr, ad as vr, an as gr, ao as xr, ap as br, ax as yr, ar as Cr, au as wr, at as Nr } from "./hooks-ByFsTBZ7.js";
import { jsx as e, jsxs as c, Fragment as I } from "react/jsx-runtime";
import * as $ from "react";
import Ue, { forwardRef as D, useRef as G, useImperativeHandle as We, Children as Ye, useState as g, useEffect as X, createContext as Ge } from "react";
const ba = {
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
      kanban: "Kanban view",
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
        label: "Week",
        long: "Week of %{day} %{month} %{year}"
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
    description: "Chat with AI",
    expandChat: "Expand chat",
    minimizeChat: "Minimize chat window",
    openChat: "Open Chat",
    scrollToBottom: "Scroll to bottom",
    welcome: "I'm One. Ask or make anything.",
    initialMessage: "How can I help you today?"
  }
}, ya = v(
  {
    name: "Link",
    type: "info"
  },
  ne
), Ca = ["person", "team", "company", "file"];
var E = "Progress", O = 100, [Xe, wa] = ie(E), [Je, Ke] = Xe(E), J = $.forwardRef(
  (a, r) => {
    const {
      __scopeProgress: s,
      value: t = null,
      max: l,
      getValueLabel: u = Qe,
      ...i
    } = a;
    (l || l === 0) && !_(l) && console.error(Ze(`${l}`, "Progress"));
    const n = _(l) ? l : O;
    t !== null && !z(t, n) && console.error(ea(`${t}`, "Progress"));
    const o = z(t, n) ? t : null, h = T(o) ? u(o, n) : void 0;
    return /* @__PURE__ */ e(Je, { scope: s, value: o, max: n, children: /* @__PURE__ */ e(
      q.div,
      {
        "aria-valuemax": n,
        "aria-valuemin": 0,
        "aria-valuenow": T(o) ? o : void 0,
        "aria-valuetext": h,
        role: "progressbar",
        "data-state": Z(o, n),
        "data-value": o ?? void 0,
        "data-max": n,
        ...i,
        ref: r
      }
    ) });
  }
);
J.displayName = E;
var K = "ProgressIndicator", Q = $.forwardRef(
  (a, r) => {
    const { __scopeProgress: s, ...t } = a, l = Ke(K, s);
    return /* @__PURE__ */ e(
      q.div,
      {
        "data-state": Z(l.value, l.max),
        "data-value": l.value ?? void 0,
        "data-max": l.max,
        ...t,
        ref: r
      }
    );
  }
);
Q.displayName = K;
function Qe(a, r) {
  return `${Math.round(a / r * 100)}%`;
}
function Z(a, r) {
  return a == null ? "indeterminate" : a === r ? "complete" : "loading";
}
function T(a) {
  return typeof a == "number";
}
function _(a) {
  return T(a) && !isNaN(a) && a > 0;
}
function z(a, r) {
  return T(a) && !isNaN(a) && a <= r && a >= 0;
}
function Ze(a, r) {
  return `Invalid prop \`max\` of value \`${a}\` supplied to \`${r}\`. Only numbers greater than 0 are valid max values. Defaulting to \`${O}\`.`;
}
function ea(a, r) {
  return `Invalid prop \`value\` of value \`${a}\` supplied to \`${r}\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or ${O} if no \`max\` prop is set)
  - \`null\` or \`undefined\` if the progress is indeterminate.

Defaulting to \`null\`.`;
}
var ee = J, aa = Q;
const ae = $.forwardRef(({ className: a, value: r, ...s }, t) => /* @__PURE__ */ e(
  ee,
  {
    ref: t,
    className: x(
      "relative h-2 w-full overflow-hidden rounded-full bg-f1-background-secondary",
      a
    ),
    ...s,
    children: /* @__PURE__ */ e(
      aa,
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
ae.displayName = ee.displayName;
const ra = ({ value: a, max: r = 100, label: s, color: t }, l) => {
  const u = t || ce(0), i = a / r * 100;
  return /* @__PURE__ */ c("div", { className: "flex items-center space-x-2", "aria-live": "polite", children: [
    /* @__PURE__ */ e("div", { className: "flex-grow", children: /* @__PURE__ */ e(
      ae,
      {
        color: u,
        value: i,
        className: "w-full",
        "aria-valuemin": 0,
        "aria-valuemax": r,
        "aria-valuenow": a,
        "aria-label": `${i.toFixed(1)}%`
      }
    ) }),
    s && /* @__PURE__ */ e("div", { className: "flex-shrink-0 text-sm font-medium", children: s })
  ] });
}, sa = de(ra), Na = v(
  {
    name: "AreaChart",
    type: "info"
  },
  ue
), La = v(
  {
    name: "BarChart",
    type: "info"
  },
  fe
), Pa = v(
  {
    name: "CategoryBarChart",
    type: "info"
  },
  he
), Sa = v(
  {
    name: "LineChart",
    type: "info"
  },
  me
), ka = v(
  {
    name: "PieChart",
    type: "info"
  },
  pe
), Fa = v(
  {
    name: "VerticalBarChart",
    type: "info"
  },
  ve
), Ma = v(
  {
    name: "ProgressBarChart",
    type: "info"
  },
  sa
), ta = {
  xs: 1,
  sm: 2,
  md: 2,
  lg: 2
}, la = D(function({ widgets: r, children: s }, t) {
  const l = G(null);
  We(t, () => l.current);
  const u = Ye.toArray(r).filter((i) => !!i).map((i, n) => /* @__PURE__ */ e("div", { className: "h-full @5xl:h-auto [&>div]:h-full", children: i }, n));
  return /* @__PURE__ */ e(A, { layout: "home", children: /* @__PURE__ */ c("div", { ref: l, className: "@container", children: [
    /* @__PURE__ */ c("div", { className: "flex flex-col gap-6 px-5 pt-4 @md:pt-2 @5xl:hidden", children: [
      /* @__PURE__ */ e(ge, { columns: ta, showArrows: !1, children: u }),
      /* @__PURE__ */ e("main", { children: s })
    ] }),
    /* @__PURE__ */ c("div", { className: "hidden grid-cols-3 gap-5 px-6 pb-6 pt-2 @5xl:grid", children: [
      /* @__PURE__ */ e("div", { className: "col-span-3 flex flex-row gap-5 *:flex-1", children: u.slice(0, 3) }),
      /* @__PURE__ */ e("main", { className: "col-span-2", children: s }),
      /* @__PURE__ */ e("div", { className: "flex flex-1 flex-col gap-5", children: u.slice(3) })
    ] })
  ] }) });
}), oa = D(
  function({ children: r, sideContent: s, mainColumnPosition: t = "left" }, l) {
    return /* @__PURE__ */ e("div", { ref: l, className: "h-full overflow-auto", children: /* @__PURE__ */ c(
      "div",
      {
        className: x(
          "flex h-full overflow-auto text-f1-foreground sm:flex-row",
          t === "right" ? "flex-col" : "flex-col-reverse"
        ),
        children: [
          t === "right" && /* @__PURE__ */ e(V, { children: s }),
          /* @__PURE__ */ e(
            "main",
            {
              className: x(
                "h-fit min-h-full border-0 px-6 py-5 sm:basis-3/4 sm:border-solid",
                t === "right" ? "sm:border-l sm:border-l-f1-border-secondary" : "sm:border-r sm:border-r-f1-border-secondary"
              ),
              children: r
            }
          ),
          t === "left" && /* @__PURE__ */ e(V, { children: s })
        ]
      }
    ) });
  }
), V = ({ children: a }) => /* @__PURE__ */ e("aside", { className: "py-5 pl-2 pr-4 sm:basis-1/4 sm:pb-6", children: a }), na = xe({
  base: "relative flex min-h-full w-full flex-col gap-4 place-self-center overflow-y-auto px-6 py-5",
  variants: {
    variant: {
      narrow: "max-w-screen-lg"
    }
  }
}), re = Ue.forwardRef(({ children: a, variant: r, className: s, ...t }, l) => /* @__PURE__ */ e(A, { layout: "standard", children: /* @__PURE__ */ e(
  "section",
  {
    ref: l,
    className: x("relative flex-1 overflow-auto", s),
    ...t,
    children: /* @__PURE__ */ e("div", { className: x(na({ variant: r })), children: a })
  }
) }));
re.displayName = "StandardLayout";
const Ta = v(
  {
    name: "StandardLayout",
    type: "layout"
  },
  re
), Da = v(
  {
    name: "TwoColumnLayout",
    type: "layout"
  },
  oa
), Ra = v(
  {
    name: "HomeLayout",
    type: "layout"
  },
  la
), ia = ({ benefits: a }) => /* @__PURE__ */ e("div", { className: "flex flex-col gap-2", children: a.map((r, s) => /* @__PURE__ */ e(da, { text: r }, s)) }), da = ({ text: a }) => /* @__PURE__ */ c("div", { className: "flex flex-row items-start gap-2", children: [
  /* @__PURE__ */ e(ye, { icon: Ce, size: "md", className: "text-f1-icon-positive" }),
  /* @__PURE__ */ e("span", { children: a })
] }), se = D(
  ({
    title: a,
    image: r,
    benefits: s,
    actions: t,
    withShadow: l = !0,
    module: u,
    moduleName: i,
    tag: n
  }, o) => /* @__PURE__ */ c(
    "div",
    {
      ref: o,
      className: x(
        "bg-white flex flex-row rounded-xl border border-f1-border-secondary",
        l && "shadow-md"
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
        /* @__PURE__ */ c("div", { className: "flex flex-col justify-center gap-8 px-8 py-5", children: [
          /* @__PURE__ */ c("div", { className: "flex flex-col gap-5", children: [
            /* @__PURE__ */ c("div", { className: "flex flex-col gap-2", children: [
              /* @__PURE__ */ c("div", { className: "flex flex-row items-center gap-2", children: [
                u && /* @__PURE__ */ e(H, { module: u }),
                i && /* @__PURE__ */ e("p", { className: "text-base font-medium text-f1-foreground", children: i })
              ] }),
              n && /* @__PURE__ */ e("div", { className: "flex justify-start", children: /* @__PURE__ */ e(be, { icon: n.icon, text: n.label }) }),
              /* @__PURE__ */ e("h2", { className: "font-bold text-xl text-f1-foreground", children: a })
            ] }),
            /* @__PURE__ */ e(ia, { benefits: s })
          ] }),
          t && /* @__PURE__ */ e("div", { className: "flex gap-3", children: t })
        ] })
      ]
    }
  )
);
se.displayName = "ProductBlankslate";
function ca({
  isOpen: a,
  onClose: r,
  title: s,
  children: t,
  module: l,
  portalContainer: u
}) {
  const [i, n] = g(a);
  return X(() => {
    n(a);
  }, [a]), /* @__PURE__ */ e(we, { open: i, onOpenChange: (h) => {
    n(h), h || r();
  }, modal: !0, children: /* @__PURE__ */ c(
    Ne,
    {
      className: "max-h-[620px] w-[760px] overflow-y-auto overflow-x-hidden bg-f1-background",
      container: u,
      children: [
        /* @__PURE__ */ c("div", { className: "flex flex-row items-center justify-between px-4 py-4", children: [
          /* @__PURE__ */ c(Le, { className: "flex flex-row items-center gap-2 text-lg font-semibold text-f1-foreground", children: [
            l && /* @__PURE__ */ e(H, { module: l, size: "lg" }),
            s
          ] }),
          /* @__PURE__ */ e(
            Pe,
            {
              variant: "outline",
              icon: U,
              onClick: r,
              label: "Close modal",
              hideLabel: !0
            }
          )
        ] }),
        /* @__PURE__ */ c(Se, { className: "[*[data-state=visible]_div]:bg-f1-background flex max-h-[512px] flex-col", children: [
          t,
          /* @__PURE__ */ e(
            ke,
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
function Ba({
  isOpen: a,
  onClose: r,
  title: s,
  image: t,
  benefits: l,
  errorMessage: u,
  successMessage: i,
  loadingState: n,
  nextSteps: o,
  closeLabel: h,
  primaryAction: f,
  modalTitle: N,
  modalModule: L,
  secondaryAction: d,
  portalContainer: b,
  tag: S
}) {
  const [R, k] = g(a), [y, C] = g(null), [P, m] = g(!1), F = async () => {
    if (f != null && f.onClick) {
      m(!0);
      try {
        await f.onClick(), k(!1), C("success");
      } catch {
        C("error");
      } finally {
        m(!1);
      }
    }
  }, M = () => {
    k(!1), r == null || r();
  }, B = P;
  return /* @__PURE__ */ c(I, { children: [
    /* @__PURE__ */ e(
      ca,
      {
        isOpen: R,
        onClose: M,
        title: N,
        module: L,
        portalContainer: b,
        children: /* @__PURE__ */ e("div", { className: "pb-4 pl-4", children: /* @__PURE__ */ e(
          se,
          {
            title: s,
            image: t,
            benefits: l,
            withShadow: !1,
            tag: S,
            actions: /* @__PURE__ */ c("div", { className: "flex gap-3", children: [
              f && /* @__PURE__ */ e(
                w,
                {
                  variant: f.variant,
                  label: B ? n.label : f.label,
                  icon: f.icon || void 0,
                  onClick: F,
                  loading: f.loading,
                  size: f.size
                }
              ),
              d && /* @__PURE__ */ e(
                w,
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
    y && /* @__PURE__ */ e(
      W,
      {
        open: !0,
        onClose: () => {
          M(), C(null);
        },
        success: y === "success",
        errorMessage: u,
        successMessage: i,
        nextSteps: o,
        closeLabel: h,
        portalContainer: b
      }
    )
  ] });
}
function ua({
  mediaUrl: a,
  title: r,
  description: s,
  onClose: t,
  dismissible: l,
  width: u,
  trackVisibility: i,
  actions: n,
  showConfirmation: o = !0
}) {
  const [h, f] = g(!1), N = () => {
    f(!0), t && t();
  };
  X(() => {
    i && i(!h);
  }, [i, h]);
  const L = a == null ? void 0 : a.includes(".mp4");
  return /* @__PURE__ */ e(I, { children: h ? null : /* @__PURE__ */ c(Fe, { style: { width: u }, className: "relative bg-f1-background p-1", children: [
    /* @__PURE__ */ c(Me, { children: [
      l && /* @__PURE__ */ e("div", { className: "absolute right-2 top-2 z-10", children: /* @__PURE__ */ e(
        w,
        {
          variant: "ghost",
          icon: U,
          size: "sm",
          hideLabel: !0,
          onClick: N,
          label: "Close"
        }
      ) }),
      /* @__PURE__ */ c("div", { children: [
        /* @__PURE__ */ e("div", { children: a && (L ? /* @__PURE__ */ e(
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
        /* @__PURE__ */ c("div", { className: "flex flex-col gap-[2px] p-3", children: [
          /* @__PURE__ */ e(j, { className: "text-lg font-medium", children: r }),
          /* @__PURE__ */ e(j, { className: "line-clamp-3 text-base font-normal text-f1-foreground-secondary", children: s })
        ] })
      ] })
    ] }),
    n && /* @__PURE__ */ e(Te, { className: "p-3", children: n.map(
      (d) => d.type === "upsell" ? /* @__PURE__ */ e(
        Y,
        {
          label: d.label,
          onRequest: d.onClick,
          errorMessage: d.errorMessage,
          successMessage: d.successMessage,
          loadingState: d.loadingState,
          nextSteps: d.nextSteps,
          closeLabel: d.closeLabel,
          showConfirmation: o && d.showConfirmation,
          variant: d.variant
        },
        d.label
      ) : /* @__PURE__ */ e(
        w,
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
const fa = D(
  function({ primaryAction: r, secondaryAction: s, ...t }, l) {
    const u = (o) => o.variant === "promote" ? /* @__PURE__ */ e(
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
      w,
      {
        onClick: o.onClick,
        label: o.label,
        variant: o.variant || "default",
        size: "md",
        icon: o.icon
      }
    ), i = (r == null ? void 0 : r.variant) !== "promote" ? r : void 0, n = (s == null ? void 0 : s.variant) !== "promote" ? s : void 0;
    return /* @__PURE__ */ c(
      De,
      {
        ref: l,
        ...t,
        primaryAction: i,
        secondaryAction: n,
        children: [
          (r == null ? void 0 : r.variant) === "promote" && u(r),
          (s == null ? void 0 : s.variant) === "promote" && u(s)
        ]
      }
    );
  }
);
fa.displayName = "UpsellingBanner";
function Ia({
  isOpen: a,
  setIsOpen: r,
  label: s,
  variant: t = "promote",
  size: l = "md",
  showIcon: u = !0,
  side: i = "right",
  align: n = "center",
  icon: o = Ie,
  mediaUrl: h,
  title: f,
  description: N,
  width: L = "300px",
  trackVisibility: d,
  actions: b,
  onClick: S,
  hideLabel: R = !1
}) {
  const [k, y] = g(!1), [C, P] = g(null), [m, F] = g(null), M = (p) => {
    r(p), S && S();
  }, B = async (p) => {
    if (p.type === "upsell") {
      F(p);
      try {
        await p.onClick(), p.showConfirmation && (y(!0), P("success"));
      } catch {
        y(!0), P("error");
      }
    }
  }, te = () => {
    P(null), y(!1), F(null), r(!1);
  }, le = a && !k, oe = b == null ? void 0 : b.map((p) => p.type === "upsell" ? {
    ...p,
    onClick: () => B(p)
  } : p);
  return /* @__PURE__ */ c(I, { children: [
    /* @__PURE__ */ c(Re, { open: le, onOpenChange: M, children: [
      /* @__PURE__ */ e(Be, { asChild: !0, children: /* @__PURE__ */ e(
        w,
        {
          variant: t,
          label: s,
          size: l,
          icon: u ? o : void 0,
          onClick: () => r(a),
          hideLabel: R
        }
      ) }),
      /* @__PURE__ */ e(
        $e,
        {
          side: i,
          align: n,
          className: "w-fit border-none bg-transparent p-2 shadow-none",
          children: /* @__PURE__ */ e(
            ua,
            {
              mediaUrl: h,
              title: f,
              description: N,
              onClose: () => r(!1),
              dismissible: !1,
              width: L,
              trackVisibility: d,
              actions: oe,
              showConfirmation: !1
            }
          )
        }
      )
    ] }),
    (m == null ? void 0 : m.type) === "upsell" && m.showConfirmation && C && /* @__PURE__ */ e(
      W,
      {
        open: !0,
        onClose: te,
        success: C === "success",
        errorMessage: m.errorMessage,
        successMessage: m.successMessage,
        nextSteps: m.nextSteps,
        closeLabel: m.closeLabel,
        portalContainer: null
      }
    )
  ] });
}
const ha = Ge(
  null
), ma = ({ children: a, fullScreen: r = !0 }) => {
  const s = G(null), [t, l] = g(s.current);
  return He(() => {
    l(s.current);
  }, []), /* @__PURE__ */ e(ha.Provider, { value: { element: t }, children: /* @__PURE__ */ e(
    "div",
    {
      ref: s,
      id: "factorial-one-layout",
      className: x({
        "flex h-screen w-screen flex-col bg-[#F5F6F8] dark:bg-[#0D1625]": r
      }),
      children: a
    }
  ) });
}, pa = ({
  children: a
}) => /* @__PURE__ */ e(Ae, { reducedMotion: "user", children: a }), $a = ({
  children: a,
  layout: r,
  link: s,
  privacyModeInitiallyEnabled: t,
  image: l,
  i18n: u,
  l10n: i,
  isDev: n = !1,
  showExperimentalWarnings: o = !1
}) => /* @__PURE__ */ e(pa, { children: /* @__PURE__ */ e(
  Ee,
  {
    isDev: n,
    showExperimentalWarnings: o,
    children: /* @__PURE__ */ e(Oe, { ...i, children: /* @__PURE__ */ e(je, { ...u, children: /* @__PURE__ */ e(_e, { ...s, children: /* @__PURE__ */ e(ma, { ...r, children: /* @__PURE__ */ e(ze, { children: /* @__PURE__ */ e(
      Ve,
      {
        initiallyEnabled: t,
        children: /* @__PURE__ */ e(qe, { ...l, children: a })
      }
    ) }) }) }) }) })
  }
) });
export {
  Na as AreaChart,
  ja as Await,
  La as BarChart,
  w as Button,
  Pa as CategoryBarChart,
  _a as CopyButton,
  za as DndProvider,
  Va as EmojiImage,
  qa as F0Avatar,
  Aa as F0AvatarAlert,
  Ha as F0AvatarCompany,
  Ua as F0AvatarDate,
  Wa as F0AvatarEmoji,
  Ya as F0AvatarFile,
  Ga as F0AvatarIcon,
  Xa as F0AvatarList,
  H as F0AvatarModule,
  Ja as F0AvatarPerson,
  Ka as F0AvatarTeam,
  Qa as F0Card,
  Za as F0Checkbox,
  ye as F0Icon,
  er as F0TagAlert,
  ar as F0TagBalance,
  rr as F0TagCompany,
  sr as F0TagDot,
  tr as F0TagList,
  lr as F0TagPerson,
  be as F0TagRaw,
  or as F0TagStatus,
  nr as F0TagTeam,
  $a as FactorialOneProvider,
  Ra as HomeLayout,
  Sa as LineChart,
  ya as Link,
  ir as OneFilterPicker,
  ka as PieChart,
  Ve as PrivacyModeProvider,
  se as ProductBlankslate,
  dr as ProductCard,
  Ba as ProductModal,
  ua as ProductWidget,
  Ma as ProgressBarChart,
  Ta as StandardLayout,
  cr as TagCounter,
  Da as TwoColumnLayout,
  W as UpsellRequestResponseDialog,
  fa as UpsellingBanner,
  Y as UpsellingButton,
  Ia as UpsellingPopover,
  Fa as VerticalBarChart,
  Ca as avatarVariants,
  ur as buildTranslations,
  fr as createAtlaskitDriver,
  ba as defaultTranslations,
  hr as experimental,
  mr as getEmojiLabel,
  pr as modules,
  vr as tagDotColors,
  gr as useDndEvents,
  xr as useDraggable,
  br as useDroppableList,
  yr as useEmojiConfetti,
  Cr as usePrivacyMode,
  wr as useReducedMotion,
  Nr as useXRay
};
