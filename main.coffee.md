Synth
=====

Synthesizing sound using web audio and crying about it.

    require "./setup"
    LFO = require "./lfo"
    {pow} = Math

    global.context = new AudioContext

    masterGain = context.createGain()
    masterGain.gain.value = 0.1
    masterGain.connect(context.destination)

    vco = context.createOscillator()
    vco.start(0)
    vco.type = vco.SQUARE
    
    # Vibrato Effect
    LFO(vco.frequency, 7, 10)

    vca = context.createGain()
    vca.gain.value = 0.0

    # Tremolo Effect
    LFO(masterGain.gain, 11, 0.01)

    vco.connect(vca)
    vca.connect(masterGain)

    freq = (x) ->
      220 * pow(2, x)

    handler = (e) ->
      vco.frequency.value = freq( e.pageX / innerWidth)
      vca.gain.value = 1 - (e.pageY / innerHeight)

    document.addEventListener "mousedown", handler, false
    document.addEventListener "mousemove", handler, false
