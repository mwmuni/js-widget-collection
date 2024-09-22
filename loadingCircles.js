function loadingCircles() {
    var stage = new createjs.Stage("loadingCirclesCanvas");
    const canvasWidth = stage.canvas.width;
    const canvasHeight = stage.canvas.height;
    var circles = [];
    var numCircles = 5;
    var baseLoopDuration = 2500; // Base animation time
    var staggerInterval = 200; // Stagger interval in ms
    var maxWait = staggerInterval * (numCircles - 1); // Maximum initial wait
    
  
    const circleSize = Math.sqrt(canvasWidth * canvasHeight) / 30;
  
    // Create and position circles
    for (let i = 0; i < numCircles; i++) {
      var circle = new createjs.Shape();
      circle.graphics.beginFill("Crimson").drawCircle(0, 0, circleSize); // Smaller circles
      // The animation should take up half of the canvas width, but not touch the first and last quarter
      circle.alpha = 0;
      circle.x = canvasWidth / 4 + circleSize + i * circleSize * 4;
      circle.y = canvasHeight * 2/3; // Start from the lower third of the canvas
      circles.push(circle);
      stage.addChild(circle);
    }
  
    // Animate the first circle separately (no initial wait)
    createjs.Tween.get(circles[0], { loop: true })
      .to({ y: canvasHeight / 2, alpha: 1 }, 1000, createjs.Ease.getPowInOut(4)) // Move up
      .to({ x: circles[0].x }, 1000, createjs.Ease.getPowInOut(4)) // Move left
      .to({ alpha: 0 }, 500, createjs.Ease.getPowInOut(2)) // Fade out
      .to({ alpha: 1, y: canvasHeight + circleSize * 2 }, 0) // Reset position and opacity
      .wait(maxWait); // Wait to complete the loop duration
  
    // Animate the remaining circles with staggered starts
    circles.slice(1).forEach((circle, index) => {
      var initialWait = staggerInterval * (index + 1); // 200, 400, 600, 800 ms
      var remainingWait = maxWait - initialWait; // 600, 400, 200, 0 ms
  
      createjs.Tween.get(circle, { loop: true })
        .wait(initialWait) // Staggered start
        .to({ y: canvasHeight / 2, alpha: 1 }, 1000, createjs.Ease.getPowInOut(4)) // Move up
        .to({ x: canvasWidth / 4 + circleSize + (index + 1) * circleSize * 2 }, 1000, createjs.Ease.getPowInOut(4)) // Move left
        .to({ alpha: 0 }, 500, createjs.Ease.getPowInOut(2)) // Fade out
        .to({ alpha: 1, y: canvasHeight + circleSize * 2 }, 0) // Reset position and opacity
        .wait(remainingWait); // Wait to complete the loop duration
    });
  
    createjs.Ticker.setFPS(60);
    createjs.Ticker.addEventListener("tick", stage);
  }

loadingCircles();