import { c, i as _, F as n0, I as B, j as o1, C as p, k as W, g as H, L as D, l as i0, u as f1, T as s0, m as c0, n as d0, o as f0, h as h1, A as h0, B as v0, b as u0, P as g0, V as w0, a as p0 } from "./index-BANSVCoN.js";
import { jsxs as t, jsx as e, Fragment as I } from "react/jsx-runtime";
import * as v from "react";
import F, { forwardRef as r, useState as k, useEffect as v1, useId as m0, useCallback as u1, Children as x0, useRef as C0 } from "react";
import * as M from "@radix-ui/react-dialog";
import { ChevronLeft as M0, ChevronRight as g1, ChevronUp as S0, ChevronDown as b0, Check as y0, Circle as B0, X as R0 } from "lucide-react";
import * as z from "@radix-ui/react-scroll-area";
import { useForm as Vn } from "react-hook-form";
import { DayPicker as _0 } from "react-day-picker";
import * as w from "@radix-ui/react-select";
import { motion as O, AnimatePresence as F0, LayoutGroup as z0 } from "framer-motion";
import { cva as b } from "class-variance-authority";
import * as q from "@radix-ui/react-collapsible";
import * as g from "@radix-ui/react-dropdown-menu";
import * as T from "@radix-ui/react-navigation-menu";
import * as P from "@radix-ui/react-toggle-group";
import * as w1 from "@radix-ui/react-toggle";
import { Masonry as A0 } from "react-masonry";
const Z = v.forwardRef(({ className: l, children: a, ...o }, n) => /* @__PURE__ */ t(
  z.Root,
  {
    ref: n,
    className: c("relative overflow-hidden", l),
    scrollHideDelay: 200,
    ...o,
    children: [
      /* @__PURE__ */ e(
        z.Viewport,
        {
          className: "h-full w-full rounded-[inherit]",
          "data-scroll-container": !0,
          children: a
        }
      ),
      /* @__PURE__ */ e(E, { orientation: "vertical" }),
      /* @__PURE__ */ e(E, { orientation: "horizontal" }),
      /* @__PURE__ */ e(z.Corner, {})
    ]
  }
));
Z.displayName = z.Root.displayName;
const E = v.forwardRef(({ className: l, orientation: a = "vertical", ...o }, n) => /* @__PURE__ */ e(
  z.ScrollAreaScrollbar,
  {
    ref: n,
    orientation: a,
    forceMount: !0,
    className: c(
      "z-50 flex touch-none select-none p-[1px]",
      "transition-opacity data-[state=hidden]:pointer-events-none data-[state=visible]:pointer-events-auto data-[state=hidden]:opacity-0 data-[state=visible]:opacity-100",
      a === "vertical" && "mr-[2px] h-full w-2.5",
      a === "horizontal" && "mt-[2px] h-2.5 flex-col",
      l
    ),
    ...o,
    children: /* @__PURE__ */ e(z.ScrollAreaThumb, { className: "relative flex-1 rounded-full bg-f1-background-secondary opacity-50" })
  }
));
E.displayName = z.ScrollAreaScrollbar.displayName;
const Q = v.forwardRef(
  ({ className: l, type: a, ...o }, n) => /* @__PURE__ */ e(
    "input",
    {
      type: a,
      className: c(
        "flex h-10 w-full rounded-sm border-2 border-solid border-f1-border bg-f1-background px-3 py-2 text-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-f1-foreground-secondary/60 hover:border-f1-border-hover disabled:cursor-not-allowed disabled:bg-f1-background-secondary disabled:opacity-50",
        _("focus-visible:border-f1-border-hover"),
        l
      ),
      ref: n,
      ...o
    }
  )
);
Q.displayName = "Input";
const N0 = Q, H0 = (l, a) => /* @__PURE__ */ e("svg", { width: "24", height: "24", xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: a, ...l, children: /* @__PURE__ */ e("path", { fill: "#5596F6", fillRule: "evenodd", d: "M4.65 12a7.35 7.35 0 1 1 14.7 0 7.35 7.35 0 0 1-14.7 0M12 3.35a8.65 8.65 0 1 0 0 17.3 8.65 8.65 0 0 0 0-17.3M18 12a6 6 0 0 1-6 6V6a6 6 0 0 1 6 6", clipRule: "evenodd" }) }), p1 = r(H0), k0 = (l, a) => /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 27", ref: a, ...l, children: [
  /* @__PURE__ */ e("g", { filter: "url(#ModuleCalendar_svg__a)", children: /* @__PURE__ */ e("path", { fill: "#fff", fillRule: "evenodd", d: "M9.333 3.11c.491 0 .89.398.89.889v.889h3.555v-.89a.889.889 0 1 1 1.778 0v.89h.888A3.556 3.556 0 0 1 20 8.443v8.89a3.556 3.556 0 0 1-3.556 3.555H7.556A3.556 3.556 0 0 1 4 17.332V8.443a3.556 3.556 0 0 1 3.556-3.555h.888v-.89c0-.49.398-.888.89-.888m4.445 3.556v.888a.889.889 0 1 0 1.778 0v-.888h.888c.982 0 1.778.795 1.778 1.777v1.778H5.778V8.443c0-.982.796-1.777 1.778-1.777h.888v.888a.889.889 0 0 0 1.778 0v-.888z", clipRule: "evenodd" }) }),
  /* @__PURE__ */ e("defs", { children: /* @__PURE__ */ t("filter", { id: "ModuleCalendar_svg__a", width: 22.896, height: 24.673, x: 0.552, y: 1.386, colorInterpolationFilters: "sRGB", filterUnits: "userSpaceOnUse", children: [
    /* @__PURE__ */ e("feFlood", { floodOpacity: 0, result: "BackgroundImageFix" }),
    /* @__PURE__ */ e("feColorMatrix", { in: "SourceAlpha", result: "hardAlpha", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" }),
    /* @__PURE__ */ e("feOffset", { dy: 1.724 }),
    /* @__PURE__ */ e("feGaussianBlur", { stdDeviation: 1.724 }),
    /* @__PURE__ */ e("feComposite", { in2: "hardAlpha", operator: "out" }),
    /* @__PURE__ */ e("feColorMatrix", { values: "0 0 0 0 0.0352941 0 0 0 0 0.0627451 0 0 0 0 0.109804 0 0 0 0.12 0" }),
    /* @__PURE__ */ e("feBlend", { in2: "BackgroundImageFix", result: "effect1_dropShadow_4_217" }),
    /* @__PURE__ */ e("feBlend", { in: "SourceGraphic", in2: "effect1_dropShadow_4_217", result: "shape" })
  ] }) })
] }), $0 = r(k0), V0 = (l, a) => /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: a, ...l, children: [
  /* @__PURE__ */ e("g", { clipPath: "url(#ModuleClockIn_svg__a)", filter: "url(#ModuleClockIn_svg__b)", children: /* @__PURE__ */ e("path", { fill: "#fff", fillRule: "evenodd", d: "M20 12a8 8 0 1 1-16 0 8 8 0 0 1 16 0m-7-3a1 1 0 1 0-2 0v2.465a2 2 0 0 0 .89 1.664l2.555 1.703a1 1 0 0 0 1.11-1.664L13 11.465z", clipRule: "evenodd" }) }),
  /* @__PURE__ */ t("defs", { children: [
    /* @__PURE__ */ e("clipPath", { id: "ModuleClockIn_svg__a", children: /* @__PURE__ */ e("path", { fill: "#fff", d: "M0 0h24v24H0z" }) }),
    /* @__PURE__ */ t("filter", { id: "ModuleClockIn_svg__b", width: 22.896, height: 22.896, x: 0.552, y: 2.276, colorInterpolationFilters: "sRGB", filterUnits: "userSpaceOnUse", children: [
      /* @__PURE__ */ e("feFlood", { floodOpacity: 0, result: "BackgroundImageFix" }),
      /* @__PURE__ */ e("feColorMatrix", { in: "SourceAlpha", result: "hardAlpha", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" }),
      /* @__PURE__ */ e("feOffset", { dy: 1.724 }),
      /* @__PURE__ */ e("feGaussianBlur", { stdDeviation: 1.724 }),
      /* @__PURE__ */ e("feComposite", { in2: "hardAlpha", operator: "out" }),
      /* @__PURE__ */ e("feColorMatrix", { values: "0 0 0 0 0.0352941 0 0 0 0 0.0627451 0 0 0 0 0.109804 0 0 0 0.12 0" }),
      /* @__PURE__ */ e("feBlend", { in2: "BackgroundImageFix", result: "effect1_dropShadow_5_101" }),
      /* @__PURE__ */ e("feBlend", { in: "SourceGraphic", in2: "effect1_dropShadow_5_101", result: "shape" })
    ] })
  ] })
] }), L0 = r(V0), I0 = (l, a) => /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: a, ...l, children: [
  /* @__PURE__ */ e("g", { filter: "url(#ModuleDocuments_svg__a)", children: /* @__PURE__ */ e("path", { fill: "#fff", fillRule: "evenodd", d: "M5.7 3.85A2.7 2.7 0 0 0 3 6.55v9a3.6 3.6 0 0 0 3.6 3.6h10.8a3.6 3.6 0 0 0 3.6-3.6v-5.4a3.6 3.6 0 0 0-3.6-3.6h-4.243a.257.257 0 0 1-.257-.257 2.443 2.443 0 0 0-2.443-2.443z", clipRule: "evenodd" }) }),
  /* @__PURE__ */ e("defs", { children: /* @__PURE__ */ t("filter", { id: "ModuleDocuments_svg__a", width: 21.765, height: 19.065, x: 1.117, y: 2.909, colorInterpolationFilters: "sRGB", filterUnits: "userSpaceOnUse", children: [
    /* @__PURE__ */ e("feFlood", { floodOpacity: 0, result: "BackgroundImageFix" }),
    /* @__PURE__ */ e("feColorMatrix", { in: "SourceAlpha", result: "hardAlpha", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" }),
    /* @__PURE__ */ e("feOffset", { dy: 0.941 }),
    /* @__PURE__ */ e("feGaussianBlur", { stdDeviation: 0.941 }),
    /* @__PURE__ */ e("feComposite", { in2: "hardAlpha", operator: "out" }),
    /* @__PURE__ */ e("feColorMatrix", { values: "0 0 0 0 0.0352941 0 0 0 0 0.0627451 0 0 0 0 0.109804 0 0 0 0.12 0" }),
    /* @__PURE__ */ e("feBlend", { in2: "BackgroundImageFix", result: "effect1_dropShadow_6_243" }),
    /* @__PURE__ */ e("feBlend", { in: "SourceGraphic", in2: "effect1_dropShadow_6_243", result: "shape" })
  ] }) })
] }), O0 = r(I0), T0 = (l, a) => /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 25", ref: a, ...l, children: [
  /* @__PURE__ */ e("g", { filter: "url(#ModuleEngagement_svg__a)", children: /* @__PURE__ */ e("path", { fill: "#fff", fillRule: "evenodd", d: "M7.2 4.03A3.2 3.2 0 0 0 4 7.23v6.4a3.2 3.2 0 0 0 3.2 3.2v2.234c0 1.069 1.293 1.604 2.049.848l2.848-2.848a.8.8 0 0 1 .566-.235H16.8a3.2 3.2 0 0 0 3.2-3.2v-6.4a3.2 3.2 0 0 0-3.2-3.2zm1.349 6.953q.4.747 1.097 1.44c.779.696 1.21 1.047 1.956 1.515h.002c.126.07.262.122.398.122s.27-.052.394-.122q.174-.096.357-.216v-.001a10.7 10.7 0 0 0 1.605-1.299 6 6 0 0 0 1.093-1.439q.406-.757.408-1.543.001-.578-.189-1.063a2.5 2.5 0 0 0-.525-.824 2.3 2.3 0 0 0-.763-.528c-.177-.094-.545-.187-.907-.195-.623-.013-1.22.251-1.474.557a2 2 0 0 0-.465-.33c-.286-.15-.626-.22-1.007-.22q-.476 0-.908.189-.428.186-.762.527-.335.348-.525.823v.001q-.191.485-.19 1.063c0 .524.138 1.04.405 1.543", clipRule: "evenodd" }) }),
  /* @__PURE__ */ e("defs", { children: /* @__PURE__ */ t("filter", { id: "ModuleEngagement_svg__a", width: 21.578, height: 21.815, x: 1.211, y: 2.635, colorInterpolationFilters: "sRGB", filterUnits: "userSpaceOnUse", children: [
    /* @__PURE__ */ e("feFlood", { floodOpacity: 0, result: "BackgroundImageFix" }),
    /* @__PURE__ */ e("feColorMatrix", { in: "SourceAlpha", result: "hardAlpha", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" }),
    /* @__PURE__ */ e("feOffset", { dy: 1.395 }),
    /* @__PURE__ */ e("feGaussianBlur", { stdDeviation: 1.395 }),
    /* @__PURE__ */ e("feComposite", { in2: "hardAlpha", operator: "out" }),
    /* @__PURE__ */ e("feColorMatrix", { values: "0 0 0 0 0.0352941 0 0 0 0 0.0627451 0 0 0 0 0.109804 0 0 0 0.12 0" }),
    /* @__PURE__ */ e("feBlend", { in2: "BackgroundImageFix", result: "effect1_dropShadow_6_237" }),
    /* @__PURE__ */ e("feBlend", { in: "SourceGraphic", in2: "effect1_dropShadow_6_237", result: "shape" })
  ] }) })
] }), G0 = r(T0), D0 = (l, a) => /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 26", ref: a, ...l, children: [
  /* @__PURE__ */ e("g", { filter: "url(#ModuleFinance_svg__a)", children: /* @__PURE__ */ e("path", { fill: "#fff", fillRule: "evenodd", d: "M9.2 2.899a.933.933 0 0 0-.897 1.19l.708 2.478c-.641.36-1.507 1.031-2.27 2.257C5.767 10.384 5 12.776 5 16.432c0 1.157.43 2.301 1.15 3.165.723.87 1.786 1.504 3.05 1.504h5.6c1.264 0 2.327-.635 3.05-1.504A5 5 0 0 0 19 16.432c0-3.656-.768-6.048-1.74-7.608-.764-1.226-1.63-1.898-2.27-2.257l.707-2.478a.933.933 0 0 0-.897-1.19zm3.963 3.267.4-1.4h-3.126l.4 1.4zM12.115 9.5c.479 0 .867.388.867.866v.263c.483.185 1.044.515 1.015 1.107-.025.507-.4.857-.864.816-.176 0-.323-.104-.482-.217-.187-.134-.391-.28-.68-.28-.45 0-.62.191-.62.553 0 .433.529.614 1.144.824.856.293 1.88.643 1.88 1.81 0 .958-.49 1.68-1.393 2.061v.33a.866.866 0 1 1-1.733 0v-.228a2.66 2.66 0 0 1-1.31-.819.866.866 0 0 1 1.304-1.14l.028.031c.125.146.342.4.7.4.262 0 .627-.208.627-.551 0-.409-.468-.535-1.033-.687-.856-.232-1.935-.523-1.935-1.953a2.22 2.22 0 0 1 1.62-2.135v-.185c0-.478.387-.866.865-.866", clipRule: "evenodd" }) }),
  /* @__PURE__ */ e("defs", { children: /* @__PURE__ */ t("filter", { id: "ModuleFinance_svg__a", width: 20.346, height: 24.549, x: 1.827, y: 1.312, colorInterpolationFilters: "sRGB", filterUnits: "userSpaceOnUse", children: [
    /* @__PURE__ */ e("feFlood", { floodOpacity: 0, result: "BackgroundImageFix" }),
    /* @__PURE__ */ e("feColorMatrix", { in: "SourceAlpha", result: "hardAlpha", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" }),
    /* @__PURE__ */ e("feOffset", { dy: 1.587 }),
    /* @__PURE__ */ e("feGaussianBlur", { stdDeviation: 1.587 }),
    /* @__PURE__ */ e("feComposite", { in2: "hardAlpha", operator: "out" }),
    /* @__PURE__ */ e("feColorMatrix", { values: "0 0 0 0 0.0352941 0 0 0 0 0.0627451 0 0 0 0 0.109804 0 0 0 0.12 0" }),
    /* @__PURE__ */ e("feBlend", { in2: "BackgroundImageFix", result: "effect1_dropShadow_6_236" }),
    /* @__PURE__ */ e("feBlend", { in: "SourceGraphic", in2: "effect1_dropShadow_6_236", result: "shape" })
  ] }) })
] }), P0 = r(D0), U0 = (l, a) => /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 25", ref: a, ...l, children: [
  /* @__PURE__ */ e("g", { filter: "url(#ModuleGoals_svg__a)", children: /* @__PURE__ */ e("path", { fill: "#fff", d: "M5.9 3a.9.9 0 0 1 .9.9v.357c.655-.202 1.537-.357 2.7-.357 1.62 0 2.48.571 3.2 1.051l.003.002c.628.42 1.12.747 2.197.747 1.249 0 2.033-.208 2.478-.386.223-.089.365-.172.44-.222l.066-.048A.9.9 0 0 1 19.4 5.7v7.984c0 .027.004.172-.041.33a1.1 1.1 0 0 1-.403.577l-.005.003c-.46.347-1.658 1.006-4.051 1.006-1.62 0-2.48-.571-3.2-1.051l-.003-.002c-.628-.42-1.12-.747-2.197-.747-1.249 0-2.034.208-2.478.386q-.129.051-.222.098V20.1a.9.9 0 1 1-1.8 0V3.9a.9.9 0 0 1 .9-.9" }) }),
  /* @__PURE__ */ e("defs", { children: /* @__PURE__ */ t("filter", { id: "ModuleGoals_svg__a", width: 18.584, height: 22.184, x: 2.908, y: 1.954, colorInterpolationFilters: "sRGB", filterUnits: "userSpaceOnUse", children: [
    /* @__PURE__ */ e("feFlood", { floodOpacity: 0, result: "BackgroundImageFix" }),
    /* @__PURE__ */ e("feColorMatrix", { in: "SourceAlpha", result: "hardAlpha", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" }),
    /* @__PURE__ */ e("feOffset", { dy: 1.046 }),
    /* @__PURE__ */ e("feGaussianBlur", { stdDeviation: 1.046 }),
    /* @__PURE__ */ e("feComposite", { in2: "hardAlpha", operator: "out" }),
    /* @__PURE__ */ e("feColorMatrix", { values: "0 0 0 0 0.0352941 0 0 0 0 0.0627451 0 0 0 0 0.109804 0 0 0 0.12 0" }),
    /* @__PURE__ */ e("feBlend", { in2: "BackgroundImageFix", result: "effect1_dropShadow_6_116" }),
    /* @__PURE__ */ e("feBlend", { in: "SourceGraphic", in2: "effect1_dropShadow_6_116", result: "shape" })
  ] }) })
] }), j0 = r(U0), E0 = (l, a) => /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 26", ref: a, ...l, children: [
  /* @__PURE__ */ e("g", { filter: "url(#ModuleHome_svg__a)", children: /* @__PURE__ */ e("path", { fill: "#fff", d: "M9.675 3.932a4 4 0 0 1 4.65 0l4 2.857A4 4 0 0 1 20 10.044V16a4 4 0 0 1-4 4h-1a2 2 0 0 1-2-2v-2.5a1 1 0 1 0-2 0V18a2 2 0 0 1-2 2H8a4 4 0 0 1-4-4v-5.956a4 4 0 0 1 1.675-3.255z" }) }),
  /* @__PURE__ */ e("defs", { children: /* @__PURE__ */ t("filter", { id: "ModuleHome_svg__a", width: 23.758, height: 24.571, x: 0.121, y: 1.247, colorInterpolationFilters: "sRGB", filterUnits: "userSpaceOnUse", children: [
    /* @__PURE__ */ e("feFlood", { floodOpacity: 0, result: "BackgroundImageFix" }),
    /* @__PURE__ */ e("feColorMatrix", { in: "SourceAlpha", result: "hardAlpha", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" }),
    /* @__PURE__ */ e("feOffset", { dy: 1.939 }),
    /* @__PURE__ */ e("feGaussianBlur", { stdDeviation: 1.939 }),
    /* @__PURE__ */ e("feComposite", { in2: "hardAlpha", operator: "out" }),
    /* @__PURE__ */ e("feColorMatrix", { values: "0 0 0 0 0.0352941 0 0 0 0 0.0627451 0 0 0 0 0.109804 0 0 0 0.12 0" }),
    /* @__PURE__ */ e("feBlend", { in2: "BackgroundImageFix", result: "effect1_dropShadow_80_61" }),
    /* @__PURE__ */ e("feBlend", { in: "SourceGraphic", in2: "effect1_dropShadow_80_61", result: "shape" })
  ] }) })
] }), W0 = r(E0), q0 = (l, a) => /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 26 25", ref: a, ...l, children: [
  /* @__PURE__ */ e("g", { filter: "url(#ModuleInbox_svg__a)", children: /* @__PURE__ */ e("path", { fill: "#fff", d: "M6.004 6.749A4 4 0 0 1 9.31 5h6.993a4 4 0 0 1 3.094 1.465l2.377 2.901A1 1 0 0 1 22 10v5a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4v-5a1 1 0 0 1 .173-.563zM9.31 7a2 2 0 0 0-1.653.874L6.891 9h1.088c1.367 0 2.533.988 2.757 2.336a.795.795 0 0 0 .784.664h2.96c.388 0 .72-.281.783-.664A2.795 2.795 0 0 1 18.02 9h.868L17.85 7.733A2 2 0 0 0 16.303 7z" }) }),
  /* @__PURE__ */ e("defs", { children: /* @__PURE__ */ t("filter", { id: "ModuleInbox_svg__a", width: 25.758, height: 21.758, x: 0.121, y: 3.061, colorInterpolationFilters: "sRGB", filterUnits: "userSpaceOnUse", children: [
    /* @__PURE__ */ e("feFlood", { floodOpacity: 0, result: "BackgroundImageFix" }),
    /* @__PURE__ */ e("feColorMatrix", { in: "SourceAlpha", result: "hardAlpha", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" }),
    /* @__PURE__ */ e("feOffset", { dy: 1.939 }),
    /* @__PURE__ */ e("feGaussianBlur", { stdDeviation: 1.939 }),
    /* @__PURE__ */ e("feComposite", { in2: "hardAlpha", operator: "out" }),
    /* @__PURE__ */ e("feColorMatrix", { values: "0 0 0 0 0.0352941 0 0 0 0 0.0627451 0 0 0 0 0.109804 0 0 0 0.12 0" }),
    /* @__PURE__ */ e("feBlend", { in2: "BackgroundImageFix", result: "effect1_dropShadow_4_216" }),
    /* @__PURE__ */ e("feBlend", { in: "SourceGraphic", in2: "effect1_dropShadow_4_216", result: "shape" })
  ] }) })
] }), Z0 = r(q0), Q0 = (l, a) => /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: a, ...l, children: [
  /* @__PURE__ */ e("g", { filter: "url(#ModuleKudos_svg__a)", children: /* @__PURE__ */ e("path", { fill: "#fff", d: "m11.895 5.955.105.082.105-.082C12.747 5.465 13.72 5 15.062 5c1.434 0 2.676.702 3.539 1.677C19.46 7.648 20 8.95 20 10.286c0 1.338-.542 2.608-1.253 3.711-.716 1.111-1.654 2.13-2.563 2.982a27.5 27.5 0 0 1-3.623 2.85l-.018.011-.006.003-.002.002a1 1 0 0 1-1.07 0L12 19c-.535.845-.536.844-.536.844h-.001l-.006-.004-.018-.012a12 12 0 0 1-.3-.198 27.48 27.48 0 0 1-3.323-2.65c-.91-.854-1.847-1.872-2.563-2.983C4.543 12.894 4 11.624 4 10.286 4 7.143 6.655 5 8.938 5c1.34 0 2.315.465 2.957.955" }) }),
  /* @__PURE__ */ e("defs", { children: /* @__PURE__ */ t("filter", { id: "ModuleKudos_svg__a", width: 20.184, height: 19.184, x: 1.908, y: 3.954, colorInterpolationFilters: "sRGB", filterUnits: "userSpaceOnUse", children: [
    /* @__PURE__ */ e("feFlood", { floodOpacity: 0, result: "BackgroundImageFix" }),
    /* @__PURE__ */ e("feColorMatrix", { in: "SourceAlpha", result: "hardAlpha", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" }),
    /* @__PURE__ */ e("feOffset", { dy: 1.046 }),
    /* @__PURE__ */ e("feGaussianBlur", { stdDeviation: 1.046 }),
    /* @__PURE__ */ e("feComposite", { in2: "hardAlpha", operator: "out" }),
    /* @__PURE__ */ e("feColorMatrix", { values: "0 0 0 0 0.0352941 0 0 0 0 0.0627451 0 0 0 0 0.109804 0 0 0 0.12 0" }),
    /* @__PURE__ */ e("feBlend", { in2: "BackgroundImageFix", result: "effect1_dropShadow_6_113" }),
    /* @__PURE__ */ e("feBlend", { in: "SourceGraphic", in2: "effect1_dropShadow_6_113", result: "shape" })
  ] }) })
] }), K0 = r(Q0), X0 = (l, a) => /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: a, ...l, children: [
  /* @__PURE__ */ e("g", { filter: "url(#ModuleMyDocuments_svg__a)", children: /* @__PURE__ */ e("path", { fill: "#fff", fillRule: "evenodd", d: "M3 6.55a2.7 2.7 0 0 1 2.7-2.7h4.757A2.443 2.443 0 0 1 12.9 6.293c0 .142.115.257.257.257H17.4a3.6 3.6 0 0 1 3.6 3.6v5.4a3.6 3.6 0 0 1-3.6 3.6H6.6a3.6 3.6 0 0 1-3.6-3.6zm11.118 4.394a2.144 2.144 0 1 1-4.289 0 2.144 2.144 0 0 1 4.289 0m-2.145 2.919c-1.203 0-2.264.567-3.081 1.21-.847.668-.284 1.827.795 1.827h4.573c1.079 0 1.642-1.159.795-1.826-.817-.644-1.878-1.211-3.081-1.211", clipRule: "evenodd" }) }),
  /* @__PURE__ */ e("defs", { children: /* @__PURE__ */ t("filter", { id: "ModuleMyDocuments_svg__a", width: 21.765, height: 19.065, x: 1.117, y: 2.909, colorInterpolationFilters: "sRGB", filterUnits: "userSpaceOnUse", children: [
    /* @__PURE__ */ e("feFlood", { floodOpacity: 0, result: "BackgroundImageFix" }),
    /* @__PURE__ */ e("feColorMatrix", { in: "SourceAlpha", result: "hardAlpha", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" }),
    /* @__PURE__ */ e("feOffset", { dy: 0.941 }),
    /* @__PURE__ */ e("feGaussianBlur", { stdDeviation: 0.941 }),
    /* @__PURE__ */ e("feComposite", { in2: "hardAlpha", operator: "out" }),
    /* @__PURE__ */ e("feColorMatrix", { values: "0 0 0 0 0.0352941 0 0 0 0 0.0627451 0 0 0 0 0.109804 0 0 0 0.12 0" }),
    /* @__PURE__ */ e("feBlend", { in2: "BackgroundImageFix", result: "effect1_dropShadow_6_117" }),
    /* @__PURE__ */ e("feBlend", { in: "SourceGraphic", in2: "effect1_dropShadow_6_117", result: "shape" })
  ] }) })
] }), Y0 = r(X0), J0 = (l, a) => /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 25 24", ref: a, ...l, children: [
  /* @__PURE__ */ e("g", { filter: "url(#ModuleOrganization_svg__a)", children: /* @__PURE__ */ e("path", { fill: "#fff", fillRule: "evenodd", d: "M14.506 8.99c0 .647-.124 1.265-.35 1.833a3.403 3.403 0 1 0-.977-5.21 4.94 4.94 0 0 1 1.327 3.376m-2.287 4.823c1.029-.62 2.23-1.074 3.546-1.074 2.173 0 4.037 1.239 5.32 2.422.89.818.246 2.116-.962 2.116h-3.19a2.6 2.6 0 0 0-.65-.917c-1.013-.932-2.4-1.964-4.064-2.546", clipRule: "evenodd" }) }),
  /* @__PURE__ */ e("g", { filter: "url(#ModuleOrganization_svg__b)", children: /* @__PURE__ */ e("circle", { cx: 9.545, cy: 8.989, r: 3.811, fill: "#fff" }) }),
  /* @__PURE__ */ e("g", { filter: "url(#ModuleOrganization_svg__c)", children: /* @__PURE__ */ e("path", { fill: "#fff", d: "M9.545 14.494c-2.433 0-4.52 1.387-5.958 2.712-.995.916-.275 2.37 1.078 2.37h9.761c1.353 0 2.073-1.454 1.078-2.37-1.438-1.325-3.525-2.712-5.959-2.712" }) }),
  /* @__PURE__ */ t("defs", { children: [
    /* @__PURE__ */ t("filter", { id: "ModuleOrganization_svg__a", width: 14.496, height: 18.072, x: 9.612, y: 3.116, colorInterpolationFilters: "sRGB", filterUnits: "userSpaceOnUse", children: [
      /* @__PURE__ */ e("feFlood", { floodOpacity: 0, result: "BackgroundImageFix" }),
      /* @__PURE__ */ e("feColorMatrix", { in: "SourceAlpha", result: "hardAlpha", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" }),
      /* @__PURE__ */ e("feOffset", { dy: 1.304 }),
      /* @__PURE__ */ e("feGaussianBlur", { stdDeviation: 1.304 }),
      /* @__PURE__ */ e("feComposite", { in2: "hardAlpha", operator: "out" }),
      /* @__PURE__ */ e("feColorMatrix", { values: "0 0 0 0 0.0352941 0 0 0 0 0.0627451 0 0 0 0 0.109804 0 0 0 0.12 0" }),
      /* @__PURE__ */ e("feBlend", { in2: "BackgroundImageFix", result: "effect1_dropShadow_6_234" }),
      /* @__PURE__ */ e("feBlend", { in: "SourceGraphic", in2: "effect1_dropShadow_6_234", result: "shape" })
    ] }),
    /* @__PURE__ */ t("filter", { id: "ModuleOrganization_svg__b", width: 13.462, height: 13.462, x: 2.814, y: 3.718, colorInterpolationFilters: "sRGB", filterUnits: "userSpaceOnUse", children: [
      /* @__PURE__ */ e("feFlood", { floodOpacity: 0, result: "BackgroundImageFix" }),
      /* @__PURE__ */ e("feColorMatrix", { in: "SourceAlpha", result: "hardAlpha", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" }),
      /* @__PURE__ */ e("feOffset", { dy: 1.46 }),
      /* @__PURE__ */ e("feGaussianBlur", { stdDeviation: 1.46 }),
      /* @__PURE__ */ e("feComposite", { in2: "hardAlpha", operator: "out" }),
      /* @__PURE__ */ e("feColorMatrix", { values: "0 0 0 0 0.0352941 0 0 0 0 0.0627451 0 0 0 0 0.109804 0 0 0 0.12 0" }),
      /* @__PURE__ */ e("feBlend", { in2: "BackgroundImageFix", result: "effect1_dropShadow_6_234" }),
      /* @__PURE__ */ e("feBlend", { in: "SourceGraphic", in2: "effect1_dropShadow_6_234", result: "shape" })
    ] }),
    /* @__PURE__ */ t("filter", { id: "ModuleOrganization_svg__c", width: 18.684, height: 10.921, x: 0.203, y: 13.034, colorInterpolationFilters: "sRGB", filterUnits: "userSpaceOnUse", children: [
      /* @__PURE__ */ e("feFlood", { floodOpacity: 0, result: "BackgroundImageFix" }),
      /* @__PURE__ */ e("feColorMatrix", { in: "SourceAlpha", result: "hardAlpha", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" }),
      /* @__PURE__ */ e("feOffset", { dy: 1.46 }),
      /* @__PURE__ */ e("feGaussianBlur", { stdDeviation: 1.46 }),
      /* @__PURE__ */ e("feComposite", { in2: "hardAlpha", operator: "out" }),
      /* @__PURE__ */ e("feColorMatrix", { values: "0 0 0 0 0.0352941 0 0 0 0 0.0627451 0 0 0 0 0.109804 0 0 0 0.12 0" }),
      /* @__PURE__ */ e("feBlend", { in2: "BackgroundImageFix", result: "effect1_dropShadow_6_234" }),
      /* @__PURE__ */ e("feBlend", { in: "SourceGraphic", in2: "effect1_dropShadow_6_234", result: "shape" })
    ] })
  ] })
] }), e2 = r(J0), a2 = (l, a) => /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: a, ...l, children: [
  /* @__PURE__ */ e("g", { filter: "url(#ModulePayroll_svg__a)", children: /* @__PURE__ */ e("path", { fill: "#fff", fillRule: "evenodd", d: "M6.046 4.51A3.046 3.046 0 0 0 3 7.556v6.092a3.046 3.046 0 0 0 3.046 3.045h9.137a3.046 3.046 0 0 0 3.046-3.046V7.557a3.046 3.046 0 0 0-3.046-3.046zM21 9.586a.761.761 0 1 0-1.523 0v4.57a3.807 3.807 0 0 1-3.807 3.806H8.055a.761.761 0 1 0 0 1.523h7.615a5.33 5.33 0 0 0 5.33-5.33zM10.615 6.794c.42 0 .761.341.761.762h.761a.761.761 0 0 1 0 1.523h-1.903a.38.38 0 0 0 0 .761h.761a1.904 1.904 0 0 1 .381 3.77v.038a.761.761 0 0 1-1.523 0h-.761a.761.761 0 1 1 0-1.523h1.903a.38.38 0 0 0 0-.762h-.761a1.904 1.904 0 0 1-.38-3.77v-.037c0-.42.34-.762.76-.762", clipRule: "evenodd" }) }),
  /* @__PURE__ */ e("defs", { children: /* @__PURE__ */ t("filter", { id: "ModulePayroll_svg__a", width: 21.186, height: 18.161, x: 1.407, y: 3.714, colorInterpolationFilters: "sRGB", filterUnits: "userSpaceOnUse", children: [
    /* @__PURE__ */ e("feFlood", { floodOpacity: 0, result: "BackgroundImageFix" }),
    /* @__PURE__ */ e("feColorMatrix", { in: "SourceAlpha", result: "hardAlpha", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" }),
    /* @__PURE__ */ e("feOffset", { dy: 0.796 }),
    /* @__PURE__ */ e("feGaussianBlur", { stdDeviation: 0.796 }),
    /* @__PURE__ */ e("feComposite", { in2: "hardAlpha", operator: "out" }),
    /* @__PURE__ */ e("feColorMatrix", { values: "0 0 0 0 0.0352941 0 0 0 0 0.0627451 0 0 0 0 0.109804 0 0 0 0.12 0" }),
    /* @__PURE__ */ e("feBlend", { in2: "BackgroundImageFix", result: "effect1_dropShadow_6_112" }),
    /* @__PURE__ */ e("feBlend", { in: "SourceGraphic", in2: "effect1_dropShadow_6_112", result: "shape" })
  ] }) })
] }), l2 = r(a2), r2 = (l, a) => /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 26 24", ref: a, ...l, children: [
  /* @__PURE__ */ e("g", { filter: "url(#ModulePerformance_svg__a)", children: /* @__PURE__ */ e("path", { fill: "#fff", d: "M16.333 8.667a1.333 1.333 0 0 1 0-2.667h5.334C22.403 6 23 6.597 23 7.333v5.334a1.333 1.333 0 1 1-2.667 0v-2.115l-4.97 4.97-.021.022c-.112.112-.246.246-.374.355a2 2 0 0 1-.683.394 2 2 0 0 1-1.236 0c-.31-.101-.535-.268-.683-.394a7 7 0 0 1-.374-.355l-.022-.022-2.303-2.303-4.39 4.39a1.333 1.333 0 0 1-1.886-1.885l4.579-4.58.021-.021c.113-.112.247-.246.375-.355a2 2 0 0 1 .683-.394 2 2 0 0 1 1.236 0c.31.1.535.268.683.394.128.108.262.243.374.355l.022.022 2.303 2.303 4.78-4.781z" }) }),
  /* @__PURE__ */ e("defs", { children: /* @__PURE__ */ t("filter", { id: "ModulePerformance_svg__a", width: 25.977, height: 17.977, x: 0.012, y: 4.506, colorInterpolationFilters: "sRGB", filterUnits: "userSpaceOnUse", children: [
    /* @__PURE__ */ e("feFlood", { floodOpacity: 0, result: "BackgroundImageFix" }),
    /* @__PURE__ */ e("feColorMatrix", { in: "SourceAlpha", result: "hardAlpha", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" }),
    /* @__PURE__ */ e("feOffset", { dy: 1.494 }),
    /* @__PURE__ */ e("feGaussianBlur", { stdDeviation: 1.494 }),
    /* @__PURE__ */ e("feComposite", { in2: "hardAlpha", operator: "out" }),
    /* @__PURE__ */ e("feColorMatrix", { values: "0 0 0 0 0.0352941 0 0 0 0 0.0627451 0 0 0 0 0.109804 0 0 0 0.12 0" }),
    /* @__PURE__ */ e("feBlend", { in2: "BackgroundImageFix", result: "effect1_dropShadow_6_110" }),
    /* @__PURE__ */ e("feBlend", { in: "SourceGraphic", in2: "effect1_dropShadow_6_110", result: "shape" })
  ] }) })
] }), o2 = r(r2), t2 = (l, a) => /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: a, ...l, children: [
  /* @__PURE__ */ t("g", { clipPath: "url(#ModuleProfile_svg__a)", children: [
    /* @__PURE__ */ e("g", { filter: "url(#ModuleProfile_svg__b)", children: /* @__PURE__ */ e("circle", { cx: 12, cy: 8, r: 4.5, fill: "#fff" }) }),
    /* @__PURE__ */ e("g", { filter: "url(#ModuleProfile_svg__c)", children: /* @__PURE__ */ e("path", { fill: "#fff", d: "M12 14.5c-2.873 0-5.337 1.638-7.035 3.202C3.79 18.784 4.64 20.5 6.237 20.5h11.526c1.597 0 2.447-1.716 1.272-2.798C17.338 16.138 14.874 14.5 12 14.5" }) })
  ] }),
  /* @__PURE__ */ t("defs", { children: [
    /* @__PURE__ */ t("filter", { id: "ModuleProfile_svg__b", width: 15.896, height: 15.896, x: 4.052, y: 1.776, colorInterpolationFilters: "sRGB", filterUnits: "userSpaceOnUse", children: [
      /* @__PURE__ */ e("feFlood", { floodOpacity: 0, result: "BackgroundImageFix" }),
      /* @__PURE__ */ e("feColorMatrix", { in: "SourceAlpha", result: "hardAlpha", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" }),
      /* @__PURE__ */ e("feOffset", { dy: 1.724 }),
      /* @__PURE__ */ e("feGaussianBlur", { stdDeviation: 1.724 }),
      /* @__PURE__ */ e("feComposite", { in2: "hardAlpha", operator: "out" }),
      /* @__PURE__ */ e("feColorMatrix", { values: "0 0 0 0 0.0352941 0 0 0 0 0.0627451 0 0 0 0 0.109804 0 0 0 0.12 0" }),
      /* @__PURE__ */ e("feBlend", { in2: "BackgroundImageFix", result: "effect1_dropShadow_5_37" }),
      /* @__PURE__ */ e("feBlend", { in: "SourceGraphic", in2: "effect1_dropShadow_5_37", result: "shape" })
    ] }),
    /* @__PURE__ */ t("filter", { id: "ModuleProfile_svg__c", width: 22.062, height: 12.896, x: 0.969, y: 12.776, colorInterpolationFilters: "sRGB", filterUnits: "userSpaceOnUse", children: [
      /* @__PURE__ */ e("feFlood", { floodOpacity: 0, result: "BackgroundImageFix" }),
      /* @__PURE__ */ e("feColorMatrix", { in: "SourceAlpha", result: "hardAlpha", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" }),
      /* @__PURE__ */ e("feOffset", { dy: 1.724 }),
      /* @__PURE__ */ e("feGaussianBlur", { stdDeviation: 1.724 }),
      /* @__PURE__ */ e("feComposite", { in2: "hardAlpha", operator: "out" }),
      /* @__PURE__ */ e("feColorMatrix", { values: "0 0 0 0 0.0352941 0 0 0 0 0.0627451 0 0 0 0 0.109804 0 0 0 0.12 0" }),
      /* @__PURE__ */ e("feBlend", { in2: "BackgroundImageFix", result: "effect1_dropShadow_5_37" }),
      /* @__PURE__ */ e("feBlend", { in: "SourceGraphic", in2: "effect1_dropShadow_5_37", result: "shape" })
    ] }),
    /* @__PURE__ */ e("clipPath", { id: "ModuleProfile_svg__a", children: /* @__PURE__ */ e("path", { fill: "#fff", d: "M0 0h24v24H0z" }) })
  ] })
] }), n2 = r(t2), i2 = (l, a) => /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 26 25", ref: a, ...l, children: [
  /* @__PURE__ */ e("g", { filter: "url(#ModuleProjects_svg__a)", children: /* @__PURE__ */ e("path", { fill: "#fff", fillRule: "evenodd", d: "M9 6a3 3 0 0 1 3-3h2a3 3 0 0 1 3 3h1a4 4 0 0 1 4 4v6a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4v-6a4 4 0 0 1 4-4zm-3 7v3a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-3h-5v.75c0 .69-.56 1.25-1.25 1.25h-1.5c-.69 0-1.25-.56-1.25-1.25V13zm5-7h4a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1m2 8a1 1 0 1 0 0-2 1 1 0 0 0 0 2", clipRule: "evenodd" }) }),
  /* @__PURE__ */ e("defs", { children: /* @__PURE__ */ t("filter", { id: "ModuleProjects_svg__a", width: 24.346, height: 23.346, x: 0.827, y: 1.413, colorInterpolationFilters: "sRGB", filterUnits: "userSpaceOnUse", children: [
    /* @__PURE__ */ e("feFlood", { floodOpacity: 0, result: "BackgroundImageFix" }),
    /* @__PURE__ */ e("feColorMatrix", { in: "SourceAlpha", result: "hardAlpha", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" }),
    /* @__PURE__ */ e("feOffset", { dy: 1.587 }),
    /* @__PURE__ */ e("feGaussianBlur", { stdDeviation: 1.587 }),
    /* @__PURE__ */ e("feComposite", { in2: "hardAlpha", operator: "out" }),
    /* @__PURE__ */ e("feColorMatrix", { values: "0 0 0 0 0.0352941 0 0 0 0 0.0627451 0 0 0 0 0.109804 0 0 0 0.12 0" }),
    /* @__PURE__ */ e("feBlend", { in2: "BackgroundImageFix", result: "effect1_dropShadow_6_241" }),
    /* @__PURE__ */ e("feBlend", { in: "SourceGraphic", in2: "effect1_dropShadow_6_241", result: "shape" })
  ] }) })
] }), s2 = r(i2), c2 = (l, a) => /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: a, ...l, children: [
  /* @__PURE__ */ e("g", { filter: "url(#ModuleRecruitment_svg__a)", children: /* @__PURE__ */ e("path", { fill: "#fff", fillRule: "evenodd", d: "M11.579 3.5a7.579 7.579 0 1 0 4.73 13.5l2.253 2.253a.842.842 0 0 0 1.191-1.19L17.5 15.81A7.579 7.579 0 0 0 11.578 3.5m2.32 5.65a2.15 2.15 0 1 1-4.298 0 2.15 2.15 0 0 1 4.298 0m-2.149 2.924c-1.206 0-2.27.569-3.09 1.215-.848.668-.283 1.83.798 1.83h4.584c1.081 0 1.646-1.162.797-1.83-.82-.646-1.883-1.215-3.089-1.215", clipRule: "evenodd" }) }),
  /* @__PURE__ */ e("defs", { children: /* @__PURE__ */ t("filter", { id: "ModuleRecruitment_svg__a", width: 21.578, height: 21.578, x: 1.211, y: 2.105, colorInterpolationFilters: "sRGB", filterUnits: "userSpaceOnUse", children: [
    /* @__PURE__ */ e("feFlood", { floodOpacity: 0, result: "BackgroundImageFix" }),
    /* @__PURE__ */ e("feColorMatrix", { in: "SourceAlpha", result: "hardAlpha", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" }),
    /* @__PURE__ */ e("feOffset", { dy: 1.395 }),
    /* @__PURE__ */ e("feGaussianBlur", { stdDeviation: 1.395 }),
    /* @__PURE__ */ e("feComposite", { in2: "hardAlpha", operator: "out" }),
    /* @__PURE__ */ e("feColorMatrix", { values: "0 0 0 0 0.0352941 0 0 0 0 0.0627451 0 0 0 0 0.109804 0 0 0 0.12 0" }),
    /* @__PURE__ */ e("feBlend", { in2: "BackgroundImageFix", result: "effect1_dropShadow_6_242" }),
    /* @__PURE__ */ e("feBlend", { in: "SourceGraphic", in2: "effect1_dropShadow_6_242", result: "shape" })
  ] }) })
] }), d2 = r(c2), f2 = (l, a) => /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 25", ref: a, ...l, children: [
  /* @__PURE__ */ e("g", { filter: "url(#ModuleReports_svg__a)", children: /* @__PURE__ */ e("path", { fill: "#fff", fillRule: "evenodd", d: "M10 5a2 2 0 1 1 4 0v14a2 2 0 1 1-4 0zM4 15a2 2 0 1 1 4 0v4a2 2 0 1 1-4 0zm14-6a2 2 0 0 0-2 2v8a2 2 0 1 0 4 0v-8a2 2 0 0 0-2-2", clipRule: "evenodd" }) }),
  /* @__PURE__ */ e("defs", { children: /* @__PURE__ */ t("filter", { id: "ModuleReports_svg__a", width: 20.184, height: 22.184, x: 1.908, y: 1.954, colorInterpolationFilters: "sRGB", filterUnits: "userSpaceOnUse", children: [
    /* @__PURE__ */ e("feFlood", { floodOpacity: 0, result: "BackgroundImageFix" }),
    /* @__PURE__ */ e("feColorMatrix", { in: "SourceAlpha", result: "hardAlpha", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" }),
    /* @__PURE__ */ e("feOffset", { dy: 1.046 }),
    /* @__PURE__ */ e("feGaussianBlur", { stdDeviation: 1.046 }),
    /* @__PURE__ */ e("feComposite", { in2: "hardAlpha", operator: "out" }),
    /* @__PURE__ */ e("feColorMatrix", { values: "0 0 0 0 0.0352941 0 0 0 0 0.0627451 0 0 0 0 0.109804 0 0 0 0.12 0" }),
    /* @__PURE__ */ e("feBlend", { in2: "BackgroundImageFix", result: "effect1_dropShadow_6_239" }),
    /* @__PURE__ */ e("feBlend", { in: "SourceGraphic", in2: "effect1_dropShadow_6_239", result: "shape" })
  ] }) })
] }), h2 = r(f2), v2 = (l, a) => /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: a, ...l, children: [
  /* @__PURE__ */ e("g", { filter: "url(#ModuleShifts_svg__a)", children: /* @__PURE__ */ e("path", { fill: "#fff", fillRule: "evenodd", d: "M3 7.786a3.43 3.43 0 0 1 3.429-3.429h10.285a3.43 3.43 0 0 1 3.429 3.429.857.857 0 0 1-1.714 0c0-.947-.768-1.715-1.715-1.715H6.43c-.947 0-1.715.768-1.715 1.715v6.857c0 .947.768 1.714 1.715 1.714h.857a.857.857 0 1 1 0 1.715h-.857A3.43 3.43 0 0 1 3 14.642zm2.571.857c0-.474.384-.857.858-.857h1.714a.857.857 0 0 1 0 1.714H6.429a.857.857 0 0 1-.858-.857m3.429 6a6 6 0 1 1 12 0 6 6 0 0 1-12 0m-2.571-4.286a.857.857 0 1 0 0 1.715h1.714a.857.857 0 0 0 0-1.715zm0 2.572a.857.857 0 0 0 0 1.714h.857a.857.857 0 0 0 0-1.714zM15 12.5c.473 0 .857.384.857.857v1.286l1.372 1.028a.857.857 0 0 1-1.029 1.372l-1.371-1.029a1.71 1.71 0 0 1-.686-1.371v-1.286c0-.473.384-.857.857-.857", clipRule: "evenodd" }) }),
  /* @__PURE__ */ e("defs", { children: /* @__PURE__ */ t("filter", { id: "ModuleShifts_svg__a", width: 21.586, height: 19.872, x: 1.207, y: 3.461, colorInterpolationFilters: "sRGB", filterUnits: "userSpaceOnUse", children: [
    /* @__PURE__ */ e("feFlood", { floodOpacity: 0, result: "BackgroundImageFix" }),
    /* @__PURE__ */ e("feColorMatrix", { in: "SourceAlpha", result: "hardAlpha", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" }),
    /* @__PURE__ */ e("feOffset", { dy: 0.897 }),
    /* @__PURE__ */ e("feGaussianBlur", { stdDeviation: 0.897 }),
    /* @__PURE__ */ e("feComposite", { in2: "hardAlpha", operator: "out" }),
    /* @__PURE__ */ e("feColorMatrix", { values: "0 0 0 0 0.0352941 0 0 0 0 0.0627451 0 0 0 0 0.109804 0 0 0 0.12 0" }),
    /* @__PURE__ */ e("feBlend", { in2: "BackgroundImageFix", result: "effect1_dropShadow_6_111" }),
    /* @__PURE__ */ e("feBlend", { in: "SourceGraphic", in2: "effect1_dropShadow_6_111", result: "shape" })
  ] }) })
] }), u2 = r(v2), g2 = (l, a) => /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: a, ...l, children: [
  /* @__PURE__ */ e("g", { filter: "url(#ModuleSoftware_svg__a)", children: /* @__PURE__ */ e("path", { fill: "#fff", d: "M3 7.5a3.6 3.6 0 0 1 3.6-3.6h10.8A3.6 3.6 0 0 1 21 7.5v5.4a3.6 3.6 0 0 1-3.6 3.6h-1.8v1.8h.9a.9.9 0 0 1 0 1.8h-9a.9.9 0 1 1 0-1.8h.9v-1.8H6.6A3.6 3.6 0 0 1 3 12.9zm3.6 7.2h10.8a1.8 1.8 0 0 0 1.8-1.8V7.5a1.8 1.8 0 0 0-1.8-1.8H6.6a1.8 1.8 0 0 0-1.8 1.8v5.4a1.8 1.8 0 0 0 1.8 1.8" }) }),
  /* @__PURE__ */ e("defs", { children: /* @__PURE__ */ t("filter", { id: "ModuleSoftware_svg__a", width: 22.184, height: 20.384, x: 0.908, y: 2.854, colorInterpolationFilters: "sRGB", filterUnits: "userSpaceOnUse", children: [
    /* @__PURE__ */ e("feFlood", { floodOpacity: 0, result: "BackgroundImageFix" }),
    /* @__PURE__ */ e("feColorMatrix", { in: "SourceAlpha", result: "hardAlpha", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" }),
    /* @__PURE__ */ e("feOffset", { dy: 1.046 }),
    /* @__PURE__ */ e("feGaussianBlur", { stdDeviation: 1.046 }),
    /* @__PURE__ */ e("feComposite", { in2: "hardAlpha", operator: "out" }),
    /* @__PURE__ */ e("feColorMatrix", { values: "0 0 0 0 0.0352941 0 0 0 0 0.0627451 0 0 0 0 0.109804 0 0 0 0.12 0" }),
    /* @__PURE__ */ e("feBlend", { in2: "BackgroundImageFix", result: "effect1_dropShadow_6_235" }),
    /* @__PURE__ */ e("feBlend", { in: "SourceGraphic", in2: "effect1_dropShadow_6_235", result: "shape" })
  ] }) })
] }), w2 = r(g2), p2 = (l, a) => /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: a, ...l, children: [
  /* @__PURE__ */ e("g", { filter: "url(#ModuleSpaces_svg__a)", children: /* @__PURE__ */ e("path", { fill: "#fff", fillRule: "evenodd", d: "M10.446 3.948a3.2 3.2 0 0 1 3.108 0l4.8 2.667A3.2 3.2 0 0 1 20 9.412v5.176a3.2 3.2 0 0 1-1.646 2.797l-4.8 2.667a3.2 3.2 0 0 1-3.108 0l-4.8-2.667A3.2 3.2 0 0 1 4 14.588V9.412a3.2 3.2 0 0 1 1.646-2.797zm2.331 1.399a1.6 1.6 0 0 0-1.554 0L6.447 8 12 11.085 17.553 8zm5.622 4.013L12.8 12.47v6.17l1.6-.889v-3.236a1.6 1.6 0 0 1 .823-1.399l.388-.215a.8.8 0 0 1 1.189.699v2.818l.777-.431a1.6 1.6 0 0 0 .823-1.4V9.36", clipRule: "evenodd" }) }),
  /* @__PURE__ */ e("defs", { children: /* @__PURE__ */ t("filter", { id: "ModuleSpaces_svg__a", width: 20.184, height: 21.093, x: 1.908, y: 2.5, colorInterpolationFilters: "sRGB", filterUnits: "userSpaceOnUse", children: [
    /* @__PURE__ */ e("feFlood", { floodOpacity: 0, result: "BackgroundImageFix" }),
    /* @__PURE__ */ e("feColorMatrix", { in: "SourceAlpha", result: "hardAlpha", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" }),
    /* @__PURE__ */ e("feOffset", { dy: 1.046 }),
    /* @__PURE__ */ e("feGaussianBlur", { stdDeviation: 1.046 }),
    /* @__PURE__ */ e("feComposite", { in2: "hardAlpha", operator: "out" }),
    /* @__PURE__ */ e("feColorMatrix", { values: "0 0 0 0 0.0352941 0 0 0 0 0.0627451 0 0 0 0 0.109804 0 0 0 0.12 0" }),
    /* @__PURE__ */ e("feBlend", { in2: "BackgroundImageFix", result: "effect1_dropShadow_6_238" }),
    /* @__PURE__ */ e("feBlend", { in: "SourceGraphic", in2: "effect1_dropShadow_6_238", result: "shape" })
  ] }) })
] }), m2 = r(p2), x2 = (l, a) => /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: a, ...l, children: [
  /* @__PURE__ */ t("g", { fill: "#fff", fillRule: "evenodd", clipRule: "evenodd", filter: "url(#ModuleSpending_svg__a)", children: [
    /* @__PURE__ */ e("path", { d: "M4 7.556a2.667 2.667 0 0 1 2.667-2.667h8a2.667 2.667 0 0 1 2.666 2.667v1.777c0 .491-.398.89-.889.89H6.667A2.667 2.667 0 0 1 4 7.555m2.667-.89a.889.889 0 1 0 0 1.779h8.888v-.89a.89.89 0 0 0-.889-.888z" }),
    /* @__PURE__ */ e("path", { d: "M5.778 7.556H4v8a3.556 3.556 0 0 0 3.556 3.555h8.889A3.555 3.555 0 0 0 20 15.555V12a3.556 3.556 0 0 0-3.556-3.555H5.778zM16 15.11a1.333 1.333 0 1 0 0-2.667 1.333 1.333 0 0 0 0 2.667" })
  ] }),
  /* @__PURE__ */ e("defs", { children: /* @__PURE__ */ t("filter", { id: "ModuleSpending_svg__a", width: 20.508, height: 18.73, x: 1.746, y: 3.762, colorInterpolationFilters: "sRGB", filterUnits: "userSpaceOnUse", children: [
    /* @__PURE__ */ e("feFlood", { floodOpacity: 0, result: "BackgroundImageFix" }),
    /* @__PURE__ */ e("feColorMatrix", { in: "SourceAlpha", result: "hardAlpha", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" }),
    /* @__PURE__ */ e("feOffset", { dy: 1.127 }),
    /* @__PURE__ */ e("feGaussianBlur", { stdDeviation: 1.127 }),
    /* @__PURE__ */ e("feComposite", { in2: "hardAlpha", operator: "out" }),
    /* @__PURE__ */ e("feColorMatrix", { values: "0 0 0 0 0.0352941 0 0 0 0 0.0627451 0 0 0 0 0.109804 0 0 0 0.12 0" }),
    /* @__PURE__ */ e("feBlend", { in2: "BackgroundImageFix", result: "effect1_dropShadow_6_114" }),
    /* @__PURE__ */ e("feBlend", { in: "SourceGraphic", in2: "effect1_dropShadow_6_114", result: "shape" })
  ] }) })
] }), C2 = r(x2), M2 = (l, a) => /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: a, ...l, children: [
  /* @__PURE__ */ e("g", { filter: "url(#ModuleTasks_svg__a)", children: /* @__PURE__ */ e("path", { fill: "#fff", fillRule: "evenodd", d: "M4 12a8 8 0 1 1 16 0 8 8 0 0 1-16 0m11.338-2.592a.8.8 0 0 1 .054 1.13l-4 4.4a.8.8 0 0 1-1.158.028l-1.6-1.6a.8.8 0 0 1 1.132-1.132l1.006 1.007 3.436-3.78a.8.8 0 0 1 1.13-.053", clipRule: "evenodd" }) }),
  /* @__PURE__ */ e("defs", { children: /* @__PURE__ */ t("filter", { id: "ModuleTasks_svg__a", width: 20.649, height: 20.649, x: 1.676, y: 2.838, colorInterpolationFilters: "sRGB", filterUnits: "userSpaceOnUse", children: [
    /* @__PURE__ */ e("feFlood", { floodOpacity: 0, result: "BackgroundImageFix" }),
    /* @__PURE__ */ e("feColorMatrix", { in: "SourceAlpha", result: "hardAlpha", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" }),
    /* @__PURE__ */ e("feOffset", { dy: 1.162 }),
    /* @__PURE__ */ e("feGaussianBlur", { stdDeviation: 1.162 }),
    /* @__PURE__ */ e("feComposite", { in2: "hardAlpha", operator: "out" }),
    /* @__PURE__ */ e("feColorMatrix", { values: "0 0 0 0 0.0352941 0 0 0 0 0.0627451 0 0 0 0 0.109804 0 0 0 0.12 0" }),
    /* @__PURE__ */ e("feBlend", { in2: "BackgroundImageFix", result: "effect1_dropShadow_5_99" }),
    /* @__PURE__ */ e("feBlend", { in: "SourceGraphic", in2: "effect1_dropShadow_5_99", result: "shape" })
  ] }) })
] }), S2 = r(M2), b2 = (l, a) => /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 25", ref: a, ...l, children: [
  /* @__PURE__ */ e("g", { filter: "url(#ModuleTimeOff_svg__a)", children: /* @__PURE__ */ e("path", { fill: "#fff", fillRule: "evenodd", d: "M8.907 3.573c-1.102-.007-2.253.416-2.734 1.31a.89.89 0 0 0 .089.974l1.043 1.305C4.51 7.693 3.036 9.572 3 11.328c-.01.517.41.906.888.906h1.418a4.7 4.7 0 0 0-.244 3.477.888.888 0 0 0 1.244.524l3.222-1.61-.343 4.116H7.921a.843.843 0 0 0 0 1.686h8.158a.843.843 0 0 0 0-1.686h-1.264l-.343-4.117 3.222 1.611a.888.888 0 0 0 1.244-.524 4.7 4.7 0 0 0-.244-3.477h1.418a.89.89 0 0 0 .888-.906c-.036-1.757-1.51-3.635-4.305-4.166l1.043-1.305a.89.89 0 0 0 .09-.974c-.482-.894-1.633-1.317-2.735-1.31-.98.007-2.08.338-3.093 1.123-1.013-.785-2.112-1.116-3.093-1.123m3.8 10.169L12 13.388l-.707.354-.417 5h2.248z", clipRule: "evenodd" }) }),
  /* @__PURE__ */ e("defs", { children: /* @__PURE__ */ t("filter", { id: "ModuleTimeOff_svg__a", width: 23.811, height: 22.665, x: 0.095, y: 2.12, colorInterpolationFilters: "sRGB", filterUnits: "userSpaceOnUse", children: [
    /* @__PURE__ */ e("feFlood", { floodOpacity: 0, result: "BackgroundImageFix" }),
    /* @__PURE__ */ e("feColorMatrix", { in: "SourceAlpha", result: "hardAlpha", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" }),
    /* @__PURE__ */ e("feOffset", { dy: 1.453 }),
    /* @__PURE__ */ e("feGaussianBlur", { stdDeviation: 1.453 }),
    /* @__PURE__ */ e("feComposite", { in2: "hardAlpha", operator: "out" }),
    /* @__PURE__ */ e("feColorMatrix", { values: "0 0 0 0 0.0352941 0 0 0 0 0.0627451 0 0 0 0 0.109804 0 0 0 0.12 0" }),
    /* @__PURE__ */ e("feBlend", { in2: "BackgroundImageFix", result: "effect1_dropShadow_5_100" }),
    /* @__PURE__ */ e("feBlend", { in: "SourceGraphic", in2: "effect1_dropShadow_5_100", result: "shape" })
  ] }) })
] }), y2 = r(b2), B2 = (l, a) => /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: a, ...l, children: [
  /* @__PURE__ */ e("g", { filter: "url(#ModuleTimeTracking_svg__a)", children: /* @__PURE__ */ e("path", { fill: "#fff", fillRule: "evenodd", d: "M8.85 2.05a.9.9 0 1 0 0 1.8h2.25v.95a8.101 8.101 0 1 0 1.8 0v-.95h2.25a.9.9 0 1 0 0-1.8zM6.336 5.836a.9.9 0 0 0-1.272-1.272l-1.8 1.8a.9.9 0 0 0 1.272 1.272zm12.6-1.272a.9.9 0 0 0-1.272 1.272l1.8 1.8a.9.9 0 0 0 1.272-1.272zM12.9 9.7a.9.9 0 0 0-1.8 0v2.628a1.8 1.8 0 0 0 .907 1.563l2.697 1.54a.9.9 0 1 0 .893-1.562L12.9 12.328z", clipRule: "evenodd" }) }),
  /* @__PURE__ */ e("defs", { children: /* @__PURE__ */ t("filter", { id: "ModuleTimeTracking_svg__a", width: 21.765, height: 22.666, x: 1.117, y: 1.109, colorInterpolationFilters: "sRGB", filterUnits: "userSpaceOnUse", children: [
    /* @__PURE__ */ e("feFlood", { floodOpacity: 0, result: "BackgroundImageFix" }),
    /* @__PURE__ */ e("feColorMatrix", { in: "SourceAlpha", result: "hardAlpha", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" }),
    /* @__PURE__ */ e("feOffset", { dy: 0.941 }),
    /* @__PURE__ */ e("feGaussianBlur", { stdDeviation: 0.941 }),
    /* @__PURE__ */ e("feComposite", { in2: "hardAlpha", operator: "out" }),
    /* @__PURE__ */ e("feColorMatrix", { values: "0 0 0 0 0.0352941 0 0 0 0 0.0627451 0 0 0 0 0.109804 0 0 0 0.12 0" }),
    /* @__PURE__ */ e("feBlend", { in2: "BackgroundImageFix", result: "effect1_dropShadow_6_115" }),
    /* @__PURE__ */ e("feBlend", { in: "SourceGraphic", in2: "effect1_dropShadow_6_115", result: "shape" })
  ] }) })
] }), R2 = r(B2), _2 = (l, a) => /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 25", ref: a, ...l, children: [
  /* @__PURE__ */ e("g", { filter: "url(#ModuleTrainings_svg__a)", children: /* @__PURE__ */ e("path", { fill: "#fff", d: "M12 6.83C10.748 6.076 9.515 5.3 8.277 5.3c-1.414 0-2.715.547-3.943 1.53A.89.89 0 0 0 4 7.524v8.373c0 .765.464 1.328.998 1.615.524.282 1.198.35 1.81.094 1.354-.569 2.815-.38 4.698.88.299.199.689.199.988 0 1.883-1.26 3.344-1.449 4.699-.88.61.256 1.285.188 1.81-.094.533-.287.997-.85.997-1.615V7.524a.89.89 0 0 0-.334-.694c-1.228-.983-2.529-1.53-3.943-1.53-1.239 0-2.471.776-3.723 1.53" }) }),
  /* @__PURE__ */ e("defs", { children: /* @__PURE__ */ t("filter", { id: "ModuleTrainings_svg__a", width: 23.758, height: 21.093, x: 0.121, y: 3.361, colorInterpolationFilters: "sRGB", filterUnits: "userSpaceOnUse", children: [
    /* @__PURE__ */ e("feFlood", { floodOpacity: 0, result: "BackgroundImageFix" }),
    /* @__PURE__ */ e("feColorMatrix", { in: "SourceAlpha", result: "hardAlpha", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" }),
    /* @__PURE__ */ e("feOffset", { dy: 1.939 }),
    /* @__PURE__ */ e("feGaussianBlur", { stdDeviation: 1.939 }),
    /* @__PURE__ */ e("feComposite", { in2: "hardAlpha", operator: "out" }),
    /* @__PURE__ */ e("feColorMatrix", { values: "0 0 0 0 0.0352941 0 0 0 0 0.0627451 0 0 0 0 0.109804 0 0 0 0.12 0" }),
    /* @__PURE__ */ e("feBlend", { in2: "BackgroundImageFix", result: "effect1_dropShadow_1_4" }),
    /* @__PURE__ */ e("feBlend", { in: "SourceGraphic", in2: "effect1_dropShadow_1_4", result: "shape" })
  ] }) })
] }), F2 = r(_2), z2 = (l, a) => /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: a, ...l, children: [
  /* @__PURE__ */ e("g", { filter: "url(#ModuleWorkflows_svg__a)", children: /* @__PURE__ */ e("path", { fill: "#fff", d: "M18.42 4.455a1.125 1.125 0 0 0-1.59 1.59l.329.33h-3.85A4.5 4.5 0 0 0 9.491 8.49l-.83 1.328a2.25 2.25 0 0 1-1.908 1.057H4.125a1.125 1.125 0 0 0 0 2.25h2.63c.775 0 1.496.4 1.907 1.057l.83 1.328a4.5 4.5 0 0 0 3.816 2.115h3.851l-.33.33a1.125 1.125 0 0 0 1.592 1.59l2.25-2.25c.439-.439.439-1.151 0-1.59l-2.25-2.25a1.125 1.125 0 0 0-1.591 1.59l.329.33h-3.85a2.25 2.25 0 0 1-1.909-1.057l-.83-1.328a4.5 4.5 0 0 0-.839-.99c.322-.284.606-.616.84-.99l.83-1.328a2.25 2.25 0 0 1 1.907-1.057h3.851l-.33.33a1.125 1.125 0 0 0 1.592 1.59l2.25-2.25c.439-.439.439-1.151 0-1.59z" }) }),
  /* @__PURE__ */ e("defs", { children: /* @__PURE__ */ t("filter", { id: "ModuleWorkflows_svg__a", width: 22.707, height: 20.457, x: 0.647, y: 2.948, colorInterpolationFilters: "sRGB", filterUnits: "userSpaceOnUse", children: [
    /* @__PURE__ */ e("feFlood", { floodOpacity: 0, result: "BackgroundImageFix" }),
    /* @__PURE__ */ e("feColorMatrix", { in: "SourceAlpha", result: "hardAlpha", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" }),
    /* @__PURE__ */ e("feOffset", { dy: 1.177 }),
    /* @__PURE__ */ e("feGaussianBlur", { stdDeviation: 1.177 }),
    /* @__PURE__ */ e("feComposite", { in2: "hardAlpha", operator: "out" }),
    /* @__PURE__ */ e("feColorMatrix", { values: "0 0 0 0 0.0352941 0 0 0 0 0.0627451 0 0 0 0 0.109804 0 0 0 0.12 0" }),
    /* @__PURE__ */ e("feBlend", { in2: "BackgroundImageFix", result: "effect1_dropShadow_6_240" }),
    /* @__PURE__ */ e("feBlend", { in: "SourceGraphic", in2: "effect1_dropShadow_6_240", result: "shape" })
  ] }) })
] }), A2 = r(z2), N2 = (l, a) => /* @__PURE__ */ e("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: a, ...l, children: /* @__PURE__ */ e("path", { fill: "currentColor", d: "M11.612 4.078a1 1 0 0 1 .776 0l9.5 4a1 1 0 0 1 0 1.844L20 10.717V16a1 1 0 0 1-.606.92l-7 3a1 1 0 0 1-.788 0l-7-3A1 1 0 0 1 4 16v-5.283l-1.888-.795a1 1 0 0 1 0-1.844zM17 11.98v1.52a1 1 0 1 1-2 0v-.678l-2.612 1.1a1 1 0 0 1-.776 0L6 11.559v3.782l6 2.571 6-2.571v-3.782zm-.621-1.909L18.923 9 12 6.085 5.077 9 12 11.915l1.951-.821-2.398-1.2a1 1 0 1 1 .894-1.788z" }) }), H2 = r(N2), k2 = (l, a) => /* @__PURE__ */ e("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: a, ...l, children: /* @__PURE__ */ e("path", { fill: "currentColor", d: "M12 4a1 1 0 0 1 1 1v6h6a1 1 0 1 1 0 2h-6v6a1 1 0 1 1-2 0v-6H5a1 1 0 1 1 0-2h6V5a1 1 0 0 1 1-1" }) }), $2 = r(k2), V2 = (l, a) => /* @__PURE__ */ e("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: a, ...l, children: /* @__PURE__ */ e("path", { fill: "currentColor", d: "M10 5a1 1 0 0 1 1 1c0 3.464 2.378 6 5 6a1 1 0 1 1 0 2c-2.622 0-5 2.536-5 6a1 1 0 1 1-2 0c0-3.464-2.378-6-5-6a1 1 0 1 1 0-2c2.622 0 5-2.536 5-6a1 1 0 0 1 1-1m0 5.118C9.375 11.31 8.484 12.313 7.405 13c1.079.687 1.97 1.69 2.595 2.882.625-1.192 1.516-2.195 2.595-2.882-1.079-.687-1.97-1.69-2.595-2.882M17.5 3a1 1 0 0 1 1 1A1.5 1.5 0 0 0 20 5.5a1 1 0 1 1 0 2A1.5 1.5 0 0 0 18.5 9a1 1 0 1 1-2 0A1.5 1.5 0 0 0 15 7.5a1 1 0 1 1 0-2A1.5 1.5 0 0 0 16.5 4a1 1 0 0 1 1-1" }) }), L2 = r(V2), I2 = (l, a) => /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: a, ...l, children: [
  /* @__PURE__ */ e("path", { fill: "currentColor", d: "M11.033 8.06a.97.97 0 1 1 1.935 0l-.303 3.9a.667.667 0 0 1-1.33 0zM13 15a1 1 0 1 1-2 0 1 1 0 0 1 2 0" }),
  /* @__PURE__ */ e("path", { fill: "currentColor", d: "M12 18a6 6 0 1 1 0-12 6 6 0 0 1 0 12m0 2a8 8 0 1 0 0-16 8 8 0 0 0 0 16" })
] }), O2 = r(I2), T2 = (l, a) => /* @__PURE__ */ e("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: a, ...l, children: /* @__PURE__ */ e("path", { fill: "currentColor", d: "M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16m-.967-11.94a.97.97 0 1 1 1.935 0l-.303 3.9a.667.667 0 0 1-1.33 0zM13 15a1 1 0 1 1-2 0 1 1 0 0 1 2 0" }) }), G2 = r(T2), D2 = (l, a) => /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: a, ...l, children: [
  /* @__PURE__ */ e("path", { fill: "currentColor", d: "M11 16a1 1 0 1 1 2 0 1 1 0 0 1-2 0M12 9a1 1 0 0 0-1 1v3a1 1 0 1 0 2 0v-3a1 1 0 0 0-1-1" }),
  /* @__PURE__ */ e("path", { fill: "currentColor", fillRule: "evenodd", d: "M9.385 5.609c1.147-2.04 4.083-2.04 5.23 0l5.58 9.92c1.125 2-.32 4.471-2.615 4.471H6.42c-2.295 0-3.74-2.471-2.615-4.47zm3.486.98a1 1 0 0 0-1.743 0l-5.58 9.92A1 1 0 0 0 6.42 18h11.16a1 1 0 0 0 .872-1.49z", clipRule: "evenodd" })
] }), P2 = r(D2), U2 = (l, a) => /* @__PURE__ */ e("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: a, ...l, children: /* @__PURE__ */ e("path", { fill: "currentColor", d: "M12 5c.848 0 1.52.715 1.467 1.561l-.469 7.501a1 1 0 0 1-1.996 0l-.469-7.5A1.47 1.47 0 0 1 12 5M13.5 17.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" }) }), j2 = r(U2), E2 = (l, a) => /* @__PURE__ */ e("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: a, ...l, children: /* @__PURE__ */ e("path", { fill: "currentColor", d: "M4 8a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1M4 12a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1M8 16a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2H9a1 1 0 0 1-1-1" }) }), W2 = r(E2), q2 = (l, a) => /* @__PURE__ */ e("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: a, ...l, children: /* @__PURE__ */ e("path", { fill: "currentColor", d: "M4 8a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1M4 12a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1M4 16a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1" }) }), Z2 = r(q2), Q2 = (l, a) => /* @__PURE__ */ e("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: a, ...l, children: /* @__PURE__ */ e("path", { fill: "currentColor", d: "M4 8a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1M4 12a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1M4 16a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1" }) }), K2 = r(Q2), X2 = (l, a) => /* @__PURE__ */ e("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: a, ...l, children: /* @__PURE__ */ e("path", { fill: "currentColor", d: "M4 8a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1M4 12a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1M12 16a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2h-6a1 1 0 0 1-1-1" }) }), Y2 = r(X2), J2 = (l, a) => /* @__PURE__ */ e("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: a, ...l, children: /* @__PURE__ */ e("path", { fill: "currentColor", d: "M20 12a8 8 0 1 1-16 0 8 8 0 0 1 16 0m-8-6a6 6 0 1 0 0 12z" }) }), ee = r(J2), ae = (l, a) => /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: a, ...l, children: [
  /* @__PURE__ */ e("path", { fill: "currentColor", d: "M20.616 5.868a2 2 0 0 0-2.232-1.736L4.368 5.884a2 2 0 0 0-1.736 2.232l.252 2.016c.09.716.547 1.296 1.16 1.574A1 1 0 0 0 4 12v3a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4v-3a1 1 0 1 0-2 0v3a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-3q0-.123-.029-.239l13.16-1.645a2 2 0 0 0 1.737-2.232zm-16 2 14.016-1.752.252 2.016L4.868 9.884z" }),
  /* @__PURE__ */ e("path", { fill: "currentColor", d: "M9 14a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2h-4a1 1 0 0 1-1-1" })
] }), le = r(ae), re = (l, a) => /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: a, ...l, children: [
  /* @__PURE__ */ e("path", { fill: "currentColor", d: "M5 5a2 2 0 0 0-2 2v2a2 2 0 0 0 1 1.732V15a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4v-4.268A2 2 0 0 0 21 9V7a2 2 0 0 0-2-2zm13 6v4a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-4zM5 9V7h14v2z" }),
  /* @__PURE__ */ e("path", { fill: "currentColor", d: "M9 14a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2h-4a1 1 0 0 1-1-1" })
] }), oe = r(re), te = (l, a) => /* @__PURE__ */ e("svg", { width: "192", height: "192", viewBox: "0 0 192 192", ref: a, ...l, fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ e("path", { d: "M154.5 34.5C156.157 34.5 157.5 35.8431 157.5 37.5C157.5 39.1569 156.157 40.5 154.5 40.5C153.414 40.5 152.464 39.9234 151.937 39.0598C151.889 38.9657 151.839 38.8727 151.786 38.7809C151.603 38.3924 151.5 37.9582 151.5 37.5C151.5 35.8431 152.843 34.5 154.5 34.5ZM139.5 37.5C139.5 38.5682 139.612 39.6104 139.824 40.6155L117.905 68.0133C116.66 67.6785 115.351 67.5 114 67.5C110.099 67.5 106.546 68.9892 103.878 71.4302L88.4996 64.5968L88.4999 64.5C88.4999 56.2157 81.7842 49.5 73.4999 49.5C65.2157 49.5 58.4999 56.2157 58.4999 64.5C58.4999 65.1326 58.5391 65.756 58.6151 66.368L36 79.5556V30C36 26.6863 33.3137 24 29.9999 24C26.6862 24 23.9999 26.6863 23.9999 30V89.8974C23.9986 89.9695 23.9986 90.0416 23.9999 90.1139V143.874C23.9981 143.961 23.9981 144.047 23.9999 144.134V165C23.9999 168.314 26.6862 171 29.9999 171H165C168.314 171 171 168.314 171 165C171 161.686 168.314 159 165 159H36V147.804L54.7959 138.939C57.4117 141.16 60.7993 142.5 64.4999 142.5C70.6509 142.5 75.9371 138.798 78.2518 133.5H95.7481C98.0628 138.798 103.349 142.5 109.5 142.5C117.784 142.5 124.5 135.784 124.5 127.5C124.5 127.017 124.477 126.54 124.433 126.069L143.673 115.381C146.403 118.228 150.244 120 154.5 120C162.784 120 169.5 113.284 169.5 105C169.5 96.7157 162.784 90 154.5 90C146.568 90 140.074 96.1567 139.536 103.952L118.605 115.579C116.08 113.647 112.924 112.5 109.5 112.5C103.349 112.5 98.0628 116.202 95.7481 121.5H78.2518C75.9371 116.202 70.6509 112.5 64.4999 112.5C56.2157 112.5 49.4999 119.216 49.4999 127.5C49.4999 127.722 49.5048 127.942 49.5143 128.162L36 134.536V93.4468L64.7476 76.6832C67.2108 78.4559 70.2335 79.5 73.4999 79.5C77.4042 79.5 80.9601 78.0083 83.6288 75.5638L99.0003 82.3943L98.9999 82.5C98.9999 90.7843 105.716 97.5 114 97.5C122.284 97.5 129 90.7843 129 82.5C129 79.9758 128.376 77.5971 127.275 75.5098L147.199 50.6062C149.36 51.8125 151.849 52.5 154.5 52.5C162.784 52.5 169.5 45.7843 169.5 37.5C169.5 29.2157 162.784 22.5 154.5 22.5C146.216 22.5 139.5 29.2157 139.5 37.5ZM67.4999 127.5C67.4999 129.157 66.1568 130.5 64.4999 130.5C62.8431 130.5 61.4999 129.157 61.4999 127.5C61.4999 125.843 62.8431 124.5 64.4999 124.5C66.1568 124.5 67.4999 125.843 67.4999 127.5ZM111.222 81.3655L111.262 81.2772L111.297 81.1973C111.782 80.1929 112.81 79.5 114 79.5C115.657 79.5 117 80.8431 117 82.5C117 84.1569 115.657 85.5 114 85.5C112.343 85.5 111 84.1569 111 82.5C111 82.0985 111.079 81.7155 111.222 81.3655ZM70.9109 66.0164C70.6497 65.5714 70.4999 65.0532 70.4999 64.5C70.4999 62.8431 71.8431 61.5 73.4999 61.5C75.1568 61.5 76.4999 62.8431 76.4999 64.5C76.4999 66.1569 75.1568 67.5 73.4999 67.5C72.4181 67.5 71.4699 66.9273 70.9422 66.0685L70.9109 66.0164ZM109.5 130.5C107.843 130.5 106.5 129.157 106.5 127.5C106.5 125.843 107.843 124.5 109.5 124.5C111.157 124.5 112.5 125.843 112.5 127.5C112.5 129.157 111.157 130.5 109.5 130.5ZM151.662 105.976C151.632 105.843 151.596 105.711 151.556 105.579C151.519 105.392 151.5 105.198 151.5 105C151.5 103.343 152.843 102 154.5 102C156.157 102 157.5 103.343 157.5 105C157.5 106.657 156.157 108 154.5 108C153.185 108 152.067 107.154 151.662 105.976Z", fill: "#F5A51C", fillOpacity: "0.05" }) }), m1 = r(te), ne = (l, a) => /* @__PURE__ */ e("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: a, ...l, children: /* @__PURE__ */ e("path", { fill: "currentColor", d: "M11.707 5.293a1 1 0 0 0-1.414 0l-6 6a1 1 0 0 0 0 1.414l6 6a1 1 0 0 0 1.414-1.414L7.414 13H19a1 1 0 1 0 0-2H7.414l4.293-4.293a1 1 0 0 0 0-1.414" }) }), ie = r(ne), se = (l, a) => /* @__PURE__ */ e("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: a, ...l, children: /* @__PURE__ */ e("path", { fill: "currentColor", d: "M12.293 5.293a1 1 0 0 1 1.414 0l6 6a1 1 0 0 1 0 1.414l-6 6a1 1 0 0 1-1.414-1.414L16.586 13H5a1 1 0 1 1 0-2h11.586l-4.293-4.293a1 1 0 0 1 0-1.414" }) }), ce = r(se), de = (l, a) => /* @__PURE__ */ e("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: a, ...l, children: /* @__PURE__ */ e("path", { fill: "currentColor", d: "M17 11a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7M7.5 8.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3M11 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0M4.02 12.443a1 1 0 0 1 1.067-.927l13.966.976a1 1 0 1 1-.14 1.995L13 14.074V18h1a1 1 0 1 1 0 2h-4a1 1 0 1 1 0-2h1v-4q0-.033.002-.066l-6.055-.423a1 1 0 0 1-.928-1.068" }) }), fe = r(de), he = (l, a) => /* @__PURE__ */ e("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: a, ...l, children: /* @__PURE__ */ e("path", { fill: "currentColor", d: "M9.097 17.255a1 1 0 0 1 1.412.078c.367.41.899.667 1.49.667.593 0 1.124-.256 1.492-.667a1 1 0 1 1 1.49 1.334A4 4 0 0 1 12 20a4 4 0 0 1-2.981-1.333 1 1 0 0 1 .078-1.412M12 5a4 4 0 0 0-4 4v.726c0 .44-.175.863-.487 1.175l-.774.774A1.362 1.362 0 0 0 7.702 14h8.596a1.362 1.362 0 0 0 .963-2.325l-.774-.774A1.66 1.66 0 0 1 16 9.726V9a4 4 0 0 0-4-4M6 9a6 6 0 1 1 12 0v.586l.675.675A3.362 3.362 0 0 1 16.297 16H7.702a3.362 3.362 0 0 1-2.377-5.74L6 9.587z" }) }), ve = r(he), ue = (l, a) => /* @__PURE__ */ e("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: a, ...l, children: /* @__PURE__ */ e("path", { fill: "currentColor", fillRule: "evenodd", d: "M9 4a3.5 3.5 0 0 0-3.5 3.5v9A3.5 3.5 0 0 0 9 20h6v-.003c2.715-.084 5-2.227 5-4.997 0-2.194-1.434-3.994-3.379-4.69A4.5 4.5 0 0 0 12.5 4zm3.5 6a1.5 1.5 0 0 0 0-3H9a.5.5 0 0 0-.5.5V10zm-4 3h6.333c1.263 0 2.167.96 2.167 2s-.904 2-2.167 2H9a.5.5 0 0 1-.5-.5z", clipRule: "evenodd" }) }), ge = r(ue), we = (l, a) => /* @__PURE__ */ e("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: a, ...l, children: /* @__PURE__ */ e("path", { fill: "currentColor", d: "M11 2a3 3 0 0 0-3 3H7a4 4 0 0 0-4 4v6a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4V9a4 4 0 0 0-4-4h-1a3 3 0 0 0-3-3zm3 3h-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1M5 9a2 2 0 0 1 2-2v10a2 2 0 0 1-2-2zm4 8V7h6v10zm8 0V7a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2" }) }), x1 = r(we), pe = (l, a) => /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: a, ...l, children: [
  /* @__PURE__ */ e("path", { fill: "currentColor", d: "M7.954 4.276q.134-.237.34-.445c.858-.857 2.128-.712 3.082-.372 1.034.37 2.14 1.103 3.117 2.08s1.712 2.084 2.083 3.12c.342.953.492 2.227-.367 3.086a2 2 0 0 1-.409.32l-5.272 3.954a4.5 4.5 0 0 1-5.882-.418l-.152-.153a4.5 4.5 0 0 1-.447-5.843zm1.782.952-.057.077a.6.6 0 0 0-.022.144c-.01.176.025.442.15.791.249.698.794 1.56 1.61 2.375.815.816 1.68 1.364 2.38 1.615.35.125.618.162.795.152a.6.6 0 0 0 .151-.025l.067-.05.005-.012a.5.5 0 0 0 .03-.166c.01-.178-.026-.445-.152-.796-.25-.7-.798-1.564-1.614-2.38s-1.677-1.361-2.375-1.61c-.35-.125-.615-.16-.792-.15a.5.5 0 0 0-.176.035m2.92 6.695c-.896-.406-1.822-1.062-2.654-1.893-.819-.82-1.467-1.73-1.872-2.611l-2.47 3.369a2.5 2.5 0 0 0 .248 3.246l.153.153a2.5 2.5 0 0 0 3.267.232z" }),
  /* @__PURE__ */ e("path", { fill: "currentColor", fillRule: "evenodd", d: "M17.5 15.063a8 8 0 0 0-.402.616c-.358.616-.598 1.256-.598 1.821a1 1 0 1 0 2 0c0-.565-.24-1.205-.598-1.82a8 8 0 0 0-.402-.617m-.913-2.051a1.226 1.226 0 0 1 1.826 0c.267.297.773.898 1.218 1.662.435.748.869 1.75.869 2.826a3 3 0 0 1-6 0c0-1.076.434-2.078.87-2.826.444-.764.95-1.365 1.217-1.662", clipRule: "evenodd" })
] }), me = r(pe), xe = (l, a) => /* @__PURE__ */ e("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: a, ...l, children: /* @__PURE__ */ e("path", { fill: "currentColor", d: "M4.77 8.452a1 1 0 0 1 .273-.908l2-2a1 1 0 0 1 .871-.28l5.493.916 2.136-2.136a3.121 3.121 0 1 1 4.414 4.414l-2.136 2.137.915 5.492a1 1 0 0 1-.279.871l-2 2a1 1 0 0 1-1.636-.335l-1.436-3.592-1.635 1.635v1.585a1 1 0 0 1-.293.707l-2 2a1 1 0 0 1-1.677-.464l-.855-3.418-3.418-.855a1 1 0 0 1-.464-1.677l2-2a1 1 0 0 1 .707-.293h1.586l1.635-1.634L5.379 9.18a1 1 0 0 1-.609-.728m2.76-.566 3.591 1.437a1 1 0 0 1 .336 1.635l-3 3a1 1 0 0 1-.707.293H6.164l-.458.459 2.287.571a1 1 0 0 1 .727.728l.572 2.286.458-.458v-1.586a1 1 0 0 1 .293-.707l3-3a1 1 0 0 1 1.636.336l1.436 3.592.564-.564-.915-5.492a1 1 0 0 1 .279-.872l2.5-2.5a1.121 1.121 0 0 0-1.586-1.586l-2.5 2.5a1 1 0 0 1-.871.28l-5.493-.916z" }) }), Ce = r(xe), Me = (l, a) => /* @__PURE__ */ e("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: a, ...l, children: /* @__PURE__ */ e("path", { fill: "currentColor", d: "M9 3a4 4 0 0 0-4 4v10a4 4 0 0 0 4 4h6a4 4 0 0 0 4-4V7a4 4 0 0 0-4-4zM7 7a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2zm0 2h2v2H7zm0 6v-2h2v2zm0 2h2v2a2 2 0 0 1-2-2m4 0h2v2h-2zm2-2h-2v-2h2zm2 4v-6h2v4a2 2 0 0 1-2 2m0-8V9h2v2zm-4 0V9h2v2z" }) }), Se = r(Me), be = (l, a) => /* @__PURE__ */ e("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: a, ...l, children: /* @__PURE__ */ e("path", { fill: "currentColor", d: "M9 2a1 1 0 0 1 1 1v1h4V3a1 1 0 1 1 2 0v1a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4V8a4 4 0 0 1 4-4V3a1 1 0 0 1 1-1M8 6a2 2 0 0 0-2 2v1h12V8a2 2 0 0 0-2-2v1a1 1 0 1 1-2 0V6h-4v1a1 1 0 0 1-2 0zm10 5H6v5a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2z" }) }), ye = r(be), Be = (l, a) => /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: a, ...l, children: [
  /* @__PURE__ */ e("path", { fill: "currentColor", d: "M7.368 5.735A4 4 0 0 1 11.162 3H14a1 1 0 1 1 0 2h-2.838a2 2 0 0 0-1.897 1.368l-.088.264A2 2 0 0 1 7.279 8H7a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-5a1 1 0 1 1 2 0v5a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4v-5a4 4 0 0 1 4-4h.28z" }),
  /* @__PURE__ */ e("path", { fill: "currentColor", d: "M12 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-4 2a4 4 0 1 1 8 0 4 4 0 0 1-8 0M17.5 4a1 1 0 0 1 1 1v.5h.5a1 1 0 1 1 0 2h-.5V8a1 1 0 1 1-2 0v-.5H16a1 1 0 1 1 0-2h.5V5a1 1 0 0 1 1-1" })
] }), Re = r(Be), _e = (l, a) => /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: a, ...l, children: [
  /* @__PURE__ */ e("path", { fill: "currentColor", d: "M3 9a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v6a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4zm4-2a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z" }),
  /* @__PURE__ */ e("path", { fill: "currentColor", d: "M9 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0M13 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0M17 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0" })
] }), Fe = r(_e), ze = (l, a) => /* @__PURE__ */ e("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: a, ...l, children: /* @__PURE__ */ e("path", { fill: "currentColor", d: "M4 5a1 1 0 0 1 1 1v4.773l2.836-2.52a1 1 0 0 1 .939-.215l2.971.85 4.09-3.635a1 1 0 0 1 1.315-.012l3.5 3a1 1 0 0 1-1.302 1.518l-2.837-2.432-3.848 3.42a1 1 0 0 1-.939.214l-2.971-.848L5 13.449V15c0 .316.073.616.204.882l3.089-3.09a1 1 0 0 1 1.203-.16l2.882 1.646 3.464-3.03a1 1 0 0 1 1.24-.062l3.5 2.5a1 1 0 1 1-1.163 1.628l-2.856-2.04-3.404 2.979a1 1 0 0 1-1.155.115l-2.837-1.62-2.251 2.25L7 17h13a1 1 0 1 1 0 2H7a4 4 0 0 1-4-4V6a1 1 0 0 1 1-1" }) }), Ae = r(ze), Ne = (l, a) => /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: a, ...l, children: [
  /* @__PURE__ */ e("path", { fill: "currentColor", d: "M12 18a6 6 0 1 1 0-12 6 6 0 0 1 0 12m0 2a8 8 0 1 0 0-16 8 8 0 0 0 0 16" }),
  /* @__PURE__ */ e("path", { fill: "currentColor", d: "M15.1 9.2a1 1 0 0 1 .2 1.4l-3 4a1 1 0 0 1-1.507.107l-2-2a1 1 0 1 1 1.414-1.414l1.185 1.185L13.7 9.4a1 1 0 0 1 1.4-.2" })
] }), He = r(Ne), ke = (l, a) => /* @__PURE__ */ e("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: a, ...l, children: /* @__PURE__ */ e("path", { fill: "currentColor", d: "M20 12a8 8 0 1 1-16 0 8 8 0 0 1 16 0m-3.2-2.4a1 1 0 1 0-1.6-1.2l-3.808 5.078-2.185-2.185a1 1 0 1 0-1.414 1.414l3 3A1 1 0 0 0 12.3 15.6z" }) }), C1 = r(ke), $e = (l, a) => /* @__PURE__ */ e("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: a, ...l, children: /* @__PURE__ */ e("path", { fill: "currentColor", d: "M20.1 7.2a1 1 0 0 1 .2 1.4l-7.5 10a1 1 0 0 1-1.6-1.2l7.5-10a1 1 0 0 1 1.4-.2M16.093 6.695a1 1 0 0 1 .212 1.398l-6.31 8.564a2 2 0 0 1-3.024.228l-3.178-3.178a1 1 0 1 1 1.414-1.414l3.178 3.178 6.31-8.564a1 1 0 0 1 1.398-.212" }) }), Ve = r($e), Le = (l, a) => /* @__PURE__ */ e("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: a, ...l, children: /* @__PURE__ */ e("path", { fill: "currentColor", d: "M18.093 7.695a1 1 0 0 1 .212 1.398l-6.31 8.564a2 2 0 0 1-3.024.228l-3.678-3.678a1 1 0 1 1 1.414-1.414l3.678 3.678 6.31-8.564a1 1 0 0 1 1.398-.212" }) }), Ie = r(Le), Oe = (l, a) => /* @__PURE__ */ e("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: a, ...l, children: /* @__PURE__ */ e("path", { fill: "currentColor", d: "M18.707 9.293a1 1 0 0 1 0 1.414L13.414 16a2 2 0 0 1-2.828 0l-5.293-5.293a1 1 0 0 1 1.414-1.414L12 14.586l5.293-5.293a1 1 0 0 1 1.414 0" }) }), $ = r(Oe), Te = (l, a) => /* @__PURE__ */ e("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: a, ...l, children: /* @__PURE__ */ e("path", { fill: "currentColor", d: "M14.707 5.293a1 1 0 0 0-1.414 0L8 10.586a2 2 0 0 0 0 2.828l5.293 5.293a1 1 0 0 0 1.414-1.414L9.414 12l5.293-5.293a1 1 0 0 0 0-1.414" }) }), Ge = r(Te), De = (l, a) => /* @__PURE__ */ e("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: a, ...l, children: /* @__PURE__ */ e("path", { fill: "currentColor", d: "M9.293 5.293a1 1 0 0 1 1.414 0L16 10.586a2 2 0 0 1 0 2.828l-5.293 5.293a1 1 0 0 1-1.414-1.414L14.586 12 9.293 6.707a1 1 0 0 1 0-1.414" }) }), M1 = r(De), Pe = (l, a) => /* @__PURE__ */ e("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: a, ...l, children: /* @__PURE__ */ e("path", { fill: "currentColor", d: "M18.707 14.707a1 1 0 0 0 0-1.414L13.414 8a2 2 0 0 0-2.828 0l-5.293 5.293a1 1 0 1 0 1.414 1.414L12 9.414l5.293 5.293a1 1 0 0 0 1.414 0" }) }), S1 = r(Pe), Ue = (l, a) => /* @__PURE__ */ e("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: a, ...l, children: /* @__PURE__ */ e("path", { fill: "currentColor", d: "M12 6a6 6 0 1 0 0 12 6 6 0 0 0 0-12m-8 6a8 8 0 1 1 16 0 8 8 0 0 1-16 0" }) }), je = r(Ue), Ee = (l, a) => /* @__PURE__ */ e("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: a, ...l, children: /* @__PURE__ */ e("path", { fill: "currentColor", fillRule: "evenodd", d: "M12 6a6 6 0 1 0 0 12 6 6 0 0 0 0-12m-8 6a8 8 0 1 1 16 0 8 8 0 0 1-16 0", clipRule: "evenodd" }) }), b1 = r(Ee), We = (l, a) => /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: a, ...l, children: [
  /* @__PURE__ */ e("path", { fill: "currentColor", d: "M12 18a6 6 0 1 1 0-12 6 6 0 0 1 0 12m0 2a8 8 0 1 0 0-16 8 8 0 0 0 0 16" }),
  /* @__PURE__ */ e("path", { fill: "currentColor", d: "M12 8a1 1 0 0 1 1 1v2.42l2.996 1.712a1 1 0 1 1-.992 1.736l-3.5-2A1 1 0 0 1 11 12V9a1 1 0 0 1 1-1" })
] }), qe = r(We), Ze = (l, a) => /* @__PURE__ */ e("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: a, ...l, children: /* @__PURE__ */ e("path", { fill: "currentColor", d: "M7.084 9.084a5.002 5.002 0 0 1 9.832 0A5.002 5.002 0 0 1 16 19H8a5 5 0 0 1-.916-9.916M12 7a3 3 0 0 0-3 3 1 1 0 0 1-1 1 3 3 0 1 0 0 6h8a3 3 0 1 0 0-6 1 1 0 0 1-1-1 3 3 0 0 0-3-3" }) }), Qe = r(Ze), Ke = (l, a) => /* @__PURE__ */ e("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: a, ...l, children: /* @__PURE__ */ e("path", { fill: "currentColor", fillRule: "evenodd", d: "M13.625 6.838a2.838 2.838 0 1 1 2.837 2.837h-1.537v3.95h1.537a2.838 2.838 0 1 1-2.837 2.837v-1.537h-3.95v1.538a2.838 2.838 0 1 1-2.838-2.838h1.538v-3.95H6.837a2.837 2.837 0 1 1 2.838-2.837v1.537h3.95zM16.462 5.3c-.849 0-1.537.688-1.537 1.538v1.537h1.537a1.538 1.538 0 0 0 0-3.075M9.675 9.675v3.95h3.95v-3.95zm-1.3-1.3V6.838a1.537 1.537 0 1 0-1.538 1.537zm6.55 6.55v1.537a1.537 1.537 0 1 0 1.537-1.537zm-6.55 0H6.838a1.538 1.538 0 1 0 1.537 1.538z", clipRule: "evenodd" }) }), y1 = r(Ke), Xe = (l, a) => /* @__PURE__ */ e("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: a, ...l, children: /* @__PURE__ */ e("path", { fill: "currentColor", d: "M9.707 6.293a1 1 0 0 0-1.414 0L4 10.586a2 2 0 0 0 0 2.828l4.293 4.293a1 1 0 0 0 1.414-1.414L5.414 12l4.293-4.293a1 1 0 0 0 0-1.414M14.293 6.293a1 1 0 0 1 1.414 0L20 10.586a2 2 0 0 1 0 2.828l-4.293 4.293a1 1 0 0 1-1.414-1.414L18.586 12l-4.293-4.293a1 1 0 0 1 0-1.414" }) }), Ye = r(Xe), Je = (l, a) => /* @__PURE__ */ e("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: a, ...l, children: /* @__PURE__ */ e("path", { fill: "currentColor", d: "M8.707 1.293a1 1 0 0 1 0 1.414.414.414 0 0 0 0 .586 1 1 0 0 1-1.414 1.414 2.414 2.414 0 0 1 0-3.414 1 1 0 0 1 1.414 0M12.707 1.293a1 1 0 0 1 0 1.414.414.414 0 0 0 0 .586 1 1 0 0 1-1.414 1.414 2.414 2.414 0 0 1 0-3.414 1 1 0 0 1 1.414 0M7 6.5a2 2 0 0 0-2 2V17a4 4 0 0 0 4 4h4a4 4 0 0 0 3.876-3.008q.06.008.124.008h.5a3 3 0 0 0 3-3v-2a3 3 0 0 0-3-3H17V8.5a2 2 0 0 0-2-2zM17 12h.5a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H17zM7 8.5h8V17a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2z" }) }), ea = r(Je), aa = (l, a) => /* @__PURE__ */ e("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: a, ...l, children: /* @__PURE__ */ e("path", { fill: "currentColor", d: "M18.5 10.5a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-4a1 1 0 1 1 2 0v1.586l3.793-3.793a1 1 0 1 1 1.414 1.414L15.914 9.5H17.5a1 1 0 0 1 1 1M5.5 13.5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0v-1.586l-3.793 3.793a1 1 0 0 1-1.414-1.414L8.086 14.5H6.5a1 1 0 0 1-1-1" }) }), la = r(aa), ra = (l, a) => /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: a, ...l, children: [
  /* @__PURE__ */ e("path", { fill: "currentColor", d: "M7.293 8.293a1 1 0 0 1 1.414 0l3 3a1 1 0 0 1 0 1.414l-3 3a1 1 0 0 1-1.414-1.414L9.586 12 7.293 9.707a1 1 0 0 1 0-1.414" }),
  /* @__PURE__ */ e("path", { fill: "currentColor", d: "M3 9v6a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4V9a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4m4-2h10a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2" }),
  /* @__PURE__ */ e("path", { fill: "currentColor", d: "M12 15a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2h-3a1 1 0 0 1-1-1" })
] }), oa = r(ra), ta = (l, a) => /* @__PURE__ */ e("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: a, ...l, children: /* @__PURE__ */ e("path", { fill: "currentColor", d: "M3 8.857A3.857 3.857 0 0 1 6.857 5H17a4 4 0 0 1 4 4v6a4 4 0 0 1-4 4h-4.667L9.71 20.968A2 2 0 0 1 6.613 20l-.35-1.047A3.87 3.87 0 0 1 3 15.129zM6.857 7A1.857 1.857 0 0 0 5 8.857v6.272A1.87 1.87 0 0 0 6.87 17c.508 0 .959.325 1.12.806l.52 1.561 2.623-1.967a2 2 0 0 1 1.2-.4H17a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z" }) }), na = r(ta), ia = (l, a) => /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: a, ...l, children: [
  /* @__PURE__ */ e("path", { fill: "currentColor", d: "M3 8.857A3.857 3.857 0 0 1 6.857 5H17a4 4 0 0 1 4 4v6a4 4 0 0 1-4 4h-4.667L9.71 20.968A2 2 0 0 1 6.613 20l-.35-1.047A3.87 3.87 0 0 1 3 15.129zM6.857 7A1.857 1.857 0 0 0 5 8.857v6.272A1.87 1.87 0 0 0 6.87 17c.508 0 .959.325 1.12.806l.52 1.561 2.623-1.967a2 2 0 0 1 1.2-.4H17a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z" }),
  /* @__PURE__ */ e("path", { fill: "currentColor", d: "M15 10a1 1 0 1 1-2 0 1 1 0 0 1 2 0M11 10a1 1 0 1 1-2 0 1 1 0 0 1 2 0M9.317 12.724a6 6 0 0 1 5.366 0l.764.382a1 1 0 1 1-.894 1.788l-.764-.382a4 4 0 0 0-3.578 0l-.764.382a1 1 0 1 1-.894-1.788z" })
] }), sa = r(ia), ca = (l, a) => /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: a, ...l, children: [
  /* @__PURE__ */ e("path", { fill: "currentColor", d: "M9 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0M14.22 4.375a1 1 0 0 1 1.406-.155A9.95 9.95 0 0 1 19.363 12a9.95 9.95 0 0 1-3.737 7.78 1 1 0 1 1-1.251-1.56A7.95 7.95 0 0 0 17.363 12a7.95 7.95 0 0 0-2.988-6.22 1 1 0 0 1-.155-1.405" }),
  /* @__PURE__ */ e("path", { fill: "currentColor", d: "M10.22 6.891a1 1 0 0 1 1.406-.155A6.73 6.73 0 0 1 14.154 12c0 2.13-.989 4.03-2.528 5.264a1 1 0 0 1-1.251-1.56A4.73 4.73 0 0 0 12.154 12a4.73 4.73 0 0 0-1.78-3.703 1 1 0 0 1-.154-1.406" })
] }), da = r(ca), fa = (l, a) => /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: a, ...l, children: [
  /* @__PURE__ */ e("path", { fill: "currentColor", d: "M5 7a4 4 0 0 1 4-4h3.757a4 4 0 0 1 2.829 1.172l2.242 2.242A4 4 0 0 1 19 9.243V17a4 4 0 0 1-4 4H9a4 4 0 0 1-4-4zm4-2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9.243a2 2 0 0 0-.586-1.415l-2.242-2.242A2 2 0 0 0 12.757 5z" }),
  /* @__PURE__ */ e("path", { fill: "currentColor", d: "M9 16a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2h-4a1 1 0 0 1-1-1" })
] }), ha = r(fa), va = (l, a) => /* @__PURE__ */ e("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: a, ...l, children: /* @__PURE__ */ e("path", { fill: "currentColor", d: "M16.707 5.293a1 1 0 0 1 0 1.414l-10 10a1 1 0 0 1-1.414-1.414l10-10a1 1 0 0 1 1.414 0m1 5.5a1 1 0 0 1 0 1.414l-5.5 5.5a1 1 0 0 1-1.414-1.414l5.5-5.5a1 1 0 0 1 1.414 0" }) }), ua = r(va), ga = (l, a) => /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: a, ...l, children: [
  /* @__PURE__ */ e("path", { fill: "currentColor", d: "M3 9a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v6a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4zm4-2a2 2 0 0 0-2 2h14a2 2 0 0 0-2-2zm12 4H5v4a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2z" }),
  /* @__PURE__ */ e("path", { fill: "currentColor", d: "M6 14a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1" })
] }), wa = r(ga), pa = (l, a) => /* @__PURE__ */ e("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: a, ...l, children: /* @__PURE__ */ e("path", { fill: "currentColor", d: "M20 12a8 8 0 1 1-16 0 8 8 0 0 1 16 0M9.707 8.293a1 1 0 0 0-1.414 1.414L10.586 12l-2.293 2.293a1 1 0 1 0 1.414 1.414L12 13.414l2.293 2.293a1 1 0 0 0 1.414-1.414L13.414 12l2.293-2.293a1 1 0 0 0-1.414-1.414L12 10.586z" }) }), ma = r(pa), xa = (l, a) => /* @__PURE__ */ e("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: a, ...l, children: /* @__PURE__ */ e("path", { fill: "currentColor", d: "M6.293 6.293a1 1 0 0 1 1.414 0L12 10.586l4.293-4.293a1 1 0 1 1 1.414 1.414L13.414 12l4.293 4.293a1 1 0 0 1-1.414 1.414L12 13.414l-4.293 4.293a1 1 0 0 1-1.414-1.414L10.586 12 6.293 7.707a1 1 0 0 1 0-1.414" }) }), Ca = r(xa), Ma = (l, a) => /* @__PURE__ */ e("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: a, ...l, children: /* @__PURE__ */ e("path", { fill: "currentColor", d: "M10.154 5.83c.684-1.64 3.008-1.64 3.692 0l1.21 2.904 2.73-.993c1.546-.562 3.072.878 2.6 2.454l-2 6.667A3 3 0 0 1 15.511 19H8.488a3 3 0 0 1-2.873-2.138l-2-6.667C3.142 8.62 4.668 7.18 6.214 7.741l2.73.993zm3.056 3.673L12 6.6l-1.21 2.903a2 2 0 0 1-2.53 1.11L5.53 9.62l2 6.667a1 1 0 0 0 .958.713h7.024a1 1 0 0 0 .958-.713l2-6.667-2.73.993a2 2 0 0 1-2.53-1.11" }) }), Sa = r(Ma), ba = (l, a) => /* @__PURE__ */ e("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: a, ...l, children: /* @__PURE__ */ e("path", { fill: "currentColor", d: "M4 6v2a2 2 0 0 0 2 2h3a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2m5 0v2H6V6zm4 0a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-3a2 2 0 0 1-2-2zm5 0h-3v4h3zM4 14a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm5 0H6v4h3zm4 2a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-3a2 2 0 0 1-2-2zm5 0h-3v2h3z" }) }), ya = r(ba), Ba = (l, a) => /* @__PURE__ */ e("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: a, ...l, children: /* @__PURE__ */ e("path", { fill: "currentColor", d: "M7.5 5a2 2 0 0 1 2-2h5a2 2 0 0 1 2 2v2h2a1 1 0 1 1 0 2H18v8a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V9h-.5a1 1 0 0 1 0-2h2zM8 9v8a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V9zm6.5-2V5h-5v2z" }) }), Ra = r(Ba), _a = (l, a) => /* @__PURE__ */ e("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: a, ...l, children: /* @__PURE__ */ e("path", { fill: "currentColor", d: "M20 12a8 8 0 1 1-16 0 8 8 0 0 1 16 0m-2 0c0-1.296-.41-2.496-1.11-3.476L8.525 16.89A6 6 0 0 0 18 12M7.11 15.477l8.367-8.368a6 6 0 0 0-8.367 8.367" }) }), Fa = r(_a), za = (l, a) => /* @__PURE__ */ e("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: a, ...l, children: /* @__PURE__ */ e("path", { fill: "currentColor", d: "M2 7a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v6a4 4 0 0 1-4 4h-2v2h1a1 1 0 1 1 0 2H7a1 1 0 1 1 0-2h1v-2H6a4 4 0 0 1-4-4zm8 10v2h4v-2zm-4-2h12a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2" }) }), Aa = r(za), Na = (l, a) => /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: a, ...l, children: [
  /* @__PURE__ */ e("path", { fill: "currentColor", fillRule: "evenodd", d: "M3 9a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v6a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4zm4-2a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z", clipRule: "evenodd" }),
  /* @__PURE__ */ e("path", { fill: "currentColor", fillRule: "evenodd", d: "M9 10.5A2.5 2.5 0 0 1 11.5 8H14a1 1 0 1 1 0 2h-2.5a.5.5 0 0 0 0 1h1a2.5 2.5 0 0 1 0 5H10a1 1 0 1 1 0-2h2.5a.5.5 0 0 0 0-1h-1A2.5 2.5 0 0 1 9 10.5", clipRule: "evenodd" }),
  /* @__PURE__ */ e("path", { fill: "currentColor", d: "M16 12a1 1 0 1 1 2 0 1 1 0 0 1-2 0M6 12a1 1 0 1 1 2 0 1 1 0 0 1-2 0" })
] }), Ha = r(Na), ka = (l, a) => /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: a, ...l, children: [
  /* @__PURE__ */ e("path", { fill: "currentColor", d: "M5 14a1 1 0 0 1 1 1v1a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-1a1 1 0 1 1 2 0v1a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4v-1a1 1 0 0 1 1-1" }),
  /* @__PURE__ */ e("path", { fill: "currentColor", d: "M11.293 14.707a1 1 0 0 0 1.414 0l3-3a1 1 0 0 0-1.414-1.414L13 11.586V5a1 1 0 1 0-2 0v6.586l-1.293-1.293a1 1 0 1 0-1.414 1.414z" })
] }), $a = r(ka), Va = (l, a) => /* @__PURE__ */ e("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: a, ...l, children: /* @__PURE__ */ e("path", { fill: "currentColor", d: "M9 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4M15 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4M9 14a2 2 0 1 1 0-4 2 2 0 0 1 0 4M15 14a2 2 0 1 1 0-4 2 2 0 0 1 0 4M9 20a2 2 0 1 1 0-4 2 2 0 0 1 0 4M15 20a2 2 0 1 1 0-4 2 2 0 0 1 0 4" }) }), La = r(Va), Ia = (l, a) => /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: a, ...l, children: [
  /* @__PURE__ */ e("path", { fill: "currentColor", d: "M5 6a4 4 0 0 1 4-4h2.757a4 4 0 0 1 2.829 1.172l2.242 2.242A4 4 0 0 1 18 8.243V14a4 4 0 0 1-4 4H9a4 4 0 0 1-4-4zm4-2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h5a2 2 0 0 0 2-2V8.243a2 2 0 0 0-.586-1.415l-2.242-2.242A2 2 0 0 0 11.757 4z" }),
  /* @__PURE__ */ e("path", { fill: "currentColor", d: "M20 8a1 1 0 0 1 1 1v1.444c0 1.643 0 2.937-.085 3.978-.087 1.063-.267 1.95-.678 2.756a7 7 0 0 1-3.06 3.059c-.805.41-1.692.591-2.755.678-1.041.085-2.335.085-3.978.085H9a1 1 0 1 1 0-2h1.4c1.697 0 2.909 0 3.86-.078.938-.077 1.533-.224 2.01-.467a5 5 0 0 0 2.185-2.185c.243-.477.39-1.072.467-2.01.077-.951.078-2.163.078-3.86V9a1 1 0 0 1 1-1" })
] }), Oa = r(Ia), Ta = (l, a) => /* @__PURE__ */ e("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: a, ...l, children: /* @__PURE__ */ e("path", { fill: "currentColor", fillRule: "evenodd", d: "M9 3a4 4 0 0 0-4 4v10a4 4 0 0 0 4 4 1 1 0 1 0 0-2 2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h3.757a2 2 0 0 1 1.415.586l2.242 2.242A2 2 0 0 1 17 9.243V10a1 1 0 1 0 2 0v-.757a4 4 0 0 0-1.172-2.829l-2.242-2.242A4 4 0 0 0 12.757 3zm1 8a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2zm-1 5a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2h-2a1 1 0 0 1-1-1m13.957-3.457a2.77 2.77 0 0 0-3.914 0l-6.25 6.25a1 1 0 0 0-.28.543l-.5 3a1 1 0 0 0 1.151 1.15l3-.5a1 1 0 0 0 .543-.279l6.25-6.25a2.77 2.77 0 0 0 0-3.914m-2.5 1.414a.768.768 0 0 1 1.086 1.086l-6.023 6.023-1.303.218.217-1.303z", clipRule: "evenodd" }) }), Ga = r(Ta), Da = (l, a) => /* @__PURE__ */ e("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: a, ...l, children: /* @__PURE__ */ e("path", { fill: "currentColor", d: "M8 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0M14 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0M20 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0" }) }), Pa = r(Da), Ua = (l, a) => /* @__PURE__ */ e("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: a, ...l, children: /* @__PURE__ */ e("path", { fill: "currentColor", d: "M12 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4M12 14a2 2 0 1 1 0-4 2 2 0 0 1 0 4M12 20a2 2 0 1 1 0-4 2 2 0 0 1 0 4" }) }), B1 = r(Ua), ja = (l, a) => /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: a, ...l, children: [
  /* @__PURE__ */ e("path", { fill: "currentColor", d: "M3 8.857A3.857 3.857 0 0 1 6.857 5H17a4 4 0 0 1 4 4v6a4 4 0 0 1-4 4h-4.667L9.71 20.968A2 2 0 0 1 6.613 20l-.35-1.047A3.87 3.87 0 0 1 3 15.129zM6.857 7A1.857 1.857 0 0 0 5 8.857v6.272A1.87 1.87 0 0 0 6.87 17c.508 0 .959.325 1.12.806l.52 1.561 2.623-1.967a2 2 0 0 1 1.2-.4H17a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z" }),
  /* @__PURE__ */ e("path", { fill: "currentColor", d: "M10.561 9.875c-.65 0-1.186.619-1.186 1.285 0 .287.118.617.378.987.26.368.625.724 1.021 1.042a9.5 9.5 0 0 0 1.226.829l.129-.075c.305-.18.704-.438 1.097-.754.396-.318.76-.674 1.02-1.042.261-.37.379-.7.379-.987 0-.666-.537-1.285-1.186-1.285-.392 0-.633.178-.787.35a.875.875 0 0 1-1.304 0 1 1 0 0 0-.787-.35M7.625 11.16c0-1.419 1.12-3.035 2.936-3.035.59 0 1.067.167 1.439.391a2.75 2.75 0 0 1 1.439-.391c1.816 0 2.936 1.616 2.936 3.035 0 .769-.312 1.447-.698 1.995-.387.549-.885 1.021-1.356 1.4a11 11 0 0 1-1.753 1.145 4 4 0 0 1-.227.107 1 1 0 0 1-.139.044 1 1 0 0 1-.202.024c-.102 0-.181-.019-.202-.023a1 1 0 0 1-.214-.077l-.152-.075a11.222 11.222 0 0 1-1.753-1.146c-.47-.378-.97-.85-1.356-1.4-.386-.547-.698-1.225-.698-1.994" })
] }), Ea = r(ja), Wa = (l, a) => /* @__PURE__ */ e("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: a, ...l, children: /* @__PURE__ */ e("path", { fill: "currentColor", d: "M13.789 3.776a4 4 0 0 0-3.578 0L4.106 6.83A2 2 0 0 0 3 8.618V15a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4V8.618a2 2 0 0 0-1.106-1.789zm-2.683 1.79a2 2 0 0 1 1.788 0l5.87 2.934-6.708 3.354a.13.13 0 0 1-.112 0L5.236 8.5zM5 10.617l6.05 3.025c.598.299 1.302.299 1.9 0L19 10.618V15a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2z" }) }), qa = r(Wa), Za = (l, a) => /* @__PURE__ */ e("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: a, ...l, children: /* @__PURE__ */ e("path", { fill: "currentColor", d: "M7 5a4 4 0 0 0-4 3.998V15a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4V8.965A4 4 0 0 0 17 5zm11.916 3.424-6.86 3.43a.13.13 0 0 1-.112 0l-6.86-3.43A2 2 0 0 1 7 7h10a2 2 0 0 1 1.916 1.424M5 10.618l6.05 3.025c.598.299 1.302.299 1.9 0L19 10.618V15a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2z" }) }), Qa = r(Za), Ka = (l, a) => /* @__PURE__ */ e("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: a, ...l, children: /* @__PURE__ */ e("path", { fill: "currentColor", d: "M4 10a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1M4 14a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1" }) }), Xa = r(Ka), Ya = (l, a) => /* @__PURE__ */ e("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: a, ...l, children: /* @__PURE__ */ e("path", { fill: "currentColor", d: "M14 5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0V7.414l-3.793 3.793a1 1 0 0 1-1.414-1.414L16.586 6H15a1 1 0 0 1-1-1M10 19a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-4a1 1 0 1 1 2 0v1.586l3.793-3.793a1 1 0 0 1 1.414 1.414L7.414 18H9a1 1 0 0 1 1 1" }) }), Ja = r(Ya), e4 = (l, a) => /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: a, ...l, children: [
  /* @__PURE__ */ e("path", { fill: "currentColor", d: "M6 3a3 3 0 0 0-3 3v9a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4v-4a4 4 0 0 0-3-3.874V6a3 3 0 0 0-3-3zm10 4H6a1 1 0 0 1 0-2h9a1 1 0 0 1 1 1zM5 8.83c.313.11.65.17 1 .17h11a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2z" }),
  /* @__PURE__ */ e("path", { fill: "currentColor", d: "M18 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" })
] }), a4 = r(e4), l4 = (l, a) => /* @__PURE__ */ e("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: a, ...l, children: /* @__PURE__ */ e("path", { fill: "currentColor", d: "M3.938 6.694a1.08 1.08 0 0 1 1.44.501c1.14 2.353 3.576 4.391 6.622 4.391s5.483-2.038 6.622-4.391a1.078 1.078 0 1 1 1.94.94c-.406.84-.953 1.663-1.623 2.408l1.767 1.765a1 1 0 0 1-1.413 1.415l-1.831-1.828a9.4 9.4 0 0 1-2.3 1.27l.954 2.853a1 1 0 1 1-1.896.634l-1.001-2.991a9 9 0 0 1-2.375.008l-.998 2.983a1 1 0 1 1-1.896-.634l.947-2.83a9.4 9.4 0 0 1-2.359-1.293l-1.831 1.829a1 1 0 0 1-1.413-1.416l1.768-1.765a10.4 10.4 0 0 1-1.624-2.408 1.08 1.08 0 0 1 .5-1.44" }) }), R1 = r(l4), r4 = (l, a) => /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: a, ...l, children: [
  /* @__PURE__ */ e("path", { fill: "currentColor", d: "M5.147 12c.993 2.543 3.568 4.922 6.853 4.922 3.286 0 5.86-2.38 6.854-4.922C17.86 9.457 15.286 7.078 12 7.078S6.14 9.458 5.147 12m-2.17-.341C4.088 8.326 7.432 4.922 12 4.922s7.912 3.404 9.023 6.737c.074.221.074.46 0 .682-1.111 3.333-4.455 6.737-9.023 6.737s-7.912-3.404-9.023-6.737a1.08 1.08 0 0 1 0-.682" }),
  /* @__PURE__ */ e("path", { fill: "currentColor", d: "M12 13a1 1 0 1 1 0-2 1 1 0 0 1 0 2m0 2a3 3 0 1 0 0-6 3 3 0 0 0 0 6" })
] }), _1 = r(r4), o4 = (l, a) => /* @__PURE__ */ e("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: a, ...l, children: /* @__PURE__ */ e("path", { fill: "currentColor", fillRule: "evenodd", d: "M10 9a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0v-1a1 1 0 0 1 1-1M14 9a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0v-1a1 1 0 0 1 1-1M8.72 13.375a1 1 0 0 1 1.405-.156 3 3 0 0 0 3.75 0 1 1 0 1 1 1.25 1.562 5 5 0 0 1-6.25 0 1 1 0 0 1-.156-1.406M4 8a4 4 0 0 1 4-4 1 1 0 0 1 0 2 2 2 0 0 0-2 2 1 1 0 0 1-2 0m11-3a1 1 0 0 1 1-1 4 4 0 0 1 4 4 1 1 0 1 1-2 0 2 2 0 0 0-2-2 1 1 0 0 1-1-1M5 15a1 1 0 0 1 1 1 2 2 0 0 0 2 2 1 1 0 1 1 0 2 4 4 0 0 1-4-4 1 1 0 0 1 1-1m14 0a1 1 0 0 1 1 1 4 4 0 0 1-4 4 1 1 0 1 1 0-2 2 2 0 0 0 2-2 1 1 0 0 1 1-1", clipRule: "evenodd" }) }), t4 = r(o4), n4 = (l, a) => /* @__PURE__ */ e("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: a, ...l, children: /* @__PURE__ */ e("path", { fill: "currentColor", d: "M9.5 5.5a1 1 0 0 1 .91.586l4.09 8.997 1.59-3.497A1 1 0 0 1 17 11h3a1 1 0 1 1 0 2h-2.356l-2.234 4.914a1 1 0 0 1-1.82 0L9.5 8.917l-1.59 3.497A1 1 0 0 1 7 13H4a1 1 0 1 1 0-2h2.356L8.59 6.086A1 1 0 0 1 9.5 5.5" }) }), i4 = r(n4), s4 = (l, a) => /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: a, ...l, children: [
  /* @__PURE__ */ e("path", { fill: "currentColor", d: "M7 13a1 1 0 0 0-1 1v4.586l.293-.293A1 1 0 0 1 7 18h5a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1zm-3 1a3 3 0 0 1 3-3h5a3 3 0 0 1 3 3v3a3 3 0 0 1-3 3H7.414l-.853.854C5.616 21.799 4 21.129 4 19.793z" }),
  /* @__PURE__ */ e("path", { fill: "currentColor", d: "M17 6a1 1 0 0 1 1 1v4.586l-.293-.293A1 1 0 0 0 17 11h-.5a1 1 0 1 0 0 2h.086l.853.854c.945.945 2.561.275 2.561-1.061V7a3 3 0 0 0-3-3h-5a3 3 0 0 0-3 3v2a1 1 0 1 0 2 0V7a1 1 0 0 1 1-1z" })
] }), c4 = r(s4), d4 = (l, a) => /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: a, ...l, children: [
  /* @__PURE__ */ e("path", { fill: "currentColor", d: "M5 7a4 4 0 0 1 4-4h3.757a4 4 0 0 1 2.829 1.172l2.242 2.242A4 4 0 0 1 19 9.243V17a4 4 0 0 1-4 4H9a4 4 0 0 1-4-4zm4-2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9.243a2 2 0 0 0-.586-1.415l-2.242-2.242A2 2 0 0 0 12.757 5z" }),
  /* @__PURE__ */ e("path", { fill: "currentColor", d: "M9 12a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2h-4a1 1 0 0 1-1-1M9 16a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2h-2a1 1 0 0 1-1-1" })
] }), f4 = r(d4), h4 = (l, a) => /* @__PURE__ */ e("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: a, ...l, children: /* @__PURE__ */ e("path", { fill: "currentColor", d: "M5 7a4 4 0 0 1 4-4h3.757a4 4 0 0 1 2.829 1.172l2.242 2.242A4 4 0 0 1 19 9.243V17a4 4 0 0 1-4 4H9a4 4 0 0 1-4-4zm4-2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9.243a2 2 0 0 0-.586-1.415l-2.242-2.242A2 2 0 0 0 12.757 5z" }) }), v4 = r(h4), u4 = (l, a) => /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: a, ...l, children: [
  /* @__PURE__ */ e("path", { fill: "currentColor", d: "M7.093 3h1.635c1.07 0 2.057.577 2.581 1.51.17.303.49.49.838.49h1.469c.632 0 1.154 0 1.582.028.443.028.854.09 1.252.244a4 4 0 0 1 2.278 2.278c.155.398.216.809.244 1.252.028.428.028.95.028 1.582v.857c0 .805 0 1.47-.044 2.01-.046.563-.145 1.08-.392 1.565a4 4 0 0 1-1.748 1.748c-.485.247-1.002.346-1.564.392-.541.044-1.206.044-2.01.044H8.758c-.805 0-1.47 0-2.01-.044-.563-.046-1.08-.145-1.565-.392a4 4 0 0 1-1.748-1.748c-.247-.485-.346-1.002-.392-1.564C3 12.71 3 12.046 3 11.242V7.092c0-.496 0-.923.027-1.277.029-.372.092-.743.263-1.103A3 3 0 0 1 4.713 3.29c.36-.171.731-.234 1.103-.263C6.17 3 6.597 3 7.093 3M5.97 5.021c-.256.02-.352.054-.4.076a1 1 0 0 0-.473.474c-.022.047-.056.143-.076.399-.02.267-.021.617-.021 1.16v4.07c0 .857 0 1.439.038 1.889.035.438.1.663.18.819a2 2 0 0 0 .874.874c.156.08.38.145.819.18C7.361 15 7.943 15 8.8 15h4.4c.857 0 1.439 0 1.889-.037.438-.036.663-.101.819-.181a2 2 0 0 0 .874-.874c.08-.156.145-.38.18-.819.037-.45.038-1.032.038-1.889v-.783c0-.673 0-1.13-.023-1.486-.023-.348-.064-.53-.113-.656a2 2 0 0 0-1.139-1.139c-.127-.05-.308-.09-.656-.113A26 26 0 0 0 13.583 7h-1.436a2.96 2.96 0 0 1-2.581-1.51.96.96 0 0 0-.838-.49H7.13c-.543 0-.893 0-1.16.021" }),
  /* @__PURE__ */ e("path", { fill: "currentColor", d: "M21 8a1 1 0 0 1 1 1v.444c0 1.643 0 2.937-.085 3.978-.087 1.063-.267 1.95-.678 2.756a7 7 0 0 1-3.06 3.059c-.805.41-1.692.591-2.755.678-1.041.085-2.335.085-3.978.085H7a1 1 0 1 1 0-2h4.4c1.697 0 2.909 0 3.86-.078.938-.077 1.533-.224 2.01-.467a5 5 0 0 0 2.185-2.185c.243-.477.39-1.072.467-2.01.077-.951.078-2.163.078-3.86V9a1 1 0 0 1 1-1" })
] }), g4 = r(u4), w4 = (l, a) => /* @__PURE__ */ e("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: a, ...l, children: /* @__PURE__ */ e("path", { fill: "currentColor", d: "M4.656 7.302C3.544 6.004 4.466 4 6.174 4h11.652c1.709 0 2.63 2.004 1.518 3.302L15 12.37v4.13a2 2 0 0 1-.8 1.6l-2 1.5c-1.318.989-3.2.048-3.2-1.6v-5.63zM17.826 6H6.174l4.345 5.068A2 2 0 0 1 11 12.37V18l2-1.5v-4.13a2 2 0 0 1 .482-1.302z" }) }), p4 = r(w4), m4 = (l, a) => /* @__PURE__ */ e("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: a, ...l, children: /* @__PURE__ */ e("path", { fill: "currentColor", d: "M7 4a1 1 0 0 0-2 0v16a1 1 0 1 0 2 0v-4.23c1.283-.312 2.183-.364 2.876-.278.791.1 1.393.39 2.07.84 1.903 1.27 4.367 1.183 6.654-.532a1 1 0 0 0 .4-.8V5.5a1 1 0 0 0-1.6-.8c-1.713 1.285-3.25 1.198-4.345.468-.825-.55-1.723-1.01-2.931-1.16-.891-.112-1.902-.05-3.124.21zm0 2.27c1.283-.312 2.183-.364 2.876-.278.791.1 1.393.39 2.07.84 1.464.977 3.261 1.151 5.054.397v7.248c-1.552.99-2.936.864-3.945.19-.825-.549-1.723-1.008-2.931-1.16-.891-.11-1.902-.048-3.124.211z" }) }), x4 = r(m4), C4 = (l, a) => /* @__PURE__ */ e("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: a, ...l, children: /* @__PURE__ */ e("path", { fill: "currentColor", d: "M7.161 3h2.567c1.07 0 2.057.577 2.581 1.51.17.303.49.49.838.49h2.094c.805 0 1.47 0 2.01.044.563.046 1.08.145 1.565.392a4 4 0 0 1 1.748 1.748c.247.485.346 1.002.392 1.564.044.541.044 1.206.044 2.01v2.483c0 .805 0 1.47-.044 2.01-.046.563-.145 1.08-.392 1.565a4 4 0 0 1-1.748 1.748c-.485.247-1.002.346-1.564.392-.541.044-1.206.044-2.01.044H8.758c-.805 0-1.47 0-2.01-.044-.563-.046-1.08-.145-1.565-.392a4 4 0 0 1-1.748-1.748c-.247-.485-.346-1.002-.392-1.564C3 14.71 3 14.046 3 13.242v-6.08c0-.528 0-.982.03-1.357.033-.395.104-.789.297-1.167a3 3 0 0 1 1.311-1.311c.378-.193.772-.264 1.167-.296C6.18 3 6.635 3 7.161 3M5.968 5.024c-.272.022-.373.06-.422.085a1 1 0 0 0-.437.437c-.025.05-.063.15-.085.422C5 6.25 5 6.623 5 7.2v6c0 .857 0 1.439.038 1.889.035.438.1.663.18.819a2 2 0 0 0 .874.874c.156.08.38.145.819.18C7.361 17 7.943 17 8.8 17h6.4c.857 0 1.439 0 1.889-.038.438-.035.663-.1.819-.18a2 2 0 0 0 .874-.874c.08-.156.145-.38.18-.819.037-.45.038-1.032.038-1.889v-2.4c0-.857 0-1.439-.038-1.889-.035-.438-.1-.663-.18-.819a2 2 0 0 0-.874-.874c-.156-.08-.38-.145-.819-.18C16.639 7 16.057 7 15.2 7h-2.053a2.96 2.96 0 0 1-2.581-1.51.96.96 0 0 0-.838-.49H7.2c-.577 0-.949 0-1.232.024" }) }), M4 = r(C4), S4 = (l, a) => /* @__PURE__ */ e("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: a, ...l, children: /* @__PURE__ */ e("path", { fill: "currentColor", d: "M20 12a8 8 0 1 1-16 0 8 8 0 0 1 16 0m-8 5.657A8.95 8.95 0 0 0 13.945 13h-3.89A8.95 8.95 0 0 0 12 17.657m2.573-.235A6.01 6.01 0 0 0 17.917 13h-1.962a10.9 10.9 0 0 1-1.382 4.422M15.955 11h1.962a6.01 6.01 0 0 0-3.344-4.422A10.9 10.9 0 0 1 15.955 11m-2.01 0A8.95 8.95 0 0 0 12 6.343 8.95 8.95 0 0 0 10.055 11zm-5.9 2H6.083a6.01 6.01 0 0 0 3.344 4.422A10.9 10.9 0 0 1 8.045 13m0-2c.144-1.597.63-3.095 1.382-4.422A6.01 6.01 0 0 0 6.083 11z" }) }), b4 = r(S4), y4 = (l, a) => /* @__PURE__ */ e("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: a, ...l, children: /* @__PURE__ */ e("path", { fill: "currentColor", d: "M6 4a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2v4a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2h4a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2v-4a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2h-4a2 2 0 0 0-2-2zm12 4h-2V6h2zm-2 2v4a2 2 0 0 0-2 2h-4a2 2 0 0 0-2-2v-4a2 2 0 0 0 2-2h4a2 2 0 0 0 2 2m0 6h2v2h-2zM8 8H6V6h2zm-2 8h2v2H6z" }) }), B4 = r(y4), R4 = (l, a) => /* @__PURE__ */ e("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: a, ...l, children: /* @__PURE__ */ e("path", { fill: "currentColor", d: "M4 6a1 1 0 0 1 1 1v4h5V7a1 1 0 1 1 2 0v10a1 1 0 1 1-2 0v-4H5v4a1 1 0 1 1-2 0V7a1 1 0 0 1 1-1M20 7a1 1 0 1 0-2 0c0 .175-.098.433-.332.668S17.175 8 17 8a1 1 0 1 0 0 2c.352 0 .69-.073 1-.198V17a1 1 0 1 0 2 0z" }) }), _4 = r(R4), F4 = (l, a) => /* @__PURE__ */ e("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: a, ...l, children: /* @__PURE__ */ e("path", { fill: "currentColor", d: "M4 6a1 1 0 0 1 1 1v4h5V7a1 1 0 1 1 2 0v10a1 1 0 1 1-2 0v-4H5v4a1 1 0 1 1-2 0V7a1 1 0 0 1 1-1M17.5 8A1.5 1.5 0 0 0 16 9.5a1 1 0 1 1-2 0 3.5 3.5 0 1 1 3.5 3.5 1.5 1.5 0 0 0-1.5 1.5V16h4a1 1 0 1 1 0 2h-5a1 1 0 0 1-1-1v-2.5a3.5 3.5 0 0 1 3.5-3.5 1.5 1.5 0 0 0 0-3" }) }), z4 = r(F4), A4 = (l, a) => /* @__PURE__ */ e("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: a, ...l, children: /* @__PURE__ */ e("path", { fill: "currentColor", d: "M16 9a1 1 0 0 1 1-1h.5a1.5 1.5 0 0 1 0 3 1 1 0 1 0 0 2 1.5 1.5 0 0 1 0 3H17a1 1 0 0 1-1-1 1 1 0 1 0-2 0 3 3 0 0 0 3 3h.5a3.5 3.5 0 0 0 2.45-6 3.5 3.5 0 0 0-2.45-6H17a3 3 0 0 0-3 3 1 1 0 1 0 2 0M4 6a1 1 0 0 1 1 1v4h5V7a1 1 0 1 1 2 0v10a1 1 0 1 1-2 0v-4H5v4a1 1 0 1 1-2 0V7a1 1 0 0 1 1-1" }) }), N4 = r(A4), H4 = (l, a) => /* @__PURE__ */ e("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: a, ...l, children: /* @__PURE__ */ e("path", { fill: "currentColor", d: "M8.938 7c.846 0 1.403.285 1.745.545a2.3 2.3 0 0 1 .451.457l.01.014a1 1 0 0 0 1.713 0l.009-.014a2.293 2.293 0 0 1 .451-.457c.342-.26.9-.545 1.745-.545.755 0 1.481.37 2.04 1.002.563.636.898 1.476.898 2.284 0 .805-.333 1.695-.934 2.628-.596.924-1.41 1.817-2.25 2.607A25.5 25.5 0 0 1 12 17.795q-.219-.152-.502-.36a26 26 0 0 1-2.314-1.914c-.84-.79-1.653-1.683-2.25-2.607C6.333 11.98 6 11.09 6 10.286 6 8.286 7.72 7 8.938 7M12 6.037l-.105-.082C11.253 5.465 10.28 5 8.938 5 6.655 5 4 7.143 4 10.286c0 1.338.542 2.608 1.253 3.711.716 1.111 1.654 2.13 2.563 2.982a27.5 27.5 0 0 0 3.623 2.85l.018.011.006.003.001.001s.001.001.536-.844l-.535.845a1 1 0 0 0 1.07 0L12 19l.535.845.002-.002.006-.003.018-.012a12 12 0 0 0 .3-.198 27.478 27.478 0 0 0 3.323-2.65c.91-.854 1.846-1.872 2.563-2.983.71-1.103 1.253-2.373 1.253-3.711 0-1.335-.54-2.638-1.4-3.61C17.739 5.703 16.497 5 15.063 5c-1.34 0-2.315.465-2.957.955z" }) }), k4 = r(H4), $4 = (l, a) => /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: a, ...l, children: [
  /* @__PURE__ */ e("path", { fill: "currentColor", d: "M15.119 9.381a.875.875 0 0 1 0 1.238l-.506.506H17a.875.875 0 1 1 0 1.75h-2.387l.506.506a.875.875 0 1 1-1.237 1.238l-2-2a.875.875 0 0 1 0-1.238l2-2a.875.875 0 0 1 1.237 0" }),
  /* @__PURE__ */ e("path", { fill: "currentColor", d: "M7 5a4 4 0 0 0-4 4v6a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4V9a4 4 0 0 0-4-4zm1 2v10H7a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2zm2 10V7h7a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2z" })
] }), V4 = r($4), L4 = (l, a) => /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: a, ...l, children: [
  /* @__PURE__ */ e("path", { fill: "currentColor", d: "M10.44 4.154a8 8 0 1 1-4.097 13.503 1 1 0 1 1 1.414-1.414A6 6 0 1 0 6.343 10H7a1 1 0 0 1 .707 1.707l-2 2a1 1 0 0 1-1.414 0l-2-2A1 1 0 0 1 3 10h1.254a8 8 0 0 1 6.185-5.846" }),
  /* @__PURE__ */ e("path", { fill: "currentColor", d: "M12 8a1 1 0 0 1 1 1v2.42l2.996 1.712a1 1 0 1 1-.992 1.736l-3.5-2A1 1 0 0 1 11 12V9a1 1 0 0 1 1-1" })
] }), I4 = r(L4), O4 = (l, a) => /* @__PURE__ */ e("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: a, ...l, children: /* @__PURE__ */ e("path", { fill: "currentColor", d: "M13.163 5.56a2 2 0 0 0-2.325 0l-4 2.856A2 2 0 0 0 6 10.044V16a2 2 0 0 0 2 2h1v-2.5a3 3 0 1 1 6 0V18h1a2 2 0 0 0 2-2v-5.956a2 2 0 0 0-.837-1.628zM9.675 3.931a4 4 0 0 1 4.65 0l4 2.857A4 4 0 0 1 20 10.044V16a4 4 0 0 1-4 4h-1a2 2 0 0 1-2-2v-2.5a1 1 0 1 0-2 0V18a2 2 0 0 1-2 2H8a4 4 0 0 1-4-4v-5.956a4 4 0 0 1 1.675-3.255z" }) }), F1 = r(O4), T4 = (l, a) => /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: a, ...l, children: [
  /* @__PURE__ */ e("path", { fill: "currentColor", d: "M7 5a4 4 0 0 0-4 4v6a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4V9a4 4 0 0 0-4-4zM5 9a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v3.586l-.172-.172a4 4 0 0 0-5.656 0L8.586 17H7a2 2 0 0 1-2-2zm6.414 8 3.172-3.171a2 2 0 0 1 2.828 0l1.55 1.55A2 2 0 0 1 17 17z" }),
  /* @__PURE__ */ e("path", { fill: "currentColor", d: "M9 12a1 1 0 1 1 0-2 1 1 0 0 1 0 2m0 2a3 3 0 1 0 0-6 3 3 0 0 0 0 6" })
] }), G4 = r(T4), D4 = (l, a) => /* @__PURE__ */ e("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: a, ...l, children: /* @__PURE__ */ e("path", { fill: "currentColor", d: "M5.004 6.749A4 4 0 0 1 8.31 5h6.993a4 4 0 0 1 3.094 1.465l2.377 2.901A1 1 0 0 1 21 10v5a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4v-5a1 1 0 0 1 .173-.563zM8.31 7a2 2 0 0 0-1.653.874L5.891 9h1.088c1.367 0 2.533.988 2.757 2.336a.795.795 0 0 0 .784.664h2.96c.388 0 .72-.281.783-.664A2.795 2.795 0 0 1 17.02 9h.868L16.85 7.733A2 2 0 0 0 15.303 7zM19 11h-1.98a.795.795 0 0 0-.784.664A2.795 2.795 0 0 1 13.48 14h-2.958a2.795 2.795 0 0 1-2.758-2.336A.795.795 0 0 0 6.98 11H5v4a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2z" }) }), P4 = r(D4), U4 = (l, a) => /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: a, ...l, children: [
  /* @__PURE__ */ e("path", { fill: "currentColor", d: "M13 9a1 1 0 1 1-2 0 1 1 0 0 1 2 0M12 11a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0v-3a1 1 0 0 1 1-1" }),
  /* @__PURE__ */ e("path", { fill: "currentColor", d: "M12 18a6 6 0 1 1 0-12 6 6 0 0 1 0 12m0 2a8 8 0 1 0 0-16 8 8 0 0 0 0 16" })
] }), z1 = r(U4), j4 = (l, a) => /* @__PURE__ */ e("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: a, ...l, children: /* @__PURE__ */ e("path", { fill: "currentColor", d: "M20 12a8 8 0 1 1-16 0 8 8 0 0 1 16 0m-8-4a1 1 0 1 0 0 2 1 1 0 0 0 0-2m1 4a1 1 0 1 0-2 0v3a1 1 0 1 0 2 0z" }) }), E4 = r(j4), W4 = (l, a) => /* @__PURE__ */ e("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: a, ...l, children: /* @__PURE__ */ e("path", { fill: "currentColor", d: "M9 10a1 1 0 0 1 1-1h1a2 2 0 0 1 2 2v6h1a1 1 0 1 1 0 2h-4a1 1 0 1 1 0-2h1v-6h-1a1 1 0 0 1-1-1M13 6.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" }) }), q4 = r(W4), Z4 = (l, a) => /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: a, ...l, children: [
  /* @__PURE__ */ e("path", { fill: "currentColor", d: "M8 6a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2h-2v10h2a1 1 0 1 1 0 2H9a1 1 0 1 1 0-2h2V7H9a1 1 0 0 1-1-1" }),
  /* @__PURE__ */ e("path", { fill: "currentColor", d: "M3 11a3 3 0 0 1 3-3h2a1 1 0 0 1 0 2H6a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 1 1 0 2H6a3 3 0 0 1-3-3zM21 13a3 3 0 0 1-3 3h-2a1 1 0 1 1 0-2h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1h-2a1 1 0 1 1 0-2h2a3 3 0 0 1 3 3z" })
] }), Q4 = r(Z4), K4 = (l, a) => /* @__PURE__ */ e("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: a, ...l, children: /* @__PURE__ */ e("path", { fill: "currentColor", d: "M8 6a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2h-3.153l-1.666 10H15a1 1 0 1 1 0 2H7a1 1 0 1 1 0-2h3.153l1.666-10H9a1 1 0 0 1-1-1" }) }), X4 = r(K4), Y4 = (l, a) => /* @__PURE__ */ e("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: a, ...l, children: /* @__PURE__ */ e("path", { fill: "currentColor", d: "M4 7a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v7a2 2 0 0 1 2 2 4 4 0 0 1-4 4H6a4 4 0 0 1-4-4 2 2 0 0 1 2-2zm2 7h3.5a1.5 1.5 0 0 1 1.415 1h2.17a1.5 1.5 0 0 1 1.415-1H18V7a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3.085 2H4a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2h-5.085a1.5 1.5 0 0 1-1.415 1h-3a1.5 1.5 0 0 1-1.415-1" }) }), J4 = r(Y4), el = (l, a) => /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: a, ...l, children: [
  /* @__PURE__ */ e("path", { fill: "currentColor", d: "M20 8a1 1 0 0 1 1 1v1.444c0 1.643 0 2.937-.085 3.978-.087 1.063-.267 1.95-.678 2.756a7 7 0 0 1-3.06 3.059c-.805.41-1.692.591-2.755.678-1.041.085-2.335.085-3.978.085H9a1 1 0 1 1 0-2h1.4c1.697 0 2.909 0 3.86-.078.938-.077 1.533-.224 2.01-.467a5 5 0 0 0 2.185-2.185c.243-.477.39-1.072.467-2.01.077-.951.078-2.163.078-3.86V9a1 1 0 0 1 1-1" }),
  /* @__PURE__ */ e("path", { fill: "currentColor", d: "M4 8a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v6a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4zm4-2a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2z" })
] }), al = r(el), ll = (l, a) => /* @__PURE__ */ e("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: a, ...l, children: /* @__PURE__ */ e("path", { fill: "currentColor", d: "m7 13.92-.004-.01a.2.2 0 0 0-.038-.054 7 7 0 1 1 10.084 0 .2.2 0 0 0-.042.065V17a4 4 0 0 1-4 4h-2a4 4 0 0 1-4-4zM7 9a4.98 4.98 0 0 0 1.398 3.468A2.1 2.1 0 0 1 9 13.92V15h2v-2.965l-1.055-.703a1 1 0 0 1 1.11-1.664l.945.63.945-.63a1 1 0 0 1 1.11 1.664L13 12.035V15h2v-1.08a2.1 2.1 0 0 1 .601-1.452A5 5 0 1 0 7 9m5 8H9a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2h-3" }) }), rl = r(ll), ol = (l, a) => /* @__PURE__ */ e("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: a, ...l, children: /* @__PURE__ */ e("path", { fill: "currentColor", d: "M4.293 4.293a1 1 0 0 1 1.414 0l1 1a1 1 0 0 1-1.414 1.414l-1-1a1 1 0 0 1 0-1.414M9 3a1 1 0 0 1 1 1v1a1 1 0 0 1-2 0V4a1 1 0 0 1 1-1M3 9a1 1 0 0 1 1-1h1a1 1 0 0 1 0 2H4a1 1 0 0 1-1-1M19.707 19.707a1 1 0 0 1-1.414 0l-1-1a1 1 0 0 1 1.414-1.414l1 1a1 1 0 0 1 0 1.414M15 21a1 1 0 0 1-1-1v-1a1 1 0 1 1 2 0v1a1 1 0 0 1-1 1M21 15a1 1 0 0 1-1 1h-1a1 1 0 1 1 0-2h1a1 1 0 0 1 1 1M7.707 11.293a1 1 0 0 1 0 1.414l-1 1a2.536 2.536 0 0 0 3.586 3.586l1-1a1 1 0 0 1 1.414 1.414l-1 1a4.536 4.536 0 0 1-6.414-6.414l1-1a1 1 0 0 1 1.414 0M16.293 12.707a1 1 0 0 1 0-1.414l1-1a2.536 2.536 0 1 0-3.586-3.586l-1 1a1 1 0 1 1-1.414-1.414l1-1a4.536 4.536 0 1 1 6.414 6.414l-1 1a1 1 0 0 1-1.414 0" }) }), tl = r(ol), nl = (l, a) => /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: a, ...l, children: [
  /* @__PURE__ */ e("path", { fill: "currentColor", d: "M12.293 10.707a1.83 1.83 0 0 0-2.586 0l-3 3a2.536 2.536 0 0 0 3.586 3.586 1 1 0 0 1 1.414 1.414 4.535 4.535 0 1 1-6.414-6.414l3-3a3.83 3.83 0 0 1 5.414 0 1 1 0 0 1-1.414 1.414" }),
  /* @__PURE__ */ e("path", { fill: "currentColor", d: "M11.707 13.293a1.83 1.83 0 0 0 2.586 0l3-3a2.536 2.536 0 1 0-3.586-3.586 1 1 0 1 1-1.414-1.414 4.536 4.536 0 0 1 6.414 6.414l-3 3a3.83 3.83 0 0 1-5.414 0 1 1 0 0 1 1.414-1.414" })
] }), il = r(nl), sl = (l, a) => /* @__PURE__ */ e("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: a, ...l, children: /* @__PURE__ */ e("path", { fill: "currentColor", d: "M8 8a1 1 0 0 1 1-1h10a1 1 0 1 1 0 2H9a1 1 0 0 1-1-1M8 12a1 1 0 0 1 1-1h10a1 1 0 1 1 0 2H9a1 1 0 0 1-1-1M8 16a1 1 0 0 1 1-1h10a1 1 0 1 1 0 2H9a1 1 0 0 1-1-1M4 8a1 1 0 1 1 2 0 1 1 0 0 1-2 0M5 11a1 1 0 1 1 0 2 1 1 0 0 1 0-2M5 15a1 1 0 1 0 0 2 1 1 0 0 0 0-2" }) }), cl = r(sl), dl = (l, a) => /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: a, ...l, children: [
  /* @__PURE__ */ e("path", { fill: "currentColor", d: "M12 13a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0v-1a1 1 0 0 1 1-1" }),
  /* @__PURE__ */ e("path", { fill: "currentColor", d: "M7 9.126V8a5 5 0 0 1 10 0v1.126c1.725.444 3 2.01 3 3.874v3a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4v-3a4 4 0 0 1 3-3.874M9 8v1h6V8a3 3 0 1 0-6 0m7 3H8a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2" })
] }), fl = r(dl), hl = (l, a) => /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: a, ...l, children: [
  /* @__PURE__ */ e("path", { fill: "currentColor", d: "M12 13a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0v-1a1 1 0 0 1 1-1" }),
  /* @__PURE__ */ e("path", { fill: "currentColor", d: "M9 8a3 3 0 0 1 3-3 1 1 0 1 0 0-2 5 5 0 0 0-5 5v1.126C5.275 9.57 4 11.136 4 13v3a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4v-3a4 4 0 0 0-4-4H9zm-1 3h8a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2" })
] }), vl = r(hl), ul = (l, a) => /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: a, ...l, children: [
  /* @__PURE__ */ e("path", { fill: "currentColor", d: "M6.919 16.284a6.646 6.646 0 1 1 10.162 0q.505.315.964.689l.134.108a8 8 0 1 0-12.358 0l.134-.108q.46-.374.964-.689" }),
  /* @__PURE__ */ e("path", { fill: "currentColor", d: "M17.037 18.215A7.97 7.97 0 0 1 12 20a7.97 7.97 0 0 1-5.037-1.785A7.97 7.97 0 0 1 12 16.431c1.91 0 3.662.668 5.037 1.784M12 14.708A2.954 2.954 0 1 0 12 8.8a2.954 2.954 0 0 0 0 5.908" })
] }), gl = r(ul), wl = (l, a) => /* @__PURE__ */ e("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: a, ...l, children: /* @__PURE__ */ e("path", { fill: "currentColor", d: "M14.939 10.137q.03-.288.03-.584C14.969 6.486 12.513 4 9.484 4S4 6.486 4 9.553s2.455 5.552 5.484 5.552q.33 0 .65-.039v3.867c0 .59.472 1.067 1.053 1.067h7.275a1.06 1.06 0 0 0 1.053-1.067v-7.73a1.06 1.06 0 0 0-1.053-1.066zm0 0c-.266 2.575-2.271 4.627-4.805 4.93v-3.863c0-.59.472-1.067 1.053-1.067z" }) }), pl = r(wl), ml = (l, a) => /* @__PURE__ */ e("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: a, ...l, children: /* @__PURE__ */ e("path", { fill: "currentColor", d: "M11.98 19.194c-.004-.005-.74-1.022-.916-1.406a9 9 0 0 1-.222-.506 5 5 0 0 1-.314.386c-.816.907-1.733 1.496-2.816 1.588a4.8 4.8 0 0 1-1.396-.038 6 6 0 0 1-.479-.838 62 62 0 0 1-.353-.773q-.108.162-.228.306c-.64.766-1.362 1.285-2.325 1.348-.685.045-.931-.052-.931-.052s1.672-6.169 1.942-6.824c.296-.714.748-1.691 1.94-2.571 1.143-.838 2-.887 2.143-.887h.143s-.446 1.487-1.027 3.622q-.079.293-.16.644a57 57 0 0 0-.031 1.7c.005.193.018.416.033.627l.077.784c.52-2.007 1.154-4.386 1.343-4.815.367-.834 1.072-2.258 2.664-3.246a7.4 7.4 0 0 1 2.667-1c.296-.052.242.026.242.026s-.504 1.965-1.201 4.443q-.074.267-.147.567c-.002.579 0 1.342.02 1.736.013.287.052.659.092.994v-.004s.08.53.113.857v.005c.646-2.415 1.455-5.347 1.714-5.869a8.47 8.47 0 0 1 3.57-3.8c1.574-.876 2.78-1.063 3.127-1.116l.056-.01A6 6 0 0 1 22 5s-.69 2.588-1.63 5.867a65 65 0 0 0-.496 1.832c-.25.966-.457 1.766-.847 2.803-.629 1.67-2.458 3.165-4.302 3.613-1.182.289-2.746.079-2.746.079" }) }), xl = r(ml), Cl = (l, a) => /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: a, ...l, children: [
  /* @__PURE__ */ e("path", { fill: "currentColor", d: "M13.635 6.372c.3-.296 1.566-1.118 1.833-.855.25.263-.567 1.529-.85 1.808-.283.296-.5.51-.65.658l.467 4.768-.533.526-1.6-3.65-.633.625c-.45.46-1.117.937-1.666 1.266l.083 1.644-.25.246s-.783-1.446-.816-1.48c-.017-.032-1.483-.821-1.483-.821l.25-.247 1.65.082c.332-.542.799-1.2 1.265-1.66l.617-.608-3.666-1.595.533-.526 4.8.477c.15-.165.366-.379.649-.658" }),
  /* @__PURE__ */ e("path", { fill: "currentColor", d: "M6.337 3.33C9.469.223 14.535.223 17.65 3.33a7.923 7.923 0 0 1 0 11.262c-3.133 3.107-8.198 3.107-11.314 0a7.95 7.95 0 0 1 0-11.262m1 10.292a6.62 6.62 0 0 0 9.33 0c2.583-2.581 2.583-6.74 0-9.289a6.62 6.62 0 0 0-9.33 0 6.537 6.537 0 0 0 0 9.29" }),
  /* @__PURE__ */ e("path", { fill: "currentColor", d: "M12.002 18.34c1.383 0 2.7-.279 3.932-.854a.697.697 0 0 1 .934.345c.15.345 0 .756-.35.92a10.6 10.6 0 0 1-4.516.987c-1.566 0-3.1-.329-4.515-.986a.68.68 0 0 1-.35-.921.697.697 0 0 1 .933-.345 9.5 9.5 0 0 0 3.932.855M12.002 22.5c-1.25 0-2.466-.18-3.649-.559a.716.716 0 0 1-.466-.871.71.71 0 0 1 .883-.46c1.033.328 2.132.493 3.232.493s2.166-.165 3.216-.477a.715.715 0 0 1 .883.46.69.69 0 0 1-.466.872c-1.184.361-2.4.542-3.633.542" })
] }), Ml = r(Cl), Sl = (l, a) => /* @__PURE__ */ e("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: a, ...l, children: /* @__PURE__ */ e("path", { fill: "currentColor", d: "M9 6a3 3 0 1 0 0 6 3 3 0 0 0 0-6M4 9a5 5 0 1 1 10 0A5 5 0 0 1 4 9M15 7a1 1 0 0 1 1-1 4 4 0 0 1 0 8 1 1 0 1 1 0-2 2 2 0 1 0 0-4 1 1 0 0 1-1-1M2.793 17.293a1 1 0 0 0 1.41 1.418l.007-.007.047-.043c.046-.04.12-.104.222-.183a6.6 6.6 0 0 1 .93-.596A7.6 7.6 0 0 1 9 17c1.554 0 2.768.443 3.592.882.412.22.724.438.929.596a4 4 0 0 1 .269.226l.006.006a1 1 0 0 0 1.411-1.417l-.003-.003-.003-.003-.01-.01a3 3 0 0 0-.12-.11 6 6 0 0 0-.326-.27 8.6 8.6 0 0 0-1.212-.78A9.6 9.6 0 0 0 9 15a9.6 9.6 0 0 0-4.533 1.118 8.6 8.6 0 0 0-1.212.779 6 6 0 0 0-.446.38l-.01.01-.003.003-.002.002q-.002.001-.001 0m11 1.415.002.001.001.002M16 16a1 1 0 0 1 1-1c1.07 0 1.919.307 2.502.618a4.8 4.8 0 0 1 .866.592l.057.052.02.018.006.007.003.003.002.002q.002.001.001 0a1 1 0 0 1-1.406 1.423l-.012-.01-.085-.07a3 3 0 0 0-.393-.253A3.3 3.3 0 0 0 17 17a1 1 0 0 1-1-1" }) }), bl = r(Sl), yl = (l, a) => /* @__PURE__ */ e("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: a, ...l, children: /* @__PURE__ */ e("path", { fill: "currentColor", d: "M4 11.467a3.06 3.06 0 0 1-1.212-3.365l.629-2.2A4 4 0 0 1 7.263 3h9.474a4 4 0 0 1 3.846 2.901l.629 2.201A3.06 3.06 0 0 1 20 11.467V16a4 4 0 0 1-4 4h-1a2 2 0 0 1-2-2v-2a1 1 0 1 0-2 0v2a2 2 0 0 1-2 2H8a4 4 0 0 1-4-4zM5.34 6.45l-.629 2.2a1.058 1.058 0 0 0 1.963.764l.432-.862a1 1 0 0 1 1.788 0l.553 1.105a.618.618 0 0 0 1.106 0l.553-1.105a1 1 0 0 1 1.788 0l.553 1.105a.618.618 0 0 0 1.106 0l.553-1.105a1 1 0 0 1 1.788 0l.432.862a1.058 1.058 0 0 0 1.963-.763L18.66 6.45A2 2 0 0 0 16.737 5H7.263A2 2 0 0 0 5.34 6.45m2.624 4.577a3.06 3.06 0 0 1-1.964.96V16a2 2 0 0 0 2 2h1v-2a3 3 0 1 1 6 0v2h1a2 2 0 0 0 2-2v-4.012a3.06 3.06 0 0 1-1.964-.96 2.618 2.618 0 0 1-4.036.043 2.618 2.618 0 0 1-4.036-.043" }) }), Bl = r(yl), Rl = (l, a) => /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: a, ...l, children: [
  /* @__PURE__ */ e("path", { fill: "currentColor", d: "M20 8a1 1 0 0 1 1 1v1.444c0 1.643 0 2.937-.085 3.978-.087 1.063-.267 1.95-.678 2.756a7 7 0 0 1-3.06 3.059c-.805.41-1.692.591-2.755.678-1.041.085-2.335.085-3.978.085H9a1 1 0 1 1 0-2h1.4c1.697 0 2.909 0 3.86-.078.938-.077 1.533-.224 2.01-.467a5 5 0 0 0 2.185-2.185c.243-.477.39-1.072.467-2.01.077-.951.078-2.163.078-3.86V9a1 1 0 0 1 1-1" }),
  /* @__PURE__ */ e("path", { fill: "currentColor", d: "M4 8a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v6a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4zm4-2a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2z" }),
  /* @__PURE__ */ e("path", { fill: "currentColor", d: "M11 7a1 1 0 0 1 1 1v2h2a1 1 0 1 1 0 2h-2v2a1 1 0 1 1-2 0v-2H8a1 1 0 1 1 0-2h2V8a1 1 0 0 1 1-1" })
] }), _l = r(Rl), Fl = (l, a) => /* @__PURE__ */ e("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: a, ...l, children: /* @__PURE__ */ e("path", { fill: "currentColor", d: "M17.56 5.172A1 1 0 0 1 18 6v11a1 1 0 0 1-1.371.928l-3.928-1.57a5 5 0 0 0-1.201-.315v1.207a2.75 2.75 0 1 1-5.5 0V16a3 3 0 0 1-3-3v-3a3 3 0 0 1 3-3h3.882a10 10 0 0 0 3.714-.715l3.033-1.213a1 1 0 0 1 .932.1M16 7.477l-1.662.665A12 12 0 0 1 9.882 9H6a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h1a1 1 0 0 1 1 1v2.25a.75.75 0 0 0 1.5 0V15a1 1 0 0 1 1-1h.345c.89 0 1.772.17 2.6.5L16 15.524zM20 9a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0v-4a1 1 0 0 1 1-1" }) }), zl = r(Fl), Al = (l, a) => /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: a, ...l, children: [
  /* @__PURE__ */ e("path", { fill: "currentColor", d: "M9 11a1 1 0 1 0 0 2 1 1 0 0 0 0-2M11 12a1 1 0 1 1 2 0 1 1 0 0 1-2 0M15 11a1 1 0 1 0 0 2 1 1 0 0 0 0-2" }),
  /* @__PURE__ */ e("path", { fill: "currentColor", d: "M12 6a6 6 0 1 0 0 12 6 6 0 0 0 0-12m-8 6a8 8 0 1 1 16 0 8 8 0 0 1-16 0" })
] }), Nl = r(Al), Hl = (l, a) => /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: a, ...l, children: [
  /* @__PURE__ */ e("path", { fill: "currentColor", d: "M5 7a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H9a4 4 0 0 1-4-4zm4-2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2z" }),
  /* @__PURE__ */ e("path", { fill: "currentColor", d: "M11 16a1 1 0 1 1 2 0 1 1 0 0 1-2 0" })
] }), kl = r(Hl), $l = (l, a) => /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: a, ...l, children: [
  /* @__PURE__ */ e("path", { fill: "currentColor", fillRule: "evenodd", d: "M10.326 1.5a2 2 0 0 0-1.923 2.55l.41 1.438A6 6 0 0 0 5.28 9.945l-.715 4C3.91 17.623 6.736 21 10.472 21h3.056c3.736 0 6.563-3.377 5.907-7.055l-.715-4a6 6 0 0 0-3.534-4.457l.412-1.439A2 2 0 0 0 13.674 1.5zM12.814 7h-1.628a4 4 0 0 0-3.938 3.297l-.714 4A4 4 0 0 0 10.472 19h3.056a4 4 0 0 0 3.938-4.703l-.715-4A4 4 0 0 0 12.814 7m.432-2 .428-1.5h-3.348l.428 1.5z", clipRule: "evenodd" }),
  /* @__PURE__ */ e("path", { fill: "currentColor", d: "M11 9a1 1 0 0 1 2 0h1a1 1 0 1 1 0 2h-2.5a.5.5 0 0 0 0 1h1a2.5 2.5 0 0 1 .499 4.95L13 17a1 1 0 1 1-2 0h-1a1 1 0 1 1 0-2h2.5a.5.5 0 0 0 0-1h-1a2.5 2.5 0 0 1-.499-4.95z" })
] }), Vl = r($l), Ll = (l, a) => /* @__PURE__ */ e("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: a, ...l, children: /* @__PURE__ */ e("path", { fill: "currentColor", d: "M4 6a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm5 0H6v3h3zM4 15a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm5 0H6v3h3zM13 6a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-3a2 2 0 0 1-2-2zm5 0h-3v3h3zM13 15a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-3a2 2 0 0 1-2-2zm5 0h-3v3h3z" }) }), Il = r(Ll), Ol = (l, a) => /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: a, ...l, children: [
  /* @__PURE__ */ e("path", { fill: "currentColor", d: "M7 7a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h3.5a1 1 0 1 1 0 2H7a4 4 0 0 1-4-4V9a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4 1 1 0 1 1-2 0 2 2 0 0 0-2-2z" }),
  /* @__PURE__ */ e("path", { fill: "currentColor", d: "M6 10a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1M7 13a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2zM17.293 12.293a1 1 0 0 1 1.414 0l3 3a1 1 0 0 1 0 1.414l-3 3a1 1 0 0 1-1.414-1.414L18.586 17H14a1 1 0 1 1 0-2h4.586l-1.293-1.293a1 1 0 0 1 0-1.414" })
] }), Tl = r(Ol), Gl = (l, a) => /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: a, ...l, children: [
  /* @__PURE__ */ e("path", { fill: "currentColor", d: "M17.293 12.293a1 1 0 0 1 1.414 0l3 3a1 1 0 0 1 0 1.414l-3 3a1 1 0 0 1-1.414-1.414L18.586 17H14a1 1 0 1 1 0-2h4.586l-1.293-1.293a1 1 0 0 1 0-1.414" }),
  /* @__PURE__ */ e("path", { fill: "currentColor", d: "M7.161 3h2.567c1.07 0 2.057.577 2.581 1.51.17.303.49.49.838.49h2.843c1.49-.028 2.822.154 3.747 1.065.909.896 1.182 2.264 1.262 3.886a1 1 0 0 1-1.998.098c-.078-1.58-.346-2.241-.668-2.56-.304-.3-.89-.517-2.313-.49L16 7h-2.853a2.96 2.96 0 0 1-2.581-1.51.96.96 0 0 0-.838-.49H7.2c-.577 0-.949 0-1.232.024-.272.022-.373.06-.422.085a1 1 0 0 0-.437.437c-.025.05-.063.15-.085.422C5 6.25 5 6.623 5 7.2v6c0 .857 0 1.439.038 1.889.035.438.1.663.18.819a2 2 0 0 0 .874.874c.156.08.38.145.819.18C7.361 17 7.943 17 8.8 17h2.075a1 1 0 1 1 0 2H8.759c-.805 0-1.47 0-2.01-.044-.563-.046-1.08-.145-1.565-.392a4 4 0 0 1-1.748-1.748c-.247-.485-.346-1.002-.392-1.564C3 14.71 3 14.046 3 13.242v-6.08c0-.528 0-.982.03-1.357.033-.395.104-.789.297-1.167a3 3 0 0 1 1.311-1.311c.378-.193.772-.264 1.167-.296C6.18 3 6.635 3 7.161 3" })
] }), Dl = r(Gl), Pl = (l, a) => /* @__PURE__ */ e("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: a, ...l, children: /* @__PURE__ */ e("path", { fill: "currentColor", fillRule: "evenodd", d: "M7.161 3h2.567c1.07 0 2.057.577 2.581 1.51.17.303.49.49.838.49h2.094c.805 0 1.47 0 2.01.044.563.046 1.08.145 1.565.392a4 4 0 0 1 1.748 1.748c.247.485.346 1.002.392 1.564.044.541.044 1.206.044 2.01v2.483c0 .805 0 1.47-.044 2.01-.046.563-.145 1.08-.392 1.565a4 4 0 0 1-1.748 1.748c-.485.247-1.002.346-1.564.392l-.252.017V19H7v-.027l-.252-.017c-.562-.046-1.079-.145-1.564-.392a4 4 0 0 1-1.748-1.748c-.247-.485-.346-1.002-.392-1.564C3 14.71 3 14.046 3 13.242v-6.08c0-.528 0-.982.03-1.357.033-.395.104-.789.297-1.167a3 3 0 0 1 1.311-1.311c.378-.193.772-.264 1.167-.296C6.18 3 6.635 3 7.161 3m9.928 13.962q-.228.019-.51.027a5.02 5.02 0 0 0-2.618-2.59 3.5 3.5 0 1 0-3.922 0 5.02 5.02 0 0 0-2.618 2.59 10 10 0 0 1-.51-.027c-.438-.035-.663-.1-.819-.18a2 2 0 0 1-.874-.874c-.08-.156-.145-.38-.18-.819C5 14.639 5 14.057 5 13.2v-6c0-.577 0-.949.024-1.232.022-.272.06-.373.085-.422a1 1 0 0 1 .437-.437c.05-.025.15-.063.422-.085C6.25 5 6.623 5 7.2 5h2.528c.347 0 .668.187.838.49A2.96 2.96 0 0 0 13.147 7H15.2c.857 0 1.439 0 1.889.038.438.035.663.1.819.18a2 2 0 0 1 .874.874c.08.156.145.38.18.819C19 9.361 19 9.943 19 10.8v2.4c0 .857 0 1.439-.038 1.889-.035.438-.1.663-.18.819a2 2 0 0 1-.874.874c-.156.08-.38.145-.819.18M12 16c.889 0 1.687.386 2.236 1H9.764c.55-.614 1.348-1 2.236-1m-1.5-4.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0", clipRule: "evenodd" }) }), Ul = r(Pl), jl = (l, a) => /* @__PURE__ */ e("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: a, ...l, children: /* @__PURE__ */ e("path", { fill: "currentColor", d: "M9 12.5a1 1 0 0 1 1-1h2.5a1 1 0 1 1 0 2H10a1 1 0 0 1-1-1M17.65 13.43q-.048.131-.107.248c-.148.295-.322.48-.527.6-.21.124-.524.222-1.016.222a1 1 0 1 0 0 2c.758 0 1.444-.152 2.03-.497.593-.349 1.012-.851 1.302-1.43.552-1.105.668-2.568.668-4.073a3 3 0 1 0-2.35 2.93M16 10.5a1 1 0 1 1 2 0 1 1 0 0 1-2 0M8 8.5a1 1 0 0 0-2 0c0 .175-.097.433-.332.668S5.175 9.5 5 9.5a1 1 0 0 0 0 2c.352 0 .69-.073 1-.197V15.5a1 1 0 1 0 2 0z" }) }), El = r(jl), Wl = (l, a) => /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: a, ...l, children: [
  /* @__PURE__ */ e("path", { fill: "currentColor", d: "M9 12a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2h-4a1 1 0 0 1-1-1M9 8a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2h-4a1 1 0 0 1-1-1" }),
  /* @__PURE__ */ e("path", { fill: "currentColor", d: "M5 7a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v12a1 1 0 1 1 0 2H5a1 1 0 1 1 0-2zm2 12h2v-2.5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2V19h2V7a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2zm6 0v-2.5h-2V19z" })
] }), A1 = r(Wl), ql = (l, a) => /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: a, ...l, children: [
  /* @__PURE__ */ e("path", { fill: "currentColor", d: "M12 7a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2h-6a1 1 0 0 1-1-1M12 12a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2h-6a1 1 0 0 1-1-1M12 17a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2h-6a1 1 0 0 1-1-1M7 13a1 1 0 0 0-1 1 1 1 0 1 1-2 0 3 3 0 1 1 3 3 1 1 0 0 0-1 1h3a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1v-1a3 3 0 0 1 3-3 1 1 0 1 0 0-2" }),
  /* @__PURE__ */ e("path", { fill: "currentColor", d: "M8 4a1 1 0 0 0-2 0c0 .175-.097.433-.332.668S5.175 5 5 5a1 1 0 0 0 0 2c.352 0 .69-.073 1-.198V10a1 1 0 1 0 2 0z" })
] }), Zl = r(ql), Ql = (l, a) => /* @__PURE__ */ e("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: a, ...l, children: /* @__PURE__ */ e("path", { fill: "currentColor", d: "M18.293 7.707a1.83 1.83 0 0 0-2.586 0l-7 7a.414.414 0 0 0 .586.586l5-5a1 1 0 1 1 1.414 1.414l-5 5a2.414 2.414 0 0 1-3.414-3.414l7-7a3.828 3.828 0 1 1 5.414 5.414l-7 7a5.243 5.243 0 1 1-7.414-7.414l5-5a1 1 0 1 1 1.414 1.414l-5 5a3.243 3.243 0 1 0 4.586 4.586l7-7a1.83 1.83 0 0 0 0-2.586" }) }), Kl = r(Ql), Xl = (l, a) => /* @__PURE__ */ e("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: a, ...l, children: /* @__PURE__ */ e("path", { fill: "currentColor", d: "M5 6.5c0-.465 0-.697.038-.89A2 2 0 0 1 6.61 4.038C6.803 4 7.035 4 7.5 4s.697 0 .89.038A2 2 0 0 1 9.962 5.61c.038.193.038.425.038.89v11c0 .465 0 .697-.038.89a2 2 0 0 1-1.572 1.571C8.197 20 7.965 20 7.5 20s-.697 0-.89-.039a2 2 0 0 1-1.572-1.571C5 18.197 5 17.965 5 17.5zM14 6.5c0-.465 0-.697.039-.89a2 2 0 0 1 1.57-1.571C15.804 4 16.036 4 16.5 4s.697 0 .89.039a2 2 0 0 1 1.572 1.57c.038.194.038.426.038.891v11c0 .465 0 .697-.038.89a2 2 0 0 1-1.572 1.572c-.193.038-.425.038-.89.038s-.697 0-.89-.038a2 2 0 0 1-1.571-1.572C14 18.197 14 17.965 14 17.5z" }) }), Yl = r(Xl), Jl = (l, a) => /* @__PURE__ */ e("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: a, ...l, children: /* @__PURE__ */ e("path", { fill: "currentColor", fillRule: "evenodd", d: "M5 4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 2h4v12H5zM15 4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 2h4v12h-4z", clipRule: "evenodd" }) }), er = r(Jl), ar = (l, a) => /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: a, ...l, children: [
  /* @__PURE__ */ e("path", { fill: "currentColor", fillRule: "evenodd", d: "M5 6a4 4 0 0 1 4-4h5a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H9a4 4 0 0 1-4-4zm4-2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h5a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z", clipRule: "evenodd" }),
  /* @__PURE__ */ e("path", { fill: "currentColor", fillRule: "evenodd", d: "M20 8a1 1 0 0 1 1 1v1.444c0 1.643 0 2.937-.085 3.978-.087 1.063-.267 1.95-.678 2.756a7 7 0 0 1-3.06 3.059c-.805.41-1.692.591-2.755.678-1.041.085-2.335.085-3.978.085H9a1 1 0 1 1 0-2h1.4c1.697 0 2.909 0 3.86-.078.938-.077 1.533-.224 2.01-.467a5 5 0 0 0 2.185-2.185c.243-.477.39-1.072.467-2.01.077-.951.078-2.163.078-3.86V9a1 1 0 0 1 1-1", clipRule: "evenodd" }),
  /* @__PURE__ */ e("path", { fill: "currentColor", d: "M10.5 6a1 1 0 0 1 2 0h1a1 1 0 1 1 0 2H11a.5.5 0 0 0 0 1h1a2.5 2.5 0 0 1 .499 4.95l.001.05a1 1 0 1 1-2 0h-1a1 1 0 1 1 0-2H12a.5.5 0 0 0 0-1h-1a2.5 2.5 0 0 1-.499-4.95z" })
] }), lr = r(ar), rr = (l, a) => /* @__PURE__ */ e("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: a, ...l, children: /* @__PURE__ */ e("path", { fill: "currentColor", d: "M13.793 4.793a3.828 3.828 0 1 1 5.414 5.414l-7.5 7.5a1 1 0 0 1-.444.258l-5.5 1.5a1 1 0 0 1-1.228-1.228l1.5-5.5a1 1 0 0 1 .258-.444zm4 1.414a1.83 1.83 0 0 0-2.586 0L8.414 13 11 15.586l6.793-6.793a1.83 1.83 0 0 0 0-2.586M9.074 16.49l-1.563-1.563-.586 2.149z" }) }), or = r(rr), tr = (l, a) => /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: a, ...l, children: [
  /* @__PURE__ */ e("path", { fill: "currentColor", d: "M4 5a1 1 0 0 1 1 1v9a2 2 0 0 0 2 2h13a1 1 0 1 1 0 2H7a4 4 0 0 1-4-4V6a1 1 0 0 1 1-1" }),
  /* @__PURE__ */ e("path", { fill: "currentColor", d: "M17 9a1 1 0 1 1 0-2h3a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0v-.586l-2.94 2.94a1.5 1.5 0 0 1-2.12 0L12 11.414l-3.293 3.293a1 1 0 0 1-1.414-1.414l3.646-3.647a1.5 1.5 0 0 1 2.122 0L15 11.586 17.586 9z" })
] }), nr = r(tr), ir = (l, a) => /* @__PURE__ */ e("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: a, ...l, children: /* @__PURE__ */ e("path", { fill: "currentColor", d: "M12 6a3 3 0 1 0 0 6 3 3 0 0 0 0-6M7 9a5 5 0 1 1 10 0A5 5 0 0 1 7 9M5.793 17.293a1 1 0 0 0 1.41 1.418l.007-.007.047-.043c.046-.04.12-.104.222-.183a6.6 6.6 0 0 1 .93-.596A7.6 7.6 0 0 1 12 17c1.554 0 2.768.443 3.592.882.412.22.724.438.929.596a4 4 0 0 1 .269.226l.006.006a1 1 0 0 0 1.411-1.417l-.003-.003-.003-.003-.01-.01a3 3 0 0 0-.12-.11 6 6 0 0 0-.326-.27 8.6 8.6 0 0 0-1.212-.78A9.6 9.6 0 0 0 12 15a9.6 9.6 0 0 0-4.533 1.118 8.6 8.6 0 0 0-1.212.779 6 6 0 0 0-.446.38l-.01.01-.003.003-.002.002zm11 1.415.002.001.001.002" }) }), sr = r(ir), cr = (l, a) => /* @__PURE__ */ e("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: a, ...l, children: /* @__PURE__ */ e("path", { fill: "currentColor", d: "M3.447 7.496C3.232 5.34 5.09 4 6.907 4h2.872a2 2 0 0 1 1.898 1.368l.974 2.921a2 2 0 0 1-1.155 2.49l-.572.228c.289.462.583.835.908 1.16.326.326.7.62 1.16.909l.23-.572a2 2 0 0 1 2.489-1.154l2.921.973A2 2 0 0 1 20 14.221v2.28c0 2.168-1.815 4.1-4.167 3.645-2.629-.507-6.52-1.778-9.114-5.021-2.324-2.906-3.078-5.682-3.272-7.63M6.907 6c-.996 0-1.534.653-1.47 1.297.161 1.615.79 4.012 2.844 6.578 2.154 2.693 5.478 3.834 7.93 4.308.902.174 1.789-.538 1.789-1.683v-2.28l-2.922-.973-.65 1.624a1 1 0 0 1-1.375.523c-1.06-.53-1.91-1.087-2.635-1.812s-1.282-1.575-1.812-2.635a1 1 0 0 1 .523-1.375l1.624-.65L9.78 6z" }) }), dr = r(cr), fr = (l, a) => /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: a, ...l, children: [
  /* @__PURE__ */ e("path", { fill: "currentColor", d: "M12 6c-2.106 0-4 1.95-4 4.6 0 1.263.507 2.464 1.386 3.743.716 1.04 1.622 2.058 2.614 3.16.992-1.102 1.898-2.12 2.614-3.16C15.493 13.064 16 11.863 16 10.6 16 7.95 14.106 6 12 6m-6 4.6C6 7.065 8.583 4 12 4s6 3.065 6 6.6c0 1.83-.743 3.428-1.738 4.876-.828 1.204-1.889 2.382-2.93 3.538l-.586.652a1 1 0 0 1-1.492 0l-.585-.652c-1.042-1.156-2.103-2.334-2.93-3.538C6.743 14.028 6 12.43 6 10.6" }),
  /* @__PURE__ */ e("path", { fill: "currentColor", d: "M11 10a1 1 0 1 1 2 0 1 1 0 0 1-2 0" })
] }), hr = r(fr), vr = (l, a) => /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: a, ...l, children: [
  /* @__PURE__ */ e("path", { fill: "currentColor", d: "M12 5c-2.702 0-5 2.356-5 5.4 0 1.47.62 2.864 1.686 4.34.902 1.25 2.057 2.472 3.31 3.797l.004.005.005-.005c1.252-1.325 2.407-2.547 3.31-3.797C16.38 13.264 17 11.87 17 10.4 17 7.356 14.702 5 12 5m-7 5.4C5 6.375 8.074 3 12 3s7 3.375 7 7.4c0 2.065-.88 3.87-2.064 5.51-.987 1.368-2.251 2.704-3.502 4.027q-.354.374-.704.747a1 1 0 0 1-1.46 0q-.35-.373-.704-.747c-1.25-1.323-2.515-2.659-3.502-4.026C5.88 14.27 5 12.465 5 10.4" }),
  /* @__PURE__ */ e("path", { fill: "currentColor", d: "M9 10a3 3 0 1 1 6 0 3 3 0 0 1-6 0m3-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2" })
] }), ur = r(vr), gr = (l, a) => /* @__PURE__ */ e("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: a, ...l, children: /* @__PURE__ */ e("path", { fill: "currentColor", d: "m6.11 8.841-1.422 1.424a2.43 2.43 0 0 0 0 3.441l1.424 1.424 1.392-.007c.315 0 .617-.125.885-.371l2.397-2.394a1.5 1.5 0 0 1 .616-.373 1.9 1.9 0 0 1-.596-.352l-.01-.009-2.408-2.407c-.268-.246-.57-.371-.884-.371zM7.484 16.504c.67-.146 1.677-.387 1.967-.677l2.404-2.404c.002-.002.012-.01.032-.01.019 0 .029.008.03.01l2.414 2.413c.323.323 1.23.742 1.876.951l-2.498 2.498a2.48 2.48 0 0 1-3.441 0zM17.646 15.348l-1.367-.216c-.326 0-.647-.132-.88-.365l-2.412-2.413a1.5 1.5 0 0 0-.614-.37c.226-.08.43-.207.594-.351l.01-.009L15.4 9.203c.232-.23.554-.364.88-.364l1.587.005 1.422 1.421c.95.95.95 2.492 0 3.441zM16.207 7.182l-2.498-2.497a2.436 2.436 0 0 0-3.444 0L7.39 7.562c.699.109 1.773.277 2.066.587l2.4 2.4.002.002q.011.011.012.01h.005c.003 0 .024 0 .056-.025l2.4-2.4c.324-.324 1.23-.745 1.876-.954" }) }), wr = r(gr), pr = (l, a) => /* @__PURE__ */ e("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: a, ...l, children: /* @__PURE__ */ e("path", { fill: "currentColor", d: "M6 18.503V5.497C6 3.95 7.68 2.989 9.014 3.773l11.055 6.503c1.315.773 1.315 2.675 0 3.448L9.014 20.227C7.681 21.011 6 20.05 6 18.503" }) }), mr = r(pr), xr = (l, a) => /* @__PURE__ */ e("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: a, ...l, children: /* @__PURE__ */ e("path", { fill: "currentColor", d: "M6 6.674c0-1.513 1.616-2.478 2.948-1.76l9.89 5.325c1.403.755 1.403 2.767 0 3.522l-9.89 5.326C7.616 19.804 6 18.839 6 17.326zM17.89 12 8 6.674v10.652z" }) }), Cr = r(xr), Mr = (l, a) => /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: a, ...l, children: [
  /* @__PURE__ */ e("path", { fill: "currentColor", d: "M21 10c0-1.9-1.325-3.49-3.101-3.899A4 4 0 0 0 14 3h-4C8.1 3 6.51 4.325 6.101 6.101A4 4 0 0 0 3 10v4a4 4 0 0 0 4 4 3 3 0 0 0 3 3h4a3 3 0 0 0 3-3 4 4 0 0 0 4-4zm-5.268-4H8.268A2 2 0 0 1 10 5h4a2 2 0 0 1 1.732 1M17 16v-1a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v1a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2m-8 2v-3h6v3a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1" }),
  /* @__PURE__ */ e("path", { fill: "currentColor", d: "M18 11a1 1 0 1 1-2 0 1 1 0 0 1 2 0" })
] }), Sr = r(Mr), br = (l, a) => /* @__PURE__ */ e("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: a, ...l, children: /* @__PURE__ */ e("path", { fill: "currentColor", d: "M11 3a3 3 0 0 0-3 3H7a4 4 0 0 0-4 4v6a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4v-6a4 4 0 0 0-4-4h-1a3 3 0 0 0-3-3zM5 16v-3h5v.75c0 .69.56 1.25 1.25 1.25h1.5c.69 0 1.25-.56 1.25-1.25V13h5v3a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2m0-5v-1a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v1zm9-5h-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1" }) }), yr = r(br), Br = (l, a) => /* @__PURE__ */ e("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: a, ...l, children: /* @__PURE__ */ e("path", { fill: "currentColor", d: "M6.12 5.743A2 2 0 0 1 7.977 3h8.046a2 2 0 0 1 1.857 2.743l-1.184 2.96a2.73 2.73 0 0 0 .38 2.694l1.458 1.875c1.022 1.314.086 3.228-1.579 3.228H13V20a1 1 0 0 1-2 0v-3.5H7.045c-1.665 0-2.6-1.914-1.58-3.228l1.46-1.875a2.73 2.73 0 0 0 .38-2.693zM9.5 9.719c0 1.053-.35 2.075-.997 2.906L7.045 14.5h9.91l-1.458-1.875a4.73 4.73 0 0 1-.659-4.664L16.023 5H7.977l1.184 2.961c.224.56.339 1.156.339 1.758" }) }), Rr = r(Br), _r = (l, a) => /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: a, ...l, children: [
  /* @__PURE__ */ e("path", { fill: "currentColor", d: "M11 16a1 1 0 1 1 2 0 1 1 0 0 1-2 0" }),
  /* @__PURE__ */ e("path", { fill: "currentColor", d: "M12 18a6 6 0 1 1 0-12 6 6 0 0 1 0 12m0 2a8 8 0 1 0 0-16 8 8 0 0 0 0 16" }),
  /* @__PURE__ */ e("path", { fill: "currentColor", d: "M12 9.5a1 1 0 0 0-1 1 1 1 0 1 1-2 0 3 3 0 1 1 4 2.83v.17a1 1 0 1 1-2 0v-1a1 1 0 0 1 1-1 1 1 0 1 0 0-2" })
] }), Fr = r(_r), zr = (l, a) => /* @__PURE__ */ e("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: a, ...l, children: /* @__PURE__ */ e("path", { fill: "currentColor", d: "M20 12a8 8 0 1 1-16 0 8 8 0 0 1 16 0m-9-2a1 1 0 1 1 1 1 1 1 0 0 0-1 1v1a1 1 0 1 0 2 0v-.17A3.001 3.001 0 1 0 9 10a1 1 0 1 0 2 0m1 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2" }) }), Ar = r(zr), Nr = (l, a) => /* @__PURE__ */ e("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: a, ...l, children: /* @__PURE__ */ e("path", { fill: "currentColor", d: "M13.5 17.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M10.602 7.497C10.263 7.798 10 8.271 10 9a1 1 0 0 1-2 0c0-1.271.487-2.298 1.273-2.997C10.041 5.32 11.037 5 12 5c1.075 0 2.067.528 2.77 1.23C15.473 6.933 16 7.925 16 9c0 .934-.239 1.664-.642 2.257-.383.565-.881.948-1.258 1.23l-.075.057c-.373.28-.604.452-.775.667-.143.178-.25.396-.25.789a1 1 0 1 1-2 0c0-.857.268-1.514.688-2.039.341-.426.78-.753 1.107-.995l.105-.079c.373-.28.625-.49.804-.754.16-.235.296-.567.296-1.133 0-.425-.223-.933-.645-1.355C12.933 7.222 12.425 7 12 7c-.537 0-1.041.18-1.398.497" }) }), Hr = r(Nr), kr = (l, a) => /* @__PURE__ */ e("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: a, ...l, children: /* @__PURE__ */ e("path", { fill: "currentColor", d: "M4 11a6 6 0 0 1 6-6 1 1 0 1 1 0 2 4 4 0 0 0-4 4v1h1.5A3.5 3.5 0 1 1 4 15.5zm5 4.5A1.5 1.5 0 0 0 7.5 14H6v1.5a1.5 1.5 0 0 0 3 0M13 11a6 6 0 0 1 6-6 1 1 0 1 1 0 2 4 4 0 0 0-4 4v1h1.5a3.5 3.5 0 1 1-3.5 3.5zm5 4.5a1.5 1.5 0 0 0-1.5-1.5H15v1.5a1.5 1.5 0 0 0 3 0" }) }), $r = r(kr), Vr = (l, a) => /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: a, ...l, children: [
  /* @__PURE__ */ e("path", { fill: "currentColor", d: "M12 6a6 6 0 1 0 6 6 1 1 0 1 1 2 0 8 8 0 1 1-8-8 1 1 0 1 1 0 2" }),
  /* @__PURE__ */ e("path", { fill: "currentColor", d: "M10 9a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0v-1a1 1 0 0 1 1-1M14 9a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0v-1a1 1 0 0 1 1-1M8.72 13.375a1 1 0 0 1 1.405-.156 3 3 0 0 0 3.75 0 1 1 0 1 1 1.25 1.562 5 5 0 0 1-6.25 0 1 1 0 0 1-.156-1.406M18 2.5a1 1 0 0 1 1 1V5h1.5a1 1 0 1 1 0 2H19v1.5a1 1 0 1 1-2 0V7h-1.5a1 1 0 1 1 0-2H17V3.5a1 1 0 0 1 1-1" })
] }), Lr = r(Vr), Ir = (l, a) => /* @__PURE__ */ e("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: a, ...l, children: /* @__PURE__ */ e("path", { fill: "currentColor", d: "M11 3a8 8 0 1 0 4.906 14.32l2.387 2.387a1 1 0 0 0 1.414-1.414l-2.387-2.387A8 8 0 0 0 11 3m4.746 11.67a6.24 6.24 0 0 0-2.317-1.65 3.5 3.5 0 1 0-4.858 0 6.24 6.24 0 0 0-2.317 1.651 6 6 0 1 1 9.493 0m-8.021 1.358c1.717-1.98 4.833-1.98 6.55 0A5.97 5.97 0 0 1 11 17a5.97 5.97 0 0 1-3.275-.972M11 9a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3" }) }), Or = r(Ir), Tr = (l, a) => /* @__PURE__ */ e("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: a, ...l, children: /* @__PURE__ */ e("path", { fill: "currentColor", d: "M13.038 5.003a1 1 0 0 1-1.005.995 6.002 6.002 0 0 0-4.957 9.433l.892-.584a1 1 0 0 1 1.526 1.042l-.579 2.768a1 1 0 0 1-1.183.775l-2.769-.58a1 1 0 0 1-.342-1.815l.781-.511a8 8 0 0 1-.994-2.003 8.002 8.002 0 0 1 7.635-10.525 1 1 0 0 1 .995 1.005M19.17 8.45l.866-.567a1 1 0 0 0-.343-1.816l-2.769-.579a1 1 0 0 0-1.183.774l-.58 2.769a1 1 0 0 0 1.527 1.041l.791-.517a6.002 6.002 0 0 1-5.512 8.447 1 1 0 1 0-.01 2A8.002 8.002 0 0 0 19.17 8.45" }) }), Gr = r(Tr), Dr = (l, a) => /* @__PURE__ */ e("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: a, ...l, children: /* @__PURE__ */ e("path", { fill: "currentColor", d: "M4 12a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1" }) }), Pr = r(Dr), Ur = (l, a) => /* @__PURE__ */ e("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: a, ...l, children: /* @__PURE__ */ e("path", { fill: "currentColor", d: "M16.383 3.076A1 1 0 0 1 17 4v1a4 4 0 0 1 4 4v1a1 1 0 1 1-2 0V9a2 2 0 0 0-2-2v1a1 1 0 0 1-1.707.707l-2-2a1 1 0 0 1 0-1.414l2-2a1 1 0 0 1 1.09-.217M7.617 20.924A1 1 0 0 1 7 20v-1a4 4 0 0 1-4-4v-1a1 1 0 1 1 2 0v1a2 2 0 0 0 2 2v-1a1 1 0 0 1 1.707-.707l2 2a1 1 0 0 1 0 1.414l-2 2a1 1 0 0 1-1.09.217M13 16a3 3 0 0 1 3-3h2a3 3 0 0 1 3 3v2a3 3 0 0 1-3 3h-2a3 3 0 0 1-3-3zm3-1a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1zM3 6a3 3 0 0 1 3-3h2a3 3 0 0 1 3 3v2a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3zm3-1a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1z" }) }), jr = r(Ur), Er = (l, a) => /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: a, ...l, children: [
  /* @__PURE__ */ e("path", { fill: "currentColor", d: "M3 9a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v6a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4zm4-2a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z" }),
  /* @__PURE__ */ e("path", { fill: "currentColor", d: "M8 12a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1M12 8a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0V9a1 1 0 0 1 1-1M16 10a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0v-4a1 1 0 0 1 1-1" })
] }), Wr = r(Er), qr = (l, a) => /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: a, ...l, children: [
  /* @__PURE__ */ e("path", { fill: "currentColor", d: "M14.324 7.006c-1.108.652-1.995 1.662-2.936 3.176l-.007.011c-.449.7-.852 1.646-1.213 2.561l1.08 1.08c.927-.361 1.888-.766 2.602-1.218q.028-.017.058-.033c1.641-.89 2.64-1.985 3.242-3.215.482-.983.732-2.097.817-3.337-1.586.1-2.727.437-3.643.975M10 15.414 8.586 14H5a1 1 0 0 1-.965-1.262L5 13l-.965-.262.001-.005.003-.009.009-.031a12 12 0 0 1 .154-.515c.106-.332.259-.786.45-1.268.19-.478.427-1.005.702-1.475.26-.445.618-.95 1.09-1.266l.001-.001c.547-.365 1.16-.446 1.682-.421s1.027.16 1.443.306c.235.084.455.175.648.264.875-1.267 1.842-2.299 3.092-3.035C14.822 4.393 16.641 4 19 4a1 1 0 0 1 1 1c0 1.838-.261 3.63-1.054 5.248-.68 1.389-1.728 2.599-3.238 3.588.08.18.163.38.239.594.147.417.281.921.306 1.443.025.523-.056 1.135-.42 1.682l-.002.001c-.316.472-.821.83-1.266 1.09-.47.275-.997.511-1.475.701a19 19 0 0 1-1.783.605l-.031.01-.01.002h-.003L11 19l.263.965A1 1 0 0 1 10 19zm2 2.21q.172-.065.35-.135c.43-.17.855-.364 1.205-.57.375-.218.556-.389.613-.474.05-.077.1-.218.088-.476a3.2 3.2 0 0 0-.195-.872 6 6 0 0 0-.099-.258c-.647.322-1.339.606-1.962.848zm-2.827-7.581a5 5 0 0 0-.27-.104 3.2 3.2 0 0 0-.872-.194c-.258-.013-.4.036-.476.087-.085.057-.256.238-.475.613-.205.35-.399.775-.569 1.204q-.07.18-.134.351h1.939a24 24 0 0 1 .857-1.957" }),
  /* @__PURE__ */ e("path", { fill: "currentColor", d: "M3.673 17.44a2.668 2.668 0 1 1 2.886 2.887l-1.974.17a1 1 0 0 1-1.081-1.082zM6.332 17a.67.67 0 0 0-.666.611l-.068.791.79-.068A.669.669 0 0 0 6.333 17" })
] }), Zr = r(qr), Qr = (l, a) => /* @__PURE__ */ e("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: a, ...l, children: /* @__PURE__ */ e("path", { fill: "currentColor", d: "M16 20H8a4 4 0 0 1-4-4V8a4 4 0 0 1 4-4h5.757a4 4 0 0 1 2.829 1.172l2.242 2.242A4 4 0 0 1 20 10.243V16a4 4 0 0 1-4 4M6 8v8a2 2 0 0 0 1 1.732V16a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v1.732A2 2 0 0 0 18 16v-5.757a2 2 0 0 0-.586-1.415L16 7.414V10a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1V6a2 2 0 0 0-2 2m8-1.985A2 2 0 0 0 13.757 6H10v3h4zM15 16a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v2h6z" }) }), Kr = r(Qr), Xr = (l, a) => /* @__PURE__ */ e("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: a, ...l, children: /* @__PURE__ */ e("path", { fill: "currentColor", d: "M11 3a8 8 0 1 0 4.906 14.32l2.387 2.387a1 1 0 0 0 1.414-1.414l-2.387-2.387A8 8 0 0 0 11 3m-6 8a6 6 0 1 1 12 0 6 6 0 0 1-12 0" }) }), N1 = r(Xr), Yr = (l, a) => /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: a, ...l, children: [
  /* @__PURE__ */ e("path", { fill: "currentColor", d: "M9.455 4.187c1.175-1.882 3.915-1.882 5.09 0l.74 1.185a1 1 0 0 0 .813.47l1.396.048c2.217.076 3.587 2.449 2.545 4.407l-.656 1.233a1 1 0 0 0 0 .94l.656 1.233c1.042 1.958-.328 4.33-2.545 4.407l-1.396.049a1 1 0 0 0-.813.47l-.74 1.184c-1.175 1.882-3.915 1.882-5.09 0l-.74-1.185a1 1 0 0 0-.813-.47l-1.396-.048c-2.217-.076-3.587-2.449-2.545-4.407l.656-1.233a1 1 0 0 0 0-.94l-.656-1.233C2.92 8.339 4.29 5.967 6.506 5.89l1.396-.049a1 1 0 0 0 .813-.47zm3.393 1.06a1 1 0 0 0-1.696 0l-.74 1.184a3 3 0 0 1-2.44 1.41l-1.397.047a1 1 0 0 0-.848 1.47l.656 1.233a3 3 0 0 1 0 2.818l-.656 1.233a1 1 0 0 0 .848 1.47l1.396.048a3 3 0 0 1 2.44 1.409l.74 1.185a1 1 0 0 0 1.697 0l.74-1.185a3 3 0 0 1 2.44-1.41l1.397-.047a1 1 0 0 0 .848-1.47l-.656-1.233a3 3 0 0 1 0-2.818l.656-1.233a1 1 0 0 0-.848-1.47l-1.396-.048a3 3 0 0 1-2.44-1.409z" }),
  /* @__PURE__ */ e("path", { fill: "currentColor", d: "M12 10.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M8.5 12a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0" })
] }), Jr = r(Yr), eo = (l, a) => /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: a, ...l, children: [
  /* @__PURE__ */ e("path", { fill: "currentColor", d: "M4 8a4 4 0 0 1 4-4h2a1 1 0 1 1 0 2H8a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-2.5a1 1 0 1 1 2 0V16a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4z" }),
  /* @__PURE__ */ e("path", { fill: "currentColor", d: "M16.293 3.293a1 1 0 0 1 1.414 0l3 3a1 1 0 0 1 0 1.414l-3 3a1 1 0 0 1-1.414-1.414L17.586 8H15a2 2 0 0 0-2 2v1.5a1 1 0 1 1-2 0V10a4 4 0 0 1 4-4h2.586l-1.293-1.293a1 1 0 0 1 0-1.414" })
] }), ao = r(eo), lo = (l, a) => /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: a, ...l, children: [
  /* @__PURE__ */ e("path", { fill: "currentColor", d: "M7 7a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h3.5a1 1 0 1 1 0 2H7a4 4 0 0 1-4-4V9a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4 1 1 0 1 1-2 0 2 2 0 0 0-2-2z" }),
  /* @__PURE__ */ e("path", { fill: "currentColor", d: "M16.707 14.793a1 1 0 0 0-1.414 1.414l1 1a1 1 0 0 0 1.414 0l2-2a1 1 0 0 0-1.414-1.414L17 15.086z" }),
  /* @__PURE__ */ e("path", { fill: "currentColor", fillRule: "evenodd", d: "M12 15.5a5.5 5.5 0 1 1 11 0 5.5 5.5 0 0 1-11 0m5.5-3.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7", clipRule: "evenodd" }),
  /* @__PURE__ */ e("path", { fill: "currentColor", d: "M6 10a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1M7 13a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2z" })
] }), ro = r(lo), oo = (l, a) => /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: a, ...l, children: [
  /* @__PURE__ */ e("path", { fill: "currentColor", d: "M7 7a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h3.5a1 1 0 1 1 0 2H7a4 4 0 0 1-4-4V9a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4 1 1 0 1 1-2 0 2 2 0 0 0-2-2z" }),
  /* @__PURE__ */ e("path", { fill: "currentColor", d: "M12 15.5a5.5 5.5 0 1 1 11 0 5.5 5.5 0 0 1-11 0m5.5-3.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7" }),
  /* @__PURE__ */ e("path", { fill: "currentColor", d: "M17.5 13a1 1 0 0 1 1 1v.965l1.055.703a1 1 0 0 1-1.11 1.664l-1.129-.753a1.83 1.83 0 0 1-.816-1.525V14a1 1 0 0 1 1-1M6 10a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1M6 14a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1" })
] }), to = r(oo), no = (l, a) => /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: a, ...l, children: [
  /* @__PURE__ */ e("path", { fill: "currentColor", d: "M7 5a4 4 0 0 0-4 4v6a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4V9a4 4 0 0 0-4-4zm1 2v10H7a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2zm2 10V7h7a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2z" }),
  /* @__PURE__ */ e("path", { fill: "currentColor", d: "M13.881 9.381a.875.875 0 0 0 0 1.238l.507.506H12a.875.875 0 0 0 0 1.75h2.388l-.507.506a.875.875 0 1 0 1.238 1.238l2-2a.875.875 0 0 0 0-1.238l-2-2a.875.875 0 0 0-1.238 0" })
] }), io = r(no), so = (l, a) => /* @__PURE__ */ e("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: a, ...l, children: /* @__PURE__ */ e("path", { fill: "currentColor", d: "M16.793 6.207a1.12 1.12 0 0 1 0 1.586l-8.764 8.764-1.85.265.264-1.85 8.764-8.765a1.12 1.12 0 0 1 1.586 0m1.414-1.414a3.12 3.12 0 0 0-4.414 0l-9 9a1 1 0 0 0-.283.566l-.5 3.5a1 1 0 0 0 1.131 1.13l3.5-.5a1 1 0 0 0 .566-.282l9-9a3.12 3.12 0 0 0 0-4.414M12 19a1 1 0 0 1 1-1h5a1 1 0 1 1 0 2h-5a1 1 0 0 1-1-1" }) }), co = r(so), fo = (l, a) => /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: a, ...l, children: [
  /* @__PURE__ */ e("path", { fill: "currentColor", d: "M17.106 5.553a1 1 0 0 1 1.341-.447L18 6l.447-.894h.002l.001.001.004.002.01.005.029.015.09.05a5.556 5.556 0 0 1 1.125.864C20.315 6.652 21 7.64 21 9v6a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a4 4 0 0 1 4-4h2a1 1 0 0 1 0 2H7a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V9c0-.641-.316-1.152-.707-1.543a3.6 3.6 0 0 0-.741-.563l-.004-.002.002.001.002.001-.004-.002a1 1 0 0 1-.442-1.34" }),
  /* @__PURE__ */ e("path", { fill: "currentColor", d: "M15.537 3.156a1 1 0 0 1 .307 1.38l-3.5 5.5a1 1 0 0 1-1.688-1.073l3.5-5.5a1 1 0 0 1 1.38-.307M7 15a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1" })
] }), ho = r(fo), vo = (l, a) => /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: a, ...l, children: [
  /* @__PURE__ */ e("path", { fill: "currentColor", fillRule: "evenodd", d: "M12 6a6 6 0 1 0 0 12 6 6 0 0 0 0-12m-8 6a8 8 0 1 1 16 0 8 8 0 0 1-16 0", clipRule: "evenodd" }),
  /* @__PURE__ */ e("path", { fill: "currentColor", fillRule: "evenodd", d: "M10 9a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0v-1a1 1 0 0 1 1-1M14 9a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0v-1a1 1 0 0 1 1-1M8.72 13.375a1 1 0 0 1 1.405-.156 3 3 0 0 0 3.75 0 1 1 0 1 1 1.25 1.562 5 5 0 0 1-6.25 0 1 1 0 0 1-.156-1.406", clipRule: "evenodd" })
] }), uo = r(vo), go = (l, a) => /* @__PURE__ */ e("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: a, ...l, children: /* @__PURE__ */ e("path", { fill: "currentColor", d: "M10.039 2.956a4 4 0 0 1 3.922 0l5 2.812A4 4 0 0 1 21 9.255v5.49a4 4 0 0 1-2.039 3.487l-5 2.812a4 4 0 0 1-3.922 0l-5-2.812A4 4 0 0 1 3 14.746V9.255a4 4 0 0 1 2.039-3.487zm2.941 1.743a2 2 0 0 0-1.96 0L6.09 7.471 12 10.848l5.91-3.377zM5 9.255v5.49a2 2 0 0 0 1.02 1.744L11 19.29v-6.71L5.003 9.153zm10 8.91v-3.099a1 1 0 0 1 .486-.857l1.257-.755a.5.5 0 0 1 .757.43v2.875l.48-.27A2 2 0 0 0 19 14.746V9.255q0-.051-.003-.102L13 12.58v6.71z" }) }), wo = r(go), po = (l, a) => /* @__PURE__ */ e("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: a, ...l, children: /* @__PURE__ */ e("path", { fill: "currentColor", d: "M12 6a6 6 0 1 0 6 6 1 1 0 1 1 2 0 8 8 0 1 1-8-8 1 1 0 1 1 0 2" }) }), mo = r(po), xo = (l, a) => /* @__PURE__ */ e("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: a, ...l, children: /* @__PURE__ */ e("path", { fill: "currentColor", d: "M17.707 5.293a1 1 0 1 0-1.414 1.414l.293.293h-3.423A4 4 0 0 0 9.77 8.88l-.738 1.18a2 2 0 0 1-1.696.94H5a1 1 0 1 0 0 2h2.337a2 2 0 0 1 1.696.94l.738 1.18A4 4 0 0 0 13.163 17h3.423l-.293.293a1 1 0 0 0 1.414 1.414l2-2a1 1 0 0 0 0-1.414l-2-2a1 1 0 0 0-1.414 1.414l.293.293h-3.423a2 2 0 0 1-1.696-.94l-.738-1.18a4 4 0 0 0-.746-.88c.286-.252.538-.548.746-.88l.738-1.18A2 2 0 0 1 13.163 9h3.423l-.293.293a1 1 0 0 0 1.414 1.414l2-2a1 1 0 0 0 0-1.414z" }) }), Co = r(xo), Mo = (l, a) => /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: a, ...l, children: [
  /* @__PURE__ */ e("path", { fill: "currentColor", d: "M12 6a6 6 0 1 0 0 12 6 6 0 0 0 0-12m-8 6a8 8 0 1 1 16 0 8 8 0 0 1-16 0" }),
  /* @__PURE__ */ e("path", { fill: "currentColor", d: "M11.697 8.072a.68.68 0 0 1 .607 0 .7.7 0 0 1 .29.289c.04.068.081.154.118.233l.774 1.645 1.723.264c.082.013.175.027.252.046.076.02.234.065.36.204.138.153.199.358.174.557a.7.7 0 0 1-.168.365c-.05.062-.117.13-.177.19l-1.26 1.287.299 1.823c.014.086.03.18.036.26a.73.73 0 0 1-.07.395.69.69 0 0 1-.478.359.7.7 0 0 1-.414-.057c-.073-.032-.156-.078-.229-.118L12 14.968l-1.534.846c-.073.04-.156.086-.229.118a.7.7 0 0 1-.414.057.69.69 0 0 1-.478-.36.73.73 0 0 1-.07-.394c.006-.08.022-.174.036-.26l.298-1.823-1.26-1.287a3 3 0 0 1-.176-.19.7.7 0 0 1-.167-.365.7.7 0 0 1 .174-.557.7.7 0 0 1 .359-.204c.077-.02.17-.033.252-.046l1.723-.264.774-1.645c.037-.079.077-.165.117-.233a.7.7 0 0 1 .292-.29" })
] }), So = r(Mo), bo = (l, a) => /* @__PURE__ */ e("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: a, ...l, children: /* @__PURE__ */ e("path", { fill: "currentColor", d: "M11.393 4.144a1.36 1.36 0 0 1 1.214 0c.334.167.508.45.582.577.08.138.162.31.235.467l.014.028 1.535 3.262 3.414.524.031.004c.164.025.35.054.504.093.151.038.467.129.718.407.277.306.4.716.349 1.114a1.44 1.44 0 0 1-.336.73c-.1.124-.233.259-.352.38l-.022.023-2.497 2.551.59 3.615.006.03c.028.173.059.362.071.521.011.152.027.47-.138.789a1.37 1.37 0 0 1-.956.719 1.4 1.4 0 0 1-.83-.114 6 6 0 0 1-.457-.236l-.027-.015L12 17.936l-3.04 1.677-.028.015c-.147.081-.312.172-.458.236-.138.06-.452.187-.829.114a1.37 1.37 0 0 1-.956-.72 1.45 1.45 0 0 1-.138-.788c.012-.16.043-.348.071-.52l.005-.03.591-3.616-2.497-2.551-.022-.022a6 6 0 0 1-.352-.38c-.1-.122-.291-.374-.336-.731-.05-.398.072-.808.349-1.114.25-.278.566-.37.718-.407a6 6 0 0 1 .504-.093l.03-.004 3.415-.524 1.535-3.262.014-.028c.073-.157.154-.33.235-.467.074-.127.248-.41.582-.577" }) }), yo = r(bo), Bo = (l, a) => /* @__PURE__ */ e("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: a, ...l, children: /* @__PURE__ */ e("path", { fill: "currentColor", d: "M11.393 4.144a1.36 1.36 0 0 1 1.214 0c.334.167.508.45.582.577.08.138.162.31.235.467l.014.028 1.535 3.262 3.414.524.031.004c.164.025.35.054.504.093.151.038.467.129.718.407.277.306.4.716.349 1.114a1.44 1.44 0 0 1-.336.73c-.1.124-.233.259-.352.38l-.022.023-2.497 2.551.59 3.615.006.03c.028.173.059.362.071.521.011.152.027.47-.138.789a1.37 1.37 0 0 1-.956.719 1.4 1.4 0 0 1-.83-.114 6 6 0 0 1-.457-.236l-.027-.015L12 17.936l-3.04 1.677-.028.015c-.147.081-.312.172-.458.236-.138.06-.452.187-.829.114a1.37 1.37 0 0 1-.956-.72 1.45 1.45 0 0 1-.138-.788c.012-.16.043-.348.071-.52l.005-.03.591-3.616-2.497-2.551-.022-.022a6 6 0 0 1-.352-.38c-.1-.122-.291-.374-.336-.731-.05-.398.072-.808.349-1.114.25-.278.566-.37.718-.407a6 6 0 0 1 .504-.093l.03-.004 3.415-.524 1.535-3.262.014-.028c.073-.157.154-.33.235-.467.074-.127.248-.41.582-.577M12 6.858l-1.252 2.66-.008.018c-.033.073-.12.263-.26.422a1.4 1.4 0 0 1-.427.324c-.198.097-.412.127-.487.137l-.018.003-2.897.444 2.127 2.172.014.014c.056.056.203.204.303.392.083.155.135.324.155.496.024.207-.012.409-.026.49l-.003.02-.492 3.006 2.512-1.385.015-.01c.066-.037.255-.145.471-.189.18-.037.366-.037.546 0 .216.044.405.152.47.19l.016.009 2.512 1.385-.492-3.005-.003-.021c-.014-.081-.05-.283-.026-.49q.03-.26.155-.496c.1-.189.247-.336.303-.392l.014-.014 2.127-2.172-2.897-.444-.018-.003a1.373 1.373 0 0 1-.913-.46 1.7 1.7 0 0 1-.26-.423l-.01-.018z" }) }), Ro = r(Bo), _o = (l, a) => /* @__PURE__ */ e("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: a, ...l, children: /* @__PURE__ */ e("path", { fill: "currentColor", d: "M4 8a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4z" }) }), Fo = r(_o), zo = (l, a) => /* @__PURE__ */ e("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: a, ...l, children: /* @__PURE__ */ e("path", { fill: "currentColor", d: "M11.606 5a4 4 0 0 0-3.465 6H5a1 1 0 1 0 0 2h7.394a2 2 0 0 1 0 4h-1.313c-.514 0-.97-.329-1.132-.816a1 1 0 0 0-1.898.632A3.19 3.19 0 0 0 11.081 19h1.313a4 4 0 0 0 3.464-6H19a1 1 0 1 0 0-2h-7.395a2 2 0 1 1 0-4h1.314c.514 0 .97.329 1.132.816a1 1 0 0 0 1.898-.632A3.19 3.19 0 0 0 12.919 5z" }) }), Ao = r(zo), No = (l, a) => /* @__PURE__ */ e("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: a, ...l, children: /* @__PURE__ */ e("path", { fill: "currentColor", d: "M8 4a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4V8a4 4 0 0 0-4-4zM6 8h2.5v2H6zm4.5 0h3v2h-3zm5 0H18v2h-2.5zm0 4H18v2h-2.5zm-5 0h3v2h-3zM6 12h2.5v2H6zm9.5 4H18a2 2 0 0 1-2 2h-.5zm-2 0v2h-3v-2zm-5 0v2H8a2 2 0 0 1-2-2z" }) }), Ho = r(No), ko = (l, a) => /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: a, ...l, children: [
  /* @__PURE__ */ e("path", { fill: "currentColor", d: "M18.16 2.013a1 1 0 0 1 .734.54l.851 1.702 1.702.85a1 1 0 0 1 .26 1.602l-3 3A1 1 0 0 1 18 10h-2.586l-2.707 2.707a1 1 0 0 1-1.414-1.414L14 8.586V6a1 1 0 0 1 .293-.707l3-3a1 1 0 0 1 .867-.28M16 8h1.586l1.726-1.726-.76-.38a1 1 0 0 1-.446-.447l-.38-.759L16 6.414z" }),
  /* @__PURE__ */ e("path", { fill: "currentColor", d: "M12 6a6 6 0 1 0 6 6 1 1 0 1 1 2 0 8 8 0 1 1-8-8 1 1 0 1 1 0 2" }),
  /* @__PURE__ */ e("path", { fill: "currentColor", d: "M12 9.5a2.5 2.5 0 1 0 2.5 2.5 1 1 0 1 1 2 0A4.5 4.5 0 1 1 12 7.5a1 1 0 1 1 0 2" })
] }), $o = r(ko), Vo = (l, a) => /* @__PURE__ */ e("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: a, ...l, children: /* @__PURE__ */ e("path", { fill: "currentColor", d: "M3 6a1 1 0 0 1 1-1h10a1 1 0 1 1 0 2h-4v11a1 1 0 1 1-2 0V7H4a1 1 0 0 1-1-1m9 6a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2h-2v5a1 1 0 1 1-2 0v-5h-2a1 1 0 0 1-1-1" }) }), Lo = r(Vo), Io = (l, a) => /* @__PURE__ */ e("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: a, ...l, children: /* @__PURE__ */ e("path", { fill: "currentColor", d: "M4 10.5a3 3 0 0 1 6 0v5a1 1 0 1 1-2 0v-2H6v2a1 1 0 1 1-2 0zm2 1h2v-1a1 1 0 0 0-2 0zM14 8.5a1 1 0 0 1 1-1h4a1 1 0 0 1 .868 1.496L16.723 14.5H19a1 1 0 1 1 0 2h-4a1 1 0 0 1-.868-1.496L17.277 9.5H15a1 1 0 0 1-1-1m-3 4a1 1 0 0 1 1-1h1a1 1 0 1 1 0 2h-1a1 1 0 0 1-1-1" }) }), Oo = r(Io), To = (l, a) => /* @__PURE__ */ e("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: a, ...l, children: /* @__PURE__ */ e("path", { fill: "currentColor", d: "M13.712 18.013A2.315 2.315 0 0 1 9.5 16.685V15H6.062a3 3 0 0 1-2.91-3.728l.81-3.242A4 4 0 0 1 7.842 5H18a3 3 0 0 1 3 3v3a3 3 0 0 1-3 3h-1.48zM17 12h1a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1h-1zm-2-5H7.842a2 2 0 0 0-1.94 1.515l-.81 3.242A1 1 0 0 0 6.061 13H10.5a1 1 0 0 1 1 1v2.685a.315.315 0 0 0 .573.18L15 12.686z" }) }), Go = r(To), Do = (l, a) => /* @__PURE__ */ e("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: a, ...l, children: /* @__PURE__ */ e("path", { fill: "currentColor", d: "M10.288 5.988A2.315 2.315 0 0 1 14.5 7.315V9h3.438a3 3 0 0 1 2.91 3.728l-.81 3.242a4 4 0 0 1-3.88 3.03H6a3 3 0 0 1-3-3v-3a3 3 0 0 1 3-3h1.48zM7 12H6a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h1zm2 5h7.158a2 2 0 0 0 1.94-1.515l.81-3.242a1 1 0 0 0-.97-1.243H13.5a1 1 0 0 1-1-1V7.315a.315.315 0 0 0-.573-.18L9 11.314z" }) }), Po = r(Do), Uo = (l, a) => /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: a, ...l, children: [
  /* @__PURE__ */ e("g", { clipPath: "url(#thunder_svg__a)", children: /* @__PURE__ */ e("path", { fill: "currentColor", d: "M14 5a1 1 0 0 0-1.817-.577l-6 8.5A1 1 0 0 0 7 14.5h3V19a1 1 0 0 0 1.78.625l6-7.5A1 1 0 0 0 17 10.5h-3zm-3 7.5H8.93L12 8.15v3.35a1 1 0 0 0 1 1h1.92L12 16.15V13.5a1 1 0 0 0-1-1" }) }),
  /* @__PURE__ */ e("defs", { children: /* @__PURE__ */ e("clipPath", { id: "thunder_svg__a", children: /* @__PURE__ */ e("path", { fill: "#fff", d: "M0 0h24v24H0z" }) }) })
] }), jo = r(Uo), Eo = (l, a) => /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: a, ...l, children: [
  /* @__PURE__ */ e("path", { fill: "currentColor", d: "M13.328 20.397a2 2 0 0 1-2.68-.006l-1.167-1.058-1.18 1.011C7.005 21.456 5 20.534 5 18.826V7a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v11.826c0 1.709-2.004 2.63-3.302 1.518l-1.183-1.014zm-1.336-1.488 1.187-1.066a2 2 0 0 1 2.638-.031L17 18.826V7a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v11.826l1.18-1.012a2 2 0 0 1 2.645.037z" }),
  /* @__PURE__ */ e("path", { fill: "currentColor", d: "M8 8a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2H9a1 1 0 0 1-1-1M8 12a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2H9a1 1 0 0 1-1-1" })
] }), Wo = r(Eo), qo = (l, a) => /* @__PURE__ */ e("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: a, ...l, children: /* @__PURE__ */ e("path", { fill: "currentColor", d: "M8.968 3.125c-1.112-.007-2.32.419-2.836 1.376-.21.39-.141.839.105 1.146l.847 1.06C4.458 7.308 3.037 9.136 3 10.9a1.044 1.044 0 0 0 1.045 1.065h1.124a4.77 4.77 0 0 0-.138 3.29c.195.613.891.902 1.462.616l2.884-1.442L9.08 18H8a1 1 0 1 0 0 2h8a1 1 0 0 0 0-2h-1.08l-.297-3.57 2.884 1.441a1.045 1.045 0 0 0 1.462-.617 4.77 4.77 0 0 0-.138-3.289h1.124c.562 0 1.057-.457 1.045-1.065-.037-1.763-1.458-3.59-4.084-4.194l.847-1.059c.246-.307.314-.756.105-1.146-.515-.957-1.724-1.383-2.836-1.376-.966.007-2.038.322-3.032 1.057-.994-.735-2.066-1.05-3.032-1.057m3.56 10.257L12.913 18h-1.826l.385-4.618.528-.264zm-.08-2.276a1 1 0 0 0-.895 0L6.825 13.47c.077-.642.376-1.25.837-1.75.601-.652.167-1.755-.768-1.755H5.36c.493-.712 1.556-1.444 3.555-1.465.812-.008 1.389-.971.807-1.698l-1.296-1.62c.152-.036.33-.058.528-.057.666.005 1.53.273 2.339 1.082a.997.997 0 0 0 1.414 0c.81-.809 1.673-1.077 2.339-1.082q.3 0 .528.057l-1.296 1.62c-.582.727-.005 1.69.807 1.698 2 .021 3.062.753 3.555 1.465h-1.534c-.935 0-1.37 1.103-.768 1.755.461.5.76 1.108.837 1.75z" }) }), Zo = r(qo), Qo = (l, a) => /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: a, ...l, children: [
  /* @__PURE__ */ e("path", { fill: "currentColor", d: "M12 9.33a1 1 0 0 1 1 1v2.078l2.486 1.381a1 1 0 0 1-.972 1.749L11 13.585V10.33a1 1 0 0 1 1-1" }),
  /* @__PURE__ */ e("path", { fill: "currentColor", d: "M10 2a1 1 0 1 0 0 2h1v1.062A8.001 8.001 0 0 0 12 21a8 8 0 0 0 1-15.938V4h1a1 1 0 1 0 0-2zM6 13a6 6 0 1 1 12 0 6 6 0 0 1-12 0M18.383 5.293a1 1 0 0 1 1.414 0l1.414 1.414a1 1 0 0 1-1.414 1.414l-1.414-1.414a1 1 0 0 1 0-1.414" }),
  /* @__PURE__ */ e("path", { fill: "currentColor", d: "M5.617 5.293a1 1 0 0 0-1.414 0L2.789 6.707a1 1 0 0 0 1.414 1.414l1.414-1.414a1 1 0 0 0 0-1.414" })
] }), Ko = r(Qo), Xo = (l, a) => /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: a, ...l, children: [
  /* @__PURE__ */ e("path", { fill: "currentColor", d: "M12 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4" }),
  /* @__PURE__ */ e("path", { fill: "currentColor", d: "M9 2a1 1 0 0 1 1 1v1h4V3a1 1 0 1 1 2 0v1a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4V8a4 4 0 0 1 4-4V3a1 1 0 0 1 1-1M8 6a2 2 0 0 0-2 2v1h12V8a2 2 0 0 0-2-2v1a1 1 0 1 1-2 0V6h-4v1a1 1 0 0 1-2 0zm10 5H6v5a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2z" })
] }), Yo = r(Xo), Jo = (l, a) => /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: a, ...l, children: [
  /* @__PURE__ */ e("path", { fill: "currentColor", fillRule: "evenodd", d: "M12 5a7 7 0 0 0-6.126 3.61 1 1 0 0 1-1.748-.971A9 9 0 0 1 12 3c1.58 0 3.068.408 4.361 1.126a1 1 0 1 1-.97 1.748A6.96 6.96 0 0 0 12 5m6.429 2.134a1 1 0 0 1 1.366.365A8.96 8.96 0 0 1 21 12v4a1 1 0 1 1-2 0v-4c0-1.277-.34-2.47-.936-3.5a1 1 0 0 1 .365-1.366M4 11a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0v-4a1 1 0 0 1 1-1", clipRule: "evenodd" }),
  /* @__PURE__ */ e("path", { fill: "currentColor", fillRule: "evenodd", d: "M7 12a5 5 0 0 1 9.842-1.25 1 1 0 1 1-1.936.5A2.999 2.999 0 0 0 12 9a3 3 0 0 0-3.001 3v1a1 1 0 1 1-2 0zm9 2a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0v-4a1 1 0 0 1 1-1m-8 2a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1", clipRule: "evenodd" }),
  /* @__PURE__ */ e("path", { fill: "currentColor", fillRule: "evenodd", d: "M12 11a1 1 0 0 1 1 1v8a1 1 0 1 1-2 0v-8a1 1 0 0 1 1-1", clipRule: "evenodd" })
] }), et = r(Jo), at = (l, a) => /* @__PURE__ */ e("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: a, ...l, children: /* @__PURE__ */ e("path", { fill: "currentColor", d: "M12 6.316c-1.408-.848-2.795-1.318-4.188-1.318-1.592 0-3.055.616-4.437 1.721A1 1 0 0 0 3 7.5v9.42c0 .86.522 1.494 1.123 1.817.59.316 1.348.393 2.035.105 1.524-.64 3.167-.427 5.286.99a1 1 0 0 0 1.112 0c2.119-1.417 3.762-1.63 5.286-.99a2.39 2.39 0 0 0 2.035-.105c.601-.323 1.123-.957 1.123-1.818V7.5a1 1 0 0 0-.375-.78c-1.382-1.106-2.845-1.721-4.437-1.722-1.393 0-2.78.47-4.188 1.318m-1 1.732v9.23c-1.913-.906-3.77-1.055-5.616-.28a.39.39 0 0 1-.315-.023A.2.2 0 0 1 5 16.92V7.997c.977-.693 1.896-.998 2.813-.999.936 0 1.979.317 3.187 1.05m2 9.23v-9.23c1.208-.733 2.25-1.05 3.187-1.05.917 0 1.836.306 2.813 1v8.921c0 .004.001-.001 0 0a.2.2 0 0 1-.069.056.39.39 0 0 1-.315.023c-1.846-.775-3.703-.626-5.616.28" }) }), lt = r(at), rt = (l, a) => /* @__PURE__ */ e("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: a, ...l, children: /* @__PURE__ */ e("path", { fill: "currentColor", d: "M8 5a1 1 0 0 1 1 1v5a3 3 0 1 0 6 0V6a1 1 0 1 1 2 0v5a5 5 0 0 1-10 0V6a1 1 0 0 1 1-1M6 18a1 1 0 0 1 1-1h10a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1" }) }), ot = r(rt), tt = (l, a) => /* @__PURE__ */ e("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: a, ...l, children: /* @__PURE__ */ e("path", { fill: "currentColor", d: "M5.73 6.564a.6.6 0 0 1 .54 0 .6.6 0 0 1 .255.248c.028.048.055.106.075.149l.395.838.873.134c.044.007.108.016.162.03a.6.6 0 0 1 .312.18.62.62 0 0 1 .153.49.63.63 0 0 1-.142.317c-.036.043-.08.089-.113.122l-.645.659.153.936c.008.047.018.11.023.165a.607.607 0 0 1-.485.657.6.6 0 0 1-.364-.046 2 2 0 0 1-.147-.075L6 10.941l-.775.427c-.04.022-.095.053-.147.075a.6.6 0 0 1-.363.047.607.607 0 0 1-.486-.658c.005-.055.015-.118.023-.165l.153-.936-.645-.66a2 2 0 0 1-.113-.121.63.63 0 0 1-.142-.318.62.62 0 0 1 .153-.488.6.6 0 0 1 .312-.18c.054-.015.118-.024.162-.03l.873-.135.395-.838c.02-.043.047-.1.075-.149a.6.6 0 0 1 .256-.248M17.73 6.564a.6.6 0 0 1 .54 0 .6.6 0 0 1 .255.248c.028.048.055.106.075.149l.395.838.873.134c.044.007.108.016.162.03a.6.6 0 0 1 .312.18.62.62 0 0 1 .153.49.63.63 0 0 1-.142.317c-.036.043-.08.089-.113.122l-.645.659.153.936c.008.047.018.11.022.165a.607.607 0 0 1-.485.657.6.6 0 0 1-.363-.046 2 2 0 0 1-.147-.075L18 10.941l-.775.427c-.04.022-.096.053-.147.075a.6.6 0 0 1-.363.047.606.606 0 0 1-.486-.658c.005-.055.015-.118.023-.165l.153-.936-.645-.66a2 2 0 0 1-.113-.121.63.63 0 0 1-.142-.318.62.62 0 0 1 .153-.488.6.6 0 0 1 .312-.18c.054-.015.118-.024.162-.03l.873-.135.395-.838c.02-.043.047-.1.075-.149a.6.6 0 0 1 .256-.248M11.73 3.564a.6.6 0 0 1 .54 0 .6.6 0 0 1 .255.248c.028.048.055.106.075.149l.395.838.873.134c.044.007.107.016.162.03a.6.6 0 0 1 .312.18.62.62 0 0 1 .153.49.63.63 0 0 1-.142.317c-.036.043-.08.089-.113.122l-.645.659.153.936c.008.047.018.11.023.165a.607.607 0 0 1-.485.657.6.6 0 0 1-.364-.046 2 2 0 0 1-.147-.075L12 7.941l-.775.427c-.04.022-.095.053-.147.075a.6.6 0 0 1-.363.047.606.606 0 0 1-.486-.658c.005-.055.015-.118.023-.165l.153-.936-.645-.66a2 2 0 0 1-.113-.121.63.63 0 0 1-.142-.318.62.62 0 0 1 .153-.488.6.6 0 0 1 .312-.18c.054-.015.118-.024.162-.03l.873-.135.395-.838c.02-.043.047-.1.075-.149a.6.6 0 0 1 .256-.248M12 10a1 1 0 0 1 1 1v8a1 1 0 1 1-2 0v-8a1 1 0 0 1 1-1M5.051 13.684a1 1 0 0 1 1.265-.633C7.695 13.511 10 15.54 10 19a1 1 0 1 1-2 0c0-2.539-1.695-3.844-2.316-4.051a1 1 0 0 1-.633-1.265M18.949 13.684a1 1 0 0 0-1.265-.633C16.305 13.511 14 15.54 14 19a1 1 0 1 0 2 0c0-2.539 1.695-3.844 2.316-4.051a1 1 0 0 0 .633-1.265" }) }), nt = r(tt), it = (l, a) => /* @__PURE__ */ e("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: a, ...l, children: /* @__PURE__ */ e("path", { fill: "currentColor", d: "M11.293 4.293a1 1 0 0 1 1.414 0l3 3a1 1 0 0 1-1.414 1.414L13 7.414V14a1 1 0 1 1-2 0V7.414L9.707 8.707a1 1 0 0 1-1.414-1.414zM5 14a1 1 0 0 1 1 1v1a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-1a1 1 0 1 1 2 0v1a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4v-1a1 1 0 0 1 1-1" }) }), st = r(it), ct = (l, a) => /* @__PURE__ */ e("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: a, ...l, children: /* @__PURE__ */ e("path", { fill: "currentColor", d: "M4 8a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4zm4-2a2 2 0 0 0-2 2v8a2 2 0 0 0 1.143 1.808 5.01 5.01 0 0 1 2.896-3.409 3.5 3.5 0 1 1 3.922 0 5.01 5.01 0 0 1 2.896 3.409A2 2 0 0 0 18 16V8a2 2 0 0 0-2-2zm6.83 12a3.001 3.001 0 0 0-5.66 0zM12 10a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3" }) }), dt = r(ct), ft = (l, a) => /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: a, ...l, children: [
  /* @__PURE__ */ e("path", { fill: "currentColor", d: "M20 8a1 1 0 0 1 1 1v1.444c0 1.643 0 2.937-.085 3.978-.087 1.063-.267 1.95-.678 2.756a7 7 0 0 1-3.06 3.059c-.805.41-1.692.591-2.755.678-1.041.085-2.335.085-3.978.085H9a1 1 0 1 1 0-2h1.4c1.697 0 2.909 0 3.86-.078.938-.077 1.533-.224 2.01-.467a5 5 0 0 0 2.185-2.185c.243-.477.39-1.072.467-2.01.077-.951.078-2.163.078-3.86V9a1 1 0 0 1 1-1" }),
  /* @__PURE__ */ e("path", { fill: "currentColor", d: "M4 8a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v6a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4zm4-2a2 2 0 0 0-2 2v6c0 .646.307 1.221.782 1.587.428-1.018 1.303-1.802 2.363-2.229a3 3 0 1 1 3.71 0c1.06.427 1.935 1.211 2.363 2.229.475-.366.782-.94.782-1.587V8a2 2 0 0 0-2-2zm5.155 10c-.41-.567-1.165-1-2.155-1s-1.746.433-2.155 1zM11 10a1 1 0 1 0 0 2 1 1 0 0 0 0-2" })
] }), ht = r(ft), vt = (l, a) => /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: a, ...l, children: [
  /* @__PURE__ */ e("path", { fill: "currentColor", d: "M11 3a8 8 0 1 0 4.906 14.32l2.387 2.387a1 1 0 0 0 1.414-1.414l-2.387-2.387A8 8 0 0 0 11 3m-6 8a6 6 0 1 1 12 0 6 6 0 0 1-12 0" }),
  /* @__PURE__ */ e("path", { fill: "currentColor", d: "M14.1 8.2a1 1 0 0 1 .2 1.4l-3 4a1 1 0 0 1-1.507.107l-2-2a1 1 0 1 1 1.414-1.414l1.185 1.185L12.7 8.4a1 1 0 0 1 1.4-.2" })
] }), ut = r(vt), gt = (l, a) => /* @__PURE__ */ e("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: a, ...l, children: /* @__PURE__ */ e("path", { fill: "currentColor", d: "M10.721 3.568a1.75 1.75 0 0 1 2.557 0l.992 1.06c.345.37.832.572 1.337.555l1.451-.05a1.75 1.75 0 0 1 1.808 1.809l-.049 1.45a1.75 1.75 0 0 0 .554 1.338l1.06.992a1.75 1.75 0 0 1 0 2.557l-1.06.99a1.75 1.75 0 0 0-.554 1.338l.05 1.451a1.75 1.75 0 0 1-1.809 1.808l-1.45-.049a1.75 1.75 0 0 0-1.338.555l-.992 1.06a1.75 1.75 0 0 1-2.557 0l-.991-1.06a1.75 1.75 0 0 0-1.338-.555l-1.45.05a1.75 1.75 0 0 1-1.809-1.809l.05-1.45a1.75 1.75 0 0 0-.555-1.338l-1.06-.991a1.75 1.75 0 0 1 0-2.557l1.06-.992a1.75 1.75 0 0 0 .554-1.337l-.049-1.451a1.75 1.75 0 0 1 1.808-1.808l1.451.049a1.75 1.75 0 0 0 1.338-.554zM15.3 10.6a1 1 0 0 0-1.6-1.2l-2.308 3.078-1.185-1.185a1 1 0 1 0-1.414 1.414l2 2A1 1 0 0 0 12.3 14.6z" }) }), wt = r(gt), pt = (l, a) => /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: a, ...l, children: [
  /* @__PURE__ */ e("path", { fill: "currentColor", d: "M3 9a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v6a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4zm4-2a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z" }),
  /* @__PURE__ */ e("path", { fill: "currentColor", d: "M9.507 8.13a1 1 0 0 1 1.008.013l5 3a1 1 0 0 1 0 1.714l-5 3A1 1 0 0 1 9 15V9a1 1 0 0 1 .507-.87M11 10.766v2.468L13.056 12z" })
] }), mt = r(pt), xt = (l, a) => /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: a, ...l, children: [
  /* @__PURE__ */ e("path", { fill: "currentColor", d: "M12 5a7 7 0 0 0-6.297 10.062l.16.328-.824 3.278 3.237-.727.333.185A7 7 0 1 0 12 5m-9 7a9 9 0 1 1 4.984 8.056l-2.507.564a2 2 0 0 1-2.378-2.44l.65-2.582A9 9 0 0 1 3 12" }),
  /* @__PURE__ */ e("path", { fill: "currentColor", d: "M8.941 8h1.544a.5.5 0 0 1 .464.314l.658 1.644a.5.5 0 0 1-.207.614l-.812.487a5.18 5.18 0 0 0 2.353 2.353l.487-.812a.5.5 0 0 1 .614-.207l1.644.658a.5.5 0 0 1 .314.464v1.544a.94.94 0 0 1-.941.941A7.53 7.53 0 0 1 8 8.941.94.94 0 0 1 8.941 8" })
] }), Ct = r(xt), Mt = (l, a) => /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: a, ...l, children: [
  /* @__PURE__ */ e("path", { fill: "currentColor", d: "M11 3a8 8 0 1 0 4.906 14.32l2.387 2.387a1 1 0 0 0 1.414-1.414l-2.387-2.387A8 8 0 0 0 11 3m-6 8a6 6 0 1 1 12 0 6 6 0 0 1-12 0" }),
  /* @__PURE__ */ e("path", { fill: "currentColor", d: "M10 14a1 1 0 1 0 2 0v-2h2a1 1 0 1 0 0-2h-2V8a1 1 0 1 0-2 0v2H8a1 1 0 1 0 0 2h2z" })
] }), St = r(Mt), bt = (l, a) => /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: a, ...l, children: [
  /* @__PURE__ */ e("path", { fill: "currentColor", d: "M11 3a8 8 0 1 0 4.906 14.32l2.387 2.387a1 1 0 0 0 1.414-1.414l-2.387-2.387A8 8 0 0 0 11 3m-6 8a6 6 0 1 1 12 0 6 6 0 0 1-12 0" }),
  /* @__PURE__ */ e("path", { fill: "currentColor", d: "M7 11a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1" })
] }), yt = r(bt), U = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AcademicCap: H2,
  Add: $2,
  Ai: L2,
  Alert: j2,
  AlertCircle: G2,
  AlertCircleLine: O2,
  AlertSign: P2,
  AlignTextCenter: W2,
  AlignTextJustify: Z2,
  AlignTextLeft: K2,
  AlignTextRight: Y2,
  Appearance: ee,
  Archive: oe,
  ArchiveOpen: le,
  AreaGraph: m1,
  ArrowLeft: ie,
  ArrowRight: ce,
  Balance: fe,
  Bell: ve,
  Bold: ge,
  Briefcase: x1,
  Bucket: me,
  BusinessTrip: Ce,
  Calculator: Se,
  Calendar: ye,
  CameraPlus: Re,
  CardPin: Fe,
  ChartLine: Ae,
  Check: Ie,
  CheckCircle: C1,
  CheckCircleLine: He,
  CheckMulti: Ve,
  ChevronDown: $,
  ChevronLeft: Ge,
  ChevronRight: M1,
  ChevronUp: S1,
  Circle: b1,
  CircleLine: je,
  Clock: qe,
  Cloud: Qe,
  Cmd: y1,
  Code: Ye,
  Coffee: ea,
  Collapse: la,
  Command: oa,
  Comment: na,
  Complaint: sa,
  Contactless: da,
  Contract: ha,
  CornerResize: ua,
  CreditCard: wa,
  Cross: Ca,
  CrossCircle: ma,
  Crown: Sa,
  Dashboard: ya,
  Delete: Ra,
  Deny: Fa,
  Desktop: Aa,
  DollarBill: Ha,
  Download: $a,
  DragAndDrop: La,
  Duplicate: Oa,
  EditFileFilled: Ga,
  Ellipsis: B1,
  EllipsisHorizontal: Pa,
  Engagement: Ea,
  Envelope: Qa,
  EnvelopeOpen: qa,
  Equals: Xa,
  Expand: Ja,
  Expenses: a4,
  ExternalLink: n0,
  EyeInvisible: R1,
  EyeVisible: _1,
  FaceId: t4,
  Feed: i4,
  Feedback: c4,
  File: v4,
  FileFilled: f4,
  Files: g4,
  Filter: p4,
  Flag: x4,
  Folder: M4,
  Globe: b4,
  Group: B4,
  H1: _4,
  H2: z4,
  H3: N4,
  Heart: k4,
  HideSidebar: V4,
  History: I4,
  Home: F1,
  Image: G4,
  InProgressTask: p1,
  Inbox: P4,
  Info: q4,
  InfoCircle: E4,
  InfoCircleLine: z1,
  InputField: Q4,
  Italic: X4,
  Laptop: J4,
  LayersFront: al,
  Lightbulb: rl,
  Link: il,
  LinkRemove: tl,
  List: cl,
  LockLocked: fl,
  LockUnlocked: vl,
  LogoAvatar: gl,
  LogoEruditai: pl,
  LogoMeetingdoctors: xl,
  LogoTravelperk: Ml,
  Manager: bl,
  Marketplace: Bl,
  Media: _l,
  Megaphone: zl,
  Mobile: kl,
  MobileOptions: Nl,
  ModuleCalendar: $0,
  ModuleClockIn: L0,
  ModuleDocuments: O0,
  ModuleEngagement: G0,
  ModuleFinance: P0,
  ModuleGoals: j0,
  ModuleHome: W0,
  ModuleInbox: Z0,
  ModuleKudos: K0,
  ModuleMyDocuments: Y0,
  ModuleOrganization: e2,
  ModulePayroll: l2,
  ModulePerformance: o2,
  ModuleProfile: n2,
  ModuleProjects: s2,
  ModuleRecruitment: d2,
  ModuleReports: h2,
  ModuleShifts: u2,
  ModuleSoftware: w2,
  ModuleSpaces: m2,
  ModuleSpending: C2,
  ModuleTasks: S2,
  ModuleTimeOff: y2,
  ModuleTimeTracking: R2,
  ModuleTrainings: F2,
  ModuleWorkflows: A2,
  MoneyBag: Vl,
  MoreOptions: Il,
  Move: Dl,
  MoveShifts: Tl,
  MyDocuments: Ul,
  Numbers: El,
  Office: A1,
  OlList: Zl,
  Paperclip: Kl,
  Pause: er,
  PauseFilled: Yl,
  Payroll: lr,
  Pencil: or,
  Performance: nr,
  Person: sr,
  Phone: dr,
  Pin: ur,
  PinSmall: hr,
  PixBrazil: wr,
  Play: Cr,
  PlayFilled: mr,
  Printer: Sr,
  Projects: yr,
  PushPin: Rr,
  Question: Hr,
  QuestionCircle: Ar,
  QuestionCircleLine: Fr,
  Quote: $r,
  Reaction: Lr,
  Recruiting: Or,
  Refresh: Gr,
  Remove: Pr,
  Replace: jr,
  Reports: Wr,
  Rocket: Zr,
  Save: Kr,
  Search: N1,
  Settings: Jr,
  Share: ao,
  ShiftCheck: ro,
  ShiftManagement: to,
  ShowSidebar: io,
  Sign: co,
  Signature: ho,
  Social: uo,
  SpaceControl: wo,
  Spinner: mo,
  Split: Co,
  Star: Ro,
  StarCircleLine: So,
  StarFilled: yo,
  Stop: Fo,
  Strikethrough: Ao,
  Table: Ho,
  Target: $o,
  Text: Oo,
  TextSize: Lo,
  ThumbsDown: Go,
  ThumbsUp: Po,
  Thunder: jo,
  Ticket: Wo,
  TimeOff: Zo,
  Timer: Ko,
  Today: Yo,
  TouchId: et,
  Trainings: lt,
  Underline: ot,
  UpgradePlan: nt,
  Upload: st,
  User: dt,
  Users: ht,
  Validation: ut,
  Verified: wt,
  Video: mt,
  WhatsappChat: Ct,
  ZoomIn: St,
  ZoomOut: yt
}, Symbol.toStringTag, { value: "Module" })), Bt = /^(-?)([0-9]+)?(?:([\.,])([0-9]+)?)?$/;
function t1(l, { maxDecimals: a }) {
  if (!l || l === "-")
    return {
      formattedValue: l ?? "",
      value: null
    };
  const o = l.match(Bt);
  if (!o) return null;
  let [n, i, s, d, h] = o;
  a && ((h == null ? void 0 : h.length) ?? 0) > a ? h = h == null ? void 0 : h.slice(0, a) : a === 0 && (h = ""), s = (s == null ? void 0 : s.replace(/^0+(\d)/, (x, y) => y)) ?? "";
  const f = `${i}${s}${a !== 0 ? `${d ?? ""}${h ?? ""}` : ""}`, u = parseFloat(f.replace(",", "."));
  return {
    formattedValue: f,
    value: Number.isNaN(u) ? null : u
  };
}
const L = (l, a, o) => new Intl.NumberFormat(a, {
  maximumFractionDigits: o,
  useGrouping: !1
}).format(l), Rt = r(
  function({ locale: a, value: o, maxDecimals: n, step: i, min: s, max: d, onChange: h, ...f }, u) {
    const [x, y] = k(
      () => o != null ? L(o, a, n) : ""
    ), S = (m) => {
      const N = t1(m, { maxDecimals: n });
      if (!N) return;
      const { formattedValue: r1, value: t0 } = N;
      y(r1), h == null || h(t0);
    }, V = (m) => () => {
      if (!i) return;
      if (o == null)
        return S(L(i ?? s ?? 0, a, n));
      const N = m === "increase" ? o + i : o - i;
      s != null && N < s || d != null && N > d || S(L(N, a, n));
    }, j = () => i ? /* @__PURE__ */ t(
      "div",
      {
        className: "absolute right-2 top-0.5 hidden h-full flex-col group-focus-within:flex group-hover:flex",
        onClick: (m) => m.preventDefault(),
        children: [
          /* @__PURE__ */ e(
            "div",
            {
              onClick: V("increase"),
              className: "h-4 cursor-pointer",
              role: "button",
              children: /* @__PURE__ */ e(B, { size: "sm", icon: S1 })
            }
          ),
          /* @__PURE__ */ e(
            "div",
            {
              onClick: V("decrease"),
              className: "h-4 cursor-pointer",
              role: "button",
              children: /* @__PURE__ */ e(B, { size: "sm", icon: $ })
            }
          )
        ]
      }
    ) : null;
    return v1(() => {
      const m = t1(x, { maxDecimals: n });
      o === void 0 || o == (m == null ? void 0 : m.value) || y(o ? L(o, a, n) : "");
    }, [x, n, o, a]), /* @__PURE__ */ t("div", { className: "group relative", children: [
      /* @__PURE__ */ e(
        Q,
        {
          type: "text",
          ref: u,
          value: x,
          inputMode: "decimal",
          className: "group-focus-within:pr-5 group-hover:pr-5",
          onChange: (m) => S(m.target.value),
          ...f
        }
      ),
      /* @__PURE__ */ e(j, {})
    ] });
  }
);
function _t({
  className: l,
  classNames: a,
  showOutsideDays: o = !0,
  ...n
}) {
  return /* @__PURE__ */ e(
    _0,
    {
      showOutsideDays: o,
      className: c("p-3", l),
      classNames: {
        months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
        month: "space-y-4",
        caption: "flex justify-center pt-1 relative items-center",
        caption_label: "text-sm font-medium",
        nav: "space-x-1 flex items-center",
        nav_button: c(
          o1({ variant: "outline" }),
          "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100"
        ),
        nav_button_previous: "absolute left-1",
        nav_button_next: "absolute right-1",
        table: "w-full border-collapse space-y-1",
        head_row: "flex",
        head_cell: "text-f1-foreground-secondary rounded-xs w-9 font-normal text-[0.8rem]",
        row: "flex w-full mt-2",
        cell: "rounded-full h-9 w-9 text-center text-sm p-0 relative [&:has([aria-selected].day-outside)]:bg-f1-background-selected focus-within:relative focus-within:z-20 [&:has([aria-selected].day-range-middle)]:rounded-none first:[&:has([aria-selected].day-range-middle)]:rounded-l-lg last:[&:has([aria-selected].day-range-middle)]:rounded-r-lg [&:has([aria-selected].day-range-start)]:rounded-r-none [&:has([aria-selected].day-range-end)]:rounded-l-none first:[&:has([aria-selected].day-range-end)]:rounded-r-[24px] first:[&:has([aria-selected].day-range-end)]:rounded-l-md last:[&:has([aria-selected].day-range-start)]:rounded-l-[24px] last:[&:has([aria-selected].day-range-start)]:rounded-r-md [&:has([aria-selected].day-range-start.day-range-end)]:rounded-full",
        day: c(
          o1({ variant: "ghost" }),
          "rounded-[inherit] h-9 w-9 p-0 font-normal aria-selected:opacity-100"
        ),
        day_range_start: "day-range-start",
        day_range_end: "day-range-end",
        day_selected: "bg-f1-background-selected-bold text-f1-foreground-inverse",
        day_today: "bg-f1-background-secondary text-f1-foreground",
        day_outside: "day-outside text-f1-foreground-secondary opacity-50 aria-selected:bg-f1-background-selected aria-selected:text-f1-foreground",
        day_disabled: "text-f1-foreground-secondary opacity-50",
        day_range_middle: "day-range-middle",
        day_hidden: "invisible",
        ...a
      },
      components: {
        IconLeft: () => /* @__PURE__ */ e(M0, { className: "h-4 w-4" }),
        IconRight: () => /* @__PURE__ */ e(g1, { className: "h-4 w-4" })
      },
      ...n
    }
  );
}
_t.displayName = "Calendar";
const Ft = w.Root, zt = w.Value, H1 = v.forwardRef(({ className: l, children: a, ...o }, n) => /* @__PURE__ */ e(w.Trigger, { ref: n, className: c(l), ...o, children: a }));
H1.displayName = w.Trigger.displayName;
const k1 = v.forwardRef(({ className: l, ...a }, o) => /* @__PURE__ */ e(
  w.ScrollUpButton,
  {
    ref: o,
    className: c(
      "flex cursor-default items-center justify-center py-1",
      l
    ),
    ...a,
    children: /* @__PURE__ */ e(S0, { className: "h-4 w-4 text-f1-foreground" })
  }
));
k1.displayName = w.ScrollUpButton.displayName;
const $1 = v.forwardRef(({ className: l, ...a }, o) => /* @__PURE__ */ e(
  w.ScrollDownButton,
  {
    ref: o,
    className: c(
      "flex cursor-default items-center justify-center py-1",
      l
    ),
    ...a,
    children: /* @__PURE__ */ e(b0, { className: "h-4 w-4 text-f1-foreground" })
  }
));
$1.displayName = w.ScrollDownButton.displayName;
const V1 = v.forwardRef(({ className: l, children: a, position: o = "popper", ...n }, i) => /* @__PURE__ */ e(w.Portal, { children: /* @__PURE__ */ t(
  w.Content,
  {
    ref: i,
    className: c(
      "relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border border-solid border-f1-border bg-f1-background text-f1-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      o === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
      l
    ),
    position: o,
    ...n,
    children: [
      /* @__PURE__ */ e(k1, {}),
      /* @__PURE__ */ e(
        w.Viewport,
        {
          className: c(
            "p-1",
            o === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
          ),
          children: a
        }
      ),
      /* @__PURE__ */ e($1, {})
    ]
  }
) }));
V1.displayName = w.Content.displayName;
const At = v.forwardRef(({ className: l, ...a }, o) => /* @__PURE__ */ e(
  w.Label,
  {
    ref: o,
    className: c("py-1.5 pl-8 pr-2 text-sm font-semibold", l),
    ...a
  }
));
At.displayName = w.Label.displayName;
const L1 = v.forwardRef(({ className: l, children: a, ...o }, n) => /* @__PURE__ */ t(
  w.Item,
  {
    ref: n,
    className: c(
      "relative grid w-full cursor-default select-none grid-cols-[1fr_20px] gap-x-1.5 rounded p-2 outline-none transition-colors focus:bg-f1-background-secondary focus:text-f1-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      "data-[state=checked]:bg-f1-background-selected-bold/5 hover:data-[state=checked]:bg-f1-background-selected-bold/10",
      l
    ),
    ...o,
    children: [
      /* @__PURE__ */ e(w.ItemText, { children: a }),
      /* @__PURE__ */ e(w.ItemIndicator, { className: "flex", children: /* @__PURE__ */ e(C1, { className: "size-5 text-f1-icon-selected" }) })
    ]
  }
));
L1.displayName = w.Item.displayName;
const Nt = v.forwardRef(({ className: l, ...a }, o) => /* @__PURE__ */ e(
  w.Separator,
  {
    ref: o,
    className: c("-mx-1 my-1 h-px bg-f1-background-secondary", l),
    ...a
  }
));
Nt.displayName = w.Separator.displayName;
const Ht = ({ item: l }) => {
  const a = l.icon && U[l.icon];
  return /* @__PURE__ */ e(L1, { value: l.value, children: /* @__PURE__ */ t("div", { className: "flex items-start gap-1.5", children: [
    a && /* @__PURE__ */ e(a, { className: "h-5 w-5 shrink-0 text-f1-icon" }),
    /* @__PURE__ */ t("div", { className: "flex flex-col", children: [
      /* @__PURE__ */ e("span", { className: "font-medium", children: l.label }),
      l.description && /* @__PURE__ */ e("div", { className: "text-f1-foreground-secondary", children: l.description })
    ] })
  ] }) });
}, kt = ({ item: l }) => {
  const a = l.icon && U[l.icon];
  return /* @__PURE__ */ t("div", { className: "flex items-center gap-1.5", children: [
    a && /* @__PURE__ */ e(a, { className: "h-5 w-5 shrink-0 text-f1-icon" }),
    l.label
  ] });
}, $t = "flex h-10 w-full items-center justify-between rounded-md border border-solid border-f1-border bg-f1-background pl-3 pr-2 py-2.5 transition-colors placeholder:text-f1-foreground-secondary hover:border-f1-border-hover disabled:cursor-not-allowed disabled:bg-f1-background-secondary disabled:opacity-50 [&>span]:line-clamp-1", Vt = r(
  function({
    placeholder: a,
    options: o,
    onChange: n,
    value: i,
    children: s,
    disabled: d,
    open: h,
    onOpenChange: f,
    ...u
  }, x) {
    const y = o.find((S) => S.value === i);
    return /* @__PURE__ */ t(
      Ft,
      {
        onValueChange: n,
        value: i,
        disabled: d,
        open: h,
        onOpenChange: f,
        ...u,
        children: [
          /* @__PURE__ */ e(H1, { ref: x, asChild: !0, children: s || /* @__PURE__ */ t(
            "button",
            {
              className: c(
                $t,
                _("focus-visible:border-f1-border-hover")
              ),
              children: [
                /* @__PURE__ */ e(zt, { placeholder: a, asChild: !0, children: y && /* @__PURE__ */ e(kt, { item: y }) }),
                /* @__PURE__ */ e("div", { className: "flex h-6 w-6 items-center justify-center", children: /* @__PURE__ */ e("div", { className: "h-4 w-4 rounded-2xs bg-f1-background-secondary", children: /* @__PURE__ */ e($, { className: "h-3 w-3" }) }) })
              ]
            }
          ) }),
          /* @__PURE__ */ e(V1, { children: o.map((S) => /* @__PURE__ */ e(Ht, { item: S }, S.value)) })
        ]
      }
    );
  }
), I1 = v.forwardRef(
  ({ className: l, ...a }, o) => /* @__PURE__ */ e(
    "textarea",
    {
      className: c(
        "ring-offset-background focus-visible:ring-ring flex min-h-[80px] w-full rounded-sm border-2 border-solid border-f1-border bg-f1-background px-3 py-2 text-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-f1-foreground-secondary/60 hover:border-f1-border-hover focus-visible:border-f1-border-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:bg-f1-background-secondary disabled:opacity-50",
        l
      ),
      ref: o,
      ...a
    }
  )
);
I1.displayName = "Textarea";
const J3 = p(
  {
    name: "Textarea",
    type: "form"
  },
  I1
), en = p(
  {
    name: "Input",
    type: "form"
  },
  N0
), an = p(
  {
    name: "NumberInput",
    type: "form"
  },
  Rt
), Lt = () => /* @__PURE__ */ e("div", { className: "mx-6 w-px bg-f1-foreground-disabled" }), It = r(
  function({ mainContent: a, sideContent: o }, n) {
    return /* @__PURE__ */ t(
      "div",
      {
        ref: n,
        className: "flex h-full flex-col-reverse gap-4 text-f1-foreground sm:flex-row sm:gap-0",
        children: [
          /* @__PURE__ */ e("div", { className: "sm:my-6 sm:ms-6 sm:basis-3/4", children: a }),
          /* @__PURE__ */ e(Lt, {}),
          /* @__PURE__ */ e("div", { className: "sm:my-6 sm:me-6 sm:basis-1/4", children: o })
        ]
      }
    );
  }
), Ot = r(
  function({ title: a, content: o }, n) {
    return /* @__PURE__ */ t(
      "div",
      {
        ref: n,
        className: c("flex flex-col", typeof o != "string" ? "gap-2" : "gap-1"),
        children: [
          /* @__PURE__ */ e("p", { className: "text-f1-foreground-secondary", children: a }),
          /* @__PURE__ */ e("p", { className: "font-medium text-f1-foreground", children: o })
        ]
      }
    );
  }
), ln = r(function({ title: a, details: o }, n) {
  return /* @__PURE__ */ t("div", { ref: n, className: "flex flex-col gap-4", children: [
    !!a && /* @__PURE__ */ e("p", { className: "mb-1 text-sm font-semibold text-f1-foreground-secondary", children: a.toLocaleUpperCase() }),
    /* @__PURE__ */ e("div", { className: "flex flex-col gap-5", children: o == null ? void 0 : o.map((i) => !(i != null && i.title) || !(i != null && i.content) ? null : /* @__PURE__ */ e(
      Ot,
      {
        title: i.title,
        content: i.content
      },
      i.title
    )) })
  ] });
}), n1 = {
  grey: "bg-f1-icon",
  radical: "bg-f1-icon-critical",
  tangerine: "bg-f1-icon-warning",
  malibu: "bg-f1-icon-info",
  lime: "bg-f1-icon-positive",
  champagne: "bg-f1-foreground-positive",
  viridian: "bg-f1-foreground-accent",
  purple: "bg-f1-foreground-info"
}, Tt = (l) => {
  const a = Object.keys(n1), o = n1;
  let n = 0;
  if (l === void 0 || l.length === 0)
    return o[a[0] ?? ""] || "";
  for (let i = 0; i < l.length; i++)
    n = l.charCodeAt(i) + ((n << 5) - n), n = n & n;
  return n = (n % a.length + a.length) % a.length, o[a[n]] ?? "";
}, O1 = r(
  ({ text: l, avatar: a, onClick: o }, n) => {
    const i = (a == null ? void 0 : a.alt) ?? l.split(/\s+/).slice(0, 2).map((s) => s[0]).join("").toLocaleUpperCase();
    return /* @__PURE__ */ t(
      "div",
      {
        ref: n,
        className: c(
          "flex flex-row items-center justify-start gap-1.5 rounded-md border border-solid border-f1-border py-1 pl-1 pr-2 font-medium text-f1-foreground",
          o && "cursor-pointer"
        ),
        onClick: o,
        children: [
          /* @__PURE__ */ e("span", { children: /* @__PURE__ */ e(
            W,
            {
              alt: i,
              src: a == null ? void 0 : a.src,
              size: "xsmall",
              color: Tt(l)
            }
          ) }),
          /* @__PURE__ */ e("p", { children: l })
        ]
      }
    );
  }
);
O1.displayName = "Tag";
const Gt = r(
  ({ tags: l }, a) => /* @__PURE__ */ e("div", { ref: a, className: "flex flex-wrap gap-3", children: l.map(({ ...o }, n) => /* @__PURE__ */ e(O1, { ...o }, n)) })
);
Gt.displayName = "TagsList";
const rn = p(
  {
    name: "InfoPaneLayout",
    type: "layout"
  },
  It
), Dt = g.Root, Pt = g.Trigger, Ut = v.forwardRef(({ className: l, inset: a, children: o, ...n }, i) => /* @__PURE__ */ t(
  g.SubTrigger,
  {
    ref: i,
    className: c(
      "flex cursor-default select-none items-center rounded-2xs px-2 py-1.5 text-sm outline-none focus:bg-f1-background-secondary data-[state=open]:bg-f1-background-secondary",
      a && "pl-8",
      l
    ),
    ...n,
    children: [
      o,
      /* @__PURE__ */ e(g1, { className: "ml-auto h-4 w-4" })
    ]
  }
));
Ut.displayName = g.SubTrigger.displayName;
const jt = v.forwardRef(({ className: l, ...a }, o) => /* @__PURE__ */ e(
  g.SubContent,
  {
    ref: o,
    className: c(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-f1-background text-f1-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      l
    ),
    ...a
  }
));
jt.displayName = g.SubContent.displayName;
const T1 = v.forwardRef(({ className: l, sideOffset: a = 4, ...o }, n) => /* @__PURE__ */ e(g.Portal, { children: /* @__PURE__ */ e(
  g.Content,
  {
    ref: n,
    sideOffset: a,
    className: c(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border border-solid border-f1-border bg-f1-background text-f1-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      l
    ),
    ...o
  }
) }));
T1.displayName = g.Content.displayName;
const G1 = v.forwardRef(({ className: l, inset: a, ...o }, n) => /* @__PURE__ */ e(
  g.Item,
  {
    ref: n,
    className: c(
      "relative flex cursor-default select-none items-center rounded p-2 text-base font-medium outline-none transition-colors hover:bg-f1-background-secondary focus:bg-f1-background-secondary data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      a && "pl-8",
      l
    ),
    ...o
  }
));
G1.displayName = g.Item.displayName;
const Et = v.forwardRef(({ className: l, children: a, checked: o, ...n }, i) => /* @__PURE__ */ t(
  g.CheckboxItem,
  {
    ref: i,
    className: c(
      "relative flex cursor-default select-none items-center rounded-xs py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-f1-background-secondary focus:text-f1-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      l
    ),
    checked: o,
    ...n,
    children: [
      /* @__PURE__ */ e("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ e(g.ItemIndicator, { children: /* @__PURE__ */ e(y0, { className: "h-4 w-4" }) }) }),
      a
    ]
  }
));
Et.displayName = g.CheckboxItem.displayName;
const Wt = v.forwardRef(({ className: l, children: a, ...o }, n) => /* @__PURE__ */ t(
  g.RadioItem,
  {
    ref: n,
    className: c(
      "relative flex cursor-default select-none items-center rounded-xs py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-f1-background-secondary focus:text-f1-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      l
    ),
    ...o,
    children: [
      /* @__PURE__ */ e("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ e(g.ItemIndicator, { children: /* @__PURE__ */ e(B0, { className: "h-2 w-2 fill-current" }) }) }),
      a
    ]
  }
));
Wt.displayName = g.RadioItem.displayName;
const qt = v.forwardRef(({ className: l, inset: a, ...o }, n) => /* @__PURE__ */ e(
  g.Label,
  {
    ref: n,
    className: c(
      "px-2 py-1.5 text-sm font-semibold",
      a && "pl-8",
      l
    ),
    ...o
  }
));
qt.displayName = g.Label.displayName;
const Zt = v.forwardRef(({ className: l, ...a }, o) => /* @__PURE__ */ e(
  g.Separator,
  {
    ref: o,
    className: c("-mx-1 my-1 h-px bg-f1-background-secondary", l),
    ...a
  }
));
Zt.displayName = g.Separator.displayName;
const Qt = ({ item: l }) => {
  const { label: a, ...o } = l, n = l.icon && U[l.icon], i = /* @__PURE__ */ t(I, { children: [
    n && /* @__PURE__ */ e(
      n,
      {
        className: c(
          "h-5 w-5 text-f1-icon",
          l.critical && "text-f1-icon-critical"
        )
      }
    ),
    /* @__PURE__ */ t("div", { className: "flex flex-col items-start", children: [
      a,
      l.description && /* @__PURE__ */ e(
        "div",
        {
          className: c(
            "font-normal text-f1-foreground-secondary",
            l.critical && "text-f1-foreground-critical"
          ),
          children: l.description
        }
      )
    ] })
  ] }), s = c(
    "flex items-start gap-1.5 w-full",
    l.critical && "text-f1-foreground-critical"
  );
  return /* @__PURE__ */ e(G1, { asChild: !0, onClick: l.onClick, className: s, children: l.href ? /* @__PURE__ */ e(
    D,
    {
      href: l.href,
      className: c(s, "text-f1-foreground no-underline"),
      ...o,
      children: i
    }
  ) : /* @__PURE__ */ e("div", { className: s, children: i }) });
};
function Kt({ items: l, children: a }) {
  return /* @__PURE__ */ t(Dt, { children: [
    /* @__PURE__ */ e(Pt, { asChild: !0, children: a || /* @__PURE__ */ e(
      H,
      {
        hideLabel: !0,
        icon: B1,
        label: "...",
        round: !0,
        variant: "outline"
      }
    ) }),
    /* @__PURE__ */ e(T1, { className: "min-w-[var(--radix-dropdown-menu-trigger-width)]", children: /* @__PURE__ */ e("div", { className: "flex flex-col p-1", children: l.map((o, n) => /* @__PURE__ */ e(
      Qt,
      {
        item: {
          ...o,
          onClick: o.onClick
        }
      },
      n
    )) }) })
  ] });
}
function Xt({
  companies: l,
  selected: a,
  onChange: o
}) {
  var h;
  const [n, i] = k(!1), s = l.map((f) => ({
    value: f.id,
    label: f.name
  })), d = l.find((f) => f.id === a) || l[0];
  return /* @__PURE__ */ e(
    Vt,
    {
      options: s,
      value: a,
      onChange: o,
      placeholder: "Select a company",
      open: n,
      onOpenChange: i,
      children: /* @__PURE__ */ t(
        "div",
        {
          className: c(
            "group flex w-fit flex-nowrap items-center gap-2 truncate rounded p-1.5 text-lg font-semibold text-f1-foreground transition-colors hover:bg-f1-background-secondary-hover data-[state=open]:bg-f1-background-secondary-hover",
            _()
          ),
          tabIndex: 0,
          title: d == null ? void 0 : d.name,
          children: [
            /* @__PURE__ */ e(
              W,
              {
                alt: (h = d == null ? void 0 : d.name) == null ? void 0 : h[0],
                src: d == null ? void 0 : d.logo,
                size: "xsmall"
              }
            ),
            /* @__PURE__ */ e("span", { className: "truncate", children: d == null ? void 0 : d.name }),
            /* @__PURE__ */ e("div", { className: "h-6 w-6 shrink-0 p-1", children: /* @__PURE__ */ e("div", { className: "flex h-4 w-4 items-center justify-center rounded-xs bg-f1-background-secondary-hover transition-all group-hover:brightness-90 group-data-[state=open]:brightness-90", children: /* @__PURE__ */ e(
              O.div,
              {
                animate: { rotate: n ? 180 : 0 },
                transition: { duration: 0.2 },
                className: "flex h-3 w-3 items-center justify-center",
                children: /* @__PURE__ */ e($, { className: "h-3 w-3 shrink-0 text-f1-icon" })
              }
            ) }) })
          ]
        }
      )
    }
  );
}
function Yt({ isExpanded: l }) {
  return /* @__PURE__ */ t(
    "svg",
    {
      width: "20",
      height: "20",
      viewBox: "0 0 20 20",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className: "text-f1-icon-bold",
      children: [
        /* @__PURE__ */ e(
          "rect",
          {
            id: "container",
            x: "3.33325",
            y: "5",
            width: "13.3333",
            height: "10",
            rx: "3",
            strokeWidth: "1.3",
            className: "stroke-current"
          }
        ),
        /* @__PURE__ */ e(
          "path",
          {
            id: "arrow",
            d: l ? "M10.417 10L14.167 10M10.417 10L12.0837 8.33337M10.417 10L12.0837 11.6667" : "M10.75 10L7 10M10.75 10L9.08333 8.33337M10.75 10L9.08333 11.6667",
            strokeWidth: "1.3",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            className: c(
              "translate-x-0 stroke-current transition-all duration-200 ease-out",
              l ? "opacity-0 group-hover:-translate-x-1 group-hover:opacity-100" : "opacity-1 group-hover:translate-x-[3px]"
            )
          }
        ),
        /* @__PURE__ */ e(
          "path",
          {
            id: "line",
            d: "M7.5 5L7.5 15",
            strokeWidth: "1.3",
            strokeLinecap: "round",
            className: c(
              "stroke-current transition-all duration-200 ease-out",
              l ? "translate-x-0 opacity-100 group-hover:-translate-x-0.5 group-hover:opacity-0" : "-translate-x-0.5 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
            )
          }
        )
      ]
    }
  );
}
function Jt({ isExpanded: l, onClick: a }) {
  return /* @__PURE__ */ e(
    i0,
    {
      variant: "ghost",
      size: "md",
      round: !0,
      onClick: a,
      className: "group",
      title: "Toggle Sidebar",
      children: /* @__PURE__ */ e(Yt, { isExpanded: l })
    }
  );
}
function on({
  companies: l,
  selected: a,
  onChange: o,
  isExpanded: n
}) {
  return /* @__PURE__ */ t("div", { className: "flex h-[72px] items-center justify-between gap-3", children: [
    /* @__PURE__ */ e(
      Xt,
      {
        companies: l,
        selected: a,
        onChange: o
      }
    ),
    /* @__PURE__ */ e(Jt, { isExpanded: n })
  ] });
}
const e3 = b(
  "inline-flex items-center justify-center whitespace-nowrap rounded-xs text-sm font-medium tabular-nums",
  {
    variants: {
      size: {
        md: "min-w-5 p-0.5",
        sm: "min-w-4 px-0.5"
      },
      type: {
        default: "border border-solid border-f1-border bg-f1-background-secondary",
        selected: "bg-f1-background-selected-bold text-f1-foreground-inverse",
        bold: "bg-f1-background-accent-bold text-f1-foreground-inverse"
      }
    },
    defaultVariants: {
      size: "md",
      type: "default"
    }
  }
);
function a3({ size: l, type: a, value: o, maxValue: n }) {
  const i = n && o > n ? `+${n}` : o;
  return /* @__PURE__ */ e("div", { className: e3({ size: l, type: a }), children: i });
}
const l3 = q.Root, r3 = q.CollapsibleTrigger, o3 = q.CollapsibleContent, t3 = ({
  item: l,
  active: a
}) => {
  const o = U[l.icon];
  return /* @__PURE__ */ t("div", { className: "flex w-full items-center justify-between", children: [
    /* @__PURE__ */ t("div", { className: "flex items-center gap-1.5 font-medium text-f1-foreground", children: [
      /* @__PURE__ */ e(
        o,
        {
          className: c(
            "h-5 w-5 transition-colors",
            a ? "text-f1-icon-bold" : "text-f1-icon"
          )
        }
      ),
      /* @__PURE__ */ e("span", { children: l.label })
    ] }),
    l.badge && /* @__PURE__ */ e(a3, { value: l.badge, size: "sm", type: "bold" })
  ] });
}, i1 = ({ item: l }) => {
  const { isActive: a } = f1(), { label: o, ...n } = l, i = a(n.href, { exact: n.exactMatch });
  return /* @__PURE__ */ e(
    D,
    {
      ...n,
      className: c(
        "flex cursor-pointer items-center rounded py-1.5 pl-1.5 pr-2 no-underline transition-colors",
        _(),
        i ? "bg-f1-background-secondary-hover text-f1-foreground" : "hover:bg-f1-background-secondary-hover"
      ),
      children: /* @__PURE__ */ e(t3, { item: l, active: i })
    }
  );
}, n3 = ({ category: l }) => {
  const [a, o] = F.useState(l.isOpen !== !1);
  return l.isRoot ? /* @__PURE__ */ e("div", { className: "flex flex-col gap-1 pb-3", children: l.items.map((n, i) => /* @__PURE__ */ e(i1, { item: n }, i)) }) : /* @__PURE__ */ t(l3, { open: a, onOpenChange: o, children: [
    /* @__PURE__ */ t(
      r3,
      {
        className: c(
          "flex w-full cursor-pointer items-center justify-between border-t border-dashed border-transparent border-t-f1-border px-1.5 pb-2 pt-4 text-sm font-semibold uppercase tracking-wide text-f1-foreground-secondary",
          _("focus-visible:rounded-md")
        ),
        children: [
          l.title,
          /* @__PURE__ */ e(
            O.div,
            {
              initial: !1,
              animate: { rotate: a ? 0 : -90 },
              transition: { duration: 0.1 },
              children: /* @__PURE__ */ e($, { className: "h-4 w-4 text-f1-icon-secondary" })
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ e(
      o3,
      {
        forceMount: !0,
        className: "flex flex-col gap-1 overflow-hidden pb-3",
        children: /* @__PURE__ */ e(F0, { initial: !1, children: a && /* @__PURE__ */ e(
          O.div,
          {
            initial: { height: 0, opacity: 0 },
            animate: { height: "auto", opacity: 1 },
            exit: { height: 0, opacity: 0 },
            transition: { duration: 0.15, ease: [0.165, 0.84, 0.44, 1] },
            children: /* @__PURE__ */ e("div", { className: "flex flex-col gap-1 pb-3", children: l.items.map((n, i) => /* @__PURE__ */ e(i1, { item: n }, i)) })
          }
        ) })
      }
    )
  ] });
};
function tn({ tree: l }) {
  return /* @__PURE__ */ e("div", { className: "w-full bg-transparent", children: l.map((a, o) => /* @__PURE__ */ e(n3, { category: a }, o)) });
}
const i3 = b(
  "flex h-5 items-center justify-center rounded-xs border border-solid py-0.5 text-sm font-semibold uppercase leading-none",
  {
    variants: {
      variant: {
        default: "border-f1-border bg-f1-background-tertiary text-f1-foreground-secondary",
        inverse: "border-f1-border/20 bg-f1-background/10 text-f1-foreground-inverse/70"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
), s1 = {
  cmd: y1
};
function s3({ keys: l, variant: a }) {
  return /* @__PURE__ */ e("div", { className: "flex flex-wrap items-center gap-0.5", children: l.map((o, n) => {
    const i = o.toLowerCase(), s = i in s1;
    return /* @__PURE__ */ e(
      "kbd",
      {
        className: c(
          i3({ variant: a }),
          s ? "w-5 px-0.5" : "min-w-5 px-1"
        ),
        children: s ? /* @__PURE__ */ e(B, { icon: s1[i], size: "sm" }) : o
      },
      n
    );
  }) });
}
function nn({
  onClick: l,
  placeholder: a,
  shortcut: o = ["cmd", "k"],
  ...n
}) {
  return /* @__PURE__ */ t(
    "button",
    {
      onClick: l,
      className: c(
        "mb-4 mt-2 flex w-full cursor-pointer items-center justify-between rounded border border-solid border-f1-border/70 bg-f1-background/80 p-1.5 text-f1-foreground-secondary transition-colors hover:border-f1-border-hover",
        _()
      ),
      type: "button",
      ...n,
      children: [
        /* @__PURE__ */ t("div", { className: "flex items-center gap-1", children: [
          /* @__PURE__ */ e(B, { icon: N1, size: "md" }),
          /* @__PURE__ */ e("span", { children: a })
        ] }),
        /* @__PURE__ */ e(s3, { keys: o })
      ]
    }
  );
}
function sn({ header: l, body: a, footer: o }) {
  return /* @__PURE__ */ t("div", { className: "flex h-full flex-col gap-2", children: [
    l && /* @__PURE__ */ e("div", { className: "flex-shrink-0", children: l }),
    a && /* @__PURE__ */ e("div", { className: "flex-grow overflow-y-auto", children: a }),
    o && /* @__PURE__ */ e("div", { className: "flex-shrink-0", children: o })
  ] });
}
function cn({ name: l, avatarUrl: a, avatarAlt: o, options: n }) {
  return /* @__PURE__ */ e("div", { className: "border-t border-dashed border-transparent border-t-f1-border pt-4", children: /* @__PURE__ */ e(Kt, { items: n, children: /* @__PURE__ */ t(
    "button",
    {
      className: c(
        "flex w-full items-center gap-1.5 rounded p-1.5 font-medium transition-colors hover:bg-f1-background-secondary-hover data-[state=open]:bg-f1-background-secondary-hover",
        _()
      ),
      children: [
        /* @__PURE__ */ e(W, { src: a, alt: o, size: "xxsmall" }),
        l
      ]
    }
  ) }) });
}
function c3(l, a) {
  const { asChild: o, children: n } = l;
  if (!o)
    return typeof a == "function" ? a(n) : a;
  const i = v.Children.only(n);
  return v.cloneElement(i, {
    children: typeof a == "function" ? a(i.props.children) : a
  });
}
const d3 = b(
  "flex items-center justify-start gap-1 overflow-x-auto whitespace-nowrap border-x-0 border-b border-t-0 border-solid border-f1-border-secondary px-6 py-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
  {
    variants: {
      secondary: {
        true: "bg-f1-background-secondary/25",
        false: "bg-f1-background-transparent"
      }
    },
    defaultVariants: {
      secondary: !1
    }
  }
), D1 = v.forwardRef(({ className: l, children: a, secondary: o, ...n }, i) => {
  const s = m0();
  return /* @__PURE__ */ e(
    T.Root,
    {
      ref: i,
      ...n,
      asChild: !1,
      children: /* @__PURE__ */ e(z0, { id: s, children: /* @__PURE__ */ e(
        T.List,
        {
          className: c(d3({ secondary: o }), l),
          children: a
        }
      ) })
    }
  );
});
D1.displayName = "TabNavigation";
const f3 = b(
  "flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1.5 font-medium transition-all",
  {
    variants: {
      secondary: {
        true: "bg-f1-background/60 group-hover:border-f1-border group-data-[active=true]:border-f1-border group-data-[active=true]:text-f1-foreground",
        false: "bg-f1-background-transparent group-hover:bg-f1-background-secondary group-hover:text-f1-foreground group-data-[active=true]:bg-f1-background-secondary group-data-[active=true]:text-f1-foreground"
      },
      disabled: {
        true: "pointer-events-none text-f1-foreground-disabled"
      }
    },
    defaultVariants: {
      secondary: !1,
      disabled: !1
    }
  }
), P1 = v.forwardRef(
  ({ asChild: l, disabled: a, active: o, className: n, children: i, secondary: s, ...d }, h) => /* @__PURE__ */ e(T.Item, { className: "flex", children: /* @__PURE__ */ e(
    T.Link,
    {
      "data-active": o ? "true" : void 0,
      "aria-disabled": a || void 0,
      className: c(
        "group relative flex shrink-0 select-none items-center justify-center rounded-md no-underline focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-f1-ring focus-visible:ring-offset-1",
        a ? "pointer-events-none" : ""
      ),
      ref: h,
      onSelect: () => {
      },
      asChild: l,
      ...d,
      children: c3({ asChild: l, children: i }, (f) => /* @__PURE__ */ t(
        "span",
        {
          className: c(
            "border border-solid border-transparent text-f1-foreground-secondary",
            f3({ secondary: s, disabled: a }),
            n
          ),
          children: [
            f,
            o && !s && /* @__PURE__ */ e(
              O.div,
              {
                layoutId: "underline",
                className: "absolute inset-x-0 -bottom-3 h-px bg-f1-background-bold",
                transition: {
                  type: "spring",
                  bounce: 0.2,
                  duration: 0.5
                }
              }
            )
          ]
        }
      ))
    }
  ) })
);
P1.displayName = "TabNavigationLink";
function dn({ tabs: l, secondary: a = !1 }) {
  const { isActive: o } = f1();
  return /* @__PURE__ */ e(D1, { secondary: a, children: l.map(({ label: n, ...i }, s) => /* @__PURE__ */ e(
    P1,
    {
      active: o(i.href, { exact: i.exactMatch }),
      href: i.href,
      secondary: a,
      asChild: !0,
      children: /* @__PURE__ */ e(D, { ...i, children: n })
    },
    s
  )) });
}
const h3 = M.Root, v3 = M.Portal, U1 = v.forwardRef(({ className: l, ...a }, o) => /* @__PURE__ */ e(
  M.Overlay,
  {
    ref: o,
    className: c(
      "fixed inset-0 z-50 bg-f1-background-bold/40 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      l
    ),
    ...a
  }
));
U1.displayName = M.Overlay.displayName;
const j1 = v.forwardRef(({ className: l, children: a, ...o }, n) => /* @__PURE__ */ e(v3, { children: /* @__PURE__ */ e(U1, { className: "grid place-items-center overflow-y-auto sm:p-8", children: /* @__PURE__ */ t(
  M.Content,
  {
    ref: n,
    onInteractOutside: (i) => i.preventDefault(),
    className: c(
      "relative z-50 grid w-full origin-center gap-4 border bg-f1-background p-8 shadow-xl duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 sm:w-fit sm:min-w-[400px] sm:rounded-xl md:min-w-[456px]",
      l
    ),
    ...o,
    children: [
      a,
      /* @__PURE__ */ t(M.Close, { className: "ring-offset-background focus:ring-ring absolute right-2 top-2 rounded-2xs p-2 text-f1-foreground opacity-70 transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-f1-background-secondary data-[state=open]:text-f1-foreground-secondary", children: [
        /* @__PURE__ */ e(R0, { className: "h-5 w-5" }),
        /* @__PURE__ */ e("span", { className: "sr-only", children: "Close" })
      ] })
    ]
  }
) }) }));
j1.displayName = M.Content.displayName;
const E1 = ({
  className: l,
  ...a
}) => /* @__PURE__ */ e(
  "div",
  {
    className: c(
      "text-icon-neutral-bold absolute left-8 top-0 h-16 w-16 translate-y-[-50%] rounded-xl bg-f1-background p-4 shadow-md",
      l
    ),
    ...a
  }
);
E1.displayName = "DialogIcon";
const W1 = ({
  className: l,
  ...a
}) => /* @__PURE__ */ e("div", { className: c("mt-5 flex flex-col text-left", l), ...a });
W1.displayName = "DialogHeader";
const q1 = ({
  className: l,
  ...a
}) => /* @__PURE__ */ e(
  "div",
  {
    className: c(
      "-mx-8 -mb-8 mt-4 flex flex-col-reverse gap-0 rounded-bl-xl rounded-br-xl border-0 border-t border-solid border-f1-border bg-f1-background-secondary/50 px-8 py-4 sm:flex-row sm:justify-end sm:space-x-2",
      l
    ),
    ...a
  }
);
q1.displayName = "DialogFooter";
const Z1 = v.forwardRef(({ className: l, ...a }, o) => /* @__PURE__ */ e(
  M.Title,
  {
    ref: o,
    className: c("mt-1 text-xl font-medium leading-none", l),
    ...a
  }
));
Z1.displayName = M.Title.displayName;
const Q1 = v.forwardRef(({ className: l, ...a }, o) => /* @__PURE__ */ e(
  M.Description,
  {
    ref: o,
    className: c("mt-2 text-base text-f1-foreground-secondary", l),
    ...a
  }
));
Q1.displayName = M.Description.displayName;
function G({
  className: l,
  ...a
}) {
  return /* @__PURE__ */ e(
    "div",
    {
      className: c(
        "animate-pulse rounded-xs bg-f1-background-secondary",
        l
      ),
      ...a
    }
  );
}
const K1 = r(
  ({ header: l, children: a, loading: o, actions: n, open: i, onClose: s }, d) => {
    const [h, f] = k(!1), u = u1(() => {
      f(!0);
      const x = setTimeout(() => {
        s == null || s(), f(!1);
      }, 200);
      return () => clearTimeout(x);
    }, [s]);
    return /* @__PURE__ */ e(
      h3,
      {
        open: i && !h,
        onOpenChange: (x) => !x && (u == null ? void 0 : u()),
        children: /* @__PURE__ */ t(j1, { ref: d, children: [
          l && /* @__PURE__ */ t(W1, { children: [
            l.icon && /* @__PURE__ */ e(E1, { children: /* @__PURE__ */ e(B, { size: "lg", icon: l.icon }) }),
            /* @__PURE__ */ e(Z1, { children: l.title }),
            /* @__PURE__ */ e(Q1, { children: l.description })
          ] }),
          /* @__PURE__ */ e("div", { className: "flex-grow flex-col", children: o ? /* @__PURE__ */ t("div", { className: "flex flex-col gap-4", children: [
            /* @__PURE__ */ e(G, { className: "h-6 w-full rounded-full" }),
            /* @__PURE__ */ e(G, { className: "h-6 w-full rounded-full" })
          ] }) : a }),
          n && /* @__PURE__ */ t(q1, { children: [
            n.secondary && /* @__PURE__ */ e(H, { variant: "outline", ...n.secondary }),
            /* @__PURE__ */ e(H, { variant: "default", ...n.primary })
          ] })
        ] })
      }
    );
  }
);
K1.displayName = "Dialog";
const fn = p(
  {
    name: "Dialog",
    type: "info"
  },
  K1
), K = {
  2: "gap-2",
  4: "gap-4",
  8: "gap-8"
}, u3 = b("grid grid-cols-1", {
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
      ...K
    }
  },
  defaultVariants: {
    tileSize: "md",
    gap: "4"
  }
}), g3 = F.forwardRef(function({ className: a, gap: o, children: n, tileSize: i, ...s }, d) {
  return /* @__PURE__ */ e("div", { className: c("@container", "grow"), ref: d, ...s, children: /* @__PURE__ */ e(
    "div",
    {
      className: c(u3({ gap: o, tileSize: i }), a),
      ref: d,
      ...s,
      children: n
    }
  ) });
}), w3 = b("flex", {
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
    height: {
      auto: "h-auto",
      full: "h-full"
    },
    width: {
      auto: "w-auto",
      full: "w-full"
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
      end: "justify-end",
      "space-between": "justify-between",
      start: "justify-start",
      stretch: "justify-stretch"
    },
    alignItems: {
      center: "items-center",
      end: "items-end",
      "space-between": "items-between",
      start: "items-start",
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
}), X1 = r(function({
  className: a,
  grow: o,
  basis: n,
  shrink: i,
  paddingX: s,
  paddingY: d,
  inline: h,
  overflow: f,
  maxWidth: u,
  justifyContent: x,
  alignItems: y,
  height: S,
  width: V,
  ...j
}, m) {
  return /* @__PURE__ */ e(
    "div",
    {
      className: c(
        w3({
          paddingX: s,
          basis: n,
          paddingY: d,
          grow: o,
          shrink: i,
          inline: h,
          overflow: f,
          maxWidth: u,
          justifyContent: x,
          alignItems: y,
          height: S,
          width: V
        }),
        a
      ),
      ref: m,
      ...j
    }
  );
}), p3 = b("flex-row", {
  variants: {
    gap: {
      ...K
    },
    wrap: {
      true: "flex-wrap"
    }
  },
  defaultVariants: {
    wrap: !0
  }
}), m3 = F.forwardRef(function({ className: a, gap: o, wrap: n, ...i }, s) {
  return /* @__PURE__ */ e(
    X1,
    {
      className: c(p3({ gap: o, wrap: n }), a),
      ref: s,
      ...i
    }
  );
}), x3 = b("flex-col", {
  variants: {
    gap: {
      ...K
    }
  },
  defaultVariants: {}
}), C3 = r(function({ className: a, gap: o, children: n, ...i }, s) {
  return /* @__PURE__ */ e(
    X1,
    {
      className: c(x3({ gap: o }), a),
      ref: s,
      ...i,
      children: n
    }
  );
}), hn = p(
  {
    name: "Stack",
    type: "layout"
  },
  C3
), vn = p(
  {
    name: "Split",
    type: "layout"
  },
  m3
), un = p(
  {
    name: "AutoGrid",
    type: "layout"
  },
  g3
);
function R(l, a) {
  const o = l.displayName || l.name || "Component";
  return Object.assign(a, { displayName: `${o}.Skeleton` }), Object.assign(l, { Skeleton: a });
}
const Y1 = ({ orientation: l = "vertical", limit: a = 600, children: o }) => /* @__PURE__ */ e(
  "div",
  {
    style: {
      maskImage: `linear-gradient(to ${l == "vertical" ? "bottom" : "right"}, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) calc(min(100% - ${a}px, 100%)), rgba(0, 0, 0, 0) 100%)`
    },
    className: l == "horizontal" ? "w-full overflow-hidden" : "w-auto",
    children: o
  }
), X = v.forwardRef(({ className: l, ...a }, o) => /* @__PURE__ */ e(
  "div",
  {
    ref: o,
    className: c(
      "flex flex-col items-stretch rounded-xl border border-solid border-f1-border bg-f1-background p-4",
      l
    ),
    ...a
  }
));
X.displayName = "Card";
const Y = v.forwardRef(({ className: l, ...a }, o) => /* @__PURE__ */ e(
  "div",
  {
    ref: o,
    className: c("flex flex-row gap-1.5", l),
    ...a
  }
));
Y.displayName = "CardHeader";
const J = v.forwardRef(({ className: l, ...a }, o) => /* @__PURE__ */ e("h3", { ref: o, className: c("text-base font-medium", l), ...a }));
J.displayName = "CardTitle";
const e1 = v.forwardRef(({ className: l, ...a }, o) => /* @__PURE__ */ e(
  "h3",
  {
    ref: o,
    className: c(
      "truncate text-base font-normal text-f1-foreground-secondary",
      l
    ),
    ...a
  }
));
e1.displayName = "CardSubtitle";
const J1 = v.forwardRef(({ className: l, content: a }, o) => /* @__PURE__ */ e(
  "div",
  {
    ref: o,
    className: c("-ml-1 flex h-6 w-6 items-center justify-center", l),
    children: /* @__PURE__ */ e(s0, { children: /* @__PURE__ */ t(c0, { children: [
      /* @__PURE__ */ e(
        d0,
        {
          className: "h-5 w-5 cursor-help text-f1-foreground-secondary",
          "aria-label": a,
          children: /* @__PURE__ */ e(B, { icon: z1, size: "md" })
        }
      ),
      /* @__PURE__ */ e(f0, { children: /* @__PURE__ */ e("p", { children: a }) })
    ] }) })
  }
));
J1.displayName = "CardInfo";
const e0 = v.forwardRef(({ className: l, title: a, ...o }) => /* @__PURE__ */ e(
  D,
  {
    className: c(
      "flex h-6 w-6 items-center justify-center rounded-sm border border-solid border-f1-border text-f1-foreground-secondary transition-colors hover:text-f1-foreground",
      l
    ),
    "aria-label": a,
    ...o,
    children: /* @__PURE__ */ e(B, { icon: M1, size: "sm" })
  }
));
e0.displayName = "CardLink";
const a1 = v.forwardRef(({ className: l, ...a }, o) => /* @__PURE__ */ e("div", { ref: o, className: c("flex grow flex-col", l), ...a }));
a1.displayName = "CardContent";
const l1 = v.forwardRef(({ className: l, ...a }, o) => /* @__PURE__ */ e("div", { ref: o, className: c("flex items-center", l), ...a }));
l1.displayName = "CardFooter";
const M3 = v.forwardRef(function({ className: a, ...o }, n) {
  return /* @__PURE__ */ e(
    "div",
    {
      ref: n,
      className: c("flex text-2xl font-semibold", a),
      ...o
    }
  );
});
l1.displayName = "CardComment";
const S3 = r(
  function({ bare: a = !1, ...o }, n) {
    return /* @__PURE__ */ e(
      "div",
      {
        ref: n,
        role: "separator",
        className: c("h-[1px] w-full", a ? void 0 : "my-4"),
        style: {
          backgroundImage: "repeating-linear-gradient(to right, hsl(var(--neutral-30)) 0, hsl(var(--neutral-30)) 3px, transparent 3px, transparent 7px)"
        },
        ...o
      }
    );
  }
), b3 = () => /* @__PURE__ */ e("div", { className: "min-h-[0.15rem] min-w-[0.15rem] rounded-full bg-f1-foreground-secondary" }), y3 = r(function({ header: a, alert: o, children: n, action: i, summaries: s }, d) {
  const h = (f) => !!f && !(F.isValidElement(f) && f.type === F.Fragment && F.Children.count(f.props.children) === 0);
  return /* @__PURE__ */ t(X, { className: "flex gap-4", ref: d, children: [
    a && /* @__PURE__ */ e(Y, { children: /* @__PURE__ */ t("div", { className: "flex flex-1 flex-col gap-4 truncate", children: [
      /* @__PURE__ */ t("div", { className: "flex flex-row items-center justify-between gap-2", children: [
        /* @__PURE__ */ t("div", { className: "flex min-h-6 grow flex-row items-center gap-1.5 truncate", children: [
          a.title && /* @__PURE__ */ e(J, { children: a.title }),
          a.subtitle && /* @__PURE__ */ t(I, { children: [
            /* @__PURE__ */ e(b3, {}),
            /* @__PURE__ */ e(e1, { children: a.subtitle })
          ] }),
          a.info && /* @__PURE__ */ e(J1, { content: a.info })
        ] }),
        o && /* @__PURE__ */ e(h1, { text: o, variant: "critical", hasDot: !0 }),
        a.link && /* @__PURE__ */ e(e0, { href: a.link.url, title: a.link.title })
      ] }),
      a.comment && /* @__PURE__ */ t("div", { className: "flex flex-row items-center gap-3", children: [
        /* @__PURE__ */ e(M3, { className: c(!!a.isBlur && "blur-md"), children: a.comment }),
        !!a.hasBlur && /* @__PURE__ */ e("span", { children: /* @__PURE__ */ e(
          H,
          {
            icon: a.isBlur ? R1 : _1,
            hideLabel: !0,
            label: "hide/show",
            variant: "outline",
            round: !0,
            onClick: a.toggleBlur,
            size: "sm"
          }
        ) })
      ] })
    ] }) }),
    /* @__PURE__ */ t(a1, { className: "flex flex-col gap-4", children: [
      s && /* @__PURE__ */ e("div", { className: "flex flex-row", children: s.map((f, u) => /* @__PURE__ */ t("div", { className: "grow", children: [
        /* @__PURE__ */ e("div", { className: "mb-0.5 text-sm text-f1-foreground-secondary", children: f.label }),
        /* @__PURE__ */ t("div", { className: "flex flex-row items-end gap-0.5 text-xl font-semibold", children: [
          !!f.prefixUnit && /* @__PURE__ */ e("div", { className: "text-lg font-medium", children: f.prefixUnit }),
          f.value,
          !!f.postfixUnit && /* @__PURE__ */ e("div", { className: "text-lg font-medium", children: f.postfixUnit })
        ] })
      ] }, u)) }),
      F.Children.toArray(n).filter(h).map((f, u) => /* @__PURE__ */ t(I, { children: [
        u > 0 && /* @__PURE__ */ e(S3, { bare: !0 }),
        f
      ] }))
    ] }),
    i && /* @__PURE__ */ e(l1, { children: /* @__PURE__ */ e(H, { variant: "outline", size: "md", ...i }) })
  ] });
}), B3 = b("", {
  variants: {
    height: {
      sm: "h-36",
      md: "h-48",
      lg: "h-60"
    }
  }
}), R3 = r(
  function({ header: a, height: o }, n) {
    return /* @__PURE__ */ t(
      X,
      {
        className: "flex gap-4",
        ref: n,
        "aria-live": "polite",
        "aria-busy": !0,
        children: [
          /* @__PURE__ */ e(Y, { children: /* @__PURE__ */ t(
            "div",
            {
              className: "flex h-6 w-full flex-row items-center gap-1.5",
              "aria-hidden": !0,
              children: [
                a != null && a.title ? /* @__PURE__ */ e(J, { children: a.title }) : /* @__PURE__ */ e(G, { className: "h-4 w-full max-w-16" }),
                (a == null ? void 0 : a.subtitle) && /* @__PURE__ */ e(e1, { children: a.subtitle })
              ]
            }
          ) }),
          /* @__PURE__ */ e(
            a1,
            {
              "aria-hidden": !0,
              className: c(B3({ height: o })),
              children: [...Array(4)].map((i, s) => /* @__PURE__ */ e(
                G,
                {
                  className: `mb-1 h-6 ${["w-full", "w-1/2", "w-3/4", "w-1/4"][s]}`
                },
                s
              ))
            }
          )
        ]
      }
    );
  }
), A = R(y3, R3), C = Object.assign(
  r(function({ chart: a, summaries: o, ...n }, i) {
    return /* @__PURE__ */ e(A, { ref: i, ...n, summaries: o, children: a && /* @__PURE__ */ e("div", { className: "min-h-52 grow pt-2", children: a }) });
  }),
  {
    Skeleton: A.Skeleton
  }
), _3 = R(
  r(function({ hasBlur: a, ...o }, n) {
    const [i, s] = k(!!a), d = () => s((u) => !u), h = {
      ...o,
      header: {
        ...o.header,
        hasBlur: a,
        isBlur: i,
        toggleBlur: d
      }
    }, f = {
      ...o.chart,
      yAxis: o.chart.yAxis ? { ...o.chart.yAxis, isBlur: i } : { hide: !0 }
    };
    return /* @__PURE__ */ e(
      C,
      {
        ref: n,
        ...h,
        chart: /* @__PURE__ */ e(h0, { ...f })
      }
    );
  }),
  C.Skeleton
), F3 = r(function(a, o) {
  return /* @__PURE__ */ e(
    C,
    {
      ref: o,
      ...a,
      chart: /* @__PURE__ */ e(v0, { aspect: null, yAxis: { hide: !0 }, ...a.chart })
    }
  );
}), z3 = R(
  F3,
  C.Skeleton
), A3 = R(
  r(
    function(a, o) {
      return /* @__PURE__ */ e(
        C,
        {
          ref: o,
          ...a,
          chart: /* @__PURE__ */ e(u0, { aspect: null, yAxis: { hide: !0 }, ...a.chart })
        }
      );
    }
  ),
  C.Skeleton
), N3 = R(
  r(
    function(a, o) {
      return /* @__PURE__ */ e(
        C,
        {
          ref: o,
          ...a,
          chart: /* @__PURE__ */ e(g0, { aspect: null, ...a.chart })
        }
      );
    }
  ),
  C.Skeleton
), H3 = R(
  r(
    function(a, o) {
      return /* @__PURE__ */ e(C, { ref: o, ...a, chart: null });
    }
  ),
  C.Skeleton
), k3 = R(
  r(
    function(a, o) {
      return /* @__PURE__ */ e(
        C,
        {
          ref: o,
          ...a,
          chart: /* @__PURE__ */ e(
            w0,
            {
              aspect: null,
              xAxis: { hide: !0 },
              ...a.chart
            }
          )
        }
      );
    }
  ),
  C.Skeleton
), gn = p(
  {
    name: "AreaChartWidget",
    type: "info"
  },
  _3
), wn = p(
  {
    name: "BarChartWidget",
    type: "info"
  },
  z3
), pn = p(
  {
    name: "LineChartWidget",
    type: "info"
  },
  A3
), mn = p(
  {
    name: "PieChartWidget",
    type: "info"
  },
  N3
), xn = p(
  {
    name: "VerticalBarChartWidget",
    type: "info"
  },
  k3
), Cn = p(
  {
    name: "SummariesWidget",
    type: "info"
  },
  H3
);
function Mn({
  label: l,
  title: a,
  subtitle: o,
  data: n,
  helpText: i,
  legend: s = !1
}) {
  return /* @__PURE__ */ t("div", { children: [
    /* @__PURE__ */ t("div", { className: "space-y-2", children: [
      /* @__PURE__ */ e("span", { className: "text-sm font-semibold uppercase leading-none text-f1-foreground-secondary", children: l }),
      /* @__PURE__ */ t("div", { className: "flex items-baseline justify-between", children: [
        /* @__PURE__ */ e("span", { className: "text-2xl font-semibold", children: a }),
        /* @__PURE__ */ e("span", { className: "text-2xl font-semibold text-f1-foreground-secondary", children: o })
      ] })
    ] }),
    /* @__PURE__ */ e("div", { className: "mt-2", children: /* @__PURE__ */ e(p0, { data: n, legend: s }) }),
    !!i && /* @__PURE__ */ e("div", { className: "mt-1", children: /* @__PURE__ */ e("span", { className: "text-sm", children: i }) })
  ] });
}
const $3 = r(function({ title: a, subtitle: o, description: n, color: i, isPending: s }, d) {
  return /* @__PURE__ */ t(
    "div",
    {
      ref: d,
      className: "relative flex flex-row items-stretch gap-3 overflow-hidden rounded-sm px-2 py-1.5",
      children: [
        /* @__PURE__ */ e(
          "div",
          {
            className: "absolute bottom-0 left-0 right-0 top-0 opacity-10",
            style: {
              background: `linear-gradient(to right, ${i}, transparent)`
            }
          }
        ),
        /* @__PURE__ */ e(
          "div",
          {
            className: "min-h-10 min-w-1 rounded-2xs",
            style: s ? {
              backgroundImage: `repeating-linear-gradient(
              135deg,
              ${i} 0px,
              ${i} 4px, 
              transparent 4px, 
              transparent 5.5px
            )`
            } : {
              backgroundColor: i
            }
          }
        ),
        /* @__PURE__ */ t("div", { className: "flex flex-col gap-0.5", children: [
          /* @__PURE__ */ t("p", { className: "line-clamp-3 font-medium", children: [
            a,
            /* @__PURE__ */ e("span", { className: "pl-1", children: o })
          ] }),
          /* @__PURE__ */ e("p", { className: "text-f1-foreground-secondary", children: n })
        ] })
      ]
    }
  );
}), Sn = r(
  function({ events: a, title: o, limit: n = 3 }, i) {
    return a.length ? /* @__PURE__ */ t("div", { className: "flex flex-col gap-3", ref: i, children: [
      o && /* @__PURE__ */ e("p", { className: "text-sm font-semibold uppercase text-f1-foreground-secondary", children: o }),
      /* @__PURE__ */ e("div", { className: "flex flex-col gap-2", children: a.slice(0, n).map((s) => /* @__PURE__ */ e(
        $3,
        {
          title: s.title,
          subtitle: s.subtitle,
          description: s.description,
          color: s.color,
          isPending: s.isPending
        },
        s.title
      )) })
    ] }) : null;
  }
), V3 = {
  office: A1,
  briefcase: x1,
  home: F1
}, L3 = r(
  function({ icon: a, texts: o }, n) {
    const i = V3[a];
    return /* @__PURE__ */ t(
      "div",
      {
        ref: n,
        className: "flex flex-row items-start gap-1 text-f1-foreground-secondary",
        children: [
          /* @__PURE__ */ e("div", { className: "relative top-0.5", children: /* @__PURE__ */ e(B, { icon: i, size: "sm" }) }),
          /* @__PURE__ */ e("p", { className: "font-medium text-f1-foreground", children: o.map((s, d) => /* @__PURE__ */ e(
            "span",
            {
              className: d > 0 ? "before:mx-1 before:content-['·']" : void 0,
              children: s
            },
            s
          )) })
        ]
      }
    );
  }
), bn = r(
  function({ list: a }, o) {
    return /* @__PURE__ */ e("div", { ref: o, className: "flex flex-col gap-2", children: a.map((n) => /* @__PURE__ */ e(L3, { icon: n.icon, texts: n.texts }, n.texts[0])) });
  }
), yn = r(
  function({ items: a }, o) {
    return /* @__PURE__ */ e(
      "div",
      {
        ref: o,
        className: "grid auto-cols-fr grid-flow-col items-end gap-x-3",
        children: a.map(({ label: n, content: i, icon: s, color: d }) => /* @__PURE__ */ t(I, { children: [
          /* @__PURE__ */ e("p", { className: "row-start-1 line-clamp-2 text-sm font-medium uppercase text-f1-foreground-secondary", children: n }),
          /* @__PURE__ */ t("div", { className: "row-start-2 flex items-baseline gap-1", children: [
            /* @__PURE__ */ e("p", { className: "text-2xl font-semibold", children: i }),
            s && /* @__PURE__ */ e("span", { className: d, children: /* @__PURE__ */ e(B, { icon: s, size: "md" }) })
          ] })
        ] }))
      }
    );
  }
);
function I3({ title: l, status: a, onClick: o }) {
  const n = u1(() => {
    o == null || o(a);
  }, [o, a]);
  return /* @__PURE__ */ t("div", { className: "flex flex-row items-start gap-2", onClick: n, children: [
    (a === "due" || a === "no-due") && /* @__PURE__ */ e(
      b1,
      {
        width: 24,
        color: a === "no-due" ? "hsl(var(--neutral-40))" : "hsl(var(--neutral-50))"
      }
    ),
    a === "in-progress" && /* @__PURE__ */ e(p1, {}),
    /* @__PURE__ */ e("p", { className: "mt-0.5 line-clamp-2 flex-1 font-medium", children: l })
  ] });
}
function Bn({
  tasks: l,
  onClickTask: a,
  maxTasksToShow: o = 5,
  emptyMessage: n = "No tasks assigned"
}) {
  const s = [
    { key: "inProgress", status: "in-progress" },
    { key: "due", status: "due" },
    { key: "noDue", status: "no-due" }
  ].flatMap(
    ({ key: h, status: f }) => ((l == null ? void 0 : l[h]) || []).map((u) => ({
      title: u,
      status: f
    }))
  ), d = !s.length;
  return /* @__PURE__ */ e("div", { className: "flex flex-col gap-3", children: d ? /* @__PURE__ */ e("p", { className: "font-medium", children: n }) : s.slice(0, o).map((h, f) => /* @__PURE__ */ e(
    I3,
    {
      title: h.title,
      status: h.status,
      onClick: a
    },
    `${h} ${f}`
  )) });
}
const Rn = r(
  function({ time: a, status: o, statusText: n, title: i }, s) {
    return /* @__PURE__ */ t("div", { className: "flex flex-col gap-2", children: [
      /* @__PURE__ */ t(
        "div",
        {
          ref: s,
          className: "flex flex-row items-center gap-3 text-f1-foreground-secondary",
          children: [
            /* @__PURE__ */ e("p", { className: "mr-auto text-sm font-semibold uppercase", children: i }),
            /* @__PURE__ */ e(h1, { text: n, hasDot: !0, variant: {
              in: "positive",
              out: "neutral",
              break: "warning"
            }[o] })
          ]
        }
      ),
      /* @__PURE__ */ e("p", { className: "text-3xl font-semibold", children: a })
    ] });
  }
), O3 = ({ title: l, info: a }) => /* @__PURE__ */ t("div", { className: "flex items-center justify-between", children: [
  /* @__PURE__ */ e("p", { className: "flex text-f1-foreground-secondary", children: l }),
  /* @__PURE__ */ e("div", { className: "basis-16 justify-self-end text-right font-medium", children: a })
] }), _n = r(
  function({ title: a, list: o }, n) {
    return /* @__PURE__ */ t("div", { ref: n, className: "flex flex-col gap-2", children: [
      a && /* @__PURE__ */ e("div", { className: "font-medium", children: a }),
      o.map((i) => /* @__PURE__ */ e(O3, { title: i.title, info: i.info }, i.title))
    ] });
  }
), a0 = b(
  c(
    "inline-flex items-center justify-center rounded-xs text-sm font-medium transition-colors hover:bg-f1-background-secondary hover:text-f1-foreground-secondary disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-f1-background-secondary data-[state=on]:text-f1-foreground",
    _()
  ),
  {
    variants: {
      variant: {
        default: "bg-transparent",
        outline: "border border-f1-border bg-transparent hover:bg-f1-background-secondary hover:text-f1-foreground"
      },
      size: {
        default: "h-10 px-3",
        sm: "h-9 px-2.5",
        lg: "h-11 px-5"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
), T3 = v.forwardRef(({ className: l, variant: a, size: o, ...n }, i) => /* @__PURE__ */ e(
  w1.Root,
  {
    ref: i,
    className: c(a0({ variant: a, size: o, className: l })),
    ...n
  }
));
T3.displayName = w1.Root.displayName;
const l0 = v.createContext({
  size: "default",
  variant: "default"
}), r0 = v.forwardRef(({ className: l, variant: a, size: o, children: n, ...i }, s) => /* @__PURE__ */ e(
  P.Root,
  {
    ref: s,
    className: c("flex items-center justify-center gap-1", l),
    ...i,
    children: /* @__PURE__ */ e(l0.Provider, { value: { variant: a, size: o }, children: n })
  }
));
r0.displayName = P.Root.displayName;
const o0 = v.forwardRef(({ className: l, children: a, variant: o, size: n, ...i }, s) => {
  const d = v.useContext(l0);
  return /* @__PURE__ */ e(
    P.Item,
    {
      ref: s,
      className: c(
        a0({
          variant: d.variant || o,
          size: d.size || n
        }),
        l
      ),
      ...i,
      children: a
    }
  );
});
o0.displayName = P.Item.displayName;
const G3 = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday"
], Fn = r(
  function({ daysOfTheWeek: a = G3, activatedDays: o = [] }, n) {
    return /* @__PURE__ */ e(
      r0,
      {
        type: "multiple",
        value: o,
        disabled: !0,
        className: "flex justify-start",
        ref: n,
        children: a.map((i) => /* @__PURE__ */ e(
          o0,
          {
            "aria-label": i,
            value: i,
            className: "h-6 w-6 shrink-0 grow-0 basis-6 p-0 text-sm font-medium disabled:select-none disabled:bg-f1-background-tertiary disabled:text-f1-foreground-secondary disabled:opacity-100 disabled:data-[state=on]:border disabled:data-[state=on]:border-solid disabled:data-[state=on]:border-f1-border-selected disabled:data-[state=on]:bg-f1-background-selected disabled:data-[state=on]:text-f1-foreground-selected",
            children: i[0]
          },
          i
        ))
      }
    );
  }
), c1 = r(
  function({ children: a }, o) {
    const [n, i] = k(), s = x0.toArray(a), d = C0(null);
    return v1(() => {
      const h = () => {
        var u;
        const f = (u = d.current) == null ? void 0 : u.offsetWidth;
        f && i(Math.floor(f / 340) || 1);
      };
      return h(), window.addEventListener("resize", h), () => {
        window.removeEventListener("resize", h);
      };
    }, [i]), /* @__PURE__ */ e("div", { ref: o, className: "text-f1-foreground", children: /* @__PURE__ */ e("div", { ref: d, children: n === 1 ? /* @__PURE__ */ e("div", { className: "flex flex-col gap-4 *:shadow", children: a }) : n && n > 1 && /* @__PURE__ */ e("div", { className: "relative -mr-4", children: /* @__PURE__ */ e(A0, { children: s.map((h, f) => /* @__PURE__ */ e(
      "div",
      {
        style: {
          width: `${Math.floor(1 / n * 1e4) / 100 - 0.05}%`
        },
        className: "pb-[0.01px] pr-4 *:mb-4 *:shadow",
        children: h
      },
      f
    )) }, n) }) }) });
  }
), D3 = ["sm", "lg", "md", "md", "lg", "sm", "lg", "lg", "sm", "sm", "md", "md"], zn = R(c1, () => /* @__PURE__ */ e(Y1, { children: /* @__PURE__ */ e(c1, { children: D3.map((l, a) => /* @__PURE__ */ e(A.Skeleton, { height: l }, a)) }) })), d1 = ({ children: l }) => /* @__PURE__ */ e(
  "div",
  {
    className: c(
      "flex min-h-40 flex-row items-stretch gap-4 text-f1-foreground [&>*]:min-w-96 [&>*]:max-w-lg [&>*]:flex-grow [&>*]:basis-0"
    ),
    children: l
  }
), An = R(
  r(function({ children: a }, o) {
    return /* @__PURE__ */ e(Z, { ref: o, children: /* @__PURE__ */ e(d1, { children: a }) });
  }),
  () => /* @__PURE__ */ e(Y1, { orientation: "horizontal", children: /* @__PURE__ */ t(d1, { children: [
    /* @__PURE__ */ e(A.Skeleton, {}),
    /* @__PURE__ */ e(A.Skeleton, {}),
    /* @__PURE__ */ e(A.Skeleton, {})
  ] }) })
), P3 = (l, a) => /* @__PURE__ */ t("svg", { width: "192", height: "192", viewBox: "0 0 192 192", fill: "none", ref: a, ...l, xmlns: "http://www.w3.org/2000/svg", children: [
  /* @__PURE__ */ e("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M72 90C72 76.7452 82.7452 66 96 66C109.255 66 120 76.7452 120 90C120 103.255 109.255 114 96 114C82.7452 114 72 103.255 72 90ZM96 78C89.3726 78 84 83.3726 84 90C84 96.6274 89.3726 102 96 102C102.627 102 108 96.6274 108 90C108 83.3726 102.627 78 96 78Z", fill: "#E51943", fillOpacity: "0.05" }),
  /* @__PURE__ */ e("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M18 60C18 50.0589 26.0589 42 36 42H156C165.941 42 174 50.0589 174 60V120C174 129.941 165.941 138 156 138H36C26.0589 138 18 129.941 18 120V60ZM162 60C162 56.6863 159.314 54 156 54H144C144 63.9411 152.059 72 162 72V60ZM132 54C132 70.5685 145.431 84 162 84V96C145.431 96 132 109.431 132 126H60C60 109.431 46.5685 96 30 96V84C46.5685 84 60 70.5685 60 54H132ZM36 54H48C48 63.9411 39.9411 72 30 72V60C30 56.6863 32.6863 54 36 54ZM144 126H156C159.314 126 162 123.314 162 120V108C152.059 108 144 116.059 144 126ZM48 126C48 116.059 39.9411 108 30 108V120C30 123.314 32.6863 126 36 126H48Z", fill: "#E51943", fillOpacity: "0.05" }),
  /* @__PURE__ */ e("path", { d: "M35.3664 147.317C33.8845 144.353 30.2804 143.152 27.3166 144.633C24.3527 146.115 23.1514 149.719 24.6333 152.683C27.4882 158.393 33.3242 162 39.7081 162H152.292C158.676 162 164.511 158.393 167.366 152.683C168.848 149.719 167.647 146.115 164.683 144.633C161.719 143.152 158.115 144.353 156.633 147.317C155.811 148.961 154.13 150 152.292 150H39.7081C37.8695 150 36.1887 148.961 35.3664 147.317Z", fill: "#E51943", fillOpacity: "0.05" })
] }), U3 = r(P3), j3 = {
  "area-graph": m1,
  cash: U3
}, Nn = r(
  function({ title: a, content: o, icon: n, buttonLabel: i, buttonAction: s, promote: d = !1 }, h) {
    const f = j3[n];
    return /* @__PURE__ */ e(
      A,
      {
        header: {
          title: a
        },
        action: i ? {
          label: i,
          variant: d ? "promote" : "default",
          onClick: s
        } : void 0,
        ref: h,
        children: /* @__PURE__ */ t("div", { className: "relative flex min-h-28 flex-1", children: [
          /* @__PURE__ */ e(f, { className: "absolute -top-8 right-0 z-10" }),
          /* @__PURE__ */ e("p", { className: "flex w-3/4 text-xl font-semibold", children: o })
        ] })
      }
    );
  }
), Hn = p(
  {
    name: "ScrollArea",
    type: "layout"
  },
  Z
);
export {
  gn as AreaChartWidget,
  un as AutoGrid,
  wn as BarChartWidget,
  _t as Calendar,
  Mn as CategoryBarSection,
  zn as Dashboard,
  Ot as DetailsItem,
  ln as DetailsItemsList,
  fn as Dialog,
  Sn as EventsList,
  L3 as IconText,
  bn as IconTextsList,
  yn as IndicatorsList,
  rn as InfoPaneLayout,
  en as Input,
  pn as LineChartWidget,
  tn as Menu,
  an as NumberInput,
  mn as PieChartWidget,
  Hn as ScrollArea,
  nn as SearchBar,
  Vt as Select,
  sn as Sidebar,
  on as SidebarHeader,
  vn as Split,
  hn as Stack,
  Cn as SummariesWidget,
  dn as Tabs,
  Gt as TagsList,
  Bn as TasksList,
  J3 as Textarea,
  Rn as TimeStatus,
  _n as TwoColumnsList,
  cn as User,
  xn as VerticalBarChartWidget,
  Lt as VerticalSeparator,
  Fn as Weekdays,
  A as Widget,
  Nn as WidgetEmptyState,
  An as WidgetStrip,
  Vn as useForm
};
