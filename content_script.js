// Put all the javascript code here, that you want to execute after page load.
document.querySelectorAll(".courseBox--assignments").forEach(async (box) => {
    let coursehtml = await fetch(box.parentElement.href)
      coursehtml = await coursehtml.text()
      let courseDOM = new DOMParser().parseFromString(coursehtml, 'text/html')
      let todoCount = courseDOM.querySelectorAll(".submissionStatus-warning + td .progressBar").length
      box.innerHTML += " (" + todoCount + " to do)"
  })