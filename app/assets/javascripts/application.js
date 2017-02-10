// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
// app/assets/javascripts/application.js
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require bootstrap-sprockets
//= require_tree .

/**
 * main.js
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 *
 * Copyright 2016, Codrops
 * http://www.codrops.com
 */
$(document).ready(function() {
  ;(function(window) {

    'use strict';

    var closeCtrl = document.getElementById('btn-search-close'),
      searchContainer = document.querySelector('.search'),
      inputSearch = searchContainer.querySelector('.search__input');

    function init() {
      initEvents();
    }

    function initEvents() {
      inputSearch.addEventListener('focus', openSearch);
      closeCtrl.addEventListener('click', closeSearch);
      document.addEventListener('keyup', function(ev) {
        // escape key.
        if( ev.keyCode == 27 ) {
          closeSearch();
        }
      });
    }

    function openSearch() {
      searchContainer.classList.add('search--open');
      inputSearch.focus();
    }

    function closeSearch() {
      searchContainer.classList.remove('search--open');
      inputSearch.blur();
      inputSearch.value = '';
    }

    init();

  })(window);
})
