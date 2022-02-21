import * as React from 'react';
import { isWeb } from '@utils/platform';
import { Helmet } from 'react-helmet';

interface LinkSharingPreviewProps {}

function LinkSharingPreview({}: LinkSharingPreviewProps) {
  return isWeb() ? (
    <Helmet>
      <meta property="og:URL" content="https://kenailabs.com/invitation" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Kari y Moy | Nuestra Boda 2022" />
      <meta
        property="og:description"
        content="Tenemos el placer de invitarte a formar parte de nuestra boda el proximo mes de mayo del presente año."
      />
      <meta
        property="og:image"
        content="https://github.com/moyolvera/nemiktilistli/blob/develop/assets/images/preview.jpg"
      />
    </Helmet>
  ) : (
    <></>
  );
}

export default LinkSharingPreview;
