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
            videoButton.style.display = 'none';
            videoElement.style.display = 'block';
            videoPreview.style.display = 'none';
            videoElement.play();
        }

        let videoButton = document.querySelector(".video-play a");
        let videoPreview = document.querySelector(".works-content img");
        videoButton.addEventListener("click", setVideoPlay);

});
