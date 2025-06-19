const menuBtn = document.querySelector('.menuBtn');
const navLinks = document.querySelector('.navLinks');
menuBtn.addEventListener('click', () => navLinks.classList.toggle('showMenu'));

(function(){
  const slidesData = Array.from({length:10}, (_,i)=>({
    img:`assets/img${i+1}.jpg`,
    title:["Nature","Sky","Forest","Ocean","Mountains","Desert","Aurora","Rainforest","Waterfall","Galaxy"][i],
    quote:["Golden sunrise above calm waters.","Endless hues of blue.","Whispering leaves’ tales.","Waves of serenity.","Peaks touching silence.","Dunes under dusky skies.","Lights dance above.","Emerald canopy symphony.","Majestic cascading energy.","Stars across midnight sky."][i]
  }));

  const slider = document.querySelector('.slider');
  const dotsCont = document.querySelector('.slider-dots');
  let current = 0, playing = true, timer;

  slidesData.forEach((s,i)=>{
    const div = document.createElement('div');
    div.className = 'slide';
    div.dataset.index = i;
    div.dataset.title = s.title;
    div.dataset.quote = s.quote;
    div.innerHTML = `<img src="${s.img}" alt="${s.title}">`;
    slider.append(div);

    const dot = document.createElement('span');
    dot.className = 'dot';
    dot.addEventListener('click', ()=> goToSlide(i));
    dotsCont.append(dot);
  });

  const slides = document.querySelectorAll('.slide');
  const prevBtn = document.querySelector('.prev-btn');
  const nextBtn = document.querySelector('.next-btn');
  const playBtn = document.querySelector('.play-btn');

  prevBtn.onclick = prevSlide;
  nextBtn.onclick = nextSlide;
  playBtn.onclick = ()=> playing ? pauseSlideshow() : startSlideshow();

  slides.forEach(s => {
    s.onclick = ()=> openPreview(+s.dataset.index);
    s.onmouseover = pauseSlideshow;
    s.onmouseout = startSlideshow;
  });

  function render(){
    slides.forEach((s,i)=>{
      s.className = 'slide';
      if(i === current) s.classList.add('active');
      if(i === (current-1+slides.length)%slides.length) s.classList.add('left');
      if(i === (current-2+slides.length)%slides.length) s.classList.add('far-left');
      if(i === (current+1)%slides.length) s.classList.add('right');
      if(i === (current+2)%slides.length) s.classList.add('far-right');
    });
    dotsCont.querySelectorAll('.dot').forEach((d,i)=> d.classList.toggle('active',i===current));
  }

  function nextSlide(){
    current = (current+1)%slides.length;
    render();
  }
  function prevSlide(){
    current = (current-1+slides.length)%slides.length;
    render();
  }
  function goToSlide(i){
    current = i;
    render();
  }
  function startSlideshow(){
    playing = true;
    playBtn.textContent = '||';
    timer = setInterval(nextSlide,3000);
  }
  function pauseSlideshow(){
    playing = false;
    playBtn.textContent = '▶';
    clearInterval(timer);
  }

  render();
  startSlideshow();

  const modal = document.getElementById('previewModal');
  const mpic = modal.querySelector('img');
  const mtitle = modal.querySelector('.preview-caption h2');
  const mquote = modal.querySelector('.preview-caption p');
  let modalIndex;

  function openPreview(i){
    modalIndex = i;
    const s=slidesData[i];
    mpic.src = s.img;
    mtitle.textContent = s.title;
    mquote.textContent = s.quote;
    modal.style.display = 'flex';
    pauseSlideshow();
  }

  modal.querySelector('.preview-next').onclick = ()=> openPreview((modalIndex+1)%slides.length);
  modal.querySelector('.preview-prev').onclick = ()=> openPreview((modalIndex-1+slides.length)%slides.length);
  modal.querySelector('.preview-close').onclick = ()=> {
    modal.style.display='none';
    startSlideshow();
  };
  modal.onclick = e=> {
    if(e.target===modal){
      modal.style.display='none';
      startSlideshow();
    }
  };

  let startX=0, endX=0;
  const sc = document.querySelector('.slider-container');
  sc.addEventListener('touchstart',e=>startX=e.touches[0].clientX);
  sc.addEventListener('touchend',e=>{
    endX=e.changedTouches[0].clientX;
    if(endX < startX - 50) nextSlide();
    if(endX > startX + 50) prevSlide();
  });
})();
