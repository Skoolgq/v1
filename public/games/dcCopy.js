function copycontent() {
  let text = document.getElementById('myText').innerHTML;
  const copyContent = async () => {
    try {
      await navigator.clipboard.writeText(text);
      swal("Link copied!", "Paste the link in a new tab to open discord!", "success");
    } catch (err) {
      swal("rip", "an error occurred, sorry! DM fowntain#4848 with a screenshot to report the error!", "error");
    }
  }
}
