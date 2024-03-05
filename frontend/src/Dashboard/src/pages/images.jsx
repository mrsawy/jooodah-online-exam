import { Helmet } from 'react-helmet-async';

import { ImagesView } from './../sections/images/view';

// ----------------------------------------------------------------------

export default function BlogPage() {
  return (
    <>
      <Helmet>
        <title> Media - Images </title>
      </Helmet>

      <ImagesView />
    </>
  );
}
