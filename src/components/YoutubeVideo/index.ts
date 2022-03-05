import { isWeb } from '@utils/platform';
import YoutubeVideo from './YoutubeVideo';
import YoutubeVideoWeb from './YoutubeVideo.web';

export default isWeb() ? YoutubeVideoWeb : YoutubeVideo;
