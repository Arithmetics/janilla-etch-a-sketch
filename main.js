const container = document.querySelector('#container');
const reset = document.querySelector('#reset');
let squares = 16

function drawSquares() {
  for (i=0;i<squares;i++){
    let row = document.createElement('div');
    row.classList.add('row');
    for (j=0;j<squares;j++){
      let block = document.createElement('div');
      block.classList.add('block');
      row.appendChild(block);
    }
    container.appendChild(row);
  }
  let blocks = document.querySelectorAll('.block');
  let size = 800/squares;

  blocks.forEach(function(e) {
    e.style.width = size;
    e.style.height = size;
    e.addEventListener('mouseover', function(tar){
      tar.target.classList.add('swipped');
    });
  });
}

drawSquares();




reset.addEventListener('click', function(e){
  while(container.firstChild){
    container.removeChild(container.firstChild);
  }
  let newsquares = prompt("select resolution");
  squares = newsquares;
  drawSquares();
});
