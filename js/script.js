//rotate reset button
function rotateresetbutton() {
  const resetbtn = document.querySelector('.reset');
  resetbtn.classList.toggle('active');
}

//switch left,middle and right part of banner

function switchbanner(name) {
  const banner = document.querySelector('#banner');
  if (!banner.classList.contains(name)) {
    banner.classList = 'banner';
    banner.classList.add(name);
    rotateresetbutton();
  }
  return;
}

//reset button
function resetBanner() {
  const banner = document.querySelector('#banner');
  banner.className = 'banner';
  rotateresetbutton();
}

const selectHeader = document.querySelector('#header');
const backToTop = document.querySelector('.back-to-top');
if (selectHeader) {
  const headerScrolled = () => {
    if (window.scrollY > 100) {
      selectHeader.classList.add('header-scrolled');
      backToTop.classList.add('active');
    } else {
      selectHeader.classList.remove('header-scrolled');
      backToTop.classList.remove('active');
    }
  };
  window.addEventListener('load', headerScrolled);
  document.addEventListener('scroll', headerScrolled);
}


function scrolltotop(){
    window.scroll(0,50);
}