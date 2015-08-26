Synth
=====

    TouchCanvas = require "touch-canvas"

    {width, height} = require "./pixie"

    canvas = TouchCanvas
      width: width
      height: height

    document.body.appendChild canvas.element()

Synthesizing sound using web audio and crying about it.

    require "./setup"
    Viz = require "./lib/viz"
    LFO = require "./lfo"
    Bank = require "./osc_bank"
    {pow} = Math

    global.context = new AudioContext

    masterGain = context.createGain()
    masterGain.gain.value = 0.2
    masterGain.connect(context.destination)

    oscs = [0..5].map ->
      vco = Bank()
      # vco.start(0)
      # vco.type = vco.TRIANGLE

      vca = context.createGain()
      vca.gain.value = 0.0

      vco.connect(vca)
      vca.connect(masterGain)

      # FM Effect
      # LFO(vco.frequency, 3, 440)
      
      # Vibrato Effect
      LFO(vco.frequency, 5, 10)

      # Tremolo Effect
      # LFO(masterGain.gain, 6, 0.005)

      frequency: vco.frequency
      gain: vca.gain


    freq = (x) ->
      110 * pow(2, x)

    initIOS = do ->
      initted = false
      ->
        return if initted

        initted = true
        gain = context.createGain()
        gain.gain.value = 0
        source = context.createOscillator()
        source.connect(gain)
        gain.connect(masterGain)
        source.start(0)

    octaves = 3
    tones = 12
    handler = ({identifier, x, y}) ->
      initIOS()

      {frequency, gain} = oscs[identifier]
      
      f = x * tones * octaves

      if false # Clamp to semitones
        f = Math.floor(f)

      frequency.value = freq(octaves * ( f / (tones * octaves)))
      gain.value = 1 - y

    canvas.on "touch", handler
    canvas.on "move", handler
    canvas.on "release", ({identifier}) ->
      {gain} = oscs[identifier]

      gain.value = 0

    handleResize =  ->
      canvas.width(window.innerWidth)
      canvas.height(window.innerHeight)

    handleResize()
    window.addEventListener "resize", handleResize, false

    analyser = context.createAnalyser()
    analyser.smoothingTimeConstant = 0

    masterGain.connect(analyser)

    viz = Viz(analyser)

    setInterval ->
      viz.draw(canvas)
    , 1000/60
