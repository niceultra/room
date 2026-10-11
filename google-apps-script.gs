const SPREADSHEET_ID = '1rkTaTUWLQrmbRNByajYZjslRQJVOTkClSMn3cDRKg6c';
const SHEET_NAME = 'Результаты';

function doPost(e) {
  const p = e.parameter || {};
  const sheet = SpreadsheetApp.openById(SPREADSHEET_ID).getSheetByName(SHEET_NAME);
  sheet.appendRow([
    new Date(),
    p.lastName || '',
    p.firstName || '',
    p.className || '',
    p.score || '',
    p.total || '',
    p.percent || '',
    p.attempts || '',
    p.mistakes || '',
    p.seconds || ''
  ]);
  return ContentService.createTextOutput('ok');
}

function doGet() {
  return ContentService.createTextOutput('logic-results-ready');
}