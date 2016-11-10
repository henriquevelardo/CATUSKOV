$(document).ready(function(){
    $('.menu').hide
    $('.menuX').hide
    $('.menu').click(function(){
        $('header ul li').css('display','block')
        $('.menu').css('display','none')
        $('.menuX').css('display','block')
    })
    $('.menuX').click(function(){
        $('header ul li').css('display','none')
        $('.menu').css('display','block')
        $('.menuX').css('display','none')
    })
});