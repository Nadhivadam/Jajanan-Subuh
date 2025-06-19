<?php
<!DOCTYPE html>
<html>
<head>
    <title>Transaksi Pembelian</title>
    <style>
        body { font-family: Arial, sans-serif; }
        .container { width: 95%; margin: 20px auto; }
        .section { margin-bottom: 20px; }
        .section label { display: inline-block; width: 120px; }
        table { width: 100%; border-collapse: collapse; margin-top: 10px; }
        th, td { border: 1px solid #888; padding: 6px 8px; text-align: center; }
        th { background: #b2dfdb; }
        .total { font-weight: bold; background: #e0f2f1; }
        .actions { margin-top: 20px; }
        .actions button { padding: 8px 16px; }
    </style>
</head>
<body>
<div class="container">
    <h2>Transaksi Pembelian</h2>
    <form method="post" action="">
        <div class="section">
            <h3>Supplier</h3>
            <label>Kode Supplier:</label> <input type="text" name="kode_supplier" value="1214001"><br>
            <label>Nama:</label> <input type="text" name="nama_supplier" value="(KH) KUE BASAH"><br>
            <label>Alamat:</label> <input type="text" name="alamat" value="KUE BASAH"><br>
            <label>No Telp:</label> <input type="text" name="telp" value=""><br>
            <label>Outstanding:</label> <input type="text" name="outstanding" value="26,979,302,429.25"><br>
        </div>
        <div class="section">
            <h3>Detail Nota</h3>
            <label>No Nota:</label> <input type="text" name="no_nota" value="F01190625000083"><br>
            <label>Tgl Order:</label> <input type="date" name="tgl_order" value=""><br>
            <label>Tgl Terima:</label> <input type="date" name="tgl_terima" value="2025-06-19"><br>
            <label>Pembayaran:</label> <input type="text" name="pembayaran" value="Lainnya"><br>
        </div>
        <div class="section">
            <h3>Item Pembelian</h3>
            <table>
                <tr>
                    <th>No</th>
                    <th>Kode Barang</th>
                    <th>Nama Barang</th>
                    <th>Qty Pesan</th>
                    <th>Qty Terima</th>
                    <th>Harga Beli Sat</th>
                    <th>Jumlah</th>
                    <th>Diskon</th>
                    <th>Total</th>
                </tr>
                <tr>
                    <td>1</td>
                    <td><input type="text" name="kode_barang[]" value="00900394603"></td>
                    <td><input type="text" name="nama_barang[]" value="WAJIT NGORA DWM,"></td>
                    <td><input type="number" name="qty_pesan[]" value="0"></td>
                    <td><input type="number" name="qty_terima[]" value="40"></td>
                    <td><input type="number" name="harga_beli[]" value="2000"></td>
                    <td><input type="number" name="jumlah[]" value="80000"></td>
                    <td><input type="number" name="diskon[]" value="0"></td>
                    <td><input type="number" name="total[]" value="80000"></td>
                </tr>
            </table>
        </div>
        <div class="section">
            <label>Sub Total:</label> <input type="text" name="subtotal" value="80,000.00"><br>
            <label>Diskon:</label> <input type="text" name="diskon_total" value="0.00"><br>
            <label>Netto:</label> <input type="text" name="netto" value="80,000.00"><br>
            <label>Net + PPN:</label> <input type="text" name="net_ppn" value="80,000.00"><br>
        </div>
        <div class="actions">
            <button type="submit">Simpan</button>
            <button type="reset">Batal</button>
        </div>
    </form>
</div>
</body>
</html>