/**
 * Created from https://codepen.io/ShadowShahriar/pen/BaKdyMJ
 */
export const initBlobs = () => {
  const remain = (n) => 100 - n;
  const random = (min, max) => Math.floor(min + Math.random() * (max - min));
  const root = document.querySelector(':root');
  const numSets = 6;
  let offset = 25;

  for (let i=0; i < numSets; i++) {
    let r = [];
    for (let i = 0; i < 4; i++) {
      let n = random(offset, remain(offset));
      r.push(n);
      r.push(remain(n));
    }

    let coordinates = `${r[0]}% ${r[1]}% ${r[2]}% ${r[3]}% / ${r[4]}% ${r[6]}% ${r[7]}% ${r[5]}%`;
    root.style.setProperty(`--blob-${i + 1}`, coordinates)
  }
}