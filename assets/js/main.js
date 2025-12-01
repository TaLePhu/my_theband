// 1. Lấy các phần tử
const modal = document.getElementById('modal-ticket');
const btns = document.querySelectorAll('.buy-tickets-btn'); // Nút 'Buy Tickets' ngoài modal
const closeBtns = document.querySelectorAll('.modal-close, .btn-close-modal'); // Các nút đóng

const sMenuBtn = document.querySelector('.s-menu-btn');
const navMenu = document.querySelector('.nav');

// 2. Hàm mở Modal

const openModal = () => {
    modal.style.display = 'flex'; // Hiển thị modal (ẩn)
    // Sau một chút delay (để trình duyệt nhận ra sự thay đổi display), thêm lớp 'show'
    setTimeout(() => {
        modal.classList.add('show');
    }, 10); 
};

function closeModal() {
    modal.classList.remove('show');
    // Đợi transition kết thúc (0.4s) rồi mới ẩn hoàn toàn
    setTimeout(() => {
        modal.style.display = 'none';
    }, 200);
};

btns.forEach(btn => {
    btn.onclick = openModal;
});

closeBtns.forEach(btn => {
    btn.onclick = closeModal;
});

// Đóng modal khi nhấp chuột ra ngoài (backdrop)
window.onclick = function(event) {
    if (event.target == modal) {
        closeModal();
    }
}

// Đóng mở nav khi click và btn Hamburger
sMenuBtn.onclick = function() {
    // Thêm class 'open' vào nav để hiển thị menu
    navMenu.classList.toggle('open'); 
}