console.log("blogInputs.js TEST");

$("#layout1-btn").on("click", function() {
    console.log("Layout1 TEST");
    layout1Input();
});

$("#layout2-btn").on("click", function() {
    console.log("Layout2 TEST");
});

const layout1Input = () => {
    const inputDiv = $("#input-div")

    inputDiv.append(`<form>`);
    inputDiv.append(`<div class="form-group">`);
    inputDiv.append(`<label>Title</label>`);
    inputDiv.append(`<input class="form-control" id="title-input">`);
    inputDiv.append(`<label>Header 1</label>`);
    inputDiv.append(`<input class="form-control" id="header1-input">`);
    inputDiv.append(`<label>Text 1</label>`);
    inputDiv.append(`<textarea class="form-control" id="text1-input" rows="3"></textarea>`);
    inputDiv.append(`<label>Img1</label>`);
    inputDiv.append(`<input class="form-control" id="img1-input">`);
    inputDiv.append(`<label>Text 2</label>`);
    inputDiv.append(`<textarea class="form-control" id="text2-input" rows="3"></textarea>`);
    inputDiv.append(`<label>Img2</label>`);
    inputDiv.append(`<input class="form-control" id="img2-input">`);
    inputDiv.append(`<label>Category</label>`);
    inputDiv.append(`<input class="form-control" id="category">`);
    inputDiv.append(`</div>`);
    inputDiv.append(`</form>`);
    inputDiv.append(`</div>`);
    inputDiv.append(`</div>`);
}
