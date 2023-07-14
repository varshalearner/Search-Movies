function getMovies(searchText){
    if(searchText==='') alert('Please enter something!!!');
    else{
        fetch(`https://api.tvmaze.com/search/shows?q=${searchText}`)
        .then((res)=>{
                return res.json();
            })
            .then((data)=>{
                $('.images-box').html('');
                console.log(data);
                for(let item of data){
                    if(item.show.image){
                        const image = document.createElement('img');
                        image.src=item.show.image.medium;
                        $('.images-box').append(image);
                    }
                }   
                $('.images-box').append(`<span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>`);
                $('input').val("");
                saveData()
            })
        
    }

}
$('button').click(function  (e){
    getMovies($('input').val());
    
});
$('input').keypress(function (e) { 
    if(e.which===13){
        getMovies($('input').val());
    }
});
function saveData(){
    localStorage.content = $('.images-box').html();
}
function showTask(){
    $('.images-box').html(localStorage.content);
}
showTask()