function f(){
    document.getElementsByClassName('dropdown')[0].classList.toggle('down');
    document.getElementsByClassName('fa-bars')[0].classList.toggle('activ');
    document.getElementsByClassName('fa-times')[0].classList.toggle('activ');
    document.getElementsByClassName('arrow')[0].classList.toggle('gone');

    if(document.getElementsByClassName('dropdown')[0].classList.contains('down'))
    {
        setTimeout(function()
        {
            document.getElementsByClassName('dropdown')[0].style.overflow = 'visible';
        }, 300); 
    } 
    else
    {
        document.getElementsByClassName('dropdown')[0].style.overflow = 'hidden';
    }
}