(function () {
    //Deferred Objects
    var serverURL='http://172.104.91.187';
    var p=['/users','/projects','/issues'];
    function getAjax(url){
        var  $d=$.ajax({
            url:url,
            headers:{
                'Content-Type':'Aplication/json',
                'Api-Token':'jJHGtk3IoZ84CmKlDz5N206w46yaj6v4mk0vXdTDl5w80iqnk0skp9Jp6NQ3'
            }
        });
        return $d.promise();
    }
    // var c=[];
    // p.forEach(function (e) {
    //     c.push(getAjax(serverURL+e));
    // });
    // console.log(c);
    // $.when.apply(this,c).then(function (a,e,i) {
    //     console.log(a);
    //     console.log(e);
    //     console.log(i);
    // });
    // $.when(
    //     getAjax(serverURL+'/users'),
    //     getAjax(serverURL+'/projects'),
    //     getAjax(serverURL+'/issues')
    // ).then(function(ra,re,ri){
    //     console.log(ra);
    //     console.log(re);
    //     console.log(ri);
    //     console.log('termino todo');
    // });

    // getAjax(serverURL+'/users')
    //     .then(getAjax(serverURL+'/projects'))
    //     .then(getAjax(serverURL+'/issues'))
    //     .done(function (e) {
    //         console.log(e);
    //     });

    Promise.all([getAjax(serverURL+'/users'),
        getAjax(serverURL+'/projects'),
        getAjax(serverURL+'/issues')]).then(function (e) {
        // e.forEach(function (parse) {
        //     console.log(parse);
        // });
        console.log('users',e[0]);
        console.log('projects',e[1]);
        console.log('issues',e[2]);
    })
})(jQuery);