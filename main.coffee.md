Synth
=====

Synthesizing sound using web audio and crying about it.

    require "./setup"
    {log, E:e, pow} = Math

    context = new AudioContext

    vco = context.createOscillator()
    vco.frequency.value = 440
    vco.start(0)

    vca = context.createGain()
    vca.gain.value = 0.0

    vco.connect(vca)
    vca.connect(context.destination)

    freq = (x) ->
      220 * pow(2, x)

    handler = (e) ->
      vco.frequency.value = freq( e.pageX / innerWidth)
      vca.gain.value = 1 - (e.pageY / innerHeight)

    document.addEventListener "mousedown", handler, false
    document.addEventListener "mousemove", handler, false
