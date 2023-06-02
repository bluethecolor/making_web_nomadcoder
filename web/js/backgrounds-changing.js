const images = [
    '000.jpg', '001.jpg', '002.jpg', '003.jpg', '004.jpg',
    '005.jpg', '006.jpg', '007.jpg', '008.jpg', '009.jpg',
    '010.jpg', '011.jpg', '012.jpg', '013.jpg', '014.jpg',
    '015.jpg', '016.jpg', '017.jpg', '018.jpg', '019.jpg',
    '020.jpg', '021.jpg', '022.jpg', '023.jpg', '024.jpg',
    '025.jpg', '026.jpg', '027.jpg',
  ]; // 파일 형식은 통일해줘야

  
const chosenImage = images[Math.floor(Math.random() * images.length)];

// const bgImage = document.createElement('img');

// bgImage.src = `img/${chosenImage}`;

// // 이 bgImage를 HTML의 body 내부에 추가할 것
// document.body.appendChild(bgImage);


// 페이지 사이즈 조정함에 따라 이미지 크기도 자동 조절되게 하자!!
const bgImage = document.createElement('div');

bgImage.style.backgroundImage = `url('img/${chosenImage}')`;

bgImage.style.width = '100%';
bgImage.style.height = '100%';
bgImage.style.backgroundSize = 'cover';
bgImage.style.backgroundPosition = 'center';
bgImage.style.position = 'fixed';
bgImage.style.zIndex = '-1';
bgImage.style.top = '0';
bgImage.style.left = '0';
document.body.appendChild(bgImage);


// 이미지가 랜덤으로 바뀌게 세팅
function changeImage() {
    const chosenImage = images[Math.floor(Math.random() * images.length)];
    bgImage.style.backgroundImage = `url('img/${chosenImage}')`;
  }
  
  changeImage(); // Call the function once to set the initial image
  setInterval(changeImage, 10000); // Change the image every 10 seconds



