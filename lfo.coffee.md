LFO Testing
===========

    module.exports = (target, frequency=10, amplitude=0.05) ->
      lfo = context.createOscillator()
      lfo.frequency.value = frequency
      lfo.type = lfo.SINE
      lfo.start(0)
  
      lfoGain = context.createGain()
      lfoGain.gain.value = amplitude

      lfo.connect(lfoGain)
      lfoGain.connect(target)
