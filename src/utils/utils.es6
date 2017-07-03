import moment from "moment";

export const timeSeries = (step, start, end) => {
  const series = [];
  const dt = new Date(1970, 0, 1, 0, 0, 0, 0);

  while (dt.getDate() === 1) {
    const pointFormatted = moment(dt).format("hh:mm a");
    const point = moment(dt);
    const startDate = moment(new Date(`1970-01-01 ${start}`));
    const endDate = moment(new Date(`1970-01-01 ${end}`));
    dt.setMinutes(dt.getMinutes() + step);

    if (startDate && moment(point).isBefore(startDate)) {
      return;
    }
    if (endDate && moment(point).isAfter(endDate)) {
      return;
    }

    series.push(pointFormatted);
  }

  return series;
};

export const getCoords = (el) => {
  const box = el.getBoundingClientRect();
  const body = document.body;
  const docEl = document.documentElement;

  const scrollTop = window.pageYOffset || docEl.scrollTop || body.scrollTop;
  const scrollLeft = window.pageXOffset || docEl.scrollLeft || body.scrollLeft;

  const clientTop = docEl.clientTop || body.clientTop || 0;
  const clientLeft = docEl.clientLeft || body.clientLeft || 0;

  const top = (box.top + scrollTop) - clientTop;
  const left = (box.left + scrollLeft) - clientLeft;

  return {
    top: Math.round(top),
    left: Math.round(left),
  };
};

export default { timeSeries, getCoords };
