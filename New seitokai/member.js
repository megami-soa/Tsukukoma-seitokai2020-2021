let member_data = {
    "ウスン・ブンブブ": {
        job: "生徒会会長",
        did: "う　し　た　ぷ　に　き　あ　く　ん　笑　王国　初代国王　笑",
        text: "部分分数分解幹部 部分分数分解幹部 部分分数分解幹部 部分分数分解幹部 部分分数分解幹部 部分分数分解幹部 部分分数分解幹部 部分分数分解幹部",
        pic: "usun.png"
    },
    "うしたぷにきあくん": {
        job: "生徒会副会長",
        did: "う　し　た　ぷ　に　き　あ　く　ん　笑　王国　二代国王　笑",
        text: "I am a ushi.",
        pic: "medama.png"
    }
}

let windowHeight = window.innerHeight;
let windowWidth = window.innerWidth;
let k = document.getElementsByClassName("member");
for (let i = 0; i < k.length; i++) {
    k[i].style.zIndex = 99999
    k[i].addEventListener("click", function () {
        let f = k[i].parentElement;
        let member_name = k[i].children[1].textContent
        let modelName = f.children;
        let show = document.getElementById('member_show');
        console.log("show")
        show.style.display = "block";
        show.style.position = "fixed"
        show.style.zIndex = 9999
        document.getElementById('member_title').textContent = member_name;
        document.getElementById('member_job').textContent = member_data[member_name].job;
        document.getElementById('member_did').textContent = member_data[member_name].did;
        document.getElementById('member_text').textContent = member_data[member_name].text;
        document.getElementById('member_img').src = "member_pic/" + member_data[member_name].pic;
        $('#member_show').animate({
            opacity: 1,
        }, 300)

    }, { passive: true })
}
document.getElementById("show_background").addEventListener("click", function () {
    $('#member_show').animate({
        opacity: 0,
        zIndex: 0
    }, 300)

    setTimeout('document.getElementById("member_show").style.display = "none";', 300)
})