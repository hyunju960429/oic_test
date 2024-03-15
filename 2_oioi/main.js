let img1 = document.querySelector(".img1");
let img2 = document.querySelector(".img2");
let video = document.getElementById('videoPlay');

const slideDistance = img1.clientHeight;

// 슬라이드 함수 정의
function slideElements() {
    // 이미지와 비디오를 아래로 이동
    img1.style.transform = `translateY(${slideDistance}px)`;
    img2.style.transform = `translateY(${slideDistance}px)`;
    video.style.transform = `translateY(${slideDistance}px)`;

    // 이동 애니메이션이 끝난 후 다시 맨 위로 이동
    setTimeout(() => {
        // 이동한 요소를 다시 위로 이동
        img1.style.transform = '';
        img2.style.transform = '';
        video.style.transform = '';

        // img2를 img1의 뒤로 옮겨줌
        img1.parentNode.appendChild(img2);

        // 비디오를 main의 앞으로 옮겨줌
        const main = document.querySelector('.main');
        main.insertBefore(video, main.firstChild);
    }, 1000); // 1000ms(1초) 후에 다시 맨 위로 이동
}

// 슬라이드 함수를 일정 시간마다 반복 호출하여 무한 슬라이드 구현
setInterval(slideElements, 3000); // 3초마다 슬라이드