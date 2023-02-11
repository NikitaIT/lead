import { Typography } from '@mui/material';
import { faker } from '@faker-js/faker';

import { ConsultantInfo } from '.';
import image from './533b24a6c46ad87643177f70a04cc553.jpg';
// import mdx from './ConsultantInfo.mdx';

export default {
  title: 'Components/Consultant info',
  parameters: {
    docs: {
      // page: mdx,
    },

    options: {
      showPanel: true,
    },
  },
  component: ConsultantInfo,
};
const info = {
  consultantName: faker.name.fullName(),
  consultantTitle: 'Consultant',
  consultantNumber: faker.datatype.number() + '',
};
export const BasicUsage = function BasicUsage() {
  return (
    <ConsultantInfo
      consultantName="Meme Emo long name which can overflow"
      consultantTitle={info.consultantTitle}
      consultantNumber={info.consultantNumber}
    />
  );
};

export const LargeSize = function LargeSize() {
  return (
    <ConsultantInfo
      consultantName="Meme Emo long name which can overflow"
      consultantTitle={info.consultantTitle}
      consultantNumber={info.consultantNumber}
      size="large"
    />
  );
};

export const ChildrenVariant = function ChildrenVariant() {
  return (
    <ConsultantInfo
      consultantName="Meme Emo long name which can overflow"
      consultantTitle={info.consultantTitle}
      consultantNumber={info.consultantNumber}
    >
      My text
    </ConsultantInfo>
  );
};

export const LargeSizeVariant = function LargeSizeVariant() {
  return (
    <ConsultantInfo
      consultantName="Meme Emo long name which can overflow"
      consultantTitle={info.consultantTitle}
      consultantNumber={info.consultantNumber}
      size="large"
    >
      Children
    </ConsultantInfo>
  );
};

export const ProfilePicture = function ProfilePicture() {
  return (
    <ConsultantInfo
      profilePictureUrl={image}
      consultantName={info.consultantName}
      consultantTitle={info.consultantTitle}
      consultantNumber={info.consultantNumber}
    />
  );
};

export const WithChildren = function WithChildren() {
  return (
    <ConsultantInfo
      profilePictureUrl={image}
      consultantName={info.consultantName}
      consultantTitle={info.consultantTitle}
      consultantNumber={info.consultantNumber}
    >
      My text content
    </ConsultantInfo>
  );
};

export const WithChildrenLarge = function WithChildrenLarge() {
  return (
    <ConsultantInfo
      profilePictureUrl={image}
      consultantName={info.consultantName}
      consultantTitle={info.consultantTitle}
      consultantNumber={info.consultantNumber}
      size="large"
    >
      <Typography gutterBottom variant="subtitle1">
        My Why
      </Typography>
      <Typography>
        “To leave the world better than I found it and be remembered by the
        people whose lives I touched as a force for good in their lives.”
      </Typography>
    </ConsultantInfo>
  );
};
WithChildrenLarge.parameters = {
  loki: { skip: true },
};
