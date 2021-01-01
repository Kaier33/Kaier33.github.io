export default class Star {
  constructor() {
    this.setting = {
      width: screen.width,
      height: screen.height,
      canvas: null,
      content: null,
      maxStar: 40,
      newStar: 8,
      starArr: [],
      number: 40,
      timer: null,
    };
    this.starColor = ['#0d4b74', '#6691ab', '#213a55', '#bed0cb', '#7f486b'];
    this.animate = null;
  }

  init(canvasDom, w, h) {
    let { starArr, width, height } = this.setting;
    if (this.isMobile()) {
      this.setting.maxStar = 10;
      this.setting.number = 10;
      this.setting.newStar = 6;
    }
    starArr = [];
    this.setting.canvas = canvasDom;
    this.setting.canvas.setAttribute('width', w);
    this.setting.canvas.setAttribute('height', h);
    width = w;
    height = h;
    this.setting.content = this.setting.canvas.getContext('2d');
    this.setting.content.clearRect(0, 0, w, h);
    this.star();
  }

  updateStar() {
    let { starArr, width, height, content } = this.setting;
    content.clearRect(0, 0, width, height);
    content.save();
    for (let i = 0; i < starArr.length; i++) {
      let h = 0.35 * starArr[i].scale;
      starArr[i].x += (Math.tan((starArr[i].deg * Math.PI) / 180) * h) / 2;
      starArr[i].y = starArr[i].y + h;
      if (starArr[i].x < 0 || starArr[i].x > width || starArr[i].y > height) {
        starArr.splice(i--, 1);
        continue;
      }
      content.beginPath();
      for (let j = 0; j < 5; j++) {
        content.lineTo(
          Math.cos(((18 + j * 72) / 180) * Math.PI) * 10 + starArr[i].x,
          -Math.sin(((18 + j * 72) / 180) * Math.PI) * 10 + starArr[i].y
        );
        content.lineTo(
          Math.cos(((54 + j * 72) / 180) * Math.PI) * 5 + starArr[i].x,
          -Math.sin(((54 + j * 72) / 180) * Math.PI) * 5 + starArr[i].y
        );
      }
      content.closePath();
      content.globalAlpha = starArr[i].alpha;
      content.shadowOffsetX = 2;
      content.shadowOffsetY = 2;
      content.shadowBlur = 4;
      content.shadowColor = 'rgba(0, 0, 0, 0.15)';
      content.fillStyle = this.starColor[starArr[i].c];
      content.fill();
    }
    content.restore();
    this.animate = requestAnimationFrame(this.updateStar.bind(this));
  }

  createNewStar() {
    let { starArr, maxStar, newStar, width } = this.setting;
    this.setting.timer = setInterval(function() {
      if (starArr.length < maxStar) {
        for (let i = 0; i < newStar; i++) {
          let minus = Math.random() < 0.5 ? -1 : 1;
          starArr.push({
            x: Math.random() * width,
            y: 0,
            c: Math.floor(Math.random() * 6),
            deg: Math.random() * 6 * minus,
            scale: 3 + Math.random() * 3,
            alpha: 0.5 + Math.random() * 0.1,
          });
        }
      }
    }, Math.random() * 200 + 500);
  }

  star() {
    let { number, width, height, starArr } = this.setting;
    for (let i = 0; i < number; i++) {
      let minus = Math.random() < 0.5 ? -1 : 1;
      starArr.push({
        x: Math.random() * width,
        y: Math.random() * height,
        c: Math.floor(Math.random() * 6),
        deg: Math.random() * 6 * minus,
        scale: 3 + Math.random() * 3,
        alpha: 0.5 + Math.random() * 0.1,
      });
    }
    this.updateStar();
    this.createNewStar();
  }
  reset() {
    clearInterval(this.setting.timer);
    this.setting.starArr = [];
    cancelAnimationFrame(this.animate);
  }
  isMobile() {
    return /Android|webOS|iPhone|iPad|BlackBerry/i.test(navigator.userAgent);
  }
}
