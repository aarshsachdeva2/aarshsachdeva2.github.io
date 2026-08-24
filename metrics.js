document.addEventListener("DOMContentLoaded",()=>{
  const loader=document.getElementById("loader");
  const progress=document.getElementById("progress");
  const cursor=document.getElementById("cursor");

  window.addEventListener("load",()=>{
    setTimeout(()=>loader.classList.add("hidden"),500);
  });

  const updateProgress=()=>{
    const max=document.documentElement.scrollHeight-window.innerHeight;
    progress.style.width=(max>0?(window.scrollY/max)*100:0)+"%";
  };
  window.addEventListener("scroll",updateProgress,{passive:true});
  updateProgress();

  if(!matchMedia("(pointer:coarse)").matches){
    let x=innerWidth/2,y=innerHeight/2,tx=x,ty=y;
    addEventListener("mousemove",e=>{tx=e.clientX;ty=e.clientY});
    const loop=()=>{
      x+=(tx-x)*.18;y+=(ty-y)*.18;
      cursor.style.left=x+"px";cursor.style.top=y+"px";
      requestAnimationFrame(loop);
    }; loop();
    document.querySelectorAll("a,button").forEach(el=>{
      el.addEventListener("mouseenter",()=>cursor.classList.add("hover"));
      el.addEventListener("mouseleave",()=>cursor.classList.remove("hover"));
    });
  }else{cursor.style.display="none";}

  const observer=new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting) entry.target.classList.add("visible");
    });
  },{threshold:.12});
  document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));

  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener("click",e=>{
      const target=document.querySelector(a.getAttribute("href"));
      if(target){e.preventDefault();target.scrollIntoView({behavior:"smooth"});}
    });
  });
});

/* Email link safety: portfolio email opens Gmail compose instead of a legacy browser mail handler. */
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll('a[href^="mailto:"]').forEach(function (link) {
    const href = link.getAttribute("href") || "";
    if (href.toLowerCase().includes("aarshsachdeva28@gmail.com")) {
      link.href = "https://mail.google.com/mail/?view=cm&fs=1&to=aarshsachdeva28%40gmail.com&su=Portfolio%20Inquiry&body=Hi%20Aarsh%2C%0A%0AI%20came%20across%20your%20portfolio%20and%20would%20like%20to%20connect.";
      link.target = "_blank";
      link.rel = "noopener noreferrer";
    }
  });
});
