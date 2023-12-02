console.log("JavaScript working");
var DrawCanvas = /** @class */ (function () {
    function DrawCanvas(id) {
        this.context2d = null;
        var canvasEle = document.getElementById(id);
        if (!canvasEle) {
            console.log("Canvas ID not found ");
        }
        else {
            console.log("Canvas ID found", canvasEle);
        }
        this.context2d = canvasEle.getContext("2d");
    }
    DrawCanvas.prototype.createRectangle = function (type, x, y, width, height, fillStyle, strokeStyle) {
        if (this.context2d) {
            if (fillStyle) {
                this.context2d.fillStyle = fillStyle;
            }
            if (strokeStyle) {
                this.context2d.strokeStyle = strokeStyle;
            }
            this.context2d[type](x, y, width, height);
        }
    };
    return DrawCanvas;
}());
document.addEventListener("DOMContentLoaded", function () {
    var shape = new DrawCanvas("canvasElement");
    shape.createRectangle("fillRect", 20, 30, 50, 50, "green", null);
    shape.createRectangle("fillRect", 30, 40, 60, 60, "blue", null);
    shape.createRectangle("strokeRect", 150, 90, 60, 60, "blue", null);
});
