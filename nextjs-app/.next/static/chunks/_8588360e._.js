(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/_8588360e._.js", {

"[project]/app/components/Header.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
const Header = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "header",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
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
_c = Header;
const __TURBOPACK__default__export__ = Header;
var _c;
__turbopack_context__.k.register(_c, "Header");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/components/Timetable.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
const Timetable = ({ busSchedule, currentRoute, isHoliday, isSunday, nextBusDeparture, minutesToNextBus })=>{
    if (!busSchedule || !busSchedule[currentRoute]) {
        console.error("エラー: 選択されたルートの時刻表データが見つかりません");
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: "本日の運行はありません"
        }, void 0, false, {
            fileName: "[project]/app/components/Timetable.tsx",
            lineNumber: 39,
            columnNumber: 12
        }, this);
    }
    if (schedule.length === 0) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
            className: rowClass,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                    children: timeStr
                }, void 0, false, {
                    fileName: "[project]/app/components/Timetable.tsx",
                    lineNumber: 73,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "card",
        id: "timetable-container",
        style: {
            display: 'block'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                children: "本日の時刻表"
            }, void 0, false, {
                fileName: "[project]/app/components/Timetable.tsx",
                lineNumber: 81,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                className: "timetable",
                id: "timetable",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
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
_c = Timetable;
const __TURBOPACK__default__export__ = Timetable;
var _c;
__turbopack_context__.k.register(_c, "Timetable");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/components/StatusDisplay.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        id: "status-container",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `status ${operatingStatus}`,
                children: statusText
            }, void 0, false, {
                fileName: "[project]/app/components/StatusDisplay.tsx",
                lineNumber: 33,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
_c = StatusDisplay;
const __TURBOPACK__default__export__ = StatusDisplay;
var _c;
__turbopack_context__.k.register(_c, "StatusDisplay");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/components/RouteSelector.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
'use client';
;
const RouteSelector = ({ currentRoute, setRoute })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "route-selector",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: `route-btn route-orange ${currentRoute === 'orange' ? 'active' : ''}`,
                onClick: ()=>setRoute('orange'),
                children: "オレンジコース"
            }, void 0, false, {
                fileName: "[project]/app/components/RouteSelector.tsx",
                lineNumber: 13,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: `route-btn route-green ${currentRoute === 'green' ? 'active' : ''}`,
                onClick: ()=>setRoute('green'),
                children: "グリーンコース"
            }, void 0, false, {
                fileName: "[project]/app/components/RouteSelector.tsx",
                lineNumber: 19,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
_c = RouteSelector;
const __TURBOPACK__default__export__ = RouteSelector;
var _c;
__turbopack_context__.k.register(_c, "RouteSelector");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Home)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/Header.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Timetable$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/Timetable.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$StatusDisplay$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/StatusDisplay.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$RouteSelector$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/RouteSelector.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
const GAS_WEB_APP_URL = 'https://script.google.com/macros/s/AKfycbyir1J2OKNsoaOqaA8M8i3L13E398n6HNOChTWRb-RZd-LrkLwVNeg3zu1Kl8vnHakMfQ/exec'; // APIはこれでお願いします
function Home() {
    _s();
    const [busSchedule, setBusSchedule] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [currentRoute, setCurrentRoute] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('orange');
    const [isHoliday, setIsHoliday] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isSunday, setIsSunday] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [nextBusDeparture, setNextBusDeparture] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [minutesToNextBus, setMinutesToNextBus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [operatingStatus, setOperatingStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('unknown');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
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
            const updateNextBusInfo = {
                "Home.useEffect.updateNextBusInfo": ()=>{
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
                }
            }["Home.useEffect.updateNextBusInfo"];
            const processScheduleData = {
                "Home.useEffect.processScheduleData": (data)=>{
                    console.log("データ処理を開始します:", data);
                    // 新しいGASスクリプトの形式に合わせてデータを処理
                    const extractRouteData = {
                        "Home.useEffect.processScheduleData.extractRouteData": (routeType, dayType)=>{
                            return data["Sheet1"].filter({
                                "Home.useEffect.processScheduleData.extractRouteData": (row)=>row.route === routeType && row.day_type === dayType
                            }["Home.useEffect.processScheduleData.extractRouteData"]).map({
                                "Home.useEffect.processScheduleData.extractRouteData": (row)=>row.time
                            }["Home.useEffect.processScheduleData.extractRouteData"]).sort();
                        }
                    }["Home.useEffect.processScheduleData.extractRouteData"];
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
            }["Home.useEffect.processScheduleData"];
            const useFallbackData = {
                "Home.useEffect.useFallbackData": ()=>{
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
                }
            }["Home.useEffect.useFallbackData"];
            fetchBusSchedule();
            checkIfHoliday();
            updateNextBusInfo();
        }
    }["Home.useEffect"], [
        currentRoute,
        isHoliday,
        isSunday
    ]);
    const setRoute = (route)=>{
        setCurrentRoute(route);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 209,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$RouteSelector$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                currentRoute: currentRoute,
                setRoute: setRoute
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 210,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$StatusDisplay$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                operatingStatus: operatingStatus,
                nextBusDeparture: nextBusDeparture,
                minutesToNextBus: minutesToNextBus
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 211,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Timetable$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
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
_s(Home, "yDYRJ2iqhZnSFd9yTHKHaRPEAaY=");
_c = Home;
var _c;
__turbopack_context__.k.register(_c, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type) return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch(type){
            case REACT_FRAGMENT_TYPE:
                return "Fragment";
            case REACT_PORTAL_TYPE:
                return "Portal";
            case REACT_PROFILER_TYPE:
                return "Profiler";
            case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
            case REACT_SUSPENSE_TYPE:
                return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
        }
        if ("object" === typeof type) switch("number" === typeof type.tag && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof){
            case REACT_CONTEXT_TYPE:
                return (type.displayName || "Context") + ".Provider";
            case REACT_CONSUMER_TYPE:
                return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
                var innerType = type.render;
                type = type.displayName;
                type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
                return type;
            case REACT_MEMO_TYPE:
                return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
                innerType = type._payload;
                type = type._init;
                try {
                    return getComponentNameFromType(type(innerType));
                } catch (x) {}
        }
        return null;
    }
    function testStringCoercion(value) {
        return "" + value;
    }
    function checkKeyStringCoercion(value) {
        try {
            testStringCoercion(value);
            var JSCompiler_inline_result = !1;
        } catch (e) {
            JSCompiler_inline_result = !0;
        }
        if (JSCompiler_inline_result) {
            JSCompiler_inline_result = console;
            var JSCompiler_temp_const = JSCompiler_inline_result.error;
            var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            JSCompiler_temp_const.call(JSCompiler_inline_result, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", JSCompiler_inline_result$jscomp$0);
            return testStringCoercion(value);
        }
    }
    function getTaskName(type) {
        if (type === REACT_FRAGMENT_TYPE) return "<>";
        if ("object" === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE) return "<...>";
        try {
            var name = getComponentNameFromType(type);
            return name ? "<" + name + ">" : "<...>";
        } catch (x) {
            return "<...>";
        }
    }
    function getOwner() {
        var dispatcher = ReactSharedInternals.A;
        return null === dispatcher ? null : dispatcher.getOwner();
    }
    function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
            if (getter && getter.isReactWarning) return !1;
        }
        return void 0 !== config.key;
    }
    function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
            specialPropKeyWarningShown || (specialPropKeyWarningShown = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", displayName));
        }
        warnAboutAccessingKey.isReactWarning = !0;
        Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: !0
        });
    }
    function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
    }
    function ReactElement(type, key, self, source, owner, props, debugStack, debugTask) {
        self = props.ref;
        type = {
            $$typeof: REACT_ELEMENT_TYPE,
            type: type,
            key: key,
            props: props,
            _owner: owner
        };
        null !== (void 0 !== self ? self : null) ? Object.defineProperty(type, "ref", {
            enumerable: !1,
            get: elementRefGetterWithDeprecationWarning
        }) : Object.defineProperty(type, "ref", {
            enumerable: !1,
            value: null
        });
        type._store = {};
        Object.defineProperty(type._store, "validated", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: 0
        });
        Object.defineProperty(type, "_debugInfo", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: null
        });
        Object.defineProperty(type, "_debugStack", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugStack
        });
        Object.defineProperty(type, "_debugTask", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugTask
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
    }
    function jsxDEVImpl(type, config, maybeKey, isStaticChildren, source, self, debugStack, debugTask) {
        var children = config.children;
        if (void 0 !== children) if (isStaticChildren) if (isArrayImpl(children)) {
            for(isStaticChildren = 0; isStaticChildren < children.length; isStaticChildren++)validateChildKeys(children[isStaticChildren]);
            Object.freeze && Object.freeze(children);
        } else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
        else validateChildKeys(children);
        if (hasOwnProperty.call(config, "key")) {
            children = getComponentNameFromType(type);
            var keys = Object.keys(config).filter(function(k) {
                return "key" !== k;
            });
            isStaticChildren = 0 < keys.length ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
            didWarnAboutKeySpread[children + isStaticChildren] || (keys = 0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}", console.error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />', isStaticChildren, children, keys, children), didWarnAboutKeySpread[children + isStaticChildren] = !0);
        }
        children = null;
        void 0 !== maybeKey && (checkKeyStringCoercion(maybeKey), children = "" + maybeKey);
        hasValidKey(config) && (checkKeyStringCoercion(config.key), children = "" + config.key);
        if ("key" in config) {
            maybeKey = {};
            for(var propName in config)"key" !== propName && (maybeKey[propName] = config[propName]);
        } else maybeKey = config;
        children && defineKeyPropWarningGetter(maybeKey, "function" === typeof type ? type.displayName || type.name || "Unknown" : type);
        return ReactElement(type, children, self, source, getOwner(), maybeKey, debugStack, debugTask);
    }
    function validateChildKeys(node) {
        "object" === typeof node && null !== node && node.$$typeof === REACT_ELEMENT_TYPE && node._store && (node._store.validated = 1);
    }
    var React = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"), REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler");
    Symbol.for("react.provider");
    var REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, hasOwnProperty = Object.prototype.hasOwnProperty, isArrayImpl = Array.isArray;
    new ("function" === typeof WeakMap ? WeakMap : Map)();
    var createTask = console.createTask ? console.createTask : function() {
        return null;
    }, specialPropKeyWarningShown;
    var didWarnAboutElementRef = {};
    var didWarnAboutKeySpread = {};
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.jsxDEV = function(type, config, maybeKey, isStaticChildren, source, self) {
        return jsxDEVImpl(type, config, maybeKey, isStaticChildren, source, self, Error("react-stack-top-frame"), createTask(getTaskName(type)));
    };
}();
}}),
"[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) {
    "TURBOPACK unreachable";
} else {
    module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)");
}
}}),
}]);

//# sourceMappingURL=_8588360e._.js.map