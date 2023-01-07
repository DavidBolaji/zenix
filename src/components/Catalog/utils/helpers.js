import { getImageSize } from "react-image-size";

export const getImage = async (url) => {
  return await getImageSize(url);
};
