module.exports = {

"[externals]/next/dist/compiled/next-server/app-page.runtime.dev.js [external] (next/dist/compiled/next-server/app-page.runtime.dev.js, cjs)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page.runtime.dev.js"));

module.exports = mod;
}}),
"[project]/app/components/Header.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
const Header = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "header",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
            children: "蟹江町お散歩バス"
        }, void 0, false, {
            fileName: "[project]/app/components/Header.tsx",
            lineNumber: 6,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/components/Header.tsx",
        lineNumber: 5,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = Header;
}}),
"[project]/app/components/Timetable.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
const Timetable = ({ busSchedule, currentRoute, isHoliday, isSunday, nextBusDeparture, minutesToNextBus })=>{
    if (!busSchedule || !busSchedule[currentRoute]) {
        console.error("エラー: 選択されたルートの時刻表データが見つかりません");
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: "本日の運行はありません"
        }, void 0, false, {
            fileName: "[project]/app/components/Timetable.tsx",
            lineNumber: 15,
            columnNumber: 12
        }, this);
    }
    const now = new Date();
    const day = now.getDay();
    let schedule = [];
    let scheduleType = '平日';
    if (isHoliday) {
        schedule = busSchedule[currentRoute].holiday || [];
        scheduleType = '祝日';
    } else if (isSunday) {
        schedule = busSchedule[currentRoute].holiday || [];
        scheduleType = '日曜';
    } else if (day === 6) {
        schedule = busSchedule[currentRoute].weekday || [];
        scheduleType = '土曜';
    } else {
        schedule = busSchedule[currentRoute].weekday || [];
        scheduleType = '平日';
    }
    if (!Array.isArray(schedule)) {
        console.error("エラー: schedule が配列ではありません:", schedule);
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: "本日の運行はありません"
        }, void 0, false, {
            fileName: "[project]/app/components/Timetable.tsx",
            lineNumber: 39,
            columnNumber: 12
        }, this);
    }
    if (schedule.length === 0) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: "本日の運行はありません"
        }, void 0, false, {
            fileName: "[project]/app/components/Timetable.tsx",
            lineNumber: 43,
            columnNumber: 12
        }, this);
    }
    // 時刻表のヘッダー
    // 時刻表の内容を構築する前に、schedule が空でないことを確認
    const nowTime = new Date();
    const currentHour = nowTime.getHours();
    const currentMinute = nowTime.getMinutes();
    const currentTimeValue = currentHour * 60 + currentMinute;
    const tableRows = schedule.map((timeStr)=>{
        const [hours, minutes] = timeStr.split(':').map(Number);
        const busTimeValue = hours * 60 + minutes;
        let status = '';
        let rowClass = '';
        if (busTimeValue < currentTimeValue) {
            status = '出発済み';
        } else if (timeStr === nextBusDeparture) {
            status = `あと${minutesToNextBus}分`;
            rowClass = 'next';
        } else {
            const diff = busTimeValue - currentTimeValue;
            status = `あと${diff}分`;
        }
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
            className: rowClass,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                    children: timeStr
                }, void 0, false, {
                    fileName: "[project]/app/components/Timetable.tsx",
                    lineNumber: 73,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                    children: status
                }, void 0, false, {
                    fileName: "[project]/app/components/Timetable.tsx",
                    lineNumber: 74,
                    columnNumber: 9
                }, this)
            ]
        }, timeStr, true, {
            fileName: "[project]/app/components/Timetable.tsx",
            lineNumber: 72,
            columnNumber: 7
        }, this);
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "card",
        id: "timetable-container",
        style: {
            display: 'block'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                children: "本日の時刻表"
            }, void 0, false, {
                fileName: "[project]/app/components/Timetable.tsx",
                lineNumber: 81,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                className: "timetable",
                id: "timetable",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                    children: tableRows
                }, void 0, false, {
                    fileName: "[project]/app/components/Timetable.tsx",
                    lineNumber: 83,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/components/Timetable.tsx",
                lineNumber: 82,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/Timetable.tsx",
        lineNumber: 80,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = Timetable;
}}),
"[project]/app/components/StatusDisplay.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
const StatusDisplay = ({ operatingStatus, nextBusDeparture, minutesToNextBus })=>{
    let statusText = '';
    let nextBusText = '';
    switch(operatingStatus){
        case 'running':
            statusText = `本日は平日で運行しています`;
            nextBusText = `次のバスは ${nextBusDeparture} （あと${minutesToNextBus}分）`;
            break;
        case 'not-running':
            statusText = '本日は運休です';
            nextBusText = '本日は運休です';
            break;
        case 'day-ended':
            statusText = '本日の運行は終了しました';
            nextBusText = '本日の運行は終了しました';
            break;
        default:
            statusText = '読み込み中...';
            nextBusText = '次のバスを確認中...';
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        id: "status-container",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `status ${operatingStatus}`,
                children: statusText
            }, void 0, false, {
                fileName: "[project]/app/components/StatusDisplay.tsx",
                lineNumber: 33,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "next-bus",
                id: "next-bus-display",
                children: nextBusText
            }, void 0, false, {
                fileName: "[project]/app/components/StatusDisplay.tsx",
                lineNumber: 34,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/StatusDisplay.tsx",
        lineNumber: 32,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = StatusDisplay;
}}),
"[project]/app/components/RouteSelector.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
'use client';
;
const RouteSelector = ({ currentRoute, setRoute })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "route-selector",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: `route-btn route-orange ${currentRoute === 'orange' ? 'active' : ''}`,
                onClick: ()=>setRoute('orange'),
                children: "オレンジコース"
            }, void 0, false, {
                fileName: "[project]/app/components/RouteSelector.tsx",
                lineNumber: 13,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: `route-btn route-green ${currentRoute === 'green' ? 'active' : ''}`,
                onClick: ()=>setRoute('green'),
                children: "グリーンコース"
            }, void 0, false, {
                fileName: "[project]/app/components/RouteSelector.tsx",
                lineNumber: 19,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: `route-btn route-purple ${currentRoute === 'purple' ? 'active' : ''}`,
                onClick: ()=>setRoute('purple'),
                style: {
                    display: 'none'
                },
                children: "日曜コース"
            }, void 0, false, {
                fileName: "[project]/app/components/RouteSelector.tsx",
                lineNumber: 25,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/RouteSelector.tsx",
        lineNumber: 12,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = RouteSelector;
}}),
"[project]/app/page.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Home)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Header$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/Header.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Timetable$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/Timetable.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$StatusDisplay$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/StatusDisplay.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$RouteSelector$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/RouteSelector.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
const GAS_WEB_APP_URL = 'https://script.google.com/macros/s/AKfycbyir1J2OKNsoaOqaA8M8i3L13E398n6HNOChTWRb-RZd-LrkLwVNeg3zu1Kl8vnHakMfQ/exec'; // APIはこれでお願いします
function Home() {
    const [busSchedule, setBusSchedule] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [currentRoute, setCurrentRoute] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('orange');
    const [isHoliday, setIsHoliday] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isSunday, setIsSunday] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [nextBusDeparture, setNextBusDeparture] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [minutesToNextBus, setMinutesToNextBus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [operatingStatus, setOperatingStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('unknown');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        async function fetchBusSchedule() {
            try {
                console.log("バススケジュールデータの取得を開始します");
                // GASスクリプトからデータを直接取得（CORS対応済み）
                console.log("GASスクリプトから直接データを取得します");
                const response = await fetch(GAS_WEB_APP_URL, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json"
                    }
                });
                if (!response.ok) {
                    throw new Error(`HTTP Error: ${response.status}`);
                }
                const data = await response.json();
                console.log("取得したデータ:", data);
                // データを処理
                processScheduleData(data);
            } catch (error) {
                console.error('データ取得に失敗しました:', error);
                //errorContainerEl.textContent = `エラー: スプレッドシートデータの取得に失敗しました`;
                //errorContainerEl.style.display = 'block';
                //loadingEl.style.display = 'none';
                // フォールバック: ローカルデータを使用
                useFallbackData();
                return null;
            }
        }
        async function checkIfHoliday() {
            try {
                const today = new Date();
                const formattedDate = `${today.getFullYear()}-${(today.getMonth() + 1).toString().padStart(2, '0')}-${today.getDate().toString().padStart(2, '0')}`;
                // 簡易実装：祝日APIの代わりに手動で日付リストを管理
                const holidays = [
                    "2025-01-01",
                    "2025-02-11",
                    "2025-03-21",
                    "2025-04-29",
                    "2025-05-03",
                    "2025-05-05",
                    "2025-07-15",
                    "2025-08-11",
                    "2025-09-16",
                    "2025-09-23",
                    "2025-10-14",
                    "2025-11-03",
                    "2025-11-23",
                    "2025-12-23"
                ];
                setIsSunday(today.getDay() === 0); // 日曜日判定
                setIsHoliday(holidays.includes(formattedDate) && !isSunday); // 祝日判定（日曜日は除外）
                return {
                    isHoliday: isHoliday,
                    isSunday: isSunday
                };
            } catch (error) {
                console.error('祝日確認中にエラーが発生しました:', error);
                setIsHoliday(false);
                setIsSunday(false);
                return {
                    isHoliday: false,
                    isSunday: false
                };
            }
        }
        const updateNextBusInfo = ()=>{
            if (!busSchedule) return;
            const now = new Date();
            const day = now.getDay(); // 0:日, 1:月, ... 6:土
            const currentHour = now.getHours();
            const currentMinute = now.getMinutes();
            const currentTimeValue = currentHour * 60 + currentMinute; // 分単位での現在時刻
            // 運行スケジュールの選択（平日、土曜、日曜・祝日）
            let schedule;
            let scheduleType = '平日';
            if (isSunday) {
                schedule = busSchedule[currentRoute].holiday; // 日曜日専用スケジュール
                scheduleType = '日曜コース';
            } else if (isHoliday) {
                setOperatingStatus('not-running');
                return;
            } else {
                schedule = busSchedule[currentRoute].weekday;
            }
            if (!schedule || schedule.length === 0) {
                setOperatingStatus('not-running');
                return;
            }
            let nextBusTime = null;
            let minutesToNext = Infinity;
            for (const timeStr of schedule){
                const [hours, minutes] = timeStr.split(':').map(Number);
                const busTimeValue = hours * 60 + minutes; // 分単位でのバス時刻
                const diff = busTimeValue - currentTimeValue;
                if (diff > 0 && diff < minutesToNext) {
                    minutesToNext = diff;
                    nextBusTime = timeStr;
                }
            }
            if (!nextBusTime) {
                const now = new Date();
                const currentHour = now.getHours();
                if (currentHour < 24) {
                    setOperatingStatus('day-ended');
                    return;
                }
            }
            setNextBusDeparture(nextBusTime);
            setMinutesToNextBus(minutesToNext);
            setOperatingStatus('running');
        };
        const processScheduleData = (data)=>{
            console.log("データ処理を開始します:", data);
            // 新しいGASスクリプトの形式に合わせてデータを処理
            const extractRouteData = (routeType, dayType)=>{
                return data["Sheet1"].filter((row)=>row.route === routeType && row.day_type === dayType).map((row)=>row.time).sort();
            };
            const orangeWeekday = extractRouteData('orange', 'weekday');
            const orangeHoliday = extractRouteData('orange', 'holiday');
            const greenWeekday = extractRouteData('green', 'weekday');
            const greenHoliday = extractRouteData('green', 'holiday');
            setBusSchedule({
                orange: {
                    weekday: orangeWeekday,
                    holiday: orangeHoliday
                },
                green: {
                    weekday: greenWeekday,
                    holiday: greenHoliday
                }
            });
            console.log("バススケジュールを設定しました:", busSchedule);
        } // Ensure data processing is correct
        ;
        const useFallbackData = ()=>{
            console.log("フォールバックデータを使用します");
            // ここに静的なフォールバックデータを定義できます
            // 例: ハードコードされた時刻表
            const fallbackData = {
                orange: {
                    weekday: [
                        "9:00",
                        "10:30",
                        "12:00",
                        "13:30",
                        "15:00",
                        "16:30"
                    ],
                    holiday: [
                        "10:00",
                        "12:00",
                        "14:00",
                        "16:00"
                    ]
                },
                green: {
                    weekday: [
                        "9:15",
                        "10:45",
                        "12:15",
                        "13:45",
                        "15:15",
                        "16:45"
                    ],
                    holiday: [
                        "10:30",
                        "12:30",
                        "14:30",
                        "16:30"
                    ]
                }
            };
            setBusSchedule(fallbackData);
            console.log("フォールバックデータを設定しました");
        };
        fetchBusSchedule();
        checkIfHoliday();
        updateNextBusInfo();
    }, [
        currentRoute,
        isHoliday,
        isSunday
    ]);
    const setRoute = (route)=>{
        setCurrentRoute(route);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Header$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 209,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$RouteSelector$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                currentRoute: currentRoute,
                setRoute: setRoute
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 210,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$StatusDisplay$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                operatingStatus: operatingStatus,
                nextBusDeparture: nextBusDeparture,
                minutesToNextBus: minutesToNextBus
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 211,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Timetable$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                busSchedule: busSchedule,
                currentRoute: currentRoute,
                isHoliday: isHoliday,
                isSunday: isSunday,
                nextBusDeparture: nextBusDeparture,
                minutesToNextBus: minutesToNextBus
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 212,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/page.tsx",
        lineNumber: 208,
        columnNumber: 5
    }, this);
}
}}),
"[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
if ("TURBOPACK compile-time falsy", 0) {
    "TURBOPACK unreachable";
} else {
    if ("TURBOPACK compile-time falsy", 0) {
        "TURBOPACK unreachable";
    } else {
        if ("TURBOPACK compile-time truthy", 1) {
            module.exports = __turbopack_context__.r("[externals]/next/dist/compiled/next-server/app-page.runtime.dev.js [external] (next/dist/compiled/next-server/app-page.runtime.dev.js, cjs)");
        } else {
            "TURBOPACK unreachable";
        }
    }
} //# sourceMappingURL=module.compiled.js.map
}}),
"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].ReactJsxDevRuntime; //# sourceMappingURL=react-jsx-dev-runtime.js.map
}}),
"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].React; //# sourceMappingURL=react.js.map
}}),

};

//# sourceMappingURL=%5Broot%20of%20the%20server%5D__a3edfda3._.js.map