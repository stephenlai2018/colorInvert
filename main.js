var cvs = document.querySelector("#cvs");
var ctx = cvs.getContext("2d");

// 載入影像
var img = new Image();
img.src = "landscape.jpg";
img.onload = function() { // 註冊 load 事件, 圖片載入完成後, 才做繪製
    ctx.drawImage(this, 0, 0, cvs.width, cvs.height);
};

function invertColor() {
    var pixels = ctx.getImageData(0, 0, cvs.width, cvs.height); // ImageData 物件
    var data = pixels.data; // 一個像素佔據 4 個資料 (bytes) = r, g, b, a (範圍 0~255)
    for (var i = 0; i < data.length; i += 4) {
        data[ i ] = 255 - data[i]; // 紅
        data[i + 1] = 255 - data[ i + 1 ]; // 綠
        data[ i + 2 ] = 255 - data [ i + 2 ]; // 藍
    }
    ctx.putImageData(pixels, 0, 0);
}
