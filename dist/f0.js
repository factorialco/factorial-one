import { C as h, L as ne, c as ie, P as U, a as y, f as ce, b as de, A as ue, B as fe, d as me, e as pe, g as he, V as ve, h as V, i as ge, j as ye, F as q, k as xe, l as be, m as Ce, D as we, n as Ne, o as Le, p as Pe, q as H, S as Se, r as ke, s as C, U as W, t as Fe, u as Me, v as O, w as Te, x as Y, y as De, z as Re, E as Be, G as Ae, H as Ie, I as $e, J as Ee, K as Oe, M as je, X as _e, N as ze, O as Ue, Q as Ve, R as qe } from "./hooks-xvJvg8OJ.js";
import { ak as Oa, T as ja, am as _a, av as za, W as Ua, Y as Va, Z as qa, _ as Ha, $ as Wa, a0 as Ya, a1 as Ga, a2 as Xa, a4 as Ja, a5 as Ka, a6 as Qa, a7 as Za, a9 as er, aa as ar, ab as rr, ac as sr, af as tr, ag as or, ah as lr, ai as nr, a8 as ir, aj as cr, ae as dr, as as ur, al as fr, aq as mr, aw as pr, a3 as hr, ad as vr, an as gr, ao as yr, ap as xr, ax as br, ar as Cr, au as wr, at as Nr } from "./hooks-xvJvg8OJ.js";
import { jsx as e, jsxs as d, Fragment as A } from "react/jsx-runtime";
import * as I from "react";
import He, { forwardRef as D, useRef as G, useImperativeHandle as We, Children as Ye, useState as g, useEffect as X, createContext as Ge } from "react";
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
}, ba = h(
  {
    name: "Link",
    type: "info"
  },
  ne
), Ca = ["person", "team", "company", "file"];
var $ = "Progress", E = 100, [Xe, wa] = ie($), [Je, Ke] = Xe($), J = I.forwardRef(
  (a, r) => {
    const {
      __scopeProgress: s,
      value: t = null,
      max: o,
      getValueLabel: u = Qe,
      ...i
    } = a;
    (o || o === 0) && !j(o) && console.error(Ze(`${o}`, "Progress"));
    const n = j(o) ? o : E;
    t !== null && !_(t, n) && console.error(ea(`${t}`, "Progress"));
    const l = _(t, n) ? t : null, f = T(l) ? u(l, n) : void 0;
    return /* @__PURE__ */ e(Je, { scope: s, value: l, max: n, children: /* @__PURE__ */ e(
      U.div,
      {
        "aria-valuemax": n,
        "aria-valuemin": 0,
        "aria-valuenow": T(l) ? l : void 0,
        "aria-valuetext": f,
        role: "progressbar",
        "data-state": Z(l, n),
        "data-value": l ?? void 0,
        "data-max": n,
        ...i,
        ref: r
      }
    ) });
  }
);
J.displayName = $;
var K = "ProgressIndicator", Q = I.forwardRef(
  (a, r) => {
    const { __scopeProgress: s, ...t } = a, o = Ke(K, s);
    return /* @__PURE__ */ e(
      U.div,
      {
        "data-state": Z(o.value, o.max),
        "data-value": o.value ?? void 0,
        "data-max": o.max,
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
function j(a) {
  return T(a) && !isNaN(a) && a > 0;
}
function _(a, r) {
  return T(a) && !isNaN(a) && a <= r && a >= 0;
}
function Ze(a, r) {
  return `Invalid prop \`max\` of value \`${a}\` supplied to \`${r}\`. Only numbers greater than 0 are valid max values. Defaulting to \`${E}\`.`;
}
function ea(a, r) {
  return `Invalid prop \`value\` of value \`${a}\` supplied to \`${r}\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or ${E} if no \`max\` prop is set)
  - \`null\` or \`undefined\` if the progress is indeterminate.

Defaulting to \`null\`.`;
}
var ee = J, aa = Q;
const ae = I.forwardRef(({ className: a, value: r, ...s }, t) => /* @__PURE__ */ e(
  ee,
  {
    ref: t,
    className: y(
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
const ra = ({ value: a, max: r = 100, label: s, color: t }, o) => {
  const u = t || de(0), i = a / r * 100;
  return /* @__PURE__ */ d("div", { className: "flex items-center space-x-2", "aria-live": "polite", children: [
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
}, sa = ce(ra), Na = h(
  {
    name: "AreaChart",
    type: "info"
  },
  ue
), La = h(
  {
    name: "BarChart",
    type: "info"
  },
  fe
), Pa = h(
  {
    name: "CategoryBarChart",
    type: "info"
  },
  me
), Sa = h(
  {
    name: "LineChart",
    type: "info"
  },
  pe
), ka = h(
  {
    name: "PieChart",
    type: "info"
  },
  he
), Fa = h(
  {
    name: "VerticalBarChart",
    type: "info"
  },
  ve
), Ma = h(
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
}, oa = D(function({ widgets: r, children: s }, t) {
  const o = G(null);
  We(t, () => o.current);
  const u = Ye.toArray(r).filter((i) => !!i).map((i, n) => /* @__PURE__ */ e("div", { className: "h-full @5xl:h-auto [&>div]:h-full", children: i }, n));
  return /* @__PURE__ */ e(V, { layout: "home", children: /* @__PURE__ */ d("div", { ref: o, className: "@container", children: [
    /* @__PURE__ */ d("div", { className: "flex flex-col gap-6 px-5 pt-4 @md:pt-2 @5xl:hidden", children: [
      /* @__PURE__ */ e(ge, { columns: ta, showArrows: !1, children: u }),
      /* @__PURE__ */ e("main", { children: s })
    ] }),
    /* @__PURE__ */ d("div", { className: "hidden grid-cols-3 gap-5 px-6 pb-6 pt-2 @5xl:grid", children: [
      /* @__PURE__ */ e("div", { className: "col-span-3 flex flex-row gap-5 *:flex-1", children: u.slice(0, 3) }),
      /* @__PURE__ */ e("main", { className: "col-span-2", children: s }),
      /* @__PURE__ */ e("div", { className: "flex flex-1 flex-col gap-5", children: u.slice(3) })
    ] })
  ] }) });
}), la = D(
  function({ children: r, sideContent: s, mainColumnPosition: t = "left" }, o) {
    return /* @__PURE__ */ e("div", { ref: o, className: "h-full overflow-auto", children: /* @__PURE__ */ d(
      "div",
      {
        className: y(
          "flex h-full overflow-auto text-f1-foreground sm:flex-row",
          t === "right" ? "flex-col" : "flex-col-reverse"
        ),
        children: [
          t === "right" && /* @__PURE__ */ e(z, { children: s }),
          /* @__PURE__ */ e(
            "main",
            {
              className: y(
                "h-fit min-h-full border-0 px-6 py-5 sm:basis-3/4 sm:border-solid",
                t === "right" ? "sm:border-l sm:border-l-f1-border-secondary" : "sm:border-r sm:border-r-f1-border-secondary"
              ),
              children: r
            }
          ),
          t === "left" && /* @__PURE__ */ e(z, { children: s })
        ]
      }
    ) });
  }
), z = ({ children: a }) => /* @__PURE__ */ e("aside", { className: "py-5 pl-2 pr-4 sm:basis-1/4 sm:pb-6", children: a }), na = ye({
  base: "relative flex min-h-full w-full flex-col gap-4 place-self-center overflow-y-auto px-6 py-5",
  variants: {
    variant: {
      narrow: "max-w-screen-lg"
    }
  }
}), re = He.forwardRef(({ children: a, variant: r, className: s, ...t }, o) => /* @__PURE__ */ e(V, { layout: "standard", children: /* @__PURE__ */ e(
  "section",
  {
    ref: o,
    className: y("relative flex-1 overflow-auto", s),
    ...t,
    children: /* @__PURE__ */ e("div", { className: y(na({ variant: r })), children: a })
  }
) }));
re.displayName = "StandardLayout";
const Ta = h(
  {
    name: "StandardLayout",
    type: "layout"
  },
  re
), Da = h(
  {
    name: "TwoColumnLayout",
    type: "layout"
  },
  la
), Ra = h(
  {
    name: "HomeLayout",
    type: "layout"
  },
  oa
), ia = ({ benefits: a }) => /* @__PURE__ */ e("div", { className: "flex flex-col gap-2", children: a.map((r, s) => /* @__PURE__ */ e(ca, { text: r }, s)) }), ca = ({ text: a }) => /* @__PURE__ */ d("div", { className: "flex flex-row items-start gap-2", children: [
  /* @__PURE__ */ e(be, { icon: Ce, size: "md", className: "text-f1-icon-positive" }),
  /* @__PURE__ */ e("span", { children: a })
] }), se = D(
  ({
    title: a,
    image: r,
    benefits: s,
    actions: t,
    withShadow: o = !0,
    module: u,
    moduleName: i,
    tag: n
  }, l) => /* @__PURE__ */ d(
    "div",
    {
      ref: l,
      className: y(
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
        /* @__PURE__ */ d("div", { className: "flex flex-col justify-center gap-8 px-8 py-5", children: [
          /* @__PURE__ */ d("div", { className: "flex flex-col gap-5", children: [
            /* @__PURE__ */ d("div", { className: "flex flex-col gap-2", children: [
              /* @__PURE__ */ d("div", { className: "flex flex-row items-center gap-2", children: [
                u && /* @__PURE__ */ e(q, { module: u }),
                i && /* @__PURE__ */ e("p", { className: "text-base font-medium text-f1-foreground", children: i })
              ] }),
              n && /* @__PURE__ */ e("div", { className: "flex justify-start", children: /* @__PURE__ */ e(xe, { icon: n.icon, text: n.label }) }),
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
function da({
  isOpen: a,
  onClose: r,
  title: s,
  children: t,
  module: o,
  portalContainer: u
}) {
  const [i, n] = g(a);
  return X(() => {
    n(a);
  }, [a]), /* @__PURE__ */ e(we, { open: i, onOpenChange: (f) => {
    n(f), f || r();
  }, modal: !0, children: /* @__PURE__ */ d(
    Ne,
    {
      className: "max-h-[620px] w-[760px] overflow-y-auto overflow-x-hidden bg-f1-background",
      container: u,
      children: [
        /* @__PURE__ */ d("div", { className: "flex flex-row items-center justify-between px-4 py-4", children: [
          /* @__PURE__ */ d(Le, { className: "flex flex-row items-center gap-2 text-lg font-semibold text-f1-foreground", children: [
            o && /* @__PURE__ */ e(q, { module: o, size: "lg" }),
            s
          ] }),
          /* @__PURE__ */ e(
            Pe,
            {
              variant: "outline",
              icon: H,
              onClick: r,
              label: "Close modal",
              hideLabel: !0
            }
          )
        ] }),
        /* @__PURE__ */ d(Se, { className: "[*[data-state=visible]_div]:bg-f1-background flex max-h-[512px] flex-col", children: [
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
  benefits: o,
  errorMessage: u,
  successMessage: i,
  loadingState: n,
  nextSteps: l,
  closeLabel: f,
  primaryAction: m,
  modalTitle: w,
  modalModule: N,
  secondaryAction: c,
  portalContainer: P,
  tag: S
}) {
  const [R, k] = g(a), [x, b] = g(null), [L, v] = g(!1), F = async () => {
    if (m?.onClick) {
      v(!0);
      try {
        await m.onClick(), k(!1), b("success");
      } catch {
        b("error");
      } finally {
        v(!1);
      }
    }
  }, M = () => {
    k(!1), r?.();
  }, B = L;
  return /* @__PURE__ */ d(A, { children: [
    /* @__PURE__ */ e(
      da,
      {
        isOpen: R,
        onClose: M,
        title: w,
        module: N,
        portalContainer: P,
        children: /* @__PURE__ */ e("div", { className: "pb-4 pl-4", children: /* @__PURE__ */ e(
          se,
          {
            title: s,
            image: t,
            benefits: o,
            withShadow: !1,
            tag: S,
            actions: /* @__PURE__ */ d("div", { className: "flex gap-3", children: [
              m && /* @__PURE__ */ e(
                C,
                {
                  variant: m.variant,
                  label: B ? n.label : m.label,
                  icon: m.icon || void 0,
                  onClick: F,
                  loading: m.loading,
                  size: m.size
                }
              ),
              c && /* @__PURE__ */ e(
                C,
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
    x && /* @__PURE__ */ e(
      W,
      {
        open: !0,
        onClose: () => {
          M(), b(null);
        },
        success: x === "success",
        errorMessage: u,
        successMessage: i,
        nextSteps: l,
        closeLabel: f,
        portalContainer: P
      }
    )
  ] });
}
function ua({
  mediaUrl: a,
  title: r,
  description: s,
  onClose: t,
  dismissible: o,
  width: u,
  trackVisibility: i,
  actions: n,
  showConfirmation: l = !0
}) {
  const [f, m] = g(!1), w = () => {
    m(!0), t && t();
  };
  X(() => {
    i && i(!f);
  }, [i, f]);
  const N = a?.includes(".mp4");
  return /* @__PURE__ */ e(A, { children: f ? null : /* @__PURE__ */ d(Fe, { style: { width: u }, className: "relative bg-f1-background p-1", children: [
    /* @__PURE__ */ d(Me, { children: [
      o && /* @__PURE__ */ e("div", { className: "absolute right-2 top-2 z-10", children: /* @__PURE__ */ e(
        C,
        {
          variant: "ghost",
          icon: H,
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
    n && /* @__PURE__ */ e(Te, { className: "p-3", children: n.map(
      (c) => c.type === "upsell" ? /* @__PURE__ */ e(
        Y,
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
        C,
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
const fa = D(
  function({ primaryAction: r, secondaryAction: s, ...t }, o) {
    const u = (l) => l.variant === "promote" ? /* @__PURE__ */ e(
      Y,
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
      C,
      {
        onClick: l.onClick,
        label: l.label,
        variant: l.variant || "default",
        size: "md",
        icon: l.icon
      }
    ), i = r?.variant !== "promote" ? r : void 0, n = s?.variant !== "promote" ? s : void 0;
    return /* @__PURE__ */ d(
      De,
      {
        ref: o,
        ...t,
        primaryAction: i,
        secondaryAction: n,
        children: [
          r?.variant === "promote" && u(r),
          s?.variant === "promote" && u(s)
        ]
      }
    );
  }
);
fa.displayName = "UpsellingBanner";
function Aa({
  isOpen: a,
  setIsOpen: r,
  label: s,
  variant: t = "promote",
  size: o = "md",
  showIcon: u = !0,
  side: i = "right",
  align: n = "center",
  icon: l = Ae,
  mediaUrl: f,
  title: m,
  description: w,
  width: N = "300px",
  trackVisibility: c,
  actions: P,
  onClick: S,
  hideLabel: R = !1
}) {
  const [k, x] = g(!1), [b, L] = g(null), [v, F] = g(null), M = (p) => {
    r(p), S && S();
  }, B = async (p) => {
    if (p.type === "upsell") {
      F(p);
      try {
        await p.onClick(), p.showConfirmation && (x(!0), L("success"));
      } catch {
        x(!0), L("error");
      }
    }
  }, te = () => {
    L(null), x(!1), F(null), r(!1);
  }, oe = a && !k, le = P?.map((p) => p.type === "upsell" ? {
    ...p,
    onClick: () => B(p)
  } : p);
  return /* @__PURE__ */ d(A, { children: [
    /* @__PURE__ */ d(Re, { open: oe, onOpenChange: M, children: [
      /* @__PURE__ */ e(Be, { asChild: !0, children: /* @__PURE__ */ e(
        C,
        {
          variant: t,
          label: s,
          size: o,
          icon: u ? l : void 0,
          onClick: () => r(a),
          hideLabel: R
        }
      ) }),
      /* @__PURE__ */ e(
        Ie,
        {
          side: i,
          align: n,
          className: "w-fit border-none bg-transparent p-2 shadow-none",
          children: /* @__PURE__ */ e(
            ua,
            {
              mediaUrl: f,
              title: m,
              description: w,
              onClose: () => r(!1),
              dismissible: !1,
              width: N,
              trackVisibility: c,
              actions: le,
              showConfirmation: !1
            }
          )
        }
      )
    ] }),
    v?.type === "upsell" && v.showConfirmation && b && /* @__PURE__ */ e(
      W,
      {
        open: !0,
        onClose: te,
        success: b === "success",
        errorMessage: v.errorMessage,
        successMessage: v.successMessage,
        nextSteps: v.nextSteps,
        closeLabel: v.closeLabel,
        portalContainer: null
      }
    )
  ] });
}
const ma = Ge(
  null
), pa = ({ children: a, fullScreen: r = !0 }) => {
  const s = G(null), [t, o] = g(s.current);
  return qe(() => {
    o(s.current);
  }, []), /* @__PURE__ */ e(ma.Provider, { value: { element: t }, children: /* @__PURE__ */ e(
    "div",
    {
      ref: s,
      id: "f0-layout",
      className: y({
        "flex h-screen w-screen flex-col bg-[#F5F6F8] dark:bg-[#0D1625]": r
      }),
      children: a
    }
  ) });
}, ha = ({
  children: a
}) => /* @__PURE__ */ e(Ve, { reducedMotion: "user", children: a }), Ia = ({
  children: a,
  layout: r,
  link: s,
  privacyModeInitiallyEnabled: t,
  image: o,
  i18n: u,
  l10n: i,
  isDev: n = !1,
  showExperimentalWarnings: l = !1
}) => /* @__PURE__ */ e(ha, { children: /* @__PURE__ */ e(
  $e,
  {
    isDev: n,
    showExperimentalWarnings: l,
    children: /* @__PURE__ */ e(Ee, { ...i, children: /* @__PURE__ */ e(Oe, { ...u, children: /* @__PURE__ */ e(je, { ...s, children: /* @__PURE__ */ e(pa, { ...r, children: /* @__PURE__ */ e(_e, { children: /* @__PURE__ */ e(
      ze,
      {
        initiallyEnabled: t,
        children: /* @__PURE__ */ e(Ue, { ...o, children: a })
      }
    ) }) }) }) }) })
  }
) });
export {
  Na as AreaChart,
  Oa as Await,
  La as BarChart,
  C as Button,
  Pa as CategoryBarChart,
  ja as CopyButton,
  _a as DndProvider,
  za as EmojiImage,
  Ua as F0Avatar,
  Va as F0AvatarAlert,
  qa as F0AvatarCompany,
  Ha as F0AvatarDate,
  Wa as F0AvatarEmoji,
  Ya as F0AvatarFile,
  Ga as F0AvatarIcon,
  Xa as F0AvatarList,
  q as F0AvatarModule,
  Ja as F0AvatarPerson,
  Ka as F0AvatarTeam,
  Qa as F0Card,
  Za as F0Checkbox,
  be as F0Icon,
  er as F0TagAlert,
  ar as F0TagBalance,
  rr as F0TagCompany,
  sr as F0TagDot,
  tr as F0TagList,
  or as F0TagPerson,
  xe as F0TagRaw,
  lr as F0TagStatus,
  nr as F0TagTeam,
  Ia as FactorialOneProvider,
  Ra as HomeLayout,
  Sa as LineChart,
  ba as Link,
  ir as OneFilterPicker,
  ka as PieChart,
  ze as PrivacyModeProvider,
  se as ProductBlankslate,
  cr as ProductCard,
  Ba as ProductModal,
  ua as ProductWidget,
  Ma as ProgressBarChart,
  Ta as StandardLayout,
  dr as TagCounter,
  Da as TwoColumnLayout,
  W as UpsellRequestResponseDialog,
  fa as UpsellingBanner,
  Y as UpsellingButton,
  Aa as UpsellingPopover,
  Fa as VerticalBarChart,
  Ca as avatarVariants,
  ur as buildTranslations,
  fr as createAtlaskitDriver,
  xa as defaultTranslations,
  mr as experimental,
  pr as getEmojiLabel,
  hr as modules,
  vr as tagDotColors,
  gr as useDndEvents,
  yr as useDraggable,
  xr as useDroppableList,
  br as useEmojiConfetti,
  Cr as usePrivacyMode,
  wr as useReducedMotion,
  Nr as useXRay
};
