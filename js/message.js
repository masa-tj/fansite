document.getElementById('btnSupport').addEventListener('click',function(){
    document.getElementById('message-dialog').classList.add('is-active');
});
document.getElementById('message-close-btn').addEventListener('click', function(){
    document.getElementById('message-dialog').classList.remove('is-active');
});