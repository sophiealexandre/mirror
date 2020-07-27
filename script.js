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


function myFunction() {
   var element = document.getElementById("canvas");
   var filter = document.getElementById('filter').value;
   console.log(filter)
   element.classList.add(filter);
}
function getValue(){
  var query = document.getElementById('in').value;
  console.log(query)
  txt = query
  document.getElementById("demo").innerHTML = txt;
}

function printDocument(poster) {
    var doc = document.getElementById(poster);

    //Wait until PDF is ready to print

        window.print();

}
