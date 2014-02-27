Setup
=====

    global.AudioContext = 
      global.AudioContext or
      global.webkitAudioContext

    require "appcache"

    applyStyleSheet = ->
      styleNode = document.createElement("style")
      styleNode.innerHTML = require "./style"

      document.head.appendChild(styleNode)

    applyStyleSheet()
