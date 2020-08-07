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
        inputDiv.append(`<label>Category</label>`);
        inputDiv.append(`<input class="form-control" id="category-input">`);
        inputDiv.append(`</div>`);
        inputDiv.append(`</form>`);
        inputDiv.append(`</div>`);
        inputDiv.append(`</div>`);

        inputDiv.append(`<button id="submit1-btn"> Submit </button>`)

    };
        $("body").on("click", "#submit1-btn", function handleFormSubmit(event) {
            event.preventDefault();
            const new1Post = {
                title: $("#title-input").val().trim(),
                header1: $("#header1-input").val().trim(),
                text1: $("#text1-input").val().trim(),
                img1: $("#img1-input").val().trim(),
                img2: $("#img2-input").val().trim(),
                header2: $("#header2-input").val().trim(),
                text2: $("#text2-input").val().trim(),
                category: $("#category").val()
            }
    
            console.log("Layout Button Test", new1Post);
    
            newPost1(new1Post);
        });


    // $("body").on("click", "#submit1-btn", function handleFormSubit(event) {
    //     event.preventDefault();
    //     const newPostObj1 = {
    //         title: $("#title-input").val().trim(),
    //         header1: $("#header1-input").val().trim(),
    //         text1: $("#text1-input").val().trim(),
    //         img1: $("#img1-input").val().trim(),
    //         header2: $("#header2-input").val().trim(),
    //         text2: $("#text2-input").val().trim(),
    //         img2: $("#img2-input").val().trim(),
    //         category: $("#category-input").val().trim()
    //     }

    //     console.log("Layout1 Button Test", newPostObj1);

    //     newPost1(newPostObj1);
    // });

    const newPost1 = function(Post) {
        $.post("/api/posts1", Post, function() {
            console.log("Successfully added post to layout1!");
        })
    }


    const layout2Input = () => {
        const inputDiv = $("#input-div")
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
        inputDiv.append(`<label>Category</label>`);
        inputDiv.append(`<label>Img3</label>`);
        inputDiv.append(`<input class="form-control" id="3img3-input">`);
        inputDiv.append(`<label>Text 3</label>`);
        inputDiv.append(`<textarea class="form-control" id="3text3-input" rows="3"></textarea>`);
        inputDiv.append(`<label>Category</label>`);
        inputDiv.append(`<input class="form-control" id="3category-input">`);
        inputDiv.append(`</div>`);
        inputDiv.append(`</form>`);
        inputDiv.append(`</div>`);
        inputDiv.append(`</div>`);

        inputDiv.append(`<button id="submit2-btn"> Submit </button>`);
    }

    //create the layout3 template
    const layout3Input = () => {
        const inputDiv = $("#input-div")
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
        inputDiv.append(`<label>Category</label>`);
        inputDiv.append(`<input class="form-control" id="2category-input">`);
        inputDiv.append(`</div>`);
        inputDiv.append(`</form>`);
        inputDiv.append(`</div>`);
        inputDiv.append(`</div>`);

        inputDiv.append(`<button id="submit3-btn"> Submit </button>`);
    }

    $("body").on("click", "#submit2-btn", function handleFormSubit(event) {
        event.preventDefault();
        const newPostObj2 = {
            title: $("#2title-input").val().trim(),
            img1: $("#2img1-input").val().trim(),
            header1: $("#2header1-input").val().trim(),
            text1: $("#2text1-input").val().trim(),
            sideHead: $("#2header2-input").val().trim(),
            sideText: $("#2text2-input").val().trim(),
            category: $("#2category-input").val().trim()
        }


        console.log("Layout Button Test", newPostObj2);

        console.log("Layout Button Test", newPostObj2);
        newPost(newPostObj2);
    });

    const newPost = function (Post) {
        $.post("/api/posts", Post, function () {
            console.log("Successfully added post!");
        })
    }
    //To delete the selected template
    const deletePost = function (Post) {
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
    })

    
});