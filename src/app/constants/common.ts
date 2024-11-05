const formatPriceVND = (price: number) => {
  return (
    (Math.round(price / 1000) * 1000)
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ".") + "đ"
  );
};

export { formatPriceVND };
