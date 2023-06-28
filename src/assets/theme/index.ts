import { useSelector } from 'react-redux';

// 将fontColor交由redux进行管理
export const fontColor = (): string => {
  return useSelector((state: any) => state.Theme.theme.fontColor);
};

export const darkBackGroundColor = (): string => {
  return useSelector((state: any) => state.Theme.theme.darkBackGroundColor);
};

export const darkColor = (): any => {
  return useSelector((state: any) => state.Theme.theme.darkColor);
};
export const transparentWhite = (): any => {
  return useSelector((state: any) => state.Theme.theme.transparentWhite);
};
