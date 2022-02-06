import { utils } from '@raulmelo/core';

import { Image } from '../../MdxComponents/Image';

type SanityImageSource = Parameters<typeof utils['imgUrlFor']>;

export function ImageAdapter({
  value,
}: {
  value: { asset: SanityImageSource };
}) {
  const { asset } = value;
  const src = utils.imgUrlFor(asset).url();
  const imgDimensions = utils.getImageDimensionsFromSanityImageUrl(src);

  return <Image {...imgDimensions} src={src} />;
}
