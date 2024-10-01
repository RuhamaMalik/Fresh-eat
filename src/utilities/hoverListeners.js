const attachHoverListeners = () => {
    const links = document.querySelectorAll("a, .nav-link, .cursor-pointer");
    // const links = document.querySelectorAll("a, .nav-link");
    links.forEach(el => {
      el.addEventListener('mouseenter', () => {
        document.querySelector('.cursor-inner').classList.add("cursor-hover");
        document.querySelector('.cursor-outer').classList.add("cursor-hover");
      });
      el.addEventListener('mouseleave', () => {
        document.querySelector('.cursor-inner').classList.remove("cursor-hover");
        document.querySelector('.cursor-outer').classList.remove("cursor-hover");
      });
    });
  };
  export default attachHoverListeners;