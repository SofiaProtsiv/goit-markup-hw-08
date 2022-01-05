const myRefs = {
    cardsetItemList: document.querySelectorAll('.cardset__item'),
    cardsetListEl: document.querySelector('.cardset'),
    filterNavBtn: document.querySelectorAll('.button--secondary'),
};
 
const copycardset = []

myRefs.cardsetItemList.forEach(card => {
    copycardset.push(card)
});

myRefs.filterNavBtn.forEach(btn => {
    btn.addEventListener('click', () =>{
        if(btn.value){
            myRefs.cardsetListEl.innerHTML = '';
            copycardset.filter(function(item) {
                return item !== btn.value 
            })
        }
        if(btn.value === 'Все'){
            copycardset.filter(function(item) {
                return myRefs.cardsetListEl.innerHTML += '<li class="cardset__item">' + `${item.innerHTML}` + '</li>';
            })
        }
        copycardset.forEach(card => {
            if(card.textContent.split(/\s+|\./).includes(`${btn.value}`)){
                myRefs.cardsetListEl.innerHTML += '<li class="cardset__item">' + `${card.innerHTML}` + '</li>';
            }
        })
    })
})

