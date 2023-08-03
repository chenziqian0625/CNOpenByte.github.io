/*
Copyright 2023 Yunmoan # ZGIT.
未使用第三方 UI 组件库.
仅供 OpenFrp 使用.
*/
window.onload = function () {
    console.log("███████╗ ██████╗ ██╗████████╗\n╚══███╔╝██╔════╝ ██║╚══██╔══╝\n  ███╔╝ ██║  ███╗██║   ██║   \n ███╔╝  ██║   ██║██║   ██║   \n███████╗╚██████╔╝██║   ██║  \n ╚══════╝ ╚═════╝ ╚═╝   ╚═╝   \n                             ");
    console.log("我们虽是小工作室，但我们欢迎你的到来！\n如果你有一定的技术，你想随我们一起奋斗，那就请加入我们吧！\n\n");
    console.log("至远·光辉信息技术 联系方式: campus@zyghit.cn");
    console.log("Copyright © 2016-2023 ZGIT Network & ZGIT.All rights reserved.");
    console.log("%c 云默安制作 | https://yma.zyghit.cn",bg);
}
let bg = 'background: #de4f56; color: #fff; border-radius: 2px;background-size:10px';
var canvas = document.getElementById("canvas"); var ctx = canvas.getContext("2d"); var cw = canvas.width = window.innerWidth, cx = cw / 2; var ch = canvas.height = window.innerHeight, cy = ch / 2; ctx.fillStyle = "#000"; var linesNum = 16; var linesRy = []; var requestId = null; function Line(flag) {
    this.flag = flag; this.a = {}; this.b = {}; if (flag == "v") { this.a.y = 0; this.b.y = ch; this.a.x = randomIntFromInterval(0, ch); this.b.x = randomIntFromInterval(0, ch); } else if (flag == "h") { this.a.x = 0; this.b.x = cw; this.a.y = randomIntFromInterval(0, cw); this.b.y = randomIntFromInterval(0, cw); }
    this.va = randomIntFromInterval(25, 100) / 100; this.vb = randomIntFromInterval(25, 100) / 100; this.draw = function () { ctx.strokeStyle = "#ccc"; ctx.beginPath(); ctx.moveTo(this.a.x, this.a.y); ctx.lineTo(this.b.x, this.b.y); ctx.stroke(); }
    this.update = function () {
        if (this.flag == "v") { this.a.x += this.va; this.b.x += this.vb; } else if (flag == "h") { this.a.y += this.va; this.b.y += this.vb; }
        this.edges();
    }
    this.edges = function () {
        if (this.flag == "v") {
            if (this.a.x < 0 || this.a.x > cw) { this.va *= -1; }
            if (this.b.x < 0 || this.b.x > cw) { this.vb *= -1; }
        } else if (flag == "h") {
            if (this.a.y < 0 || this.a.y > ch) { this.va *= -1; }
            if (this.b.y < 0 || this.b.y > ch) { this.vb *= -1; }
        }
    }
}
for (var i = 0; i < linesNum; i++) { var flag = i % 2 == 0 ? "h" : "v"; var l = new Line(flag); linesRy.push(l); }
function Draw() {
    requestId = window.requestAnimationFrame(Draw); ctx.clearRect(0, 0, cw, ch); for (var i = 0; i < linesRy.length; i++) { var l = linesRy[i]; l.draw(); l.update(); }
    for (var i = 0; i < linesRy.length; i++) {
        var l = linesRy[i]; for (var j = i + 1; j < linesRy.length; j++) {
            var l1 = linesRy[j]
            Intersect2lines(l, l1);
        }
    }
}
function Init() {
    linesRy.length = 0; for (var i = 0; i < linesNum; i++) { var flag = i % 2 == 0 ? "h" : "v"; var l = new Line(flag); linesRy.push(l); }
    if (requestId) { window.cancelAnimationFrame(requestId); requestId = null; }
    cw = canvas.width = window.innerWidth, cx = cw / 2; ch = canvas.height = window.innerHeight, cy = ch / 2; Draw();
}; setTimeout(function () { Init(); addEventListener('resize', Init, false); }, 15); function Intersect2lines(l1, l2) {
    var p1 = l1.a, p2 = l1.b, p3 = l2.a, p4 = l2.b; var denominator = (p4.y - p3.y) * (p2.x - p1.x) - (p4.x - p3.x) * (p2.y - p1.y); var ua = ((p4.x - p3.x) * (p1.y - p3.y) - (p4.y - p3.y) * (p1.x - p3.x)) / denominator; var ub = ((p2.x - p1.x) * (p1.y - p3.y) - (p2.y - p1.y) * (p1.x - p3.x)) / denominator; var x = p1.x + ua * (p2.x - p1.x); var y = p1.y + ua * (p2.y - p1.y); if (ua > 0 && ub > 0) {
        markPoint({
            x: x, y: y
        })
    }
}
function markPoint(p) { ctx.beginPath(); ctx.arc(p.x, p.y, 2, 0, 2 * Math.PI); ctx.fill(); }
function randomIntFromInterval(mn, mx) { return ~~(Math.random() * (mx - mn + 1) + mn); }

const settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://of-dev-api.bfsea.xyz/commonQuery/getInfo",
    "method": "GET",
    "headers": {}
  };
  
  $.ajax(settings).done(function (response) {
    document.getElementById('user').innerHTML = response.data.user;
    document.getElementById('node').innerHTML = response.data.node;
    document.getElementById('proxy').innerHTML = response.data.proxy;
  });
