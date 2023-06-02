const images = ['0.jpeg', '1.jpeg', '2.jpeg']; // 파일 형식은 통일해줘야

const chosenImage = images[Math.floor(Math.random() * images.length)];

// const bgImage = document.createElement('img');

// bgImage.src = `img/${chosenImage}`;

// // 이 bgImage를 HTML의 body 내부에 추가할 것
// document.body.appendChild(bgImage);


// 페이지 사이즈 조정함에 따라 이미지 크기도 자동 조절되게
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