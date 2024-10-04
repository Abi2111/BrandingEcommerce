const cursor = document.querySelector('.cursor');
const dragCursor = document.querySelector('.brand_cursor');
window.addEventListener('mousemove', function (e) {
  cursor.style.top = e.pageY + 'px';
  cursor.style.left = e.pageX + 'px';
  dragCursor.style.top = e.pageY + 'px';
  dragCursor.style.left = e.pageX + 'px';
});
