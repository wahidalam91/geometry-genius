function getInputFieldValue(filedId) {
    const inputField = document.getElementById(filedId);
    const inputFieldValue = parseFloat(inputField.value);
    inputField.value = "";
    return inputFieldValue;
}

function getElementInnerText(elementId) {
    const elementTextArea = document.getElementById(elementId);
    const elementTextValue = parseFloat(elementTextArea.innerText);
    return elementTextValue;
}

function setElementText(element, value) {
    const targetElement = document.getElementById(element);
    targetElement.innerText = value;
}

function addCalculationEntry(areaType, areaValue) {
    const calculationEntry = document.getElementById("calculation-entry");

    const count = calculationEntry.childElementCount;
    const p = document.createElement("p");
    p.classList = "my-2 font-semibold"
    p.innerHTML = `${count + 1}. ${areaType}  ${areaValue} cm<sup>2</sup> <button class ="btn btn-sm btn-primary">Convert</button> `;
    calculationEntry.appendChild(p);
}

