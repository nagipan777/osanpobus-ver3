function doGet() {
    try {
        var SPREADSHEET_ID = '13MQSno_jn1XYaPkmeeuwZzRsa62I9pVeiPXjS7AKC5I';  
        var spreadsheet = SpreadsheetApp.openById(SPREADSHEET_ID);
        var sheets = spreadsheet.getSheets();
        var result = {};

        sheets.forEach(sheet => {
            var sheetName = sheet.getName();
            var data = sheet.getDataRange().getDisplayValues(); // 🔥 修正: 表示される値をそのまま取得

            var headers = data.shift();
            var sheetData = data.map(row => {
                let rowObject = {};
                headers.forEach((header, colIndex) => {
                    rowObject[header] = row[colIndex];
                });
                return rowObject;
            });

            result[sheetName] = sheetData;
        });

        var jsonResponse = JSON.stringify(result);

        var output = ContentService.createTextOutput(jsonResponse);
        output.setMimeType(ContentService.MimeType.JSON);
        
        // **🚀 CORS ヘッダーを追加**
        output.setHeader("Access-Control-Allow-Origin", "*");
        output.setHeader("Access-Control-Allow-Methods", "GET");

        return output;
    } catch (e) {
        return ContentService.createTextOutput(JSON.stringify({ error: e.toString() }))
            .setMimeType(ContentService.MimeType.JSON);
    }
}