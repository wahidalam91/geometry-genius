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