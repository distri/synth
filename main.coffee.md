Synth
=====

    TouchCanvas = require "touch-canvas"

    {width, height} = require "./pixie"

    canvas = TouchCanvas
      width: width
      height: height

    document.body.appendChild canvas.element()
    canvas.fill "black"

Synthesizing sound using web audio and crying about it.

    require "./setup"
    LFO = require "./lfo"
    Bank = require "./osc_bank"
    {pow} = Math

    global.context = new AudioContext

    masterGain = context.createGain()
    masterGain.gain.value = 0.1
    masterGain.connect(context.destination)

    oscs = [0..10].map ->
      vco = context.createOscillator()
      vco.start(0)
      vco.type = vco.TRIANGLE

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
      220 * pow(2, x)

    handler = ({identifier, x, y}) ->
      {frequency, gain} = oscs[identifier]

      frequency.value = freq(x)
      gain.value = 1 - y

    canvas.on "touch", handler
    canvas.on "move", handler
    canvas.on "release", ({identifier}) ->
      {gain} = oscs[identifier]

      gain.value = 0
