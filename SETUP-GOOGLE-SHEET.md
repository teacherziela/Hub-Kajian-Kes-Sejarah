# SETUP GOOGLE SHEET — HUB KAJIAN KES

Hub ini ialah GitHub Pages biasa, BUKAN ChatGPT Site.

## 1. Sediakan Google Sheet
Buka fail Google Sheet `Hub Kajian Kes` yang akan digunakan. Pergi ke **Extensions → Apps Script**.

## 2. Masukkan Apps Script
Padam kod contoh dalam `Code.gs`, kemudian salin SEMUA kandungan fail `Code.gs` daripada folder GitHub ini. Tekan Save.

## 3. Deploy sebagai Web App
Klik **Deploy → New deployment → Web app**.
- Execute as: **Me**
- Who has access: **Anyone**
Kemudian Deploy dan benarkan permission. Salin URL yang berakhir dengan `/exec`.

## 4. Sambung GitHub kepada Sheet
Buka `index.html`. Cari:
`const API_URL='PASTE_APPS_SCRIPT_WEB_APP_URL_HERE';`
Gantikan teks itu dengan URL `/exec` tadi. Contoh:
`const API_URL='https://script.google.com/macros/s/XXXXXXXX/exec';`
Commit changes.

## 5. Hidupkan GitHub Pages
Repository → **Settings → Pages → Deploy from a branch → main / root → Save**.
Selepas laman hidup, cuba guna telefon/incognito yang tidak login GitHub untuk pastikan murid boleh buka.

## 6. Sambungkan A-Borneo-Village
Apabila URL Hub ini sudah hidup, butang `Hantar Kajian Kes` dalam A-Borneo-Village boleh ditukar kepada URL Hub + `#hantar`.

Data akan disimpan dalam tab `PENGHANTARAN` dengan lajur: Tarikh & Masa, Nama Murid, Kelas, Tugasan, Masyarakat, Link Canva, Status Semakan, TP/Markah, Catatan Guru.
