var likeCountElement = document.getElementById('post1');
var btnLike = document.getElementById('btnLike1');
var likeCount = 9;

btnLike.addEventListener('click', function () {
    likeCount++;
    likeCountElement.textContent = likeCount + " like(s)";
});


var likeCountElement2 = document.getElementById('post2');
var btnLike2 = document.getElementById('btnLike2');
var likeCount2 = 12;

btnLike2.addEventListener('click', function () {
    likeCount2++;
    likeCountElement2.textContent = likeCount2 + " like(s)";
});


var likeCountElement3 = document.getElementById('post3');
var btnLike3 = document.getElementById('btnLike3');
var likeCount3 = 9;

btnLike3.addEventListener('click', function () {
    likeCount3++;
    likeCountElement3.textContent = likeCount3 + " like(s)";
});