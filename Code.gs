const SHEET_NAME = 'PENGHANTARAN';

function doGet() {
  const sh = getSheet_();
  const values = sh.getDataRange().getDisplayValues();
  const data = values.slice(1).filter(r => r[1]).map(r => ({
    timestamp:r[0], nama:r[1], kelas:r[2], tugasan:r[3], masyarakat:r[4], link:r[5], status:r[6], tp:r[7], catatan:r[8]
  })).reverse();
  return json_({ok:true,data:data});
}

function doPost(e) {
  try {
    const d = JSON.parse(e.postData.contents || '{}');
    if (!d.nama || !d.kelas || !d.tugasan || !d.masyarakat || !d.link) throw new Error('Maklumat tidak lengkap');
    if (!/^https:\/\//i.test(d.link)) throw new Error('Pautan Canva tidak sah');
    const sh = getSheet_();
    sh.appendRow([new Date(), d.nama, d.kelas, d.tugasan, d.masyarakat, d.link, 'Belum Semak', '', '']);
    return json_({ok:true,message:'Berjaya dihantar'});
  } catch(err) { return json_({ok:false,error:String(err.message||err)}); }
}

function getSheet_(){
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sh = ss.getSheetByName(SHEET_NAME);
  if (!sh) sh = ss.insertSheet(SHEET_NAME);
  if (sh.getLastRow() === 0) {
    sh.appendRow(['Tarikh & Masa','Nama Murid','Kelas','Tugasan','Masyarakat','Link Canva','Status Semakan','TP / Markah','Catatan Guru']);
    sh.setFrozenRows(1);
  }
  return sh;
}
function json_(obj){return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);}
