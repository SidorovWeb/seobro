$(document).ready(function() {
  // svg4everybody()
  var swiper = new Swiper('.swiper-container', {
    grabCursor: true,
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    pagination: {
      el: '.swiper-pagination'
    }
  })

  $('.wrapper .tab')
    .click(function() {
      $('.wrapper .tab')
        .removeClass('active')
        .eq($(this).index())
        .addClass('active')
      $('.tabs-content__item')
        .hide()
        .eq($(this).index())
        .fadeIn()
    })
    .eq(0)
    .addClass('active')

  // Интернет магазин
  var wrapper = $('#checkout') // Обертка для будучего input

  let totalPrice

  function storeType() {
    let TypePrice = $('input[name="store"]').data('price')
    var markup = `<input hidden class='ready-hidden' type='text' id='store'  data-price='${TypePrice}' name='Тип проекта:' value='Интернет-магазин  +${TypePrice} руб.'>`
    wrapper.append(markup) // Помещаем input в конец forms #ajax-contact-form
  }

  function storeType2() {
    let TypePrice = $('input[name="store2"]').data('price')
    var markup = `<input hidden class='ready-hidden' type='text' id='store2'  data-price='${TypePrice}' name='Тип проекта:' value='Сайт услуг +${TypePrice} руб.'>`
    wrapper.append(markup) // Помещаем input в конец forms #ajax-contact-form
  }

  function storeType3() {
    let TypePrice = $('input[name="store3"]').data('price')
    var markup = `<input hidden class='ready-hidden' type='text' id='store3'  data-price='${TypePrice}' name='Тип проекта:' value='Информационный сайт +${TypePrice} руб.'>`
    wrapper.append(markup) // Помещаем input в конец forms #ajax-contact-form
  }

  function structure() {
    let val = $('input[type="radio"][name="structure"]:checked').val()
    let price = $('input[type="radio"][name="structure"]:checked').data('price')
    var markup = `<input hidden class='ready-hidden' type='text' id='structure'  data-price='${price}' name='Подготовка структуры:' value='${val} +${price} руб.'>`
    wrapper.append(markup) // Помещаем input в конец forms #ajax-contact-form
  }
  function structure2() {
    let val = $('input[type="radio"][name="structure2"]:checked').val()
    let price = $('input[type="radio"][name="structure2"]:checked').data(
      'price'
    )
    var markup = `<input hidden class='ready-hidden' type='text' id='structure2'  data-price='${price}' name='Подготовка структуры:' value='${val} +${price} руб.'>`
    wrapper.append(markup) // Помещаем input в конец forms #ajax-contact-form
  }
  function structure3() {
    let val = $('input[type="radio"][name="structure3"]:checked').val()
    let price = $('input[type="radio"][name="structure3"]:checked').data(
      'price'
    )
    var markup = `<input hidden class='ready-hidden' type='text' id='structure3'  data-price='${price}' name='Подготовка структуры:' value='${val} +${price} руб.'>`
    wrapper.append(markup) // Помещаем input в конец forms #ajax-contact-form
  }
  function optimization() {
    let val = $('input[type="radio"][name="optimization2"]:checked').val()
    let price = $('input[type="radio"][name="optimization2"]:checked').data(
      'price'
    )
    var markup = `<input hidden class='ready-hidden' type='text' id='optimization'  data-price='${price}' name='ТЗ на оптимизацию:' value='${val} +${price} руб.'>`
    wrapper.append(markup) // Помещаем input в конец forms #ajax-contact-form
  }
  function optimization2() {
    let val = $('input[type="radio"][name="optimization2"]:checked').val()
    let price = $('input[type="radio"][name="optimization2"]:checked').data(
      'price'
    )
    var markup = `<input hidden class='ready-hidden' type='text' id='optimization2'  data-price='${price}' name='ТЗ на оптимизацию:' value='${val} +${price} руб.'>`
    wrapper.append(markup) // Помещаем input в конец forms #ajax-contact-form
  }
  function optimization3() {
    let val = $('input[type="radio"][name="optimization3"]:checked').val()
    let price = $('input[type="radio"][name="optimization3"]:checked').data(
      'price'
    )
    var markup = `<input hidden class='ready-hidden' type='text' id='optimization3'  data-price='${price}' name='ТЗ на оптимизацию:' value='${val} +${price} руб.'>`
    wrapper.append(markup) // Помещаем input в конец forms #ajax-contact-form
  }
  function quantity() {
    let price = $('.input-sng').data('price')
    let num = $('.input-sng').data('num')
    var markup = `<input hidden class='ready-hidden' type='text' id='quantity'  data-price='${price}' name='Количество товаров:' value='${num} +${price} руб.'>`
    wrapper.append(markup) // Помещаем input в конец forms #ajax-contact-form
  }

  function tzcopy() {
    let price = $('.store-copy').data('price')
    let num = $('.store-copy').data('num')
    var markup = `<input hidden class='ready-hidden' type='text' id='tzcopy'  data-price='${price}' name='ТЗ на копирайтинг: value='${num}' +${price} руб.'>`
    wrapper.append(markup) // Помещаем input в конец forms #ajax-contact-form
  }
  function tzcopy2() {
    let price = $('.store-copy2').data('price')
    let num = $('.store-copy2').data('num')
    var markup = `<input hidden class='ready-hidden' type='text' id='tzcopy2'  data-price='${price}' name='ТЗ на копирайтинг:' value='${num} +${price} руб.'>`
    wrapper.append(markup) // Помещаем input в конец forms #ajax-contact-form
  }
  function spellingText() {
    let price = $('input[type="checkbox"][name="store-copy2"]')
      .data('price')
      .toString()
      .replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ')
    $('.store-text2').text('+ ' + price + ' руб')
    var markup = `<input hidden class='ready-hidden' type='text' id='store-text2'  data-price='${price}' name='Написание текста, согласно подготовленному ТЗ:' value='+${price} руб.'>`
    wrapper.append(markup) // Помещаем input в конец forms #ajax-contact-form
  }
  function infoSite() {
    let val = $('input[type="radio"][name="info-site"]:checked').val()
    let price = $('input[type="radio"][name="info-site"]:checked').data('price')
    var markup = `<input hidden class='ready-hidden' type='text' id='info-site'  data-price='${price}' name='Подготовка структуры:' value='${val} +${price} руб.'>`
    wrapper.append(markup) // Помещаем input в конец forms #ajax-contact-form
  }

  storeType()
  quantity()
  structure()
  tzcopy()
  optimization()

  // quantity 1
  $('.input-sng').keyup(function() {
    if ($('#quantity')) {
      $('#quantity').remove()
      calc()
    }
    if ($('.input-sng').val() == '') {
      $('.input-sng').val('')
      $('.sng').text($('.input-sng').data('num'))
      $('.sngp').text($('.input-sng').data('price'))

      var markup = `<input hidden class='ready-hidden' type='text' id='quantity'  data-price='${$(
        '.input-sng'
      )
        .data('price')
        .toString()
        .replace(
          /(\d)(?=(\d\d\d)+([^\d]|$))/g,
          '$1 '
        )}' name='Колличество товаров:' value='${$('.input-sng')
        .data('num')
        .toString()
        .replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ')} +${$('.input-sng').data(
        'price'
      )} руб.'>`
      wrapper.append(markup) // Помещаем input в конец forms #ajax-contact-form
      calc()
    }
    if (+$('.input-sng').val()) {
      $('.sng').text(parseInt($('.input-sng').val()))
      //Интернет-магазин Количество товаров
      totalPrice = parseInt(
        $('.input-sng').val() * +$('.input-sng').data('coefficient')
      )
      $('.sngp').text('+ ' + totalPrice + ' руб')
      var markup = `<input hidden class='ready-hidden' type='text' id='quantity'  data-price='${totalPrice}' name='Колличество товаров:' value='${$(
        '.input-sng'
      )
        .val()
        .toString()
        .replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ')} +${totalPrice} руб.'>`
      wrapper.append(markup) // Помещаем input в конец forms #ajax-contact-form
      calc()
    }
  })

  // Подготовка структуры:

  $('input[name="structure"]').on('click', function() {
    let val = $('input[type="radio"][name="structure"]:checked').val()
    let price = $('input[type="radio"][name="structure"]:checked')
      .data('price')
      .toString()
      .replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ')
    $('.structure').text(val)
    $('.structure-price').text('+ ' + price + ' руб')
    if ($('#structure')) {
      $('#structure').remove()
      calc()
    }
    var markup = `<input hidden class='ready-hidden' type='text' id='structure'  data-price='${price}' name='Подготовка структуры:' value='${val} +${price} руб.'>`
    wrapper.append(markup) // Помещаем input в конец forms #ajax-contact-form
    calc()
  })

  // Подготовка структуры2:

  $('input[name="structure2"]').on('click', function() {
    let val = $('input[type="radio"][name="structure2"]:checked').val()
    let price = $('input[type="radio"][name="structure2"]:checked')
      .data('price')
      .toString()
      .replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ')
    $('.structure2').text(val)
    $('.structure-price2').text('+ ' + price + ' руб')
    if ($('#structure2')) {
      $('#structure2').remove()
      calc()
    }
    var markup = `<input hidden class='ready-hidden' type='text' id='structure2'  data-price='${price}' name='Подготовка структуры:' value='${val} +${price} руб.'>`
    wrapper.append(markup) // Помещаем input в конец forms #ajax-contact-form
    calc()
  })
  // Подготовка структуры3:

  $('input[name="structure3"]').on('click', function() {
    let val = $('input[type="radio"][name="structure3"]:checked').val()
    let price = $('input[type="radio"][name="structure3"]:checked')
      .data('price')
      .toString()
      .replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ')
    $('.structure3').text(val)
    $('.structure-price3').text('+ ' + price + ' руб')
    if ($('#structure3')) {
      $('#structure3').remove()
      calc()
    }
    var markup = `<input hidden class='ready-hidden' type='text' id='structure3'  data-price='${price}' name='Подготовка структуры:' value='${val} +${price} руб.'>`
    wrapper.append(markup) // Помещаем input в конец forms #ajax-contact-form
    calc()
  })

  //ТЗ на копирайтинг 1

  $('.store-copy').keyup(function() {
    if ($('#tzcopy')) {
      $('#tzcopy').remove()
      calc()
    }
    if ($('.store-copy').val() == '') {
      $('.store-copy').val('')
      $('.store-copy__number').text($('.store-copy').data('num'))
      $('.store-copy__price').text(`+${$('.store-copy').data('price')} руб.`)

      var markup = `<input hidden class='ready-hidden' type='text' id='tzcopy'  data-price='${$(
        '.store-copy'
      )
        .data('price')
        .toString()
        .replace(
          /(\d)(?=(\d\d\d)+([^\d]|$))/g,
          '$1 '
        )}' name='ТЗ на копирайтинг:' value='${$('.store-copy')
        .data('num')
        .toString()
        .replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ')} +${$(
        '.store-copy'
      ).data('price')} руб.'>`
      wrapper.append(markup) // Помещаем input в конец forms #ajax-contact-form
      calc()
    }
    if (+$('.store-copy').val()) {
      $('.store-copy__number').text(parseInt($('.store-copy').val()))
      totalPrice = parseInt(
        $('.store-copy').val() * +$('.store-copy').data('coefficient')
      )
      $('.store-copy__price').text(
        '+' +
          totalPrice.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ') +
          ' руб'
      )
      var markup = `<input hidden class='ready-hidden' type='text' id='tzcopy'  data-price='${totalPrice
        .toString()
        .replace(
          /(\d)(?=(\d\d\d)+([^\d]|$))/g,
          '$1 '
        )}' name='ТЗ на копирайтинг:' value='${$('.store-copy')
        .val()
        .toString()
        .replace(
          /(\d)(?=(\d\d\d)+([^\d]|$))/g,
          '$1 '
        )} +${totalPrice
        .toString()
        .replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ')} руб.'>`
      wrapper.append(markup) // Помещаем input в конец forms #ajax-contact-form
      calc()
    }
  })

  //ТЗ на копирайтинг 2

  $('.store-copy2').keyup(function() {
    if ($('#tzcopy2')) {
      $('#tzcopy2').remove()
      calc()
    }
    if ($('.store-copy2').val() == '') {
      $('.store-copy2').val('')
      $('.store-copy__number2').text(' ')
      $('.store-copy__price2').text(' ')

      var markup = `<input hidden class='ready-hidden' type='text' id='tzcopy2'  data-price='' name='ТЗ на копирайтинг:' value="-">`
      wrapper.append(markup) // Помещаем input в конец forms #ajax-contact-form
      calc()
    }
    if (+$('.store-copy2').val()) {
      $('.store-copy__number2').text(parseInt($('.store-copy2').val()))
      totalPrice = parseInt(
        $('.store-copy2').val() * +$('.store-copy2').data('coefficient')
      )
      $('.store-copy__price2').text(
        '+' +
          totalPrice.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ') +
          ' руб'
      )
      var markup = `<input hidden class='ready-hidden' type='text' id='tzcopy2'  data-price='${totalPrice
        .toString()
        .replace(
          /(\d)(?=(\d\d\d)+([^\d]|$))/g,
          '$1 '
        )}' name='ТЗ на копирайтинг:' value='${$('.store-copy2')
        .val()
        .toString()
        .replace(
          /(\d)(?=(\d\d\d)+([^\d]|$))/g,
          '$1 '
        )} +${totalPrice
        .toString()
        .replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ')} руб.'>`
      wrapper.append(markup) // Помещаем input в конец forms #ajax-contact-form
      calc()
    }
  })

  //ТЗ на копирайтинг 3

  $('.store-copy3').keyup(function() {
    if ($('#tzcopy3')) {
      $('#tzcopy3').remove()
      calc()
    }
    if ($('.store-copy3').val() == '') {
      $('.store-copy3').val('')
      $('.store-copy__number3').text(' ')
      $('.store-copy__price3').text(' ')

      var markup = `<input hidden class='ready-hidden' type='text' id='tzcopy3'  data-price='' name='ТЗ на копирайтинг:' value="-">`
      wrapper.append(markup) // Помещаем input в конец forms #ajax-contact-form
      calc()
    }
    if (+$('.store-copy3').val()) {
      $('.store-copy__number3').text(parseInt($('.store-copy3').val()))
      totalPrice = parseInt(
        $('.store-copy3').val() * +$('.store-copy3').data('coefficient')
      )
      $('.store-copy__price3').text(
        '+' +
          totalPrice.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ') +
          ' руб'
      )
      var markup = `<input hidden class='ready-hidden' type='text' id='tzcopy3'  data-price='${totalPrice
        .toString()
        .replace(
          /(\d)(?=(\d\d\d)+([^\d]|$))/g,
          '$1 '
        )}' name='ТЗ на копирайтинг:' value='${$('.store-copy3')
        .val()
        .toString()
        .replace(
          /(\d)(?=(\d\d\d)+([^\d]|$))/g,
          '$1 '
        )} +${totalPrice
        .toString()
        .replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ')} руб.'>`
      wrapper.append(markup) // Помещаем input в конец forms #ajax-contact-form
      calc()
    }
  })

  // Тип информационного сайта

  $('input[name="info-site"]').on('click', function() {
    let val = $('input[type="radio"][name="info-site"]:checked').val()
    let price = $('input[type="radio"][name="info-site"]:checked')
      .data('price')
      .toString()
      .replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ')
    $('.info-site').text(val)
    $('.info-site-price').text('+ ' + price + ' руб')
    if ($('#info-site')) {
      $('#info-site').remove()
      calc()
    }
    var markup = `<input hidden class='ready-hidden' type='text' id='info-site'  data-price='${price}' name='Тип информационного сайта:' value=' ${val} +${price} руб.'>`
    wrapper.append(markup) // Помещаем input в конец forms #ajax-contact-form
    calc()
  })

  // Написание текста, согласно подготовленному ТЗ:

  $('input[type="checkbox"][name="store-copy"]').on('click', function() {
    if (
      !$('input[type="checkbox"][name="store-copy"]:checked').is(':checked')
    ) {
      $('.store-text').text(' ')
      $('#store-text').remove()
      calc()
    } else {
      let price = $('input[type="checkbox"][name="store-copy"]')
        .data('price')
        .toString()
        .replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ')
      $('.store-text').text('+ ' + price + ' руб')
      var markup = `<input hidden class='ready-hidden' type='text' id='store-text'  data-price='${price}' name='Написание текста, согласно подготовленному ТЗ:' value='+${price} руб.'>`
      wrapper.append(markup) // Помещаем input в конец forms #ajax-contact-form
      calc()
    }
  })

  // Написание текста, согласно подготовленному ТЗ 2:

  $('input[type="checkbox"][name="store-copy2"]').on('click', function() {
    if (
      !$('input[type="checkbox"][name="store-copy2"]:checked').is(':checked')
    ) {
      $('.store-text2').text(' ')
      $('#store-text2').remove()
      calc()
    } else {
      let price = $('input[type="checkbox"][name="store-copy2"]')
        .data('price')
        .toString()
        .replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ')
      $('.store-text2').text('+ ' + price + ' руб')
      var markup = `<input hidden class='ready-hidden' type='text' id='store-text2'  data-price='${price}' name='Написание текста, согласно подготовленному ТЗ:' value='+${price} руб.'>`
      wrapper.append(markup) // Помещаем input в конец forms #ajax-contact-form
      calc()
    }
  })

  // Написание текста, согласно подготовленному ТЗ 3

  $('input[type="checkbox"][name="store-copy3"]').on('click', function() {
    if (
      !$('input[type="checkbox"][name="store-copy3"]:checked').is(':checked')
    ) {
      $('.store-text3').text(' ')
      $('#store-text3').remove()
      calc()
    } else {
      let price = $('input[type="checkbox"][name="store-copy3"]')
        .data('price')
        .toString()
        .replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ')
      $('.store-text3').text('+ ' + price + ' руб')
      var markup = `<input hidden class='ready-hidden' type='text' id='store-text3'  data-price='${price}' name='Написание текста, согласно подготовленному ТЗ:' value='+${price} руб.'>`
      wrapper.append(markup) // Помещаем input в конец forms #ajax-contact-form
      calc()
    }
  })

  // ТЗ на оптимизацию

  $('input[name="optimization"]').on('click', function() {
    let val = $('input[type="radio"][name="optimization"]:checked').val()
    let price = $('input[type="radio"][name="optimization"]:checked')
      .data('price')
      .toString()
      .replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ')
    $('.optimization').text(val)
    $('.optimization-price').text('+ ' + price + ' руб')
    if ($('#optimization')) {
      $('#optimization').remove()
      calc()
    }
    var markup = `<input hidden class='ready-hidden' type='text' id='optimization'  data-price='${price}' name='ТЗ на оптимизацию:' value='${val} +${price} руб.'>`
    wrapper.append(markup) // Помещаем input в конец forms #ajax-contact-form
    calc()
  })

  // ТЗ на оптимизацию 2

  $('input[name="optimization2"]').on('click', function() {
    let val = $('input[type="radio"][name="optimization2"]:checked').val()
    let price = $('input[type="radio"][name="optimization2"]:checked')
      .data('price')
      .toString()
      .replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ')
    $('.optimization2').text(val)
    $('.optimization-price2').text('+ ' + price + ' руб')
    if ($('#optimization2')) {
      $('#optimization2').remove()
      calc()
    }
    var markup = `<input hidden class='ready-hidden' type='text' id='optimization2'  data-price='${price}' name='ТЗ на оптимизацию:' value='${val} +${price} руб.'>`
    wrapper.append(markup) // Помещаем input в конец forms #ajax-contact-form
    calc()
  })

  // ТЗ на оптимизацию 3

  $('input[name="optimization3"]').on('click', function() {
    let val = $('input[type="radio"][name="optimization3"]:checked').val()
    let price = $('input[type="radio"][name="optimization3"]:checked')
      .data('price')
      .toString()
      .replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ')
    $('.optimization3').text(val)
    $('.optimization-price3').text('+ ' + price + ' руб')
    if ($('#optimization3')) {
      $('#optimization3').remove()
      calc()
    }
    var markup = `<input hidden class='ready-hidden' type='text' id='optimization3'  data-price='${price}' name='ТЗ на оптимизацию:' value='${val} +${price} руб.'>`
    wrapper.append(markup) // Помещаем input в конец forms #ajax-contact-form
    calc()
  })

  function calc() {
    let array = []
    $('[id]').each(function() {
      var idAttr = $(this).attr('id'),
        selector = '[id=' + idAttr + ']'
      if ($(selector).length > 1) {
        $(selector)
          .not(':first')
          .remove()
      }
    })
    if ($('#total')) {
      $('#total').remove()
    }
    $('.ready-hidden[data-price]').each(function(i) {
      let str = $(this)
        .data('price')
        .toString()

      array.push(Number(str.replace(/[\s.,%]/g, '')))
    })
    var result = array.reduce(function(sum, current) {
      return sum + current
    }, 0)

    $('.info-total__price').html(
      result.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ')
    )

    var markup = `<input hidden class='ready-hidden' type='text' id='total'  data-price='${result}' name='Итого:' value='${result} руб.'>`
    wrapper.append(markup) // Помещаем input в конец forms #ajax-contact-form
  }

  calc()

  $('.tariffs__tab').on('click', function() {
    $('.ready-hidden[data-price]').remove()
    calc()
    if ($(this).hasClass('tab-1')) {
      storeType()
      quantity()
      structure()
      tzcopy()
      optimization()
      calc()
    }
    if ($(this).hasClass('tab-2')) {
      storeType2()
      structure2()
      optimization2()
      spellingText()
      calc()
    }
    if ($(this).hasClass('tab-3')) {
      storeType3()
      infoSite()
      structure3()
      optimization3()
      calc()
    }
  })

  $('.store-btn').on('click', function() {
    $('.overlay').addClass('open')
    $('#popup1').addClass('open')
    $('body').addClass('open')
  })
  $('.overlay').on('click', function() {
    $('.overlay').removeClass('open')
    $('#popup1').removeClass('open')
    $('body').removeClass('open')
  })

  // fast
  $('.fast').on('click', function() {
    $('.overlay').addClass('open')
    $('#popup2').addClass('open')
    $('body').addClass('open')
  })
  $('.overlay').on('click', function() {
    $('.overlay').removeClass('open')
    $('#popup2').removeClass('open')
    $('body').removeClass('open')
  })

  // call
  $('.call').on('click', function() {
    $('.overlay').addClass('open')
    $('#popup3').addClass('open')
    $('body').addClass('open')
  })
  $('.overlay').on('click', function() {
    $('.overlay').removeClass('open')
    $('#popup3').removeClass('open')
    $('body').removeClass('open')
  })

  $('.hamburger').click(function() {
    $(this).addClass('hamburger--open')
    $('.m-menu').addClass('open')
  })
  $('.m-menu__icon').click(function() {
    $('.hamburger').removeClass('hamburger--open')
    $('.m-menu').removeClass('open')
  })

  //E-mail Ajax Send
  $('#checkout').submit(function() {
    //Change
    var th = $(this)
    $.ajax({
      type: 'POST',
      url: 'mail.php', //Change
      data: th.serialize()
    }).done(function() {
      $('#popup1').removeClass('open')
      $('.popup-thanks').addClass('open')
      setTimeout(function() {
        // Done Functions
        $('.overlay').removeClass('open')
        $('#popup1').removeClass('open')
        $('body').removeClass('open')
        $('.popup-thanks').removeClass('open')
        th.trigger('reset')
      }, 2000)
    })
    return false
  })
  //E-mail Ajax Send
  $('#fast').submit(function() {
    //Change
    var th = $(this)
    $.ajax({
      type: 'POST',
      url: 'mail.php', //Change
      data: th.serialize()
    }).done(function() {
      $('#popup2').removeClass('open')
      $('.popup-thanks').addClass('open')
      setTimeout(function() {
        // Done Functions
        $('.overlay').removeClass('open')
        $('#popup2').removeClass('open')
        $('body').removeClass('open')
        $('.popup-thanks').removeClass('open')
        th.trigger('reset')
      }, 2000)
    })
    return false
  })
  $('#call').submit(function() {
    //Change
    var th = $(this)
    $.ajax({
      type: 'POST',
      url: 'mail.php', //Change
      data: th.serialize()
    }).done(function() {
      $('#popup3').removeClass('open')
      $('.popup-thanks').addClass('open')
      setTimeout(function() {
        // Done Functions
        $('.overlay').removeClass('open')
        $('#popup3').removeClass('open')
        $('body').removeClass('open')
        $('.popup-thanks').removeClass('open')
        th.trigger('reset')
      }, 2000)
    })
    return false
  })

  //  Plugin jq validate
  $(function() {
    $('#tell').validate({
      errorPlacement: function(error, element) {
        if (element.attr('name') == 'checkbox') {
          error.insertAfter(element.parent())
        } else {
          error.insertAfter(element)
        }
        return true
      },
      ignore: ':disabled',
      errorClass: 'invalid',
      validClass: 'success',
      // errorElement: false,
      highlight: function(element, errorClass, validClass) {
        $(element)
          .parent()
          .addClass(errorClass)
          .removeClass(validClass)
      },
      unhighlight: function(element, errorClass, validClass) {
        $(element)
          .parent()
          .removeClass(errorClass)
          .addClass(validClass)
      },
      rules: {
        Check: {
          required: true
        },
        Name: {
          required: true,
          minlength: 3
        },
        Email: {
          required: true,
          email: true
        },
        Phone: {
          required: true
        },
        Copywriting: {
          required: false,
          number: true
        },
        Optimization: {
          required: true
        },
        Structure: {
          required: true
        },
        Type: {
          required: true
        },
        Goods: {
          required: false,
          number: true
        }
      },
      messages: {
        Name: {
          required: 'Это поле обязательно',
          minlength: 'Не менее 3 символов'
        },
        Email: {
          required: 'Это поле обязательно',
          email: 'адрес электронной почты должен быть в формате name@domain.com'
        },
        Phone: {
          required: 'Это поле обязательно'
        },
        Copywriting: {
          // required: 'Это поле обязательно',
          number: 'Введите число'
        },
        Optimization: {
          required: 'Это поле обязательно'
        },
        Structure: {
          required: 'Это поле обязательно'
        },
        Type: {
          required: 'Это поле обязательно'
        },
        Goods: {
          // required: 'Это поле обязательно',
          number: 'Введите число'
        },
        checkboxFF: {
          required: false
        }
      },
      submitHandler: function(form, e) {
        var http = new XMLHttpRequest()

        e.preventDefault()

        var th = $(form)
        $.ajax({
          type: 'POST',
          url: 'mail.php', //Change
          data: th.serialize()
        }).done(function() {
          $('.popup-thanks').addClass('open')
          $('.overlay').addClass('open')
          setTimeout(function() {
            $('.overlay').removeClass('open')
            $('.popup-thanks').removeClass('open')
            th.trigger('reset')
          }, 2000)
        })
      }
    })
  })
  // $(document).click(function(e) {
  //   console.log(e.target)
  // })

  $('.checkbox-tell').on('click', function() {
    $('#Check-error').remove()
  })
  // MASK
  $('[type="tel"]').mask('+7(999) 999-99-99') //у инпутов с телефоном обязательно должен быть тайп тел

  $('.custom-select').each(function() {
    var classes = $(this).attr('class'),
      id = $(this).attr('id'),
      name = $(this).attr('name'),
      val = $(this).children('option:selected')

    var template = '<div class="' + classes + '">'
    template +=
      '<span class="custom-select-trigger">' +
      $(this).attr('placeholder') +
      '</span>'
    template += '<div class="custom-options">'
    $(this)
      .find('option')
      .each(function(e, i) {
        if ($(i).is(':selected')) {
          template +=
            '<span class="custom-option active-option ' +
            $(this).attr('class') +
            '" data-value="' +
            $(this).attr('value') +
            '">' +
            $(this).html() +
            '</span>'
          return
        }
        template +=
          '<span class="custom-option ' +
          $(this).attr('class') +
          '" data-value="' +
          $(this).attr('value') +
          '">' +
          $(this).html() +
          '</span>'
      })
    template += '</div></div>'

    $(this).wrap('<div class="custom-select-wrapper"></div>')
    $(this).hide()
    $(this).after(template)
  })
  $('.custom-option:first-of-type').hover(
    function() {
      $(this)
        .parents('.custom-options')
        .addClass('option-hover')
    },
    function() {
      $(this)
        .parents('.custom-options')
        .removeClass('option-hover')
    }
  )
  $('.custom-select-trigger').on('click', function() {
    $('html').one('click', function() {
      $('.custom-select').removeClass('opened')
      $('.custom-option').removeClass('active-option')
    })
    $(this)
      .parents('.custom-select')
      .toggleClass('opened')
    event.stopPropagation()
  })
  $('.custom-option').on('click', function() {
    $(this)
      .parents()
      .children()
      .removeClass('active-option')
    $(this)
      .parents('.custom-select-wrapper')
      .find('select')
      .val($(this).data('value'))
    $(this)
      .parents('.custom-options')
      .find('.custom-option')
      .removeClass('selection')
    $(this).addClass('selection')
    $(this)
      .parents('.custom-select')
      .removeClass('opened')
    $(this)
      .parents('.custom-select')
      .find('.custom-select-trigger')
      .text($(this).text())
  })

  $('.tabs-text').on('click', function() {
    $(this).toggleClass('active')
    $('.tariffs__tabs').toggleClass('active')
  })
  $('.tariffs__tab').on('click', function() {
    let text = $(this).text()
    $('.tabs-text').text(text)
    $('.tabs-text').removeClass('active')
    $('.tariffs__tabs').removeClass('active')
  })

  function setTextTab() {
    let text = $('.tariffs__tab.active').text()
    $('.tabs-text').text(text)
  }
  setTextTab()

  $('.label--radio').on('click', function() {
    $(this)
      .closest('.radio-wrapper')
      .find('.label--radio')
      .removeClass('active')
    $(this).addClass('active')
  })
  $('.slowly').on('click', function(event) {
    $('.slowly')
      .parent()
      .removeClass('active')
    $(this)
      .parent()
      .addClass('active')
    event.preventDefault()
    var id = $(this).attr('href')
    let top = $(id).offset().top
    $('body,html').animate({ scrollTop: top }, 600)
  })
})
