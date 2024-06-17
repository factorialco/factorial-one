import { jsx as a, jsxs as u, Fragment as de } from "react/jsx-runtime";
import { clsx as ce } from "clsx";
import { twMerge as ue } from "tailwind-merge";
import { cva as y } from "class-variance-authority";
import * as i from "react";
import N, { forwardRef as C, createContext as V, useContext as L, useState as w, useCallback as T, useEffect as _, useRef as X, useImperativeHandle as fe } from "react";
import { Slot as me } from "@radix-ui/react-slot";
import * as p from "@radix-ui/react-dialog";
import { ChevronLeft as pe, ChevronRight as ge, ChevronDown as H, ChevronUp as xe, Check as ye, OctagonX as be, CircleCheck as ve, TriangleAlert as he, BookOpen as we, X as Ne } from "lucide-react";
import { useIsomorphicLayoutEffect as j } from "usehooks-ts";
import { createPortal as Ce } from "react-dom";
import { DayPicker as Re } from "react-day-picker";
import * as c from "@radix-ui/react-select";
import * as h from "@radix-ui/react-avatar";
import * as v from "@radix-ui/react-tabs";
import * as b from "@radix-ui/react-scroll-area";
function n(...e) {
  return ue(ce(e));
}
const z = y(
  "inline-flex items-center justify-center gap-1 whitespace-nowrap rounded-full border-solid text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "border-2 border-primary-intermediate bg-background text-primary-foreground hover:bg-primary",
        secondary: "border-2 border-secondary-intermediate bg-background text-secondary-foreground hover:bg-secondary",
        outline: "border-2 border-solid border-secondary-intermediate bg-background text-secondary-foreground hover:bg-secondary",
        destructive: "border-2 border-destructive-intermediate bg-destructive text-destructive-foreground hover:bg-destructive/70",
        positive: "border-2 border-positive-intermediate bg-positive text-positive-foreground hover:bg-positive/70",
        ghost: "border-none text-intermediate hover:bg-accent hover:text-accent-foreground"
      },
      rounded: {
        true: "aspect-square px-0"
      },
      size: {
        default: "h-10 py-2",
        sm: "h-8"
      }
    },
    compoundVariants: [
      {
        size: "default",
        rounded: !1,
        class: "px-4"
      },
      {
        size: "sm",
        rounded: !1,
        class: "px-3"
      }
    ],
    defaultVariants: {
      variant: "default",
      size: "default",
      rounded: !1
    }
  }
), O = i.forwardRef(
  ({ className: e, rounded: t, variant: r, size: o, asChild: s = !1, ...l }, d) => /* @__PURE__ */ a(
    s ? me : "button",
    {
      className: n(z({ variant: r, size: o, className: e, rounded: t })),
      ref: d,
      ...l
    }
  )
);
O.displayName = "Button";
const B = C(
  ({ label: e, hideLabel: t, icon: r, ...o }, s) => {
    const l = r;
    return /* @__PURE__ */ u(
      O,
      {
        title: t ? e : void 0,
        rounded: t,
        ref: s,
        ...o,
        children: [
          l && /* @__PURE__ */ a(l, { size: 16 }),
          !t && e
        ]
      }
    );
  }
), ke = y("", {
  variants: {
    overflow: {
      hidden: "overflow-hidden",
      auto: "overflow-auto"
    },
    paddingX: {
      none: "px-0",
      "p-2": "px-2",
      "p-4": "px-4",
      "p-8": "px-8",
      "p-12": "px-12",
      "p-16": "px-16"
    },
    maxWidth: {
      xs: "max-w-xs",
      sm: "max-w-sm",
      md: "max-w-md",
      xl: "max-w-xl",
      "screen-sm": "max-w-screen-sm",
      "screen-md": "max-w-screen-md",
      "screen-lg": "max-w-screen-lg",
      "screen-xl": "max-w-screen-xl",
      "screen-2xl": "max-w-screen-2xl"
    },
    paddingY: {
      none: "py-0",
      "p-2": "py-2",
      "p-4": "py-4",
      "p-8": "py-8",
      "p-12": "py-12",
      "p-16": "py-16"
    },
    basis: {
      0: "basis-0"
    },
    inline: {
      true: "inline-flex",
      false: "flex"
    },
    justifyContent: {
      center: "justify-center",
      "space-between": "justify-between"
    },
    alignItems: {
      center: "items-center",
      stretch: "items-stretch"
    },
    grow: {
      true: "flex-grow",
      false: "flex-grow-0"
    },
    shrink: {
      true: "flex-shrink",
      false: "flex-shrink-0"
    }
  },
  defaultVariants: {
    paddingX: "none",
    paddingY: "none",
    inline: !1
  }
}), A = C(
  ({
    className: e,
    grow: t,
    basis: r,
    shrink: o,
    paddingX: s,
    paddingY: l,
    inline: d,
    overflow: m,
    maxWidth: f,
    justifyContent: g,
    alignItems: D,
    ...R
  }, k) => /* @__PURE__ */ a(
    "div",
    {
      className: n(
        ke({
          paddingX: s,
          basis: r,
          paddingY: l,
          grow: t,
          shrink: o,
          inline: d,
          overflow: m,
          maxWidth: f,
          justifyContent: g,
          alignItems: D
        }),
        e
      ),
      ref: k,
      ...R
    }
  )
), P = {
  2: "gap-2",
  4: "gap-4",
  8: "gap-8"
}, Se = y("flex flex-col", {
  variants: {
    gap: {
      ...P
    }
  },
  defaultVariants: {}
}), S = C(({ className: e, gap: t, children: r, ...o }, s) => /* @__PURE__ */ a(A, { className: n(Se({ gap: t }), e), ref: s, ...o, children: r })), vt = C(
  ({ className: e, children: t, ...r }, o) => /* @__PURE__ */ a(A, { className: n(e), ref: o, ...r, children: t })
), $ = V({ enabled: !1, enable: () => null, disable: () => null, filter: [] }), Ae = ({
  children: e
}) => {
  const [t, r] = w(!1), [o, s] = w([]), l = T(
    (m) => {
      s(
        m || [...F].filter((f) => f !== "layout")
      ), r(!0);
    },
    [s, r]
  ), d = T(() => r(!1), [r]);
  return _(() => {
    window.XRay = {
      enable: l,
      disable: d
    };
  }, [l, d]), /* @__PURE__ */ u($.Provider, { value: { enabled: t, enable: l, disable: d, filter: o }, children: [
    e,
    t && typeof document < "u" && Ce(
      /* @__PURE__ */ u(
        S,
        {
          gap: "2",
          className: "fixed right-2 top-2 z-50 rounded-sm border-solid border-gray-300 bg-white p-4 opacity-80 shadow-md",
          children: [
            /* @__PURE__ */ a("div", { className: "text-md z-50 font-bold", children: "XRay" }),
            /* @__PURE__ */ a(S, { gap: "2", children: F.map((m) => /* @__PURE__ */ u("label", { className: "block", children: [
              /* @__PURE__ */ a(
                "input",
                {
                  onChange: (f) => f.target.checked ? s([...o, m]) : s(o.filter((g) => g !== m)),
                  type: "checkbox",
                  checked: o.includes(m),
                  className: "mr-2"
                }
              ),
              m
            ] })) })
          ]
        }
      ),
      document == null ? void 0 : document.body
    )
  ] });
}, De = y(
  "outline-opacity-50 pointer-events-none absolute z-40 outline-dashed",
  {
    variants: {
      type: {
        layout: "outline-red-500",
        info: "outline-blue-500",
        action: "outline-green-600",
        form: "outline-purple-600"
      }
    }
  }
), Te = y(
  "absolute z-40 bg-opacity-50 px-2 py-1 text-xs uppercase",
  {
    variants: {
      type: {
        layout: "bg-red-500 text-white",
        info: "bg-blue-500 text-white",
        action: "bg-green-600 text-white",
        form: "bg-purple-600 text-white"
      }
    }
  }
), ze = (e, t) => {
  const { enabled: r, filter: o } = i.useContext($), s = X(null);
  fe(t, () => s.current);
  const l = r && !e.internal, d = typeof document < "u" ? document.body : null;
  return _(() => {
    if (!l || !s.current || !o.includes(e.type))
      return;
    const m = s.current;
    m.dataset.componentName = e.name;
    let f = null, g = null;
    if (d) {
      const D = m.getBoundingClientRect(), { top: R, left: k, width: ie, height: le } = D;
      f = document.createElement("div"), f.className = De({ type: e.type }), f.style.top = `${R}px`, f.style.left = `${k}px`, f.style.width = `${ie}px`, f.style.height = `${le}px`, g = document.createElement("div"), g.className = Te({ type: e.type }), g.style.top = `${R}px`, g.style.left = `${k}px`, g.innerText = e.name, d.appendChild(g), d.appendChild(f);
    }
    return () => {
      f && (d == null || d.removeChild(f)), g && (d == null || d.removeChild(g));
    };
  }, [l, e.name, e.type, o, d]), {
    ref: s,
    enabled: r
  };
}, ht = () => L($), F = ["layout", "info", "action", "form"], x = (e, t) => {
  const r = C((o, s) => {
    const { ref: l } = ze(e, s);
    return /* @__PURE__ */ a(t, { ref: l, ...o });
  });
  return r.displayName = `${e.name}`, r;
}, E = i.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ a(
  "div",
  {
    ref: r,
    className: n(
      "rounded-2xl border border-solid border-border bg-card text-card-foreground shadow-sm",
      e
    ),
    ...t
  }
));
E.displayName = "Card";
const G = i.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ a(
  "div",
  {
    ref: r,
    className: n("flex flex-col space-y-1.5 p-6 pb-0", e),
    ...t
  }
));
G.displayName = "CardHeader";
const U = i.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ a(
  "h3",
  {
    ref: r,
    className: n(
      "text-2xl font-semibold leading-none tracking-tight",
      e
    ),
    ...t
  }
));
U.displayName = "CardTitle";
const q = i.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ a(
  "p",
  {
    ref: r,
    className: n("text-sm text-muted-foreground", e),
    ...t
  }
));
q.displayName = "CardDescription";
const M = i.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ a("div", { ref: r, className: n("p-6", e), ...t }));
M.displayName = "CardContent";
const Y = i.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ a(
  "div",
  {
    ref: r,
    className: n("flex items-center px-6 pb-6 pt-0", e),
    ...t
  }
));
Y.displayName = "CardFooter";
const wt = x(
  {
    name: "Card",
    type: "info"
  },
  E
), Nt = x(
  {
    name: "CardContent",
    type: "info",
    internal: !0
  },
  M
), Ct = x(
  {
    name: "CardDescription",
    type: "info",
    internal: !0
  },
  q
), Rt = x(
  {
    name: "CardFooter",
    type: "info",
    internal: !0
  },
  Y
), kt = x(
  {
    name: "CardHeader",
    type: "info",
    internal: !0
  },
  G
), St = x(
  {
    name: "CardTitle",
    type: "info",
    internal: !0
  },
  U
), W = i.forwardRef(
  ({ className: e, type: t, ...r }, o) => /* @__PURE__ */ a(
    "input",
    {
      type: t,
      className: n(
        "flex h-10 w-full rounded-lg border-2 border-solid border-input bg-background px-3 py-2 text-sm ring-offset-background transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground/60 hover:border-input-hover focus-visible:border-input-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:bg-muted disabled:opacity-50",
        e
      ),
      ref: o,
      ...r
    }
  )
);
W.displayName = "Input";
const Ie = W;
function Ve({
  className: e,
  classNames: t,
  showOutsideDays: r = !0,
  ...o
}) {
  return /* @__PURE__ */ a(
    Re,
    {
      showOutsideDays: r,
      className: n("p-3", e),
      classNames: {
        months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
        month: "space-y-4",
        caption: "flex justify-center pt-1 relative items-center",
        caption_label: "text-sm font-medium",
        nav: "space-x-1 flex items-center",
        nav_button: n(
          z({ variant: "outline" }),
          "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100"
        ),
        nav_button_previous: "absolute left-1",
        nav_button_next: "absolute right-1",
        table: "w-full border-collapse space-y-1",
        head_row: "flex",
        head_cell: "text-muted-foreground rounded-md w-9 font-normal text-[0.8rem]",
        row: "flex w-full mt-2",
        cell: "rounded-full h-9 w-9 text-center text-sm p-0 relative [&:has([aria-selected].day-outside)]:bg-accent focus-within:relative focus-within:z-20 [&:has([aria-selected].day-range-middle)]:rounded-none first:[&:has([aria-selected].day-range-middle)]:rounded-l-lg last:[&:has([aria-selected].day-range-middle)]:rounded-r-lg [&:has([aria-selected].day-range-start)]:rounded-r-none [&:has([aria-selected].day-range-end)]:rounded-l-none first:[&:has([aria-selected].day-range-end)]:rounded-r-[24px] first:[&:has([aria-selected].day-range-end)]:rounded-l-md last:[&:has([aria-selected].day-range-start)]:rounded-l-[24px] last:[&:has([aria-selected].day-range-start)]:rounded-r-md [&:has([aria-selected].day-range-start.day-range-end)]:rounded-full",
        day: n(
          z({ variant: "ghost" }),
          "rounded-[inherit] h-9 w-9 p-0 font-normal aria-selected:opacity-100"
        ),
        day_range_start: "day-range-start",
        day_range_end: "day-range-end",
        day_selected: "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",
        day_today: "bg-accent text-accent-foreground",
        day_outside: "day-outside text-muted-foreground opacity-50 aria-selected:bg-accent aria-selected:text-muted-foreground",
        day_disabled: "text-muted-foreground opacity-50",
        day_range_middle: "day-range-middle",
        day_hidden: "invisible",
        ...t
      },
      components: {
        IconLeft: () => /* @__PURE__ */ a(pe, { className: "h-4 w-4" }),
        IconRight: () => /* @__PURE__ */ a(ge, { className: "h-4 w-4" })
      },
      ...o
    }
  );
}
Ve.displayName = "Calendar";
const At = c.Root, Dt = c.Group, Tt = c.Value, _e = i.forwardRef(({ className: e, children: t, ...r }, o) => /* @__PURE__ */ u(
  c.Trigger,
  {
    ref: o,
    className: n(
      "flex h-10 w-full items-center justify-between rounded-lg border-2 border-solid border-input bg-background px-3 py-2 text-sm ring-offset-background transition-colors placeholder:text-muted-foreground hover:border-input-hover focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus-visible:border-input-hover disabled:cursor-not-allowed disabled:bg-muted disabled:opacity-50 [&>span]:line-clamp-1",
      e
    ),
    ...r,
    children: [
      t,
      /* @__PURE__ */ a(c.Icon, { asChild: !0, children: /* @__PURE__ */ a(H, { className: "h-4 w-4 opacity-50" }) })
    ]
  }
));
_e.displayName = c.Trigger.displayName;
const J = i.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ a(
  c.ScrollUpButton,
  {
    ref: r,
    className: n(
      "flex cursor-default items-center justify-center py-1",
      e
    ),
    ...t,
    children: /* @__PURE__ */ a(xe, { className: "h-4 w-4 text-secondary-foreground" })
  }
));
J.displayName = c.ScrollUpButton.displayName;
const K = i.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ a(
  c.ScrollDownButton,
  {
    ref: r,
    className: n(
      "flex cursor-default items-center justify-center py-1",
      e
    ),
    ...t,
    children: /* @__PURE__ */ a(H, { className: "h-4 w-4 text-secondary-foreground" })
  }
));
K.displayName = c.ScrollDownButton.displayName;
const Pe = i.forwardRef(({ className: e, children: t, position: r = "popper", ...o }, s) => /* @__PURE__ */ a(c.Portal, { children: /* @__PURE__ */ u(
  c.Content,
  {
    ref: s,
    className: n(
      "relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-lg border bg-popover text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      r === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
      e
    ),
    position: r,
    ...o,
    children: [
      /* @__PURE__ */ a(J, {}),
      /* @__PURE__ */ a(
        c.Viewport,
        {
          className: n(
            "p-1",
            r === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
          ),
          children: t
        }
      ),
      /* @__PURE__ */ a(K, {})
    ]
  }
) }));
Pe.displayName = c.Content.displayName;
const $e = i.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ a(
  c.Label,
  {
    ref: r,
    className: n("py-1.5 pl-8 pr-2 text-sm font-semibold", e),
    ...t
  }
));
$e.displayName = c.Label.displayName;
const je = i.forwardRef(({ className: e, children: t, ...r }, o) => /* @__PURE__ */ u(
  c.Item,
  {
    ref: o,
    className: n(
      "relative flex w-full cursor-default select-none items-center rounded-md py-2 pl-2 pr-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    ...r,
    children: [
      /* @__PURE__ */ a("span", { className: "absolute right-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ a(c.ItemIndicator, { children: /* @__PURE__ */ a(ye, { className: "h-4 w-4" }) }) }),
      /* @__PURE__ */ a(c.ItemText, { children: t })
    ]
  }
));
je.displayName = c.Item.displayName;
const Be = i.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ a(
  c.Separator,
  {
    ref: r,
    className: n("-mx-1 my-1 h-px bg-muted", e),
    ...t
  }
));
Be.displayName = c.Separator.displayName;
const zt = x(
  {
    name: "Input",
    type: "form"
  },
  Ie
), Fe = y(
  "relative w-full rounded-2xl bg-secondary p-6 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-6 [&>svg]:top-6 [&>svg]:text-foreground [&>svg~*]:pl-8",
  {
    variants: {
      variant: {
        destructive: "bg-destructive text-destructive-foreground dark:border-destructive-intermediate [&>svg]:text-destructive-intermediate",
        positive: "bg-positive text-positive-foreground dark:border-positive-intermediate [&>svg]:text-positive-intermediate",
        warning: "bg-warning text-warning-foreground dark:border-warning-intermediate [&>svg]:text-warning-intermediate",
        info: "bg-info text-info-foreground dark:border-info-intermediate [&>svg]:text-info-intermediate"
      }
    },
    defaultVariants: {
      variant: "info"
    }
  }
), Le = {
  destructive: be,
  positive: ve,
  warning: he,
  info: we
}, It = x(
  {
    name: "Alert",
    type: "info"
  },
  i.forwardRef(({ className: e, variant: t = "info", children: r, ...o }, s) => {
    const l = t ? Le[t] : null;
    return /* @__PURE__ */ a(
      "div",
      {
        ref: s,
        role: "alert",
        className: n(Fe({ variant: t }), e),
        ...o,
        children: /* @__PURE__ */ u("div", { className: "flex flex-row", children: [
          l && /* @__PURE__ */ a("div", { className: "mr-2 flex h-6 items-center", children: /* @__PURE__ */ a(l, { size: 20 }) }),
          /* @__PURE__ */ a("div", { children: r })
        ] })
      }
    );
  })
), Xe = i.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ a(
  "h5",
  {
    ref: r,
    className: n("mb-1 text-base font-medium tracking-tight", e),
    ...t
  }
));
Xe.displayName = "AlertTitle";
const He = i.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ a(
  "div",
  {
    ref: r,
    className: n("[&_p]:leading-relaxed", e),
    ...t
  }
));
He.displayName = "AlertDescription";
const Vt = [
  "xsmall",
  "small",
  "medium",
  "large",
  "xlarge",
  "xxlarge"
], Oe = y("relative flex shrink-0 overflow-hidden", {
  variants: {
    size: {
      xsmall: "h-8 w-8 rounded-xl text-xs",
      small: "h-10 w-10 rounded-xl text-sm",
      medium: "h-12 w-12 rounded-xl",
      large: "h-16 w-16 rounded-2xl text-xl",
      xlarge: "h-20 w-20 rounded-2xl text-2xl",
      xxlarge: "h-32 w-32 rounded-3xl text-3xl"
    }
  },
  defaultVariants: {
    size: "medium"
  }
}), Ee = i.forwardRef(({ size: e, className: t, ...r }, o) => /* @__PURE__ */ a(
  h.Root,
  {
    ref: o,
    className: n(Oe({ size: e, className: t })),
    ...r
  }
));
Ee.displayName = h.Root.displayName;
const Ge = i.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ a(
  h.Image,
  {
    ref: r,
    className: n("aspect-square h-full w-full", e),
    ...t
  }
));
Ge.displayName = h.Image.displayName;
const Ue = i.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ a(
  h.Fallback,
  {
    ref: r,
    className: n(
      "flex h-full w-full items-center justify-center rounded-xl bg-muted",
      e
    ),
    ...t
  }
));
Ue.displayName = h.Fallback.displayName;
const qe = y(
  "inline-flex items-center rounded-full border border-solid px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "border-secondary-intermediate bg-transparent text-secondary-foreground",
        neutral: "border-transparent bg-secondary text-secondary-foreground",
        destructive: "border-transparent bg-destructive text-destructive-foreground",
        positive: "border-transparent bg-positive text-positive-foreground",
        warning: "border-transparent bg-warning text-warning-foreground",
        info: "border-transparent bg-info text-info-foreground"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
function _t({ className: e, variant: t, ...r }) {
  return /* @__PURE__ */ a("div", { className: n(qe({ variant: t }), e), ...r });
}
const Me = y("grid grid-cols-1", {
  variants: {
    tileSize: {
      // The amount of columns and autoflow when paginating is an issue if we
      // want to prevent orphan elments. Say, we have 10 elements, we can't just
      // render 3 rows of 3 elements and then an orphan one in the end.
      //
      // This makes sure that everything will look nice when using pages of 48
      // elements, it will always result in even rows.
      sm: "@12xl:grid-cols-16 @md:grid-cols-2 @2xl:grid-cols-3 @4xl:grid-cols-4 @8xl:grid-cols-6 @10xl:grid-cols-8 @11xl:grid-cols-12",
      md: "@lg:grid-cols-2 @4xl:grid-cols-3 @7xl:grid-cols-4 @9xl:grid-cols-6 @10xl:grid-cols-8 @12xl:grid-cols-12",
      lg: "@3xl:grid-cols-2 @7xl:grid-cols-3 @9xl:grid-cols-4 @10xl:grid-cols-6 @12xl:grid-cols-8"
    },
    gap: {
      ...P
    }
  },
  defaultVariants: {
    tileSize: "md",
    gap: "4"
  }
}), Ye = N.forwardRef(({ className: e, gap: t, children: r, tileSize: o, ...s }, l) => /* @__PURE__ */ a("div", { className: n("@container", "grow"), ref: l, ...s, children: /* @__PURE__ */ a(
  "div",
  {
    className: n(Me({ gap: t, tileSize: o }), e),
    ref: l,
    ...s,
    children: r
  }
) })), We = y("relative flex-row items-stretch", {
  variants: {
    gap: {
      ...P
    },
    wrap: {
      true: "flex-wrap"
    }
  },
  defaultVariants: {
    wrap: !0
  }
}), Je = N.forwardRef(({ className: e, gap: t, wrap: r, ...o }, s) => /* @__PURE__ */ a(
  A,
  {
    className: n(We({ gap: t, wrap: r }), e),
    ref: s,
    ...o
  }
)), Pt = N.forwardRef(
  ({ className: e, children: t, ...r }, o) => /* @__PURE__ */ a(A, { className: n(e), ref: o, ...r, children: t })
), $t = x(
  {
    name: "Stack",
    type: "layout"
  },
  S
), jt = x(
  {
    name: "Split",
    type: "layout"
  },
  Je
), Bt = x(
  {
    name: "AutoGrid",
    type: "layout"
  },
  Ye
), Ft = v.Root, Ke = i.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ a(
  v.List,
  {
    ref: r,
    className: n(
      "inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",
      e
    ),
    ...t
  }
));
Ke.displayName = v.List.displayName;
const Qe = i.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ a(
  v.Trigger,
  {
    ref: r,
    className: n(
      "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",
      e
    ),
    ...t
  }
));
Qe.displayName = v.Trigger.displayName;
const Ze = i.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ a(
  v.Content,
  {
    ref: r,
    className: n(
      "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      e
    ),
    ...t
  }
));
Ze.displayName = v.Content.displayName;
const et = p.Root, Lt = p.Trigger, tt = p.Portal, Xt = p.Close, Q = i.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ a(
  p.Overlay,
  {
    ref: r,
    className: n(
      "fixed inset-0 z-50 bg-black/40 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      e
    ),
    ...t
  }
));
Q.displayName = p.Overlay.displayName;
const Z = i.forwardRef(({ className: e, children: t, ...r }, o) => /* @__PURE__ */ u(tt, { children: [
  /* @__PURE__ */ a(Q, {}),
  /* @__PURE__ */ u(
    p.Content,
    {
      ref: o,
      className: n(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-8 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-2xl",
        e
      ),
      ...r,
      children: [
        t,
        /* @__PURE__ */ u(p.Close, { className: "absolute right-3 top-3 rounded-sm p-2 opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground", children: [
          /* @__PURE__ */ a(Ne, { className: "h-4 w-4" }),
          /* @__PURE__ */ a("span", { className: "sr-only", children: "Close" })
        ] })
      ]
    }
  )
] }));
Z.displayName = p.Content.displayName;
const rt = ({
  className: e,
  ...t
}) => /* @__PURE__ */ a(
  "div",
  {
    className: n(
      "absolute left-8 top-0 translate-y-[-50%] rounded-2xl bg-background p-4 text-primary-foreground shadow-md",
      e
    ),
    ...t
  }
);
rt.displayName = "DialogIcon";
const ee = ({
  className: e,
  ...t
}) => /* @__PURE__ */ a(
  "div",
  {
    className: n("mt-6 flex flex-col space-y-1.5 text-left", e),
    ...t
  }
);
ee.displayName = "DialogHeader";
const te = ({
  className: e,
  ...t
}) => /* @__PURE__ */ a(
  "div",
  {
    className: n(
      "-mx-8 -mb-8 mt-4 flex flex-col-reverse gap-1 rounded-bl-2xl rounded-br-2xl border-t bg-secondary/50 px-8 py-4 sm:flex-row sm:justify-end sm:space-x-2",
      e
    ),
    ...t
  }
);
te.displayName = "DialogFooter";
const re = i.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ a(
  p.Title,
  {
    ref: r,
    className: n("text-xl font-medium leading-none tracking-tight", e),
    ...t
  }
));
re.displayName = p.Title.displayName;
const ae = i.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ a(
  p.Description,
  {
    ref: r,
    className: n("text-sm text-muted-foreground", e),
    ...t
  }
));
ae.displayName = p.Description.displayName;
const at = ({ primary: e, secondary: t }) => /* @__PURE__ */ u(te, { children: [
  t && /* @__PURE__ */ a(
    B,
    {
      variant: "secondary",
      onClick: t.onClick,
      label: t.label
    }
  ),
  e && /* @__PURE__ */ a(B, { onClick: e.onClick, label: e.label })
] }), oe = N.createContext(null), Ht = () => {
  const e = N.useContext(oe);
  if (!e)
    throw new Error("useActivity must be used within a ActivityProvider");
  return e;
}, ot = ({ onClose: e, activity: t }) => {
  const [r, o] = w(!0);
  _(() => {
    t && o(!0);
  }, [t]);
  const s = T(() => {
    setTimeout(() => e(), 200);
  }, [e]);
  return t && /* @__PURE__ */ a(
    oe.Provider,
    {
      value: {
        closeActivity: () => {
          o(!1), s();
        }
      },
      children: /* @__PURE__ */ a(
        et,
        {
          open: r,
          onOpenChange: () => {
            o(r), !r && s();
          },
          children: /* @__PURE__ */ a(Z, { children: t.element })
        }
      )
    }
  );
}, Ot = ({
  title: e,
  error: t,
  description: r,
  loading: o,
  actions: s,
  children: l
}) => o ? "Loading..." : t ? "Error!" : /* @__PURE__ */ u(de, { children: [
  /* @__PURE__ */ u(ee, { children: [
    /* @__PURE__ */ a(re, { children: e }),
    /* @__PURE__ */ a(ae, { children: r })
  ] }),
  l,
  s && /* @__PURE__ */ a(at, { ...s })
] }), ne = V(null), nt = (e, t, r = {}) => {
  const o = e.component;
  return {
    data: t,
    element: /* @__PURE__ */ a(o, { ...t }),
    onClose: (r == null ? void 0 : r.onClose) ?? (() => {
    })
  };
}, st = ({ children: e }) => {
  const [t, r] = w(null), o = async (s, l, d) => {
    const m = nt(s, l, d);
    r(m);
  };
  return /* @__PURE__ */ u(
    ne.Provider,
    {
      value: {
        openActivity: o,
        currentActivity: t
      },
      children: [
        e,
        /* @__PURE__ */ a(
          ot,
          {
            activity: t,
            onClose: () => {
              var s;
              (s = t == null ? void 0 : t.onClose) == null || s.call(t), r(null);
            }
          }
        )
      ]
    }
  );
}, Et = () => {
  const e = L(ne);
  if (!e)
    throw new Error("useActivity must be used within an ActivityProvider");
  return e;
}, se = i.forwardRef(({ className: e, children: t, ...r }, o) => /* @__PURE__ */ u(
  b.Root,
  {
    ref: o,
    className: n("relative overflow-hidden", e),
    scrollHideDelay: 200,
    ...r,
    children: [
      /* @__PURE__ */ a(
        b.Viewport,
        {
          className: "h-full w-full rounded-[inherit]",
          "data-scroll-container": !0,
          children: t
        }
      ),
      /* @__PURE__ */ a(I, { orientation: "vertical" }),
      /* @__PURE__ */ a(I, { orientation: "horizontal" }),
      /* @__PURE__ */ a(b.Corner, {})
    ]
  }
));
se.displayName = b.Root.displayName;
const I = i.forwardRef(({ className: e, orientation: t = "vertical", ...r }, o) => /* @__PURE__ */ a(
  b.ScrollAreaScrollbar,
  {
    ref: o,
    orientation: t,
    forceMount: !0,
    className: n(
      "z-50 flex touch-none select-none p-[1px]",
      "transition-opacity data-[state=hidden]:pointer-events-none data-[state=visible]:pointer-events-auto data-[state=hidden]:opacity-0 data-[state=visible]:opacity-100",
      t === "vertical" && "mr-[2px] h-full w-2.5",
      t === "horizontal" && "mt-[2px] h-2.5 flex-col",
      e
    ),
    ...r,
    children: /* @__PURE__ */ a(b.ScrollAreaThumb, { className: "relative flex-1 rounded-full bg-foreground opacity-50" })
  }
));
I.displayName = b.ScrollAreaScrollbar.displayName;
const Gt = x(
  {
    name: "ScrollArea",
    type: "layout"
  },
  se
), it = V(
  null
), lt = ({ children: e, fullScreen: t = !0, addBodyClasses: r = !0 }) => {
  const o = X(null), [s, l] = w(o.current);
  return j(() => {
    l(o.current);
  }, []), j(() => {
    if (r && typeof document < "u") {
      const d = n("font-sans text-foreground").split(" ");
      return document.body.classList.add(...d), () => document.body.classList.remove(...d);
    }
  }, [r]), /* @__PURE__ */ a(it.Provider, { value: { element: s }, children: /* @__PURE__ */ a(
    S,
    {
      ref: o,
      className: n("font-sans text-foreground", {
        "h-screen w-screen bg-page-background": t
      }),
      children: e
    }
  ) });
}, Ut = ({ children: e, layout: t, activity: r }) => /* @__PURE__ */ a(lt, { ...t, children: /* @__PURE__ */ a(st, { ...r, children: /* @__PURE__ */ a(Ae, { children: e }) }) });
export {
  st as ActivitiesProvider,
  Ot as Activity,
  It as Alert,
  He as AlertDescription,
  Xe as AlertTitle,
  Bt as AutoGrid,
  Ee as Avatar,
  Ue as AvatarFallback,
  Ge as AvatarImage,
  _t as Badge,
  B as Button,
  Ve as Calendar,
  wt as Card,
  Nt as CardContent,
  Ct as CardDescription,
  Rt as CardFooter,
  kt as CardHeader,
  St as CardTitle,
  et as Dialog,
  Xt as DialogClose,
  Z as DialogContent,
  ae as DialogDescription,
  te as DialogFooter,
  ee as DialogHeader,
  rt as DialogIcon,
  Q as DialogOverlay,
  tt as DialogPortal,
  re as DialogTitle,
  Lt as DialogTrigger,
  Ut as FactorialOneProvider,
  zt as Input,
  Gt as ScrollArea,
  At as Select,
  Pe as SelectContent,
  Dt as SelectGroup,
  je as SelectItem,
  $e as SelectLabel,
  K as SelectScrollDownButton,
  J as SelectScrollUpButton,
  Be as SelectSeparator,
  _e as SelectTrigger,
  Tt as SelectValue,
  jt as Split,
  Pt as SplitCol,
  $t as Stack,
  vt as StackRow,
  Ft as Tabs,
  Ze as TabsContent,
  Ke as TabsList,
  Qe as TabsTrigger,
  qe as badgeVariants,
  Vt as sizes,
  Et as useActivities,
  Ht as useActivity,
  ht as useXRay
};
