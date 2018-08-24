function Card(feed) {
  return `
    <div class="card m-5">
       
       <div class="card-body bg-dark">
          <h5 class="card-title"> 
           <a href="${feed.link}" target="_blank" class="text-light">
            ${feed.title} 
           </a>
          </h5>
       </div>
    </div>
    `;
}

const feedView = document.getElementById("feed");

function getFeed() {
  const url = "https://medium.freecodecamp.org/feed";
  let collection = "";

  feednami
    .load(url)
    .then(feed => {
      console.log(feed.entries);
      feed.entries.map(i => {
        collection += Card(i);
      });
    })
    .then(() => {
      feedView.innerHTML = collection;
    })
    .catch(err => {
      console.log(err);
      alert("sorry something went wrong please try again");
    });
}

window.onload = getFeed();
