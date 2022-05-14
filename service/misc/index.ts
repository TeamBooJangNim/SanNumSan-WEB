export const getDateString = (date: Date) => {
  const fillZero = (target: number, count: number) => target.toString().padStart(count, '0');
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();
  return [fillZero(year, 4), fillZero(month, 2), fillZero(day, 2)].join('.');
};

export const getCanvasImageCropValues = (
  canvasWidth: number,
  canvasHeight: number,
  imageWidth: number,
  imageHeight: number,
) => {
  const widthRatio = imageWidth / canvasWidth;
  const heightRatio = imageHeight / canvasHeight;
  const ratio = Math.min(widthRatio, heightRatio);
  const imageCropWidth = canvasWidth * ratio;
  const imageCropHeight = canvasHeight * ratio;
  const shiftX = (imageWidth - imageCropWidth) / 2;
  const shiftY = (imageHeight - imageCropHeight) / 2;
  return { shiftX, shiftY, imageCropWidth, imageCropHeight };
};
