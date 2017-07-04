/**
 * This is one-to-one the PWA Shell from Polymer Starter Kit. Why? Because this is the shell
 * that the function needs to return since the function is where we start and since we can't fallback
 * route in Firebase config. Ugly, yet suprisingly effective.
 * @param {Object} opts 
 */
const pwaShell = function(opts) {
  return `
<!--
@license
Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
-->

<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="generator" content="Polymer Starter Kit">
    <meta name="viewport" content="width=device-width, minimum-scale=1, initial-scale=1, user-scalable=yes">

    <title>My PWA App</title>
    <meta name="description" content="My PWA App description" />
    <meta itemprop="name" content="My PWA App">
    <meta itemprop="headline" content="Magic - My PWA App" />
    <meta itemprop="description" content="My PWA App description">

    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:site" content="@justinribeiro">
    <meta name="twitter:title" content="My PWA App description">
    <meta name="twitter:description" content="My PWA App description">
    <meta name="twitter:creator" content="@justinribeiro">

    <meta property="og:type" content="article" />
    <meta itemprop="og:headline" content="Magic" />
    <meta property="og:title" content="My PWA App" />
    <meta property="og:description" content="My PWA App description" />
    <meta property="og:site_name" content="Justin Ribeiro" />
    <meta property="og:url" content="https://pwa-firebase-functions-botrender" />

    <!--
      If deploying to a non-root path, replace href="/" with the full path to the project root.
      For example: href="/polymer-starter-kit/relative-path-example/"
    -->
    <base href="/">

    <link rel="icon" href="images/favicon.ico">

    <!-- See https://goo.gl/OOhYW5 -->
    <link rel="manifest" href="manifest.json">

    <!-- See https://goo.gl/qRE0vM -->
    <meta name="theme-color" content="#3f51b5">

    <!-- Add to homescreen for Chrome on Android. Fallback for manifest.json -->
    <meta name="mobile-web-app-capable" content="yes">
    <meta name="application-name" content="My App">

    <!-- Add to homescreen for Safari on iOS -->
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
    <meta name="apple-mobile-web-app-title" content="My App">

    <!-- Homescreen icons -->
    <link rel="apple-touch-icon" href="images/manifest/icon-48x48.png">
    <link rel="apple-touch-icon" sizes="72x72" href="images/manifest/icon-72x72.png">
    <link rel="apple-touch-icon" sizes="96x96" href="images/manifest/icon-96x96.png">
    <link rel="apple-touch-icon" sizes="144x144" href="images/manifest/icon-144x144.png">
    <link rel="apple-touch-icon" sizes="192x192" href="images/manifest/icon-192x192.png">

    <!-- Tile icon for Windows 8 (144x144 + tile color) -->
    <meta name="msapplication-TileImage" content="images/manifest/icon-144x144.png">
    <meta name="msapplication-TileColor" content="#3f51b5">
    <meta name="msapplication-tap-highlight" content="no">

    <script>
      // Register the base URL
      const baseUrl = document.querySelector('base').href;

      // Load and register pre-caching Service Worker
      if ('serviceWorker' in navigator) {
        window.addEventListener('load', function() {
          navigator.serviceWorker.register(baseUrl + 'service-worker.js');
        });
      }
    </script>

    <!-- Load webcomponents-loader.js to check and load any polyfills your browser needs -->
    <script src="bower_components/webcomponentsjs/webcomponents-loader.js"></script>

    <!-- Load your application shell -->
    <link rel="import" href="src/my-app.html">

    <!-- Add any global styles for body, document, etc. -->
    <style>
      body {
        margin: 0;
        font-family: 'Roboto', 'Noto', sans-serif;
        line-height: 1.5;
        min-height: 100vh;
        background-color: #eeeeee;
      }
    </style>
  </head>
  <body>
    <my-app></my-app>
    <noscript>
      Please enable JavaScript to view this website.
    </noscript>
    <!-- Built with love using Polymer Starter Kit -->
  </body>
</html>
  `;
}

module.exports = pwaShell;