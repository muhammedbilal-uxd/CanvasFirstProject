console.log("JavaScript working");

class DrawCanvas {
  private context2d: CanvasRenderingContext2D | null = null;

  constructor(id) {
    const canvasEle = document.getElementById(id) as HTMLCanvasElement;

    if (!canvasEle) {
      console.log("Canvas ID not found ");
    } else {
      console.log("Canvas ID found", canvasEle);
    }

    this.context2d = canvasEle.getContext("2d");
  }

  createRectangle(
    type: "fillRect" | "strokeRect",
    x: number,
    y: number,
    width: number,
    height: number,
    fillStyle: string | null,
    strokeStyle: string | null
  ): void {
    if (this.context2d) {
      if (fillStyle) {
        this.context2d.fillStyle = fillStyle;
      }

      if (strokeStyle) {
        this.context2d.strokeStyle = strokeStyle;
      }

      this.context2d[type](x, y, width, height);
    }
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const shape = new DrawCanvas("canvasElement");

  shape.createRectangle("fillRect", 20, 30, 50, 50, "green", null);
  shape.createRectangle("fillRect", 30, 40, 60, 60, "blue", null);
  shape.createRectangle("strokeRect", 150, 90, 60, 60, "blue", null);
});
