export const formatTimestamp = (timestamp) => {
  const date = new Date(timestamp * 1000);

  const dateOptions = {
    day: "numeric",
    month: "short",
    year: "numeric",
  };
  const timeOptions = {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
    timeZoneName: "short",
  };

  const formattedDate = new Intl.DateTimeFormat("id-ID", dateOptions).format(
    date
  );
  const formattedTime = new Intl.DateTimeFormat("en-US", timeOptions).format(
    date
  );

  return `${formattedDate} - ${formattedTime}`;
};

export const formatUsername = (encodedString) => {
  return decodeURIComponent(encodedString).replace(/\+/g, " ");
};
