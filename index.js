function CategorySelected(element, category){
    const before = $(".folder.active")
    const button = $(element)
    if(before[0] == button[0]){
        button.removeClass('active')
        $(".feed").slideUp(500)
        return
    }
    // remove all 'active' from folders.
    $(".folder").removeClass('active')
    // expand element (active)
    button.addClass('active')
    fillFeed(category)
    $('.feed').slideDown(500)
}

function fillFeed(category){
    $(".content").css('display', 'none')
    const content = $(`.${category}.content`)
    console.log(content)
    content.show()
}