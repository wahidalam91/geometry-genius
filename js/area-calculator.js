function calculateTriangleArea() {
    const triangleBase = getInputFieldValue("triangle-base");
    const triangleHeight = getInputFieldValue("triangle-height");
    if(isNaN(triangleBase) || isNaN(triangleHeight)){
        alert("Please Insert Number");
        return;
    }
    const triangleAreaFormula = 0.5 * triangleBase * triangleHeight;
    
    // const triangleArea = getElementInnerText("triangle-area");
    setElementText("triangle-area", triangleAreaFormula);

    addCalculationEntry("Triangele", triangleAreaFormula);
}

function calculateRectangleArea() {
    const rectangleWidth = getInputFieldValue("rectangle-width");
    const rectangleLength = getInputFieldValue("rectangle-length");
    if(isNaN(rectangleWidth) || isNaN(rectangleLength)){
        alert("Please Insert Number");
        return;
    }
    const rectangleAreaFormula = rectangleWidth * rectangleLength;

    setElementText("rectangle-area", rectangleAreaFormula);

    addCalculationEntry("Rectangle", rectangleAreaFormula);

}

function calculateParallelogramArea() {
    const paraBase = getInputFieldValue("p-base");
    const paraHeight = getInputFieldValue("p-height");
    if(isNaN(paraBase) || isNaN(paraHeight)){
        alert("Please Insert Number");
        return;
    }
    const parallelogramAreaFormula = paraBase * paraHeight;

    setElementText("p-area", parallelogramAreaFormula);

    addCalculationEntry("Parallelogram", parallelogramAreaFormula);

}

function calculateRhomusArea() {
    const diagonal1 = getInputFieldValue("diagonal-1");
    const diagonal2 = getInputFieldValue("diagonal-2");
    if(isNaN(diagonal1) || isNaN(diagonal2)){
        alert("Please Insert Number");
        return; 
    }
    const rhombusAreaFormula = 0.5 * diagonal1 * diagonal2;

    setElementText("rhombus-area", rhombusAreaFormula);

    addCalculationEntry("Rhombus", rhombusAreaFormula);


}

function calculatePentagonArea() {
    const pentagonPerimeter = getInputFieldValue("perimeter");
    const pentagonApothem = getInputFieldValue("apothem");
    if(isNaN(pentagonPerimeter) || isNaN(pentagonApothem)){
        alert("Please Insert Number");
        return; 
    }
    const pentagonAreaFormula = 0.5 * pentagonPerimeter * pentagonApothem;

    setElementText("pentagon-area", pentagonAreaFormula);

    addCalculationEntry("Pentagon", pentagonAreaFormula);


}

function calculateEllipseArea() {
    const aAxis = getInputFieldValue("a-axis");
    const bAxis = getInputFieldValue("b-axis");
    if(isNaN(aAxis) || isNaN(bAxis)){
        alert("Please Insert Number");
        return;
    }

    const ellipseAreaFormula = (Math.PI * aAxis * bAxis).toFixed(2);

    setElementText("ellipse-area", ellipseAreaFormula);

    addCalculationEntry("Ellipse", ellipseAreaFormula);
}