let randNum = 100;

document.getElementById('meow').addEventListener('click', async () => {

  if (randNum <= 33) {
    document.getElementById('frame').src = "";
    document.getElementById('vid').src = "https://i.imgur.com/MxAE8Wp.mp4"
    document.getElementById('vid').style.display = "block";
    document.getElementById('vid').style.marginLeft = "auto";
    document.getElementById('vid').style.marginRight = "auto";
    document.getElementById('vid').style.width = "40%";

    return
  }

  let fetch_result = await fetch("https://aws.random.cat/meow");
  let cat = await fetch_result.json();
  document.getElementById('frame').src = cat.file;

  randNum = Math.floor(Math.random() * 100) + 1;


})

document.getElementById('meow1').addEventListener('click', async () => {

  if (randNum <= 33) {
    document.getElementById('frame').src = "";
    document.getElementById('vid').src = "https://i.imgur.com/MxAE8Wp.mp4"
    document.getElementById('vid').style.display = "block";
    document.getElementById('vid').style.marginLeft = "auto";
    document.getElementById('vid').style.marginRight = "auto";
    document.getElementById('vid').style.width = "40%";

    return
  }

  let fetch_result = await fetch("https://aws.random.cat/meow");
  let cat = await fetch_result.json();
  document.getElementById('frame').src = cat.file;

  randNum = Math.floor(Math.random() * 100) + 1;
})