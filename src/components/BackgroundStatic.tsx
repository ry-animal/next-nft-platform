import * as React from "react";

interface BackProps {
  amount: number;
  children: React.ReactNode;
  className?: any;
  dark?: boolean;
}

export const StaticBackground = (props: BackProps) => {
  const canvasRef = React.useRef(null);
  const [counter, setCounter] = React.useState(0);

  async function count(i: number) {
    setCounter(i + 1);
    setTimeout(() => {
      count(i + 1);
    }, 5000 / 36);
  }

  React.useEffect(() => {
    //count(0);
  }, []);

  React.useEffect(() => {
    const canvas: HTMLCanvasElement = canvasRef.current!;

    canvas.width = canvas!.clientWidth;
    canvas.height = canvas!.clientHeight < 800 ? 800 : canvas!.clientHeight;

    const context = canvas.getContext("2d")!;
    context.clearRect(0, 0, canvas.width, canvas.height);
    for (var i = 0; i < 500000 * props.amount; i++) {
      var x = Math.floor(Math.random() * canvas.width);
      var y = Math.floor(Math.random() * canvas.height);
      context.fillStyle = props.dark
        ? "rgba(0,0,0," + (Math.random() * 0.2).toPrecision(2) + ")"
        : "rgba(213,213,213," + (Math.random() * 0.2).toPrecision(2) + ")";

      context.fillRect(x, y, 1 + Math.random() * 2, 1 + Math.random() * 2);
    }

    if (!props.dark) {
      let pos = 0;
      for (var i = 0; i < 5; i++) {
        var x = canvas.width / 5;
        pos += x;
        context.fillStyle =
          "rgba(213,213,213," + (Math.random() * 0.8).toPrecision(2) + ")";

        context.fillRect(pos, 0, 1, screen.width);
      }
    }
  }, []);
  return (
    <div
      id="canvCon"
      className={props.className + (props.dark ? " bg-zinc-800" : " bg-white")}
    >
      <div className="relative z-0 h-full  w-full">
        <canvas
          id="canvCon"
          ref={canvasRef}
          className="absolute left-0 top-0  -z-10 h-full  w-full"
        ></canvas>
        {props.children}
      </div>
    </div>
  );
};
