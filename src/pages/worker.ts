globalThis.onmessage = function (event) {
  const { left, top } = event.data
  //   const left = clientX - leftX + newleft
  //   const top = clientY - topY + newtop

  globalThis.postMessage({ left, top })
}
