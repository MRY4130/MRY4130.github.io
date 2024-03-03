//GetClock
const clock1 = document.querySelector(".clock1");
const clock2 = document.querySelector(".clock2");
const week = ["일", "월", "화", "수", "목", "금", "토"];

function getClock() {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth();
  const date = today.getDate();
  const hours = today.getHours();
  const minutes = today.getMinutes();
  const seconds = today.getSeconds();
  const day = today.getDay();
  
  const t_h = String(hours).padStart(2, "0");
  const t_m = String(minutes).padStart(2, "0");
  const t_s = String(seconds).padStart(2, "0");
  const weekDay = week[day];
  const y = String(year).padStart(4, "0");
  const m = String(month + 1).padStart(2, "0");
  const d = String(date).padStart(2, "0");

  clock1.innerText = `${y}년 ${m}월 ${d}일 ${weekDay}요일`;
  clock2.innerText = `${t_h}시 ${t_m}분 ${t_s}초`;
}

setInterval(getClock, 1000);
