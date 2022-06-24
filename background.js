// reload
function reload() {
  window.location.reload();
}

// sheesh
function sheesh() {
  const sheesh = chance();

  if (sheesh) {
    const body = document.body;
    body.innerHTML = "<video autoplay onended='reload();' style='height: 100%; width: 100%'><source src='https://raw.githubusercontent.com/someStranger8/Sheesh/master/dh.mp4' type='video/mp4'></video>";
    
  }
}

// chance
function chance() {
  const chance = Math.floor(Math.random() * 100);

  if (chance == 69) {
    return true;
  }

  return false;
}

sheesh();
