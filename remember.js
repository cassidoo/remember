function capture()
{
    var content = encodeURI(document.getElementById("content").innerHTML);
    history.replaceState(0, 0, "#" + content);
    // change this to pushState() if you want to clog browser history.  Let's not.
}

function setup()
{
    document.getElementById("content").style.height = screen.availHeight + "px";

    if(decodeURI(location.hash.substring(1)) === "")
    {
        document.getElementById("content").innerHTML = "<div id='intro'><h1>welcome to remember. <br> type or paste anything, and share the url with friends.</h1> <button onclick='destroy()'>Got it.</button></div>";
    }
    else
    {
        document.getElementById("content").innerHTML = decodeURI(location.hash.substring(1));
    }
}

function destroy()
{
    document.getElementById("content").removeChild(document.getElementById("intro"));
}

