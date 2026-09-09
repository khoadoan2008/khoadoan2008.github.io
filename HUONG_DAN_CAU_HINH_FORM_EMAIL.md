# 📩 HƯỚNG DẪN CẤU HÌNH FORM LIÊN HỆ GỬI THẲNG VÀO GMAIL (WEB3FORMS)

> **Mục đích:** Giúp form *"Send Direct Message"* trên website `https://khoadoan.is-a.dev` hoạt động, khi nhà tuyển dụng gửi lời mời phỏng vấn hoặc tin nhắn, nội dung sẽ bay thẳng vào hòm thư Gmail của bạn.  
> **Chi phí:** Hoàn toàn **Miễn phí 100% trọn đời**, không cần dựng server backend.

---

## ⚡ 3 BƯỚC THỰC HIỆN NHANH (MẤT 1 PHÚT)

### Bước 1: Lấy mã Access Key miễn phí
1. Truy cập vào trang: **[https://web3forms.com](https://web3forms.com)**
2. Nhập email của bạn (ví dụ: `doancongkhoa2008@gmail.com`).
3. Bấm nút xanh **"Create Access Key"**.
4. Mở hộp thư Gmail của bạn, tìm email gửi từ Web3Forms và copy chuỗi mã Access Key.  
   *(Mã có dạng như: `a1b2c3d4-e5f6-7890-abcd-ef1234567890`)*.

---

### Bước 2: Dán Access Key vào file `index.html`
1. Mở file `K:\Project\portfolio\index.html`.
2. Dùng tổ hợp phím `Ctrl + F` tìm dòng chữ: **`YOUR_WEB3FORMS_ACCESS_KEY`** (khoảng dòng 1070).
3. Thay thế:
   ```html
   <input type="hidden" name="access_key" value="YOUR_WEB3FORMS_ACCESS_KEY">
   ```
   thành mã thật của bạn:
   ```html
   <input type="hidden" name="access_key" value="DÁN_MÃ_KEY_CỦA_BẠN_VÀO_ĐÂY">
   ```
4. Nhấn `Ctrl + S` để lưu file lại.

---

### Bước 3: Đẩy (Push) lên GitHub để cập nhật website
Mở PowerShell tại thư mục `K:\Project\portfolio` và chạy 3 lệnh sau:

```powershell
git add index.html
git commit -m "feat: setup web3forms direct email delivery"
git push origin main
```

---

## ✅ KIỂM TRA THỬ NGHIỆM
1. Mở trang web: `https://khoadoan.is-a.dev` (hoặc `https://khoadoan2008.github.io`).
2. Kéo xuống mục **Contact**, điền tên, email và một tin nhắn thử nghiệm rồi bấm **"Send Direct Message"**.
3. Website báo thông báo xanh *"Tin nhắn đã được gửi thành công!"*.
4. Mở Gmail của bạn, bạn sẽ thấy tin nhắn được gửi tới ngay lập tức!
