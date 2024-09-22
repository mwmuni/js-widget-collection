// I want an animation that uses a straight line to position circles, and to linearly scale the circles to give a 3D effect.
function threeDBar() {
    const stage = new createjs.Stage("threeDBarCanvas");
    const canvasWidth = stage.canvas.width;
    const canvasHeight = stage.canvas.height;
    const numCircles = 100; // Number of circles for better effect
    const baseCircleSize = Math.sqrt(canvasWidth * canvasHeight) / 30;
    const centerX = canvasWidth / 2;
    const centerY = canvasHeight / 2;
    const lineLength = Math.min(canvasWidth, canvasHeight) / 2; // Length of the line
  
    // Oscillation parameters
    let time = 0;
    const amplitude = Math.PI / 6; // Maximum tilt angle (30 degrees)
    const frequency = 0.02; // Speed of oscillation (radians per tick)
  
    // Fixed center point of the line
    const centerPoint = { x: centerX, y: centerY };
  
    // Initial direction angle
    let directionAngle = 0; // Radians
    let direction = { x: Math.cos(directionAngle), y: Math.sin(directionAngle) };
  
    // Create and position circles
    const circles = [];
    for (let i = 0; i < numCircles; i++) {
      const circle = new createjs.Shape();
      circle.graphics.beginFill("Crimson").drawCircle(0, 0, baseCircleSize);
      // Position circles evenly along the line
      const t = i / (numCircles - 1); // Parameter from 0 to 1
      circle.x = centerPoint.x + direction.x * (t - 0.5) * lineLength;
      circle.y = centerPoint.y + direction.y * (t - 0.5) * lineLength;
      // Initial scale set to 1
      circle.scaleX = circle.scaleY = 1;
      circles.push(circle);
      stage.addChild(circle);
    }
  
    // Set framerate
    createjs.Ticker.framerate = 60;
    createjs.Ticker.addEventListener("tick", handleTick);
  
    function handleTick(event) {
      // Update time
      time += 1;
  
      // Update directionAngle with oscillation
      directionAngle = amplitude * Math.sin(frequency * time);
  
      // Calculate new direction vector based on directionAngle
      direction.x = Math.cos(directionAngle);
      direction.y = Math.sin(directionAngle);
  
      // Update each circle's position along the tilted line
      circles.forEach((circle, index) => {
        const t = index / (numCircles - 1); // Parameter from 0 to 1
        // Shift t from 0-1 to -0.5 to +0.5 for symmetric placement around center
        const shiftedT = t - 0.5;
        circle.x = centerPoint.x + direction.x * shiftedT * lineLength;
        circle.y = centerPoint.y + direction.y * shiftedT * lineLength;
      });
  
      // Determine scaling based on the direction's angle
      // Scaling factor ranges from 0.5 to 1.5
      // When directionAngle is positive, one end scales up and the other scales down
      // When directionAngle is negative, the opposite occurs
      const scaleFactor = 1 + (directionAngle / amplitude) * 0.5; // Normalize to range 0.5 to 1.5
      const oppositeScaleFactor = 2 - scaleFactor; // Opposite scaling
  
      // Apply scaling to circles based on their position along the line
      circles.forEach((circle, index) => {
        const t = index / (numCircles - 1);
        // Scale up circles towards one end and scale down the opposite end
        const currentScale = scaleFactor * t + oppositeScaleFactor * (1 - t);
        circle.scaleX = circle.scaleY = currentScale;
      });
  
      stage.update(event);
    }
  }
  
  threeDBar();