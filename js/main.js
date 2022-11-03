// sự kiện load xong trang web chạy hàm
window.addEventListener("load", function() {
    truncateCardTitle();
});

function truncateCardTitle() {
    var cardList = document.getElementsByClassName("card-title");
    for(var i = 0; i < cardList.length; i++) {
        // lấy nội dung bên trong thẻ con đó
        var text = cardList[i].innerHTML;
        // tự nhiên 35 bị lỗi chắc do format
        // var newText = truncateString(text, 35);
        var newText = truncateString(text, 86);
        // thay đổi nội dung cho thẻ đó
        cardList[i].innerHTML = newText;
    }
}

function truncateString(str, num) {
    if(str.length > num) {
        // slice dùng để cắt chuỗi
        // vị trí bắt đầu -> số lượng kí tự
        // nếu vượt quá sẽ được thay thế bằng chuỗi ...
        return str.slice(0, num) + "...";
    } else {
        return str;
    }
}

// SỰ KIỆN SIDEBAR MINI
var toggleBtn = document.querySelector('.sidebarMini__button');
var sidebarMini = document.querySelector('.sidebarMini');
var switchBtn = document.querySelector('#checkbox');

toggleBtn.addEventListener('click', function() {
    // toggle: nếu có class đó thì sẽ xóa | nếu chưa thì thêm
    sidebarMini.classList.toggle('is-opened');
});

switchBtn.addEventListener('click', function() {
    document.querySelector('body').classList.toggle('darkMode');
});