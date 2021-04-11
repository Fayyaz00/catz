
document.getElementById('meow').addEventListener('click', async () => {

  let fetch_result = await fetch("https://aws.random.cat/meow");
  let cat = await fetch_result.json();
  document.getElementById('frame').src = cat.file;
})

document.getElementById('meow1').addEventListener('click', async () => {

  let fetch_result = await fetch("https://aws.random.cat/meow");
  let cat = await fetch_result.json();
  document.getElementById('frame').src = cat.file;
})