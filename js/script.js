// const buttonOpen = document.querySelector(".modalOpen");
// const buttonClose = document.querySelector(".modalClose");
// const modal = document.querySelector(".modal");

// buttonOpen.addEventListener("click", modalOpen);
// function modalOpen() {
//   modal.style.display = "block";
// }
// buttonClose.addEventListener("click", modalClose);
// function modalClose() {
//   modal.style.display = "none";
// }

// document.addEventListener("click", outsideClose);
// function outsideClose(e) {
//   if (e.target == modal) {
//     modal.style.display = "none";
//   }
// }

const modalWrapOpen = function (e) {
  const dataModalOpen = e.currentTarget.dataset.modalOpen;
  Array.from(document.querySelectorAll(".modal")).forEach((e, i) => {
    if (e.getAttribute("data-modal") === dataModalOpen) {
      e.classList.toggle("is_open");
    }
  });
};

Array.from(document.querySelectorAll(".modalOpen")).forEach(
  (modalOpenElement) => {
    modalOpenElement.addEventListener("click", modalWrapOpen);
  }
);

const modalCloseAction = function (e) {
  const targetModal = e.currentTarget.closest(".modal");
  targetModal.classList.toggle("is_open");
};

Array.from(document.querySelectorAll(".modalClose")).forEach(
  (modalCloseElement) => {
    modalCloseElement.addEventListener("click", modalCloseAction);
  }
);

function fadeAnime() {
  //ふわっと動くきっかけのクラス名と動きのクラス名の設定
  $(".fadeUpTrigger").each(function () {
    //fadeInUpTriggerというクラス名が
    var elemPos = $(this).offset().top - 30; //要素より、50px上の
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight) {
      $(this).addClass("fadeUp");
      // 画面内に入ったらfadeInというクラス名を追記
    } else {
      $(this).removeClass("fadeUp");
      // 画面外に出たらfadeInというクラス名を外す
    }
  });
}

// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function () {
  fadeAnime(); /* アニメーション用の関数を呼ぶ*/
}); // ここまで画面をスクロールをしたら動かしたい場合の記述

// 画面が読み込まれたらすぐに動かしたい場合の記述
$(window).on("load", function () {
  fadeAnime(); /* アニメーション用の関数を呼ぶ*/
}); // ここまで画面が読み込まれたらすぐに動かしたい場合の記述
