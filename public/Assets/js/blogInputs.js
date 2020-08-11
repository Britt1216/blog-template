$('document').ready(function () {
    console.log("blogInputs.js TEST");

    //Navigation buttons
    $("#post-btn").on("click", function () {
        console.log("Now on Post Page");
    });

    $("#home-btn").on("click", function () {
        console.log("Now on Home Page");
    });
    //to select templates
    $("#layout1-btn").on("click", function () {
        console.log("Layout1 TEST");
        layout1Input();
    });

    $("#layout2-btn").on("click", function () {
        console.log("Layout2 TEST");
        layout2Input();
    });

    $("#layout3-btn").on("click", function () {
        console.log("Layout3 TEST");
        layout3Input();
    });


//create the layout1 template
   
    const layout1Input = () => {
        const inputDiv = $("#input-div")
        inputDiv.empty();
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
        inputDiv.append(`<label>Header 2</label>`);
        inputDiv.append(`<input class="form-control" id="header2-input">`);
        inputDiv.append(`<label>Text 2</label>`);
        inputDiv.append(`<textarea class="form-control" id="text2-input" rows="3"></textarea>`);
        inputDiv.append(`<label>Img2</label>`);
        inputDiv.append(`<input class="form-control" id="img2-input">`);
        inputDiv.append(`<label for="category">Select Category:</label>`);
        inputDiv.append(`<select class="custom-select" id="category-input">
        <option value="Personal">Personal</option>
        <option value="Review">Review</option>
        <option value="Political">Political</option>
        <option value="Animals">Animals</option>
        <option value="Beauty">Beauty</option>
      </select>`);
        inputDiv.append(`</div>`);
        inputDiv.append(`</form>`);
        inputDiv.append(`</div>`);
        inputDiv.append(`</div>`);

        inputDiv.append(`<button id="submit1-btn"> Submit </button>`)

        
              

    };
    $("body").on("click", "#submit1-btn", function handleFormSubmit(event) {
        event.preventDefault();
        const newPost1 = {
            title: $("#title-input").val().trim(),
            header1: $("#header1-input").val().trim(),
            text1: $("#text1-input").val().trim(),
            img1: $("#img1-input").val().trim(),
            img2: $("#img2-input").val().trim(),
            header2: $("#header2-input").val().trim(),
            text2: $("#text2-input").val().trim(),
            category: $("#category-input").val(),
            selectedLayout: 'layout1',
            isLayout1: true
        }

        console.log("Layout Button Test", newPost1);

        newPost(newPost1);
    });

    // create the Layout2 Template
    const layout2Input = () => {
        const inputDiv = $("#input-div");
        
        inputDiv.empty();
        inputDiv.append(`<form>`);
        inputDiv.append(`<div class="form-group">`);
        inputDiv.append(`<label>Title</label>`);
        inputDiv.append(`<input class="form-control" id="2title-input">`);
        inputDiv.append(`<label>Img1</label>`);
        inputDiv.append(`<input class="form-control" id="2img1-input">`);
        inputDiv.append(`<label>Header 1</label>`);
        inputDiv.append(`<input class="form-control" id="2header1-input">`);
        inputDiv.append(`<label>Text 1</label>`);
        inputDiv.append(`<textarea class="form-control" id="2text1-input" rows="3"></textarea>`);
        inputDiv.append(`<label>Side Header </label>`);
        inputDiv.append(`<input class="form-control" id="2header2-input">`);
        inputDiv.append(`<label>Side Text</label>`);
        inputDiv.append(`<textarea class="form-control" id="2text2-input" rows="3"></textarea>`);
        inputDiv.append(`<label for="category">Select Category:</label>`);
        inputDiv.append(`<select class="custom-select" id="2category-input">
        <option value="Personal">Personal</option>
        <option value="Review">Review</option>
        <option value="Political">Political</option>
        <option value="Animals">Animals</option>
        <option value="Beauty">Beauty</option>
      </select>`);
        inputDiv.append(`</div>`);
        inputDiv.append(`</form>`);
        inputDiv.append(`</div>`);
        inputDiv.append(`</div>`);

        inputDiv.append(`<button id="submit2-btn"> Submit </button>`);
    }

    $("body").on("click", "#submit2-btn", function handleFormSubit(event) {
        event.preventDefault();
        const newPost2 = {
            title: $("#2title-input").val().trim(),
            img1: $("#2img1-input").val().trim(),
            header1: $("#2header1-input").val().trim(),
            text1: $("#2text1-input").val().trim(),
            sideHead: $("#2header2-input").val().trim(),
            sideText: $("#2text2-input").val().trim(),
            category: $("#2category-input").val(),
            selectedLayout: 'layout2',
            isLayout2: true
        }
        console.log("Layout Button Test", newPost2);
        newPost(newPost2);
    });

    //create the layout3 template
    const layout3Input = () => {
        const inputDiv = $("#input-div");

        inputDiv.empty();
        inputDiv.append(`<form>`);
        inputDiv.append(`<div class="form-group">`);
        inputDiv.append(`<label>Title</label>`);
        inputDiv.append(`<input class="form-control" id="3title-input">`);
        inputDiv.append(`<label>Header 1</label>`);
        inputDiv.append(`<input class="form-control" id="3header1-input">`);
        inputDiv.append(`<label>Img1</label>`);
        inputDiv.append(`<input class="form-control" id="3img1-input">`);
        inputDiv.append(`<label>Text 1</label>`);
        inputDiv.append(`<textarea class="form-control" id="3text1-input" rows="3"></textarea>`);
        inputDiv.append(`<label>Img2</label>`);
        inputDiv.append(`<input class="form-control" id="3img2-input">`);
        inputDiv.append(`<label>Text 2</label>`);
        inputDiv.append(`<textarea class="form-control" id="3text2-input" rows="3"></textarea>`);
        inputDiv.append(`<label>Img3</label>`);
        inputDiv.append(`<input class="form-control" id="3img3-input">`);
        inputDiv.append(`<label>Text 3</label>`);
        inputDiv.append(`<textarea class="form-control" id="3text3-input" rows="3"></textarea>`);
        inputDiv.append(`<label for="category">Select Category:</label>`);
        inputDiv.append(`<select class="custom-select" id="3category-input">
        <option value="Personal">Personal</option>
        <option value="Review">Review</option>
        <option value="Political">Political</option>
        <option value="Animals">Animals</option>
        <option value="Beauty">Beauty</option>
      </select>`);
        inputDiv.append(`</div>`);
        inputDiv.append(`</form>`);
        inputDiv.append(`</div>`);
        inputDiv.append(`</div>`);

        inputDiv.append(`<button id="submit3-btn"> Submit </button>`);
    }

    $("body").on("click", "#submit3-btn", function handleFormSubit(event) {
        event.preventDefault();
        const newPost3 = {
            title: $("#3title-input").val().trim(),
            header1: $("#3header1-input").val().trim(),
            img1: $("#3img1-input").val().trim(),
            text1: $("#3text1-input").val().trim(),
            img2: $("#3img2-input").val().trim(),
            text2: $("#3text2-input").val().trim(),
            img3: $("#3img3-input").val().trim(),
            text3: $("#3text3-input").val().trim(),
            category: $("#3category-input").val(),
            selectedLayout: 'layout3',
            isLayout3: true
        }
        console.log("Layout Button Test", newPost3);
        newPost(newPost3);
    });

    
    //create new post
    const newPost = function(Post) {
        $.post("/api/posts", Post, function () {
            console.log("Successfully added post!");
        })
    }
    //To delete the selected template
    const deletePost = function(Post) {
        $.ajax(`/api/posts/${Post}`, {
            type: "DELETE"
        }).then(() => {
            console.log("Successfully Deleted " + Post);
            location.reload();
        });
    }

    $("body").on("click", ".delete-btn", function () {
        const id = $(this).data("id")
        console.log("Deleted id " + id);
        deletePost(id);
    });

    //To update the post
    $("body").on("click", ".update-btn", function () {
        const id = $(this).data("id")
        const layoutVal = $(this).data("value");
        console.log("Updated id " + id);
        console.log("Updated data Value " + layoutVal);
        updateDiv(id, layoutVal);
    });

    const updateDiv = (id, layout) => {
        const updateDiv = $(`#update-div${id}`);
        if (layout === "layout3") {
            updateDiv.empty();
            updateDiv.append(`<form>`);
            updateDiv.append(`<div class="form-group">`);
            updateDiv.append(`<label>Title</label>`);
            updateDiv.append(`<input class="form-control" id="3title-input">`);
            updateDiv.append(`<label>Header 1</label>`);
            updateDiv.append(`<input class="form-control" id="3header1-input">`);
            updateDiv.append(`<label>Img1</label>`);
            updateDiv.append(`<input class="form-control" id="3img1-input">`);
            updateDiv.append(`<label>Text 1</label>`);
            updateDiv.append(`<textarea class="form-control" id="3text1-input" rows="3"></textarea>`);
            updateDiv.append(`<label>Img2</label>`);
            updateDiv.append(`<input class="form-control" id="3img2-input">`);
            updateDiv.append(`<label>Text 2</label>`);
            updateDiv.append(`<textarea class="form-control" id="3text2-input" rows="3"></textarea>`);
            updateDiv.append(`<label>Img3</label>`);
            updateDiv.append(`<input class="form-control" id="3img3-input">`);
            updateDiv.append(`<label>Text 3</label>`);
            updateDiv.append(`<textarea class="form-control" id="3text3-input" rows="3"></textarea>`);
            updateDiv.append(`<label for="category">Select Category:</label>`);
            updateDiv.append(`<select class="custom-select" id="3category-input">
            <option value="Personal">Personal</option>
            <option value="Review">Review</option>
            <option value="Political">Political</option>
            <option value="Animals">Animals</option>
            <option value="Beauty">Beauty</option>
            </select>`);
            updateDiv.append(`</div>`);
            updateDiv.append(`</form>`);

            updateDiv.append(`<button class="submit-changes-btn"> Submit Changes </button>`);

            $("body").on("click", ".submit-changes-btn", function updateFormSubmit (event) {
                event.preventDefault();
        
                console.log(`updated form ${id}`)
                const newPost3 = {
                    title: $("#3title-input").val().trim(),
                    header1: $("#3header1-input").val().trim(),
                    img1: $("#3img1-input").val().trim(),
                    text1: $("#3text1-input").val().trim(),
                    img2: $("#3img2-input").val().trim(),
                    text2: $("#3text2-input").val().trim(),
                    img3: $("#3img3-input").val().trim(),
                    text3: $("#3text3-input").val().trim(),
                    category: $("#3category-input").val()
                }
                updatePost(id, newPost3);
            });
        } else if (layout === "layout2") {

            var titleText = $(`#${id}titleText`).text();
            var img1Text = $(`#${id}img1Text`).prop('src');
            var header1Text = $(`#${id}header1Text`).text();
            var text1Text = $(`#${id}text1Text`).text();;
            var sideHead1Text = $(`#${id}sideHead1Text`).text();
            var sideText1Text = $(`#${id}sideText1Text`).text();

            updateDiv.empty();
            updateDiv.append(`<form>`);
            updateDiv.append(`<div class="form-group">`);
            updateDiv.append(`<label>Title</label>`);
            updateDiv.append(`<input value="${titleText}" class="form-control" id="2title-input">`);
            updateDiv.append(`<label>Img1</label>`);
            updateDiv.append(`<input value="${img1Text}" class="form-control" id="2img1-input">`);
            updateDiv.append(`<label>Header 1</label>`);
            updateDiv.append(`<input value="${header1Text}" class="form-control" id="2header1-input">`);
            updateDiv.append(`<label>Text 1</label>`);
            updateDiv.append(`<textarea class="form-control" id="2text1-input" rows="3">${text1Text}</textarea>`);
            updateDiv.append(`<label>Side Header </label>`);
            updateDiv.append(`<input value="${sideHead1Text}" class="form-control" id="2header2-input">`);
            updateDiv.append(`<label>Side Text</label>`);
            updateDiv.append(`<textarea class="form-control" id="2text2-input" rows="3">${sideText1Text}</textarea>`);
            updateDiv.append(`<label for="category">Select Category:</label>`);
            updateDiv.append(`<select class="custom-select" id="2category-input">
            <option value="Personal">Personal</option>
            <option value="Review">Review</option>
            <option value="Political">Political</option>
            <option value="Animals">Animals</option>
            <option value="Beauty">Beauty</option>
            </select>`);
            updateDiv.append(`</div>`);
            updateDiv.append(`</form>`);

            updateDiv.append(`<button class="submit-changes-btn"> Submit Changes </button>`);

            $("body").on("click", ".submit-changes-btn", function updateFormSubmit (event) {
                event.preventDefault();
        
                console.log(`updated form ${id}`)
                const newPost2 = {
                    title: $("#2title-input").val().trim(),
                    img1: $("#2img1-input").val().trim(),
                    header1: $("#2header1-input").val().trim(),
                    text1: $("#2text1-input").val().trim(),
                    sideHead: $("#2header2-input").val().trim(),
                    sideText: $("#2text2-input").val().trim(),
                    category: $("#2category-input").val(),
                    selectedLayout: 'layout2',
                    isLayout2: true
                }
                updatePost(id, newPost2);
            });
        } else {
            var titleText = $(`#${id}titleText`).text();
            var header1Text = $(`#${id}header1Text`).text();
            var text1Text = $(`#${id}text1Text`).text();
            var img2Text = $(`#${id}img2Text`).prop('src');
            var header2Text = $(`#${id}header2Text`).text();
            var text2Text = $(`#${id}text2Text`).text();
            var img1Text = $(`#${id}img1Text`).prop('src');
           
            updateDiv.empty();
            updateDiv.append(`<form>`);
            updateDiv.append(`<div class="form-group">`);
            updateDiv.append(`<label>Title</label>`);
            updateDiv.append(`<input value="${titleText}" class="form-control" id="title-input">`);
            updateDiv.append(`<label>Header 1</label>`);
            updateDiv.append(`<input value="${header1Text}" class="form-control" id="header1-input">`);
            updateDiv.append(`<label>Text 1</label>`);
            updateDiv.append(`<textarea class="form-control" id="text1-input" rows="3">${text1Text}</textarea>`);
            updateDiv.append(`<label>Img1</label>`);
            updateDiv.append(`<input value=${img1Text} class="form-control" id="img1-input">`);
            updateDiv.append(`<label>Header 2</label>`);
            updateDiv.append(`<input value="${header2Text}" class="form-control" id="header2-input">`);
            updateDiv.append(`<label>Text 2</label>`);
            updateDiv.append(`<textarea class="form-control" id="text2-input" rows="3">${text2Text}</textarea>`);
            updateDiv.append(`<label>Img2</label>`);
            updateDiv.append(`<input value="${img2Text}" class="form-control" id="img2-input">`);
            updateDiv.append(`<label for="category">Select Category:</label>`);
            updateDiv.append(`<select class="custom-select" id="category-input">
            <option value="Personal">Personal</option>
            <option value="Review">Review</option>
            <option value="Political">Political</option>
            <option value="Animals">Animals</option>
            <option value="Beauty">Beauty</option>
            </select>`);
            updateDiv.append(`</div>`);
            updateDiv.append(`</form>`);

            updateDiv.append(`<button class="submit-changes-btn"> Submit Changes </button>`);

            $("body").on("click", ".submit-changes-btn", function updateFormSubmit (event) {
                event.preventDefault();
        
                console.log(`updated form ${id}`)
                const newPost1 = {
                    title: $("#title-input").val().trim(),
                    header1: $("#header1-input").val().trim(),
                    text1: $("#text1-input").val().trim(),
                    img1: $("#img1-input").val().trim(),
                    img2: $("#img2-input").val().trim(),
                    header2: $("#header2-input").val().trim(),
                    text2: $("#text2-input").val().trim(),
                    category: $("#category-input").val(),
                    selectedLayout: 'layout1',
                    isLayout1: true
                }
                updatePost(id, newPost1);
            });
            
        }
        const updatePost = (id, post) => {
            $.ajax({
                method: "PUT",
                url: `/api/update/${id}`,
                data: post
            }).then(() => {
                console.log("Successfully Updated Post!");
                window.location.href = "/";
            });
        }
    }

    
   
});