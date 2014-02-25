OSC Bank
========

A bank of oscillators

TODO: Figure out how to have a single frequency input control all harmonics.

    module.exports = ->
      line = context.createOscillator()
      line.frequency.value = 0
      line.type = line.SQUARE
      line.start(0)

      fundamental = context.createGain()
      fundamental.gain.value = 220

      line.connect(fundamental)

      out = context.createGain()
      out.gain.value = 1

      oscs = [0..4].map (n) ->
        overtone = context.createGain()
        overtone.gain.value = n

        fundamental.connect(overtone)

        osc = context.createOscillator()
        osc.start(0)
        osc.frequency.value = 220 * n # Math.pow(2, n)
        osc.type = osc.SINE

        overtone.connect(osc.frequency)

        gain = context.createGain()
        gain.gain.value = 1 / Math.pow(2, n)
        osc.connect(gain)
        gain.connect(out)

      frequency: fundamental.gain
      connect: (destination) ->
        out.connect(destination)
