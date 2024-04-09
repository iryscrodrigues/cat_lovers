document.getElementById("formCat").addEventListener("submit", function (event) {
  var linkInput = document.getElementById("catphotourl");
  var linkValue = linkInput.value;

  if (!isValidUrl(linkValue)) {
    event.preventDefault();
    alert("Please, enter a valid link.");
  } else {
    alert("The form has been submitted successfully!");
  }
});

function isValidUrl(url) {
  var urlPattern = new RegExp(
    "^(https?:\\/\\/)?" +
      "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" +
      "((\\d{1,3}\\.){3}\\d{1,3}))" +
      "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" +
      "(\\?[;&a-z\\d%_.~+=-]*)?" +
      "(\\#[-a-z\\d_]*)?$",
    "i"
  );
  return urlPattern.test(url);
}
