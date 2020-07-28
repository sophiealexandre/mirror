const player = document.getElementById('player');
const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
const captureButton = document.getElementById('capture');

const constraints = {
  video: true,
};

captureButton.addEventListener('click', () => {
  // Draw the video frame to the canvas.
  context.drawImage(player, 0, 0, canvas.width, canvas.height);
});

// Attach the video stream to the video element and autoplay.
navigator.mediaDevices.getUserMedia(constraints)
  .then((stream) => {
    player.srcObject = stream;
  });

// Choose filters

function myFunction() {
   var element = document.getElementById("canvas");
   var filter = document.getElementById('filter').value;
   console.log(filter)
   element.classList.add(filter);
}

// Choose Text
function getValue(){
  var query = document.getElementById('in').value;
  console.log(query)
  txt = query
  document.getElementById("demo").innerHTML = txt;
}

// Print the poster

function printDocument(poster) {

    var y = document.getElementById("headertohide");
    if (y.style.display === "none") {
      y.style.display = "block";
    } else {
      y.style.display = "none";
    }
      var x = document.getElementById("hide");
      if (x.style.display === "none") {
        x.style.display = "block";
      } else {
        x.style.display = "none";
      }

      var z = document.getElementById("buttonhide");
      if (z.style.display === "none") {
        z.style.display = "block";
      } else {
        z.style.display = "none";
      }

  //Wait until PDF is ready to print



    //Wait until PDF is ready to print

        window.print();

}



