const fakeApi = [
  {
    namesong: "Anh Thề Đấy",
    namesinger: "Thanh Hưng",
    path: "access/mp3/anhtheday.mp3",
    image: "access/images/anhtheday.jpg",
  },
  {
    namesong: "Có Đâu Ai Ngờ",
    namesinger: "Cầm",
    path: "access/mp3/codauaingo.mp3",
    image: "access/images/codauaingo.jpg",
  },
  {
    namesong: "Không Phai",
    namesinger: "Tăng Duy Tân x T.R.I x Phong Max ( Masew Remix )",
    path: "access/mp3/khongphai.mp3",
    image: "access/images/khongphai.jpg",
  },
  {
    namesong: "Anh Sẽ Đón Em",
    namesinger: "Nguyên ft. Trang",
    path: "access/mp3/anhsedonem.mp3",
    image: "access/images/anhsedonem.jpg",
  },
  {
    namesong: "hẹn Em Kiếp Sau",
    namesinger: "Lã. x Duy Phúc x TiB",
    path: "access/mp3/henemkiepsau.mp3",
    image: "access/images/henemkiepsau.jpg",
  },
  {
    namesong: "Liệu Giờ",
    namesinger: "LIỆU GIỜ ( WHAT IF ? ) x Venn ( Prod. KayT ) ",
    path: "access/mp3/lieugio.mp3",
    image: "access/images/lieugio.jpg",
  },
  {
    namesong: "Xứng Đôi Cưới Thôi",
    namesinger: "Lê Thiện Hiếu",
    path: "access/mp3/xungdoicuoithoi.mp3",
    image: "access/images/xungdoicuoithoi.jpg",
  },
  {
    namesong: "Độ Tộc 2",
    namesinger: "MASEW x PHÚC DU x PHÁO x ĐỘ MIXI",
    path: "access/mp3/dotoc2.mp3",
    image: "access/images/dotoc2.jpg",
  },
  {
    namesong: "Lạc Vào Trong Mơ",
    namesinger: "Simon C ft. Wuy",
    path: "access/mp3/lacvaotrongmo.mp3",
    image: "access/images/lacvaotrongmo.jpg",
  },
  {
    namesong: "Em Là Hoàng Hôn",
    namesinger: "Vang Golden G",
    path: "access/mp3/vanggolden.mp3",
    image: "access/images/vanggolden.jpg",
  },
  {
    namesong: "Sang Xịn Mịn",
    namesinger: "Gill ft. kewtiie",
    path: "access/mp3/sangxinmin.mp3",
    image: "access/images/sangxinmin.jpg",
  },
  {
    namesong: "Dù Cho Mai Về Sau",
    namesinger: "buitruonglinh x Freak D",
    path: "access/mp3/duchomaivesau.mp3",
    image: "access/images/duchomaivesau.jpg",
  },
  {
    namesong: "Một Nhà",
    namesinger: "tas release",
    path: "access/mp3/motnha.mp3",
    image: "access/images/motnha.jpg",
  },
  {
    namesong: "Tuyệt Sắc",
    namesinger: "Namduc",
    path: "access/mp3/tuyetsac.mp3",
    image: "access/images/tuyetsac.jpg",
  },
  {
    namesong: "Mặt mộc",
    namesinger: "Phạm Nguyên Ngọc x VAnh x Ân Nhi",
    path: "access/mp3/matmoc.mp3",
    image: "access/images/matmoc.jpg",
  },
  {
    namesong: "Infinity",
    namesinger: "Jaymes Young",
    path: "access/mp3/infinity.mp3",
    image: "access/images/infinity.png",
  },
  {
    namesong: "Reality",
    namesinger: "Lost Frequencies",
    path: "access/mp3/reality.mp3",
    image: "access/images/reality.jpg",
  },
  {
    namesong: "Umbrella",
    namesinger: "Ember Island",
    path: "access/mp3/umbrella.mp3",
    image: "access/images/umbrella.jpg",
  },
  {
    namesong: "2 3 Con Mực",
    namesinger: "ft. MINH VŨ",
    path: "access/mp3/23conmuc.mp3",
    image: "access/images/23conmuc.jpg",
  },
  {
    namesong: "2am",
    namesinger: "JustaTee",
    path: "access/mp3/2am.mp3",
    image: "access/images/2am.jpg",
  },
  {
    namesong: "Ghé qua",
    namesinger: "Dick x Tofu x PC",
    path: "access/mp3/ghequa.mp3",
    image: "access/images/ghequa.jpg",
  },
  {
    namesong: "Hai mươi hai",
    namesinger: "AMEE x Hứa Kim Tuyền",
    path: "access/mp3/haimuoihai.mp3",
    image: "access/images/haimuoihai.jpg",
  },
  {
    namesong: "Cứ chill thôi",
    namesinger: "Suni Hạ Linh & Rhymastic",
    path: "access/mp3/cuchillthoi.mp3",
    image: "access/images/cuchillthoi.jpg",
  },
  {
    namesong: "Có Hẹn Với Thanh Xuân",
    namesinger: "Monstar x AnhVu",
    path: "access/mp3/cohenvoithanhxuan.mp3",
    image: "access/images/cohenvoithanhxuan.jpg",
  },
  {
    namesong: "拉个勾说永远爱我",
    namesinger: "Còn lâu mới nói",
    path: "access/mp3/ilikered.mp3",
    image: "access/images/ilikered.jpg",
  },
  {
    namesong: "In the shadow of the sun",
    namesinger: "Max Elto",
    path: "access/mp3/intheshadowofthesun.mp3",
    image: "access/images/intheshadowofthesun.jpg",
  },
  {
    namesong: "Không thuộc về",
    namesinger: "Minh Lý",
    path: "access/mp3/khongthuocve.mp3",
    image: "access/images/khongthuocve.jpg",
  },
  {
    namesong: "Let me show you a big move",
    namesinger: "Còn lâu mới nói",
    path: "access/mp3/letmeshow.mp3",
    image: "access/images/letmeshow.jpg",
  },
  {
    namesong: "Ngày em đi",
    namesinger: "DIG DIDZAY",
    path: "access/mp3/ngayemdi.mp3",
    image: "access/images/ngayemdi.png",
  },
  {
    namesong: "Người em cố đô",
    namesinger: "Rum x Ddaaa x Toan",
    path: "access/mp3/nguoiemcodo.mp3",
    image: "access/images/nguoiemcodo.jpg",
  },
  {
    namesong: "Lúc Nhỏ",
    namesinger: "Kidz",
    path: "access/mp3/lucnho.mp3",
    image: "access/images/lucnho.jpg",
  },
  {
    namesong: "Phờ nho ti nhô",
    namesinger: "Phát Huy T4",
    path: "access/mp3/pholotino.mp3",
    image: "access/images/pholotino.jpg",
  },
  {
    namesong: "Power",
    namesinger: "Interupt",
    path: "access/mp3/power.mp3",
    image: "access/images/power.jpg",
  },
  {
    namesong: "Price tag",
    namesinger: "Jessie",
    path: "access/mp3/pricetag.mp3",
    image: "access/images/pricetag.jpg",
  },
  {
    namesong: "Vi anh đâu có biết",
    namesinger: "Madihu",
    path: "access/mp3/vianhdaucobiet.mp3",
    image: "access/images/vianhdaucobiet.jpg",
  },
  {
    namesong: "Whay back home",
    namesinger: "SHAUN",
    path: "access/mp3/whaybackhome.mp3",
    image: "access/images/whaybackhome.jpg",
  },
];
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const buttomList = $(".buttom_list");

function start(value, index) {
  const listHtmls = value.map((allSong, soluong) => {
    return `<div class="list_song ${
      index === soluong ? "acvenchil" : ""
    }"data-index="${soluong}">
    <div class="avata">
      <img src="${allSong.image}" alt="" />
    </div>
    <div class="content_song">
      <p class="list_namesong">${allSong.namesong}</p>
      <p class="list_namesinger">${allSong.namesinger}</p>
    </div>
    <div class="three_dots">
      <i class="ti-more-alt"></i>
    </div>
  </div>`;
  });
  const listHmtl = listHtmls.join("");
  buttomList.innerHTML = listHmtl;
  function handlEvents() {
    //xu ly phong to thu nho
    const cd = $(".cdthumb");
    const cdwidth = cd.offsetWidth;
    document.onscroll = function () {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const newCdwidth = cdwidth - scrollTop;
      cd.style.width = newCdwidth > 0 ? newCdwidth * 0.1 + "rem" : 0;
      cd.style.height = newCdwidth > 0 ? newCdwidth * 0.1 + "rem" : 0;
      cd.style.opacity = newCdwidth / cdwidth;
      if (scrollTop <= 10) {
        cd.style.width = "15rem";
        cd.style.height = "15rem";
        start(fakeApi, lengsongs);
      }
    };
  }
  handlEvents();
}
start(fakeApi, 0);
const tabs = $$(".list_song");

const playStop = $(".btn-play-stop");
const iconplay = $(".ti-control-play");
const btnReload = $(".btn-reload");
const iconReload = $(".ti-loop");
const btnRandom = $(".btn-random");
const iconbtnRandom = $(".ti-control-shuffle");

const nameSong = $(".namesong");
const cdThumb = $(".cdthumb img");
const audio = $("#audio");

const progress = $(".control_time_music");

const btnNextback = $(".btn-next-back");
const btnNextto = $(".btn-next-to");

const playList = $(".buttom_list");

const timeEnded = $(".time_end");
const timeStart = $(".time_start");

function loadCurrensong(value, index) {
  var checkBtnRandom = $(".setcolor");
  if (checkBtnRandom) {
    for (var ii = 0; ii <= ii; ii++) {
      var sosanh = Math.floor(Math.random() * value.length);
      if (sosanh !== index) {
        break;
      }
    }
    index = sosanh;
    lengsongs = index;
    start(fakeApi, lengsongs);
  }
  nameSong.textContent = value[index].namesong;
  cdThumb.src = `${value[index].image}`;
  audio.src = `${value[index].path}`;
}
loadCurrensong(fakeApi, 0);

btnRandom.onclick = function () {
  btnRandom.classList.toggle("setcolor");
  var colorRandom = $(".setcolor");
  if (colorRandom) {
    iconbtnRandom.style.color = "#e33273";
    iconbtnRandom.classList.remove(".setcolor");
  } else {
    iconbtnRandom.style.color = "white";
    iconbtnRandom.classList.add(".setcolor");
  }
};

btnReload.onclick = function () {
  btnReload.classList.toggle("setcolorr");
  var colorReload = $(".setcolorr");
  if (colorReload) {
    iconReload.style.color = "#e33273";
    iconReload.classList.remove(".setcolorr");
  } else {
    iconReload.style.color = "white";
    iconReload.classList.add(".setcolorr");
  }
};

function bucroinha() {
  playStop.classList.add("playstopp");
  const onoff = $(".playstopp");
  start(fakeApi, lengsongs);
  //khi play
  if (onoff) {
    audio.play();
    cdThumbAnimate.play();
    iconplay.classList.add("ti-control-pause");
  }
  //khi pause
  else {
    audio.pause();
    cdThumbAnimate.pause();
    iconplay.classList.remove("ti-control-pause");
  }
}

playStop.onclick = function () {
  playStop.classList.toggle("playstopp");
  const onoff = $(".playstopp");
  //khi play
  if (onoff) {
    audio.play();
    cdThumbAnimate.play();
    iconplay.classList.add("ti-control-pause");
  }
  //khi pause
  else {
    audio.pause();
    cdThumbAnimate.pause();
    iconplay.classList.remove("ti-control-pause");
  }
};

//khi song duoc play
audio.ontimeupdate = function () {
  if (audio.duration) {
    const progressPrecent = (audio.currentTime / audio.duration) * 100;
    progress.value = progressPrecent;
  }
  console.log(audio.duration);
  playStop.classList.add("playstop");
  if (audio.currentTime == audio.duration) {
    start(fakeApi, lengsongs);
    nextsong();
  }
  var sogiaydangchay = audio.currentTime / 60;
  var phutdangchay = Math.floor(sogiaydangchay);
  var giaydangchay = Math.floor((sogiaydangchay - phutdangchay) * 60);
  timeStart.innerText = `${phutdangchay}:${giaydangchay}`;

  const sogiayhientai = audio.duration / 60;
  const phut = Math.floor(sogiayhientai);
  const giay = Math.floor((sogiayhientai - phut) * 60);
  themMocthoigian(phut, giay);
};
function themMocthoigian(phut, giay) {
  timeEnded.innerText = `${phut}:${giay}`;
}

// xu ly khi audio ended (khong lam dc :)) )

progress.onchange = function (e) {
  const seekTime = (audio.duration / 100) * e.target.value;
  audio.currentTime = seekTime;
  audio.play();
  playStop.classList.add("playstopp");
  const onoff = $(".playstopp");
  //khi play
  if (onoff) {
    audio.play();
    cdThumbAnimate.play();
    iconplay.classList.add("ti-control-pause");
  }
};

const cdThumbAnimate = cdThumb.animate(
  [
    {
      transform: "rotate(360deg)",
    },
  ],
  {
    duration: 10000, // 10 seconds
    iterations: Infinity,
  }
);
cdThumbAnimate.pause();

// tien bai hat va lui bai hat
var lengsongs = 0;
btnNextto.onclick = function () {
  lengsongs++;
  if (lengsongs >= fakeApi.length) {
    lengsongs = 0;
  }
  loadCurrensong(fakeApi, lengsongs);
  audio.play();
  bucroinha();
  start(fakeApi, lengsongs);
};
btnNextback.onclick = function () {
  lengsongs--;
  if (lengsongs < 0) {
    lengsongs = 14;
  }
  loadCurrensong(fakeApi, lengsongs);
  audio.play();
  bucroinha();
  start(fakeApi, lengsongs);
};
function nextsong() {
  lengsongs++;
  if (lengsongs >= fakeApi.length) {
    lengsongs = 0;
  }
  loadCurrensong(fakeApi, lengsongs);
  audio.play();
  bucroinha();
}
// lang nghe hanh vi click vao phaylist

playList.onclick = function (e) {
  var songNode = e.target.closest(".list_song:not(.acvenchil)");
  if (songNode) {
    lengsongs = Number(songNode.dataset.index);
    loadCurrensong(fakeApi, lengsongs);
    audio.play();
    bucroinha();
  }
};
const feature = $(".feature");
const linkfacebook = $(".linkfacebook");
const btnclose = $(".closelink");

feature.onclick = function () {
  linkfacebook.classList.add("flex");
  linkfacebook.style.animation = "xuathien 0.4s ease";
};
btnclose.onclick = function () {
  event.stopPropagation();
  linkfacebook.classList.remove("flex");
};
