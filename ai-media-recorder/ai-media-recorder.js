function initUserMedia() {
	if (!navigator.mediaDevices) {
		navigator.mediaDevices = {}
	}

	if (!navigator.mediaDevices.getUserMedia) {
		navigator.mediaDevices.getUserMedia = function (constraints) {
			let getUserMedia = navigator.webkitGetUserMedia || navigator.mozGetUserMedia;

			if (!getUserMedia) {
				return Promise.reject(new Error('getUserMedia is not implemented in this browser'))
			}
			return new Promise(function (resolve, reject) {
				getUserMedia.call(navigator, constraints, resolve, reject);
			})
		}
	}
}

function checkTypeSupported() {
  let types = [
    "video/webm",
    "audio/webm",
    "video/webm\;codecs=vp8",
    "video/webm\;codecs=daala",
    "video/webm\;codecs=h264",
    "audio/webm\;codecs=opus",
    "video/mpeg"
  ]

  for (var i in types) {
   console.log( "Is " + types[i] + " supported? " + (MediaRecorder.isTypeSupported(types[i]) ? "Maybe!" : "Nope :("));
  }
}

initUserMedia()
checkTypeSupported()

let Recorder = function (constraints, option) {
  let recorder = null
  let success = option.success
  let mediaRecorder = null
  let videoBlob = null
  let chunks = []

  function init() {
    navigator.mediaDevices.getUserMedia(constraints,
      stream => {
        mediaRecorder = new MediaRecorder(stream, {
          audioBitsPerSecond : 16000,
          videoBitsPerSecond : 256000,
          mimeType : 'video/webm;codecs=vp9'
        })

        mediaRecorder.start(5000)

        mediaRecorder.onstop = function(e) {
          videoBlob = new Blob(chunks, { type: 'video/mp4' })
          chunks = []
        }

        mediaRecorder.ondataavailable = function(e) {
          chunks.push(e.data)
        }
        success(stream)
      },
      error => {
       console.log(error.name + ": " + error.message)
      }
    )
  }

  init()
}

window.Recorder = Recorder
