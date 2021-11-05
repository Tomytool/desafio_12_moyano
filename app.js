$(document).ready(function () {
  let avisoAlerta = '<div class="alerta"></div>';
  let aviso = '<h3>El numero debe ser mayor a 0</h3>';
  let boton = '<button id="btn" class="boton-primario">Aceptar</button>';
  $("input[type='button']").on('click', function () {
    $('.main').empty();
    let numero = parseInt($('#multiplo').val());
    console.log(numero);
    if (numero > 0) {
      for (let index = 1; index <= 12; index++) {
        $('.main').append(
          `<div class="lista">${numero} x ${index} = ${numero * index}</div>`
        );
      }
    } else {
      $('body').append(avisoAlerta);
      $('.alerta').append(aviso).append(boton);
      $('#btn').on('click', function () {
        console.log('click');
        $('.alerta').remove();
      });
    }
  });
});
