function scrollFooter(scrollY, heightFooter)
{
    console.log(scrollY);
    console.log(heightFooter);

    if(scrollY >= heightFooter)
    {
        $('footer').css({
            'bottom' : '0px'
        });
    }
    else
    {
        $('footer').css({
            'bottom' : '-' + heightFooter + 'px'
        });
    }
}

$(window).load(function(){
    var windowHeight        = $(window).height(),
        footerHeight        = $('footer').height(),
        heightDocument      = (windowHeight) + ($('.content').height()) + ($('footer').height()) - 20;

    // Definindo o tamanho do elemento pra animar
    $('#scroll-animate, #scroll-animate-main').css({
        'height' :  heightDocument + 'px'
    });

    // Definindo o tamanho dos elementos header e conteúdo
    $('header').css({
        'height' : windowHeight + 'px',
        'line-height' : windowHeight + 'px'
    });

    $('.wrapper-parallax').css({
        'margin-top' : windowHeight + 'px'
    });

    scrollFooter(window.scrollY, footerHeight);

    // ao dar rolagem
    window.onscroll = function(){
        var scroll = window.scrollY;

        $('#scroll-animate-main').css({
            'top' : '-' + scroll + 'px'
        });
        
        $('header').css({
            'background-position-y' : 50 - (scroll * 100 / heightDocument) + '%'
        });

        scrollFooter(scroll, footerHeight);
    }
});

var layout = {
  xaxis: {
    title: {
      text: 'Spectrum Color',
      font: {
        family: 'Courier New, monospace',
        size: 25,
        color: 'black'
      }
    },
  },
  yaxis: {
    title: {
      text: '% Reflectance',
      font: {
        family: 'Courier New, monospace',
        size: 25,
        color: 'black'
      }
    }
  }
};

TESTER = document.getElementById('tester');
	Plotly.newPlot( TESTER, [{
	x: ['Blue', 'Cyan', 'Green', 'Yellow', 'Orange', 'Red', 'Deep Red', 'IR1', 'IR2', 'IR3', 'IR4'],
	y: [25.5, 32, 24.6,15, 13, 21.4, 33, 27.9, 67.5, 101.5, 111] ,
  type: 'line'
  }], 
                 layout  );