console.log("Let's get this party started!");

$('form').on('submit', async function(e){
    e.preventDefault();

    const url = "http://api.giphy.com/v1/gifs/search";

    const search = $('input').val(); 
    const api_key = "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym";
    
    const response = await axios.get(url, {params:{'q':search, 'api_key':api_key}});
    const random = Math.floor(Math.random() * 50);
    const imgUrl = $(response.data.data).get(random).images.original.url;
    $('body').append(`<img src="${imgUrl}" alt="">`)
    
   
    

})

$('#remove').on('click', function(e){
       
    $('img').fadeOut(500, function(){
        $(this).remove();
    })
    
})



  

