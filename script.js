const app = document.getElementById('app');
const music = document.getElementById('music');

// Stars
for(let i=0;i<50;i++){
    const star = document.createElement('div');
    star.className='star';
    star.style.left=Math.random()*100+'%';
    star.style.top=Math.random()*100+'%';
    star.style.width=2+Math.random()*3+'px';
    star.style.height=2+Math.random()*3+'px';
    star.style.animationDuration=(1+Math.random()*2)+'s';
    document.body.appendChild(star);
}

// Start button
const startBtn = document.createElement('button');
startBtn.innerHTML = 'Hiiiii Birthday Girl 💖<br>this is for youuu ✨';
app.appendChild(startBtn);

// On click → start animation
startBtn.addEventListener('click', async () => {
  startBtn.remove();
  music.play().catch(()=>{});

  // Title
  const title = document.createElement('h1');
  title.innerText = 'Happy Birthday,My Shanya The Beautiful Mumma ✨';
  title.style.opacity=0;
  app.appendChild(title);
  await fadeIn(title,2000);

  // Cake
  const cake = document.createElement('div');
  cake.className='cake';
  cake.innerText='🎂';
  cake.style.opacity=0;
  app.appendChild(cake);
  await fadeIn(cake,2000);

  // Fairy night background
  document.body.style.background='radial-gradient(circle at top, #1a1b2a, #0b0616)';

  // Balloons
  for(let i=0;i<6;i++){
      const balloon = document.createElement('div');
      balloon.className='balloon';
      balloon.style.background=['#ff4d6d','#ffb84d','#85ff4d','#4dcfff','#b84dff'][Math.floor(Math.random()*5)];
      balloon.style.left=Math.random()*90+'%';
      balloon.style.animationDuration=(5+Math.random()*5)+'s';
      balloon.style.width=30+Math.random()*20+'px';
      balloon.style.height=40+Math.random()*30+'px';
      document.body.appendChild(balloon);
      setTimeout(()=>balloon.remove(),10000);
  }

  // Letter
  const letter = document.createElement('p');
  letter.className='letter';
  app.appendChild(letter);
  const text = `My Sweetheart,

Many many happy returns of the day! I want to tell you so many things but idk from where to start.
First of all, you are one of the most special people in my life.
I never thought that I would find someone like you as my bestiee.
I almost lost the trust on friendship but then you came. And I didn't imagine that you will
become my best friend. Now you are gonna be a momma soon. And yk what I am sooo happy for you.
Whenever you become angry with me and don't talk, trust me that situation makes me feel so badd.I just want to hug youu so badlyyyyy.
Always remembermy baddie,no matter what happens, I will always be here for you.
 I LOVE YOUUU SO MUCHHH MY GIRLL 🩷`;

  await typeLetter(letter,text,15);

  // Final message
  const final = document.createElement('h2');
  final.className='final';
  final.innerText='A little gift from your bestie 🌸';
  app.appendChild(final);
  await fadeIn(final,2000);

  // Tiny fireworks
  fireworks(15);
});

// Helpers
function fadeIn(el,duration){
  return new Promise(resolve=>{
    el.style.opacity=0;
    let opacity=0;
    const interval=50;
    const increment=interval/duration;
    const anim=setInterval(()=>{
      opacity+=increment;
      if(opacity>=1){opacity=1; clearInterval(anim); resolve();}
      el.style.opacity=opacity;
    },interval);
  });
}

function typeLetter(el,text,speed){
  return new Promise(resolve=>{
    let i=0;
    function type(){
      if(i<text.length){
        el.innerHTML+=text.charAt(i);
        i++;
        setTimeout(type,speed);
      } else resolve();
    }
    type();
  });
}

function fireworks(count){
  for(let i=0;i<count;i++){
    setTimeout(()=>{
      const f = document.createElement('div');
      f.className='firework';
      f.style.left=Math.random()*90+'%';
      f.style.top=Math.random()*50+'%';
      f.style.color=['#ff4d6d','#ffb84d','#85ff4d','#4dcfff','#b84dff'][Math.floor(Math.random()*5)];
      document.body.appendChild(f);
      setTimeout(()=>f.remove(),1500);
    }, i*300);
  }
}
