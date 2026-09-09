/**
 * ==============================================================================
 * MÃ NGUỒN JAVASCRIPT CHÍNH CHO PORTFOLIO CỦA ĐOÀN CÔNG KHOA
 * ==============================================================================
 * Danh mục chức năng:
 *   1. Khởi tạo thư viện biểu tượng (Lucide Icons)
 *   2. Hiệu ứng làm mờ và đổi nền Navbar khi cuộn trang (Sticky Navbar)
 *   3. Điều khiển menu đóng / mở trên màn hình điện thoại di động (Mobile Menu)
 *   4. Tự động làm sáng mục Menu tương ứng với phần đang xem (Scroll Spy)
 *   5. Nút bấm 1-Click sao chép nhanh địa chỉ Email vào bộ nhớ tạm
 *   6. Xử lý gửi Form liên hệ trực tiếp không cần server (Web3Forms API)
 *   7. Điều khiển bật / tắt Popup Modal sơ đồ kiến trúc vi dịch vụ JobRadar
 * ==============================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  // [1] Khởi tạo biểu tượng Lucide Icons
  if (window.lucide) {
    window.lucide.createIcons();
  }

  // [2] Hiệu ứng đổi màu nền Navbar khi cuộn trang
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      navbar.classList.add('header-scrolled');
    } else {
      navbar.classList.remove('header-scrolled');
    }
  });

  // [3] Điều khiển menu thả xuống trên điện thoại di động (Mobile Menu)
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const menuIconOpen = document.getElementById('menu-icon-open');
  const menuIconClose = document.getElementById('menu-icon-close');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      const isHidden = mobileMenu.classList.contains('hidden');
      if (isHidden) {
        mobileMenu.classList.remove('hidden');
        menuIconOpen.classList.add('hidden');
        menuIconClose.classList.remove('hidden');
      } else {
        mobileMenu.classList.add('hidden');
        menuIconOpen.classList.remove('hidden');
        menuIconClose.classList.add('hidden');
      }
    });

    // Close mobile menu upon clicking any link
    mobileNavLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        menuIconOpen.classList.remove('hidden');
        menuIconClose.classList.add('hidden');
      });
    });
  }

  // [4] Tự động làm sáng mục Menu tương ứng với phần đang xem (Scroll Spy qua IntersectionObserver)
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  const observerOptions = {
    root: null,
    rootMargin: '-20% 0px -70% 0px',
    threshold: 0
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const currentId = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          if (link.getAttribute('href') === `#${currentId}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  }, observerOptions);

  sections.forEach(section => observer.observe(section));

  // [5] Tính năng 1-Click sao chép nhanh địa chỉ Email vào bộ nhớ tạm
  const copyEmailBtn = document.getElementById('copy-email-btn');
  const copyBtnText = document.getElementById('copy-btn-text');
  const heroCopyEmailBtn = document.getElementById('hero-copy-email-btn');
  const heroCopyTooltip = document.getElementById('hero-copy-tooltip');
  
  // Địa chỉ email của bạn (Nếu sau này đổi email, bạn chỉ cần sửa giá trị này)
  const myEmail = 'doancongkhoa2008@gmail.com';

  function copyToClipboard(text, onSuccess) {
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(text).then(onSuccess).catch(fallbackCopy);
    } else {
      fallbackCopy();
    }

    function fallbackCopy() {
      const textArea = document.createElement('textarea');
      textArea.value = text;
      textArea.style.position = 'fixed';
      textArea.style.opacity = '0';
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      try {
        document.execCommand('copy');
        onSuccess();
      } catch (err) {
        console.error('Không thể sao chép văn bản:', err);
      }
      document.body.removeChild(textArea);
    }
  }

  // Nút sao chép tại phần Contact
  if (copyEmailBtn) {
    copyEmailBtn.addEventListener('click', () => {
      copyToClipboard(myEmail, () => {
        const originalContent = copyBtnText.textContent;
        copyBtnText.textContent = 'Copied!';
        copyEmailBtn.classList.add('text-emerald-300', 'border-emerald-500/50');

        setTimeout(() => {
          copyBtnText.textContent = originalContent;
          copyEmailBtn.classList.remove('text-emerald-300', 'border-emerald-500/50');
        }, 2500);
      });
    });
  }

  // Nút sao chép tại phần Hero (Đầu trang)
  if (heroCopyEmailBtn && heroCopyTooltip) {
    heroCopyEmailBtn.addEventListener('click', () => {
      copyToClipboard(myEmail, () => {
        heroCopyTooltip.textContent = 'Copied!';
        heroCopyTooltip.classList.remove('opacity-0');
        heroCopyTooltip.classList.add('opacity-100');

        setTimeout(() => {
          heroCopyTooltip.textContent = 'Copy email';
          heroCopyTooltip.classList.add('opacity-0');
          heroCopyTooltip.classList.remove('opacity-100');
        }, 2500);
      });
    });
  }

  // [6] Xử lý gửi Form liên hệ trực tiếp serverless qua Web3Forms API
  const contactForm = document.getElementById('contact-form');
  const submitBtn = document.getElementById('submit-btn');
  const btnText = document.getElementById('btn-text');
  const formFeedback = document.getElementById('form-feedback');

  if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();

      // Hiển thị trạng thái đang gửi
      submitBtn.disabled = true;
      btnText.textContent = 'Sending Message...';
      submitBtn.classList.add('opacity-75', 'cursor-wait');

      const formData = new FormData(contactForm);
      const accessKey = formData.get('access_key');

      // Hàm hiển thị thông báo kết quả gửi thư
      function showFeedback(type, message) {
        formFeedback.classList.remove('hidden', 'bg-emerald-950/60', 'border-emerald-500/50', 'text-emerald-300', 'bg-rose-950/60', 'border-rose-500/50', 'text-rose-300');
        if (type === 'success') {
          formFeedback.classList.add('bg-emerald-950/60', 'border', 'border-emerald-500/50', 'text-emerald-300');
        } else {
          formFeedback.classList.add('bg-rose-950/60', 'border', 'border-rose-500/50', 'text-rose-300');
        }
        formFeedback.innerHTML = message;
      }

      // Hướng dẫn nếu chưa cấu hình Access Key Web3Forms
      if (!accessKey || accessKey === 'YOUR_WEB3FORMS_ACCESS_KEY') {
        setTimeout(() => {
          showFeedback('error', '⚠️ <strong>Cần cấu hình:</strong> Vui lòng thay thế <code class="text-amber-300">YOUR_WEB3FORMS_ACCESS_KEY</code> trong file <code class="text-amber-300">index.html</code> bằng Access Key miễn phí từ <a href="https://web3forms.com" target="_blank" class="underline font-bold">web3forms.com</a>. (Hoặc bạn có thể gửi trực tiếp vào email <a href="mailto:doancongkhoa2008@gmail.com" class="underline">doancongkhoa2008@gmail.com</a>!)');
          submitBtn.disabled = false;
          btnText.textContent = 'Send Direct Message';
          submitBtn.classList.remove('opacity-75', 'cursor-wait');
        }, 600);
        return;
      }

      try {
        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          body: formData
        });

        const data = await response.json();

        if (response.status === 200 && data.success) {
          showFeedback('success', '✔ <strong>Tin nhắn đã được gửi thành công!</strong> Cảm ơn bạn đã liên hệ. Tôi sẽ phản hồi vào email của bạn trong thời gian sớm nhất.');
          contactForm.reset();
        } else {
          showFeedback('error', `❌ <strong>Lỗi:</strong> ${data.message || 'Có lỗi xảy ra. Vui lòng gửi trực tiếp vào email doancongkhoa2008@gmail.com'}`);
        }
      } catch (err) {
        console.error('Lỗi khi gửi form:', err);
        showFeedback('error', '❌ <strong>Lỗi kết nối:</strong> Không thể gửi form. Vui lòng gửi trực tiếp qua email: <a href="mailto:doancongkhoa2008@gmail.com" class="underline">doancongkhoa2008@gmail.com</a>.');
      } finally {
        submitBtn.disabled = false;
        btnText.textContent = 'Send Direct Message';
        submitBtn.classList.remove('opacity-75', 'cursor-wait');
      }
    });
  }
});

// [7] Điều khiển bật / tắt Popup Modal sơ đồ kiến trúc vi dịch vụ JobRadar
// (Đặt ở phạm vi window để gọi trực tiếp từ onclick="toggleArchModal()" trong file HTML)
window.toggleArchModal = function () {
  const modal = document.getElementById('arch-modal');
  if (modal) {
    const isHidden = modal.classList.contains('hidden');
    if (isHidden) {
      modal.classList.remove('hidden');
      document.body.style.overflow = 'hidden'; // Khóa cuộn trang khi modal đang mở
    } else {
      modal.classList.add('hidden');
      document.body.style.overflow = ''; // Mở lại cuộn trang khi đóng modal
    }
  }
};

// Đóng modal khi bấm phím ESC
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    const modal = document.getElementById('arch-modal');
    if (modal && !modal.classList.contains('hidden')) {
      window.toggleArchModal();
    }
  }
});

// Đóng modal khi bấm chuột vào vùng nền đen bên ngoài
document.addEventListener('click', (e) => {
  const modal = document.getElementById('arch-modal');
  if (e.target === modal) {
    window.toggleArchModal();
  }
});
