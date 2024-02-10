function circle(radius) {
    return {
        area: function area() {
            return Math.PI * radius * radius;
        }
    };
}
module.exports = circle;