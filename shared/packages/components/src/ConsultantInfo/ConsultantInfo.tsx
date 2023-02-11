import { unstable_composeClasses as composeClasses } from '@mui/base';
import { useThemeProps } from '@mui/material';
import type { OverridableComponent } from '@mui/material/OverridableComponent';
import clsx from 'clsx';
import { forwardRef, useMemo } from 'react';

import { capitalize } from '../utils';
import { getConsultantInfoUtilityClass } from './consultantInfoClasses';
import type {
  ConsultantInfoProps,
  ConsultantInfoTypeMap,
  OwnerState,
} from './ConsultantInfoTypes';
import { Size } from '../baseTypes';

import {
  ProfilePicture,
  ConsultantName,
  ConsultantNumber,
  ConsultantTitle,
  Content,
  Icon,
  ConsultantInfoRoot,
} from './components';

export const getConsultantInfoSlots = (ownerState: OwnerState) => {
  const { size } = ownerState;

  return {
    root: ['root', `size${capitalize(size)}`],
    consultantTitle: ['consultantTitle'],
    profilePicture: ['profilePicture'],
    consultantName: ['consultantName'],
    consultantNumber: ['consultantNumber'],
    content: ['content'],
    avatarIcon: ['avatarIcon'],
  };
};

const useUtilityClasses = (ownerState: OwnerState) => {
  const { classes } = ownerState;

  const slots = getConsultantInfoSlots(ownerState);

  const composedClasses = composeClasses(
    slots,
    getConsultantInfoUtilityClass,
    classes
  );

  return composedClasses;
};

export const ConsultantInfo = forwardRef<HTMLDivElement, ConsultantInfoProps>(
  function ConsultantInfo(inProps: ConsultantInfoProps, ref) {
    const props = useThemeProps({
      props: inProps,
      name: 'MuiLeadConsultantInfo',
    });

    const {
      profilePictureUrl,
      consultantName,
      consultantTitle,
      consultantNumber,
      className,
      size = Size.medium,
      component = 'div',
      children,
      ...other
    } = props;

    const ownerState: OwnerState = useMemo(
      () => ({
        ...props,
        size,
        hasChild: Boolean(children),
      }),
      [props, size, children]
    );

    const classes = useUtilityClasses(ownerState);

    const imageProps = useMemo(
      () => ({
        ownerState,
        className: classes.profilePicture,
        ...(profilePictureUrl && {
          alt: 'profile-picture',
          src: profilePictureUrl,
        }),
        ...(!profilePictureUrl && {
          children: (
            <Icon ownerState={ownerState} className={classes.avatarIcon} />
          ),
        }),
      }),
      [profilePictureUrl, classes, ownerState]
    );

    const consultantInfoTitle = useMemo(() => {
      if (ownerState.hasChild) {
        return (
          <ConsultantTitle
            ownerState={ownerState}
            className={classes.consultantTitle}
          >
            {consultantTitle} | {consultantNumber}
          </ConsultantTitle>
        );
      }

      return (
        <>
          <ConsultantTitle
            ownerState={ownerState}
            className={classes.consultantTitle}
          >
            {consultantTitle}
          </ConsultantTitle>
          <ConsultantNumber
            ownerState={ownerState}
            className={classes.consultantNumber}
          >
            {consultantNumber}
          </ConsultantNumber>
        </>
      );
    }, [classes, consultantTitle, consultantNumber, ownerState]);

    return (
      <ConsultantInfoRoot
        ref={ref}
        ownerState={ownerState}
        className={clsx(classes.root, className)}
        as={component}
        {...other}
      >
        <ProfilePicture {...imageProps} />
        <ConsultantName
          noWrap
          ownerState={ownerState}
          className={classes.consultantName}
          variant="h6"
          gutterBottom={false}
        >
          {consultantName}
        </ConsultantName>
        {consultantInfoTitle}
        {children ? (
          <Content
            as="span"
            ownerState={ownerState}
            className={classes.content}
          >
            {children}
          </Content>
        ) : null}
      </ConsultantInfoRoot>
    );
  }
) as OverridableComponent<ConsultantInfoTypeMap>;
