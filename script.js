
(function () {
  const video      = document.getElementById('wildlifeVideo');
  const wrapper    = document.getElementById('videoWrapper');
  const toggleBtn  = document.getElementById('toggleBtn');
  const btnIcon    = toggleBtn.querySelector('.btn-icon');
  const btnLabel   = toggleBtn.querySelector('.btn-label');


  function setButtonToHide() {
    btnIcon.textContent        = '⏹';
    btnLabel.textContent       = 'Hide Video';
    toggleBtn.setAttribute('aria-pressed', 'true');
    toggleBtn.removeAttribute('data-state');
  }

  function setButtonToShow() {
    btnIcon.textContent        = '▶';
    btnLabel.textContent       = 'Play Video';
    toggleBtn.setAttribute('aria-pressed', 'false');
    toggleBtn.setAttribute('data-state', 'show');
  }

 
  setButtonToHide();   


  toggleBtn.addEventListener('click', function () {
    const isHidden = wrapper.classList.contains('hidden');

    if (isHidden) {
      
      wrapper.classList.remove('hidden');
      video.play();
      setButtonToHide();
    } else {
      
      if (!video.paused) {
        video.pause();
        wrapper.classList.add('hidden');
        setButtonToShow();
      } else {
        video.play();
        setButtonToHide();
      }
    }
  });

  video.addEventListener('ended', function () {
    setButtonToShow();
  });

  video.addEventListener('pause', function () {
    if (wrapper.classList.contains('hidden')) return;
    btnIcon.textContent  = '▶';
    btnLabel.textContent = 'Play Video';
    toggleBtn.setAttribute('aria-pressed', 'false');
    toggleBtn.setAttribute('data-state', 'show');
  });

  video.addEventListener('play', function () {
    setButtonToHide();
  });

})();
