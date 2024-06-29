// Bat tat search bar
function toggleSearchBar() {
    var searchBar = document.getElementById('search-bar');
    if (searchBar.classList.contains('visible')) {
        searchBar.classList.remove('visible');
        setTimeout(function() {
            searchBar.style.display = 'none';
        }, 500); // Thời gian khớp với transition
    } else {
        searchBar.style.display = 'flex';
        setTimeout(function() {
            searchBar.classList.add('visible');
        }, 10); // Một chút thời gian để đảm bảo display đã được thiết lập
    }
}

// Bat tat menu mobile
function toggleMenu() {
    var menu = document.querySelector('.menu');
    menu.classList.toggle('active');
    var icon = document.getElementById('menu-mb');
    if (icon.classList.contains('ti-menu')) {
        icon.classList.add('icon-hidden'); // Ẩn icon hiện tại
        setTimeout(function() {
            icon.classList.remove('ti-menu');
            icon.classList.remove('icon-hidden'); // Hiển thị icon mới
            icon.classList.add('ti-close');
        }, 200); // Đợi 0.5s để hiệu ứng ẩn hoàn tất
    } else {
        icon.classList.add('icon-hidden'); // Ẩn icon hiện tại
        setTimeout(function() {
            icon.classList.remove('ti-close');
            icon.classList.remove('icon-hidden'); // Hiển thị icon mới
            icon.classList.add('ti-menu');
        }, 200); // Đợi 0.5s để hiệu ứng ẩn hoàn tất
    }
}

document.addEventListener('DOMContentLoaded', function() {
    var contactCard = document.querySelector('.contact-card');
    var menuIcon = document.getElementById('menu-mb');
    var closeIcon = document.querySelector('.ti-close');

    // Mở contact-card khi nhấn vào menu-icon
    menuIcon.onclick = function() {
        if (contactCard.classList.contains('open')) {
            contactCard.classList.remove('open');
        } else {
            contactCard.classList.add('open');
        }
    };

    // Đóng contact-card khi nhấn vào close-bar
    closeIcon.onclick = function() {
        contactCard.classList.remove('open');
    };
});
