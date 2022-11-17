const fakeApi = [
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
