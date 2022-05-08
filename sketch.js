let myFont;
function preload() {
  myFont = loadFont("spacegrotesk-medium.otf");
}

let pg;
function setup() {
  createCanvas(600, 600);

  pg = createGraphics(600, 600);

  pg.fill("#fff");
  pg.textFont(myFont);
  pg.textSize(800);
  pg.textAlign(CENTER, CENTER);
  pg.text("$", 300, 240);
}

function draw() {
  background("#000")
  const tileSize = 50;
  for (let x = 0; x < 12; x = x + 1) {
    for (let y = 0; y < 12; y = y + 1) {
      
      const distortion = sin(frameCount * 0.05 + x * 0.5 +y *0.3) * 50
      
      //source
      const sx = x * tileSize + distortion
      const sy = y * tileSize
      const sw = tileSize 
      const sh = tileSize
      
      //Destination
      
      const dx = x * tileSize
      const dy = y * tileSize
      const dw = tileSize
      const dh = tileSize
      
      
      
     image(pg, dx, dy, dw, dh, sx, sy, sw, sh)
    }
  }
}
