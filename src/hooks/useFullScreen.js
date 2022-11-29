import React from 'react';

const exitFullscreen = () => {
  if (document.fullscreenElement) {
    document.exitFullscreen();
  } else if ((document).mozCancelFullScreen) {
    (document).mozCancelFullScreen();
  } else if ((document).webkitExitFullscreen) {
    (document).webkitExitFullscreen();
  } else if ((document).msExitFullscreen) {
    (document).msExitFullscreen();
  }
};

export const launchIntoFullscreen = (element) => {
  if (element.requestFullscreen) {
    element.requestFullscreen();
  } else if (element.mozRequestFullScreen) {
    element.mozRequestFullScreen();
  } else if (element.webkitRequestFullscreen) {
    element.webkitRequestFullscreen();
  } else if (element.msRequestFullscreen) {
    element.msRequestFullscreen();
  }
};


export function useFullscreen() {
  const [fullscreen, setFullscreen] = React.useState(false);

  function toggleFullscreen(element) {
    if (fullscreen) {
      exitFullscreen();
    } else {
      launchIntoFullscreen(element);
    }
  }

  React.useLayoutEffect(() => {
    function detectFullscreen() {
      const hasFullscreenElement =
        document.fullscreenElement || document.webkitFullscreenElement;
      setFullscreen(!!hasFullscreenElement);
    }
    document.onfullscreenchange = detectFullscreen;
    document.addEventListener('webkitfullscreenchange', detectFullscreen);
    return () => {
      document.removeEventListener('webkitfullscreenchange', detectFullscreen);
    };
  }, []);

  return { fullscreen, toggleFullscreen };
}
