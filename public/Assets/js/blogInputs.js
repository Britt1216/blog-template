$('document').ready(function(){
    console.log("blogInputs.js TEST");

    $("#layout1-btn").on("click", function() {
        console.log("Layout1 TEST");
        layout1Input();
    });

    

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


    $("body").on("click", "#submit1-btn", function handleFormSubit(event) {
        event.preventDefault();
        const newPostObj1 = {
            title: $("#title-input").val().trim(),
            header1: $("#header1-input").val().trim(),
            text1: $("#text1-input").val().trim(),
            img1: $("#img1-input").val().trim(),
            header2: $("#header2-input").val().trim(),
            text2: $("#text2-input").val().trim(),
            img2: $("#img2-input").val().trim(),
            category: $("#category-input").val().trim()
        }

        console.log("Layout1 Button Test", newPostObj1);

        newPost1(newPostObj1);
    });

    const newPost1 = function(Post) {
        $.post("/api/posts1", Post, function() {
            console.log("Successfully added post to layout1!");
        })
    }

    $("#layout2-btn").on("click", function() {
        console.log("Layout2 TEST");
        layout2Input();
    });

    const layout2Input = () => {
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

        inputDiv.append(`<button id="submit2-btn"> Submit </button>`);
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

        newPost(newPostObj2);
    });

    

    const newPost = function(Post) {
        $.post("/api/posts", Post, function() {
            console.log("Successfully added post to layout2!");
        })
    }



    $("#post-btn").on("click", function() {
        console.log("Now on Post Page");
    });

    $("#home-btn").on("click", function() {
        console.log("Now on Home Page");
    });
    
    $(".delete-btn").on("click", function() {
        const id = $(this).data("id")
        console.log("Deleted id " + id);
        deletePost(id);
    })

    const deletePost = function(Post) {
        $.ajax(`/api/posts/${Post}`, {
            type: "DELETE"
        }).then(() => {
            console.log("Successfully Deleted " + Post);
            location.reload();
        });
    }
});
