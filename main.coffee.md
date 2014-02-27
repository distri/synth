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
    LFO = require "./lfo"
    Bank = require "./osc_bank"
    {pow} = Math

    global.context = new AudioContext

    masterGain = context.createGain()
    masterGain.gain.value = 0.2
    masterGain.connect(context.destination)

    oscs = [0..10].map ->
      vco = Bank()
      # vco.start(0)
      # vco.type = vco.TRIANGLE

      vca = context.createGain()
      vca.gain.value = 0.0

      vco.connect(vca)
      vca.connect(masterGain)

      frequency: vco.frequency
      gain: vca.gain

    # FM Effect
    # LFO(vco.frequency, 61, 1000)

    # Vibrato Effect
    # LFO(vco.frequency, 7, 10)

    # Tremolo Effect
    # LFO(masterGain.gain, 10, 0.01)

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
        gain.connect(context.destination)
        source.start(0)

    octaves = 3
    tones = 12
    handler = ({identifier, x, y}) ->
      initIOS()

      {frequency, gain} = oscs[identifier]

      frequency.value = freq(octaves * (Math.floor(x * tones * octaves) / (tones * octaves)))
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

    frequencyDomain = new Uint8Array(analyser.frequencyBinCount)
    timeDomain = new Uint8Array(analyser.frequencyBinCount)

    setInterval ->
      canvas.fill "black"

      analyser.getByteFrequencyData(frequencyDomain)
      analyser.getByteTimeDomainData(timeDomain)

      # Draw waveforms or frequency spectrum
      ratio = canvas.height() / 255
      Array::forEach.call frequencyDomain, (value, index) ->
        canvas.drawRect
          x: index
          y: ratio * (255 - value)
          width: 1
          height: ratio * value
          color: "blue"

      Array::forEach.call timeDomain, (value, index) ->
        canvas.drawCircle
          x: index
          y: ratio * (255 - value)
          radius: 1
          color: "red"

    , 1000/60
