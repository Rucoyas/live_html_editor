function set_split_screen_height() {
    var navbar = document.getElementById("navbar");
    var splitScreen = document.getElementById("split-screen");
    var navbarHeight = navbar.clientHeight; // Get the height of the navbar
    splitScreen.style.marginTop = navbarHeight + "px"; // Set the margin-top for split-screen
    splitScreen.style.height = `calc(100vh - ${navbarHeight}px)`; // Adjust height for split-screen
}

function set_up_editor_interaction() {
    var initial_content = "<h1>hello</h1>\n<p>initial content</p>"

    var iframe = document.getElementById("output-iframe");
    iframe.srcdoc = initial_content;

    var run_button = document.getElementById("run-button");
    var input_textarea = document.getElementById("input-textarea");

    var auto_render = false;
    if (auto_render) {
        input_textarea.addEventListener('keyup',()=>{
          var html = input_textarea.value;
          iframe.src = "data:text/html;charset=utf-8," + encodeURI(html);
            iframe.srcdoc = "<h1>hello</h1>\n" + "<p>" + input_textarea.value + "</p>";
        })
    } else {
        run_button.onclick = function() {
            iframe.srcdoc = "<h1>hello</h1>\n" + "<p>" + input_textarea.value + "</p>";
        }
    }
}

window.onload = function() {
set_split_screen_height();
    set_up_editor_interaction();
};
