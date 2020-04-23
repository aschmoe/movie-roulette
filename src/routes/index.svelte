<script context="module">
  export async function preload({ params }) {
    console.log("hi2");
    let res;
    try {
      res = await this.fetch(`movies.json`);
    } catch (e) {
      this.error(404, "Sorry we couldn't find this entry");
      return;
    }

    const data = await res.json();

    if (res.status === 200) {
      console.log("ummmm");
      return { options: data };
    } else {
      this.error(
        res.status,
        data.message || "Sorry we couldn't find this entry"
      );
    }
  }
</script>

<script>
  import { onMount } from "svelte";

  export let options = [];

  let didRender = false;

  let startAngle = 0;
  let arc = Math.PI / (options.length / 2);
  let spinTimeout = null;

  let spinAngleStart = 10;
  let spinTime = 0;
  let spinTimeTotal = 0;

  const canvasWidth = 1000;
  const canvasHalf = canvasWidth / 2;

  let ctx;

  // document.getElementById("spin").addEventListener("click", spin);

  function byte2Hex(n) {
    const nybHexString = "0123456789ABCDEF";
    return (
      String(nybHexString.substr((n >> 4) & 0x0f, 1)) +
      nybHexString.substr(n & 0x0f, 1)
    );
  }

  function RGB2Color(r, g, b) {
    return "#" + byte2Hex(r) + byte2Hex(g) + byte2Hex(b);
  }

  function getColor(item, maxitem) {
    const phase = 0;
    const center = 128;
    const width = 127;
    const frequency = (Math.PI * 2) / maxitem;

    const red = Math.sin(frequency * item + 2 + phase) * width + center;
    const green = Math.sin(frequency * item + 0 + phase) * width + center;
    const blue = Math.sin(frequency * item + 4 + phase) * width + center;

    return RGB2Color(red, green, blue);
  }

  function drawRouletteWheel() {
    const canvas = document.getElementById("canvas");
    if (canvas.getContext) {
      const outsideRadius = canvasHalf - 50;
      const textRadius = canvasHalf - 90;
      const insideRadius = canvasHalf / 8;

      ctx = canvas.getContext("2d");
      ctx.clearRect(0, 0, canvasWidth, canvasWidth);

      ctx.strokeStyle = "black";
      ctx.lineWidth = 2;

      ctx.font = "bold 12px Helvetica, Arial";

      for (let i = 0; i < options.length; i++) {
        let angle = startAngle + i * arc;
        //ctx.fillStyle = colors[i];
        ctx.fillStyle = getColor(i, options.length);

        ctx.beginPath();
        ctx.arc(
          canvasHalf,
          canvasHalf,
          outsideRadius,
          angle,
          angle + arc,
          false
        );
        ctx.arc(canvasHalf, canvasHalf, insideRadius, angle + arc, angle, true);
        ctx.stroke();
        ctx.fill();

        ctx.save();
        // ctx.shadowOffsetX = -1;
        // ctx.shadowOffsetY = -1;
        // ctx.shadowBlur = 0;
        // ctx.shadowColor = "rgb(220,220,220)";
        ctx.fillStyle = "black";
        ctx.translate(
          canvasHalf + Math.cos(angle + arc / 2) * textRadius,
          canvasHalf + Math.sin(angle + arc / 2) * textRadius
        );
        ctx.rotate(angle + arc / 2);
        // ctx.rotate(angle + arc / 2 + Math.PI / 2);
        const text = options[i].title;
        // -ctx.measureText(text).width / 2
        ctx.fillText(text, -(canvasHalf / 2), 5);
        ctx.restore();
      }

      //Arrow
      ctx.fillStyle = "black";
      ctx.beginPath();
      ctx.moveTo(canvasHalf - 4, canvasHalf - (outsideRadius + 5));
      ctx.lineTo(canvasHalf + 4, canvasHalf - (outsideRadius + 5));
      ctx.lineTo(canvasHalf + 4, canvasHalf - (outsideRadius - 5));
      ctx.lineTo(canvasHalf + 9, canvasHalf - (outsideRadius - 5));
      ctx.lineTo(canvasHalf + 0, canvasHalf - (outsideRadius - 13));
      ctx.lineTo(canvasHalf - 9, canvasHalf - (outsideRadius - 5));
      ctx.lineTo(canvasHalf - 4, canvasHalf - (outsideRadius - 5));
      ctx.lineTo(canvasHalf - 4, canvasHalf - (outsideRadius + 5));
      ctx.fill();
    }
  }

  function rotateWheel() {
    spinTime += 30;
    if (spinTime >= spinTimeTotal) {
      stopRotateWheel();
      return;
    }
    const spinAngle =
      spinAngleStart - easeOut(spinTime, 0, spinAngleStart, spinTimeTotal);
    startAngle += (spinAngle * Math.PI) / 180;
    drawRouletteWheel();
    spinTimeout = setTimeout(() => rotateWheel(), 30);
  }

  function stopRotateWheel() {
    clearTimeout(spinTimeout);
    const degrees = (startAngle * 180) / Math.PI + 90;
    const arcd = (arc * 180) / Math.PI;
    const index = Math.floor((360 - (degrees % 360)) / arcd);
    ctx.save();

    const drawTitle = () => {
      const text = options[index].title;
      ctx.fillStyle = "white";
      ctx.shadowOffsetX = 2;
      ctx.shadowOffsetY = 2;
      ctx.shadowBlur = 5;
      ctx.shadowColor = "rgba(20,20,20,0.5)";
      ctx.font = "bold 50px Helvetica, Arial";
      ctx.fillText(
        text,
        canvasHalf - ctx.measureText(text).width / 2,
        canvasHalf + 20
      );
      ctx.restore();
    };

    if (options[index].image) {
      const background = new Image();
      background.src = options[index].image;
      // Make sure the image is loaded first otherwise nothing will draw.
      background.onload = function() {
        console.log("loaded", background);
        const ratio = canvasWidth / background.width;
        const imageHeight = background.height * ratio;
        ctx.drawImage(
          background,
          0,
          canvasHalf - imageHeight / 2,
          canvasWidth,
          imageHeight
        );
        // ctx.drawImage(background, 0, 0);
        drawTitle();
      };
    } else {
      drawTitle();
    }
  }

  function spin() {
    spinAngleStart = Math.random() * 10 + 10;
    spinTime = 0;
    spinTimeTotal = Math.random() * 3 + 4 * 1000;
    rotateWheel();
  }

  function easeOut(t, b, c, d) {
    const ts = (t /= d) * t;
    const tc = ts * t;
    return b + c * (tc + -3 * ts + 3 * t);
  }

  onMount(() => {
    console.log("should render");
    console.log(options);
    drawRouletteWheel();
    // stopRotateWheel();
  });

  $: optionsValid = options.length > 0;
</script>

<style>
  h1 {
    text-align: center;
    margin: 0 auto;
  }

  h1 {
    font-size: 2.8em;
    text-transform: uppercase;
    font-weight: 700;
    margin: 0 0 0.5em 0;
  }

  /* figure {
		margin: 0 0 1em 0;
	}

	img {
		width: 100%;
		max-width: 400px;
		margin: 0 0 1em 0;
	} */

  /* p {
    margin: 1em auto;
  } */

  .wrapper {
    margin: 0 auto;
    text-align: center;
  }

  input {
    color: white;
    text-align: center;
    cursor: pointer;
    font-size: 24px;
    margin: 0 0 0 0;
    padding: 20px 60px;
    outline: none;
    background-color: #777;
    border: none;
    border-radius: 5px;
    box-shadow: 0 9px #95a5a6;
  }

  input:hover {
    background-color: #666;
  }

  input:active {
    background-color: #666;
    box-shadow: 0 5px #95a5a6;
    transform: translateY(4px);
  }

  @media (min-width: 480px) {
    h1 {
      font-size: 4em;
    }
  }
</style>

<svelte:head>
  <title>Bad Movie Night</title>
</svelte:head>

<div class="wrapper" style="width:{canvasWidth}px">
  <h1>
    <strike>Bad</strike>
    Our Movie Night
  </h1>

  <input on:click={spin} type="button" value="Roll the dice baby!" id="spin" />
  <canvas id="canvas" width={canvasWidth} height={canvasWidth} />
</div>
