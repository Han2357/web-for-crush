$(document).ready(function() {
    // process bar
    setTimeout(function() {
        firstQuestion();
        $('.spinner').fadeOut();
        $('#preloader').delay(350).fadeOut('slow');
        $('body').delay(350).css({
            'overflow': 'visible'
        });
    }, 600);
})

function firstQuestion(){
    
    $('.content').hide();
    Swal.fire({
        title: 'Helloooo',
        text: 'Mới đây mà tui crush mấy người được 5 năm rồi đó',
        text: 'Không biết bị bỏ bùa hay sao nhưng mà hàm số tình yêu này là đồng biến, có tăng không giảm', 
        text: 'Bây giờ chỉ khác lúc trước ở 1 điểm',
        text: 'Đó là thay vì mong muốn chiếm hữu, tui chỉ muốn được góp mặt trong cuộc sống của mấy người thôi',
        text: 'Với vai trò gì cũng được, miễn mấy người vui là tui vui theo rồi'
        text: 'Tui có 1 câu hỏi, phải trả lời thật lòng đó nha',
        imageUrl: 'img/cuteCat.jpg',
        imageWidth: 300,
        imageHeight: 300,
        background: '#fff url("img/iput-bg.jpg")',
        imageAlt: 'Custom image',
      }).then(function(){
        $('.content').show(200);
      })
}

 // switch button position
 function switchButton() {
    var audio = new Audio('sound/duck.mp3');
    audio.play();
    var leftNo = $('#no').css("left");
    var topNO = $('#no').css("top");
    var leftY = $('#yes').css("left");
    var topY = $('#yes').css("top");
    $('#no').css("left", leftY);
    $('#no').css("top", topY);
    $('#yes').css("left", leftNo);
    $('#yes').css("top", topNO);
}
// move random button póition
function moveButton() {
    var audio = new Audio('sound/Swish1.mp3');
    audio.play();
    if (screen.width<=600) {
        var x = Math.random() * 300;
        var y = Math.random() * 500;
    } else{
        var x = Math.random() * 500;
        var y = Math.random() * 500;
    }
    var left = x + 'px';
    var top = y + 'px';
    $('#no').css("left", left);
    $('#no').css("top", top);
}


var n = 0;
$('#no').mousemove(function() {
    if (n < 1)
        switchButton();
    if (n > 1)
        moveButton();
    n++;
});
$('#no').click(() => {
    if (screen.width>=900)
        switchButton();
})

// generate text in input
function textGenerate() {
    var n = "";
    var text = " Tại vì cậu đẹp trai vl :<<<<<<< ";
    var a = Array.from(text);
    var textVal = $('#txtReason').val() ? $('#txtReason').val() : "";
    var count = textVal.length;
    if (count > 0) {
        for (let i = 1; i <= count; i++) {
            n = n + a[i];
            if (i == text.length + 1) {
                $('#txtReason').val("");
                n = "";
                break;
            }
        }
    }
    $('#txtReason').val(n);
    setTimeout("textGenerate()", 1);
}

// show popup
$('#yes').click(function() {
    var audio = new Audio('sound/tick.mp3');
    audio.play();
    Swal.fire({
        title: 'Muốn biết lí do tui thích mấy người thì gõ phím bất kì đi',
        html: true,
        width: 900,
        padding: '3em',
        html: "<input type='text' class='form-control' id='txtReason' onmousemove=textGenerate()  placeholder='Why?'>",
        background: '#fff url("img/iput-bg.jpg")',
        backdrop: `
              rgba(0,0,123,0.4)
              url("img/giphy2.gif")
              left top
              no-repeat
            `,
        showCancelButton: true,
        confirmButtonColor: '#fe8a71',
        cancelButtonColor: '#f6cd61',
        confirmButtonText: 'Vậy đó hả'
    }).then((result) => {
        if (result.value) {
            Swal.fire({
                width: 900,
                confirmButtonText: 'Okiiiii lun <3',
                background: '#fff url("img/iput-bg.jpg")',
                title: 'Ò vậy đó',
                text: "If Anything Happens, I Love You <3",
                text: "Rồi giờ chần chờ gì nữa mà không inbox cho tui"
                confirmButtonColor: '#83d0c9',
                onClose: () => {
                    window.location = 'http://zalo.me/0939365890';
                  }
            })
        }
    })
})
