
// Footer year
const y=document.getElementById("y");
if(y) y.textContent = new Date().getFullYear();

// Mobile menu
const btn=document.querySelector(".menu");
const mobile=document.getElementById("mobileNav");
if(btn && mobile){
  btn.addEventListener("click", ()=>{
    const open = !mobile.hasAttribute("hidden");
    if(open){
      mobile.setAttribute("hidden","");
      btn.setAttribute("aria-expanded","false");
    }else{
      mobile.removeAttribute("hidden");
      btn.setAttribute("aria-expanded","true");
    }
  });

  // Close menu when clicking a link
  mobile.addEventListener("click", (e)=>{
    const a = e.target.closest("a");
    if(!a) return;
    mobile.setAttribute("hidden","");
    btn.setAttribute("aria-expanded","false");
  });
}
