import React from 'react';
import { Card } from 'antd';
import HyWrapper from '@/components/card/style';

const { Meta } = Card;

interface CardComponentProps {
  ImageSrc?: string;
  theTitle?: string;
  theDescription?: string;
}

const TheCard: React.FC<CardComponentProps> = ({ ImageSrc, theDescription, theTitle }) => (
  <HyWrapper>
    <Card
      className="Card"
      hoverable
      style={{ width: 195, height: 255 }}
      cover={<img alt="example" className="coverImage" src={ImageSrc} />}
    >
      <Meta title={theTitle} description={theDescription} />
    </Card>
  </HyWrapper>
);

export default TheCard;
