import React from 'react';
import { BounceLoader } from 'react-spinners';
import colors from '../utils/theme';

const Loader = ({ isLoading, loadingText }) => (
  <div className="d-flex flex-row align-items-center">
    <BounceLoader size="40" color={colors.BrandBlue} loading={isLoading} />
    {
      loadingText && isLoading ? <b>{loadingText}</b> : null
    }
  </div>
);

export default Loader;
