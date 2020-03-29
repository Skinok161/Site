document.addEventListener("DOMContentLoaded", function(){
    function changeHeader(){
        console.log("scrolling", window.scrollY);
        let headerClasses = document.getElementsByTagName("header")[0].classList;
        if (window.scrollY >0) {
            let isHeaderHasClass = headerClasses.contains("scrolling")
            if(!isHeaderHasClass){
                //add class to header
                headerClasses.add("scrolling");
            }
        }else {
            headerClasses.remove("scrolling");
        }
    }
    document.addEventListener("scroll", changeHeader);

    //video

    let videoElement = document.getElementsByTagName('video')[0];

        function setVideoPlay(){
            console.log (videoButton.style)
            videoButton.style.visibility = 'none';
            videoElement.style.display = 'block';
            videoElement.play();
        }

        let videoButton = document.querySelector("video-play a");
        videoButton.addEventListener("click", setVideoPlay);

});
