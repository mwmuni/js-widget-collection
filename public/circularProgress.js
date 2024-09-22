function circularProgressCircles() {
    var stage = new createjs.Stage("circularProgressCanvas");
    const canvasWidth = stage.canvas.width;
    const canvasHeight = stage.canvas.height;
    const circleSize = Math.sqrt(canvasWidth * canvasHeight) / 30;
    const numCircles = 5;
    var circles = [];
    const baseLoopDuration = 2500; // Base animation time
    const staggerInterval = 200; // Stagger interval in ms
    const maxWait = staggerInterval * (numCircles - 1); // Maximum initial wait
    const animationCircleSize = circleSize * 2;
  
    const centerX = canvasWidth / 2;
    const centerY = canvasHeight / 2;
    const radius = Math.min(canvasWidth, canvasHeight) / 4;
  
    // Create and position circles
    for (let i = 0; i < numCircles; i++) {
      var circle = new createjs.Shape();
      circle.graphics.beginFill("Crimson").drawCircle(0, 0, circleSize); // Smaller circles
      circle.alpha = 0;
      circle.angle = 0; // Initialize angle property
      circle.x = centerX + radius * Math.cos(circle.angle * Math.PI / 180);
      circle.y = centerY + radius * Math.sin(circle.angle * Math.PI / 180);
      circles.push(circle);
      stage.addChild(circle); // Add the circle to the stage
  
      var initialWait = staggerInterval * i; // Staggered start
      var duration = 2000; // Duration for a full circle
  
      // Animate each circle
      createjs.Tween.get(circle, { loop: true })
        .wait(initialWait)
        .to({ angle: 120, alpha: 1 }, duration * .5, createjs.Ease.getPowInOut(2)) // Fade in
        .to({ angle: 300 }, duration * .4, createjs.Ease.linear) // Rotate almost full circle
        .to({ angle: 360, alpha: 0 }, duration * .1, createjs.Ease.linear) // Rotate full circle
        .call(() => {
          circle.angle = 0; // Reset angle after full rotation
        })
        .to({ alpha: 0 }, 500, createjs.Ease.getPowInOut(2)) // Fade out
        .wait(maxWait - initialWait); // Wait to synchronize the loop
    }
  
    // Update positions of circles on each tick
    function updatePositions(event) {
      circles.forEach((circle) => {
        circle.x = centerX + radius * -Math.cos(circle.angle * Math.PI / 180);
        circle.y = centerY + radius * -Math.sin(circle.angle * Math.PI / 180);
      });
      stage.update(event);
    }
  
    createjs.Ticker.setFPS(60);
    createjs.Ticker.addEventListener("tick", updatePositions);
  }
  
  circularProgressCircles();