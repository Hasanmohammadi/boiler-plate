interface DateFormatI {
  year: number;
  month: number;
  day: number;
}

interface IsDepartureDateBiggerI {
  departureDate: DateFormatI;
  arrivalDate: DateFormatI;
}

const isDepartureDateBigger = ({
  departureDate,
  arrivalDate,
}: IsDepartureDateBiggerI) => {
  if (departureDate.year > arrivalDate.year) {
    return true;
  }
  if (departureDate.month > arrivalDate.month) {
    return true;
  }
  if (departureDate.day > arrivalDate.day) {
    return true;
  }
  return false;
};

export default isDepartureDateBigger;
