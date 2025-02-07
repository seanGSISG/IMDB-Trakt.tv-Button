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

  // Extract IMDb ID from the URL, e.g., "/title/tt2582802/"
  const parts = window.location.pathname.split('/');
  const imdbId = parts[2]; // "tt2582802"
  if (!imdbId) return; // Exit if not found

  // Create the button element linking to Trakt
  let a = document.createElement('a');
  a.href = `https://trakt.tv/search/imdb/${imdbId}`;
  a.style.display = 'inline-block';
  a.style.height = '32px';
  a.style.width = '32px';
  a.style.backgroundImage = 'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAF+0lEQVR4n...")';
  a.title = 'Trakt.tv';

  // Try finding a container in the new layout; fallback to the old class if needed.
  let container = document.querySelector('.TitleBlock__TitleContainer-sc-1nlhx7j-1') ||
                  document.querySelector('.title_wrapper');
  if (container) {
    // Insert the button as a child of the container (adjust the insertion index as desired)
    container.insertBefore(a, container.firstChild);
  } else {
    // Fallback: append the button to the body if no known container is found.
    document.body.appendChild(a);
  }
})();
