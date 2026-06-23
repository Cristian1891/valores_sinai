import { PhotographyIcon } from '../../academy/icons/PhotographyIcon';
import { AudioIcon } from '../../academy/icons/AudioIcon';
import { MarketingIcon } from '../../academy/icons/MarketingIcon';
import { StreamingIcon } from '../../academy/icons/StreamingIcon';
import { VideoIcon } from '../icons/VideoIcon';
import { DirectionIcon } from '../icons/DirectionIcon';
import { PhotoCineIcon } from '../icons/PhotoCineIcon';
import { ProductionIcon } from '../icons/ProductionIcon';


export const COURSE_ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  video: VideoIcon,
  photo: PhotographyIcon,
  audio: AudioIcon,
  direction: DirectionIcon,
  marketing: MarketingIcon,
  streaming: StreamingIcon,
  photo_cine: PhotoCineIcon,
  production: ProductionIcon,
};