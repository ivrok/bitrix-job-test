<!doctype html>
<html>
    <head>
        <link rel="stylesheet" href="rating.css">
    </head>
    <body>
        <pre id="results">

        </pre>
        <div id="buttons">
            <input class="rating" name="raing" value="1.5">
            <input class="rating" name="raing2">
        </div>
        <script>
            document.addEventListener('DOMContentLoaded', function(){
                [...document.querySelectorAll('.rating')].map(function(el, num){starRating(el, 10, function(rating){
                    document.querySelector('#results').innerHTML = 'rating ' + (num + 1) + ' = ' + rating;
                });});
            }, false);
        </script>
        <script src="rating.js"></script>
    </body>
</html>