export const openInNewTab = (url) => {
  window.open(url, "_black").focus();
};

export const formatToUSD = (num) => {
  const numString = `${num}`;
  const dollars = numString.slice(0, numString.length - 2);
  const cents = numString.slice(numString.length - 2);
  return `${dollars}.${cents}`;
};

export const popularityToStart = (num) => {
  return num / 20;
};

export const sortAlbumNames = (inputArray, dir) => {
  const arr = [...inputArray];

  if (dir) {
    arr.sort((a, b) => {
      if (a.name < b.name) {
        return -1;
      }
      return 0;
    });
    return arr;
  }
  arr.sort((a, b) => {
    if (a.name > b.name) {
      return -1;
    }
    return 0;
  });
  return arr;
};

export const sortArtistName = (inputArray, dir) => {
  const arr = [...inputArray];

  if (dir) {
    arr.sort((a, b) => {
      if (a.artist.name < b.artist.name) {
        return -1;
      }
      return 0;
    });
    return arr;
  }
  arr.sort((a, b) => {
    if (a.artist.name > b.artist.name) {
      return -1;
    }
    return 0;
  });
  return arr;
};

export const sortPopularityScore = (inputArray, dir) => {
  const arr = [...inputArray];

  if (dir) {
    arr.sort((a, b) => {
      if (a.popularity < b.popularity) {
        return -1;
      }
      return 0;
    });
    return arr;
  }
  arr.sort((a, b) => {
    if (a.popularity > b.popularity) {
      return -1;
    }
    return 0;
  });
  return arr;
};

export const sortPriceAmount = (inputArray, dir) => {
  const arr = [...inputArray];

  if (dir) {
    arr.sort((a, b) => {
      if (a.price < b.price) {
        return -1;
      }
      return 0;
    });
    return arr;
  }
  arr.sort((a, b) => {
    if (a.price > b.price) {
      return -1;
    }
    return 0;
  });
  return arr;
};

export const totalOrderLineItems = (arr) => {
  const total = arr.lineItems.reduce(
    (acc, lineItem) => (acc += lineItem.vinyl.price * lineItem.qty),
    0
  );

  return `$${total ? formatToUSD(total) : "0.00"}`;
};

export const getLocalDateFromOrderDbCreatedDate = (str) => {
  const months = [
    null,
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];
  const year = str.slice(0, 4);
  let month = str.slice(5, 7);
  if (Number(month[0]) === 0) {
    month = month[1];
  }
  const day = str.slice(8, 10);
  return `${months[month]} ${day}, ${year}`;
};
