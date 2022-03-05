import * as React from 'react';
import { View } from 'react-native';
import { WebView, WebViewMessageEvent } from 'react-native-webview';
import { LARGE_MODAL_SIZE } from '@utils/platform';
import styles from './YoutubeVideo.styles';

interface YoutubeVideoProps {
  onComplete: () => void;
}

function YoutubeVideo({ onComplete }: YoutubeVideoProps) {
  function onMessage(event: WebViewMessageEvent) {
    if (event.nativeEvent.data === 'completed') {
      onComplete();
    }
  }

  return (
    <View style={styles.wrapper}>
      <WebView
        bounces={false}
        javaScriptEnabled
        style={styles.view}
        onMessage={onMessage}
        source={{
          html: `
            <!DOCTYPE html>
            <html>
              <head>
                <script src="https://www.youtube.com/player_api"></script>
              </head>
              <body style="margin: 0px">
                <div id="player"></div>
              </body>
              <script>
                  // create youtube player
                  var player;
                  function onYouTubePlayerAPIReady() {
                    player = new YT.Player('player', {
                      height: '${LARGE_MODAL_SIZE}',
                      width: '${LARGE_MODAL_SIZE}',
                      videoId: 'Lv-iaEqDu6M',
                      playerVars: {
                        controls: 0,
                        mute: 1,
                        autoplay: 1,
                        allow: 'autoplay',
                      },
                      events: {
                        'onReady': onPlayerReady,
                        'onStateChange': onPlayerStateChange
                      }
                    });
                  }

                  function onPlayerReady(event) {
                    event.target.playVideo();

                    setTimeout(() => {
                      event.target.unMute();
                    }, 500);
                  }

                  function onPlayerStateChange(event) {   
                    if(event.data === 0) {            
                      window.parent.postMessage("completed")
                    }
                  }
              </script>
            </html>
            `
        }}
        automaticallyAdjustContentInsets={false}
      />
    </View>
  );
}

export default YoutubeVideo;
