import { C as p, L as ie, c as de, P as V, a as b, f as ce, b as ue, A as fe, B as he, d as pe, e as me, g as ve, V as ge, h as q, i as xe, j as be, M as U, I as H, F as Ce, D as ye, k as we, l as Ne, m as Le, n as W, S as Pe, o as Se, p as w, U as Y, q as Me, r as ke, s as E, t as Re, u as G, v as De, w as Be, x as Te, y as $e, z as Ie, E as Fe, G as Oe, H as Ee, T as _e, J as je, X as ze, K as Ve, N as qe, O as Ue, Q as He } from "./F0Card-Du2-sRHR.js";
import { $ as _a, R as ja, a5 as za, W as Va, Y as qa, Z as Ua, _ as Ha, a2 as Wa, a0 as Ya, a6 as Ga, a7 as Xa, a1 as Ja, a4 as Qa, a3 as Ka } from "./F0Card-Du2-sRHR.js";
import { jsx as e, jsxs as c, Fragment as $ } from "react/jsx-runtime";
import * as I from "react";
import We, { forwardRef as B, useRef as X, useImperativeHandle as Ye, Children as Ge, useState as g, useEffect as J, createContext as Xe } from "react";
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
}, Ca = p(
  {
    name: "Link",
    type: "info"
  },
  ie
);
var F = "Progress", O = 100, [Je, ya] = de(F), [Qe, Ke] = Je(F), Q = I.forwardRef(
  (a, r) => {
    const {
      __scopeProgress: s,
      value: l = null,
      max: t,
      getValueLabel: u = Ze,
      ...n
    } = a;
    (t || t === 0) && !_(t) && console.error(Ae(`${t}`, "Progress"));
    const i = _(t) ? t : O;
    l !== null && !j(l, i) && console.error(ea(`${l}`, "Progress"));
    const o = j(l, i) ? l : null, f = D(o) ? u(o, i) : void 0;
    return /* @__PURE__ */ e(Qe, { scope: s, value: o, max: i, children: /* @__PURE__ */ e(
      V.div,
      {
        "aria-valuemax": i,
        "aria-valuemin": 0,
        "aria-valuenow": D(o) ? o : void 0,
        "aria-valuetext": f,
        role: "progressbar",
        "data-state": A(o, i),
        "data-value": o ?? void 0,
        "data-max": i,
        ...n,
        ref: r
      }
    ) });
  }
);
Q.displayName = F;
var K = "ProgressIndicator", Z = I.forwardRef(
  (a, r) => {
    const { __scopeProgress: s, ...l } = a, t = Ke(K, s);
    return /* @__PURE__ */ e(
      V.div,
      {
        "data-state": A(t.value, t.max),
        "data-value": t.value ?? void 0,
        "data-max": t.max,
        ...l,
        ref: r
      }
    );
  }
);
Z.displayName = K;
function Ze(a, r) {
  return `${Math.round(a / r * 100)}%`;
}
function A(a, r) {
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
function Ae(a, r) {
  return `Invalid prop \`max\` of value \`${a}\` supplied to \`${r}\`. Only numbers greater than 0 are valid max values. Defaulting to \`${O}\`.`;
}
function ea(a, r) {
  return `Invalid prop \`value\` of value \`${a}\` supplied to \`${r}\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or ${O} if no \`max\` prop is set)
  - \`null\` or \`undefined\` if the progress is indeterminate.

Defaulting to \`null\`.`;
}
var ee = Q, aa = Z;
const ae = I.forwardRef(({ className: a, value: r, ...s }, l) => /* @__PURE__ */ e(
  ee,
  {
    ref: l,
    className: b(
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
const ra = ({ value: a, max: r = 100, label: s, color: l }, t) => {
  const u = l || ue(0), n = a / r * 100;
  return /* @__PURE__ */ c("div", { className: "flex items-center space-x-2", "aria-live": "polite", children: [
    /* @__PURE__ */ e("div", { className: "flex-grow", children: /* @__PURE__ */ e(
      ae,
      {
        color: u,
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
}, sa = ce(ra), wa = p(
  {
    name: "AreaChart",
    type: "info"
  },
  fe
), Na = p(
  {
    name: "BarChart",
    type: "info"
  },
  he
), La = p(
  {
    name: "CategoryBarChart",
    type: "info"
  },
  pe
), Pa = p(
  {
    name: "LineChart",
    type: "info"
  },
  me
), Sa = p(
  {
    name: "PieChart",
    type: "info"
  },
  ve
), Ma = p(
  {
    name: "VerticalBarChart",
    type: "info"
  },
  ge
), ka = p(
  {
    name: "ProgressBarChart",
    type: "info"
  },
  sa
), la = {
  xs: 1,
  sm: 2,
  md: 2,
  lg: 2
}, ta = B(function({ widgets: r, children: s }, l) {
  const t = X(null);
  Ye(l, () => t.current);
  const u = Ge.toArray(r).filter((n) => !!n).map((n, i) => /* @__PURE__ */ e("div", { className: "h-full @5xl:h-auto [&>div]:h-full", children: n }, i));
  return /* @__PURE__ */ e(q, { layout: "home", children: /* @__PURE__ */ c("div", { ref: t, className: "@container", children: [
    /* @__PURE__ */ c("div", { className: "flex flex-col gap-6 px-5 pt-4 @md:pt-2 @5xl:hidden", children: [
      /* @__PURE__ */ e(xe, { columns: la, showArrows: !1, children: u }),
      /* @__PURE__ */ e("main", { children: s })
    ] }),
    /* @__PURE__ */ c("div", { className: "hidden grid-cols-3 gap-5 px-6 pb-6 pt-2 @5xl:grid", children: [
      /* @__PURE__ */ e("div", { className: "col-span-3 flex flex-row gap-5 *:flex-1", children: u.slice(0, 3) }),
      /* @__PURE__ */ e("main", { className: "col-span-2", children: s }),
      /* @__PURE__ */ e("div", { className: "flex flex-1 flex-col gap-5", children: u.slice(3) })
    ] })
  ] }) });
}), oa = B(
  function({ children: r, sideContent: s, mainColumnPosition: l = "left" }, t) {
    return /* @__PURE__ */ e("div", { ref: t, className: "h-full overflow-auto", children: /* @__PURE__ */ c(
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
), z = ({ children: a }) => /* @__PURE__ */ e("aside", { className: "py-5 pl-2 pr-4 sm:basis-1/4 sm:pb-6", children: a }), na = be({
  base: "relative flex min-h-full w-full flex-col gap-4 place-self-center overflow-y-auto px-6 py-5",
  variants: {
    variant: {
      narrow: "max-w-screen-lg"
    }
  }
}), re = We.forwardRef(({ children: a, variant: r, className: s, ...l }, t) => /* @__PURE__ */ e(q, { layout: "standard", children: /* @__PURE__ */ e(
  "section",
  {
    ref: t,
    className: b("relative flex-1 overflow-auto", s),
    ...l,
    children: /* @__PURE__ */ e("div", { className: b(na({ variant: r })), children: a })
  }
) }));
re.displayName = "StandardLayout";
const Ra = p(
  {
    name: "StandardLayout",
    type: "layout"
  },
  re
), Da = p(
  {
    name: "TwoColumnLayout",
    type: "layout"
  },
  oa
), Ba = p(
  {
    name: "HomeLayout",
    type: "layout"
  },
  ta
), ia = ({ benefits: a }) => /* @__PURE__ */ e("div", { className: "flex flex-col gap-2", children: a.map((r, s) => /* @__PURE__ */ e(da, { text: r }, s)) }), da = ({ text: a }) => /* @__PURE__ */ c("div", { className: "flex flex-row items-start gap-2", children: [
  /* @__PURE__ */ e(H, { icon: Ce, size: "md", className: "text-f1-icon-positive" }),
  /* @__PURE__ */ e("span", { children: a })
] }), se = B(
  ({ title: a, image: r, benefits: s, actions: l, withShadow: t = !0, icon: u, moduleName: n }, i) => /* @__PURE__ */ c(
    "div",
    {
      ref: i,
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
        /* @__PURE__ */ c("div", { className: "flex flex-col justify-center gap-8 px-8 py-5", children: [
          /* @__PURE__ */ c("div", { className: "flex flex-col gap-5", children: [
            /* @__PURE__ */ c("div", { className: "flex flex-col gap-2", children: [
              /* @__PURE__ */ c("div", { className: "flex flex-row items-center gap-2", children: [
                u && /* @__PURE__ */ e(U, { icon: u }),
                n && /* @__PURE__ */ e("p", { className: "text-base font-medium text-f1-foreground", children: n })
              ] }),
              /* @__PURE__ */ e("h2", { className: "font-bold text-xl text-f1-foreground", children: a })
            ] }),
            /* @__PURE__ */ e(ia, { benefits: s })
          ] }),
          l && /* @__PURE__ */ e("div", { className: "flex gap-3", children: l })
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
  children: l,
  icon: t,
  portalContainer: u
}) {
  const [n, i] = g(a);
  return J(() => {
    i(a);
  }, [a]), /* @__PURE__ */ e(ye, { open: n, onOpenChange: (f) => {
    i(f), f || r();
  }, modal: !0, children: /* @__PURE__ */ c(
    we,
    {
      className: "max-h-[620px] w-[760px] overflow-y-auto overflow-x-hidden bg-f1-background",
      container: u,
      children: [
        /* @__PURE__ */ c("div", { className: "flex flex-row items-center justify-between px-4 py-4", children: [
          /* @__PURE__ */ c(Ne, { className: "flex flex-row items-center gap-2 text-lg font-semibold text-f1-foreground", children: [
            t && /* @__PURE__ */ e(U, { icon: t, size: "lg" }),
            s
          ] }),
          /* @__PURE__ */ e(
            Le,
            {
              variant: "outline",
              icon: W,
              onClick: r,
              label: "Close modal",
              hideLabel: !0
            }
          )
        ] }),
        /* @__PURE__ */ c(Pe, { className: "[*[data-state=visible]_div]:bg-f1-background flex max-h-[512px] flex-col", children: [
          l,
          /* @__PURE__ */ e(
            Se,
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
function Ta({
  isOpen: a,
  onClose: r,
  title: s,
  image: l,
  benefits: t,
  errorMessage: u,
  successMessage: n,
  loadingState: i,
  nextSteps: o,
  closeLabel: f,
  primaryAction: h,
  modalTitle: N,
  modalIcon: L,
  secondaryAction: d,
  portalContainer: C
}) {
  const [S, M] = g(a), [k, x] = g(null), [R, y] = g(!1), v = async () => {
    if (h != null && h.onClick) {
      y(!0);
      try {
        await h.onClick(), M(!1), x("success");
      } catch {
        x("error");
      } finally {
        y(!1);
      }
    }
  }, P = () => {
    M(!1), r == null || r();
  }, T = R;
  return /* @__PURE__ */ c($, { children: [
    /* @__PURE__ */ e(
      ca,
      {
        isOpen: S,
        onClose: P,
        title: N,
        icon: L,
        portalContainer: C,
        children: /* @__PURE__ */ e("div", { className: "pb-4 pl-4", children: /* @__PURE__ */ e(
          se,
          {
            title: s,
            image: l,
            benefits: t,
            withShadow: !1,
            actions: /* @__PURE__ */ c("div", { className: "flex gap-3", children: [
              h && /* @__PURE__ */ e(
                w,
                {
                  variant: h.variant,
                  label: T ? i.label : h.label,
                  icon: h.icon || void 0,
                  onClick: v,
                  loading: h.loading,
                  size: h.size
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
    k && /* @__PURE__ */ e(
      Y,
      {
        open: !0,
        onClose: () => {
          P(), x(null);
        },
        success: k === "success",
        errorMessage: u,
        successMessage: n,
        nextSteps: o,
        closeLabel: f,
        portalContainer: C
      }
    )
  ] });
}
function ua({
  mediaUrl: a,
  title: r,
  description: s,
  onClose: l,
  dismissible: t,
  width: u,
  trackVisibility: n,
  actions: i,
  showConfirmation: o = !0
}) {
  const [f, h] = g(!1), N = () => {
    h(!0), l && l();
  };
  J(() => {
    n && n(!f);
  }, [n, f]);
  const L = a == null ? void 0 : a.includes(".mp4");
  return /* @__PURE__ */ e($, { children: f ? null : /* @__PURE__ */ c(Me, { style: { width: u }, className: "relative bg-f1-background p-1", children: [
    /* @__PURE__ */ c(ke, { children: [
      t && /* @__PURE__ */ e("div", { className: "absolute right-2 top-2 z-10", children: /* @__PURE__ */ e(
        w,
        {
          variant: "ghost",
          icon: W,
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
          /* @__PURE__ */ e(E, { className: "text-lg font-medium", children: r }),
          /* @__PURE__ */ e(E, { className: "line-clamp-3 text-base font-normal text-f1-foreground-secondary", children: s })
        ] })
      ] })
    ] }),
    i && /* @__PURE__ */ e(Re, { className: "p-3", children: i.map(
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
const fa = B(
  function({ primaryAction: r, secondaryAction: s, ...l }, t) {
    const u = (o) => o.variant === "promote" ? /* @__PURE__ */ e(
      G,
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
    ), n = (r == null ? void 0 : r.variant) !== "promote" ? r : void 0, i = (s == null ? void 0 : s.variant) !== "promote" ? s : void 0;
    return /* @__PURE__ */ c(
      De,
      {
        ref: t,
        ...l,
        primaryAction: n,
        secondaryAction: i,
        children: [
          (r == null ? void 0 : r.variant) === "promote" && u(r),
          (s == null ? void 0 : s.variant) === "promote" && u(s)
        ]
      }
    );
  }
);
fa.displayName = "UpsellingBanner";
function $a({
  isOpen: a,
  setIsOpen: r,
  label: s,
  variant: l = "promote",
  size: t = "md",
  showIcon: u = !0,
  side: n = "right",
  align: i = "center",
  icon: o = $e,
  mediaUrl: f,
  title: h,
  description: N,
  width: L = "300px",
  trackVisibility: d,
  actions: C,
  onClick: S,
  hideLabel: M = !1
}) {
  const [k, x] = g(!1), [R, y] = g(null), [v, P] = g(null), T = (m) => {
    r(m), S && S();
  }, le = async (m) => {
    if (m.type === "upsell") {
      P(m);
      try {
        await m.onClick(), m.showConfirmation && (x(!0), y("success"));
      } catch {
        x(!0), y("error");
      }
    }
  }, te = () => {
    y(null), x(!1), P(null), r(!1);
  }, oe = a && !k, ne = C == null ? void 0 : C.map((m) => m.type === "upsell" ? {
    ...m,
    onClick: () => le(m)
  } : m);
  return /* @__PURE__ */ c($, { children: [
    /* @__PURE__ */ c(Be, { open: oe, onOpenChange: T, children: [
      /* @__PURE__ */ e(Te, { asChild: !0, children: /* @__PURE__ */ e(
        w,
        {
          variant: l,
          label: s,
          size: t,
          icon: u ? o : void 0,
          onClick: () => r(a),
          hideLabel: M
        }
      ) }),
      /* @__PURE__ */ e(
        Ie,
        {
          side: n,
          align: i,
          className: "w-fit border-none bg-transparent p-2 shadow-none",
          children: /* @__PURE__ */ e(
            ua,
            {
              mediaUrl: f,
              title: h,
              description: N,
              onClose: () => r(!1),
              dismissible: !1,
              width: L,
              trackVisibility: d,
              actions: ne,
              showConfirmation: !1
            }
          )
        }
      )
    ] }),
    (v == null ? void 0 : v.type) === "upsell" && v.showConfirmation && R && /* @__PURE__ */ e(
      Y,
      {
        open: !0,
        onClose: te,
        success: R === "success",
        errorMessage: v.errorMessage,
        successMessage: v.successMessage,
        nextSteps: v.nextSteps,
        closeLabel: v.closeLabel,
        portalContainer: null
      }
    )
  ] });
}
const Ia = p(
  {
    name: "Icon",
    type: "info"
  },
  H
), ha = Xe(
  null
), pa = ({ children: a, fullScreen: r = !0 }) => {
  const s = X(null), [l, t] = g(s.current);
  return He(() => {
    t(s.current);
  }, []), /* @__PURE__ */ e(ha.Provider, { value: { element: l }, children: /* @__PURE__ */ e(
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
}, ma = ({
  children: a
}) => /* @__PURE__ */ e(Ue, { reducedMotion: "user", children: a }), Fa = ({
  children: a,
  layout: r,
  link: s,
  privacyModeInitiallyEnabled: l,
  image: t,
  i18n: u,
  trackingFunction: n,
  l10n: i,
  isDev: o = !1,
  showExperimentalWarnings: f = !1
}) => /* @__PURE__ */ e(ma, { children: /* @__PURE__ */ e(
  Fe,
  {
    isDev: o,
    showExperimentalWarnings: f,
    children: /* @__PURE__ */ e(Oe, { ...i, children: /* @__PURE__ */ e(Ee, { ...u, children: /* @__PURE__ */ e(_e, { trackingFunction: n, children: /* @__PURE__ */ e(je, { ...s, children: /* @__PURE__ */ e(pa, { ...r, children: /* @__PURE__ */ e(ze, { children: /* @__PURE__ */ e(
      Ve,
      {
        initiallyEnabled: l,
        children: /* @__PURE__ */ e(qe, { ...t, children: a })
      }
    ) }) }) }) }) }) })
  }
) });
export {
  wa as AreaChart,
  _a as Await,
  Na as BarChart,
  w as Button,
  La as CategoryBarChart,
  ja as CopyButton,
  za as EmojiImage,
  Va as F0Card,
  qa as F0Checkbox,
  Fa as FactorialOneProvider,
  Ba as HomeLayout,
  Ia as Icon,
  Pa as LineChart,
  Ca as Link,
  Ua as OneFilterPicker,
  Sa as PieChart,
  Ve as PrivacyModeProvider,
  se as ProductBlankslate,
  Ha as ProductCard,
  Ta as ProductModal,
  ua as ProductWidget,
  ka as ProgressBarChart,
  Ra as StandardLayout,
  Da as TwoColumnLayout,
  Y as UpsellRequestResponseDialog,
  fa as UpsellingBanner,
  G as UpsellingButton,
  $a as UpsellingPopover,
  Ma as VerticalBarChart,
  Wa as buildTranslations,
  ba as defaultTranslations,
  Ya as experimental,
  Ga as getEmojiLabel,
  Xa as useEmojiConfetti,
  Ja as usePrivacyMode,
  Qa as useReducedMotion,
  Ka as useXRay
};
