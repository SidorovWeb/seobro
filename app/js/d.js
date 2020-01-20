$(document).ready(function() {
  // console.log('Привет')
  var swiper = new Swiper('.swiper-container', {
    cssMode: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    pagination: {
      el: '.swiper-pagination'
    },
    mousewheel: true,
    keyboard: true
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
  var wrapper = $('.info-wrapper') // Обертка для будучего input
  let isng = $('.input-sng')
  let sng = $('.sng')
  let sngp = $('.sngp')
  let totalPrice

  function storeType() {
    let TypePrice = $('input[name="store"]').data('price')
    var markup = `<input hidden class='ready-hidden' type='text' id='store'  data-price='${TypePrice}' name='Тип проекта: Интернет-магазин' value='+${TypePrice} руб.'>`
    wrapper.append(markup) // Помещаем input в конец forms #ajax-contact-form
  }

  function storeType2() {
    let TypePrice = $('input[name="store2"]').data('price')
    var markup = `<input hidden class='ready-hidden' type='text' id='store2'  data-price='${TypePrice}' name='Тип проекта: Сайт услуг' value='+${TypePrice} руб.'>`
    wrapper.append(markup) // Помещаем input в конец forms #ajax-contact-form
  }

  function structure() {
    let val = $('input[type="radio"][name="structure"]:checked').val()
    let price = $('input[type="radio"][name="structure"]:checked').data('price')
    var markup = `<input hidden class='ready-hidden' type='text' id='structure'  data-price='${price}' name='Подготовка структуры: ${val}' value='+${price} руб.'>`
    wrapper.append(markup) // Помещаем input в конец forms #ajax-contact-form
  }
  function structure2() {
    let val = $('input[type="radio"][name="structure2"]:checked').val()
    let price = $('input[type="radio"][name="structure2"]:checked').data(
      'price'
    )
    var markup = `<input hidden class='ready-hidden' type='text' id='structure2'  data-price='${price}' name='Подготовка структуры: ${val}' value='+${price} руб.'>`
    wrapper.append(markup) // Помещаем input в конец forms #ajax-contact-form
  }
  function optimization() {
    let val = $('input[type="radio"][name="optimization2"]:checked').val()
    let price = $('input[type="radio"][name="optimization2"]:checked').data(
      'price'
    )
    var markup = `<input hidden class='ready-hidden' type='text' id='optimization2'  data-price='${price}' name='ТЗ на оптимизацию: ${val}' value='+${price} руб.'>`
    wrapper.append(markup) // Помещаем input в конец forms #ajax-contact-form
  }
  function optimization2() {
    let val = $('input[type="radio"][name="optimization2"]:checked').val()
    let price = $('input[type="radio"][name="optimization2"]:checked').data(
      'price'
    )
    var markup = `<input hidden class='ready-hidden' type='text' id='optimization2'  data-price='${price}' name='ТЗ на оптимизацию: ${val}' value='+${price} руб.'>`
    wrapper.append(markup) // Помещаем input в конец forms #ajax-contact-form
  }
  function quantity() {
    let price = $('.input-sng').data('price')
    let num = $('.input-sng').data('num')
    var markup = `<input hidden class='ready-hidden' type='text' id='quantity'  data-price='${price}' name='Количество товаров: ${num}' value='+${price} руб.'>`
    wrapper.append(markup) // Помещаем input в конец forms #ajax-contact-form
  }

  function tzcopy() {
    let price = $('.store-copy').data('price')
    let num = $('.store-copy').data('num')
    var markup = `<input hidden class='ready-hidden' type='text' id='tzcopy'  data-price='${price}' name='ТЗ на копирайтинг: ${num}' value='+${price} руб.'>`
    wrapper.append(markup) // Помещаем input в конец forms #ajax-contact-form
  }
  function tzcopy2() {
    let price = $('.store-copy2').data('price')
    let num = $('.store-copy2').data('num')
    var markup = `<input hidden class='ready-hidden' type='text' id='tzcopy2'  data-price='${price}' name='ТЗ на копирайтинг: ${num}' value='+${price} руб.'>`
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
  storeType()
  quantity()
  structure()
  optimization()

  isng.keyup(function() {
    if ($('#quantity')) {
      $('#quantity').remove()
      calc()
    }
    if (isng.val() == '') {
      isng.val('')
      sng.text(isng.data('num'))
      sngp.text(isng.data('price'))

      var markup = `<input hidden class='ready-hidden' type='text' id='quantity'  data-price='${isng
        .data('price')
        .toString()
        .replace(
          /(\d)(?=(\d\d\d)+([^\d]|$))/g,
          '$1 '
        )}' name='Колличество товаров: ${isng
        .data('num')
        .toString()
        .replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ')}' value='+${isng.data(
        'price'
      )} руб.'>`
      wrapper.append(markup) // Помещаем input в конец forms #ajax-contact-form
      calc()
    }
    if (+isng.val()) {
      sng.text(parseInt(isng.val()))
      //Интернет-магазин Количество товаров
      totalPrice = parseInt(isng.val() * +isng.data('coefficient'))
      sngp.text('+ ' + totalPrice + ' руб')
      var markup = `<input hidden class='ready-hidden' type='text' id='quantity'  data-price='${isng
        .val()
        .toString()
        .replace(
          /(\d)(?=(\d\d\d)+([^\d]|$))/g,
          '$1 '
        )}' name='Колличество товаров: ${isng
        .val()
        .toString()
        .replace(
          /(\d)(?=(\d\d\d)+([^\d]|$))/g,
          '$1 '
        )}' value='+${totalPrice} руб.'>`
      wrapper.append(markup) // Помещаем input в конец forms #ajax-contact-form
      calc()
    }
  })
  //ТЗ на копирайтинг

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
        )}' name='ТЗ на копирайтинг: ${$('.store-copy')
        .data('num')
        .toString()
        .replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ')}' value='+${$(
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
    var markup = `<input hidden class='ready-hidden' type='text' id='structure'  data-price='${price}' name='Подготовка структуры:' value=' ${val} +${price} руб.'>`
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
    $('.ready-hidden[data-price]').each(function(i) {
      console.log($(this).data('price'))

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
  }

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
    // if ($(this).hasClass('tab-2')) {
    //   storeType2()
    //   structure2()
    //   optimization2()
    //   spellingText()
    //   calc()
    // }
  })
})
