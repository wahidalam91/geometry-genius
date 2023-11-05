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