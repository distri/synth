OSC Bank
========

A bank of oscillators

A single frequency input controls all harmonics.

    module.exports = ->
      line = generateLine()

      fundamental = context.createGain()
      fundamental.gain.value = 220

      line.connect(fundamental)

      out = context.createGain()
      out.gain.value = 1

      [1, 2, 7].map (n, i) ->
        overtone = context.createGain()
        overtone.gain.value = n

        fundamental.connect(overtone)

        gain = context.createGain()
        gain.gain.value = 1 / Math.pow(2, i + 1)
        gain.connect(out)

        [-5, 0, 5].map (n) ->
          osc = context.createOscillator()
          osc.frequency.value = 0
          osc.type = 'triangle'
          osc.start(0)
          osc.connect(gain)
          osc.detune = n

          overtone.connect(osc.frequency)

      filter = context.createBiquadFilter()
      filter.type = filter.ALLPASS
      filter.Q = 1

      fundamental.connect(filter.frequency)
      out.connect(filter)

      frequency: fundamental.gain
      connect: (destination) ->
        filter.connect(destination)

Helpers
-------

Return an 'oscillator' that emits a constant stream of 1s

    # Somewhat unreliable
    generateLine = ->
      # Most of this is a hack to get a constant 'voltage' line of 1
      # Phase offset a sine wave by 1/4 and lock it to zero frequency
      
      f = 110
      line = context.createOscillator()
      line.frequency.value = f
      line.type = line.SQUARE
      line.start(context.currentTime)
      line.frequency.setValueAtTime(0, context.currentTime + 1/(4 * f))

      return line

    # Occasional clicks and pops
    # Totally fails when console is open
    generateLine = ->
      line = context.createScriptProcessor(1024, 0, 1)
      line.onaudioprocess = ({outputBuffer}) ->
        n = 0
        length = outputBuffer.length

        data = outputBuffer.getChannelData(0)

        while n < length
          data[n] = 1
          n += 1

      return line

    generateLine = ->
      size = 4096
      channels = 1
      buffer = context.createBuffer(channels, size, context.sampleRate)
      data = buffer.getChannelData(0)

      [0...size].forEach (i) ->
        data[i] = 1

      line = context.createBufferSource()

      line.buffer = buffer
      line.loop = true
      line.start(0)

      return line

    # TODO: This doesn't work
    generateLine3 = ->
      size = 2
      real = new Float32Array(size)
      imag = new Float32Array(size)
      real[0] = 2.828
      wave = context.createPeriodicWave(real, imag)

      line = context.createOscillator()
      line.setPeriodicWave(wave)
      line.start(0)

      return line
