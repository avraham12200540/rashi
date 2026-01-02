(() => {
  const TEXT = 'אתה צריך את זה עם פירוש רש\"י?';
  const el = document.getElementById('type');

  let i = 0;
  function type(){
    if(i <= TEXT.length){
      const t = TEXT.slice(0, i);
      el.textContent = t;
      i++;
      setTimeout(type, 40 + Math.random()*30);
    }
  }
  type();

  // canvas effects (נשאר כמו שהיה)
  const c = document.getElementById('fx');
  const ctx = c.getContext('2d');

  function resize(){
    c.width = innerWidth;
    c.height = innerHeight;
  }
  addEventListener('resize', resize);
  resize();

  const dots = Array.from({length:80}, ()=>({
    x:Math.random()*innerWidth,
    y:Math.random()*innerHeight,
    vx:(Math.random()-0.5)*0.6,
    vy:(Math.random()-0.5)*0.6
  }));

  function frame(){
    ctx.clearRect(0,0,c.width,c.height);

    for(const p of dots){
      p.x += p.vx;
      p.y += p.vy;
      if(p.x<0||p.x>c.width) p.vx*=-1;
      if(p.y<0||p.y>c.height) p.vy*=-1;

      ctx.fillStyle="rgba(255,70,90,0.4)";
      ctx.beginPath();
      ctx.arc(p.x,p.y,1.5,0,Math.PI*2);
      ctx.fill();
    }
    requestAnimationFrame(frame);
  }
  frame();
})();
