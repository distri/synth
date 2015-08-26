Audio Viz
=========

    module.exports = (analyser) ->
      bins = analyser.frequencyBinCount
      frequencyDomain = new Uint8Array(bins)
      timeDomain = new Uint8Array(bins)

      draw: (canvas) ->
        analyser.getByteFrequencyData(frequencyDomain)
        analyser.getByteTimeDomainData(timeDomain)

        canvas.fill "black"

        width = canvas.width()
        height = canvas.height()
        ctx = canvas.context()
        step = width / bins

        # Draw waveforms or frequency spectrum
        ratio = canvas.height() / 255
        Array::forEach.call frequencyDomain, (value, index) ->
          canvas.drawRect
            x: index
            y: ratio * (255 - value)
            width: 1
            height: ratio * value
            color: "blue"

        ctx.lineWidth = 2
        ctx.strokeStyle = "#F00"

        Array::forEach.call timeDomain, (value, index) ->
          v = (value - 128) / 128
          x = index * step
          y = (1 + v) * (height/2)

          if index is 0
            ctx.beginPath()
            ctx.moveTo x, y
          else
            ctx.lineTo x, y

        ctx.stroke()
