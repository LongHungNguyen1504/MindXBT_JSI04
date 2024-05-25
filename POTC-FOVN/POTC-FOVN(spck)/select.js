const filePath = 'select.json';

function activeSlide() {

    //service section owl carousel
    $("cauthu").owlCarousel({
        autoplay: true,
        loop: true,
        margin: 20,
        autoHeight: true,
        nav: true,
        navText: [
            '<i class="fa fa-long-arrow-left" aria-hidden="true"></i>',
            '<i class="fa fa-long-arrow-right" aria-hidden="true"></i>',
        ],
        responsive: {
            0: {
                items: 1,
            },
            576: {
                items: 2,
            },
            768: {
                items: 3,
            },
            991: {
                items: 4,
            },
        },
    });
}
let titlearea = document.getElementById('tong')
function createItemElement(itemData) {
    itemData && itemData.map((item) => {
        let itemTemplate = `  
        <div id="cauthu" style="display : flex;  background-color: #1a242a">

        <div id="anh">
          <span style="white">${item.vitri}</span>
          <img src="${item.img} "style="width : 50px" alt="">
        </div>
        <div id="name" style="width : 40%">
          <div id="name-left" style="width : 100%">
            <div id="nem">
              <img src="" alt="">
              <a href="" style="text-decoration: none; color: white">${item.name}</a>
            </div>
            <div id="chiso">
              <span>
                <b style=" font-weight: 300px;
                color: white;
                background-color: red">${item.vitri}</b>
                <i style=" color: white">${item.chiso}</i>
              </span>
              <span>
                <b style=" font-weight: 300px;
                color: white;
                background-color: red">${item.vitriphu}</b>
                <i style=" color: white">${item.chisophu}</i>
              </span>
  
            </div>
          </div>
        </div>
        <div id="name-right" style="margin-top: auto;
        margin-bottom: auto">
          <img src="./images/icons.png" style="width : 25px" alt="">
        </div>
        <div id="so">
          <div id="luong" >
            <b style="color: white;">${item.luong}</b>
          </div>
          <div id="ovr">
            <b style="color: white;">${item.ovr}</b>
          </div>
          <div id="sta">
            <b style="color: white;">${item.sta}</b>
          </div>
        </div>
      </div>
      </div>
        `;
        titlearea.innerHTML += itemTemplate;
    });
}
init()

function init() {
    getPlayerAPI()
}

async function getPlayerAPI() {
    let data = await fetch(filePath)
        .then(response => response.json()) // lấy dữ liệu từ fetch('link j đó)lưu vào data
        .then(json => json)//chuyển response thành json sau đó đổi thành array/object và lưu vào biến data
    console.log(data)
    createItemElement(data)
}