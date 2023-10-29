if (window.location.hostname == '127.0.0.1' || window.location.hostname == 'localhost') {
    $('.nav-link').click((e) => {
        var href = $(e.target).attr('data-href')
        if (href == '/about') {
            window.location.replace('/about.html')
        } else if (href == '/privacy-policy') {
            window.location.replace('/privacy_policy.html')
        } else if (href == '/terms-and-conditions') {
            window.location.replace('/terms_and_conditions.html')
        }
    })
}else{
    $('.nav-link').click((e) => {
        window.location.replace($(e.target).attr('data-href'))
    })
}