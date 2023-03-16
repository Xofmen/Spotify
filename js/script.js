let doc = document

const clientId = 'a6aba34e6d5e47f2abd29ea3242c7d03'
const clientSecret = '5b428b1e6b8d44a2aae3d1ae340565f7'

const getToken = async () => {
  const result = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: "Basic " + btoa(clientId + ":" + clientSecret),
    },
    body: "grant_type=client_credentials",
  });

  const data = await result.json();
  return data.access_token;
};

getToken().then(function (result) {
  const accessToken = result;
  const endpoint = "https://api.spotify.com/v1/recommendations";
  const artists = '53XhwfbYqKCa1cC15pYq2q';
  const danceability = encodeURIComponent('1.9');

  fetch(`${endpoint}?seed_artists=${artists}&target_danceability=${danceability}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${accessToken}`
    }
  })
    .then((res) => res.json())
    .then((res) => {
    });
});


let first_arr = []

let set_btn = doc.querySelector('.setting-btn')
let block = doc.querySelector('.set-block-play')

set_btn.addEventListener('click', function sett() {
  block.classList.toggle('first-none')
})

block.addEventListener('mouseleave', function () {
  block.classList.add('first-none')
})


let close_or_open = doc.querySelector('.btn-point')
let aside_1 = doc.querySelector('.str')
let img = doc.querySelector('.logo-block')
let as = doc.querySelector('.aside-top')
let aside_p = doc.querySelectorAll('.aside-link-left p')
let btn1 = doc.querySelector('.aside-btn-1')
let btn2 = doc.querySelector('.aside-btn-2')
let btn3 = doc.querySelector('.aside-btn-3')
let btn4 = doc.querySelector('.aside-btn-4')
let aside_link_left = doc.querySelectorAll('.aside-link-left')
let a_b = doc.querySelector('.aside-bottom')


let as_btn = doc.querySelector('.aside-btn p')
let as_img = doc.querySelector('.dddd')
let ff_gg = doc.querySelector('.aside-bottom-block')


close_or_open.addEventListener('click', function clop() {
  aside_1.classList.toggle('width')
  setTimeout(() => {
    img.classList.toggle('logo-two')
    for (let item of aside_p) {
      item.classList.toggle('none')
    }

    for (let i of aside_link_left) {
      i.classList.toggle('blld')
    }

    a_b.classList.toggle('none')
    // as_img.classList.toggle('block')
  }, 100);

  as.classList.toggle('as')
  doc.querySelector('.btn-point').classList.toggle('bttt')
})

let btn_as_2 = doc.querySelector('.btn-poin')
let aside_2 = doc.querySelector('.aside-2')

btn_as_2.onclick = () => {
  aside_2.classList.toggle('aside-2-block')
  doc.querySelector('.btn-poin').classList.toggle('btttt')
  doc.querySelector('.fr-activ p').classList.toggle('block')
  doc.querySelector('.img-contact').classList.toggle('margin-right')
}




let bottom_father_block = doc.querySelector('.treki_box')

getToken().then(function (result) {
  const accessToken = result;
  let extra_url = [
    {
      url: '37i9dQZF1DWXRqgorJj26U'
    },
    {
      url: '37i9dQZF1DXcBWIGoYBM5M'
    },
    {
      url: '37i9dQZF1DX0XUsuxWHRQd'
    },
    {
      url: '37i9dQZF1DX1lVhptIYRda'
    },
    {
      url: '37i9dQZF1DX10zKzsJ2jva'
    },
    {
      url: '37i9dQZF1DX4JAvHpjipBk'
    },
    {
      url: '37i9dQZF1DX4sWSpwq3LiO'
    },
    {
      url: '37i9dQZF1DX4SBhb3fqCJd'
    }
  ]

  let ex_url = Math.floor(Math.random() * extra_url.length)
  let obj_url = []
  obj_url.push(extra_url[ex_url])
  for (let it_url of obj_url) {

    fetch(`https://api.spotify.com/v1/playlists/${it_url.url}/`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + accessToken,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        let fff = []
        for (let inner of res.tracks.items) {
          let it = []
          it.push(inner)
          for (let item of it) {
            let href_div = doc.createElement('div')
            let block_img = doc.createElement('div')
            let block_text = doc.createElement('div')
            let href_img = doc.createElement('img')
            let href_btn = doc.createElement('button')
            let img_btn = doc.createElement('img')
            let one_p = doc.createElement('p')
            let two_p = doc.createElement('p')

            href_div.classList.add('href-div')
            block_img.classList.add('block-img')
            block_text.classList.add('block-text')
            href_btn.classList.add('lime-btn')
            one_p.classList.add('one-p')
            two_p.classList.add('two-p')

            img_btn.src = './img/Play.png'
            let ff = []
            ff.push(item.track)




            for (let ite of ff) {


              for (let it of ite.artists) {
                two_p.innerHTML = it.name
              }

              let alb = []
              alb.push(ite.album)

              for (let it of alb) {
                let img = []
                img.push(it.images[0])
                for (let even of img) {
                  href_img.src = even.url
                }
              }

              one_p.innerHTML = ite.name

              let element = one_p;
              let textcon = element.textContent;
              let maxLength = 20;
              if (textcon.length > maxLength) {
                let shortText = textcon.slice(0, maxLength - 3) + '...';
                one_p.innerHTML = shortText;
              }

              let elemen = one_p;
              let textco = elemen.textContent;
              let maxLengt = 20;
              if (textco.length > maxLengt) {
                let shortText = textco.slice(0, maxLengt - 3) + '...';
                two_p.innerHTML = shortText;
              }
            }

            block_img.append(href_img)
            block_img.append(href_btn)
            href_btn.append(img_btn)
            block_text.append(one_p)
            block_text.append(two_p)
            href_div.append(block_img)
            href_div.append(block_text)
            bottom_father_block.append(href_div)

            href_btn.onclick = () => {
              player.classList.remove('none')
              let ff = []
              ff.push(item.track)
              for (let ite of ff) {
                if (ite.preview_url == null) {
                  audio.src = './audio/sound_17968.mp3'
                } else audio.src = ite.preview_url

                for (let it of ite.artists) {
                  author.innerHTML = it.name
                }

                let alb = []
                alb.push(ite.album)

                for (let it of alb) {
                  let img = []
                  img.push(it.images[0])
                  for (let even of img) {
                    player_img.src = even.url
                  }
                }

                player_name.innerHTML = ite.name
              }
              play()
            }
          }
        }

        let audio = doc.querySelector('.audio')
        let btn_prev = doc.querySelector('.back-player')
        let next = doc.querySelector('.foward-player')
        let play_btn = doc.querySelector('.img-play-player')
        let progress = doc.querySelector('.player-nav-child')
        let progressContain = doc.querySelector('.player-nav')
        let player_img = doc.querySelector('.player-img')
        let player_name = doc.querySelector('.player-music-name')
        let author = doc.querySelector('.player-music-author')
        let player = doc.querySelector('.player')
        let random = doc.querySelector('.img-suttle')
        let repeat = doc.querySelector('.repeat-player')



        let songIndex = Math.floor(Math.random() * res.tracks.items.length)

        function loadSongs(song) {
          fff.push(res.tracks.items[song])
          for (let item of fff) {
            let ff = []
            ff.push(item.track)
            for (let ite of ff) {
              if (ite.preview_url == null) {
                audio.src = './audio/sound_17968.mp3'
              } else audio.src = ite.preview_url

              for (let it of ite.artists) {
                author.innerHTML = it.name
              }

              let alb = []
              alb.push(ite.album)

              for (let it of alb) {
                let img = []
                img.push(it.images[0])
                for (let even of img) {
                  player_img.src = even.url
                }
              }

              player_name.innerHTML = ite.name
            }

          }
        }

        loadSongs(songIndex)



        function play() {
          player.classList.add('play-y')
          audio.play()
          play_btn.src = './img/stop.png'
        }


        function pause() {
          player.classList.remove('play-y')
          audio.pause()
          play_btn.src = './img/Play2.png'
        }

        play_btn.addEventListener('click', () => {
          let isPlay = player.classList.contains('play-y')

          if (isPlay) {
            pause()
          } else {
            play()
          }
        })

        function nextt() {
          songIndex++

          if (songIndex > res.tracks.items.length - 1) {
            songIndex = 0
          }
          loadSongs(songIndex)
          play()
        }

        next.addEventListener('click', nextt)

        function backk() {
          songIndex--

          if (songIndex < 0) {
            songIndex = res.tracks.items.length - 1
          }

          loadSongs(songIndex)
          play()

        }
        function ran() {
          let songIndex = Math.floor(Math.random() * res.tracks.items.length)
          loadSongs(songIndex)
          play()

        }

        random.addEventListener('click', ran)

        btn_prev.addEventListener('click', backk)

        function updateProgress(e) {
          let { duration, currentTime } = e.srcElement
          let progressPercent = (currentTime / duration) * 100

          if (duration == NaN) {
            doc.querySelector('.dur').innerHTML = "0:00"
          }

          if (currentTime < 60) {
            doc.querySelector('.current').innerHTML = `0:${Math.floor(currentTime)}`
            doc.querySelector('.dur').innerHTML = `0:${Math.floor(duration)}`
          }

          if (currentTime < 10) {
            doc.querySelector('.current').innerHTML = `0:0${Math.floor(currentTime)}`
            doc.querySelector('.dur').innerHTML = `0:${Math.floor(duration)}`
          }

          progress.style.width = `${progressPercent}%`
        }

        audio.addEventListener('timeupdate', updateProgress)

        function setProccess(e) {
          let width = this.clientWidth
          let clickX = e.offsetX
          let duration = audio.duration

          audio.currentTime = (clickX / width) * duration
        }

        progressContain.addEventListener('click', setProccess)

        audio.addEventListener('ended', function () {
          setTimeout(() => {
            nextt()
          }, 1000)
        })

        function rep() {
          audio.addEventListener('ended', function () {
            setTimeout(() => {
              if (audio.loop == true) {
                audio.loop = false
              } else {
                audio.loop = true
              }

              play()
            }, 1000)
          })
        }

        repeat.addEventListener('click', rep)


        let volumes = doc.querySelector('.range')
        function setVolume(e) {
          let vol = e.target.value / 100
          audio.volume = vol
        }
        volumes.addEventListener('input', setVolume)

        // Прогресc в плеере полосечка
      });
  }
});

let playlists = []
let track_random = []

let sec1 = doc.querySelector('.section-1')
let sec2 = doc.querySelector('.section-2')
let sec3 = doc.querySelector('.section-3')
let sec4 = doc.querySelector('.section-4')
let like = doc.querySelector('.liked-songs')

btn2.classList.remove('aside-link-active')
btn3.classList.remove('aside-link-active')
btn4.classList.remove('aside-link-active')
btn1.classList.add('aside-link-active')
sec2.classList.add('none')
sec3.classList.add('none')
sec4.classList.add('none')
sec1.classList.remove('none')

btn1.onclick = () => {
  btn2.classList.remove('aside-link-active')
  btn3.classList.remove('aside-link-active')
  btn4.classList.remove('aside-link-active')
  btn1.classList.add('aside-link-active')
  sec2.classList.add('none')
  sec3.classList.add('none')
  sec4.classList.add('none')
  sec1.classList.remove('none')
}

btn2.onclick = () => {
  btn1.classList.remove('aside-link-active')
  btn3.classList.remove('aside-link-active')
  btn4.classList.remove('aside-link-active')
  btn2.classList.add('aside-link-active')
  sec1.classList.add('none')
  sec3.classList.add('none')
  sec4.classList.add('none')
  sec2.classList.remove('none')
}

btn3.onclick = () => {
  btn2.classList.remove('aside-link-active')
  btn1.classList.remove('aside-link-active')
  btn4.classList.remove('aside-link-active')
  btn3.classList.add('aside-link-active')
  sec2.classList.add('none')
  sec1.classList.add('none')
  sec4.classList.add('none')
  sec3.classList.remove('none')
}

like.onclick = () => {
  btn2.classList.remove('aside-link-active')
  btn1.classList.remove('aside-link-active')
  btn4.classList.remove('aside-link-active')
  btn3.classList.add('aside-link-active')
  sec2.classList.add('none')
  sec1.classList.add('none')
  sec4.classList.add('none')
  sec3.classList.remove('none')
}

btn4.onclick = () => {
  btn2.classList.remove('aside-link-active')
  btn3.classList.remove('aside-link-active')
  btn1.classList.remove('aside-link-active')
  btn4.classList.add('aside-link-active')
  sec2.classList.add('none')
  sec3.classList.add('none')
  sec1.classList.add('none')
  sec4.classList.remove('none')
}

let load_site = doc.querySelector('.load')

setTimeout(() => {
  load_site.style.display = 'none'
}, 100);