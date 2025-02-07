// ==UserScript==
// @name         IMDB - Trakt.tv Button
// @namespace    https://github.com/LenAnderson/
// @downloadURL  https://github.com/LenAnderson/IMDB-Trakt.tv-Button/raw/master/imdb_trakttv_button.user.js
// @version      1.0
// @description  Adds a button linking to the corresponding Trakt.tv page to IMDB movie, TV show, and episode pages
// @author       LenAnderson - Updated by seanGSISG
// @match        https://www.imdb.com/title/*
// @grant        none
// ==/UserScript==

(function() {
  'use strict';
  
  // Extract IMDb id from URL (e.g., "tt0111161")
  const parts = window.location.pathname.split('/');
  const imdbId = parts[2]; 
  if (!imdbId) return; // No id found, exit
  
  // Create the button/link
  let a = document.createElement('a');
  a.href = `https://trakt.tv/search/imdb/${imdbId}`;
  a.style.display = 'inline-block';
  a.style.height = '32px';
  a.style.width = '32px';
  a.style.backgroundImage = 'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0...")';
  a.title = 'Trakt.tv';
  
  // Attempt to find a new container – try IMDb’s new title container first,
  // but fall back to the old one or append to the body if necessary.
  let container = document.querySelector('.TitleBlock__TitleContainer-sc-1nlhx7j-1') ||
                  document.querySelector('.title_wrapper');
  if (container) {
    // Insert the button – adjust the position as needed.
    container.insertBefore(a, container.children[1] || container.firstChild);
  } else {
    // Fallback: just append it to the body.
    document.body.appendChild(a);
  }
})();
