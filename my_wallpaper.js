// === PARAMETERS (5+ required) ===
let starColor = "#FF69B4";           // Hot pink
let strokeCol = "#800080";           // Purple outline
let starSize = 80;                   // Medium stars with stroke
let strokeThickness = 3;             // Normal stroke
let starRotation = 0;                // No rotation
let backgroundCol = [240, 255, 240]; // Light green background

// === SETUP WALLPAPER ===
function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(GRID_WALLPAPER);
  pWallpaper.resolution(A3);
  pWallpaper.show_guide(false); // Turn off for final images
  
  pWallpaper.grid_settings.cell_width = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset = 100;
}

function wallpaper_background() {
  background(backgroundCol[0], backgroundCol[1], backgroundCol[2]);
}

function my_symbol() {
  push();
  
  // Apply rotation parameter
  rotate(radians(starRotation));
  
  fill(starColor);
  stroke(strokeCol);
  strokeWeight(strokeThickness);
  
  //  IF STATEMENT 1: No stroke for small stars
  if (starSize < 50) {
    noStroke();
  }
  
  // Use starSize parameter!
  beginShape();
  
  // All coordinates multiplied by starSize/80 to make it parametric
  let scale = starSize / 80; 
  
  // IF STATEMENT 2: Different shapes based on size
  if (starSize > 100) {
    // Simple triangle for very large stars
    vertex(0, -starSize/2 * scale);
    vertex(starSize/2 * scale, starSize/2 * scale);
    vertex(-starSize/2 * scale, starSize/2 * scale);
  } else {
    // Regular 5-pointed star for normal/small sizes
    // Point 1 (top)
    vertex(0, -starSize/2 * scale);
    // Inner point 1
    vertex(starSize/8 * scale, -starSize/8 * scale);
    // Point 2 (right)
    vertex(starSize/2 * scale, 0);
    // Inner point 2
    vertex(starSize/8 * scale, starSize/8 * scale);
    // Point 3 (bottom right)
    vertex(starSize/4 * scale, starSize/2 * scale);
    // Inner point 3
    vertex(0, starSize/4 * scale);
    // Point 4 (bottom left)
    vertex(-starSize/4 * scale, starSize/2 * scale);
    // Inner point 4
    vertex(-starSize/8 * scale, starSize/8 * scale);
    // Point 5 (left)
    vertex(-starSize/2 * scale, 0);
    // Inner point 5
    vertex(-starSize/8 * scale, -starSize/8 * scale);
  }
  
  endShape(CLOSE);
  pop();
}
