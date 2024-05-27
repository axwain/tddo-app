import React from 'react';

type Props = React.PropsWithChildren<{
  error: boolean;
}>;

export const ErrorMessage: React.FC<Props> = ({ error, children }) => {
  if (error) {
    return <>{children}</>;
  }

  return <></>;
};
