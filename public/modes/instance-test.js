// export const pofla = p => {
  let instest = p => {

    let c, cc;
    let x;
    let dir = 1;
    let hue, sat, bri;
    p.setup = function(){
      // p.createCanvas(p.windowWidth, p.windowHeight);
      p.createCanvas(100,100);
      p.noStroke();
      p.colorMode(p.HSB, 360, 100, 100);
      hue = p.random(0, 360);
      hue2 = (hue < 180) ? hue + 180 : hue - 180;
      // console.log(hue, hue2);
      sat = p.random(50, 100);
      bri = p.random(50, 100);
      c = p.color(hue, sat, bri);
      cc = p.color(hue2, sat, bri);
      p.background(c);
  
      x = p.random(0, 100);
    };
  
    p.draw = function(){
      p.background(c);
      if (x >= p.width || x <= 0){
        dir *= -1;
      }
      x += dir;
  
      p.push();
      p.fill(cc);
      p.circle(x, 50, 20);
      p.pop();
      // p.push();
      // p.stroke(0);
      // p.text(hue, 50, 50);
      // p.text(hue2, 50, 70);
      // p.pop();
    }
  }
  

  