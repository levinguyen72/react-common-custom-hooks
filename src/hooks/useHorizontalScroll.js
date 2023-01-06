const useHorizantalScroll = (element, speed, distance, step) => {
  let scrollAmount = 0;
  const slideTimer = setInterval(() => {
    element.scrollLeft += step;
    scrollAmount += Math.abs(step);
    if (scrollAmount >= distance) {
      clearInterval(slideTimer);
    }
    if (element.scrollLeft === 0) {
      setArrowDisable(true);
    } else {
      setArrowDisable(false);
    }
  }, speed);
};

export default useHorizantalScroll